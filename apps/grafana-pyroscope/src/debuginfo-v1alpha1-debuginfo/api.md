<h1 id="debuginfov1alpha1">debuginfo.v1alpha1 v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="debuginfov1alpha1-debuginfov1alpha1debuginfoservice">debuginfo.v1alpha1.DebuginfoService</h1>

## DeleteDebuginfo

<a id="opIddebuginfo.v1alpha1.DebuginfoService.DeleteDebuginfo"></a>

> Code samples

```bash
curl http://localhost:4040/debuginfo.v1alpha1.DebuginfoService/DeleteDebuginfo \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "gnuBuildId": "string"
  }'
```

`POST /debuginfo.v1alpha1.DebuginfoService/DeleteDebuginfo`

> Body parameter

```json
{
  "gnuBuildId": "string"
}
```

<h3 id="deletedebuginfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[debuginfo.v1alpha1.DeleteDebuginfoRequest](#schemadebuginfo.v1alpha1.deletedebuginforequest)|true|none|
|» gnuBuildId|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{}
```

> default Response

```json
{
  "code": "not_found",
  "message": "string",
  "details": [
    {
      "type": "string",
      "value": "string",
      "debug": {}
    }
  ]
}
```

<h3 id="deletedebuginfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[debuginfo.v1alpha1.DeleteDebuginfoResponse](#schemadebuginfo.v1alpha1.deletedebuginforesponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## ListDebuginfo

<a id="opIddebuginfo.v1alpha1.DebuginfoService.ListDebuginfo"></a>

> Code samples

```bash
curl http://localhost:4040/debuginfo.v1alpha1.DebuginfoService/ListDebuginfo \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{}'
```

`POST /debuginfo.v1alpha1.DebuginfoService/ListDebuginfo`

> Body parameter

```json
{}
```

<h3 id="listdebuginfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[debuginfo.v1alpha1.ListDebuginfoRequest](#schemadebuginfo.v1alpha1.listdebuginforequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "object": [
    {
      "file": {
        "gnuBuildId": "string",
        "goBuildId": "string",
        "otelFileId": "string",
        "name": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "state": "STATE_UPLOADING",
      "startedAt": "2023-01-15T01:30:15.01Z",
      "finishedAt": "2023-01-15T01:30:15.01Z",
      "sizeBytes": 0
    }
  ]
}
```

> default Response

```json
{
  "code": "not_found",
  "message": "string",
  "details": [
    {
      "type": "string",
      "value": "string",
      "debug": {}
    }
  ]
}
```

<h3 id="listdebuginfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[debuginfo.v1alpha1.ListDebuginfoResponse](#schemadebuginfo.v1alpha1.listdebuginforesponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## ShouldInitiateUpload

<a id="opIddebuginfo.v1alpha1.DebuginfoService.ShouldInitiateUpload"></a>

> Code samples

```bash
curl http://localhost:4040/debuginfo.v1alpha1.DebuginfoService/ShouldInitiateUpload \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "file": {
      "gnuBuildId": "string",
      "goBuildId": "string",
      "otelFileId": "string",
      "name": "string",
      "type": "TYPE_UNSPECIFIED"
    }
  }'
```

`POST /debuginfo.v1alpha1.DebuginfoService/ShouldInitiateUpload`

> Body parameter

```json
{
  "file": {
    "gnuBuildId": "string",
    "goBuildId": "string",
    "otelFileId": "string",
    "name": "string",
    "type": "TYPE_UNSPECIFIED"
  }
}
```

<h3 id="shouldinitiateupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[debuginfo.v1alpha1.ShouldInitiateUploadRequest](#schemadebuginfo.v1alpha1.shouldinitiateuploadrequest)|true|none|
|» file|body|[debuginfo.v1alpha1.FileMetadata](#schemadebuginfo.v1alpha1.filemetadata)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "shouldInitiateUpload": true,
  "reason": "string"
}
```

> default Response

```json
{
  "code": "not_found",
  "message": "string",
  "details": [
    {
      "type": "string",
      "value": "string",
      "debug": {}
    }
  ]
}
```

<h3 id="shouldinitiateupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[debuginfo.v1alpha1.ShouldInitiateUploadResponse](#schemadebuginfo.v1alpha1.shouldinitiateuploadresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## UploadFinished

<a id="opIddebuginfo.v1alpha1.DebuginfoService.UploadFinished"></a>

> Code samples

```bash
curl http://localhost:4040/debuginfo.v1alpha1.DebuginfoService/UploadFinished \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "gnuBuildId": "string"
  }'
