<h1 id="ip2locationio-ip-geolocation-api">IP2Location.io IP Geolocation API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

IP2Location.io IP Geolocation API provides RESTful API to obtain visitors’ geolocation information such as country, region, city, latitude & longitude, ZIP code, time zone, ASN, ISP, domain, net speed, IDD code, area code, weather station data, MNC, MCC, mobile brand, elevation, usage type, address type, advertisement category and proxy data with an IP address.

Base URLs:

* <a href="https://api.ip2location.io">https://api.ip2location.io</a>

<h1 id="ip2locationio-ip-geolocation-api-default">Default</h1>

## get/

> Code samples

```bash
curl 'https://example.com/?key=string&ip=8.8.8.8' \
  -H 'Accept: application/json'
```

`GET /`

Geolocate user's location information via IP address

<h3 id="get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|query|string|true|API key.|
|ip|query|string|true|IP address (IPv4 or IPv6) for reverse IP location lookup purposes. If not present, the server IP address will be used for the location lookup.|
|format|query|string|false|Format of the response message.|
|lang|query|string|false|Translation information. The translation only applicable for continent, country, region and city name. This parameter is only available for Plus and Security plan only.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|lang|ar|
|lang|cs|
|lang|da|
|lang|de|
|lang|en|
|lang|es|
|lang|et|
|lang|fi|
|lang|fr|
|lang|ga|
|lang|it|
|lang|ja|
|lang|ko|
|lang|ms|
|lang|nl|
|lang|pt|
|lang|ru|
|lang|sv|
|lang|tr|
|lang|vi|
|lang|zh-cn|
|lang|zh-tw|

> Example responses

> 200 Response

```json
"{\"ip\":\"8.8.8.8\",\"country_code\":\"US\",\"country_name\":\"United States of America\",\"region_name\":\"California\",\"city_name\":\"Mountain View\",\"latitude\":37.405992,\"longitude\":-122.078515,\"zip_code\":\"94043\",\"time_zone\":\"-07:00\",\"asn\":\"15169\",\"as\":\"Google LLC\",\"isp\":\"Google LLC\",\"domain\":\"google.com\",\"net_speed\":\"T1\",\"idd_code\":\"1\",\"area_code\":\"650\",\"weather_station_code\":\"USCA0746\",\"weather_station_name\":\"Mountain View\",\"mcc\":\"-\",\"mnc\":\"-\",\"mobile_brand\":\"-\",\"elevation\":32,\"usage_type\":\"DCH\",\"address_type\":\"Anycast\",\"continent\":{\"name\":\"North America\",\"code\":\"NA\",\"hemisphere\":[\"north\",\"west\"],\"translation\":{\"lang\":\"ko\",\"value\":\"북아메리카\"}},\"country\":{\"name\":\"United States of America\",\"alpha3_code\":\"USA\",\"numeric_code\":840,\"demonym\":\"Americans\",\"flag\":\"https://cdn.ip2location.io/assets/img/flags/us.png\",\"capital\":\"Washington, D.C.\",\"total_area\":9826675,\"population\":331002651,\"currency\":{\"code\":\"USD\",\"name\":\"United States Dollar\",\"symbol\":\"$\"},\"language\":{\"code\":\"EN\",\"name\":\"English\"},\"tld\":\"us\",\"translation\":{\"lang\":\"ko\",\"value\":\"미국\"}},\"region\":{\"name\":\"California\",\"code\":\"US-CA\",\"translation\":{\"lang\":\"ko\",\"value\":\"캘리포니아주\"}},\"city\":{\"name\":\"Mountain View\",\"translation\":{\"lang\":null,\"value\":null}},\"time_zone_info\":{\"olson\":\"America/Los_Angeles\",\"current_time\":\"2022-05-09T23:37:36-07:00\",\"gmt_offset\":-25200,\"is_dst\":true,\"sunrise\":\"06:03\",\"sunset\":\"20:06\"},\"geotargeting\":{\"metro\":\"807\"},\"ads_category\":\"IAB19\",\"ads_category_name\":\"Technology & Computing\",\"is_proxy\":false,\"proxy\":{\"last_seen\":9,\"proxy_type\":\"DCH\",\"threat\":\"-\",\"provider\":\"-\"}}"
```

<h3 id="get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get response from IP lookup|None|

<aside class="success">
This operation does not require authentication
</aside>
