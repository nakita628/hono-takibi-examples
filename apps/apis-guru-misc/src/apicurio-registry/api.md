<h1 id="apicurio-registry-api-v2">Apicurio Registry API [v2] v2.4.x</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Apicurio Registry is a datastore for standard event schemas and API designs. Apicurio Registry enables developers to manage and share the structure of their data using a REST interface. For example, client applications can dynamically push or pull the latest updates to or from the registry without needing to redeploy. Apicurio Registry also enables developers to create rules that govern how registry content can evolve over time. For example, this includes rules for content validation and version compatibility.

The Apicurio Registry REST API enables client applications to manage the artifacts in the registry. This API provides create, read, update, and delete operations for schema and API artifacts, rules, versions, and metadata. 

The supported artifact types include:
- Apache Avro schema
- AsyncAPI specification
- Google protocol buffers
- GraphQL schema
- JSON Schema
- Kafka Connect schema
- OpenAPI specification
- Web Services Description Language
- XML Schema Definition


**Important**: The Apicurio Registry REST API is available from `https://MY-REGISTRY-URL/apis/registry/v2` by default. Therefore you must prefix all API operation paths with `../apis/registry/v2` in this case. For example: `../apis/registry/v2/ids/globalIds/{globalId}`.

Base URLs:

* <a href="http://apicurio.local">http://apicurio.local</a>

Email: <a href="mailto:apicurio@lists.jboss.org">Apicurio</a> 
Web: <a href="https://github.com/apicurio/apicurio-registry">Apicurio</a> 
License: <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache 2.0</a>

<h1 id="apicurio-registry-api-v2-artifacts">Artifacts</h1>

The primary way to interact with the Apicurio Registry API is to add, update, 
or delete artifacts. This section includes all of these primary operations.

## List artifacts in group

<a id="opIdlistArtifactsInGroup"></a>

> Code samples

```bash
curl https://example.com/groups/%22my-group%22/artifacts \
  -H 'Accept: application/json'
```

`GET /groups/{groupId}/artifacts`

Returns a list of all artifacts in the group.  This list is paged.

