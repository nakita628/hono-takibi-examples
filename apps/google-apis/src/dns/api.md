<h1 id="cloud-dns-api">Cloud DNS API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://dns.googleapis.com/">https://dns.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/dns/docs">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud-platform.read-only|View your data across Google Cloud services and see the email address of your Google Account|
|https://www.googleapis.com/auth/ndev.clouddns.readonly|View your DNS records hosted by Google Cloud DNS|
|https://www.googleapis.com/auth/ndev.clouddns.readwrite|View and manage your DNS records hosted by Google Cloud DNS|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud-platform.read-only|View your data across Google Cloud services and see the email address of your Google Account|
|https://www.googleapis.com/auth/ndev.clouddns.readonly|View your DNS records hosted by Google Cloud DNS|
|https://www.googleapis.com/auth/ndev.clouddns.readwrite|View and manage your DNS records hosted by Google Cloud DNS|

<h1 id="cloud-dns-api-changes">changes</h1>

## dns.changes.list

<a id="opIddns.changes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/managedZones/string/changes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}/changes`

Enumerates Changes to a ResourceRecordSet collection.

<h3 id="dnschangeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|none|
|managedZone|path|string|true|Identifies the managed zone addressed by this request. Can be the managed zone name or ID.|
|maxResults|query|integer|false|Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.|
|pageToken|query|string|false|Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.|
|sortBy|query|string|false|Sorting criterion. The only supported value is change sequence.|
|sortOrder|query|string|false|Sorting order direction: 'ascending' or 'descending'.|
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
|sortBy|CHANGE_SEQUENCE|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "changes": [
    {
      "additions": [
        {
          "kind": "dns#resourceRecordSet",
          "name": "string",
          "routingPolicy": {
            "geo": {
              "enableFencing": true,
              "items": [
                {
                  "healthCheckedTargets": {
                    "externalEndpoints": [
                      "string"
                    ],
                    "internalLoadBalancers": [
                      {
                        "ipAddress": "string",
                        "ipProtocol": "UNDEFINED",
                        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                        "loadBalancerType": "NONE",
                        "networkUrl": "string",
                        "port": "string",
                        "project": "string",
                        "region": "string"
                      }
                    ]
                  },
                  "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                  "location": "string",
                  "rrdatas": [
                    "string"
                  ],
                  "signatureRrdatas": [
                    "string"
                  ]
                }
              ],
              "kind": "dns#rRSetRoutingPolicyGeoPolicy"
            },
            "healthCheck": "string",
            "kind": "dns#rRSetRoutingPolicy",
            "primaryBackup": {
              "backupGeoTargets": {
                "enableFencing": true,
                "items": [
                  {
                    "healthCheckedTargets": {
                      "externalEndpoints": [
                        "string"
                      ],
                      "internalLoadBalancers": [
                        {
                          "ipAddress": "string",
                          "ipProtocol": "UNDEFINED",
                          "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                          "loadBalancerType": "NONE",
                          "networkUrl": "string",
                          "port": "string",
                          "project": "string",
                          "region": "string"
                        }
                      ]
                    },
                    "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                    "location": "string",
                    "rrdatas": [
                      "string"
                    ],
                    "signatureRrdatas": [
                      "string"
                    ]
                  }
                ],
                "kind": "dns#rRSetRoutingPolicyGeoPolicy"
              },
              "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
              "primaryTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "trickleTraffic": 0
            },
            "wrr": {
              "items": [
                {
                  "healthCheckedTargets": {
                    "externalEndpoints": [
                      "string"
                    ],
                    "internalLoadBalancers": [
                      {
                        "ipAddress": "string",
                        "ipProtocol": "UNDEFINED",
                        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                        "loadBalancerType": "NONE",
                        "networkUrl": "string",
                        "port": "string",
                        "project": "string",
                        "region": "string"
                      }
                    ]
                  },
                  "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
                  "rrdatas": [
                    "string"
                  ],
                  "signatureRrdatas": [
                    "string"
                  ],
                  "weight": 0
                }
              ],
              "kind": "dns#rRSetRoutingPolicyWrrPolicy"
            }
          },
          "rrdatas": [
            "string"
          ],
          "signatureRrdatas": [
            "string"
          ],
          "ttl": 0,
          "type": "string"
        }
      ],
      "deletions": [
        {
          "kind": "dns#resourceRecordSet",
          "name": "string",
          "routingPolicy": {
            "geo": {
              "enableFencing": true,
              "items": [
                {
                  "healthCheckedTargets": {
                    "externalEndpoints": [
                      "string"
                    ],
                    "internalLoadBalancers": [
                      {
                        "ipAddress": "string",
                        "ipProtocol": "UNDEFINED",
                        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                        "loadBalancerType": "NONE",
                        "networkUrl": "string",
                        "port": "string",
                        "project": "string",
                        "region": "string"
                      }
                    ]
                  },
                  "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                  "location": "string",
                  "rrdatas": [
                    "string"
                  ],
                  "signatureRrdatas": [
                    "string"
                  ]
                }
              ],
              "kind": "dns#rRSetRoutingPolicyGeoPolicy"
            },
            "healthCheck": "string",
            "kind": "dns#rRSetRoutingPolicy",
            "primaryBackup": {
              "backupGeoTargets": {
                "enableFencing": true,
                "items": [
                  {
                    "healthCheckedTargets": {
                      "externalEndpoints": [
                        "string"
                      ],
                      "internalLoadBalancers": [
                        {
                          "ipAddress": "string",
                          "ipProtocol": "UNDEFINED",
                          "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                          "loadBalancerType": "NONE",
                          "networkUrl": "string",
                          "port": "string",
                          "project": "string",
                          "region": "string"
                        }
                      ]
                    },
                    "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                    "location": "string",
                    "rrdatas": [
                      "string"
                    ],
                    "signatureRrdatas": [
                      "string"
                    ]
                  }
                ],
                "kind": "dns#rRSetRoutingPolicyGeoPolicy"
              },
              "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
              "primaryTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "trickleTraffic": 0
            },
            "wrr": {
              "items": [
                {
                  "healthCheckedTargets": {
                    "externalEndpoints": [
                      "string"
                    ],
                    "internalLoadBalancers": [
                      {
                        "ipAddress": "string",
                        "ipProtocol": "UNDEFINED",
                        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                        "loadBalancerType": "NONE",
                        "networkUrl": "string",
                        "port": "string",
                        "project": "string",
                        "region": "string"
                      }
                    ]
                  },
                  "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
                  "rrdatas": [
                    "string"
                  ],
                  "signatureRrdatas": [
                    "string"
                  ],
                  "weight": 0
                }
              ],
              "kind": "dns#rRSetRoutingPolicyWrrPolicy"
            }
          },
          "rrdatas": [
            "string"
          ],
          "signatureRrdatas": [
            "string"
          ],
          "ttl": 0,
          "type": "string"
        }
      ],
      "id": "string",
      "isServing": true,
      "kind": "dns#change",
      "startTime": "string",
      "status": "PENDING"
    }
  ],
  "header": {
    "operationId": "string"
  },
  "kind": "dns#changesListResponse",
  "nextPageToken": "string"
}
```

<h3 id="dnschangeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ChangesListResponse](#schemachangeslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.changes.create

<a id="opIddns.changes.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/managedZones/string/changes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "additions": [
      {
        "kind": "dns#resourceRecordSet",
        "name": "string",
        "routingPolicy": {
          "geo": {
            "enableFencing": true,
            "items": [
              {
                "healthCheckedTargets": {
                  "externalEndpoints": [
                    "string"
                  ],
                  "internalLoadBalancers": [
                    {
                      "ipAddress": "string",
                      "ipProtocol": "UNDEFINED",
                      "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                      "loadBalancerType": "NONE",
                      "networkUrl": "string",
                      "port": "string",
                      "project": "string",
                      "region": "string"
                    }
                  ]
                },
                "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                "location": "string",
                "rrdatas": [
                  "string"
                ],
                "signatureRrdatas": [
                  "string"
                ]
              }
            ],
            "kind": "dns#rRSetRoutingPolicyGeoPolicy"
          },
          "healthCheck": "string",
          "kind": "dns#rRSetRoutingPolicy",
          "primaryBackup": {
            "backupGeoTargets": {
              "enableFencing": true,
              "items": [
                {
                  "healthCheckedTargets": {
                    "externalEndpoints": [
                      "string"
                    ],
                    "internalLoadBalancers": [
                      {
                        "ipAddress": "string",
                        "ipProtocol": "UNDEFINED",
                        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                        "loadBalancerType": "NONE",
                        "networkUrl": "string",
                        "port": "string",
                        "project": "string",
                        "region": "string"
                      }
                    ]
                  },
                  "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                  "location": "string",
                  "rrdatas": [
                    "string"
                  ],
                  "signatureRrdatas": [
                    "string"
                  ]
                }
              ],
              "kind": "dns#rRSetRoutingPolicyGeoPolicy"
            },
            "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
            "primaryTargets": {
              "externalEndpoints": [
                "string"
              ],
              "internalLoadBalancers": [
                {
                  "ipAddress": "string",
                  "ipProtocol": "UNDEFINED",
                  "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                  "loadBalancerType": "NONE",
                  "networkUrl": "string",
                  "port": "string",
                  "project": "string",
                  "region": "string"
                }
              ]
            },
            "trickleTraffic": 0
          },
          "wrr": {
            "items": [
              {
                "healthCheckedTargets": {
                  "externalEndpoints": [
                    "string"
                  ],
                  "internalLoadBalancers": [
                    {
                      "ipAddress": "string",
                      "ipProtocol": "UNDEFINED",
                      "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                      "loadBalancerType": "NONE",
                      "networkUrl": "string",
                      "port": "string",
                      "project": "string",
                      "region": "string"
                    }
                  ]
                },
                "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
                "rrdatas": [
                  "string"
                ],
                "signatureRrdatas": [
                  "string"
                ],
                "weight": 0
              }
            ],
            "kind": "dns#rRSetRoutingPolicyWrrPolicy"
          }
        },
        "rrdatas": [
          "string"
        ],
        "signatureRrdatas": [
          "string"
        ],
        "ttl": 0,
        "type": "string"
      }
    ],
    "deletions": [
      {
        "kind": "dns#resourceRecordSet",
        "name": "string",
        "routingPolicy": {
          "geo": {
            "enableFencing": true,
            "items": [
              {
                "healthCheckedTargets": {
                  "externalEndpoints": [
                    "string"
                  ],
                  "internalLoadBalancers": [
                    {
                      "ipAddress": "string",
                      "ipProtocol": "UNDEFINED",
                      "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                      "loadBalancerType": "NONE",
                      "networkUrl": "string",
                      "port": "string",
                      "project": "string",
                      "region": "string"
                    }
                  ]
                },
                "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                "location": "string",
                "rrdatas": [
                  "string"
                ],
                "signatureRrdatas": [
                  "string"
                ]
              }
            ],
            "kind": "dns#rRSetRoutingPolicyGeoPolicy"
          },
          "healthCheck": "string",
          "kind": "dns#rRSetRoutingPolicy",
          "primaryBackup": {
            "backupGeoTargets": {
              "enableFencing": true,
              "items": [
                {
                  "healthCheckedTargets": {
                    "externalEndpoints": [
                      "string"
                    ],
                    "internalLoadBalancers": [
                      {
                        "ipAddress": "string",
                        "ipProtocol": "UNDEFINED",
                        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                        "loadBalancerType": "NONE",
                        "networkUrl": "string",
                        "port": "string",
                        "project": "string",
                        "region": "string"
                      }
                    ]
                  },
                  "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                  "location": "string",
                  "rrdatas": [
                    "string"
                  ],
                  "signatureRrdatas": [
                    "string"
                  ]
                }
              ],
              "kind": "dns#rRSetRoutingPolicyGeoPolicy"
            },
            "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
            "primaryTargets": {
              "externalEndpoints": [
                "string"
              ],
              "internalLoadBalancers": [
                {
                  "ipAddress": "string",
                  "ipProtocol": "UNDEFINED",
                  "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                  "loadBalancerType": "NONE",
                  "networkUrl": "string",
                  "port": "string",
                  "project": "string",
                  "region": "string"
                }
              ]
            },
            "trickleTraffic": 0
          },
          "wrr": {
            "items": [
              {
                "healthCheckedTargets": {
                  "externalEndpoints": [
                    "string"
                  ],
                  "internalLoadBalancers": [
                    {
                      "ipAddress": "string",
                      "ipProtocol": "UNDEFINED",
                      "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                      "loadBalancerType": "NONE",
                      "networkUrl": "string",
                      "port": "string",
                      "project": "string",
                      "region": "string"
                    }
                  ]
                },
                "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
                "rrdatas": [
                  "string"
                ],
                "signatureRrdatas": [
                  "string"
                ],
                "weight": 0
              }
            ],
            "kind": "dns#rRSetRoutingPolicyWrrPolicy"
          }
        },
        "rrdatas": [
          "string"
        ],
        "signatureRrdatas": [
          "string"
        ],
        "ttl": 0,
        "type": "string"
      }
    ],
    "id": "string",
    "isServing": true,
    "kind": "dns#change",
    "startTime": "string",
    "status": "PENDING"
  }'
```

`POST /dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}/changes`

Atomically updates the ResourceRecordSet collection.

> Body parameter

```json
{
  "additions": [
    {
      "kind": "dns#resourceRecordSet",
      "name": "string",
      "routingPolicy": {
        "geo": {
          "enableFencing": true,
          "items": [
            {
              "healthCheckedTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
              "location": "string",
              "rrdatas": [
                "string"
              ],
              "signatureRrdatas": [
                "string"
              ]
            }
          ],
          "kind": "dns#rRSetRoutingPolicyGeoPolicy"
        },
        "healthCheck": "string",
        "kind": "dns#rRSetRoutingPolicy",
        "primaryBackup": {
          "backupGeoTargets": {
            "enableFencing": true,
            "items": [
              {
                "healthCheckedTargets": {
                  "externalEndpoints": [
                    "string"
                  ],
                  "internalLoadBalancers": [
                    {
                      "ipAddress": "string",
                      "ipProtocol": "UNDEFINED",
                      "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                      "loadBalancerType": "NONE",
                      "networkUrl": "string",
                      "port": "string",
                      "project": "string",
                      "region": "string"
                    }
                  ]
                },
                "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                "location": "string",
                "rrdatas": [
                  "string"
                ],
                "signatureRrdatas": [
                  "string"
                ]
              }
            ],
            "kind": "dns#rRSetRoutingPolicyGeoPolicy"
          },
          "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
          "primaryTargets": {
            "externalEndpoints": [
              "string"
            ],
            "internalLoadBalancers": [
              {
                "ipAddress": "string",
                "ipProtocol": "UNDEFINED",
                "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                "loadBalancerType": "NONE",
                "networkUrl": "string",
                "port": "string",
                "project": "string",
                "region": "string"
              }
            ]
          },
          "trickleTraffic": 0
        },
        "wrr": {
          "items": [
            {
              "healthCheckedTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
              "rrdatas": [
                "string"
              ],
              "signatureRrdatas": [
                "string"
              ],
              "weight": 0
            }
          ],
          "kind": "dns#rRSetRoutingPolicyWrrPolicy"
        }
      },
      "rrdatas": [
        "string"
      ],
      "signatureRrdatas": [
        "string"
      ],
      "ttl": 0,
      "type": "string"
    }
  ],
  "deletions": [
    {
      "kind": "dns#resourceRecordSet",
      "name": "string",
      "routingPolicy": {
        "geo": {
          "enableFencing": true,
          "items": [
            {
              "healthCheckedTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
              "location": "string",
              "rrdatas": [
                "string"
              ],
              "signatureRrdatas": [
                "string"
              ]
            }
          ],
          "kind": "dns#rRSetRoutingPolicyGeoPolicy"
        },
        "healthCheck": "string",
        "kind": "dns#rRSetRoutingPolicy",
        "primaryBackup": {
          "backupGeoTargets": {
            "enableFencing": true,
            "items": [
              {
                "healthCheckedTargets": {
                  "externalEndpoints": [
                    "string"
                  ],
                  "internalLoadBalancers": [
                    {
                      "ipAddress": "string",
                      "ipProtocol": "UNDEFINED",
                      "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                      "loadBalancerType": "NONE",
                      "networkUrl": "string",
                      "port": "string",
                      "project": "string",
                      "region": "string"
                    }
                  ]
                },
                "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                "location": "string",
                "rrdatas": [
                  "string"
                ],
                "signatureRrdatas": [
                  "string"
                ]
              }
            ],
            "kind": "dns#rRSetRoutingPolicyGeoPolicy"
          },
          "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
          "primaryTargets": {
            "externalEndpoints": [
              "string"
            ],
            "internalLoadBalancers": [
              {
                "ipAddress": "string",
                "ipProtocol": "UNDEFINED",
                "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                "loadBalancerType": "NONE",
                "networkUrl": "string",
                "port": "string",
                "project": "string",
                "region": "string"
              }
            ]
          },
          "trickleTraffic": 0
        },
        "wrr": {
          "items": [
            {
              "healthCheckedTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
              "rrdatas": [
                "string"
              ],
              "signatureRrdatas": [
                "string"
              ],
              "weight": 0
            }
          ],
          "kind": "dns#rRSetRoutingPolicyWrrPolicy"
        }
      },
      "rrdatas": [
        "string"
      ],
      "signatureRrdatas": [
        "string"
      ],
      "ttl": 0,
      "type": "string"
    }
  ],
  "id": "string",
  "isServing": true,
  "kind": "dns#change",
  "startTime": "string",
  "status": "PENDING"
}
```

<h3 id="dnschangescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|none|
|managedZone|path|string|true|Identifies the managed zone addressed by this request. Can be the managed zone name or ID.|
|clientOperationId|query|string|false|For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.|
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
|body|body|[Change](#schemachange)|false|none|
|» additions|body|[[ResourceRecordSet](#schemaresourcerecordset)]|false|Which ResourceRecordSets to add?|
|» deletions|body|[[ResourceRecordSet](#schemaresourcerecordset)]|false|Which ResourceRecordSets to remove? Must match existing data exactly.|
|» id|body|string|false|Unique identifier for the resource; defined by the server (output only).|
|» isServing|body|boolean|false|If the DNS queries for the zone will be served.|
|» kind|body|string|false|none|
|» startTime|body|string|false|The time that this operation was started by the server (output only). This is in RFC3339 text format.|
|» status|body|string|false|Status of the operation (output only). A status of "done" means that the request to update the authoritative servers has been sent, but the servers might not be updated yet.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» status|PENDING|
|» status|DONE|

> Example responses

> 200 Response

```json
{
  "additions": [
    {
      "kind": "dns#resourceRecordSet",
      "name": "string",
      "routingPolicy": {
        "geo": {
          "enableFencing": true,
          "items": [
            {
              "healthCheckedTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
              "location": "string",
              "rrdatas": [
                "string"
              ],
              "signatureRrdatas": [
                "string"
              ]
            }
          ],
          "kind": "dns#rRSetRoutingPolicyGeoPolicy"
        },
        "healthCheck": "string",
        "kind": "dns#rRSetRoutingPolicy",
        "primaryBackup": {
          "backupGeoTargets": {
            "enableFencing": true,
            "items": [
              {
                "healthCheckedTargets": {
                  "externalEndpoints": [
                    "string"
                  ],
                  "internalLoadBalancers": [
                    {
                      "ipAddress": "string",
                      "ipProtocol": "UNDEFINED",
                      "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                      "loadBalancerType": "NONE",
                      "networkUrl": "string",
                      "port": "string",
                      "project": "string",
                      "region": "string"
                    }
                  ]
                },
                "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                "location": "string",
                "rrdatas": [
                  "string"
                ],
                "signatureRrdatas": [
                  "string"
                ]
              }
            ],
            "kind": "dns#rRSetRoutingPolicyGeoPolicy"
          },
          "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
          "primaryTargets": {
            "externalEndpoints": [
              "string"
            ],
            "internalLoadBalancers": [
              {
                "ipAddress": "string",
                "ipProtocol": "UNDEFINED",
                "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                "loadBalancerType": "NONE",
                "networkUrl": "string",
                "port": "string",
                "project": "string",
                "region": "string"
              }
            ]
          },
          "trickleTraffic": 0
        },
        "wrr": {
          "items": [
            {
              "healthCheckedTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
              "rrdatas": [
                "string"
              ],
              "signatureRrdatas": [
                "string"
              ],
              "weight": 0
            }
          ],
          "kind": "dns#rRSetRoutingPolicyWrrPolicy"
        }
      },
      "rrdatas": [
        "string"
      ],
      "signatureRrdatas": [
        "string"
      ],
      "ttl": 0,
      "type": "string"
    }
  ],
  "deletions": [
    {
      "kind": "dns#resourceRecordSet",
      "name": "string",
      "routingPolicy": {
        "geo": {
          "enableFencing": true,
          "items": [
            {
              "healthCheckedTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
              "location": "string",
              "rrdatas": [
                "string"
              ],
              "signatureRrdatas": [
                "string"
              ]
            }
          ],
          "kind": "dns#rRSetRoutingPolicyGeoPolicy"
        },
        "healthCheck": "string",
        "kind": "dns#rRSetRoutingPolicy",
        "primaryBackup": {
          "backupGeoTargets": {
            "enableFencing": true,
            "items": [
              {
                "healthCheckedTargets": {
                  "externalEndpoints": [
                    "string"
                  ],
                  "internalLoadBalancers": [
                    {
                      "ipAddress": "string",
                      "ipProtocol": "UNDEFINED",
                      "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                      "loadBalancerType": "NONE",
                      "networkUrl": "string",
                      "port": "string",
                      "project": "string",
                      "region": "string"
                    }
                  ]
                },
                "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                "location": "string",
                "rrdatas": [
                  "string"
                ],
                "signatureRrdatas": [
                  "string"
                ]
              }
            ],
            "kind": "dns#rRSetRoutingPolicyGeoPolicy"
          },
          "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
          "primaryTargets": {
            "externalEndpoints": [
              "string"
            ],
            "internalLoadBalancers": [
              {
                "ipAddress": "string",
                "ipProtocol": "UNDEFINED",
                "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                "loadBalancerType": "NONE",
                "networkUrl": "string",
                "port": "string",
                "project": "string",
                "region": "string"
              }
            ]
          },
          "trickleTraffic": 0
        },
        "wrr": {
          "items": [
            {
              "healthCheckedTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
              "rrdatas": [
                "string"
              ],
              "signatureRrdatas": [
                "string"
              ],
              "weight": 0
            }
          ],
          "kind": "dns#rRSetRoutingPolicyWrrPolicy"
        }
      },
      "rrdatas": [
        "string"
      ],
      "signatureRrdatas": [
        "string"
      ],
      "ttl": 0,
      "type": "string"
    }
  ],
  "id": "string",
  "isServing": true,
  "kind": "dns#change",
  "startTime": "string",
  "status": "PENDING"
}
```

<h3 id="dnschangescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Change](#schemachange)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.changes.get

<a id="opIddns.changes.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/managedZones/string/changes/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}/changes/{changeId}`

Fetches the representation of an existing Change.

<h3 id="dnschangesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|none|
|managedZone|path|string|true|Identifies the managed zone addressed by this request. Can be the managed zone name or ID.|
|changeId|path|string|true|The identifier of the requested change, from a previous ResourceRecordSetsChangeResponse.|
|clientOperationId|query|string|false|For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.|
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
  "additions": [
    {
      "kind": "dns#resourceRecordSet",
      "name": "string",
      "routingPolicy": {
        "geo": {
          "enableFencing": true,
          "items": [
            {
              "healthCheckedTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
              "location": "string",
              "rrdatas": [
                "string"
              ],
              "signatureRrdatas": [
                "string"
              ]
            }
          ],
          "kind": "dns#rRSetRoutingPolicyGeoPolicy"
        },
        "healthCheck": "string",
        "kind": "dns#rRSetRoutingPolicy",
        "primaryBackup": {
          "backupGeoTargets": {
            "enableFencing": true,
            "items": [
              {
                "healthCheckedTargets": {
                  "externalEndpoints": [
                    "string"
                  ],
                  "internalLoadBalancers": [
                    {
                      "ipAddress": "string",
                      "ipProtocol": "UNDEFINED",
                      "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                      "loadBalancerType": "NONE",
                      "networkUrl": "string",
                      "port": "string",
                      "project": "string",
                      "region": "string"
                    }
                  ]
                },
                "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                "location": "string",
                "rrdatas": [
                  "string"
                ],
                "signatureRrdatas": [
                  "string"
                ]
              }
            ],
            "kind": "dns#rRSetRoutingPolicyGeoPolicy"
          },
          "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
          "primaryTargets": {
            "externalEndpoints": [
              "string"
            ],
            "internalLoadBalancers": [
              {
                "ipAddress": "string",
                "ipProtocol": "UNDEFINED",
                "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                "loadBalancerType": "NONE",
                "networkUrl": "string",
                "port": "string",
                "project": "string",
                "region": "string"
              }
            ]
          },
          "trickleTraffic": 0
        },
        "wrr": {
          "items": [
            {
              "healthCheckedTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
              "rrdatas": [
                "string"
              ],
              "signatureRrdatas": [
                "string"
              ],
              "weight": 0
            }
          ],
          "kind": "dns#rRSetRoutingPolicyWrrPolicy"
        }
      },
      "rrdatas": [
        "string"
      ],
      "signatureRrdatas": [
        "string"
      ],
      "ttl": 0,
      "type": "string"
    }
  ],
  "deletions": [
    {
      "kind": "dns#resourceRecordSet",
      "name": "string",
      "routingPolicy": {
        "geo": {
          "enableFencing": true,
          "items": [
            {
              "healthCheckedTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
              "location": "string",
              "rrdatas": [
                "string"
              ],
              "signatureRrdatas": [
                "string"
              ]
            }
          ],
          "kind": "dns#rRSetRoutingPolicyGeoPolicy"
        },
        "healthCheck": "string",
        "kind": "dns#rRSetRoutingPolicy",
        "primaryBackup": {
          "backupGeoTargets": {
            "enableFencing": true,
            "items": [
              {
                "healthCheckedTargets": {
                  "externalEndpoints": [
                    "string"
                  ],
                  "internalLoadBalancers": [
                    {
                      "ipAddress": "string",
                      "ipProtocol": "UNDEFINED",
                      "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                      "loadBalancerType": "NONE",
                      "networkUrl": "string",
                      "port": "string",
                      "project": "string",
                      "region": "string"
                    }
                  ]
                },
                "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                "location": "string",
                "rrdatas": [
                  "string"
                ],
                "signatureRrdatas": [
                  "string"
                ]
              }
            ],
            "kind": "dns#rRSetRoutingPolicyGeoPolicy"
          },
          "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
          "primaryTargets": {
            "externalEndpoints": [
              "string"
            ],
            "internalLoadBalancers": [
              {
                "ipAddress": "string",
                "ipProtocol": "UNDEFINED",
                "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                "loadBalancerType": "NONE",
                "networkUrl": "string",
                "port": "string",
                "project": "string",
                "region": "string"
              }
            ]
          },
          "trickleTraffic": 0
        },
        "wrr": {
          "items": [
            {
              "healthCheckedTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
              "rrdatas": [
                "string"
              ],
              "signatureRrdatas": [
                "string"
              ],
              "weight": 0
            }
          ],
          "kind": "dns#rRSetRoutingPolicyWrrPolicy"
        }
      },
      "rrdatas": [
        "string"
      ],
      "signatureRrdatas": [
        "string"
      ],
      "ttl": 0,
      "type": "string"
    }
  ],
  "id": "string",
  "isServing": true,
  "kind": "dns#change",
  "startTime": "string",
  "status": "PENDING"
}
```

<h3 id="dnschangesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Change](#schemachange)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

<h1 id="cloud-dns-api-dnskeys">dnsKeys</h1>

## dns.dnsKeys.list

<a id="opIddns.dnsKeys.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/managedZones/string/dnsKeys \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}/dnsKeys`

Enumerates DnsKeys to a ResourceRecordSet collection.

<h3 id="dnsdnskeyslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information will be used for routing and will be part of the resource name.|
|managedZone|path|string|true|Identifies the managed zone addressed by this request. Can be the managed zone name or ID.|
|digestType|query|string|false|An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type is computed and displayed.|
|maxResults|query|integer|false|Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.|
|pageToken|query|string|false|Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.|
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
  "dnsKeys": [
    {
      "algorithm": "RSASHA1",
      "creationTime": "string",
      "description": "string",
      "digests": [
        {
          "digest": "string",
          "type": "SHA1"
        }
      ],
      "id": "string",
      "isActive": true,
      "keyLength": 0,
      "keyTag": 0,
      "kind": "dns#dnsKey",
      "publicKey": "string",
      "type": "KEY_SIGNING"
    }
  ],
  "header": {
    "operationId": "string"
  },
  "kind": "dns#dnsKeysListResponse",
  "nextPageToken": "string"
}
```

<h3 id="dnsdnskeyslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DnsKeysListResponse](#schemadnskeyslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.dnsKeys.get

<a id="opIddns.dnsKeys.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/managedZones/string/dnsKeys/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}/dnsKeys/{dnsKeyId}`

Fetches the representation of an existing DnsKey.

<h3 id="dnsdnskeysget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information will be used for routing and will be part of the resource name.|
|managedZone|path|string|true|Identifies the managed zone addressed by this request. Can be the managed zone name or ID.|
|dnsKeyId|path|string|true|The identifier of the requested DnsKey.|
|clientOperationId|query|string|false|For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.|
|digestType|query|string|false|An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type is computed and displayed.|
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
  "algorithm": "RSASHA1",
  "creationTime": "string",
  "description": "string",
  "digests": [
    {
      "digest": "string",
      "type": "SHA1"
    }
  ],
  "id": "string",
  "isActive": true,
  "keyLength": 0,
  "keyTag": 0,
  "kind": "dns#dnsKey",
  "publicKey": "string",
  "type": "KEY_SIGNING"
}
```

<h3 id="dnsdnskeysget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DnsKey](#schemadnskey)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

<h1 id="cloud-dns-api-managedzoneoperations">managedZoneOperations</h1>

## dns.managedZoneOperations.list

<a id="opIddns.managedZoneOperations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/managedZones/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}/operations`

Enumerates Operations for the given ManagedZone.

<h3 id="dnsmanagedzoneoperationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information will be used for routing and will be part of the resource name.|
|managedZone|path|string|true|Identifies the managed zone addressed by this request.|
|maxResults|query|integer|false|Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.|
|pageToken|query|string|false|Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.|
|sortBy|query|string|false|Sorting criterion. The only supported values are START_TIME and ID.|
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
|sortBy|START_TIME|
|sortBy|ID|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "header": {
    "operationId": "string"
  },
  "kind": "dns#managedZoneOperationsListResponse",
  "nextPageToken": "string",
  "operations": [
    {
      "dnsKeyContext": {
        "newValue": {
          "algorithm": "RSASHA1",
          "creationTime": "string",
          "description": "string",
          "digests": [
            {
              "digest": "string",
              "type": "SHA1"
            }
          ],
          "id": "string",
          "isActive": true,
          "keyLength": 0,
          "keyTag": 0,
          "kind": "dns#dnsKey",
          "publicKey": "string",
          "type": "KEY_SIGNING"
        },
        "oldValue": {
          "algorithm": "RSASHA1",
          "creationTime": "string",
          "description": "string",
          "digests": [
            {
              "digest": "string",
              "type": "SHA1"
            }
          ],
          "id": "string",
          "isActive": true,
          "keyLength": 0,
          "keyTag": 0,
          "kind": "dns#dnsKey",
          "publicKey": "string",
          "type": "KEY_SIGNING"
        }
      },
      "id": "string",
      "kind": "dns#operation",
      "startTime": "string",
      "status": "PENDING",
      "type": "string",
      "user": "string",
      "zoneContext": {
        "newValue": {
          "cloudLoggingConfig": {
            "enableLogging": true,
            "kind": "dns#managedZoneCloudLoggingConfig"
          },
          "creationTime": "string",
          "description": "string",
          "dnsName": "string",
          "dnssecConfig": {
            "defaultKeySpecs": [
              {
                "algorithm": "RSASHA1",
                "keyLength": 0,
                "keyType": "KEY_SIGNING",
                "kind": "dns#dnsKeySpec"
              }
            ],
            "kind": "dns#managedZoneDnsSecConfig",
            "nonExistence": "NSEC",
            "state": "OFF"
          },
          "forwardingConfig": {
            "kind": "dns#managedZoneForwardingConfig",
            "targetNameServers": [
              {
                "forwardingPath": "DEFAULT",
                "ipv4Address": "string",
                "ipv6Address": "string",
                "kind": "dns#managedZoneForwardingConfigNameServerTarget"
              }
            ]
          },
          "id": "string",
          "kind": "dns#managedZone",
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "name": "string",
          "nameServerSet": "string",
          "nameServers": [
            "string"
          ],
          "peeringConfig": {
            "kind": "dns#managedZonePeeringConfig",
            "targetNetwork": {
              "deactivateTime": "string",
              "kind": "dns#managedZonePeeringConfigTargetNetwork",
              "networkUrl": "string"
            }
          },
          "privateVisibilityConfig": {
            "gkeClusters": [
              {
                "gkeClusterName": "string",
                "kind": "dns#managedZonePrivateVisibilityConfigGKECluster"
              }
            ],
            "kind": "dns#managedZonePrivateVisibilityConfig",
            "networks": [
              {
                "kind": "dns#managedZonePrivateVisibilityConfigNetwork",
                "networkUrl": "string"
              }
            ]
          },
          "reverseLookupConfig": {
            "kind": "dns#managedZoneReverseLookupConfig"
          },
          "serviceDirectoryConfig": {
            "kind": "dns#managedZoneServiceDirectoryConfig",
            "namespace": {
              "deletionTime": "string",
              "kind": "dns#managedZoneServiceDirectoryConfigNamespace",
              "namespaceUrl": "string"
            }
          },
          "visibility": "PUBLIC"
        },
        "oldValue": {
          "cloudLoggingConfig": {
            "enableLogging": true,
            "kind": "dns#managedZoneCloudLoggingConfig"
          },
          "creationTime": "string",
          "description": "string",
          "dnsName": "string",
          "dnssecConfig": {
            "defaultKeySpecs": [
              {
                "algorithm": "RSASHA1",
                "keyLength": 0,
                "keyType": "KEY_SIGNING",
                "kind": "dns#dnsKeySpec"
              }
            ],
            "kind": "dns#managedZoneDnsSecConfig",
            "nonExistence": "NSEC",
            "state": "OFF"
          },
          "forwardingConfig": {
            "kind": "dns#managedZoneForwardingConfig",
            "targetNameServers": [
              {
                "forwardingPath": "DEFAULT",
                "ipv4Address": "string",
                "ipv6Address": "string",
                "kind": "dns#managedZoneForwardingConfigNameServerTarget"
              }
            ]
          },
          "id": "string",
          "kind": "dns#managedZone",
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "name": "string",
          "nameServerSet": "string",
          "nameServers": [
            "string"
          ],
          "peeringConfig": {
            "kind": "dns#managedZonePeeringConfig",
            "targetNetwork": {
              "deactivateTime": "string",
              "kind": "dns#managedZonePeeringConfigTargetNetwork",
              "networkUrl": "string"
            }
          },
          "privateVisibilityConfig": {
            "gkeClusters": [
              {
                "gkeClusterName": "string",
                "kind": "dns#managedZonePrivateVisibilityConfigGKECluster"
              }
            ],
            "kind": "dns#managedZonePrivateVisibilityConfig",
            "networks": [
              {
                "kind": "dns#managedZonePrivateVisibilityConfigNetwork",
                "networkUrl": "string"
              }
            ]
          },
          "reverseLookupConfig": {
            "kind": "dns#managedZoneReverseLookupConfig"
          },
          "serviceDirectoryConfig": {
            "kind": "dns#managedZoneServiceDirectoryConfig",
            "namespace": {
              "deletionTime": "string",
              "kind": "dns#managedZoneServiceDirectoryConfigNamespace",
              "namespaceUrl": "string"
            }
          },
          "visibility": "PUBLIC"
        }
      }
    }
  ]
}
```

<h3 id="dnsmanagedzoneoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ManagedZoneOperationsListResponse](#schemamanagedzoneoperationslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.managedZoneOperations.get

<a id="opIddns.managedZoneOperations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/managedZones/string/operations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}/operations/{operation}`

Fetches the representation of an existing Operation.

<h3 id="dnsmanagedzoneoperationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information will be used for routing and will be part of the resource name.|
|managedZone|path|string|true|Identifies the managed zone addressed by this request.|
|operation|path|string|true|Identifies the operation addressed by this request (ID of the operation).|
|clientOperationId|query|string|false|For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.|
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
  "dnsKeyContext": {
    "newValue": {
      "algorithm": "RSASHA1",
      "creationTime": "string",
      "description": "string",
      "digests": [
        {
          "digest": "string",
          "type": "SHA1"
        }
      ],
      "id": "string",
      "isActive": true,
      "keyLength": 0,
      "keyTag": 0,
      "kind": "dns#dnsKey",
      "publicKey": "string",
      "type": "KEY_SIGNING"
    },
    "oldValue": {
      "algorithm": "RSASHA1",
      "creationTime": "string",
      "description": "string",
      "digests": [
        {
          "digest": "string",
          "type": "SHA1"
        }
      ],
      "id": "string",
      "isActive": true,
      "keyLength": 0,
      "keyTag": 0,
      "kind": "dns#dnsKey",
      "publicKey": "string",
      "type": "KEY_SIGNING"
    }
  },
  "id": "string",
  "kind": "dns#operation",
  "startTime": "string",
  "status": "PENDING",
  "type": "string",
  "user": "string",
  "zoneContext": {
    "newValue": {
      "cloudLoggingConfig": {
        "enableLogging": true,
        "kind": "dns#managedZoneCloudLoggingConfig"
      },
      "creationTime": "string",
      "description": "string",
      "dnsName": "string",
      "dnssecConfig": {
        "defaultKeySpecs": [
          {
            "algorithm": "RSASHA1",
            "keyLength": 0,
            "keyType": "KEY_SIGNING",
            "kind": "dns#dnsKeySpec"
          }
        ],
        "kind": "dns#managedZoneDnsSecConfig",
        "nonExistence": "NSEC",
        "state": "OFF"
      },
      "forwardingConfig": {
        "kind": "dns#managedZoneForwardingConfig",
        "targetNameServers": [
          {
            "forwardingPath": "DEFAULT",
            "ipv4Address": "string",
            "ipv6Address": "string",
            "kind": "dns#managedZoneForwardingConfigNameServerTarget"
          }
        ]
      },
      "id": "string",
      "kind": "dns#managedZone",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "nameServerSet": "string",
      "nameServers": [
        "string"
      ],
      "peeringConfig": {
        "kind": "dns#managedZonePeeringConfig",
        "targetNetwork": {
          "deactivateTime": "string",
          "kind": "dns#managedZonePeeringConfigTargetNetwork",
          "networkUrl": "string"
        }
      },
      "privateVisibilityConfig": {
        "gkeClusters": [
          {
            "gkeClusterName": "string",
            "kind": "dns#managedZonePrivateVisibilityConfigGKECluster"
          }
        ],
        "kind": "dns#managedZonePrivateVisibilityConfig",
        "networks": [
          {
            "kind": "dns#managedZonePrivateVisibilityConfigNetwork",
            "networkUrl": "string"
          }
        ]
      },
      "reverseLookupConfig": {
        "kind": "dns#managedZoneReverseLookupConfig"
      },
      "serviceDirectoryConfig": {
        "kind": "dns#managedZoneServiceDirectoryConfig",
        "namespace": {
          "deletionTime": "string",
          "kind": "dns#managedZoneServiceDirectoryConfigNamespace",
          "namespaceUrl": "string"
        }
      },
      "visibility": "PUBLIC"
    },
    "oldValue": {
      "cloudLoggingConfig": {
        "enableLogging": true,
        "kind": "dns#managedZoneCloudLoggingConfig"
      },
      "creationTime": "string",
      "description": "string",
      "dnsName": "string",
      "dnssecConfig": {
        "defaultKeySpecs": [
          {
            "algorithm": "RSASHA1",
            "keyLength": 0,
            "keyType": "KEY_SIGNING",
            "kind": "dns#dnsKeySpec"
          }
        ],
        "kind": "dns#managedZoneDnsSecConfig",
        "nonExistence": "NSEC",
        "state": "OFF"
      },
      "forwardingConfig": {
        "kind": "dns#managedZoneForwardingConfig",
        "targetNameServers": [
          {
            "forwardingPath": "DEFAULT",
            "ipv4Address": "string",
            "ipv6Address": "string",
            "kind": "dns#managedZoneForwardingConfigNameServerTarget"
          }
        ]
      },
      "id": "string",
      "kind": "dns#managedZone",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "nameServerSet": "string",
      "nameServers": [
        "string"
      ],
      "peeringConfig": {
        "kind": "dns#managedZonePeeringConfig",
        "targetNetwork": {
          "deactivateTime": "string",
          "kind": "dns#managedZonePeeringConfigTargetNetwork",
          "networkUrl": "string"
        }
      },
      "privateVisibilityConfig": {
        "gkeClusters": [
          {
            "gkeClusterName": "string",
            "kind": "dns#managedZonePrivateVisibilityConfigGKECluster"
          }
        ],
        "kind": "dns#managedZonePrivateVisibilityConfig",
        "networks": [
          {
            "kind": "dns#managedZonePrivateVisibilityConfigNetwork",
            "networkUrl": "string"
          }
        ]
      },
      "reverseLookupConfig": {
        "kind": "dns#managedZoneReverseLookupConfig"
      },
      "serviceDirectoryConfig": {
        "kind": "dns#managedZoneServiceDirectoryConfig",
        "namespace": {
          "deletionTime": "string",
          "kind": "dns#managedZoneServiceDirectoryConfigNamespace",
          "namespaceUrl": "string"
        }
      },
      "visibility": "PUBLIC"
    }
  }
}
```

<h3 id="dnsmanagedzoneoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

<h1 id="cloud-dns-api-managedzones">managedZones</h1>

## dns.managedZones.list

<a id="opIddns.managedZones.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/managedZones \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dns/v2/projects/{project}/locations/{location}/managedZones`

