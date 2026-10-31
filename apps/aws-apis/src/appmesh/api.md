<h1 id="aws-app-mesh">AWS App Mesh v2019-01-25</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>App Mesh is a service mesh based on the Envoy proxy that makes it easy to monitor and control microservices. App Mesh standardizes how your microservices communicate, giving you end-to-end visibility and helping to ensure high availability for your applications.</p> <p>App Mesh gives you consistent visibility and network traffic controls for every microservice in an application. You can use App Mesh with Amazon Web Services Fargate, Amazon ECS, Amazon EKS, Kubernetes on Amazon Web Services, and Amazon EC2.</p> <note> <p>App Mesh supports microservice applications that use service discovery naming for their components. For more information about service discovery on Amazon ECS, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service Discovery</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. Kubernetes <code>kube-dns</code> and <code>coredns</code> are supported. For more information, see <a href="https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/">DNS for Services and Pods</a> in the Kubernetes documentation.</p> </note>

Base URLs:

* <a href="http://appmesh.us-east-1.amazonaws.com">http://appmesh.us-east-1.amazonaws.com</a> - The AWS App Mesh multi-region endpoint

* <a href="https://appmesh.us-east-1.amazonaws.com">https://appmesh.us-east-1.amazonaws.com</a> - The AWS App Mesh multi-region endpoint

* <a href="http://appmesh.cn-north-1.amazonaws.com.cn">http://appmesh.cn-north-1.amazonaws.com.cn</a> - The AWS App Mesh endpoint for China (Beijing) and China (Ningxia)

* <a href="https://appmesh.cn-north-1.amazonaws.com.cn">https://appmesh.cn-north-1.amazonaws.com.cn</a> - The AWS App Mesh endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/appmesh/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-app-mesh-default">Default</h1>

## ListGatewayRoutes

<a id="opIdListGatewayRoutes"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string/virtualGateway/string/gatewayRoutes \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes`

Returns a list of existing gateway routes that are associated to a virtual gateway.

<h3 id="listgatewayroutes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The maximum number of results returned by <code>ListGatewayRoutes</code> in paginated output. When you use this parameter, <code>ListGatewayRoutes</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListGatewayRoutes</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListGatewayRoutes</code> returns up to 100 results and a <code>nextToken</code> value if applicable.|
|meshName|path|string|true|The name of the service mesh to list gateway routes in.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|nextToken|query|string|false|The <code>nextToken</code> value returned from a previous paginated <code>ListGatewayRoutes</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.|
|virtualGatewayName|path|string|true|The name of the virtual gateway to list gateway routes in.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "gatewayRoutes": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="listgatewayroutes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGatewayRoutesOutput](#schemalistgatewayroutesoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateGatewayRoute

<a id="opIdCreateGatewayRoute"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string/virtualGateway/string/gatewayRoutes \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "gatewayRouteName": "string",
    "spec": {
      "grpcRoute": {
        "action": {
          "rewrite": {
            "hostname": {
              "defaultTargetHostname": {}
            }
          },
          "target": {
            "port": {},
            "virtualService": {
              "virtualServiceName": {}
            }
          }
        },
        "match": {
          "hostname": {
            "exact": {},
            "suffix": {}
          },
          "metadata": {},
          "port": {},
          "serviceName": {}
        }
      },
      "http2Route": {
        "action": {
          "rewrite": {
            "hostname": {
              "defaultTargetHostname": {}
            },
            "path": {
              "exact": {}
            },
            "prefix": {
              "defaultPrefix": {},
              "value": {}
            }
          },
          "target": {
            "port": {},
            "virtualService": {
              "virtualServiceName": {}
            }
          }
        },
        "match": {
          "headers": {},
          "hostname": {
            "exact": {},
            "suffix": {}
          },
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {}
        }
      },
      "httpRoute": {
        "action": {
          "rewrite": {
            "hostname": {
              "defaultTargetHostname": {}
            },
            "path": {
              "exact": {}
            },
            "prefix": {
              "defaultPrefix": {},
              "value": {}
            }
          },
          "target": {
            "port": {},
            "virtualService": {
              "virtualServiceName": {}
            }
          }
        },
        "match": {
          "headers": {},
          "hostname": {
            "exact": {},
            "suffix": {}
          },
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {}
        }
      },
      "priority": {}
    },
    "tags": [
      {
        "key": {},
        "value": {}
      }
    ]
  }'
```

`PUT /v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes`

<p>Creates a gateway route.</p> <p>A gateway route is attached to a virtual gateway and routes traffic to an existing virtual service. If a route matches a request, it can distribute traffic to a target virtual service.</p> <p>For more information about gateway routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/gateway-routes.html">Gateway routes</a>.</p>

> Body parameter

```json
{
  "clientToken": "string",
  "gatewayRouteName": "string",
  "spec": {
    "grpcRoute": {
      "action": {
        "rewrite": {
          "hostname": {
            "defaultTargetHostname": {}
          }
        },
        "target": {
          "port": {},
          "virtualService": {
            "virtualServiceName": {}
          }
        }
      },
      "match": {
        "hostname": {
          "exact": {},
          "suffix": {}
        },
        "metadata": {},
        "port": {},
        "serviceName": {}
      }
    },
    "http2Route": {
      "action": {
        "rewrite": {
          "hostname": {
            "defaultTargetHostname": {}
          },
          "path": {
            "exact": {}
          },
          "prefix": {
            "defaultPrefix": {},
            "value": {}
          }
        },
        "target": {
          "port": {},
          "virtualService": {
            "virtualServiceName": {}
          }
        }
      },
      "match": {
        "headers": {},
        "hostname": {
          "exact": {},
          "suffix": {}
        },
        "method": {},
        "path": {
          "exact": {},
          "regex": {}
        },
        "port": {},
        "prefix": {},
        "queryParameters": {}
      }
    },
    "httpRoute": {
      "action": {
        "rewrite": {
          "hostname": {
            "defaultTargetHostname": {}
          },
          "path": {
            "exact": {}
          },
          "prefix": {
            "defaultPrefix": {},
            "value": {}
          }
        },
        "target": {
          "port": {},
          "virtualService": {
            "virtualServiceName": {}
          }
        }
      },
      "match": {
        "headers": {},
        "hostname": {
          "exact": {},
          "suffix": {}
        },
        "method": {},
        "path": {
          "exact": {},
          "regex": {}
        },
        "port": {},
        "prefix": {},
        "queryParameters": {}
      }
    },
    "priority": {}
  },
  "tags": [
    {
      "key": {},
      "value": {}
    }
  ]
}
```

