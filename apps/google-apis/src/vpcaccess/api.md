<h1 id="serverless-vpc-access-api">Serverless VPC Access API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API for managing VPC access connectors.

Base URLs:

* <a href="https://vpcaccess.googleapis.com/">https://vpcaccess.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/vpc/docs/configure-serverless-vpc-access">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

<h1 id="serverless-vpc-access-api-projects">projects</h1>

## vpcaccess.projects.locations.operations.get

<a id="opIdvpcaccess.projects.locations.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="vpcaccessprojectslocationsoperationsget-parameters">Parameters</h3>

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

<h3 id="vpcaccessprojectslocationsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vpcaccess.projects.locations.connectors.delete

<a id="opIdvpcaccess.projects.locations.connectors.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes a Serverless VPC Access connector. Returns NOT_FOUND if the resource does not exist.

<h3 id="vpcaccessprojectslocationsconnectorsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of a Serverless VPC Access connector to delete.|
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

<h3 id="vpcaccessprojectslocationsconnectorsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vpcaccess.projects.locations.connectors.patch

<a id="opIdvpcaccess.projects.locations.connectors.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ipCidrRange": "string",
    "machineType": "string",
    "maxInstances": 0,
    "maxThroughput": 0,
    "minInstances": 0,
    "minThroughput": 0,
    "name": "string",
    "network": "string",
    "subnet": {
      "name": "string",
      "projectId": "string"
    }
  }'
