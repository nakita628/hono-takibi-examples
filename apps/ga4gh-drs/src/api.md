<h1 id="data-repository-service">Data Repository Service v1.5.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://drs.example.org/ga4gh/drs/v1">https://drs.example.org/ga4gh/drs/v1</a>

<a href="https://www.ga4gh.org/terms-and-conditions/">Terms of service</a>
Email: <a href="mailto:ga4gh-cloud@ga4gh.org">GA4GH Cloud Work Stream</a> 
License: <a href="https://raw.githubusercontent.com/ga4gh/data-repository-service-schemas/master/LICENSE">Apache 2.0</a>

# Authentication

- HTTP Authentication, scheme: basic A valid authorization token must be passed in the 'Authorization' header,
e.g. "Basic ${token_string}"

- HTTP Authentication, scheme: bearer A valid authorization token must be passed in the 'Authorization' header, e.g. "Bearer ${token_string}"

- HTTP Authentication, scheme: bearer A valid GA4GH Passport must be passed in the body of an HTTP POST request as a tokens[] array.

<h1 id="data-repository-service-objects">Objects</h1>

## Get info about a DrsObject.

<a id="opIdGetObject"></a>

> Code samples

```bash
curl http://localhost:8080/objects/string \
  -H 'Accept: application/json'
```

`GET /objects/{object_id}`

Returns object metadata, and a list of access methods that can be used to fetch object bytes.

<h3 id="get-info-about-a-drsobject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|object_id|path|string|true|`DrsObject` identifier|
|expand|query|boolean|false|If false and the object_id refers to a bundle, then the ContentsObject array contains only those objects directly contained in the bundle. That is, if the bundle contains other bundles, those other bundles are not recursively included in the result.<br>If true and the object_id refers to a bundle, then the entire set of objects in the bundle is expanded. That is, if the bundle contains other bundles, then those other bundles are recursively expanded and included in the result. Recursion continues through the entire sub-tree of the bundle.<br>If the object_id refers to a blob, then the query parameter is ignored.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "self_uri": "drs://drs.example.org/314159",
  "size": 0,
  "created_time": "1970-01-01T00:00:00Z",
  "updated_time": "1970-01-01T00:00:00Z",
  "version": "string",
  "mime_type": "application/json",
  "checksums": [
    {
      "checksum": "string",
      "type": "sha-256"
    }
  ],
  "access_methods": [
    {
      "type": "s3",
      "access_url": {
        "url": "string",
        "headers": "Authorization: Basic Z2E0Z2g6ZHJz"
      },
      "access_id": "string",
      "cloud": "aws, gcp, or azure",
      "region": "us-east-1",
      "available": true,
      "authorizations": {
        "drs_object_id": "string",
        "supported_types": [
          "None"
        ],
        "passport_auth_issuers": [
          "string"
        ],
        "bearer_auth_issuers": [
          "string"
        ]
      }
    }
  ],
  "contents": [
    {
      "name": "string",
      "id": "string",
      "drs_uri": "drs://drs.example.org/314159",
      "contents": [
        {
          "name": "string",
          "id": "string",
          "drs_uri": "drs://drs.example.org/314159",
          "contents": [
            {}
          ]
        }
      ]
    }
  ],
  "description": "string",
  "aliases": [
    "string"
  ]
}
```

> 400 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 401 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 403 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 404 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 500 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

<h3 id="get-info-about-a-drsobject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `DrsObject` was found successfully|Inline|
|202|Accepted|The operation is delayed and will continue asynchronously. The client should retry this same request after the delay specified by Retry-After header.<br>|None|
|400|Bad Request|The request is malformed.|Inline|
|401|Unauthorized|The request is unauthorized.|Inline|
|403|Forbidden|The requester is not authorized to perform this action.|Inline|
|404|Not Found|The requested `DrsObject` wasn't found.|Inline|
|500|Internal Server Error|An unexpected error occurred.|Inline|

<h3 id="get-info-about-a-drsobject-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|An identifier unique to this `DrsObject`|
|name|string|false|none|A string that can be used to name a `DrsObject`.<br>This string is made up of uppercase and lowercase letters, decimal digits, hyphen, period, and underscore [A-Za-z0-9.-_]. See http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap03.html#tag_03_282[portable filenames].|
|self_uri|string|true|none|A drs:// hostname-based URI, as defined in the DRS documentation, that tells clients how to access this object.<br>The intent of this field is to make DRS objects self-contained, and therefore easier for clients to store and pass around.  For example, if you arrive at this DRS JSON by resolving a compact identifier-based DRS URI, the `self_uri` presents you with a hostname and properly encoded DRS ID for use in subsequent `access` endpoint calls.|
|size|integer(int64)|true|none|For blobs, the blob size in bytes.<br>For bundles, the cumulative size, in bytes, of items in the `contents` field.|
|created_time|string(date-time)|true|none|Timestamp of content creation in RFC3339.<br>(This is the creation time of the underlying content, not of the JSON object.)|
|updated_time|string(date-time)|false|none|Timestamp of content update in RFC3339, identical to `created_time` in systems that do not support updates. (This is the update time of the underlying content, not of the JSON object.)|
|version|string|false|none|A string representing a version.<br>(Some systems may use checksum, a RFC3339 timestamp, or an incrementing version number.)|
|mime_type|string|false|none|A string providing the mime-type of the `DrsObject`.|
|checksums|[object]|true|none|The checksum of the `DrsObject`. At least one checksum must be provided.<br>For blobs, the checksum is computed over the bytes in the blob.<br>For bundles, the checksum is computed over a sorted concatenation of the checksums of its top-level contained objects (not recursive, names not included). The list of checksums is sorted alphabetically (hex-code) before concatenation and a further checksum is performed on the concatenated checksum value.<br>For example, if a bundle contains blobs with the following checksums:<br>md5(blob1) = 72794b6d<br>md5(blob2) = 5e089d29<br>Then the checksum of the bundle is:<br>md5( concat( sort( md5(blob1), md5(blob2) ) ) )<br>= md5( concat( sort( 72794b6d, 5e089d29 ) ) )<br>= md5( concat( 5e089d29, 72794b6d ) )<br>= md5( 5e089d2972794b6d )<br>= f7a29a04|
|» checksum|string|true|none|The hex-string encoded checksum for the data|
|» type|string|true|none|The digest method used to create the checksum.<br>The value (e.g. `sha-256`) SHOULD be listed as `Hash Name String` in the https://www.iana.org/assignments/named-information/named-information.xhtml#hash-alg[IANA Named Information Hash Algorithm Registry]. Other values MAY be used, as long as implementors are aware of the issues discussed in https://tools.ietf.org/html/rfc6920#section-9.4[RFC6920].<br>GA4GH may provide more explicit guidance for use of non-IANA-registered algorithms in the future. Until then, if implementers do choose such an algorithm (e.g. because it's implemented by their storage provider), they SHOULD use an existing standard `type` value such as `md5`, `etag`, `crc32c`, `trunc512`, or `sha1`.|
|access_methods|[object]|false|none|The list of access methods that can be used to fetch the `DrsObject`.<br>Required for single blobs; optional for bundles.|
|» type|string|true|none|Type of the access method.|
|» access_url|object|false|none|none|
|» » url|string|true|none|A fully resolvable URL that can be used to fetch the actual object bytes.|
|» » headers|[string]|false|none|An optional list of headers to include in the HTTP request to `url`. These headers can be used to provide auth tokens required to fetch the object bytes.|
|» access_id|string|false|none|An arbitrary string to be passed to the `/access` method to get an `AccessURL`. This string must be unique within the scope of a single object. Note that at least one of `access_url` and `access_id` must be provided.|
|» cloud|string|false|none|Name of the cloud service provider that the object belongs to. If the cloud service is Amazon Web Services, Google Cloud Platform or Azure the values should be `aws`, `gcp`, or `azure` respectively.|
|» region|string|false|none|Name of the region in the cloud service provider that the object belongs to.|
|» available|boolean|false|none|Availablity of file in the cloud. This label defines if this file is immediately accessible via DRS. Any delay or requirement of thawing mechanism if the file is in offline/archival storage is classified as false, meaning it is unavailable.|
|» authorizations|object|false|none|none|
|» » drs_object_id|string|false|none|none|
|» » supported_types|[string]|false|none|An Optional list of support authorization types. More than one can be supported and tried in sequence. Defaults to `None` if empty or missing.|
|» » passport_auth_issuers|[string]|false|none|If authorizations contain `PassportAuth` this is a required list of visa issuers (as found in a visa's `iss` claim) that may authorize access to this object. The caller must only provide passports that contain visas from this list. It is strongly recommended that the caller validate that it is appropriate to send the requested passport/visa to the DRS server to mitigate attacks by malicious DRS servers requesting credentials they should not have.|
|» » bearer_auth_issuers|[string]|false|none|If authorizations contain `BearerAuth` this is an optional list of issuers that may authorize access to this object. The caller must provide a token from one of these issuers. If this is empty or missing it assumed the caller knows which token to send via other means. It is strongly recommended that the caller validate that it is appropriate to send the requested token to the DRS server to mitigate attacks by malicious DRS servers requesting credentials they should not have.|
|contents|[object]|false|none|If not set, this `DrsObject` is a single blob.<br>If set, this `DrsObject` is a bundle containing the listed `ContentsObject` s (some of which may be further nested).|
|» name|string|true|none|A name declared by the bundle author that must be used when materialising this object, overriding any name directly associated with the object itself. The name must be unique within the containing bundle. This string is made up of uppercase and lowercase letters, decimal digits, hyphen, period, and underscore [A-Za-z0-9.-_]. See http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap03.html#tag_03_282[portable filenames].|
|» id|string|false|none|A DRS identifier of a `DrsObject` (either a single blob or a nested bundle). If this ContentsObject is an object within a nested bundle, then the id is optional. Otherwise, the id is required.|
|» drs_uri|[string]|false|none|A list of full DRS identifier URI paths that may be used to obtain the object. These URIs may be external to this DRS instance.|
|» contents|[[items](#schemaitems)]|false|none|If this ContentsObject describes a nested bundle and the caller specified "?expand=true" on the request, then this contents array must be present and describe the objects within the nested bundle.|
|description|string|false|none|A human readable description of the `DrsObject`.|
|aliases|[string]|false|none|A list of strings that can be used to find other metadata about this `DrsObject` from external metadata sources. These aliases can be used to represent secondary accession numbers or external GUIDs.|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|s3|
|» type|gs|
|» type|ftp|
|» type|gsiftp|
|» type|globus|
|» type|htsget|
|» type|https|
|» type|file|
|» » supported_types|None|
|» » supported_types|BasicAuth|
|» » supported_types|BearerAuth|
|» » supported_types|PassportAuth|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|202|Retry-After|integer|int64|Delay in seconds. The client should retry this same request after waiting for this duration. To simplify client response processing, this must be an integral relative time in seconds. This value SHOULD represent the minimum duration the client should wait before attempting the operation again with a reasonable expectation of success. When it is not feasible for the server to determine the actual expected delay, the server may return a brief, fixed value instead.<br>|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
BasicAuth, BearerAuth
</aside>

## Get info about a DrsObject through POST'ing a Passport.

<a id="opIdPostObject"></a>

> Code samples

```bash
curl http://localhost:8080/objects/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "expand": false,
    "passports": [
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJnYTRnaF9wYXNzcG9ydF92MSI6W119.JJ5rN0ktP0qwyZmIPpxmF_p7JsxAZH6L6brUxtad3CM"
    ]
  }'
