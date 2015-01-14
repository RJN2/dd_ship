---
layout: post
title: "First Post"
date: 2015-01-07 22:50:30
teaser: "The first post for the blog."
author: "Roshan Narain"
---

My first post for Jekyll. Try to say something poignant.


Hello world!

On September 29, 2014, CloudFlare introduced Universal SSL for the public. To be able to offer TLS certificates for free, they are using the extension to TLS protocol called Server Name Indication. This allows them to be able to serve a certificate for multiple domains using only one IP address, reducing the hosting cost. Since Heroku offers a piggyback TLS certificate via *.herokuapp.com, you can easily take advantage of this free TLS certificate offer and add TLS support (which commonly called SSL) to your website for free.

##Edit your DNS records

If you already have your domain name hosted somewhere, CloudFlare will display your current DNS configuration (aka zone configuration). You can customize those settings to your needs, such as retaining Google Apps configuration.

The important part here is the value for your apex and the www subdomain. You will need to change or create those two as CNAME records pointing to your .herokuapp.com address. You may also add another CNAME record for your staging site, pointing to another Heroku app.