<h3 id="list-artifacts-in-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The number of artifacts to return.  Defaults to 20.|
|offset|query|integer|false|The number of artifacts to skip before starting the result set.  Defaults to 0.|
|order|query|[SortOrder](#schemasortorder)|false|Sort order, ascending (`asc`) or descending (`desc`).|
|orderby|query|[SortBy](#schemasortby)|false|The field to sort by.  Can be one of:<br><br>* `name`<br>* `createdOn`<br>|
|groupId|path|[GroupId](#schemagroupid)|true|The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|
|orderby|name|
|orderby|createdOn|

> Example responses

> 200 Response

```json
{
  "artifacts": [
    {
      "createdBy": "user1",
      "createdOn": "2019-03-22T12:51:19Z",
      "description": "Description of the artifact",
      "groupId": "My-Group",
      "id": "Procurement-Invoice",
      "labels": [
        "current",
        "internal"
      ],
      "name": "Artifact Name",
      "state": "ENABLED",
      "type": "AVRO"
    }
  ],
  "count": 0
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="list-artifacts-in-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|On a successful response, returns a bounded set of artifacts.|[ArtifactSearchResults](#schemaartifactsearchresults)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create artifact

<a id="opIdcreateArtifact"></a>

> Code samples

```bash
curl https://example.com/groups/%22my-group%22/artifacts \
  -X POST \
  -H 'Content-Type: application/create.extended+json' \
  -H 'Accept: application/json' \
  -d '{
    "content": "",
    "references": [
      {
        "artifactId": "13842090-2ce3-11ec-8d3d-0242ac130003",
        "groupId": "mygroup",
        "name": "foo.bar.Open",
        "version": "2"
      }
    ]
  }'
```

`POST /groups/{groupId}/artifacts`

Creates a new artifact by posting the artifact content.  The body of the request should
be the raw content of the artifact.  This is typically in JSON format for *most* of the 
supported types, but may be in another format for a few (for example, `PROTOBUF`).

The registry attempts to figure out what kind of artifact is being added from the
following supported list:

* Avro (`AVRO`)
* Protobuf (`PROTOBUF`)
* JSON Schema (`JSON`)
* Kafka Connect (`KCONNECT`)
* OpenAPI (`OPENAPI`)
* AsyncAPI (`ASYNCAPI`)
* GraphQL (`GRAPHQL`)
* Web Services Description Language (`WSDL`)
* XML Schema (`XSD`)

Alternatively, you can specify the artifact type using the `X-Registry-ArtifactType` 
HTTP request header, or include a hint in the request's `Content-Type`.  For example:

```
Content-Type: application/json; artifactType=AVRO
```

An artifact is created using the content provided in the body of the request.  This
content is created under a unique artifact ID that can be provided in the request
using the `X-Registry-ArtifactId` request header.  If not provided in the request,
the server generates a unique ID for the artifact.  It is typically recommended
that callers provide the ID, because this is typically a meaningful identifier, 
and for most use cases should be supplied by the caller.

If an artifact with the provided artifact ID already exists, the default behavior
is for the server to reject the content with a 409 error.  However, the caller can
supply the `ifExists` query parameter to alter this default behavior. The `ifExists`
query parameter can have one of the following values:

* `FAIL` (*default*) - server rejects the content with a 409 error
* `UPDATE` - server updates the existing artifact and returns the new metadata
* `RETURN` - server does not create or add content to the server, but instead 
returns the metadata for the existing artifact
* `RETURN_OR_UPDATE` - server returns an existing **version** that matches the 
provided content if such a version exists, otherwise a new version is created

This operation may fail for one of the following reasons:

* An invalid `ArtifactType` was indicated (HTTP error `400`)
* No `ArtifactType` was indicated and the server could not determine one from the content (HTTP error `400`)
* Provided content (request body) was empty (HTTP error `400`)
* An artifact with the provided ID already exists (HTTP error `409`)
* The content violates one of the configured global rules (HTTP error `409`)
* A server error occurred (HTTP error `500`)


> Body parameter

```json
{
  "content": "",
  "references": [
    {
      "artifactId": "13842090-2ce3-11ec-8d3d-0242ac130003",
      "groupId": "mygroup",
      "name": "foo.bar.Open",
      "version": "2"
    }
  ]
}
```

<h3 id="create-artifact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Registry-ArtifactType|header|[ArtifactType](#schemaartifacttype)|false|Specifies the type of the artifact being added. Possible values include:<br><br>* Avro (`AVRO`)<br>* Protobuf (`PROTOBUF`)<br>* JSON Schema (`JSON`)<br>* Kafka Connect (`KCONNECT`)<br>* OpenAPI (`OPENAPI`)<br>* AsyncAPI (`ASYNCAPI`)<br>* GraphQL (`GRAPHQL`)<br>* Web Services Description Language (`WSDL`)<br>* XML Schema (`XSD`)|
|X-Registry-ArtifactId|header|string|false|A client-provided, globally unique identifier for the new artifact.|
|X-Registry-Version|header|[Version](#schemaversion)|false|Specifies the version number of this initial version of the artifact content.  This would typically<br>be a simple integer or a SemVer value.  If not provided, the server will assign a version number<br>automatically (starting with version `1`).|
|ifExists|query|[IfExists](#schemaifexists)|false|Set this option to instruct the server on what to do if the artifact already exists.|
|canonical|query|boolean|false|Used only when the `ifExists` query parameter is set to `RETURN_OR_UPDATE`, this parameter can be set to `true` to indicate that the server should "canonicalize" the content when searching for a matching version.  The canonicalization algorithm is unique to each artifact type, but typically involves removing extra whitespace and formatting the content in a consistent manner.|
|X-Registry-Description|header|[ArtifactDescription](#schemaartifactdescription)|false|Specifies the description of artifact being added. Description must be ASCII-only string. If this is not provided, the server will extract the description from the artifact content.|
|X-Registry-Description-Encoded|header|[EncodedArtifactDescription](#schemaencodedartifactdescription)|false|Specifies the description of artifact being added. Value of this must be Base64 encoded string. If this is not provided, the server will extract the description from the artifact content.|
|X-Registry-Name|header|[ArtifactName](#schemaartifactname)|false|Specifies the name of artifact being added. Name must be ASCII-only string. If this is not provided, the server will extract the name from the artifact content.|
|X-Registry-Name-Encoded|header|[EncodedArtifactName](#schemaencodedartifactname)|false|Specifies the name of artifact being added. Value of this must be Base64 encoded string. If this is not provided, the server will extract the name from the artifact content.|
|X-Registry-Content-Hash|header|string|false|Specifies the (optional) hash of the artifact to be verified.|
|X-Registry-Hash-Algorithm|header|string|false|The algorithm to use when checking the content validity. (available: SHA256, MD5; default: SHA256)|
|groupId|path|[GroupId](#schemagroupid)|true|The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.|
|body|body|[ContentCreateRequest](#schemacontentcreaterequest)|true|The content of the artifact being created. This is often, but not always, JSON data<br>representing one of the supported artifact types:<br><br>* Avro (`AVRO`)<br>* Protobuf (`PROTOBUF`)<br>* JSON Schema (`JSON`)<br>* Kafka Connect (`KCONNECT`)<br>* OpenAPI (`OPENAPI`)<br>* AsyncAPI (`ASYNCAPI`)<br>* GraphQL (`GRAPHQL`)<br>* Web Services Description Language (`WSDL`)<br>* XML Schema (`XSD`)<br>|
|» content|body|string|true|Raw content of the artifact or a valid (and accessible) URL where the content can be found.|
|» references|body|[[ArtifactReference](#schemaartifactreference)]|true|Collection of references to other artifacts.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ifExists|FAIL|
|ifExists|UPDATE|
|ifExists|RETURN|
|ifExists|RETURN_OR_UPDATE|
|X-Registry-Hash-Algorithm|SHA256|
|X-Registry-Hash-Algorithm|MD5|

> Example responses

> 200 Response

```json
{
  "contentId": 82736,
  "createdBy": "user1",
  "createdOn": "2019-03-22T12:51:19Z",
  "description": "Description of the artifact",
  "globalId": 12984719247,
  "groupId": "My-Group",
  "id": "Procurement-Invoice",
  "labels": [
    "label-1",
    "label-2"
  ],
  "modifiedBy": "user2",
  "modifiedOn": "2019-07-19T15:09:00Z",
  "name": "Artifact Name",
  "properties": {
    "custom-1": "foo",
    "custom-2": "bar"
  },
  "references": [
    {
      "artifactId": "13842090-2ce3-11ec-8d3d-0242ac130003",
      "groupId": "mygroup",
      "name": "foo.bar.Open",
      "version": 2
    }
  ],
  "type": "AVRO",
  "version": 18
}
```

> 400 Response

```json
{
  "error_code": 500,
  "message": "An error occurred somewhere."
}
```

> 409 Response

```json
{
  "causes": [
    {
      "context": "/info[title]",
      "description": "API is missing a title"
    },
    {
      "context": "/paths[/invoices]/put[operationId]",
      "description": "Operation IDs must be unique"
    }
  ],
  "error_code": 409,
  "message": "The artifact content was invalid"
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="create-artifact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Artifact was successfully created.|[ArtifactMetaData](#schemaartifactmetadata)|
|400|Bad Request|Common response for all operations that can return a `400` error.|[Error](#schemaerror)|
|409|Conflict|Common response used when an input conflicts with existing data.|[RuleViolationError](#schemaruleviolationerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete artifacts in group

<a id="opIddeleteArtifactsInGroup"></a>

> Code samples

```bash
curl https://example.com/groups/%22my-group%22/artifacts \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /groups/{groupId}/artifacts`

Deletes all of the artifacts that exist in a given group.

<h3 id="delete-artifacts-in-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|[GroupId](#schemagroupid)|true|The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.|

> Example responses

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="delete-artifacts-in-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|When the delete operation is successful, a simple 204 is returned.|None|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get latest artifact

<a id="opIdgetLatestArtifact"></a>

> Code samples

```bash
curl https://example.com/groups/%22my-group%22/artifacts/%22example-artifact%22 \
  -H 'Accept: application/json'
```

`GET /groups/{groupId}/artifacts/{artifactId}`

Returns the latest version of the artifact in its raw form.  The `Content-Type` of the
response depends on the artifact type.  In most cases, this is `application/json`, but 
for some types it may be different (for example, `PROTOBUF`).

This operation may fail for one of the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


<h3 id="get-latest-artifact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dereference|query|boolean|false|Allows the user to specify if the content should be dereferenced when being returned|
|groupId|path|[GroupId](#schemagroupid)|true|The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.|
|artifactId|path|[ArtifactId](#schemaartifactid)|true|The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.|

> Example responses

> 200 Response

```json
{
  "info": {
    "description": "An example API design using OpenAPI.",
    "title": "Empty API",
    "version": "1.0.0"
  },
  "openapi": "3.0.2"
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="get-latest-artifact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The content of one version of one artifact.|[FileContent](#schemafilecontent)|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update artifact

<a id="opIdupdateArtifact"></a>

> Code samples

```bash
curl https://example.com/groups/%22my-group%22/artifacts/%22example-artifact%22 \
  -X PUT \
  -H 'Content-Type: application/create.extended+json' \
  -H 'Accept: application/json' \
  -d '{
    "content": "",
    "references": [
      {
        "artifactId": "13842090-2ce3-11ec-8d3d-0242ac130003",
        "groupId": "mygroup",
        "name": "foo.bar.Open",
        "version": "2"
      }
    ]
  }'
```

`PUT /groups/{groupId}/artifacts/{artifactId}`

Updates an artifact by uploading new content.  The body of the request can
be the raw content of the artifact or a JSON object containing both the raw content and
a set of references to other artifacts..  This is typically in JSON format for *most*
of the supported types, but may be in another format for a few (for example, `PROTOBUF`).
The type of the content should be compatible with the artifact's type (it would be
an error to update an `AVRO` artifact with new `OPENAPI` content, for example).

The update could fail for a number of reasons including:

* Provided content (request body) was empty (HTTP error `400`)
* No artifact with the `artifactId` exists (HTTP error `404`)
* The new content violates one of the rules configured for the artifact (HTTP error `409`)
* A server error occurred (HTTP error `500`)

When successful, this creates a new version of the artifact, making it the most recent
(and therefore official) version of the artifact.

> Body parameter

```json
{
  "content": "",
  "references": [
    {
      "artifactId": "13842090-2ce3-11ec-8d3d-0242ac130003",
      "groupId": "mygroup",
      "name": "foo.bar.Open",
      "version": "2"
    }
  ]
}
```

<h3 id="update-artifact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Registry-Version|header|[Version](#schemaversion)|false|Specifies the version number of this new version of the artifact content.  This would typically<br>be a simple integer or a SemVer value.  If not provided, the server will assign a version number<br>automatically.|
|X-Registry-Name|header|[ArtifactName](#schemaartifactname)|false|Specifies the artifact name of this new version of the artifact content. Name must be ASCII-only string. If this is not<br>provided, the server will extract the name from the artifact content.|
|X-Registry-Name-Encoded|header|[EncodedArtifactName](#schemaencodedartifactname)|false|Specifies the artifact name of this new version of the artifact content. Value of this must be Base64 encoded string. If this is not provided, the server will extract the name from the artifact content.|
|X-Registry-Description|header|[ArtifactDescription](#schemaartifactdescription)|false|Specifies the artifact description of this new version of the artifact content. Description must be ASCII-only string. If this is not provided, the server will extract the description from the artifact content.|
|X-Registry-Description-Encoded|header|[EncodedArtifactDescription](#schemaencodedartifactdescription)|false|Specifies the artifact description of this new version of the artifact content. Value of this must be Base64 encoded string. If this is not provided, the server will extract the description from the artifact content.|
|groupId|path|[GroupId](#schemagroupid)|true|The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.|
|artifactId|path|[ArtifactId](#schemaartifactid)|true|The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.|
|body|body|[ContentCreateRequest](#schemacontentcreaterequest)|true|The new content of the artifact being updated. This is often, but not always, JSON data<br>representing one of the supported artifact types:<br><br>* Avro (`AVRO`)<br>* Protobuf (`PROTOBUF`)<br>* JSON Schema (`JSON`)<br>* Kafka Connect (`KCONNECT`)<br>* OpenAPI (`OPENAPI`)<br>* AsyncAPI (`ASYNCAPI`)<br>* GraphQL (`GRAPHQL`)<br>* Web Services Description Language (`WSDL`)<br>* XML Schema (`XSD`)<br>|
|» content|body|string|true|Raw content of the artifact or a valid (and accessible) URL where the content can be found.|
|» references|body|[[ArtifactReference](#schemaartifactreference)]|true|Collection of references to other artifacts.|

> Example responses

> 200 Response

```json
{
  "contentId": 82736,
  "createdBy": "user1",
  "createdOn": "2019-03-22T12:51:19Z",
  "description": "Description of the artifact",
  "globalId": 12984719247,
  "groupId": "My-Group",
  "id": "Procurement-Invoice",
  "labels": [
    "label-1",
    "label-2"
  ],
  "modifiedBy": "user2",
  "modifiedOn": "2019-07-19T15:09:00Z",
  "name": "Artifact Name",
  "properties": {
    "custom-1": "foo",
    "custom-2": "bar"
  },
  "references": [
    {
      "artifactId": "13842090-2ce3-11ec-8d3d-0242ac130003",
      "groupId": "mygroup",
      "name": "foo.bar.Open",
      "version": 2
    }
  ],
  "type": "AVRO",
  "version": 18
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 409 Response

```json
{
  "error_code": 409,
  "message": "The artifact content was invalid."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="update-artifact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|When successful, returns the updated artifact metadata.|[ArtifactMetaData](#schemaartifactmetadata)|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|409|Conflict|Common response used when an input conflicts with existing data.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete artifact

<a id="opIddeleteArtifact"></a>

> Code samples

```bash
curl https://example.com/groups/%22my-group%22/artifacts/%22example-artifact%22 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /groups/{groupId}/artifacts/{artifactId}`

Deletes an artifact completely, resulting in all versions of the artifact also being
deleted.  This may fail for one of the following reasons:

* No artifact with the `artifactId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)

<h3 id="delete-artifact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|[GroupId](#schemagroupid)|true|The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.|
|artifactId|path|[ArtifactId](#schemaartifactid)|true|The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.|

> Example responses

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="delete-artifact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Returned when the artifact was successfully deleted.|None|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update artifact state

<a id="opIdupdateArtifactState"></a>

> Code samples

```bash
curl https://example.com/groups/%22my-group%22/artifacts/%22example-artifact%22/state \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "state": "DISABLED"
  }'
```

`PUT /groups/{groupId}/artifacts/{artifactId}/state`

Updates the state of the artifact.  For example, you can use this to mark the latest
version of an artifact as `DEPRECATED`.  The operation changes the state of the latest 
version of the artifact.  If multiple versions exist, only the most recent is changed.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


> Body parameter

```json
{
  "state": "DISABLED"
}
```

<h3 id="update-artifact-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|[GroupId](#schemagroupid)|true|The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.|
|artifactId|path|[ArtifactId](#schemaartifactid)|true|The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.|
|body|body|[UpdateState](#schemaupdatestate)|true|none|
|» state|body|[ArtifactState](#schemaartifactstate)|true|Describes the state of an artifact or artifact version.  The following states<br>are possible:<br><br>* ENABLED<br>* DISABLED<br>* DEPRECATED<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» state|ENABLED|
|» state|DISABLED|
|» state|DEPRECATED|

> Example responses

> 400 Response

```json
{
  "error_code": 500,
  "message": "An error occurred somewhere."
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="update-artifact-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Returned when the operation was successful.|None|
|400|Bad Request|Common response for all operations that can return a `400` error.|[Error](#schemaerror)|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get artifact content by SHA-256 hash

<a id="opIdgetContentByHash"></a>

> Code samples

```bash
curl https://example.com/ids/contentHashes/string/ \
  -H 'Accept: application/json'
```

`GET /ids/contentHashes/{contentHash}/`

Gets the content for an artifact version in the registry using the 
SHA-256 hash of the content.  This content hash may be shared by multiple artifact
versions in the case where the artifact versions have identical content.

This operation may fail for one of the following reasons:

* No content with this `contentHash` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


<h3 id="get-artifact-content-by-sha-256-hash-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contentHash|path|string|true|SHA-256 content hash for a single artifact content.|

> Example responses

> 200 Response

```json
{
  "info": {
    "description": "An example API design using OpenAPI.",
    "title": "Empty API",
    "version": "1.0.0"
  },
  "openapi": "3.0.2"
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="get-artifact-content-by-sha-256-hash-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The content of one version of one artifact.|[FileContent](#schemafilecontent)|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List artifact references by hash

<a id="opIdreferencesByContentHash"></a>

> Code samples

```bash
curl https://example.com/ids/contentHashes/string/references \
  -H 'Accept: application/json'
```

`GET /ids/contentHashes/{contentHash}/references`

Returns a list containing all the artifact references using the artifact content hash.

This operation may fail for one of the following reasons:

* A server error occurred (HTTP error `500`)


<h3 id="list-artifact-references-by-hash-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contentHash|path|string|true|SHA-256 content hash for a single artifact content.|

> Example responses

> 200 Response

```json
[
  {
    "artifactId": "13842090-2ce3-11ec-8d3d-0242ac130003",
    "groupId": "mygroup",
    "name": "foo.bar.Open",
    "version": "2"
  }
]
```

<h3 id="list-artifact-references-by-hash-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list containing all the references for the artifact with the given content hash.|Inline|

<h3 id="list-artifact-references-by-hash-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ArtifactReference](#schemaartifactreference)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get artifact content by ID

<a id="opIdgetContentById"></a>

> Code samples

```bash
curl https://example.com/ids/contentIds/0/ \
  -H 'Accept: application/json'
```

`GET /ids/contentIds/{contentId}/`

Gets the content for an artifact version in the registry using the unique content
identifier for that content.  This content ID may be shared by multiple artifact
versions in the case where the artifact versions are identical.

This operation may fail for one of the following reasons:

* No content with this `contentId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


<h3 id="get-artifact-content-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contentId|path|integer(int64)|true|Global identifier for a single artifact content.|

> Example responses

> 200 Response

```json
{
  "info": {
    "description": "An example API design using OpenAPI.",
    "title": "Empty API",
    "version": "1.0.0"
  },
  "openapi": "3.0.2"
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="get-artifact-content-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The content of one version of one artifact.|[FileContent](#schemafilecontent)|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List artifact references by content ID

<a id="opIdreferencesByContentId"></a>

> Code samples

```bash
curl https://example.com/ids/contentIds/0/references \
  -H 'Accept: application/json'
```

`GET /ids/contentIds/{contentId}/references`

Returns a list containing all the artifact references using the artifact content ID.

This operation may fail for one of the following reasons:

* A server error occurred (HTTP error `500`)

<h3 id="list-artifact-references-by-content-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contentId|path|integer(int64)|true|Global identifier for a single artifact content.|

> Example responses

> 200 Response

```json
[
  {
    "artifactId": "13842090-2ce3-11ec-8d3d-0242ac130003",
    "groupId": "mygroup",
    "name": "foo.bar.Open",
    "version": "2"
  }
]
```

<h3 id="list-artifact-references-by-content-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list containing all the references for the artifact with the given content id.|Inline|

<h3 id="list-artifact-references-by-content-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ArtifactReference](#schemaartifactreference)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get artifact by global ID

<a id="opIdgetContentByGlobalId"></a>

> Code samples

```bash
curl https://example.com/ids/globalIds/0 \
  -H 'Accept: application/json'
```

`GET /ids/globalIds/{globalId}`

Gets the content for an artifact version in the registry using its globally unique
identifier.

This operation may fail for one of the following reasons:

* No artifact version with this `globalId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


<h3 id="get-artifact-by-global-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dereference|query|boolean|false|Allows the user to specify if the content should be dereferenced when being returned|
|globalId|path|integer(int64)|true|Global identifier for an artifact version.|

> Example responses

> 200 Response

```json
{
  "info": {
    "description": "An example API design using OpenAPI.",
    "title": "Empty API",
    "version": "1.0.0"
  },
  "openapi": "3.0.2"
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="get-artifact-by-global-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The content of one version of one artifact.|[FileContent](#schemafilecontent)|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List artifact references by global ID

<a id="opIdreferencesByGlobalId"></a>

> Code samples

```bash
curl https://example.com/ids/globalIds/0/references \
  -H 'Accept: application/json'
```

`GET /ids/globalIds/{globalId}/references`

Returns a list containing all the artifact references using the artifact global ID.

This operation may fail for one of the following reasons:

* A server error occurred (HTTP error `500`)

<h3 id="list-artifact-references-by-global-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalId|path|integer(int64)|true|Global identifier for an artifact version.|

> Example responses

> 200 Response

```json
[
  {
    "artifactId": "13842090-2ce3-11ec-8d3d-0242ac130003",
    "groupId": "mygroup",
    "name": "foo.bar.Open",
    "version": "2"
  }
]
```

<h3 id="list-artifact-references-by-global-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list containing all the references for the artifact with the given global id.|Inline|

<h3 id="list-artifact-references-by-global-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ArtifactReference](#schemaartifactreference)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="apicurio-registry-api-v2-metadata">Metadata</h1>

Sometimes the metadata for an artifact is important. For example, metadata includes 
when the artifact was created, last updated, and so on. This section contains 
operations to access (and in some cases change) an artifact's metadata.

## Get artifact metadata

<a id="opIdgetArtifactMetaData"></a>

> Code samples

```bash
curl https://example.com/groups/%22my-group%22/artifacts/%22example-artifact%22/meta \
  -H 'Accept: application/json'
```

`GET /groups/{groupId}/artifacts/{artifactId}/meta`

Gets the metadata for an artifact in the registry.  The returned metadata includes
both generated (read-only) and editable metadata (such as name and description).

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)

<h3 id="get-artifact-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|[GroupId](#schemagroupid)|true|The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.|
|artifactId|path|[ArtifactId](#schemaartifactid)|true|The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.|

> Example responses

> 200 Response

```json
{
  "contentId": 82736,
  "createdBy": "user1",
  "createdOn": "2019-03-22T12:51:19Z",
  "description": "Description of the artifact",
  "globalId": 12984719247,
  "groupId": "My-Group",
  "id": "Procurement-Invoice",
  "labels": [
    "label-1",
    "label-2"
  ],
  "modifiedBy": "user2",
  "modifiedOn": "2019-07-19T15:09:00Z",
  "name": "Artifact Name",
  "properties": {
    "custom-1": "foo",
    "custom-2": "bar"
  },
  "references": [
    {
      "artifactId": "13842090-2ce3-11ec-8d3d-0242ac130003",
      "groupId": "mygroup",
      "name": "foo.bar.Open",
      "version": 2
    }
  ],
  "type": "AVRO",
  "version": 18
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="get-artifact-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The artifact's metadata.|[ArtifactMetaData](#schemaartifactmetadata)|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update artifact metadata

<a id="opIdupdateArtifactMetaData"></a>

> Code samples

```bash
curl https://example.com/groups/%22my-group%22/artifacts/%22example-artifact%22/meta \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "The description of the artifact.",
    "labels": [
      "regional",
      "global"
    ],
    "name": "Artifact Name",
    "properties": {
      "custom-1": "foo",
      "custom-2": "bar"
    }
  }'
```

`PUT /groups/{groupId}/artifacts/{artifactId}/meta`

Updates the editable parts of the artifact's metadata.  Not all metadata fields can
be updated.  For example, `createdOn` and `createdBy` are both read-only properties.

This operation can fail for the following reasons:

* No artifact with the `artifactId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)

> Body parameter

```json
{
  "description": "The description of the artifact.",
  "labels": [
    "regional",
    "global"
  ],
  "name": "Artifact Name",
  "properties": {
    "custom-1": "foo",
    "custom-2": "bar"
  }
}
```

<h3 id="update-artifact-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|[GroupId](#schemagroupid)|true|The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.|
|artifactId|path|[ArtifactId](#schemaartifactid)|true|The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.|
|body|body|[EditableMetaData](#schemaeditablemetadata)|true|Updated artifact metadata.|
|» description|body|string|false|none|
|» labels|body|[string]|false|none|
|» name|body|string|false|none|
|» properties|body|[Properties](#schemaproperties)|false|none|

> Example responses

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="update-artifact-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The artifact's metadata was updated.|None|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get artifact version metadata by content

<a id="opIdgetArtifactVersionMetaDataByContent"></a>

> Code samples

```bash
curl https://example.com/groups/%22my-group%22/artifacts/%22example-artifact%22/meta \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d '{"components":{"schemas":{"Widget":{"description":"A sample data type.","example":{"property-1":"value1","property-2":true},"properties":{"property-1":{"type":"string"},"property-2":{"type":"boolean"}},"title":"Root Type for Widget","type":"object"}}},"info":{"description":"An example API design using OpenAPI.","title":"Empty API","version":"1.0.7"},"openapi":"3.0.2","paths":{"/widgets":{"get":{"responses":{"200":{"content":{"application/json":{"schema":{"items":{"type":"string"},"type":"array"}}},"description":"All widgets"}},"summary":"Get widgets"}}}}'
```

`POST /groups/{groupId}/artifacts/{artifactId}/meta`

Gets the metadata for an artifact that matches the raw content.  Searches the registry
for a version of the given artifact matching the content provided in the body of the
POST.

This operation can fail for the following reasons:

* Provided content (request body) was empty (HTTP error `400`)
* No artifact with the `artifactId` exists (HTTP error `404`)
* No artifact version matching the provided content exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


> Body parameter

```json
{
  "components": {
    "schemas": {
      "Widget": {
        "description": "A sample data type.",
        "example": {
          "property-1": "value1",
          "property-2": true
        },
        "properties": {
          "property-1": {
            "type": "string"
          },
          "property-2": {
            "type": "boolean"
          }
        },
        "title": "Root Type for Widget",
        "type": "object"
      }
    }
  },
  "info": {
    "description": "An example API design using OpenAPI.",
    "title": "Empty API",
    "version": "1.0.7"
  },
  "openapi": "3.0.2",
  "paths": {
    "/widgets": {
      "get": {
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "items": {
                    "type": "string"
                  },
                  "type": "array"
                }
              }
            },
            "description": "All widgets"
          }
        },
        "summary": "Get widgets"
      }
    }
  }
}
```

<h3 id="get-artifact-version-metadata-by-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|canonical|query|boolean|false|Parameter that can be set to `true` to indicate that the server should "canonicalize" the content when searching for a matching version.  Canonicalization is unique to each artifact type, but typically involves removing any extra whitespace and formatting the content in a consistent manner.|
|groupId|path|[GroupId](#schemagroupid)|true|The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.|
|artifactId|path|[ArtifactId](#schemaartifactid)|true|The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.|
|body|body|[FileContent](#schemafilecontent)|true|The content of an artifact version.|

> Example responses

> 200 Response

```json
{
  "contentId": 12347,
  "createdBy": "user1",
  "createdOn": "2019-05-17T12:00:00Z",
  "description": "The description of the artifact",
  "globalId": 183282932983,
  "groupId": "My-Group",
  "id": "my-artifact-id",
  "labels": [
    "label-1",
    "label-2"
  ],
  "name": "Artifact Name",
  "properties": {
    "custom-1": "foo",
    "custom-2": "bar"
  },
  "references": [
    {
      "artifactId": "13842090-2ce3-11ec-8d3d-0242ac130003",
      "groupId": "mygroup",
      "name": "foo.bar.Open",
      "version": 2
    }
  ],
  "type": "PROTOBUF",
  "version": 1221432
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="get-artifact-version-metadata-by-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The metadata of the artifact version matching the provided content.|[VersionMetaData](#schemaversionmetadata)|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get artifact owner

<a id="opIdgetArtifactOwner"></a>

> Code samples

```bash
curl https://example.com/groups/%22my-group%22/artifacts/%22example-artifact%22/owner \
  -H 'Accept: application/json'
```

`GET /groups/{groupId}/artifacts/{artifactId}/owner`

Gets the owner of an artifact in the registry.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)

<h3 id="get-artifact-owner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|[GroupId](#schemagroupid)|true|The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.|
|artifactId|path|[ArtifactId](#schemaartifactid)|true|The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.|

> Example responses

> 200 Response

```json
{
  "owner": "bwayne"
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="get-artifact-owner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The artifact's owner.|[ArtifactOwner](#schemaartifactowner)|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update artifact owner

<a id="opIdupdateArtifactOwner"></a>

> Code samples

```bash
curl https://example.com/groups/%22my-group%22/artifacts/%22example-artifact%22/owner \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "owner": "bwayne"
  }'
```

`PUT /groups/{groupId}/artifacts/{artifactId}/owner`

Changes the ownership of an artifact.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)

> Body parameter

```json
{
  "owner": "bwayne"
}
```

<h3 id="update-artifact-owner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|[GroupId](#schemagroupid)|true|The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.|
|artifactId|path|[ArtifactId](#schemaartifactid)|true|The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.|
|body|body|[ArtifactOwner](#schemaartifactowner)|true|none|
|» owner|body|string|false|none|

> Example responses

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="update-artifact-owner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The owner was successfully changed.|None|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get artifact version metadata

<a id="opIdgetArtifactVersionMetaData"></a>

> Code samples

```bash
curl https://example.com/groups/%22my-group%22/artifacts/%22example-artifact%22/versions/%223.1.6%22/meta \
  -H 'Accept: application/json'
```

`GET /groups/{groupId}/artifacts/{artifactId}/versions/{version}/meta`

Retrieves the metadata for a single version of the artifact.  The version metadata is 
a subset of the artifact metadata and only includes the metadata that is specific to
the version (for example, this doesn't include `modifiedOn`).

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No version with this `version` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


<h3 id="get-artifact-version-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|[GroupId](#schemagroupid)|true|The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.|
|artifactId|path|[ArtifactId](#schemaartifactid)|true|The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.|
|version|path|[Version](#schemaversion)|true|The unique identifier of a specific version of the artifact content.|

> Example responses

> 200 Response

```json
{
  "contentId": 12347,
  "createdBy": "user1",
  "createdOn": "2019-05-17T12:00:00Z",
  "description": "The description of the artifact",
  "globalId": 183282932983,
  "groupId": "My-Group",
  "id": "my-artifact-id",
  "labels": [
    "label-1",
    "label-2"
  ],
  "name": "Artifact Name",
  "properties": {
    "custom-1": "foo",
    "custom-2": "bar"
  },
  "references": [
    {
      "artifactId": "13842090-2ce3-11ec-8d3d-0242ac130003",
      "groupId": "mygroup",
      "name": "foo.bar.Open",
      "version": 2
    }
  ],
  "type": "PROTOBUF",
  "version": 1221432
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="get-artifact-version-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The artifact version's metadata.|[VersionMetaData](#schemaversionmetadata)|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update artifact version metadata

<a id="opIdupdateArtifactVersionMetaData"></a>

> Code samples

```bash
curl https://example.com/groups/%22my-group%22/artifacts/%22example-artifact%22/versions/%223.1.6%22/meta \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "The description of the artifact.",
    "labels": [
      "regional",
      "global"
    ],
    "name": "Artifact Name",
    "properties": {
      "custom-1": "foo",
      "custom-2": "bar"
    }
  }'
```

`PUT /groups/{groupId}/artifacts/{artifactId}/versions/{version}/meta`

Updates the user-editable portion of the artifact version's metadata.  Only some of 
the metadata fields are editable by the user.  For example, `description` is editable, 
but `createdOn` is not.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No version with this `version` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


> Body parameter

```json
{
  "description": "The description of the artifact.",
  "labels": [
    "regional",
    "global"
  ],
  "name": "Artifact Name",
  "properties": {
    "custom-1": "foo",
    "custom-2": "bar"
  }
}
```

<h3 id="update-artifact-version-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|[GroupId](#schemagroupid)|true|The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.|
|artifactId|path|[ArtifactId](#schemaartifactid)|true|The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.|
|version|path|[Version](#schemaversion)|true|The unique identifier of a specific version of the artifact content.|
|body|body|[EditableMetaData](#schemaeditablemetadata)|true|none|
|» description|body|string|false|none|
|» labels|body|[string]|false|none|
|» name|body|string|false|none|
|» properties|body|[Properties](#schemaproperties)|false|none|

> Example responses

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="update-artifact-version-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The artifact version's metadata was successfully updated.|None|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete artifact version metadata

<a id="opIddeleteArtifactVersionMetaData"></a>

> Code samples

```bash
curl https://example.com/groups/%22my-group%22/artifacts/%22example-artifact%22/versions/%223.1.6%22/meta \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /groups/{groupId}/artifacts/{artifactId}/versions/{version}/meta`

Deletes the user-editable metadata properties of the artifact version.  Any properties
that are not user-editable are preserved.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No version with this `version` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


<h3 id="delete-artifact-version-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|[GroupId](#schemagroupid)|true|The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.|
|artifactId|path|[ArtifactId](#schemaartifactid)|true|The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.|
|version|path|[Version](#schemaversion)|true|The unique identifier of a specific version of the artifact content.|

> Example responses

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="delete-artifact-version-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The artifact version's user-editable metadata was successfully deleted.|None|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="apicurio-registry-api-v2-versions">Versions</h1>

When artifact content is updated, old versions of the artifact content are not lost.  All versions can be listed and accessed if necessary. This section describes the operations used to list and access all versions of an artifact's content and metadata.

## List artifact versions

<a id="opIdlistArtifactVersions"></a>

> Code samples

```bash
curl https://example.com/groups/%22my-group%22/artifacts/%22example-artifact%22/versions \
  -H 'Accept: application/json'
```

`GET /groups/{groupId}/artifacts/{artifactId}/versions`

Returns a list of all versions of the artifact.  The result set is paged.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


<h3 id="list-artifact-versions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer|false|The number of versions to skip before starting to collect the result set.  Defaults to 0.|
|limit|query|integer|false|The number of versions to return.  Defaults to 20.|
|groupId|path|[GroupId](#schemagroupid)|true|The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.|
|artifactId|path|[ArtifactId](#schemaartifactid)|true|The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.|

> Example responses

> 200 Response

```json
[
  5,
  6,
  10,
  103
]
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="list-artifact-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all artifact versions.|[VersionSearchResults](#schemaversionsearchresults)|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create artifact version

<a id="opIdcreateArtifactVersion"></a>

> Code samples

```bash
curl https://example.com/groups/%22my-group%22/artifacts/%22example-artifact%22/versions \
  -X POST \
  -H 'Content-Type: application/create.extended+json' \
  -H 'Accept: application/json' \
  -d '{
    "content": "",
    "references": [
      {
        "artifactId": "13842090-2ce3-11ec-8d3d-0242ac130003",
        "groupId": "mygroup",
        "name": "foo.bar.Open",
        "version": "2"
      }
    ]
  }'
```

`POST /groups/{groupId}/artifacts/{artifactId}/versions`

Creates a new version of the artifact by uploading new content.  The configured rules for
the artifact are applied, and if they all pass, the new content is added as the most recent 
version of the artifact.  If any of the rules fail, an error is returned.

The body of the request can be the raw content of the new artifact version, or the raw content 
and a set of references pointing to other artifacts, and the type
of that content should match the artifact's type (for example if the artifact type is `AVRO`
then the content of the request should be an Apache Avro document).

This operation can fail for the following reasons:

* Provided content (request body) was empty (HTTP error `400`)
* No artifact with this `artifactId` exists (HTTP error `404`)
* The new content violates one of the rules configured for the artifact (HTTP error `409`)
* A server error occurred (HTTP error `500`)


> Body parameter

```json
{
  "content": "",
  "references": [
    {
      "artifactId": "13842090-2ce3-11ec-8d3d-0242ac130003",
      "groupId": "mygroup",
      "name": "foo.bar.Open",
      "version": "2"
    }
  ]
}
```

<h3 id="create-artifact-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Registry-Version|header|[Version](#schemaversion)|false|Specifies the version number of this new version of the artifact content.  This would typically<br>be a simple integer or a SemVer value.  It must be unique within the artifact.  If this is not<br>provided, the server will generate a new, unique version number for this new updated content.|
|X-Registry-Name|header|[ArtifactName](#schemaartifactname)|false|Specifies the artifact name of this new version of the artifact content. Name must be ASCII-only string. If this is not<br>provided, the server will extract the name from the artifact content.|
|X-Registry-Description|header|[ArtifactDescription](#schemaartifactdescription)|false|Specifies the artifact description of this new version of the artifact content. Description must be ASCII-only string. If this is not provided, the server will extract the description from the artifact content.|
|X-Registry-Description-Encoded|header|[EncodedArtifactDescription](#schemaencodedartifactdescription)|false|Specifies the artifact description of this new version of the artifact content. Value of this must be Base64 encoded string. If this is not provided, the server will extract the description from the artifact content.|
|X-Registry-Name-Encoded|header|[EncodedArtifactName](#schemaencodedartifactname)|false|Specifies the artifact name of this new version of the artifact content. Value of this must be Base64 encoded string. If this is not provided, the server will extract the name from the artifact content.|
|groupId|path|[GroupId](#schemagroupid)|true|The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.|
|artifactId|path|[ArtifactId](#schemaartifactid)|true|The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.|
|body|body|[ContentCreateRequest](#schemacontentcreaterequest)|true|The content of the artifact version being created or the content and a set of references to other artifacts. This is often, but not always, JSON data<br>representing one of the supported artifact types:<br><br>* Avro (`AVRO`)<br>* Protobuf (`PROTOBUF`)<br>* JSON Schema (`JSON`)<br>* Kafka Connect (`KCONNECT`)<br>* OpenAPI (`OPENAPI`)<br>* AsyncAPI (`ASYNCAPI`)<br>* GraphQL (`GRAPHQL`)<br>* Web Services Description Language (`WSDL`)<br>* XML Schema (`XSD`)<br>|
|» content|body|string|true|Raw content of the artifact or a valid (and accessible) URL where the content can be found.|
|» references|body|[[ArtifactReference](#schemaartifactreference)]|true|Collection of references to other artifacts.|

> Example responses

> 200 Response

```json
{
  "contentId": 12347,
  "createdBy": "user1",
  "createdOn": "2019-05-17T12:00:00Z",
  "description": "The description of the artifact",
  "globalId": 183282932983,
  "groupId": "My-Group",
  "id": "my-artifact-id",
  "labels": [
    "label-1",
    "label-2"
  ],
  "name": "Artifact Name",
  "properties": {
    "custom-1": "foo",
    "custom-2": "bar"
  },
  "references": [
    {
      "artifactId": "13842090-2ce3-11ec-8d3d-0242ac130003",
      "groupId": "mygroup",
      "name": "foo.bar.Open",
      "version": 2
    }
  ],
  "type": "PROTOBUF",
  "version": 1221432
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 409 Response

```json
{
  "causes": [
    {
      "context": "/info[title]",
      "description": "API is missing a title"
    },
    {
      "context": "/paths[/invoices]/put[operationId]",
      "description": "Operation IDs must be unique"
    }
  ],
  "error_code": 409,
  "message": "The artifact content was invalid"
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="create-artifact-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The artifact version was successfully created.|[VersionMetaData](#schemaversionmetadata)|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|409|Conflict|Common response used when an input conflicts with existing data.|[RuleViolationError](#schemaruleviolationerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get artifact version

<a id="opIdgetArtifactVersion"></a>

> Code samples

```bash
curl https://example.com/groups/%22my-group%22/artifacts/%22example-artifact%22/versions/%223.1.6%22 \
  -H 'Accept: application/json'
```

`GET /groups/{groupId}/artifacts/{artifactId}/versions/{version}`

Retrieves a single version of the artifact content.  Both the `artifactId` and the
unique `version` number must be provided.  The `Content-Type` of the response depends 
on the artifact type.  In most cases, this is `application/json`, but for some types 
it may be different (for example, `PROTOBUF`).

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No version with this `version` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


<h3 id="get-artifact-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dereference|query|boolean|false|Allows the user to specify if the content should be dereferenced when being returned|
|groupId|path|[GroupId](#schemagroupid)|true|The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.|
|artifactId|path|[ArtifactId](#schemaartifactid)|true|The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.|
|version|path|[Version](#schemaversion)|true|The unique identifier of a specific version of the artifact content.|

> Example responses

> 200 Response

```json
{
  "info": {
    "description": "An example API design using OpenAPI.",
    "title": "Empty API",
    "version": "1.0.0"
  },
  "openapi": "3.0.2"
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="get-artifact-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The content of one version of one artifact.|[FileContent](#schemafilecontent)|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get artifact version

<a id="opIdgetArtifactVersionReferences"></a>

> Code samples

```bash
curl https://example.com/groups/%22my-group%22/artifacts/%22example-artifact%22/versions/%223.1.6%22/references \
  -H 'Accept: application/json'
```

`GET /groups/{groupId}/artifacts/{artifactId}/versions/{version}/references`

Retrieves a single version of the artifact content.  Both the `artifactId` and the
unique `version` number must be provided.  The `Content-Type` of the response depends 
on the artifact type.  In most cases, this is `application/json`, but for some types 
it may be different (for example, `PROTOBUF`).

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No version with this `version` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


<h3 id="get-artifact-version-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|[GroupId](#schemagroupid)|true|The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.|
|artifactId|path|[ArtifactId](#schemaartifactid)|true|The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.|
|version|path|[Version](#schemaversion)|true|The unique identifier of a specific version of the artifact content.|

> Example responses

> 200 Response

```json
[
  {
    "artifactId": "13842090-2ce3-11ec-8d3d-0242ac130003",
    "groupId": "mygroup",
    "name": "foo.bar.Open",
    "version": "2"
  }
]
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="get-artifact-version-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all the artifact references for this artifact.|Inline|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<h3 id="get-artifact-version-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ArtifactReference](#schemaartifactreference)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update artifact version state

<a id="opIdupdateArtifactVersionState"></a>

> Code samples

```bash
curl https://example.com/groups/%22my-group%22/artifacts/%22example-artifact%22/versions/%223.1.6%22/state \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "state": "DISABLED"
  }'
```

`PUT /groups/{groupId}/artifacts/{artifactId}/versions/{version}/state`

Updates the state of a specific version of an artifact.  For example, you can use 
this operation to disable a specific version.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No version with this `version` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


> Body parameter

```json
{
  "state": "DISABLED"
}
```

<h3 id="update-artifact-version-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|[GroupId](#schemagroupid)|true|The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.|
|artifactId|path|[ArtifactId](#schemaartifactid)|true|The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.|
|version|path|[Version](#schemaversion)|true|The unique identifier of a specific version of the artifact content.|
|body|body|[UpdateState](#schemaupdatestate)|true|none|
|» state|body|[ArtifactState](#schemaartifactstate)|true|Describes the state of an artifact or artifact version.  The following states<br>are possible:<br><br>* ENABLED<br>* DISABLED<br>* DEPRECATED<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» state|ENABLED|
|» state|DISABLED|
|» state|DEPRECATED|

> Example responses

> 400 Response

```json
{
  "error_code": 500,
  "message": "An error occurred somewhere."
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="update-artifact-version-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Returned when the update was successful.|None|
|400|Bad Request|Common response for all operations that can return a `400` error.|[Error](#schemaerror)|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="apicurio-registry-api-v2-artifact-rules">Artifact rules</h1>

Rules can be configured on a per-artifact basis, allowing for different approaches
to content evolution for each artifact.  These rules override any global rules
that have been configured. This section contains the operations used to manage a
single artifact's rules.

## List artifact rules

<a id="opIdlistArtifactRules"></a>

> Code samples

```bash
curl https://example.com/groups/%22my-group%22/artifacts/%22example-artifact%22/rules \
  -H 'Accept: application/json'
```

`GET /groups/{groupId}/artifacts/{artifactId}/rules`

Returns a list of all rules configured for the artifact.  The set of rules determines
how the content of an artifact can evolve over time.  If no rules are configured for
an artifact, the set of globally configured rules are used.  If no global rules 
are defined, there are no restrictions on content evolution.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)

<h3 id="list-artifact-rules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|[GroupId](#schemagroupid)|true|The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.|
|artifactId|path|[ArtifactId](#schemaartifactid)|true|The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.|

> Example responses

> 200 Response

```json
[
  "VALIDITY"
]
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="list-artifact-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the names of the rules configured for the artifact.|Inline|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<h3 id="list-artifact-rules-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RuleType](#schemaruletype)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create artifact rule

<a id="opIdcreateArtifactRule"></a>

> Code samples

```bash
curl https://example.com/groups/%22my-group%22/artifacts/%22example-artifact%22/rules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "config": "FULL",
    "type": "VALIDITY"
  }'
```

`POST /groups/{groupId}/artifacts/{artifactId}/rules`

Adds a rule to the list of rules that get applied to the artifact when adding new
versions.  All configured rules must pass to successfully add a new artifact version.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* Rule (named in the request body) is unknown (HTTP error `400`)
* A server error occurred (HTTP error `500`)

> Body parameter

```json
{
  "config": "FULL",
  "type": "VALIDITY"
}
```

<h3 id="create-artifact-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|[GroupId](#schemagroupid)|true|The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.|
|artifactId|path|[ArtifactId](#schemaartifactid)|true|The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.|
|body|body|[Rule](#schemarule)|true|none|
|» config|body|string|true|none|
|» type|body|[RuleType](#schemaruletype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|VALIDITY|
|» type|COMPATIBILITY|

> Example responses

> 400 Response

```json
{
  "error_code": 500,
  "message": "An error occurred somewhere."
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="create-artifact-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The rule was added.|None|
|400|Bad Request|Common response for all operations that can return a `400` error.|[Error](#schemaerror)|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete artifact rules

<a id="opIddeleteArtifactRules"></a>

> Code samples

```bash
curl https://example.com/groups/%22my-group%22/artifacts/%22example-artifact%22/rules \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /groups/{groupId}/artifacts/{artifactId}/rules`

Deletes all of the rules configured for the artifact.  After this is done, the global
rules apply to the artifact again.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)

<h3 id="delete-artifact-rules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|[GroupId](#schemagroupid)|true|The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.|
|artifactId|path|[ArtifactId](#schemaartifactid)|true|The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.|

> Example responses

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="delete-artifact-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The rules were successfully deleted.|None|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get artifact rule configuration

<a id="opIdgetArtifactRuleConfig"></a>

> Code samples

```bash
curl https://example.com/groups/%22my-group%22/artifacts/%22example-artifact%22/rules/VALIDITY \
  -H 'Accept: application/json'
```

`GET /groups/{groupId}/artifacts/{artifactId}/rules/{rule}`

Returns information about a single rule configured for an artifact.  This is useful
when you want to know what the current configuration settings are for a specific rule.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No rule with this name/type is configured for this artifact (HTTP error `404`)
* Invalid rule type (HTTP error `400`)
* A server error occurred (HTTP error `500`)

<h3 id="get-artifact-rule-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|[GroupId](#schemagroupid)|true|The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.|
|artifactId|path|[ArtifactId](#schemaartifactid)|true|The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.|
|rule|path|string|true|The unique name/type of a rule.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|rule|VALIDITY|
|rule|COMPATIBILITY|

> Example responses

> 200 Response

```json
{
  "config": "FULL",
  "type": "VALIDITY"
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="get-artifact-rule-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Information about a rule.|[Rule](#schemarule)|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update artifact rule configuration

<a id="opIdupdateArtifactRuleConfig"></a>

> Code samples

```bash
curl https://example.com/groups/%22my-group%22/artifacts/%22example-artifact%22/rules/VALIDITY \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "config": "FULL",
    "type": "VALIDITY"
  }'
```

`PUT /groups/{groupId}/artifacts/{artifactId}/rules/{rule}`

Updates the configuration of a single rule for the artifact.  The configuration data
is specific to each rule type, so the configuration of the `COMPATIBILITY` rule 
is in a different format from the configuration of the `VALIDITY` rule.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No rule with this name/type is configured for this artifact (HTTP error `404`)
* Invalid rule type (HTTP error `400`)
* A server error occurred (HTTP error `500`)


> Body parameter

```json
{
  "config": "FULL",
  "type": "VALIDITY"
}
```

<h3 id="update-artifact-rule-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|[GroupId](#schemagroupid)|true|The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.|
|artifactId|path|[ArtifactId](#schemaartifactid)|true|The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.|
|rule|path|string|true|The unique name/type of a rule.|
|body|body|[Rule](#schemarule)|true|none|
|» config|body|string|true|none|
|» type|body|[RuleType](#schemaruletype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|rule|VALIDITY|
|rule|COMPATIBILITY|
|» type|VALIDITY|
|» type|COMPATIBILITY|

> Example responses

> 200 Response

```json
{
  "config": "FULL",
  "type": "VALIDITY"
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="update-artifact-rule-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Rule configuration was updated.|[Rule](#schemarule)|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete artifact rule

<a id="opIddeleteArtifactRule"></a>

> Code samples

```bash
curl https://example.com/groups/%22my-group%22/artifacts/%22example-artifact%22/rules/VALIDITY \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /groups/{groupId}/artifacts/{artifactId}/rules/{rule}`

Deletes a rule from the artifact.  This results in the rule no longer applying for
this artifact.  If this is the only rule configured for the artifact, this is the 
same as deleting **all** rules, and the globally configured rules now apply to
this artifact.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No rule with this name/type is configured for this artifact (HTTP error `404`)
* Invalid rule type (HTTP error `400`)
* A server error occurred (HTTP error `500`)

<h3 id="delete-artifact-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|[GroupId](#schemagroupid)|true|The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.|
|artifactId|path|[ArtifactId](#schemaartifactid)|true|The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.|
|rule|path|string|true|The unique name/type of a rule.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|rule|VALIDITY|
|rule|COMPATIBILITY|

> Example responses

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="delete-artifact-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The rule was successfully deleted.|None|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Test update artifact

<a id="opIdtestUpdateArtifact"></a>

> Code samples

```bash
curl https://example.com/groups/%22my-group%22/artifacts/%22example-artifact%22/test \
  -X PUT \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  --data-binary '@/path/to/file'
```

`PUT /groups/{groupId}/artifacts/{artifactId}/test`

Tests whether an update to the artifact's content *would* succeed for the provided content.
Ultimately, this applies any rules configured for the artifact against the given content
to determine whether the rules would pass or fail, but without actually updating the artifact
content.

The body of the request should be the raw content of the artifact.  This is typically in 
JSON format for *most* of the supported types, but may be in another format for a few 
(for example, `PROTOBUF`).

The update could fail for a number of reasons including:

* Provided content (request body) was empty (HTTP error `400`)
* No artifact with the `artifactId` exists (HTTP error `404`)
* The new content violates one of the rules configured for the artifact (HTTP error `409`)
* The provided artifact type is not recognized (HTTP error `404`)
* A server error occurred (HTTP error `500`)

When successful, this operation simply returns a *No Content* response.  This response
indicates that the content is valid against the configured content rules for the 
artifact (or the global rules if no artifact rules are enabled).

<h3 id="test-update-artifact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|[GroupId](#schemagroupid)|true|The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.|
|artifactId|path|[ArtifactId](#schemaartifactid)|true|The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.|
|body|body|[FileContent](#schemafilecontent)|true|The content of the artifact being tested. This is often, but not always, JSON data<br>representing one of the supported artifact types:<br><br>* Avro (`AVRO`)<br>* Protobuf (`PROTOBUF`)<br>* JSON Schema (`JSON`)<br>* Kafka Connect (`KCONNECT`)<br>* OpenAPI (`OPENAPI`)<br>* AsyncAPI (`ASYNCAPI`)<br>* GraphQL (`GRAPHQL`)<br>* Web Services Description Language (`WSDL`)<br>* XML Schema (`XSD`)<br>|

> Example responses

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 409 Response

```json
{
  "causes": [
    {
      "context": "/info[title]",
      "description": "API is missing a title"
    },
    {
      "context": "/paths[/invoices]/put[operationId]",
      "description": "Operation IDs must be unique"
    }
  ],
  "error_code": 409,
  "message": "The artifact content was invalid"
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="test-update-artifact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|When successful, returns "No Content" to indicate that the rules passed, and the<br>content was not updated.|None|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|409|Conflict|Common response used when an input conflicts with existing data.|[RuleViolationError](#schemaruleviolationerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="apicurio-registry-api-v2-global-rules">Global rules</h1>

Global rules can be configured in the registry to govern how artifact content can 
evolve over time (as artifact content is **updated**). Global rules are applied 
whenever an artifact is added to the registry, and also whenever an artifact's 
content is updated (only if that artifact does not have its own specific rules 
configured). This section describes the operations used to manage the global rules.

## List global rules

<a id="opIdlistGlobalRules"></a>

> Code samples

```bash
curl https://example.com/admin/rules \
  -H 'Accept: application/json'
```

`GET /admin/rules`

Gets a list of all the currently configured global rules (if any).

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)


> Example responses

> 200 Response

```json
[
  "VALIDITY"
]
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="list-global-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of names of the globally configured rules.|Inline|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<h3 id="list-global-rules-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RuleType](#schemaruletype)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create global rule

<a id="opIdcreateGlobalRule"></a>

> Code samples

```bash
curl https://example.com/admin/rules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "config": "FULL",
    "type": "VALIDITY"
  }'
```

`POST /admin/rules`

Adds a rule to the list of globally configured rules.

This operation can fail for the following reasons:

* The rule type is unknown (HTTP error `400`)
* The rule already exists (HTTP error `409`)
* A server error occurred (HTTP error `500`)


> Body parameter

```json
{
  "config": "FULL",
  "type": "VALIDITY"
}
```

<h3 id="create-global-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Rule](#schemarule)|true|none|
|» config|body|string|true|none|
|» type|body|[RuleType](#schemaruletype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|VALIDITY|
|» type|COMPATIBILITY|

> Example responses

> 400 Response

```json
{
  "error_code": 500,
  "message": "An error occurred somewhere."
}
```

> 409 Response

```json
{
  "error_code": 409,
  "message": "The artifact content was invalid."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="create-global-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The global rule was added.|None|
|400|Bad Request|Common response for all operations that can return a `400` error.|[Error](#schemaerror)|
|409|Conflict|Common response used when an input conflicts with existing data.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete all global rules

<a id="opIddeleteAllGlobalRules"></a>

> Code samples

```bash
curl https://example.com/admin/rules \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /admin/rules`

Deletes all globally configured rules.

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)


> Example responses

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="delete-all-global-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|All global rules have been removed successfully.|None|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get global rule configuration

<a id="opIdgetGlobalRuleConfig"></a>

> Code samples

```bash
curl https://example.com/admin/rules/VALIDITY \
  -H 'Accept: application/json'
```

`GET /admin/rules/{rule}`

Returns information about the named globally configured rule.

This operation can fail for the following reasons:

* Invalid rule name/type (HTTP error `400`)
* No rule with name/type `rule` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


<h3 id="get-global-rule-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rule|path|[RuleType](#schemaruletype)|true|The unique name/type of a rule.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|rule|VALIDITY|
|rule|COMPATIBILITY|

> Example responses

> 200 Response

```json
{
  "config": "FULL",
  "type": "VALIDITY"
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="get-global-rule-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The global rule's configuration.|[Rule](#schemarule)|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update global rule configuration

<a id="opIdupdateGlobalRuleConfig"></a>

> Code samples

```bash
curl https://example.com/admin/rules/VALIDITY \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "config": "FULL",
    "type": "VALIDITY"
  }'
```

`PUT /admin/rules/{rule}`

Updates the configuration for a globally configured rule.

This operation can fail for the following reasons:

* Invalid rule name/type (HTTP error `400`)
* No rule with name/type `rule` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


> Body parameter

```json
{
  "config": "FULL",
  "type": "VALIDITY"
}
```

<h3 id="update-global-rule-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rule|path|[RuleType](#schemaruletype)|true|The unique name/type of a rule.|
|body|body|[Rule](#schemarule)|true|none|
|» config|body|string|true|none|
|» type|body|[RuleType](#schemaruletype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|rule|VALIDITY|
|rule|COMPATIBILITY|
|» type|VALIDITY|
|» type|COMPATIBILITY|

> Example responses

> 200 Response

```json
{
  "config": "FULL",
  "type": "VALIDITY"
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="update-global-rule-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The global rule's configuration was successfully updated.|[Rule](#schemarule)|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete global rule

<a id="opIddeleteGlobalRule"></a>

> Code samples

```bash
curl https://example.com/admin/rules/VALIDITY \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /admin/rules/{rule}`

Deletes a single global rule.  If this is the only rule configured, this is the same
as deleting **all** rules.

This operation can fail for the following reasons:

* Invalid rule name/type (HTTP error `400`)
* No rule with name/type `rule` exists (HTTP error `404`)
* Rule cannot be deleted (HTTP error `409`)
* A server error occurred (HTTP error `500`)


<h3 id="delete-global-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rule|path|[RuleType](#schemaruletype)|true|The unique name/type of a rule.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|rule|VALIDITY|
|rule|COMPATIBILITY|

> Example responses

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="delete-global-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The global rule was successfully deleted.|None|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="apicurio-registry-api-v2-search">Search</h1>

The search API is used to browse or find artifacts in the registry. This section describes the operations for searching for artifacts and versions. 

## Search for artifacts

<a id="opIdsearchArtifacts"></a>

> Code samples

```bash
curl https://example.com/search/artifacts \
  -H 'Accept: application/json'
```

`GET /search/artifacts`

Returns a paginated list of all artifacts that match the provided filter criteria.


<h3 id="search-for-artifacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Filter by artifact name.|
|offset|query|integer|false|The number of artifacts to skip before starting to collect the result set.  Defaults to 0.|
|limit|query|integer|false|The number of artifacts to return.  Defaults to 20.|
|order|query|[SortOrder](#schemasortorder)|false|Sort order, ascending (`asc`) or descending (`desc`).|
|orderby|query|[SortBy](#schemasortby)|false|The field to sort by.  Can be one of:<br><br>* `name`<br>* `createdOn`<br>|
|labels|query|[string]|false|Filter by label.  Include one or more label to only return artifacts containing all of the<br>specified labels.|
|properties|query|[string]|false|Filter by one or more name/value property.  Separate each name/value pair using a colon.  For<br>example `properties=foo:bar` will return only artifacts with a custom property named `foo`<br>and value `bar`.|
|description|query|string|false|Filter by description.|
|group|query|string|false|Filter by artifact group.|
|globalId|query|integer(int64)|false|Filter by globalId.|
|contentId|query|integer(int64)|false|Filter by contentId.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|
|orderby|name|
|orderby|createdOn|

> Example responses

> 200 Response

```json
{
  "artifacts": [
    {
      "createdBy": "user1",
      "createdOn": "2019-03-22T12:51:19Z",
      "description": "Description of the artifact",
      "groupId": "My-Group",
      "id": "Procurement-Invoice",
      "labels": [
        "current",
        "internal"
      ],
      "name": "Artifact Name",
      "state": "ENABLED",
      "type": "AVRO"
    }
  ],
  "count": 0
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="search-for-artifacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|On a successful response, returns a result set of artifacts - one for each artifact<br>in the registry that matches the criteria.|[ArtifactSearchResults](#schemaartifactsearchresults)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Search for artifacts by content

<a id="opIdsearchArtifactsByContent"></a>

> Code samples

```bash
curl https://example.com/search/artifacts \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  --data-binary '@/path/to/file'
```

`POST /search/artifacts`

Returns a paginated list of all artifacts with at least one version that matches the
posted content.


<h3 id="search-for-artifacts-by-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|canonical|query|boolean|false|Parameter that can be set to `true` to indicate that the server should "canonicalize" the content when searching for matching artifacts.  Canonicalization is unique to each artifact type, but typically involves removing any extra whitespace and formatting the content in a consistent manner.  Must be used along with the `artifactType` query parameter.|
|artifactType|query|[ArtifactType](#schemaartifacttype)|false|Indicates the type of artifact represented by the content being used for the search.  This is only needed when using the `canonical` query parameter, so that the server knows how to canonicalize the content prior to searching for matching artifacts.|
|offset|query|integer|false|The number of artifacts to skip before starting to collect the result set.  Defaults to 0.|
|limit|query|integer|false|The number of artifacts to return.  Defaults to 20.|
|order|query|string|false|Sort order, ascending (`asc`) or descending (`desc`).|
|orderby|query|string|false|The field to sort by.  Can be one of:<br><br>* `name`<br>* `createdOn`<br>|
|body|body|[FileContent](#schemafilecontent)|true|The content to search for.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|
|orderby|name|
|orderby|createdOn|

> Example responses

> 200 Response

```json
{
  "artifacts": [
    {
      "createdBy": "user1",
      "createdOn": "2019-03-22T12:51:19Z",
      "description": "Description of the artifact",
      "groupId": "My-Group",
      "id": "Procurement-Invoice",
      "labels": [
        "current",
        "internal"
      ],
      "name": "Artifact Name",
      "state": "ENABLED",
      "type": "AVRO"
    }
  ],
  "count": 0
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="search-for-artifacts-by-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|On a successful response, returns a result set of artifacts - one for each artifact<br>in the registry that matches the criteria.|[ArtifactSearchResults](#schemaartifactsearchresults)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="apicurio-registry-api-v2-admin">Admin</h1>

Application functionality that is only accessible to admin users.  Includes logging, global rules, and export/import of registry data.

## List all configuration properties

<a id="opIdlistConfigProperties"></a>

> Code samples

```bash
curl https://example.com/admin/config/properties \
  -H 'Accept: application/json'
```

`GET /admin/config/properties`

Returns a list of all configuration properties that have been set.  The list is not paged.

This operation may fail for one of the following reasons:

* A server error occurred (HTTP error `500`)


> Example responses

> 200 Response

```json
[
  {
    "description": "When enabled, the registry will allow only the artifact owner (creator) to modify an artifact.",
    "label": "Owner Only Authorization",
    "name": "registry.auth.owner-only-authorization",
    "type": "boolean",
    "value": "true"
  }
]
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="list-all-configuration-properties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|On a successful response, returns a list of configuration properties.|Inline|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<h3 id="list-all-configuration-properties-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ConfigurationProperty](#schemaconfigurationproperty)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get configuration property value

<a id="opIdgetConfigProperty"></a>

> Code samples

```bash
curl https://example.com/admin/config/properties/string \
  -H 'Accept: application/json'
```

`GET /admin/config/properties/{propertyName}`

Returns the value of a single configuration property.

This operation may fail for one of the following reasons:

* Property not found or not configured (HTTP error `404`)
* A server error occurred (HTTP error `500`)


<h3 id="get-configuration-property-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|propertyName|path|string|true|The name of a configuration property.|

> Example responses

> 200 Response

```json
{
  "description": "When enabled, the registry will allow only the artifact owner (creator) to modify an artifact.",
  "label": "Owner Only Authorization",
  "name": "registry.auth.owner-only-authorization",
  "type": "boolean",
  "value": "true"
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="get-configuration-property-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The configuration property value.|[ConfigurationProperty](#schemaconfigurationproperty)|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a configuration property

<a id="opIdupdateConfigProperty"></a>

> Code samples

```bash
curl https://example.com/admin/config/properties/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "value": "true"
  }'
```

`PUT /admin/config/properties/{propertyName}`

Updates the value of a single configuration property.

This operation may fail for one of the following reasons:

* Property not found or not configured (HTTP error `404`)
* A server error occurred (HTTP error `500`)


> Body parameter

```json
{
  "value": "true"
}
```

<h3 id="update-a-configuration-property-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|propertyName|path|string|true|The name of a configuration property.|
|body|body|[UpdateConfigurationProperty](#schemaupdateconfigurationproperty)|true|none|
|» value|body|string|true|none|

> Example responses

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="update-a-configuration-property-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The configuration property was updated.|None|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Reset a configuration property

<a id="opIdresetConfigProperty"></a>

> Code samples

```bash
curl https://example.com/admin/config/properties/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /admin/config/properties/{propertyName}`

Resets the value of a single configuration property.  This will return the property to
its default value (see external documentation for supported properties and their default
values).

This operation may fail for one of the following reasons:

* Property not found or not configured (HTTP error `404`)
* A server error occurred (HTTP error `500`)


<h3 id="reset-a-configuration-property-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|propertyName|path|string|true|The name of a configuration property.|

> Example responses

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="reset-a-configuration-property-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The configuration property was deleted.|None|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Export registry data

<a id="opIdexportData"></a>

> Code samples

```bash
curl https://example.com/admin/export \
  -H 'Accept: application/json'
```

`GET /admin/export`

Exports registry data as a ZIP archive.

<h3 id="export-registry-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forBrowser|query|boolean|false|Indicates if the operation is done for a browser.  If true, the response will be a JSON payload with a property called `href`.  This `href` will be a single-use, naked download link suitable for use by a web browser to download the content.|

> Example responses

> 200 Response

```json
{
  "downloadId": "247-4987490-297845",
  "href": "https://54321.registry.examples.org/apis/registry/v2/downloads/247-4987490-297845"
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="export-registry-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Response when the export is successful.|[DownloadRef](#schemadownloadref)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Import registry data

<a id="opIdimportData"></a>

> Code samples

```bash
curl https://example.com/admin/import \
  -X POST \
  -H 'Content-Type: application/zip' \
  -H 'Accept: application/json' \
  --data-binary '@/path/to/file'
```

`POST /admin/import`

Imports registry data that was previously exported using the `/admin/export` operation.

<h3 id="import-registry-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Registry-Preserve-GlobalId|header|boolean|false|If this header is set to false, global ids of imported data will be ignored and replaced by next id in global id sequence. This allows to import any data even thought the global ids would cause a conflict.|
|X-Registry-Preserve-ContentId|header|boolean|false|If this header is set to false, content ids of imported data will be ignored and replaced by next id in content id sequence. The mapping between content and artifacts will be preserved. This allows to import any data even thought the content ids would cause a conflict.|
|body|body|[FileContent](#schemafilecontent)|true|The ZIP file representing the previously exported registry data.|

> Example responses

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="import-registry-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Indicates that the import was successful.|None|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List logging configurations

<a id="opIdlistLogConfigurations"></a>

> Code samples

```bash
curl https://example.com/admin/loggers \
  -H 'Accept: application/json'
```

`GET /admin/loggers`

List all of the configured logging levels.  These override the default
logging configuration.

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "level": "DEBUG"
  }
]
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="list-logging-configurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of logging configurations.|Inline|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<h3 id="list-logging-configurations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NamedLogConfiguration](#schemanamedlogconfiguration)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a single logger configuration

<a id="opIdgetLogConfiguration"></a>

> Code samples

```bash
curl https://example.com/admin/loggers/string \
  -H 'Accept: application/json'
```

`GET /admin/loggers/{logger}`

Returns the configured logger configuration for the provided logger name, if no logger configuration is persisted it will return the current default log configuration in the system.

<h3 id="get-a-single-logger-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|logger|path|string|true|The name of a single logger.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "level": "DEBUG"
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="get-a-single-logger-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The logger configuration for the named logger.|[NamedLogConfiguration](#schemanamedlogconfiguration)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Set a logger's configuration

<a id="opIdsetLogConfiguration"></a>

> Code samples

```bash
curl https://example.com/admin/loggers/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "level": "DEBUG"
  }'
```

`PUT /admin/loggers/{logger}`

Configures the logger referenced by the provided logger name with the given configuration.

> Body parameter

```json
{
  "level": "DEBUG"
}
```

<h3 id="set-a-loggers-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|logger|path|string|true|The name of a single logger.|
|body|body|[LogConfiguration](#schemalogconfiguration)|true|The new logger configuration.|
|» level|body|[LogLevel](#schemaloglevel)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» level|DEBUG|
|» level|TRACE|
|» level|WARN|
|» level|ERROR|
|» level|SEVERE|
|» level|WARNING|
|» level|INFO|
|» level|CONFIG|
|» level|FINE|
|» level|FINER|
|» level|FINEST|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "level": "DEBUG"
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="set-a-loggers-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new configuration for the given logger.|[NamedLogConfiguration](#schemanamedlogconfiguration)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Removes logger configuration

<a id="opIdremoveLogConfiguration"></a>

> Code samples

```bash
curl https://example.com/admin/loggers/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /admin/loggers/{logger}`

Removes the configured logger configuration (if any) for the given logger.

<h3 id="removes-logger-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|logger|path|string|true|The name of a single logger.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "level": "DEBUG"
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="removes-logger-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The default logger configuration (now that the configuration for this logger has been removed, the <br>default configuration is applied).|[NamedLogConfiguration](#schemanamedlogconfiguration)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List all role mappings

<a id="opIdlistRoleMappings"></a>

> Code samples

```bash
curl https://example.com/admin/roleMappings \
  -H 'Accept: application/json'
```

`GET /admin/roleMappings`

Gets a list of all role mappings configured in the registry (if any).

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)


> Example responses

> 200 Response

```json
[
  {
    "principalId": "svc_account_84874587_123484",
    "principalName": "famartin-svc-account",
    "role": "READ_ONLY"
  }
]
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="list-all-role-mappings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response will return the list of role mappings.|Inline|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<h3 id="list-all-role-mappings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleMapping](#schemarolemapping)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new role mapping

<a id="opIdcreateRoleMapping"></a>

> Code samples

```bash
curl https://example.com/admin/roleMappings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "principalId": "svc_account_84874587_123484",
    "principalName": "famartin-svc-account",
    "role": "READ_ONLY"
  }'
```

`POST /admin/roleMappings`

Creates a new mapping between a user/principal and a role.

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)



> Body parameter

```json
{
  "principalId": "svc_account_84874587_123484",
  "principalName": "famartin-svc-account",
  "role": "READ_ONLY"
}
```

<h3 id="create-a-new-role-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RoleMapping](#schemarolemapping)|true|none|
|» principalId|body|string|true|none|
|» principalName|body|string|false|A friendly name for the principal.|
|» role|body|[RoleType](#schemaroletype)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|READ_ONLY|
|» role|DEVELOPER|
|» role|ADMIN|

> Example responses

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="create-a-new-role-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Returned when the role mapping was successfully created.|None|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Return a single role mapping

<a id="opIdgetRoleMapping"></a>

> Code samples

```bash
curl https://example.com/admin/roleMappings/string \
  -H 'Accept: application/json'
```

`GET /admin/roleMappings/{principalId}`

Gets the details of a single role mapping (by `principalId`).

This operation can fail for the following reasons:

* No role mapping for the `principalId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


<h3 id="return-a-single-role-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|principalId|path|string|true|Unique id of a principal (typically either a user or service account).|

> Example responses

> 200 Response

```json
{
  "principalId": "svc_account_84874587_123484",
  "principalName": "famartin-svc-account",
  "role": "READ_ONLY"
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="return-a-single-role-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|When successful, returns the details of a role mapping.|[RoleMapping](#schemarolemapping)|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a role mapping

<a id="opIdupdateRoleMapping"></a>

> Code samples

```bash
curl https://example.com/admin/roleMappings/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "role": "READ_ONLY"
  }'
```

`PUT /admin/roleMappings/{principalId}`

Updates a single role mapping for one user/principal.

This operation can fail for the following reasons:

* No role mapping for the principalId exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


> Body parameter

```json
{
  "role": "READ_ONLY"
}
```

<h3 id="update-a-role-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|principalId|path|string|true|Unique id of a principal (typically either a user or service account).|
|body|body|[UpdateRole](#schemaupdaterole)|true|none|
|» role|body|[RoleType](#schemaroletype)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|READ_ONLY|
|» role|DEVELOPER|
|» role|ADMIN|

> Example responses

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="update-a-role-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Response when the update is successful.|None|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a role mapping

<a id="opIddeleteRoleMapping"></a>

> Code samples

```bash
curl https://example.com/admin/roleMappings/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /admin/roleMappings/{principalId}`

Deletes a single role mapping, effectively denying access to a user/principal.

This operation can fail for the following reasons:

* No role mapping for the principalId exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


<h3 id="delete-a-role-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|principalId|path|string|true|Unique id of a principal (typically either a user or service account).|

> Example responses

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="delete-a-role-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Response returned when the delete was successful.|None|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="apicurio-registry-api-v2-system">System</h1>

System level functionality, including versioning and status information.

## Get system information

<a id="opIdgetSystemInfo"></a>

> Code samples

```bash
curl https://example.com/system/info \
  -H 'Accept: application/json'
```

`GET /system/info`

This operation retrieves information about the running registry system, such as the version
of the software and when it was built.

> Example responses

> 200 Response

```json
{
  "builtOn": "2021-03-19T12:55:00Z",
  "description": "The Apicurio Registry application.",
  "name": "Apicurio Registry (SQL)",
  "version": "2.0.0.Final"
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="get-system-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|On success, returns the system information.|[SystemInfo](#schemasysteminfo)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get resource limits information

<a id="opIdgetResourceLimits"></a>

> Code samples

```bash
curl https://example.com/system/limits \
  -H 'Accept: application/json'
```

`GET /system/limits`

This operation retrieves the list of limitations on used resources, that are applied on the current instance of Registry.

> Example responses

> 200 Response

```json
{
  "maxArtifactDescriptionLengthChars": -1,
  "maxArtifactLabelsCount": -1,
  "maxArtifactNameLengthChars": -1,
  "maxArtifactPropertiesCount": -1,
  "maxArtifactsCount": -1,
  "maxLabelSizeBytes": -1,
  "maxPropertyKeySizeBytes": -1,
  "maxPropertyValueSizeBytes": -1,
  "maxRequestsPerSecondCount": -1,
  "maxSchemaSizeBytes": -1,
  "maxTotalSchemasCount": -1,
  "maxVersionsPerArtifactCount": -1
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="get-resource-limits-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|On success, returns resource limits|[Limits](#schemalimits)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="apicurio-registry-api-v2-users">Users</h1>

Operations related to users.

## Get current user

<a id="opIdgetCurrentUserInfo"></a>

> Code samples

```bash
curl https://example.com/users/me \
  -H 'Accept: application/json'
```

`GET /users/me`

Returns information about the currently authenticated user.

> Example responses

> 200 Response

```json
{
  "admin": true,
  "developer": false,
  "displayName": "Diana Prince",
  "username": "dprince",
  "viewer": false
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="get-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Response when the endpoint is successfully invoked.|[UserInfo](#schemauserinfo)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="apicurio-registry-api-v2-groups">Groups</h1>

Registry artifacts can be collected together using groups. This section includes all of the primary operations related to groups.

## List groups

<a id="opIdlistGroups"></a>

> Code samples

```bash
curl https://example.com/groups \
  -H 'Accept: application/json'
```

`GET /groups`

Returns a list of all groups.  This list is paged.

<h3 id="list-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The number of groups to return.  Defaults to 20.|
|offset|query|integer|false|The number of groups to skip before starting the result set.  Defaults to 0.|
|order|query|[SortOrder](#schemasortorder)|false|Sort order, ascending (`asc`) or descending (`desc`).|
|orderby|query|[SortBy](#schemasortby)|false|The field to sort by.  Can be one of:<br><br>* `name`<br>* `createdOn`<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|
|orderby|name|
|orderby|createdOn|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "groups": [
    {
      "createdBy": "user1",
      "createdOn": "2019-03-22T12:51:19Z",
      "description": "Description of the group",
      "id": "My-Group",
      "modifiedBy": "user1",
      "modifiedOn": "2019-03-22T12:51:19Z",
      "name": "Group Name"
    }
  ]
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="list-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|On a successful response, returns a bounded set of groups.|[GroupSearchResults](#schemagroupsearchresults)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new group

<a id="opIdcreateGroup"></a>

> Code samples

```bash
curl https://example.com/groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "The description of the artifact.",
    "id": "group-identifier",
    "properties": {
      "custom-1": "foo",
      "custom-2": "bar"
    }
  }'
```

`POST /groups`

Creates a new group.

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)
* The group already exist (HTTP error `409`)


> Body parameter

```json
{
  "description": "The description of the artifact.",
  "id": "group-identifier",
  "properties": {
    "custom-1": "foo",
    "custom-2": "bar"
  }
}
```

<h3 id="create-a-new-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateGroupMetaData](#schemacreategroupmetadata)|true|none|
|» description|body|string|false|none|
|» id|body|string|true|none|
|» properties|body|[Properties](#schemaproperties)|false|none|

> Example responses

> 200 Response

```json
{
  "artifactsType": "AVRO",
  "createdBy": "user1",
  "createdOn": "2019-03-22T12:51:19Z",
  "description": "Description of the group",
  "id": "group-identifier",
  "modifiedBy": "user2",
  "modifiedOn": "2019-07-19T15:09:00Z",
  "properties": {
    "custom-1": "foo",
    "custom-2": "bar"
  }
}
```

> 409 Response

```json
{
  "error_code": 409,
  "message": "The artifact content was invalid."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="create-a-new-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The group has been successfully created.|[GroupMetaData](#schemagroupmetadata)|
|409|Conflict|Common response used when an input conflicts with existing data.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a group by the specified ID.

<a id="opIdgetGroupById"></a>

> Code samples

```bash
curl https://example.com/groups/%22my-group%22 \
  -H 'Accept: application/json'
```

`GET /groups/{groupId}`

Returns a group using the specified id.

This operation can fail for the following reasons:

* No group exists with the specified ID (HTTP error `404`)
* A server error occurred (HTTP error `500`)

<h3 id="get-a-group-by-the-specified-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|[GroupId](#schemagroupid)|true|The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.|

> Example responses

> 200 Response

```json
{
  "artifactsType": "AVRO",
  "createdBy": "user1",
  "createdOn": "2019-03-22T12:51:19Z",
  "description": "Description of the group",
  "id": "group-identifier",
  "modifiedBy": "user2",
  "modifiedOn": "2019-07-19T15:09:00Z",
  "properties": {
    "custom-1": "foo",
    "custom-2": "bar"
  }
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="get-a-group-by-the-specified-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The group's metadata.|[GroupMetaData](#schemagroupmetadata)|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a group by the specified ID.

<a id="opIddeleteGroupById"></a>

> Code samples

```bash
curl https://example.com/groups/%22my-group%22 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /groups/{groupId}`

Deletes a group by identifier.

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)
* The group does not exist (HTTP error `404`)


<h3 id="delete-a-group-by-the-specified-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|[GroupId](#schemagroupid)|true|The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.|

> Example responses

> 404 Response

```json
{
  "error_code": 404,
  "message": "No artifact with id 'Topic-1/Inbound' could be found."
}
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="delete-a-group-by-the-specified-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Empty content indicates a successful deletion.|None|
|404|Not Found|Common response for all operations that can return a `404` error.|[Error](#schemaerror)|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="apicurio-registry-api-v2-artifact-type">Artifact Type</h1>

## List artifact types

<a id="opIdlistArtifactTypes"></a>

> Code samples

```bash
curl https://example.com/admin/artifactTypes \
  -H 'Accept: application/json'
```

`GET /admin/artifactTypes`

Gets a list of all the configured artifact types.

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)


> Example responses

> 200 Response

```json
[
  {
    "name": "AVRO"
  }
]
```

> 500 Response

```json
{
  "error_code": 500,
  "message": "Lost connection to the database."
}
```

<h3 id="list-artifact-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of available artifact types.|Inline|
|500|Internal Server Error|Common response for all operations that can fail with an unexpected server error.|[Error](#schemaerror)|

<h3 id="list-artifact-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ArtifactTypeInfo](#schemaartifacttypeinfo)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ArtifactDescription">ArtifactDescription</h2>
<!-- backwards compatibility -->
<a id="schemaartifactdescription"></a>
<a id="schema_ArtifactDescription"></a>
<a id="tocSartifactdescription"></a>
<a id="tocsartifactdescription"></a>

```json
"\"Artifact description\""
```

Description of the artifact.

<h2 id="tocS_ArtifactId">ArtifactId</h2>
<!-- backwards compatibility -->
<a id="schemaartifactid"></a>
<a id="schema_ArtifactId"></a>
<a id="tocSartifactid"></a>
<a id="tocsartifactid"></a>

```json
"\"example-artifact\""
```

The ID of a single artifact.

<h2 id="tocS_ArtifactMetaData">ArtifactMetaData</h2>
<!-- backwards compatibility -->
<a id="schemaartifactmetadata"></a>
<a id="schema_ArtifactMetaData"></a>
<a id="tocSartifactmetadata"></a>
<a id="tocsartifactmetadata"></a>

```json
{
  "contentId": 82736,
  "createdBy": "user1",
  "createdOn": "2019-03-22T12:51:19Z",
  "description": "Description of the artifact",
  "globalId": 12984719247,
  "groupId": "My-Group",
  "id": "Procurement-Invoice",
  "labels": [
    "label-1",
    "label-2"
  ],
  "modifiedBy": "user2",
  "modifiedOn": "2019-07-19T15:09:00Z",
  "name": "Artifact Name",
  "properties": {
    "custom-1": "foo",
    "custom-2": "bar"
  },
  "references": [
    {
      "artifactId": "13842090-2ce3-11ec-8d3d-0242ac130003",
      "groupId": "mygroup",
      "name": "foo.bar.Open",
      "version": 2
    }
  ],
  "type": "AVRO",
  "version": 18
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentId|integer(int64)|true|none|none|
|createdBy|string|true|none|none|
|createdOn|string(date-time)|true|none|none|
|description|string|false|none|none|
|globalId|integer(int64)|true|none|none|
|groupId|[GroupId](#schemagroupid)|false|none|none|
|id|[ArtifactId](#schemaartifactid)|true|none|none|
|labels|[string]|false|none|none|
|modifiedBy|string|true|none|none|
|modifiedOn|string(date-time)|true|none|none|
|name|string|false|none|none|
|properties|[Properties](#schemaproperties)|false|none|none|
|references|[[ArtifactReference](#schemaartifactreference)]|false|none|none|
|state|[ArtifactState](#schemaartifactstate)|true|none|none|
|type|[ArtifactType](#schemaartifacttype)|true|none|none|
|version|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|ENABLED|
|state|DISABLED|
|state|DEPRECATED|

<h2 id="tocS_ArtifactName">ArtifactName</h2>
<!-- backwards compatibility -->
<a id="schemaartifactname"></a>
<a id="schema_ArtifactName"></a>
<a id="tocSartifactname"></a>
<a id="tocsartifactname"></a>

```json
"\"Artifact name\""
```

Name of the artifact.

<h2 id="tocS_ArtifactOwner">ArtifactOwner</h2>
<!-- backwards compatibility -->
<a id="schemaartifactowner"></a>
<a id="schema_ArtifactOwner"></a>
<a id="tocSartifactowner"></a>
<a id="tocsartifactowner"></a>

```json
{
  "owner": "bwayne"
}
```

Describes the ownership of an artifact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|owner|string|false|none|none|

<h2 id="tocS_ArtifactReference">ArtifactReference</h2>
<!-- backwards compatibility -->
<a id="schemaartifactreference"></a>
<a id="schema_ArtifactReference"></a>
<a id="tocSartifactreference"></a>
<a id="tocsartifactreference"></a>

```json
{
  "artifactId": "13842090-2ce3-11ec-8d3d-0242ac130003",
  "groupId": "mygroup",
  "name": "foo.bar.Open",
  "version": "2"
}
```

A reference to a different artifact. Typically used with artifact types that can have dependencies like Protobuf.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artifactId|string|true|none|none|
|groupId|string|true|none|none|
|name|string|true|none|none|
|version|string|false|none|none|

<h2 id="tocS_ArtifactSearchResults">ArtifactSearchResults</h2>
<!-- backwards compatibility -->
<a id="schemaartifactsearchresults"></a>
<a id="schema_ArtifactSearchResults"></a>
<a id="tocSartifactsearchresults"></a>
<a id="tocsartifactsearchresults"></a>

```json
{
  "artifacts": [
    {
      "createdBy": "user1",
      "createdOn": "2019-03-22T12:51:19Z",
      "description": "Description of the artifact",
      "groupId": "My-Group",
      "id": "Procurement-Invoice",
      "labels": [
        "current",
        "internal"
      ],
      "name": "Artifact Name",
      "state": "ENABLED",
      "type": "AVRO"
    }
  ],
  "count": 0
}
```

Describes the response received when searching for artifacts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artifacts|[[SearchedArtifact](#schemasearchedartifact)]|true|none|The artifacts returned in the result set.|
|count|integer|true|none|The total number of artifacts that matched the query that produced the result set (may be <br>more than the number of artifacts in the result set).|

<h2 id="tocS_ArtifactState">ArtifactState</h2>
<!-- backwards compatibility -->
<a id="schemaartifactstate"></a>
<a id="schema_ArtifactState"></a>
<a id="tocSartifactstate"></a>
<a id="tocsartifactstate"></a>

```json
"ENABLED"
```

Describes the state of an artifact or artifact version.  The following states
are possible:

* ENABLED
* DISABLED
* DEPRECATED

<h2 id="tocS_ArtifactType">ArtifactType</h2>
<!-- backwards compatibility -->
<a id="schemaartifacttype"></a>
<a id="schema_ArtifactType"></a>
<a id="tocSartifacttype"></a>
<a id="tocsartifacttype"></a>

```json
"AVRO"
```

<h2 id="tocS_ArtifactTypeInfo">ArtifactTypeInfo</h2>
<!-- backwards compatibility -->
<a id="schemaartifacttypeinfo"></a>
<a id="schema_ArtifactTypeInfo"></a>
<a id="tocSartifacttypeinfo"></a>
<a id="tocsartifacttypeinfo"></a>

```json
{
  "name": "AVRO"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|

<h2 id="tocS_ConfigurationProperty">ConfigurationProperty</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationproperty"></a>
<a id="schema_ConfigurationProperty"></a>
<a id="tocSconfigurationproperty"></a>
<a id="tocsconfigurationproperty"></a>

```json
{
  "description": "When enabled, the registry will allow only the artifact owner (creator) to modify an artifact.",
  "label": "Owner Only Authorization",
  "name": "registry.auth.owner-only-authorization",
  "type": "boolean",
  "value": "true"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|label|string|true|none|none|
|name|string|true|none|none|
|type|string|true|none|none|
|value|string|true|none|none|

<h2 id="tocS_ContentCreateRequest">ContentCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacontentcreaterequest"></a>
<a id="schema_ContentCreateRequest"></a>
<a id="tocScontentcreaterequest"></a>
<a id="tocscontentcreaterequest"></a>

```json
{
  "content": "",
  "references": [
    {
      "artifactId": "13842090-2ce3-11ec-8d3d-0242ac130003",
      "groupId": "mygroup",
      "name": "foo.bar.Open",
      "version": "2"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|true|none|Raw content of the artifact or a valid (and accessible) URL where the content can be found.|
|references|[[ArtifactReference](#schemaartifactreference)]|true|none|Collection of references to other artifacts.|

<h2 id="tocS_CreateGroupMetaData">CreateGroupMetaData</h2>
<!-- backwards compatibility -->
<a id="schemacreategroupmetadata"></a>
<a id="schema_CreateGroupMetaData"></a>
<a id="tocScreategroupmetadata"></a>
<a id="tocscreategroupmetadata"></a>

```json
{
  "description": "The description of the artifact.",
  "id": "group-identifier",
  "properties": {
    "custom-1": "foo",
    "custom-2": "bar"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|id|string|true|none|none|
|properties|[Properties](#schemaproperties)|false|none|none|

<h2 id="tocS_DownloadRef">DownloadRef</h2>
<!-- backwards compatibility -->
<a id="schemadownloadref"></a>
<a id="schema_DownloadRef"></a>
<a id="tocSdownloadref"></a>
<a id="tocsdownloadref"></a>

```json
{
  "downloadId": "247-4987490-297845",
  "href": "https://54321.registry.examples.org/apis/registry/v2/downloads/247-4987490-297845"
}
```

Models a download "link".  Useful for browser use-cases.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|downloadId|string|true|none|none|
|href|string|false|none|none|

<h2 id="tocS_EditableMetaData">EditableMetaData</h2>
<!-- backwards compatibility -->
<a id="schemaeditablemetadata"></a>
<a id="schema_EditableMetaData"></a>
<a id="tocSeditablemetadata"></a>
<a id="tocseditablemetadata"></a>

```json
{
  "description": "The description of the artifact.",
  "labels": [
    "regional",
    "global"
  ],
  "name": "Artifact Name",
  "properties": {
    "custom-1": "foo",
    "custom-2": "bar"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|labels|[string]|false|none|none|
|name|string|false|none|none|
|properties|[Properties](#schemaproperties)|false|none|none|

<h2 id="tocS_EncodedArtifactDescription">EncodedArtifactDescription</h2>
<!-- backwards compatibility -->
<a id="schemaencodedartifactdescription"></a>
<a id="schema_EncodedArtifactDescription"></a>
<a id="tocSencodedartifactdescription"></a>
<a id="tocsencodedartifactdescription"></a>

```json
"\"QXJ0aWZhY3QgZGVzY3JpcHRpb24K\""
```

Base64 encoded description of the artifact.

<h2 id="tocS_EncodedArtifactName">EncodedArtifactName</h2>
<!-- backwards compatibility -->
<a id="schemaencodedartifactname"></a>
<a id="schema_EncodedArtifactName"></a>
<a id="tocSencodedartifactname"></a>
<a id="tocsencodedartifactname"></a>

```json
"\"QXJ0aWZhY3QgbmFtZQo=\""
```

Base64 encoded name of the artifact.

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "error_code": 500,
  "message": "An error occurred somewhere."
}
```

All error responses, whether `4xx` or `5xx` will include one of these as the response
body.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Full details about the error.  This might contain a server stack trace, for example.|
|error_code|integer(int32)|false|none|The server-side error code.|
|message|string|false|none|The short error message.|
|name|string|false|none|The error name - typically the classname of the exception thrown by the server.|

<h2 id="tocS_FileContent">FileContent</h2>
<!-- backwards compatibility -->
<a id="schemafilecontent"></a>
<a id="schema_FileContent"></a>
<a id="tocSfilecontent"></a>
<a id="tocsfilecontent"></a>

```json
"string"
```

<h2 id="tocS_GroupId">GroupId</h2>
<!-- backwards compatibility -->
<a id="schemagroupid"></a>
<a id="schema_GroupId"></a>
<a id="tocSgroupid"></a>
<a id="tocsgroupid"></a>

```json
"\"my-group\""
```

An ID of a single artifact group.

<h2 id="tocS_GroupMetaData">GroupMetaData</h2>
<!-- backwards compatibility -->
<a id="schemagroupmetadata"></a>
<a id="schema_GroupMetaData"></a>
<a id="tocSgroupmetadata"></a>
<a id="tocsgroupmetadata"></a>

```json
{
  "artifactsType": "AVRO",
  "createdBy": "user1",
  "createdOn": "2019-03-22T12:51:19Z",
  "description": "Description of the group",
  "id": "group-identifier",
  "modifiedBy": "user2",
  "modifiedOn": "2019-07-19T15:09:00Z",
  "properties": {
    "custom-1": "foo",
    "custom-2": "bar"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdBy|string|true|none|none|
|createdOn|string(date-time)|true|none|none|
|description|string|true|none|none|
|id|[GroupId](#schemagroupid)|true|none|none|
|modifiedBy|string|true|none|none|
|modifiedOn|string(date-time)|true|none|none|
|properties|[Properties](#schemaproperties)|true|none|none|

<h2 id="tocS_GroupSearchResults">GroupSearchResults</h2>
<!-- backwards compatibility -->
<a id="schemagroupsearchresults"></a>
<a id="schema_GroupSearchResults"></a>
<a id="tocSgroupsearchresults"></a>
<a id="tocsgroupsearchresults"></a>

```json
{
  "count": 0,
  "groups": [
    {
      "createdBy": "user1",
      "createdOn": "2019-03-22T12:51:19Z",
      "description": "Description of the group",
      "id": "My-Group",
      "modifiedBy": "user1",
      "modifiedOn": "2019-03-22T12:51:19Z",
      "name": "Group Name"
    }
  ]
}
```

Describes the response received when searching for groups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|The total number of groups that matched the query that produced the result set (may be <br>more than the number of groups in the result set).|
|groups|[[SearchedGroup](#schemasearchedgroup)]|true|none|The groups returned in the result set.|

<h2 id="tocS_IfExists">IfExists</h2>
<!-- backwards compatibility -->
<a id="schemaifexists"></a>
<a id="schema_IfExists"></a>
<a id="tocSifexists"></a>
<a id="tocsifexists"></a>

```json
"FAIL"
```

<h2 id="tocS_Limits">Limits</h2>
<!-- backwards compatibility -->
<a id="schemalimits"></a>
<a id="schema_Limits"></a>
<a id="tocSlimits"></a>
<a id="tocslimits"></a>

```json
{
  "maxArtifactDescriptionLengthChars": -1,
  "maxArtifactLabelsCount": -1,
  "maxArtifactNameLengthChars": -1,
  "maxArtifactPropertiesCount": -1,
  "maxArtifactsCount": -1,
  "maxLabelSizeBytes": -1,
  "maxPropertyKeySizeBytes": -1,
  "maxPropertyValueSizeBytes": -1,
  "maxRequestsPerSecondCount": -1,
  "maxSchemaSizeBytes": -1,
  "maxTotalSchemasCount": -1,
  "maxVersionsPerArtifactCount": -1
}
```

List of limitations on used resources, that are applied on the current instance of Registry.
Keys represent the resource type and are suffixed by the corresponding unit.
Values are integers. Only non-negative values are allowed, with the exception of -1, which means that the limit is not applied.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxArtifactDescriptionLengthChars|integer(int64)|false|none|none|
|maxArtifactLabelsCount|integer(int64)|false|none|none|
|maxArtifactNameLengthChars|integer(int64)|false|none|none|
|maxArtifactPropertiesCount|integer(int64)|false|none|none|
|maxArtifactsCount|integer(int64)|false|none|none|
|maxLabelSizeBytes|integer(int64)|false|none|none|
|maxPropertyKeySizeBytes|integer(int64)|false|none|none|
|maxPropertyValueSizeBytes|integer(int64)|false|none|none|
|maxRequestsPerSecondCount|integer(int64)|false|none|none|
|maxSchemaSizeBytes|integer(int64)|false|none|none|
|maxTotalSchemasCount|integer(int64)|false|none|none|
|maxVersionsPerArtifactCount|integer(int64)|false|none|none|

<h2 id="tocS_LogConfiguration">LogConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemalogconfiguration"></a>
<a id="schema_LogConfiguration"></a>
<a id="tocSlogconfiguration"></a>
<a id="tocslogconfiguration"></a>

```json
{
  "level": "DEBUG"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|level|[LogLevel](#schemaloglevel)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|level|DEBUG|
|level|TRACE|
|level|WARN|
|level|ERROR|
|level|SEVERE|
|level|WARNING|
|level|INFO|
|level|CONFIG|
|level|FINE|
|level|FINER|
|level|FINEST|

<h2 id="tocS_LogLevel">LogLevel</h2>
<!-- backwards compatibility -->
<a id="schemaloglevel"></a>
<a id="schema_LogLevel"></a>
<a id="tocSloglevel"></a>
<a id="tocsloglevel"></a>

```json
"DEBUG"
```

<h2 id="tocS_NamedLogConfiguration">NamedLogConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemanamedlogconfiguration"></a>
<a id="schema_NamedLogConfiguration"></a>
<a id="tocSnamedlogconfiguration"></a>
<a id="tocsnamedlogconfiguration"></a>

```json
{
  "name": "string",
  "level": "DEBUG"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|level|[LogLevel](#schemaloglevel)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|level|DEBUG|
|level|TRACE|
|level|WARN|
|level|ERROR|
|level|SEVERE|
|level|WARNING|
|level|INFO|
|level|CONFIG|
|level|FINE|
|level|FINER|
|level|FINEST|

<h2 id="tocS_Properties">Properties</h2>
<!-- backwards compatibility -->
<a id="schemaproperties"></a>
<a id="schema_Properties"></a>
<a id="tocSproperties"></a>
<a id="tocsproperties"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

User-defined name-value pairs. Name and value must be strings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<h2 id="tocS_RoleMapping">RoleMapping</h2>
<!-- backwards compatibility -->
<a id="schemarolemapping"></a>
<a id="schema_RoleMapping"></a>
<a id="tocSrolemapping"></a>
<a id="tocsrolemapping"></a>

```json
{
  "principalId": "svc_account_84874587_123484",
  "principalName": "famartin-svc-account",
  "role": "READ_ONLY"
}
```

The mapping between a user/principal and their role.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|principalId|string|true|none|none|
|principalName|string|false|none|A friendly name for the principal.|
|role|[RoleType](#schemaroletype)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|READ_ONLY|
|role|DEVELOPER|
|role|ADMIN|

<h2 id="tocS_RoleType">RoleType</h2>
<!-- backwards compatibility -->
<a id="schemaroletype"></a>
<a id="schema_RoleType"></a>
<a id="tocSroletype"></a>
<a id="tocsroletype"></a>

```json
"READ_ONLY"
```

<h2 id="tocS_Rule">Rule</h2>
<!-- backwards compatibility -->
<a id="schemarule"></a>
<a id="schema_Rule"></a>
<a id="tocSrule"></a>
<a id="tocsrule"></a>

```json
{
  "config": "FULL",
  "type": "VALIDITY"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|string|true|none|none|
|type|[RuleType](#schemaruletype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|VALIDITY|
|type|COMPATIBILITY|

<h2 id="tocS_RuleType">RuleType</h2>
<!-- backwards compatibility -->
<a id="schemaruletype"></a>
<a id="schema_RuleType"></a>
<a id="tocSruletype"></a>
<a id="tocsruletype"></a>

```json
"VALIDITY"
```

<h2 id="tocS_RuleViolationCause">RuleViolationCause</h2>
<!-- backwards compatibility -->
<a id="schemaruleviolationcause"></a>
<a id="schema_RuleViolationCause"></a>
<a id="tocSruleviolationcause"></a>
<a id="tocsruleviolationcause"></a>

```json
{
  "context": "/info/externalDocs[url]",
  "description": "External documentation URL is not valid (it must be formatted as a URL)."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|string|false|none|none|
|description|string|false|none|none|

<h2 id="tocS_RuleViolationError">RuleViolationError</h2>
<!-- backwards compatibility -->
<a id="schemaruleviolationerror"></a>
<a id="schema_RuleViolationError"></a>
<a id="tocSruleviolationerror"></a>
<a id="tocsruleviolationerror"></a>

```json
{
  "causes": [
    {
      "context": "/info[title]",
      "description": "API is missing a title"
    },
    {
      "context": "/paths[/invoices]/put[operationId]",
      "description": "Operation IDs must be unique"
    }
  ],
  "error_code": 409,
  "message": "Artifact failed validation"
}
```

All error responses, whether `4xx` or `5xx` will include one of these as the response
body.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|causes|[[RuleViolationCause](#schemaruleviolationcause)]|true|none|List of rule violation causes.|
|detail|string|false|none|Full details about the error.  This might contain a server stack trace, for example.|
|error_code|integer(int32)|false|none|The server-side error code.|
|message|string|false|none|The short error message.|
|name|string|false|none|The error name - typically the classname of the exception thrown by the server.|

<h2 id="tocS_SearchedArtifact">SearchedArtifact</h2>
<!-- backwards compatibility -->
<a id="schemasearchedartifact"></a>
<a id="schema_SearchedArtifact"></a>
<a id="tocSsearchedartifact"></a>
<a id="tocssearchedartifact"></a>

```json
{
  "createdBy": "user1",
  "createdOn": "2019-03-22T12:51:19Z",
  "description": "Description of the artifact",
  "groupId": "My-Group",
  "id": "Procurement-Invoice",
  "labels": [
    "current",
    "internal"
  ],
  "name": "Artifact Name",
  "state": "ENABLED",
  "type": "AVRO"
}
```

Models a single artifact from the result set returned when searching for artifacts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdBy|string|true|none|none|
|createdOn|string(date-time)|true|none|none|
|description|string|false|none|none|
|groupId|[GroupId](#schemagroupid)|false|none|none|
|id|[ArtifactId](#schemaartifactid)|true|none|none|
|labels|[string]|false|none|none|
|modifiedBy|string|false|none|none|
|modifiedOn|string(date-time)|false|none|none|
|name|string|false|none|none|
|state|[ArtifactState](#schemaartifactstate)|true|none|none|
|type|[ArtifactType](#schemaartifacttype)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|ENABLED|
|state|DISABLED|
|state|DEPRECATED|

<h2 id="tocS_SearchedGroup">SearchedGroup</h2>
<!-- backwards compatibility -->
<a id="schemasearchedgroup"></a>
<a id="schema_SearchedGroup"></a>
<a id="tocSsearchedgroup"></a>
<a id="tocssearchedgroup"></a>

```json
{
  "createdBy": "user1",
  "createdOn": "2019-03-22T12:51:19Z",
  "description": "Description of the group",
  "id": "My-Group",
  "modifiedBy": "user1",
  "modifiedOn": "2019-03-22T12:51:19Z",
  "name": "Group Name"
}
```

Models a single group from the result set returned when searching for groups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdBy|string|true|none|none|
|createdOn|string(date-time)|true|none|none|
|description|string|true|none|none|
|id|[GroupId](#schemagroupid)|true|none|none|
|modifiedBy|string|true|none|none|
|modifiedOn|string(date-time)|true|none|none|

<h2 id="tocS_SearchedVersion">SearchedVersion</h2>
<!-- backwards compatibility -->
<a id="schemasearchedversion"></a>
<a id="schema_SearchedVersion"></a>
<a id="tocSsearchedversion"></a>
<a id="tocssearchedversion"></a>

```json
{
  "contentId": 62,
  "createdBy": "some text",
  "createdOn": "2018-02-10T09:30Z",
  "description": "Description of the artifact version",
  "globalId": 37,
  "labels": [
    "current",
    "internal"
  ],
  "name": "Artifact Version Name",
  "properties": {},
  "references": {},
  "state": "ENABLED",
  "type": "AVRO",
  "version": 85
}
```

Models a single artifact from the result set returned when searching for artifacts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentId|integer(int64)|true|none|none|
|createdBy|string|true|none|none|
|createdOn|string(date-time)|true|none|none|
|description|string|false|none|none|
|globalId|integer(int64)|true|none|none|
|labels|[string]|false|none|none|
|name|string|false|none|none|
|properties|[Properties](#schemaproperties)|false|none|none|
|references|[[ArtifactReference](#schemaartifactreference)]|true|none|none|
|state|[ArtifactState](#schemaartifactstate)|true|none|none|
|type|[ArtifactType](#schemaartifacttype)|true|none|none|
|version|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|ENABLED|
|state|DISABLED|
|state|DEPRECATED|

<h2 id="tocS_SortBy">SortBy</h2>
<!-- backwards compatibility -->
<a id="schemasortby"></a>
<a id="schema_SortBy"></a>
<a id="tocSsortby"></a>
<a id="tocssortby"></a>

```json
"name"
```

<h2 id="tocS_SortOrder">SortOrder</h2>
<!-- backwards compatibility -->
<a id="schemasortorder"></a>
<a id="schema_SortOrder"></a>
<a id="tocSsortorder"></a>
<a id="tocssortorder"></a>

```json
"asc"
```

<h2 id="tocS_SystemInfo">SystemInfo</h2>
<!-- backwards compatibility -->
<a id="schemasysteminfo"></a>
<a id="schema_SystemInfo"></a>
<a id="tocSsysteminfo"></a>
<a id="tocssysteminfo"></a>

```json
{
  "builtOn": "2021-03-19T12:55:00Z",
  "description": "The Apicurio Registry application.",
  "name": "Apicurio Registry (SQL)",
  "version": "2.0.0.Final"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|builtOn|string(date-time)|false|none|none|
|description|string|false|none|none|
|name|string|false|none|none|
|version|string|false|none|none|

<h2 id="tocS_UpdateConfigurationProperty">UpdateConfigurationProperty</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconfigurationproperty"></a>
<a id="schema_UpdateConfigurationProperty"></a>
<a id="tocSupdateconfigurationproperty"></a>
<a id="tocsupdateconfigurationproperty"></a>

```json
{
  "value": "true"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|none|

<h2 id="tocS_UpdateRole">UpdateRole</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterole"></a>
<a id="schema_UpdateRole"></a>
<a id="tocSupdaterole"></a>
<a id="tocsupdaterole"></a>

```json
{
  "role": "READ_ONLY"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|[RoleType](#schemaroletype)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|READ_ONLY|
|role|DEVELOPER|
|role|ADMIN|

<h2 id="tocS_UpdateState">UpdateState</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestate"></a>
<a id="schema_UpdateState"></a>
<a id="tocSupdatestate"></a>
<a id="tocsupdatestate"></a>

```json
{
  "state": "DISABLED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|[ArtifactState](#schemaartifactstate)|true|none|Describes the state of an artifact or artifact version.  The following states<br>are possible:<br><br>* ENABLED<br>* DISABLED<br>* DEPRECATED<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|state|ENABLED|
|state|DISABLED|
|state|DEPRECATED|

<h2 id="tocS_UserInfo">UserInfo</h2>
<!-- backwards compatibility -->
<a id="schemauserinfo"></a>
<a id="schema_UserInfo"></a>
<a id="tocSuserinfo"></a>
<a id="tocsuserinfo"></a>

```json
{
  "admin": true,
  "developer": false,
  "displayName": "Diana Prince",
  "username": "dprince",
  "viewer": false
}
```

Information about a single user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|admin|boolean|false|none|none|
|developer|boolean|false|none|none|
|displayName|string|false|none|none|
|username|string|false|none|none|
|viewer|boolean|false|none|none|

<h2 id="tocS_Version">Version</h2>
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_Version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

```json
"\"3.1.6\""
```

A single version of an artifact.  Can be provided by the client when creating a new version,
or it can be server-generated.  The value can be any string unique to the artifact, but it is
recommended to use a simple integer or a semver value.

<h2 id="tocS_VersionMetaData">VersionMetaData</h2>
<!-- backwards compatibility -->
<a id="schemaversionmetadata"></a>
<a id="schema_VersionMetaData"></a>
<a id="tocSversionmetadata"></a>
<a id="tocsversionmetadata"></a>

```json
{
  "contentId": 12347,
  "createdBy": "user1",
  "createdOn": "2019-05-17T12:00:00Z",
  "description": "The description of the artifact",
  "globalId": 183282932983,
  "groupId": "My-Group",
  "id": "my-artifact-id",
  "labels": [
    "label-1",
    "label-2"
  ],
  "name": "Artifact Name",
  "properties": {
    "custom-1": "foo",
    "custom-2": "bar"
  },
  "references": [
    {
      "artifactId": "13842090-2ce3-11ec-8d3d-0242ac130003",
      "groupId": "mygroup",
      "name": "foo.bar.Open",
      "version": 2
    }
  ],
  "type": "PROTOBUF",
  "version": 1221432
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentId|integer(int64)|true|none|none|
|createdBy|string|true|none|none|
|createdOn|string(date-time)|true|none|none|
|description|string|false|none|none|
|globalId|integer(int64)|true|none|none|
|groupId|[GroupId](#schemagroupid)|false|none|none|
|id|[ArtifactId](#schemaartifactid)|true|none|none|
|labels|[string]|false|none|none|
|name|string|false|none|none|
|properties|[Properties](#schemaproperties)|false|none|none|
|state|[ArtifactState](#schemaartifactstate)|false|none|none|
|type|[ArtifactType](#schemaartifacttype)|true|none|none|
|version|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|ENABLED|
|state|DISABLED|
|state|DEPRECATED|

<h2 id="tocS_VersionSearchResults">VersionSearchResults</h2>
<!-- backwards compatibility -->
<a id="schemaversionsearchresults"></a>
<a id="schema_VersionSearchResults"></a>
<a id="tocSversionsearchresults"></a>
<a id="tocsversionsearchresults"></a>

```json
{
  "count": 0,
  "versions": [
    {
      "contentId": 62,
      "createdBy": "some text",
      "createdOn": "2018-02-10T09:30Z",
      "description": "Description of the artifact version",
      "globalId": 37,
      "labels": [
        "current",
        "internal"
      ],
      "name": "Artifact Version Name",
      "properties": {},
      "references": {},
      "state": "ENABLED",
      "type": "AVRO",
      "version": 85
    }
  ]
}
```

Describes the response received when searching for artifacts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|The total number of versions that matched the query (may be more than the number of versions<br>returned in the result set).|
|versions|[[SearchedVersion](#schemasearchedversion)]|true|none|The collection of artifact versions returned in the result set.|