Enumerates ManagedZones that have been created but not yet deleted.

<h3 id="dnsmanagedzoneslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information will be used for routing and will be part of the resource name.|
|dnsName|query|string|false|Restricts the list to return only zones with this domain name.|
|maxResults|query|integer|false|Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.|
|pageToken|query|string|false|Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.|
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
  "header": {
    "operationId": "string"
  },
  "kind": "dns#managedZonesListResponse",
  "managedZones": [
    {
      "cloudLoggingConfig": {
        "enableLogging": true,
        "kind": "dns#managedZoneCloudLoggingConfig"
      },
      "creationTime": "string",
      "description": "string",
      "dnsName": "string",
      "dnssecConfig": {
        "defaultKeySpecs": [
          {
            "algorithm": "RSASHA1",
            "keyLength": 0,
            "keyType": "KEY_SIGNING",
            "kind": "dns#dnsKeySpec"
          }
        ],
        "kind": "dns#managedZoneDnsSecConfig",
        "nonExistence": "NSEC",
        "state": "OFF"
      },
      "forwardingConfig": {
        "kind": "dns#managedZoneForwardingConfig",
        "targetNameServers": [
          {
            "forwardingPath": "DEFAULT",
            "ipv4Address": "string",
            "ipv6Address": "string",
            "kind": "dns#managedZoneForwardingConfigNameServerTarget"
          }
        ]
      },
      "id": "string",
      "kind": "dns#managedZone",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "nameServerSet": "string",
      "nameServers": [
        "string"
      ],
      "peeringConfig": {
        "kind": "dns#managedZonePeeringConfig",
        "targetNetwork": {
          "deactivateTime": "string",
          "kind": "dns#managedZonePeeringConfigTargetNetwork",
          "networkUrl": "string"
        }
      },
      "privateVisibilityConfig": {
        "gkeClusters": [
          {
            "gkeClusterName": "string",
            "kind": "dns#managedZonePrivateVisibilityConfigGKECluster"
          }
        ],
        "kind": "dns#managedZonePrivateVisibilityConfig",
        "networks": [
          {
            "kind": "dns#managedZonePrivateVisibilityConfigNetwork",
            "networkUrl": "string"
          }
        ]
      },
      "reverseLookupConfig": {
        "kind": "dns#managedZoneReverseLookupConfig"
      },
      "serviceDirectoryConfig": {
        "kind": "dns#managedZoneServiceDirectoryConfig",
        "namespace": {
          "deletionTime": "string",
          "kind": "dns#managedZoneServiceDirectoryConfigNamespace",
          "namespaceUrl": "string"
        }
      },
      "visibility": "PUBLIC"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="dnsmanagedzoneslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ManagedZonesListResponse](#schemamanagedzoneslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.managedZones.create

<a id="opIddns.managedZones.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/managedZones \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cloudLoggingConfig": {
      "enableLogging": true,
      "kind": "dns#managedZoneCloudLoggingConfig"
    },
    "creationTime": "string",
    "description": "string",
    "dnsName": "string",
    "dnssecConfig": {
      "defaultKeySpecs": [
        {
          "algorithm": "RSASHA1",
          "keyLength": 0,
          "keyType": "KEY_SIGNING",
          "kind": "dns#dnsKeySpec"
        }
      ],
      "kind": "dns#managedZoneDnsSecConfig",
      "nonExistence": "NSEC",
      "state": "OFF"
    },
    "forwardingConfig": {
      "kind": "dns#managedZoneForwardingConfig",
      "targetNameServers": [
        {
          "forwardingPath": "DEFAULT",
          "ipv4Address": "string",
          "ipv6Address": "string",
          "kind": "dns#managedZoneForwardingConfigNameServerTarget"
        }
      ]
    },
    "id": "string",
    "kind": "dns#managedZone",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "nameServerSet": "string",
    "nameServers": [
      "string"
    ],
    "peeringConfig": {
      "kind": "dns#managedZonePeeringConfig",
      "targetNetwork": {
        "deactivateTime": "string",
        "kind": "dns#managedZonePeeringConfigTargetNetwork",
        "networkUrl": "string"
      }
    },
    "privateVisibilityConfig": {
      "gkeClusters": [
        {
          "gkeClusterName": "string",
          "kind": "dns#managedZonePrivateVisibilityConfigGKECluster"
        }
      ],
      "kind": "dns#managedZonePrivateVisibilityConfig",
      "networks": [
        {
          "kind": "dns#managedZonePrivateVisibilityConfigNetwork",
          "networkUrl": "string"
        }
      ]
    },
    "reverseLookupConfig": {
      "kind": "dns#managedZoneReverseLookupConfig"
    },
    "serviceDirectoryConfig": {
      "kind": "dns#managedZoneServiceDirectoryConfig",
      "namespace": {
        "deletionTime": "string",
        "kind": "dns#managedZoneServiceDirectoryConfigNamespace",
        "namespaceUrl": "string"
      }
    },
    "visibility": "PUBLIC"
  }'
```

`POST /dns/v2/projects/{project}/locations/{location}/managedZones`

Creates a new ManagedZone.

> Body parameter

```json
{
  "cloudLoggingConfig": {
    "enableLogging": true,
    "kind": "dns#managedZoneCloudLoggingConfig"
  },
  "creationTime": "string",
  "description": "string",
  "dnsName": "string",
  "dnssecConfig": {
    "defaultKeySpecs": [
      {
        "algorithm": "RSASHA1",
        "keyLength": 0,
        "keyType": "KEY_SIGNING",
        "kind": "dns#dnsKeySpec"
      }
    ],
    "kind": "dns#managedZoneDnsSecConfig",
    "nonExistence": "NSEC",
    "state": "OFF"
  },
  "forwardingConfig": {
    "kind": "dns#managedZoneForwardingConfig",
    "targetNameServers": [
      {
        "forwardingPath": "DEFAULT",
        "ipv4Address": "string",
        "ipv6Address": "string",
        "kind": "dns#managedZoneForwardingConfigNameServerTarget"
      }
    ]
  },
  "id": "string",
  "kind": "dns#managedZone",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "nameServerSet": "string",
  "nameServers": [
    "string"
  ],
  "peeringConfig": {
    "kind": "dns#managedZonePeeringConfig",
    "targetNetwork": {
      "deactivateTime": "string",
      "kind": "dns#managedZonePeeringConfigTargetNetwork",
      "networkUrl": "string"
    }
  },
  "privateVisibilityConfig": {
    "gkeClusters": [
      {
        "gkeClusterName": "string",
        "kind": "dns#managedZonePrivateVisibilityConfigGKECluster"
      }
    ],
    "kind": "dns#managedZonePrivateVisibilityConfig",
    "networks": [
      {
        "kind": "dns#managedZonePrivateVisibilityConfigNetwork",
        "networkUrl": "string"
      }
    ]
  },
  "reverseLookupConfig": {
    "kind": "dns#managedZoneReverseLookupConfig"
  },
  "serviceDirectoryConfig": {
    "kind": "dns#managedZoneServiceDirectoryConfig",
    "namespace": {
      "deletionTime": "string",
      "kind": "dns#managedZoneServiceDirectoryConfigNamespace",
      "namespaceUrl": "string"
    }
  },
  "visibility": "PUBLIC"
}
```

<h3 id="dnsmanagedzonescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information will be used for routing and will be part of the resource name.|
|clientOperationId|query|string|false|For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.|
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
|body|body|[ManagedZone](#schemamanagedzone)|false|none|
|» cloudLoggingConfig|body|[ManagedZoneCloudLoggingConfig](#schemamanagedzonecloudloggingconfig)|false|Cloud Logging configurations for publicly visible zones.|
|» creationTime|body|string|false|The time that this resource was created on the server. This is in RFC3339 text format. Output only.|
|» description|body|string|false|A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the managed zone's function.|
|» dnsName|body|string|false|The DNS name of this managed zone, for instance "example.com.".|
|» dnssecConfig|body|[ManagedZoneDnsSecConfig](#schemamanagedzonednssecconfig)|false|DNSSEC configuration.|
|» forwardingConfig|body|[ManagedZoneForwardingConfig](#schemamanagedzoneforwardingconfig)|false|The presence for this field indicates that outbound forwarding is enabled for this zone. The value of this field contains the set of destinations to forward to.|
|» id|body|string(uint64)|false|Unique identifier for the resource; defined by the server (output only)|
|» kind|body|string|false|none|
|» labels|body|object|false|User labels.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|User assigned name for this resource. Must be unique within the project. The name must be 1-63 characters long, must begin with a letter, end with a letter or digit, and only contain lowercase letters, digits or dashes.|
|» nameServerSet|body|string|false|Optionally specifies the NameServerSet for this ManagedZone. A NameServerSet is a set of DNS name servers that all host the same ManagedZones. Most users leave this field unset. If you need to use this field, contact your account team.|
|» nameServers|body|[string]|false|Delegate your managed_zone to these virtual name servers; defined by the server (output only)|
|» peeringConfig|body|[ManagedZonePeeringConfig](#schemamanagedzonepeeringconfig)|false|The presence of this field indicates that DNS Peering is enabled for this zone. The value of this field contains the network to peer with.|
|» privateVisibilityConfig|body|[ManagedZonePrivateVisibilityConfig](#schemamanagedzoneprivatevisibilityconfig)|false|For privately visible zones, the set of Virtual Private Cloud resources that the zone is visible from.|
|» reverseLookupConfig|body|[ManagedZoneReverseLookupConfig](#schemamanagedzonereverselookupconfig)|false|The presence of this field indicates that this is a managed reverse lookup zone and Cloud DNS resolves reverse lookup queries using automatically configured records for VPC resources. This only applies to networks listed under private_visibility_config.|
|» serviceDirectoryConfig|body|[ManagedZoneServiceDirectoryConfig](#schemamanagedzoneservicedirectoryconfig)|false|This field links to the associated service directory namespace. Do not set this field for public zones or forwarding zones.|
|» visibility|body|string|false|The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» visibility|PUBLIC|
|» visibility|PRIVATE|

> Example responses

> 200 Response

```json
{
  "cloudLoggingConfig": {
    "enableLogging": true,
    "kind": "dns#managedZoneCloudLoggingConfig"
  },
  "creationTime": "string",
  "description": "string",
  "dnsName": "string",
  "dnssecConfig": {
    "defaultKeySpecs": [
      {
        "algorithm": "RSASHA1",
        "keyLength": 0,
        "keyType": "KEY_SIGNING",
        "kind": "dns#dnsKeySpec"
      }
    ],
    "kind": "dns#managedZoneDnsSecConfig",
    "nonExistence": "NSEC",
    "state": "OFF"
  },
  "forwardingConfig": {
    "kind": "dns#managedZoneForwardingConfig",
    "targetNameServers": [
      {
        "forwardingPath": "DEFAULT",
        "ipv4Address": "string",
        "ipv6Address": "string",
        "kind": "dns#managedZoneForwardingConfigNameServerTarget"
      }
    ]
  },
  "id": "string",
  "kind": "dns#managedZone",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "nameServerSet": "string",
  "nameServers": [
    "string"
  ],
  "peeringConfig": {
    "kind": "dns#managedZonePeeringConfig",
    "targetNetwork": {
      "deactivateTime": "string",
      "kind": "dns#managedZonePeeringConfigTargetNetwork",
      "networkUrl": "string"
    }
  },
  "privateVisibilityConfig": {
    "gkeClusters": [
      {
        "gkeClusterName": "string",
        "kind": "dns#managedZonePrivateVisibilityConfigGKECluster"
      }
    ],
    "kind": "dns#managedZonePrivateVisibilityConfig",
    "networks": [
      {
        "kind": "dns#managedZonePrivateVisibilityConfigNetwork",
        "networkUrl": "string"
      }
    ]
  },
  "reverseLookupConfig": {
    "kind": "dns#managedZoneReverseLookupConfig"
  },
  "serviceDirectoryConfig": {
    "kind": "dns#managedZoneServiceDirectoryConfig",
    "namespace": {
      "deletionTime": "string",
      "kind": "dns#managedZoneServiceDirectoryConfigNamespace",
      "namespaceUrl": "string"
    }
  },
  "visibility": "PUBLIC"
}
```

<h3 id="dnsmanagedzonescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ManagedZone](#schemamanagedzone)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.managedZones.get

<a id="opIddns.managedZones.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/managedZones/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}`

Fetches the representation of an existing ManagedZone.

<h3 id="dnsmanagedzonesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information will be used for routing and will be part of the resource name.|
|managedZone|path|string|true|Identifies the managed zone addressed by this request. Can be the managed zone name or ID.|
|clientOperationId|query|string|false|For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.|
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
  "cloudLoggingConfig": {
    "enableLogging": true,
    "kind": "dns#managedZoneCloudLoggingConfig"
  },
  "creationTime": "string",
  "description": "string",
  "dnsName": "string",
  "dnssecConfig": {
    "defaultKeySpecs": [
      {
        "algorithm": "RSASHA1",
        "keyLength": 0,
        "keyType": "KEY_SIGNING",
        "kind": "dns#dnsKeySpec"
      }
    ],
    "kind": "dns#managedZoneDnsSecConfig",
    "nonExistence": "NSEC",
    "state": "OFF"
  },
  "forwardingConfig": {
    "kind": "dns#managedZoneForwardingConfig",
    "targetNameServers": [
      {
        "forwardingPath": "DEFAULT",
        "ipv4Address": "string",
        "ipv6Address": "string",
        "kind": "dns#managedZoneForwardingConfigNameServerTarget"
      }
    ]
  },
  "id": "string",
  "kind": "dns#managedZone",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "nameServerSet": "string",
  "nameServers": [
    "string"
  ],
  "peeringConfig": {
    "kind": "dns#managedZonePeeringConfig",
    "targetNetwork": {
      "deactivateTime": "string",
      "kind": "dns#managedZonePeeringConfigTargetNetwork",
      "networkUrl": "string"
    }
  },
  "privateVisibilityConfig": {
    "gkeClusters": [
      {
        "gkeClusterName": "string",
        "kind": "dns#managedZonePrivateVisibilityConfigGKECluster"
      }
    ],
    "kind": "dns#managedZonePrivateVisibilityConfig",
    "networks": [
      {
        "kind": "dns#managedZonePrivateVisibilityConfigNetwork",
        "networkUrl": "string"
      }
    ]
  },
  "reverseLookupConfig": {
    "kind": "dns#managedZoneReverseLookupConfig"
  },
  "serviceDirectoryConfig": {
    "kind": "dns#managedZoneServiceDirectoryConfig",
    "namespace": {
      "deletionTime": "string",
      "kind": "dns#managedZoneServiceDirectoryConfigNamespace",
      "namespaceUrl": "string"
    }
  },
  "visibility": "PUBLIC"
}
```

<h3 id="dnsmanagedzonesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ManagedZone](#schemamanagedzone)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.managedZones.update

<a id="opIddns.managedZones.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/managedZones/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cloudLoggingConfig": {
      "enableLogging": true,
      "kind": "dns#managedZoneCloudLoggingConfig"
    },
    "creationTime": "string",
    "description": "string",
    "dnsName": "string",
    "dnssecConfig": {
      "defaultKeySpecs": [
        {
          "algorithm": "RSASHA1",
          "keyLength": 0,
          "keyType": "KEY_SIGNING",
          "kind": "dns#dnsKeySpec"
        }
      ],
      "kind": "dns#managedZoneDnsSecConfig",
      "nonExistence": "NSEC",
      "state": "OFF"
    },
    "forwardingConfig": {
      "kind": "dns#managedZoneForwardingConfig",
      "targetNameServers": [
        {
          "forwardingPath": "DEFAULT",
          "ipv4Address": "string",
          "ipv6Address": "string",
          "kind": "dns#managedZoneForwardingConfigNameServerTarget"
        }
      ]
    },
    "id": "string",
    "kind": "dns#managedZone",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "nameServerSet": "string",
    "nameServers": [
      "string"
    ],
    "peeringConfig": {
      "kind": "dns#managedZonePeeringConfig",
      "targetNetwork": {
        "deactivateTime": "string",
        "kind": "dns#managedZonePeeringConfigTargetNetwork",
        "networkUrl": "string"
      }
    },
    "privateVisibilityConfig": {
      "gkeClusters": [
        {
          "gkeClusterName": "string",
          "kind": "dns#managedZonePrivateVisibilityConfigGKECluster"
        }
      ],
      "kind": "dns#managedZonePrivateVisibilityConfig",
      "networks": [
        {
          "kind": "dns#managedZonePrivateVisibilityConfigNetwork",
          "networkUrl": "string"
        }
      ]
    },
    "reverseLookupConfig": {
      "kind": "dns#managedZoneReverseLookupConfig"
    },
    "serviceDirectoryConfig": {
      "kind": "dns#managedZoneServiceDirectoryConfig",
      "namespace": {
        "deletionTime": "string",
        "kind": "dns#managedZoneServiceDirectoryConfigNamespace",
        "namespaceUrl": "string"
      }
    },
    "visibility": "PUBLIC"
  }'
```

`PUT /dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}`

Updates an existing ManagedZone.

> Body parameter

```json
{
  "cloudLoggingConfig": {
    "enableLogging": true,
    "kind": "dns#managedZoneCloudLoggingConfig"
  },
  "creationTime": "string",
  "description": "string",
  "dnsName": "string",
  "dnssecConfig": {
    "defaultKeySpecs": [
      {
        "algorithm": "RSASHA1",
        "keyLength": 0,
        "keyType": "KEY_SIGNING",
        "kind": "dns#dnsKeySpec"
      }
    ],
    "kind": "dns#managedZoneDnsSecConfig",
    "nonExistence": "NSEC",
    "state": "OFF"
  },
  "forwardingConfig": {
    "kind": "dns#managedZoneForwardingConfig",
    "targetNameServers": [
      {
        "forwardingPath": "DEFAULT",
        "ipv4Address": "string",
        "ipv6Address": "string",
        "kind": "dns#managedZoneForwardingConfigNameServerTarget"
      }
    ]
  },
  "id": "string",
  "kind": "dns#managedZone",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "nameServerSet": "string",
  "nameServers": [
    "string"
  ],
  "peeringConfig": {
    "kind": "dns#managedZonePeeringConfig",
    "targetNetwork": {
      "deactivateTime": "string",
      "kind": "dns#managedZonePeeringConfigTargetNetwork",
      "networkUrl": "string"
    }
  },
  "privateVisibilityConfig": {
    "gkeClusters": [
      {
        "gkeClusterName": "string",
        "kind": "dns#managedZonePrivateVisibilityConfigGKECluster"
      }
    ],
    "kind": "dns#managedZonePrivateVisibilityConfig",
    "networks": [
      {
        "kind": "dns#managedZonePrivateVisibilityConfigNetwork",
        "networkUrl": "string"
      }
    ]
  },
  "reverseLookupConfig": {
    "kind": "dns#managedZoneReverseLookupConfig"
  },
  "serviceDirectoryConfig": {
    "kind": "dns#managedZoneServiceDirectoryConfig",
    "namespace": {
      "deletionTime": "string",
      "kind": "dns#managedZoneServiceDirectoryConfigNamespace",
      "namespaceUrl": "string"
    }
  },
  "visibility": "PUBLIC"
}
```

