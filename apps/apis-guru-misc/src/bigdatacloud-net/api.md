<h1 id="ip-geolocation-api">IP Geolocation API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

BigDataCloud's IP Geolocation API returns detailed information about the geographical location, ownership and connectivity of the provided IPv4 IP address.

This API is powered by patent-pending ‘Next Generation IP Geolocation Technology'. As a result, the API has sub-millisecond response time.

You can authenticate the API with the use of API keys provided in your BigDataCloud account.

BigDataCloud provides 10K Free queries per month. You can upgrade your package with $2/month per 10K additional queries.

The API has Unprecedented Update Rate
- Geolocation data re-evaluated every 2 hours or at least once a day
- BGP data updated every 2 hours
- Registry data updated at least once a day
- Country object data usually updates at least once in a month 

You can learn more about the API at [bigdatacloud.com](https://www.bigdatacloud.com/ip-geolocation-apis).

Base URLs:

* <a href="https://api.bigdatacloud.net">https://api.bigdatacloud.net</a>

<h1 id="ip-geolocation-api-default">Default</h1>

## IP Geolocation with Confidence Area and Hazard Report API

<a id="opIdipGeolocationWithConfidenceAreaAndHazardReportApi"></a>

> Code samples

```bash
curl https://example.com/data/ip-geolocation-full
```

`GET /data/ip-geolocation-full`

This API returns additional security hazard report in addition to confidence area and locality information.

<h3 id="ip-geolocation-with-confidence-area-and-hazard-report-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ip|query|string|false|IPv4 IP address in a string or numeric format. If omitted, the caller’s IP address is assumed<br>|
|localityLanguage|query|string|false|Preferred language for locality names in ISO 639-1 format, such as 'en' for English, 'es' for Spanish etc. Please note: 147 common world languages are supported, full list here, but not all languages are available for every location. If requested language is not available for a requested location it will default to English, if no English is available, the native, local names will be provided<br>|
|key|query|string|false|Your API key<br>|

<h3 id="ip-geolocation-with-confidence-area-and-hazard-report-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## IP Geolocation with Confidence Area API

<a id="opIdipGeolocationWithConfidenceAreaApi"></a>

> Code samples

```bash
curl https://example.com/data/ip-geolocation-with-confidence
```

`GET /data/ip-geolocation-with-confidence`

Returns list of geocoordinates which represents estimated geolocation confidence area.

<h3 id="ip-geolocation-with-confidence-area-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ip|query|string|false|IPv4 IP address in a string or numeric format. If omitted, the caller’s IP address is assumed<br>|
|localityLanguage|query|string|false|Preferred language for locality names in ISO 639-1 format, such as 'en' for English, 'es' for Spanish etc. Please note: 147 common world languages are supported, full list here, but not all languages are available for every location. If requested language is not available for a requested location it will default to English, if no English is available, the native, local names will be provided<br>|
|key|query|string|false|Your API key<br>|

<h3 id="ip-geolocation-with-confidence-area-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>
