import json
from time import time
from random import random
from flask import Flask, render_template, make_response
import pandas as pd
import numpy as np
import glob
import json

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('index.html', data='test')

@app.route('/live-data')
def live_data():
    # Create a PHP array and echo it as JSON
    files = glob.glob("*-*-*_*-*-*.csv")
    df=pd.read_csv(files[0], names=['Name','UUID','Major','Minor','formattedtime','time','temperature','humidity','rssi','data'])
    #Major over 10 is not the packet we want
    df=df[(df.Major < 10)]
    series = getSeries(df,'temperature')
    response = make_response(json.dumps(series))
    response.content_type = 'application/json'
    return response

def getSeries(df,option):
    #option is 'temperature' 'humidity'
    major_type = df.Major.unique()
    series = '['
    for i in range(len(major_type)):
        major = major_type[i]
        series += '{"name":"Major ' + str(major) + '","data":['
        for index, row in df.iterrows():
            if row['Major'] == major:
                series += '[' + str(row['time']) + ',' + str(int(row[option])) + '],'
                   
        series = series[:-1]
        series += ']},'

    series = series[:-1] + ']'
    return series

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)
