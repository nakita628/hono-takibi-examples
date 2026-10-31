<h1 id="traffic-director-api">Traffic Director API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://trafficdirector.googleapis.com/">https://trafficdirector.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/traffic-director">External documentation</a>

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

<h1 id="traffic-director-api-discovery">discovery</h1>

## trafficdirector.discovery.client_status

<a id="opIdtrafficdirector.discovery.client_status"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/discovery:client_status \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "nodeMatchers": [
      {
        "nodeId": {
          "exact": "string",
          "ignoreCase": true,
          "prefix": "string",
          "regex": "string",
          "safeRegex": {
            "googleRe2": {
              "maxProgramSize": 0
            },
            "regex": "string"
          },
          "suffix": "string"
        },
        "nodeMetadatas": [
          {
            "path": [
              {
                "key": "string"
              }
            ],
            "value": {
              "boolMatch": true,
              "doubleMatch": {
                "exact": 0,
                "range": {
                  "end": 0,
                  "start": 0
                }
              },
              "listMatch": {},
              "nullMatch": {},
              "presentMatch": true,
              "stringMatch": {
                "exact": "string",
                "ignoreCase": true,
                "prefix": "string",
                "regex": "string",
                "safeRegex": {
                  "googleRe2": {
                    "maxProgramSize": 0
                  },
                  "regex": "string"
                },
                "suffix": "string"
              }
            }
          }
        ]
      }
    ]
  }'
```

`POST /v2/discovery:client_status`

> Body parameter

```json
{
  "nodeMatchers": [
    {
      "nodeId": {
        "exact": "string",
        "ignoreCase": true,
        "prefix": "string",
        "regex": "string",
        "safeRegex": {
          "googleRe2": {
            "maxProgramSize": 0
          },
          "regex": "string"
        },
        "suffix": "string"
      },
      "nodeMetadatas": [
        {
          "path": [
            {
              "key": "string"
            }
          ],
          "value": {
            "boolMatch": true,
            "doubleMatch": {
              "exact": 0,
              "range": {
                "end": 0,
                "start": 0
              }
            },
            "listMatch": {},
            "nullMatch": {},
            "presentMatch": true,
            "stringMatch": {
              "exact": "string",
              "ignoreCase": true,
              "prefix": "string",
              "regex": "string",
              "safeRegex": {
                "googleRe2": {
                  "maxProgramSize": 0
                },
                "regex": "string"
              },
              "suffix": "string"
            }
          }
        }
      ]
    }
  ]
}
```

<h3 id="trafficdirectordiscoveryclientstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[ClientStatusRequest](#schemaclientstatusrequest)|false|none|
|» nodeMatchers|body|[[NodeMatcher](#schemanodematcher)]|false|Management server can use these match criteria to identify clients. The match follows OR semantics.|

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
  "config": [
    {
      "node": {
        "buildVersion": "string",
        "clientFeatures": [
          "string"
        ],
        "cluster": "string",
        "extensions": [
          {
            "category": "string",
            "disabled": true,
            "name": "string",
            "typeDescriptor": "string",
            "version": {
              "metadata": {
                "property1": null,
                "property2": null
              },
              "version": {
                "majorNumber": 0,
                "minorNumber": 0,
                "patch": 0
              }
            }
          }
        ],
        "id": "string",
        "listeningAddresses": [
          {
            "pipe": {
              "mode": 0,
              "path": "string"
            },
            "socketAddress": {
              "address": "string",
              "ipv4Compat": true,
              "namedPort": "string",
              "portValue": 0,
              "protocol": "TCP",
              "resolverName": "string"
            }
          }
        ],
        "locality": {
          "region": "string",
          "subZone": "string",
          "zone": "string"
        },
        "metadata": {
          "property1": null,
          "property2": null
        },
        "userAgentBuildVersion": {
          "metadata": {
            "property1": null,
            "property2": null
          },
          "version": {
            "majorNumber": 0,
            "minorNumber": 0,
            "patch": 0
          }
        },
        "userAgentName": "string",
        "userAgentVersion": "string"
      },
      "xdsConfig": [
        {
          "clusterConfig": {
            "dynamicActiveClusters": [
              {
                "cluster": {
                  "property1": null,
                  "property2": null
                },
                "lastUpdated": "string",
                "versionInfo": "string"
              }
            ],
            "dynamicWarmingClusters": [
              {
                "cluster": {
                  "property1": null,
                  "property2": null
                },
                "lastUpdated": "string",
                "versionInfo": "string"
              }
            ],
            "staticClusters": [
              {
                "cluster": {
                  "property1": null,
                  "property2": null
                },
                "lastUpdated": "string"
              }
            ],
            "versionInfo": "string"
          },
          "listenerConfig": {
            "dynamicListeners": [
              {
                "activeState": {
                  "lastUpdated": "string",
                  "listener": {
                    "property1": null,
                    "property2": null
                  },
                  "versionInfo": "string"
                },
                "drainingState": {
                  "lastUpdated": "string",
                  "listener": {
                    "property1": null,
                    "property2": null
                  },
                  "versionInfo": "string"
                },
                "errorState": {
                  "details": "string",
                  "failedConfiguration": {
                    "property1": null,
                    "property2": null
                  },
                  "lastUpdateAttempt": "string"
                },
                "name": "string",
                "warmingState": {
                  "lastUpdated": "string",
                  "listener": {
                    "property1": null,
                    "property2": null
                  },
                  "versionInfo": "string"
                }
              }
            ],
            "staticListeners": [
              {
                "lastUpdated": "string",
                "listener": {
                  "property1": null,
                  "property2": null
                }
              }
            ],
            "versionInfo": "string"
          },
          "routeConfig": {
            "dynamicRouteConfigs": [
              {
                "lastUpdated": "string",
                "routeConfig": {
                  "property1": null,
                  "property2": null
                },
                "versionInfo": "string"
              }
            ],
            "staticRouteConfigs": [
              {
                "lastUpdated": "string",
                "routeConfig": {
                  "property1": null,
                  "property2": null
                }
              }
            ]
          },
          "scopedRouteConfig": {
            "dynamicScopedRouteConfigs": [
              {
                "lastUpdated": "string",
                "name": "string",
                "scopedRouteConfigs": [
                  {
                    "property1": null,
                    "property2": null
                  }
                ],
                "versionInfo": "string"
              }
            ],
            "inlineScopedRouteConfigs": [
              {
                "lastUpdated": "string",
                "name": "string",
                "scopedRouteConfigs": [
                  {
                    "property1": null,
                    "property2": null
                  }
                ]
              }
            ]
          },
          "status": "UNKNOWN"
        }
      ]
    }
  ]
}
```

<h3 id="trafficdirectordiscoveryclientstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ClientStatusResponse](#schemaclientstatusresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "pipe": {
    "mode": 0,
    "path": "string"
  },
  "socketAddress": {
    "address": "string",
    "ipv4Compat": true,
    "namedPort": "string",
    "portValue": 0,
    "protocol": "TCP",
    "resolverName": "string"
  }
}
```

Addresses specify either a logical or physical address and port, which are used to tell Envoy where to bind/listen, connect to upstream and find management servers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipe|[Pipe](#schemapipe)|false|none|none|
|socketAddress|[SocketAddress](#schemasocketaddress)|false|none|[#next-free-field: 7]|

<h2 id="tocS_BuildVersion">BuildVersion</h2>
<!-- backwards compatibility -->
<a id="schemabuildversion"></a>
<a id="schema_BuildVersion"></a>
<a id="tocSbuildversion"></a>
<a id="tocsbuildversion"></a>

```json
{
  "metadata": {
    "property1": null,
    "property2": null
  },
  "version": {
    "majorNumber": 0,
    "minorNumber": 0,
    "patch": 0
  }
}
```

BuildVersion combines SemVer version of extension with free-form build information (i.e. 'alpha', 'private-build') as a set of strings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|object|false|none|Free-form build information. Envoy defines several well known keys in the source/common/version/version.h file|
|version|[SemanticVersion](#schemasemanticversion)|false|none|SemVer version of extension.|

<h2 id="tocS_ClientConfig">ClientConfig</h2>
<!-- backwards compatibility -->
<a id="schemaclientconfig"></a>
<a id="schema_ClientConfig"></a>
<a id="tocSclientconfig"></a>
<a id="tocsclientconfig"></a>

```json
{
  "node": {
    "buildVersion": "string",
    "clientFeatures": [
      "string"
    ],
    "cluster": "string",
    "extensions": [
      {
        "category": "string",
        "disabled": true,
        "name": "string",
        "typeDescriptor": "string",
        "version": {
          "metadata": {
            "property1": null,
            "property2": null
          },
          "version": {
            "majorNumber": 0,
            "minorNumber": 0,
            "patch": 0
          }
        }
      }
    ],
    "id": "string",
    "listeningAddresses": [
      {
        "pipe": {
          "mode": 0,
          "path": "string"
        },
        "socketAddress": {
          "address": "string",
          "ipv4Compat": true,
          "namedPort": "string",
          "portValue": 0,
          "protocol": "TCP",
          "resolverName": "string"
        }
      }
    ],
    "locality": {
      "region": "string",
      "subZone": "string",
      "zone": "string"
    },
    "metadata": {
      "property1": null,
      "property2": null
    },
    "userAgentBuildVersion": {
      "metadata": {
        "property1": null,
        "property2": null
      },
      "version": {
        "majorNumber": 0,
        "minorNumber": 0,
        "patch": 0
      }
    },
    "userAgentName": "string",
    "userAgentVersion": "string"
  },
  "xdsConfig": [
    {
      "clusterConfig": {
        "dynamicActiveClusters": [
          {
            "cluster": {
              "property1": null,
              "property2": null
            },
            "lastUpdated": "string",
            "versionInfo": "string"
          }
        ],
        "dynamicWarmingClusters": [
          {
            "cluster": {
              "property1": null,
              "property2": null
            },
            "lastUpdated": "string",
            "versionInfo": "string"
          }
        ],
        "staticClusters": [
          {
            "cluster": {
              "property1": null,
              "property2": null
            },
            "lastUpdated": "string"
          }
        ],
        "versionInfo": "string"
      },
      "listenerConfig": {
        "dynamicListeners": [
          {
            "activeState": {
              "lastUpdated": "string",
              "listener": {
                "property1": null,
                "property2": null
              },
              "versionInfo": "string"
            },
            "drainingState": {
              "lastUpdated": "string",
              "listener": {
                "property1": null,
                "property2": null
              },
              "versionInfo": "string"
            },
            "errorState": {
              "details": "string",
              "failedConfiguration": {
                "property1": null,
                "property2": null
              },
              "lastUpdateAttempt": "string"
            },
            "name": "string",
            "warmingState": {
              "lastUpdated": "string",
              "listener": {
                "property1": null,
                "property2": null
              },
              "versionInfo": "string"
            }
          }
        ],
        "staticListeners": [
          {
            "lastUpdated": "string",
            "listener": {
              "property1": null,
              "property2": null
            }
          }
        ],
        "versionInfo": "string"
      },
      "routeConfig": {
        "dynamicRouteConfigs": [
          {
            "lastUpdated": "string",
            "routeConfig": {
              "property1": null,
              "property2": null
            },
            "versionInfo": "string"
          }
        ],
        "staticRouteConfigs": [
          {
            "lastUpdated": "string",
            "routeConfig": {
              "property1": null,
              "property2": null
            }
          }
        ]
      },
      "scopedRouteConfig": {
        "dynamicScopedRouteConfigs": [
          {
            "lastUpdated": "string",
            "name": "string",
            "scopedRouteConfigs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "versionInfo": "string"
          }
        ],
        "inlineScopedRouteConfigs": [
          {
            "lastUpdated": "string",
            "name": "string",
            "scopedRouteConfigs": [
              {
                "property1": null,
                "property2": null
              }
            ]
          }
        ]
      },
      "status": "UNKNOWN"
    }
  ]
}
```

All xds configs for a particular client.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|node|[Node](#schemanode)|false|none|Node for a particular client.|
|xdsConfig|[[PerXdsConfig](#schemaperxdsconfig)]|false|none|none|

<h2 id="tocS_ClientStatusRequest">ClientStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaclientstatusrequest"></a>
<a id="schema_ClientStatusRequest"></a>
<a id="tocSclientstatusrequest"></a>
<a id="tocsclientstatusrequest"></a>

```json
{
  "nodeMatchers": [
    {
      "nodeId": {
        "exact": "string",
        "ignoreCase": true,
        "prefix": "string",
        "regex": "string",
        "safeRegex": {
          "googleRe2": {
            "maxProgramSize": 0
          },
          "regex": "string"
        },
        "suffix": "string"
      },
      "nodeMetadatas": [
        {
          "path": [
            {
              "key": "string"
            }
          ],
          "value": {
            "boolMatch": true,
            "doubleMatch": {
              "exact": 0,
              "range": {
                "end": 0,
                "start": 0
              }
            },
            "listMatch": {},
            "nullMatch": {},
            "presentMatch": true,
            "stringMatch": {
              "exact": "string",
              "ignoreCase": true,
              "prefix": "string",
              "regex": "string",
              "safeRegex": {
                "googleRe2": {
                  "maxProgramSize": 0
                },
                "regex": "string"
              },
              "suffix": "string"
            }
          }
        }
      ]
    }
  ]
}
```

Request for client status of clients identified by a list of NodeMatchers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodeMatchers|[[NodeMatcher](#schemanodematcher)]|false|none|Management server can use these match criteria to identify clients. The match follows OR semantics.|

<h2 id="tocS_ClientStatusResponse">ClientStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemaclientstatusresponse"></a>
<a id="schema_ClientStatusResponse"></a>
<a id="tocSclientstatusresponse"></a>
<a id="tocsclientstatusresponse"></a>

```json
{
  "config": [
    {
      "node": {
        "buildVersion": "string",
        "clientFeatures": [
          "string"
        ],
        "cluster": "string",
        "extensions": [
          {
            "category": "string",
            "disabled": true,
            "name": "string",
            "typeDescriptor": "string",
            "version": {
              "metadata": {
                "property1": null,
                "property2": null
              },
              "version": {
                "majorNumber": 0,
                "minorNumber": 0,
                "patch": 0
              }
            }
          }
        ],
        "id": "string",
        "listeningAddresses": [
          {
            "pipe": {
              "mode": 0,
              "path": "string"
            },
            "socketAddress": {
              "address": "string",
              "ipv4Compat": true,
              "namedPort": "string",
              "portValue": 0,
              "protocol": "TCP",
              "resolverName": "string"
            }
          }
        ],
        "locality": {
          "region": "string",
          "subZone": "string",
          "zone": "string"
        },
        "metadata": {
          "property1": null,
          "property2": null
        },
        "userAgentBuildVersion": {
          "metadata": {
            "property1": null,
            "property2": null
          },
          "version": {
            "majorNumber": 0,
            "minorNumber": 0,
            "patch": 0
          }
        },
        "userAgentName": "string",
        "userAgentVersion": "string"
      },
      "xdsConfig": [
        {
          "clusterConfig": {
            "dynamicActiveClusters": [
              {
                "cluster": {
                  "property1": null,
                  "property2": null
                },
                "lastUpdated": "string",
                "versionInfo": "string"
              }
            ],
            "dynamicWarmingClusters": [
              {
                "cluster": {
                  "property1": null,
                  "property2": null
                },
                "lastUpdated": "string",
                "versionInfo": "string"
              }
            ],
            "staticClusters": [
              {
                "cluster": {
                  "property1": null,
                  "property2": null
                },
                "lastUpdated": "string"
              }
            ],
            "versionInfo": "string"
          },
          "listenerConfig": {
            "dynamicListeners": [
              {
                "activeState": {
                  "lastUpdated": "string",
                  "listener": {
                    "property1": null,
                    "property2": null
                  },
                  "versionInfo": "string"
                },
                "drainingState": {
                  "lastUpdated": "string",
                  "listener": {
                    "property1": null,
                    "property2": null
                  },
                  "versionInfo": "string"
                },
                "errorState": {
                  "details": "string",
                  "failedConfiguration": {
                    "property1": null,
                    "property2": null
                  },
                  "lastUpdateAttempt": "string"
                },
                "name": "string",
                "warmingState": {
                  "lastUpdated": "string",
                  "listener": {
                    "property1": null,
                    "property2": null
                  },
                  "versionInfo": "string"
                }
              }
            ],
            "staticListeners": [
              {
                "lastUpdated": "string",
                "listener": {
                  "property1": null,
                  "property2": null
                }
              }
            ],
            "versionInfo": "string"
          },
          "routeConfig": {
            "dynamicRouteConfigs": [
              {
                "lastUpdated": "string",
                "routeConfig": {
                  "property1": null,
                  "property2": null
                },
                "versionInfo": "string"
              }
            ],
            "staticRouteConfigs": [
              {
                "lastUpdated": "string",
                "routeConfig": {
                  "property1": null,
                  "property2": null
                }
              }
            ]
          },
          "scopedRouteConfig": {
            "dynamicScopedRouteConfigs": [
              {
                "lastUpdated": "string",
                "name": "string",
                "scopedRouteConfigs": [
                  {
                    "property1": null,
                    "property2": null
                  }
                ],
                "versionInfo": "string"
              }
            ],
            "inlineScopedRouteConfigs": [
              {
                "lastUpdated": "string",
                "name": "string",
                "scopedRouteConfigs": [
                  {
                    "property1": null,
                    "property2": null
                  }
                ]
              }
            ]
          },
          "status": "UNKNOWN"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[[ClientConfig](#schemaclientconfig)]|false|none|Client configs for the clients specified in the ClientStatusRequest.|

<h2 id="tocS_ClustersConfigDump">ClustersConfigDump</h2>
<!-- backwards compatibility -->
<a id="schemaclustersconfigdump"></a>
<a id="schema_ClustersConfigDump"></a>
<a id="tocSclustersconfigdump"></a>
<a id="tocsclustersconfigdump"></a>

```json
{
  "dynamicActiveClusters": [
    {
      "cluster": {
        "property1": null,
        "property2": null
      },
      "lastUpdated": "string",
      "versionInfo": "string"
    }
  ],
  "dynamicWarmingClusters": [
    {
      "cluster": {
        "property1": null,
        "property2": null
      },
      "lastUpdated": "string",
      "versionInfo": "string"
    }
  ],
  "staticClusters": [
    {
      "cluster": {
        "property1": null,
        "property2": null
      },
      "lastUpdated": "string"
    }
  ],
  "versionInfo": "string"
}
```

Envoy's cluster manager fills this message with all currently known clusters. Cluster configuration information can be used to recreate an Envoy configuration by populating all clusters as static clusters or by returning them in a CDS response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dynamicActiveClusters|[[DynamicCluster](#schemadynamiccluster)]|false|none|The dynamically loaded active clusters. These are clusters that are available to service data plane traffic.|
|dynamicWarmingClusters|[[DynamicCluster](#schemadynamiccluster)]|false|none|The dynamically loaded warming clusters. These are clusters that are currently undergoing warming in preparation to service data plane traffic. Note that if attempting to recreate an Envoy configuration from a configuration dump, the warming clusters should generally be discarded.|
|staticClusters|[[StaticCluster](#schemastaticcluster)]|false|none|The statically loaded cluster configs.|
|versionInfo|string|false|none|This is the :ref:`version_info ` in the last processed CDS discovery response. If there are only static bootstrap clusters, this field will be "".|

<h2 id="tocS_DoubleMatcher">DoubleMatcher</h2>
<!-- backwards compatibility -->
<a id="schemadoublematcher"></a>
<a id="schema_DoubleMatcher"></a>
<a id="tocSdoublematcher"></a>
<a id="tocsdoublematcher"></a>

```json
{
  "exact": 0,
  "range": {
    "end": 0,
    "start": 0
  }
}
```

Specifies the way to match a double value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exact|number(double)|false|none|If specified, the input double value must be equal to the value specified here.|
|range|[DoubleRange](#schemadoublerange)|false|none|If specified, the input double value must be in the range specified here. Note: The range is using half-open interval semantics [start, end).|

<h2 id="tocS_DoubleRange">DoubleRange</h2>
<!-- backwards compatibility -->
<a id="schemadoublerange"></a>
<a id="schema_DoubleRange"></a>
<a id="tocSdoublerange"></a>
<a id="tocsdoublerange"></a>

```json
{
  "end": 0,
  "start": 0
}
```

Specifies the double start and end of the range using half-open interval semantics [start, end).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|number(double)|false|none|end of the range (exclusive)|
|start|number(double)|false|none|start of the range (inclusive)|

<h2 id="tocS_DynamicCluster">DynamicCluster</h2>
<!-- backwards compatibility -->
<a id="schemadynamiccluster"></a>
<a id="schema_DynamicCluster"></a>
<a id="tocSdynamiccluster"></a>
<a id="tocsdynamiccluster"></a>

```json
{
  "cluster": {
    "property1": null,
    "property2": null
  },
  "lastUpdated": "string",
  "versionInfo": "string"
}
```

Describes a dynamically loaded cluster via the CDS API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|The cluster config.|
|lastUpdated|string(google-datetime)|false|none|The timestamp when the Cluster was last updated.|
|versionInfo|string|false|none|This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the cluster was loaded. In the future, discrete per-cluster versions may be supported by the API.|

<h2 id="tocS_DynamicListener">DynamicListener</h2>
<!-- backwards compatibility -->
<a id="schemadynamiclistener"></a>
<a id="schema_DynamicListener"></a>
<a id="tocSdynamiclistener"></a>
<a id="tocsdynamiclistener"></a>

```json
{
  "activeState": {
    "lastUpdated": "string",
    "listener": {
      "property1": null,
      "property2": null
    },
    "versionInfo": "string"
  },
  "drainingState": {
    "lastUpdated": "string",
    "listener": {
      "property1": null,
      "property2": null
    },
    "versionInfo": "string"
  },
  "errorState": {
    "details": "string",
    "failedConfiguration": {
      "property1": null,
      "property2": null
    },
    "lastUpdateAttempt": "string"
  },
  "name": "string",
  "warmingState": {
    "lastUpdated": "string",
    "listener": {
      "property1": null,
      "property2": null
    },
    "versionInfo": "string"
  }
}
```

Describes a dynamically loaded listener via the LDS API. [#next-free-field: 6]

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeState|[DynamicListenerState](#schemadynamiclistenerstate)|false|none|The listener state for any active listener by this name. These are listeners that are available to service data plane traffic.|
|drainingState|[DynamicListenerState](#schemadynamiclistenerstate)|false|none|The listener state for any draining listener by this name. These are listeners that are currently undergoing draining in preparation to stop servicing data plane traffic. Note that if attempting to recreate an Envoy configuration from a configuration dump, the draining listeners should generally be discarded.|
|errorState|[UpdateFailureState](#schemaupdatefailurestate)|false|none|Set if the last update failed, cleared after the next successful update.|
|name|string|false|none|The name or unique id of this listener, pulled from the DynamicListenerState config.|
|warmingState|[DynamicListenerState](#schemadynamiclistenerstate)|false|none|The listener state for any warming listener by this name. These are listeners that are currently undergoing warming in preparation to service data plane traffic. Note that if attempting to recreate an Envoy configuration from a configuration dump, the warming listeners should generally be discarded.|

<h2 id="tocS_DynamicListenerState">DynamicListenerState</h2>
<!-- backwards compatibility -->
<a id="schemadynamiclistenerstate"></a>
<a id="schema_DynamicListenerState"></a>
<a id="tocSdynamiclistenerstate"></a>
<a id="tocsdynamiclistenerstate"></a>

```json
{
  "lastUpdated": "string",
  "listener": {
    "property1": null,
    "property2": null
  },
  "versionInfo": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastUpdated|string(google-datetime)|false|none|The timestamp when the Listener was last successfully updated.|
|listener|object|false|none|The listener config.|
|versionInfo|string|false|none|This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the listener was loaded. In the future, discrete per-listener versions may be supported by the API.|

<h2 id="tocS_DynamicRouteConfig">DynamicRouteConfig</h2>
<!-- backwards compatibility -->
<a id="schemadynamicrouteconfig"></a>
<a id="schema_DynamicRouteConfig"></a>
<a id="tocSdynamicrouteconfig"></a>
<a id="tocsdynamicrouteconfig"></a>

```json
{
  "lastUpdated": "string",
  "routeConfig": {
    "property1": null,
    "property2": null
  },
  "versionInfo": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastUpdated|string(google-datetime)|false|none|The timestamp when the Route was last updated.|
|routeConfig|object|false|none|The route config.|
|versionInfo|string|false|none|This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the route configuration was loaded.|

<h2 id="tocS_DynamicScopedRouteConfigs">DynamicScopedRouteConfigs</h2>
<!-- backwards compatibility -->
<a id="schemadynamicscopedrouteconfigs"></a>
<a id="schema_DynamicScopedRouteConfigs"></a>
<a id="tocSdynamicscopedrouteconfigs"></a>
<a id="tocsdynamicscopedrouteconfigs"></a>

```json
{
  "lastUpdated": "string",
  "name": "string",
  "scopedRouteConfigs": [
    {
      "property1": null,
      "property2": null
    }
  ],
  "versionInfo": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastUpdated|string(google-datetime)|false|none|The timestamp when the scoped route config set was last updated.|
|name|string|false|none|The name assigned to the scoped route configurations.|
|scopedRouteConfigs|[object]|false|none|The scoped route configurations.|
|versionInfo|string|false|none|This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the scoped routes configuration was loaded.|

<h2 id="tocS_Extension">Extension</h2>
<!-- backwards compatibility -->
<a id="schemaextension"></a>
<a id="schema_Extension"></a>
<a id="tocSextension"></a>
<a id="tocsextension"></a>

```json
{
  "category": "string",
  "disabled": true,
  "name": "string",
  "typeDescriptor": "string",
  "version": {
    "metadata": {
      "property1": null,
      "property2": null
    },
    "version": {
      "majorNumber": 0,
      "minorNumber": 0,
      "patch": 0
    }
  }
}
```

Version and identification for an Envoy extension. [#next-free-field: 6]

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|Category of the extension. Extension category names use reverse DNS notation. For instance "envoy.filters.listener" for Envoy's built-in listener filters or "com.acme.filters.http" for HTTP filters from acme.com vendor. [#comment:|
|disabled|boolean|false|none|Indicates that the extension is present but was disabled via dynamic configuration.|
|name|string|false|none|This is the name of the Envoy filter as specified in the Envoy configuration, e.g. envoy.filters.http.router, com.acme.widget.|
|typeDescriptor|string|false|none|[#not-implemented-hide:] Type descriptor of extension configuration proto. [#comment:|
|version|[BuildVersion](#schemabuildversion)|false|none|The version is a property of the extension and maintained independently of other extensions and the Envoy API. This field is not set when extension did not provide version information.|

<h2 id="tocS_GoogleRE2">GoogleRE2</h2>
<!-- backwards compatibility -->
<a id="schemagooglere2"></a>
<a id="schema_GoogleRE2"></a>
<a id="tocSgooglere2"></a>
<a id="tocsgooglere2"></a>

```json
{
  "maxProgramSize": 0
}
```

Google's `RE2 `_ regex engine. The regex string must adhere to the documented `syntax `_. The engine is designed to complete execution in linear time as well as limit the amount of memory used. Envoy supports program size checking via runtime. The runtime keys ``re2.max_program_size.error_level`` and ``re2.max_program_size.warn_level`` can be set to integers as the maximum program size or complexity that a compiled regex can have before an exception is thrown or a warning is logged, respectively. ``re2.max_program_size.error_level`` defaults to 100, and ``re2.max_program_size.warn_level`` has no default if unset (will not check/log a warning). Envoy emits two stats for tracking the program size of regexes: the histogram `re2.program_size`, which records the program size, and the counter `re2.exceeded_warn_level`, which is incremented each time the program size exceeds the warn level threshold.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxProgramSize|integer(uint32)|false|none|This field controls the RE2 "program size" which is a rough estimate of how complex a compiled regex is to evaluate. A regex that has a program size greater than the configured value will fail to compile. In this case, the configured max program size can be increased or the regex can be simplified. If not specified, the default is 100. This field is deprecated; regexp validation should be performed on the management server instead of being done by each individual client.|

<h2 id="tocS_InlineScopedRouteConfigs">InlineScopedRouteConfigs</h2>
<!-- backwards compatibility -->
<a id="schemainlinescopedrouteconfigs"></a>
<a id="schema_InlineScopedRouteConfigs"></a>
<a id="tocSinlinescopedrouteconfigs"></a>
<a id="tocsinlinescopedrouteconfigs"></a>

```json
{
  "lastUpdated": "string",
  "name": "string",
  "scopedRouteConfigs": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastUpdated|string(google-datetime)|false|none|The timestamp when the scoped route config set was last updated.|
|name|string|false|none|The name assigned to the scoped route configurations.|
|scopedRouteConfigs|[object]|false|none|The scoped route configurations.|

<h2 id="tocS_ListMatcher">ListMatcher</h2>
<!-- backwards compatibility -->
<a id="schemalistmatcher"></a>
<a id="schema_ListMatcher"></a>
<a id="tocSlistmatcher"></a>
<a id="tocslistmatcher"></a>

```json
{
  "oneOf": {
    "boolMatch": true,
    "doubleMatch": {
      "exact": 0,
      "range": {
        "end": 0,
        "start": 0
      }
    },
    "listMatch": {},
    "nullMatch": {},
    "presentMatch": true,
    "stringMatch": {
      "exact": "string",
      "ignoreCase": true,
      "prefix": "string",
      "regex": "string",
      "safeRegex": {
        "googleRe2": {
          "maxProgramSize": 0
        },
        "regex": "string"
      },
      "suffix": "string"
    }
  }
}
```

Specifies the way to match a list value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oneOf|[ValueMatcher](#schemavaluematcher)|false|none|If specified, at least one of the values in the list must match the value specified.|

<h2 id="tocS_ListenersConfigDump">ListenersConfigDump</h2>
<!-- backwards compatibility -->
<a id="schemalistenersconfigdump"></a>
<a id="schema_ListenersConfigDump"></a>
<a id="tocSlistenersconfigdump"></a>
<a id="tocslistenersconfigdump"></a>

```json
{
  "dynamicListeners": [
    {
      "activeState": {
        "lastUpdated": "string",
        "listener": {
          "property1": null,
          "property2": null
        },
        "versionInfo": "string"
      },
      "drainingState": {
        "lastUpdated": "string",
        "listener": {
          "property1": null,
          "property2": null
        },
        "versionInfo": "string"
      },
      "errorState": {
        "details": "string",
        "failedConfiguration": {
          "property1": null,
          "property2": null
        },
        "lastUpdateAttempt": "string"
      },
      "name": "string",
      "warmingState": {
        "lastUpdated": "string",
        "listener": {
          "property1": null,
          "property2": null
        },
        "versionInfo": "string"
      }
    }
  ],
  "staticListeners": [
    {
      "lastUpdated": "string",
      "listener": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "versionInfo": "string"
}
```

Envoy's listener manager fills this message with all currently known listeners. Listener configuration information can be used to recreate an Envoy configuration by populating all listeners as static listeners or by returning them in a LDS response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dynamicListeners|[[DynamicListener](#schemadynamiclistener)]|false|none|State for any warming, active, or draining listeners.|
|staticListeners|[[StaticListener](#schemastaticlistener)]|false|none|The statically loaded listener configs.|
|versionInfo|string|false|none|This is the :ref:`version_info ` in the last processed LDS discovery response. If there are only static bootstrap listeners, this field will be "".|

<h2 id="tocS_Locality">Locality</h2>
<!-- backwards compatibility -->
<a id="schemalocality"></a>
<a id="schema_Locality"></a>
<a id="tocSlocality"></a>
<a id="tocslocality"></a>

```json
{
  "region": "string",
  "subZone": "string",
  "zone": "string"
}
```

Identifies location of where either Envoy runs or where upstream hosts run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|region|string|false|none|Region this :ref:`zone ` belongs to.|
|subZone|string|false|none|When used for locality of upstream hosts, this field further splits zone into smaller chunks of sub-zones so they can be load balanced independently.|
|zone|string|false|none|Defines the local service zone where Envoy is running. Though optional, it should be set if discovery service routing is used and the discovery service exposes :ref:`zone data `, either in this message or via :option:`--service-zone`. The meaning of zone is context dependent, e.g. `Availability Zone (AZ) `_ on AWS, `Zone `_ on GCP, etc.|

<h2 id="tocS_Node">Node</h2>
<!-- backwards compatibility -->
<a id="schemanode"></a>
<a id="schema_Node"></a>
<a id="tocSnode"></a>
<a id="tocsnode"></a>

```json
{
  "buildVersion": "string",
  "clientFeatures": [
    "string"
  ],
  "cluster": "string",
  "extensions": [
    {
      "category": "string",
      "disabled": true,
      "name": "string",
      "typeDescriptor": "string",
      "version": {
        "metadata": {
          "property1": null,
          "property2": null
        },
        "version": {
          "majorNumber": 0,
          "minorNumber": 0,
          "patch": 0
        }
      }
    }
  ],
  "id": "string",
  "listeningAddresses": [
    {
      "pipe": {
        "mode": 0,
        "path": "string"
      },
      "socketAddress": {
        "address": "string",
        "ipv4Compat": true,
        "namedPort": "string",
        "portValue": 0,
        "protocol": "TCP",
        "resolverName": "string"
      }
    }
  ],
  "locality": {
    "region": "string",
    "subZone": "string",
    "zone": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "userAgentBuildVersion": {
    "metadata": {
      "property1": null,
      "property2": null
    },
    "version": {
      "majorNumber": 0,
      "minorNumber": 0,
      "patch": 0
    }
  },
  "userAgentName": "string",
  "userAgentVersion": "string"
}
```

Identifies a specific Envoy instance. The node identifier is presented to the management server, which may use this identifier to distinguish per Envoy configuration for serving. [#next-free-field: 12]

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buildVersion|string|false|none|This is motivated by informing a management server during canary which version of Envoy is being tested in a heterogeneous fleet. This will be set by Envoy in management server RPCs. This field is deprecated in favor of the user_agent_name and user_agent_version values.|
|clientFeatures|[string]|false|none|Client feature support list. These are well known features described in the Envoy API repository for a given major version of an API. Client features use reverse DNS naming scheme, for example `com.acme.feature`. See :ref:`the list of features ` that xDS client may support.|
|cluster|string|false|none|Defines the local service cluster name where Envoy is running. Though optional, it should be set if any of the following features are used: :ref:`statsd `, :ref:`health check cluster verification `, :ref:`runtime override directory `, :ref:`user agent addition `, :ref:`HTTP global rate limiting `, :ref:`CDS `, and :ref:`HTTP tracing `, either in this message or via :option:`--service-cluster`.|
|extensions|[[Extension](#schemaextension)]|false|none|List of extensions and their versions supported by the node.|
|id|string|false|none|An opaque node identifier for the Envoy node. This also provides the local service node name. It should be set if any of the following features are used: :ref:`statsd `, :ref:`CDS `, and :ref:`HTTP tracing `, either in this message or via :option:`--service-node`.|
|listeningAddresses|[[Address](#schemaaddress)]|false|none|Known listening ports on the node as a generic hint to the management server for filtering :ref:`listeners ` to be returned. For example, if there is a listener bound to port 80, the list can optionally contain the SocketAddress `(0.0.0.0,80)`. The field is optional and just a hint.|
|locality|[Locality](#schemalocality)|false|none|Locality specifying where the Envoy instance is running.|
|metadata|object|false|none|Opaque metadata extending the node identifier. Envoy will pass this directly to the management server.|
|userAgentBuildVersion|[BuildVersion](#schemabuildversion)|false|none|Structured version of the entity requesting config.|
|userAgentName|string|false|none|Free-form string that identifies the entity requesting config. E.g. "envoy" or "grpc"|
|userAgentVersion|string|false|none|Free-form string that identifies the version of the entity requesting config. E.g. "1.12.2" or "abcd1234", or "SpecialEnvoyBuild"|

<h2 id="tocS_NodeMatcher">NodeMatcher</h2>
<!-- backwards compatibility -->
<a id="schemanodematcher"></a>
<a id="schema_NodeMatcher"></a>
<a id="tocSnodematcher"></a>
<a id="tocsnodematcher"></a>

```json
{
  "nodeId": {
    "exact": "string",
    "ignoreCase": true,
    "prefix": "string",
    "regex": "string",
    "safeRegex": {
      "googleRe2": {
        "maxProgramSize": 0
      },
      "regex": "string"
    },
    "suffix": "string"
  },
  "nodeMetadatas": [
    {
      "path": [
        {
          "key": "string"
        }
      ],
      "value": {
        "boolMatch": true,
        "doubleMatch": {
          "exact": 0,
          "range": {
            "end": 0,
            "start": 0
          }
        },
        "listMatch": {},
        "nullMatch": {},
        "presentMatch": true,
        "stringMatch": {
          "exact": "string",
          "ignoreCase": true,
          "prefix": "string",
          "regex": "string",
          "safeRegex": {
            "googleRe2": {
              "maxProgramSize": 0
            },
            "regex": "string"
          },
          "suffix": "string"
        }
      }
    }
  ]
}
```

Specifies the way to match a Node. The match follows AND semantics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodeId|[StringMatcher](#schemastringmatcher)|false|none|Specifies match criteria on the node id.|
|nodeMetadatas|[[StructMatcher](#schemastructmatcher)]|false|none|Specifies match criteria on the node metadata.|

<h2 id="tocS_NullMatch">NullMatch</h2>
<!-- backwards compatibility -->
<a id="schemanullmatch"></a>
<a id="schema_NullMatch"></a>
<a id="tocSnullmatch"></a>
<a id="tocsnullmatch"></a>

```json
{}
```

NullMatch is an empty message to specify a null value.

<h2 id="tocS_PathSegment">PathSegment</h2>
<!-- backwards compatibility -->
<a id="schemapathsegment"></a>
<a id="schema_PathSegment"></a>
<a id="tocSpathsegment"></a>
<a id="tocspathsegment"></a>

```json
{
  "key": "string"
}
```

Specifies the segment in a path to retrieve value from Struct.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|If specified, use the key to retrieve the value in a Struct.|

<h2 id="tocS_PerXdsConfig">PerXdsConfig</h2>
<!-- backwards compatibility -->
<a id="schemaperxdsconfig"></a>
<a id="schema_PerXdsConfig"></a>
<a id="tocSperxdsconfig"></a>
<a id="tocsperxdsconfig"></a>

```json
{
  "clusterConfig": {
    "dynamicActiveClusters": [
      {
        "cluster": {
          "property1": null,
          "property2": null
        },
        "lastUpdated": "string",
        "versionInfo": "string"
      }
    ],
    "dynamicWarmingClusters": [
      {
        "cluster": {
          "property1": null,
          "property2": null
        },
        "lastUpdated": "string",
        "versionInfo": "string"
      }
    ],
    "staticClusters": [
      {
        "cluster": {
          "property1": null,
          "property2": null
        },
        "lastUpdated": "string"
      }
    ],
    "versionInfo": "string"
  },
  "listenerConfig": {
    "dynamicListeners": [
      {
        "activeState": {
          "lastUpdated": "string",
          "listener": {
            "property1": null,
            "property2": null
          },
          "versionInfo": "string"
        },
        "drainingState": {
          "lastUpdated": "string",
          "listener": {
            "property1": null,
            "property2": null
          },
          "versionInfo": "string"
        },
        "errorState": {
          "details": "string",
          "failedConfiguration": {
            "property1": null,
            "property2": null
          },
          "lastUpdateAttempt": "string"
        },
        "name": "string",
        "warmingState": {
          "lastUpdated": "string",
          "listener": {
            "property1": null,
            "property2": null
          },
          "versionInfo": "string"
        }
      }
    ],
    "staticListeners": [
      {
        "lastUpdated": "string",
        "listener": {
          "property1": null,
          "property2": null
        }
      }
    ],
    "versionInfo": "string"
  },
  "routeConfig": {
    "dynamicRouteConfigs": [
      {
        "lastUpdated": "string",
        "routeConfig": {
          "property1": null,
          "property2": null
        },
        "versionInfo": "string"
      }
    ],
    "staticRouteConfigs": [
      {
        "lastUpdated": "string",
        "routeConfig": {
          "property1": null,
          "property2": null
        }
      }
    ]
  },
  "scopedRouteConfig": {
    "dynamicScopedRouteConfigs": [
      {
        "lastUpdated": "string",
        "name": "string",
        "scopedRouteConfigs": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "versionInfo": "string"
      }
    ],
    "inlineScopedRouteConfigs": [
      {
        "lastUpdated": "string",
        "name": "string",
        "scopedRouteConfigs": [
          {
            "property1": null,
            "property2": null
          }
        ]
      }
    ]
  },
  "status": "UNKNOWN"
}
```

Detailed config (per xDS) with status. [#next-free-field: 6]

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterConfig|[ClustersConfigDump](#schemaclustersconfigdump)|false|none|Envoy's cluster manager fills this message with all currently known clusters. Cluster configuration information can be used to recreate an Envoy configuration by populating all clusters as static clusters or by returning them in a CDS response.|
|listenerConfig|[ListenersConfigDump](#schemalistenersconfigdump)|false|none|Envoy's listener manager fills this message with all currently known listeners. Listener configuration information can be used to recreate an Envoy configuration by populating all listeners as static listeners or by returning them in a LDS response.|
|routeConfig|[RoutesConfigDump](#schemaroutesconfigdump)|false|none|Envoy's RDS implementation fills this message with all currently loaded routes, as described by their RouteConfiguration objects. Static routes that are either defined in the bootstrap configuration or defined inline while configuring listeners are separated from those configured dynamically via RDS. Route configuration information can be used to recreate an Envoy configuration by populating all routes as static routes or by returning them in RDS responses.|
|scopedRouteConfig|[ScopedRoutesConfigDump](#schemascopedroutesconfigdump)|false|none|Envoy's scoped RDS implementation fills this message with all currently loaded route configuration scopes (defined via ScopedRouteConfigurationsSet protos). This message lists both the scopes defined inline with the higher order object (i.e., the HttpConnectionManager) and the dynamically obtained scopes via the SRDS API.|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|UNKNOWN|
|status|SYNCED|
|status|NOT_SENT|
|status|STALE|
|status|ERROR|

<h2 id="tocS_Pipe">Pipe</h2>
<!-- backwards compatibility -->
<a id="schemapipe"></a>
<a id="schema_Pipe"></a>
<a id="tocSpipe"></a>
<a id="tocspipe"></a>

```json
{
  "mode": 0,
  "path": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mode|integer(uint32)|false|none|The mode for the Pipe. Not applicable for abstract sockets.|
|path|string|false|none|Unix Domain Socket path. On Linux, paths starting with '@' will use the abstract namespace. The starting '@' is replaced by a null byte by Envoy. Paths starting with '@' will result in an error in environments other than Linux.|

<h2 id="tocS_RegexMatcher">RegexMatcher</h2>
<!-- backwards compatibility -->
<a id="schemaregexmatcher"></a>
<a id="schema_RegexMatcher"></a>
<a id="tocSregexmatcher"></a>
<a id="tocsregexmatcher"></a>

```json
{
  "googleRe2": {
    "maxProgramSize": 0
  },
  "regex": "string"
}
```

A regex matcher designed for safety when used with untrusted input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|googleRe2|[GoogleRE2](#schemagooglere2)|false|none|Google's RE2 regex engine.|
|regex|string|false|none|The regex match string. The string must be supported by the configured engine.|

<h2 id="tocS_RoutesConfigDump">RoutesConfigDump</h2>
<!-- backwards compatibility -->
<a id="schemaroutesconfigdump"></a>
<a id="schema_RoutesConfigDump"></a>
<a id="tocSroutesconfigdump"></a>
<a id="tocsroutesconfigdump"></a>

```json
{
  "dynamicRouteConfigs": [
    {
      "lastUpdated": "string",
      "routeConfig": {
        "property1": null,
        "property2": null
      },
      "versionInfo": "string"
    }
  ],
  "staticRouteConfigs": [
    {
      "lastUpdated": "string",
      "routeConfig": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

Envoy's RDS implementation fills this message with all currently loaded routes, as described by their RouteConfiguration objects. Static routes that are either defined in the bootstrap configuration or defined inline while configuring listeners are separated from those configured dynamically via RDS. Route configuration information can be used to recreate an Envoy configuration by populating all routes as static routes or by returning them in RDS responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dynamicRouteConfigs|[[DynamicRouteConfig](#schemadynamicrouteconfig)]|false|none|The dynamically loaded route configs.|
|staticRouteConfigs|[[StaticRouteConfig](#schemastaticrouteconfig)]|false|none|The statically loaded route configs.|

<h2 id="tocS_ScopedRoutesConfigDump">ScopedRoutesConfigDump</h2>
<!-- backwards compatibility -->
<a id="schemascopedroutesconfigdump"></a>
<a id="schema_ScopedRoutesConfigDump"></a>
<a id="tocSscopedroutesconfigdump"></a>
<a id="tocsscopedroutesconfigdump"></a>

```json
{
  "dynamicScopedRouteConfigs": [
    {
      "lastUpdated": "string",
      "name": "string",
      "scopedRouteConfigs": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "versionInfo": "string"
    }
  ],
  "inlineScopedRouteConfigs": [
    {
      "lastUpdated": "string",
      "name": "string",
      "scopedRouteConfigs": [
        {
          "property1": null,
          "property2": null
        }
      ]
    }
  ]
}
```

Envoy's scoped RDS implementation fills this message with all currently loaded route configuration scopes (defined via ScopedRouteConfigurationsSet protos). This message lists both the scopes defined inline with the higher order object (i.e., the HttpConnectionManager) and the dynamically obtained scopes via the SRDS API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dynamicScopedRouteConfigs|[[DynamicScopedRouteConfigs](#schemadynamicscopedrouteconfigs)]|false|none|The dynamically loaded scoped route configs.|
|inlineScopedRouteConfigs|[[InlineScopedRouteConfigs](#schemainlinescopedrouteconfigs)]|false|none|The statically loaded scoped route configs.|

<h2 id="tocS_SemanticVersion">SemanticVersion</h2>
<!-- backwards compatibility -->
<a id="schemasemanticversion"></a>
<a id="schema_SemanticVersion"></a>
<a id="tocSsemanticversion"></a>
<a id="tocssemanticversion"></a>

```json
{
  "majorNumber": 0,
  "minorNumber": 0,
  "patch": 0
}
```

Envoy uses SemVer (https://semver.org/). Major/minor versions indicate expected behaviors and APIs, the patch version field is used only for security fixes and can be generally ignored.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|majorNumber|integer(uint32)|false|none|none|
|minorNumber|integer(uint32)|false|none|none|
|patch|integer(uint32)|false|none|none|

<h2 id="tocS_SocketAddress">SocketAddress</h2>
<!-- backwards compatibility -->
<a id="schemasocketaddress"></a>
<a id="schema_SocketAddress"></a>
<a id="tocSsocketaddress"></a>
<a id="tocssocketaddress"></a>

```json
{
  "address": "string",
  "ipv4Compat": true,
  "namedPort": "string",
  "portValue": 0,
  "protocol": "TCP",
  "resolverName": "string"
}
```

[#next-free-field: 7]

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|The address for this socket. :ref:`Listeners ` will bind to the address. An empty address is not allowed. Specify ``0.0.0.0`` or ``::`` to bind to any address. [#comment:TODO(zuercher) reinstate when implemented: It is possible to distinguish a Listener address via the prefix/suffix matching in :ref:`FilterChainMatch `.] When used within an upstream :ref:`BindConfig `, the address controls the source address of outbound connections. For :ref:`clusters `, the cluster type determines whether the address must be an IP (*STATIC* or *EDS* clusters) or a hostname resolved by DNS (*STRICT_DNS* or *LOGICAL_DNS* clusters). Address resolution can be customized via :ref:`resolver_name `.|
|ipv4Compat|boolean|false|none|When binding to an IPv6 address above, this enables `IPv4 compatibility `_. Binding to ``::`` will allow both IPv4 and IPv6 connections, with peer IPv4 addresses mapped into IPv6 space as ``::FFFF:``.|
|namedPort|string|false|none|This is only valid if :ref:`resolver_name ` is specified below and the named resolver is capable of named port resolution.|
|portValue|integer(uint32)|false|none|none|
|protocol|string|false|none|none|
|resolverName|string|false|none|The name of the custom resolver. This must have been registered with Envoy. If this is empty, a context dependent default applies. If the address is a concrete IP address, no resolution will occur. If address is a hostname this should be set for resolution other than DNS. Specifying a custom resolver with *STRICT_DNS* or *LOGICAL_DNS* will generate an error at runtime.|

#### Enumerated Values

|Property|Value|
|---|---|
|protocol|TCP|
|protocol|UDP|

<h2 id="tocS_StaticCluster">StaticCluster</h2>
<!-- backwards compatibility -->
<a id="schemastaticcluster"></a>
<a id="schema_StaticCluster"></a>
<a id="tocSstaticcluster"></a>
<a id="tocsstaticcluster"></a>

```json
{
  "cluster": {
    "property1": null,
    "property2": null
  },
  "lastUpdated": "string"
}
```

Describes a statically loaded cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|The cluster config.|
|lastUpdated|string(google-datetime)|false|none|The timestamp when the Cluster was last updated.|

<h2 id="tocS_StaticListener">StaticListener</h2>
<!-- backwards compatibility -->
<a id="schemastaticlistener"></a>
<a id="schema_StaticListener"></a>
<a id="tocSstaticlistener"></a>
<a id="tocsstaticlistener"></a>

```json
{
  "lastUpdated": "string",
  "listener": {
    "property1": null,
    "property2": null
  }
}
```

Describes a statically loaded listener.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastUpdated|string(google-datetime)|false|none|The timestamp when the Listener was last successfully updated.|
|listener|object|false|none|The listener config.|

<h2 id="tocS_StaticRouteConfig">StaticRouteConfig</h2>
<!-- backwards compatibility -->
<a id="schemastaticrouteconfig"></a>
<a id="schema_StaticRouteConfig"></a>
<a id="tocSstaticrouteconfig"></a>
<a id="tocsstaticrouteconfig"></a>

```json
{
  "lastUpdated": "string",
  "routeConfig": {
    "property1": null,
    "property2": null
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastUpdated|string(google-datetime)|false|none|The timestamp when the Route was last updated.|
|routeConfig|object|false|none|The route config.|

<h2 id="tocS_StringMatcher">StringMatcher</h2>
<!-- backwards compatibility -->
<a id="schemastringmatcher"></a>
<a id="schema_StringMatcher"></a>
<a id="tocSstringmatcher"></a>
<a id="tocsstringmatcher"></a>

```json
{
  "exact": "string",
  "ignoreCase": true,
  "prefix": "string",
  "regex": "string",
  "safeRegex": {
    "googleRe2": {
      "maxProgramSize": 0
    },
    "regex": "string"
  },
  "suffix": "string"
}
```

Specifies the way to match a string. [#next-free-field: 7]

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exact|string|false|none|The input string must match exactly the string specified here. Examples: * *abc* only matches the value *abc*.|
|ignoreCase|boolean|false|none|If true, indicates the exact/prefix/suffix matching should be case insensitive. This has no effect for the safe_regex match. For example, the matcher *data* will match both input string *Data* and *data* if set to true.|
|prefix|string|false|none|The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead. Examples: * *abc* matches the value *abc.xyz*|
|regex|string|false|none|The input string must match the regular expression specified here. The regex grammar is defined `here `_. Examples: * The regex ``\d{3}`` matches the value *123* * The regex ``\d{3}`` does not match the value *1234* * The regex ``\d{3}`` does not match the value *123.456* .. attention:: This field has been deprecated in favor of `safe_regex` as it is not safe for use with untrusted input in all cases.|
|safeRegex|[RegexMatcher](#schemaregexmatcher)|false|none|The input string must match the regular expression specified here.|
|suffix|string|false|none|The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead. Examples: * *abc* matches the value *xyz.abc*|

<h2 id="tocS_StructMatcher">StructMatcher</h2>
<!-- backwards compatibility -->
<a id="schemastructmatcher"></a>
<a id="schema_StructMatcher"></a>
<a id="tocSstructmatcher"></a>
<a id="tocsstructmatcher"></a>

```json
{
  "path": [
    {
      "key": "string"
    }
  ],
  "value": {
    "boolMatch": true,
    "doubleMatch": {
      "exact": 0,
      "range": {
        "end": 0,
        "start": 0
      }
    },
    "listMatch": {},
    "nullMatch": {},
    "presentMatch": true,
    "stringMatch": {
      "exact": "string",
      "ignoreCase": true,
      "prefix": "string",
      "regex": "string",
      "safeRegex": {
        "googleRe2": {
          "maxProgramSize": 0
        },
        "regex": "string"
      },
      "suffix": "string"
    }
  }
}
```

StructMatcher provides a general interface to check if a given value is matched in google.protobuf.Struct. It uses `path` to retrieve the value from the struct and then check if it's matched to the specified value. For example, for the following Struct: .. code-block:: yaml fields: a: struct_value: fields: b: struct_value: fields: c: string_value: pro t: list_value: values: - string_value: m - string_value: n The following MetadataMatcher is matched as the path [a, b, c] will retrieve a string value "pro" from the Metadata which is matched to the specified prefix match. .. code-block:: yaml path: - key: a - key: b - key: c value: string_match: prefix: pr The following StructMatcher is matched as the code will match one of the string values in the list at the path [a, t]. .. code-block:: yaml path: - key: a - key: t value: list_match: one_of: string_match: exact: m An example use of StructMatcher is to match metadata in envoy.v*.core.Node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|[[PathSegment](#schemapathsegment)]|false|none|The path to retrieve the Value from the Struct.|
|value|[ValueMatcher](#schemavaluematcher)|false|none|The StructMatcher is matched if the value retrieved by path is matched to this value.|

<h2 id="tocS_UpdateFailureState">UpdateFailureState</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefailurestate"></a>
<a id="schema_UpdateFailureState"></a>
<a id="tocSupdatefailurestate"></a>
<a id="tocsupdatefailurestate"></a>

```json
{
  "details": "string",
  "failedConfiguration": {
    "property1": null,
    "property2": null
  },
  "lastUpdateAttempt": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|string|false|none|Details about the last failed update attempt.|
|failedConfiguration|object|false|none|What the component configuration would have been if the update had succeeded.|
|lastUpdateAttempt|string(google-datetime)|false|none|Time of the latest failed update attempt.|

<h2 id="tocS_ValueMatcher">ValueMatcher</h2>
<!-- backwards compatibility -->
<a id="schemavaluematcher"></a>
<a id="schema_ValueMatcher"></a>
<a id="tocSvaluematcher"></a>
<a id="tocsvaluematcher"></a>

```json
{
  "boolMatch": true,
  "doubleMatch": {
    "exact": 0,
    "range": {
      "end": 0,
      "start": 0
    }
  },
  "listMatch": {
    "oneOf": {}
  },
  "nullMatch": {},
  "presentMatch": true,
  "stringMatch": {
    "exact": "string",
    "ignoreCase": true,
    "prefix": "string",
    "regex": "string",
    "safeRegex": {
      "googleRe2": {
        "maxProgramSize": 0
      },
      "regex": "string"
    },
    "suffix": "string"
  }
}
```

Specifies the way to match a ProtobufWkt::Value. Primitive values and ListValue are supported. StructValue is not supported and is always not matched. [#next-free-field: 7]

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boolMatch|boolean|false|none|If specified, a match occurs if and only if the target value is a bool value and is equal to this field.|
|doubleMatch|[DoubleMatcher](#schemadoublematcher)|false|none|If specified, a match occurs if and only if the target value is a double value and is matched to this field.|
|listMatch|[ListMatcher](#schemalistmatcher)|false|none|If specified, a match occurs if and only if the target value is a list value and is matched to this field.|
|nullMatch|[NullMatch](#schemanullmatch)|false|none|If specified, a match occurs if and only if the target value is a NullValue.|
|presentMatch|boolean|false|none|If specified, value match will be performed based on whether the path is referring to a valid primitive value in the metadata. If the path is referring to a non-primitive value, the result is always not matched.|
|stringMatch|[StringMatcher](#schemastringmatcher)|false|none|If specified, a match occurs if and only if the target value is a string value and is matched to this field.|