<h3 id="creategatewayroute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meshName|path|string|true|The name of the service mesh to create the gateway route in.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|virtualGatewayName|path|string|true|The name of the virtual gateway to associate the gateway route with. If the virtual gateway is in a shared mesh, then you must be the owner of the virtual gateway resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.|
|» gatewayRouteName|body|string|true|The name to use for the gateway route.|
|» spec|body|object|true|An object that represents a gateway route specification. Specify one gateway route type.|
|» » grpcRoute|body|object|false|none|
|» » » action|body|object|true|none|
|» » » » rewrite|body|object|false|none|
|» » » » » hostname|body|object|false|none|
|» » » » » » defaultTargetHostname|body|object|false|none|
|» » » » target|body|object|true|none|
|» » » » » port|body|object|false|none|
|» » » » » virtualService|body|object|true|none|
|» » » » » » virtualServiceName|body|object|true|none|
|» » » match|body|object|true|none|
|» » » » hostname|body|object|false|none|
|» » » » » exact|body|object|false|none|
|» » » » » suffix|body|object|false|none|
|» » » » metadata|body|object|false|none|
|» » » » port|body|object|false|none|
|» » » » serviceName|body|object|false|none|
|» » http2Route|body|object|false|none|
|» » » action|body|object|true|none|
|» » » » rewrite|body|object|false|none|
|» » » » » hostname|body|object|false|none|
|» » » » » » defaultTargetHostname|body|object|false|none|
|» » » » » path|body|object|false|none|
|» » » » » » exact|body|object|false|none|
|» » » » » prefix|body|object|false|none|
|» » » » » » defaultPrefix|body|object|false|none|
|» » » » » » value|body|object|false|none|
|» » » » target|body|object|true|none|
|» » » » » port|body|object|false|none|
|» » » » » virtualService|body|object|true|none|
|» » » » » » virtualServiceName|body|object|true|none|
|» » » match|body|object|true|none|
|» » » » headers|body|object|false|none|
|» » » » hostname|body|object|false|none|
|» » » » » exact|body|object|false|none|
|» » » » » suffix|body|object|false|none|
|» » » » method|body|object|false|none|
|» » » » path|body|object|false|none|
|» » » » » exact|body|object|false|none|
|» » » » » regex|body|object|false|none|
|» » » » port|body|object|false|none|
|» » » » prefix|body|object|false|none|
|» » » » queryParameters|body|object|false|none|
|» » httpRoute|body|object|false|none|
|» » » action|body|object|true|none|
|» » » » rewrite|body|object|false|none|
|» » » » » hostname|body|object|false|none|
|» » » » » » defaultTargetHostname|body|object|false|none|
|» » » » » path|body|object|false|none|
|» » » » » » exact|body|object|false|none|
|» » » » » prefix|body|object|false|none|
|» » » » » » defaultPrefix|body|object|false|none|
|» » » » » » value|body|object|false|none|
|» » » » target|body|object|true|none|
|» » » » » port|body|object|false|none|
|» » » » » virtualService|body|object|true|none|
|» » » » » » virtualServiceName|body|object|true|none|
|» » » match|body|object|true|none|
|» » » » headers|body|object|false|none|
|» » » » hostname|body|object|false|none|
|» » » » » exact|body|object|false|none|
|» » » » » suffix|body|object|false|none|
|» » » » method|body|object|false|none|
|» » » » path|body|object|false|none|
|» » » » » exact|body|object|false|none|
|» » » » » regex|body|object|false|none|
|» » » » port|body|object|false|none|
|» » » » prefix|body|object|false|none|
|» » » » queryParameters|body|object|false|none|
|» » priority|body|object|false|none|
|» tags|body|[[TagRef](#schematagref)]|false|Optional metadata that you can apply to the gateway route to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.|

> Example responses

> 200 Response

```json
{
  "gatewayRoute": {
    "gatewayRouteName": {},
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "grpcRoute": {
        "action": {
          "rewrite": {
            "hostname": {
              "defaultTargetHostname": {}
            }
          },
          "target": {
            "port": {},
            "virtualService": {
              "virtualServiceName": {}
            }
          }
        },
        "match": {
          "hostname": {
            "exact": {},
            "suffix": {}
          },
          "metadata": {},
          "port": {},
          "serviceName": {}
        }
      },
      "http2Route": {
        "action": {
          "rewrite": {
            "hostname": {
              "defaultTargetHostname": {}
            },
            "path": {
              "exact": {}
            },
            "prefix": {
              "defaultPrefix": {},
              "value": {}
            }
          },
          "target": {
            "port": {},
            "virtualService": {
              "virtualServiceName": {}
            }
          }
        },
        "match": {
          "headers": {},
          "hostname": {
            "exact": {},
            "suffix": {}
          },
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {}
        }
      },
      "httpRoute": {
        "action": {
          "rewrite": {
            "hostname": {
              "defaultTargetHostname": {}
            },
            "path": {
              "exact": {}
            },
            "prefix": {
              "defaultPrefix": {},
              "value": {}
            }
          },
          "target": {
            "port": {},
            "virtualService": {
              "virtualServiceName": {}
            }
          }
        },
        "match": {
          "headers": {},
          "hostname": {
            "exact": {},
            "suffix": {}
          },
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {}
        }
      },
      "priority": {}
    },
    "status": {
      "status": {}
    },
    "virtualGatewayName": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="creategatewayroute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateGatewayRouteOutput](#schemacreategatewayrouteoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|487|487|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMeshes

<a id="opIdListMeshes"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v20190125/meshes`

Returns a list of existing service meshes.

<h3 id="listmeshes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The maximum number of results returned by <code>ListMeshes</code> in paginated output. When you use this parameter, <code>ListMeshes</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListMeshes</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListMeshes</code> returns up to 100 results and a <code>nextToken</code> value if applicable.|
|nextToken|query|string|false|<p>The <code>nextToken</code> value returned from a previous paginated <code>ListMeshes</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.</p> <note> <p>This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.</p> </note>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "meshes": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="listmeshes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMeshesOutput](#schemalistmeshesoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateMesh

<a id="opIdCreateMesh"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "meshName": "string",
    "spec": {
      "egressFilter": {
        "type": {}
      },
      "serviceDiscovery": {
        "ipPreference": {}
      }
    },
    "tags": [
      {
        "key": {},
        "value": {}
      }
    ]
  }'
```

`PUT /v20190125/meshes`

<p>Creates a service mesh.</p> <p> A service mesh is a logical boundary for network traffic between services that are represented by resources within the mesh. After you create your service mesh, you can create virtual services, virtual nodes, virtual routers, and routes to distribute traffic between the applications in your mesh.</p> <p>For more information about service meshes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html">Service meshes</a>.</p>

> Body parameter

```json
{
  "clientToken": "string",
  "meshName": "string",
  "spec": {
    "egressFilter": {
      "type": {}
    },
    "serviceDiscovery": {
      "ipPreference": {}
    }
  },
  "tags": [
    {
      "key": {},
      "value": {}
    }
  ]
}
```

<h3 id="createmesh-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.|
|» meshName|body|string|true|The name to use for the service mesh.|
|» spec|body|object|false|An object that represents the specification of a service mesh.|
|» » egressFilter|body|object|false|none|
|» » » type|body|object|true|none|
|» » serviceDiscovery|body|[MeshServiceDiscovery](#schemameshservicediscovery)|false|An object that represents the service discovery information for a service mesh.|
|» tags|body|[[TagRef](#schematagref)]|false|Optional metadata that you can apply to the service mesh to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.|

> Example responses

> 200 Response

```json
{
  "mesh": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "egressFilter": {
        "type": {}
      },
      "serviceDiscovery": {
        "ipPreference": {}
      }
    },
    "status": {
      "status": {}
    }
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="createmesh-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateMeshOutput](#schemacreatemeshoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|487|487|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRoutes

<a id="opIdListRoutes"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string/virtualRouter/string/routes \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes`

Returns a list of existing routes in a service mesh.

<h3 id="listroutes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The maximum number of results returned by <code>ListRoutes</code> in paginated output. When you use this parameter, <code>ListRoutes</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListRoutes</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListRoutes</code> returns up to 100 results and a <code>nextToken</code> value if applicable.|
|meshName|path|string|true|The name of the service mesh to list routes in.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|nextToken|query|string|false|The <code>nextToken</code> value returned from a previous paginated <code>ListRoutes</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.|
|virtualRouterName|path|string|true|The name of the virtual router to list routes in.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "routes": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="listroutes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRoutesOutput](#schemalistroutesoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRoute

<a id="opIdCreateRoute"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string/virtualRouter/string/routes \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "routeName": "string",
    "spec": {
      "grpcRoute": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "metadata": {},
          "methodName": {},
          "port": {},
          "serviceName": {}
        },
        "retryPolicy": {
          "grpcRetryEvents": {},
          "httpRetryEvents": {},
          "maxRetries": {},
          "perRetryTimeout": {
            "unit": {},
            "value": {}
          },
          "tcpRetryEvents": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          },
          "perRequest": {
            "unit": {},
            "value": {}
          }
        }
      },
      "http2Route": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "headers": {},
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {},
          "scheme": {}
        },
        "retryPolicy": {
          "httpRetryEvents": {},
          "maxRetries": {},
          "perRetryTimeout": {
            "unit": {},
            "value": {}
          },
          "tcpRetryEvents": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          },
          "perRequest": {
            "unit": {},
            "value": {}
          }
        }
      },
      "httpRoute": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "headers": {},
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {},
          "scheme": {}
        },
        "retryPolicy": {
          "httpRetryEvents": {},
          "maxRetries": {},
          "perRetryTimeout": {
            "unit": {},
            "value": {}
          },
          "tcpRetryEvents": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          },
          "perRequest": {
            "unit": {},
            "value": {}
          }
        }
      },
      "priority": {},
      "tcpRoute": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "port": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          }
        }
      }
    },
    "tags": [
      {
        "key": {},
        "value": {}
      }
    ]
  }'
```

`PUT /v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes`

<p>Creates a route that is associated with a virtual router.</p> <p> You can route several different protocols and define a retry policy for a route. Traffic can be routed to one or more virtual nodes.</p> <p>For more information about routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/routes.html">Routes</a>.</p>

> Body parameter

```json
{
  "clientToken": "string",
  "routeName": "string",
  "spec": {
    "grpcRoute": {
      "action": {
        "weightedTargets": {}
      },
      "match": {
        "metadata": {},
        "methodName": {},
        "port": {},
        "serviceName": {}
      },
      "retryPolicy": {
        "grpcRetryEvents": {},
        "httpRetryEvents": {},
        "maxRetries": {},
        "perRetryTimeout": {
          "unit": {},
          "value": {}
        },
        "tcpRetryEvents": {}
      },
      "timeout": {
        "idle": {
          "unit": {},
          "value": {}
        },
        "perRequest": {
          "unit": {},
          "value": {}
        }
      }
    },
    "http2Route": {
      "action": {
        "weightedTargets": {}
      },
      "match": {
        "headers": {},
        "method": {},
        "path": {
          "exact": {},
          "regex": {}
        },
        "port": {},
        "prefix": {},
        "queryParameters": {},
        "scheme": {}
      },
      "retryPolicy": {
        "httpRetryEvents": {},
        "maxRetries": {},
        "perRetryTimeout": {
          "unit": {},
          "value": {}
        },
        "tcpRetryEvents": {}
      },
      "timeout": {
        "idle": {
          "unit": {},
          "value": {}
        },
        "perRequest": {
          "unit": {},
          "value": {}
        }
      }
    },
    "httpRoute": {
      "action": {
        "weightedTargets": {}
      },
      "match": {
        "headers": {},
        "method": {},
        "path": {
          "exact": {},
          "regex": {}
        },
        "port": {},
        "prefix": {},
        "queryParameters": {},
        "scheme": {}
      },
      "retryPolicy": {
        "httpRetryEvents": {},
        "maxRetries": {},
        "perRetryTimeout": {
          "unit": {},
          "value": {}
        },
        "tcpRetryEvents": {}
      },
      "timeout": {
        "idle": {
          "unit": {},
          "value": {}
        },
        "perRequest": {
          "unit": {},
          "value": {}
        }
      }
    },
    "priority": {},
    "tcpRoute": {
      "action": {
        "weightedTargets": {}
      },
      "match": {
        "port": {}
      },
      "timeout": {
        "idle": {
          "unit": {},
          "value": {}
        }
      }
    }
  },
  "tags": [
    {
      "key": {},
      "value": {}
    }
  ]
}
```

<h3 id="createroute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meshName|path|string|true|The name of the service mesh to create the route in.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|virtualRouterName|path|string|true|The name of the virtual router in which to create the route. If the virtual router is in a shared mesh, then you must be the owner of the virtual router resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.|
|» routeName|body|string|true|The name to use for the route.|
|» spec|body|object|true|An object that represents a route specification. Specify one route type.|
|» » grpcRoute|body|object|false|none|
|» » » action|body|object|true|none|
|» » » » weightedTargets|body|object|true|none|
|» » » match|body|object|true|none|
|» » » » metadata|body|object|false|none|
|» » » » methodName|body|object|false|none|
|» » » » port|body|object|false|none|
|» » » » serviceName|body|object|false|none|
|» » » retryPolicy|body|object|false|none|
|» » » » grpcRetryEvents|body|object|false|none|
|» » » » httpRetryEvents|body|object|false|none|
|» » » » maxRetries|body|object|true|none|
|» » » » perRetryTimeout|body|object|true|none|
|» » » » » unit|body|object|false|none|
|» » » » » value|body|object|false|none|
|» » » » tcpRetryEvents|body|object|false|none|
|» » » timeout|body|object|false|none|
|» » » » idle|body|object|false|none|
|» » » » » unit|body|object|false|none|
|» » » » » value|body|object|false|none|
|» » » » perRequest|body|object|false|none|
|» » » » » unit|body|object|false|none|
|» » » » » value|body|object|false|none|
|» » http2Route|body|object|false|none|
|» » » action|body|object|true|none|
|» » » » weightedTargets|body|object|true|none|
|» » » match|body|object|true|none|
|» » » » headers|body|object|false|none|
|» » » » method|body|object|false|none|
|» » » » path|body|object|false|none|
|» » » » » exact|body|object|false|none|
|» » » » » regex|body|object|false|none|
|» » » » port|body|object|false|none|
|» » » » prefix|body|object|false|none|
|» » » » queryParameters|body|object|false|none|
|» » » » scheme|body|object|false|none|
|» » » retryPolicy|body|object|false|none|
|» » » » httpRetryEvents|body|object|false|none|
|» » » » maxRetries|body|object|true|none|
|» » » » perRetryTimeout|body|object|true|none|
|» » » » » unit|body|object|false|none|
|» » » » » value|body|object|false|none|
|» » » » tcpRetryEvents|body|object|false|none|
|» » » timeout|body|object|false|none|
|» » » » idle|body|object|false|none|
|» » » » » unit|body|object|false|none|
|» » » » » value|body|object|false|none|
|» » » » perRequest|body|object|false|none|
|» » » » » unit|body|object|false|none|
|» » » » » value|body|object|false|none|
|» » httpRoute|body|object|false|none|
|» » » action|body|object|true|none|
|» » » » weightedTargets|body|object|true|none|
|» » » match|body|object|true|none|
|» » » » headers|body|object|false|none|
|» » » » method|body|object|false|none|
|» » » » path|body|object|false|none|
|» » » » » exact|body|object|false|none|
|» » » » » regex|body|object|false|none|
|» » » » port|body|object|false|none|
|» » » » prefix|body|object|false|none|
|» » » » queryParameters|body|object|false|none|
|» » » » scheme|body|object|false|none|
|» » » retryPolicy|body|object|false|none|
|» » » » httpRetryEvents|body|object|false|none|
|» » » » maxRetries|body|object|true|none|
|» » » » perRetryTimeout|body|object|true|none|
|» » » » » unit|body|object|false|none|
|» » » » » value|body|object|false|none|
|» » » » tcpRetryEvents|body|object|false|none|
|» » » timeout|body|object|false|none|
|» » » » idle|body|object|false|none|
|» » » » » unit|body|object|false|none|
|» » » » » value|body|object|false|none|
|» » » » perRequest|body|object|false|none|
|» » » » » unit|body|object|false|none|
|» » » » » value|body|object|false|none|
|» » priority|body|object|false|none|
|» » tcpRoute|body|object|false|none|
|» » » action|body|object|true|none|
|» » » » weightedTargets|body|object|true|none|
|» » » match|body|object|false|none|
|» » » » port|body|object|false|none|
|» » » timeout|body|object|false|none|
|» » » » idle|body|object|false|none|
|» » » » » unit|body|object|false|none|
|» » » » » value|body|object|false|none|
|» tags|body|[[TagRef](#schematagref)]|false|Optional metadata that you can apply to the route to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.|

> Example responses

> 200 Response

```json
{
  "route": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "routeName": {},
    "spec": {
      "grpcRoute": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "metadata": {},
          "methodName": {},
          "port": {},
          "serviceName": {}
        },
        "retryPolicy": {
          "grpcRetryEvents": {},
          "httpRetryEvents": {},
          "maxRetries": {},
          "perRetryTimeout": {
            "unit": {},
            "value": {}
          },
          "tcpRetryEvents": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          },
          "perRequest": {
            "unit": {},
            "value": {}
          }
        }
      },
      "http2Route": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "headers": {},
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {},
          "scheme": {}
        },
        "retryPolicy": {
          "httpRetryEvents": {},
          "maxRetries": {},
          "perRetryTimeout": {
            "unit": {},
            "value": {}
          },
          "tcpRetryEvents": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          },
          "perRequest": {
            "unit": {},
            "value": {}
          }
        }
      },
      "httpRoute": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "headers": {},
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {},
          "scheme": {}
        },
        "retryPolicy": {
          "httpRetryEvents": {},
          "maxRetries": {},
          "perRetryTimeout": {
            "unit": {},
            "value": {}
          },
          "tcpRetryEvents": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          },
          "perRequest": {
            "unit": {},
            "value": {}
          }
        }
      },
      "priority": {},
      "tcpRoute": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "port": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          }
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualRouterName": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="createroute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRouteOutput](#schemacreaterouteoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|487|487|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListVirtualGateways

<a id="opIdListVirtualGateways"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string/virtualGateways \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v20190125/meshes/{meshName}/virtualGateways`

Returns a list of existing virtual gateways in a service mesh.

<h3 id="listvirtualgateways-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The maximum number of results returned by <code>ListVirtualGateways</code> in paginated output. When you use this parameter, <code>ListVirtualGateways</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListVirtualGateways</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListVirtualGateways</code> returns up to 100 results and a <code>nextToken</code> value if applicable.|
|meshName|path|string|true|The name of the service mesh to list virtual gateways in.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|nextToken|query|string|false|The <code>nextToken</code> value returned from a previous paginated <code>ListVirtualGateways</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "virtualGateways": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="listvirtualgateways-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListVirtualGatewaysOutput](#schemalistvirtualgatewaysoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateVirtualGateway

<a id="opIdCreateVirtualGateway"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string/virtualGateways \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "spec": {
      "backendDefaults": {
        "clientPolicy": {
          "tls": {
            "certificate": {
              "file": {
                "certificateChain": {},
                "privateKey": {}
              },
              "sds": {
                "secretName": {}
              }
            },
            "enforce": {},
            "ports": {},
            "validation": {
              "subjectAlternativeNames": {
                "match": {
                  "exact": {}
                }
              },
              "trust": {
                "acm": {
                  "certificateAuthorityArns": {}
                },
                "file": {
                  "certificateChain": {}
                },
                "sds": {
                  "secretName": {}
                }
              }
            }
          }
        }
      },
      "listeners": {},
      "logging": {
        "accessLog": {
          "file": {
            "format": {
              "json": {},
              "text": {}
            },
            "path": {}
          }
        }
      }
    },
    "tags": [
      {
        "key": {},
        "value": {}
      }
    ],
    "virtualGatewayName": "string"
  }'
```

`PUT /v20190125/meshes/{meshName}/virtualGateways`

<p>Creates a virtual gateway.</p> <p>A virtual gateway allows resources outside your mesh to communicate to resources that are inside your mesh. The virtual gateway represents an Envoy proxy running in an Amazon ECS task, in a Kubernetes service, or on an Amazon EC2 instance. Unlike a virtual node, which represents an Envoy running with an application, a virtual gateway represents Envoy deployed by itself.</p> <p>For more information about virtual gateways, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html">Virtual gateways</a>. </p>

> Body parameter

```json
{
  "clientToken": "string",
  "spec": {
    "backendDefaults": {
      "clientPolicy": {
        "tls": {
          "certificate": {
            "file": {
              "certificateChain": {},
              "privateKey": {}
            },
            "sds": {
              "secretName": {}
            }
          },
          "enforce": {},
          "ports": {},
          "validation": {
            "subjectAlternativeNames": {
              "match": {
                "exact": {}
              }
            },
            "trust": {
              "acm": {
                "certificateAuthorityArns": {}
              },
              "file": {
                "certificateChain": {}
              },
              "sds": {
                "secretName": {}
              }
            }
          }
        }
      }
    },
    "listeners": {},
    "logging": {
      "accessLog": {
        "file": {
          "format": {
            "json": {},
            "text": {}
          },
          "path": {}
        }
      }
    }
  },
  "tags": [
    {
      "key": {},
      "value": {}
    }
  ],
  "virtualGatewayName": "string"
}
```

<h3 id="createvirtualgateway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meshName|path|string|true|The name of the service mesh to create the virtual gateway in.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.|
|» spec|body|object|true|An object that represents the specification of a service mesh resource.|
|» » backendDefaults|body|object|false|none|
|» » » clientPolicy|body|object|false|none|
|» » » » tls|body|object|false|none|
|» » » » » certificate|body|object|false|none|
|» » » » » » file|body|object|false|none|
|» » » » » » » certificateChain|body|object|true|none|
|» » » » » » » privateKey|body|object|true|none|
|» » » » » » sds|body|object|false|none|
|» » » » » » » secretName|body|object|true|none|
|» » » » » enforce|body|object|false|none|
|» » » » » ports|body|object|false|none|
|» » » » » validation|body|object|true|none|
|» » » » » » subjectAlternativeNames|body|object|false|none|
|» » » » » » » match|body|object|true|none|
|» » » » » » » » exact|body|object|true|none|
|» » » » » » trust|body|object|true|none|
|» » » » » » » acm|body|object|false|none|
|» » » » » » » » certificateAuthorityArns|body|object|true|none|
|» » » » » » » file|body|object|false|none|
|» » » » » » » » certificateChain|body|object|true|none|
|» » » » » » » sds|body|object|false|none|
|» » » » » » » » secretName|body|object|true|none|
|» » listeners|body|object|false|none|
|» » logging|body|[VirtualGatewayLogging](#schemavirtualgatewaylogging)|false|An object that represents logging information.|
|» tags|body|[[TagRef](#schematagref)]|false|Optional metadata that you can apply to the virtual gateway to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.|
|» virtualGatewayName|body|string|true|The name to use for the virtual gateway.|

> Example responses

> 200 Response

```json
{
  "virtualGateway": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "backendDefaults": {
        "clientPolicy": {
          "tls": {
            "certificate": {
              "file": {
                "certificateChain": {},
                "privateKey": {}
              },
              "sds": {
                "secretName": {}
              }
            },
            "enforce": {},
            "ports": {},
            "validation": {
              "subjectAlternativeNames": {
                "match": {
                  "exact": {}
                }
              },
              "trust": {
                "acm": {
                  "certificateAuthorityArns": {}
                },
                "file": {
                  "certificateChain": {}
                },
                "sds": {
                  "secretName": {}
                }
              }
            }
          }
        }
      },
      "listeners": {},
      "logging": {
        "accessLog": {
          "file": {
            "format": {
              "json": {},
              "text": {}
            },
            "path": {}
          }
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualGatewayName": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="createvirtualgateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateVirtualGatewayOutput](#schemacreatevirtualgatewayoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|487|487|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListVirtualNodes

<a id="opIdListVirtualNodes"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string/virtualNodes \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v20190125/meshes/{meshName}/virtualNodes`

Returns a list of existing virtual nodes.

<h3 id="listvirtualnodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The maximum number of results returned by <code>ListVirtualNodes</code> in paginated output. When you use this parameter, <code>ListVirtualNodes</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListVirtualNodes</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListVirtualNodes</code> returns up to 100 results and a <code>nextToken</code> value if applicable.|
|meshName|path|string|true|The name of the service mesh to list virtual nodes in.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|nextToken|query|string|false|The <code>nextToken</code> value returned from a previous paginated <code>ListVirtualNodes</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "virtualNodes": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="listvirtualnodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListVirtualNodesOutput](#schemalistvirtualnodesoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateVirtualNode

<a id="opIdCreateVirtualNode"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string/virtualNodes \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "spec": {
      "backendDefaults": {
        "clientPolicy": {
          "tls": {
            "certificate": {
              "file": {
                "certificateChain": {},
                "privateKey": {}
              },
              "sds": {
                "secretName": {}
              }
            },
            "enforce": {},
            "ports": {},
            "validation": {
              "subjectAlternativeNames": {
                "match": {
                  "exact": {}
                }
              },
              "trust": {
                "acm": {
                  "certificateAuthorityArns": {}
                },
                "file": {
                  "certificateChain": {}
                },
                "sds": {
                  "secretName": {}
                }
              }
            }
          }
        }
      },
      "backends": {},
      "listeners": {},
      "logging": {
        "accessLog": {
          "file": {
            "format": {
              "json": {},
              "text": {}
            },
            "path": {}
          }
        }
      },
      "serviceDiscovery": {
        "awsCloudMap": {
          "attributes": {},
          "ipPreference": {},
          "namespaceName": {},
          "serviceName": {}
        },
        "dns": {
          "hostname": {},
          "ipPreference": {},
          "responseType": {}
        }
      }
    },
    "tags": [
      {
        "key": {},
        "value": {}
      }
    ],
    "virtualNodeName": "string"
  }'
```

`PUT /v20190125/meshes/{meshName}/virtualNodes`

<p>Creates a virtual node within a service mesh.</p> <p> A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS service or a Kubernetes deployment. When you create a virtual node, you can specify the service discovery information for your task group, and whether the proxy running in a task group will communicate with other proxies using Transport Layer Security (TLS).</p> <p>You define a <code>listener</code> for any inbound traffic that your virtual node expects. Any virtual service that your virtual node expects to communicate to is specified as a <code>backend</code>.</p> <p>The response metadata for your new virtual node contains the <code>arn</code> that is associated with the virtual node. Set this value to the full ARN; for example, <code>arn:aws:appmesh:us-west-2:123456789012:myMesh/default/virtualNode/myApp</code>) as the <code>APPMESH_RESOURCE_ARN</code> environment variable for your task group's Envoy proxy container in your task definition or pod spec. This is then mapped to the <code>node.id</code> and <code>node.cluster</code> Envoy parameters.</p> <note> <p>By default, App Mesh uses the name of the resource you specified in <code>APPMESH_RESOURCE_ARN</code> when Envoy is referring to itself in metrics and traces. You can override this behavior by setting the <code>APPMESH_RESOURCE_CLUSTER</code> environment variable with your own name.</p> </note> <p>For more information about virtual nodes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html">Virtual nodes</a>. You must be using <code>1.15.0</code> or later of the Envoy image when setting these variables. For more information aboutApp Mesh Envoy variables, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html">Envoy image</a> in the App Mesh User Guide.</p>

> Body parameter

```json
{
  "clientToken": "string",
  "spec": {
    "backendDefaults": {
      "clientPolicy": {
        "tls": {
          "certificate": {
            "file": {
              "certificateChain": {},
              "privateKey": {}
            },
            "sds": {
              "secretName": {}
            }
          },
          "enforce": {},
          "ports": {},
          "validation": {
            "subjectAlternativeNames": {
              "match": {
                "exact": {}
              }
            },
            "trust": {
              "acm": {
                "certificateAuthorityArns": {}
              },
              "file": {
                "certificateChain": {}
              },
              "sds": {
                "secretName": {}
              }
            }
          }
        }
      }
    },
    "backends": {},
    "listeners": {},
    "logging": {
      "accessLog": {
        "file": {
          "format": {
            "json": {},
            "text": {}
          },
          "path": {}
        }
      }
    },
    "serviceDiscovery": {
      "awsCloudMap": {
        "attributes": {},
        "ipPreference": {},
        "namespaceName": {},
        "serviceName": {}
      },
      "dns": {
        "hostname": {},
        "ipPreference": {},
        "responseType": {}
      }
    }
  },
  "tags": [
    {
      "key": {},
      "value": {}
    }
  ],
  "virtualNodeName": "string"
}
```

<h3 id="createvirtualnode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meshName|path|string|true|The name of the service mesh to create the virtual node in.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.|
|» spec|body|object|true|An object that represents the specification of a virtual node.|
|» » backendDefaults|body|object|false|none|
|» » » clientPolicy|body|object|false|none|
|» » » » tls|body|object|false|none|
|» » » » » certificate|body|object|false|none|
|» » » » » » file|body|object|false|none|
|» » » » » » » certificateChain|body|object|true|none|
|» » » » » » » privateKey|body|object|true|none|
|» » » » » » sds|body|object|false|none|
|» » » » » » » secretName|body|object|true|none|
|» » » » » enforce|body|object|false|none|
|» » » » » ports|body|object|false|none|
|» » » » » validation|body|object|true|none|
|» » » » » » subjectAlternativeNames|body|object|false|none|
|» » » » » » » match|body|object|true|none|
|» » » » » » » » exact|body|object|true|none|
|» » » » » » trust|body|object|true|none|
|» » » » » » » acm|body|object|false|none|
|» » » » » » » » certificateAuthorityArns|body|object|true|none|
|» » » » » » » file|body|object|false|none|
|» » » » » » » » certificateChain|body|object|true|none|
|» » » » » » » sds|body|object|false|none|
|» » » » » » » » secretName|body|object|true|none|
|» » backends|body|object|false|none|
|» » listeners|body|object|false|none|
|» » logging|body|object|false|none|
|» » » accessLog|body|object|false|none|
|» » » » file|body|object|false|none|
|» » » » » format|body|object|false|none|
|» » » » » » json|body|object|false|none|
|» » » » » » text|body|object|false|none|
|» » » » » path|body|object|true|none|
|» » serviceDiscovery|body|object|false|none|
|» » » awsCloudMap|body|object|false|none|
|» » » » attributes|body|object|false|none|
|» » » » ipPreference|body|object|false|none|
|» » » » namespaceName|body|object|true|none|
|» » » » serviceName|body|object|true|none|
|» » » dns|body|object|false|none|
|» » » » hostname|body|object|true|none|
|» » » » ipPreference|body|object|false|none|
|» » » » responseType|body|object|false|none|
|» tags|body|[[TagRef](#schematagref)]|false|Optional metadata that you can apply to the virtual node to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.|
|» virtualNodeName|body|string|true|The name to use for the virtual node.|

> Example responses

> 200 Response

```json
{
  "virtualNode": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "backendDefaults": {
        "clientPolicy": {
          "tls": {
            "certificate": {
              "file": {
                "certificateChain": {},
                "privateKey": {}
              },
              "sds": {
                "secretName": {}
              }
            },
            "enforce": {},
            "ports": {},
            "validation": {
              "subjectAlternativeNames": {
                "match": {
                  "exact": {}
                }
              },
              "trust": {
                "acm": {
                  "certificateAuthorityArns": {}
                },
                "file": {
                  "certificateChain": {}
                },
                "sds": {
                  "secretName": {}
                }
              }
            }
          }
        }
      },
      "backends": {},
      "listeners": {},
      "logging": {
        "accessLog": {
          "file": {
            "format": {
              "json": {},
              "text": {}
            },
            "path": {}
          }
        }
      },
      "serviceDiscovery": {
        "awsCloudMap": {
          "attributes": {},
          "ipPreference": {},
          "namespaceName": {},
          "serviceName": {}
        },
        "dns": {
          "hostname": {},
          "ipPreference": {},
          "responseType": {}
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualNodeName": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="createvirtualnode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateVirtualNodeOutput](#schemacreatevirtualnodeoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|487|487|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListVirtualRouters

<a id="opIdListVirtualRouters"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string/virtualRouters \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v20190125/meshes/{meshName}/virtualRouters`

Returns a list of existing virtual routers in a service mesh.

<h3 id="listvirtualrouters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The maximum number of results returned by <code>ListVirtualRouters</code> in paginated output. When you use this parameter, <code>ListVirtualRouters</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListVirtualRouters</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListVirtualRouters</code> returns up to 100 results and a <code>nextToken</code> value if applicable.|
|meshName|path|string|true|The name of the service mesh to list virtual routers in.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|nextToken|query|string|false|The <code>nextToken</code> value returned from a previous paginated <code>ListVirtualRouters</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "virtualRouters": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="listvirtualrouters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListVirtualRoutersOutput](#schemalistvirtualroutersoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateVirtualRouter

<a id="opIdCreateVirtualRouter"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string/virtualRouters \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "spec": {
      "listeners": {}
    },
    "tags": [
      {
        "key": {},
        "value": {}
      }
    ],
    "virtualRouterName": "string"
  }'
```

`PUT /v20190125/meshes/{meshName}/virtualRouters`

<p>Creates a virtual router within a service mesh.</p> <p>Specify a <code>listener</code> for any inbound traffic that your virtual router receives. Create a virtual router for each protocol and port that you need to route. Virtual routers handle traffic for one or more virtual services within your mesh. After you create your virtual router, create and associate routes for your virtual router that direct incoming requests to different virtual nodes.</p> <p>For more information about virtual routers, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_routers.html">Virtual routers</a>.</p>

> Body parameter

```json
{
  "clientToken": "string",
  "spec": {
    "listeners": {}
  },
  "tags": [
    {
      "key": {},
      "value": {}
    }
  ],
  "virtualRouterName": "string"
}
```

<h3 id="createvirtualrouter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meshName|path|string|true|The name of the service mesh to create the virtual router in.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.|
|» spec|body|object|true|An object that represents the specification of a virtual router.|
|» » listeners|body|object|false|none|
|» tags|body|[[TagRef](#schematagref)]|false|Optional metadata that you can apply to the virtual router to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.|
|» virtualRouterName|body|string|true|The name to use for the virtual router.|

> Example responses

> 200 Response

```json
{
  "virtualRouter": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "listeners": {}
    },
    "status": {
      "status": {}
    },
    "virtualRouterName": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="createvirtualrouter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateVirtualRouterOutput](#schemacreatevirtualrouteroutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|487|487|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListVirtualServices

<a id="opIdListVirtualServices"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string/virtualServices \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v20190125/meshes/{meshName}/virtualServices`

Returns a list of existing virtual services in a service mesh.

<h3 id="listvirtualservices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The maximum number of results returned by <code>ListVirtualServices</code> in paginated output. When you use this parameter, <code>ListVirtualServices</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListVirtualServices</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListVirtualServices</code> returns up to 100 results and a <code>nextToken</code> value if applicable.|
|meshName|path|string|true|The name of the service mesh to list virtual services in.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|nextToken|query|string|false|The <code>nextToken</code> value returned from a previous paginated <code>ListVirtualServices</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "virtualServices": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="listvirtualservices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListVirtualServicesOutput](#schemalistvirtualservicesoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateVirtualService

<a id="opIdCreateVirtualService"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string/virtualServices \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "spec": {
      "provider": {
        "virtualNode": {
          "virtualNodeName": {}
        },
        "virtualRouter": {
          "virtualRouterName": {}
        }
      }
    },
    "tags": [
      {
        "key": {},
        "value": {}
      }
    ],
    "virtualServiceName": "string"
  }'
```

`PUT /v20190125/meshes/{meshName}/virtualServices`

<p>Creates a virtual service within a service mesh.</p> <p>A virtual service is an abstraction of a real service that is provided by a virtual node directly or indirectly by means of a virtual router. Dependent services call your virtual service by its <code>virtualServiceName</code>, and those requests are routed to the virtual node or virtual router that is specified as the provider for the virtual service.</p> <p>For more information about virtual services, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html">Virtual services</a>.</p>

> Body parameter

```json
{
  "clientToken": "string",
  "spec": {
    "provider": {
      "virtualNode": {
        "virtualNodeName": {}
      },
      "virtualRouter": {
        "virtualRouterName": {}
      }
    }
  },
  "tags": [
    {
      "key": {},
      "value": {}
    }
  ],
  "virtualServiceName": "string"
}
```

<h3 id="createvirtualservice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meshName|path|string|true|The name of the service mesh to create the virtual service in.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.|
|» spec|body|object|true|An object that represents the specification of a virtual service.|
|» » provider|body|object|false|none|
|» » » virtualNode|body|object|false|none|
|» » » » virtualNodeName|body|object|true|none|
|» » » virtualRouter|body|object|false|none|
|» » » » virtualRouterName|body|object|true|none|
|» tags|body|[[TagRef](#schematagref)]|false|Optional metadata that you can apply to the virtual service to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.|
|» virtualServiceName|body|string|true|The name to use for the virtual service.|

> Example responses

> 200 Response

```json
{
  "virtualService": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "provider": {
        "virtualNode": {
          "virtualNodeName": {}
        },
        "virtualRouter": {
          "virtualRouterName": {}
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualServiceName": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="createvirtualservice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateVirtualServiceOutput](#schemacreatevirtualserviceoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|487|487|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeGatewayRoute

<a id="opIdDescribeGatewayRoute"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string/virtualGateway/string/gatewayRoutes/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}`

Describes an existing gateway route.

<h3 id="describegatewayroute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|gatewayRouteName|path|string|true|The name of the gateway route to describe.|
|meshName|path|string|true|The name of the service mesh that the gateway route resides in.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|virtualGatewayName|path|string|true|The name of the virtual gateway that the gateway route is associated with.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "gatewayRoute": {
    "gatewayRouteName": {},
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "grpcRoute": {
        "action": {
          "rewrite": {
            "hostname": {
              "defaultTargetHostname": {}
            }
          },
          "target": {
            "port": {},
            "virtualService": {
              "virtualServiceName": {}
            }
          }
        },
        "match": {
          "hostname": {
            "exact": {},
            "suffix": {}
          },
          "metadata": {},
          "port": {},
          "serviceName": {}
        }
      },
      "http2Route": {
        "action": {
          "rewrite": {
            "hostname": {
              "defaultTargetHostname": {}
            },
            "path": {
              "exact": {}
            },
            "prefix": {
              "defaultPrefix": {},
              "value": {}
            }
          },
          "target": {
            "port": {},
            "virtualService": {
              "virtualServiceName": {}
            }
          }
        },
        "match": {
          "headers": {},
          "hostname": {
            "exact": {},
            "suffix": {}
          },
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {}
        }
      },
      "httpRoute": {
        "action": {
          "rewrite": {
            "hostname": {
              "defaultTargetHostname": {}
            },
            "path": {
              "exact": {}
            },
            "prefix": {
              "defaultPrefix": {},
              "value": {}
            }
          },
          "target": {
            "port": {},
            "virtualService": {
              "virtualServiceName": {}
            }
          }
        },
        "match": {
          "headers": {},
          "hostname": {
            "exact": {},
            "suffix": {}
          },
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {}
        }
      },
      "priority": {}
    },
    "status": {
      "status": {}
    },
    "virtualGatewayName": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="describegatewayroute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeGatewayRouteOutput](#schemadescribegatewayrouteoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateGatewayRoute

<a id="opIdUpdateGatewayRoute"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string/virtualGateway/string/gatewayRoutes/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "spec": {
      "grpcRoute": {
        "action": {
          "rewrite": {
            "hostname": {
              "defaultTargetHostname": {}
            }
          },
          "target": {
            "port": {},
            "virtualService": {
              "virtualServiceName": {}
            }
          }
        },
        "match": {
          "hostname": {
            "exact": {},
            "suffix": {}
          },
          "metadata": {},
          "port": {},
          "serviceName": {}
        }
      },
      "http2Route": {
        "action": {
          "rewrite": {
            "hostname": {
              "defaultTargetHostname": {}
            },
            "path": {
              "exact": {}
            },
            "prefix": {
              "defaultPrefix": {},
              "value": {}
            }
          },
          "target": {
            "port": {},
            "virtualService": {
              "virtualServiceName": {}
            }
          }
        },
        "match": {
          "headers": {},
          "hostname": {
            "exact": {},
            "suffix": {}
          },
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {}
        }
      },
      "httpRoute": {
        "action": {
          "rewrite": {
            "hostname": {
              "defaultTargetHostname": {}
            },
            "path": {
              "exact": {}
            },
            "prefix": {
              "defaultPrefix": {},
              "value": {}
            }
          },
          "target": {
            "port": {},
            "virtualService": {
              "virtualServiceName": {}
            }
          }
        },
        "match": {
          "headers": {},
          "hostname": {
            "exact": {},
            "suffix": {}
          },
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {}
        }
      },
      "priority": {}
    }
  }'
```

`PUT /v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}`

Updates an existing gateway route that is associated to a specified virtual gateway in a service mesh.

> Body parameter

```json
{
  "clientToken": "string",
  "spec": {
    "grpcRoute": {
      "action": {
        "rewrite": {
          "hostname": {
            "defaultTargetHostname": {}
          }
        },
        "target": {
          "port": {},
          "virtualService": {
            "virtualServiceName": {}
          }
        }
      },
      "match": {
        "hostname": {
          "exact": {},
          "suffix": {}
        },
        "metadata": {},
        "port": {},
        "serviceName": {}
      }
    },
    "http2Route": {
      "action": {
        "rewrite": {
          "hostname": {
            "defaultTargetHostname": {}
          },
          "path": {
            "exact": {}
          },
          "prefix": {
            "defaultPrefix": {},
            "value": {}
          }
        },
        "target": {
          "port": {},
          "virtualService": {
            "virtualServiceName": {}
          }
        }
      },
      "match": {
        "headers": {},
        "hostname": {
          "exact": {},
          "suffix": {}
        },
        "method": {},
        "path": {
          "exact": {},
          "regex": {}
        },
        "port": {},
        "prefix": {},
        "queryParameters": {}
      }
    },
    "httpRoute": {
      "action": {
        "rewrite": {
          "hostname": {
            "defaultTargetHostname": {}
          },
          "path": {
            "exact": {}
          },
          "prefix": {
            "defaultPrefix": {},
            "value": {}
          }
        },
        "target": {
          "port": {},
          "virtualService": {
            "virtualServiceName": {}
          }
        }
      },
      "match": {
        "headers": {},
        "hostname": {
          "exact": {},
          "suffix": {}
        },
        "method": {},
        "path": {
          "exact": {},
          "regex": {}
        },
        "port": {},
        "prefix": {},
        "queryParameters": {}
      }
    },
    "priority": {}
  }
}
```

<h3 id="updategatewayroute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|gatewayRouteName|path|string|true|The name of the gateway route to update.|
|meshName|path|string|true|The name of the service mesh that the gateway route resides in.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|virtualGatewayName|path|string|true|The name of the virtual gateway that the gateway route is associated with.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.|
|» spec|body|object|true|An object that represents a gateway route specification. Specify one gateway route type.|
|» » grpcRoute|body|object|false|none|
|» » » action|body|object|true|none|
|» » » » rewrite|body|object|false|none|
|» » » » » hostname|body|object|false|none|
|» » » » » » defaultTargetHostname|body|object|false|none|
|» » » » target|body|object|true|none|
|» » » » » port|body|object|false|none|
|» » » » » virtualService|body|object|true|none|
|» » » » » » virtualServiceName|body|object|true|none|
|» » » match|body|object|true|none|
|» » » » hostname|body|object|false|none|
|» » » » » exact|body|object|false|none|
|» » » » » suffix|body|object|false|none|
|» » » » metadata|body|object|false|none|
|» » » » port|body|object|false|none|
|» » » » serviceName|body|object|false|none|
|» » http2Route|body|object|false|none|
|» » » action|body|object|true|none|
|» » » » rewrite|body|object|false|none|
|» » » » » hostname|body|object|false|none|
|» » » » » » defaultTargetHostname|body|object|false|none|
|» » » » » path|body|object|false|none|
|» » » » » » exact|body|object|false|none|
|» » » » » prefix|body|object|false|none|
|» » » » » » defaultPrefix|body|object|false|none|
|» » » » » » value|body|object|false|none|
|» » » » target|body|object|true|none|
|» » » » » port|body|object|false|none|
|» » » » » virtualService|body|object|true|none|
|» » » » » » virtualServiceName|body|object|true|none|
|» » » match|body|object|true|none|
|» » » » headers|body|object|false|none|
|» » » » hostname|body|object|false|none|
|» » » » » exact|body|object|false|none|
|» » » » » suffix|body|object|false|none|
|» » » » method|body|object|false|none|
|» » » » path|body|object|false|none|
|» » » » » exact|body|object|false|none|
|» » » » » regex|body|object|false|none|
|» » » » port|body|object|false|none|
|» » » » prefix|body|object|false|none|
|» » » » queryParameters|body|object|false|none|
|» » httpRoute|body|object|false|none|
|» » » action|body|object|true|none|
|» » » » rewrite|body|object|false|none|
|» » » » » hostname|body|object|false|none|
|» » » » » » defaultTargetHostname|body|object|false|none|
|» » » » » path|body|object|false|none|
|» » » » » » exact|body|object|false|none|
|» » » » » prefix|body|object|false|none|
|» » » » » » defaultPrefix|body|object|false|none|
|» » » » » » value|body|object|false|none|
|» » » » target|body|object|true|none|
|» » » » » port|body|object|false|none|
|» » » » » virtualService|body|object|true|none|
|» » » » » » virtualServiceName|body|object|true|none|
|» » » match|body|object|true|none|
|» » » » headers|body|object|false|none|
|» » » » hostname|body|object|false|none|
|» » » » » exact|body|object|false|none|
|» » » » » suffix|body|object|false|none|
|» » » » method|body|object|false|none|
|» » » » path|body|object|false|none|
|» » » » » exact|body|object|false|none|
|» » » » » regex|body|object|false|none|
|» » » » port|body|object|false|none|
|» » » » prefix|body|object|false|none|
|» » » » queryParameters|body|object|false|none|
|» » priority|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "gatewayRoute": {
    "gatewayRouteName": {},
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "grpcRoute": {
        "action": {
          "rewrite": {
            "hostname": {
              "defaultTargetHostname": {}
            }
          },
          "target": {
            "port": {},
            "virtualService": {
              "virtualServiceName": {}
            }
          }
        },
        "match": {
          "hostname": {
            "exact": {},
            "suffix": {}
          },
          "metadata": {},
          "port": {},
          "serviceName": {}
        }
      },
      "http2Route": {
        "action": {
          "rewrite": {
            "hostname": {
              "defaultTargetHostname": {}
            },
            "path": {
              "exact": {}
            },
            "prefix": {
              "defaultPrefix": {},
              "value": {}
            }
          },
          "target": {
            "port": {},
            "virtualService": {
              "virtualServiceName": {}
            }
          }
        },
        "match": {
          "headers": {},
          "hostname": {
            "exact": {},
            "suffix": {}
          },
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {}
        }
      },
      "httpRoute": {
        "action": {
          "rewrite": {
            "hostname": {
              "defaultTargetHostname": {}
            },
            "path": {
              "exact": {}
            },
            "prefix": {
              "defaultPrefix": {},
              "value": {}
            }
          },
          "target": {
            "port": {},
            "virtualService": {
              "virtualServiceName": {}
            }
          }
        },
        "match": {
          "headers": {},
          "hostname": {
            "exact": {},
            "suffix": {}
          },
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {}
        }
      },
      "priority": {}
    },
    "status": {
      "status": {}
    },
    "virtualGatewayName": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="updategatewayroute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateGatewayRouteOutput](#schemaupdategatewayrouteoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|487|487|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteGatewayRoute

<a id="opIdDeleteGatewayRoute"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string/virtualGateway/string/gatewayRoutes/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}`

Deletes an existing gateway route.

<h3 id="deletegatewayroute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|gatewayRouteName|path|string|true|The name of the gateway route to delete.|
|meshName|path|string|true|The name of the service mesh to delete the gateway route from.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|virtualGatewayName|path|string|true|The name of the virtual gateway to delete the route from.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "gatewayRoute": {
    "gatewayRouteName": {},
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "grpcRoute": {
        "action": {
          "rewrite": {
            "hostname": {
              "defaultTargetHostname": {}
            }
          },
          "target": {
            "port": {},
            "virtualService": {
              "virtualServiceName": {}
            }
          }
        },
        "match": {
          "hostname": {
            "exact": {},
            "suffix": {}
          },
          "metadata": {},
          "port": {},
          "serviceName": {}
        }
      },
      "http2Route": {
        "action": {
          "rewrite": {
            "hostname": {
              "defaultTargetHostname": {}
            },
            "path": {
              "exact": {}
            },
            "prefix": {
              "defaultPrefix": {},
              "value": {}
            }
          },
          "target": {
            "port": {},
            "virtualService": {
              "virtualServiceName": {}
            }
          }
        },
        "match": {
          "headers": {},
          "hostname": {
            "exact": {},
            "suffix": {}
          },
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {}
        }
      },
      "httpRoute": {
        "action": {
          "rewrite": {
            "hostname": {
              "defaultTargetHostname": {}
            },
            "path": {
              "exact": {}
            },
            "prefix": {
              "defaultPrefix": {},
              "value": {}
            }
          },
          "target": {
            "port": {},
            "virtualService": {
              "virtualServiceName": {}
            }
          }
        },
        "match": {
          "headers": {},
          "hostname": {
            "exact": {},
            "suffix": {}
          },
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {}
        }
      },
      "priority": {}
    },
    "status": {
      "status": {}
    },
    "virtualGatewayName": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="deletegatewayroute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteGatewayRouteOutput](#schemadeletegatewayrouteoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMesh

<a id="opIdDescribeMesh"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v20190125/meshes/{meshName}`

Describes an existing service mesh.

<h3 id="describemesh-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meshName|path|string|true|The name of the service mesh to describe.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "mesh": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "egressFilter": {
        "type": {}
      },
      "serviceDiscovery": {
        "ipPreference": {}
      }
    },
    "status": {
      "status": {}
    }
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="describemesh-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMeshOutput](#schemadescribemeshoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateMesh

<a id="opIdUpdateMesh"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "spec": {
      "egressFilter": {
        "type": {}
      },
      "serviceDiscovery": {
        "ipPreference": {}
      }
    }
  }'
```

`PUT /v20190125/meshes/{meshName}`

Updates an existing service mesh.

> Body parameter

```json
{
  "clientToken": "string",
  "spec": {
    "egressFilter": {
      "type": {}
    },
    "serviceDiscovery": {
      "ipPreference": {}
    }
  }
}
```

<h3 id="updatemesh-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meshName|path|string|true|The name of the service mesh to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.|
|» spec|body|object|false|An object that represents the specification of a service mesh.|
|» » egressFilter|body|object|false|none|
|» » » type|body|object|true|none|
|» » serviceDiscovery|body|[MeshServiceDiscovery](#schemameshservicediscovery)|false|An object that represents the service discovery information for a service mesh.|

> Example responses

> 200 Response

```json
{
  "mesh": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "egressFilter": {
        "type": {}
      },
      "serviceDiscovery": {
        "ipPreference": {}
      }
    },
    "status": {
      "status": {}
    }
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="updatemesh-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateMeshOutput](#schemaupdatemeshoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteMesh

<a id="opIdDeleteMesh"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v20190125/meshes/{meshName}`

<p>Deletes an existing service mesh.</p> <p>You must delete all resources (virtual services, routes, virtual routers, and virtual nodes) in the service mesh before you can delete the mesh itself.</p>

<h3 id="deletemesh-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meshName|path|string|true|The name of the service mesh to delete.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "mesh": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "egressFilter": {
        "type": {}
      },
      "serviceDiscovery": {
        "ipPreference": {}
      }
    },
    "status": {
      "status": {}
    }
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="deletemesh-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteMeshOutput](#schemadeletemeshoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRoute

<a id="opIdDescribeRoute"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string/virtualRouter/string/routes/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}`

Describes an existing route.

<h3 id="describeroute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meshName|path|string|true|The name of the service mesh that the route resides in.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|routeName|path|string|true|The name of the route to describe.|
|virtualRouterName|path|string|true|The name of the virtual router that the route is associated with.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "route": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "routeName": {},
    "spec": {
      "grpcRoute": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "metadata": {},
          "methodName": {},
          "port": {},
          "serviceName": {}
        },
        "retryPolicy": {
          "grpcRetryEvents": {},
          "httpRetryEvents": {},
          "maxRetries": {},
          "perRetryTimeout": {
            "unit": {},
            "value": {}
          },
          "tcpRetryEvents": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          },
          "perRequest": {
            "unit": {},
            "value": {}
          }
        }
      },
      "http2Route": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "headers": {},
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {},
          "scheme": {}
        },
        "retryPolicy": {
          "httpRetryEvents": {},
          "maxRetries": {},
          "perRetryTimeout": {
            "unit": {},
            "value": {}
          },
          "tcpRetryEvents": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          },
          "perRequest": {
            "unit": {},
            "value": {}
          }
        }
      },
      "httpRoute": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "headers": {},
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {},
          "scheme": {}
        },
        "retryPolicy": {
          "httpRetryEvents": {},
          "maxRetries": {},
          "perRetryTimeout": {
            "unit": {},
            "value": {}
          },
          "tcpRetryEvents": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          },
          "perRequest": {
            "unit": {},
            "value": {}
          }
        }
      },
      "priority": {},
      "tcpRoute": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "port": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          }
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualRouterName": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="describeroute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRouteOutput](#schemadescriberouteoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRoute

<a id="opIdUpdateRoute"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string/virtualRouter/string/routes/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "spec": {
      "grpcRoute": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "metadata": {},
          "methodName": {},
          "port": {},
          "serviceName": {}
        },
        "retryPolicy": {
          "grpcRetryEvents": {},
          "httpRetryEvents": {},
          "maxRetries": {},
          "perRetryTimeout": {
            "unit": {},
            "value": {}
          },
          "tcpRetryEvents": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          },
          "perRequest": {
            "unit": {},
            "value": {}
          }
        }
      },
      "http2Route": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "headers": {},
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {},
          "scheme": {}
        },
        "retryPolicy": {
          "httpRetryEvents": {},
          "maxRetries": {},
          "perRetryTimeout": {
            "unit": {},
            "value": {}
          },
          "tcpRetryEvents": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          },
          "perRequest": {
            "unit": {},
            "value": {}
          }
        }
      },
      "httpRoute": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "headers": {},
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {},
          "scheme": {}
        },
        "retryPolicy": {
          "httpRetryEvents": {},
          "maxRetries": {},
          "perRetryTimeout": {
            "unit": {},
            "value": {}
          },
          "tcpRetryEvents": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          },
          "perRequest": {
            "unit": {},
            "value": {}
          }
        }
      },
      "priority": {},
      "tcpRoute": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "port": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          }
        }
      }
    }
  }'
```

`PUT /v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}`

Updates an existing route for a specified service mesh and virtual router.

> Body parameter

```json
{
  "clientToken": "string",
  "spec": {
    "grpcRoute": {
      "action": {
        "weightedTargets": {}
      },
      "match": {
        "metadata": {},
        "methodName": {},
        "port": {},
        "serviceName": {}
      },
      "retryPolicy": {
        "grpcRetryEvents": {},
        "httpRetryEvents": {},
        "maxRetries": {},
        "perRetryTimeout": {
          "unit": {},
          "value": {}
        },
        "tcpRetryEvents": {}
      },
      "timeout": {
        "idle": {
          "unit": {},
          "value": {}
        },
        "perRequest": {
          "unit": {},
          "value": {}
        }
      }
    },
    "http2Route": {
      "action": {
        "weightedTargets": {}
      },
      "match": {
        "headers": {},
        "method": {},
        "path": {
          "exact": {},
          "regex": {}
        },
        "port": {},
        "prefix": {},
        "queryParameters": {},
        "scheme": {}
      },
      "retryPolicy": {
        "httpRetryEvents": {},
        "maxRetries": {},
        "perRetryTimeout": {
          "unit": {},
          "value": {}
        },
        "tcpRetryEvents": {}
      },
      "timeout": {
        "idle": {
          "unit": {},
          "value": {}
        },
        "perRequest": {
          "unit": {},
          "value": {}
        }
      }
    },
    "httpRoute": {
      "action": {
        "weightedTargets": {}
      },
      "match": {
        "headers": {},
        "method": {},
        "path": {
          "exact": {},
          "regex": {}
        },
        "port": {},
        "prefix": {},
        "queryParameters": {},
        "scheme": {}
      },
      "retryPolicy": {
        "httpRetryEvents": {},
        "maxRetries": {},
        "perRetryTimeout": {
          "unit": {},
          "value": {}
        },
        "tcpRetryEvents": {}
      },
      "timeout": {
        "idle": {
          "unit": {},
          "value": {}
        },
        "perRequest": {
          "unit": {},
          "value": {}
        }
      }
    },
    "priority": {},
    "tcpRoute": {
      "action": {
        "weightedTargets": {}
      },
      "match": {
        "port": {}
      },
      "timeout": {
        "idle": {
          "unit": {},
          "value": {}
        }
      }
    }
  }
}
```

<h3 id="updateroute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meshName|path|string|true|The name of the service mesh that the route resides in.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|routeName|path|string|true|The name of the route to update.|
|virtualRouterName|path|string|true|The name of the virtual router that the route is associated with.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.|
|» spec|body|object|true|An object that represents a route specification. Specify one route type.|
|» » grpcRoute|body|object|false|none|
|» » » action|body|object|true|none|
|» » » » weightedTargets|body|object|true|none|
|» » » match|body|object|true|none|
|» » » » metadata|body|object|false|none|
|» » » » methodName|body|object|false|none|
|» » » » port|body|object|false|none|
|» » » » serviceName|body|object|false|none|
|» » » retryPolicy|body|object|false|none|
|» » » » grpcRetryEvents|body|object|false|none|
|» » » » httpRetryEvents|body|object|false|none|
|» » » » maxRetries|body|object|true|none|
|» » » » perRetryTimeout|body|object|true|none|
|» » » » » unit|body|object|false|none|
|» » » » » value|body|object|false|none|
|» » » » tcpRetryEvents|body|object|false|none|
|» » » timeout|body|object|false|none|
|» » » » idle|body|object|false|none|
|» » » » » unit|body|object|false|none|
|» » » » » value|body|object|false|none|
|» » » » perRequest|body|object|false|none|
|» » » » » unit|body|object|false|none|
|» » » » » value|body|object|false|none|
|» » http2Route|body|object|false|none|
|» » » action|body|object|true|none|
|» » » » weightedTargets|body|object|true|none|
|» » » match|body|object|true|none|
|» » » » headers|body|object|false|none|
|» » » » method|body|object|false|none|
|» » » » path|body|object|false|none|
|» » » » » exact|body|object|false|none|
|» » » » » regex|body|object|false|none|
|» » » » port|body|object|false|none|
|» » » » prefix|body|object|false|none|
|» » » » queryParameters|body|object|false|none|
|» » » » scheme|body|object|false|none|
|» » » retryPolicy|body|object|false|none|
|» » » » httpRetryEvents|body|object|false|none|
|» » » » maxRetries|body|object|true|none|
|» » » » perRetryTimeout|body|object|true|none|
|» » » » » unit|body|object|false|none|
|» » » » » value|body|object|false|none|
|» » » » tcpRetryEvents|body|object|false|none|
|» » » timeout|body|object|false|none|
|» » » » idle|body|object|false|none|
|» » » » » unit|body|object|false|none|
|» » » » » value|body|object|false|none|
|» » » » perRequest|body|object|false|none|
|» » » » » unit|body|object|false|none|
|» » » » » value|body|object|false|none|
|» » httpRoute|body|object|false|none|
|» » » action|body|object|true|none|
|» » » » weightedTargets|body|object|true|none|
|» » » match|body|object|true|none|
|» » » » headers|body|object|false|none|
|» » » » method|body|object|false|none|
|» » » » path|body|object|false|none|
|» » » » » exact|body|object|false|none|
|» » » » » regex|body|object|false|none|
|» » » » port|body|object|false|none|
|» » » » prefix|body|object|false|none|
|» » » » queryParameters|body|object|false|none|
|» » » » scheme|body|object|false|none|
|» » » retryPolicy|body|object|false|none|
|» » » » httpRetryEvents|body|object|false|none|
|» » » » maxRetries|body|object|true|none|
|» » » » perRetryTimeout|body|object|true|none|
|» » » » » unit|body|object|false|none|
|» » » » » value|body|object|false|none|
|» » » » tcpRetryEvents|body|object|false|none|
|» » » timeout|body|object|false|none|
|» » » » idle|body|object|false|none|
|» » » » » unit|body|object|false|none|
|» » » » » value|body|object|false|none|
|» » » » perRequest|body|object|false|none|
|» » » » » unit|body|object|false|none|
|» » » » » value|body|object|false|none|
|» » priority|body|object|false|none|
|» » tcpRoute|body|object|false|none|
|» » » action|body|object|true|none|
|» » » » weightedTargets|body|object|true|none|
|» » » match|body|object|false|none|
|» » » » port|body|object|false|none|
|» » » timeout|body|object|false|none|
|» » » » idle|body|object|false|none|
|» » » » » unit|body|object|false|none|
|» » » » » value|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "route": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "routeName": {},
    "spec": {
      "grpcRoute": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "metadata": {},
          "methodName": {},
          "port": {},
          "serviceName": {}
        },
        "retryPolicy": {
          "grpcRetryEvents": {},
          "httpRetryEvents": {},
          "maxRetries": {},
          "perRetryTimeout": {
            "unit": {},
            "value": {}
          },
          "tcpRetryEvents": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          },
          "perRequest": {
            "unit": {},
            "value": {}
          }
        }
      },
      "http2Route": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "headers": {},
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {},
          "scheme": {}
        },
        "retryPolicy": {
          "httpRetryEvents": {},
          "maxRetries": {},
          "perRetryTimeout": {
            "unit": {},
            "value": {}
          },
          "tcpRetryEvents": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          },
          "perRequest": {
            "unit": {},
            "value": {}
          }
        }
      },
      "httpRoute": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "headers": {},
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {},
          "scheme": {}
        },
        "retryPolicy": {
          "httpRetryEvents": {},
          "maxRetries": {},
          "perRetryTimeout": {
            "unit": {},
            "value": {}
          },
          "tcpRetryEvents": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          },
          "perRequest": {
            "unit": {},
            "value": {}
          }
        }
      },
      "priority": {},
      "tcpRoute": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "port": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          }
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualRouterName": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="updateroute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRouteOutput](#schemaupdaterouteoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|487|487|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRoute

<a id="opIdDeleteRoute"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string/virtualRouter/string/routes/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}`

Deletes an existing route.

<h3 id="deleteroute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meshName|path|string|true|The name of the service mesh to delete the route in.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|routeName|path|string|true|The name of the route to delete.|
|virtualRouterName|path|string|true|The name of the virtual router to delete the route in.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "route": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "routeName": {},
    "spec": {
      "grpcRoute": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "metadata": {},
          "methodName": {},
          "port": {},
          "serviceName": {}
        },
        "retryPolicy": {
          "grpcRetryEvents": {},
          "httpRetryEvents": {},
          "maxRetries": {},
          "perRetryTimeout": {
            "unit": {},
            "value": {}
          },
          "tcpRetryEvents": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          },
          "perRequest": {
            "unit": {},
            "value": {}
          }
        }
      },
      "http2Route": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "headers": {},
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {},
          "scheme": {}
        },
        "retryPolicy": {
          "httpRetryEvents": {},
          "maxRetries": {},
          "perRetryTimeout": {
            "unit": {},
            "value": {}
          },
          "tcpRetryEvents": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          },
          "perRequest": {
            "unit": {},
            "value": {}
          }
        }
      },
      "httpRoute": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "headers": {},
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {},
          "scheme": {}
        },
        "retryPolicy": {
          "httpRetryEvents": {},
          "maxRetries": {},
          "perRetryTimeout": {
            "unit": {},
            "value": {}
          },
          "tcpRetryEvents": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          },
          "perRequest": {
            "unit": {},
            "value": {}
          }
        }
      },
      "priority": {},
      "tcpRoute": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "port": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          }
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualRouterName": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="deleteroute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRouteOutput](#schemadeleterouteoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeVirtualGateway

<a id="opIdDescribeVirtualGateway"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string/virtualGateways/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}`

Describes an existing virtual gateway.

