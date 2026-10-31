<h1 id="cloud-trace-api">Cloud Trace API v2beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Sends application trace data to Cloud Trace for viewing. Trace data is collected for all App Engine applications by default. Trace data from other applications can be provided using this API. This library is used to interact with the Cloud Trace API directly. If you are looking to instrument your application for Cloud Trace, we recommend using OpenTelemetry.

Base URLs:

* <a href="https://cloudtrace.googleapis.com/">https://cloudtrace.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/trace">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/trace.append|Write Trace data for a project or application|
|https://www.googleapis.com/auth/trace.readonly|Read Trace data for a project or application|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/trace.append|Write Trace data for a project or application|
|https://www.googleapis.com/auth/trace.readonly|Read Trace data for a project or application|

<h1 id="cloud-trace-api-projects">projects</h1>

## cloudtrace.projects.traceSinks.get

<a id="opIdcloudtrace.projects.traceSinks.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta1/{name}`

Get a trace sink by name under the parent resource (GCP project).

<h3 id="cloudtraceprojectstracesinksget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the sink: "projects/[PROJECT_NUMBER]/traceSinks/[SINK_ID]" Example: `"projects/12345/traceSinks/my-sink-id"`.|
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
  "name": "string",
  "outputConfig": {
    "destination": "string"
  },
  "writerIdentity": "string"
}
```

<h3 id="cloudtraceprojectstracesinksget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TraceSink](#schematracesink)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/trace.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/trace.readonly )
</aside>

## cloudtrace.projects.traceSinks.delete

<a id="opIdcloudtrace.projects.traceSinks.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2beta1/{name}`

Deletes a sink.

<h3 id="cloudtraceprojectstracesinksdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The full resource name of the sink to delete, including the parent resource and the sink identifier: "projects/[PROJECT_NUMBER]/traceSinks/[SINK_ID]" Example: `"projects/12345/traceSinks/my-sink-id"`.|
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

<h3 id="cloudtraceprojectstracesinksdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/trace.append ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/trace.append )
</aside>

## cloudtrace.projects.traceSinks.patch

<a id="opIdcloudtrace.projects.traceSinks.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "outputConfig": {
      "destination": "string"
    }
  }'
```

`PATCH /v2beta1/{name}`

Updates a sink. This method updates fields in the existing sink according to the provided update mask. The sink's name cannot be changed nor any output-only fields (e.g. the writer_identity).

> Body parameter

```json
{
  "name": "string",
  "outputConfig": {
    "destination": "string"
  }
}
```

<h3 id="cloudtraceprojectstracesinkspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_NUMBER]/traceSinks/[SINK_ID]" Example: `"projects/12345/traceSinks/my-sink-id"`.|
|updateMask|query|string|false|Required. Field mask that specifies the fields in `trace_sink` that are to be updated. A sink field is overwritten if, and only if, it is in the update mask. `name` and `writer_identity` fields cannot be updated. An empty `update_mask` is considered an error. For a detailed `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask Example: `updateMask=output_config`.|
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
|body|body|[TraceSink](#schematracesink)|false|none|
|» name|body|string|false|Required. The canonical sink resource name, unique within the project. Must be of the form: projects/[PROJECT_NUMBER]/traceSinks/[SINK_ID]. E.g.: `"projects/12345/traceSinks/my-project-trace-sink"`. Sink identifiers are limited to 256 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, and periods.|
|» outputConfig|body|[OutputConfig](#schemaoutputconfig)|false|Required. The export destination.|

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
  "name": "string",
  "outputConfig": {
    "destination": "string"
  },
  "writerIdentity": "string"
}
```

<h3 id="cloudtraceprojectstracesinkspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TraceSink](#schematracesink)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/trace.append ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/trace.append )
</aside>

## cloudtrace.projects.traceSinks.list

<a id="opIdcloudtrace.projects.traceSinks.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/string/traceSinks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta1/{parent}/traceSinks`

List all sinks for the parent resource (GCP project).

<h3 id="cloudtraceprojectstracesinkslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource whose sinks are to be listed (currently only project parent resources are supported): "projects/[PROJECT_ID]"|
|pageSize|query|integer|false|Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available.|
|pageToken|query|string|false|Optional. If present, then retrieve the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call.|
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
  "sinks": [
    {
      "name": "string",
      "outputConfig": {
        "destination": "string"
      },
      "writerIdentity": "string"
    }
  ]
}
```

<h3 id="cloudtraceprojectstracesinkslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListTraceSinksResponse](#schemalisttracesinksresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/trace.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/trace.readonly )
</aside>

## cloudtrace.projects.traceSinks.create

<a id="opIdcloudtrace.projects.traceSinks.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/string/traceSinks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "outputConfig": {
      "destination": "string"
    }
  }'
```