```

`POST /debuginfo.v1alpha1.DebuginfoService/UploadFinished`

> Body parameter

```json
{
  "gnuBuildId": "string"
}
```

<h3 id="uploadfinished-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[debuginfo.v1alpha1.UploadFinishedRequest](#schemadebuginfo.v1alpha1.uploadfinishedrequest)|true|none|
|» gnuBuildId|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{}
```

> default Response

```json
{
  "code": "not_found",
  "message": "string",
  "details": [
    {
      "type": "string",
      "value": "string",
      "debug": {}
    }
  ]
}
```

<h3 id="uploadfinished-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[debuginfo.v1alpha1.UploadFinishedResponse](#schemadebuginfo.v1alpha1.uploadfinishedresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_connect-protocol-version">connect-protocol-version</h2>
<!-- backwards compatibility -->
<a id="schemaconnect-protocol-version"></a>
<a id="schema_connect-protocol-version"></a>
<a id="tocSconnect-protocol-version"></a>
<a id="tocsconnect-protocol-version"></a>

```json
1
```

Define the version of the Connect protocol

<h2 id="tocS_connect-timeout-header">connect-timeout-header</h2>
<!-- backwards compatibility -->
<a id="schemaconnect-timeout-header"></a>
<a id="schema_connect-timeout-header"></a>
<a id="tocSconnect-timeout-header"></a>
<a id="tocsconnect-timeout-header"></a>

```json
0
```

Define the timeout, in ms

<h2 id="tocS_connect.error">connect.error</h2>
<!-- backwards compatibility -->
<a id="schemaconnect.error"></a>
<a id="schema_connect.error"></a>
<a id="tocSconnect.error"></a>
<a id="tocsconnect.error"></a>

```json
{
  "code": "not_found",
  "message": "string",
  "details": [
    {
      "type": "string",
      "value": "string",
      "debug": {}
    }
  ]
}
```