```

`PATCH /v1/{name}`

Updates a Serverless VPC Access connector, returns an operation.

> Body parameter

```json
{
  "ipCidrRange": "string",
  "machineType": "string",
  "maxInstances": 0,
  "maxThroughput": 0,
  "minInstances": 0,
  "minThroughput": 0,
  "name": "string",
  "network": "string",
  "subnet": {
    "name": "string",
    "projectId": "string"
  }
}
```

<h3 id="vpcaccessprojectslocationsconnectorspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name in the format `projects/*/locations/*/connectors/*`.|
|updateMask|query|string|false|The fields to update on the entry group. If absent or empty, all modifiable fields are updated.|
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
|body|body|[Connector](#schemaconnector)|false|none|
|» ipCidrRange|body|string|false|The range of internal addresses that follows RFC 4632 notation. Example: `10.132.0.0/28`.|
|» machineType|body|string|false|Machine type of VM Instance underlying connector. Default is e2-micro|
|» maxInstances|body|integer(int32)|false|Maximum value of instances in autoscaling group underlying the connector.|
|» maxThroughput|body|integer(int32)|false|Maximum throughput of the connector in Mbps. Default is 300, max is 1000.|
|» minInstances|body|integer(int32)|false|Minimum value of instances in autoscaling group underlying the connector.|
|» minThroughput|body|integer(int32)|false|Minimum throughput of the connector in Mbps. Default and min is 200.|
|» name|body|string|false|The resource name in the format `projects/*/locations/*/connectors/*`.|
|» network|body|string|false|Name of a VPC network.|
|» subnet|body|[Subnet](#schemasubnet)|false|The subnet in which to house the VPC Access Connector.|

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

<h3 id="vpcaccessprojectslocationsconnectorspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vpcaccess.projects.locations.list

<a id="opIdvpcaccess.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="vpcaccessprojectslocationslist-parameters">Parameters</h3>

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

<h3 id="vpcaccessprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vpcaccess.projects.locations.operations.list

<a id="opIdvpcaccess.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="vpcaccessprojectslocationsoperationslist-parameters">Parameters</h3>

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

<h3 id="vpcaccessprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vpcaccess.projects.locations.connectors.list

<a id="opIdvpcaccess.projects.locations.connectors.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/connectors \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/connectors`

Lists Serverless VPC Access connectors.

<h3 id="vpcaccessprojectslocationsconnectorslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location from which the routes should be listed.|
|pageSize|query|integer|false|Maximum number of functions to return per call.|
|pageToken|query|string|false|Continuation token.|
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
  "connectors": [
    {
      "connectedProjects": [
        "string"
      ],
      "ipCidrRange": "string",
      "machineType": "string",
      "maxInstances": 0,
      "maxThroughput": 0,
      "minInstances": 0,
      "minThroughput": 0,
      "name": "string",
      "network": "string",
      "state": "STATE_UNSPECIFIED",
      "subnet": {
        "name": "string",
        "projectId": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="vpcaccessprojectslocationsconnectorslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListConnectorsResponse](#schemalistconnectorsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## vpcaccess.projects.locations.connectors.create

<a id="opIdvpcaccess.projects.locations.connectors.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/connectors \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ipCidrRange": "string",
    "machineType": "string",
    "maxInstances": 0,
    "maxThroughput": 0,
    "minInstances": 0,
    "minThroughput": 0,
    "name": "string",
    "network": "string",
    "subnet": {
      "name": "string",
      "projectId": "string"
    }
  }'
```

`POST /v1/{parent}/connectors`

Creates a Serverless VPC Access connector, returns an operation.

> Body parameter

```json
{
  "ipCidrRange": "string",
  "machineType": "string",
  "maxInstances": 0,
  "maxThroughput": 0,
  "minInstances": 0,
  "minThroughput": 0,
  "name": "string",
  "network": "string",
  "subnet": {
    "name": "string",
    "projectId": "string"
  }
}
```

<h3 id="vpcaccessprojectslocationsconnectorscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location in which the configuration should be created, specified in the format `projects/*/locations/*`.|
|connectorId|query|string|false|Required. The ID to use for this connector.|
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
|body|body|[Connector](#schemaconnector)|false|none|
|» ipCidrRange|body|string|false|The range of internal addresses that follows RFC 4632 notation. Example: `10.132.0.0/28`.|
|» machineType|body|string|false|Machine type of VM Instance underlying connector. Default is e2-micro|
|» maxInstances|body|integer(int32)|false|Maximum value of instances in autoscaling group underlying the connector.|
|» maxThroughput|body|integer(int32)|false|Maximum throughput of the connector in Mbps. Default is 300, max is 1000.|
|» minInstances|body|integer(int32)|false|Minimum value of instances in autoscaling group underlying the connector.|
|» minThroughput|body|integer(int32)|false|Minimum throughput of the connector in Mbps. Default and min is 200.|
|» name|body|string|false|The resource name in the format `projects/*/locations/*/connectors/*`.|
|» network|body|string|false|Name of a VPC network.|
|» subnet|body|[Subnet](#schemasubnet)|false|The subnet in which to house the VPC Access Connector.|

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

<h3 id="vpcaccessprojectslocationsconnectorscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_Connector">Connector</h2>
<!-- backwards compatibility -->
<a id="schemaconnector"></a>
<a id="schema_Connector"></a>
<a id="tocSconnector"></a>
<a id="tocsconnector"></a>

```json
{
  "connectedProjects": [
    "string"
  ],
  "ipCidrRange": "string",
  "machineType": "string",
  "maxInstances": 0,
  "maxThroughput": 0,
  "minInstances": 0,
  "minThroughput": 0,
  "name": "string",
  "network": "string",
  "state": "STATE_UNSPECIFIED",
  "subnet": {
    "name": "string",
    "projectId": "string"
  }
}
```

Definition of a Serverless VPC Access connector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectedProjects|[string]|false|read-only|Output only. List of projects using the connector.|
|ipCidrRange|string|false|none|The range of internal addresses that follows RFC 4632 notation. Example: `10.132.0.0/28`.|
|machineType|string|false|none|Machine type of VM Instance underlying connector. Default is e2-micro|
|maxInstances|integer(int32)|false|none|Maximum value of instances in autoscaling group underlying the connector.|
|maxThroughput|integer(int32)|false|none|Maximum throughput of the connector in Mbps. Default is 300, max is 1000.|
|minInstances|integer(int32)|false|none|Minimum value of instances in autoscaling group underlying the connector.|
|minThroughput|integer(int32)|false|none|Minimum throughput of the connector in Mbps. Default and min is 200.|
|name|string|false|none|The resource name in the format `projects/*/locations/*/connectors/*`.|
|network|string|false|none|Name of a VPC network.|
|state|string|false|read-only|Output only. State of the VPC access connector.|
|subnet|[Subnet](#schemasubnet)|false|none|The subnet in which to house the VPC Access Connector.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|READY|
|state|CREATING|
|state|DELETING|
|state|ERROR|
|state|UPDATING|

<h2 id="tocS_ListConnectorsResponse">ListConnectorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistconnectorsresponse"></a>
<a id="schema_ListConnectorsResponse"></a>
<a id="tocSlistconnectorsresponse"></a>
<a id="tocslistconnectorsresponse"></a>

```json
{
  "connectors": [
    {
      "connectedProjects": [
        "string"
      ],
      "ipCidrRange": "string",
      "machineType": "string",
      "maxInstances": 0,
      "maxThroughput": 0,
      "minInstances": 0,
      "minThroughput": 0,
      "name": "string",
      "network": "string",
      "state": "STATE_UNSPECIFIED",
      "subnet": {
        "name": "string",
        "projectId": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response for listing Serverless VPC Access connectors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectors|[[Connector](#schemaconnector)]|false|none|List of Serverless VPC Access connectors.|
|nextPageToken|string|false|none|Continuation token.|

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

<h2 id="tocS_OperationMetadata">OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaoperationmetadata"></a>
<a id="schema_OperationMetadata"></a>
<a id="tocSoperationmetadata"></a>
<a id="tocsoperationmetadata"></a>

```json
{
  "createTime": "string",
  "endTime": "string",
  "method": "string",
  "target": "string"
}
```

Metadata for google.longrunning.Operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Time when the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. Time when the operation completed.|
|method|string|false|read-only|Output only. Method that initiated the operation e.g. google.cloud.vpcaccess.v1.Connectors.CreateConnector.|
|target|string|false|read-only|Output only. Name of the resource that this operation is acting on e.g. projects/my-project/locations/us-central1/connectors/v1.|

<h2 id="tocS_OperationMetadataV1Alpha1">OperationMetadataV1Alpha1</h2>
<!-- backwards compatibility -->
<a id="schemaoperationmetadatav1alpha1"></a>
<a id="schema_OperationMetadataV1Alpha1"></a>
<a id="tocSoperationmetadatav1alpha1"></a>
<a id="tocsoperationmetadatav1alpha1"></a>

```json
{
  "endTime": "string",
  "insertTime": "string",
  "method": "string",
  "target": "string"
}
```

Metadata for google.longrunning.Operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|read-only|Output only. Time when the operation completed.|
|insertTime|string(google-datetime)|false|read-only|Output only. Time when the operation was created.|
|method|string|false|read-only|Output only. Method that initiated the operation e.g. google.cloud.vpcaccess.v1alpha1.Connectors.CreateConnector.|
|target|string|false|read-only|Output only. Name of the resource that this operation is acting on e.g. projects/my-project/locations/us-central1/connectors/v1.|

<h2 id="tocS_OperationMetadataV1Beta1">OperationMetadataV1Beta1</h2>
<!-- backwards compatibility -->
<a id="schemaoperationmetadatav1beta1"></a>
<a id="schema_OperationMetadataV1Beta1"></a>
<a id="tocSoperationmetadatav1beta1"></a>
<a id="tocsoperationmetadatav1beta1"></a>

```json
{
  "createTime": "string",
  "endTime": "string",
  "method": "string",
  "target": "string"
}
```

Metadata for google.longrunning.Operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Time when the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. Time when the operation completed.|
|method|string|false|read-only|Output only. Method that initiated the operation e.g. google.cloud.vpcaccess.v1beta1.Connectors.CreateConnector.|
|target|string|false|read-only|Output only. Name of the resource that this operation is acting on e.g. projects/my-project/locations/us-central1/connectors/v1.|

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

<h2 id="tocS_Subnet">Subnet</h2>
<!-- backwards compatibility -->
<a id="schemasubnet"></a>
<a id="schema_Subnet"></a>
<a id="tocSsubnet"></a>
<a id="tocssubnet"></a>

```json
{
  "name": "string",
  "projectId": "string"
}
```

The subnet in which to house the connector

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Subnet name (relative, not fully qualified). E.g. if the full subnet selfLink is https://compute.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetName} the correct input for this field would be {subnetName}|
|projectId|string|false|none|Project in which the subnet exists. If not set, this project is assumed to be the project for which the connector create request was issued.|
