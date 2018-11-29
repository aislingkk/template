---
title: What is the attitude of the public towards data center energy on YouTube?
cover: /assets/images/covers/vis0602.png
number: 6
---
### Description
The last protoco, we focus on social media, rarely talk about data centers.
Compared to the social media that combines text such as Twitter/facebook, Youtube with dynamic videos is a media that potentially draws the public's attention to the data center. We selected 12 videos about the data center with relatively high playback volume of 5W or more,  technical sense of the screens, and attracting titles.

By analyzing the emotions implied by the comments in the video, we found that the emotions expressed by the data in the data center are positive (JOY/TENTATIVE/ANALYTICAL/COMFIDENT).
And video commentary on issue of data center energy consumption is also more biased towards neutral temptations. That shows that for youtube which is close to public, the energy consumption of the data center is not paid much attention, and people are often subject to some story-telling, green data with full of technology from the star companies (Google, Microsoft, FB) . 


### Protocol
![example of protocol]({{ '/assets/images/protocols/protocols_6.png' | relative_url }})

We used the YOUTUBE DATA TOOLS to get the comments from 12 videos on the YOUTUBE platform as datasets, and then filtered these through some certain condition and standard, removing the comments with 0 likes to get valid comments. 
After cleaning data,we retained nearly 7,000 comments and maked sentiment analysis with IBM TONE ANALYZER,whcih is a tool that effectively filters and classifies comments into seven emotion types. Finally,we import the Json file analyzed by emotion on E CHARTS (a data visualization tool developed by Baidu),and get visualization.


### Data
##### Data Source: [DensityDesign](http://densitydesign.org/)
##### Timestamp: 19/10/2018
##### [View Data (500Kb)](http://densitydesign.org/)
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
