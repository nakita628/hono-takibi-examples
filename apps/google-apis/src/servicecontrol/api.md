<h1 id="service-control-api">Service Control API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Provides admission control and telemetry reporting for services integrated with Service Infrastructure.

Base URLs:

* <a href="https://servicecontrol.googleapis.com/">https://servicecontrol.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/service-control/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/servicecontrol|Manage your Google Service Control data|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/servicecontrol|Manage your Google Service Control data|

<h1 id="service-control-api-services">services</h1>

## servicecontrol.services.check

<a id="opIdservicecontrol.services.check"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/services/string:check \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attributes": {
      "api": {
        "operation": "string",
        "protocol": "string",
        "service": "string",
        "version": "string"
      },
      "destination": {
        "ip": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "port": "string",
        "principal": "string",
        "regionCode": "string"
      },
      "extensions": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "origin": {
        "ip": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "port": "string",
        "principal": "string",
        "regionCode": "string"
      },
      "request": {
        "auth": {
          "accessLevels": [
            "string"
          ],
          "audiences": [
            "string"
          ],
          "claims": {
            "property1": null,
            "property2": null
          },
          "presenter": "string",
          "principal": "string"
        },
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "host": "string",
        "id": "string",
        "method": "string",
        "path": "string",
        "protocol": "string",
        "query": "string",
        "reason": "string",
        "scheme": "string",
        "size": "string",
        "time": "string"
      },
      "resource": {
        "annotations": {
          "property1": "string",
          "property2": "string"
        },
        "createTime": "string",
        "deleteTime": "string",
        "displayName": "string",
        "etag": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "location": "string",
        "name": "string",
        "service": "string",
        "type": "string",
        "uid": "string",
        "updateTime": "string"
      },
      "response": {
        "backendLatency": "string",
        "code": "string",
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "size": "string",
        "time": "string"
      },
      "source": {
        "ip": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "port": "string",
        "principal": "string",
        "regionCode": "string"
      }
    },
    "flags": "string",
    "resources": [
      {
        "container": "string",
        "location": "string",
        "name": "string",
        "permission": "string",
        "type": "string"
      }
    ],
    "serviceConfigId": "string"
  }'