<h3 id="describevirtualgateway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meshName|path|string|true|The name of the service mesh that the gateway route resides in.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|virtualGatewayName|path|string|true|The name of the virtual gateway to describe.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "virtualGateway": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "backendDefaults": {
        "clientPolicy": {
          "tls": {
            "certificate": {
              "file": {
                "certificateChain": {},
                "privateKey": {}
              },
              "sds": {
                "secretName": {}
              }
            },
            "enforce": {},
            "ports": {},
            "validation": {
              "subjectAlternativeNames": {
                "match": {
                  "exact": {}
                }
              },
              "trust": {
                "acm": {
                  "certificateAuthorityArns": {}
                },
                "file": {
                  "certificateChain": {}
                },
                "sds": {
                  "secretName": {}
                }
              }
            }
          }
        }
      },
      "listeners": {},
      "logging": {
        "accessLog": {
          "file": {
            "format": {
              "json": {},
              "text": {}
            },
            "path": {}
          }
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualGatewayName": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="describevirtualgateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeVirtualGatewayOutput](#schemadescribevirtualgatewayoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateVirtualGateway

<a id="opIdUpdateVirtualGateway"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string/virtualGateways/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "spec": {
      "backendDefaults": {
        "clientPolicy": {
          "tls": {
            "certificate": {
              "file": {
                "certificateChain": {},
                "privateKey": {}
              },
              "sds": {
                "secretName": {}
              }
            },
            "enforce": {},
            "ports": {},
            "validation": {
              "subjectAlternativeNames": {
                "match": {
                  "exact": {}
                }
              },
              "trust": {
                "acm": {
                  "certificateAuthorityArns": {}
                },
                "file": {
                  "certificateChain": {}
                },
                "sds": {
                  "secretName": {}
                }
              }
            }
          }
        }
      },
      "listeners": {},
      "logging": {
        "accessLog": {
          "file": {
            "format": {
              "json": {},
              "text": {}
            },
            "path": {}
          }
        }
      }
    }
  }'
```

`PUT /v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}`

Updates an existing virtual gateway in a specified service mesh.

> Body parameter

```json
{
  "clientToken": "string",
  "spec": {
    "backendDefaults": {
      "clientPolicy": {
        "tls": {
          "certificate": {
            "file": {
              "certificateChain": {},
              "privateKey": {}
            },
            "sds": {
              "secretName": {}
            }
          },
          "enforce": {},
          "ports": {},
          "validation": {
            "subjectAlternativeNames": {
              "match": {
                "exact": {}
              }
            },
            "trust": {
              "acm": {
                "certificateAuthorityArns": {}
              },
              "file": {
                "certificateChain": {}
              },
              "sds": {
                "secretName": {}
              }
            }
          }
        }
      }
    },
    "listeners": {},
    "logging": {
      "accessLog": {
        "file": {
          "format": {
            "json": {},
            "text": {}
          },
          "path": {}
        }
      }
    }
  }
}
```

<h3 id="updatevirtualgateway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meshName|path|string|true|The name of the service mesh that the virtual gateway resides in.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|virtualGatewayName|path|string|true|The name of the virtual gateway to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.|
|» spec|body|object|true|An object that represents the specification of a service mesh resource.|
|» » backendDefaults|body|object|false|none|
|» » » clientPolicy|body|object|false|none|
|» » » » tls|body|object|false|none|
|» » » » » certificate|body|object|false|none|
|» » » » » » file|body|object|false|none|
|» » » » » » » certificateChain|body|object|true|none|
|» » » » » » » privateKey|body|object|true|none|
|» » » » » » sds|body|object|false|none|
|» » » » » » » secretName|body|object|true|none|
|» » » » » enforce|body|object|false|none|
|» » » » » ports|body|object|false|none|
|» » » » » validation|body|object|true|none|
|» » » » » » subjectAlternativeNames|body|object|false|none|
|» » » » » » » match|body|object|true|none|
|» » » » » » » » exact|body|object|true|none|
|» » » » » » trust|body|object|true|none|
|» » » » » » » acm|body|object|false|none|
|» » » » » » » » certificateAuthorityArns|body|object|true|none|
|» » » » » » » file|body|object|false|none|
|» » » » » » » » certificateChain|body|object|true|none|
|» » » » » » » sds|body|object|false|none|
|» » » » » » » » secretName|body|object|true|none|
|» » listeners|body|object|false|none|
|» » logging|body|[VirtualGatewayLogging](#schemavirtualgatewaylogging)|false|An object that represents logging information.|

> Example responses

> 200 Response

```json
{
  "virtualGateway": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "backendDefaults": {
        "clientPolicy": {
          "tls": {
            "certificate": {
              "file": {
                "certificateChain": {},
                "privateKey": {}
              },
              "sds": {
                "secretName": {}
              }
            },
            "enforce": {},
            "ports": {},
            "validation": {
              "subjectAlternativeNames": {
                "match": {
                  "exact": {}
                }
              },
              "trust": {
                "acm": {
                  "certificateAuthorityArns": {}
                },
                "file": {
                  "certificateChain": {}
                },
                "sds": {
                  "secretName": {}
                }
              }
            }
          }
        }
      },
      "listeners": {},
      "logging": {
        "accessLog": {
          "file": {
            "format": {
              "json": {},
              "text": {}
            },
            "path": {}
          }
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualGatewayName": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="updatevirtualgateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateVirtualGatewayOutput](#schemaupdatevirtualgatewayoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|487|487|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVirtualGateway

<a id="opIdDeleteVirtualGateway"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string/virtualGateways/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}`

Deletes an existing virtual gateway. You cannot delete a virtual gateway if any gateway routes are associated to it.

<h3 id="deletevirtualgateway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meshName|path|string|true|The name of the service mesh to delete the virtual gateway from.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|virtualGatewayName|path|string|true|The name of the virtual gateway to delete.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "virtualGateway": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "backendDefaults": {
        "clientPolicy": {
          "tls": {
            "certificate": {
              "file": {
                "certificateChain": {},
                "privateKey": {}
              },
              "sds": {
                "secretName": {}
              }
            },
            "enforce": {},
            "ports": {},
            "validation": {
              "subjectAlternativeNames": {
                "match": {
                  "exact": {}
                }
              },
              "trust": {
                "acm": {
                  "certificateAuthorityArns": {}
                },
                "file": {
                  "certificateChain": {}
                },
                "sds": {
                  "secretName": {}
                }
              }
            }
          }
        }
      },
      "listeners": {},
      "logging": {
        "accessLog": {
          "file": {
            "format": {
              "json": {},
              "text": {}
            },
            "path": {}
          }
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualGatewayName": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="deletevirtualgateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteVirtualGatewayOutput](#schemadeletevirtualgatewayoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeVirtualNode

<a id="opIdDescribeVirtualNode"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string/virtualNodes/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}`

Describes an existing virtual node.

<h3 id="describevirtualnode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meshName|path|string|true|The name of the service mesh that the virtual node resides in.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|virtualNodeName|path|string|true|The name of the virtual node to describe.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "virtualNode": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "backendDefaults": {
        "clientPolicy": {
          "tls": {
            "certificate": {
              "file": {
                "certificateChain": {},
                "privateKey": {}
              },
              "sds": {
                "secretName": {}
              }
            },
            "enforce": {},
            "ports": {},
            "validation": {
              "subjectAlternativeNames": {
                "match": {
                  "exact": {}
                }
              },
              "trust": {
                "acm": {
                  "certificateAuthorityArns": {}
                },
                "file": {
                  "certificateChain": {}
                },
                "sds": {
                  "secretName": {}
                }
              }
            }
          }
        }
      },
      "backends": {},
      "listeners": {},
      "logging": {
        "accessLog": {
          "file": {
            "format": {
              "json": {},
              "text": {}
            },
            "path": {}
          }
        }
      },
      "serviceDiscovery": {
        "awsCloudMap": {
          "attributes": {},
          "ipPreference": {},
          "namespaceName": {},
          "serviceName": {}
        },
        "dns": {
          "hostname": {},
          "ipPreference": {},
          "responseType": {}
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualNodeName": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="describevirtualnode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeVirtualNodeOutput](#schemadescribevirtualnodeoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateVirtualNode

<a id="opIdUpdateVirtualNode"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string/virtualNodes/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "spec": {
      "backendDefaults": {
        "clientPolicy": {
          "tls": {
            "certificate": {
              "file": {
                "certificateChain": {},
                "privateKey": {}
              },
              "sds": {
                "secretName": {}
              }
            },
            "enforce": {},
            "ports": {},
            "validation": {
              "subjectAlternativeNames": {
                "match": {
                  "exact": {}
                }
              },
              "trust": {
                "acm": {
                  "certificateAuthorityArns": {}
                },
                "file": {
                  "certificateChain": {}
                },
                "sds": {
                  "secretName": {}
                }
              }
            }
          }
        }
      },
      "backends": {},
      "listeners": {},
      "logging": {
        "accessLog": {
          "file": {
            "format": {
              "json": {},
              "text": {}
            },
            "path": {}
          }
        }
      },
      "serviceDiscovery": {
        "awsCloudMap": {
          "attributes": {},
          "ipPreference": {},
          "namespaceName": {},
          "serviceName": {}
        },
        "dns": {
          "hostname": {},
          "ipPreference": {},
          "responseType": {}
        }
      }
    }
  }'
```

`PUT /v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}`

Updates an existing virtual node in a specified service mesh.

> Body parameter

```json
{
  "clientToken": "string",
  "spec": {
    "backendDefaults": {
      "clientPolicy": {
        "tls": {
          "certificate": {
            "file": {
              "certificateChain": {},
              "privateKey": {}
            },
            "sds": {
              "secretName": {}
            }
          },
          "enforce": {},
          "ports": {},
          "validation": {
            "subjectAlternativeNames": {
              "match": {
                "exact": {}
              }
            },
            "trust": {
              "acm": {
                "certificateAuthorityArns": {}
              },
              "file": {
                "certificateChain": {}
              },
              "sds": {
                "secretName": {}
              }
            }
          }
        }
      }
    },
    "backends": {},
    "listeners": {},
    "logging": {
      "accessLog": {
        "file": {
          "format": {
            "json": {},
            "text": {}
          },
          "path": {}
        }
      }
    },
    "serviceDiscovery": {
      "awsCloudMap": {
        "attributes": {},
        "ipPreference": {},
        "namespaceName": {},
        "serviceName": {}
      },
      "dns": {
        "hostname": {},
        "ipPreference": {},
        "responseType": {}
      }
    }
  }
}
```

<h3 id="updatevirtualnode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meshName|path|string|true|The name of the service mesh that the virtual node resides in.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|virtualNodeName|path|string|true|The name of the virtual node to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.|
|» spec|body|object|true|An object that represents the specification of a virtual node.|
|» » backendDefaults|body|object|false|none|
|» » » clientPolicy|body|object|false|none|
|» » » » tls|body|object|false|none|
|» » » » » certificate|body|object|false|none|
|» » » » » » file|body|object|false|none|
|» » » » » » » certificateChain|body|object|true|none|
|» » » » » » » privateKey|body|object|true|none|
|» » » » » » sds|body|object|false|none|
|» » » » » » » secretName|body|object|true|none|
|» » » » » enforce|body|object|false|none|
|» » » » » ports|body|object|false|none|
|» » » » » validation|body|object|true|none|
|» » » » » » subjectAlternativeNames|body|object|false|none|
|» » » » » » » match|body|object|true|none|
|» » » » » » » » exact|body|object|true|none|
|» » » » » » trust|body|object|true|none|
|» » » » » » » acm|body|object|false|none|
|» » » » » » » » certificateAuthorityArns|body|object|true|none|
|» » » » » » » file|body|object|false|none|
|» » » » » » » » certificateChain|body|object|true|none|
|» » » » » » » sds|body|object|false|none|
|» » » » » » » » secretName|body|object|true|none|
|» » backends|body|object|false|none|
|» » listeners|body|object|false|none|
|» » logging|body|object|false|none|
|» » » accessLog|body|object|false|none|
|» » » » file|body|object|false|none|
|» » » » » format|body|object|false|none|
|» » » » » » json|body|object|false|none|
|» » » » » » text|body|object|false|none|
|» » » » » path|body|object|true|none|
|» » serviceDiscovery|body|object|false|none|
|» » » awsCloudMap|body|object|false|none|
|» » » » attributes|body|object|false|none|
|» » » » ipPreference|body|object|false|none|
|» » » » namespaceName|body|object|true|none|
|» » » » serviceName|body|object|true|none|
|» » » dns|body|object|false|none|
|» » » » hostname|body|object|true|none|
|» » » » ipPreference|body|object|false|none|
|» » » » responseType|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "virtualNode": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "backendDefaults": {
        "clientPolicy": {
          "tls": {
            "certificate": {
              "file": {
                "certificateChain": {},
                "privateKey": {}
              },
              "sds": {
                "secretName": {}
              }
            },
            "enforce": {},
            "ports": {},
            "validation": {
              "subjectAlternativeNames": {
                "match": {
                  "exact": {}
                }
              },
              "trust": {
                "acm": {
                  "certificateAuthorityArns": {}
                },
                "file": {
                  "certificateChain": {}
                },
                "sds": {
                  "secretName": {}
                }
              }
            }
          }
        }
      },
      "backends": {},
      "listeners": {},
      "logging": {
        "accessLog": {
          "file": {
            "format": {
              "json": {},
              "text": {}
            },
            "path": {}
          }
        }
      },
      "serviceDiscovery": {
        "awsCloudMap": {
          "attributes": {},
          "ipPreference": {},
          "namespaceName": {},
          "serviceName": {}
        },
        "dns": {
          "hostname": {},
          "ipPreference": {},
          "responseType": {}
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualNodeName": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="updatevirtualnode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateVirtualNodeOutput](#schemaupdatevirtualnodeoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|487|487|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVirtualNode

<a id="opIdDeleteVirtualNode"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string/virtualNodes/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}`

<p>Deletes an existing virtual node.</p> <p>You must delete any virtual services that list a virtual node as a service provider before you can delete the virtual node itself.</p>

<h3 id="deletevirtualnode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meshName|path|string|true|The name of the service mesh to delete the virtual node in.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|virtualNodeName|path|string|true|The name of the virtual node to delete.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "virtualNode": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "backendDefaults": {
        "clientPolicy": {
          "tls": {
            "certificate": {
              "file": {
                "certificateChain": {},
                "privateKey": {}
              },
              "sds": {
                "secretName": {}
              }
            },
            "enforce": {},
            "ports": {},
            "validation": {
              "subjectAlternativeNames": {
                "match": {
                  "exact": {}
                }
              },
              "trust": {
                "acm": {
                  "certificateAuthorityArns": {}
                },
                "file": {
                  "certificateChain": {}
                },
                "sds": {
                  "secretName": {}
                }
              }
            }
          }
        }
      },
      "backends": {},
      "listeners": {},
      "logging": {
        "accessLog": {
          "file": {
            "format": {
              "json": {},
              "text": {}
            },
            "path": {}
          }
        }
      },
      "serviceDiscovery": {
        "awsCloudMap": {
          "attributes": {},
          "ipPreference": {},
          "namespaceName": {},
          "serviceName": {}
        },
        "dns": {
          "hostname": {},
          "ipPreference": {},
          "responseType": {}
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualNodeName": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="deletevirtualnode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteVirtualNodeOutput](#schemadeletevirtualnodeoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeVirtualRouter

<a id="opIdDescribeVirtualRouter"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string/virtualRouters/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}`

Describes an existing virtual router.

<h3 id="describevirtualrouter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meshName|path|string|true|The name of the service mesh that the virtual router resides in.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|virtualRouterName|path|string|true|The name of the virtual router to describe.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "virtualRouter": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "listeners": {}
    },
    "status": {
      "status": {}
    },
    "virtualRouterName": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="describevirtualrouter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeVirtualRouterOutput](#schemadescribevirtualrouteroutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateVirtualRouter

<a id="opIdUpdateVirtualRouter"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string/virtualRouters/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "spec": {
      "listeners": {}
    }
  }'
```

`PUT /v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}`

Updates an existing virtual router in a specified service mesh.

> Body parameter

```json
{
  "clientToken": "string",
  "spec": {
    "listeners": {}
  }
}
```

<h3 id="updatevirtualrouter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meshName|path|string|true|The name of the service mesh that the virtual router resides in.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|virtualRouterName|path|string|true|The name of the virtual router to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.|
|» spec|body|object|true|An object that represents the specification of a virtual router.|
|» » listeners|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "virtualRouter": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "listeners": {}
    },
    "status": {
      "status": {}
    },
    "virtualRouterName": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="updatevirtualrouter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateVirtualRouterOutput](#schemaupdatevirtualrouteroutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|487|487|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVirtualRouter

<a id="opIdDeleteVirtualRouter"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string/virtualRouters/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}`

<p>Deletes an existing virtual router.</p> <p>You must delete any routes associated with the virtual router before you can delete the router itself.</p>

<h3 id="deletevirtualrouter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meshName|path|string|true|The name of the service mesh to delete the virtual router in.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|virtualRouterName|path|string|true|The name of the virtual router to delete.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "virtualRouter": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "listeners": {}
    },
    "status": {
      "status": {}
    },
    "virtualRouterName": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="deletevirtualrouter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteVirtualRouterOutput](#schemadeletevirtualrouteroutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeVirtualService

<a id="opIdDescribeVirtualService"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string/virtualServices/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}`

Describes an existing virtual service.

<h3 id="describevirtualservice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meshName|path|string|true|The name of the service mesh that the virtual service resides in.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|virtualServiceName|path|string|true|The name of the virtual service to describe.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "virtualService": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "provider": {
        "virtualNode": {
          "virtualNodeName": {}
        },
        "virtualRouter": {
          "virtualRouterName": {}
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualServiceName": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="describevirtualservice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeVirtualServiceOutput](#schemadescribevirtualserviceoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateVirtualService

<a id="opIdUpdateVirtualService"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string/virtualServices/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "spec": {
      "provider": {
        "virtualNode": {
          "virtualNodeName": {}
        },
        "virtualRouter": {
          "virtualRouterName": {}
        }
      }
    }
  }'
```

`PUT /v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}`

Updates an existing virtual service in a specified service mesh.

> Body parameter

```json
{
  "clientToken": "string",
  "spec": {
    "provider": {
      "virtualNode": {
        "virtualNodeName": {}
      },
      "virtualRouter": {
        "virtualRouterName": {}
      }
    }
  }
}
```

<h3 id="updatevirtualservice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meshName|path|string|true|The name of the service mesh that the virtual service resides in.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|virtualServiceName|path|string|true|The name of the virtual service to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.|
|» spec|body|object|true|An object that represents the specification of a virtual service.|
|» » provider|body|object|false|none|
|» » » virtualNode|body|object|false|none|
|» » » » virtualNodeName|body|object|true|none|
|» » » virtualRouter|body|object|false|none|
|» » » » virtualRouterName|body|object|true|none|

> Example responses

> 200 Response

```json
{
  "virtualService": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "provider": {
        "virtualNode": {
          "virtualNodeName": {}
        },
        "virtualRouter": {
          "virtualRouterName": {}
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualServiceName": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="updatevirtualservice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateVirtualServiceOutput](#schemaupdatevirtualserviceoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|487|487|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVirtualService

<a id="opIdDeleteVirtualService"></a>

> Code samples

```bash
curl https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/string/virtualServices/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}`

Deletes an existing virtual service.

<h3 id="deletevirtualservice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meshName|path|string|true|The name of the service mesh to delete the virtual service in.|
|meshOwner|query|string|false|The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.|
|virtualServiceName|path|string|true|The name of the virtual service to delete.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "virtualService": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "provider": {
        "virtualNode": {
          "virtualNodeName": {}
        },
        "virtualRouter": {
          "virtualRouterName": {}
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualServiceName": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="deletevirtualservice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteVirtualServiceOutput](#schemadeletevirtualserviceoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://appmesh.us-east-1.amazonaws.com/v20190125/tags#resourceArn?resourceArn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v20190125/tags#resourceArn`

List the tags for an App Mesh resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The maximum number of tag results returned by <code>ListTagsForResource</code> in paginated output. When this parameter is used, <code>ListTagsForResource</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListTagsForResource</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListTagsForResource</code> returns up to 100 results and a <code>nextToken</code> value if applicable.|
|nextToken|query|string|false|The <code>nextToken</code> value returned from a previous paginated <code>ListTagsForResource</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.|
|resourceArn|query|string|true|The Amazon Resource Name (ARN) that identifies the resource to list the tags for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "tags": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceOutput](#schemalisttagsforresourceoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://appmesh.us-east-1.amazonaws.com/v20190125/tag#resourceArn?resourceArn=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "tags": [
      {
        "key": {},
        "value": {}
      }
    ]
  }'
```

`PUT /v20190125/tag#resourceArn`

Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted.

> Body parameter

```json
{
  "tags": [
    {
      "key": {},
      "value": {}
    }
  ]
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|query|string|true|The Amazon Resource Name (ARN) of the resource to add tags to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|[[TagRef](#schematagref)]|true|The tags to add to the resource. A tag is an array of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceOutput](#schematagresourceoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://appmesh.us-east-1.amazonaws.com/v20190125/untag#resourceArn?resourceArn=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "tagKeys": [
      "string"
    ]
  }'
```

`PUT /v20190125/untag#resourceArn`

Deletes specified tags from a resource.

> Body parameter

```json
{
  "tagKeys": [
    "string"
  ]
}
```

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|query|string|true|The Amazon Resource Name (ARN) of the resource to delete tags from.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tagKeys|body|[[TagKey](#schematagkey)]|true|The keys of the tags to be removed.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceOutput](#schemauntagresourceoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateGatewayRouteOutput">CreateGatewayRouteOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreategatewayrouteoutput"></a>
<a id="schema_CreateGatewayRouteOutput"></a>
<a id="tocScreategatewayrouteoutput"></a>
<a id="tocscreategatewayrouteoutput"></a>

```json
{
  "gatewayRoute": {
    "gatewayRouteName": {},
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "grpcRoute": {
        "action": {
          "rewrite": {
            "hostname": {
              "defaultTargetHostname": {}
            }
          },
          "target": {
            "port": {},
            "virtualService": {
              "virtualServiceName": {}
            }
          }
        },
        "match": {
          "hostname": {
            "exact": {},
            "suffix": {}
          },
          "metadata": {},
          "port": {},
          "serviceName": {}
        }
      },
      "http2Route": {
        "action": {
          "rewrite": {
            "hostname": {
              "defaultTargetHostname": {}
            },
            "path": {
              "exact": {}
            },
            "prefix": {
              "defaultPrefix": {},
              "value": {}
            }
          },
          "target": {
            "port": {},
            "virtualService": {
              "virtualServiceName": {}
            }
          }
        },
        "match": {
          "headers": {},
          "hostname": {
            "exact": {},
            "suffix": {}
          },
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {}
        }
      },
      "httpRoute": {
        "action": {
          "rewrite": {
            "hostname": {
              "defaultTargetHostname": {}
            },
            "path": {
              "exact": {}
            },
            "prefix": {
              "defaultPrefix": {},
              "value": {}
            }
          },
          "target": {
            "port": {},
            "virtualService": {
              "virtualServiceName": {}
            }
          }
        },
        "match": {
          "headers": {},
          "hostname": {
            "exact": {},
            "suffix": {}
          },
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {}
        }
      },
      "priority": {}
    },
    "status": {
      "status": {}
    },
    "virtualGatewayName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gatewayRoute|object|true|none|none|

<h2 id="tocS_GrpcGatewayRoute">GrpcGatewayRoute</h2>
<!-- backwards compatibility -->
<a id="schemagrpcgatewayroute"></a>
<a id="schema_GrpcGatewayRoute"></a>
<a id="tocSgrpcgatewayroute"></a>
<a id="tocsgrpcgatewayroute"></a>

```json
{
  "action": {
    "rewrite": {
      "hostname": {
        "defaultTargetHostname": {}
      }
    },
    "target": {
      "port": {},
      "virtualService": {
        "virtualServiceName": {}
      }
    }
  },
  "match": {
    "hostname": {
      "exact": {},
      "suffix": {}
    },
    "metadata": {},
    "port": {},
    "serviceName": {}
  }
}
```

An object that represents a gRPC gateway route.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|match|object|true|none|none|

<h2 id="tocS_HttpGatewayRoute">HttpGatewayRoute</h2>
<!-- backwards compatibility -->
<a id="schemahttpgatewayroute"></a>
<a id="schema_HttpGatewayRoute"></a>
<a id="tocShttpgatewayroute"></a>
<a id="tocshttpgatewayroute"></a>

```json
{
  "action": {
    "rewrite": {
      "hostname": {
        "defaultTargetHostname": {}
      },
      "path": {
        "exact": {}
      },
      "prefix": {
        "defaultPrefix": {},
        "value": {}
      }
    },
    "target": {
      "port": {},
      "virtualService": {
        "virtualServiceName": {}
      }
    }
  },
  "match": {
    "headers": {},
    "hostname": {
      "exact": {},
      "suffix": {}
    },
    "method": {},
    "path": {
      "exact": {},
      "regex": {}
    },
    "port": {},
    "prefix": {},
    "queryParameters": {}
  }
}
```

An object that represents an HTTP gateway route.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|match|object|true|none|none|

<h2 id="tocS_GatewayRoutePriority">GatewayRoutePriority</h2>
<!-- backwards compatibility -->
<a id="schemagatewayroutepriority"></a>
<a id="schema_GatewayRoutePriority"></a>
<a id="tocSgatewayroutepriority"></a>
<a id="tocsgatewayroutepriority"></a>

```json
0
```

<h2 id="tocS_TagRef">TagRef</h2>
<!-- backwards compatibility -->
<a id="schematagref"></a>
<a id="schema_TagRef"></a>
<a id="tocStagref"></a>
<a id="tocstagref"></a>

```json
{
  "key": {},
  "value": {}
}
```

Optional metadata that you apply to a resource to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_NotFoundException">NotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundexception"></a>
<a id="schema_NotFoundException"></a>
<a id="tocSnotfoundexception"></a>
<a id="tocsnotfoundexception"></a>

```json
null
```

<h2 id="tocS_BadRequestException">BadRequestException</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestexception"></a>
<a id="schema_BadRequestException"></a>
<a id="tocSbadrequestexception"></a>
<a id="tocsbadrequestexception"></a>

```json
null
```

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_TooManyRequestsException">TooManyRequestsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrequestsexception"></a>
<a id="schema_TooManyRequestsException"></a>
<a id="tocStoomanyrequestsexception"></a>
<a id="tocstoomanyrequestsexception"></a>

```json
null
```

<h2 id="tocS_ForbiddenException">ForbiddenException</h2>
<!-- backwards compatibility -->
<a id="schemaforbiddenexception"></a>
<a id="schema_ForbiddenException"></a>
<a id="tocSforbiddenexception"></a>
<a id="tocsforbiddenexception"></a>

```json
null
```

<h2 id="tocS_ServiceUnavailableException">ServiceUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemaserviceunavailableexception"></a>
<a id="schema_ServiceUnavailableException"></a>
<a id="tocSserviceunavailableexception"></a>
<a id="tocsserviceunavailableexception"></a>

```json
null
```

<h2 id="tocS_InternalServerErrorException">InternalServerErrorException</h2>
<!-- backwards compatibility -->
<a id="schemainternalservererrorexception"></a>
<a id="schema_InternalServerErrorException"></a>
<a id="tocSinternalservererrorexception"></a>
<a id="tocsinternalservererrorexception"></a>

```json
null
```

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateMeshOutput">CreateMeshOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatemeshoutput"></a>
<a id="schema_CreateMeshOutput"></a>
<a id="tocScreatemeshoutput"></a>
<a id="tocscreatemeshoutput"></a>

```json
{
  "mesh": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "egressFilter": {
        "type": {}
      },
      "serviceDiscovery": {
        "ipPreference": {}
      }
    },
    "status": {
      "status": {}
    }
  }
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mesh|object|true|none|none|

<h2 id="tocS_EgressFilter">EgressFilter</h2>
<!-- backwards compatibility -->
<a id="schemaegressfilter"></a>
<a id="schema_EgressFilter"></a>
<a id="tocSegressfilter"></a>
<a id="tocsegressfilter"></a>

```json
{
  "type": {}
}
```

An object that represents the egress filter rules for a service mesh.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|true|none|none|

<h2 id="tocS_MeshServiceDiscovery">MeshServiceDiscovery</h2>
<!-- backwards compatibility -->
<a id="schemameshservicediscovery"></a>
<a id="schema_MeshServiceDiscovery"></a>
<a id="tocSmeshservicediscovery"></a>
<a id="tocsmeshservicediscovery"></a>

```json
{
  "ipPreference": {}
}
```

An object that represents the service discovery information for a service mesh.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ipPreference|object|false|none|none|

<h2 id="tocS_CreateRouteOutput">CreateRouteOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreaterouteoutput"></a>
<a id="schema_CreateRouteOutput"></a>
<a id="tocScreaterouteoutput"></a>
<a id="tocscreaterouteoutput"></a>

```json
{
  "route": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "routeName": {},
    "spec": {
      "grpcRoute": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "metadata": {},
          "methodName": {},
          "port": {},
          "serviceName": {}
        },
        "retryPolicy": {
          "grpcRetryEvents": {},
          "httpRetryEvents": {},
          "maxRetries": {},
          "perRetryTimeout": {
            "unit": {},
            "value": {}
          },
          "tcpRetryEvents": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          },
          "perRequest": {
            "unit": {},
            "value": {}
          }
        }
      },
      "http2Route": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "headers": {},
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {},
          "scheme": {}
        },
        "retryPolicy": {
          "httpRetryEvents": {},
          "maxRetries": {},
          "perRetryTimeout": {
            "unit": {},
            "value": {}
          },
          "tcpRetryEvents": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          },
          "perRequest": {
            "unit": {},
            "value": {}
          }
        }
      },
      "httpRoute": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "headers": {},
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {},
          "scheme": {}
        },
        "retryPolicy": {
          "httpRetryEvents": {},
          "maxRetries": {},
          "perRetryTimeout": {
            "unit": {},
            "value": {}
          },
          "tcpRetryEvents": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          },
          "perRequest": {
            "unit": {},
            "value": {}
          }
        }
      },
      "priority": {},
      "tcpRoute": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "port": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          }
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualRouterName": {}
  }
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|route|object|true|none|none|

<h2 id="tocS_GrpcRoute">GrpcRoute</h2>
<!-- backwards compatibility -->
<a id="schemagrpcroute"></a>
<a id="schema_GrpcRoute"></a>
<a id="tocSgrpcroute"></a>
<a id="tocsgrpcroute"></a>

```json
{
  "action": {
    "weightedTargets": {}
  },
  "match": {
    "metadata": {},
    "methodName": {},
    "port": {},
    "serviceName": {}
  },
  "retryPolicy": {
    "grpcRetryEvents": {},
    "httpRetryEvents": {},
    "maxRetries": {},
    "perRetryTimeout": {
      "unit": {},
      "value": {}
    },
    "tcpRetryEvents": {}
  },
  "timeout": {
    "idle": {
      "unit": {},
      "value": {}
    },
    "perRequest": {
      "unit": {},
      "value": {}
    }
  }
}
```

An object that represents a gRPC route type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|match|object|true|none|none|
|retryPolicy|object|false|none|none|
|timeout|object|false|none|none|

<h2 id="tocS_HttpRoute">HttpRoute</h2>
<!-- backwards compatibility -->
<a id="schemahttproute"></a>
<a id="schema_HttpRoute"></a>
<a id="tocShttproute"></a>
<a id="tocshttproute"></a>

```json
{
  "action": {
    "weightedTargets": {}
  },
  "match": {
    "headers": {},
    "method": {},
    "path": {
      "exact": {},
      "regex": {}
    },
    "port": {},
    "prefix": {},
    "queryParameters": {},
    "scheme": {}
  },
  "retryPolicy": {
    "httpRetryEvents": {},
    "maxRetries": {},
    "perRetryTimeout": {
      "unit": {},
      "value": {}
    },
    "tcpRetryEvents": {}
  },
  "timeout": {
    "idle": {
      "unit": {},
      "value": {}
    },
    "perRequest": {
      "unit": {},
      "value": {}
    }
  }
}
```

An object that represents an HTTP or HTTP/2 route type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|match|object|true|none|none|
|retryPolicy|object|false|none|none|
|timeout|object|false|none|none|

<h2 id="tocS_RoutePriority">RoutePriority</h2>
<!-- backwards compatibility -->
<a id="schemaroutepriority"></a>
<a id="schema_RoutePriority"></a>
<a id="tocSroutepriority"></a>
<a id="tocsroutepriority"></a>

```json
0
```

<h2 id="tocS_TcpRoute">TcpRoute</h2>
<!-- backwards compatibility -->
<a id="schematcproute"></a>
<a id="schema_TcpRoute"></a>
<a id="tocStcproute"></a>
<a id="tocstcproute"></a>

```json
{
  "action": {
    "weightedTargets": {}
  },
  "match": {
    "port": {}
  },
  "timeout": {
    "idle": {
      "unit": {},
      "value": {}
    }
  }
}
```

An object that represents a TCP route type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|match|object|false|none|none|
|timeout|object|false|none|none|

<h2 id="tocS_CreateVirtualGatewayOutput">CreateVirtualGatewayOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatevirtualgatewayoutput"></a>
<a id="schema_CreateVirtualGatewayOutput"></a>
<a id="tocScreatevirtualgatewayoutput"></a>
<a id="tocscreatevirtualgatewayoutput"></a>

```json
{
  "virtualGateway": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "backendDefaults": {
        "clientPolicy": {
          "tls": {
            "certificate": {
              "file": {
                "certificateChain": {},
                "privateKey": {}
              },
              "sds": {
                "secretName": {}
              }
            },
            "enforce": {},
            "ports": {},
            "validation": {
              "subjectAlternativeNames": {
                "match": {
                  "exact": {}
                }
              },
              "trust": {
                "acm": {
                  "certificateAuthorityArns": {}
                },
                "file": {
                  "certificateChain": {}
                },
                "sds": {
                  "secretName": {}
                }
              }
            }
          }
        }
      },
      "listeners": {},
      "logging": {
        "accessLog": {
          "file": {
            "format": {
              "json": {},
              "text": {}
            },
            "path": {}
          }
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualGatewayName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualGateway|object|true|none|none|

<h2 id="tocS_VirtualGatewayBackendDefaults">VirtualGatewayBackendDefaults</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewaybackenddefaults"></a>
<a id="schema_VirtualGatewayBackendDefaults"></a>
<a id="tocSvirtualgatewaybackenddefaults"></a>
<a id="tocsvirtualgatewaybackenddefaults"></a>

```json
{
  "clientPolicy": {
    "tls": {
      "certificate": {
        "file": {
          "certificateChain": {},
          "privateKey": {}
        },
        "sds": {
          "secretName": {}
        }
      },
      "enforce": {},
      "ports": {},
      "validation": {
        "subjectAlternativeNames": {
          "match": {
            "exact": {}
          }
        },
        "trust": {
          "acm": {
            "certificateAuthorityArns": {}
          },
          "file": {
            "certificateChain": {}
          },
          "sds": {
            "secretName": {}
          }
        }
      }
    }
  }
}
```

An object that represents the default properties for a backend.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientPolicy|object|false|none|none|

<h2 id="tocS_VirtualGatewayListeners">VirtualGatewayListeners</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewaylisteners"></a>
<a id="schema_VirtualGatewayListeners"></a>
<a id="tocSvirtualgatewaylisteners"></a>
<a id="tocsvirtualgatewaylisteners"></a>

```json
[
  {
    "connectionPool": {
      "grpc": {
        "maxRequests": {}
      },
      "http": {
        "maxConnections": {},
        "maxPendingRequests": {}
      },
      "http2": {
        "maxRequests": {}
      }
    },
    "healthCheck": {
      "healthyThreshold": {},
      "intervalMillis": {},
      "path": {},
      "port": {},
      "protocol": {},
      "timeoutMillis": {},
      "unhealthyThreshold": {}
    },
    "portMapping": {
      "port": {},
      "protocol": {}
    },
    "tls": {
      "certificate": {
        "acm": {
          "certificateArn": {}
        },
        "file": {
          "certificateChain": {},
          "privateKey": {}
        },
        "sds": {
          "secretName": {}
        }
      },
      "mode": {},
      "validation": {
        "subjectAlternativeNames": {
          "match": {
            "exact": {}
          }
        },
        "trust": {
          "file": {
            "certificateChain": {}
          },
          "sds": {
            "secretName": {}
          }
        }
      }
    }
  }
]
```

<h2 id="tocS_VirtualGatewayLogging">VirtualGatewayLogging</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewaylogging"></a>
<a id="schema_VirtualGatewayLogging"></a>
<a id="tocSvirtualgatewaylogging"></a>
<a id="tocsvirtualgatewaylogging"></a>

```json
{
  "accessLog": {
    "file": {
      "format": {
        "json": {},
        "text": {}
      },
      "path": {}
    }
  }
}
```

An object that represents logging information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessLog|object|false|none|none|

<h2 id="tocS_CreateVirtualNodeOutput">CreateVirtualNodeOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatevirtualnodeoutput"></a>
<a id="schema_CreateVirtualNodeOutput"></a>
<a id="tocScreatevirtualnodeoutput"></a>
<a id="tocscreatevirtualnodeoutput"></a>

```json
{
  "virtualNode": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "backendDefaults": {
        "clientPolicy": {
          "tls": {
            "certificate": {
              "file": {
                "certificateChain": {},
                "privateKey": {}
              },
              "sds": {
                "secretName": {}
              }
            },
            "enforce": {},
            "ports": {},
            "validation": {
              "subjectAlternativeNames": {
                "match": {
                  "exact": {}
                }
              },
              "trust": {
                "acm": {
                  "certificateAuthorityArns": {}
                },
                "file": {
                  "certificateChain": {}
                },
                "sds": {
                  "secretName": {}
                }
              }
            }
          }
        }
      },
      "backends": {},
      "listeners": {},
      "logging": {
        "accessLog": {
          "file": {
            "format": {
              "json": {},
              "text": {}
            },
            "path": {}
          }
        }
      },
      "serviceDiscovery": {
        "awsCloudMap": {
          "attributes": {},
          "ipPreference": {},
          "namespaceName": {},
          "serviceName": {}
        },
        "dns": {
          "hostname": {},
          "ipPreference": {},
          "responseType": {}
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualNodeName": {}
  }
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualNode|object|true|none|none|

<h2 id="tocS_BackendDefaults">BackendDefaults</h2>
<!-- backwards compatibility -->
<a id="schemabackenddefaults"></a>
<a id="schema_BackendDefaults"></a>
<a id="tocSbackenddefaults"></a>
<a id="tocsbackenddefaults"></a>

```json
{
  "clientPolicy": {
    "tls": {
      "certificate": {
        "file": {
          "certificateChain": {},
          "privateKey": {}
        },
        "sds": {
          "secretName": {}
        }
      },
      "enforce": {},
      "ports": {},
      "validation": {
        "subjectAlternativeNames": {
          "match": {
            "exact": {}
          }
        },
        "trust": {
          "acm": {
            "certificateAuthorityArns": {}
          },
          "file": {
            "certificateChain": {}
          },
          "sds": {
            "secretName": {}
          }
        }
      }
    }
  }
}
```

An object that represents the default properties for a backend.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientPolicy|object|false|none|none|

<h2 id="tocS_Backends">Backends</h2>
<!-- backwards compatibility -->
<a id="schemabackends"></a>
<a id="schema_Backends"></a>
<a id="tocSbackends"></a>
<a id="tocsbackends"></a>

```json
[
  {
    "virtualService": {
      "clientPolicy": {
        "tls": {
          "certificate": {
            "file": {
              "certificateChain": {},
              "privateKey": {}
            },
            "sds": {
              "secretName": {}
            }
          },
          "enforce": {},
          "ports": {},
          "validation": {
            "subjectAlternativeNames": {
              "match": {
                "exact": {}
              }
            },
            "trust": {
              "acm": {
                "certificateAuthorityArns": {}
              },
              "file": {
                "certificateChain": {}
              },
              "sds": {
                "secretName": {}
              }
            }
          }
        }
      },
      "virtualServiceName": {}
    }
  }
]
```

<h2 id="tocS_Listeners">Listeners</h2>
<!-- backwards compatibility -->
<a id="schemalisteners"></a>
<a id="schema_Listeners"></a>
<a id="tocSlisteners"></a>
<a id="tocslisteners"></a>

```json
[
  {
    "connectionPool": {
      "grpc": {
        "maxRequests": {}
      },
      "http": {
        "maxConnections": {},
        "maxPendingRequests": {}
      },
      "http2": {
        "maxRequests": {}
      },
      "tcp": {
        "maxConnections": {}
      }
    },
    "healthCheck": {
      "healthyThreshold": {},
      "intervalMillis": {},
      "path": {},
      "port": {},
      "protocol": {},
      "timeoutMillis": {},
      "unhealthyThreshold": {}
    },
    "outlierDetection": {
      "baseEjectionDuration": {
        "unit": {},
        "value": {}
      },
      "interval": {
        "unit": {},
        "value": {}
      },
      "maxEjectionPercent": {},
      "maxServerErrors": {}
    },
    "portMapping": {
      "port": {},
      "protocol": {}
    },
    "timeout": {
      "grpc": {
        "idle": {
          "unit": {},
          "value": {}
        },
        "perRequest": {
          "unit": {},
          "value": {}
        }
      },
      "http": {
        "idle": {
          "unit": {},
          "value": {}
        },
        "perRequest": {
          "unit": {},
          "value": {}
        }
      },
      "http2": {
        "idle": {
          "unit": {},
          "value": {}
        },
        "perRequest": {
          "unit": {},
          "value": {}
        }
      },
      "tcp": {
        "idle": {
          "unit": {},
          "value": {}
        }
      }
    },
    "tls": {
      "certificate": {
        "acm": {
          "certificateArn": {}
        },
        "file": {
          "certificateChain": {},
          "privateKey": {}
        },
        "sds": {
          "secretName": {}
        }
      },
      "mode": {},
      "validation": {
        "subjectAlternativeNames": {
          "match": {
            "exact": {}
          }
        },
        "trust": {
          "file": {
            "certificateChain": {}
          },
          "sds": {
            "secretName": {}
          }
        }
      }
    }
  }
]
```

<h2 id="tocS_Logging">Logging</h2>
<!-- backwards compatibility -->
<a id="schemalogging"></a>
<a id="schema_Logging"></a>
<a id="tocSlogging"></a>
<a id="tocslogging"></a>

```json
{
  "accessLog": {
    "file": {
      "format": {
        "json": {},
        "text": {}
      },
      "path": {}
    }
  }
}
```

An object that represents the logging information for a virtual node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessLog|object|false|none|none|

<h2 id="tocS_ServiceDiscovery">ServiceDiscovery</h2>
<!-- backwards compatibility -->
<a id="schemaservicediscovery"></a>
<a id="schema_ServiceDiscovery"></a>
<a id="tocSservicediscovery"></a>
<a id="tocsservicediscovery"></a>

```json
{
  "awsCloudMap": {
    "attributes": {},
    "ipPreference": {},
    "namespaceName": {},
    "serviceName": {}
  },
  "dns": {
    "hostname": {},
    "ipPreference": {},
    "responseType": {}
  }
}
```

An object that represents the service discovery information for a virtual node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|awsCloudMap|object|false|none|none|
|dns|object|false|none|none|

<h2 id="tocS_CreateVirtualRouterOutput">CreateVirtualRouterOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatevirtualrouteroutput"></a>
<a id="schema_CreateVirtualRouterOutput"></a>
<a id="tocScreatevirtualrouteroutput"></a>
<a id="tocscreatevirtualrouteroutput"></a>

```json
{
  "virtualRouter": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "listeners": {}
    },
    "status": {
      "status": {}
    },
    "virtualRouterName": {}
  }
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualRouter|object|true|none|none|

<h2 id="tocS_VirtualRouterListeners">VirtualRouterListeners</h2>
<!-- backwards compatibility -->
<a id="schemavirtualrouterlisteners"></a>
<a id="schema_VirtualRouterListeners"></a>
<a id="tocSvirtualrouterlisteners"></a>
<a id="tocsvirtualrouterlisteners"></a>

```json
[
  {
    "portMapping": {
      "port": {},
      "protocol": {}
    }
  }
]
```

<h2 id="tocS_CreateVirtualServiceOutput">CreateVirtualServiceOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatevirtualserviceoutput"></a>
<a id="schema_CreateVirtualServiceOutput"></a>
<a id="tocScreatevirtualserviceoutput"></a>
<a id="tocscreatevirtualserviceoutput"></a>

```json
{
  "virtualService": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "provider": {
        "virtualNode": {
          "virtualNodeName": {}
        },
        "virtualRouter": {
          "virtualRouterName": {}
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualServiceName": {}
  }
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualService|object|true|none|none|

<h2 id="tocS_VirtualServiceProvider">VirtualServiceProvider</h2>
<!-- backwards compatibility -->
<a id="schemavirtualserviceprovider"></a>
<a id="schema_VirtualServiceProvider"></a>
<a id="tocSvirtualserviceprovider"></a>
<a id="tocsvirtualserviceprovider"></a>

```json
{
  "virtualNode": {
    "virtualNodeName": {}
  },
  "virtualRouter": {
    "virtualRouterName": {}
  }
}
```

An object that represents the provider for a virtual service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualNode|object|false|none|none|
|virtualRouter|object|false|none|none|

<h2 id="tocS_DeleteGatewayRouteOutput">DeleteGatewayRouteOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletegatewayrouteoutput"></a>
<a id="schema_DeleteGatewayRouteOutput"></a>
<a id="tocSdeletegatewayrouteoutput"></a>
<a id="tocsdeletegatewayrouteoutput"></a>

```json
{
  "gatewayRoute": {
    "gatewayRouteName": {},
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "grpcRoute": {
        "action": {
          "rewrite": {
            "hostname": {
              "defaultTargetHostname": {}
            }
          },
          "target": {
            "port": {},
            "virtualService": {
              "virtualServiceName": {}
            }
          }
        },
        "match": {
          "hostname": {
            "exact": {},
            "suffix": {}
          },
          "metadata": {},
          "port": {},
          "serviceName": {}
        }
      },
      "http2Route": {
        "action": {
          "rewrite": {
            "hostname": {
              "defaultTargetHostname": {}
            },
            "path": {
              "exact": {}
            },
            "prefix": {
              "defaultPrefix": {},
              "value": {}
            }
          },
          "target": {
            "port": {},
            "virtualService": {
              "virtualServiceName": {}
            }
          }
        },
        "match": {
          "headers": {},
          "hostname": {
            "exact": {},
            "suffix": {}
          },
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {}
        }
      },
      "httpRoute": {
        "action": {
          "rewrite": {
            "hostname": {
              "defaultTargetHostname": {}
            },
            "path": {
              "exact": {}
            },
            "prefix": {
              "defaultPrefix": {},
              "value": {}
            }
          },
          "target": {
            "port": {},
            "virtualService": {
              "virtualServiceName": {}
            }
          }
        },
        "match": {
          "headers": {},
          "hostname": {
            "exact": {},
            "suffix": {}
          },
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {}
        }
      },
      "priority": {}
    },
    "status": {
      "status": {}
    },
    "virtualGatewayName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gatewayRoute|object|true|none|none|

<h2 id="tocS_ResourceInUseException">ResourceInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinuseexception"></a>
<a id="schema_ResourceInUseException"></a>
<a id="tocSresourceinuseexception"></a>
<a id="tocsresourceinuseexception"></a>

```json
null
```

<h2 id="tocS_DeleteMeshOutput">DeleteMeshOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletemeshoutput"></a>
<a id="schema_DeleteMeshOutput"></a>
<a id="tocSdeletemeshoutput"></a>
<a id="tocsdeletemeshoutput"></a>

```json
{
  "mesh": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "egressFilter": {
        "type": {}
      },
      "serviceDiscovery": {
        "ipPreference": {}
      }
    },
    "status": {
      "status": {}
    }
  }
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mesh|object|true|none|none|

<h2 id="tocS_DeleteRouteOutput">DeleteRouteOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleterouteoutput"></a>
<a id="schema_DeleteRouteOutput"></a>
<a id="tocSdeleterouteoutput"></a>
<a id="tocsdeleterouteoutput"></a>

```json
{
  "route": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "routeName": {},
    "spec": {
      "grpcRoute": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "metadata": {},
          "methodName": {},
          "port": {},
          "serviceName": {}
        },
        "retryPolicy": {
          "grpcRetryEvents": {},
          "httpRetryEvents": {},
          "maxRetries": {},
          "perRetryTimeout": {
            "unit": {},
            "value": {}
          },
          "tcpRetryEvents": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          },
          "perRequest": {
            "unit": {},
            "value": {}
          }
        }
      },
      "http2Route": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "headers": {},
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {},
          "scheme": {}
        },
        "retryPolicy": {
          "httpRetryEvents": {},
          "maxRetries": {},
          "perRetryTimeout": {
            "unit": {},
            "value": {}
          },
          "tcpRetryEvents": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          },
          "perRequest": {
            "unit": {},
            "value": {}
          }
        }
      },
      "httpRoute": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "headers": {},
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {},
          "scheme": {}
        },
        "retryPolicy": {
          "httpRetryEvents": {},
          "maxRetries": {},
          "perRetryTimeout": {
            "unit": {},
            "value": {}
          },
          "tcpRetryEvents": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          },
          "perRequest": {
            "unit": {},
            "value": {}
          }
        }
      },
      "priority": {},
      "tcpRoute": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "port": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          }
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualRouterName": {}
  }
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|route|object|true|none|none|

