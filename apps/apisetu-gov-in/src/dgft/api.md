<h1 id="importer-exporter-details-api">Importer-Exporter Details API v3.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Importer-Exporter Code (IEC), issued by Directorate General of Foreign Trade (DGFT), is a key business identification number which is mandatory for Exports or Imports. This API can be used to get details of a importer-exporter by importer-exporter code.

Base URLs:

* <a href="https://apisetu.gov.in/dgft">https://apisetu.gov.in/dgft</a>

<a href="https://ndh.digitallocker.gov.in/terms.php">Terms of service</a>
Web: <a href="https://www.dgft.gov.in/">Directorate General of Foreign Trade (DGFT)</a> 

# Authentication

* API Key (api_key)
    - Parameter Name: **X-APISETU-APIKEY**, in: header.

* API Key (clientId)
    - Parameter Name: **X-APISETU-CLIENTID**, in: header.

<h1 id="importer-exporter-details-api-apis">APIs</h1>

## Importer-Exporter Code (IEC) Verification API.

<a id="opIdImporter-Exporter Code Verification API"></a>

> Code samples

```bash
curl https://example.com/v1/iec/string \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}"
```

`GET /v1/iec/{iec}`

Description of Importer-Exporter Code (IEC) Verification API.

<h3 id="importer-exporter-code-iec-verification-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|iec|path|string|true|Importer-Exporter code|

> Example responses

> 200 Response

```json
{
  "addressLine1": "Noida",
  "addressLine2": "",
  "branch": [
    {
      "badd1": "Bokaro",
      "badd2": "",
      "branchCode": 1,
      "city": "Bokaro",
      "pin": 827012,
      "state": "JHARKHAND"
    }
  ],
  "city": "Bokaro",
  "dataAsOn": "1970-01-01T00:00:00Z",
  "directors": [
    {
      "name": "Mukund's IEC"
    }
  ],
  "entityName": "Mukund's IEC",
  "exporterType": 1,
  "iec": "CGRPK3746C",
  "iecIssueDate": 8062020,
  "iecModificationDate": "",
  "iecStatus": 0,
  "natureOfConcern": 1,
  "pan": "CGRPK3746CFT001",
  "pin": 827012,
  "state": "JHARKHAND"
}
```

> 400 Response

```json
{
  "error": "invalid parameter",
  "errorDescription": "Bad request"
}
```

> 401 Response

```json
{
  "error": "invalid_authentication",
  "errorDescription": "Authentication failed"
}
```

> 404 Response

```json
{
  "error": "record_not_found",
  "errorDescription": "No record found"
}
```

> 500 Response

```json
{
  "error": "internal_server_error",
  "errorDescription": "Internal server error"
}
```

> 502 Response

```json
{
  "error": "bad gateway",
  "errorDescription": "Publisher service returned an invalid response."
}
```

> 503 Response

```json
{
  "error": "service_unavailable",
  "errorDescription": "Publisher service is temporarily unavailable"
}
```

> 504 Response

```json
{
  "error": "gateway_timeout",
  "errorDescription": "Publisher service did not respond in time"
}
```

<h3 id="importer-exporter-code-iec-verification-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Authentication failed|Inline|
|404|Not Found|Not Found|Inline|
|500|Internal Server Error|Internal Server Error|Inline|
|502|Bad Gateway|Bad Gateway|Inline|
|503|Service Unavailable|Service Unavailable|Inline|
|504|Gateway Timeout|Gateway Timeout|Inline|

<h3 id="importer-exporter-code-iec-verification-api-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressLine1|string|true|none|none|
|addressLine2|string|true|none|none|
|branch|[object]|true|none|none|
|» badd1|string|true|none|none|
|» badd2|string|true|none|none|
|» branchCode|string|true|none|none|
|» city|string|true|none|none|
|» pin|string|true|none|none|
|» state|string|true|none|none|
|city|string|true|none|none|
|dataAsOn|string(date-time)|true|none|none|
|directors|[object]|true|none|none|
|» name|string|true|none|none|
|entityName|string|true|none|none|
|exporterType|string|true|none|none|
|iec|string|true|none|none|
|iecIssueDate|string|true|none|none|
|iecModificationDate|string|true|none|none|
|iecStatus|string|true|none|none|
|natureOfConcern|string|true|none|none|
|pan|string|true|none|none|
|pin|string|true|none|none|
|state|string|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|invalid parameter|
|error|missing parameter|
|errorDescription|Bad request|
|errorDescription|Please provide all mandatory parameters.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|invalid_authentication|
|error|invalid_authorization|
|errorDescription|Authentication failed|
|errorDescription|You are not authorized to use this API|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|record_not_found|
|error|Url not found|
|errorDescription|No record found|
|errorDescription|Your API url or path is incorrect.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|internal_server_error|
|errorDescription|Internal server error|

Status Code **502**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|bad gateway|
|errorDescription|Publisher service returned an invalid response.|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|service_unavailable|
|errorDescription|Publisher service is temporarily unavailable|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|gateway_timeout|
|errorDescription|Publisher service did not respond in time|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, clientId
</aside>