`POST /v2beta1/{parent}/traceSinks`

Creates a sink that exports trace spans to a destination. The export of newly-ingested traces begins immediately, unless the sink's `writer_identity` is not permitted to write to the destination. A sink can export traces only from the resource owning the sink (the 'parent').

> Body parameter

```json
{
  "name": "string",
  "outputConfig": {
    "destination": "string"
  }
}
```

<h3 id="cloudtraceprojectstracesinkscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource in which to create the sink (currently only project sinks are supported): "projects/[PROJECT_ID]" Examples: `"projects/my-trace-project"`, `"projects/123456789"`.|
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
|body|body|[TraceSink](#schematracesink)|false|none|
|» name|body|string|false|Required. The canonical sink resource name, unique within the project. Must be of the form: projects/[PROJECT_NUMBER]/traceSinks/[SINK_ID]. E.g.: `"projects/12345/traceSinks/my-project-trace-sink"`. Sink identifiers are limited to 256 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, and periods.|
|» outputConfig|body|[OutputConfig](#schemaoutputconfig)|false|Required. The export destination.|

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
  "name": "string",
  "outputConfig": {
    "destination": "string"
  },
  "writerIdentity": "string"
}
```

<h3 id="cloudtraceprojectstracesinkscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TraceSink](#schematracesink)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/trace.append ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/trace.append )
</aside>

# Schemas

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

<h2 id="tocS_ListTraceSinksResponse">ListTraceSinksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttracesinksresponse"></a>
<a id="schema_ListTraceSinksResponse"></a>
<a id="tocSlisttracesinksresponse"></a>
<a id="tocslisttracesinksresponse"></a>

```json
{
  "nextPageToken": "string",
  "sinks": [
    {
      "name": "string",
      "outputConfig": {
        "destination": "string"
      },
      "writerIdentity": "string"
    }
  ]
}
```

Result returned from `ListTraceSinks`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A paginated response where more pages might be available has `next_page_token` set. To get the next set of results, call the same method again using the value of `next_page_token` as `page_token`.|
|sinks|[[TraceSink](#schematracesink)]|false|none|A list of sinks.|

<h2 id="tocS_OutputConfig">OutputConfig</h2>
<!-- backwards compatibility -->
<a id="schemaoutputconfig"></a>
<a id="schema_OutputConfig"></a>
<a id="tocSoutputconfig"></a>
<a id="tocsoutputconfig"></a>

```json
{
  "destination": "string"
}
```

OutputConfig contains a destination for writing trace data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destination|string|false|none|The destination for writing trace data. Supported formats include: "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]"|

<h2 id="tocS_TraceSink">TraceSink</h2>
<!-- backwards compatibility -->
<a id="schematracesink"></a>
<a id="schema_TraceSink"></a>
<a id="tocStracesink"></a>
<a id="tocstracesink"></a>

```json
{
  "name": "string",
  "outputConfig": {
    "destination": "string"
  },
  "writerIdentity": "string"
}
```

Describes a sink used to export traces to a BigQuery dataset. The sink must be created within a project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Required. The canonical sink resource name, unique within the project. Must be of the form: projects/[PROJECT_NUMBER]/traceSinks/[SINK_ID]. E.g.: `"projects/12345/traceSinks/my-project-trace-sink"`. Sink identifiers are limited to 256 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, and periods.|
|outputConfig|[OutputConfig](#schemaoutputconfig)|false|none|Required. The export destination.|
|writerIdentity|string|false|read-only|Output only. A service account name for exporting the data. This field is set by sinks.create and sinks.update. The service account will need to be granted write access to the destination specified in the output configuration, see [Granting access for a resource](/iam/docs/granting-roles-to-service-accounts#granting_access_to_a_service_account_for_a_resource). To create tables and to write data, this account needs the `dataEditor` role. Read more about roles in the [BigQuery documentation](https://cloud.google.com/bigquery/docs/access-control). E.g.: "service-00000001@00000002.iam.gserviceaccount.com"|
