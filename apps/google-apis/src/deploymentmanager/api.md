<h1 id="cloud-deployment-manager-v2-api">Cloud Deployment Manager V2 API v2beta</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Google Cloud Deployment Manager v2 API provides services for configuring, deploying, and viewing Google Cloud services and APIs via templates which specify deployments of Cloud resources.

Base URLs:

* <a href="https://deploymentmanager.googleapis.com/">https://deploymentmanager.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/deployment-manager">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud-platform.read-only|View your data across Google Cloud services and see the email address of your Google Account|
|https://www.googleapis.com/auth/ndev.cloudman|View and manage your Google Cloud Platform management resources and deployment status information|
|https://www.googleapis.com/auth/ndev.cloudman.readonly|View your Google Cloud Platform management resources and deployment status information|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud-platform.read-only|View your data across Google Cloud services and see the email address of your Google Account|
|https://www.googleapis.com/auth/ndev.cloudman|View and manage your Google Cloud Platform management resources and deployment status information|
|https://www.googleapis.com/auth/ndev.cloudman.readonly|View your Google Cloud Platform management resources and deployment status information|

<h1 id="cloud-deployment-manager-v2-api-compositetypes">compositeTypes</h1>

## deploymentmanager.compositeTypes.list

<a id="opIddeploymentmanager.compositeTypes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/compositeTypes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /deploymentmanager/v2beta/projects/{project}/global/compositeTypes`

Lists all composite types for Deployment Manager.

<h3 id="deploymentmanagercompositetypeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project ID for this request.|
|filter|query|string|false|A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:` operator can be used with string fields to match substrings. For non-string fields it is equivalent to the `=` operator. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`.|
|maxResults|query|integer|false|The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)|
|orderBy|query|string|false|Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.|
|pageToken|query|string|false|Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.|
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
  "compositeTypes": [
    {
      "description": "string",
      "id": "string",
      "insertTime": "string",
      "labels": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "name": "string",
      "operation": {
        "clientOperationId": "string",
        "creationTimestamp": "string",
        "description": "string",
        "endTime": "string",
        "error": {
          "errors": [
            {
              "code": "string",
              "location": "string",
              "message": "string"
            }
          ]
        },
        "httpErrorMessage": "string",
        "httpErrorStatusCode": 0,
        "id": "string",
        "insertTime": "string",
        "kind": "compute#operation",
        "name": "string",
        "operationGroupId": "string",
        "operationType": "string",
        "progress": 0,
        "region": "string",
        "selfLink": "string",
        "startTime": "string",
        "status": "PENDING",
        "statusMessage": "string",
        "targetId": "string",
        "targetLink": "string",
        "user": "string",
        "warnings": [
          {
            "code": "DEPRECATED_RESOURCE_USED",
            "data": [
              {
                "key": "string",
                "value": "string"
              }
            ],
            "message": "string"
          }
        ],
        "zone": "string"
      },
      "selfLink": "string",
      "status": "UNKNOWN_STATUS",
      "templateContents": {
        "imports": [
          {
            "content": "string",
            "name": "string"
          }
        ],
        "interpreter": "UNKNOWN_INTERPRETER",
        "mainTemplate": "string",
        "schema": "string",
        "template": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="deploymentmanagercompositetypeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CompositeTypesListResponse](#schemacompositetypeslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly )
</aside>

## deploymentmanager.compositeTypes.insert

<a id="opIddeploymentmanager.compositeTypes.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/compositeTypes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "id": "string",
    "insertTime": "string",
    "labels": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "name": "string",
    "operation": {
      "clientOperationId": "string",
      "creationTimestamp": "string",
      "description": "string",
      "endTime": "string",
      "error": {
        "errors": [
          {
            "code": "string",
            "location": "string",
            "message": "string"
          }
        ]
      },
      "httpErrorMessage": "string",
      "httpErrorStatusCode": 0,
      "id": "string",
      "insertTime": "string",
      "kind": "compute#operation",
      "name": "string",
      "operationGroupId": "string",
      "operationType": "string",
      "progress": 0,
      "region": "string",
      "selfLink": "string",
      "startTime": "string",
      "status": "PENDING",
      "statusMessage": "string",
      "targetId": "string",
      "targetLink": "string",
      "user": "string",
      "warnings": [
        {
          "code": "DEPRECATED_RESOURCE_USED",
          "data": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "message": "string"
        }
      ],
      "zone": "string"
    },
    "selfLink": "string",
    "status": "UNKNOWN_STATUS",
    "templateContents": {
      "imports": [
        {
          "content": "string",
          "name": "string"
        }
      ],
      "interpreter": "UNKNOWN_INTERPRETER",
      "mainTemplate": "string",
      "schema": "string",
      "template": "string"
    }
  }'
```

`POST /deploymentmanager/v2beta/projects/{project}/global/compositeTypes`

Creates a composite type.

> Body parameter

```json
{
  "description": "string",
  "id": "string",
  "insertTime": "string",
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "operation": {
    "clientOperationId": "string",
    "creationTimestamp": "string",
    "description": "string",
    "endTime": "string",
    "error": {
      "errors": [
        {
          "code": "string",
          "location": "string",
          "message": "string"
        }
      ]
    },
    "httpErrorMessage": "string",
    "httpErrorStatusCode": 0,
    "id": "string",
    "insertTime": "string",
    "kind": "compute#operation",
    "name": "string",
    "operationGroupId": "string",
    "operationType": "string",
    "progress": 0,
    "region": "string",
    "selfLink": "string",
    "startTime": "string",
    "status": "PENDING",
    "statusMessage": "string",
    "targetId": "string",
    "targetLink": "string",
    "user": "string",
    "warnings": [
      {
        "code": "DEPRECATED_RESOURCE_USED",
        "data": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "message": "string"
      }
    ],
    "zone": "string"
  },
  "selfLink": "string",
  "status": "UNKNOWN_STATUS",
  "templateContents": {
    "imports": [
      {
        "content": "string",
        "name": "string"
      }
    ],
    "interpreter": "UNKNOWN_INTERPRETER",
    "mainTemplate": "string",
    "schema": "string",
    "template": "string"
  }
}
```

<h3 id="deploymentmanagercompositetypesinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project ID for this request.|
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
|body|body|[CompositeType](#schemacompositetype)|false|none|
|» description|body|string|false|An optional textual description of the resource; provided by the client when the resource is created.|
|» id|body|string(uint64)|false|none|
|» insertTime|body|string|false|Output only. Creation timestamp in RFC3339 text format.|
|» labels|body|[[CompositeTypeLabelEntry](#schemacompositetypelabelentry)]|false|Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.|
|» name|body|string|false|Name of the composite type, must follow the expression: `[a-z]([-a-z0-9_.]{0,61}[a-z0-9])?`.|
|» operation|body|[Operation](#schemaoperation)|false|Output only. The Operation that most recently ran, or is currently running, on this composite type.|
|» selfLink|body|string|false|Output only. Server defined URL for the resource.|
|» status|body|string|false|none|
|» templateContents|body|[TemplateContents](#schematemplatecontents)|false|Files for the template type.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» status|UNKNOWN_STATUS|
|» status|DEPRECATED|
|» status|EXPERIMENTAL|
|» status|SUPPORTED|

> Example responses

> 200 Response

```json
{
  "clientOperationId": "string",
  "creationTimestamp": "string",
  "description": "string",
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "location": "string",
        "message": "string"
      }
    ]
  },
  "httpErrorMessage": "string",
  "httpErrorStatusCode": 0,
  "id": "string",
  "insertTime": "string",
  "kind": "compute#operation",
  "name": "string",
  "operationGroupId": "string",
  "operationType": "string",
  "progress": 0,
  "region": "string",
  "selfLink": "string",
  "startTime": "string",
  "status": "PENDING",
  "statusMessage": "string",
  "targetId": "string",
  "targetLink": "string",
  "user": "string",
  "warnings": [
    {
      "code": "DEPRECATED_RESOURCE_USED",
      "data": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "message": "string"
    }
  ],
  "zone": "string"
}
```

<h3 id="deploymentmanagercompositetypesinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman )
</aside>

## deploymentmanager.compositeTypes.get

<a id="opIddeploymentmanager.compositeTypes.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/compositeTypes/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /deploymentmanager/v2beta/projects/{project}/global/compositeTypes/{compositeType}`

Gets information about a specific composite type.

<h3 id="deploymentmanagercompositetypesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project ID for this request.|
|compositeType|path|string|true|The name of the composite type for this request.|
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
  "description": "string",
  "id": "string",
  "insertTime": "string",
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "operation": {
    "clientOperationId": "string",
    "creationTimestamp": "string",
    "description": "string",
    "endTime": "string",
    "error": {
      "errors": [
        {
          "code": "string",
          "location": "string",
          "message": "string"
        }
      ]
    },
    "httpErrorMessage": "string",
    "httpErrorStatusCode": 0,
    "id": "string",
    "insertTime": "string",
    "kind": "compute#operation",
    "name": "string",
    "operationGroupId": "string",
    "operationType": "string",
    "progress": 0,
    "region": "string",
    "selfLink": "string",
    "startTime": "string",
    "status": "PENDING",
    "statusMessage": "string",
    "targetId": "string",
    "targetLink": "string",
    "user": "string",
    "warnings": [
      {
        "code": "DEPRECATED_RESOURCE_USED",
        "data": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "message": "string"
      }
    ],
    "zone": "string"
  },
  "selfLink": "string",
  "status": "UNKNOWN_STATUS",
  "templateContents": {
    "imports": [
      {
        "content": "string",
        "name": "string"
      }
    ],
    "interpreter": "UNKNOWN_INTERPRETER",
    "mainTemplate": "string",
    "schema": "string",
    "template": "string"
  }
}
```

<h3 id="deploymentmanagercompositetypesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CompositeType](#schemacompositetype)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly )
</aside>

## deploymentmanager.compositeTypes.update

<a id="opIddeploymentmanager.compositeTypes.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/compositeTypes/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "id": "string",
    "insertTime": "string",
    "labels": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "name": "string",
    "operation": {
      "clientOperationId": "string",
      "creationTimestamp": "string",
      "description": "string",
      "endTime": "string",
      "error": {
        "errors": [
          {
            "code": "string",
            "location": "string",
            "message": "string"
          }
        ]
      },
      "httpErrorMessage": "string",
      "httpErrorStatusCode": 0,
      "id": "string",
      "insertTime": "string",
      "kind": "compute#operation",
      "name": "string",
      "operationGroupId": "string",
      "operationType": "string",
      "progress": 0,
      "region": "string",
      "selfLink": "string",
      "startTime": "string",
      "status": "PENDING",
      "statusMessage": "string",
      "targetId": "string",
      "targetLink": "string",
      "user": "string",
      "warnings": [
        {
          "code": "DEPRECATED_RESOURCE_USED",
          "data": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "message": "string"
        }
      ],
      "zone": "string"
    },
    "selfLink": "string",
    "status": "UNKNOWN_STATUS",
    "templateContents": {
      "imports": [
        {
          "content": "string",
          "name": "string"
        }
      ],
      "interpreter": "UNKNOWN_INTERPRETER",
      "mainTemplate": "string",
      "schema": "string",
      "template": "string"
    }
  }'
```

`PUT /deploymentmanager/v2beta/projects/{project}/global/compositeTypes/{compositeType}`

Updates a composite type.

> Body parameter

```json
{
  "description": "string",
  "id": "string",
  "insertTime": "string",
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "operation": {
    "clientOperationId": "string",
    "creationTimestamp": "string",
    "description": "string",
    "endTime": "string",
    "error": {
      "errors": [
        {
          "code": "string",
          "location": "string",
          "message": "string"
        }
      ]
    },
    "httpErrorMessage": "string",
    "httpErrorStatusCode": 0,
    "id": "string",
    "insertTime": "string",
    "kind": "compute#operation",
    "name": "string",
    "operationGroupId": "string",
    "operationType": "string",
    "progress": 0,
    "region": "string",
    "selfLink": "string",
    "startTime": "string",
    "status": "PENDING",
    "statusMessage": "string",
    "targetId": "string",
    "targetLink": "string",
    "user": "string",
    "warnings": [
      {
        "code": "DEPRECATED_RESOURCE_USED",
        "data": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "message": "string"
      }
    ],
    "zone": "string"
  },
  "selfLink": "string",
  "status": "UNKNOWN_STATUS",
  "templateContents": {
    "imports": [
      {
        "content": "string",
        "name": "string"
      }
    ],
    "interpreter": "UNKNOWN_INTERPRETER",
    "mainTemplate": "string",
    "schema": "string",
    "template": "string"
  }
}
```

<h3 id="deploymentmanagercompositetypesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project ID for this request.|
|compositeType|path|string|true|The name of the composite type for this request.|
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
|body|body|[CompositeType](#schemacompositetype)|false|none|
|» description|body|string|false|An optional textual description of the resource; provided by the client when the resource is created.|
|» id|body|string(uint64)|false|none|
|» insertTime|body|string|false|Output only. Creation timestamp in RFC3339 text format.|
|» labels|body|[[CompositeTypeLabelEntry](#schemacompositetypelabelentry)]|false|Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.|
|» name|body|string|false|Name of the composite type, must follow the expression: `[a-z]([-a-z0-9_.]{0,61}[a-z0-9])?`.|
|» operation|body|[Operation](#schemaoperation)|false|Output only. The Operation that most recently ran, or is currently running, on this composite type.|
|» selfLink|body|string|false|Output only. Server defined URL for the resource.|
|» status|body|string|false|none|
|» templateContents|body|[TemplateContents](#schematemplatecontents)|false|Files for the template type.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» status|UNKNOWN_STATUS|
|» status|DEPRECATED|
|» status|EXPERIMENTAL|
|» status|SUPPORTED|

> Example responses

> 200 Response

```json
{
  "clientOperationId": "string",
  "creationTimestamp": "string",
  "description": "string",
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "location": "string",
        "message": "string"
      }
    ]
  },
  "httpErrorMessage": "string",
  "httpErrorStatusCode": 0,
  "id": "string",
  "insertTime": "string",
  "kind": "compute#operation",
  "name": "string",
  "operationGroupId": "string",
  "operationType": "string",
  "progress": 0,
  "region": "string",
  "selfLink": "string",
  "startTime": "string",
  "status": "PENDING",
  "statusMessage": "string",
  "targetId": "string",
  "targetLink": "string",
  "user": "string",
  "warnings": [
    {
      "code": "DEPRECATED_RESOURCE_USED",
      "data": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "message": "string"
    }
  ],
  "zone": "string"
}
```

<h3 id="deploymentmanagercompositetypesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman )
</aside>

## deploymentmanager.compositeTypes.delete

<a id="opIddeploymentmanager.compositeTypes.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/compositeTypes/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /deploymentmanager/v2beta/projects/{project}/global/compositeTypes/{compositeType}`

Deletes a composite type.

<h3 id="deploymentmanagercompositetypesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project ID for this request.|
|compositeType|path|string|true|The name of the type for this request.|
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
  "clientOperationId": "string",
  "creationTimestamp": "string",
  "description": "string",
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "location": "string",
        "message": "string"
      }
    ]
  },
  "httpErrorMessage": "string",
  "httpErrorStatusCode": 0,
  "id": "string",
  "insertTime": "string",
  "kind": "compute#operation",
  "name": "string",
  "operationGroupId": "string",
  "operationType": "string",
  "progress": 0,
  "region": "string",
  "selfLink": "string",
  "startTime": "string",
  "status": "PENDING",
  "statusMessage": "string",
  "targetId": "string",
  "targetLink": "string",
  "user": "string",
  "warnings": [
    {
      "code": "DEPRECATED_RESOURCE_USED",
      "data": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "message": "string"
    }
  ],
  "zone": "string"
}
```

<h3 id="deploymentmanagercompositetypesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman )
</aside>

## deploymentmanager.compositeTypes.patch

<a id="opIddeploymentmanager.compositeTypes.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/compositeTypes/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "id": "string",
    "insertTime": "string",
    "labels": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "name": "string",
    "operation": {
      "clientOperationId": "string",
      "creationTimestamp": "string",
      "description": "string",
      "endTime": "string",
      "error": {
        "errors": [
          {
            "code": "string",
            "location": "string",
            "message": "string"
          }
        ]
      },
      "httpErrorMessage": "string",
      "httpErrorStatusCode": 0,
      "id": "string",
      "insertTime": "string",
      "kind": "compute#operation",
      "name": "string",
      "operationGroupId": "string",
      "operationType": "string",
      "progress": 0,
      "region": "string",
      "selfLink": "string",
      "startTime": "string",
      "status": "PENDING",
      "statusMessage": "string",
      "targetId": "string",
      "targetLink": "string",
      "user": "string",
      "warnings": [
        {
          "code": "DEPRECATED_RESOURCE_USED",
          "data": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "message": "string"
        }
      ],
      "zone": "string"
    },
    "selfLink": "string",
    "status": "UNKNOWN_STATUS",
    "templateContents": {
      "imports": [
        {
          "content": "string",
          "name": "string"
        }
      ],
      "interpreter": "UNKNOWN_INTERPRETER",
      "mainTemplate": "string",
      "schema": "string",
      "template": "string"
    }
  }'
```

`PATCH /deploymentmanager/v2beta/projects/{project}/global/compositeTypes/{compositeType}`

Patches a composite type.

> Body parameter

```json
{
  "description": "string",
  "id": "string",
  "insertTime": "string",
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "operation": {
    "clientOperationId": "string",
    "creationTimestamp": "string",
    "description": "string",
    "endTime": "string",
    "error": {
      "errors": [
        {
          "code": "string",
          "location": "string",
          "message": "string"
        }
      ]
    },
    "httpErrorMessage": "string",
    "httpErrorStatusCode": 0,
    "id": "string",
    "insertTime": "string",
    "kind": "compute#operation",
    "name": "string",
    "operationGroupId": "string",
    "operationType": "string",
    "progress": 0,
    "region": "string",
    "selfLink": "string",
    "startTime": "string",
    "status": "PENDING",
    "statusMessage": "string",
    "targetId": "string",
    "targetLink": "string",
    "user": "string",
    "warnings": [
      {
        "code": "DEPRECATED_RESOURCE_USED",
        "data": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "message": "string"
      }
    ],
    "zone": "string"
  },
  "selfLink": "string",
  "status": "UNKNOWN_STATUS",
  "templateContents": {
    "imports": [
      {
        "content": "string",
        "name": "string"
      }
    ],
    "interpreter": "UNKNOWN_INTERPRETER",
    "mainTemplate": "string",
    "schema": "string",
    "template": "string"
  }
}
```

<h3 id="deploymentmanagercompositetypespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project ID for this request.|
|compositeType|path|string|true|The name of the composite type for this request.|
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
|body|body|[CompositeType](#schemacompositetype)|false|none|
|» description|body|string|false|An optional textual description of the resource; provided by the client when the resource is created.|
|» id|body|string(uint64)|false|none|
|» insertTime|body|string|false|Output only. Creation timestamp in RFC3339 text format.|
|» labels|body|[[CompositeTypeLabelEntry](#schemacompositetypelabelentry)]|false|Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.|
|» name|body|string|false|Name of the composite type, must follow the expression: `[a-z]([-a-z0-9_.]{0,61}[a-z0-9])?`.|
|» operation|body|[Operation](#schemaoperation)|false|Output only. The Operation that most recently ran, or is currently running, on this composite type.|
|» selfLink|body|string|false|Output only. Server defined URL for the resource.|
|» status|body|string|false|none|
|» templateContents|body|[TemplateContents](#schematemplatecontents)|false|Files for the template type.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» status|UNKNOWN_STATUS|
|» status|DEPRECATED|
|» status|EXPERIMENTAL|
|» status|SUPPORTED|

> Example responses

> 200 Response

```json
{
  "clientOperationId": "string",
  "creationTimestamp": "string",
  "description": "string",
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "location": "string",
        "message": "string"
      }
    ]
  },
  "httpErrorMessage": "string",
  "httpErrorStatusCode": 0,
  "id": "string",
  "insertTime": "string",
  "kind": "compute#operation",
  "name": "string",
  "operationGroupId": "string",
  "operationType": "string",
  "progress": 0,
  "region": "string",
  "selfLink": "string",
  "startTime": "string",
  "status": "PENDING",
  "statusMessage": "string",
  "targetId": "string",
  "targetLink": "string",
  "user": "string",
  "warnings": [
    {
      "code": "DEPRECATED_RESOURCE_USED",
      "data": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "message": "string"
    }
  ],
  "zone": "string"
}
```

<h3 id="deploymentmanagercompositetypespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman )
</aside>

<h1 id="cloud-deployment-manager-v2-api-deployments">deployments</h1>

## deploymentmanager.deployments.list

<a id="opIddeploymentmanager.deployments.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/deployments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /deploymentmanager/v2beta/projects/{project}/global/deployments`

Lists all deployments for a given project.

<h3 id="deploymentmanagerdeploymentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project ID for this request.|
|filter|query|string|false|A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:` operator can be used with string fields to match substrings. For non-string fields it is equivalent to the `=` operator. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`.|
|maxResults|query|integer|false|The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)|
|orderBy|query|string|false|Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.|
|pageToken|query|string|false|Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.|
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
  "deployments": [
    {
      "description": "string",
      "fingerprint": "string",
      "id": "string",
      "insertTime": "string",
      "labels": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "manifest": "string",
      "name": "string",
      "operation": {
        "clientOperationId": "string",
        "creationTimestamp": "string",
        "description": "string",
        "endTime": "string",
        "error": {
          "errors": [
            {
              "code": "string",
              "location": "string",
              "message": "string"
            }
          ]
        },
        "httpErrorMessage": "string",
        "httpErrorStatusCode": 0,
        "id": "string",
        "insertTime": "string",
        "kind": "compute#operation",
        "name": "string",
        "operationGroupId": "string",
        "operationType": "string",
        "progress": 0,
        "region": "string",
        "selfLink": "string",
        "startTime": "string",
        "status": "PENDING",
        "statusMessage": "string",
        "targetId": "string",
        "targetLink": "string",
        "user": "string",
        "warnings": [
          {
            "code": "DEPRECATED_RESOURCE_USED",
            "data": [
              {
                "key": "string",
                "value": "string"
              }
            ],
            "message": "string"
          }
        ],
        "zone": "string"
      },
      "selfLink": "string",
      "target": {
        "config": {
          "content": "string"
        },
        "imports": [
          {
            "content": "string",
            "name": "string"
          }
        ]
      },
      "update": {
        "description": "string",
        "labels": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "manifest": "string"
      },
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="deploymentmanagerdeploymentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DeploymentsListResponse](#schemadeploymentslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly )
</aside>

## deploymentmanager.deployments.insert

<a id="opIddeploymentmanager.deployments.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/deployments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "fingerprint": "string",
    "id": "string",
    "insertTime": "string",
    "labels": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "manifest": "string",
    "name": "string",
    "operation": {
      "clientOperationId": "string",
      "creationTimestamp": "string",
      "description": "string",
      "endTime": "string",
      "error": {
        "errors": [
          {
            "code": "string",
            "location": "string",
            "message": "string"
          }
        ]
      },
      "httpErrorMessage": "string",
      "httpErrorStatusCode": 0,
      "id": "string",
      "insertTime": "string",
      "kind": "compute#operation",
      "name": "string",
      "operationGroupId": "string",
      "operationType": "string",
      "progress": 0,
      "region": "string",
      "selfLink": "string",
      "startTime": "string",
      "status": "PENDING",
      "statusMessage": "string",
      "targetId": "string",
      "targetLink": "string",
      "user": "string",
      "warnings": [
        {
          "code": "DEPRECATED_RESOURCE_USED",
          "data": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "message": "string"
        }
      ],
      "zone": "string"
    },
    "selfLink": "string",
    "target": {
      "config": {
        "content": "string"
      },
      "imports": [
        {
          "content": "string",
          "name": "string"
        }
      ]
    },
    "update": {
      "description": "string",
      "labels": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "manifest": "string"
    },
    "updateTime": "string"
  }'
```

`POST /deploymentmanager/v2beta/projects/{project}/global/deployments`

Creates a deployment and all of the resources described by the deployment manifest.

> Body parameter

```json
{
  "description": "string",
  "fingerprint": "string",
  "id": "string",
  "insertTime": "string",
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "manifest": "string",
  "name": "string",
  "operation": {
    "clientOperationId": "string",
    "creationTimestamp": "string",
    "description": "string",
    "endTime": "string",
    "error": {
      "errors": [
        {
          "code": "string",
          "location": "string",
          "message": "string"
        }
      ]
    },
    "httpErrorMessage": "string",
    "httpErrorStatusCode": 0,
    "id": "string",
    "insertTime": "string",
    "kind": "compute#operation",
    "name": "string",
    "operationGroupId": "string",
    "operationType": "string",
    "progress": 0,
    "region": "string",
    "selfLink": "string",
    "startTime": "string",
    "status": "PENDING",
    "statusMessage": "string",
    "targetId": "string",
    "targetLink": "string",
    "user": "string",
    "warnings": [
      {
        "code": "DEPRECATED_RESOURCE_USED",
        "data": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "message": "string"
      }
    ],
    "zone": "string"
  },
  "selfLink": "string",
  "target": {
    "config": {
      "content": "string"
    },
    "imports": [
      {
        "content": "string",
        "name": "string"
      }
    ]
  },
  "update": {
    "description": "string",
    "labels": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "manifest": "string"
  },
  "updateTime": "string"
}
```

<h3 id="deploymentmanagerdeploymentsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project ID for this request.|
|createPolicy|query|string|false|Sets the policy to use for creating new resources.|
|preview|query|boolean|false|If set to true, creates a deployment and creates "shell" resources but does not actually instantiate these resources. This allows you to preview what your deployment looks like. After previewing a deployment, you can deploy your resources by making a request with the `update()` method or you can use the `cancelPreview()` method to cancel the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.|
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
|body|body|[Deployment](#schemadeployment)|false|none|
|» description|body|string|false|An optional user-provided description of the deployment.|
|» fingerprint|body|string(byte)|false|Provides a fingerprint to use in requests to modify a deployment, such as `update()`, `stop()`, and `cancelPreview()` requests. A fingerprint is a randomly generated value that must be provided with `update()`, `stop()`, and `cancelPreview()` requests to perform optimistic locking. This ensures optimistic concurrency so that only one request happens at a time. The fingerprint is initially generated by Deployment Manager and changes after every request to modify data. To get the latest fingerprint value, perform a `get()` request to a deployment.|
|» id|body|string(uint64)|false|none|
|» insertTime|body|string|false|Output only. Creation timestamp in RFC3339 text format.|
|» labels|body|[[DeploymentLabelEntry](#schemadeploymentlabelentry)]|false|Map of One Platform labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.|
|» manifest|body|string|false|Output only. URL of the manifest representing the last manifest that was successfully deployed. If no manifest has been successfully deployed, this field will be absent.|
|» name|body|string|false|Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.|
|» operation|body|[Operation](#schemaoperation)|false|Output only. The Operation that most recently ran, or is currently running, on this deployment.|
|» selfLink|body|string|false|Output only. Server defined URL for the resource.|
|» target|body|[TargetConfiguration](#schematargetconfiguration)|false|[Input Only] The parameters that define your deployment, including the deployment configuration and relevant templates.|
|» update|body|[DeploymentUpdate](#schemadeploymentupdate)|false|Output only. If Deployment Manager is currently updating or previewing an update to this deployment, the updated configuration appears here.|
|» updateTime|body|string|false|Output only. Update timestamp in RFC3339 text format.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|createPolicy|CREATE_OR_ACQUIRE|
|createPolicy|ACQUIRE|
|createPolicy|CREATE|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "clientOperationId": "string",
  "creationTimestamp": "string",
  "description": "string",
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "location": "string",
        "message": "string"
      }
    ]
  },
  "httpErrorMessage": "string",
  "httpErrorStatusCode": 0,
  "id": "string",
  "insertTime": "string",
  "kind": "compute#operation",
  "name": "string",
  "operationGroupId": "string",
  "operationType": "string",
  "progress": 0,
  "region": "string",
  "selfLink": "string",
  "startTime": "string",
  "status": "PENDING",
  "statusMessage": "string",
  "targetId": "string",
  "targetLink": "string",
  "user": "string",
  "warnings": [
    {
      "code": "DEPRECATED_RESOURCE_USED",
      "data": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "message": "string"
    }
  ],
  "zone": "string"
}
```

<h3 id="deploymentmanagerdeploymentsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman )
</aside>

## deploymentmanager.deployments.get

<a id="opIddeploymentmanager.deployments.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/deployments/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}`

Gets information about a specific deployment.

<h3 id="deploymentmanagerdeploymentsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project ID for this request.|
|deployment|path|string|true|The name of the deployment for this request.|
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
  "description": "string",
  "fingerprint": "string",
  "id": "string",
  "insertTime": "string",
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "manifest": "string",
  "name": "string",
  "operation": {
    "clientOperationId": "string",
    "creationTimestamp": "string",
    "description": "string",
    "endTime": "string",
    "error": {
      "errors": [
        {
          "code": "string",
          "location": "string",
          "message": "string"
        }
      ]
    },
    "httpErrorMessage": "string",
    "httpErrorStatusCode": 0,
    "id": "string",
    "insertTime": "string",
    "kind": "compute#operation",
    "name": "string",
    "operationGroupId": "string",
    "operationType": "string",
    "progress": 0,
    "region": "string",
    "selfLink": "string",
    "startTime": "string",
    "status": "PENDING",
    "statusMessage": "string",
    "targetId": "string",
    "targetLink": "string",
    "user": "string",
    "warnings": [
      {
        "code": "DEPRECATED_RESOURCE_USED",
        "data": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "message": "string"
      }
    ],
    "zone": "string"
  },
  "selfLink": "string",
  "target": {
    "config": {
      "content": "string"
    },
    "imports": [
      {
        "content": "string",
        "name": "string"
      }
    ]
  },
  "update": {
    "description": "string",
    "labels": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "manifest": "string"
  },
  "updateTime": "string"
}
```

<h3 id="deploymentmanagerdeploymentsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Deployment](#schemadeployment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly )
</aside>

## deploymentmanager.deployments.update

<a id="opIddeploymentmanager.deployments.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/deployments/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "fingerprint": "string",
    "id": "string",
    "insertTime": "string",
    "labels": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "manifest": "string",
    "name": "string",
    "operation": {
      "clientOperationId": "string",
      "creationTimestamp": "string",
      "description": "string",
      "endTime": "string",
      "error": {
        "errors": [
          {
            "code": "string",
            "location": "string",
            "message": "string"
          }
        ]
      },
      "httpErrorMessage": "string",
      "httpErrorStatusCode": 0,
      "id": "string",
      "insertTime": "string",
      "kind": "compute#operation",
      "name": "string",
      "operationGroupId": "string",
      "operationType": "string",
      "progress": 0,
      "region": "string",
      "selfLink": "string",
      "startTime": "string",
      "status": "PENDING",
      "statusMessage": "string",
      "targetId": "string",
      "targetLink": "string",
      "user": "string",
      "warnings": [
        {
          "code": "DEPRECATED_RESOURCE_USED",
          "data": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "message": "string"
        }
      ],
      "zone": "string"
    },
    "selfLink": "string",
    "target": {
      "config": {
        "content": "string"
      },
      "imports": [
        {
          "content": "string",
          "name": "string"
        }
      ]
    },
    "update": {
      "description": "string",
      "labels": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "manifest": "string"
    },
    "updateTime": "string"
  }'
```

`PUT /deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}`

Updates a deployment and all of the resources described by the deployment manifest.

> Body parameter

```json
{
  "description": "string",
  "fingerprint": "string",
  "id": "string",
  "insertTime": "string",
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "manifest": "string",
  "name": "string",
  "operation": {
    "clientOperationId": "string",
    "creationTimestamp": "string",
    "description": "string",
    "endTime": "string",
    "error": {
      "errors": [
        {
          "code": "string",
          "location": "string",
          "message": "string"
        }
      ]
    },
    "httpErrorMessage": "string",
    "httpErrorStatusCode": 0,
    "id": "string",
    "insertTime": "string",
    "kind": "compute#operation",
    "name": "string",
    "operationGroupId": "string",
    "operationType": "string",
    "progress": 0,
    "region": "string",
    "selfLink": "string",
    "startTime": "string",
    "status": "PENDING",
    "statusMessage": "string",
    "targetId": "string",
    "targetLink": "string",
    "user": "string",
    "warnings": [
      {
        "code": "DEPRECATED_RESOURCE_USED",
        "data": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "message": "string"
      }
    ],
    "zone": "string"
  },
  "selfLink": "string",
  "target": {
    "config": {
      "content": "string"
    },
    "imports": [
      {
        "content": "string",
        "name": "string"
      }
    ]
  },
  "update": {
    "description": "string",
    "labels": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "manifest": "string"
  },
  "updateTime": "string"
}
```

<h3 id="deploymentmanagerdeploymentsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project ID for this request.|
|deployment|path|string|true|The name of the deployment for this request.|
|createPolicy|query|string|false|Sets the policy to use for creating new resources.|
|deletePolicy|query|string|false|Sets the policy to use for deleting resources.|
|preview|query|boolean|false|If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a `target.config` with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the `update()` or you can `cancelPreview()` to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.|
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
|body|body|[Deployment](#schemadeployment)|false|none|
|» description|body|string|false|An optional user-provided description of the deployment.|
|» fingerprint|body|string(byte)|false|Provides a fingerprint to use in requests to modify a deployment, such as `update()`, `stop()`, and `cancelPreview()` requests. A fingerprint is a randomly generated value that must be provided with `update()`, `stop()`, and `cancelPreview()` requests to perform optimistic locking. This ensures optimistic concurrency so that only one request happens at a time. The fingerprint is initially generated by Deployment Manager and changes after every request to modify data. To get the latest fingerprint value, perform a `get()` request to a deployment.|
|» id|body|string(uint64)|false|none|
|» insertTime|body|string|false|Output only. Creation timestamp in RFC3339 text format.|
|» labels|body|[[DeploymentLabelEntry](#schemadeploymentlabelentry)]|false|Map of One Platform labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.|
|» manifest|body|string|false|Output only. URL of the manifest representing the last manifest that was successfully deployed. If no manifest has been successfully deployed, this field will be absent.|
|» name|body|string|false|Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.|
|» operation|body|[Operation](#schemaoperation)|false|Output only. The Operation that most recently ran, or is currently running, on this deployment.|
|» selfLink|body|string|false|Output only. Server defined URL for the resource.|
|» target|body|[TargetConfiguration](#schematargetconfiguration)|false|[Input Only] The parameters that define your deployment, including the deployment configuration and relevant templates.|
|» update|body|[DeploymentUpdate](#schemadeploymentupdate)|false|Output only. If Deployment Manager is currently updating or previewing an update to this deployment, the updated configuration appears here.|
|» updateTime|body|string|false|Output only. Update timestamp in RFC3339 text format.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|createPolicy|CREATE_OR_ACQUIRE|
|createPolicy|ACQUIRE|
|createPolicy|CREATE|
|deletePolicy|DELETE|
|deletePolicy|ABANDON|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "clientOperationId": "string",
  "creationTimestamp": "string",
  "description": "string",
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "location": "string",
        "message": "string"
      }
    ]
  },
  "httpErrorMessage": "string",
  "httpErrorStatusCode": 0,
  "id": "string",
  "insertTime": "string",
  "kind": "compute#operation",
  "name": "string",
  "operationGroupId": "string",
  "operationType": "string",
  "progress": 0,
  "region": "string",
  "selfLink": "string",
  "startTime": "string",
  "status": "PENDING",
  "statusMessage": "string",
  "targetId": "string",
  "targetLink": "string",
  "user": "string",
  "warnings": [
    {
      "code": "DEPRECATED_RESOURCE_USED",
      "data": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "message": "string"
    }
  ],
  "zone": "string"
}
```

<h3 id="deploymentmanagerdeploymentsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman )
</aside>

## deploymentmanager.deployments.delete

<a id="opIddeploymentmanager.deployments.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/deployments/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}`

Deletes a deployment and all of the resources in the deployment.

<h3 id="deploymentmanagerdeploymentsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project ID for this request.|
|deployment|path|string|true|The name of the deployment for this request.|
|deletePolicy|query|string|false|Sets the policy to use for deleting resources.|
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
|deletePolicy|DELETE|
|deletePolicy|ABANDON|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "clientOperationId": "string",
  "creationTimestamp": "string",
  "description": "string",
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "location": "string",
        "message": "string"
      }
    ]
  },
  "httpErrorMessage": "string",
  "httpErrorStatusCode": 0,
  "id": "string",
  "insertTime": "string",
  "kind": "compute#operation",
  "name": "string",
  "operationGroupId": "string",
  "operationType": "string",
  "progress": 0,
  "region": "string",
  "selfLink": "string",
  "startTime": "string",
  "status": "PENDING",
  "statusMessage": "string",
  "targetId": "string",
  "targetLink": "string",
  "user": "string",
  "warnings": [
    {
      "code": "DEPRECATED_RESOURCE_USED",
      "data": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "message": "string"
    }
  ],
  "zone": "string"
}
```

<h3 id="deploymentmanagerdeploymentsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman )
</aside>

## deploymentmanager.deployments.patch

<a id="opIddeploymentmanager.deployments.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/deployments/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "fingerprint": "string",
    "id": "string",
    "insertTime": "string",
    "labels": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "manifest": "string",
    "name": "string",
    "operation": {
      "clientOperationId": "string",
      "creationTimestamp": "string",
      "description": "string",
      "endTime": "string",
      "error": {
        "errors": [
          {
            "code": "string",
            "location": "string",
            "message": "string"
          }
        ]
      },
      "httpErrorMessage": "string",
      "httpErrorStatusCode": 0,
      "id": "string",
      "insertTime": "string",
      "kind": "compute#operation",
      "name": "string",
      "operationGroupId": "string",
      "operationType": "string",
      "progress": 0,
      "region": "string",
      "selfLink": "string",
      "startTime": "string",
      "status": "PENDING",
      "statusMessage": "string",
      "targetId": "string",
      "targetLink": "string",
      "user": "string",
      "warnings": [
        {
          "code": "DEPRECATED_RESOURCE_USED",
          "data": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "message": "string"
        }
      ],
      "zone": "string"
    },
    "selfLink": "string",
    "target": {
      "config": {
        "content": "string"
      },
      "imports": [
        {
          "content": "string",
          "name": "string"
        }
      ]
    },
    "update": {
      "description": "string",
      "labels": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "manifest": "string"
    },
    "updateTime": "string"
  }'
```

`PATCH /deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}`

Patches a deployment and all of the resources described by the deployment manifest.

> Body parameter

```json
{
  "description": "string",
  "fingerprint": "string",
  "id": "string",
  "insertTime": "string",
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "manifest": "string",
  "name": "string",
  "operation": {
    "clientOperationId": "string",
    "creationTimestamp": "string",
    "description": "string",
    "endTime": "string",
    "error": {
      "errors": [
        {
          "code": "string",
          "location": "string",
          "message": "string"
        }
      ]
    },
    "httpErrorMessage": "string",
    "httpErrorStatusCode": 0,
    "id": "string",
    "insertTime": "string",
    "kind": "compute#operation",
    "name": "string",
    "operationGroupId": "string",
    "operationType": "string",
    "progress": 0,
    "region": "string",
    "selfLink": "string",
    "startTime": "string",
    "status": "PENDING",
    "statusMessage": "string",
    "targetId": "string",
    "targetLink": "string",
    "user": "string",
    "warnings": [
      {
        "code": "DEPRECATED_RESOURCE_USED",
        "data": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "message": "string"
      }
    ],
    "zone": "string"
  },
  "selfLink": "string",
  "target": {
    "config": {
      "content": "string"
    },
    "imports": [
      {
        "content": "string",
        "name": "string"
      }
    ]
  },
  "update": {
    "description": "string",
    "labels": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "manifest": "string"
  },
  "updateTime": "string"
}
```

<h3 id="deploymentmanagerdeploymentspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project ID for this request.|
|deployment|path|string|true|The name of the deployment for this request.|
|createPolicy|query|string|false|Sets the policy to use for creating new resources.|
|deletePolicy|query|string|false|Sets the policy to use for deleting resources.|
|preview|query|boolean|false|If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a `target.config` with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the `update()` or you can `cancelPreview()` to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.|
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
|body|body|[Deployment](#schemadeployment)|false|none|
|» description|body|string|false|An optional user-provided description of the deployment.|
|» fingerprint|body|string(byte)|false|Provides a fingerprint to use in requests to modify a deployment, such as `update()`, `stop()`, and `cancelPreview()` requests. A fingerprint is a randomly generated value that must be provided with `update()`, `stop()`, and `cancelPreview()` requests to perform optimistic locking. This ensures optimistic concurrency so that only one request happens at a time. The fingerprint is initially generated by Deployment Manager and changes after every request to modify data. To get the latest fingerprint value, perform a `get()` request to a deployment.|
|» id|body|string(uint64)|false|none|
|» insertTime|body|string|false|Output only. Creation timestamp in RFC3339 text format.|
|» labels|body|[[DeploymentLabelEntry](#schemadeploymentlabelentry)]|false|Map of One Platform labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.|
|» manifest|body|string|false|Output only. URL of the manifest representing the last manifest that was successfully deployed. If no manifest has been successfully deployed, this field will be absent.|
|» name|body|string|false|Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.|
|» operation|body|[Operation](#schemaoperation)|false|Output only. The Operation that most recently ran, or is currently running, on this deployment.|
|» selfLink|body|string|false|Output only. Server defined URL for the resource.|
|» target|body|[TargetConfiguration](#schematargetconfiguration)|false|[Input Only] The parameters that define your deployment, including the deployment configuration and relevant templates.|
|» update|body|[DeploymentUpdate](#schemadeploymentupdate)|false|Output only. If Deployment Manager is currently updating or previewing an update to this deployment, the updated configuration appears here.|
|» updateTime|body|string|false|Output only. Update timestamp in RFC3339 text format.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|createPolicy|CREATE_OR_ACQUIRE|
|createPolicy|ACQUIRE|
|createPolicy|CREATE|
|deletePolicy|DELETE|
|deletePolicy|ABANDON|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "clientOperationId": "string",
  "creationTimestamp": "string",
  "description": "string",
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "location": "string",
        "message": "string"
      }
    ]
  },
  "httpErrorMessage": "string",
  "httpErrorStatusCode": 0,
  "id": "string",
  "insertTime": "string",
  "kind": "compute#operation",
  "name": "string",
  "operationGroupId": "string",
  "operationType": "string",
  "progress": 0,
  "region": "string",
  "selfLink": "string",
  "startTime": "string",
  "status": "PENDING",
  "statusMessage": "string",
  "targetId": "string",
  "targetLink": "string",
  "user": "string",
  "warnings": [
    {
      "code": "DEPRECATED_RESOURCE_USED",
      "data": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "message": "string"
    }
  ],
  "zone": "string"
}
```

<h3 id="deploymentmanagerdeploymentspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman )
</aside>

## deploymentmanager.deployments.cancelPreview

<a id="opIddeploymentmanager.deployments.cancelPreview"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/deployments/string/cancelPreview \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "fingerprint": "string"
  }'
```

`POST /deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/cancelPreview`

Cancels and removes the preview currently associated with the deployment.

> Body parameter

```json
{
  "fingerprint": "string"
}
```

<h3 id="deploymentmanagerdeploymentscancelpreview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project ID for this request.|
|deployment|path|string|true|The name of the deployment for this request.|
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
|body|body|[DeploymentsCancelPreviewRequest](#schemadeploymentscancelpreviewrequest)|false|none|
|» fingerprint|body|string(byte)|false|Specifies a fingerprint for `cancelPreview()` requests. A fingerprint is a randomly generated value that must be provided in `cancelPreview()` requests to perform optimistic locking. This ensures optimistic concurrency so that the deployment does not have conflicting requests (e.g. if someone attempts to make a new update request while another user attempts to cancel a preview, this would prevent one of the requests). The fingerprint is initially generated by Deployment Manager and changes after every request to modify a deployment. To get the latest fingerprint value, perform a `get()` request on the deployment.|

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
  "clientOperationId": "string",
  "creationTimestamp": "string",
  "description": "string",
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "location": "string",
        "message": "string"
      }
    ]
  },
  "httpErrorMessage": "string",
  "httpErrorStatusCode": 0,
  "id": "string",
  "insertTime": "string",
  "kind": "compute#operation",
  "name": "string",
  "operationGroupId": "string",
  "operationType": "string",
  "progress": 0,
  "region": "string",
  "selfLink": "string",
  "startTime": "string",
  "status": "PENDING",
  "statusMessage": "string",
  "targetId": "string",
  "targetLink": "string",
  "user": "string",
  "warnings": [
    {
      "code": "DEPRECATED_RESOURCE_USED",
      "data": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "message": "string"
    }
  ],
  "zone": "string"
}
```

<h3 id="deploymentmanagerdeploymentscancelpreview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman )
</aside>

## deploymentmanager.deployments.stop

<a id="opIddeploymentmanager.deployments.stop"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/deployments/string/stop \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "fingerprint": "string"
  }'
```

`POST /deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/stop`

Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.

> Body parameter

```json
{
  "fingerprint": "string"
}
```

<h3 id="deploymentmanagerdeploymentsstop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project ID for this request.|
|deployment|path|string|true|The name of the deployment for this request.|
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
|body|body|[DeploymentsStopRequest](#schemadeploymentsstoprequest)|false|none|
|» fingerprint|body|string(byte)|false|Specifies a fingerprint for `stop()` requests. A fingerprint is a randomly generated value that must be provided in `stop()` requests to perform optimistic locking. This ensures optimistic concurrency so that the deployment does not have conflicting requests (e.g. if someone attempts to make a new update request while another user attempts to stop an ongoing update request, this would prevent a collision). The fingerprint is initially generated by Deployment Manager and changes after every request to modify a deployment. To get the latest fingerprint value, perform a `get()` request on the deployment.|

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
  "clientOperationId": "string",
  "creationTimestamp": "string",
  "description": "string",
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "location": "string",
        "message": "string"
      }
    ]
  },
  "httpErrorMessage": "string",
  "httpErrorStatusCode": 0,
  "id": "string",
  "insertTime": "string",
  "kind": "compute#operation",
  "name": "string",
  "operationGroupId": "string",
  "operationType": "string",
  "progress": 0,
  "region": "string",
  "selfLink": "string",
  "startTime": "string",
  "status": "PENDING",
  "statusMessage": "string",
  "targetId": "string",
  "targetLink": "string",
  "user": "string",
  "warnings": [
    {
      "code": "DEPRECATED_RESOURCE_USED",
      "data": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "message": "string"
    }
  ],
  "zone": "string"
}
```

<h3 id="deploymentmanagerdeploymentsstop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman )
</aside>

## deploymentmanager.deployments.getIamPolicy

<a id="opIddeploymentmanager.deployments.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/deployments/string/getIamPolicy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /deploymentmanager/v2beta/projects/{project}/global/deployments/{resource}/getIamPolicy`

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

<h3 id="deploymentmanagerdeploymentsgetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID for this request.|
|resource|path|string|true|Name or id of the resource for this request.|
|optionsRequestedPolicyVersion|query|integer|false|Requested IAM Policy version.|
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
  "auditConfigs": [
    {
      "auditLogConfigs": [
        {
          "exemptedMembers": [
            "string"
          ],
          "logType": "LOG_TYPE_UNSPECIFIED"
        }
      ],
      "service": "string"
    }
  ],
  "bindings": [
    {
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string",
  "version": 0
}
```

<h3 id="deploymentmanagerdeploymentsgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman )
</aside>

## deploymentmanager.deployments.setIamPolicy

<a id="opIddeploymentmanager.deployments.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/deployments/string/setIamPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bindings": [
      {
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "members": [
          "string"
        ],
        "role": "string"
      }
    ],
    "etag": "string",
    "policy": {
      "auditConfigs": [
        {
          "auditLogConfigs": [
            {
              "exemptedMembers": [
                "string"
              ],
              "logType": "LOG_TYPE_UNSPECIFIED"
            }
          ],
          "service": "string"
        }
      ],
      "bindings": [
        {
          "condition": {
            "description": "string",
            "expression": "string",
            "location": "string",
            "title": "string"
          },
          "members": [
            "string"
          ],
          "role": "string"
        }
      ],
      "etag": "string",
      "version": 0
    }
  }'
```

`POST /deploymentmanager/v2beta/projects/{project}/global/deployments/{resource}/setIamPolicy`

Sets the access control policy on the specified resource. Replaces any existing policy.

> Body parameter

```json
{
  "bindings": [
    {
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string",
  "policy": {
    "auditConfigs": [
      {
        "auditLogConfigs": [
          {
            "exemptedMembers": [
              "string"
            ],
            "logType": "LOG_TYPE_UNSPECIFIED"
          }
        ],
        "service": "string"
      }
    ],
    "bindings": [
      {
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "members": [
          "string"
        ],
        "role": "string"
      }
    ],
    "etag": "string",
    "version": 0
  }
}
```

<h3 id="deploymentmanagerdeploymentssetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID for this request.|
|resource|path|string|true|Name or id of the resource for this request.|
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
|body|body|[GlobalSetPolicyRequest](#schemaglobalsetpolicyrequest)|false|none|
|» bindings|body|[[Binding](#schemabinding)]|false|Flatten Policy to create a backward compatible wire-format. Deprecated. Use 'policy' to specify bindings.|
|» etag|body|string(byte)|false|Flatten Policy to create a backward compatible wire-format. Deprecated. Use 'policy' to specify the etag.|
|» policy|body|[Policy](#schemapolicy)|false|REQUIRED: The complete policy to be applied to the 'resource'. The size of the policy is limited to a few 10s of KB. An empty policy is in general a valid policy but certain services (like Projects) might reject them.|

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
  "auditConfigs": [
    {
      "auditLogConfigs": [
        {
          "exemptedMembers": [
            "string"
          ],
          "logType": "LOG_TYPE_UNSPECIFIED"
        }
      ],
      "service": "string"
    }
  ],
  "bindings": [
    {
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string",
  "version": 0
}
```

<h3 id="deploymentmanagerdeploymentssetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman )
</aside>

## deploymentmanager.deployments.testIamPermissions

<a id="opIddeploymentmanager.deployments.testIamPermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/deployments/string/testIamPermissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "permissions": [
      "string"
    ]
  }'
```

`POST /deploymentmanager/v2beta/projects/{project}/global/deployments/{resource}/testIamPermissions`

Returns permissions that a caller has on the specified resource.

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="deploymentmanagerdeploymentstestiampermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Project ID for this request.|
|resource|path|string|true|Name or id of the resource for this request.|
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
|body|body|[TestPermissionsRequest](#schematestpermissionsrequest)|false|none|
|» permissions|body|[string]|false|The set of permissions to check for the 'resource'. Permissions with wildcards (such as '*' or 'storage.*') are not allowed.|

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
  "permissions": [
    "string"
  ]
}
```

<h3 id="deploymentmanagerdeploymentstestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestPermissionsResponse](#schematestpermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman )
</aside>

<h1 id="cloud-deployment-manager-v2-api-manifests">manifests</h1>

## deploymentmanager.manifests.list

<a id="opIddeploymentmanager.manifests.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/deployments/string/manifests \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/manifests`

Lists all manifests for a given deployment.

<h3 id="deploymentmanagermanifestslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project ID for this request.|
|deployment|path|string|true|The name of the deployment for this request.|
|filter|query|string|false|A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:` operator can be used with string fields to match substrings. For non-string fields it is equivalent to the `=` operator. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`.|
|maxResults|query|integer|false|The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)|
|orderBy|query|string|false|Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.|
|pageToken|query|string|false|Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.|
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
  "manifests": [
    {
      "config": {
        "content": "string"
      },
      "expandedConfig": "string",
      "id": "string",
      "imports": [
        {
          "content": "string",
          "name": "string"
        }
      ],
      "insertTime": "string",
      "layout": "string",
      "manifestSizeBytes": "string",
      "manifestSizeLimitBytes": "string",
      "name": "string",
      "selfLink": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="deploymentmanagermanifestslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ManifestsListResponse](#schemamanifestslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly )
</aside>

## deploymentmanager.manifests.get

<a id="opIddeploymentmanager.manifests.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/deployments/string/manifests/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/manifests/{manifest}`

Gets information about a specific manifest.

<h3 id="deploymentmanagermanifestsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project ID for this request.|
|deployment|path|string|true|The name of the deployment for this request.|
|manifest|path|string|true|The name of the manifest for this request.|
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
  "config": {
    "content": "string"
  },
  "expandedConfig": "string",
  "id": "string",
  "imports": [
    {
      "content": "string",
      "name": "string"
    }
  ],
  "insertTime": "string",
  "layout": "string",
  "manifestSizeBytes": "string",
  "manifestSizeLimitBytes": "string",
  "name": "string",
  "selfLink": "string"
}
```

<h3 id="deploymentmanagermanifestsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Manifest](#schemamanifest)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly )
</aside>

<h1 id="cloud-deployment-manager-v2-api-operations">operations</h1>

## deploymentmanager.operations.list

<a id="opIddeploymentmanager.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /deploymentmanager/v2beta/projects/{project}/global/operations`

Lists all operations for a project.

<h3 id="deploymentmanageroperationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project ID for this request.|
|filter|query|string|false|A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:` operator can be used with string fields to match substrings. For non-string fields it is equivalent to the `=` operator. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`.|
|maxResults|query|integer|false|The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)|
|orderBy|query|string|false|Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.|
|pageToken|query|string|false|Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.|
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
      "clientOperationId": "string",
      "creationTimestamp": "string",
      "description": "string",
      "endTime": "string",
      "error": {
        "errors": [
          {
            "code": "string",
            "location": "string",
            "message": "string"
          }
        ]
      },
      "httpErrorMessage": "string",
      "httpErrorStatusCode": 0,
      "id": "string",
      "insertTime": "string",
      "kind": "compute#operation",
      "name": "string",
      "operationGroupId": "string",
      "operationType": "string",
      "progress": 0,
      "region": "string",
      "selfLink": "string",
      "startTime": "string",
      "status": "PENDING",
      "statusMessage": "string",
      "targetId": "string",
      "targetLink": "string",
      "user": "string",
      "warnings": [
        {
          "code": "DEPRECATED_RESOURCE_USED",
          "data": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "message": "string"
        }
      ],
      "zone": "string"
    }
  ]
}
```

<h3 id="deploymentmanageroperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[OperationsListResponse](#schemaoperationslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly )
</aside>

## deploymentmanager.operations.get

<a id="opIddeploymentmanager.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/operations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /deploymentmanager/v2beta/projects/{project}/global/operations/{operation}`

Gets information about a specific operation.

<h3 id="deploymentmanageroperationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project ID for this request.|
|operation|path|string|true|The name of the operation for this request.|
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
  "clientOperationId": "string",
  "creationTimestamp": "string",
  "description": "string",
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "location": "string",
        "message": "string"
      }
    ]
  },
  "httpErrorMessage": "string",
  "httpErrorStatusCode": 0,
  "id": "string",
  "insertTime": "string",
  "kind": "compute#operation",
  "name": "string",
  "operationGroupId": "string",
  "operationType": "string",
  "progress": 0,
  "region": "string",
  "selfLink": "string",
  "startTime": "string",
  "status": "PENDING",
  "statusMessage": "string",
  "targetId": "string",
  "targetLink": "string",
  "user": "string",
  "warnings": [
    {
      "code": "DEPRECATED_RESOURCE_USED",
      "data": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "message": "string"
    }
  ],
  "zone": "string"
}
```

<h3 id="deploymentmanageroperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly )
</aside>

<h1 id="cloud-deployment-manager-v2-api-resources">resources</h1>

## deploymentmanager.resources.list

<a id="opIddeploymentmanager.resources.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/deployments/string/resources \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/resources`

Lists all resources in a given deployment.

<h3 id="deploymentmanagerresourceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project ID for this request.|
|deployment|path|string|true|The name of the deployment for this request.|
|filter|query|string|false|A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:` operator can be used with string fields to match substrings. For non-string fields it is equivalent to the `=` operator. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`.|
|maxResults|query|integer|false|The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)|
|orderBy|query|string|false|Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.|
|pageToken|query|string|false|Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.|
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
  "resources": [
    {
      "accessControl": {
        "gcpIamPolicy": "string"
      },
      "finalProperties": "string",
      "id": "string",
      "insertTime": "string",
      "manifest": "string",
      "name": "string",
      "properties": "string",
      "type": "string",
      "update": {
        "accessControl": {
          "gcpIamPolicy": "string"
        },
        "error": {
          "errors": [
            {
              "code": "string",
              "location": "string",
              "message": "string"
            }
          ]
        },
        "finalProperties": "string",
        "intent": "CREATE_OR_ACQUIRE",
        "manifest": "string",
        "properties": "string",
        "state": "PENDING",
        "warnings": [
          {
            "code": "DEPRECATED_RESOURCE_USED",
            "data": [
              {
                "key": "string",
                "value": "string"
              }
            ],
            "message": "string"
          }
        ]
      },
      "updateTime": "string",
      "url": "string",
      "warnings": [
        {
          "code": "DEPRECATED_RESOURCE_USED",
          "data": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "message": "string"
        }
      ]
    }
  ]
}
```

<h3 id="deploymentmanagerresourceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ResourcesListResponse](#schemaresourceslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly )
</aside>

## deploymentmanager.resources.get

<a id="opIddeploymentmanager.resources.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/deployments/string/resources/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/resources/{resource}`

Gets information about a single resource.

<h3 id="deploymentmanagerresourcesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project ID for this request.|
|deployment|path|string|true|The name of the deployment for this request.|
|resource|path|string|true|The name of the resource for this request.|
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
  "accessControl": {
    "gcpIamPolicy": "string"
  },
  "finalProperties": "string",
  "id": "string",
  "insertTime": "string",
  "manifest": "string",
  "name": "string",
  "properties": "string",
  "type": "string",
  "update": {
    "accessControl": {
      "gcpIamPolicy": "string"
    },
    "error": {
      "errors": [
        {
          "code": "string",
          "location": "string",
          "message": "string"
        }
      ]
    },
    "finalProperties": "string",
    "intent": "CREATE_OR_ACQUIRE",
    "manifest": "string",
    "properties": "string",
    "state": "PENDING",
    "warnings": [
      {
        "code": "DEPRECATED_RESOURCE_USED",
        "data": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "message": "string"
      }
    ]
  },
  "updateTime": "string",
  "url": "string",
  "warnings": [
    {
      "code": "DEPRECATED_RESOURCE_USED",
      "data": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "message": "string"
    }
  ]
}
```

<h3 id="deploymentmanagerresourcesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Resource](#schemaresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly )
</aside>

<h1 id="cloud-deployment-manager-v2-api-typeproviders">typeProviders</h1>

## deploymentmanager.typeProviders.list

<a id="opIddeploymentmanager.typeProviders.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/typeProviders \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /deploymentmanager/v2beta/projects/{project}/global/typeProviders`

Lists all resource type providers for Deployment Manager.

<h3 id="deploymentmanagertypeproviderslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project ID for this request.|
|filter|query|string|false|A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:` operator can be used with string fields to match substrings. For non-string fields it is equivalent to the `=` operator. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`.|
|maxResults|query|integer|false|The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)|
|orderBy|query|string|false|Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.|
|pageToken|query|string|false|Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.|
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
  "typeProviders": [
    {
      "collectionOverrides": [
        {
          "collection": "string",
          "options": {
            "asyncOptions": [
              {
                "methodMatch": "string",
                "pollingOptions": {
                  "diagnostics": [
                    {
                      "field": "string",
                      "level": "UNKNOWN"
                    }
                  ],
                  "failCondition": "string",
                  "finishCondition": "string",
                  "pollingLink": "string",
                  "targetLink": "string"
                }
              }
            ],
            "inputMappings": [
              {
                "fieldName": "string",
                "location": "UNKNOWN",
                "methodMatch": "string",
                "value": "string"
              }
            ],
            "validationOptions": {
              "schemaValidation": "UNKNOWN",
              "undeclaredProperties": "UNKNOWN"
            },
            "virtualProperties": "string"
          }
        }
      ],
      "credential": {
        "basicAuth": {
          "password": "string",
          "user": "string"
        },
        "serviceAccount": {
          "email": "string"
        },
        "useProjectDefault": true
      },
      "customCertificateAuthorityRoots": [
        "string"
      ],
      "description": "string",
      "descriptorUrl": "string",
      "id": "string",
      "insertTime": "string",
      "labels": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "name": "string",
      "operation": {
        "clientOperationId": "string",
        "creationTimestamp": "string",
        "description": "string",
        "endTime": "string",
        "error": {
          "errors": [
            {
              "code": "string",
              "location": "string",
              "message": "string"
            }
          ]
        },
        "httpErrorMessage": "string",
        "httpErrorStatusCode": 0,
        "id": "string",
        "insertTime": "string",
        "kind": "compute#operation",
        "name": "string",
        "operationGroupId": "string",
        "operationType": "string",
        "progress": 0,
        "region": "string",
        "selfLink": "string",
        "startTime": "string",
        "status": "PENDING",
        "statusMessage": "string",
        "targetId": "string",
        "targetLink": "string",
        "user": "string",
        "warnings": [
          {
            "code": "DEPRECATED_RESOURCE_USED",
            "data": [
              {
                "key": "string",
                "value": "string"
              }
            ],
            "message": "string"
          }
        ],
        "zone": "string"
      },
      "options": {
        "asyncOptions": [
          {
            "methodMatch": "string",
            "pollingOptions": {
              "diagnostics": [
                {
                  "field": "string",
                  "level": "UNKNOWN"
                }
              ],
              "failCondition": "string",
              "finishCondition": "string",
              "pollingLink": "string",
              "targetLink": "string"
            }
          }
        ],
        "inputMappings": [
          {
            "fieldName": "string",
            "location": "UNKNOWN",
            "methodMatch": "string",
            "value": "string"
          }
        ],
        "validationOptions": {
          "schemaValidation": "UNKNOWN",
          "undeclaredProperties": "UNKNOWN"
        },
        "virtualProperties": "string"
      },
      "selfLink": "string"
    }
  ]
}
```

<h3 id="deploymentmanagertypeproviderslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TypeProvidersListResponse](#schematypeproviderslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly )
</aside>

## deploymentmanager.typeProviders.insert

<a id="opIddeploymentmanager.typeProviders.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/typeProviders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "collectionOverrides": [
      {
        "collection": "string",
        "options": {
          "asyncOptions": [
            {
              "methodMatch": "string",
              "pollingOptions": {
                "diagnostics": [
                  {
                    "field": "string",
                    "level": "UNKNOWN"
                  }
                ],
                "failCondition": "string",
                "finishCondition": "string",
                "pollingLink": "string",
                "targetLink": "string"
              }
            }
          ],
          "inputMappings": [
            {
              "fieldName": "string",
              "location": "UNKNOWN",
              "methodMatch": "string",
              "value": "string"
            }
          ],
          "validationOptions": {
            "schemaValidation": "UNKNOWN",
            "undeclaredProperties": "UNKNOWN"
          },
          "virtualProperties": "string"
        }
      }
    ],
    "credential": {
      "basicAuth": {
        "password": "string",
        "user": "string"
      },
      "serviceAccount": {
        "email": "string"
      },
      "useProjectDefault": true
    },
    "customCertificateAuthorityRoots": [
      "string"
    ],
    "description": "string",
    "descriptorUrl": "string",
    "id": "string",
    "insertTime": "string",
    "labels": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "name": "string",
    "operation": {
      "clientOperationId": "string",
      "creationTimestamp": "string",
      "description": "string",
      "endTime": "string",
      "error": {
        "errors": [
          {
            "code": "string",
            "location": "string",
            "message": "string"
          }
        ]
      },
      "httpErrorMessage": "string",
      "httpErrorStatusCode": 0,
      "id": "string",
      "insertTime": "string",
      "kind": "compute#operation",
      "name": "string",
      "operationGroupId": "string",
      "operationType": "string",
      "progress": 0,
      "region": "string",
      "selfLink": "string",
      "startTime": "string",
      "status": "PENDING",
      "statusMessage": "string",
      "targetId": "string",
      "targetLink": "string",
      "user": "string",
      "warnings": [
        {
          "code": "DEPRECATED_RESOURCE_USED",
          "data": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "message": "string"
        }
      ],
      "zone": "string"
    },
    "options": {
      "asyncOptions": [
        {
          "methodMatch": "string",
          "pollingOptions": {
            "diagnostics": [
              {
                "field": "string",
                "level": "UNKNOWN"
              }
            ],
            "failCondition": "string",
            "finishCondition": "string",
            "pollingLink": "string",
            "targetLink": "string"
          }
        }
      ],
      "inputMappings": [
        {
          "fieldName": "string",
          "location": "UNKNOWN",
          "methodMatch": "string",
          "value": "string"
        }
      ],
      "validationOptions": {
        "schemaValidation": "UNKNOWN",
        "undeclaredProperties": "UNKNOWN"
      },
      "virtualProperties": "string"
    },
    "selfLink": "string"
  }'
```

`POST /deploymentmanager/v2beta/projects/{project}/global/typeProviders`

Creates a type provider.

> Body parameter

```json
{
  "collectionOverrides": [
    {
      "collection": "string",
      "options": {
        "asyncOptions": [
          {
            "methodMatch": "string",
            "pollingOptions": {
              "diagnostics": [
                {
                  "field": "string",
                  "level": "UNKNOWN"
                }
              ],
              "failCondition": "string",
              "finishCondition": "string",
              "pollingLink": "string",
              "targetLink": "string"
            }
          }
        ],
        "inputMappings": [
          {
            "fieldName": "string",
            "location": "UNKNOWN",
            "methodMatch": "string",
            "value": "string"
          }
        ],
        "validationOptions": {
          "schemaValidation": "UNKNOWN",
          "undeclaredProperties": "UNKNOWN"
        },
        "virtualProperties": "string"
      }
    }
  ],
  "credential": {
    "basicAuth": {
      "password": "string",
      "user": "string"
    },
    "serviceAccount": {
      "email": "string"
    },
    "useProjectDefault": true
  },
  "customCertificateAuthorityRoots": [
    "string"
  ],
  "description": "string",
  "descriptorUrl": "string",
  "id": "string",
  "insertTime": "string",
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "operation": {
    "clientOperationId": "string",
    "creationTimestamp": "string",
    "description": "string",
    "endTime": "string",
    "error": {
      "errors": [
        {
          "code": "string",
          "location": "string",
          "message": "string"
        }
      ]
    },
    "httpErrorMessage": "string",
    "httpErrorStatusCode": 0,
    "id": "string",
    "insertTime": "string",
    "kind": "compute#operation",
    "name": "string",
    "operationGroupId": "string",
    "operationType": "string",
    "progress": 0,
    "region": "string",
    "selfLink": "string",
    "startTime": "string",
    "status": "PENDING",
    "statusMessage": "string",
    "targetId": "string",
    "targetLink": "string",
    "user": "string",
    "warnings": [
      {
        "code": "DEPRECATED_RESOURCE_USED",
        "data": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "message": "string"
      }
    ],
    "zone": "string"
  },
  "options": {
    "asyncOptions": [
      {
        "methodMatch": "string",
        "pollingOptions": {
          "diagnostics": [
            {
              "field": "string",
              "level": "UNKNOWN"
            }
          ],
          "failCondition": "string",
          "finishCondition": "string",
          "pollingLink": "string",
          "targetLink": "string"
        }
      }
    ],
    "inputMappings": [
      {
        "fieldName": "string",
        "location": "UNKNOWN",
        "methodMatch": "string",
        "value": "string"
      }
    ],
    "validationOptions": {
      "schemaValidation": "UNKNOWN",
      "undeclaredProperties": "UNKNOWN"
    },
    "virtualProperties": "string"
  },
  "selfLink": "string"
}
```

<h3 id="deploymentmanagertypeprovidersinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project ID for this request.|
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
|body|body|[TypeProvider](#schematypeprovider)|false|none|
|» collectionOverrides|body|[[CollectionOverride](#schemacollectionoverride)]|false|Allows resource handling overrides for specific collections|
|» credential|body|[Credential](#schemacredential)|false|Credential used when interacting with this type.|
|» customCertificateAuthorityRoots|body|[string]|false|List of up to 2 custom certificate authority roots to use for TLS authentication when making calls on behalf of this type provider. If set, TLS authentication will exclusively use these roots instead of relying on publicly trusted certificate authorities when validating TLS certificate authenticity. The certificates must be in base64-encoded PEM format. The maximum size of each certificate must not exceed 10KB.|
|» description|body|string|false|An optional textual description of the resource; provided by the client when the resource is created.|
|» descriptorUrl|body|string|false|Descriptor Url for the this type provider.|
|» id|body|string(uint64)|false|Output only. Unique identifier for the resource defined by the server.|
|» insertTime|body|string|false|Output only. Creation timestamp in RFC3339 text format.|
|» labels|body|[[TypeProviderLabelEntry](#schematypeproviderlabelentry)]|false|Map of One Platform labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`|
|» name|body|string|false|Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.|
|» operation|body|[Operation](#schemaoperation)|false|Output only. The Operation that most recently ran, or is currently running, on this type provider.|
|» options|body|[Options](#schemaoptions)|false|Options to apply when handling any resources in this service.|
|» selfLink|body|string|false|Output only. Self link for the type provider.|

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
  "clientOperationId": "string",
  "creationTimestamp": "string",
  "description": "string",
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "location": "string",
        "message": "string"
      }
    ]
  },
  "httpErrorMessage": "string",
  "httpErrorStatusCode": 0,
  "id": "string",
  "insertTime": "string",
  "kind": "compute#operation",
  "name": "string",
  "operationGroupId": "string",
  "operationType": "string",
  "progress": 0,
  "region": "string",
  "selfLink": "string",
  "startTime": "string",
  "status": "PENDING",
  "statusMessage": "string",
  "targetId": "string",
  "targetLink": "string",
  "user": "string",
  "warnings": [
    {
      "code": "DEPRECATED_RESOURCE_USED",
      "data": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "message": "string"
    }
  ],
  "zone": "string"
}
```

<h3 id="deploymentmanagertypeprovidersinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman )
</aside>

## deploymentmanager.typeProviders.get

<a id="opIddeploymentmanager.typeProviders.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/typeProviders/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /deploymentmanager/v2beta/projects/{project}/global/typeProviders/{typeProvider}`

Gets information about a specific type provider.

<h3 id="deploymentmanagertypeprovidersget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project ID for this request.|
|typeProvider|path|string|true|The name of the type provider for this request.|
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
  "collectionOverrides": [
    {
      "collection": "string",
      "options": {
        "asyncOptions": [
          {
            "methodMatch": "string",
            "pollingOptions": {
              "diagnostics": [
                {
                  "field": "string",
                  "level": "UNKNOWN"
                }
              ],
              "failCondition": "string",
              "finishCondition": "string",
              "pollingLink": "string",
              "targetLink": "string"
            }
          }
        ],
        "inputMappings": [
          {
            "fieldName": "string",
            "location": "UNKNOWN",
            "methodMatch": "string",
            "value": "string"
          }
        ],
        "validationOptions": {
          "schemaValidation": "UNKNOWN",
          "undeclaredProperties": "UNKNOWN"
        },
        "virtualProperties": "string"
      }
    }
  ],
  "credential": {
    "basicAuth": {
      "password": "string",
      "user": "string"
    },
    "serviceAccount": {
      "email": "string"
    },
    "useProjectDefault": true
  },
  "customCertificateAuthorityRoots": [
    "string"
  ],
  "description": "string",
  "descriptorUrl": "string",
  "id": "string",
  "insertTime": "string",
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "operation": {
    "clientOperationId": "string",
    "creationTimestamp": "string",
    "description": "string",
    "endTime": "string",
    "error": {
      "errors": [
        {
          "code": "string",
          "location": "string",
          "message": "string"
        }
      ]
    },
    "httpErrorMessage": "string",
    "httpErrorStatusCode": 0,
    "id": "string",
    "insertTime": "string",
    "kind": "compute#operation",
    "name": "string",
    "operationGroupId": "string",
    "operationType": "string",
    "progress": 0,
    "region": "string",
    "selfLink": "string",
    "startTime": "string",
    "status": "PENDING",
    "statusMessage": "string",
    "targetId": "string",
    "targetLink": "string",
    "user": "string",
    "warnings": [
      {
        "code": "DEPRECATED_RESOURCE_USED",
        "data": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "message": "string"
      }
    ],
    "zone": "string"
  },
  "options": {
    "asyncOptions": [
      {
        "methodMatch": "string",
        "pollingOptions": {
          "diagnostics": [
            {
              "field": "string",
              "level": "UNKNOWN"
            }
          ],
          "failCondition": "string",
          "finishCondition": "string",
          "pollingLink": "string",
          "targetLink": "string"
        }
      }
    ],
    "inputMappings": [
      {
        "fieldName": "string",
        "location": "UNKNOWN",
        "methodMatch": "string",
        "value": "string"
      }
    ],
    "validationOptions": {
      "schemaValidation": "UNKNOWN",
      "undeclaredProperties": "UNKNOWN"
    },
    "virtualProperties": "string"
  },
  "selfLink": "string"
}
```

<h3 id="deploymentmanagertypeprovidersget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TypeProvider](#schematypeprovider)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly )
</aside>

## deploymentmanager.typeProviders.update

<a id="opIddeploymentmanager.typeProviders.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/typeProviders/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "collectionOverrides": [
      {
        "collection": "string",
        "options": {
          "asyncOptions": [
            {
              "methodMatch": "string",
              "pollingOptions": {
                "diagnostics": [
                  {
                    "field": "string",
                    "level": "UNKNOWN"
                  }
                ],
                "failCondition": "string",
                "finishCondition": "string",
                "pollingLink": "string",
                "targetLink": "string"
              }
            }
          ],
          "inputMappings": [
            {
              "fieldName": "string",
              "location": "UNKNOWN",
              "methodMatch": "string",
              "value": "string"
            }
          ],
          "validationOptions": {
            "schemaValidation": "UNKNOWN",
            "undeclaredProperties": "UNKNOWN"
          },
          "virtualProperties": "string"
        }
      }
    ],
    "credential": {
      "basicAuth": {
        "password": "string",
        "user": "string"
      },
      "serviceAccount": {
        "email": "string"
      },
      "useProjectDefault": true
    },
    "customCertificateAuthorityRoots": [
      "string"
    ],
    "description": "string",
    "descriptorUrl": "string",
    "id": "string",
    "insertTime": "string",
    "labels": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "name": "string",
    "operation": {
      "clientOperationId": "string",
      "creationTimestamp": "string",
      "description": "string",
      "endTime": "string",
      "error": {
        "errors": [
          {
            "code": "string",
            "location": "string",
            "message": "string"
          }
        ]
      },
      "httpErrorMessage": "string",
      "httpErrorStatusCode": 0,
      "id": "string",
      "insertTime": "string",
      "kind": "compute#operation",
      "name": "string",
      "operationGroupId": "string",
      "operationType": "string",
      "progress": 0,
      "region": "string",
      "selfLink": "string",
      "startTime": "string",
      "status": "PENDING",
      "statusMessage": "string",
      "targetId": "string",
      "targetLink": "string",
      "user": "string",
      "warnings": [
        {
          "code": "DEPRECATED_RESOURCE_USED",
          "data": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "message": "string"
        }
      ],
      "zone": "string"
    },
    "options": {
      "asyncOptions": [
        {
          "methodMatch": "string",
          "pollingOptions": {
            "diagnostics": [
              {
                "field": "string",
                "level": "UNKNOWN"
              }
            ],
            "failCondition": "string",
            "finishCondition": "string",
            "pollingLink": "string",
            "targetLink": "string"
          }
        }
      ],
      "inputMappings": [
        {
          "fieldName": "string",
          "location": "UNKNOWN",
          "methodMatch": "string",
          "value": "string"
        }
      ],
      "validationOptions": {
        "schemaValidation": "UNKNOWN",
        "undeclaredProperties": "UNKNOWN"
      },
      "virtualProperties": "string"
    },
    "selfLink": "string"
  }'
```

`PUT /deploymentmanager/v2beta/projects/{project}/global/typeProviders/{typeProvider}`

Updates a type provider.

> Body parameter

```json
{
  "collectionOverrides": [
    {
      "collection": "string",
      "options": {
        "asyncOptions": [
          {
            "methodMatch": "string",
            "pollingOptions": {
              "diagnostics": [
                {
                  "field": "string",
                  "level": "UNKNOWN"
                }
              ],
              "failCondition": "string",
              "finishCondition": "string",
              "pollingLink": "string",
              "targetLink": "string"
            }
          }
        ],
        "inputMappings": [
          {
            "fieldName": "string",
            "location": "UNKNOWN",
            "methodMatch": "string",
            "value": "string"
          }
        ],
        "validationOptions": {
          "schemaValidation": "UNKNOWN",
          "undeclaredProperties": "UNKNOWN"
        },
        "virtualProperties": "string"
      }
    }
  ],
  "credential": {
    "basicAuth": {
      "password": "string",
      "user": "string"
    },
    "serviceAccount": {
      "email": "string"
    },
    "useProjectDefault": true
  },
  "customCertificateAuthorityRoots": [
    "string"
  ],
  "description": "string",
  "descriptorUrl": "string",
  "id": "string",
  "insertTime": "string",
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "operation": {
    "clientOperationId": "string",
    "creationTimestamp": "string",
    "description": "string",
    "endTime": "string",
    "error": {
      "errors": [
        {
          "code": "string",
          "location": "string",
          "message": "string"
        }
      ]
    },
    "httpErrorMessage": "string",
    "httpErrorStatusCode": 0,
    "id": "string",
    "insertTime": "string",
    "kind": "compute#operation",
    "name": "string",
    "operationGroupId": "string",
    "operationType": "string",
    "progress": 0,
    "region": "string",
    "selfLink": "string",
    "startTime": "string",
    "status": "PENDING",
    "statusMessage": "string",
    "targetId": "string",
    "targetLink": "string",
    "user": "string",
    "warnings": [
      {
        "code": "DEPRECATED_RESOURCE_USED",
        "data": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "message": "string"
      }
    ],
    "zone": "string"
  },
  "options": {
    "asyncOptions": [
      {
        "methodMatch": "string",
        "pollingOptions": {
          "diagnostics": [
            {
              "field": "string",
              "level": "UNKNOWN"
            }
          ],
          "failCondition": "string",
          "finishCondition": "string",
          "pollingLink": "string",
          "targetLink": "string"
        }
      }
    ],
    "inputMappings": [
      {
        "fieldName": "string",
        "location": "UNKNOWN",
        "methodMatch": "string",
        "value": "string"
      }
    ],
    "validationOptions": {
      "schemaValidation": "UNKNOWN",
      "undeclaredProperties": "UNKNOWN"
    },
    "virtualProperties": "string"
  },
  "selfLink": "string"
}
```

<h3 id="deploymentmanagertypeprovidersupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project ID for this request.|
|typeProvider|path|string|true|The name of the type provider for this request.|
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
|body|body|[TypeProvider](#schematypeprovider)|false|none|
|» collectionOverrides|body|[[CollectionOverride](#schemacollectionoverride)]|false|Allows resource handling overrides for specific collections|
|» credential|body|[Credential](#schemacredential)|false|Credential used when interacting with this type.|
|» customCertificateAuthorityRoots|body|[string]|false|List of up to 2 custom certificate authority roots to use for TLS authentication when making calls on behalf of this type provider. If set, TLS authentication will exclusively use these roots instead of relying on publicly trusted certificate authorities when validating TLS certificate authenticity. The certificates must be in base64-encoded PEM format. The maximum size of each certificate must not exceed 10KB.|
|» description|body|string|false|An optional textual description of the resource; provided by the client when the resource is created.|
|» descriptorUrl|body|string|false|Descriptor Url for the this type provider.|
|» id|body|string(uint64)|false|Output only. Unique identifier for the resource defined by the server.|
|» insertTime|body|string|false|Output only. Creation timestamp in RFC3339 text format.|
|» labels|body|[[TypeProviderLabelEntry](#schematypeproviderlabelentry)]|false|Map of One Platform labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`|
|» name|body|string|false|Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.|
|» operation|body|[Operation](#schemaoperation)|false|Output only. The Operation that most recently ran, or is currently running, on this type provider.|
|» options|body|[Options](#schemaoptions)|false|Options to apply when handling any resources in this service.|
|» selfLink|body|string|false|Output only. Self link for the type provider.|

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
  "clientOperationId": "string",
  "creationTimestamp": "string",
  "description": "string",
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "location": "string",
        "message": "string"
      }
    ]
  },
  "httpErrorMessage": "string",
  "httpErrorStatusCode": 0,
  "id": "string",
  "insertTime": "string",
  "kind": "compute#operation",
  "name": "string",
  "operationGroupId": "string",
  "operationType": "string",
  "progress": 0,
  "region": "string",
  "selfLink": "string",
  "startTime": "string",
  "status": "PENDING",
  "statusMessage": "string",
  "targetId": "string",
  "targetLink": "string",
  "user": "string",
  "warnings": [
    {
      "code": "DEPRECATED_RESOURCE_USED",
      "data": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "message": "string"
    }
  ],
  "zone": "string"
}
```

<h3 id="deploymentmanagertypeprovidersupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman )
</aside>

## deploymentmanager.typeProviders.delete

<a id="opIddeploymentmanager.typeProviders.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/typeProviders/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /deploymentmanager/v2beta/projects/{project}/global/typeProviders/{typeProvider}`

Deletes a type provider.

<h3 id="deploymentmanagertypeprovidersdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project ID for this request.|
|typeProvider|path|string|true|The name of the type provider for this request.|
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
  "clientOperationId": "string",
  "creationTimestamp": "string",
  "description": "string",
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "location": "string",
        "message": "string"
      }
    ]
  },
  "httpErrorMessage": "string",
  "httpErrorStatusCode": 0,
  "id": "string",
  "insertTime": "string",
  "kind": "compute#operation",
  "name": "string",
  "operationGroupId": "string",
  "operationType": "string",
  "progress": 0,
  "region": "string",
  "selfLink": "string",
  "startTime": "string",
  "status": "PENDING",
  "statusMessage": "string",
  "targetId": "string",
  "targetLink": "string",
  "user": "string",
  "warnings": [
    {
      "code": "DEPRECATED_RESOURCE_USED",
      "data": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "message": "string"
    }
  ],
  "zone": "string"
}
```

<h3 id="deploymentmanagertypeprovidersdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman )
</aside>

## deploymentmanager.typeProviders.patch

<a id="opIddeploymentmanager.typeProviders.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/typeProviders/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "collectionOverrides": [
      {
        "collection": "string",
        "options": {
          "asyncOptions": [
            {
              "methodMatch": "string",
              "pollingOptions": {
                "diagnostics": [
                  {
                    "field": "string",
                    "level": "UNKNOWN"
                  }
                ],
                "failCondition": "string",
                "finishCondition": "string",
                "pollingLink": "string",
                "targetLink": "string"
              }
            }
          ],
          "inputMappings": [
            {
              "fieldName": "string",
              "location": "UNKNOWN",
              "methodMatch": "string",
              "value": "string"
            }
          ],
          "validationOptions": {
            "schemaValidation": "UNKNOWN",
            "undeclaredProperties": "UNKNOWN"
          },
          "virtualProperties": "string"
        }
      }
    ],
    "credential": {
      "basicAuth": {
        "password": "string",
        "user": "string"
      },
      "serviceAccount": {
        "email": "string"
      },
      "useProjectDefault": true
    },
    "customCertificateAuthorityRoots": [
      "string"
    ],
    "description": "string",
    "descriptorUrl": "string",
    "id": "string",
    "insertTime": "string",
    "labels": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "name": "string",
    "operation": {
      "clientOperationId": "string",
      "creationTimestamp": "string",
      "description": "string",
      "endTime": "string",
      "error": {
        "errors": [
          {
            "code": "string",
            "location": "string",
            "message": "string"
          }
        ]
      },
      "httpErrorMessage": "string",
      "httpErrorStatusCode": 0,
      "id": "string",
      "insertTime": "string",
      "kind": "compute#operation",
      "name": "string",
      "operationGroupId": "string",
      "operationType": "string",
      "progress": 0,
      "region": "string",
      "selfLink": "string",
      "startTime": "string",
      "status": "PENDING",
      "statusMessage": "string",
      "targetId": "string",
      "targetLink": "string",
      "user": "string",
      "warnings": [
        {
          "code": "DEPRECATED_RESOURCE_USED",
          "data": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "message": "string"
        }
      ],
      "zone": "string"
    },
    "options": {
      "asyncOptions": [
        {
          "methodMatch": "string",
          "pollingOptions": {
            "diagnostics": [
              {
                "field": "string",
                "level": "UNKNOWN"
              }
            ],
            "failCondition": "string",
            "finishCondition": "string",
            "pollingLink": "string",
            "targetLink": "string"
          }
        }
      ],
      "inputMappings": [
        {
          "fieldName": "string",
          "location": "UNKNOWN",
          "methodMatch": "string",
          "value": "string"
        }
      ],
      "validationOptions": {
        "schemaValidation": "UNKNOWN",
        "undeclaredProperties": "UNKNOWN"
      },
      "virtualProperties": "string"
    },
    "selfLink": "string"
  }'
```

`PATCH /deploymentmanager/v2beta/projects/{project}/global/typeProviders/{typeProvider}`

Patches a type provider.

> Body parameter

```json
{
  "collectionOverrides": [
    {
      "collection": "string",
      "options": {
        "asyncOptions": [
          {
            "methodMatch": "string",
            "pollingOptions": {
              "diagnostics": [
                {
                  "field": "string",
                  "level": "UNKNOWN"
                }
              ],
              "failCondition": "string",
              "finishCondition": "string",
              "pollingLink": "string",
              "targetLink": "string"
            }
          }
        ],
        "inputMappings": [
          {
            "fieldName": "string",
            "location": "UNKNOWN",
            "methodMatch": "string",
            "value": "string"
          }
        ],
        "validationOptions": {
          "schemaValidation": "UNKNOWN",
          "undeclaredProperties": "UNKNOWN"
        },
        "virtualProperties": "string"
      }
    }
  ],
  "credential": {
    "basicAuth": {
      "password": "string",
      "user": "string"
    },
    "serviceAccount": {
      "email": "string"
    },
    "useProjectDefault": true
  },
  "customCertificateAuthorityRoots": [
    "string"
  ],
  "description": "string",
  "descriptorUrl": "string",
  "id": "string",
  "insertTime": "string",
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "operation": {
    "clientOperationId": "string",
    "creationTimestamp": "string",
    "description": "string",
    "endTime": "string",
    "error": {
      "errors": [
        {
          "code": "string",
          "location": "string",
          "message": "string"
        }
      ]
    },
    "httpErrorMessage": "string",
    "httpErrorStatusCode": 0,
    "id": "string",
    "insertTime": "string",
    "kind": "compute#operation",
    "name": "string",
    "operationGroupId": "string",
    "operationType": "string",
    "progress": 0,
    "region": "string",
    "selfLink": "string",
    "startTime": "string",
    "status": "PENDING",
    "statusMessage": "string",
    "targetId": "string",
    "targetLink": "string",
    "user": "string",
    "warnings": [
      {
        "code": "DEPRECATED_RESOURCE_USED",
        "data": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "message": "string"
      }
    ],
    "zone": "string"
  },
  "options": {
    "asyncOptions": [
      {
        "methodMatch": "string",
        "pollingOptions": {
          "diagnostics": [
            {
              "field": "string",
              "level": "UNKNOWN"
            }
          ],
          "failCondition": "string",
          "finishCondition": "string",
          "pollingLink": "string",
          "targetLink": "string"
        }
      }
    ],
    "inputMappings": [
      {
        "fieldName": "string",
        "location": "UNKNOWN",
        "methodMatch": "string",
        "value": "string"
      }
    ],
    "validationOptions": {
      "schemaValidation": "UNKNOWN",
      "undeclaredProperties": "UNKNOWN"
    },
    "virtualProperties": "string"
  },
  "selfLink": "string"
}
```

<h3 id="deploymentmanagertypeproviderspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project ID for this request.|
|typeProvider|path|string|true|The name of the type provider for this request.|
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
|body|body|[TypeProvider](#schematypeprovider)|false|none|
|» collectionOverrides|body|[[CollectionOverride](#schemacollectionoverride)]|false|Allows resource handling overrides for specific collections|
|» credential|body|[Credential](#schemacredential)|false|Credential used when interacting with this type.|
|» customCertificateAuthorityRoots|body|[string]|false|List of up to 2 custom certificate authority roots to use for TLS authentication when making calls on behalf of this type provider. If set, TLS authentication will exclusively use these roots instead of relying on publicly trusted certificate authorities when validating TLS certificate authenticity. The certificates must be in base64-encoded PEM format. The maximum size of each certificate must not exceed 10KB.|
|» description|body|string|false|An optional textual description of the resource; provided by the client when the resource is created.|
|» descriptorUrl|body|string|false|Descriptor Url for the this type provider.|
|» id|body|string(uint64)|false|Output only. Unique identifier for the resource defined by the server.|
|» insertTime|body|string|false|Output only. Creation timestamp in RFC3339 text format.|
|» labels|body|[[TypeProviderLabelEntry](#schematypeproviderlabelentry)]|false|Map of One Platform labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`|
|» name|body|string|false|Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.|
|» operation|body|[Operation](#schemaoperation)|false|Output only. The Operation that most recently ran, or is currently running, on this type provider.|
|» options|body|[Options](#schemaoptions)|false|Options to apply when handling any resources in this service.|
|» selfLink|body|string|false|Output only. Self link for the type provider.|

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
  "clientOperationId": "string",
  "creationTimestamp": "string",
  "description": "string",
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "location": "string",
        "message": "string"
      }
    ]
  },
  "httpErrorMessage": "string",
  "httpErrorStatusCode": 0,
  "id": "string",
  "insertTime": "string",
  "kind": "compute#operation",
  "name": "string",
  "operationGroupId": "string",
  "operationType": "string",
  "progress": 0,
  "region": "string",
  "selfLink": "string",
  "startTime": "string",
  "status": "PENDING",
  "statusMessage": "string",
  "targetId": "string",
  "targetLink": "string",
  "user": "string",
  "warnings": [
    {
      "code": "DEPRECATED_RESOURCE_USED",
      "data": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "message": "string"
    }
  ],
  "zone": "string"
}
```

<h3 id="deploymentmanagertypeproviderspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman )
</aside>

## deploymentmanager.typeProviders.listTypes

<a id="opIddeploymentmanager.typeProviders.listTypes"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/typeProviders/string/types \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /deploymentmanager/v2beta/projects/{project}/global/typeProviders/{typeProvider}/types`

Lists all the type info for a TypeProvider.

<h3 id="deploymentmanagertypeproviderslisttypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project ID for this request.|
|typeProvider|path|string|true|The name of the type provider for this request.|
|filter|query|string|false|A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:` operator can be used with string fields to match substrings. For non-string fields it is equivalent to the `=` operator. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`.|
|maxResults|query|integer|false|The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)|
|orderBy|query|string|false|Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.|
|pageToken|query|string|false|Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.|
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
  "types": [
    {
      "description": "string",
      "documentationLink": "string",
      "kind": "string",
      "name": "string",
      "schema": {
        "input": "string",
        "output": "string"
      },
      "selfLink": "string",
      "title": "string"
    }
  ]
}
```

<h3 id="deploymentmanagertypeproviderslisttypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TypeProvidersListTypesResponse](#schematypeproviderslisttypesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly )
</aside>

## deploymentmanager.typeProviders.getType

<a id="opIddeploymentmanager.typeProviders.getType"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/typeProviders/string/types/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /deploymentmanager/v2beta/projects/{project}/global/typeProviders/{typeProvider}/types/{type}`

Gets a type info for a type provided by a TypeProvider.

<h3 id="deploymentmanagertypeprovidersgettype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project ID for this request.|
|typeProvider|path|string|true|The name of the type provider for this request.|
|type|path|string|true|The name of the type provider type for this request.|
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
  "description": "string",
  "documentationLink": "string",
  "kind": "string",
  "name": "string",
  "schema": {
    "input": "string",
    "output": "string"
  },
  "selfLink": "string",
  "title": "string"
}
```

<h3 id="deploymentmanagertypeprovidersgettype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TypeInfo](#schematypeinfo)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly )
</aside>

<h1 id="cloud-deployment-manager-v2-api-types">types</h1>

## deploymentmanager.types.list

<a id="opIddeploymentmanager.types.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/deploymentmanager/v2beta/projects/string/global/types \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /deploymentmanager/v2beta/projects/{project}/global/types`

Lists all resource types for Deployment Manager.

<h3 id="deploymentmanagertypeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The project ID for this request.|
|filter|query|string|false|A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:` operator can be used with string fields to match substrings. For non-string fields it is equivalent to the `=` operator. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`.|
|maxResults|query|integer|false|The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)|
|orderBy|query|string|false|Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.|
|pageToken|query|string|false|Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.|
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
  "types": [
    {
      "base": {
        "collectionOverrides": [
          {
            "collection": "string",
            "options": {
              "asyncOptions": [
                {
                  "methodMatch": "string",
                  "pollingOptions": {
                    "diagnostics": [
                      {
                        "field": "string",
                        "level": "UNKNOWN"
                      }
                    ],
                    "failCondition": "string",
                    "finishCondition": "string",
                    "pollingLink": "string",
                    "targetLink": "string"
                  }
                }
              ],
              "inputMappings": [
                {
                  "fieldName": "string",
                  "location": "UNKNOWN",
                  "methodMatch": "string",
                  "value": "string"
                }
              ],
              "validationOptions": {
                "schemaValidation": "UNKNOWN",
                "undeclaredProperties": "UNKNOWN"
              },
              "virtualProperties": "string"
            }
          }
        ],
        "credential": {
          "basicAuth": {
            "password": "string",
            "user": "string"
          },
          "serviceAccount": {
            "email": "string"
          },
          "useProjectDefault": true
        },
        "descriptorUrl": "string",
        "options": {
          "asyncOptions": [
            {
              "methodMatch": "string",
              "pollingOptions": {
                "diagnostics": [
                  {
                    "field": "string",
                    "level": "UNKNOWN"
                  }
                ],
                "failCondition": "string",
                "finishCondition": "string",
                "pollingLink": "string",
                "targetLink": "string"
              }
            }
          ],
          "inputMappings": [
            {
              "fieldName": "string",
              "location": "UNKNOWN",
              "methodMatch": "string",
              "value": "string"
            }
          ],
          "validationOptions": {
            "schemaValidation": "UNKNOWN",
            "undeclaredProperties": "UNKNOWN"
          },
          "virtualProperties": "string"
        }
      },
      "description": "string",
      "id": "string",
      "insertTime": "string",
      "labels": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "name": "string",
      "operation": {
        "clientOperationId": "string",
        "creationTimestamp": "string",
        "description": "string",
        "endTime": "string",
        "error": {
          "errors": [
            {
              "code": "string",
              "location": "string",
              "message": "string"
            }
          ]
        },
        "httpErrorMessage": "string",
        "httpErrorStatusCode": 0,
        "id": "string",
        "insertTime": "string",
        "kind": "compute#operation",
        "name": "string",
        "operationGroupId": "string",
        "operationType": "string",
        "progress": 0,
        "region": "string",
        "selfLink": "string",
        "startTime": "string",
        "status": "PENDING",
        "statusMessage": "string",
        "targetId": "string",
        "targetLink": "string",
        "user": "string",
        "warnings": [
          {
            "code": "DEPRECATED_RESOURCE_USED",
            "data": [
              {
                "key": "string",
                "value": "string"
              }
            ],
            "message": "string"
          }
        ],
        "zone": "string"
      },
      "selfLink": "string"
    }
  ]
}
```

<h3 id="deploymentmanagertypeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TypesListResponse](#schematypeslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.cloudman.readonly )
</aside>

# Schemas

<h2 id="tocS_AsyncOptions">AsyncOptions</h2>
<!-- backwards compatibility -->
<a id="schemaasyncoptions"></a>
<a id="schema_AsyncOptions"></a>
<a id="tocSasyncoptions"></a>
<a id="tocsasyncoptions"></a>

```json
{
  "methodMatch": "string",
  "pollingOptions": {
    "diagnostics": [
      {
        "field": "string",
        "level": "UNKNOWN"
      }
    ],
    "failCondition": "string",
    "finishCondition": "string",
    "pollingLink": "string",
    "targetLink": "string"
  }
}
```

Async options that determine when a resource should finish.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|methodMatch|string|false|none|Method regex where this policy will apply.|
|pollingOptions|[PollingOptions](#schemapollingoptions)|false|none|Deployment manager will poll instances for this API resource setting a RUNNING state, and blocking until polling conditions tell whether the resource is completed or failed.|

<h2 id="tocS_AuditConfig">AuditConfig</h2>
<!-- backwards compatibility -->
<a id="schemaauditconfig"></a>
<a id="schema_AuditConfig"></a>
<a id="tocSauditconfig"></a>
<a id="tocsauditconfig"></a>

```json
{
  "auditLogConfigs": [
    {
      "exemptedMembers": [
        "string"
      ],
      "logType": "LOG_TYPE_UNSPECIFIED"
    }
  ],
  "service": "string"
}
```

Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditLogConfigs|[[AuditLogConfig](#schemaauditlogconfig)]|false|none|The configuration for logging of each type of permission.|
|service|string|false|none|Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.|

<h2 id="tocS_AuditLogConfig">AuditLogConfig</h2>
<!-- backwards compatibility -->
<a id="schemaauditlogconfig"></a>
<a id="schema_AuditLogConfig"></a>
<a id="tocSauditlogconfig"></a>
<a id="tocsauditlogconfig"></a>

```json
{
  "exemptedMembers": [
    "string"
  ],
  "logType": "LOG_TYPE_UNSPECIFIED"
}
```

Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exemptedMembers|[string]|false|none|Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.|
|logType|string|false|none|The log type that this config enables.|

#### Enumerated Values

|Property|Value|
|---|---|
|logType|LOG_TYPE_UNSPECIFIED|
|logType|ADMIN_READ|
|logType|DATA_WRITE|
|logType|DATA_READ|

<h2 id="tocS_BaseType">BaseType</h2>
<!-- backwards compatibility -->
<a id="schemabasetype"></a>
<a id="schema_BaseType"></a>
<a id="tocSbasetype"></a>
<a id="tocsbasetype"></a>

```json
{
  "collectionOverrides": [
    {
      "collection": "string",
      "options": {
        "asyncOptions": [
          {
            "methodMatch": "string",
            "pollingOptions": {
              "diagnostics": [
                {
                  "field": "string",
                  "level": "UNKNOWN"
                }
              ],
              "failCondition": "string",
              "finishCondition": "string",
              "pollingLink": "string",
              "targetLink": "string"
            }
          }
        ],
        "inputMappings": [
          {
            "fieldName": "string",
            "location": "UNKNOWN",
            "methodMatch": "string",
            "value": "string"
          }
        ],
        "validationOptions": {
          "schemaValidation": "UNKNOWN",
          "undeclaredProperties": "UNKNOWN"
        },
        "virtualProperties": "string"
      }
    }
  ],
  "credential": {
    "basicAuth": {
      "password": "string",
      "user": "string"
    },
    "serviceAccount": {
      "email": "string"
    },
    "useProjectDefault": true
  },
  "descriptorUrl": "string",
  "options": {
    "asyncOptions": [
      {
        "methodMatch": "string",
        "pollingOptions": {
          "diagnostics": [
            {
              "field": "string",
              "level": "UNKNOWN"
            }
          ],
          "failCondition": "string",
          "finishCondition": "string",
          "pollingLink": "string",
          "targetLink": "string"
        }
      }
    ],
    "inputMappings": [
      {
        "fieldName": "string",
        "location": "UNKNOWN",
        "methodMatch": "string",
        "value": "string"
      }
    ],
    "validationOptions": {
      "schemaValidation": "UNKNOWN",
      "undeclaredProperties": "UNKNOWN"
    },
    "virtualProperties": "string"
  }
}
```

BaseType that describes a service-backed Type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collectionOverrides|[[CollectionOverride](#schemacollectionoverride)]|false|none|Allows resource handling overrides for specific collections|
|credential|[Credential](#schemacredential)|false|none|Credential used when interacting with this type.|
|descriptorUrl|string|false|none|Descriptor Url for the this type.|
|options|[Options](#schemaoptions)|false|none|Options to apply when handling any resources in this service.|

<h2 id="tocS_BasicAuth">BasicAuth</h2>
<!-- backwards compatibility -->
<a id="schemabasicauth"></a>
<a id="schema_BasicAuth"></a>
<a id="tocSbasicauth"></a>
<a id="tocsbasicauth"></a>

```json
{
  "password": "string",
  "user": "string"
}
```

Basic Auth used as a credential.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|false|none|none|
|user|string|false|none|none|

<h2 id="tocS_Binding">Binding</h2>
<!-- backwards compatibility -->
<a id="schemabinding"></a>
<a id="schema_Binding"></a>
<a id="tocSbinding"></a>
<a id="tocsbinding"></a>

```json
{
  "condition": {
    "description": "string",
    "expression": "string",
    "location": "string",
    "title": "string"
  },
  "members": [
    "string"
  ],
  "role": "string"
}
```

Associates `members`, or principals, with a `role`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|condition|[Expr](#schemaexpr)|false|none|The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|
|members|[string]|false|none|Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding.|
|role|string|false|none|Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.|

<h2 id="tocS_CollectionOverride">CollectionOverride</h2>
<!-- backwards compatibility -->
<a id="schemacollectionoverride"></a>
<a id="schema_CollectionOverride"></a>
<a id="tocScollectionoverride"></a>
<a id="tocscollectionoverride"></a>

```json
{
  "collection": "string",
  "options": {
    "asyncOptions": [
      {
        "methodMatch": "string",
        "pollingOptions": {
          "diagnostics": [
            {
              "field": "string",
              "level": "UNKNOWN"
            }
          ],
          "failCondition": "string",
          "finishCondition": "string",
          "pollingLink": "string",
          "targetLink": "string"
        }
      }
    ],
    "inputMappings": [
      {
        "fieldName": "string",
        "location": "UNKNOWN",
        "methodMatch": "string",
        "value": "string"
      }
    ],
    "validationOptions": {
      "schemaValidation": "UNKNOWN",
      "undeclaredProperties": "UNKNOWN"
    },
    "virtualProperties": "string"
  }
}
```

CollectionOverride allows resource handling overrides for specific resources within a BaseType

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collection|string|false|none|The collection that identifies this resource within its service.|
|options|[Options](#schemaoptions)|false|none|The options to apply to this resource-level override|

<h2 id="tocS_CompositeType">CompositeType</h2>
<!-- backwards compatibility -->
<a id="schemacompositetype"></a>
<a id="schema_CompositeType"></a>
<a id="tocScompositetype"></a>
<a id="tocscompositetype"></a>

```json
{
  "description": "string",
  "id": "string",
  "insertTime": "string",
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "operation": {
    "clientOperationId": "string",
    "creationTimestamp": "string",
    "description": "string",
    "endTime": "string",
    "error": {
      "errors": [
        {
          "code": "string",
          "location": "string",
          "message": "string"
        }
      ]
    },
    "httpErrorMessage": "string",
    "httpErrorStatusCode": 0,
    "id": "string",
    "insertTime": "string",
    "kind": "compute#operation",
    "name": "string",
    "operationGroupId": "string",
    "operationType": "string",
    "progress": 0,
    "region": "string",
    "selfLink": "string",
    "startTime": "string",
    "status": "PENDING",
    "statusMessage": "string",
    "targetId": "string",
    "targetLink": "string",
    "user": "string",
    "warnings": [
      {
        "code": "DEPRECATED_RESOURCE_USED",
        "data": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "message": "string"
      }
    ],
    "zone": "string"
  },
  "selfLink": "string",
  "status": "UNKNOWN_STATUS",
  "templateContents": {
    "imports": [
      {
        "content": "string",
        "name": "string"
      }
    ],
    "interpreter": "UNKNOWN_INTERPRETER",
    "mainTemplate": "string",
    "schema": "string",
    "template": "string"
  }
}
```

Holds the composite type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|An optional textual description of the resource; provided by the client when the resource is created.|
|id|string(uint64)|false|none|none|
|insertTime|string|false|none|Output only. Creation timestamp in RFC3339 text format.|
|labels|[[CompositeTypeLabelEntry](#schemacompositetypelabelentry)]|false|none|Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.|
|name|string|false|none|Name of the composite type, must follow the expression: `[a-z]([-a-z0-9_.]{0,61}[a-z0-9])?`.|
|operation|[Operation](#schemaoperation)|false|none|Output only. The Operation that most recently ran, or is currently running, on this composite type.|
|selfLink|string|false|none|Output only. Server defined URL for the resource.|
|status|string|false|none|none|
|templateContents|[TemplateContents](#schematemplatecontents)|false|none|Files for the template type.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|UNKNOWN_STATUS|
|status|DEPRECATED|
|status|EXPERIMENTAL|
|status|SUPPORTED|

<h2 id="tocS_CompositeTypeLabelEntry">CompositeTypeLabelEntry</h2>
<!-- backwards compatibility -->
<a id="schemacompositetypelabelentry"></a>
<a id="schema_CompositeTypeLabelEntry"></a>
<a id="tocScompositetypelabelentry"></a>
<a id="tocscompositetypelabelentry"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

Label object for CompositeTypes

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|Key of the label|
|value|string|false|none|Value of the label|

<h2 id="tocS_CompositeTypesListResponse">CompositeTypesListResponse</h2>
<!-- backwards compatibility -->
<a id="schemacompositetypeslistresponse"></a>
<a id="schema_CompositeTypesListResponse"></a>
<a id="tocScompositetypeslistresponse"></a>
<a id="tocscompositetypeslistresponse"></a>

```json
{
  "compositeTypes": [
    {
      "description": "string",
      "id": "string",
      "insertTime": "string",
      "labels": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "name": "string",
      "operation": {
        "clientOperationId": "string",
        "creationTimestamp": "string",
        "description": "string",
        "endTime": "string",
        "error": {
          "errors": [
            {
              "code": "string",
              "location": "string",
              "message": "string"
            }
          ]
        },
        "httpErrorMessage": "string",
        "httpErrorStatusCode": 0,
        "id": "string",
        "insertTime": "string",
        "kind": "compute#operation",
        "name": "string",
        "operationGroupId": "string",
        "operationType": "string",
        "progress": 0,
        "region": "string",
        "selfLink": "string",
        "startTime": "string",
        "status": "PENDING",
        "statusMessage": "string",
        "targetId": "string",
        "targetLink": "string",
        "user": "string",
        "warnings": [
          {
            "code": "DEPRECATED_RESOURCE_USED",
            "data": [
              {
                "key": "string",
                "value": "string"
              }
            ],
            "message": "string"
          }
        ],
        "zone": "string"
      },
      "selfLink": "string",
      "status": "UNKNOWN_STATUS",
      "templateContents": {
        "imports": [
          {
            "content": "string",
            "name": "string"
          }
        ],
        "interpreter": "UNKNOWN_INTERPRETER",
        "mainTemplate": "string",
        "schema": "string",
        "template": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

A response that returns all Composite Types supported by Deployment Manager

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compositeTypes|[[CompositeType](#schemacompositetype)]|false|none|Output only. A list of resource composite types supported by Deployment Manager.|
|nextPageToken|string|false|none|A token used to continue a truncated list request.|

<h2 id="tocS_ConfigFile">ConfigFile</h2>
<!-- backwards compatibility -->
<a id="schemaconfigfile"></a>
<a id="schema_ConfigFile"></a>
<a id="tocSconfigfile"></a>
<a id="tocsconfigfile"></a>

```json
{
  "content": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|The contents of the file.|

<h2 id="tocS_Credential">Credential</h2>
<!-- backwards compatibility -->
<a id="schemacredential"></a>
<a id="schema_Credential"></a>
<a id="tocScredential"></a>
<a id="tocscredential"></a>

```json
{
  "basicAuth": {
    "password": "string",
    "user": "string"
  },
  "serviceAccount": {
    "email": "string"
  },
  "useProjectDefault": true
}
```

The credential used by Deployment Manager and TypeProvider. Only one of the options is permitted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicAuth|[BasicAuth](#schemabasicauth)|false|none|Basic Auth Credential, only used by TypeProvider.|
|serviceAccount|[ServiceAccount](#schemaserviceaccount)|false|none|Service Account Credential, only used by Deployment.|
|useProjectDefault|boolean|false|none|Specify to use the project default credential, only supported by Deployment.|

<h2 id="tocS_Deployment">Deployment</h2>
<!-- backwards compatibility -->
<a id="schemadeployment"></a>
<a id="schema_Deployment"></a>
<a id="tocSdeployment"></a>
<a id="tocsdeployment"></a>

```json
{
  "description": "string",
  "fingerprint": "string",
  "id": "string",
  "insertTime": "string",
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "manifest": "string",
  "name": "string",
  "operation": {
    "clientOperationId": "string",
    "creationTimestamp": "string",
    "description": "string",
    "endTime": "string",
    "error": {
      "errors": [
        {
          "code": "string",
          "location": "string",
          "message": "string"
        }
      ]
    },
    "httpErrorMessage": "string",
    "httpErrorStatusCode": 0,
    "id": "string",
    "insertTime": "string",
    "kind": "compute#operation",
    "name": "string",
    "operationGroupId": "string",
    "operationType": "string",
    "progress": 0,
    "region": "string",
    "selfLink": "string",
    "startTime": "string",
    "status": "PENDING",
    "statusMessage": "string",
    "targetId": "string",
    "targetLink": "string",
    "user": "string",
    "warnings": [
      {
        "code": "DEPRECATED_RESOURCE_USED",
        "data": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "message": "string"
      }
    ],
    "zone": "string"
  },
  "selfLink": "string",
  "target": {
    "config": {
      "content": "string"
    },
    "imports": [
      {
        "content": "string",
        "name": "string"
      }
    ]
  },
  "update": {
    "description": "string",
    "labels": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "manifest": "string"
  },
  "updateTime": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|An optional user-provided description of the deployment.|
|fingerprint|string(byte)|false|none|Provides a fingerprint to use in requests to modify a deployment, such as `update()`, `stop()`, and `cancelPreview()` requests. A fingerprint is a randomly generated value that must be provided with `update()`, `stop()`, and `cancelPreview()` requests to perform optimistic locking. This ensures optimistic concurrency so that only one request happens at a time. The fingerprint is initially generated by Deployment Manager and changes after every request to modify data. To get the latest fingerprint value, perform a `get()` request to a deployment.|
|id|string(uint64)|false|none|none|
|insertTime|string|false|none|Output only. Creation timestamp in RFC3339 text format.|
|labels|[[DeploymentLabelEntry](#schemadeploymentlabelentry)]|false|none|Map of One Platform labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.|
|manifest|string|false|none|Output only. URL of the manifest representing the last manifest that was successfully deployed. If no manifest has been successfully deployed, this field will be absent.|
|name|string|false|none|Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.|
|operation|[Operation](#schemaoperation)|false|none|Output only. The Operation that most recently ran, or is currently running, on this deployment.|
|selfLink|string|false|none|Output only. Server defined URL for the resource.|
|target|[TargetConfiguration](#schematargetconfiguration)|false|none|[Input Only] The parameters that define your deployment, including the deployment configuration and relevant templates.|
|update|[DeploymentUpdate](#schemadeploymentupdate)|false|none|Output only. If Deployment Manager is currently updating or previewing an update to this deployment, the updated configuration appears here.|
|updateTime|string|false|none|Output only. Update timestamp in RFC3339 text format.|

<h2 id="tocS_DeploymentLabelEntry">DeploymentLabelEntry</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentlabelentry"></a>
<a id="schema_DeploymentLabelEntry"></a>
<a id="tocSdeploymentlabelentry"></a>
<a id="tocsdeploymentlabelentry"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

Label object for Deployments

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|Key of the label|
|value|string|false|none|Value of the label|

<h2 id="tocS_DeploymentUpdate">DeploymentUpdate</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentupdate"></a>
<a id="schema_DeploymentUpdate"></a>
<a id="tocSdeploymentupdate"></a>
<a id="tocsdeploymentupdate"></a>

```json
{
  "description": "string",
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "manifest": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Output only. An optional user-provided description of the deployment after the current update has been applied.|
|labels|[[DeploymentUpdateLabelEntry](#schemadeploymentupdatelabelentry)]|false|none|Map of One Platform labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.|
|manifest|string|false|none|Output only. URL of the manifest representing the update configuration of this deployment.|

<h2 id="tocS_DeploymentUpdateLabelEntry">DeploymentUpdateLabelEntry</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentupdatelabelentry"></a>
<a id="schema_DeploymentUpdateLabelEntry"></a>
<a id="tocSdeploymentupdatelabelentry"></a>
<a id="tocsdeploymentupdatelabelentry"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

Label object for DeploymentUpdate

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|Key of the label|
|value|string|false|none|Value of the label|

<h2 id="tocS_DeploymentsCancelPreviewRequest">DeploymentsCancelPreviewRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentscancelpreviewrequest"></a>
<a id="schema_DeploymentsCancelPreviewRequest"></a>
<a id="tocSdeploymentscancelpreviewrequest"></a>
<a id="tocsdeploymentscancelpreviewrequest"></a>

```json
{
  "fingerprint": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fingerprint|string(byte)|false|none|Specifies a fingerprint for `cancelPreview()` requests. A fingerprint is a randomly generated value that must be provided in `cancelPreview()` requests to perform optimistic locking. This ensures optimistic concurrency so that the deployment does not have conflicting requests (e.g. if someone attempts to make a new update request while another user attempts to cancel a preview, this would prevent one of the requests). The fingerprint is initially generated by Deployment Manager and changes after every request to modify a deployment. To get the latest fingerprint value, perform a `get()` request on the deployment.|

<h2 id="tocS_DeploymentsListResponse">DeploymentsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentslistresponse"></a>
<a id="schema_DeploymentsListResponse"></a>
<a id="tocSdeploymentslistresponse"></a>
<a id="tocsdeploymentslistresponse"></a>

```json
{
  "deployments": [
    {
      "description": "string",
      "fingerprint": "string",
      "id": "string",
      "insertTime": "string",
      "labels": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "manifest": "string",
      "name": "string",
      "operation": {
        "clientOperationId": "string",
        "creationTimestamp": "string",
        "description": "string",
        "endTime": "string",
        "error": {
          "errors": [
            {
              "code": "string",
              "location": "string",
              "message": "string"
            }
          ]
        },
        "httpErrorMessage": "string",
        "httpErrorStatusCode": 0,
        "id": "string",
        "insertTime": "string",
        "kind": "compute#operation",
        "name": "string",
        "operationGroupId": "string",
        "operationType": "string",
        "progress": 0,
        "region": "string",
        "selfLink": "string",
        "startTime": "string",
        "status": "PENDING",
        "statusMessage": "string",
        "targetId": "string",
        "targetLink": "string",
        "user": "string",
        "warnings": [
          {
            "code": "DEPRECATED_RESOURCE_USED",
            "data": [
              {
                "key": "string",
                "value": "string"
              }
            ],
            "message": "string"
          }
        ],
        "zone": "string"
      },
      "selfLink": "string",
      "target": {
        "config": {
          "content": "string"
        },
        "imports": [
          {
            "content": "string",
            "name": "string"
          }
        ]
      },
      "update": {
        "description": "string",
        "labels": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "manifest": "string"
      },
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

A response containing a partial list of deployments and a page token used to build the next request if the request has been truncated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deployments|[[Deployment](#schemadeployment)]|false|none|Output only. The deployments contained in this response.|
|nextPageToken|string|false|none|Output only. A token used to continue a truncated list request.|

<h2 id="tocS_DeploymentsStopRequest">DeploymentsStopRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentsstoprequest"></a>
<a id="schema_DeploymentsStopRequest"></a>
<a id="tocSdeploymentsstoprequest"></a>
<a id="tocsdeploymentsstoprequest"></a>

```json
{
  "fingerprint": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fingerprint|string(byte)|false|none|Specifies a fingerprint for `stop()` requests. A fingerprint is a randomly generated value that must be provided in `stop()` requests to perform optimistic locking. This ensures optimistic concurrency so that the deployment does not have conflicting requests (e.g. if someone attempts to make a new update request while another user attempts to stop an ongoing update request, this would prevent a collision). The fingerprint is initially generated by Deployment Manager and changes after every request to modify a deployment. To get the latest fingerprint value, perform a `get()` request on the deployment.|

<h2 id="tocS_Diagnostic">Diagnostic</h2>
<!-- backwards compatibility -->
<a id="schemadiagnostic"></a>
<a id="schema_Diagnostic"></a>
<a id="tocSdiagnostic"></a>
<a id="tocsdiagnostic"></a>

```json
{
  "field": "string",
  "level": "UNKNOWN"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|none|JsonPath expression on the resource that if non empty, indicates that this field needs to be extracted as a diagnostic.|
|level|string|false|none|Level to record this diagnostic.|

#### Enumerated Values

|Property|Value|
|---|---|
|level|UNKNOWN|
|level|INFORMATION|
|level|WARNING|
|level|ERROR|

<h2 id="tocS_Expr">Expr</h2>
<!-- backwards compatibility -->
<a id="schemaexpr"></a>
<a id="schema_Expr"></a>
<a id="tocSexpr"></a>
<a id="tocsexpr"></a>

```json
{
  "description": "string",
  "expression": "string",
  "location": "string",
  "title": "string"
}
```

Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.|
|expression|string|false|none|Textual representation of an expression in Common Expression Language syntax.|
|location|string|false|none|Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.|
|title|string|false|none|Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.|

<h2 id="tocS_GlobalSetPolicyRequest">GlobalSetPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaglobalsetpolicyrequest"></a>
<a id="schema_GlobalSetPolicyRequest"></a>
<a id="tocSglobalsetpolicyrequest"></a>
<a id="tocsglobalsetpolicyrequest"></a>

```json
{
  "bindings": [
    {
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string",
  "policy": {
    "auditConfigs": [
      {
        "auditLogConfigs": [
          {
            "exemptedMembers": [
              "string"
            ],
            "logType": "LOG_TYPE_UNSPECIFIED"
          }
        ],
        "service": "string"
      }
    ],
    "bindings": [
      {
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "members": [
          "string"
        ],
        "role": "string"
      }
    ],
    "etag": "string",
    "version": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bindings|[[Binding](#schemabinding)]|false|none|Flatten Policy to create a backward compatible wire-format. Deprecated. Use 'policy' to specify bindings.|
|etag|string(byte)|false|none|Flatten Policy to create a backward compatible wire-format. Deprecated. Use 'policy' to specify the etag.|
|policy|[Policy](#schemapolicy)|false|none|REQUIRED: The complete policy to be applied to the 'resource'. The size of the policy is limited to a few 10s of KB. An empty policy is in general a valid policy but certain services (like Projects) might reject them.|

<h2 id="tocS_ImportFile">ImportFile</h2>
<!-- backwards compatibility -->
<a id="schemaimportfile"></a>
<a id="schema_ImportFile"></a>
<a id="tocSimportfile"></a>
<a id="tocsimportfile"></a>

```json
{
  "content": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|The contents of the file.|
|name|string|false|none|The name of the file.|

<h2 id="tocS_InputMapping">InputMapping</h2>
<!-- backwards compatibility -->
<a id="schemainputmapping"></a>
<a id="schema_InputMapping"></a>
<a id="tocSinputmapping"></a>
<a id="tocsinputmapping"></a>

```json
{
  "fieldName": "string",
  "location": "UNKNOWN",
  "methodMatch": "string",
  "value": "string"
}
```

InputMapping creates a 'virtual' property that will be injected into the properties before sending the request to the underlying API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldName|string|false|none|The name of the field that is going to be injected.|
|location|string|false|none|The location where this mapping applies.|
|methodMatch|string|false|none|Regex to evaluate on method to decide if input applies.|
|value|string|false|none|A jsonPath expression to select an element.|

#### Enumerated Values

|Property|Value|
|---|---|
|location|UNKNOWN|
|location|PATH|
|location|QUERY|
|location|BODY|
|location|HEADER|

<h2 id="tocS_Manifest">Manifest</h2>
<!-- backwards compatibility -->
<a id="schemamanifest"></a>
<a id="schema_Manifest"></a>
<a id="tocSmanifest"></a>
<a id="tocsmanifest"></a>

```json
{
  "config": {
    "content": "string"
  },
  "expandedConfig": "string",
  "id": "string",
  "imports": [
    {
      "content": "string",
      "name": "string"
    }
  ],
  "insertTime": "string",
  "layout": "string",
  "manifestSizeBytes": "string",
  "manifestSizeLimitBytes": "string",
  "name": "string",
  "selfLink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[ConfigFile](#schemaconfigfile)|false|none|Output only. The YAML configuration for this manifest.|
|expandedConfig|string|false|none|Output only. The fully-expanded configuration file, including any templates and references.|
|id|string(uint64)|false|none|none|
|imports|[[ImportFile](#schemaimportfile)]|false|none|Output only. The imported files for this manifest.|
|insertTime|string|false|none|Output only. Creation timestamp in RFC3339 text format.|
|layout|string|false|none|Output only. The YAML layout for this manifest.|
|manifestSizeBytes|string(int64)|false|none|Output only. The computed size of the fully expanded manifest.|
|manifestSizeLimitBytes|string(int64)|false|none|Output only. The size limit for expanded manifests in the project.|
|name|string|false|none|Output only. The name of the manifest.|
|selfLink|string|false|none|Output only. Self link for the manifest.|

<h2 id="tocS_ManifestsListResponse">ManifestsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemamanifestslistresponse"></a>
<a id="schema_ManifestsListResponse"></a>
<a id="tocSmanifestslistresponse"></a>
<a id="tocsmanifestslistresponse"></a>

```json
{
  "manifests": [
    {
      "config": {
        "content": "string"
      },
      "expandedConfig": "string",
      "id": "string",
      "imports": [
        {
          "content": "string",
          "name": "string"
        }
      ],
      "insertTime": "string",
      "layout": "string",
      "manifestSizeBytes": "string",
      "manifestSizeLimitBytes": "string",
      "name": "string",
      "selfLink": "string"
    }
  ],
  "nextPageToken": "string"
}
```

A response containing a partial list of manifests and a page token used to build the next request if the request has been truncated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|manifests|[[Manifest](#schemamanifest)]|false|none|Output only. Manifests contained in this list response.|
|nextPageToken|string|false|none|Output only. A token used to continue a truncated list request.|

<h2 id="tocS_Operation">Operation</h2>
<!-- backwards compatibility -->
<a id="schemaoperation"></a>
<a id="schema_Operation"></a>
<a id="tocSoperation"></a>
<a id="tocsoperation"></a>

```json
{
  "clientOperationId": "string",
  "creationTimestamp": "string",
  "description": "string",
  "endTime": "string",
  "error": {
    "errors": [
      {
        "code": "string",
        "location": "string",
        "message": "string"
      }
    ]
  },
  "httpErrorMessage": "string",
  "httpErrorStatusCode": 0,
  "id": "string",
  "insertTime": "string",
  "kind": "compute#operation",
  "name": "string",
  "operationGroupId": "string",
  "operationType": "string",
  "progress": 0,
  "region": "string",
  "selfLink": "string",
  "startTime": "string",
  "status": "PENDING",
  "statusMessage": "string",
  "targetId": "string",
  "targetLink": "string",
  "user": "string",
  "warnings": [
    {
      "code": "DEPRECATED_RESOURCE_USED",
      "data": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "message": "string"
    }
  ],
  "zone": "string"
}
```

Represents an Operation resource. Google Compute Engine has three Operation resources: * [Global](/compute/docs/reference/rest/{$api_version}/globalOperations) * [Regional](/compute/docs/reference/rest/{$api_version}/regionOperations) * [Zonal](/compute/docs/reference/rest/{$api_version}/zoneOperations) You can use an operation resource to manage asynchronous API requests. For more information, read Handling API responses. Operations can be global, regional or zonal. - For global operations, use the `globalOperations` resource. - For regional operations, use the `regionOperations` resource. - For zonal operations, use the `zonalOperations` resource. For more information, read Global, Regional, and Zonal Resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientOperationId|string|false|none|[Output Only] The value of `requestId` if you provided it in the request. Not present otherwise.|
|creationTimestamp|string|false|none|[Deprecated] This field is deprecated.|
|description|string|false|none|[Output Only] A textual description of the operation, which is set when the operation is created.|
|endTime|string|false|none|[Output Only] The time that this operation was completed. This value is in RFC3339 text format.|
|error|object|false|none|[Output Only] If errors are generated during processing of the operation, this field will be populated.|
|httpErrorMessage|string|false|none|[Output Only] If the operation fails, this field contains the HTTP error message that was returned, such as `NOT FOUND`.|
|httpErrorStatusCode|integer(int32)|false|none|[Output Only] If the operation fails, this field contains the HTTP error status code that was returned. For example, a `404` means the resource was not found.|
|id|string(uint64)|false|none|[Output Only] The unique identifier for the operation. This identifier is defined by the server.|
|insertTime|string|false|none|[Output Only] The time that this operation was requested. This value is in RFC3339 text format.|
|kind|string|false|none|[Output Only] Type of the resource. Always `compute#operation` for Operation resources.|
|name|string|false|none|[Output Only] Name of the operation.|
|operationGroupId|string|false|none|[Output Only] An ID that represents a group of operations, such as when a group of operations results from a `bulkInsert` API request.|
|operationType|string|false|none|[Output Only] The type of operation, such as `insert`, `update`, or `delete`, and so on.|
|progress|integer(int32)|false|none|[Output Only] An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of operations. This should not be used to guess when the operation will be complete. This number should monotonically increase as the operation progresses.|
|region|string|false|none|[Output Only] The URL of the region where the operation resides. Only applicable when performing regional operations.|
|selfLink|string|false|none|[Output Only] Server-defined URL for the resource.|
|startTime|string|false|none|[Output Only] The time that this operation was started by the server. This value is in RFC3339 text format.|
|status|string|false|none|[Output Only] The status of the operation, which can be one of the following: `PENDING`, `RUNNING`, or `DONE`.|
|statusMessage|string|false|none|[Output Only] An optional textual description of the current status of the operation.|
|targetId|string(uint64)|false|none|[Output Only] The unique target ID, which identifies a specific incarnation of the target resource.|
|targetLink|string|false|none|[Output Only] The URL of the resource that the operation modifies. For operations related to creating a snapshot, this points to the persistent disk that the snapshot was created from.|
|user|string|false|none|[Output Only] User who requested the operation, for example: `user@example.com`.|
|warnings|[object]|false|none|[Output Only] If warning messages are generated during processing of the operation, this field will be populated.|
|zone|string|false|none|[Output Only] The URL of the zone where the operation resides. Only applicable when performing per-zone operations.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|PENDING|
|status|RUNNING|
|status|DONE|

<h2 id="tocS_OperationsListResponse">OperationsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaoperationslistresponse"></a>
<a id="schema_OperationsListResponse"></a>
<a id="tocSoperationslistresponse"></a>
<a id="tocsoperationslistresponse"></a>

```json
{
  "nextPageToken": "string",
  "operations": [
    {
      "clientOperationId": "string",
      "creationTimestamp": "string",
      "description": "string",
      "endTime": "string",
      "error": {
        "errors": [
          {
            "code": "string",
            "location": "string",
            "message": "string"
          }
        ]
      },
      "httpErrorMessage": "string",
      "httpErrorStatusCode": 0,
      "id": "string",
      "insertTime": "string",
      "kind": "compute#operation",
      "name": "string",
      "operationGroupId": "string",
      "operationType": "string",
      "progress": 0,
      "region": "string",
      "selfLink": "string",
      "startTime": "string",
      "status": "PENDING",
      "statusMessage": "string",
      "targetId": "string",
      "targetLink": "string",
      "user": "string",
      "warnings": [
        {
          "code": "DEPRECATED_RESOURCE_USED",
          "data": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "message": "string"
        }
      ],
      "zone": "string"
    }
  ]
}
```

A response containing a partial list of operations and a page token used to build the next request if the request has been truncated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Output only. A token used to continue a truncated list request.|
|operations|[[Operation](#schemaoperation)]|false|none|Output only. Operations contained in this list response.|

<h2 id="tocS_Options">Options</h2>
<!-- backwards compatibility -->
<a id="schemaoptions"></a>
<a id="schema_Options"></a>
<a id="tocSoptions"></a>
<a id="tocsoptions"></a>

```json
{
  "asyncOptions": [
    {
      "methodMatch": "string",
      "pollingOptions": {
        "diagnostics": [
          {
            "field": "string",
            "level": "UNKNOWN"
          }
        ],
        "failCondition": "string",
        "finishCondition": "string",
        "pollingLink": "string",
        "targetLink": "string"
      }
    }
  ],
  "inputMappings": [
    {
      "fieldName": "string",
      "location": "UNKNOWN",
      "methodMatch": "string",
      "value": "string"
    }
  ],
  "validationOptions": {
    "schemaValidation": "UNKNOWN",
    "undeclaredProperties": "UNKNOWN"
  },
  "virtualProperties": "string"
}
```

Options allows customized resource handling by Deployment Manager.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asyncOptions|[[AsyncOptions](#schemaasyncoptions)]|false|none|Options regarding how to thread async requests.|
|inputMappings|[[InputMapping](#schemainputmapping)]|false|none|The mappings that apply for requests.|
|validationOptions|[ValidationOptions](#schemavalidationoptions)|false|none|Options for how to validate and process properties on a resource.|
|virtualProperties|string|false|none|Additional properties block described as a jsonSchema, these properties will never be part of the json payload, but they can be consumed by InputMappings, this must be a valid json schema draft-04. The properties specified here will be decouple in a different section. This schema will be merged to the schema validation, and properties here will be extracted From the payload and consumed explicitly by InputMappings. ex: field1: type: string field2: type: number|

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
{
  "auditConfigs": [
    {
      "auditLogConfigs": [
        {
          "exemptedMembers": [
            "string"
          ],
          "logType": "LOG_TYPE_UNSPECIFIED"
        }
      ],
      "service": "string"
    }
  ],
  "bindings": [
    {
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string",
  "version": 0
}
```

An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditConfigs|[[AuditConfig](#schemaauditconfig)]|false|none|Specifies cloud audit logging configuration for this policy.|
|bindings|[[Binding](#schemabinding)]|false|none|Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.|
|etag|string(byte)|false|none|`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.|
|version|integer(int32)|false|none|Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_PollingOptions">PollingOptions</h2>
<!-- backwards compatibility -->
<a id="schemapollingoptions"></a>
<a id="schema_PollingOptions"></a>
<a id="tocSpollingoptions"></a>
<a id="tocspollingoptions"></a>

```json
{
  "diagnostics": [
    {
      "field": "string",
      "level": "UNKNOWN"
    }
  ],
  "failCondition": "string",
  "finishCondition": "string",
  "pollingLink": "string",
  "targetLink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diagnostics|[[Diagnostic](#schemadiagnostic)]|false|none|An array of diagnostics to be collected by Deployment Manager, these diagnostics will be displayed to the user.|
|failCondition|string|false|none|JsonPath expression that determines if the request failed.|
|finishCondition|string|false|none|JsonPath expression that determines if the request is completed.|
|pollingLink|string|false|none|JsonPath expression that evaluates to string, it indicates where to poll.|
|targetLink|string|false|none|JsonPath expression, after polling is completed, indicates where to fetch the resource.|

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "accessControl": {
    "gcpIamPolicy": "string"
  },
  "finalProperties": "string",
  "id": "string",
  "insertTime": "string",
  "manifest": "string",
  "name": "string",
  "properties": "string",
  "type": "string",
  "update": {
    "accessControl": {
      "gcpIamPolicy": "string"
    },
    "error": {
      "errors": [
        {
          "code": "string",
          "location": "string",
          "message": "string"
        }
      ]
    },
    "finalProperties": "string",
    "intent": "CREATE_OR_ACQUIRE",
    "manifest": "string",
    "properties": "string",
    "state": "PENDING",
    "warnings": [
      {
        "code": "DEPRECATED_RESOURCE_USED",
        "data": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "message": "string"
      }
    ]
  },
  "updateTime": "string",
  "url": "string",
  "warnings": [
    {
      "code": "DEPRECATED_RESOURCE_USED",
      "data": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "message": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessControl|[ResourceAccessControl](#schemaresourceaccesscontrol)|false|none|The Access Control Policy set on this resource.|
|finalProperties|string|false|none|Output only. The evaluated properties of the resource with references expanded. Returned as serialized YAML.|
|id|string(uint64)|false|none|none|
|insertTime|string|false|none|Output only. Creation timestamp in RFC3339 text format.|
|manifest|string|false|none|Output only. URL of the manifest representing the current configuration of this resource.|
|name|string|false|none|Output only. The name of the resource as it appears in the YAML config.|
|properties|string|false|none|Output only. The current properties of the resource before any references have been filled in. Returned as serialized YAML.|
|type|string|false|none|Output only. The type of the resource, for example `compute.v1.instance`, or `cloudfunctions.v1beta1.function`.|
|update|[ResourceUpdate](#schemaresourceupdate)|false|none|Output only. If Deployment Manager is currently updating or previewing an update to this resource, the updated configuration appears here.|
|updateTime|string|false|none|Output only. Update timestamp in RFC3339 text format.|
|url|string|false|none|Output only. The URL of the actual resource.|
|warnings|[object]|false|none|Output only. If warning messages are generated during processing of this resource, this field will be populated.|

<h2 id="tocS_ResourceAccessControl">ResourceAccessControl</h2>
<!-- backwards compatibility -->
<a id="schemaresourceaccesscontrol"></a>
<a id="schema_ResourceAccessControl"></a>
<a id="tocSresourceaccesscontrol"></a>
<a id="tocsresourceaccesscontrol"></a>

```json
{
  "gcpIamPolicy": "string"
}
```

The access controls set on the resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcpIamPolicy|string|false|none|The GCP IAM Policy to set on the resource.|

<h2 id="tocS_ResourceUpdate">ResourceUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaresourceupdate"></a>
<a id="schema_ResourceUpdate"></a>
<a id="tocSresourceupdate"></a>
<a id="tocsresourceupdate"></a>

```json
{
  "accessControl": {
    "gcpIamPolicy": "string"
  },
  "error": {
    "errors": [
      {
        "code": "string",
        "location": "string",
        "message": "string"
      }
    ]
  },
  "finalProperties": "string",
  "intent": "CREATE_OR_ACQUIRE",
  "manifest": "string",
  "properties": "string",
  "state": "PENDING",
  "warnings": [
    {
      "code": "DEPRECATED_RESOURCE_USED",
      "data": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "message": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessControl|[ResourceAccessControl](#schemaresourceaccesscontrol)|false|none|The Access Control Policy to set on this resource after updating the resource itself.|
|error|object|false|none|Output only. If errors are generated during update of the resource, this field will be populated.|
|finalProperties|string|false|none|Output only. The expanded properties of the resource with reference values expanded. Returned as serialized YAML.|
|intent|string|false|none|Output only. The intent of the resource: `PREVIEW`, `UPDATE`, or `CANCEL`.|
|manifest|string|false|none|Output only. URL of the manifest representing the update configuration of this resource.|
|properties|string|false|none|Output only. The set of updated properties for this resource, before references are expanded. Returned as serialized YAML.|
|state|string|false|none|Output only. The state of the resource.|
|warnings|[object]|false|none|Output only. If warning messages are generated during processing of this resource, this field will be populated.|

#### Enumerated Values

|Property|Value|
|---|---|
|intent|CREATE_OR_ACQUIRE|
|intent|DELETE|
|intent|ACQUIRE|
|intent|UPDATE|
|intent|ABANDON|
|intent|CREATE|
|state|PENDING|
|state|IN_PROGRESS|
|state|IN_PREVIEW|
|state|FAILED|
|state|ABORTED|

<h2 id="tocS_ResourcesListResponse">ResourcesListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresourceslistresponse"></a>
<a id="schema_ResourcesListResponse"></a>
<a id="tocSresourceslistresponse"></a>
<a id="tocsresourceslistresponse"></a>

```json
{
  "nextPageToken": "string",
  "resources": [
    {
      "accessControl": {
        "gcpIamPolicy": "string"
      },
      "finalProperties": "string",
      "id": "string",
      "insertTime": "string",
      "manifest": "string",
      "name": "string",
      "properties": "string",
      "type": "string",
      "update": {
        "accessControl": {
          "gcpIamPolicy": "string"
        },
        "error": {
          "errors": [
            {
              "code": "string",
              "location": "string",
              "message": "string"
            }
          ]
        },
        "finalProperties": "string",
        "intent": "CREATE_OR_ACQUIRE",
        "manifest": "string",
        "properties": "string",
        "state": "PENDING",
        "warnings": [
          {
            "code": "DEPRECATED_RESOURCE_USED",
            "data": [
              {
                "key": "string",
                "value": "string"
              }
            ],
            "message": "string"
          }
        ]
      },
      "updateTime": "string",
      "url": "string",
      "warnings": [
        {
          "code": "DEPRECATED_RESOURCE_USED",
          "data": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "message": "string"
        }
      ]
    }
  ]
}
```

A response containing a partial list of resources and a page token used to build the next request if the request has been truncated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token used to continue a truncated list request.|
|resources|[[Resource](#schemaresource)]|false|none|Resources contained in this list response.|

<h2 id="tocS_ServiceAccount">ServiceAccount</h2>
<!-- backwards compatibility -->
<a id="schemaserviceaccount"></a>
<a id="schema_ServiceAccount"></a>
<a id="tocSserviceaccount"></a>
<a id="tocsserviceaccount"></a>

```json
{
  "email": "string"
}
```

Service Account used as a credential.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The IAM service account email address like test@myproject.iam.gserviceaccount.com|

<h2 id="tocS_TargetConfiguration">TargetConfiguration</h2>
<!-- backwards compatibility -->
<a id="schematargetconfiguration"></a>
<a id="schema_TargetConfiguration"></a>
<a id="tocStargetconfiguration"></a>
<a id="tocstargetconfiguration"></a>

```json
{
  "config": {
    "content": "string"
  },
  "imports": [
    {
      "content": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[ConfigFile](#schemaconfigfile)|false|none|The configuration to use for this deployment.|
|imports|[[ImportFile](#schemaimportfile)]|false|none|Specifies any files to import for this configuration. This can be used to import templates or other files. For example, you might import a text file in order to use the file in a template.|

<h2 id="tocS_TemplateContents">TemplateContents</h2>
<!-- backwards compatibility -->
<a id="schematemplatecontents"></a>
<a id="schema_TemplateContents"></a>
<a id="tocStemplatecontents"></a>
<a id="tocstemplatecontents"></a>

```json
{
  "imports": [
    {
      "content": "string",
      "name": "string"
    }
  ],
  "interpreter": "UNKNOWN_INTERPRETER",
  "mainTemplate": "string",
  "schema": "string",
  "template": "string"
}
```

Files that make up the template contents of a template type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imports|[[ImportFile](#schemaimportfile)]|false|none|Import files referenced by the main template.|
|interpreter|string|false|none|Which interpreter (python or jinja) should be used during expansion.|
|mainTemplate|string|false|none|The filename of the mainTemplate|
|schema|string|false|none|The contents of the template schema.|
|template|string|false|none|The contents of the main template file.|

#### Enumerated Values

|Property|Value|
|---|---|
|interpreter|UNKNOWN_INTERPRETER|
|interpreter|PYTHON|
|interpreter|JINJA|

<h2 id="tocS_TestPermissionsRequest">TestPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schematestpermissionsrequest"></a>
<a id="schema_TestPermissionsRequest"></a>
<a id="tocStestpermissionsrequest"></a>
<a id="tocstestpermissionsrequest"></a>

```json
{
  "permissions": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[string]|false|none|The set of permissions to check for the 'resource'. Permissions with wildcards (such as '*' or 'storage.*') are not allowed.|

<h2 id="tocS_TestPermissionsResponse">TestPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schematestpermissionsresponse"></a>
<a id="schema_TestPermissionsResponse"></a>
<a id="tocStestpermissionsresponse"></a>
<a id="tocstestpermissionsresponse"></a>

```json
{
  "permissions": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[string]|false|none|A subset of `TestPermissionsRequest.permissions` that the caller is allowed.|

<h2 id="tocS_Type">Type</h2>
<!-- backwards compatibility -->
<a id="schematype"></a>
<a id="schema_Type"></a>
<a id="tocStype"></a>
<a id="tocstype"></a>

```json
{
  "base": {
    "collectionOverrides": [
      {
        "collection": "string",
        "options": {
          "asyncOptions": [
            {
              "methodMatch": "string",
              "pollingOptions": {
                "diagnostics": [
                  {
                    "field": "string",
                    "level": "UNKNOWN"
                  }
                ],
                "failCondition": "string",
                "finishCondition": "string",
                "pollingLink": "string",
                "targetLink": "string"
              }
            }
          ],
          "inputMappings": [
            {
              "fieldName": "string",
              "location": "UNKNOWN",
              "methodMatch": "string",
              "value": "string"
            }
          ],
          "validationOptions": {
            "schemaValidation": "UNKNOWN",
            "undeclaredProperties": "UNKNOWN"
          },
          "virtualProperties": "string"
        }
      }
    ],
    "credential": {
      "basicAuth": {
        "password": "string",
        "user": "string"
      },
      "serviceAccount": {
        "email": "string"
      },
      "useProjectDefault": true
    },
    "descriptorUrl": "string",
    "options": {
      "asyncOptions": [
        {
          "methodMatch": "string",
          "pollingOptions": {
            "diagnostics": [
              {
                "field": "string",
                "level": "UNKNOWN"
              }
            ],
            "failCondition": "string",
            "finishCondition": "string",
            "pollingLink": "string",
            "targetLink": "string"
          }
        }
      ],
      "inputMappings": [
        {
          "fieldName": "string",
          "location": "UNKNOWN",
          "methodMatch": "string",
          "value": "string"
        }
      ],
      "validationOptions": {
        "schemaValidation": "UNKNOWN",
        "undeclaredProperties": "UNKNOWN"
      },
      "virtualProperties": "string"
    }
  },
  "description": "string",
  "id": "string",
  "insertTime": "string",
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "operation": {
    "clientOperationId": "string",
    "creationTimestamp": "string",
    "description": "string",
    "endTime": "string",
    "error": {
      "errors": [
        {
          "code": "string",
          "location": "string",
          "message": "string"
        }
      ]
    },
    "httpErrorMessage": "string",
    "httpErrorStatusCode": 0,
    "id": "string",
    "insertTime": "string",
    "kind": "compute#operation",
    "name": "string",
    "operationGroupId": "string",
    "operationType": "string",
    "progress": 0,
    "region": "string",
    "selfLink": "string",
    "startTime": "string",
    "status": "PENDING",
    "statusMessage": "string",
    "targetId": "string",
    "targetLink": "string",
    "user": "string",
    "warnings": [
      {
        "code": "DEPRECATED_RESOURCE_USED",
        "data": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "message": "string"
      }
    ],
    "zone": "string"
  },
  "selfLink": "string"
}
```

A resource type supported by Deployment Manager.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base|[BaseType](#schemabasetype)|false|none|Base Type (configurable service) that backs this Type.|
|description|string|false|none|An optional textual description of the resource; provided by the client when the resource is created.|
|id|string(uint64)|false|none|none|
|insertTime|string|false|none|Output only. Creation timestamp in RFC3339 text format.|
|labels|[[TypeLabelEntry](#schematypelabelentry)]|false|none|Map of One Platform labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.|
|name|string|false|none|Name of the type.|
|operation|[Operation](#schemaoperation)|false|none|Output only. The Operation that most recently ran, or is currently running, on this type.|
|selfLink|string|false|none|Output only. Server defined URL for the resource.|

<h2 id="tocS_TypeInfo">TypeInfo</h2>
<!-- backwards compatibility -->
<a id="schematypeinfo"></a>
<a id="schema_TypeInfo"></a>
<a id="tocStypeinfo"></a>
<a id="tocstypeinfo"></a>

```json
{
  "description": "string",
  "documentationLink": "string",
  "kind": "string",
  "name": "string",
  "schema": {
    "input": "string",
    "output": "string"
  },
  "selfLink": "string",
  "title": "string"
}
```

Type Information. Contains detailed information about a composite type, base type, or base type with specific collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of the type.|
|documentationLink|string|false|none|For swagger 2.0 externalDocs field will be used. For swagger 1.2 this field will be empty.|
|kind|string|false|none|Output only. Type of the output. Always `deploymentManager#TypeInfo` for TypeInfo.|
|name|string|false|none|The base type or composite type name.|
|schema|[TypeInfoSchemaInfo](#schematypeinfoschemainfo)|false|none|For base types with a collection, we return a schema and documentation link For template types, we return only a schema|
|selfLink|string|false|none|Output only. Self link for the type provider.|
|title|string|false|none|The title on the API descriptor URL provided.|

<h2 id="tocS_TypeInfoSchemaInfo">TypeInfoSchemaInfo</h2>
<!-- backwards compatibility -->
<a id="schematypeinfoschemainfo"></a>
<a id="schema_TypeInfoSchemaInfo"></a>
<a id="tocStypeinfoschemainfo"></a>
<a id="tocstypeinfoschemainfo"></a>

```json
{
  "input": "string",
  "output": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|string|false|none|The properties that this composite type or base type collection accept as input, represented as a json blob, format is: JSON Schema Draft V4|
|output|string|false|none|The properties that this composite type or base type collection exposes as output, these properties can be used for references, represented as json blob, format is: JSON Schema Draft V4|

<h2 id="tocS_TypeLabelEntry">TypeLabelEntry</h2>
<!-- backwards compatibility -->
<a id="schematypelabelentry"></a>
<a id="schema_TypeLabelEntry"></a>
<a id="tocStypelabelentry"></a>
<a id="tocstypelabelentry"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

Label object for Types

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|Key of the label|
|value|string|false|none|Value of the label|

<h2 id="tocS_TypeProvider">TypeProvider</h2>
<!-- backwards compatibility -->
<a id="schematypeprovider"></a>
<a id="schema_TypeProvider"></a>
<a id="tocStypeprovider"></a>
<a id="tocstypeprovider"></a>

```json
{
  "collectionOverrides": [
    {
      "collection": "string",
      "options": {
        "asyncOptions": [
          {
            "methodMatch": "string",
            "pollingOptions": {
              "diagnostics": [
                {
                  "field": "string",
                  "level": "UNKNOWN"
                }
              ],
              "failCondition": "string",
              "finishCondition": "string",
              "pollingLink": "string",
              "targetLink": "string"
            }
          }
        ],
        "inputMappings": [
          {
            "fieldName": "string",
            "location": "UNKNOWN",
            "methodMatch": "string",
            "value": "string"
          }
        ],
        "validationOptions": {
          "schemaValidation": "UNKNOWN",
          "undeclaredProperties": "UNKNOWN"
        },
        "virtualProperties": "string"
      }
    }
  ],
  "credential": {
    "basicAuth": {
      "password": "string",
      "user": "string"
    },
    "serviceAccount": {
      "email": "string"
    },
    "useProjectDefault": true
  },
  "customCertificateAuthorityRoots": [
    "string"
  ],
  "description": "string",
  "descriptorUrl": "string",
  "id": "string",
  "insertTime": "string",
  "labels": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "operation": {
    "clientOperationId": "string",
    "creationTimestamp": "string",
    "description": "string",
    "endTime": "string",
    "error": {
      "errors": [
        {
          "code": "string",
          "location": "string",
          "message": "string"
        }
      ]
    },
    "httpErrorMessage": "string",
    "httpErrorStatusCode": 0,
    "id": "string",
    "insertTime": "string",
    "kind": "compute#operation",
    "name": "string",
    "operationGroupId": "string",
    "operationType": "string",
    "progress": 0,
    "region": "string",
    "selfLink": "string",
    "startTime": "string",
    "status": "PENDING",
    "statusMessage": "string",
    "targetId": "string",
    "targetLink": "string",
    "user": "string",
    "warnings": [
      {
        "code": "DEPRECATED_RESOURCE_USED",
        "data": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "message": "string"
      }
    ],
    "zone": "string"
  },
  "options": {
    "asyncOptions": [
      {
        "methodMatch": "string",
        "pollingOptions": {
          "diagnostics": [
            {
              "field": "string",
              "level": "UNKNOWN"
            }
          ],
          "failCondition": "string",
          "finishCondition": "string",
          "pollingLink": "string",
          "targetLink": "string"
        }
      }
    ],
    "inputMappings": [
      {
        "fieldName": "string",
        "location": "UNKNOWN",
        "methodMatch": "string",
        "value": "string"
      }
    ],
    "validationOptions": {
      "schemaValidation": "UNKNOWN",
      "undeclaredProperties": "UNKNOWN"
    },
    "virtualProperties": "string"
  },
  "selfLink": "string"
}
```

A type provider that describes a service-backed Type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collectionOverrides|[[CollectionOverride](#schemacollectionoverride)]|false|none|Allows resource handling overrides for specific collections|
|credential|[Credential](#schemacredential)|false|none|Credential used when interacting with this type.|
|customCertificateAuthorityRoots|[string]|false|none|List of up to 2 custom certificate authority roots to use for TLS authentication when making calls on behalf of this type provider. If set, TLS authentication will exclusively use these roots instead of relying on publicly trusted certificate authorities when validating TLS certificate authenticity. The certificates must be in base64-encoded PEM format. The maximum size of each certificate must not exceed 10KB.|
|description|string|false|none|An optional textual description of the resource; provided by the client when the resource is created.|
|descriptorUrl|string|false|none|Descriptor Url for the this type provider.|
|id|string(uint64)|false|none|Output only. Unique identifier for the resource defined by the server.|
|insertTime|string|false|none|Output only. Creation timestamp in RFC3339 text format.|
|labels|[[TypeProviderLabelEntry](#schematypeproviderlabelentry)]|false|none|Map of One Platform labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`|
|name|string|false|none|Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.|
|operation|[Operation](#schemaoperation)|false|none|Output only. The Operation that most recently ran, or is currently running, on this type provider.|
|options|[Options](#schemaoptions)|false|none|Options to apply when handling any resources in this service.|
|selfLink|string|false|none|Output only. Self link for the type provider.|

<h2 id="tocS_TypeProviderLabelEntry">TypeProviderLabelEntry</h2>
<!-- backwards compatibility -->
<a id="schematypeproviderlabelentry"></a>
<a id="schema_TypeProviderLabelEntry"></a>
<a id="tocStypeproviderlabelentry"></a>
<a id="tocstypeproviderlabelentry"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

Label object for TypeProviders

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|Key of the label|
|value|string|false|none|Value of the label|

<h2 id="tocS_TypeProvidersListResponse">TypeProvidersListResponse</h2>
<!-- backwards compatibility -->
<a id="schematypeproviderslistresponse"></a>
<a id="schema_TypeProvidersListResponse"></a>
<a id="tocStypeproviderslistresponse"></a>
<a id="tocstypeproviderslistresponse"></a>

```json
{
  "nextPageToken": "string",
  "typeProviders": [
    {
      "collectionOverrides": [
        {
          "collection": "string",
          "options": {
            "asyncOptions": [
              {
                "methodMatch": "string",
                "pollingOptions": {
                  "diagnostics": [
                    {
                      "field": "string",
                      "level": "UNKNOWN"
                    }
                  ],
                  "failCondition": "string",
                  "finishCondition": "string",
                  "pollingLink": "string",
                  "targetLink": "string"
                }
              }
            ],
            "inputMappings": [
              {
                "fieldName": "string",
                "location": "UNKNOWN",
                "methodMatch": "string",
                "value": "string"
              }
            ],
            "validationOptions": {
              "schemaValidation": "UNKNOWN",
              "undeclaredProperties": "UNKNOWN"
            },
            "virtualProperties": "string"
          }
        }
      ],
      "credential": {
        "basicAuth": {
          "password": "string",
          "user": "string"
        },
        "serviceAccount": {
          "email": "string"
        },
        "useProjectDefault": true
      },
      "customCertificateAuthorityRoots": [
        "string"
      ],
      "description": "string",
      "descriptorUrl": "string",
      "id": "string",
      "insertTime": "string",
      "labels": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "name": "string",
      "operation": {
        "clientOperationId": "string",
        "creationTimestamp": "string",
        "description": "string",
        "endTime": "string",
        "error": {
          "errors": [
            {
              "code": "string",
              "location": "string",
              "message": "string"
            }
          ]
        },
        "httpErrorMessage": "string",
        "httpErrorStatusCode": 0,
        "id": "string",
        "insertTime": "string",
        "kind": "compute#operation",
        "name": "string",
        "operationGroupId": "string",
        "operationType": "string",
        "progress": 0,
        "region": "string",
        "selfLink": "string",
        "startTime": "string",
        "status": "PENDING",
        "statusMessage": "string",
        "targetId": "string",
        "targetLink": "string",
        "user": "string",
        "warnings": [
          {
            "code": "DEPRECATED_RESOURCE_USED",
            "data": [
              {
                "key": "string",
                "value": "string"
              }
            ],
            "message": "string"
          }
        ],
        "zone": "string"
      },
      "options": {
        "asyncOptions": [
          {
            "methodMatch": "string",
            "pollingOptions": {
              "diagnostics": [
                {
                  "field": "string",
                  "level": "UNKNOWN"
                }
              ],
              "failCondition": "string",
              "finishCondition": "string",
              "pollingLink": "string",
              "targetLink": "string"
            }
          }
        ],
        "inputMappings": [
          {
            "fieldName": "string",
            "location": "UNKNOWN",
            "methodMatch": "string",
            "value": "string"
          }
        ],
        "validationOptions": {
          "schemaValidation": "UNKNOWN",
          "undeclaredProperties": "UNKNOWN"
        },
        "virtualProperties": "string"
      },
      "selfLink": "string"
    }
  ]
}
```

A response that returns all Type Providers supported by Deployment Manager

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token used to continue a truncated list request.|
|typeProviders|[[TypeProvider](#schematypeprovider)]|false|none|Output only. A list of resource type providers supported by Deployment Manager.|

<h2 id="tocS_TypeProvidersListTypesResponse">TypeProvidersListTypesResponse</h2>
<!-- backwards compatibility -->
<a id="schematypeproviderslisttypesresponse"></a>
<a id="schema_TypeProvidersListTypesResponse"></a>
<a id="tocStypeproviderslisttypesresponse"></a>
<a id="tocstypeproviderslisttypesresponse"></a>

```json
{
  "nextPageToken": "string",
  "types": [
    {
      "description": "string",
      "documentationLink": "string",
      "kind": "string",
      "name": "string",
      "schema": {
        "input": "string",
        "output": "string"
      },
      "selfLink": "string",
      "title": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token used to continue a truncated list request.|
|types|[[TypeInfo](#schematypeinfo)]|false|none|Output only. A list of resource type info.|

<h2 id="tocS_TypesListResponse">TypesListResponse</h2>
<!-- backwards compatibility -->
<a id="schematypeslistresponse"></a>
<a id="schema_TypesListResponse"></a>
<a id="tocStypeslistresponse"></a>
<a id="tocstypeslistresponse"></a>

```json
{
  "nextPageToken": "string",
  "types": [
    {
      "base": {
        "collectionOverrides": [
          {
            "collection": "string",
            "options": {
              "asyncOptions": [
                {
                  "methodMatch": "string",
                  "pollingOptions": {
                    "diagnostics": [
                      {
                        "field": "string",
                        "level": "UNKNOWN"
                      }
                    ],
                    "failCondition": "string",
                    "finishCondition": "string",
                    "pollingLink": "string",
                    "targetLink": "string"
                  }
                }
              ],
              "inputMappings": [
                {
                  "fieldName": "string",
                  "location": "UNKNOWN",
                  "methodMatch": "string",
                  "value": "string"
                }
              ],
              "validationOptions": {
                "schemaValidation": "UNKNOWN",
                "undeclaredProperties": "UNKNOWN"
              },
              "virtualProperties": "string"
            }
          }
        ],
        "credential": {
          "basicAuth": {
            "password": "string",
            "user": "string"
          },
          "serviceAccount": {
            "email": "string"
          },
          "useProjectDefault": true
        },
        "descriptorUrl": "string",
        "options": {
          "asyncOptions": [
            {
              "methodMatch": "string",
              "pollingOptions": {
                "diagnostics": [
                  {
                    "field": "string",
                    "level": "UNKNOWN"
                  }
                ],
                "failCondition": "string",
                "finishCondition": "string",
                "pollingLink": "string",
                "targetLink": "string"
              }
            }
          ],
          "inputMappings": [
            {
              "fieldName": "string",
              "location": "UNKNOWN",
              "methodMatch": "string",
              "value": "string"
            }
          ],
          "validationOptions": {
            "schemaValidation": "UNKNOWN",
            "undeclaredProperties": "UNKNOWN"
          },
          "virtualProperties": "string"
        }
      },
      "description": "string",
      "id": "string",
      "insertTime": "string",
      "labels": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "name": "string",
      "operation": {
        "clientOperationId": "string",
        "creationTimestamp": "string",
        "description": "string",
        "endTime": "string",
        "error": {
          "errors": [
            {
              "code": "string",
              "location": "string",
              "message": "string"
            }
          ]
        },
        "httpErrorMessage": "string",
        "httpErrorStatusCode": 0,
        "id": "string",
        "insertTime": "string",
        "kind": "compute#operation",
        "name": "string",
        "operationGroupId": "string",
        "operationType": "string",
        "progress": 0,
        "region": "string",
        "selfLink": "string",
        "startTime": "string",
        "status": "PENDING",
        "statusMessage": "string",
        "targetId": "string",
        "targetLink": "string",
        "user": "string",
        "warnings": [
          {
            "code": "DEPRECATED_RESOURCE_USED",
            "data": [
              {
                "key": "string",
                "value": "string"
              }
            ],
            "message": "string"
          }
        ],
        "zone": "string"
      },
      "selfLink": "string"
    }
  ]
}
```

A response that returns all Types supported by Deployment Manager

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token used to continue a truncated list request.|
|types|[[Type](#schematype)]|false|none|Output only. A list of resource types supported by Deployment Manager.|

<h2 id="tocS_ValidationOptions">ValidationOptions</h2>
<!-- backwards compatibility -->
<a id="schemavalidationoptions"></a>
<a id="schema_ValidationOptions"></a>
<a id="tocSvalidationoptions"></a>
<a id="tocsvalidationoptions"></a>

```json
{
  "schemaValidation": "UNKNOWN",
  "undeclaredProperties": "UNKNOWN"
}
```

Options for how to validate and process properties on a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schemaValidation|string|false|none|Customize how deployment manager will validate the resource against schema errors.|
|undeclaredProperties|string|false|none|Specify what to do with extra properties when executing a request.|

#### Enumerated Values

|Property|Value|
|---|---|
|schemaValidation|UNKNOWN|
|schemaValidation|IGNORE|
|schemaValidation|IGNORE_WITH_WARNINGS|
|schemaValidation|FAIL|
|undeclaredProperties|UNKNOWN|
|undeclaredProperties|INCLUDE|
|undeclaredProperties|IGNORE|
|undeclaredProperties|INCLUDE_WITH_WARNINGS|
|undeclaredProperties|IGNORE_WITH_WARNINGS|
|undeclaredProperties|FAIL|