```

`POST /objects/{object_id}`

Returns object metadata, and a list of access methods that can be used to fetch object bytes.
Method is a POST to accommodate a JWT GA4GH Passport sent in the formData in order to authorize access.

> Body parameter

```json
{
  "expand": false,
  "passports": [
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJnYTRnaF9wYXNzcG9ydF92MSI6W119.JJ5rN0ktP0qwyZmIPpxmF_p7JsxAZH6L6brUxtad3CM"
  ]
}
```

<h3 id="get-info-about-a-drsobject-through-posting-a-passport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|object_id|path|string|true|`DrsObject` identifier|
|body|body|object|true|none|
|» expand|body|boolean|false|If false and the object_id refers to a bundle, then the ContentsObject array contains only those objects directly contained in the bundle. That is, if the bundle contains other bundles, those other bundles are not recursively included in the result.<br>If true and the object_id refers to a bundle, then the entire set of objects in the bundle is expanded. That is, if the bundle contains other bundles, then those other bundles are recursively expanded and included in the result. Recursion continues through the entire sub-tree of the bundle.<br>If the object_id refers to a blob, then the query parameter is ignored.|
|» passports|body|[string]|false|the encoded JWT GA4GH Passport that contains embedded Visas.  The overall JWT is signed as are the individual Passport Visas.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "self_uri": "drs://drs.example.org/314159",
  "size": 0,
  "created_time": "1970-01-01T00:00:00Z",
  "updated_time": "1970-01-01T00:00:00Z",
  "version": "string",
  "mime_type": "application/json",
  "checksums": [
    {
      "checksum": "string",
      "type": "sha-256"
    }
  ],
  "access_methods": [
    {
      "type": "s3",
      "access_url": {
        "url": "string",
        "headers": "Authorization: Basic Z2E0Z2g6ZHJz"
      },
      "access_id": "string",
      "cloud": "aws, gcp, or azure",
      "region": "us-east-1",
      "available": true,
      "authorizations": {
        "drs_object_id": "string",
        "supported_types": [
          "None"
        ],
        "passport_auth_issuers": [
          "string"
        ],
        "bearer_auth_issuers": [
          "string"
        ]
      }
    }
  ],
  "contents": [
    {
      "name": "string",
      "id": "string",
      "drs_uri": "drs://drs.example.org/314159",
      "contents": [
        {
          "name": "string",
          "id": "string",
          "drs_uri": "drs://drs.example.org/314159",
          "contents": [
            {}
          ]
        }
      ]
    }
  ],
  "description": "string",
  "aliases": [
    "string"
  ]
}
```

