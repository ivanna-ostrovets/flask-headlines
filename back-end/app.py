import feedparser
import json

from urllib.request import urlopen
from urllib.parse import quote

from flask import Flask, jsonify, request, make_response

app = Flask(__name__)

RSS_FEEDS = {
    'bbc': 'http://feeds.bbci.co.uk/news/rss.xml',
    'cnn': 'http://rss.cnn.com/rss/edition.rss',
    'fox': 'http://feeds.foxnews.com/foxnews/latest',
    'iol': 'http://www.iol.co.za/cmlink/1.640'
}
WEATHER_URL = "http://api.openweathermap.org/data/2.5/weather?q={}&units=metric&appid=597ee4cceccb91ff4d37f707e5d13a02"
CURRENCY_URL = "https://openexchangerates.org//api/latest.json?app_id=8808760634504eebb77b6e98d924cc43"


@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    if request.method == 'OPTIONS':
        response.headers['Access-Control-Allow-Methods'] = 'DELETE, GET, POST, PUT'
        headers = request.headers.get('Access-Control-Request-Headers')
        if headers:
            response.headers['Access-Control-Allow-Headers'] = headers
    return response


@app.route("/api/news")
def news():
    return make_response(jsonify([key for key, value in RSS_FEEDS.items()]))


@app.route("/api/news/<channel>")
def get_news(channel):
    feed = feedparser.parse(RSS_FEEDS[channel])
    return make_response(jsonify(feed['entries']))


@app.route("/api/weather")
def weather():
    city = request.args.get('city')
    query = quote(city)
    url = WEATHER_URL.format(query)
    data = urlopen(url).read()
    parsed = json.loads(data)
    weather = None

    if parsed.get('weather'):
        weather = {
            'description': parsed['weather'][0]['description'],
            'temperature': parsed['main']['temp'],
            'city': parsed['name'],
            'country': parsed['sys']['country']
        }

    return make_response(jsonify(weather))


@app.route("/api/currencies")
def currencies():
    return make_response(jsonify(get_currencies()))


@app.route("/api/rate")
def rate():
    currencies = get_currencies()
    from_curreny = request.args.get('from')
    to_currency = request.args.get('to')

    from_rate = currencies.get(from_curreny.upper())
    to_rate = currencies.get(to_currency.upper())

    return make_response(jsonify(to_rate / from_rate))


def get_currencies():
    currencies = urlopen(CURRENCY_URL).read()
    return json.loads(currencies).get('rates')


if __name__ == '__main__':
    app.run(port=3000, debug=True)
