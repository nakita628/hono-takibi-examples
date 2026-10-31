<h1 id="ip-geolocation-api">IP geolocation API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Abstract IP geolocation API allows developers to retrieve the region, country and city behind any IP worldwide. The API covers the geolocation of IPv4 and IPv6 addresses in 180+ countries worldwide. Extra information can be retrieved like the currency, flag or language associated to an IP.

Base URLs:

* <a href="https://ipgeolocation.abstractapi.com">https://ipgeolocation.abstractapi.com</a>

<a href="https://www.abstractapi.com/ip-geolocation-api#docs">API Documentation</a>

<h1 id="ip-geolocation-api-default">Default</h1>

## get/v1/

> Code samples

```bash
curl 'https://example.com/v1/?api_key=string' \
  -H 'Accept: application/json'
```

`GET /v1/`

Retrieve the location of an IP address

<h3 id="getv1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|true|none|
|ip_address|query|string|false|none|
|fields|query|string|false|none|

> Example responses

> 200 Response

```json
"{\"ip_address\":\"195.154.25.40\",\"city\":\"Paris\",\"city_geoname_id\":2988507,\"region\":\"Île-de-France\",\"region_iso_code\":\"IDF\",\"region_geoname_id\":3012874,\"postal_code\":\"75008\",\"country\":\"France\",\"country_code\":\"FR\",\"country_geoname_id\":3017382,\"country_is_eu\":true,\"continent\":\"Europe\",\"continent_code\":\"EU\",\"continent_geoname_id\":6255148,\"longitude\":2.4075,\"latitude\":48.8323,\"security\":{\"is_vpn\":false},\"timezone\":{\"name\":\"Europe/Paris\",\"abbreviation\":\"CEST\",\"gmt_offset\":2,\"current_time\":\"15:42:18\",\"is_dst\":true},\"flag\":{\"emoji\":\"<ë<÷\",\"unicode\":\"U+1F1EB U+1F1F7\",\"png\":\"https://static.abstractapi.com/country-flags/FR_flag.png\",\"svg\":\"https://static.abstractapi.com/country-flags/FR_flag.svg\"},\"currency\":{\"currency_name\":\"Euros\",\"currency_code\":\"EUR\"},\"connection\":{\"autonomous_system_number\":12876,\"autonomous_system_organization\":\"Online S.a.s.\",\"connection_type\":\"Corporate\",\"isp_name\":\"Online S.A.S.\",\"organization_name\":\"ONLINE\"}}"
```

<h3 id="getv1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Location of geolocated IP|[inline_response_200](#schemainline_response_200)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_inline_response_200">inline_response_200</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_200"></a>
<a id="schema_inline_response_200"></a>
<a id="tocSinline_response_200"></a>
<a id="tocsinline_response_200"></a>

```json
{
  "city": "string",
  "city_geoname_id": 0,
  "connection": {
    "autonomous_system_number": 0,
    "autonomous_system_organization": "string",
    "connection_type": "string",
    "isp_name": "string",
    "organization_name": "string"
  },
  "continent": "string",
  "continent_code": "string",
  "continent_geoname_id": 0,
  "country": "string",
  "country_code": "string",
  "country_geoname_id": 0,
  "country_is_eu": true,
  "currency": {
    "currency_code": "string",
    "currency_name": "string"
  },
  "flag": {
    "emoji": "string",
    "png": "string",
    "svg": "string",
    "unicode": "string"
  },
  "ip_address": "string",
  "latitude": 0,
  "longitude": 0,
  "postal_code": "string",
  "region": "string",
  "region_geoname_id": 0,
  "region_iso_code": "string",
  "security": {
    "is_vpn": true
  },
  "timezone": {
    "abbreviation": "string",
    "current_time": "string",
    "gmt_offset": 0,
    "is_dst": true,
    "name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|none|
|city_geoname_id|integer|false|none|none|
|connection|object|false|none|none|
|continent|string|false|none|none|
|continent_code|string|false|none|none|
|continent_geoname_id|integer|false|none|none|
|country|string|false|none|none|
|country_code|string|false|none|none|
|country_geoname_id|integer|false|none|none|
|country_is_eu|boolean|false|none|none|
|currency|object|false|none|none|
|flag|object|false|none|none|
|ip_address|string|false|none|none|
|latitude|number|false|none|none|
|longitude|number|false|none|none|
|postal_code|string|false|none|none|
|region|string|false|none|none|
|region_geoname_id|integer|false|none|none|
|region_iso_code|string|false|none|none|
|security|object|false|none|none|
|timezone|object|false|none|none|
