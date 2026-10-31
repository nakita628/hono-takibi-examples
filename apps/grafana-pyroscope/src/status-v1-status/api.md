<h1 id="statusv1">status.v1 v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="statusv1-statusv1statusservice">status.v1.StatusService</h1>

## GetBuildInfo

<a id="opIdstatus.v1.StatusService.GetBuildInfo"></a>

> Code samples

```bash
curl http://localhost:4040/api/v1/status/buildinfo \
  -H 'Accept: application/json'
```

`GET /api/v1/status/buildinfo`

Retrieve build information about the binary

> Example responses

> 200 Response

```json
{
  "status": "string",
  "data": {
    "version": "string",
    "revision": "string",
    "branch": "string",
    "buildUser": "string",
    "buildDate": "string",
    "goVersion": "string"
  }
}
```

<h3 id="getbuildinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[status.v1.GetBuildInfoResponse](#schemastatus.v1.getbuildinforesponse)|

<aside class="success">
This operation does not require authentication
</aside>

## GetConfig

<a id="opIdstatus.v1.StatusService.GetConfig"></a>

> Code samples

```bash
curl http://localhost:4040/api/v1/status/config \
  -H 'Accept: application/json'
```

`GET /api/v1/status/config`

Retrieve the running config

> Example responses

> 200 Response

```json
{
  "contentType": "string",
  "data": "string",
  "extensions": [
    {
      "type": "string",
      "value": "string"
    }
  ]
}
```

<h3 id="getconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[google.api.HttpBody](#schemagoogle.api.httpbody)|

<aside class="success">
This operation does not require authentication
</aside>

## GetDefaultConfig

<a id="opIdstatus.v1.StatusService.GetDefaultConfig"></a>

> Code samples

```bash
curl http://localhost:4040/api/v1/status/config/default \
  -H 'Accept: application/json'
```

`GET /api/v1/status/config/default`

> Example responses

> 200 Response

```json
{
  "contentType": "string",
  "data": "string",
  "extensions": [
    {
      "type": "string",
      "value": "string"
    }
  ]
}
```

<h3 id="getdefaultconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[google.api.HttpBody](#schemagoogle.api.httpbody)|

<aside class="success">
This operation does not require authentication
</aside>

## GetDiffConfig

<a id="opIdstatus.v1.StatusService.GetDiffConfig"></a>

> Code samples

```bash
curl http://localhost:4040/api/v1/status/config/diff \
  -H 'Accept: application/json'
```

`GET /api/v1/status/config/diff`

Retrieve the diff config to the defaults

> Example responses

> 200 Response

```json
{
  "contentType": "string",
  "data": "string",
  "extensions": [
    {
      "type": "string",
      "value": "string"
    }
  ]
}
```

<h3 id="getdiffconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[google.api.HttpBody](#schemagoogle.api.httpbody)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_google.api.HttpBody">google.api.HttpBody</h2>
<!-- backwards compatibility -->
<a id="schemagoogle.api.httpbody"></a>
<a id="schema_google.api.HttpBody"></a>
<a id="tocSgoogle.api.httpbody"></a>
<a id="tocsgoogle.api.httpbody"></a>

```json
{
  "contentType": "string",
  "data": "string",
  "extensions": [
    {
      "type": "string",
      "value": "string"
    }
  ]
}
```

Message that represents an arbitrary HTTP body. It should only be used for
 payload formats that can't be represented as JSON, such as raw binary or
 an HTML page.


 This message can be used both in streaming and non-streaming API methods in
 the request as well as the response.

 It can be used as a top-level request field, which is convenient if one
 wants to extract parameters from either the URL or HTTP template into the
 request fields and also want access to the raw HTTP body.

 Example:

     message GetResourceRequest {
       // A unique request id.
       string request_id = 1;

       // The raw HTTP body is bound to this field.
       google.api.HttpBody http_body = 2;

     }

     service ResourceService {
       rpc GetResource(GetResourceRequest)
         returns (google.api.HttpBody);
       rpc UpdateResource(google.api.HttpBody)
         returns (google.protobuf.Empty);

     }

 Example with streaming methods:

     service CaldavService {
       rpc GetCalendar(stream google.api.HttpBody)
         returns (stream google.api.HttpBody);
       rpc UpdateCalendar(stream google.api.HttpBody)
         returns (stream google.api.HttpBody);

     }

 Use of this type only changes how the request and response bodies are
 handled, all other features will continue to work unchanged.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentType|string|false|none|The HTTP Content-Type header value specifying the content type of the body.|
|data|string(byte)|false|none|The HTTP request/response body as raw binary.|
|extensions|[[google.protobuf.Any](#schemagoogle.protobuf.any)]|false|none|Application specific response metadata. Must be set in the first response<br> for streaming APIs.|

<h2 id="tocS_google.protobuf.Any">google.protobuf.Any</h2>
<!-- backwards compatibility -->
<a id="schemagoogle.protobuf.any"></a>
<a id="schema_google.protobuf.Any"></a>
<a id="tocSgoogle.protobuf.any"></a>
<a id="tocsgoogle.protobuf.any"></a>

```json
{
  "type": "string",
  "value": "string"
}
```

Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|value|string(binary)|false|none|none|

<h2 id="tocS_status.v1.GetBuildInfoData">status.v1.GetBuildInfoData</h2>
<!-- backwards compatibility -->
<a id="schemastatus.v1.getbuildinfodata"></a>
<a id="schema_status.v1.GetBuildInfoData"></a>
<a id="tocSstatus.v1.getbuildinfodata"></a>
<a id="tocsstatus.v1.getbuildinfodata"></a>

```json
{
  "version": "string",
  "revision": "string",
  "branch": "string",
  "buildUser": "string",
  "buildDate": "string",
  "goVersion": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|false|none|none|
|revision|string|false|none|none|
|branch|string|false|none|none|
|buildUser|string|false|none|none|
|buildDate|string|false|none|none|
|goVersion|string|false|none|none|

<h2 id="tocS_status.v1.GetBuildInfoRequest">status.v1.GetBuildInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemastatus.v1.getbuildinforequest"></a>
<a id="schema_status.v1.GetBuildInfoRequest"></a>
<a id="tocSstatus.v1.getbuildinforequest"></a>
<a id="tocsstatus.v1.getbuildinforequest"></a>

```json
{}
```

<h2 id="tocS_status.v1.GetBuildInfoResponse">status.v1.GetBuildInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemastatus.v1.getbuildinforesponse"></a>
<a id="schema_status.v1.GetBuildInfoResponse"></a>
<a id="tocSstatus.v1.getbuildinforesponse"></a>
<a id="tocsstatus.v1.getbuildinforesponse"></a>

```json
{
  "status": "string",
  "data": {
    "version": "string",
    "revision": "string",
    "branch": "string",
    "buildUser": "string",
    "buildDate": "string",
    "goVersion": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|
|data|[status.v1.GetBuildInfoData](#schemastatus.v1.getbuildinfodata)|false|none|none|

<h2 id="tocS_status.v1.GetConfigRequest">status.v1.GetConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemastatus.v1.getconfigrequest"></a>
<a id="schema_status.v1.GetConfigRequest"></a>
<a id="tocSstatus.v1.getconfigrequest"></a>
<a id="tocsstatus.v1.getconfigrequest"></a>

```json
{}
```