<h2 id="tocS_DeleteVirtualGatewayOutput">DeleteVirtualGatewayOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletevirtualgatewayoutput"></a>
<a id="schema_DeleteVirtualGatewayOutput"></a>
<a id="tocSdeletevirtualgatewayoutput"></a>
<a id="tocsdeletevirtualgatewayoutput"></a>

```json
{
  "virtualGateway": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "backendDefaults": {
        "clientPolicy": {
          "tls": {
            "certificate": {
              "file": {
                "certificateChain": {},
                "privateKey": {}
              },
              "sds": {
                "secretName": {}
              }
            },
            "enforce": {},
            "ports": {},
            "validation": {
              "subjectAlternativeNames": {
                "match": {
                  "exact": {}
                }
              },
              "trust": {
                "acm": {
                  "certificateAuthorityArns": {}
                },
                "file": {
                  "certificateChain": {}
                },
                "sds": {
                  "secretName": {}
                }
              }
            }
          }
        }
      },
      "listeners": {},
      "logging": {
        "accessLog": {
          "file": {
            "format": {
              "json": {},
              "text": {}
            },
            "path": {}
          }
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualGatewayName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualGateway|object|true|none|none|

<h2 id="tocS_DeleteVirtualNodeOutput">DeleteVirtualNodeOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletevirtualnodeoutput"></a>
<a id="schema_DeleteVirtualNodeOutput"></a>
<a id="tocSdeletevirtualnodeoutput"></a>
<a id="tocsdeletevirtualnodeoutput"></a>

```json
{
  "virtualNode": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "backendDefaults": {
        "clientPolicy": {
          "tls": {
            "certificate": {
              "file": {
                "certificateChain": {},
                "privateKey": {}
              },
              "sds": {
                "secretName": {}
              }
            },
            "enforce": {},
            "ports": {},
            "validation": {
              "subjectAlternativeNames": {
                "match": {
                  "exact": {}
                }
              },
              "trust": {
                "acm": {
                  "certificateAuthorityArns": {}
                },
                "file": {
                  "certificateChain": {}
                },
                "sds": {
                  "secretName": {}
                }
              }
            }
          }
        }
      },
      "backends": {},
      "listeners": {},
      "logging": {
        "accessLog": {
          "file": {
            "format": {
              "json": {},
              "text": {}
            },
            "path": {}
          }
        }
      },
      "serviceDiscovery": {
        "awsCloudMap": {
          "attributes": {},
          "ipPreference": {},
          "namespaceName": {},
          "serviceName": {}
        },
        "dns": {
          "hostname": {},
          "ipPreference": {},
          "responseType": {}
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualNodeName": {}
  }
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualNode|object|true|none|none|

<h2 id="tocS_DeleteVirtualRouterOutput">DeleteVirtualRouterOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletevirtualrouteroutput"></a>
<a id="schema_DeleteVirtualRouterOutput"></a>
<a id="tocSdeletevirtualrouteroutput"></a>
<a id="tocsdeletevirtualrouteroutput"></a>

```json
{
  "virtualRouter": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "listeners": {}
    },
    "status": {
      "status": {}
    },
    "virtualRouterName": {}
  }
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualRouter|object|true|none|none|

<h2 id="tocS_DeleteVirtualServiceOutput">DeleteVirtualServiceOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletevirtualserviceoutput"></a>
<a id="schema_DeleteVirtualServiceOutput"></a>
<a id="tocSdeletevirtualserviceoutput"></a>
<a id="tocsdeletevirtualserviceoutput"></a>

```json
{
  "virtualService": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "provider": {
        "virtualNode": {
          "virtualNodeName": {}
        },
        "virtualRouter": {
          "virtualRouterName": {}
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualServiceName": {}
  }
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualService|object|true|none|none|

<h2 id="tocS_DescribeGatewayRouteOutput">DescribeGatewayRouteOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribegatewayrouteoutput"></a>
<a id="schema_DescribeGatewayRouteOutput"></a>
<a id="tocSdescribegatewayrouteoutput"></a>
<a id="tocsdescribegatewayrouteoutput"></a>

```json
{
  "gatewayRoute": {
    "gatewayRouteName": {},
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "grpcRoute": {
        "action": {
          "rewrite": {
            "hostname": {
              "defaultTargetHostname": {}
            }
          },
          "target": {
            "port": {},
            "virtualService": {
              "virtualServiceName": {}
            }
          }
        },
        "match": {
          "hostname": {
            "exact": {},
            "suffix": {}
          },
          "metadata": {},
          "port": {},
          "serviceName": {}
        }
      },
      "http2Route": {
        "action": {
          "rewrite": {
            "hostname": {
              "defaultTargetHostname": {}
            },
            "path": {
              "exact": {}
            },
            "prefix": {
              "defaultPrefix": {},
              "value": {}
            }
          },
          "target": {
            "port": {},
            "virtualService": {
              "virtualServiceName": {}
            }
          }
        },
        "match": {
          "headers": {},
          "hostname": {
            "exact": {},
            "suffix": {}
          },
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {}
        }
      },
      "httpRoute": {
        "action": {
          "rewrite": {
            "hostname": {
              "defaultTargetHostname": {}
            },
            "path": {
              "exact": {}
            },
            "prefix": {
              "defaultPrefix": {},
              "value": {}
            }
          },
          "target": {
            "port": {},
            "virtualService": {
              "virtualServiceName": {}
            }
          }
        },
        "match": {
          "headers": {},
          "hostname": {
            "exact": {},
            "suffix": {}
          },
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {}
        }
      },
      "priority": {}
    },
    "status": {
      "status": {}
    },
    "virtualGatewayName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gatewayRoute|object|true|none|none|

<h2 id="tocS_DescribeMeshOutput">DescribeMeshOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribemeshoutput"></a>
<a id="schema_DescribeMeshOutput"></a>
<a id="tocSdescribemeshoutput"></a>
<a id="tocsdescribemeshoutput"></a>

```json
{
  "mesh": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "egressFilter": {
        "type": {}
      },
      "serviceDiscovery": {
        "ipPreference": {}
      }
    },
    "status": {
      "status": {}
    }
  }
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mesh|object|true|none|none|

<h2 id="tocS_DescribeRouteOutput">DescribeRouteOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescriberouteoutput"></a>
<a id="schema_DescribeRouteOutput"></a>
<a id="tocSdescriberouteoutput"></a>
<a id="tocsdescriberouteoutput"></a>

```json
{
  "route": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "routeName": {},
    "spec": {
      "grpcRoute": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "metadata": {},
          "methodName": {},
          "port": {},
          "serviceName": {}
        },
        "retryPolicy": {
          "grpcRetryEvents": {},
          "httpRetryEvents": {},
          "maxRetries": {},
          "perRetryTimeout": {
            "unit": {},
            "value": {}
          },
          "tcpRetryEvents": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          },
          "perRequest": {
            "unit": {},
            "value": {}
          }
        }
      },
      "http2Route": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "headers": {},
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {},
          "scheme": {}
        },
        "retryPolicy": {
          "httpRetryEvents": {},
          "maxRetries": {},
          "perRetryTimeout": {
            "unit": {},
            "value": {}
          },
          "tcpRetryEvents": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          },
          "perRequest": {
            "unit": {},
            "value": {}
          }
        }
      },
      "httpRoute": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "headers": {},
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {},
          "scheme": {}
        },
        "retryPolicy": {
          "httpRetryEvents": {},
          "maxRetries": {},
          "perRetryTimeout": {
            "unit": {},
            "value": {}
          },
          "tcpRetryEvents": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          },
          "perRequest": {
            "unit": {},
            "value": {}
          }
        }
      },
      "priority": {},
      "tcpRoute": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "port": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          }
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualRouterName": {}
  }
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|route|object|true|none|none|

<h2 id="tocS_DescribeVirtualGatewayOutput">DescribeVirtualGatewayOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribevirtualgatewayoutput"></a>
<a id="schema_DescribeVirtualGatewayOutput"></a>
<a id="tocSdescribevirtualgatewayoutput"></a>
<a id="tocsdescribevirtualgatewayoutput"></a>

```json
{
  "virtualGateway": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "backendDefaults": {
        "clientPolicy": {
          "tls": {
            "certificate": {
              "file": {
                "certificateChain": {},
                "privateKey": {}
              },
              "sds": {
                "secretName": {}
              }
            },
            "enforce": {},
            "ports": {},
            "validation": {
              "subjectAlternativeNames": {
                "match": {
                  "exact": {}
                }
              },
              "trust": {
                "acm": {
                  "certificateAuthorityArns": {}
                },
                "file": {
                  "certificateChain": {}
                },
                "sds": {
                  "secretName": {}
                }
              }
            }
          }
        }
      },
      "listeners": {},
      "logging": {
        "accessLog": {
          "file": {
            "format": {
              "json": {},
              "text": {}
            },
            "path": {}
          }
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualGatewayName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualGateway|object|true|none|none|

<h2 id="tocS_DescribeVirtualNodeOutput">DescribeVirtualNodeOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribevirtualnodeoutput"></a>
<a id="schema_DescribeVirtualNodeOutput"></a>
<a id="tocSdescribevirtualnodeoutput"></a>
<a id="tocsdescribevirtualnodeoutput"></a>

```json
{
  "virtualNode": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "backendDefaults": {
        "clientPolicy": {
          "tls": {
            "certificate": {
              "file": {
                "certificateChain": {},
                "privateKey": {}
              },
              "sds": {
                "secretName": {}
              }
            },
            "enforce": {},
            "ports": {},
            "validation": {
              "subjectAlternativeNames": {
                "match": {
                  "exact": {}
                }
              },
              "trust": {
                "acm": {
                  "certificateAuthorityArns": {}
                },
                "file": {
                  "certificateChain": {}
                },
                "sds": {
                  "secretName": {}
                }
              }
            }
          }
        }
      },
      "backends": {},
      "listeners": {},
      "logging": {
        "accessLog": {
          "file": {
            "format": {
              "json": {},
              "text": {}
            },
            "path": {}
          }
        }
      },
      "serviceDiscovery": {
        "awsCloudMap": {
          "attributes": {},
          "ipPreference": {},
          "namespaceName": {},
          "serviceName": {}
        },
        "dns": {
          "hostname": {},
          "ipPreference": {},
          "responseType": {}
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualNodeName": {}
  }
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualNode|object|true|none|none|

<h2 id="tocS_DescribeVirtualRouterOutput">DescribeVirtualRouterOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribevirtualrouteroutput"></a>
<a id="schema_DescribeVirtualRouterOutput"></a>
<a id="tocSdescribevirtualrouteroutput"></a>
<a id="tocsdescribevirtualrouteroutput"></a>

```json
{
  "virtualRouter": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "listeners": {}
    },
    "status": {
      "status": {}
    },
    "virtualRouterName": {}
  }
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualRouter|object|true|none|none|

<h2 id="tocS_DescribeVirtualServiceOutput">DescribeVirtualServiceOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribevirtualserviceoutput"></a>
<a id="schema_DescribeVirtualServiceOutput"></a>
<a id="tocSdescribevirtualserviceoutput"></a>
<a id="tocsdescribevirtualserviceoutput"></a>

```json
{
  "virtualService": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "provider": {
        "virtualNode": {
          "virtualNodeName": {}
        },
        "virtualRouter": {
          "virtualRouterName": {}
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualServiceName": {}
  }
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualService|object|true|none|none|

<h2 id="tocS_ListGatewayRoutesOutput">ListGatewayRoutesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistgatewayroutesoutput"></a>
<a id="schema_ListGatewayRoutesOutput"></a>
<a id="tocSlistgatewayroutesoutput"></a>
<a id="tocslistgatewayroutesoutput"></a>

```json
{
  "gatewayRoutes": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gatewayRoutes|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListMeshesOutput">ListMeshesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistmeshesoutput"></a>
<a id="schema_ListMeshesOutput"></a>
<a id="tocSlistmeshesoutput"></a>
<a id="tocslistmeshesoutput"></a>

```json
{
  "meshes": {},
  "nextToken": {}
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meshes|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListRoutesOutput">ListRoutesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistroutesoutput"></a>
<a id="schema_ListRoutesOutput"></a>
<a id="tocSlistroutesoutput"></a>
<a id="tocslistroutesoutput"></a>

```json
{
  "nextToken": {},
  "routes": {}
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|routes|object|true|none|none|

<h2 id="tocS_ListTagsForResourceOutput">ListTagsForResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceoutput"></a>
<a id="schema_ListTagsForResourceOutput"></a>
<a id="tocSlisttagsforresourceoutput"></a>
<a id="tocslisttagsforresourceoutput"></a>

```json
{
  "nextToken": {},
  "tags": {}
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|tags|object|true|none|none|

<h2 id="tocS_ListVirtualGatewaysOutput">ListVirtualGatewaysOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistvirtualgatewaysoutput"></a>
<a id="schema_ListVirtualGatewaysOutput"></a>
<a id="tocSlistvirtualgatewaysoutput"></a>
<a id="tocslistvirtualgatewaysoutput"></a>

```json
{
  "nextToken": {},
  "virtualGateways": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|virtualGateways|object|true|none|none|

<h2 id="tocS_ListVirtualNodesOutput">ListVirtualNodesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistvirtualnodesoutput"></a>
<a id="schema_ListVirtualNodesOutput"></a>
<a id="tocSlistvirtualnodesoutput"></a>
<a id="tocslistvirtualnodesoutput"></a>

```json
{
  "nextToken": {},
  "virtualNodes": {}
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|virtualNodes|object|true|none|none|

<h2 id="tocS_ListVirtualRoutersOutput">ListVirtualRoutersOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistvirtualroutersoutput"></a>
<a id="schema_ListVirtualRoutersOutput"></a>
<a id="tocSlistvirtualroutersoutput"></a>
<a id="tocslistvirtualroutersoutput"></a>

```json
{
  "nextToken": {},
  "virtualRouters": {}
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|virtualRouters|object|true|none|none|

<h2 id="tocS_ListVirtualServicesOutput">ListVirtualServicesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistvirtualservicesoutput"></a>
<a id="schema_ListVirtualServicesOutput"></a>
<a id="tocSlistvirtualservicesoutput"></a>
<a id="tocslistvirtualservicesoutput"></a>

```json
{
  "nextToken": {},
  "virtualServices": {}
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|virtualServices|object|true|none|none|

<h2 id="tocS_TagResourceOutput">TagResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schematagresourceoutput"></a>
<a id="schema_TagResourceOutput"></a>
<a id="tocStagresourceoutput"></a>
<a id="tocstagresourceoutput"></a>

```json
{}
```

<zonbook></zonbook><xhtml></xhtml>

<h2 id="tocS_TooManyTagsException">TooManyTagsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanytagsexception"></a>
<a id="schema_TooManyTagsException"></a>
<a id="tocStoomanytagsexception"></a>
<a id="tocstoomanytagsexception"></a>

```json
null
```

<h2 id="tocS_UntagResourceOutput">UntagResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceoutput"></a>
<a id="schema_UntagResourceOutput"></a>
<a id="tocSuntagresourceoutput"></a>
<a id="tocsuntagresourceoutput"></a>

```json
{}
```

<zonbook></zonbook><xhtml></xhtml>

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_UpdateGatewayRouteOutput">UpdateGatewayRouteOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdategatewayrouteoutput"></a>
<a id="schema_UpdateGatewayRouteOutput"></a>
<a id="tocSupdategatewayrouteoutput"></a>
<a id="tocsupdategatewayrouteoutput"></a>

```json
{
  "gatewayRoute": {
    "gatewayRouteName": {},
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "grpcRoute": {
        "action": {
          "rewrite": {
            "hostname": {
              "defaultTargetHostname": {}
            }
          },
          "target": {
            "port": {},
            "virtualService": {
              "virtualServiceName": {}
            }
          }
        },
        "match": {
          "hostname": {
            "exact": {},
            "suffix": {}
          },
          "metadata": {},
          "port": {},
          "serviceName": {}
        }
      },
      "http2Route": {
        "action": {
          "rewrite": {
            "hostname": {
              "defaultTargetHostname": {}
            },
            "path": {
              "exact": {}
            },
            "prefix": {
              "defaultPrefix": {},
              "value": {}
            }
          },
          "target": {
            "port": {},
            "virtualService": {
              "virtualServiceName": {}
            }
          }
        },
        "match": {
          "headers": {},
          "hostname": {
            "exact": {},
            "suffix": {}
          },
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {}
        }
      },
      "httpRoute": {
        "action": {
          "rewrite": {
            "hostname": {
              "defaultTargetHostname": {}
            },
            "path": {
              "exact": {}
            },
            "prefix": {
              "defaultPrefix": {},
              "value": {}
            }
          },
          "target": {
            "port": {},
            "virtualService": {
              "virtualServiceName": {}
            }
          }
        },
        "match": {
          "headers": {},
          "hostname": {
            "exact": {},
            "suffix": {}
          },
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {}
        }
      },
      "priority": {}
    },
    "status": {
      "status": {}
    },
    "virtualGatewayName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gatewayRoute|object|true|none|none|

<h2 id="tocS_UpdateMeshOutput">UpdateMeshOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemeshoutput"></a>
<a id="schema_UpdateMeshOutput"></a>
<a id="tocSupdatemeshoutput"></a>
<a id="tocsupdatemeshoutput"></a>

```json
{
  "mesh": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "egressFilter": {
        "type": {}
      },
      "serviceDiscovery": {
        "ipPreference": {}
      }
    },
    "status": {
      "status": {}
    }
  }
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mesh|[MeshData](#schemameshdata)|true|none|An object that represents a service mesh returned by a describe operation.|

<h2 id="tocS_UpdateRouteOutput">UpdateRouteOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterouteoutput"></a>
<a id="schema_UpdateRouteOutput"></a>
<a id="tocSupdaterouteoutput"></a>
<a id="tocsupdaterouteoutput"></a>

```json
{
  "route": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "routeName": {},
    "spec": {
      "grpcRoute": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "metadata": {},
          "methodName": {},
          "port": {},
          "serviceName": {}
        },
        "retryPolicy": {
          "grpcRetryEvents": {},
          "httpRetryEvents": {},
          "maxRetries": {},
          "perRetryTimeout": {
            "unit": {},
            "value": {}
          },
          "tcpRetryEvents": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          },
          "perRequest": {
            "unit": {},
            "value": {}
          }
        }
      },
      "http2Route": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "headers": {},
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {},
          "scheme": {}
        },
        "retryPolicy": {
          "httpRetryEvents": {},
          "maxRetries": {},
          "perRetryTimeout": {
            "unit": {},
            "value": {}
          },
          "tcpRetryEvents": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          },
          "perRequest": {
            "unit": {},
            "value": {}
          }
        }
      },
      "httpRoute": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "headers": {},
          "method": {},
          "path": {
            "exact": {},
            "regex": {}
          },
          "port": {},
          "prefix": {},
          "queryParameters": {},
          "scheme": {}
        },
        "retryPolicy": {
          "httpRetryEvents": {},
          "maxRetries": {},
          "perRetryTimeout": {
            "unit": {},
            "value": {}
          },
          "tcpRetryEvents": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          },
          "perRequest": {
            "unit": {},
            "value": {}
          }
        }
      },
      "priority": {},
      "tcpRoute": {
        "action": {
          "weightedTargets": {}
        },
        "match": {
          "port": {}
        },
        "timeout": {
          "idle": {
            "unit": {},
            "value": {}
          }
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualRouterName": {}
  }
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|route|object|true|none|none|

<h2 id="tocS_UpdateVirtualGatewayOutput">UpdateVirtualGatewayOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevirtualgatewayoutput"></a>
<a id="schema_UpdateVirtualGatewayOutput"></a>
<a id="tocSupdatevirtualgatewayoutput"></a>
<a id="tocsupdatevirtualgatewayoutput"></a>

```json
{
  "virtualGateway": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "backendDefaults": {
        "clientPolicy": {
          "tls": {
            "certificate": {
              "file": {
                "certificateChain": {},
                "privateKey": {}
              },
              "sds": {
                "secretName": {}
              }
            },
            "enforce": {},
            "ports": {},
            "validation": {
              "subjectAlternativeNames": {
                "match": {
                  "exact": {}
                }
              },
              "trust": {
                "acm": {
                  "certificateAuthorityArns": {}
                },
                "file": {
                  "certificateChain": {}
                },
                "sds": {
                  "secretName": {}
                }
              }
            }
          }
        }
      },
      "listeners": {},
      "logging": {
        "accessLog": {
          "file": {
            "format": {
              "json": {},
              "text": {}
            },
            "path": {}
          }
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualGatewayName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualGateway|object|true|none|none|

<h2 id="tocS_UpdateVirtualNodeOutput">UpdateVirtualNodeOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevirtualnodeoutput"></a>
<a id="schema_UpdateVirtualNodeOutput"></a>
<a id="tocSupdatevirtualnodeoutput"></a>
<a id="tocsupdatevirtualnodeoutput"></a>

```json
{
  "virtualNode": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "backendDefaults": {
        "clientPolicy": {
          "tls": {
            "certificate": {
              "file": {
                "certificateChain": {},
                "privateKey": {}
              },
              "sds": {
                "secretName": {}
              }
            },
            "enforce": {},
            "ports": {},
            "validation": {
              "subjectAlternativeNames": {
                "match": {
                  "exact": {}
                }
              },
              "trust": {
                "acm": {
                  "certificateAuthorityArns": {}
                },
                "file": {
                  "certificateChain": {}
                },
                "sds": {
                  "secretName": {}
                }
              }
            }
          }
        }
      },
      "backends": {},
      "listeners": {},
      "logging": {
        "accessLog": {
          "file": {
            "format": {
              "json": {},
              "text": {}
            },
            "path": {}
          }
        }
      },
      "serviceDiscovery": {
        "awsCloudMap": {
          "attributes": {},
          "ipPreference": {},
          "namespaceName": {},
          "serviceName": {}
        },
        "dns": {
          "hostname": {},
          "ipPreference": {},
          "responseType": {}
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualNodeName": {}
  }
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualNode|object|true|none|none|

<h2 id="tocS_UpdateVirtualRouterOutput">UpdateVirtualRouterOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevirtualrouteroutput"></a>
<a id="schema_UpdateVirtualRouterOutput"></a>
<a id="tocSupdatevirtualrouteroutput"></a>
<a id="tocsupdatevirtualrouteroutput"></a>

```json
{
  "virtualRouter": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "listeners": {}
    },
    "status": {
      "status": {}
    },
    "virtualRouterName": {}
  }
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualRouter|object|true|none|none|

<h2 id="tocS_UpdateVirtualServiceOutput">UpdateVirtualServiceOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevirtualserviceoutput"></a>
<a id="schema_UpdateVirtualServiceOutput"></a>
<a id="tocSupdatevirtualserviceoutput"></a>
<a id="tocsupdatevirtualserviceoutput"></a>

```json
{
  "virtualService": {
    "meshName": {},
    "metadata": {
      "arn": {},
      "createdAt": {},
      "lastUpdatedAt": {},
      "meshOwner": {},
      "resourceOwner": {},
      "uid": {},
      "version": {}
    },
    "spec": {
      "provider": {
        "virtualNode": {
          "virtualNodeName": {}
        },
        "virtualRouter": {
          "virtualRouterName": {}
        }
      }
    },
    "status": {
      "status": {}
    },
    "virtualServiceName": {}
  }
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualService|object|true|none|none|

<h2 id="tocS_FileAccessLog">FileAccessLog</h2>
<!-- backwards compatibility -->
<a id="schemafileaccesslog"></a>
<a id="schema_FileAccessLog"></a>
<a id="tocSfileaccesslog"></a>
<a id="tocsfileaccesslog"></a>

```json
{
  "format": {
    "json": {},
    "text": {}
  },
  "path": {}
}
```

An object that represents an access log file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|object|false|none|none|
|path|object|true|none|none|

<h2 id="tocS_AccessLog">AccessLog</h2>
<!-- backwards compatibility -->
<a id="schemaaccesslog"></a>
<a id="schema_AccessLog"></a>
<a id="tocSaccesslog"></a>
<a id="tocsaccesslog"></a>

```json
{
  "file": {
    "format": {
      "json": {},
      "text": {}
    },
    "path": {}
  }
}
```

An object that represents the access logging information for a virtual node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|object|false|none|none|

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"stringstring"
```

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_AwsCloudMapInstanceAttributeKey">AwsCloudMapInstanceAttributeKey</h2>
<!-- backwards compatibility -->
<a id="schemaawscloudmapinstanceattributekey"></a>
<a id="schema_AwsCloudMapInstanceAttributeKey"></a>
<a id="tocSawscloudmapinstanceattributekey"></a>
<a id="tocsawscloudmapinstanceattributekey"></a>

```json
"string"
```

<h2 id="tocS_AwsCloudMapInstanceAttributeValue">AwsCloudMapInstanceAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaawscloudmapinstanceattributevalue"></a>
<a id="schema_AwsCloudMapInstanceAttributeValue"></a>
<a id="tocSawscloudmapinstanceattributevalue"></a>
<a id="tocsawscloudmapinstanceattributevalue"></a>

```json
"string"
```

<h2 id="tocS_AwsCloudMapInstanceAttribute">AwsCloudMapInstanceAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaawscloudmapinstanceattribute"></a>
<a id="schema_AwsCloudMapInstanceAttribute"></a>
<a id="tocSawscloudmapinstanceattribute"></a>
<a id="tocsawscloudmapinstanceattribute"></a>

```json
{
  "key": {},
  "value": {}
}
```

<p>An object that represents the Cloud Map attribute information for your virtual node.</p> <note> <p>Cloud Map is not available in the eu-south-1 Region.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_AwsCloudMapInstanceAttributes">AwsCloudMapInstanceAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaawscloudmapinstanceattributes"></a>
<a id="schema_AwsCloudMapInstanceAttributes"></a>
<a id="tocSawscloudmapinstanceattributes"></a>
<a id="tocsawscloudmapinstanceattributes"></a>

```json
[
  {
    "key": {},
    "value": {}
  }
]
```

<h2 id="tocS_AwsCloudMapName">AwsCloudMapName</h2>
<!-- backwards compatibility -->
<a id="schemaawscloudmapname"></a>
<a id="schema_AwsCloudMapName"></a>
<a id="tocSawscloudmapname"></a>
<a id="tocsawscloudmapname"></a>

```json
"string"
```

<h2 id="tocS_IpPreference">IpPreference</h2>
<!-- backwards compatibility -->
<a id="schemaippreference"></a>
<a id="schema_IpPreference"></a>
<a id="tocSippreference"></a>
<a id="tocsippreference"></a>

```json
"IPv6_PREFERRED"
```

<h2 id="tocS_AwsCloudMapServiceDiscovery">AwsCloudMapServiceDiscovery</h2>
<!-- backwards compatibility -->
<a id="schemaawscloudmapservicediscovery"></a>
<a id="schema_AwsCloudMapServiceDiscovery"></a>
<a id="tocSawscloudmapservicediscovery"></a>
<a id="tocsawscloudmapservicediscovery"></a>

```json
{
  "attributes": {},
  "ipPreference": {},
  "namespaceName": {},
  "serviceName": {}
}
```

<p>An object that represents the Cloud Map service discovery information for your virtual node.</p> <note> <p>Cloud Map is not available in the eu-south-1 Region.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|
|ipPreference|object|false|none|none|
|namespaceName|object|true|none|none|
|serviceName|object|true|none|none|

<h2 id="tocS_VirtualServiceBackend">VirtualServiceBackend</h2>
<!-- backwards compatibility -->
<a id="schemavirtualservicebackend"></a>
<a id="schema_VirtualServiceBackend"></a>
<a id="tocSvirtualservicebackend"></a>
<a id="tocsvirtualservicebackend"></a>

```json
{
  "clientPolicy": {
    "tls": {
      "certificate": {
        "file": {
          "certificateChain": {},
          "privateKey": {}
        },
        "sds": {
          "secretName": {}
        }
      },
      "enforce": {},
      "ports": {},
      "validation": {
        "subjectAlternativeNames": {
          "match": {
            "exact": {}
          }
        },
        "trust": {
          "acm": {
            "certificateAuthorityArns": {}
          },
          "file": {
            "certificateChain": {}
          },
          "sds": {
            "secretName": {}
          }
        }
      }
    }
  },
  "virtualServiceName": {}
}
```

An object that represents a virtual service backend for a virtual node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientPolicy|object|false|none|none|
|virtualServiceName|object|true|none|none|

<h2 id="tocS_Backend">Backend</h2>
<!-- backwards compatibility -->
<a id="schemabackend"></a>
<a id="schema_Backend"></a>
<a id="tocSbackend"></a>
<a id="tocsbackend"></a>

```json
{
  "virtualService": {
    "clientPolicy": {
      "tls": {
        "certificate": {
          "file": {
            "certificateChain": {},
            "privateKey": {}
          },
          "sds": {
            "secretName": {}
          }
        },
        "enforce": {},
        "ports": {},
        "validation": {
          "subjectAlternativeNames": {
            "match": {
              "exact": {}
            }
          },
          "trust": {
            "acm": {
              "certificateAuthorityArns": {}
            },
            "file": {
              "certificateChain": {}
            },
            "sds": {
              "secretName": {}
            }
          }
        }
      }
    },
    "virtualServiceName": {}
  }
}
```

An object that represents the backends that a virtual node is expected to send outbound traffic to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualService|object|false|none|none|

<h2 id="tocS_ClientPolicy">ClientPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaclientpolicy"></a>
<a id="schema_ClientPolicy"></a>
<a id="tocSclientpolicy"></a>
<a id="tocsclientpolicy"></a>

```json
{
  "tls": {
    "certificate": {
      "file": {
        "certificateChain": {},
        "privateKey": {}
      },
      "sds": {
        "secretName": {}
      }
    },
    "enforce": {},
    "ports": {},
    "validation": {
      "subjectAlternativeNames": {
        "match": {
          "exact": {}
        }
      },
      "trust": {
        "acm": {
          "certificateAuthorityArns": {}
        },
        "file": {
          "certificateChain": {}
        },
        "sds": {
          "secretName": {}
        }
      }
    }
  }
}
```

An object that represents a client policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tls|object|false|none|none|

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_CertificateAuthorityArns">CertificateAuthorityArns</h2>
<!-- backwards compatibility -->
<a id="schemacertificateauthorityarns"></a>
<a id="schema_CertificateAuthorityArns"></a>
<a id="tocScertificateauthorityarns"></a>
<a id="tocscertificateauthorityarns"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ClientPolicyTls">ClientPolicyTls</h2>
<!-- backwards compatibility -->
<a id="schemaclientpolicytls"></a>
<a id="schema_ClientPolicyTls"></a>
<a id="tocSclientpolicytls"></a>
<a id="tocsclientpolicytls"></a>

```json
{
  "certificate": {
    "file": {
      "certificateChain": {},
      "privateKey": {}
    },
    "sds": {
      "secretName": {}
    }
  },
  "enforce": {},
  "ports": {},
  "validation": {
    "subjectAlternativeNames": {
      "match": {
        "exact": {}
      }
    },
    "trust": {
      "acm": {
        "certificateAuthorityArns": {}
      },
      "file": {
        "certificateChain": {}
      },
      "sds": {
        "secretName": {}
      }
    }
  }
}
```

A reference to an object that represents a Transport Layer Security (TLS) client policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificate|object|false|none|none|
|enforce|object|false|none|none|
|ports|object|false|none|none|
|validation|object|true|none|none|

<h2 id="tocS_ClientTlsCertificate">ClientTlsCertificate</h2>
<!-- backwards compatibility -->
<a id="schemaclienttlscertificate"></a>
<a id="schema_ClientTlsCertificate"></a>
<a id="tocSclienttlscertificate"></a>
<a id="tocsclienttlscertificate"></a>

```json
{
  "file": {
    "certificateChain": {},
    "privateKey": {}
  },
  "sds": {
    "secretName": {}
  }
}
```

An object that represents the client's certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|object|false|none|none|
|sds|object|false|none|none|

<h2 id="tocS_PortSet">PortSet</h2>
<!-- backwards compatibility -->
<a id="schemaportset"></a>
<a id="schema_PortSet"></a>
<a id="tocSportset"></a>
<a id="tocsportset"></a>

```json
[
  1
]
```

<h2 id="tocS_TlsValidationContext">TlsValidationContext</h2>
<!-- backwards compatibility -->
<a id="schematlsvalidationcontext"></a>
<a id="schema_TlsValidationContext"></a>
<a id="tocStlsvalidationcontext"></a>
<a id="tocstlsvalidationcontext"></a>

```json
{
  "subjectAlternativeNames": {
    "match": {
      "exact": {}
    }
  },
  "trust": {
    "acm": {
      "certificateAuthorityArns": {}
    },
    "file": {
      "certificateChain": {}
    },
    "sds": {
      "secretName": {}
    }
  }
}
```

An object that represents how the proxy will validate its peer during Transport Layer Security (TLS) negotiation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subjectAlternativeNames|object|false|none|none|
|trust|object|true|none|none|

<h2 id="tocS_ListenerTlsFileCertificate">ListenerTlsFileCertificate</h2>
<!-- backwards compatibility -->
<a id="schemalistenertlsfilecertificate"></a>
<a id="schema_ListenerTlsFileCertificate"></a>
<a id="tocSlistenertlsfilecertificate"></a>
<a id="tocslistenertlsfilecertificate"></a>

```json
{
  "certificateChain": {},
  "privateKey": {}
}
```

An object that represents a local file certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateChain|object|true|none|none|
|privateKey|object|true|none|none|

<h2 id="tocS_ListenerTlsSdsCertificate">ListenerTlsSdsCertificate</h2>
<!-- backwards compatibility -->
<a id="schemalistenertlssdscertificate"></a>
<a id="schema_ListenerTlsSdsCertificate"></a>
<a id="tocSlistenertlssdscertificate"></a>
<a id="tocslistenertlssdscertificate"></a>

```json
{
  "secretName": {}
}
```

An object that represents the listener's Secret Discovery Service certificate. The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS documentation</a> for more info.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|secretName|object|true|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_ResourceName">ResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaresourcename"></a>
<a id="schema_ResourceName"></a>
<a id="tocSresourcename"></a>
<a id="tocsresourcename"></a>

```json
"string"
```

<h2 id="tocS_GatewayRouteSpec">GatewayRouteSpec</h2>
<!-- backwards compatibility -->
<a id="schemagatewayroutespec"></a>
<a id="schema_GatewayRouteSpec"></a>
<a id="tocSgatewayroutespec"></a>
<a id="tocsgatewayroutespec"></a>

```json
{
  "grpcRoute": {
    "action": {
      "rewrite": {
        "hostname": {
          "defaultTargetHostname": {}
        }
      },
      "target": {
        "port": {},
        "virtualService": {
          "virtualServiceName": {}
        }
      }
    },
    "match": {
      "hostname": {
        "exact": {},
        "suffix": {}
      },
      "metadata": {},
      "port": {},
      "serviceName": {}
    }
  },
  "http2Route": {
    "action": {
      "rewrite": {
        "hostname": {
          "defaultTargetHostname": {}
        },
        "path": {
          "exact": {}
        },
        "prefix": {
          "defaultPrefix": {},
          "value": {}
        }
      },
      "target": {
        "port": {},
        "virtualService": {
          "virtualServiceName": {}
        }
      }
    },
    "match": {
      "headers": {},
      "hostname": {
        "exact": {},
        "suffix": {}
      },
      "method": {},
      "path": {
        "exact": {},
        "regex": {}
      },
      "port": {},
      "prefix": {},
      "queryParameters": {}
    }
  },
  "httpRoute": {
    "action": {
      "rewrite": {
        "hostname": {
          "defaultTargetHostname": {}
        },
        "path": {
          "exact": {}
        },
        "prefix": {
          "defaultPrefix": {},
          "value": {}
        }
      },
      "target": {
        "port": {},
        "virtualService": {
          "virtualServiceName": {}
        }
      }
    },
    "match": {
      "headers": {},
      "hostname": {
        "exact": {},
        "suffix": {}
      },
      "method": {},
      "path": {
        "exact": {},
        "regex": {}
      },
      "port": {},
      "prefix": {},
      "queryParameters": {}
    }
  },
  "priority": {}
}
```

An object that represents a gateway route specification. Specify one gateway route type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grpcRoute|object|false|none|none|
|http2Route|object|false|none|none|
|httpRoute|object|false|none|none|
|priority|object|false|none|none|

<h2 id="tocS_TagList">TagList</h2>
<!-- backwards compatibility -->
<a id="schemataglist"></a>
<a id="schema_TagList"></a>
<a id="tocStaglist"></a>
<a id="tocstaglist"></a>

```json
[
  {
    "key": {},
    "value": {}
  }
]
```

<h2 id="tocS_CreateGatewayRouteInput">CreateGatewayRouteInput</h2>
<!-- backwards compatibility -->
<a id="schemacreategatewayrouteinput"></a>
<a id="schema_CreateGatewayRouteInput"></a>
<a id="tocScreategatewayrouteinput"></a>
<a id="tocscreategatewayrouteinput"></a>

```json
{
  "clientToken": {},
  "gatewayRouteName": {},
  "spec": {
    "grpcRoute": {
      "action": {
        "rewrite": {
          "hostname": {
            "defaultTargetHostname": {}
          }
        },
        "target": {
          "port": {},
          "virtualService": {
            "virtualServiceName": {}
          }
        }
      },
      "match": {
        "hostname": {
          "exact": {},
          "suffix": {}
        },
        "metadata": {},
        "port": {},
        "serviceName": {}
      }
    },
    "http2Route": {
      "action": {
        "rewrite": {
          "hostname": {
            "defaultTargetHostname": {}
          },
          "path": {
            "exact": {}
          },
          "prefix": {
            "defaultPrefix": {},
            "value": {}
          }
        },
        "target": {
          "port": {},
          "virtualService": {
            "virtualServiceName": {}
          }
        }
      },
      "match": {
        "headers": {},
        "hostname": {
          "exact": {},
          "suffix": {}
        },
        "method": {},
        "path": {
          "exact": {},
          "regex": {}
        },
        "port": {},
        "prefix": {},
        "queryParameters": {}
      }
    },
    "httpRoute": {
      "action": {
        "rewrite": {
          "hostname": {
            "defaultTargetHostname": {}
          },
          "path": {
            "exact": {}
          },
          "prefix": {
            "defaultPrefix": {},
            "value": {}
          }
        },
        "target": {
          "port": {},
          "virtualService": {
            "virtualServiceName": {}
          }
        }
      },
      "match": {
        "headers": {},
        "hostname": {
          "exact": {},
          "suffix": {}
        },
        "method": {},
        "path": {
          "exact": {},
          "regex": {}
        },
        "port": {},
        "prefix": {},
        "queryParameters": {}
      }
    },
    "priority": {}
  },
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|gatewayRouteName|object|true|none|none|
|spec|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_GatewayRouteData">GatewayRouteData</h2>
<!-- backwards compatibility -->
<a id="schemagatewayroutedata"></a>
<a id="schema_GatewayRouteData"></a>
<a id="tocSgatewayroutedata"></a>
<a id="tocsgatewayroutedata"></a>

```json
{
  "gatewayRouteName": {},
  "meshName": {},
  "metadata": {
    "arn": {},
    "createdAt": {},
    "lastUpdatedAt": {},
    "meshOwner": {},
    "resourceOwner": {},
    "uid": {},
    "version": {}
  },
  "spec": {
    "grpcRoute": {
      "action": {
        "rewrite": {
          "hostname": {
            "defaultTargetHostname": {}
          }
        },
        "target": {
          "port": {},
          "virtualService": {
            "virtualServiceName": {}
          }
        }
      },
      "match": {
        "hostname": {
          "exact": {},
          "suffix": {}
        },
        "metadata": {},
        "port": {},
        "serviceName": {}
      }
    },
    "http2Route": {
      "action": {
        "rewrite": {
          "hostname": {
            "defaultTargetHostname": {}
          },
          "path": {
            "exact": {}
          },
          "prefix": {
            "defaultPrefix": {},
            "value": {}
          }
        },
        "target": {
          "port": {},
          "virtualService": {
            "virtualServiceName": {}
          }
        }
      },
      "match": {
        "headers": {},
        "hostname": {
          "exact": {},
          "suffix": {}
        },
        "method": {},
        "path": {
          "exact": {},
          "regex": {}
        },
        "port": {},
        "prefix": {},
        "queryParameters": {}
      }
    },
    "httpRoute": {
      "action": {
        "rewrite": {
          "hostname": {
            "defaultTargetHostname": {}
          },
          "path": {
            "exact": {}
          },
          "prefix": {
            "defaultPrefix": {},
            "value": {}
          }
        },
        "target": {
          "port": {},
          "virtualService": {
            "virtualServiceName": {}
          }
        }
      },
      "match": {
        "headers": {},
        "hostname": {
          "exact": {},
          "suffix": {}
        },
        "method": {},
        "path": {
          "exact": {},
          "regex": {}
        },
        "port": {},
        "prefix": {},
        "queryParameters": {}
      }
    },
    "priority": {}
  },
  "status": {
    "status": {}
  },
  "virtualGatewayName": {}
}
```

An object that represents a gateway route returned by a describe operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gatewayRouteName|object|true|none|none|
|meshName|object|true|none|none|
|metadata|[ResourceMetadata](#schemaresourcemetadata)|true|none|An object that represents metadata for a resource.|
|spec|object|true|none|none|
|status|object|true|none|none|
|virtualGatewayName|object|true|none|none|

<h2 id="tocS_MeshSpec">MeshSpec</h2>
<!-- backwards compatibility -->
<a id="schemameshspec"></a>
<a id="schema_MeshSpec"></a>
<a id="tocSmeshspec"></a>
<a id="tocsmeshspec"></a>

```json
{
  "egressFilter": {
    "type": {}
  },
  "serviceDiscovery": {
    "ipPreference": {}
  }
}
```

An object that represents the specification of a service mesh.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|egressFilter|object|false|none|none|
|serviceDiscovery|[MeshServiceDiscovery](#schemameshservicediscovery)|false|none|An object that represents the service discovery information for a service mesh.|

<h2 id="tocS_CreateMeshInput">CreateMeshInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatemeshinput"></a>
<a id="schema_CreateMeshInput"></a>
<a id="tocScreatemeshinput"></a>
<a id="tocscreatemeshinput"></a>

```json
{
  "clientToken": {},
  "meshName": {},
  "spec": {
    "egressFilter": {
      "type": {}
    },
    "serviceDiscovery": {
      "ipPreference": {}
    }
  },
  "tags": {}
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|meshName|object|true|none|none|
|spec|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_MeshData">MeshData</h2>
<!-- backwards compatibility -->
<a id="schemameshdata"></a>
<a id="schema_MeshData"></a>
<a id="tocSmeshdata"></a>
<a id="tocsmeshdata"></a>

```json
{
  "meshName": {},
  "metadata": {
    "arn": {},
    "createdAt": {},
    "lastUpdatedAt": {},
    "meshOwner": {},
    "resourceOwner": {},
    "uid": {},
    "version": {}
  },
  "spec": {
    "egressFilter": {
      "type": {}
    },
    "serviceDiscovery": {
      "ipPreference": {}
    }
  },
  "status": {
    "status": {}
  }
}
```

An object that represents a service mesh returned by a describe operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meshName|object|true|none|none|
|metadata|object|true|none|none|
|spec|object|true|none|none|
|status|object|true|none|none|

<h2 id="tocS_RouteSpec">RouteSpec</h2>
<!-- backwards compatibility -->
<a id="schemaroutespec"></a>
<a id="schema_RouteSpec"></a>
<a id="tocSroutespec"></a>
<a id="tocsroutespec"></a>

```json
{
  "grpcRoute": {
    "action": {
      "weightedTargets": {}
    },
    "match": {
      "metadata": {},
      "methodName": {},
      "port": {},
      "serviceName": {}
    },
    "retryPolicy": {
      "grpcRetryEvents": {},
      "httpRetryEvents": {},
      "maxRetries": {},
      "perRetryTimeout": {
        "unit": {},
        "value": {}
      },
      "tcpRetryEvents": {}
    },
    "timeout": {
      "idle": {
        "unit": {},
        "value": {}
      },
      "perRequest": {
        "unit": {},
        "value": {}
      }
    }
  },
  "http2Route": {
    "action": {
      "weightedTargets": {}
    },
    "match": {
      "headers": {},
      "method": {},
      "path": {
        "exact": {},
        "regex": {}
      },
      "port": {},
      "prefix": {},
      "queryParameters": {},
      "scheme": {}
    },
    "retryPolicy": {
      "httpRetryEvents": {},
      "maxRetries": {},
      "perRetryTimeout": {
        "unit": {},
        "value": {}
      },
      "tcpRetryEvents": {}
    },
    "timeout": {
      "idle": {
        "unit": {},
        "value": {}
      },
      "perRequest": {
        "unit": {},
        "value": {}
      }
    }
  },
  "httpRoute": {
    "action": {
      "weightedTargets": {}
    },
    "match": {
      "headers": {},
      "method": {},
      "path": {
        "exact": {},
        "regex": {}
      },
      "port": {},
      "prefix": {},
      "queryParameters": {},
      "scheme": {}
    },
    "retryPolicy": {
      "httpRetryEvents": {},
      "maxRetries": {},
      "perRetryTimeout": {
        "unit": {},
        "value": {}
      },
      "tcpRetryEvents": {}
    },
    "timeout": {
      "idle": {
        "unit": {},
        "value": {}
      },
      "perRequest": {
        "unit": {},
        "value": {}
      }
    }
  },
  "priority": {},
  "tcpRoute": {
    "action": {
      "weightedTargets": {}
    },
    "match": {
      "port": {}
    },
    "timeout": {
      "idle": {
        "unit": {},
        "value": {}
      }
    }
  }
}
```

An object that represents a route specification. Specify one route type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grpcRoute|object|false|none|none|
|http2Route|object|false|none|none|
|httpRoute|object|false|none|none|
|priority|object|false|none|none|
|tcpRoute|object|false|none|none|

<h2 id="tocS_CreateRouteInput">CreateRouteInput</h2>
<!-- backwards compatibility -->
<a id="schemacreaterouteinput"></a>
<a id="schema_CreateRouteInput"></a>
<a id="tocScreaterouteinput"></a>
<a id="tocscreaterouteinput"></a>

```json
{
  "clientToken": {},
  "routeName": {},
  "spec": {
    "grpcRoute": {
      "action": {
        "weightedTargets": {}
      },
      "match": {
        "metadata": {},
        "methodName": {},
        "port": {},
        "serviceName": {}
      },
      "retryPolicy": {
        "grpcRetryEvents": {},
        "httpRetryEvents": {},
        "maxRetries": {},
        "perRetryTimeout": {
          "unit": {},
          "value": {}
        },
        "tcpRetryEvents": {}
      },
      "timeout": {
        "idle": {
          "unit": {},
          "value": {}
        },
        "perRequest": {
          "unit": {},
          "value": {}
        }
      }
    },
    "http2Route": {
      "action": {
        "weightedTargets": {}
      },
      "match": {
        "headers": {},
        "method": {},
        "path": {
          "exact": {},
          "regex": {}
        },
        "port": {},
        "prefix": {},
        "queryParameters": {},
        "scheme": {}
      },
      "retryPolicy": {
        "httpRetryEvents": {},
        "maxRetries": {},
        "perRetryTimeout": {
          "unit": {},
          "value": {}
        },
        "tcpRetryEvents": {}
      },
      "timeout": {
        "idle": {
          "unit": {},
          "value": {}
        },
        "perRequest": {
          "unit": {},
          "value": {}
        }
      }
    },
    "httpRoute": {
      "action": {
        "weightedTargets": {}
      },
      "match": {
        "headers": {},
        "method": {},
        "path": {
          "exact": {},
          "regex": {}
        },
        "port": {},
        "prefix": {},
        "queryParameters": {},
        "scheme": {}
      },
      "retryPolicy": {
        "httpRetryEvents": {},
        "maxRetries": {},
        "perRetryTimeout": {
          "unit": {},
          "value": {}
        },
        "tcpRetryEvents": {}
      },
      "timeout": {
        "idle": {
          "unit": {},
          "value": {}
        },
        "perRequest": {
          "unit": {},
          "value": {}
        }
      }
    },
    "priority": {},
    "tcpRoute": {
      "action": {
        "weightedTargets": {}
      },
      "match": {
        "port": {}
      },
      "timeout": {
        "idle": {
          "unit": {},
          "value": {}
        }
      }
    }
  },
  "tags": {}
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|routeName|object|true|none|none|
|spec|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_RouteData">RouteData</h2>
<!-- backwards compatibility -->
<a id="schemaroutedata"></a>
<a id="schema_RouteData"></a>
<a id="tocSroutedata"></a>
<a id="tocsroutedata"></a>

```json
{
  "meshName": {},
  "metadata": {
    "arn": {},
    "createdAt": {},
    "lastUpdatedAt": {},
    "meshOwner": {},
    "resourceOwner": {},
    "uid": {},
    "version": {}
  },
  "routeName": {},
  "spec": {
    "grpcRoute": {
      "action": {
        "weightedTargets": {}
      },
      "match": {
        "metadata": {},
        "methodName": {},
        "port": {},
        "serviceName": {}
      },
      "retryPolicy": {
        "grpcRetryEvents": {},
        "httpRetryEvents": {},
        "maxRetries": {},
        "perRetryTimeout": {
          "unit": {},
          "value": {}
        },
        "tcpRetryEvents": {}
      },
      "timeout": {
        "idle": {
          "unit": {},
          "value": {}
        },
        "perRequest": {
          "unit": {},
          "value": {}
        }
      }
    },
    "http2Route": {
      "action": {
        "weightedTargets": {}
      },
      "match": {
        "headers": {},
        "method": {},
        "path": {
          "exact": {},
          "regex": {}
        },
        "port": {},
        "prefix": {},
        "queryParameters": {},
        "scheme": {}
      },
      "retryPolicy": {
        "httpRetryEvents": {},
        "maxRetries": {},
        "perRetryTimeout": {
          "unit": {},
          "value": {}
        },
        "tcpRetryEvents": {}
      },
      "timeout": {
        "idle": {
          "unit": {},
          "value": {}
        },
        "perRequest": {
          "unit": {},
          "value": {}
        }
      }
    },
    "httpRoute": {
      "action": {
        "weightedTargets": {}
      },
      "match": {
        "headers": {},
        "method": {},
        "path": {
          "exact": {},
          "regex": {}
        },
        "port": {},
        "prefix": {},
        "queryParameters": {},
        "scheme": {}
      },
      "retryPolicy": {
        "httpRetryEvents": {},
        "maxRetries": {},
        "perRetryTimeout": {
          "unit": {},
          "value": {}
        },
        "tcpRetryEvents": {}
      },
      "timeout": {
        "idle": {
          "unit": {},
          "value": {}
        },
        "perRequest": {
          "unit": {},
          "value": {}
        }
      }
    },
    "priority": {},
    "tcpRoute": {
      "action": {
        "weightedTargets": {}
      },
      "match": {
        "port": {}
      },
      "timeout": {
        "idle": {
          "unit": {},
          "value": {}
        }
      }
    }
  },
  "status": {
    "status": {}
  },
  "virtualRouterName": {}
}
```

An object that represents a route returned by a describe operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meshName|object|true|none|none|
|metadata|object|true|none|none|
|routeName|object|true|none|none|
|spec|object|true|none|none|
|status|object|true|none|none|
|virtualRouterName|object|true|none|none|

<h2 id="tocS_VirtualGatewaySpec">VirtualGatewaySpec</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewayspec"></a>
<a id="schema_VirtualGatewaySpec"></a>
<a id="tocSvirtualgatewayspec"></a>
<a id="tocsvirtualgatewayspec"></a>

```json
{
  "backendDefaults": {
    "clientPolicy": {
      "tls": {
        "certificate": {
          "file": {
            "certificateChain": {},
            "privateKey": {}
          },
          "sds": {
            "secretName": {}
          }
        },
        "enforce": {},
        "ports": {},
        "validation": {
          "subjectAlternativeNames": {
            "match": {
              "exact": {}
            }
          },
          "trust": {
            "acm": {
              "certificateAuthorityArns": {}
            },
            "file": {
              "certificateChain": {}
            },
            "sds": {
              "secretName": {}
            }
          }
        }
      }
    }
  },
  "listeners": {},
  "logging": {
    "accessLog": {
      "file": {
        "format": {
          "json": {},
          "text": {}
        },
        "path": {}
      }
    }
  }
}
```

An object that represents the specification of a service mesh resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backendDefaults|object|false|none|none|
|listeners|object|true|none|none|
|logging|[VirtualGatewayLogging](#schemavirtualgatewaylogging)|false|none|An object that represents logging information.|

<h2 id="tocS_CreateVirtualGatewayInput">CreateVirtualGatewayInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatevirtualgatewayinput"></a>
<a id="schema_CreateVirtualGatewayInput"></a>
<a id="tocScreatevirtualgatewayinput"></a>
<a id="tocscreatevirtualgatewayinput"></a>

```json
{
  "clientToken": {},
  "spec": {
    "backendDefaults": {
      "clientPolicy": {
        "tls": {
          "certificate": {
            "file": {
              "certificateChain": {},
              "privateKey": {}
            },
            "sds": {
              "secretName": {}
            }
          },
          "enforce": {},
          "ports": {},
          "validation": {
            "subjectAlternativeNames": {
              "match": {
                "exact": {}
              }
            },
            "trust": {
              "acm": {
                "certificateAuthorityArns": {}
              },
              "file": {
                "certificateChain": {}
              },
              "sds": {
                "secretName": {}
              }
            }
          }
        }
      }
    },
    "listeners": {},
    "logging": {
      "accessLog": {
        "file": {
          "format": {
            "json": {},
            "text": {}
          },
          "path": {}
        }
      }
    }
  },
  "tags": {},
  "virtualGatewayName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|spec|object|true|none|none|
|tags|object|false|none|none|
|virtualGatewayName|object|true|none|none|

<h2 id="tocS_VirtualGatewayData">VirtualGatewayData</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewaydata"></a>
<a id="schema_VirtualGatewayData"></a>
<a id="tocSvirtualgatewaydata"></a>
<a id="tocsvirtualgatewaydata"></a>

```json
{
  "meshName": {},
  "metadata": {
    "arn": {},
    "createdAt": {},
    "lastUpdatedAt": {},
    "meshOwner": {},
    "resourceOwner": {},
    "uid": {},
    "version": {}
  },
  "spec": {
    "backendDefaults": {
      "clientPolicy": {
        "tls": {
          "certificate": {
            "file": {
              "certificateChain": {},
              "privateKey": {}
            },
            "sds": {
              "secretName": {}
            }
          },
          "enforce": {},
          "ports": {},
          "validation": {
            "subjectAlternativeNames": {
              "match": {
                "exact": {}
              }
            },
            "trust": {
              "acm": {
                "certificateAuthorityArns": {}
              },
              "file": {
                "certificateChain": {}
              },
              "sds": {
                "secretName": {}
              }
            }
          }
        }
      }
    },
    "listeners": {},
    "logging": {
      "accessLog": {
        "file": {
          "format": {
            "json": {},
            "text": {}
          },
          "path": {}
        }
      }
    }
  },
  "status": {
    "status": {}
  },
  "virtualGatewayName": {}
}
```

An object that represents a virtual gateway returned by a describe operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meshName|object|true|none|none|
|metadata|[ResourceMetadata](#schemaresourcemetadata)|true|none|An object that represents metadata for a resource.|
|spec|object|true|none|none|
|status|object|true|none|none|
|virtualGatewayName|object|true|none|none|

<h2 id="tocS_VirtualNodeSpec">VirtualNodeSpec</h2>
<!-- backwards compatibility -->
<a id="schemavirtualnodespec"></a>
<a id="schema_VirtualNodeSpec"></a>
<a id="tocSvirtualnodespec"></a>
<a id="tocsvirtualnodespec"></a>

```json
{
  "backendDefaults": {
    "clientPolicy": {
      "tls": {
        "certificate": {
          "file": {
            "certificateChain": {},
            "privateKey": {}
          },
          "sds": {
            "secretName": {}
          }
        },
        "enforce": {},
        "ports": {},
        "validation": {
          "subjectAlternativeNames": {
            "match": {
              "exact": {}
            }
          },
          "trust": {
            "acm": {
              "certificateAuthorityArns": {}
            },
            "file": {
              "certificateChain": {}
            },
            "sds": {
              "secretName": {}
            }
          }
        }
      }
    }
  },
  "backends": {},
  "listeners": {},
  "logging": {
    "accessLog": {
      "file": {
        "format": {
          "json": {},
          "text": {}
        },
        "path": {}
      }
    }
  },
  "serviceDiscovery": {
    "awsCloudMap": {
      "attributes": {},
      "ipPreference": {},
      "namespaceName": {},
      "serviceName": {}
    },
    "dns": {
      "hostname": {},
      "ipPreference": {},
      "responseType": {}
    }
  }
}
```

An object that represents the specification of a virtual node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backendDefaults|object|false|none|none|
|backends|object|false|none|none|
|listeners|object|false|none|none|
|logging|object|false|none|none|
|serviceDiscovery|object|false|none|none|

<h2 id="tocS_CreateVirtualNodeInput">CreateVirtualNodeInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatevirtualnodeinput"></a>
<a id="schema_CreateVirtualNodeInput"></a>
<a id="tocScreatevirtualnodeinput"></a>
<a id="tocscreatevirtualnodeinput"></a>

```json
{
  "clientToken": {},
  "spec": {
    "backendDefaults": {
      "clientPolicy": {
        "tls": {
          "certificate": {
            "file": {
              "certificateChain": {},
              "privateKey": {}
            },
            "sds": {
              "secretName": {}
            }
          },
          "enforce": {},
          "ports": {},
          "validation": {
            "subjectAlternativeNames": {
              "match": {
                "exact": {}
              }
            },
            "trust": {
              "acm": {
                "certificateAuthorityArns": {}
              },
              "file": {
                "certificateChain": {}
              },
              "sds": {
                "secretName": {}
              }
            }
          }
        }
      }
    },
    "backends": {},
    "listeners": {},
    "logging": {
      "accessLog": {
        "file": {
          "format": {
            "json": {},
            "text": {}
          },
          "path": {}
        }
      }
    },
    "serviceDiscovery": {
      "awsCloudMap": {
        "attributes": {},
        "ipPreference": {},
        "namespaceName": {},
        "serviceName": {}
      },
      "dns": {
        "hostname": {},
        "ipPreference": {},
        "responseType": {}
      }
    }
  },
  "tags": {},
  "virtualNodeName": {}
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|spec|object|true|none|none|
|tags|object|false|none|none|
|virtualNodeName|object|true|none|none|

<h2 id="tocS_VirtualNodeData">VirtualNodeData</h2>
<!-- backwards compatibility -->
<a id="schemavirtualnodedata"></a>
<a id="schema_VirtualNodeData"></a>
<a id="tocSvirtualnodedata"></a>
<a id="tocsvirtualnodedata"></a>

```json
{
  "meshName": {},
  "metadata": {
    "arn": {},
    "createdAt": {},
    "lastUpdatedAt": {},
    "meshOwner": {},
    "resourceOwner": {},
    "uid": {},
    "version": {}
  },
  "spec": {
    "backendDefaults": {
      "clientPolicy": {
        "tls": {
          "certificate": {
            "file": {
              "certificateChain": {},
              "privateKey": {}
            },
            "sds": {
              "secretName": {}
            }
          },
          "enforce": {},
          "ports": {},
          "validation": {
            "subjectAlternativeNames": {
              "match": {
                "exact": {}
              }
            },
            "trust": {
              "acm": {
                "certificateAuthorityArns": {}
              },
              "file": {
                "certificateChain": {}
              },
              "sds": {
                "secretName": {}
              }
            }
          }
        }
      }
    },
    "backends": {},
    "listeners": {},
    "logging": {
      "accessLog": {
        "file": {
          "format": {
            "json": {},
            "text": {}
          },
          "path": {}
        }
      }
    },
    "serviceDiscovery": {
      "awsCloudMap": {
        "attributes": {},
        "ipPreference": {},
        "namespaceName": {},
        "serviceName": {}
      },
      "dns": {
        "hostname": {},
        "ipPreference": {},
        "responseType": {}
      }
    }
  },
  "status": {
    "status": {}
  },
  "virtualNodeName": {}
}
```

An object that represents a virtual node returned by a describe operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meshName|object|true|none|none|
|metadata|object|true|none|none|
|spec|object|true|none|none|
|status|object|true|none|none|
|virtualNodeName|object|true|none|none|

<h2 id="tocS_VirtualRouterSpec">VirtualRouterSpec</h2>
<!-- backwards compatibility -->
<a id="schemavirtualrouterspec"></a>
<a id="schema_VirtualRouterSpec"></a>
<a id="tocSvirtualrouterspec"></a>
<a id="tocsvirtualrouterspec"></a>

```json
{
  "listeners": {}
}
```

An object that represents the specification of a virtual router.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listeners|object|false|none|none|

<h2 id="tocS_CreateVirtualRouterInput">CreateVirtualRouterInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatevirtualrouterinput"></a>
<a id="schema_CreateVirtualRouterInput"></a>
<a id="tocScreatevirtualrouterinput"></a>
<a id="tocscreatevirtualrouterinput"></a>

```json
{
  "clientToken": {},
  "spec": {
    "listeners": {}
  },
  "tags": {},
  "virtualRouterName": {}
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|spec|object|true|none|none|
|tags|object|false|none|none|
|virtualRouterName|object|true|none|none|

<h2 id="tocS_VirtualRouterData">VirtualRouterData</h2>
<!-- backwards compatibility -->
<a id="schemavirtualrouterdata"></a>
<a id="schema_VirtualRouterData"></a>
<a id="tocSvirtualrouterdata"></a>
<a id="tocsvirtualrouterdata"></a>

```json
{
  "meshName": {},
  "metadata": {
    "arn": {},
    "createdAt": {},
    "lastUpdatedAt": {},
    "meshOwner": {},
    "resourceOwner": {},
    "uid": {},
    "version": {}
  },
  "spec": {
    "listeners": {}
  },
  "status": {
    "status": {}
  },
  "virtualRouterName": {}
}
```

An object that represents a virtual router returned by a describe operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meshName|object|true|none|none|
|metadata|object|true|none|none|
|spec|object|true|none|none|
|status|object|true|none|none|
|virtualRouterName|object|true|none|none|

<h2 id="tocS_VirtualServiceSpec">VirtualServiceSpec</h2>
<!-- backwards compatibility -->
<a id="schemavirtualservicespec"></a>
<a id="schema_VirtualServiceSpec"></a>
<a id="tocSvirtualservicespec"></a>
<a id="tocsvirtualservicespec"></a>

```json
{
  "provider": {
    "virtualNode": {
      "virtualNodeName": {}
    },
    "virtualRouter": {
      "virtualRouterName": {}
    }
  }
}
```

An object that represents the specification of a virtual service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|provider|object|false|none|none|

<h2 id="tocS_ServiceName">ServiceName</h2>
<!-- backwards compatibility -->
<a id="schemaservicename"></a>
<a id="schema_ServiceName"></a>
<a id="tocSservicename"></a>
<a id="tocsservicename"></a>

```json
"string"
```

<h2 id="tocS_CreateVirtualServiceInput">CreateVirtualServiceInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatevirtualserviceinput"></a>
<a id="schema_CreateVirtualServiceInput"></a>
<a id="tocScreatevirtualserviceinput"></a>
<a id="tocscreatevirtualserviceinput"></a>

```json
{
  "clientToken": {},
  "spec": {
    "provider": {
      "virtualNode": {
        "virtualNodeName": {}
      },
      "virtualRouter": {
        "virtualRouterName": {}
      }
    }
  },
  "tags": {},
  "virtualServiceName": {}
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|spec|object|true|none|none|
|tags|object|false|none|none|
|virtualServiceName|object|true|none|none|

<h2 id="tocS_VirtualServiceData">VirtualServiceData</h2>
<!-- backwards compatibility -->
<a id="schemavirtualservicedata"></a>
<a id="schema_VirtualServiceData"></a>
<a id="tocSvirtualservicedata"></a>
<a id="tocsvirtualservicedata"></a>

```json
{
  "meshName": {},
  "metadata": {
    "arn": {},
    "createdAt": {},
    "lastUpdatedAt": {},
    "meshOwner": {},
    "resourceOwner": {},
    "uid": {},
    "version": {}
  },
  "spec": {
    "provider": {
      "virtualNode": {
        "virtualNodeName": {}
      },
      "virtualRouter": {
        "virtualRouterName": {}
      }
    }
  },
  "status": {
    "status": {}
  },
  "virtualServiceName": {}
}
```

An object that represents a virtual service returned by a describe operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meshName|object|true|none|none|
|metadata|[ResourceMetadata](#schemaresourcemetadata)|true|none|An object that represents metadata for a resource.|
|spec|object|true|none|none|
|status|object|true|none|none|
|virtualServiceName|object|true|none|none|

<h2 id="tocS_DefaultGatewayRouteRewrite">DefaultGatewayRouteRewrite</h2>
<!-- backwards compatibility -->
<a id="schemadefaultgatewayrouterewrite"></a>
<a id="schema_DefaultGatewayRouteRewrite"></a>
<a id="tocSdefaultgatewayrouterewrite"></a>
<a id="tocsdefaultgatewayrouterewrite"></a>

```json
"ENABLED"
```

<h2 id="tocS_DeleteGatewayRouteInput">DeleteGatewayRouteInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletegatewayrouteinput"></a>
<a id="schema_DeleteGatewayRouteInput"></a>
<a id="tocSdeletegatewayrouteinput"></a>
<a id="tocsdeletegatewayrouteinput"></a>

```json
{}
```

<h2 id="tocS_DeleteMeshInput">DeleteMeshInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletemeshinput"></a>
<a id="schema_DeleteMeshInput"></a>
<a id="tocSdeletemeshinput"></a>
<a id="tocsdeletemeshinput"></a>

```json
{}
```

<zonbook></zonbook><xhtml></xhtml>

<h2 id="tocS_DeleteRouteInput">DeleteRouteInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleterouteinput"></a>
<a id="schema_DeleteRouteInput"></a>
<a id="tocSdeleterouteinput"></a>
<a id="tocsdeleterouteinput"></a>

```json
{}
```

<zonbook></zonbook><xhtml></xhtml>

<h2 id="tocS_DeleteVirtualGatewayInput">DeleteVirtualGatewayInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletevirtualgatewayinput"></a>
<a id="schema_DeleteVirtualGatewayInput"></a>
<a id="tocSdeletevirtualgatewayinput"></a>
<a id="tocsdeletevirtualgatewayinput"></a>

```json
{}
```

<h2 id="tocS_DeleteVirtualNodeInput">DeleteVirtualNodeInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletevirtualnodeinput"></a>
<a id="schema_DeleteVirtualNodeInput"></a>
<a id="tocSdeletevirtualnodeinput"></a>
<a id="tocsdeletevirtualnodeinput"></a>

```json
{}
```

Deletes a virtual node input.

<h2 id="tocS_DeleteVirtualRouterInput">DeleteVirtualRouterInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletevirtualrouterinput"></a>
<a id="schema_DeleteVirtualRouterInput"></a>
<a id="tocSdeletevirtualrouterinput"></a>
<a id="tocsdeletevirtualrouterinput"></a>

```json
{}
```

<zonbook></zonbook><xhtml></xhtml>

<h2 id="tocS_DeleteVirtualServiceInput">DeleteVirtualServiceInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletevirtualserviceinput"></a>
<a id="schema_DeleteVirtualServiceInput"></a>
<a id="tocSdeletevirtualserviceinput"></a>
<a id="tocsdeletevirtualserviceinput"></a>

```json
{}
```

<zonbook></zonbook><xhtml></xhtml>

<h2 id="tocS_DescribeGatewayRouteInput">DescribeGatewayRouteInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribegatewayrouteinput"></a>
<a id="schema_DescribeGatewayRouteInput"></a>
<a id="tocSdescribegatewayrouteinput"></a>
<a id="tocsdescribegatewayrouteinput"></a>

```json
{}
```

<h2 id="tocS_DescribeMeshInput">DescribeMeshInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribemeshinput"></a>
<a id="schema_DescribeMeshInput"></a>
<a id="tocSdescribemeshinput"></a>
<a id="tocsdescribemeshinput"></a>

```json
{}
```

<zonbook></zonbook><xhtml></xhtml>

<h2 id="tocS_DescribeRouteInput">DescribeRouteInput</h2>
<!-- backwards compatibility -->
<a id="schemadescriberouteinput"></a>
<a id="schema_DescribeRouteInput"></a>
<a id="tocSdescriberouteinput"></a>
<a id="tocsdescriberouteinput"></a>

```json
{}
```

<zonbook></zonbook><xhtml></xhtml>

<h2 id="tocS_DescribeVirtualGatewayInput">DescribeVirtualGatewayInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribevirtualgatewayinput"></a>
<a id="schema_DescribeVirtualGatewayInput"></a>
<a id="tocSdescribevirtualgatewayinput"></a>
<a id="tocsdescribevirtualgatewayinput"></a>

```json
{}
```

<h2 id="tocS_DescribeVirtualNodeInput">DescribeVirtualNodeInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribevirtualnodeinput"></a>
<a id="schema_DescribeVirtualNodeInput"></a>
<a id="tocSdescribevirtualnodeinput"></a>
<a id="tocsdescribevirtualnodeinput"></a>

```json
{}
```

<zonbook></zonbook><xhtml></xhtml>

<h2 id="tocS_DescribeVirtualRouterInput">DescribeVirtualRouterInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribevirtualrouterinput"></a>
<a id="schema_DescribeVirtualRouterInput"></a>
<a id="tocSdescribevirtualrouterinput"></a>
<a id="tocsdescribevirtualrouterinput"></a>

```json
{}
```

<zonbook></zonbook><xhtml></xhtml>

<h2 id="tocS_DescribeVirtualServiceInput">DescribeVirtualServiceInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribevirtualserviceinput"></a>
<a id="schema_DescribeVirtualServiceInput"></a>
<a id="tocSdescribevirtualserviceinput"></a>
<a id="tocsdescribevirtualserviceinput"></a>

```json
{}
```

<zonbook></zonbook><xhtml></xhtml>

<h2 id="tocS_DnsResponseType">DnsResponseType</h2>
<!-- backwards compatibility -->
<a id="schemadnsresponsetype"></a>
<a id="schema_DnsResponseType"></a>
<a id="tocSdnsresponsetype"></a>
<a id="tocsdnsresponsetype"></a>

```json
"LOADBALANCER"
```

<h2 id="tocS_Hostname">Hostname</h2>
<!-- backwards compatibility -->
<a id="schemahostname"></a>
<a id="schema_Hostname"></a>
<a id="tocShostname"></a>
<a id="tocshostname"></a>

```json
"string"
```

<h2 id="tocS_DnsServiceDiscovery">DnsServiceDiscovery</h2>
<!-- backwards compatibility -->
<a id="schemadnsservicediscovery"></a>
<a id="schema_DnsServiceDiscovery"></a>
<a id="tocSdnsservicediscovery"></a>
<a id="tocsdnsservicediscovery"></a>

```json
{
  "hostname": {},
  "ipPreference": {},
  "responseType": {}
}
```

An object that represents the DNS service discovery information for your virtual node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostname|object|true|none|none|
|ipPreference|object|false|none|none|
|responseType|object|false|none|none|

<h2 id="tocS_DurationUnit">DurationUnit</h2>
<!-- backwards compatibility -->
<a id="schemadurationunit"></a>
<a id="schema_DurationUnit"></a>
<a id="tocSdurationunit"></a>
<a id="tocsdurationunit"></a>

```json
"s"
```

<h2 id="tocS_DurationValue">DurationValue</h2>
<!-- backwards compatibility -->
<a id="schemadurationvalue"></a>
<a id="schema_DurationValue"></a>
<a id="tocSdurationvalue"></a>
<a id="tocsdurationvalue"></a>

```json
0
```

<h2 id="tocS_Duration">Duration</h2>
<!-- backwards compatibility -->
<a id="schemaduration"></a>
<a id="schema_Duration"></a>
<a id="tocSduration"></a>
<a id="tocsduration"></a>

```json
{
  "unit": {},
  "value": {}
}
```

An object that represents a duration of time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unit|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_EgressFilterType">EgressFilterType</h2>
<!-- backwards compatibility -->
<a id="schemaegressfiltertype"></a>
<a id="schema_EgressFilterType"></a>
<a id="tocSegressfiltertype"></a>
<a id="tocsegressfiltertype"></a>

```json
"ALLOW_ALL"
```

<h2 id="tocS_ExactHostName">ExactHostName</h2>
<!-- backwards compatibility -->
<a id="schemaexacthostname"></a>
<a id="schema_ExactHostName"></a>
<a id="tocSexacthostname"></a>
<a id="tocsexacthostname"></a>

```json
"string"
```

<h2 id="tocS_LoggingFormat">LoggingFormat</h2>
<!-- backwards compatibility -->
<a id="schemaloggingformat"></a>
<a id="schema_LoggingFormat"></a>
<a id="tocSloggingformat"></a>
<a id="tocsloggingformat"></a>

```json
{
  "json": {},
  "text": {}
}
```

An object that represents the format for the logs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|json|object|false|none|none|
|text|object|false|none|none|

<h2 id="tocS_FilePath">FilePath</h2>
<!-- backwards compatibility -->
<a id="schemafilepath"></a>
<a id="schema_FilePath"></a>
<a id="tocSfilepath"></a>
<a id="tocsfilepath"></a>

```json
"string"
```

<h2 id="tocS_ResourceMetadata">ResourceMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaresourcemetadata"></a>
<a id="schema_ResourceMetadata"></a>
<a id="tocSresourcemetadata"></a>
<a id="tocsresourcemetadata"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "lastUpdatedAt": {},
  "meshOwner": {},
  "resourceOwner": {},
  "uid": {},
  "version": {}
}
```

An object that represents metadata for a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|createdAt|object|true|none|none|
|lastUpdatedAt|object|true|none|none|
|meshOwner|object|true|none|none|
|resourceOwner|object|true|none|none|
|uid|object|true|none|none|
|version|object|true|none|none|

<h2 id="tocS_GatewayRouteStatus">GatewayRouteStatus</h2>
<!-- backwards compatibility -->
<a id="schemagatewayroutestatus"></a>
<a id="schema_GatewayRouteStatus"></a>
<a id="tocSgatewayroutestatus"></a>
<a id="tocsgatewayroutestatus"></a>

```json
{
  "status": {}
}
```

An object that represents the current status of a gateway route.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|true|none|none|

<h2 id="tocS_SuffixHostname">SuffixHostname</h2>
<!-- backwards compatibility -->
<a id="schemasuffixhostname"></a>
<a id="schema_SuffixHostname"></a>
<a id="tocSsuffixhostname"></a>
<a id="tocssuffixhostname"></a>

```json
"string"
```

<h2 id="tocS_GatewayRouteHostnameMatch">GatewayRouteHostnameMatch</h2>
<!-- backwards compatibility -->
<a id="schemagatewayroutehostnamematch"></a>
<a id="schema_GatewayRouteHostnameMatch"></a>
<a id="tocSgatewayroutehostnamematch"></a>
<a id="tocsgatewayroutehostnamematch"></a>

```json
{
  "exact": {},
  "suffix": {}
}
```

An object representing the gateway route host name to match.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exact|object|false|none|none|
|suffix|object|false|none|none|

<h2 id="tocS_GatewayRouteHostnameRewrite">GatewayRouteHostnameRewrite</h2>
<!-- backwards compatibility -->
<a id="schemagatewayroutehostnamerewrite"></a>
<a id="schema_GatewayRouteHostnameRewrite"></a>
<a id="tocSgatewayroutehostnamerewrite"></a>
<a id="tocsgatewayroutehostnamerewrite"></a>

```json
{
  "defaultTargetHostname": {}
}
```

An object representing the gateway route host name to rewrite.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultTargetHostname|object|false|none|none|

<h2 id="tocS_GatewayRouteRef">GatewayRouteRef</h2>
<!-- backwards compatibility -->
<a id="schemagatewayrouteref"></a>
<a id="schema_GatewayRouteRef"></a>
<a id="tocSgatewayrouteref"></a>
<a id="tocsgatewayrouteref"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "gatewayRouteName": {},
  "lastUpdatedAt": {},
  "meshName": {},
  "meshOwner": {},
  "resourceOwner": {},
  "version": {},
  "virtualGatewayName": {}
}
```

An object that represents a gateway route returned by a list operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|createdAt|object|true|none|none|
|gatewayRouteName|object|true|none|none|
|lastUpdatedAt|object|true|none|none|
|meshName|object|true|none|none|
|meshOwner|object|true|none|none|
|resourceOwner|object|true|none|none|
|version|object|true|none|none|
|virtualGatewayName|object|true|none|none|

<h2 id="tocS_GatewayRouteList">GatewayRouteList</h2>
<!-- backwards compatibility -->
<a id="schemagatewayroutelist"></a>
<a id="schema_GatewayRouteList"></a>
<a id="tocSgatewayroutelist"></a>
<a id="tocsgatewayroutelist"></a>

```json
[
  {
    "arn": {},
    "createdAt": {},
    "gatewayRouteName": {},
    "lastUpdatedAt": {},
    "meshName": {},
    "meshOwner": {},
    "resourceOwner": {},
    "version": {},
    "virtualGatewayName": {}
  }
]
```

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_GatewayRouteStatusCode">GatewayRouteStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemagatewayroutestatuscode"></a>
<a id="schema_GatewayRouteStatusCode"></a>
<a id="tocSgatewayroutestatuscode"></a>
<a id="tocsgatewayroutestatuscode"></a>

```json
"ACTIVE"
```

<h2 id="tocS_ListenerPort">ListenerPort</h2>
<!-- backwards compatibility -->
<a id="schemalistenerport"></a>
<a id="schema_ListenerPort"></a>
<a id="tocSlistenerport"></a>
<a id="tocslistenerport"></a>

```json
1
```

<h2 id="tocS_GatewayRouteVirtualService">GatewayRouteVirtualService</h2>
<!-- backwards compatibility -->
<a id="schemagatewayroutevirtualservice"></a>
<a id="schema_GatewayRouteVirtualService"></a>
<a id="tocSgatewayroutevirtualservice"></a>
<a id="tocsgatewayroutevirtualservice"></a>

```json
{
  "virtualServiceName": {}
}
```

An object that represents the virtual service that traffic is routed to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualServiceName|object|true|none|none|

<h2 id="tocS_GatewayRouteTarget">GatewayRouteTarget</h2>
<!-- backwards compatibility -->
<a id="schemagatewayroutetarget"></a>
<a id="schema_GatewayRouteTarget"></a>
<a id="tocSgatewayroutetarget"></a>
<a id="tocsgatewayroutetarget"></a>

```json
{
  "port": {},
  "virtualService": {
    "virtualServiceName": {}
  }
}
```

An object that represents a gateway route target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|port|object|false|none|none|
|virtualService|object|true|none|none|

<h2 id="tocS_GrpcGatewayRouteAction">GrpcGatewayRouteAction</h2>
<!-- backwards compatibility -->
<a id="schemagrpcgatewayrouteaction"></a>
<a id="schema_GrpcGatewayRouteAction"></a>
<a id="tocSgrpcgatewayrouteaction"></a>
<a id="tocsgrpcgatewayrouteaction"></a>

```json
{
  "rewrite": {
    "hostname": {
      "defaultTargetHostname": {}
    }
  },
  "target": {
    "port": {},
    "virtualService": {
      "virtualServiceName": {}
    }
  }
}
```

An object that represents the action to take if a match is determined.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rewrite|object|false|none|none|
|target|object|true|none|none|

<h2 id="tocS_GrpcGatewayRouteMatch">GrpcGatewayRouteMatch</h2>
<!-- backwards compatibility -->
<a id="schemagrpcgatewayroutematch"></a>
<a id="schema_GrpcGatewayRouteMatch"></a>
<a id="tocSgrpcgatewayroutematch"></a>
<a id="tocsgrpcgatewayroutematch"></a>

```json
{
  "hostname": {
    "exact": {},
    "suffix": {}
  },
  "metadata": {},
  "port": {},
  "serviceName": {}
}
```

An object that represents the criteria for determining a request match.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostname|object|false|none|none|
|metadata|object|false|none|none|
|port|object|false|none|none|
|serviceName|object|false|none|none|

<h2 id="tocS_GrpcGatewayRouteRewrite">GrpcGatewayRouteRewrite</h2>
<!-- backwards compatibility -->
<a id="schemagrpcgatewayrouterewrite"></a>
<a id="schema_GrpcGatewayRouteRewrite"></a>
<a id="tocSgrpcgatewayrouterewrite"></a>
<a id="tocsgrpcgatewayrouterewrite"></a>

```json
{
  "hostname": {
    "defaultTargetHostname": {}
  }
}
```

An object that represents the gateway route to rewrite.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostname|object|false|none|none|

<h2 id="tocS_GrpcGatewayRouteMetadataList">GrpcGatewayRouteMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemagrpcgatewayroutemetadatalist"></a>
<a id="schema_GrpcGatewayRouteMetadataList"></a>
<a id="tocSgrpcgatewayroutemetadatalist"></a>
<a id="tocsgrpcgatewayroutemetadatalist"></a>

```json
[
  {
    "invert": {},
    "match": {
      "exact": {},
      "prefix": {},
      "range": {
        "end": {},
        "start": {}
      },
      "regex": {},
      "suffix": {}
    },
    "name": {}
  }
]
```

<h2 id="tocS_GrpcMetadataMatchMethod">GrpcMetadataMatchMethod</h2>
<!-- backwards compatibility -->
<a id="schemagrpcmetadatamatchmethod"></a>
<a id="schema_GrpcMetadataMatchMethod"></a>
<a id="tocSgrpcmetadatamatchmethod"></a>
<a id="tocsgrpcmetadatamatchmethod"></a>

```json
{
  "exact": {},
  "prefix": {},
  "range": {
    "end": {},
    "start": {}
  },
  "regex": {},
  "suffix": {}
}
```

An object representing the method header to be matched.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exact|object|false|none|none|
|prefix|object|false|none|none|
|range|[MatchRange](#schemamatchrange)|false|none|An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched.|
|regex|object|false|none|none|
|suffix|object|false|none|none|

<h2 id="tocS_HeaderName">HeaderName</h2>
<!-- backwards compatibility -->
<a id="schemaheadername"></a>
<a id="schema_HeaderName"></a>
<a id="tocSheadername"></a>
<a id="tocsheadername"></a>

```json
"string"
```

<h2 id="tocS_GrpcGatewayRouteMetadata">GrpcGatewayRouteMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagrpcgatewayroutemetadata"></a>
<a id="schema_GrpcGatewayRouteMetadata"></a>
<a id="tocSgrpcgatewayroutemetadata"></a>
<a id="tocsgrpcgatewayroutemetadata"></a>

```json
{
  "invert": {},
  "match": {
    "exact": {},
    "prefix": {},
    "range": {
      "end": {},
      "start": {}
    },
    "regex": {},
    "suffix": {}
  },
  "name": {}
}
```

An object representing the metadata of the gateway route.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invert|object|false|none|none|
|match|object|false|none|none|
|name|object|true|none|none|

<h2 id="tocS_HeaderMatch">HeaderMatch</h2>
<!-- backwards compatibility -->
<a id="schemaheadermatch"></a>
<a id="schema_HeaderMatch"></a>
<a id="tocSheadermatch"></a>
<a id="tocsheadermatch"></a>

```json
"string"
```

<h2 id="tocS_MatchRange">MatchRange</h2>
<!-- backwards compatibility -->
<a id="schemamatchrange"></a>
<a id="schema_MatchRange"></a>
<a id="tocSmatchrange"></a>
<a id="tocsmatchrange"></a>

```json
{
  "end": {},
  "start": {}
}
```

An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|object|true|none|none|
|start|object|true|none|none|

<h2 id="tocS_GrpcRetryPolicyEvents">GrpcRetryPolicyEvents</h2>
<!-- backwards compatibility -->
<a id="schemagrpcretrypolicyevents"></a>
<a id="schema_GrpcRetryPolicyEvents"></a>
<a id="tocSgrpcretrypolicyevents"></a>
<a id="tocsgrpcretrypolicyevents"></a>

```json
[
  "cancelled"
]
```

<h2 id="tocS_HttpRetryPolicyEvents">HttpRetryPolicyEvents</h2>
<!-- backwards compatibility -->
<a id="schemahttpretrypolicyevents"></a>
<a id="schema_HttpRetryPolicyEvents"></a>
<a id="tocShttpretrypolicyevents"></a>
<a id="tocshttpretrypolicyevents"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MaxRetries">MaxRetries</h2>
<!-- backwards compatibility -->
<a id="schemamaxretries"></a>
<a id="schema_MaxRetries"></a>
<a id="tocSmaxretries"></a>
<a id="tocsmaxretries"></a>

```json
0
```

<h2 id="tocS_TcpRetryPolicyEvents">TcpRetryPolicyEvents</h2>
<!-- backwards compatibility -->
<a id="schematcpretrypolicyevents"></a>
<a id="schema_TcpRetryPolicyEvents"></a>
<a id="tocStcpretrypolicyevents"></a>
<a id="tocstcpretrypolicyevents"></a>

```json
[
  "connection-error"
]
```

<h2 id="tocS_GrpcRetryPolicy">GrpcRetryPolicy</h2>
<!-- backwards compatibility -->
<a id="schemagrpcretrypolicy"></a>
<a id="schema_GrpcRetryPolicy"></a>
<a id="tocSgrpcretrypolicy"></a>
<a id="tocsgrpcretrypolicy"></a>

```json
{
  "grpcRetryEvents": {},
  "httpRetryEvents": {},
  "maxRetries": {},
  "perRetryTimeout": {
    "unit": {},
    "value": {}
  },
  "tcpRetryEvents": {}
}
```

An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>. Both <code>server-error</code> and <code>gateway-error</code> under <code>httpRetryEvents</code> include the Envoy <code>reset</code> policy. For more information on the <code>reset</code> policy, see the <a href="https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-on">Envoy documentation</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grpcRetryEvents|object|false|none|none|
|httpRetryEvents|object|false|none|none|
|maxRetries|object|true|none|none|
|perRetryTimeout|object|true|none|none|
|tcpRetryEvents|object|false|none|none|

<h2 id="tocS_GrpcRetryPolicyEvent">GrpcRetryPolicyEvent</h2>
<!-- backwards compatibility -->
<a id="schemagrpcretrypolicyevent"></a>
<a id="schema_GrpcRetryPolicyEvent"></a>
<a id="tocSgrpcretrypolicyevent"></a>
<a id="tocsgrpcretrypolicyevent"></a>

```json
"cancelled"
```

<h2 id="tocS_GrpcRouteAction">GrpcRouteAction</h2>
<!-- backwards compatibility -->
<a id="schemagrpcrouteaction"></a>
<a id="schema_GrpcRouteAction"></a>
<a id="tocSgrpcrouteaction"></a>
<a id="tocsgrpcrouteaction"></a>

```json
{
  "weightedTargets": {}
}
```

An object that represents the action to take if a match is determined.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|weightedTargets|object|true|none|none|

<h2 id="tocS_GrpcRouteMatch">GrpcRouteMatch</h2>
<!-- backwards compatibility -->
<a id="schemagrpcroutematch"></a>
<a id="schema_GrpcRouteMatch"></a>
<a id="tocSgrpcroutematch"></a>
<a id="tocsgrpcroutematch"></a>

```json
{
  "metadata": {},
  "methodName": {},
  "port": {},
  "serviceName": {}
}
```

An object that represents the criteria for determining a request match.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|object|false|none|none|
|methodName|object|false|none|none|
|port|object|false|none|none|
|serviceName|object|false|none|none|

<h2 id="tocS_GrpcTimeout">GrpcTimeout</h2>
<!-- backwards compatibility -->
<a id="schemagrpctimeout"></a>
<a id="schema_GrpcTimeout"></a>
<a id="tocSgrpctimeout"></a>
<a id="tocsgrpctimeout"></a>

```json
{
  "idle": {
    "unit": {},
    "value": {}
  },
  "perRequest": {
    "unit": {},
    "value": {}
  }
}
```

An object that represents types of timeouts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idle|object|false|none|none|
|perRequest|object|false|none|none|

<h2 id="tocS_WeightedTargets">WeightedTargets</h2>
<!-- backwards compatibility -->
<a id="schemaweightedtargets"></a>
<a id="schema_WeightedTargets"></a>
<a id="tocSweightedtargets"></a>
<a id="tocsweightedtargets"></a>

```json
[
  {
    "port": {},
    "virtualNode": {},
    "weight": {}
  }
]
```

<h2 id="tocS_GrpcRouteMetadataList">GrpcRouteMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemagrpcroutemetadatalist"></a>
<a id="schema_GrpcRouteMetadataList"></a>
<a id="tocSgrpcroutemetadatalist"></a>
<a id="tocsgrpcroutemetadatalist"></a>

```json
[
  {
    "invert": {},
    "match": {
      "exact": {},
      "prefix": {},
      "range": {
        "end": {},
        "start": {}
      },
      "regex": {},
      "suffix": {}
    },
    "name": {}
  }
]
```

<h2 id="tocS_MethodName">MethodName</h2>
<!-- backwards compatibility -->
<a id="schemamethodname"></a>
<a id="schema_MethodName"></a>
<a id="tocSmethodname"></a>
<a id="tocsmethodname"></a>

```json
"string"
```

<h2 id="tocS_GrpcRouteMetadataMatchMethod">GrpcRouteMetadataMatchMethod</h2>
<!-- backwards compatibility -->
<a id="schemagrpcroutemetadatamatchmethod"></a>
<a id="schema_GrpcRouteMetadataMatchMethod"></a>
<a id="tocSgrpcroutemetadatamatchmethod"></a>
<a id="tocsgrpcroutemetadatamatchmethod"></a>

```json
{
  "exact": {},
  "prefix": {},
  "range": {
    "end": {},
    "start": {}
  },
  "regex": {},
  "suffix": {}
}
```

An object that represents the match method. Specify one of the match values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exact|object|false|none|none|
|prefix|object|false|none|none|
|range|object|false|none|none|
|regex|object|false|none|none|
|suffix|object|false|none|none|

<h2 id="tocS_GrpcRouteMetadata">GrpcRouteMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagrpcroutemetadata"></a>
<a id="schema_GrpcRouteMetadata"></a>
<a id="tocSgrpcroutemetadata"></a>
<a id="tocsgrpcroutemetadata"></a>

```json
{
  "invert": {},
  "match": {
    "exact": {},
    "prefix": {},
    "range": {
      "end": {},
      "start": {}
    },
    "regex": {},
    "suffix": {}
  },
  "name": {}
}
```

An object that represents the match metadata for the route.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invert|object|false|none|none|
|match|object|false|none|none|
|name|object|true|none|none|

<h2 id="tocS_HeaderMatchMethod">HeaderMatchMethod</h2>
<!-- backwards compatibility -->
<a id="schemaheadermatchmethod"></a>
<a id="schema_HeaderMatchMethod"></a>
<a id="tocSheadermatchmethod"></a>
<a id="tocsheadermatchmethod"></a>

```json
{
  "exact": {},
  "prefix": {},
  "range": {
    "end": {},
    "start": {}
  },
  "regex": {},
  "suffix": {}
}
```

An object that represents the method and value to match with the header value sent in a request. Specify one match method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exact|object|false|none|none|
|prefix|object|false|none|none|
|range|object|false|none|none|
|regex|object|false|none|none|
|suffix|object|false|none|none|

<h2 id="tocS_HealthCheckIntervalMillis">HealthCheckIntervalMillis</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckintervalmillis"></a>
<a id="schema_HealthCheckIntervalMillis"></a>
<a id="tocShealthcheckintervalmillis"></a>
<a id="tocshealthcheckintervalmillis"></a>

```json
5000
```

<h2 id="tocS_HealthCheckThreshold">HealthCheckThreshold</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckthreshold"></a>
<a id="schema_HealthCheckThreshold"></a>
<a id="tocShealthcheckthreshold"></a>
<a id="tocshealthcheckthreshold"></a>

```json
2
```

<h2 id="tocS_PortNumber">PortNumber</h2>
<!-- backwards compatibility -->
<a id="schemaportnumber"></a>
<a id="schema_PortNumber"></a>
<a id="tocSportnumber"></a>
<a id="tocsportnumber"></a>

```json
1
```

<h2 id="tocS_PortProtocol">PortProtocol</h2>
<!-- backwards compatibility -->
<a id="schemaportprotocol"></a>
<a id="schema_PortProtocol"></a>
<a id="tocSportprotocol"></a>
<a id="tocsportprotocol"></a>

```json
"http"
```

<h2 id="tocS_HealthCheckTimeoutMillis">HealthCheckTimeoutMillis</h2>
<!-- backwards compatibility -->
<a id="schemahealthchecktimeoutmillis"></a>
<a id="schema_HealthCheckTimeoutMillis"></a>
<a id="tocShealthchecktimeoutmillis"></a>
<a id="tocshealthchecktimeoutmillis"></a>

```json
2000
```

<h2 id="tocS_HealthCheckPolicy">HealthCheckPolicy</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckpolicy"></a>
<a id="schema_HealthCheckPolicy"></a>
<a id="tocShealthcheckpolicy"></a>
<a id="tocshealthcheckpolicy"></a>

```json
{
  "healthyThreshold": {},
  "intervalMillis": {},
  "path": {},
  "port": {},
  "protocol": {},
  "timeoutMillis": {},
  "unhealthyThreshold": {}
}
```

An object that represents the health check policy for a virtual node's listener.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|healthyThreshold|object|true|none|none|
|intervalMillis|object|true|none|none|
|path|object|false|none|none|
|port|object|false|none|none|
|protocol|object|true|none|none|
|timeoutMillis|object|true|none|none|
|unhealthyThreshold|object|true|none|none|

<h2 id="tocS_HttpGatewayRouteAction">HttpGatewayRouteAction</h2>
<!-- backwards compatibility -->
<a id="schemahttpgatewayrouteaction"></a>
<a id="schema_HttpGatewayRouteAction"></a>
<a id="tocShttpgatewayrouteaction"></a>
<a id="tocshttpgatewayrouteaction"></a>

```json
{
  "rewrite": {
    "hostname": {
      "defaultTargetHostname": {}
    },
    "path": {
      "exact": {}
    },
    "prefix": {
      "defaultPrefix": {},
      "value": {}
    }
  },
  "target": {
    "port": {},
    "virtualService": {
      "virtualServiceName": {}
    }
  }
}
```

An object that represents the action to take if a match is determined.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rewrite|object|false|none|none|
|target|object|true|none|none|

<h2 id="tocS_HttpGatewayRouteMatch">HttpGatewayRouteMatch</h2>
<!-- backwards compatibility -->
<a id="schemahttpgatewayroutematch"></a>
<a id="schema_HttpGatewayRouteMatch"></a>
<a id="tocShttpgatewayroutematch"></a>
<a id="tocshttpgatewayroutematch"></a>

```json
{
  "headers": {},
  "hostname": {
    "exact": {},
    "suffix": {}
  },
  "method": {},
  "path": {
    "exact": {},
    "regex": {}
  },
  "port": {},
  "prefix": {},
  "queryParameters": {}
}
```

An object that represents the criteria for determining a request match.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headers|object|false|none|none|
|hostname|object|false|none|none|
|method|object|false|none|none|
|path|object|false|none|none|
|port|object|false|none|none|
|prefix|object|false|none|none|
|queryParameters|object|false|none|none|

<h2 id="tocS_HttpGatewayRouteRewrite">HttpGatewayRouteRewrite</h2>
<!-- backwards compatibility -->
<a id="schemahttpgatewayrouterewrite"></a>
<a id="schema_HttpGatewayRouteRewrite"></a>
<a id="tocShttpgatewayrouterewrite"></a>
<a id="tocshttpgatewayrouterewrite"></a>

```json
{
  "hostname": {
    "defaultTargetHostname": {}
  },
  "path": {
    "exact": {}
  },
  "prefix": {
    "defaultPrefix": {},
    "value": {}
  }
}
```

An object representing the gateway route to rewrite.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostname|object|false|none|none|
|path|object|false|none|none|
|prefix|object|false|none|none|

<h2 id="tocS_HttpGatewayRouteHeader">HttpGatewayRouteHeader</h2>
<!-- backwards compatibility -->
<a id="schemahttpgatewayrouteheader"></a>
<a id="schema_HttpGatewayRouteHeader"></a>
<a id="tocShttpgatewayrouteheader"></a>
<a id="tocshttpgatewayrouteheader"></a>

```json
{
  "invert": {},
  "match": {
    "exact": {},
    "prefix": {},
    "range": {
      "end": {},
      "start": {}
    },
    "regex": {},
    "suffix": {}
  },
  "name": {}
}
```

An object that represents the HTTP header in the gateway route.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invert|object|false|none|none|
|match|object|false|none|none|
|name|object|true|none|none|

<h2 id="tocS_HttpGatewayRouteHeaders">HttpGatewayRouteHeaders</h2>
<!-- backwards compatibility -->
<a id="schemahttpgatewayrouteheaders"></a>
<a id="schema_HttpGatewayRouteHeaders"></a>
<a id="tocShttpgatewayrouteheaders"></a>
<a id="tocshttpgatewayrouteheaders"></a>

```json
[
  {
    "invert": {},
    "match": {
      "exact": {},
      "prefix": {},
      "range": {
        "end": {},
        "start": {}
      },
      "regex": {},
      "suffix": {}
    },
    "name": {}
  }
]
```

<h2 id="tocS_HttpMethod">HttpMethod</h2>
<!-- backwards compatibility -->
<a id="schemahttpmethod"></a>
<a id="schema_HttpMethod"></a>
<a id="tocShttpmethod"></a>
<a id="tocshttpmethod"></a>

```json
"GET"
```

<h2 id="tocS_HttpPathMatch">HttpPathMatch</h2>
<!-- backwards compatibility -->
<a id="schemahttppathmatch"></a>
<a id="schema_HttpPathMatch"></a>
<a id="tocShttppathmatch"></a>
<a id="tocshttppathmatch"></a>

```json
{
  "exact": {},
  "regex": {}
}
```

An object representing the path to match in the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exact|object|false|none|none|
|regex|object|false|none|none|

<h2 id="tocS_HttpQueryParameters">HttpQueryParameters</h2>
<!-- backwards compatibility -->
<a id="schemahttpqueryparameters"></a>
<a id="schema_HttpQueryParameters"></a>
<a id="tocShttpqueryparameters"></a>
<a id="tocshttpqueryparameters"></a>

```json
[
  {
    "match": {
      "exact": {}
    },
    "name": {}
  }
]
```

<h2 id="tocS_HttpPathExact">HttpPathExact</h2>
<!-- backwards compatibility -->
<a id="schemahttppathexact"></a>
<a id="schema_HttpPathExact"></a>
<a id="tocShttppathexact"></a>
<a id="tocshttppathexact"></a>

```json
"string"
```

<h2 id="tocS_HttpGatewayRoutePathRewrite">HttpGatewayRoutePathRewrite</h2>
<!-- backwards compatibility -->
<a id="schemahttpgatewayroutepathrewrite"></a>
<a id="schema_HttpGatewayRoutePathRewrite"></a>
<a id="tocShttpgatewayroutepathrewrite"></a>
<a id="tocshttpgatewayroutepathrewrite"></a>

```json
{
  "exact": {}
}
```

An object that represents the path to rewrite.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exact|object|false|none|none|

<h2 id="tocS_HttpGatewayRoutePrefix">HttpGatewayRoutePrefix</h2>
<!-- backwards compatibility -->
<a id="schemahttpgatewayrouteprefix"></a>
<a id="schema_HttpGatewayRoutePrefix"></a>
<a id="tocShttpgatewayrouteprefix"></a>
<a id="tocshttpgatewayrouteprefix"></a>

```json
"string"
```

<h2 id="tocS_HttpGatewayRoutePrefixRewrite">HttpGatewayRoutePrefixRewrite</h2>
<!-- backwards compatibility -->
<a id="schemahttpgatewayrouteprefixrewrite"></a>
<a id="schema_HttpGatewayRoutePrefixRewrite"></a>
<a id="tocShttpgatewayrouteprefixrewrite"></a>
<a id="tocshttpgatewayrouteprefixrewrite"></a>

```json
{
  "defaultPrefix": {},
  "value": {}
}
```

An object representing the beginning characters of the route to rewrite.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultPrefix|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_HttpPathRegex">HttpPathRegex</h2>
<!-- backwards compatibility -->
<a id="schemahttppathregex"></a>
<a id="schema_HttpPathRegex"></a>
<a id="tocShttppathregex"></a>
<a id="tocshttppathregex"></a>

```json
"string"
```

<h2 id="tocS_QueryParameterMatch">QueryParameterMatch</h2>
<!-- backwards compatibility -->
<a id="schemaqueryparametermatch"></a>
<a id="schema_QueryParameterMatch"></a>
<a id="tocSqueryparametermatch"></a>
<a id="tocsqueryparametermatch"></a>

```json
{
  "exact": {}
}
```

An object representing the query parameter to match.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exact|object|false|none|none|

<h2 id="tocS_QueryParameterName">QueryParameterName</h2>
<!-- backwards compatibility -->
<a id="schemaqueryparametername"></a>
<a id="schema_QueryParameterName"></a>
<a id="tocSqueryparametername"></a>
<a id="tocsqueryparametername"></a>

```json
"string"
```

<h2 id="tocS_HttpQueryParameter">HttpQueryParameter</h2>
<!-- backwards compatibility -->
<a id="schemahttpqueryparameter"></a>
<a id="schema_HttpQueryParameter"></a>
<a id="tocShttpqueryparameter"></a>
<a id="tocshttpqueryparameter"></a>

```json
{
  "match": {
    "exact": {}
  },
  "name": {}
}
```

An object that represents the query parameter in the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|match|object|false|none|none|
|name|object|true|none|none|

<h2 id="tocS_HttpRetryPolicy">HttpRetryPolicy</h2>
<!-- backwards compatibility -->
<a id="schemahttpretrypolicy"></a>
<a id="schema_HttpRetryPolicy"></a>
<a id="tocShttpretrypolicy"></a>
<a id="tocshttpretrypolicy"></a>

```json
{
  "httpRetryEvents": {},
  "maxRetries": {},
  "perRetryTimeout": {
    "unit": {},
    "value": {}
  },
  "tcpRetryEvents": {}
}
```

An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>. Both <code>server-error</code> and <code>gateway-error</code> under <code>httpRetryEvents</code> include the Envoy <code>reset</code> policy. For more information on the <code>reset</code> policy, see the <a href="https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-on">Envoy documentation</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|httpRetryEvents|object|false|none|none|
|maxRetries|object|true|none|none|
|perRetryTimeout|object|true|none|none|
|tcpRetryEvents|object|false|none|none|

<h2 id="tocS_HttpRetryPolicyEvent">HttpRetryPolicyEvent</h2>
<!-- backwards compatibility -->
<a id="schemahttpretrypolicyevent"></a>
<a id="schema_HttpRetryPolicyEvent"></a>
<a id="tocShttpretrypolicyevent"></a>
<a id="tocshttpretrypolicyevent"></a>

```json
"string"
```

<h2 id="tocS_HttpRouteAction">HttpRouteAction</h2>
<!-- backwards compatibility -->
<a id="schemahttprouteaction"></a>
<a id="schema_HttpRouteAction"></a>
<a id="tocShttprouteaction"></a>
<a id="tocshttprouteaction"></a>

```json
{
  "weightedTargets": {}
}
```

An object that represents the action to take if a match is determined.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|weightedTargets|object|true|none|none|

<h2 id="tocS_HttpRouteMatch">HttpRouteMatch</h2>
<!-- backwards compatibility -->
<a id="schemahttproutematch"></a>
<a id="schema_HttpRouteMatch"></a>
<a id="tocShttproutematch"></a>
<a id="tocshttproutematch"></a>

```json
{
  "headers": {},
  "method": {},
  "path": {
    "exact": {},
    "regex": {}
  },
  "port": {},
  "prefix": {},
  "queryParameters": {},
  "scheme": {}
}
```

An object that represents the requirements for a route to match HTTP requests for a virtual router.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headers|object|false|none|none|
|method|object|false|none|none|
|path|object|false|none|none|
|port|object|false|none|none|
|prefix|object|false|none|none|
|queryParameters|object|false|none|none|
|scheme|object|false|none|none|

<h2 id="tocS_HttpTimeout">HttpTimeout</h2>
<!-- backwards compatibility -->
<a id="schemahttptimeout"></a>
<a id="schema_HttpTimeout"></a>
<a id="tocShttptimeout"></a>
<a id="tocshttptimeout"></a>

```json
{
  "idle": {
    "unit": {},
    "value": {}
  },
  "perRequest": {
    "unit": {},
    "value": {}
  }
}
```

An object that represents types of timeouts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idle|object|false|none|none|
|perRequest|object|false|none|none|

<h2 id="tocS_HttpRouteHeader">HttpRouteHeader</h2>
<!-- backwards compatibility -->
<a id="schemahttprouteheader"></a>
<a id="schema_HttpRouteHeader"></a>
<a id="tocShttprouteheader"></a>
<a id="tocshttprouteheader"></a>

```json
{
  "invert": {},
  "match": {
    "exact": {},
    "prefix": {},
    "range": {
      "end": {},
      "start": {}
    },
    "regex": {},
    "suffix": {}
  },
  "name": {}
}
```

An object that represents the HTTP header in the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invert|object|false|none|none|
|match|object|false|none|none|
|name|object|true|none|none|

<h2 id="tocS_HttpRouteHeaders">HttpRouteHeaders</h2>
<!-- backwards compatibility -->
<a id="schemahttprouteheaders"></a>
<a id="schema_HttpRouteHeaders"></a>
<a id="tocShttprouteheaders"></a>
<a id="tocshttprouteheaders"></a>

```json
[
  {
    "invert": {},
    "match": {
      "exact": {},
      "prefix": {},
      "range": {
        "end": {},
        "start": {}
      },
      "regex": {},
      "suffix": {}
    },
    "name": {}
  }
]
```

<h2 id="tocS_HttpScheme">HttpScheme</h2>
<!-- backwards compatibility -->
<a id="schemahttpscheme"></a>
<a id="schema_HttpScheme"></a>
<a id="tocShttpscheme"></a>
<a id="tocshttpscheme"></a>

```json
"http"
```

<h2 id="tocS_JsonFormatRef">JsonFormatRef</h2>
<!-- backwards compatibility -->
<a id="schemajsonformatref"></a>
<a id="schema_JsonFormatRef"></a>
<a id="tocSjsonformatref"></a>
<a id="tocsjsonformatref"></a>

```json
{
  "key": {},
  "value": {}
}
```

An object that represents the key value pairs for the JSON.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_JsonFormat">JsonFormat</h2>
<!-- backwards compatibility -->
<a id="schemajsonformat"></a>
<a id="schema_JsonFormat"></a>
<a id="tocSjsonformat"></a>
<a id="tocsjsonformat"></a>

```json
[
  {
    "key": {},
    "value": {}
  }
]
```

<h2 id="tocS_JsonKey">JsonKey</h2>
<!-- backwards compatibility -->
<a id="schemajsonkey"></a>
<a id="schema_JsonKey"></a>
<a id="tocSjsonkey"></a>
<a id="tocsjsonkey"></a>

```json
"string"
```

<h2 id="tocS_JsonValue">JsonValue</h2>
<!-- backwards compatibility -->
<a id="schemajsonvalue"></a>
<a id="schema_JsonValue"></a>
<a id="tocSjsonvalue"></a>
<a id="tocsjsonvalue"></a>

```json
"string"
```

<h2 id="tocS_ListGatewayRoutesLimit">ListGatewayRoutesLimit</h2>
<!-- backwards compatibility -->
<a id="schemalistgatewayrouteslimit"></a>
<a id="schema_ListGatewayRoutesLimit"></a>
<a id="tocSlistgatewayrouteslimit"></a>
<a id="tocslistgatewayrouteslimit"></a>

```json
1
```

<h2 id="tocS_ListGatewayRoutesInput">ListGatewayRoutesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistgatewayroutesinput"></a>
<a id="schema_ListGatewayRoutesInput"></a>
<a id="tocSlistgatewayroutesinput"></a>
<a id="tocslistgatewayroutesinput"></a>

```json
{}
```

<h2 id="tocS_ListMeshesLimit">ListMeshesLimit</h2>
<!-- backwards compatibility -->
<a id="schemalistmesheslimit"></a>
<a id="schema_ListMeshesLimit"></a>
<a id="tocSlistmesheslimit"></a>
<a id="tocslistmesheslimit"></a>

```json
1
```

<h2 id="tocS_ListMeshesInput">ListMeshesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistmeshesinput"></a>
<a id="schema_ListMeshesInput"></a>
<a id="tocSlistmeshesinput"></a>
<a id="tocslistmeshesinput"></a>

```json
{}
```

<zonbook></zonbook><xhtml></xhtml>

<h2 id="tocS_MeshList">MeshList</h2>
<!-- backwards compatibility -->
<a id="schemameshlist"></a>
<a id="schema_MeshList"></a>
<a id="tocSmeshlist"></a>
<a id="tocsmeshlist"></a>

```json
[
  {
    "arn": {},
    "createdAt": {},
    "lastUpdatedAt": {},
    "meshName": {},
    "meshOwner": {},
    "resourceOwner": {},
    "version": {}
  }
]
```

<h2 id="tocS_ListRoutesLimit">ListRoutesLimit</h2>
<!-- backwards compatibility -->
<a id="schemalistrouteslimit"></a>
<a id="schema_ListRoutesLimit"></a>
<a id="tocSlistrouteslimit"></a>
<a id="tocslistrouteslimit"></a>

```json
1
```

<h2 id="tocS_ListRoutesInput">ListRoutesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistroutesinput"></a>
<a id="schema_ListRoutesInput"></a>
<a id="tocSlistroutesinput"></a>
<a id="tocslistroutesinput"></a>

```json
{}
```

<zonbook></zonbook><xhtml></xhtml>

<h2 id="tocS_RouteList">RouteList</h2>
<!-- backwards compatibility -->
<a id="schemaroutelist"></a>
<a id="schema_RouteList"></a>
<a id="tocSroutelist"></a>
<a id="tocsroutelist"></a>

```json
[
  {
    "arn": {},
    "createdAt": {},
    "lastUpdatedAt": {},
    "meshName": {},
    "meshOwner": {},
    "resourceOwner": {},
    "routeName": {},
    "version": {},
    "virtualRouterName": {}
  }
]
```

<h2 id="tocS_TagsLimit">TagsLimit</h2>
<!-- backwards compatibility -->
<a id="schematagslimit"></a>
<a id="schema_TagsLimit"></a>
<a id="tocStagslimit"></a>
<a id="tocstagslimit"></a>

```json
1
```

<h2 id="tocS_ListTagsForResourceInput">ListTagsForResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceinput"></a>
<a id="schema_ListTagsForResourceInput"></a>
<a id="tocSlisttagsforresourceinput"></a>
<a id="tocslisttagsforresourceinput"></a>

```json
{}
```

<zonbook></zonbook><xhtml></xhtml>

<h2 id="tocS_ListVirtualGatewaysLimit">ListVirtualGatewaysLimit</h2>
<!-- backwards compatibility -->
<a id="schemalistvirtualgatewayslimit"></a>
<a id="schema_ListVirtualGatewaysLimit"></a>
<a id="tocSlistvirtualgatewayslimit"></a>
<a id="tocslistvirtualgatewayslimit"></a>

```json
1
```

<h2 id="tocS_ListVirtualGatewaysInput">ListVirtualGatewaysInput</h2>
<!-- backwards compatibility -->
<a id="schemalistvirtualgatewaysinput"></a>
<a id="schema_ListVirtualGatewaysInput"></a>
<a id="tocSlistvirtualgatewaysinput"></a>
<a id="tocslistvirtualgatewaysinput"></a>

```json
{}
```

<h2 id="tocS_VirtualGatewayList">VirtualGatewayList</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewaylist"></a>
<a id="schema_VirtualGatewayList"></a>
<a id="tocSvirtualgatewaylist"></a>
<a id="tocsvirtualgatewaylist"></a>

```json
[
  {
    "arn": {},
    "createdAt": {},
    "lastUpdatedAt": {},
    "meshName": {},
    "meshOwner": {},
    "resourceOwner": {},
    "version": {},
    "virtualGatewayName": {}
  }
]
```

<h2 id="tocS_ListVirtualNodesLimit">ListVirtualNodesLimit</h2>
<!-- backwards compatibility -->
<a id="schemalistvirtualnodeslimit"></a>
<a id="schema_ListVirtualNodesLimit"></a>
<a id="tocSlistvirtualnodeslimit"></a>
<a id="tocslistvirtualnodeslimit"></a>

```json
1
```

<h2 id="tocS_ListVirtualNodesInput">ListVirtualNodesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistvirtualnodesinput"></a>
<a id="schema_ListVirtualNodesInput"></a>
<a id="tocSlistvirtualnodesinput"></a>
<a id="tocslistvirtualnodesinput"></a>

```json
{}
```

<zonbook></zonbook><xhtml></xhtml>

<h2 id="tocS_VirtualNodeList">VirtualNodeList</h2>
<!-- backwards compatibility -->
<a id="schemavirtualnodelist"></a>
<a id="schema_VirtualNodeList"></a>
<a id="tocSvirtualnodelist"></a>
<a id="tocsvirtualnodelist"></a>

```json
[
  {
    "arn": {},
    "createdAt": {},
    "lastUpdatedAt": {},
    "meshName": {},
    "meshOwner": {},
    "resourceOwner": {},
    "version": {},
    "virtualNodeName": {}
  }
]
```

<h2 id="tocS_ListVirtualRoutersLimit">ListVirtualRoutersLimit</h2>
<!-- backwards compatibility -->
<a id="schemalistvirtualrouterslimit"></a>
<a id="schema_ListVirtualRoutersLimit"></a>
<a id="tocSlistvirtualrouterslimit"></a>
<a id="tocslistvirtualrouterslimit"></a>

```json
1
```

<h2 id="tocS_ListVirtualRoutersInput">ListVirtualRoutersInput</h2>
<!-- backwards compatibility -->
<a id="schemalistvirtualroutersinput"></a>
<a id="schema_ListVirtualRoutersInput"></a>
<a id="tocSlistvirtualroutersinput"></a>
<a id="tocslistvirtualroutersinput"></a>

```json
{}
```

<zonbook></zonbook><xhtml></xhtml>

<h2 id="tocS_VirtualRouterList">VirtualRouterList</h2>
<!-- backwards compatibility -->
<a id="schemavirtualrouterlist"></a>
<a id="schema_VirtualRouterList"></a>
<a id="tocSvirtualrouterlist"></a>
<a id="tocsvirtualrouterlist"></a>

```json
[
  {
    "arn": {},
    "createdAt": {},
    "lastUpdatedAt": {},
    "meshName": {},
    "meshOwner": {},
    "resourceOwner": {},
    "version": {},
    "virtualRouterName": {}
  }
]
```

<h2 id="tocS_ListVirtualServicesLimit">ListVirtualServicesLimit</h2>
<!-- backwards compatibility -->
<a id="schemalistvirtualserviceslimit"></a>
<a id="schema_ListVirtualServicesLimit"></a>
<a id="tocSlistvirtualserviceslimit"></a>
<a id="tocslistvirtualserviceslimit"></a>

```json
1
```

<h2 id="tocS_ListVirtualServicesInput">ListVirtualServicesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistvirtualservicesinput"></a>
<a id="schema_ListVirtualServicesInput"></a>
<a id="tocSlistvirtualservicesinput"></a>
<a id="tocslistvirtualservicesinput"></a>

```json
{}
```

<zonbook></zonbook><xhtml></xhtml>

<h2 id="tocS_VirtualServiceList">VirtualServiceList</h2>
<!-- backwards compatibility -->
<a id="schemavirtualservicelist"></a>
<a id="schema_VirtualServiceList"></a>
<a id="tocSvirtualservicelist"></a>
<a id="tocsvirtualservicelist"></a>

```json
[
  {
    "arn": {},
    "createdAt": {},
    "lastUpdatedAt": {},
    "meshName": {},
    "meshOwner": {},
    "resourceOwner": {},
    "version": {},
    "virtualServiceName": {}
  }
]
```

<h2 id="tocS_VirtualNodeConnectionPool">VirtualNodeConnectionPool</h2>
<!-- backwards compatibility -->
<a id="schemavirtualnodeconnectionpool"></a>
<a id="schema_VirtualNodeConnectionPool"></a>
<a id="tocSvirtualnodeconnectionpool"></a>
<a id="tocsvirtualnodeconnectionpool"></a>

```json
{
  "grpc": {
    "maxRequests": {}
  },
  "http": {
    "maxConnections": {},
    "maxPendingRequests": {}
  },
  "http2": {
    "maxRequests": {}
  },
  "tcp": {
    "maxConnections": {}
  }
}
```

<p>An object that represents the type of virtual node connection pool.</p> <p>Only one protocol is used at a time and should be the same protocol as the one chosen under port mapping.</p> <p>If not present the default value for <code>maxPendingRequests</code> is <code>2147483647</code>.</p> <p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grpc|object|false|none|none|
|http|object|false|none|none|
|http2|object|false|none|none|
|tcp|object|false|none|none|

<h2 id="tocS_OutlierDetection">OutlierDetection</h2>
<!-- backwards compatibility -->
<a id="schemaoutlierdetection"></a>
<a id="schema_OutlierDetection"></a>
<a id="tocSoutlierdetection"></a>
<a id="tocsoutlierdetection"></a>

```json
{
  "baseEjectionDuration": {
    "unit": {},
    "value": {}
  },
  "interval": {
    "unit": {},
    "value": {}
  },
  "maxEjectionPercent": {},
  "maxServerErrors": {}
}
```

An object that represents the outlier detection for a virtual node's listener.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseEjectionDuration|object|true|none|none|
|interval|object|true|none|none|
|maxEjectionPercent|object|true|none|none|
|maxServerErrors|object|true|none|none|

<h2 id="tocS_PortMapping">PortMapping</h2>
<!-- backwards compatibility -->
<a id="schemaportmapping"></a>
<a id="schema_PortMapping"></a>
<a id="tocSportmapping"></a>
<a id="tocsportmapping"></a>

```json
{
  "port": {},
  "protocol": {}
}
```

An object that represents a port mapping.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|port|object|true|none|none|
|protocol|object|true|none|none|

<h2 id="tocS_ListenerTimeout">ListenerTimeout</h2>
<!-- backwards compatibility -->
<a id="schemalistenertimeout"></a>
<a id="schema_ListenerTimeout"></a>
<a id="tocSlistenertimeout"></a>
<a id="tocslistenertimeout"></a>

```json
{
  "grpc": {
    "idle": {
      "unit": {},
      "value": {}
    },
    "perRequest": {
      "unit": {},
      "value": {}
    }
  },
  "http": {
    "idle": {
      "unit": {},
      "value": {}
    },
    "perRequest": {
      "unit": {},
      "value": {}
    }
  },
  "http2": {
    "idle": {
      "unit": {},
      "value": {}
    },
    "perRequest": {
      "unit": {},
      "value": {}
    }
  },
  "tcp": {
    "idle": {
      "unit": {},
      "value": {}
    }
  }
}
```

An object that represents timeouts for different protocols.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grpc|object|false|none|none|
|http|object|false|none|none|
|http2|object|false|none|none|
|tcp|object|false|none|none|

<h2 id="tocS_ListenerTls">ListenerTls</h2>
<!-- backwards compatibility -->
<a id="schemalistenertls"></a>
<a id="schema_ListenerTls"></a>
<a id="tocSlistenertls"></a>
<a id="tocslistenertls"></a>

```json
{
  "certificate": {
    "acm": {
      "certificateArn": {}
    },
    "file": {
      "certificateChain": {},
      "privateKey": {}
    },
    "sds": {
      "secretName": {}
    }
  },
  "mode": {},
  "validation": {
    "subjectAlternativeNames": {
      "match": {
        "exact": {}
      }
    },
    "trust": {
      "file": {
        "certificateChain": {}
      },
      "sds": {
        "secretName": {}
      }
    }
  }
}
```

An object that represents the Transport Layer Security (TLS) properties for a listener.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificate|object|true|none|none|
|mode|object|true|none|none|
|validation|object|false|none|none|

<h2 id="tocS_Listener">Listener</h2>
<!-- backwards compatibility -->
<a id="schemalistener"></a>
<a id="schema_Listener"></a>
<a id="tocSlistener"></a>
<a id="tocslistener"></a>

```json
{
  "connectionPool": {
    "grpc": {
      "maxRequests": {}
    },
    "http": {
      "maxConnections": {},
      "maxPendingRequests": {}
    },
    "http2": {
      "maxRequests": {}
    },
    "tcp": {
      "maxConnections": {}
    }
  },
  "healthCheck": {
    "healthyThreshold": {},
    "intervalMillis": {},
    "path": {},
    "port": {},
    "protocol": {},
    "timeoutMillis": {},
    "unhealthyThreshold": {}
  },
  "outlierDetection": {
    "baseEjectionDuration": {
      "unit": {},
      "value": {}
    },
    "interval": {
      "unit": {},
      "value": {}
    },
    "maxEjectionPercent": {},
    "maxServerErrors": {}
  },
  "portMapping": {
    "port": {},
    "protocol": {}
  },
  "timeout": {
    "grpc": {
      "idle": {
        "unit": {},
        "value": {}
      },
      "perRequest": {
        "unit": {},
        "value": {}
      }
    },
    "http": {
      "idle": {
        "unit": {},
        "value": {}
      },
      "perRequest": {
        "unit": {},
        "value": {}
      }
    },
    "http2": {
      "idle": {
        "unit": {},
        "value": {}
      },
      "perRequest": {
        "unit": {},
        "value": {}
      }
    },
    "tcp": {
      "idle": {
        "unit": {},
        "value": {}
      }
    }
  },
  "tls": {
    "certificate": {
      "acm": {
        "certificateArn": {}
      },
      "file": {
        "certificateChain": {},
        "privateKey": {}
      },
      "sds": {
        "secretName": {}
      }
    },
    "mode": {},
    "validation": {
      "subjectAlternativeNames": {
        "match": {
          "exact": {}
        }
      },
      "trust": {
        "file": {
          "certificateChain": {}
        },
        "sds": {
          "secretName": {}
        }
      }
    }
  }
}
```

An object that represents a listener for a virtual node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionPool|object|false|none|none|
|healthCheck|object|false|none|none|
|outlierDetection|object|false|none|none|
|portMapping|object|true|none|none|
|timeout|object|false|none|none|
|tls|object|false|none|none|

<h2 id="tocS_TcpTimeout">TcpTimeout</h2>
<!-- backwards compatibility -->
<a id="schematcptimeout"></a>
<a id="schema_TcpTimeout"></a>
<a id="tocStcptimeout"></a>
<a id="tocstcptimeout"></a>

```json
{
  "idle": {
    "unit": {},
    "value": {}
  }
}
```

An object that represents types of timeouts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idle|object|false|none|none|

<h2 id="tocS_ListenerTlsCertificate">ListenerTlsCertificate</h2>
<!-- backwards compatibility -->
<a id="schemalistenertlscertificate"></a>
<a id="schema_ListenerTlsCertificate"></a>
<a id="tocSlistenertlscertificate"></a>
<a id="tocslistenertlscertificate"></a>

```json
{
  "acm": {
    "certificateArn": {}
  },
  "file": {
    "certificateChain": {},
    "privateKey": {}
  },
  "sds": {
    "secretName": {}
  }
}
```

An object that represents a listener's Transport Layer Security (TLS) certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acm|object|false|none|none|
|file|object|false|none|none|
|sds|object|false|none|none|

<h2 id="tocS_ListenerTlsMode">ListenerTlsMode</h2>
<!-- backwards compatibility -->
<a id="schemalistenertlsmode"></a>
<a id="schema_ListenerTlsMode"></a>
<a id="tocSlistenertlsmode"></a>
<a id="tocslistenertlsmode"></a>

```json
"STRICT"
```

<h2 id="tocS_ListenerTlsValidationContext">ListenerTlsValidationContext</h2>
<!-- backwards compatibility -->
<a id="schemalistenertlsvalidationcontext"></a>
<a id="schema_ListenerTlsValidationContext"></a>
<a id="tocSlistenertlsvalidationcontext"></a>
<a id="tocslistenertlsvalidationcontext"></a>

```json
{
  "subjectAlternativeNames": {
    "match": {
      "exact": {}
    }
  },
  "trust": {
    "file": {
      "certificateChain": {}
    },
    "sds": {
      "secretName": {}
    }
  }
}
```

An object that represents a listener's Transport Layer Security (TLS) validation context.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subjectAlternativeNames|object|false|none|none|
|trust|object|true|none|none|

<h2 id="tocS_ListenerTlsAcmCertificate">ListenerTlsAcmCertificate</h2>
<!-- backwards compatibility -->
<a id="schemalistenertlsacmcertificate"></a>
<a id="schema_ListenerTlsAcmCertificate"></a>
<a id="tocSlistenertlsacmcertificate"></a>
<a id="tocslistenertlsacmcertificate"></a>

```json
{
  "certificateArn": {}
}
```

An object that represents an Certificate Manager certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateArn|object|true|none|none|

<h2 id="tocS_SdsSecretName">SdsSecretName</h2>
<!-- backwards compatibility -->
<a id="schemasdssecretname"></a>
<a id="schema_SdsSecretName"></a>
<a id="tocSsdssecretname"></a>
<a id="tocssdssecretname"></a>

```json
"string"
```

<h2 id="tocS_SubjectAlternativeNames">SubjectAlternativeNames</h2>
<!-- backwards compatibility -->
<a id="schemasubjectalternativenames"></a>
<a id="schema_SubjectAlternativeNames"></a>
<a id="tocSsubjectalternativenames"></a>
<a id="tocssubjectalternativenames"></a>

```json
{
  "match": {
    "exact": {}
  }
}
```

An object that represents the subject alternative names secured by the certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|match|object|true|none|none|

<h2 id="tocS_ListenerTlsValidationContextTrust">ListenerTlsValidationContextTrust</h2>
<!-- backwards compatibility -->
<a id="schemalistenertlsvalidationcontexttrust"></a>
<a id="schema_ListenerTlsValidationContextTrust"></a>
<a id="tocSlistenertlsvalidationcontexttrust"></a>
<a id="tocslistenertlsvalidationcontexttrust"></a>

```json
{
  "file": {
    "certificateChain": {}
  },
  "sds": {
    "secretName": {}
  }
}
```

An object that represents a listener's Transport Layer Security (TLS) validation context trust.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|object|false|none|none|
|sds|object|false|none|none|

<h2 id="tocS_TlsValidationContextFileTrust">TlsValidationContextFileTrust</h2>
<!-- backwards compatibility -->
<a id="schematlsvalidationcontextfiletrust"></a>
<a id="schema_TlsValidationContextFileTrust"></a>
<a id="tocStlsvalidationcontextfiletrust"></a>
<a id="tocstlsvalidationcontextfiletrust"></a>

```json
{
  "certificateChain": {}
}
```

An object that represents a Transport Layer Security (TLS) validation context trust for a local file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateChain|object|true|none|none|

<h2 id="tocS_TlsValidationContextSdsTrust">TlsValidationContextSdsTrust</h2>
<!-- backwards compatibility -->
<a id="schematlsvalidationcontextsdstrust"></a>
<a id="schema_TlsValidationContextSdsTrust"></a>
<a id="tocStlsvalidationcontextsdstrust"></a>
<a id="tocstlsvalidationcontextsdstrust"></a>

```json
{
  "secretName": {}
}
```

An object that represents a Transport Layer Security (TLS) Secret Discovery Service validation context trust. The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS documentation</a> for more info.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|secretName|object|true|none|none|

<h2 id="tocS_TextFormat">TextFormat</h2>
<!-- backwards compatibility -->
<a id="schematextformat"></a>
<a id="schema_TextFormat"></a>
<a id="tocStextformat"></a>
<a id="tocstextformat"></a>

```json
"string"
```

<h2 id="tocS_MaxConnections">MaxConnections</h2>
<!-- backwards compatibility -->
<a id="schemamaxconnections"></a>
<a id="schema_MaxConnections"></a>
<a id="tocSmaxconnections"></a>
<a id="tocsmaxconnections"></a>

```json
1
```

<h2 id="tocS_MaxPendingRequests">MaxPendingRequests</h2>
<!-- backwards compatibility -->
<a id="schemamaxpendingrequests"></a>
<a id="schema_MaxPendingRequests"></a>
<a id="tocSmaxpendingrequests"></a>
<a id="tocsmaxpendingrequests"></a>

```json
1
```

<h2 id="tocS_MaxRequests">MaxRequests</h2>
<!-- backwards compatibility -->
<a id="schemamaxrequests"></a>
<a id="schema_MaxRequests"></a>
<a id="tocSmaxrequests"></a>
<a id="tocsmaxrequests"></a>

```json
1
```

<h2 id="tocS_MeshStatus">MeshStatus</h2>
<!-- backwards compatibility -->
<a id="schemameshstatus"></a>
<a id="schema_MeshStatus"></a>
<a id="tocSmeshstatus"></a>
<a id="tocsmeshstatus"></a>

```json
{
  "status": {}
}
```

An object that represents the status of a service mesh.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|

<h2 id="tocS_MeshRef">MeshRef</h2>
<!-- backwards compatibility -->
<a id="schemameshref"></a>
<a id="schema_MeshRef"></a>
<a id="tocSmeshref"></a>
<a id="tocsmeshref"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "lastUpdatedAt": {},
  "meshName": {},
  "meshOwner": {},
  "resourceOwner": {},
  "version": {}
}
```

An object that represents a service mesh returned by a list operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|createdAt|object|true|none|none|
|lastUpdatedAt|object|true|none|none|
|meshName|object|true|none|none|
|meshOwner|object|true|none|none|
|resourceOwner|object|true|none|none|
|version|object|true|none|none|

<h2 id="tocS_MeshStatusCode">MeshStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemameshstatuscode"></a>
<a id="schema_MeshStatusCode"></a>
<a id="tocSmeshstatuscode"></a>
<a id="tocsmeshstatuscode"></a>

```json
"ACTIVE"
```

<h2 id="tocS_OutlierDetectionMaxEjectionPercent">OutlierDetectionMaxEjectionPercent</h2>
<!-- backwards compatibility -->
<a id="schemaoutlierdetectionmaxejectionpercent"></a>
<a id="schema_OutlierDetectionMaxEjectionPercent"></a>
<a id="tocSoutlierdetectionmaxejectionpercent"></a>
<a id="tocsoutlierdetectionmaxejectionpercent"></a>

```json
0
```

<h2 id="tocS_OutlierDetectionMaxServerErrors">OutlierDetectionMaxServerErrors</h2>
<!-- backwards compatibility -->
<a id="schemaoutlierdetectionmaxservererrors"></a>
<a id="schema_OutlierDetectionMaxServerErrors"></a>
<a id="tocSoutlierdetectionmaxservererrors"></a>
<a id="tocsoutlierdetectionmaxservererrors"></a>

```json
1
```

<h2 id="tocS_PercentInt">PercentInt</h2>
<!-- backwards compatibility -->
<a id="schemapercentint"></a>
<a id="schema_PercentInt"></a>
<a id="tocSpercentint"></a>
<a id="tocspercentint"></a>

```json
0
```

<h2 id="tocS_RouteStatus">RouteStatus</h2>
<!-- backwards compatibility -->
<a id="schemaroutestatus"></a>
<a id="schema_RouteStatus"></a>
<a id="tocSroutestatus"></a>
<a id="tocsroutestatus"></a>

```json
{
  "status": {}
}
```

An object that represents the current status of a route.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|true|none|none|

<h2 id="tocS_RouteRef">RouteRef</h2>
<!-- backwards compatibility -->
<a id="schemarouteref"></a>
<a id="schema_RouteRef"></a>
<a id="tocSrouteref"></a>
<a id="tocsrouteref"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "lastUpdatedAt": {},
  "meshName": {},
  "meshOwner": {},
  "resourceOwner": {},
  "routeName": {},
  "version": {},
  "virtualRouterName": {}
}
```

An object that represents a route returned by a list operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|createdAt|object|true|none|none|
|lastUpdatedAt|object|true|none|none|
|meshName|object|true|none|none|
|meshOwner|object|true|none|none|
|resourceOwner|object|true|none|none|
|routeName|object|true|none|none|
|version|object|true|none|none|
|virtualRouterName|object|true|none|none|

<h2 id="tocS_RouteStatusCode">RouteStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemaroutestatuscode"></a>
<a id="schema_RouteStatusCode"></a>
<a id="tocSroutestatuscode"></a>
<a id="tocsroutestatuscode"></a>

```json
"ACTIVE"
```

<h2 id="tocS_SubjectAlternativeName">SubjectAlternativeName</h2>
<!-- backwards compatibility -->
<a id="schemasubjectalternativename"></a>
<a id="schema_SubjectAlternativeName"></a>
<a id="tocSsubjectalternativename"></a>
<a id="tocssubjectalternativename"></a>

```json
"string"
```

<h2 id="tocS_SubjectAlternativeNameList">SubjectAlternativeNameList</h2>
<!-- backwards compatibility -->
<a id="schemasubjectalternativenamelist"></a>
<a id="schema_SubjectAlternativeNameList"></a>
<a id="tocSsubjectalternativenamelist"></a>
<a id="tocssubjectalternativenamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SubjectAlternativeNameMatchers">SubjectAlternativeNameMatchers</h2>
<!-- backwards compatibility -->
<a id="schemasubjectalternativenamematchers"></a>
<a id="schema_SubjectAlternativeNameMatchers"></a>
<a id="tocSsubjectalternativenamematchers"></a>
<a id="tocssubjectalternativenamematchers"></a>

```json
{
  "exact": {}
}
```

An object that represents the methods by which a subject alternative name on a peer Transport Layer Security (TLS) certificate can be matched.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exact|object|true|none|none|

<h2 id="tocS_TagKeyList">TagKeyList</h2>
<!-- backwards compatibility -->
<a id="schematagkeylist"></a>
<a id="schema_TagKeyList"></a>
<a id="tocStagkeylist"></a>
<a id="tocstagkeylist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_TagResourceInput">TagResourceInput</h2>
<!-- backwards compatibility -->
<a id="schematagresourceinput"></a>
<a id="schema_TagResourceInput"></a>
<a id="tocStagresourceinput"></a>
<a id="tocstagresourceinput"></a>

```json
{
  "tags": {}
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|true|none|none|

<h2 id="tocS_TcpRetryPolicyEvent">TcpRetryPolicyEvent</h2>
<!-- backwards compatibility -->
<a id="schematcpretrypolicyevent"></a>
<a id="schema_TcpRetryPolicyEvent"></a>
<a id="tocStcpretrypolicyevent"></a>
<a id="tocstcpretrypolicyevent"></a>

```json
"connection-error"
```

<h2 id="tocS_TcpRouteAction">TcpRouteAction</h2>
<!-- backwards compatibility -->
<a id="schematcprouteaction"></a>
<a id="schema_TcpRouteAction"></a>
<a id="tocStcprouteaction"></a>
<a id="tocstcprouteaction"></a>

```json
{
  "weightedTargets": {}
}
```

An object that represents the action to take if a match is determined.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|weightedTargets|object|true|none|none|

<h2 id="tocS_TcpRouteMatch">TcpRouteMatch</h2>
<!-- backwards compatibility -->
<a id="schematcproutematch"></a>
<a id="schema_TcpRouteMatch"></a>
<a id="tocStcproutematch"></a>
<a id="tocstcproutematch"></a>

```json
{
  "port": {}
}
```

An object representing the TCP route to match.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|port|object|false|none|none|

<h2 id="tocS_TlsValidationContextTrust">TlsValidationContextTrust</h2>
<!-- backwards compatibility -->
<a id="schematlsvalidationcontexttrust"></a>
<a id="schema_TlsValidationContextTrust"></a>
<a id="tocStlsvalidationcontexttrust"></a>
<a id="tocstlsvalidationcontexttrust"></a>

```json
{
  "acm": {
    "certificateAuthorityArns": {}
  },
  "file": {
    "certificateChain": {}
  },
  "sds": {
    "secretName": {}
  }
}
```

An object that represents a Transport Layer Security (TLS) validation context trust.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acm|object|false|none|none|
|file|object|false|none|none|
|sds|object|false|none|none|

<h2 id="tocS_TlsValidationContextAcmTrust">TlsValidationContextAcmTrust</h2>
<!-- backwards compatibility -->
<a id="schematlsvalidationcontextacmtrust"></a>
<a id="schema_TlsValidationContextAcmTrust"></a>
<a id="tocStlsvalidationcontextacmtrust"></a>
<a id="tocstlsvalidationcontextacmtrust"></a>

```json
{
  "certificateAuthorityArns": {}
}
```

An object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateAuthorityArns|object|true|none|none|

<h2 id="tocS_UntagResourceInput">UntagResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceinput"></a>
<a id="schema_UntagResourceInput"></a>
<a id="tocSuntagresourceinput"></a>
<a id="tocsuntagresourceinput"></a>

```json
{
  "tagKeys": {}
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tagKeys|object|true|none|none|

<h2 id="tocS_UpdateGatewayRouteInput">UpdateGatewayRouteInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdategatewayrouteinput"></a>
<a id="schema_UpdateGatewayRouteInput"></a>
<a id="tocSupdategatewayrouteinput"></a>
<a id="tocsupdategatewayrouteinput"></a>

```json
{
  "clientToken": {},
  "spec": {
    "grpcRoute": {
      "action": {
        "rewrite": {
          "hostname": {
            "defaultTargetHostname": {}
          }
        },
        "target": {
          "port": {},
          "virtualService": {
            "virtualServiceName": {}
          }
        }
      },
      "match": {
        "hostname": {
          "exact": {},
          "suffix": {}
        },
        "metadata": {},
        "port": {},
        "serviceName": {}
      }
    },
    "http2Route": {
      "action": {
        "rewrite": {
          "hostname": {
            "defaultTargetHostname": {}
          },
          "path": {
            "exact": {}
          },
          "prefix": {
            "defaultPrefix": {},
            "value": {}
          }
        },
        "target": {
          "port": {},
          "virtualService": {
            "virtualServiceName": {}
          }
        }
      },
      "match": {
        "headers": {},
        "hostname": {
          "exact": {},
          "suffix": {}
        },
        "method": {},
        "path": {
          "exact": {},
          "regex": {}
        },
        "port": {},
        "prefix": {},
        "queryParameters": {}
      }
    },
    "httpRoute": {
      "action": {
        "rewrite": {
          "hostname": {
            "defaultTargetHostname": {}
          },
          "path": {
            "exact": {}
          },
          "prefix": {
            "defaultPrefix": {},
            "value": {}
          }
        },
        "target": {
          "port": {},
          "virtualService": {
            "virtualServiceName": {}
          }
        }
      },
      "match": {
        "headers": {},
        "hostname": {
          "exact": {},
          "suffix": {}
        },
        "method": {},
        "path": {
          "exact": {},
          "regex": {}
        },
        "port": {},
        "prefix": {},
        "queryParameters": {}
      }
    },
    "priority": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|spec|object|true|none|none|

<h2 id="tocS_UpdateMeshInput">UpdateMeshInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemeshinput"></a>
<a id="schema_UpdateMeshInput"></a>
<a id="tocSupdatemeshinput"></a>
<a id="tocsupdatemeshinput"></a>

```json
{
  "clientToken": {},
  "spec": {
    "egressFilter": {
      "type": {}
    },
    "serviceDiscovery": {
      "ipPreference": {}
    }
  }
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|spec|object|false|none|none|

<h2 id="tocS_UpdateRouteInput">UpdateRouteInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterouteinput"></a>
<a id="schema_UpdateRouteInput"></a>
<a id="tocSupdaterouteinput"></a>
<a id="tocsupdaterouteinput"></a>

```json
{
  "clientToken": {},
  "spec": {
    "grpcRoute": {
      "action": {
        "weightedTargets": {}
      },
      "match": {
        "metadata": {},
        "methodName": {},
        "port": {},
        "serviceName": {}
      },
      "retryPolicy": {
        "grpcRetryEvents": {},
        "httpRetryEvents": {},
        "maxRetries": {},
        "perRetryTimeout": {
          "unit": {},
          "value": {}
        },
        "tcpRetryEvents": {}
      },
      "timeout": {
        "idle": {
          "unit": {},
          "value": {}
        },
        "perRequest": {
          "unit": {},
          "value": {}
        }
      }
    },
    "http2Route": {
      "action": {
        "weightedTargets": {}
      },
      "match": {
        "headers": {},
        "method": {},
        "path": {
          "exact": {},
          "regex": {}
        },
        "port": {},
        "prefix": {},
        "queryParameters": {},
        "scheme": {}
      },
      "retryPolicy": {
        "httpRetryEvents": {},
        "maxRetries": {},
        "perRetryTimeout": {
          "unit": {},
          "value": {}
        },
        "tcpRetryEvents": {}
      },
      "timeout": {
        "idle": {
          "unit": {},
          "value": {}
        },
        "perRequest": {
          "unit": {},
          "value": {}
        }
      }
    },
    "httpRoute": {
      "action": {
        "weightedTargets": {}
      },
      "match": {
        "headers": {},
        "method": {},
        "path": {
          "exact": {},
          "regex": {}
        },
        "port": {},
        "prefix": {},
        "queryParameters": {},
        "scheme": {}
      },
      "retryPolicy": {
        "httpRetryEvents": {},
        "maxRetries": {},
        "perRetryTimeout": {
          "unit": {},
          "value": {}
        },
        "tcpRetryEvents": {}
      },
      "timeout": {
        "idle": {
          "unit": {},
          "value": {}
        },
        "perRequest": {
          "unit": {},
          "value": {}
        }
      }
    },
    "priority": {},
    "tcpRoute": {
      "action": {
        "weightedTargets": {}
      },
      "match": {
        "port": {}
      },
      "timeout": {
        "idle": {
          "unit": {},
          "value": {}
        }
      }
    }
  }
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|spec|object|true|none|none|

<h2 id="tocS_UpdateVirtualGatewayInput">UpdateVirtualGatewayInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevirtualgatewayinput"></a>
<a id="schema_UpdateVirtualGatewayInput"></a>
<a id="tocSupdatevirtualgatewayinput"></a>
<a id="tocsupdatevirtualgatewayinput"></a>

```json
{
  "clientToken": {},
  "spec": {
    "backendDefaults": {
      "clientPolicy": {
        "tls": {
          "certificate": {
            "file": {
              "certificateChain": {},
              "privateKey": {}
            },
            "sds": {
              "secretName": {}
            }
          },
          "enforce": {},
          "ports": {},
          "validation": {
            "subjectAlternativeNames": {
              "match": {
                "exact": {}
              }
            },
            "trust": {
              "acm": {
                "certificateAuthorityArns": {}
              },
              "file": {
                "certificateChain": {}
              },
              "sds": {
                "secretName": {}
              }
            }
          }
        }
      }
    },
    "listeners": {},
    "logging": {
      "accessLog": {
        "file": {
          "format": {
            "json": {},
            "text": {}
          },
          "path": {}
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|spec|object|true|none|none|

<h2 id="tocS_UpdateVirtualNodeInput">UpdateVirtualNodeInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevirtualnodeinput"></a>
<a id="schema_UpdateVirtualNodeInput"></a>
<a id="tocSupdatevirtualnodeinput"></a>
<a id="tocsupdatevirtualnodeinput"></a>

```json
{
  "clientToken": {},
  "spec": {
    "backendDefaults": {
      "clientPolicy": {
        "tls": {
          "certificate": {
            "file": {
              "certificateChain": {},
              "privateKey": {}
            },
            "sds": {
              "secretName": {}
            }
          },
          "enforce": {},
          "ports": {},
          "validation": {
            "subjectAlternativeNames": {
              "match": {
                "exact": {}
              }
            },
            "trust": {
              "acm": {
                "certificateAuthorityArns": {}
              },
              "file": {
                "certificateChain": {}
              },
              "sds": {
                "secretName": {}
              }
            }
          }
        }
      }
    },
    "backends": {},
    "listeners": {},
    "logging": {
      "accessLog": {
        "file": {
          "format": {
            "json": {},
            "text": {}
          },
          "path": {}
        }
      }
    },
    "serviceDiscovery": {
      "awsCloudMap": {
        "attributes": {},
        "ipPreference": {},
        "namespaceName": {},
        "serviceName": {}
      },
      "dns": {
        "hostname": {},
        "ipPreference": {},
        "responseType": {}
      }
    }
  }
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|spec|object|true|none|none|

<h2 id="tocS_UpdateVirtualRouterInput">UpdateVirtualRouterInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevirtualrouterinput"></a>
<a id="schema_UpdateVirtualRouterInput"></a>
<a id="tocSupdatevirtualrouterinput"></a>
<a id="tocsupdatevirtualrouterinput"></a>

```json
{
  "clientToken": {},
  "spec": {
    "listeners": {}
  }
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|spec|object|true|none|none|

<h2 id="tocS_UpdateVirtualServiceInput">UpdateVirtualServiceInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevirtualserviceinput"></a>
<a id="schema_UpdateVirtualServiceInput"></a>
<a id="tocSupdatevirtualserviceinput"></a>
<a id="tocsupdatevirtualserviceinput"></a>

```json
{
  "clientToken": {},
  "spec": {
    "provider": {
      "virtualNode": {
        "virtualNodeName": {}
      },
      "virtualRouter": {
        "virtualRouterName": {}
      }
    }
  }
}
```

<zonbook></zonbook><xhtml></xhtml>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|spec|object|true|none|none|

<h2 id="tocS_VirtualGatewayFileAccessLog">VirtualGatewayFileAccessLog</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewayfileaccesslog"></a>
<a id="schema_VirtualGatewayFileAccessLog"></a>
<a id="tocSvirtualgatewayfileaccesslog"></a>
<a id="tocsvirtualgatewayfileaccesslog"></a>

```json
{
  "format": {
    "json": {},
    "text": {}
  },
  "path": {}
}
```

An object that represents an access log file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|object|false|none|none|
|path|object|true|none|none|

<h2 id="tocS_VirtualGatewayAccessLog">VirtualGatewayAccessLog</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewayaccesslog"></a>
<a id="schema_VirtualGatewayAccessLog"></a>
<a id="tocSvirtualgatewayaccesslog"></a>
<a id="tocsvirtualgatewayaccesslog"></a>

```json
{
  "file": {
    "format": {
      "json": {},
      "text": {}
    },
    "path": {}
  }
}
```

The access log configuration for a virtual gateway.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|object|false|none|none|

<h2 id="tocS_VirtualGatewayClientPolicy">VirtualGatewayClientPolicy</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewayclientpolicy"></a>
<a id="schema_VirtualGatewayClientPolicy"></a>
<a id="tocSvirtualgatewayclientpolicy"></a>
<a id="tocsvirtualgatewayclientpolicy"></a>

```json
{
  "tls": {
    "certificate": {
      "file": {
        "certificateChain": {},
        "privateKey": {}
      },
      "sds": {
        "secretName": {}
      }
    },
    "enforce": {},
    "ports": {},
    "validation": {
      "subjectAlternativeNames": {
        "match": {
          "exact": {}
        }
      },
      "trust": {
        "acm": {
          "certificateAuthorityArns": {}
        },
        "file": {
          "certificateChain": {}
        },
        "sds": {
          "secretName": {}
        }
      }
    }
  }
}
```

An object that represents a client policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tls|object|false|none|none|

<h2 id="tocS_VirtualGatewayCertificateAuthorityArns">VirtualGatewayCertificateAuthorityArns</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewaycertificateauthorityarns"></a>
<a id="schema_VirtualGatewayCertificateAuthorityArns"></a>
<a id="tocSvirtualgatewaycertificateauthorityarns"></a>
<a id="tocsvirtualgatewaycertificateauthorityarns"></a>

```json
[
  "string"
]
```

<h2 id="tocS_VirtualGatewayClientPolicyTls">VirtualGatewayClientPolicyTls</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewayclientpolicytls"></a>
<a id="schema_VirtualGatewayClientPolicyTls"></a>
<a id="tocSvirtualgatewayclientpolicytls"></a>
<a id="tocsvirtualgatewayclientpolicytls"></a>

```json
{
  "certificate": {
    "file": {
      "certificateChain": {},
      "privateKey": {}
    },
    "sds": {
      "secretName": {}
    }
  },
  "enforce": {},
  "ports": {},
  "validation": {
    "subjectAlternativeNames": {
      "match": {
        "exact": {}
      }
    },
    "trust": {
      "acm": {
        "certificateAuthorityArns": {}
      },
      "file": {
        "certificateChain": {}
      },
      "sds": {
        "secretName": {}
      }
    }
  }
}
```

An object that represents a Transport Layer Security (TLS) client policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificate|object|false|none|none|
|enforce|object|false|none|none|
|ports|object|false|none|none|
|validation|object|true|none|none|

<h2 id="tocS_VirtualGatewayClientTlsCertificate">VirtualGatewayClientTlsCertificate</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewayclienttlscertificate"></a>
<a id="schema_VirtualGatewayClientTlsCertificate"></a>
<a id="tocSvirtualgatewayclienttlscertificate"></a>
<a id="tocsvirtualgatewayclienttlscertificate"></a>

```json
{
  "file": {
    "certificateChain": {},
    "privateKey": {}
  },
  "sds": {
    "secretName": {}
  }
}
```

An object that represents the virtual gateway's client's Transport Layer Security (TLS) certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|object|false|none|none|
|sds|object|false|none|none|

<h2 id="tocS_VirtualGatewayTlsValidationContext">VirtualGatewayTlsValidationContext</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewaytlsvalidationcontext"></a>
<a id="schema_VirtualGatewayTlsValidationContext"></a>
<a id="tocSvirtualgatewaytlsvalidationcontext"></a>
<a id="tocsvirtualgatewaytlsvalidationcontext"></a>

```json
{
  "subjectAlternativeNames": {
    "match": {
      "exact": {}
    }
  },
  "trust": {
    "acm": {
      "certificateAuthorityArns": {}
    },
    "file": {
      "certificateChain": {}
    },
    "sds": {
      "secretName": {}
    }
  }
}
```

An object that represents a Transport Layer Security (TLS) validation context.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subjectAlternativeNames|object|false|none|none|
|trust|object|true|none|none|

<h2 id="tocS_VirtualGatewayListenerTlsFileCertificate">VirtualGatewayListenerTlsFileCertificate</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewaylistenertlsfilecertificate"></a>
<a id="schema_VirtualGatewayListenerTlsFileCertificate"></a>
<a id="tocSvirtualgatewaylistenertlsfilecertificate"></a>
<a id="tocsvirtualgatewaylistenertlsfilecertificate"></a>

```json
{
  "certificateChain": {},
  "privateKey": {}
}
```

An object that represents a local file certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateChain|object|true|none|none|
|privateKey|object|true|none|none|

<h2 id="tocS_VirtualGatewayListenerTlsSdsCertificate">VirtualGatewayListenerTlsSdsCertificate</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewaylistenertlssdscertificate"></a>
<a id="schema_VirtualGatewayListenerTlsSdsCertificate"></a>
<a id="tocSvirtualgatewaylistenertlssdscertificate"></a>
<a id="tocsvirtualgatewaylistenertlssdscertificate"></a>

```json
{
  "secretName": {}
}
```

An object that represents the virtual gateway's listener's Secret Discovery Service certificate.The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh<a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS documentation</a> for more info.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|secretName|object|true|none|none|

<h2 id="tocS_VirtualGatewayGrpcConnectionPool">VirtualGatewayGrpcConnectionPool</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewaygrpcconnectionpool"></a>
<a id="schema_VirtualGatewayGrpcConnectionPool"></a>
<a id="tocSvirtualgatewaygrpcconnectionpool"></a>
<a id="tocsvirtualgatewaygrpcconnectionpool"></a>

```json
{
  "maxRequests": {}
}
```

An object that represents a type of connection pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxRequests|object|true|none|none|

<h2 id="tocS_VirtualGatewayHttpConnectionPool">VirtualGatewayHttpConnectionPool</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewayhttpconnectionpool"></a>
<a id="schema_VirtualGatewayHttpConnectionPool"></a>
<a id="tocSvirtualgatewayhttpconnectionpool"></a>
<a id="tocsvirtualgatewayhttpconnectionpool"></a>

```json
{
  "maxConnections": {},
  "maxPendingRequests": {}
}
```

An object that represents a type of connection pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxConnections|object|true|none|none|
|maxPendingRequests|object|false|none|none|

<h2 id="tocS_VirtualGatewayHttp2ConnectionPool">VirtualGatewayHttp2ConnectionPool</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewayhttp2connectionpool"></a>
<a id="schema_VirtualGatewayHttp2ConnectionPool"></a>
<a id="tocSvirtualgatewayhttp2connectionpool"></a>
<a id="tocsvirtualgatewayhttp2connectionpool"></a>

```json
{
  "maxRequests": {}
}
```

An object that represents a type of connection pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxRequests|object|true|none|none|

<h2 id="tocS_VirtualGatewayConnectionPool">VirtualGatewayConnectionPool</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewayconnectionpool"></a>
<a id="schema_VirtualGatewayConnectionPool"></a>
<a id="tocSvirtualgatewayconnectionpool"></a>
<a id="tocsvirtualgatewayconnectionpool"></a>

```json
{
  "grpc": {
    "maxRequests": {}
  },
  "http": {
    "maxConnections": {},
    "maxPendingRequests": {}
  },
  "http2": {
    "maxRequests": {}
  }
}
```

<p>An object that represents the type of virtual gateway connection pool.</p> <p>Only one protocol is used at a time and should be the same protocol as the one chosen under port mapping.</p> <p>If not present the default value for <code>maxPendingRequests</code> is <code>2147483647</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grpc|object|false|none|none|
|http|object|false|none|none|
|http2|object|false|none|none|

<h2 id="tocS_VirtualGatewayStatus">VirtualGatewayStatus</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewaystatus"></a>
<a id="schema_VirtualGatewayStatus"></a>
<a id="tocSvirtualgatewaystatus"></a>
<a id="tocsvirtualgatewaystatus"></a>

```json
{
  "status": {}
}
```

An object that represents the status of the mesh resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|true|none|none|

<h2 id="tocS_VirtualGatewayHealthCheckIntervalMillis">VirtualGatewayHealthCheckIntervalMillis</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewayhealthcheckintervalmillis"></a>
<a id="schema_VirtualGatewayHealthCheckIntervalMillis"></a>
<a id="tocSvirtualgatewayhealthcheckintervalmillis"></a>
<a id="tocsvirtualgatewayhealthcheckintervalmillis"></a>

```json
5000
```

<h2 id="tocS_VirtualGatewayHealthCheckThreshold">VirtualGatewayHealthCheckThreshold</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewayhealthcheckthreshold"></a>
<a id="schema_VirtualGatewayHealthCheckThreshold"></a>
<a id="tocSvirtualgatewayhealthcheckthreshold"></a>
<a id="tocsvirtualgatewayhealthcheckthreshold"></a>

```json
2
```

<h2 id="tocS_VirtualGatewayPortProtocol">VirtualGatewayPortProtocol</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewayportprotocol"></a>
<a id="schema_VirtualGatewayPortProtocol"></a>
<a id="tocSvirtualgatewayportprotocol"></a>
<a id="tocsvirtualgatewayportprotocol"></a>

```json
"http"
```

<h2 id="tocS_VirtualGatewayHealthCheckTimeoutMillis">VirtualGatewayHealthCheckTimeoutMillis</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewayhealthchecktimeoutmillis"></a>
<a id="schema_VirtualGatewayHealthCheckTimeoutMillis"></a>
<a id="tocSvirtualgatewayhealthchecktimeoutmillis"></a>
<a id="tocsvirtualgatewayhealthchecktimeoutmillis"></a>

```json
2000
```

<h2 id="tocS_VirtualGatewayHealthCheckPolicy">VirtualGatewayHealthCheckPolicy</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewayhealthcheckpolicy"></a>
<a id="schema_VirtualGatewayHealthCheckPolicy"></a>
<a id="tocSvirtualgatewayhealthcheckpolicy"></a>
<a id="tocsvirtualgatewayhealthcheckpolicy"></a>

```json
{
  "healthyThreshold": {},
  "intervalMillis": {},
  "path": {},
  "port": {},
  "protocol": {},
  "timeoutMillis": {},
  "unhealthyThreshold": {}
}
```

An object that represents the health check policy for a virtual gateway's listener.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|healthyThreshold|object|true|none|none|
|intervalMillis|object|true|none|none|
|path|object|false|none|none|
|port|object|false|none|none|
|protocol|object|true|none|none|
|timeoutMillis|object|true|none|none|
|unhealthyThreshold|object|true|none|none|

<h2 id="tocS_VirtualGatewayRef">VirtualGatewayRef</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewayref"></a>
<a id="schema_VirtualGatewayRef"></a>
<a id="tocSvirtualgatewayref"></a>
<a id="tocsvirtualgatewayref"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "lastUpdatedAt": {},
  "meshName": {},
  "meshOwner": {},
  "resourceOwner": {},
  "version": {},
  "virtualGatewayName": {}
}
```

An object that represents a virtual gateway returned by a list operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|createdAt|object|true|none|none|
|lastUpdatedAt|object|true|none|none|
|meshName|object|true|none|none|
|meshOwner|object|true|none|none|
|resourceOwner|object|true|none|none|
|version|object|true|none|none|
|virtualGatewayName|object|true|none|none|

<h2 id="tocS_VirtualGatewayPortMapping">VirtualGatewayPortMapping</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewayportmapping"></a>
<a id="schema_VirtualGatewayPortMapping"></a>
<a id="tocSvirtualgatewayportmapping"></a>
<a id="tocsvirtualgatewayportmapping"></a>

```json
{
  "port": {},
  "protocol": {}
}
```

An object that represents a port mapping.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|port|object|true|none|none|
|protocol|object|true|none|none|

<h2 id="tocS_VirtualGatewayListenerTls">VirtualGatewayListenerTls</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewaylistenertls"></a>
<a id="schema_VirtualGatewayListenerTls"></a>
<a id="tocSvirtualgatewaylistenertls"></a>
<a id="tocsvirtualgatewaylistenertls"></a>

```json
{
  "certificate": {
    "acm": {
      "certificateArn": {}
    },
    "file": {
      "certificateChain": {},
      "privateKey": {}
    },
    "sds": {
      "secretName": {}
    }
  },
  "mode": {},
  "validation": {
    "subjectAlternativeNames": {
      "match": {
        "exact": {}
      }
    },
    "trust": {
      "file": {
        "certificateChain": {}
      },
      "sds": {
        "secretName": {}
      }
    }
  }
}
```

An object that represents the Transport Layer Security (TLS) properties for a listener.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificate|object|true|none|none|
|mode|object|true|none|none|
|validation|object|false|none|none|

<h2 id="tocS_VirtualGatewayListener">VirtualGatewayListener</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewaylistener"></a>
<a id="schema_VirtualGatewayListener"></a>
<a id="tocSvirtualgatewaylistener"></a>
<a id="tocsvirtualgatewaylistener"></a>

```json
{
  "connectionPool": {
    "grpc": {
      "maxRequests": {}
    },
    "http": {
      "maxConnections": {},
      "maxPendingRequests": {}
    },
    "http2": {
      "maxRequests": {}
    }
  },
  "healthCheck": {
    "healthyThreshold": {},
    "intervalMillis": {},
    "path": {},
    "port": {},
    "protocol": {},
    "timeoutMillis": {},
    "unhealthyThreshold": {}
  },
  "portMapping": {
    "port": {},
    "protocol": {}
  },
  "tls": {
    "certificate": {
      "acm": {
        "certificateArn": {}
      },
      "file": {
        "certificateChain": {},
        "privateKey": {}
      },
      "sds": {
        "secretName": {}
      }
    },
    "mode": {},
    "validation": {
      "subjectAlternativeNames": {
        "match": {
          "exact": {}
        }
      },
      "trust": {
        "file": {
          "certificateChain": {}
        },
        "sds": {
          "secretName": {}
        }
      }
    }
  }
}
```

An object that represents a listener for a virtual gateway.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionPool|object|false|none|none|
|healthCheck|object|false|none|none|
|portMapping|object|true|none|none|
|tls|object|false|none|none|

<h2 id="tocS_VirtualGatewayListenerTlsCertificate">VirtualGatewayListenerTlsCertificate</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewaylistenertlscertificate"></a>
<a id="schema_VirtualGatewayListenerTlsCertificate"></a>
<a id="tocSvirtualgatewaylistenertlscertificate"></a>
<a id="tocsvirtualgatewaylistenertlscertificate"></a>

```json
{
  "acm": {
    "certificateArn": {}
  },
  "file": {
    "certificateChain": {},
    "privateKey": {}
  },
  "sds": {
    "secretName": {}
  }
}
```

An object that represents a listener's Transport Layer Security (TLS) certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acm|object|false|none|none|
|file|object|false|none|none|
|sds|object|false|none|none|

<h2 id="tocS_VirtualGatewayListenerTlsMode">VirtualGatewayListenerTlsMode</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewaylistenertlsmode"></a>
<a id="schema_VirtualGatewayListenerTlsMode"></a>
<a id="tocSvirtualgatewaylistenertlsmode"></a>
<a id="tocsvirtualgatewaylistenertlsmode"></a>

```json
"STRICT"
```

<h2 id="tocS_VirtualGatewayListenerTlsValidationContext">VirtualGatewayListenerTlsValidationContext</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewaylistenertlsvalidationcontext"></a>
<a id="schema_VirtualGatewayListenerTlsValidationContext"></a>
<a id="tocSvirtualgatewaylistenertlsvalidationcontext"></a>
<a id="tocsvirtualgatewaylistenertlsvalidationcontext"></a>

```json
{
  "subjectAlternativeNames": {
    "match": {
      "exact": {}
    }
  },
  "trust": {
    "file": {
      "certificateChain": {}
    },
    "sds": {
      "secretName": {}
    }
  }
}
```

An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subjectAlternativeNames|object|false|none|none|
|trust|object|true|none|none|

<h2 id="tocS_VirtualGatewayListenerTlsAcmCertificate">VirtualGatewayListenerTlsAcmCertificate</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewaylistenertlsacmcertificate"></a>
<a id="schema_VirtualGatewayListenerTlsAcmCertificate"></a>
<a id="tocSvirtualgatewaylistenertlsacmcertificate"></a>
<a id="tocsvirtualgatewaylistenertlsacmcertificate"></a>

```json
{
  "certificateArn": {}
}
```

An object that represents an Certificate Manager certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateArn|object|true|none|none|

<h2 id="tocS_VirtualGatewaySdsSecretName">VirtualGatewaySdsSecretName</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewaysdssecretname"></a>
<a id="schema_VirtualGatewaySdsSecretName"></a>
<a id="tocSvirtualgatewaysdssecretname"></a>
<a id="tocsvirtualgatewaysdssecretname"></a>

```json
"string"
```

<h2 id="tocS_VirtualGatewayListenerTlsValidationContextTrust">VirtualGatewayListenerTlsValidationContextTrust</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewaylistenertlsvalidationcontexttrust"></a>
<a id="schema_VirtualGatewayListenerTlsValidationContextTrust"></a>
<a id="tocSvirtualgatewaylistenertlsvalidationcontexttrust"></a>
<a id="tocsvirtualgatewaylistenertlsvalidationcontexttrust"></a>

```json
{
  "file": {
    "certificateChain": {}
  },
  "sds": {
    "secretName": {}
  }
}
```

An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context trust.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|object|false|none|none|
|sds|object|false|none|none|

<h2 id="tocS_VirtualGatewayTlsValidationContextFileTrust">VirtualGatewayTlsValidationContextFileTrust</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewaytlsvalidationcontextfiletrust"></a>
<a id="schema_VirtualGatewayTlsValidationContextFileTrust"></a>
<a id="tocSvirtualgatewaytlsvalidationcontextfiletrust"></a>
<a id="tocsvirtualgatewaytlsvalidationcontextfiletrust"></a>

```json
{
  "certificateChain": {}
}
```

An object that represents a Transport Layer Security (TLS) validation context trust for a local file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateChain|object|true|none|none|

<h2 id="tocS_VirtualGatewayTlsValidationContextSdsTrust">VirtualGatewayTlsValidationContextSdsTrust</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewaytlsvalidationcontextsdstrust"></a>
<a id="schema_VirtualGatewayTlsValidationContextSdsTrust"></a>
<a id="tocSvirtualgatewaytlsvalidationcontextsdstrust"></a>
<a id="tocsvirtualgatewaytlsvalidationcontextsdstrust"></a>

```json
{
  "secretName": {}
}
```

An object that represents a virtual gateway's listener's Transport Layer Security (TLS) Secret Discovery Service validation context trust. The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS documentation</a> for more info.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|secretName|object|true|none|none|

<h2 id="tocS_VirtualGatewayStatusCode">VirtualGatewayStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewaystatuscode"></a>
<a id="schema_VirtualGatewayStatusCode"></a>
<a id="tocSvirtualgatewaystatuscode"></a>
<a id="tocsvirtualgatewaystatuscode"></a>

```json
"ACTIVE"
```

<h2 id="tocS_VirtualGatewayTlsValidationContextTrust">VirtualGatewayTlsValidationContextTrust</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewaytlsvalidationcontexttrust"></a>
<a id="schema_VirtualGatewayTlsValidationContextTrust"></a>
<a id="tocSvirtualgatewaytlsvalidationcontexttrust"></a>
<a id="tocsvirtualgatewaytlsvalidationcontexttrust"></a>

```json
{
  "acm": {
    "certificateAuthorityArns": {}
  },
  "file": {
    "certificateChain": {}
  },
  "sds": {
    "secretName": {}
  }
}
```

An object that represents a Transport Layer Security (TLS) validation context trust.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acm|object|false|none|none|
|file|object|false|none|none|
|sds|object|false|none|none|

<h2 id="tocS_VirtualGatewayTlsValidationContextAcmTrust">VirtualGatewayTlsValidationContextAcmTrust</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewaytlsvalidationcontextacmtrust"></a>
<a id="schema_VirtualGatewayTlsValidationContextAcmTrust"></a>
<a id="tocSvirtualgatewaytlsvalidationcontextacmtrust"></a>
<a id="tocsvirtualgatewaytlsvalidationcontextacmtrust"></a>

```json
{
  "certificateAuthorityArns": {}
}
```

An object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateAuthorityArns|object|true|none|none|

<h2 id="tocS_VirtualNodeGrpcConnectionPool">VirtualNodeGrpcConnectionPool</h2>
<!-- backwards compatibility -->
<a id="schemavirtualnodegrpcconnectionpool"></a>
<a id="schema_VirtualNodeGrpcConnectionPool"></a>
<a id="tocSvirtualnodegrpcconnectionpool"></a>
<a id="tocsvirtualnodegrpcconnectionpool"></a>

```json
{
  "maxRequests": {}
}
```

An object that represents a type of connection pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxRequests|object|true|none|none|

<h2 id="tocS_VirtualNodeHttpConnectionPool">VirtualNodeHttpConnectionPool</h2>
<!-- backwards compatibility -->
<a id="schemavirtualnodehttpconnectionpool"></a>
<a id="schema_VirtualNodeHttpConnectionPool"></a>
<a id="tocSvirtualnodehttpconnectionpool"></a>
<a id="tocsvirtualnodehttpconnectionpool"></a>

```json
{
  "maxConnections": {},
  "maxPendingRequests": {}
}
```

An object that represents a type of connection pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxConnections|object|true|none|none|
|maxPendingRequests|object|false|none|none|

<h2 id="tocS_VirtualNodeHttp2ConnectionPool">VirtualNodeHttp2ConnectionPool</h2>
<!-- backwards compatibility -->
<a id="schemavirtualnodehttp2connectionpool"></a>
<a id="schema_VirtualNodeHttp2ConnectionPool"></a>
<a id="tocSvirtualnodehttp2connectionpool"></a>
<a id="tocsvirtualnodehttp2connectionpool"></a>

```json
{
  "maxRequests": {}
}
```

An object that represents a type of connection pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxRequests|object|true|none|none|

<h2 id="tocS_VirtualNodeTcpConnectionPool">VirtualNodeTcpConnectionPool</h2>
<!-- backwards compatibility -->
<a id="schemavirtualnodetcpconnectionpool"></a>
<a id="schema_VirtualNodeTcpConnectionPool"></a>
<a id="tocSvirtualnodetcpconnectionpool"></a>
<a id="tocsvirtualnodetcpconnectionpool"></a>

```json
{
  "maxConnections": {}
}
```

An object that represents a type of connection pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxConnections|object|true|none|none|

<h2 id="tocS_VirtualNodeStatus">VirtualNodeStatus</h2>
<!-- backwards compatibility -->
<a id="schemavirtualnodestatus"></a>
<a id="schema_VirtualNodeStatus"></a>
<a id="tocSvirtualnodestatus"></a>
<a id="tocsvirtualnodestatus"></a>

```json
{
  "status": {}
}
```

An object that represents the current status of the virtual node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|true|none|none|

<h2 id="tocS_VirtualNodeRef">VirtualNodeRef</h2>
<!-- backwards compatibility -->
<a id="schemavirtualnoderef"></a>
<a id="schema_VirtualNodeRef"></a>
<a id="tocSvirtualnoderef"></a>
<a id="tocsvirtualnoderef"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "lastUpdatedAt": {},
  "meshName": {},
  "meshOwner": {},
  "resourceOwner": {},
  "version": {},
  "virtualNodeName": {}
}
```

An object that represents a virtual node returned by a list operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|createdAt|object|true|none|none|
|lastUpdatedAt|object|true|none|none|
|meshName|object|true|none|none|
|meshOwner|object|true|none|none|
|resourceOwner|object|true|none|none|
|version|object|true|none|none|
|virtualNodeName|object|true|none|none|

<h2 id="tocS_VirtualNodeServiceProvider">VirtualNodeServiceProvider</h2>
<!-- backwards compatibility -->
<a id="schemavirtualnodeserviceprovider"></a>
<a id="schema_VirtualNodeServiceProvider"></a>
<a id="tocSvirtualnodeserviceprovider"></a>
<a id="tocsvirtualnodeserviceprovider"></a>

```json
{
  "virtualNodeName": {}
}
```

An object that represents a virtual node service provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualNodeName|object|true|none|none|

<h2 id="tocS_VirtualNodeStatusCode">VirtualNodeStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemavirtualnodestatuscode"></a>
<a id="schema_VirtualNodeStatusCode"></a>
<a id="tocSvirtualnodestatuscode"></a>
<a id="tocsvirtualnodestatuscode"></a>

```json
"ACTIVE"
```

<h2 id="tocS_VirtualRouterStatus">VirtualRouterStatus</h2>
<!-- backwards compatibility -->
<a id="schemavirtualrouterstatus"></a>
<a id="schema_VirtualRouterStatus"></a>
<a id="tocSvirtualrouterstatus"></a>
<a id="tocsvirtualrouterstatus"></a>

```json
{
  "status": {}
}
```

An object that represents the status of a virtual router.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|true|none|none|

<h2 id="tocS_VirtualRouterRef">VirtualRouterRef</h2>
<!-- backwards compatibility -->
<a id="schemavirtualrouterref"></a>
<a id="schema_VirtualRouterRef"></a>
<a id="tocSvirtualrouterref"></a>
<a id="tocsvirtualrouterref"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "lastUpdatedAt": {},
  "meshName": {},
  "meshOwner": {},
  "resourceOwner": {},
  "version": {},
  "virtualRouterName": {}
}
```

An object that represents a virtual router returned by a list operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|createdAt|object|true|none|none|
|lastUpdatedAt|object|true|none|none|
|meshName|object|true|none|none|
|meshOwner|object|true|none|none|
|resourceOwner|object|true|none|none|
|version|object|true|none|none|
|virtualRouterName|object|true|none|none|

<h2 id="tocS_VirtualRouterListener">VirtualRouterListener</h2>
<!-- backwards compatibility -->
<a id="schemavirtualrouterlistener"></a>
<a id="schema_VirtualRouterListener"></a>
<a id="tocSvirtualrouterlistener"></a>
<a id="tocsvirtualrouterlistener"></a>

```json
{
  "portMapping": {
    "port": {},
    "protocol": {}
  }
}
```

An object that represents a virtual router listener.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portMapping|[PortMapping](#schemaportmapping)|true|none|An object that represents a port mapping.|

<h2 id="tocS_VirtualRouterServiceProvider">VirtualRouterServiceProvider</h2>
<!-- backwards compatibility -->
<a id="schemavirtualrouterserviceprovider"></a>
<a id="schema_VirtualRouterServiceProvider"></a>
<a id="tocSvirtualrouterserviceprovider"></a>
<a id="tocsvirtualrouterserviceprovider"></a>

```json
{
  "virtualRouterName": {}
}
```

An object that represents a virtual node service provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualRouterName|object|true|none|none|

<h2 id="tocS_VirtualRouterStatusCode">VirtualRouterStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemavirtualrouterstatuscode"></a>
<a id="schema_VirtualRouterStatusCode"></a>
<a id="tocSvirtualrouterstatuscode"></a>
<a id="tocsvirtualrouterstatuscode"></a>

```json
"ACTIVE"
```

<h2 id="tocS_VirtualServiceStatus">VirtualServiceStatus</h2>
<!-- backwards compatibility -->
<a id="schemavirtualservicestatus"></a>
<a id="schema_VirtualServiceStatus"></a>
<a id="tocSvirtualservicestatus"></a>
<a id="tocsvirtualservicestatus"></a>

```json
{
  "status": {}
}
```

An object that represents the status of a virtual service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|true|none|none|

<h2 id="tocS_VirtualServiceRef">VirtualServiceRef</h2>
<!-- backwards compatibility -->
<a id="schemavirtualserviceref"></a>
<a id="schema_VirtualServiceRef"></a>
<a id="tocSvirtualserviceref"></a>
<a id="tocsvirtualserviceref"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "lastUpdatedAt": {},
  "meshName": {},
  "meshOwner": {},
  "resourceOwner": {},
  "version": {},
  "virtualServiceName": {}
}
```

An object that represents a virtual service returned by a list operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|createdAt|object|true|none|none|
|lastUpdatedAt|object|true|none|none|
|meshName|object|true|none|none|
|meshOwner|object|true|none|none|
|resourceOwner|object|true|none|none|
|version|object|true|none|none|
|virtualServiceName|object|true|none|none|

<h2 id="tocS_VirtualServiceStatusCode">VirtualServiceStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemavirtualservicestatuscode"></a>
<a id="schema_VirtualServiceStatusCode"></a>
<a id="tocSvirtualservicestatuscode"></a>
<a id="tocsvirtualservicestatuscode"></a>

```json
"ACTIVE"
```

<h2 id="tocS_WeightedTarget">WeightedTarget</h2>
<!-- backwards compatibility -->
<a id="schemaweightedtarget"></a>
<a id="schema_WeightedTarget"></a>
<a id="tocSweightedtarget"></a>
<a id="tocsweightedtarget"></a>

```json
{
  "port": {},
  "virtualNode": {},
  "weight": {}
}
```

An object that represents a target and its relative weight. Traffic is distributed across targets according to their relative weight. For example, a weighted target with a relative weight of 50 receives five times as much traffic as one with a relative weight of 10. The total weight for all targets combined must be less than or equal to 100.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|port|object|false|none|none|
|virtualNode|object|true|none|none|
|weight|object|true|none|none|