> 400 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 401 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 403 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 404 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 500 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

<h3 id="get-info-about-a-drsobject-through-posting-a-passport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `DrsObject` was found successfully|Inline|
|202|Accepted|The operation is delayed and will continue asynchronously. The client should retry this same request after the delay specified by Retry-After header.<br>|None|
|400|Bad Request|The request is malformed.|Inline|
|401|Unauthorized|The request is unauthorized.|Inline|
|403|Forbidden|The requester is not authorized to perform this action.|Inline|
|404|Not Found|The requested `AccessURL` wasn't found.|Inline|
|500|Internal Server Error|An unexpected error occurred.|Inline|

<h3 id="get-info-about-a-drsobject-through-posting-a-passport-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|An identifier unique to this `DrsObject`|
|name|string|false|none|A string that can be used to name a `DrsObject`.<br>This string is made up of uppercase and lowercase letters, decimal digits, hyphen, period, and underscore [A-Za-z0-9.-_]. See http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap03.html#tag_03_282[portable filenames].|
|self_uri|string|true|none|A drs:// hostname-based URI, as defined in the DRS documentation, that tells clients how to access this object.<br>The intent of this field is to make DRS objects self-contained, and therefore easier for clients to store and pass around.  For example, if you arrive at this DRS JSON by resolving a compact identifier-based DRS URI, the `self_uri` presents you with a hostname and properly encoded DRS ID for use in subsequent `access` endpoint calls.|
|size|integer(int64)|true|none|For blobs, the blob size in bytes.<br>For bundles, the cumulative size, in bytes, of items in the `contents` field.|
|created_time|string(date-time)|true|none|Timestamp of content creation in RFC3339.<br>(This is the creation time of the underlying content, not of the JSON object.)|
|updated_time|string(date-time)|false|none|Timestamp of content update in RFC3339, identical to `created_time` in systems that do not support updates. (This is the update time of the underlying content, not of the JSON object.)|
|version|string|false|none|A string representing a version.<br>(Some systems may use checksum, a RFC3339 timestamp, or an incrementing version number.)|
|mime_type|string|false|none|A string providing the mime-type of the `DrsObject`.|
|checksums|[object]|true|none|The checksum of the `DrsObject`. At least one checksum must be provided.<br>For blobs, the checksum is computed over the bytes in the blob.<br>For bundles, the checksum is computed over a sorted concatenation of the checksums of its top-level contained objects (not recursive, names not included). The list of checksums is sorted alphabetically (hex-code) before concatenation and a further checksum is performed on the concatenated checksum value.<br>For example, if a bundle contains blobs with the following checksums:<br>md5(blob1) = 72794b6d<br>md5(blob2) = 5e089d29<br>Then the checksum of the bundle is:<br>md5( concat( sort( md5(blob1), md5(blob2) ) ) )<br>= md5( concat( sort( 72794b6d, 5e089d29 ) ) )<br>= md5( concat( 5e089d29, 72794b6d ) )<br>= md5( 5e089d2972794b6d )<br>= f7a29a04|
|» checksum|string|true|none|The hex-string encoded checksum for the data|
|» type|string|true|none|The digest method used to create the checksum.<br>The value (e.g. `sha-256`) SHOULD be listed as `Hash Name String` in the https://www.iana.org/assignments/named-information/named-information.xhtml#hash-alg[IANA Named Information Hash Algorithm Registry]. Other values MAY be used, as long as implementors are aware of the issues discussed in https://tools.ietf.org/html/rfc6920#section-9.4[RFC6920].<br>GA4GH may provide more explicit guidance for use of non-IANA-registered algorithms in the future. Until then, if implementers do choose such an algorithm (e.g. because it's implemented by their storage provider), they SHOULD use an existing standard `type` value such as `md5`, `etag`, `crc32c`, `trunc512`, or `sha1`.|
|access_methods|[object]|false|none|The list of access methods that can be used to fetch the `DrsObject`.<br>Required for single blobs; optional for bundles.|
|» type|string|true|none|Type of the access method.|
|» access_url|object|false|none|none|
|» » url|string|true|none|A fully resolvable URL that can be used to fetch the actual object bytes.|
|» » headers|[string]|false|none|An optional list of headers to include in the HTTP request to `url`. These headers can be used to provide auth tokens required to fetch the object bytes.|
|» access_id|string|false|none|An arbitrary string to be passed to the `/access` method to get an `AccessURL`. This string must be unique within the scope of a single object. Note that at least one of `access_url` and `access_id` must be provided.|
|» cloud|string|false|none|Name of the cloud service provider that the object belongs to. If the cloud service is Amazon Web Services, Google Cloud Platform or Azure the values should be `aws`, `gcp`, or `azure` respectively.|
|» region|string|false|none|Name of the region in the cloud service provider that the object belongs to.|
|» available|boolean|false|none|Availablity of file in the cloud. This label defines if this file is immediately accessible via DRS. Any delay or requirement of thawing mechanism if the file is in offline/archival storage is classified as false, meaning it is unavailable.|
|» authorizations|object|false|none|none|
|» » drs_object_id|string|false|none|none|
|» » supported_types|[string]|false|none|An Optional list of support authorization types. More than one can be supported and tried in sequence. Defaults to `None` if empty or missing.|
|» » passport_auth_issuers|[string]|false|none|If authorizations contain `PassportAuth` this is a required list of visa issuers (as found in a visa's `iss` claim) that may authorize access to this object. The caller must only provide passports that contain visas from this list. It is strongly recommended that the caller validate that it is appropriate to send the requested passport/visa to the DRS server to mitigate attacks by malicious DRS servers requesting credentials they should not have.|
|» » bearer_auth_issuers|[string]|false|none|If authorizations contain `BearerAuth` this is an optional list of issuers that may authorize access to this object. The caller must provide a token from one of these issuers. If this is empty or missing it assumed the caller knows which token to send via other means. It is strongly recommended that the caller validate that it is appropriate to send the requested token to the DRS server to mitigate attacks by malicious DRS servers requesting credentials they should not have.|
|contents|[object]|false|none|If not set, this `DrsObject` is a single blob.<br>If set, this `DrsObject` is a bundle containing the listed `ContentsObject` s (some of which may be further nested).|
|» name|string|true|none|A name declared by the bundle author that must be used when materialising this object, overriding any name directly associated with the object itself. The name must be unique within the containing bundle. This string is made up of uppercase and lowercase letters, decimal digits, hyphen, period, and underscore [A-Za-z0-9.-_]. See http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap03.html#tag_03_282[portable filenames].|
|» id|string|false|none|A DRS identifier of a `DrsObject` (either a single blob or a nested bundle). If this ContentsObject is an object within a nested bundle, then the id is optional. Otherwise, the id is required.|
|» drs_uri|[string]|false|none|A list of full DRS identifier URI paths that may be used to obtain the object. These URIs may be external to this DRS instance.|
|» contents|[[items](#schemaitems)]|false|none|If this ContentsObject describes a nested bundle and the caller specified "?expand=true" on the request, then this contents array must be present and describe the objects within the nested bundle.|
|description|string|false|none|A human readable description of the `DrsObject`.|
|aliases|[string]|false|none|A list of strings that can be used to find other metadata about this `DrsObject` from external metadata sources. These aliases can be used to represent secondary accession numbers or external GUIDs.|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|s3|
|» type|gs|
|» type|ftp|
|» type|gsiftp|
|» type|globus|
|» type|htsget|
|» type|https|
|» type|file|
|» » supported_types|None|
|» » supported_types|BasicAuth|
|» » supported_types|BearerAuth|
|» » supported_types|PassportAuth|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|202|Retry-After|integer|int64|Delay in seconds. The client should retry this same request after waiting for this duration. To simplify client response processing, this must be an integral relative time in seconds. This value SHOULD represent the minimum duration the client should wait before attempting the operation again with a reasonable expectation of success. When it is not feasible for the server to determine the actual expected delay, the server may return a brief, fixed value instead.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PassportAuth
</aside>

## Get Authorization info about a DrsObject.

<a id="opIdOptionsObject"></a>

> Code samples

```bash
curl http://localhost:8080/objects/string \
  -X OPTIONS \
  -H 'Accept: application/json'
```

`OPTIONS /objects/{object_id}`

Returns a list of `Authorizations` that can be used to determine how to authorize requests to `GetObject` or `PostObject`.

<h3 id="get-authorization-info-about-a-drsobject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|object_id|path|string|true|`DrsObject` identifier|

> Example responses

> 200 Response

```json
{
  "drs_object_id": "string",
  "supported_types": [
    "None"
  ],
  "passport_auth_issuers": [
    "string"
  ],
  "bearer_auth_issuers": [
    "string"
  ]
}
```

> 400 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 404 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 500 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

<h3 id="get-authorization-info-about-a-drsobject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|`Authorizations` were found successfully|Inline|
|204|No Content|`Authorizations` are not supported for this object. Default to `None`.|None|
|400|Bad Request|The request is malformed.|Inline|
|404|Not Found|The requested `DrsObject` wasn't found.|Inline|
|405|Method Not Allowed|`Authorizations` are not supported for this object. Default to `None`.|None|
|500|Internal Server Error|An unexpected error occurred.|Inline|

<h3 id="get-authorization-info-about-a-drsobject-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|drs_object_id|string|false|none|none|
|supported_types|[string]|false|none|An Optional list of support authorization types. More than one can be supported and tried in sequence. Defaults to `None` if empty or missing.|
|passport_auth_issuers|[string]|false|none|If authorizations contain `PassportAuth` this is a required list of visa issuers (as found in a visa's `iss` claim) that may authorize access to this object. The caller must only provide passports that contain visas from this list. It is strongly recommended that the caller validate that it is appropriate to send the requested passport/visa to the DRS server to mitigate attacks by malicious DRS servers requesting credentials they should not have.|
|bearer_auth_issuers|[string]|false|none|If authorizations contain `BearerAuth` this is an optional list of issuers that may authorize access to this object. The caller must provide a token from one of these issuers. If this is empty or missing it assumed the caller knows which token to send via other means. It is strongly recommended that the caller validate that it is appropriate to send the requested token to the DRS server to mitigate attacks by malicious DRS servers requesting credentials they should not have.|

#### Enumerated Values

|Property|Value|
|---|---|
|supported_types|None|
|supported_types|BasicAuth|
|supported_types|BearerAuth|
|supported_types|PassportAuth|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

<aside class="success">
This operation does not require authentication
</aside>

## Get info about multiple DrsObjects with an optional Passport(s).

<a id="opIdGetBulkObjects"></a>

> Code samples

```bash
curl http://localhost:8080/objects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "passports": [
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJnYTRnaF9wYXNzcG9ydF92MSI6W119.JJ5rN0ktP0qwyZmIPpxmF_p7JsxAZH6L6brUxtad3CM"
    ],
    "bulk_object_ids": [
      "string"
    ]
  }'
```

`POST /objects`

Returns an array of object metadata, and a list of access methods that can be used to fetch objects' bytes.  Currently this is limited to use passports (one or more) or a single bearer token, so make sure your bulk request is for objects that all use the same passports/token.

> Body parameter

```json
{
  "passports": [
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJnYTRnaF9wYXNzcG9ydF92MSI6W119.JJ5rN0ktP0qwyZmIPpxmF_p7JsxAZH6L6brUxtad3CM"
  ],
  "bulk_object_ids": [
    "string"
  ]
}
```

<h3 id="get-info-about-multiple-drsobjects-with-an-optional-passports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|boolean|false|If false and the object_id refers to a bundle, then the ContentsObject array contains only those objects directly contained in the bundle. That is, if the bundle contains other bundles, those other bundles are not recursively included in the result.<br>If true and the object_id refers to a bundle, then the entire set of objects in the bundle is expanded. That is, if the bundle contains other bundles, then those other bundles are recursively expanded and included in the result. Recursion continues through the entire sub-tree of the bundle.<br>If the object_id refers to a blob, then the query parameter is ignored.|
|body|body|object|true|none|
|» passports|body|[string]|false|the encoded JWT GA4GH Passport that contains embedded Visas.  The overall JWT is signed as are the individual Passport Visas.|
|» bulk_object_ids|body|[string]|false|An array of ObjectIDs.|

> Example responses

> 200 Response

```json
{
  "summary": {
    "requested": 0,
    "resolved": 0,
    "unresolved": 0
  },
  "unresolved_drs_objects": [
    {
      "error_code": 0,
      "object_ids": [
        "string"
      ]
    }
  ],
  "resolved_drs_object": [
    {
      "id": "string",
      "name": "string",
      "self_uri": "drs://drs.example.org/314159",
      "size": 0,
      "created_time": "1970-01-01T00:00:00Z",
      "updated_time": "1970-01-01T00:00:00Z",
      "version": "string",
      "mime_type": "application/json",
      "checksums": [
        {
          "checksum": "string",
          "type": "sha-256"
        }
      ],
      "access_methods": [
        {
          "type": "s3",
          "access_url": {
            "url": "string",
            "headers": "Authorization: Basic Z2E0Z2g6ZHJz"
          },
          "access_id": "string",
          "cloud": "aws, gcp, or azure",
          "region": "us-east-1",
          "available": true,
          "authorizations": {
            "drs_object_id": "string",
            "supported_types": [
              "None"
            ],
            "passport_auth_issuers": [
              "string"
            ],
            "bearer_auth_issuers": [
              "string"
            ]
          }
        }
      ],
      "contents": [
        {
          "name": "string",
          "id": "string",
          "drs_uri": "drs://drs.example.org/314159",
          "contents": [
            {
              "name": "string",
              "id": "string",
              "drs_uri": "drs://drs.example.org/314159",
              "contents": [
                {}
              ]
            }
          ]
        }
      ],
      "description": "string",
      "aliases": [
        "string"
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 401 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 403 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 404 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 413 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 500 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

<h3 id="get-info-about-multiple-drsobjects-with-an-optional-passports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `DrsObjects` were found successfully|Inline|
|202|Accepted|The operation is delayed and will continue asynchronously. The client should retry this same request after the delay specified by Retry-After header.<br>|None|
|400|Bad Request|The request is malformed.|Inline|
|401|Unauthorized|The request is unauthorized.|Inline|
|403|Forbidden|The requester is not authorized to perform this action.|Inline|
|404|Not Found|The requested `DrsObject` wasn't found.|Inline|
|413|Payload Too Large|The bulk request is too large.|Inline|
|500|Internal Server Error|An unexpected error occurred.|Inline|

<h3 id="get-info-about-multiple-drsobjects-with-an-optional-passports-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summary|object|false|none|A summary of what was resolved.|
|» requested|integer|false|none|Number of items requested.|
|» resolved|integer|false|none|Number of objects resolved.|
|» unresolved|integer|false|none|Number of objects not resolved.|
|unresolved_drs_objects|[object]|false|none|Error codes for each unresolved drs objects.|
|» error_code|integer|false|none|none|
|» object_ids|[string]|false|none|none|
|resolved_drs_object|[object]|false|none|none|
|» id|string|true|none|An identifier unique to this `DrsObject`|
|» name|string|false|none|A string that can be used to name a `DrsObject`.<br>This string is made up of uppercase and lowercase letters, decimal digits, hyphen, period, and underscore [A-Za-z0-9.-_]. See http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap03.html#tag_03_282[portable filenames].|
|» self_uri|string|true|none|A drs:// hostname-based URI, as defined in the DRS documentation, that tells clients how to access this object.<br>The intent of this field is to make DRS objects self-contained, and therefore easier for clients to store and pass around.  For example, if you arrive at this DRS JSON by resolving a compact identifier-based DRS URI, the `self_uri` presents you with a hostname and properly encoded DRS ID for use in subsequent `access` endpoint calls.|
|» size|integer(int64)|true|none|For blobs, the blob size in bytes.<br>For bundles, the cumulative size, in bytes, of items in the `contents` field.|
|» created_time|string(date-time)|true|none|Timestamp of content creation in RFC3339.<br>(This is the creation time of the underlying content, not of the JSON object.)|
|» updated_time|string(date-time)|false|none|Timestamp of content update in RFC3339, identical to `created_time` in systems that do not support updates. (This is the update time of the underlying content, not of the JSON object.)|
|» version|string|false|none|A string representing a version.<br>(Some systems may use checksum, a RFC3339 timestamp, or an incrementing version number.)|
|» mime_type|string|false|none|A string providing the mime-type of the `DrsObject`.|
|» checksums|[object]|true|none|The checksum of the `DrsObject`. At least one checksum must be provided.<br>For blobs, the checksum is computed over the bytes in the blob.<br>For bundles, the checksum is computed over a sorted concatenation of the checksums of its top-level contained objects (not recursive, names not included). The list of checksums is sorted alphabetically (hex-code) before concatenation and a further checksum is performed on the concatenated checksum value.<br>For example, if a bundle contains blobs with the following checksums:<br>md5(blob1) = 72794b6d<br>md5(blob2) = 5e089d29<br>Then the checksum of the bundle is:<br>md5( concat( sort( md5(blob1), md5(blob2) ) ) )<br>= md5( concat( sort( 72794b6d, 5e089d29 ) ) )<br>= md5( concat( 5e089d29, 72794b6d ) )<br>= md5( 5e089d2972794b6d )<br>= f7a29a04|
|» » checksum|string|true|none|The hex-string encoded checksum for the data|
|» » type|string|true|none|The digest method used to create the checksum.<br>The value (e.g. `sha-256`) SHOULD be listed as `Hash Name String` in the https://www.iana.org/assignments/named-information/named-information.xhtml#hash-alg[IANA Named Information Hash Algorithm Registry]. Other values MAY be used, as long as implementors are aware of the issues discussed in https://tools.ietf.org/html/rfc6920#section-9.4[RFC6920].<br>GA4GH may provide more explicit guidance for use of non-IANA-registered algorithms in the future. Until then, if implementers do choose such an algorithm (e.g. because it's implemented by their storage provider), they SHOULD use an existing standard `type` value such as `md5`, `etag`, `crc32c`, `trunc512`, or `sha1`.|
|» access_methods|[object]|false|none|The list of access methods that can be used to fetch the `DrsObject`.<br>Required for single blobs; optional for bundles.|
|» » type|string|true|none|Type of the access method.|
|» » access_url|object|false|none|none|
|» » » url|string|true|none|A fully resolvable URL that can be used to fetch the actual object bytes.|
|» » » headers|[string]|false|none|An optional list of headers to include in the HTTP request to `url`. These headers can be used to provide auth tokens required to fetch the object bytes.|
|» » access_id|string|false|none|An arbitrary string to be passed to the `/access` method to get an `AccessURL`. This string must be unique within the scope of a single object. Note that at least one of `access_url` and `access_id` must be provided.|
|» » cloud|string|false|none|Name of the cloud service provider that the object belongs to. If the cloud service is Amazon Web Services, Google Cloud Platform or Azure the values should be `aws`, `gcp`, or `azure` respectively.|
|» » region|string|false|none|Name of the region in the cloud service provider that the object belongs to.|
|» » available|boolean|false|none|Availablity of file in the cloud. This label defines if this file is immediately accessible via DRS. Any delay or requirement of thawing mechanism if the file is in offline/archival storage is classified as false, meaning it is unavailable.|
|» » authorizations|object|false|none|none|
|» » » drs_object_id|string|false|none|none|
|» » » supported_types|[string]|false|none|An Optional list of support authorization types. More than one can be supported and tried in sequence. Defaults to `None` if empty or missing.|
|» » » passport_auth_issuers|[string]|false|none|If authorizations contain `PassportAuth` this is a required list of visa issuers (as found in a visa's `iss` claim) that may authorize access to this object. The caller must only provide passports that contain visas from this list. It is strongly recommended that the caller validate that it is appropriate to send the requested passport/visa to the DRS server to mitigate attacks by malicious DRS servers requesting credentials they should not have.|
|» » » bearer_auth_issuers|[string]|false|none|If authorizations contain `BearerAuth` this is an optional list of issuers that may authorize access to this object. The caller must provide a token from one of these issuers. If this is empty or missing it assumed the caller knows which token to send via other means. It is strongly recommended that the caller validate that it is appropriate to send the requested token to the DRS server to mitigate attacks by malicious DRS servers requesting credentials they should not have.|
|» contents|[object]|false|none|If not set, this `DrsObject` is a single blob.<br>If set, this `DrsObject` is a bundle containing the listed `ContentsObject` s (some of which may be further nested).|
|» » name|string|true|none|A name declared by the bundle author that must be used when materialising this object, overriding any name directly associated with the object itself. The name must be unique within the containing bundle. This string is made up of uppercase and lowercase letters, decimal digits, hyphen, period, and underscore [A-Za-z0-9.-_]. See http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap03.html#tag_03_282[portable filenames].|
|» » id|string|false|none|A DRS identifier of a `DrsObject` (either a single blob or a nested bundle). If this ContentsObject is an object within a nested bundle, then the id is optional. Otherwise, the id is required.|
|» » drs_uri|[string]|false|none|A list of full DRS identifier URI paths that may be used to obtain the object. These URIs may be external to this DRS instance.|
|» » contents|[[items](#schemaitems)]|false|none|If this ContentsObject describes a nested bundle and the caller specified "?expand=true" on the request, then this contents array must be present and describe the objects within the nested bundle.|
|» description|string|false|none|A human readable description of the `DrsObject`.|
|» aliases|[string]|false|none|A list of strings that can be used to find other metadata about this `DrsObject` from external metadata sources. These aliases can be used to represent secondary accession numbers or external GUIDs.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » type|s3|
|» » type|gs|
|» » type|ftp|
|» » type|gsiftp|
|» » type|globus|
|» » type|htsget|
|» » type|https|
|» » type|file|
|» » » supported_types|None|
|» » » supported_types|BasicAuth|
|» » » supported_types|BearerAuth|
|» » » supported_types|PassportAuth|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **413**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|202|Retry-After|integer|int64|Delay in seconds. The client should retry this same request after waiting for this duration. To simplify client response processing, this must be an integral relative time in seconds. This value SHOULD represent the minimum duration the client should wait before attempting the operation again with a reasonable expectation of success. When it is not feasible for the server to determine the actual expected delay, the server may return a brief, fixed value instead.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PassportAuth
</aside>

## Get Authorization info about multiple DrsObjects.

<a id="opIdOptionsBulkObject"></a>

> Code samples

```bash
curl http://localhost:8080/objects \
  -X OPTIONS \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "bulk_object_ids": [
      "string"
    ]
  }'
```

`OPTIONS /objects`

Returns a structure that contains for each DrsObjects a list of `Authorizations` that can be used to determine how to authorize requests to `GetObject` or `PostObject` (or bulk equivalents).

> Body parameter

```json
{
  "bulk_object_ids": [
    "string"
  ]
}
```

<h3 id="get-authorization-info-about-multiple-drsobjects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» bulk_object_ids|body|[string]|false|An array of ObjectIDs.|

> Example responses

> 200 Response

```json
{
  "summary": {
    "requested": 0,
    "resolved": 0,
    "unresolved": 0
  },
  "unresolved_drs_objects": [
    {
      "error_code": 0,
      "object_ids": [
        "string"
      ]
    }
  ],
  "resolved_drs_object": [
    {
      "drs_object_id": "string",
      "supported_types": [
        "None"
      ],
      "passport_auth_issuers": [
        "string"
      ],
      "bearer_auth_issuers": [
        "string"
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 404 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 413 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 500 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

<h3 id="get-authorization-info-about-multiple-drsobjects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|`Authorizations` were found successfully|Inline|
|204|No Content|`Authorizations` are not supported for this object. Default to `None`.|None|
|400|Bad Request|The request is malformed.|Inline|
|404|Not Found|The requested `DrsObject` wasn't found.|Inline|
|405|Method Not Allowed|`Authorizations` are not supported for this object. Default to `None`.|None|
|413|Payload Too Large|The bulk request is too large.|Inline|
|500|Internal Server Error|An unexpected error occurred.|Inline|

<h3 id="get-authorization-info-about-multiple-drsobjects-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summary|object|false|none|A summary of what was resolved.|
|» requested|integer|false|none|Number of items requested.|
|» resolved|integer|false|none|Number of objects resolved.|
|» unresolved|integer|false|none|Number of objects not resolved.|
|unresolved_drs_objects|[object]|false|none|Error codes for each unresolved drs objects.|
|» error_code|integer|false|none|none|
|» object_ids|[string]|false|none|none|
|resolved_drs_object|[object]|false|none|none|
|» drs_object_id|string|false|none|none|
|» supported_types|[string]|false|none|An Optional list of support authorization types. More than one can be supported and tried in sequence. Defaults to `None` if empty or missing.|
|» passport_auth_issuers|[string]|false|none|If authorizations contain `PassportAuth` this is a required list of visa issuers (as found in a visa's `iss` claim) that may authorize access to this object. The caller must only provide passports that contain visas from this list. It is strongly recommended that the caller validate that it is appropriate to send the requested passport/visa to the DRS server to mitigate attacks by malicious DRS servers requesting credentials they should not have.|
|» bearer_auth_issuers|[string]|false|none|If authorizations contain `BearerAuth` this is an optional list of issuers that may authorize access to this object. The caller must provide a token from one of these issuers. If this is empty or missing it assumed the caller knows which token to send via other means. It is strongly recommended that the caller validate that it is appropriate to send the requested token to the DRS server to mitigate attacks by malicious DRS servers requesting credentials they should not have.|

#### Enumerated Values

|Property|Value|
|---|---|
|» supported_types|None|
|» supported_types|BasicAuth|
|» supported_types|BearerAuth|
|» supported_types|PassportAuth|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **413**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

<aside class="success">
This operation does not require authentication
</aside>

## Get a URL for fetching bytes

<a id="opIdGetAccessURL"></a>

> Code samples

```bash
curl http://localhost:8080/objects/string/access/string \
  -H 'Accept: application/json'
```

`GET /objects/{object_id}/access/{access_id}`

Returns a URL that can be used to fetch the bytes of a `DrsObject`.
This method only needs to be called when using an `AccessMethod` that contains an `access_id` (e.g., for servers that use signed URLs for fetching object bytes).

<h3 id="get-a-url-for-fetching-bytes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|object_id|path|string|true|`DrsObject` identifier|
|access_id|path|string|true|An `access_id` from the `access_methods` list of a `DrsObject`|

> Example responses

> 200 Response

```json
{
  "url": "string",
  "headers": "Authorization: Basic Z2E0Z2g6ZHJz"
}
```

> 400 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 401 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 403 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 404 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 500 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

<h3 id="get-a-url-for-fetching-bytes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `AccessURL` was found successfully|Inline|
|202|Accepted|The operation is delayed and will continue asynchronously. The client should retry this same request after the delay specified by Retry-After header.<br>|None|
|400|Bad Request|The request is malformed.|Inline|
|401|Unauthorized|The request is unauthorized.|Inline|
|403|Forbidden|The requester is not authorized to perform this action.|Inline|
|404|Not Found|The requested `AccessURL` wasn't found.|Inline|
|500|Internal Server Error|An unexpected error occurred.|Inline|

<h3 id="get-a-url-for-fetching-bytes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|A fully resolvable URL that can be used to fetch the actual object bytes.|
|headers|[string]|false|none|An optional list of headers to include in the HTTP request to `url`. These headers can be used to provide auth tokens required to fetch the object bytes.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|202|Retry-After|integer|int64|Delay in seconds. The client should retry this same request after waiting for this duration. To simplify client response processing, this must be an integral relative time in seconds. This value SHOULD represent the minimum duration the client should wait before attempting the operation again with a reasonable expectation of success. When it is not feasible for the server to determine the actual expected delay, the server may return a brief, fixed value instead.<br>|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
BasicAuth, BearerAuth
</aside>

## Get a URL for fetching bytes through POST'ing a Passport

<a id="opIdPostAccessURL"></a>

> Code samples

```bash
curl http://localhost:8080/objects/string/access/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "passports": [
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJnYTRnaF9wYXNzcG9ydF92MSI6W119.JJ5rN0ktP0qwyZmIPpxmF_p7JsxAZH6L6brUxtad3CM"
    ]
  }'
```

`POST /objects/{object_id}/access/{access_id}`

Returns a URL that can be used to fetch the bytes of a `DrsObject`.
This method only needs to be called when using an `AccessMethod` that contains an `access_id` (e.g., for servers that use signed URLs for fetching object bytes).
Method is a POST to accommodate a JWT GA4GH Passport sent in the formData in order to authorize access.

> Body parameter

```json
{
  "passports": [
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJnYTRnaF9wYXNzcG9ydF92MSI6W119.JJ5rN0ktP0qwyZmIPpxmF_p7JsxAZH6L6brUxtad3CM"
  ]
}
```

<h3 id="get-a-url-for-fetching-bytes-through-posting-a-passport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|object_id|path|string|true|`DrsObject` identifier|
|access_id|path|string|true|An `access_id` from the `access_methods` list of a `DrsObject`|
|body|body|object|true|none|
|» passports|body|[string]|false|the encoded JWT GA4GH Passport that contains embedded Visas.  The overall JWT is signed as are the individual Passport Visas.|

> Example responses

> 200 Response

```json
{
  "url": "string",
  "headers": "Authorization: Basic Z2E0Z2g6ZHJz"
}
```

> 400 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 401 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 403 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 404 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 500 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

<h3 id="get-a-url-for-fetching-bytes-through-posting-a-passport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `AccessURL` was found successfully|Inline|
|202|Accepted|The operation is delayed and will continue asynchronously. The client should retry this same request after the delay specified by Retry-After header.<br>|None|
|400|Bad Request|The request is malformed.|Inline|
|401|Unauthorized|The request is unauthorized.|Inline|
|403|Forbidden|The requester is not authorized to perform this action.|Inline|
|404|Not Found|The requested `AccessURL` wasn't found.|Inline|
|500|Internal Server Error|An unexpected error occurred.|Inline|

<h3 id="get-a-url-for-fetching-bytes-through-posting-a-passport-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|A fully resolvable URL that can be used to fetch the actual object bytes.|
|headers|[string]|false|none|An optional list of headers to include in the HTTP request to `url`. These headers can be used to provide auth tokens required to fetch the object bytes.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|202|Retry-After|integer|int64|Delay in seconds. The client should retry this same request after waiting for this duration. To simplify client response processing, this must be an integral relative time in seconds. This value SHOULD represent the minimum duration the client should wait before attempting the operation again with a reasonable expectation of success. When it is not feasible for the server to determine the actual expected delay, the server may return a brief, fixed value instead.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PassportAuth
</aside>

## Get URLs for fetching bytes from multiple objects with an optional Passport(s).

<a id="opIdGetBulkAccessURL"></a>

> Code samples

```bash
curl http://localhost:8080/objects/access \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "passports": [
      "string"
    ],
    "bulk_object_access_ids": [
      {
        "bulk_object_id": "string",
        "bulk_access_ids": [
          "string"
        ]
      }
    ]
  }'
```

`POST /objects/access`

Returns an array of URL objects that can be used to fetch the bytes of multiple `DrsObject`s.
This method only needs to be called when using an `AccessMethod` that contains an `access_id` (e.g., for servers that use signed URLs for fetching object bytes).
Currently this is limited to use passports (one or more) or a single bearer token, so make sure your bulk request is for objects that all use the same passports/token.

> Body parameter

```json
{
  "passports": [
    "string"
  ],
  "bulk_object_access_ids": [
    {
      "bulk_object_id": "string",
      "bulk_access_ids": [
        "string"
      ]
    }
  ]
}
```

<h3 id="get-urls-for-fetching-bytes-from-multiple-objects-with-an-optional-passports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» passports|body|[string]|false|none|
|» bulk_object_access_ids|body|[object]|false|none|
|» » bulk_object_id|body|string|false|DRS object ID|
|» » bulk_access_ids|body|[string]|false|DRS object access ID|

> Example responses

> 200 Response

```json
{
  "summary": {
    "requested": 0,
    "resolved": 0,
    "unresolved": 0
  },
  "unresolved_drs_objects": [
    {
      "error_code": 0,
      "object_ids": [
        "string"
      ]
    }
  ],
  "resolved_drs_object_access_urls": [
    {
      "drs_object_id": "string",
      "drs_access_id": "string",
      "url": "string",
      "headers": "Authorization: Basic Z2E0Z2g6ZHJz"
    }
  ]
}
```

> 400 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 401 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 403 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 404 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 413 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

> 500 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

<h3 id="get-urls-for-fetching-bytes-from-multiple-objects-with-an-optional-passports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `AccessURL` was found successfully|Inline|
|202|Accepted|The operation is delayed and will continue asynchronously. The client should retry this same request after the delay specified by Retry-After header.<br>|None|
|400|Bad Request|The request is malformed.|Inline|
|401|Unauthorized|The request is unauthorized.|Inline|
|403|Forbidden|The requester is not authorized to perform this action.|Inline|
|404|Not Found|The requested `AccessURL` wasn't found.|Inline|
|413|Payload Too Large|The bulk request is too large.|Inline|
|500|Internal Server Error|An unexpected error occurred.|Inline|

<h3 id="get-urls-for-fetching-bytes-from-multiple-objects-with-an-optional-passports-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summary|object|false|none|A summary of what was resolved.|
|» requested|integer|false|none|Number of items requested.|
|» resolved|integer|false|none|Number of objects resolved.|
|» unresolved|integer|false|none|Number of objects not resolved.|
|unresolved_drs_objects|[object]|false|none|Error codes for each unresolved drs objects.|
|» error_code|integer|false|none|none|
|» object_ids|[string]|false|none|none|
|resolved_drs_object_access_urls|[object]|false|none|none|
|» drs_object_id|string|false|none|none|
|» drs_access_id|string|false|none|none|
|» url|string|true|none|A fully resolvable URL that can be used to fetch the actual object bytes.|
|» headers|[string]|false|none|An optional list of headers to include in the HTTP request to `url`. These headers can be used to provide auth tokens required to fetch the object bytes.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **413**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|202|Retry-After|integer|int64|Delay in seconds. The client should retry this same request after waiting for this duration. To simplify client response processing, this must be an integral relative time in seconds. This value SHOULD represent the minimum duration the client should wait before attempting the operation again with a reasonable expectation of success. When it is not feasible for the server to determine the actual expected delay, the server may return a brief, fixed value instead.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PassportAuth
</aside>

<h1 id="data-repository-service-service-info">Service Info</h1>

## Retrieve information about this service

<a id="opIdGetServiceInfo"></a>

> Code samples

```bash
curl http://localhost:8080/service-info \
  -H 'Accept: application/json'
```

`GET /service-info`

Returns information about the DRS service along with stats pertaning to total object count and cumulative size in bytes.

Extends the
[v1.0.0 GA4GH Service Info specification](https://github.com/ga4gh-discovery/ga4gh-service-info)
as the standardized format for GA4GH web services to self-describe.

According to the 
[service-info type registry](https://github.com/ga4gh/TASC/blob/master/service-info/ga4gh-service-info.json)
maintained by the [Technical Alignment Sub Committee (TASC)](https://github.com/ga4gh/TASC),
a DRS service MUST have:
  * a `type.group` value of `org.ga4gh`
  * a `type.artifact` value of `drs`

e.g.
```
{
    "id": "com.example.drs",
    "description": "Serves data according to DRS specification",
    ...
    "type": {
        "group": "org.ga4gh",
        "artifact": "drs",
        "version": "1.5"
    }
    ...
    "drs":{
      "maxBulkRequestLength": 200,
      "stats": {
        "objectCount": 774560,
        "totalObjectSize": 4018437188907752
      }
    }
}
```

See the [Service Registry Appendix](#tag/GA4GH-Service-Registry) for more information on how to register a DRS service with a service registry.

> Example responses

> 200 Response

```json
{
  "id": "org.ga4gh.myservice",
  "name": "My project",
  "type": {
    "artifact": "drs"
  },
  "description": "This service provides...",
  "organization": {
    "name": "My organization",
    "url": "https://example.com"
  },
  "contactUrl": "mailto:support@example.com",
  "documentationUrl": "https://docs.myservice.example.com",
  "createdAt": "2019-06-04T12:58:19Z",
  "updatedAt": "2019-06-04T12:58:19Z",
  "environment": "test",
  "version": "1.0.0",
  "maxBulkRequestLength": 0,
  "drs": {
    "maxBulkRequestLength": 0,
    "objectCount": 0,
    "totalObjectSize": 0
  }
}
```

> 500 Response

```json
{
  "msg": "string",
  "status_code": 0
}
```

<h3 id="retrieve-information-about-this-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieve info about the DRS service|Inline|
|500|Internal Server Error|An unexpected error occurred.|Inline|

<h3 id="retrieve-information-about-this-service-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique ID of this service. Reverse domain name notation is recommended, though not required. The identifier should attempt to be globally unique so it can be used in downstream aggregator services e.g. Service Registry.|
|name|string|true|none|Name of this service. Should be human readable.|
|type|object|true|none|Type of a GA4GH service|
|» group|string|true|none|Namespace in reverse domain name format. Use `org.ga4gh` for implementations compliant with official GA4GH specifications. For services with custom APIs not standardized by GA4GH, or implementations diverging from official GA4GH specifications, use a different namespace (e.g. your organization's reverse domain name).|
|» artifact|string|true|none|Name of the API or GA4GH specification implemented. Official GA4GH types should be assigned as part of standards approval process. Custom artifacts are supported.|
|» version|string|true|none|Version of the API or specification. GA4GH specifications use semantic versioning.|
|description|string|false|none|Description of the service. Should be human readable and provide information about the service.|
|organization|object|true|none|Organization providing the service|
|» name|string|true|none|Name of the organization responsible for the service|
|» url|string(uri)|true|none|URL of the website of the organization (RFC 3986 format)|
|contactUrl|string(uri)|false|none|URL of the contact for the provider of this service, e.g. a link to a contact form (RFC 3986 format), or an email (RFC 2368 format).|
|documentationUrl|string(uri)|false|none|URL of the documentation of this service (RFC 3986 format). This should help someone learn how to use your service, including any specifics required to access data, e.g. authentication.|
|createdAt|string(date-time)|false|none|Timestamp describing when the service was first deployed and available (RFC 3339 format)|
|updatedAt|string(date-time)|false|none|Timestamp describing when the service was last updated (RFC 3339 format)|
|environment|string|false|none|Environment the service is running in. Use this to distinguish between production, development and testing/staging deployments. Suggested values are prod, test, dev, staging. However this is advised and not enforced.|
|version|string|true|none|Version of the service being described. Semantic versioning is recommended, but other identifiers, such as dates or commit hashes, are also allowed. The version should be changed whenever the service is updated.|
|maxBulkRequestLength|integer|true|none|DEPRECATED - In 2.0 this will move to under the drs section of service info and not at the root level. The max length the bulk request endpoints can handle (>= 1) before generating a 413 error e.g. how long can the arrays bulk_object_ids and bulk_object_access_ids be for this server.|
|type|object|true|none|none|
|» artifact|string|true|none|none|
|drs|object|false|none|none|
|» maxBulkRequestLength|integer|true|none|The max length the bulk request endpoints can handle (>= 1) before generating a 413 error e.g. how long can the arrays bulk_object_ids and bulk_object_access_ids be for this server.|
|» objectCount|integer|false|none|The total number of objects in this DRS service.|
|» totalObjectSize|integer|false|none|The total size of all objects in this DRS service in bytes.  As a general best practice, file bytes are counted for each unique file and not cloud mirrors or other redundant copies.|

#### Enumerated Values

|Property|Value|
|---|---|
|» artifact|drs|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|A detailed error message.|
|status_code|integer|false|none|The integer representing the HTTP status code (e.g. 200, 404).|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
BasicAuth, BearerAuth
</aside>

# Schemas

<h2 id="tocS_items">items</h2>
<!-- backwards compatibility -->
<a id="schemaitems"></a>
<a id="schema_items"></a>
<a id="tocSitems"></a>
<a id="tocsitems"></a>

```json
{
  "name": "string",
  "id": "string",
  "drs_uri": "drs://drs.example.org/314159",
  "contents": [
    {
      "name": "string",
      "id": "string",
      "drs_uri": "drs://drs.example.org/314159",
      "contents": [
        {}
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A name declared by the bundle author that must be used when materialising this object, overriding any name directly associated with the object itself. The name must be unique within the containing bundle. This string is made up of uppercase and lowercase letters, decimal digits, hyphen, period, and underscore [A-Za-z0-9.-_]. See http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap03.html#tag_03_282[portable filenames].|
|id|string|false|none|A DRS identifier of a `DrsObject` (either a single blob or a nested bundle). If this ContentsObject is an object within a nested bundle, then the id is optional. Otherwise, the id is required.|
|drs_uri|[string]|false|none|A list of full DRS identifier URI paths that may be used to obtain the object. These URIs may be external to this DRS instance.|
|contents|[[items](#schemaitems)]|false|none|If this ContentsObject describes a nested bundle and the caller specified "?expand=true" on the request, then this contents array must be present and describe the objects within the nested bundle.|
