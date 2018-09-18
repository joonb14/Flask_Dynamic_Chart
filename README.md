# Flask Dynamic Chart (feat. Highchart)
### based on flask and Highchart js

Korean version of Tutorial is in my Naver blog: https://blog.naver.com/joonb14/221332761068 <br>

get Data from node.js application which sends json data <br>
(since it sends raw json object not stringified one)<br>
just use it as object<br>
<br>
Check the Major value<br>
if its already in chart - addPoint<br>
else - addSeries then addPoint<br><br>
### Screenshot of Dynamic Chart
This is what I made<br>
A little complicated because I used csv file to Init the Chart <br>
then used dynamically received JSON data<br>
The App result will look like this on Chrome<br/>
<br/>
<img width="800" src="https://user-images.githubusercontent.com/30307587/45676473-c160aa80-bb6c-11e8-90e3-cf803f5a0857.PNG">

## Tutorial

Tutorial for Above application on flask<br/>
Used and modified codes from<br/>
Highcharts example: https://www.highcharts.com/docs/working-with-data/data-from-a-database <br/>
flask-live-chart: https://github.com/tdiethe/flask-live-charts <br/>
The App result will look like this on Chrome<br/>
<br/>
<img src="https://postfiles.pstatic.net/MjAxODA4MDVfMjA2/MDAxNTMzMzk1NjU3MDU0.7b68qkuqmY8bRAOwmVUB7cNT0YpyQnqu7ZWTLhC7-BMg.6Rvjn7UVCu2oNan1M6vyYsO8UosOC4gMgWpekByn60Ig.GIF.joonb14/%EA%B7%B8%EB%9E%98%ED%94%84.gif?type=w966">

## Tutorial for Initiating Highcharts with CSV
I also have tutorial for this: https://github.com/joonb14/CSVtoHighchart.git <br>
Checkout the link above
