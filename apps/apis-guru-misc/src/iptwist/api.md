<h1 id="iptwist">ipTwist v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The reliable, secure, and simple IP geolocation API.

<a href="https://iptwist.com/legal/terms">Terms of service</a>
Email: <a href="mailto:support@iptwist.com">support@iptwist.com</a> 

<a href="https://iptwist.com/documentation">Official Documentation</a>

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-IPTWIST-TOKEN**, in: header.

<h1 id="iptwist-main">Main</h1>

## Geolocate a given IP address

> Code samples

```bash
curl https://example.com/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IPTWIST-TOKEN: ${API_KEY}" \
  -d '{
    "ip": "192.0.2.1"
  }'
```

`POST /`

> Body parameter

```json
{
  "ip": "192.0.2.1"
}
```

<h3 id="geolocate-a-given-ip-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Request](#schemarequest)|true|IP address|
|» ip|body|string(ipv4)|false|none|

> Example responses

> 200 Response

```json
{
  "city": "string",
  "country": "string",
  "country_code": "string",
  "ip": "192.0.2.1",
  "latitude": 0,
  "longitude": 0,
  "state": "string",
  "timezone": "string",
  "zip": "string"
}
```

<h3 id="geolocate-a-given-ip-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful IP geolocation|[Response](#schemaresponse)|
|401|Unauthorized|Invalid authentication.|None|
|403|Forbidden|Monthly quota exceeded.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

# Schemas

<h2 id="tocS_Request">Request</h2>
<!-- backwards compatibility -->
<a id="schemarequest"></a>
<a id="schema_Request"></a>
<a id="tocSrequest"></a>
<a id="tocsrequest"></a>

```json
{
  "ip": "192.0.2.1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ip|string(ipv4)|false|none|none|

<h2 id="tocS_Response">Response</h2>
<!-- backwards compatibility -->
<a id="schemaresponse"></a>
<a id="schema_Response"></a>
<a id="tocSresponse"></a>
<a id="tocsresponse"></a>

```json
{
  "city": "string",
  "country": "string",
  "country_code": "string",
  "ip": "192.0.2.1",
  "latitude": 0,
  "longitude": 0,
  "state": "string",
  "timezone": "string",
  "zip": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|none|
|country|string|false|none|none|
|country_code|string|false|none|none|
|ip|string(ipv4)|false|none|none|
|latitude|number(float)|false|none|none|
|longitude|number(float)|false|none|none|
|state|string|false|none|none|
|timezone|string|false|none|none|
|zip|string|false|none|none|