```

`POST /v2/services/{serviceName}:check`

Private Preview. This feature is only available for approved services. This method provides admission control for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It checks whether an operation should be allowed based on the service configuration and relevant policies. It must be called before the operation is executed. For more information, see [Admission Control](https://cloud.google.com/service-infrastructure/docs/admission-control). NOTE: The admission control has an expected policy propagation delay of 60s. The caller **must** not depend on the most recent policy changes. NOTE: The admission control has a hard limit of 1 referenced resources per call. If an operation refers to more than 1 resources, the caller must call the Check method multiple times. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).

> Body parameter

```json
{
  "attributes": {
    "api": {
      "operation": "string",
      "protocol": "string",
      "service": "string",
      "version": "string"
    },
    "destination": {
      "ip": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "port": "string",
      "principal": "string",
      "regionCode": "string"
    },
    "extensions": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "origin": {
      "ip": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "port": "string",
      "principal": "string",
      "regionCode": "string"
    },
    "request": {
      "auth": {
        "accessLevels": [
          "string"
        ],
        "audiences": [
          "string"
        ],
        "claims": {
          "property1": null,
          "property2": null
        },
        "presenter": "string",
        "principal": "string"
      },
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "host": "string",
      "id": "string",
      "method": "string",
      "path": "string",
      "protocol": "string",
      "query": "string",
      "reason": "string",
      "scheme": "string",
      "size": "string",
      "time": "string"
    },
    "resource": {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "createTime": "string",
      "deleteTime": "string",
      "displayName": "string",
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "location": "string",
      "name": "string",
      "service": "string",
      "type": "string",
      "uid": "string",
      "updateTime": "string"
    },
    "response": {
      "backendLatency": "string",
      "code": "string",
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "size": "string",
      "time": "string"
    },
    "source": {
      "ip": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "port": "string",
      "principal": "string",
      "regionCode": "string"
    }
  },
  "flags": "string",
  "resources": [
    {
      "container": "string",
      "location": "string",
      "name": "string",
      "permission": "string",
      "type": "string"
    }
  ],
  "serviceConfigId": "string"
}
```

<h3 id="servicecontrolservicescheck-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceName|path|string|true|The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`. See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name.|
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
|body|body|[CheckRequest](#schemacheckrequest)|false|none|
|» attributes|body|[AttributeContext](#schemaattributecontext)|false|Describes attributes about the operation being executed by the service.|
|» flags|body|string|false|Optional. Contains a comma-separated list of flags.|
|» resources|body|[[ResourceInfo](#schemaresourceinfo)]|false|Describes the resources and the policies applied to each resource.|
|» serviceConfigId|body|string|false|Specifies the version of the service configuration that should be used to process the request. Must not be empty. Set this field to 'latest' to specify using the latest configuration.|

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
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "status": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  }
}
```

<h3 id="servicecontrolservicescheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CheckResponse](#schemacheckresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/servicecontrol ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/servicecontrol )
</aside>

## servicecontrol.services.report

<a id="opIdservicecontrol.services.report"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/services/string:report \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "operations": [
      {
        "api": {
          "operation": "string",
          "protocol": "string",
          "service": "string",
          "version": "string"
        },
        "destination": {
          "ip": "string",
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "port": "string",
          "principal": "string",
          "regionCode": "string"
        },
        "extensions": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "origin": {
          "ip": "string",
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "port": "string",
          "principal": "string",
          "regionCode": "string"
        },
        "request": {
          "auth": {
            "accessLevels": [
              "string"
            ],
            "audiences": [
              "string"
            ],
            "claims": {
              "property1": null,
              "property2": null
            },
            "presenter": "string",
            "principal": "string"
          },
          "headers": {
            "property1": "string",
            "property2": "string"
          },
          "host": "string",
          "id": "string",
          "method": "string",
          "path": "string",
          "protocol": "string",
          "query": "string",
          "reason": "string",
          "scheme": "string",
          "size": "string",
          "time": "string"
        },
        "resource": {
          "annotations": {
            "property1": "string",
            "property2": "string"
          },
          "createTime": "string",
          "deleteTime": "string",
          "displayName": "string",
          "etag": "string",
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "location": "string",
          "name": "string",
          "service": "string",
          "type": "string",
          "uid": "string",
          "updateTime": "string"
        },
        "response": {
          "backendLatency": "string",
          "code": "string",
          "headers": {
            "property1": "string",
            "property2": "string"
          },
          "size": "string",
          "time": "string"
        },
        "source": {
          "ip": "string",
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "port": "string",
          "principal": "string",
          "regionCode": "string"
        }
      }
    ],
    "serviceConfigId": "string"
  }'
```

`POST /v2/services/{serviceName}:report`

Private Preview. This feature is only available for approved services. This method provides telemetry reporting for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It reports a list of operations that have occurred on a service. It must be called after the operations have been executed. For more information, see [Telemetry Reporting](https://cloud.google.com/service-infrastructure/docs/telemetry-reporting). NOTE: The telemetry reporting has a hard limit of 1000 operations and 1MB per Report call. It is recommended to have no more than 100 operations per call. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).

> Body parameter

```json
{
  "operations": [
    {
      "api": {
        "operation": "string",
        "protocol": "string",
        "service": "string",
        "version": "string"
      },
      "destination": {
        "ip": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "port": "string",
        "principal": "string",
        "regionCode": "string"
      },
      "extensions": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "origin": {
        "ip": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "port": "string",
        "principal": "string",
        "regionCode": "string"
      },
      "request": {
        "auth": {
          "accessLevels": [
            "string"
          ],
          "audiences": [
            "string"
          ],
          "claims": {
            "property1": null,
            "property2": null
          },
          "presenter": "string",
          "principal": "string"
        },
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "host": "string",
        "id": "string",
        "method": "string",
        "path": "string",
        "protocol": "string",
        "query": "string",
        "reason": "string",
        "scheme": "string",
        "size": "string",
        "time": "string"
      },
      "resource": {
        "annotations": {
          "property1": "string",
          "property2": "string"
        },
        "createTime": "string",
        "deleteTime": "string",
        "displayName": "string",
        "etag": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "location": "string",
        "name": "string",
        "service": "string",
        "type": "string",
        "uid": "string",
        "updateTime": "string"
      },
      "response": {
        "backendLatency": "string",
        "code": "string",
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "size": "string",
        "time": "string"
      },
      "source": {
        "ip": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "port": "string",
        "principal": "string",
        "regionCode": "string"
      }
    }
  ],
  "serviceConfigId": "string"
}
```

<h3 id="servicecontrolservicesreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceName|path|string|true|The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`. See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name.|
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
|body|body|[ReportRequest](#schemareportrequest)|false|none|
|» operations|body|[[AttributeContext](#schemaattributecontext)]|false|Describes the list of operations to be reported. Each operation is represented as an AttributeContext, and contains all attributes around an API access.|
|» serviceConfigId|body|string|false|Specifies the version of the service configuration that should be used to process the request. Must not be empty. Set this field to 'latest' to specify using the latest configuration.|

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

<h3 id="servicecontrolservicesreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ReportResponse](#schemareportresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/servicecontrol ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/servicecontrol )
</aside>

# Schemas

<h2 id="tocS_Api">Api</h2>
<!-- backwards compatibility -->
<a id="schemaapi"></a>
<a id="schema_Api"></a>
<a id="tocSapi"></a>
<a id="tocsapi"></a>

```json
{
  "operation": "string",
  "protocol": "string",
  "service": "string",
  "version": "string"
}
```

This message defines attributes associated with API operations, such as a network API request. The terminology is based on the conventions used by Google APIs, Istio, and OpenAPI.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|false|none|The API operation name. For gRPC requests, it is the fully qualified API method name, such as "google.pubsub.v1.Publisher.Publish". For OpenAPI requests, it is the `operationId`, such as "getPet".|
|protocol|string|false|none|The API protocol used for sending the request, such as "http", "https", "grpc", or "internal".|
|service|string|false|none|The API service name. It is a logical identifier for a networked API, such as "pubsub.googleapis.com". The naming syntax depends on the API management system being used for handling the request.|
|version|string|false|none|The API version associated with the API operation above, such as "v1" or "v1alpha1".|

<h2 id="tocS_AttributeContext">AttributeContext</h2>
<!-- backwards compatibility -->
<a id="schemaattributecontext"></a>
<a id="schema_AttributeContext"></a>
<a id="tocSattributecontext"></a>
<a id="tocsattributecontext"></a>

```json
{
  "api": {
    "operation": "string",
    "protocol": "string",
    "service": "string",
    "version": "string"
  },
  "destination": {
    "ip": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "port": "string",
    "principal": "string",
    "regionCode": "string"
  },
  "extensions": [
    {
      "property1": null,
      "property2": null
    }
  ],
  "origin": {
    "ip": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "port": "string",
    "principal": "string",
    "regionCode": "string"
  },
  "request": {
    "auth": {
      "accessLevels": [
        "string"
      ],
      "audiences": [
        "string"
      ],
      "claims": {
        "property1": null,
        "property2": null
      },
      "presenter": "string",
      "principal": "string"
    },
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "host": "string",
    "id": "string",
    "method": "string",
    "path": "string",
    "protocol": "string",
    "query": "string",
    "reason": "string",
    "scheme": "string",
    "size": "string",
    "time": "string"
  },
  "resource": {
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "createTime": "string",
    "deleteTime": "string",
    "displayName": "string",
    "etag": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "location": "string",
    "name": "string",
    "service": "string",
    "type": "string",
    "uid": "string",
    "updateTime": "string"
  },
  "response": {
    "backendLatency": "string",
    "code": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "size": "string",
    "time": "string"
  },
  "source": {
    "ip": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "port": "string",
    "principal": "string",
    "regionCode": "string"
  }
}
```

This message defines the standard attribute vocabulary for Google APIs. An attribute is a piece of metadata that describes an activity on a network service. For example, the size of an HTTP request, or the status code of an HTTP response. Each attribute has a type and a name, which is logically defined as a proto message field in `AttributeContext`. The field type becomes the attribute type, and the field path becomes the attribute name. For example, the attribute `source.ip` maps to field `AttributeContext.source.ip`. This message definition is guaranteed not to have any wire breaking change. So you can use it directly for passing attributes across different systems. NOTE: Different system may generate different subset of attributes. Please verify the system specification before relying on an attribute generated a system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api|[Api](#schemaapi)|false|none|Represents an API operation that is involved to a network activity.|
|destination|[Peer](#schemapeer)|false|none|The destination of a network activity, such as accepting a TCP connection. In a multi hop network activity, the destination represents the receiver of the last hop.|
|extensions|[object]|false|none|Supports extensions for advanced use cases, such as logs and metrics.|
|origin|[Peer](#schemapeer)|false|none|The origin of a network activity. In a multi hop network activity, the origin represents the sender of the first hop. For the first hop, the `source` and the `origin` must have the same content.|
|request|[Request](#schemarequest)|false|none|Represents a network request, such as an HTTP request.|
|resource|[Resource](#schemaresource)|false|none|Represents a target resource that is involved with a network activity. If multiple resources are involved with an activity, this must be the primary one.|
|response|[Response](#schemaresponse)|false|none|Represents a network response, such as an HTTP response.|
|source|[Peer](#schemapeer)|false|none|The source of a network activity, such as starting a TCP connection. In a multi hop network activity, the source represents the sender of the last hop.|

<h2 id="tocS_AuditLog">AuditLog</h2>
<!-- backwards compatibility -->
<a id="schemaauditlog"></a>
<a id="schema_AuditLog"></a>
<a id="tocSauditlog"></a>
<a id="tocsauditlog"></a>

```json
{
  "authenticationInfo": {
    "authoritySelector": "string",
    "principalEmail": "string",
    "principalSubject": "string",
    "serviceAccountDelegationInfo": [
      {
        "firstPartyPrincipal": {
          "principalEmail": "string",
          "serviceMetadata": {
            "property1": null,
            "property2": null
          }
        },
        "principalSubject": "string",
        "thirdPartyPrincipal": {
          "thirdPartyClaims": {
            "property1": null,
            "property2": null
          }
        }
      }
    ],
    "serviceAccountKeyName": "string",
    "thirdPartyPrincipal": {
      "property1": null,
      "property2": null
    }
  },
  "authorizationInfo": [
    {
      "granted": true,
      "permission": "string",
      "resource": "string",
      "resourceAttributes": {
        "annotations": {
          "property1": "string",
          "property2": "string"
        },
        "createTime": "string",
        "deleteTime": "string",
        "displayName": "string",
        "etag": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "location": "string",
        "name": "string",
        "service": "string",
        "type": "string",
        "uid": "string",
        "updateTime": "string"
      }
    }
  ],
  "metadata": {
    "property1": null,
    "property2": null
  },
  "methodName": "string",
  "numResponseItems": "string",
  "policyViolationInfo": {
    "orgPolicyViolationInfo": {
      "payload": {
        "property1": null,
        "property2": null
      },
      "resourceTags": {
        "property1": "string",
        "property2": "string"
      },
      "resourceType": "string",
      "violationInfo": [
        {
          "checkedValue": "string",
          "constraint": "string",
          "errorMessage": "string",
          "policyType": "POLICY_TYPE_UNSPECIFIED"
        }
      ]
    }
  },
  "request": {
    "property1": null,
    "property2": null
  },
  "requestMetadata": {
    "callerIp": "string",
    "callerNetwork": "string",
    "callerSuppliedUserAgent": "string",
    "destinationAttributes": {
      "ip": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "port": "string",
      "principal": "string",
      "regionCode": "string"
    },
    "requestAttributes": {
      "auth": {
        "accessLevels": [
          "string"
        ],
        "audiences": [
          "string"
        ],
        "claims": {
          "property1": null,
          "property2": null
        },
        "presenter": "string",
        "principal": "string"
      },
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "host": "string",
      "id": "string",
      "method": "string",
      "path": "string",
      "protocol": "string",
      "query": "string",
      "reason": "string",
      "scheme": "string",
      "size": "string",
      "time": "string"
    }
  },
  "resourceLocation": {
    "currentLocations": [
      "string"
    ],
    "originalLocations": [
      "string"
    ]
  },
  "resourceName": "string",
  "resourceOriginalState": {
    "property1": null,
    "property2": null
  },
  "response": {
    "property1": null,
    "property2": null
  },
  "serviceData": {
    "property1": null,
    "property2": null
  },
  "serviceName": "string",
  "status": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  }
}
```

Common audit log format for Google Cloud Platform API operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticationInfo|[AuthenticationInfo](#schemaauthenticationinfo)|false|none|Authentication information.|
|authorizationInfo|[[AuthorizationInfo](#schemaauthorizationinfo)]|false|none|Authorization information. If there are multiple resources or permissions involved, then there is one AuthorizationInfo element for each {resource, permission} tuple.|
|metadata|object|false|none|Other service-specific data about the request, response, and other information associated with the current audited event.|
|methodName|string|false|none|The name of the service method or operation. For API calls, this should be the name of the API method. For example, "google.cloud.bigquery.v2.TableService.InsertTable" "google.logging.v2.ConfigServiceV2.CreateSink"|
|numResponseItems|string(int64)|false|none|The number of items returned from a List or Query API method, if applicable.|
|policyViolationInfo|[PolicyViolationInfo](#schemapolicyviolationinfo)|false|none|Indicates the policy violations for this request. If the request is denied by the policy, violation information will be logged here.|
|request|object|false|none|The operation request. This may not include all request parameters, such as those that are too large, privacy-sensitive, or duplicated elsewhere in the log record. It should never include user-generated data, such as file contents. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property.|
|requestMetadata|[RequestMetadata](#schemarequestmetadata)|false|none|Metadata about the operation.|
|resourceLocation|[ResourceLocation](#schemaresourcelocation)|false|none|The resource location information.|
|resourceName|string|false|none|The resource or collection that is the target of the operation. The name is a scheme-less URI, not including the API service name. For example: "projects/PROJECT_ID/zones/us-central1-a/instances" "projects/PROJECT_ID/datasets/DATASET_ID"|
|resourceOriginalState|object|false|none|The resource's original state before mutation. Present only for operations which have successfully modified the targeted resource(s). In general, this field should contain all changed fields, except those that are already been included in `request`, `response`, `metadata` or `service_data` fields. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property.|
|response|object|false|none|The operation response. This may not include all response elements, such as those that are too large, privacy-sensitive, or duplicated elsewhere in the log record. It should never include user-generated data, such as file contents. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property.|
|serviceData|object|false|none|Deprecated. Use the `metadata` field instead. Other service-specific data about the request, response, and other activities.|
|serviceName|string|false|none|The name of the API service performing the operation. For example, `"compute.googleapis.com"`.|
|status|[Status](#schemastatus)|false|none|The status of the overall operation.|

<h2 id="tocS_Auth">Auth</h2>
<!-- backwards compatibility -->
<a id="schemaauth"></a>
<a id="schema_Auth"></a>
<a id="tocSauth"></a>
<a id="tocsauth"></a>

```json
{
  "accessLevels": [
    "string"
  ],
  "audiences": [
    "string"
  ],
  "claims": {
    "property1": null,
    "property2": null
  },
  "presenter": "string",
  "principal": "string"
}
```

This message defines request authentication attributes. Terminology is based on the JSON Web Token (JWT) standard, but the terms also correlate to concepts in other standards.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessLevels|[string]|false|none|A list of access level resource names that allow resources to be accessed by authenticated requester. It is part of Secure GCP processing for the incoming request. An access level string has the format: "//{api_service_name}/accessPolicies/{policy_id}/accessLevels/{short_name}" Example: "//accesscontextmanager.googleapis.com/accessPolicies/MY_POLICY_ID/accessLevels/MY_LEVEL"|
|audiences|[string]|false|none|The intended audience(s) for this authentication information. Reflects the audience (`aud`) claim within a JWT. The audience value(s) depends on the `issuer`, but typically include one or more of the following pieces of information: * The services intended to receive the credential. For example, ["https://pubsub.googleapis.com/", "https://storage.googleapis.com/"]. * A set of service-based scopes. For example, ["https://www.googleapis.com/auth/cloud-platform"]. * The client id of an app, such as the Firebase project id for JWTs from Firebase Auth. Consult the documentation for the credential issuer to determine the information provided.|
|claims|object|false|none|Structured claims presented with the credential. JWTs include `{key: value}` pairs for standard and private claims. The following is a subset of the standard required and optional claims that would typically be presented for a Google-based JWT: {'iss': 'accounts.google.com', 'sub': '113289723416554971153', 'aud': ['123456789012', 'pubsub.googleapis.com'], 'azp': '123456789012.apps.googleusercontent.com', 'email': 'jsmith@example.com', 'iat': 1353601026, 'exp': 1353604926} SAML assertions are similarly specified, but with an identity provider dependent structure.|
|presenter|string|false|none|The authorized presenter of the credential. Reflects the optional Authorized Presenter (`azp`) claim within a JWT or the OAuth client id. For example, a Google Cloud Platform client id looks as follows: "123456789012.apps.googleusercontent.com".|
|principal|string|false|none|The authenticated principal. Reflects the issuer (`iss`) and subject (`sub`) claims within a JWT. The issuer and subject should be `/` delimited, with `/` percent-encoded within the subject fragment. For Google accounts, the principal format is: "https://accounts.google.com/{id}"|

<h2 id="tocS_AuthenticationInfo">AuthenticationInfo</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationinfo"></a>
<a id="schema_AuthenticationInfo"></a>
<a id="tocSauthenticationinfo"></a>
<a id="tocsauthenticationinfo"></a>

```json
{
  "authoritySelector": "string",
  "principalEmail": "string",
  "principalSubject": "string",
  "serviceAccountDelegationInfo": [
    {
      "firstPartyPrincipal": {
        "principalEmail": "string",
        "serviceMetadata": {
          "property1": null,
          "property2": null
        }
      },
      "principalSubject": "string",
      "thirdPartyPrincipal": {
        "thirdPartyClaims": {
          "property1": null,
          "property2": null
        }
      }
    }
  ],
  "serviceAccountKeyName": "string",
  "thirdPartyPrincipal": {
    "property1": null,
    "property2": null
  }
}
```

Authentication information for the operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authoritySelector|string|false|none|The authority selector specified by the requestor, if any. It is not guaranteed that the principal was allowed to use this authority.|
|principalEmail|string|false|none|The email address of the authenticated user (or service account on behalf of third party principal) making the request. For third party identity callers, the `principal_subject` field is populated instead of this field. For privacy reasons, the principal email address is sometimes redacted. For more information, see [Caller identities in audit logs](https://cloud.google.com/logging/docs/audit#user-id).|
|principalSubject|string|false|none|String representation of identity of requesting party. Populated for both first and third party identities.|
|serviceAccountDelegationInfo|[[ServiceAccountDelegationInfo](#schemaserviceaccountdelegationinfo)]|false|none|Identity delegation history of an authenticated service account that makes the request. It contains information on the real authorities that try to access GCP resources by delegating on a service account. When multiple authorities present, they are guaranteed to be sorted based on the original ordering of the identity delegation events.|
|serviceAccountKeyName|string|false|none|The name of the service account key used to create or exchange credentials for authenticating the service account making the request. This is a scheme-less URI full resource name. For example: "//iam.googleapis.com/projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}"|
|thirdPartyPrincipal|object|false|none|The third party identification (if any) of the authenticated user making the request. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property.|

<h2 id="tocS_AuthorizationInfo">AuthorizationInfo</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationinfo"></a>
<a id="schema_AuthorizationInfo"></a>
<a id="tocSauthorizationinfo"></a>
<a id="tocsauthorizationinfo"></a>

```json
{
  "granted": true,
  "permission": "string",
  "resource": "string",
  "resourceAttributes": {
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "createTime": "string",
    "deleteTime": "string",
    "displayName": "string",
    "etag": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "location": "string",
    "name": "string",
    "service": "string",
    "type": "string",
    "uid": "string",
    "updateTime": "string"
  }
}
```

Authorization information for the operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|granted|boolean|false|none|Whether or not authorization for `resource` and `permission` was granted.|
|permission|string|false|none|The required IAM permission.|
|resource|string|false|none|The resource being accessed, as a REST-style or cloud resource string. For example: bigquery.googleapis.com/projects/PROJECTID/datasets/DATASETID or projects/PROJECTID/datasets/DATASETID|
|resourceAttributes|[Resource](#schemaresource)|false|none|Resource attributes used in IAM condition evaluation. This field contains resource attributes like resource type and resource name. To get the whole view of the attributes used in IAM condition evaluation, the user must also look into `AuditLog.request_metadata.request_attributes`.|

<h2 id="tocS_CheckRequest">CheckRequest</h2>
<!-- backwards compatibility -->
<a id="schemacheckrequest"></a>
<a id="schema_CheckRequest"></a>
<a id="tocScheckrequest"></a>
<a id="tocscheckrequest"></a>

```json
{
  "attributes": {
    "api": {
      "operation": "string",
      "protocol": "string",
      "service": "string",
      "version": "string"
    },
    "destination": {
      "ip": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "port": "string",
      "principal": "string",
      "regionCode": "string"
    },
    "extensions": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "origin": {
      "ip": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "port": "string",
      "principal": "string",
      "regionCode": "string"
    },
    "request": {
      "auth": {
        "accessLevels": [
          "string"
        ],
        "audiences": [
          "string"
        ],
        "claims": {
          "property1": null,
          "property2": null
        },
        "presenter": "string",
        "principal": "string"
      },
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "host": "string",
      "id": "string",
      "method": "string",
      "path": "string",
      "protocol": "string",
      "query": "string",
      "reason": "string",
      "scheme": "string",
      "size": "string",
      "time": "string"
    },
    "resource": {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "createTime": "string",
      "deleteTime": "string",
      "displayName": "string",
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "location": "string",
      "name": "string",
      "service": "string",
      "type": "string",
      "uid": "string",
      "updateTime": "string"
    },
    "response": {
      "backendLatency": "string",
      "code": "string",
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "size": "string",
      "time": "string"
    },
    "source": {
      "ip": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "port": "string",
      "principal": "string",
      "regionCode": "string"
    }
  },
  "flags": "string",
  "resources": [
    {
      "container": "string",
      "location": "string",
      "name": "string",
      "permission": "string",
      "type": "string"
    }
  ],
  "serviceConfigId": "string"
}
```

Request message for the Check method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[AttributeContext](#schemaattributecontext)|false|none|Describes attributes about the operation being executed by the service.|
|flags|string|false|none|Optional. Contains a comma-separated list of flags.|
|resources|[[ResourceInfo](#schemaresourceinfo)]|false|none|Describes the resources and the policies applied to each resource.|
|serviceConfigId|string|false|none|Specifies the version of the service configuration that should be used to process the request. Must not be empty. Set this field to 'latest' to specify using the latest configuration.|

<h2 id="tocS_CheckResponse">CheckResponse</h2>
<!-- backwards compatibility -->
<a id="schemacheckresponse"></a>
<a id="schema_CheckResponse"></a>
<a id="tocScheckresponse"></a>
<a id="tocscheckresponse"></a>

```json
{
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "status": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  }
}
```

Response message for the Check method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headers|object|false|none|Returns a set of request contexts generated from the `CheckRequest`.|
|status|[Status](#schemastatus)|false|none|Operation is allowed when this field is not set. Any non-'OK' status indicates a denial; google.rpc.Status.details would contain additional details about the denial.|

<h2 id="tocS_FirstPartyPrincipal">FirstPartyPrincipal</h2>
<!-- backwards compatibility -->
<a id="schemafirstpartyprincipal"></a>
<a id="schema_FirstPartyPrincipal"></a>
<a id="tocSfirstpartyprincipal"></a>
<a id="tocsfirstpartyprincipal"></a>

```json
{
  "principalEmail": "string",
  "serviceMetadata": {
    "property1": null,
    "property2": null
  }
}
```

First party identity principal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|principalEmail|string|false|none|The email address of a Google account. .|
|serviceMetadata|object|false|none|Metadata about the service that uses the service account. .|

<h2 id="tocS_OrgPolicyViolationInfo">OrgPolicyViolationInfo</h2>
<!-- backwards compatibility -->
<a id="schemaorgpolicyviolationinfo"></a>
<a id="schema_OrgPolicyViolationInfo"></a>
<a id="tocSorgpolicyviolationinfo"></a>
<a id="tocsorgpolicyviolationinfo"></a>

```json
{
  "payload": {
    "property1": null,
    "property2": null
  },
  "resourceTags": {
    "property1": "string",
    "property2": "string"
  },
  "resourceType": "string",
  "violationInfo": [
    {
      "checkedValue": "string",
      "constraint": "string",
      "errorMessage": "string",
      "policyType": "POLICY_TYPE_UNSPECIFIED"
    }
  ]
}
```

Represents OrgPolicy Violation information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|object|false|none|Optional. Resource payload that is currently in scope and is subjected to orgpolicy conditions. This payload may be the subset of the actual Resource that may come in the request. This payload should not contain any core content.|
|resourceTags|object|false|none|Optional. Tags referenced on the resource at the time of evaluation. These also include the federated tags, if they are supplied in the CheckOrgPolicy or CheckCustomConstraints Requests. Optional field as of now. These tags are the Cloud tags that are available on the resource during the policy evaluation and will be available as part of the OrgPolicy check response for logging purposes.|
|resourceType|string|false|none|Optional. Resource type that the orgpolicy is checked against. Example: compute.googleapis.com/Instance, store.googleapis.com/bucket|
|violationInfo|[[ViolationInfo](#schemaviolationinfo)]|false|none|Optional. Policy violations|

<h2 id="tocS_Peer">Peer</h2>
<!-- backwards compatibility -->
<a id="schemapeer"></a>
<a id="schema_Peer"></a>
<a id="tocSpeer"></a>
<a id="tocspeer"></a>

```json
{
  "ip": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "port": "string",
  "principal": "string",
  "regionCode": "string"
}
```

This message defines attributes for a node that handles a network request. The node can be either a service or an application that sends, forwards, or receives the request. Service peers should fill in `principal` and `labels` as appropriate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ip|string|false|none|The IP address of the peer.|
|labels|object|false|none|The labels associated with the peer.|
|port|string(int64)|false|none|The network port of the peer.|
|principal|string|false|none|The identity of this peer. Similar to `Request.auth.principal`, but relative to the peer instead of the request. For example, the identity associated with a load balancer that forwarded the request.|
|regionCode|string|false|none|The CLDR country/region code associated with the above IP address. If the IP address is private, the `region_code` should reflect the physical location where this peer is running.|

<h2 id="tocS_PolicyViolationInfo">PolicyViolationInfo</h2>
<!-- backwards compatibility -->
<a id="schemapolicyviolationinfo"></a>
<a id="schema_PolicyViolationInfo"></a>
<a id="tocSpolicyviolationinfo"></a>
<a id="tocspolicyviolationinfo"></a>

```json
{
  "orgPolicyViolationInfo": {
    "payload": {
      "property1": null,
      "property2": null
    },
    "resourceTags": {
      "property1": "string",
      "property2": "string"
    },
    "resourceType": "string",
    "violationInfo": [
      {
        "checkedValue": "string",
        "constraint": "string",
        "errorMessage": "string",
        "policyType": "POLICY_TYPE_UNSPECIFIED"
      }
    ]
  }
}
```

Information related to policy violations for this request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orgPolicyViolationInfo|[OrgPolicyViolationInfo](#schemaorgpolicyviolationinfo)|false|none|Indicates the orgpolicy violations for this resource.|

<h2 id="tocS_ReportRequest">ReportRequest</h2>
<!-- backwards compatibility -->
<a id="schemareportrequest"></a>
<a id="schema_ReportRequest"></a>
<a id="tocSreportrequest"></a>
<a id="tocsreportrequest"></a>

```json
{
  "operations": [
    {
      "api": {
        "operation": "string",
        "protocol": "string",
        "service": "string",
        "version": "string"
      },
      "destination": {
        "ip": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "port": "string",
        "principal": "string",
        "regionCode": "string"
      },
      "extensions": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "origin": {
        "ip": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "port": "string",
        "principal": "string",
        "regionCode": "string"
      },
      "request": {
        "auth": {
          "accessLevels": [
            "string"
          ],
          "audiences": [
            "string"
          ],
          "claims": {
            "property1": null,
            "property2": null
          },
          "presenter": "string",
          "principal": "string"
        },
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "host": "string",
        "id": "string",
        "method": "string",
        "path": "string",
        "protocol": "string",
        "query": "string",
        "reason": "string",
        "scheme": "string",
        "size": "string",
        "time": "string"
      },
      "resource": {
        "annotations": {
          "property1": "string",
          "property2": "string"
        },
        "createTime": "string",
        "deleteTime": "string",
        "displayName": "string",
        "etag": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "location": "string",
        "name": "string",
        "service": "string",
        "type": "string",
        "uid": "string",
        "updateTime": "string"
      },
      "response": {
        "backendLatency": "string",
        "code": "string",
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "size": "string",
        "time": "string"
      },
      "source": {
        "ip": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "port": "string",
        "principal": "string",
        "regionCode": "string"
      }
    }
  ],
  "serviceConfigId": "string"
}
```

Request message for the Report method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|[[AttributeContext](#schemaattributecontext)]|false|none|Describes the list of operations to be reported. Each operation is represented as an AttributeContext, and contains all attributes around an API access.|
|serviceConfigId|string|false|none|Specifies the version of the service configuration that should be used to process the request. Must not be empty. Set this field to 'latest' to specify using the latest configuration.|

<h2 id="tocS_ReportResponse">ReportResponse</h2>
<!-- backwards compatibility -->
<a id="schemareportresponse"></a>
<a id="schema_ReportResponse"></a>
<a id="tocSreportresponse"></a>
<a id="tocsreportresponse"></a>

```json
{}
```

Response message for the Report method. If the request contains any invalid data, the server returns an RPC error.

<h2 id="tocS_Request">Request</h2>
<!-- backwards compatibility -->
<a id="schemarequest"></a>
<a id="schema_Request"></a>
<a id="tocSrequest"></a>
<a id="tocsrequest"></a>

```json
{
  "auth": {
    "accessLevels": [
      "string"
    ],
    "audiences": [
      "string"
    ],
    "claims": {
      "property1": null,
      "property2": null
    },
    "presenter": "string",
    "principal": "string"
  },
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "host": "string",
  "id": "string",
  "method": "string",
  "path": "string",
  "protocol": "string",
  "query": "string",
  "reason": "string",
  "scheme": "string",
  "size": "string",
  "time": "string"
}
```

This message defines attributes for an HTTP request. If the actual request is not an HTTP request, the runtime system should try to map the actual request to an equivalent HTTP request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth|[Auth](#schemaauth)|false|none|The request authentication. May be absent for unauthenticated requests. Derived from the HTTP request `Authorization` header or equivalent.|
|headers|object|false|none|The HTTP request headers. If multiple headers share the same key, they must be merged according to the HTTP spec. All header keys must be lowercased, because HTTP header keys are case-insensitive.|
|host|string|false|none|The HTTP request `Host` header value.|
|id|string|false|none|The unique ID for a request, which can be propagated to downstream systems. The ID should have low probability of collision within a single day for a specific service.|
|method|string|false|none|The HTTP request method, such as `GET`, `POST`.|
|path|string|false|none|The HTTP URL path, excluding the query parameters.|
|protocol|string|false|none|The network protocol used with the request, such as "http/1.1", "spdy/3", "h2", "h2c", "webrtc", "tcp", "udp", "quic". See https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids for details.|
|query|string|false|none|The HTTP URL query in the format of `name1=value1&name2=value2`, as it appears in the first line of the HTTP request. No decoding is performed.|
|reason|string|false|none|A special parameter for request reason. It is used by security systems to associate auditing information with a request.|
|scheme|string|false|none|The HTTP URL scheme, such as `http` and `https`.|
|size|string(int64)|false|none|The HTTP request size in bytes. If unknown, it must be -1.|
|time|string(google-datetime)|false|none|The timestamp when the `destination` service receives the last byte of the request.|

<h2 id="tocS_RequestMetadata">RequestMetadata</h2>
<!-- backwards compatibility -->
<a id="schemarequestmetadata"></a>
<a id="schema_RequestMetadata"></a>
<a id="tocSrequestmetadata"></a>
<a id="tocsrequestmetadata"></a>

```json
{
  "callerIp": "string",
  "callerNetwork": "string",
  "callerSuppliedUserAgent": "string",
  "destinationAttributes": {
    "ip": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "port": "string",
    "principal": "string",
    "regionCode": "string"
  },
  "requestAttributes": {
    "auth": {
      "accessLevels": [
        "string"
      ],
      "audiences": [
        "string"
      ],
      "claims": {
        "property1": null,
        "property2": null
      },
      "presenter": "string",
      "principal": "string"
    },
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "host": "string",
    "id": "string",
    "method": "string",
    "path": "string",
    "protocol": "string",
    "query": "string",
    "reason": "string",
    "scheme": "string",
    "size": "string",
    "time": "string"
  }
}
```

Metadata about the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callerIp|string|false|none|The IP address of the caller. For a caller from the internet, this will be the public IPv4 or IPv6 address. For calls made from inside Google's internal production network from one GCP service to another, `caller_ip` will be redacted to "private". For a caller from a Compute Engine VM with a external IP address, `caller_ip` will be the VM's external IP address. For a caller from a Compute Engine VM without a external IP address, if the VM is in the same organization (or project) as the accessed resource, `caller_ip` will be the VM's internal IPv4 address, otherwise `caller_ip` will be redacted to "gce-internal-ip". See https://cloud.google.com/compute/docs/vpc/ for more information.|
|callerNetwork|string|false|none|The network of the caller. Set only if the network host project is part of the same GCP organization (or project) as the accessed resource. See https://cloud.google.com/compute/docs/vpc/ for more information. This is a scheme-less URI full resource name. For example: "//compute.googleapis.com/projects/PROJECT_ID/global/networks/NETWORK_ID"|
|callerSuppliedUserAgent|string|false|none|The user agent of the caller. This information is not authenticated and should be treated accordingly. For example: + `google-api-python-client/1.4.0`: The request was made by the Google API client for Python. + `Cloud SDK Command Line Tool apitools-client/1.0 gcloud/0.9.62`: The request was made by the Google Cloud SDK CLI (gcloud). + `AppEngine-Google; (+http://code.google.com/appengine; appid: s~my-project`: The request was made from the `my-project` App Engine app.|
|destinationAttributes|[Peer](#schemapeer)|false|none|The destination of a network activity, such as accepting a TCP connection. In a multi hop network activity, the destination represents the receiver of the last hop. Only two fields are used in this message, Peer.port and Peer.ip. These fields are optionally populated by those services utilizing the IAM condition feature.|
|requestAttributes|[Request](#schemarequest)|false|none|Request attributes used in IAM condition evaluation. This field contains request attributes like request time and access levels associated with the request. To get the whole view of the attributes used in IAM condition evaluation, the user must also look into `AuditLog.authentication_info.resource_attributes`.|

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "createTime": "string",
  "deleteTime": "string",
  "displayName": "string",
  "etag": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "location": "string",
  "name": "string",
  "service": "string",
  "type": "string",
  "uid": "string",
  "updateTime": "string"
}
```

This message defines core attributes for a resource. A resource is an addressable (named) entity provided by the destination service. For example, a file stored on a network storage service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|object|false|none|Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/|
|createTime|string(google-datetime)|false|none|Output only. The timestamp when the resource was created. This may be either the time creation was initiated or when it was completed.|
|deleteTime|string(google-datetime)|false|none|Output only. The timestamp when the resource was deleted. If the resource is not deleted, this must be empty.|
|displayName|string|false|none|Mutable. The display name set by clients. Must be <= 63 characters.|
|etag|string|false|none|Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written.|
|labels|object|false|none|The labels or tags on the resource, such as AWS resource tags and Kubernetes resource labels.|
|location|string|false|none|Immutable. The location of the resource. The location encoding is specific to the service provider, and new encoding may be introduced as the service evolves. For Google Cloud products, the encoding is what is used by Google Cloud APIs, such as `us-east1`, `aws-us-east-1`, and `azure-eastus2`. The semantics of `location` is identical to the `cloud.googleapis.com/location` label used by some Google Cloud APIs.|
|name|string|false|none|The stable identifier (name) of a resource on the `service`. A resource can be logically identified as "//{resource.service}/{resource.name}". The differences between a resource name and a URI are: * Resource name is a logical identifier, independent of network protocol and API version. For example, `//pubsub.googleapis.com/projects/123/topics/news-feed`. * URI often includes protocol and version information, so it can be used directly by applications. For example, `https://pubsub.googleapis.com/v1/projects/123/topics/news-feed`. See https://cloud.google.com/apis/design/resource_names for details.|
|service|string|false|none|The name of the service that this resource belongs to, such as `pubsub.googleapis.com`. The service may be different from the DNS hostname that actually serves the request.|
|type|string|false|none|The type of the resource. The syntax is platform-specific because different platforms define their resources differently. For Google APIs, the type format must be "{service}/{kind}", such as "pubsub.googleapis.com/Topic".|
|uid|string|false|none|The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4.|
|updateTime|string(google-datetime)|false|none|Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value.|

<h2 id="tocS_ResourceInfo">ResourceInfo</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinfo"></a>
<a id="schema_ResourceInfo"></a>
<a id="tocSresourceinfo"></a>
<a id="tocsresourceinfo"></a>

```json
{
  "container": "string",
  "location": "string",
  "name": "string",
  "permission": "string",
  "type": "string"
}
```

Describes a resource referenced in the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|container|string|false|none|Optional. The identifier of the container of this resource. For Google Cloud APIs, the resource container must be one of the following formats: - `projects/` - `folders/` - `organizations/` For the policy enforcement on the container level (VPCSC and Location Policy check), this field takes precedence on the container extracted from name when presents.|
|location|string|false|none|Optional. The location of the resource. The value must be a valid zone, region or multiregion. For example: "europe-west4" or "northamerica-northeast1-a"|
|name|string|false|none|The name of the resource referenced in the request.|
|permission|string|false|none|The resource permission needed for this request. The format must be "{service}/{plural}.{verb}".|
|type|string|false|none|The resource type in the format of "{service}/{kind}".|

<h2 id="tocS_ResourceLocation">ResourceLocation</h2>
<!-- backwards compatibility -->
<a id="schemaresourcelocation"></a>
<a id="schema_ResourceLocation"></a>
<a id="tocSresourcelocation"></a>
<a id="tocsresourcelocation"></a>

```json
{
  "currentLocations": [
    "string"
  ],
  "originalLocations": [
    "string"
  ]
}
```

Location information about a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentLocations|[string]|false|none|The locations of a resource after the execution of the operation. Requests to create or delete a location based resource must populate the 'current_locations' field and not the 'original_locations' field. For example: "europe-west1-a" "us-east1" "nam3"|
|originalLocations|[string]|false|none|The locations of a resource prior to the execution of the operation. Requests that mutate the resource's location must populate both the 'original_locations' as well as the 'current_locations' fields. For example: "europe-west1-a" "us-east1" "nam3"|

<h2 id="tocS_Response">Response</h2>
<!-- backwards compatibility -->
<a id="schemaresponse"></a>
<a id="schema_Response"></a>
<a id="tocSresponse"></a>
<a id="tocsresponse"></a>

```json
{
  "backendLatency": "string",
  "code": "string",
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "size": "string",
  "time": "string"
}
```

This message defines attributes for a typical network response. It generally models semantics of an HTTP response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backendLatency|string(google-duration)|false|none|The amount of time it takes the backend service to fully respond to a request. Measured from when the destination service starts to send the request to the backend until when the destination service receives the complete response from the backend.|
|code|string(int64)|false|none|The HTTP response status code, such as `200` and `404`.|
|headers|object|false|none|The HTTP response headers. If multiple headers share the same key, they must be merged according to HTTP spec. All header keys must be lowercased, because HTTP header keys are case-insensitive.|
|size|string(int64)|false|none|The HTTP response size in bytes. If unknown, it must be -1.|
|time|string(google-datetime)|false|none|The timestamp when the `destination` service sends the last byte of the response.|

<h2 id="tocS_ServiceAccountDelegationInfo">ServiceAccountDelegationInfo</h2>
<!-- backwards compatibility -->
<a id="schemaserviceaccountdelegationinfo"></a>
<a id="schema_ServiceAccountDelegationInfo"></a>
<a id="tocSserviceaccountdelegationinfo"></a>
<a id="tocsserviceaccountdelegationinfo"></a>

```json
{
  "firstPartyPrincipal": {
    "principalEmail": "string",
    "serviceMetadata": {
      "property1": null,
      "property2": null
    }
  },
  "principalSubject": "string",
  "thirdPartyPrincipal": {
    "thirdPartyClaims": {
      "property1": null,
      "property2": null
    }
  }
}
```

Identity delegation history of an authenticated service account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstPartyPrincipal|[FirstPartyPrincipal](#schemafirstpartyprincipal)|false|none|First party (Google) identity as the real authority.|
|principalSubject|string|false|none|A string representing the principal_subject associated with the identity. For most identities, the format will be `principal://iam.googleapis.com/{identity pool name}/subject/{subject)` except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format `serviceAccount:{identity pool name}[{subject}]`|
|thirdPartyPrincipal|[ThirdPartyPrincipal](#schemathirdpartyprincipal)|false|none|Third party identity as the real authority.|

<h2 id="tocS_SpanContext">SpanContext</h2>
<!-- backwards compatibility -->
<a id="schemaspancontext"></a>
<a id="schema_SpanContext"></a>
<a id="tocSspancontext"></a>
<a id="tocsspancontext"></a>

```json
{
  "spanName": "string"
}
```

The context of a span. This is attached to an Exemplar in Distribution values during aggregation. It contains the name of a span with format: projects/[PROJECT_ID_OR_NUMBER]/traces/[TRACE_ID]/spans/[SPAN_ID]

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|spanName|string|false|none|The resource name of the span. The format is: projects/[PROJECT_ID_OR_NUMBER]/traces/[TRACE_ID]/spans/[SPAN_ID] `[TRACE_ID]` is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array. `[SPAN_ID]` is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array.|

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

<h2 id="tocS_ThirdPartyPrincipal">ThirdPartyPrincipal</h2>
<!-- backwards compatibility -->
<a id="schemathirdpartyprincipal"></a>
<a id="schema_ThirdPartyPrincipal"></a>
<a id="tocSthirdpartyprincipal"></a>
<a id="tocsthirdpartyprincipal"></a>

```json
{
  "thirdPartyClaims": {
    "property1": null,
    "property2": null
  }
}
```

Third party identity principal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thirdPartyClaims|object|false|none|Metadata about third party identity.|

<h2 id="tocS_V2HttpRequest">V2HttpRequest</h2>
<!-- backwards compatibility -->
<a id="schemav2httprequest"></a>
<a id="schema_V2HttpRequest"></a>
<a id="tocSv2httprequest"></a>
<a id="tocsv2httprequest"></a>

```json
{
  "cacheFillBytes": "string",
  "cacheHit": true,
  "cacheLookup": true,
  "cacheValidatedWithOriginServer": true,
  "latency": "string",
  "protocol": "string",
  "referer": "string",
  "remoteIp": "string",
  "requestMethod": "string",
  "requestSize": "string",
  "requestUrl": "string",
  "responseSize": "string",
  "serverIp": "string",
  "status": 0,
  "userAgent": "string"
}
```

A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cacheFillBytes|string(int64)|false|none|The number of HTTP response bytes inserted into cache. Set only when a cache fill was attempted.|
|cacheHit|boolean|false|none|Whether or not an entity was served from cache (with or without validation).|
|cacheLookup|boolean|false|none|Whether or not a cache lookup was attempted.|
|cacheValidatedWithOriginServer|boolean|false|none|Whether or not the response was validated with the origin server before being served from cache. This field is only meaningful if `cache_hit` is True.|
|latency|string(google-duration)|false|none|The request processing latency on the server, from the time the request was received until the response was sent.|
|protocol|string|false|none|Protocol used for the request. Examples: "HTTP/1.1", "HTTP/2", "websocket"|
|referer|string|false|none|The referer URL of the request, as defined in [HTTP/1.1 Header Field Definitions](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).|
|remoteIp|string|false|none|The IP address (IPv4 or IPv6) of the client that issued the HTTP request. Examples: `"192.168.1.1"`, `"FE80::0202:B3FF:FE1E:8329"`.|
|requestMethod|string|false|none|The request method. Examples: `"GET"`, `"HEAD"`, `"PUT"`, `"POST"`.|
|requestSize|string(int64)|false|none|The size of the HTTP request message in bytes, including the request headers and the request body.|
|requestUrl|string|false|none|The scheme (http, https), the host name, the path, and the query portion of the URL that was requested. Example: `"http://example.com/some/info?color=red"`.|
|responseSize|string(int64)|false|none|The size of the HTTP response message sent back to the client, in bytes, including the response headers and the response body.|
|serverIp|string|false|none|The IP address (IPv4 or IPv6) of the origin server that the request was sent to.|
|status|integer(int32)|false|none|The response code indicating the status of the response. Examples: 200, 404.|
|userAgent|string|false|none|The user agent sent by the client. Example: `"Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET CLR 1.0.3705)"`.|

<h2 id="tocS_V2LogEntry">V2LogEntry</h2>
<!-- backwards compatibility -->
<a id="schemav2logentry"></a>
<a id="schema_V2LogEntry"></a>
<a id="tocSv2logentry"></a>
<a id="tocsv2logentry"></a>

```json
{
  "httpRequest": {
    "cacheFillBytes": "string",
    "cacheHit": true,
    "cacheLookup": true,
    "cacheValidatedWithOriginServer": true,
    "latency": "string",
    "protocol": "string",
    "referer": "string",
    "remoteIp": "string",
    "requestMethod": "string",
    "requestSize": "string",
    "requestUrl": "string",
    "responseSize": "string",
    "serverIp": "string",
    "status": 0,
    "userAgent": "string"
  },
  "insertId": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "monitoredResourceLabels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "operation": {
    "first": true,
    "id": "string",
    "last": true,
    "producer": "string"
  },
  "protoPayload": {
    "property1": null,
    "property2": null
  },
  "severity": "DEFAULT",
  "sourceLocation": {
    "file": "string",
    "function": "string",
    "line": "string"
  },
  "structPayload": {
    "property1": null,
    "property2": null
  },
  "textPayload": "string",
  "timestamp": "string",
  "trace": "string"
}
```

An individual log entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|httpRequest|[V2HttpRequest](#schemav2httprequest)|false|none|Optional. Information about the HTTP request associated with this log entry, if applicable.|
|insertId|string|false|none|A unique ID for the log entry used for deduplication. If omitted, the implementation will generate one based on operation_id.|
|labels|object|false|none|A set of user-defined (key, value) data that provides additional information about the log entry.|
|monitoredResourceLabels|object|false|none|A set of user-defined (key, value) data that provides additional information about the moniotored resource that the log entry belongs to.|
|name|string|false|none|Required. The log to which this log entry belongs. Examples: `"syslog"`, `"book_log"`.|
|operation|[V2LogEntryOperation](#schemav2logentryoperation)|false|none|Optional. Information about an operation associated with the log entry, if applicable.|
|protoPayload|object|false|none|The log entry payload, represented as a protocol buffer that is expressed as a JSON object. The only accepted type currently is AuditLog.|
|severity|string|false|none|The severity of the log entry. The default value is `LogSeverity.DEFAULT`.|
|sourceLocation|[V2LogEntrySourceLocation](#schemav2logentrysourcelocation)|false|none|Optional. Source code location information associated with the log entry, if any.|
|structPayload|object|false|none|The log entry payload, represented as a structure that is expressed as a JSON object.|
|textPayload|string|false|none|The log entry payload, represented as a Unicode string (UTF-8).|
|timestamp|string(google-datetime)|false|none|The time the event described by the log entry occurred. If omitted, defaults to operation start time.|
|trace|string|false|none|Optional. Resource name of the trace associated with the log entry, if any. If this field contains a relative resource name, you can assume the name is relative to `//tracing.googleapis.com`. Example: `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824`|

#### Enumerated Values

|Property|Value|
|---|---|
|severity|DEFAULT|
|severity|DEBUG|
|severity|INFO|
|severity|NOTICE|
|severity|WARNING|
|severity|ERROR|
|severity|CRITICAL|
|severity|ALERT|
|severity|EMERGENCY|

<h2 id="tocS_V2LogEntryOperation">V2LogEntryOperation</h2>
<!-- backwards compatibility -->
<a id="schemav2logentryoperation"></a>
<a id="schema_V2LogEntryOperation"></a>
<a id="tocSv2logentryoperation"></a>
<a id="tocsv2logentryoperation"></a>

```json
{
  "first": true,
  "id": "string",
  "last": true,
  "producer": "string"
}
```

Additional information about a potentially long-running operation with which a log entry is associated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first|boolean|false|none|Optional. Set this to True if this is the first log entry in the operation.|
|id|string|false|none|Optional. An arbitrary operation identifier. Log entries with the same identifier are assumed to be part of the same operation.|
|last|boolean|false|none|Optional. Set this to True if this is the last log entry in the operation.|
|producer|string|false|none|Optional. An arbitrary producer identifier. The combination of `id` and `producer` must be globally unique. Examples for `producer`: `"MyDivision.MyBigCompany.com"`, `"github.com/MyProject/MyApplication"`.|

<h2 id="tocS_V2LogEntrySourceLocation">V2LogEntrySourceLocation</h2>
<!-- backwards compatibility -->
<a id="schemav2logentrysourcelocation"></a>
<a id="schema_V2LogEntrySourceLocation"></a>
<a id="tocSv2logentrysourcelocation"></a>
<a id="tocsv2logentrysourcelocation"></a>

```json
{
  "file": "string",
  "function": "string",
  "line": "string"
}
```

Additional information about the source code location that produced the log entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string|false|none|Optional. Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name.|
|function|string|false|none|Optional. Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information may be used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: `qual.if.ied.Class.method` (Java), `dir/package.func` (Go), `function` (Python).|
|line|string(int64)|false|none|Optional. Line within the source file. 1-based; 0 indicates no line number available.|

<h2 id="tocS_ViolationInfo">ViolationInfo</h2>
<!-- backwards compatibility -->
<a id="schemaviolationinfo"></a>
<a id="schema_ViolationInfo"></a>
<a id="tocSviolationinfo"></a>
<a id="tocsviolationinfo"></a>

```json
{
  "checkedValue": "string",
  "constraint": "string",
  "errorMessage": "string",
  "policyType": "POLICY_TYPE_UNSPECIFIED"
}
```

Provides information about the Policy violation info for this request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkedValue|string|false|none|Optional. Value that is being checked for the policy. This could be in encrypted form (if pii sensitive). This field will only be emitted in LIST_POLICY types|
|constraint|string|false|none|Optional. Constraint name|
|errorMessage|string|false|none|Optional. Error message that policy is indicating.|
|policyType|string|false|none|Optional. Indicates the type of the policy.|

#### Enumerated Values

|Property|Value|
|---|---|
|policyType|POLICY_TYPE_UNSPECIFIED|
|policyType|BOOLEAN_CONSTRAINT|
|policyType|LIST_CONSTRAINT|
|policyType|CUSTOM_CONSTRAINT|