<h3 id="dnsmanagedzonesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information will be used for routing and will be part of the resource name.|
|managedZone|path|string|true|Identifies the managed zone addressed by this request. Can be the managed zone name or ID.|
|clientOperationId|query|string|false|For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.|
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
|body|body|[ManagedZone](#schemamanagedzone)|false|none|
|» cloudLoggingConfig|body|[ManagedZoneCloudLoggingConfig](#schemamanagedzonecloudloggingconfig)|false|Cloud Logging configurations for publicly visible zones.|
|» creationTime|body|string|false|The time that this resource was created on the server. This is in RFC3339 text format. Output only.|
|» description|body|string|false|A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the managed zone's function.|
|» dnsName|body|string|false|The DNS name of this managed zone, for instance "example.com.".|
|» dnssecConfig|body|[ManagedZoneDnsSecConfig](#schemamanagedzonednssecconfig)|false|DNSSEC configuration.|
|» forwardingConfig|body|[ManagedZoneForwardingConfig](#schemamanagedzoneforwardingconfig)|false|The presence for this field indicates that outbound forwarding is enabled for this zone. The value of this field contains the set of destinations to forward to.|
|» id|body|string(uint64)|false|Unique identifier for the resource; defined by the server (output only)|
|» kind|body|string|false|none|
|» labels|body|object|false|User labels.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|User assigned name for this resource. Must be unique within the project. The name must be 1-63 characters long, must begin with a letter, end with a letter or digit, and only contain lowercase letters, digits or dashes.|
|» nameServerSet|body|string|false|Optionally specifies the NameServerSet for this ManagedZone. A NameServerSet is a set of DNS name servers that all host the same ManagedZones. Most users leave this field unset. If you need to use this field, contact your account team.|
|» nameServers|body|[string]|false|Delegate your managed_zone to these virtual name servers; defined by the server (output only)|
|» peeringConfig|body|[ManagedZonePeeringConfig](#schemamanagedzonepeeringconfig)|false|The presence of this field indicates that DNS Peering is enabled for this zone. The value of this field contains the network to peer with.|
|» privateVisibilityConfig|body|[ManagedZonePrivateVisibilityConfig](#schemamanagedzoneprivatevisibilityconfig)|false|For privately visible zones, the set of Virtual Private Cloud resources that the zone is visible from.|
|» reverseLookupConfig|body|[ManagedZoneReverseLookupConfig](#schemamanagedzonereverselookupconfig)|false|The presence of this field indicates that this is a managed reverse lookup zone and Cloud DNS resolves reverse lookup queries using automatically configured records for VPC resources. This only applies to networks listed under private_visibility_config.|
|» serviceDirectoryConfig|body|[ManagedZoneServiceDirectoryConfig](#schemamanagedzoneservicedirectoryconfig)|false|This field links to the associated service directory namespace. Do not set this field for public zones or forwarding zones.|
|» visibility|body|string|false|The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» visibility|PUBLIC|
|» visibility|PRIVATE|

> Example responses

> 200 Response

```json
{
  "dnsKeyContext": {
    "newValue": {
      "algorithm": "RSASHA1",
      "creationTime": "string",
      "description": "string",
      "digests": [
        {
          "digest": "string",
          "type": "SHA1"
        }
      ],
      "id": "string",
      "isActive": true,
      "keyLength": 0,
      "keyTag": 0,
      "kind": "dns#dnsKey",
      "publicKey": "string",
      "type": "KEY_SIGNING"
    },
    "oldValue": {
      "algorithm": "RSASHA1",
      "creationTime": "string",
      "description": "string",
      "digests": [
        {
          "digest": "string",
          "type": "SHA1"
        }
      ],
      "id": "string",
      "isActive": true,
      "keyLength": 0,
      "keyTag": 0,
      "kind": "dns#dnsKey",
      "publicKey": "string",
      "type": "KEY_SIGNING"
    }
  },
  "id": "string",
  "kind": "dns#operation",
  "startTime": "string",
  "status": "PENDING",
  "type": "string",
  "user": "string",
  "zoneContext": {
    "newValue": {
      "cloudLoggingConfig": {
        "enableLogging": true,
        "kind": "dns#managedZoneCloudLoggingConfig"
      },
      "creationTime": "string",
      "description": "string",
      "dnsName": "string",
      "dnssecConfig": {
        "defaultKeySpecs": [
          {
            "algorithm": "RSASHA1",
            "keyLength": 0,
            "keyType": "KEY_SIGNING",
            "kind": "dns#dnsKeySpec"
          }
        ],
        "kind": "dns#managedZoneDnsSecConfig",
        "nonExistence": "NSEC",
        "state": "OFF"
      },
      "forwardingConfig": {
        "kind": "dns#managedZoneForwardingConfig",
        "targetNameServers": [
          {
            "forwardingPath": "DEFAULT",
            "ipv4Address": "string",
            "ipv6Address": "string",
            "kind": "dns#managedZoneForwardingConfigNameServerTarget"
          }
        ]
      },
      "id": "string",
      "kind": "dns#managedZone",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "nameServerSet": "string",
      "nameServers": [
        "string"
      ],
      "peeringConfig": {
        "kind": "dns#managedZonePeeringConfig",
        "targetNetwork": {
          "deactivateTime": "string",
          "kind": "dns#managedZonePeeringConfigTargetNetwork",
          "networkUrl": "string"
        }
      },
      "privateVisibilityConfig": {
        "gkeClusters": [
          {
            "gkeClusterName": "string",
            "kind": "dns#managedZonePrivateVisibilityConfigGKECluster"
          }
        ],
        "kind": "dns#managedZonePrivateVisibilityConfig",
        "networks": [
          {
            "kind": "dns#managedZonePrivateVisibilityConfigNetwork",
            "networkUrl": "string"
          }
        ]
      },
      "reverseLookupConfig": {
        "kind": "dns#managedZoneReverseLookupConfig"
      },
      "serviceDirectoryConfig": {
        "kind": "dns#managedZoneServiceDirectoryConfig",
        "namespace": {
          "deletionTime": "string",
          "kind": "dns#managedZoneServiceDirectoryConfigNamespace",
          "namespaceUrl": "string"
        }
      },
      "visibility": "PUBLIC"
    },
    "oldValue": {
      "cloudLoggingConfig": {
        "enableLogging": true,
        "kind": "dns#managedZoneCloudLoggingConfig"
      },
      "creationTime": "string",
      "description": "string",
      "dnsName": "string",
      "dnssecConfig": {
        "defaultKeySpecs": [
          {
            "algorithm": "RSASHA1",
            "keyLength": 0,
            "keyType": "KEY_SIGNING",
            "kind": "dns#dnsKeySpec"
          }
        ],
        "kind": "dns#managedZoneDnsSecConfig",
        "nonExistence": "NSEC",
        "state": "OFF"
      },
      "forwardingConfig": {
        "kind": "dns#managedZoneForwardingConfig",
        "targetNameServers": [
          {
            "forwardingPath": "DEFAULT",
            "ipv4Address": "string",
            "ipv6Address": "string",
            "kind": "dns#managedZoneForwardingConfigNameServerTarget"
          }
        ]
      },
      "id": "string",
      "kind": "dns#managedZone",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "nameServerSet": "string",
      "nameServers": [
        "string"
      ],
      "peeringConfig": {
        "kind": "dns#managedZonePeeringConfig",
        "targetNetwork": {
          "deactivateTime": "string",
          "kind": "dns#managedZonePeeringConfigTargetNetwork",
          "networkUrl": "string"
        }
      },
      "privateVisibilityConfig": {
        "gkeClusters": [
          {
            "gkeClusterName": "string",
            "kind": "dns#managedZonePrivateVisibilityConfigGKECluster"
          }
        ],
        "kind": "dns#managedZonePrivateVisibilityConfig",
        "networks": [
          {
            "kind": "dns#managedZonePrivateVisibilityConfigNetwork",
            "networkUrl": "string"
          }
        ]
      },
      "reverseLookupConfig": {
        "kind": "dns#managedZoneReverseLookupConfig"
      },
      "serviceDirectoryConfig": {
        "kind": "dns#managedZoneServiceDirectoryConfig",
        "namespace": {
          "deletionTime": "string",
          "kind": "dns#managedZoneServiceDirectoryConfigNamespace",
          "namespaceUrl": "string"
        }
      },
      "visibility": "PUBLIC"
    }
  }
}
```

<h3 id="dnsmanagedzonesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.managedZones.delete

<a id="opIddns.managedZones.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/managedZones/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}`

Deletes a previously created ManagedZone.

<h3 id="dnsmanagedzonesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information will be used for routing and will be part of the resource name.|
|managedZone|path|string|true|Identifies the managed zone addressed by this request. Can be the managed zone name or ID.|
|clientOperationId|query|string|false|For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.|
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

<h3 id="dnsmanagedzonesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.managedZones.patch

<a id="opIddns.managedZones.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/managedZones/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cloudLoggingConfig": {
      "enableLogging": true,
      "kind": "dns#managedZoneCloudLoggingConfig"
    },
    "creationTime": "string",
    "description": "string",
    "dnsName": "string",
    "dnssecConfig": {
      "defaultKeySpecs": [
        {
          "algorithm": "RSASHA1",
          "keyLength": 0,
          "keyType": "KEY_SIGNING",
          "kind": "dns#dnsKeySpec"
        }
      ],
      "kind": "dns#managedZoneDnsSecConfig",
      "nonExistence": "NSEC",
      "state": "OFF"
    },
    "forwardingConfig": {
      "kind": "dns#managedZoneForwardingConfig",
      "targetNameServers": [
        {
          "forwardingPath": "DEFAULT",
          "ipv4Address": "string",
          "ipv6Address": "string",
          "kind": "dns#managedZoneForwardingConfigNameServerTarget"
        }
      ]
    },
    "id": "string",
    "kind": "dns#managedZone",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "nameServerSet": "string",
    "nameServers": [
      "string"
    ],
    "peeringConfig": {
      "kind": "dns#managedZonePeeringConfig",
      "targetNetwork": {
        "deactivateTime": "string",
        "kind": "dns#managedZonePeeringConfigTargetNetwork",
        "networkUrl": "string"
      }
    },
    "privateVisibilityConfig": {
      "gkeClusters": [
        {
          "gkeClusterName": "string",
          "kind": "dns#managedZonePrivateVisibilityConfigGKECluster"
        }
      ],
      "kind": "dns#managedZonePrivateVisibilityConfig",
      "networks": [
        {
          "kind": "dns#managedZonePrivateVisibilityConfigNetwork",
          "networkUrl": "string"
        }
      ]
    },
    "reverseLookupConfig": {
      "kind": "dns#managedZoneReverseLookupConfig"
    },
    "serviceDirectoryConfig": {
      "kind": "dns#managedZoneServiceDirectoryConfig",
      "namespace": {
        "deletionTime": "string",
        "kind": "dns#managedZoneServiceDirectoryConfigNamespace",
        "namespaceUrl": "string"
      }
    },
    "visibility": "PUBLIC"
  }'
```

`PATCH /dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}`

Applies a partial update to an existing ManagedZone.

> Body parameter

```json
{
  "cloudLoggingConfig": {
    "enableLogging": true,
    "kind": "dns#managedZoneCloudLoggingConfig"
  },
  "creationTime": "string",
  "description": "string",
  "dnsName": "string",
  "dnssecConfig": {
    "defaultKeySpecs": [
      {
        "algorithm": "RSASHA1",
        "keyLength": 0,
        "keyType": "KEY_SIGNING",
        "kind": "dns#dnsKeySpec"
      }
    ],
    "kind": "dns#managedZoneDnsSecConfig",
    "nonExistence": "NSEC",
    "state": "OFF"
  },
  "forwardingConfig": {
    "kind": "dns#managedZoneForwardingConfig",
    "targetNameServers": [
      {
        "forwardingPath": "DEFAULT",
        "ipv4Address": "string",
        "ipv6Address": "string",
        "kind": "dns#managedZoneForwardingConfigNameServerTarget"
      }
    ]
  },
  "id": "string",
  "kind": "dns#managedZone",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "nameServerSet": "string",
  "nameServers": [
    "string"
  ],
  "peeringConfig": {
    "kind": "dns#managedZonePeeringConfig",
    "targetNetwork": {
      "deactivateTime": "string",
      "kind": "dns#managedZonePeeringConfigTargetNetwork",
      "networkUrl": "string"
    }
  },
  "privateVisibilityConfig": {
    "gkeClusters": [
      {
        "gkeClusterName": "string",
        "kind": "dns#managedZonePrivateVisibilityConfigGKECluster"
      }
    ],
    "kind": "dns#managedZonePrivateVisibilityConfig",
    "networks": [
      {
        "kind": "dns#managedZonePrivateVisibilityConfigNetwork",
        "networkUrl": "string"
      }
    ]
  },
  "reverseLookupConfig": {
    "kind": "dns#managedZoneReverseLookupConfig"
  },
  "serviceDirectoryConfig": {
    "kind": "dns#managedZoneServiceDirectoryConfig",
    "namespace": {
      "deletionTime": "string",
      "kind": "dns#managedZoneServiceDirectoryConfigNamespace",
      "namespaceUrl": "string"
    }
  },
  "visibility": "PUBLIC"
}
```

<h3 id="dnsmanagedzonespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information will be used for routing and will be part of the resource name.|
|managedZone|path|string|true|Identifies the managed zone addressed by this request. Can be the managed zone name or ID.|
|clientOperationId|query|string|false|For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.|
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
|body|body|[ManagedZone](#schemamanagedzone)|false|none|
|» cloudLoggingConfig|body|[ManagedZoneCloudLoggingConfig](#schemamanagedzonecloudloggingconfig)|false|Cloud Logging configurations for publicly visible zones.|
|» creationTime|body|string|false|The time that this resource was created on the server. This is in RFC3339 text format. Output only.|
|» description|body|string|false|A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the managed zone's function.|
|» dnsName|body|string|false|The DNS name of this managed zone, for instance "example.com.".|
|» dnssecConfig|body|[ManagedZoneDnsSecConfig](#schemamanagedzonednssecconfig)|false|DNSSEC configuration.|
|» forwardingConfig|body|[ManagedZoneForwardingConfig](#schemamanagedzoneforwardingconfig)|false|The presence for this field indicates that outbound forwarding is enabled for this zone. The value of this field contains the set of destinations to forward to.|
|» id|body|string(uint64)|false|Unique identifier for the resource; defined by the server (output only)|
|» kind|body|string|false|none|
|» labels|body|object|false|User labels.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|User assigned name for this resource. Must be unique within the project. The name must be 1-63 characters long, must begin with a letter, end with a letter or digit, and only contain lowercase letters, digits or dashes.|
|» nameServerSet|body|string|false|Optionally specifies the NameServerSet for this ManagedZone. A NameServerSet is a set of DNS name servers that all host the same ManagedZones. Most users leave this field unset. If you need to use this field, contact your account team.|
|» nameServers|body|[string]|false|Delegate your managed_zone to these virtual name servers; defined by the server (output only)|
|» peeringConfig|body|[ManagedZonePeeringConfig](#schemamanagedzonepeeringconfig)|false|The presence of this field indicates that DNS Peering is enabled for this zone. The value of this field contains the network to peer with.|
|» privateVisibilityConfig|body|[ManagedZonePrivateVisibilityConfig](#schemamanagedzoneprivatevisibilityconfig)|false|For privately visible zones, the set of Virtual Private Cloud resources that the zone is visible from.|
|» reverseLookupConfig|body|[ManagedZoneReverseLookupConfig](#schemamanagedzonereverselookupconfig)|false|The presence of this field indicates that this is a managed reverse lookup zone and Cloud DNS resolves reverse lookup queries using automatically configured records for VPC resources. This only applies to networks listed under private_visibility_config.|
|» serviceDirectoryConfig|body|[ManagedZoneServiceDirectoryConfig](#schemamanagedzoneservicedirectoryconfig)|false|This field links to the associated service directory namespace. Do not set this field for public zones or forwarding zones.|
|» visibility|body|string|false|The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» visibility|PUBLIC|
|» visibility|PRIVATE|

> Example responses

> 200 Response

```json
{
  "dnsKeyContext": {
    "newValue": {
      "algorithm": "RSASHA1",
      "creationTime": "string",
      "description": "string",
      "digests": [
        {
          "digest": "string",
          "type": "SHA1"
        }
      ],
      "id": "string",
      "isActive": true,
      "keyLength": 0,
      "keyTag": 0,
      "kind": "dns#dnsKey",
      "publicKey": "string",
      "type": "KEY_SIGNING"
    },
    "oldValue": {
      "algorithm": "RSASHA1",
      "creationTime": "string",
      "description": "string",
      "digests": [
        {
          "digest": "string",
          "type": "SHA1"
        }
      ],
      "id": "string",
      "isActive": true,
      "keyLength": 0,
      "keyTag": 0,
      "kind": "dns#dnsKey",
      "publicKey": "string",
      "type": "KEY_SIGNING"
    }
  },
  "id": "string",
  "kind": "dns#operation",
  "startTime": "string",
  "status": "PENDING",
  "type": "string",
  "user": "string",
  "zoneContext": {
    "newValue": {
      "cloudLoggingConfig": {
        "enableLogging": true,
        "kind": "dns#managedZoneCloudLoggingConfig"
      },
      "creationTime": "string",
      "description": "string",
      "dnsName": "string",
      "dnssecConfig": {
        "defaultKeySpecs": [
          {
            "algorithm": "RSASHA1",
            "keyLength": 0,
            "keyType": "KEY_SIGNING",
            "kind": "dns#dnsKeySpec"
          }
        ],
        "kind": "dns#managedZoneDnsSecConfig",
        "nonExistence": "NSEC",
        "state": "OFF"
      },
      "forwardingConfig": {
        "kind": "dns#managedZoneForwardingConfig",
        "targetNameServers": [
          {
            "forwardingPath": "DEFAULT",
            "ipv4Address": "string",
            "ipv6Address": "string",
            "kind": "dns#managedZoneForwardingConfigNameServerTarget"
          }
        ]
      },
      "id": "string",
      "kind": "dns#managedZone",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "nameServerSet": "string",
      "nameServers": [
        "string"
      ],
      "peeringConfig": {
        "kind": "dns#managedZonePeeringConfig",
        "targetNetwork": {
          "deactivateTime": "string",
          "kind": "dns#managedZonePeeringConfigTargetNetwork",
          "networkUrl": "string"
        }
      },
      "privateVisibilityConfig": {
        "gkeClusters": [
          {
            "gkeClusterName": "string",
            "kind": "dns#managedZonePrivateVisibilityConfigGKECluster"
          }
        ],
        "kind": "dns#managedZonePrivateVisibilityConfig",
        "networks": [
          {
            "kind": "dns#managedZonePrivateVisibilityConfigNetwork",
            "networkUrl": "string"
          }
        ]
      },
      "reverseLookupConfig": {
        "kind": "dns#managedZoneReverseLookupConfig"
      },
      "serviceDirectoryConfig": {
        "kind": "dns#managedZoneServiceDirectoryConfig",
        "namespace": {
          "deletionTime": "string",
          "kind": "dns#managedZoneServiceDirectoryConfigNamespace",
          "namespaceUrl": "string"
        }
      },
      "visibility": "PUBLIC"
    },
    "oldValue": {
      "cloudLoggingConfig": {
        "enableLogging": true,
        "kind": "dns#managedZoneCloudLoggingConfig"
      },
      "creationTime": "string",
      "description": "string",
      "dnsName": "string",
      "dnssecConfig": {
        "defaultKeySpecs": [
          {
            "algorithm": "RSASHA1",
            "keyLength": 0,
            "keyType": "KEY_SIGNING",
            "kind": "dns#dnsKeySpec"
          }
        ],
        "kind": "dns#managedZoneDnsSecConfig",
        "nonExistence": "NSEC",
        "state": "OFF"
      },
      "forwardingConfig": {
        "kind": "dns#managedZoneForwardingConfig",
        "targetNameServers": [
          {
            "forwardingPath": "DEFAULT",
            "ipv4Address": "string",
            "ipv6Address": "string",
            "kind": "dns#managedZoneForwardingConfigNameServerTarget"
          }
        ]
      },
      "id": "string",
      "kind": "dns#managedZone",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "nameServerSet": "string",
      "nameServers": [
        "string"
      ],
      "peeringConfig": {
        "kind": "dns#managedZonePeeringConfig",
        "targetNetwork": {
          "deactivateTime": "string",
          "kind": "dns#managedZonePeeringConfigTargetNetwork",
          "networkUrl": "string"
        }
      },
      "privateVisibilityConfig": {
        "gkeClusters": [
          {
            "gkeClusterName": "string",
            "kind": "dns#managedZonePrivateVisibilityConfigGKECluster"
          }
        ],
        "kind": "dns#managedZonePrivateVisibilityConfig",
        "networks": [
          {
            "kind": "dns#managedZonePrivateVisibilityConfigNetwork",
            "networkUrl": "string"
          }
        ]
      },
      "reverseLookupConfig": {
        "kind": "dns#managedZoneReverseLookupConfig"
      },
      "serviceDirectoryConfig": {
        "kind": "dns#managedZoneServiceDirectoryConfig",
        "namespace": {
          "deletionTime": "string",
          "kind": "dns#managedZoneServiceDirectoryConfigNamespace",
          "namespaceUrl": "string"
        }
      },
      "visibility": "PUBLIC"
    }
  }
}
```

<h3 id="dnsmanagedzonespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.managedZones.getIamPolicy

<a id="opIddns.managedZones.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/string:getIamPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "options": {
      "requestedPolicyVersion": 0
    }
  }'
```

`POST /dns/v2/{resource}:getIamPolicy`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

> Body parameter

```json
{
  "options": {
    "requestedPolicyVersion": 0
  }
}
```

<h3 id="dnsmanagedzonesgetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
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
|body|body|[GoogleIamV1GetIamPolicyRequest](#schemagoogleiamv1getiampolicyrequest)|false|none|
|» options|body|[GoogleIamV1GetPolicyOptions](#schemagoogleiamv1getpolicyoptions)|false|OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.|

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

<h3 id="dnsmanagedzonesgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleIamV1Policy](#schemagoogleiamv1policy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.managedZones.setIamPolicy

<a id="opIddns.managedZones.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/string:setIamPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
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
    },
    "updateMask": "string"
  }'
```

`POST /dns/v2/{resource}:setIamPolicy`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

> Body parameter

```json
{
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
  },
  "updateMask": "string"
}
```

<h3 id="dnsmanagedzonessetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
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
|body|body|[GoogleIamV1SetIamPolicyRequest](#schemagoogleiamv1setiampolicyrequest)|false|none|
|» policy|body|[GoogleIamV1Policy](#schemagoogleiamv1policy)|false|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|
|» updateMask|body|string(google-fieldmask)|false|OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`|

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

<h3 id="dnsmanagedzonessetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleIamV1Policy](#schemagoogleiamv1policy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.managedZones.testIamPermissions

<a id="opIddns.managedZones.testIamPermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/string:testIamPermissions \
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

`POST /dns/v2/{resource}:testIamPermissions`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this returns an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="dnsmanagedzonestestiampermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
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
|body|body|[GoogleIamV1TestIamPermissionsRequest](#schemagoogleiamv1testiampermissionsrequest)|false|none|
|» permissions|body|[string]|false|The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).|

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

<h3 id="dnsmanagedzonestestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleIamV1TestIamPermissionsResponse](#schemagoogleiamv1testiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

<h1 id="cloud-dns-api-policies">policies</h1>

## dns.policies.list

<a id="opIddns.policies.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/policies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dns/v2/projects/{project}/locations/{location}/policies`

Enumerates all Policies associated with a project.

<h3 id="dnspolicieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information will be used for routing and will be part of the resource name.|
|maxResults|query|integer|false|Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.|
|pageToken|query|string|false|Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.|
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
  "header": {
    "operationId": "string"
  },
  "kind": "dns#policiesListResponse",
  "nextPageToken": "string",
  "policies": [
    {
      "alternativeNameServerConfig": {
        "kind": "dns#policyAlternativeNameServerConfig",
        "targetNameServers": [
          {
            "forwardingPath": "DEFAULT",
            "ipv4Address": "string",
            "ipv6Address": "string",
            "kind": "dns#policyAlternativeNameServerConfigTargetNameServer"
          }
        ]
      },
      "description": "string",
      "enableInboundForwarding": true,
      "enableLogging": true,
      "id": "string",
      "kind": "dns#policy",
      "name": "string",
      "networks": [
        {
          "kind": "dns#policyNetwork",
          "networkUrl": "string"
        }
      ]
    }
  ]
}
```

<h3 id="dnspolicieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PoliciesListResponse](#schemapolicieslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.policies.create

<a id="opIddns.policies.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/policies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alternativeNameServerConfig": {
      "kind": "dns#policyAlternativeNameServerConfig",
      "targetNameServers": [
        {
          "forwardingPath": "DEFAULT",
          "ipv4Address": "string",
          "ipv6Address": "string",
          "kind": "dns#policyAlternativeNameServerConfigTargetNameServer"
        }
      ]
    },
    "description": "string",
    "enableInboundForwarding": true,
    "enableLogging": true,
    "id": "string",
    "kind": "dns#policy",
    "name": "string",
    "networks": [
      {
        "kind": "dns#policyNetwork",
        "networkUrl": "string"
      }
    ]
  }'
```

`POST /dns/v2/projects/{project}/locations/{location}/policies`

Creates a new Policy.

> Body parameter

```json
{
  "alternativeNameServerConfig": {
    "kind": "dns#policyAlternativeNameServerConfig",
    "targetNameServers": [
      {
        "forwardingPath": "DEFAULT",
        "ipv4Address": "string",
        "ipv6Address": "string",
        "kind": "dns#policyAlternativeNameServerConfigTargetNameServer"
      }
    ]
  },
  "description": "string",
  "enableInboundForwarding": true,
  "enableLogging": true,
  "id": "string",
  "kind": "dns#policy",
  "name": "string",
  "networks": [
    {
      "kind": "dns#policyNetwork",
      "networkUrl": "string"
    }
  ]
}
```

<h3 id="dnspoliciescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information will be used for routing and will be part of the resource name.|
|clientOperationId|query|string|false|For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.|
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
|body|body|[Policy](#schemapolicy)|false|none|
|» alternativeNameServerConfig|body|[PolicyAlternativeNameServerConfig](#schemapolicyalternativenameserverconfig)|false|Sets an alternative name server for the associated networks. When specified, all DNS queries are forwarded to a name server that you choose. Names such as .internal are not available when an alternative name server is specified.|
|» description|body|string|false|A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the policy's function.|
|» enableInboundForwarding|body|boolean|false|Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. When enabled, a virtual IP address is allocated from each of the subnetworks that are bound to this policy.|
|» enableLogging|body|boolean|false|Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set.|
|» id|body|string(uint64)|false|Unique identifier for the resource; defined by the server (output only).|
|» kind|body|string|false|none|
|» name|body|string|false|User-assigned name for this policy.|
|» networks|body|[[PolicyNetwork](#schemapolicynetwork)]|false|List of network names specifying networks to which this policy is applied.|

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
  "alternativeNameServerConfig": {
    "kind": "dns#policyAlternativeNameServerConfig",
    "targetNameServers": [
      {
        "forwardingPath": "DEFAULT",
        "ipv4Address": "string",
        "ipv6Address": "string",
        "kind": "dns#policyAlternativeNameServerConfigTargetNameServer"
      }
    ]
  },
  "description": "string",
  "enableInboundForwarding": true,
  "enableLogging": true,
  "id": "string",
  "kind": "dns#policy",
  "name": "string",
  "networks": [
    {
      "kind": "dns#policyNetwork",
      "networkUrl": "string"
    }
  ]
}
```

<h3 id="dnspoliciescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.policies.get

<a id="opIddns.policies.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/policies/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dns/v2/projects/{project}/locations/{location}/policies/{policy}`

Fetches the representation of an existing Policy.

<h3 id="dnspoliciesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information will be used for routing and will be part of the resource name.|
|policy|path|string|true|User given friendly name of the policy addressed by this request.|
|clientOperationId|query|string|false|For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.|
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
  "alternativeNameServerConfig": {
    "kind": "dns#policyAlternativeNameServerConfig",
    "targetNameServers": [
      {
        "forwardingPath": "DEFAULT",
        "ipv4Address": "string",
        "ipv6Address": "string",
        "kind": "dns#policyAlternativeNameServerConfigTargetNameServer"
      }
    ]
  },
  "description": "string",
  "enableInboundForwarding": true,
  "enableLogging": true,
  "id": "string",
  "kind": "dns#policy",
  "name": "string",
  "networks": [
    {
      "kind": "dns#policyNetwork",
      "networkUrl": "string"
    }
  ]
}
```

<h3 id="dnspoliciesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.policies.update

<a id="opIddns.policies.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/policies/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alternativeNameServerConfig": {
      "kind": "dns#policyAlternativeNameServerConfig",
      "targetNameServers": [
        {
          "forwardingPath": "DEFAULT",
          "ipv4Address": "string",
          "ipv6Address": "string",
          "kind": "dns#policyAlternativeNameServerConfigTargetNameServer"
        }
      ]
    },
    "description": "string",
    "enableInboundForwarding": true,
    "enableLogging": true,
    "id": "string",
    "kind": "dns#policy",
    "name": "string",
    "networks": [
      {
        "kind": "dns#policyNetwork",
        "networkUrl": "string"
      }
    ]
  }'
```

`PUT /dns/v2/projects/{project}/locations/{location}/policies/{policy}`

Updates an existing Policy.

> Body parameter

```json
{
  "alternativeNameServerConfig": {
    "kind": "dns#policyAlternativeNameServerConfig",
    "targetNameServers": [
      {
        "forwardingPath": "DEFAULT",
        "ipv4Address": "string",
        "ipv6Address": "string",
        "kind": "dns#policyAlternativeNameServerConfigTargetNameServer"
      }
    ]
  },
  "description": "string",
  "enableInboundForwarding": true,
  "enableLogging": true,
  "id": "string",
  "kind": "dns#policy",
  "name": "string",
  "networks": [
    {
      "kind": "dns#policyNetwork",
      "networkUrl": "string"
    }
  ]
}
```

<h3 id="dnspoliciesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information will be used for routing and will be part of the resource name.|
|policy|path|string|true|User given friendly name of the policy addressed by this request.|
|clientOperationId|query|string|false|For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.|
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
|body|body|[Policy](#schemapolicy)|false|none|
|» alternativeNameServerConfig|body|[PolicyAlternativeNameServerConfig](#schemapolicyalternativenameserverconfig)|false|Sets an alternative name server for the associated networks. When specified, all DNS queries are forwarded to a name server that you choose. Names such as .internal are not available when an alternative name server is specified.|
|» description|body|string|false|A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the policy's function.|
|» enableInboundForwarding|body|boolean|false|Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. When enabled, a virtual IP address is allocated from each of the subnetworks that are bound to this policy.|
|» enableLogging|body|boolean|false|Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set.|
|» id|body|string(uint64)|false|Unique identifier for the resource; defined by the server (output only).|
|» kind|body|string|false|none|
|» name|body|string|false|User-assigned name for this policy.|
|» networks|body|[[PolicyNetwork](#schemapolicynetwork)]|false|List of network names specifying networks to which this policy is applied.|

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
  "header": {
    "operationId": "string"
  },
  "policy": {
    "alternativeNameServerConfig": {
      "kind": "dns#policyAlternativeNameServerConfig",
      "targetNameServers": [
        {
          "forwardingPath": "DEFAULT",
          "ipv4Address": "string",
          "ipv6Address": "string",
          "kind": "dns#policyAlternativeNameServerConfigTargetNameServer"
        }
      ]
    },
    "description": "string",
    "enableInboundForwarding": true,
    "enableLogging": true,
    "id": "string",
    "kind": "dns#policy",
    "name": "string",
    "networks": [
      {
        "kind": "dns#policyNetwork",
        "networkUrl": "string"
      }
    ]
  }
}
```

<h3 id="dnspoliciesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PoliciesUpdateResponse](#schemapoliciesupdateresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.policies.delete

<a id="opIddns.policies.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/policies/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /dns/v2/projects/{project}/locations/{location}/policies/{policy}`

Deletes a previously created Policy. Fails if the policy is still being referenced by a network.

<h3 id="dnspoliciesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information will be used for routing and will be part of the resource name.|
|policy|path|string|true|User given friendly name of the policy addressed by this request.|
|clientOperationId|query|string|false|For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.|
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

<h3 id="dnspoliciesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.policies.patch

<a id="opIddns.policies.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/policies/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alternativeNameServerConfig": {
      "kind": "dns#policyAlternativeNameServerConfig",
      "targetNameServers": [
        {
          "forwardingPath": "DEFAULT",
          "ipv4Address": "string",
          "ipv6Address": "string",
          "kind": "dns#policyAlternativeNameServerConfigTargetNameServer"
        }
      ]
    },
    "description": "string",
    "enableInboundForwarding": true,
    "enableLogging": true,
    "id": "string",
    "kind": "dns#policy",
    "name": "string",
    "networks": [
      {
        "kind": "dns#policyNetwork",
        "networkUrl": "string"
      }
    ]
  }'
```

`PATCH /dns/v2/projects/{project}/locations/{location}/policies/{policy}`

Applies a partial update to an existing Policy.

> Body parameter

```json
{
  "alternativeNameServerConfig": {
    "kind": "dns#policyAlternativeNameServerConfig",
    "targetNameServers": [
      {
        "forwardingPath": "DEFAULT",
        "ipv4Address": "string",
        "ipv6Address": "string",
        "kind": "dns#policyAlternativeNameServerConfigTargetNameServer"
      }
    ]
  },
  "description": "string",
  "enableInboundForwarding": true,
  "enableLogging": true,
  "id": "string",
  "kind": "dns#policy",
  "name": "string",
  "networks": [
    {
      "kind": "dns#policyNetwork",
      "networkUrl": "string"
    }
  ]
}
```

<h3 id="dnspoliciespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information will be used for routing and will be part of the resource name.|
|policy|path|string|true|User given friendly name of the policy addressed by this request.|
|clientOperationId|query|string|false|For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.|
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
|body|body|[Policy](#schemapolicy)|false|none|
|» alternativeNameServerConfig|body|[PolicyAlternativeNameServerConfig](#schemapolicyalternativenameserverconfig)|false|Sets an alternative name server for the associated networks. When specified, all DNS queries are forwarded to a name server that you choose. Names such as .internal are not available when an alternative name server is specified.|
|» description|body|string|false|A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the policy's function.|
|» enableInboundForwarding|body|boolean|false|Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. When enabled, a virtual IP address is allocated from each of the subnetworks that are bound to this policy.|
|» enableLogging|body|boolean|false|Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set.|
|» id|body|string(uint64)|false|Unique identifier for the resource; defined by the server (output only).|
|» kind|body|string|false|none|
|» name|body|string|false|User-assigned name for this policy.|
|» networks|body|[[PolicyNetwork](#schemapolicynetwork)]|false|List of network names specifying networks to which this policy is applied.|

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
  "header": {
    "operationId": "string"
  },
  "policy": {
    "alternativeNameServerConfig": {
      "kind": "dns#policyAlternativeNameServerConfig",
      "targetNameServers": [
        {
          "forwardingPath": "DEFAULT",
          "ipv4Address": "string",
          "ipv6Address": "string",
          "kind": "dns#policyAlternativeNameServerConfigTargetNameServer"
        }
      ]
    },
    "description": "string",
    "enableInboundForwarding": true,
    "enableLogging": true,
    "id": "string",
    "kind": "dns#policy",
    "name": "string",
    "networks": [
      {
        "kind": "dns#policyNetwork",
        "networkUrl": "string"
      }
    ]
  }
}
```

<h3 id="dnspoliciespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PoliciesPatchResponse](#schemapoliciespatchresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

<h1 id="cloud-dns-api-projects">projects</h1>

## dns.projects.get

<a id="opIddns.projects.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dns/v2/projects/{project}/locations/{location}`

Fetches the representation of an existing Project.

<h3 id="dnsprojectsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|none|
|clientOperationId|query|string|false|For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.|
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
  "id": "string",
  "kind": "dns#project",
  "number": "string",
  "quota": {
    "dnsKeysPerManagedZone": 0,
    "gkeClustersPerManagedZone": 0,
    "gkeClustersPerPolicy": 0,
    "gkeClustersPerResponsePolicy": 0,
    "itemsPerRoutingPolicy": 0,
    "kind": "dns#quota",
    "managedZones": 0,
    "managedZonesPerGkeCluster": 0,
    "managedZonesPerNetwork": 0,
    "nameserversPerDelegation": 0,
    "networksPerManagedZone": 0,
    "networksPerPolicy": 0,
    "networksPerResponsePolicy": 0,
    "peeringZonesPerTargetNetwork": 0,
    "policies": 0,
    "resourceRecordsPerRrset": 0,
    "responsePolicies": 0,
    "responsePolicyRulesPerResponsePolicy": 0,
    "rrsetAdditionsPerChange": 0,
    "rrsetDeletionsPerChange": 0,
    "rrsetsPerManagedZone": 0,
    "targetNameServersPerManagedZone": 0,
    "targetNameServersPerPolicy": 0,
    "totalRrdataSizePerChange": 0,
    "whitelistedKeySpecs": [
      {
        "algorithm": "RSASHA1",
        "keyLength": 0,
        "keyType": "KEY_SIGNING",
        "kind": "dns#dnsKeySpec"
      }
    ]
  }
}
```

<h3 id="dnsprojectsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Project](#schemaproject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

<h1 id="cloud-dns-api-resourcerecordsets">resourceRecordSets</h1>

## dns.resourceRecordSets.list

<a id="opIddns.resourceRecordSets.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/managedZones/string/rrsets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}/rrsets`

Enumerates ResourceRecordSets that you have created but not yet deleted.

<h3 id="dnsresourcerecordsetslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information is used for routing and is part of the resource name.|
|managedZone|path|string|true|Identifies the managed zone addressed by this request. Can be the managed zone name or ID.|
|maxResults|query|integer|false|Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.|
|name|query|string|false|Restricts the list to return only records with this fully qualified domain name.|
|pageToken|query|string|false|Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.|
|type|query|string|false|Restricts the list to return only records of this type. If present, the "name" parameter must also be present.|
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
  "header": {
    "operationId": "string"
  },
  "kind": "dns#resourceRecordSetsListResponse",
  "nextPageToken": "string",
  "rrsets": [
    {
      "kind": "dns#resourceRecordSet",
      "name": "string",
      "routingPolicy": {
        "geo": {
          "enableFencing": true,
          "items": [
            {
              "healthCheckedTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
              "location": "string",
              "rrdatas": [
                "string"
              ],
              "signatureRrdatas": [
                "string"
              ]
            }
          ],
          "kind": "dns#rRSetRoutingPolicyGeoPolicy"
        },
        "healthCheck": "string",
        "kind": "dns#rRSetRoutingPolicy",
        "primaryBackup": {
          "backupGeoTargets": {
            "enableFencing": true,
            "items": [
              {
                "healthCheckedTargets": {
                  "externalEndpoints": [
                    "string"
                  ],
                  "internalLoadBalancers": [
                    {
                      "ipAddress": "string",
                      "ipProtocol": "UNDEFINED",
                      "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                      "loadBalancerType": "NONE",
                      "networkUrl": "string",
                      "port": "string",
                      "project": "string",
                      "region": "string"
                    }
                  ]
                },
                "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                "location": "string",
                "rrdatas": [
                  "string"
                ],
                "signatureRrdatas": [
                  "string"
                ]
              }
            ],
            "kind": "dns#rRSetRoutingPolicyGeoPolicy"
          },
          "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
          "primaryTargets": {
            "externalEndpoints": [
              "string"
            ],
            "internalLoadBalancers": [
              {
                "ipAddress": "string",
                "ipProtocol": "UNDEFINED",
                "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                "loadBalancerType": "NONE",
                "networkUrl": "string",
                "port": "string",
                "project": "string",
                "region": "string"
              }
            ]
          },
          "trickleTraffic": 0
        },
        "wrr": {
          "items": [
            {
              "healthCheckedTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
              "rrdatas": [
                "string"
              ],
              "signatureRrdatas": [
                "string"
              ],
              "weight": 0
            }
          ],
          "kind": "dns#rRSetRoutingPolicyWrrPolicy"
        }
      },
      "rrdatas": [
        "string"
      ],
      "signatureRrdatas": [
        "string"
      ],
      "ttl": 0,
      "type": "string"
    }
  ]
}
```

<h3 id="dnsresourcerecordsetslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ResourceRecordSetsListResponse](#schemaresourcerecordsetslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.resourceRecordSets.create

<a id="opIddns.resourceRecordSets.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/managedZones/string/rrsets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "kind": "dns#resourceRecordSet",
    "name": "string",
    "routingPolicy": {
      "geo": {
        "enableFencing": true,
        "items": [
          {
            "healthCheckedTargets": {
              "externalEndpoints": [
                "string"
              ],
              "internalLoadBalancers": [
                {
                  "ipAddress": "string",
                  "ipProtocol": "UNDEFINED",
                  "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                  "loadBalancerType": "NONE",
                  "networkUrl": "string",
                  "port": "string",
                  "project": "string",
                  "region": "string"
                }
              ]
            },
            "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
            "location": "string",
            "rrdatas": [
              "string"
            ],
            "signatureRrdatas": [
              "string"
            ]
          }
        ],
        "kind": "dns#rRSetRoutingPolicyGeoPolicy"
      },
      "healthCheck": "string",
      "kind": "dns#rRSetRoutingPolicy",
      "primaryBackup": {
        "backupGeoTargets": {
          "enableFencing": true,
          "items": [
            {
              "healthCheckedTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
              "location": "string",
              "rrdatas": [
                "string"
              ],
              "signatureRrdatas": [
                "string"
              ]
            }
          ],
          "kind": "dns#rRSetRoutingPolicyGeoPolicy"
        },
        "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
        "primaryTargets": {
          "externalEndpoints": [
            "string"
          ],
          "internalLoadBalancers": [
            {
              "ipAddress": "string",
              "ipProtocol": "UNDEFINED",
              "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
              "loadBalancerType": "NONE",
              "networkUrl": "string",
              "port": "string",
              "project": "string",
              "region": "string"
            }
          ]
        },
        "trickleTraffic": 0
      },
      "wrr": {
        "items": [
          {
            "healthCheckedTargets": {
              "externalEndpoints": [
                "string"
              ],
              "internalLoadBalancers": [
                {
                  "ipAddress": "string",
                  "ipProtocol": "UNDEFINED",
                  "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                  "loadBalancerType": "NONE",
                  "networkUrl": "string",
                  "port": "string",
                  "project": "string",
                  "region": "string"
                }
              ]
            },
            "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
            "rrdatas": [
              "string"
            ],
            "signatureRrdatas": [
              "string"
            ],
            "weight": 0
          }
        ],
        "kind": "dns#rRSetRoutingPolicyWrrPolicy"
      }
    },
    "rrdatas": [
      "string"
    ],
    "signatureRrdatas": [
      "string"
    ],
    "ttl": 0,
    "type": "string"
  }'
```

`POST /dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}/rrsets`

Creates a new ResourceRecordSet.

> Body parameter

```json
{
  "kind": "dns#resourceRecordSet",
  "name": "string",
  "routingPolicy": {
    "geo": {
      "enableFencing": true,
      "items": [
        {
          "healthCheckedTargets": {
            "externalEndpoints": [
              "string"
            ],
            "internalLoadBalancers": [
              {
                "ipAddress": "string",
                "ipProtocol": "UNDEFINED",
                "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                "loadBalancerType": "NONE",
                "networkUrl": "string",
                "port": "string",
                "project": "string",
                "region": "string"
              }
            ]
          },
          "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
          "location": "string",
          "rrdatas": [
            "string"
          ],
          "signatureRrdatas": [
            "string"
          ]
        }
      ],
      "kind": "dns#rRSetRoutingPolicyGeoPolicy"
    },
    "healthCheck": "string",
    "kind": "dns#rRSetRoutingPolicy",
    "primaryBackup": {
      "backupGeoTargets": {
        "enableFencing": true,
        "items": [
          {
            "healthCheckedTargets": {
              "externalEndpoints": [
                "string"
              ],
              "internalLoadBalancers": [
                {
                  "ipAddress": "string",
                  "ipProtocol": "UNDEFINED",
                  "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                  "loadBalancerType": "NONE",
                  "networkUrl": "string",
                  "port": "string",
                  "project": "string",
                  "region": "string"
                }
              ]
            },
            "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
            "location": "string",
            "rrdatas": [
              "string"
            ],
            "signatureRrdatas": [
              "string"
            ]
          }
        ],
        "kind": "dns#rRSetRoutingPolicyGeoPolicy"
      },
      "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
      "primaryTargets": {
        "externalEndpoints": [
          "string"
        ],
        "internalLoadBalancers": [
          {
            "ipAddress": "string",
            "ipProtocol": "UNDEFINED",
            "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
            "loadBalancerType": "NONE",
            "networkUrl": "string",
            "port": "string",
            "project": "string",
            "region": "string"
          }
        ]
      },
      "trickleTraffic": 0
    },
    "wrr": {
      "items": [
        {
          "healthCheckedTargets": {
            "externalEndpoints": [
              "string"
            ],
            "internalLoadBalancers": [
              {
                "ipAddress": "string",
                "ipProtocol": "UNDEFINED",
                "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                "loadBalancerType": "NONE",
                "networkUrl": "string",
                "port": "string",
                "project": "string",
                "region": "string"
              }
            ]
          },
          "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
          "rrdatas": [
            "string"
          ],
          "signatureRrdatas": [
            "string"
          ],
          "weight": 0
        }
      ],
      "kind": "dns#rRSetRoutingPolicyWrrPolicy"
    }
  },
  "rrdatas": [
    "string"
  ],
  "signatureRrdatas": [
    "string"
  ],
  "ttl": 0,
  "type": "string"
}
```

<h3 id="dnsresourcerecordsetscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information is used for routing and is part of the resource name.|
|managedZone|path|string|true|Identifies the managed zone addressed by this request. Can be the managed zone name or ID.|
|clientOperationId|query|string|false|For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.|
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
|body|body|[ResourceRecordSet](#schemaresourcerecordset)|false|none|
|» kind|body|string|false|none|
|» name|body|string|false|For example, www.example.com.|
|» routingPolicy|body|[RRSetRoutingPolicy](#schemarrsetroutingpolicy)|false|Configures dynamic query responses based on either the geo location of the querying user or a weighted round robin based routing policy. A valid ResourceRecordSet contains only rrdata (for static resolution) or a routing_policy (for dynamic resolution).|
|» rrdatas|body|[string]|false|As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1) -- see examples.|
|» signatureRrdatas|body|[string]|false|As defined in RFC 4034 (section 3.2).|
|» ttl|body|integer(int32)|false|Number of seconds that this ResourceRecordSet can be cached by resolvers.|
|» type|body|string|false|The identifier of a supported record type. See the list of Supported DNS record types.|

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
  "kind": "dns#resourceRecordSet",
  "name": "string",
  "routingPolicy": {
    "geo": {
      "enableFencing": true,
      "items": [
        {
          "healthCheckedTargets": {
            "externalEndpoints": [
              "string"
            ],
            "internalLoadBalancers": [
              {
                "ipAddress": "string",
                "ipProtocol": "UNDEFINED",
                "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                "loadBalancerType": "NONE",
                "networkUrl": "string",
                "port": "string",
                "project": "string",
                "region": "string"
              }
            ]
          },
          "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
          "location": "string",
          "rrdatas": [
            "string"
          ],
          "signatureRrdatas": [
            "string"
          ]
        }
      ],
      "kind": "dns#rRSetRoutingPolicyGeoPolicy"
    },
    "healthCheck": "string",
    "kind": "dns#rRSetRoutingPolicy",
    "primaryBackup": {
      "backupGeoTargets": {
        "enableFencing": true,
        "items": [
          {
            "healthCheckedTargets": {
              "externalEndpoints": [
                "string"
              ],
              "internalLoadBalancers": [
                {
                  "ipAddress": "string",
                  "ipProtocol": "UNDEFINED",
                  "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                  "loadBalancerType": "NONE",
                  "networkUrl": "string",
                  "port": "string",
                  "project": "string",
                  "region": "string"
                }
              ]
            },
            "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
            "location": "string",
            "rrdatas": [
              "string"
            ],
            "signatureRrdatas": [
              "string"
            ]
          }
        ],
        "kind": "dns#rRSetRoutingPolicyGeoPolicy"
      },
      "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
      "primaryTargets": {
        "externalEndpoints": [
          "string"
        ],
        "internalLoadBalancers": [
          {
            "ipAddress": "string",
            "ipProtocol": "UNDEFINED",
            "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
            "loadBalancerType": "NONE",
            "networkUrl": "string",
            "port": "string",
            "project": "string",
            "region": "string"
          }
        ]
      },
      "trickleTraffic": 0
    },
    "wrr": {
      "items": [
        {
          "healthCheckedTargets": {
            "externalEndpoints": [
              "string"
            ],
            "internalLoadBalancers": [
              {
                "ipAddress": "string",
                "ipProtocol": "UNDEFINED",
                "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                "loadBalancerType": "NONE",
                "networkUrl": "string",
                "port": "string",
                "project": "string",
                "region": "string"
              }
            ]
          },
          "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
          "rrdatas": [
            "string"
          ],
          "signatureRrdatas": [
            "string"
          ],
          "weight": 0
        }
      ],
      "kind": "dns#rRSetRoutingPolicyWrrPolicy"
    }
  },
  "rrdatas": [
    "string"
  ],
  "signatureRrdatas": [
    "string"
  ],
  "ttl": 0,
  "type": "string"
}
```

<h3 id="dnsresourcerecordsetscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ResourceRecordSet](#schemaresourcerecordset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.resourceRecordSets.get

<a id="opIddns.resourceRecordSets.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/managedZones/string/rrsets/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}/rrsets/{name}/{type}`

Fetches the representation of an existing ResourceRecordSet.

<h3 id="dnsresourcerecordsetsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information is used for routing and is part of the resource name.|
|managedZone|path|string|true|Identifies the managed zone addressed by this request. Can be the managed zone name or ID.|
|name|path|string|true|Fully qualified domain name.|
|type|path|string|true|RRSet type.|
|clientOperationId|query|string|false|For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.|
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
  "kind": "dns#resourceRecordSet",
  "name": "string",
  "routingPolicy": {
    "geo": {
      "enableFencing": true,
      "items": [
        {
          "healthCheckedTargets": {
            "externalEndpoints": [
              "string"
            ],
            "internalLoadBalancers": [
              {
                "ipAddress": "string",
                "ipProtocol": "UNDEFINED",
                "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                "loadBalancerType": "NONE",
                "networkUrl": "string",
                "port": "string",
                "project": "string",
                "region": "string"
              }
            ]
          },
          "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
          "location": "string",
          "rrdatas": [
            "string"
          ],
          "signatureRrdatas": [
            "string"
          ]
        }
      ],
      "kind": "dns#rRSetRoutingPolicyGeoPolicy"
    },
    "healthCheck": "string",
    "kind": "dns#rRSetRoutingPolicy",
    "primaryBackup": {
      "backupGeoTargets": {
        "enableFencing": true,
        "items": [
          {
            "healthCheckedTargets": {
              "externalEndpoints": [
                "string"
              ],
              "internalLoadBalancers": [
                {
                  "ipAddress": "string",
                  "ipProtocol": "UNDEFINED",
                  "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                  "loadBalancerType": "NONE",
                  "networkUrl": "string",
                  "port": "string",
                  "project": "string",
                  "region": "string"
                }
              ]
            },
            "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
            "location": "string",
            "rrdatas": [
              "string"
            ],
            "signatureRrdatas": [
              "string"
            ]
          }
        ],
        "kind": "dns#rRSetRoutingPolicyGeoPolicy"
      },
      "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
      "primaryTargets": {
        "externalEndpoints": [
          "string"
        ],
        "internalLoadBalancers": [
          {
            "ipAddress": "string",
            "ipProtocol": "UNDEFINED",
            "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
            "loadBalancerType": "NONE",
            "networkUrl": "string",
            "port": "string",
            "project": "string",
            "region": "string"
          }
        ]
      },
      "trickleTraffic": 0
    },
    "wrr": {
      "items": [
        {
          "healthCheckedTargets": {
            "externalEndpoints": [
              "string"
            ],
            "internalLoadBalancers": [
              {
                "ipAddress": "string",
                "ipProtocol": "UNDEFINED",
                "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                "loadBalancerType": "NONE",
                "networkUrl": "string",
                "port": "string",
                "project": "string",
                "region": "string"
              }
            ]
          },
          "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
          "rrdatas": [
            "string"
          ],
          "signatureRrdatas": [
            "string"
          ],
          "weight": 0
        }
      ],
      "kind": "dns#rRSetRoutingPolicyWrrPolicy"
    }
  },
  "rrdatas": [
    "string"
  ],
  "signatureRrdatas": [
    "string"
  ],
  "ttl": 0,
  "type": "string"
}
```

<h3 id="dnsresourcerecordsetsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ResourceRecordSet](#schemaresourcerecordset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.resourceRecordSets.delete

<a id="opIddns.resourceRecordSets.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/managedZones/string/rrsets/string/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}/rrsets/{name}/{type}`

Deletes a previously created ResourceRecordSet.

<h3 id="dnsresourcerecordsetsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information is used for routing and is part of the resource name.|
|managedZone|path|string|true|Identifies the managed zone addressed by this request. Can be the managed zone name or ID.|
|name|path|string|true|Fully qualified domain name.|
|type|path|string|true|RRSet type.|
|clientOperationId|query|string|false|For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.|
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

<h3 id="dnsresourcerecordsetsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.resourceRecordSets.patch

<a id="opIddns.resourceRecordSets.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/managedZones/string/rrsets/string/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "kind": "dns#resourceRecordSet",
    "name": "string",
    "routingPolicy": {
      "geo": {
        "enableFencing": true,
        "items": [
          {
            "healthCheckedTargets": {
              "externalEndpoints": [
                "string"
              ],
              "internalLoadBalancers": [
                {
                  "ipAddress": "string",
                  "ipProtocol": "UNDEFINED",
                  "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                  "loadBalancerType": "NONE",
                  "networkUrl": "string",
                  "port": "string",
                  "project": "string",
                  "region": "string"
                }
              ]
            },
            "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
            "location": "string",
            "rrdatas": [
              "string"
            ],
            "signatureRrdatas": [
              "string"
            ]
          }
        ],
        "kind": "dns#rRSetRoutingPolicyGeoPolicy"
      },
      "healthCheck": "string",
      "kind": "dns#rRSetRoutingPolicy",
      "primaryBackup": {
        "backupGeoTargets": {
          "enableFencing": true,
          "items": [
            {
              "healthCheckedTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
              "location": "string",
              "rrdatas": [
                "string"
              ],
              "signatureRrdatas": [
                "string"
              ]
            }
          ],
          "kind": "dns#rRSetRoutingPolicyGeoPolicy"
        },
        "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
        "primaryTargets": {
          "externalEndpoints": [
            "string"
          ],
          "internalLoadBalancers": [
            {
              "ipAddress": "string",
              "ipProtocol": "UNDEFINED",
              "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
              "loadBalancerType": "NONE",
              "networkUrl": "string",
              "port": "string",
              "project": "string",
              "region": "string"
            }
          ]
        },
        "trickleTraffic": 0
      },
      "wrr": {
        "items": [
          {
            "healthCheckedTargets": {
              "externalEndpoints": [
                "string"
              ],
              "internalLoadBalancers": [
                {
                  "ipAddress": "string",
                  "ipProtocol": "UNDEFINED",
                  "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                  "loadBalancerType": "NONE",
                  "networkUrl": "string",
                  "port": "string",
                  "project": "string",
                  "region": "string"
                }
              ]
            },
            "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
            "rrdatas": [
              "string"
            ],
            "signatureRrdatas": [
              "string"
            ],
            "weight": 0
          }
        ],
        "kind": "dns#rRSetRoutingPolicyWrrPolicy"
      }
    },
    "rrdatas": [
      "string"
    ],
    "signatureRrdatas": [
      "string"
    ],
    "ttl": 0,
    "type": "string"
  }'
```

`PATCH /dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}/rrsets/{name}/{type}`

Applies a partial update to an existing ResourceRecordSet.

> Body parameter

```json
{
  "kind": "dns#resourceRecordSet",
  "name": "string",
  "routingPolicy": {
    "geo": {
      "enableFencing": true,
      "items": [
        {
          "healthCheckedTargets": {
            "externalEndpoints": [
              "string"
            ],
            "internalLoadBalancers": [
              {
                "ipAddress": "string",
                "ipProtocol": "UNDEFINED",
                "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                "loadBalancerType": "NONE",
                "networkUrl": "string",
                "port": "string",
                "project": "string",
                "region": "string"
              }
            ]
          },
          "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
          "location": "string",
          "rrdatas": [
            "string"
          ],
          "signatureRrdatas": [
            "string"
          ]
        }
      ],
      "kind": "dns#rRSetRoutingPolicyGeoPolicy"
    },
    "healthCheck": "string",
    "kind": "dns#rRSetRoutingPolicy",
    "primaryBackup": {
      "backupGeoTargets": {
        "enableFencing": true,
        "items": [
          {
            "healthCheckedTargets": {
              "externalEndpoints": [
                "string"
              ],
              "internalLoadBalancers": [
                {
                  "ipAddress": "string",
                  "ipProtocol": "UNDEFINED",
                  "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                  "loadBalancerType": "NONE",
                  "networkUrl": "string",
                  "port": "string",
                  "project": "string",
                  "region": "string"
                }
              ]
            },
            "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
            "location": "string",
            "rrdatas": [
              "string"
            ],
            "signatureRrdatas": [
              "string"
            ]
          }
        ],
        "kind": "dns#rRSetRoutingPolicyGeoPolicy"
      },
      "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
      "primaryTargets": {
        "externalEndpoints": [
          "string"
        ],
        "internalLoadBalancers": [
          {
            "ipAddress": "string",
            "ipProtocol": "UNDEFINED",
            "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
            "loadBalancerType": "NONE",
            "networkUrl": "string",
            "port": "string",
            "project": "string",
            "region": "string"
          }
        ]
      },
      "trickleTraffic": 0
    },
    "wrr": {
      "items": [
        {
          "healthCheckedTargets": {
            "externalEndpoints": [
              "string"
            ],
            "internalLoadBalancers": [
              {
                "ipAddress": "string",
                "ipProtocol": "UNDEFINED",
                "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                "loadBalancerType": "NONE",
                "networkUrl": "string",
                "port": "string",
                "project": "string",
                "region": "string"
              }
            ]
          },
          "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
          "rrdatas": [
            "string"
          ],
          "signatureRrdatas": [
            "string"
          ],
          "weight": 0
        }
      ],
      "kind": "dns#rRSetRoutingPolicyWrrPolicy"
    }
  },
  "rrdatas": [
    "string"
  ],
  "signatureRrdatas": [
    "string"
  ],
  "ttl": 0,
  "type": "string"
}
```

<h3 id="dnsresourcerecordsetspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information will be used for routing and will be part of the resource name.|
|managedZone|path|string|true|Identifies the managed zone addressed by this request. Can be the managed zone name or ID.|
|name|path|string|true|Fully qualified domain name.|
|type|path|string|true|RRSet type.|
|clientOperationId|query|string|false|For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.|
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
|body|body|[ResourceRecordSet](#schemaresourcerecordset)|false|none|
|» kind|body|string|false|none|
|» name|body|string|false|For example, www.example.com.|
|» routingPolicy|body|[RRSetRoutingPolicy](#schemarrsetroutingpolicy)|false|Configures dynamic query responses based on either the geo location of the querying user or a weighted round robin based routing policy. A valid ResourceRecordSet contains only rrdata (for static resolution) or a routing_policy (for dynamic resolution).|
|» rrdatas|body|[string]|false|As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1) -- see examples.|
|» signatureRrdatas|body|[string]|false|As defined in RFC 4034 (section 3.2).|
|» ttl|body|integer(int32)|false|Number of seconds that this ResourceRecordSet can be cached by resolvers.|
|» type|body|string|false|The identifier of a supported record type. See the list of Supported DNS record types.|

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
  "kind": "dns#resourceRecordSet",
  "name": "string",
  "routingPolicy": {
    "geo": {
      "enableFencing": true,
      "items": [
        {
          "healthCheckedTargets": {
            "externalEndpoints": [
              "string"
            ],
            "internalLoadBalancers": [
              {
                "ipAddress": "string",
                "ipProtocol": "UNDEFINED",
                "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                "loadBalancerType": "NONE",
                "networkUrl": "string",
                "port": "string",
                "project": "string",
                "region": "string"
              }
            ]
          },
          "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
          "location": "string",
          "rrdatas": [
            "string"
          ],
          "signatureRrdatas": [
            "string"
          ]
        }
      ],
      "kind": "dns#rRSetRoutingPolicyGeoPolicy"
    },
    "healthCheck": "string",
    "kind": "dns#rRSetRoutingPolicy",
    "primaryBackup": {
      "backupGeoTargets": {
        "enableFencing": true,
        "items": [
          {
            "healthCheckedTargets": {
              "externalEndpoints": [
                "string"
              ],
              "internalLoadBalancers": [
                {
                  "ipAddress": "string",
                  "ipProtocol": "UNDEFINED",
                  "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                  "loadBalancerType": "NONE",
                  "networkUrl": "string",
                  "port": "string",
                  "project": "string",
                  "region": "string"
                }
              ]
            },
            "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
            "location": "string",
            "rrdatas": [
              "string"
            ],
            "signatureRrdatas": [
              "string"
            ]
          }
        ],
        "kind": "dns#rRSetRoutingPolicyGeoPolicy"
      },
      "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
      "primaryTargets": {
        "externalEndpoints": [
          "string"
        ],
        "internalLoadBalancers": [
          {
            "ipAddress": "string",
            "ipProtocol": "UNDEFINED",
            "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
            "loadBalancerType": "NONE",
            "networkUrl": "string",
            "port": "string",
            "project": "string",
            "region": "string"
          }
        ]
      },
      "trickleTraffic": 0
    },
    "wrr": {
      "items": [
        {
          "healthCheckedTargets": {
            "externalEndpoints": [
              "string"
            ],
            "internalLoadBalancers": [
              {
                "ipAddress": "string",
                "ipProtocol": "UNDEFINED",
                "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                "loadBalancerType": "NONE",
                "networkUrl": "string",
                "port": "string",
                "project": "string",
                "region": "string"
              }
            ]
          },
          "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
          "rrdatas": [
            "string"
          ],
          "signatureRrdatas": [
            "string"
          ],
          "weight": 0
        }
      ],
      "kind": "dns#rRSetRoutingPolicyWrrPolicy"
    }
  },
  "rrdatas": [
    "string"
  ],
  "signatureRrdatas": [
    "string"
  ],
  "ttl": 0,
  "type": "string"
}
```

<h3 id="dnsresourcerecordsetspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ResourceRecordSet](#schemaresourcerecordset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

<h1 id="cloud-dns-api-responsepolicies">responsePolicies</h1>

## dns.responsePolicies.list

<a id="opIddns.responsePolicies.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/responsePolicies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dns/v2/projects/{project}/locations/{location}/responsePolicies`

Enumerates all Response Policies associated with a project.

<h3 id="dnsresponsepolicieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information will be used for routing and will be part of the resource name.|
|maxResults|query|integer|false|Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.|
|pageToken|query|string|false|Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.|
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
  "header": {
    "operationId": "string"
  },
  "nextPageToken": "string",
  "responsePolicies": [
    {
      "description": "string",
      "gkeClusters": [
        {
          "gkeClusterName": "string",
          "kind": "dns#responsePolicyGKECluster"
        }
      ],
      "id": "string",
      "kind": "dns#responsePolicy",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "networks": [
        {
          "kind": "dns#responsePolicyNetwork",
          "networkUrl": "string"
        }
      ],
      "responsePolicyName": "string"
    }
  ]
}
```

<h3 id="dnsresponsepolicieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ResponsePoliciesListResponse](#schemaresponsepolicieslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.responsePolicies.create

<a id="opIddns.responsePolicies.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/responsePolicies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "gkeClusters": [
      {
        "gkeClusterName": "string",
        "kind": "dns#responsePolicyGKECluster"
      }
    ],
    "id": "string",
    "kind": "dns#responsePolicy",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "networks": [
      {
        "kind": "dns#responsePolicyNetwork",
        "networkUrl": "string"
      }
    ],
    "responsePolicyName": "string"
  }'
```

`POST /dns/v2/projects/{project}/locations/{location}/responsePolicies`

Creates a new Response Policy

> Body parameter

```json
{
  "description": "string",
  "gkeClusters": [
    {
      "gkeClusterName": "string",
      "kind": "dns#responsePolicyGKECluster"
    }
  ],
  "id": "string",
  "kind": "dns#responsePolicy",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "networks": [
    {
      "kind": "dns#responsePolicyNetwork",
      "networkUrl": "string"
    }
  ],
  "responsePolicyName": "string"
}
```

<h3 id="dnsresponsepoliciescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource, only applicable in the v APIs. This information will be used for routing and will be part of the resource name.|
|clientOperationId|query|string|false|For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.|
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
|body|body|[ResponsePolicy](#schemaresponsepolicy)|false|none|
|» description|body|string|false|User-provided description for this Response Policy.|
|» gkeClusters|body|[[ResponsePolicyGKECluster](#schemaresponsepolicygkecluster)]|false|The list of Google Kubernetes Engine clusters to which this response policy is applied.|
|» id|body|string(int64)|false|Unique identifier for the resource; defined by the server (output only).|
|» kind|body|string|false|none|
|» labels|body|object|false|User labels.|
|» » **additionalProperties**|body|string|false|none|
|» networks|body|[[ResponsePolicyNetwork](#schemaresponsepolicynetwork)]|false|List of network names specifying networks to which this policy is applied.|
|» responsePolicyName|body|string|false|User assigned name for this Response Policy.|

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
  "gkeClusters": [
    {
      "gkeClusterName": "string",
      "kind": "dns#responsePolicyGKECluster"
    }
  ],
  "id": "string",
  "kind": "dns#responsePolicy",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "networks": [
    {
      "kind": "dns#responsePolicyNetwork",
      "networkUrl": "string"
    }
  ],
  "responsePolicyName": "string"
}
```

<h3 id="dnsresponsepoliciescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ResponsePolicy](#schemaresponsepolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.responsePolicies.get

<a id="opIddns.responsePolicies.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/responsePolicies/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dns/v2/projects/{project}/locations/{location}/responsePolicies/{responsePolicy}`

Fetches the representation of an existing Response Policy.

<h3 id="dnsresponsepoliciesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information will be used for routing and will be part of the resource name.|
|responsePolicy|path|string|true|User assigned name of the Response Policy addressed by this request.|
|clientOperationId|query|string|false|For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.|
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
  "gkeClusters": [
    {
      "gkeClusterName": "string",
      "kind": "dns#responsePolicyGKECluster"
    }
  ],
  "id": "string",
  "kind": "dns#responsePolicy",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "networks": [
    {
      "kind": "dns#responsePolicyNetwork",
      "networkUrl": "string"
    }
  ],
  "responsePolicyName": "string"
}
```

<h3 id="dnsresponsepoliciesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ResponsePolicy](#schemaresponsepolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.responsePolicies.update

<a id="opIddns.responsePolicies.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/responsePolicies/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "gkeClusters": [
      {
        "gkeClusterName": "string",
        "kind": "dns#responsePolicyGKECluster"
      }
    ],
    "id": "string",
    "kind": "dns#responsePolicy",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "networks": [
      {
        "kind": "dns#responsePolicyNetwork",
        "networkUrl": "string"
      }
    ],
    "responsePolicyName": "string"
  }'
```

`PUT /dns/v2/projects/{project}/locations/{location}/responsePolicies/{responsePolicy}`

Updates an existing Response Policy.

> Body parameter

```json
{
  "description": "string",
  "gkeClusters": [
    {
      "gkeClusterName": "string",
      "kind": "dns#responsePolicyGKECluster"
    }
  ],
  "id": "string",
  "kind": "dns#responsePolicy",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "networks": [
    {
      "kind": "dns#responsePolicyNetwork",
      "networkUrl": "string"
    }
  ],
  "responsePolicyName": "string"
}
```

<h3 id="dnsresponsepoliciesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information will be used for routing and will be part of the resource name.|
|responsePolicy|path|string|true|User assigned name of the Response Policy addressed by this request.|
|clientOperationId|query|string|false|For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.|
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
|body|body|[ResponsePolicy](#schemaresponsepolicy)|false|none|
|» description|body|string|false|User-provided description for this Response Policy.|
|» gkeClusters|body|[[ResponsePolicyGKECluster](#schemaresponsepolicygkecluster)]|false|The list of Google Kubernetes Engine clusters to which this response policy is applied.|
|» id|body|string(int64)|false|Unique identifier for the resource; defined by the server (output only).|
|» kind|body|string|false|none|
|» labels|body|object|false|User labels.|
|» » **additionalProperties**|body|string|false|none|
|» networks|body|[[ResponsePolicyNetwork](#schemaresponsepolicynetwork)]|false|List of network names specifying networks to which this policy is applied.|
|» responsePolicyName|body|string|false|User assigned name for this Response Policy.|

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
  "header": {
    "operationId": "string"
  },
  "responsePolicy": {
    "description": "string",
    "gkeClusters": [
      {
        "gkeClusterName": "string",
        "kind": "dns#responsePolicyGKECluster"
      }
    ],
    "id": "string",
    "kind": "dns#responsePolicy",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "networks": [
      {
        "kind": "dns#responsePolicyNetwork",
        "networkUrl": "string"
      }
    ],
    "responsePolicyName": "string"
  }
}
```

<h3 id="dnsresponsepoliciesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ResponsePoliciesUpdateResponse](#schemaresponsepoliciesupdateresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.responsePolicies.delete

<a id="opIddns.responsePolicies.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/responsePolicies/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /dns/v2/projects/{project}/locations/{location}/responsePolicies/{responsePolicy}`

Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.

<h3 id="dnsresponsepoliciesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information will be used for routing and will be part of the resource name.|
|responsePolicy|path|string|true|User assigned name of the Response Policy addressed by this request.|
|clientOperationId|query|string|false|For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.|
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

<h3 id="dnsresponsepoliciesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.responsePolicies.patch

<a id="opIddns.responsePolicies.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/responsePolicies/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "gkeClusters": [
      {
        "gkeClusterName": "string",
        "kind": "dns#responsePolicyGKECluster"
      }
    ],
    "id": "string",
    "kind": "dns#responsePolicy",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "networks": [
      {
        "kind": "dns#responsePolicyNetwork",
        "networkUrl": "string"
      }
    ],
    "responsePolicyName": "string"
  }'
```

`PATCH /dns/v2/projects/{project}/locations/{location}/responsePolicies/{responsePolicy}`

Applies a partial update to an existing Response Policy.

> Body parameter

```json
{
  "description": "string",
  "gkeClusters": [
    {
      "gkeClusterName": "string",
      "kind": "dns#responsePolicyGKECluster"
    }
  ],
  "id": "string",
  "kind": "dns#responsePolicy",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "networks": [
    {
      "kind": "dns#responsePolicyNetwork",
      "networkUrl": "string"
    }
  ],
  "responsePolicyName": "string"
}
```

<h3 id="dnsresponsepoliciespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information will be used for routing and will be part of the resource name.|
|responsePolicy|path|string|true|User assigned name of the response policy addressed by this request.|
|clientOperationId|query|string|false|For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.|
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
|body|body|[ResponsePolicy](#schemaresponsepolicy)|false|none|
|» description|body|string|false|User-provided description for this Response Policy.|
|» gkeClusters|body|[[ResponsePolicyGKECluster](#schemaresponsepolicygkecluster)]|false|The list of Google Kubernetes Engine clusters to which this response policy is applied.|
|» id|body|string(int64)|false|Unique identifier for the resource; defined by the server (output only).|
|» kind|body|string|false|none|
|» labels|body|object|false|User labels.|
|» » **additionalProperties**|body|string|false|none|
|» networks|body|[[ResponsePolicyNetwork](#schemaresponsepolicynetwork)]|false|List of network names specifying networks to which this policy is applied.|
|» responsePolicyName|body|string|false|User assigned name for this Response Policy.|

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
  "header": {
    "operationId": "string"
  },
  "responsePolicy": {
    "description": "string",
    "gkeClusters": [
      {
        "gkeClusterName": "string",
        "kind": "dns#responsePolicyGKECluster"
      }
    ],
    "id": "string",
    "kind": "dns#responsePolicy",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "networks": [
      {
        "kind": "dns#responsePolicyNetwork",
        "networkUrl": "string"
      }
    ],
    "responsePolicyName": "string"
  }
}
```

<h3 id="dnsresponsepoliciespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ResponsePoliciesPatchResponse](#schemaresponsepoliciespatchresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

<h1 id="cloud-dns-api-responsepolicyrules">responsePolicyRules</h1>

## dns.responsePolicyRules.list

<a id="opIddns.responsePolicyRules.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/responsePolicies/string/rules \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dns/v2/projects/{project}/locations/{location}/responsePolicies/{responsePolicy}/rules`

Enumerates all Response Policy Rules associated with a project.

<h3 id="dnsresponsepolicyruleslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information will be used for routing and will be part of the resource name.|
|responsePolicy|path|string|true|User assigned name of the Response Policy to list.|
|maxResults|query|integer|false|Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.|
|pageToken|query|string|false|Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.|
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
  "header": {
    "operationId": "string"
  },
  "nextPageToken": "string",
  "responsePolicyRules": [
    {
      "behavior": "BEHAVIOR_UNSPECIFIED",
      "dnsName": "string",
      "kind": "dns#responsePolicyRule",
      "localData": {
        "localDatas": [
          {
            "kind": "dns#resourceRecordSet",
            "name": "string",
            "routingPolicy": {
              "geo": {
                "enableFencing": true,
                "items": [
                  {
                    "healthCheckedTargets": {
                      "externalEndpoints": [
                        "string"
                      ],
                      "internalLoadBalancers": [
                        {
                          "ipAddress": "string",
                          "ipProtocol": "UNDEFINED",
                          "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                          "loadBalancerType": "NONE",
                          "networkUrl": "string",
                          "port": "string",
                          "project": "string",
                          "region": "string"
                        }
                      ]
                    },
                    "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                    "location": "string",
                    "rrdatas": [
                      "string"
                    ],
                    "signatureRrdatas": [
                      "string"
                    ]
                  }
                ],
                "kind": "dns#rRSetRoutingPolicyGeoPolicy"
              },
              "healthCheck": "string",
              "kind": "dns#rRSetRoutingPolicy",
              "primaryBackup": {
                "backupGeoTargets": {
                  "enableFencing": true,
                  "items": [
                    {
                      "healthCheckedTargets": {
                        "externalEndpoints": [
                          "string"
                        ],
                        "internalLoadBalancers": [
                          {
                            "ipAddress": "string",
                            "ipProtocol": "UNDEFINED",
                            "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                            "loadBalancerType": "NONE",
                            "networkUrl": "string",
                            "port": "string",
                            "project": "string",
                            "region": "string"
                          }
                        ]
                      },
                      "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                      "location": "string",
                      "rrdatas": [
                        "string"
                      ],
                      "signatureRrdatas": [
                        "string"
                      ]
                    }
                  ],
                  "kind": "dns#rRSetRoutingPolicyGeoPolicy"
                },
                "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
                "primaryTargets": {
                  "externalEndpoints": [
                    "string"
                  ],
                  "internalLoadBalancers": [
                    {
                      "ipAddress": "string",
                      "ipProtocol": "UNDEFINED",
                      "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                      "loadBalancerType": "NONE",
                      "networkUrl": "string",
                      "port": "string",
                      "project": "string",
                      "region": "string"
                    }
                  ]
                },
                "trickleTraffic": 0
              },
              "wrr": {
                "items": [
                  {
                    "healthCheckedTargets": {
                      "externalEndpoints": [
                        "string"
                      ],
                      "internalLoadBalancers": [
                        {
                          "ipAddress": "string",
                          "ipProtocol": "UNDEFINED",
                          "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                          "loadBalancerType": "NONE",
                          "networkUrl": "string",
                          "port": "string",
                          "project": "string",
                          "region": "string"
                        }
                      ]
                    },
                    "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
                    "rrdatas": [
                      "string"
                    ],
                    "signatureRrdatas": [
                      "string"
                    ],
                    "weight": 0
                  }
                ],
                "kind": "dns#rRSetRoutingPolicyWrrPolicy"
              }
            },
            "rrdatas": [
              "string"
            ],
            "signatureRrdatas": [
              "string"
            ],
            "ttl": 0,
            "type": "string"
          }
        ]
      },
      "ruleName": "string"
    }
  ]
}
```

<h3 id="dnsresponsepolicyruleslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ResponsePolicyRulesListResponse](#schemaresponsepolicyruleslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.responsePolicyRules.create

<a id="opIddns.responsePolicyRules.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/responsePolicies/string/rules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "behavior": "BEHAVIOR_UNSPECIFIED",
    "dnsName": "string",
    "kind": "dns#responsePolicyRule",
    "localData": {
      "localDatas": [
        {
          "kind": "dns#resourceRecordSet",
          "name": "string",
          "routingPolicy": {
            "geo": {
              "enableFencing": true,
              "items": [
                {
                  "healthCheckedTargets": {
                    "externalEndpoints": [
                      "string"
                    ],
                    "internalLoadBalancers": [
                      {
                        "ipAddress": "string",
                        "ipProtocol": "UNDEFINED",
                        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                        "loadBalancerType": "NONE",
                        "networkUrl": "string",
                        "port": "string",
                        "project": "string",
                        "region": "string"
                      }
                    ]
                  },
                  "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                  "location": "string",
                  "rrdatas": [
                    "string"
                  ],
                  "signatureRrdatas": [
                    "string"
                  ]
                }
              ],
              "kind": "dns#rRSetRoutingPolicyGeoPolicy"
            },
            "healthCheck": "string",
            "kind": "dns#rRSetRoutingPolicy",
            "primaryBackup": {
              "backupGeoTargets": {
                "enableFencing": true,
                "items": [
                  {
                    "healthCheckedTargets": {
                      "externalEndpoints": [
                        "string"
                      ],
                      "internalLoadBalancers": [
                        {
                          "ipAddress": "string",
                          "ipProtocol": "UNDEFINED",
                          "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                          "loadBalancerType": "NONE",
                          "networkUrl": "string",
                          "port": "string",
                          "project": "string",
                          "region": "string"
                        }
                      ]
                    },
                    "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                    "location": "string",
                    "rrdatas": [
                      "string"
                    ],
                    "signatureRrdatas": [
                      "string"
                    ]
                  }
                ],
                "kind": "dns#rRSetRoutingPolicyGeoPolicy"
              },
              "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
              "primaryTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "trickleTraffic": 0
            },
            "wrr": {
              "items": [
                {
                  "healthCheckedTargets": {
                    "externalEndpoints": [
                      "string"
                    ],
                    "internalLoadBalancers": [
                      {
                        "ipAddress": "string",
                        "ipProtocol": "UNDEFINED",
                        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                        "loadBalancerType": "NONE",
                        "networkUrl": "string",
                        "port": "string",
                        "project": "string",
                        "region": "string"
                      }
                    ]
                  },
                  "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
                  "rrdatas": [
                    "string"
                  ],
                  "signatureRrdatas": [
                    "string"
                  ],
                  "weight": 0
                }
              ],
              "kind": "dns#rRSetRoutingPolicyWrrPolicy"
            }
          },
          "rrdatas": [
            "string"
          ],
          "signatureRrdatas": [
            "string"
          ],
          "ttl": 0,
          "type": "string"
        }
      ]
    },
    "ruleName": "string"
  }'
```

`POST /dns/v2/projects/{project}/locations/{location}/responsePolicies/{responsePolicy}/rules`

Creates a new Response Policy Rule.

> Body parameter

```json
{
  "behavior": "BEHAVIOR_UNSPECIFIED",
  "dnsName": "string",
  "kind": "dns#responsePolicyRule",
  "localData": {
    "localDatas": [
      {
        "kind": "dns#resourceRecordSet",
        "name": "string",
        "routingPolicy": {
          "geo": {
            "enableFencing": true,
            "items": [
              {
                "healthCheckedTargets": {
                  "externalEndpoints": [
                    "string"
                  ],
                  "internalLoadBalancers": [
                    {
                      "ipAddress": "string",
                      "ipProtocol": "UNDEFINED",
                      "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                      "loadBalancerType": "NONE",
                      "networkUrl": "string",
                      "port": "string",
                      "project": "string",
                      "region": "string"
                    }
                  ]
                },
                "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                "location": "string",
                "rrdatas": [
                  "string"
                ],
                "signatureRrdatas": [
                  "string"
                ]
              }
            ],
            "kind": "dns#rRSetRoutingPolicyGeoPolicy"
          },
          "healthCheck": "string",
          "kind": "dns#rRSetRoutingPolicy",
          "primaryBackup": {
            "backupGeoTargets": {
              "enableFencing": true,
              "items": [
                {
                  "healthCheckedTargets": {
                    "externalEndpoints": [
                      "string"
                    ],
                    "internalLoadBalancers": [
                      {
                        "ipAddress": "string",
                        "ipProtocol": "UNDEFINED",
                        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                        "loadBalancerType": "NONE",
                        "networkUrl": "string",
                        "port": "string",
                        "project": "string",
                        "region": "string"
                      }
                    ]
                  },
                  "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                  "location": "string",
                  "rrdatas": [
                    "string"
                  ],
                  "signatureRrdatas": [
                    "string"
                  ]
                }
              ],
              "kind": "dns#rRSetRoutingPolicyGeoPolicy"
            },
            "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
            "primaryTargets": {
              "externalEndpoints": [
                "string"
              ],
              "internalLoadBalancers": [
                {
                  "ipAddress": "string",
                  "ipProtocol": "UNDEFINED",
                  "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                  "loadBalancerType": "NONE",
                  "networkUrl": "string",
                  "port": "string",
                  "project": "string",
                  "region": "string"
                }
              ]
            },
            "trickleTraffic": 0
          },
          "wrr": {
            "items": [
              {
                "healthCheckedTargets": {
                  "externalEndpoints": [
                    "string"
                  ],
                  "internalLoadBalancers": [
                    {
                      "ipAddress": "string",
                      "ipProtocol": "UNDEFINED",
                      "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                      "loadBalancerType": "NONE",
                      "networkUrl": "string",
                      "port": "string",
                      "project": "string",
                      "region": "string"
                    }
                  ]
                },
                "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
                "rrdatas": [
                  "string"
                ],
                "signatureRrdatas": [
                  "string"
                ],
                "weight": 0
              }
            ],
            "kind": "dns#rRSetRoutingPolicyWrrPolicy"
          }
        },
        "rrdatas": [
          "string"
        ],
        "signatureRrdatas": [
          "string"
        ],
        "ttl": 0,
        "type": "string"
      }
    ]
  },
  "ruleName": "string"
}
```

<h3 id="dnsresponsepolicyrulescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information will be used for routing and will be part of the resource name.|
|responsePolicy|path|string|true|User assigned name of the Response Policy containing the Response Policy Rule.|
|clientOperationId|query|string|false|For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.|
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
|body|body|[ResponsePolicyRule](#schemaresponsepolicyrule)|false|none|
|» behavior|body|string|false|Answer this query with a behavior rather than DNS data.|
|» dnsName|body|string|false|The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule.|
|» kind|body|string|false|none|
|» localData|body|[ResponsePolicyRuleLocalData](#schemaresponsepolicyrulelocaldata)|false|Answer this query directly with DNS data. These ResourceRecordSets override any other DNS behavior for the matched name; in particular they override private zones, the public internet, and GCP internal DNS. No SOA nor NS types are allowed.|
|» ruleName|body|string|false|An identifier for this rule. Must be unique with the ResponsePolicy.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» behavior|BEHAVIOR_UNSPECIFIED|
|» behavior|BYPASS_RESPONSE_POLICY|

> Example responses

> 200 Response

```json
{
  "behavior": "BEHAVIOR_UNSPECIFIED",
  "dnsName": "string",
  "kind": "dns#responsePolicyRule",
  "localData": {
    "localDatas": [
      {
        "kind": "dns#resourceRecordSet",
        "name": "string",
        "routingPolicy": {
          "geo": {
            "enableFencing": true,
            "items": [
              {
                "healthCheckedTargets": {
                  "externalEndpoints": [
                    "string"
                  ],
                  "internalLoadBalancers": [
                    {
                      "ipAddress": "string",
                      "ipProtocol": "UNDEFINED",
                      "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                      "loadBalancerType": "NONE",
                      "networkUrl": "string",
                      "port": "string",
                      "project": "string",
                      "region": "string"
                    }
                  ]
                },
                "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                "location": "string",
                "rrdatas": [
                  "string"
                ],
                "signatureRrdatas": [
                  "string"
                ]
              }
            ],
            "kind": "dns#rRSetRoutingPolicyGeoPolicy"
          },
          "healthCheck": "string",
          "kind": "dns#rRSetRoutingPolicy",
          "primaryBackup": {
            "backupGeoTargets": {
              "enableFencing": true,
              "items": [
                {
                  "healthCheckedTargets": {
                    "externalEndpoints": [
                      "string"
                    ],
                    "internalLoadBalancers": [
                      {
                        "ipAddress": "string",
                        "ipProtocol": "UNDEFINED",
                        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                        "loadBalancerType": "NONE",
                        "networkUrl": "string",
                        "port": "string",
                        "project": "string",
                        "region": "string"
                      }
                    ]
                  },
                  "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                  "location": "string",
                  "rrdatas": [
                    "string"
                  ],
                  "signatureRrdatas": [
                    "string"
                  ]
                }
              ],
              "kind": "dns#rRSetRoutingPolicyGeoPolicy"
            },
            "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
            "primaryTargets": {
              "externalEndpoints": [
                "string"
              ],
              "internalLoadBalancers": [
                {
                  "ipAddress": "string",
                  "ipProtocol": "UNDEFINED",
                  "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                  "loadBalancerType": "NONE",
                  "networkUrl": "string",
                  "port": "string",
                  "project": "string",
                  "region": "string"
                }
              ]
            },
            "trickleTraffic": 0
          },
          "wrr": {
            "items": [
              {
                "healthCheckedTargets": {
                  "externalEndpoints": [
                    "string"
                  ],
                  "internalLoadBalancers": [
                    {
                      "ipAddress": "string",
                      "ipProtocol": "UNDEFINED",
                      "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                      "loadBalancerType": "NONE",
                      "networkUrl": "string",
                      "port": "string",
                      "project": "string",
                      "region": "string"
                    }
                  ]
                },
                "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
                "rrdatas": [
                  "string"
                ],
                "signatureRrdatas": [
                  "string"
                ],
                "weight": 0
              }
            ],
            "kind": "dns#rRSetRoutingPolicyWrrPolicy"
          }
        },
        "rrdatas": [
          "string"
        ],
        "signatureRrdatas": [
          "string"
        ],
        "ttl": 0,
        "type": "string"
      }
    ]
  },
  "ruleName": "string"
}
```

<h3 id="dnsresponsepolicyrulescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ResponsePolicyRule](#schemaresponsepolicyrule)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.responsePolicyRules.get

<a id="opIddns.responsePolicyRules.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/responsePolicies/string/rules/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dns/v2/projects/{project}/locations/{location}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}`

Fetches the representation of an existing Response Policy Rule.

<h3 id="dnsresponsepolicyrulesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information will be used for routing and will be part of the resource name.|
|responsePolicy|path|string|true|User assigned name of the Response Policy containing the Response Policy Rule.|
|responsePolicyRule|path|string|true|User assigned name of the Response Policy Rule addressed by this request.|
|clientOperationId|query|string|false|For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.|
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
  "behavior": "BEHAVIOR_UNSPECIFIED",
  "dnsName": "string",
  "kind": "dns#responsePolicyRule",
  "localData": {
    "localDatas": [
      {
        "kind": "dns#resourceRecordSet",
        "name": "string",
        "routingPolicy": {
          "geo": {
            "enableFencing": true,
            "items": [
              {
                "healthCheckedTargets": {
                  "externalEndpoints": [
                    "string"
                  ],
                  "internalLoadBalancers": [
                    {
                      "ipAddress": "string",
                      "ipProtocol": "UNDEFINED",
                      "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                      "loadBalancerType": "NONE",
                      "networkUrl": "string",
                      "port": "string",
                      "project": "string",
                      "region": "string"
                    }
                  ]
                },
                "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                "location": "string",
                "rrdatas": [
                  "string"
                ],
                "signatureRrdatas": [
                  "string"
                ]
              }
            ],
            "kind": "dns#rRSetRoutingPolicyGeoPolicy"
          },
          "healthCheck": "string",
          "kind": "dns#rRSetRoutingPolicy",
          "primaryBackup": {
            "backupGeoTargets": {
              "enableFencing": true,
              "items": [
                {
                  "healthCheckedTargets": {
                    "externalEndpoints": [
                      "string"
                    ],
                    "internalLoadBalancers": [
                      {
                        "ipAddress": "string",
                        "ipProtocol": "UNDEFINED",
                        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                        "loadBalancerType": "NONE",
                        "networkUrl": "string",
                        "port": "string",
                        "project": "string",
                        "region": "string"
                      }
                    ]
                  },
                  "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                  "location": "string",
                  "rrdatas": [
                    "string"
                  ],
                  "signatureRrdatas": [
                    "string"
                  ]
                }
              ],
              "kind": "dns#rRSetRoutingPolicyGeoPolicy"
            },
            "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
            "primaryTargets": {
              "externalEndpoints": [
                "string"
              ],
              "internalLoadBalancers": [
                {
                  "ipAddress": "string",
                  "ipProtocol": "UNDEFINED",
                  "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                  "loadBalancerType": "NONE",
                  "networkUrl": "string",
                  "port": "string",
                  "project": "string",
                  "region": "string"
                }
              ]
            },
            "trickleTraffic": 0
          },
          "wrr": {
            "items": [
              {
                "healthCheckedTargets": {
                  "externalEndpoints": [
                    "string"
                  ],
                  "internalLoadBalancers": [
                    {
                      "ipAddress": "string",
                      "ipProtocol": "UNDEFINED",
                      "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                      "loadBalancerType": "NONE",
                      "networkUrl": "string",
                      "port": "string",
                      "project": "string",
                      "region": "string"
                    }
                  ]
                },
                "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
                "rrdatas": [
                  "string"
                ],
                "signatureRrdatas": [
                  "string"
                ],
                "weight": 0
              }
            ],
            "kind": "dns#rRSetRoutingPolicyWrrPolicy"
          }
        },
        "rrdatas": [
          "string"
        ],
        "signatureRrdatas": [
          "string"
        ],
        "ttl": 0,
        "type": "string"
      }
    ]
  },
  "ruleName": "string"
}
```

<h3 id="dnsresponsepolicyrulesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ResponsePolicyRule](#schemaresponsepolicyrule)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.responsePolicyRules.update

<a id="opIddns.responsePolicyRules.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/responsePolicies/string/rules/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "behavior": "BEHAVIOR_UNSPECIFIED",
    "dnsName": "string",
    "kind": "dns#responsePolicyRule",
    "localData": {
      "localDatas": [
        {
          "kind": "dns#resourceRecordSet",
          "name": "string",
          "routingPolicy": {
            "geo": {
              "enableFencing": true,
              "items": [
                {
                  "healthCheckedTargets": {
                    "externalEndpoints": [
                      "string"
                    ],
                    "internalLoadBalancers": [
                      {
                        "ipAddress": "string",
                        "ipProtocol": "UNDEFINED",
                        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                        "loadBalancerType": "NONE",
                        "networkUrl": "string",
                        "port": "string",
                        "project": "string",
                        "region": "string"
                      }
                    ]
                  },
                  "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                  "location": "string",
                  "rrdatas": [
                    "string"
                  ],
                  "signatureRrdatas": [
                    "string"
                  ]
                }
              ],
              "kind": "dns#rRSetRoutingPolicyGeoPolicy"
            },
            "healthCheck": "string",
            "kind": "dns#rRSetRoutingPolicy",
            "primaryBackup": {
              "backupGeoTargets": {
                "enableFencing": true,
                "items": [
                  {
                    "healthCheckedTargets": {
                      "externalEndpoints": [
                        "string"
                      ],
                      "internalLoadBalancers": [
                        {
                          "ipAddress": "string",
                          "ipProtocol": "UNDEFINED",
                          "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                          "loadBalancerType": "NONE",
                          "networkUrl": "string",
                          "port": "string",
                          "project": "string",
                          "region": "string"
                        }
                      ]
                    },
                    "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                    "location": "string",
                    "rrdatas": [
                      "string"
                    ],
                    "signatureRrdatas": [
                      "string"
                    ]
                  }
                ],
                "kind": "dns#rRSetRoutingPolicyGeoPolicy"
              },
              "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
              "primaryTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "trickleTraffic": 0
            },
            "wrr": {
              "items": [
                {
                  "healthCheckedTargets": {
                    "externalEndpoints": [
                      "string"
                    ],
                    "internalLoadBalancers": [
                      {
                        "ipAddress": "string",
                        "ipProtocol": "UNDEFINED",
                        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                        "loadBalancerType": "NONE",
                        "networkUrl": "string",
                        "port": "string",
                        "project": "string",
                        "region": "string"
                      }
                    ]
                  },
                  "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
                  "rrdatas": [
                    "string"
                  ],
                  "signatureRrdatas": [
                    "string"
                  ],
                  "weight": 0
                }
              ],
              "kind": "dns#rRSetRoutingPolicyWrrPolicy"
            }
          },
          "rrdatas": [
            "string"
          ],
          "signatureRrdatas": [
            "string"
          ],
          "ttl": 0,
          "type": "string"
        }
      ]
    },
    "ruleName": "string"
  }'
```

`PUT /dns/v2/projects/{project}/locations/{location}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}`

Updates an existing Response Policy Rule.

> Body parameter

```json
{
  "behavior": "BEHAVIOR_UNSPECIFIED",
  "dnsName": "string",
  "kind": "dns#responsePolicyRule",
  "localData": {
    "localDatas": [
      {
        "kind": "dns#resourceRecordSet",
        "name": "string",
        "routingPolicy": {
          "geo": {
            "enableFencing": true,
            "items": [
              {
                "healthCheckedTargets": {
                  "externalEndpoints": [
                    "string"
                  ],
                  "internalLoadBalancers": [
                    {
                      "ipAddress": "string",
                      "ipProtocol": "UNDEFINED",
                      "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                      "loadBalancerType": "NONE",
                      "networkUrl": "string",
                      "port": "string",
                      "project": "string",
                      "region": "string"
                    }
                  ]
                },
                "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                "location": "string",
                "rrdatas": [
                  "string"
                ],
                "signatureRrdatas": [
                  "string"
                ]
              }
            ],
            "kind": "dns#rRSetRoutingPolicyGeoPolicy"
          },
          "healthCheck": "string",
          "kind": "dns#rRSetRoutingPolicy",
          "primaryBackup": {
            "backupGeoTargets": {
              "enableFencing": true,
              "items": [
                {
                  "healthCheckedTargets": {
                    "externalEndpoints": [
                      "string"
                    ],
                    "internalLoadBalancers": [
                      {
                        "ipAddress": "string",
                        "ipProtocol": "UNDEFINED",
                        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                        "loadBalancerType": "NONE",
                        "networkUrl": "string",
                        "port": "string",
                        "project": "string",
                        "region": "string"
                      }
                    ]
                  },
                  "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                  "location": "string",
                  "rrdatas": [
                    "string"
                  ],
                  "signatureRrdatas": [
                    "string"
                  ]
                }
              ],
              "kind": "dns#rRSetRoutingPolicyGeoPolicy"
            },
            "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
            "primaryTargets": {
              "externalEndpoints": [
                "string"
              ],
              "internalLoadBalancers": [
                {
                  "ipAddress": "string",
                  "ipProtocol": "UNDEFINED",
                  "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                  "loadBalancerType": "NONE",
                  "networkUrl": "string",
                  "port": "string",
                  "project": "string",
                  "region": "string"
                }
              ]
            },
            "trickleTraffic": 0
          },
          "wrr": {
            "items": [
              {
                "healthCheckedTargets": {
                  "externalEndpoints": [
                    "string"
                  ],
                  "internalLoadBalancers": [
                    {
                      "ipAddress": "string",
                      "ipProtocol": "UNDEFINED",
                      "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                      "loadBalancerType": "NONE",
                      "networkUrl": "string",
                      "port": "string",
                      "project": "string",
                      "region": "string"
                    }
                  ]
                },
                "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
                "rrdatas": [
                  "string"
                ],
                "signatureRrdatas": [
                  "string"
                ],
                "weight": 0
              }
            ],
            "kind": "dns#rRSetRoutingPolicyWrrPolicy"
          }
        },
        "rrdatas": [
          "string"
        ],
        "signatureRrdatas": [
          "string"
        ],
        "ttl": 0,
        "type": "string"
      }
    ]
  },
  "ruleName": "string"
}
```

<h3 id="dnsresponsepolicyrulesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information will be used for routing and will be part of the resource name.|
|responsePolicy|path|string|true|User assigned name of the Response Policy containing the Response Policy Rule.|
|responsePolicyRule|path|string|true|User assigned name of the Response Policy Rule addressed by this request.|
|clientOperationId|query|string|false|For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.|
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
|body|body|[ResponsePolicyRule](#schemaresponsepolicyrule)|false|none|
|» behavior|body|string|false|Answer this query with a behavior rather than DNS data.|
|» dnsName|body|string|false|The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule.|
|» kind|body|string|false|none|
|» localData|body|[ResponsePolicyRuleLocalData](#schemaresponsepolicyrulelocaldata)|false|Answer this query directly with DNS data. These ResourceRecordSets override any other DNS behavior for the matched name; in particular they override private zones, the public internet, and GCP internal DNS. No SOA nor NS types are allowed.|
|» ruleName|body|string|false|An identifier for this rule. Must be unique with the ResponsePolicy.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» behavior|BEHAVIOR_UNSPECIFIED|
|» behavior|BYPASS_RESPONSE_POLICY|

> Example responses

> 200 Response

```json
{
  "header": {
    "operationId": "string"
  },
  "responsePolicyRule": {
    "behavior": "BEHAVIOR_UNSPECIFIED",
    "dnsName": "string",
    "kind": "dns#responsePolicyRule",
    "localData": {
      "localDatas": [
        {
          "kind": "dns#resourceRecordSet",
          "name": "string",
          "routingPolicy": {
            "geo": {
              "enableFencing": true,
              "items": [
                {
                  "healthCheckedTargets": {
                    "externalEndpoints": [
                      "string"
                    ],
                    "internalLoadBalancers": [
                      {
                        "ipAddress": "string",
                        "ipProtocol": "UNDEFINED",
                        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                        "loadBalancerType": "NONE",
                        "networkUrl": "string",
                        "port": "string",
                        "project": "string",
                        "region": "string"
                      }
                    ]
                  },
                  "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                  "location": "string",
                  "rrdatas": [
                    "string"
                  ],
                  "signatureRrdatas": [
                    "string"
                  ]
                }
              ],
              "kind": "dns#rRSetRoutingPolicyGeoPolicy"
            },
            "healthCheck": "string",
            "kind": "dns#rRSetRoutingPolicy",
            "primaryBackup": {
              "backupGeoTargets": {
                "enableFencing": true,
                "items": [
                  {
                    "healthCheckedTargets": {
                      "externalEndpoints": [
                        "string"
                      ],
                      "internalLoadBalancers": [
                        {
                          "ipAddress": "string",
                          "ipProtocol": "UNDEFINED",
                          "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                          "loadBalancerType": "NONE",
                          "networkUrl": "string",
                          "port": "string",
                          "project": "string",
                          "region": "string"
                        }
                      ]
                    },
                    "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                    "location": "string",
                    "rrdatas": [
                      "string"
                    ],
                    "signatureRrdatas": [
                      "string"
                    ]
                  }
                ],
                "kind": "dns#rRSetRoutingPolicyGeoPolicy"
              },
              "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
              "primaryTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "trickleTraffic": 0
            },
            "wrr": {
              "items": [
                {
                  "healthCheckedTargets": {
                    "externalEndpoints": [
                      "string"
                    ],
                    "internalLoadBalancers": [
                      {
                        "ipAddress": "string",
                        "ipProtocol": "UNDEFINED",
                        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                        "loadBalancerType": "NONE",
                        "networkUrl": "string",
                        "port": "string",
                        "project": "string",
                        "region": "string"
                      }
                    ]
                  },
                  "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
                  "rrdatas": [
                    "string"
                  ],
                  "signatureRrdatas": [
                    "string"
                  ],
                  "weight": 0
                }
              ],
              "kind": "dns#rRSetRoutingPolicyWrrPolicy"
            }
          },
          "rrdatas": [
            "string"
          ],
          "signatureRrdatas": [
            "string"
          ],
          "ttl": 0,
          "type": "string"
        }
      ]
    },
    "ruleName": "string"
  }
}
```

<h3 id="dnsresponsepolicyrulesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ResponsePolicyRulesUpdateResponse](#schemaresponsepolicyrulesupdateresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.responsePolicyRules.delete

<a id="opIddns.responsePolicyRules.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/responsePolicies/string/rules/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /dns/v2/projects/{project}/locations/{location}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}`

Deletes a previously created Response Policy Rule.

<h3 id="dnsresponsepolicyrulesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information will be used for routing and will be part of the resource name.|
|responsePolicy|path|string|true|User assigned name of the Response Policy containing the Response Policy Rule.|
|responsePolicyRule|path|string|true|User assigned name of the Response Policy Rule addressed by this request.|
|clientOperationId|query|string|false|For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.|
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

<h3 id="dnsresponsepolicyrulesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

## dns.responsePolicyRules.patch

<a id="opIddns.responsePolicyRules.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/dns/v2/projects/string/locations/string/responsePolicies/string/rules/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "behavior": "BEHAVIOR_UNSPECIFIED",
    "dnsName": "string",
    "kind": "dns#responsePolicyRule",
    "localData": {
      "localDatas": [
        {
          "kind": "dns#resourceRecordSet",
          "name": "string",
          "routingPolicy": {
            "geo": {
              "enableFencing": true,
              "items": [
                {
                  "healthCheckedTargets": {
                    "externalEndpoints": [
                      "string"
                    ],
                    "internalLoadBalancers": [
                      {
                        "ipAddress": "string",
                        "ipProtocol": "UNDEFINED",
                        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                        "loadBalancerType": "NONE",
                        "networkUrl": "string",
                        "port": "string",
                        "project": "string",
                        "region": "string"
                      }
                    ]
                  },
                  "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                  "location": "string",
                  "rrdatas": [
                    "string"
                  ],
                  "signatureRrdatas": [
                    "string"
                  ]
                }
              ],
              "kind": "dns#rRSetRoutingPolicyGeoPolicy"
            },
            "healthCheck": "string",
            "kind": "dns#rRSetRoutingPolicy",
            "primaryBackup": {
              "backupGeoTargets": {
                "enableFencing": true,
                "items": [
                  {
                    "healthCheckedTargets": {
                      "externalEndpoints": [
                        "string"
                      ],
                      "internalLoadBalancers": [
                        {
                          "ipAddress": "string",
                          "ipProtocol": "UNDEFINED",
                          "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                          "loadBalancerType": "NONE",
                          "networkUrl": "string",
                          "port": "string",
                          "project": "string",
                          "region": "string"
                        }
                      ]
                    },
                    "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                    "location": "string",
                    "rrdatas": [
                      "string"
                    ],
                    "signatureRrdatas": [
                      "string"
                    ]
                  }
                ],
                "kind": "dns#rRSetRoutingPolicyGeoPolicy"
              },
              "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
              "primaryTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "trickleTraffic": 0
            },
            "wrr": {
              "items": [
                {
                  "healthCheckedTargets": {
                    "externalEndpoints": [
                      "string"
                    ],
                    "internalLoadBalancers": [
                      {
                        "ipAddress": "string",
                        "ipProtocol": "UNDEFINED",
                        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                        "loadBalancerType": "NONE",
                        "networkUrl": "string",
                        "port": "string",
                        "project": "string",
                        "region": "string"
                      }
                    ]
                  },
                  "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
                  "rrdatas": [
                    "string"
                  ],
                  "signatureRrdatas": [
                    "string"
                  ],
                  "weight": 0
                }
              ],
              "kind": "dns#rRSetRoutingPolicyWrrPolicy"
            }
          },
          "rrdatas": [
            "string"
          ],
          "signatureRrdatas": [
            "string"
          ],
          "ttl": 0,
          "type": "string"
        }
      ]
    },
    "ruleName": "string"
  }'
```

`PATCH /dns/v2/projects/{project}/locations/{location}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}`

Applies a partial update to an existing Response Policy Rule.

> Body parameter

```json
{
  "behavior": "BEHAVIOR_UNSPECIFIED",
  "dnsName": "string",
  "kind": "dns#responsePolicyRule",
  "localData": {
    "localDatas": [
      {
        "kind": "dns#resourceRecordSet",
        "name": "string",
        "routingPolicy": {
          "geo": {
            "enableFencing": true,
            "items": [
              {
                "healthCheckedTargets": {
                  "externalEndpoints": [
                    "string"
                  ],
                  "internalLoadBalancers": [
                    {
                      "ipAddress": "string",
                      "ipProtocol": "UNDEFINED",
                      "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                      "loadBalancerType": "NONE",
                      "networkUrl": "string",
                      "port": "string",
                      "project": "string",
                      "region": "string"
                    }
                  ]
                },
                "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                "location": "string",
                "rrdatas": [
                  "string"
                ],
                "signatureRrdatas": [
                  "string"
                ]
              }
            ],
            "kind": "dns#rRSetRoutingPolicyGeoPolicy"
          },
          "healthCheck": "string",
          "kind": "dns#rRSetRoutingPolicy",
          "primaryBackup": {
            "backupGeoTargets": {
              "enableFencing": true,
              "items": [
                {
                  "healthCheckedTargets": {
                    "externalEndpoints": [
                      "string"
                    ],
                    "internalLoadBalancers": [
                      {
                        "ipAddress": "string",
                        "ipProtocol": "UNDEFINED",
                        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                        "loadBalancerType": "NONE",
                        "networkUrl": "string",
                        "port": "string",
                        "project": "string",
                        "region": "string"
                      }
                    ]
                  },
                  "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                  "location": "string",
                  "rrdatas": [
                    "string"
                  ],
                  "signatureRrdatas": [
                    "string"
                  ]
                }
              ],
              "kind": "dns#rRSetRoutingPolicyGeoPolicy"
            },
            "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
            "primaryTargets": {
              "externalEndpoints": [
                "string"
              ],
              "internalLoadBalancers": [
                {
                  "ipAddress": "string",
                  "ipProtocol": "UNDEFINED",
                  "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                  "loadBalancerType": "NONE",
                  "networkUrl": "string",
                  "port": "string",
                  "project": "string",
                  "region": "string"
                }
              ]
            },
            "trickleTraffic": 0
          },
          "wrr": {
            "items": [
              {
                "healthCheckedTargets": {
                  "externalEndpoints": [
                    "string"
                  ],
                  "internalLoadBalancers": [
                    {
                      "ipAddress": "string",
                      "ipProtocol": "UNDEFINED",
                      "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                      "loadBalancerType": "NONE",
                      "networkUrl": "string",
                      "port": "string",
                      "project": "string",
                      "region": "string"
                    }
                  ]
                },
                "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
                "rrdatas": [
                  "string"
                ],
                "signatureRrdatas": [
                  "string"
                ],
                "weight": 0
              }
            ],
            "kind": "dns#rRSetRoutingPolicyWrrPolicy"
          }
        },
        "rrdatas": [
          "string"
        ],
        "signatureRrdatas": [
          "string"
        ],
        "ttl": 0,
        "type": "string"
      }
    ]
  },
  "ruleName": "string"
}
```

<h3 id="dnsresponsepolicyrulespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Identifies the project addressed by this request.|
|location|path|string|true|Specifies the location of the resource. This information will be used for routing and will be part of the resource name.|
|responsePolicy|path|string|true|User assigned name of the Response Policy containing the Response Policy Rule.|
|responsePolicyRule|path|string|true|User assigned name of the Response Policy Rule addressed by this request.|
|clientOperationId|query|string|false|For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.|
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
|body|body|[ResponsePolicyRule](#schemaresponsepolicyrule)|false|none|
|» behavior|body|string|false|Answer this query with a behavior rather than DNS data.|
|» dnsName|body|string|false|The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule.|
|» kind|body|string|false|none|
|» localData|body|[ResponsePolicyRuleLocalData](#schemaresponsepolicyrulelocaldata)|false|Answer this query directly with DNS data. These ResourceRecordSets override any other DNS behavior for the matched name; in particular they override private zones, the public internet, and GCP internal DNS. No SOA nor NS types are allowed.|
|» ruleName|body|string|false|An identifier for this rule. Must be unique with the ResponsePolicy.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» behavior|BEHAVIOR_UNSPECIFIED|
|» behavior|BYPASS_RESPONSE_POLICY|

> Example responses

> 200 Response

```json
{
  "header": {
    "operationId": "string"
  },
  "responsePolicyRule": {
    "behavior": "BEHAVIOR_UNSPECIFIED",
    "dnsName": "string",
    "kind": "dns#responsePolicyRule",
    "localData": {
      "localDatas": [
        {
          "kind": "dns#resourceRecordSet",
          "name": "string",
          "routingPolicy": {
            "geo": {
              "enableFencing": true,
              "items": [
                {
                  "healthCheckedTargets": {
                    "externalEndpoints": [
                      "string"
                    ],
                    "internalLoadBalancers": [
                      {
                        "ipAddress": "string",
                        "ipProtocol": "UNDEFINED",
                        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                        "loadBalancerType": "NONE",
                        "networkUrl": "string",
                        "port": "string",
                        "project": "string",
                        "region": "string"
                      }
                    ]
                  },
                  "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                  "location": "string",
                  "rrdatas": [
                    "string"
                  ],
                  "signatureRrdatas": [
                    "string"
                  ]
                }
              ],
              "kind": "dns#rRSetRoutingPolicyGeoPolicy"
            },
            "healthCheck": "string",
            "kind": "dns#rRSetRoutingPolicy",
            "primaryBackup": {
              "backupGeoTargets": {
                "enableFencing": true,
                "items": [
                  {
                    "healthCheckedTargets": {
                      "externalEndpoints": [
                        "string"
                      ],
                      "internalLoadBalancers": [
                        {
                          "ipAddress": "string",
                          "ipProtocol": "UNDEFINED",
                          "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                          "loadBalancerType": "NONE",
                          "networkUrl": "string",
                          "port": "string",
                          "project": "string",
                          "region": "string"
                        }
                      ]
                    },
                    "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                    "location": "string",
                    "rrdatas": [
                      "string"
                    ],
                    "signatureRrdatas": [
                      "string"
                    ]
                  }
                ],
                "kind": "dns#rRSetRoutingPolicyGeoPolicy"
              },
              "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
              "primaryTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "trickleTraffic": 0
            },
            "wrr": {
              "items": [
                {
                  "healthCheckedTargets": {
                    "externalEndpoints": [
                      "string"
                    ],
                    "internalLoadBalancers": [
                      {
                        "ipAddress": "string",
                        "ipProtocol": "UNDEFINED",
                        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                        "loadBalancerType": "NONE",
                        "networkUrl": "string",
                        "port": "string",
                        "project": "string",
                        "region": "string"
                      }
                    ]
                  },
                  "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
                  "rrdatas": [
                    "string"
                  ],
                  "signatureRrdatas": [
                    "string"
                  ],
                  "weight": 0
                }
              ],
              "kind": "dns#rRSetRoutingPolicyWrrPolicy"
            }
          },
          "rrdatas": [
            "string"
          ],
          "signatureRrdatas": [
            "string"
          ],
          "ttl": 0,
          "type": "string"
        }
      ]
    },
    "ruleName": "string"
  }
}
```

<h3 id="dnsresponsepolicyrulespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ResponsePolicyRulesPatchResponse](#schemaresponsepolicyrulespatchresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ndev.clouddns.readwrite )
</aside>

# Schemas

<h2 id="tocS_Change">Change</h2>
<!-- backwards compatibility -->
<a id="schemachange"></a>
<a id="schema_Change"></a>
<a id="tocSchange"></a>
<a id="tocschange"></a>

```json
{
  "additions": [
    {
      "kind": "dns#resourceRecordSet",
      "name": "string",
      "routingPolicy": {
        "geo": {
          "enableFencing": true,
          "items": [
            {
              "healthCheckedTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
              "location": "string",
              "rrdatas": [
                "string"
              ],
              "signatureRrdatas": [
                "string"
              ]
            }
          ],
          "kind": "dns#rRSetRoutingPolicyGeoPolicy"
        },
        "healthCheck": "string",
        "kind": "dns#rRSetRoutingPolicy",
        "primaryBackup": {
          "backupGeoTargets": {
            "enableFencing": true,
            "items": [
              {
                "healthCheckedTargets": {
                  "externalEndpoints": [
                    "string"
                  ],
                  "internalLoadBalancers": [
                    {
                      "ipAddress": "string",
                      "ipProtocol": "UNDEFINED",
                      "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                      "loadBalancerType": "NONE",
                      "networkUrl": "string",
                      "port": "string",
                      "project": "string",
                      "region": "string"
                    }
                  ]
                },
                "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                "location": "string",
                "rrdatas": [
                  "string"
                ],
                "signatureRrdatas": [
                  "string"
                ]
              }
            ],
            "kind": "dns#rRSetRoutingPolicyGeoPolicy"
          },
          "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
          "primaryTargets": {
            "externalEndpoints": [
              "string"
            ],
            "internalLoadBalancers": [
              {
                "ipAddress": "string",
                "ipProtocol": "UNDEFINED",
                "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                "loadBalancerType": "NONE",
                "networkUrl": "string",
                "port": "string",
                "project": "string",
                "region": "string"
              }
            ]
          },
          "trickleTraffic": 0
        },
        "wrr": {
          "items": [
            {
              "healthCheckedTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
              "rrdatas": [
                "string"
              ],
              "signatureRrdatas": [
                "string"
              ],
              "weight": 0
            }
          ],
          "kind": "dns#rRSetRoutingPolicyWrrPolicy"
        }
      },
      "rrdatas": [
        "string"
      ],
      "signatureRrdatas": [
        "string"
      ],
      "ttl": 0,
      "type": "string"
    }
  ],
  "deletions": [
    {
      "kind": "dns#resourceRecordSet",
      "name": "string",
      "routingPolicy": {
        "geo": {
          "enableFencing": true,
          "items": [
            {
              "healthCheckedTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
              "location": "string",
              "rrdatas": [
                "string"
              ],
              "signatureRrdatas": [
                "string"
              ]
            }
          ],
          "kind": "dns#rRSetRoutingPolicyGeoPolicy"
        },
        "healthCheck": "string",
        "kind": "dns#rRSetRoutingPolicy",
        "primaryBackup": {
          "backupGeoTargets": {
            "enableFencing": true,
            "items": [
              {
                "healthCheckedTargets": {
                  "externalEndpoints": [
                    "string"
                  ],
                  "internalLoadBalancers": [
                    {
                      "ipAddress": "string",
                      "ipProtocol": "UNDEFINED",
                      "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                      "loadBalancerType": "NONE",
                      "networkUrl": "string",
                      "port": "string",
                      "project": "string",
                      "region": "string"
                    }
                  ]
                },
                "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                "location": "string",
                "rrdatas": [
                  "string"
                ],
                "signatureRrdatas": [
                  "string"
                ]
              }
            ],
            "kind": "dns#rRSetRoutingPolicyGeoPolicy"
          },
          "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
          "primaryTargets": {
            "externalEndpoints": [
              "string"
            ],
            "internalLoadBalancers": [
              {
                "ipAddress": "string",
                "ipProtocol": "UNDEFINED",
                "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                "loadBalancerType": "NONE",
                "networkUrl": "string",
                "port": "string",
                "project": "string",
                "region": "string"
              }
            ]
          },
          "trickleTraffic": 0
        },
        "wrr": {
          "items": [
            {
              "healthCheckedTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
              "rrdatas": [
                "string"
              ],
              "signatureRrdatas": [
                "string"
              ],
              "weight": 0
            }
          ],
          "kind": "dns#rRSetRoutingPolicyWrrPolicy"
        }
      },
      "rrdatas": [
        "string"
      ],
      "signatureRrdatas": [
        "string"
      ],
      "ttl": 0,
      "type": "string"
    }
  ],
  "id": "string",
  "isServing": true,
  "kind": "dns#change",
  "startTime": "string",
  "status": "PENDING"
}
```

A Change represents a set of ResourceRecordSet additions and deletions applied atomically to a ManagedZone. ResourceRecordSets within a ManagedZone are modified by creating a new Change element in the Changes collection. In turn the Changes collection also records the past modifications to the ResourceRecordSets in a ManagedZone. The current state of the ManagedZone is the sum effect of applying all Change elements in the Changes collection in sequence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additions|[[ResourceRecordSet](#schemaresourcerecordset)]|false|none|Which ResourceRecordSets to add?|
|deletions|[[ResourceRecordSet](#schemaresourcerecordset)]|false|none|Which ResourceRecordSets to remove? Must match existing data exactly.|
|id|string|false|none|Unique identifier for the resource; defined by the server (output only).|
|isServing|boolean|false|none|If the DNS queries for the zone will be served.|
|kind|string|false|none|none|
|startTime|string|false|none|The time that this operation was started by the server (output only). This is in RFC3339 text format.|
|status|string|false|none|Status of the operation (output only). A status of "done" means that the request to update the authoritative servers has been sent, but the servers might not be updated yet.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|PENDING|
|status|DONE|

<h2 id="tocS_ChangesListResponse">ChangesListResponse</h2>
<!-- backwards compatibility -->
<a id="schemachangeslistresponse"></a>
<a id="schema_ChangesListResponse"></a>
<a id="tocSchangeslistresponse"></a>
<a id="tocschangeslistresponse"></a>

```json
{
  "changes": [
    {
      "additions": [
        {
          "kind": "dns#resourceRecordSet",
          "name": "string",
          "routingPolicy": {
            "geo": {
              "enableFencing": true,
              "items": [
                {
                  "healthCheckedTargets": {
                    "externalEndpoints": [
                      "string"
                    ],
                    "internalLoadBalancers": [
                      {
                        "ipAddress": "string",
                        "ipProtocol": "UNDEFINED",
                        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                        "loadBalancerType": "NONE",
                        "networkUrl": "string",
                        "port": "string",
                        "project": "string",
                        "region": "string"
                      }
                    ]
                  },
                  "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                  "location": "string",
                  "rrdatas": [
                    "string"
                  ],
                  "signatureRrdatas": [
                    "string"
                  ]
                }
              ],
              "kind": "dns#rRSetRoutingPolicyGeoPolicy"
            },
            "healthCheck": "string",
            "kind": "dns#rRSetRoutingPolicy",
            "primaryBackup": {
              "backupGeoTargets": {
                "enableFencing": true,
                "items": [
                  {
                    "healthCheckedTargets": {
                      "externalEndpoints": [
                        "string"
                      ],
                      "internalLoadBalancers": [
                        {
                          "ipAddress": "string",
                          "ipProtocol": "UNDEFINED",
                          "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                          "loadBalancerType": "NONE",
                          "networkUrl": "string",
                          "port": "string",
                          "project": "string",
                          "region": "string"
                        }
                      ]
                    },
                    "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                    "location": "string",
                    "rrdatas": [
                      "string"
                    ],
                    "signatureRrdatas": [
                      "string"
                    ]
                  }
                ],
                "kind": "dns#rRSetRoutingPolicyGeoPolicy"
              },
              "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
              "primaryTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "trickleTraffic": 0
            },
            "wrr": {
              "items": [
                {
                  "healthCheckedTargets": {
                    "externalEndpoints": [
                      "string"
                    ],
                    "internalLoadBalancers": [
                      {
                        "ipAddress": "string",
                        "ipProtocol": "UNDEFINED",
                        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                        "loadBalancerType": "NONE",
                        "networkUrl": "string",
                        "port": "string",
                        "project": "string",
                        "region": "string"
                      }
                    ]
                  },
                  "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
                  "rrdatas": [
                    "string"
                  ],
                  "signatureRrdatas": [
                    "string"
                  ],
                  "weight": 0
                }
              ],
              "kind": "dns#rRSetRoutingPolicyWrrPolicy"
            }
          },
          "rrdatas": [
            "string"
          ],
          "signatureRrdatas": [
            "string"
          ],
          "ttl": 0,
          "type": "string"
        }
      ],
      "deletions": [
        {
          "kind": "dns#resourceRecordSet",
          "name": "string",
          "routingPolicy": {
            "geo": {
              "enableFencing": true,
              "items": [
                {
                  "healthCheckedTargets": {
                    "externalEndpoints": [
                      "string"
                    ],
                    "internalLoadBalancers": [
                      {
                        "ipAddress": "string",
                        "ipProtocol": "UNDEFINED",
                        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                        "loadBalancerType": "NONE",
                        "networkUrl": "string",
                        "port": "string",
                        "project": "string",
                        "region": "string"
                      }
                    ]
                  },
                  "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                  "location": "string",
                  "rrdatas": [
                    "string"
                  ],
                  "signatureRrdatas": [
                    "string"
                  ]
                }
              ],
              "kind": "dns#rRSetRoutingPolicyGeoPolicy"
            },
            "healthCheck": "string",
            "kind": "dns#rRSetRoutingPolicy",
            "primaryBackup": {
              "backupGeoTargets": {
                "enableFencing": true,
                "items": [
                  {
                    "healthCheckedTargets": {
                      "externalEndpoints": [
                        "string"
                      ],
                      "internalLoadBalancers": [
                        {
                          "ipAddress": "string",
                          "ipProtocol": "UNDEFINED",
                          "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                          "loadBalancerType": "NONE",
                          "networkUrl": "string",
                          "port": "string",
                          "project": "string",
                          "region": "string"
                        }
                      ]
                    },
                    "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                    "location": "string",
                    "rrdatas": [
                      "string"
                    ],
                    "signatureRrdatas": [
                      "string"
                    ]
                  }
                ],
                "kind": "dns#rRSetRoutingPolicyGeoPolicy"
              },
              "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
              "primaryTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "trickleTraffic": 0
            },
            "wrr": {
              "items": [
                {
                  "healthCheckedTargets": {
                    "externalEndpoints": [
                      "string"
                    ],
                    "internalLoadBalancers": [
                      {
                        "ipAddress": "string",
                        "ipProtocol": "UNDEFINED",
                        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                        "loadBalancerType": "NONE",
                        "networkUrl": "string",
                        "port": "string",
                        "project": "string",
                        "region": "string"
                      }
                    ]
                  },
                  "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
                  "rrdatas": [
                    "string"
                  ],
                  "signatureRrdatas": [
                    "string"
                  ],
                  "weight": 0
                }
              ],
              "kind": "dns#rRSetRoutingPolicyWrrPolicy"
            }
          },
          "rrdatas": [
            "string"
          ],
          "signatureRrdatas": [
            "string"
          ],
          "ttl": 0,
          "type": "string"
        }
      ],
      "id": "string",
      "isServing": true,
      "kind": "dns#change",
      "startTime": "string",
      "status": "PENDING"
    }
  ],
  "header": {
    "operationId": "string"
  },
  "kind": "dns#changesListResponse",
  "nextPageToken": "string"
}
```

The response to a request to enumerate Changes to a ResourceRecordSets collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changes|[[Change](#schemachange)]|false|none|The requested changes.|
|header|[ResponseHeader](#schemaresponseheader)|false|none|Elements common to every response.|
|kind|string|false|none|Type of resource.|
|nextPageToken|string|false|none|The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token. This lets you retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a "snapshot" of collections larger than the maximum page size.|

<h2 id="tocS_DnsKey">DnsKey</h2>
<!-- backwards compatibility -->
<a id="schemadnskey"></a>
<a id="schema_DnsKey"></a>
<a id="tocSdnskey"></a>
<a id="tocsdnskey"></a>

```json
{
  "algorithm": "RSASHA1",
  "creationTime": "string",
  "description": "string",
  "digests": [
    {
      "digest": "string",
      "type": "SHA1"
    }
  ],
  "id": "string",
  "isActive": true,
  "keyLength": 0,
  "keyTag": 0,
  "kind": "dns#dnsKey",
  "publicKey": "string",
  "type": "KEY_SIGNING"
}
```

A DNSSEC key pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|false|none|String mnemonic specifying the DNSSEC algorithm of this key. Immutable after creation time.|
|creationTime|string|false|none|The time that this resource was created in the control plane. This is in RFC3339 text format. Output only.|
|description|string|false|none|A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the resource's function.|
|digests|[[DnsKeyDigest](#schemadnskeydigest)]|false|none|Cryptographic hashes of the DNSKEY resource record associated with this DnsKey. These digests are needed to construct a DS record that points at this DNS key. Output only.|
|id|string|false|none|Unique identifier for the resource; defined by the server (output only).|
|isActive|boolean|false|none|Active keys are used to sign subsequent changes to the ManagedZone. Inactive keys are still present as DNSKEY Resource Records for the use of resolvers validating existing signatures.|
|keyLength|integer(uint32)|false|none|Length of the key in bits. Specified at creation time, and then immutable.|
|keyTag|integer(int32)|false|none|The key tag is a non-cryptographic hash of the a DNSKEY resource record associated with this DnsKey. The key tag can be used to identify a DNSKEY more quickly (but it is not a unique identifier). In particular, the key tag is used in a parent zone's DS record to point at the DNSKEY in this child ManagedZone. The key tag is a number in the range [0, 65535] and the algorithm to calculate it is specified in RFC4034 Appendix B. Output only.|
|kind|string|false|none|none|
|publicKey|string|false|none|Base64 encoded public half of this key. Output only.|
|type|string|false|none|One of "KEY_SIGNING" or "ZONE_SIGNING". Keys of type KEY_SIGNING have the Secure Entry Point flag set and, when active, are used to sign only resource record sets of type DNSKEY. Otherwise, the Secure Entry Point flag is cleared, and this key is used to sign only resource record sets of other types. Immutable after creation time.|

#### Enumerated Values

|Property|Value|
|---|---|
|algorithm|RSASHA1|
|algorithm|RSASHA256|
|algorithm|RSASHA512|
|algorithm|ECDSAP256SHA256|
|algorithm|ECDSAP384SHA384|
|type|KEY_SIGNING|
|type|ZONE_SIGNING|

<h2 id="tocS_DnsKeyDigest">DnsKeyDigest</h2>
<!-- backwards compatibility -->
<a id="schemadnskeydigest"></a>
<a id="schema_DnsKeyDigest"></a>
<a id="tocSdnskeydigest"></a>
<a id="tocsdnskeydigest"></a>

```json
{
  "digest": "string",
  "type": "SHA1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|digest|string|false|none|The base-16 encoded bytes of this digest. Suitable for use in a DS resource record.|
|type|string|false|none|Specifies the algorithm used to calculate this digest.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SHA1|
|type|SHA256|
|type|SHA384|

<h2 id="tocS_DnsKeySpec">DnsKeySpec</h2>
<!-- backwards compatibility -->
<a id="schemadnskeyspec"></a>
<a id="schema_DnsKeySpec"></a>
<a id="tocSdnskeyspec"></a>
<a id="tocsdnskeyspec"></a>

```json
{
  "algorithm": "RSASHA1",
  "keyLength": 0,
  "keyType": "KEY_SIGNING",
  "kind": "dns#dnsKeySpec"
}
```

Parameters for DnsKey key generation. Used for generating initial keys for a new ManagedZone and as default when adding a new DnsKey.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|false|none|String mnemonic specifying the DNSSEC algorithm of this key.|
|keyLength|integer(uint32)|false|none|Length of the keys in bits.|
|keyType|string|false|none|Specifies whether this is a key signing key (KSK) or a zone signing key (ZSK). Key signing keys have the Secure Entry Point flag set and, when active, are only used to sign resource record sets of type DNSKEY. Zone signing keys do not have the Secure Entry Point flag set and are used to sign all other types of resource record sets.|
|kind|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|algorithm|RSASHA1|
|algorithm|RSASHA256|
|algorithm|RSASHA512|
|algorithm|ECDSAP256SHA256|
|algorithm|ECDSAP384SHA384|
|keyType|KEY_SIGNING|
|keyType|ZONE_SIGNING|

<h2 id="tocS_DnsKeysListResponse">DnsKeysListResponse</h2>
<!-- backwards compatibility -->
<a id="schemadnskeyslistresponse"></a>
<a id="schema_DnsKeysListResponse"></a>
<a id="tocSdnskeyslistresponse"></a>
<a id="tocsdnskeyslistresponse"></a>

```json
{
  "dnsKeys": [
    {
      "algorithm": "RSASHA1",
      "creationTime": "string",
      "description": "string",
      "digests": [
        {
          "digest": "string",
          "type": "SHA1"
        }
      ],
      "id": "string",
      "isActive": true,
      "keyLength": 0,
      "keyTag": 0,
      "kind": "dns#dnsKey",
      "publicKey": "string",
      "type": "KEY_SIGNING"
    }
  ],
  "header": {
    "operationId": "string"
  },
  "kind": "dns#dnsKeysListResponse",
  "nextPageToken": "string"
}
```

The response to a request to enumerate DnsKeys in a ManagedZone.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dnsKeys|[[DnsKey](#schemadnskey)]|false|none|The requested resources.|
|header|[ResponseHeader](#schemaresponseheader)|false|none|Elements common to every response.|
|kind|string|false|none|Type of resource.|
|nextPageToken|string|false|none|The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token. In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. There is no way to retrieve a "snapshot" of collections larger than the maximum page size.|

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

<h2 id="tocS_GoogleIamV1AuditConfig">GoogleIamV1AuditConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1auditconfig"></a>
<a id="schema_GoogleIamV1AuditConfig"></a>
<a id="tocSgoogleiamv1auditconfig"></a>
<a id="tocsgoogleiamv1auditconfig"></a>

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
|auditLogConfigs|[[GoogleIamV1AuditLogConfig](#schemagoogleiamv1auditlogconfig)]|false|none|The configuration for logging of each type of permission.|
|service|string|false|none|Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.|

<h2 id="tocS_GoogleIamV1AuditLogConfig">GoogleIamV1AuditLogConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1auditlogconfig"></a>
<a id="schema_GoogleIamV1AuditLogConfig"></a>
<a id="tocSgoogleiamv1auditlogconfig"></a>
<a id="tocsgoogleiamv1auditlogconfig"></a>

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

<h2 id="tocS_GoogleIamV1Binding">GoogleIamV1Binding</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1binding"></a>
<a id="schema_GoogleIamV1Binding"></a>
<a id="tocSgoogleiamv1binding"></a>
<a id="tocsgoogleiamv1binding"></a>

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
|members|[string]|false|none|Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`.|
|role|string|false|none|Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles).|

<h2 id="tocS_GoogleIamV1GetIamPolicyRequest">GoogleIamV1GetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1getiampolicyrequest"></a>
<a id="schema_GoogleIamV1GetIamPolicyRequest"></a>
<a id="tocSgoogleiamv1getiampolicyrequest"></a>
<a id="tocsgoogleiamv1getiampolicyrequest"></a>

```json
{
  "options": {
    "requestedPolicyVersion": 0
  }
}
```

Request message for `GetIamPolicy` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|options|[GoogleIamV1GetPolicyOptions](#schemagoogleiamv1getpolicyoptions)|false|none|OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.|

<h2 id="tocS_GoogleIamV1GetPolicyOptions">GoogleIamV1GetPolicyOptions</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1getpolicyoptions"></a>
<a id="schema_GoogleIamV1GetPolicyOptions"></a>
<a id="tocSgoogleiamv1getpolicyoptions"></a>
<a id="tocsgoogleiamv1getpolicyoptions"></a>

```json
{
  "requestedPolicyVersion": 0
}
```

Encapsulates settings provided to GetIamPolicy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestedPolicyVersion|integer(int32)|false|none|Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_GoogleIamV1Policy">GoogleIamV1Policy</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1policy"></a>
<a id="schema_GoogleIamV1Policy"></a>
<a id="tocSgoogleiamv1policy"></a>
<a id="tocsgoogleiamv1policy"></a>

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

An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditConfigs|[[GoogleIamV1AuditConfig](#schemagoogleiamv1auditconfig)]|false|none|Specifies cloud audit logging configuration for this policy.|
|bindings|[[GoogleIamV1Binding](#schemagoogleiamv1binding)]|false|none|Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.|
|etag|string(byte)|false|none|`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.|
|version|integer(int32)|false|none|Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_GoogleIamV1SetIamPolicyRequest">GoogleIamV1SetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1setiampolicyrequest"></a>
<a id="schema_GoogleIamV1SetIamPolicyRequest"></a>
<a id="tocSgoogleiamv1setiampolicyrequest"></a>
<a id="tocsgoogleiamv1setiampolicyrequest"></a>

```json
{
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
  },
  "updateMask": "string"
}
```

Request message for `SetIamPolicy` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|[GoogleIamV1Policy](#schemagoogleiamv1policy)|false|none|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|
|updateMask|string(google-fieldmask)|false|none|OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`|

<h2 id="tocS_GoogleIamV1TestIamPermissionsRequest">GoogleIamV1TestIamPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1testiampermissionsrequest"></a>
<a id="schema_GoogleIamV1TestIamPermissionsRequest"></a>
<a id="tocSgoogleiamv1testiampermissionsrequest"></a>
<a id="tocsgoogleiamv1testiampermissionsrequest"></a>

```json
{
  "permissions": [
    "string"
  ]
}
```

Request message for `TestIamPermissions` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[string]|false|none|The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).|

<h2 id="tocS_GoogleIamV1TestIamPermissionsResponse">GoogleIamV1TestIamPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1testiampermissionsresponse"></a>
<a id="schema_GoogleIamV1TestIamPermissionsResponse"></a>
<a id="tocSgoogleiamv1testiampermissionsresponse"></a>
<a id="tocsgoogleiamv1testiampermissionsresponse"></a>

```json
{
  "permissions": [
    "string"
  ]
}
```

Response message for `TestIamPermissions` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[string]|false|none|A subset of `TestPermissionsRequest.permissions` that the caller is allowed.|

<h2 id="tocS_ManagedZone">ManagedZone</h2>
<!-- backwards compatibility -->
<a id="schemamanagedzone"></a>
<a id="schema_ManagedZone"></a>
<a id="tocSmanagedzone"></a>
<a id="tocsmanagedzone"></a>

```json
{
  "cloudLoggingConfig": {
    "enableLogging": true,
    "kind": "dns#managedZoneCloudLoggingConfig"
  },
  "creationTime": "string",
  "description": "string",
  "dnsName": "string",
  "dnssecConfig": {
    "defaultKeySpecs": [
      {
        "algorithm": "RSASHA1",
        "keyLength": 0,
        "keyType": "KEY_SIGNING",
        "kind": "dns#dnsKeySpec"
      }
    ],
    "kind": "dns#managedZoneDnsSecConfig",
    "nonExistence": "NSEC",
    "state": "OFF"
  },
  "forwardingConfig": {
    "kind": "dns#managedZoneForwardingConfig",
    "targetNameServers": [
      {
        "forwardingPath": "DEFAULT",
        "ipv4Address": "string",
        "ipv6Address": "string",
        "kind": "dns#managedZoneForwardingConfigNameServerTarget"
      }
    ]
  },
  "id": "string",
  "kind": "dns#managedZone",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "nameServerSet": "string",
  "nameServers": [
    "string"
  ],
  "peeringConfig": {
    "kind": "dns#managedZonePeeringConfig",
    "targetNetwork": {
      "deactivateTime": "string",
      "kind": "dns#managedZonePeeringConfigTargetNetwork",
      "networkUrl": "string"
    }
  },
  "privateVisibilityConfig": {
    "gkeClusters": [
      {
        "gkeClusterName": "string",
        "kind": "dns#managedZonePrivateVisibilityConfigGKECluster"
      }
    ],
    "kind": "dns#managedZonePrivateVisibilityConfig",
    "networks": [
      {
        "kind": "dns#managedZonePrivateVisibilityConfigNetwork",
        "networkUrl": "string"
      }
    ]
  },
  "reverseLookupConfig": {
    "kind": "dns#managedZoneReverseLookupConfig"
  },
  "serviceDirectoryConfig": {
    "kind": "dns#managedZoneServiceDirectoryConfig",
    "namespace": {
      "deletionTime": "string",
      "kind": "dns#managedZoneServiceDirectoryConfigNamespace",
      "namespaceUrl": "string"
    }
  },
  "visibility": "PUBLIC"
}
```

A zone is a subtree of the DNS namespace under one administrative responsibility. A ManagedZone is a resource that represents a DNS zone hosted by the Cloud DNS service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudLoggingConfig|[ManagedZoneCloudLoggingConfig](#schemamanagedzonecloudloggingconfig)|false|none|Cloud Logging configurations for publicly visible zones.|
|creationTime|string|false|none|The time that this resource was created on the server. This is in RFC3339 text format. Output only.|
|description|string|false|none|A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the managed zone's function.|
|dnsName|string|false|none|The DNS name of this managed zone, for instance "example.com.".|
|dnssecConfig|[ManagedZoneDnsSecConfig](#schemamanagedzonednssecconfig)|false|none|DNSSEC configuration.|
|forwardingConfig|[ManagedZoneForwardingConfig](#schemamanagedzoneforwardingconfig)|false|none|The presence for this field indicates that outbound forwarding is enabled for this zone. The value of this field contains the set of destinations to forward to.|
|id|string(uint64)|false|none|Unique identifier for the resource; defined by the server (output only)|
|kind|string|false|none|none|
|labels|object|false|none|User labels.|
|name|string|false|none|User assigned name for this resource. Must be unique within the project. The name must be 1-63 characters long, must begin with a letter, end with a letter or digit, and only contain lowercase letters, digits or dashes.|
|nameServerSet|string|false|none|Optionally specifies the NameServerSet for this ManagedZone. A NameServerSet is a set of DNS name servers that all host the same ManagedZones. Most users leave this field unset. If you need to use this field, contact your account team.|
|nameServers|[string]|false|none|Delegate your managed_zone to these virtual name servers; defined by the server (output only)|
|peeringConfig|[ManagedZonePeeringConfig](#schemamanagedzonepeeringconfig)|false|none|The presence of this field indicates that DNS Peering is enabled for this zone. The value of this field contains the network to peer with.|
|privateVisibilityConfig|[ManagedZonePrivateVisibilityConfig](#schemamanagedzoneprivatevisibilityconfig)|false|none|For privately visible zones, the set of Virtual Private Cloud resources that the zone is visible from.|
|reverseLookupConfig|[ManagedZoneReverseLookupConfig](#schemamanagedzonereverselookupconfig)|false|none|The presence of this field indicates that this is a managed reverse lookup zone and Cloud DNS resolves reverse lookup queries using automatically configured records for VPC resources. This only applies to networks listed under private_visibility_config.|
|serviceDirectoryConfig|[ManagedZoneServiceDirectoryConfig](#schemamanagedzoneservicedirectoryconfig)|false|none|This field links to the associated service directory namespace. Do not set this field for public zones or forwarding zones.|
|visibility|string|false|none|The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources.|

#### Enumerated Values

|Property|Value|
|---|---|
|visibility|PUBLIC|
|visibility|PRIVATE|

<h2 id="tocS_ManagedZoneCloudLoggingConfig">ManagedZoneCloudLoggingConfig</h2>
<!-- backwards compatibility -->
<a id="schemamanagedzonecloudloggingconfig"></a>
<a id="schema_ManagedZoneCloudLoggingConfig"></a>
<a id="tocSmanagedzonecloudloggingconfig"></a>
<a id="tocsmanagedzonecloudloggingconfig"></a>

```json
{
  "enableLogging": true,
  "kind": "dns#managedZoneCloudLoggingConfig"
}
```

Cloud Logging configurations for publicly visible zones.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableLogging|boolean|false|none|If set, enable query logging for this ManagedZone. False by default, making logging opt-in.|
|kind|string|false|none|none|

<h2 id="tocS_ManagedZoneDnsSecConfig">ManagedZoneDnsSecConfig</h2>
<!-- backwards compatibility -->
<a id="schemamanagedzonednssecconfig"></a>
<a id="schema_ManagedZoneDnsSecConfig"></a>
<a id="tocSmanagedzonednssecconfig"></a>
<a id="tocsmanagedzonednssecconfig"></a>

```json
{
  "defaultKeySpecs": [
    {
      "algorithm": "RSASHA1",
      "keyLength": 0,
      "keyType": "KEY_SIGNING",
      "kind": "dns#dnsKeySpec"
    }
  ],
  "kind": "dns#managedZoneDnsSecConfig",
  "nonExistence": "NSEC",
  "state": "OFF"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultKeySpecs|[[DnsKeySpec](#schemadnskeyspec)]|false|none|Specifies parameters for generating initial DnsKeys for this ManagedZone. Can only be changed while the state is OFF.|
|kind|string|false|none|none|
|nonExistence|string|false|none|Specifies the mechanism for authenticated denial-of-existence responses. Can only be changed while the state is OFF.|
|state|string|false|none|Specifies whether DNSSEC is enabled, and what mode it is in.|

#### Enumerated Values

|Property|Value|
|---|---|
|nonExistence|NSEC|
|nonExistence|NSEC3|
|state|OFF|
|state|ON|
|state|TRANSFER|

<h2 id="tocS_ManagedZoneForwardingConfig">ManagedZoneForwardingConfig</h2>
<!-- backwards compatibility -->
<a id="schemamanagedzoneforwardingconfig"></a>
<a id="schema_ManagedZoneForwardingConfig"></a>
<a id="tocSmanagedzoneforwardingconfig"></a>
<a id="tocsmanagedzoneforwardingconfig"></a>

```json
{
  "kind": "dns#managedZoneForwardingConfig",
  "targetNameServers": [
    {
      "forwardingPath": "DEFAULT",
      "ipv4Address": "string",
      "ipv6Address": "string",
      "kind": "dns#managedZoneForwardingConfigNameServerTarget"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|none|
|targetNameServers|[[ManagedZoneForwardingConfigNameServerTarget](#schemamanagedzoneforwardingconfignameservertarget)]|false|none|List of target name servers to forward to. Cloud DNS selects the best available name server if more than one target is given.|

<h2 id="tocS_ManagedZoneForwardingConfigNameServerTarget">ManagedZoneForwardingConfigNameServerTarget</h2>
<!-- backwards compatibility -->
<a id="schemamanagedzoneforwardingconfignameservertarget"></a>
<a id="schema_ManagedZoneForwardingConfigNameServerTarget"></a>
<a id="tocSmanagedzoneforwardingconfignameservertarget"></a>
<a id="tocsmanagedzoneforwardingconfignameservertarget"></a>

```json
{
  "forwardingPath": "DEFAULT",
  "ipv4Address": "string",
  "ipv6Address": "string",
  "kind": "dns#managedZoneForwardingConfigNameServerTarget"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|forwardingPath|string|false|none|Forwarding path for this NameServerTarget. If unset or set to DEFAULT, Cloud DNS makes forwarding decisions based on IP address ranges; that is, RFC1918 addresses go to the VPC network, non-RFC1918 addresses go to the internet. When set to PRIVATE, Cloud DNS always sends queries through the VPC network for this target.|
|ipv4Address|string|false|none|IPv4 address of a target name server.|
|ipv6Address|string|false|none|IPv6 address of a target name server. Does not accept both fields (ipv4 & ipv6) being populated. Public preview as of November 2022.|
|kind|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|forwardingPath|DEFAULT|
|forwardingPath|PRIVATE|

<h2 id="tocS_ManagedZoneOperationsListResponse">ManagedZoneOperationsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemamanagedzoneoperationslistresponse"></a>
<a id="schema_ManagedZoneOperationsListResponse"></a>
<a id="tocSmanagedzoneoperationslistresponse"></a>
<a id="tocsmanagedzoneoperationslistresponse"></a>

```json
{
  "header": {
    "operationId": "string"
  },
  "kind": "dns#managedZoneOperationsListResponse",
  "nextPageToken": "string",
  "operations": [
    {
      "dnsKeyContext": {
        "newValue": {
          "algorithm": "RSASHA1",
          "creationTime": "string",
          "description": "string",
          "digests": [
            {
              "digest": "string",
              "type": "SHA1"
            }
          ],
          "id": "string",
          "isActive": true,
          "keyLength": 0,
          "keyTag": 0,
          "kind": "dns#dnsKey",
          "publicKey": "string",
          "type": "KEY_SIGNING"
        },
        "oldValue": {
          "algorithm": "RSASHA1",
          "creationTime": "string",
          "description": "string",
          "digests": [
            {
              "digest": "string",
              "type": "SHA1"
            }
          ],
          "id": "string",
          "isActive": true,
          "keyLength": 0,
          "keyTag": 0,
          "kind": "dns#dnsKey",
          "publicKey": "string",
          "type": "KEY_SIGNING"
        }
      },
      "id": "string",
      "kind": "dns#operation",
      "startTime": "string",
      "status": "PENDING",
      "type": "string",
      "user": "string",
      "zoneContext": {
        "newValue": {
          "cloudLoggingConfig": {
            "enableLogging": true,
            "kind": "dns#managedZoneCloudLoggingConfig"
          },
          "creationTime": "string",
          "description": "string",
          "dnsName": "string",
          "dnssecConfig": {
            "defaultKeySpecs": [
              {
                "algorithm": "RSASHA1",
                "keyLength": 0,
                "keyType": "KEY_SIGNING",
                "kind": "dns#dnsKeySpec"
              }
            ],
            "kind": "dns#managedZoneDnsSecConfig",
            "nonExistence": "NSEC",
            "state": "OFF"
          },
          "forwardingConfig": {
            "kind": "dns#managedZoneForwardingConfig",
            "targetNameServers": [
              {
                "forwardingPath": "DEFAULT",
                "ipv4Address": "string",
                "ipv6Address": "string",
                "kind": "dns#managedZoneForwardingConfigNameServerTarget"
              }
            ]
          },
          "id": "string",
          "kind": "dns#managedZone",
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "name": "string",
          "nameServerSet": "string",
          "nameServers": [
            "string"
          ],
          "peeringConfig": {
            "kind": "dns#managedZonePeeringConfig",
            "targetNetwork": {
              "deactivateTime": "string",
              "kind": "dns#managedZonePeeringConfigTargetNetwork",
              "networkUrl": "string"
            }
          },
          "privateVisibilityConfig": {
            "gkeClusters": [
              {
                "gkeClusterName": "string",
                "kind": "dns#managedZonePrivateVisibilityConfigGKECluster"
              }
            ],
            "kind": "dns#managedZonePrivateVisibilityConfig",
            "networks": [
              {
                "kind": "dns#managedZonePrivateVisibilityConfigNetwork",
                "networkUrl": "string"
              }
            ]
          },
          "reverseLookupConfig": {
            "kind": "dns#managedZoneReverseLookupConfig"
          },
          "serviceDirectoryConfig": {
            "kind": "dns#managedZoneServiceDirectoryConfig",
            "namespace": {
              "deletionTime": "string",
              "kind": "dns#managedZoneServiceDirectoryConfigNamespace",
              "namespaceUrl": "string"
            }
          },
          "visibility": "PUBLIC"
        },
        "oldValue": {
          "cloudLoggingConfig": {
            "enableLogging": true,
            "kind": "dns#managedZoneCloudLoggingConfig"
          },
          "creationTime": "string",
          "description": "string",
          "dnsName": "string",
          "dnssecConfig": {
            "defaultKeySpecs": [
              {
                "algorithm": "RSASHA1",
                "keyLength": 0,
                "keyType": "KEY_SIGNING",
                "kind": "dns#dnsKeySpec"
              }
            ],
            "kind": "dns#managedZoneDnsSecConfig",
            "nonExistence": "NSEC",
            "state": "OFF"
          },
          "forwardingConfig": {
            "kind": "dns#managedZoneForwardingConfig",
            "targetNameServers": [
              {
                "forwardingPath": "DEFAULT",
                "ipv4Address": "string",
                "ipv6Address": "string",
                "kind": "dns#managedZoneForwardingConfigNameServerTarget"
              }
            ]
          },
          "id": "string",
          "kind": "dns#managedZone",
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "name": "string",
          "nameServerSet": "string",
          "nameServers": [
            "string"
          ],
          "peeringConfig": {
            "kind": "dns#managedZonePeeringConfig",
            "targetNetwork": {
              "deactivateTime": "string",
              "kind": "dns#managedZonePeeringConfigTargetNetwork",
              "networkUrl": "string"
            }
          },
          "privateVisibilityConfig": {
            "gkeClusters": [
              {
                "gkeClusterName": "string",
                "kind": "dns#managedZonePrivateVisibilityConfigGKECluster"
              }
            ],
            "kind": "dns#managedZonePrivateVisibilityConfig",
            "networks": [
              {
                "kind": "dns#managedZonePrivateVisibilityConfigNetwork",
                "networkUrl": "string"
              }
            ]
          },
          "reverseLookupConfig": {
            "kind": "dns#managedZoneReverseLookupConfig"
          },
          "serviceDirectoryConfig": {
            "kind": "dns#managedZoneServiceDirectoryConfig",
            "namespace": {
              "deletionTime": "string",
              "kind": "dns#managedZoneServiceDirectoryConfigNamespace",
              "namespaceUrl": "string"
            }
          },
          "visibility": "PUBLIC"
        }
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header|[ResponseHeader](#schemaresponseheader)|false|none|Elements common to every response.|
|kind|string|false|none|none|
|nextPageToken|string|false|none|The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token. This lets you retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size.|
|operations|[[Operation](#schemaoperation)]|false|none|The operation resources.|

<h2 id="tocS_ManagedZonePeeringConfig">ManagedZonePeeringConfig</h2>
<!-- backwards compatibility -->
<a id="schemamanagedzonepeeringconfig"></a>
<a id="schema_ManagedZonePeeringConfig"></a>
<a id="tocSmanagedzonepeeringconfig"></a>
<a id="tocsmanagedzonepeeringconfig"></a>

```json
{
  "kind": "dns#managedZonePeeringConfig",
  "targetNetwork": {
    "deactivateTime": "string",
    "kind": "dns#managedZonePeeringConfigTargetNetwork",
    "networkUrl": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|none|
|targetNetwork|[ManagedZonePeeringConfigTargetNetwork](#schemamanagedzonepeeringconfigtargetnetwork)|false|none|The network with which to peer.|

<h2 id="tocS_ManagedZonePeeringConfigTargetNetwork">ManagedZonePeeringConfigTargetNetwork</h2>
<!-- backwards compatibility -->
<a id="schemamanagedzonepeeringconfigtargetnetwork"></a>
<a id="schema_ManagedZonePeeringConfigTargetNetwork"></a>
<a id="tocSmanagedzonepeeringconfigtargetnetwork"></a>
<a id="tocsmanagedzonepeeringconfigtargetnetwork"></a>

```json
{
  "deactivateTime": "string",
  "kind": "dns#managedZonePeeringConfigTargetNetwork",
  "networkUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deactivateTime|string|false|none|The time at which the zone was deactivated, in RFC 3339 date-time format. An empty string indicates that the peering connection is active. The producer network can deactivate a zone. The zone is automatically deactivated if the producer network that the zone targeted is deleted. Output only.|
|kind|string|false|none|none|
|networkUrl|string|false|none|The fully qualified URL of the VPC network to forward queries to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}|

<h2 id="tocS_ManagedZonePrivateVisibilityConfig">ManagedZonePrivateVisibilityConfig</h2>
<!-- backwards compatibility -->
<a id="schemamanagedzoneprivatevisibilityconfig"></a>
<a id="schema_ManagedZonePrivateVisibilityConfig"></a>
<a id="tocSmanagedzoneprivatevisibilityconfig"></a>
<a id="tocsmanagedzoneprivatevisibilityconfig"></a>

```json
{
  "gkeClusters": [
    {
      "gkeClusterName": "string",
      "kind": "dns#managedZonePrivateVisibilityConfigGKECluster"
    }
  ],
  "kind": "dns#managedZonePrivateVisibilityConfig",
  "networks": [
    {
      "kind": "dns#managedZonePrivateVisibilityConfigNetwork",
      "networkUrl": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gkeClusters|[[ManagedZonePrivateVisibilityConfigGKECluster](#schemamanagedzoneprivatevisibilityconfiggkecluster)]|false|none|The list of Google Kubernetes Engine clusters that can see this zone.|
|kind|string|false|none|none|
|networks|[[ManagedZonePrivateVisibilityConfigNetwork](#schemamanagedzoneprivatevisibilityconfignetwork)]|false|none|The list of VPC networks that can see this zone.|

<h2 id="tocS_ManagedZonePrivateVisibilityConfigGKECluster">ManagedZonePrivateVisibilityConfigGKECluster</h2>
<!-- backwards compatibility -->
<a id="schemamanagedzoneprivatevisibilityconfiggkecluster"></a>
<a id="schema_ManagedZonePrivateVisibilityConfigGKECluster"></a>
<a id="tocSmanagedzoneprivatevisibilityconfiggkecluster"></a>
<a id="tocsmanagedzoneprivatevisibilityconfiggkecluster"></a>

```json
{
  "gkeClusterName": "string",
  "kind": "dns#managedZonePrivateVisibilityConfigGKECluster"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gkeClusterName|string|false|none|The resource name of the cluster to bind this ManagedZone to. This should be specified in the format like: projects/*/locations/*/clusters/*. This is referenced from GKE projects.locations.clusters.get API: https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/get|
|kind|string|false|none|none|

<h2 id="tocS_ManagedZonePrivateVisibilityConfigNetwork">ManagedZonePrivateVisibilityConfigNetwork</h2>
<!-- backwards compatibility -->
<a id="schemamanagedzoneprivatevisibilityconfignetwork"></a>
<a id="schema_ManagedZonePrivateVisibilityConfigNetwork"></a>
<a id="tocSmanagedzoneprivatevisibilityconfignetwork"></a>
<a id="tocsmanagedzoneprivatevisibilityconfignetwork"></a>

```json
{
  "kind": "dns#managedZonePrivateVisibilityConfigNetwork",
  "networkUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|none|
|networkUrl|string|false|none|The fully qualified URL of the VPC network to bind to. Format this URL like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}|

<h2 id="tocS_ManagedZoneReverseLookupConfig">ManagedZoneReverseLookupConfig</h2>
<!-- backwards compatibility -->
<a id="schemamanagedzonereverselookupconfig"></a>
<a id="schema_ManagedZoneReverseLookupConfig"></a>
<a id="tocSmanagedzonereverselookupconfig"></a>
<a id="tocsmanagedzonereverselookupconfig"></a>

```json
{
  "kind": "dns#managedZoneReverseLookupConfig"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|none|

<h2 id="tocS_ManagedZoneServiceDirectoryConfig">ManagedZoneServiceDirectoryConfig</h2>
<!-- backwards compatibility -->
<a id="schemamanagedzoneservicedirectoryconfig"></a>
<a id="schema_ManagedZoneServiceDirectoryConfig"></a>
<a id="tocSmanagedzoneservicedirectoryconfig"></a>
<a id="tocsmanagedzoneservicedirectoryconfig"></a>

```json
{
  "kind": "dns#managedZoneServiceDirectoryConfig",
  "namespace": {
    "deletionTime": "string",
    "kind": "dns#managedZoneServiceDirectoryConfigNamespace",
    "namespaceUrl": "string"
  }
}
```

Contains information about Service Directory-backed zones.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|none|
|namespace|[ManagedZoneServiceDirectoryConfigNamespace](#schemamanagedzoneservicedirectoryconfignamespace)|false|none|Contains information about the namespace associated with the zone.|

<h2 id="tocS_ManagedZoneServiceDirectoryConfigNamespace">ManagedZoneServiceDirectoryConfigNamespace</h2>
<!-- backwards compatibility -->
<a id="schemamanagedzoneservicedirectoryconfignamespace"></a>
<a id="schema_ManagedZoneServiceDirectoryConfigNamespace"></a>
<a id="tocSmanagedzoneservicedirectoryconfignamespace"></a>
<a id="tocsmanagedzoneservicedirectoryconfignamespace"></a>

```json
{
  "deletionTime": "string",
  "kind": "dns#managedZoneServiceDirectoryConfigNamespace",
  "namespaceUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deletionTime|string|false|none|The time that the namespace backing this zone was deleted; an empty string if it still exists. This is in RFC3339 text format. Output only.|
|kind|string|false|none|none|
|namespaceUrl|string|false|none|The fully qualified URL of the namespace associated with the zone. Format must be https://servicedirectory.googleapis.com/v1/projects/{project}/locations/{location}/namespaces/{namespace}|

<h2 id="tocS_ManagedZonesListResponse">ManagedZonesListResponse</h2>
<!-- backwards compatibility -->
<a id="schemamanagedzoneslistresponse"></a>
<a id="schema_ManagedZonesListResponse"></a>
<a id="tocSmanagedzoneslistresponse"></a>
<a id="tocsmanagedzoneslistresponse"></a>

```json
{
  "header": {
    "operationId": "string"
  },
  "kind": "dns#managedZonesListResponse",
  "managedZones": [
    {
      "cloudLoggingConfig": {
        "enableLogging": true,
        "kind": "dns#managedZoneCloudLoggingConfig"
      },
      "creationTime": "string",
      "description": "string",
      "dnsName": "string",
      "dnssecConfig": {
        "defaultKeySpecs": [
          {
            "algorithm": "RSASHA1",
            "keyLength": 0,
            "keyType": "KEY_SIGNING",
            "kind": "dns#dnsKeySpec"
          }
        ],
        "kind": "dns#managedZoneDnsSecConfig",
        "nonExistence": "NSEC",
        "state": "OFF"
      },
      "forwardingConfig": {
        "kind": "dns#managedZoneForwardingConfig",
        "targetNameServers": [
          {
            "forwardingPath": "DEFAULT",
            "ipv4Address": "string",
            "ipv6Address": "string",
            "kind": "dns#managedZoneForwardingConfigNameServerTarget"
          }
        ]
      },
      "id": "string",
      "kind": "dns#managedZone",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "nameServerSet": "string",
      "nameServers": [
        "string"
      ],
      "peeringConfig": {
        "kind": "dns#managedZonePeeringConfig",
        "targetNetwork": {
          "deactivateTime": "string",
          "kind": "dns#managedZonePeeringConfigTargetNetwork",
          "networkUrl": "string"
        }
      },
      "privateVisibilityConfig": {
        "gkeClusters": [
          {
            "gkeClusterName": "string",
            "kind": "dns#managedZonePrivateVisibilityConfigGKECluster"
          }
        ],
        "kind": "dns#managedZonePrivateVisibilityConfig",
        "networks": [
          {
            "kind": "dns#managedZonePrivateVisibilityConfigNetwork",
            "networkUrl": "string"
          }
        ]
      },
      "reverseLookupConfig": {
        "kind": "dns#managedZoneReverseLookupConfig"
      },
      "serviceDirectoryConfig": {
        "kind": "dns#managedZoneServiceDirectoryConfig",
        "namespace": {
          "deletionTime": "string",
          "kind": "dns#managedZoneServiceDirectoryConfigNamespace",
          "namespaceUrl": "string"
        }
      },
      "visibility": "PUBLIC"
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header|[ResponseHeader](#schemaresponseheader)|false|none|Elements common to every response.|
|kind|string|false|none|Type of resource.|
|managedZones|[[ManagedZone](#schemamanagedzone)]|false|none|The managed zone resources.|
|nextPageToken|string|false|none|The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token. This lets you the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size.|

<h2 id="tocS_Operation">Operation</h2>
<!-- backwards compatibility -->
<a id="schemaoperation"></a>
<a id="schema_Operation"></a>
<a id="tocSoperation"></a>
<a id="tocsoperation"></a>

```json
{
  "dnsKeyContext": {
    "newValue": {
      "algorithm": "RSASHA1",
      "creationTime": "string",
      "description": "string",
      "digests": [
        {
          "digest": "string",
          "type": "SHA1"
        }
      ],
      "id": "string",
      "isActive": true,
      "keyLength": 0,
      "keyTag": 0,
      "kind": "dns#dnsKey",
      "publicKey": "string",
      "type": "KEY_SIGNING"
    },
    "oldValue": {
      "algorithm": "RSASHA1",
      "creationTime": "string",
      "description": "string",
      "digests": [
        {
          "digest": "string",
          "type": "SHA1"
        }
      ],
      "id": "string",
      "isActive": true,
      "keyLength": 0,
      "keyTag": 0,
      "kind": "dns#dnsKey",
      "publicKey": "string",
      "type": "KEY_SIGNING"
    }
  },
  "id": "string",
  "kind": "dns#operation",
  "startTime": "string",
  "status": "PENDING",
  "type": "string",
  "user": "string",
  "zoneContext": {
    "newValue": {
      "cloudLoggingConfig": {
        "enableLogging": true,
        "kind": "dns#managedZoneCloudLoggingConfig"
      },
      "creationTime": "string",
      "description": "string",
      "dnsName": "string",
      "dnssecConfig": {
        "defaultKeySpecs": [
          {
            "algorithm": "RSASHA1",
            "keyLength": 0,
            "keyType": "KEY_SIGNING",
            "kind": "dns#dnsKeySpec"
          }
        ],
        "kind": "dns#managedZoneDnsSecConfig",
        "nonExistence": "NSEC",
        "state": "OFF"
      },
      "forwardingConfig": {
        "kind": "dns#managedZoneForwardingConfig",
        "targetNameServers": [
          {
            "forwardingPath": "DEFAULT",
            "ipv4Address": "string",
            "ipv6Address": "string",
            "kind": "dns#managedZoneForwardingConfigNameServerTarget"
          }
        ]
      },
      "id": "string",
      "kind": "dns#managedZone",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "nameServerSet": "string",
      "nameServers": [
        "string"
      ],
      "peeringConfig": {
        "kind": "dns#managedZonePeeringConfig",
        "targetNetwork": {
          "deactivateTime": "string",
          "kind": "dns#managedZonePeeringConfigTargetNetwork",
          "networkUrl": "string"
        }
      },
      "privateVisibilityConfig": {
        "gkeClusters": [
          {
            "gkeClusterName": "string",
            "kind": "dns#managedZonePrivateVisibilityConfigGKECluster"
          }
        ],
        "kind": "dns#managedZonePrivateVisibilityConfig",
        "networks": [
          {
            "kind": "dns#managedZonePrivateVisibilityConfigNetwork",
            "networkUrl": "string"
          }
        ]
      },
      "reverseLookupConfig": {
        "kind": "dns#managedZoneReverseLookupConfig"
      },
      "serviceDirectoryConfig": {
        "kind": "dns#managedZoneServiceDirectoryConfig",
        "namespace": {
          "deletionTime": "string",
          "kind": "dns#managedZoneServiceDirectoryConfigNamespace",
          "namespaceUrl": "string"
        }
      },
      "visibility": "PUBLIC"
    },
    "oldValue": {
      "cloudLoggingConfig": {
        "enableLogging": true,
        "kind": "dns#managedZoneCloudLoggingConfig"
      },
      "creationTime": "string",
      "description": "string",
      "dnsName": "string",
      "dnssecConfig": {
        "defaultKeySpecs": [
          {
            "algorithm": "RSASHA1",
            "keyLength": 0,
            "keyType": "KEY_SIGNING",
            "kind": "dns#dnsKeySpec"
          }
        ],
        "kind": "dns#managedZoneDnsSecConfig",
        "nonExistence": "NSEC",
        "state": "OFF"
      },
      "forwardingConfig": {
        "kind": "dns#managedZoneForwardingConfig",
        "targetNameServers": [
          {
            "forwardingPath": "DEFAULT",
            "ipv4Address": "string",
            "ipv6Address": "string",
            "kind": "dns#managedZoneForwardingConfigNameServerTarget"
          }
        ]
      },
      "id": "string",
      "kind": "dns#managedZone",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "nameServerSet": "string",
      "nameServers": [
        "string"
      ],
      "peeringConfig": {
        "kind": "dns#managedZonePeeringConfig",
        "targetNetwork": {
          "deactivateTime": "string",
          "kind": "dns#managedZonePeeringConfigTargetNetwork",
          "networkUrl": "string"
        }
      },
      "privateVisibilityConfig": {
        "gkeClusters": [
          {
            "gkeClusterName": "string",
            "kind": "dns#managedZonePrivateVisibilityConfigGKECluster"
          }
        ],
        "kind": "dns#managedZonePrivateVisibilityConfig",
        "networks": [
          {
            "kind": "dns#managedZonePrivateVisibilityConfigNetwork",
            "networkUrl": "string"
          }
        ]
      },
      "reverseLookupConfig": {
        "kind": "dns#managedZoneReverseLookupConfig"
      },
      "serviceDirectoryConfig": {
        "kind": "dns#managedZoneServiceDirectoryConfig",
        "namespace": {
          "deletionTime": "string",
          "kind": "dns#managedZoneServiceDirectoryConfigNamespace",
          "namespaceUrl": "string"
        }
      },
      "visibility": "PUBLIC"
    }
  }
}
```

An operation represents a successful mutation performed on a Cloud DNS resource. Operations provide: - An audit log of server resource mutations. - A way to recover/retry API calls in the case where the response is never received by the caller. Use the caller specified client_operation_id.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dnsKeyContext|[OperationDnsKeyContext](#schemaoperationdnskeycontext)|false|none|Only populated if the operation targeted a DnsKey (output only).|
|id|string|false|none|Unique identifier for the resource. This is the client_operation_id if the client specified it when the mutation was initiated, otherwise, it is generated by the server. The name must be 1-63 characters long and match the regular expression [-a-z0-9]? (output only)|
|kind|string|false|none|none|
|startTime|string|false|none|The time that this operation was started by the server. This is in RFC3339 text format (output only).|
|status|string|false|none|Status of the operation. Can be one of the following: "PENDING" or "DONE" (output only). A status of "DONE" means that the request to update the authoritative servers has been sent, but the servers might not be updated yet.|
|type|string|false|none|Type of the operation. Operations include insert, update, and delete (output only).|
|user|string|false|none|User who requested the operation, for example: user@example.com. cloud-dns-system for operations automatically done by the system. (output only)|
|zoneContext|[OperationManagedZoneContext](#schemaoperationmanagedzonecontext)|false|none|Only populated if the operation targeted a ManagedZone (output only).|

#### Enumerated Values

|Property|Value|
|---|---|
|status|PENDING|
|status|DONE|

<h2 id="tocS_OperationDnsKeyContext">OperationDnsKeyContext</h2>
<!-- backwards compatibility -->
<a id="schemaoperationdnskeycontext"></a>
<a id="schema_OperationDnsKeyContext"></a>
<a id="tocSoperationdnskeycontext"></a>
<a id="tocsoperationdnskeycontext"></a>

```json
{
  "newValue": {
    "algorithm": "RSASHA1",
    "creationTime": "string",
    "description": "string",
    "digests": [
      {
        "digest": "string",
        "type": "SHA1"
      }
    ],
    "id": "string",
    "isActive": true,
    "keyLength": 0,
    "keyTag": 0,
    "kind": "dns#dnsKey",
    "publicKey": "string",
    "type": "KEY_SIGNING"
  },
  "oldValue": {
    "algorithm": "RSASHA1",
    "creationTime": "string",
    "description": "string",
    "digests": [
      {
        "digest": "string",
        "type": "SHA1"
      }
    ],
    "id": "string",
    "isActive": true,
    "keyLength": 0,
    "keyTag": 0,
    "kind": "dns#dnsKey",
    "publicKey": "string",
    "type": "KEY_SIGNING"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newValue|[DnsKey](#schemadnskey)|false|none|The post-operation DnsKey resource.|
|oldValue|[DnsKey](#schemadnskey)|false|none|The pre-operation DnsKey resource.|

<h2 id="tocS_OperationManagedZoneContext">OperationManagedZoneContext</h2>
<!-- backwards compatibility -->
<a id="schemaoperationmanagedzonecontext"></a>
<a id="schema_OperationManagedZoneContext"></a>
<a id="tocSoperationmanagedzonecontext"></a>
<a id="tocsoperationmanagedzonecontext"></a>

```json
{
  "newValue": {
    "cloudLoggingConfig": {
      "enableLogging": true,
      "kind": "dns#managedZoneCloudLoggingConfig"
    },
    "creationTime": "string",
    "description": "string",
    "dnsName": "string",
    "dnssecConfig": {
      "defaultKeySpecs": [
        {
          "algorithm": "RSASHA1",
          "keyLength": 0,
          "keyType": "KEY_SIGNING",
          "kind": "dns#dnsKeySpec"
        }
      ],
      "kind": "dns#managedZoneDnsSecConfig",
      "nonExistence": "NSEC",
      "state": "OFF"
    },
    "forwardingConfig": {
      "kind": "dns#managedZoneForwardingConfig",
      "targetNameServers": [
        {
          "forwardingPath": "DEFAULT",
          "ipv4Address": "string",
          "ipv6Address": "string",
          "kind": "dns#managedZoneForwardingConfigNameServerTarget"
        }
      ]
    },
    "id": "string",
    "kind": "dns#managedZone",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "nameServerSet": "string",
    "nameServers": [
      "string"
    ],
    "peeringConfig": {
      "kind": "dns#managedZonePeeringConfig",
      "targetNetwork": {
        "deactivateTime": "string",
        "kind": "dns#managedZonePeeringConfigTargetNetwork",
        "networkUrl": "string"
      }
    },
    "privateVisibilityConfig": {
      "gkeClusters": [
        {
          "gkeClusterName": "string",
          "kind": "dns#managedZonePrivateVisibilityConfigGKECluster"
        }
      ],
      "kind": "dns#managedZonePrivateVisibilityConfig",
      "networks": [
        {
          "kind": "dns#managedZonePrivateVisibilityConfigNetwork",
          "networkUrl": "string"
        }
      ]
    },
    "reverseLookupConfig": {
      "kind": "dns#managedZoneReverseLookupConfig"
    },
    "serviceDirectoryConfig": {
      "kind": "dns#managedZoneServiceDirectoryConfig",
      "namespace": {
        "deletionTime": "string",
        "kind": "dns#managedZoneServiceDirectoryConfigNamespace",
        "namespaceUrl": "string"
      }
    },
    "visibility": "PUBLIC"
  },
  "oldValue": {
    "cloudLoggingConfig": {
      "enableLogging": true,
      "kind": "dns#managedZoneCloudLoggingConfig"
    },
    "creationTime": "string",
    "description": "string",
    "dnsName": "string",
    "dnssecConfig": {
      "defaultKeySpecs": [
        {
          "algorithm": "RSASHA1",
          "keyLength": 0,
          "keyType": "KEY_SIGNING",
          "kind": "dns#dnsKeySpec"
        }
      ],
      "kind": "dns#managedZoneDnsSecConfig",
      "nonExistence": "NSEC",
      "state": "OFF"
    },
    "forwardingConfig": {
      "kind": "dns#managedZoneForwardingConfig",
      "targetNameServers": [
        {
          "forwardingPath": "DEFAULT",
          "ipv4Address": "string",
          "ipv6Address": "string",
          "kind": "dns#managedZoneForwardingConfigNameServerTarget"
        }
      ]
    },
    "id": "string",
    "kind": "dns#managedZone",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "nameServerSet": "string",
    "nameServers": [
      "string"
    ],
    "peeringConfig": {
      "kind": "dns#managedZonePeeringConfig",
      "targetNetwork": {
        "deactivateTime": "string",
        "kind": "dns#managedZonePeeringConfigTargetNetwork",
        "networkUrl": "string"
      }
    },
    "privateVisibilityConfig": {
      "gkeClusters": [
        {
          "gkeClusterName": "string",
          "kind": "dns#managedZonePrivateVisibilityConfigGKECluster"
        }
      ],
      "kind": "dns#managedZonePrivateVisibilityConfig",
      "networks": [
        {
          "kind": "dns#managedZonePrivateVisibilityConfigNetwork",
          "networkUrl": "string"
        }
      ]
    },
    "reverseLookupConfig": {
      "kind": "dns#managedZoneReverseLookupConfig"
    },
    "serviceDirectoryConfig": {
      "kind": "dns#managedZoneServiceDirectoryConfig",
      "namespace": {
        "deletionTime": "string",
        "kind": "dns#managedZoneServiceDirectoryConfigNamespace",
        "namespaceUrl": "string"
      }
    },
    "visibility": "PUBLIC"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newValue|[ManagedZone](#schemamanagedzone)|false|none|The post-operation ManagedZone resource.|
|oldValue|[ManagedZone](#schemamanagedzone)|false|none|The pre-operation ManagedZone resource.|

<h2 id="tocS_PoliciesListResponse">PoliciesListResponse</h2>
<!-- backwards compatibility -->
<a id="schemapolicieslistresponse"></a>
<a id="schema_PoliciesListResponse"></a>
<a id="tocSpolicieslistresponse"></a>
<a id="tocspolicieslistresponse"></a>

```json
{
  "header": {
    "operationId": "string"
  },
  "kind": "dns#policiesListResponse",
  "nextPageToken": "string",
  "policies": [
    {
      "alternativeNameServerConfig": {
        "kind": "dns#policyAlternativeNameServerConfig",
        "targetNameServers": [
          {
            "forwardingPath": "DEFAULT",
            "ipv4Address": "string",
            "ipv6Address": "string",
            "kind": "dns#policyAlternativeNameServerConfigTargetNameServer"
          }
        ]
      },
      "description": "string",
      "enableInboundForwarding": true,
      "enableLogging": true,
      "id": "string",
      "kind": "dns#policy",
      "name": "string",
      "networks": [
        {
          "kind": "dns#policyNetwork",
          "networkUrl": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header|[ResponseHeader](#schemaresponseheader)|false|none|Elements common to every response.|
|kind|string|false|none|Type of resource.|
|nextPageToken|string|false|none|The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token. This lets you the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size.|
|policies|[[Policy](#schemapolicy)]|false|none|The policy resources.|

<h2 id="tocS_PoliciesPatchResponse">PoliciesPatchResponse</h2>
<!-- backwards compatibility -->
<a id="schemapoliciespatchresponse"></a>
<a id="schema_PoliciesPatchResponse"></a>
<a id="tocSpoliciespatchresponse"></a>
<a id="tocspoliciespatchresponse"></a>

```json
{
  "header": {
    "operationId": "string"
  },
  "policy": {
    "alternativeNameServerConfig": {
      "kind": "dns#policyAlternativeNameServerConfig",
      "targetNameServers": [
        {
          "forwardingPath": "DEFAULT",
          "ipv4Address": "string",
          "ipv6Address": "string",
          "kind": "dns#policyAlternativeNameServerConfigTargetNameServer"
        }
      ]
    },
    "description": "string",
    "enableInboundForwarding": true,
    "enableLogging": true,
    "id": "string",
    "kind": "dns#policy",
    "name": "string",
    "networks": [
      {
        "kind": "dns#policyNetwork",
        "networkUrl": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header|[ResponseHeader](#schemaresponseheader)|false|none|Elements common to every response.|
|policy|[Policy](#schemapolicy)|false|none|A policy is a collection of DNS rules applied to one or more Virtual Private Cloud resources.|

<h2 id="tocS_PoliciesUpdateResponse">PoliciesUpdateResponse</h2>
<!-- backwards compatibility -->
<a id="schemapoliciesupdateresponse"></a>
<a id="schema_PoliciesUpdateResponse"></a>
<a id="tocSpoliciesupdateresponse"></a>
<a id="tocspoliciesupdateresponse"></a>

```json
{
  "header": {
    "operationId": "string"
  },
  "policy": {
    "alternativeNameServerConfig": {
      "kind": "dns#policyAlternativeNameServerConfig",
      "targetNameServers": [
        {
          "forwardingPath": "DEFAULT",
          "ipv4Address": "string",
          "ipv6Address": "string",
          "kind": "dns#policyAlternativeNameServerConfigTargetNameServer"
        }
      ]
    },
    "description": "string",
    "enableInboundForwarding": true,
    "enableLogging": true,
    "id": "string",
    "kind": "dns#policy",
    "name": "string",
    "networks": [
      {
        "kind": "dns#policyNetwork",
        "networkUrl": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header|[ResponseHeader](#schemaresponseheader)|false|none|Elements common to every response.|
|policy|[Policy](#schemapolicy)|false|none|A policy is a collection of DNS rules applied to one or more Virtual Private Cloud resources.|

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
{
  "alternativeNameServerConfig": {
    "kind": "dns#policyAlternativeNameServerConfig",
    "targetNameServers": [
      {
        "forwardingPath": "DEFAULT",
        "ipv4Address": "string",
        "ipv6Address": "string",
        "kind": "dns#policyAlternativeNameServerConfigTargetNameServer"
      }
    ]
  },
  "description": "string",
  "enableInboundForwarding": true,
  "enableLogging": true,
  "id": "string",
  "kind": "dns#policy",
  "name": "string",
  "networks": [
    {
      "kind": "dns#policyNetwork",
      "networkUrl": "string"
    }
  ]
}
```

A policy is a collection of DNS rules applied to one or more Virtual Private Cloud resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternativeNameServerConfig|[PolicyAlternativeNameServerConfig](#schemapolicyalternativenameserverconfig)|false|none|Sets an alternative name server for the associated networks. When specified, all DNS queries are forwarded to a name server that you choose. Names such as .internal are not available when an alternative name server is specified.|
|description|string|false|none|A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the policy's function.|
|enableInboundForwarding|boolean|false|none|Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. When enabled, a virtual IP address is allocated from each of the subnetworks that are bound to this policy.|
|enableLogging|boolean|false|none|Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set.|
|id|string(uint64)|false|none|Unique identifier for the resource; defined by the server (output only).|
|kind|string|false|none|none|
|name|string|false|none|User-assigned name for this policy.|
|networks|[[PolicyNetwork](#schemapolicynetwork)]|false|none|List of network names specifying networks to which this policy is applied.|

<h2 id="tocS_PolicyAlternativeNameServerConfig">PolicyAlternativeNameServerConfig</h2>
<!-- backwards compatibility -->
<a id="schemapolicyalternativenameserverconfig"></a>
<a id="schema_PolicyAlternativeNameServerConfig"></a>
<a id="tocSpolicyalternativenameserverconfig"></a>
<a id="tocspolicyalternativenameserverconfig"></a>

```json
{
  "kind": "dns#policyAlternativeNameServerConfig",
  "targetNameServers": [
    {
      "forwardingPath": "DEFAULT",
      "ipv4Address": "string",
      "ipv6Address": "string",
      "kind": "dns#policyAlternativeNameServerConfigTargetNameServer"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|none|
|targetNameServers|[[PolicyAlternativeNameServerConfigTargetNameServer](#schemapolicyalternativenameserverconfigtargetnameserver)]|false|none|Sets an alternative name server for the associated networks. When specified, all DNS queries are forwarded to a name server that you choose. Names such as .internal are not available when an alternative name server is specified.|

<h2 id="tocS_PolicyAlternativeNameServerConfigTargetNameServer">PolicyAlternativeNameServerConfigTargetNameServer</h2>
<!-- backwards compatibility -->
<a id="schemapolicyalternativenameserverconfigtargetnameserver"></a>
<a id="schema_PolicyAlternativeNameServerConfigTargetNameServer"></a>
<a id="tocSpolicyalternativenameserverconfigtargetnameserver"></a>
<a id="tocspolicyalternativenameserverconfigtargetnameserver"></a>

```json
{
  "forwardingPath": "DEFAULT",
  "ipv4Address": "string",
  "ipv6Address": "string",
  "kind": "dns#policyAlternativeNameServerConfigTargetNameServer"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|forwardingPath|string|false|none|Forwarding path for this TargetNameServer. If unset or set to DEFAULT, Cloud DNS makes forwarding decisions based on address ranges; that is, RFC1918 addresses go to the VPC network, non-RFC1918 addresses go to the internet. When set to PRIVATE, Cloud DNS always sends queries through the VPC network for this target.|
|ipv4Address|string|false|none|IPv4 address to forward queries to.|
|ipv6Address|string|false|none|IPv6 address to forward to. Does not accept both fields (ipv4 & ipv6) being populated. Public preview as of November 2022.|
|kind|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|forwardingPath|DEFAULT|
|forwardingPath|PRIVATE|

<h2 id="tocS_PolicyNetwork">PolicyNetwork</h2>
<!-- backwards compatibility -->
<a id="schemapolicynetwork"></a>
<a id="schema_PolicyNetwork"></a>
<a id="tocSpolicynetwork"></a>
<a id="tocspolicynetwork"></a>

```json
{
  "kind": "dns#policyNetwork",
  "networkUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|none|
|networkUrl|string|false|none|The fully qualified URL of the VPC network to bind to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}|

<h2 id="tocS_Project">Project</h2>
<!-- backwards compatibility -->
<a id="schemaproject"></a>
<a id="schema_Project"></a>
<a id="tocSproject"></a>
<a id="tocsproject"></a>

```json
{
  "id": "string",
  "kind": "dns#project",
  "number": "string",
  "quota": {
    "dnsKeysPerManagedZone": 0,
    "gkeClustersPerManagedZone": 0,
    "gkeClustersPerPolicy": 0,
    "gkeClustersPerResponsePolicy": 0,
    "itemsPerRoutingPolicy": 0,
    "kind": "dns#quota",
    "managedZones": 0,
    "managedZonesPerGkeCluster": 0,
    "managedZonesPerNetwork": 0,
    "nameserversPerDelegation": 0,
    "networksPerManagedZone": 0,
    "networksPerPolicy": 0,
    "networksPerResponsePolicy": 0,
    "peeringZonesPerTargetNetwork": 0,
    "policies": 0,
    "resourceRecordsPerRrset": 0,
    "responsePolicies": 0,
    "responsePolicyRulesPerResponsePolicy": 0,
    "rrsetAdditionsPerChange": 0,
    "rrsetDeletionsPerChange": 0,
    "rrsetsPerManagedZone": 0,
    "targetNameServersPerManagedZone": 0,
    "targetNameServersPerPolicy": 0,
    "totalRrdataSizePerChange": 0,
    "whitelistedKeySpecs": [
      {
        "algorithm": "RSASHA1",
        "keyLength": 0,
        "keyType": "KEY_SIGNING",
        "kind": "dns#dnsKeySpec"
      }
    ]
  }
}
```

A project resource. The project is a top level container for resources including Cloud DNS ManagedZones. Projects can be created only in the APIs console. Next tag: 7.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|User assigned unique identifier for the resource (output only).|
|kind|string|false|none|none|
|number|string(uint64)|false|none|Unique numeric identifier for the resource; defined by the server (output only).|
|quota|[Quota](#schemaquota)|false|none|Quotas assigned to this project (output only).|

<h2 id="tocS_Quota">Quota</h2>
<!-- backwards compatibility -->
<a id="schemaquota"></a>
<a id="schema_Quota"></a>
<a id="tocSquota"></a>
<a id="tocsquota"></a>

```json
{
  "dnsKeysPerManagedZone": 0,
  "gkeClustersPerManagedZone": 0,
  "gkeClustersPerPolicy": 0,
  "gkeClustersPerResponsePolicy": 0,
  "itemsPerRoutingPolicy": 0,
  "kind": "dns#quota",
  "managedZones": 0,
  "managedZonesPerGkeCluster": 0,
  "managedZonesPerNetwork": 0,
  "nameserversPerDelegation": 0,
  "networksPerManagedZone": 0,
  "networksPerPolicy": 0,
  "networksPerResponsePolicy": 0,
  "peeringZonesPerTargetNetwork": 0,
  "policies": 0,
  "resourceRecordsPerRrset": 0,
  "responsePolicies": 0,
  "responsePolicyRulesPerResponsePolicy": 0,
  "rrsetAdditionsPerChange": 0,
  "rrsetDeletionsPerChange": 0,
  "rrsetsPerManagedZone": 0,
  "targetNameServersPerManagedZone": 0,
  "targetNameServersPerPolicy": 0,
  "totalRrdataSizePerChange": 0,
  "whitelistedKeySpecs": [
    {
      "algorithm": "RSASHA1",
      "keyLength": 0,
      "keyType": "KEY_SIGNING",
      "kind": "dns#dnsKeySpec"
    }
  ]
}
```

Limits associated with a Project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dnsKeysPerManagedZone|integer(int32)|false|none|Maximum allowed number of DnsKeys per ManagedZone.|
|gkeClustersPerManagedZone|integer(int32)|false|none|Maximum allowed number of GKE clusters to which a privately scoped zone can be attached.|
|gkeClustersPerPolicy|integer(int32)|false|none|Maximum allowed number of GKE clusters per policy.|
|gkeClustersPerResponsePolicy|integer(int32)|false|none|Maximum allowed number of GKE clusters per response policy.|
|itemsPerRoutingPolicy|integer(int32)|false|none|Maximum allowed number of items per routing policy.|
|kind|string|false|none|none|
|managedZones|integer(int32)|false|none|Maximum allowed number of managed zones in the project.|
|managedZonesPerGkeCluster|integer(int32)|false|none|Maximum allowed number of managed zones which can be attached to a GKE cluster.|
|managedZonesPerNetwork|integer(int32)|false|none|Maximum allowed number of managed zones which can be attached to a network.|
|nameserversPerDelegation|integer(int32)|false|none|Maximum number of nameservers per delegation, meant to prevent abuse|
|networksPerManagedZone|integer(int32)|false|none|Maximum allowed number of networks to which a privately scoped zone can be attached.|
|networksPerPolicy|integer(int32)|false|none|Maximum allowed number of networks per policy.|
|networksPerResponsePolicy|integer(int32)|false|none|Maximum allowed number of networks per response policy.|
|peeringZonesPerTargetNetwork|integer(int32)|false|none|Maximum allowed number of consumer peering zones per target network owned by this producer project|
|policies|integer(int32)|false|none|Maximum allowed number of policies per project.|
|resourceRecordsPerRrset|integer(int32)|false|none|Maximum allowed number of ResourceRecords per ResourceRecordSet.|
|responsePolicies|integer(int32)|false|none|Maximum allowed number of response policies per project.|
|responsePolicyRulesPerResponsePolicy|integer(int32)|false|none|Maximum allowed number of rules per response policy.|
|rrsetAdditionsPerChange|integer(int32)|false|none|Maximum allowed number of ResourceRecordSets to add per ChangesCreateRequest.|
|rrsetDeletionsPerChange|integer(int32)|false|none|Maximum allowed number of ResourceRecordSets to delete per ChangesCreateRequest.|
|rrsetsPerManagedZone|integer(int32)|false|none|Maximum allowed number of ResourceRecordSets per zone in the project.|
|targetNameServersPerManagedZone|integer(int32)|false|none|Maximum allowed number of target name servers per managed forwarding zone.|
|targetNameServersPerPolicy|integer(int32)|false|none|Maximum allowed number of alternative target name servers per policy.|
|totalRrdataSizePerChange|integer(int32)|false|none|Maximum allowed size for total rrdata in one ChangesCreateRequest in bytes.|
|whitelistedKeySpecs|[[DnsKeySpec](#schemadnskeyspec)]|false|none|DNSSEC algorithm and key length types that can be used for DnsKeys.|

<h2 id="tocS_RRSetRoutingPolicy">RRSetRoutingPolicy</h2>
<!-- backwards compatibility -->
<a id="schemarrsetroutingpolicy"></a>
<a id="schema_RRSetRoutingPolicy"></a>
<a id="tocSrrsetroutingpolicy"></a>
<a id="tocsrrsetroutingpolicy"></a>

```json
{
  "geo": {
    "enableFencing": true,
    "items": [
      {
        "healthCheckedTargets": {
          "externalEndpoints": [
            "string"
          ],
          "internalLoadBalancers": [
            {
              "ipAddress": "string",
              "ipProtocol": "UNDEFINED",
              "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
              "loadBalancerType": "NONE",
              "networkUrl": "string",
              "port": "string",
              "project": "string",
              "region": "string"
            }
          ]
        },
        "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
        "location": "string",
        "rrdatas": [
          "string"
        ],
        "signatureRrdatas": [
          "string"
        ]
      }
    ],
    "kind": "dns#rRSetRoutingPolicyGeoPolicy"
  },
  "healthCheck": "string",
  "kind": "dns#rRSetRoutingPolicy",
  "primaryBackup": {
    "backupGeoTargets": {
      "enableFencing": true,
      "items": [
        {
          "healthCheckedTargets": {
            "externalEndpoints": [
              "string"
            ],
            "internalLoadBalancers": [
              {
                "ipAddress": "string",
                "ipProtocol": "UNDEFINED",
                "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                "loadBalancerType": "NONE",
                "networkUrl": "string",
                "port": "string",
                "project": "string",
                "region": "string"
              }
            ]
          },
          "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
          "location": "string",
          "rrdatas": [
            "string"
          ],
          "signatureRrdatas": [
            "string"
          ]
        }
      ],
      "kind": "dns#rRSetRoutingPolicyGeoPolicy"
    },
    "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
    "primaryTargets": {
      "externalEndpoints": [
        "string"
      ],
      "internalLoadBalancers": [
        {
          "ipAddress": "string",
          "ipProtocol": "UNDEFINED",
          "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
          "loadBalancerType": "NONE",
          "networkUrl": "string",
          "port": "string",
          "project": "string",
          "region": "string"
        }
      ]
    },
    "trickleTraffic": 0
  },
  "wrr": {
    "items": [
      {
        "healthCheckedTargets": {
          "externalEndpoints": [
            "string"
          ],
          "internalLoadBalancers": [
            {
              "ipAddress": "string",
              "ipProtocol": "UNDEFINED",
              "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
              "loadBalancerType": "NONE",
              "networkUrl": "string",
              "port": "string",
              "project": "string",
              "region": "string"
            }
          ]
        },
        "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
        "rrdatas": [
          "string"
        ],
        "signatureRrdatas": [
          "string"
        ],
        "weight": 0
      }
    ],
    "kind": "dns#rRSetRoutingPolicyWrrPolicy"
  }
}
```

A RRSetRoutingPolicy represents ResourceRecordSet data that is returned dynamically with the response varying based on configured properties such as geolocation or by weighted random selection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|geo|[RRSetRoutingPolicyGeoPolicy](#schemarrsetroutingpolicygeopolicy)|false|none|Configures a RRSetRoutingPolicy that routes based on the geo location of the querying user.|
|healthCheck|string|false|none|The selfLink attribute of the HealthCheck resource to use for this RRSetRoutingPolicy. https://cloud.google.com/compute/docs/reference/rest/v1/healthChecks|
|kind|string|false|none|none|
|primaryBackup|[RRSetRoutingPolicyPrimaryBackupPolicy](#schemarrsetroutingpolicyprimarybackuppolicy)|false|none|Configures a RRSetRoutingPolicy such that all queries are responded with the primary_targets if they are healthy. And if all of them are unhealthy, then we fallback to a geo localized policy.|
|wrr|[RRSetRoutingPolicyWrrPolicy](#schemarrsetroutingpolicywrrpolicy)|false|none|Configures a RRSetRoutingPolicy that routes in a weighted round robin fashion.|

<h2 id="tocS_RRSetRoutingPolicyGeoPolicy">RRSetRoutingPolicyGeoPolicy</h2>
<!-- backwards compatibility -->
<a id="schemarrsetroutingpolicygeopolicy"></a>
<a id="schema_RRSetRoutingPolicyGeoPolicy"></a>
<a id="tocSrrsetroutingpolicygeopolicy"></a>
<a id="tocsrrsetroutingpolicygeopolicy"></a>

```json
{
  "enableFencing": true,
  "items": [
    {
      "healthCheckedTargets": {
        "externalEndpoints": [
          "string"
        ],
        "internalLoadBalancers": [
          {
            "ipAddress": "string",
            "ipProtocol": "UNDEFINED",
            "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
            "loadBalancerType": "NONE",
            "networkUrl": "string",
            "port": "string",
            "project": "string",
            "region": "string"
          }
        ]
      },
      "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
      "location": "string",
      "rrdatas": [
        "string"
      ],
      "signatureRrdatas": [
        "string"
      ]
    }
  ],
  "kind": "dns#rRSetRoutingPolicyGeoPolicy"
}
```

Configures a RRSetRoutingPolicy that routes based on the geo location of the querying user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableFencing|boolean|false|none|Without fencing, if health check fails for all configured items in the current geo bucket, we failover to the next nearest geo bucket. With fencing, if health checking is enabled, as long as some targets in the current geo bucket are healthy, we return only the healthy targets. However, if all targets are unhealthy, we don't failover to the next nearest bucket; instead, we return all the items in the current bucket even when all targets are unhealthy.|
|items|[[RRSetRoutingPolicyGeoPolicyGeoPolicyItem](#schemarrsetroutingpolicygeopolicygeopolicyitem)]|false|none|The primary geo routing configuration. If there are multiple items with the same location, an error is returned instead.|
|kind|string|false|none|none|

<h2 id="tocS_RRSetRoutingPolicyGeoPolicyGeoPolicyItem">RRSetRoutingPolicyGeoPolicyGeoPolicyItem</h2>
<!-- backwards compatibility -->
<a id="schemarrsetroutingpolicygeopolicygeopolicyitem"></a>
<a id="schema_RRSetRoutingPolicyGeoPolicyGeoPolicyItem"></a>
<a id="tocSrrsetroutingpolicygeopolicygeopolicyitem"></a>
<a id="tocsrrsetroutingpolicygeopolicygeopolicyitem"></a>

```json
{
  "healthCheckedTargets": {
    "externalEndpoints": [
      "string"
    ],
    "internalLoadBalancers": [
      {
        "ipAddress": "string",
        "ipProtocol": "UNDEFINED",
        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
        "loadBalancerType": "NONE",
        "networkUrl": "string",
        "port": "string",
        "project": "string",
        "region": "string"
      }
    ]
  },
  "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
  "location": "string",
  "rrdatas": [
    "string"
  ],
  "signatureRrdatas": [
    "string"
  ]
}
```

ResourceRecordSet data for one geo location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|healthCheckedTargets|[RRSetRoutingPolicyHealthCheckTargets](#schemarrsetroutingpolicyhealthchecktargets)|false|none|For A and AAAA types only. Endpoints to return in the query result only if they are healthy. These can be specified along with rrdata within this item.|
|kind|string|false|none|none|
|location|string|false|none|The geo-location granularity is a GCP region. This location string should correspond to a GCP region. e.g. "us-east1", "southamerica-east1", "asia-east1", etc.|
|rrdatas|[string]|false|none|none|
|signatureRrdatas|[string]|false|none|DNSSEC generated signatures for all the rrdata within this item. If health checked targets are provided for DNSSEC enabled zones, there's a restriction of 1 IP address per item.|

<h2 id="tocS_RRSetRoutingPolicyHealthCheckTargets">RRSetRoutingPolicyHealthCheckTargets</h2>
<!-- backwards compatibility -->
<a id="schemarrsetroutingpolicyhealthchecktargets"></a>
<a id="schema_RRSetRoutingPolicyHealthCheckTargets"></a>
<a id="tocSrrsetroutingpolicyhealthchecktargets"></a>
<a id="tocsrrsetroutingpolicyhealthchecktargets"></a>

```json
{
  "externalEndpoints": [
    "string"
  ],
  "internalLoadBalancers": [
    {
      "ipAddress": "string",
      "ipProtocol": "UNDEFINED",
      "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
      "loadBalancerType": "NONE",
      "networkUrl": "string",
      "port": "string",
      "project": "string",
      "region": "string"
    }
  ]
}
```

HealthCheckTargets describes endpoints to health-check when responding to Routing Policy queries. Only the healthy endpoints will be included in the response. Only one of internal_load_balancer and external_endpoints should be set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externalEndpoints|[string]|false|none|The Internet IP addresses to be health checked. The format matches the format of ResourceRecordSet.rrdata as defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1)|
|internalLoadBalancers|[[RRSetRoutingPolicyLoadBalancerTarget](#schemarrsetroutingpolicyloadbalancertarget)]|false|none|Configuration for internal load balancers to be health checked.|

<h2 id="tocS_RRSetRoutingPolicyLoadBalancerTarget">RRSetRoutingPolicyLoadBalancerTarget</h2>
<!-- backwards compatibility -->
<a id="schemarrsetroutingpolicyloadbalancertarget"></a>
<a id="schema_RRSetRoutingPolicyLoadBalancerTarget"></a>
<a id="tocSrrsetroutingpolicyloadbalancertarget"></a>
<a id="tocsrrsetroutingpolicyloadbalancertarget"></a>

```json
{
  "ipAddress": "string",
  "ipProtocol": "UNDEFINED",
  "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
  "loadBalancerType": "NONE",
  "networkUrl": "string",
  "port": "string",
  "project": "string",
  "region": "string"
}
```

The configuration for an individual load balancer to health check.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ipAddress|string|false|none|The frontend IP address of the load balancer to health check.|
|ipProtocol|string|false|none|The protocol of the load balancer to health check.|
|kind|string|false|none|none|
|loadBalancerType|string|false|none|The type of load balancer specified by this target. This value must match the configuration of the load balancer located at the LoadBalancerTarget's IP address, port, and region. Use the following: - *regionalL4ilb*: for a regional internal passthrough Network Load Balancer. - *regionalL7ilb*: for a regional internal Application Load Balancer. - *globalL7ilb*: for a global internal Application Load Balancer. |
|networkUrl|string|false|none|The fully qualified URL of the network that the load balancer is attached to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network} .|
|port|string|false|none|The configured port of the load balancer.|
|project|string|false|none|The project ID in which the load balancer is located.|
|region|string|false|none|The region in which the load balancer is located.|

#### Enumerated Values

|Property|Value|
|---|---|
|ipProtocol|UNDEFINED|
|ipProtocol|TCP|
|ipProtocol|UDP|
|loadBalancerType|NONE|
|loadBalancerType|GLOBAL_L7ILB|
|loadBalancerType|REGIONAL_L4ILB|
|loadBalancerType|REGIONAL_L7ILB|

<h2 id="tocS_RRSetRoutingPolicyPrimaryBackupPolicy">RRSetRoutingPolicyPrimaryBackupPolicy</h2>
<!-- backwards compatibility -->
<a id="schemarrsetroutingpolicyprimarybackuppolicy"></a>
<a id="schema_RRSetRoutingPolicyPrimaryBackupPolicy"></a>
<a id="tocSrrsetroutingpolicyprimarybackuppolicy"></a>
<a id="tocsrrsetroutingpolicyprimarybackuppolicy"></a>

```json
{
  "backupGeoTargets": {
    "enableFencing": true,
    "items": [
      {
        "healthCheckedTargets": {
          "externalEndpoints": [
            "string"
          ],
          "internalLoadBalancers": [
            {
              "ipAddress": "string",
              "ipProtocol": "UNDEFINED",
              "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
              "loadBalancerType": "NONE",
              "networkUrl": "string",
              "port": "string",
              "project": "string",
              "region": "string"
            }
          ]
        },
        "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
        "location": "string",
        "rrdatas": [
          "string"
        ],
        "signatureRrdatas": [
          "string"
        ]
      }
    ],
    "kind": "dns#rRSetRoutingPolicyGeoPolicy"
  },
  "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
  "primaryTargets": {
    "externalEndpoints": [
      "string"
    ],
    "internalLoadBalancers": [
      {
        "ipAddress": "string",
        "ipProtocol": "UNDEFINED",
        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
        "loadBalancerType": "NONE",
        "networkUrl": "string",
        "port": "string",
        "project": "string",
        "region": "string"
      }
    ]
  },
  "trickleTraffic": 0
}
```

Configures a RRSetRoutingPolicy such that all queries are responded with the primary_targets if they are healthy. And if all of them are unhealthy, then we fallback to a geo localized policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backupGeoTargets|[RRSetRoutingPolicyGeoPolicy](#schemarrsetroutingpolicygeopolicy)|false|none|Backup targets provide a regional failover policy for the otherwise global primary targets. If serving state is set to BACKUP, this policy essentially becomes a geo routing policy.|
|kind|string|false|none|none|
|primaryTargets|[RRSetRoutingPolicyHealthCheckTargets](#schemarrsetroutingpolicyhealthchecktargets)|false|none|Endpoints that are health checked before making the routing decision. Unhealthy endpoints are omitted from the results. If all endpoints are unhealthy, we serve a response based on the backup_geo_targets.|
|trickleTraffic|number(double)|false|none|When serving state is PRIMARY, this field provides the option of sending a small percentage of the traffic to the backup targets.|

<h2 id="tocS_RRSetRoutingPolicyWrrPolicy">RRSetRoutingPolicyWrrPolicy</h2>
<!-- backwards compatibility -->
<a id="schemarrsetroutingpolicywrrpolicy"></a>
<a id="schema_RRSetRoutingPolicyWrrPolicy"></a>
<a id="tocSrrsetroutingpolicywrrpolicy"></a>
<a id="tocsrrsetroutingpolicywrrpolicy"></a>

```json
{
  "items": [
    {
      "healthCheckedTargets": {
        "externalEndpoints": [
          "string"
        ],
        "internalLoadBalancers": [
          {
            "ipAddress": "string",
            "ipProtocol": "UNDEFINED",
            "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
            "loadBalancerType": "NONE",
            "networkUrl": "string",
            "port": "string",
            "project": "string",
            "region": "string"
          }
        ]
      },
      "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
      "rrdatas": [
        "string"
      ],
      "signatureRrdatas": [
        "string"
      ],
      "weight": 0
    }
  ],
  "kind": "dns#rRSetRoutingPolicyWrrPolicy"
}
```

Configures a RRSetRoutingPolicy that routes in a weighted round robin fashion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[RRSetRoutingPolicyWrrPolicyWrrPolicyItem](#schemarrsetroutingpolicywrrpolicywrrpolicyitem)]|false|none|none|
|kind|string|false|none|none|

<h2 id="tocS_RRSetRoutingPolicyWrrPolicyWrrPolicyItem">RRSetRoutingPolicyWrrPolicyWrrPolicyItem</h2>
<!-- backwards compatibility -->
<a id="schemarrsetroutingpolicywrrpolicywrrpolicyitem"></a>
<a id="schema_RRSetRoutingPolicyWrrPolicyWrrPolicyItem"></a>
<a id="tocSrrsetroutingpolicywrrpolicywrrpolicyitem"></a>
<a id="tocsrrsetroutingpolicywrrpolicywrrpolicyitem"></a>

```json
{
  "healthCheckedTargets": {
    "externalEndpoints": [
      "string"
    ],
    "internalLoadBalancers": [
      {
        "ipAddress": "string",
        "ipProtocol": "UNDEFINED",
        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
        "loadBalancerType": "NONE",
        "networkUrl": "string",
        "port": "string",
        "project": "string",
        "region": "string"
      }
    ]
  },
  "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
  "rrdatas": [
    "string"
  ],
  "signatureRrdatas": [
    "string"
  ],
  "weight": 0
}
```

A routing block which contains the routing information for one WRR item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|healthCheckedTargets|[RRSetRoutingPolicyHealthCheckTargets](#schemarrsetroutingpolicyhealthchecktargets)|false|none|Endpoints that are health checked before making the routing decision. The unhealthy endpoints are omitted from the result. If all endpoints within a bucket are unhealthy, we choose a different bucket (sampled with respect to its weight) for responding. If DNSSEC is enabled for this zone, only one of rrdata or health_checked_targets can be set.|
|kind|string|false|none|none|
|rrdatas|[string]|false|none|none|
|signatureRrdatas|[string]|false|none|DNSSEC generated signatures for all the rrdata within this item. Note that if health checked targets are provided for DNSSEC enabled zones, there's a restriction of 1 IP address per item.|
|weight|number(double)|false|none|The weight corresponding to this WrrPolicyItem object. When multiple WrrPolicyItem objects are configured, the probability of returning an WrrPolicyItem object's data is proportional to its weight relative to the sum of weights configured for all items. This weight must be non-negative.|

<h2 id="tocS_ResourceRecordSet">ResourceRecordSet</h2>
<!-- backwards compatibility -->
<a id="schemaresourcerecordset"></a>
<a id="schema_ResourceRecordSet"></a>
<a id="tocSresourcerecordset"></a>
<a id="tocsresourcerecordset"></a>

```json
{
  "kind": "dns#resourceRecordSet",
  "name": "string",
  "routingPolicy": {
    "geo": {
      "enableFencing": true,
      "items": [
        {
          "healthCheckedTargets": {
            "externalEndpoints": [
              "string"
            ],
            "internalLoadBalancers": [
              {
                "ipAddress": "string",
                "ipProtocol": "UNDEFINED",
                "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                "loadBalancerType": "NONE",
                "networkUrl": "string",
                "port": "string",
                "project": "string",
                "region": "string"
              }
            ]
          },
          "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
          "location": "string",
          "rrdatas": [
            "string"
          ],
          "signatureRrdatas": [
            "string"
          ]
        }
      ],
      "kind": "dns#rRSetRoutingPolicyGeoPolicy"
    },
    "healthCheck": "string",
    "kind": "dns#rRSetRoutingPolicy",
    "primaryBackup": {
      "backupGeoTargets": {
        "enableFencing": true,
        "items": [
          {
            "healthCheckedTargets": {
              "externalEndpoints": [
                "string"
              ],
              "internalLoadBalancers": [
                {
                  "ipAddress": "string",
                  "ipProtocol": "UNDEFINED",
                  "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                  "loadBalancerType": "NONE",
                  "networkUrl": "string",
                  "port": "string",
                  "project": "string",
                  "region": "string"
                }
              ]
            },
            "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
            "location": "string",
            "rrdatas": [
              "string"
            ],
            "signatureRrdatas": [
              "string"
            ]
          }
        ],
        "kind": "dns#rRSetRoutingPolicyGeoPolicy"
      },
      "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
      "primaryTargets": {
        "externalEndpoints": [
          "string"
        ],
        "internalLoadBalancers": [
          {
            "ipAddress": "string",
            "ipProtocol": "UNDEFINED",
            "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
            "loadBalancerType": "NONE",
            "networkUrl": "string",
            "port": "string",
            "project": "string",
            "region": "string"
          }
        ]
      },
      "trickleTraffic": 0
    },
    "wrr": {
      "items": [
        {
          "healthCheckedTargets": {
            "externalEndpoints": [
              "string"
            ],
            "internalLoadBalancers": [
              {
                "ipAddress": "string",
                "ipProtocol": "UNDEFINED",
                "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                "loadBalancerType": "NONE",
                "networkUrl": "string",
                "port": "string",
                "project": "string",
                "region": "string"
              }
            ]
          },
          "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
          "rrdatas": [
            "string"
          ],
          "signatureRrdatas": [
            "string"
          ],
          "weight": 0
        }
      ],
      "kind": "dns#rRSetRoutingPolicyWrrPolicy"
    }
  },
  "rrdatas": [
    "string"
  ],
  "signatureRrdatas": [
    "string"
  ],
  "ttl": 0,
  "type": "string"
}
```

A unit of data that is returned by the DNS servers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|none|
|name|string|false|none|For example, www.example.com.|
|routingPolicy|[RRSetRoutingPolicy](#schemarrsetroutingpolicy)|false|none|Configures dynamic query responses based on either the geo location of the querying user or a weighted round robin based routing policy. A valid ResourceRecordSet contains only rrdata (for static resolution) or a routing_policy (for dynamic resolution).|
|rrdatas|[string]|false|none|As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1) -- see examples.|
|signatureRrdatas|[string]|false|none|As defined in RFC 4034 (section 3.2).|
|ttl|integer(int32)|false|none|Number of seconds that this ResourceRecordSet can be cached by resolvers.|
|type|string|false|none|The identifier of a supported record type. See the list of Supported DNS record types.|

<h2 id="tocS_ResourceRecordSetsListResponse">ResourceRecordSetsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresourcerecordsetslistresponse"></a>
<a id="schema_ResourceRecordSetsListResponse"></a>
<a id="tocSresourcerecordsetslistresponse"></a>
<a id="tocsresourcerecordsetslistresponse"></a>

```json
{
  "header": {
    "operationId": "string"
  },
  "kind": "dns#resourceRecordSetsListResponse",
  "nextPageToken": "string",
  "rrsets": [
    {
      "kind": "dns#resourceRecordSet",
      "name": "string",
      "routingPolicy": {
        "geo": {
          "enableFencing": true,
          "items": [
            {
              "healthCheckedTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
              "location": "string",
              "rrdatas": [
                "string"
              ],
              "signatureRrdatas": [
                "string"
              ]
            }
          ],
          "kind": "dns#rRSetRoutingPolicyGeoPolicy"
        },
        "healthCheck": "string",
        "kind": "dns#rRSetRoutingPolicy",
        "primaryBackup": {
          "backupGeoTargets": {
            "enableFencing": true,
            "items": [
              {
                "healthCheckedTargets": {
                  "externalEndpoints": [
                    "string"
                  ],
                  "internalLoadBalancers": [
                    {
                      "ipAddress": "string",
                      "ipProtocol": "UNDEFINED",
                      "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                      "loadBalancerType": "NONE",
                      "networkUrl": "string",
                      "port": "string",
                      "project": "string",
                      "region": "string"
                    }
                  ]
                },
                "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                "location": "string",
                "rrdatas": [
                  "string"
                ],
                "signatureRrdatas": [
                  "string"
                ]
              }
            ],
            "kind": "dns#rRSetRoutingPolicyGeoPolicy"
          },
          "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
          "primaryTargets": {
            "externalEndpoints": [
              "string"
            ],
            "internalLoadBalancers": [
              {
                "ipAddress": "string",
                "ipProtocol": "UNDEFINED",
                "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                "loadBalancerType": "NONE",
                "networkUrl": "string",
                "port": "string",
                "project": "string",
                "region": "string"
              }
            ]
          },
          "trickleTraffic": 0
        },
        "wrr": {
          "items": [
            {
              "healthCheckedTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
              "rrdatas": [
                "string"
              ],
              "signatureRrdatas": [
                "string"
              ],
              "weight": 0
            }
          ],
          "kind": "dns#rRSetRoutingPolicyWrrPolicy"
        }
      },
      "rrdatas": [
        "string"
      ],
      "signatureRrdatas": [
        "string"
      ],
      "ttl": 0,
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header|[ResponseHeader](#schemaresponseheader)|false|none|Elements common to every response.|
|kind|string|false|none|Type of resource.|
|nextPageToken|string|false|none|The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token. This lets you retrieve the complete contents of even larger collections, one page at a time. However, if the collection changes between paginated list requests, the set of elements returned is an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size.|
|rrsets|[[ResourceRecordSet](#schemaresourcerecordset)]|false|none|The resource record set resources.|

<h2 id="tocS_ResponseHeader">ResponseHeader</h2>
<!-- backwards compatibility -->
<a id="schemaresponseheader"></a>
<a id="schema_ResponseHeader"></a>
<a id="tocSresponseheader"></a>
<a id="tocsresponseheader"></a>

```json
{
  "operationId": "string"
}
```

Elements common to every response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operationId|string|false|none|For mutating operation requests that completed successfully. This is the client_operation_id if the client specified it, otherwise it is generated by the server (output only).|

<h2 id="tocS_ResponsePoliciesListResponse">ResponsePoliciesListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresponsepolicieslistresponse"></a>
<a id="schema_ResponsePoliciesListResponse"></a>
<a id="tocSresponsepolicieslistresponse"></a>
<a id="tocsresponsepolicieslistresponse"></a>

```json
{
  "header": {
    "operationId": "string"
  },
  "nextPageToken": "string",
  "responsePolicies": [
    {
      "description": "string",
      "gkeClusters": [
        {
          "gkeClusterName": "string",
          "kind": "dns#responsePolicyGKECluster"
        }
      ],
      "id": "string",
      "kind": "dns#responsePolicy",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "networks": [
        {
          "kind": "dns#responsePolicyNetwork",
          "networkUrl": "string"
        }
      ],
      "responsePolicyName": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header|[ResponseHeader](#schemaresponseheader)|false|none|Elements common to every response.|
|nextPageToken|string|false|none|The presence of this field indicates that more results exist following your last page of results in pagination order. To fetch them, make another list request by using this value as your page token. This lets you view the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size.|
|responsePolicies|[[ResponsePolicy](#schemaresponsepolicy)]|false|none|The Response Policy resources.|

<h2 id="tocS_ResponsePoliciesPatchResponse">ResponsePoliciesPatchResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresponsepoliciespatchresponse"></a>
<a id="schema_ResponsePoliciesPatchResponse"></a>
<a id="tocSresponsepoliciespatchresponse"></a>
<a id="tocsresponsepoliciespatchresponse"></a>

```json
{
  "header": {
    "operationId": "string"
  },
  "responsePolicy": {
    "description": "string",
    "gkeClusters": [
      {
        "gkeClusterName": "string",
        "kind": "dns#responsePolicyGKECluster"
      }
    ],
    "id": "string",
    "kind": "dns#responsePolicy",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "networks": [
      {
        "kind": "dns#responsePolicyNetwork",
        "networkUrl": "string"
      }
    ],
    "responsePolicyName": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header|[ResponseHeader](#schemaresponseheader)|false|none|Elements common to every response.|
|responsePolicy|[ResponsePolicy](#schemaresponsepolicy)|false|none|A Response Policy is a collection of selectors that apply to queries made against one or more Virtual Private Cloud networks.|

<h2 id="tocS_ResponsePoliciesUpdateResponse">ResponsePoliciesUpdateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresponsepoliciesupdateresponse"></a>
<a id="schema_ResponsePoliciesUpdateResponse"></a>
<a id="tocSresponsepoliciesupdateresponse"></a>
<a id="tocsresponsepoliciesupdateresponse"></a>

```json
{
  "header": {
    "operationId": "string"
  },
  "responsePolicy": {
    "description": "string",
    "gkeClusters": [
      {
        "gkeClusterName": "string",
        "kind": "dns#responsePolicyGKECluster"
      }
    ],
    "id": "string",
    "kind": "dns#responsePolicy",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "networks": [
      {
        "kind": "dns#responsePolicyNetwork",
        "networkUrl": "string"
      }
    ],
    "responsePolicyName": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header|[ResponseHeader](#schemaresponseheader)|false|none|Elements common to every response.|
|responsePolicy|[ResponsePolicy](#schemaresponsepolicy)|false|none|A Response Policy is a collection of selectors that apply to queries made against one or more Virtual Private Cloud networks.|

<h2 id="tocS_ResponsePolicy">ResponsePolicy</h2>
<!-- backwards compatibility -->
<a id="schemaresponsepolicy"></a>
<a id="schema_ResponsePolicy"></a>
<a id="tocSresponsepolicy"></a>
<a id="tocsresponsepolicy"></a>

```json
{
  "description": "string",
  "gkeClusters": [
    {
      "gkeClusterName": "string",
      "kind": "dns#responsePolicyGKECluster"
    }
  ],
  "id": "string",
  "kind": "dns#responsePolicy",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "networks": [
    {
      "kind": "dns#responsePolicyNetwork",
      "networkUrl": "string"
    }
  ],
  "responsePolicyName": "string"
}
```

A Response Policy is a collection of selectors that apply to queries made against one or more Virtual Private Cloud networks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|User-provided description for this Response Policy.|
|gkeClusters|[[ResponsePolicyGKECluster](#schemaresponsepolicygkecluster)]|false|none|The list of Google Kubernetes Engine clusters to which this response policy is applied.|
|id|string(int64)|false|none|Unique identifier for the resource; defined by the server (output only).|
|kind|string|false|none|none|
|labels|object|false|none|User labels.|
|networks|[[ResponsePolicyNetwork](#schemaresponsepolicynetwork)]|false|none|List of network names specifying networks to which this policy is applied.|
|responsePolicyName|string|false|none|User assigned name for this Response Policy.|

<h2 id="tocS_ResponsePolicyGKECluster">ResponsePolicyGKECluster</h2>
<!-- backwards compatibility -->
<a id="schemaresponsepolicygkecluster"></a>
<a id="schema_ResponsePolicyGKECluster"></a>
<a id="tocSresponsepolicygkecluster"></a>
<a id="tocsresponsepolicygkecluster"></a>

```json
{
  "gkeClusterName": "string",
  "kind": "dns#responsePolicyGKECluster"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gkeClusterName|string|false|none|The resource name of the cluster to bind this response policy to. This should be specified in the format like: projects/*/locations/*/clusters/*. This is referenced from GKE projects.locations.clusters.get API: https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/get|
|kind|string|false|none|none|

<h2 id="tocS_ResponsePolicyNetwork">ResponsePolicyNetwork</h2>
<!-- backwards compatibility -->
<a id="schemaresponsepolicynetwork"></a>
<a id="schema_ResponsePolicyNetwork"></a>
<a id="tocSresponsepolicynetwork"></a>
<a id="tocsresponsepolicynetwork"></a>

```json
{
  "kind": "dns#responsePolicyNetwork",
  "networkUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|none|
|networkUrl|string|false|none|The fully qualified URL of the VPC network to bind to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}|

<h2 id="tocS_ResponsePolicyRule">ResponsePolicyRule</h2>
<!-- backwards compatibility -->
<a id="schemaresponsepolicyrule"></a>
<a id="schema_ResponsePolicyRule"></a>
<a id="tocSresponsepolicyrule"></a>
<a id="tocsresponsepolicyrule"></a>

```json
{
  "behavior": "BEHAVIOR_UNSPECIFIED",
  "dnsName": "string",
  "kind": "dns#responsePolicyRule",
  "localData": {
    "localDatas": [
      {
        "kind": "dns#resourceRecordSet",
        "name": "string",
        "routingPolicy": {
          "geo": {
            "enableFencing": true,
            "items": [
              {
                "healthCheckedTargets": {
                  "externalEndpoints": [
                    "string"
                  ],
                  "internalLoadBalancers": [
                    {
                      "ipAddress": "string",
                      "ipProtocol": "UNDEFINED",
                      "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                      "loadBalancerType": "NONE",
                      "networkUrl": "string",
                      "port": "string",
                      "project": "string",
                      "region": "string"
                    }
                  ]
                },
                "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                "location": "string",
                "rrdatas": [
                  "string"
                ],
                "signatureRrdatas": [
                  "string"
                ]
              }
            ],
            "kind": "dns#rRSetRoutingPolicyGeoPolicy"
          },
          "healthCheck": "string",
          "kind": "dns#rRSetRoutingPolicy",
          "primaryBackup": {
            "backupGeoTargets": {
              "enableFencing": true,
              "items": [
                {
                  "healthCheckedTargets": {
                    "externalEndpoints": [
                      "string"
                    ],
                    "internalLoadBalancers": [
                      {
                        "ipAddress": "string",
                        "ipProtocol": "UNDEFINED",
                        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                        "loadBalancerType": "NONE",
                        "networkUrl": "string",
                        "port": "string",
                        "project": "string",
                        "region": "string"
                      }
                    ]
                  },
                  "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                  "location": "string",
                  "rrdatas": [
                    "string"
                  ],
                  "signatureRrdatas": [
                    "string"
                  ]
                }
              ],
              "kind": "dns#rRSetRoutingPolicyGeoPolicy"
            },
            "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
            "primaryTargets": {
              "externalEndpoints": [
                "string"
              ],
              "internalLoadBalancers": [
                {
                  "ipAddress": "string",
                  "ipProtocol": "UNDEFINED",
                  "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                  "loadBalancerType": "NONE",
                  "networkUrl": "string",
                  "port": "string",
                  "project": "string",
                  "region": "string"
                }
              ]
            },
            "trickleTraffic": 0
          },
          "wrr": {
            "items": [
              {
                "healthCheckedTargets": {
                  "externalEndpoints": [
                    "string"
                  ],
                  "internalLoadBalancers": [
                    {
                      "ipAddress": "string",
                      "ipProtocol": "UNDEFINED",
                      "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                      "loadBalancerType": "NONE",
                      "networkUrl": "string",
                      "port": "string",
                      "project": "string",
                      "region": "string"
                    }
                  ]
                },
                "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
                "rrdatas": [
                  "string"
                ],
                "signatureRrdatas": [
                  "string"
                ],
                "weight": 0
              }
            ],
            "kind": "dns#rRSetRoutingPolicyWrrPolicy"
          }
        },
        "rrdatas": [
          "string"
        ],
        "signatureRrdatas": [
          "string"
        ],
        "ttl": 0,
        "type": "string"
      }
    ]
  },
  "ruleName": "string"
}
```

A Response Policy Rule is a selector that applies its behavior to queries that match the selector. Selectors are DNS names, which may be wildcards or exact matches. Each DNS query subject to a Response Policy matches at most one ResponsePolicyRule, as identified by the dns_name field with the longest matching suffix.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|behavior|string|false|none|Answer this query with a behavior rather than DNS data.|
|dnsName|string|false|none|The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule.|
|kind|string|false|none|none|
|localData|[ResponsePolicyRuleLocalData](#schemaresponsepolicyrulelocaldata)|false|none|Answer this query directly with DNS data. These ResourceRecordSets override any other DNS behavior for the matched name; in particular they override private zones, the public internet, and GCP internal DNS. No SOA nor NS types are allowed.|
|ruleName|string|false|none|An identifier for this rule. Must be unique with the ResponsePolicy.|

#### Enumerated Values

|Property|Value|
|---|---|
|behavior|BEHAVIOR_UNSPECIFIED|
|behavior|BYPASS_RESPONSE_POLICY|

<h2 id="tocS_ResponsePolicyRuleLocalData">ResponsePolicyRuleLocalData</h2>
<!-- backwards compatibility -->
<a id="schemaresponsepolicyrulelocaldata"></a>
<a id="schema_ResponsePolicyRuleLocalData"></a>
<a id="tocSresponsepolicyrulelocaldata"></a>
<a id="tocsresponsepolicyrulelocaldata"></a>

```json
{
  "localDatas": [
    {
      "kind": "dns#resourceRecordSet",
      "name": "string",
      "routingPolicy": {
        "geo": {
          "enableFencing": true,
          "items": [
            {
              "healthCheckedTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
              "location": "string",
              "rrdatas": [
                "string"
              ],
              "signatureRrdatas": [
                "string"
              ]
            }
          ],
          "kind": "dns#rRSetRoutingPolicyGeoPolicy"
        },
        "healthCheck": "string",
        "kind": "dns#rRSetRoutingPolicy",
        "primaryBackup": {
          "backupGeoTargets": {
            "enableFencing": true,
            "items": [
              {
                "healthCheckedTargets": {
                  "externalEndpoints": [
                    "string"
                  ],
                  "internalLoadBalancers": [
                    {
                      "ipAddress": "string",
                      "ipProtocol": "UNDEFINED",
                      "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                      "loadBalancerType": "NONE",
                      "networkUrl": "string",
                      "port": "string",
                      "project": "string",
                      "region": "string"
                    }
                  ]
                },
                "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                "location": "string",
                "rrdatas": [
                  "string"
                ],
                "signatureRrdatas": [
                  "string"
                ]
              }
            ],
            "kind": "dns#rRSetRoutingPolicyGeoPolicy"
          },
          "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
          "primaryTargets": {
            "externalEndpoints": [
              "string"
            ],
            "internalLoadBalancers": [
              {
                "ipAddress": "string",
                "ipProtocol": "UNDEFINED",
                "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                "loadBalancerType": "NONE",
                "networkUrl": "string",
                "port": "string",
                "project": "string",
                "region": "string"
              }
            ]
          },
          "trickleTraffic": 0
        },
        "wrr": {
          "items": [
            {
              "healthCheckedTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
              "rrdatas": [
                "string"
              ],
              "signatureRrdatas": [
                "string"
              ],
              "weight": 0
            }
          ],
          "kind": "dns#rRSetRoutingPolicyWrrPolicy"
        }
      },
      "rrdatas": [
        "string"
      ],
      "signatureRrdatas": [
        "string"
      ],
      "ttl": 0,
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|localDatas|[[ResourceRecordSet](#schemaresourcerecordset)]|false|none|All resource record sets for this selector, one per resource record type. The name must match the dns_name.|

<h2 id="tocS_ResponsePolicyRulesListResponse">ResponsePolicyRulesListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresponsepolicyruleslistresponse"></a>
<a id="schema_ResponsePolicyRulesListResponse"></a>
<a id="tocSresponsepolicyruleslistresponse"></a>
<a id="tocsresponsepolicyruleslistresponse"></a>

```json
{
  "header": {
    "operationId": "string"
  },
  "nextPageToken": "string",
  "responsePolicyRules": [
    {
      "behavior": "BEHAVIOR_UNSPECIFIED",
      "dnsName": "string",
      "kind": "dns#responsePolicyRule",
      "localData": {
        "localDatas": [
          {
            "kind": "dns#resourceRecordSet",
            "name": "string",
            "routingPolicy": {
              "geo": {
                "enableFencing": true,
                "items": [
                  {
                    "healthCheckedTargets": {
                      "externalEndpoints": [
                        "string"
                      ],
                      "internalLoadBalancers": [
                        {
                          "ipAddress": "string",
                          "ipProtocol": "UNDEFINED",
                          "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                          "loadBalancerType": "NONE",
                          "networkUrl": "string",
                          "port": "string",
                          "project": "string",
                          "region": "string"
                        }
                      ]
                    },
                    "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                    "location": "string",
                    "rrdatas": [
                      "string"
                    ],
                    "signatureRrdatas": [
                      "string"
                    ]
                  }
                ],
                "kind": "dns#rRSetRoutingPolicyGeoPolicy"
              },
              "healthCheck": "string",
              "kind": "dns#rRSetRoutingPolicy",
              "primaryBackup": {
                "backupGeoTargets": {
                  "enableFencing": true,
                  "items": [
                    {
                      "healthCheckedTargets": {
                        "externalEndpoints": [
                          "string"
                        ],
                        "internalLoadBalancers": [
                          {
                            "ipAddress": "string",
                            "ipProtocol": "UNDEFINED",
                            "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                            "loadBalancerType": "NONE",
                            "networkUrl": "string",
                            "port": "string",
                            "project": "string",
                            "region": "string"
                          }
                        ]
                      },
                      "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                      "location": "string",
                      "rrdatas": [
                        "string"
                      ],
                      "signatureRrdatas": [
                        "string"
                      ]
                    }
                  ],
                  "kind": "dns#rRSetRoutingPolicyGeoPolicy"
                },
                "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
                "primaryTargets": {
                  "externalEndpoints": [
                    "string"
                  ],
                  "internalLoadBalancers": [
                    {
                      "ipAddress": "string",
                      "ipProtocol": "UNDEFINED",
                      "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                      "loadBalancerType": "NONE",
                      "networkUrl": "string",
                      "port": "string",
                      "project": "string",
                      "region": "string"
                    }
                  ]
                },
                "trickleTraffic": 0
              },
              "wrr": {
                "items": [
                  {
                    "healthCheckedTargets": {
                      "externalEndpoints": [
                        "string"
                      ],
                      "internalLoadBalancers": [
                        {
                          "ipAddress": "string",
                          "ipProtocol": "UNDEFINED",
                          "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                          "loadBalancerType": "NONE",
                          "networkUrl": "string",
                          "port": "string",
                          "project": "string",
                          "region": "string"
                        }
                      ]
                    },
                    "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
                    "rrdatas": [
                      "string"
                    ],
                    "signatureRrdatas": [
                      "string"
                    ],
                    "weight": 0
                  }
                ],
                "kind": "dns#rRSetRoutingPolicyWrrPolicy"
              }
            },
            "rrdatas": [
              "string"
            ],
            "signatureRrdatas": [
              "string"
            ],
            "ttl": 0,
            "type": "string"
          }
        ]
      },
      "ruleName": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header|[ResponseHeader](#schemaresponseheader)|false|none|Elements common to every response.|
|nextPageToken|string|false|none|The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token. This lets you the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size.|
|responsePolicyRules|[[ResponsePolicyRule](#schemaresponsepolicyrule)]|false|none|The Response Policy Rule resources.|

<h2 id="tocS_ResponsePolicyRulesPatchResponse">ResponsePolicyRulesPatchResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresponsepolicyrulespatchresponse"></a>
<a id="schema_ResponsePolicyRulesPatchResponse"></a>
<a id="tocSresponsepolicyrulespatchresponse"></a>
<a id="tocsresponsepolicyrulespatchresponse"></a>

```json
{
  "header": {
    "operationId": "string"
  },
  "responsePolicyRule": {
    "behavior": "BEHAVIOR_UNSPECIFIED",
    "dnsName": "string",
    "kind": "dns#responsePolicyRule",
    "localData": {
      "localDatas": [
        {
          "kind": "dns#resourceRecordSet",
          "name": "string",
          "routingPolicy": {
            "geo": {
              "enableFencing": true,
              "items": [
                {
                  "healthCheckedTargets": {
                    "externalEndpoints": [
                      "string"
                    ],
                    "internalLoadBalancers": [
                      {
                        "ipAddress": "string",
                        "ipProtocol": "UNDEFINED",
                        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                        "loadBalancerType": "NONE",
                        "networkUrl": "string",
                        "port": "string",
                        "project": "string",
                        "region": "string"
                      }
                    ]
                  },
                  "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                  "location": "string",
                  "rrdatas": [
                    "string"
                  ],
                  "signatureRrdatas": [
                    "string"
                  ]
                }
              ],
              "kind": "dns#rRSetRoutingPolicyGeoPolicy"
            },
            "healthCheck": "string",
            "kind": "dns#rRSetRoutingPolicy",
            "primaryBackup": {
              "backupGeoTargets": {
                "enableFencing": true,
                "items": [
                  {
                    "healthCheckedTargets": {
                      "externalEndpoints": [
                        "string"
                      ],
                      "internalLoadBalancers": [
                        {
                          "ipAddress": "string",
                          "ipProtocol": "UNDEFINED",
                          "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                          "loadBalancerType": "NONE",
                          "networkUrl": "string",
                          "port": "string",
                          "project": "string",
                          "region": "string"
                        }
                      ]
                    },
                    "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                    "location": "string",
                    "rrdatas": [
                      "string"
                    ],
                    "signatureRrdatas": [
                      "string"
                    ]
                  }
                ],
                "kind": "dns#rRSetRoutingPolicyGeoPolicy"
              },
              "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
              "primaryTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "trickleTraffic": 0
            },
            "wrr": {
              "items": [
                {
                  "healthCheckedTargets": {
                    "externalEndpoints": [
                      "string"
                    ],
                    "internalLoadBalancers": [
                      {
                        "ipAddress": "string",
                        "ipProtocol": "UNDEFINED",
                        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                        "loadBalancerType": "NONE",
                        "networkUrl": "string",
                        "port": "string",
                        "project": "string",
                        "region": "string"
                      }
                    ]
                  },
                  "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
                  "rrdatas": [
                    "string"
                  ],
                  "signatureRrdatas": [
                    "string"
                  ],
                  "weight": 0
                }
              ],
              "kind": "dns#rRSetRoutingPolicyWrrPolicy"
            }
          },
          "rrdatas": [
            "string"
          ],
          "signatureRrdatas": [
            "string"
          ],
          "ttl": 0,
          "type": "string"
        }
      ]
    },
    "ruleName": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header|[ResponseHeader](#schemaresponseheader)|false|none|Elements common to every response.|
|responsePolicyRule|[ResponsePolicyRule](#schemaresponsepolicyrule)|false|none|A Response Policy Rule is a selector that applies its behavior to queries that match the selector. Selectors are DNS names, which may be wildcards or exact matches. Each DNS query subject to a Response Policy matches at most one ResponsePolicyRule, as identified by the dns_name field with the longest matching suffix.|

<h2 id="tocS_ResponsePolicyRulesUpdateResponse">ResponsePolicyRulesUpdateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresponsepolicyrulesupdateresponse"></a>
<a id="schema_ResponsePolicyRulesUpdateResponse"></a>
<a id="tocSresponsepolicyrulesupdateresponse"></a>
<a id="tocsresponsepolicyrulesupdateresponse"></a>

```json
{
  "header": {
    "operationId": "string"
  },
  "responsePolicyRule": {
    "behavior": "BEHAVIOR_UNSPECIFIED",
    "dnsName": "string",
    "kind": "dns#responsePolicyRule",
    "localData": {
      "localDatas": [
        {
          "kind": "dns#resourceRecordSet",
          "name": "string",
          "routingPolicy": {
            "geo": {
              "enableFencing": true,
              "items": [
                {
                  "healthCheckedTargets": {
                    "externalEndpoints": [
                      "string"
                    ],
                    "internalLoadBalancers": [
                      {
                        "ipAddress": "string",
                        "ipProtocol": "UNDEFINED",
                        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                        "loadBalancerType": "NONE",
                        "networkUrl": "string",
                        "port": "string",
                        "project": "string",
                        "region": "string"
                      }
                    ]
                  },
                  "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                  "location": "string",
                  "rrdatas": [
                    "string"
                  ],
                  "signatureRrdatas": [
                    "string"
                  ]
                }
              ],
              "kind": "dns#rRSetRoutingPolicyGeoPolicy"
            },
            "healthCheck": "string",
            "kind": "dns#rRSetRoutingPolicy",
            "primaryBackup": {
              "backupGeoTargets": {
                "enableFencing": true,
                "items": [
                  {
                    "healthCheckedTargets": {
                      "externalEndpoints": [
                        "string"
                      ],
                      "internalLoadBalancers": [
                        {
                          "ipAddress": "string",
                          "ipProtocol": "UNDEFINED",
                          "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                          "loadBalancerType": "NONE",
                          "networkUrl": "string",
                          "port": "string",
                          "project": "string",
                          "region": "string"
                        }
                      ]
                    },
                    "kind": "dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem",
                    "location": "string",
                    "rrdatas": [
                      "string"
                    ],
                    "signatureRrdatas": [
                      "string"
                    ]
                  }
                ],
                "kind": "dns#rRSetRoutingPolicyGeoPolicy"
              },
              "kind": "dns#rRSetRoutingPolicyPrimaryBackupPolicy",
              "primaryTargets": {
                "externalEndpoints": [
                  "string"
                ],
                "internalLoadBalancers": [
                  {
                    "ipAddress": "string",
                    "ipProtocol": "UNDEFINED",
                    "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                    "loadBalancerType": "NONE",
                    "networkUrl": "string",
                    "port": "string",
                    "project": "string",
                    "region": "string"
                  }
                ]
              },
              "trickleTraffic": 0
            },
            "wrr": {
              "items": [
                {
                  "healthCheckedTargets": {
                    "externalEndpoints": [
                      "string"
                    ],
                    "internalLoadBalancers": [
                      {
                        "ipAddress": "string",
                        "ipProtocol": "UNDEFINED",
                        "kind": "dns#rRSetRoutingPolicyLoadBalancerTarget",
                        "loadBalancerType": "NONE",
                        "networkUrl": "string",
                        "port": "string",
                        "project": "string",
                        "region": "string"
                      }
                    ]
                  },
                  "kind": "dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem",
                  "rrdatas": [
                    "string"
                  ],
                  "signatureRrdatas": [
                    "string"
                  ],
                  "weight": 0
                }
              ],
              "kind": "dns#rRSetRoutingPolicyWrrPolicy"
            }
          },
          "rrdatas": [
            "string"
          ],
          "signatureRrdatas": [
            "string"
          ],
          "ttl": 0,
          "type": "string"
        }
      ]
    },
    "ruleName": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header|[ResponseHeader](#schemaresponseheader)|false|none|Elements common to every response.|
|responsePolicyRule|[ResponsePolicyRule](#schemaresponsepolicyrule)|false|none|A Response Policy Rule is a selector that applies its behavior to queries that match the selector. Selectors are DNS names, which may be wildcards or exact matches. Each DNS query subject to a Response Policy matches at most one ResponsePolicyRule, as identified by the dns_name field with the longest matching suffix.|
