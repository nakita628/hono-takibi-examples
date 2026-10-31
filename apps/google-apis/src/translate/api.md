<h1 id="cloud-translation-api">Cloud Translation API v3beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Integrates text translation into your website or application.

Base URLs:

* <a href="https://translation.googleapis.com/">https://translation.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/translate/docs/quickstarts">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud-translation|Translate text from one language to another using Google Translate|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud-translation|Translate text from one language to another using Google Translate|

<h1 id="cloud-translation-api-projects">projects</h1>

## translate.projects.locations.operations.get

<a id="opIdtranslate.projects.locations.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3beta1/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="translateprojectslocationsoperationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="translateprojectslocationsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-translation ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-translation )
</aside>

## translate.projects.locations.operations.delete

<a id="opIdtranslate.projects.locations.operations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3beta1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v3beta1/{name}`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

<h3 id="translateprojectslocationsoperationsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to be deleted.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="translateprojectslocationsoperationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-translation ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-translation )
</aside>

## translate.projects.locations.list

<a id="opIdtranslate.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3beta1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3beta1/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="translateprojectslocationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource that owns the locations collection, if applicable.|
|filter|query|string|false|A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).|
|pageSize|query|integer|false|The maximum number of results to return. If not set, the service selects a default.|
|pageToken|query|string|false|A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "locations": [
    {
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "locationId": "string",
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="translateprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-translation ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-translation )
</aside>

## translate.projects.locations.operations.list

<a id="opIdtranslate.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3beta1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3beta1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="translateprojectslocationsoperationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation's parent resource.|
|filter|query|string|false|The standard list filter.|
|pageSize|query|integer|false|The standard list page size.|
|pageToken|query|string|false|The standard list page token.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "operations": [
    {
      "done": true,
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "response": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

<h3 id="translateprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-translation ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-translation )
</aside>

## translate.projects.locations.operations.cancel

<a id="opIdtranslate.projects.locations.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3beta1/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v3beta1/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

> Body parameter

```json
{}
```

<h3 id="translateprojectslocationsoperationscancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to be cancelled.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[CancelOperationRequest](#schemacanceloperationrequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="translateprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-translation ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-translation )
</aside>

## translate.projects.locations.operations.wait

<a id="opIdtranslate.projects.locations.operations.wait"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3beta1/string:wait \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "timeout": "string"
  }'
```

`POST /v3beta1/{name}:wait`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

> Body parameter

```json
{
  "timeout": "string"
}
```

<h3 id="translateprojectslocationsoperationswait-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to wait on.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[WaitOperationRequest](#schemawaitoperationrequest)|false|none|
|» timeout|body|string(google-duration)|false|The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="translateprojectslocationsoperationswait-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-translation ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-translation )
</aside>

## translate.projects.locations.glossaries.list

<a id="opIdtranslate.projects.locations.glossaries.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3beta1/string/glossaries \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3beta1/{parent}/glossaries`

Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.

<h3 id="translateprojectslocationsglossarieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project from which to list all of the glossaries.|
|filter|query|string|false|Optional. Filter specifying constraints of a list operation. Specify the constraint by the format of "key=value", where key must be "src" or "tgt", and the value must be a valid language code. For multiple restrictions, concatenate them by "AND" (uppercase only), such as: "src=en-US AND tgt=zh-CN". Notice that the exact match is used here, which means using 'en-US' and 'en' can lead to different results, which depends on the language code you used when you create the glossary. For the unidirectional glossaries, the "src" and "tgt" add restrictions on the source and target language code separately. For the equivalent term set glossaries, the "src" and/or "tgt" add restrictions on the term set. For example: "src=en-US AND tgt=zh-CN" will only pick the unidirectional glossaries which exactly match the source language code as "en-US" and the target language code "zh-CN", but all equivalent term set glossaries which contain "en-US" and "zh-CN" in their language set will be picked. If missing, no filtering is performed.|
|pageSize|query|integer|false|Optional. Requested page size. The server may return fewer glossaries than requested. If unspecified, the server picks an appropriate default.|
|pageToken|query|string|false|Optional. A token identifying a page of results the server should return. Typically, this is the value of [ListGlossariesResponse.next_page_token] returned from the previous call to `ListGlossaries` method. The first page is returned if `page_token`is empty or missing.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "glossaries": [
    {
      "endTime": "string",
      "entryCount": 0,
      "inputConfig": {
        "gcsSource": {
          "inputUri": "string"
        }
      },
      "languageCodesSet": {
        "languageCodes": [
          "string"
        ]
      },
      "languagePair": {
        "sourceLanguageCode": "string",
        "targetLanguageCode": "string"
      },
      "name": "string",
      "submitTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="translateprojectslocationsglossarieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListGlossariesResponse](#schemalistglossariesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-translation ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-translation )
</aside>

## translate.projects.locations.glossaries.create

<a id="opIdtranslate.projects.locations.glossaries.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3beta1/string/glossaries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "inputConfig": {
      "gcsSource": {
        "inputUri": "string"
      }
    },
    "languageCodesSet": {
      "languageCodes": [
        "string"
      ]
    },
    "languagePair": {
      "sourceLanguageCode": "string",
      "targetLanguageCode": "string"
    },
    "name": "string"
  }'
```

`POST /v3beta1/{parent}/glossaries`

Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.

> Body parameter

```json
{
  "inputConfig": {
    "gcsSource": {
      "inputUri": "string"
    }
  },
  "languageCodesSet": {
    "languageCodes": [
      "string"
    ]
  },
  "languagePair": {
    "sourceLanguageCode": "string",
    "targetLanguageCode": "string"
  },
  "name": "string"
}
```

<h3 id="translateprojectslocationsglossariescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project name.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Glossary](#schemaglossary)|false|none|
|» inputConfig|body|[GlossaryInputConfig](#schemaglossaryinputconfig)|false|Required. Provides examples to build the glossary from. Total glossary must not exceed 10M Unicode codepoints.|
|» languageCodesSet|body|[LanguageCodesSet](#schemalanguagecodesset)|false|Used with equivalent term set glossaries.|
|» languagePair|body|[LanguageCodePair](#schemalanguagecodepair)|false|Used with unidirectional glossaries.|
|» name|body|string|false|Required. The resource name of the glossary. Glossary names have the form `projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="translateprojectslocationsglossariescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## translate.projects.locations.getSupportedLanguages

<a id="opIdtranslate.projects.locations.getSupportedLanguages"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3beta1/string/supportedLanguages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3beta1/{parent}/supportedLanguages`

Returns a list of supported languages for translation.

<h3 id="translateprojectslocationsgetsupportedlanguages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}` or `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Non-global location is required for AutoML models. Only models within the same region (have same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned.|
|displayLanguageCode|query|string|false|Optional. The language to use to return localized, human readable names of supported languages. If missing, then display names are not returned in a response.|
|model|query|string|false|Optional. Get supported languages of this model. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, Returns languages supported by the specified model. If missing, we get supported languages of Google general NMT model.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "languages": [
    {
      "displayName": "string",
      "languageCode": "string",
      "supportSource": true,
      "supportTarget": true
    }
  ]
}
```

<h3 id="translateprojectslocationsgetsupportedlanguages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SupportedLanguages](#schemasupportedlanguages)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-translation ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-translation )
</aside>

## translate.projects.locations.batchTranslateDocument

<a id="opIdtranslate.projects.locations.batchTranslateDocument"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3beta1/string:batchTranslateDocument \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "customizedAttribution": "string",
    "enableShadowRemovalNativePdf": true,
    "formatConversions": {
      "property1": "string",
      "property2": "string"
    },
    "glossaries": {
      "property1": {
        "glossary": "string",
        "ignoreCase": true
      },
      "property2": {
        "glossary": "string",
        "ignoreCase": true
      }
    },
    "inputConfigs": [
      {
        "gcsSource": {
          "inputUri": "string"
        }
      }
    ],
    "models": {
      "property1": "string",
      "property2": "string"
    },
    "outputConfig": {
      "gcsDestination": {
        "outputUriPrefix": "string"
      }
    },
    "sourceLanguageCode": "string",
    "targetLanguageCodes": [
      "string"
    ]
  }'
```

`POST /v3beta1/{parent}:batchTranslateDocument`

Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.

> Body parameter

```json
{
  "customizedAttribution": "string",
  "enableShadowRemovalNativePdf": true,
  "formatConversions": {
    "property1": "string",
    "property2": "string"
  },
  "glossaries": {
    "property1": {
      "glossary": "string",
      "ignoreCase": true
    },
    "property2": {
      "glossary": "string",
      "ignoreCase": true
    }
  },
  "inputConfigs": [
    {
      "gcsSource": {
        "inputUri": "string"
      }
    }
  ],
  "models": {
    "property1": "string",
    "property2": "string"
  },
  "outputConfig": {
    "gcsDestination": {
      "outputUriPrefix": "string"
    }
  },
  "sourceLanguageCode": "string",
  "targetLanguageCodes": [
    "string"
  ]
}
```

<h3 id="translateprojectslocationsbatchtranslatedocument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Location to make a regional call. Format: `projects/{project-number-or-id}/locations/{location-id}`. The `global` location is not supported for batch translation. Only AutoML Translation models or glossaries within the same region (have the same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[BatchTranslateDocumentRequest](#schemabatchtranslatedocumentrequest)|false|none|
|» customizedAttribution|body|string|false|Optional. This flag is to support user customized attribution. If not provided, the default is `Machine Translated by Google`. Customized attribution should follow rules in https://cloud.google.com/translate/attribution#attribution_and_logos|
|» enableShadowRemovalNativePdf|body|boolean|false|Optional. If true, use the text removal server to remove the shadow text on background image for native pdf translation. Shadow removal feature can only be enabled when is_translate_native_pdf_only: false && pdf_native_only: false|
|» formatConversions|body|object|false|Optional.|
|» » **additionalProperties**|body|string|false|none|
|» glossaries|body|object|false|Optional. Glossaries to be applied. It's keyed by target language code.|
|» » **additionalProperties**|body|[TranslateTextGlossaryConfig](#schematranslatetextglossaryconfig)|false|Configures which glossary should be used for a specific target language, and defines options for applying that glossary.|
|» inputConfigs|body|[[BatchDocumentInputConfig](#schemabatchdocumentinputconfig)]|false|Required. Input configurations. The total number of files matched should be <= 100. The total content size to translate should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.|
|» models|body|object|false|Optional. The models to use for translation. Map's key is target language code. Map's value is the model name. Value can be a built-in general model, or an AutoML Translation model. The value format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used.|
|» » **additionalProperties**|body|string|false|none|
|» outputConfig|body|[BatchDocumentOutputConfig](#schemabatchdocumentoutputconfig)|false|Required. Output configuration. If 2 input configs match to the same file (that is, same input path), we don't generate output for duplicate inputs.|
|» sourceLanguageCode|body|string|false|Required. The BCP-47 language code of the input document if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in [Language Support](https://cloud.google.com/translate/docs/languages).|
|» targetLanguageCodes|body|[string]|false|Required. The BCP-47 language code to use for translation of the input document. Specify up to 10 language codes here.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="translateprojectslocationsbatchtranslatedocument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## translate.projects.locations.batchTranslateText

<a id="opIdtranslate.projects.locations.batchTranslateText"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3beta1/string:batchTranslateText \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "glossaries": {
      "property1": {
        "glossary": "string",
        "ignoreCase": true
      },
      "property2": {
        "glossary": "string",
        "ignoreCase": true
      }
    },
    "inputConfigs": [
      {
        "gcsSource": {
          "inputUri": "string"
        },
        "mimeType": "string"
      }
    ],
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "models": {
      "property1": "string",
      "property2": "string"
    },
    "outputConfig": {
      "gcsDestination": {
        "outputUriPrefix": "string"
      }
    },
    "sourceLanguageCode": "string",
    "targetLanguageCodes": [
      "string"
    ]
  }'
```

`POST /v3beta1/{parent}:batchTranslateText`

Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.

> Body parameter

```json
{
  "glossaries": {
    "property1": {
      "glossary": "string",
      "ignoreCase": true
    },
    "property2": {
      "glossary": "string",
      "ignoreCase": true
    }
  },
  "inputConfigs": [
    {
      "gcsSource": {
        "inputUri": "string"
      },
      "mimeType": "string"
    }
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "models": {
    "property1": "string",
    "property2": "string"
  },
  "outputConfig": {
    "gcsDestination": {
      "outputUriPrefix": "string"
    }
  },
  "sourceLanguageCode": "string",
  "targetLanguageCodes": [
    "string"
  ]
}
```

<h3 id="translateprojectslocationsbatchtranslatetext-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}/locations/{location-id}`. The `global` location is not supported for batch translation. Only AutoML Translation models or glossaries within the same region (have the same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[BatchTranslateTextRequest](#schemabatchtranslatetextrequest)|false|none|
|» glossaries|body|object|false|Optional. Glossaries to be applied for translation. It's keyed by target language code.|
|» » **additionalProperties**|body|[TranslateTextGlossaryConfig](#schematranslatetextglossaryconfig)|false|Configures which glossary should be used for a specific target language, and defines options for applying that glossary.|
|» inputConfigs|body|[[InputConfig](#schemainputconfig)]|false|Required. Input configurations. The total number of files matched should be <= 100. The total content size should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.|
|» labels|body|object|false|Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/labels for more information.|
|» » **additionalProperties**|body|string|false|none|
|» models|body|object|false|Optional. The models to use for translation. Map's key is target language code. Map's value is model name. Value can be a built-in general model, or an AutoML Translation model. The value format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used.|
|» » **additionalProperties**|body|string|false|none|
|» outputConfig|body|[OutputConfig](#schemaoutputconfig)|false|Required. Output configuration. If 2 input configs match to the same file (that is, same input path), we don't generate output for duplicate inputs.|
|» sourceLanguageCode|body|string|false|Required. Source language code.|
|» targetLanguageCodes|body|[string]|false|Required. Specify up to 10 language codes here.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="translateprojectslocationsbatchtranslatetext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## translate.projects.locations.detectLanguage

<a id="opIdtranslate.projects.locations.detectLanguage"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3beta1/string:detectLanguage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "content": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "mimeType": "string",
    "model": "string"
  }'
```

`POST /v3beta1/{parent}:detectLanguage`

Detects the language of text within a request.

> Body parameter

```json
{
  "content": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mimeType": "string",
  "model": "string"
}
```

<h3 id="translateprojectslocationsdetectlanguage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}/locations/{location-id}` or `projects/{project-number-or-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Only models within the same region (has same location-id) can be used. Otherwise an INVALID_ARGUMENT (400) error is returned.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[DetectLanguageRequest](#schemadetectlanguagerequest)|false|none|
|» content|body|string|false|The content of the input stored as a string.|
|» labels|body|object|false|Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/labels for more information.|
|» » **additionalProperties**|body|string|false|none|
|» mimeType|body|string|false|Optional. The format of the source text, for example, "text/html", "text/plain". If left blank, the MIME type defaults to "text/html".|
|» model|body|string|false|Optional. The language detection model to be used. Format: `projects/{project-number-or-id}/locations/{location-id}/models/language-detection/{model-id}` Only one language detection model is currently supported: `projects/{project-number-or-id}/locations/{location-id}/models/language-detection/default`. If not specified, the default model is used.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "languages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ]
}
```

<h3 id="translateprojectslocationsdetectlanguage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DetectLanguageResponse](#schemadetectlanguageresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-translation ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-translation )
</aside>

## translate.projects.locations.translateDocument

<a id="opIdtranslate.projects.locations.translateDocument"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3beta1/string:translateDocument \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "customizedAttribution": "string",
    "documentInputConfig": {
      "content": "string",
      "gcsSource": {
        "inputUri": "string"
      },
      "mimeType": "string"
    },
    "documentOutputConfig": {
      "gcsDestination": {
        "outputUriPrefix": "string"
      },
      "mimeType": "string"
    },
    "enableRotationCorrection": true,
    "enableShadowRemovalNativePdf": true,
    "glossaryConfig": {
      "glossary": "string",
      "ignoreCase": true
    },
    "isTranslateNativePdfOnly": true,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "model": "string",
    "sourceLanguageCode": "string",
    "targetLanguageCode": "string"
  }'
```

`POST /v3beta1/{parent}:translateDocument`

Translates documents in synchronous mode.

> Body parameter

```json
{
  "customizedAttribution": "string",
  "documentInputConfig": {
    "content": "string",
    "gcsSource": {
      "inputUri": "string"
    },
    "mimeType": "string"
  },
  "documentOutputConfig": {
    "gcsDestination": {
      "outputUriPrefix": "string"
    },
    "mimeType": "string"
  },
  "enableRotationCorrection": true,
  "enableShadowRemovalNativePdf": true,
  "glossaryConfig": {
    "glossary": "string",
    "ignoreCase": true
  },
  "isTranslateNativePdfOnly": true,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "model": "string",
  "sourceLanguageCode": "string",
  "targetLanguageCode": "string"
}
```

<h3 id="translateprojectslocationstranslatedocument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Location to make a regional call. Format: `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global`. Non-global location is required for requests using AutoML models or custom glossaries. Models and glossaries must be within the same region (have the same location-id), otherwise an INVALID_ARGUMENT (400) error is returned.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[TranslateDocumentRequest](#schematranslatedocumentrequest)|false|none|
|» customizedAttribution|body|string|false|Optional. This flag is to support user customized attribution. If not provided, the default is `Machine Translated by Google`. Customized attribution should follow rules in https://cloud.google.com/translate/attribution#attribution_and_logos|
|» documentInputConfig|body|[DocumentInputConfig](#schemadocumentinputconfig)|false|Required. Input configurations.|
|» documentOutputConfig|body|[DocumentOutputConfig](#schemadocumentoutputconfig)|false|Optional. Output configurations. Defines if the output file should be stored within Cloud Storage as well as the desired output format. If not provided the translated file will only be returned through a byte-stream and its output mime type will be the same as the input file's mime type.|
|» enableRotationCorrection|body|boolean|false|Optional. If true, enable auto rotation correction in DVS.|
|» enableShadowRemovalNativePdf|body|boolean|false|Optional. If true, use the text removal server to remove the shadow text on background image for native pdf translation. Shadow removal feature can only be enabled when is_translate_native_pdf_only: false && pdf_native_only: false|
|» glossaryConfig|body|[TranslateTextGlossaryConfig](#schematranslatetextglossaryconfig)|false|Optional. Glossary to be applied. The glossary must be within the same region (have the same location-id) as the model, otherwise an INVALID_ARGUMENT (400) error is returned.|
|» isTranslateNativePdfOnly|body|boolean|false|Optional. is_translate_native_pdf_only field for external customers. If true, the page limit of online native pdf translation is 300 and only native pdf pages will be translated.|
|» labels|body|object|false|Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/advanced/labels for more information.|
|» » **additionalProperties**|body|string|false|none|
|» model|body|string|false|Optional. The `model` type requested for this translation. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, If not provided, the default Google model (NMT) will be used for translation.|
|» sourceLanguageCode|body|string|false|Optional. The BCP-47 language code of the input document if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in Language Support. If the source language isn't specified, the API attempts to identify the source language automatically and returns the source language within the response. Source language must be specified if the request contains a glossary or a custom model.|
|» targetLanguageCode|body|string|false|Required. The BCP-47 language code to use for translation of the input document, set to one of the language codes listed in Language Support.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "documentTranslation": {
    "byteStreamOutputs": [
      "string"
    ],
    "detectedLanguageCode": "string",
    "mimeType": "string"
  },
  "glossaryConfig": {
    "glossary": "string",
    "ignoreCase": true
  },
  "glossaryDocumentTranslation": {
    "byteStreamOutputs": [
      "string"
    ],
    "detectedLanguageCode": "string",
    "mimeType": "string"
  },
  "model": "string"
}
```

<h3 id="translateprojectslocationstranslatedocument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TranslateDocumentResponse](#schematranslatedocumentresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-translation ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-translation )
</aside>

## translate.projects.locations.translateText

<a id="opIdtranslate.projects.locations.translateText"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3beta1/string:translateText \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "contents": [
      "string"
    ],
    "glossaryConfig": {
      "glossary": "string",
      "ignoreCase": true
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "mimeType": "string",
    "model": "string",
    "sourceLanguageCode": "string",
    "targetLanguageCode": "string"
  }'
```

`POST /v3beta1/{parent}:translateText`

Translates input text and returns translated text.

> Body parameter

```json
{
  "contents": [
    "string"
  ],
  "glossaryConfig": {
    "glossary": "string",
    "ignoreCase": true
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mimeType": "string",
  "model": "string",
  "sourceLanguageCode": "string",
  "targetLanguageCode": "string"
}
```

<h3 id="translateprojectslocationstranslatetext-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}` or `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Non-global location is required for requests using AutoML models or custom glossaries. Models and glossaries must be within the same region (have same location-id), otherwise an INVALID_ARGUMENT (400) error is returned.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[TranslateTextRequest](#schematranslatetextrequest)|false|none|
|» contents|body|[string]|false|Required. The content of the input in string format. We recommend the total content be less than 30k codepoints. The max length of this field is 1024. Use BatchTranslateText for larger text.|
|» glossaryConfig|body|[TranslateTextGlossaryConfig](#schematranslatetextglossaryconfig)|false|Optional. Glossary to be applied. The glossary must be within the same region (have the same location-id) as the model, otherwise an INVALID_ARGUMENT (400) error is returned.|
|» labels|body|object|false|Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/labels for more information.|
|» » **additionalProperties**|body|string|false|none|
|» mimeType|body|string|false|Optional. The format of the source text, for example, "text/html", "text/plain". If left blank, the MIME type defaults to "text/html".|
|» model|body|string|false|Optional. The `model` type requested for this translation. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, For global (non-regionalized) requests, use `location-id` `global`. For example, `projects/{project-number-or-id}/locations/global/models/general/nmt`. If not provided, the default Google model (NMT) will be used|
|» sourceLanguageCode|body|string|false|Optional. The BCP-47 language code of the input text if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in Language Support. If the source language isn't specified, the API attempts to identify the source language automatically and returns the source language within the response.|
|» targetLanguageCode|body|string|false|Required. The BCP-47 language code to use for translation of the input text, set to one of the language codes listed in Language Support.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "glossaryTranslations": [
    {
      "detectedLanguageCode": "string",
      "glossaryConfig": {
        "glossary": "string",
        "ignoreCase": true
      },
      "model": "string",
      "translatedText": "string"
    }
  ],
  "translations": [
    {
      "detectedLanguageCode": "string",
      "glossaryConfig": {
        "glossary": "string",
        "ignoreCase": true
      },
      "model": "string",
      "translatedText": "string"
    }
  ]
}
```

<h3 id="translateprojectslocationstranslatetext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TranslateTextResponse](#schematranslatetextresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-translation ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-translation )
</aside>

# Schemas

<h2 id="tocS_BatchDocumentInputConfig">BatchDocumentInputConfig</h2>
<!-- backwards compatibility -->
<a id="schemabatchdocumentinputconfig"></a>
<a id="schema_BatchDocumentInputConfig"></a>
<a id="tocSbatchdocumentinputconfig"></a>
<a id="tocsbatchdocumentinputconfig"></a>

```json
{
  "gcsSource": {
    "inputUri": "string"
  }
}
```

Input configuration for BatchTranslateDocument request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsSource|[GcsSource](#schemagcssource)|false|none|Google Cloud Storage location for the source input. This can be a single file (for example, `gs://translation-test/input.docx`) or a wildcard (for example, `gs://translation-test/*`). File mime type is determined based on extension. Supported mime type includes: - `pdf`, application/pdf - `docx`, application/vnd.openxmlformats-officedocument.wordprocessingml.document - `pptx`, application/vnd.openxmlformats-officedocument.presentationml.presentation - `xlsx`, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet The max file size to support for `.docx`, `.pptx` and `.xlsx` is 100MB. The max file size to support for `.pdf` is 1GB and the max page limit is 1000 pages. The max file size to support for all input documents is 1GB.|

<h2 id="tocS_BatchDocumentOutputConfig">BatchDocumentOutputConfig</h2>
<!-- backwards compatibility -->
<a id="schemabatchdocumentoutputconfig"></a>
<a id="schema_BatchDocumentOutputConfig"></a>
<a id="tocSbatchdocumentoutputconfig"></a>
<a id="tocsbatchdocumentoutputconfig"></a>

```json
{
  "gcsDestination": {
    "outputUriPrefix": "string"
  }
}
```

Output configuration for BatchTranslateDocument request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsDestination|[GcsDestination](#schemagcsdestination)|false|none|Google Cloud Storage destination for output content. For every single input document (for example, gs://a/b/c.[extension]), we generate at most 2 * n output files. (n is the # of target_language_codes in the BatchTranslateDocumentRequest). While the input documents are being processed, we write/update an index file `index.csv` under `gcs_destination.output_uri_prefix` (for example, gs://translation_output/index.csv) The index file is generated/updated as new files are being translated. The format is: input_document,target_language_code,translation_output,error_output, glossary_translation_output,glossary_error_output `input_document` is one file we matched using gcs_source.input_uri. `target_language_code` is provided in the request. `translation_output` contains the translations. (details provided below) `error_output` contains the error message during processing of the file. Both translations_file and errors_file could be empty strings if we have no content to output. `glossary_translation_output` and `glossary_error_output` are the translated output/error when we apply glossaries. They could also be empty if we have no content to output. Once a row is present in index.csv, the input/output matching never changes. Callers should also expect all the content in input_file are processed and ready to be consumed (that is, no partial output file is written). Since index.csv will be keeping updated during the process, please make sure there is no custom retention policy applied on the output bucket that may avoid file updating. (https://cloud.google.com/storage/docs/bucket-lock#retention-policy) The naming format of translation output files follows (for target language code [trg]): `translation_output`: gs://translation_output/a_b_c_[trg]_translation.[extension] `glossary_translation_output`: gs://translation_test/a_b_c_[trg]_glossary_translation.[extension] The output document will maintain the same file format as the input document. The naming format of error output files follows (for target language code [trg]): `error_output`: gs://translation_test/a_b_c_[trg]_errors.txt `glossary_error_output`: gs://translation_test/a_b_c_[trg]_glossary_translation.txt The error output is a txt file containing error details.|

<h2 id="tocS_BatchTranslateDocumentRequest">BatchTranslateDocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchtranslatedocumentrequest"></a>
<a id="schema_BatchTranslateDocumentRequest"></a>
<a id="tocSbatchtranslatedocumentrequest"></a>
<a id="tocsbatchtranslatedocumentrequest"></a>

```json
{
  "customizedAttribution": "string",
  "enableShadowRemovalNativePdf": true,
  "formatConversions": {
    "property1": "string",
    "property2": "string"
  },
  "glossaries": {
    "property1": {
      "glossary": "string",
      "ignoreCase": true
    },
    "property2": {
      "glossary": "string",
      "ignoreCase": true
    }
  },
  "inputConfigs": [
    {
      "gcsSource": {
        "inputUri": "string"
      }
    }
  ],
  "models": {
    "property1": "string",
    "property2": "string"
  },
  "outputConfig": {
    "gcsDestination": {
      "outputUriPrefix": "string"
    }
  },
  "sourceLanguageCode": "string",
  "targetLanguageCodes": [
    "string"
  ]
}
```

The BatchTranslateDocument request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customizedAttribution|string|false|none|Optional. This flag is to support user customized attribution. If not provided, the default is `Machine Translated by Google`. Customized attribution should follow rules in https://cloud.google.com/translate/attribution#attribution_and_logos|
|enableShadowRemovalNativePdf|boolean|false|none|Optional. If true, use the text removal server to remove the shadow text on background image for native pdf translation. Shadow removal feature can only be enabled when is_translate_native_pdf_only: false && pdf_native_only: false|
|formatConversions|object|false|none|Optional.|
|glossaries|object|false|none|Optional. Glossaries to be applied. It's keyed by target language code.|
|inputConfigs|[[BatchDocumentInputConfig](#schemabatchdocumentinputconfig)]|false|none|Required. Input configurations. The total number of files matched should be <= 100. The total content size to translate should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.|
|models|object|false|none|Optional. The models to use for translation. Map's key is target language code. Map's value is the model name. Value can be a built-in general model, or an AutoML Translation model. The value format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used.|
|outputConfig|[BatchDocumentOutputConfig](#schemabatchdocumentoutputconfig)|false|none|Required. Output configuration. If 2 input configs match to the same file (that is, same input path), we don't generate output for duplicate inputs.|
|sourceLanguageCode|string|false|none|Required. The BCP-47 language code of the input document if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in [Language Support](https://cloud.google.com/translate/docs/languages).|
|targetLanguageCodes|[string]|false|none|Required. The BCP-47 language code to use for translation of the input document. Specify up to 10 language codes here.|

<h2 id="tocS_BatchTranslateTextRequest">BatchTranslateTextRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchtranslatetextrequest"></a>
<a id="schema_BatchTranslateTextRequest"></a>
<a id="tocSbatchtranslatetextrequest"></a>
<a id="tocsbatchtranslatetextrequest"></a>

```json
{
  "glossaries": {
    "property1": {
      "glossary": "string",
      "ignoreCase": true
    },
    "property2": {
      "glossary": "string",
      "ignoreCase": true
    }
  },
  "inputConfigs": [
    {
      "gcsSource": {
        "inputUri": "string"
      },
      "mimeType": "string"
    }
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "models": {
    "property1": "string",
    "property2": "string"
  },
  "outputConfig": {
    "gcsDestination": {
      "outputUriPrefix": "string"
    }
  },
  "sourceLanguageCode": "string",
  "targetLanguageCodes": [
    "string"
  ]
}
```

The batch translation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|glossaries|object|false|none|Optional. Glossaries to be applied for translation. It's keyed by target language code.|
|inputConfigs|[[InputConfig](#schemainputconfig)]|false|none|Required. Input configurations. The total number of files matched should be <= 100. The total content size should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.|
|labels|object|false|none|Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/labels for more information.|
|models|object|false|none|Optional. The models to use for translation. Map's key is target language code. Map's value is model name. Value can be a built-in general model, or an AutoML Translation model. The value format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used.|
|outputConfig|[OutputConfig](#schemaoutputconfig)|false|none|Required. Output configuration. If 2 input configs match to the same file (that is, same input path), we don't generate output for duplicate inputs.|
|sourceLanguageCode|string|false|none|Required. Source language code.|
|targetLanguageCodes|[string]|false|none|Required. Specify up to 10 language codes here.|

<h2 id="tocS_CancelOperationRequest">CancelOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacanceloperationrequest"></a>
<a id="schema_CancelOperationRequest"></a>
<a id="tocScanceloperationrequest"></a>
<a id="tocscanceloperationrequest"></a>

```json
{}
```

The request message for Operations.CancelOperation.

<h2 id="tocS_DetectLanguageRequest">DetectLanguageRequest</h2>
<!-- backwards compatibility -->
<a id="schemadetectlanguagerequest"></a>
<a id="schema_DetectLanguageRequest"></a>
<a id="tocSdetectlanguagerequest"></a>
<a id="tocsdetectlanguagerequest"></a>

```json
{
  "content": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mimeType": "string",
  "model": "string"
}
```

The request message for language detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|The content of the input stored as a string.|
|labels|object|false|none|Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/labels for more information.|
|mimeType|string|false|none|Optional. The format of the source text, for example, "text/html", "text/plain". If left blank, the MIME type defaults to "text/html".|
|model|string|false|none|Optional. The language detection model to be used. Format: `projects/{project-number-or-id}/locations/{location-id}/models/language-detection/{model-id}` Only one language detection model is currently supported: `projects/{project-number-or-id}/locations/{location-id}/models/language-detection/default`. If not specified, the default model is used.|

<h2 id="tocS_DetectLanguageResponse">DetectLanguageResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetectlanguageresponse"></a>
<a id="schema_DetectLanguageResponse"></a>
<a id="tocSdetectlanguageresponse"></a>
<a id="tocsdetectlanguageresponse"></a>

```json
{
  "languages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ]
}
```

The response message for language detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languages|[[DetectedLanguage](#schemadetectedlanguage)]|false|none|A list of detected languages sorted by detection confidence in descending order. The most probable language first.|

<h2 id="tocS_DetectedLanguage">DetectedLanguage</h2>
<!-- backwards compatibility -->
<a id="schemadetectedlanguage"></a>
<a id="schema_DetectedLanguage"></a>
<a id="tocSdetectedlanguage"></a>
<a id="tocsdetectedlanguage"></a>

```json
{
  "confidence": 0,
  "languageCode": "string"
}
```

The response message for language detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|The confidence of the detection result for this language.|
|languageCode|string|false|none|The BCP-47 language code of source content in the request, detected automatically.|

<h2 id="tocS_DocumentInputConfig">DocumentInputConfig</h2>
<!-- backwards compatibility -->
<a id="schemadocumentinputconfig"></a>
<a id="schema_DocumentInputConfig"></a>
<a id="tocSdocumentinputconfig"></a>
<a id="tocsdocumentinputconfig"></a>

```json
{
  "content": "string",
  "gcsSource": {
    "inputUri": "string"
  },
  "mimeType": "string"
}
```

A document translation request input config.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string(byte)|false|none|Document's content represented as a stream of bytes.|
|gcsSource|[GcsSource](#schemagcssource)|false|none|Google Cloud Storage location. This must be a single file. For example: gs://example_bucket/example_file.pdf|
|mimeType|string|false|none|Specifies the input document's mime_type. If not specified it will be determined using the file extension for gcs_source provided files. For a file provided through bytes content the mime_type must be provided. Currently supported mime types are: - application/pdf - application/vnd.openxmlformats-officedocument.wordprocessingml.document - application/vnd.openxmlformats-officedocument.presentationml.presentation - application/vnd.openxmlformats-officedocument.spreadsheetml.sheet|

<h2 id="tocS_DocumentOutputConfig">DocumentOutputConfig</h2>
<!-- backwards compatibility -->
<a id="schemadocumentoutputconfig"></a>
<a id="schema_DocumentOutputConfig"></a>
<a id="tocSdocumentoutputconfig"></a>
<a id="tocsdocumentoutputconfig"></a>

```json
{
  "gcsDestination": {
    "outputUriPrefix": "string"
  },
  "mimeType": "string"
}
```

A document translation request output config.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsDestination|[GcsDestination](#schemagcsdestination)|false|none|Optional. Google Cloud Storage destination for the translation output, e.g., `gs://my_bucket/my_directory/`. The destination directory provided does not have to be empty, but the bucket must exist. If a file with the same name as the output file already exists in the destination an error will be returned. For a DocumentInputConfig.contents provided document, the output file will have the name "output_[trg]_translations.[ext]", where - [trg] corresponds to the translated file's language code, - [ext] corresponds to the translated file's extension according to its mime type. For a DocumentInputConfig.gcs_uri provided document, the output file will have a name according to its URI. For example: an input file with URI: "gs://a/b/c.[extension]" stored in a gcs_destination bucket with name "my_bucket" will have an output URI: "gs://my_bucket/a_b_c_[trg]_translations.[ext]", where - [trg] corresponds to the translated file's language code, - [ext] corresponds to the translated file's extension according to its mime type. If the document was directly provided through the request, then the output document will have the format: "gs://my_bucket/translated_document_[trg]_translations.[ext], where - [trg] corresponds to the translated file's language code, - [ext] corresponds to the translated file's extension according to its mime type. If a glossary was provided, then the output URI for the glossary translation will be equal to the default output URI but have `glossary_translations` instead of `translations`. For the previous example, its glossary URI would be: "gs://my_bucket/a_b_c_[trg]_glossary_translations.[ext]". Thus the max number of output files will be 2 (Translated document, Glossary translated document). Callers should expect no partial outputs. If there is any error during document translation, no output will be stored in the Cloud Storage bucket.|
|mimeType|string|false|none|Optional. Specifies the translated document's mime_type. If not specified, the translated file's mime type will be the same as the input file's mime type. Currently only support the output mime type to be the same as input mime type. - application/pdf - application/vnd.openxmlformats-officedocument.wordprocessingml.document - application/vnd.openxmlformats-officedocument.presentationml.presentation - application/vnd.openxmlformats-officedocument.spreadsheetml.sheet|

<h2 id="tocS_DocumentTranslation">DocumentTranslation</h2>
<!-- backwards compatibility -->
<a id="schemadocumenttranslation"></a>
<a id="schema_DocumentTranslation"></a>
<a id="tocSdocumenttranslation"></a>
<a id="tocsdocumenttranslation"></a>

```json
{
  "byteStreamOutputs": [
    "string"
  ],
  "detectedLanguageCode": "string",
  "mimeType": "string"
}
```

A translated document message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|byteStreamOutputs|[string(byte)]|false|none|The array of translated documents. It is expected to be size 1 for now. We may produce multiple translated documents in the future for other type of file formats.|
|detectedLanguageCode|string|false|none|The detected language for the input document. If the user did not provide the source language for the input document, this field will have the language code automatically detected. If the source language was passed, auto-detection of the language does not occur and this field is empty.|
|mimeType|string|false|none|The translated document's mime type.|

<h2 id="tocS_Empty">Empty</h2>
<!-- backwards compatibility -->
<a id="schemaempty"></a>
<a id="schema_Empty"></a>
<a id="tocSempty"></a>
<a id="tocsempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_GcsDestination">GcsDestination</h2>
<!-- backwards compatibility -->
<a id="schemagcsdestination"></a>
<a id="schema_GcsDestination"></a>
<a id="tocSgcsdestination"></a>
<a id="tocsgcsdestination"></a>

```json
{
  "outputUriPrefix": "string"
}
```

The Google Cloud Storage location for the output content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputUriPrefix|string|false|none|Required. There must be no files under 'output_uri_prefix'. 'output_uri_prefix' must end with "/" and start with "gs://", otherwise an INVALID_ARGUMENT (400) error is returned.|

<h2 id="tocS_GcsSource">GcsSource</h2>
<!-- backwards compatibility -->
<a id="schemagcssource"></a>
<a id="schema_GcsSource"></a>
<a id="tocSgcssource"></a>
<a id="tocsgcssource"></a>

```json
{
  "inputUri": "string"
}
```

The Google Cloud Storage location for the input content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputUri|string|false|none|Required. Source data URI. For example, `gs://my_bucket/my_object`.|

<h2 id="tocS_Glossary">Glossary</h2>
<!-- backwards compatibility -->
<a id="schemaglossary"></a>
<a id="schema_Glossary"></a>
<a id="tocSglossary"></a>
<a id="tocsglossary"></a>

```json
{
  "endTime": "string",
  "entryCount": 0,
  "inputConfig": {
    "gcsSource": {
      "inputUri": "string"
    }
  },
  "languageCodesSet": {
    "languageCodes": [
      "string"
    ]
  },
  "languagePair": {
    "sourceLanguageCode": "string",
    "targetLanguageCode": "string"
  },
  "name": "string",
  "submitTime": "string"
}
```

Represents a glossary built from user provided data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|read-only|Output only. When the glossary creation was finished.|
|entryCount|integer(int32)|false|read-only|Output only. The number of entries defined in the glossary.|
|inputConfig|[GlossaryInputConfig](#schemaglossaryinputconfig)|false|none|Required. Provides examples to build the glossary from. Total glossary must not exceed 10M Unicode codepoints.|
|languageCodesSet|[LanguageCodesSet](#schemalanguagecodesset)|false|none|Used with equivalent term set glossaries.|
|languagePair|[LanguageCodePair](#schemalanguagecodepair)|false|none|Used with unidirectional glossaries.|
|name|string|false|none|Required. The resource name of the glossary. Glossary names have the form `projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}`.|
|submitTime|string(google-datetime)|false|read-only|Output only. When CreateGlossary was called.|

<h2 id="tocS_GlossaryInputConfig">GlossaryInputConfig</h2>
<!-- backwards compatibility -->
<a id="schemaglossaryinputconfig"></a>
<a id="schema_GlossaryInputConfig"></a>
<a id="tocSglossaryinputconfig"></a>
<a id="tocsglossaryinputconfig"></a>

```json
{
  "gcsSource": {
    "inputUri": "string"
  }
}
```

Input configuration for glossaries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsSource|[GcsSource](#schemagcssource)|false|none|Required. Google Cloud Storage location of glossary data. File format is determined based on the filename extension. API returns [google.rpc.Code.INVALID_ARGUMENT] for unsupported URI-s and file formats. Wildcards are not allowed. This must be a single file in one of the following formats: For unidirectional glossaries: - TSV/CSV (`.tsv`/`.csv`): 2 column file, tab- or comma-separated. The first column is source text. The second column is target text. The file must not contain headers. That is, the first row is data, not column names. - TMX (`.tmx`): TMX file with parallel data defining source/target term pairs. For equivalent term sets glossaries: - CSV (`.csv`): Multi-column CSV file defining equivalent glossary terms in multiple languages. See documentation for more information - [glossaries](https://cloud.google.com/translate/docs/advanced/glossary).|

<h2 id="tocS_InputConfig">InputConfig</h2>
<!-- backwards compatibility -->
<a id="schemainputconfig"></a>
<a id="schema_InputConfig"></a>
<a id="tocSinputconfig"></a>
<a id="tocsinputconfig"></a>

```json
{
  "gcsSource": {
    "inputUri": "string"
  },
  "mimeType": "string"
}
```

Input configuration for BatchTranslateText request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsSource|[GcsSource](#schemagcssource)|false|none|Required. Google Cloud Storage location for the source input. This can be a single file (for example, `gs://translation-test/input.tsv`) or a wildcard (for example, `gs://translation-test/*`). If a file extension is `.tsv`, it can contain either one or two columns. The first column (optional) is the id of the text request. If the first column is missing, we use the row number (0-based) from the input file as the ID in the output file. The second column is the actual text to be translated. We recommend each row be <= 10K Unicode codepoints, otherwise an error might be returned. Note that the input tsv must be RFC 4180 compliant. You could use https://github.com/Clever/csvlint to check potential formatting errors in your tsv file. csvlint --delimiter='\t' your_input_file.tsv The other supported file extensions are `.txt` or `.html`, which is treated as a single large chunk of text.|
|mimeType|string|false|none|Optional. Can be "text/plain" or "text/html". For `.tsv`, "text/html" is used if mime_type is missing. For `.html`, this field must be "text/html" or empty. For `.txt`, this field must be "text/plain" or empty.|

<h2 id="tocS_LanguageCodePair">LanguageCodePair</h2>
<!-- backwards compatibility -->
<a id="schemalanguagecodepair"></a>
<a id="schema_LanguageCodePair"></a>
<a id="tocSlanguagecodepair"></a>
<a id="tocslanguagecodepair"></a>

```json
{
  "sourceLanguageCode": "string",
  "targetLanguageCode": "string"
}
```

Used with unidirectional glossaries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceLanguageCode|string|false|none|Required. The BCP-47 language code of the input text, for example, "en-US". Expected to be an exact match for GlossaryTerm.language_code.|
|targetLanguageCode|string|false|none|Required. The BCP-47 language code for translation output, for example, "zh-CN". Expected to be an exact match for GlossaryTerm.language_code.|

<h2 id="tocS_LanguageCodesSet">LanguageCodesSet</h2>
<!-- backwards compatibility -->
<a id="schemalanguagecodesset"></a>
<a id="schema_LanguageCodesSet"></a>
<a id="tocSlanguagecodesset"></a>
<a id="tocslanguagecodesset"></a>

```json
{
  "languageCodes": [
    "string"
  ]
}
```

Used with equivalent term set glossaries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languageCodes|[string]|false|none|The BCP-47 language code(s) for terms defined in the glossary. All entries are unique. The list contains at least two entries. Expected to be an exact match for GlossaryTerm.language_code.|

<h2 id="tocS_ListGlossariesResponse">ListGlossariesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistglossariesresponse"></a>
<a id="schema_ListGlossariesResponse"></a>
<a id="tocSlistglossariesresponse"></a>
<a id="tocslistglossariesresponse"></a>

```json
{
  "glossaries": [
    {
      "endTime": "string",
      "entryCount": 0,
      "inputConfig": {
        "gcsSource": {
          "inputUri": "string"
        }
      },
      "languageCodesSet": {
        "languageCodes": [
          "string"
        ]
      },
      "languagePair": {
        "sourceLanguageCode": "string",
        "targetLanguageCode": "string"
      },
      "name": "string",
      "submitTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for ListGlossaries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|glossaries|[[Glossary](#schemaglossary)]|false|none|The list of glossaries for a project.|
|nextPageToken|string|false|none|A token to retrieve a page of results. Pass this value in the [ListGlossariesRequest.page_token] field in the subsequent call to `ListGlossaries` method to retrieve the next page of results.|

<h2 id="tocS_ListLocationsResponse">ListLocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlocationsresponse"></a>
<a id="schema_ListLocationsResponse"></a>
<a id="tocSlistlocationsresponse"></a>
<a id="tocslistlocationsresponse"></a>

```json
{
  "locations": [
    {
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "locationId": "string",
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response message for Locations.ListLocations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locations|[[Location](#schemalocation)]|false|none|A list of locations that matches the specified filter in the request.|
|nextPageToken|string|false|none|The standard List next-page token.|

<h2 id="tocS_ListOperationsResponse">ListOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistoperationsresponse"></a>
<a id="schema_ListOperationsResponse"></a>
<a id="tocSlistoperationsresponse"></a>
<a id="tocslistoperationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "operations": [
    {
      "done": true,
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "response": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

The response message for Operations.ListOperations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The standard List next-page token.|
|operations|[[Operation](#schemaoperation)]|false|none|A list of operations that matches the specified filter in the request.|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "locationId": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string"
}
```

A resource that represents Google Cloud Platform location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The friendly name for this location, typically a nearby city name. For example, "Tokyo".|
|labels|object|false|none|Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}|
|locationId|string|false|none|The canonical id for this location. For example: `"us-east1"`.|
|metadata|object|false|none|Service-specific metadata. For example the available capacity at the given location.|
|name|string|false|none|Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`|

<h2 id="tocS_Operation">Operation</h2>
<!-- backwards compatibility -->
<a id="schemaoperation"></a>
<a id="schema_Operation"></a>
<a id="tocSoperation"></a>
<a id="tocsoperation"></a>

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

This resource represents a long-running operation that is the result of a network API call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|done|boolean|false|none|If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.|
|error|[Status](#schemastatus)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

<h2 id="tocS_OutputConfig">OutputConfig</h2>
<!-- backwards compatibility -->
<a id="schemaoutputconfig"></a>
<a id="schema_OutputConfig"></a>
<a id="tocSoutputconfig"></a>
<a id="tocsoutputconfig"></a>

```json
{
  "gcsDestination": {
    "outputUriPrefix": "string"
  }
}
```

Output configuration for BatchTranslateText request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsDestination|[GcsDestination](#schemagcsdestination)|false|none|Google Cloud Storage destination for output content. For every single input file (for example, gs://a/b/c.[extension]), we generate at most 2 * n output files. (n is the # of target_language_codes in the BatchTranslateTextRequest). Output files (tsv) generated are compliant with RFC 4180 except that record delimiters are '\n' instead of '\r\n'. We don't provide any way to change record delimiters. While the input files are being processed, we write/update an index file 'index.csv' under 'output_uri_prefix' (for example, gs://translation-test/index.csv) The index file is generated/updated as new files are being translated. The format is: input_file,target_language_code,translations_file,errors_file, glossary_translations_file,glossary_errors_file input_file is one file we matched using gcs_source.input_uri. target_language_code is provided in the request. translations_file contains the translations. (details provided below) errors_file contains the errors during processing of the file. (details below). Both translations_file and errors_file could be empty strings if we have no content to output. glossary_translations_file and glossary_errors_file are always empty strings if the input_file is tsv. They could also be empty if we have no content to output. Once a row is present in index.csv, the input/output matching never changes. Callers should also expect all the content in input_file are processed and ready to be consumed (that is, no partial output file is written). Since index.csv will be keeping updated during the process, please make sure there is no custom retention policy applied on the output bucket that may avoid file updating. (https://cloud.google.com/storage/docs/bucket-lock#retention-policy) The format of translations_file (for target language code 'trg') is: `gs://translation_test/a_b_c_'trg'_translations.[extension]` If the input file extension is tsv, the output has the following columns: Column 1: ID of the request provided in the input, if it's not provided in the input, then the input row number is used (0-based). Column 2: source sentence. Column 3: translation without applying a glossary. Empty string if there is an error. Column 4 (only present if a glossary is provided in the request): translation after applying the glossary. Empty string if there is an error applying the glossary. Could be same string as column 3 if there is no glossary applied. If input file extension is a txt or html, the translation is directly written to the output file. If glossary is requested, a separate glossary_translations_file has format of gs://translation_test/a_b_c_'trg'_glossary_translations.[extension] The format of errors file (for target language code 'trg') is: gs://translation_test/a_b_c_'trg'_errors.[extension] If the input file extension is tsv, errors_file contains the following: Column 1: ID of the request provided in the input, if it's not provided in the input, then the input row number is used (0-based). Column 2: source sentence. Column 3: Error detail for the translation. Could be empty. Column 4 (only present if a glossary is provided in the request): Error when applying the glossary. If the input file extension is txt or html, glossary_error_file will be generated that contains error details. glossary_error_file has format of gs://translation_test/a_b_c_'trg'_glossary_errors.[extension]|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "code": 0,
  "details": [
    {
      "property1": null,
      "property2": null
    }
  ],
  "message": "string"
}
```

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The status code, which should be an enum value of google.rpc.Code.|
|details|[object]|false|none|A list of messages that carry the error details. There is a common set of message types for APIs to use.|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.|

<h2 id="tocS_SupportedLanguage">SupportedLanguage</h2>
<!-- backwards compatibility -->
<a id="schemasupportedlanguage"></a>
<a id="schema_SupportedLanguage"></a>
<a id="tocSsupportedlanguage"></a>
<a id="tocssupportedlanguage"></a>

```json
{
  "displayName": "string",
  "languageCode": "string",
  "supportSource": true,
  "supportTarget": true
}
```

A single supported language response corresponds to information related to one supported language.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Human readable name of the language localized in the display language specified in the request.|
|languageCode|string|false|none|Supported language code, generally consisting of its ISO 639-1 identifier, for example, 'en', 'ja'. In certain cases, BCP-47 codes including language and region identifiers are returned (for example, 'zh-TW' and 'zh-CN')|
|supportSource|boolean|false|none|Can be used as source language.|
|supportTarget|boolean|false|none|Can be used as target language.|

<h2 id="tocS_SupportedLanguages">SupportedLanguages</h2>
<!-- backwards compatibility -->
<a id="schemasupportedlanguages"></a>
<a id="schema_SupportedLanguages"></a>
<a id="tocSsupportedlanguages"></a>
<a id="tocssupportedlanguages"></a>

```json
{
  "languages": [
    {
      "displayName": "string",
      "languageCode": "string",
      "supportSource": true,
      "supportTarget": true
    }
  ]
}
```

The response message for discovering supported languages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languages|[[SupportedLanguage](#schemasupportedlanguage)]|false|none|A list of supported language responses. This list contains an entry for each language the Translation API supports.|

<h2 id="tocS_TranslateDocumentRequest">TranslateDocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schematranslatedocumentrequest"></a>
<a id="schema_TranslateDocumentRequest"></a>
<a id="tocStranslatedocumentrequest"></a>
<a id="tocstranslatedocumentrequest"></a>

```json
{
  "customizedAttribution": "string",
  "documentInputConfig": {
    "content": "string",
    "gcsSource": {
      "inputUri": "string"
    },
    "mimeType": "string"
  },
  "documentOutputConfig": {
    "gcsDestination": {
      "outputUriPrefix": "string"
    },
    "mimeType": "string"
  },
  "enableRotationCorrection": true,
  "enableShadowRemovalNativePdf": true,
  "glossaryConfig": {
    "glossary": "string",
    "ignoreCase": true
  },
  "isTranslateNativePdfOnly": true,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "model": "string",
  "sourceLanguageCode": "string",
  "targetLanguageCode": "string"
}
```

A document translation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customizedAttribution|string|false|none|Optional. This flag is to support user customized attribution. If not provided, the default is `Machine Translated by Google`. Customized attribution should follow rules in https://cloud.google.com/translate/attribution#attribution_and_logos|
|documentInputConfig|[DocumentInputConfig](#schemadocumentinputconfig)|false|none|Required. Input configurations.|
|documentOutputConfig|[DocumentOutputConfig](#schemadocumentoutputconfig)|false|none|Optional. Output configurations. Defines if the output file should be stored within Cloud Storage as well as the desired output format. If not provided the translated file will only be returned through a byte-stream and its output mime type will be the same as the input file's mime type.|
|enableRotationCorrection|boolean|false|none|Optional. If true, enable auto rotation correction in DVS.|
|enableShadowRemovalNativePdf|boolean|false|none|Optional. If true, use the text removal server to remove the shadow text on background image for native pdf translation. Shadow removal feature can only be enabled when is_translate_native_pdf_only: false && pdf_native_only: false|
|glossaryConfig|[TranslateTextGlossaryConfig](#schematranslatetextglossaryconfig)|false|none|Optional. Glossary to be applied. The glossary must be within the same region (have the same location-id) as the model, otherwise an INVALID_ARGUMENT (400) error is returned.|
|isTranslateNativePdfOnly|boolean|false|none|Optional. is_translate_native_pdf_only field for external customers. If true, the page limit of online native pdf translation is 300 and only native pdf pages will be translated.|
|labels|object|false|none|Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/advanced/labels for more information.|
|model|string|false|none|Optional. The `model` type requested for this translation. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, If not provided, the default Google model (NMT) will be used for translation.|
|sourceLanguageCode|string|false|none|Optional. The BCP-47 language code of the input document if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in Language Support. If the source language isn't specified, the API attempts to identify the source language automatically and returns the source language within the response. Source language must be specified if the request contains a glossary or a custom model.|
|targetLanguageCode|string|false|none|Required. The BCP-47 language code to use for translation of the input document, set to one of the language codes listed in Language Support.|

<h2 id="tocS_TranslateDocumentResponse">TranslateDocumentResponse</h2>
<!-- backwards compatibility -->
<a id="schematranslatedocumentresponse"></a>
<a id="schema_TranslateDocumentResponse"></a>
<a id="tocStranslatedocumentresponse"></a>
<a id="tocstranslatedocumentresponse"></a>

```json
{
  "documentTranslation": {
    "byteStreamOutputs": [
      "string"
    ],
    "detectedLanguageCode": "string",
    "mimeType": "string"
  },
  "glossaryConfig": {
    "glossary": "string",
    "ignoreCase": true
  },
  "glossaryDocumentTranslation": {
    "byteStreamOutputs": [
      "string"
    ],
    "detectedLanguageCode": "string",
    "mimeType": "string"
  },
  "model": "string"
}
```

A translated document response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documentTranslation|[DocumentTranslation](#schemadocumenttranslation)|false|none|Translated document.|
|glossaryConfig|[TranslateTextGlossaryConfig](#schematranslatetextglossaryconfig)|false|none|The `glossary_config` used for this translation.|
|glossaryDocumentTranslation|[DocumentTranslation](#schemadocumenttranslation)|false|none|The document's translation output if a glossary is provided in the request. This can be the same as [TranslateDocumentResponse.document_translation] if no glossary terms apply.|
|model|string|false|none|Only present when 'model' is present in the request. 'model' is normalized to have a project number. For example: If the 'model' field in TranslateDocumentRequest is: `projects/{project-id}/locations/{location-id}/models/general/nmt` then `model` here would be normalized to `projects/{project-number}/locations/{location-id}/models/general/nmt`.|

<h2 id="tocS_TranslateTextGlossaryConfig">TranslateTextGlossaryConfig</h2>
<!-- backwards compatibility -->
<a id="schematranslatetextglossaryconfig"></a>
<a id="schema_TranslateTextGlossaryConfig"></a>
<a id="tocStranslatetextglossaryconfig"></a>
<a id="tocstranslatetextglossaryconfig"></a>

```json
{
  "glossary": "string",
  "ignoreCase": true
}
```

Configures which glossary should be used for a specific target language, and defines options for applying that glossary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|glossary|string|false|none|Required. Specifies the glossary used for this translation. Use this format: projects/*/locations/*/glossaries/*|
|ignoreCase|boolean|false|none|Optional. Indicates match is case-insensitive. Default value is false if missing.|

<h2 id="tocS_TranslateTextRequest">TranslateTextRequest</h2>
<!-- backwards compatibility -->
<a id="schematranslatetextrequest"></a>
<a id="schema_TranslateTextRequest"></a>
<a id="tocStranslatetextrequest"></a>
<a id="tocstranslatetextrequest"></a>

```json
{
  "contents": [
    "string"
  ],
  "glossaryConfig": {
    "glossary": "string",
    "ignoreCase": true
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mimeType": "string",
  "model": "string",
  "sourceLanguageCode": "string",
  "targetLanguageCode": "string"
}
```

The request message for synchronous translation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contents|[string]|false|none|Required. The content of the input in string format. We recommend the total content be less than 30k codepoints. The max length of this field is 1024. Use BatchTranslateText for larger text.|
|glossaryConfig|[TranslateTextGlossaryConfig](#schematranslatetextglossaryconfig)|false|none|Optional. Glossary to be applied. The glossary must be within the same region (have the same location-id) as the model, otherwise an INVALID_ARGUMENT (400) error is returned.|
|labels|object|false|none|Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/labels for more information.|
|mimeType|string|false|none|Optional. The format of the source text, for example, "text/html", "text/plain". If left blank, the MIME type defaults to "text/html".|
|model|string|false|none|Optional. The `model` type requested for this translation. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, For global (non-regionalized) requests, use `location-id` `global`. For example, `projects/{project-number-or-id}/locations/global/models/general/nmt`. If not provided, the default Google model (NMT) will be used|
|sourceLanguageCode|string|false|none|Optional. The BCP-47 language code of the input text if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in Language Support. If the source language isn't specified, the API attempts to identify the source language automatically and returns the source language within the response.|
|targetLanguageCode|string|false|none|Required. The BCP-47 language code to use for translation of the input text, set to one of the language codes listed in Language Support.|

<h2 id="tocS_TranslateTextResponse">TranslateTextResponse</h2>
<!-- backwards compatibility -->
<a id="schematranslatetextresponse"></a>
<a id="schema_TranslateTextResponse"></a>
<a id="tocStranslatetextresponse"></a>
<a id="tocstranslatetextresponse"></a>

```json
{
  "glossaryTranslations": [
    {
      "detectedLanguageCode": "string",
      "glossaryConfig": {
        "glossary": "string",
        "ignoreCase": true
      },
      "model": "string",
      "translatedText": "string"
    }
  ],
  "translations": [
    {
      "detectedLanguageCode": "string",
      "glossaryConfig": {
        "glossary": "string",
        "ignoreCase": true
      },
      "model": "string",
      "translatedText": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|glossaryTranslations|[[Translation](#schematranslation)]|false|none|Text translation responses if a glossary is provided in the request. This can be the same as `translations` if no terms apply. This field has the same length as `contents`.|
|translations|[[Translation](#schematranslation)]|false|none|Text translation responses with no glossary applied. This field has the same length as `contents`.|

<h2 id="tocS_Translation">Translation</h2>
<!-- backwards compatibility -->
<a id="schematranslation"></a>
<a id="schema_Translation"></a>
<a id="tocStranslation"></a>
<a id="tocstranslation"></a>

```json
{
  "detectedLanguageCode": "string",
  "glossaryConfig": {
    "glossary": "string",
    "ignoreCase": true
  },
  "model": "string",
  "translatedText": "string"
}
```

A single translation response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectedLanguageCode|string|false|none|The BCP-47 language code of source text in the initial request, detected automatically, if no source language was passed within the initial request. If the source language was passed, auto-detection of the language does not occur and this field is empty.|
|glossaryConfig|[TranslateTextGlossaryConfig](#schematranslatetextglossaryconfig)|false|none|The `glossary_config` used for this translation.|
|model|string|false|none|Only present when `model` is present in the request. `model` here is normalized to have project number. For example: If the `model` requested in TranslationTextRequest is `projects/{project-id}/locations/{location-id}/models/general/nmt` then `model` here would be normalized to `projects/{project-number}/locations/{location-id}/models/general/nmt`.|
|translatedText|string|false|none|Text translated into the target language. If an error occurs during translation, this field might be excluded from the response.|

<h2 id="tocS_WaitOperationRequest">WaitOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemawaitoperationrequest"></a>
<a id="schema_WaitOperationRequest"></a>
<a id="tocSwaitoperationrequest"></a>
<a id="tocswaitoperationrequest"></a>

```json
{
  "timeout": "string"
}
```

The request message for Operations.WaitOperation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeout|string(google-duration)|false|none|The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.|
