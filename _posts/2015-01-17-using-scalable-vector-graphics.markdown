---
layout: post
title: "Experimenting with Scalable Vector Graphics"
date: 2015-01-17
categories: d3
teaser: "Experimenting with SVGs from Scott Murray's tutorial"
author: "Roshan Narain"
---
<svg width="500" height="200">
	<rect x="0" y="0" width="500" height="50"/>
	<circle cx="250" cy="75" r="25" />
	<ellipse cx="250" cy="125" rx="100" ry="25" />
	<line x1="0" y1="150" x2="500" y2="50" stroke="black" />
	<line x1="0" y1="50" x2="500" y2="150" stroke="black" />
	<text x="185" y="175" font-family="sans-serif"
 font-size="25" fill="gray">Easy-peasy</text>
</svg>
Today I'll be playing around with SVGs and trying to understand what they can provide in terms of data visualisation.

<svg id="further" width="500" height="100">
	<circle cx="25" cy="25" r="22" class="pumpkin"/>
	<rect x="0" y="50" width="30" height="30" fill="purple" />
	<rect x="15" y="55" width="30" height="30" fill="blue" />
	<rect x="30" y="60" width="30" height="30" fill="cyan" />
	<rect x="45" y="65" width="30" height="30" fill="yellow" />
	<rect x="60" y="70" width="30" height="30" fill="red" />
</svg>
<svg width="500" height="50">
	<circle cx="25" cy="25" r="22" fill="rgba(128,0,128,1.0)" />
	<circle cx="50" cy="25" r="22" fill="rgba(0,0,255,0.8)" />
	<circle cx="75" cy="25" r="22" fill="rgba(0,255,0,0.6)" />
	<circle cx="100" cy="25" r="22" fill="rgba(255,255,0,0.4)" />
	<circle cx="125" cy="25" r="22" fill="rgba(255,0,0,0.2" />
</svg>
<svg width="500" height="50">
	<circle cx="25" cy="25" r="20" fill="rgba(128,0,128,0.75)" stroke="rgba(0,255,0,0.25)" stroke-width="10"/>
	<circle cx="75" cy="25" r="20" fill="rgba(0,255,0,0.75)" stroke="rgba(0,0,255,0.25)" stroke-width="10" />
	<circle cx="125" cy="25" r="20" fill="rgba(255,255,0,0.75)" stroke="rgba(255,0,0,0.25)" stroke-width="10" />
</svg>

Above are some examples of generating SVGs with d3.js.