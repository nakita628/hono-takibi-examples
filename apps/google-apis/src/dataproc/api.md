<h1 id="cloud-dataproc-api">Cloud Dataproc API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Manages Hadoop-based clusters and jobs on Google Cloud Platform.

Base URLs:

* <a href="https://dataproc.googleapis.com/">https://dataproc.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/dataproc/">External documentation</a>

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

<h1 id="cloud-dataproc-api-projects">projects</h1>

## dataproc.projects.regions.clusters.list

<a id="opIddataproc.projects.regions.clusters.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/regions/string/clusters \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{projectId}/regions/{region}/clusters`

Lists all regions/{region}/clusters in a project alphabetically.

<h3 id="dataprocprojectsregionsclusterslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. The ID of the Google Cloud Platform project that the cluster belongs to.|
|region|path|string|true|Required. The Dataproc region in which to handle the request.|
|filter|query|string|false|Optional. A filter constraining the clusters to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is one of status.state, clusterName, or labels.[KEY], and [KEY] is a label key. value can be * to match all values. status.state can be one of the following: ACTIVE, INACTIVE, CREATING, RUNNING, ERROR, DELETING, or UPDATING. ACTIVE contains the CREATING, UPDATING, and RUNNING states. INACTIVE contains the DELETING and ERROR states. clusterName is the name of the cluster provided at creation time. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND clusterName = mycluster AND labels.env = staging AND labels.starred = *|
|pageSize|query|integer|false|Optional. The standard List page size.|
|pageToken|query|string|false|Optional. The standard List page token.|
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
  "clusters": [
    {
      "clusterName": "string",
      "clusterUuid": "string",
      "config": {
        "autoscalingConfig": {
          "policyUri": "string"
        },
        "auxiliaryNodeGroups": [
          {
            "nodeGroup": {
              "labels": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string",
              "nodeGroupConfig": {
                "accelerators": [
                  {
                    "acceleratorCount": 0,
                    "acceleratorTypeUri": "string"
                  }
                ],
                "diskConfig": {
                  "bootDiskSizeGb": 0,
                  "bootDiskType": "string",
                  "localSsdInterface": "string",
                  "numLocalSsds": 0
                },
                "imageUri": "string",
                "instanceNames": [
                  "string"
                ],
                "instanceReferences": [
                  {
                    "instanceId": "string",
                    "instanceName": "string",
                    "publicEciesKey": "string",
                    "publicKey": "string"
                  }
                ],
                "isPreemptible": true,
                "machineTypeUri": "string",
                "managedGroupConfig": {
                  "instanceGroupManagerName": "string",
                  "instanceTemplateName": "string"
                },
                "minCpuPlatform": "string",
                "numInstances": 0,
                "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
              },
              "roles": [
                "ROLE_UNSPECIFIED"
              ]
            },
            "nodeGroupId": "string"
          }
        ],
        "configBucket": "string",
        "dataprocMetricConfig": {
          "metrics": [
            {
              "metricOverrides": [
                "string"
              ],
              "metricSource": "METRIC_SOURCE_UNSPECIFIED"
            }
          ]
        },
        "encryptionConfig": {
          "gcePdKmsKeyName": "string",
          "kmsKey": "string"
        },
        "endpointConfig": {
          "enableHttpPortAccess": true,
          "httpPorts": {
            "property1": "string",
            "property2": "string"
          }
        },
        "gceClusterConfig": {
          "confidentialInstanceConfig": {
            "enableConfidentialCompute": true
          },
          "internalIpOnly": true,
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "networkUri": "string",
          "nodeGroupAffinity": {
            "nodeGroupUri": "string"
          },
          "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
          "reservationAffinity": {
            "consumeReservationType": "TYPE_UNSPECIFIED",
            "key": "string",
            "values": [
              "string"
            ]
          },
          "serviceAccount": "string",
          "serviceAccountScopes": [
            "string"
          ],
          "shieldedInstanceConfig": {
            "enableIntegrityMonitoring": true,
            "enableSecureBoot": true,
            "enableVtpm": true
          },
          "subnetworkUri": "string",
          "tags": [
            "string"
          ],
          "zoneUri": "string"
        },
        "gkeClusterConfig": {
          "gkeClusterTarget": "string",
          "namespacedGkeDeploymentTarget": {
            "clusterNamespace": "string",
            "targetGkeCluster": "string"
          },
          "nodePoolTarget": [
            {
              "nodePool": "string",
              "nodePoolConfig": {
                "autoscaling": {
                  "maxNodeCount": 0,
                  "minNodeCount": 0
                },
                "config": {
                  "accelerators": [
                    {
                      "acceleratorCount": "string",
                      "acceleratorType": "string",
                      "gpuPartitionSize": "string"
                    }
                  ],
                  "bootDiskKmsKey": "string",
                  "localSsdCount": 0,
                  "machineType": "string",
                  "minCpuPlatform": "string",
                  "preemptible": true,
                  "spot": true
                },
                "locations": [
                  "string"
                ]
              },
              "roles": [
                "ROLE_UNSPECIFIED"
              ]
            }
          ]
        },
        "initializationActions": [
          {
            "executableFile": "string",
            "executionTimeout": "string"
          }
        ],
        "lifecycleConfig": {
          "autoDeleteTime": "string",
          "autoDeleteTtl": "string",
          "idleDeleteTtl": "string",
          "idleStartTime": "string"
        },
        "masterConfig": {
          "accelerators": [
            {
              "acceleratorCount": 0,
              "acceleratorTypeUri": "string"
            }
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string",
            "localSsdInterface": "string",
            "numLocalSsds": 0
          },
          "imageUri": "string",
          "instanceNames": [
            "string"
          ],
          "instanceReferences": [
            {
              "instanceId": "string",
              "instanceName": "string",
              "publicEciesKey": "string",
              "publicKey": "string"
            }
          ],
          "isPreemptible": true,
          "machineTypeUri": "string",
          "managedGroupConfig": {
            "instanceGroupManagerName": "string",
            "instanceTemplateName": "string"
          },
          "minCpuPlatform": "string",
          "numInstances": 0,
          "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
        },
        "metastoreConfig": {
          "dataprocMetastoreService": "string"
        },
        "secondaryWorkerConfig": {
          "accelerators": [
            {
              "acceleratorCount": 0,
              "acceleratorTypeUri": "string"
            }
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string",
            "localSsdInterface": "string",
            "numLocalSsds": 0
          },
          "imageUri": "string",
          "instanceNames": [
            "string"
          ],
          "instanceReferences": [
            {
              "instanceId": "string",
              "instanceName": "string",
              "publicEciesKey": "string",
              "publicKey": "string"
            }
          ],
          "isPreemptible": true,
          "machineTypeUri": "string",
          "managedGroupConfig": {
            "instanceGroupManagerName": "string",
            "instanceTemplateName": "string"
          },
          "minCpuPlatform": "string",
          "numInstances": 0,
          "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
        },
        "securityConfig": {
          "identityConfig": {
            "userServiceAccountMapping": {
              "property1": "string",
              "property2": "string"
            }
          },
          "kerberosConfig": {
            "crossRealmTrustAdminServer": "string",
            "crossRealmTrustKdc": "string",
            "crossRealmTrustRealm": "string",
            "crossRealmTrustSharedPasswordUri": "string",
            "enableKerberos": true,
            "kdcDbKeyUri": "string",
            "keyPasswordUri": "string",
            "keystorePasswordUri": "string",
            "keystoreUri": "string",
            "kmsKeyUri": "string",
            "realm": "string",
            "rootPrincipalPasswordUri": "string",
            "tgtLifetimeHours": 0,
            "truststorePasswordUri": "string",
            "truststoreUri": "string"
          }
        },
        "softwareConfig": {
          "imageVersion": "string",
          "optionalComponents": [
            "COMPONENT_UNSPECIFIED"
          ],
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        },
        "tempBucket": "string",
        "workerConfig": {
          "accelerators": [
            {
              "acceleratorCount": 0,
              "acceleratorTypeUri": "string"
            }
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string",
            "localSsdInterface": "string",
            "numLocalSsds": 0
          },
          "imageUri": "string",
          "instanceNames": [
            "string"
          ],
          "instanceReferences": [
            {
              "instanceId": "string",
              "instanceName": "string",
              "publicEciesKey": "string",
              "publicKey": "string"
            }
          ],
          "isPreemptible": true,
          "machineTypeUri": "string",
          "managedGroupConfig": {
            "instanceGroupManagerName": "string",
            "instanceTemplateName": "string"
          },
          "minCpuPlatform": "string",
          "numInstances": 0,
          "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
        }
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "metrics": {
        "hdfsMetrics": {
          "property1": "string",
          "property2": "string"
        },
        "yarnMetrics": {
          "property1": "string",
          "property2": "string"
        }
      },
      "projectId": "string",
      "status": {
        "detail": "string",
        "state": "UNKNOWN",
        "stateStartTime": "string",
        "substate": "UNSPECIFIED"
      },
      "statusHistory": [
        {
          "detail": "string",
          "state": "UNKNOWN",
          "stateStartTime": "string",
          "substate": "UNSPECIFIED"
        }
      ],
      "virtualClusterConfig": {
        "auxiliaryServicesConfig": {
          "metastoreConfig": {
            "dataprocMetastoreService": "string"
          },
          "sparkHistoryServerConfig": {
            "dataprocCluster": "string"
          }
        },
        "kubernetesClusterConfig": {
          "gkeClusterConfig": {
            "gkeClusterTarget": "string",
            "namespacedGkeDeploymentTarget": {
              "clusterNamespace": "string",
              "targetGkeCluster": "string"
            },
            "nodePoolTarget": [
              {
                "nodePool": "string",
                "nodePoolConfig": {
                  "autoscaling": {
                    "maxNodeCount": 0,
                    "minNodeCount": 0
                  },
                  "config": {
                    "accelerators": [
                      {
                        "acceleratorCount": "string",
                        "acceleratorType": "string",
                        "gpuPartitionSize": "string"
                      }
                    ],
                    "bootDiskKmsKey": "string",
                    "localSsdCount": 0,
                    "machineType": "string",
                    "minCpuPlatform": "string",
                    "preemptible": true,
                    "spot": true
                  },
                  "locations": [
                    "string"
                  ]
                },
                "roles": [
                  "ROLE_UNSPECIFIED"
                ]
              }
            ]
          },
          "kubernetesNamespace": "string",
          "kubernetesSoftwareConfig": {
            "componentVersion": {
              "property1": "string",
              "property2": "string"
            },
            "properties": {
              "property1": "string",
              "property2": "string"
            }
          }
        },
        "stagingBucket": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="dataprocprojectsregionsclusterslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListClustersResponse](#schemalistclustersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.clusters.create

<a id="opIddataproc.projects.regions.clusters.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/regions/string/clusters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterName": "string",
    "config": {
      "autoscalingConfig": {
        "policyUri": "string"
      },
      "auxiliaryNodeGroups": [
        {
          "nodeGroup": {
            "labels": {
              "property1": "string",
              "property2": "string"
            },
            "name": "string",
            "nodeGroupConfig": {
              "accelerators": [
                {
                  "acceleratorCount": 0,
                  "acceleratorTypeUri": "string"
                }
              ],
              "diskConfig": {
                "bootDiskSizeGb": 0,
                "bootDiskType": "string",
                "localSsdInterface": "string",
                "numLocalSsds": 0
              },
              "imageUri": "string",
              "machineTypeUri": "string",
              "minCpuPlatform": "string",
              "numInstances": 0,
              "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
            },
            "roles": [
              "ROLE_UNSPECIFIED"
            ]
          },
          "nodeGroupId": "string"
        }
      ],
      "configBucket": "string",
      "dataprocMetricConfig": {
        "metrics": [
          {
            "metricOverrides": [
              "string"
            ],
            "metricSource": "METRIC_SOURCE_UNSPECIFIED"
          }
        ]
      },
      "encryptionConfig": {
        "gcePdKmsKeyName": "string",
        "kmsKey": "string"
      },
      "endpointConfig": {
        "enableHttpPortAccess": true
      },
      "gceClusterConfig": {
        "confidentialInstanceConfig": {
          "enableConfidentialCompute": true
        },
        "internalIpOnly": true,
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "networkUri": "string",
        "nodeGroupAffinity": {
          "nodeGroupUri": "string"
        },
        "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
        "reservationAffinity": {
          "consumeReservationType": "TYPE_UNSPECIFIED",
          "key": "string",
          "values": [
            "string"
          ]
        },
        "serviceAccount": "string",
        "serviceAccountScopes": [
          "string"
        ],
        "shieldedInstanceConfig": {
          "enableIntegrityMonitoring": true,
          "enableSecureBoot": true,
          "enableVtpm": true
        },
        "subnetworkUri": "string",
        "tags": [
          "string"
        ],
        "zoneUri": "string"
      },
      "gkeClusterConfig": {
        "gkeClusterTarget": "string",
        "namespacedGkeDeploymentTarget": {
          "clusterNamespace": "string",
          "targetGkeCluster": "string"
        },
        "nodePoolTarget": [
          {
            "nodePool": "string",
            "nodePoolConfig": {
              "autoscaling": {
                "maxNodeCount": 0,
                "minNodeCount": 0
              },
              "config": {
                "accelerators": [
                  {
                    "acceleratorCount": "string",
                    "acceleratorType": "string",
                    "gpuPartitionSize": "string"
                  }
                ],
                "bootDiskKmsKey": "string",
                "localSsdCount": 0,
                "machineType": "string",
                "minCpuPlatform": "string",
                "preemptible": true,
                "spot": true
              },
              "locations": [
                "string"
              ]
            },
            "roles": [
              "ROLE_UNSPECIFIED"
            ]
          }
        ]
      },
      "initializationActions": [
        {
          "executableFile": "string",
          "executionTimeout": "string"
        }
      ],
      "lifecycleConfig": {
        "autoDeleteTime": "string",
        "autoDeleteTtl": "string",
        "idleDeleteTtl": "string"
      },
      "masterConfig": {
        "accelerators": [
          {
            "acceleratorCount": 0,
            "acceleratorTypeUri": "string"
          }
        ],
        "diskConfig": {
          "bootDiskSizeGb": 0,
          "bootDiskType": "string",
          "localSsdInterface": "string",
          "numLocalSsds": 0
        },
        "imageUri": "string",
        "machineTypeUri": "string",
        "minCpuPlatform": "string",
        "numInstances": 0,
        "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
      },
      "metastoreConfig": {
        "dataprocMetastoreService": "string"
      },
      "secondaryWorkerConfig": {
        "accelerators": [
          {
            "acceleratorCount": 0,
            "acceleratorTypeUri": "string"
          }
        ],
        "diskConfig": {
          "bootDiskSizeGb": 0,
          "bootDiskType": "string",
          "localSsdInterface": "string",
          "numLocalSsds": 0
        },
        "imageUri": "string",
        "machineTypeUri": "string",
        "minCpuPlatform": "string",
        "numInstances": 0,
        "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
      },
      "securityConfig": {
        "identityConfig": {
          "userServiceAccountMapping": {
            "property1": "string",
            "property2": "string"
          }
        },
        "kerberosConfig": {
          "crossRealmTrustAdminServer": "string",
          "crossRealmTrustKdc": "string",
          "crossRealmTrustRealm": "string",
          "crossRealmTrustSharedPasswordUri": "string",
          "enableKerberos": true,
          "kdcDbKeyUri": "string",
          "keyPasswordUri": "string",
          "keystorePasswordUri": "string",
          "keystoreUri": "string",
          "kmsKeyUri": "string",
          "realm": "string",
          "rootPrincipalPasswordUri": "string",
          "tgtLifetimeHours": 0,
          "truststorePasswordUri": "string",
          "truststoreUri": "string"
        }
      },
      "softwareConfig": {
        "imageVersion": "string",
        "optionalComponents": [
          "COMPONENT_UNSPECIFIED"
        ],
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "tempBucket": "string",
      "workerConfig": {
        "accelerators": [
          {
            "acceleratorCount": 0,
            "acceleratorTypeUri": "string"
          }
        ],
        "diskConfig": {
          "bootDiskSizeGb": 0,
          "bootDiskType": "string",
          "localSsdInterface": "string",
          "numLocalSsds": 0
        },
        "imageUri": "string",
        "machineTypeUri": "string",
        "minCpuPlatform": "string",
        "numInstances": 0,
        "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
      }
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "projectId": "string",
    "virtualClusterConfig": {
      "auxiliaryServicesConfig": {
        "metastoreConfig": {
          "dataprocMetastoreService": "string"
        },
        "sparkHistoryServerConfig": {
          "dataprocCluster": "string"
        }
      },
      "kubernetesClusterConfig": {
        "gkeClusterConfig": {
          "gkeClusterTarget": "string",
          "namespacedGkeDeploymentTarget": {
            "clusterNamespace": "string",
            "targetGkeCluster": "string"
          },
          "nodePoolTarget": [
            {
              "nodePool": "string",
              "nodePoolConfig": {
                "autoscaling": {
                  "maxNodeCount": 0,
                  "minNodeCount": 0
                },
                "config": {
                  "accelerators": [
                    {
                      "acceleratorCount": "string",
                      "acceleratorType": "string",
                      "gpuPartitionSize": "string"
                    }
                  ],
                  "bootDiskKmsKey": "string",
                  "localSsdCount": 0,
                  "machineType": "string",
                  "minCpuPlatform": "string",
                  "preemptible": true,
                  "spot": true
                },
                "locations": [
                  "string"
                ]
              },
              "roles": [
                "ROLE_UNSPECIFIED"
              ]
            }
          ]
        },
        "kubernetesNamespace": "string",
        "kubernetesSoftwareConfig": {
          "componentVersion": {
            "property1": "string",
            "property2": "string"
          },
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "stagingBucket": "string"
    }
  }'
```

`POST /v1/projects/{projectId}/regions/{region}/clusters`

Creates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).

> Body parameter

```json
{
  "clusterName": "string",
  "config": {
    "autoscalingConfig": {
      "policyUri": "string"
    },
    "auxiliaryNodeGroups": [
      {
        "nodeGroup": {
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "name": "string",
          "nodeGroupConfig": {
            "accelerators": [
              {
                "acceleratorCount": 0,
                "acceleratorTypeUri": "string"
              }
            ],
            "diskConfig": {
              "bootDiskSizeGb": 0,
              "bootDiskType": "string",
              "localSsdInterface": "string",
              "numLocalSsds": 0
            },
            "imageUri": "string",
            "machineTypeUri": "string",
            "minCpuPlatform": "string",
            "numInstances": 0,
            "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
          },
          "roles": [
            "ROLE_UNSPECIFIED"
          ]
        },
        "nodeGroupId": "string"
      }
    ],
    "configBucket": "string",
    "dataprocMetricConfig": {
      "metrics": [
        {
          "metricOverrides": [
            "string"
          ],
          "metricSource": "METRIC_SOURCE_UNSPECIFIED"
        }
      ]
    },
    "encryptionConfig": {
      "gcePdKmsKeyName": "string",
      "kmsKey": "string"
    },
    "endpointConfig": {
      "enableHttpPortAccess": true
    },
    "gceClusterConfig": {
      "confidentialInstanceConfig": {
        "enableConfidentialCompute": true
      },
      "internalIpOnly": true,
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "networkUri": "string",
      "nodeGroupAffinity": {
        "nodeGroupUri": "string"
      },
      "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
      "reservationAffinity": {
        "consumeReservationType": "TYPE_UNSPECIFIED",
        "key": "string",
        "values": [
          "string"
        ]
      },
      "serviceAccount": "string",
      "serviceAccountScopes": [
        "string"
      ],
      "shieldedInstanceConfig": {
        "enableIntegrityMonitoring": true,
        "enableSecureBoot": true,
        "enableVtpm": true
      },
      "subnetworkUri": "string",
      "tags": [
        "string"
      ],
      "zoneUri": "string"
    },
    "gkeClusterConfig": {
      "gkeClusterTarget": "string",
      "namespacedGkeDeploymentTarget": {
        "clusterNamespace": "string",
        "targetGkeCluster": "string"
      },
      "nodePoolTarget": [
        {
          "nodePool": "string",
          "nodePoolConfig": {
            "autoscaling": {
              "maxNodeCount": 0,
              "minNodeCount": 0
            },
            "config": {
              "accelerators": [
                {
                  "acceleratorCount": "string",
                  "acceleratorType": "string",
                  "gpuPartitionSize": "string"
                }
              ],
              "bootDiskKmsKey": "string",
              "localSsdCount": 0,
              "machineType": "string",
              "minCpuPlatform": "string",
              "preemptible": true,
              "spot": true
            },
            "locations": [
              "string"
            ]
          },
          "roles": [
            "ROLE_UNSPECIFIED"
          ]
        }
      ]
    },
    "initializationActions": [
      {
        "executableFile": "string",
        "executionTimeout": "string"
      }
    ],
    "lifecycleConfig": {
      "autoDeleteTime": "string",
      "autoDeleteTtl": "string",
      "idleDeleteTtl": "string"
    },
    "masterConfig": {
      "accelerators": [
        {
          "acceleratorCount": 0,
          "acceleratorTypeUri": "string"
        }
      ],
      "diskConfig": {
        "bootDiskSizeGb": 0,
        "bootDiskType": "string",
        "localSsdInterface": "string",
        "numLocalSsds": 0
      },
      "imageUri": "string",
      "machineTypeUri": "string",
      "minCpuPlatform": "string",
      "numInstances": 0,
      "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
    },
    "metastoreConfig": {
      "dataprocMetastoreService": "string"
    },
    "secondaryWorkerConfig": {
      "accelerators": [
        {
          "acceleratorCount": 0,
          "acceleratorTypeUri": "string"
        }
      ],
      "diskConfig": {
        "bootDiskSizeGb": 0,
        "bootDiskType": "string",
        "localSsdInterface": "string",
        "numLocalSsds": 0
      },
      "imageUri": "string",
      "machineTypeUri": "string",
      "minCpuPlatform": "string",
      "numInstances": 0,
      "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
    },
    "securityConfig": {
      "identityConfig": {
        "userServiceAccountMapping": {
          "property1": "string",
          "property2": "string"
        }
      },
      "kerberosConfig": {
        "crossRealmTrustAdminServer": "string",
        "crossRealmTrustKdc": "string",
        "crossRealmTrustRealm": "string",
        "crossRealmTrustSharedPasswordUri": "string",
        "enableKerberos": true,
        "kdcDbKeyUri": "string",
        "keyPasswordUri": "string",
        "keystorePasswordUri": "string",
        "keystoreUri": "string",
        "kmsKeyUri": "string",
        "realm": "string",
        "rootPrincipalPasswordUri": "string",
        "tgtLifetimeHours": 0,
        "truststorePasswordUri": "string",
        "truststoreUri": "string"
      }
    },
    "softwareConfig": {
      "imageVersion": "string",
      "optionalComponents": [
        "COMPONENT_UNSPECIFIED"
      ],
      "properties": {
        "property1": "string",
        "property2": "string"
      }
    },
    "tempBucket": "string",
    "workerConfig": {
      "accelerators": [
        {
          "acceleratorCount": 0,
          "acceleratorTypeUri": "string"
        }
      ],
      "diskConfig": {
        "bootDiskSizeGb": 0,
        "bootDiskType": "string",
        "localSsdInterface": "string",
        "numLocalSsds": 0
      },
      "imageUri": "string",
      "machineTypeUri": "string",
      "minCpuPlatform": "string",
      "numInstances": 0,
      "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "projectId": "string",
  "virtualClusterConfig": {
    "auxiliaryServicesConfig": {
      "metastoreConfig": {
        "dataprocMetastoreService": "string"
      },
      "sparkHistoryServerConfig": {
        "dataprocCluster": "string"
      }
    },
    "kubernetesClusterConfig": {
      "gkeClusterConfig": {
        "gkeClusterTarget": "string",
        "namespacedGkeDeploymentTarget": {
          "clusterNamespace": "string",
          "targetGkeCluster": "string"
        },
        "nodePoolTarget": [
          {
            "nodePool": "string",
            "nodePoolConfig": {
              "autoscaling": {
                "maxNodeCount": 0,
                "minNodeCount": 0
              },
              "config": {
                "accelerators": [
                  {
                    "acceleratorCount": "string",
                    "acceleratorType": "string",
                    "gpuPartitionSize": "string"
                  }
                ],
                "bootDiskKmsKey": "string",
                "localSsdCount": 0,
                "machineType": "string",
                "minCpuPlatform": "string",
                "preemptible": true,
                "spot": true
              },
              "locations": [
                "string"
              ]
            },
            "roles": [
              "ROLE_UNSPECIFIED"
            ]
          }
        ]
      },
      "kubernetesNamespace": "string",
      "kubernetesSoftwareConfig": {
        "componentVersion": {
          "property1": "string",
          "property2": "string"
        },
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "stagingBucket": "string"
  }
}
```

<h3 id="dataprocprojectsregionsclusterscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. The ID of the Google Cloud Platform project that the cluster belongs to.|
|region|path|string|true|Required. The Dataproc region in which to handle the request.|
|actionOnFailedPrimaryWorkers|query|string|false|Optional. Failure action when primary worker creation fails.|
|requestId|query|string|false|Optional. A unique ID used to identify the request. If the server receives two CreateClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.|
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
|body|body|[Cluster](#schemacluster)|false|none|
|» clusterName|body|string|false|Required. The cluster name, which must be unique within a project. The name must start with a lowercase letter, and can contain up to 51 lowercase letters, numbers, and hyphens. It cannot end with a hyphen. The name of a deleted cluster can be reused.|
|» config|body|[ClusterConfig](#schemaclusterconfig)|false|Optional. The cluster config for a cluster of Compute Engine Instances. Note that Dataproc may set default values, and values may change when clusters are updated.Exactly one of ClusterConfig or VirtualClusterConfig must be specified.|
|» labels|body|object|false|Optional. The labels to associate with this cluster. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster.|
|» » **additionalProperties**|body|string|false|none|
|» projectId|body|string|false|Required. The Google Cloud Platform project ID that the cluster belongs to.|
|» virtualClusterConfig|body|[VirtualClusterConfig](#schemavirtualclusterconfig)|false|Optional. The virtual cluster config is used when creating a Dataproc cluster that does not directly control the underlying compute resources, for example, when creating a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-overview). Dataproc may set default values, and values may change when clusters are updated. Exactly one of config or virtual_cluster_config must be specified.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|actionOnFailedPrimaryWorkers|FAILURE_ACTION_UNSPECIFIED|
|actionOnFailedPrimaryWorkers|NO_ACTION|
|actionOnFailedPrimaryWorkers|DELETE|
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

<h3 id="dataprocprojectsregionsclusterscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.clusters.get

<a id="opIddataproc.projects.regions.clusters.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/regions/string/clusters/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{projectId}/regions/{region}/clusters/{clusterName}`

Gets the resource representation for a cluster in a project.

<h3 id="dataprocprojectsregionsclustersget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. The ID of the Google Cloud Platform project that the cluster belongs to.|
|region|path|string|true|Required. The Dataproc region in which to handle the request.|
|clusterName|path|string|true|Required. The cluster name.|
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
  "clusterName": "string",
  "clusterUuid": "string",
  "config": {
    "autoscalingConfig": {
      "policyUri": "string"
    },
    "auxiliaryNodeGroups": [
      {
        "nodeGroup": {
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "name": "string",
          "nodeGroupConfig": {
            "accelerators": [
              {
                "acceleratorCount": 0,
                "acceleratorTypeUri": "string"
              }
            ],
            "diskConfig": {
              "bootDiskSizeGb": 0,
              "bootDiskType": "string",
              "localSsdInterface": "string",
              "numLocalSsds": 0
            },
            "imageUri": "string",
            "instanceNames": [
              "string"
            ],
            "instanceReferences": [
              {
                "instanceId": "string",
                "instanceName": "string",
                "publicEciesKey": "string",
                "publicKey": "string"
              }
            ],
            "isPreemptible": true,
            "machineTypeUri": "string",
            "managedGroupConfig": {
              "instanceGroupManagerName": "string",
              "instanceTemplateName": "string"
            },
            "minCpuPlatform": "string",
            "numInstances": 0,
            "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
          },
          "roles": [
            "ROLE_UNSPECIFIED"
          ]
        },
        "nodeGroupId": "string"
      }
    ],
    "configBucket": "string",
    "dataprocMetricConfig": {
      "metrics": [
        {
          "metricOverrides": [
            "string"
          ],
          "metricSource": "METRIC_SOURCE_UNSPECIFIED"
        }
      ]
    },
    "encryptionConfig": {
      "gcePdKmsKeyName": "string",
      "kmsKey": "string"
    },
    "endpointConfig": {
      "enableHttpPortAccess": true,
      "httpPorts": {
        "property1": "string",
        "property2": "string"
      }
    },
    "gceClusterConfig": {
      "confidentialInstanceConfig": {
        "enableConfidentialCompute": true
      },
      "internalIpOnly": true,
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "networkUri": "string",
      "nodeGroupAffinity": {
        "nodeGroupUri": "string"
      },
      "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
      "reservationAffinity": {
        "consumeReservationType": "TYPE_UNSPECIFIED",
        "key": "string",
        "values": [
          "string"
        ]
      },
      "serviceAccount": "string",
      "serviceAccountScopes": [
        "string"
      ],
      "shieldedInstanceConfig": {
        "enableIntegrityMonitoring": true,
        "enableSecureBoot": true,
        "enableVtpm": true
      },
      "subnetworkUri": "string",
      "tags": [
        "string"
      ],
      "zoneUri": "string"
    },
    "gkeClusterConfig": {
      "gkeClusterTarget": "string",
      "namespacedGkeDeploymentTarget": {
        "clusterNamespace": "string",
        "targetGkeCluster": "string"
      },
      "nodePoolTarget": [
        {
          "nodePool": "string",
          "nodePoolConfig": {
            "autoscaling": {
              "maxNodeCount": 0,
              "minNodeCount": 0
            },
            "config": {
              "accelerators": [
                {
                  "acceleratorCount": "string",
                  "acceleratorType": "string",
                  "gpuPartitionSize": "string"
                }
              ],
              "bootDiskKmsKey": "string",
              "localSsdCount": 0,
              "machineType": "string",
              "minCpuPlatform": "string",
              "preemptible": true,
              "spot": true
            },
            "locations": [
              "string"
            ]
          },
          "roles": [
            "ROLE_UNSPECIFIED"
          ]
        }
      ]
    },
    "initializationActions": [
      {
        "executableFile": "string",
        "executionTimeout": "string"
      }
    ],
    "lifecycleConfig": {
      "autoDeleteTime": "string",
      "autoDeleteTtl": "string",
      "idleDeleteTtl": "string",
      "idleStartTime": "string"
    },
    "masterConfig": {
      "accelerators": [
        {
          "acceleratorCount": 0,
          "acceleratorTypeUri": "string"
        }
      ],
      "diskConfig": {
        "bootDiskSizeGb": 0,
        "bootDiskType": "string",
        "localSsdInterface": "string",
        "numLocalSsds": 0
      },
      "imageUri": "string",
      "instanceNames": [
        "string"
      ],
      "instanceReferences": [
        {
          "instanceId": "string",
          "instanceName": "string",
          "publicEciesKey": "string",
          "publicKey": "string"
        }
      ],
      "isPreemptible": true,
      "machineTypeUri": "string",
      "managedGroupConfig": {
        "instanceGroupManagerName": "string",
        "instanceTemplateName": "string"
      },
      "minCpuPlatform": "string",
      "numInstances": 0,
      "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
    },
    "metastoreConfig": {
      "dataprocMetastoreService": "string"
    },
    "secondaryWorkerConfig": {
      "accelerators": [
        {
          "acceleratorCount": 0,
          "acceleratorTypeUri": "string"
        }
      ],
      "diskConfig": {
        "bootDiskSizeGb": 0,
        "bootDiskType": "string",
        "localSsdInterface": "string",
        "numLocalSsds": 0
      },
      "imageUri": "string",
      "instanceNames": [
        "string"
      ],
      "instanceReferences": [
        {
          "instanceId": "string",
          "instanceName": "string",
          "publicEciesKey": "string",
          "publicKey": "string"
        }
      ],
      "isPreemptible": true,
      "machineTypeUri": "string",
      "managedGroupConfig": {
        "instanceGroupManagerName": "string",
        "instanceTemplateName": "string"
      },
      "minCpuPlatform": "string",
      "numInstances": 0,
      "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
    },
    "securityConfig": {
      "identityConfig": {
        "userServiceAccountMapping": {
          "property1": "string",
          "property2": "string"
        }
      },
      "kerberosConfig": {
        "crossRealmTrustAdminServer": "string",
        "crossRealmTrustKdc": "string",
        "crossRealmTrustRealm": "string",
        "crossRealmTrustSharedPasswordUri": "string",
        "enableKerberos": true,
        "kdcDbKeyUri": "string",
        "keyPasswordUri": "string",
        "keystorePasswordUri": "string",
        "keystoreUri": "string",
        "kmsKeyUri": "string",
        "realm": "string",
        "rootPrincipalPasswordUri": "string",
        "tgtLifetimeHours": 0,
        "truststorePasswordUri": "string",
        "truststoreUri": "string"
      }
    },
    "softwareConfig": {
      "imageVersion": "string",
      "optionalComponents": [
        "COMPONENT_UNSPECIFIED"
      ],
      "properties": {
        "property1": "string",
        "property2": "string"
      }
    },
    "tempBucket": "string",
    "workerConfig": {
      "accelerators": [
        {
          "acceleratorCount": 0,
          "acceleratorTypeUri": "string"
        }
      ],
      "diskConfig": {
        "bootDiskSizeGb": 0,
        "bootDiskType": "string",
        "localSsdInterface": "string",
        "numLocalSsds": 0
      },
      "imageUri": "string",
      "instanceNames": [
        "string"
      ],
      "instanceReferences": [
        {
          "instanceId": "string",
          "instanceName": "string",
          "publicEciesKey": "string",
          "publicKey": "string"
        }
      ],
      "isPreemptible": true,
      "machineTypeUri": "string",
      "managedGroupConfig": {
        "instanceGroupManagerName": "string",
        "instanceTemplateName": "string"
      },
      "minCpuPlatform": "string",
      "numInstances": 0,
      "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "metrics": {
    "hdfsMetrics": {
      "property1": "string",
      "property2": "string"
    },
    "yarnMetrics": {
      "property1": "string",
      "property2": "string"
    }
  },
  "projectId": "string",
  "status": {
    "detail": "string",
    "state": "UNKNOWN",
    "stateStartTime": "string",
    "substate": "UNSPECIFIED"
  },
  "statusHistory": [
    {
      "detail": "string",
      "state": "UNKNOWN",
      "stateStartTime": "string",
      "substate": "UNSPECIFIED"
    }
  ],
  "virtualClusterConfig": {
    "auxiliaryServicesConfig": {
      "metastoreConfig": {
        "dataprocMetastoreService": "string"
      },
      "sparkHistoryServerConfig": {
        "dataprocCluster": "string"
      }
    },
    "kubernetesClusterConfig": {
      "gkeClusterConfig": {
        "gkeClusterTarget": "string",
        "namespacedGkeDeploymentTarget": {
          "clusterNamespace": "string",
          "targetGkeCluster": "string"
        },
        "nodePoolTarget": [
          {
            "nodePool": "string",
            "nodePoolConfig": {
              "autoscaling": {
                "maxNodeCount": 0,
                "minNodeCount": 0
              },
              "config": {
                "accelerators": [
                  {
                    "acceleratorCount": "string",
                    "acceleratorType": "string",
                    "gpuPartitionSize": "string"
                  }
                ],
                "bootDiskKmsKey": "string",
                "localSsdCount": 0,
                "machineType": "string",
                "minCpuPlatform": "string",
                "preemptible": true,
                "spot": true
              },
              "locations": [
                "string"
              ]
            },
            "roles": [
              "ROLE_UNSPECIFIED"
            ]
          }
        ]
      },
      "kubernetesNamespace": "string",
      "kubernetesSoftwareConfig": {
        "componentVersion": {
          "property1": "string",
          "property2": "string"
        },
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "stagingBucket": "string"
  }
}
```

<h3 id="dataprocprojectsregionsclustersget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Cluster](#schemacluster)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.clusters.delete

<a id="opIddataproc.projects.regions.clusters.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/regions/string/clusters/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/projects/{projectId}/regions/{region}/clusters/{clusterName}`

Deletes a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).

<h3 id="dataprocprojectsregionsclustersdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. The ID of the Google Cloud Platform project that the cluster belongs to.|
|region|path|string|true|Required. The Dataproc region in which to handle the request.|
|clusterName|path|string|true|Required. The cluster name.|
|clusterUuid|query|string|false|Optional. Specifying the cluster_uuid means the RPC should fail (with error NOT_FOUND) if cluster with specified UUID does not exist.|
|requestId|query|string|false|Optional. A unique ID used to identify the request. If the server receives two DeleteClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.DeleteClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.|
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

<h3 id="dataprocprojectsregionsclustersdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.clusters.patch

<a id="opIddataproc.projects.regions.clusters.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/regions/string/clusters/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterName": "string",
    "config": {
      "autoscalingConfig": {
        "policyUri": "string"
      },
      "auxiliaryNodeGroups": [
        {
          "nodeGroup": {
            "labels": {
              "property1": "string",
              "property2": "string"
            },
            "name": "string",
            "nodeGroupConfig": {
              "accelerators": [
                {
                  "acceleratorCount": 0,
                  "acceleratorTypeUri": "string"
                }
              ],
              "diskConfig": {
                "bootDiskSizeGb": 0,
                "bootDiskType": "string",
                "localSsdInterface": "string",
                "numLocalSsds": 0
              },
              "imageUri": "string",
              "machineTypeUri": "string",
              "minCpuPlatform": "string",
              "numInstances": 0,
              "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
            },
            "roles": [
              "ROLE_UNSPECIFIED"
            ]
          },
          "nodeGroupId": "string"
        }
      ],
      "configBucket": "string",
      "dataprocMetricConfig": {
        "metrics": [
          {
            "metricOverrides": [
              "string"
            ],
            "metricSource": "METRIC_SOURCE_UNSPECIFIED"
          }
        ]
      },
      "encryptionConfig": {
        "gcePdKmsKeyName": "string",
        "kmsKey": "string"
      },
      "endpointConfig": {
        "enableHttpPortAccess": true
      },
      "gceClusterConfig": {
        "confidentialInstanceConfig": {
          "enableConfidentialCompute": true
        },
        "internalIpOnly": true,
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "networkUri": "string",
        "nodeGroupAffinity": {
          "nodeGroupUri": "string"
        },
        "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
        "reservationAffinity": {
          "consumeReservationType": "TYPE_UNSPECIFIED",
          "key": "string",
          "values": [
            "string"
          ]
        },
        "serviceAccount": "string",
        "serviceAccountScopes": [
          "string"
        ],
        "shieldedInstanceConfig": {
          "enableIntegrityMonitoring": true,
          "enableSecureBoot": true,
          "enableVtpm": true
        },
        "subnetworkUri": "string",
        "tags": [
          "string"
        ],
        "zoneUri": "string"
      },
      "gkeClusterConfig": {
        "gkeClusterTarget": "string",
        "namespacedGkeDeploymentTarget": {
          "clusterNamespace": "string",
          "targetGkeCluster": "string"
        },
        "nodePoolTarget": [
          {
            "nodePool": "string",
            "nodePoolConfig": {
              "autoscaling": {
                "maxNodeCount": 0,
                "minNodeCount": 0
              },
              "config": {
                "accelerators": [
                  {
                    "acceleratorCount": "string",
                    "acceleratorType": "string",
                    "gpuPartitionSize": "string"
                  }
                ],
                "bootDiskKmsKey": "string",
                "localSsdCount": 0,
                "machineType": "string",
                "minCpuPlatform": "string",
                "preemptible": true,
                "spot": true
              },
              "locations": [
                "string"
              ]
            },
            "roles": [
              "ROLE_UNSPECIFIED"
            ]
          }
        ]
      },
      "initializationActions": [
        {
          "executableFile": "string",
          "executionTimeout": "string"
        }
      ],
      "lifecycleConfig": {
        "autoDeleteTime": "string",
        "autoDeleteTtl": "string",
        "idleDeleteTtl": "string"
      },
      "masterConfig": {
        "accelerators": [
          {
            "acceleratorCount": 0,
            "acceleratorTypeUri": "string"
          }
        ],
        "diskConfig": {
          "bootDiskSizeGb": 0,
          "bootDiskType": "string",
          "localSsdInterface": "string",
          "numLocalSsds": 0
        },
        "imageUri": "string",
        "machineTypeUri": "string",
        "minCpuPlatform": "string",
        "numInstances": 0,
        "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
      },
      "metastoreConfig": {
        "dataprocMetastoreService": "string"
      },
      "secondaryWorkerConfig": {
        "accelerators": [
          {
            "acceleratorCount": 0,
            "acceleratorTypeUri": "string"
          }
        ],
        "diskConfig": {
          "bootDiskSizeGb": 0,
          "bootDiskType": "string",
          "localSsdInterface": "string",
          "numLocalSsds": 0
        },
        "imageUri": "string",
        "machineTypeUri": "string",
        "minCpuPlatform": "string",
        "numInstances": 0,
        "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
      },
      "securityConfig": {
        "identityConfig": {
          "userServiceAccountMapping": {
            "property1": "string",
            "property2": "string"
          }
        },
        "kerberosConfig": {
          "crossRealmTrustAdminServer": "string",
          "crossRealmTrustKdc": "string",
          "crossRealmTrustRealm": "string",
          "crossRealmTrustSharedPasswordUri": "string",
          "enableKerberos": true,
          "kdcDbKeyUri": "string",
          "keyPasswordUri": "string",
          "keystorePasswordUri": "string",
          "keystoreUri": "string",
          "kmsKeyUri": "string",
          "realm": "string",
          "rootPrincipalPasswordUri": "string",
          "tgtLifetimeHours": 0,
          "truststorePasswordUri": "string",
          "truststoreUri": "string"
        }
      },
      "softwareConfig": {
        "imageVersion": "string",
        "optionalComponents": [
          "COMPONENT_UNSPECIFIED"
        ],
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "tempBucket": "string",
      "workerConfig": {
        "accelerators": [
          {
            "acceleratorCount": 0,
            "acceleratorTypeUri": "string"
          }
        ],
        "diskConfig": {
          "bootDiskSizeGb": 0,
          "bootDiskType": "string",
          "localSsdInterface": "string",
          "numLocalSsds": 0
        },
        "imageUri": "string",
        "machineTypeUri": "string",
        "minCpuPlatform": "string",
        "numInstances": 0,
        "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
      }
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "projectId": "string",
    "virtualClusterConfig": {
      "auxiliaryServicesConfig": {
        "metastoreConfig": {
          "dataprocMetastoreService": "string"
        },
        "sparkHistoryServerConfig": {
          "dataprocCluster": "string"
        }
      },
      "kubernetesClusterConfig": {
        "gkeClusterConfig": {
          "gkeClusterTarget": "string",
          "namespacedGkeDeploymentTarget": {
            "clusterNamespace": "string",
            "targetGkeCluster": "string"
          },
          "nodePoolTarget": [
            {
              "nodePool": "string",
              "nodePoolConfig": {
                "autoscaling": {
                  "maxNodeCount": 0,
                  "minNodeCount": 0
                },
                "config": {
                  "accelerators": [
                    {
                      "acceleratorCount": "string",
                      "acceleratorType": "string",
                      "gpuPartitionSize": "string"
                    }
                  ],
                  "bootDiskKmsKey": "string",
                  "localSsdCount": 0,
                  "machineType": "string",
                  "minCpuPlatform": "string",
                  "preemptible": true,
                  "spot": true
                },
                "locations": [
                  "string"
                ]
              },
              "roles": [
                "ROLE_UNSPECIFIED"
              ]
            }
          ]
        },
        "kubernetesNamespace": "string",
        "kubernetesSoftwareConfig": {
          "componentVersion": {
            "property1": "string",
            "property2": "string"
          },
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "stagingBucket": "string"
    }
  }'
```

`PATCH /v1/projects/{projectId}/regions/{region}/clusters/{clusterName}`

Updates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). The cluster must be in a RUNNING state or an error is returned.

> Body parameter

```json
{
  "clusterName": "string",
  "config": {
    "autoscalingConfig": {
      "policyUri": "string"
    },
    "auxiliaryNodeGroups": [
      {
        "nodeGroup": {
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "name": "string",
          "nodeGroupConfig": {
            "accelerators": [
              {
                "acceleratorCount": 0,
                "acceleratorTypeUri": "string"
              }
            ],
            "diskConfig": {
              "bootDiskSizeGb": 0,
              "bootDiskType": "string",
              "localSsdInterface": "string",
              "numLocalSsds": 0
            },
            "imageUri": "string",
            "machineTypeUri": "string",
            "minCpuPlatform": "string",
            "numInstances": 0,
            "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
          },
          "roles": [
            "ROLE_UNSPECIFIED"
          ]
        },
        "nodeGroupId": "string"
      }
    ],
    "configBucket": "string",
    "dataprocMetricConfig": {
      "metrics": [
        {
          "metricOverrides": [
            "string"
          ],
          "metricSource": "METRIC_SOURCE_UNSPECIFIED"
        }
      ]
    },
    "encryptionConfig": {
      "gcePdKmsKeyName": "string",
      "kmsKey": "string"
    },
    "endpointConfig": {
      "enableHttpPortAccess": true
    },
    "gceClusterConfig": {
      "confidentialInstanceConfig": {
        "enableConfidentialCompute": true
      },
      "internalIpOnly": true,
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "networkUri": "string",
      "nodeGroupAffinity": {
        "nodeGroupUri": "string"
      },
      "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
      "reservationAffinity": {
        "consumeReservationType": "TYPE_UNSPECIFIED",
        "key": "string",
        "values": [
          "string"
        ]
      },
      "serviceAccount": "string",
      "serviceAccountScopes": [
        "string"
      ],
      "shieldedInstanceConfig": {
        "enableIntegrityMonitoring": true,
        "enableSecureBoot": true,
        "enableVtpm": true
      },
      "subnetworkUri": "string",
      "tags": [
        "string"
      ],
      "zoneUri": "string"
    },
    "gkeClusterConfig": {
      "gkeClusterTarget": "string",
      "namespacedGkeDeploymentTarget": {
        "clusterNamespace": "string",
        "targetGkeCluster": "string"
      },
      "nodePoolTarget": [
        {
          "nodePool": "string",
          "nodePoolConfig": {
            "autoscaling": {
              "maxNodeCount": 0,
              "minNodeCount": 0
            },
            "config": {
              "accelerators": [
                {
                  "acceleratorCount": "string",
                  "acceleratorType": "string",
                  "gpuPartitionSize": "string"
                }
              ],
              "bootDiskKmsKey": "string",
              "localSsdCount": 0,
              "machineType": "string",
              "minCpuPlatform": "string",
              "preemptible": true,
              "spot": true
            },
            "locations": [
              "string"
            ]
          },
          "roles": [
            "ROLE_UNSPECIFIED"
          ]
        }
      ]
    },
    "initializationActions": [
      {
        "executableFile": "string",
        "executionTimeout": "string"
      }
    ],
    "lifecycleConfig": {
      "autoDeleteTime": "string",
      "autoDeleteTtl": "string",
      "idleDeleteTtl": "string"
    },
    "masterConfig": {
      "accelerators": [
        {
          "acceleratorCount": 0,
          "acceleratorTypeUri": "string"
        }
      ],
      "diskConfig": {
        "bootDiskSizeGb": 0,
        "bootDiskType": "string",
        "localSsdInterface": "string",
        "numLocalSsds": 0
      },
      "imageUri": "string",
      "machineTypeUri": "string",
      "minCpuPlatform": "string",
      "numInstances": 0,
      "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
    },
    "metastoreConfig": {
      "dataprocMetastoreService": "string"
    },
    "secondaryWorkerConfig": {
      "accelerators": [
        {
          "acceleratorCount": 0,
          "acceleratorTypeUri": "string"
        }
      ],
      "diskConfig": {
        "bootDiskSizeGb": 0,
        "bootDiskType": "string",
        "localSsdInterface": "string",
        "numLocalSsds": 0
      },
      "imageUri": "string",
      "machineTypeUri": "string",
      "minCpuPlatform": "string",
      "numInstances": 0,
      "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
    },
    "securityConfig": {
      "identityConfig": {
        "userServiceAccountMapping": {
          "property1": "string",
          "property2": "string"
        }
      },
      "kerberosConfig": {
        "crossRealmTrustAdminServer": "string",
        "crossRealmTrustKdc": "string",
        "crossRealmTrustRealm": "string",
        "crossRealmTrustSharedPasswordUri": "string",
        "enableKerberos": true,
        "kdcDbKeyUri": "string",
        "keyPasswordUri": "string",
        "keystorePasswordUri": "string",
        "keystoreUri": "string",
        "kmsKeyUri": "string",
        "realm": "string",
        "rootPrincipalPasswordUri": "string",
        "tgtLifetimeHours": 0,
        "truststorePasswordUri": "string",
        "truststoreUri": "string"
      }
    },
    "softwareConfig": {
      "imageVersion": "string",
      "optionalComponents": [
        "COMPONENT_UNSPECIFIED"
      ],
      "properties": {
        "property1": "string",
        "property2": "string"
      }
    },
    "tempBucket": "string",
    "workerConfig": {
      "accelerators": [
        {
          "acceleratorCount": 0,
          "acceleratorTypeUri": "string"
        }
      ],
      "diskConfig": {
        "bootDiskSizeGb": 0,
        "bootDiskType": "string",
        "localSsdInterface": "string",
        "numLocalSsds": 0
      },
      "imageUri": "string",
      "machineTypeUri": "string",
      "minCpuPlatform": "string",
      "numInstances": 0,
      "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "projectId": "string",
  "virtualClusterConfig": {
    "auxiliaryServicesConfig": {
      "metastoreConfig": {
        "dataprocMetastoreService": "string"
      },
      "sparkHistoryServerConfig": {
        "dataprocCluster": "string"
      }
    },
    "kubernetesClusterConfig": {
      "gkeClusterConfig": {
        "gkeClusterTarget": "string",
        "namespacedGkeDeploymentTarget": {
          "clusterNamespace": "string",
          "targetGkeCluster": "string"
        },
        "nodePoolTarget": [
          {
            "nodePool": "string",
            "nodePoolConfig": {
              "autoscaling": {
                "maxNodeCount": 0,
                "minNodeCount": 0
              },
              "config": {
                "accelerators": [
                  {
                    "acceleratorCount": "string",
                    "acceleratorType": "string",
                    "gpuPartitionSize": "string"
                  }
                ],
                "bootDiskKmsKey": "string",
                "localSsdCount": 0,
                "machineType": "string",
                "minCpuPlatform": "string",
                "preemptible": true,
                "spot": true
              },
              "locations": [
                "string"
              ]
            },
            "roles": [
              "ROLE_UNSPECIFIED"
            ]
          }
        ]
      },
      "kubernetesNamespace": "string",
      "kubernetesSoftwareConfig": {
        "componentVersion": {
          "property1": "string",
          "property2": "string"
        },
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "stagingBucket": "string"
  }
}
```

<h3 id="dataprocprojectsregionsclusterspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. The ID of the Google Cloud Platform project the cluster belongs to.|
|region|path|string|true|Required. The Dataproc region in which to handle the request.|
|clusterName|path|string|true|Required. The cluster name.|
|gracefulDecommissionTimeout|query|string|false|Optional. Timeout for graceful YARN decommissioning. Graceful decommissioning allows removing nodes from the cluster without interrupting jobs in progress. Timeout specifies how long to wait for jobs in progress to finish before forcefully removing nodes (and potentially interrupting jobs). Default timeout is 0 (for forceful decommission), and the maximum allowed timeout is 1 day. (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).Only supported on Dataproc image versions 1.2 and higher.|
|requestId|query|string|false|Optional. A unique ID used to identify the request. If the server receives two UpdateClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.UpdateClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.|
|updateMask|query|string|false|Required. Specifies the path, relative to Cluster, of the field to update. For example, to change the number of workers in a cluster to 5, the update_mask parameter would be specified as config.worker_config.num_instances, and the PATCH request body would specify the new value, as follows: { "config":{ "workerConfig":{ "numInstances":"5" } } } Similarly, to change the number of preemptible workers in a cluster to 5, the update_mask parameter would be config.secondary_worker_config.num_instances, and the PATCH request body would be set as follows: { "config":{ "secondaryWorkerConfig":{ "numInstances":"5" } } } *Note:* Currently, only the following fields can be updated: *Mask* *Purpose* *labels* Update labels *config.worker_config.num_instances* Resize primary worker group *config.secondary_worker_config.num_instances* Resize secondary worker group config.autoscaling_config.policy_uri Use, stop using, or change autoscaling policies |
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
|body|body|[Cluster](#schemacluster)|false|none|
|» clusterName|body|string|false|Required. The cluster name, which must be unique within a project. The name must start with a lowercase letter, and can contain up to 51 lowercase letters, numbers, and hyphens. It cannot end with a hyphen. The name of a deleted cluster can be reused.|
|» config|body|[ClusterConfig](#schemaclusterconfig)|false|Optional. The cluster config for a cluster of Compute Engine Instances. Note that Dataproc may set default values, and values may change when clusters are updated.Exactly one of ClusterConfig or VirtualClusterConfig must be specified.|
|» labels|body|object|false|Optional. The labels to associate with this cluster. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster.|
|» » **additionalProperties**|body|string|false|none|
|» projectId|body|string|false|Required. The Google Cloud Platform project ID that the cluster belongs to.|
|» virtualClusterConfig|body|[VirtualClusterConfig](#schemavirtualclusterconfig)|false|Optional. The virtual cluster config is used when creating a Dataproc cluster that does not directly control the underlying compute resources, for example, when creating a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-overview). Dataproc may set default values, and values may change when clusters are updated. Exactly one of config or virtual_cluster_config must be specified.|

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

<h3 id="dataprocprojectsregionsclusterspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.clusters.diagnose

<a id="opIddataproc.projects.regions.clusters.diagnose"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/regions/string/clusters/string:diagnose \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "diagnosisInterval": {
      "endTime": "string",
      "startTime": "string"
    },
    "job": "string",
    "jobs": [
      "string"
    ],
    "yarnApplicationId": "string",
    "yarnApplicationIds": [
      "string"
    ]
  }'
```

`POST /v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:diagnose`

Gets cluster diagnostic information. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). After the operation completes, Operation.response contains DiagnoseClusterResults (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#diagnoseclusterresults).

> Body parameter

```json
{
  "diagnosisInterval": {
    "endTime": "string",
    "startTime": "string"
  },
  "job": "string",
  "jobs": [
    "string"
  ],
  "yarnApplicationId": "string",
  "yarnApplicationIds": [
    "string"
  ]
}
```

<h3 id="dataprocprojectsregionsclustersdiagnose-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. The ID of the Google Cloud Platform project that the cluster belongs to.|
|region|path|string|true|Required. The Dataproc region in which to handle the request.|
|clusterName|path|string|true|Required. The cluster name.|
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
|body|body|[DiagnoseClusterRequest](#schemadiagnoseclusterrequest)|false|none|
|» diagnosisInterval|body|[Interval](#schemainterval)|false|Optional. Time interval in which diagnosis should be carried out on the cluster.|
|» job|body|string|false|Optional. DEPRECATED Specifies the job on which diagnosis is to be performed. Format: projects/{project}/regions/{region}/jobs/{job}|
|» jobs|body|[string]|false|Optional. Specifies a list of jobs on which diagnosis is to be performed. Format: projects/{project}/regions/{region}/jobs/{job}|
|» yarnApplicationId|body|string|false|Optional. DEPRECATED Specifies the yarn application on which diagnosis is to be performed.|
|» yarnApplicationIds|body|[string]|false|Optional. Specifies a list of yarn applications on which diagnosis is to be performed.|

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

<h3 id="dataprocprojectsregionsclustersdiagnose-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.clusters.repair

<a id="opIddataproc.projects.regions.clusters.repair"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/regions/string/clusters/string:repair \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterUuid": "string",
    "gracefulDecommissionTimeout": "string",
    "nodePools": [
      {
        "id": "string",
        "instanceNames": [
          "string"
        ],
        "repairAction": "REPAIR_ACTION_UNSPECIFIED"
      }
    ],
    "parentOperationId": "string",
    "requestId": "string"
  }'
```

`POST /v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:repair`

Repairs a cluster.

> Body parameter

```json
{
  "clusterUuid": "string",
  "gracefulDecommissionTimeout": "string",
  "nodePools": [
    {
      "id": "string",
      "instanceNames": [
        "string"
      ],
      "repairAction": "REPAIR_ACTION_UNSPECIFIED"
    }
  ],
  "parentOperationId": "string",
  "requestId": "string"
}
```

<h3 id="dataprocprojectsregionsclustersrepair-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. The ID of the Google Cloud Platform project the cluster belongs to.|
|region|path|string|true|Required. The Dataproc region in which to handle the request.|
|clusterName|path|string|true|Required. The cluster name.|
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
|body|body|[RepairClusterRequest](#schemarepairclusterrequest)|false|none|
|» clusterUuid|body|string|false|Optional. Specifying the cluster_uuid means the RPC will fail (with error NOT_FOUND) if a cluster with the specified UUID does not exist.|
|» gracefulDecommissionTimeout|body|string(google-duration)|false|Optional. Timeout for graceful YARN decommissioning. Graceful decommissioning facilitates the removal of cluster nodes without interrupting jobs in progress. The timeout specifies the amount of time to wait for jobs finish before forcefully removing nodes. The default timeout is 0 for forceful decommissioning, and the maximum timeout period is 1 day. (see JSON Mapping—Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).graceful_decommission_timeout is supported in Dataproc image versions 1.2+.|
|» nodePools|body|[[NodePool](#schemanodepool)]|false|Optional. Node pools and corresponding repair action to be taken. All node pools should be unique in this request. i.e. Multiple entries for the same node pool id are not allowed.|
|» parentOperationId|body|string|false|Optional. operation id of the parent operation sending the repair request|
|» requestId|body|string|false|Optional. A unique ID used to identify the request. If the server receives two RepairClusterRequests with the same ID, the second request is ignored, and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.|

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

<h3 id="dataprocprojectsregionsclustersrepair-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.clusters.start

<a id="opIddataproc.projects.regions.clusters.start"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/regions/string/clusters/string:start \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterUuid": "string",
    "requestId": "string"
  }'
```

`POST /v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:start`

Starts a cluster in a project.

> Body parameter

```json
{
  "clusterUuid": "string",
  "requestId": "string"
}
```

<h3 id="dataprocprojectsregionsclustersstart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. The ID of the Google Cloud Platform project the cluster belongs to.|
|region|path|string|true|Required. The Dataproc region in which to handle the request.|
|clusterName|path|string|true|Required. The cluster name.|
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
|body|body|[StartClusterRequest](#schemastartclusterrequest)|false|none|
|» clusterUuid|body|string|false|Optional. Specifying the cluster_uuid means the RPC will fail (with error NOT_FOUND) if a cluster with the specified UUID does not exist.|
|» requestId|body|string|false|Optional. A unique ID used to identify the request. If the server receives two StartClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.StartClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.|

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

<h3 id="dataprocprojectsregionsclustersstart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.clusters.stop

<a id="opIddataproc.projects.regions.clusters.stop"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/regions/string/clusters/string:stop \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterUuid": "string",
    "requestId": "string"
  }'
```

`POST /v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:stop`

Stops a cluster in a project.

> Body parameter

```json
{
  "clusterUuid": "string",
  "requestId": "string"
}
```

<h3 id="dataprocprojectsregionsclustersstop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. The ID of the Google Cloud Platform project the cluster belongs to.|
|region|path|string|true|Required. The Dataproc region in which to handle the request.|
|clusterName|path|string|true|Required. The cluster name.|
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
|body|body|[StopClusterRequest](#schemastopclusterrequest)|false|none|
|» clusterUuid|body|string|false|Optional. Specifying the cluster_uuid means the RPC will fail (with error NOT_FOUND) if a cluster with the specified UUID does not exist.|
|» requestId|body|string|false|Optional. A unique ID used to identify the request. If the server receives two StopClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.StopClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.|

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

<h3 id="dataprocprojectsregionsclustersstop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.jobs.list

<a id="opIddataproc.projects.regions.jobs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/regions/string/jobs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{projectId}/regions/{region}/jobs`

Lists regions/{region}/jobs in a project.

<h3 id="dataprocprojectsregionsjobslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. The ID of the Google Cloud Platform project that the job belongs to.|
|region|path|string|true|Required. The Dataproc region in which to handle the request.|
|clusterName|query|string|false|Optional. If set, the returned jobs list includes only jobs that were submitted to the named cluster.|
|filter|query|string|false|Optional. A filter constraining the jobs to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is status.state or labels.[KEY], and [KEY] is a label key. value can be * to match all values. status.state can be either ACTIVE or NON_ACTIVE. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND labels.env = staging AND labels.starred = *|
|jobStateMatcher|query|string|false|Optional. Specifies enumerated categories of jobs to list. (default = match ALL jobs).If filter is provided, jobStateMatcher will be ignored.|
|pageSize|query|integer|false|Optional. The number of results to return in each response.|
|pageToken|query|string|false|Optional. The page token, returned by a previous call, to request the next page of results.|
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
|jobStateMatcher|ALL|
|jobStateMatcher|ACTIVE|
|jobStateMatcher|NON_ACTIVE|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "jobs": [
    {
      "done": true,
      "driverControlFilesUri": "string",
      "driverOutputResourceUri": "string",
      "driverSchedulingConfig": {
        "memoryMb": 0,
        "vcores": 0
      },
      "hadoopJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainClass": "string",
        "mainJarFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "hiveJob": {
        "continueOnFailure": true,
        "jarFileUris": [
          "string"
        ],
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "jobUuid": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "pigJob": {
        "continueOnFailure": true,
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "placement": {
        "clusterLabels": {
          "property1": "string",
          "property2": "string"
        },
        "clusterName": "string",
        "clusterUuid": "string"
      },
      "prestoJob": {
        "clientTags": [
          "string"
        ],
        "continueOnFailure": true,
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "outputFormat": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        }
      },
      "pysparkJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainPythonFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "pythonFileUris": [
          "string"
        ]
      },
      "reference": {
        "jobId": "string",
        "projectId": "string"
      },
      "scheduling": {
        "maxFailuresPerHour": 0,
        "maxFailuresTotal": 0
      },
      "sparkJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainClass": "string",
        "mainJarFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "sparkRJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainRFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "sparkSqlJob": {
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "status": {
        "details": "string",
        "state": "STATE_UNSPECIFIED",
        "stateStartTime": "string",
        "substate": "UNSPECIFIED"
      },
      "statusHistory": [
        {
          "details": "string",
          "state": "STATE_UNSPECIFIED",
          "stateStartTime": "string",
          "substate": "UNSPECIFIED"
        }
      ],
      "trinoJob": {
        "clientTags": [
          "string"
        ],
        "continueOnFailure": true,
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "outputFormat": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        }
      },
      "yarnApplications": [
        {
          "name": "string",
          "progress": 0,
          "state": "STATE_UNSPECIFIED",
          "trackingUrl": "string"
        }
      ]
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="dataprocprojectsregionsjobslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListJobsResponse](#schemalistjobsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.jobs.get

<a id="opIddataproc.projects.regions.jobs.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/regions/string/jobs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{projectId}/regions/{region}/jobs/{jobId}`

Gets the resource representation for a job in a project.

<h3 id="dataprocprojectsregionsjobsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. The ID of the Google Cloud Platform project that the job belongs to.|
|region|path|string|true|Required. The Dataproc region in which to handle the request.|
|jobId|path|string|true|Required. The job ID.|
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
  "driverControlFilesUri": "string",
  "driverOutputResourceUri": "string",
  "driverSchedulingConfig": {
    "memoryMb": 0,
    "vcores": 0
  },
  "hadoopJob": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "mainClass": "string",
    "mainJarFileUri": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "hiveJob": {
    "continueOnFailure": true,
    "jarFileUris": [
      "string"
    ],
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    },
    "scriptVariables": {
      "property1": "string",
      "property2": "string"
    }
  },
  "jobUuid": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "pigJob": {
    "continueOnFailure": true,
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    },
    "scriptVariables": {
      "property1": "string",
      "property2": "string"
    }
  },
  "placement": {
    "clusterLabels": {
      "property1": "string",
      "property2": "string"
    },
    "clusterName": "string",
    "clusterUuid": "string"
  },
  "prestoJob": {
    "clientTags": [
      "string"
    ],
    "continueOnFailure": true,
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "outputFormat": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    }
  },
  "pysparkJob": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "mainPythonFileUri": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "pythonFileUris": [
      "string"
    ]
  },
  "reference": {
    "jobId": "string",
    "projectId": "string"
  },
  "scheduling": {
    "maxFailuresPerHour": 0,
    "maxFailuresTotal": 0
  },
  "sparkJob": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "mainClass": "string",
    "mainJarFileUri": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "sparkRJob": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "mainRFileUri": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "sparkSqlJob": {
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    },
    "scriptVariables": {
      "property1": "string",
      "property2": "string"
    }
  },
  "status": {
    "details": "string",
    "state": "STATE_UNSPECIFIED",
    "stateStartTime": "string",
    "substate": "UNSPECIFIED"
  },
  "statusHistory": [
    {
      "details": "string",
      "state": "STATE_UNSPECIFIED",
      "stateStartTime": "string",
      "substate": "UNSPECIFIED"
    }
  ],
  "trinoJob": {
    "clientTags": [
      "string"
    ],
    "continueOnFailure": true,
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "outputFormat": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    }
  },
  "yarnApplications": [
    {
      "name": "string",
      "progress": 0,
      "state": "STATE_UNSPECIFIED",
      "trackingUrl": "string"
    }
  ]
}
```

<h3 id="dataprocprojectsregionsjobsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Job](#schemajob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.jobs.delete

<a id="opIddataproc.projects.regions.jobs.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/regions/string/jobs/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/projects/{projectId}/regions/{region}/jobs/{jobId}`

Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.

<h3 id="dataprocprojectsregionsjobsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. The ID of the Google Cloud Platform project that the job belongs to.|
|region|path|string|true|Required. The Dataproc region in which to handle the request.|
|jobId|path|string|true|Required. The job ID.|
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

<h3 id="dataprocprojectsregionsjobsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.jobs.patch

<a id="opIddataproc.projects.regions.jobs.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/regions/string/jobs/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "driverSchedulingConfig": {
      "memoryMb": 0,
      "vcores": 0
    },
    "hadoopJob": {
      "archiveUris": [
        "string"
      ],
      "args": [
        "string"
      ],
      "fileUris": [
        "string"
      ],
      "jarFileUris": [
        "string"
      ],
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "mainClass": "string",
      "mainJarFileUri": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      }
    },
    "hiveJob": {
      "continueOnFailure": true,
      "jarFileUris": [
        "string"
      ],
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "queryFileUri": "string",
      "queryList": {
        "queries": [
          "string"
        ]
      },
      "scriptVariables": {
        "property1": "string",
        "property2": "string"
      }
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "pigJob": {
      "continueOnFailure": true,
      "jarFileUris": [
        "string"
      ],
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "queryFileUri": "string",
      "queryList": {
        "queries": [
          "string"
        ]
      },
      "scriptVariables": {
        "property1": "string",
        "property2": "string"
      }
    },
    "placement": {
      "clusterLabels": {
        "property1": "string",
        "property2": "string"
      },
      "clusterName": "string"
    },
    "prestoJob": {
      "clientTags": [
        "string"
      ],
      "continueOnFailure": true,
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "outputFormat": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "queryFileUri": "string",
      "queryList": {
        "queries": [
          "string"
        ]
      }
    },
    "pysparkJob": {
      "archiveUris": [
        "string"
      ],
      "args": [
        "string"
      ],
      "fileUris": [
        "string"
      ],
      "jarFileUris": [
        "string"
      ],
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "mainPythonFileUri": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "pythonFileUris": [
        "string"
      ]
    },
    "reference": {
      "jobId": "string",
      "projectId": "string"
    },
    "scheduling": {
      "maxFailuresPerHour": 0,
      "maxFailuresTotal": 0
    },
    "sparkJob": {
      "archiveUris": [
        "string"
      ],
      "args": [
        "string"
      ],
      "fileUris": [
        "string"
      ],
      "jarFileUris": [
        "string"
      ],
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "mainClass": "string",
      "mainJarFileUri": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      }
    },
    "sparkRJob": {
      "archiveUris": [
        "string"
      ],
      "args": [
        "string"
      ],
      "fileUris": [
        "string"
      ],
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "mainRFileUri": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      }
    },
    "sparkSqlJob": {
      "jarFileUris": [
        "string"
      ],
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "queryFileUri": "string",
      "queryList": {
        "queries": [
          "string"
        ]
      },
      "scriptVariables": {
        "property1": "string",
        "property2": "string"
      }
    },
    "trinoJob": {
      "clientTags": [
        "string"
      ],
      "continueOnFailure": true,
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "outputFormat": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "queryFileUri": "string",
      "queryList": {
        "queries": [
          "string"
        ]
      }
    }
  }'
```

`PATCH /v1/projects/{projectId}/regions/{region}/jobs/{jobId}`

Updates a job in a project.

> Body parameter

```json
{
  "driverSchedulingConfig": {
    "memoryMb": 0,
    "vcores": 0
  },
  "hadoopJob": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "mainClass": "string",
    "mainJarFileUri": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "hiveJob": {
    "continueOnFailure": true,
    "jarFileUris": [
      "string"
    ],
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    },
    "scriptVariables": {
      "property1": "string",
      "property2": "string"
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "pigJob": {
    "continueOnFailure": true,
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    },
    "scriptVariables": {
      "property1": "string",
      "property2": "string"
    }
  },
  "placement": {
    "clusterLabels": {
      "property1": "string",
      "property2": "string"
    },
    "clusterName": "string"
  },
  "prestoJob": {
    "clientTags": [
      "string"
    ],
    "continueOnFailure": true,
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "outputFormat": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    }
  },
  "pysparkJob": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "mainPythonFileUri": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "pythonFileUris": [
      "string"
    ]
  },
  "reference": {
    "jobId": "string",
    "projectId": "string"
  },
  "scheduling": {
    "maxFailuresPerHour": 0,
    "maxFailuresTotal": 0
  },
  "sparkJob": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "mainClass": "string",
    "mainJarFileUri": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "sparkRJob": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "mainRFileUri": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "sparkSqlJob": {
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    },
    "scriptVariables": {
      "property1": "string",
      "property2": "string"
    }
  },
  "trinoJob": {
    "clientTags": [
      "string"
    ],
    "continueOnFailure": true,
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "outputFormat": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    }
  }
}
```

<h3 id="dataprocprojectsregionsjobspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. The ID of the Google Cloud Platform project that the job belongs to.|
|region|path|string|true|Required. The Dataproc region in which to handle the request.|
|jobId|path|string|true|Required. The job ID.|
|updateMask|query|string|false|Required. Specifies the path, relative to Job, of the field to update. For example, to update the labels of a Job the update_mask parameter would be specified as labels, and the PATCH request body would specify the new value. *Note:* Currently, labels is the only field that can be updated.|
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
|body|body|[Job](#schemajob)|false|none|
|» driverSchedulingConfig|body|[DriverSchedulingConfig](#schemadriverschedulingconfig)|false|Optional. Driver scheduling configuration.|
|» hadoopJob|body|[HadoopJob](#schemahadoopjob)|false|Optional. Job is a Hadoop job.|
|» hiveJob|body|[HiveJob](#schemahivejob)|false|Optional. Job is a Hive job.|
|» labels|body|object|false|Optional. The labels to associate with this job. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a job.|
|» » **additionalProperties**|body|string|false|none|
|» pigJob|body|[PigJob](#schemapigjob)|false|Optional. Job is a Pig job.|
|» placement|body|[JobPlacement](#schemajobplacement)|false|Required. Job information, including how, when, and where to run the job.|
|» prestoJob|body|[PrestoJob](#schemaprestojob)|false|Optional. Job is a Presto job.|
|» pysparkJob|body|[PySparkJob](#schemapysparkjob)|false|Optional. Job is a PySpark job.|
|» reference|body|[JobReference](#schemajobreference)|false|Optional. The fully qualified reference to the job, which can be used to obtain the equivalent REST path of the job resource. If this property is not specified when a job is created, the server generates a job_id.|
|» scheduling|body|[JobScheduling](#schemajobscheduling)|false|Optional. Job scheduling configuration.|
|» sparkJob|body|[SparkJob](#schemasparkjob)|false|Optional. Job is a Spark job.|
|» sparkRJob|body|[SparkRJob](#schemasparkrjob)|false|Optional. Job is a SparkR job.|
|» sparkSqlJob|body|[SparkSqlJob](#schemasparksqljob)|false|Optional. Job is a SparkSql job.|
|» trinoJob|body|[TrinoJob](#schematrinojob)|false|Optional. Job is a Trino job.|

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
  "driverControlFilesUri": "string",
  "driverOutputResourceUri": "string",
  "driverSchedulingConfig": {
    "memoryMb": 0,
    "vcores": 0
  },
  "hadoopJob": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "mainClass": "string",
    "mainJarFileUri": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "hiveJob": {
    "continueOnFailure": true,
    "jarFileUris": [
      "string"
    ],
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    },
    "scriptVariables": {
      "property1": "string",
      "property2": "string"
    }
  },
  "jobUuid": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "pigJob": {
    "continueOnFailure": true,
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    },
    "scriptVariables": {
      "property1": "string",
      "property2": "string"
    }
  },
  "placement": {
    "clusterLabels": {
      "property1": "string",
      "property2": "string"
    },
    "clusterName": "string",
    "clusterUuid": "string"
  },
  "prestoJob": {
    "clientTags": [
      "string"
    ],
    "continueOnFailure": true,
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "outputFormat": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    }
  },
  "pysparkJob": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "mainPythonFileUri": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "pythonFileUris": [
      "string"
    ]
  },
  "reference": {
    "jobId": "string",
    "projectId": "string"
  },
  "scheduling": {
    "maxFailuresPerHour": 0,
    "maxFailuresTotal": 0
  },
  "sparkJob": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "mainClass": "string",
    "mainJarFileUri": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "sparkRJob": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "mainRFileUri": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "sparkSqlJob": {
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    },
    "scriptVariables": {
      "property1": "string",
      "property2": "string"
    }
  },
  "status": {
    "details": "string",
    "state": "STATE_UNSPECIFIED",
    "stateStartTime": "string",
    "substate": "UNSPECIFIED"
  },
  "statusHistory": [
    {
      "details": "string",
      "state": "STATE_UNSPECIFIED",
      "stateStartTime": "string",
      "substate": "UNSPECIFIED"
    }
  ],
  "trinoJob": {
    "clientTags": [
      "string"
    ],
    "continueOnFailure": true,
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "outputFormat": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    }
  },
  "yarnApplications": [
    {
      "name": "string",
      "progress": 0,
      "state": "STATE_UNSPECIFIED",
      "trackingUrl": "string"
    }
  ]
}
```

<h3 id="dataprocprojectsregionsjobspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Job](#schemajob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.jobs.cancel

<a id="opIddataproc.projects.regions.jobs.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/regions/string/jobs/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/projects/{projectId}/regions/{region}/jobs/{jobId}:cancel`

Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/list) or regions/{region}/jobs.get (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/get).

> Body parameter

```json
{}
```

<h3 id="dataprocprojectsregionsjobscancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. The ID of the Google Cloud Platform project that the job belongs to.|
|region|path|string|true|Required. The Dataproc region in which to handle the request.|
|jobId|path|string|true|Required. The job ID.|
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
|body|body|[CancelJobRequest](#schemacanceljobrequest)|false|none|

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
  "driverControlFilesUri": "string",
  "driverOutputResourceUri": "string",
  "driverSchedulingConfig": {
    "memoryMb": 0,
    "vcores": 0
  },
  "hadoopJob": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "mainClass": "string",
    "mainJarFileUri": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "hiveJob": {
    "continueOnFailure": true,
    "jarFileUris": [
      "string"
    ],
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    },
    "scriptVariables": {
      "property1": "string",
      "property2": "string"
    }
  },
  "jobUuid": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "pigJob": {
    "continueOnFailure": true,
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    },
    "scriptVariables": {
      "property1": "string",
      "property2": "string"
    }
  },
  "placement": {
    "clusterLabels": {
      "property1": "string",
      "property2": "string"
    },
    "clusterName": "string",
    "clusterUuid": "string"
  },
  "prestoJob": {
    "clientTags": [
      "string"
    ],
    "continueOnFailure": true,
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "outputFormat": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    }
  },
  "pysparkJob": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "mainPythonFileUri": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "pythonFileUris": [
      "string"
    ]
  },
  "reference": {
    "jobId": "string",
    "projectId": "string"
  },
  "scheduling": {
    "maxFailuresPerHour": 0,
    "maxFailuresTotal": 0
  },
  "sparkJob": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "mainClass": "string",
    "mainJarFileUri": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "sparkRJob": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "mainRFileUri": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "sparkSqlJob": {
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    },
    "scriptVariables": {
      "property1": "string",
      "property2": "string"
    }
  },
  "status": {
    "details": "string",
    "state": "STATE_UNSPECIFIED",
    "stateStartTime": "string",
    "substate": "UNSPECIFIED"
  },
  "statusHistory": [
    {
      "details": "string",
      "state": "STATE_UNSPECIFIED",
      "stateStartTime": "string",
      "substate": "UNSPECIFIED"
    }
  ],
  "trinoJob": {
    "clientTags": [
      "string"
    ],
    "continueOnFailure": true,
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "outputFormat": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    }
  },
  "yarnApplications": [
    {
      "name": "string",
      "progress": 0,
      "state": "STATE_UNSPECIFIED",
      "trackingUrl": "string"
    }
  ]
}
```

<h3 id="dataprocprojectsregionsjobscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Job](#schemajob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.jobs.submit

<a id="opIddataproc.projects.regions.jobs.submit"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/regions/string/jobs:submit \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "job": {
      "driverSchedulingConfig": {
        "memoryMb": 0,
        "vcores": 0
      },
      "hadoopJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainClass": "string",
        "mainJarFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "hiveJob": {
        "continueOnFailure": true,
        "jarFileUris": [
          "string"
        ],
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "pigJob": {
        "continueOnFailure": true,
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "placement": {
        "clusterLabels": {
          "property1": "string",
          "property2": "string"
        },
        "clusterName": "string"
      },
      "prestoJob": {
        "clientTags": [
          "string"
        ],
        "continueOnFailure": true,
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "outputFormat": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        }
      },
      "pysparkJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainPythonFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "pythonFileUris": [
          "string"
        ]
      },
      "reference": {
        "jobId": "string",
        "projectId": "string"
      },
      "scheduling": {
        "maxFailuresPerHour": 0,
        "maxFailuresTotal": 0
      },
      "sparkJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainClass": "string",
        "mainJarFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "sparkRJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainRFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "sparkSqlJob": {
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "trinoJob": {
        "clientTags": [
          "string"
        ],
        "continueOnFailure": true,
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "outputFormat": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        }
      }
    },
    "requestId": "string"
  }'
```

`POST /v1/projects/{projectId}/regions/{region}/jobs:submit`

Submits a job to a cluster.

> Body parameter

```json
{
  "job": {
    "driverSchedulingConfig": {
      "memoryMb": 0,
      "vcores": 0
    },
    "hadoopJob": {
      "archiveUris": [
        "string"
      ],
      "args": [
        "string"
      ],
      "fileUris": [
        "string"
      ],
      "jarFileUris": [
        "string"
      ],
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "mainClass": "string",
      "mainJarFileUri": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      }
    },
    "hiveJob": {
      "continueOnFailure": true,
      "jarFileUris": [
        "string"
      ],
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "queryFileUri": "string",
      "queryList": {
        "queries": [
          "string"
        ]
      },
      "scriptVariables": {
        "property1": "string",
        "property2": "string"
      }
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "pigJob": {
      "continueOnFailure": true,
      "jarFileUris": [
        "string"
      ],
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "queryFileUri": "string",
      "queryList": {
        "queries": [
          "string"
        ]
      },
      "scriptVariables": {
        "property1": "string",
        "property2": "string"
      }
    },
    "placement": {
      "clusterLabels": {
        "property1": "string",
        "property2": "string"
      },
      "clusterName": "string"
    },
    "prestoJob": {
      "clientTags": [
        "string"
      ],
      "continueOnFailure": true,
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "outputFormat": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "queryFileUri": "string",
      "queryList": {
        "queries": [
          "string"
        ]
      }
    },
    "pysparkJob": {
      "archiveUris": [
        "string"
      ],
      "args": [
        "string"
      ],
      "fileUris": [
        "string"
      ],
      "jarFileUris": [
        "string"
      ],
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "mainPythonFileUri": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "pythonFileUris": [
        "string"
      ]
    },
    "reference": {
      "jobId": "string",
      "projectId": "string"
    },
    "scheduling": {
      "maxFailuresPerHour": 0,
      "maxFailuresTotal": 0
    },
    "sparkJob": {
      "archiveUris": [
        "string"
      ],
      "args": [
        "string"
      ],
      "fileUris": [
        "string"
      ],
      "jarFileUris": [
        "string"
      ],
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "mainClass": "string",
      "mainJarFileUri": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      }
    },
    "sparkRJob": {
      "archiveUris": [
        "string"
      ],
      "args": [
        "string"
      ],
      "fileUris": [
        "string"
      ],
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "mainRFileUri": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      }
    },
    "sparkSqlJob": {
      "jarFileUris": [
        "string"
      ],
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "queryFileUri": "string",
      "queryList": {
        "queries": [
          "string"
        ]
      },
      "scriptVariables": {
        "property1": "string",
        "property2": "string"
      }
    },
    "trinoJob": {
      "clientTags": [
        "string"
      ],
      "continueOnFailure": true,
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "outputFormat": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "queryFileUri": "string",
      "queryList": {
        "queries": [
          "string"
        ]
      }
    }
  },
  "requestId": "string"
}
```

<h3 id="dataprocprojectsregionsjobssubmit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. The ID of the Google Cloud Platform project that the job belongs to.|
|region|path|string|true|Required. The Dataproc region in which to handle the request.|
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
|body|body|[SubmitJobRequest](#schemasubmitjobrequest)|false|none|
|» job|body|[Job](#schemajob)|false|Required. The job resource.|
|» requestId|body|string|false|Optional. A unique id used to identify the request. If the server receives two SubmitJobRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.SubmitJobRequest)s with the same id, then the second request will be ignored and the first Job created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.|

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
  "driverControlFilesUri": "string",
  "driverOutputResourceUri": "string",
  "driverSchedulingConfig": {
    "memoryMb": 0,
    "vcores": 0
  },
  "hadoopJob": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "mainClass": "string",
    "mainJarFileUri": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "hiveJob": {
    "continueOnFailure": true,
    "jarFileUris": [
      "string"
    ],
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    },
    "scriptVariables": {
      "property1": "string",
      "property2": "string"
    }
  },
  "jobUuid": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "pigJob": {
    "continueOnFailure": true,
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    },
    "scriptVariables": {
      "property1": "string",
      "property2": "string"
    }
  },
  "placement": {
    "clusterLabels": {
      "property1": "string",
      "property2": "string"
    },
    "clusterName": "string",
    "clusterUuid": "string"
  },
  "prestoJob": {
    "clientTags": [
      "string"
    ],
    "continueOnFailure": true,
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "outputFormat": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    }
  },
  "pysparkJob": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "mainPythonFileUri": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "pythonFileUris": [
      "string"
    ]
  },
  "reference": {
    "jobId": "string",
    "projectId": "string"
  },
  "scheduling": {
    "maxFailuresPerHour": 0,
    "maxFailuresTotal": 0
  },
  "sparkJob": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "mainClass": "string",
    "mainJarFileUri": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "sparkRJob": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "mainRFileUri": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "sparkSqlJob": {
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    },
    "scriptVariables": {
      "property1": "string",
      "property2": "string"
    }
  },
  "status": {
    "details": "string",
    "state": "STATE_UNSPECIFIED",
    "stateStartTime": "string",
    "substate": "UNSPECIFIED"
  },
  "statusHistory": [
    {
      "details": "string",
      "state": "STATE_UNSPECIFIED",
      "stateStartTime": "string",
      "substate": "UNSPECIFIED"
    }
  ],
  "trinoJob": {
    "clientTags": [
      "string"
    ],
    "continueOnFailure": true,
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "outputFormat": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    }
  },
  "yarnApplications": [
    {
      "name": "string",
      "progress": 0,
      "state": "STATE_UNSPECIFIED",
      "trackingUrl": "string"
    }
  ]
}
```

<h3 id="dataprocprojectsregionsjobssubmit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Job](#schemajob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.jobs.submitAsOperation

<a id="opIddataproc.projects.regions.jobs.submitAsOperation"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/regions/string/jobs:submitAsOperation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "job": {
      "driverSchedulingConfig": {
        "memoryMb": 0,
        "vcores": 0
      },
      "hadoopJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainClass": "string",
        "mainJarFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "hiveJob": {
        "continueOnFailure": true,
        "jarFileUris": [
          "string"
        ],
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "pigJob": {
        "continueOnFailure": true,
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "placement": {
        "clusterLabels": {
          "property1": "string",
          "property2": "string"
        },
        "clusterName": "string"
      },
      "prestoJob": {
        "clientTags": [
          "string"
        ],
        "continueOnFailure": true,
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "outputFormat": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        }
      },
      "pysparkJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainPythonFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "pythonFileUris": [
          "string"
        ]
      },
      "reference": {
        "jobId": "string",
        "projectId": "string"
      },
      "scheduling": {
        "maxFailuresPerHour": 0,
        "maxFailuresTotal": 0
      },
      "sparkJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainClass": "string",
        "mainJarFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "sparkRJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainRFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "sparkSqlJob": {
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "trinoJob": {
        "clientTags": [
          "string"
        ],
        "continueOnFailure": true,
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "outputFormat": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        }
      }
    },
    "requestId": "string"
  }'
```

`POST /v1/projects/{projectId}/regions/{region}/jobs:submitAsOperation`

Submits job to a cluster.

> Body parameter

```json
{
  "job": {
    "driverSchedulingConfig": {
      "memoryMb": 0,
      "vcores": 0
    },
    "hadoopJob": {
      "archiveUris": [
        "string"
      ],
      "args": [
        "string"
      ],
      "fileUris": [
        "string"
      ],
      "jarFileUris": [
        "string"
      ],
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "mainClass": "string",
      "mainJarFileUri": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      }
    },
    "hiveJob": {
      "continueOnFailure": true,
      "jarFileUris": [
        "string"
      ],
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "queryFileUri": "string",
      "queryList": {
        "queries": [
          "string"
        ]
      },
      "scriptVariables": {
        "property1": "string",
        "property2": "string"
      }
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "pigJob": {
      "continueOnFailure": true,
      "jarFileUris": [
        "string"
      ],
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "queryFileUri": "string",
      "queryList": {
        "queries": [
          "string"
        ]
      },
      "scriptVariables": {
        "property1": "string",
        "property2": "string"
      }
    },
    "placement": {
      "clusterLabels": {
        "property1": "string",
        "property2": "string"
      },
      "clusterName": "string"
    },
    "prestoJob": {
      "clientTags": [
        "string"
      ],
      "continueOnFailure": true,
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "outputFormat": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "queryFileUri": "string",
      "queryList": {
        "queries": [
          "string"
        ]
      }
    },
    "pysparkJob": {
      "archiveUris": [
        "string"
      ],
      "args": [
        "string"
      ],
      "fileUris": [
        "string"
      ],
      "jarFileUris": [
        "string"
      ],
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "mainPythonFileUri": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "pythonFileUris": [
        "string"
      ]
    },
    "reference": {
      "jobId": "string",
      "projectId": "string"
    },
    "scheduling": {
      "maxFailuresPerHour": 0,
      "maxFailuresTotal": 0
    },
    "sparkJob": {
      "archiveUris": [
        "string"
      ],
      "args": [
        "string"
      ],
      "fileUris": [
        "string"
      ],
      "jarFileUris": [
        "string"
      ],
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "mainClass": "string",
      "mainJarFileUri": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      }
    },
    "sparkRJob": {
      "archiveUris": [
        "string"
      ],
      "args": [
        "string"
      ],
      "fileUris": [
        "string"
      ],
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "mainRFileUri": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      }
    },
    "sparkSqlJob": {
      "jarFileUris": [
        "string"
      ],
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "queryFileUri": "string",
      "queryList": {
        "queries": [
          "string"
        ]
      },
      "scriptVariables": {
        "property1": "string",
        "property2": "string"
      }
    },
    "trinoJob": {
      "clientTags": [
        "string"
      ],
      "continueOnFailure": true,
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "outputFormat": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "queryFileUri": "string",
      "queryList": {
        "queries": [
          "string"
        ]
      }
    }
  },
  "requestId": "string"
}
```

<h3 id="dataprocprojectsregionsjobssubmitasoperation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. The ID of the Google Cloud Platform project that the job belongs to.|
|region|path|string|true|Required. The Dataproc region in which to handle the request.|
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
|body|body|[SubmitJobRequest](#schemasubmitjobrequest)|false|none|
|» job|body|[Job](#schemajob)|false|Required. The job resource.|
|» requestId|body|string|false|Optional. A unique id used to identify the request. If the server receives two SubmitJobRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.SubmitJobRequest)s with the same id, then the second request will be ignored and the first Job created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.|

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

<h3 id="dataprocprojectsregionsjobssubmitasoperation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.workflowTemplates.get

<a id="opIddataproc.projects.regions.workflowTemplates.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.

<h3 id="dataprocprojectsregionsworkflowtemplatesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.get, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.get, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}|
|version|query|integer|false|Optional. The version of workflow template to retrieve. Only previously instantiated versions can be retrieved.If unspecified, retrieves the current version.|
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
  "createTime": "string",
  "dagTimeout": "string",
  "id": "string",
  "jobs": [
    {
      "hadoopJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainClass": "string",
        "mainJarFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "hiveJob": {
        "continueOnFailure": true,
        "jarFileUris": [
          "string"
        ],
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "pigJob": {
        "continueOnFailure": true,
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "prerequisiteStepIds": [
        "string"
      ],
      "prestoJob": {
        "clientTags": [
          "string"
        ],
        "continueOnFailure": true,
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "outputFormat": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        }
      },
      "pysparkJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainPythonFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "pythonFileUris": [
          "string"
        ]
      },
      "scheduling": {
        "maxFailuresPerHour": 0,
        "maxFailuresTotal": 0
      },
      "sparkJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainClass": "string",
        "mainJarFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "sparkRJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainRFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "sparkSqlJob": {
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "stepId": "string",
      "trinoJob": {
        "clientTags": [
          "string"
        ],
        "continueOnFailure": true,
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "outputFormat": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        }
      }
    }
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "parameters": [
    {
      "description": "string",
      "fields": [
        "string"
      ],
      "name": "string",
      "validation": {
        "regex": {
          "regexes": [
            "string"
          ]
        },
        "values": {
          "values": [
            "string"
          ]
        }
      }
    }
  ],
  "placement": {
    "clusterSelector": {
      "clusterLabels": {
        "property1": "string",
        "property2": "string"
      },
      "zone": "string"
    },
    "managedCluster": {
      "clusterName": "string",
      "config": {
        "autoscalingConfig": {
          "policyUri": "string"
        },
        "auxiliaryNodeGroups": [
          {
            "nodeGroup": {
              "labels": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string",
              "nodeGroupConfig": {
                "accelerators": [
                  {
                    "acceleratorCount": 0,
                    "acceleratorTypeUri": "string"
                  }
                ],
                "diskConfig": {
                  "bootDiskSizeGb": 0,
                  "bootDiskType": "string",
                  "localSsdInterface": "string",
                  "numLocalSsds": 0
                },
                "imageUri": "string",
                "instanceNames": [
                  "string"
                ],
                "instanceReferences": [
                  {
                    "instanceId": "string",
                    "instanceName": "string",
                    "publicEciesKey": "string",
                    "publicKey": "string"
                  }
                ],
                "isPreemptible": true,
                "machineTypeUri": "string",
                "managedGroupConfig": {
                  "instanceGroupManagerName": "string",
                  "instanceTemplateName": "string"
                },
                "minCpuPlatform": "string",
                "numInstances": 0,
                "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
              },
              "roles": [
                "ROLE_UNSPECIFIED"
              ]
            },
            "nodeGroupId": "string"
          }
        ],
        "configBucket": "string",
        "dataprocMetricConfig": {
          "metrics": [
            {
              "metricOverrides": [
                "string"
              ],
              "metricSource": "METRIC_SOURCE_UNSPECIFIED"
            }
          ]
        },
        "encryptionConfig": {
          "gcePdKmsKeyName": "string",
          "kmsKey": "string"
        },
        "endpointConfig": {
          "enableHttpPortAccess": true,
          "httpPorts": {
            "property1": "string",
            "property2": "string"
          }
        },
        "gceClusterConfig": {
          "confidentialInstanceConfig": {
            "enableConfidentialCompute": true
          },
          "internalIpOnly": true,
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "networkUri": "string",
          "nodeGroupAffinity": {
            "nodeGroupUri": "string"
          },
          "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
          "reservationAffinity": {
            "consumeReservationType": "TYPE_UNSPECIFIED",
            "key": "string",
            "values": [
              "string"
            ]
          },
          "serviceAccount": "string",
          "serviceAccountScopes": [
            "string"
          ],
          "shieldedInstanceConfig": {
            "enableIntegrityMonitoring": true,
            "enableSecureBoot": true,
            "enableVtpm": true
          },
          "subnetworkUri": "string",
          "tags": [
            "string"
          ],
          "zoneUri": "string"
        },
        "gkeClusterConfig": {
          "gkeClusterTarget": "string",
          "namespacedGkeDeploymentTarget": {
            "clusterNamespace": "string",
            "targetGkeCluster": "string"
          },
          "nodePoolTarget": [
            {
              "nodePool": "string",
              "nodePoolConfig": {
                "autoscaling": {
                  "maxNodeCount": 0,
                  "minNodeCount": 0
                },
                "config": {
                  "accelerators": [
                    {
                      "acceleratorCount": "string",
                      "acceleratorType": "string",
                      "gpuPartitionSize": "string"
                    }
                  ],
                  "bootDiskKmsKey": "string",
                  "localSsdCount": 0,
                  "machineType": "string",
                  "minCpuPlatform": "string",
                  "preemptible": true,
                  "spot": true
                },
                "locations": [
                  "string"
                ]
              },
              "roles": [
                "ROLE_UNSPECIFIED"
              ]
            }
          ]
        },
        "initializationActions": [
          {
            "executableFile": "string",
            "executionTimeout": "string"
          }
        ],
        "lifecycleConfig": {
          "autoDeleteTime": "string",
          "autoDeleteTtl": "string",
          "idleDeleteTtl": "string",
          "idleStartTime": "string"
        },
        "masterConfig": {
          "accelerators": [
            {
              "acceleratorCount": 0,
              "acceleratorTypeUri": "string"
            }
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string",
            "localSsdInterface": "string",
            "numLocalSsds": 0
          },
          "imageUri": "string",
          "instanceNames": [
            "string"
          ],
          "instanceReferences": [
            {
              "instanceId": "string",
              "instanceName": "string",
              "publicEciesKey": "string",
              "publicKey": "string"
            }
          ],
          "isPreemptible": true,
          "machineTypeUri": "string",
          "managedGroupConfig": {
            "instanceGroupManagerName": "string",
            "instanceTemplateName": "string"
          },
          "minCpuPlatform": "string",
          "numInstances": 0,
          "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
        },
        "metastoreConfig": {
          "dataprocMetastoreService": "string"
        },
        "secondaryWorkerConfig": {
          "accelerators": [
            {
              "acceleratorCount": 0,
              "acceleratorTypeUri": "string"
            }
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string",
            "localSsdInterface": "string",
            "numLocalSsds": 0
          },
          "imageUri": "string",
          "instanceNames": [
            "string"
          ],
          "instanceReferences": [
            {
              "instanceId": "string",
              "instanceName": "string",
              "publicEciesKey": "string",
              "publicKey": "string"
            }
          ],
          "isPreemptible": true,
          "machineTypeUri": "string",
          "managedGroupConfig": {
            "instanceGroupManagerName": "string",
            "instanceTemplateName": "string"
          },
          "minCpuPlatform": "string",
          "numInstances": 0,
          "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
        },
        "securityConfig": {
          "identityConfig": {
            "userServiceAccountMapping": {
              "property1": "string",
              "property2": "string"
            }
          },
          "kerberosConfig": {
            "crossRealmTrustAdminServer": "string",
            "crossRealmTrustKdc": "string",
            "crossRealmTrustRealm": "string",
            "crossRealmTrustSharedPasswordUri": "string",
            "enableKerberos": true,
            "kdcDbKeyUri": "string",
            "keyPasswordUri": "string",
            "keystorePasswordUri": "string",
            "keystoreUri": "string",
            "kmsKeyUri": "string",
            "realm": "string",
            "rootPrincipalPasswordUri": "string",
            "tgtLifetimeHours": 0,
            "truststorePasswordUri": "string",
            "truststoreUri": "string"
          }
        },
        "softwareConfig": {
          "imageVersion": "string",
          "optionalComponents": [
            "COMPONENT_UNSPECIFIED"
          ],
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        },
        "tempBucket": "string",
        "workerConfig": {
          "accelerators": [
            {
              "acceleratorCount": 0,
              "acceleratorTypeUri": "string"
            }
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string",
            "localSsdInterface": "string",
            "numLocalSsds": 0
          },
          "imageUri": "string",
          "instanceNames": [
            "string"
          ],
          "instanceReferences": [
            {
              "instanceId": "string",
              "instanceName": "string",
              "publicEciesKey": "string",
              "publicKey": "string"
            }
          ],
          "isPreemptible": true,
          "machineTypeUri": "string",
          "managedGroupConfig": {
            "instanceGroupManagerName": "string",
            "instanceTemplateName": "string"
          },
          "minCpuPlatform": "string",
          "numInstances": 0,
          "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
        }
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "updateTime": "string",
  "version": 0
}
```

<h3 id="dataprocprojectsregionsworkflowtemplatesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[WorkflowTemplate](#schemaworkflowtemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.workflowTemplates.update

<a id="opIddataproc.projects.regions.workflowTemplates.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dagTimeout": "string",
    "id": "string",
    "jobs": [
      {
        "hadoopJob": {
          "archiveUris": [
            "string"
          ],
          "args": [
            "string"
          ],
          "fileUris": [
            "string"
          ],
          "jarFileUris": [
            "string"
          ],
          "loggingConfig": {
            "driverLogLevels": {
              "property1": "LEVEL_UNSPECIFIED",
              "property2": "LEVEL_UNSPECIFIED"
            }
          },
          "mainClass": "string",
          "mainJarFileUri": "string",
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        },
        "hiveJob": {
          "continueOnFailure": true,
          "jarFileUris": [
            "string"
          ],
          "properties": {
            "property1": "string",
            "property2": "string"
          },
          "queryFileUri": "string",
          "queryList": {
            "queries": [
              "string"
            ]
          },
          "scriptVariables": {
            "property1": "string",
            "property2": "string"
          }
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "pigJob": {
          "continueOnFailure": true,
          "jarFileUris": [
            "string"
          ],
          "loggingConfig": {
            "driverLogLevels": {
              "property1": "LEVEL_UNSPECIFIED",
              "property2": "LEVEL_UNSPECIFIED"
            }
          },
          "properties": {
            "property1": "string",
            "property2": "string"
          },
          "queryFileUri": "string",
          "queryList": {
            "queries": [
              "string"
            ]
          },
          "scriptVariables": {
            "property1": "string",
            "property2": "string"
          }
        },
        "prerequisiteStepIds": [
          "string"
        ],
        "prestoJob": {
          "clientTags": [
            "string"
          ],
          "continueOnFailure": true,
          "loggingConfig": {
            "driverLogLevels": {
              "property1": "LEVEL_UNSPECIFIED",
              "property2": "LEVEL_UNSPECIFIED"
            }
          },
          "outputFormat": "string",
          "properties": {
            "property1": "string",
            "property2": "string"
          },
          "queryFileUri": "string",
          "queryList": {
            "queries": [
              "string"
            ]
          }
        },
        "pysparkJob": {
          "archiveUris": [
            "string"
          ],
          "args": [
            "string"
          ],
          "fileUris": [
            "string"
          ],
          "jarFileUris": [
            "string"
          ],
          "loggingConfig": {
            "driverLogLevels": {
              "property1": "LEVEL_UNSPECIFIED",
              "property2": "LEVEL_UNSPECIFIED"
            }
          },
          "mainPythonFileUri": "string",
          "properties": {
            "property1": "string",
            "property2": "string"
          },
          "pythonFileUris": [
            "string"
          ]
        },
        "scheduling": {
          "maxFailuresPerHour": 0,
          "maxFailuresTotal": 0
        },
        "sparkJob": {
          "archiveUris": [
            "string"
          ],
          "args": [
            "string"
          ],
          "fileUris": [
            "string"
          ],
          "jarFileUris": [
            "string"
          ],
          "loggingConfig": {
            "driverLogLevels": {
              "property1": "LEVEL_UNSPECIFIED",
              "property2": "LEVEL_UNSPECIFIED"
            }
          },
          "mainClass": "string",
          "mainJarFileUri": "string",
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        },
        "sparkRJob": {
          "archiveUris": [
            "string"
          ],
          "args": [
            "string"
          ],
          "fileUris": [
            "string"
          ],
          "loggingConfig": {
            "driverLogLevels": {
              "property1": "LEVEL_UNSPECIFIED",
              "property2": "LEVEL_UNSPECIFIED"
            }
          },
          "mainRFileUri": "string",
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        },
        "sparkSqlJob": {
          "jarFileUris": [
            "string"
          ],
          "loggingConfig": {
            "driverLogLevels": {
              "property1": "LEVEL_UNSPECIFIED",
              "property2": "LEVEL_UNSPECIFIED"
            }
          },
          "properties": {
            "property1": "string",
            "property2": "string"
          },
          "queryFileUri": "string",
          "queryList": {
            "queries": [
              "string"
            ]
          },
          "scriptVariables": {
            "property1": "string",
            "property2": "string"
          }
        },
        "stepId": "string",
        "trinoJob": {
          "clientTags": [
            "string"
          ],
          "continueOnFailure": true,
          "loggingConfig": {
            "driverLogLevels": {
              "property1": "LEVEL_UNSPECIFIED",
              "property2": "LEVEL_UNSPECIFIED"
            }
          },
          "outputFormat": "string",
          "properties": {
            "property1": "string",
            "property2": "string"
          },
          "queryFileUri": "string",
          "queryList": {
            "queries": [
              "string"
            ]
          }
        }
      }
    ],
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "parameters": [
      {
        "description": "string",
        "fields": [
          "string"
        ],
        "name": "string",
        "validation": {
          "regex": {
            "regexes": [
              "string"
            ]
          },
          "values": {
            "values": [
              "string"
            ]
          }
        }
      }
    ],
    "placement": {
      "clusterSelector": {
        "clusterLabels": {
          "property1": "string",
          "property2": "string"
        },
        "zone": "string"
      },
      "managedCluster": {
        "clusterName": "string",
        "config": {
          "autoscalingConfig": {
            "policyUri": "string"
          },
          "auxiliaryNodeGroups": [
            {
              "nodeGroup": {
                "labels": {
                  "property1": "string",
                  "property2": "string"
                },
                "name": "string",
                "nodeGroupConfig": {
                  "accelerators": [
                    {
                      "acceleratorCount": 0,
                      "acceleratorTypeUri": "string"
                    }
                  ],
                  "diskConfig": {
                    "bootDiskSizeGb": 0,
                    "bootDiskType": "string",
                    "localSsdInterface": "string",
                    "numLocalSsds": 0
                  },
                  "imageUri": "string",
                  "machineTypeUri": "string",
                  "minCpuPlatform": "string",
                  "numInstances": 0,
                  "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
                },
                "roles": [
                  "ROLE_UNSPECIFIED"
                ]
              },
              "nodeGroupId": "string"
            }
          ],
          "configBucket": "string",
          "dataprocMetricConfig": {
            "metrics": [
              {
                "metricOverrides": [
                  "string"
                ],
                "metricSource": "METRIC_SOURCE_UNSPECIFIED"
              }
            ]
          },
          "encryptionConfig": {
            "gcePdKmsKeyName": "string",
            "kmsKey": "string"
          },
          "endpointConfig": {
            "enableHttpPortAccess": true
          },
          "gceClusterConfig": {
            "confidentialInstanceConfig": {
              "enableConfidentialCompute": true
            },
            "internalIpOnly": true,
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "networkUri": "string",
            "nodeGroupAffinity": {
              "nodeGroupUri": "string"
            },
            "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
            "reservationAffinity": {
              "consumeReservationType": "TYPE_UNSPECIFIED",
              "key": "string",
              "values": [
                "string"
              ]
            },
            "serviceAccount": "string",
            "serviceAccountScopes": [
              "string"
            ],
            "shieldedInstanceConfig": {
              "enableIntegrityMonitoring": true,
              "enableSecureBoot": true,
              "enableVtpm": true
            },
            "subnetworkUri": "string",
            "tags": [
              "string"
            ],
            "zoneUri": "string"
          },
          "gkeClusterConfig": {
            "gkeClusterTarget": "string",
            "namespacedGkeDeploymentTarget": {
              "clusterNamespace": "string",
              "targetGkeCluster": "string"
            },
            "nodePoolTarget": [
              {
                "nodePool": "string",
                "nodePoolConfig": {
                  "autoscaling": {
                    "maxNodeCount": 0,
                    "minNodeCount": 0
                  },
                  "config": {
                    "accelerators": [
                      {
                        "acceleratorCount": "string",
                        "acceleratorType": "string",
                        "gpuPartitionSize": "string"
                      }
                    ],
                    "bootDiskKmsKey": "string",
                    "localSsdCount": 0,
                    "machineType": "string",
                    "minCpuPlatform": "string",
                    "preemptible": true,
                    "spot": true
                  },
                  "locations": [
                    "string"
                  ]
                },
                "roles": [
                  "ROLE_UNSPECIFIED"
                ]
              }
            ]
          },
          "initializationActions": [
            {
              "executableFile": "string",
              "executionTimeout": "string"
            }
          ],
          "lifecycleConfig": {
            "autoDeleteTime": "string",
            "autoDeleteTtl": "string",
            "idleDeleteTtl": "string"
          },
          "masterConfig": {
            "accelerators": [
              {
                "acceleratorCount": 0,
                "acceleratorTypeUri": "string"
              }
            ],
            "diskConfig": {
              "bootDiskSizeGb": 0,
              "bootDiskType": "string",
              "localSsdInterface": "string",
              "numLocalSsds": 0
            },
            "imageUri": "string",
            "machineTypeUri": "string",
            "minCpuPlatform": "string",
            "numInstances": 0,
            "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
          },
          "metastoreConfig": {
            "dataprocMetastoreService": "string"
          },
          "secondaryWorkerConfig": {
            "accelerators": [
              {
                "acceleratorCount": 0,
                "acceleratorTypeUri": "string"
              }
            ],
            "diskConfig": {
              "bootDiskSizeGb": 0,
              "bootDiskType": "string",
              "localSsdInterface": "string",
              "numLocalSsds": 0
            },
            "imageUri": "string",
            "machineTypeUri": "string",
            "minCpuPlatform": "string",
            "numInstances": 0,
            "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
          },
          "securityConfig": {
            "identityConfig": {
              "userServiceAccountMapping": {
                "property1": "string",
                "property2": "string"
              }
            },
            "kerberosConfig": {
              "crossRealmTrustAdminServer": "string",
              "crossRealmTrustKdc": "string",
              "crossRealmTrustRealm": "string",
              "crossRealmTrustSharedPasswordUri": "string",
              "enableKerberos": true,
              "kdcDbKeyUri": "string",
              "keyPasswordUri": "string",
              "keystorePasswordUri": "string",
              "keystoreUri": "string",
              "kmsKeyUri": "string",
              "realm": "string",
              "rootPrincipalPasswordUri": "string",
              "tgtLifetimeHours": 0,
              "truststorePasswordUri": "string",
              "truststoreUri": "string"
            }
          },
          "softwareConfig": {
            "imageVersion": "string",
            "optionalComponents": [
              "COMPONENT_UNSPECIFIED"
            ],
            "properties": {
              "property1": "string",
              "property2": "string"
            }
          },
          "tempBucket": "string",
          "workerConfig": {
            "accelerators": [
              {
                "acceleratorCount": 0,
                "acceleratorTypeUri": "string"
              }
            ],
            "diskConfig": {
              "bootDiskSizeGb": 0,
              "bootDiskType": "string",
              "localSsdInterface": "string",
              "numLocalSsds": 0
            },
            "imageUri": "string",
            "machineTypeUri": "string",
            "minCpuPlatform": "string",
            "numInstances": 0,
            "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
          }
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "version": 0
  }'
```

`PUT /v1/{name}`

Updates (replaces) workflow template. The updated template must contain version that matches the current server version.

> Body parameter

```json
{
  "dagTimeout": "string",
  "id": "string",
  "jobs": [
    {
      "hadoopJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainClass": "string",
        "mainJarFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "hiveJob": {
        "continueOnFailure": true,
        "jarFileUris": [
          "string"
        ],
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "pigJob": {
        "continueOnFailure": true,
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "prerequisiteStepIds": [
        "string"
      ],
      "prestoJob": {
        "clientTags": [
          "string"
        ],
        "continueOnFailure": true,
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "outputFormat": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        }
      },
      "pysparkJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainPythonFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "pythonFileUris": [
          "string"
        ]
      },
      "scheduling": {
        "maxFailuresPerHour": 0,
        "maxFailuresTotal": 0
      },
      "sparkJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainClass": "string",
        "mainJarFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "sparkRJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainRFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "sparkSqlJob": {
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "stepId": "string",
      "trinoJob": {
        "clientTags": [
          "string"
        ],
        "continueOnFailure": true,
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "outputFormat": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        }
      }
    }
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "parameters": [
    {
      "description": "string",
      "fields": [
        "string"
      ],
      "name": "string",
      "validation": {
        "regex": {
          "regexes": [
            "string"
          ]
        },
        "values": {
          "values": [
            "string"
          ]
        }
      }
    }
  ],
  "placement": {
    "clusterSelector": {
      "clusterLabels": {
        "property1": "string",
        "property2": "string"
      },
      "zone": "string"
    },
    "managedCluster": {
      "clusterName": "string",
      "config": {
        "autoscalingConfig": {
          "policyUri": "string"
        },
        "auxiliaryNodeGroups": [
          {
            "nodeGroup": {
              "labels": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string",
              "nodeGroupConfig": {
                "accelerators": [
                  {
                    "acceleratorCount": 0,
                    "acceleratorTypeUri": "string"
                  }
                ],
                "diskConfig": {
                  "bootDiskSizeGb": 0,
                  "bootDiskType": "string",
                  "localSsdInterface": "string",
                  "numLocalSsds": 0
                },
                "imageUri": "string",
                "machineTypeUri": "string",
                "minCpuPlatform": "string",
                "numInstances": 0,
                "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
              },
              "roles": [
                "ROLE_UNSPECIFIED"
              ]
            },
            "nodeGroupId": "string"
          }
        ],
        "configBucket": "string",
        "dataprocMetricConfig": {
          "metrics": [
            {
              "metricOverrides": [
                "string"
              ],
              "metricSource": "METRIC_SOURCE_UNSPECIFIED"
            }
          ]
        },
        "encryptionConfig": {
          "gcePdKmsKeyName": "string",
          "kmsKey": "string"
        },
        "endpointConfig": {
          "enableHttpPortAccess": true
        },
        "gceClusterConfig": {
          "confidentialInstanceConfig": {
            "enableConfidentialCompute": true
          },
          "internalIpOnly": true,
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "networkUri": "string",
          "nodeGroupAffinity": {
            "nodeGroupUri": "string"
          },
          "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
          "reservationAffinity": {
            "consumeReservationType": "TYPE_UNSPECIFIED",
            "key": "string",
            "values": [
              "string"
            ]
          },
          "serviceAccount": "string",
          "serviceAccountScopes": [
            "string"
          ],
          "shieldedInstanceConfig": {
            "enableIntegrityMonitoring": true,
            "enableSecureBoot": true,
            "enableVtpm": true
          },
          "subnetworkUri": "string",
          "tags": [
            "string"
          ],
          "zoneUri": "string"
        },
        "gkeClusterConfig": {
          "gkeClusterTarget": "string",
          "namespacedGkeDeploymentTarget": {
            "clusterNamespace": "string",
            "targetGkeCluster": "string"
          },
          "nodePoolTarget": [
            {
              "nodePool": "string",
              "nodePoolConfig": {
                "autoscaling": {
                  "maxNodeCount": 0,
                  "minNodeCount": 0
                },
                "config": {
                  "accelerators": [
                    {
                      "acceleratorCount": "string",
                      "acceleratorType": "string",
                      "gpuPartitionSize": "string"
                    }
                  ],
                  "bootDiskKmsKey": "string",
                  "localSsdCount": 0,
                  "machineType": "string",
                  "minCpuPlatform": "string",
                  "preemptible": true,
                  "spot": true
                },
                "locations": [
                  "string"
                ]
              },
              "roles": [
                "ROLE_UNSPECIFIED"
              ]
            }
          ]
        },
        "initializationActions": [
          {
            "executableFile": "string",
            "executionTimeout": "string"
          }
        ],
        "lifecycleConfig": {
          "autoDeleteTime": "string",
          "autoDeleteTtl": "string",
          "idleDeleteTtl": "string"
        },
        "masterConfig": {
          "accelerators": [
            {
              "acceleratorCount": 0,
              "acceleratorTypeUri": "string"
            }
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string",
            "localSsdInterface": "string",
            "numLocalSsds": 0
          },
          "imageUri": "string",
          "machineTypeUri": "string",
          "minCpuPlatform": "string",
          "numInstances": 0,
          "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
        },
        "metastoreConfig": {
          "dataprocMetastoreService": "string"
        },
        "secondaryWorkerConfig": {
          "accelerators": [
            {
              "acceleratorCount": 0,
              "acceleratorTypeUri": "string"
            }
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string",
            "localSsdInterface": "string",
            "numLocalSsds": 0
          },
          "imageUri": "string",
          "machineTypeUri": "string",
          "minCpuPlatform": "string",
          "numInstances": 0,
          "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
        },
        "securityConfig": {
          "identityConfig": {
            "userServiceAccountMapping": {
              "property1": "string",
              "property2": "string"
            }
          },
          "kerberosConfig": {
            "crossRealmTrustAdminServer": "string",
            "crossRealmTrustKdc": "string",
            "crossRealmTrustRealm": "string",
            "crossRealmTrustSharedPasswordUri": "string",
            "enableKerberos": true,
            "kdcDbKeyUri": "string",
            "keyPasswordUri": "string",
            "keystorePasswordUri": "string",
            "keystoreUri": "string",
            "kmsKeyUri": "string",
            "realm": "string",
            "rootPrincipalPasswordUri": "string",
            "tgtLifetimeHours": 0,
            "truststorePasswordUri": "string",
            "truststoreUri": "string"
          }
        },
        "softwareConfig": {
          "imageVersion": "string",
          "optionalComponents": [
            "COMPONENT_UNSPECIFIED"
          ],
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        },
        "tempBucket": "string",
        "workerConfig": {
          "accelerators": [
            {
              "acceleratorCount": 0,
              "acceleratorTypeUri": "string"
            }
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string",
            "localSsdInterface": "string",
            "numLocalSsds": 0
          },
          "imageUri": "string",
          "machineTypeUri": "string",
          "minCpuPlatform": "string",
          "numInstances": 0,
          "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
        }
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "version": 0
}
```

<h3 id="dataprocprojectsregionsworkflowtemplatesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}|
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
|body|body|[WorkflowTemplate](#schemaworkflowtemplate)|false|none|
|» dagTimeout|body|string(google-duration)|false|Optional. Timeout duration for the DAG of jobs, expressed in seconds (see JSON representation of duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). The timeout duration must be from 10 minutes ("600s") to 24 hours ("86400s"). The timer begins when the first job is submitted. If the workflow is running at the end of the timeout period, any remaining jobs are cancelled, the workflow is ended, and if the workflow was running on a managed cluster, the cluster is deleted.|
|» id|body|string|false|none|
|» jobs|body|[[OrderedJob](#schemaorderedjob)]|false|Required. The Directed Acyclic Graph of Jobs to submit.|
|» labels|body|object|false|Optional. The labels to associate with this template. These labels will be propagated to all jobs and clusters created by the workflow instance.Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).No more than 32 labels can be associated with a template.|
|» » **additionalProperties**|body|string|false|none|
|» parameters|body|[[TemplateParameter](#schematemplateparameter)]|false|Optional. Template parameters whose values are substituted into the template. Values for parameters must be provided when the template is instantiated.|
|» placement|body|[WorkflowTemplatePlacement](#schemaworkflowtemplateplacement)|false|Required. WorkflowTemplate scheduling information.|
|» version|body|integer(int32)|false|Optional. Used to perform a consistent read-modify-write.This field should be left blank for a CreateWorkflowTemplate request. It is required for an UpdateWorkflowTemplate request, and must match the current server version. A typical update template flow would fetch the current template with a GetWorkflowTemplate request, which will return the current template with the version field filled in with the current server version. The user updates other fields in the template, then returns it as part of the UpdateWorkflowTemplate request.|

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
  "createTime": "string",
  "dagTimeout": "string",
  "id": "string",
  "jobs": [
    {
      "hadoopJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainClass": "string",
        "mainJarFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "hiveJob": {
        "continueOnFailure": true,
        "jarFileUris": [
          "string"
        ],
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "pigJob": {
        "continueOnFailure": true,
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "prerequisiteStepIds": [
        "string"
      ],
      "prestoJob": {
        "clientTags": [
          "string"
        ],
        "continueOnFailure": true,
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "outputFormat": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        }
      },
      "pysparkJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainPythonFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "pythonFileUris": [
          "string"
        ]
      },
      "scheduling": {
        "maxFailuresPerHour": 0,
        "maxFailuresTotal": 0
      },
      "sparkJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainClass": "string",
        "mainJarFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "sparkRJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainRFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "sparkSqlJob": {
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "stepId": "string",
      "trinoJob": {
        "clientTags": [
          "string"
        ],
        "continueOnFailure": true,
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "outputFormat": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        }
      }
    }
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "parameters": [
    {
      "description": "string",
      "fields": [
        "string"
      ],
      "name": "string",
      "validation": {
        "regex": {
          "regexes": [
            "string"
          ]
        },
        "values": {
          "values": [
            "string"
          ]
        }
      }
    }
  ],
  "placement": {
    "clusterSelector": {
      "clusterLabels": {
        "property1": "string",
        "property2": "string"
      },
      "zone": "string"
    },
    "managedCluster": {
      "clusterName": "string",
      "config": {
        "autoscalingConfig": {
          "policyUri": "string"
        },
        "auxiliaryNodeGroups": [
          {
            "nodeGroup": {
              "labels": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string",
              "nodeGroupConfig": {
                "accelerators": [
                  {
                    "acceleratorCount": 0,
                    "acceleratorTypeUri": "string"
                  }
                ],
                "diskConfig": {
                  "bootDiskSizeGb": 0,
                  "bootDiskType": "string",
                  "localSsdInterface": "string",
                  "numLocalSsds": 0
                },
                "imageUri": "string",
                "instanceNames": [
                  "string"
                ],
                "instanceReferences": [
                  {
                    "instanceId": "string",
                    "instanceName": "string",
                    "publicEciesKey": "string",
                    "publicKey": "string"
                  }
                ],
                "isPreemptible": true,
                "machineTypeUri": "string",
                "managedGroupConfig": {
                  "instanceGroupManagerName": "string",
                  "instanceTemplateName": "string"
                },
                "minCpuPlatform": "string",
                "numInstances": 0,
                "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
              },
              "roles": [
                "ROLE_UNSPECIFIED"
              ]
            },
            "nodeGroupId": "string"
          }
        ],
        "configBucket": "string",
        "dataprocMetricConfig": {
          "metrics": [
            {
              "metricOverrides": [
                "string"
              ],
              "metricSource": "METRIC_SOURCE_UNSPECIFIED"
            }
          ]
        },
        "encryptionConfig": {
          "gcePdKmsKeyName": "string",
          "kmsKey": "string"
        },
        "endpointConfig": {
          "enableHttpPortAccess": true,
          "httpPorts": {
            "property1": "string",
            "property2": "string"
          }
        },
        "gceClusterConfig": {
          "confidentialInstanceConfig": {
            "enableConfidentialCompute": true
          },
          "internalIpOnly": true,
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "networkUri": "string",
          "nodeGroupAffinity": {
            "nodeGroupUri": "string"
          },
          "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
          "reservationAffinity": {
            "consumeReservationType": "TYPE_UNSPECIFIED",
            "key": "string",
            "values": [
              "string"
            ]
          },
          "serviceAccount": "string",
          "serviceAccountScopes": [
            "string"
          ],
          "shieldedInstanceConfig": {
            "enableIntegrityMonitoring": true,
            "enableSecureBoot": true,
            "enableVtpm": true
          },
          "subnetworkUri": "string",
          "tags": [
            "string"
          ],
          "zoneUri": "string"
        },
        "gkeClusterConfig": {
          "gkeClusterTarget": "string",
          "namespacedGkeDeploymentTarget": {
            "clusterNamespace": "string",
            "targetGkeCluster": "string"
          },
          "nodePoolTarget": [
            {
              "nodePool": "string",
              "nodePoolConfig": {
                "autoscaling": {
                  "maxNodeCount": 0,
                  "minNodeCount": 0
                },
                "config": {
                  "accelerators": [
                    {
                      "acceleratorCount": "string",
                      "acceleratorType": "string",
                      "gpuPartitionSize": "string"
                    }
                  ],
                  "bootDiskKmsKey": "string",
                  "localSsdCount": 0,
                  "machineType": "string",
                  "minCpuPlatform": "string",
                  "preemptible": true,
                  "spot": true
                },
                "locations": [
                  "string"
                ]
              },
              "roles": [
                "ROLE_UNSPECIFIED"
              ]
            }
          ]
        },
        "initializationActions": [
          {
            "executableFile": "string",
            "executionTimeout": "string"
          }
        ],
        "lifecycleConfig": {
          "autoDeleteTime": "string",
          "autoDeleteTtl": "string",
          "idleDeleteTtl": "string",
          "idleStartTime": "string"
        },
        "masterConfig": {
          "accelerators": [
            {
              "acceleratorCount": 0,
              "acceleratorTypeUri": "string"
            }
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string",
            "localSsdInterface": "string",
            "numLocalSsds": 0
          },
          "imageUri": "string",
          "instanceNames": [
            "string"
          ],
          "instanceReferences": [
            {
              "instanceId": "string",
              "instanceName": "string",
              "publicEciesKey": "string",
              "publicKey": "string"
            }
          ],
          "isPreemptible": true,
          "machineTypeUri": "string",
          "managedGroupConfig": {
            "instanceGroupManagerName": "string",
            "instanceTemplateName": "string"
          },
          "minCpuPlatform": "string",
          "numInstances": 0,
          "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
        },
        "metastoreConfig": {
          "dataprocMetastoreService": "string"
        },
        "secondaryWorkerConfig": {
          "accelerators": [
            {
              "acceleratorCount": 0,
              "acceleratorTypeUri": "string"
            }
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string",
            "localSsdInterface": "string",
            "numLocalSsds": 0
          },
          "imageUri": "string",
          "instanceNames": [
            "string"
          ],
          "instanceReferences": [
            {
              "instanceId": "string",
              "instanceName": "string",
              "publicEciesKey": "string",
              "publicKey": "string"
            }
          ],
          "isPreemptible": true,
          "machineTypeUri": "string",
          "managedGroupConfig": {
            "instanceGroupManagerName": "string",
            "instanceTemplateName": "string"
          },
          "minCpuPlatform": "string",
          "numInstances": 0,
          "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
        },
        "securityConfig": {
          "identityConfig": {
            "userServiceAccountMapping": {
              "property1": "string",
              "property2": "string"
            }
          },
          "kerberosConfig": {
            "crossRealmTrustAdminServer": "string",
            "crossRealmTrustKdc": "string",
            "crossRealmTrustRealm": "string",
            "crossRealmTrustSharedPasswordUri": "string",
            "enableKerberos": true,
            "kdcDbKeyUri": "string",
            "keyPasswordUri": "string",
            "keystorePasswordUri": "string",
            "keystoreUri": "string",
            "kmsKeyUri": "string",
            "realm": "string",
            "rootPrincipalPasswordUri": "string",
            "tgtLifetimeHours": 0,
            "truststorePasswordUri": "string",
            "truststoreUri": "string"
          }
        },
        "softwareConfig": {
          "imageVersion": "string",
          "optionalComponents": [
            "COMPONENT_UNSPECIFIED"
          ],
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        },
        "tempBucket": "string",
        "workerConfig": {
          "accelerators": [
            {
              "acceleratorCount": 0,
              "acceleratorTypeUri": "string"
            }
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string",
            "localSsdInterface": "string",
            "numLocalSsds": 0
          },
          "imageUri": "string",
          "instanceNames": [
            "string"
          ],
          "instanceReferences": [
            {
              "instanceId": "string",
              "instanceName": "string",
              "publicEciesKey": "string",
              "publicKey": "string"
            }
          ],
          "isPreemptible": true,
          "machineTypeUri": "string",
          "managedGroupConfig": {
            "instanceGroupManagerName": "string",
            "instanceTemplateName": "string"
          },
          "minCpuPlatform": "string",
          "numInstances": 0,
          "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
        }
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "updateTime": "string",
  "version": 0
}
```

<h3 id="dataprocprojectsregionsworkflowtemplatesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[WorkflowTemplate](#schemaworkflowtemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.workflowTemplates.delete

<a id="opIddataproc.projects.regions.workflowTemplates.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes a workflow template. It does not cancel in-progress workflows.

<h3 id="dataprocprojectsregionsworkflowtemplatesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.delete, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.instantiate, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}|
|version|query|integer|false|Optional. The version of workflow template to delete. If specified, will only delete the template if the current server version matches specified version.|
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

<h3 id="dataprocprojectsregionsworkflowtemplatesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.operations.cancel

<a id="opIddataproc.projects.regions.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.

<h3 id="dataprocprojectsregionsoperationscancel-parameters">Parameters</h3>

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

<h3 id="dataprocprojectsregionsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.workflowTemplates.instantiate

<a id="opIddataproc.projects.regions.workflowTemplates.instantiate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:instantiate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "requestId": "string",
    "version": 0
  }'
```

`POST /v1/{name}:instantiate`

Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.

> Body parameter

```json
{
  "parameters": {
    "property1": "string",
    "property2": "string"
  },
  "requestId": "string",
  "version": 0
}
```

<h3 id="dataprocprojectsregionsworkflowtemplatesinstantiate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.instantiate, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.instantiate, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}|
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
|body|body|[InstantiateWorkflowTemplateRequest](#schemainstantiateworkflowtemplaterequest)|false|none|
|» parameters|body|object|false|Optional. Map from parameter names to values that should be used for those parameters. Values may not exceed 1000 characters.|
|» » **additionalProperties**|body|string|false|none|
|» requestId|body|string|false|Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.|
|» version|body|integer(int32)|false|Optional. The version of workflow template to instantiate. If specified, the workflow will be instantiated only if the current version of the workflow template has the supplied version.This option cannot be used to instantiate a previous version of workflow template.|

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

<h3 id="dataprocprojectsregionsworkflowtemplatesinstantiate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.clusters.nodeGroups.resize

<a id="opIddataproc.projects.regions.clusters.nodeGroups.resize"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:resize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "gracefulDecommissionTimeout": "string",
    "requestId": "string",
    "size": 0
  }'
```

`POST /v1/{name}:resize`

Resizes a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).

> Body parameter

```json
{
  "gracefulDecommissionTimeout": "string",
  "requestId": "string",
  "size": 0
}
```

<h3 id="dataprocprojectsregionsclustersnodegroupsresize-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the node group to resize. Format: projects/{project}/regions/{region}/clusters/{cluster}/nodeGroups/{nodeGroup}|
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
|body|body|[ResizeNodeGroupRequest](#schemaresizenodegrouprequest)|false|none|
|» gracefulDecommissionTimeout|body|string(google-duration)|false|Optional. Timeout for graceful YARN decommissioning. Graceful decommissioning (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/scaling-clusters#graceful_decommissioning) allows the removal of nodes from the Compute Engine node group without interrupting jobs in progress. This timeout specifies how long to wait for jobs in progress to finish before forcefully removing nodes (and potentially interrupting jobs). Default timeout is 0 (for forceful decommission), and the maximum allowed timeout is 1 day. (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).Only supported on Dataproc image versions 1.2 and higher.|
|» requestId|body|string|false|Optional. A unique ID used to identify the request. If the server receives two ResizeNodeGroupRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.ResizeNodeGroupRequests) with the same ID, the second request is ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.|
|» size|body|integer(int32)|false|Required. The number of running instances for the node group to maintain. The group adds or removes instances to maintain the number of instances specified by this parameter.|

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

<h3 id="dataprocprojectsregionsclustersnodegroupsresize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.autoscalingPolicies.list

<a id="opIddataproc.projects.regions.autoscalingPolicies.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/autoscalingPolicies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/autoscalingPolicies`

Lists autoscaling policies in the project.

<h3 id="dataprocprojectsregionsautoscalingpolicieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.list, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.autoscalingPolicies.list, the resource name of the location has the following format: projects/{project_id}/locations/{location}|
|pageSize|query|integer|false|Optional. The maximum number of results to return in each response. Must be less than or equal to 1000. Defaults to 100.|
|pageToken|query|string|false|Optional. The page token, returned by a previous call, to request the next page of results.|
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
  "policies": [
    {
      "basicAlgorithm": {
        "cooldownPeriod": "string",
        "sparkStandaloneConfig": {
          "gracefulDecommissionTimeout": "string",
          "scaleDownFactor": 0,
          "scaleDownMinWorkerFraction": 0,
          "scaleUpFactor": 0,
          "scaleUpMinWorkerFraction": 0
        },
        "yarnConfig": {
          "gracefulDecommissionTimeout": "string",
          "scaleDownFactor": 0,
          "scaleDownMinWorkerFraction": 0,
          "scaleUpFactor": 0,
          "scaleUpMinWorkerFraction": 0
        }
      },
      "id": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "secondaryWorkerConfig": {
        "maxInstances": 0,
        "minInstances": 0,
        "weight": 0
      },
      "workerConfig": {
        "maxInstances": 0,
        "minInstances": 0,
        "weight": 0
      }
    }
  ]
}
```

<h3 id="dataprocprojectsregionsautoscalingpolicieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAutoscalingPoliciesResponse](#schemalistautoscalingpoliciesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.autoscalingPolicies.create

<a id="opIddataproc.projects.regions.autoscalingPolicies.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/autoscalingPolicies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "basicAlgorithm": {
      "cooldownPeriod": "string",
      "sparkStandaloneConfig": {
        "gracefulDecommissionTimeout": "string",
        "scaleDownFactor": 0,
        "scaleDownMinWorkerFraction": 0,
        "scaleUpFactor": 0,
        "scaleUpMinWorkerFraction": 0
      },
      "yarnConfig": {
        "gracefulDecommissionTimeout": "string",
        "scaleDownFactor": 0,
        "scaleDownMinWorkerFraction": 0,
        "scaleUpFactor": 0,
        "scaleUpMinWorkerFraction": 0
      }
    },
    "id": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "secondaryWorkerConfig": {
      "maxInstances": 0,
      "minInstances": 0,
      "weight": 0
    },
    "workerConfig": {
      "maxInstances": 0,
      "minInstances": 0,
      "weight": 0
    }
  }'
```

`POST /v1/{parent}/autoscalingPolicies`

Creates new autoscaling policy.

> Body parameter

```json
{
  "basicAlgorithm": {
    "cooldownPeriod": "string",
    "sparkStandaloneConfig": {
      "gracefulDecommissionTimeout": "string",
      "scaleDownFactor": 0,
      "scaleDownMinWorkerFraction": 0,
      "scaleUpFactor": 0,
      "scaleUpMinWorkerFraction": 0
    },
    "yarnConfig": {
      "gracefulDecommissionTimeout": "string",
      "scaleDownFactor": 0,
      "scaleDownMinWorkerFraction": 0,
      "scaleUpFactor": 0,
      "scaleUpMinWorkerFraction": 0
    }
  },
  "id": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "secondaryWorkerConfig": {
    "maxInstances": 0,
    "minInstances": 0,
    "weight": 0
  },
  "workerConfig": {
    "maxInstances": 0,
    "minInstances": 0,
    "weight": 0
  }
}
```

<h3 id="dataprocprojectsregionsautoscalingpoliciescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.create, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.autoscalingPolicies.create, the resource name of the location has the following format: projects/{project_id}/locations/{location}|
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
|body|body|[AutoscalingPolicy](#schemaautoscalingpolicy)|false|none|
|» basicAlgorithm|body|[BasicAutoscalingAlgorithm](#schemabasicautoscalingalgorithm)|false|Basic algorithm for autoscaling.|
|» id|body|string|false|Required. The policy id.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters.|
|» labels|body|object|false|Optional. The labels to associate with this autoscaling policy. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with an autoscaling policy.|
|» » **additionalProperties**|body|string|false|none|
|» secondaryWorkerConfig|body|[InstanceGroupAutoscalingPolicyConfig](#schemainstancegroupautoscalingpolicyconfig)|false|Optional. Describes how the autoscaler will operate for secondary workers.|
|» workerConfig|body|[InstanceGroupAutoscalingPolicyConfig](#schemainstancegroupautoscalingpolicyconfig)|false|Required. Describes how the autoscaler will operate for primary workers.|

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
  "basicAlgorithm": {
    "cooldownPeriod": "string",
    "sparkStandaloneConfig": {
      "gracefulDecommissionTimeout": "string",
      "scaleDownFactor": 0,
      "scaleDownMinWorkerFraction": 0,
      "scaleUpFactor": 0,
      "scaleUpMinWorkerFraction": 0
    },
    "yarnConfig": {
      "gracefulDecommissionTimeout": "string",
      "scaleDownFactor": 0,
      "scaleDownMinWorkerFraction": 0,
      "scaleUpFactor": 0,
      "scaleUpMinWorkerFraction": 0
    }
  },
  "id": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "secondaryWorkerConfig": {
    "maxInstances": 0,
    "minInstances": 0,
    "weight": 0
  },
  "workerConfig": {
    "maxInstances": 0,
    "minInstances": 0,
    "weight": 0
  }
}
```

<h3 id="dataprocprojectsregionsautoscalingpoliciescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AutoscalingPolicy](#schemaautoscalingpolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.locations.batches.list

<a id="opIddataproc.projects.locations.batches.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/batches \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/batches`

Lists batch workloads.

<h3 id="dataprocprojectslocationsbatcheslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, which owns this collection of batches.|
|filter|query|string|false|Optional. A filter for the batches to return in the response.A filter is a logical expression constraining the values of various fields in each batch resource. Filters are case sensitive, and may contain multiple clauses combined with logical operators (AND/OR). Supported fields are batch_id, batch_uuid, state, and create_time.e.g. state = RUNNING and create_time < "2023-01-01T00:00:00Z" filters for batches in state RUNNING that were created before 2023-01-01See https://google.aip.dev/assets/misc/ebnf-filtering.txt for a detailed description of the filter syntax and a list of supported comparisons.|
|orderBy|query|string|false|Optional. Field(s) on which to sort the list of batches.Currently the only supported sort orders are unspecified (empty) and create_time desc to sort by most recently created batches first.See https://google.aip.dev/132#ordering for more details.|
|pageSize|query|integer|false|Optional. The maximum number of batches to return in each response. The service may return fewer than this value. The default page size is 20; the maximum page size is 1000.|
|pageToken|query|string|false|Optional. A page token received from a previous ListBatches call. Provide this token to retrieve the subsequent page.|
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
  "batches": [
    {
      "createTime": "string",
      "creator": "string",
      "environmentConfig": {
        "executionConfig": {
          "idleTtl": "string",
          "kmsKey": "string",
          "networkTags": [
            "string"
          ],
          "networkUri": "string",
          "serviceAccount": "string",
          "stagingBucket": "string",
          "subnetworkUri": "string",
          "ttl": "string"
        },
        "peripheralsConfig": {
          "metastoreService": "string",
          "sparkHistoryServerConfig": {
            "dataprocCluster": "string"
          }
        }
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "operation": "string",
      "pysparkBatch": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "mainPythonFileUri": "string",
        "pythonFileUris": [
          "string"
        ]
      },
      "runtimeConfig": {
        "containerImage": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "version": "string"
      },
      "runtimeInfo": {
        "approximateUsage": {
          "milliDcuSeconds": "string",
          "shuffleStorageGbSeconds": "string"
        },
        "currentUsage": {
          "milliDcu": "string",
          "shuffleStorageGb": "string",
          "snapshotTime": "string"
        },
        "diagnosticOutputUri": "string",
        "endpoints": {
          "property1": "string",
          "property2": "string"
        },
        "outputUri": "string"
      },
      "sparkBatch": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "mainClass": "string",
        "mainJarFileUri": "string"
      },
      "sparkRBatch": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "mainRFileUri": "string"
      },
      "sparkSqlBatch": {
        "jarFileUris": [
          "string"
        ],
        "queryFileUri": "string",
        "queryVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "state": "STATE_UNSPECIFIED",
      "stateHistory": [
        {
          "state": "STATE_UNSPECIFIED",
          "stateMessage": "string",
          "stateStartTime": "string"
        }
      ],
      "stateMessage": "string",
      "stateTime": "string",
      "uuid": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="dataprocprojectslocationsbatcheslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListBatchesResponse](#schemalistbatchesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.locations.batches.create

<a id="opIddataproc.projects.locations.batches.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/batches \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "environmentConfig": {
      "executionConfig": {
        "idleTtl": "string",
        "kmsKey": "string",
        "networkTags": [
          "string"
        ],
        "networkUri": "string",
        "serviceAccount": "string",
        "stagingBucket": "string",
        "subnetworkUri": "string",
        "ttl": "string"
      },
      "peripheralsConfig": {
        "metastoreService": "string",
        "sparkHistoryServerConfig": {
          "dataprocCluster": "string"
        }
      }
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "pysparkBatch": {
      "archiveUris": [
        "string"
      ],
      "args": [
        "string"
      ],
      "fileUris": [
        "string"
      ],
      "jarFileUris": [
        "string"
      ],
      "mainPythonFileUri": "string",
      "pythonFileUris": [
        "string"
      ]
    },
    "runtimeConfig": {
      "containerImage": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "version": "string"
    },
    "sparkBatch": {
      "archiveUris": [
        "string"
      ],
      "args": [
        "string"
      ],
      "fileUris": [
        "string"
      ],
      "jarFileUris": [
        "string"
      ],
      "mainClass": "string",
      "mainJarFileUri": "string"
    },
    "sparkRBatch": {
      "archiveUris": [
        "string"
      ],
      "args": [
        "string"
      ],
      "fileUris": [
        "string"
      ],
      "mainRFileUri": "string"
    },
    "sparkSqlBatch": {
      "jarFileUris": [
        "string"
      ],
      "queryFileUri": "string",
      "queryVariables": {
        "property1": "string",
        "property2": "string"
      }
    }
  }'
```

`POST /v1/{parent}/batches`

Creates a batch workload that executes asynchronously.

> Body parameter

```json
{
  "environmentConfig": {
    "executionConfig": {
      "idleTtl": "string",
      "kmsKey": "string",
      "networkTags": [
        "string"
      ],
      "networkUri": "string",
      "serviceAccount": "string",
      "stagingBucket": "string",
      "subnetworkUri": "string",
      "ttl": "string"
    },
    "peripheralsConfig": {
      "metastoreService": "string",
      "sparkHistoryServerConfig": {
        "dataprocCluster": "string"
      }
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "pysparkBatch": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "jarFileUris": [
      "string"
    ],
    "mainPythonFileUri": "string",
    "pythonFileUris": [
      "string"
    ]
  },
  "runtimeConfig": {
    "containerImage": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "version": "string"
  },
  "sparkBatch": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "jarFileUris": [
      "string"
    ],
    "mainClass": "string",
    "mainJarFileUri": "string"
  },
  "sparkRBatch": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "mainRFileUri": "string"
  },
  "sparkSqlBatch": {
    "jarFileUris": [
      "string"
    ],
    "queryFileUri": "string",
    "queryVariables": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

<h3 id="dataprocprojectslocationsbatchescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource where this batch will be created.|
|batchId|query|string|false|Optional. The ID to use for the batch, which will become the final component of the batch's resource name.This value must be 4-63 characters. Valid characters are /[a-z][0-9]-/.|
|requestId|query|string|false|Optional. A unique ID used to identify the request. If the service receives two CreateBatchRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateBatchRequest)s with the same request_id, the second request is ignored and the Operation that corresponds to the first Batch created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.|
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
|body|body|[Batch](#schemabatch)|false|none|
|» environmentConfig|body|[EnvironmentConfig](#schemaenvironmentconfig)|false|Optional. Environment configuration for the batch execution.|
|» labels|body|object|false|Optional. The labels to associate with this batch. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a batch.|
|» » **additionalProperties**|body|string|false|none|
|» pysparkBatch|body|[PySparkBatch](#schemapysparkbatch)|false|Optional. PySpark batch config.|
|» runtimeConfig|body|[RuntimeConfig](#schemaruntimeconfig)|false|Optional. Runtime configuration for the batch execution.|
|» sparkBatch|body|[SparkBatch](#schemasparkbatch)|false|Optional. Spark batch config.|
|» sparkRBatch|body|[SparkRBatch](#schemasparkrbatch)|false|Optional. SparkR batch config.|
|» sparkSqlBatch|body|[SparkSqlBatch](#schemasparksqlbatch)|false|Optional. SparkSql batch config.|

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

<h3 id="dataprocprojectslocationsbatchescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.clusters.nodeGroups.create

<a id="opIddataproc.projects.regions.clusters.nodeGroups.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/nodeGroups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "nodeGroupConfig": {
      "accelerators": [
        {
          "acceleratorCount": 0,
          "acceleratorTypeUri": "string"
        }
      ],
      "diskConfig": {
        "bootDiskSizeGb": 0,
        "bootDiskType": "string",
        "localSsdInterface": "string",
        "numLocalSsds": 0
      },
      "imageUri": "string",
      "machineTypeUri": "string",
      "minCpuPlatform": "string",
      "numInstances": 0,
      "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
    },
    "roles": [
      "ROLE_UNSPECIFIED"
    ]
  }'
```

`POST /v1/{parent}/nodeGroups`

Creates a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).

> Body parameter

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "nodeGroupConfig": {
    "accelerators": [
      {
        "acceleratorCount": 0,
        "acceleratorTypeUri": "string"
      }
    ],
    "diskConfig": {
      "bootDiskSizeGb": 0,
      "bootDiskType": "string",
      "localSsdInterface": "string",
      "numLocalSsds": 0
    },
    "imageUri": "string",
    "machineTypeUri": "string",
    "minCpuPlatform": "string",
    "numInstances": 0,
    "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
  },
  "roles": [
    "ROLE_UNSPECIFIED"
  ]
}
```

<h3 id="dataprocprojectsregionsclustersnodegroupscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource where this node group will be created. Format: projects/{project}/regions/{region}/clusters/{cluster}|
|nodeGroupId|query|string|false|Optional. An optional node group ID. Generated if not specified.The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of from 3 to 33 characters.|
|requestId|query|string|false|Optional. A unique ID used to identify the request. If the server receives two CreateNodeGroupRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateNodeGroupRequests) with the same ID, the second request is ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.|
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
|body|body|[NodeGroup](#schemanodegroup)|false|none|
|» labels|body|object|false|Optional. Node group labels. Label keys must consist of from 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values can be empty. If specified, they must consist of from 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). The node group must have no more than 32 labelsn.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|The Node group resource name (https://aip.dev/122).|
|» nodeGroupConfig|body|[InstanceGroupConfig](#schemainstancegroupconfig)|false|Optional. The node group instance group configuration.|
|» roles|body|[string]|false|Required. Node group roles.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» roles|ROLE_UNSPECIFIED|
|» roles|DRIVER|

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

<h3 id="dataprocprojectsregionsclustersnodegroupscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.workflowTemplates.list

<a id="opIddataproc.projects.regions.workflowTemplates.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/workflowTemplates \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/workflowTemplates`

Lists workflows that match the specified filter in the request.

<h3 id="dataprocprojectsregionsworkflowtemplateslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,list, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.list, the resource name of the location has the following format: projects/{project_id}/locations/{location}|
|pageSize|query|integer|false|Optional. The maximum number of results to return in each response.|
|pageToken|query|string|false|Optional. The page token, returned by a previous call, to request the next page of results.|
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
  "templates": [
    {
      "createTime": "string",
      "dagTimeout": "string",
      "id": "string",
      "jobs": [
        {
          "hadoopJob": {
            "archiveUris": [
              "string"
            ],
            "args": [
              "string"
            ],
            "fileUris": [
              "string"
            ],
            "jarFileUris": [
              "string"
            ],
            "loggingConfig": {
              "driverLogLevels": {
                "property1": "LEVEL_UNSPECIFIED",
                "property2": "LEVEL_UNSPECIFIED"
              }
            },
            "mainClass": "string",
            "mainJarFileUri": "string",
            "properties": {
              "property1": "string",
              "property2": "string"
            }
          },
          "hiveJob": {
            "continueOnFailure": true,
            "jarFileUris": [
              "string"
            ],
            "properties": {
              "property1": "string",
              "property2": "string"
            },
            "queryFileUri": "string",
            "queryList": {
              "queries": [
                "string"
              ]
            },
            "scriptVariables": {
              "property1": "string",
              "property2": "string"
            }
          },
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "pigJob": {
            "continueOnFailure": true,
            "jarFileUris": [
              "string"
            ],
            "loggingConfig": {
              "driverLogLevels": {
                "property1": "LEVEL_UNSPECIFIED",
                "property2": "LEVEL_UNSPECIFIED"
              }
            },
            "properties": {
              "property1": "string",
              "property2": "string"
            },
            "queryFileUri": "string",
            "queryList": {
              "queries": [
                "string"
              ]
            },
            "scriptVariables": {
              "property1": "string",
              "property2": "string"
            }
          },
          "prerequisiteStepIds": [
            "string"
          ],
          "prestoJob": {
            "clientTags": [
              "string"
            ],
            "continueOnFailure": true,
            "loggingConfig": {
              "driverLogLevels": {
                "property1": "LEVEL_UNSPECIFIED",
                "property2": "LEVEL_UNSPECIFIED"
              }
            },
            "outputFormat": "string",
            "properties": {
              "property1": "string",
              "property2": "string"
            },
            "queryFileUri": "string",
            "queryList": {
              "queries": [
                "string"
              ]
            }
          },
          "pysparkJob": {
            "archiveUris": [
              "string"
            ],
            "args": [
              "string"
            ],
            "fileUris": [
              "string"
            ],
            "jarFileUris": [
              "string"
            ],
            "loggingConfig": {
              "driverLogLevels": {
                "property1": "LEVEL_UNSPECIFIED",
                "property2": "LEVEL_UNSPECIFIED"
              }
            },
            "mainPythonFileUri": "string",
            "properties": {
              "property1": "string",
              "property2": "string"
            },
            "pythonFileUris": [
              "string"
            ]
          },
          "scheduling": {
            "maxFailuresPerHour": 0,
            "maxFailuresTotal": 0
          },
          "sparkJob": {
            "archiveUris": [
              "string"
            ],
            "args": [
              "string"
            ],
            "fileUris": [
              "string"
            ],
            "jarFileUris": [
              "string"
            ],
            "loggingConfig": {
              "driverLogLevels": {
                "property1": "LEVEL_UNSPECIFIED",
                "property2": "LEVEL_UNSPECIFIED"
              }
            },
            "mainClass": "string",
            "mainJarFileUri": "string",
            "properties": {
              "property1": "string",
              "property2": "string"
            }
          },
          "sparkRJob": {
            "archiveUris": [
              "string"
            ],
            "args": [
              "string"
            ],
            "fileUris": [
              "string"
            ],
            "loggingConfig": {
              "driverLogLevels": {
                "property1": "LEVEL_UNSPECIFIED",
                "property2": "LEVEL_UNSPECIFIED"
              }
            },
            "mainRFileUri": "string",
            "properties": {
              "property1": "string",
              "property2": "string"
            }
          },
          "sparkSqlJob": {
            "jarFileUris": [
              "string"
            ],
            "loggingConfig": {
              "driverLogLevels": {
                "property1": "LEVEL_UNSPECIFIED",
                "property2": "LEVEL_UNSPECIFIED"
              }
            },
            "properties": {
              "property1": "string",
              "property2": "string"
            },
            "queryFileUri": "string",
            "queryList": {
              "queries": [
                "string"
              ]
            },
            "scriptVariables": {
              "property1": "string",
              "property2": "string"
            }
          },
          "stepId": "string",
          "trinoJob": {
            "clientTags": [
              "string"
            ],
            "continueOnFailure": true,
            "loggingConfig": {
              "driverLogLevels": {
                "property1": "LEVEL_UNSPECIFIED",
                "property2": "LEVEL_UNSPECIFIED"
              }
            },
            "outputFormat": "string",
            "properties": {
              "property1": "string",
              "property2": "string"
            },
            "queryFileUri": "string",
            "queryList": {
              "queries": [
                "string"
              ]
            }
          }
        }
      ],
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "parameters": [
        {
          "description": "string",
          "fields": [
            "string"
          ],
          "name": "string",
          "validation": {
            "regex": {
              "regexes": [
                "string"
              ]
            },
            "values": {
              "values": [
                "string"
              ]
            }
          }
        }
      ],
      "placement": {
        "clusterSelector": {
          "clusterLabels": {
            "property1": "string",
            "property2": "string"
          },
          "zone": "string"
        },
        "managedCluster": {
          "clusterName": "string",
          "config": {
            "autoscalingConfig": {
              "policyUri": "string"
            },
            "auxiliaryNodeGroups": [
              {
                "nodeGroup": {
                  "labels": {
                    "property1": "string",
                    "property2": "string"
                  },
                  "name": "string",
                  "nodeGroupConfig": {
                    "accelerators": [
                      {
                        "acceleratorCount": 0,
                        "acceleratorTypeUri": "string"
                      }
                    ],
                    "diskConfig": {
                      "bootDiskSizeGb": 0,
                      "bootDiskType": "string",
                      "localSsdInterface": "string",
                      "numLocalSsds": 0
                    },
                    "imageUri": "string",
                    "instanceNames": [
                      "string"
                    ],
                    "instanceReferences": [
                      {
                        "instanceId": "string",
                        "instanceName": "string",
                        "publicEciesKey": "string",
                        "publicKey": "string"
                      }
                    ],
                    "isPreemptible": true,
                    "machineTypeUri": "string",
                    "managedGroupConfig": {
                      "instanceGroupManagerName": "string",
                      "instanceTemplateName": "string"
                    },
                    "minCpuPlatform": "string",
                    "numInstances": 0,
                    "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
                  },
                  "roles": [
                    "ROLE_UNSPECIFIED"
                  ]
                },
                "nodeGroupId": "string"
              }
            ],
            "configBucket": "string",
            "dataprocMetricConfig": {
              "metrics": [
                {
                  "metricOverrides": [
                    "string"
                  ],
                  "metricSource": "METRIC_SOURCE_UNSPECIFIED"
                }
              ]
            },
            "encryptionConfig": {
              "gcePdKmsKeyName": "string",
              "kmsKey": "string"
            },
            "endpointConfig": {
              "enableHttpPortAccess": true,
              "httpPorts": {
                "property1": "string",
                "property2": "string"
              }
            },
            "gceClusterConfig": {
              "confidentialInstanceConfig": {
                "enableConfidentialCompute": true
              },
              "internalIpOnly": true,
              "metadata": {
                "property1": "string",
                "property2": "string"
              },
              "networkUri": "string",
              "nodeGroupAffinity": {
                "nodeGroupUri": "string"
              },
              "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
              "reservationAffinity": {
                "consumeReservationType": "TYPE_UNSPECIFIED",
                "key": "string",
                "values": [
                  "string"
                ]
              },
              "serviceAccount": "string",
              "serviceAccountScopes": [
                "string"
              ],
              "shieldedInstanceConfig": {
                "enableIntegrityMonitoring": true,
                "enableSecureBoot": true,
                "enableVtpm": true
              },
              "subnetworkUri": "string",
              "tags": [
                "string"
              ],
              "zoneUri": "string"
            },
            "gkeClusterConfig": {
              "gkeClusterTarget": "string",
              "namespacedGkeDeploymentTarget": {
                "clusterNamespace": "string",
                "targetGkeCluster": "string"
              },
              "nodePoolTarget": [
                {
                  "nodePool": "string",
                  "nodePoolConfig": {
                    "autoscaling": {
                      "maxNodeCount": 0,
                      "minNodeCount": 0
                    },
                    "config": {
                      "accelerators": [
                        {
                          "acceleratorCount": "string",
                          "acceleratorType": "string",
                          "gpuPartitionSize": "string"
                        }
                      ],
                      "bootDiskKmsKey": "string",
                      "localSsdCount": 0,
                      "machineType": "string",
                      "minCpuPlatform": "string",
                      "preemptible": true,
                      "spot": true
                    },
                    "locations": [
                      "string"
                    ]
                  },
                  "roles": [
                    "ROLE_UNSPECIFIED"
                  ]
                }
              ]
            },
            "initializationActions": [
              {
                "executableFile": "string",
                "executionTimeout": "string"
              }
            ],
            "lifecycleConfig": {
              "autoDeleteTime": "string",
              "autoDeleteTtl": "string",
              "idleDeleteTtl": "string",
              "idleStartTime": "string"
            },
            "masterConfig": {
              "accelerators": [
                {
                  "acceleratorCount": 0,
                  "acceleratorTypeUri": "string"
                }
              ],
              "diskConfig": {
                "bootDiskSizeGb": 0,
                "bootDiskType": "string",
                "localSsdInterface": "string",
                "numLocalSsds": 0
              },
              "imageUri": "string",
              "instanceNames": [
                "string"
              ],
              "instanceReferences": [
                {
                  "instanceId": "string",
                  "instanceName": "string",
                  "publicEciesKey": "string",
                  "publicKey": "string"
                }
              ],
              "isPreemptible": true,
              "machineTypeUri": "string",
              "managedGroupConfig": {
                "instanceGroupManagerName": "string",
                "instanceTemplateName": "string"
              },
              "minCpuPlatform": "string",
              "numInstances": 0,
              "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
            },
            "metastoreConfig": {
              "dataprocMetastoreService": "string"
            },
            "secondaryWorkerConfig": {
              "accelerators": [
                {
                  "acceleratorCount": 0,
                  "acceleratorTypeUri": "string"
                }
              ],
              "diskConfig": {
                "bootDiskSizeGb": 0,
                "bootDiskType": "string",
                "localSsdInterface": "string",
                "numLocalSsds": 0
              },
              "imageUri": "string",
              "instanceNames": [
                "string"
              ],
              "instanceReferences": [
                {
                  "instanceId": "string",
                  "instanceName": "string",
                  "publicEciesKey": "string",
                  "publicKey": "string"
                }
              ],
              "isPreemptible": true,
              "machineTypeUri": "string",
              "managedGroupConfig": {
                "instanceGroupManagerName": "string",
                "instanceTemplateName": "string"
              },
              "minCpuPlatform": "string",
              "numInstances": 0,
              "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
            },
            "securityConfig": {
              "identityConfig": {
                "userServiceAccountMapping": {
                  "property1": "string",
                  "property2": "string"
                }
              },
              "kerberosConfig": {
                "crossRealmTrustAdminServer": "string",
                "crossRealmTrustKdc": "string",
                "crossRealmTrustRealm": "string",
                "crossRealmTrustSharedPasswordUri": "string",
                "enableKerberos": true,
                "kdcDbKeyUri": "string",
                "keyPasswordUri": "string",
                "keystorePasswordUri": "string",
                "keystoreUri": "string",
                "kmsKeyUri": "string",
                "realm": "string",
                "rootPrincipalPasswordUri": "string",
                "tgtLifetimeHours": 0,
                "truststorePasswordUri": "string",
                "truststoreUri": "string"
              }
            },
            "softwareConfig": {
              "imageVersion": "string",
              "optionalComponents": [
                "COMPONENT_UNSPECIFIED"
              ],
              "properties": {
                "property1": "string",
                "property2": "string"
              }
            },
            "tempBucket": "string",
            "workerConfig": {
              "accelerators": [
                {
                  "acceleratorCount": 0,
                  "acceleratorTypeUri": "string"
                }
              ],
              "diskConfig": {
                "bootDiskSizeGb": 0,
                "bootDiskType": "string",
                "localSsdInterface": "string",
                "numLocalSsds": 0
              },
              "imageUri": "string",
              "instanceNames": [
                "string"
              ],
              "instanceReferences": [
                {
                  "instanceId": "string",
                  "instanceName": "string",
                  "publicEciesKey": "string",
                  "publicKey": "string"
                }
              ],
              "isPreemptible": true,
              "machineTypeUri": "string",
              "managedGroupConfig": {
                "instanceGroupManagerName": "string",
                "instanceTemplateName": "string"
              },
              "minCpuPlatform": "string",
              "numInstances": 0,
              "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
            }
          },
          "labels": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "updateTime": "string",
      "version": 0
    }
  ]
}
```

<h3 id="dataprocprojectsregionsworkflowtemplateslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListWorkflowTemplatesResponse](#schemalistworkflowtemplatesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.workflowTemplates.create

<a id="opIddataproc.projects.regions.workflowTemplates.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/workflowTemplates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dagTimeout": "string",
    "id": "string",
    "jobs": [
      {
        "hadoopJob": {
          "archiveUris": [
            "string"
          ],
          "args": [
            "string"
          ],
          "fileUris": [
            "string"
          ],
          "jarFileUris": [
            "string"
          ],
          "loggingConfig": {
            "driverLogLevels": {
              "property1": "LEVEL_UNSPECIFIED",
              "property2": "LEVEL_UNSPECIFIED"
            }
          },
          "mainClass": "string",
          "mainJarFileUri": "string",
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        },
        "hiveJob": {
          "continueOnFailure": true,
          "jarFileUris": [
            "string"
          ],
          "properties": {
            "property1": "string",
            "property2": "string"
          },
          "queryFileUri": "string",
          "queryList": {
            "queries": [
              "string"
            ]
          },
          "scriptVariables": {
            "property1": "string",
            "property2": "string"
          }
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "pigJob": {
          "continueOnFailure": true,
          "jarFileUris": [
            "string"
          ],
          "loggingConfig": {
            "driverLogLevels": {
              "property1": "LEVEL_UNSPECIFIED",
              "property2": "LEVEL_UNSPECIFIED"
            }
          },
          "properties": {
            "property1": "string",
            "property2": "string"
          },
          "queryFileUri": "string",
          "queryList": {
            "queries": [
              "string"
            ]
          },
          "scriptVariables": {
            "property1": "string",
            "property2": "string"
          }
        },
        "prerequisiteStepIds": [
          "string"
        ],
        "prestoJob": {
          "clientTags": [
            "string"
          ],
          "continueOnFailure": true,
          "loggingConfig": {
            "driverLogLevels": {
              "property1": "LEVEL_UNSPECIFIED",
              "property2": "LEVEL_UNSPECIFIED"
            }
          },
          "outputFormat": "string",
          "properties": {
            "property1": "string",
            "property2": "string"
          },
          "queryFileUri": "string",
          "queryList": {
            "queries": [
              "string"
            ]
          }
        },
        "pysparkJob": {
          "archiveUris": [
            "string"
          ],
          "args": [
            "string"
          ],
          "fileUris": [
            "string"
          ],
          "jarFileUris": [
            "string"
          ],
          "loggingConfig": {
            "driverLogLevels": {
              "property1": "LEVEL_UNSPECIFIED",
              "property2": "LEVEL_UNSPECIFIED"
            }
          },
          "mainPythonFileUri": "string",
          "properties": {
            "property1": "string",
            "property2": "string"
          },
          "pythonFileUris": [
            "string"
          ]
        },
        "scheduling": {
          "maxFailuresPerHour": 0,
          "maxFailuresTotal": 0
        },
        "sparkJob": {
          "archiveUris": [
            "string"
          ],
          "args": [
            "string"
          ],
          "fileUris": [
            "string"
          ],
          "jarFileUris": [
            "string"
          ],
          "loggingConfig": {
            "driverLogLevels": {
              "property1": "LEVEL_UNSPECIFIED",
              "property2": "LEVEL_UNSPECIFIED"
            }
          },
          "mainClass": "string",
          "mainJarFileUri": "string",
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        },
        "sparkRJob": {
          "archiveUris": [
            "string"
          ],
          "args": [
            "string"
          ],
          "fileUris": [
            "string"
          ],
          "loggingConfig": {
            "driverLogLevels": {
              "property1": "LEVEL_UNSPECIFIED",
              "property2": "LEVEL_UNSPECIFIED"
            }
          },
          "mainRFileUri": "string",
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        },
        "sparkSqlJob": {
          "jarFileUris": [
            "string"
          ],
          "loggingConfig": {
            "driverLogLevels": {
              "property1": "LEVEL_UNSPECIFIED",
              "property2": "LEVEL_UNSPECIFIED"
            }
          },
          "properties": {
            "property1": "string",
            "property2": "string"
          },
          "queryFileUri": "string",
          "queryList": {
            "queries": [
              "string"
            ]
          },
          "scriptVariables": {
            "property1": "string",
            "property2": "string"
          }
        },
        "stepId": "string",
        "trinoJob": {
          "clientTags": [
            "string"
          ],
          "continueOnFailure": true,
          "loggingConfig": {
            "driverLogLevels": {
              "property1": "LEVEL_UNSPECIFIED",
              "property2": "LEVEL_UNSPECIFIED"
            }
          },
          "outputFormat": "string",
          "properties": {
            "property1": "string",
            "property2": "string"
          },
          "queryFileUri": "string",
          "queryList": {
            "queries": [
              "string"
            ]
          }
        }
      }
    ],
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "parameters": [
      {
        "description": "string",
        "fields": [
          "string"
        ],
        "name": "string",
        "validation": {
          "regex": {
            "regexes": [
              "string"
            ]
          },
          "values": {
            "values": [
              "string"
            ]
          }
        }
      }
    ],
    "placement": {
      "clusterSelector": {
        "clusterLabels": {
          "property1": "string",
          "property2": "string"
        },
        "zone": "string"
      },
      "managedCluster": {
        "clusterName": "string",
        "config": {
          "autoscalingConfig": {
            "policyUri": "string"
          },
          "auxiliaryNodeGroups": [
            {
              "nodeGroup": {
                "labels": {
                  "property1": "string",
                  "property2": "string"
                },
                "name": "string",
                "nodeGroupConfig": {
                  "accelerators": [
                    {
                      "acceleratorCount": 0,
                      "acceleratorTypeUri": "string"
                    }
                  ],
                  "diskConfig": {
                    "bootDiskSizeGb": 0,
                    "bootDiskType": "string",
                    "localSsdInterface": "string",
                    "numLocalSsds": 0
                  },
                  "imageUri": "string",
                  "machineTypeUri": "string",
                  "minCpuPlatform": "string",
                  "numInstances": 0,
                  "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
                },
                "roles": [
                  "ROLE_UNSPECIFIED"
                ]
              },
              "nodeGroupId": "string"
            }
          ],
          "configBucket": "string",
          "dataprocMetricConfig": {
            "metrics": [
              {
                "metricOverrides": [
                  "string"
                ],
                "metricSource": "METRIC_SOURCE_UNSPECIFIED"
              }
            ]
          },
          "encryptionConfig": {
            "gcePdKmsKeyName": "string",
            "kmsKey": "string"
          },
          "endpointConfig": {
            "enableHttpPortAccess": true
          },
          "gceClusterConfig": {
            "confidentialInstanceConfig": {
              "enableConfidentialCompute": true
            },
            "internalIpOnly": true,
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "networkUri": "string",
            "nodeGroupAffinity": {
              "nodeGroupUri": "string"
            },
            "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
            "reservationAffinity": {
              "consumeReservationType": "TYPE_UNSPECIFIED",
              "key": "string",
              "values": [
                "string"
              ]
            },
            "serviceAccount": "string",
            "serviceAccountScopes": [
              "string"
            ],
            "shieldedInstanceConfig": {
              "enableIntegrityMonitoring": true,
              "enableSecureBoot": true,
              "enableVtpm": true
            },
            "subnetworkUri": "string",
            "tags": [
              "string"
            ],
            "zoneUri": "string"
          },
          "gkeClusterConfig": {
            "gkeClusterTarget": "string",
            "namespacedGkeDeploymentTarget": {
              "clusterNamespace": "string",
              "targetGkeCluster": "string"
            },
            "nodePoolTarget": [
              {
                "nodePool": "string",
                "nodePoolConfig": {
                  "autoscaling": {
                    "maxNodeCount": 0,
                    "minNodeCount": 0
                  },
                  "config": {
                    "accelerators": [
                      {
                        "acceleratorCount": "string",
                        "acceleratorType": "string",
                        "gpuPartitionSize": "string"
                      }
                    ],
                    "bootDiskKmsKey": "string",
                    "localSsdCount": 0,
                    "machineType": "string",
                    "minCpuPlatform": "string",
                    "preemptible": true,
                    "spot": true
                  },
                  "locations": [
                    "string"
                  ]
                },
                "roles": [
                  "ROLE_UNSPECIFIED"
                ]
              }
            ]
          },
          "initializationActions": [
            {
              "executableFile": "string",
              "executionTimeout": "string"
            }
          ],
          "lifecycleConfig": {
            "autoDeleteTime": "string",
            "autoDeleteTtl": "string",
            "idleDeleteTtl": "string"
          },
          "masterConfig": {
            "accelerators": [
              {
                "acceleratorCount": 0,
                "acceleratorTypeUri": "string"
              }
            ],
            "diskConfig": {
              "bootDiskSizeGb": 0,
              "bootDiskType": "string",
              "localSsdInterface": "string",
              "numLocalSsds": 0
            },
            "imageUri": "string",
            "machineTypeUri": "string",
            "minCpuPlatform": "string",
            "numInstances": 0,
            "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
          },
          "metastoreConfig": {
            "dataprocMetastoreService": "string"
          },
          "secondaryWorkerConfig": {
            "accelerators": [
              {
                "acceleratorCount": 0,
                "acceleratorTypeUri": "string"
              }
            ],
            "diskConfig": {
              "bootDiskSizeGb": 0,
              "bootDiskType": "string",
              "localSsdInterface": "string",
              "numLocalSsds": 0
            },
            "imageUri": "string",
            "machineTypeUri": "string",
            "minCpuPlatform": "string",
            "numInstances": 0,
            "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
          },
          "securityConfig": {
            "identityConfig": {
              "userServiceAccountMapping": {
                "property1": "string",
                "property2": "string"
              }
            },
            "kerberosConfig": {
              "crossRealmTrustAdminServer": "string",
              "crossRealmTrustKdc": "string",
              "crossRealmTrustRealm": "string",
              "crossRealmTrustSharedPasswordUri": "string",
              "enableKerberos": true,
              "kdcDbKeyUri": "string",
              "keyPasswordUri": "string",
              "keystorePasswordUri": "string",
              "keystoreUri": "string",
              "kmsKeyUri": "string",
              "realm": "string",
              "rootPrincipalPasswordUri": "string",
              "tgtLifetimeHours": 0,
              "truststorePasswordUri": "string",
              "truststoreUri": "string"
            }
          },
          "softwareConfig": {
            "imageVersion": "string",
            "optionalComponents": [
              "COMPONENT_UNSPECIFIED"
            ],
            "properties": {
              "property1": "string",
              "property2": "string"
            }
          },
          "tempBucket": "string",
          "workerConfig": {
            "accelerators": [
              {
                "acceleratorCount": 0,
                "acceleratorTypeUri": "string"
              }
            ],
            "diskConfig": {
              "bootDiskSizeGb": 0,
              "bootDiskType": "string",
              "localSsdInterface": "string",
              "numLocalSsds": 0
            },
            "imageUri": "string",
            "machineTypeUri": "string",
            "minCpuPlatform": "string",
            "numInstances": 0,
            "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
          }
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "version": 0
  }'
```

`POST /v1/{parent}/workflowTemplates`

Creates new workflow template.

> Body parameter

```json
{
  "dagTimeout": "string",
  "id": "string",
  "jobs": [
    {
      "hadoopJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainClass": "string",
        "mainJarFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "hiveJob": {
        "continueOnFailure": true,
        "jarFileUris": [
          "string"
        ],
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "pigJob": {
        "continueOnFailure": true,
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "prerequisiteStepIds": [
        "string"
      ],
      "prestoJob": {
        "clientTags": [
          "string"
        ],
        "continueOnFailure": true,
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "outputFormat": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        }
      },
      "pysparkJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainPythonFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "pythonFileUris": [
          "string"
        ]
      },
      "scheduling": {
        "maxFailuresPerHour": 0,
        "maxFailuresTotal": 0
      },
      "sparkJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainClass": "string",
        "mainJarFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "sparkRJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainRFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "sparkSqlJob": {
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "stepId": "string",
      "trinoJob": {
        "clientTags": [
          "string"
        ],
        "continueOnFailure": true,
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "outputFormat": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        }
      }
    }
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "parameters": [
    {
      "description": "string",
      "fields": [
        "string"
      ],
      "name": "string",
      "validation": {
        "regex": {
          "regexes": [
            "string"
          ]
        },
        "values": {
          "values": [
            "string"
          ]
        }
      }
    }
  ],
  "placement": {
    "clusterSelector": {
      "clusterLabels": {
        "property1": "string",
        "property2": "string"
      },
      "zone": "string"
    },
    "managedCluster": {
      "clusterName": "string",
      "config": {
        "autoscalingConfig": {
          "policyUri": "string"
        },
        "auxiliaryNodeGroups": [
          {
            "nodeGroup": {
              "labels": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string",
              "nodeGroupConfig": {
                "accelerators": [
                  {
                    "acceleratorCount": 0,
                    "acceleratorTypeUri": "string"
                  }
                ],
                "diskConfig": {
                  "bootDiskSizeGb": 0,
                  "bootDiskType": "string",
                  "localSsdInterface": "string",
                  "numLocalSsds": 0
                },
                "imageUri": "string",
                "machineTypeUri": "string",
                "minCpuPlatform": "string",
                "numInstances": 0,
                "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
              },
              "roles": [
                "ROLE_UNSPECIFIED"
              ]
            },
            "nodeGroupId": "string"
          }
        ],
        "configBucket": "string",
        "dataprocMetricConfig": {
          "metrics": [
            {
              "metricOverrides": [
                "string"
              ],
              "metricSource": "METRIC_SOURCE_UNSPECIFIED"
            }
          ]
        },
        "encryptionConfig": {
          "gcePdKmsKeyName": "string",
          "kmsKey": "string"
        },
        "endpointConfig": {
          "enableHttpPortAccess": true
        },
        "gceClusterConfig": {
          "confidentialInstanceConfig": {
            "enableConfidentialCompute": true
          },
          "internalIpOnly": true,
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "networkUri": "string",
          "nodeGroupAffinity": {
            "nodeGroupUri": "string"
          },
          "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
          "reservationAffinity": {
            "consumeReservationType": "TYPE_UNSPECIFIED",
            "key": "string",
            "values": [
              "string"
            ]
          },
          "serviceAccount": "string",
          "serviceAccountScopes": [
            "string"
          ],
          "shieldedInstanceConfig": {
            "enableIntegrityMonitoring": true,
            "enableSecureBoot": true,
            "enableVtpm": true
          },
          "subnetworkUri": "string",
          "tags": [
            "string"
          ],
          "zoneUri": "string"
        },
        "gkeClusterConfig": {
          "gkeClusterTarget": "string",
          "namespacedGkeDeploymentTarget": {
            "clusterNamespace": "string",
            "targetGkeCluster": "string"
          },
          "nodePoolTarget": [
            {
              "nodePool": "string",
              "nodePoolConfig": {
                "autoscaling": {
                  "maxNodeCount": 0,
                  "minNodeCount": 0
                },
                "config": {
                  "accelerators": [
                    {
                      "acceleratorCount": "string",
                      "acceleratorType": "string",
                      "gpuPartitionSize": "string"
                    }
                  ],
                  "bootDiskKmsKey": "string",
                  "localSsdCount": 0,
                  "machineType": "string",
                  "minCpuPlatform": "string",
                  "preemptible": true,
                  "spot": true
                },
                "locations": [
                  "string"
                ]
              },
              "roles": [
                "ROLE_UNSPECIFIED"
              ]
            }
          ]
        },
        "initializationActions": [
          {
            "executableFile": "string",
            "executionTimeout": "string"
          }
        ],
        "lifecycleConfig": {
          "autoDeleteTime": "string",
          "autoDeleteTtl": "string",
          "idleDeleteTtl": "string"
        },
        "masterConfig": {
          "accelerators": [
            {
              "acceleratorCount": 0,
              "acceleratorTypeUri": "string"
            }
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string",
            "localSsdInterface": "string",
            "numLocalSsds": 0
          },
          "imageUri": "string",
          "machineTypeUri": "string",
          "minCpuPlatform": "string",
          "numInstances": 0,
          "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
        },
        "metastoreConfig": {
          "dataprocMetastoreService": "string"
        },
        "secondaryWorkerConfig": {
          "accelerators": [
            {
              "acceleratorCount": 0,
              "acceleratorTypeUri": "string"
            }
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string",
            "localSsdInterface": "string",
            "numLocalSsds": 0
          },
          "imageUri": "string",
          "machineTypeUri": "string",
          "minCpuPlatform": "string",
          "numInstances": 0,
          "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
        },
        "securityConfig": {
          "identityConfig": {
            "userServiceAccountMapping": {
              "property1": "string",
              "property2": "string"
            }
          },
          "kerberosConfig": {
            "crossRealmTrustAdminServer": "string",
            "crossRealmTrustKdc": "string",
            "crossRealmTrustRealm": "string",
            "crossRealmTrustSharedPasswordUri": "string",
            "enableKerberos": true,
            "kdcDbKeyUri": "string",
            "keyPasswordUri": "string",
            "keystorePasswordUri": "string",
            "keystoreUri": "string",
            "kmsKeyUri": "string",
            "realm": "string",
            "rootPrincipalPasswordUri": "string",
            "tgtLifetimeHours": 0,
            "truststorePasswordUri": "string",
            "truststoreUri": "string"
          }
        },
        "softwareConfig": {
          "imageVersion": "string",
          "optionalComponents": [
            "COMPONENT_UNSPECIFIED"
          ],
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        },
        "tempBucket": "string",
        "workerConfig": {
          "accelerators": [
            {
              "acceleratorCount": 0,
              "acceleratorTypeUri": "string"
            }
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string",
            "localSsdInterface": "string",
            "numLocalSsds": 0
          },
          "imageUri": "string",
          "machineTypeUri": "string",
          "minCpuPlatform": "string",
          "numInstances": 0,
          "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
        }
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "version": 0
}
```

<h3 id="dataprocprojectsregionsworkflowtemplatescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.create, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.create, the resource name of the location has the following format: projects/{project_id}/locations/{location}|
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
|body|body|[WorkflowTemplate](#schemaworkflowtemplate)|false|none|
|» dagTimeout|body|string(google-duration)|false|Optional. Timeout duration for the DAG of jobs, expressed in seconds (see JSON representation of duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). The timeout duration must be from 10 minutes ("600s") to 24 hours ("86400s"). The timer begins when the first job is submitted. If the workflow is running at the end of the timeout period, any remaining jobs are cancelled, the workflow is ended, and if the workflow was running on a managed cluster, the cluster is deleted.|
|» id|body|string|false|none|
|» jobs|body|[[OrderedJob](#schemaorderedjob)]|false|Required. The Directed Acyclic Graph of Jobs to submit.|
|» labels|body|object|false|Optional. The labels to associate with this template. These labels will be propagated to all jobs and clusters created by the workflow instance.Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).No more than 32 labels can be associated with a template.|
|» » **additionalProperties**|body|string|false|none|
|» parameters|body|[[TemplateParameter](#schematemplateparameter)]|false|Optional. Template parameters whose values are substituted into the template. Values for parameters must be provided when the template is instantiated.|
|» placement|body|[WorkflowTemplatePlacement](#schemaworkflowtemplateplacement)|false|Required. WorkflowTemplate scheduling information.|
|» version|body|integer(int32)|false|Optional. Used to perform a consistent read-modify-write.This field should be left blank for a CreateWorkflowTemplate request. It is required for an UpdateWorkflowTemplate request, and must match the current server version. A typical update template flow would fetch the current template with a GetWorkflowTemplate request, which will return the current template with the version field filled in with the current server version. The user updates other fields in the template, then returns it as part of the UpdateWorkflowTemplate request.|

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
  "createTime": "string",
  "dagTimeout": "string",
  "id": "string",
  "jobs": [
    {
      "hadoopJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainClass": "string",
        "mainJarFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "hiveJob": {
        "continueOnFailure": true,
        "jarFileUris": [
          "string"
        ],
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "pigJob": {
        "continueOnFailure": true,
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "prerequisiteStepIds": [
        "string"
      ],
      "prestoJob": {
        "clientTags": [
          "string"
        ],
        "continueOnFailure": true,
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "outputFormat": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        }
      },
      "pysparkJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainPythonFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "pythonFileUris": [
          "string"
        ]
      },
      "scheduling": {
        "maxFailuresPerHour": 0,
        "maxFailuresTotal": 0
      },
      "sparkJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainClass": "string",
        "mainJarFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "sparkRJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainRFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "sparkSqlJob": {
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "stepId": "string",
      "trinoJob": {
        "clientTags": [
          "string"
        ],
        "continueOnFailure": true,
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "outputFormat": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        }
      }
    }
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "parameters": [
    {
      "description": "string",
      "fields": [
        "string"
      ],
      "name": "string",
      "validation": {
        "regex": {
          "regexes": [
            "string"
          ]
        },
        "values": {
          "values": [
            "string"
          ]
        }
      }
    }
  ],
  "placement": {
    "clusterSelector": {
      "clusterLabels": {
        "property1": "string",
        "property2": "string"
      },
      "zone": "string"
    },
    "managedCluster": {
      "clusterName": "string",
      "config": {
        "autoscalingConfig": {
          "policyUri": "string"
        },
        "auxiliaryNodeGroups": [
          {
            "nodeGroup": {
              "labels": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string",
              "nodeGroupConfig": {
                "accelerators": [
                  {
                    "acceleratorCount": 0,
                    "acceleratorTypeUri": "string"
                  }
                ],
                "diskConfig": {
                  "bootDiskSizeGb": 0,
                  "bootDiskType": "string",
                  "localSsdInterface": "string",
                  "numLocalSsds": 0
                },
                "imageUri": "string",
                "instanceNames": [
                  "string"
                ],
                "instanceReferences": [
                  {
                    "instanceId": "string",
                    "instanceName": "string",
                    "publicEciesKey": "string",
                    "publicKey": "string"
                  }
                ],
                "isPreemptible": true,
                "machineTypeUri": "string",
                "managedGroupConfig": {
                  "instanceGroupManagerName": "string",
                  "instanceTemplateName": "string"
                },
                "minCpuPlatform": "string",
                "numInstances": 0,
                "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
              },
              "roles": [
                "ROLE_UNSPECIFIED"
              ]
            },
            "nodeGroupId": "string"
          }
        ],
        "configBucket": "string",
        "dataprocMetricConfig": {
          "metrics": [
            {
              "metricOverrides": [
                "string"
              ],
              "metricSource": "METRIC_SOURCE_UNSPECIFIED"
            }
          ]
        },
        "encryptionConfig": {
          "gcePdKmsKeyName": "string",
          "kmsKey": "string"
        },
        "endpointConfig": {
          "enableHttpPortAccess": true,
          "httpPorts": {
            "property1": "string",
            "property2": "string"
          }
        },
        "gceClusterConfig": {
          "confidentialInstanceConfig": {
            "enableConfidentialCompute": true
          },
          "internalIpOnly": true,
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "networkUri": "string",
          "nodeGroupAffinity": {
            "nodeGroupUri": "string"
          },
          "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
          "reservationAffinity": {
            "consumeReservationType": "TYPE_UNSPECIFIED",
            "key": "string",
            "values": [
              "string"
            ]
          },
          "serviceAccount": "string",
          "serviceAccountScopes": [
            "string"
          ],
          "shieldedInstanceConfig": {
            "enableIntegrityMonitoring": true,
            "enableSecureBoot": true,
            "enableVtpm": true
          },
          "subnetworkUri": "string",
          "tags": [
            "string"
          ],
          "zoneUri": "string"
        },
        "gkeClusterConfig": {
          "gkeClusterTarget": "string",
          "namespacedGkeDeploymentTarget": {
            "clusterNamespace": "string",
            "targetGkeCluster": "string"
          },
          "nodePoolTarget": [
            {
              "nodePool": "string",
              "nodePoolConfig": {
                "autoscaling": {
                  "maxNodeCount": 0,
                  "minNodeCount": 0
                },
                "config": {
                  "accelerators": [
                    {
                      "acceleratorCount": "string",
                      "acceleratorType": "string",
                      "gpuPartitionSize": "string"
                    }
                  ],
                  "bootDiskKmsKey": "string",
                  "localSsdCount": 0,
                  "machineType": "string",
                  "minCpuPlatform": "string",
                  "preemptible": true,
                  "spot": true
                },
                "locations": [
                  "string"
                ]
              },
              "roles": [
                "ROLE_UNSPECIFIED"
              ]
            }
          ]
        },
        "initializationActions": [
          {
            "executableFile": "string",
            "executionTimeout": "string"
          }
        ],
        "lifecycleConfig": {
          "autoDeleteTime": "string",
          "autoDeleteTtl": "string",
          "idleDeleteTtl": "string",
          "idleStartTime": "string"
        },
        "masterConfig": {
          "accelerators": [
            {
              "acceleratorCount": 0,
              "acceleratorTypeUri": "string"
            }
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string",
            "localSsdInterface": "string",
            "numLocalSsds": 0
          },
          "imageUri": "string",
          "instanceNames": [
            "string"
          ],
          "instanceReferences": [
            {
              "instanceId": "string",
              "instanceName": "string",
              "publicEciesKey": "string",
              "publicKey": "string"
            }
          ],
          "isPreemptible": true,
          "machineTypeUri": "string",
          "managedGroupConfig": {
            "instanceGroupManagerName": "string",
            "instanceTemplateName": "string"
          },
          "minCpuPlatform": "string",
          "numInstances": 0,
          "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
        },
        "metastoreConfig": {
          "dataprocMetastoreService": "string"
        },
        "secondaryWorkerConfig": {
          "accelerators": [
            {
              "acceleratorCount": 0,
              "acceleratorTypeUri": "string"
            }
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string",
            "localSsdInterface": "string",
            "numLocalSsds": 0
          },
          "imageUri": "string",
          "instanceNames": [
            "string"
          ],
          "instanceReferences": [
            {
              "instanceId": "string",
              "instanceName": "string",
              "publicEciesKey": "string",
              "publicKey": "string"
            }
          ],
          "isPreemptible": true,
          "machineTypeUri": "string",
          "managedGroupConfig": {
            "instanceGroupManagerName": "string",
            "instanceTemplateName": "string"
          },
          "minCpuPlatform": "string",
          "numInstances": 0,
          "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
        },
        "securityConfig": {
          "identityConfig": {
            "userServiceAccountMapping": {
              "property1": "string",
              "property2": "string"
            }
          },
          "kerberosConfig": {
            "crossRealmTrustAdminServer": "string",
            "crossRealmTrustKdc": "string",
            "crossRealmTrustRealm": "string",
            "crossRealmTrustSharedPasswordUri": "string",
            "enableKerberos": true,
            "kdcDbKeyUri": "string",
            "keyPasswordUri": "string",
            "keystorePasswordUri": "string",
            "keystoreUri": "string",
            "kmsKeyUri": "string",
            "realm": "string",
            "rootPrincipalPasswordUri": "string",
            "tgtLifetimeHours": 0,
            "truststorePasswordUri": "string",
            "truststoreUri": "string"
          }
        },
        "softwareConfig": {
          "imageVersion": "string",
          "optionalComponents": [
            "COMPONENT_UNSPECIFIED"
          ],
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        },
        "tempBucket": "string",
        "workerConfig": {
          "accelerators": [
            {
              "acceleratorCount": 0,
              "acceleratorTypeUri": "string"
            }
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string",
            "localSsdInterface": "string",
            "numLocalSsds": 0
          },
          "imageUri": "string",
          "instanceNames": [
            "string"
          ],
          "instanceReferences": [
            {
              "instanceId": "string",
              "instanceName": "string",
              "publicEciesKey": "string",
              "publicKey": "string"
            }
          ],
          "isPreemptible": true,
          "machineTypeUri": "string",
          "managedGroupConfig": {
            "instanceGroupManagerName": "string",
            "instanceTemplateName": "string"
          },
          "minCpuPlatform": "string",
          "numInstances": 0,
          "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
        }
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "updateTime": "string",
  "version": 0
}
```

<h3 id="dataprocprojectsregionsworkflowtemplatescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[WorkflowTemplate](#schemaworkflowtemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.workflowTemplates.instantiateInline

<a id="opIddataproc.projects.regions.workflowTemplates.instantiateInline"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/workflowTemplates:instantiateInline \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dagTimeout": "string",
    "id": "string",
    "jobs": [
      {
        "hadoopJob": {
          "archiveUris": [
            "string"
          ],
          "args": [
            "string"
          ],
          "fileUris": [
            "string"
          ],
          "jarFileUris": [
            "string"
          ],
          "loggingConfig": {
            "driverLogLevels": {
              "property1": "LEVEL_UNSPECIFIED",
              "property2": "LEVEL_UNSPECIFIED"
            }
          },
          "mainClass": "string",
          "mainJarFileUri": "string",
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        },
        "hiveJob": {
          "continueOnFailure": true,
          "jarFileUris": [
            "string"
          ],
          "properties": {
            "property1": "string",
            "property2": "string"
          },
          "queryFileUri": "string",
          "queryList": {
            "queries": [
              "string"
            ]
          },
          "scriptVariables": {
            "property1": "string",
            "property2": "string"
          }
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "pigJob": {
          "continueOnFailure": true,
          "jarFileUris": [
            "string"
          ],
          "loggingConfig": {
            "driverLogLevels": {
              "property1": "LEVEL_UNSPECIFIED",
              "property2": "LEVEL_UNSPECIFIED"
            }
          },
          "properties": {
            "property1": "string",
            "property2": "string"
          },
          "queryFileUri": "string",
          "queryList": {
            "queries": [
              "string"
            ]
          },
          "scriptVariables": {
            "property1": "string",
            "property2": "string"
          }
        },
        "prerequisiteStepIds": [
          "string"
        ],
        "prestoJob": {
          "clientTags": [
            "string"
          ],
          "continueOnFailure": true,
          "loggingConfig": {
            "driverLogLevels": {
              "property1": "LEVEL_UNSPECIFIED",
              "property2": "LEVEL_UNSPECIFIED"
            }
          },
          "outputFormat": "string",
          "properties": {
            "property1": "string",
            "property2": "string"
          },
          "queryFileUri": "string",
          "queryList": {
            "queries": [
              "string"
            ]
          }
        },
        "pysparkJob": {
          "archiveUris": [
            "string"
          ],
          "args": [
            "string"
          ],
          "fileUris": [
            "string"
          ],
          "jarFileUris": [
            "string"
          ],
          "loggingConfig": {
            "driverLogLevels": {
              "property1": "LEVEL_UNSPECIFIED",
              "property2": "LEVEL_UNSPECIFIED"
            }
          },
          "mainPythonFileUri": "string",
          "properties": {
            "property1": "string",
            "property2": "string"
          },
          "pythonFileUris": [
            "string"
          ]
        },
        "scheduling": {
          "maxFailuresPerHour": 0,
          "maxFailuresTotal": 0
        },
        "sparkJob": {
          "archiveUris": [
            "string"
          ],
          "args": [
            "string"
          ],
          "fileUris": [
            "string"
          ],
          "jarFileUris": [
            "string"
          ],
          "loggingConfig": {
            "driverLogLevels": {
              "property1": "LEVEL_UNSPECIFIED",
              "property2": "LEVEL_UNSPECIFIED"
            }
          },
          "mainClass": "string",
          "mainJarFileUri": "string",
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        },
        "sparkRJob": {
          "archiveUris": [
            "string"
          ],
          "args": [
            "string"
          ],
          "fileUris": [
            "string"
          ],
          "loggingConfig": {
            "driverLogLevels": {
              "property1": "LEVEL_UNSPECIFIED",
              "property2": "LEVEL_UNSPECIFIED"
            }
          },
          "mainRFileUri": "string",
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        },
        "sparkSqlJob": {
          "jarFileUris": [
            "string"
          ],
          "loggingConfig": {
            "driverLogLevels": {
              "property1": "LEVEL_UNSPECIFIED",
              "property2": "LEVEL_UNSPECIFIED"
            }
          },
          "properties": {
            "property1": "string",
            "property2": "string"
          },
          "queryFileUri": "string",
          "queryList": {
            "queries": [
              "string"
            ]
          },
          "scriptVariables": {
            "property1": "string",
            "property2": "string"
          }
        },
        "stepId": "string",
        "trinoJob": {
          "clientTags": [
            "string"
          ],
          "continueOnFailure": true,
          "loggingConfig": {
            "driverLogLevels": {
              "property1": "LEVEL_UNSPECIFIED",
              "property2": "LEVEL_UNSPECIFIED"
            }
          },
          "outputFormat": "string",
          "properties": {
            "property1": "string",
            "property2": "string"
          },
          "queryFileUri": "string",
          "queryList": {
            "queries": [
              "string"
            ]
          }
        }
      }
    ],
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "parameters": [
      {
        "description": "string",
        "fields": [
          "string"
        ],
        "name": "string",
        "validation": {
          "regex": {
            "regexes": [
              "string"
            ]
          },
          "values": {
            "values": [
              "string"
            ]
          }
        }
      }
    ],
    "placement": {
      "clusterSelector": {
        "clusterLabels": {
          "property1": "string",
          "property2": "string"
        },
        "zone": "string"
      },
      "managedCluster": {
        "clusterName": "string",
        "config": {
          "autoscalingConfig": {
            "policyUri": "string"
          },
          "auxiliaryNodeGroups": [
            {
              "nodeGroup": {
                "labels": {
                  "property1": "string",
                  "property2": "string"
                },
                "name": "string",
                "nodeGroupConfig": {
                  "accelerators": [
                    {
                      "acceleratorCount": 0,
                      "acceleratorTypeUri": "string"
                    }
                  ],
                  "diskConfig": {
                    "bootDiskSizeGb": 0,
                    "bootDiskType": "string",
                    "localSsdInterface": "string",
                    "numLocalSsds": 0
                  },
                  "imageUri": "string",
                  "machineTypeUri": "string",
                  "minCpuPlatform": "string",
                  "numInstances": 0,
                  "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
                },
                "roles": [
                  "ROLE_UNSPECIFIED"
                ]
              },
              "nodeGroupId": "string"
            }
          ],
          "configBucket": "string",
          "dataprocMetricConfig": {
            "metrics": [
              {
                "metricOverrides": [
                  "string"
                ],
                "metricSource": "METRIC_SOURCE_UNSPECIFIED"
              }
            ]
          },
          "encryptionConfig": {
            "gcePdKmsKeyName": "string",
            "kmsKey": "string"
          },
          "endpointConfig": {
            "enableHttpPortAccess": true
          },
          "gceClusterConfig": {
            "confidentialInstanceConfig": {
              "enableConfidentialCompute": true
            },
            "internalIpOnly": true,
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "networkUri": "string",
            "nodeGroupAffinity": {
              "nodeGroupUri": "string"
            },
            "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
            "reservationAffinity": {
              "consumeReservationType": "TYPE_UNSPECIFIED",
              "key": "string",
              "values": [
                "string"
              ]
            },
            "serviceAccount": "string",
            "serviceAccountScopes": [
              "string"
            ],
            "shieldedInstanceConfig": {
              "enableIntegrityMonitoring": true,
              "enableSecureBoot": true,
              "enableVtpm": true
            },
            "subnetworkUri": "string",
            "tags": [
              "string"
            ],
            "zoneUri": "string"
          },
          "gkeClusterConfig": {
            "gkeClusterTarget": "string",
            "namespacedGkeDeploymentTarget": {
              "clusterNamespace": "string",
              "targetGkeCluster": "string"
            },
            "nodePoolTarget": [
              {
                "nodePool": "string",
                "nodePoolConfig": {
                  "autoscaling": {
                    "maxNodeCount": 0,
                    "minNodeCount": 0
                  },
                  "config": {
                    "accelerators": [
                      {
                        "acceleratorCount": "string",
                        "acceleratorType": "string",
                        "gpuPartitionSize": "string"
                      }
                    ],
                    "bootDiskKmsKey": "string",
                    "localSsdCount": 0,
                    "machineType": "string",
                    "minCpuPlatform": "string",
                    "preemptible": true,
                    "spot": true
                  },
                  "locations": [
                    "string"
                  ]
                },
                "roles": [
                  "ROLE_UNSPECIFIED"
                ]
              }
            ]
          },
          "initializationActions": [
            {
              "executableFile": "string",
              "executionTimeout": "string"
            }
          ],
          "lifecycleConfig": {
            "autoDeleteTime": "string",
            "autoDeleteTtl": "string",
            "idleDeleteTtl": "string"
          },
          "masterConfig": {
            "accelerators": [
              {
                "acceleratorCount": 0,
                "acceleratorTypeUri": "string"
              }
            ],
            "diskConfig": {
              "bootDiskSizeGb": 0,
              "bootDiskType": "string",
              "localSsdInterface": "string",
              "numLocalSsds": 0
            },
            "imageUri": "string",
            "machineTypeUri": "string",
            "minCpuPlatform": "string",
            "numInstances": 0,
            "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
          },
          "metastoreConfig": {
            "dataprocMetastoreService": "string"
          },
          "secondaryWorkerConfig": {
            "accelerators": [
              {
                "acceleratorCount": 0,
                "acceleratorTypeUri": "string"
              }
            ],
            "diskConfig": {
              "bootDiskSizeGb": 0,
              "bootDiskType": "string",
              "localSsdInterface": "string",
              "numLocalSsds": 0
            },
            "imageUri": "string",
            "machineTypeUri": "string",
            "minCpuPlatform": "string",
            "numInstances": 0,
            "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
          },
          "securityConfig": {
            "identityConfig": {
              "userServiceAccountMapping": {
                "property1": "string",
                "property2": "string"
              }
            },
            "kerberosConfig": {
              "crossRealmTrustAdminServer": "string",
              "crossRealmTrustKdc": "string",
              "crossRealmTrustRealm": "string",
              "crossRealmTrustSharedPasswordUri": "string",
              "enableKerberos": true,
              "kdcDbKeyUri": "string",
              "keyPasswordUri": "string",
              "keystorePasswordUri": "string",
              "keystoreUri": "string",
              "kmsKeyUri": "string",
              "realm": "string",
              "rootPrincipalPasswordUri": "string",
              "tgtLifetimeHours": 0,
              "truststorePasswordUri": "string",
              "truststoreUri": "string"
            }
          },
          "softwareConfig": {
            "imageVersion": "string",
            "optionalComponents": [
              "COMPONENT_UNSPECIFIED"
            ],
            "properties": {
              "property1": "string",
              "property2": "string"
            }
          },
          "tempBucket": "string",
          "workerConfig": {
            "accelerators": [
              {
                "acceleratorCount": 0,
                "acceleratorTypeUri": "string"
              }
            ],
            "diskConfig": {
              "bootDiskSizeGb": 0,
              "bootDiskType": "string",
              "localSsdInterface": "string",
              "numLocalSsds": 0
            },
            "imageUri": "string",
            "machineTypeUri": "string",
            "minCpuPlatform": "string",
            "numInstances": 0,
            "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
          }
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "version": 0
  }'
```

`POST /v1/{parent}/workflowTemplates:instantiateInline`

Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.

> Body parameter

```json
{
  "dagTimeout": "string",
  "id": "string",
  "jobs": [
    {
      "hadoopJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainClass": "string",
        "mainJarFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "hiveJob": {
        "continueOnFailure": true,
        "jarFileUris": [
          "string"
        ],
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "pigJob": {
        "continueOnFailure": true,
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "prerequisiteStepIds": [
        "string"
      ],
      "prestoJob": {
        "clientTags": [
          "string"
        ],
        "continueOnFailure": true,
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "outputFormat": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        }
      },
      "pysparkJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainPythonFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "pythonFileUris": [
          "string"
        ]
      },
      "scheduling": {
        "maxFailuresPerHour": 0,
        "maxFailuresTotal": 0
      },
      "sparkJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainClass": "string",
        "mainJarFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "sparkRJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainRFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "sparkSqlJob": {
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "stepId": "string",
      "trinoJob": {
        "clientTags": [
          "string"
        ],
        "continueOnFailure": true,
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "outputFormat": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        }
      }
    }
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "parameters": [
    {
      "description": "string",
      "fields": [
        "string"
      ],
      "name": "string",
      "validation": {
        "regex": {
          "regexes": [
            "string"
          ]
        },
        "values": {
          "values": [
            "string"
          ]
        }
      }
    }
  ],
  "placement": {
    "clusterSelector": {
      "clusterLabels": {
        "property1": "string",
        "property2": "string"
      },
      "zone": "string"
    },
    "managedCluster": {
      "clusterName": "string",
      "config": {
        "autoscalingConfig": {
          "policyUri": "string"
        },
        "auxiliaryNodeGroups": [
          {
            "nodeGroup": {
              "labels": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string",
              "nodeGroupConfig": {
                "accelerators": [
                  {
                    "acceleratorCount": 0,
                    "acceleratorTypeUri": "string"
                  }
                ],
                "diskConfig": {
                  "bootDiskSizeGb": 0,
                  "bootDiskType": "string",
                  "localSsdInterface": "string",
                  "numLocalSsds": 0
                },
                "imageUri": "string",
                "machineTypeUri": "string",
                "minCpuPlatform": "string",
                "numInstances": 0,
                "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
              },
              "roles": [
                "ROLE_UNSPECIFIED"
              ]
            },
            "nodeGroupId": "string"
          }
        ],
        "configBucket": "string",
        "dataprocMetricConfig": {
          "metrics": [
            {
              "metricOverrides": [
                "string"
              ],
              "metricSource": "METRIC_SOURCE_UNSPECIFIED"
            }
          ]
        },
        "encryptionConfig": {
          "gcePdKmsKeyName": "string",
          "kmsKey": "string"
        },
        "endpointConfig": {
          "enableHttpPortAccess": true
        },
        "gceClusterConfig": {
          "confidentialInstanceConfig": {
            "enableConfidentialCompute": true
          },
          "internalIpOnly": true,
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "networkUri": "string",
          "nodeGroupAffinity": {
            "nodeGroupUri": "string"
          },
          "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
          "reservationAffinity": {
            "consumeReservationType": "TYPE_UNSPECIFIED",
            "key": "string",
            "values": [
              "string"
            ]
          },
          "serviceAccount": "string",
          "serviceAccountScopes": [
            "string"
          ],
          "shieldedInstanceConfig": {
            "enableIntegrityMonitoring": true,
            "enableSecureBoot": true,
            "enableVtpm": true
          },
          "subnetworkUri": "string",
          "tags": [
            "string"
          ],
          "zoneUri": "string"
        },
        "gkeClusterConfig": {
          "gkeClusterTarget": "string",
          "namespacedGkeDeploymentTarget": {
            "clusterNamespace": "string",
            "targetGkeCluster": "string"
          },
          "nodePoolTarget": [
            {
              "nodePool": "string",
              "nodePoolConfig": {
                "autoscaling": {
                  "maxNodeCount": 0,
                  "minNodeCount": 0
                },
                "config": {
                  "accelerators": [
                    {
                      "acceleratorCount": "string",
                      "acceleratorType": "string",
                      "gpuPartitionSize": "string"
                    }
                  ],
                  "bootDiskKmsKey": "string",
                  "localSsdCount": 0,
                  "machineType": "string",
                  "minCpuPlatform": "string",
                  "preemptible": true,
                  "spot": true
                },
                "locations": [
                  "string"
                ]
              },
              "roles": [
                "ROLE_UNSPECIFIED"
              ]
            }
          ]
        },
        "initializationActions": [
          {
            "executableFile": "string",
            "executionTimeout": "string"
          }
        ],
        "lifecycleConfig": {
          "autoDeleteTime": "string",
          "autoDeleteTtl": "string",
          "idleDeleteTtl": "string"
        },
        "masterConfig": {
          "accelerators": [
            {
              "acceleratorCount": 0,
              "acceleratorTypeUri": "string"
            }
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string",
            "localSsdInterface": "string",
            "numLocalSsds": 0
          },
          "imageUri": "string",
          "machineTypeUri": "string",
          "minCpuPlatform": "string",
          "numInstances": 0,
          "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
        },
        "metastoreConfig": {
          "dataprocMetastoreService": "string"
        },
        "secondaryWorkerConfig": {
          "accelerators": [
            {
              "acceleratorCount": 0,
              "acceleratorTypeUri": "string"
            }
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string",
            "localSsdInterface": "string",
            "numLocalSsds": 0
          },
          "imageUri": "string",
          "machineTypeUri": "string",
          "minCpuPlatform": "string",
          "numInstances": 0,
          "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
        },
        "securityConfig": {
          "identityConfig": {
            "userServiceAccountMapping": {
              "property1": "string",
              "property2": "string"
            }
          },
          "kerberosConfig": {
            "crossRealmTrustAdminServer": "string",
            "crossRealmTrustKdc": "string",
            "crossRealmTrustRealm": "string",
            "crossRealmTrustSharedPasswordUri": "string",
            "enableKerberos": true,
            "kdcDbKeyUri": "string",
            "keyPasswordUri": "string",
            "keystorePasswordUri": "string",
            "keystoreUri": "string",
            "kmsKeyUri": "string",
            "realm": "string",
            "rootPrincipalPasswordUri": "string",
            "tgtLifetimeHours": 0,
            "truststorePasswordUri": "string",
            "truststoreUri": "string"
          }
        },
        "softwareConfig": {
          "imageVersion": "string",
          "optionalComponents": [
            "COMPONENT_UNSPECIFIED"
          ],
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        },
        "tempBucket": "string",
        "workerConfig": {
          "accelerators": [
            {
              "acceleratorCount": 0,
              "acceleratorTypeUri": "string"
            }
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string",
            "localSsdInterface": "string",
            "numLocalSsds": 0
          },
          "imageUri": "string",
          "machineTypeUri": "string",
          "minCpuPlatform": "string",
          "numInstances": 0,
          "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
        }
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "version": 0
}
```

<h3 id="dataprocprojectsregionsworkflowtemplatesinstantiateinline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,instantiateinline, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.instantiateinline, the resource name of the location has the following format: projects/{project_id}/locations/{location}|
|requestId|query|string|false|Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.|
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
|body|body|[WorkflowTemplate](#schemaworkflowtemplate)|false|none|
|» dagTimeout|body|string(google-duration)|false|Optional. Timeout duration for the DAG of jobs, expressed in seconds (see JSON representation of duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). The timeout duration must be from 10 minutes ("600s") to 24 hours ("86400s"). The timer begins when the first job is submitted. If the workflow is running at the end of the timeout period, any remaining jobs are cancelled, the workflow is ended, and if the workflow was running on a managed cluster, the cluster is deleted.|
|» id|body|string|false|none|
|» jobs|body|[[OrderedJob](#schemaorderedjob)]|false|Required. The Directed Acyclic Graph of Jobs to submit.|
|» labels|body|object|false|Optional. The labels to associate with this template. These labels will be propagated to all jobs and clusters created by the workflow instance.Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).No more than 32 labels can be associated with a template.|
|» » **additionalProperties**|body|string|false|none|
|» parameters|body|[[TemplateParameter](#schematemplateparameter)]|false|Optional. Template parameters whose values are substituted into the template. Values for parameters must be provided when the template is instantiated.|
|» placement|body|[WorkflowTemplatePlacement](#schemaworkflowtemplateplacement)|false|Required. WorkflowTemplate scheduling information.|
|» version|body|integer(int32)|false|Optional. Used to perform a consistent read-modify-write.This field should be left blank for a CreateWorkflowTemplate request. It is required for an UpdateWorkflowTemplate request, and must match the current server version. A typical update template flow would fetch the current template with a GetWorkflowTemplate request, which will return the current template with the version field filled in with the current server version. The user updates other fields in the template, then returns it as part of the UpdateWorkflowTemplate request.|

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

<h3 id="dataprocprojectsregionsworkflowtemplatesinstantiateinline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.clusters.injectCredentials

<a id="opIddataproc.projects.regions.clusters.injectCredentials"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/string/string:injectCredentials \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterUuid": "string",
    "credentialsCiphertext": "string"
  }'
```

`POST /v1/{project}/{region}/{cluster}:injectCredentials`

Inject encrypted credentials into all of the VMs in a cluster.The target cluster must be a personal auth cluster assigned to the user who is issuing the RPC.

> Body parameter

```json
{
  "clusterUuid": "string",
  "credentialsCiphertext": "string"
}
```

<h3 id="dataprocprojectsregionsclustersinjectcredentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Required. The ID of the Google Cloud Platform project the cluster belongs to, of the form projects/.|
|region|path|string|true|Required. The region containing the cluster, of the form regions/.|
|cluster|path|string|true|Required. The cluster, in the form clusters/.|
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
|body|body|[InjectCredentialsRequest](#schemainjectcredentialsrequest)|false|none|
|» clusterUuid|body|string|false|Required. The cluster UUID.|
|» credentialsCiphertext|body|string|false|Required. The encrypted credentials being injected in to the cluster.The client is responsible for encrypting the credentials in a way that is supported by the cluster.A wrapped value is used here so that the actual contents of the encrypted credentials are not written to audit logs.|

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

<h3 id="dataprocprojectsregionsclustersinjectcredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.workflowTemplates.getIamPolicy

<a id="opIddataproc.projects.regions.workflowTemplates.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:getIamPolicy \
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

`POST /v1/{resource}:getIamPolicy`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

> Body parameter

```json
{
  "options": {
    "requestedPolicyVersion": 0
  }
}
```

<h3 id="dataprocprojectsregionsworkflowtemplatesgetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
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
|body|body|[GetIamPolicyRequest](#schemagetiampolicyrequest)|false|none|
|» options|body|[GetPolicyOptions](#schemagetpolicyoptions)|false|OPTIONAL: A GetPolicyOptions object for specifying options to GetIamPolicy.|

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

<h3 id="dataprocprojectsregionsworkflowtemplatesgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.workflowTemplates.setIamPolicy

<a id="opIddataproc.projects.regions.workflowTemplates.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:setIamPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "policy": {
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

`POST /v1/{resource}:setIamPolicy`

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

> Body parameter

```json
{
  "policy": {
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

<h3 id="dataprocprojectsregionsworkflowtemplatessetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
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
|body|body|[SetIamPolicyRequest](#schemasetiampolicyrequest)|false|none|
|» policy|body|[Policy](#schemapolicy)|false|REQUIRED: The complete policy to be applied to the resource. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|

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

<h3 id="dataprocprojectsregionsworkflowtemplatessetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## dataproc.projects.regions.workflowTemplates.testIamPermissions

<a id="opIddataproc.projects.regions.workflowTemplates.testIamPermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:testIamPermissions \
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

`POST /v1/{resource}:testIamPermissions`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="dataprocprojectsregionsworkflowtemplatestestiampermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
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
|body|body|[TestIamPermissionsRequest](#schematestiampermissionsrequest)|false|none|
|» permissions|body|[string]|false|The set of permissions to check for the resource. Permissions with wildcards (such as * or storage.*) are not allowed. For more information see IAM Overview (https://cloud.google.com/iam/docs/overview#permissions).|

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

<h3 id="dataprocprojectsregionsworkflowtemplatestestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestIamPermissionsResponse](#schematestiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AcceleratorConfig">AcceleratorConfig</h2>
<!-- backwards compatibility -->
<a id="schemaacceleratorconfig"></a>
<a id="schema_AcceleratorConfig"></a>
<a id="tocSacceleratorconfig"></a>
<a id="tocsacceleratorconfig"></a>

```json
{
  "acceleratorCount": 0,
  "acceleratorTypeUri": "string"
}
```

Specifies the type and number of accelerator cards attached to the instances of an instance. See GPUs on Compute Engine (https://cloud.google.com/compute/docs/gpus/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceleratorCount|integer(int32)|false|none|The number of the accelerator cards of this type exposed to this instance.|
|acceleratorTypeUri|string|false|none|Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See Compute Engine AcceleratorTypes (https://cloud.google.com/compute/docs/reference/v1/acceleratorTypes).Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]/acceleratorTypes/nvidia-tesla-k80 projects/[project_id]/zones/[zone]/acceleratorTypes/nvidia-tesla-k80 nvidia-tesla-k80Auto Zone Exception: If you are using the Dataproc Auto Zone Placement (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the accelerator type resource, for example, nvidia-tesla-k80.|

<h2 id="tocS_AutoscalingConfig">AutoscalingConfig</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalingconfig"></a>
<a id="schema_AutoscalingConfig"></a>
<a id="tocSautoscalingconfig"></a>
<a id="tocsautoscalingconfig"></a>

```json
{
  "policyUri": "string"
}
```

Autoscaling Policy config associated with the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyUri|string|false|none|Optional. The autoscaling policy used by the cluster.Only resource names including projectid and location (region) are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id] projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]Note that the policy must be in the same project and Dataproc region.|

<h2 id="tocS_AutoscalingPolicy">AutoscalingPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalingpolicy"></a>
<a id="schema_AutoscalingPolicy"></a>
<a id="tocSautoscalingpolicy"></a>
<a id="tocsautoscalingpolicy"></a>

```json
{
  "basicAlgorithm": {
    "cooldownPeriod": "string",
    "sparkStandaloneConfig": {
      "gracefulDecommissionTimeout": "string",
      "scaleDownFactor": 0,
      "scaleDownMinWorkerFraction": 0,
      "scaleUpFactor": 0,
      "scaleUpMinWorkerFraction": 0
    },
    "yarnConfig": {
      "gracefulDecommissionTimeout": "string",
      "scaleDownFactor": 0,
      "scaleDownMinWorkerFraction": 0,
      "scaleUpFactor": 0,
      "scaleUpMinWorkerFraction": 0
    }
  },
  "id": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "secondaryWorkerConfig": {
    "maxInstances": 0,
    "minInstances": 0,
    "weight": 0
  },
  "workerConfig": {
    "maxInstances": 0,
    "minInstances": 0,
    "weight": 0
  }
}
```

Describes an autoscaling policy for Dataproc cluster autoscaler.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicAlgorithm|[BasicAutoscalingAlgorithm](#schemabasicautoscalingalgorithm)|false|none|Basic algorithm for autoscaling.|
|id|string|false|none|Required. The policy id.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters.|
|labels|object|false|none|Optional. The labels to associate with this autoscaling policy. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with an autoscaling policy.|
|name|string|false|read-only|Output only. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies, the resource name of the policy has the following format: projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies, the resource name of the policy has the following format: projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}|
|secondaryWorkerConfig|[InstanceGroupAutoscalingPolicyConfig](#schemainstancegroupautoscalingpolicyconfig)|false|none|Optional. Describes how the autoscaler will operate for secondary workers.|
|workerConfig|[InstanceGroupAutoscalingPolicyConfig](#schemainstancegroupautoscalingpolicyconfig)|false|none|Required. Describes how the autoscaler will operate for primary workers.|

<h2 id="tocS_AuxiliaryNodeGroup">AuxiliaryNodeGroup</h2>
<!-- backwards compatibility -->
<a id="schemaauxiliarynodegroup"></a>
<a id="schema_AuxiliaryNodeGroup"></a>
<a id="tocSauxiliarynodegroup"></a>
<a id="tocsauxiliarynodegroup"></a>

```json
{
  "nodeGroup": {
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "nodeGroupConfig": {
      "accelerators": [
        {
          "acceleratorCount": 0,
          "acceleratorTypeUri": "string"
        }
      ],
      "diskConfig": {
        "bootDiskSizeGb": 0,
        "bootDiskType": "string",
        "localSsdInterface": "string",
        "numLocalSsds": 0
      },
      "imageUri": "string",
      "instanceNames": [
        "string"
      ],
      "instanceReferences": [
        {
          "instanceId": "string",
          "instanceName": "string",
          "publicEciesKey": "string",
          "publicKey": "string"
        }
      ],
      "isPreemptible": true,
      "machineTypeUri": "string",
      "managedGroupConfig": {
        "instanceGroupManagerName": "string",
        "instanceTemplateName": "string"
      },
      "minCpuPlatform": "string",
      "numInstances": 0,
      "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
    },
    "roles": [
      "ROLE_UNSPECIFIED"
    ]
  },
  "nodeGroupId": "string"
}
```

Node group identification and configuration information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodeGroup|[NodeGroup](#schemanodegroup)|false|none|Required. Node group configuration.|
|nodeGroupId|string|false|none|Optional. A node group ID. Generated if not specified.The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of from 3 to 33 characters.|

<h2 id="tocS_AuxiliaryServicesConfig">AuxiliaryServicesConfig</h2>
<!-- backwards compatibility -->
<a id="schemaauxiliaryservicesconfig"></a>
<a id="schema_AuxiliaryServicesConfig"></a>
<a id="tocSauxiliaryservicesconfig"></a>
<a id="tocsauxiliaryservicesconfig"></a>

```json
{
  "metastoreConfig": {
    "dataprocMetastoreService": "string"
  },
  "sparkHistoryServerConfig": {
    "dataprocCluster": "string"
  }
}
```

Auxiliary services configuration for a Cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metastoreConfig|[MetastoreConfig](#schemametastoreconfig)|false|none|Optional. The Hive Metastore configuration for this workload.|
|sparkHistoryServerConfig|[SparkHistoryServerConfig](#schemasparkhistoryserverconfig)|false|none|Optional. The Spark History Server configuration for the workload.|

<h2 id="tocS_BasicAutoscalingAlgorithm">BasicAutoscalingAlgorithm</h2>
<!-- backwards compatibility -->
<a id="schemabasicautoscalingalgorithm"></a>
<a id="schema_BasicAutoscalingAlgorithm"></a>
<a id="tocSbasicautoscalingalgorithm"></a>
<a id="tocsbasicautoscalingalgorithm"></a>

```json
{
  "cooldownPeriod": "string",
  "sparkStandaloneConfig": {
    "gracefulDecommissionTimeout": "string",
    "scaleDownFactor": 0,
    "scaleDownMinWorkerFraction": 0,
    "scaleUpFactor": 0,
    "scaleUpMinWorkerFraction": 0
  },
  "yarnConfig": {
    "gracefulDecommissionTimeout": "string",
    "scaleDownFactor": 0,
    "scaleDownMinWorkerFraction": 0,
    "scaleUpFactor": 0,
    "scaleUpMinWorkerFraction": 0
  }
}
```

Basic algorithm for autoscaling.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cooldownPeriod|string(google-duration)|false|none|Optional. Duration between scaling events. A scaling period starts after the update operation from the previous event has completed.Bounds: 2m, 1d. Default: 2m.|
|sparkStandaloneConfig|[SparkStandaloneAutoscalingConfig](#schemasparkstandaloneautoscalingconfig)|false|none|Optional. Spark Standalone autoscaling configuration|
|yarnConfig|[BasicYarnAutoscalingConfig](#schemabasicyarnautoscalingconfig)|false|none|Optional. YARN autoscaling configuration.|

<h2 id="tocS_BasicYarnAutoscalingConfig">BasicYarnAutoscalingConfig</h2>
<!-- backwards compatibility -->
<a id="schemabasicyarnautoscalingconfig"></a>
<a id="schema_BasicYarnAutoscalingConfig"></a>
<a id="tocSbasicyarnautoscalingconfig"></a>
<a id="tocsbasicyarnautoscalingconfig"></a>

```json
{
  "gracefulDecommissionTimeout": "string",
  "scaleDownFactor": 0,
  "scaleDownMinWorkerFraction": 0,
  "scaleUpFactor": 0,
  "scaleUpMinWorkerFraction": 0
}
```

Basic autoscaling configurations for YARN.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gracefulDecommissionTimeout|string(google-duration)|false|none|Required. Timeout for YARN graceful decommissioning of Node Managers. Specifies the duration to wait for jobs to complete before forcefully removing workers (and potentially interrupting jobs). Only applicable to downscaling operations.Bounds: 0s, 1d.|
|scaleDownFactor|number(double)|false|none|Required. Fraction of average YARN pending memory in the last cooldown period for which to remove workers. A scale-down factor of 1 will result in scaling down so that there is no available memory remaining after the update (more aggressive scaling). A scale-down factor of 0 disables removing workers, which can be beneficial for autoscaling a single job. See How autoscaling works (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/autoscaling#how_autoscaling_works) for more information.Bounds: 0.0, 1.0.|
|scaleDownMinWorkerFraction|number(double)|false|none|Optional. Minimum scale-down threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0 means the autoscaler will scale down on any recommended change.Bounds: 0.0, 1.0. Default: 0.0.|
|scaleUpFactor|number(double)|false|none|Required. Fraction of average YARN pending memory in the last cooldown period for which to add workers. A scale-up factor of 1.0 will result in scaling up so that there is no pending memory remaining after the update (more aggressive scaling). A scale-up factor closer to 0 will result in a smaller magnitude of scaling up (less aggressive scaling). See How autoscaling works (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/autoscaling#how_autoscaling_works) for more information.Bounds: 0.0, 1.0.|
|scaleUpMinWorkerFraction|number(double)|false|none|Optional. Minimum scale-up threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2-worker scale-up for the cluster to scale. A threshold of 0 means the autoscaler will scale up on any recommended change.Bounds: 0.0, 1.0. Default: 0.0.|

<h2 id="tocS_Batch">Batch</h2>
<!-- backwards compatibility -->
<a id="schemabatch"></a>
<a id="schema_Batch"></a>
<a id="tocSbatch"></a>
<a id="tocsbatch"></a>

```json
{
  "createTime": "string",
  "creator": "string",
  "environmentConfig": {
    "executionConfig": {
      "idleTtl": "string",
      "kmsKey": "string",
      "networkTags": [
        "string"
      ],
      "networkUri": "string",
      "serviceAccount": "string",
      "stagingBucket": "string",
      "subnetworkUri": "string",
      "ttl": "string"
    },
    "peripheralsConfig": {
      "metastoreService": "string",
      "sparkHistoryServerConfig": {
        "dataprocCluster": "string"
      }
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "operation": "string",
  "pysparkBatch": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "jarFileUris": [
      "string"
    ],
    "mainPythonFileUri": "string",
    "pythonFileUris": [
      "string"
    ]
  },
  "runtimeConfig": {
    "containerImage": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "version": "string"
  },
  "runtimeInfo": {
    "approximateUsage": {
      "milliDcuSeconds": "string",
      "shuffleStorageGbSeconds": "string"
    },
    "currentUsage": {
      "milliDcu": "string",
      "shuffleStorageGb": "string",
      "snapshotTime": "string"
    },
    "diagnosticOutputUri": "string",
    "endpoints": {
      "property1": "string",
      "property2": "string"
    },
    "outputUri": "string"
  },
  "sparkBatch": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "jarFileUris": [
      "string"
    ],
    "mainClass": "string",
    "mainJarFileUri": "string"
  },
  "sparkRBatch": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "mainRFileUri": "string"
  },
  "sparkSqlBatch": {
    "jarFileUris": [
      "string"
    ],
    "queryFileUri": "string",
    "queryVariables": {
      "property1": "string",
      "property2": "string"
    }
  },
  "state": "STATE_UNSPECIFIED",
  "stateHistory": [
    {
      "state": "STATE_UNSPECIFIED",
      "stateMessage": "string",
      "stateStartTime": "string"
    }
  ],
  "stateMessage": "string",
  "stateTime": "string",
  "uuid": "string"
}
```

A representation of a batch workload in the service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time when the batch was created.|
|creator|string|false|read-only|Output only. The email address of the user who created the batch.|
|environmentConfig|[EnvironmentConfig](#schemaenvironmentconfig)|false|none|Optional. Environment configuration for the batch execution.|
|labels|object|false|none|Optional. The labels to associate with this batch. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a batch.|
|name|string|false|read-only|Output only. The resource name of the batch.|
|operation|string|false|read-only|Output only. The resource name of the operation associated with this batch.|
|pysparkBatch|[PySparkBatch](#schemapysparkbatch)|false|none|Optional. PySpark batch config.|
|runtimeConfig|[RuntimeConfig](#schemaruntimeconfig)|false|none|Optional. Runtime configuration for the batch execution.|
|runtimeInfo|[RuntimeInfo](#schemaruntimeinfo)|false|none|Output only. Runtime information about batch execution.|
|sparkBatch|[SparkBatch](#schemasparkbatch)|false|none|Optional. Spark batch config.|
|sparkRBatch|[SparkRBatch](#schemasparkrbatch)|false|none|Optional. SparkR batch config.|
|sparkSqlBatch|[SparkSqlBatch](#schemasparksqlbatch)|false|none|Optional. SparkSql batch config.|
|state|string|false|read-only|Output only. The state of the batch.|
|stateHistory|[[StateHistory](#schemastatehistory)]|false|read-only|Output only. Historical state information for the batch.|
|stateMessage|string|false|read-only|Output only. Batch state details, such as a failure description if the state is FAILED.|
|stateTime|string(google-datetime)|false|read-only|Output only. The time when the batch entered a current state.|
|uuid|string|false|read-only|Output only. A batch UUID (Unique Universal Identifier). The service generates this value when it creates the batch.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|PENDING|
|state|RUNNING|
|state|CANCELLING|
|state|CANCELLED|
|state|SUCCEEDED|
|state|FAILED|

<h2 id="tocS_BatchOperationMetadata">BatchOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemabatchoperationmetadata"></a>
<a id="schema_BatchOperationMetadata"></a>
<a id="tocSbatchoperationmetadata"></a>
<a id="tocsbatchoperationmetadata"></a>

```json
{
  "batch": "string",
  "batchUuid": "string",
  "createTime": "string",
  "description": "string",
  "doneTime": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "operationType": "BATCH_OPERATION_TYPE_UNSPECIFIED",
  "warnings": [
    "string"
  ]
}
```

Metadata describing the Batch operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batch|string|false|none|Name of the batch for the operation.|
|batchUuid|string|false|none|Batch UUID for the operation.|
|createTime|string(google-datetime)|false|none|The time when the operation was created.|
|description|string|false|none|Short description of the operation.|
|doneTime|string(google-datetime)|false|none|The time when the operation finished.|
|labels|object|false|none|Labels associated with the operation.|
|operationType|string|false|none|The operation type.|
|warnings|[string]|false|none|Warnings encountered during operation execution.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|BATCH_OPERATION_TYPE_UNSPECIFIED|
|operationType|BATCH|

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

Associates members, or principals, with a role.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|condition|[Expr](#schemaexpr)|false|none|The condition that is associated with this binding.If the condition evaluates to true, then this binding applies to the current request.If the condition evaluates to false, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).|
|members|[string]|false|none|Specifies the principals requesting access for a Google Cloud resource. members can have the following values: allUsers: A special identifier that represents anyone who is on the internet; with or without a Google account. allAuthenticatedUsers: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. user:{emailid}: An email address that represents a specific Google account. For example, alice@example.com . serviceAccount:{emailid}: An email address that represents a Google service account. For example, my-other-app@appspot.gserviceaccount.com. serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]: An identifier for a Kubernetes service account (https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, my-project.svc.id.goog[my-namespace/my-kubernetes-sa]. group:{emailid}: An email address that represents a Google group. For example, admins@example.com. domain:{domain}: The G Suite domain (primary) that represents all the users of that domain. For example, google.com or example.com. deleted:user:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a user that has been recently deleted. For example, alice@example.com?uid=123456789012345678901. If the user is recovered, this value reverts to user:{emailid} and the recovered user retains the role in the binding. deleted:serviceAccount:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901. If the service account is undeleted, this value reverts to serviceAccount:{emailid} and the undeleted service account retains the role in the binding. deleted:group:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, admins@example.com?uid=123456789012345678901. If the group is recovered, this value reverts to group:{emailid} and the recovered group retains the role in the binding.|
|role|string|false|none|Role that is assigned to the list of members, or principals. For example, roles/viewer, roles/editor, or roles/owner.|

<h2 id="tocS_CancelJobRequest">CancelJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacanceljobrequest"></a>
<a id="schema_CancelJobRequest"></a>
<a id="tocScanceljobrequest"></a>
<a id="tocscanceljobrequest"></a>

```json
{}
```

A request to cancel a job.

<h2 id="tocS_Cluster">Cluster</h2>
<!-- backwards compatibility -->
<a id="schemacluster"></a>
<a id="schema_Cluster"></a>
<a id="tocScluster"></a>
<a id="tocscluster"></a>

```json
{
  "clusterName": "string",
  "clusterUuid": "string",
  "config": {
    "autoscalingConfig": {
      "policyUri": "string"
    },
    "auxiliaryNodeGroups": [
      {
        "nodeGroup": {
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "name": "string",
          "nodeGroupConfig": {
            "accelerators": [
              {
                "acceleratorCount": 0,
                "acceleratorTypeUri": "string"
              }
            ],
            "diskConfig": {
              "bootDiskSizeGb": 0,
              "bootDiskType": "string",
              "localSsdInterface": "string",
              "numLocalSsds": 0
            },
            "imageUri": "string",
            "instanceNames": [
              "string"
            ],
            "instanceReferences": [
              {
                "instanceId": "string",
                "instanceName": "string",
                "publicEciesKey": "string",
                "publicKey": "string"
              }
            ],
            "isPreemptible": true,
            "machineTypeUri": "string",
            "managedGroupConfig": {
              "instanceGroupManagerName": "string",
              "instanceTemplateName": "string"
            },
            "minCpuPlatform": "string",
            "numInstances": 0,
            "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
          },
          "roles": [
            "ROLE_UNSPECIFIED"
          ]
        },
        "nodeGroupId": "string"
      }
    ],
    "configBucket": "string",
    "dataprocMetricConfig": {
      "metrics": [
        {
          "metricOverrides": [
            "string"
          ],
          "metricSource": "METRIC_SOURCE_UNSPECIFIED"
        }
      ]
    },
    "encryptionConfig": {
      "gcePdKmsKeyName": "string",
      "kmsKey": "string"
    },
    "endpointConfig": {
      "enableHttpPortAccess": true,
      "httpPorts": {
        "property1": "string",
        "property2": "string"
      }
    },
    "gceClusterConfig": {
      "confidentialInstanceConfig": {
        "enableConfidentialCompute": true
      },
      "internalIpOnly": true,
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "networkUri": "string",
      "nodeGroupAffinity": {
        "nodeGroupUri": "string"
      },
      "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
      "reservationAffinity": {
        "consumeReservationType": "TYPE_UNSPECIFIED",
        "key": "string",
        "values": [
          "string"
        ]
      },
      "serviceAccount": "string",
      "serviceAccountScopes": [
        "string"
      ],
      "shieldedInstanceConfig": {
        "enableIntegrityMonitoring": true,
        "enableSecureBoot": true,
        "enableVtpm": true
      },
      "subnetworkUri": "string",
      "tags": [
        "string"
      ],
      "zoneUri": "string"
    },
    "gkeClusterConfig": {
      "gkeClusterTarget": "string",
      "namespacedGkeDeploymentTarget": {
        "clusterNamespace": "string",
        "targetGkeCluster": "string"
      },
      "nodePoolTarget": [
        {
          "nodePool": "string",
          "nodePoolConfig": {
            "autoscaling": {
              "maxNodeCount": 0,
              "minNodeCount": 0
            },
            "config": {
              "accelerators": [
                {
                  "acceleratorCount": "string",
                  "acceleratorType": "string",
                  "gpuPartitionSize": "string"
                }
              ],
              "bootDiskKmsKey": "string",
              "localSsdCount": 0,
              "machineType": "string",
              "minCpuPlatform": "string",
              "preemptible": true,
              "spot": true
            },
            "locations": [
              "string"
            ]
          },
          "roles": [
            "ROLE_UNSPECIFIED"
          ]
        }
      ]
    },
    "initializationActions": [
      {
        "executableFile": "string",
        "executionTimeout": "string"
      }
    ],
    "lifecycleConfig": {
      "autoDeleteTime": "string",
      "autoDeleteTtl": "string",
      "idleDeleteTtl": "string",
      "idleStartTime": "string"
    },
    "masterConfig": {
      "accelerators": [
        {
          "acceleratorCount": 0,
          "acceleratorTypeUri": "string"
        }
      ],
      "diskConfig": {
        "bootDiskSizeGb": 0,
        "bootDiskType": "string",
        "localSsdInterface": "string",
        "numLocalSsds": 0
      },
      "imageUri": "string",
      "instanceNames": [
        "string"
      ],
      "instanceReferences": [
        {
          "instanceId": "string",
          "instanceName": "string",
          "publicEciesKey": "string",
          "publicKey": "string"
        }
      ],
      "isPreemptible": true,
      "machineTypeUri": "string",
      "managedGroupConfig": {
        "instanceGroupManagerName": "string",
        "instanceTemplateName": "string"
      },
      "minCpuPlatform": "string",
      "numInstances": 0,
      "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
    },
    "metastoreConfig": {
      "dataprocMetastoreService": "string"
    },
    "secondaryWorkerConfig": {
      "accelerators": [
        {
          "acceleratorCount": 0,
          "acceleratorTypeUri": "string"
        }
      ],
      "diskConfig": {
        "bootDiskSizeGb": 0,
        "bootDiskType": "string",
        "localSsdInterface": "string",
        "numLocalSsds": 0
      },
      "imageUri": "string",
      "instanceNames": [
        "string"
      ],
      "instanceReferences": [
        {
          "instanceId": "string",
          "instanceName": "string",
          "publicEciesKey": "string",
          "publicKey": "string"
        }
      ],
      "isPreemptible": true,
      "machineTypeUri": "string",
      "managedGroupConfig": {
        "instanceGroupManagerName": "string",
        "instanceTemplateName": "string"
      },
      "minCpuPlatform": "string",
      "numInstances": 0,
      "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
    },
    "securityConfig": {
      "identityConfig": {
        "userServiceAccountMapping": {
          "property1": "string",
          "property2": "string"
        }
      },
      "kerberosConfig": {
        "crossRealmTrustAdminServer": "string",
        "crossRealmTrustKdc": "string",
        "crossRealmTrustRealm": "string",
        "crossRealmTrustSharedPasswordUri": "string",
        "enableKerberos": true,
        "kdcDbKeyUri": "string",
        "keyPasswordUri": "string",
        "keystorePasswordUri": "string",
        "keystoreUri": "string",
        "kmsKeyUri": "string",
        "realm": "string",
        "rootPrincipalPasswordUri": "string",
        "tgtLifetimeHours": 0,
        "truststorePasswordUri": "string",
        "truststoreUri": "string"
      }
    },
    "softwareConfig": {
      "imageVersion": "string",
      "optionalComponents": [
        "COMPONENT_UNSPECIFIED"
      ],
      "properties": {
        "property1": "string",
        "property2": "string"
      }
    },
    "tempBucket": "string",
    "workerConfig": {
      "accelerators": [
        {
          "acceleratorCount": 0,
          "acceleratorTypeUri": "string"
        }
      ],
      "diskConfig": {
        "bootDiskSizeGb": 0,
        "bootDiskType": "string",
        "localSsdInterface": "string",
        "numLocalSsds": 0
      },
      "imageUri": "string",
      "instanceNames": [
        "string"
      ],
      "instanceReferences": [
        {
          "instanceId": "string",
          "instanceName": "string",
          "publicEciesKey": "string",
          "publicKey": "string"
        }
      ],
      "isPreemptible": true,
      "machineTypeUri": "string",
      "managedGroupConfig": {
        "instanceGroupManagerName": "string",
        "instanceTemplateName": "string"
      },
      "minCpuPlatform": "string",
      "numInstances": 0,
      "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "metrics": {
    "hdfsMetrics": {
      "property1": "string",
      "property2": "string"
    },
    "yarnMetrics": {
      "property1": "string",
      "property2": "string"
    }
  },
  "projectId": "string",
  "status": {
    "detail": "string",
    "state": "UNKNOWN",
    "stateStartTime": "string",
    "substate": "UNSPECIFIED"
  },
  "statusHistory": [
    {
      "detail": "string",
      "state": "UNKNOWN",
      "stateStartTime": "string",
      "substate": "UNSPECIFIED"
    }
  ],
  "virtualClusterConfig": {
    "auxiliaryServicesConfig": {
      "metastoreConfig": {
        "dataprocMetastoreService": "string"
      },
      "sparkHistoryServerConfig": {
        "dataprocCluster": "string"
      }
    },
    "kubernetesClusterConfig": {
      "gkeClusterConfig": {
        "gkeClusterTarget": "string",
        "namespacedGkeDeploymentTarget": {
          "clusterNamespace": "string",
          "targetGkeCluster": "string"
        },
        "nodePoolTarget": [
          {
            "nodePool": "string",
            "nodePoolConfig": {
              "autoscaling": {
                "maxNodeCount": 0,
                "minNodeCount": 0
              },
              "config": {
                "accelerators": [
                  {
                    "acceleratorCount": "string",
                    "acceleratorType": "string",
                    "gpuPartitionSize": "string"
                  }
                ],
                "bootDiskKmsKey": "string",
                "localSsdCount": 0,
                "machineType": "string",
                "minCpuPlatform": "string",
                "preemptible": true,
                "spot": true
              },
              "locations": [
                "string"
              ]
            },
            "roles": [
              "ROLE_UNSPECIFIED"
            ]
          }
        ]
      },
      "kubernetesNamespace": "string",
      "kubernetesSoftwareConfig": {
        "componentVersion": {
          "property1": "string",
          "property2": "string"
        },
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "stagingBucket": "string"
  }
}
```

Describes the identifying information, config, and status of a Dataproc cluster

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterName|string|false|none|Required. The cluster name, which must be unique within a project. The name must start with a lowercase letter, and can contain up to 51 lowercase letters, numbers, and hyphens. It cannot end with a hyphen. The name of a deleted cluster can be reused.|
|clusterUuid|string|false|read-only|Output only. A cluster UUID (Unique Universal Identifier). Dataproc generates this value when it creates the cluster.|
|config|[ClusterConfig](#schemaclusterconfig)|false|none|Optional. The cluster config for a cluster of Compute Engine Instances. Note that Dataproc may set default values, and values may change when clusters are updated.Exactly one of ClusterConfig or VirtualClusterConfig must be specified.|
|labels|object|false|none|Optional. The labels to associate with this cluster. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster.|
|metrics|[ClusterMetrics](#schemaclustermetrics)|false|none|Output only. Contains cluster daemon metrics such as HDFS and YARN stats.Beta Feature: This report is available for testing purposes only. It may be changed before final release.|
|projectId|string|false|none|Required. The Google Cloud Platform project ID that the cluster belongs to.|
|status|[ClusterStatus](#schemaclusterstatus)|false|none|Output only. Cluster status.|
|statusHistory|[[ClusterStatus](#schemaclusterstatus)]|false|read-only|Output only. The previous cluster status.|
|virtualClusterConfig|[VirtualClusterConfig](#schemavirtualclusterconfig)|false|none|Optional. The virtual cluster config is used when creating a Dataproc cluster that does not directly control the underlying compute resources, for example, when creating a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-overview). Dataproc may set default values, and values may change when clusters are updated. Exactly one of config or virtual_cluster_config must be specified.|

<h2 id="tocS_ClusterConfig">ClusterConfig</h2>
<!-- backwards compatibility -->
<a id="schemaclusterconfig"></a>
<a id="schema_ClusterConfig"></a>
<a id="tocSclusterconfig"></a>
<a id="tocsclusterconfig"></a>

```json
{
  "autoscalingConfig": {
    "policyUri": "string"
  },
  "auxiliaryNodeGroups": [
    {
      "nodeGroup": {
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "nodeGroupConfig": {
          "accelerators": [
            {
              "acceleratorCount": 0,
              "acceleratorTypeUri": "string"
            }
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string",
            "localSsdInterface": "string",
            "numLocalSsds": 0
          },
          "imageUri": "string",
          "instanceNames": [
            "string"
          ],
          "instanceReferences": [
            {
              "instanceId": "string",
              "instanceName": "string",
              "publicEciesKey": "string",
              "publicKey": "string"
            }
          ],
          "isPreemptible": true,
          "machineTypeUri": "string",
          "managedGroupConfig": {
            "instanceGroupManagerName": "string",
            "instanceTemplateName": "string"
          },
          "minCpuPlatform": "string",
          "numInstances": 0,
          "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
        },
        "roles": [
          "ROLE_UNSPECIFIED"
        ]
      },
      "nodeGroupId": "string"
    }
  ],
  "configBucket": "string",
  "dataprocMetricConfig": {
    "metrics": [
      {
        "metricOverrides": [
          "string"
        ],
        "metricSource": "METRIC_SOURCE_UNSPECIFIED"
      }
    ]
  },
  "encryptionConfig": {
    "gcePdKmsKeyName": "string",
    "kmsKey": "string"
  },
  "endpointConfig": {
    "enableHttpPortAccess": true,
    "httpPorts": {
      "property1": "string",
      "property2": "string"
    }
  },
  "gceClusterConfig": {
    "confidentialInstanceConfig": {
      "enableConfidentialCompute": true
    },
    "internalIpOnly": true,
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "networkUri": "string",
    "nodeGroupAffinity": {
      "nodeGroupUri": "string"
    },
    "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
    "reservationAffinity": {
      "consumeReservationType": "TYPE_UNSPECIFIED",
      "key": "string",
      "values": [
        "string"
      ]
    },
    "serviceAccount": "string",
    "serviceAccountScopes": [
      "string"
    ],
    "shieldedInstanceConfig": {
      "enableIntegrityMonitoring": true,
      "enableSecureBoot": true,
      "enableVtpm": true
    },
    "subnetworkUri": "string",
    "tags": [
      "string"
    ],
    "zoneUri": "string"
  },
  "gkeClusterConfig": {
    "gkeClusterTarget": "string",
    "namespacedGkeDeploymentTarget": {
      "clusterNamespace": "string",
      "targetGkeCluster": "string"
    },
    "nodePoolTarget": [
      {
        "nodePool": "string",
        "nodePoolConfig": {
          "autoscaling": {
            "maxNodeCount": 0,
            "minNodeCount": 0
          },
          "config": {
            "accelerators": [
              {
                "acceleratorCount": "string",
                "acceleratorType": "string",
                "gpuPartitionSize": "string"
              }
            ],
            "bootDiskKmsKey": "string",
            "localSsdCount": 0,
            "machineType": "string",
            "minCpuPlatform": "string",
            "preemptible": true,
            "spot": true
          },
          "locations": [
            "string"
          ]
        },
        "roles": [
          "ROLE_UNSPECIFIED"
        ]
      }
    ]
  },
  "initializationActions": [
    {
      "executableFile": "string",
      "executionTimeout": "string"
    }
  ],
  "lifecycleConfig": {
    "autoDeleteTime": "string",
    "autoDeleteTtl": "string",
    "idleDeleteTtl": "string",
    "idleStartTime": "string"
  },
  "masterConfig": {
    "accelerators": [
      {
        "acceleratorCount": 0,
        "acceleratorTypeUri": "string"
      }
    ],
    "diskConfig": {
      "bootDiskSizeGb": 0,
      "bootDiskType": "string",
      "localSsdInterface": "string",
      "numLocalSsds": 0
    },
    "imageUri": "string",
    "instanceNames": [
      "string"
    ],
    "instanceReferences": [
      {
        "instanceId": "string",
        "instanceName": "string",
        "publicEciesKey": "string",
        "publicKey": "string"
      }
    ],
    "isPreemptible": true,
    "machineTypeUri": "string",
    "managedGroupConfig": {
      "instanceGroupManagerName": "string",
      "instanceTemplateName": "string"
    },
    "minCpuPlatform": "string",
    "numInstances": 0,
    "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
  },
  "metastoreConfig": {
    "dataprocMetastoreService": "string"
  },
  "secondaryWorkerConfig": {
    "accelerators": [
      {
        "acceleratorCount": 0,
        "acceleratorTypeUri": "string"
      }
    ],
    "diskConfig": {
      "bootDiskSizeGb": 0,
      "bootDiskType": "string",
      "localSsdInterface": "string",
      "numLocalSsds": 0
    },
    "imageUri": "string",
    "instanceNames": [
      "string"
    ],
    "instanceReferences": [
      {
        "instanceId": "string",
        "instanceName": "string",
        "publicEciesKey": "string",
        "publicKey": "string"
      }
    ],
    "isPreemptible": true,
    "machineTypeUri": "string",
    "managedGroupConfig": {
      "instanceGroupManagerName": "string",
      "instanceTemplateName": "string"
    },
    "minCpuPlatform": "string",
    "numInstances": 0,
    "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
  },
  "securityConfig": {
    "identityConfig": {
      "userServiceAccountMapping": {
        "property1": "string",
        "property2": "string"
      }
    },
    "kerberosConfig": {
      "crossRealmTrustAdminServer": "string",
      "crossRealmTrustKdc": "string",
      "crossRealmTrustRealm": "string",
      "crossRealmTrustSharedPasswordUri": "string",
      "enableKerberos": true,
      "kdcDbKeyUri": "string",
      "keyPasswordUri": "string",
      "keystorePasswordUri": "string",
      "keystoreUri": "string",
      "kmsKeyUri": "string",
      "realm": "string",
      "rootPrincipalPasswordUri": "string",
      "tgtLifetimeHours": 0,
      "truststorePasswordUri": "string",
      "truststoreUri": "string"
    }
  },
  "softwareConfig": {
    "imageVersion": "string",
    "optionalComponents": [
      "COMPONENT_UNSPECIFIED"
    ],
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "tempBucket": "string",
  "workerConfig": {
    "accelerators": [
      {
        "acceleratorCount": 0,
        "acceleratorTypeUri": "string"
      }
    ],
    "diskConfig": {
      "bootDiskSizeGb": 0,
      "bootDiskType": "string",
      "localSsdInterface": "string",
      "numLocalSsds": 0
    },
    "imageUri": "string",
    "instanceNames": [
      "string"
    ],
    "instanceReferences": [
      {
        "instanceId": "string",
        "instanceName": "string",
        "publicEciesKey": "string",
        "publicKey": "string"
      }
    ],
    "isPreemptible": true,
    "machineTypeUri": "string",
    "managedGroupConfig": {
      "instanceGroupManagerName": "string",
      "instanceTemplateName": "string"
    },
    "minCpuPlatform": "string",
    "numInstances": 0,
    "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
  }
}
```

The cluster config.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoscalingConfig|[AutoscalingConfig](#schemaautoscalingconfig)|false|none|Optional. Autoscaling config for the policy associated with the cluster. Cluster does not autoscale if this field is unset.|
|auxiliaryNodeGroups|[[AuxiliaryNodeGroup](#schemaauxiliarynodegroup)]|false|none|Optional. The node group settings.|
|configBucket|string|false|none|Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.|
|dataprocMetricConfig|[DataprocMetricConfig](#schemadataprocmetricconfig)|false|none|Optional. The config for Dataproc metrics.|
|encryptionConfig|[EncryptionConfig](#schemaencryptionconfig)|false|none|Optional. Encryption settings for the cluster.|
|endpointConfig|[EndpointConfig](#schemaendpointconfig)|false|none|Optional. Port/endpoint configuration for this cluster|
|gceClusterConfig|[GceClusterConfig](#schemagceclusterconfig)|false|none|Optional. The shared Compute Engine config settings for all instances in a cluster.|
|gkeClusterConfig|[GkeClusterConfig](#schemagkeclusterconfig)|false|none|Optional. BETA. The Kubernetes Engine config for Dataproc clusters deployed to The Kubernetes Engine config for Dataproc clusters deployed to Kubernetes. These config settings are mutually exclusive with Compute Engine-based options, such as gce_cluster_config, master_config, worker_config, secondary_worker_config, and autoscaling_config.|
|initializationActions|[[NodeInitializationAction](#schemanodeinitializationaction)]|false|none|Optional. Commands to execute on each node after config is completed. By default, executables are run on master and all worker nodes. You can test a node's role metadata to run an executable on a master or worker node, as shown below using curl (you can also use wget): ROLE=$(curl -H Metadata-Flavor:Google http://metadata/computeMetadata/v1/instance/attributes/dataproc-role) if [[ "${ROLE}" == 'Master' ]]; then ... master specific actions ... else ... worker specific actions ... fi |
|lifecycleConfig|[LifecycleConfig](#schemalifecycleconfig)|false|none|Optional. Lifecycle setting for the cluster.|
|masterConfig|[InstanceGroupConfig](#schemainstancegroupconfig)|false|none|Optional. The Compute Engine config settings for the cluster's master instance.|
|metastoreConfig|[MetastoreConfig](#schemametastoreconfig)|false|none|Optional. Metastore configuration.|
|secondaryWorkerConfig|[InstanceGroupConfig](#schemainstancegroupconfig)|false|none|Optional. The Compute Engine config settings for a cluster's secondary worker instances|
|securityConfig|[SecurityConfig](#schemasecurityconfig)|false|none|Optional. Security settings for the cluster.|
|softwareConfig|[SoftwareConfig](#schemasoftwareconfig)|false|none|Optional. The config settings for cluster software.|
|tempBucket|string|false|none|Optional. A Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket. The default bucket has a TTL of 90 days, but you can use any TTL (or none) if you specify a bucket (see Dataproc staging and temp buckets (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.|
|workerConfig|[InstanceGroupConfig](#schemainstancegroupconfig)|false|none|Optional. The Compute Engine config settings for the cluster's worker instances.|

<h2 id="tocS_ClusterMetrics">ClusterMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaclustermetrics"></a>
<a id="schema_ClusterMetrics"></a>
<a id="tocSclustermetrics"></a>
<a id="tocsclustermetrics"></a>

```json
{
  "hdfsMetrics": {
    "property1": "string",
    "property2": "string"
  },
  "yarnMetrics": {
    "property1": "string",
    "property2": "string"
  }
}
```

Contains cluster daemon metrics, such as HDFS and YARN stats.Beta Feature: This report is available for testing purposes only. It may be changed before final release.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hdfsMetrics|object|false|none|The HDFS metrics.|
|yarnMetrics|object|false|none|YARN metrics.|

<h2 id="tocS_ClusterOperation">ClusterOperation</h2>
<!-- backwards compatibility -->
<a id="schemaclusteroperation"></a>
<a id="schema_ClusterOperation"></a>
<a id="tocSclusteroperation"></a>
<a id="tocsclusteroperation"></a>

```json
{
  "done": true,
  "error": "string",
  "operationId": "string"
}
```

The cluster operation triggered by a workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|done|boolean|false|read-only|Output only. Indicates the operation is done.|
|error|string|false|read-only|Output only. Error, if operation failed.|
|operationId|string|false|read-only|Output only. The id of the cluster operation.|

<h2 id="tocS_ClusterOperationMetadata">ClusterOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaclusteroperationmetadata"></a>
<a id="schema_ClusterOperationMetadata"></a>
<a id="tocSclusteroperationmetadata"></a>
<a id="tocsclusteroperationmetadata"></a>

```json
{
  "childOperationIds": [
    "string"
  ],
  "clusterName": "string",
  "clusterUuid": "string",
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "operationType": "string",
  "status": {
    "details": "string",
    "innerState": "string",
    "state": "UNKNOWN",
    "stateStartTime": "string"
  },
  "statusHistory": [
    {
      "details": "string",
      "innerState": "string",
      "state": "UNKNOWN",
      "stateStartTime": "string"
    }
  ],
  "warnings": [
    "string"
  ]
}
```

Metadata describing the operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|childOperationIds|[string]|false|read-only|Output only. Child operation ids|
|clusterName|string|false|read-only|Output only. Name of the cluster for the operation.|
|clusterUuid|string|false|read-only|Output only. Cluster UUID for the operation.|
|description|string|false|read-only|Output only. Short description of operation.|
|labels|object|false|read-only|Output only. Labels associated with the operation|
|operationType|string|false|read-only|Output only. The operation type.|
|status|[ClusterOperationStatus](#schemaclusteroperationstatus)|false|none|Output only. Current operation status.|
|statusHistory|[[ClusterOperationStatus](#schemaclusteroperationstatus)]|false|read-only|Output only. The previous operation status.|
|warnings|[string]|false|read-only|Output only. Errors encountered during operation execution.|

<h2 id="tocS_ClusterOperationStatus">ClusterOperationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaclusteroperationstatus"></a>
<a id="schema_ClusterOperationStatus"></a>
<a id="tocSclusteroperationstatus"></a>
<a id="tocsclusteroperationstatus"></a>

```json
{
  "details": "string",
  "innerState": "string",
  "state": "UNKNOWN",
  "stateStartTime": "string"
}
```

The status of the operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|string|false|read-only|Output only. A message containing any operation metadata details.|
|innerState|string|false|read-only|Output only. A message containing the detailed operation state.|
|state|string|false|read-only|Output only. A message containing the operation state.|
|stateStartTime|string(google-datetime)|false|read-only|Output only. The time this state was entered.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|UNKNOWN|
|state|PENDING|
|state|RUNNING|
|state|DONE|

<h2 id="tocS_ClusterSelector">ClusterSelector</h2>
<!-- backwards compatibility -->
<a id="schemaclusterselector"></a>
<a id="schema_ClusterSelector"></a>
<a id="tocSclusterselector"></a>
<a id="tocsclusterselector"></a>

```json
{
  "clusterLabels": {
    "property1": "string",
    "property2": "string"
  },
  "zone": "string"
}
```

A selector that chooses target cluster for jobs based on metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterLabels|object|false|none|Required. The cluster labels. Cluster must have all labels to match.|
|zone|string|false|none|Optional. The zone where workflow process executes. This parameter does not affect the selection of the cluster.If unspecified, the zone of the first cluster matching the selector is used.|

<h2 id="tocS_ClusterStatus">ClusterStatus</h2>
<!-- backwards compatibility -->
<a id="schemaclusterstatus"></a>
<a id="schema_ClusterStatus"></a>
<a id="tocSclusterstatus"></a>
<a id="tocsclusterstatus"></a>

```json
{
  "detail": "string",
  "state": "UNKNOWN",
  "stateStartTime": "string",
  "substate": "UNSPECIFIED"
}
```

The status of a cluster and its instances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|read-only|Optional. Output only. Details of cluster's state.|
|state|string|false|read-only|Output only. The cluster's state.|
|stateStartTime|string(google-datetime)|false|read-only|Output only. Time when this state was entered (see JSON representation of Timestamp (https://developers.google.com/protocol-buffers/docs/proto3#json)).|
|substate|string|false|read-only|Output only. Additional state information that includes status reported by the agent.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|UNKNOWN|
|state|CREATING|
|state|RUNNING|
|state|ERROR|
|state|ERROR_DUE_TO_UPDATE|
|state|DELETING|
|state|UPDATING|
|state|STOPPING|
|state|STOPPED|
|state|STARTING|
|state|REPAIRING|
|substate|UNSPECIFIED|
|substate|UNHEALTHY|
|substate|STALE_STATUS|

<h2 id="tocS_ConfidentialInstanceConfig">ConfidentialInstanceConfig</h2>
<!-- backwards compatibility -->
<a id="schemaconfidentialinstanceconfig"></a>
<a id="schema_ConfidentialInstanceConfig"></a>
<a id="tocSconfidentialinstanceconfig"></a>
<a id="tocsconfidentialinstanceconfig"></a>

```json
{
  "enableConfidentialCompute": true
}
```

Confidential Instance Config for clusters using Confidential VMs (https://cloud.google.com/compute/confidential-vm/docs)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableConfidentialCompute|boolean|false|none|Optional. Defines whether the instance should have confidential compute enabled.|

<h2 id="tocS_DataprocMetricConfig">DataprocMetricConfig</h2>
<!-- backwards compatibility -->
<a id="schemadataprocmetricconfig"></a>
<a id="schema_DataprocMetricConfig"></a>
<a id="tocSdataprocmetricconfig"></a>
<a id="tocsdataprocmetricconfig"></a>

```json
{
  "metrics": [
    {
      "metricOverrides": [
        "string"
      ],
      "metricSource": "METRIC_SOURCE_UNSPECIFIED"
    }
  ]
}
```

Dataproc metric config.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metrics|[[Metric](#schemametric)]|false|none|Required. Metrics sources to enable.|

<h2 id="tocS_DiagnoseClusterRequest">DiagnoseClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemadiagnoseclusterrequest"></a>
<a id="schema_DiagnoseClusterRequest"></a>
<a id="tocSdiagnoseclusterrequest"></a>
<a id="tocsdiagnoseclusterrequest"></a>

```json
{
  "diagnosisInterval": {
    "endTime": "string",
    "startTime": "string"
  },
  "job": "string",
  "jobs": [
    "string"
  ],
  "yarnApplicationId": "string",
  "yarnApplicationIds": [
    "string"
  ]
}
```

A request to collect cluster diagnostic information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diagnosisInterval|[Interval](#schemainterval)|false|none|Optional. Time interval in which diagnosis should be carried out on the cluster.|
|job|string|false|none|Optional. DEPRECATED Specifies the job on which diagnosis is to be performed. Format: projects/{project}/regions/{region}/jobs/{job}|
|jobs|[string]|false|none|Optional. Specifies a list of jobs on which diagnosis is to be performed. Format: projects/{project}/regions/{region}/jobs/{job}|
|yarnApplicationId|string|false|none|Optional. DEPRECATED Specifies the yarn application on which diagnosis is to be performed.|
|yarnApplicationIds|[string]|false|none|Optional. Specifies a list of yarn applications on which diagnosis is to be performed.|

<h2 id="tocS_DiagnoseClusterResults">DiagnoseClusterResults</h2>
<!-- backwards compatibility -->
<a id="schemadiagnoseclusterresults"></a>
<a id="schema_DiagnoseClusterResults"></a>
<a id="tocSdiagnoseclusterresults"></a>
<a id="tocsdiagnoseclusterresults"></a>

```json
{
  "outputUri": "string"
}
```

The location of diagnostic output.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputUri|string|false|read-only|Output only. The Cloud Storage URI of the diagnostic output. The output report is a plain text file with a summary of collected diagnostics.|

<h2 id="tocS_DiskConfig">DiskConfig</h2>
<!-- backwards compatibility -->
<a id="schemadiskconfig"></a>
<a id="schema_DiskConfig"></a>
<a id="tocSdiskconfig"></a>
<a id="tocsdiskconfig"></a>

```json
{
  "bootDiskSizeGb": 0,
  "bootDiskType": "string",
  "localSsdInterface": "string",
  "numLocalSsds": 0
}
```

Specifies the config of disk options for a group of VM instances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bootDiskSizeGb|integer(int32)|false|none|Optional. Size in GB of the boot disk (default is 500GB).|
|bootDiskType|string|false|none|Optional. Type of the boot disk (default is "pd-standard"). Valid values: "pd-balanced" (Persistent Disk Balanced Solid State Drive), "pd-ssd" (Persistent Disk Solid State Drive), or "pd-standard" (Persistent Disk Hard Disk Drive). See Disk types (https://cloud.google.com/compute/docs/disks#disk-types).|
|localSsdInterface|string|false|none|Optional. Interface type of local SSDs (default is "scsi"). Valid values: "scsi" (Small Computer System Interface), "nvme" (Non-Volatile Memory Express). See local SSD performance (https://cloud.google.com/compute/docs/disks/local-ssd#performance).|
|numLocalSsds|integer(int32)|false|none|Optional. Number of attached SSDs, from 0 to 8 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and HDFS (https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.Note: Local SSD options may vary by machine type and number of vCPUs selected.|

<h2 id="tocS_DriverSchedulingConfig">DriverSchedulingConfig</h2>
<!-- backwards compatibility -->
<a id="schemadriverschedulingconfig"></a>
<a id="schema_DriverSchedulingConfig"></a>
<a id="tocSdriverschedulingconfig"></a>
<a id="tocsdriverschedulingconfig"></a>

```json
{
  "memoryMb": 0,
  "vcores": 0
}
```

Driver scheduling configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memoryMb|integer(int32)|false|none|Required. The amount of memory in MB the driver is requesting.|
|vcores|integer(int32)|false|none|Required. The number of vCPUs the driver is requesting.|

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

<h2 id="tocS_EncryptionConfig">EncryptionConfig</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionconfig"></a>
<a id="schema_EncryptionConfig"></a>
<a id="tocSencryptionconfig"></a>
<a id="tocsencryptionconfig"></a>

```json
{
  "gcePdKmsKeyName": "string",
  "kmsKey": "string"
}
```

Encryption settings for the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcePdKmsKeyName|string|false|none|Optional. The Cloud KMS key name to use for PD disk encryption for all instances in the cluster.|
|kmsKey|string|false|none|Optional. The Cloud KMS key name to use for encrypting customer core content and cluster PD disk for all instances in the cluster.|

<h2 id="tocS_EndpointConfig">EndpointConfig</h2>
<!-- backwards compatibility -->
<a id="schemaendpointconfig"></a>
<a id="schema_EndpointConfig"></a>
<a id="tocSendpointconfig"></a>
<a id="tocsendpointconfig"></a>

```json
{
  "enableHttpPortAccess": true,
  "httpPorts": {
    "property1": "string",
    "property2": "string"
  }
}
```

Endpoint config for this cluster

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableHttpPortAccess|boolean|false|none|Optional. If true, enable http access to specific ports on the cluster from external sources. Defaults to false.|
|httpPorts|object|false|read-only|Output only. The map of port descriptions to URLs. Will only be populated if enable_http_port_access is true.|

<h2 id="tocS_EnvironmentConfig">EnvironmentConfig</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentconfig"></a>
<a id="schema_EnvironmentConfig"></a>
<a id="tocSenvironmentconfig"></a>
<a id="tocsenvironmentconfig"></a>

```json
{
  "executionConfig": {
    "idleTtl": "string",
    "kmsKey": "string",
    "networkTags": [
      "string"
    ],
    "networkUri": "string",
    "serviceAccount": "string",
    "stagingBucket": "string",
    "subnetworkUri": "string",
    "ttl": "string"
  },
  "peripheralsConfig": {
    "metastoreService": "string",
    "sparkHistoryServerConfig": {
      "dataprocCluster": "string"
    }
  }
}
```

Environment configuration for a workload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executionConfig|[ExecutionConfig](#schemaexecutionconfig)|false|none|Optional. Execution configuration for a workload.|
|peripheralsConfig|[PeripheralsConfig](#schemaperipheralsconfig)|false|none|Optional. Peripherals configuration that workload has access to.|

<h2 id="tocS_ExecutionConfig">ExecutionConfig</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionconfig"></a>
<a id="schema_ExecutionConfig"></a>
<a id="tocSexecutionconfig"></a>
<a id="tocsexecutionconfig"></a>

```json
{
  "idleTtl": "string",
  "kmsKey": "string",
  "networkTags": [
    "string"
  ],
  "networkUri": "string",
  "serviceAccount": "string",
  "stagingBucket": "string",
  "subnetworkUri": "string",
  "ttl": "string"
}
```

Execution configuration for a workload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idleTtl|string(google-duration)|false|none|Optional. The duration to keep the session alive while it's idling. Exceeding this threshold causes the session to terminate. This field cannot be set on a batch workload. Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). Defaults to 4 hours if not set. If both ttl and idle_ttl are specified, the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idle_ttl or when ttl has been exceed, whichever occurs first.|
|kmsKey|string|false|none|Optional. The Cloud KMS key to use for encryption.|
|networkTags|[string]|false|none|Optional. Tags used for network traffic control.|
|networkUri|string|false|none|Optional. Network URI to connect workload to.|
|serviceAccount|string|false|none|Optional. Service account that used to execute workload.|
|stagingBucket|string|false|none|Optional. A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location according to the region where your workload is running, and then create and manage project-level, per-location staging and temporary buckets. This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.|
|subnetworkUri|string|false|none|Optional. Subnetwork URI to connect workload to.|
|ttl|string(google-duration)|false|none|Optional. The duration after which the workload will be terminated. When the workload exceeds this duration, it will be unconditionally terminated without waiting for ongoing work to finish. If ttl is not specified for a batch workload, the workload will be allowed to run until it exits naturally (or runs forever without exiting). If ttl is not specified for an interactive session, it defaults to 24h. Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). If both ttl and idle_ttl are specified (for an interactive session), the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idle_ttl or when ttl has been exceeded, whichever occurs first.|

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

Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec.Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.|
|expression|string|false|none|Textual representation of an expression in Common Expression Language syntax.|
|location|string|false|none|Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.|
|title|string|false|none|Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.|

<h2 id="tocS_GceClusterConfig">GceClusterConfig</h2>
<!-- backwards compatibility -->
<a id="schemagceclusterconfig"></a>
<a id="schema_GceClusterConfig"></a>
<a id="tocSgceclusterconfig"></a>
<a id="tocsgceclusterconfig"></a>

```json
{
  "confidentialInstanceConfig": {
    "enableConfidentialCompute": true
  },
  "internalIpOnly": true,
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "networkUri": "string",
  "nodeGroupAffinity": {
    "nodeGroupUri": "string"
  },
  "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
  "reservationAffinity": {
    "consumeReservationType": "TYPE_UNSPECIFIED",
    "key": "string",
    "values": [
      "string"
    ]
  },
  "serviceAccount": "string",
  "serviceAccountScopes": [
    "string"
  ],
  "shieldedInstanceConfig": {
    "enableIntegrityMonitoring": true,
    "enableSecureBoot": true,
    "enableVtpm": true
  },
  "subnetworkUri": "string",
  "tags": [
    "string"
  ],
  "zoneUri": "string"
}
```

Common config settings for resources of Compute Engine cluster instances, applicable to all instances in the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidentialInstanceConfig|[ConfidentialInstanceConfig](#schemaconfidentialinstanceconfig)|false|none|Optional. Confidential Instance Config for clusters using Confidential VMs (https://cloud.google.com/compute/confidential-vm/docs).|
|internalIpOnly|boolean|false|none|Optional. If true, all instances in the cluster will only have internal IP addresses. By default, clusters are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each instance. This internal_ip_only restriction can only be enabled for subnetwork enabled networks, and all off-cluster dependencies must be configured to be accessible without external IP addresses.|
|metadata|object|false|none|The Compute Engine metadata entries to add to all instances (see Project and instance metadata (https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).|
|networkUri|string|false|none|Optional. The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork_uri. If neither network_uri nor subnetwork_uri is specified, the "default" network of the project is used, if it exists. Cannot be a "Custom Subnet Network" (see Using Subnetworks (https://cloud.google.com/compute/docs/subnetworks) for more information).A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/global/networks/default projects/[project_id]/global/networks/default default|
|nodeGroupAffinity|[NodeGroupAffinity](#schemanodegroupaffinity)|false|none|Optional. Node Group Affinity for sole-tenant clusters.|
|privateIpv6GoogleAccess|string|false|none|Optional. The type of IPv6 access for a cluster.|
|reservationAffinity|[ReservationAffinity](#schemareservationaffinity)|false|none|Optional. Reservation Affinity for consuming Zonal reservation.|
|serviceAccount|string|false|none|Optional. The Dataproc service account (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/service-accounts#service_accounts_in_dataproc) (also see VM Data Plane identity (https://cloud.google.com/dataproc/docs/concepts/iam/dataproc-principals#vm_service_account_data_plane_identity)) used by Dataproc cluster VM instances to access Google Cloud Platform services.If not specified, the Compute Engine default service account (https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used.|
|serviceAccountScopes|[string]|false|none|Optional. The URIs of service account scopes to be included in Compute Engine instances. The following base set of scopes is always included: https://www.googleapis.com/auth/cloud.useraccounts.readonly https://www.googleapis.com/auth/devstorage.read_write https://www.googleapis.com/auth/logging.writeIf no scopes are specified, the following defaults are also provided: https://www.googleapis.com/auth/bigquery https://www.googleapis.com/auth/bigtable.admin.table https://www.googleapis.com/auth/bigtable.data https://www.googleapis.com/auth/devstorage.full_control|
|shieldedInstanceConfig|[ShieldedInstanceConfig](#schemashieldedinstanceconfig)|false|none|Optional. Shielded Instance Config for clusters using Compute Engine Shielded VMs (https://cloud.google.com/security/shielded-cloud/shielded-vm).|
|subnetworkUri|string|false|none|Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network_uri.A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/regions/[region]/subnetworks/sub0 projects/[project_id]/regions/[region]/subnetworks/sub0 sub0|
|tags|[string]|false|none|The Compute Engine tags to add to all instances (see Tagging instances (https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).|
|zoneUri|string|false|none|Optional. The Compute Engine zone where the Dataproc cluster will be located. If omitted, the service will pick a zone in the cluster's Compute Engine region. On a get request, zone will always be present.A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone] projects/[project_id]/zones/[zone] [zone]|

#### Enumerated Values

|Property|Value|
|---|---|
|privateIpv6GoogleAccess|PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED|
|privateIpv6GoogleAccess|INHERIT_FROM_SUBNETWORK|
|privateIpv6GoogleAccess|OUTBOUND|
|privateIpv6GoogleAccess|BIDIRECTIONAL|

<h2 id="tocS_GetIamPolicyRequest">GetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetiampolicyrequest"></a>
<a id="schema_GetIamPolicyRequest"></a>
<a id="tocSgetiampolicyrequest"></a>
<a id="tocsgetiampolicyrequest"></a>

```json
{
  "options": {
    "requestedPolicyVersion": 0
  }
}
```

Request message for GetIamPolicy method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|options|[GetPolicyOptions](#schemagetpolicyoptions)|false|none|OPTIONAL: A GetPolicyOptions object for specifying options to GetIamPolicy.|

<h2 id="tocS_GetPolicyOptions">GetPolicyOptions</h2>
<!-- backwards compatibility -->
<a id="schemagetpolicyoptions"></a>
<a id="schema_GetPolicyOptions"></a>
<a id="tocSgetpolicyoptions"></a>
<a id="tocsgetpolicyoptions"></a>

```json
{
  "requestedPolicyVersion": 0
}
```

Encapsulates settings provided to GetIamPolicy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestedPolicyVersion|integer(int32)|false|none|Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_GkeClusterConfig">GkeClusterConfig</h2>
<!-- backwards compatibility -->
<a id="schemagkeclusterconfig"></a>
<a id="schema_GkeClusterConfig"></a>
<a id="tocSgkeclusterconfig"></a>
<a id="tocsgkeclusterconfig"></a>

```json
{
  "gkeClusterTarget": "string",
  "namespacedGkeDeploymentTarget": {
    "clusterNamespace": "string",
    "targetGkeCluster": "string"
  },
  "nodePoolTarget": [
    {
      "nodePool": "string",
      "nodePoolConfig": {
        "autoscaling": {
          "maxNodeCount": 0,
          "minNodeCount": 0
        },
        "config": {
          "accelerators": [
            {
              "acceleratorCount": "string",
              "acceleratorType": "string",
              "gpuPartitionSize": "string"
            }
          ],
          "bootDiskKmsKey": "string",
          "localSsdCount": 0,
          "machineType": "string",
          "minCpuPlatform": "string",
          "preemptible": true,
          "spot": true
        },
        "locations": [
          "string"
        ]
      },
      "roles": [
        "ROLE_UNSPECIFIED"
      ]
    }
  ]
}
```

The cluster's GKE config.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gkeClusterTarget|string|false|none|Optional. A target GKE cluster to deploy to. It must be in the same project and region as the Dataproc cluster (the GKE cluster can be zonal or regional). Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}'|
|namespacedGkeDeploymentTarget|[NamespacedGkeDeploymentTarget](#schemanamespacedgkedeploymenttarget)|false|none|Optional. Deprecated. Use gkeClusterTarget. Used only for the deprecated beta. A target for the deployment.|
|nodePoolTarget|[[GkeNodePoolTarget](#schemagkenodepooltarget)]|false|none|Optional. GKE node pools where workloads will be scheduled. At least one node pool must be assigned the DEFAULT GkeNodePoolTarget.Role. If a GkeNodePoolTarget is not specified, Dataproc constructs a DEFAULT GkeNodePoolTarget. Each role can be given to only one GkeNodePoolTarget. All node pools must have the same location settings.|

<h2 id="tocS_GkeNodeConfig">GkeNodeConfig</h2>
<!-- backwards compatibility -->
<a id="schemagkenodeconfig"></a>
<a id="schema_GkeNodeConfig"></a>
<a id="tocSgkenodeconfig"></a>
<a id="tocsgkenodeconfig"></a>

```json
{
  "accelerators": [
    {
      "acceleratorCount": "string",
      "acceleratorType": "string",
      "gpuPartitionSize": "string"
    }
  ],
  "bootDiskKmsKey": "string",
  "localSsdCount": 0,
  "machineType": "string",
  "minCpuPlatform": "string",
  "preemptible": true,
  "spot": true
}
```

Parameters that describe cluster nodes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accelerators|[[GkeNodePoolAcceleratorConfig](#schemagkenodepoolacceleratorconfig)]|false|none|Optional. A list of hardware accelerators (https://cloud.google.com/compute/docs/gpus) to attach to each node.|
|bootDiskKmsKey|string|false|none|Optional. The Customer Managed Encryption Key (CMEK) (https://cloud.google.com/kubernetes-engine/docs/how-to/using-cmek) used to encrypt the boot disk attached to each node in the node pool. Specify the key using the following format: projects/KEY_PROJECT_ID/locations/LOCATION /keyRings/RING_NAME/cryptoKeys/KEY_NAME.|
|localSsdCount|integer(int32)|false|none|Optional. The number of local SSD disks to attach to the node, which is limited by the maximum number of disks allowable per zone (see Adding Local SSDs (https://cloud.google.com/compute/docs/disks/local-ssd)).|
|machineType|string|false|none|Optional. The name of a Compute Engine machine type (https://cloud.google.com/compute/docs/machine-types).|
|minCpuPlatform|string|false|none|Optional. Minimum CPU platform (https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform) to be used by this instance. The instance may be scheduled on the specified or a newer CPU platform. Specify the friendly names of CPU platforms, such as "Intel Haswell"` or Intel Sandy Bridge".|
|preemptible|boolean|false|none|Optional. Whether the nodes are created as legacy preemptible VM instances (https://cloud.google.com/compute/docs/instances/preemptible). Also see Spot VMs, preemptible VM instances without a maximum lifetime. Legacy and Spot preemptible nodes cannot be used in a node pool with the CONTROLLER role or in the DEFAULT node pool if the CONTROLLER role is not assigned (the DEFAULT node pool will assume the CONTROLLER role).|
|spot|boolean|false|none|Optional. Whether the nodes are created as Spot VM instances (https://cloud.google.com/compute/docs/instances/spot). Spot VMs are the latest update to legacy preemptible VMs. Spot VMs do not have a maximum lifetime. Legacy and Spot preemptible nodes cannot be used in a node pool with the CONTROLLER role or in the DEFAULT node pool if the CONTROLLER role is not assigned (the DEFAULT node pool will assume the CONTROLLER role).|

<h2 id="tocS_GkeNodePoolAcceleratorConfig">GkeNodePoolAcceleratorConfig</h2>
<!-- backwards compatibility -->
<a id="schemagkenodepoolacceleratorconfig"></a>
<a id="schema_GkeNodePoolAcceleratorConfig"></a>
<a id="tocSgkenodepoolacceleratorconfig"></a>
<a id="tocsgkenodepoolacceleratorconfig"></a>

```json
{
  "acceleratorCount": "string",
  "acceleratorType": "string",
  "gpuPartitionSize": "string"
}
```

A GkeNodeConfigAcceleratorConfig represents a Hardware Accelerator request for a node pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceleratorCount|string(int64)|false|none|The number of accelerator cards exposed to an instance.|
|acceleratorType|string|false|none|The accelerator type resource namename (see GPUs on Compute Engine).|
|gpuPartitionSize|string|false|none|Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning).|

<h2 id="tocS_GkeNodePoolAutoscalingConfig">GkeNodePoolAutoscalingConfig</h2>
<!-- backwards compatibility -->
<a id="schemagkenodepoolautoscalingconfig"></a>
<a id="schema_GkeNodePoolAutoscalingConfig"></a>
<a id="tocSgkenodepoolautoscalingconfig"></a>
<a id="tocsgkenodepoolautoscalingconfig"></a>

```json
{
  "maxNodeCount": 0,
  "minNodeCount": 0
}
```

GkeNodePoolAutoscaling contains information the cluster autoscaler needs to adjust the size of the node pool to the current cluster usage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxNodeCount|integer(int32)|false|none|The maximum number of nodes in the node pool. Must be >= min_node_count, and must be > 0. Note: Quota must be sufficient to scale up the cluster.|
|minNodeCount|integer(int32)|false|none|The minimum number of nodes in the node pool. Must be >= 0 and <= max_node_count.|

<h2 id="tocS_GkeNodePoolConfig">GkeNodePoolConfig</h2>
<!-- backwards compatibility -->
<a id="schemagkenodepoolconfig"></a>
<a id="schema_GkeNodePoolConfig"></a>
<a id="tocSgkenodepoolconfig"></a>
<a id="tocsgkenodepoolconfig"></a>

```json
{
  "autoscaling": {
    "maxNodeCount": 0,
    "minNodeCount": 0
  },
  "config": {
    "accelerators": [
      {
        "acceleratorCount": "string",
        "acceleratorType": "string",
        "gpuPartitionSize": "string"
      }
    ],
    "bootDiskKmsKey": "string",
    "localSsdCount": 0,
    "machineType": "string",
    "minCpuPlatform": "string",
    "preemptible": true,
    "spot": true
  },
  "locations": [
    "string"
  ]
}
```

The configuration of a GKE node pool used by a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/concepts/jobs/dataproc-gke#create-a-dataproc-on-gke-cluster).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoscaling|[GkeNodePoolAutoscalingConfig](#schemagkenodepoolautoscalingconfig)|false|none|Optional. The autoscaler configuration for this node pool. The autoscaler is enabled only when a valid configuration is present.|
|config|[GkeNodeConfig](#schemagkenodeconfig)|false|none|Optional. The node pool configuration.|
|locations|[string]|false|none|Optional. The list of Compute Engine zones (https://cloud.google.com/compute/docs/zones#available) where node pool nodes associated with a Dataproc on GKE virtual cluster will be located.Note: All node pools associated with a virtual cluster must be located in the same region as the virtual cluster, and they must be located in the same zone within that region.If a location is not specified during node pool creation, Dataproc on GKE will choose the zone.|

<h2 id="tocS_GkeNodePoolTarget">GkeNodePoolTarget</h2>
<!-- backwards compatibility -->
<a id="schemagkenodepooltarget"></a>
<a id="schema_GkeNodePoolTarget"></a>
<a id="tocSgkenodepooltarget"></a>
<a id="tocsgkenodepooltarget"></a>

```json
{
  "nodePool": "string",
  "nodePoolConfig": {
    "autoscaling": {
      "maxNodeCount": 0,
      "minNodeCount": 0
    },
    "config": {
      "accelerators": [
        {
          "acceleratorCount": "string",
          "acceleratorType": "string",
          "gpuPartitionSize": "string"
        }
      ],
      "bootDiskKmsKey": "string",
      "localSsdCount": 0,
      "machineType": "string",
      "minCpuPlatform": "string",
      "preemptible": true,
      "spot": true
    },
    "locations": [
      "string"
    ]
  },
  "roles": [
    "ROLE_UNSPECIFIED"
  ]
}
```

GKE node pools that Dataproc workloads run on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodePool|string|false|none|Required. The target GKE node pool. Format: 'projects/{project}/locations/{location}/clusters/{cluster}/nodePools/{node_pool}'|
|nodePoolConfig|[GkeNodePoolConfig](#schemagkenodepoolconfig)|false|none|Input only. The configuration for the GKE node pool.If specified, Dataproc attempts to create a node pool with the specified shape. If one with the same name already exists, it is verified against all specified fields. If a field differs, the virtual cluster creation will fail.If omitted, any node pool with the specified name is used. If a node pool with the specified name does not exist, Dataproc create a node pool with default values.This is an input only field. It will not be returned by the API.|
|roles|[string]|false|none|Required. The roles associated with the GKE node pool.|

#### Enumerated Values

|Property|Value|
|---|---|
|roles|ROLE_UNSPECIFIED|
|roles|DEFAULT|
|roles|CONTROLLER|
|roles|SPARK_DRIVER|
|roles|SPARK_EXECUTOR|

<h2 id="tocS_HadoopJob">HadoopJob</h2>
<!-- backwards compatibility -->
<a id="schemahadoopjob"></a>
<a id="schema_HadoopJob"></a>
<a id="tocShadoopjob"></a>
<a id="tocshadoopjob"></a>

```json
{
  "archiveUris": [
    "string"
  ],
  "args": [
    "string"
  ],
  "fileUris": [
    "string"
  ],
  "jarFileUris": [
    "string"
  ],
  "loggingConfig": {
    "driverLogLevels": {
      "property1": "LEVEL_UNSPECIFIED",
      "property2": "LEVEL_UNSPECIFIED"
    }
  },
  "mainClass": "string",
  "mainJarFileUri": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  }
}
```

A Dataproc job for running Apache Hadoop MapReduce (https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) jobs on Apache Hadoop YARN (https://hadoop.apache.org/docs/r2.7.1/hadoop-yarn/hadoop-yarn-site/YARN.html).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archiveUris|[string]|false|none|Optional. HCFS URIs of archives to be extracted in the working directory of Hadoop drivers and tasks. Supported file types: .jar, .tar, .tar.gz, .tgz, or .zip.|
|args|[string]|false|none|Optional. The arguments to pass to the driver. Do not include arguments, such as -libjars or -Dfoo=bar, that can be set as job properties, since a collision may occur that causes an incorrect job submission.|
|fileUris|[string]|false|none|Optional. HCFS (Hadoop Compatible Filesystem) URIs of files to be copied to the working directory of Hadoop drivers and distributed tasks. Useful for naively parallel tasks.|
|jarFileUris|[string]|false|none|Optional. Jar file URIs to add to the CLASSPATHs of the Hadoop driver and tasks.|
|loggingConfig|[LoggingConfig](#schemaloggingconfig)|false|none|Optional. The runtime log config for job execution.|
|mainClass|string|false|none|The name of the driver's main class. The jar file containing the class must be in the default CLASSPATH or specified in jar_file_uris.|
|mainJarFileUri|string|false|none|The HCFS URI of the jar file containing the main class. Examples: 'gs://foo-bucket/analytics-binaries/extract-useful-metrics-mr.jar' 'hdfs:/tmp/test-samples/custom-wordcount.jar' 'file:///home/usr/lib/hadoop-mapreduce/hadoop-mapreduce-examples.jar'|
|properties|object|false|none|Optional. A mapping of property names to values, used to configure Hadoop. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site and classes in user code.|

<h2 id="tocS_HiveJob">HiveJob</h2>
<!-- backwards compatibility -->
<a id="schemahivejob"></a>
<a id="schema_HiveJob"></a>
<a id="tocShivejob"></a>
<a id="tocshivejob"></a>

```json
{
  "continueOnFailure": true,
  "jarFileUris": [
    "string"
  ],
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "queryFileUri": "string",
  "queryList": {
    "queries": [
      "string"
    ]
  },
  "scriptVariables": {
    "property1": "string",
    "property2": "string"
  }
}
```

A Dataproc job for running Apache Hive (https://hive.apache.org/) queries on YARN.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|continueOnFailure|boolean|false|none|Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries.|
|jarFileUris|[string]|false|none|Optional. HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. Can contain Hive SerDes and UDFs.|
|properties|object|false|none|Optional. A mapping of property names and values, used to configure Hive. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code.|
|queryFileUri|string|false|none|The HCFS URI of the script that contains Hive queries.|
|queryList|[QueryList](#schemaquerylist)|false|none|A list of queries.|
|scriptVariables|object|false|none|Optional. Mapping of query variable names to values (equivalent to the Hive command: SET name="value";).|

<h2 id="tocS_IdentityConfig">IdentityConfig</h2>
<!-- backwards compatibility -->
<a id="schemaidentityconfig"></a>
<a id="schema_IdentityConfig"></a>
<a id="tocSidentityconfig"></a>
<a id="tocsidentityconfig"></a>

```json
{
  "userServiceAccountMapping": {
    "property1": "string",
    "property2": "string"
  }
}
```

Identity related configuration, including service account based secure multi-tenancy user mappings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userServiceAccountMapping|object|false|none|Required. Map of user to service account.|

<h2 id="tocS_InjectCredentialsRequest">InjectCredentialsRequest</h2>
<!-- backwards compatibility -->
<a id="schemainjectcredentialsrequest"></a>
<a id="schema_InjectCredentialsRequest"></a>
<a id="tocSinjectcredentialsrequest"></a>
<a id="tocsinjectcredentialsrequest"></a>

```json
{
  "clusterUuid": "string",
  "credentialsCiphertext": "string"
}
```

A request to inject credentials into a cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterUuid|string|false|none|Required. The cluster UUID.|
|credentialsCiphertext|string|false|none|Required. The encrypted credentials being injected in to the cluster.The client is responsible for encrypting the credentials in a way that is supported by the cluster.A wrapped value is used here so that the actual contents of the encrypted credentials are not written to audit logs.|

<h2 id="tocS_InstanceGroupAutoscalingPolicyConfig">InstanceGroupAutoscalingPolicyConfig</h2>
<!-- backwards compatibility -->
<a id="schemainstancegroupautoscalingpolicyconfig"></a>
<a id="schema_InstanceGroupAutoscalingPolicyConfig"></a>
<a id="tocSinstancegroupautoscalingpolicyconfig"></a>
<a id="tocsinstancegroupautoscalingpolicyconfig"></a>

```json
{
  "maxInstances": 0,
  "minInstances": 0,
  "weight": 0
}
```

Configuration for the size bounds of an instance group, including its proportional size to other groups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxInstances|integer(int32)|false|none|Required. Maximum number of instances for this group. Required for primary workers. Note that by default, clusters will not use secondary workers. Required for secondary workers if the minimum secondary instances is set.Primary workers - Bounds: [min_instances, ). Secondary workers - Bounds: [min_instances, ). Default: 0.|
|minInstances|integer(int32)|false|none|Optional. Minimum number of instances for this group.Primary workers - Bounds: 2, max_instances. Default: 2. Secondary workers - Bounds: 0, max_instances. Default: 0.|
|weight|integer(int32)|false|none|Optional. Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group. For example, if primary workers have weight 2, and secondary workers have weight 1, the cluster will have approximately 2 primary workers for each secondary worker.The cluster may not reach the specified balance if constrained by min/max bounds or other autoscaling settings. For example, if max_instances for secondary workers is 0, then only primary workers will be added. The cluster can also be out of balance when created.If weight is not set on any instance group, the cluster will default to equal weight for all groups: the cluster will attempt to maintain an equal number of workers in each group within the configured size bounds for each group. If weight is set for one group only, the cluster will default to zero weight on the unset group. For example if weight is set only on primary workers, the cluster will use primary workers only and no secondary workers.|

<h2 id="tocS_InstanceGroupConfig">InstanceGroupConfig</h2>
<!-- backwards compatibility -->
<a id="schemainstancegroupconfig"></a>
<a id="schema_InstanceGroupConfig"></a>
<a id="tocSinstancegroupconfig"></a>
<a id="tocsinstancegroupconfig"></a>

```json
{
  "accelerators": [
    {
      "acceleratorCount": 0,
      "acceleratorTypeUri": "string"
    }
  ],
  "diskConfig": {
    "bootDiskSizeGb": 0,
    "bootDiskType": "string",
    "localSsdInterface": "string",
    "numLocalSsds": 0
  },
  "imageUri": "string",
  "instanceNames": [
    "string"
  ],
  "instanceReferences": [
    {
      "instanceId": "string",
      "instanceName": "string",
      "publicEciesKey": "string",
      "publicKey": "string"
    }
  ],
  "isPreemptible": true,
  "machineTypeUri": "string",
  "managedGroupConfig": {
    "instanceGroupManagerName": "string",
    "instanceTemplateName": "string"
  },
  "minCpuPlatform": "string",
  "numInstances": 0,
  "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
}
```

The config settings for Compute Engine resources in an instance group, such as a master or worker group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accelerators|[[AcceleratorConfig](#schemaacceleratorconfig)]|false|none|Optional. The Compute Engine accelerator configuration for these instances.|
|diskConfig|[DiskConfig](#schemadiskconfig)|false|none|Optional. Disk option config settings.|
|imageUri|string|false|none|Optional. The Compute Engine image resource used for cluster instances.The URI can represent an image or image family.Image examples: https://www.googleapis.com/compute/v1/projects/[project_id]/global/images/[image-id] projects/[project_id]/global/images/[image-id] image-idImage family examples. Dataproc will use the most recent image from the family: https://www.googleapis.com/compute/v1/projects/[project_id]/global/images/family/[custom-image-family-name] projects/[project_id]/global/images/family/[custom-image-family-name]If the URI is unspecified, it will be inferred from SoftwareConfig.image_version or the system default.|
|instanceNames|[string]|false|read-only|Output only. The list of instance names. Dataproc derives the names from cluster_name, num_instances, and the instance group.|
|instanceReferences|[[InstanceReference](#schemainstancereference)]|false|read-only|Output only. List of references to Compute Engine instances.|
|isPreemptible|boolean|false|read-only|Output only. Specifies that this instance group contains preemptible instances.|
|machineTypeUri|string|false|none|Optional. The Compute Engine machine type used for cluster instances.A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]/machineTypes/n1-standard-2 projects/[project_id]/zones/[zone]/machineTypes/n1-standard-2 n1-standard-2Auto Zone Exception: If you are using the Dataproc Auto Zone Placement (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the machine type resource, for example, n1-standard-2.|
|managedGroupConfig|[ManagedGroupConfig](#schemamanagedgroupconfig)|false|none|Output only. The config for Compute Engine Instance Group Manager that manages this group. This is only used for preemptible instance groups.|
|minCpuPlatform|string|false|none|Optional. Specifies the minimum cpu platform for the Instance Group. See Dataproc -> Minimum CPU Platform (https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu).|
|numInstances|integer(int32)|false|none|Optional. The number of VM instances in the instance group. For HA cluster master_config groups, must be set to 3. For standard cluster master_config groups, must be set to 1.|
|preemptibility|string|false|none|Optional. Specifies the preemptibility of the instance group.The default value for master and worker groups is NON_PREEMPTIBLE. This default cannot be changed.The default value for secondary instances is PREEMPTIBLE.|

#### Enumerated Values

|Property|Value|
|---|---|
|preemptibility|PREEMPTIBILITY_UNSPECIFIED|
|preemptibility|NON_PREEMPTIBLE|
|preemptibility|PREEMPTIBLE|
|preemptibility|SPOT|

<h2 id="tocS_InstanceReference">InstanceReference</h2>
<!-- backwards compatibility -->
<a id="schemainstancereference"></a>
<a id="schema_InstanceReference"></a>
<a id="tocSinstancereference"></a>
<a id="tocsinstancereference"></a>

```json
{
  "instanceId": "string",
  "instanceName": "string",
  "publicEciesKey": "string",
  "publicKey": "string"
}
```

A reference to a Compute Engine instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceId|string|false|none|The unique identifier of the Compute Engine instance.|
|instanceName|string|false|none|The user-friendly name of the Compute Engine instance.|
|publicEciesKey|string|false|none|The public ECIES key used for sharing data with this instance.|
|publicKey|string|false|none|The public RSA key used for sharing data with this instance.|

<h2 id="tocS_InstantiateWorkflowTemplateRequest">InstantiateWorkflowTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemainstantiateworkflowtemplaterequest"></a>
<a id="schema_InstantiateWorkflowTemplateRequest"></a>
<a id="tocSinstantiateworkflowtemplaterequest"></a>
<a id="tocsinstantiateworkflowtemplaterequest"></a>

```json
{
  "parameters": {
    "property1": "string",
    "property2": "string"
  },
  "requestId": "string",
  "version": 0
}
```

A request to instantiate a workflow template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parameters|object|false|none|Optional. Map from parameter names to values that should be used for those parameters. Values may not exceed 1000 characters.|
|requestId|string|false|none|Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.|
|version|integer(int32)|false|none|Optional. The version of workflow template to instantiate. If specified, the workflow will be instantiated only if the current version of the workflow template has the supplied version.This option cannot be used to instantiate a previous version of workflow template.|

<h2 id="tocS_Interval">Interval</h2>
<!-- backwards compatibility -->
<a id="schemainterval"></a>
<a id="schema_Interval"></a>
<a id="tocSinterval"></a>
<a id="tocsinterval"></a>

```json
{
  "endTime": "string",
  "startTime": "string"
}
```

Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive).The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|Optional. Exclusive end of the interval.If specified, a Timestamp matching this interval will have to be before the end.|
|startTime|string(google-datetime)|false|none|Optional. Inclusive start of the interval.If specified, a Timestamp matching this interval will have to be the same or after the start.|

<h2 id="tocS_Job">Job</h2>
<!-- backwards compatibility -->
<a id="schemajob"></a>
<a id="schema_Job"></a>
<a id="tocSjob"></a>
<a id="tocsjob"></a>

```json
{
  "done": true,
  "driverControlFilesUri": "string",
  "driverOutputResourceUri": "string",
  "driverSchedulingConfig": {
    "memoryMb": 0,
    "vcores": 0
  },
  "hadoopJob": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "mainClass": "string",
    "mainJarFileUri": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "hiveJob": {
    "continueOnFailure": true,
    "jarFileUris": [
      "string"
    ],
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    },
    "scriptVariables": {
      "property1": "string",
      "property2": "string"
    }
  },
  "jobUuid": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "pigJob": {
    "continueOnFailure": true,
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    },
    "scriptVariables": {
      "property1": "string",
      "property2": "string"
    }
  },
  "placement": {
    "clusterLabels": {
      "property1": "string",
      "property2": "string"
    },
    "clusterName": "string",
    "clusterUuid": "string"
  },
  "prestoJob": {
    "clientTags": [
      "string"
    ],
    "continueOnFailure": true,
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "outputFormat": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    }
  },
  "pysparkJob": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "mainPythonFileUri": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "pythonFileUris": [
      "string"
    ]
  },
  "reference": {
    "jobId": "string",
    "projectId": "string"
  },
  "scheduling": {
    "maxFailuresPerHour": 0,
    "maxFailuresTotal": 0
  },
  "sparkJob": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "mainClass": "string",
    "mainJarFileUri": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "sparkRJob": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "mainRFileUri": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "sparkSqlJob": {
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    },
    "scriptVariables": {
      "property1": "string",
      "property2": "string"
    }
  },
  "status": {
    "details": "string",
    "state": "STATE_UNSPECIFIED",
    "stateStartTime": "string",
    "substate": "UNSPECIFIED"
  },
  "statusHistory": [
    {
      "details": "string",
      "state": "STATE_UNSPECIFIED",
      "stateStartTime": "string",
      "substate": "UNSPECIFIED"
    }
  ],
  "trinoJob": {
    "clientTags": [
      "string"
    ],
    "continueOnFailure": true,
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "outputFormat": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    }
  },
  "yarnApplications": [
    {
      "name": "string",
      "progress": 0,
      "state": "STATE_UNSPECIFIED",
      "trackingUrl": "string"
    }
  ]
}
```

A Dataproc job resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|done|boolean|false|read-only|Output only. Indicates whether the job is completed. If the value is false, the job is still in progress. If true, the job is completed, and status.state field will indicate if it was successful, failed, or cancelled.|
|driverControlFilesUri|string|false|read-only|Output only. If present, the location of miscellaneous control files which may be used as part of job setup and handling. If not present, control files may be placed in the same location as driver_output_uri.|
|driverOutputResourceUri|string|false|read-only|Output only. A URI pointing to the location of the stdout of the job's driver program.|
|driverSchedulingConfig|[DriverSchedulingConfig](#schemadriverschedulingconfig)|false|none|Optional. Driver scheduling configuration.|
|hadoopJob|[HadoopJob](#schemahadoopjob)|false|none|Optional. Job is a Hadoop job.|
|hiveJob|[HiveJob](#schemahivejob)|false|none|Optional. Job is a Hive job.|
|jobUuid|string|false|read-only|Output only. A UUID that uniquely identifies a job within the project over time. This is in contrast to a user-settable reference.job_id that may be reused over time.|
|labels|object|false|none|Optional. The labels to associate with this job. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a job.|
|pigJob|[PigJob](#schemapigjob)|false|none|Optional. Job is a Pig job.|
|placement|[JobPlacement](#schemajobplacement)|false|none|Required. Job information, including how, when, and where to run the job.|
|prestoJob|[PrestoJob](#schemaprestojob)|false|none|Optional. Job is a Presto job.|
|pysparkJob|[PySparkJob](#schemapysparkjob)|false|none|Optional. Job is a PySpark job.|
|reference|[JobReference](#schemajobreference)|false|none|Optional. The fully qualified reference to the job, which can be used to obtain the equivalent REST path of the job resource. If this property is not specified when a job is created, the server generates a job_id.|
|scheduling|[JobScheduling](#schemajobscheduling)|false|none|Optional. Job scheduling configuration.|
|sparkJob|[SparkJob](#schemasparkjob)|false|none|Optional. Job is a Spark job.|
|sparkRJob|[SparkRJob](#schemasparkrjob)|false|none|Optional. Job is a SparkR job.|
|sparkSqlJob|[SparkSqlJob](#schemasparksqljob)|false|none|Optional. Job is a SparkSql job.|
|status|[JobStatus](#schemajobstatus)|false|none|Output only. The job status. Additional application-specific status information may be contained in the type_job and yarn_applications fields.|
|statusHistory|[[JobStatus](#schemajobstatus)]|false|read-only|Output only. The previous job status.|
|trinoJob|[TrinoJob](#schematrinojob)|false|none|Optional. Job is a Trino job.|
|yarnApplications|[[YarnApplication](#schemayarnapplication)]|false|read-only|Output only. The collection of YARN applications spun up by this job.Beta Feature: This report is available for testing purposes only. It may be changed before final release.|

<h2 id="tocS_JobMetadata">JobMetadata</h2>
<!-- backwards compatibility -->
<a id="schemajobmetadata"></a>
<a id="schema_JobMetadata"></a>
<a id="tocSjobmetadata"></a>
<a id="tocsjobmetadata"></a>

```json
{
  "jobId": "string",
  "operationType": "string",
  "startTime": "string",
  "status": {
    "details": "string",
    "state": "STATE_UNSPECIFIED",
    "stateStartTime": "string",
    "substate": "UNSPECIFIED"
  }
}
```

Job Operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|string|false|read-only|Output only. The job id.|
|operationType|string|false|read-only|Output only. Operation type.|
|startTime|string(google-datetime)|false|read-only|Output only. Job submission time.|
|status|[JobStatus](#schemajobstatus)|false|none|Output only. Most recent job status.|

<h2 id="tocS_JobPlacement">JobPlacement</h2>
<!-- backwards compatibility -->
<a id="schemajobplacement"></a>
<a id="schema_JobPlacement"></a>
<a id="tocSjobplacement"></a>
<a id="tocsjobplacement"></a>

```json
{
  "clusterLabels": {
    "property1": "string",
    "property2": "string"
  },
  "clusterName": "string",
  "clusterUuid": "string"
}
```

Dataproc job config.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterLabels|object|false|none|Optional. Cluster labels to identify a cluster where the job will be submitted.|
|clusterName|string|false|none|Required. The name of the cluster where the job will be submitted.|
|clusterUuid|string|false|read-only|Output only. A cluster UUID generated by the Dataproc service when the job is submitted.|

<h2 id="tocS_JobReference">JobReference</h2>
<!-- backwards compatibility -->
<a id="schemajobreference"></a>
<a id="schema_JobReference"></a>
<a id="tocSjobreference"></a>
<a id="tocsjobreference"></a>

```json
{
  "jobId": "string",
  "projectId": "string"
}
```

Encapsulates the full scoping used to reference a job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|string|false|none|Optional. The job ID, which must be unique within the project.The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or hyphens (-). The maximum length is 100 characters.If not specified by the caller, the job ID will be provided by the server.|
|projectId|string|false|none|Optional. The ID of the Google Cloud Platform project that the job belongs to. If specified, must match the request project ID.|

<h2 id="tocS_JobScheduling">JobScheduling</h2>
<!-- backwards compatibility -->
<a id="schemajobscheduling"></a>
<a id="schema_JobScheduling"></a>
<a id="tocSjobscheduling"></a>
<a id="tocsjobscheduling"></a>

```json
{
  "maxFailuresPerHour": 0,
  "maxFailuresTotal": 0
}
```

Job scheduling options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxFailuresPerHour|integer(int32)|false|none|Optional. Maximum number of times per hour a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.A job may be reported as thrashing if the driver exits with a non-zero code four times within a 10-minute window.Maximum value is 10.Note: This restartable job option is not supported in Dataproc workflow templates (https://cloud.google.com/dataproc/docs/concepts/workflows/using-workflows#adding_jobs_to_a_template).|
|maxFailuresTotal|integer(int32)|false|none|Optional. Maximum total number of times a driver may be restarted as a result of the driver exiting with a non-zero code. After the maximum number is reached, the job will be reported as failed.Maximum value is 240.Note: Currently, this restartable job option is not supported in Dataproc workflow templates (https://cloud.google.com/dataproc/docs/concepts/workflows/using-workflows#adding_jobs_to_a_template).|

<h2 id="tocS_JobStatus">JobStatus</h2>
<!-- backwards compatibility -->
<a id="schemajobstatus"></a>
<a id="schema_JobStatus"></a>
<a id="tocSjobstatus"></a>
<a id="tocsjobstatus"></a>

```json
{
  "details": "string",
  "state": "STATE_UNSPECIFIED",
  "stateStartTime": "string",
  "substate": "UNSPECIFIED"
}
```

Dataproc job status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|string|false|read-only|Optional. Output only. Job state details, such as an error description if the state is ERROR.|
|state|string|false|read-only|Output only. A state message specifying the overall job state.|
|stateStartTime|string(google-datetime)|false|read-only|Output only. The time when this state was entered.|
|substate|string|false|read-only|Output only. Additional state information, which includes status reported by the agent.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|PENDING|
|state|SETUP_DONE|
|state|RUNNING|
|state|CANCEL_PENDING|
|state|CANCEL_STARTED|
|state|CANCELLED|
|state|DONE|
|state|ERROR|
|state|ATTEMPT_FAILURE|
|substate|UNSPECIFIED|
|substate|SUBMITTED|
|substate|QUEUED|
|substate|STALE_STATUS|

<h2 id="tocS_KerberosConfig">KerberosConfig</h2>
<!-- backwards compatibility -->
<a id="schemakerberosconfig"></a>
<a id="schema_KerberosConfig"></a>
<a id="tocSkerberosconfig"></a>
<a id="tocskerberosconfig"></a>

```json
{
  "crossRealmTrustAdminServer": "string",
  "crossRealmTrustKdc": "string",
  "crossRealmTrustRealm": "string",
  "crossRealmTrustSharedPasswordUri": "string",
  "enableKerberos": true,
  "kdcDbKeyUri": "string",
  "keyPasswordUri": "string",
  "keystorePasswordUri": "string",
  "keystoreUri": "string",
  "kmsKeyUri": "string",
  "realm": "string",
  "rootPrincipalPasswordUri": "string",
  "tgtLifetimeHours": 0,
  "truststorePasswordUri": "string",
  "truststoreUri": "string"
}
```

Specifies Kerberos related configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|crossRealmTrustAdminServer|string|false|none|Optional. The admin server (IP or hostname) for the remote trusted realm in a cross realm trust relationship.|
|crossRealmTrustKdc|string|false|none|Optional. The KDC (IP or hostname) for the remote trusted realm in a cross realm trust relationship.|
|crossRealmTrustRealm|string|false|none|Optional. The remote realm the Dataproc on-cluster KDC will trust, should the user enable cross realm trust.|
|crossRealmTrustSharedPasswordUri|string|false|none|Optional. The Cloud Storage URI of a KMS encrypted file containing the shared password between the on-cluster Kerberos realm and the remote trusted realm, in a cross realm trust relationship.|
|enableKerberos|boolean|false|none|Optional. Flag to indicate whether to Kerberize the cluster (default: false). Set this field to true to enable Kerberos on a cluster.|
|kdcDbKeyUri|string|false|none|Optional. The Cloud Storage URI of a KMS encrypted file containing the master key of the KDC database.|
|keyPasswordUri|string|false|none|Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided key. For the self-signed certificate, this password is generated by Dataproc.|
|keystorePasswordUri|string|false|none|Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided keystore. For the self-signed certificate, this password is generated by Dataproc.|
|keystoreUri|string|false|none|Optional. The Cloud Storage URI of the keystore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate.|
|kmsKeyUri|string|false|none|Optional. The uri of the KMS key used to encrypt various sensitive files.|
|realm|string|false|none|Optional. The name of the on-cluster Kerberos realm. If not specified, the uppercased domain of hostnames will be the realm.|
|rootPrincipalPasswordUri|string|false|none|Optional. The Cloud Storage URI of a KMS encrypted file containing the root principal password.|
|tgtLifetimeHours|integer(int32)|false|none|Optional. The lifetime of the ticket granting ticket, in hours. If not specified, or user specifies 0, then default value 10 will be used.|
|truststorePasswordUri|string|false|none|Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided truststore. For the self-signed certificate, this password is generated by Dataproc.|
|truststoreUri|string|false|none|Optional. The Cloud Storage URI of the truststore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate.|

<h2 id="tocS_KubernetesClusterConfig">KubernetesClusterConfig</h2>
<!-- backwards compatibility -->
<a id="schemakubernetesclusterconfig"></a>
<a id="schema_KubernetesClusterConfig"></a>
<a id="tocSkubernetesclusterconfig"></a>
<a id="tocskubernetesclusterconfig"></a>

```json
{
  "gkeClusterConfig": {
    "gkeClusterTarget": "string",
    "namespacedGkeDeploymentTarget": {
      "clusterNamespace": "string",
      "targetGkeCluster": "string"
    },
    "nodePoolTarget": [
      {
        "nodePool": "string",
        "nodePoolConfig": {
          "autoscaling": {
            "maxNodeCount": 0,
            "minNodeCount": 0
          },
          "config": {
            "accelerators": [
              {
                "acceleratorCount": "string",
                "acceleratorType": "string",
                "gpuPartitionSize": "string"
              }
            ],
            "bootDiskKmsKey": "string",
            "localSsdCount": 0,
            "machineType": "string",
            "minCpuPlatform": "string",
            "preemptible": true,
            "spot": true
          },
          "locations": [
            "string"
          ]
        },
        "roles": [
          "ROLE_UNSPECIFIED"
        ]
      }
    ]
  },
  "kubernetesNamespace": "string",
  "kubernetesSoftwareConfig": {
    "componentVersion": {
      "property1": "string",
      "property2": "string"
    },
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

The configuration for running the Dataproc cluster on Kubernetes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gkeClusterConfig|[GkeClusterConfig](#schemagkeclusterconfig)|false|none|Required. The configuration for running the Dataproc cluster on GKE.|
|kubernetesNamespace|string|false|none|Optional. A namespace within the Kubernetes cluster to deploy into. If this namespace does not exist, it is created. If it exists, Dataproc verifies that another Dataproc VirtualCluster is not installed into it. If not specified, the name of the Dataproc Cluster is used.|
|kubernetesSoftwareConfig|[KubernetesSoftwareConfig](#schemakubernetessoftwareconfig)|false|none|Optional. The software configuration for this Dataproc cluster running on Kubernetes.|

<h2 id="tocS_KubernetesSoftwareConfig">KubernetesSoftwareConfig</h2>
<!-- backwards compatibility -->
<a id="schemakubernetessoftwareconfig"></a>
<a id="schema_KubernetesSoftwareConfig"></a>
<a id="tocSkubernetessoftwareconfig"></a>
<a id="tocskubernetessoftwareconfig"></a>

```json
{
  "componentVersion": {
    "property1": "string",
    "property2": "string"
  },
  "properties": {
    "property1": "string",
    "property2": "string"
  }
}
```

The software configuration for this Dataproc cluster running on Kubernetes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|componentVersion|object|false|none|The components that should be installed in this Dataproc cluster. The key must be a string from the KubernetesComponent enumeration. The value is the version of the software to be installed. At least one entry must be specified.|
|properties|object|false|none|The properties to set on daemon config files.Property keys are specified in prefix:property format, for example spark:spark.kubernetes.container.image. The following are supported prefixes and their mappings: spark: spark-defaults.confFor more information, see Cluster properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties).|

<h2 id="tocS_LifecycleConfig">LifecycleConfig</h2>
<!-- backwards compatibility -->
<a id="schemalifecycleconfig"></a>
<a id="schema_LifecycleConfig"></a>
<a id="tocSlifecycleconfig"></a>
<a id="tocslifecycleconfig"></a>

```json
{
  "autoDeleteTime": "string",
  "autoDeleteTtl": "string",
  "idleDeleteTtl": "string",
  "idleStartTime": "string"
}
```

Specifies the cluster auto-delete schedule configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoDeleteTime|string(google-datetime)|false|none|Optional. The time when cluster will be auto-deleted (see JSON representation of Timestamp (https://developers.google.com/protocol-buffers/docs/proto3#json)).|
|autoDeleteTtl|string(google-duration)|false|none|Optional. The lifetime duration of cluster. The cluster will be auto-deleted at the end of this period. Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).|
|idleDeleteTtl|string(google-duration)|false|none|Optional. The duration to keep the cluster alive while idling (when no jobs are running). Passing this threshold will cause the cluster to be deleted. Minimum value is 5 minutes; maximum value is 14 days (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).|
|idleStartTime|string(google-datetime)|false|read-only|Output only. The time when cluster became idle (most recent job finished) and became eligible for deletion due to idleness (see JSON representation of Timestamp (https://developers.google.com/protocol-buffers/docs/proto3#json)).|

<h2 id="tocS_ListAutoscalingPoliciesResponse">ListAutoscalingPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistautoscalingpoliciesresponse"></a>
<a id="schema_ListAutoscalingPoliciesResponse"></a>
<a id="tocSlistautoscalingpoliciesresponse"></a>
<a id="tocslistautoscalingpoliciesresponse"></a>

```json
{
  "nextPageToken": "string",
  "policies": [
    {
      "basicAlgorithm": {
        "cooldownPeriod": "string",
        "sparkStandaloneConfig": {
          "gracefulDecommissionTimeout": "string",
          "scaleDownFactor": 0,
          "scaleDownMinWorkerFraction": 0,
          "scaleUpFactor": 0,
          "scaleUpMinWorkerFraction": 0
        },
        "yarnConfig": {
          "gracefulDecommissionTimeout": "string",
          "scaleDownFactor": 0,
          "scaleDownMinWorkerFraction": 0,
          "scaleUpFactor": 0,
          "scaleUpMinWorkerFraction": 0
        }
      },
      "id": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "secondaryWorkerConfig": {
        "maxInstances": 0,
        "minInstances": 0,
        "weight": 0
      },
      "workerConfig": {
        "maxInstances": 0,
        "minInstances": 0,
        "weight": 0
      }
    }
  ]
}
```

A response to a request to list autoscaling policies in a project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|read-only|Output only. This token is included in the response if there are more results to fetch.|
|policies|[[AutoscalingPolicy](#schemaautoscalingpolicy)]|false|read-only|Output only. Autoscaling policies list.|

<h2 id="tocS_ListBatchesResponse">ListBatchesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbatchesresponse"></a>
<a id="schema_ListBatchesResponse"></a>
<a id="tocSlistbatchesresponse"></a>
<a id="tocslistbatchesresponse"></a>

```json
{
  "batches": [
    {
      "createTime": "string",
      "creator": "string",
      "environmentConfig": {
        "executionConfig": {
          "idleTtl": "string",
          "kmsKey": "string",
          "networkTags": [
            "string"
          ],
          "networkUri": "string",
          "serviceAccount": "string",
          "stagingBucket": "string",
          "subnetworkUri": "string",
          "ttl": "string"
        },
        "peripheralsConfig": {
          "metastoreService": "string",
          "sparkHistoryServerConfig": {
            "dataprocCluster": "string"
          }
        }
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "operation": "string",
      "pysparkBatch": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "mainPythonFileUri": "string",
        "pythonFileUris": [
          "string"
        ]
      },
      "runtimeConfig": {
        "containerImage": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "version": "string"
      },
      "runtimeInfo": {
        "approximateUsage": {
          "milliDcuSeconds": "string",
          "shuffleStorageGbSeconds": "string"
        },
        "currentUsage": {
          "milliDcu": "string",
          "shuffleStorageGb": "string",
          "snapshotTime": "string"
        },
        "diagnosticOutputUri": "string",
        "endpoints": {
          "property1": "string",
          "property2": "string"
        },
        "outputUri": "string"
      },
      "sparkBatch": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "mainClass": "string",
        "mainJarFileUri": "string"
      },
      "sparkRBatch": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "mainRFileUri": "string"
      },
      "sparkSqlBatch": {
        "jarFileUris": [
          "string"
        ],
        "queryFileUri": "string",
        "queryVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "state": "STATE_UNSPECIFIED",
      "stateHistory": [
        {
          "state": "STATE_UNSPECIFIED",
          "stateMessage": "string",
          "stateStartTime": "string"
        }
      ],
      "stateMessage": "string",
      "stateTime": "string",
      "uuid": "string"
    }
  ],
  "nextPageToken": "string"
}
```

A list of batch workloads.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batches|[[Batch](#schemabatch)]|false|none|The batches from the specified collection.|
|nextPageToken|string|false|none|A token, which can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_ListClustersResponse">ListClustersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistclustersresponse"></a>
<a id="schema_ListClustersResponse"></a>
<a id="tocSlistclustersresponse"></a>
<a id="tocslistclustersresponse"></a>

```json
{
  "clusters": [
    {
      "clusterName": "string",
      "clusterUuid": "string",
      "config": {
        "autoscalingConfig": {
          "policyUri": "string"
        },
        "auxiliaryNodeGroups": [
          {
            "nodeGroup": {
              "labels": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string",
              "nodeGroupConfig": {
                "accelerators": [
                  {
                    "acceleratorCount": 0,
                    "acceleratorTypeUri": "string"
                  }
                ],
                "diskConfig": {
                  "bootDiskSizeGb": 0,
                  "bootDiskType": "string",
                  "localSsdInterface": "string",
                  "numLocalSsds": 0
                },
                "imageUri": "string",
                "instanceNames": [
                  "string"
                ],
                "instanceReferences": [
                  {
                    "instanceId": "string",
                    "instanceName": "string",
                    "publicEciesKey": "string",
                    "publicKey": "string"
                  }
                ],
                "isPreemptible": true,
                "machineTypeUri": "string",
                "managedGroupConfig": {
                  "instanceGroupManagerName": "string",
                  "instanceTemplateName": "string"
                },
                "minCpuPlatform": "string",
                "numInstances": 0,
                "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
              },
              "roles": [
                "ROLE_UNSPECIFIED"
              ]
            },
            "nodeGroupId": "string"
          }
        ],
        "configBucket": "string",
        "dataprocMetricConfig": {
          "metrics": [
            {
              "metricOverrides": [
                "string"
              ],
              "metricSource": "METRIC_SOURCE_UNSPECIFIED"
            }
          ]
        },
        "encryptionConfig": {
          "gcePdKmsKeyName": "string",
          "kmsKey": "string"
        },
        "endpointConfig": {
          "enableHttpPortAccess": true,
          "httpPorts": {
            "property1": "string",
            "property2": "string"
          }
        },
        "gceClusterConfig": {
          "confidentialInstanceConfig": {
            "enableConfidentialCompute": true
          },
          "internalIpOnly": true,
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "networkUri": "string",
          "nodeGroupAffinity": {
            "nodeGroupUri": "string"
          },
          "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
          "reservationAffinity": {
            "consumeReservationType": "TYPE_UNSPECIFIED",
            "key": "string",
            "values": [
              "string"
            ]
          },
          "serviceAccount": "string",
          "serviceAccountScopes": [
            "string"
          ],
          "shieldedInstanceConfig": {
            "enableIntegrityMonitoring": true,
            "enableSecureBoot": true,
            "enableVtpm": true
          },
          "subnetworkUri": "string",
          "tags": [
            "string"
          ],
          "zoneUri": "string"
        },
        "gkeClusterConfig": {
          "gkeClusterTarget": "string",
          "namespacedGkeDeploymentTarget": {
            "clusterNamespace": "string",
            "targetGkeCluster": "string"
          },
          "nodePoolTarget": [
            {
              "nodePool": "string",
              "nodePoolConfig": {
                "autoscaling": {
                  "maxNodeCount": 0,
                  "minNodeCount": 0
                },
                "config": {
                  "accelerators": [
                    {
                      "acceleratorCount": "string",
                      "acceleratorType": "string",
                      "gpuPartitionSize": "string"
                    }
                  ],
                  "bootDiskKmsKey": "string",
                  "localSsdCount": 0,
                  "machineType": "string",
                  "minCpuPlatform": "string",
                  "preemptible": true,
                  "spot": true
                },
                "locations": [
                  "string"
                ]
              },
              "roles": [
                "ROLE_UNSPECIFIED"
              ]
            }
          ]
        },
        "initializationActions": [
          {
            "executableFile": "string",
            "executionTimeout": "string"
          }
        ],
        "lifecycleConfig": {
          "autoDeleteTime": "string",
          "autoDeleteTtl": "string",
          "idleDeleteTtl": "string",
          "idleStartTime": "string"
        },
        "masterConfig": {
          "accelerators": [
            {
              "acceleratorCount": 0,
              "acceleratorTypeUri": "string"
            }
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string",
            "localSsdInterface": "string",
            "numLocalSsds": 0
          },
          "imageUri": "string",
          "instanceNames": [
            "string"
          ],
          "instanceReferences": [
            {
              "instanceId": "string",
              "instanceName": "string",
              "publicEciesKey": "string",
              "publicKey": "string"
            }
          ],
          "isPreemptible": true,
          "machineTypeUri": "string",
          "managedGroupConfig": {
            "instanceGroupManagerName": "string",
            "instanceTemplateName": "string"
          },
          "minCpuPlatform": "string",
          "numInstances": 0,
          "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
        },
        "metastoreConfig": {
          "dataprocMetastoreService": "string"
        },
        "secondaryWorkerConfig": {
          "accelerators": [
            {
              "acceleratorCount": 0,
              "acceleratorTypeUri": "string"
            }
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string",
            "localSsdInterface": "string",
            "numLocalSsds": 0
          },
          "imageUri": "string",
          "instanceNames": [
            "string"
          ],
          "instanceReferences": [
            {
              "instanceId": "string",
              "instanceName": "string",
              "publicEciesKey": "string",
              "publicKey": "string"
            }
          ],
          "isPreemptible": true,
          "machineTypeUri": "string",
          "managedGroupConfig": {
            "instanceGroupManagerName": "string",
            "instanceTemplateName": "string"
          },
          "minCpuPlatform": "string",
          "numInstances": 0,
          "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
        },
        "securityConfig": {
          "identityConfig": {
            "userServiceAccountMapping": {
              "property1": "string",
              "property2": "string"
            }
          },
          "kerberosConfig": {
            "crossRealmTrustAdminServer": "string",
            "crossRealmTrustKdc": "string",
            "crossRealmTrustRealm": "string",
            "crossRealmTrustSharedPasswordUri": "string",
            "enableKerberos": true,
            "kdcDbKeyUri": "string",
            "keyPasswordUri": "string",
            "keystorePasswordUri": "string",
            "keystoreUri": "string",
            "kmsKeyUri": "string",
            "realm": "string",
            "rootPrincipalPasswordUri": "string",
            "tgtLifetimeHours": 0,
            "truststorePasswordUri": "string",
            "truststoreUri": "string"
          }
        },
        "softwareConfig": {
          "imageVersion": "string",
          "optionalComponents": [
            "COMPONENT_UNSPECIFIED"
          ],
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        },
        "tempBucket": "string",
        "workerConfig": {
          "accelerators": [
            {
              "acceleratorCount": 0,
              "acceleratorTypeUri": "string"
            }
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string",
            "localSsdInterface": "string",
            "numLocalSsds": 0
          },
          "imageUri": "string",
          "instanceNames": [
            "string"
          ],
          "instanceReferences": [
            {
              "instanceId": "string",
              "instanceName": "string",
              "publicEciesKey": "string",
              "publicKey": "string"
            }
          ],
          "isPreemptible": true,
          "machineTypeUri": "string",
          "managedGroupConfig": {
            "instanceGroupManagerName": "string",
            "instanceTemplateName": "string"
          },
          "minCpuPlatform": "string",
          "numInstances": 0,
          "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
        }
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "metrics": {
        "hdfsMetrics": {
          "property1": "string",
          "property2": "string"
        },
        "yarnMetrics": {
          "property1": "string",
          "property2": "string"
        }
      },
      "projectId": "string",
      "status": {
        "detail": "string",
        "state": "UNKNOWN",
        "stateStartTime": "string",
        "substate": "UNSPECIFIED"
      },
      "statusHistory": [
        {
          "detail": "string",
          "state": "UNKNOWN",
          "stateStartTime": "string",
          "substate": "UNSPECIFIED"
        }
      ],
      "virtualClusterConfig": {
        "auxiliaryServicesConfig": {
          "metastoreConfig": {
            "dataprocMetastoreService": "string"
          },
          "sparkHistoryServerConfig": {
            "dataprocCluster": "string"
          }
        },
        "kubernetesClusterConfig": {
          "gkeClusterConfig": {
            "gkeClusterTarget": "string",
            "namespacedGkeDeploymentTarget": {
              "clusterNamespace": "string",
              "targetGkeCluster": "string"
            },
            "nodePoolTarget": [
              {
                "nodePool": "string",
                "nodePoolConfig": {
                  "autoscaling": {
                    "maxNodeCount": 0,
                    "minNodeCount": 0
                  },
                  "config": {
                    "accelerators": [
                      {
                        "acceleratorCount": "string",
                        "acceleratorType": "string",
                        "gpuPartitionSize": "string"
                      }
                    ],
                    "bootDiskKmsKey": "string",
                    "localSsdCount": 0,
                    "machineType": "string",
                    "minCpuPlatform": "string",
                    "preemptible": true,
                    "spot": true
                  },
                  "locations": [
                    "string"
                  ]
                },
                "roles": [
                  "ROLE_UNSPECIFIED"
                ]
              }
            ]
          },
          "kubernetesNamespace": "string",
          "kubernetesSoftwareConfig": {
            "componentVersion": {
              "property1": "string",
              "property2": "string"
            },
            "properties": {
              "property1": "string",
              "property2": "string"
            }
          }
        },
        "stagingBucket": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

The list of all clusters in a project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusters|[[Cluster](#schemacluster)]|false|read-only|Output only. The clusters in the project.|
|nextPageToken|string|false|read-only|Output only. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListClustersRequest.|

<h2 id="tocS_ListJobsResponse">ListJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsresponse"></a>
<a id="schema_ListJobsResponse"></a>
<a id="tocSlistjobsresponse"></a>
<a id="tocslistjobsresponse"></a>

```json
{
  "jobs": [
    {
      "done": true,
      "driverControlFilesUri": "string",
      "driverOutputResourceUri": "string",
      "driverSchedulingConfig": {
        "memoryMb": 0,
        "vcores": 0
      },
      "hadoopJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainClass": "string",
        "mainJarFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "hiveJob": {
        "continueOnFailure": true,
        "jarFileUris": [
          "string"
        ],
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "jobUuid": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "pigJob": {
        "continueOnFailure": true,
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "placement": {
        "clusterLabels": {
          "property1": "string",
          "property2": "string"
        },
        "clusterName": "string",
        "clusterUuid": "string"
      },
      "prestoJob": {
        "clientTags": [
          "string"
        ],
        "continueOnFailure": true,
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "outputFormat": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        }
      },
      "pysparkJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainPythonFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "pythonFileUris": [
          "string"
        ]
      },
      "reference": {
        "jobId": "string",
        "projectId": "string"
      },
      "scheduling": {
        "maxFailuresPerHour": 0,
        "maxFailuresTotal": 0
      },
      "sparkJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainClass": "string",
        "mainJarFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "sparkRJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainRFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "sparkSqlJob": {
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "status": {
        "details": "string",
        "state": "STATE_UNSPECIFIED",
        "stateStartTime": "string",
        "substate": "UNSPECIFIED"
      },
      "statusHistory": [
        {
          "details": "string",
          "state": "STATE_UNSPECIFIED",
          "stateStartTime": "string",
          "substate": "UNSPECIFIED"
        }
      ],
      "trinoJob": {
        "clientTags": [
          "string"
        ],
        "continueOnFailure": true,
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "outputFormat": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        }
      },
      "yarnApplications": [
        {
          "name": "string",
          "progress": 0,
          "state": "STATE_UNSPECIFIED",
          "trackingUrl": "string"
        }
      ]
    }
  ],
  "nextPageToken": "string"
}
```

A list of jobs in a project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobs|[[Job](#schemajob)]|false|read-only|Output only. Jobs list.|
|nextPageToken|string|false|none|Optional. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListJobsRequest.|

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

<h2 id="tocS_ListWorkflowTemplatesResponse">ListWorkflowTemplatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistworkflowtemplatesresponse"></a>
<a id="schema_ListWorkflowTemplatesResponse"></a>
<a id="tocSlistworkflowtemplatesresponse"></a>
<a id="tocslistworkflowtemplatesresponse"></a>

```json
{
  "nextPageToken": "string",
  "templates": [
    {
      "createTime": "string",
      "dagTimeout": "string",
      "id": "string",
      "jobs": [
        {
          "hadoopJob": {
            "archiveUris": [
              "string"
            ],
            "args": [
              "string"
            ],
            "fileUris": [
              "string"
            ],
            "jarFileUris": [
              "string"
            ],
            "loggingConfig": {
              "driverLogLevels": {
                "property1": "LEVEL_UNSPECIFIED",
                "property2": "LEVEL_UNSPECIFIED"
              }
            },
            "mainClass": "string",
            "mainJarFileUri": "string",
            "properties": {
              "property1": "string",
              "property2": "string"
            }
          },
          "hiveJob": {
            "continueOnFailure": true,
            "jarFileUris": [
              "string"
            ],
            "properties": {
              "property1": "string",
              "property2": "string"
            },
            "queryFileUri": "string",
            "queryList": {
              "queries": [
                "string"
              ]
            },
            "scriptVariables": {
              "property1": "string",
              "property2": "string"
            }
          },
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "pigJob": {
            "continueOnFailure": true,
            "jarFileUris": [
              "string"
            ],
            "loggingConfig": {
              "driverLogLevels": {
                "property1": "LEVEL_UNSPECIFIED",
                "property2": "LEVEL_UNSPECIFIED"
              }
            },
            "properties": {
              "property1": "string",
              "property2": "string"
            },
            "queryFileUri": "string",
            "queryList": {
              "queries": [
                "string"
              ]
            },
            "scriptVariables": {
              "property1": "string",
              "property2": "string"
            }
          },
          "prerequisiteStepIds": [
            "string"
          ],
          "prestoJob": {
            "clientTags": [
              "string"
            ],
            "continueOnFailure": true,
            "loggingConfig": {
              "driverLogLevels": {
                "property1": "LEVEL_UNSPECIFIED",
                "property2": "LEVEL_UNSPECIFIED"
              }
            },
            "outputFormat": "string",
            "properties": {
              "property1": "string",
              "property2": "string"
            },
            "queryFileUri": "string",
            "queryList": {
              "queries": [
                "string"
              ]
            }
          },
          "pysparkJob": {
            "archiveUris": [
              "string"
            ],
            "args": [
              "string"
            ],
            "fileUris": [
              "string"
            ],
            "jarFileUris": [
              "string"
            ],
            "loggingConfig": {
              "driverLogLevels": {
                "property1": "LEVEL_UNSPECIFIED",
                "property2": "LEVEL_UNSPECIFIED"
              }
            },
            "mainPythonFileUri": "string",
            "properties": {
              "property1": "string",
              "property2": "string"
            },
            "pythonFileUris": [
              "string"
            ]
          },
          "scheduling": {
            "maxFailuresPerHour": 0,
            "maxFailuresTotal": 0
          },
          "sparkJob": {
            "archiveUris": [
              "string"
            ],
            "args": [
              "string"
            ],
            "fileUris": [
              "string"
            ],
            "jarFileUris": [
              "string"
            ],
            "loggingConfig": {
              "driverLogLevels": {
                "property1": "LEVEL_UNSPECIFIED",
                "property2": "LEVEL_UNSPECIFIED"
              }
            },
            "mainClass": "string",
            "mainJarFileUri": "string",
            "properties": {
              "property1": "string",
              "property2": "string"
            }
          },
          "sparkRJob": {
            "archiveUris": [
              "string"
            ],
            "args": [
              "string"
            ],
            "fileUris": [
              "string"
            ],
            "loggingConfig": {
              "driverLogLevels": {
                "property1": "LEVEL_UNSPECIFIED",
                "property2": "LEVEL_UNSPECIFIED"
              }
            },
            "mainRFileUri": "string",
            "properties": {
              "property1": "string",
              "property2": "string"
            }
          },
          "sparkSqlJob": {
            "jarFileUris": [
              "string"
            ],
            "loggingConfig": {
              "driverLogLevels": {
                "property1": "LEVEL_UNSPECIFIED",
                "property2": "LEVEL_UNSPECIFIED"
              }
            },
            "properties": {
              "property1": "string",
              "property2": "string"
            },
            "queryFileUri": "string",
            "queryList": {
              "queries": [
                "string"
              ]
            },
            "scriptVariables": {
              "property1": "string",
              "property2": "string"
            }
          },
          "stepId": "string",
          "trinoJob": {
            "clientTags": [
              "string"
            ],
            "continueOnFailure": true,
            "loggingConfig": {
              "driverLogLevels": {
                "property1": "LEVEL_UNSPECIFIED",
                "property2": "LEVEL_UNSPECIFIED"
              }
            },
            "outputFormat": "string",
            "properties": {
              "property1": "string",
              "property2": "string"
            },
            "queryFileUri": "string",
            "queryList": {
              "queries": [
                "string"
              ]
            }
          }
        }
      ],
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "parameters": [
        {
          "description": "string",
          "fields": [
            "string"
          ],
          "name": "string",
          "validation": {
            "regex": {
              "regexes": [
                "string"
              ]
            },
            "values": {
              "values": [
                "string"
              ]
            }
          }
        }
      ],
      "placement": {
        "clusterSelector": {
          "clusterLabels": {
            "property1": "string",
            "property2": "string"
          },
          "zone": "string"
        },
        "managedCluster": {
          "clusterName": "string",
          "config": {
            "autoscalingConfig": {
              "policyUri": "string"
            },
            "auxiliaryNodeGroups": [
              {
                "nodeGroup": {
                  "labels": {
                    "property1": "string",
                    "property2": "string"
                  },
                  "name": "string",
                  "nodeGroupConfig": {
                    "accelerators": [
                      {
                        "acceleratorCount": 0,
                        "acceleratorTypeUri": "string"
                      }
                    ],
                    "diskConfig": {
                      "bootDiskSizeGb": 0,
                      "bootDiskType": "string",
                      "localSsdInterface": "string",
                      "numLocalSsds": 0
                    },
                    "imageUri": "string",
                    "instanceNames": [
                      "string"
                    ],
                    "instanceReferences": [
                      {
                        "instanceId": "string",
                        "instanceName": "string",
                        "publicEciesKey": "string",
                        "publicKey": "string"
                      }
                    ],
                    "isPreemptible": true,
                    "machineTypeUri": "string",
                    "managedGroupConfig": {
                      "instanceGroupManagerName": "string",
                      "instanceTemplateName": "string"
                    },
                    "minCpuPlatform": "string",
                    "numInstances": 0,
                    "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
                  },
                  "roles": [
                    "ROLE_UNSPECIFIED"
                  ]
                },
                "nodeGroupId": "string"
              }
            ],
            "configBucket": "string",
            "dataprocMetricConfig": {
              "metrics": [
                {
                  "metricOverrides": [
                    "string"
                  ],
                  "metricSource": "METRIC_SOURCE_UNSPECIFIED"
                }
              ]
            },
            "encryptionConfig": {
              "gcePdKmsKeyName": "string",
              "kmsKey": "string"
            },
            "endpointConfig": {
              "enableHttpPortAccess": true,
              "httpPorts": {
                "property1": "string",
                "property2": "string"
              }
            },
            "gceClusterConfig": {
              "confidentialInstanceConfig": {
                "enableConfidentialCompute": true
              },
              "internalIpOnly": true,
              "metadata": {
                "property1": "string",
                "property2": "string"
              },
              "networkUri": "string",
              "nodeGroupAffinity": {
                "nodeGroupUri": "string"
              },
              "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
              "reservationAffinity": {
                "consumeReservationType": "TYPE_UNSPECIFIED",
                "key": "string",
                "values": [
                  "string"
                ]
              },
              "serviceAccount": "string",
              "serviceAccountScopes": [
                "string"
              ],
              "shieldedInstanceConfig": {
                "enableIntegrityMonitoring": true,
                "enableSecureBoot": true,
                "enableVtpm": true
              },
              "subnetworkUri": "string",
              "tags": [
                "string"
              ],
              "zoneUri": "string"
            },
            "gkeClusterConfig": {
              "gkeClusterTarget": "string",
              "namespacedGkeDeploymentTarget": {
                "clusterNamespace": "string",
                "targetGkeCluster": "string"
              },
              "nodePoolTarget": [
                {
                  "nodePool": "string",
                  "nodePoolConfig": {
                    "autoscaling": {
                      "maxNodeCount": 0,
                      "minNodeCount": 0
                    },
                    "config": {
                      "accelerators": [
                        {
                          "acceleratorCount": "string",
                          "acceleratorType": "string",
                          "gpuPartitionSize": "string"
                        }
                      ],
                      "bootDiskKmsKey": "string",
                      "localSsdCount": 0,
                      "machineType": "string",
                      "minCpuPlatform": "string",
                      "preemptible": true,
                      "spot": true
                    },
                    "locations": [
                      "string"
                    ]
                  },
                  "roles": [
                    "ROLE_UNSPECIFIED"
                  ]
                }
              ]
            },
            "initializationActions": [
              {
                "executableFile": "string",
                "executionTimeout": "string"
              }
            ],
            "lifecycleConfig": {
              "autoDeleteTime": "string",
              "autoDeleteTtl": "string",
              "idleDeleteTtl": "string",
              "idleStartTime": "string"
            },
            "masterConfig": {
              "accelerators": [
                {
                  "acceleratorCount": 0,
                  "acceleratorTypeUri": "string"
                }
              ],
              "diskConfig": {
                "bootDiskSizeGb": 0,
                "bootDiskType": "string",
                "localSsdInterface": "string",
                "numLocalSsds": 0
              },
              "imageUri": "string",
              "instanceNames": [
                "string"
              ],
              "instanceReferences": [
                {
                  "instanceId": "string",
                  "instanceName": "string",
                  "publicEciesKey": "string",
                  "publicKey": "string"
                }
              ],
              "isPreemptible": true,
              "machineTypeUri": "string",
              "managedGroupConfig": {
                "instanceGroupManagerName": "string",
                "instanceTemplateName": "string"
              },
              "minCpuPlatform": "string",
              "numInstances": 0,
              "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
            },
            "metastoreConfig": {
              "dataprocMetastoreService": "string"
            },
            "secondaryWorkerConfig": {
              "accelerators": [
                {
                  "acceleratorCount": 0,
                  "acceleratorTypeUri": "string"
                }
              ],
              "diskConfig": {
                "bootDiskSizeGb": 0,
                "bootDiskType": "string",
                "localSsdInterface": "string",
                "numLocalSsds": 0
              },
              "imageUri": "string",
              "instanceNames": [
                "string"
              ],
              "instanceReferences": [
                {
                  "instanceId": "string",
                  "instanceName": "string",
                  "publicEciesKey": "string",
                  "publicKey": "string"
                }
              ],
              "isPreemptible": true,
              "machineTypeUri": "string",
              "managedGroupConfig": {
                "instanceGroupManagerName": "string",
                "instanceTemplateName": "string"
              },
              "minCpuPlatform": "string",
              "numInstances": 0,
              "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
            },
            "securityConfig": {
              "identityConfig": {
                "userServiceAccountMapping": {
                  "property1": "string",
                  "property2": "string"
                }
              },
              "kerberosConfig": {
                "crossRealmTrustAdminServer": "string",
                "crossRealmTrustKdc": "string",
                "crossRealmTrustRealm": "string",
                "crossRealmTrustSharedPasswordUri": "string",
                "enableKerberos": true,
                "kdcDbKeyUri": "string",
                "keyPasswordUri": "string",
                "keystorePasswordUri": "string",
                "keystoreUri": "string",
                "kmsKeyUri": "string",
                "realm": "string",
                "rootPrincipalPasswordUri": "string",
                "tgtLifetimeHours": 0,
                "truststorePasswordUri": "string",
                "truststoreUri": "string"
              }
            },
            "softwareConfig": {
              "imageVersion": "string",
              "optionalComponents": [
                "COMPONENT_UNSPECIFIED"
              ],
              "properties": {
                "property1": "string",
                "property2": "string"
              }
            },
            "tempBucket": "string",
            "workerConfig": {
              "accelerators": [
                {
                  "acceleratorCount": 0,
                  "acceleratorTypeUri": "string"
                }
              ],
              "diskConfig": {
                "bootDiskSizeGb": 0,
                "bootDiskType": "string",
                "localSsdInterface": "string",
                "numLocalSsds": 0
              },
              "imageUri": "string",
              "instanceNames": [
                "string"
              ],
              "instanceReferences": [
                {
                  "instanceId": "string",
                  "instanceName": "string",
                  "publicEciesKey": "string",
                  "publicKey": "string"
                }
              ],
              "isPreemptible": true,
              "machineTypeUri": "string",
              "managedGroupConfig": {
                "instanceGroupManagerName": "string",
                "instanceTemplateName": "string"
              },
              "minCpuPlatform": "string",
              "numInstances": 0,
              "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
            }
          },
          "labels": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "updateTime": "string",
      "version": 0
    }
  ]
}
```

A response to a request to list workflow templates in a project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|read-only|Output only. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListWorkflowTemplatesRequest.|
|templates|[[WorkflowTemplate](#schemaworkflowtemplate)]|false|read-only|Output only. WorkflowTemplates list.|

<h2 id="tocS_LoggingConfig">LoggingConfig</h2>
<!-- backwards compatibility -->
<a id="schemaloggingconfig"></a>
<a id="schema_LoggingConfig"></a>
<a id="tocSloggingconfig"></a>
<a id="tocsloggingconfig"></a>

```json
{
  "driverLogLevels": {
    "property1": "LEVEL_UNSPECIFIED",
    "property2": "LEVEL_UNSPECIFIED"
  }
}
```

The runtime logging config of the job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|driverLogLevels|object|false|none|The per-package log levels for the driver. This may include "root" package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'|

<h2 id="tocS_ManagedCluster">ManagedCluster</h2>
<!-- backwards compatibility -->
<a id="schemamanagedcluster"></a>
<a id="schema_ManagedCluster"></a>
<a id="tocSmanagedcluster"></a>
<a id="tocsmanagedcluster"></a>

```json
{
  "clusterName": "string",
  "config": {
    "autoscalingConfig": {
      "policyUri": "string"
    },
    "auxiliaryNodeGroups": [
      {
        "nodeGroup": {
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "name": "string",
          "nodeGroupConfig": {
            "accelerators": [
              {
                "acceleratorCount": 0,
                "acceleratorTypeUri": "string"
              }
            ],
            "diskConfig": {
              "bootDiskSizeGb": 0,
              "bootDiskType": "string",
              "localSsdInterface": "string",
              "numLocalSsds": 0
            },
            "imageUri": "string",
            "instanceNames": [
              "string"
            ],
            "instanceReferences": [
              {
                "instanceId": "string",
                "instanceName": "string",
                "publicEciesKey": "string",
                "publicKey": "string"
              }
            ],
            "isPreemptible": true,
            "machineTypeUri": "string",
            "managedGroupConfig": {
              "instanceGroupManagerName": "string",
              "instanceTemplateName": "string"
            },
            "minCpuPlatform": "string",
            "numInstances": 0,
            "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
          },
          "roles": [
            "ROLE_UNSPECIFIED"
          ]
        },
        "nodeGroupId": "string"
      }
    ],
    "configBucket": "string",
    "dataprocMetricConfig": {
      "metrics": [
        {
          "metricOverrides": [
            "string"
          ],
          "metricSource": "METRIC_SOURCE_UNSPECIFIED"
        }
      ]
    },
    "encryptionConfig": {
      "gcePdKmsKeyName": "string",
      "kmsKey": "string"
    },
    "endpointConfig": {
      "enableHttpPortAccess": true,
      "httpPorts": {
        "property1": "string",
        "property2": "string"
      }
    },
    "gceClusterConfig": {
      "confidentialInstanceConfig": {
        "enableConfidentialCompute": true
      },
      "internalIpOnly": true,
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "networkUri": "string",
      "nodeGroupAffinity": {
        "nodeGroupUri": "string"
      },
      "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
      "reservationAffinity": {
        "consumeReservationType": "TYPE_UNSPECIFIED",
        "key": "string",
        "values": [
          "string"
        ]
      },
      "serviceAccount": "string",
      "serviceAccountScopes": [
        "string"
      ],
      "shieldedInstanceConfig": {
        "enableIntegrityMonitoring": true,
        "enableSecureBoot": true,
        "enableVtpm": true
      },
      "subnetworkUri": "string",
      "tags": [
        "string"
      ],
      "zoneUri": "string"
    },
    "gkeClusterConfig": {
      "gkeClusterTarget": "string",
      "namespacedGkeDeploymentTarget": {
        "clusterNamespace": "string",
        "targetGkeCluster": "string"
      },
      "nodePoolTarget": [
        {
          "nodePool": "string",
          "nodePoolConfig": {
            "autoscaling": {
              "maxNodeCount": 0,
              "minNodeCount": 0
            },
            "config": {
              "accelerators": [
                {
                  "acceleratorCount": "string",
                  "acceleratorType": "string",
                  "gpuPartitionSize": "string"
                }
              ],
              "bootDiskKmsKey": "string",
              "localSsdCount": 0,
              "machineType": "string",
              "minCpuPlatform": "string",
              "preemptible": true,
              "spot": true
            },
            "locations": [
              "string"
            ]
          },
          "roles": [
            "ROLE_UNSPECIFIED"
          ]
        }
      ]
    },
    "initializationActions": [
      {
        "executableFile": "string",
        "executionTimeout": "string"
      }
    ],
    "lifecycleConfig": {
      "autoDeleteTime": "string",
      "autoDeleteTtl": "string",
      "idleDeleteTtl": "string",
      "idleStartTime": "string"
    },
    "masterConfig": {
      "accelerators": [
        {
          "acceleratorCount": 0,
          "acceleratorTypeUri": "string"
        }
      ],
      "diskConfig": {
        "bootDiskSizeGb": 0,
        "bootDiskType": "string",
        "localSsdInterface": "string",
        "numLocalSsds": 0
      },
      "imageUri": "string",
      "instanceNames": [
        "string"
      ],
      "instanceReferences": [
        {
          "instanceId": "string",
          "instanceName": "string",
          "publicEciesKey": "string",
          "publicKey": "string"
        }
      ],
      "isPreemptible": true,
      "machineTypeUri": "string",
      "managedGroupConfig": {
        "instanceGroupManagerName": "string",
        "instanceTemplateName": "string"
      },
      "minCpuPlatform": "string",
      "numInstances": 0,
      "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
    },
    "metastoreConfig": {
      "dataprocMetastoreService": "string"
    },
    "secondaryWorkerConfig": {
      "accelerators": [
        {
          "acceleratorCount": 0,
          "acceleratorTypeUri": "string"
        }
      ],
      "diskConfig": {
        "bootDiskSizeGb": 0,
        "bootDiskType": "string",
        "localSsdInterface": "string",
        "numLocalSsds": 0
      },
      "imageUri": "string",
      "instanceNames": [
        "string"
      ],
      "instanceReferences": [
        {
          "instanceId": "string",
          "instanceName": "string",
          "publicEciesKey": "string",
          "publicKey": "string"
        }
      ],
      "isPreemptible": true,
      "machineTypeUri": "string",
      "managedGroupConfig": {
        "instanceGroupManagerName": "string",
        "instanceTemplateName": "string"
      },
      "minCpuPlatform": "string",
      "numInstances": 0,
      "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
    },
    "securityConfig": {
      "identityConfig": {
        "userServiceAccountMapping": {
          "property1": "string",
          "property2": "string"
        }
      },
      "kerberosConfig": {
        "crossRealmTrustAdminServer": "string",
        "crossRealmTrustKdc": "string",
        "crossRealmTrustRealm": "string",
        "crossRealmTrustSharedPasswordUri": "string",
        "enableKerberos": true,
        "kdcDbKeyUri": "string",
        "keyPasswordUri": "string",
        "keystorePasswordUri": "string",
        "keystoreUri": "string",
        "kmsKeyUri": "string",
        "realm": "string",
        "rootPrincipalPasswordUri": "string",
        "tgtLifetimeHours": 0,
        "truststorePasswordUri": "string",
        "truststoreUri": "string"
      }
    },
    "softwareConfig": {
      "imageVersion": "string",
      "optionalComponents": [
        "COMPONENT_UNSPECIFIED"
      ],
      "properties": {
        "property1": "string",
        "property2": "string"
      }
    },
    "tempBucket": "string",
    "workerConfig": {
      "accelerators": [
        {
          "acceleratorCount": 0,
          "acceleratorTypeUri": "string"
        }
      ],
      "diskConfig": {
        "bootDiskSizeGb": 0,
        "bootDiskType": "string",
        "localSsdInterface": "string",
        "numLocalSsds": 0
      },
      "imageUri": "string",
      "instanceNames": [
        "string"
      ],
      "instanceReferences": [
        {
          "instanceId": "string",
          "instanceName": "string",
          "publicEciesKey": "string",
          "publicKey": "string"
        }
      ],
      "isPreemptible": true,
      "machineTypeUri": "string",
      "managedGroupConfig": {
        "instanceGroupManagerName": "string",
        "instanceTemplateName": "string"
      },
      "minCpuPlatform": "string",
      "numInstances": 0,
      "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  }
}
```

Cluster that is managed by the workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterName|string|false|none|Required. The cluster name prefix. A unique cluster name will be formed by appending a random suffix.The name must contain only lower-case letters (a-z), numbers (0-9), and hyphens (-). Must begin with a letter. Cannot begin or end with hyphen. Must consist of between 2 and 35 characters.|
|config|[ClusterConfig](#schemaclusterconfig)|false|none|Required. The cluster configuration.|
|labels|object|false|none|Optional. The labels to associate with this cluster.Label keys must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62}Label values must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}\p{N}_-{0,63}No more than 32 labels can be associated with a given cluster.|

<h2 id="tocS_ManagedGroupConfig">ManagedGroupConfig</h2>
<!-- backwards compatibility -->
<a id="schemamanagedgroupconfig"></a>
<a id="schema_ManagedGroupConfig"></a>
<a id="tocSmanagedgroupconfig"></a>
<a id="tocsmanagedgroupconfig"></a>

```json
{
  "instanceGroupManagerName": "string",
  "instanceTemplateName": "string"
}
```

Specifies the resources used to actively manage an instance group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceGroupManagerName|string|false|read-only|Output only. The name of the Instance Group Manager for this group.|
|instanceTemplateName|string|false|read-only|Output only. The name of the Instance Template used for the Managed Instance Group.|

<h2 id="tocS_MetastoreConfig">MetastoreConfig</h2>
<!-- backwards compatibility -->
<a id="schemametastoreconfig"></a>
<a id="schema_MetastoreConfig"></a>
<a id="tocSmetastoreconfig"></a>
<a id="tocsmetastoreconfig"></a>

```json
{
  "dataprocMetastoreService": "string"
}
```

Specifies a Metastore configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataprocMetastoreService|string|false|none|Required. Resource name of an existing Dataproc Metastore service.Example: projects/[project_id]/locations/[dataproc_region]/services/[service-name]|

<h2 id="tocS_Metric">Metric</h2>
<!-- backwards compatibility -->
<a id="schemametric"></a>
<a id="schema_Metric"></a>
<a id="tocSmetric"></a>
<a id="tocsmetric"></a>

```json
{
  "metricOverrides": [
    "string"
  ],
  "metricSource": "METRIC_SOURCE_UNSPECIFIED"
}
```

A Dataproc OSS metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricOverrides|[string]|false|none|Optional. Specify one or more available OSS metrics (https://cloud.google.com/dataproc/docs/guides/monitoring#available_oss_metrics) to collect for the metric course (for the SPARK metric source, any Spark metric (https://spark.apache.org/docs/latest/monitoring.html#metrics) can be specified).Provide metrics in the following format: METRIC_SOURCE: INSTANCE:GROUP:METRIC Use camelcase as appropriate.Examples: yarn:ResourceManager:QueueMetrics:AppsCompleted spark:driver:DAGScheduler:job.allJobs sparkHistoryServer:JVM:Memory:NonHeapMemoryUsage.committed hiveserver2:JVM:Memory:NonHeapMemoryUsage.used Notes: Only the specified overridden metrics will be collected for the metric source. For example, if one or more spark:executive metrics are listed as metric overrides, other SPARK metrics will not be collected. The collection of the default metrics for other OSS metric sources is unaffected. For example, if both SPARK andd YARN metric sources are enabled, and overrides are provided for Spark metrics only, all default YARN metrics will be collected.|
|metricSource|string|false|none|Required. Default metrics are collected unless metricOverrides are specified for the metric source (see Available OSS metrics (https://cloud.google.com/dataproc/docs/guides/monitoring#available_oss_metrics) for more information).|

#### Enumerated Values

|Property|Value|
|---|---|
|metricSource|METRIC_SOURCE_UNSPECIFIED|
|metricSource|MONITORING_AGENT_DEFAULTS|
|metricSource|HDFS|
|metricSource|SPARK|
|metricSource|YARN|
|metricSource|SPARK_HISTORY_SERVER|
|metricSource|HIVESERVER2|
|metricSource|HIVEMETASTORE|

<h2 id="tocS_NamespacedGkeDeploymentTarget">NamespacedGkeDeploymentTarget</h2>
<!-- backwards compatibility -->
<a id="schemanamespacedgkedeploymenttarget"></a>
<a id="schema_NamespacedGkeDeploymentTarget"></a>
<a id="tocSnamespacedgkedeploymenttarget"></a>
<a id="tocsnamespacedgkedeploymenttarget"></a>

```json
{
  "clusterNamespace": "string",
  "targetGkeCluster": "string"
}
```

Deprecated. Used only for the deprecated beta. A full, namespace-isolated deployment target for an existing GKE cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterNamespace|string|false|none|Optional. A namespace within the GKE cluster to deploy into.|
|targetGkeCluster|string|false|none|Optional. The target GKE cluster to deploy to. Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}'|

<h2 id="tocS_NodeGroup">NodeGroup</h2>
<!-- backwards compatibility -->
<a id="schemanodegroup"></a>
<a id="schema_NodeGroup"></a>
<a id="tocSnodegroup"></a>
<a id="tocsnodegroup"></a>

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "nodeGroupConfig": {
    "accelerators": [
      {
        "acceleratorCount": 0,
        "acceleratorTypeUri": "string"
      }
    ],
    "diskConfig": {
      "bootDiskSizeGb": 0,
      "bootDiskType": "string",
      "localSsdInterface": "string",
      "numLocalSsds": 0
    },
    "imageUri": "string",
    "instanceNames": [
      "string"
    ],
    "instanceReferences": [
      {
        "instanceId": "string",
        "instanceName": "string",
        "publicEciesKey": "string",
        "publicKey": "string"
      }
    ],
    "isPreemptible": true,
    "machineTypeUri": "string",
    "managedGroupConfig": {
      "instanceGroupManagerName": "string",
      "instanceTemplateName": "string"
    },
    "minCpuPlatform": "string",
    "numInstances": 0,
    "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
  },
  "roles": [
    "ROLE_UNSPECIFIED"
  ]
}
```

Dataproc Node Group. The Dataproc NodeGroup resource is not related to the Dataproc NodeGroupAffinity resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|object|false|none|Optional. Node group labels. Label keys must consist of from 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values can be empty. If specified, they must consist of from 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). The node group must have no more than 32 labelsn.|
|name|string|false|none|The Node group resource name (https://aip.dev/122).|
|nodeGroupConfig|[InstanceGroupConfig](#schemainstancegroupconfig)|false|none|Optional. The node group instance group configuration.|
|roles|[string]|false|none|Required. Node group roles.|

#### Enumerated Values

|Property|Value|
|---|---|
|roles|ROLE_UNSPECIFIED|
|roles|DRIVER|

<h2 id="tocS_NodeGroupAffinity">NodeGroupAffinity</h2>
<!-- backwards compatibility -->
<a id="schemanodegroupaffinity"></a>
<a id="schema_NodeGroupAffinity"></a>
<a id="tocSnodegroupaffinity"></a>
<a id="tocsnodegroupaffinity"></a>

```json
{
  "nodeGroupUri": "string"
}
```

Node Group Affinity for clusters using sole-tenant node groups. The Dataproc NodeGroupAffinity resource is not related to the Dataproc NodeGroup resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodeGroupUri|string|false|none|Required. The URI of a sole-tenant node group resource (https://cloud.google.com/compute/docs/reference/rest/v1/nodeGroups) that the cluster will be created on.A full URL, partial URI, or node group name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]/nodeGroups/node-group-1 projects/[project_id]/zones/[zone]/nodeGroups/node-group-1 node-group-1|

<h2 id="tocS_NodeGroupOperationMetadata">NodeGroupOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemanodegroupoperationmetadata"></a>
<a id="schema_NodeGroupOperationMetadata"></a>
<a id="tocSnodegroupoperationmetadata"></a>
<a id="tocsnodegroupoperationmetadata"></a>

```json
{
  "clusterUuid": "string",
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "nodeGroupId": "string",
  "operationType": "NODE_GROUP_OPERATION_TYPE_UNSPECIFIED",
  "status": {
    "details": "string",
    "innerState": "string",
    "state": "UNKNOWN",
    "stateStartTime": "string"
  },
  "statusHistory": [
    {
      "details": "string",
      "innerState": "string",
      "state": "UNKNOWN",
      "stateStartTime": "string"
    }
  ],
  "warnings": [
    "string"
  ]
}
```

Metadata describing the node group operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterUuid|string|false|read-only|Output only. Cluster UUID associated with the node group operation.|
|description|string|false|read-only|Output only. Short description of operation.|
|labels|object|false|read-only|Output only. Labels associated with the operation.|
|nodeGroupId|string|false|read-only|Output only. Node group ID for the operation.|
|operationType|string|false|none|The operation type.|
|status|[ClusterOperationStatus](#schemaclusteroperationstatus)|false|none|Output only. Current operation status.|
|statusHistory|[[ClusterOperationStatus](#schemaclusteroperationstatus)]|false|read-only|Output only. The previous operation status.|
|warnings|[string]|false|read-only|Output only. Errors encountered during operation execution.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|NODE_GROUP_OPERATION_TYPE_UNSPECIFIED|
|operationType|CREATE|
|operationType|UPDATE|
|operationType|DELETE|
|operationType|RESIZE|

<h2 id="tocS_NodeInitializationAction">NodeInitializationAction</h2>
<!-- backwards compatibility -->
<a id="schemanodeinitializationaction"></a>
<a id="schema_NodeInitializationAction"></a>
<a id="tocSnodeinitializationaction"></a>
<a id="tocsnodeinitializationaction"></a>

```json
{
  "executableFile": "string",
  "executionTimeout": "string"
}
```

Specifies an executable to run on a fully configured node and a timeout period for executable completion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executableFile|string|false|none|Required. Cloud Storage URI of executable file.|
|executionTimeout|string(google-duration)|false|none|Optional. Amount of time executable has to complete. Default is 10 minutes (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).Cluster creation fails with an explanatory error message (the name of the executable that caused the error and the exceeded timeout period) if the executable is not completed at end of the timeout period.|

<h2 id="tocS_NodePool">NodePool</h2>
<!-- backwards compatibility -->
<a id="schemanodepool"></a>
<a id="schema_NodePool"></a>
<a id="tocSnodepool"></a>
<a id="tocsnodepool"></a>

```json
{
  "id": "string",
  "instanceNames": [
    "string"
  ],
  "repairAction": "REPAIR_ACTION_UNSPECIFIED"
}
```

indicating a list of workers of same type

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Required. A unique id of the node pool. Primary and Secondary workers can be specified using special reserved ids PRIMARY_WORKER_POOL and SECONDARY_WORKER_POOL respectively. Aux node pools can be referenced using corresponding pool id.|
|instanceNames|[string]|false|none|Name of instances to be repaired. These instances must belong to specified node pool.|
|repairAction|string|false|none|Required. Repair action to take on specified resources of the node pool.|

#### Enumerated Values

|Property|Value|
|---|---|
|repairAction|REPAIR_ACTION_UNSPECIFIED|
|repairAction|DELETE|

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
|done|boolean|false|none|If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available.|
|error|[Status](#schemastatus)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse.|

<h2 id="tocS_OrderedJob">OrderedJob</h2>
<!-- backwards compatibility -->
<a id="schemaorderedjob"></a>
<a id="schema_OrderedJob"></a>
<a id="tocSorderedjob"></a>
<a id="tocsorderedjob"></a>

```json
{
  "hadoopJob": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "mainClass": "string",
    "mainJarFileUri": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "hiveJob": {
    "continueOnFailure": true,
    "jarFileUris": [
      "string"
    ],
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    },
    "scriptVariables": {
      "property1": "string",
      "property2": "string"
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "pigJob": {
    "continueOnFailure": true,
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    },
    "scriptVariables": {
      "property1": "string",
      "property2": "string"
    }
  },
  "prerequisiteStepIds": [
    "string"
  ],
  "prestoJob": {
    "clientTags": [
      "string"
    ],
    "continueOnFailure": true,
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "outputFormat": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    }
  },
  "pysparkJob": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "mainPythonFileUri": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "pythonFileUris": [
      "string"
    ]
  },
  "scheduling": {
    "maxFailuresPerHour": 0,
    "maxFailuresTotal": 0
  },
  "sparkJob": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "mainClass": "string",
    "mainJarFileUri": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "sparkRJob": {
    "archiveUris": [
      "string"
    ],
    "args": [
      "string"
    ],
    "fileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "mainRFileUri": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "sparkSqlJob": {
    "jarFileUris": [
      "string"
    ],
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    },
    "scriptVariables": {
      "property1": "string",
      "property2": "string"
    }
  },
  "stepId": "string",
  "trinoJob": {
    "clientTags": [
      "string"
    ],
    "continueOnFailure": true,
    "loggingConfig": {
      "driverLogLevels": {
        "property1": "LEVEL_UNSPECIFIED",
        "property2": "LEVEL_UNSPECIFIED"
      }
    },
    "outputFormat": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "queryFileUri": "string",
    "queryList": {
      "queries": [
        "string"
      ]
    }
  }
}
```

A job executed by the workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hadoopJob|[HadoopJob](#schemahadoopjob)|false|none|Optional. Job is a Hadoop job.|
|hiveJob|[HiveJob](#schemahivejob)|false|none|Optional. Job is a Hive job.|
|labels|object|false|none|Optional. The labels to associate with this job.Label keys must be between 1 and 63 characters long, and must conform to the following regular expression: \p{Ll}\p{Lo}{0,62}Label values must be between 1 and 63 characters long, and must conform to the following regular expression: \p{Ll}\p{Lo}\p{N}_-{0,63}No more than 32 labels can be associated with a given job.|
|pigJob|[PigJob](#schemapigjob)|false|none|Optional. Job is a Pig job.|
|prerequisiteStepIds|[string]|false|none|Optional. The optional list of prerequisite job step_ids. If not specified, the job will start at the beginning of workflow.|
|prestoJob|[PrestoJob](#schemaprestojob)|false|none|Optional. Job is a Presto job.|
|pysparkJob|[PySparkJob](#schemapysparkjob)|false|none|Optional. Job is a PySpark job.|
|scheduling|[JobScheduling](#schemajobscheduling)|false|none|Optional. Job scheduling configuration.|
|sparkJob|[SparkJob](#schemasparkjob)|false|none|Optional. Job is a Spark job.|
|sparkRJob|[SparkRJob](#schemasparkrjob)|false|none|Optional. Job is a SparkR job.|
|sparkSqlJob|[SparkSqlJob](#schemasparksqljob)|false|none|Optional. Job is a SparkSql job.|
|stepId|string|false|none|Required. The step id. The id must be unique among all jobs within the template.The step id is used as prefix for job id, as job goog-dataproc-workflow-step-id label, and in prerequisiteStepIds field from other steps.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters.|
|trinoJob|[TrinoJob](#schematrinojob)|false|none|Optional. Job is a Trino job.|

<h2 id="tocS_ParameterValidation">ParameterValidation</h2>
<!-- backwards compatibility -->
<a id="schemaparametervalidation"></a>
<a id="schema_ParameterValidation"></a>
<a id="tocSparametervalidation"></a>
<a id="tocsparametervalidation"></a>

```json
{
  "regex": {
    "regexes": [
      "string"
    ]
  },
  "values": {
    "values": [
      "string"
    ]
  }
}
```

Configuration for parameter validation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|regex|[RegexValidation](#schemaregexvalidation)|false|none|Validation based on regular expressions.|
|values|[ValueValidation](#schemavaluevalidation)|false|none|Validation based on a list of allowed values.|

<h2 id="tocS_PeripheralsConfig">PeripheralsConfig</h2>
<!-- backwards compatibility -->
<a id="schemaperipheralsconfig"></a>
<a id="schema_PeripheralsConfig"></a>
<a id="tocSperipheralsconfig"></a>
<a id="tocsperipheralsconfig"></a>

```json
{
  "metastoreService": "string",
  "sparkHistoryServerConfig": {
    "dataprocCluster": "string"
  }
}
```

Auxiliary services configuration for a workload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metastoreService|string|false|none|Optional. Resource name of an existing Dataproc Metastore service.Example: projects/[project_id]/locations/[region]/services/[service_id]|
|sparkHistoryServerConfig|[SparkHistoryServerConfig](#schemasparkhistoryserverconfig)|false|none|Optional. The Spark History Server configuration for the workload.|

<h2 id="tocS_PigJob">PigJob</h2>
<!-- backwards compatibility -->
<a id="schemapigjob"></a>
<a id="schema_PigJob"></a>
<a id="tocSpigjob"></a>
<a id="tocspigjob"></a>

```json
{
  "continueOnFailure": true,
  "jarFileUris": [
    "string"
  ],
  "loggingConfig": {
    "driverLogLevels": {
      "property1": "LEVEL_UNSPECIFIED",
      "property2": "LEVEL_UNSPECIFIED"
    }
  },
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "queryFileUri": "string",
  "queryList": {
    "queries": [
      "string"
    ]
  },
  "scriptVariables": {
    "property1": "string",
    "property2": "string"
  }
}
```

A Dataproc job for running Apache Pig (https://pig.apache.org/) queries on YARN.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|continueOnFailure|boolean|false|none|Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries.|
|jarFileUris|[string]|false|none|Optional. HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs.|
|loggingConfig|[LoggingConfig](#schemaloggingconfig)|false|none|Optional. The runtime log config for job execution.|
|properties|object|false|none|Optional. A mapping of property names to values, used to configure Pig. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code.|
|queryFileUri|string|false|none|The HCFS URI of the script that contains the Pig queries.|
|queryList|[QueryList](#schemaquerylist)|false|none|A list of queries.|
|scriptVariables|object|false|none|Optional. Mapping of query variable names to values (equivalent to the Pig command: name=[value]).|

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

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
  "version": 0
}
```

An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.A Policy is a collection of bindings. A binding binds one or more members, or principals, to a single role. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role.For some types of Google Cloud resources, a binding can also specify a condition, which is a logical expression that allows access to a resource only if the expression evaluates to true. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).JSON example: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } YAML example: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the IAM documentation (https://cloud.google.com/iam/docs/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bindings|[[Binding](#schemabinding)]|false|none|Associates a list of members, or principals, with a role. Optionally, may specify a condition that determines how and when the bindings are applied. Each of the bindings must contain at least one principal.The bindings in a Policy can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the bindings grant 50 different roles to user:alice@example.com, and not to any other principal, then you can add another 1,450 principals to the bindings in the Policy.|
|etag|string(byte)|false|none|etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An etag is returned in the response to getIamPolicy, and systems are expected to put that etag in the request to setIamPolicy to ensure that their change will be applied to the same version of the policy.Important: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost.|
|version|integer(int32)|false|none|Specifies the format of the policy.Valid values are 0, 1, and 3. Requests that specify an invalid value are rejected.Any operation that affects conditional role bindings must specify version 3. This requirement applies to the following operations: Getting a policy that includes a conditional role binding Adding a conditional role binding to a policy Changing a conditional role binding in a policy Removing any role binding, with or without a condition, from a policy that includes conditionsImportant: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost.If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_PrestoJob">PrestoJob</h2>
<!-- backwards compatibility -->
<a id="schemaprestojob"></a>
<a id="schema_PrestoJob"></a>
<a id="tocSprestojob"></a>
<a id="tocsprestojob"></a>

```json
{
  "clientTags": [
    "string"
  ],
  "continueOnFailure": true,
  "loggingConfig": {
    "driverLogLevels": {
      "property1": "LEVEL_UNSPECIFIED",
      "property2": "LEVEL_UNSPECIFIED"
    }
  },
  "outputFormat": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "queryFileUri": "string",
  "queryList": {
    "queries": [
      "string"
    ]
  }
}
```

A Dataproc job for running Presto (https://prestosql.io/) queries. IMPORTANT: The Dataproc Presto Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/presto) must be enabled when the cluster is created to submit a Presto job to the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientTags|[string]|false|none|Optional. Presto client tags to attach to this query|
|continueOnFailure|boolean|false|none|Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries.|
|loggingConfig|[LoggingConfig](#schemaloggingconfig)|false|none|Optional. The runtime log config for job execution.|
|outputFormat|string|false|none|Optional. The format in which query output will be displayed. See the Presto documentation for supported output formats|
|properties|object|false|none|Optional. A mapping of property names to values. Used to set Presto session properties (https://prestodb.io/docs/current/sql/set-session.html) Equivalent to using the --session flag in the Presto CLI|
|queryFileUri|string|false|none|The HCFS URI of the script that contains SQL queries.|
|queryList|[QueryList](#schemaquerylist)|false|none|A list of queries.|

<h2 id="tocS_PySparkBatch">PySparkBatch</h2>
<!-- backwards compatibility -->
<a id="schemapysparkbatch"></a>
<a id="schema_PySparkBatch"></a>
<a id="tocSpysparkbatch"></a>
<a id="tocspysparkbatch"></a>

```json
{
  "archiveUris": [
    "string"
  ],
  "args": [
    "string"
  ],
  "fileUris": [
    "string"
  ],
  "jarFileUris": [
    "string"
  ],
  "mainPythonFileUri": "string",
  "pythonFileUris": [
    "string"
  ]
}
```

A configuration for running an Apache PySpark (https://spark.apache.org/docs/latest/api/python/getting_started/quickstart.html) batch workload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archiveUris|[string]|false|none|Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.|
|args|[string]|false|none|Optional. The arguments to pass to the driver. Do not include arguments that can be set as batch properties, such as --conf, since a collision can occur that causes an incorrect batch submission.|
|fileUris|[string]|false|none|Optional. HCFS URIs of files to be placed in the working directory of each executor.|
|jarFileUris|[string]|false|none|Optional. HCFS URIs of jar files to add to the classpath of the Spark driver and tasks.|
|mainPythonFileUri|string|false|none|Required. The HCFS URI of the main Python file to use as the Spark driver. Must be a .py file.|
|pythonFileUris|[string]|false|none|Optional. HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.|

<h2 id="tocS_PySparkJob">PySparkJob</h2>
<!-- backwards compatibility -->
<a id="schemapysparkjob"></a>
<a id="schema_PySparkJob"></a>
<a id="tocSpysparkjob"></a>
<a id="tocspysparkjob"></a>

```json
{
  "archiveUris": [
    "string"
  ],
  "args": [
    "string"
  ],
  "fileUris": [
    "string"
  ],
  "jarFileUris": [
    "string"
  ],
  "loggingConfig": {
    "driverLogLevels": {
      "property1": "LEVEL_UNSPECIFIED",
      "property2": "LEVEL_UNSPECIFIED"
    }
  },
  "mainPythonFileUri": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "pythonFileUris": [
    "string"
  ]
}
```

A Dataproc job for running Apache PySpark (https://spark.apache.org/docs/0.9.0/python-programming-guide.html) applications on YARN.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archiveUris|[string]|false|none|Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.|
|args|[string]|false|none|Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission.|
|fileUris|[string]|false|none|Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.|
|jarFileUris|[string]|false|none|Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.|
|loggingConfig|[LoggingConfig](#schemaloggingconfig)|false|none|Optional. The runtime log config for job execution.|
|mainPythonFileUri|string|false|none|Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file.|
|properties|object|false|none|Optional. A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.|
|pythonFileUris|[string]|false|none|Optional. HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.|

<h2 id="tocS_QueryList">QueryList</h2>
<!-- backwards compatibility -->
<a id="schemaquerylist"></a>
<a id="schema_QueryList"></a>
<a id="tocSquerylist"></a>
<a id="tocsquerylist"></a>

```json
{
  "queries": [
    "string"
  ]
}
```

A list of queries to run on a cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queries|[string]|false|none|Required. The queries to execute. You do not need to end a query expression with a semicolon. Multiple queries can be specified in one string by separating each with a semicolon. Here is an example of a Dataproc API snippet that uses a QueryList to specify a HiveJob: "hiveJob": { "queryList": { "queries": [ "query1", "query2", "query3;query4", ] } } |

<h2 id="tocS_RegexValidation">RegexValidation</h2>
<!-- backwards compatibility -->
<a id="schemaregexvalidation"></a>
<a id="schema_RegexValidation"></a>
<a id="tocSregexvalidation"></a>
<a id="tocsregexvalidation"></a>

```json
{
  "regexes": [
    "string"
  ]
}
```

Validation based on regular expressions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|regexes|[string]|false|none|Required. RE2 regular expressions used to validate the parameter's value. The value must match the regex in its entirety (substring matches are not sufficient).|

<h2 id="tocS_RepairClusterRequest">RepairClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemarepairclusterrequest"></a>
<a id="schema_RepairClusterRequest"></a>
<a id="tocSrepairclusterrequest"></a>
<a id="tocsrepairclusterrequest"></a>

```json
{
  "clusterUuid": "string",
  "gracefulDecommissionTimeout": "string",
  "nodePools": [
    {
      "id": "string",
      "instanceNames": [
        "string"
      ],
      "repairAction": "REPAIR_ACTION_UNSPECIFIED"
    }
  ],
  "parentOperationId": "string",
  "requestId": "string"
}
```

A request to repair a cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterUuid|string|false|none|Optional. Specifying the cluster_uuid means the RPC will fail (with error NOT_FOUND) if a cluster with the specified UUID does not exist.|
|gracefulDecommissionTimeout|string(google-duration)|false|none|Optional. Timeout for graceful YARN decommissioning. Graceful decommissioning facilitates the removal of cluster nodes without interrupting jobs in progress. The timeout specifies the amount of time to wait for jobs finish before forcefully removing nodes. The default timeout is 0 for forceful decommissioning, and the maximum timeout period is 1 day. (see JSON Mapping—Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).graceful_decommission_timeout is supported in Dataproc image versions 1.2+.|
|nodePools|[[NodePool](#schemanodepool)]|false|none|Optional. Node pools and corresponding repair action to be taken. All node pools should be unique in this request. i.e. Multiple entries for the same node pool id are not allowed.|
|parentOperationId|string|false|none|Optional. operation id of the parent operation sending the repair request|
|requestId|string|false|none|Optional. A unique ID used to identify the request. If the server receives two RepairClusterRequests with the same ID, the second request is ignored, and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.|

<h2 id="tocS_ReservationAffinity">ReservationAffinity</h2>
<!-- backwards compatibility -->
<a id="schemareservationaffinity"></a>
<a id="schema_ReservationAffinity"></a>
<a id="tocSreservationaffinity"></a>
<a id="tocsreservationaffinity"></a>

```json
{
  "consumeReservationType": "TYPE_UNSPECIFIED",
  "key": "string",
  "values": [
    "string"
  ]
}
```

Reservation Affinity for consuming Zonal reservation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consumeReservationType|string|false|none|Optional. Type of reservation to consume|
|key|string|false|none|Optional. Corresponds to the label key of reservation resource.|
|values|[string]|false|none|Optional. Corresponds to the label values of reservation resource.|

#### Enumerated Values

|Property|Value|
|---|---|
|consumeReservationType|TYPE_UNSPECIFIED|
|consumeReservationType|NO_RESERVATION|
|consumeReservationType|ANY_RESERVATION|
|consumeReservationType|SPECIFIC_RESERVATION|

<h2 id="tocS_ResizeNodeGroupRequest">ResizeNodeGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresizenodegrouprequest"></a>
<a id="schema_ResizeNodeGroupRequest"></a>
<a id="tocSresizenodegrouprequest"></a>
<a id="tocsresizenodegrouprequest"></a>

```json
{
  "gracefulDecommissionTimeout": "string",
  "requestId": "string",
  "size": 0
}
```

A request to resize a node group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gracefulDecommissionTimeout|string(google-duration)|false|none|Optional. Timeout for graceful YARN decommissioning. Graceful decommissioning (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/scaling-clusters#graceful_decommissioning) allows the removal of nodes from the Compute Engine node group without interrupting jobs in progress. This timeout specifies how long to wait for jobs in progress to finish before forcefully removing nodes (and potentially interrupting jobs). Default timeout is 0 (for forceful decommission), and the maximum allowed timeout is 1 day. (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).Only supported on Dataproc image versions 1.2 and higher.|
|requestId|string|false|none|Optional. A unique ID used to identify the request. If the server receives two ResizeNodeGroupRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.ResizeNodeGroupRequests) with the same ID, the second request is ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.|
|size|integer(int32)|false|none|Required. The number of running instances for the node group to maintain. The group adds or removes instances to maintain the number of instances specified by this parameter.|

<h2 id="tocS_RuntimeConfig">RuntimeConfig</h2>
<!-- backwards compatibility -->
<a id="schemaruntimeconfig"></a>
<a id="schema_RuntimeConfig"></a>
<a id="tocSruntimeconfig"></a>
<a id="tocsruntimeconfig"></a>

```json
{
  "containerImage": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "version": "string"
}
```

Runtime configuration for a workload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerImage|string|false|none|Optional. Optional custom container image for the job runtime environment. If not specified, a default container image will be used.|
|properties|object|false|none|Optional. A mapping of property names to values, which are used to configure workload execution.|
|version|string|false|none|Optional. Version of the batch runtime.|

<h2 id="tocS_RuntimeInfo">RuntimeInfo</h2>
<!-- backwards compatibility -->
<a id="schemaruntimeinfo"></a>
<a id="schema_RuntimeInfo"></a>
<a id="tocSruntimeinfo"></a>
<a id="tocsruntimeinfo"></a>

```json
{
  "approximateUsage": {
    "milliDcuSeconds": "string",
    "shuffleStorageGbSeconds": "string"
  },
  "currentUsage": {
    "milliDcu": "string",
    "shuffleStorageGb": "string",
    "snapshotTime": "string"
  },
  "diagnosticOutputUri": "string",
  "endpoints": {
    "property1": "string",
    "property2": "string"
  },
  "outputUri": "string"
}
```

Runtime information about workload execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approximateUsage|[UsageMetrics](#schemausagemetrics)|false|none|Output only. Approximate workload resource usage calculated after workload finishes (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)).|
|currentUsage|[UsageSnapshot](#schemausagesnapshot)|false|none|Output only. Snapshot of current workload resource usage.|
|diagnosticOutputUri|string|false|read-only|Output only. A URI pointing to the location of the diagnostics tarball.|
|endpoints|object|false|read-only|Output only. Map of remote access endpoints (such as web interfaces and APIs) to their URIs.|
|outputUri|string|false|read-only|Output only. A URI pointing to the location of the stdout and stderr of the workload.|

<h2 id="tocS_SecurityConfig">SecurityConfig</h2>
<!-- backwards compatibility -->
<a id="schemasecurityconfig"></a>
<a id="schema_SecurityConfig"></a>
<a id="tocSsecurityconfig"></a>
<a id="tocssecurityconfig"></a>

```json
{
  "identityConfig": {
    "userServiceAccountMapping": {
      "property1": "string",
      "property2": "string"
    }
  },
  "kerberosConfig": {
    "crossRealmTrustAdminServer": "string",
    "crossRealmTrustKdc": "string",
    "crossRealmTrustRealm": "string",
    "crossRealmTrustSharedPasswordUri": "string",
    "enableKerberos": true,
    "kdcDbKeyUri": "string",
    "keyPasswordUri": "string",
    "keystorePasswordUri": "string",
    "keystoreUri": "string",
    "kmsKeyUri": "string",
    "realm": "string",
    "rootPrincipalPasswordUri": "string",
    "tgtLifetimeHours": 0,
    "truststorePasswordUri": "string",
    "truststoreUri": "string"
  }
}
```

Security related configuration, including encryption, Kerberos, etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identityConfig|[IdentityConfig](#schemaidentityconfig)|false|none|Optional. Identity related configuration, including service account based secure multi-tenancy user mappings.|
|kerberosConfig|[KerberosConfig](#schemakerberosconfig)|false|none|Optional. Kerberos related configuration.|

<h2 id="tocS_SessionOperationMetadata">SessionOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemasessionoperationmetadata"></a>
<a id="schema_SessionOperationMetadata"></a>
<a id="tocSsessionoperationmetadata"></a>
<a id="tocssessionoperationmetadata"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "doneTime": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "operationType": "SESSION_OPERATION_TYPE_UNSPECIFIED",
  "session": "string",
  "sessionUuid": "string",
  "warnings": [
    "string"
  ]
}
```

Metadata describing the Session operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The time when the operation was created.|
|description|string|false|none|Short description of the operation.|
|doneTime|string(google-datetime)|false|none|The time when the operation was finished.|
|labels|object|false|none|Labels associated with the operation.|
|operationType|string|false|none|The operation type.|
|session|string|false|none|Name of the session for the operation.|
|sessionUuid|string|false|none|Session UUID for the operation.|
|warnings|[string]|false|none|Warnings encountered during operation execution.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|SESSION_OPERATION_TYPE_UNSPECIFIED|
|operationType|CREATE|
|operationType|TERMINATE|
|operationType|DELETE|

<h2 id="tocS_SetIamPolicyRequest">SetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetiampolicyrequest"></a>
<a id="schema_SetIamPolicyRequest"></a>
<a id="tocSsetiampolicyrequest"></a>
<a id="tocssetiampolicyrequest"></a>

```json
{
  "policy": {
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

Request message for SetIamPolicy method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|[Policy](#schemapolicy)|false|none|REQUIRED: The complete policy to be applied to the resource. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|

<h2 id="tocS_ShieldedInstanceConfig">ShieldedInstanceConfig</h2>
<!-- backwards compatibility -->
<a id="schemashieldedinstanceconfig"></a>
<a id="schema_ShieldedInstanceConfig"></a>
<a id="tocSshieldedinstanceconfig"></a>
<a id="tocsshieldedinstanceconfig"></a>

```json
{
  "enableIntegrityMonitoring": true,
  "enableSecureBoot": true,
  "enableVtpm": true
}
```

Shielded Instance Config for clusters using Compute Engine Shielded VMs (https://cloud.google.com/security/shielded-cloud/shielded-vm).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableIntegrityMonitoring|boolean|false|none|Optional. Defines whether instances have integrity monitoring enabled.|
|enableSecureBoot|boolean|false|none|Optional. Defines whether instances have Secure Boot enabled.|
|enableVtpm|boolean|false|none|Optional. Defines whether instances have the vTPM enabled.|

<h2 id="tocS_SoftwareConfig">SoftwareConfig</h2>
<!-- backwards compatibility -->
<a id="schemasoftwareconfig"></a>
<a id="schema_SoftwareConfig"></a>
<a id="tocSsoftwareconfig"></a>
<a id="tocssoftwareconfig"></a>

```json
{
  "imageVersion": "string",
  "optionalComponents": [
    "COMPONENT_UNSPECIFIED"
  ],
  "properties": {
    "property1": "string",
    "property2": "string"
  }
}
```

Specifies the selection and config of software inside the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageVersion|string|false|none|Optional. The version of software inside the cluster. It must be one of the supported Dataproc Versions (https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#supported_dataproc_versions), such as "1.2" (including a subminor version, such as "1.2.29"), or the "preview" version (https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#other_versions). If unspecified, it defaults to the latest Debian version.|
|optionalComponents|[string]|false|none|Optional. The set of components to activate on the cluster.|
|properties|object|false|none|Optional. The properties to set on daemon config files.Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. The following are supported prefixes and their mappings: capacity-scheduler: capacity-scheduler.xml core: core-site.xml distcp: distcp-default.xml hdfs: hdfs-site.xml hive: hive-site.xml mapred: mapred-site.xml pig: pig.properties spark: spark-defaults.conf yarn: yarn-site.xmlFor more information, see Cluster properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties).|

#### Enumerated Values

|Property|Value|
|---|---|
|optionalComponents|COMPONENT_UNSPECIFIED|
|optionalComponents|ANACONDA|
|optionalComponents|DOCKER|
|optionalComponents|DRUID|
|optionalComponents|FLINK|
|optionalComponents|HBASE|
|optionalComponents|HIVE_WEBHCAT|
|optionalComponents|HUDI|
|optionalComponents|JUPYTER|
|optionalComponents|PRESTO|
|optionalComponents|TRINO|
|optionalComponents|RANGER|
|optionalComponents|SOLR|
|optionalComponents|ZEPPELIN|
|optionalComponents|ZOOKEEPER|

<h2 id="tocS_SparkBatch">SparkBatch</h2>
<!-- backwards compatibility -->
<a id="schemasparkbatch"></a>
<a id="schema_SparkBatch"></a>
<a id="tocSsparkbatch"></a>
<a id="tocssparkbatch"></a>

```json
{
  "archiveUris": [
    "string"
  ],
  "args": [
    "string"
  ],
  "fileUris": [
    "string"
  ],
  "jarFileUris": [
    "string"
  ],
  "mainClass": "string",
  "mainJarFileUri": "string"
}
```

A configuration for running an Apache Spark (https://spark.apache.org/) batch workload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archiveUris|[string]|false|none|Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.|
|args|[string]|false|none|Optional. The arguments to pass to the driver. Do not include arguments that can be set as batch properties, such as --conf, since a collision can occur that causes an incorrect batch submission.|
|fileUris|[string]|false|none|Optional. HCFS URIs of files to be placed in the working directory of each executor.|
|jarFileUris|[string]|false|none|Optional. HCFS URIs of jar files to add to the classpath of the Spark driver and tasks.|
|mainClass|string|false|none|Optional. The name of the driver main class. The jar file that contains the class must be in the classpath or specified in jar_file_uris.|
|mainJarFileUri|string|false|none|Optional. The HCFS URI of the jar file that contains the main class.|

<h2 id="tocS_SparkHistoryServerConfig">SparkHistoryServerConfig</h2>
<!-- backwards compatibility -->
<a id="schemasparkhistoryserverconfig"></a>
<a id="schema_SparkHistoryServerConfig"></a>
<a id="tocSsparkhistoryserverconfig"></a>
<a id="tocssparkhistoryserverconfig"></a>

```json
{
  "dataprocCluster": "string"
}
```

Spark History Server configuration for the workload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataprocCluster|string|false|none|Optional. Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.Example: projects/[project_id]/regions/[region]/clusters/[cluster_name]|

<h2 id="tocS_SparkJob">SparkJob</h2>
<!-- backwards compatibility -->
<a id="schemasparkjob"></a>
<a id="schema_SparkJob"></a>
<a id="tocSsparkjob"></a>
<a id="tocssparkjob"></a>

```json
{
  "archiveUris": [
    "string"
  ],
  "args": [
    "string"
  ],
  "fileUris": [
    "string"
  ],
  "jarFileUris": [
    "string"
  ],
  "loggingConfig": {
    "driverLogLevels": {
      "property1": "LEVEL_UNSPECIFIED",
      "property2": "LEVEL_UNSPECIFIED"
    }
  },
  "mainClass": "string",
  "mainJarFileUri": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  }
}
```

A Dataproc job for running Apache Spark (https://spark.apache.org/) applications on YARN.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archiveUris|[string]|false|none|Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.|
|args|[string]|false|none|Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission.|
|fileUris|[string]|false|none|Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.|
|jarFileUris|[string]|false|none|Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.|
|loggingConfig|[LoggingConfig](#schemaloggingconfig)|false|none|Optional. The runtime log config for job execution.|
|mainClass|string|false|none|The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in jar_file_uris.|
|mainJarFileUri|string|false|none|The HCFS URI of the jar file that contains the main class.|
|properties|object|false|none|Optional. A mapping of property names to values, used to configure Spark. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.|

<h2 id="tocS_SparkRBatch">SparkRBatch</h2>
<!-- backwards compatibility -->
<a id="schemasparkrbatch"></a>
<a id="schema_SparkRBatch"></a>
<a id="tocSsparkrbatch"></a>
<a id="tocssparkrbatch"></a>

```json
{
  "archiveUris": [
    "string"
  ],
  "args": [
    "string"
  ],
  "fileUris": [
    "string"
  ],
  "mainRFileUri": "string"
}
```

A configuration for running an Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) batch workload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archiveUris|[string]|false|none|Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.|
|args|[string]|false|none|Optional. The arguments to pass to the Spark driver. Do not include arguments that can be set as batch properties, such as --conf, since a collision can occur that causes an incorrect batch submission.|
|fileUris|[string]|false|none|Optional. HCFS URIs of files to be placed in the working directory of each executor.|
|mainRFileUri|string|false|none|Required. The HCFS URI of the main R file to use as the driver. Must be a .R or .r file.|

<h2 id="tocS_SparkRJob">SparkRJob</h2>
<!-- backwards compatibility -->
<a id="schemasparkrjob"></a>
<a id="schema_SparkRJob"></a>
<a id="tocSsparkrjob"></a>
<a id="tocssparkrjob"></a>

```json
{
  "archiveUris": [
    "string"
  ],
  "args": [
    "string"
  ],
  "fileUris": [
    "string"
  ],
  "loggingConfig": {
    "driverLogLevels": {
      "property1": "LEVEL_UNSPECIFIED",
      "property2": "LEVEL_UNSPECIFIED"
    }
  },
  "mainRFileUri": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  }
}
```

A Dataproc job for running Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) applications on YARN.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archiveUris|[string]|false|none|Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.|
|args|[string]|false|none|Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission.|
|fileUris|[string]|false|none|Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.|
|loggingConfig|[LoggingConfig](#schemaloggingconfig)|false|none|Optional. The runtime log config for job execution.|
|mainRFileUri|string|false|none|Required. The HCFS URI of the main R file to use as the driver. Must be a .R file.|
|properties|object|false|none|Optional. A mapping of property names to values, used to configure SparkR. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.|

<h2 id="tocS_SparkSqlBatch">SparkSqlBatch</h2>
<!-- backwards compatibility -->
<a id="schemasparksqlbatch"></a>
<a id="schema_SparkSqlBatch"></a>
<a id="tocSsparksqlbatch"></a>
<a id="tocssparksqlbatch"></a>

```json
{
  "jarFileUris": [
    "string"
  ],
  "queryFileUri": "string",
  "queryVariables": {
    "property1": "string",
    "property2": "string"
  }
}
```

A configuration for running Apache Spark SQL (https://spark.apache.org/sql/) queries as a batch workload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jarFileUris|[string]|false|none|Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH.|
|queryFileUri|string|false|none|Required. The HCFS URI of the script that contains Spark SQL queries to execute.|
|queryVariables|object|false|none|Optional. Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";).|

<h2 id="tocS_SparkSqlJob">SparkSqlJob</h2>
<!-- backwards compatibility -->
<a id="schemasparksqljob"></a>
<a id="schema_SparkSqlJob"></a>
<a id="tocSsparksqljob"></a>
<a id="tocssparksqljob"></a>

```json
{
  "jarFileUris": [
    "string"
  ],
  "loggingConfig": {
    "driverLogLevels": {
      "property1": "LEVEL_UNSPECIFIED",
      "property2": "LEVEL_UNSPECIFIED"
    }
  },
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "queryFileUri": "string",
  "queryList": {
    "queries": [
      "string"
    ]
  },
  "scriptVariables": {
    "property1": "string",
    "property2": "string"
  }
}
```

A Dataproc job for running Apache Spark SQL (https://spark.apache.org/sql/) queries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jarFileUris|[string]|false|none|Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH.|
|loggingConfig|[LoggingConfig](#schemaloggingconfig)|false|none|Optional. The runtime log config for job execution.|
|properties|object|false|none|Optional. A mapping of property names to values, used to configure Spark SQL's SparkConf. Properties that conflict with values set by the Dataproc API may be overwritten.|
|queryFileUri|string|false|none|The HCFS URI of the script that contains SQL queries.|
|queryList|[QueryList](#schemaquerylist)|false|none|A list of queries.|
|scriptVariables|object|false|none|Optional. Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";).|

<h2 id="tocS_SparkStandaloneAutoscalingConfig">SparkStandaloneAutoscalingConfig</h2>
<!-- backwards compatibility -->
<a id="schemasparkstandaloneautoscalingconfig"></a>
<a id="schema_SparkStandaloneAutoscalingConfig"></a>
<a id="tocSsparkstandaloneautoscalingconfig"></a>
<a id="tocssparkstandaloneautoscalingconfig"></a>

```json
{
  "gracefulDecommissionTimeout": "string",
  "scaleDownFactor": 0,
  "scaleDownMinWorkerFraction": 0,
  "scaleUpFactor": 0,
  "scaleUpMinWorkerFraction": 0
}
```

Basic autoscaling configurations for Spark Standalone.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gracefulDecommissionTimeout|string(google-duration)|false|none|Required. Timeout for Spark graceful decommissioning of spark workers. Specifies the duration to wait for spark worker to complete spark decommissioning tasks before forcefully removing workers. Only applicable to downscaling operations.Bounds: 0s, 1d.|
|scaleDownFactor|number(double)|false|none|Required. Fraction of required executors to remove from Spark Serverless clusters. A scale-down factor of 1.0 will result in scaling down so that there are no more executors for the Spark Job.(more aggressive scaling). A scale-down factor closer to 0 will result in a smaller magnitude of scaling donw (less aggressive scaling).Bounds: 0.0, 1.0.|
|scaleDownMinWorkerFraction|number(double)|false|none|Optional. Minimum scale-down threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0 means the autoscaler will scale down on any recommended change.Bounds: 0.0, 1.0. Default: 0.0.|
|scaleUpFactor|number(double)|false|none|Required. Fraction of required workers to add to Spark Standalone clusters. A scale-up factor of 1.0 will result in scaling up so that there are no more required workers for the Spark Job (more aggressive scaling). A scale-up factor closer to 0 will result in a smaller magnitude of scaling up (less aggressive scaling).Bounds: 0.0, 1.0.|
|scaleUpMinWorkerFraction|number(double)|false|none|Optional. Minimum scale-up threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2-worker scale-up for the cluster to scale. A threshold of 0 means the autoscaler will scale up on any recommended change.Bounds: 0.0, 1.0. Default: 0.0.|

<h2 id="tocS_StartClusterRequest">StartClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartclusterrequest"></a>
<a id="schema_StartClusterRequest"></a>
<a id="tocSstartclusterrequest"></a>
<a id="tocsstartclusterrequest"></a>

```json
{
  "clusterUuid": "string",
  "requestId": "string"
}
```

A request to start a cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterUuid|string|false|none|Optional. Specifying the cluster_uuid means the RPC will fail (with error NOT_FOUND) if a cluster with the specified UUID does not exist.|
|requestId|string|false|none|Optional. A unique ID used to identify the request. If the server receives two StartClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.StartClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.|

<h2 id="tocS_StateHistory">StateHistory</h2>
<!-- backwards compatibility -->
<a id="schemastatehistory"></a>
<a id="schema_StateHistory"></a>
<a id="tocSstatehistory"></a>
<a id="tocsstatehistory"></a>

```json
{
  "state": "STATE_UNSPECIFIED",
  "stateMessage": "string",
  "stateStartTime": "string"
}
```

Historical state information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|string|false|read-only|Output only. The state of the batch at this point in history.|
|stateMessage|string|false|read-only|Output only. Details about the state at this point in history.|
|stateStartTime|string(google-datetime)|false|read-only|Output only. The time when the batch entered the historical state.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|PENDING|
|state|RUNNING|
|state|CANCELLING|
|state|CANCELLED|
|state|SUCCEEDED|
|state|FAILED|

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

The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The status code, which should be an enum value of google.rpc.Code.|
|details|[object]|false|none|A list of messages that carry the error details. There is a common set of message types for APIs to use.|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.|

<h2 id="tocS_StopClusterRequest">StopClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopclusterrequest"></a>
<a id="schema_StopClusterRequest"></a>
<a id="tocSstopclusterrequest"></a>
<a id="tocsstopclusterrequest"></a>

```json
{
  "clusterUuid": "string",
  "requestId": "string"
}
```

A request to stop a cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterUuid|string|false|none|Optional. Specifying the cluster_uuid means the RPC will fail (with error NOT_FOUND) if a cluster with the specified UUID does not exist.|
|requestId|string|false|none|Optional. A unique ID used to identify the request. If the server receives two StopClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.StopClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.|

<h2 id="tocS_SubmitJobRequest">SubmitJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubmitjobrequest"></a>
<a id="schema_SubmitJobRequest"></a>
<a id="tocSsubmitjobrequest"></a>
<a id="tocssubmitjobrequest"></a>

```json
{
  "job": {
    "done": true,
    "driverControlFilesUri": "string",
    "driverOutputResourceUri": "string",
    "driverSchedulingConfig": {
      "memoryMb": 0,
      "vcores": 0
    },
    "hadoopJob": {
      "archiveUris": [
        "string"
      ],
      "args": [
        "string"
      ],
      "fileUris": [
        "string"
      ],
      "jarFileUris": [
        "string"
      ],
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "mainClass": "string",
      "mainJarFileUri": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      }
    },
    "hiveJob": {
      "continueOnFailure": true,
      "jarFileUris": [
        "string"
      ],
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "queryFileUri": "string",
      "queryList": {
        "queries": [
          "string"
        ]
      },
      "scriptVariables": {
        "property1": "string",
        "property2": "string"
      }
    },
    "jobUuid": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "pigJob": {
      "continueOnFailure": true,
      "jarFileUris": [
        "string"
      ],
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "queryFileUri": "string",
      "queryList": {
        "queries": [
          "string"
        ]
      },
      "scriptVariables": {
        "property1": "string",
        "property2": "string"
      }
    },
    "placement": {
      "clusterLabels": {
        "property1": "string",
        "property2": "string"
      },
      "clusterName": "string",
      "clusterUuid": "string"
    },
    "prestoJob": {
      "clientTags": [
        "string"
      ],
      "continueOnFailure": true,
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "outputFormat": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "queryFileUri": "string",
      "queryList": {
        "queries": [
          "string"
        ]
      }
    },
    "pysparkJob": {
      "archiveUris": [
        "string"
      ],
      "args": [
        "string"
      ],
      "fileUris": [
        "string"
      ],
      "jarFileUris": [
        "string"
      ],
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "mainPythonFileUri": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "pythonFileUris": [
        "string"
      ]
    },
    "reference": {
      "jobId": "string",
      "projectId": "string"
    },
    "scheduling": {
      "maxFailuresPerHour": 0,
      "maxFailuresTotal": 0
    },
    "sparkJob": {
      "archiveUris": [
        "string"
      ],
      "args": [
        "string"
      ],
      "fileUris": [
        "string"
      ],
      "jarFileUris": [
        "string"
      ],
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "mainClass": "string",
      "mainJarFileUri": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      }
    },
    "sparkRJob": {
      "archiveUris": [
        "string"
      ],
      "args": [
        "string"
      ],
      "fileUris": [
        "string"
      ],
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "mainRFileUri": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      }
    },
    "sparkSqlJob": {
      "jarFileUris": [
        "string"
      ],
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "queryFileUri": "string",
      "queryList": {
        "queries": [
          "string"
        ]
      },
      "scriptVariables": {
        "property1": "string",
        "property2": "string"
      }
    },
    "status": {
      "details": "string",
      "state": "STATE_UNSPECIFIED",
      "stateStartTime": "string",
      "substate": "UNSPECIFIED"
    },
    "statusHistory": [
      {
        "details": "string",
        "state": "STATE_UNSPECIFIED",
        "stateStartTime": "string",
        "substate": "UNSPECIFIED"
      }
    ],
    "trinoJob": {
      "clientTags": [
        "string"
      ],
      "continueOnFailure": true,
      "loggingConfig": {
        "driverLogLevels": {
          "property1": "LEVEL_UNSPECIFIED",
          "property2": "LEVEL_UNSPECIFIED"
        }
      },
      "outputFormat": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "queryFileUri": "string",
      "queryList": {
        "queries": [
          "string"
        ]
      }
    },
    "yarnApplications": [
      {
        "name": "string",
        "progress": 0,
        "state": "STATE_UNSPECIFIED",
        "trackingUrl": "string"
      }
    ]
  },
  "requestId": "string"
}
```

A request to submit a job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[Job](#schemajob)|false|none|Required. The job resource.|
|requestId|string|false|none|Optional. A unique id used to identify the request. If the server receives two SubmitJobRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.SubmitJobRequest)s with the same id, then the second request will be ignored and the first Job created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.|

<h2 id="tocS_TemplateParameter">TemplateParameter</h2>
<!-- backwards compatibility -->
<a id="schematemplateparameter"></a>
<a id="schema_TemplateParameter"></a>
<a id="tocStemplateparameter"></a>
<a id="tocstemplateparameter"></a>

```json
{
  "description": "string",
  "fields": [
    "string"
  ],
  "name": "string",
  "validation": {
    "regex": {
      "regexes": [
        "string"
      ]
    },
    "values": {
      "values": [
        "string"
      ]
    }
  }
}
```

A configurable parameter that replaces one or more fields in the template. Parameterizable fields: - Labels - File uris - Job properties - Job arguments - Script variables - Main class (in HadoopJob and SparkJob) - Zone (in ClusterSelector)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. Brief description of the parameter. Must not exceed 1024 characters.|
|fields|[string]|false|none|Required. Paths to all fields that the parameter replaces. A field is allowed to appear in at most one parameter's list of field paths.A field path is similar in syntax to a google.protobuf.FieldMask. For example, a field path that references the zone field of a workflow template's cluster selector would be specified as placement.clusterSelector.zone.Also, field paths can reference fields using the following syntax: Values in maps can be referenced by key: labels'key' placement.clusterSelector.clusterLabels'key' placement.managedCluster.labels'key' placement.clusterSelector.clusterLabels'key' jobs'step-id'.labels'key' Jobs in the jobs list can be referenced by step-id: jobs'step-id'.hadoopJob.mainJarFileUri jobs'step-id'.hiveJob.queryFileUri jobs'step-id'.pySparkJob.mainPythonFileUri jobs'step-id'.hadoopJob.jarFileUris0 jobs'step-id'.hadoopJob.archiveUris0 jobs'step-id'.hadoopJob.fileUris0 jobs'step-id'.pySparkJob.pythonFileUris0 Items in repeated fields can be referenced by a zero-based index: jobs'step-id'.sparkJob.args0 Other examples: jobs'step-id'.hadoopJob.properties'key' jobs'step-id'.hadoopJob.args0 jobs'step-id'.hiveJob.scriptVariables'key' jobs'step-id'.hadoopJob.mainJarFileUri placement.clusterSelector.zoneIt may not be possible to parameterize maps and repeated fields in their entirety since only individual map values and individual items in repeated fields can be referenced. For example, the following field paths are invalid: placement.clusterSelector.clusterLabels jobs'step-id'.sparkJob.args|
|name|string|false|none|Required. Parameter name. The parameter name is used as the key, and paired with the parameter value, which are passed to the template when the template is instantiated. The name must contain only capital letters (A-Z), numbers (0-9), and underscores (_), and must not start with a number. The maximum length is 40 characters.|
|validation|[ParameterValidation](#schemaparametervalidation)|false|none|Optional. Validation rules to be applied to this parameter's value.|

<h2 id="tocS_TestIamPermissionsRequest">TestIamPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schematestiampermissionsrequest"></a>
<a id="schema_TestIamPermissionsRequest"></a>
<a id="tocStestiampermissionsrequest"></a>
<a id="tocstestiampermissionsrequest"></a>

```json
{
  "permissions": [
    "string"
  ]
}
```

Request message for TestIamPermissions method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[string]|false|none|The set of permissions to check for the resource. Permissions with wildcards (such as * or storage.*) are not allowed. For more information see IAM Overview (https://cloud.google.com/iam/docs/overview#permissions).|

<h2 id="tocS_TestIamPermissionsResponse">TestIamPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schematestiampermissionsresponse"></a>
<a id="schema_TestIamPermissionsResponse"></a>
<a id="tocStestiampermissionsresponse"></a>
<a id="tocstestiampermissionsresponse"></a>

```json
{
  "permissions": [
    "string"
  ]
}
```

Response message for TestIamPermissions method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[string]|false|none|A subset of TestPermissionsRequest.permissions that the caller is allowed.|

<h2 id="tocS_TrinoJob">TrinoJob</h2>
<!-- backwards compatibility -->
<a id="schematrinojob"></a>
<a id="schema_TrinoJob"></a>
<a id="tocStrinojob"></a>
<a id="tocstrinojob"></a>

```json
{
  "clientTags": [
    "string"
  ],
  "continueOnFailure": true,
  "loggingConfig": {
    "driverLogLevels": {
      "property1": "LEVEL_UNSPECIFIED",
      "property2": "LEVEL_UNSPECIFIED"
    }
  },
  "outputFormat": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "queryFileUri": "string",
  "queryList": {
    "queries": [
      "string"
    ]
  }
}
```

A Dataproc job for running Trino (https://trino.io/) queries. IMPORTANT: The Dataproc Trino Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/trino) must be enabled when the cluster is created to submit a Trino job to the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientTags|[string]|false|none|Optional. Trino client tags to attach to this query|
|continueOnFailure|boolean|false|none|Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries.|
|loggingConfig|[LoggingConfig](#schemaloggingconfig)|false|none|Optional. The runtime log config for job execution.|
|outputFormat|string|false|none|Optional. The format in which query output will be displayed. See the Trino documentation for supported output formats|
|properties|object|false|none|Optional. A mapping of property names to values. Used to set Trino session properties (https://trino.io/docs/current/sql/set-session.html) Equivalent to using the --session flag in the Trino CLI|
|queryFileUri|string|false|none|The HCFS URI of the script that contains SQL queries.|
|queryList|[QueryList](#schemaquerylist)|false|none|A list of queries.|

<h2 id="tocS_UsageMetrics">UsageMetrics</h2>
<!-- backwards compatibility -->
<a id="schemausagemetrics"></a>
<a id="schema_UsageMetrics"></a>
<a id="tocSusagemetrics"></a>
<a id="tocsusagemetrics"></a>

```json
{
  "milliDcuSeconds": "string",
  "shuffleStorageGbSeconds": "string"
}
```

Usage metrics represent approximate total resources consumed by a workload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|milliDcuSeconds|string(int64)|false|none|Optional. DCU (Dataproc Compute Units) usage in (milliDCU x seconds) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)).|
|shuffleStorageGbSeconds|string(int64)|false|none|Optional. Shuffle storage usage in (GB x seconds) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)).|

<h2 id="tocS_UsageSnapshot">UsageSnapshot</h2>
<!-- backwards compatibility -->
<a id="schemausagesnapshot"></a>
<a id="schema_UsageSnapshot"></a>
<a id="tocSusagesnapshot"></a>
<a id="tocsusagesnapshot"></a>

```json
{
  "milliDcu": "string",
  "shuffleStorageGb": "string",
  "snapshotTime": "string"
}
```

The usage snaphot represents the resources consumed by a workload at a specified time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|milliDcu|string(int64)|false|none|Optional. Milli (one-thousandth) Dataproc Compute Units (DCUs) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)).|
|shuffleStorageGb|string(int64)|false|none|Optional. Shuffle Storage in gigabytes (GB). (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing))|
|snapshotTime|string(google-datetime)|false|none|Optional. The timestamp of the usage snapshot.|

<h2 id="tocS_ValueValidation">ValueValidation</h2>
<!-- backwards compatibility -->
<a id="schemavaluevalidation"></a>
<a id="schema_ValueValidation"></a>
<a id="tocSvaluevalidation"></a>
<a id="tocsvaluevalidation"></a>

```json
{
  "values": [
    "string"
  ]
}
```

Validation based on a list of allowed values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|values|[string]|false|none|Required. List of allowed values for the parameter.|

<h2 id="tocS_VirtualClusterConfig">VirtualClusterConfig</h2>
<!-- backwards compatibility -->
<a id="schemavirtualclusterconfig"></a>
<a id="schema_VirtualClusterConfig"></a>
<a id="tocSvirtualclusterconfig"></a>
<a id="tocsvirtualclusterconfig"></a>

```json
{
  "auxiliaryServicesConfig": {
    "metastoreConfig": {
      "dataprocMetastoreService": "string"
    },
    "sparkHistoryServerConfig": {
      "dataprocCluster": "string"
    }
  },
  "kubernetesClusterConfig": {
    "gkeClusterConfig": {
      "gkeClusterTarget": "string",
      "namespacedGkeDeploymentTarget": {
        "clusterNamespace": "string",
        "targetGkeCluster": "string"
      },
      "nodePoolTarget": [
        {
          "nodePool": "string",
          "nodePoolConfig": {
            "autoscaling": {
              "maxNodeCount": 0,
              "minNodeCount": 0
            },
            "config": {
              "accelerators": [
                {
                  "acceleratorCount": "string",
                  "acceleratorType": "string",
                  "gpuPartitionSize": "string"
                }
              ],
              "bootDiskKmsKey": "string",
              "localSsdCount": 0,
              "machineType": "string",
              "minCpuPlatform": "string",
              "preemptible": true,
              "spot": true
            },
            "locations": [
              "string"
            ]
          },
          "roles": [
            "ROLE_UNSPECIFIED"
          ]
        }
      ]
    },
    "kubernetesNamespace": "string",
    "kubernetesSoftwareConfig": {
      "componentVersion": {
        "property1": "string",
        "property2": "string"
      },
      "properties": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "stagingBucket": "string"
}
```

The Dataproc cluster config for a cluster that does not directly control the underlying compute resources, such as a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-overview).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auxiliaryServicesConfig|[AuxiliaryServicesConfig](#schemaauxiliaryservicesconfig)|false|none|Optional. Configuration of auxiliary services used by this cluster.|
|kubernetesClusterConfig|[KubernetesClusterConfig](#schemakubernetesclusterconfig)|false|none|Required. The configuration for running the Dataproc cluster on Kubernetes.|
|stagingBucket|string|false|none|Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.|

<h2 id="tocS_WorkflowGraph">WorkflowGraph</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowgraph"></a>
<a id="schema_WorkflowGraph"></a>
<a id="tocSworkflowgraph"></a>
<a id="tocsworkflowgraph"></a>

```json
{
  "nodes": [
    {
      "error": "string",
      "jobId": "string",
      "prerequisiteStepIds": [
        "string"
      ],
      "state": "NODE_STATE_UNSPECIFIED",
      "stepId": "string"
    }
  ]
}
```

The workflow graph.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodes|[[WorkflowNode](#schemaworkflownode)]|false|read-only|Output only. The workflow nodes.|

<h2 id="tocS_WorkflowMetadata">WorkflowMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowmetadata"></a>
<a id="schema_WorkflowMetadata"></a>
<a id="tocSworkflowmetadata"></a>
<a id="tocsworkflowmetadata"></a>

```json
{
  "clusterName": "string",
  "clusterUuid": "string",
  "createCluster": {
    "done": true,
    "error": "string",
    "operationId": "string"
  },
  "dagEndTime": "string",
  "dagStartTime": "string",
  "dagTimeout": "string",
  "deleteCluster": {
    "done": true,
    "error": "string",
    "operationId": "string"
  },
  "endTime": "string",
  "graph": {
    "nodes": [
      {
        "error": "string",
        "jobId": "string",
        "prerequisiteStepIds": [
          "string"
        ],
        "state": "NODE_STATE_UNSPECIFIED",
        "stepId": "string"
      }
    ]
  },
  "parameters": {
    "property1": "string",
    "property2": "string"
  },
  "startTime": "string",
  "state": "UNKNOWN",
  "template": "string",
  "version": 0
}
```

A Dataproc workflow template resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterName|string|false|read-only|Output only. The name of the target cluster.|
|clusterUuid|string|false|read-only|Output only. The UUID of target cluster.|
|createCluster|[ClusterOperation](#schemaclusteroperation)|false|none|Output only. The create cluster operation metadata.|
|dagEndTime|string(google-datetime)|false|read-only|Output only. DAG end time, only set for workflows with dag_timeout when DAG ends.|
|dagStartTime|string(google-datetime)|false|read-only|Output only. DAG start time, only set for workflows with dag_timeout when DAG begins.|
|dagTimeout|string(google-duration)|false|read-only|Output only. The timeout duration for the DAG of jobs, expressed in seconds (see JSON representation of duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).|
|deleteCluster|[ClusterOperation](#schemaclusteroperation)|false|none|Output only. The delete cluster operation metadata.|
|endTime|string(google-datetime)|false|read-only|Output only. Workflow end time.|
|graph|[WorkflowGraph](#schemaworkflowgraph)|false|none|Output only. The workflow graph.|
|parameters|object|false|none|Map from parameter names to values that were used for those parameters.|
|startTime|string(google-datetime)|false|read-only|Output only. Workflow start time.|
|state|string|false|read-only|Output only. The workflow state.|
|template|string|false|read-only|Output only. The resource name of the workflow template as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}|
|version|integer(int32)|false|read-only|Output only. The version of template at the time of workflow instantiation.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|UNKNOWN|
|state|PENDING|
|state|RUNNING|
|state|DONE|

<h2 id="tocS_WorkflowNode">WorkflowNode</h2>
<!-- backwards compatibility -->
<a id="schemaworkflownode"></a>
<a id="schema_WorkflowNode"></a>
<a id="tocSworkflownode"></a>
<a id="tocsworkflownode"></a>

```json
{
  "error": "string",
  "jobId": "string",
  "prerequisiteStepIds": [
    "string"
  ],
  "state": "NODE_STATE_UNSPECIFIED",
  "stepId": "string"
}
```

The workflow node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|read-only|Output only. The error detail.|
|jobId|string|false|read-only|Output only. The job id; populated after the node enters RUNNING state.|
|prerequisiteStepIds|[string]|false|read-only|Output only. Node's prerequisite nodes.|
|state|string|false|read-only|Output only. The node state.|
|stepId|string|false|read-only|Output only. The name of the node.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|NODE_STATE_UNSPECIFIED|
|state|BLOCKED|
|state|RUNNABLE|
|state|RUNNING|
|state|COMPLETED|
|state|FAILED|

<h2 id="tocS_WorkflowTemplate">WorkflowTemplate</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowtemplate"></a>
<a id="schema_WorkflowTemplate"></a>
<a id="tocSworkflowtemplate"></a>
<a id="tocsworkflowtemplate"></a>

```json
{
  "createTime": "string",
  "dagTimeout": "string",
  "id": "string",
  "jobs": [
    {
      "hadoopJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainClass": "string",
        "mainJarFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "hiveJob": {
        "continueOnFailure": true,
        "jarFileUris": [
          "string"
        ],
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "pigJob": {
        "continueOnFailure": true,
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "prerequisiteStepIds": [
        "string"
      ],
      "prestoJob": {
        "clientTags": [
          "string"
        ],
        "continueOnFailure": true,
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "outputFormat": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        }
      },
      "pysparkJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainPythonFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "pythonFileUris": [
          "string"
        ]
      },
      "scheduling": {
        "maxFailuresPerHour": 0,
        "maxFailuresTotal": 0
      },
      "sparkJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainClass": "string",
        "mainJarFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "sparkRJob": {
        "archiveUris": [
          "string"
        ],
        "args": [
          "string"
        ],
        "fileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "mainRFileUri": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "sparkSqlJob": {
        "jarFileUris": [
          "string"
        ],
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        },
        "scriptVariables": {
          "property1": "string",
          "property2": "string"
        }
      },
      "stepId": "string",
      "trinoJob": {
        "clientTags": [
          "string"
        ],
        "continueOnFailure": true,
        "loggingConfig": {
          "driverLogLevels": {
            "property1": "LEVEL_UNSPECIFIED",
            "property2": "LEVEL_UNSPECIFIED"
          }
        },
        "outputFormat": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        },
        "queryFileUri": "string",
        "queryList": {
          "queries": [
            "string"
          ]
        }
      }
    }
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "parameters": [
    {
      "description": "string",
      "fields": [
        "string"
      ],
      "name": "string",
      "validation": {
        "regex": {
          "regexes": [
            "string"
          ]
        },
        "values": {
          "values": [
            "string"
          ]
        }
      }
    }
  ],
  "placement": {
    "clusterSelector": {
      "clusterLabels": {
        "property1": "string",
        "property2": "string"
      },
      "zone": "string"
    },
    "managedCluster": {
      "clusterName": "string",
      "config": {
        "autoscalingConfig": {
          "policyUri": "string"
        },
        "auxiliaryNodeGroups": [
          {
            "nodeGroup": {
              "labels": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string",
              "nodeGroupConfig": {
                "accelerators": [
                  {
                    "acceleratorCount": 0,
                    "acceleratorTypeUri": "string"
                  }
                ],
                "diskConfig": {
                  "bootDiskSizeGb": 0,
                  "bootDiskType": "string",
                  "localSsdInterface": "string",
                  "numLocalSsds": 0
                },
                "imageUri": "string",
                "instanceNames": [
                  "string"
                ],
                "instanceReferences": [
                  {
                    "instanceId": "string",
                    "instanceName": "string",
                    "publicEciesKey": "string",
                    "publicKey": "string"
                  }
                ],
                "isPreemptible": true,
                "machineTypeUri": "string",
                "managedGroupConfig": {
                  "instanceGroupManagerName": "string",
                  "instanceTemplateName": "string"
                },
                "minCpuPlatform": "string",
                "numInstances": 0,
                "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
              },
              "roles": [
                "ROLE_UNSPECIFIED"
              ]
            },
            "nodeGroupId": "string"
          }
        ],
        "configBucket": "string",
        "dataprocMetricConfig": {
          "metrics": [
            {
              "metricOverrides": [
                "string"
              ],
              "metricSource": "METRIC_SOURCE_UNSPECIFIED"
            }
          ]
        },
        "encryptionConfig": {
          "gcePdKmsKeyName": "string",
          "kmsKey": "string"
        },
        "endpointConfig": {
          "enableHttpPortAccess": true,
          "httpPorts": {
            "property1": "string",
            "property2": "string"
          }
        },
        "gceClusterConfig": {
          "confidentialInstanceConfig": {
            "enableConfidentialCompute": true
          },
          "internalIpOnly": true,
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "networkUri": "string",
          "nodeGroupAffinity": {
            "nodeGroupUri": "string"
          },
          "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
          "reservationAffinity": {
            "consumeReservationType": "TYPE_UNSPECIFIED",
            "key": "string",
            "values": [
              "string"
            ]
          },
          "serviceAccount": "string",
          "serviceAccountScopes": [
            "string"
          ],
          "shieldedInstanceConfig": {
            "enableIntegrityMonitoring": true,
            "enableSecureBoot": true,
            "enableVtpm": true
          },
          "subnetworkUri": "string",
          "tags": [
            "string"
          ],
          "zoneUri": "string"
        },
        "gkeClusterConfig": {
          "gkeClusterTarget": "string",
          "namespacedGkeDeploymentTarget": {
            "clusterNamespace": "string",
            "targetGkeCluster": "string"
          },
          "nodePoolTarget": [
            {
              "nodePool": "string",
              "nodePoolConfig": {
                "autoscaling": {
                  "maxNodeCount": 0,
                  "minNodeCount": 0
                },
                "config": {
                  "accelerators": [
                    {
                      "acceleratorCount": "string",
                      "acceleratorType": "string",
                      "gpuPartitionSize": "string"
                    }
                  ],
                  "bootDiskKmsKey": "string",
                  "localSsdCount": 0,
                  "machineType": "string",
                  "minCpuPlatform": "string",
                  "preemptible": true,
                  "spot": true
                },
                "locations": [
                  "string"
                ]
              },
              "roles": [
                "ROLE_UNSPECIFIED"
              ]
            }
          ]
        },
        "initializationActions": [
          {
            "executableFile": "string",
            "executionTimeout": "string"
          }
        ],
        "lifecycleConfig": {
          "autoDeleteTime": "string",
          "autoDeleteTtl": "string",
          "idleDeleteTtl": "string",
          "idleStartTime": "string"
        },
        "masterConfig": {
          "accelerators": [
            {
              "acceleratorCount": 0,
              "acceleratorTypeUri": "string"
            }
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string",
            "localSsdInterface": "string",
            "numLocalSsds": 0
          },
          "imageUri": "string",
          "instanceNames": [
            "string"
          ],
          "instanceReferences": [
            {
              "instanceId": "string",
              "instanceName": "string",
              "publicEciesKey": "string",
              "publicKey": "string"
            }
          ],
          "isPreemptible": true,
          "machineTypeUri": "string",
          "managedGroupConfig": {
            "instanceGroupManagerName": "string",
            "instanceTemplateName": "string"
          },
          "minCpuPlatform": "string",
          "numInstances": 0,
          "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
        },
        "metastoreConfig": {
          "dataprocMetastoreService": "string"
        },
        "secondaryWorkerConfig": {
          "accelerators": [
            {
              "acceleratorCount": 0,
              "acceleratorTypeUri": "string"
            }
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string",
            "localSsdInterface": "string",
            "numLocalSsds": 0
          },
          "imageUri": "string",
          "instanceNames": [
            "string"
          ],
          "instanceReferences": [
            {
              "instanceId": "string",
              "instanceName": "string",
              "publicEciesKey": "string",
              "publicKey": "string"
            }
          ],
          "isPreemptible": true,
          "machineTypeUri": "string",
          "managedGroupConfig": {
            "instanceGroupManagerName": "string",
            "instanceTemplateName": "string"
          },
          "minCpuPlatform": "string",
          "numInstances": 0,
          "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
        },
        "securityConfig": {
          "identityConfig": {
            "userServiceAccountMapping": {
              "property1": "string",
              "property2": "string"
            }
          },
          "kerberosConfig": {
            "crossRealmTrustAdminServer": "string",
            "crossRealmTrustKdc": "string",
            "crossRealmTrustRealm": "string",
            "crossRealmTrustSharedPasswordUri": "string",
            "enableKerberos": true,
            "kdcDbKeyUri": "string",
            "keyPasswordUri": "string",
            "keystorePasswordUri": "string",
            "keystoreUri": "string",
            "kmsKeyUri": "string",
            "realm": "string",
            "rootPrincipalPasswordUri": "string",
            "tgtLifetimeHours": 0,
            "truststorePasswordUri": "string",
            "truststoreUri": "string"
          }
        },
        "softwareConfig": {
          "imageVersion": "string",
          "optionalComponents": [
            "COMPONENT_UNSPECIFIED"
          ],
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        },
        "tempBucket": "string",
        "workerConfig": {
          "accelerators": [
            {
              "acceleratorCount": 0,
              "acceleratorTypeUri": "string"
            }
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string",
            "localSsdInterface": "string",
            "numLocalSsds": 0
          },
          "imageUri": "string",
          "instanceNames": [
            "string"
          ],
          "instanceReferences": [
            {
              "instanceId": "string",
              "instanceName": "string",
              "publicEciesKey": "string",
              "publicKey": "string"
            }
          ],
          "isPreemptible": true,
          "machineTypeUri": "string",
          "managedGroupConfig": {
            "instanceGroupManagerName": "string",
            "instanceTemplateName": "string"
          },
          "minCpuPlatform": "string",
          "numInstances": 0,
          "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
        }
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "updateTime": "string",
  "version": 0
}
```

A Dataproc workflow template resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time template was created.|
|dagTimeout|string(google-duration)|false|none|Optional. Timeout duration for the DAG of jobs, expressed in seconds (see JSON representation of duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). The timeout duration must be from 10 minutes ("600s") to 24 hours ("86400s"). The timer begins when the first job is submitted. If the workflow is running at the end of the timeout period, any remaining jobs are cancelled, the workflow is ended, and if the workflow was running on a managed cluster, the cluster is deleted.|
|id|string|false|none|none|
|jobs|[[OrderedJob](#schemaorderedjob)]|false|none|Required. The Directed Acyclic Graph of Jobs to submit.|
|labels|object|false|none|Optional. The labels to associate with this template. These labels will be propagated to all jobs and clusters created by the workflow instance.Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).No more than 32 labels can be associated with a template.|
|name|string|false|read-only|Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}|
|parameters|[[TemplateParameter](#schematemplateparameter)]|false|none|Optional. Template parameters whose values are substituted into the template. Values for parameters must be provided when the template is instantiated.|
|placement|[WorkflowTemplatePlacement](#schemaworkflowtemplateplacement)|false|none|Required. WorkflowTemplate scheduling information.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time template was last updated.|
|version|integer(int32)|false|none|Optional. Used to perform a consistent read-modify-write.This field should be left blank for a CreateWorkflowTemplate request. It is required for an UpdateWorkflowTemplate request, and must match the current server version. A typical update template flow would fetch the current template with a GetWorkflowTemplate request, which will return the current template with the version field filled in with the current server version. The user updates other fields in the template, then returns it as part of the UpdateWorkflowTemplate request.|

<h2 id="tocS_WorkflowTemplatePlacement">WorkflowTemplatePlacement</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowtemplateplacement"></a>
<a id="schema_WorkflowTemplatePlacement"></a>
<a id="tocSworkflowtemplateplacement"></a>
<a id="tocsworkflowtemplateplacement"></a>

```json
{
  "clusterSelector": {
    "clusterLabels": {
      "property1": "string",
      "property2": "string"
    },
    "zone": "string"
  },
  "managedCluster": {
    "clusterName": "string",
    "config": {
      "autoscalingConfig": {
        "policyUri": "string"
      },
      "auxiliaryNodeGroups": [
        {
          "nodeGroup": {
            "labels": {
              "property1": "string",
              "property2": "string"
            },
            "name": "string",
            "nodeGroupConfig": {
              "accelerators": [
                {
                  "acceleratorCount": 0,
                  "acceleratorTypeUri": "string"
                }
              ],
              "diskConfig": {
                "bootDiskSizeGb": 0,
                "bootDiskType": "string",
                "localSsdInterface": "string",
                "numLocalSsds": 0
              },
              "imageUri": "string",
              "instanceNames": [
                "string"
              ],
              "instanceReferences": [
                {
                  "instanceId": "string",
                  "instanceName": "string",
                  "publicEciesKey": "string",
                  "publicKey": "string"
                }
              ],
              "isPreemptible": true,
              "machineTypeUri": "string",
              "managedGroupConfig": {
                "instanceGroupManagerName": "string",
                "instanceTemplateName": "string"
              },
              "minCpuPlatform": "string",
              "numInstances": 0,
              "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
            },
            "roles": [
              "ROLE_UNSPECIFIED"
            ]
          },
          "nodeGroupId": "string"
        }
      ],
      "configBucket": "string",
      "dataprocMetricConfig": {
        "metrics": [
          {
            "metricOverrides": [
              "string"
            ],
            "metricSource": "METRIC_SOURCE_UNSPECIFIED"
          }
        ]
      },
      "encryptionConfig": {
        "gcePdKmsKeyName": "string",
        "kmsKey": "string"
      },
      "endpointConfig": {
        "enableHttpPortAccess": true,
        "httpPorts": {
          "property1": "string",
          "property2": "string"
        }
      },
      "gceClusterConfig": {
        "confidentialInstanceConfig": {
          "enableConfidentialCompute": true
        },
        "internalIpOnly": true,
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "networkUri": "string",
        "nodeGroupAffinity": {
          "nodeGroupUri": "string"
        },
        "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
        "reservationAffinity": {
          "consumeReservationType": "TYPE_UNSPECIFIED",
          "key": "string",
          "values": [
            "string"
          ]
        },
        "serviceAccount": "string",
        "serviceAccountScopes": [
          "string"
        ],
        "shieldedInstanceConfig": {
          "enableIntegrityMonitoring": true,
          "enableSecureBoot": true,
          "enableVtpm": true
        },
        "subnetworkUri": "string",
        "tags": [
          "string"
        ],
        "zoneUri": "string"
      },
      "gkeClusterConfig": {
        "gkeClusterTarget": "string",
        "namespacedGkeDeploymentTarget": {
          "clusterNamespace": "string",
          "targetGkeCluster": "string"
        },
        "nodePoolTarget": [
          {
            "nodePool": "string",
            "nodePoolConfig": {
              "autoscaling": {
                "maxNodeCount": 0,
                "minNodeCount": 0
              },
              "config": {
                "accelerators": [
                  {
                    "acceleratorCount": "string",
                    "acceleratorType": "string",
                    "gpuPartitionSize": "string"
                  }
                ],
                "bootDiskKmsKey": "string",
                "localSsdCount": 0,
                "machineType": "string",
                "minCpuPlatform": "string",
                "preemptible": true,
                "spot": true
              },
              "locations": [
                "string"
              ]
            },
            "roles": [
              "ROLE_UNSPECIFIED"
            ]
          }
        ]
      },
      "initializationActions": [
        {
          "executableFile": "string",
          "executionTimeout": "string"
        }
      ],
      "lifecycleConfig": {
        "autoDeleteTime": "string",
        "autoDeleteTtl": "string",
        "idleDeleteTtl": "string",
        "idleStartTime": "string"
      },
      "masterConfig": {
        "accelerators": [
          {
            "acceleratorCount": 0,
            "acceleratorTypeUri": "string"
          }
        ],
        "diskConfig": {
          "bootDiskSizeGb": 0,
          "bootDiskType": "string",
          "localSsdInterface": "string",
          "numLocalSsds": 0
        },
        "imageUri": "string",
        "instanceNames": [
          "string"
        ],
        "instanceReferences": [
          {
            "instanceId": "string",
            "instanceName": "string",
            "publicEciesKey": "string",
            "publicKey": "string"
          }
        ],
        "isPreemptible": true,
        "machineTypeUri": "string",
        "managedGroupConfig": {
          "instanceGroupManagerName": "string",
          "instanceTemplateName": "string"
        },
        "minCpuPlatform": "string",
        "numInstances": 0,
        "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
      },
      "metastoreConfig": {
        "dataprocMetastoreService": "string"
      },
      "secondaryWorkerConfig": {
        "accelerators": [
          {
            "acceleratorCount": 0,
            "acceleratorTypeUri": "string"
          }
        ],
        "diskConfig": {
          "bootDiskSizeGb": 0,
          "bootDiskType": "string",
          "localSsdInterface": "string",
          "numLocalSsds": 0
        },
        "imageUri": "string",
        "instanceNames": [
          "string"
        ],
        "instanceReferences": [
          {
            "instanceId": "string",
            "instanceName": "string",
            "publicEciesKey": "string",
            "publicKey": "string"
          }
        ],
        "isPreemptible": true,
        "machineTypeUri": "string",
        "managedGroupConfig": {
          "instanceGroupManagerName": "string",
          "instanceTemplateName": "string"
        },
        "minCpuPlatform": "string",
        "numInstances": 0,
        "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
      },
      "securityConfig": {
        "identityConfig": {
          "userServiceAccountMapping": {
            "property1": "string",
            "property2": "string"
          }
        },
        "kerberosConfig": {
          "crossRealmTrustAdminServer": "string",
          "crossRealmTrustKdc": "string",
          "crossRealmTrustRealm": "string",
          "crossRealmTrustSharedPasswordUri": "string",
          "enableKerberos": true,
          "kdcDbKeyUri": "string",
          "keyPasswordUri": "string",
          "keystorePasswordUri": "string",
          "keystoreUri": "string",
          "kmsKeyUri": "string",
          "realm": "string",
          "rootPrincipalPasswordUri": "string",
          "tgtLifetimeHours": 0,
          "truststorePasswordUri": "string",
          "truststoreUri": "string"
        }
      },
      "softwareConfig": {
        "imageVersion": "string",
        "optionalComponents": [
          "COMPONENT_UNSPECIFIED"
        ],
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "tempBucket": "string",
      "workerConfig": {
        "accelerators": [
          {
            "acceleratorCount": 0,
            "acceleratorTypeUri": "string"
          }
        ],
        "diskConfig": {
          "bootDiskSizeGb": 0,
          "bootDiskType": "string",
          "localSsdInterface": "string",
          "numLocalSsds": 0
        },
        "imageUri": "string",
        "instanceNames": [
          "string"
        ],
        "instanceReferences": [
          {
            "instanceId": "string",
            "instanceName": "string",
            "publicEciesKey": "string",
            "publicKey": "string"
          }
        ],
        "isPreemptible": true,
        "machineTypeUri": "string",
        "managedGroupConfig": {
          "instanceGroupManagerName": "string",
          "instanceTemplateName": "string"
        },
        "minCpuPlatform": "string",
        "numInstances": 0,
        "preemptibility": "PREEMPTIBILITY_UNSPECIFIED"
      }
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

Specifies workflow execution target.Either managed_cluster or cluster_selector is required.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterSelector|[ClusterSelector](#schemaclusterselector)|false|none|Optional. A selector that chooses target cluster for jobs based on metadata.The selector is evaluated at the time each job is submitted.|
|managedCluster|[ManagedCluster](#schemamanagedcluster)|false|none|A cluster that is managed by the workflow.|

<h2 id="tocS_YarnApplication">YarnApplication</h2>
<!-- backwards compatibility -->
<a id="schemayarnapplication"></a>
<a id="schema_YarnApplication"></a>
<a id="tocSyarnapplication"></a>
<a id="tocsyarnapplication"></a>

```json
{
  "name": "string",
  "progress": 0,
  "state": "STATE_UNSPECIFIED",
  "trackingUrl": "string"
}
```

A YARN application created by a job. Application information is a subset of org.apache.hadoop.yarn.proto.YarnProtos.ApplicationReportProto.Beta Feature: This report is available for testing purposes only. It may be changed before final release.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Required. The application name.|
|progress|number(float)|false|none|Required. The numerical progress of the application, from 1 to 100.|
|state|string|false|none|Required. The application state.|
|trackingUrl|string|false|none|Optional. The HTTP URL of the ApplicationMaster, HistoryServer, or TimelineServer that provides application-specific information. The URL uses the internal hostname, and requires a proxy server for resolution and, possibly, access.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|NEW|
|state|NEW_SAVING|
|state|SUBMITTED|
|state|ACCEPTED|
|state|RUNNING|
|state|FINISHED|
|state|FAILED|
|state|KILLED|
