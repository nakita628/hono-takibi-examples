<h1 id="geodatasource-location-search">GeoDataSource Location Search v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

GeoDataSource™ Web Service is a REST API enable user to lookup for a city by using latitude and longitude coordinate. It will return the result in either JSON or XML containing the information of country, region, city, latitude and longitude. Visit https://www.geodatasource.com/web-service for further information.

Base URLs:

* <a href="https://api.geodatasource.com">https://api.geodatasource.com</a>

<h1 id="geodatasource-location-search-default">Default</h1>

## get/city

> Code samples

```bash
curl 'https://example.com/city?key=string&lng=0&lat=0' \
  -H 'Accept: application/json'
```

`GET /city`

Get City name by using latitude and longitude

<h3 id="getcity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|query|string|true|none|
|lng|query|number|true|none|
|lat|query|number|true|none|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
"{\"country\":\"\",\"region\":\"\",\"city\":\"\",\"latitude\":\"\",\"longitude\":\"\"}"
```

<h3 id="getcity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get response from longitude latitude lookup|Inline|

<aside class="success">
This operation does not require authentication
</aside>