Error type returned by Connect: https://connectrpc.com/docs/go/errors/#http-representation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code].|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client.|
|details|[[connect.error_details.Any](#schemaconnect.error_details.any)]|false|none|A list of messages that carry the error details. There is no limit on the number of messages.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|canceled|
|code|unknown|
|code|invalid_argument|
|code|deadline_exceeded|
|code|not_found|
|code|already_exists|
|code|permission_denied|
|code|resource_exhausted|
|code|failed_precondition|
|code|aborted|
|code|out_of_range|
|code|unimplemented|
|code|internal|
|code|unavailable|
|code|data_loss|
|code|unauthenticated|

<h2 id="tocS_connect.error_details.Any">connect.error_details.Any</h2>
<!-- backwards compatibility -->
<a id="schemaconnect.error_details.any"></a>
<a id="schema_connect.error_details.Any"></a>
<a id="tocSconnect.error_details.any"></a>
<a id="tocsconnect.error_details.any"></a>

```json
{
  "type": "string",
  "value": "string",
  "debug": {}
}
```

Contains an arbitrary serialized message along with a @type that describes the type of the serialized message, with an additional debug field for ConnectRPC error details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|A URL that acts as a globally unique identifier for the type of the serialized message. For example: `type.googleapis.com/google.rpc.ErrorInfo`. This is used to determine the schema of the data in the `value` field and is the discriminator for the `debug` field.|
|value|string(binary)|false|none|The Protobuf message, serialized as bytes and base64-encoded. The specific message type is identified by the `type` field.|
|debug|object|false|none|Deserialized error detail payload. The 'type' field indicates the schema. This field is for easier debugging and should not be relied upon for application logic.|

<h2 id="tocS_debuginfo.v1alpha1.DeleteDebuginfoRequest">debuginfo.v1alpha1.DeleteDebuginfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemadebuginfo.v1alpha1.deletedebuginforequest"></a>
<a id="schema_debuginfo.v1alpha1.DeleteDebuginfoRequest"></a>
<a id="tocSdebuginfo.v1alpha1.deletedebuginforequest"></a>
<a id="tocsdebuginfo.v1alpha1.deletedebuginforequest"></a>

```json
{
  "gnuBuildId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gnuBuildId|string|false|none|none|

<h2 id="tocS_debuginfo.v1alpha1.DeleteDebuginfoResponse">debuginfo.v1alpha1.DeleteDebuginfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemadebuginfo.v1alpha1.deletedebuginforesponse"></a>
<a id="schema_debuginfo.v1alpha1.DeleteDebuginfoResponse"></a>
<a id="tocSdebuginfo.v1alpha1.deletedebuginforesponse"></a>
<a id="tocsdebuginfo.v1alpha1.deletedebuginforesponse"></a>

```json
{}
```

<h2 id="tocS_debuginfo.v1alpha1.FileMetadata">debuginfo.v1alpha1.FileMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadebuginfo.v1alpha1.filemetadata"></a>
<a id="schema_debuginfo.v1alpha1.FileMetadata"></a>
<a id="tocSdebuginfo.v1alpha1.filemetadata"></a>
<a id="tocsdebuginfo.v1alpha1.filemetadata"></a>

```json
{
  "gnuBuildId": "string",
  "goBuildId": "string",
  "otelFileId": "string",
  "name": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gnuBuildId|string|false|none|GNU build ID of the executable.|
|goBuildId|string|false|none|Go build ID of the executable.|
|otelFileId|string|false|none|Optional libpf.FileID from the otel profiler.|
|name|string|false|none|Original file name of the executable.|
|type|[debuginfo.v1alpha1.FileMetadata.Type](#schemadebuginfo.v1alpha1.filemetadata.type)|false|none|Type of the debug info.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|TYPE_EXECUTABLE_FULL|
|type|TYPE_EXECUTABLE_NO_TEXT|

<h2 id="tocS_debuginfo.v1alpha1.FileMetadata.Type">debuginfo.v1alpha1.FileMetadata.Type</h2>
<!-- backwards compatibility -->
<a id="schemadebuginfo.v1alpha1.filemetadata.type"></a>
<a id="schema_debuginfo.v1alpha1.FileMetadata.Type"></a>
<a id="tocSdebuginfo.v1alpha1.filemetadata.type"></a>
<a id="tocsdebuginfo.v1alpha1.filemetadata.type"></a>

```json
"TYPE_UNSPECIFIED"
```

<h2 id="tocS_debuginfo.v1alpha1.ListDebuginfoRequest">debuginfo.v1alpha1.ListDebuginfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemadebuginfo.v1alpha1.listdebuginforequest"></a>
<a id="schema_debuginfo.v1alpha1.ListDebuginfoRequest"></a>
<a id="tocSdebuginfo.v1alpha1.listdebuginforequest"></a>
<a id="tocsdebuginfo.v1alpha1.listdebuginforequest"></a>

```json
{}
```

<h2 id="tocS_debuginfo.v1alpha1.ListDebuginfoResponse">debuginfo.v1alpha1.ListDebuginfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemadebuginfo.v1alpha1.listdebuginforesponse"></a>
<a id="schema_debuginfo.v1alpha1.ListDebuginfoResponse"></a>
<a id="tocSdebuginfo.v1alpha1.listdebuginforesponse"></a>
<a id="tocsdebuginfo.v1alpha1.listdebuginforesponse"></a>

```json
{
  "object": [
    {
      "file": {
        "gnuBuildId": "string",
        "goBuildId": "string",
        "otelFileId": "string",
        "name": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "state": "STATE_UPLOADING",
      "startedAt": "2023-01-15T01:30:15.01Z",
      "finishedAt": "2023-01-15T01:30:15.01Z",
      "sizeBytes": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|[[debuginfo.v1alpha1.ObjectMetadata](#schemadebuginfo.v1alpha1.objectmetadata)]|false|none|none|

<h2 id="tocS_debuginfo.v1alpha1.ObjectMetadata">debuginfo.v1alpha1.ObjectMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadebuginfo.v1alpha1.objectmetadata"></a>
<a id="schema_debuginfo.v1alpha1.ObjectMetadata"></a>
<a id="tocSdebuginfo.v1alpha1.objectmetadata"></a>
<a id="tocsdebuginfo.v1alpha1.objectmetadata"></a>

```json
{
  "file": {
    "gnuBuildId": "string",
    "goBuildId": "string",
    "otelFileId": "string",
    "name": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "state": "STATE_UPLOADING",
  "startedAt": "2023-01-15T01:30:15.01Z",
  "finishedAt": "2023-01-15T01:30:15.01Z",
  "sizeBytes": 0
}
```

This is stored in buckets at "debug-info/$tenant/$gnu_build_id/metadata"
 Along with the actual uploaded file at "debug-info/$tenant/$gnu_build_id/exe"

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|[debuginfo.v1alpha1.FileMetadata](#schemadebuginfo.v1alpha1.filemetadata)|false|none|none|
|state|[debuginfo.v1alpha1.ObjectMetadata.State](#schemadebuginfo.v1alpha1.objectmetadata.state)|false|none|none|
|startedAt|[google.protobuf.Timestamp](#schemagoogle.protobuf.timestamp)|false|none|A Timestamp represents a point in time independent of any time zone or local<br> calendar, encoded as a count of seconds and fractions of seconds at<br> nanosecond resolution. The count is relative to an epoch at UTC midnight on<br> January 1, 1970, in the proleptic Gregorian calendar which extends the<br> Gregorian calendar backwards to year one.<br><br> All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap<br> second table is needed for interpretation, using a [24-hour linear<br> smear](https://developers.google.com/time/smear).<br><br> The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By<br> restricting to that range, we ensure that we can convert to and from [RFC<br> 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings.<br><br> # Examples<br><br> Example 1: Compute Timestamp from POSIX `time()`.<br><br>     Timestamp timestamp;<br>     timestamp.set_seconds(time(NULL));<br>     timestamp.set_nanos(0);<br><br> Example 2: Compute Timestamp from POSIX `gettimeofday()`.<br><br>     struct timeval tv;<br>     gettimeofday(&tv, NULL);<br><br>     Timestamp timestamp;<br>     timestamp.set_seconds(tv.tv_sec);<br>     timestamp.set_nanos(tv.tv_usec * 1000);<br><br> Example 3: Compute Timestamp from Win32 `GetSystemTimeAsFileTime()`.<br><br>     FILETIME ft;<br>     GetSystemTimeAsFileTime(&ft);<br>     UINT64 ticks = (((UINT64)ft.dwHighDateTime) << 32) \| ft.dwLowDateTime;<br><br>     // A Windows tick is 100 nanoseconds. Windows epoch 1601-01-01T00:00:00Z<br>     // is 11644473600 seconds before Unix epoch 1970-01-01T00:00:00Z.<br>     Timestamp timestamp;<br>     timestamp.set_seconds((INT64) ((ticks / 10000000) - 11644473600LL));<br>     timestamp.set_nanos((INT32) ((ticks % 10000000) * 100));<br><br> Example 4: Compute Timestamp from Java `System.currentTimeMillis()`.<br><br>     long millis = System.currentTimeMillis();<br><br>     Timestamp timestamp = Timestamp.newBuilder().setSeconds(millis / 1000)<br>         .setNanos((int) ((millis % 1000) * 1000000)).build();<br><br> Example 5: Compute Timestamp from Java `Instant.now()`.<br><br>     Instant now = Instant.now();<br><br>     Timestamp timestamp =<br>         Timestamp.newBuilder().setSeconds(now.getEpochSecond())<br>             .setNanos(now.getNano()).build();<br><br> Example 6: Compute Timestamp from current time in Python.<br><br>     timestamp = Timestamp()<br>     timestamp.GetCurrentTime()<br><br> # JSON Mapping<br><br> In JSON format, the Timestamp type is encoded as a string in the<br> [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. That is, the<br> format is "{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z"<br> where {year} is always expressed using four digits while {month}, {day},<br> {hour}, {min}, and {sec} are zero-padded to two digits each. The fractional<br> seconds, which can go up to 9 digits (i.e. up to 1 nanosecond resolution),<br> are optional. The "Z" suffix indicates the timezone ("UTC"); the timezone<br> is required. A proto3 JSON serializer should always use UTC (as indicated by<br> "Z") when printing the Timestamp type and a proto3 JSON parser should be<br> able to accept both UTC and other timezones (as indicated by an offset).<br><br> For example, "2017-01-15T01:30:15.01Z" encodes 15.01 seconds past<br> 01:30 UTC on January 15, 2017.<br><br> In JavaScript, one can convert a Date object to this format using the<br> standard<br> [toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)<br> method. In Python, a standard `datetime.datetime` object can be converted<br> to this format using<br> [`strftime`](https://docs.python.org/2/library/time.html#time.strftime) with<br> the time format spec '%Y-%m-%dT%H:%M:%S.%fZ'. Likewise, in Java, one can use<br> the Joda Time's [`ISODateTimeFormat.dateTime()`](<br> http://joda-time.sourceforge.net/apidocs/org/joda/time/format/ISODateTimeFormat.html#dateTime()<br> ) to obtain a formatter capable of generating timestamps in this format.|
|finishedAt|[google.protobuf.Timestamp](#schemagoogle.protobuf.timestamp)|false|none|A Timestamp represents a point in time independent of any time zone or local<br> calendar, encoded as a count of seconds and fractions of seconds at<br> nanosecond resolution. The count is relative to an epoch at UTC midnight on<br> January 1, 1970, in the proleptic Gregorian calendar which extends the<br> Gregorian calendar backwards to year one.<br><br> All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap<br> second table is needed for interpretation, using a [24-hour linear<br> smear](https://developers.google.com/time/smear).<br><br> The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By<br> restricting to that range, we ensure that we can convert to and from [RFC<br> 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings.<br><br> # Examples<br><br> Example 1: Compute Timestamp from POSIX `time()`.<br><br>     Timestamp timestamp;<br>     timestamp.set_seconds(time(NULL));<br>     timestamp.set_nanos(0);<br><br> Example 2: Compute Timestamp from POSIX `gettimeofday()`.<br><br>     struct timeval tv;<br>     gettimeofday(&tv, NULL);<br><br>     Timestamp timestamp;<br>     timestamp.set_seconds(tv.tv_sec);<br>     timestamp.set_nanos(tv.tv_usec * 1000);<br><br> Example 3: Compute Timestamp from Win32 `GetSystemTimeAsFileTime()`.<br><br>     FILETIME ft;<br>     GetSystemTimeAsFileTime(&ft);<br>     UINT64 ticks = (((UINT64)ft.dwHighDateTime) << 32) \| ft.dwLowDateTime;<br><br>     // A Windows tick is 100 nanoseconds. Windows epoch 1601-01-01T00:00:00Z<br>     // is 11644473600 seconds before Unix epoch 1970-01-01T00:00:00Z.<br>     Timestamp timestamp;<br>     timestamp.set_seconds((INT64) ((ticks / 10000000) - 11644473600LL));<br>     timestamp.set_nanos((INT32) ((ticks % 10000000) * 100));<br><br> Example 4: Compute Timestamp from Java `System.currentTimeMillis()`.<br><br>     long millis = System.currentTimeMillis();<br><br>     Timestamp timestamp = Timestamp.newBuilder().setSeconds(millis / 1000)<br>         .setNanos((int) ((millis % 1000) * 1000000)).build();<br><br> Example 5: Compute Timestamp from Java `Instant.now()`.<br><br>     Instant now = Instant.now();<br><br>     Timestamp timestamp =<br>         Timestamp.newBuilder().setSeconds(now.getEpochSecond())<br>             .setNanos(now.getNano()).build();<br><br> Example 6: Compute Timestamp from current time in Python.<br><br>     timestamp = Timestamp()<br>     timestamp.GetCurrentTime()<br><br> # JSON Mapping<br><br> In JSON format, the Timestamp type is encoded as a string in the<br> [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. That is, the<br> format is "{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z"<br> where {year} is always expressed using four digits while {month}, {day},<br> {hour}, {min}, and {sec} are zero-padded to two digits each. The fractional<br> seconds, which can go up to 9 digits (i.e. up to 1 nanosecond resolution),<br> are optional. The "Z" suffix indicates the timezone ("UTC"); the timezone<br> is required. A proto3 JSON serializer should always use UTC (as indicated by<br> "Z") when printing the Timestamp type and a proto3 JSON parser should be<br> able to accept both UTC and other timezones (as indicated by an offset).<br><br> For example, "2017-01-15T01:30:15.01Z" encodes 15.01 seconds past<br> 01:30 UTC on January 15, 2017.<br><br> In JavaScript, one can convert a Date object to this format using the<br> standard<br> [toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)<br> method. In Python, a standard `datetime.datetime` object can be converted<br> to this format using<br> [`strftime`](https://docs.python.org/2/library/time.html#time.strftime) with<br> the time format spec '%Y-%m-%dT%H:%M:%S.%fZ'. Likewise, in Java, one can use<br> the Joda Time's [`ISODateTimeFormat.dateTime()`](<br> http://joda-time.sourceforge.net/apidocs/org/joda/time/format/ISODateTimeFormat.html#dateTime()<br> ) to obtain a formatter capable of generating timestamps in this format.|
|sizeBytes|integer \| string(int64)|false|none|Size of the uploaded ELF file in bytes.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UPLOADING|
|state|STATE_UPLOADED|

<h2 id="tocS_debuginfo.v1alpha1.ObjectMetadata.State">debuginfo.v1alpha1.ObjectMetadata.State</h2>
<!-- backwards compatibility -->
<a id="schemadebuginfo.v1alpha1.objectmetadata.state"></a>
<a id="schema_debuginfo.v1alpha1.ObjectMetadata.State"></a>
<a id="tocSdebuginfo.v1alpha1.objectmetadata.state"></a>
<a id="tocsdebuginfo.v1alpha1.objectmetadata.state"></a>

```json
"STATE_UPLOADING"
```

<h2 id="tocS_debuginfo.v1alpha1.ShouldInitiateUploadRequest">debuginfo.v1alpha1.ShouldInitiateUploadRequest</h2>
<!-- backwards compatibility -->
<a id="schemadebuginfo.v1alpha1.shouldinitiateuploadrequest"></a>
<a id="schema_debuginfo.v1alpha1.ShouldInitiateUploadRequest"></a>
<a id="tocSdebuginfo.v1alpha1.shouldinitiateuploadrequest"></a>
<a id="tocsdebuginfo.v1alpha1.shouldinitiateuploadrequest"></a>

```json
{
  "file": {
    "gnuBuildId": "string",
    "goBuildId": "string",
    "otelFileId": "string",
    "name": "string",
    "type": "TYPE_UNSPECIFIED"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|[debuginfo.v1alpha1.FileMetadata](#schemadebuginfo.v1alpha1.filemetadata)|false|none|none|

<h2 id="tocS_debuginfo.v1alpha1.ShouldInitiateUploadResponse">debuginfo.v1alpha1.ShouldInitiateUploadResponse</h2>
<!-- backwards compatibility -->
<a id="schemadebuginfo.v1alpha1.shouldinitiateuploadresponse"></a>
<a id="schema_debuginfo.v1alpha1.ShouldInitiateUploadResponse"></a>
<a id="tocSdebuginfo.v1alpha1.shouldinitiateuploadresponse"></a>
<a id="tocsdebuginfo.v1alpha1.shouldinitiateuploadresponse"></a>

```json
{
  "shouldInitiateUpload": true,
  "reason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shouldInitiateUpload|boolean|false|none|none|
|reason|string|false|none|none|

<h2 id="tocS_debuginfo.v1alpha1.UploadFinishedRequest">debuginfo.v1alpha1.UploadFinishedRequest</h2>
<!-- backwards compatibility -->
<a id="schemadebuginfo.v1alpha1.uploadfinishedrequest"></a>
<a id="schema_debuginfo.v1alpha1.UploadFinishedRequest"></a>
<a id="tocSdebuginfo.v1alpha1.uploadfinishedrequest"></a>
<a id="tocsdebuginfo.v1alpha1.uploadfinishedrequest"></a>

```json
{
  "gnuBuildId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gnuBuildId|string|false|none|none|

<h2 id="tocS_debuginfo.v1alpha1.UploadFinishedResponse">debuginfo.v1alpha1.UploadFinishedResponse</h2>
<!-- backwards compatibility -->
<a id="schemadebuginfo.v1alpha1.uploadfinishedresponse"></a>
<a id="schema_debuginfo.v1alpha1.UploadFinishedResponse"></a>
<a id="tocSdebuginfo.v1alpha1.uploadfinishedresponse"></a>
<a id="tocsdebuginfo.v1alpha1.uploadfinishedresponse"></a>

```json
{}
```

<h2 id="tocS_google.protobuf.Timestamp">google.protobuf.Timestamp</h2>
<!-- backwards compatibility -->
<a id="schemagoogle.protobuf.timestamp"></a>
<a id="schema_google.protobuf.Timestamp"></a>
<a id="tocSgoogle.protobuf.timestamp"></a>
<a id="tocsgoogle.protobuf.timestamp"></a>

```json
"2023-01-15T01:30:15.01Z"
```

A Timestamp represents a point in time independent of any time zone or local
 calendar, encoded as a count of seconds and fractions of seconds at
 nanosecond resolution. The count is relative to an epoch at UTC midnight on
 January 1, 1970, in the proleptic Gregorian calendar which extends the
 Gregorian calendar backwards to year one.

 All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap
 second table is needed for interpretation, using a [24-hour linear
 smear](https://developers.google.com/time/smear).

 The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By
 restricting to that range, we ensure that we can convert to and from [RFC
 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings.

 # Examples

 Example 1: Compute Timestamp from POSIX `time()`.

     Timestamp timestamp;
     timestamp.set_seconds(time(NULL));
     timestamp.set_nanos(0);

 Example 2: Compute Timestamp from POSIX `gettimeofday()`.

     struct timeval tv;
     gettimeofday(&tv, NULL);

     Timestamp timestamp;
     timestamp.set_seconds(tv.tv_sec);
     timestamp.set_nanos(tv.tv_usec * 1000);

 Example 3: Compute Timestamp from Win32 `GetSystemTimeAsFileTime()`.

     FILETIME ft;
     GetSystemTimeAsFileTime(&ft);
     UINT64 ticks = (((UINT64)ft.dwHighDateTime) << 32) | ft.dwLowDateTime;

     // A Windows tick is 100 nanoseconds. Windows epoch 1601-01-01T00:00:00Z
     // is 11644473600 seconds before Unix epoch 1970-01-01T00:00:00Z.
     Timestamp timestamp;
     timestamp.set_seconds((INT64) ((ticks / 10000000) - 11644473600LL));
     timestamp.set_nanos((INT32) ((ticks % 10000000) * 100));

 Example 4: Compute Timestamp from Java `System.currentTimeMillis()`.

     long millis = System.currentTimeMillis();

     Timestamp timestamp = Timestamp.newBuilder().setSeconds(millis / 1000)
         .setNanos((int) ((millis % 1000) * 1000000)).build();

 Example 5: Compute Timestamp from Java `Instant.now()`.

     Instant now = Instant.now();

     Timestamp timestamp =
         Timestamp.newBuilder().setSeconds(now.getEpochSecond())
             .setNanos(now.getNano()).build();

 Example 6: Compute Timestamp from current time in Python.

     timestamp = Timestamp()
     timestamp.GetCurrentTime()

 # JSON Mapping

 In JSON format, the Timestamp type is encoded as a string in the
 [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. That is, the
 format is "{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z"
 where {year} is always expressed using four digits while {month}, {day},
 {hour}, {min}, and {sec} are zero-padded to two digits each. The fractional
 seconds, which can go up to 9 digits (i.e. up to 1 nanosecond resolution),
 are optional. The "Z" suffix indicates the timezone ("UTC"); the timezone
 is required. A proto3 JSON serializer should always use UTC (as indicated by
 "Z") when printing the Timestamp type and a proto3 JSON parser should be
 able to accept both UTC and other timezones (as indicated by an offset).

 For example, "2017-01-15T01:30:15.01Z" encodes 15.01 seconds past
 01:30 UTC on January 15, 2017.

 In JavaScript, one can convert a Date object to this format using the
 standard
 [toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
 method. In Python, a standard `datetime.datetime` object can be converted
 to this format using
 [`strftime`](https://docs.python.org/2/library/time.html#time.strftime) with
 the time format spec '%Y-%m-%dT%H:%M:%S.%fZ'. Likewise, in Java, one can use
 the Joda Time's [`ISODateTimeFormat.dateTime()`](
 http://joda-time.sourceforge.net/apidocs/org/joda/time/format/ISODateTimeFormat.html#dateTime()
 ) to obtain a formatter capable of generating timestamps in this format.
