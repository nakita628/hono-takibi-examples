<h1 id="ip2location-ip-geolocation">IP2Location IP Geolocation v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

IP2Location web service providing a service to do a reverse lookup of an IP address to an ISO3166 country code, region or state, city, latitude and longitude, ZIP/Postal code, time zone, Internet Service Provider (ISP) or company name, domain name, net speed, area code, weather station code, weather station name, mobile country code (MCC), mobile network code (MNC) and carrier brand, elevation, usage type, address type and IAB category. There are also 7 categories of additional add-on response fields supported such as metro, olson time zone, translations and more. Refer to https://www.ip2location.com/web-service/ip2location for further information.

Base URLs:

* <a href="https://api.ip2location.com/v2">https://api.ip2location.com/v2</a>

<h1 id="ip2location-ip-geolocation-default">Default</h1>

## get/

> Code samples

```bash
curl 'https://example.com/?ip=8.8.8.8&key=string' \
  -H 'Accept: application/json'
```

`GET /`

Get geolocation information via IP address

<h3 id="get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|package|query|string|false|Web service package of different granularity of return information.|
|addon|query|[string]|false|Extra information in addition to the above selected package.|
|ip|query|string|true|IP address (IPv4 or IPv6) for reverse IP location lookup purpose. If not present, the server IP address will be used for the location lookup.|
|format|query|string|false|Format of the response message.|
|lang|query|string|false|Translation information. The translation only applicable for continent, country, region and city name for the addon package.|
|key|query|string|true|API Key. Please sign up free trial license key at ip2location.com|

#### Enumerated Values

|Parameter|Value|
|---|---|
|package|WS1|
|package|WS2|
|package|WS3|
|package|WS4|
|package|WS5|
|package|WS6|
|package|WS7|
|package|WS8|
|package|WS9|
|package|WS10|
|package|WS11|
|package|WS12|
|package|WS13|
|package|WS14|
|package|WS15|
|package|WS16|
|package|WS17|
|package|WS18|
|package|WS19|
|package|WS20|
|package|WS21|
|package|WS22|
|package|WS23|
|package|WS24|
|package|WS25|
|addon|continent|
|addon|country|
|addon|region|
|addon|city|
|addon|geotargeting|
|addon|country_groupings|
|addon|time_zone_info|
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
"{\"country_code\":\"\",\"country_name\":\"\",\"region_name\":\"\",\"city_name\":\"\",\"latitude\":\"\",\"longitude\":\"\",\"zip_code\":\"\",\"time_zone\":\"\",\"isp\":\"\",\"domain\":\"\",\"net_speed\":\"\",\"idd_code\":\"\",\"area_code\":\"\",\"weather_station_code\":\"\",\"weather_station_name\":\"\",\"mcc\":\"\",\"mnc\":\"\",\"mobile_brand\":\"\",\"elevation\":\"\",\"usage_type\":\"\",\"address_type\":\"\",\"category\":\"\",\"category_name\":\"\",\"continent\":{\"name\":\"\",\"code\":\"\",\"hemisphere\":\"\",\"translations\":\"\"},\"country\":{\"name\":\"\",\"alpha3_code\":\"\",\"numeric_code\":\"\",\"demonym\":\"\",\"flag\":\"\",\"capital\":\"\",\"total_area\":\"\",\"population\":\"\",\"currency\":\"{\"code\":\"\",\"name\":\"\",\"symbol\":\"\"}\",\"language\":\"{\"code\":\"\",\"name\":\"\"}\"\",\"idd_code\":\"\",\"tld\":\"\",\"translations\":\"\"},\"region\":{\"name\":\"\",\"code\":\"\",\"translations\":\"\"},\"city\":{\"name\":\"\",\"translations\":\"[]\"},\"geotargeting\":{\"metro\": \"\"},\"country_groupings\":{\"acronym\":\"\",\"name\": \"\"},\"time_zone_info\":{\"olson\":\"\",\"current_time\":\"\",\"gmt_offset\":\"\",\"is_dst\":\"\",\"sunrise\":\"\",\"sunset\":\"\"}}"
```

<h3 id="get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get response from IP lookup|Inline|

<aside class="success">
This operation does not require authentication
</aside>
