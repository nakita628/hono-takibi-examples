<h1 id="kubernetes-engine-api">Kubernetes Engine API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Builds and manages container-based applications, powered by the open source Kubernetes technology.

Base URLs:

* <a href="https://container.googleapis.com/">https://container.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/container-engine/">External documentation</a>

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

<h1 id="kubernetes-engine-api-projects">projects</h1>

## container.projects.zones.clusters.list

<a id="opIdcontainer.projects.zones.clusters.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string/zones/string/clusters \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/projects/{projectId}/zones/{zone}/clusters`

Lists all clusters owned by a project in either the specified zone or all zones.

<h3 id="containerprojectszonesclusterslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.|
|zone|path|string|true|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides, or "-" for all zones. This field has been deprecated and replaced by the parent field.|
|parent|query|string|false|The parent (project and location) where the clusters will be listed. Specified in the format `projects/*/locations/*`. Location "-" matches all zones and all regions.|
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
      "addonsConfig": {
        "cloudRunConfig": {
          "disabled": true,
          "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED"
        },
        "configConnectorConfig": {
          "enabled": true
        },
        "dnsCacheConfig": {
          "enabled": true
        },
        "gcePersistentDiskCsiDriverConfig": {
          "enabled": true
        },
        "gcpFilestoreCsiDriverConfig": {
          "enabled": true
        },
        "gcsFuseCsiDriverConfig": {
          "enabled": true
        },
        "gkeBackupAgentConfig": {
          "enabled": true
        },
        "horizontalPodAutoscaling": {
          "disabled": true
        },
        "httpLoadBalancing": {
          "disabled": true
        },
        "istioConfig": {
          "auth": "AUTH_NONE",
          "disabled": true
        },
        "kalmConfig": {
          "enabled": true
        },
        "kubernetesDashboard": {
          "disabled": true
        },
        "networkPolicyConfig": {
          "disabled": true
        },
        "statefulHaConfig": {
          "enabled": true
        }
      },
      "authenticatorGroupsConfig": {
        "enabled": true,
        "securityGroup": "string"
      },
      "autopilot": {
        "conversionStatus": {
          "state": "STATE_UNSPECIFIED"
        },
        "enabled": true,
        "workloadPolicyConfig": {
          "allowNetAdmin": true
        }
      },
      "autoscaling": {
        "autoprovisioningLocations": [
          "string"
        ],
        "autoprovisioningNodePoolDefaults": {
          "bootDiskKmsKey": "string",
          "diskSizeGb": 0,
          "diskType": "string",
          "imageType": "string",
          "insecureKubeletReadonlyPortEnabled": true,
          "management": {
            "autoRepair": true,
            "autoUpgrade": true,
            "upgradeOptions": {
              "autoUpgradeStartTime": "string",
              "description": "string"
            }
          },
          "minCpuPlatform": "string",
          "oauthScopes": [
            "string"
          ],
          "serviceAccount": "string",
          "shieldedInstanceConfig": {
            "enableIntegrityMonitoring": true,
            "enableSecureBoot": true
          },
          "upgradeSettings": {
            "blueGreenSettings": {
              "autoscaledRolloutPolicy": {},
              "nodePoolSoakDuration": "string",
              "standardRolloutPolicy": {
                "batchNodeCount": 0,
                "batchPercentage": 0,
                "batchSoakDuration": "string"
              }
            },
            "maxSurge": 0,
            "maxUnavailable": 0,
            "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
          }
        },
        "autoscalingProfile": "PROFILE_UNSPECIFIED",
        "enableNodeAutoprovisioning": true,
        "resourceLimits": [
          {
            "maximum": "string",
            "minimum": "string",
            "resourceType": "string"
          }
        ]
      },
      "binaryAuthorization": {
        "enabled": true,
        "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
        "policyBindings": [
          {
            "name": "string"
          }
        ]
      },
      "clusterIpv4Cidr": "string",
      "clusterTelemetry": {
        "type": "UNSPECIFIED"
      },
      "conditions": [
        {
          "canonicalCode": "OK",
          "code": "UNKNOWN",
          "message": "string"
        }
      ],
      "confidentialNodes": {
        "enabled": true
      },
      "costManagementConfig": {
        "enabled": true
      },
      "createTime": "string",
      "currentMasterVersion": "string",
      "currentNodeCount": 0,
      "currentNodeVersion": "string",
      "databaseEncryption": {
        "keyName": "string",
        "state": "UNKNOWN"
      },
      "defaultMaxPodsConstraint": {
        "maxPodsPerNode": "string"
      },
      "description": "string",
      "enableK8sBetaApis": {
        "enabledApis": [
          "string"
        ]
      },
      "enableKubernetesAlpha": true,
      "enableTpu": true,
      "endpoint": "string",
      "enterpriseConfig": {
        "clusterTier": "CLUSTER_TIER_UNSPECIFIED"
      },
      "etag": "string",
      "expireTime": "string",
      "fleet": {
        "membership": "string",
        "preRegistered": true,
        "project": "string"
      },
      "id": "string",
      "identityServiceConfig": {
        "enabled": true
      },
      "initialClusterVersion": "string",
      "initialNodeCount": 0,
      "instanceGroupUrls": [
        "string"
      ],
      "ipAllocationPolicy": {
        "additionalPodRangesConfig": {
          "podRangeInfo": [
            {
              "rangeName": "string",
              "utilization": 0
            }
          ],
          "podRangeNames": [
            "string"
          ]
        },
        "allowRouteOverlap": true,
        "clusterIpv4Cidr": "string",
        "clusterIpv4CidrBlock": "string",
        "clusterSecondaryRangeName": "string",
        "createSubnetwork": true,
        "defaultPodIpv4RangeUtilization": 0,
        "ipv6AccessType": "IPV6_ACCESS_TYPE_UNSPECIFIED",
        "nodeIpv4Cidr": "string",
        "nodeIpv4CidrBlock": "string",
        "podCidrOverprovisionConfig": {
          "disable": true
        },
        "servicesIpv4Cidr": "string",
        "servicesIpv4CidrBlock": "string",
        "servicesIpv6CidrBlock": "string",
        "servicesSecondaryRangeName": "string",
        "stackType": "STACK_TYPE_UNSPECIFIED",
        "subnetIpv6CidrBlock": "string",
        "subnetworkName": "string",
        "tpuIpv4CidrBlock": "string",
        "useIpAliases": true,
        "useRoutes": true
      },
      "labelFingerprint": "string",
      "legacyAbac": {
        "enabled": true
      },
      "location": "string",
      "locations": [
        "string"
      ],
      "loggingConfig": {
        "componentConfig": {
          "enableComponents": [
            "COMPONENT_UNSPECIFIED"
          ]
        }
      },
      "loggingService": "string",
      "maintenancePolicy": {
        "resourceVersion": "string",
        "window": {
          "dailyMaintenanceWindow": {
            "duration": "string",
            "startTime": "string"
          },
          "maintenanceExclusions": {
            "property1": {
              "endTime": "string",
              "maintenanceExclusionOptions": {
                "scope": "NO_UPGRADES"
              },
              "startTime": "string"
            },
            "property2": {
              "endTime": "string",
              "maintenanceExclusionOptions": {
                "scope": "NO_UPGRADES"
              },
              "startTime": "string"
            }
          },
          "recurringWindow": {
            "recurrence": "string",
            "window": {
              "endTime": "string",
              "maintenanceExclusionOptions": {
                "scope": "NO_UPGRADES"
              },
              "startTime": "string"
            }
          }
        }
      },
      "master": {},
      "masterAuth": {
        "clientCertificate": "string",
        "clientCertificateConfig": {
          "issueClientCertificate": true
        },
        "clientKey": "string",
        "clusterCaCertificate": "string",
        "password": "string",
        "username": "string"
      },
      "masterAuthorizedNetworksConfig": {
        "cidrBlocks": [
          {
            "cidrBlock": "string",
            "displayName": "string"
          }
        ],
        "enabled": true,
        "gcpPublicCidrsAccessEnabled": true
      },
      "masterIpv4CidrBlock": "string",
      "meshCertificates": {
        "enableCertificates": true
      },
      "monitoringConfig": {
        "advancedDatapathObservabilityConfig": {
          "enableMetrics": true,
          "enableRelay": true,
          "relayMode": "RELAY_MODE_UNSPECIFIED"
        },
        "componentConfig": {
          "enableComponents": [
            "COMPONENT_UNSPECIFIED"
          ]
        },
        "managedPrometheusConfig": {
          "enabled": true
        }
      },
      "monitoringService": "string",
      "name": "string",
      "network": "string",
      "networkConfig": {
        "datapathProvider": "DATAPATH_PROVIDER_UNSPECIFIED",
        "defaultSnatStatus": {
          "disabled": true
        },
        "dnsConfig": {
          "clusterDns": "PROVIDER_UNSPECIFIED",
          "clusterDnsDomain": "string",
          "clusterDnsScope": "DNS_SCOPE_UNSPECIFIED"
        },
        "enableFqdnNetworkPolicy": true,
        "enableIntraNodeVisibility": true,
        "enableL4ilbSubsetting": true,
        "enableMultiNetworking": true,
        "gatewayApiConfig": {
          "channel": "CHANNEL_UNSPECIFIED"
        },
        "inTransitEncryptionConfig": "IN_TRANSIT_ENCRYPTION_CONFIG_UNSPECIFIED",
        "network": "string",
        "networkPerformanceConfig": {
          "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
        },
        "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
        "serviceExternalIpsConfig": {
          "enabled": true
        },
        "subnetwork": "string"
      },
      "networkPolicy": {
        "enabled": true,
        "provider": "PROVIDER_UNSPECIFIED"
      },
      "nodeConfig": {
        "accelerators": [
          {
            "acceleratorCount": "string",
            "acceleratorType": "string",
            "gpuDriverInstallationConfig": {
              "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
            },
            "gpuPartitionSize": "string",
            "gpuSharingConfig": {
              "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
              "maxSharedClientsPerGpu": "string"
            },
            "maxTimeSharedClientsPerGpu": "string"
          }
        ],
        "advancedMachineFeatures": {
          "threadsPerCore": "string"
        },
        "bootDiskKmsKey": "string",
        "confidentialNodes": {
          "enabled": true
        },
        "diskSizeGb": 0,
        "diskType": "string",
        "enableConfidentialStorage": true,
        "ephemeralStorageConfig": {
          "localSsdCount": 0
        },
        "ephemeralStorageLocalSsdConfig": {
          "localSsdCount": 0
        },
        "fastSocket": {
          "enabled": true
        },
        "gcfsConfig": {
          "enabled": true
        },
        "gvnic": {
          "enabled": true
        },
        "hostMaintenancePolicy": {
          "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
          "opportunisticMaintenanceStrategy": {
            "maintenanceAvailabilityWindow": "string",
            "minNodesPerPool": "string",
            "nodeIdleTimeWindow": "string"
          }
        },
        "imageType": "string",
        "kubeletConfig": {
          "cpuCfsQuota": true,
          "cpuCfsQuotaPeriod": "string",
          "cpuManagerPolicy": "string",
          "insecureKubeletReadonlyPortEnabled": true,
          "podPidsLimit": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "linuxNodeConfig": {
          "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
          "sysctls": {
            "property1": "string",
            "property2": "string"
          }
        },
        "localNvmeSsdBlockConfig": {
          "localSsdCount": 0
        },
        "localSsdCount": 0,
        "loggingConfig": {
          "variantConfig": {
            "variant": "VARIANT_UNSPECIFIED"
          }
        },
        "machineType": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "minCpuPlatform": "string",
        "nodeGroup": "string",
        "oauthScopes": [
          "string"
        ],
        "preemptible": true,
        "reservationAffinity": {
          "consumeReservationType": "UNSPECIFIED",
          "key": "string",
          "values": [
            "string"
          ]
        },
        "resourceLabels": {
          "property1": "string",
          "property2": "string"
        },
        "resourceManagerTags": {
          "tags": {
            "property1": "string",
            "property2": "string"
          }
        },
        "sandboxConfig": {
          "sandboxType": "string",
          "type": "UNSPECIFIED"
        },
        "secondaryBootDisks": [
          {
            "diskImage": "string",
            "mode": "MODE_UNSPECIFIED"
          }
        ],
        "serviceAccount": "string",
        "shieldedInstanceConfig": {
          "enableIntegrityMonitoring": true,
          "enableSecureBoot": true
        },
        "soleTenantConfig": {
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ]
        },
        "spot": true,
        "tags": [
          "string"
        ],
        "taints": [
          {
            "effect": "EFFECT_UNSPECIFIED",
            "key": "string",
            "value": "string"
          }
        ],
        "windowsNodeConfig": {
          "osVersion": "OS_VERSION_UNSPECIFIED"
        },
        "workloadMetadataConfig": {
          "mode": "MODE_UNSPECIFIED",
          "nodeMetadata": "UNSPECIFIED"
        }
      },
      "nodeIpv4CidrSize": 0,
      "nodePoolAutoConfig": {
        "networkTags": {
          "tags": [
            "string"
          ]
        },
        "resourceManagerTags": {
          "tags": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "nodePoolDefaults": {
        "nodeConfigDefaults": {
          "gcfsConfig": {
            "enabled": true
          },
          "hostMaintenancePolicy": {
            "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
            "opportunisticMaintenanceStrategy": {
              "maintenanceAvailabilityWindow": "string",
              "minNodesPerPool": "string",
              "nodeIdleTimeWindow": "string"
            }
          },
          "loggingConfig": {
            "variantConfig": {
              "variant": "VARIANT_UNSPECIFIED"
            }
          }
        }
      },
      "nodePools": [
        {
          "autoscaling": {
            "autoprovisioned": true,
            "enabled": true,
            "locationPolicy": "LOCATION_POLICY_UNSPECIFIED",
            "maxNodeCount": 0,
            "minNodeCount": 0,
            "totalMaxNodeCount": 0,
            "totalMinNodeCount": 0
          },
          "bestEffortProvisioning": {
            "enabled": true,
            "minProvisionNodes": 0
          },
          "conditions": [
            {
              "canonicalCode": "OK",
              "code": "UNKNOWN",
              "message": "string"
            }
          ],
          "config": {
            "accelerators": [
              {
                "acceleratorCount": "string",
                "acceleratorType": "string",
                "gpuDriverInstallationConfig": {
                  "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
                },
                "gpuPartitionSize": "string",
                "gpuSharingConfig": {
                  "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
                  "maxSharedClientsPerGpu": "string"
                },
                "maxTimeSharedClientsPerGpu": "string"
              }
            ],
            "advancedMachineFeatures": {
              "threadsPerCore": "string"
            },
            "bootDiskKmsKey": "string",
            "confidentialNodes": {
              "enabled": true
            },
            "diskSizeGb": 0,
            "diskType": "string",
            "enableConfidentialStorage": true,
            "ephemeralStorageConfig": {
              "localSsdCount": 0
            },
            "ephemeralStorageLocalSsdConfig": {
              "localSsdCount": 0
            },
            "fastSocket": {
              "enabled": true
            },
            "gcfsConfig": {
              "enabled": true
            },
            "gvnic": {
              "enabled": true
            },
            "hostMaintenancePolicy": {
              "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
              "opportunisticMaintenanceStrategy": {
                "maintenanceAvailabilityWindow": "string",
                "minNodesPerPool": "string",
                "nodeIdleTimeWindow": "string"
              }
            },
            "imageType": "string",
            "kubeletConfig": {
              "cpuCfsQuota": true,
              "cpuCfsQuotaPeriod": "string",
              "cpuManagerPolicy": "string",
              "insecureKubeletReadonlyPortEnabled": true,
              "podPidsLimit": "string"
            },
            "labels": {
              "property1": "string",
              "property2": "string"
            },
            "linuxNodeConfig": {
              "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
              "sysctls": {
                "property1": "string",
                "property2": "string"
              }
            },
            "localNvmeSsdBlockConfig": {
              "localSsdCount": 0
            },
            "localSsdCount": 0,
            "loggingConfig": {
              "variantConfig": {
                "variant": "VARIANT_UNSPECIFIED"
              }
            },
            "machineType": "string",
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "minCpuPlatform": "string",
            "nodeGroup": "string",
            "oauthScopes": [
              "string"
            ],
            "preemptible": true,
            "reservationAffinity": {
              "consumeReservationType": "UNSPECIFIED",
              "key": "string",
              "values": [
                "string"
              ]
            },
            "resourceLabels": {
              "property1": "string",
              "property2": "string"
            },
            "resourceManagerTags": {
              "tags": {
                "property1": "string",
                "property2": "string"
              }
            },
            "sandboxConfig": {
              "sandboxType": "string",
              "type": "UNSPECIFIED"
            },
            "secondaryBootDisks": [
              {
                "diskImage": "string",
                "mode": "MODE_UNSPECIFIED"
              }
            ],
            "serviceAccount": "string",
            "shieldedInstanceConfig": {
              "enableIntegrityMonitoring": true,
              "enableSecureBoot": true
            },
            "soleTenantConfig": {
              "nodeAffinities": [
                {
                  "key": "string",
                  "operator": "OPERATOR_UNSPECIFIED",
                  "values": [
                    "string"
                  ]
                }
              ]
            },
            "spot": true,
            "tags": [
              "string"
            ],
            "taints": [
              {
                "effect": "EFFECT_UNSPECIFIED",
                "key": "string",
                "value": "string"
              }
            ],
            "windowsNodeConfig": {
              "osVersion": "OS_VERSION_UNSPECIFIED"
            },
            "workloadMetadataConfig": {
              "mode": "MODE_UNSPECIFIED",
              "nodeMetadata": "UNSPECIFIED"
            }
          },
          "etag": "string",
          "initialNodeCount": 0,
          "instanceGroupUrls": [
            "string"
          ],
          "locations": [
            "string"
          ],
          "management": {
            "autoRepair": true,
            "autoUpgrade": true,
            "upgradeOptions": {
              "autoUpgradeStartTime": "string",
              "description": "string"
            }
          },
          "maxPodsConstraint": {
            "maxPodsPerNode": "string"
          },
          "name": "string",
          "networkConfig": {
            "additionalNodeNetworkConfigs": [
              {
                "network": "string",
                "subnetwork": "string"
              }
            ],
            "additionalPodNetworkConfigs": [
              {
                "maxPodsPerNode": {
                  "maxPodsPerNode": "string"
                },
                "secondaryPodRange": "string",
                "subnetwork": "string"
              }
            ],
            "createPodRange": true,
            "enablePrivateNodes": true,
            "networkPerformanceConfig": {
              "externalIpEgressBandwidthTier": "TIER_UNSPECIFIED",
              "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
            },
            "podCidrOverprovisionConfig": {
              "disable": true
            },
            "podIpv4CidrBlock": "string",
            "podIpv4RangeUtilization": 0,
            "podRange": "string"
          },
          "placementPolicy": {
            "policyName": "string",
            "tpuTopology": "string",
            "type": "TYPE_UNSPECIFIED"
          },
          "podIpv4CidrSize": 0,
          "queuedProvisioning": {
            "enabled": true
          },
          "selfLink": "string",
          "status": "STATUS_UNSPECIFIED",
          "statusMessage": "string",
          "updateInfo": {
            "blueGreenInfo": {
              "blueInstanceGroupUrls": [
                "string"
              ],
              "bluePoolDeletionStartTime": "string",
              "greenInstanceGroupUrls": [
                "string"
              ],
              "greenPoolVersion": "string",
              "phase": "PHASE_UNSPECIFIED"
            }
          },
          "upgradeSettings": {
            "blueGreenSettings": {
              "autoscaledRolloutPolicy": {},
              "nodePoolSoakDuration": "string",
              "standardRolloutPolicy": {
                "batchNodeCount": 0,
                "batchPercentage": 0,
                "batchSoakDuration": "string"
              }
            },
            "maxSurge": 0,
            "maxUnavailable": 0,
            "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
          },
          "version": "string"
        }
      ],
      "notificationConfig": {
        "pubsub": {
          "enabled": true,
          "filter": {
            "eventType": [
              "EVENT_TYPE_UNSPECIFIED"
            ]
          },
          "topic": "string"
        }
      },
      "parentProductConfig": {
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "productName": "string"
      },
      "podSecurityPolicyConfig": {
        "enabled": true
      },
      "privateCluster": true,
      "privateClusterConfig": {
        "enablePrivateEndpoint": true,
        "enablePrivateNodes": true,
        "masterGlobalAccessConfig": {
          "enabled": true
        },
        "masterIpv4CidrBlock": "string",
        "peeringName": "string",
        "privateEndpoint": "string",
        "privateEndpointSubnetwork": "string",
        "publicEndpoint": "string"
      },
      "protectConfig": {
        "workloadConfig": {
          "auditMode": "MODE_UNSPECIFIED"
        },
        "workloadVulnerabilityMode": "WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED"
      },
      "releaseChannel": {
        "channel": "UNSPECIFIED"
      },
      "resourceLabels": {
        "property1": "string",
        "property2": "string"
      },
      "resourceUsageExportConfig": {
        "bigqueryDestination": {
          "datasetId": "string"
        },
        "consumptionMeteringConfig": {
          "enabled": true
        },
        "enableNetworkEgressMetering": true
      },
      "securityPostureConfig": {
        "mode": "MODE_UNSPECIFIED",
        "vulnerabilityMode": "VULNERABILITY_MODE_UNSPECIFIED"
      },
      "selfLink": "string",
      "servicesIpv4Cidr": "string",
      "shieldedNodes": {
        "enabled": true
      },
      "status": "STATUS_UNSPECIFIED",
      "statusMessage": "string",
      "subnetwork": "string",
      "tpuConfig": {
        "enabled": true,
        "ipv4CidrBlock": "string",
        "useServiceNetworking": true
      },
      "tpuIpv4CidrBlock": "string",
      "verticalPodAutoscaling": {
        "enabled": true
      },
      "workloadAltsConfig": {
        "enableAlts": true
      },
      "workloadCertificates": {
        "enableCertificates": true
      },
      "workloadIdentityConfig": {
        "identityNamespace": "string",
        "identityProvider": "string",
        "workloadPool": "string"
      },
      "zone": "string"
    }
  ],
  "missingZones": [
    "string"
  ]
}
```

<h3 id="containerprojectszonesclusterslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListClustersResponse](#schemalistclustersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.zones.clusters.create

<a id="opIdcontainer.projects.zones.clusters.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string/zones/string/clusters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cluster": {
      "addonsConfig": {
        "cloudRunConfig": {
          "disabled": true,
          "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED"
        },
        "configConnectorConfig": {
          "enabled": true
        },
        "dnsCacheConfig": {
          "enabled": true
        },
        "gcePersistentDiskCsiDriverConfig": {
          "enabled": true
        },
        "gcpFilestoreCsiDriverConfig": {
          "enabled": true
        },
        "gcsFuseCsiDriverConfig": {
          "enabled": true
        },
        "gkeBackupAgentConfig": {
          "enabled": true
        },
        "horizontalPodAutoscaling": {
          "disabled": true
        },
        "httpLoadBalancing": {
          "disabled": true
        },
        "istioConfig": {
          "auth": "AUTH_NONE",
          "disabled": true
        },
        "kalmConfig": {
          "enabled": true
        },
        "kubernetesDashboard": {
          "disabled": true
        },
        "networkPolicyConfig": {
          "disabled": true
        },
        "statefulHaConfig": {
          "enabled": true
        }
      },
      "authenticatorGroupsConfig": {
        "enabled": true,
        "securityGroup": "string"
      },
      "autopilot": {
        "enabled": true,
        "workloadPolicyConfig": {
          "allowNetAdmin": true
        }
      },
      "autoscaling": {
        "autoprovisioningLocations": [
          "string"
        ],
        "autoprovisioningNodePoolDefaults": {
          "bootDiskKmsKey": "string",
          "diskSizeGb": 0,
          "diskType": "string",
          "imageType": "string",
          "insecureKubeletReadonlyPortEnabled": true,
          "management": {
            "autoRepair": true,
            "autoUpgrade": true,
            "upgradeOptions": {
              "autoUpgradeStartTime": "string",
              "description": "string"
            }
          },
          "minCpuPlatform": "string",
          "oauthScopes": [
            "string"
          ],
          "serviceAccount": "string",
          "shieldedInstanceConfig": {
            "enableIntegrityMonitoring": true,
            "enableSecureBoot": true
          },
          "upgradeSettings": {
            "blueGreenSettings": {
              "autoscaledRolloutPolicy": {},
              "nodePoolSoakDuration": "string",
              "standardRolloutPolicy": {
                "batchNodeCount": 0,
                "batchPercentage": 0,
                "batchSoakDuration": "string"
              }
            },
            "maxSurge": 0,
            "maxUnavailable": 0,
            "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
          }
        },
        "autoscalingProfile": "PROFILE_UNSPECIFIED",
        "enableNodeAutoprovisioning": true,
        "resourceLimits": [
          {
            "maximum": "string",
            "minimum": "string",
            "resourceType": "string"
          }
        ]
      },
      "binaryAuthorization": {
        "enabled": true,
        "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
        "policyBindings": [
          {
            "name": "string"
          }
        ]
      },
      "clusterIpv4Cidr": "string",
      "clusterTelemetry": {
        "type": "UNSPECIFIED"
      },
      "conditions": [
        {
          "canonicalCode": "OK",
          "code": "UNKNOWN",
          "message": "string"
        }
      ],
      "confidentialNodes": {
        "enabled": true
      },
      "costManagementConfig": {
        "enabled": true
      },
      "createTime": "string",
      "currentMasterVersion": "string",
      "currentNodeCount": 0,
      "currentNodeVersion": "string",
      "databaseEncryption": {
        "keyName": "string",
        "state": "UNKNOWN"
      },
      "defaultMaxPodsConstraint": {
        "maxPodsPerNode": "string"
      },
      "description": "string",
      "enableK8sBetaApis": {
        "enabledApis": [
          "string"
        ]
      },
      "enableKubernetesAlpha": true,
      "enableTpu": true,
      "endpoint": "string",
      "enterpriseConfig": {},
      "etag": "string",
      "expireTime": "string",
      "fleet": {
        "membership": "string",
        "preRegistered": true,
        "project": "string"
      },
      "identityServiceConfig": {
        "enabled": true
      },
      "initialClusterVersion": "string",
      "initialNodeCount": 0,
      "instanceGroupUrls": [
        "string"
      ],
      "ipAllocationPolicy": {
        "allowRouteOverlap": true,
        "clusterIpv4Cidr": "string",
        "clusterIpv4CidrBlock": "string",
        "clusterSecondaryRangeName": "string",
        "createSubnetwork": true,
        "ipv6AccessType": "IPV6_ACCESS_TYPE_UNSPECIFIED",
        "nodeIpv4Cidr": "string",
        "nodeIpv4CidrBlock": "string",
        "podCidrOverprovisionConfig": {
          "disable": true
        },
        "servicesIpv4Cidr": "string",
        "servicesIpv4CidrBlock": "string",
        "servicesSecondaryRangeName": "string",
        "stackType": "STACK_TYPE_UNSPECIFIED",
        "subnetworkName": "string",
        "tpuIpv4CidrBlock": "string",
        "useIpAliases": true,
        "useRoutes": true
      },
      "labelFingerprint": "string",
      "legacyAbac": {
        "enabled": true
      },
      "location": "string",
      "locations": [
        "string"
      ],
      "loggingConfig": {
        "componentConfig": {
          "enableComponents": [
            "COMPONENT_UNSPECIFIED"
          ]
        }
      },
      "loggingService": "string",
      "maintenancePolicy": {
        "resourceVersion": "string",
        "window": {
          "dailyMaintenanceWindow": {
            "duration": "string",
            "startTime": "string"
          },
          "maintenanceExclusions": {
            "property1": {
              "endTime": "string",
              "maintenanceExclusionOptions": {
                "scope": "NO_UPGRADES"
              },
              "startTime": "string"
            },
            "property2": {
              "endTime": "string",
              "maintenanceExclusionOptions": {
                "scope": "NO_UPGRADES"
              },
              "startTime": "string"
            }
          },
          "recurringWindow": {
            "recurrence": "string",
            "window": {
              "endTime": "string",
              "maintenanceExclusionOptions": {
                "scope": "NO_UPGRADES"
              },
              "startTime": "string"
            }
          }
        }
      },
      "master": {},
      "masterAuth": {
        "clientCertificate": "string",
        "clientCertificateConfig": {
          "issueClientCertificate": true
        },
        "clientKey": "string",
        "clusterCaCertificate": "string",
        "password": "string",
        "username": "string"
      },
      "masterAuthorizedNetworksConfig": {
        "cidrBlocks": [
          {
            "cidrBlock": "string",
            "displayName": "string"
          }
        ],
        "enabled": true,
        "gcpPublicCidrsAccessEnabled": true
      },
      "masterIpv4CidrBlock": "string",
      "meshCertificates": {
        "enableCertificates": true
      },
      "monitoringConfig": {
        "advancedDatapathObservabilityConfig": {
          "enableMetrics": true,
          "enableRelay": true,
          "relayMode": "RELAY_MODE_UNSPECIFIED"
        },
        "componentConfig": {
          "enableComponents": [
            "COMPONENT_UNSPECIFIED"
          ]
        },
        "managedPrometheusConfig": {
          "enabled": true
        }
      },
      "monitoringService": "string",
      "name": "string",
      "network": "string",
      "networkConfig": {
        "datapathProvider": "DATAPATH_PROVIDER_UNSPECIFIED",
        "defaultSnatStatus": {
          "disabled": true
        },
        "dnsConfig": {
          "clusterDns": "PROVIDER_UNSPECIFIED",
          "clusterDnsDomain": "string",
          "clusterDnsScope": "DNS_SCOPE_UNSPECIFIED"
        },
        "enableFqdnNetworkPolicy": true,
        "enableIntraNodeVisibility": true,
        "enableL4ilbSubsetting": true,
        "enableMultiNetworking": true,
        "gatewayApiConfig": {
          "channel": "CHANNEL_UNSPECIFIED"
        },
        "inTransitEncryptionConfig": "IN_TRANSIT_ENCRYPTION_CONFIG_UNSPECIFIED",
        "network": "string",
        "networkPerformanceConfig": {
          "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
        },
        "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
        "serviceExternalIpsConfig": {
          "enabled": true
        },
        "subnetwork": "string"
      },
      "networkPolicy": {
        "enabled": true,
        "provider": "PROVIDER_UNSPECIFIED"
      },
      "nodeConfig": {
        "accelerators": [
          {
            "acceleratorCount": "string",
            "acceleratorType": "string",
            "gpuDriverInstallationConfig": {
              "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
            },
            "gpuPartitionSize": "string",
            "gpuSharingConfig": {
              "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
              "maxSharedClientsPerGpu": "string"
            },
            "maxTimeSharedClientsPerGpu": "string"
          }
        ],
        "advancedMachineFeatures": {
          "threadsPerCore": "string"
        },
        "bootDiskKmsKey": "string",
        "confidentialNodes": {
          "enabled": true
        },
        "diskSizeGb": 0,
        "diskType": "string",
        "enableConfidentialStorage": true,
        "ephemeralStorageConfig": {
          "localSsdCount": 0
        },
        "ephemeralStorageLocalSsdConfig": {
          "localSsdCount": 0
        },
        "fastSocket": {
          "enabled": true
        },
        "gcfsConfig": {
          "enabled": true
        },
        "gvnic": {
          "enabled": true
        },
        "hostMaintenancePolicy": {
          "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
          "opportunisticMaintenanceStrategy": {
            "maintenanceAvailabilityWindow": "string",
            "minNodesPerPool": "string",
            "nodeIdleTimeWindow": "string"
          }
        },
        "imageType": "string",
        "kubeletConfig": {
          "cpuCfsQuota": true,
          "cpuCfsQuotaPeriod": "string",
          "cpuManagerPolicy": "string",
          "insecureKubeletReadonlyPortEnabled": true,
          "podPidsLimit": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "linuxNodeConfig": {
          "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
          "sysctls": {
            "property1": "string",
            "property2": "string"
          }
        },
        "localNvmeSsdBlockConfig": {
          "localSsdCount": 0
        },
        "localSsdCount": 0,
        "loggingConfig": {
          "variantConfig": {
            "variant": "VARIANT_UNSPECIFIED"
          }
        },
        "machineType": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "minCpuPlatform": "string",
        "nodeGroup": "string",
        "oauthScopes": [
          "string"
        ],
        "preemptible": true,
        "reservationAffinity": {
          "consumeReservationType": "UNSPECIFIED",
          "key": "string",
          "values": [
            "string"
          ]
        },
        "resourceLabels": {
          "property1": "string",
          "property2": "string"
        },
        "resourceManagerTags": {
          "tags": {
            "property1": "string",
            "property2": "string"
          }
        },
        "sandboxConfig": {
          "sandboxType": "string",
          "type": "UNSPECIFIED"
        },
        "secondaryBootDisks": [
          {
            "diskImage": "string",
            "mode": "MODE_UNSPECIFIED"
          }
        ],
        "serviceAccount": "string",
        "shieldedInstanceConfig": {
          "enableIntegrityMonitoring": true,
          "enableSecureBoot": true
        },
        "soleTenantConfig": {
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ]
        },
        "spot": true,
        "tags": [
          "string"
        ],
        "taints": [
          {
            "effect": "EFFECT_UNSPECIFIED",
            "key": "string",
            "value": "string"
          }
        ],
        "windowsNodeConfig": {
          "osVersion": "OS_VERSION_UNSPECIFIED"
        },
        "workloadMetadataConfig": {
          "mode": "MODE_UNSPECIFIED",
          "nodeMetadata": "UNSPECIFIED"
        }
      },
      "nodeIpv4CidrSize": 0,
      "nodePoolAutoConfig": {
        "networkTags": {
          "tags": [
            "string"
          ]
        },
        "resourceManagerTags": {
          "tags": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "nodePoolDefaults": {
        "nodeConfigDefaults": {
          "gcfsConfig": {
            "enabled": true
          },
          "hostMaintenancePolicy": {
            "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
            "opportunisticMaintenanceStrategy": {
              "maintenanceAvailabilityWindow": "string",
              "minNodesPerPool": "string",
              "nodeIdleTimeWindow": "string"
            }
          },
          "loggingConfig": {
            "variantConfig": {
              "variant": "VARIANT_UNSPECIFIED"
            }
          }
        }
      },
      "nodePools": [
        {
          "autoscaling": {
            "autoprovisioned": true,
            "enabled": true,
            "locationPolicy": "LOCATION_POLICY_UNSPECIFIED",
            "maxNodeCount": 0,
            "minNodeCount": 0,
            "totalMaxNodeCount": 0,
            "totalMinNodeCount": 0
          },
          "bestEffortProvisioning": {
            "enabled": true,
            "minProvisionNodes": 0
          },
          "conditions": [
            {
              "canonicalCode": "OK",
              "code": "UNKNOWN",
              "message": "string"
            }
          ],
          "config": {
            "accelerators": [
              {
                "acceleratorCount": "string",
                "acceleratorType": "string",
                "gpuDriverInstallationConfig": {
                  "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
                },
                "gpuPartitionSize": "string",
                "gpuSharingConfig": {
                  "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
                  "maxSharedClientsPerGpu": "string"
                },
                "maxTimeSharedClientsPerGpu": "string"
              }
            ],
            "advancedMachineFeatures": {
              "threadsPerCore": "string"
            },
            "bootDiskKmsKey": "string",
            "confidentialNodes": {
              "enabled": true
            },
            "diskSizeGb": 0,
            "diskType": "string",
            "enableConfidentialStorage": true,
            "ephemeralStorageConfig": {
              "localSsdCount": 0
            },
            "ephemeralStorageLocalSsdConfig": {
              "localSsdCount": 0
            },
            "fastSocket": {
              "enabled": true
            },
            "gcfsConfig": {
              "enabled": true
            },
            "gvnic": {
              "enabled": true
            },
            "hostMaintenancePolicy": {
              "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
              "opportunisticMaintenanceStrategy": {
                "maintenanceAvailabilityWindow": "string",
                "minNodesPerPool": "string",
                "nodeIdleTimeWindow": "string"
              }
            },
            "imageType": "string",
            "kubeletConfig": {
              "cpuCfsQuota": true,
              "cpuCfsQuotaPeriod": "string",
              "cpuManagerPolicy": "string",
              "insecureKubeletReadonlyPortEnabled": true,
              "podPidsLimit": "string"
            },
            "labels": {
              "property1": "string",
              "property2": "string"
            },
            "linuxNodeConfig": {
              "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
              "sysctls": {
                "property1": "string",
                "property2": "string"
              }
            },
            "localNvmeSsdBlockConfig": {
              "localSsdCount": 0
            },
            "localSsdCount": 0,
            "loggingConfig": {
              "variantConfig": {
                "variant": "VARIANT_UNSPECIFIED"
              }
            },
            "machineType": "string",
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "minCpuPlatform": "string",
            "nodeGroup": "string",
            "oauthScopes": [
              "string"
            ],
            "preemptible": true,
            "reservationAffinity": {
              "consumeReservationType": "UNSPECIFIED",
              "key": "string",
              "values": [
                "string"
              ]
            },
            "resourceLabels": {
              "property1": "string",
              "property2": "string"
            },
            "resourceManagerTags": {
              "tags": {
                "property1": "string",
                "property2": "string"
              }
            },
            "sandboxConfig": {
              "sandboxType": "string",
              "type": "UNSPECIFIED"
            },
            "secondaryBootDisks": [
              {
                "diskImage": "string",
                "mode": "MODE_UNSPECIFIED"
              }
            ],
            "serviceAccount": "string",
            "shieldedInstanceConfig": {
              "enableIntegrityMonitoring": true,
              "enableSecureBoot": true
            },
            "soleTenantConfig": {
              "nodeAffinities": [
                {
                  "key": "string",
                  "operator": "OPERATOR_UNSPECIFIED",
                  "values": [
                    "string"
                  ]
                }
              ]
            },
            "spot": true,
            "tags": [
              "string"
            ],
            "taints": [
              {
                "effect": "EFFECT_UNSPECIFIED",
                "key": "string",
                "value": "string"
              }
            ],
            "windowsNodeConfig": {
              "osVersion": "OS_VERSION_UNSPECIFIED"
            },
            "workloadMetadataConfig": {
              "mode": "MODE_UNSPECIFIED",
              "nodeMetadata": "UNSPECIFIED"
            }
          },
          "etag": "string",
          "initialNodeCount": 0,
          "instanceGroupUrls": [
            "string"
          ],
          "locations": [
            "string"
          ],
          "management": {
            "autoRepair": true,
            "autoUpgrade": true,
            "upgradeOptions": {
              "autoUpgradeStartTime": "string",
              "description": "string"
            }
          },
          "maxPodsConstraint": {
            "maxPodsPerNode": "string"
          },
          "name": "string",
          "networkConfig": {
            "additionalNodeNetworkConfigs": [
              {
                "network": "string",
                "subnetwork": "string"
              }
            ],
            "additionalPodNetworkConfigs": [
              {
                "maxPodsPerNode": {
                  "maxPodsPerNode": "string"
                },
                "secondaryPodRange": "string",
                "subnetwork": "string"
              }
            ],
            "createPodRange": true,
            "enablePrivateNodes": true,
            "networkPerformanceConfig": {
              "externalIpEgressBandwidthTier": "TIER_UNSPECIFIED",
              "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
            },
            "podCidrOverprovisionConfig": {
              "disable": true
            },
            "podIpv4CidrBlock": "string",
            "podRange": "string"
          },
          "placementPolicy": {
            "policyName": "string",
            "tpuTopology": "string",
            "type": "TYPE_UNSPECIFIED"
          },
          "podIpv4CidrSize": 0,
          "queuedProvisioning": {
            "enabled": true
          },
          "selfLink": "string",
          "status": "STATUS_UNSPECIFIED",
          "statusMessage": "string",
          "upgradeSettings": {
            "blueGreenSettings": {
              "autoscaledRolloutPolicy": {},
              "nodePoolSoakDuration": "string",
              "standardRolloutPolicy": {
                "batchNodeCount": 0,
                "batchPercentage": 0,
                "batchSoakDuration": "string"
              }
            },
            "maxSurge": 0,
            "maxUnavailable": 0,
            "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
          },
          "version": "string"
        }
      ],
      "notificationConfig": {
        "pubsub": {
          "enabled": true,
          "filter": {
            "eventType": [
              "EVENT_TYPE_UNSPECIFIED"
            ]
          },
          "topic": "string"
        }
      },
      "parentProductConfig": {
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "productName": "string"
      },
      "podSecurityPolicyConfig": {
        "enabled": true
      },
      "privateCluster": true,
      "privateClusterConfig": {
        "enablePrivateEndpoint": true,
        "enablePrivateNodes": true,
        "masterGlobalAccessConfig": {
          "enabled": true
        },
        "masterIpv4CidrBlock": "string",
        "peeringName": "string",
        "privateEndpoint": "string",
        "privateEndpointSubnetwork": "string",
        "publicEndpoint": "string"
      },
      "protectConfig": {
        "workloadConfig": {
          "auditMode": "MODE_UNSPECIFIED"
        },
        "workloadVulnerabilityMode": "WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED"
      },
      "releaseChannel": {
        "channel": "UNSPECIFIED"
      },
      "resourceLabels": {
        "property1": "string",
        "property2": "string"
      },
      "resourceUsageExportConfig": {
        "bigqueryDestination": {
          "datasetId": "string"
        },
        "consumptionMeteringConfig": {
          "enabled": true
        },
        "enableNetworkEgressMetering": true
      },
      "securityPostureConfig": {
        "mode": "MODE_UNSPECIFIED",
        "vulnerabilityMode": "VULNERABILITY_MODE_UNSPECIFIED"
      },
      "selfLink": "string",
      "servicesIpv4Cidr": "string",
      "shieldedNodes": {
        "enabled": true
      },
      "status": "STATUS_UNSPECIFIED",
      "statusMessage": "string",
      "subnetwork": "string",
      "tpuConfig": {
        "enabled": true,
        "ipv4CidrBlock": "string",
        "useServiceNetworking": true
      },
      "tpuIpv4CidrBlock": "string",
      "verticalPodAutoscaling": {
        "enabled": true
      },
      "workloadAltsConfig": {
        "enableAlts": true
      },
      "workloadCertificates": {
        "enableCertificates": true
      },
      "workloadIdentityConfig": {
        "identityNamespace": "string",
        "identityProvider": "string",
        "workloadPool": "string"
      },
      "zone": "string"
    },
    "parent": "string",
    "projectId": "string",
    "zone": "string"
  }'
```

`POST /v1beta1/projects/{projectId}/zones/{zone}/clusters`

Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.

> Body parameter

```json
{
  "cluster": {
    "addonsConfig": {
      "cloudRunConfig": {
        "disabled": true,
        "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED"
      },
      "configConnectorConfig": {
        "enabled": true
      },
      "dnsCacheConfig": {
        "enabled": true
      },
      "gcePersistentDiskCsiDriverConfig": {
        "enabled": true
      },
      "gcpFilestoreCsiDriverConfig": {
        "enabled": true
      },
      "gcsFuseCsiDriverConfig": {
        "enabled": true
      },
      "gkeBackupAgentConfig": {
        "enabled": true
      },
      "horizontalPodAutoscaling": {
        "disabled": true
      },
      "httpLoadBalancing": {
        "disabled": true
      },
      "istioConfig": {
        "auth": "AUTH_NONE",
        "disabled": true
      },
      "kalmConfig": {
        "enabled": true
      },
      "kubernetesDashboard": {
        "disabled": true
      },
      "networkPolicyConfig": {
        "disabled": true
      },
      "statefulHaConfig": {
        "enabled": true
      }
    },
    "authenticatorGroupsConfig": {
      "enabled": true,
      "securityGroup": "string"
    },
    "autopilot": {
      "enabled": true,
      "workloadPolicyConfig": {
        "allowNetAdmin": true
      }
    },
    "autoscaling": {
      "autoprovisioningLocations": [
        "string"
      ],
      "autoprovisioningNodePoolDefaults": {
        "bootDiskKmsKey": "string",
        "diskSizeGb": 0,
        "diskType": "string",
        "imageType": "string",
        "insecureKubeletReadonlyPortEnabled": true,
        "management": {
          "autoRepair": true,
          "autoUpgrade": true,
          "upgradeOptions": {
            "autoUpgradeStartTime": "string",
            "description": "string"
          }
        },
        "minCpuPlatform": "string",
        "oauthScopes": [
          "string"
        ],
        "serviceAccount": "string",
        "shieldedInstanceConfig": {
          "enableIntegrityMonitoring": true,
          "enableSecureBoot": true
        },
        "upgradeSettings": {
          "blueGreenSettings": {
            "autoscaledRolloutPolicy": {},
            "nodePoolSoakDuration": "string",
            "standardRolloutPolicy": {
              "batchNodeCount": 0,
              "batchPercentage": 0,
              "batchSoakDuration": "string"
            }
          },
          "maxSurge": 0,
          "maxUnavailable": 0,
          "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
        }
      },
      "autoscalingProfile": "PROFILE_UNSPECIFIED",
      "enableNodeAutoprovisioning": true,
      "resourceLimits": [
        {
          "maximum": "string",
          "minimum": "string",
          "resourceType": "string"
        }
      ]
    },
    "binaryAuthorization": {
      "enabled": true,
      "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
      "policyBindings": [
        {
          "name": "string"
        }
      ]
    },
    "clusterIpv4Cidr": "string",
    "clusterTelemetry": {
      "type": "UNSPECIFIED"
    },
    "conditions": [
      {
        "canonicalCode": "OK",
        "code": "UNKNOWN",
        "message": "string"
      }
    ],
    "confidentialNodes": {
      "enabled": true
    },
    "costManagementConfig": {
      "enabled": true
    },
    "createTime": "string",
    "currentMasterVersion": "string",
    "currentNodeCount": 0,
    "currentNodeVersion": "string",
    "databaseEncryption": {
      "keyName": "string",
      "state": "UNKNOWN"
    },
    "defaultMaxPodsConstraint": {
      "maxPodsPerNode": "string"
    },
    "description": "string",
    "enableK8sBetaApis": {
      "enabledApis": [
        "string"
      ]
    },
    "enableKubernetesAlpha": true,
    "enableTpu": true,
    "endpoint": "string",
    "enterpriseConfig": {},
    "etag": "string",
    "expireTime": "string",
    "fleet": {
      "membership": "string",
      "preRegistered": true,
      "project": "string"
    },
    "identityServiceConfig": {
      "enabled": true
    },
    "initialClusterVersion": "string",
    "initialNodeCount": 0,
    "instanceGroupUrls": [
      "string"
    ],
    "ipAllocationPolicy": {
      "allowRouteOverlap": true,
      "clusterIpv4Cidr": "string",
      "clusterIpv4CidrBlock": "string",
      "clusterSecondaryRangeName": "string",
      "createSubnetwork": true,
      "ipv6AccessType": "IPV6_ACCESS_TYPE_UNSPECIFIED",
      "nodeIpv4Cidr": "string",
      "nodeIpv4CidrBlock": "string",
      "podCidrOverprovisionConfig": {
        "disable": true
      },
      "servicesIpv4Cidr": "string",
      "servicesIpv4CidrBlock": "string",
      "servicesSecondaryRangeName": "string",
      "stackType": "STACK_TYPE_UNSPECIFIED",
      "subnetworkName": "string",
      "tpuIpv4CidrBlock": "string",
      "useIpAliases": true,
      "useRoutes": true
    },
    "labelFingerprint": "string",
    "legacyAbac": {
      "enabled": true
    },
    "location": "string",
    "locations": [
      "string"
    ],
    "loggingConfig": {
      "componentConfig": {
        "enableComponents": [
          "COMPONENT_UNSPECIFIED"
        ]
      }
    },
    "loggingService": "string",
    "maintenancePolicy": {
      "resourceVersion": "string",
      "window": {
        "dailyMaintenanceWindow": {
          "duration": "string",
          "startTime": "string"
        },
        "maintenanceExclusions": {
          "property1": {
            "endTime": "string",
            "maintenanceExclusionOptions": {
              "scope": "NO_UPGRADES"
            },
            "startTime": "string"
          },
          "property2": {
            "endTime": "string",
            "maintenanceExclusionOptions": {
              "scope": "NO_UPGRADES"
            },
            "startTime": "string"
          }
        },
        "recurringWindow": {
          "recurrence": "string",
          "window": {
            "endTime": "string",
            "maintenanceExclusionOptions": {
              "scope": "NO_UPGRADES"
            },
            "startTime": "string"
          }
        }
      }
    },
    "master": {},
    "masterAuth": {
      "clientCertificate": "string",
      "clientCertificateConfig": {
        "issueClientCertificate": true
      },
      "clientKey": "string",
      "clusterCaCertificate": "string",
      "password": "string",
      "username": "string"
    },
    "masterAuthorizedNetworksConfig": {
      "cidrBlocks": [
        {
          "cidrBlock": "string",
          "displayName": "string"
        }
      ],
      "enabled": true,
      "gcpPublicCidrsAccessEnabled": true
    },
    "masterIpv4CidrBlock": "string",
    "meshCertificates": {
      "enableCertificates": true
    },
    "monitoringConfig": {
      "advancedDatapathObservabilityConfig": {
        "enableMetrics": true,
        "enableRelay": true,
        "relayMode": "RELAY_MODE_UNSPECIFIED"
      },
      "componentConfig": {
        "enableComponents": [
          "COMPONENT_UNSPECIFIED"
        ]
      },
      "managedPrometheusConfig": {
        "enabled": true
      }
    },
    "monitoringService": "string",
    "name": "string",
    "network": "string",
    "networkConfig": {
      "datapathProvider": "DATAPATH_PROVIDER_UNSPECIFIED",
      "defaultSnatStatus": {
        "disabled": true
      },
      "dnsConfig": {
        "clusterDns": "PROVIDER_UNSPECIFIED",
        "clusterDnsDomain": "string",
        "clusterDnsScope": "DNS_SCOPE_UNSPECIFIED"
      },
      "enableFqdnNetworkPolicy": true,
      "enableIntraNodeVisibility": true,
      "enableL4ilbSubsetting": true,
      "enableMultiNetworking": true,
      "gatewayApiConfig": {
        "channel": "CHANNEL_UNSPECIFIED"
      },
      "inTransitEncryptionConfig": "IN_TRANSIT_ENCRYPTION_CONFIG_UNSPECIFIED",
      "network": "string",
      "networkPerformanceConfig": {
        "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
      },
      "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
      "serviceExternalIpsConfig": {
        "enabled": true
      },
      "subnetwork": "string"
    },
    "networkPolicy": {
      "enabled": true,
      "provider": "PROVIDER_UNSPECIFIED"
    },
    "nodeConfig": {
      "accelerators": [
        {
          "acceleratorCount": "string",
          "acceleratorType": "string",
          "gpuDriverInstallationConfig": {
            "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
          },
          "gpuPartitionSize": "string",
          "gpuSharingConfig": {
            "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
            "maxSharedClientsPerGpu": "string"
          },
          "maxTimeSharedClientsPerGpu": "string"
        }
      ],
      "advancedMachineFeatures": {
        "threadsPerCore": "string"
      },
      "bootDiskKmsKey": "string",
      "confidentialNodes": {
        "enabled": true
      },
      "diskSizeGb": 0,
      "diskType": "string",
      "enableConfidentialStorage": true,
      "ephemeralStorageConfig": {
        "localSsdCount": 0
      },
      "ephemeralStorageLocalSsdConfig": {
        "localSsdCount": 0
      },
      "fastSocket": {
        "enabled": true
      },
      "gcfsConfig": {
        "enabled": true
      },
      "gvnic": {
        "enabled": true
      },
      "hostMaintenancePolicy": {
        "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
        "opportunisticMaintenanceStrategy": {
          "maintenanceAvailabilityWindow": "string",
          "minNodesPerPool": "string",
          "nodeIdleTimeWindow": "string"
        }
      },
      "imageType": "string",
      "kubeletConfig": {
        "cpuCfsQuota": true,
        "cpuCfsQuotaPeriod": "string",
        "cpuManagerPolicy": "string",
        "insecureKubeletReadonlyPortEnabled": true,
        "podPidsLimit": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "linuxNodeConfig": {
        "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
        "sysctls": {
          "property1": "string",
          "property2": "string"
        }
      },
      "localNvmeSsdBlockConfig": {
        "localSsdCount": 0
      },
      "localSsdCount": 0,
      "loggingConfig": {
        "variantConfig": {
          "variant": "VARIANT_UNSPECIFIED"
        }
      },
      "machineType": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "minCpuPlatform": "string",
      "nodeGroup": "string",
      "oauthScopes": [
        "string"
      ],
      "preemptible": true,
      "reservationAffinity": {
        "consumeReservationType": "UNSPECIFIED",
        "key": "string",
        "values": [
          "string"
        ]
      },
      "resourceLabels": {
        "property1": "string",
        "property2": "string"
      },
      "resourceManagerTags": {
        "tags": {
          "property1": "string",
          "property2": "string"
        }
      },
      "sandboxConfig": {
        "sandboxType": "string",
        "type": "UNSPECIFIED"
      },
      "secondaryBootDisks": [
        {
          "diskImage": "string",
          "mode": "MODE_UNSPECIFIED"
        }
      ],
      "serviceAccount": "string",
      "shieldedInstanceConfig": {
        "enableIntegrityMonitoring": true,
        "enableSecureBoot": true
      },
      "soleTenantConfig": {
        "nodeAffinities": [
          {
            "key": "string",
            "operator": "OPERATOR_UNSPECIFIED",
            "values": [
              "string"
            ]
          }
        ]
      },
      "spot": true,
      "tags": [
        "string"
      ],
      "taints": [
        {
          "effect": "EFFECT_UNSPECIFIED",
          "key": "string",
          "value": "string"
        }
      ],
      "windowsNodeConfig": {
        "osVersion": "OS_VERSION_UNSPECIFIED"
      },
      "workloadMetadataConfig": {
        "mode": "MODE_UNSPECIFIED",
        "nodeMetadata": "UNSPECIFIED"
      }
    },
    "nodeIpv4CidrSize": 0,
    "nodePoolAutoConfig": {
      "networkTags": {
        "tags": [
          "string"
        ]
      },
      "resourceManagerTags": {
        "tags": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "nodePoolDefaults": {
      "nodeConfigDefaults": {
        "gcfsConfig": {
          "enabled": true
        },
        "hostMaintenancePolicy": {
          "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
          "opportunisticMaintenanceStrategy": {
            "maintenanceAvailabilityWindow": "string",
            "minNodesPerPool": "string",
            "nodeIdleTimeWindow": "string"
          }
        },
        "loggingConfig": {
          "variantConfig": {
            "variant": "VARIANT_UNSPECIFIED"
          }
        }
      }
    },
    "nodePools": [
      {
        "autoscaling": {
          "autoprovisioned": true,
          "enabled": true,
          "locationPolicy": "LOCATION_POLICY_UNSPECIFIED",
          "maxNodeCount": 0,
          "minNodeCount": 0,
          "totalMaxNodeCount": 0,
          "totalMinNodeCount": 0
        },
        "bestEffortProvisioning": {
          "enabled": true,
          "minProvisionNodes": 0
        },
        "conditions": [
          {
            "canonicalCode": "OK",
            "code": "UNKNOWN",
            "message": "string"
          }
        ],
        "config": {
          "accelerators": [
            {
              "acceleratorCount": "string",
              "acceleratorType": "string",
              "gpuDriverInstallationConfig": {
                "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
              },
              "gpuPartitionSize": "string",
              "gpuSharingConfig": {
                "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
                "maxSharedClientsPerGpu": "string"
              },
              "maxTimeSharedClientsPerGpu": "string"
            }
          ],
          "advancedMachineFeatures": {
            "threadsPerCore": "string"
          },
          "bootDiskKmsKey": "string",
          "confidentialNodes": {
            "enabled": true
          },
          "diskSizeGb": 0,
          "diskType": "string",
          "enableConfidentialStorage": true,
          "ephemeralStorageConfig": {
            "localSsdCount": 0
          },
          "ephemeralStorageLocalSsdConfig": {
            "localSsdCount": 0
          },
          "fastSocket": {
            "enabled": true
          },
          "gcfsConfig": {
            "enabled": true
          },
          "gvnic": {
            "enabled": true
          },
          "hostMaintenancePolicy": {
            "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
            "opportunisticMaintenanceStrategy": {
              "maintenanceAvailabilityWindow": "string",
              "minNodesPerPool": "string",
              "nodeIdleTimeWindow": "string"
            }
          },
          "imageType": "string",
          "kubeletConfig": {
            "cpuCfsQuota": true,
            "cpuCfsQuotaPeriod": "string",
            "cpuManagerPolicy": "string",
            "insecureKubeletReadonlyPortEnabled": true,
            "podPidsLimit": "string"
          },
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "linuxNodeConfig": {
            "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
            "sysctls": {
              "property1": "string",
              "property2": "string"
            }
          },
          "localNvmeSsdBlockConfig": {
            "localSsdCount": 0
          },
          "localSsdCount": 0,
          "loggingConfig": {
            "variantConfig": {
              "variant": "VARIANT_UNSPECIFIED"
            }
          },
          "machineType": "string",
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "minCpuPlatform": "string",
          "nodeGroup": "string",
          "oauthScopes": [
            "string"
          ],
          "preemptible": true,
          "reservationAffinity": {
            "consumeReservationType": "UNSPECIFIED",
            "key": "string",
            "values": [
              "string"
            ]
          },
          "resourceLabels": {
            "property1": "string",
            "property2": "string"
          },
          "resourceManagerTags": {
            "tags": {
              "property1": "string",
              "property2": "string"
            }
          },
          "sandboxConfig": {
            "sandboxType": "string",
            "type": "UNSPECIFIED"
          },
          "secondaryBootDisks": [
            {
              "diskImage": "string",
              "mode": "MODE_UNSPECIFIED"
            }
          ],
          "serviceAccount": "string",
          "shieldedInstanceConfig": {
            "enableIntegrityMonitoring": true,
            "enableSecureBoot": true
          },
          "soleTenantConfig": {
            "nodeAffinities": [
              {
                "key": "string",
                "operator": "OPERATOR_UNSPECIFIED",
                "values": [
                  "string"
                ]
              }
            ]
          },
          "spot": true,
          "tags": [
            "string"
          ],
          "taints": [
            {
              "effect": "EFFECT_UNSPECIFIED",
              "key": "string",
              "value": "string"
            }
          ],
          "windowsNodeConfig": {
            "osVersion": "OS_VERSION_UNSPECIFIED"
          },
          "workloadMetadataConfig": {
            "mode": "MODE_UNSPECIFIED",
            "nodeMetadata": "UNSPECIFIED"
          }
        },
        "etag": "string",
        "initialNodeCount": 0,
        "instanceGroupUrls": [
          "string"
        ],
        "locations": [
          "string"
        ],
        "management": {
          "autoRepair": true,
          "autoUpgrade": true,
          "upgradeOptions": {
            "autoUpgradeStartTime": "string",
            "description": "string"
          }
        },
        "maxPodsConstraint": {
          "maxPodsPerNode": "string"
        },
        "name": "string",
        "networkConfig": {
          "additionalNodeNetworkConfigs": [
            {
              "network": "string",
              "subnetwork": "string"
            }
          ],
          "additionalPodNetworkConfigs": [
            {
              "maxPodsPerNode": {
                "maxPodsPerNode": "string"
              },
              "secondaryPodRange": "string",
              "subnetwork": "string"
            }
          ],
          "createPodRange": true,
          "enablePrivateNodes": true,
          "networkPerformanceConfig": {
            "externalIpEgressBandwidthTier": "TIER_UNSPECIFIED",
            "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
          },
          "podCidrOverprovisionConfig": {
            "disable": true
          },
          "podIpv4CidrBlock": "string",
          "podRange": "string"
        },
        "placementPolicy": {
          "policyName": "string",
          "tpuTopology": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "podIpv4CidrSize": 0,
        "queuedProvisioning": {
          "enabled": true
        },
        "selfLink": "string",
        "status": "STATUS_UNSPECIFIED",
        "statusMessage": "string",
        "upgradeSettings": {
          "blueGreenSettings": {
            "autoscaledRolloutPolicy": {},
            "nodePoolSoakDuration": "string",
            "standardRolloutPolicy": {
              "batchNodeCount": 0,
              "batchPercentage": 0,
              "batchSoakDuration": "string"
            }
          },
          "maxSurge": 0,
          "maxUnavailable": 0,
          "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
        },
        "version": "string"
      }
    ],
    "notificationConfig": {
      "pubsub": {
        "enabled": true,
        "filter": {
          "eventType": [
            "EVENT_TYPE_UNSPECIFIED"
          ]
        },
        "topic": "string"
      }
    },
    "parentProductConfig": {
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "productName": "string"
    },
    "podSecurityPolicyConfig": {
      "enabled": true
    },
    "privateCluster": true,
    "privateClusterConfig": {
      "enablePrivateEndpoint": true,
      "enablePrivateNodes": true,
      "masterGlobalAccessConfig": {
        "enabled": true
      },
      "masterIpv4CidrBlock": "string",
      "peeringName": "string",
      "privateEndpoint": "string",
      "privateEndpointSubnetwork": "string",
      "publicEndpoint": "string"
    },
    "protectConfig": {
      "workloadConfig": {
        "auditMode": "MODE_UNSPECIFIED"
      },
      "workloadVulnerabilityMode": "WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED"
    },
    "releaseChannel": {
      "channel": "UNSPECIFIED"
    },
    "resourceLabels": {
      "property1": "string",
      "property2": "string"
    },
    "resourceUsageExportConfig": {
      "bigqueryDestination": {
        "datasetId": "string"
      },
      "consumptionMeteringConfig": {
        "enabled": true
      },
      "enableNetworkEgressMetering": true
    },
    "securityPostureConfig": {
      "mode": "MODE_UNSPECIFIED",
      "vulnerabilityMode": "VULNERABILITY_MODE_UNSPECIFIED"
    },
    "selfLink": "string",
    "servicesIpv4Cidr": "string",
    "shieldedNodes": {
      "enabled": true
    },
    "status": "STATUS_UNSPECIFIED",
    "statusMessage": "string",
    "subnetwork": "string",
    "tpuConfig": {
      "enabled": true,
      "ipv4CidrBlock": "string",
      "useServiceNetworking": true
    },
    "tpuIpv4CidrBlock": "string",
    "verticalPodAutoscaling": {
      "enabled": true
    },
    "workloadAltsConfig": {
      "enableAlts": true
    },
    "workloadCertificates": {
      "enableCertificates": true
    },
    "workloadIdentityConfig": {
      "identityNamespace": "string",
      "identityProvider": "string",
      "workloadPool": "string"
    },
    "zone": "string"
  },
  "parent": "string",
  "projectId": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclusterscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.|
|zone|path|string|true|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.|
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
|body|body|[CreateClusterRequest](#schemacreateclusterrequest)|false|none|
|» cluster|body|[Cluster](#schemacluster)|false|Required. A [cluster resource](https://cloud.google.com/container-engine/reference/rest/v1beta1/projects.locations.clusters)|
|» parent|body|string|false|The parent (project and location) where the cluster will be created. Specified in the format `projects/*/locations/*`.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclusterscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.zones.clusters.get

<a id="opIdcontainer.projects.zones.clusters.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string/zones/string/clusters/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}`

Gets the details for a specific cluster.

<h3 id="containerprojectszonesclustersget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|path|string|true|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|
|clusterId|path|string|true|Required. Deprecated. The name of the cluster to retrieve. This field has been deprecated and replaced by the name field.|
|name|query|string|false|The name (project, location, cluster) of the cluster to retrieve. Specified in the format `projects/*/locations/*/clusters/*`.|
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
  "addonsConfig": {
    "cloudRunConfig": {
      "disabled": true,
      "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED"
    },
    "configConnectorConfig": {
      "enabled": true
    },
    "dnsCacheConfig": {
      "enabled": true
    },
    "gcePersistentDiskCsiDriverConfig": {
      "enabled": true
    },
    "gcpFilestoreCsiDriverConfig": {
      "enabled": true
    },
    "gcsFuseCsiDriverConfig": {
      "enabled": true
    },
    "gkeBackupAgentConfig": {
      "enabled": true
    },
    "horizontalPodAutoscaling": {
      "disabled": true
    },
    "httpLoadBalancing": {
      "disabled": true
    },
    "istioConfig": {
      "auth": "AUTH_NONE",
      "disabled": true
    },
    "kalmConfig": {
      "enabled": true
    },
    "kubernetesDashboard": {
      "disabled": true
    },
    "networkPolicyConfig": {
      "disabled": true
    },
    "statefulHaConfig": {
      "enabled": true
    }
  },
  "authenticatorGroupsConfig": {
    "enabled": true,
    "securityGroup": "string"
  },
  "autopilot": {
    "conversionStatus": {
      "state": "STATE_UNSPECIFIED"
    },
    "enabled": true,
    "workloadPolicyConfig": {
      "allowNetAdmin": true
    }
  },
  "autoscaling": {
    "autoprovisioningLocations": [
      "string"
    ],
    "autoprovisioningNodePoolDefaults": {
      "bootDiskKmsKey": "string",
      "diskSizeGb": 0,
      "diskType": "string",
      "imageType": "string",
      "insecureKubeletReadonlyPortEnabled": true,
      "management": {
        "autoRepair": true,
        "autoUpgrade": true,
        "upgradeOptions": {
          "autoUpgradeStartTime": "string",
          "description": "string"
        }
      },
      "minCpuPlatform": "string",
      "oauthScopes": [
        "string"
      ],
      "serviceAccount": "string",
      "shieldedInstanceConfig": {
        "enableIntegrityMonitoring": true,
        "enableSecureBoot": true
      },
      "upgradeSettings": {
        "blueGreenSettings": {
          "autoscaledRolloutPolicy": {},
          "nodePoolSoakDuration": "string",
          "standardRolloutPolicy": {
            "batchNodeCount": 0,
            "batchPercentage": 0,
            "batchSoakDuration": "string"
          }
        },
        "maxSurge": 0,
        "maxUnavailable": 0,
        "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
      }
    },
    "autoscalingProfile": "PROFILE_UNSPECIFIED",
    "enableNodeAutoprovisioning": true,
    "resourceLimits": [
      {
        "maximum": "string",
        "minimum": "string",
        "resourceType": "string"
      }
    ]
  },
  "binaryAuthorization": {
    "enabled": true,
    "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
    "policyBindings": [
      {
        "name": "string"
      }
    ]
  },
  "clusterIpv4Cidr": "string",
  "clusterTelemetry": {
    "type": "UNSPECIFIED"
  },
  "conditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "confidentialNodes": {
    "enabled": true
  },
  "costManagementConfig": {
    "enabled": true
  },
  "createTime": "string",
  "currentMasterVersion": "string",
  "currentNodeCount": 0,
  "currentNodeVersion": "string",
  "databaseEncryption": {
    "keyName": "string",
    "state": "UNKNOWN"
  },
  "defaultMaxPodsConstraint": {
    "maxPodsPerNode": "string"
  },
  "description": "string",
  "enableK8sBetaApis": {
    "enabledApis": [
      "string"
    ]
  },
  "enableKubernetesAlpha": true,
  "enableTpu": true,
  "endpoint": "string",
  "enterpriseConfig": {
    "clusterTier": "CLUSTER_TIER_UNSPECIFIED"
  },
  "etag": "string",
  "expireTime": "string",
  "fleet": {
    "membership": "string",
    "preRegistered": true,
    "project": "string"
  },
  "id": "string",
  "identityServiceConfig": {
    "enabled": true
  },
  "initialClusterVersion": "string",
  "initialNodeCount": 0,
  "instanceGroupUrls": [
    "string"
  ],
  "ipAllocationPolicy": {
    "additionalPodRangesConfig": {
      "podRangeInfo": [
        {
          "rangeName": "string",
          "utilization": 0
        }
      ],
      "podRangeNames": [
        "string"
      ]
    },
    "allowRouteOverlap": true,
    "clusterIpv4Cidr": "string",
    "clusterIpv4CidrBlock": "string",
    "clusterSecondaryRangeName": "string",
    "createSubnetwork": true,
    "defaultPodIpv4RangeUtilization": 0,
    "ipv6AccessType": "IPV6_ACCESS_TYPE_UNSPECIFIED",
    "nodeIpv4Cidr": "string",
    "nodeIpv4CidrBlock": "string",
    "podCidrOverprovisionConfig": {
      "disable": true
    },
    "servicesIpv4Cidr": "string",
    "servicesIpv4CidrBlock": "string",
    "servicesIpv6CidrBlock": "string",
    "servicesSecondaryRangeName": "string",
    "stackType": "STACK_TYPE_UNSPECIFIED",
    "subnetIpv6CidrBlock": "string",
    "subnetworkName": "string",
    "tpuIpv4CidrBlock": "string",
    "useIpAliases": true,
    "useRoutes": true
  },
  "labelFingerprint": "string",
  "legacyAbac": {
    "enabled": true
  },
  "location": "string",
  "locations": [
    "string"
  ],
  "loggingConfig": {
    "componentConfig": {
      "enableComponents": [
        "COMPONENT_UNSPECIFIED"
      ]
    }
  },
  "loggingService": "string",
  "maintenancePolicy": {
    "resourceVersion": "string",
    "window": {
      "dailyMaintenanceWindow": {
        "duration": "string",
        "startTime": "string"
      },
      "maintenanceExclusions": {
        "property1": {
          "endTime": "string",
          "maintenanceExclusionOptions": {
            "scope": "NO_UPGRADES"
          },
          "startTime": "string"
        },
        "property2": {
          "endTime": "string",
          "maintenanceExclusionOptions": {
            "scope": "NO_UPGRADES"
          },
          "startTime": "string"
        }
      },
      "recurringWindow": {
        "recurrence": "string",
        "window": {
          "endTime": "string",
          "maintenanceExclusionOptions": {
            "scope": "NO_UPGRADES"
          },
          "startTime": "string"
        }
      }
    }
  },
  "master": {},
  "masterAuth": {
    "clientCertificate": "string",
    "clientCertificateConfig": {
      "issueClientCertificate": true
    },
    "clientKey": "string",
    "clusterCaCertificate": "string",
    "password": "string",
    "username": "string"
  },
  "masterAuthorizedNetworksConfig": {
    "cidrBlocks": [
      {
        "cidrBlock": "string",
        "displayName": "string"
      }
    ],
    "enabled": true,
    "gcpPublicCidrsAccessEnabled": true
  },
  "masterIpv4CidrBlock": "string",
  "meshCertificates": {
    "enableCertificates": true
  },
  "monitoringConfig": {
    "advancedDatapathObservabilityConfig": {
      "enableMetrics": true,
      "enableRelay": true,
      "relayMode": "RELAY_MODE_UNSPECIFIED"
    },
    "componentConfig": {
      "enableComponents": [
        "COMPONENT_UNSPECIFIED"
      ]
    },
    "managedPrometheusConfig": {
      "enabled": true
    }
  },
  "monitoringService": "string",
  "name": "string",
  "network": "string",
  "networkConfig": {
    "datapathProvider": "DATAPATH_PROVIDER_UNSPECIFIED",
    "defaultSnatStatus": {
      "disabled": true
    },
    "dnsConfig": {
      "clusterDns": "PROVIDER_UNSPECIFIED",
      "clusterDnsDomain": "string",
      "clusterDnsScope": "DNS_SCOPE_UNSPECIFIED"
    },
    "enableFqdnNetworkPolicy": true,
    "enableIntraNodeVisibility": true,
    "enableL4ilbSubsetting": true,
    "enableMultiNetworking": true,
    "gatewayApiConfig": {
      "channel": "CHANNEL_UNSPECIFIED"
    },
    "inTransitEncryptionConfig": "IN_TRANSIT_ENCRYPTION_CONFIG_UNSPECIFIED",
    "network": "string",
    "networkPerformanceConfig": {
      "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
    },
    "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
    "serviceExternalIpsConfig": {
      "enabled": true
    },
    "subnetwork": "string"
  },
  "networkPolicy": {
    "enabled": true,
    "provider": "PROVIDER_UNSPECIFIED"
  },
  "nodeConfig": {
    "accelerators": [
      {
        "acceleratorCount": "string",
        "acceleratorType": "string",
        "gpuDriverInstallationConfig": {
          "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
        },
        "gpuPartitionSize": "string",
        "gpuSharingConfig": {
          "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
          "maxSharedClientsPerGpu": "string"
        },
        "maxTimeSharedClientsPerGpu": "string"
      }
    ],
    "advancedMachineFeatures": {
      "threadsPerCore": "string"
    },
    "bootDiskKmsKey": "string",
    "confidentialNodes": {
      "enabled": true
    },
    "diskSizeGb": 0,
    "diskType": "string",
    "enableConfidentialStorage": true,
    "ephemeralStorageConfig": {
      "localSsdCount": 0
    },
    "ephemeralStorageLocalSsdConfig": {
      "localSsdCount": 0
    },
    "fastSocket": {
      "enabled": true
    },
    "gcfsConfig": {
      "enabled": true
    },
    "gvnic": {
      "enabled": true
    },
    "hostMaintenancePolicy": {
      "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
      "opportunisticMaintenanceStrategy": {
        "maintenanceAvailabilityWindow": "string",
        "minNodesPerPool": "string",
        "nodeIdleTimeWindow": "string"
      }
    },
    "imageType": "string",
    "kubeletConfig": {
      "cpuCfsQuota": true,
      "cpuCfsQuotaPeriod": "string",
      "cpuManagerPolicy": "string",
      "insecureKubeletReadonlyPortEnabled": true,
      "podPidsLimit": "string"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "linuxNodeConfig": {
      "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
      "sysctls": {
        "property1": "string",
        "property2": "string"
      }
    },
    "localNvmeSsdBlockConfig": {
      "localSsdCount": 0
    },
    "localSsdCount": 0,
    "loggingConfig": {
      "variantConfig": {
        "variant": "VARIANT_UNSPECIFIED"
      }
    },
    "machineType": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "minCpuPlatform": "string",
    "nodeGroup": "string",
    "oauthScopes": [
      "string"
    ],
    "preemptible": true,
    "reservationAffinity": {
      "consumeReservationType": "UNSPECIFIED",
      "key": "string",
      "values": [
        "string"
      ]
    },
    "resourceLabels": {
      "property1": "string",
      "property2": "string"
    },
    "resourceManagerTags": {
      "tags": {
        "property1": "string",
        "property2": "string"
      }
    },
    "sandboxConfig": {
      "sandboxType": "string",
      "type": "UNSPECIFIED"
    },
    "secondaryBootDisks": [
      {
        "diskImage": "string",
        "mode": "MODE_UNSPECIFIED"
      }
    ],
    "serviceAccount": "string",
    "shieldedInstanceConfig": {
      "enableIntegrityMonitoring": true,
      "enableSecureBoot": true
    },
    "soleTenantConfig": {
      "nodeAffinities": [
        {
          "key": "string",
          "operator": "OPERATOR_UNSPECIFIED",
          "values": [
            "string"
          ]
        }
      ]
    },
    "spot": true,
    "tags": [
      "string"
    ],
    "taints": [
      {
        "effect": "EFFECT_UNSPECIFIED",
        "key": "string",
        "value": "string"
      }
    ],
    "windowsNodeConfig": {
      "osVersion": "OS_VERSION_UNSPECIFIED"
    },
    "workloadMetadataConfig": {
      "mode": "MODE_UNSPECIFIED",
      "nodeMetadata": "UNSPECIFIED"
    }
  },
  "nodeIpv4CidrSize": 0,
  "nodePoolAutoConfig": {
    "networkTags": {
      "tags": [
        "string"
      ]
    },
    "resourceManagerTags": {
      "tags": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "nodePoolDefaults": {
    "nodeConfigDefaults": {
      "gcfsConfig": {
        "enabled": true
      },
      "hostMaintenancePolicy": {
        "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
        "opportunisticMaintenanceStrategy": {
          "maintenanceAvailabilityWindow": "string",
          "minNodesPerPool": "string",
          "nodeIdleTimeWindow": "string"
        }
      },
      "loggingConfig": {
        "variantConfig": {
          "variant": "VARIANT_UNSPECIFIED"
        }
      }
    }
  },
  "nodePools": [
    {
      "autoscaling": {
        "autoprovisioned": true,
        "enabled": true,
        "locationPolicy": "LOCATION_POLICY_UNSPECIFIED",
        "maxNodeCount": 0,
        "minNodeCount": 0,
        "totalMaxNodeCount": 0,
        "totalMinNodeCount": 0
      },
      "bestEffortProvisioning": {
        "enabled": true,
        "minProvisionNodes": 0
      },
      "conditions": [
        {
          "canonicalCode": "OK",
          "code": "UNKNOWN",
          "message": "string"
        }
      ],
      "config": {
        "accelerators": [
          {
            "acceleratorCount": "string",
            "acceleratorType": "string",
            "gpuDriverInstallationConfig": {
              "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
            },
            "gpuPartitionSize": "string",
            "gpuSharingConfig": {
              "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
              "maxSharedClientsPerGpu": "string"
            },
            "maxTimeSharedClientsPerGpu": "string"
          }
        ],
        "advancedMachineFeatures": {
          "threadsPerCore": "string"
        },
        "bootDiskKmsKey": "string",
        "confidentialNodes": {
          "enabled": true
        },
        "diskSizeGb": 0,
        "diskType": "string",
        "enableConfidentialStorage": true,
        "ephemeralStorageConfig": {
          "localSsdCount": 0
        },
        "ephemeralStorageLocalSsdConfig": {
          "localSsdCount": 0
        },
        "fastSocket": {
          "enabled": true
        },
        "gcfsConfig": {
          "enabled": true
        },
        "gvnic": {
          "enabled": true
        },
        "hostMaintenancePolicy": {
          "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
          "opportunisticMaintenanceStrategy": {
            "maintenanceAvailabilityWindow": "string",
            "minNodesPerPool": "string",
            "nodeIdleTimeWindow": "string"
          }
        },
        "imageType": "string",
        "kubeletConfig": {
          "cpuCfsQuota": true,
          "cpuCfsQuotaPeriod": "string",
          "cpuManagerPolicy": "string",
          "insecureKubeletReadonlyPortEnabled": true,
          "podPidsLimit": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "linuxNodeConfig": {
          "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
          "sysctls": {
            "property1": "string",
            "property2": "string"
          }
        },
        "localNvmeSsdBlockConfig": {
          "localSsdCount": 0
        },
        "localSsdCount": 0,
        "loggingConfig": {
          "variantConfig": {
            "variant": "VARIANT_UNSPECIFIED"
          }
        },
        "machineType": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "minCpuPlatform": "string",
        "nodeGroup": "string",
        "oauthScopes": [
          "string"
        ],
        "preemptible": true,
        "reservationAffinity": {
          "consumeReservationType": "UNSPECIFIED",
          "key": "string",
          "values": [
            "string"
          ]
        },
        "resourceLabels": {
          "property1": "string",
          "property2": "string"
        },
        "resourceManagerTags": {
          "tags": {
            "property1": "string",
            "property2": "string"
          }
        },
        "sandboxConfig": {
          "sandboxType": "string",
          "type": "UNSPECIFIED"
        },
        "secondaryBootDisks": [
          {
            "diskImage": "string",
            "mode": "MODE_UNSPECIFIED"
          }
        ],
        "serviceAccount": "string",
        "shieldedInstanceConfig": {
          "enableIntegrityMonitoring": true,
          "enableSecureBoot": true
        },
        "soleTenantConfig": {
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ]
        },
        "spot": true,
        "tags": [
          "string"
        ],
        "taints": [
          {
            "effect": "EFFECT_UNSPECIFIED",
            "key": "string",
            "value": "string"
          }
        ],
        "windowsNodeConfig": {
          "osVersion": "OS_VERSION_UNSPECIFIED"
        },
        "workloadMetadataConfig": {
          "mode": "MODE_UNSPECIFIED",
          "nodeMetadata": "UNSPECIFIED"
        }
      },
      "etag": "string",
      "initialNodeCount": 0,
      "instanceGroupUrls": [
        "string"
      ],
      "locations": [
        "string"
      ],
      "management": {
        "autoRepair": true,
        "autoUpgrade": true,
        "upgradeOptions": {
          "autoUpgradeStartTime": "string",
          "description": "string"
        }
      },
      "maxPodsConstraint": {
        "maxPodsPerNode": "string"
      },
      "name": "string",
      "networkConfig": {
        "additionalNodeNetworkConfigs": [
          {
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "additionalPodNetworkConfigs": [
          {
            "maxPodsPerNode": {
              "maxPodsPerNode": "string"
            },
            "secondaryPodRange": "string",
            "subnetwork": "string"
          }
        ],
        "createPodRange": true,
        "enablePrivateNodes": true,
        "networkPerformanceConfig": {
          "externalIpEgressBandwidthTier": "TIER_UNSPECIFIED",
          "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
        },
        "podCidrOverprovisionConfig": {
          "disable": true
        },
        "podIpv4CidrBlock": "string",
        "podIpv4RangeUtilization": 0,
        "podRange": "string"
      },
      "placementPolicy": {
        "policyName": "string",
        "tpuTopology": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "podIpv4CidrSize": 0,
      "queuedProvisioning": {
        "enabled": true
      },
      "selfLink": "string",
      "status": "STATUS_UNSPECIFIED",
      "statusMessage": "string",
      "updateInfo": {
        "blueGreenInfo": {
          "blueInstanceGroupUrls": [
            "string"
          ],
          "bluePoolDeletionStartTime": "string",
          "greenInstanceGroupUrls": [
            "string"
          ],
          "greenPoolVersion": "string",
          "phase": "PHASE_UNSPECIFIED"
        }
      },
      "upgradeSettings": {
        "blueGreenSettings": {
          "autoscaledRolloutPolicy": {},
          "nodePoolSoakDuration": "string",
          "standardRolloutPolicy": {
            "batchNodeCount": 0,
            "batchPercentage": 0,
            "batchSoakDuration": "string"
          }
        },
        "maxSurge": 0,
        "maxUnavailable": 0,
        "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
      },
      "version": "string"
    }
  ],
  "notificationConfig": {
    "pubsub": {
      "enabled": true,
      "filter": {
        "eventType": [
          "EVENT_TYPE_UNSPECIFIED"
        ]
      },
      "topic": "string"
    }
  },
  "parentProductConfig": {
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "productName": "string"
  },
  "podSecurityPolicyConfig": {
    "enabled": true
  },
  "privateCluster": true,
  "privateClusterConfig": {
    "enablePrivateEndpoint": true,
    "enablePrivateNodes": true,
    "masterGlobalAccessConfig": {
      "enabled": true
    },
    "masterIpv4CidrBlock": "string",
    "peeringName": "string",
    "privateEndpoint": "string",
    "privateEndpointSubnetwork": "string",
    "publicEndpoint": "string"
  },
  "protectConfig": {
    "workloadConfig": {
      "auditMode": "MODE_UNSPECIFIED"
    },
    "workloadVulnerabilityMode": "WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED"
  },
  "releaseChannel": {
    "channel": "UNSPECIFIED"
  },
  "resourceLabels": {
    "property1": "string",
    "property2": "string"
  },
  "resourceUsageExportConfig": {
    "bigqueryDestination": {
      "datasetId": "string"
    },
    "consumptionMeteringConfig": {
      "enabled": true
    },
    "enableNetworkEgressMetering": true
  },
  "securityPostureConfig": {
    "mode": "MODE_UNSPECIFIED",
    "vulnerabilityMode": "VULNERABILITY_MODE_UNSPECIFIED"
  },
  "selfLink": "string",
  "servicesIpv4Cidr": "string",
  "shieldedNodes": {
    "enabled": true
  },
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "subnetwork": "string",
  "tpuConfig": {
    "enabled": true,
    "ipv4CidrBlock": "string",
    "useServiceNetworking": true
  },
  "tpuIpv4CidrBlock": "string",
  "verticalPodAutoscaling": {
    "enabled": true
  },
  "workloadAltsConfig": {
    "enableAlts": true
  },
  "workloadCertificates": {
    "enableCertificates": true
  },
  "workloadIdentityConfig": {
    "identityNamespace": "string",
    "identityProvider": "string",
    "workloadPool": "string"
  },
  "zone": "string"
}
```

<h3 id="containerprojectszonesclustersget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Cluster](#schemacluster)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.zones.clusters.update

<a id="opIdcontainer.projects.zones.clusters.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string/zones/string/clusters/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "name": "string",
    "projectId": "string",
    "update": {
      "additionalPodRangesConfig": {
        "podRangeNames": [
          "string"
        ]
      },
      "desiredAddonsConfig": {
        "cloudRunConfig": {
          "disabled": true,
          "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED"
        },
        "configConnectorConfig": {
          "enabled": true
        },
        "dnsCacheConfig": {
          "enabled": true
        },
        "gcePersistentDiskCsiDriverConfig": {
          "enabled": true
        },
        "gcpFilestoreCsiDriverConfig": {
          "enabled": true
        },
        "gcsFuseCsiDriverConfig": {
          "enabled": true
        },
        "gkeBackupAgentConfig": {
          "enabled": true
        },
        "horizontalPodAutoscaling": {
          "disabled": true
        },
        "httpLoadBalancing": {
          "disabled": true
        },
        "istioConfig": {
          "auth": "AUTH_NONE",
          "disabled": true
        },
        "kalmConfig": {
          "enabled": true
        },
        "kubernetesDashboard": {
          "disabled": true
        },
        "networkPolicyConfig": {
          "disabled": true
        },
        "statefulHaConfig": {
          "enabled": true
        }
      },
      "desiredAuthenticatorGroupsConfig": {
        "enabled": true,
        "securityGroup": "string"
      },
      "desiredAutopilotWorkloadPolicyConfig": {
        "allowNetAdmin": true
      },
      "desiredBinaryAuthorization": {
        "enabled": true,
        "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
        "policyBindings": [
          {
            "name": "string"
          }
        ]
      },
      "desiredClusterAutoscaling": {
        "autoprovisioningLocations": [
          "string"
        ],
        "autoprovisioningNodePoolDefaults": {
          "bootDiskKmsKey": "string",
          "diskSizeGb": 0,
          "diskType": "string",
          "imageType": "string",
          "insecureKubeletReadonlyPortEnabled": true,
          "management": {
            "autoRepair": true,
            "autoUpgrade": true,
            "upgradeOptions": {
              "autoUpgradeStartTime": "string",
              "description": "string"
            }
          },
          "minCpuPlatform": "string",
          "oauthScopes": [
            "string"
          ],
          "serviceAccount": "string",
          "shieldedInstanceConfig": {
            "enableIntegrityMonitoring": true,
            "enableSecureBoot": true
          },
          "upgradeSettings": {
            "blueGreenSettings": {
              "autoscaledRolloutPolicy": {},
              "nodePoolSoakDuration": "string",
              "standardRolloutPolicy": {
                "batchNodeCount": 0,
                "batchPercentage": 0,
                "batchSoakDuration": "string"
              }
            },
            "maxSurge": 0,
            "maxUnavailable": 0,
            "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
          }
        },
        "autoscalingProfile": "PROFILE_UNSPECIFIED",
        "enableNodeAutoprovisioning": true,
        "resourceLimits": [
          {
            "maximum": "string",
            "minimum": "string",
            "resourceType": "string"
          }
        ]
      },
      "desiredClusterTelemetry": {
        "type": "UNSPECIFIED"
      },
      "desiredCostManagementConfig": {
        "enabled": true
      },
      "desiredDatabaseEncryption": {
        "keyName": "string",
        "state": "UNKNOWN"
      },
      "desiredDatapathProvider": "DATAPATH_PROVIDER_UNSPECIFIED",
      "desiredDefaultSnatStatus": {
        "disabled": true
      },
      "desiredDnsConfig": {
        "clusterDns": "PROVIDER_UNSPECIFIED",
        "clusterDnsDomain": "string",
        "clusterDnsScope": "DNS_SCOPE_UNSPECIFIED"
      },
      "desiredEnableFqdnNetworkPolicy": true,
      "desiredEnablePrivateEndpoint": true,
      "desiredFleet": {
        "membership": "string",
        "preRegistered": true,
        "project": "string"
      },
      "desiredGatewayApiConfig": {
        "channel": "CHANNEL_UNSPECIFIED"
      },
      "desiredGcfsConfig": {
        "enabled": true
      },
      "desiredHostMaintenancePolicy": {
        "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
        "opportunisticMaintenanceStrategy": {
          "maintenanceAvailabilityWindow": "string",
          "minNodesPerPool": "string",
          "nodeIdleTimeWindow": "string"
        }
      },
      "desiredIdentityServiceConfig": {
        "enabled": true
      },
      "desiredImageType": "string",
      "desiredInTransitEncryptionConfig": "IN_TRANSIT_ENCRYPTION_CONFIG_UNSPECIFIED",
      "desiredIntraNodeVisibilityConfig": {
        "enabled": true
      },
      "desiredK8sBetaApis": {
        "enabledApis": [
          "string"
        ]
      },
      "desiredL4ilbSubsettingConfig": {
        "enabled": true
      },
      "desiredLocations": [
        "string"
      ],
      "desiredLoggingConfig": {
        "componentConfig": {
          "enableComponents": [
            "COMPONENT_UNSPECIFIED"
          ]
        }
      },
      "desiredLoggingService": "string",
      "desiredMaster": {},
      "desiredMasterAuthorizedNetworksConfig": {
        "cidrBlocks": [
          {
            "cidrBlock": "string",
            "displayName": "string"
          }
        ],
        "enabled": true,
        "gcpPublicCidrsAccessEnabled": true
      },
      "desiredMasterVersion": "string",
      "desiredMeshCertificates": {
        "enableCertificates": true
      },
      "desiredMonitoringConfig": {
        "advancedDatapathObservabilityConfig": {
          "enableMetrics": true,
          "enableRelay": true,
          "relayMode": "RELAY_MODE_UNSPECIFIED"
        },
        "componentConfig": {
          "enableComponents": [
            "COMPONENT_UNSPECIFIED"
          ]
        },
        "managedPrometheusConfig": {
          "enabled": true
        }
      },
      "desiredMonitoringService": "string",
      "desiredNetworkPerformanceConfig": {
        "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
      },
      "desiredNodePoolAutoConfigNetworkTags": {
        "tags": [
          "string"
        ]
      },
      "desiredNodePoolAutoConfigResourceManagerTags": {
        "tags": {
          "property1": "string",
          "property2": "string"
        }
      },
      "desiredNodePoolAutoscaling": {
        "autoprovisioned": true,
        "enabled": true,
        "locationPolicy": "LOCATION_POLICY_UNSPECIFIED",
        "maxNodeCount": 0,
        "minNodeCount": 0,
        "totalMaxNodeCount": 0,
        "totalMinNodeCount": 0
      },
      "desiredNodePoolId": "string",
      "desiredNodePoolLoggingConfig": {
        "variantConfig": {
          "variant": "VARIANT_UNSPECIFIED"
        }
      },
      "desiredNodeVersion": "string",
      "desiredNotificationConfig": {
        "pubsub": {
          "enabled": true,
          "filter": {
            "eventType": [
              "EVENT_TYPE_UNSPECIFIED"
            ]
          },
          "topic": "string"
        }
      },
      "desiredParentProductConfig": {
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "productName": "string"
      },
      "desiredPodSecurityPolicyConfig": {
        "enabled": true
      },
      "desiredPrivateClusterConfig": {
        "enablePrivateEndpoint": true,
        "enablePrivateNodes": true,
        "masterGlobalAccessConfig": {
          "enabled": true
        },
        "masterIpv4CidrBlock": "string",
        "peeringName": "string",
        "privateEndpoint": "string",
        "privateEndpointSubnetwork": "string",
        "publicEndpoint": "string"
      },
      "desiredPrivateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
      "desiredProtectConfig": {
        "workloadConfig": {
          "auditMode": "MODE_UNSPECIFIED"
        },
        "workloadVulnerabilityMode": "WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED"
      },
      "desiredReleaseChannel": {
        "channel": "UNSPECIFIED"
      },
      "desiredResourceUsageExportConfig": {
        "bigqueryDestination": {
          "datasetId": "string"
        },
        "consumptionMeteringConfig": {
          "enabled": true
        },
        "enableNetworkEgressMetering": true
      },
      "desiredSecurityPostureConfig": {
        "mode": "MODE_UNSPECIFIED",
        "vulnerabilityMode": "VULNERABILITY_MODE_UNSPECIFIED"
      },
      "desiredServiceExternalIpsConfig": {
        "enabled": true
      },
      "desiredShieldedNodes": {
        "enabled": true
      },
      "desiredStackType": "STACK_TYPE_UNSPECIFIED",
      "desiredTpuConfig": {
        "enabled": true,
        "ipv4CidrBlock": "string",
        "useServiceNetworking": true
      },
      "desiredVerticalPodAutoscaling": {
        "enabled": true
      },
      "desiredWorkloadAltsConfig": {
        "enableAlts": true
      },
      "desiredWorkloadCertificates": {
        "enableCertificates": true
      },
      "desiredWorkloadIdentityConfig": {
        "identityNamespace": "string",
        "identityProvider": "string",
        "workloadPool": "string"
      },
      "enableK8sBetaApis": {
        "enabledApis": [
          "string"
        ]
      },
      "etag": "string",
      "removedAdditionalPodRangesConfig": {
        "podRangeNames": [
          "string"
        ]
      }
    },
    "zone": "string"
  }'
```

`PUT /v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}`

Updates the settings for a specific cluster.

> Body parameter

```json
{
  "clusterId": "string",
  "name": "string",
  "projectId": "string",
  "update": {
    "additionalPodRangesConfig": {
      "podRangeNames": [
        "string"
      ]
    },
    "desiredAddonsConfig": {
      "cloudRunConfig": {
        "disabled": true,
        "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED"
      },
      "configConnectorConfig": {
        "enabled": true
      },
      "dnsCacheConfig": {
        "enabled": true
      },
      "gcePersistentDiskCsiDriverConfig": {
        "enabled": true
      },
      "gcpFilestoreCsiDriverConfig": {
        "enabled": true
      },
      "gcsFuseCsiDriverConfig": {
        "enabled": true
      },
      "gkeBackupAgentConfig": {
        "enabled": true
      },
      "horizontalPodAutoscaling": {
        "disabled": true
      },
      "httpLoadBalancing": {
        "disabled": true
      },
      "istioConfig": {
        "auth": "AUTH_NONE",
        "disabled": true
      },
      "kalmConfig": {
        "enabled": true
      },
      "kubernetesDashboard": {
        "disabled": true
      },
      "networkPolicyConfig": {
        "disabled": true
      },
      "statefulHaConfig": {
        "enabled": true
      }
    },
    "desiredAuthenticatorGroupsConfig": {
      "enabled": true,
      "securityGroup": "string"
    },
    "desiredAutopilotWorkloadPolicyConfig": {
      "allowNetAdmin": true
    },
    "desiredBinaryAuthorization": {
      "enabled": true,
      "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
      "policyBindings": [
        {
          "name": "string"
        }
      ]
    },
    "desiredClusterAutoscaling": {
      "autoprovisioningLocations": [
        "string"
      ],
      "autoprovisioningNodePoolDefaults": {
        "bootDiskKmsKey": "string",
        "diskSizeGb": 0,
        "diskType": "string",
        "imageType": "string",
        "insecureKubeletReadonlyPortEnabled": true,
        "management": {
          "autoRepair": true,
          "autoUpgrade": true,
          "upgradeOptions": {
            "autoUpgradeStartTime": "string",
            "description": "string"
          }
        },
        "minCpuPlatform": "string",
        "oauthScopes": [
          "string"
        ],
        "serviceAccount": "string",
        "shieldedInstanceConfig": {
          "enableIntegrityMonitoring": true,
          "enableSecureBoot": true
        },
        "upgradeSettings": {
          "blueGreenSettings": {
            "autoscaledRolloutPolicy": {},
            "nodePoolSoakDuration": "string",
            "standardRolloutPolicy": {
              "batchNodeCount": 0,
              "batchPercentage": 0,
              "batchSoakDuration": "string"
            }
          },
          "maxSurge": 0,
          "maxUnavailable": 0,
          "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
        }
      },
      "autoscalingProfile": "PROFILE_UNSPECIFIED",
      "enableNodeAutoprovisioning": true,
      "resourceLimits": [
        {
          "maximum": "string",
          "minimum": "string",
          "resourceType": "string"
        }
      ]
    },
    "desiredClusterTelemetry": {
      "type": "UNSPECIFIED"
    },
    "desiredCostManagementConfig": {
      "enabled": true
    },
    "desiredDatabaseEncryption": {
      "keyName": "string",
      "state": "UNKNOWN"
    },
    "desiredDatapathProvider": "DATAPATH_PROVIDER_UNSPECIFIED",
    "desiredDefaultSnatStatus": {
      "disabled": true
    },
    "desiredDnsConfig": {
      "clusterDns": "PROVIDER_UNSPECIFIED",
      "clusterDnsDomain": "string",
      "clusterDnsScope": "DNS_SCOPE_UNSPECIFIED"
    },
    "desiredEnableFqdnNetworkPolicy": true,
    "desiredEnablePrivateEndpoint": true,
    "desiredFleet": {
      "membership": "string",
      "preRegistered": true,
      "project": "string"
    },
    "desiredGatewayApiConfig": {
      "channel": "CHANNEL_UNSPECIFIED"
    },
    "desiredGcfsConfig": {
      "enabled": true
    },
    "desiredHostMaintenancePolicy": {
      "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
      "opportunisticMaintenanceStrategy": {
        "maintenanceAvailabilityWindow": "string",
        "minNodesPerPool": "string",
        "nodeIdleTimeWindow": "string"
      }
    },
    "desiredIdentityServiceConfig": {
      "enabled": true
    },
    "desiredImageType": "string",
    "desiredInTransitEncryptionConfig": "IN_TRANSIT_ENCRYPTION_CONFIG_UNSPECIFIED",
    "desiredIntraNodeVisibilityConfig": {
      "enabled": true
    },
    "desiredK8sBetaApis": {
      "enabledApis": [
        "string"
      ]
    },
    "desiredL4ilbSubsettingConfig": {
      "enabled": true
    },
    "desiredLocations": [
      "string"
    ],
    "desiredLoggingConfig": {
      "componentConfig": {
        "enableComponents": [
          "COMPONENT_UNSPECIFIED"
        ]
      }
    },
    "desiredLoggingService": "string",
    "desiredMaster": {},
    "desiredMasterAuthorizedNetworksConfig": {
      "cidrBlocks": [
        {
          "cidrBlock": "string",
          "displayName": "string"
        }
      ],
      "enabled": true,
      "gcpPublicCidrsAccessEnabled": true
    },
    "desiredMasterVersion": "string",
    "desiredMeshCertificates": {
      "enableCertificates": true
    },
    "desiredMonitoringConfig": {
      "advancedDatapathObservabilityConfig": {
        "enableMetrics": true,
        "enableRelay": true,
        "relayMode": "RELAY_MODE_UNSPECIFIED"
      },
      "componentConfig": {
        "enableComponents": [
          "COMPONENT_UNSPECIFIED"
        ]
      },
      "managedPrometheusConfig": {
        "enabled": true
      }
    },
    "desiredMonitoringService": "string",
    "desiredNetworkPerformanceConfig": {
      "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
    },
    "desiredNodePoolAutoConfigNetworkTags": {
      "tags": [
        "string"
      ]
    },
    "desiredNodePoolAutoConfigResourceManagerTags": {
      "tags": {
        "property1": "string",
        "property2": "string"
      }
    },
    "desiredNodePoolAutoscaling": {
      "autoprovisioned": true,
      "enabled": true,
      "locationPolicy": "LOCATION_POLICY_UNSPECIFIED",
      "maxNodeCount": 0,
      "minNodeCount": 0,
      "totalMaxNodeCount": 0,
      "totalMinNodeCount": 0
    },
    "desiredNodePoolId": "string",
    "desiredNodePoolLoggingConfig": {
      "variantConfig": {
        "variant": "VARIANT_UNSPECIFIED"
      }
    },
    "desiredNodeVersion": "string",
    "desiredNotificationConfig": {
      "pubsub": {
        "enabled": true,
        "filter": {
          "eventType": [
            "EVENT_TYPE_UNSPECIFIED"
          ]
        },
        "topic": "string"
      }
    },
    "desiredParentProductConfig": {
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "productName": "string"
    },
    "desiredPodSecurityPolicyConfig": {
      "enabled": true
    },
    "desiredPrivateClusterConfig": {
      "enablePrivateEndpoint": true,
      "enablePrivateNodes": true,
      "masterGlobalAccessConfig": {
        "enabled": true
      },
      "masterIpv4CidrBlock": "string",
      "peeringName": "string",
      "privateEndpoint": "string",
      "privateEndpointSubnetwork": "string",
      "publicEndpoint": "string"
    },
    "desiredPrivateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
    "desiredProtectConfig": {
      "workloadConfig": {
        "auditMode": "MODE_UNSPECIFIED"
      },
      "workloadVulnerabilityMode": "WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED"
    },
    "desiredReleaseChannel": {
      "channel": "UNSPECIFIED"
    },
    "desiredResourceUsageExportConfig": {
      "bigqueryDestination": {
        "datasetId": "string"
      },
      "consumptionMeteringConfig": {
        "enabled": true
      },
      "enableNetworkEgressMetering": true
    },
    "desiredSecurityPostureConfig": {
      "mode": "MODE_UNSPECIFIED",
      "vulnerabilityMode": "VULNERABILITY_MODE_UNSPECIFIED"
    },
    "desiredServiceExternalIpsConfig": {
      "enabled": true
    },
    "desiredShieldedNodes": {
      "enabled": true
    },
    "desiredStackType": "STACK_TYPE_UNSPECIFIED",
    "desiredTpuConfig": {
      "enabled": true,
      "ipv4CidrBlock": "string",
      "useServiceNetworking": true
    },
    "desiredVerticalPodAutoscaling": {
      "enabled": true
    },
    "desiredWorkloadAltsConfig": {
      "enableAlts": true
    },
    "desiredWorkloadCertificates": {
      "enableCertificates": true
    },
    "desiredWorkloadIdentityConfig": {
      "identityNamespace": "string",
      "identityProvider": "string",
      "workloadPool": "string"
    },
    "enableK8sBetaApis": {
      "enabledApis": [
        "string"
      ]
    },
    "etag": "string",
    "removedAdditionalPodRangesConfig": {
      "podRangeNames": [
        "string"
      ]
    }
  },
  "zone": "string"
}
```

<h3 id="containerprojectszonesclustersupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|path|string|true|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|
|clusterId|path|string|true|Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
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
|body|body|[UpdateClusterRequest](#schemaupdateclusterrequest)|false|none|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
|» name|body|string|false|The name (project, location, cluster) of the cluster to update. Specified in the format `projects/*/locations/*/clusters/*`.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» update|body|[ClusterUpdate](#schemaclusterupdate)|false|Required. A description of the update.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclustersupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.zones.clusters.delete

<a id="opIdcontainer.projects.zones.clusters.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string/zones/string/clusters/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}`

Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.

<h3 id="containerprojectszonesclustersdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|path|string|true|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|
|clusterId|path|string|true|Required. Deprecated. The name of the cluster to delete. This field has been deprecated and replaced by the name field.|
|name|query|string|false|The name (project, location, cluster) of the cluster to delete. Specified in the format `projects/*/locations/*/clusters/*`.|
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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclustersdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.zones.clusters.addons

<a id="opIdcontainer.projects.zones.clusters.addons"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string/zones/string/clusters/string/addons \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "addonsConfig": {
      "cloudRunConfig": {
        "disabled": true,
        "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED"
      },
      "configConnectorConfig": {
        "enabled": true
      },
      "dnsCacheConfig": {
        "enabled": true
      },
      "gcePersistentDiskCsiDriverConfig": {
        "enabled": true
      },
      "gcpFilestoreCsiDriverConfig": {
        "enabled": true
      },
      "gcsFuseCsiDriverConfig": {
        "enabled": true
      },
      "gkeBackupAgentConfig": {
        "enabled": true
      },
      "horizontalPodAutoscaling": {
        "disabled": true
      },
      "httpLoadBalancing": {
        "disabled": true
      },
      "istioConfig": {
        "auth": "AUTH_NONE",
        "disabled": true
      },
      "kalmConfig": {
        "enabled": true
      },
      "kubernetesDashboard": {
        "disabled": true
      },
      "networkPolicyConfig": {
        "disabled": true
      },
      "statefulHaConfig": {
        "enabled": true
      }
    },
    "clusterId": "string",
    "name": "string",
    "projectId": "string",
    "zone": "string"
  }'
```

`POST /v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/addons`

Sets the addons for a specific cluster.

> Body parameter

```json
{
  "addonsConfig": {
    "cloudRunConfig": {
      "disabled": true,
      "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED"
    },
    "configConnectorConfig": {
      "enabled": true
    },
    "dnsCacheConfig": {
      "enabled": true
    },
    "gcePersistentDiskCsiDriverConfig": {
      "enabled": true
    },
    "gcpFilestoreCsiDriverConfig": {
      "enabled": true
    },
    "gcsFuseCsiDriverConfig": {
      "enabled": true
    },
    "gkeBackupAgentConfig": {
      "enabled": true
    },
    "horizontalPodAutoscaling": {
      "disabled": true
    },
    "httpLoadBalancing": {
      "disabled": true
    },
    "istioConfig": {
      "auth": "AUTH_NONE",
      "disabled": true
    },
    "kalmConfig": {
      "enabled": true
    },
    "kubernetesDashboard": {
      "disabled": true
    },
    "networkPolicyConfig": {
      "disabled": true
    },
    "statefulHaConfig": {
      "enabled": true
    }
  },
  "clusterId": "string",
  "name": "string",
  "projectId": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclustersaddons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|path|string|true|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|
|clusterId|path|string|true|Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
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
|body|body|[SetAddonsConfigRequest](#schemasetaddonsconfigrequest)|false|none|
|» addonsConfig|body|[AddonsConfig](#schemaaddonsconfig)|false|Required. The desired configurations for the various addons available to run in the cluster.|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
|» name|body|string|false|The name (project, location, cluster) of the cluster to set addons. Specified in the format `projects/*/locations/*/clusters/*`.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclustersaddons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.zones.clusters.legacyAbac

<a id="opIdcontainer.projects.zones.clusters.legacyAbac"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string/zones/string/clusters/string/legacyAbac \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "enabled": true,
    "name": "string",
    "projectId": "string",
    "zone": "string"
  }'
```

`POST /v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/legacyAbac`

Enables or disables the ABAC authorization mechanism on a cluster.

> Body parameter

```json
{
  "clusterId": "string",
  "enabled": true,
  "name": "string",
  "projectId": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclusterslegacyabac-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|path|string|true|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|
|clusterId|path|string|true|Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.|
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
|body|body|[SetLegacyAbacRequest](#schemasetlegacyabacrequest)|false|none|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.|
|» enabled|body|boolean|false|Required. Whether ABAC authorization will be enabled in the cluster.|
|» name|body|string|false|The name (project, location, cluster name) of the cluster to set legacy abac. Specified in the format `projects/*/locations/*/clusters/*`.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclusterslegacyabac-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.zones.clusters.locations

<a id="opIdcontainer.projects.zones.clusters.locations"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string/zones/string/clusters/string/locations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "locations": [
      "string"
    ],
    "name": "string",
    "projectId": "string",
    "zone": "string"
  }'
```

`POST /v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/locations`

Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.

> Body parameter

```json
{
  "clusterId": "string",
  "locations": [
    "string"
  ],
  "name": "string",
  "projectId": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclusterslocations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|path|string|true|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|
|clusterId|path|string|true|Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
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
|body|body|[SetLocationsRequest](#schemasetlocationsrequest)|false|none|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
|» locations|body|[string]|false|Required. The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. Changing the locations a cluster is in will result in nodes being either created or removed from the cluster, depending on whether locations are being added or removed. This list must always include the cluster's primary zone.|
|» name|body|string|false|The name (project, location, cluster) of the cluster to set locations. Specified in the format `projects/*/locations/*/clusters/*`.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclusterslocations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.zones.clusters.logging

<a id="opIdcontainer.projects.zones.clusters.logging"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string/zones/string/clusters/string/logging \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "loggingService": "string",
    "name": "string",
    "projectId": "string",
    "zone": "string"
  }'
```

`POST /v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/logging`

Sets the logging service for a specific cluster.

> Body parameter

```json
{
  "clusterId": "string",
  "loggingService": "string",
  "name": "string",
  "projectId": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclusterslogging-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|path|string|true|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|
|clusterId|path|string|true|Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
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
|body|body|[SetLoggingServiceRequest](#schemasetloggingservicerequest)|false|none|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
|» loggingService|body|string|false|Required. The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions.|
|» name|body|string|false|The name (project, location, cluster) of the cluster to set logging. Specified in the format `projects/*/locations/*/clusters/*`.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclusterslogging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.zones.clusters.master

<a id="opIdcontainer.projects.zones.clusters.master"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string/zones/string/clusters/string/master \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "masterVersion": "string",
    "name": "string",
    "projectId": "string",
    "zone": "string"
  }'
```

`POST /v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/master`

Updates the master for a specific cluster.

> Body parameter

```json
{
  "clusterId": "string",
  "masterVersion": "string",
  "name": "string",
  "projectId": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclustersmaster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|path|string|true|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|
|clusterId|path|string|true|Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
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
|body|body|[UpdateMasterRequest](#schemaupdatemasterrequest)|false|none|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
|» masterVersion|body|string|false|Required. The Kubernetes version to change the master to. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the default Kubernetes version|
|» name|body|string|false|The name (project, location, cluster) of the cluster to update. Specified in the format `projects/*/locations/*/clusters/*`.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclustersmaster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.zones.clusters.monitoring

<a id="opIdcontainer.projects.zones.clusters.monitoring"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string/zones/string/clusters/string/monitoring \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "monitoringService": "string",
    "name": "string",
    "projectId": "string",
    "zone": "string"
  }'
```

`POST /v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/monitoring`

Sets the monitoring service for a specific cluster.

> Body parameter

```json
{
  "clusterId": "string",
  "monitoringService": "string",
  "name": "string",
  "projectId": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclustersmonitoring-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|path|string|true|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|
|clusterId|path|string|true|Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
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
|body|body|[SetMonitoringServiceRequest](#schemasetmonitoringservicerequest)|false|none|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
|» monitoringService|body|string|false|Required. The monitoring service the cluster should use to write metrics. Currently available options: * "monitoring.googleapis.com/kubernetes" - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions.|
|» name|body|string|false|The name (project, location, cluster) of the cluster to set monitoring. Specified in the format `projects/*/locations/*/clusters/*`.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclustersmonitoring-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.zones.clusters.nodePools.list

<a id="opIdcontainer.projects.zones.clusters.nodePools.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string/zones/string/clusters/string/nodePools \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools`

Lists the node pools for a cluster.

<h3 id="containerprojectszonesclustersnodepoolslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.|
|zone|path|string|true|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.|
|clusterId|path|string|true|Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.|
|parent|query|string|false|The parent (project, location, cluster name) where the node pools will be listed. Specified in the format `projects/*/locations/*/clusters/*`.|
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
  "nodePools": [
    {
      "autoscaling": {
        "autoprovisioned": true,
        "enabled": true,
        "locationPolicy": "LOCATION_POLICY_UNSPECIFIED",
        "maxNodeCount": 0,
        "minNodeCount": 0,
        "totalMaxNodeCount": 0,
        "totalMinNodeCount": 0
      },
      "bestEffortProvisioning": {
        "enabled": true,
        "minProvisionNodes": 0
      },
      "conditions": [
        {
          "canonicalCode": "OK",
          "code": "UNKNOWN",
          "message": "string"
        }
      ],
      "config": {
        "accelerators": [
          {
            "acceleratorCount": "string",
            "acceleratorType": "string",
            "gpuDriverInstallationConfig": {
              "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
            },
            "gpuPartitionSize": "string",
            "gpuSharingConfig": {
              "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
              "maxSharedClientsPerGpu": "string"
            },
            "maxTimeSharedClientsPerGpu": "string"
          }
        ],
        "advancedMachineFeatures": {
          "threadsPerCore": "string"
        },
        "bootDiskKmsKey": "string",
        "confidentialNodes": {
          "enabled": true
        },
        "diskSizeGb": 0,
        "diskType": "string",
        "enableConfidentialStorage": true,
        "ephemeralStorageConfig": {
          "localSsdCount": 0
        },
        "ephemeralStorageLocalSsdConfig": {
          "localSsdCount": 0
        },
        "fastSocket": {
          "enabled": true
        },
        "gcfsConfig": {
          "enabled": true
        },
        "gvnic": {
          "enabled": true
        },
        "hostMaintenancePolicy": {
          "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
          "opportunisticMaintenanceStrategy": {
            "maintenanceAvailabilityWindow": "string",
            "minNodesPerPool": "string",
            "nodeIdleTimeWindow": "string"
          }
        },
        "imageType": "string",
        "kubeletConfig": {
          "cpuCfsQuota": true,
          "cpuCfsQuotaPeriod": "string",
          "cpuManagerPolicy": "string",
          "insecureKubeletReadonlyPortEnabled": true,
          "podPidsLimit": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "linuxNodeConfig": {
          "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
          "sysctls": {
            "property1": "string",
            "property2": "string"
          }
        },
        "localNvmeSsdBlockConfig": {
          "localSsdCount": 0
        },
        "localSsdCount": 0,
        "loggingConfig": {
          "variantConfig": {
            "variant": "VARIANT_UNSPECIFIED"
          }
        },
        "machineType": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "minCpuPlatform": "string",
        "nodeGroup": "string",
        "oauthScopes": [
          "string"
        ],
        "preemptible": true,
        "reservationAffinity": {
          "consumeReservationType": "UNSPECIFIED",
          "key": "string",
          "values": [
            "string"
          ]
        },
        "resourceLabels": {
          "property1": "string",
          "property2": "string"
        },
        "resourceManagerTags": {
          "tags": {
            "property1": "string",
            "property2": "string"
          }
        },
        "sandboxConfig": {
          "sandboxType": "string",
          "type": "UNSPECIFIED"
        },
        "secondaryBootDisks": [
          {
            "diskImage": "string",
            "mode": "MODE_UNSPECIFIED"
          }
        ],
        "serviceAccount": "string",
        "shieldedInstanceConfig": {
          "enableIntegrityMonitoring": true,
          "enableSecureBoot": true
        },
        "soleTenantConfig": {
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ]
        },
        "spot": true,
        "tags": [
          "string"
        ],
        "taints": [
          {
            "effect": "EFFECT_UNSPECIFIED",
            "key": "string",
            "value": "string"
          }
        ],
        "windowsNodeConfig": {
          "osVersion": "OS_VERSION_UNSPECIFIED"
        },
        "workloadMetadataConfig": {
          "mode": "MODE_UNSPECIFIED",
          "nodeMetadata": "UNSPECIFIED"
        }
      },
      "etag": "string",
      "initialNodeCount": 0,
      "instanceGroupUrls": [
        "string"
      ],
      "locations": [
        "string"
      ],
      "management": {
        "autoRepair": true,
        "autoUpgrade": true,
        "upgradeOptions": {
          "autoUpgradeStartTime": "string",
          "description": "string"
        }
      },
      "maxPodsConstraint": {
        "maxPodsPerNode": "string"
      },
      "name": "string",
      "networkConfig": {
        "additionalNodeNetworkConfigs": [
          {
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "additionalPodNetworkConfigs": [
          {
            "maxPodsPerNode": {
              "maxPodsPerNode": "string"
            },
            "secondaryPodRange": "string",
            "subnetwork": "string"
          }
        ],
        "createPodRange": true,
        "enablePrivateNodes": true,
        "networkPerformanceConfig": {
          "externalIpEgressBandwidthTier": "TIER_UNSPECIFIED",
          "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
        },
        "podCidrOverprovisionConfig": {
          "disable": true
        },
        "podIpv4CidrBlock": "string",
        "podIpv4RangeUtilization": 0,
        "podRange": "string"
      },
      "placementPolicy": {
        "policyName": "string",
        "tpuTopology": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "podIpv4CidrSize": 0,
      "queuedProvisioning": {
        "enabled": true
      },
      "selfLink": "string",
      "status": "STATUS_UNSPECIFIED",
      "statusMessage": "string",
      "updateInfo": {
        "blueGreenInfo": {
          "blueInstanceGroupUrls": [
            "string"
          ],
          "bluePoolDeletionStartTime": "string",
          "greenInstanceGroupUrls": [
            "string"
          ],
          "greenPoolVersion": "string",
          "phase": "PHASE_UNSPECIFIED"
        }
      },
      "upgradeSettings": {
        "blueGreenSettings": {
          "autoscaledRolloutPolicy": {},
          "nodePoolSoakDuration": "string",
          "standardRolloutPolicy": {
            "batchNodeCount": 0,
            "batchPercentage": 0,
            "batchSoakDuration": "string"
          }
        },
        "maxSurge": 0,
        "maxUnavailable": 0,
        "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
      },
      "version": "string"
    }
  ]
}
```

<h3 id="containerprojectszonesclustersnodepoolslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListNodePoolsResponse](#schemalistnodepoolsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.zones.clusters.nodePools.create

<a id="opIdcontainer.projects.zones.clusters.nodePools.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string/zones/string/clusters/string/nodePools \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "nodePool": {
      "autoscaling": {
        "autoprovisioned": true,
        "enabled": true,
        "locationPolicy": "LOCATION_POLICY_UNSPECIFIED",
        "maxNodeCount": 0,
        "minNodeCount": 0,
        "totalMaxNodeCount": 0,
        "totalMinNodeCount": 0
      },
      "bestEffortProvisioning": {
        "enabled": true,
        "minProvisionNodes": 0
      },
      "conditions": [
        {
          "canonicalCode": "OK",
          "code": "UNKNOWN",
          "message": "string"
        }
      ],
      "config": {
        "accelerators": [
          {
            "acceleratorCount": "string",
            "acceleratorType": "string",
            "gpuDriverInstallationConfig": {
              "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
            },
            "gpuPartitionSize": "string",
            "gpuSharingConfig": {
              "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
              "maxSharedClientsPerGpu": "string"
            },
            "maxTimeSharedClientsPerGpu": "string"
          }
        ],
        "advancedMachineFeatures": {
          "threadsPerCore": "string"
        },
        "bootDiskKmsKey": "string",
        "confidentialNodes": {
          "enabled": true
        },
        "diskSizeGb": 0,
        "diskType": "string",
        "enableConfidentialStorage": true,
        "ephemeralStorageConfig": {
          "localSsdCount": 0
        },
        "ephemeralStorageLocalSsdConfig": {
          "localSsdCount": 0
        },
        "fastSocket": {
          "enabled": true
        },
        "gcfsConfig": {
          "enabled": true
        },
        "gvnic": {
          "enabled": true
        },
        "hostMaintenancePolicy": {
          "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
          "opportunisticMaintenanceStrategy": {
            "maintenanceAvailabilityWindow": "string",
            "minNodesPerPool": "string",
            "nodeIdleTimeWindow": "string"
          }
        },
        "imageType": "string",
        "kubeletConfig": {
          "cpuCfsQuota": true,
          "cpuCfsQuotaPeriod": "string",
          "cpuManagerPolicy": "string",
          "insecureKubeletReadonlyPortEnabled": true,
          "podPidsLimit": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "linuxNodeConfig": {
          "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
          "sysctls": {
            "property1": "string",
            "property2": "string"
          }
        },
        "localNvmeSsdBlockConfig": {
          "localSsdCount": 0
        },
        "localSsdCount": 0,
        "loggingConfig": {
          "variantConfig": {
            "variant": "VARIANT_UNSPECIFIED"
          }
        },
        "machineType": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "minCpuPlatform": "string",
        "nodeGroup": "string",
        "oauthScopes": [
          "string"
        ],
        "preemptible": true,
        "reservationAffinity": {
          "consumeReservationType": "UNSPECIFIED",
          "key": "string",
          "values": [
            "string"
          ]
        },
        "resourceLabels": {
          "property1": "string",
          "property2": "string"
        },
        "resourceManagerTags": {
          "tags": {
            "property1": "string",
            "property2": "string"
          }
        },
        "sandboxConfig": {
          "sandboxType": "string",
          "type": "UNSPECIFIED"
        },
        "secondaryBootDisks": [
          {
            "diskImage": "string",
            "mode": "MODE_UNSPECIFIED"
          }
        ],
        "serviceAccount": "string",
        "shieldedInstanceConfig": {
          "enableIntegrityMonitoring": true,
          "enableSecureBoot": true
        },
        "soleTenantConfig": {
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ]
        },
        "spot": true,
        "tags": [
          "string"
        ],
        "taints": [
          {
            "effect": "EFFECT_UNSPECIFIED",
            "key": "string",
            "value": "string"
          }
        ],
        "windowsNodeConfig": {
          "osVersion": "OS_VERSION_UNSPECIFIED"
        },
        "workloadMetadataConfig": {
          "mode": "MODE_UNSPECIFIED",
          "nodeMetadata": "UNSPECIFIED"
        }
      },
      "etag": "string",
      "initialNodeCount": 0,
      "instanceGroupUrls": [
        "string"
      ],
      "locations": [
        "string"
      ],
      "management": {
        "autoRepair": true,
        "autoUpgrade": true,
        "upgradeOptions": {
          "autoUpgradeStartTime": "string",
          "description": "string"
        }
      },
      "maxPodsConstraint": {
        "maxPodsPerNode": "string"
      },
      "name": "string",
      "networkConfig": {
        "additionalNodeNetworkConfigs": [
          {
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "additionalPodNetworkConfigs": [
          {
            "maxPodsPerNode": {
              "maxPodsPerNode": "string"
            },
            "secondaryPodRange": "string",
            "subnetwork": "string"
          }
        ],
        "createPodRange": true,
        "enablePrivateNodes": true,
        "networkPerformanceConfig": {
          "externalIpEgressBandwidthTier": "TIER_UNSPECIFIED",
          "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
        },
        "podCidrOverprovisionConfig": {
          "disable": true
        },
        "podIpv4CidrBlock": "string",
        "podRange": "string"
      },
      "placementPolicy": {
        "policyName": "string",
        "tpuTopology": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "podIpv4CidrSize": 0,
      "queuedProvisioning": {
        "enabled": true
      },
      "selfLink": "string",
      "status": "STATUS_UNSPECIFIED",
      "statusMessage": "string",
      "upgradeSettings": {
        "blueGreenSettings": {
          "autoscaledRolloutPolicy": {},
          "nodePoolSoakDuration": "string",
          "standardRolloutPolicy": {
            "batchNodeCount": 0,
            "batchPercentage": 0,
            "batchSoakDuration": "string"
          }
        },
        "maxSurge": 0,
        "maxUnavailable": 0,
        "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
      },
      "version": "string"
    },
    "parent": "string",
    "projectId": "string",
    "zone": "string"
  }'
```

`POST /v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools`

Creates a node pool for a cluster.

> Body parameter

```json
{
  "clusterId": "string",
  "nodePool": {
    "autoscaling": {
      "autoprovisioned": true,
      "enabled": true,
      "locationPolicy": "LOCATION_POLICY_UNSPECIFIED",
      "maxNodeCount": 0,
      "minNodeCount": 0,
      "totalMaxNodeCount": 0,
      "totalMinNodeCount": 0
    },
    "bestEffortProvisioning": {
      "enabled": true,
      "minProvisionNodes": 0
    },
    "conditions": [
      {
        "canonicalCode": "OK",
        "code": "UNKNOWN",
        "message": "string"
      }
    ],
    "config": {
      "accelerators": [
        {
          "acceleratorCount": "string",
          "acceleratorType": "string",
          "gpuDriverInstallationConfig": {
            "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
          },
          "gpuPartitionSize": "string",
          "gpuSharingConfig": {
            "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
            "maxSharedClientsPerGpu": "string"
          },
          "maxTimeSharedClientsPerGpu": "string"
        }
      ],
      "advancedMachineFeatures": {
        "threadsPerCore": "string"
      },
      "bootDiskKmsKey": "string",
      "confidentialNodes": {
        "enabled": true
      },
      "diskSizeGb": 0,
      "diskType": "string",
      "enableConfidentialStorage": true,
      "ephemeralStorageConfig": {
        "localSsdCount": 0
      },
      "ephemeralStorageLocalSsdConfig": {
        "localSsdCount": 0
      },
      "fastSocket": {
        "enabled": true
      },
      "gcfsConfig": {
        "enabled": true
      },
      "gvnic": {
        "enabled": true
      },
      "hostMaintenancePolicy": {
        "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
        "opportunisticMaintenanceStrategy": {
          "maintenanceAvailabilityWindow": "string",
          "minNodesPerPool": "string",
          "nodeIdleTimeWindow": "string"
        }
      },
      "imageType": "string",
      "kubeletConfig": {
        "cpuCfsQuota": true,
        "cpuCfsQuotaPeriod": "string",
        "cpuManagerPolicy": "string",
        "insecureKubeletReadonlyPortEnabled": true,
        "podPidsLimit": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "linuxNodeConfig": {
        "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
        "sysctls": {
          "property1": "string",
          "property2": "string"
        }
      },
      "localNvmeSsdBlockConfig": {
        "localSsdCount": 0
      },
      "localSsdCount": 0,
      "loggingConfig": {
        "variantConfig": {
          "variant": "VARIANT_UNSPECIFIED"
        }
      },
      "machineType": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "minCpuPlatform": "string",
      "nodeGroup": "string",
      "oauthScopes": [
        "string"
      ],
      "preemptible": true,
      "reservationAffinity": {
        "consumeReservationType": "UNSPECIFIED",
        "key": "string",
        "values": [
          "string"
        ]
      },
      "resourceLabels": {
        "property1": "string",
        "property2": "string"
      },
      "resourceManagerTags": {
        "tags": {
          "property1": "string",
          "property2": "string"
        }
      },
      "sandboxConfig": {
        "sandboxType": "string",
        "type": "UNSPECIFIED"
      },
      "secondaryBootDisks": [
        {
          "diskImage": "string",
          "mode": "MODE_UNSPECIFIED"
        }
      ],
      "serviceAccount": "string",
      "shieldedInstanceConfig": {
        "enableIntegrityMonitoring": true,
        "enableSecureBoot": true
      },
      "soleTenantConfig": {
        "nodeAffinities": [
          {
            "key": "string",
            "operator": "OPERATOR_UNSPECIFIED",
            "values": [
              "string"
            ]
          }
        ]
      },
      "spot": true,
      "tags": [
        "string"
      ],
      "taints": [
        {
          "effect": "EFFECT_UNSPECIFIED",
          "key": "string",
          "value": "string"
        }
      ],
      "windowsNodeConfig": {
        "osVersion": "OS_VERSION_UNSPECIFIED"
      },
      "workloadMetadataConfig": {
        "mode": "MODE_UNSPECIFIED",
        "nodeMetadata": "UNSPECIFIED"
      }
    },
    "etag": "string",
    "initialNodeCount": 0,
    "instanceGroupUrls": [
      "string"
    ],
    "locations": [
      "string"
    ],
    "management": {
      "autoRepair": true,
      "autoUpgrade": true,
      "upgradeOptions": {
        "autoUpgradeStartTime": "string",
        "description": "string"
      }
    },
    "maxPodsConstraint": {
      "maxPodsPerNode": "string"
    },
    "name": "string",
    "networkConfig": {
      "additionalNodeNetworkConfigs": [
        {
          "network": "string",
          "subnetwork": "string"
        }
      ],
      "additionalPodNetworkConfigs": [
        {
          "maxPodsPerNode": {
            "maxPodsPerNode": "string"
          },
          "secondaryPodRange": "string",
          "subnetwork": "string"
        }
      ],
      "createPodRange": true,
      "enablePrivateNodes": true,
      "networkPerformanceConfig": {
        "externalIpEgressBandwidthTier": "TIER_UNSPECIFIED",
        "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
      },
      "podCidrOverprovisionConfig": {
        "disable": true
      },
      "podIpv4CidrBlock": "string",
      "podRange": "string"
    },
    "placementPolicy": {
      "policyName": "string",
      "tpuTopology": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "podIpv4CidrSize": 0,
    "queuedProvisioning": {
      "enabled": true
    },
    "selfLink": "string",
    "status": "STATUS_UNSPECIFIED",
    "statusMessage": "string",
    "upgradeSettings": {
      "blueGreenSettings": {
        "autoscaledRolloutPolicy": {},
        "nodePoolSoakDuration": "string",
        "standardRolloutPolicy": {
          "batchNodeCount": 0,
          "batchPercentage": 0,
          "batchSoakDuration": "string"
        }
      },
      "maxSurge": 0,
      "maxUnavailable": 0,
      "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
    },
    "version": "string"
  },
  "parent": "string",
  "projectId": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclustersnodepoolscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.|
|zone|path|string|true|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.|
|clusterId|path|string|true|Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.|
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
|body|body|[CreateNodePoolRequest](#schemacreatenodepoolrequest)|false|none|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.|
|» nodePool|body|[NodePool](#schemanodepool)|false|Required. The node pool to create.|
|» parent|body|string|false|The parent (project, location, cluster name) where the node pool will be created. Specified in the format `projects/*/locations/*/clusters/*`.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclustersnodepoolscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.zones.clusters.nodePools.get

<a id="opIdcontainer.projects.zones.clusters.nodePools.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string/zones/string/clusters/string/nodePools/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}`

Retrieves the requested node pool.

<h3 id="containerprojectszonesclustersnodepoolsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|path|string|true|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|
|clusterId|path|string|true|Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.|
|nodePoolId|path|string|true|Required. Deprecated. The name of the node pool. This field has been deprecated and replaced by the name field.|
|name|query|string|false|The name (project, location, cluster, node pool id) of the node pool to get. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.|
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
  "autoscaling": {
    "autoprovisioned": true,
    "enabled": true,
    "locationPolicy": "LOCATION_POLICY_UNSPECIFIED",
    "maxNodeCount": 0,
    "minNodeCount": 0,
    "totalMaxNodeCount": 0,
    "totalMinNodeCount": 0
  },
  "bestEffortProvisioning": {
    "enabled": true,
    "minProvisionNodes": 0
  },
  "conditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "config": {
    "accelerators": [
      {
        "acceleratorCount": "string",
        "acceleratorType": "string",
        "gpuDriverInstallationConfig": {
          "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
        },
        "gpuPartitionSize": "string",
        "gpuSharingConfig": {
          "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
          "maxSharedClientsPerGpu": "string"
        },
        "maxTimeSharedClientsPerGpu": "string"
      }
    ],
    "advancedMachineFeatures": {
      "threadsPerCore": "string"
    },
    "bootDiskKmsKey": "string",
    "confidentialNodes": {
      "enabled": true
    },
    "diskSizeGb": 0,
    "diskType": "string",
    "enableConfidentialStorage": true,
    "ephemeralStorageConfig": {
      "localSsdCount": 0
    },
    "ephemeralStorageLocalSsdConfig": {
      "localSsdCount": 0
    },
    "fastSocket": {
      "enabled": true
    },
    "gcfsConfig": {
      "enabled": true
    },
    "gvnic": {
      "enabled": true
    },
    "hostMaintenancePolicy": {
      "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
      "opportunisticMaintenanceStrategy": {
        "maintenanceAvailabilityWindow": "string",
        "minNodesPerPool": "string",
        "nodeIdleTimeWindow": "string"
      }
    },
    "imageType": "string",
    "kubeletConfig": {
      "cpuCfsQuota": true,
      "cpuCfsQuotaPeriod": "string",
      "cpuManagerPolicy": "string",
      "insecureKubeletReadonlyPortEnabled": true,
      "podPidsLimit": "string"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "linuxNodeConfig": {
      "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
      "sysctls": {
        "property1": "string",
        "property2": "string"
      }
    },
    "localNvmeSsdBlockConfig": {
      "localSsdCount": 0
    },
    "localSsdCount": 0,
    "loggingConfig": {
      "variantConfig": {
        "variant": "VARIANT_UNSPECIFIED"
      }
    },
    "machineType": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "minCpuPlatform": "string",
    "nodeGroup": "string",
    "oauthScopes": [
      "string"
    ],
    "preemptible": true,
    "reservationAffinity": {
      "consumeReservationType": "UNSPECIFIED",
      "key": "string",
      "values": [
        "string"
      ]
    },
    "resourceLabels": {
      "property1": "string",
      "property2": "string"
    },
    "resourceManagerTags": {
      "tags": {
        "property1": "string",
        "property2": "string"
      }
    },
    "sandboxConfig": {
      "sandboxType": "string",
      "type": "UNSPECIFIED"
    },
    "secondaryBootDisks": [
      {
        "diskImage": "string",
        "mode": "MODE_UNSPECIFIED"
      }
    ],
    "serviceAccount": "string",
    "shieldedInstanceConfig": {
      "enableIntegrityMonitoring": true,
      "enableSecureBoot": true
    },
    "soleTenantConfig": {
      "nodeAffinities": [
        {
          "key": "string",
          "operator": "OPERATOR_UNSPECIFIED",
          "values": [
            "string"
          ]
        }
      ]
    },
    "spot": true,
    "tags": [
      "string"
    ],
    "taints": [
      {
        "effect": "EFFECT_UNSPECIFIED",
        "key": "string",
        "value": "string"
      }
    ],
    "windowsNodeConfig": {
      "osVersion": "OS_VERSION_UNSPECIFIED"
    },
    "workloadMetadataConfig": {
      "mode": "MODE_UNSPECIFIED",
      "nodeMetadata": "UNSPECIFIED"
    }
  },
  "etag": "string",
  "initialNodeCount": 0,
  "instanceGroupUrls": [
    "string"
  ],
  "locations": [
    "string"
  ],
  "management": {
    "autoRepair": true,
    "autoUpgrade": true,
    "upgradeOptions": {
      "autoUpgradeStartTime": "string",
      "description": "string"
    }
  },
  "maxPodsConstraint": {
    "maxPodsPerNode": "string"
  },
  "name": "string",
  "networkConfig": {
    "additionalNodeNetworkConfigs": [
      {
        "network": "string",
        "subnetwork": "string"
      }
    ],
    "additionalPodNetworkConfigs": [
      {
        "maxPodsPerNode": {
          "maxPodsPerNode": "string"
        },
        "secondaryPodRange": "string",
        "subnetwork": "string"
      }
    ],
    "createPodRange": true,
    "enablePrivateNodes": true,
    "networkPerformanceConfig": {
      "externalIpEgressBandwidthTier": "TIER_UNSPECIFIED",
      "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
    },
    "podCidrOverprovisionConfig": {
      "disable": true
    },
    "podIpv4CidrBlock": "string",
    "podIpv4RangeUtilization": 0,
    "podRange": "string"
  },
  "placementPolicy": {
    "policyName": "string",
    "tpuTopology": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "podIpv4CidrSize": 0,
  "queuedProvisioning": {
    "enabled": true
  },
  "selfLink": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "updateInfo": {
    "blueGreenInfo": {
      "blueInstanceGroupUrls": [
        "string"
      ],
      "bluePoolDeletionStartTime": "string",
      "greenInstanceGroupUrls": [
        "string"
      ],
      "greenPoolVersion": "string",
      "phase": "PHASE_UNSPECIFIED"
    }
  },
  "upgradeSettings": {
    "blueGreenSettings": {
      "autoscaledRolloutPolicy": {},
      "nodePoolSoakDuration": "string",
      "standardRolloutPolicy": {
        "batchNodeCount": 0,
        "batchPercentage": 0,
        "batchSoakDuration": "string"
      }
    },
    "maxSurge": 0,
    "maxUnavailable": 0,
    "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
  },
  "version": "string"
}
```

<h3 id="containerprojectszonesclustersnodepoolsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[NodePool](#schemanodepool)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.zones.clusters.nodePools.delete

<a id="opIdcontainer.projects.zones.clusters.nodePools.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string/zones/string/clusters/string/nodePools/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}`

Deletes a node pool from a cluster.

<h3 id="containerprojectszonesclustersnodepoolsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|path|string|true|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|
|clusterId|path|string|true|Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.|
|nodePoolId|path|string|true|Required. Deprecated. The name of the node pool to delete. This field has been deprecated and replaced by the name field.|
|name|query|string|false|The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.|
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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclustersnodepoolsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.zones.clusters.nodePools.autoscaling

<a id="opIdcontainer.projects.zones.clusters.nodePools.autoscaling"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string/zones/string/clusters/string/nodePools/string/autoscaling \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "autoscaling": {
      "autoprovisioned": true,
      "enabled": true,
      "locationPolicy": "LOCATION_POLICY_UNSPECIFIED",
      "maxNodeCount": 0,
      "minNodeCount": 0,
      "totalMaxNodeCount": 0,
      "totalMinNodeCount": 0
    },
    "clusterId": "string",
    "name": "string",
    "nodePoolId": "string",
    "projectId": "string",
    "zone": "string"
  }'
```

`POST /v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/autoscaling`

Sets the autoscaling settings of a specific node pool.

> Body parameter

```json
{
  "autoscaling": {
    "autoprovisioned": true,
    "enabled": true,
    "locationPolicy": "LOCATION_POLICY_UNSPECIFIED",
    "maxNodeCount": 0,
    "minNodeCount": 0,
    "totalMaxNodeCount": 0,
    "totalMinNodeCount": 0
  },
  "clusterId": "string",
  "name": "string",
  "nodePoolId": "string",
  "projectId": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclustersnodepoolsautoscaling-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|path|string|true|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|
|clusterId|path|string|true|Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
|nodePoolId|path|string|true|Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.|
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
|body|body|[SetNodePoolAutoscalingRequest](#schemasetnodepoolautoscalingrequest)|false|none|
|» autoscaling|body|[NodePoolAutoscaling](#schemanodepoolautoscaling)|false|Required. Autoscaling configuration for the node pool.|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
|» name|body|string|false|The name (project, location, cluster, node pool) of the node pool to set autoscaler settings. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.|
|» nodePoolId|body|string|false|**Deprecated.** Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclustersnodepoolsautoscaling-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.zones.clusters.nodePools.setManagement

<a id="opIdcontainer.projects.zones.clusters.nodePools.setManagement"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string/zones/string/clusters/string/nodePools/string/setManagement \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "management": {
      "autoRepair": true,
      "autoUpgrade": true,
      "upgradeOptions": {
        "autoUpgradeStartTime": "string",
        "description": "string"
      }
    },
    "name": "string",
    "nodePoolId": "string",
    "projectId": "string",
    "zone": "string"
  }'
```

`POST /v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setManagement`

Sets the NodeManagement options for a node pool.

> Body parameter

```json
{
  "clusterId": "string",
  "management": {
    "autoRepair": true,
    "autoUpgrade": true,
    "upgradeOptions": {
      "autoUpgradeStartTime": "string",
      "description": "string"
    }
  },
  "name": "string",
  "nodePoolId": "string",
  "projectId": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclustersnodepoolssetmanagement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|path|string|true|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|
|clusterId|path|string|true|Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.|
|nodePoolId|path|string|true|Required. Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.|
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
|body|body|[SetNodePoolManagementRequest](#schemasetnodepoolmanagementrequest)|false|none|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.|
|» management|body|[NodeManagement](#schemanodemanagement)|false|Required. NodeManagement configuration for the node pool.|
|» name|body|string|false|The name (project, location, cluster, node pool id) of the node pool to set management properties. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.|
|» nodePoolId|body|string|false|**Deprecated.** Required. Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclustersnodepoolssetmanagement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.zones.clusters.nodePools.setSize

<a id="opIdcontainer.projects.zones.clusters.nodePools.setSize"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string/zones/string/clusters/string/nodePools/string/setSize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "name": "string",
    "nodeCount": 0,
    "nodePoolId": "string",
    "projectId": "string",
    "zone": "string"
  }'
```

`POST /v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setSize`

SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.

> Body parameter

```json
{
  "clusterId": "string",
  "name": "string",
  "nodeCount": 0,
  "nodePoolId": "string",
  "projectId": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclustersnodepoolssetsize-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|path|string|true|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|
|clusterId|path|string|true|Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.|
|nodePoolId|path|string|true|Required. Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.|
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
|body|body|[SetNodePoolSizeRequest](#schemasetnodepoolsizerequest)|false|none|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.|
|» name|body|string|false|The name (project, location, cluster, node pool id) of the node pool to set size. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.|
|» nodeCount|body|integer(int32)|false|Required. The desired node count for the pool.|
|» nodePoolId|body|string|false|**Deprecated.** Required. Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclustersnodepoolssetsize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.zones.clusters.nodePools.update

<a id="opIdcontainer.projects.zones.clusters.nodePools.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string/zones/string/clusters/string/nodePools/string/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "confidentialNodes": {
      "enabled": true
    },
    "diskSizeGb": "string",
    "diskType": "string",
    "etag": "string",
    "fastSocket": {
      "enabled": true
    },
    "gcfsConfig": {
      "enabled": true
    },
    "gvnic": {
      "enabled": true
    },
    "imageType": "string",
    "kubeletConfig": {
      "cpuCfsQuota": true,
      "cpuCfsQuotaPeriod": "string",
      "cpuManagerPolicy": "string",
      "insecureKubeletReadonlyPortEnabled": true,
      "podPidsLimit": "string"
    },
    "labels": {
      "labels": {
        "property1": "string",
        "property2": "string"
      }
    },
    "linuxNodeConfig": {
      "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
      "sysctls": {
        "property1": "string",
        "property2": "string"
      }
    },
    "locations": [
      "string"
    ],
    "loggingConfig": {
      "variantConfig": {
        "variant": "VARIANT_UNSPECIFIED"
      }
    },
    "machineType": "string",
    "name": "string",
    "nodeNetworkConfig": {
      "additionalNodeNetworkConfigs": [
        {
          "network": "string",
          "subnetwork": "string"
        }
      ],
      "additionalPodNetworkConfigs": [
        {
          "maxPodsPerNode": {
            "maxPodsPerNode": "string"
          },
          "secondaryPodRange": "string",
          "subnetwork": "string"
        }
      ],
      "createPodRange": true,
      "enablePrivateNodes": true,
      "networkPerformanceConfig": {
        "externalIpEgressBandwidthTier": "TIER_UNSPECIFIED",
        "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
      },
      "podCidrOverprovisionConfig": {
        "disable": true
      },
      "podIpv4CidrBlock": "string",
      "podRange": "string"
    },
    "nodePoolId": "string",
    "nodeVersion": "string",
    "projectId": "string",
    "queuedProvisioning": {
      "enabled": true
    },
    "resourceLabels": {
      "labels": {
        "property1": "string",
        "property2": "string"
      }
    },
    "resourceManagerTags": {
      "tags": {
        "property1": "string",
        "property2": "string"
      }
    },
    "tags": {
      "tags": [
        "string"
      ]
    },
    "taints": {
      "taints": [
        {
          "effect": "EFFECT_UNSPECIFIED",
          "key": "string",
          "value": "string"
        }
      ]
    },
    "upgradeSettings": {
      "blueGreenSettings": {
        "autoscaledRolloutPolicy": {},
        "nodePoolSoakDuration": "string",
        "standardRolloutPolicy": {
          "batchNodeCount": 0,
          "batchPercentage": 0,
          "batchSoakDuration": "string"
        }
      },
      "maxSurge": 0,
      "maxUnavailable": 0,
      "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
    },
    "windowsNodeConfig": {
      "osVersion": "OS_VERSION_UNSPECIFIED"
    },
    "workloadMetadataConfig": {
      "mode": "MODE_UNSPECIFIED",
      "nodeMetadata": "UNSPECIFIED"
    },
    "zone": "string"
  }'
```

`POST /v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/update`

Updates the version and/or image type of a specific node pool.

> Body parameter

```json
{
  "clusterId": "string",
  "confidentialNodes": {
    "enabled": true
  },
  "diskSizeGb": "string",
  "diskType": "string",
  "etag": "string",
  "fastSocket": {
    "enabled": true
  },
  "gcfsConfig": {
    "enabled": true
  },
  "gvnic": {
    "enabled": true
  },
  "imageType": "string",
  "kubeletConfig": {
    "cpuCfsQuota": true,
    "cpuCfsQuotaPeriod": "string",
    "cpuManagerPolicy": "string",
    "insecureKubeletReadonlyPortEnabled": true,
    "podPidsLimit": "string"
  },
  "labels": {
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  },
  "linuxNodeConfig": {
    "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
    "sysctls": {
      "property1": "string",
      "property2": "string"
    }
  },
  "locations": [
    "string"
  ],
  "loggingConfig": {
    "variantConfig": {
      "variant": "VARIANT_UNSPECIFIED"
    }
  },
  "machineType": "string",
  "name": "string",
  "nodeNetworkConfig": {
    "additionalNodeNetworkConfigs": [
      {
        "network": "string",
        "subnetwork": "string"
      }
    ],
    "additionalPodNetworkConfigs": [
      {
        "maxPodsPerNode": {
          "maxPodsPerNode": "string"
        },
        "secondaryPodRange": "string",
        "subnetwork": "string"
      }
    ],
    "createPodRange": true,
    "enablePrivateNodes": true,
    "networkPerformanceConfig": {
      "externalIpEgressBandwidthTier": "TIER_UNSPECIFIED",
      "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
    },
    "podCidrOverprovisionConfig": {
      "disable": true
    },
    "podIpv4CidrBlock": "string",
    "podRange": "string"
  },
  "nodePoolId": "string",
  "nodeVersion": "string",
  "projectId": "string",
  "queuedProvisioning": {
    "enabled": true
  },
  "resourceLabels": {
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  },
  "resourceManagerTags": {
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  },
  "tags": {
    "tags": [
      "string"
    ]
  },
  "taints": {
    "taints": [
      {
        "effect": "EFFECT_UNSPECIFIED",
        "key": "string",
        "value": "string"
      }
    ]
  },
  "upgradeSettings": {
    "blueGreenSettings": {
      "autoscaledRolloutPolicy": {},
      "nodePoolSoakDuration": "string",
      "standardRolloutPolicy": {
        "batchNodeCount": 0,
        "batchPercentage": 0,
        "batchSoakDuration": "string"
      }
    },
    "maxSurge": 0,
    "maxUnavailable": 0,
    "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
  },
  "windowsNodeConfig": {
    "osVersion": "OS_VERSION_UNSPECIFIED"
  },
  "workloadMetadataConfig": {
    "mode": "MODE_UNSPECIFIED",
    "nodeMetadata": "UNSPECIFIED"
  },
  "zone": "string"
}
```

<h3 id="containerprojectszonesclustersnodepoolsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|path|string|true|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|
|clusterId|path|string|true|Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
|nodePoolId|path|string|true|Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.|
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
|body|body|[UpdateNodePoolRequest](#schemaupdatenodepoolrequest)|false|none|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
|» confidentialNodes|body|[ConfidentialNodes](#schemaconfidentialnodes)|false|Confidential nodes config. All the nodes in the node pool will be Confidential VM once enabled.|
|» diskSizeGb|body|string(int64)|false|Optional. The desired disk size for nodes in the node pool. Initiates an upgrade operation that migrates the nodes in the node pool to the specified disk size.|
|» diskType|body|string|false|Optional. The desired disk type for nodes in the node pool. Initiates an upgrade operation that migrates the nodes in the node pool to the specified disk type.|
|» etag|body|string|false|The current etag of the node pool. If an etag is provided and does not match the current etag of the node pool, update will be blocked and an ABORTED error will be returned.|
|» fastSocket|body|[FastSocket](#schemafastsocket)|false|Enable or disable NCCL fast socket for the node pool.|
|» gcfsConfig|body|[GcfsConfig](#schemagcfsconfig)|false|GCFS config.|
|» gvnic|body|[VirtualNIC](#schemavirtualnic)|false|Enable or disable gvnic on the node pool.|
|» imageType|body|string|false|Required. The desired image type for the node pool. Please see https://cloud.google.com/kubernetes-engine/docs/concepts/node-images for available image types.|
|» kubeletConfig|body|[NodeKubeletConfig](#schemanodekubeletconfig)|false|Node kubelet configs.|
|» labels|body|[NodeLabels](#schemanodelabels)|false|The desired node labels to be applied to all nodes in the node pool. If this field is not present, the labels will not be changed. Otherwise, the existing node labels will be *replaced* with the provided labels.|
|» linuxNodeConfig|body|[LinuxNodeConfig](#schemalinuxnodeconfig)|false|Parameters that can be configured on Linux nodes.|
|» locations|body|[string]|false|The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the node pool's nodes should be located. Changing the locations for a node pool will result in nodes being either created or removed from the node pool, depending on whether locations are being added or removed.|
|» loggingConfig|body|[NodePoolLoggingConfig](#schemanodepoolloggingconfig)|false|Logging configuration.|
|» machineType|body|string|false|Optional. The desired machine type for nodes in the node pool. Initiates an upgrade operation that migrates the nodes in the node pool to the specified machine type.|
|» name|body|string|false|The name (project, location, cluster, node pool) of the node pool to update. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.|
|» nodeNetworkConfig|body|[NodeNetworkConfig](#schemanodenetworkconfig)|false|Node network config.|
|» nodePoolId|body|string|false|**Deprecated.** Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.|
|» nodeVersion|body|string|false|Required. The Kubernetes version to change the nodes to (typically an upgrade). Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the Kubernetes master version|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» queuedProvisioning|body|[QueuedProvisioning](#schemaqueuedprovisioning)|false|Specifies the configuration of queued provisioning.|
|» resourceLabels|body|[ResourceLabels](#schemaresourcelabels)|false|The resource labels for the node pool to use to annotate any related Google Compute Engine resources.|
|» resourceManagerTags|body|[ResourceManagerTags](#schemaresourcemanagertags)|false|Desired resource manager tag keys and values to be attached to the nodes for managing Compute Engine firewalls using Network Firewall Policies. Existing tags will be replaced with new values.|
|» tags|body|[NetworkTags](#schemanetworktags)|false|The desired network tags to be applied to all nodes in the node pool. If this field is not present, the tags will not be changed. Otherwise, the existing network tags will be *replaced* with the provided tags.|
|» taints|body|[NodeTaints](#schemanodetaints)|false|The desired node taints to be applied to all nodes in the node pool. If this field is not present, the taints will not be changed. Otherwise, the existing node taints will be *replaced* with the provided taints.|
|» upgradeSettings|body|[UpgradeSettings](#schemaupgradesettings)|false|Upgrade settings control disruption and speed of the upgrade.|
|» windowsNodeConfig|body|[WindowsNodeConfig](#schemawindowsnodeconfig)|false|Parameters that can be configured on Windows nodes.|
|» workloadMetadataConfig|body|[WorkloadMetadataConfig](#schemaworkloadmetadataconfig)|false|The desired workload metadata config for the node pool.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclustersnodepoolsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.zones.clusters.nodePools.rollback

<a id="opIdcontainer.projects.zones.clusters.nodePools.rollback"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string/zones/string/clusters/string/nodePools/string:rollback \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "name": "string",
    "nodePoolId": "string",
    "projectId": "string",
    "respectPdb": true,
    "zone": "string"
  }'
```

`POST /v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}:rollback`

Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.

> Body parameter

```json
{
  "clusterId": "string",
  "name": "string",
  "nodePoolId": "string",
  "projectId": "string",
  "respectPdb": true,
  "zone": "string"
}
```

<h3 id="containerprojectszonesclustersnodepoolsrollback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|path|string|true|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|
|clusterId|path|string|true|Required. Deprecated. The name of the cluster to rollback. This field has been deprecated and replaced by the name field.|
|nodePoolId|path|string|true|Required. Deprecated. The name of the node pool to rollback. This field has been deprecated and replaced by the name field.|
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
|body|body|[RollbackNodePoolUpgradeRequest](#schemarollbacknodepoolupgraderequest)|false|none|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster to rollback. This field has been deprecated and replaced by the name field.|
|» name|body|string|false|The name (project, location, cluster, node pool id) of the node poll to rollback upgrade. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.|
|» nodePoolId|body|string|false|**Deprecated.** Required. Deprecated. The name of the node pool to rollback. This field has been deprecated and replaced by the name field.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» respectPdb|body|boolean|false|Option for rollback to ignore the PodDisruptionBudget. Default value is false.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclustersnodepoolsrollback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.zones.clusters.resourceLabels

<a id="opIdcontainer.projects.zones.clusters.resourceLabels"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string/zones/string/clusters/string/resourceLabels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "labelFingerprint": "string",
    "name": "string",
    "projectId": "string",
    "resourceLabels": {
      "property1": "string",
      "property2": "string"
    },
    "zone": "string"
  }'
```

`POST /v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/resourceLabels`

Sets labels on a cluster.

> Body parameter

```json
{
  "clusterId": "string",
  "labelFingerprint": "string",
  "name": "string",
  "projectId": "string",
  "resourceLabels": {
    "property1": "string",
    "property2": "string"
  },
  "zone": "string"
}
```

<h3 id="containerprojectszonesclustersresourcelabels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|path|string|true|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|
|clusterId|path|string|true|Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.|
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
|body|body|[SetLabelsRequest](#schemasetlabelsrequest)|false|none|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.|
|» labelFingerprint|body|string|false|Required. The fingerprint of the previous set of labels for this resource, used to detect conflicts. The fingerprint is initially generated by Kubernetes Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash when updating or changing labels. Make a `get()` request to the resource to get the latest fingerprint.|
|» name|body|string|false|The name (project, location, cluster name) of the cluster to set labels. Specified in the format `projects/*/locations/*/clusters/*`.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» resourceLabels|body|object|false|Required. The labels to set for that cluster.|
|» » **additionalProperties**|body|string|false|none|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclustersresourcelabels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.zones.clusters.completeIpRotation

<a id="opIdcontainer.projects.zones.clusters.completeIpRotation"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string/zones/string/clusters/string:completeIpRotation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "name": "string",
    "projectId": "string",
    "zone": "string"
  }'
```

`POST /v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:completeIpRotation`

Completes master IP rotation.

> Body parameter

```json
{
  "clusterId": "string",
  "name": "string",
  "projectId": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclusterscompleteiprotation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|path|string|true|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|
|clusterId|path|string|true|Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.|
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
|body|body|[CompleteIPRotationRequest](#schemacompleteiprotationrequest)|false|none|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.|
|» name|body|string|false|The name (project, location, cluster name) of the cluster to complete IP rotation. Specified in the format `projects/*/locations/*/clusters/*`.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclusterscompleteiprotation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.zones.clusters.setMaintenancePolicy

<a id="opIdcontainer.projects.zones.clusters.setMaintenancePolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string/zones/string/clusters/string:setMaintenancePolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "maintenancePolicy": {
      "resourceVersion": "string",
      "window": {
        "dailyMaintenanceWindow": {
          "duration": "string",
          "startTime": "string"
        },
        "maintenanceExclusions": {
          "property1": {
            "endTime": "string",
            "maintenanceExclusionOptions": {
              "scope": "NO_UPGRADES"
            },
            "startTime": "string"
          },
          "property2": {
            "endTime": "string",
            "maintenanceExclusionOptions": {
              "scope": "NO_UPGRADES"
            },
            "startTime": "string"
          }
        },
        "recurringWindow": {
          "recurrence": "string",
          "window": {
            "endTime": "string",
            "maintenanceExclusionOptions": {
              "scope": "NO_UPGRADES"
            },
            "startTime": "string"
          }
        }
      }
    },
    "name": "string",
    "projectId": "string",
    "zone": "string"
  }'
```

`POST /v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMaintenancePolicy`

Sets the maintenance policy for a cluster.

> Body parameter

```json
{
  "clusterId": "string",
  "maintenancePolicy": {
    "resourceVersion": "string",
    "window": {
      "dailyMaintenanceWindow": {
        "duration": "string",
        "startTime": "string"
      },
      "maintenanceExclusions": {
        "property1": {
          "endTime": "string",
          "maintenanceExclusionOptions": {
            "scope": "NO_UPGRADES"
          },
          "startTime": "string"
        },
        "property2": {
          "endTime": "string",
          "maintenanceExclusionOptions": {
            "scope": "NO_UPGRADES"
          },
          "startTime": "string"
        }
      },
      "recurringWindow": {
        "recurrence": "string",
        "window": {
          "endTime": "string",
          "maintenanceExclusionOptions": {
            "scope": "NO_UPGRADES"
          },
          "startTime": "string"
        }
      }
    }
  },
  "name": "string",
  "projectId": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclusterssetmaintenancepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects).|
|zone|path|string|true|Required. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides.|
|clusterId|path|string|true|Required. The name of the cluster to update.|
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
|body|body|[SetMaintenancePolicyRequest](#schemasetmaintenancepolicyrequest)|false|none|
|» clusterId|body|string|false|Required. The name of the cluster to update.|
|» maintenancePolicy|body|[MaintenancePolicy](#schemamaintenancepolicy)|false|Required. The maintenance policy to be set for the cluster. An empty field clears the existing maintenance policy.|
|» name|body|string|false|The name (project, location, cluster name) of the cluster to set maintenance policy. Specified in the format `projects/*/locations/*/clusters/*`.|
|» projectId|body|string|false|Required. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects).|
|» zone|body|string|false|Required. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclusterssetmaintenancepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.zones.clusters.setMasterAuth

<a id="opIdcontainer.projects.zones.clusters.setMasterAuth"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string/zones/string/clusters/string:setMasterAuth \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "action": "UNKNOWN",
    "clusterId": "string",
    "name": "string",
    "projectId": "string",
    "update": {
      "clientCertificate": "string",
      "clientCertificateConfig": {
        "issueClientCertificate": true
      },
      "clientKey": "string",
      "clusterCaCertificate": "string",
      "password": "string",
      "username": "string"
    },
    "zone": "string"
  }'
```

`POST /v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMasterAuth`

Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.

> Body parameter

```json
{
  "action": "UNKNOWN",
  "clusterId": "string",
  "name": "string",
  "projectId": "string",
  "update": {
    "clientCertificate": "string",
    "clientCertificateConfig": {
      "issueClientCertificate": true
    },
    "clientKey": "string",
    "clusterCaCertificate": "string",
    "password": "string",
    "username": "string"
  },
  "zone": "string"
}
```

<h3 id="containerprojectszonesclusterssetmasterauth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|path|string|true|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|
|clusterId|path|string|true|Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
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
|body|body|[SetMasterAuthRequest](#schemasetmasterauthrequest)|false|none|
|» action|body|string|false|Required. The exact form of action to be taken on the master auth.|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
|» name|body|string|false|The name (project, location, cluster) of the cluster to set auth. Specified in the format `projects/*/locations/*/clusters/*`.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» update|body|[MasterAuth](#schemamasterauth)|false|Required. A description of the update.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» action|UNKNOWN|
|» action|SET_PASSWORD|
|» action|GENERATE_PASSWORD|
|» action|SET_USERNAME|

> Example responses

> 200 Response

```json
{
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclusterssetmasterauth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.zones.clusters.setNetworkPolicy

<a id="opIdcontainer.projects.zones.clusters.setNetworkPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string/zones/string/clusters/string:setNetworkPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "name": "string",
    "networkPolicy": {
      "enabled": true,
      "provider": "PROVIDER_UNSPECIFIED"
    },
    "projectId": "string",
    "zone": "string"
  }'
```

`POST /v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setNetworkPolicy`

Enables or disables Network Policy for a cluster.

> Body parameter

```json
{
  "clusterId": "string",
  "name": "string",
  "networkPolicy": {
    "enabled": true,
    "provider": "PROVIDER_UNSPECIFIED"
  },
  "projectId": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclusterssetnetworkpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|path|string|true|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|
|clusterId|path|string|true|Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.|
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
|body|body|[SetNetworkPolicyRequest](#schemasetnetworkpolicyrequest)|false|none|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.|
|» name|body|string|false|The name (project, location, cluster name) of the cluster to set networking policy. Specified in the format `projects/*/locations/*/clusters/*`.|
|» networkPolicy|body|[NetworkPolicy](#schemanetworkpolicy)|false|Required. Configuration options for the NetworkPolicy feature.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclusterssetnetworkpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.zones.clusters.startIpRotation

<a id="opIdcontainer.projects.zones.clusters.startIpRotation"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string/zones/string/clusters/string:startIpRotation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "name": "string",
    "projectId": "string",
    "rotateCredentials": true,
    "zone": "string"
  }'
```

`POST /v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:startIpRotation`

Starts master IP rotation.

> Body parameter

```json
{
  "clusterId": "string",
  "name": "string",
  "projectId": "string",
  "rotateCredentials": true,
  "zone": "string"
}
```

<h3 id="containerprojectszonesclustersstartiprotation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|path|string|true|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|
|clusterId|path|string|true|Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.|
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
|body|body|[StartIPRotationRequest](#schemastartiprotationrequest)|false|none|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.|
|» name|body|string|false|The name (project, location, cluster name) of the cluster to start IP rotation. Specified in the format `projects/*/locations/*/clusters/*`.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» rotateCredentials|body|boolean|false|Whether to rotate credentials during IP rotation.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesclustersstartiprotation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.zones.operations.list

<a id="opIdcontainer.projects.zones.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string/zones/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/projects/{projectId}/zones/{zone}/operations`

Lists all operations in a project in the specified zone or all zones.

<h3 id="containerprojectszonesoperationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.|
|zone|path|string|true|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for, or `-` for all zones. This field has been deprecated and replaced by the parent field.|
|parent|query|string|false|The parent (project and location) where the operations will be listed. Specified in the format `projects/*/locations/*`. Location "-" matches all zones and all regions.|
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
  "missingZones": [
    "string"
  ],
  "operations": [
    {
      "clusterConditions": [
        {
          "canonicalCode": "OK",
          "code": "UNKNOWN",
          "message": "string"
        }
      ],
      "detail": "string",
      "endTime": "string",
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
      "location": "string",
      "name": "string",
      "nodepoolConditions": [
        {
          "canonicalCode": "OK",
          "code": "UNKNOWN",
          "message": "string"
        }
      ],
      "operationType": "TYPE_UNSPECIFIED",
      "progress": {
        "metrics": [
          {
            "doubleValue": 0,
            "intValue": "string",
            "name": "string",
            "stringValue": "string"
          }
        ],
        "name": "string",
        "stages": [
          {}
        ],
        "status": "STATUS_UNSPECIFIED"
      },
      "selfLink": "string",
      "startTime": "string",
      "status": "STATUS_UNSPECIFIED",
      "statusMessage": "string",
      "targetLink": "string",
      "zone": "string"
    }
  ]
}
```

<h3 id="containerprojectszonesoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.zones.operations.get

<a id="opIdcontainer.projects.zones.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string/zones/string/operations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/projects/{projectId}/zones/{zone}/operations/{operationId}`

Gets the specified operation.

<h3 id="containerprojectszonesoperationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|path|string|true|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|
|operationId|path|string|true|Required. Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.|
|name|query|string|false|The name (project, location, operation id) of the operation to get. Specified in the format `projects/*/locations/*/operations/*`.|
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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.zones.operations.cancel

<a id="opIdcontainer.projects.zones.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string/zones/string/operations/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "operationId": "string",
    "projectId": "string",
    "zone": "string"
  }'
```

`POST /v1beta1/projects/{projectId}/zones/{zone}/operations/{operationId}:cancel`

Cancels the specified operation.

> Body parameter

```json
{
  "name": "string",
  "operationId": "string",
  "projectId": "string",
  "zone": "string"
}
```

<h3 id="containerprojectszonesoperationscancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|path|string|true|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation resides. This field has been deprecated and replaced by the name field.|
|operationId|path|string|true|Required. Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.|
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
|» name|body|string|false|The name (project, location, operation id) of the operation to cancel. Specified in the format `projects/*/locations/*/operations/*`.|
|» operationId|body|string|false|**Deprecated.** Required. Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation resides. This field has been deprecated and replaced by the name field.|

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

<h3 id="containerprojectszonesoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.zones.getServerconfig

<a id="opIdcontainer.projects.zones.getServerconfig"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string/zones/string/serverconfig \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/projects/{projectId}/zones/{zone}/serverconfig`

Returns configuration info about the Google Kubernetes Engine service.

<h3 id="containerprojectszonesgetserverconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|path|string|true|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for. This field has been deprecated and replaced by the name field.|
|name|query|string|false|The name (project and location) of the server config to get, specified in the format `projects/*/locations/*`.|
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
  "channels": [
    {
      "availableVersions": [
        {
          "reason": "string",
          "version": "string"
        }
      ],
      "channel": "UNSPECIFIED",
      "defaultVersion": "string",
      "validVersions": [
        "string"
      ]
    }
  ],
  "defaultClusterVersion": "string",
  "defaultImageType": "string",
  "validImageTypes": [
    "string"
  ],
  "validMasterVersions": [
    "string"
  ],
  "validNodeVersions": [
    "string"
  ],
  "windowsVersionMaps": {
    "property1": {
      "windowsVersions": [
        {
          "imageType": "string",
          "osVersion": "string",
          "supportEndDate": {
            "day": 0,
            "month": 0,
            "year": 0
          }
        }
      ]
    },
    "property2": {
      "windowsVersions": [
        {
          "imageType": "string",
          "osVersion": "string",
          "supportEndDate": {
            "day": 0,
            "month": 0,
            "year": 0
          }
        }
      ]
    }
  }
}
```

<h3 id="containerprojectszonesgetserverconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ServerConfig](#schemaserverconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.locations.operations.get

<a id="opIdcontainer.projects.locations.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}`

Gets the specified operation.

<h3 id="containerprojectslocationsoperationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name (project, location, operation id) of the operation to get. Specified in the format `projects/*/locations/*/operations/*`.|
|operationId|query|string|false|Required. Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.|
|projectId|query|string|false|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|query|string|false|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|
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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.locations.clusters.nodePools.update

<a id="opIdcontainer.projects.locations.clusters.nodePools.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "confidentialNodes": {
      "enabled": true
    },
    "diskSizeGb": "string",
    "diskType": "string",
    "etag": "string",
    "fastSocket": {
      "enabled": true
    },
    "gcfsConfig": {
      "enabled": true
    },
    "gvnic": {
      "enabled": true
    },
    "imageType": "string",
    "kubeletConfig": {
      "cpuCfsQuota": true,
      "cpuCfsQuotaPeriod": "string",
      "cpuManagerPolicy": "string",
      "insecureKubeletReadonlyPortEnabled": true,
      "podPidsLimit": "string"
    },
    "labels": {
      "labels": {
        "property1": "string",
        "property2": "string"
      }
    },
    "linuxNodeConfig": {
      "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
      "sysctls": {
        "property1": "string",
        "property2": "string"
      }
    },
    "locations": [
      "string"
    ],
    "loggingConfig": {
      "variantConfig": {
        "variant": "VARIANT_UNSPECIFIED"
      }
    },
    "machineType": "string",
    "name": "string",
    "nodeNetworkConfig": {
      "additionalNodeNetworkConfigs": [
        {
          "network": "string",
          "subnetwork": "string"
        }
      ],
      "additionalPodNetworkConfigs": [
        {
          "maxPodsPerNode": {
            "maxPodsPerNode": "string"
          },
          "secondaryPodRange": "string",
          "subnetwork": "string"
        }
      ],
      "createPodRange": true,
      "enablePrivateNodes": true,
      "networkPerformanceConfig": {
        "externalIpEgressBandwidthTier": "TIER_UNSPECIFIED",
        "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
      },
      "podCidrOverprovisionConfig": {
        "disable": true
      },
      "podIpv4CidrBlock": "string",
      "podRange": "string"
    },
    "nodePoolId": "string",
    "nodeVersion": "string",
    "projectId": "string",
    "queuedProvisioning": {
      "enabled": true
    },
    "resourceLabels": {
      "labels": {
        "property1": "string",
        "property2": "string"
      }
    },
    "resourceManagerTags": {
      "tags": {
        "property1": "string",
        "property2": "string"
      }
    },
    "tags": {
      "tags": [
        "string"
      ]
    },
    "taints": {
      "taints": [
        {
          "effect": "EFFECT_UNSPECIFIED",
          "key": "string",
          "value": "string"
        }
      ]
    },
    "upgradeSettings": {
      "blueGreenSettings": {
        "autoscaledRolloutPolicy": {},
        "nodePoolSoakDuration": "string",
        "standardRolloutPolicy": {
          "batchNodeCount": 0,
          "batchPercentage": 0,
          "batchSoakDuration": "string"
        }
      },
      "maxSurge": 0,
      "maxUnavailable": 0,
      "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
    },
    "windowsNodeConfig": {
      "osVersion": "OS_VERSION_UNSPECIFIED"
    },
    "workloadMetadataConfig": {
      "mode": "MODE_UNSPECIFIED",
      "nodeMetadata": "UNSPECIFIED"
    },
    "zone": "string"
  }'
```

`PUT /v1beta1/{name}`

Updates the version and/or image type of a specific node pool.

> Body parameter

```json
{
  "clusterId": "string",
  "confidentialNodes": {
    "enabled": true
  },
  "diskSizeGb": "string",
  "diskType": "string",
  "etag": "string",
  "fastSocket": {
    "enabled": true
  },
  "gcfsConfig": {
    "enabled": true
  },
  "gvnic": {
    "enabled": true
  },
  "imageType": "string",
  "kubeletConfig": {
    "cpuCfsQuota": true,
    "cpuCfsQuotaPeriod": "string",
    "cpuManagerPolicy": "string",
    "insecureKubeletReadonlyPortEnabled": true,
    "podPidsLimit": "string"
  },
  "labels": {
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  },
  "linuxNodeConfig": {
    "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
    "sysctls": {
      "property1": "string",
      "property2": "string"
    }
  },
  "locations": [
    "string"
  ],
  "loggingConfig": {
    "variantConfig": {
      "variant": "VARIANT_UNSPECIFIED"
    }
  },
  "machineType": "string",
  "name": "string",
  "nodeNetworkConfig": {
    "additionalNodeNetworkConfigs": [
      {
        "network": "string",
        "subnetwork": "string"
      }
    ],
    "additionalPodNetworkConfigs": [
      {
        "maxPodsPerNode": {
          "maxPodsPerNode": "string"
        },
        "secondaryPodRange": "string",
        "subnetwork": "string"
      }
    ],
    "createPodRange": true,
    "enablePrivateNodes": true,
    "networkPerformanceConfig": {
      "externalIpEgressBandwidthTier": "TIER_UNSPECIFIED",
      "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
    },
    "podCidrOverprovisionConfig": {
      "disable": true
    },
    "podIpv4CidrBlock": "string",
    "podRange": "string"
  },
  "nodePoolId": "string",
  "nodeVersion": "string",
  "projectId": "string",
  "queuedProvisioning": {
    "enabled": true
  },
  "resourceLabels": {
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  },
  "resourceManagerTags": {
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  },
  "tags": {
    "tags": [
      "string"
    ]
  },
  "taints": {
    "taints": [
      {
        "effect": "EFFECT_UNSPECIFIED",
        "key": "string",
        "value": "string"
      }
    ]
  },
  "upgradeSettings": {
    "blueGreenSettings": {
      "autoscaledRolloutPolicy": {},
      "nodePoolSoakDuration": "string",
      "standardRolloutPolicy": {
        "batchNodeCount": 0,
        "batchPercentage": 0,
        "batchSoakDuration": "string"
      }
    },
    "maxSurge": 0,
    "maxUnavailable": 0,
    "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
  },
  "windowsNodeConfig": {
    "osVersion": "OS_VERSION_UNSPECIFIED"
  },
  "workloadMetadataConfig": {
    "mode": "MODE_UNSPECIFIED",
    "nodeMetadata": "UNSPECIFIED"
  },
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclustersnodepoolsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name (project, location, cluster, node pool) of the node pool to update. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.|
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
|body|body|[UpdateNodePoolRequest](#schemaupdatenodepoolrequest)|false|none|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
|» confidentialNodes|body|[ConfidentialNodes](#schemaconfidentialnodes)|false|Confidential nodes config. All the nodes in the node pool will be Confidential VM once enabled.|
|» diskSizeGb|body|string(int64)|false|Optional. The desired disk size for nodes in the node pool. Initiates an upgrade operation that migrates the nodes in the node pool to the specified disk size.|
|» diskType|body|string|false|Optional. The desired disk type for nodes in the node pool. Initiates an upgrade operation that migrates the nodes in the node pool to the specified disk type.|
|» etag|body|string|false|The current etag of the node pool. If an etag is provided and does not match the current etag of the node pool, update will be blocked and an ABORTED error will be returned.|
|» fastSocket|body|[FastSocket](#schemafastsocket)|false|Enable or disable NCCL fast socket for the node pool.|
|» gcfsConfig|body|[GcfsConfig](#schemagcfsconfig)|false|GCFS config.|
|» gvnic|body|[VirtualNIC](#schemavirtualnic)|false|Enable or disable gvnic on the node pool.|
|» imageType|body|string|false|Required. The desired image type for the node pool. Please see https://cloud.google.com/kubernetes-engine/docs/concepts/node-images for available image types.|
|» kubeletConfig|body|[NodeKubeletConfig](#schemanodekubeletconfig)|false|Node kubelet configs.|
|» labels|body|[NodeLabels](#schemanodelabels)|false|The desired node labels to be applied to all nodes in the node pool. If this field is not present, the labels will not be changed. Otherwise, the existing node labels will be *replaced* with the provided labels.|
|» linuxNodeConfig|body|[LinuxNodeConfig](#schemalinuxnodeconfig)|false|Parameters that can be configured on Linux nodes.|
|» locations|body|[string]|false|The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the node pool's nodes should be located. Changing the locations for a node pool will result in nodes being either created or removed from the node pool, depending on whether locations are being added or removed.|
|» loggingConfig|body|[NodePoolLoggingConfig](#schemanodepoolloggingconfig)|false|Logging configuration.|
|» machineType|body|string|false|Optional. The desired machine type for nodes in the node pool. Initiates an upgrade operation that migrates the nodes in the node pool to the specified machine type.|
|» name|body|string|false|The name (project, location, cluster, node pool) of the node pool to update. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.|
|» nodeNetworkConfig|body|[NodeNetworkConfig](#schemanodenetworkconfig)|false|Node network config.|
|» nodePoolId|body|string|false|**Deprecated.** Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.|
|» nodeVersion|body|string|false|Required. The Kubernetes version to change the nodes to (typically an upgrade). Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the Kubernetes master version|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» queuedProvisioning|body|[QueuedProvisioning](#schemaqueuedprovisioning)|false|Specifies the configuration of queued provisioning.|
|» resourceLabels|body|[ResourceLabels](#schemaresourcelabels)|false|The resource labels for the node pool to use to annotate any related Google Compute Engine resources.|
|» resourceManagerTags|body|[ResourceManagerTags](#schemaresourcemanagertags)|false|Desired resource manager tag keys and values to be attached to the nodes for managing Compute Engine firewalls using Network Firewall Policies. Existing tags will be replaced with new values.|
|» tags|body|[NetworkTags](#schemanetworktags)|false|The desired network tags to be applied to all nodes in the node pool. If this field is not present, the tags will not be changed. Otherwise, the existing network tags will be *replaced* with the provided tags.|
|» taints|body|[NodeTaints](#schemanodetaints)|false|The desired node taints to be applied to all nodes in the node pool. If this field is not present, the taints will not be changed. Otherwise, the existing node taints will be *replaced* with the provided taints.|
|» upgradeSettings|body|[UpgradeSettings](#schemaupgradesettings)|false|Upgrade settings control disruption and speed of the upgrade.|
|» windowsNodeConfig|body|[WindowsNodeConfig](#schemawindowsnodeconfig)|false|Parameters that can be configured on Windows nodes.|
|» workloadMetadataConfig|body|[WorkloadMetadataConfig](#schemaworkloadmetadataconfig)|false|The desired workload metadata config for the node pool.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclustersnodepoolsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.locations.clusters.nodePools.delete

<a id="opIdcontainer.projects.locations.clusters.nodePools.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{name}`

Deletes a node pool from a cluster.

<h3 id="containerprojectslocationsclustersnodepoolsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.|
|clusterId|query|string|false|Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.|
|nodePoolId|query|string|false|Required. Deprecated. The name of the node pool to delete. This field has been deprecated and replaced by the name field.|
|projectId|query|string|false|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|query|string|false|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|
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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclustersnodepoolsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.locations.getServerConfig

<a id="opIdcontainer.projects.locations.getServerConfig"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/serverConfig \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/serverConfig`

Returns configuration info about the Google Kubernetes Engine service.

<h3 id="containerprojectslocationsgetserverconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name (project and location) of the server config to get, specified in the format `projects/*/locations/*`.|
|projectId|query|string|false|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|query|string|false|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for. This field has been deprecated and replaced by the name field.|
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
  "channels": [
    {
      "availableVersions": [
        {
          "reason": "string",
          "version": "string"
        }
      ],
      "channel": "UNSPECIFIED",
      "defaultVersion": "string",
      "validVersions": [
        "string"
      ]
    }
  ],
  "defaultClusterVersion": "string",
  "defaultImageType": "string",
  "validImageTypes": [
    "string"
  ],
  "validMasterVersions": [
    "string"
  ],
  "validNodeVersions": [
    "string"
  ],
  "windowsVersionMaps": {
    "property1": {
      "windowsVersions": [
        {
          "imageType": "string",
          "osVersion": "string",
          "supportEndDate": {
            "day": 0,
            "month": 0,
            "year": 0
          }
        }
      ]
    },
    "property2": {
      "windowsVersions": [
        {
          "imageType": "string",
          "osVersion": "string",
          "supportEndDate": {
            "day": 0,
            "month": 0,
            "year": 0
          }
        }
      ]
    }
  }
}
```

<h3 id="containerprojectslocationsgetserverconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ServerConfig](#schemaserverconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.locations.operations.cancel

<a id="opIdcontainer.projects.locations.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "operationId": "string",
    "projectId": "string",
    "zone": "string"
  }'
```

`POST /v1beta1/{name}:cancel`

Cancels the specified operation.

> Body parameter

```json
{
  "name": "string",
  "operationId": "string",
  "projectId": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsoperationscancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name (project, location, operation id) of the operation to cancel. Specified in the format `projects/*/locations/*/operations/*`.|
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
|» name|body|string|false|The name (project, location, operation id) of the operation to cancel. Specified in the format `projects/*/locations/*/operations/*`.|
|» operationId|body|string|false|**Deprecated.** Required. Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation resides. This field has been deprecated and replaced by the name field.|

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

<h3 id="containerprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.locations.clusters.checkAutopilotCompatibility

<a id="opIdcontainer.projects.locations.clusters.checkAutopilotCompatibility"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:checkAutopilotCompatibility \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}:checkAutopilotCompatibility`

Checks the cluster compatibility with Autopilot mode, and returns a list of compatibility issues.

<h3 id="containerprojectslocationsclusterscheckautopilotcompatibility-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name (project, location, cluster) of the cluster to retrieve. Specified in the format `projects/*/locations/*/clusters/*`.|
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
  "issues": [
    {
      "constraintType": "string",
      "description": "string",
      "documentationUrl": "string",
      "incompatibilityType": "UNSPECIFIED",
      "lastObservation": "string",
      "subjects": [
        "string"
      ]
    }
  ],
  "summary": "string"
}
```

<h3 id="containerprojectslocationsclusterscheckautopilotcompatibility-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CheckAutopilotCompatibilityResponse](#schemacheckautopilotcompatibilityresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.locations.clusters.completeIpRotation

<a id="opIdcontainer.projects.locations.clusters.completeIpRotation"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:completeIpRotation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "name": "string",
    "projectId": "string",
    "zone": "string"
  }'
```

`POST /v1beta1/{name}:completeIpRotation`

Completes master IP rotation.

> Body parameter

```json
{
  "clusterId": "string",
  "name": "string",
  "projectId": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclusterscompleteiprotation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name (project, location, cluster name) of the cluster to complete IP rotation. Specified in the format `projects/*/locations/*/clusters/*`.|
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
|body|body|[CompleteIPRotationRequest](#schemacompleteiprotationrequest)|false|none|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.|
|» name|body|string|false|The name (project, location, cluster name) of the cluster to complete IP rotation. Specified in the format `projects/*/locations/*/clusters/*`.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclusterscompleteiprotation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.locations.clusters.nodePools.completeUpgrade

<a id="opIdcontainer.projects.locations.clusters.nodePools.completeUpgrade"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:completeUpgrade \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta1/{name}:completeUpgrade`

CompleteNodePoolUpgrade will signal an on-going node pool upgrade to complete.

> Body parameter

```json
{}
```

<h3 id="containerprojectslocationsclustersnodepoolscompleteupgrade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name (project, location, cluster, node pool id) of the node pool to complete upgrade. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.|
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
|body|body|[CompleteNodePoolUpgradeRequest](#schemacompletenodepoolupgraderequest)|false|none|

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

<h3 id="containerprojectslocationsclustersnodepoolscompleteupgrade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.locations.clusters.nodePools.rollback

<a id="opIdcontainer.projects.locations.clusters.nodePools.rollback"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:rollback \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "name": "string",
    "nodePoolId": "string",
    "projectId": "string",
    "respectPdb": true,
    "zone": "string"
  }'
```

`POST /v1beta1/{name}:rollback`

Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.

> Body parameter

```json
{
  "clusterId": "string",
  "name": "string",
  "nodePoolId": "string",
  "projectId": "string",
  "respectPdb": true,
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclustersnodepoolsrollback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name (project, location, cluster, node pool id) of the node poll to rollback upgrade. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.|
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
|body|body|[RollbackNodePoolUpgradeRequest](#schemarollbacknodepoolupgraderequest)|false|none|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster to rollback. This field has been deprecated and replaced by the name field.|
|» name|body|string|false|The name (project, location, cluster, node pool id) of the node poll to rollback upgrade. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.|
|» nodePoolId|body|string|false|**Deprecated.** Required. Deprecated. The name of the node pool to rollback. This field has been deprecated and replaced by the name field.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» respectPdb|body|boolean|false|Option for rollback to ignore the PodDisruptionBudget. Default value is false.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclustersnodepoolsrollback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.locations.clusters.setAddons

<a id="opIdcontainer.projects.locations.clusters.setAddons"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:setAddons \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "addonsConfig": {
      "cloudRunConfig": {
        "disabled": true,
        "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED"
      },
      "configConnectorConfig": {
        "enabled": true
      },
      "dnsCacheConfig": {
        "enabled": true
      },
      "gcePersistentDiskCsiDriverConfig": {
        "enabled": true
      },
      "gcpFilestoreCsiDriverConfig": {
        "enabled": true
      },
      "gcsFuseCsiDriverConfig": {
        "enabled": true
      },
      "gkeBackupAgentConfig": {
        "enabled": true
      },
      "horizontalPodAutoscaling": {
        "disabled": true
      },
      "httpLoadBalancing": {
        "disabled": true
      },
      "istioConfig": {
        "auth": "AUTH_NONE",
        "disabled": true
      },
      "kalmConfig": {
        "enabled": true
      },
      "kubernetesDashboard": {
        "disabled": true
      },
      "networkPolicyConfig": {
        "disabled": true
      },
      "statefulHaConfig": {
        "enabled": true
      }
    },
    "clusterId": "string",
    "name": "string",
    "projectId": "string",
    "zone": "string"
  }'
```

`POST /v1beta1/{name}:setAddons`

Sets the addons for a specific cluster.

> Body parameter

```json
{
  "addonsConfig": {
    "cloudRunConfig": {
      "disabled": true,
      "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED"
    },
    "configConnectorConfig": {
      "enabled": true
    },
    "dnsCacheConfig": {
      "enabled": true
    },
    "gcePersistentDiskCsiDriverConfig": {
      "enabled": true
    },
    "gcpFilestoreCsiDriverConfig": {
      "enabled": true
    },
    "gcsFuseCsiDriverConfig": {
      "enabled": true
    },
    "gkeBackupAgentConfig": {
      "enabled": true
    },
    "horizontalPodAutoscaling": {
      "disabled": true
    },
    "httpLoadBalancing": {
      "disabled": true
    },
    "istioConfig": {
      "auth": "AUTH_NONE",
      "disabled": true
    },
    "kalmConfig": {
      "enabled": true
    },
    "kubernetesDashboard": {
      "disabled": true
    },
    "networkPolicyConfig": {
      "disabled": true
    },
    "statefulHaConfig": {
      "enabled": true
    }
  },
  "clusterId": "string",
  "name": "string",
  "projectId": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclusterssetaddons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name (project, location, cluster) of the cluster to set addons. Specified in the format `projects/*/locations/*/clusters/*`.|
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
|body|body|[SetAddonsConfigRequest](#schemasetaddonsconfigrequest)|false|none|
|» addonsConfig|body|[AddonsConfig](#schemaaddonsconfig)|false|Required. The desired configurations for the various addons available to run in the cluster.|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
|» name|body|string|false|The name (project, location, cluster) of the cluster to set addons. Specified in the format `projects/*/locations/*/clusters/*`.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclusterssetaddons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.locations.clusters.nodePools.setAutoscaling

<a id="opIdcontainer.projects.locations.clusters.nodePools.setAutoscaling"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:setAutoscaling \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "autoscaling": {
      "autoprovisioned": true,
      "enabled": true,
      "locationPolicy": "LOCATION_POLICY_UNSPECIFIED",
      "maxNodeCount": 0,
      "minNodeCount": 0,
      "totalMaxNodeCount": 0,
      "totalMinNodeCount": 0
    },
    "clusterId": "string",
    "name": "string",
    "nodePoolId": "string",
    "projectId": "string",
    "zone": "string"
  }'
```

`POST /v1beta1/{name}:setAutoscaling`

Sets the autoscaling settings of a specific node pool.

> Body parameter

```json
{
  "autoscaling": {
    "autoprovisioned": true,
    "enabled": true,
    "locationPolicy": "LOCATION_POLICY_UNSPECIFIED",
    "maxNodeCount": 0,
    "minNodeCount": 0,
    "totalMaxNodeCount": 0,
    "totalMinNodeCount": 0
  },
  "clusterId": "string",
  "name": "string",
  "nodePoolId": "string",
  "projectId": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclustersnodepoolssetautoscaling-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name (project, location, cluster, node pool) of the node pool to set autoscaler settings. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.|
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
|body|body|[SetNodePoolAutoscalingRequest](#schemasetnodepoolautoscalingrequest)|false|none|
|» autoscaling|body|[NodePoolAutoscaling](#schemanodepoolautoscaling)|false|Required. Autoscaling configuration for the node pool.|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
|» name|body|string|false|The name (project, location, cluster, node pool) of the node pool to set autoscaler settings. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.|
|» nodePoolId|body|string|false|**Deprecated.** Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclustersnodepoolssetautoscaling-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.locations.clusters.setLegacyAbac

<a id="opIdcontainer.projects.locations.clusters.setLegacyAbac"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:setLegacyAbac \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "enabled": true,
    "name": "string",
    "projectId": "string",
    "zone": "string"
  }'
```

`POST /v1beta1/{name}:setLegacyAbac`

Enables or disables the ABAC authorization mechanism on a cluster.

> Body parameter

```json
{
  "clusterId": "string",
  "enabled": true,
  "name": "string",
  "projectId": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclusterssetlegacyabac-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name (project, location, cluster name) of the cluster to set legacy abac. Specified in the format `projects/*/locations/*/clusters/*`.|
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
|body|body|[SetLegacyAbacRequest](#schemasetlegacyabacrequest)|false|none|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.|
|» enabled|body|boolean|false|Required. Whether ABAC authorization will be enabled in the cluster.|
|» name|body|string|false|The name (project, location, cluster name) of the cluster to set legacy abac. Specified in the format `projects/*/locations/*/clusters/*`.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclusterssetlegacyabac-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.locations.clusters.setLocations

<a id="opIdcontainer.projects.locations.clusters.setLocations"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:setLocations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "locations": [
      "string"
    ],
    "name": "string",
    "projectId": "string",
    "zone": "string"
  }'
```

`POST /v1beta1/{name}:setLocations`

Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.

> Body parameter

```json
{
  "clusterId": "string",
  "locations": [
    "string"
  ],
  "name": "string",
  "projectId": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclusterssetlocations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name (project, location, cluster) of the cluster to set locations. Specified in the format `projects/*/locations/*/clusters/*`.|
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
|body|body|[SetLocationsRequest](#schemasetlocationsrequest)|false|none|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
|» locations|body|[string]|false|Required. The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. Changing the locations a cluster is in will result in nodes being either created or removed from the cluster, depending on whether locations are being added or removed. This list must always include the cluster's primary zone.|
|» name|body|string|false|The name (project, location, cluster) of the cluster to set locations. Specified in the format `projects/*/locations/*/clusters/*`.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclusterssetlocations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.locations.clusters.setLogging

<a id="opIdcontainer.projects.locations.clusters.setLogging"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:setLogging \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "loggingService": "string",
    "name": "string",
    "projectId": "string",
    "zone": "string"
  }'
```

`POST /v1beta1/{name}:setLogging`

Sets the logging service for a specific cluster.

> Body parameter

```json
{
  "clusterId": "string",
  "loggingService": "string",
  "name": "string",
  "projectId": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclusterssetlogging-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name (project, location, cluster) of the cluster to set logging. Specified in the format `projects/*/locations/*/clusters/*`.|
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
|body|body|[SetLoggingServiceRequest](#schemasetloggingservicerequest)|false|none|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
|» loggingService|body|string|false|Required. The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions.|
|» name|body|string|false|The name (project, location, cluster) of the cluster to set logging. Specified in the format `projects/*/locations/*/clusters/*`.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclusterssetlogging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.locations.clusters.setMaintenancePolicy

<a id="opIdcontainer.projects.locations.clusters.setMaintenancePolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:setMaintenancePolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "maintenancePolicy": {
      "resourceVersion": "string",
      "window": {
        "dailyMaintenanceWindow": {
          "duration": "string",
          "startTime": "string"
        },
        "maintenanceExclusions": {
          "property1": {
            "endTime": "string",
            "maintenanceExclusionOptions": {
              "scope": "NO_UPGRADES"
            },
            "startTime": "string"
          },
          "property2": {
            "endTime": "string",
            "maintenanceExclusionOptions": {
              "scope": "NO_UPGRADES"
            },
            "startTime": "string"
          }
        },
        "recurringWindow": {
          "recurrence": "string",
          "window": {
            "endTime": "string",
            "maintenanceExclusionOptions": {
              "scope": "NO_UPGRADES"
            },
            "startTime": "string"
          }
        }
      }
    },
    "name": "string",
    "projectId": "string",
    "zone": "string"
  }'
```

`POST /v1beta1/{name}:setMaintenancePolicy`

Sets the maintenance policy for a cluster.

> Body parameter

```json
{
  "clusterId": "string",
  "maintenancePolicy": {
    "resourceVersion": "string",
    "window": {
      "dailyMaintenanceWindow": {
        "duration": "string",
        "startTime": "string"
      },
      "maintenanceExclusions": {
        "property1": {
          "endTime": "string",
          "maintenanceExclusionOptions": {
            "scope": "NO_UPGRADES"
          },
          "startTime": "string"
        },
        "property2": {
          "endTime": "string",
          "maintenanceExclusionOptions": {
            "scope": "NO_UPGRADES"
          },
          "startTime": "string"
        }
      },
      "recurringWindow": {
        "recurrence": "string",
        "window": {
          "endTime": "string",
          "maintenanceExclusionOptions": {
            "scope": "NO_UPGRADES"
          },
          "startTime": "string"
        }
      }
    }
  },
  "name": "string",
  "projectId": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclusterssetmaintenancepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name (project, location, cluster name) of the cluster to set maintenance policy. Specified in the format `projects/*/locations/*/clusters/*`.|
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
|body|body|[SetMaintenancePolicyRequest](#schemasetmaintenancepolicyrequest)|false|none|
|» clusterId|body|string|false|Required. The name of the cluster to update.|
|» maintenancePolicy|body|[MaintenancePolicy](#schemamaintenancepolicy)|false|Required. The maintenance policy to be set for the cluster. An empty field clears the existing maintenance policy.|
|» name|body|string|false|The name (project, location, cluster name) of the cluster to set maintenance policy. Specified in the format `projects/*/locations/*/clusters/*`.|
|» projectId|body|string|false|Required. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects).|
|» zone|body|string|false|Required. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclusterssetmaintenancepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.locations.clusters.nodePools.setManagement

<a id="opIdcontainer.projects.locations.clusters.nodePools.setManagement"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:setManagement \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "management": {
      "autoRepair": true,
      "autoUpgrade": true,
      "upgradeOptions": {
        "autoUpgradeStartTime": "string",
        "description": "string"
      }
    },
    "name": "string",
    "nodePoolId": "string",
    "projectId": "string",
    "zone": "string"
  }'
```

`POST /v1beta1/{name}:setManagement`

Sets the NodeManagement options for a node pool.

> Body parameter

```json
{
  "clusterId": "string",
  "management": {
    "autoRepair": true,
    "autoUpgrade": true,
    "upgradeOptions": {
      "autoUpgradeStartTime": "string",
      "description": "string"
    }
  },
  "name": "string",
  "nodePoolId": "string",
  "projectId": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclustersnodepoolssetmanagement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name (project, location, cluster, node pool id) of the node pool to set management properties. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.|
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
|body|body|[SetNodePoolManagementRequest](#schemasetnodepoolmanagementrequest)|false|none|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.|
|» management|body|[NodeManagement](#schemanodemanagement)|false|Required. NodeManagement configuration for the node pool.|
|» name|body|string|false|The name (project, location, cluster, node pool id) of the node pool to set management properties. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.|
|» nodePoolId|body|string|false|**Deprecated.** Required. Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclustersnodepoolssetmanagement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.locations.clusters.setMasterAuth

<a id="opIdcontainer.projects.locations.clusters.setMasterAuth"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:setMasterAuth \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "action": "UNKNOWN",
    "clusterId": "string",
    "name": "string",
    "projectId": "string",
    "update": {
      "clientCertificate": "string",
      "clientCertificateConfig": {
        "issueClientCertificate": true
      },
      "clientKey": "string",
      "clusterCaCertificate": "string",
      "password": "string",
      "username": "string"
    },
    "zone": "string"
  }'
```

`POST /v1beta1/{name}:setMasterAuth`

Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.

> Body parameter

```json
{
  "action": "UNKNOWN",
  "clusterId": "string",
  "name": "string",
  "projectId": "string",
  "update": {
    "clientCertificate": "string",
    "clientCertificateConfig": {
      "issueClientCertificate": true
    },
    "clientKey": "string",
    "clusterCaCertificate": "string",
    "password": "string",
    "username": "string"
  },
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclusterssetmasterauth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name (project, location, cluster) of the cluster to set auth. Specified in the format `projects/*/locations/*/clusters/*`.|
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
|body|body|[SetMasterAuthRequest](#schemasetmasterauthrequest)|false|none|
|» action|body|string|false|Required. The exact form of action to be taken on the master auth.|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
|» name|body|string|false|The name (project, location, cluster) of the cluster to set auth. Specified in the format `projects/*/locations/*/clusters/*`.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» update|body|[MasterAuth](#schemamasterauth)|false|Required. A description of the update.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» action|UNKNOWN|
|» action|SET_PASSWORD|
|» action|GENERATE_PASSWORD|
|» action|SET_USERNAME|

> Example responses

> 200 Response

```json
{
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclusterssetmasterauth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.locations.clusters.setMonitoring

<a id="opIdcontainer.projects.locations.clusters.setMonitoring"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:setMonitoring \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "monitoringService": "string",
    "name": "string",
    "projectId": "string",
    "zone": "string"
  }'
```

`POST /v1beta1/{name}:setMonitoring`

Sets the monitoring service for a specific cluster.

> Body parameter

```json
{
  "clusterId": "string",
  "monitoringService": "string",
  "name": "string",
  "projectId": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclusterssetmonitoring-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name (project, location, cluster) of the cluster to set monitoring. Specified in the format `projects/*/locations/*/clusters/*`.|
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
|body|body|[SetMonitoringServiceRequest](#schemasetmonitoringservicerequest)|false|none|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
|» monitoringService|body|string|false|Required. The monitoring service the cluster should use to write metrics. Currently available options: * "monitoring.googleapis.com/kubernetes" - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions.|
|» name|body|string|false|The name (project, location, cluster) of the cluster to set monitoring. Specified in the format `projects/*/locations/*/clusters/*`.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclusterssetmonitoring-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.locations.clusters.setNetworkPolicy

<a id="opIdcontainer.projects.locations.clusters.setNetworkPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:setNetworkPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "name": "string",
    "networkPolicy": {
      "enabled": true,
      "provider": "PROVIDER_UNSPECIFIED"
    },
    "projectId": "string",
    "zone": "string"
  }'
```

`POST /v1beta1/{name}:setNetworkPolicy`

Enables or disables Network Policy for a cluster.

> Body parameter

```json
{
  "clusterId": "string",
  "name": "string",
  "networkPolicy": {
    "enabled": true,
    "provider": "PROVIDER_UNSPECIFIED"
  },
  "projectId": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclusterssetnetworkpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name (project, location, cluster name) of the cluster to set networking policy. Specified in the format `projects/*/locations/*/clusters/*`.|
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
|body|body|[SetNetworkPolicyRequest](#schemasetnetworkpolicyrequest)|false|none|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.|
|» name|body|string|false|The name (project, location, cluster name) of the cluster to set networking policy. Specified in the format `projects/*/locations/*/clusters/*`.|
|» networkPolicy|body|[NetworkPolicy](#schemanetworkpolicy)|false|Required. Configuration options for the NetworkPolicy feature.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclusterssetnetworkpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.locations.clusters.setResourceLabels

<a id="opIdcontainer.projects.locations.clusters.setResourceLabels"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:setResourceLabels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "labelFingerprint": "string",
    "name": "string",
    "projectId": "string",
    "resourceLabels": {
      "property1": "string",
      "property2": "string"
    },
    "zone": "string"
  }'
```

`POST /v1beta1/{name}:setResourceLabels`

Sets labels on a cluster.

> Body parameter

```json
{
  "clusterId": "string",
  "labelFingerprint": "string",
  "name": "string",
  "projectId": "string",
  "resourceLabels": {
    "property1": "string",
    "property2": "string"
  },
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclusterssetresourcelabels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name (project, location, cluster name) of the cluster to set labels. Specified in the format `projects/*/locations/*/clusters/*`.|
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
|body|body|[SetLabelsRequest](#schemasetlabelsrequest)|false|none|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.|
|» labelFingerprint|body|string|false|Required. The fingerprint of the previous set of labels for this resource, used to detect conflicts. The fingerprint is initially generated by Kubernetes Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash when updating or changing labels. Make a `get()` request to the resource to get the latest fingerprint.|
|» name|body|string|false|The name (project, location, cluster name) of the cluster to set labels. Specified in the format `projects/*/locations/*/clusters/*`.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» resourceLabels|body|object|false|Required. The labels to set for that cluster.|
|» » **additionalProperties**|body|string|false|none|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclusterssetresourcelabels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.locations.clusters.nodePools.setSize

<a id="opIdcontainer.projects.locations.clusters.nodePools.setSize"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:setSize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "name": "string",
    "nodeCount": 0,
    "nodePoolId": "string",
    "projectId": "string",
    "zone": "string"
  }'
```

`POST /v1beta1/{name}:setSize`

SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.

> Body parameter

```json
{
  "clusterId": "string",
  "name": "string",
  "nodeCount": 0,
  "nodePoolId": "string",
  "projectId": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclustersnodepoolssetsize-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name (project, location, cluster, node pool id) of the node pool to set size. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.|
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
|body|body|[SetNodePoolSizeRequest](#schemasetnodepoolsizerequest)|false|none|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.|
|» name|body|string|false|The name (project, location, cluster, node pool id) of the node pool to set size. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.|
|» nodeCount|body|integer(int32)|false|Required. The desired node count for the pool.|
|» nodePoolId|body|string|false|**Deprecated.** Required. Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclustersnodepoolssetsize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.locations.clusters.startIpRotation

<a id="opIdcontainer.projects.locations.clusters.startIpRotation"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:startIpRotation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "name": "string",
    "projectId": "string",
    "rotateCredentials": true,
    "zone": "string"
  }'
```

`POST /v1beta1/{name}:startIpRotation`

Starts master IP rotation.

> Body parameter

```json
{
  "clusterId": "string",
  "name": "string",
  "projectId": "string",
  "rotateCredentials": true,
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclustersstartiprotation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name (project, location, cluster name) of the cluster to start IP rotation. Specified in the format `projects/*/locations/*/clusters/*`.|
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
|body|body|[StartIPRotationRequest](#schemastartiprotationrequest)|false|none|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.|
|» name|body|string|false|The name (project, location, cluster name) of the cluster to start IP rotation. Specified in the format `projects/*/locations/*/clusters/*`.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» rotateCredentials|body|boolean|false|Whether to rotate credentials during IP rotation.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclustersstartiprotation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.locations.clusters.updateMaster

<a id="opIdcontainer.projects.locations.clusters.updateMaster"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:updateMaster \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "masterVersion": "string",
    "name": "string",
    "projectId": "string",
    "zone": "string"
  }'
```

`POST /v1beta1/{name}:updateMaster`

Updates the master for a specific cluster.

> Body parameter

```json
{
  "clusterId": "string",
  "masterVersion": "string",
  "name": "string",
  "projectId": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclustersupdatemaster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name (project, location, cluster) of the cluster to update. Specified in the format `projects/*/locations/*/clusters/*`.|
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
|body|body|[UpdateMasterRequest](#schemaupdatemasterrequest)|false|none|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
|» masterVersion|body|string|false|Required. The Kubernetes version to change the master to. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the default Kubernetes version|
|» name|body|string|false|The name (project, location, cluster) of the cluster to update. Specified in the format `projects/*/locations/*/clusters/*`.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclustersupdatemaster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.locations.clusters.well-known.getOpenid-configuration

<a id="opIdcontainer.projects.locations.clusters.well-known.getOpenid-configuration"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/.well-known/openid-configuration \
  -H 'Accept: application/json'
```

`GET /v1beta1/{parent}/.well-known/openid-configuration`

Gets the OIDC discovery document for the cluster. See the [OpenID Connect Discovery 1.0 specification](https://openid.net/specs/openid-connect-discovery-1_0.html) for details.

<h3 id="containerprojectslocationsclusterswell-knowngetopenid-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The cluster (project, location, cluster name) to get the discovery document for. Specified in the format `projects/*/locations/*/clusters/*`.|
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
  "cacheHeader": {
    "age": "string",
    "directive": "string",
    "expires": "string"
  },
  "claims_supported": [
    "string"
  ],
  "grant_types": [
    "string"
  ],
  "id_token_signing_alg_values_supported": [
    "string"
  ],
  "issuer": "string",
  "jwks_uri": "string",
  "response_types_supported": [
    "string"
  ],
  "subject_types_supported": [
    "string"
  ]
}
```

<h3 id="containerprojectslocationsclusterswell-knowngetopenid-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GetOpenIDConfigResponse](#schemagetopenidconfigresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## container.projects.aggregated.usableSubnetworks.list

<a id="opIdcontainer.projects.aggregated.usableSubnetworks.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/aggregated/usableSubnetworks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/aggregated/usableSubnetworks`

Lists subnetworks that can be used for creating clusters in a project.

<h3 id="containerprojectsaggregatedusablesubnetworkslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent project where subnetworks are usable. Specified in the format `projects/*`.|
|filter|query|string|false|Filtering currently only supports equality on the networkProjectId and must be in the form: "networkProjectId=[PROJECTID]", where `networkProjectId` is the project which owns the listed subnetworks. This defaults to the parent project ID.|
|pageSize|query|integer|false|The max number of results per page that should be returned. If the number of available results is larger than `page_size`, a `next_page_token` is returned which can be used to get the next page of results in subsequent requests. Acceptable values are 0 to 500, inclusive. (Default: 500)|
|pageToken|query|string|false|Specifies a page token to use. Set this to the nextPageToken returned by previous list requests to get the next page of results.|
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
  "subnetworks": [
    {
      "ipCidrRange": "string",
      "network": "string",
      "secondaryIpRanges": [
        {
          "ipCidrRange": "string",
          "rangeName": "string",
          "status": "UNKNOWN"
        }
      ],
      "statusMessage": "string",
      "subnetwork": "string"
    }
  ]
}
```

<h3 id="containerprojectsaggregatedusablesubnetworkslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListUsableSubnetworksResponse](#schemalistusablesubnetworksresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.locations.clusters.list

<a id="opIdcontainer.projects.locations.clusters.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/clusters \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/clusters`

Lists all clusters owned by a project in either the specified zone or all zones.

<h3 id="containerprojectslocationsclusterslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The parent (project and location) where the clusters will be listed. Specified in the format `projects/*/locations/*`. Location "-" matches all zones and all regions.|
|projectId|query|string|false|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.|
|zone|query|string|false|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides, or "-" for all zones. This field has been deprecated and replaced by the parent field.|
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
      "addonsConfig": {
        "cloudRunConfig": {
          "disabled": true,
          "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED"
        },
        "configConnectorConfig": {
          "enabled": true
        },
        "dnsCacheConfig": {
          "enabled": true
        },
        "gcePersistentDiskCsiDriverConfig": {
          "enabled": true
        },
        "gcpFilestoreCsiDriverConfig": {
          "enabled": true
        },
        "gcsFuseCsiDriverConfig": {
          "enabled": true
        },
        "gkeBackupAgentConfig": {
          "enabled": true
        },
        "horizontalPodAutoscaling": {
          "disabled": true
        },
        "httpLoadBalancing": {
          "disabled": true
        },
        "istioConfig": {
          "auth": "AUTH_NONE",
          "disabled": true
        },
        "kalmConfig": {
          "enabled": true
        },
        "kubernetesDashboard": {
          "disabled": true
        },
        "networkPolicyConfig": {
          "disabled": true
        },
        "statefulHaConfig": {
          "enabled": true
        }
      },
      "authenticatorGroupsConfig": {
        "enabled": true,
        "securityGroup": "string"
      },
      "autopilot": {
        "conversionStatus": {
          "state": "STATE_UNSPECIFIED"
        },
        "enabled": true,
        "workloadPolicyConfig": {
          "allowNetAdmin": true
        }
      },
      "autoscaling": {
        "autoprovisioningLocations": [
          "string"
        ],
        "autoprovisioningNodePoolDefaults": {
          "bootDiskKmsKey": "string",
          "diskSizeGb": 0,
          "diskType": "string",
          "imageType": "string",
          "insecureKubeletReadonlyPortEnabled": true,
          "management": {
            "autoRepair": true,
            "autoUpgrade": true,
            "upgradeOptions": {
              "autoUpgradeStartTime": "string",
              "description": "string"
            }
          },
          "minCpuPlatform": "string",
          "oauthScopes": [
            "string"
          ],
          "serviceAccount": "string",
          "shieldedInstanceConfig": {
            "enableIntegrityMonitoring": true,
            "enableSecureBoot": true
          },
          "upgradeSettings": {
            "blueGreenSettings": {
              "autoscaledRolloutPolicy": {},
              "nodePoolSoakDuration": "string",
              "standardRolloutPolicy": {
                "batchNodeCount": 0,
                "batchPercentage": 0,
                "batchSoakDuration": "string"
              }
            },
            "maxSurge": 0,
            "maxUnavailable": 0,
            "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
          }
        },
        "autoscalingProfile": "PROFILE_UNSPECIFIED",
        "enableNodeAutoprovisioning": true,
        "resourceLimits": [
          {
            "maximum": "string",
            "minimum": "string",
            "resourceType": "string"
          }
        ]
      },
      "binaryAuthorization": {
        "enabled": true,
        "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
        "policyBindings": [
          {
            "name": "string"
          }
        ]
      },
      "clusterIpv4Cidr": "string",
      "clusterTelemetry": {
        "type": "UNSPECIFIED"
      },
      "conditions": [
        {
          "canonicalCode": "OK",
          "code": "UNKNOWN",
          "message": "string"
        }
      ],
      "confidentialNodes": {
        "enabled": true
      },
      "costManagementConfig": {
        "enabled": true
      },
      "createTime": "string",
      "currentMasterVersion": "string",
      "currentNodeCount": 0,
      "currentNodeVersion": "string",
      "databaseEncryption": {
        "keyName": "string",
        "state": "UNKNOWN"
      },
      "defaultMaxPodsConstraint": {
        "maxPodsPerNode": "string"
      },
      "description": "string",
      "enableK8sBetaApis": {
        "enabledApis": [
          "string"
        ]
      },
      "enableKubernetesAlpha": true,
      "enableTpu": true,
      "endpoint": "string",
      "enterpriseConfig": {
        "clusterTier": "CLUSTER_TIER_UNSPECIFIED"
      },
      "etag": "string",
      "expireTime": "string",
      "fleet": {
        "membership": "string",
        "preRegistered": true,
        "project": "string"
      },
      "id": "string",
      "identityServiceConfig": {
        "enabled": true
      },
      "initialClusterVersion": "string",
      "initialNodeCount": 0,
      "instanceGroupUrls": [
        "string"
      ],
      "ipAllocationPolicy": {
        "additionalPodRangesConfig": {
          "podRangeInfo": [
            {
              "rangeName": "string",
              "utilization": 0
            }
          ],
          "podRangeNames": [
            "string"
          ]
        },
        "allowRouteOverlap": true,
        "clusterIpv4Cidr": "string",
        "clusterIpv4CidrBlock": "string",
        "clusterSecondaryRangeName": "string",
        "createSubnetwork": true,
        "defaultPodIpv4RangeUtilization": 0,
        "ipv6AccessType": "IPV6_ACCESS_TYPE_UNSPECIFIED",
        "nodeIpv4Cidr": "string",
        "nodeIpv4CidrBlock": "string",
        "podCidrOverprovisionConfig": {
          "disable": true
        },
        "servicesIpv4Cidr": "string",
        "servicesIpv4CidrBlock": "string",
        "servicesIpv6CidrBlock": "string",
        "servicesSecondaryRangeName": "string",
        "stackType": "STACK_TYPE_UNSPECIFIED",
        "subnetIpv6CidrBlock": "string",
        "subnetworkName": "string",
        "tpuIpv4CidrBlock": "string",
        "useIpAliases": true,
        "useRoutes": true
      },
      "labelFingerprint": "string",
      "legacyAbac": {
        "enabled": true
      },
      "location": "string",
      "locations": [
        "string"
      ],
      "loggingConfig": {
        "componentConfig": {
          "enableComponents": [
            "COMPONENT_UNSPECIFIED"
          ]
        }
      },
      "loggingService": "string",
      "maintenancePolicy": {
        "resourceVersion": "string",
        "window": {
          "dailyMaintenanceWindow": {
            "duration": "string",
            "startTime": "string"
          },
          "maintenanceExclusions": {
            "property1": {
              "endTime": "string",
              "maintenanceExclusionOptions": {
                "scope": "NO_UPGRADES"
              },
              "startTime": "string"
            },
            "property2": {
              "endTime": "string",
              "maintenanceExclusionOptions": {
                "scope": "NO_UPGRADES"
              },
              "startTime": "string"
            }
          },
          "recurringWindow": {
            "recurrence": "string",
            "window": {
              "endTime": "string",
              "maintenanceExclusionOptions": {
                "scope": "NO_UPGRADES"
              },
              "startTime": "string"
            }
          }
        }
      },
      "master": {},
      "masterAuth": {
        "clientCertificate": "string",
        "clientCertificateConfig": {
          "issueClientCertificate": true
        },
        "clientKey": "string",
        "clusterCaCertificate": "string",
        "password": "string",
        "username": "string"
      },
      "masterAuthorizedNetworksConfig": {
        "cidrBlocks": [
          {
            "cidrBlock": "string",
            "displayName": "string"
          }
        ],
        "enabled": true,
        "gcpPublicCidrsAccessEnabled": true
      },
      "masterIpv4CidrBlock": "string",
      "meshCertificates": {
        "enableCertificates": true
      },
      "monitoringConfig": {
        "advancedDatapathObservabilityConfig": {
          "enableMetrics": true,
          "enableRelay": true,
          "relayMode": "RELAY_MODE_UNSPECIFIED"
        },
        "componentConfig": {
          "enableComponents": [
            "COMPONENT_UNSPECIFIED"
          ]
        },
        "managedPrometheusConfig": {
          "enabled": true
        }
      },
      "monitoringService": "string",
      "name": "string",
      "network": "string",
      "networkConfig": {
        "datapathProvider": "DATAPATH_PROVIDER_UNSPECIFIED",
        "defaultSnatStatus": {
          "disabled": true
        },
        "dnsConfig": {
          "clusterDns": "PROVIDER_UNSPECIFIED",
          "clusterDnsDomain": "string",
          "clusterDnsScope": "DNS_SCOPE_UNSPECIFIED"
        },
        "enableFqdnNetworkPolicy": true,
        "enableIntraNodeVisibility": true,
        "enableL4ilbSubsetting": true,
        "enableMultiNetworking": true,
        "gatewayApiConfig": {
          "channel": "CHANNEL_UNSPECIFIED"
        },
        "inTransitEncryptionConfig": "IN_TRANSIT_ENCRYPTION_CONFIG_UNSPECIFIED",
        "network": "string",
        "networkPerformanceConfig": {
          "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
        },
        "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
        "serviceExternalIpsConfig": {
          "enabled": true
        },
        "subnetwork": "string"
      },
      "networkPolicy": {
        "enabled": true,
        "provider": "PROVIDER_UNSPECIFIED"
      },
      "nodeConfig": {
        "accelerators": [
          {
            "acceleratorCount": "string",
            "acceleratorType": "string",
            "gpuDriverInstallationConfig": {
              "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
            },
            "gpuPartitionSize": "string",
            "gpuSharingConfig": {
              "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
              "maxSharedClientsPerGpu": "string"
            },
            "maxTimeSharedClientsPerGpu": "string"
          }
        ],
        "advancedMachineFeatures": {
          "threadsPerCore": "string"
        },
        "bootDiskKmsKey": "string",
        "confidentialNodes": {
          "enabled": true
        },
        "diskSizeGb": 0,
        "diskType": "string",
        "enableConfidentialStorage": true,
        "ephemeralStorageConfig": {
          "localSsdCount": 0
        },
        "ephemeralStorageLocalSsdConfig": {
          "localSsdCount": 0
        },
        "fastSocket": {
          "enabled": true
        },
        "gcfsConfig": {
          "enabled": true
        },
        "gvnic": {
          "enabled": true
        },
        "hostMaintenancePolicy": {
          "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
          "opportunisticMaintenanceStrategy": {
            "maintenanceAvailabilityWindow": "string",
            "minNodesPerPool": "string",
            "nodeIdleTimeWindow": "string"
          }
        },
        "imageType": "string",
        "kubeletConfig": {
          "cpuCfsQuota": true,
          "cpuCfsQuotaPeriod": "string",
          "cpuManagerPolicy": "string",
          "insecureKubeletReadonlyPortEnabled": true,
          "podPidsLimit": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "linuxNodeConfig": {
          "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
          "sysctls": {
            "property1": "string",
            "property2": "string"
          }
        },
        "localNvmeSsdBlockConfig": {
          "localSsdCount": 0
        },
        "localSsdCount": 0,
        "loggingConfig": {
          "variantConfig": {
            "variant": "VARIANT_UNSPECIFIED"
          }
        },
        "machineType": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "minCpuPlatform": "string",
        "nodeGroup": "string",
        "oauthScopes": [
          "string"
        ],
        "preemptible": true,
        "reservationAffinity": {
          "consumeReservationType": "UNSPECIFIED",
          "key": "string",
          "values": [
            "string"
          ]
        },
        "resourceLabels": {
          "property1": "string",
          "property2": "string"
        },
        "resourceManagerTags": {
          "tags": {
            "property1": "string",
            "property2": "string"
          }
        },
        "sandboxConfig": {
          "sandboxType": "string",
          "type": "UNSPECIFIED"
        },
        "secondaryBootDisks": [
          {
            "diskImage": "string",
            "mode": "MODE_UNSPECIFIED"
          }
        ],
        "serviceAccount": "string",
        "shieldedInstanceConfig": {
          "enableIntegrityMonitoring": true,
          "enableSecureBoot": true
        },
        "soleTenantConfig": {
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ]
        },
        "spot": true,
        "tags": [
          "string"
        ],
        "taints": [
          {
            "effect": "EFFECT_UNSPECIFIED",
            "key": "string",
            "value": "string"
          }
        ],
        "windowsNodeConfig": {
          "osVersion": "OS_VERSION_UNSPECIFIED"
        },
        "workloadMetadataConfig": {
          "mode": "MODE_UNSPECIFIED",
          "nodeMetadata": "UNSPECIFIED"
        }
      },
      "nodeIpv4CidrSize": 0,
      "nodePoolAutoConfig": {
        "networkTags": {
          "tags": [
            "string"
          ]
        },
        "resourceManagerTags": {
          "tags": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "nodePoolDefaults": {
        "nodeConfigDefaults": {
          "gcfsConfig": {
            "enabled": true
          },
          "hostMaintenancePolicy": {
            "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
            "opportunisticMaintenanceStrategy": {
              "maintenanceAvailabilityWindow": "string",
              "minNodesPerPool": "string",
              "nodeIdleTimeWindow": "string"
            }
          },
          "loggingConfig": {
            "variantConfig": {
              "variant": "VARIANT_UNSPECIFIED"
            }
          }
        }
      },
      "nodePools": [
        {
          "autoscaling": {
            "autoprovisioned": true,
            "enabled": true,
            "locationPolicy": "LOCATION_POLICY_UNSPECIFIED",
            "maxNodeCount": 0,
            "minNodeCount": 0,
            "totalMaxNodeCount": 0,
            "totalMinNodeCount": 0
          },
          "bestEffortProvisioning": {
            "enabled": true,
            "minProvisionNodes": 0
          },
          "conditions": [
            {
              "canonicalCode": "OK",
              "code": "UNKNOWN",
              "message": "string"
            }
          ],
          "config": {
            "accelerators": [
              {
                "acceleratorCount": "string",
                "acceleratorType": "string",
                "gpuDriverInstallationConfig": {
                  "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
                },
                "gpuPartitionSize": "string",
                "gpuSharingConfig": {
                  "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
                  "maxSharedClientsPerGpu": "string"
                },
                "maxTimeSharedClientsPerGpu": "string"
              }
            ],
            "advancedMachineFeatures": {
              "threadsPerCore": "string"
            },
            "bootDiskKmsKey": "string",
            "confidentialNodes": {
              "enabled": true
            },
            "diskSizeGb": 0,
            "diskType": "string",
            "enableConfidentialStorage": true,
            "ephemeralStorageConfig": {
              "localSsdCount": 0
            },
            "ephemeralStorageLocalSsdConfig": {
              "localSsdCount": 0
            },
            "fastSocket": {
              "enabled": true
            },
            "gcfsConfig": {
              "enabled": true
            },
            "gvnic": {
              "enabled": true
            },
            "hostMaintenancePolicy": {
              "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
              "opportunisticMaintenanceStrategy": {
                "maintenanceAvailabilityWindow": "string",
                "minNodesPerPool": "string",
                "nodeIdleTimeWindow": "string"
              }
            },
            "imageType": "string",
            "kubeletConfig": {
              "cpuCfsQuota": true,
              "cpuCfsQuotaPeriod": "string",
              "cpuManagerPolicy": "string",
              "insecureKubeletReadonlyPortEnabled": true,
              "podPidsLimit": "string"
            },
            "labels": {
              "property1": "string",
              "property2": "string"
            },
            "linuxNodeConfig": {
              "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
              "sysctls": {
                "property1": "string",
                "property2": "string"
              }
            },
            "localNvmeSsdBlockConfig": {
              "localSsdCount": 0
            },
            "localSsdCount": 0,
            "loggingConfig": {
              "variantConfig": {
                "variant": "VARIANT_UNSPECIFIED"
              }
            },
            "machineType": "string",
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "minCpuPlatform": "string",
            "nodeGroup": "string",
            "oauthScopes": [
              "string"
            ],
            "preemptible": true,
            "reservationAffinity": {
              "consumeReservationType": "UNSPECIFIED",
              "key": "string",
              "values": [
                "string"
              ]
            },
            "resourceLabels": {
              "property1": "string",
              "property2": "string"
            },
            "resourceManagerTags": {
              "tags": {
                "property1": "string",
                "property2": "string"
              }
            },
            "sandboxConfig": {
              "sandboxType": "string",
              "type": "UNSPECIFIED"
            },
            "secondaryBootDisks": [
              {
                "diskImage": "string",
                "mode": "MODE_UNSPECIFIED"
              }
            ],
            "serviceAccount": "string",
            "shieldedInstanceConfig": {
              "enableIntegrityMonitoring": true,
              "enableSecureBoot": true
            },
            "soleTenantConfig": {
              "nodeAffinities": [
                {
                  "key": "string",
                  "operator": "OPERATOR_UNSPECIFIED",
                  "values": [
                    "string"
                  ]
                }
              ]
            },
            "spot": true,
            "tags": [
              "string"
            ],
            "taints": [
              {
                "effect": "EFFECT_UNSPECIFIED",
                "key": "string",
                "value": "string"
              }
            ],
            "windowsNodeConfig": {
              "osVersion": "OS_VERSION_UNSPECIFIED"
            },
            "workloadMetadataConfig": {
              "mode": "MODE_UNSPECIFIED",
              "nodeMetadata": "UNSPECIFIED"
            }
          },
          "etag": "string",
          "initialNodeCount": 0,
          "instanceGroupUrls": [
            "string"
          ],
          "locations": [
            "string"
          ],
          "management": {
            "autoRepair": true,
            "autoUpgrade": true,
            "upgradeOptions": {
              "autoUpgradeStartTime": "string",
              "description": "string"
            }
          },
          "maxPodsConstraint": {
            "maxPodsPerNode": "string"
          },
          "name": "string",
          "networkConfig": {
            "additionalNodeNetworkConfigs": [
              {
                "network": "string",
                "subnetwork": "string"
              }
            ],
            "additionalPodNetworkConfigs": [
              {
                "maxPodsPerNode": {
                  "maxPodsPerNode": "string"
                },
                "secondaryPodRange": "string",
                "subnetwork": "string"
              }
            ],
            "createPodRange": true,
            "enablePrivateNodes": true,
            "networkPerformanceConfig": {
              "externalIpEgressBandwidthTier": "TIER_UNSPECIFIED",
              "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
            },
            "podCidrOverprovisionConfig": {
              "disable": true
            },
            "podIpv4CidrBlock": "string",
            "podIpv4RangeUtilization": 0,
            "podRange": "string"
          },
          "placementPolicy": {
            "policyName": "string",
            "tpuTopology": "string",
            "type": "TYPE_UNSPECIFIED"
          },
          "podIpv4CidrSize": 0,
          "queuedProvisioning": {
            "enabled": true
          },
          "selfLink": "string",
          "status": "STATUS_UNSPECIFIED",
          "statusMessage": "string",
          "updateInfo": {
            "blueGreenInfo": {
              "blueInstanceGroupUrls": [
                "string"
              ],
              "bluePoolDeletionStartTime": "string",
              "greenInstanceGroupUrls": [
                "string"
              ],
              "greenPoolVersion": "string",
              "phase": "PHASE_UNSPECIFIED"
            }
          },
          "upgradeSettings": {
            "blueGreenSettings": {
              "autoscaledRolloutPolicy": {},
              "nodePoolSoakDuration": "string",
              "standardRolloutPolicy": {
                "batchNodeCount": 0,
                "batchPercentage": 0,
                "batchSoakDuration": "string"
              }
            },
            "maxSurge": 0,
            "maxUnavailable": 0,
            "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
          },
          "version": "string"
        }
      ],
      "notificationConfig": {
        "pubsub": {
          "enabled": true,
          "filter": {
            "eventType": [
              "EVENT_TYPE_UNSPECIFIED"
            ]
          },
          "topic": "string"
        }
      },
      "parentProductConfig": {
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "productName": "string"
      },
      "podSecurityPolicyConfig": {
        "enabled": true
      },
      "privateCluster": true,
      "privateClusterConfig": {
        "enablePrivateEndpoint": true,
        "enablePrivateNodes": true,
        "masterGlobalAccessConfig": {
          "enabled": true
        },
        "masterIpv4CidrBlock": "string",
        "peeringName": "string",
        "privateEndpoint": "string",
        "privateEndpointSubnetwork": "string",
        "publicEndpoint": "string"
      },
      "protectConfig": {
        "workloadConfig": {
          "auditMode": "MODE_UNSPECIFIED"
        },
        "workloadVulnerabilityMode": "WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED"
      },
      "releaseChannel": {
        "channel": "UNSPECIFIED"
      },
      "resourceLabels": {
        "property1": "string",
        "property2": "string"
      },
      "resourceUsageExportConfig": {
        "bigqueryDestination": {
          "datasetId": "string"
        },
        "consumptionMeteringConfig": {
          "enabled": true
        },
        "enableNetworkEgressMetering": true
      },
      "securityPostureConfig": {
        "mode": "MODE_UNSPECIFIED",
        "vulnerabilityMode": "VULNERABILITY_MODE_UNSPECIFIED"
      },
      "selfLink": "string",
      "servicesIpv4Cidr": "string",
      "shieldedNodes": {
        "enabled": true
      },
      "status": "STATUS_UNSPECIFIED",
      "statusMessage": "string",
      "subnetwork": "string",
      "tpuConfig": {
        "enabled": true,
        "ipv4CidrBlock": "string",
        "useServiceNetworking": true
      },
      "tpuIpv4CidrBlock": "string",
      "verticalPodAutoscaling": {
        "enabled": true
      },
      "workloadAltsConfig": {
        "enableAlts": true
      },
      "workloadCertificates": {
        "enableCertificates": true
      },
      "workloadIdentityConfig": {
        "identityNamespace": "string",
        "identityProvider": "string",
        "workloadPool": "string"
      },
      "zone": "string"
    }
  ],
  "missingZones": [
    "string"
  ]
}
```

<h3 id="containerprojectslocationsclusterslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListClustersResponse](#schemalistclustersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.locations.clusters.create

<a id="opIdcontainer.projects.locations.clusters.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/clusters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cluster": {
      "addonsConfig": {
        "cloudRunConfig": {
          "disabled": true,
          "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED"
        },
        "configConnectorConfig": {
          "enabled": true
        },
        "dnsCacheConfig": {
          "enabled": true
        },
        "gcePersistentDiskCsiDriverConfig": {
          "enabled": true
        },
        "gcpFilestoreCsiDriverConfig": {
          "enabled": true
        },
        "gcsFuseCsiDriverConfig": {
          "enabled": true
        },
        "gkeBackupAgentConfig": {
          "enabled": true
        },
        "horizontalPodAutoscaling": {
          "disabled": true
        },
        "httpLoadBalancing": {
          "disabled": true
        },
        "istioConfig": {
          "auth": "AUTH_NONE",
          "disabled": true
        },
        "kalmConfig": {
          "enabled": true
        },
        "kubernetesDashboard": {
          "disabled": true
        },
        "networkPolicyConfig": {
          "disabled": true
        },
        "statefulHaConfig": {
          "enabled": true
        }
      },
      "authenticatorGroupsConfig": {
        "enabled": true,
        "securityGroup": "string"
      },
      "autopilot": {
        "enabled": true,
        "workloadPolicyConfig": {
          "allowNetAdmin": true
        }
      },
      "autoscaling": {
        "autoprovisioningLocations": [
          "string"
        ],
        "autoprovisioningNodePoolDefaults": {
          "bootDiskKmsKey": "string",
          "diskSizeGb": 0,
          "diskType": "string",
          "imageType": "string",
          "insecureKubeletReadonlyPortEnabled": true,
          "management": {
            "autoRepair": true,
            "autoUpgrade": true,
            "upgradeOptions": {
              "autoUpgradeStartTime": "string",
              "description": "string"
            }
          },
          "minCpuPlatform": "string",
          "oauthScopes": [
            "string"
          ],
          "serviceAccount": "string",
          "shieldedInstanceConfig": {
            "enableIntegrityMonitoring": true,
            "enableSecureBoot": true
          },
          "upgradeSettings": {
            "blueGreenSettings": {
              "autoscaledRolloutPolicy": {},
              "nodePoolSoakDuration": "string",
              "standardRolloutPolicy": {
                "batchNodeCount": 0,
                "batchPercentage": 0,
                "batchSoakDuration": "string"
              }
            },
            "maxSurge": 0,
            "maxUnavailable": 0,
            "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
          }
        },
        "autoscalingProfile": "PROFILE_UNSPECIFIED",
        "enableNodeAutoprovisioning": true,
        "resourceLimits": [
          {
            "maximum": "string",
            "minimum": "string",
            "resourceType": "string"
          }
        ]
      },
      "binaryAuthorization": {
        "enabled": true,
        "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
        "policyBindings": [
          {
            "name": "string"
          }
        ]
      },
      "clusterIpv4Cidr": "string",
      "clusterTelemetry": {
        "type": "UNSPECIFIED"
      },
      "conditions": [
        {
          "canonicalCode": "OK",
          "code": "UNKNOWN",
          "message": "string"
        }
      ],
      "confidentialNodes": {
        "enabled": true
      },
      "costManagementConfig": {
        "enabled": true
      },
      "createTime": "string",
      "currentMasterVersion": "string",
      "currentNodeCount": 0,
      "currentNodeVersion": "string",
      "databaseEncryption": {
        "keyName": "string",
        "state": "UNKNOWN"
      },
      "defaultMaxPodsConstraint": {
        "maxPodsPerNode": "string"
      },
      "description": "string",
      "enableK8sBetaApis": {
        "enabledApis": [
          "string"
        ]
      },
      "enableKubernetesAlpha": true,
      "enableTpu": true,
      "endpoint": "string",
      "enterpriseConfig": {},
      "etag": "string",
      "expireTime": "string",
      "fleet": {
        "membership": "string",
        "preRegistered": true,
        "project": "string"
      },
      "identityServiceConfig": {
        "enabled": true
      },
      "initialClusterVersion": "string",
      "initialNodeCount": 0,
      "instanceGroupUrls": [
        "string"
      ],
      "ipAllocationPolicy": {
        "allowRouteOverlap": true,
        "clusterIpv4Cidr": "string",
        "clusterIpv4CidrBlock": "string",
        "clusterSecondaryRangeName": "string",
        "createSubnetwork": true,
        "ipv6AccessType": "IPV6_ACCESS_TYPE_UNSPECIFIED",
        "nodeIpv4Cidr": "string",
        "nodeIpv4CidrBlock": "string",
        "podCidrOverprovisionConfig": {
          "disable": true
        },
        "servicesIpv4Cidr": "string",
        "servicesIpv4CidrBlock": "string",
        "servicesSecondaryRangeName": "string",
        "stackType": "STACK_TYPE_UNSPECIFIED",
        "subnetworkName": "string",
        "tpuIpv4CidrBlock": "string",
        "useIpAliases": true,
        "useRoutes": true
      },
      "labelFingerprint": "string",
      "legacyAbac": {
        "enabled": true
      },
      "location": "string",
      "locations": [
        "string"
      ],
      "loggingConfig": {
        "componentConfig": {
          "enableComponents": [
            "COMPONENT_UNSPECIFIED"
          ]
        }
      },
      "loggingService": "string",
      "maintenancePolicy": {
        "resourceVersion": "string",
        "window": {
          "dailyMaintenanceWindow": {
            "duration": "string",
            "startTime": "string"
          },
          "maintenanceExclusions": {
            "property1": {
              "endTime": "string",
              "maintenanceExclusionOptions": {
                "scope": "NO_UPGRADES"
              },
              "startTime": "string"
            },
            "property2": {
              "endTime": "string",
              "maintenanceExclusionOptions": {
                "scope": "NO_UPGRADES"
              },
              "startTime": "string"
            }
          },
          "recurringWindow": {
            "recurrence": "string",
            "window": {
              "endTime": "string",
              "maintenanceExclusionOptions": {
                "scope": "NO_UPGRADES"
              },
              "startTime": "string"
            }
          }
        }
      },
      "master": {},
      "masterAuth": {
        "clientCertificate": "string",
        "clientCertificateConfig": {
          "issueClientCertificate": true
        },
        "clientKey": "string",
        "clusterCaCertificate": "string",
        "password": "string",
        "username": "string"
      },
      "masterAuthorizedNetworksConfig": {
        "cidrBlocks": [
          {
            "cidrBlock": "string",
            "displayName": "string"
          }
        ],
        "enabled": true,
        "gcpPublicCidrsAccessEnabled": true
      },
      "masterIpv4CidrBlock": "string",
      "meshCertificates": {
        "enableCertificates": true
      },
      "monitoringConfig": {
        "advancedDatapathObservabilityConfig": {
          "enableMetrics": true,
          "enableRelay": true,
          "relayMode": "RELAY_MODE_UNSPECIFIED"
        },
        "componentConfig": {
          "enableComponents": [
            "COMPONENT_UNSPECIFIED"
          ]
        },
        "managedPrometheusConfig": {
          "enabled": true
        }
      },
      "monitoringService": "string",
      "name": "string",
      "network": "string",
      "networkConfig": {
        "datapathProvider": "DATAPATH_PROVIDER_UNSPECIFIED",
        "defaultSnatStatus": {
          "disabled": true
        },
        "dnsConfig": {
          "clusterDns": "PROVIDER_UNSPECIFIED",
          "clusterDnsDomain": "string",
          "clusterDnsScope": "DNS_SCOPE_UNSPECIFIED"
        },
        "enableFqdnNetworkPolicy": true,
        "enableIntraNodeVisibility": true,
        "enableL4ilbSubsetting": true,
        "enableMultiNetworking": true,
        "gatewayApiConfig": {
          "channel": "CHANNEL_UNSPECIFIED"
        },
        "inTransitEncryptionConfig": "IN_TRANSIT_ENCRYPTION_CONFIG_UNSPECIFIED",
        "network": "string",
        "networkPerformanceConfig": {
          "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
        },
        "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
        "serviceExternalIpsConfig": {
          "enabled": true
        },
        "subnetwork": "string"
      },
      "networkPolicy": {
        "enabled": true,
        "provider": "PROVIDER_UNSPECIFIED"
      },
      "nodeConfig": {
        "accelerators": [
          {
            "acceleratorCount": "string",
            "acceleratorType": "string",
            "gpuDriverInstallationConfig": {
              "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
            },
            "gpuPartitionSize": "string",
            "gpuSharingConfig": {
              "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
              "maxSharedClientsPerGpu": "string"
            },
            "maxTimeSharedClientsPerGpu": "string"
          }
        ],
        "advancedMachineFeatures": {
          "threadsPerCore": "string"
        },
        "bootDiskKmsKey": "string",
        "confidentialNodes": {
          "enabled": true
        },
        "diskSizeGb": 0,
        "diskType": "string",
        "enableConfidentialStorage": true,
        "ephemeralStorageConfig": {
          "localSsdCount": 0
        },
        "ephemeralStorageLocalSsdConfig": {
          "localSsdCount": 0
        },
        "fastSocket": {
          "enabled": true
        },
        "gcfsConfig": {
          "enabled": true
        },
        "gvnic": {
          "enabled": true
        },
        "hostMaintenancePolicy": {
          "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
          "opportunisticMaintenanceStrategy": {
            "maintenanceAvailabilityWindow": "string",
            "minNodesPerPool": "string",
            "nodeIdleTimeWindow": "string"
          }
        },
        "imageType": "string",
        "kubeletConfig": {
          "cpuCfsQuota": true,
          "cpuCfsQuotaPeriod": "string",
          "cpuManagerPolicy": "string",
          "insecureKubeletReadonlyPortEnabled": true,
          "podPidsLimit": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "linuxNodeConfig": {
          "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
          "sysctls": {
            "property1": "string",
            "property2": "string"
          }
        },
        "localNvmeSsdBlockConfig": {
          "localSsdCount": 0
        },
        "localSsdCount": 0,
        "loggingConfig": {
          "variantConfig": {
            "variant": "VARIANT_UNSPECIFIED"
          }
        },
        "machineType": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "minCpuPlatform": "string",
        "nodeGroup": "string",
        "oauthScopes": [
          "string"
        ],
        "preemptible": true,
        "reservationAffinity": {
          "consumeReservationType": "UNSPECIFIED",
          "key": "string",
          "values": [
            "string"
          ]
        },
        "resourceLabels": {
          "property1": "string",
          "property2": "string"
        },
        "resourceManagerTags": {
          "tags": {
            "property1": "string",
            "property2": "string"
          }
        },
        "sandboxConfig": {
          "sandboxType": "string",
          "type": "UNSPECIFIED"
        },
        "secondaryBootDisks": [
          {
            "diskImage": "string",
            "mode": "MODE_UNSPECIFIED"
          }
        ],
        "serviceAccount": "string",
        "shieldedInstanceConfig": {
          "enableIntegrityMonitoring": true,
          "enableSecureBoot": true
        },
        "soleTenantConfig": {
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ]
        },
        "spot": true,
        "tags": [
          "string"
        ],
        "taints": [
          {
            "effect": "EFFECT_UNSPECIFIED",
            "key": "string",
            "value": "string"
          }
        ],
        "windowsNodeConfig": {
          "osVersion": "OS_VERSION_UNSPECIFIED"
        },
        "workloadMetadataConfig": {
          "mode": "MODE_UNSPECIFIED",
          "nodeMetadata": "UNSPECIFIED"
        }
      },
      "nodeIpv4CidrSize": 0,
      "nodePoolAutoConfig": {
        "networkTags": {
          "tags": [
            "string"
          ]
        },
        "resourceManagerTags": {
          "tags": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "nodePoolDefaults": {
        "nodeConfigDefaults": {
          "gcfsConfig": {
            "enabled": true
          },
          "hostMaintenancePolicy": {
            "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
            "opportunisticMaintenanceStrategy": {
              "maintenanceAvailabilityWindow": "string",
              "minNodesPerPool": "string",
              "nodeIdleTimeWindow": "string"
            }
          },
          "loggingConfig": {
            "variantConfig": {
              "variant": "VARIANT_UNSPECIFIED"
            }
          }
        }
      },
      "nodePools": [
        {
          "autoscaling": {
            "autoprovisioned": true,
            "enabled": true,
            "locationPolicy": "LOCATION_POLICY_UNSPECIFIED",
            "maxNodeCount": 0,
            "minNodeCount": 0,
            "totalMaxNodeCount": 0,
            "totalMinNodeCount": 0
          },
          "bestEffortProvisioning": {
            "enabled": true,
            "minProvisionNodes": 0
          },
          "conditions": [
            {
              "canonicalCode": "OK",
              "code": "UNKNOWN",
              "message": "string"
            }
          ],
          "config": {
            "accelerators": [
              {
                "acceleratorCount": "string",
                "acceleratorType": "string",
                "gpuDriverInstallationConfig": {
                  "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
                },
                "gpuPartitionSize": "string",
                "gpuSharingConfig": {
                  "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
                  "maxSharedClientsPerGpu": "string"
                },
                "maxTimeSharedClientsPerGpu": "string"
              }
            ],
            "advancedMachineFeatures": {
              "threadsPerCore": "string"
            },
            "bootDiskKmsKey": "string",
            "confidentialNodes": {
              "enabled": true
            },
            "diskSizeGb": 0,
            "diskType": "string",
            "enableConfidentialStorage": true,
            "ephemeralStorageConfig": {
              "localSsdCount": 0
            },
            "ephemeralStorageLocalSsdConfig": {
              "localSsdCount": 0
            },
            "fastSocket": {
              "enabled": true
            },
            "gcfsConfig": {
              "enabled": true
            },
            "gvnic": {
              "enabled": true
            },
            "hostMaintenancePolicy": {
              "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
              "opportunisticMaintenanceStrategy": {
                "maintenanceAvailabilityWindow": "string",
                "minNodesPerPool": "string",
                "nodeIdleTimeWindow": "string"
              }
            },
            "imageType": "string",
            "kubeletConfig": {
              "cpuCfsQuota": true,
              "cpuCfsQuotaPeriod": "string",
              "cpuManagerPolicy": "string",
              "insecureKubeletReadonlyPortEnabled": true,
              "podPidsLimit": "string"
            },
            "labels": {
              "property1": "string",
              "property2": "string"
            },
            "linuxNodeConfig": {
              "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
              "sysctls": {
                "property1": "string",
                "property2": "string"
              }
            },
            "localNvmeSsdBlockConfig": {
              "localSsdCount": 0
            },
            "localSsdCount": 0,
            "loggingConfig": {
              "variantConfig": {
                "variant": "VARIANT_UNSPECIFIED"
              }
            },
            "machineType": "string",
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "minCpuPlatform": "string",
            "nodeGroup": "string",
            "oauthScopes": [
              "string"
            ],
            "preemptible": true,
            "reservationAffinity": {
              "consumeReservationType": "UNSPECIFIED",
              "key": "string",
              "values": [
                "string"
              ]
            },
            "resourceLabels": {
              "property1": "string",
              "property2": "string"
            },
            "resourceManagerTags": {
              "tags": {
                "property1": "string",
                "property2": "string"
              }
            },
            "sandboxConfig": {
              "sandboxType": "string",
              "type": "UNSPECIFIED"
            },
            "secondaryBootDisks": [
              {
                "diskImage": "string",
                "mode": "MODE_UNSPECIFIED"
              }
            ],
            "serviceAccount": "string",
            "shieldedInstanceConfig": {
              "enableIntegrityMonitoring": true,
              "enableSecureBoot": true
            },
            "soleTenantConfig": {
              "nodeAffinities": [
                {
                  "key": "string",
                  "operator": "OPERATOR_UNSPECIFIED",
                  "values": [
                    "string"
                  ]
                }
              ]
            },
            "spot": true,
            "tags": [
              "string"
            ],
            "taints": [
              {
                "effect": "EFFECT_UNSPECIFIED",
                "key": "string",
                "value": "string"
              }
            ],
            "windowsNodeConfig": {
              "osVersion": "OS_VERSION_UNSPECIFIED"
            },
            "workloadMetadataConfig": {
              "mode": "MODE_UNSPECIFIED",
              "nodeMetadata": "UNSPECIFIED"
            }
          },
          "etag": "string",
          "initialNodeCount": 0,
          "instanceGroupUrls": [
            "string"
          ],
          "locations": [
            "string"
          ],
          "management": {
            "autoRepair": true,
            "autoUpgrade": true,
            "upgradeOptions": {
              "autoUpgradeStartTime": "string",
              "description": "string"
            }
          },
          "maxPodsConstraint": {
            "maxPodsPerNode": "string"
          },
          "name": "string",
          "networkConfig": {
            "additionalNodeNetworkConfigs": [
              {
                "network": "string",
                "subnetwork": "string"
              }
            ],
            "additionalPodNetworkConfigs": [
              {
                "maxPodsPerNode": {
                  "maxPodsPerNode": "string"
                },
                "secondaryPodRange": "string",
                "subnetwork": "string"
              }
            ],
            "createPodRange": true,
            "enablePrivateNodes": true,
            "networkPerformanceConfig": {
              "externalIpEgressBandwidthTier": "TIER_UNSPECIFIED",
              "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
            },
            "podCidrOverprovisionConfig": {
              "disable": true
            },
            "podIpv4CidrBlock": "string",
            "podRange": "string"
          },
          "placementPolicy": {
            "policyName": "string",
            "tpuTopology": "string",
            "type": "TYPE_UNSPECIFIED"
          },
          "podIpv4CidrSize": 0,
          "queuedProvisioning": {
            "enabled": true
          },
          "selfLink": "string",
          "status": "STATUS_UNSPECIFIED",
          "statusMessage": "string",
          "upgradeSettings": {
            "blueGreenSettings": {
              "autoscaledRolloutPolicy": {},
              "nodePoolSoakDuration": "string",
              "standardRolloutPolicy": {
                "batchNodeCount": 0,
                "batchPercentage": 0,
                "batchSoakDuration": "string"
              }
            },
            "maxSurge": 0,
            "maxUnavailable": 0,
            "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
          },
          "version": "string"
        }
      ],
      "notificationConfig": {
        "pubsub": {
          "enabled": true,
          "filter": {
            "eventType": [
              "EVENT_TYPE_UNSPECIFIED"
            ]
          },
          "topic": "string"
        }
      },
      "parentProductConfig": {
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "productName": "string"
      },
      "podSecurityPolicyConfig": {
        "enabled": true
      },
      "privateCluster": true,
      "privateClusterConfig": {
        "enablePrivateEndpoint": true,
        "enablePrivateNodes": true,
        "masterGlobalAccessConfig": {
          "enabled": true
        },
        "masterIpv4CidrBlock": "string",
        "peeringName": "string",
        "privateEndpoint": "string",
        "privateEndpointSubnetwork": "string",
        "publicEndpoint": "string"
      },
      "protectConfig": {
        "workloadConfig": {
          "auditMode": "MODE_UNSPECIFIED"
        },
        "workloadVulnerabilityMode": "WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED"
      },
      "releaseChannel": {
        "channel": "UNSPECIFIED"
      },
      "resourceLabels": {
        "property1": "string",
        "property2": "string"
      },
      "resourceUsageExportConfig": {
        "bigqueryDestination": {
          "datasetId": "string"
        },
        "consumptionMeteringConfig": {
          "enabled": true
        },
        "enableNetworkEgressMetering": true
      },
      "securityPostureConfig": {
        "mode": "MODE_UNSPECIFIED",
        "vulnerabilityMode": "VULNERABILITY_MODE_UNSPECIFIED"
      },
      "selfLink": "string",
      "servicesIpv4Cidr": "string",
      "shieldedNodes": {
        "enabled": true
      },
      "status": "STATUS_UNSPECIFIED",
      "statusMessage": "string",
      "subnetwork": "string",
      "tpuConfig": {
        "enabled": true,
        "ipv4CidrBlock": "string",
        "useServiceNetworking": true
      },
      "tpuIpv4CidrBlock": "string",
      "verticalPodAutoscaling": {
        "enabled": true
      },
      "workloadAltsConfig": {
        "enableAlts": true
      },
      "workloadCertificates": {
        "enableCertificates": true
      },
      "workloadIdentityConfig": {
        "identityNamespace": "string",
        "identityProvider": "string",
        "workloadPool": "string"
      },
      "zone": "string"
    },
    "parent": "string",
    "projectId": "string",
    "zone": "string"
  }'
```

`POST /v1beta1/{parent}/clusters`

Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.

> Body parameter

```json
{
  "cluster": {
    "addonsConfig": {
      "cloudRunConfig": {
        "disabled": true,
        "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED"
      },
      "configConnectorConfig": {
        "enabled": true
      },
      "dnsCacheConfig": {
        "enabled": true
      },
      "gcePersistentDiskCsiDriverConfig": {
        "enabled": true
      },
      "gcpFilestoreCsiDriverConfig": {
        "enabled": true
      },
      "gcsFuseCsiDriverConfig": {
        "enabled": true
      },
      "gkeBackupAgentConfig": {
        "enabled": true
      },
      "horizontalPodAutoscaling": {
        "disabled": true
      },
      "httpLoadBalancing": {
        "disabled": true
      },
      "istioConfig": {
        "auth": "AUTH_NONE",
        "disabled": true
      },
      "kalmConfig": {
        "enabled": true
      },
      "kubernetesDashboard": {
        "disabled": true
      },
      "networkPolicyConfig": {
        "disabled": true
      },
      "statefulHaConfig": {
        "enabled": true
      }
    },
    "authenticatorGroupsConfig": {
      "enabled": true,
      "securityGroup": "string"
    },
    "autopilot": {
      "enabled": true,
      "workloadPolicyConfig": {
        "allowNetAdmin": true
      }
    },
    "autoscaling": {
      "autoprovisioningLocations": [
        "string"
      ],
      "autoprovisioningNodePoolDefaults": {
        "bootDiskKmsKey": "string",
        "diskSizeGb": 0,
        "diskType": "string",
        "imageType": "string",
        "insecureKubeletReadonlyPortEnabled": true,
        "management": {
          "autoRepair": true,
          "autoUpgrade": true,
          "upgradeOptions": {
            "autoUpgradeStartTime": "string",
            "description": "string"
          }
        },
        "minCpuPlatform": "string",
        "oauthScopes": [
          "string"
        ],
        "serviceAccount": "string",
        "shieldedInstanceConfig": {
          "enableIntegrityMonitoring": true,
          "enableSecureBoot": true
        },
        "upgradeSettings": {
          "blueGreenSettings": {
            "autoscaledRolloutPolicy": {},
            "nodePoolSoakDuration": "string",
            "standardRolloutPolicy": {
              "batchNodeCount": 0,
              "batchPercentage": 0,
              "batchSoakDuration": "string"
            }
          },
          "maxSurge": 0,
          "maxUnavailable": 0,
          "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
        }
      },
      "autoscalingProfile": "PROFILE_UNSPECIFIED",
      "enableNodeAutoprovisioning": true,
      "resourceLimits": [
        {
          "maximum": "string",
          "minimum": "string",
          "resourceType": "string"
        }
      ]
    },
    "binaryAuthorization": {
      "enabled": true,
      "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
      "policyBindings": [
        {
          "name": "string"
        }
      ]
    },
    "clusterIpv4Cidr": "string",
    "clusterTelemetry": {
      "type": "UNSPECIFIED"
    },
    "conditions": [
      {
        "canonicalCode": "OK",
        "code": "UNKNOWN",
        "message": "string"
      }
    ],
    "confidentialNodes": {
      "enabled": true
    },
    "costManagementConfig": {
      "enabled": true
    },
    "createTime": "string",
    "currentMasterVersion": "string",
    "currentNodeCount": 0,
    "currentNodeVersion": "string",
    "databaseEncryption": {
      "keyName": "string",
      "state": "UNKNOWN"
    },
    "defaultMaxPodsConstraint": {
      "maxPodsPerNode": "string"
    },
    "description": "string",
    "enableK8sBetaApis": {
      "enabledApis": [
        "string"
      ]
    },
    "enableKubernetesAlpha": true,
    "enableTpu": true,
    "endpoint": "string",
    "enterpriseConfig": {},
    "etag": "string",
    "expireTime": "string",
    "fleet": {
      "membership": "string",
      "preRegistered": true,
      "project": "string"
    },
    "identityServiceConfig": {
      "enabled": true
    },
    "initialClusterVersion": "string",
    "initialNodeCount": 0,
    "instanceGroupUrls": [
      "string"
    ],
    "ipAllocationPolicy": {
      "allowRouteOverlap": true,
      "clusterIpv4Cidr": "string",
      "clusterIpv4CidrBlock": "string",
      "clusterSecondaryRangeName": "string",
      "createSubnetwork": true,
      "ipv6AccessType": "IPV6_ACCESS_TYPE_UNSPECIFIED",
      "nodeIpv4Cidr": "string",
      "nodeIpv4CidrBlock": "string",
      "podCidrOverprovisionConfig": {
        "disable": true
      },
      "servicesIpv4Cidr": "string",
      "servicesIpv4CidrBlock": "string",
      "servicesSecondaryRangeName": "string",
      "stackType": "STACK_TYPE_UNSPECIFIED",
      "subnetworkName": "string",
      "tpuIpv4CidrBlock": "string",
      "useIpAliases": true,
      "useRoutes": true
    },
    "labelFingerprint": "string",
    "legacyAbac": {
      "enabled": true
    },
    "location": "string",
    "locations": [
      "string"
    ],
    "loggingConfig": {
      "componentConfig": {
        "enableComponents": [
          "COMPONENT_UNSPECIFIED"
        ]
      }
    },
    "loggingService": "string",
    "maintenancePolicy": {
      "resourceVersion": "string",
      "window": {
        "dailyMaintenanceWindow": {
          "duration": "string",
          "startTime": "string"
        },
        "maintenanceExclusions": {
          "property1": {
            "endTime": "string",
            "maintenanceExclusionOptions": {
              "scope": "NO_UPGRADES"
            },
            "startTime": "string"
          },
          "property2": {
            "endTime": "string",
            "maintenanceExclusionOptions": {
              "scope": "NO_UPGRADES"
            },
            "startTime": "string"
          }
        },
        "recurringWindow": {
          "recurrence": "string",
          "window": {
            "endTime": "string",
            "maintenanceExclusionOptions": {
              "scope": "NO_UPGRADES"
            },
            "startTime": "string"
          }
        }
      }
    },
    "master": {},
    "masterAuth": {
      "clientCertificate": "string",
      "clientCertificateConfig": {
        "issueClientCertificate": true
      },
      "clientKey": "string",
      "clusterCaCertificate": "string",
      "password": "string",
      "username": "string"
    },
    "masterAuthorizedNetworksConfig": {
      "cidrBlocks": [
        {
          "cidrBlock": "string",
          "displayName": "string"
        }
      ],
      "enabled": true,
      "gcpPublicCidrsAccessEnabled": true
    },
    "masterIpv4CidrBlock": "string",
    "meshCertificates": {
      "enableCertificates": true
    },
    "monitoringConfig": {
      "advancedDatapathObservabilityConfig": {
        "enableMetrics": true,
        "enableRelay": true,
        "relayMode": "RELAY_MODE_UNSPECIFIED"
      },
      "componentConfig": {
        "enableComponents": [
          "COMPONENT_UNSPECIFIED"
        ]
      },
      "managedPrometheusConfig": {
        "enabled": true
      }
    },
    "monitoringService": "string",
    "name": "string",
    "network": "string",
    "networkConfig": {
      "datapathProvider": "DATAPATH_PROVIDER_UNSPECIFIED",
      "defaultSnatStatus": {
        "disabled": true
      },
      "dnsConfig": {
        "clusterDns": "PROVIDER_UNSPECIFIED",
        "clusterDnsDomain": "string",
        "clusterDnsScope": "DNS_SCOPE_UNSPECIFIED"
      },
      "enableFqdnNetworkPolicy": true,
      "enableIntraNodeVisibility": true,
      "enableL4ilbSubsetting": true,
      "enableMultiNetworking": true,
      "gatewayApiConfig": {
        "channel": "CHANNEL_UNSPECIFIED"
      },
      "inTransitEncryptionConfig": "IN_TRANSIT_ENCRYPTION_CONFIG_UNSPECIFIED",
      "network": "string",
      "networkPerformanceConfig": {
        "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
      },
      "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
      "serviceExternalIpsConfig": {
        "enabled": true
      },
      "subnetwork": "string"
    },
    "networkPolicy": {
      "enabled": true,
      "provider": "PROVIDER_UNSPECIFIED"
    },
    "nodeConfig": {
      "accelerators": [
        {
          "acceleratorCount": "string",
          "acceleratorType": "string",
          "gpuDriverInstallationConfig": {
            "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
          },
          "gpuPartitionSize": "string",
          "gpuSharingConfig": {
            "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
            "maxSharedClientsPerGpu": "string"
          },
          "maxTimeSharedClientsPerGpu": "string"
        }
      ],
      "advancedMachineFeatures": {
        "threadsPerCore": "string"
      },
      "bootDiskKmsKey": "string",
      "confidentialNodes": {
        "enabled": true
      },
      "diskSizeGb": 0,
      "diskType": "string",
      "enableConfidentialStorage": true,
      "ephemeralStorageConfig": {
        "localSsdCount": 0
      },
      "ephemeralStorageLocalSsdConfig": {
        "localSsdCount": 0
      },
      "fastSocket": {
        "enabled": true
      },
      "gcfsConfig": {
        "enabled": true
      },
      "gvnic": {
        "enabled": true
      },
      "hostMaintenancePolicy": {
        "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
        "opportunisticMaintenanceStrategy": {
          "maintenanceAvailabilityWindow": "string",
          "minNodesPerPool": "string",
          "nodeIdleTimeWindow": "string"
        }
      },
      "imageType": "string",
      "kubeletConfig": {
        "cpuCfsQuota": true,
        "cpuCfsQuotaPeriod": "string",
        "cpuManagerPolicy": "string",
        "insecureKubeletReadonlyPortEnabled": true,
        "podPidsLimit": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "linuxNodeConfig": {
        "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
        "sysctls": {
          "property1": "string",
          "property2": "string"
        }
      },
      "localNvmeSsdBlockConfig": {
        "localSsdCount": 0
      },
      "localSsdCount": 0,
      "loggingConfig": {
        "variantConfig": {
          "variant": "VARIANT_UNSPECIFIED"
        }
      },
      "machineType": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "minCpuPlatform": "string",
      "nodeGroup": "string",
      "oauthScopes": [
        "string"
      ],
      "preemptible": true,
      "reservationAffinity": {
        "consumeReservationType": "UNSPECIFIED",
        "key": "string",
        "values": [
          "string"
        ]
      },
      "resourceLabels": {
        "property1": "string",
        "property2": "string"
      },
      "resourceManagerTags": {
        "tags": {
          "property1": "string",
          "property2": "string"
        }
      },
      "sandboxConfig": {
        "sandboxType": "string",
        "type": "UNSPECIFIED"
      },
      "secondaryBootDisks": [
        {
          "diskImage": "string",
          "mode": "MODE_UNSPECIFIED"
        }
      ],
      "serviceAccount": "string",
      "shieldedInstanceConfig": {
        "enableIntegrityMonitoring": true,
        "enableSecureBoot": true
      },
      "soleTenantConfig": {
        "nodeAffinities": [
          {
            "key": "string",
            "operator": "OPERATOR_UNSPECIFIED",
            "values": [
              "string"
            ]
          }
        ]
      },
      "spot": true,
      "tags": [
        "string"
      ],
      "taints": [
        {
          "effect": "EFFECT_UNSPECIFIED",
          "key": "string",
          "value": "string"
        }
      ],
      "windowsNodeConfig": {
        "osVersion": "OS_VERSION_UNSPECIFIED"
      },
      "workloadMetadataConfig": {
        "mode": "MODE_UNSPECIFIED",
        "nodeMetadata": "UNSPECIFIED"
      }
    },
    "nodeIpv4CidrSize": 0,
    "nodePoolAutoConfig": {
      "networkTags": {
        "tags": [
          "string"
        ]
      },
      "resourceManagerTags": {
        "tags": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "nodePoolDefaults": {
      "nodeConfigDefaults": {
        "gcfsConfig": {
          "enabled": true
        },
        "hostMaintenancePolicy": {
          "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
          "opportunisticMaintenanceStrategy": {
            "maintenanceAvailabilityWindow": "string",
            "minNodesPerPool": "string",
            "nodeIdleTimeWindow": "string"
          }
        },
        "loggingConfig": {
          "variantConfig": {
            "variant": "VARIANT_UNSPECIFIED"
          }
        }
      }
    },
    "nodePools": [
      {
        "autoscaling": {
          "autoprovisioned": true,
          "enabled": true,
          "locationPolicy": "LOCATION_POLICY_UNSPECIFIED",
          "maxNodeCount": 0,
          "minNodeCount": 0,
          "totalMaxNodeCount": 0,
          "totalMinNodeCount": 0
        },
        "bestEffortProvisioning": {
          "enabled": true,
          "minProvisionNodes": 0
        },
        "conditions": [
          {
            "canonicalCode": "OK",
            "code": "UNKNOWN",
            "message": "string"
          }
        ],
        "config": {
          "accelerators": [
            {
              "acceleratorCount": "string",
              "acceleratorType": "string",
              "gpuDriverInstallationConfig": {
                "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
              },
              "gpuPartitionSize": "string",
              "gpuSharingConfig": {
                "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
                "maxSharedClientsPerGpu": "string"
              },
              "maxTimeSharedClientsPerGpu": "string"
            }
          ],
          "advancedMachineFeatures": {
            "threadsPerCore": "string"
          },
          "bootDiskKmsKey": "string",
          "confidentialNodes": {
            "enabled": true
          },
          "diskSizeGb": 0,
          "diskType": "string",
          "enableConfidentialStorage": true,
          "ephemeralStorageConfig": {
            "localSsdCount": 0
          },
          "ephemeralStorageLocalSsdConfig": {
            "localSsdCount": 0
          },
          "fastSocket": {
            "enabled": true
          },
          "gcfsConfig": {
            "enabled": true
          },
          "gvnic": {
            "enabled": true
          },
          "hostMaintenancePolicy": {
            "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
            "opportunisticMaintenanceStrategy": {
              "maintenanceAvailabilityWindow": "string",
              "minNodesPerPool": "string",
              "nodeIdleTimeWindow": "string"
            }
          },
          "imageType": "string",
          "kubeletConfig": {
            "cpuCfsQuota": true,
            "cpuCfsQuotaPeriod": "string",
            "cpuManagerPolicy": "string",
            "insecureKubeletReadonlyPortEnabled": true,
            "podPidsLimit": "string"
          },
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "linuxNodeConfig": {
            "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
            "sysctls": {
              "property1": "string",
              "property2": "string"
            }
          },
          "localNvmeSsdBlockConfig": {
            "localSsdCount": 0
          },
          "localSsdCount": 0,
          "loggingConfig": {
            "variantConfig": {
              "variant": "VARIANT_UNSPECIFIED"
            }
          },
          "machineType": "string",
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "minCpuPlatform": "string",
          "nodeGroup": "string",
          "oauthScopes": [
            "string"
          ],
          "preemptible": true,
          "reservationAffinity": {
            "consumeReservationType": "UNSPECIFIED",
            "key": "string",
            "values": [
              "string"
            ]
          },
          "resourceLabels": {
            "property1": "string",
            "property2": "string"
          },
          "resourceManagerTags": {
            "tags": {
              "property1": "string",
              "property2": "string"
            }
          },
          "sandboxConfig": {
            "sandboxType": "string",
            "type": "UNSPECIFIED"
          },
          "secondaryBootDisks": [
            {
              "diskImage": "string",
              "mode": "MODE_UNSPECIFIED"
            }
          ],
          "serviceAccount": "string",
          "shieldedInstanceConfig": {
            "enableIntegrityMonitoring": true,
            "enableSecureBoot": true
          },
          "soleTenantConfig": {
            "nodeAffinities": [
              {
                "key": "string",
                "operator": "OPERATOR_UNSPECIFIED",
                "values": [
                  "string"
                ]
              }
            ]
          },
          "spot": true,
          "tags": [
            "string"
          ],
          "taints": [
            {
              "effect": "EFFECT_UNSPECIFIED",
              "key": "string",
              "value": "string"
            }
          ],
          "windowsNodeConfig": {
            "osVersion": "OS_VERSION_UNSPECIFIED"
          },
          "workloadMetadataConfig": {
            "mode": "MODE_UNSPECIFIED",
            "nodeMetadata": "UNSPECIFIED"
          }
        },
        "etag": "string",
        "initialNodeCount": 0,
        "instanceGroupUrls": [
          "string"
        ],
        "locations": [
          "string"
        ],
        "management": {
          "autoRepair": true,
          "autoUpgrade": true,
          "upgradeOptions": {
            "autoUpgradeStartTime": "string",
            "description": "string"
          }
        },
        "maxPodsConstraint": {
          "maxPodsPerNode": "string"
        },
        "name": "string",
        "networkConfig": {
          "additionalNodeNetworkConfigs": [
            {
              "network": "string",
              "subnetwork": "string"
            }
          ],
          "additionalPodNetworkConfigs": [
            {
              "maxPodsPerNode": {
                "maxPodsPerNode": "string"
              },
              "secondaryPodRange": "string",
              "subnetwork": "string"
            }
          ],
          "createPodRange": true,
          "enablePrivateNodes": true,
          "networkPerformanceConfig": {
            "externalIpEgressBandwidthTier": "TIER_UNSPECIFIED",
            "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
          },
          "podCidrOverprovisionConfig": {
            "disable": true
          },
          "podIpv4CidrBlock": "string",
          "podRange": "string"
        },
        "placementPolicy": {
          "policyName": "string",
          "tpuTopology": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "podIpv4CidrSize": 0,
        "queuedProvisioning": {
          "enabled": true
        },
        "selfLink": "string",
        "status": "STATUS_UNSPECIFIED",
        "statusMessage": "string",
        "upgradeSettings": {
          "blueGreenSettings": {
            "autoscaledRolloutPolicy": {},
            "nodePoolSoakDuration": "string",
            "standardRolloutPolicy": {
              "batchNodeCount": 0,
              "batchPercentage": 0,
              "batchSoakDuration": "string"
            }
          },
          "maxSurge": 0,
          "maxUnavailable": 0,
          "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
        },
        "version": "string"
      }
    ],
    "notificationConfig": {
      "pubsub": {
        "enabled": true,
        "filter": {
          "eventType": [
            "EVENT_TYPE_UNSPECIFIED"
          ]
        },
        "topic": "string"
      }
    },
    "parentProductConfig": {
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "productName": "string"
    },
    "podSecurityPolicyConfig": {
      "enabled": true
    },
    "privateCluster": true,
    "privateClusterConfig": {
      "enablePrivateEndpoint": true,
      "enablePrivateNodes": true,
      "masterGlobalAccessConfig": {
        "enabled": true
      },
      "masterIpv4CidrBlock": "string",
      "peeringName": "string",
      "privateEndpoint": "string",
      "privateEndpointSubnetwork": "string",
      "publicEndpoint": "string"
    },
    "protectConfig": {
      "workloadConfig": {
        "auditMode": "MODE_UNSPECIFIED"
      },
      "workloadVulnerabilityMode": "WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED"
    },
    "releaseChannel": {
      "channel": "UNSPECIFIED"
    },
    "resourceLabels": {
      "property1": "string",
      "property2": "string"
    },
    "resourceUsageExportConfig": {
      "bigqueryDestination": {
        "datasetId": "string"
      },
      "consumptionMeteringConfig": {
        "enabled": true
      },
      "enableNetworkEgressMetering": true
    },
    "securityPostureConfig": {
      "mode": "MODE_UNSPECIFIED",
      "vulnerabilityMode": "VULNERABILITY_MODE_UNSPECIFIED"
    },
    "selfLink": "string",
    "servicesIpv4Cidr": "string",
    "shieldedNodes": {
      "enabled": true
    },
    "status": "STATUS_UNSPECIFIED",
    "statusMessage": "string",
    "subnetwork": "string",
    "tpuConfig": {
      "enabled": true,
      "ipv4CidrBlock": "string",
      "useServiceNetworking": true
    },
    "tpuIpv4CidrBlock": "string",
    "verticalPodAutoscaling": {
      "enabled": true
    },
    "workloadAltsConfig": {
      "enableAlts": true
    },
    "workloadCertificates": {
      "enableCertificates": true
    },
    "workloadIdentityConfig": {
      "identityNamespace": "string",
      "identityProvider": "string",
      "workloadPool": "string"
    },
    "zone": "string"
  },
  "parent": "string",
  "projectId": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclusterscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The parent (project and location) where the cluster will be created. Specified in the format `projects/*/locations/*`.|
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
|body|body|[CreateClusterRequest](#schemacreateclusterrequest)|false|none|
|» cluster|body|[Cluster](#schemacluster)|false|Required. A [cluster resource](https://cloud.google.com/container-engine/reference/rest/v1beta1/projects.locations.clusters)|
|» parent|body|string|false|The parent (project and location) where the cluster will be created. Specified in the format `projects/*/locations/*`.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclusterscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.locations.clusters.getJwks

<a id="opIdcontainer.projects.locations.clusters.getJwks"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/jwks \
  -H 'Accept: application/json'
```

`GET /v1beta1/{parent}/jwks`

Gets the public component of the cluster signing keys in JSON Web Key format.

<h3 id="containerprojectslocationsclustersgetjwks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The cluster (project, location, cluster name) to get keys for. Specified in the format `projects/*/locations/*/clusters/*`.|
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
  "cacheHeader": {
    "age": "string",
    "directive": "string",
    "expires": "string"
  },
  "keys": [
    {
      "alg": "string",
      "crv": "string",
      "e": "string",
      "kid": "string",
      "kty": "string",
      "n": "string",
      "use": "string",
      "x": "string",
      "y": "string"
    }
  ]
}
```

<h3 id="containerprojectslocationsclustersgetjwks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GetJSONWebKeysResponse](#schemagetjsonwebkeysresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## container.projects.locations.list

<a id="opIdcontainer.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/locations`

Fetches locations that offer Google Kubernetes Engine.

<h3 id="containerprojectslocationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Contains the name of the resource requested. Specified in the format `projects/*`.|
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
      "name": "string",
      "recommended": true,
      "type": "LOCATION_TYPE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="containerprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.locations.clusters.nodePools.list

<a id="opIdcontainer.projects.locations.clusters.nodePools.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/nodePools \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/nodePools`

Lists the node pools for a cluster.

<h3 id="containerprojectslocationsclustersnodepoolslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The parent (project, location, cluster name) where the node pools will be listed. Specified in the format `projects/*/locations/*/clusters/*`.|
|clusterId|query|string|false|Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.|
|projectId|query|string|false|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.|
|zone|query|string|false|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.|
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
  "nodePools": [
    {
      "autoscaling": {
        "autoprovisioned": true,
        "enabled": true,
        "locationPolicy": "LOCATION_POLICY_UNSPECIFIED",
        "maxNodeCount": 0,
        "minNodeCount": 0,
        "totalMaxNodeCount": 0,
        "totalMinNodeCount": 0
      },
      "bestEffortProvisioning": {
        "enabled": true,
        "minProvisionNodes": 0
      },
      "conditions": [
        {
          "canonicalCode": "OK",
          "code": "UNKNOWN",
          "message": "string"
        }
      ],
      "config": {
        "accelerators": [
          {
            "acceleratorCount": "string",
            "acceleratorType": "string",
            "gpuDriverInstallationConfig": {
              "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
            },
            "gpuPartitionSize": "string",
            "gpuSharingConfig": {
              "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
              "maxSharedClientsPerGpu": "string"
            },
            "maxTimeSharedClientsPerGpu": "string"
          }
        ],
        "advancedMachineFeatures": {
          "threadsPerCore": "string"
        },
        "bootDiskKmsKey": "string",
        "confidentialNodes": {
          "enabled": true
        },
        "diskSizeGb": 0,
        "diskType": "string",
        "enableConfidentialStorage": true,
        "ephemeralStorageConfig": {
          "localSsdCount": 0
        },
        "ephemeralStorageLocalSsdConfig": {
          "localSsdCount": 0
        },
        "fastSocket": {
          "enabled": true
        },
        "gcfsConfig": {
          "enabled": true
        },
        "gvnic": {
          "enabled": true
        },
        "hostMaintenancePolicy": {
          "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
          "opportunisticMaintenanceStrategy": {
            "maintenanceAvailabilityWindow": "string",
            "minNodesPerPool": "string",
            "nodeIdleTimeWindow": "string"
          }
        },
        "imageType": "string",
        "kubeletConfig": {
          "cpuCfsQuota": true,
          "cpuCfsQuotaPeriod": "string",
          "cpuManagerPolicy": "string",
          "insecureKubeletReadonlyPortEnabled": true,
          "podPidsLimit": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "linuxNodeConfig": {
          "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
          "sysctls": {
            "property1": "string",
            "property2": "string"
          }
        },
        "localNvmeSsdBlockConfig": {
          "localSsdCount": 0
        },
        "localSsdCount": 0,
        "loggingConfig": {
          "variantConfig": {
            "variant": "VARIANT_UNSPECIFIED"
          }
        },
        "machineType": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "minCpuPlatform": "string",
        "nodeGroup": "string",
        "oauthScopes": [
          "string"
        ],
        "preemptible": true,
        "reservationAffinity": {
          "consumeReservationType": "UNSPECIFIED",
          "key": "string",
          "values": [
            "string"
          ]
        },
        "resourceLabels": {
          "property1": "string",
          "property2": "string"
        },
        "resourceManagerTags": {
          "tags": {
            "property1": "string",
            "property2": "string"
          }
        },
        "sandboxConfig": {
          "sandboxType": "string",
          "type": "UNSPECIFIED"
        },
        "secondaryBootDisks": [
          {
            "diskImage": "string",
            "mode": "MODE_UNSPECIFIED"
          }
        ],
        "serviceAccount": "string",
        "shieldedInstanceConfig": {
          "enableIntegrityMonitoring": true,
          "enableSecureBoot": true
        },
        "soleTenantConfig": {
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ]
        },
        "spot": true,
        "tags": [
          "string"
        ],
        "taints": [
          {
            "effect": "EFFECT_UNSPECIFIED",
            "key": "string",
            "value": "string"
          }
        ],
        "windowsNodeConfig": {
          "osVersion": "OS_VERSION_UNSPECIFIED"
        },
        "workloadMetadataConfig": {
          "mode": "MODE_UNSPECIFIED",
          "nodeMetadata": "UNSPECIFIED"
        }
      },
      "etag": "string",
      "initialNodeCount": 0,
      "instanceGroupUrls": [
        "string"
      ],
      "locations": [
        "string"
      ],
      "management": {
        "autoRepair": true,
        "autoUpgrade": true,
        "upgradeOptions": {
          "autoUpgradeStartTime": "string",
          "description": "string"
        }
      },
      "maxPodsConstraint": {
        "maxPodsPerNode": "string"
      },
      "name": "string",
      "networkConfig": {
        "additionalNodeNetworkConfigs": [
          {
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "additionalPodNetworkConfigs": [
          {
            "maxPodsPerNode": {
              "maxPodsPerNode": "string"
            },
            "secondaryPodRange": "string",
            "subnetwork": "string"
          }
        ],
        "createPodRange": true,
        "enablePrivateNodes": true,
        "networkPerformanceConfig": {
          "externalIpEgressBandwidthTier": "TIER_UNSPECIFIED",
          "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
        },
        "podCidrOverprovisionConfig": {
          "disable": true
        },
        "podIpv4CidrBlock": "string",
        "podIpv4RangeUtilization": 0,
        "podRange": "string"
      },
      "placementPolicy": {
        "policyName": "string",
        "tpuTopology": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "podIpv4CidrSize": 0,
      "queuedProvisioning": {
        "enabled": true
      },
      "selfLink": "string",
      "status": "STATUS_UNSPECIFIED",
      "statusMessage": "string",
      "updateInfo": {
        "blueGreenInfo": {
          "blueInstanceGroupUrls": [
            "string"
          ],
          "bluePoolDeletionStartTime": "string",
          "greenInstanceGroupUrls": [
            "string"
          ],
          "greenPoolVersion": "string",
          "phase": "PHASE_UNSPECIFIED"
        }
      },
      "upgradeSettings": {
        "blueGreenSettings": {
          "autoscaledRolloutPolicy": {},
          "nodePoolSoakDuration": "string",
          "standardRolloutPolicy": {
            "batchNodeCount": 0,
            "batchPercentage": 0,
            "batchSoakDuration": "string"
          }
        },
        "maxSurge": 0,
        "maxUnavailable": 0,
        "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
      },
      "version": "string"
    }
  ]
}
```

<h3 id="containerprojectslocationsclustersnodepoolslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListNodePoolsResponse](#schemalistnodepoolsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.locations.clusters.nodePools.create

<a id="opIdcontainer.projects.locations.clusters.nodePools.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/nodePools \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clusterId": "string",
    "nodePool": {
      "autoscaling": {
        "autoprovisioned": true,
        "enabled": true,
        "locationPolicy": "LOCATION_POLICY_UNSPECIFIED",
        "maxNodeCount": 0,
        "minNodeCount": 0,
        "totalMaxNodeCount": 0,
        "totalMinNodeCount": 0
      },
      "bestEffortProvisioning": {
        "enabled": true,
        "minProvisionNodes": 0
      },
      "conditions": [
        {
          "canonicalCode": "OK",
          "code": "UNKNOWN",
          "message": "string"
        }
      ],
      "config": {
        "accelerators": [
          {
            "acceleratorCount": "string",
            "acceleratorType": "string",
            "gpuDriverInstallationConfig": {
              "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
            },
            "gpuPartitionSize": "string",
            "gpuSharingConfig": {
              "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
              "maxSharedClientsPerGpu": "string"
            },
            "maxTimeSharedClientsPerGpu": "string"
          }
        ],
        "advancedMachineFeatures": {
          "threadsPerCore": "string"
        },
        "bootDiskKmsKey": "string",
        "confidentialNodes": {
          "enabled": true
        },
        "diskSizeGb": 0,
        "diskType": "string",
        "enableConfidentialStorage": true,
        "ephemeralStorageConfig": {
          "localSsdCount": 0
        },
        "ephemeralStorageLocalSsdConfig": {
          "localSsdCount": 0
        },
        "fastSocket": {
          "enabled": true
        },
        "gcfsConfig": {
          "enabled": true
        },
        "gvnic": {
          "enabled": true
        },
        "hostMaintenancePolicy": {
          "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
          "opportunisticMaintenanceStrategy": {
            "maintenanceAvailabilityWindow": "string",
            "minNodesPerPool": "string",
            "nodeIdleTimeWindow": "string"
          }
        },
        "imageType": "string",
        "kubeletConfig": {
          "cpuCfsQuota": true,
          "cpuCfsQuotaPeriod": "string",
          "cpuManagerPolicy": "string",
          "insecureKubeletReadonlyPortEnabled": true,
          "podPidsLimit": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "linuxNodeConfig": {
          "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
          "sysctls": {
            "property1": "string",
            "property2": "string"
          }
        },
        "localNvmeSsdBlockConfig": {
          "localSsdCount": 0
        },
        "localSsdCount": 0,
        "loggingConfig": {
          "variantConfig": {
            "variant": "VARIANT_UNSPECIFIED"
          }
        },
        "machineType": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "minCpuPlatform": "string",
        "nodeGroup": "string",
        "oauthScopes": [
          "string"
        ],
        "preemptible": true,
        "reservationAffinity": {
          "consumeReservationType": "UNSPECIFIED",
          "key": "string",
          "values": [
            "string"
          ]
        },
        "resourceLabels": {
          "property1": "string",
          "property2": "string"
        },
        "resourceManagerTags": {
          "tags": {
            "property1": "string",
            "property2": "string"
          }
        },
        "sandboxConfig": {
          "sandboxType": "string",
          "type": "UNSPECIFIED"
        },
        "secondaryBootDisks": [
          {
            "diskImage": "string",
            "mode": "MODE_UNSPECIFIED"
          }
        ],
        "serviceAccount": "string",
        "shieldedInstanceConfig": {
          "enableIntegrityMonitoring": true,
          "enableSecureBoot": true
        },
        "soleTenantConfig": {
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ]
        },
        "spot": true,
        "tags": [
          "string"
        ],
        "taints": [
          {
            "effect": "EFFECT_UNSPECIFIED",
            "key": "string",
            "value": "string"
          }
        ],
        "windowsNodeConfig": {
          "osVersion": "OS_VERSION_UNSPECIFIED"
        },
        "workloadMetadataConfig": {
          "mode": "MODE_UNSPECIFIED",
          "nodeMetadata": "UNSPECIFIED"
        }
      },
      "etag": "string",
      "initialNodeCount": 0,
      "instanceGroupUrls": [
        "string"
      ],
      "locations": [
        "string"
      ],
      "management": {
        "autoRepair": true,
        "autoUpgrade": true,
        "upgradeOptions": {
          "autoUpgradeStartTime": "string",
          "description": "string"
        }
      },
      "maxPodsConstraint": {
        "maxPodsPerNode": "string"
      },
      "name": "string",
      "networkConfig": {
        "additionalNodeNetworkConfigs": [
          {
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "additionalPodNetworkConfigs": [
          {
            "maxPodsPerNode": {
              "maxPodsPerNode": "string"
            },
            "secondaryPodRange": "string",
            "subnetwork": "string"
          }
        ],
        "createPodRange": true,
        "enablePrivateNodes": true,
        "networkPerformanceConfig": {
          "externalIpEgressBandwidthTier": "TIER_UNSPECIFIED",
          "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
        },
        "podCidrOverprovisionConfig": {
          "disable": true
        },
        "podIpv4CidrBlock": "string",
        "podRange": "string"
      },
      "placementPolicy": {
        "policyName": "string",
        "tpuTopology": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "podIpv4CidrSize": 0,
      "queuedProvisioning": {
        "enabled": true
      },
      "selfLink": "string",
      "status": "STATUS_UNSPECIFIED",
      "statusMessage": "string",
      "upgradeSettings": {
        "blueGreenSettings": {
          "autoscaledRolloutPolicy": {},
          "nodePoolSoakDuration": "string",
          "standardRolloutPolicy": {
            "batchNodeCount": 0,
            "batchPercentage": 0,
            "batchSoakDuration": "string"
          }
        },
        "maxSurge": 0,
        "maxUnavailable": 0,
        "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
      },
      "version": "string"
    },
    "parent": "string",
    "projectId": "string",
    "zone": "string"
  }'
```

`POST /v1beta1/{parent}/nodePools`

Creates a node pool for a cluster.

> Body parameter

```json
{
  "clusterId": "string",
  "nodePool": {
    "autoscaling": {
      "autoprovisioned": true,
      "enabled": true,
      "locationPolicy": "LOCATION_POLICY_UNSPECIFIED",
      "maxNodeCount": 0,
      "minNodeCount": 0,
      "totalMaxNodeCount": 0,
      "totalMinNodeCount": 0
    },
    "bestEffortProvisioning": {
      "enabled": true,
      "minProvisionNodes": 0
    },
    "conditions": [
      {
        "canonicalCode": "OK",
        "code": "UNKNOWN",
        "message": "string"
      }
    ],
    "config": {
      "accelerators": [
        {
          "acceleratorCount": "string",
          "acceleratorType": "string",
          "gpuDriverInstallationConfig": {
            "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
          },
          "gpuPartitionSize": "string",
          "gpuSharingConfig": {
            "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
            "maxSharedClientsPerGpu": "string"
          },
          "maxTimeSharedClientsPerGpu": "string"
        }
      ],
      "advancedMachineFeatures": {
        "threadsPerCore": "string"
      },
      "bootDiskKmsKey": "string",
      "confidentialNodes": {
        "enabled": true
      },
      "diskSizeGb": 0,
      "diskType": "string",
      "enableConfidentialStorage": true,
      "ephemeralStorageConfig": {
        "localSsdCount": 0
      },
      "ephemeralStorageLocalSsdConfig": {
        "localSsdCount": 0
      },
      "fastSocket": {
        "enabled": true
      },
      "gcfsConfig": {
        "enabled": true
      },
      "gvnic": {
        "enabled": true
      },
      "hostMaintenancePolicy": {
        "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
        "opportunisticMaintenanceStrategy": {
          "maintenanceAvailabilityWindow": "string",
          "minNodesPerPool": "string",
          "nodeIdleTimeWindow": "string"
        }
      },
      "imageType": "string",
      "kubeletConfig": {
        "cpuCfsQuota": true,
        "cpuCfsQuotaPeriod": "string",
        "cpuManagerPolicy": "string",
        "insecureKubeletReadonlyPortEnabled": true,
        "podPidsLimit": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "linuxNodeConfig": {
        "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
        "sysctls": {
          "property1": "string",
          "property2": "string"
        }
      },
      "localNvmeSsdBlockConfig": {
        "localSsdCount": 0
      },
      "localSsdCount": 0,
      "loggingConfig": {
        "variantConfig": {
          "variant": "VARIANT_UNSPECIFIED"
        }
      },
      "machineType": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "minCpuPlatform": "string",
      "nodeGroup": "string",
      "oauthScopes": [
        "string"
      ],
      "preemptible": true,
      "reservationAffinity": {
        "consumeReservationType": "UNSPECIFIED",
        "key": "string",
        "values": [
          "string"
        ]
      },
      "resourceLabels": {
        "property1": "string",
        "property2": "string"
      },
      "resourceManagerTags": {
        "tags": {
          "property1": "string",
          "property2": "string"
        }
      },
      "sandboxConfig": {
        "sandboxType": "string",
        "type": "UNSPECIFIED"
      },
      "secondaryBootDisks": [
        {
          "diskImage": "string",
          "mode": "MODE_UNSPECIFIED"
        }
      ],
      "serviceAccount": "string",
      "shieldedInstanceConfig": {
        "enableIntegrityMonitoring": true,
        "enableSecureBoot": true
      },
      "soleTenantConfig": {
        "nodeAffinities": [
          {
            "key": "string",
            "operator": "OPERATOR_UNSPECIFIED",
            "values": [
              "string"
            ]
          }
        ]
      },
      "spot": true,
      "tags": [
        "string"
      ],
      "taints": [
        {
          "effect": "EFFECT_UNSPECIFIED",
          "key": "string",
          "value": "string"
        }
      ],
      "windowsNodeConfig": {
        "osVersion": "OS_VERSION_UNSPECIFIED"
      },
      "workloadMetadataConfig": {
        "mode": "MODE_UNSPECIFIED",
        "nodeMetadata": "UNSPECIFIED"
      }
    },
    "etag": "string",
    "initialNodeCount": 0,
    "instanceGroupUrls": [
      "string"
    ],
    "locations": [
      "string"
    ],
    "management": {
      "autoRepair": true,
      "autoUpgrade": true,
      "upgradeOptions": {
        "autoUpgradeStartTime": "string",
        "description": "string"
      }
    },
    "maxPodsConstraint": {
      "maxPodsPerNode": "string"
    },
    "name": "string",
    "networkConfig": {
      "additionalNodeNetworkConfigs": [
        {
          "network": "string",
          "subnetwork": "string"
        }
      ],
      "additionalPodNetworkConfigs": [
        {
          "maxPodsPerNode": {
            "maxPodsPerNode": "string"
          },
          "secondaryPodRange": "string",
          "subnetwork": "string"
        }
      ],
      "createPodRange": true,
      "enablePrivateNodes": true,
      "networkPerformanceConfig": {
        "externalIpEgressBandwidthTier": "TIER_UNSPECIFIED",
        "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
      },
      "podCidrOverprovisionConfig": {
        "disable": true
      },
      "podIpv4CidrBlock": "string",
      "podRange": "string"
    },
    "placementPolicy": {
      "policyName": "string",
      "tpuTopology": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "podIpv4CidrSize": 0,
    "queuedProvisioning": {
      "enabled": true
    },
    "selfLink": "string",
    "status": "STATUS_UNSPECIFIED",
    "statusMessage": "string",
    "upgradeSettings": {
      "blueGreenSettings": {
        "autoscaledRolloutPolicy": {},
        "nodePoolSoakDuration": "string",
        "standardRolloutPolicy": {
          "batchNodeCount": 0,
          "batchPercentage": 0,
          "batchSoakDuration": "string"
        }
      },
      "maxSurge": 0,
      "maxUnavailable": 0,
      "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
    },
    "version": "string"
  },
  "parent": "string",
  "projectId": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclustersnodepoolscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The parent (project, location, cluster name) where the node pool will be created. Specified in the format `projects/*/locations/*/clusters/*`.|
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
|body|body|[CreateNodePoolRequest](#schemacreatenodepoolrequest)|false|none|
|» clusterId|body|string|false|**Deprecated.** Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.|
|» nodePool|body|[NodePool](#schemanodepool)|false|Required. The node pool to create.|
|» parent|body|string|false|The parent (project, location, cluster name) where the node pool will be created. Specified in the format `projects/*/locations/*/clusters/*`.|
|» projectId|body|string|false|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.|
|» zone|body|string|false|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.|

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
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

<h3 id="containerprojectslocationsclustersnodepoolscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## container.projects.locations.operations.list

<a id="opIdcontainer.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/operations`

Lists all operations in a project in the specified zone or all zones.

<h3 id="containerprojectslocationsoperationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The parent (project and location) where the operations will be listed. Specified in the format `projects/*/locations/*`. Location "-" matches all zones and all regions.|
|projectId|query|string|false|Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.|
|zone|query|string|false|Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for, or `-` for all zones. This field has been deprecated and replaced by the parent field.|
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
  "missingZones": [
    "string"
  ],
  "operations": [
    {
      "clusterConditions": [
        {
          "canonicalCode": "OK",
          "code": "UNKNOWN",
          "message": "string"
        }
      ],
      "detail": "string",
      "endTime": "string",
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
      "location": "string",
      "name": "string",
      "nodepoolConditions": [
        {
          "canonicalCode": "OK",
          "code": "UNKNOWN",
          "message": "string"
        }
      ],
      "operationType": "TYPE_UNSPECIFIED",
      "progress": {
        "metrics": [
          {
            "doubleValue": 0,
            "intValue": "string",
            "name": "string",
            "stringValue": "string"
          }
        ],
        "name": "string",
        "stages": [
          {}
        ],
        "status": "STATUS_UNSPECIFIED"
      },
      "selfLink": "string",
      "startTime": "string",
      "status": "STATUS_UNSPECIFIED",
      "statusMessage": "string",
      "targetLink": "string",
      "zone": "string"
    }
  ]
}
```

<h3 id="containerprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

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
  "acceleratorCount": "string",
  "acceleratorType": "string",
  "gpuDriverInstallationConfig": {
    "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
  },
  "gpuPartitionSize": "string",
  "gpuSharingConfig": {
    "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
    "maxSharedClientsPerGpu": "string"
  },
  "maxTimeSharedClientsPerGpu": "string"
}
```

AcceleratorConfig represents a Hardware Accelerator request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceleratorCount|string(int64)|false|none|The number of the accelerator cards exposed to an instance.|
|acceleratorType|string|false|none|The accelerator type resource name. List of supported accelerators [here](https://cloud.google.com/compute/docs/gpus)|
|gpuDriverInstallationConfig|[GPUDriverInstallationConfig](#schemagpudriverinstallationconfig)|false|none|The configuration for auto installation of GPU driver.|
|gpuPartitionSize|string|false|none|Size of partitions to create on the GPU. Valid values are described in the NVIDIA [mig user guide](https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning).|
|gpuSharingConfig|[GPUSharingConfig](#schemagpusharingconfig)|false|none|The configuration for GPU sharing options.|
|maxTimeSharedClientsPerGpu|string(int64)|false|none|**Deprecated.** The number of time-shared GPU resources to expose for each physical GPU.|

<h2 id="tocS_AdditionalNodeNetworkConfig">AdditionalNodeNetworkConfig</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalnodenetworkconfig"></a>
<a id="schema_AdditionalNodeNetworkConfig"></a>
<a id="tocSadditionalnodenetworkconfig"></a>
<a id="tocsadditionalnodenetworkconfig"></a>

```json
{
  "network": "string",
  "subnetwork": "string"
}
```

AdditionalNodeNetworkConfig is the configuration for additional node networks within the NodeNetworkConfig message

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|network|string|false|none|Name of the VPC where the additional interface belongs|
|subnetwork|string|false|none|Name of the subnetwork where the additional interface belongs|

<h2 id="tocS_AdditionalPodNetworkConfig">AdditionalPodNetworkConfig</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalpodnetworkconfig"></a>
<a id="schema_AdditionalPodNetworkConfig"></a>
<a id="tocSadditionalpodnetworkconfig"></a>
<a id="tocsadditionalpodnetworkconfig"></a>

```json
{
  "maxPodsPerNode": {
    "maxPodsPerNode": "string"
  },
  "secondaryPodRange": "string",
  "subnetwork": "string"
}
```

AdditionalPodNetworkConfig is the configuration for additional pod networks within the NodeNetworkConfig message

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxPodsPerNode|[MaxPodsConstraint](#schemamaxpodsconstraint)|false|none|The maximum number of pods per node which use this pod network|
|secondaryPodRange|string|false|none|The name of the secondary range on the subnet which provides IP address for this pod range|
|subnetwork|string|false|none|Name of the subnetwork where the additional pod network belongs|

<h2 id="tocS_AdditionalPodRangesConfig">AdditionalPodRangesConfig</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalpodrangesconfig"></a>
<a id="schema_AdditionalPodRangesConfig"></a>
<a id="tocSadditionalpodrangesconfig"></a>
<a id="tocsadditionalpodrangesconfig"></a>

```json
{
  "podRangeInfo": [
    {
      "rangeName": "string",
      "utilization": 0
    }
  ],
  "podRangeNames": [
    "string"
  ]
}
```

AdditionalPodRangesConfig is the configuration for additional pod secondary ranges supporting the ClusterUpdate message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|podRangeInfo|[[RangeInfo](#schemarangeinfo)]|false|read-only|Output only. [Output only] Information for additional pod range.|
|podRangeNames|[string]|false|none|Name for pod secondary ipv4 range which has the actual range defined ahead.|

<h2 id="tocS_AddonsConfig">AddonsConfig</h2>
<!-- backwards compatibility -->
<a id="schemaaddonsconfig"></a>
<a id="schema_AddonsConfig"></a>
<a id="tocSaddonsconfig"></a>
<a id="tocsaddonsconfig"></a>

```json
{
  "cloudRunConfig": {
    "disabled": true,
    "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED"
  },
  "configConnectorConfig": {
    "enabled": true
  },
  "dnsCacheConfig": {
    "enabled": true
  },
  "gcePersistentDiskCsiDriverConfig": {
    "enabled": true
  },
  "gcpFilestoreCsiDriverConfig": {
    "enabled": true
  },
  "gcsFuseCsiDriverConfig": {
    "enabled": true
  },
  "gkeBackupAgentConfig": {
    "enabled": true
  },
  "horizontalPodAutoscaling": {
    "disabled": true
  },
  "httpLoadBalancing": {
    "disabled": true
  },
  "istioConfig": {
    "auth": "AUTH_NONE",
    "disabled": true
  },
  "kalmConfig": {
    "enabled": true
  },
  "kubernetesDashboard": {
    "disabled": true
  },
  "networkPolicyConfig": {
    "disabled": true
  },
  "statefulHaConfig": {
    "enabled": true
  }
}
```

Configuration for the addons that can be automatically spun up in the cluster, enabling additional functionality.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudRunConfig|[CloudRunConfig](#schemacloudrunconfig)|false|none|Configuration for the Cloud Run addon. The `IstioConfig` addon must be enabled in order to enable Cloud Run addon. This option can only be enabled at cluster creation time.|
|configConnectorConfig|[ConfigConnectorConfig](#schemaconfigconnectorconfig)|false|none|Configuration for the ConfigConnector add-on, a Kubernetes extension to manage hosted GCP services through the Kubernetes API|
|dnsCacheConfig|[DnsCacheConfig](#schemadnscacheconfig)|false|none|Configuration for NodeLocalDNS, a dns cache running on cluster nodes|
|gcePersistentDiskCsiDriverConfig|[GcePersistentDiskCsiDriverConfig](#schemagcepersistentdiskcsidriverconfig)|false|none|Configuration for the Compute Engine Persistent Disk CSI driver.|
|gcpFilestoreCsiDriverConfig|[GcpFilestoreCsiDriverConfig](#schemagcpfilestorecsidriverconfig)|false|none|Configuration for the GCP Filestore CSI driver.|
|gcsFuseCsiDriverConfig|[GcsFuseCsiDriverConfig](#schemagcsfusecsidriverconfig)|false|none|Configuration for the Cloud Storage Fuse CSI driver.|
|gkeBackupAgentConfig|[GkeBackupAgentConfig](#schemagkebackupagentconfig)|false|none|Configuration for the Backup for GKE agent addon.|
|horizontalPodAutoscaling|[HorizontalPodAutoscaling](#schemahorizontalpodautoscaling)|false|none|Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods.|
|httpLoadBalancing|[HttpLoadBalancing](#schemahttploadbalancing)|false|none|Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster.|
|istioConfig|[IstioConfig](#schemaistioconfig)|false|none|**Deprecated.** Configuration for Istio, an open platform to connect, manage, and secure microservices.|
|kalmConfig|[KalmConfig](#schemakalmconfig)|false|none|**Deprecated.** Configuration for the KALM addon, which manages the lifecycle of k8s applications.|
|kubernetesDashboard|[KubernetesDashboard](#schemakubernetesdashboard)|false|none|**Deprecated.** Configuration for the Kubernetes Dashboard. This addon is deprecated, and will be disabled in 1.15. It is recommended to use the Cloud Console to manage and monitor your Kubernetes clusters, workloads and applications. For more information, see: https://cloud.google.com/kubernetes-engine/docs/concepts/dashboards|
|networkPolicyConfig|[NetworkPolicyConfig](#schemanetworkpolicyconfig)|false|none|Configuration for NetworkPolicy. This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes.|
|statefulHaConfig|[StatefulHAConfig](#schemastatefulhaconfig)|false|none|Optional. Configuration for the StatefulHA add-on.|

<h2 id="tocS_AdvancedDatapathObservabilityConfig">AdvancedDatapathObservabilityConfig</h2>
<!-- backwards compatibility -->
<a id="schemaadvanceddatapathobservabilityconfig"></a>
<a id="schema_AdvancedDatapathObservabilityConfig"></a>
<a id="tocSadvanceddatapathobservabilityconfig"></a>
<a id="tocsadvanceddatapathobservabilityconfig"></a>

```json
{
  "enableMetrics": true,
  "enableRelay": true,
  "relayMode": "RELAY_MODE_UNSPECIFIED"
}
```

AdvancedDatapathObservabilityConfig specifies configuration of observability features of advanced datapath.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableMetrics|boolean|false|none|Expose flow metrics on nodes|
|enableRelay|boolean|false|none|Enable Relay component|
|relayMode|string|false|none|Method used to make Relay available|

#### Enumerated Values

|Property|Value|
|---|---|
|relayMode|RELAY_MODE_UNSPECIFIED|
|relayMode|DISABLED|
|relayMode|INTERNAL_VPC_LB|
|relayMode|EXTERNAL_LB|

<h2 id="tocS_AdvancedMachineFeatures">AdvancedMachineFeatures</h2>
<!-- backwards compatibility -->
<a id="schemaadvancedmachinefeatures"></a>
<a id="schema_AdvancedMachineFeatures"></a>
<a id="tocSadvancedmachinefeatures"></a>
<a id="tocsadvancedmachinefeatures"></a>

```json
{
  "threadsPerCore": "string"
}
```

Specifies options for controlling advanced machine features.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|threadsPerCore|string(int64)|false|none|The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.|

<h2 id="tocS_AuthenticatorGroupsConfig">AuthenticatorGroupsConfig</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticatorgroupsconfig"></a>
<a id="schema_AuthenticatorGroupsConfig"></a>
<a id="tocSauthenticatorgroupsconfig"></a>
<a id="tocsauthenticatorgroupsconfig"></a>

```json
{
  "enabled": true,
  "securityGroup": "string"
}
```

Configuration for returning group information from authenticators.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether this cluster should return group membership lookups during authentication using a group of security groups.|
|securityGroup|string|false|none|The name of the security group-of-groups to be used. Only relevant if enabled = true.|

<h2 id="tocS_AutoUpgradeOptions">AutoUpgradeOptions</h2>
<!-- backwards compatibility -->
<a id="schemaautoupgradeoptions"></a>
<a id="schema_AutoUpgradeOptions"></a>
<a id="tocSautoupgradeoptions"></a>
<a id="tocsautoupgradeoptions"></a>

```json
{
  "autoUpgradeStartTime": "string",
  "description": "string"
}
```

AutoUpgradeOptions defines the set of options for the user to control how the Auto Upgrades will proceed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoUpgradeStartTime|string|false|none|[Output only] This field is set when upgrades are about to commence with the approximate start time for the upgrades, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.|
|description|string|false|none|[Output only] This field is set when upgrades are about to commence with the description of the upgrade.|

<h2 id="tocS_Autopilot">Autopilot</h2>
<!-- backwards compatibility -->
<a id="schemaautopilot"></a>
<a id="schema_Autopilot"></a>
<a id="tocSautopilot"></a>
<a id="tocsautopilot"></a>

```json
{
  "conversionStatus": {
    "state": "STATE_UNSPECIFIED"
  },
  "enabled": true,
  "workloadPolicyConfig": {
    "allowNetAdmin": true
  }
}
```

Autopilot is the configuration for Autopilot settings on the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversionStatus|[AutopilotConversionStatus](#schemaautopilotconversionstatus)|false|none|Output only. ConversionStatus shows conversion status.|
|enabled|boolean|false|none|Enable Autopilot|
|workloadPolicyConfig|[WorkloadPolicyConfig](#schemaworkloadpolicyconfig)|false|none|Workload policy configuration for Autopilot.|

<h2 id="tocS_AutopilotCompatibilityIssue">AutopilotCompatibilityIssue</h2>
<!-- backwards compatibility -->
<a id="schemaautopilotcompatibilityissue"></a>
<a id="schema_AutopilotCompatibilityIssue"></a>
<a id="tocSautopilotcompatibilityissue"></a>
<a id="tocsautopilotcompatibilityissue"></a>

```json
{
  "constraintType": "string",
  "description": "string",
  "documentationUrl": "string",
  "incompatibilityType": "UNSPECIFIED",
  "lastObservation": "string",
  "subjects": [
    "string"
  ]
}
```

AutopilotCompatibilityIssue contains information about a specific compatibility issue with Autopilot mode.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|constraintType|string|false|none|The constraint type of the issue.|
|description|string|false|none|The description of the issue.|
|documentationUrl|string|false|none|A URL to a public documnetation, which addresses resolving this issue.|
|incompatibilityType|string|false|none|The incompatibility type of this issue.|
|lastObservation|string(google-datetime)|false|none|The last time when this issue was observed.|
|subjects|[string]|false|none|The name of the resources which are subject to this issue.|

#### Enumerated Values

|Property|Value|
|---|---|
|incompatibilityType|UNSPECIFIED|
|incompatibilityType|INCOMPATIBILITY|
|incompatibilityType|ADDITIONAL_CONFIG_REQUIRED|
|incompatibilityType|PASSED_WITH_OPTIONAL_CONFIG|

<h2 id="tocS_AutopilotConversionStatus">AutopilotConversionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaautopilotconversionstatus"></a>
<a id="schema_AutopilotConversionStatus"></a>
<a id="tocSautopilotconversionstatus"></a>
<a id="tocsautopilotconversionstatus"></a>

```json
{
  "state": "STATE_UNSPECIFIED"
}
```

AutopilotConversionStatus represents conversion status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|string|false|read-only|Output only. The current state of the conversion.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|DONE|

<h2 id="tocS_AutoprovisioningNodePoolDefaults">AutoprovisioningNodePoolDefaults</h2>
<!-- backwards compatibility -->
<a id="schemaautoprovisioningnodepooldefaults"></a>
<a id="schema_AutoprovisioningNodePoolDefaults"></a>
<a id="tocSautoprovisioningnodepooldefaults"></a>
<a id="tocsautoprovisioningnodepooldefaults"></a>

```json
{
  "bootDiskKmsKey": "string",
  "diskSizeGb": 0,
  "diskType": "string",
  "imageType": "string",
  "insecureKubeletReadonlyPortEnabled": true,
  "management": {
    "autoRepair": true,
    "autoUpgrade": true,
    "upgradeOptions": {
      "autoUpgradeStartTime": "string",
      "description": "string"
    }
  },
  "minCpuPlatform": "string",
  "oauthScopes": [
    "string"
  ],
  "serviceAccount": "string",
  "shieldedInstanceConfig": {
    "enableIntegrityMonitoring": true,
    "enableSecureBoot": true
  },
  "upgradeSettings": {
    "blueGreenSettings": {
      "autoscaledRolloutPolicy": {},
      "nodePoolSoakDuration": "string",
      "standardRolloutPolicy": {
        "batchNodeCount": 0,
        "batchPercentage": 0,
        "batchSoakDuration": "string"
      }
    },
    "maxSurge": 0,
    "maxUnavailable": 0,
    "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
  }
}
```

AutoprovisioningNodePoolDefaults contains defaults for a node pool created by NAP.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bootDiskKmsKey|string|false|none| The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption|
|diskSizeGb|integer(int32)|false|none|Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. If unspecified, the default disk size is 100GB.|
|diskType|string|false|none|Type of the disk attached to each node (e.g. 'pd-standard', 'pd-ssd' or 'pd-balanced') If unspecified, the default disk type is 'pd-standard'|
|imageType|string|false|none|The image type to use for NAP created node. Please see https://cloud.google.com/kubernetes-engine/docs/concepts/node-images for available image types.|
|insecureKubeletReadonlyPortEnabled|boolean|false|none|Enable or disable Kubelet read only port.|
|management|[NodeManagement](#schemanodemanagement)|false|none|NodeManagement configuration for this NodePool.|
|minCpuPlatform|string|false|none|**Deprecated.** Deprecated. Minimum CPU platform to be used for NAP created node pools. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as minCpuPlatform: Intel Haswell or minCpuPlatform: Intel Sandy Bridge. For more information, read [how to specify min CPU platform](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform). This field is deprecated, min_cpu_platform should be specified using `cloud.google.com/requested-min-cpu-platform` label selector on the pod. To unset the min cpu platform field pass "automatic" as field value.|
|oauthScopes|[string]|false|none|The set of Google API scopes to be made available on all of the node VMs under the "default" service account. The following scopes are recommended, but not required, and by default are not included: * `https://www.googleapis.com/auth/compute` is required for mounting persistent storage on your nodes. * `https://www.googleapis.com/auth/devstorage.read_only` is required for communicating with **gcr.io** (the [Google Container Registry](https://cloud.google.com/container-registry/)). If unspecified, no scopes are added, unless Cloud Logging or Cloud Monitoring are enabled, in which case their required scopes will be added.|
|serviceAccount|string|false|none|The Google Cloud Platform Service Account to be used by the node VMs. Specify the email address of the Service Account; otherwise, if no Service Account is specified, the "default" service account is used.|
|shieldedInstanceConfig|[ShieldedInstanceConfig](#schemashieldedinstanceconfig)|false|none|Shielded Instance options.|
|upgradeSettings|[UpgradeSettings](#schemaupgradesettings)|false|none|Upgrade settings control disruption and speed of the upgrade.|

<h2 id="tocS_AutoscaledRolloutPolicy">AutoscaledRolloutPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaautoscaledrolloutpolicy"></a>
<a id="schema_AutoscaledRolloutPolicy"></a>
<a id="tocSautoscaledrolloutpolicy"></a>
<a id="tocsautoscaledrolloutpolicy"></a>

```json
{}
```

Autoscaled rollout policy uses cluster autoscaler during blue-green upgrades to scale both the green and blue pools.

<h2 id="tocS_AvailableVersion">AvailableVersion</h2>
<!-- backwards compatibility -->
<a id="schemaavailableversion"></a>
<a id="schema_AvailableVersion"></a>
<a id="tocSavailableversion"></a>
<a id="tocsavailableversion"></a>

```json
{
  "reason": "string",
  "version": "string"
}
```

Deprecated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|Reason for availability.|
|version|string|false|none|Kubernetes version.|

<h2 id="tocS_BestEffortProvisioning">BestEffortProvisioning</h2>
<!-- backwards compatibility -->
<a id="schemabesteffortprovisioning"></a>
<a id="schema_BestEffortProvisioning"></a>
<a id="tocSbesteffortprovisioning"></a>
<a id="tocsbesteffortprovisioning"></a>

```json
{
  "enabled": true,
  "minProvisionNodes": 0
}
```

Best effort provisioning.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|When this is enabled, cluster/node pool creations will ignore non-fatal errors like stockout to best provision as many nodes as possible right now and eventually bring up all target number of nodes|
|minProvisionNodes|integer(int32)|false|none|Minimum number of nodes to be provisioned to be considered as succeeded, and the rest of nodes will be provisioned gradually and eventually when stockout issue has been resolved.|

<h2 id="tocS_BigQueryDestination">BigQueryDestination</h2>
<!-- backwards compatibility -->
<a id="schemabigquerydestination"></a>
<a id="schema_BigQueryDestination"></a>
<a id="tocSbigquerydestination"></a>
<a id="tocsbigquerydestination"></a>

```json
{
  "datasetId": "string"
}
```

Parameters for using BigQuery as the destination of resource usage export.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetId|string|false|none|The ID of a BigQuery Dataset.|

<h2 id="tocS_BinaryAuthorization">BinaryAuthorization</h2>
<!-- backwards compatibility -->
<a id="schemabinaryauthorization"></a>
<a id="schema_BinaryAuthorization"></a>
<a id="tocSbinaryauthorization"></a>
<a id="tocsbinaryauthorization"></a>

```json
{
  "enabled": true,
  "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
  "policyBindings": [
    {
      "name": "string"
    }
  ]
}
```

Configuration for Binary Authorization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|**Deprecated.** This field is deprecated. Leave this unset and instead configure BinaryAuthorization using evaluation_mode. If evaluation_mode is set to anything other than EVALUATION_MODE_UNSPECIFIED, this field is ignored.|
|evaluationMode|string|false|none|Mode of operation for binauthz policy evaluation. If unspecified, defaults to DISABLED.|
|policyBindings|[[PolicyBinding](#schemapolicybinding)]|false|none|Optional. Binauthz policies that apply to this cluster.|

#### Enumerated Values

|Property|Value|
|---|---|
|evaluationMode|EVALUATION_MODE_UNSPECIFIED|
|evaluationMode|DISABLED|
|evaluationMode|PROJECT_SINGLETON_POLICY_ENFORCE|
|evaluationMode|POLICY_BINDINGS|
|evaluationMode|POLICY_BINDINGS_AND_PROJECT_SINGLETON_POLICY_ENFORCE|

<h2 id="tocS_BlueGreenInfo">BlueGreenInfo</h2>
<!-- backwards compatibility -->
<a id="schemabluegreeninfo"></a>
<a id="schema_BlueGreenInfo"></a>
<a id="tocSbluegreeninfo"></a>
<a id="tocsbluegreeninfo"></a>

```json
{
  "blueInstanceGroupUrls": [
    "string"
  ],
  "bluePoolDeletionStartTime": "string",
  "greenInstanceGroupUrls": [
    "string"
  ],
  "greenPoolVersion": "string",
  "phase": "PHASE_UNSPECIFIED"
}
```

Information relevant to blue-green upgrade.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blueInstanceGroupUrls|[string]|false|none|The resource URLs of the [managed instance groups] (/compute/docs/instance-groups/creating-groups-of-managed-instances) associated with blue pool.|
|bluePoolDeletionStartTime|string|false|none|Time to start deleting blue pool to complete blue-green upgrade, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.|
|greenInstanceGroupUrls|[string]|false|none|The resource URLs of the [managed instance groups] (/compute/docs/instance-groups/creating-groups-of-managed-instances) associated with green pool.|
|greenPoolVersion|string|false|none|Version of green pool.|
|phase|string|false|none|Current blue-green upgrade phase.|

#### Enumerated Values

|Property|Value|
|---|---|
|phase|PHASE_UNSPECIFIED|
|phase|UPDATE_STARTED|
|phase|CREATING_GREEN_POOL|
|phase|CORDONING_BLUE_POOL|
|phase|WAITING_TO_DRAIN_BLUE_POOL|
|phase|DRAINING_BLUE_POOL|
|phase|NODE_POOL_SOAKING|
|phase|DELETING_BLUE_POOL|
|phase|ROLLBACK_STARTED|

<h2 id="tocS_BlueGreenSettings">BlueGreenSettings</h2>
<!-- backwards compatibility -->
<a id="schemabluegreensettings"></a>
<a id="schema_BlueGreenSettings"></a>
<a id="tocSbluegreensettings"></a>
<a id="tocsbluegreensettings"></a>

```json
{
  "autoscaledRolloutPolicy": {},
  "nodePoolSoakDuration": "string",
  "standardRolloutPolicy": {
    "batchNodeCount": 0,
    "batchPercentage": 0,
    "batchSoakDuration": "string"
  }
}
```

Settings for blue-green upgrade.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoscaledRolloutPolicy|[AutoscaledRolloutPolicy](#schemaautoscaledrolloutpolicy)|false|none|Autoscaled policy for cluster autoscaler enabled blue-green upgrade.|
|nodePoolSoakDuration|string(google-duration)|false|none|Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.|
|standardRolloutPolicy|[StandardRolloutPolicy](#schemastandardrolloutpolicy)|false|none|Standard policy for the blue-green upgrade.|

<h2 id="tocS_CancelOperationRequest">CancelOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacanceloperationrequest"></a>
<a id="schema_CancelOperationRequest"></a>
<a id="tocScanceloperationrequest"></a>
<a id="tocscanceloperationrequest"></a>

```json
{
  "name": "string",
  "operationId": "string",
  "projectId": "string",
  "zone": "string"
}
```

CancelOperationRequest cancels a single operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name (project, location, operation id) of the operation to cancel. Specified in the format `projects/*/locations/*/operations/*`.|
|operationId|string|false|none|**Deprecated.** Required. Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.|
|projectId|string|false|none|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|string|false|none|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation resides. This field has been deprecated and replaced by the name field.|

<h2 id="tocS_CheckAutopilotCompatibilityResponse">CheckAutopilotCompatibilityResponse</h2>
<!-- backwards compatibility -->
<a id="schemacheckautopilotcompatibilityresponse"></a>
<a id="schema_CheckAutopilotCompatibilityResponse"></a>
<a id="tocScheckautopilotcompatibilityresponse"></a>
<a id="tocscheckautopilotcompatibilityresponse"></a>

```json
{
  "issues": [
    {
      "constraintType": "string",
      "description": "string",
      "documentationUrl": "string",
      "incompatibilityType": "UNSPECIFIED",
      "lastObservation": "string",
      "subjects": [
        "string"
      ]
    }
  ],
  "summary": "string"
}
```

CheckAutopilotCompatibilityResponse has a list of compatibility issues.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issues|[[AutopilotCompatibilityIssue](#schemaautopilotcompatibilityissue)]|false|none|The list of issues for the given operation.|
|summary|string|false|none|The summary of the autopilot compatibility response.|

<h2 id="tocS_CidrBlock">CidrBlock</h2>
<!-- backwards compatibility -->
<a id="schemacidrblock"></a>
<a id="schema_CidrBlock"></a>
<a id="tocScidrblock"></a>
<a id="tocscidrblock"></a>

```json
{
  "cidrBlock": "string",
  "displayName": "string"
}
```

CidrBlock contains an optional name and one CIDR block.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cidrBlock|string|false|none|cidr_block must be specified in CIDR notation.|
|displayName|string|false|none|display_name is an optional field for users to identify CIDR blocks.|

<h2 id="tocS_ClientCertificateConfig">ClientCertificateConfig</h2>
<!-- backwards compatibility -->
<a id="schemaclientcertificateconfig"></a>
<a id="schema_ClientCertificateConfig"></a>
<a id="tocSclientcertificateconfig"></a>
<a id="tocsclientcertificateconfig"></a>

```json
{
  "issueClientCertificate": true
}
```

Configuration for client certificates on the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issueClientCertificate|boolean|false|none|Issue a client certificate.|

<h2 id="tocS_CloudRunConfig">CloudRunConfig</h2>
<!-- backwards compatibility -->
<a id="schemacloudrunconfig"></a>
<a id="schema_CloudRunConfig"></a>
<a id="tocScloudrunconfig"></a>
<a id="tocscloudrunconfig"></a>

```json
{
  "disabled": true,
  "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED"
}
```

Configuration options for the Cloud Run feature.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|Whether Cloud Run addon is enabled for this cluster.|
|loadBalancerType|string|false|none|Which load balancer type is installed for Cloud Run.|

#### Enumerated Values

|Property|Value|
|---|---|
|loadBalancerType|LOAD_BALANCER_TYPE_UNSPECIFIED|
|loadBalancerType|LOAD_BALANCER_TYPE_EXTERNAL|
|loadBalancerType|LOAD_BALANCER_TYPE_INTERNAL|

<h2 id="tocS_Cluster">Cluster</h2>
<!-- backwards compatibility -->
<a id="schemacluster"></a>
<a id="schema_Cluster"></a>
<a id="tocScluster"></a>
<a id="tocscluster"></a>

```json
{
  "addonsConfig": {
    "cloudRunConfig": {
      "disabled": true,
      "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED"
    },
    "configConnectorConfig": {
      "enabled": true
    },
    "dnsCacheConfig": {
      "enabled": true
    },
    "gcePersistentDiskCsiDriverConfig": {
      "enabled": true
    },
    "gcpFilestoreCsiDriverConfig": {
      "enabled": true
    },
    "gcsFuseCsiDriverConfig": {
      "enabled": true
    },
    "gkeBackupAgentConfig": {
      "enabled": true
    },
    "horizontalPodAutoscaling": {
      "disabled": true
    },
    "httpLoadBalancing": {
      "disabled": true
    },
    "istioConfig": {
      "auth": "AUTH_NONE",
      "disabled": true
    },
    "kalmConfig": {
      "enabled": true
    },
    "kubernetesDashboard": {
      "disabled": true
    },
    "networkPolicyConfig": {
      "disabled": true
    },
    "statefulHaConfig": {
      "enabled": true
    }
  },
  "authenticatorGroupsConfig": {
    "enabled": true,
    "securityGroup": "string"
  },
  "autopilot": {
    "conversionStatus": {
      "state": "STATE_UNSPECIFIED"
    },
    "enabled": true,
    "workloadPolicyConfig": {
      "allowNetAdmin": true
    }
  },
  "autoscaling": {
    "autoprovisioningLocations": [
      "string"
    ],
    "autoprovisioningNodePoolDefaults": {
      "bootDiskKmsKey": "string",
      "diskSizeGb": 0,
      "diskType": "string",
      "imageType": "string",
      "insecureKubeletReadonlyPortEnabled": true,
      "management": {
        "autoRepair": true,
        "autoUpgrade": true,
        "upgradeOptions": {
          "autoUpgradeStartTime": "string",
          "description": "string"
        }
      },
      "minCpuPlatform": "string",
      "oauthScopes": [
        "string"
      ],
      "serviceAccount": "string",
      "shieldedInstanceConfig": {
        "enableIntegrityMonitoring": true,
        "enableSecureBoot": true
      },
      "upgradeSettings": {
        "blueGreenSettings": {
          "autoscaledRolloutPolicy": {},
          "nodePoolSoakDuration": "string",
          "standardRolloutPolicy": {
            "batchNodeCount": 0,
            "batchPercentage": 0,
            "batchSoakDuration": "string"
          }
        },
        "maxSurge": 0,
        "maxUnavailable": 0,
        "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
      }
    },
    "autoscalingProfile": "PROFILE_UNSPECIFIED",
    "enableNodeAutoprovisioning": true,
    "resourceLimits": [
      {
        "maximum": "string",
        "minimum": "string",
        "resourceType": "string"
      }
    ]
  },
  "binaryAuthorization": {
    "enabled": true,
    "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
    "policyBindings": [
      {
        "name": "string"
      }
    ]
  },
  "clusterIpv4Cidr": "string",
  "clusterTelemetry": {
    "type": "UNSPECIFIED"
  },
  "conditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "confidentialNodes": {
    "enabled": true
  },
  "costManagementConfig": {
    "enabled": true
  },
  "createTime": "string",
  "currentMasterVersion": "string",
  "currentNodeCount": 0,
  "currentNodeVersion": "string",
  "databaseEncryption": {
    "keyName": "string",
    "state": "UNKNOWN"
  },
  "defaultMaxPodsConstraint": {
    "maxPodsPerNode": "string"
  },
  "description": "string",
  "enableK8sBetaApis": {
    "enabledApis": [
      "string"
    ]
  },
  "enableKubernetesAlpha": true,
  "enableTpu": true,
  "endpoint": "string",
  "enterpriseConfig": {
    "clusterTier": "CLUSTER_TIER_UNSPECIFIED"
  },
  "etag": "string",
  "expireTime": "string",
  "fleet": {
    "membership": "string",
    "preRegistered": true,
    "project": "string"
  },
  "id": "string",
  "identityServiceConfig": {
    "enabled": true
  },
  "initialClusterVersion": "string",
  "initialNodeCount": 0,
  "instanceGroupUrls": [
    "string"
  ],
  "ipAllocationPolicy": {
    "additionalPodRangesConfig": {
      "podRangeInfo": [
        {
          "rangeName": "string",
          "utilization": 0
        }
      ],
      "podRangeNames": [
        "string"
      ]
    },
    "allowRouteOverlap": true,
    "clusterIpv4Cidr": "string",
    "clusterIpv4CidrBlock": "string",
    "clusterSecondaryRangeName": "string",
    "createSubnetwork": true,
    "defaultPodIpv4RangeUtilization": 0,
    "ipv6AccessType": "IPV6_ACCESS_TYPE_UNSPECIFIED",
    "nodeIpv4Cidr": "string",
    "nodeIpv4CidrBlock": "string",
    "podCidrOverprovisionConfig": {
      "disable": true
    },
    "servicesIpv4Cidr": "string",
    "servicesIpv4CidrBlock": "string",
    "servicesIpv6CidrBlock": "string",
    "servicesSecondaryRangeName": "string",
    "stackType": "STACK_TYPE_UNSPECIFIED",
    "subnetIpv6CidrBlock": "string",
    "subnetworkName": "string",
    "tpuIpv4CidrBlock": "string",
    "useIpAliases": true,
    "useRoutes": true
  },
  "labelFingerprint": "string",
  "legacyAbac": {
    "enabled": true
  },
  "location": "string",
  "locations": [
    "string"
  ],
  "loggingConfig": {
    "componentConfig": {
      "enableComponents": [
        "COMPONENT_UNSPECIFIED"
      ]
    }
  },
  "loggingService": "string",
  "maintenancePolicy": {
    "resourceVersion": "string",
    "window": {
      "dailyMaintenanceWindow": {
        "duration": "string",
        "startTime": "string"
      },
      "maintenanceExclusions": {
        "property1": {
          "endTime": "string",
          "maintenanceExclusionOptions": {
            "scope": "NO_UPGRADES"
          },
          "startTime": "string"
        },
        "property2": {
          "endTime": "string",
          "maintenanceExclusionOptions": {
            "scope": "NO_UPGRADES"
          },
          "startTime": "string"
        }
      },
      "recurringWindow": {
        "recurrence": "string",
        "window": {
          "endTime": "string",
          "maintenanceExclusionOptions": {
            "scope": "NO_UPGRADES"
          },
          "startTime": "string"
        }
      }
    }
  },
  "master": {},
  "masterAuth": {
    "clientCertificate": "string",
    "clientCertificateConfig": {
      "issueClientCertificate": true
    },
    "clientKey": "string",
    "clusterCaCertificate": "string",
    "password": "string",
    "username": "string"
  },
  "masterAuthorizedNetworksConfig": {
    "cidrBlocks": [
      {
        "cidrBlock": "string",
        "displayName": "string"
      }
    ],
    "enabled": true,
    "gcpPublicCidrsAccessEnabled": true
  },
  "masterIpv4CidrBlock": "string",
  "meshCertificates": {
    "enableCertificates": true
  },
  "monitoringConfig": {
    "advancedDatapathObservabilityConfig": {
      "enableMetrics": true,
      "enableRelay": true,
      "relayMode": "RELAY_MODE_UNSPECIFIED"
    },
    "componentConfig": {
      "enableComponents": [
        "COMPONENT_UNSPECIFIED"
      ]
    },
    "managedPrometheusConfig": {
      "enabled": true
    }
  },
  "monitoringService": "string",
  "name": "string",
  "network": "string",
  "networkConfig": {
    "datapathProvider": "DATAPATH_PROVIDER_UNSPECIFIED",
    "defaultSnatStatus": {
      "disabled": true
    },
    "dnsConfig": {
      "clusterDns": "PROVIDER_UNSPECIFIED",
      "clusterDnsDomain": "string",
      "clusterDnsScope": "DNS_SCOPE_UNSPECIFIED"
    },
    "enableFqdnNetworkPolicy": true,
    "enableIntraNodeVisibility": true,
    "enableL4ilbSubsetting": true,
    "enableMultiNetworking": true,
    "gatewayApiConfig": {
      "channel": "CHANNEL_UNSPECIFIED"
    },
    "inTransitEncryptionConfig": "IN_TRANSIT_ENCRYPTION_CONFIG_UNSPECIFIED",
    "network": "string",
    "networkPerformanceConfig": {
      "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
    },
    "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
    "serviceExternalIpsConfig": {
      "enabled": true
    },
    "subnetwork": "string"
  },
  "networkPolicy": {
    "enabled": true,
    "provider": "PROVIDER_UNSPECIFIED"
  },
  "nodeConfig": {
    "accelerators": [
      {
        "acceleratorCount": "string",
        "acceleratorType": "string",
        "gpuDriverInstallationConfig": {
          "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
        },
        "gpuPartitionSize": "string",
        "gpuSharingConfig": {
          "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
          "maxSharedClientsPerGpu": "string"
        },
        "maxTimeSharedClientsPerGpu": "string"
      }
    ],
    "advancedMachineFeatures": {
      "threadsPerCore": "string"
    },
    "bootDiskKmsKey": "string",
    "confidentialNodes": {
      "enabled": true
    },
    "diskSizeGb": 0,
    "diskType": "string",
    "enableConfidentialStorage": true,
    "ephemeralStorageConfig": {
      "localSsdCount": 0
    },
    "ephemeralStorageLocalSsdConfig": {
      "localSsdCount": 0
    },
    "fastSocket": {
      "enabled": true
    },
    "gcfsConfig": {
      "enabled": true
    },
    "gvnic": {
      "enabled": true
    },
    "hostMaintenancePolicy": {
      "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
      "opportunisticMaintenanceStrategy": {
        "maintenanceAvailabilityWindow": "string",
        "minNodesPerPool": "string",
        "nodeIdleTimeWindow": "string"
      }
    },
    "imageType": "string",
    "kubeletConfig": {
      "cpuCfsQuota": true,
      "cpuCfsQuotaPeriod": "string",
      "cpuManagerPolicy": "string",
      "insecureKubeletReadonlyPortEnabled": true,
      "podPidsLimit": "string"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "linuxNodeConfig": {
      "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
      "sysctls": {
        "property1": "string",
        "property2": "string"
      }
    },
    "localNvmeSsdBlockConfig": {
      "localSsdCount": 0
    },
    "localSsdCount": 0,
    "loggingConfig": {
      "variantConfig": {
        "variant": "VARIANT_UNSPECIFIED"
      }
    },
    "machineType": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "minCpuPlatform": "string",
    "nodeGroup": "string",
    "oauthScopes": [
      "string"
    ],
    "preemptible": true,
    "reservationAffinity": {
      "consumeReservationType": "UNSPECIFIED",
      "key": "string",
      "values": [
        "string"
      ]
    },
    "resourceLabels": {
      "property1": "string",
      "property2": "string"
    },
    "resourceManagerTags": {
      "tags": {
        "property1": "string",
        "property2": "string"
      }
    },
    "sandboxConfig": {
      "sandboxType": "string",
      "type": "UNSPECIFIED"
    },
    "secondaryBootDisks": [
      {
        "diskImage": "string",
        "mode": "MODE_UNSPECIFIED"
      }
    ],
    "serviceAccount": "string",
    "shieldedInstanceConfig": {
      "enableIntegrityMonitoring": true,
      "enableSecureBoot": true
    },
    "soleTenantConfig": {
      "nodeAffinities": [
        {
          "key": "string",
          "operator": "OPERATOR_UNSPECIFIED",
          "values": [
            "string"
          ]
        }
      ]
    },
    "spot": true,
    "tags": [
      "string"
    ],
    "taints": [
      {
        "effect": "EFFECT_UNSPECIFIED",
        "key": "string",
        "value": "string"
      }
    ],
    "windowsNodeConfig": {
      "osVersion": "OS_VERSION_UNSPECIFIED"
    },
    "workloadMetadataConfig": {
      "mode": "MODE_UNSPECIFIED",
      "nodeMetadata": "UNSPECIFIED"
    }
  },
  "nodeIpv4CidrSize": 0,
  "nodePoolAutoConfig": {
    "networkTags": {
      "tags": [
        "string"
      ]
    },
    "resourceManagerTags": {
      "tags": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "nodePoolDefaults": {
    "nodeConfigDefaults": {
      "gcfsConfig": {
        "enabled": true
      },
      "hostMaintenancePolicy": {
        "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
        "opportunisticMaintenanceStrategy": {
          "maintenanceAvailabilityWindow": "string",
          "minNodesPerPool": "string",
          "nodeIdleTimeWindow": "string"
        }
      },
      "loggingConfig": {
        "variantConfig": {
          "variant": "VARIANT_UNSPECIFIED"
        }
      }
    }
  },
  "nodePools": [
    {
      "autoscaling": {
        "autoprovisioned": true,
        "enabled": true,
        "locationPolicy": "LOCATION_POLICY_UNSPECIFIED",
        "maxNodeCount": 0,
        "minNodeCount": 0,
        "totalMaxNodeCount": 0,
        "totalMinNodeCount": 0
      },
      "bestEffortProvisioning": {
        "enabled": true,
        "minProvisionNodes": 0
      },
      "conditions": [
        {
          "canonicalCode": "OK",
          "code": "UNKNOWN",
          "message": "string"
        }
      ],
      "config": {
        "accelerators": [
          {
            "acceleratorCount": "string",
            "acceleratorType": "string",
            "gpuDriverInstallationConfig": {
              "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
            },
            "gpuPartitionSize": "string",
            "gpuSharingConfig": {
              "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
              "maxSharedClientsPerGpu": "string"
            },
            "maxTimeSharedClientsPerGpu": "string"
          }
        ],
        "advancedMachineFeatures": {
          "threadsPerCore": "string"
        },
        "bootDiskKmsKey": "string",
        "confidentialNodes": {
          "enabled": true
        },
        "diskSizeGb": 0,
        "diskType": "string",
        "enableConfidentialStorage": true,
        "ephemeralStorageConfig": {
          "localSsdCount": 0
        },
        "ephemeralStorageLocalSsdConfig": {
          "localSsdCount": 0
        },
        "fastSocket": {
          "enabled": true
        },
        "gcfsConfig": {
          "enabled": true
        },
        "gvnic": {
          "enabled": true
        },
        "hostMaintenancePolicy": {
          "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
          "opportunisticMaintenanceStrategy": {
            "maintenanceAvailabilityWindow": "string",
            "minNodesPerPool": "string",
            "nodeIdleTimeWindow": "string"
          }
        },
        "imageType": "string",
        "kubeletConfig": {
          "cpuCfsQuota": true,
          "cpuCfsQuotaPeriod": "string",
          "cpuManagerPolicy": "string",
          "insecureKubeletReadonlyPortEnabled": true,
          "podPidsLimit": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "linuxNodeConfig": {
          "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
          "sysctls": {
            "property1": "string",
            "property2": "string"
          }
        },
        "localNvmeSsdBlockConfig": {
          "localSsdCount": 0
        },
        "localSsdCount": 0,
        "loggingConfig": {
          "variantConfig": {
            "variant": "VARIANT_UNSPECIFIED"
          }
        },
        "machineType": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "minCpuPlatform": "string",
        "nodeGroup": "string",
        "oauthScopes": [
          "string"
        ],
        "preemptible": true,
        "reservationAffinity": {
          "consumeReservationType": "UNSPECIFIED",
          "key": "string",
          "values": [
            "string"
          ]
        },
        "resourceLabels": {
          "property1": "string",
          "property2": "string"
        },
        "resourceManagerTags": {
          "tags": {
            "property1": "string",
            "property2": "string"
          }
        },
        "sandboxConfig": {
          "sandboxType": "string",
          "type": "UNSPECIFIED"
        },
        "secondaryBootDisks": [
          {
            "diskImage": "string",
            "mode": "MODE_UNSPECIFIED"
          }
        ],
        "serviceAccount": "string",
        "shieldedInstanceConfig": {
          "enableIntegrityMonitoring": true,
          "enableSecureBoot": true
        },
        "soleTenantConfig": {
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ]
        },
        "spot": true,
        "tags": [
          "string"
        ],
        "taints": [
          {
            "effect": "EFFECT_UNSPECIFIED",
            "key": "string",
            "value": "string"
          }
        ],
        "windowsNodeConfig": {
          "osVersion": "OS_VERSION_UNSPECIFIED"
        },
        "workloadMetadataConfig": {
          "mode": "MODE_UNSPECIFIED",
          "nodeMetadata": "UNSPECIFIED"
        }
      },
      "etag": "string",
      "initialNodeCount": 0,
      "instanceGroupUrls": [
        "string"
      ],
      "locations": [
        "string"
      ],
      "management": {
        "autoRepair": true,
        "autoUpgrade": true,
        "upgradeOptions": {
          "autoUpgradeStartTime": "string",
          "description": "string"
        }
      },
      "maxPodsConstraint": {
        "maxPodsPerNode": "string"
      },
      "name": "string",
      "networkConfig": {
        "additionalNodeNetworkConfigs": [
          {
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "additionalPodNetworkConfigs": [
          {
            "maxPodsPerNode": {
              "maxPodsPerNode": "string"
            },
            "secondaryPodRange": "string",
            "subnetwork": "string"
          }
        ],
        "createPodRange": true,
        "enablePrivateNodes": true,
        "networkPerformanceConfig": {
          "externalIpEgressBandwidthTier": "TIER_UNSPECIFIED",
          "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
        },
        "podCidrOverprovisionConfig": {
          "disable": true
        },
        "podIpv4CidrBlock": "string",
        "podIpv4RangeUtilization": 0,
        "podRange": "string"
      },
      "placementPolicy": {
        "policyName": "string",
        "tpuTopology": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "podIpv4CidrSize": 0,
      "queuedProvisioning": {
        "enabled": true
      },
      "selfLink": "string",
      "status": "STATUS_UNSPECIFIED",
      "statusMessage": "string",
      "updateInfo": {
        "blueGreenInfo": {
          "blueInstanceGroupUrls": [
            "string"
          ],
          "bluePoolDeletionStartTime": "string",
          "greenInstanceGroupUrls": [
            "string"
          ],
          "greenPoolVersion": "string",
          "phase": "PHASE_UNSPECIFIED"
        }
      },
      "upgradeSettings": {
        "blueGreenSettings": {
          "autoscaledRolloutPolicy": {},
          "nodePoolSoakDuration": "string",
          "standardRolloutPolicy": {
            "batchNodeCount": 0,
            "batchPercentage": 0,
            "batchSoakDuration": "string"
          }
        },
        "maxSurge": 0,
        "maxUnavailable": 0,
        "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
      },
      "version": "string"
    }
  ],
  "notificationConfig": {
    "pubsub": {
      "enabled": true,
      "filter": {
        "eventType": [
          "EVENT_TYPE_UNSPECIFIED"
        ]
      },
      "topic": "string"
    }
  },
  "parentProductConfig": {
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "productName": "string"
  },
  "podSecurityPolicyConfig": {
    "enabled": true
  },
  "privateCluster": true,
  "privateClusterConfig": {
    "enablePrivateEndpoint": true,
    "enablePrivateNodes": true,
    "masterGlobalAccessConfig": {
      "enabled": true
    },
    "masterIpv4CidrBlock": "string",
    "peeringName": "string",
    "privateEndpoint": "string",
    "privateEndpointSubnetwork": "string",
    "publicEndpoint": "string"
  },
  "protectConfig": {
    "workloadConfig": {
      "auditMode": "MODE_UNSPECIFIED"
    },
    "workloadVulnerabilityMode": "WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED"
  },
  "releaseChannel": {
    "channel": "UNSPECIFIED"
  },
  "resourceLabels": {
    "property1": "string",
    "property2": "string"
  },
  "resourceUsageExportConfig": {
    "bigqueryDestination": {
      "datasetId": "string"
    },
    "consumptionMeteringConfig": {
      "enabled": true
    },
    "enableNetworkEgressMetering": true
  },
  "securityPostureConfig": {
    "mode": "MODE_UNSPECIFIED",
    "vulnerabilityMode": "VULNERABILITY_MODE_UNSPECIFIED"
  },
  "selfLink": "string",
  "servicesIpv4Cidr": "string",
  "shieldedNodes": {
    "enabled": true
  },
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "subnetwork": "string",
  "tpuConfig": {
    "enabled": true,
    "ipv4CidrBlock": "string",
    "useServiceNetworking": true
  },
  "tpuIpv4CidrBlock": "string",
  "verticalPodAutoscaling": {
    "enabled": true
  },
  "workloadAltsConfig": {
    "enableAlts": true
  },
  "workloadCertificates": {
    "enableCertificates": true
  },
  "workloadIdentityConfig": {
    "identityNamespace": "string",
    "identityProvider": "string",
    "workloadPool": "string"
  },
  "zone": "string"
}
```

A Google Kubernetes Engine cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addonsConfig|[AddonsConfig](#schemaaddonsconfig)|false|none|Configurations for the various addons available to run in the cluster.|
|authenticatorGroupsConfig|[AuthenticatorGroupsConfig](#schemaauthenticatorgroupsconfig)|false|none|Configuration controlling RBAC group membership information.|
|autopilot|[Autopilot](#schemaautopilot)|false|none|Autopilot configuration for the cluster.|
|autoscaling|[ClusterAutoscaling](#schemaclusterautoscaling)|false|none|Cluster-level autoscaling configuration.|
|binaryAuthorization|[BinaryAuthorization](#schemabinaryauthorization)|false|none|Configuration for Binary Authorization.|
|clusterIpv4Cidr|string|false|none|The IP address range of the container pods in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`). Leave blank to have one automatically chosen or specify a `/14` block in `10.0.0.0/8`.|
|clusterTelemetry|[ClusterTelemetry](#schemaclustertelemetry)|false|none|Telemetry integration for the cluster.|
|conditions|[[StatusCondition](#schemastatuscondition)]|false|none|Which conditions caused the current cluster state.|
|confidentialNodes|[ConfidentialNodes](#schemaconfidentialnodes)|false|none|Configuration of Confidential Nodes. All the nodes in the cluster will be Confidential VM once enabled.|
|costManagementConfig|[CostManagementConfig](#schemacostmanagementconfig)|false|none|Configuration for the fine-grained cost management feature.|
|createTime|string|false|none|[Output only] The time the cluster was created, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.|
|currentMasterVersion|string|false|none|[Output only] The current software version of the master endpoint.|
|currentNodeCount|integer(int32)|false|none|**Deprecated.** [Output only] The number of nodes currently in the cluster. Deprecated. Call Kubernetes API directly to retrieve node information.|
|currentNodeVersion|string|false|none|**Deprecated.** [Output only] Deprecated, use [NodePool.version](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters.nodePools) instead. The current version of the node software components. If they are currently at multiple versions because they're in the process of being upgraded, this reflects the minimum version of all nodes.|
|databaseEncryption|[DatabaseEncryption](#schemadatabaseencryption)|false|none|Configuration of etcd encryption.|
|defaultMaxPodsConstraint|[MaxPodsConstraint](#schemamaxpodsconstraint)|false|none|The default constraint on the maximum number of pods that can be run simultaneously on a node in the node pool of this cluster. Only honored if cluster created with IP Alias support.|
|description|string|false|none|An optional description of this cluster.|
|enableK8sBetaApis|[K8sBetaAPIConfig](#schemak8sbetaapiconfig)|false|none|Kubernetes open source beta apis enabled on the cluster. Only beta apis.|
|enableKubernetesAlpha|boolean|false|none|Kubernetes alpha features are enabled on this cluster. This includes alpha API groups (e.g. v1beta1) and features that may not be production ready in the kubernetes version of the master and nodes. The cluster has no SLA for uptime and master/node upgrades are disabled. Alpha enabled clusters are automatically deleted thirty days after creation.|
|enableTpu|boolean|false|none|Enable the ability to use Cloud TPUs in this cluster. This field is deprecated, use tpu_config.enabled instead.|
|endpoint|string|false|none|[Output only] The IP address of this cluster's master endpoint. The endpoint can be accessed from the internet at `https://username:password@endpoint/`. See the `masterAuth` property of this resource for username and password information.|
|enterpriseConfig|[EnterpriseConfig](#schemaenterpriseconfig)|false|none|GKE Enterprise Configuration.|
|etag|string|false|none|This checksum is computed by the server based on the value of cluster fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding.|
|expireTime|string|false|none|[Output only] The time the cluster will be automatically deleted in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.|
|fleet|[Fleet](#schemafleet)|false|none|Fleet information for the cluster.|
|id|string|false|read-only|Output only. Unique id for the cluster.|
|identityServiceConfig|[IdentityServiceConfig](#schemaidentityserviceconfig)|false|none|Configuration for Identity Service component.|
|initialClusterVersion|string|false|none|The initial Kubernetes version for this cluster. Valid versions are those found in validMasterVersions returned by getServerConfig. The version can be upgraded over time; such upgrades are reflected in currentMasterVersion and currentNodeVersion. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "","-": picks the default Kubernetes version|
|initialNodeCount|integer(int32)|false|none|**Deprecated.** The number of nodes to create in this cluster. You must ensure that your Compute Engine [resource quota](https://cloud.google.com/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota. For requests, this field should only be used in lieu of a "node_pool" object, since this configuration (along with the "node_config") will be used to create a "NodePool" object with an auto-generated name. Do not use this and a node_pool at the same time. This field is deprecated, use node_pool.initial_node_count instead.|
|instanceGroupUrls|[string]|false|none|**Deprecated.** Deprecated. Use node_pools.instance_group_urls.|
|ipAllocationPolicy|[IPAllocationPolicy](#schemaipallocationpolicy)|false|none|Configuration for cluster IP allocation.|
|labelFingerprint|string|false|none|The fingerprint of the set of labels for this cluster.|
|legacyAbac|[LegacyAbac](#schemalegacyabac)|false|none|Configuration for the legacy ABAC authorization mode.|
|location|string|false|none|[Output only] The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) or [region](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) in which the cluster resides.|
|locations|[string]|false|none|The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. This field provides a default value if [NodePool.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) are not specified during node pool creation. Warning: changing cluster locations will update the [NodePool.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) of all node pools and will result in nodes being added and/or removed.|
|loggingConfig|[LoggingConfig](#schemaloggingconfig)|false|none|Logging configuration for the cluster.|
|loggingService|string|false|none|The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions.|
|maintenancePolicy|[MaintenancePolicy](#schemamaintenancepolicy)|false|none|Configure the maintenance policy for this cluster.|
|master|[Master](#schemamaster)|false|none|Configuration for master components.|
|masterAuth|[MasterAuth](#schemamasterauth)|false|none|The authentication information for accessing the master endpoint. If unspecified, the defaults are used: For clusters before v1.12, if master_auth is unspecified, `username` will be set to "admin", a random password will be generated, and a client certificate will be issued.|
|masterAuthorizedNetworksConfig|[MasterAuthorizedNetworksConfig](#schemamasterauthorizednetworksconfig)|false|none|The configuration options for master authorized networks feature.|
|masterIpv4CidrBlock|string|false|none|**Deprecated.** The IP prefix in CIDR notation to use for the hosted master network. This prefix will be used for assigning private IP addresses to the master or set of masters, as well as the ILB VIP. This field is deprecated, use private_cluster_config.master_ipv4_cidr_block instead.|
|meshCertificates|[MeshCertificates](#schemameshcertificates)|false|none|Configuration for issuance of mTLS keys and certificates to Kubernetes pods.|
|monitoringConfig|[MonitoringConfig](#schemamonitoringconfig)|false|none|Monitoring configuration for the cluster.|
|monitoringService|string|false|none|The monitoring service the cluster should use to write metrics. Currently available options: * "monitoring.googleapis.com/kubernetes" - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions.|
|name|string|false|none|The name of this cluster. The name must be unique within this project and location (e.g. zone or region), and can be up to 40 characters with the following restrictions: * Lowercase letters, numbers, and hyphens only. * Must start with a letter. * Must end with a number or a letter.|
|network|string|false|none|The name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the cluster is connected. If left unspecified, the `default` network will be used. On output this shows the network ID instead of the name.|
|networkConfig|[NetworkConfig](#schemanetworkconfig)|false|none|Configuration for cluster networking.|
|networkPolicy|[NetworkPolicy](#schemanetworkpolicy)|false|none|Configuration options for the NetworkPolicy feature.|
|nodeConfig|[NodeConfig](#schemanodeconfig)|false|none|**Deprecated.** Parameters used in creating the cluster's nodes. For requests, this field should only be used in lieu of a "node_pool" object, since this configuration (along with the "initial_node_count") will be used to create a "NodePool" object with an auto-generated name. Do not use this and a node_pool at the same time. For responses, this field will be populated with the node configuration of the first node pool. (For configuration of each node pool, see `node_pool.config`) If unspecified, the defaults are used. This field is deprecated, use node_pool.config instead.|
|nodeIpv4CidrSize|integer(int32)|false|none|[Output only] The size of the address space on each node for hosting containers. This is provisioned from within the `container_ipv4_cidr` range. This field will only be set when cluster is in route-based network mode.|
|nodePoolAutoConfig|[NodePoolAutoConfig](#schemanodepoolautoconfig)|false|none|Node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters.|
|nodePoolDefaults|[NodePoolDefaults](#schemanodepooldefaults)|false|none|Default NodePool settings for the entire cluster. These settings are overridden if specified on the specific NodePool object.|
|nodePools|[[NodePool](#schemanodepool)]|false|none|The node pools associated with this cluster. This field should not be set if "node_config" or "initial_node_count" are specified.|
|notificationConfig|[NotificationConfig](#schemanotificationconfig)|false|none|Notification configuration of the cluster.|
|parentProductConfig|[ParentProductConfig](#schemaparentproductconfig)|false|none|The configuration of the parent product of the cluster. This field is used by Google internal products that are built on top of the GKE cluster and take the ownership of the cluster.|
|podSecurityPolicyConfig|[PodSecurityPolicyConfig](#schemapodsecuritypolicyconfig)|false|none|Configuration for the PodSecurityPolicy feature.|
|privateCluster|boolean|false|none|**Deprecated.** If this is a private cluster setup. Private clusters are clusters that, by default have no external IP addresses on the nodes and where nodes and the master communicate over private IP addresses. This field is deprecated, use private_cluster_config.enable_private_nodes instead.|
|privateClusterConfig|[PrivateClusterConfig](#schemaprivateclusterconfig)|false|none|Configuration for private cluster.|
|protectConfig|[ProtectConfig](#schemaprotectconfig)|false|none|**Deprecated.** Deprecated: Use SecurityPostureConfig instead. Enable/Disable Protect API features for the cluster.|
|releaseChannel|[ReleaseChannel](#schemareleasechannel)|false|none|Release channel configuration. If left unspecified on cluster creation and a version is specified, the cluster is enrolled in the most mature release channel where the version is available (first checking STABLE, then REGULAR, and finally RAPID). Otherwise, if no release channel configuration and no version is specified, the cluster is enrolled in the REGULAR channel with its default version.|
|resourceLabels|object|false|none|The resource labels for the cluster to use to annotate any related Google Compute Engine resources.|
|resourceUsageExportConfig|[ResourceUsageExportConfig](#schemaresourceusageexportconfig)|false|none|Configuration for exporting resource usages. Resource usage export is disabled when this config unspecified.|
|securityPostureConfig|[SecurityPostureConfig](#schemasecuritypostureconfig)|false|none|Enable/Disable Security Posture API features for the cluster.|
|selfLink|string|false|none|[Output only] Server-defined URL for the resource.|
|servicesIpv4Cidr|string|false|none|[Output only] The IP address range of the Kubernetes services in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`). Service addresses are typically put in the last `/16` from the container CIDR.|
|shieldedNodes|[ShieldedNodes](#schemashieldednodes)|false|none|Shielded Nodes configuration.|
|status|string|false|none|[Output only] The current status of this cluster.|
|statusMessage|string|false|none|**Deprecated.** [Output only] Deprecated. Use conditions instead. Additional information about the current status of this cluster, if available.|
|subnetwork|string|false|none|The name of the Google Compute Engine [subnetwork](https://cloud.google.com/compute/docs/subnetworks) to which the cluster is connected. On output this shows the subnetwork ID instead of the name.|
|tpuConfig|[TpuConfig](#schematpuconfig)|false|none|Configuration for Cloud TPU support;|
|tpuIpv4CidrBlock|string|false|none|[Output only] The IP address range of the Cloud TPUs in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`).|
|verticalPodAutoscaling|[VerticalPodAutoscaling](#schemaverticalpodautoscaling)|false|none|Cluster-level Vertical Pod Autoscaling configuration.|
|workloadAltsConfig|[WorkloadALTSConfig](#schemaworkloadaltsconfig)|false|none|Configuration for direct-path (via ALTS) with workload identity.|
|workloadCertificates|[WorkloadCertificates](#schemaworkloadcertificates)|false|none|Configuration for issuance of mTLS keys and certificates to Kubernetes pods.|
|workloadIdentityConfig|[WorkloadIdentityConfig](#schemaworkloadidentityconfig)|false|none|Configuration for the use of Kubernetes Service Accounts in GCP IAM policies.|
|zone|string|false|none|**Deprecated.** [Output only] The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use location instead.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|STATUS_UNSPECIFIED|
|status|PROVISIONING|
|status|RUNNING|
|status|RECONCILING|
|status|STOPPING|
|status|ERROR|
|status|DEGRADED|

<h2 id="tocS_ClusterAutoscaling">ClusterAutoscaling</h2>
<!-- backwards compatibility -->
<a id="schemaclusterautoscaling"></a>
<a id="schema_ClusterAutoscaling"></a>
<a id="tocSclusterautoscaling"></a>
<a id="tocsclusterautoscaling"></a>

```json
{
  "autoprovisioningLocations": [
    "string"
  ],
  "autoprovisioningNodePoolDefaults": {
    "bootDiskKmsKey": "string",
    "diskSizeGb": 0,
    "diskType": "string",
    "imageType": "string",
    "insecureKubeletReadonlyPortEnabled": true,
    "management": {
      "autoRepair": true,
      "autoUpgrade": true,
      "upgradeOptions": {
        "autoUpgradeStartTime": "string",
        "description": "string"
      }
    },
    "minCpuPlatform": "string",
    "oauthScopes": [
      "string"
    ],
    "serviceAccount": "string",
    "shieldedInstanceConfig": {
      "enableIntegrityMonitoring": true,
      "enableSecureBoot": true
    },
    "upgradeSettings": {
      "blueGreenSettings": {
        "autoscaledRolloutPolicy": {},
        "nodePoolSoakDuration": "string",
        "standardRolloutPolicy": {
          "batchNodeCount": 0,
          "batchPercentage": 0,
          "batchSoakDuration": "string"
        }
      },
      "maxSurge": 0,
      "maxUnavailable": 0,
      "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
    }
  },
  "autoscalingProfile": "PROFILE_UNSPECIFIED",
  "enableNodeAutoprovisioning": true,
  "resourceLimits": [
    {
      "maximum": "string",
      "minimum": "string",
      "resourceType": "string"
    }
  ]
}
```

ClusterAutoscaling contains global, per-cluster information required by Cluster Autoscaler to automatically adjust the size of the cluster and create/delete node pools based on the current needs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoprovisioningLocations|[string]|false|none|The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the NodePool's nodes can be created by NAP.|
|autoprovisioningNodePoolDefaults|[AutoprovisioningNodePoolDefaults](#schemaautoprovisioningnodepooldefaults)|false|none|AutoprovisioningNodePoolDefaults contains defaults for a node pool created by NAP.|
|autoscalingProfile|string|false|none|Defines autoscaling behaviour.|
|enableNodeAutoprovisioning|boolean|false|none|Enables automatic node pool creation and deletion.|
|resourceLimits|[[ResourceLimit](#schemaresourcelimit)]|false|none|Contains global constraints regarding minimum and maximum amount of resources in the cluster.|

#### Enumerated Values

|Property|Value|
|---|---|
|autoscalingProfile|PROFILE_UNSPECIFIED|
|autoscalingProfile|OPTIMIZE_UTILIZATION|
|autoscalingProfile|BALANCED|

<h2 id="tocS_ClusterNetworkPerformanceConfig">ClusterNetworkPerformanceConfig</h2>
<!-- backwards compatibility -->
<a id="schemaclusternetworkperformanceconfig"></a>
<a id="schema_ClusterNetworkPerformanceConfig"></a>
<a id="tocSclusternetworkperformanceconfig"></a>
<a id="tocsclusternetworkperformanceconfig"></a>

```json
{
  "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
}
```

Configuration of all network bandwidth tiers

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalEgressBandwidthTier|string|false|none|Specifies the total network bandwidth tier for the NodePool.|

#### Enumerated Values

|Property|Value|
|---|---|
|totalEgressBandwidthTier|TIER_UNSPECIFIED|
|totalEgressBandwidthTier|TIER_1|

<h2 id="tocS_ClusterTelemetry">ClusterTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemaclustertelemetry"></a>
<a id="schema_ClusterTelemetry"></a>
<a id="tocSclustertelemetry"></a>
<a id="tocsclustertelemetry"></a>

```json
{
  "type": "UNSPECIFIED"
}
```

Telemetry integration for the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of the integration.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UNSPECIFIED|
|type|DISABLED|
|type|ENABLED|
|type|SYSTEM_ONLY|

<h2 id="tocS_ClusterUpdate">ClusterUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaclusterupdate"></a>
<a id="schema_ClusterUpdate"></a>
<a id="tocSclusterupdate"></a>
<a id="tocsclusterupdate"></a>

```json
{
  "additionalPodRangesConfig": {
    "podRangeInfo": [
      {
        "rangeName": "string",
        "utilization": 0
      }
    ],
    "podRangeNames": [
      "string"
    ]
  },
  "desiredAddonsConfig": {
    "cloudRunConfig": {
      "disabled": true,
      "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED"
    },
    "configConnectorConfig": {
      "enabled": true
    },
    "dnsCacheConfig": {
      "enabled": true
    },
    "gcePersistentDiskCsiDriverConfig": {
      "enabled": true
    },
    "gcpFilestoreCsiDriverConfig": {
      "enabled": true
    },
    "gcsFuseCsiDriverConfig": {
      "enabled": true
    },
    "gkeBackupAgentConfig": {
      "enabled": true
    },
    "horizontalPodAutoscaling": {
      "disabled": true
    },
    "httpLoadBalancing": {
      "disabled": true
    },
    "istioConfig": {
      "auth": "AUTH_NONE",
      "disabled": true
    },
    "kalmConfig": {
      "enabled": true
    },
    "kubernetesDashboard": {
      "disabled": true
    },
    "networkPolicyConfig": {
      "disabled": true
    },
    "statefulHaConfig": {
      "enabled": true
    }
  },
  "desiredAuthenticatorGroupsConfig": {
    "enabled": true,
    "securityGroup": "string"
  },
  "desiredAutopilotWorkloadPolicyConfig": {
    "allowNetAdmin": true
  },
  "desiredBinaryAuthorization": {
    "enabled": true,
    "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
    "policyBindings": [
      {
        "name": "string"
      }
    ]
  },
  "desiredClusterAutoscaling": {
    "autoprovisioningLocations": [
      "string"
    ],
    "autoprovisioningNodePoolDefaults": {
      "bootDiskKmsKey": "string",
      "diskSizeGb": 0,
      "diskType": "string",
      "imageType": "string",
      "insecureKubeletReadonlyPortEnabled": true,
      "management": {
        "autoRepair": true,
        "autoUpgrade": true,
        "upgradeOptions": {
          "autoUpgradeStartTime": "string",
          "description": "string"
        }
      },
      "minCpuPlatform": "string",
      "oauthScopes": [
        "string"
      ],
      "serviceAccount": "string",
      "shieldedInstanceConfig": {
        "enableIntegrityMonitoring": true,
        "enableSecureBoot": true
      },
      "upgradeSettings": {
        "blueGreenSettings": {
          "autoscaledRolloutPolicy": {},
          "nodePoolSoakDuration": "string",
          "standardRolloutPolicy": {
            "batchNodeCount": 0,
            "batchPercentage": 0,
            "batchSoakDuration": "string"
          }
        },
        "maxSurge": 0,
        "maxUnavailable": 0,
        "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
      }
    },
    "autoscalingProfile": "PROFILE_UNSPECIFIED",
    "enableNodeAutoprovisioning": true,
    "resourceLimits": [
      {
        "maximum": "string",
        "minimum": "string",
        "resourceType": "string"
      }
    ]
  },
  "desiredClusterTelemetry": {
    "type": "UNSPECIFIED"
  },
  "desiredCostManagementConfig": {
    "enabled": true
  },
  "desiredDatabaseEncryption": {
    "keyName": "string",
    "state": "UNKNOWN"
  },
  "desiredDatapathProvider": "DATAPATH_PROVIDER_UNSPECIFIED",
  "desiredDefaultSnatStatus": {
    "disabled": true
  },
  "desiredDnsConfig": {
    "clusterDns": "PROVIDER_UNSPECIFIED",
    "clusterDnsDomain": "string",
    "clusterDnsScope": "DNS_SCOPE_UNSPECIFIED"
  },
  "desiredEnableFqdnNetworkPolicy": true,
  "desiredEnablePrivateEndpoint": true,
  "desiredFleet": {
    "membership": "string",
    "preRegistered": true,
    "project": "string"
  },
  "desiredGatewayApiConfig": {
    "channel": "CHANNEL_UNSPECIFIED"
  },
  "desiredGcfsConfig": {
    "enabled": true
  },
  "desiredHostMaintenancePolicy": {
    "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
    "opportunisticMaintenanceStrategy": {
      "maintenanceAvailabilityWindow": "string",
      "minNodesPerPool": "string",
      "nodeIdleTimeWindow": "string"
    }
  },
  "desiredIdentityServiceConfig": {
    "enabled": true
  },
  "desiredImageType": "string",
  "desiredInTransitEncryptionConfig": "IN_TRANSIT_ENCRYPTION_CONFIG_UNSPECIFIED",
  "desiredIntraNodeVisibilityConfig": {
    "enabled": true
  },
  "desiredK8sBetaApis": {
    "enabledApis": [
      "string"
    ]
  },
  "desiredL4ilbSubsettingConfig": {
    "enabled": true
  },
  "desiredLocations": [
    "string"
  ],
  "desiredLoggingConfig": {
    "componentConfig": {
      "enableComponents": [
        "COMPONENT_UNSPECIFIED"
      ]
    }
  },
  "desiredLoggingService": "string",
  "desiredMaster": {},
  "desiredMasterAuthorizedNetworksConfig": {
    "cidrBlocks": [
      {
        "cidrBlock": "string",
        "displayName": "string"
      }
    ],
    "enabled": true,
    "gcpPublicCidrsAccessEnabled": true
  },
  "desiredMasterVersion": "string",
  "desiredMeshCertificates": {
    "enableCertificates": true
  },
  "desiredMonitoringConfig": {
    "advancedDatapathObservabilityConfig": {
      "enableMetrics": true,
      "enableRelay": true,
      "relayMode": "RELAY_MODE_UNSPECIFIED"
    },
    "componentConfig": {
      "enableComponents": [
        "COMPONENT_UNSPECIFIED"
      ]
    },
    "managedPrometheusConfig": {
      "enabled": true
    }
  },
  "desiredMonitoringService": "string",
  "desiredNetworkPerformanceConfig": {
    "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
  },
  "desiredNodePoolAutoConfigNetworkTags": {
    "tags": [
      "string"
    ]
  },
  "desiredNodePoolAutoConfigResourceManagerTags": {
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  },
  "desiredNodePoolAutoscaling": {
    "autoprovisioned": true,
    "enabled": true,
    "locationPolicy": "LOCATION_POLICY_UNSPECIFIED",
    "maxNodeCount": 0,
    "minNodeCount": 0,
    "totalMaxNodeCount": 0,
    "totalMinNodeCount": 0
  },
  "desiredNodePoolId": "string",
  "desiredNodePoolLoggingConfig": {
    "variantConfig": {
      "variant": "VARIANT_UNSPECIFIED"
    }
  },
  "desiredNodeVersion": "string",
  "desiredNotificationConfig": {
    "pubsub": {
      "enabled": true,
      "filter": {
        "eventType": [
          "EVENT_TYPE_UNSPECIFIED"
        ]
      },
      "topic": "string"
    }
  },
  "desiredParentProductConfig": {
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "productName": "string"
  },
  "desiredPodSecurityPolicyConfig": {
    "enabled": true
  },
  "desiredPrivateClusterConfig": {
    "enablePrivateEndpoint": true,
    "enablePrivateNodes": true,
    "masterGlobalAccessConfig": {
      "enabled": true
    },
    "masterIpv4CidrBlock": "string",
    "peeringName": "string",
    "privateEndpoint": "string",
    "privateEndpointSubnetwork": "string",
    "publicEndpoint": "string"
  },
  "desiredPrivateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
  "desiredProtectConfig": {
    "workloadConfig": {
      "auditMode": "MODE_UNSPECIFIED"
    },
    "workloadVulnerabilityMode": "WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED"
  },
  "desiredReleaseChannel": {
    "channel": "UNSPECIFIED"
  },
  "desiredResourceUsageExportConfig": {
    "bigqueryDestination": {
      "datasetId": "string"
    },
    "consumptionMeteringConfig": {
      "enabled": true
    },
    "enableNetworkEgressMetering": true
  },
  "desiredSecurityPostureConfig": {
    "mode": "MODE_UNSPECIFIED",
    "vulnerabilityMode": "VULNERABILITY_MODE_UNSPECIFIED"
  },
  "desiredServiceExternalIpsConfig": {
    "enabled": true
  },
  "desiredShieldedNodes": {
    "enabled": true
  },
  "desiredStackType": "STACK_TYPE_UNSPECIFIED",
  "desiredTpuConfig": {
    "enabled": true,
    "ipv4CidrBlock": "string",
    "useServiceNetworking": true
  },
  "desiredVerticalPodAutoscaling": {
    "enabled": true
  },
  "desiredWorkloadAltsConfig": {
    "enableAlts": true
  },
  "desiredWorkloadCertificates": {
    "enableCertificates": true
  },
  "desiredWorkloadIdentityConfig": {
    "identityNamespace": "string",
    "identityProvider": "string",
    "workloadPool": "string"
  },
  "enableK8sBetaApis": {
    "enabledApis": [
      "string"
    ]
  },
  "etag": "string",
  "removedAdditionalPodRangesConfig": {
    "podRangeInfo": [
      {
        "rangeName": "string",
        "utilization": 0
      }
    ],
    "podRangeNames": [
      "string"
    ]
  }
}
```

ClusterUpdate describes an update to the cluster. Exactly one update can be applied to a cluster with each request, so at most one field can be provided.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalPodRangesConfig|[AdditionalPodRangesConfig](#schemaadditionalpodrangesconfig)|false|none|The additional pod ranges to be added to the cluster. These pod ranges can be used by node pools to allocate pod IPs.|
|desiredAddonsConfig|[AddonsConfig](#schemaaddonsconfig)|false|none|Configurations for the various addons available to run in the cluster.|
|desiredAuthenticatorGroupsConfig|[AuthenticatorGroupsConfig](#schemaauthenticatorgroupsconfig)|false|none|AuthenticatorGroupsConfig specifies the config for the cluster security groups settings.|
|desiredAutopilotWorkloadPolicyConfig|[WorkloadPolicyConfig](#schemaworkloadpolicyconfig)|false|none|The desired workload policy configuration for the autopilot cluster.|
|desiredBinaryAuthorization|[BinaryAuthorization](#schemabinaryauthorization)|false|none|The desired configuration options for the Binary Authorization feature.|
|desiredClusterAutoscaling|[ClusterAutoscaling](#schemaclusterautoscaling)|false|none|Cluster-level autoscaling configuration.|
|desiredClusterTelemetry|[ClusterTelemetry](#schemaclustertelemetry)|false|none|The desired telemetry integration for the cluster.|
|desiredCostManagementConfig|[CostManagementConfig](#schemacostmanagementconfig)|false|none|The desired configuration for the fine-grained cost management feature.|
|desiredDatabaseEncryption|[DatabaseEncryption](#schemadatabaseencryption)|false|none|Configuration of etcd encryption.|
|desiredDatapathProvider|string|false|none|The desired datapath provider for the cluster.|
|desiredDefaultSnatStatus|[DefaultSnatStatus](#schemadefaultsnatstatus)|false|none|The desired status of whether to disable default sNAT for this cluster.|
|desiredDnsConfig|[DNSConfig](#schemadnsconfig)|false|none|DNSConfig contains clusterDNS config for this cluster.|
|desiredEnableFqdnNetworkPolicy|boolean|false|none|Enable/Disable FQDN Network Policy for the cluster.|
|desiredEnablePrivateEndpoint|boolean|false|none|Enable/Disable private endpoint for the cluster's master.|
|desiredFleet|[Fleet](#schemafleet)|false|none|The desired fleet configuration for the cluster.|
|desiredGatewayApiConfig|[GatewayAPIConfig](#schemagatewayapiconfig)|false|none|The desired config of Gateway API on this cluster.|
|desiredGcfsConfig|[GcfsConfig](#schemagcfsconfig)|false|none|The desired GCFS config for the cluster.|
|desiredHostMaintenancePolicy|[HostMaintenancePolicy](#schemahostmaintenancepolicy)|false|none|HostMaintenancePolicy contains the desired maintenance policy for the Google Compute Engine hosts.|
|desiredIdentityServiceConfig|[IdentityServiceConfig](#schemaidentityserviceconfig)|false|none|The desired Identity Service component configuration.|
|desiredImageType|string|false|none|The desired image type for the node pool. NOTE: Set the "desired_node_pool" field as well.|
|desiredInTransitEncryptionConfig|string|false|none|Specify the details of in-transit encryption.|
|desiredIntraNodeVisibilityConfig|[IntraNodeVisibilityConfig](#schemaintranodevisibilityconfig)|false|none|The desired config of Intra-node visibility.|
|desiredK8sBetaApis|[K8sBetaAPIConfig](#schemak8sbetaapiconfig)|false|none|Beta APIs enabled for cluster.|
|desiredL4ilbSubsettingConfig|[ILBSubsettingConfig](#schemailbsubsettingconfig)|false|none|The desired L4 Internal Load Balancer Subsetting configuration.|
|desiredLocations|[string]|false|none|The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. This list must always include the cluster's primary zone. Warning: changing cluster locations will update the locations of all node pools and will result in nodes being added and/or removed.|
|desiredLoggingConfig|[LoggingConfig](#schemaloggingconfig)|false|none|The desired logging configuration.|
|desiredLoggingService|string|false|none|The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions.|
|desiredMaster|[Master](#schemamaster)|false|none|Configuration for master components.|
|desiredMasterAuthorizedNetworksConfig|[MasterAuthorizedNetworksConfig](#schemamasterauthorizednetworksconfig)|false|none|The desired configuration options for master authorized networks feature.|
|desiredMasterVersion|string|false|none|The Kubernetes version to change the master to. The only valid value is the latest supported version. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the default Kubernetes version|
|desiredMeshCertificates|[MeshCertificates](#schemameshcertificates)|false|none|Configuration for issuance of mTLS keys and certificates to Kubernetes pods.|
|desiredMonitoringConfig|[MonitoringConfig](#schemamonitoringconfig)|false|none|The desired monitoring configuration.|
|desiredMonitoringService|string|false|none|The monitoring service the cluster should use to write metrics. Currently available options: * "monitoring.googleapis.com/kubernetes" - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions.|
|desiredNetworkPerformanceConfig|[ClusterNetworkPerformanceConfig](#schemaclusternetworkperformanceconfig)|false|none|The desired network performance config.|
|desiredNodePoolAutoConfigNetworkTags|[NetworkTags](#schemanetworktags)|false|none|The desired network tags that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters.|
|desiredNodePoolAutoConfigResourceManagerTags|[ResourceManagerTags](#schemaresourcemanagertags)|false|none|The desired resource manager tags that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters.|
|desiredNodePoolAutoscaling|[NodePoolAutoscaling](#schemanodepoolautoscaling)|false|none|Autoscaler configuration for the node pool specified in desired_node_pool_id. If there is only one pool in the cluster and desired_node_pool_id is not provided then the change applies to that single node pool.|
|desiredNodePoolId|string|false|none|The node pool to be upgraded. This field is mandatory if "desired_node_version", "desired_image_family", "desired_node_pool_autoscaling", or "desired_workload_metadata_config" is specified and there is more than one node pool on the cluster.|
|desiredNodePoolLoggingConfig|[NodePoolLoggingConfig](#schemanodepoolloggingconfig)|false|none|The desired node pool logging configuration defaults for the cluster.|
|desiredNodeVersion|string|false|none|The Kubernetes version to change the nodes to (typically an upgrade). Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the Kubernetes master version|
|desiredNotificationConfig|[NotificationConfig](#schemanotificationconfig)|false|none|The desired notification configuration.|
|desiredParentProductConfig|[ParentProductConfig](#schemaparentproductconfig)|false|none|The desired parent product config for the cluster.|
|desiredPodSecurityPolicyConfig|[PodSecurityPolicyConfig](#schemapodsecuritypolicyconfig)|false|none|The desired configuration options for the PodSecurityPolicy feature.|
|desiredPrivateClusterConfig|[PrivateClusterConfig](#schemaprivateclusterconfig)|false|none|The desired private cluster configuration.|
|desiredPrivateIpv6GoogleAccess|string|false|none|The desired state of IPv6 connectivity to Google Services.|
|desiredProtectConfig|[ProtectConfig](#schemaprotectconfig)|false|none|**Deprecated.** Deprecated: Use DesiredSecurityPostureConfig instead. Enable/Disable Protect API features for the cluster.|
|desiredReleaseChannel|[ReleaseChannel](#schemareleasechannel)|false|none|The desired release channel configuration.|
|desiredResourceUsageExportConfig|[ResourceUsageExportConfig](#schemaresourceusageexportconfig)|false|none|The desired configuration for exporting resource usage.|
|desiredSecurityPostureConfig|[SecurityPostureConfig](#schemasecuritypostureconfig)|false|none|Enable/Disable Security Posture API features for the cluster.|
|desiredServiceExternalIpsConfig|[ServiceExternalIPsConfig](#schemaserviceexternalipsconfig)|false|none|ServiceExternalIPsConfig specifies the config for the use of Services with ExternalIPs field.|
|desiredShieldedNodes|[ShieldedNodes](#schemashieldednodes)|false|none|Configuration for Shielded Nodes.|
|desiredStackType|string|false|none|The desired stack type of the cluster. If a stack type is provided and does not match the current stack type of the cluster, update will attempt to change the stack type to the new type.|
|desiredTpuConfig|[TpuConfig](#schematpuconfig)|false|none|The desired Cloud TPU configuration.|
|desiredVerticalPodAutoscaling|[VerticalPodAutoscaling](#schemaverticalpodautoscaling)|false|none|Cluster-level Vertical Pod Autoscaling configuration.|
|desiredWorkloadAltsConfig|[WorkloadALTSConfig](#schemaworkloadaltsconfig)|false|none|Configuration for direct-path (via ALTS) with workload identity.|
|desiredWorkloadCertificates|[WorkloadCertificates](#schemaworkloadcertificates)|false|none|Configuration for issuance of mTLS keys and certificates to Kubernetes pods.|
|desiredWorkloadIdentityConfig|[WorkloadIdentityConfig](#schemaworkloadidentityconfig)|false|none|Configuration for Workload Identity.|
|enableK8sBetaApis|[K8sBetaAPIConfig](#schemak8sbetaapiconfig)|false|none|Kubernetes open source beta apis enabled on the cluster. Only beta apis|
|etag|string|false|none|The current etag of the cluster. If an etag is provided and does not match the current etag of the cluster, update will be blocked and an ABORTED error will be returned.|
|removedAdditionalPodRangesConfig|[AdditionalPodRangesConfig](#schemaadditionalpodrangesconfig)|false|none|The additional pod ranges that are to be removed from the cluster. The pod ranges specified here must have been specified earlier in the 'additional_pod_ranges_config' argument.|

#### Enumerated Values

|Property|Value|
|---|---|
|desiredDatapathProvider|DATAPATH_PROVIDER_UNSPECIFIED|
|desiredDatapathProvider|LEGACY_DATAPATH|
|desiredDatapathProvider|ADVANCED_DATAPATH|
|desiredInTransitEncryptionConfig|IN_TRANSIT_ENCRYPTION_CONFIG_UNSPECIFIED|
|desiredInTransitEncryptionConfig|IN_TRANSIT_ENCRYPTION_DISABLED|
|desiredInTransitEncryptionConfig|IN_TRANSIT_ENCRYPTION_INTER_NODE_TRANSPARENT|
|desiredPrivateIpv6GoogleAccess|PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED|
|desiredPrivateIpv6GoogleAccess|PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED|
|desiredPrivateIpv6GoogleAccess|PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE|
|desiredPrivateIpv6GoogleAccess|PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL|
|desiredStackType|STACK_TYPE_UNSPECIFIED|
|desiredStackType|IPV4|
|desiredStackType|IPV4_IPV6|

<h2 id="tocS_CompleteIPRotationRequest">CompleteIPRotationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacompleteiprotationrequest"></a>
<a id="schema_CompleteIPRotationRequest"></a>
<a id="tocScompleteiprotationrequest"></a>
<a id="tocscompleteiprotationrequest"></a>

```json
{
  "clusterId": "string",
  "name": "string",
  "projectId": "string",
  "zone": "string"
}
```

CompleteIPRotationRequest moves the cluster master back into single-IP mode.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterId|string|false|none|**Deprecated.** Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.|
|name|string|false|none|The name (project, location, cluster name) of the cluster to complete IP rotation. Specified in the format `projects/*/locations/*/clusters/*`.|
|projectId|string|false|none|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|string|false|none|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

<h2 id="tocS_CompleteNodePoolUpgradeRequest">CompleteNodePoolUpgradeRequest</h2>
<!-- backwards compatibility -->
<a id="schemacompletenodepoolupgraderequest"></a>
<a id="schema_CompleteNodePoolUpgradeRequest"></a>
<a id="tocScompletenodepoolupgraderequest"></a>
<a id="tocscompletenodepoolupgraderequest"></a>

```json
{}
```

CompleteNodePoolUpgradeRequest sets the name of target node pool to complete upgrade.

<h2 id="tocS_ConfidentialNodes">ConfidentialNodes</h2>
<!-- backwards compatibility -->
<a id="schemaconfidentialnodes"></a>
<a id="schema_ConfidentialNodes"></a>
<a id="tocSconfidentialnodes"></a>
<a id="tocsconfidentialnodes"></a>

```json
{
  "enabled": true
}
```

ConfidentialNodes is configuration for the confidential nodes feature, which makes nodes run on confidential VMs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether Confidential Nodes feature is enabled.|

<h2 id="tocS_ConfigConnectorConfig">ConfigConnectorConfig</h2>
<!-- backwards compatibility -->
<a id="schemaconfigconnectorconfig"></a>
<a id="schema_ConfigConnectorConfig"></a>
<a id="tocSconfigconnectorconfig"></a>
<a id="tocsconfigconnectorconfig"></a>

```json
{
  "enabled": true
}
```

Configuration options for the Config Connector add-on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether Cloud Connector is enabled for this cluster.|

<h2 id="tocS_ConsumptionMeteringConfig">ConsumptionMeteringConfig</h2>
<!-- backwards compatibility -->
<a id="schemaconsumptionmeteringconfig"></a>
<a id="schema_ConsumptionMeteringConfig"></a>
<a id="tocSconsumptionmeteringconfig"></a>
<a id="tocsconsumptionmeteringconfig"></a>

```json
{
  "enabled": true
}
```

Parameters for controlling consumption metering.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether to enable consumption metering for this cluster. If enabled, a second BigQuery table will be created to hold resource consumption records.|

<h2 id="tocS_CostManagementConfig">CostManagementConfig</h2>
<!-- backwards compatibility -->
<a id="schemacostmanagementconfig"></a>
<a id="schema_CostManagementConfig"></a>
<a id="tocScostmanagementconfig"></a>
<a id="tocscostmanagementconfig"></a>

```json
{
  "enabled": true
}
```

Configuration for fine-grained cost management feature.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether the feature is enabled or not.|

<h2 id="tocS_CreateClusterRequest">CreateClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateclusterrequest"></a>
<a id="schema_CreateClusterRequest"></a>
<a id="tocScreateclusterrequest"></a>
<a id="tocscreateclusterrequest"></a>

```json
{
  "cluster": {
    "addonsConfig": {
      "cloudRunConfig": {
        "disabled": true,
        "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED"
      },
      "configConnectorConfig": {
        "enabled": true
      },
      "dnsCacheConfig": {
        "enabled": true
      },
      "gcePersistentDiskCsiDriverConfig": {
        "enabled": true
      },
      "gcpFilestoreCsiDriverConfig": {
        "enabled": true
      },
      "gcsFuseCsiDriverConfig": {
        "enabled": true
      },
      "gkeBackupAgentConfig": {
        "enabled": true
      },
      "horizontalPodAutoscaling": {
        "disabled": true
      },
      "httpLoadBalancing": {
        "disabled": true
      },
      "istioConfig": {
        "auth": "AUTH_NONE",
        "disabled": true
      },
      "kalmConfig": {
        "enabled": true
      },
      "kubernetesDashboard": {
        "disabled": true
      },
      "networkPolicyConfig": {
        "disabled": true
      },
      "statefulHaConfig": {
        "enabled": true
      }
    },
    "authenticatorGroupsConfig": {
      "enabled": true,
      "securityGroup": "string"
    },
    "autopilot": {
      "conversionStatus": {
        "state": "STATE_UNSPECIFIED"
      },
      "enabled": true,
      "workloadPolicyConfig": {
        "allowNetAdmin": true
      }
    },
    "autoscaling": {
      "autoprovisioningLocations": [
        "string"
      ],
      "autoprovisioningNodePoolDefaults": {
        "bootDiskKmsKey": "string",
        "diskSizeGb": 0,
        "diskType": "string",
        "imageType": "string",
        "insecureKubeletReadonlyPortEnabled": true,
        "management": {
          "autoRepair": true,
          "autoUpgrade": true,
          "upgradeOptions": {
            "autoUpgradeStartTime": "string",
            "description": "string"
          }
        },
        "minCpuPlatform": "string",
        "oauthScopes": [
          "string"
        ],
        "serviceAccount": "string",
        "shieldedInstanceConfig": {
          "enableIntegrityMonitoring": true,
          "enableSecureBoot": true
        },
        "upgradeSettings": {
          "blueGreenSettings": {
            "autoscaledRolloutPolicy": {},
            "nodePoolSoakDuration": "string",
            "standardRolloutPolicy": {
              "batchNodeCount": 0,
              "batchPercentage": 0,
              "batchSoakDuration": "string"
            }
          },
          "maxSurge": 0,
          "maxUnavailable": 0,
          "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
        }
      },
      "autoscalingProfile": "PROFILE_UNSPECIFIED",
      "enableNodeAutoprovisioning": true,
      "resourceLimits": [
        {
          "maximum": "string",
          "minimum": "string",
          "resourceType": "string"
        }
      ]
    },
    "binaryAuthorization": {
      "enabled": true,
      "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
      "policyBindings": [
        {
          "name": "string"
        }
      ]
    },
    "clusterIpv4Cidr": "string",
    "clusterTelemetry": {
      "type": "UNSPECIFIED"
    },
    "conditions": [
      {
        "canonicalCode": "OK",
        "code": "UNKNOWN",
        "message": "string"
      }
    ],
    "confidentialNodes": {
      "enabled": true
    },
    "costManagementConfig": {
      "enabled": true
    },
    "createTime": "string",
    "currentMasterVersion": "string",
    "currentNodeCount": 0,
    "currentNodeVersion": "string",
    "databaseEncryption": {
      "keyName": "string",
      "state": "UNKNOWN"
    },
    "defaultMaxPodsConstraint": {
      "maxPodsPerNode": "string"
    },
    "description": "string",
    "enableK8sBetaApis": {
      "enabledApis": [
        "string"
      ]
    },
    "enableKubernetesAlpha": true,
    "enableTpu": true,
    "endpoint": "string",
    "enterpriseConfig": {
      "clusterTier": "CLUSTER_TIER_UNSPECIFIED"
    },
    "etag": "string",
    "expireTime": "string",
    "fleet": {
      "membership": "string",
      "preRegistered": true,
      "project": "string"
    },
    "id": "string",
    "identityServiceConfig": {
      "enabled": true
    },
    "initialClusterVersion": "string",
    "initialNodeCount": 0,
    "instanceGroupUrls": [
      "string"
    ],
    "ipAllocationPolicy": {
      "additionalPodRangesConfig": {
        "podRangeInfo": [
          {
            "rangeName": "string",
            "utilization": 0
          }
        ],
        "podRangeNames": [
          "string"
        ]
      },
      "allowRouteOverlap": true,
      "clusterIpv4Cidr": "string",
      "clusterIpv4CidrBlock": "string",
      "clusterSecondaryRangeName": "string",
      "createSubnetwork": true,
      "defaultPodIpv4RangeUtilization": 0,
      "ipv6AccessType": "IPV6_ACCESS_TYPE_UNSPECIFIED",
      "nodeIpv4Cidr": "string",
      "nodeIpv4CidrBlock": "string",
      "podCidrOverprovisionConfig": {
        "disable": true
      },
      "servicesIpv4Cidr": "string",
      "servicesIpv4CidrBlock": "string",
      "servicesIpv6CidrBlock": "string",
      "servicesSecondaryRangeName": "string",
      "stackType": "STACK_TYPE_UNSPECIFIED",
      "subnetIpv6CidrBlock": "string",
      "subnetworkName": "string",
      "tpuIpv4CidrBlock": "string",
      "useIpAliases": true,
      "useRoutes": true
    },
    "labelFingerprint": "string",
    "legacyAbac": {
      "enabled": true
    },
    "location": "string",
    "locations": [
      "string"
    ],
    "loggingConfig": {
      "componentConfig": {
        "enableComponents": [
          "COMPONENT_UNSPECIFIED"
        ]
      }
    },
    "loggingService": "string",
    "maintenancePolicy": {
      "resourceVersion": "string",
      "window": {
        "dailyMaintenanceWindow": {
          "duration": "string",
          "startTime": "string"
        },
        "maintenanceExclusions": {
          "property1": {
            "endTime": "string",
            "maintenanceExclusionOptions": {
              "scope": "NO_UPGRADES"
            },
            "startTime": "string"
          },
          "property2": {
            "endTime": "string",
            "maintenanceExclusionOptions": {
              "scope": "NO_UPGRADES"
            },
            "startTime": "string"
          }
        },
        "recurringWindow": {
          "recurrence": "string",
          "window": {
            "endTime": "string",
            "maintenanceExclusionOptions": {
              "scope": "NO_UPGRADES"
            },
            "startTime": "string"
          }
        }
      }
    },
    "master": {},
    "masterAuth": {
      "clientCertificate": "string",
      "clientCertificateConfig": {
        "issueClientCertificate": true
      },
      "clientKey": "string",
      "clusterCaCertificate": "string",
      "password": "string",
      "username": "string"
    },
    "masterAuthorizedNetworksConfig": {
      "cidrBlocks": [
        {
          "cidrBlock": "string",
          "displayName": "string"
        }
      ],
      "enabled": true,
      "gcpPublicCidrsAccessEnabled": true
    },
    "masterIpv4CidrBlock": "string",
    "meshCertificates": {
      "enableCertificates": true
    },
    "monitoringConfig": {
      "advancedDatapathObservabilityConfig": {
        "enableMetrics": true,
        "enableRelay": true,
        "relayMode": "RELAY_MODE_UNSPECIFIED"
      },
      "componentConfig": {
        "enableComponents": [
          "COMPONENT_UNSPECIFIED"
        ]
      },
      "managedPrometheusConfig": {
        "enabled": true
      }
    },
    "monitoringService": "string",
    "name": "string",
    "network": "string",
    "networkConfig": {
      "datapathProvider": "DATAPATH_PROVIDER_UNSPECIFIED",
      "defaultSnatStatus": {
        "disabled": true
      },
      "dnsConfig": {
        "clusterDns": "PROVIDER_UNSPECIFIED",
        "clusterDnsDomain": "string",
        "clusterDnsScope": "DNS_SCOPE_UNSPECIFIED"
      },
      "enableFqdnNetworkPolicy": true,
      "enableIntraNodeVisibility": true,
      "enableL4ilbSubsetting": true,
      "enableMultiNetworking": true,
      "gatewayApiConfig": {
        "channel": "CHANNEL_UNSPECIFIED"
      },
      "inTransitEncryptionConfig": "IN_TRANSIT_ENCRYPTION_CONFIG_UNSPECIFIED",
      "network": "string",
      "networkPerformanceConfig": {
        "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
      },
      "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
      "serviceExternalIpsConfig": {
        "enabled": true
      },
      "subnetwork": "string"
    },
    "networkPolicy": {
      "enabled": true,
      "provider": "PROVIDER_UNSPECIFIED"
    },
    "nodeConfig": {
      "accelerators": [
        {
          "acceleratorCount": "string",
          "acceleratorType": "string",
          "gpuDriverInstallationConfig": {
            "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
          },
          "gpuPartitionSize": "string",
          "gpuSharingConfig": {
            "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
            "maxSharedClientsPerGpu": "string"
          },
          "maxTimeSharedClientsPerGpu": "string"
        }
      ],
      "advancedMachineFeatures": {
        "threadsPerCore": "string"
      },
      "bootDiskKmsKey": "string",
      "confidentialNodes": {
        "enabled": true
      },
      "diskSizeGb": 0,
      "diskType": "string",
      "enableConfidentialStorage": true,
      "ephemeralStorageConfig": {
        "localSsdCount": 0
      },
      "ephemeralStorageLocalSsdConfig": {
        "localSsdCount": 0
      },
      "fastSocket": {
        "enabled": true
      },
      "gcfsConfig": {
        "enabled": true
      },
      "gvnic": {
        "enabled": true
      },
      "hostMaintenancePolicy": {
        "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
        "opportunisticMaintenanceStrategy": {
          "maintenanceAvailabilityWindow": "string",
          "minNodesPerPool": "string",
          "nodeIdleTimeWindow": "string"
        }
      },
      "imageType": "string",
      "kubeletConfig": {
        "cpuCfsQuota": true,
        "cpuCfsQuotaPeriod": "string",
        "cpuManagerPolicy": "string",
        "insecureKubeletReadonlyPortEnabled": true,
        "podPidsLimit": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "linuxNodeConfig": {
        "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
        "sysctls": {
          "property1": "string",
          "property2": "string"
        }
      },
      "localNvmeSsdBlockConfig": {
        "localSsdCount": 0
      },
      "localSsdCount": 0,
      "loggingConfig": {
        "variantConfig": {
          "variant": "VARIANT_UNSPECIFIED"
        }
      },
      "machineType": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "minCpuPlatform": "string",
      "nodeGroup": "string",
      "oauthScopes": [
        "string"
      ],
      "preemptible": true,
      "reservationAffinity": {
        "consumeReservationType": "UNSPECIFIED",
        "key": "string",
        "values": [
          "string"
        ]
      },
      "resourceLabels": {
        "property1": "string",
        "property2": "string"
      },
      "resourceManagerTags": {
        "tags": {
          "property1": "string",
          "property2": "string"
        }
      },
      "sandboxConfig": {
        "sandboxType": "string",
        "type": "UNSPECIFIED"
      },
      "secondaryBootDisks": [
        {
          "diskImage": "string",
          "mode": "MODE_UNSPECIFIED"
        }
      ],
      "serviceAccount": "string",
      "shieldedInstanceConfig": {
        "enableIntegrityMonitoring": true,
        "enableSecureBoot": true
      },
      "soleTenantConfig": {
        "nodeAffinities": [
          {
            "key": "string",
            "operator": "OPERATOR_UNSPECIFIED",
            "values": [
              "string"
            ]
          }
        ]
      },
      "spot": true,
      "tags": [
        "string"
      ],
      "taints": [
        {
          "effect": "EFFECT_UNSPECIFIED",
          "key": "string",
          "value": "string"
        }
      ],
      "windowsNodeConfig": {
        "osVersion": "OS_VERSION_UNSPECIFIED"
      },
      "workloadMetadataConfig": {
        "mode": "MODE_UNSPECIFIED",
        "nodeMetadata": "UNSPECIFIED"
      }
    },
    "nodeIpv4CidrSize": 0,
    "nodePoolAutoConfig": {
      "networkTags": {
        "tags": [
          "string"
        ]
      },
      "resourceManagerTags": {
        "tags": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "nodePoolDefaults": {
      "nodeConfigDefaults": {
        "gcfsConfig": {
          "enabled": true
        },
        "hostMaintenancePolicy": {
          "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
          "opportunisticMaintenanceStrategy": {
            "maintenanceAvailabilityWindow": "string",
            "minNodesPerPool": "string",
            "nodeIdleTimeWindow": "string"
          }
        },
        "loggingConfig": {
          "variantConfig": {
            "variant": "VARIANT_UNSPECIFIED"
          }
        }
      }
    },
    "nodePools": [
      {
        "autoscaling": {
          "autoprovisioned": true,
          "enabled": true,
          "locationPolicy": "LOCATION_POLICY_UNSPECIFIED",
          "maxNodeCount": 0,
          "minNodeCount": 0,
          "totalMaxNodeCount": 0,
          "totalMinNodeCount": 0
        },
        "bestEffortProvisioning": {
          "enabled": true,
          "minProvisionNodes": 0
        },
        "conditions": [
          {
            "canonicalCode": "OK",
            "code": "UNKNOWN",
            "message": "string"
          }
        ],
        "config": {
          "accelerators": [
            {
              "acceleratorCount": "string",
              "acceleratorType": "string",
              "gpuDriverInstallationConfig": {
                "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
              },
              "gpuPartitionSize": "string",
              "gpuSharingConfig": {
                "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
                "maxSharedClientsPerGpu": "string"
              },
              "maxTimeSharedClientsPerGpu": "string"
            }
          ],
          "advancedMachineFeatures": {
            "threadsPerCore": "string"
          },
          "bootDiskKmsKey": "string",
          "confidentialNodes": {
            "enabled": true
          },
          "diskSizeGb": 0,
          "diskType": "string",
          "enableConfidentialStorage": true,
          "ephemeralStorageConfig": {
            "localSsdCount": 0
          },
          "ephemeralStorageLocalSsdConfig": {
            "localSsdCount": 0
          },
          "fastSocket": {
            "enabled": true
          },
          "gcfsConfig": {
            "enabled": true
          },
          "gvnic": {
            "enabled": true
          },
          "hostMaintenancePolicy": {
            "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
            "opportunisticMaintenanceStrategy": {
              "maintenanceAvailabilityWindow": "string",
              "minNodesPerPool": "string",
              "nodeIdleTimeWindow": "string"
            }
          },
          "imageType": "string",
          "kubeletConfig": {
            "cpuCfsQuota": true,
            "cpuCfsQuotaPeriod": "string",
            "cpuManagerPolicy": "string",
            "insecureKubeletReadonlyPortEnabled": true,
            "podPidsLimit": "string"
          },
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "linuxNodeConfig": {
            "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
            "sysctls": {
              "property1": "string",
              "property2": "string"
            }
          },
          "localNvmeSsdBlockConfig": {
            "localSsdCount": 0
          },
          "localSsdCount": 0,
          "loggingConfig": {
            "variantConfig": {
              "variant": "VARIANT_UNSPECIFIED"
            }
          },
          "machineType": "string",
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "minCpuPlatform": "string",
          "nodeGroup": "string",
          "oauthScopes": [
            "string"
          ],
          "preemptible": true,
          "reservationAffinity": {
            "consumeReservationType": "UNSPECIFIED",
            "key": "string",
            "values": [
              "string"
            ]
          },
          "resourceLabels": {
            "property1": "string",
            "property2": "string"
          },
          "resourceManagerTags": {
            "tags": {
              "property1": "string",
              "property2": "string"
            }
          },
          "sandboxConfig": {
            "sandboxType": "string",
            "type": "UNSPECIFIED"
          },
          "secondaryBootDisks": [
            {
              "diskImage": "string",
              "mode": "MODE_UNSPECIFIED"
            }
          ],
          "serviceAccount": "string",
          "shieldedInstanceConfig": {
            "enableIntegrityMonitoring": true,
            "enableSecureBoot": true
          },
          "soleTenantConfig": {
            "nodeAffinities": [
              {
                "key": "string",
                "operator": "OPERATOR_UNSPECIFIED",
                "values": [
                  "string"
                ]
              }
            ]
          },
          "spot": true,
          "tags": [
            "string"
          ],
          "taints": [
            {
              "effect": "EFFECT_UNSPECIFIED",
              "key": "string",
              "value": "string"
            }
          ],
          "windowsNodeConfig": {
            "osVersion": "OS_VERSION_UNSPECIFIED"
          },
          "workloadMetadataConfig": {
            "mode": "MODE_UNSPECIFIED",
            "nodeMetadata": "UNSPECIFIED"
          }
        },
        "etag": "string",
        "initialNodeCount": 0,
        "instanceGroupUrls": [
          "string"
        ],
        "locations": [
          "string"
        ],
        "management": {
          "autoRepair": true,
          "autoUpgrade": true,
          "upgradeOptions": {
            "autoUpgradeStartTime": "string",
            "description": "string"
          }
        },
        "maxPodsConstraint": {
          "maxPodsPerNode": "string"
        },
        "name": "string",
        "networkConfig": {
          "additionalNodeNetworkConfigs": [
            {
              "network": "string",
              "subnetwork": "string"
            }
          ],
          "additionalPodNetworkConfigs": [
            {
              "maxPodsPerNode": {
                "maxPodsPerNode": "string"
              },
              "secondaryPodRange": "string",
              "subnetwork": "string"
            }
          ],
          "createPodRange": true,
          "enablePrivateNodes": true,
          "networkPerformanceConfig": {
            "externalIpEgressBandwidthTier": "TIER_UNSPECIFIED",
            "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
          },
          "podCidrOverprovisionConfig": {
            "disable": true
          },
          "podIpv4CidrBlock": "string",
          "podIpv4RangeUtilization": 0,
          "podRange": "string"
        },
        "placementPolicy": {
          "policyName": "string",
          "tpuTopology": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "podIpv4CidrSize": 0,
        "queuedProvisioning": {
          "enabled": true
        },
        "selfLink": "string",
        "status": "STATUS_UNSPECIFIED",
        "statusMessage": "string",
        "updateInfo": {
          "blueGreenInfo": {
            "blueInstanceGroupUrls": [
              "string"
            ],
            "bluePoolDeletionStartTime": "string",
            "greenInstanceGroupUrls": [
              "string"
            ],
            "greenPoolVersion": "string",
            "phase": "PHASE_UNSPECIFIED"
          }
        },
        "upgradeSettings": {
          "blueGreenSettings": {
            "autoscaledRolloutPolicy": {},
            "nodePoolSoakDuration": "string",
            "standardRolloutPolicy": {
              "batchNodeCount": 0,
              "batchPercentage": 0,
              "batchSoakDuration": "string"
            }
          },
          "maxSurge": 0,
          "maxUnavailable": 0,
          "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
        },
        "version": "string"
      }
    ],
    "notificationConfig": {
      "pubsub": {
        "enabled": true,
        "filter": {
          "eventType": [
            "EVENT_TYPE_UNSPECIFIED"
          ]
        },
        "topic": "string"
      }
    },
    "parentProductConfig": {
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "productName": "string"
    },
    "podSecurityPolicyConfig": {
      "enabled": true
    },
    "privateCluster": true,
    "privateClusterConfig": {
      "enablePrivateEndpoint": true,
      "enablePrivateNodes": true,
      "masterGlobalAccessConfig": {
        "enabled": true
      },
      "masterIpv4CidrBlock": "string",
      "peeringName": "string",
      "privateEndpoint": "string",
      "privateEndpointSubnetwork": "string",
      "publicEndpoint": "string"
    },
    "protectConfig": {
      "workloadConfig": {
        "auditMode": "MODE_UNSPECIFIED"
      },
      "workloadVulnerabilityMode": "WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED"
    },
    "releaseChannel": {
      "channel": "UNSPECIFIED"
    },
    "resourceLabels": {
      "property1": "string",
      "property2": "string"
    },
    "resourceUsageExportConfig": {
      "bigqueryDestination": {
        "datasetId": "string"
      },
      "consumptionMeteringConfig": {
        "enabled": true
      },
      "enableNetworkEgressMetering": true
    },
    "securityPostureConfig": {
      "mode": "MODE_UNSPECIFIED",
      "vulnerabilityMode": "VULNERABILITY_MODE_UNSPECIFIED"
    },
    "selfLink": "string",
    "servicesIpv4Cidr": "string",
    "shieldedNodes": {
      "enabled": true
    },
    "status": "STATUS_UNSPECIFIED",
    "statusMessage": "string",
    "subnetwork": "string",
    "tpuConfig": {
      "enabled": true,
      "ipv4CidrBlock": "string",
      "useServiceNetworking": true
    },
    "tpuIpv4CidrBlock": "string",
    "verticalPodAutoscaling": {
      "enabled": true
    },
    "workloadAltsConfig": {
      "enableAlts": true
    },
    "workloadCertificates": {
      "enableCertificates": true
    },
    "workloadIdentityConfig": {
      "identityNamespace": "string",
      "identityProvider": "string",
      "workloadPool": "string"
    },
    "zone": "string"
  },
  "parent": "string",
  "projectId": "string",
  "zone": "string"
}
```

CreateClusterRequest creates a cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|[Cluster](#schemacluster)|false|none|Required. A [cluster resource](https://cloud.google.com/container-engine/reference/rest/v1beta1/projects.locations.clusters)|
|parent|string|false|none|The parent (project and location) where the cluster will be created. Specified in the format `projects/*/locations/*`.|
|projectId|string|false|none|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.|
|zone|string|false|none|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.|

<h2 id="tocS_CreateNodePoolRequest">CreateNodePoolRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatenodepoolrequest"></a>
<a id="schema_CreateNodePoolRequest"></a>
<a id="tocScreatenodepoolrequest"></a>
<a id="tocscreatenodepoolrequest"></a>

```json
{
  "clusterId": "string",
  "nodePool": {
    "autoscaling": {
      "autoprovisioned": true,
      "enabled": true,
      "locationPolicy": "LOCATION_POLICY_UNSPECIFIED",
      "maxNodeCount": 0,
      "minNodeCount": 0,
      "totalMaxNodeCount": 0,
      "totalMinNodeCount": 0
    },
    "bestEffortProvisioning": {
      "enabled": true,
      "minProvisionNodes": 0
    },
    "conditions": [
      {
        "canonicalCode": "OK",
        "code": "UNKNOWN",
        "message": "string"
      }
    ],
    "config": {
      "accelerators": [
        {
          "acceleratorCount": "string",
          "acceleratorType": "string",
          "gpuDriverInstallationConfig": {
            "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
          },
          "gpuPartitionSize": "string",
          "gpuSharingConfig": {
            "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
            "maxSharedClientsPerGpu": "string"
          },
          "maxTimeSharedClientsPerGpu": "string"
        }
      ],
      "advancedMachineFeatures": {
        "threadsPerCore": "string"
      },
      "bootDiskKmsKey": "string",
      "confidentialNodes": {
        "enabled": true
      },
      "diskSizeGb": 0,
      "diskType": "string",
      "enableConfidentialStorage": true,
      "ephemeralStorageConfig": {
        "localSsdCount": 0
      },
      "ephemeralStorageLocalSsdConfig": {
        "localSsdCount": 0
      },
      "fastSocket": {
        "enabled": true
      },
      "gcfsConfig": {
        "enabled": true
      },
      "gvnic": {
        "enabled": true
      },
      "hostMaintenancePolicy": {
        "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
        "opportunisticMaintenanceStrategy": {
          "maintenanceAvailabilityWindow": "string",
          "minNodesPerPool": "string",
          "nodeIdleTimeWindow": "string"
        }
      },
      "imageType": "string",
      "kubeletConfig": {
        "cpuCfsQuota": true,
        "cpuCfsQuotaPeriod": "string",
        "cpuManagerPolicy": "string",
        "insecureKubeletReadonlyPortEnabled": true,
        "podPidsLimit": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "linuxNodeConfig": {
        "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
        "sysctls": {
          "property1": "string",
          "property2": "string"
        }
      },
      "localNvmeSsdBlockConfig": {
        "localSsdCount": 0
      },
      "localSsdCount": 0,
      "loggingConfig": {
        "variantConfig": {
          "variant": "VARIANT_UNSPECIFIED"
        }
      },
      "machineType": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "minCpuPlatform": "string",
      "nodeGroup": "string",
      "oauthScopes": [
        "string"
      ],
      "preemptible": true,
      "reservationAffinity": {
        "consumeReservationType": "UNSPECIFIED",
        "key": "string",
        "values": [
          "string"
        ]
      },
      "resourceLabels": {
        "property1": "string",
        "property2": "string"
      },
      "resourceManagerTags": {
        "tags": {
          "property1": "string",
          "property2": "string"
        }
      },
      "sandboxConfig": {
        "sandboxType": "string",
        "type": "UNSPECIFIED"
      },
      "secondaryBootDisks": [
        {
          "diskImage": "string",
          "mode": "MODE_UNSPECIFIED"
        }
      ],
      "serviceAccount": "string",
      "shieldedInstanceConfig": {
        "enableIntegrityMonitoring": true,
        "enableSecureBoot": true
      },
      "soleTenantConfig": {
        "nodeAffinities": [
          {
            "key": "string",
            "operator": "OPERATOR_UNSPECIFIED",
            "values": [
              "string"
            ]
          }
        ]
      },
      "spot": true,
      "tags": [
        "string"
      ],
      "taints": [
        {
          "effect": "EFFECT_UNSPECIFIED",
          "key": "string",
          "value": "string"
        }
      ],
      "windowsNodeConfig": {
        "osVersion": "OS_VERSION_UNSPECIFIED"
      },
      "workloadMetadataConfig": {
        "mode": "MODE_UNSPECIFIED",
        "nodeMetadata": "UNSPECIFIED"
      }
    },
    "etag": "string",
    "initialNodeCount": 0,
    "instanceGroupUrls": [
      "string"
    ],
    "locations": [
      "string"
    ],
    "management": {
      "autoRepair": true,
      "autoUpgrade": true,
      "upgradeOptions": {
        "autoUpgradeStartTime": "string",
        "description": "string"
      }
    },
    "maxPodsConstraint": {
      "maxPodsPerNode": "string"
    },
    "name": "string",
    "networkConfig": {
      "additionalNodeNetworkConfigs": [
        {
          "network": "string",
          "subnetwork": "string"
        }
      ],
      "additionalPodNetworkConfigs": [
        {
          "maxPodsPerNode": {
            "maxPodsPerNode": "string"
          },
          "secondaryPodRange": "string",
          "subnetwork": "string"
        }
      ],
      "createPodRange": true,
      "enablePrivateNodes": true,
      "networkPerformanceConfig": {
        "externalIpEgressBandwidthTier": "TIER_UNSPECIFIED",
        "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
      },
      "podCidrOverprovisionConfig": {
        "disable": true
      },
      "podIpv4CidrBlock": "string",
      "podIpv4RangeUtilization": 0,
      "podRange": "string"
    },
    "placementPolicy": {
      "policyName": "string",
      "tpuTopology": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "podIpv4CidrSize": 0,
    "queuedProvisioning": {
      "enabled": true
    },
    "selfLink": "string",
    "status": "STATUS_UNSPECIFIED",
    "statusMessage": "string",
    "updateInfo": {
      "blueGreenInfo": {
        "blueInstanceGroupUrls": [
          "string"
        ],
        "bluePoolDeletionStartTime": "string",
        "greenInstanceGroupUrls": [
          "string"
        ],
        "greenPoolVersion": "string",
        "phase": "PHASE_UNSPECIFIED"
      }
    },
    "upgradeSettings": {
      "blueGreenSettings": {
        "autoscaledRolloutPolicy": {},
        "nodePoolSoakDuration": "string",
        "standardRolloutPolicy": {
          "batchNodeCount": 0,
          "batchPercentage": 0,
          "batchSoakDuration": "string"
        }
      },
      "maxSurge": 0,
      "maxUnavailable": 0,
      "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
    },
    "version": "string"
  },
  "parent": "string",
  "projectId": "string",
  "zone": "string"
}
```

CreateNodePoolRequest creates a node pool for a cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterId|string|false|none|**Deprecated.** Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.|
|nodePool|[NodePool](#schemanodepool)|false|none|Required. The node pool to create.|
|parent|string|false|none|The parent (project, location, cluster name) where the node pool will be created. Specified in the format `projects/*/locations/*/clusters/*`.|
|projectId|string|false|none|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.|
|zone|string|false|none|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.|

<h2 id="tocS_DNSConfig">DNSConfig</h2>
<!-- backwards compatibility -->
<a id="schemadnsconfig"></a>
<a id="schema_DNSConfig"></a>
<a id="tocSdnsconfig"></a>
<a id="tocsdnsconfig"></a>

```json
{
  "clusterDns": "PROVIDER_UNSPECIFIED",
  "clusterDnsDomain": "string",
  "clusterDnsScope": "DNS_SCOPE_UNSPECIFIED"
}
```

DNSConfig contains the desired set of options for configuring clusterDNS.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterDns|string|false|none|cluster_dns indicates which in-cluster DNS provider should be used.|
|clusterDnsDomain|string|false|none|cluster_dns_domain is the suffix used for all cluster service records.|
|clusterDnsScope|string|false|none|cluster_dns_scope indicates the scope of access to cluster DNS records.|

#### Enumerated Values

|Property|Value|
|---|---|
|clusterDns|PROVIDER_UNSPECIFIED|
|clusterDns|PLATFORM_DEFAULT|
|clusterDns|CLOUD_DNS|
|clusterDns|KUBE_DNS|
|clusterDnsScope|DNS_SCOPE_UNSPECIFIED|
|clusterDnsScope|CLUSTER_SCOPE|
|clusterDnsScope|VPC_SCOPE|

<h2 id="tocS_DailyMaintenanceWindow">DailyMaintenanceWindow</h2>
<!-- backwards compatibility -->
<a id="schemadailymaintenancewindow"></a>
<a id="schema_DailyMaintenanceWindow"></a>
<a id="tocSdailymaintenancewindow"></a>
<a id="tocsdailymaintenancewindow"></a>

```json
{
  "duration": "string",
  "startTime": "string"
}
```

Time window specified for daily maintenance operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|string|false|none|[Output only] Duration of the time window, automatically chosen to be smallest possible in the given scenario.|
|startTime|string|false|none|Time within the maintenance window to start the maintenance operations. It must be in format "HH:MM", where HH : [00-23] and MM : [00-59] GMT.|

<h2 id="tocS_DatabaseEncryption">DatabaseEncryption</h2>
<!-- backwards compatibility -->
<a id="schemadatabaseencryption"></a>
<a id="schema_DatabaseEncryption"></a>
<a id="tocSdatabaseencryption"></a>
<a id="tocsdatabaseencryption"></a>

```json
{
  "keyName": "string",
  "state": "UNKNOWN"
}
```

Configuration of etcd encryption.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyName|string|false|none|Name of CloudKMS key to use for the encryption of secrets in etcd. Ex. projects/my-project/locations/global/keyRings/my-ring/cryptoKeys/my-key|
|state|string|false|none|The desired state of etcd encryption.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|UNKNOWN|
|state|ENCRYPTED|
|state|DECRYPTED|

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
{
  "day": 0,
  "month": 0,
  "year": 0
}
```

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|false|none|Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.|
|month|integer(int32)|false|none|Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.|
|year|integer(int32)|false|none|Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.|

<h2 id="tocS_DefaultSnatStatus">DefaultSnatStatus</h2>
<!-- backwards compatibility -->
<a id="schemadefaultsnatstatus"></a>
<a id="schema_DefaultSnatStatus"></a>
<a id="tocSdefaultsnatstatus"></a>
<a id="tocsdefaultsnatstatus"></a>

```json
{
  "disabled": true
}
```

DefaultSnatStatus contains the desired state of whether default sNAT should be disabled on the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|Disables cluster default sNAT rules.|

<h2 id="tocS_DnsCacheConfig">DnsCacheConfig</h2>
<!-- backwards compatibility -->
<a id="schemadnscacheconfig"></a>
<a id="schema_DnsCacheConfig"></a>
<a id="tocSdnscacheconfig"></a>
<a id="tocsdnscacheconfig"></a>

```json
{
  "enabled": true
}
```

Configuration for NodeLocal DNSCache

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether NodeLocal DNSCache is enabled for this cluster.|

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

<h2 id="tocS_EnterpriseConfig">EnterpriseConfig</h2>
<!-- backwards compatibility -->
<a id="schemaenterpriseconfig"></a>
<a id="schema_EnterpriseConfig"></a>
<a id="tocSenterpriseconfig"></a>
<a id="tocsenterpriseconfig"></a>

```json
{
  "clusterTier": "CLUSTER_TIER_UNSPECIFIED"
}
```

EnterpriseConfig is the cluster enterprise configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterTier|string|false|read-only|Output only. [Output only] cluster_tier specifies the premium tier of the cluster.|

#### Enumerated Values

|Property|Value|
|---|---|
|clusterTier|CLUSTER_TIER_UNSPECIFIED|
|clusterTier|STANDARD|
|clusterTier|ENTERPRISE|

<h2 id="tocS_EphemeralStorageConfig">EphemeralStorageConfig</h2>
<!-- backwards compatibility -->
<a id="schemaephemeralstorageconfig"></a>
<a id="schema_EphemeralStorageConfig"></a>
<a id="tocSephemeralstorageconfig"></a>
<a id="tocsephemeralstorageconfig"></a>

```json
{
  "localSsdCount": 0
}
```

EphemeralStorageConfig contains configuration for the ephemeral storage filesystem.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|localSsdCount|integer(int32)|false|none|Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. The limit for this value is dependent upon the maximum number of disk available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information. A zero (or unset) value has different meanings depending on machine type being used: 1. For pre-Gen3 machines, which support flexible numbers of local ssds, zero (or unset) means to disable using local SSDs as ephemeral storage. 2. For Gen3 machines which dictate a specific number of local ssds, zero (or unset) means to use the default number of local ssds that goes with that machine type. For example, for a c3-standard-8-lssd machine, 2 local ssds would be provisioned. For c3-standard-8 (which doesn't support local ssds), 0 will be provisioned. See https://cloud.google.com/compute/docs/disks/local-ssd#choose_number_local_ssds for more info.|

<h2 id="tocS_EphemeralStorageLocalSsdConfig">EphemeralStorageLocalSsdConfig</h2>
<!-- backwards compatibility -->
<a id="schemaephemeralstoragelocalssdconfig"></a>
<a id="schema_EphemeralStorageLocalSsdConfig"></a>
<a id="tocSephemeralstoragelocalssdconfig"></a>
<a id="tocsephemeralstoragelocalssdconfig"></a>

```json
{
  "localSsdCount": 0
}
```

EphemeralStorageLocalSsdConfig contains configuration for the node ephemeral storage using Local SSDs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|localSsdCount|integer(int32)|false|none|Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. A zero (or unset) value has different meanings depending on machine type being used: 1. For pre-Gen3 machines, which support flexible numbers of local ssds, zero (or unset) means to disable using local SSDs as ephemeral storage. The limit for this value is dependent upon the maximum number of disk available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information. 2. For Gen3 machines which dictate a specific number of local ssds, zero (or unset) means to use the default number of local ssds that goes with that machine type. For example, for a c3-standard-8-lssd machine, 2 local ssds would be provisioned. For c3-standard-8 (which doesn't support local ssds), 0 will be provisioned. See https://cloud.google.com/compute/docs/disks/local-ssd#choose_number_local_ssds for more info.|

<h2 id="tocS_FastSocket">FastSocket</h2>
<!-- backwards compatibility -->
<a id="schemafastsocket"></a>
<a id="schema_FastSocket"></a>
<a id="tocSfastsocket"></a>
<a id="tocsfastsocket"></a>

```json
{
  "enabled": true
}
```

Configuration of Fast Socket feature.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether Fast Socket features are enabled in the node pool.|

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
{
  "eventType": [
    "EVENT_TYPE_UNSPECIFIED"
  ]
}
```

Allows filtering to one or more specific event types. If event types are present, those and only those event types will be transmitted to the cluster. Other types will be skipped. If no filter is specified, or no event types are present, all event types will be sent

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventType|[string]|false|none|Event types to allowlist.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventType|EVENT_TYPE_UNSPECIFIED|
|eventType|UPGRADE_AVAILABLE_EVENT|
|eventType|UPGRADE_EVENT|
|eventType|SECURITY_BULLETIN_EVENT|

<h2 id="tocS_Fleet">Fleet</h2>
<!-- backwards compatibility -->
<a id="schemafleet"></a>
<a id="schema_Fleet"></a>
<a id="tocSfleet"></a>
<a id="tocsfleet"></a>

```json
{
  "membership": "string",
  "preRegistered": true,
  "project": "string"
}
```

Fleet is the fleet configuration for the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|membership|string|false|none|[Output only] The full resource name of the registered fleet membership of the cluster, in the format `//gkehub.googleapis.com/projects/*/locations/*/memberships/*`.|
|preRegistered|boolean|false|none|[Output only] Whether the cluster has been registered through the fleet API.|
|project|string|false|none|The Fleet host project(project ID or project number) where this cluster will be registered to. This field cannot be changed after the cluster has been registered.|

<h2 id="tocS_GPUDriverInstallationConfig">GPUDriverInstallationConfig</h2>
<!-- backwards compatibility -->
<a id="schemagpudriverinstallationconfig"></a>
<a id="schema_GPUDriverInstallationConfig"></a>
<a id="tocSgpudriverinstallationconfig"></a>
<a id="tocsgpudriverinstallationconfig"></a>

```json
{
  "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
}
```

GPUDriverInstallationConfig specifies the version of GPU driver to be auto installed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gpuDriverVersion|string|false|none|Mode for how the GPU driver is installed.|

#### Enumerated Values

|Property|Value|
|---|---|
|gpuDriverVersion|GPU_DRIVER_VERSION_UNSPECIFIED|
|gpuDriverVersion|INSTALLATION_DISABLED|
|gpuDriverVersion|DEFAULT|
|gpuDriverVersion|LATEST|

<h2 id="tocS_GPUSharingConfig">GPUSharingConfig</h2>
<!-- backwards compatibility -->
<a id="schemagpusharingconfig"></a>
<a id="schema_GPUSharingConfig"></a>
<a id="tocSgpusharingconfig"></a>
<a id="tocsgpusharingconfig"></a>

```json
{
  "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
  "maxSharedClientsPerGpu": "string"
}
```

GPUSharingConfig represents the GPU sharing configuration for Hardware Accelerators.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gpuSharingStrategy|string|false|none|The type of GPU sharing strategy to enable on the GPU node.|
|maxSharedClientsPerGpu|string(int64)|false|none|The max number of containers that can share a physical GPU.|

#### Enumerated Values

|Property|Value|
|---|---|
|gpuSharingStrategy|GPU_SHARING_STRATEGY_UNSPECIFIED|
|gpuSharingStrategy|TIME_SHARING|

<h2 id="tocS_GatewayAPIConfig">GatewayAPIConfig</h2>
<!-- backwards compatibility -->
<a id="schemagatewayapiconfig"></a>
<a id="schema_GatewayAPIConfig"></a>
<a id="tocSgatewayapiconfig"></a>
<a id="tocsgatewayapiconfig"></a>

```json
{
  "channel": "CHANNEL_UNSPECIFIED"
}
```

GatewayAPIConfig contains the desired config of Gateway API on this cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|string|false|none|The Gateway API release channel to use for Gateway API.|

#### Enumerated Values

|Property|Value|
|---|---|
|channel|CHANNEL_UNSPECIFIED|
|channel|CHANNEL_DISABLED|
|channel|CHANNEL_EXPERIMENTAL|
|channel|CHANNEL_STANDARD|

<h2 id="tocS_GcePersistentDiskCsiDriverConfig">GcePersistentDiskCsiDriverConfig</h2>
<!-- backwards compatibility -->
<a id="schemagcepersistentdiskcsidriverconfig"></a>
<a id="schema_GcePersistentDiskCsiDriverConfig"></a>
<a id="tocSgcepersistentdiskcsidriverconfig"></a>
<a id="tocsgcepersistentdiskcsidriverconfig"></a>

```json
{
  "enabled": true
}
```

Configuration for the Compute Engine PD CSI driver.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether the Compute Engine PD CSI driver is enabled for this cluster.|

<h2 id="tocS_GcfsConfig">GcfsConfig</h2>
<!-- backwards compatibility -->
<a id="schemagcfsconfig"></a>
<a id="schema_GcfsConfig"></a>
<a id="tocSgcfsconfig"></a>
<a id="tocsgcfsconfig"></a>

```json
{
  "enabled": true
}
```

GcfsConfig contains configurations of Google Container File System.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether to use GCFS.|

<h2 id="tocS_GcpFilestoreCsiDriverConfig">GcpFilestoreCsiDriverConfig</h2>
<!-- backwards compatibility -->
<a id="schemagcpfilestorecsidriverconfig"></a>
<a id="schema_GcpFilestoreCsiDriverConfig"></a>
<a id="tocSgcpfilestorecsidriverconfig"></a>
<a id="tocsgcpfilestorecsidriverconfig"></a>

```json
{
  "enabled": true
}
```

Configuration for the GCP Filestore CSI driver.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether the GCP Filestore CSI driver is enabled for this cluster.|

<h2 id="tocS_GcsFuseCsiDriverConfig">GcsFuseCsiDriverConfig</h2>
<!-- backwards compatibility -->
<a id="schemagcsfusecsidriverconfig"></a>
<a id="schema_GcsFuseCsiDriverConfig"></a>
<a id="tocSgcsfusecsidriverconfig"></a>
<a id="tocsgcsfusecsidriverconfig"></a>

```json
{
  "enabled": true
}
```

Configuration for the Cloud Storage Fuse CSI driver.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether the Cloud Storage Fuse CSI driver is enabled for this cluster.|

<h2 id="tocS_GetJSONWebKeysResponse">GetJSONWebKeysResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetjsonwebkeysresponse"></a>
<a id="schema_GetJSONWebKeysResponse"></a>
<a id="tocSgetjsonwebkeysresponse"></a>
<a id="tocsgetjsonwebkeysresponse"></a>

```json
{
  "cacheHeader": {
    "age": "string",
    "directive": "string",
    "expires": "string"
  },
  "keys": [
    {
      "alg": "string",
      "crv": "string",
      "e": "string",
      "kid": "string",
      "kty": "string",
      "n": "string",
      "use": "string",
      "x": "string",
      "y": "string"
    }
  ]
}
```

GetJSONWebKeysResponse is a valid JSON Web Key Set as specififed in rfc 7517

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cacheHeader|[HttpCacheControlResponseHeader](#schemahttpcachecontrolresponseheader)|false|none|OnePlatform automatically extracts this field and uses it to set the HTTP Cache-Control header.|
|keys|[[Jwk](#schemajwk)]|false|none|The public component of the keys used by the cluster to sign token requests.|

<h2 id="tocS_GetOpenIDConfigResponse">GetOpenIDConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetopenidconfigresponse"></a>
<a id="schema_GetOpenIDConfigResponse"></a>
<a id="tocSgetopenidconfigresponse"></a>
<a id="tocsgetopenidconfigresponse"></a>

```json
{
  "cacheHeader": {
    "age": "string",
    "directive": "string",
    "expires": "string"
  },
  "claims_supported": [
    "string"
  ],
  "grant_types": [
    "string"
  ],
  "id_token_signing_alg_values_supported": [
    "string"
  ],
  "issuer": "string",
  "jwks_uri": "string",
  "response_types_supported": [
    "string"
  ],
  "subject_types_supported": [
    "string"
  ]
}
```

GetOpenIDConfigResponse is an OIDC discovery document for the cluster. See the OpenID Connect Discovery 1.0 specification for details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cacheHeader|[HttpCacheControlResponseHeader](#schemahttpcachecontrolresponseheader)|false|none|OnePlatform automatically extracts this field and uses it to set the HTTP Cache-Control header.|
|claims_supported|[string]|false|none|Supported claims.|
|grant_types|[string]|false|none|Supported grant types.|
|id_token_signing_alg_values_supported|[string]|false|none|supported ID Token signing Algorithms.|
|issuer|string|false|none|OIDC Issuer.|
|jwks_uri|string|false|none|JSON Web Key uri.|
|response_types_supported|[string]|false|none|Supported response types.|
|subject_types_supported|[string]|false|none|Supported subject types.|

<h2 id="tocS_GkeBackupAgentConfig">GkeBackupAgentConfig</h2>
<!-- backwards compatibility -->
<a id="schemagkebackupagentconfig"></a>
<a id="schema_GkeBackupAgentConfig"></a>
<a id="tocSgkebackupagentconfig"></a>
<a id="tocsgkebackupagentconfig"></a>

```json
{
  "enabled": true
}
```

Configuration for the Backup for GKE Agent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether the Backup for GKE agent is enabled for this cluster.|

<h2 id="tocS_HorizontalPodAutoscaling">HorizontalPodAutoscaling</h2>
<!-- backwards compatibility -->
<a id="schemahorizontalpodautoscaling"></a>
<a id="schema_HorizontalPodAutoscaling"></a>
<a id="tocShorizontalpodautoscaling"></a>
<a id="tocshorizontalpodautoscaling"></a>

```json
{
  "disabled": true
}
```

Configuration options for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|Whether the Horizontal Pod Autoscaling feature is enabled in the cluster. When enabled, it ensures that metrics are collected into Stackdriver Monitoring.|

<h2 id="tocS_HostMaintenancePolicy">HostMaintenancePolicy</h2>
<!-- backwards compatibility -->
<a id="schemahostmaintenancepolicy"></a>
<a id="schema_HostMaintenancePolicy"></a>
<a id="tocShostmaintenancepolicy"></a>
<a id="tocshostmaintenancepolicy"></a>

```json
{
  "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
  "opportunisticMaintenanceStrategy": {
    "maintenanceAvailabilityWindow": "string",
    "minNodesPerPool": "string",
    "nodeIdleTimeWindow": "string"
  }
}
```

HostMaintenancePolicy contains the maintenance policy for the hosts on which the GKE VMs run on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maintenanceInterval|string|false|none|Specifies the frequency of planned maintenance events.|
|opportunisticMaintenanceStrategy|[OpportunisticMaintenanceStrategy](#schemaopportunisticmaintenancestrategy)|false|none|Strategy that will trigger maintenance on behalf of the customer.|

#### Enumerated Values

|Property|Value|
|---|---|
|maintenanceInterval|MAINTENANCE_INTERVAL_UNSPECIFIED|
|maintenanceInterval|AS_NEEDED|
|maintenanceInterval|PERIODIC|

<h2 id="tocS_HttpCacheControlResponseHeader">HttpCacheControlResponseHeader</h2>
<!-- backwards compatibility -->
<a id="schemahttpcachecontrolresponseheader"></a>
<a id="schema_HttpCacheControlResponseHeader"></a>
<a id="tocShttpcachecontrolresponseheader"></a>
<a id="tocshttpcachecontrolresponseheader"></a>

```json
{
  "age": "string",
  "directive": "string",
  "expires": "string"
}
```

RFC-2616: cache control support

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|age|string(int64)|false|none|14.6 response cache age, in seconds since the response is generated|
|directive|string|false|none|14.9 request and response directives|
|expires|string|false|none|14.21 response cache expires, in RFC 1123 date format|

<h2 id="tocS_HttpLoadBalancing">HttpLoadBalancing</h2>
<!-- backwards compatibility -->
<a id="schemahttploadbalancing"></a>
<a id="schema_HttpLoadBalancing"></a>
<a id="tocShttploadbalancing"></a>
<a id="tocshttploadbalancing"></a>

```json
{
  "disabled": true
}
```

Configuration options for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|Whether the HTTP Load Balancing controller is enabled in the cluster. When enabled, it runs a small pod in the cluster that manages the load balancers.|

<h2 id="tocS_ILBSubsettingConfig">ILBSubsettingConfig</h2>
<!-- backwards compatibility -->
<a id="schemailbsubsettingconfig"></a>
<a id="schema_ILBSubsettingConfig"></a>
<a id="tocSilbsubsettingconfig"></a>
<a id="tocsilbsubsettingconfig"></a>

```json
{
  "enabled": true
}
```

ILBSubsettingConfig contains the desired config of L4 Internal LoadBalancer subsetting on this cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Enables l4 ILB subsetting for this cluster|

<h2 id="tocS_IPAllocationPolicy">IPAllocationPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaipallocationpolicy"></a>
<a id="schema_IPAllocationPolicy"></a>
<a id="tocSipallocationpolicy"></a>
<a id="tocsipallocationpolicy"></a>

```json
{
  "additionalPodRangesConfig": {
    "podRangeInfo": [
      {
        "rangeName": "string",
        "utilization": 0
      }
    ],
    "podRangeNames": [
      "string"
    ]
  },
  "allowRouteOverlap": true,
  "clusterIpv4Cidr": "string",
  "clusterIpv4CidrBlock": "string",
  "clusterSecondaryRangeName": "string",
  "createSubnetwork": true,
  "defaultPodIpv4RangeUtilization": 0,
  "ipv6AccessType": "IPV6_ACCESS_TYPE_UNSPECIFIED",
  "nodeIpv4Cidr": "string",
  "nodeIpv4CidrBlock": "string",
  "podCidrOverprovisionConfig": {
    "disable": true
  },
  "servicesIpv4Cidr": "string",
  "servicesIpv4CidrBlock": "string",
  "servicesIpv6CidrBlock": "string",
  "servicesSecondaryRangeName": "string",
  "stackType": "STACK_TYPE_UNSPECIFIED",
  "subnetIpv6CidrBlock": "string",
  "subnetworkName": "string",
  "tpuIpv4CidrBlock": "string",
  "useIpAliases": true,
  "useRoutes": true
}
```

Configuration for controlling how IPs are allocated in the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalPodRangesConfig|[AdditionalPodRangesConfig](#schemaadditionalpodrangesconfig)|false|none|Output only. [Output only] The additional pod ranges that are added to the cluster. These pod ranges can be used by new node pools to allocate pod IPs automatically. Once the range is removed it will not show up in IPAllocationPolicy.|
|allowRouteOverlap|boolean|false|none|If true, allow allocation of cluster CIDR ranges that overlap with certain kinds of network routes. By default we do not allow cluster CIDR ranges to intersect with any user declared routes. With allow_route_overlap == true, we allow overlapping with CIDR ranges that are larger than the cluster CIDR range. If this field is set to true, then cluster and services CIDRs must be fully-specified (e.g. `10.96.0.0/14`, but not `/14`), which means: 1) When `use_ip_aliases` is true, `cluster_ipv4_cidr_block` and `services_ipv4_cidr_block` must be fully-specified. 2) When `use_ip_aliases` is false, `cluster.cluster_ipv4_cidr` muse be fully-specified.|
|clusterIpv4Cidr|string|false|none|**Deprecated.** This field is deprecated, use cluster_ipv4_cidr_block.|
|clusterIpv4CidrBlock|string|false|none|The IP address range for the cluster pod IPs. If this field is set, then `cluster.cluster_ipv4_cidr` must be left blank. This field is only applicable when `use_ip_aliases` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use.|
|clusterSecondaryRangeName|string|false|none|The name of the secondary range to be used for the cluster CIDR block. The secondary range will be used for pod IP addresses. This must be an existing secondary range associated with the cluster subnetwork. This field is only applicable with use_ip_aliases and create_subnetwork is false.|
|createSubnetwork|boolean|false|none|Whether a new subnetwork will be created automatically for the cluster. This field is only applicable when `use_ip_aliases` is true.|
|defaultPodIpv4RangeUtilization|number(double)|false|read-only|Output only. [Output only] The utilization of the cluster default IPv4 range for the pod. The ratio is Usage/[Total number of IPs in the secondary range], Usage=numNodes*numZones*podIPsPerNode.|
|ipv6AccessType|string|false|none|The ipv6 access type (internal or external) when create_subnetwork is true|
|nodeIpv4Cidr|string|false|none|**Deprecated.** This field is deprecated, use node_ipv4_cidr_block.|
|nodeIpv4CidrBlock|string|false|none|The IP address range of the instance IPs in this cluster. This is applicable only if `create_subnetwork` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use.|
|podCidrOverprovisionConfig|[PodCIDROverprovisionConfig](#schemapodcidroverprovisionconfig)|false|none|[PRIVATE FIELD] Pod CIDR size overprovisioning config for the cluster. Pod CIDR size per node depends on max_pods_per_node. By default, the value of max_pods_per_node is doubled and then rounded off to next power of 2 to get the size of pod CIDR block per node. Example: max_pods_per_node of 30 would result in 64 IPs (/26). This config can disable the doubling of IPs (we still round off to next power of 2) Example: max_pods_per_node of 30 will result in 32 IPs (/27) when overprovisioning is disabled.|
|servicesIpv4Cidr|string|false|none|**Deprecated.** This field is deprecated, use services_ipv4_cidr_block.|
|servicesIpv4CidrBlock|string|false|none|The IP address range of the services IPs in this cluster. If blank, a range will be automatically chosen with the default size. This field is only applicable when `use_ip_aliases` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use.|
|servicesIpv6CidrBlock|string|false|read-only|Output only. [Output only] The services IPv6 CIDR block for the cluster.|
|servicesSecondaryRangeName|string|false|none|The name of the secondary range to be used as for the services CIDR block. The secondary range will be used for service ClusterIPs. This must be an existing secondary range associated with the cluster subnetwork. This field is only applicable with use_ip_aliases and create_subnetwork is false.|
|stackType|string|false|none|IP stack type|
|subnetIpv6CidrBlock|string|false|read-only|Output only. [Output only] The subnet's IPv6 CIDR block used by nodes and pods.|
|subnetworkName|string|false|none|A custom subnetwork name to be used if `create_subnetwork` is true. If this field is empty, then an automatic name will be chosen for the new subnetwork.|
|tpuIpv4CidrBlock|string|false|none|The IP address range of the Cloud TPUs in this cluster. If unspecified, a range will be automatically chosen with the default size. This field is only applicable when `use_ip_aliases` is true. If unspecified, the range will use the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use. This field is deprecated, use cluster.tpu_config.ipv4_cidr_block instead.|
|useIpAliases|boolean|false|none|Whether alias IPs will be used for pod IPs in the cluster. This is used in conjunction with use_routes. It cannot be true if use_routes is true. If both use_ip_aliases and use_routes are false, then the server picks the default IP allocation mode|
|useRoutes|boolean|false|none|Whether routes will be used for pod IPs in the cluster. This is used in conjunction with use_ip_aliases. It cannot be true if use_ip_aliases is true. If both use_ip_aliases and use_routes are false, then the server picks the default IP allocation mode|

#### Enumerated Values

|Property|Value|
|---|---|
|ipv6AccessType|IPV6_ACCESS_TYPE_UNSPECIFIED|
|ipv6AccessType|INTERNAL|
|ipv6AccessType|EXTERNAL|
|stackType|STACK_TYPE_UNSPECIFIED|
|stackType|IPV4|
|stackType|IPV4_IPV6|

<h2 id="tocS_IdentityServiceConfig">IdentityServiceConfig</h2>
<!-- backwards compatibility -->
<a id="schemaidentityserviceconfig"></a>
<a id="schema_IdentityServiceConfig"></a>
<a id="tocSidentityserviceconfig"></a>
<a id="tocsidentityserviceconfig"></a>

```json
{
  "enabled": true
}
```

IdentityServiceConfig is configuration for Identity Service which allows customers to use external identity providers with the K8S API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether to enable the Identity Service component|

<h2 id="tocS_IntraNodeVisibilityConfig">IntraNodeVisibilityConfig</h2>
<!-- backwards compatibility -->
<a id="schemaintranodevisibilityconfig"></a>
<a id="schema_IntraNodeVisibilityConfig"></a>
<a id="tocSintranodevisibilityconfig"></a>
<a id="tocsintranodevisibilityconfig"></a>

```json
{
  "enabled": true
}
```

IntraNodeVisibilityConfig contains the desired config of the intra-node visibility on this cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Enables intra node visibility for this cluster.|

<h2 id="tocS_IstioConfig">IstioConfig</h2>
<!-- backwards compatibility -->
<a id="schemaistioconfig"></a>
<a id="schema_IstioConfig"></a>
<a id="tocSistioconfig"></a>
<a id="tocsistioconfig"></a>

```json
{
  "auth": "AUTH_NONE",
  "disabled": true
}
```

Configuration options for Istio addon.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth|string|false|none|**Deprecated.** The specified Istio auth mode, either none, or mutual TLS.|
|disabled|boolean|false|none|**Deprecated.** Whether Istio is enabled for this cluster.|

#### Enumerated Values

|Property|Value|
|---|---|
|auth|AUTH_NONE|
|auth|AUTH_MUTUAL_TLS|

<h2 id="tocS_Jwk">Jwk</h2>
<!-- backwards compatibility -->
<a id="schemajwk"></a>
<a id="schema_Jwk"></a>
<a id="tocSjwk"></a>
<a id="tocsjwk"></a>

```json
{
  "alg": "string",
  "crv": "string",
  "e": "string",
  "kid": "string",
  "kty": "string",
  "n": "string",
  "use": "string",
  "x": "string",
  "y": "string"
}
```

Jwk is a JSON Web Key as specified in RFC 7517

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alg|string|false|none|Algorithm.|
|crv|string|false|none|Used for ECDSA keys.|
|e|string|false|none|Used for RSA keys.|
|kid|string|false|none|Key ID.|
|kty|string|false|none|Key Type.|
|n|string|false|none|Used for RSA keys.|
|use|string|false|none|Permitted uses for the public keys.|
|x|string|false|none|Used for ECDSA keys.|
|y|string|false|none|Used for ECDSA keys.|

<h2 id="tocS_K8sBetaAPIConfig">K8sBetaAPIConfig</h2>
<!-- backwards compatibility -->
<a id="schemak8sbetaapiconfig"></a>
<a id="schema_K8sBetaAPIConfig"></a>
<a id="tocSk8sbetaapiconfig"></a>
<a id="tocsk8sbetaapiconfig"></a>

```json
{
  "enabledApis": [
    "string"
  ]
}
```

Kubernetes open source beta apis enabled on the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabledApis|[string]|false|none|api name, e.g. storage.k8s.io/v1beta1/csistoragecapacities.|

<h2 id="tocS_KalmConfig">KalmConfig</h2>
<!-- backwards compatibility -->
<a id="schemakalmconfig"></a>
<a id="schema_KalmConfig"></a>
<a id="tocSkalmconfig"></a>
<a id="tocskalmconfig"></a>

```json
{
  "enabled": true
}
```

Configuration options for the KALM addon.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|**Deprecated.** Whether KALM is enabled for this cluster.|

<h2 id="tocS_KubernetesDashboard">KubernetesDashboard</h2>
<!-- backwards compatibility -->
<a id="schemakubernetesdashboard"></a>
<a id="schema_KubernetesDashboard"></a>
<a id="tocSkubernetesdashboard"></a>
<a id="tocskubernetesdashboard"></a>

```json
{
  "disabled": true
}
```

Configuration for the Kubernetes Dashboard.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|Whether the Kubernetes Dashboard is enabled for this cluster.|

<h2 id="tocS_LegacyAbac">LegacyAbac</h2>
<!-- backwards compatibility -->
<a id="schemalegacyabac"></a>
<a id="schema_LegacyAbac"></a>
<a id="tocSlegacyabac"></a>
<a id="tocslegacyabac"></a>

```json
{
  "enabled": true
}
```

Configuration for the legacy Attribute Based Access Control authorization mode.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether the ABAC authorizer is enabled for this cluster. When enabled, identities in the system, including service accounts, nodes, and controllers, will have statically granted permissions beyond those provided by the RBAC configuration or IAM.|

<h2 id="tocS_LinuxNodeConfig">LinuxNodeConfig</h2>
<!-- backwards compatibility -->
<a id="schemalinuxnodeconfig"></a>
<a id="schema_LinuxNodeConfig"></a>
<a id="tocSlinuxnodeconfig"></a>
<a id="tocslinuxnodeconfig"></a>

```json
{
  "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
  "sysctls": {
    "property1": "string",
    "property2": "string"
  }
}
```

Parameters that can be configured on Linux nodes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cgroupMode|string|false|none|cgroup_mode specifies the cgroup mode to be used on the node.|
|sysctls|object|false|none|The Linux kernel parameters to be applied to the nodes and all pods running on the nodes. The following parameters are supported. net.core.busy_poll net.core.busy_read net.core.netdev_max_backlog net.core.rmem_max net.core.wmem_default net.core.wmem_max net.core.optmem_max net.core.somaxconn net.ipv4.tcp_rmem net.ipv4.tcp_wmem net.ipv4.tcp_tw_reuse|

#### Enumerated Values

|Property|Value|
|---|---|
|cgroupMode|CGROUP_MODE_UNSPECIFIED|
|cgroupMode|CGROUP_MODE_V1|
|cgroupMode|CGROUP_MODE_V2|

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
      "addonsConfig": {
        "cloudRunConfig": {
          "disabled": true,
          "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED"
        },
        "configConnectorConfig": {
          "enabled": true
        },
        "dnsCacheConfig": {
          "enabled": true
        },
        "gcePersistentDiskCsiDriverConfig": {
          "enabled": true
        },
        "gcpFilestoreCsiDriverConfig": {
          "enabled": true
        },
        "gcsFuseCsiDriverConfig": {
          "enabled": true
        },
        "gkeBackupAgentConfig": {
          "enabled": true
        },
        "horizontalPodAutoscaling": {
          "disabled": true
        },
        "httpLoadBalancing": {
          "disabled": true
        },
        "istioConfig": {
          "auth": "AUTH_NONE",
          "disabled": true
        },
        "kalmConfig": {
          "enabled": true
        },
        "kubernetesDashboard": {
          "disabled": true
        },
        "networkPolicyConfig": {
          "disabled": true
        },
        "statefulHaConfig": {
          "enabled": true
        }
      },
      "authenticatorGroupsConfig": {
        "enabled": true,
        "securityGroup": "string"
      },
      "autopilot": {
        "conversionStatus": {
          "state": "STATE_UNSPECIFIED"
        },
        "enabled": true,
        "workloadPolicyConfig": {
          "allowNetAdmin": true
        }
      },
      "autoscaling": {
        "autoprovisioningLocations": [
          "string"
        ],
        "autoprovisioningNodePoolDefaults": {
          "bootDiskKmsKey": "string",
          "diskSizeGb": 0,
          "diskType": "string",
          "imageType": "string",
          "insecureKubeletReadonlyPortEnabled": true,
          "management": {
            "autoRepair": true,
            "autoUpgrade": true,
            "upgradeOptions": {
              "autoUpgradeStartTime": "string",
              "description": "string"
            }
          },
          "minCpuPlatform": "string",
          "oauthScopes": [
            "string"
          ],
          "serviceAccount": "string",
          "shieldedInstanceConfig": {
            "enableIntegrityMonitoring": true,
            "enableSecureBoot": true
          },
          "upgradeSettings": {
            "blueGreenSettings": {
              "autoscaledRolloutPolicy": {},
              "nodePoolSoakDuration": "string",
              "standardRolloutPolicy": {
                "batchNodeCount": 0,
                "batchPercentage": 0,
                "batchSoakDuration": "string"
              }
            },
            "maxSurge": 0,
            "maxUnavailable": 0,
            "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
          }
        },
        "autoscalingProfile": "PROFILE_UNSPECIFIED",
        "enableNodeAutoprovisioning": true,
        "resourceLimits": [
          {
            "maximum": "string",
            "minimum": "string",
            "resourceType": "string"
          }
        ]
      },
      "binaryAuthorization": {
        "enabled": true,
        "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
        "policyBindings": [
          {
            "name": "string"
          }
        ]
      },
      "clusterIpv4Cidr": "string",
      "clusterTelemetry": {
        "type": "UNSPECIFIED"
      },
      "conditions": [
        {
          "canonicalCode": "OK",
          "code": "UNKNOWN",
          "message": "string"
        }
      ],
      "confidentialNodes": {
        "enabled": true
      },
      "costManagementConfig": {
        "enabled": true
      },
      "createTime": "string",
      "currentMasterVersion": "string",
      "currentNodeCount": 0,
      "currentNodeVersion": "string",
      "databaseEncryption": {
        "keyName": "string",
        "state": "UNKNOWN"
      },
      "defaultMaxPodsConstraint": {
        "maxPodsPerNode": "string"
      },
      "description": "string",
      "enableK8sBetaApis": {
        "enabledApis": [
          "string"
        ]
      },
      "enableKubernetesAlpha": true,
      "enableTpu": true,
      "endpoint": "string",
      "enterpriseConfig": {
        "clusterTier": "CLUSTER_TIER_UNSPECIFIED"
      },
      "etag": "string",
      "expireTime": "string",
      "fleet": {
        "membership": "string",
        "preRegistered": true,
        "project": "string"
      },
      "id": "string",
      "identityServiceConfig": {
        "enabled": true
      },
      "initialClusterVersion": "string",
      "initialNodeCount": 0,
      "instanceGroupUrls": [
        "string"
      ],
      "ipAllocationPolicy": {
        "additionalPodRangesConfig": {
          "podRangeInfo": [
            {
              "rangeName": "string",
              "utilization": 0
            }
          ],
          "podRangeNames": [
            "string"
          ]
        },
        "allowRouteOverlap": true,
        "clusterIpv4Cidr": "string",
        "clusterIpv4CidrBlock": "string",
        "clusterSecondaryRangeName": "string",
        "createSubnetwork": true,
        "defaultPodIpv4RangeUtilization": 0,
        "ipv6AccessType": "IPV6_ACCESS_TYPE_UNSPECIFIED",
        "nodeIpv4Cidr": "string",
        "nodeIpv4CidrBlock": "string",
        "podCidrOverprovisionConfig": {
          "disable": true
        },
        "servicesIpv4Cidr": "string",
        "servicesIpv4CidrBlock": "string",
        "servicesIpv6CidrBlock": "string",
        "servicesSecondaryRangeName": "string",
        "stackType": "STACK_TYPE_UNSPECIFIED",
        "subnetIpv6CidrBlock": "string",
        "subnetworkName": "string",
        "tpuIpv4CidrBlock": "string",
        "useIpAliases": true,
        "useRoutes": true
      },
      "labelFingerprint": "string",
      "legacyAbac": {
        "enabled": true
      },
      "location": "string",
      "locations": [
        "string"
      ],
      "loggingConfig": {
        "componentConfig": {
          "enableComponents": [
            "COMPONENT_UNSPECIFIED"
          ]
        }
      },
      "loggingService": "string",
      "maintenancePolicy": {
        "resourceVersion": "string",
        "window": {
          "dailyMaintenanceWindow": {
            "duration": "string",
            "startTime": "string"
          },
          "maintenanceExclusions": {
            "property1": {
              "endTime": "string",
              "maintenanceExclusionOptions": {
                "scope": "NO_UPGRADES"
              },
              "startTime": "string"
            },
            "property2": {
              "endTime": "string",
              "maintenanceExclusionOptions": {
                "scope": "NO_UPGRADES"
              },
              "startTime": "string"
            }
          },
          "recurringWindow": {
            "recurrence": "string",
            "window": {
              "endTime": "string",
              "maintenanceExclusionOptions": {
                "scope": "NO_UPGRADES"
              },
              "startTime": "string"
            }
          }
        }
      },
      "master": {},
      "masterAuth": {
        "clientCertificate": "string",
        "clientCertificateConfig": {
          "issueClientCertificate": true
        },
        "clientKey": "string",
        "clusterCaCertificate": "string",
        "password": "string",
        "username": "string"
      },
      "masterAuthorizedNetworksConfig": {
        "cidrBlocks": [
          {
            "cidrBlock": "string",
            "displayName": "string"
          }
        ],
        "enabled": true,
        "gcpPublicCidrsAccessEnabled": true
      },
      "masterIpv4CidrBlock": "string",
      "meshCertificates": {
        "enableCertificates": true
      },
      "monitoringConfig": {
        "advancedDatapathObservabilityConfig": {
          "enableMetrics": true,
          "enableRelay": true,
          "relayMode": "RELAY_MODE_UNSPECIFIED"
        },
        "componentConfig": {
          "enableComponents": [
            "COMPONENT_UNSPECIFIED"
          ]
        },
        "managedPrometheusConfig": {
          "enabled": true
        }
      },
      "monitoringService": "string",
      "name": "string",
      "network": "string",
      "networkConfig": {
        "datapathProvider": "DATAPATH_PROVIDER_UNSPECIFIED",
        "defaultSnatStatus": {
          "disabled": true
        },
        "dnsConfig": {
          "clusterDns": "PROVIDER_UNSPECIFIED",
          "clusterDnsDomain": "string",
          "clusterDnsScope": "DNS_SCOPE_UNSPECIFIED"
        },
        "enableFqdnNetworkPolicy": true,
        "enableIntraNodeVisibility": true,
        "enableL4ilbSubsetting": true,
        "enableMultiNetworking": true,
        "gatewayApiConfig": {
          "channel": "CHANNEL_UNSPECIFIED"
        },
        "inTransitEncryptionConfig": "IN_TRANSIT_ENCRYPTION_CONFIG_UNSPECIFIED",
        "network": "string",
        "networkPerformanceConfig": {
          "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
        },
        "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
        "serviceExternalIpsConfig": {
          "enabled": true
        },
        "subnetwork": "string"
      },
      "networkPolicy": {
        "enabled": true,
        "provider": "PROVIDER_UNSPECIFIED"
      },
      "nodeConfig": {
        "accelerators": [
          {
            "acceleratorCount": "string",
            "acceleratorType": "string",
            "gpuDriverInstallationConfig": {
              "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
            },
            "gpuPartitionSize": "string",
            "gpuSharingConfig": {
              "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
              "maxSharedClientsPerGpu": "string"
            },
            "maxTimeSharedClientsPerGpu": "string"
          }
        ],
        "advancedMachineFeatures": {
          "threadsPerCore": "string"
        },
        "bootDiskKmsKey": "string",
        "confidentialNodes": {
          "enabled": true
        },
        "diskSizeGb": 0,
        "diskType": "string",
        "enableConfidentialStorage": true,
        "ephemeralStorageConfig": {
          "localSsdCount": 0
        },
        "ephemeralStorageLocalSsdConfig": {
          "localSsdCount": 0
        },
        "fastSocket": {
          "enabled": true
        },
        "gcfsConfig": {
          "enabled": true
        },
        "gvnic": {
          "enabled": true
        },
        "hostMaintenancePolicy": {
          "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
          "opportunisticMaintenanceStrategy": {
            "maintenanceAvailabilityWindow": "string",
            "minNodesPerPool": "string",
            "nodeIdleTimeWindow": "string"
          }
        },
        "imageType": "string",
        "kubeletConfig": {
          "cpuCfsQuota": true,
          "cpuCfsQuotaPeriod": "string",
          "cpuManagerPolicy": "string",
          "insecureKubeletReadonlyPortEnabled": true,
          "podPidsLimit": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "linuxNodeConfig": {
          "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
          "sysctls": {
            "property1": "string",
            "property2": "string"
          }
        },
        "localNvmeSsdBlockConfig": {
          "localSsdCount": 0
        },
        "localSsdCount": 0,
        "loggingConfig": {
          "variantConfig": {
            "variant": "VARIANT_UNSPECIFIED"
          }
        },
        "machineType": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "minCpuPlatform": "string",
        "nodeGroup": "string",
        "oauthScopes": [
          "string"
        ],
        "preemptible": true,
        "reservationAffinity": {
          "consumeReservationType": "UNSPECIFIED",
          "key": "string",
          "values": [
            "string"
          ]
        },
        "resourceLabels": {
          "property1": "string",
          "property2": "string"
        },
        "resourceManagerTags": {
          "tags": {
            "property1": "string",
            "property2": "string"
          }
        },
        "sandboxConfig": {
          "sandboxType": "string",
          "type": "UNSPECIFIED"
        },
        "secondaryBootDisks": [
          {
            "diskImage": "string",
            "mode": "MODE_UNSPECIFIED"
          }
        ],
        "serviceAccount": "string",
        "shieldedInstanceConfig": {
          "enableIntegrityMonitoring": true,
          "enableSecureBoot": true
        },
        "soleTenantConfig": {
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ]
        },
        "spot": true,
        "tags": [
          "string"
        ],
        "taints": [
          {
            "effect": "EFFECT_UNSPECIFIED",
            "key": "string",
            "value": "string"
          }
        ],
        "windowsNodeConfig": {
          "osVersion": "OS_VERSION_UNSPECIFIED"
        },
        "workloadMetadataConfig": {
          "mode": "MODE_UNSPECIFIED",
          "nodeMetadata": "UNSPECIFIED"
        }
      },
      "nodeIpv4CidrSize": 0,
      "nodePoolAutoConfig": {
        "networkTags": {
          "tags": [
            "string"
          ]
        },
        "resourceManagerTags": {
          "tags": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "nodePoolDefaults": {
        "nodeConfigDefaults": {
          "gcfsConfig": {
            "enabled": true
          },
          "hostMaintenancePolicy": {
            "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
            "opportunisticMaintenanceStrategy": {
              "maintenanceAvailabilityWindow": "string",
              "minNodesPerPool": "string",
              "nodeIdleTimeWindow": "string"
            }
          },
          "loggingConfig": {
            "variantConfig": {
              "variant": "VARIANT_UNSPECIFIED"
            }
          }
        }
      },
      "nodePools": [
        {
          "autoscaling": {
            "autoprovisioned": true,
            "enabled": true,
            "locationPolicy": "LOCATION_POLICY_UNSPECIFIED",
            "maxNodeCount": 0,
            "minNodeCount": 0,
            "totalMaxNodeCount": 0,
            "totalMinNodeCount": 0
          },
          "bestEffortProvisioning": {
            "enabled": true,
            "minProvisionNodes": 0
          },
          "conditions": [
            {
              "canonicalCode": "OK",
              "code": "UNKNOWN",
              "message": "string"
            }
          ],
          "config": {
            "accelerators": [
              {
                "acceleratorCount": "string",
                "acceleratorType": "string",
                "gpuDriverInstallationConfig": {
                  "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
                },
                "gpuPartitionSize": "string",
                "gpuSharingConfig": {
                  "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
                  "maxSharedClientsPerGpu": "string"
                },
                "maxTimeSharedClientsPerGpu": "string"
              }
            ],
            "advancedMachineFeatures": {
              "threadsPerCore": "string"
            },
            "bootDiskKmsKey": "string",
            "confidentialNodes": {
              "enabled": true
            },
            "diskSizeGb": 0,
            "diskType": "string",
            "enableConfidentialStorage": true,
            "ephemeralStorageConfig": {
              "localSsdCount": 0
            },
            "ephemeralStorageLocalSsdConfig": {
              "localSsdCount": 0
            },
            "fastSocket": {
              "enabled": true
            },
            "gcfsConfig": {
              "enabled": true
            },
            "gvnic": {
              "enabled": true
            },
            "hostMaintenancePolicy": {
              "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
              "opportunisticMaintenanceStrategy": {
                "maintenanceAvailabilityWindow": "string",
                "minNodesPerPool": "string",
                "nodeIdleTimeWindow": "string"
              }
            },
            "imageType": "string",
            "kubeletConfig": {
              "cpuCfsQuota": true,
              "cpuCfsQuotaPeriod": "string",
              "cpuManagerPolicy": "string",
              "insecureKubeletReadonlyPortEnabled": true,
              "podPidsLimit": "string"
            },
            "labels": {
              "property1": "string",
              "property2": "string"
            },
            "linuxNodeConfig": {
              "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
              "sysctls": {
                "property1": "string",
                "property2": "string"
              }
            },
            "localNvmeSsdBlockConfig": {
              "localSsdCount": 0
            },
            "localSsdCount": 0,
            "loggingConfig": {
              "variantConfig": {
                "variant": "VARIANT_UNSPECIFIED"
              }
            },
            "machineType": "string",
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "minCpuPlatform": "string",
            "nodeGroup": "string",
            "oauthScopes": [
              "string"
            ],
            "preemptible": true,
            "reservationAffinity": {
              "consumeReservationType": "UNSPECIFIED",
              "key": "string",
              "values": [
                "string"
              ]
            },
            "resourceLabels": {
              "property1": "string",
              "property2": "string"
            },
            "resourceManagerTags": {
              "tags": {
                "property1": "string",
                "property2": "string"
              }
            },
            "sandboxConfig": {
              "sandboxType": "string",
              "type": "UNSPECIFIED"
            },
            "secondaryBootDisks": [
              {
                "diskImage": "string",
                "mode": "MODE_UNSPECIFIED"
              }
            ],
            "serviceAccount": "string",
            "shieldedInstanceConfig": {
              "enableIntegrityMonitoring": true,
              "enableSecureBoot": true
            },
            "soleTenantConfig": {
              "nodeAffinities": [
                {
                  "key": "string",
                  "operator": "OPERATOR_UNSPECIFIED",
                  "values": [
                    "string"
                  ]
                }
              ]
            },
            "spot": true,
            "tags": [
              "string"
            ],
            "taints": [
              {
                "effect": "EFFECT_UNSPECIFIED",
                "key": "string",
                "value": "string"
              }
            ],
            "windowsNodeConfig": {
              "osVersion": "OS_VERSION_UNSPECIFIED"
            },
            "workloadMetadataConfig": {
              "mode": "MODE_UNSPECIFIED",
              "nodeMetadata": "UNSPECIFIED"
            }
          },
          "etag": "string",
          "initialNodeCount": 0,
          "instanceGroupUrls": [
            "string"
          ],
          "locations": [
            "string"
          ],
          "management": {
            "autoRepair": true,
            "autoUpgrade": true,
            "upgradeOptions": {
              "autoUpgradeStartTime": "string",
              "description": "string"
            }
          },
          "maxPodsConstraint": {
            "maxPodsPerNode": "string"
          },
          "name": "string",
          "networkConfig": {
            "additionalNodeNetworkConfigs": [
              {
                "network": "string",
                "subnetwork": "string"
              }
            ],
            "additionalPodNetworkConfigs": [
              {
                "maxPodsPerNode": {
                  "maxPodsPerNode": "string"
                },
                "secondaryPodRange": "string",
                "subnetwork": "string"
              }
            ],
            "createPodRange": true,
            "enablePrivateNodes": true,
            "networkPerformanceConfig": {
              "externalIpEgressBandwidthTier": "TIER_UNSPECIFIED",
              "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
            },
            "podCidrOverprovisionConfig": {
              "disable": true
            },
            "podIpv4CidrBlock": "string",
            "podIpv4RangeUtilization": 0,
            "podRange": "string"
          },
          "placementPolicy": {
            "policyName": "string",
            "tpuTopology": "string",
            "type": "TYPE_UNSPECIFIED"
          },
          "podIpv4CidrSize": 0,
          "queuedProvisioning": {
            "enabled": true
          },
          "selfLink": "string",
          "status": "STATUS_UNSPECIFIED",
          "statusMessage": "string",
          "updateInfo": {
            "blueGreenInfo": {
              "blueInstanceGroupUrls": [
                "string"
              ],
              "bluePoolDeletionStartTime": "string",
              "greenInstanceGroupUrls": [
                "string"
              ],
              "greenPoolVersion": "string",
              "phase": "PHASE_UNSPECIFIED"
            }
          },
          "upgradeSettings": {
            "blueGreenSettings": {
              "autoscaledRolloutPolicy": {},
              "nodePoolSoakDuration": "string",
              "standardRolloutPolicy": {
                "batchNodeCount": 0,
                "batchPercentage": 0,
                "batchSoakDuration": "string"
              }
            },
            "maxSurge": 0,
            "maxUnavailable": 0,
            "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
          },
          "version": "string"
        }
      ],
      "notificationConfig": {
        "pubsub": {
          "enabled": true,
          "filter": {
            "eventType": [
              "EVENT_TYPE_UNSPECIFIED"
            ]
          },
          "topic": "string"
        }
      },
      "parentProductConfig": {
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "productName": "string"
      },
      "podSecurityPolicyConfig": {
        "enabled": true
      },
      "privateCluster": true,
      "privateClusterConfig": {
        "enablePrivateEndpoint": true,
        "enablePrivateNodes": true,
        "masterGlobalAccessConfig": {
          "enabled": true
        },
        "masterIpv4CidrBlock": "string",
        "peeringName": "string",
        "privateEndpoint": "string",
        "privateEndpointSubnetwork": "string",
        "publicEndpoint": "string"
      },
      "protectConfig": {
        "workloadConfig": {
          "auditMode": "MODE_UNSPECIFIED"
        },
        "workloadVulnerabilityMode": "WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED"
      },
      "releaseChannel": {
        "channel": "UNSPECIFIED"
      },
      "resourceLabels": {
        "property1": "string",
        "property2": "string"
      },
      "resourceUsageExportConfig": {
        "bigqueryDestination": {
          "datasetId": "string"
        },
        "consumptionMeteringConfig": {
          "enabled": true
        },
        "enableNetworkEgressMetering": true
      },
      "securityPostureConfig": {
        "mode": "MODE_UNSPECIFIED",
        "vulnerabilityMode": "VULNERABILITY_MODE_UNSPECIFIED"
      },
      "selfLink": "string",
      "servicesIpv4Cidr": "string",
      "shieldedNodes": {
        "enabled": true
      },
      "status": "STATUS_UNSPECIFIED",
      "statusMessage": "string",
      "subnetwork": "string",
      "tpuConfig": {
        "enabled": true,
        "ipv4CidrBlock": "string",
        "useServiceNetworking": true
      },
      "tpuIpv4CidrBlock": "string",
      "verticalPodAutoscaling": {
        "enabled": true
      },
      "workloadAltsConfig": {
        "enableAlts": true
      },
      "workloadCertificates": {
        "enableCertificates": true
      },
      "workloadIdentityConfig": {
        "identityNamespace": "string",
        "identityProvider": "string",
        "workloadPool": "string"
      },
      "zone": "string"
    }
  ],
  "missingZones": [
    "string"
  ]
}
```

ListClustersResponse is the result of ListClustersRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusters|[[Cluster](#schemacluster)]|false|none|A list of clusters in the project in the specified zone, or across all ones.|
|missingZones|[string]|false|none|If any zones are listed here, the list of clusters returned may be missing those zones.|

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
      "name": "string",
      "recommended": true,
      "type": "LOCATION_TYPE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

ListLocationsResponse returns the list of all GKE locations and their recommendation state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locations|[[Location](#schemalocation)]|false|none|A full list of GKE locations.|
|nextPageToken|string|false|none|Only return ListLocationsResponse that occur after the page_token. This value should be populated from the ListLocationsResponse.next_page_token if that response token was set (which happens when listing more Locations than fit in a single ListLocationsResponse).|

<h2 id="tocS_ListNodePoolsResponse">ListNodePoolsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistnodepoolsresponse"></a>
<a id="schema_ListNodePoolsResponse"></a>
<a id="tocSlistnodepoolsresponse"></a>
<a id="tocslistnodepoolsresponse"></a>

```json
{
  "nodePools": [
    {
      "autoscaling": {
        "autoprovisioned": true,
        "enabled": true,
        "locationPolicy": "LOCATION_POLICY_UNSPECIFIED",
        "maxNodeCount": 0,
        "minNodeCount": 0,
        "totalMaxNodeCount": 0,
        "totalMinNodeCount": 0
      },
      "bestEffortProvisioning": {
        "enabled": true,
        "minProvisionNodes": 0
      },
      "conditions": [
        {
          "canonicalCode": "OK",
          "code": "UNKNOWN",
          "message": "string"
        }
      ],
      "config": {
        "accelerators": [
          {
            "acceleratorCount": "string",
            "acceleratorType": "string",
            "gpuDriverInstallationConfig": {
              "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
            },
            "gpuPartitionSize": "string",
            "gpuSharingConfig": {
              "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
              "maxSharedClientsPerGpu": "string"
            },
            "maxTimeSharedClientsPerGpu": "string"
          }
        ],
        "advancedMachineFeatures": {
          "threadsPerCore": "string"
        },
        "bootDiskKmsKey": "string",
        "confidentialNodes": {
          "enabled": true
        },
        "diskSizeGb": 0,
        "diskType": "string",
        "enableConfidentialStorage": true,
        "ephemeralStorageConfig": {
          "localSsdCount": 0
        },
        "ephemeralStorageLocalSsdConfig": {
          "localSsdCount": 0
        },
        "fastSocket": {
          "enabled": true
        },
        "gcfsConfig": {
          "enabled": true
        },
        "gvnic": {
          "enabled": true
        },
        "hostMaintenancePolicy": {
          "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
          "opportunisticMaintenanceStrategy": {
            "maintenanceAvailabilityWindow": "string",
            "minNodesPerPool": "string",
            "nodeIdleTimeWindow": "string"
          }
        },
        "imageType": "string",
        "kubeletConfig": {
          "cpuCfsQuota": true,
          "cpuCfsQuotaPeriod": "string",
          "cpuManagerPolicy": "string",
          "insecureKubeletReadonlyPortEnabled": true,
          "podPidsLimit": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "linuxNodeConfig": {
          "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
          "sysctls": {
            "property1": "string",
            "property2": "string"
          }
        },
        "localNvmeSsdBlockConfig": {
          "localSsdCount": 0
        },
        "localSsdCount": 0,
        "loggingConfig": {
          "variantConfig": {
            "variant": "VARIANT_UNSPECIFIED"
          }
        },
        "machineType": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "minCpuPlatform": "string",
        "nodeGroup": "string",
        "oauthScopes": [
          "string"
        ],
        "preemptible": true,
        "reservationAffinity": {
          "consumeReservationType": "UNSPECIFIED",
          "key": "string",
          "values": [
            "string"
          ]
        },
        "resourceLabels": {
          "property1": "string",
          "property2": "string"
        },
        "resourceManagerTags": {
          "tags": {
            "property1": "string",
            "property2": "string"
          }
        },
        "sandboxConfig": {
          "sandboxType": "string",
          "type": "UNSPECIFIED"
        },
        "secondaryBootDisks": [
          {
            "diskImage": "string",
            "mode": "MODE_UNSPECIFIED"
          }
        ],
        "serviceAccount": "string",
        "shieldedInstanceConfig": {
          "enableIntegrityMonitoring": true,
          "enableSecureBoot": true
        },
        "soleTenantConfig": {
          "nodeAffinities": [
            {
              "key": "string",
              "operator": "OPERATOR_UNSPECIFIED",
              "values": [
                "string"
              ]
            }
          ]
        },
        "spot": true,
        "tags": [
          "string"
        ],
        "taints": [
          {
            "effect": "EFFECT_UNSPECIFIED",
            "key": "string",
            "value": "string"
          }
        ],
        "windowsNodeConfig": {
          "osVersion": "OS_VERSION_UNSPECIFIED"
        },
        "workloadMetadataConfig": {
          "mode": "MODE_UNSPECIFIED",
          "nodeMetadata": "UNSPECIFIED"
        }
      },
      "etag": "string",
      "initialNodeCount": 0,
      "instanceGroupUrls": [
        "string"
      ],
      "locations": [
        "string"
      ],
      "management": {
        "autoRepair": true,
        "autoUpgrade": true,
        "upgradeOptions": {
          "autoUpgradeStartTime": "string",
          "description": "string"
        }
      },
      "maxPodsConstraint": {
        "maxPodsPerNode": "string"
      },
      "name": "string",
      "networkConfig": {
        "additionalNodeNetworkConfigs": [
          {
            "network": "string",
            "subnetwork": "string"
          }
        ],
        "additionalPodNetworkConfigs": [
          {
            "maxPodsPerNode": {
              "maxPodsPerNode": "string"
            },
            "secondaryPodRange": "string",
            "subnetwork": "string"
          }
        ],
        "createPodRange": true,
        "enablePrivateNodes": true,
        "networkPerformanceConfig": {
          "externalIpEgressBandwidthTier": "TIER_UNSPECIFIED",
          "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
        },
        "podCidrOverprovisionConfig": {
          "disable": true
        },
        "podIpv4CidrBlock": "string",
        "podIpv4RangeUtilization": 0,
        "podRange": "string"
      },
      "placementPolicy": {
        "policyName": "string",
        "tpuTopology": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "podIpv4CidrSize": 0,
      "queuedProvisioning": {
        "enabled": true
      },
      "selfLink": "string",
      "status": "STATUS_UNSPECIFIED",
      "statusMessage": "string",
      "updateInfo": {
        "blueGreenInfo": {
          "blueInstanceGroupUrls": [
            "string"
          ],
          "bluePoolDeletionStartTime": "string",
          "greenInstanceGroupUrls": [
            "string"
          ],
          "greenPoolVersion": "string",
          "phase": "PHASE_UNSPECIFIED"
        }
      },
      "upgradeSettings": {
        "blueGreenSettings": {
          "autoscaledRolloutPolicy": {},
          "nodePoolSoakDuration": "string",
          "standardRolloutPolicy": {
            "batchNodeCount": 0,
            "batchPercentage": 0,
            "batchSoakDuration": "string"
          }
        },
        "maxSurge": 0,
        "maxUnavailable": 0,
        "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
      },
      "version": "string"
    }
  ]
}
```

ListNodePoolsResponse is the result of ListNodePoolsRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodePools|[[NodePool](#schemanodepool)]|false|none|A list of node pools for a cluster.|

<h2 id="tocS_ListOperationsResponse">ListOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistoperationsresponse"></a>
<a id="schema_ListOperationsResponse"></a>
<a id="tocSlistoperationsresponse"></a>
<a id="tocslistoperationsresponse"></a>

```json
{
  "missingZones": [
    "string"
  ],
  "operations": [
    {
      "clusterConditions": [
        {
          "canonicalCode": "OK",
          "code": "UNKNOWN",
          "message": "string"
        }
      ],
      "detail": "string",
      "endTime": "string",
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
      "location": "string",
      "name": "string",
      "nodepoolConditions": [
        {
          "canonicalCode": "OK",
          "code": "UNKNOWN",
          "message": "string"
        }
      ],
      "operationType": "TYPE_UNSPECIFIED",
      "progress": {
        "metrics": [
          {
            "doubleValue": 0,
            "intValue": "string",
            "name": "string",
            "stringValue": "string"
          }
        ],
        "name": "string",
        "stages": [
          {}
        ],
        "status": "STATUS_UNSPECIFIED"
      },
      "selfLink": "string",
      "startTime": "string",
      "status": "STATUS_UNSPECIFIED",
      "statusMessage": "string",
      "targetLink": "string",
      "zone": "string"
    }
  ]
}
```

ListOperationsResponse is the result of ListOperationsRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|missingZones|[string]|false|none|If any zones are listed here, the list of operations returned may be missing the operations from those zones.|
|operations|[[Operation](#schemaoperation)]|false|none|A list of operations in the project in the specified zone.|

<h2 id="tocS_ListUsableSubnetworksResponse">ListUsableSubnetworksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistusablesubnetworksresponse"></a>
<a id="schema_ListUsableSubnetworksResponse"></a>
<a id="tocSlistusablesubnetworksresponse"></a>
<a id="tocslistusablesubnetworksresponse"></a>

```json
{
  "nextPageToken": "string",
  "subnetworks": [
    {
      "ipCidrRange": "string",
      "network": "string",
      "secondaryIpRanges": [
        {
          "ipCidrRange": "string",
          "rangeName": "string",
          "status": "UNKNOWN"
        }
      ],
      "statusMessage": "string",
      "subnetwork": "string"
    }
  ]
}
```

ListUsableSubnetworksResponse is the response of ListUsableSubnetworksRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|This token allows you to get the next page of results for list requests. If the number of results is larger than `page_size`, use the `next_page_token` as a value for the query parameter `page_token` in the next request. The value will become empty when there are no more pages.|
|subnetworks|[[UsableSubnetwork](#schemausablesubnetwork)]|false|none|A list of usable subnetworks in the specified network project.|

<h2 id="tocS_LocalNvmeSsdBlockConfig">LocalNvmeSsdBlockConfig</h2>
<!-- backwards compatibility -->
<a id="schemalocalnvmessdblockconfig"></a>
<a id="schema_LocalNvmeSsdBlockConfig"></a>
<a id="tocSlocalnvmessdblockconfig"></a>
<a id="tocslocalnvmessdblockconfig"></a>

```json
{
  "localSsdCount": 0
}
```

LocalNvmeSsdBlockConfig contains configuration for using raw-block local NVMe SSDs

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|localSsdCount|integer(int32)|false|none|Number of local NVMe SSDs to use. The limit for this value is dependent upon the maximum number of disk available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information. A zero (or unset) value has different meanings depending on machine type being used: 1. For pre-Gen3 machines, which support flexible numbers of local ssds, zero (or unset) means to disable using local SSDs as ephemeral storage. 2. For Gen3 machines which dictate a specific number of local ssds, zero (or unset) means to use the default number of local ssds that goes with that machine type. For example, for a c3-standard-8-lssd machine, 2 local ssds would be provisioned. For c3-standard-8 (which doesn't support local ssds), 0 will be provisioned. See https://cloud.google.com/compute/docs/disks/local-ssd#choose_number_local_ssds for more info.|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "name": "string",
  "recommended": true,
  "type": "LOCATION_TYPE_UNSPECIFIED"
}
```

Location returns the location name, and if the location is recommended for GKE cluster scheduling.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Contains the name of the resource requested. Specified in the format `projects/*/locations/*`.|
|recommended|boolean|false|none|Whether the location is recommended for GKE cluster scheduling.|
|type|string|false|none|Contains the type of location this Location is for. Regional or Zonal.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|LOCATION_TYPE_UNSPECIFIED|
|type|ZONE|
|type|REGION|

<h2 id="tocS_LoggingComponentConfig">LoggingComponentConfig</h2>
<!-- backwards compatibility -->
<a id="schemaloggingcomponentconfig"></a>
<a id="schema_LoggingComponentConfig"></a>
<a id="tocSloggingcomponentconfig"></a>
<a id="tocsloggingcomponentconfig"></a>

```json
{
  "enableComponents": [
    "COMPONENT_UNSPECIFIED"
  ]
}
```

LoggingComponentConfig is cluster logging component configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableComponents|[string]|false|none|Select components to collect logs. An empty set would disable all logging.|

#### Enumerated Values

|Property|Value|
|---|---|
|enableComponents|COMPONENT_UNSPECIFIED|
|enableComponents|SYSTEM_COMPONENTS|
|enableComponents|WORKLOADS|
|enableComponents|APISERVER|
|enableComponents|SCHEDULER|
|enableComponents|CONTROLLER_MANAGER|

<h2 id="tocS_LoggingConfig">LoggingConfig</h2>
<!-- backwards compatibility -->
<a id="schemaloggingconfig"></a>
<a id="schema_LoggingConfig"></a>
<a id="tocSloggingconfig"></a>
<a id="tocsloggingconfig"></a>

```json
{
  "componentConfig": {
    "enableComponents": [
      "COMPONENT_UNSPECIFIED"
    ]
  }
}
```

LoggingConfig is cluster logging configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|componentConfig|[LoggingComponentConfig](#schemaloggingcomponentconfig)|false|none|Logging components configuration|

<h2 id="tocS_LoggingVariantConfig">LoggingVariantConfig</h2>
<!-- backwards compatibility -->
<a id="schemaloggingvariantconfig"></a>
<a id="schema_LoggingVariantConfig"></a>
<a id="tocSloggingvariantconfig"></a>
<a id="tocsloggingvariantconfig"></a>

```json
{
  "variant": "VARIANT_UNSPECIFIED"
}
```

LoggingVariantConfig specifies the behaviour of the logging component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|variant|string|false|none|Logging variant deployed on nodes.|

#### Enumerated Values

|Property|Value|
|---|---|
|variant|VARIANT_UNSPECIFIED|
|variant|DEFAULT|
|variant|MAX_THROUGHPUT|

<h2 id="tocS_MaintenanceExclusionOptions">MaintenanceExclusionOptions</h2>
<!-- backwards compatibility -->
<a id="schemamaintenanceexclusionoptions"></a>
<a id="schema_MaintenanceExclusionOptions"></a>
<a id="tocSmaintenanceexclusionoptions"></a>
<a id="tocsmaintenanceexclusionoptions"></a>

```json
{
  "scope": "NO_UPGRADES"
}
```

Represents the Maintenance exclusion option.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scope|string|false|none|Scope specifies the upgrade scope which upgrades are blocked by the exclusion.|

#### Enumerated Values

|Property|Value|
|---|---|
|scope|NO_UPGRADES|
|scope|NO_MINOR_UPGRADES|
|scope|NO_MINOR_OR_NODE_UPGRADES|

<h2 id="tocS_MaintenancePolicy">MaintenancePolicy</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancepolicy"></a>
<a id="schema_MaintenancePolicy"></a>
<a id="tocSmaintenancepolicy"></a>
<a id="tocsmaintenancepolicy"></a>

```json
{
  "resourceVersion": "string",
  "window": {
    "dailyMaintenanceWindow": {
      "duration": "string",
      "startTime": "string"
    },
    "maintenanceExclusions": {
      "property1": {
        "endTime": "string",
        "maintenanceExclusionOptions": {
          "scope": "NO_UPGRADES"
        },
        "startTime": "string"
      },
      "property2": {
        "endTime": "string",
        "maintenanceExclusionOptions": {
          "scope": "NO_UPGRADES"
        },
        "startTime": "string"
      }
    },
    "recurringWindow": {
      "recurrence": "string",
      "window": {
        "endTime": "string",
        "maintenanceExclusionOptions": {
          "scope": "NO_UPGRADES"
        },
        "startTime": "string"
      }
    }
  }
}
```

MaintenancePolicy defines the maintenance policy to be used for the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceVersion|string|false|none|A hash identifying the version of this policy, so that updates to fields of the policy won't accidentally undo intermediate changes (and so that users of the API unaware of some fields won't accidentally remove other fields). Make a `get()` request to the cluster to get the current resource version and include it with requests to set the policy.|
|window|[MaintenanceWindow](#schemamaintenancewindow)|false|none|Specifies the maintenance window in which maintenance may be performed.|

<h2 id="tocS_MaintenanceWindow">MaintenanceWindow</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindow"></a>
<a id="schema_MaintenanceWindow"></a>
<a id="tocSmaintenancewindow"></a>
<a id="tocsmaintenancewindow"></a>

```json
{
  "dailyMaintenanceWindow": {
    "duration": "string",
    "startTime": "string"
  },
  "maintenanceExclusions": {
    "property1": {
      "endTime": "string",
      "maintenanceExclusionOptions": {
        "scope": "NO_UPGRADES"
      },
      "startTime": "string"
    },
    "property2": {
      "endTime": "string",
      "maintenanceExclusionOptions": {
        "scope": "NO_UPGRADES"
      },
      "startTime": "string"
    }
  },
  "recurringWindow": {
    "recurrence": "string",
    "window": {
      "endTime": "string",
      "maintenanceExclusionOptions": {
        "scope": "NO_UPGRADES"
      },
      "startTime": "string"
    }
  }
}
```

MaintenanceWindow defines the maintenance window to be used for the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dailyMaintenanceWindow|[DailyMaintenanceWindow](#schemadailymaintenancewindow)|false|none|DailyMaintenanceWindow specifies a daily maintenance operation window.|
|maintenanceExclusions|object|false|none|Exceptions to maintenance window. Non-emergency maintenance should not occur in these windows.|
|recurringWindow|[RecurringTimeWindow](#schemarecurringtimewindow)|false|none|RecurringWindow specifies some number of recurring time periods for maintenance to occur. The time windows may be overlapping. If no maintenance windows are set, maintenance can occur at any time.|

<h2 id="tocS_ManagedPrometheusConfig">ManagedPrometheusConfig</h2>
<!-- backwards compatibility -->
<a id="schemamanagedprometheusconfig"></a>
<a id="schema_ManagedPrometheusConfig"></a>
<a id="tocSmanagedprometheusconfig"></a>
<a id="tocsmanagedprometheusconfig"></a>

```json
{
  "enabled": true
}
```

ManagedPrometheusConfig defines the configuration for Google Cloud Managed Service for Prometheus.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Enable Managed Collection.|

<h2 id="tocS_Master">Master</h2>
<!-- backwards compatibility -->
<a id="schemamaster"></a>
<a id="schema_Master"></a>
<a id="tocSmaster"></a>
<a id="tocsmaster"></a>

```json
{}
```

Master is the configuration for components on master.

<h2 id="tocS_MasterAuth">MasterAuth</h2>
<!-- backwards compatibility -->
<a id="schemamasterauth"></a>
<a id="schema_MasterAuth"></a>
<a id="tocSmasterauth"></a>
<a id="tocsmasterauth"></a>

```json
{
  "clientCertificate": "string",
  "clientCertificateConfig": {
    "issueClientCertificate": true
  },
  "clientKey": "string",
  "clusterCaCertificate": "string",
  "password": "string",
  "username": "string"
}
```

The authentication information for accessing the master endpoint. Authentication can be done using HTTP basic auth or using client certificates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientCertificate|string|false|none|[Output only] Base64-encoded public certificate used by clients to authenticate to the cluster endpoint.|
|clientCertificateConfig|[ClientCertificateConfig](#schemaclientcertificateconfig)|false|none|Configuration for client certificate authentication on the cluster. For clusters before v1.12, if no configuration is specified, a client certificate is issued.|
|clientKey|string|false|none|[Output only] Base64-encoded private key used by clients to authenticate to the cluster endpoint.|
|clusterCaCertificate|string|false|none|none|
|password|string|false|none|**Deprecated.** The password to use for HTTP basic authentication to the master endpoint. Because the master endpoint is open to the Internet, you should create a strong password. If a password is provided for cluster creation, username must be non-empty. Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer. For a list of recommended authentication methods, see: https://cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication|
|username|string|false|none|**Deprecated.** The username to use for HTTP basic authentication to the master endpoint. For clusters v1.6.0 and later, basic authentication can be disabled by leaving username unspecified (or setting it to the empty string). Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer. For a list of recommended authentication methods, see: https://cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication|

<h2 id="tocS_MasterAuthorizedNetworksConfig">MasterAuthorizedNetworksConfig</h2>
<!-- backwards compatibility -->
<a id="schemamasterauthorizednetworksconfig"></a>
<a id="schema_MasterAuthorizedNetworksConfig"></a>
<a id="tocSmasterauthorizednetworksconfig"></a>
<a id="tocsmasterauthorizednetworksconfig"></a>

```json
{
  "cidrBlocks": [
    {
      "cidrBlock": "string",
      "displayName": "string"
    }
  ],
  "enabled": true,
  "gcpPublicCidrsAccessEnabled": true
}
```

Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cidrBlocks|[[CidrBlock](#schemacidrblock)]|false|none|cidr_blocks define up to 10 external networks that could access Kubernetes master through HTTPS.|
|enabled|boolean|false|none|Whether or not master authorized networks is enabled.|
|gcpPublicCidrsAccessEnabled|boolean|false|none|Whether master is accessbile via Google Compute Engine Public IP addresses.|

<h2 id="tocS_MaxPodsConstraint">MaxPodsConstraint</h2>
<!-- backwards compatibility -->
<a id="schemamaxpodsconstraint"></a>
<a id="schema_MaxPodsConstraint"></a>
<a id="tocSmaxpodsconstraint"></a>
<a id="tocsmaxpodsconstraint"></a>

```json
{
  "maxPodsPerNode": "string"
}
```

Constraints applied to pods.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxPodsPerNode|string(int64)|false|none|Constraint enforced on the max num of pods per node.|

<h2 id="tocS_MeshCertificates">MeshCertificates</h2>
<!-- backwards compatibility -->
<a id="schemameshcertificates"></a>
<a id="schema_MeshCertificates"></a>
<a id="tocSmeshcertificates"></a>
<a id="tocsmeshcertificates"></a>

```json
{
  "enableCertificates": true
}
```

Configuration for issuance of mTLS keys and certificates to Kubernetes pods.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableCertificates|boolean|false|none|enable_certificates controls issuance of workload mTLS certificates. If set, the GKE Workload Identity Certificates controller and node agent will be deployed in the cluster, which can then be configured by creating a WorkloadCertificateConfig Custom Resource. Requires Workload Identity (workload_pool must be non-empty).|

<h2 id="tocS_Metric">Metric</h2>
<!-- backwards compatibility -->
<a id="schemametric"></a>
<a id="schema_Metric"></a>
<a id="tocSmetric"></a>
<a id="tocsmetric"></a>

```json
{
  "doubleValue": 0,
  "intValue": "string",
  "name": "string",
  "stringValue": "string"
}
```

Progress metric is (string, int|float|string) pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|doubleValue|number(double)|false|none|For metrics with floating point value.|
|intValue|string(int64)|false|none|For metrics with integer value.|
|name|string|false|none|Required. Metric name, e.g., "nodes total", "percent done".|
|stringValue|string|false|none|For metrics with custom values (ratios, visual progress, etc.).|

<h2 id="tocS_MonitoringComponentConfig">MonitoringComponentConfig</h2>
<!-- backwards compatibility -->
<a id="schemamonitoringcomponentconfig"></a>
<a id="schema_MonitoringComponentConfig"></a>
<a id="tocSmonitoringcomponentconfig"></a>
<a id="tocsmonitoringcomponentconfig"></a>

```json
{
  "enableComponents": [
    "COMPONENT_UNSPECIFIED"
  ]
}
```

MonitoringComponentConfig is cluster monitoring component configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableComponents|[string]|false|none|Select components to collect metrics. An empty set would disable all monitoring.|

#### Enumerated Values

|Property|Value|
|---|---|
|enableComponents|COMPONENT_UNSPECIFIED|
|enableComponents|SYSTEM_COMPONENTS|
|enableComponents|WORKLOADS|
|enableComponents|APISERVER|
|enableComponents|SCHEDULER|
|enableComponents|CONTROLLER_MANAGER|
|enableComponents|STORAGE|
|enableComponents|HPA|
|enableComponents|POD|
|enableComponents|DAEMONSET|
|enableComponents|DEPLOYMENT|
|enableComponents|STATEFULSET|

<h2 id="tocS_MonitoringConfig">MonitoringConfig</h2>
<!-- backwards compatibility -->
<a id="schemamonitoringconfig"></a>
<a id="schema_MonitoringConfig"></a>
<a id="tocSmonitoringconfig"></a>
<a id="tocsmonitoringconfig"></a>

```json
{
  "advancedDatapathObservabilityConfig": {
    "enableMetrics": true,
    "enableRelay": true,
    "relayMode": "RELAY_MODE_UNSPECIFIED"
  },
  "componentConfig": {
    "enableComponents": [
      "COMPONENT_UNSPECIFIED"
    ]
  },
  "managedPrometheusConfig": {
    "enabled": true
  }
}
```

MonitoringConfig is cluster monitoring configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advancedDatapathObservabilityConfig|[AdvancedDatapathObservabilityConfig](#schemaadvanceddatapathobservabilityconfig)|false|none|Configuration of Advanced Datapath Observability features.|
|componentConfig|[MonitoringComponentConfig](#schemamonitoringcomponentconfig)|false|none|Monitoring components configuration|
|managedPrometheusConfig|[ManagedPrometheusConfig](#schemamanagedprometheusconfig)|false|none|Enable Google Cloud Managed Service for Prometheus in the cluster.|

<h2 id="tocS_NetworkConfig">NetworkConfig</h2>
<!-- backwards compatibility -->
<a id="schemanetworkconfig"></a>
<a id="schema_NetworkConfig"></a>
<a id="tocSnetworkconfig"></a>
<a id="tocsnetworkconfig"></a>

```json
{
  "datapathProvider": "DATAPATH_PROVIDER_UNSPECIFIED",
  "defaultSnatStatus": {
    "disabled": true
  },
  "dnsConfig": {
    "clusterDns": "PROVIDER_UNSPECIFIED",
    "clusterDnsDomain": "string",
    "clusterDnsScope": "DNS_SCOPE_UNSPECIFIED"
  },
  "enableFqdnNetworkPolicy": true,
  "enableIntraNodeVisibility": true,
  "enableL4ilbSubsetting": true,
  "enableMultiNetworking": true,
  "gatewayApiConfig": {
    "channel": "CHANNEL_UNSPECIFIED"
  },
  "inTransitEncryptionConfig": "IN_TRANSIT_ENCRYPTION_CONFIG_UNSPECIFIED",
  "network": "string",
  "networkPerformanceConfig": {
    "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
  },
  "privateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
  "serviceExternalIpsConfig": {
    "enabled": true
  },
  "subnetwork": "string"
}
```

NetworkConfig reports the relative names of network & subnetwork.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datapathProvider|string|false|none|The desired datapath provider for this cluster. By default, uses the IPTables-based kube-proxy implementation.|
|defaultSnatStatus|[DefaultSnatStatus](#schemadefaultsnatstatus)|false|none|Whether the cluster disables default in-node sNAT rules. In-node sNAT rules will be disabled when default_snat_status is disabled. When disabled is set to false, default IP masquerade rules will be applied to the nodes to prevent sNAT on cluster internal traffic.|
|dnsConfig|[DNSConfig](#schemadnsconfig)|false|none|DNSConfig contains clusterDNS config for this cluster.|
|enableFqdnNetworkPolicy|boolean|false|none|Whether FQDN Network Policy is enabled on this cluster.|
|enableIntraNodeVisibility|boolean|false|none|Whether Intra-node visibility is enabled for this cluster. This makes same node pod to pod traffic visible for VPC network.|
|enableL4ilbSubsetting|boolean|false|none|Whether L4ILB Subsetting is enabled for this cluster.|
|enableMultiNetworking|boolean|false|none|Whether multi-networking is enabled for this cluster.|
|gatewayApiConfig|[GatewayAPIConfig](#schemagatewayapiconfig)|false|none|GatewayAPIConfig contains the desired config of Gateway API on this cluster.|
|inTransitEncryptionConfig|string|false|none|Specify the details of in-transit encryption.|
|network|string|false|none|Output only. The relative name of the Google Compute Engine network(https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the cluster is connected. Example: projects/my-project/global/networks/my-network|
|networkPerformanceConfig|[ClusterNetworkPerformanceConfig](#schemaclusternetworkperformanceconfig)|false|none|Network bandwidth tier configuration.|
|privateIpv6GoogleAccess|string|false|none|The desired state of IPv6 connectivity to Google Services. By default, no private IPv6 access to or from Google Services (all access will be via IPv4)|
|serviceExternalIpsConfig|[ServiceExternalIPsConfig](#schemaserviceexternalipsconfig)|false|none|ServiceExternalIPsConfig specifies if services with externalIPs field are blocked or not.|
|subnetwork|string|false|none|Output only. The relative name of the Google Compute Engine [subnetwork](https://cloud.google.com/compute/docs/vpc) to which the cluster is connected. Example: projects/my-project/regions/us-central1/subnetworks/my-subnet|

#### Enumerated Values

|Property|Value|
|---|---|
|datapathProvider|DATAPATH_PROVIDER_UNSPECIFIED|
|datapathProvider|LEGACY_DATAPATH|
|datapathProvider|ADVANCED_DATAPATH|
|inTransitEncryptionConfig|IN_TRANSIT_ENCRYPTION_CONFIG_UNSPECIFIED|
|inTransitEncryptionConfig|IN_TRANSIT_ENCRYPTION_DISABLED|
|inTransitEncryptionConfig|IN_TRANSIT_ENCRYPTION_INTER_NODE_TRANSPARENT|
|privateIpv6GoogleAccess|PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED|
|privateIpv6GoogleAccess|PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED|
|privateIpv6GoogleAccess|PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE|
|privateIpv6GoogleAccess|PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL|

<h2 id="tocS_NetworkPerformanceConfig">NetworkPerformanceConfig</h2>
<!-- backwards compatibility -->
<a id="schemanetworkperformanceconfig"></a>
<a id="schema_NetworkPerformanceConfig"></a>
<a id="tocSnetworkperformanceconfig"></a>
<a id="tocsnetworkperformanceconfig"></a>

```json
{
  "externalIpEgressBandwidthTier": "TIER_UNSPECIFIED",
  "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
}
```

Configuration of all network bandwidth tiers

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externalIpEgressBandwidthTier|string|false|none|Specifies the network bandwidth tier for the NodePool for traffic to external/public IP addresses.|
|totalEgressBandwidthTier|string|false|none|Specifies the total network bandwidth tier for the NodePool.|

#### Enumerated Values

|Property|Value|
|---|---|
|externalIpEgressBandwidthTier|TIER_UNSPECIFIED|
|externalIpEgressBandwidthTier|TIER_1|
|totalEgressBandwidthTier|TIER_UNSPECIFIED|
|totalEgressBandwidthTier|TIER_1|

<h2 id="tocS_NetworkPolicy">NetworkPolicy</h2>
<!-- backwards compatibility -->
<a id="schemanetworkpolicy"></a>
<a id="schema_NetworkPolicy"></a>
<a id="tocSnetworkpolicy"></a>
<a id="tocsnetworkpolicy"></a>

```json
{
  "enabled": true,
  "provider": "PROVIDER_UNSPECIFIED"
}
```

Configuration options for the NetworkPolicy feature. https://kubernetes.io/docs/concepts/services-networking/networkpolicies/

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether network policy is enabled on the cluster.|
|provider|string|false|none|The selected network policy provider.|

#### Enumerated Values

|Property|Value|
|---|---|
|provider|PROVIDER_UNSPECIFIED|
|provider|CALICO|

<h2 id="tocS_NetworkPolicyConfig">NetworkPolicyConfig</h2>
<!-- backwards compatibility -->
<a id="schemanetworkpolicyconfig"></a>
<a id="schema_NetworkPolicyConfig"></a>
<a id="tocSnetworkpolicyconfig"></a>
<a id="tocsnetworkpolicyconfig"></a>

```json
{
  "disabled": true
}
```

Configuration for NetworkPolicy. This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|Whether NetworkPolicy is enabled for this cluster.|

<h2 id="tocS_NetworkTags">NetworkTags</h2>
<!-- backwards compatibility -->
<a id="schemanetworktags"></a>
<a id="schema_NetworkTags"></a>
<a id="tocSnetworktags"></a>
<a id="tocsnetworktags"></a>

```json
{
  "tags": [
    "string"
  ]
}
```

Collection of Compute Engine network tags that can be applied to a node's underlying VM instance. (See `tags` field in [`NodeConfig`](/kubernetes-engine/docs/reference/rest/v1/NodeConfig)).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|[string]|false|none|List of network tags.|

<h2 id="tocS_NodeAffinity">NodeAffinity</h2>
<!-- backwards compatibility -->
<a id="schemanodeaffinity"></a>
<a id="schema_NodeAffinity"></a>
<a id="tocSnodeaffinity"></a>
<a id="tocsnodeaffinity"></a>

```json
{
  "key": "string",
  "operator": "OPERATOR_UNSPECIFIED",
  "values": [
    "string"
  ]
}
```

Specifies the NodeAffinity key, values, and affinity operator according to [shared sole tenant node group affinities](https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes#node_affinity_and_anti-affinity).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|Key for NodeAffinity.|
|operator|string|false|none|Operator for NodeAffinity.|
|values|[string]|false|none|Values for NodeAffinity.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|OPERATOR_UNSPECIFIED|
|operator|IN|
|operator|NOT_IN|

<h2 id="tocS_NodeConfig">NodeConfig</h2>
<!-- backwards compatibility -->
<a id="schemanodeconfig"></a>
<a id="schema_NodeConfig"></a>
<a id="tocSnodeconfig"></a>
<a id="tocsnodeconfig"></a>

```json
{
  "accelerators": [
    {
      "acceleratorCount": "string",
      "acceleratorType": "string",
      "gpuDriverInstallationConfig": {
        "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
      },
      "gpuPartitionSize": "string",
      "gpuSharingConfig": {
        "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
        "maxSharedClientsPerGpu": "string"
      },
      "maxTimeSharedClientsPerGpu": "string"
    }
  ],
  "advancedMachineFeatures": {
    "threadsPerCore": "string"
  },
  "bootDiskKmsKey": "string",
  "confidentialNodes": {
    "enabled": true
  },
  "diskSizeGb": 0,
  "diskType": "string",
  "enableConfidentialStorage": true,
  "ephemeralStorageConfig": {
    "localSsdCount": 0
  },
  "ephemeralStorageLocalSsdConfig": {
    "localSsdCount": 0
  },
  "fastSocket": {
    "enabled": true
  },
  "gcfsConfig": {
    "enabled": true
  },
  "gvnic": {
    "enabled": true
  },
  "hostMaintenancePolicy": {
    "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
    "opportunisticMaintenanceStrategy": {
      "maintenanceAvailabilityWindow": "string",
      "minNodesPerPool": "string",
      "nodeIdleTimeWindow": "string"
    }
  },
  "imageType": "string",
  "kubeletConfig": {
    "cpuCfsQuota": true,
    "cpuCfsQuotaPeriod": "string",
    "cpuManagerPolicy": "string",
    "insecureKubeletReadonlyPortEnabled": true,
    "podPidsLimit": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "linuxNodeConfig": {
    "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
    "sysctls": {
      "property1": "string",
      "property2": "string"
    }
  },
  "localNvmeSsdBlockConfig": {
    "localSsdCount": 0
  },
  "localSsdCount": 0,
  "loggingConfig": {
    "variantConfig": {
      "variant": "VARIANT_UNSPECIFIED"
    }
  },
  "machineType": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "minCpuPlatform": "string",
  "nodeGroup": "string",
  "oauthScopes": [
    "string"
  ],
  "preemptible": true,
  "reservationAffinity": {
    "consumeReservationType": "UNSPECIFIED",
    "key": "string",
    "values": [
      "string"
    ]
  },
  "resourceLabels": {
    "property1": "string",
    "property2": "string"
  },
  "resourceManagerTags": {
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  },
  "sandboxConfig": {
    "sandboxType": "string",
    "type": "UNSPECIFIED"
  },
  "secondaryBootDisks": [
    {
      "diskImage": "string",
      "mode": "MODE_UNSPECIFIED"
    }
  ],
  "serviceAccount": "string",
  "shieldedInstanceConfig": {
    "enableIntegrityMonitoring": true,
    "enableSecureBoot": true
  },
  "soleTenantConfig": {
    "nodeAffinities": [
      {
        "key": "string",
        "operator": "OPERATOR_UNSPECIFIED",
        "values": [
          "string"
        ]
      }
    ]
  },
  "spot": true,
  "tags": [
    "string"
  ],
  "taints": [
    {
      "effect": "EFFECT_UNSPECIFIED",
      "key": "string",
      "value": "string"
    }
  ],
  "windowsNodeConfig": {
    "osVersion": "OS_VERSION_UNSPECIFIED"
  },
  "workloadMetadataConfig": {
    "mode": "MODE_UNSPECIFIED",
    "nodeMetadata": "UNSPECIFIED"
  }
}
```

Parameters that describe the nodes in a cluster. GKE Autopilot clusters do not recognize parameters in `NodeConfig`. Use AutoprovisioningNodePoolDefaults instead.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accelerators|[[AcceleratorConfig](#schemaacceleratorconfig)]|false|none|A list of hardware accelerators to be attached to each node. See https://cloud.google.com/compute/docs/gpus for more information about support for GPUs.|
|advancedMachineFeatures|[AdvancedMachineFeatures](#schemaadvancedmachinefeatures)|false|none|Advanced features for the Compute Engine VM.|
|bootDiskKmsKey|string|false|none| The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption|
|confidentialNodes|[ConfidentialNodes](#schemaconfidentialnodes)|false|none|Confidential nodes config. All the nodes in the node pool will be Confidential VM once enabled.|
|diskSizeGb|integer(int32)|false|none|Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. If unspecified, the default disk size is 100GB.|
|diskType|string|false|none|Type of the disk attached to each node (e.g. 'pd-standard', 'pd-ssd' or 'pd-balanced') If unspecified, the default disk type is 'pd-standard'|
|enableConfidentialStorage|boolean|false|none|Optional. Reserved for future use.|
|ephemeralStorageConfig|[EphemeralStorageConfig](#schemaephemeralstorageconfig)|false|none|Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.|
|ephemeralStorageLocalSsdConfig|[EphemeralStorageLocalSsdConfig](#schemaephemeralstoragelocalssdconfig)|false|none|Parameters for the node ephemeral storage using Local SSDs. If unspecified, ephemeral storage is backed by the boot disk. This field is functionally equivalent to the ephemeral_storage_config|
|fastSocket|[FastSocket](#schemafastsocket)|false|none|Enable or disable NCCL fast socket for the node pool.|
|gcfsConfig|[GcfsConfig](#schemagcfsconfig)|false|none|GCFS (Google Container File System) configs.|
|gvnic|[VirtualNIC](#schemavirtualnic)|false|none|Enable or disable gvnic on the node pool.|
|hostMaintenancePolicy|[HostMaintenancePolicy](#schemahostmaintenancepolicy)|false|none|HostMaintenancePolicy contains the desired maintenance policy for the Google Compute Engine hosts.|
|imageType|string|false|none|The image type to use for this node. Note that for a given image type, the latest version of it will be used. Please see https://cloud.google.com/kubernetes-engine/docs/concepts/node-images for available image types.|
|kubeletConfig|[NodeKubeletConfig](#schemanodekubeletconfig)|false|none|Node kubelet configs.|
|labels|object|false|none|The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node. In case of conflict in label keys, the applied set may differ depending on the Kubernetes version -- it's best to assume the behavior is undefined and conflicts should be avoided. For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/|
|linuxNodeConfig|[LinuxNodeConfig](#schemalinuxnodeconfig)|false|none|Parameters that can be configured on Linux nodes.|
|localNvmeSsdBlockConfig|[LocalNvmeSsdBlockConfig](#schemalocalnvmessdblockconfig)|false|none|Parameters for using raw-block Local NVMe SSDs.|
|localSsdCount|integer(int32)|false|none|The number of local SSD disks to be attached to the node. The limit for this value is dependent upon the maximum number of disks available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information.|
|loggingConfig|[NodePoolLoggingConfig](#schemanodepoolloggingconfig)|false|none|Logging configuration.|
|machineType|string|false|none|The name of a Google Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-types). If unspecified, the default machine type is `e2-medium`.|
|metadata|object|false|none|The metadata key/value pairs assigned to instances in the cluster. Keys must conform to the regexp `[a-zA-Z0-9-_]+` and be less than 128 bytes in length. These are reflected as part of a URL in the metadata server. Additionally, to avoid ambiguity, keys must not conflict with any other metadata keys for the project or be one of the reserved keys: - "cluster-location" - "cluster-name" - "cluster-uid" - "configure-sh" - "containerd-configure-sh" - "enable-oslogin" - "gci-ensure-gke-docker" - "gci-metrics-enabled" - "gci-update-strategy" - "instance-template" - "kube-env" - "startup-script" - "user-data" - "disable-address-manager" - "windows-startup-script-ps1" - "common-psm1" - "k8s-node-setup-psm1" - "install-ssh-psm1" - "user-profile-psm1" Values are free-form strings, and only have meaning as interpreted by the image running in the instance. The only restriction placed on them is that each value's size must be less than or equal to 32 KB. The total size of all keys and values must be less than 512 KB.|
|minCpuPlatform|string|false|none|Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as `minCpuPlatform: "Intel Haswell"` or `minCpuPlatform: "Intel Sandy Bridge"`. For more information, read [how to specify min CPU platform](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform).|
|nodeGroup|string|false|none|Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on [sole tenant nodes](https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes).|
|oauthScopes|[string]|false|none|The set of Google API scopes to be made available on all of the node VMs under the "default" service account. The following scopes are recommended, but not required, and by default are not included: * `https://www.googleapis.com/auth/compute` is required for mounting persistent storage on your nodes. * `https://www.googleapis.com/auth/devstorage.read_only` is required for communicating with **gcr.io** (the [Google Container Registry](https://cloud.google.com/container-registry/)). If unspecified, no scopes are added, unless Cloud Logging or Cloud Monitoring are enabled, in which case their required scopes will be added.|
|preemptible|boolean|false|none|Whether the nodes are created as preemptible VM instances. See: https://cloud.google.com/compute/docs/instances/preemptible for more information about preemptible VM instances.|
|reservationAffinity|[ReservationAffinity](#schemareservationaffinity)|false|none|The optional reservation affinity. Setting this field will apply the specified [Zonal Compute Reservation](https://cloud.google.com/compute/docs/instances/reserving-zonal-resources) to this node pool.|
|resourceLabels|object|false|none|The resource labels for the node pool to use to annotate any related Google Compute Engine resources.|
|resourceManagerTags|[ResourceManagerTags](#schemaresourcemanagertags)|false|none|A map of resource manager tag keys and values to be attached to the nodes.|
|sandboxConfig|[SandboxConfig](#schemasandboxconfig)|false|none|Sandbox configuration for this node.|
|secondaryBootDisks|[[SecondaryBootDisk](#schemasecondarybootdisk)]|false|none|List of secondary boot disks attached to the nodes.|
|serviceAccount|string|false|none|The Google Cloud Platform Service Account to be used by the node VMs. Specify the email address of the Service Account; otherwise, if no Service Account is specified, the "default" service account is used.|
|shieldedInstanceConfig|[ShieldedInstanceConfig](#schemashieldedinstanceconfig)|false|none|Shielded Instance options.|
|soleTenantConfig|[SoleTenantConfig](#schemasoletenantconfig)|false|none|Parameters for node pools to be backed by shared sole tenant node groups.|
|spot|boolean|false|none|Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag.|
|tags|[string]|false|none|The list of instance tags applied to all nodes. Tags are used to identify valid sources or targets for network firewalls and are specified by the client during cluster or node pool creation. Each tag within the list must comply with RFC1035.|
|taints|[[NodeTaint](#schemanodetaint)]|false|none|List of kubernetes taints to be applied to each node. For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/|
|windowsNodeConfig|[WindowsNodeConfig](#schemawindowsnodeconfig)|false|none|Parameters that can be configured on Windows nodes.|
|workloadMetadataConfig|[WorkloadMetadataConfig](#schemaworkloadmetadataconfig)|false|none|The workload metadata configuration for this node.|

<h2 id="tocS_NodeConfigDefaults">NodeConfigDefaults</h2>
<!-- backwards compatibility -->
<a id="schemanodeconfigdefaults"></a>
<a id="schema_NodeConfigDefaults"></a>
<a id="tocSnodeconfigdefaults"></a>
<a id="tocsnodeconfigdefaults"></a>

```json
{
  "gcfsConfig": {
    "enabled": true
  },
  "hostMaintenancePolicy": {
    "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
    "opportunisticMaintenanceStrategy": {
      "maintenanceAvailabilityWindow": "string",
      "minNodesPerPool": "string",
      "nodeIdleTimeWindow": "string"
    }
  },
  "loggingConfig": {
    "variantConfig": {
      "variant": "VARIANT_UNSPECIFIED"
    }
  }
}
```

Subset of NodeConfig message that has defaults.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcfsConfig|[GcfsConfig](#schemagcfsconfig)|false|none|GCFS (Google Container File System, also known as Riptide) options.|
|hostMaintenancePolicy|[HostMaintenancePolicy](#schemahostmaintenancepolicy)|false|none|HostMaintenancePolicy contains the desired maintenance policy for the Google Compute Engine hosts.|
|loggingConfig|[NodePoolLoggingConfig](#schemanodepoolloggingconfig)|false|none|Logging configuration for node pools.|

<h2 id="tocS_NodeKubeletConfig">NodeKubeletConfig</h2>
<!-- backwards compatibility -->
<a id="schemanodekubeletconfig"></a>
<a id="schema_NodeKubeletConfig"></a>
<a id="tocSnodekubeletconfig"></a>
<a id="tocsnodekubeletconfig"></a>

```json
{
  "cpuCfsQuota": true,
  "cpuCfsQuotaPeriod": "string",
  "cpuManagerPolicy": "string",
  "insecureKubeletReadonlyPortEnabled": true,
  "podPidsLimit": "string"
}
```

Node kubelet configs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpuCfsQuota|boolean|false|none|Enable CPU CFS quota enforcement for containers that specify CPU limits. This option is enabled by default which makes kubelet use CFS quota (https://www.kernel.org/doc/Documentation/scheduler/sched-bwc.txt) to enforce container CPU limits. Otherwise, CPU limits will not be enforced at all. Disable this option to mitigate CPU throttling problems while still having your pods to be in Guaranteed QoS class by specifying the CPU limits. The default value is 'true' if unspecified.|
|cpuCfsQuotaPeriod|string|false|none|Set the CPU CFS quota period value 'cpu.cfs_period_us'. The string must be a sequence of decimal numbers, each with optional fraction and a unit suffix, such as "300ms". Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h". The value must be a positive duration.|
|cpuManagerPolicy|string|false|none|Control the CPU management policy on the node. See https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/ The following values are allowed. * "none": the default, which represents the existing scheduling behavior. * "static": allows pods with certain resource characteristics to be granted increased CPU affinity and exclusivity on the node. The default value is 'none' if unspecified.|
|insecureKubeletReadonlyPortEnabled|boolean|false|none|Enable or disable Kubelet read only port.|
|podPidsLimit|string(int64)|false|none|Set the Pod PID limits. See https://kubernetes.io/docs/concepts/policy/pid-limiting/#pod-pid-limits Controls the maximum number of processes allowed to run in a pod. The value must be greater than or equal to 1024 and less than 4194304.|

<h2 id="tocS_NodeLabels">NodeLabels</h2>
<!-- backwards compatibility -->
<a id="schemanodelabels"></a>
<a id="schema_NodeLabels"></a>
<a id="tocSnodelabels"></a>
<a id="tocsnodelabels"></a>

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  }
}
```

Collection of node-level [Kubernetes labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|object|false|none|Map of node label keys and node label values.|

<h2 id="tocS_NodeManagement">NodeManagement</h2>
<!-- backwards compatibility -->
<a id="schemanodemanagement"></a>
<a id="schema_NodeManagement"></a>
<a id="tocSnodemanagement"></a>
<a id="tocsnodemanagement"></a>

```json
{
  "autoRepair": true,
  "autoUpgrade": true,
  "upgradeOptions": {
    "autoUpgradeStartTime": "string",
    "description": "string"
  }
}
```

NodeManagement defines the set of node management services turned on for the node pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoRepair|boolean|false|none|Whether the nodes will be automatically repaired.|
|autoUpgrade|boolean|false|none|Whether the nodes will be automatically upgraded.|
|upgradeOptions|[AutoUpgradeOptions](#schemaautoupgradeoptions)|false|none|Specifies the Auto Upgrade knobs for the node pool.|

<h2 id="tocS_NodeNetworkConfig">NodeNetworkConfig</h2>
<!-- backwards compatibility -->
<a id="schemanodenetworkconfig"></a>
<a id="schema_NodeNetworkConfig"></a>
<a id="tocSnodenetworkconfig"></a>
<a id="tocsnodenetworkconfig"></a>

```json
{
  "additionalNodeNetworkConfigs": [
    {
      "network": "string",
      "subnetwork": "string"
    }
  ],
  "additionalPodNetworkConfigs": [
    {
      "maxPodsPerNode": {
        "maxPodsPerNode": "string"
      },
      "secondaryPodRange": "string",
      "subnetwork": "string"
    }
  ],
  "createPodRange": true,
  "enablePrivateNodes": true,
  "networkPerformanceConfig": {
    "externalIpEgressBandwidthTier": "TIER_UNSPECIFIED",
    "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
  },
  "podCidrOverprovisionConfig": {
    "disable": true
  },
  "podIpv4CidrBlock": "string",
  "podIpv4RangeUtilization": 0,
  "podRange": "string"
}
```

Parameters for node pool-level network config.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalNodeNetworkConfigs|[[AdditionalNodeNetworkConfig](#schemaadditionalnodenetworkconfig)]|false|none|We specify the additional node networks for this node pool using this list. Each node network corresponds to an additional interface|
|additionalPodNetworkConfigs|[[AdditionalPodNetworkConfig](#schemaadditionalpodnetworkconfig)]|false|none|We specify the additional pod networks for this node pool using this list. Each pod network corresponds to an additional alias IP range for the node|
|createPodRange|boolean|false|none|Input only. Whether to create a new range for pod IPs in this node pool. Defaults are provided for `pod_range` and `pod_ipv4_cidr_block` if they are not specified. If neither `create_pod_range` or `pod_range` are specified, the cluster-level default (`ip_allocation_policy.cluster_ipv4_cidr_block`) is used. Only applicable if `ip_allocation_policy.use_ip_aliases` is true. This field cannot be changed after the node pool has been created.|
|enablePrivateNodes|boolean|false|none|Whether nodes have internal IP addresses only. If enable_private_nodes is not specified, then the value is derived from cluster.privateClusterConfig.enablePrivateNodes|
|networkPerformanceConfig|[NetworkPerformanceConfig](#schemanetworkperformanceconfig)|false|none|Network bandwidth tier configuration.|
|podCidrOverprovisionConfig|[PodCIDROverprovisionConfig](#schemapodcidroverprovisionconfig)|false|none|[PRIVATE FIELD] Pod CIDR size overprovisioning config for the nodepool. Pod CIDR size per node depends on max_pods_per_node. By default, the value of max_pods_per_node is rounded off to next power of 2 and we then double that to get the size of pod CIDR block per node. Example: max_pods_per_node of 30 would result in 64 IPs (/26). This config can disable the doubling of IPs (we still round off to next power of 2) Example: max_pods_per_node of 30 will result in 32 IPs (/27) when overprovisioning is disabled.|
|podIpv4CidrBlock|string|false|none|The IP address range for pod IPs in this node pool. Only applicable if `create_pod_range` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) to pick a specific range to use. Only applicable if `ip_allocation_policy.use_ip_aliases` is true. This field cannot be changed after the node pool has been created.|
|podIpv4RangeUtilization|number(double)|false|read-only|Output only. [Output only] The utilization of the IPv4 range for the pod. The ratio is Usage/[Total number of IPs in the secondary range], Usage=numNodes*numZones*podIPsPerNode.|
|podRange|string|false|none|The ID of the secondary range for pod IPs. If `create_pod_range` is true, this ID is used for the new range. If `create_pod_range` is false, uses an existing secondary range with this ID. Only applicable if `ip_allocation_policy.use_ip_aliases` is true. This field cannot be changed after the node pool has been created.|

<h2 id="tocS_NodePool">NodePool</h2>
<!-- backwards compatibility -->
<a id="schemanodepool"></a>
<a id="schema_NodePool"></a>
<a id="tocSnodepool"></a>
<a id="tocsnodepool"></a>

```json
{
  "autoscaling": {
    "autoprovisioned": true,
    "enabled": true,
    "locationPolicy": "LOCATION_POLICY_UNSPECIFIED",
    "maxNodeCount": 0,
    "minNodeCount": 0,
    "totalMaxNodeCount": 0,
    "totalMinNodeCount": 0
  },
  "bestEffortProvisioning": {
    "enabled": true,
    "minProvisionNodes": 0
  },
  "conditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "config": {
    "accelerators": [
      {
        "acceleratorCount": "string",
        "acceleratorType": "string",
        "gpuDriverInstallationConfig": {
          "gpuDriverVersion": "GPU_DRIVER_VERSION_UNSPECIFIED"
        },
        "gpuPartitionSize": "string",
        "gpuSharingConfig": {
          "gpuSharingStrategy": "GPU_SHARING_STRATEGY_UNSPECIFIED",
          "maxSharedClientsPerGpu": "string"
        },
        "maxTimeSharedClientsPerGpu": "string"
      }
    ],
    "advancedMachineFeatures": {
      "threadsPerCore": "string"
    },
    "bootDiskKmsKey": "string",
    "confidentialNodes": {
      "enabled": true
    },
    "diskSizeGb": 0,
    "diskType": "string",
    "enableConfidentialStorage": true,
    "ephemeralStorageConfig": {
      "localSsdCount": 0
    },
    "ephemeralStorageLocalSsdConfig": {
      "localSsdCount": 0
    },
    "fastSocket": {
      "enabled": true
    },
    "gcfsConfig": {
      "enabled": true
    },
    "gvnic": {
      "enabled": true
    },
    "hostMaintenancePolicy": {
      "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
      "opportunisticMaintenanceStrategy": {
        "maintenanceAvailabilityWindow": "string",
        "minNodesPerPool": "string",
        "nodeIdleTimeWindow": "string"
      }
    },
    "imageType": "string",
    "kubeletConfig": {
      "cpuCfsQuota": true,
      "cpuCfsQuotaPeriod": "string",
      "cpuManagerPolicy": "string",
      "insecureKubeletReadonlyPortEnabled": true,
      "podPidsLimit": "string"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "linuxNodeConfig": {
      "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
      "sysctls": {
        "property1": "string",
        "property2": "string"
      }
    },
    "localNvmeSsdBlockConfig": {
      "localSsdCount": 0
    },
    "localSsdCount": 0,
    "loggingConfig": {
      "variantConfig": {
        "variant": "VARIANT_UNSPECIFIED"
      }
    },
    "machineType": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "minCpuPlatform": "string",
    "nodeGroup": "string",
    "oauthScopes": [
      "string"
    ],
    "preemptible": true,
    "reservationAffinity": {
      "consumeReservationType": "UNSPECIFIED",
      "key": "string",
      "values": [
        "string"
      ]
    },
    "resourceLabels": {
      "property1": "string",
      "property2": "string"
    },
    "resourceManagerTags": {
      "tags": {
        "property1": "string",
        "property2": "string"
      }
    },
    "sandboxConfig": {
      "sandboxType": "string",
      "type": "UNSPECIFIED"
    },
    "secondaryBootDisks": [
      {
        "diskImage": "string",
        "mode": "MODE_UNSPECIFIED"
      }
    ],
    "serviceAccount": "string",
    "shieldedInstanceConfig": {
      "enableIntegrityMonitoring": true,
      "enableSecureBoot": true
    },
    "soleTenantConfig": {
      "nodeAffinities": [
        {
          "key": "string",
          "operator": "OPERATOR_UNSPECIFIED",
          "values": [
            "string"
          ]
        }
      ]
    },
    "spot": true,
    "tags": [
      "string"
    ],
    "taints": [
      {
        "effect": "EFFECT_UNSPECIFIED",
        "key": "string",
        "value": "string"
      }
    ],
    "windowsNodeConfig": {
      "osVersion": "OS_VERSION_UNSPECIFIED"
    },
    "workloadMetadataConfig": {
      "mode": "MODE_UNSPECIFIED",
      "nodeMetadata": "UNSPECIFIED"
    }
  },
  "etag": "string",
  "initialNodeCount": 0,
  "instanceGroupUrls": [
    "string"
  ],
  "locations": [
    "string"
  ],
  "management": {
    "autoRepair": true,
    "autoUpgrade": true,
    "upgradeOptions": {
      "autoUpgradeStartTime": "string",
      "description": "string"
    }
  },
  "maxPodsConstraint": {
    "maxPodsPerNode": "string"
  },
  "name": "string",
  "networkConfig": {
    "additionalNodeNetworkConfigs": [
      {
        "network": "string",
        "subnetwork": "string"
      }
    ],
    "additionalPodNetworkConfigs": [
      {
        "maxPodsPerNode": {
          "maxPodsPerNode": "string"
        },
        "secondaryPodRange": "string",
        "subnetwork": "string"
      }
    ],
    "createPodRange": true,
    "enablePrivateNodes": true,
    "networkPerformanceConfig": {
      "externalIpEgressBandwidthTier": "TIER_UNSPECIFIED",
      "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
    },
    "podCidrOverprovisionConfig": {
      "disable": true
    },
    "podIpv4CidrBlock": "string",
    "podIpv4RangeUtilization": 0,
    "podRange": "string"
  },
  "placementPolicy": {
    "policyName": "string",
    "tpuTopology": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "podIpv4CidrSize": 0,
  "queuedProvisioning": {
    "enabled": true
  },
  "selfLink": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "updateInfo": {
    "blueGreenInfo": {
      "blueInstanceGroupUrls": [
        "string"
      ],
      "bluePoolDeletionStartTime": "string",
      "greenInstanceGroupUrls": [
        "string"
      ],
      "greenPoolVersion": "string",
      "phase": "PHASE_UNSPECIFIED"
    }
  },
  "upgradeSettings": {
    "blueGreenSettings": {
      "autoscaledRolloutPolicy": {},
      "nodePoolSoakDuration": "string",
      "standardRolloutPolicy": {
        "batchNodeCount": 0,
        "batchPercentage": 0,
        "batchSoakDuration": "string"
      }
    },
    "maxSurge": 0,
    "maxUnavailable": 0,
    "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
  },
  "version": "string"
}
```

NodePool contains the name and configuration for a cluster's node pool. Node pools are a set of nodes (i.e. VM's), with a common configuration and specification, under the control of the cluster master. They may have a set of Kubernetes labels applied to them, which may be used to reference them during pod scheduling. They may also be resized up or down, to accommodate the workload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoscaling|[NodePoolAutoscaling](#schemanodepoolautoscaling)|false|none|Autoscaler configuration for this NodePool. Autoscaler is enabled only if a valid configuration is present.|
|bestEffortProvisioning|[BestEffortProvisioning](#schemabesteffortprovisioning)|false|none|Enable best effort provisioning for nodes|
|conditions|[[StatusCondition](#schemastatuscondition)]|false|none|Which conditions caused the current node pool state.|
|config|[NodeConfig](#schemanodeconfig)|false|none|The node configuration of the pool.|
|etag|string|false|none|This checksum is computed by the server based on the value of node pool fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding.|
|initialNodeCount|integer(int32)|false|none|The initial node count for the pool. You must ensure that your Compute Engine [resource quota](https://cloud.google.com/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota.|
|instanceGroupUrls|[string]|false|none|[Output only] The resource URLs of the [managed instance groups](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances) associated with this node pool. During the node pool blue-green upgrade operation, the URLs contain both blue and green resources.|
|locations|[string]|false|none|The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the NodePool's nodes should be located. If this value is unspecified during node pool creation, the [Cluster.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters#Cluster.FIELDS.locations) value will be used, instead. Warning: changing node pool locations will result in nodes being added and/or removed.|
|management|[NodeManagement](#schemanodemanagement)|false|none|NodeManagement configuration for this NodePool.|
|maxPodsConstraint|[MaxPodsConstraint](#schemamaxpodsconstraint)|false|none|The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool.|
|name|string|false|none|The name of the node pool.|
|networkConfig|[NodeNetworkConfig](#schemanodenetworkconfig)|false|none|Networking configuration for this NodePool. If specified, it overrides the cluster-level defaults.|
|placementPolicy|[PlacementPolicy](#schemaplacementpolicy)|false|none|Specifies the node placement policy.|
|podIpv4CidrSize|integer(int32)|false|none|[Output only] The pod CIDR block size per node in this node pool.|
|queuedProvisioning|[QueuedProvisioning](#schemaqueuedprovisioning)|false|none|Specifies the configuration of queued provisioning.|
|selfLink|string|false|none|[Output only] Server-defined URL for the resource.|
|status|string|false|none|[Output only] The status of the nodes in this pool instance.|
|statusMessage|string|false|none|**Deprecated.** [Output only] Deprecated. Use conditions instead. Additional information about the current status of this node pool instance, if available.|
|updateInfo|[UpdateInfo](#schemaupdateinfo)|false|none|Output only. [Output only] Update info contains relevant information during a node pool update.|
|upgradeSettings|[UpgradeSettings](#schemaupgradesettings)|false|none|Upgrade settings control disruption and speed of the upgrade.|
|version|string|false|none|The version of Kubernetes running on this NodePool's nodes. If unspecified, it defaults as described [here](https://cloud.google.com/kubernetes-engine/versioning#specifying_node_version).|

#### Enumerated Values

|Property|Value|
|---|---|
|status|STATUS_UNSPECIFIED|
|status|PROVISIONING|
|status|RUNNING|
|status|RUNNING_WITH_ERROR|
|status|RECONCILING|
|status|STOPPING|
|status|ERROR|

<h2 id="tocS_NodePoolAutoConfig">NodePoolAutoConfig</h2>
<!-- backwards compatibility -->
<a id="schemanodepoolautoconfig"></a>
<a id="schema_NodePoolAutoConfig"></a>
<a id="tocSnodepoolautoconfig"></a>
<a id="tocsnodepoolautoconfig"></a>

```json
{
  "networkTags": {
    "tags": [
      "string"
    ]
  },
  "resourceManagerTags": {
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|networkTags|[NetworkTags](#schemanetworktags)|false|none|The list of instance tags applied to all nodes. Tags are used to identify valid sources or targets for network firewalls and are specified by the client during cluster creation. Each tag within the list must comply with RFC1035.|
|resourceManagerTags|[ResourceManagerTags](#schemaresourcemanagertags)|false|none|Resource manager tag keys and values to be attached to the nodes for managing Compute Engine firewalls using Network Firewall Policies.|

<h2 id="tocS_NodePoolAutoscaling">NodePoolAutoscaling</h2>
<!-- backwards compatibility -->
<a id="schemanodepoolautoscaling"></a>
<a id="schema_NodePoolAutoscaling"></a>
<a id="tocSnodepoolautoscaling"></a>
<a id="tocsnodepoolautoscaling"></a>

```json
{
  "autoprovisioned": true,
  "enabled": true,
  "locationPolicy": "LOCATION_POLICY_UNSPECIFIED",
  "maxNodeCount": 0,
  "minNodeCount": 0,
  "totalMaxNodeCount": 0,
  "totalMinNodeCount": 0
}
```

NodePoolAutoscaling contains information required by cluster autoscaler to adjust the size of the node pool to the current cluster usage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoprovisioned|boolean|false|none|Can this node pool be deleted automatically.|
|enabled|boolean|false|none|Is autoscaling enabled for this node pool.|
|locationPolicy|string|false|none|Location policy used when scaling up a nodepool.|
|maxNodeCount|integer(int32)|false|none|Maximum number of nodes for one location in the NodePool. Must be >= min_node_count. There has to be enough quota to scale up the cluster.|
|minNodeCount|integer(int32)|false|none|Minimum number of nodes for one location in the NodePool. Must be >= 1 and <= max_node_count.|
|totalMaxNodeCount|integer(int32)|false|none|Maximum number of nodes in the node pool. Must be greater than total_min_node_count. There has to be enough quota to scale up the cluster. The total_*_node_count fields are mutually exclusive with the *_node_count fields.|
|totalMinNodeCount|integer(int32)|false|none|Minimum number of nodes in the node pool. Must be greater than 1 less than total_max_node_count. The total_*_node_count fields are mutually exclusive with the *_node_count fields.|

#### Enumerated Values

|Property|Value|
|---|---|
|locationPolicy|LOCATION_POLICY_UNSPECIFIED|
|locationPolicy|BALANCED|
|locationPolicy|ANY|

<h2 id="tocS_NodePoolDefaults">NodePoolDefaults</h2>
<!-- backwards compatibility -->
<a id="schemanodepooldefaults"></a>
<a id="schema_NodePoolDefaults"></a>
<a id="tocSnodepooldefaults"></a>
<a id="tocsnodepooldefaults"></a>

```json
{
  "nodeConfigDefaults": {
    "gcfsConfig": {
      "enabled": true
    },
    "hostMaintenancePolicy": {
      "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
      "opportunisticMaintenanceStrategy": {
        "maintenanceAvailabilityWindow": "string",
        "minNodesPerPool": "string",
        "nodeIdleTimeWindow": "string"
      }
    },
    "loggingConfig": {
      "variantConfig": {
        "variant": "VARIANT_UNSPECIFIED"
      }
    }
  }
}
```

Subset of Nodepool message that has defaults.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodeConfigDefaults|[NodeConfigDefaults](#schemanodeconfigdefaults)|false|none|Subset of NodeConfig message that has defaults.|

<h2 id="tocS_NodePoolLoggingConfig">NodePoolLoggingConfig</h2>
<!-- backwards compatibility -->
<a id="schemanodepoolloggingconfig"></a>
<a id="schema_NodePoolLoggingConfig"></a>
<a id="tocSnodepoolloggingconfig"></a>
<a id="tocsnodepoolloggingconfig"></a>

```json
{
  "variantConfig": {
    "variant": "VARIANT_UNSPECIFIED"
  }
}
```

NodePoolLoggingConfig specifies logging configuration for nodepools.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|variantConfig|[LoggingVariantConfig](#schemaloggingvariantconfig)|false|none|Logging variant configuration.|

<h2 id="tocS_NodeTaint">NodeTaint</h2>
<!-- backwards compatibility -->
<a id="schemanodetaint"></a>
<a id="schema_NodeTaint"></a>
<a id="tocSnodetaint"></a>
<a id="tocsnodetaint"></a>

```json
{
  "effect": "EFFECT_UNSPECIFIED",
  "key": "string",
  "value": "string"
}
```

Kubernetes taint is composed of three fields: key, value, and effect. Effect can only be one of three types: NoSchedule, PreferNoSchedule or NoExecute. See [here](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration) for more information, including usage and the valid values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|effect|string|false|none|Effect for taint.|
|key|string|false|none|Key for taint.|
|value|string|false|none|Value for taint.|

#### Enumerated Values

|Property|Value|
|---|---|
|effect|EFFECT_UNSPECIFIED|
|effect|NO_SCHEDULE|
|effect|PREFER_NO_SCHEDULE|
|effect|NO_EXECUTE|

<h2 id="tocS_NodeTaints">NodeTaints</h2>
<!-- backwards compatibility -->
<a id="schemanodetaints"></a>
<a id="schema_NodeTaints"></a>
<a id="tocSnodetaints"></a>
<a id="tocsnodetaints"></a>

```json
{
  "taints": [
    {
      "effect": "EFFECT_UNSPECIFIED",
      "key": "string",
      "value": "string"
    }
  ]
}
```

Collection of Kubernetes [node taints](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taints|[[NodeTaint](#schemanodetaint)]|false|none|List of node taints.|

<h2 id="tocS_NotificationConfig">NotificationConfig</h2>
<!-- backwards compatibility -->
<a id="schemanotificationconfig"></a>
<a id="schema_NotificationConfig"></a>
<a id="tocSnotificationconfig"></a>
<a id="tocsnotificationconfig"></a>

```json
{
  "pubsub": {
    "enabled": true,
    "filter": {
      "eventType": [
        "EVENT_TYPE_UNSPECIFIED"
      ]
    },
    "topic": "string"
  }
}
```

NotificationConfig is the configuration of notifications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pubsub|[PubSub](#schemapubsub)|false|none|Notification config for Pub/Sub.|

<h2 id="tocS_Operation">Operation</h2>
<!-- backwards compatibility -->
<a id="schemaoperation"></a>
<a id="schema_Operation"></a>
<a id="tocSoperation"></a>
<a id="tocsoperation"></a>

```json
{
  "clusterConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "detail": "string",
  "endTime": "string",
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
  "location": "string",
  "name": "string",
  "nodepoolConditions": [
    {
      "canonicalCode": "OK",
      "code": "UNKNOWN",
      "message": "string"
    }
  ],
  "operationType": "TYPE_UNSPECIFIED",
  "progress": {
    "metrics": [
      {
        "doubleValue": 0,
        "intValue": "string",
        "name": "string",
        "stringValue": "string"
      }
    ],
    "name": "string",
    "stages": [
      {}
    ],
    "status": "STATUS_UNSPECIFIED"
  },
  "selfLink": "string",
  "startTime": "string",
  "status": "STATUS_UNSPECIFIED",
  "statusMessage": "string",
  "targetLink": "string",
  "zone": "string"
}
```

This operation resource represents operations that may have happened or are happening on the cluster. All fields are output only.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterConditions|[[StatusCondition](#schemastatuscondition)]|false|none|**Deprecated.** Which conditions caused the current cluster state. Deprecated. Use field error instead.|
|detail|string|false|none|Detailed operation progress, if available.|
|endTime|string|false|none|[Output only] The time the operation completed, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.|
|error|[Status](#schemastatus)|false|none|The error result of the operation in case of failure.|
|location|string|false|none|[Output only] The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) or [region](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) in which the cluster resides.|
|name|string|false|none|The server-assigned ID for the operation.|
|nodepoolConditions|[[StatusCondition](#schemastatuscondition)]|false|none|**Deprecated.** Which conditions caused the current node pool state. Deprecated. Use field error instead.|
|operationType|string|false|none|The operation type.|
|progress|[OperationProgress](#schemaoperationprogress)|false|none|Output only. [Output only] Progress information for an operation.|
|selfLink|string|false|none|Server-defined URI for the operation. Example: `https://container.googleapis.com/v1alpha1/projects/123/locations/us-central1/operations/operation-123`.|
|startTime|string|false|none|[Output only] The time the operation started, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.|
|status|string|false|none|The current status of the operation.|
|statusMessage|string|false|read-only|**Deprecated.** Output only. If an error has occurred, a textual description of the error. Deprecated. Use field error instead.|
|targetLink|string|false|none|Server-defined URI for the target of the operation. The format of this is a URI to the resource being modified (such as a cluster, node pool, or node). For node pool repairs, there may be multiple nodes being repaired, but only one will be the target. Examples: - ## `https://container.googleapis.com/v1/projects/123/locations/us-central1/clusters/my-cluster` ## `https://container.googleapis.com/v1/projects/123/zones/us-central1-c/clusters/my-cluster/nodePools/my-np` `https://container.googleapis.com/v1/projects/123/zones/us-central1-c/clusters/my-cluster/nodePools/my-np/node/my-node`|
|zone|string|false|none|**Deprecated.** The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation is taking place. This field is deprecated, use location instead.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|TYPE_UNSPECIFIED|
|operationType|CREATE_CLUSTER|
|operationType|DELETE_CLUSTER|
|operationType|UPGRADE_MASTER|
|operationType|UPGRADE_NODES|
|operationType|REPAIR_CLUSTER|
|operationType|UPDATE_CLUSTER|
|operationType|CREATE_NODE_POOL|
|operationType|DELETE_NODE_POOL|
|operationType|SET_NODE_POOL_MANAGEMENT|
|operationType|AUTO_REPAIR_NODES|
|operationType|AUTO_UPGRADE_NODES|
|operationType|SET_LABELS|
|operationType|SET_MASTER_AUTH|
|operationType|SET_NODE_POOL_SIZE|
|operationType|SET_NETWORK_POLICY|
|operationType|SET_MAINTENANCE_POLICY|
|operationType|RESIZE_CLUSTER|
|operationType|FLEET_FEATURE_UPGRADE|
|status|STATUS_UNSPECIFIED|
|status|PENDING|
|status|RUNNING|
|status|DONE|
|status|ABORTING|

<h2 id="tocS_OperationProgress">OperationProgress</h2>
<!-- backwards compatibility -->
<a id="schemaoperationprogress"></a>
<a id="schema_OperationProgress"></a>
<a id="tocSoperationprogress"></a>
<a id="tocsoperationprogress"></a>

```json
{
  "metrics": [
    {
      "doubleValue": 0,
      "intValue": "string",
      "name": "string",
      "stringValue": "string"
    }
  ],
  "name": "string",
  "stages": [
    {
      "metrics": [
        {
          "doubleValue": 0,
          "intValue": "string",
          "name": "string",
          "stringValue": "string"
        }
      ],
      "name": "string",
      "stages": [
        {}
      ],
      "status": "STATUS_UNSPECIFIED"
    }
  ],
  "status": "STATUS_UNSPECIFIED"
}
```

Information about operation (or operation stage) progress.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metrics|[[Metric](#schemametric)]|false|none|Progress metric bundle, for example: metrics: [{name: "nodes done", int_value: 15}, {name: "nodes total", int_value: 32}] or metrics: [{name: "progress", double_value: 0.56}, {name: "progress scale", double_value: 1.0}]|
|name|string|false|none|A non-parameterized string describing an operation stage. Unset for single-stage operations.|
|stages|[[OperationProgress](#schemaoperationprogress)]|false|none|Substages of an operation or a stage.|
|status|string|false|none|Status of an operation stage. Unset for single-stage operations.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|STATUS_UNSPECIFIED|
|status|PENDING|
|status|RUNNING|
|status|DONE|
|status|ABORTING|

<h2 id="tocS_OpportunisticMaintenanceStrategy">OpportunisticMaintenanceStrategy</h2>
<!-- backwards compatibility -->
<a id="schemaopportunisticmaintenancestrategy"></a>
<a id="schema_OpportunisticMaintenanceStrategy"></a>
<a id="tocSopportunisticmaintenancestrategy"></a>
<a id="tocsopportunisticmaintenancestrategy"></a>

```json
{
  "maintenanceAvailabilityWindow": "string",
  "minNodesPerPool": "string",
  "nodeIdleTimeWindow": "string"
}
```

Strategy that will trigger maintenance on behalf of the customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maintenanceAvailabilityWindow|string(google-duration)|false|none|The window of time that opportunistic maintenance can run. Example: A setting of 14 days implies that opportunistic maintenance can only be ran in the 2 weeks leading up to the scheduled maintenance date. Setting 28 days allows opportunistic maintenance to run at any time in the scheduled maintenance window (all `PERIODIC` maintenance is set 28 days in advance).|
|minNodesPerPool|string(int64)|false|none|The minimum nodes required to be available in a pool. Blocks maintenance if it would cause the number of running nodes to dip below this value.|
|nodeIdleTimeWindow|string(google-duration)|false|none|The amount of time that a node can remain idle (no customer owned workloads running), before triggering maintenance.|

<h2 id="tocS_ParentProductConfig">ParentProductConfig</h2>
<!-- backwards compatibility -->
<a id="schemaparentproductconfig"></a>
<a id="schema_ParentProductConfig"></a>
<a id="tocSparentproductconfig"></a>
<a id="tocsparentproductconfig"></a>

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "productName": "string"
}
```

ParentProductConfig is the configuration of the parent product of the cluster. This field is used by Google internal products that are built on top of a GKE cluster and take the ownership of the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|object|false|none|Labels contain the configuration of the parent product.|
|productName|string|false|none|Name of the parent product associated with the cluster.|

<h2 id="tocS_PlacementPolicy">PlacementPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaplacementpolicy"></a>
<a id="schema_PlacementPolicy"></a>
<a id="tocSplacementpolicy"></a>
<a id="tocsplacementpolicy"></a>

```json
{
  "policyName": "string",
  "tpuTopology": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

PlacementPolicy defines the placement policy used by the node pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyName|string|false|none|If set, refers to the name of a custom resource policy supplied by the user. The resource policy must be in the same project and region as the node pool. If not found, InvalidArgument error is returned.|
|tpuTopology|string|false|none|TPU placement topology for pod slice node pool. https://cloud.google.com/tpu/docs/types-topologies#tpu_topologies|
|type|string|false|none|The type of placement.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|COMPACT|

<h2 id="tocS_PodCIDROverprovisionConfig">PodCIDROverprovisionConfig</h2>
<!-- backwards compatibility -->
<a id="schemapodcidroverprovisionconfig"></a>
<a id="schema_PodCIDROverprovisionConfig"></a>
<a id="tocSpodcidroverprovisionconfig"></a>
<a id="tocspodcidroverprovisionconfig"></a>

```json
{
  "disable": true
}
```

[PRIVATE FIELD] Config for pod CIDR size overprovisioning.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disable|boolean|false|none|Whether Pod CIDR overprovisioning is disabled. Note: Pod CIDR overprovisioning is enabled by default.|

<h2 id="tocS_PodSecurityPolicyConfig">PodSecurityPolicyConfig</h2>
<!-- backwards compatibility -->
<a id="schemapodsecuritypolicyconfig"></a>
<a id="schema_PodSecurityPolicyConfig"></a>
<a id="tocSpodsecuritypolicyconfig"></a>
<a id="tocspodsecuritypolicyconfig"></a>

```json
{
  "enabled": true
}
```

Configuration for the PodSecurityPolicy feature.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Enable the PodSecurityPolicy controller for this cluster. If enabled, pods must be valid under a PodSecurityPolicy to be created.|

<h2 id="tocS_PolicyBinding">PolicyBinding</h2>
<!-- backwards compatibility -->
<a id="schemapolicybinding"></a>
<a id="schema_PolicyBinding"></a>
<a id="tocSpolicybinding"></a>
<a id="tocspolicybinding"></a>

```json
{
  "name": "string"
}
```

Binauthz policy that applies to this cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The relative resource name of the binauthz platform policy to audit. GKE platform policies have the following format: `projects/{project_number}/platforms/gke/policies/{policy_id}`.|

<h2 id="tocS_PrivateClusterConfig">PrivateClusterConfig</h2>
<!-- backwards compatibility -->
<a id="schemaprivateclusterconfig"></a>
<a id="schema_PrivateClusterConfig"></a>
<a id="tocSprivateclusterconfig"></a>
<a id="tocsprivateclusterconfig"></a>

```json
{
  "enablePrivateEndpoint": true,
  "enablePrivateNodes": true,
  "masterGlobalAccessConfig": {
    "enabled": true
  },
  "masterIpv4CidrBlock": "string",
  "peeringName": "string",
  "privateEndpoint": "string",
  "privateEndpointSubnetwork": "string",
  "publicEndpoint": "string"
}
```

Configuration options for private clusters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enablePrivateEndpoint|boolean|false|none|Whether the master's internal IP address is used as the cluster endpoint.|
|enablePrivateNodes|boolean|false|none|Whether nodes have internal IP addresses only. If enabled, all nodes are given only RFC 1918 private addresses and communicate with the master via private networking.|
|masterGlobalAccessConfig|[PrivateClusterMasterGlobalAccessConfig](#schemaprivateclustermasterglobalaccessconfig)|false|none|Controls master global access settings.|
|masterIpv4CidrBlock|string|false|none|The IP range in CIDR notation to use for the hosted master network. This range will be used for assigning internal IP addresses to the master or set of masters, as well as the ILB VIP. This range must not overlap with any other ranges in use within the cluster's network.|
|peeringName|string|false|none|Output only. The peering name in the customer VPC used by this cluster.|
|privateEndpoint|string|false|none|Output only. The internal IP address of this cluster's master endpoint.|
|privateEndpointSubnetwork|string|false|none|Subnet to provision the master's private endpoint during cluster creation. Specified in projects/*/regions/*/subnetworks/* format.|
|publicEndpoint|string|false|none|Output only. The external IP address of this cluster's master endpoint.|

<h2 id="tocS_PrivateClusterMasterGlobalAccessConfig">PrivateClusterMasterGlobalAccessConfig</h2>
<!-- backwards compatibility -->
<a id="schemaprivateclustermasterglobalaccessconfig"></a>
<a id="schema_PrivateClusterMasterGlobalAccessConfig"></a>
<a id="tocSprivateclustermasterglobalaccessconfig"></a>
<a id="tocsprivateclustermasterglobalaccessconfig"></a>

```json
{
  "enabled": true
}
```

Configuration for controlling master global access settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whenever master is accessible globally or not.|

<h2 id="tocS_ProtectConfig">ProtectConfig</h2>
<!-- backwards compatibility -->
<a id="schemaprotectconfig"></a>
<a id="schema_ProtectConfig"></a>
<a id="tocSprotectconfig"></a>
<a id="tocsprotectconfig"></a>

```json
{
  "workloadConfig": {
    "auditMode": "MODE_UNSPECIFIED"
  },
  "workloadVulnerabilityMode": "WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED"
}
```

ProtectConfig defines the flags needed to enable/disable features for the Protect API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workloadConfig|[WorkloadConfig](#schemaworkloadconfig)|false|none|WorkloadConfig defines which actions are enabled for a cluster's workload configurations.|
|workloadVulnerabilityMode|string|false|none|Sets which mode to use for Protect workload vulnerability scanning feature.|

#### Enumerated Values

|Property|Value|
|---|---|
|workloadVulnerabilityMode|WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED|
|workloadVulnerabilityMode|DISABLED|
|workloadVulnerabilityMode|BASIC|

<h2 id="tocS_PubSub">PubSub</h2>
<!-- backwards compatibility -->
<a id="schemapubsub"></a>
<a id="schema_PubSub"></a>
<a id="tocSpubsub"></a>
<a id="tocspubsub"></a>

```json
{
  "enabled": true,
  "filter": {
    "eventType": [
      "EVENT_TYPE_UNSPECIFIED"
    ]
  },
  "topic": "string"
}
```

Pub/Sub specific notification config.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Enable notifications for Pub/Sub.|
|filter|[Filter](#schemafilter)|false|none|Allows filtering to one or more specific event types. If no filter is specified, or if a filter is specified with no event types, all event types will be sent|
|topic|string|false|none|The desired Pub/Sub topic to which notifications will be sent by GKE. Format is `projects/{project}/topics/{topic}`.|

<h2 id="tocS_QueuedProvisioning">QueuedProvisioning</h2>
<!-- backwards compatibility -->
<a id="schemaqueuedprovisioning"></a>
<a id="schema_QueuedProvisioning"></a>
<a id="tocSqueuedprovisioning"></a>
<a id="tocsqueuedprovisioning"></a>

```json
{
  "enabled": true
}
```

QueuedProvisioning defines the queued provisioning used by the node pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Denotes that this nodepool is QRM specific, meaning nodes can be only obtained through queuing via the Cluster Autoscaler ProvisioningRequest API.|

<h2 id="tocS_RangeInfo">RangeInfo</h2>
<!-- backwards compatibility -->
<a id="schemarangeinfo"></a>
<a id="schema_RangeInfo"></a>
<a id="tocSrangeinfo"></a>
<a id="tocsrangeinfo"></a>

```json
{
  "rangeName": "string",
  "utilization": 0
}
```

RangeInfo contains the range name and the range utilization by this cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rangeName|string|false|read-only|Output only. [Output only] Name of a range.|
|utilization|number(double)|false|read-only|Output only. [Output only] The utilization of the range.|

<h2 id="tocS_RecurringTimeWindow">RecurringTimeWindow</h2>
<!-- backwards compatibility -->
<a id="schemarecurringtimewindow"></a>
<a id="schema_RecurringTimeWindow"></a>
<a id="tocSrecurringtimewindow"></a>
<a id="tocsrecurringtimewindow"></a>

```json
{
  "recurrence": "string",
  "window": {
    "endTime": "string",
    "maintenanceExclusionOptions": {
      "scope": "NO_UPGRADES"
    },
    "startTime": "string"
  }
}
```

Represents an arbitrary window of time that recurs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recurrence|string|false|none|An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how this window reccurs. They go on for the span of time between the start and end time. For example, to have something repeat every weekday, you'd use: `FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR` To repeat some window daily (equivalent to the DailyMaintenanceWindow): `FREQ=DAILY` For the first weekend of every month: `FREQ=MONTHLY;BYSETPOS=1;BYDAY=SA,SU` This specifies how frequently the window starts. Eg, if you wanted to have a 9-5 UTC-4 window every weekday, you'd use something like: ``` start time = 2019-01-01T09:00:00-0400 end time = 2019-01-01T17:00:00-0400 recurrence = FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR ``` Windows can span multiple days. Eg, to make the window encompass every weekend from midnight Saturday till the last minute of Sunday UTC: ``` start time = 2019-01-05T00:00:00Z end time = 2019-01-07T23:59:00Z recurrence = FREQ=WEEKLY;BYDAY=SA ``` Note the start and end time's specific dates are largely arbitrary except to specify duration of the window and when it first starts. The FREQ values of HOURLY, MINUTELY, and SECONDLY are not supported.|
|window|[TimeWindow](#schematimewindow)|false|none|The window of the first recurrence.|

<h2 id="tocS_ReleaseChannel">ReleaseChannel</h2>
<!-- backwards compatibility -->
<a id="schemareleasechannel"></a>
<a id="schema_ReleaseChannel"></a>
<a id="tocSreleasechannel"></a>
<a id="tocsreleasechannel"></a>

```json
{
  "channel": "UNSPECIFIED"
}
```

ReleaseChannel indicates which release channel a cluster is subscribed to. Release channels are arranged in order of risk. When a cluster is subscribed to a release channel, Google maintains both the master version and the node version. Node auto-upgrade defaults to true and cannot be disabled.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|string|false|none|channel specifies which release channel the cluster is subscribed to.|

#### Enumerated Values

|Property|Value|
|---|---|
|channel|UNSPECIFIED|
|channel|RAPID|
|channel|REGULAR|
|channel|STABLE|

<h2 id="tocS_ReleaseChannelConfig">ReleaseChannelConfig</h2>
<!-- backwards compatibility -->
<a id="schemareleasechannelconfig"></a>
<a id="schema_ReleaseChannelConfig"></a>
<a id="tocSreleasechannelconfig"></a>
<a id="tocsreleasechannelconfig"></a>

```json
{
  "availableVersions": [
    {
      "reason": "string",
      "version": "string"
    }
  ],
  "channel": "UNSPECIFIED",
  "defaultVersion": "string",
  "validVersions": [
    "string"
  ]
}
```

ReleaseChannelConfig exposes configuration for a release channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableVersions|[[AvailableVersion](#schemaavailableversion)]|false|none|**Deprecated.** Deprecated. This field has been deprecated and replaced with the valid_versions field.|
|channel|string|false|none|The release channel this configuration applies to.|
|defaultVersion|string|false|none|The default version for newly created clusters on the channel.|
|validVersions|[string]|false|none|List of valid versions for the channel.|

#### Enumerated Values

|Property|Value|
|---|---|
|channel|UNSPECIFIED|
|channel|RAPID|
|channel|REGULAR|
|channel|STABLE|

<h2 id="tocS_ReservationAffinity">ReservationAffinity</h2>
<!-- backwards compatibility -->
<a id="schemareservationaffinity"></a>
<a id="schema_ReservationAffinity"></a>
<a id="tocSreservationaffinity"></a>
<a id="tocsreservationaffinity"></a>

```json
{
  "consumeReservationType": "UNSPECIFIED",
  "key": "string",
  "values": [
    "string"
  ]
}
```

[ReservationAffinity](https://cloud.google.com/compute/docs/instances/reserving-zonal-resources) is the configuration of desired reservation which instances could take capacity from.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consumeReservationType|string|false|none|Corresponds to the type of reservation consumption.|
|key|string|false|none|Corresponds to the label key of a reservation resource. To target a SPECIFIC_RESERVATION by name, specify "compute.googleapis.com/reservation-name" as the key and specify the name of your reservation as its value.|
|values|[string]|false|none|Corresponds to the label value(s) of reservation resource(s).|

#### Enumerated Values

|Property|Value|
|---|---|
|consumeReservationType|UNSPECIFIED|
|consumeReservationType|NO_RESERVATION|
|consumeReservationType|ANY_RESERVATION|
|consumeReservationType|SPECIFIC_RESERVATION|

<h2 id="tocS_ResourceLabels">ResourceLabels</h2>
<!-- backwards compatibility -->
<a id="schemaresourcelabels"></a>
<a id="schema_ResourceLabels"></a>
<a id="tocSresourcelabels"></a>
<a id="tocsresourcelabels"></a>

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  }
}
```

Collection of [GCP labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|object|false|none|Map of node label keys and node label values.|

<h2 id="tocS_ResourceLimit">ResourceLimit</h2>
<!-- backwards compatibility -->
<a id="schemaresourcelimit"></a>
<a id="schema_ResourceLimit"></a>
<a id="tocSresourcelimit"></a>
<a id="tocsresourcelimit"></a>

```json
{
  "maximum": "string",
  "minimum": "string",
  "resourceType": "string"
}
```

Contains information about amount of some resource in the cluster. For memory, value should be in GB.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maximum|string(int64)|false|none|Maximum amount of the resource in the cluster.|
|minimum|string(int64)|false|none|Minimum amount of the resource in the cluster.|
|resourceType|string|false|none|Resource name "cpu", "memory" or gpu-specific string.|

<h2 id="tocS_ResourceManagerTags">ResourceManagerTags</h2>
<!-- backwards compatibility -->
<a id="schemaresourcemanagertags"></a>
<a id="schema_ResourceManagerTags"></a>
<a id="tocSresourcemanagertags"></a>
<a id="tocsresourcemanagertags"></a>

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

A map of resource manager tag keys and values to be attached to the nodes for managing Compute Engine firewalls using Network Firewall Policies. Tags must be according to specifications in https://cloud.google.com/vpc/docs/tags-firewalls-overview#specifications. A maximum of 5 tag key-value pairs can be specified. Existing tags will be replaced with new values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|Tags must be in one of the following formats ([KEY]=[VALUE]) 1. `tagKeys/{tag_key_id}=tagValues/{tag_value_id}` 2. `{org_id}/{tag_key_name}={tag_value_name}` 3. `{project_id}/{tag_key_name}={tag_value_name}`|

<h2 id="tocS_ResourceUsageExportConfig">ResourceUsageExportConfig</h2>
<!-- backwards compatibility -->
<a id="schemaresourceusageexportconfig"></a>
<a id="schema_ResourceUsageExportConfig"></a>
<a id="tocSresourceusageexportconfig"></a>
<a id="tocsresourceusageexportconfig"></a>

```json
{
  "bigqueryDestination": {
    "datasetId": "string"
  },
  "consumptionMeteringConfig": {
    "enabled": true
  },
  "enableNetworkEgressMetering": true
}
```

Configuration for exporting cluster resource usages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigqueryDestination|[BigQueryDestination](#schemabigquerydestination)|false|none|Configuration to use BigQuery as usage export destination.|
|consumptionMeteringConfig|[ConsumptionMeteringConfig](#schemaconsumptionmeteringconfig)|false|none|Configuration to enable resource consumption metering.|
|enableNetworkEgressMetering|boolean|false|none|Whether to enable network egress metering for this cluster. If enabled, a daemonset will be created in the cluster to meter network egress traffic.|

<h2 id="tocS_RollbackNodePoolUpgradeRequest">RollbackNodePoolUpgradeRequest</h2>
<!-- backwards compatibility -->
<a id="schemarollbacknodepoolupgraderequest"></a>
<a id="schema_RollbackNodePoolUpgradeRequest"></a>
<a id="tocSrollbacknodepoolupgraderequest"></a>
<a id="tocsrollbacknodepoolupgraderequest"></a>

```json
{
  "clusterId": "string",
  "name": "string",
  "nodePoolId": "string",
  "projectId": "string",
  "respectPdb": true,
  "zone": "string"
}
```

RollbackNodePoolUpgradeRequest rollbacks the previously Aborted or Failed NodePool upgrade. This will be an no-op if the last upgrade successfully completed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterId|string|false|none|**Deprecated.** Required. Deprecated. The name of the cluster to rollback. This field has been deprecated and replaced by the name field.|
|name|string|false|none|The name (project, location, cluster, node pool id) of the node poll to rollback upgrade. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.|
|nodePoolId|string|false|none|**Deprecated.** Required. Deprecated. The name of the node pool to rollback. This field has been deprecated and replaced by the name field.|
|projectId|string|false|none|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|respectPdb|boolean|false|none|Option for rollback to ignore the PodDisruptionBudget. Default value is false.|
|zone|string|false|none|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

<h2 id="tocS_SandboxConfig">SandboxConfig</h2>
<!-- backwards compatibility -->
<a id="schemasandboxconfig"></a>
<a id="schema_SandboxConfig"></a>
<a id="tocSsandboxconfig"></a>
<a id="tocssandboxconfig"></a>

```json
{
  "sandboxType": "string",
  "type": "UNSPECIFIED"
}
```

SandboxConfig contains configurations of the sandbox to use for the node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sandboxType|string|false|none|**Deprecated.** Type of the sandbox to use for the node (e.g. 'gvisor')|
|type|string|false|none|Type of the sandbox to use for the node.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UNSPECIFIED|
|type|GVISOR|

<h2 id="tocS_SecondaryBootDisk">SecondaryBootDisk</h2>
<!-- backwards compatibility -->
<a id="schemasecondarybootdisk"></a>
<a id="schema_SecondaryBootDisk"></a>
<a id="tocSsecondarybootdisk"></a>
<a id="tocssecondarybootdisk"></a>

```json
{
  "diskImage": "string",
  "mode": "MODE_UNSPECIFIED"
}
```

SecondaryBootDisk represents a persistent disk attached to a node with special configurations based on its mode.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diskImage|string|false|none|Fully-qualified resource ID for an existing disk image.|
|mode|string|false|none|Disk mode (container image cache, etc.)|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|MODE_UNSPECIFIED|
|mode|CONTAINER_IMAGE_CACHE|

<h2 id="tocS_SecurityBulletinEvent">SecurityBulletinEvent</h2>
<!-- backwards compatibility -->
<a id="schemasecuritybulletinevent"></a>
<a id="schema_SecurityBulletinEvent"></a>
<a id="tocSsecuritybulletinevent"></a>
<a id="tocssecuritybulletinevent"></a>

```json
{
  "affectedSupportedMinors": [
    "string"
  ],
  "briefDescription": "string",
  "bulletinId": "string",
  "bulletinUri": "string",
  "cveIds": [
    "string"
  ],
  "manualStepsRequired": true,
  "patchedVersions": [
    "string"
  ],
  "resourceTypeAffected": "string",
  "severity": "string",
  "suggestedUpgradeTarget": "string"
}
```

SecurityBulletinEvent is a notification sent to customers when a security bulletin has been posted that they are vulnerable to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|affectedSupportedMinors|[string]|false|none|The GKE minor versions affected by this vulnerability.|
|briefDescription|string|false|none|A brief description of the bulletin. See the bulletin pointed to by the bulletin_uri field for an expanded description.|
|bulletinId|string|false|none|The ID of the bulletin corresponding to the vulnerability.|
|bulletinUri|string|false|none|The URI link to the bulletin on the website for more information.|
|cveIds|[string]|false|none|The CVEs associated with this bulletin.|
|manualStepsRequired|boolean|false|none|If this field is specified, it means there are manual steps that the user must take to make their clusters safe.|
|patchedVersions|[string]|false|none|The GKE versions where this vulnerability is patched.|
|resourceTypeAffected|string|false|none|The resource type (node/control plane) that has the vulnerability. Multiple notifications (1 notification per resource type) will be sent for a vulnerability that affects > 1 resource type.|
|severity|string|false|none|The severity of this bulletin as it relates to GKE.|
|suggestedUpgradeTarget|string|false|none|This represents a version selected from the patched_versions field that the cluster receiving this notification should most likely want to upgrade to based on its current version. Note that if this notification is being received by a given cluster, it means that this version is currently available as an upgrade target in that cluster's location.|

<h2 id="tocS_SecurityPostureConfig">SecurityPostureConfig</h2>
<!-- backwards compatibility -->
<a id="schemasecuritypostureconfig"></a>
<a id="schema_SecurityPostureConfig"></a>
<a id="tocSsecuritypostureconfig"></a>
<a id="tocssecuritypostureconfig"></a>

```json
{
  "mode": "MODE_UNSPECIFIED",
  "vulnerabilityMode": "VULNERABILITY_MODE_UNSPECIFIED"
}
```

SecurityPostureConfig defines the flags needed to enable/disable features for the Security Posture API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mode|string|false|none|Sets which mode to use for Security Posture features.|
|vulnerabilityMode|string|false|none|Sets which mode to use for vulnerability scanning.|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|MODE_UNSPECIFIED|
|mode|DISABLED|
|mode|BASIC|
|vulnerabilityMode|VULNERABILITY_MODE_UNSPECIFIED|
|vulnerabilityMode|VULNERABILITY_DISABLED|
|vulnerabilityMode|VULNERABILITY_BASIC|
|vulnerabilityMode|VULNERABILITY_ENTERPRISE|

<h2 id="tocS_ServerConfig">ServerConfig</h2>
<!-- backwards compatibility -->
<a id="schemaserverconfig"></a>
<a id="schema_ServerConfig"></a>
<a id="tocSserverconfig"></a>
<a id="tocsserverconfig"></a>

```json
{
  "channels": [
    {
      "availableVersions": [
        {
          "reason": "string",
          "version": "string"
        }
      ],
      "channel": "UNSPECIFIED",
      "defaultVersion": "string",
      "validVersions": [
        "string"
      ]
    }
  ],
  "defaultClusterVersion": "string",
  "defaultImageType": "string",
  "validImageTypes": [
    "string"
  ],
  "validMasterVersions": [
    "string"
  ],
  "validNodeVersions": [
    "string"
  ],
  "windowsVersionMaps": {
    "property1": {
      "windowsVersions": [
        {
          "imageType": "string",
          "osVersion": "string",
          "supportEndDate": {
            "day": 0,
            "month": 0,
            "year": 0
          }
        }
      ]
    },
    "property2": {
      "windowsVersions": [
        {
          "imageType": "string",
          "osVersion": "string",
          "supportEndDate": {
            "day": 0,
            "month": 0,
            "year": 0
          }
        }
      ]
    }
  }
}
```

Kubernetes Engine service configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channels|[[ReleaseChannelConfig](#schemareleasechannelconfig)]|false|none|List of release channel configurations.|
|defaultClusterVersion|string|false|none|Version of Kubernetes the service deploys by default.|
|defaultImageType|string|false|none|Default image type.|
|validImageTypes|[string]|false|none|List of valid image types.|
|validMasterVersions|[string]|false|none|List of valid master versions, in descending order.|
|validNodeVersions|[string]|false|none|List of valid node upgrade target versions, in descending order.|
|windowsVersionMaps|object|false|none|Maps of Kubernetes version and supported Windows server versions.|

<h2 id="tocS_ServiceExternalIPsConfig">ServiceExternalIPsConfig</h2>
<!-- backwards compatibility -->
<a id="schemaserviceexternalipsconfig"></a>
<a id="schema_ServiceExternalIPsConfig"></a>
<a id="tocSserviceexternalipsconfig"></a>
<a id="tocsserviceexternalipsconfig"></a>

```json
{
  "enabled": true
}
```

Config to block services with externalIPs field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether Services with ExternalIPs field are allowed or not.|

<h2 id="tocS_SetAddonsConfigRequest">SetAddonsConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetaddonsconfigrequest"></a>
<a id="schema_SetAddonsConfigRequest"></a>
<a id="tocSsetaddonsconfigrequest"></a>
<a id="tocssetaddonsconfigrequest"></a>

```json
{
  "addonsConfig": {
    "cloudRunConfig": {
      "disabled": true,
      "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED"
    },
    "configConnectorConfig": {
      "enabled": true
    },
    "dnsCacheConfig": {
      "enabled": true
    },
    "gcePersistentDiskCsiDriverConfig": {
      "enabled": true
    },
    "gcpFilestoreCsiDriverConfig": {
      "enabled": true
    },
    "gcsFuseCsiDriverConfig": {
      "enabled": true
    },
    "gkeBackupAgentConfig": {
      "enabled": true
    },
    "horizontalPodAutoscaling": {
      "disabled": true
    },
    "httpLoadBalancing": {
      "disabled": true
    },
    "istioConfig": {
      "auth": "AUTH_NONE",
      "disabled": true
    },
    "kalmConfig": {
      "enabled": true
    },
    "kubernetesDashboard": {
      "disabled": true
    },
    "networkPolicyConfig": {
      "disabled": true
    },
    "statefulHaConfig": {
      "enabled": true
    }
  },
  "clusterId": "string",
  "name": "string",
  "projectId": "string",
  "zone": "string"
}
```

SetAddonsRequest sets the addons associated with the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addonsConfig|[AddonsConfig](#schemaaddonsconfig)|false|none|Required. The desired configurations for the various addons available to run in the cluster.|
|clusterId|string|false|none|**Deprecated.** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
|name|string|false|none|The name (project, location, cluster) of the cluster to set addons. Specified in the format `projects/*/locations/*/clusters/*`.|
|projectId|string|false|none|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|string|false|none|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

<h2 id="tocS_SetLabelsRequest">SetLabelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetlabelsrequest"></a>
<a id="schema_SetLabelsRequest"></a>
<a id="tocSsetlabelsrequest"></a>
<a id="tocssetlabelsrequest"></a>

```json
{
  "clusterId": "string",
  "labelFingerprint": "string",
  "name": "string",
  "projectId": "string",
  "resourceLabels": {
    "property1": "string",
    "property2": "string"
  },
  "zone": "string"
}
```

SetLabelsRequest sets the Google Cloud Platform labels on a Google Container Engine cluster, which will in turn set them for Google Compute Engine resources used by that cluster

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterId|string|false|none|**Deprecated.** Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.|
|labelFingerprint|string|false|none|Required. The fingerprint of the previous set of labels for this resource, used to detect conflicts. The fingerprint is initially generated by Kubernetes Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash when updating or changing labels. Make a `get()` request to the resource to get the latest fingerprint.|
|name|string|false|none|The name (project, location, cluster name) of the cluster to set labels. Specified in the format `projects/*/locations/*/clusters/*`.|
|projectId|string|false|none|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|resourceLabels|object|false|none|Required. The labels to set for that cluster.|
|zone|string|false|none|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

<h2 id="tocS_SetLegacyAbacRequest">SetLegacyAbacRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetlegacyabacrequest"></a>
<a id="schema_SetLegacyAbacRequest"></a>
<a id="tocSsetlegacyabacrequest"></a>
<a id="tocssetlegacyabacrequest"></a>

```json
{
  "clusterId": "string",
  "enabled": true,
  "name": "string",
  "projectId": "string",
  "zone": "string"
}
```

SetLegacyAbacRequest enables or disables the ABAC authorization mechanism for a cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterId|string|false|none|**Deprecated.** Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.|
|enabled|boolean|false|none|Required. Whether ABAC authorization will be enabled in the cluster.|
|name|string|false|none|The name (project, location, cluster name) of the cluster to set legacy abac. Specified in the format `projects/*/locations/*/clusters/*`.|
|projectId|string|false|none|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|string|false|none|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

<h2 id="tocS_SetLocationsRequest">SetLocationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetlocationsrequest"></a>
<a id="schema_SetLocationsRequest"></a>
<a id="tocSsetlocationsrequest"></a>
<a id="tocssetlocationsrequest"></a>

```json
{
  "clusterId": "string",
  "locations": [
    "string"
  ],
  "name": "string",
  "projectId": "string",
  "zone": "string"
}
```

SetLocationsRequest sets the locations of the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterId|string|false|none|**Deprecated.** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
|locations|[string]|false|none|Required. The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. Changing the locations a cluster is in will result in nodes being either created or removed from the cluster, depending on whether locations are being added or removed. This list must always include the cluster's primary zone.|
|name|string|false|none|The name (project, location, cluster) of the cluster to set locations. Specified in the format `projects/*/locations/*/clusters/*`.|
|projectId|string|false|none|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|string|false|none|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

<h2 id="tocS_SetLoggingServiceRequest">SetLoggingServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetloggingservicerequest"></a>
<a id="schema_SetLoggingServiceRequest"></a>
<a id="tocSsetloggingservicerequest"></a>
<a id="tocssetloggingservicerequest"></a>

```json
{
  "clusterId": "string",
  "loggingService": "string",
  "name": "string",
  "projectId": "string",
  "zone": "string"
}
```

SetLoggingServiceRequest sets the logging service of a cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterId|string|false|none|**Deprecated.** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
|loggingService|string|false|none|Required. The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions.|
|name|string|false|none|The name (project, location, cluster) of the cluster to set logging. Specified in the format `projects/*/locations/*/clusters/*`.|
|projectId|string|false|none|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|string|false|none|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

<h2 id="tocS_SetMaintenancePolicyRequest">SetMaintenancePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetmaintenancepolicyrequest"></a>
<a id="schema_SetMaintenancePolicyRequest"></a>
<a id="tocSsetmaintenancepolicyrequest"></a>
<a id="tocssetmaintenancepolicyrequest"></a>

```json
{
  "clusterId": "string",
  "maintenancePolicy": {
    "resourceVersion": "string",
    "window": {
      "dailyMaintenanceWindow": {
        "duration": "string",
        "startTime": "string"
      },
      "maintenanceExclusions": {
        "property1": {
          "endTime": "string",
          "maintenanceExclusionOptions": {
            "scope": "NO_UPGRADES"
          },
          "startTime": "string"
        },
        "property2": {
          "endTime": "string",
          "maintenanceExclusionOptions": {
            "scope": "NO_UPGRADES"
          },
          "startTime": "string"
        }
      },
      "recurringWindow": {
        "recurrence": "string",
        "window": {
          "endTime": "string",
          "maintenanceExclusionOptions": {
            "scope": "NO_UPGRADES"
          },
          "startTime": "string"
        }
      }
    }
  },
  "name": "string",
  "projectId": "string",
  "zone": "string"
}
```

SetMaintenancePolicyRequest sets the maintenance policy for a cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterId|string|false|none|Required. The name of the cluster to update.|
|maintenancePolicy|[MaintenancePolicy](#schemamaintenancepolicy)|false|none|Required. The maintenance policy to be set for the cluster. An empty field clears the existing maintenance policy.|
|name|string|false|none|The name (project, location, cluster name) of the cluster to set maintenance policy. Specified in the format `projects/*/locations/*/clusters/*`.|
|projectId|string|false|none|Required. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects).|
|zone|string|false|none|Required. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides.|

<h2 id="tocS_SetMasterAuthRequest">SetMasterAuthRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetmasterauthrequest"></a>
<a id="schema_SetMasterAuthRequest"></a>
<a id="tocSsetmasterauthrequest"></a>
<a id="tocssetmasterauthrequest"></a>

```json
{
  "action": "UNKNOWN",
  "clusterId": "string",
  "name": "string",
  "projectId": "string",
  "update": {
    "clientCertificate": "string",
    "clientCertificateConfig": {
      "issueClientCertificate": true
    },
    "clientKey": "string",
    "clusterCaCertificate": "string",
    "password": "string",
    "username": "string"
  },
  "zone": "string"
}
```

SetMasterAuthRequest updates the admin password of a cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|Required. The exact form of action to be taken on the master auth.|
|clusterId|string|false|none|**Deprecated.** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
|name|string|false|none|The name (project, location, cluster) of the cluster to set auth. Specified in the format `projects/*/locations/*/clusters/*`.|
|projectId|string|false|none|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|update|[MasterAuth](#schemamasterauth)|false|none|Required. A description of the update.|
|zone|string|false|none|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

#### Enumerated Values

|Property|Value|
|---|---|
|action|UNKNOWN|
|action|SET_PASSWORD|
|action|GENERATE_PASSWORD|
|action|SET_USERNAME|

<h2 id="tocS_SetMonitoringServiceRequest">SetMonitoringServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetmonitoringservicerequest"></a>
<a id="schema_SetMonitoringServiceRequest"></a>
<a id="tocSsetmonitoringservicerequest"></a>
<a id="tocssetmonitoringservicerequest"></a>

```json
{
  "clusterId": "string",
  "monitoringService": "string",
  "name": "string",
  "projectId": "string",
  "zone": "string"
}
```

SetMonitoringServiceRequest sets the monitoring service of a cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterId|string|false|none|**Deprecated.** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
|monitoringService|string|false|none|Required. The monitoring service the cluster should use to write metrics. Currently available options: * "monitoring.googleapis.com/kubernetes" - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions.|
|name|string|false|none|The name (project, location, cluster) of the cluster to set monitoring. Specified in the format `projects/*/locations/*/clusters/*`.|
|projectId|string|false|none|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|string|false|none|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

<h2 id="tocS_SetNetworkPolicyRequest">SetNetworkPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetnetworkpolicyrequest"></a>
<a id="schema_SetNetworkPolicyRequest"></a>
<a id="tocSsetnetworkpolicyrequest"></a>
<a id="tocssetnetworkpolicyrequest"></a>

```json
{
  "clusterId": "string",
  "name": "string",
  "networkPolicy": {
    "enabled": true,
    "provider": "PROVIDER_UNSPECIFIED"
  },
  "projectId": "string",
  "zone": "string"
}
```

SetNetworkPolicyRequest enables/disables network policy for a cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterId|string|false|none|**Deprecated.** Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.|
|name|string|false|none|The name (project, location, cluster name) of the cluster to set networking policy. Specified in the format `projects/*/locations/*/clusters/*`.|
|networkPolicy|[NetworkPolicy](#schemanetworkpolicy)|false|none|Required. Configuration options for the NetworkPolicy feature.|
|projectId|string|false|none|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|string|false|none|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

<h2 id="tocS_SetNodePoolAutoscalingRequest">SetNodePoolAutoscalingRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetnodepoolautoscalingrequest"></a>
<a id="schema_SetNodePoolAutoscalingRequest"></a>
<a id="tocSsetnodepoolautoscalingrequest"></a>
<a id="tocssetnodepoolautoscalingrequest"></a>

```json
{
  "autoscaling": {
    "autoprovisioned": true,
    "enabled": true,
    "locationPolicy": "LOCATION_POLICY_UNSPECIFIED",
    "maxNodeCount": 0,
    "minNodeCount": 0,
    "totalMaxNodeCount": 0,
    "totalMinNodeCount": 0
  },
  "clusterId": "string",
  "name": "string",
  "nodePoolId": "string",
  "projectId": "string",
  "zone": "string"
}
```

SetNodePoolAutoscalingRequest sets the autoscaler settings of a node pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoscaling|[NodePoolAutoscaling](#schemanodepoolautoscaling)|false|none|Required. Autoscaling configuration for the node pool.|
|clusterId|string|false|none|**Deprecated.** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
|name|string|false|none|The name (project, location, cluster, node pool) of the node pool to set autoscaler settings. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.|
|nodePoolId|string|false|none|**Deprecated.** Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.|
|projectId|string|false|none|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|string|false|none|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

<h2 id="tocS_SetNodePoolManagementRequest">SetNodePoolManagementRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetnodepoolmanagementrequest"></a>
<a id="schema_SetNodePoolManagementRequest"></a>
<a id="tocSsetnodepoolmanagementrequest"></a>
<a id="tocssetnodepoolmanagementrequest"></a>

```json
{
  "clusterId": "string",
  "management": {
    "autoRepair": true,
    "autoUpgrade": true,
    "upgradeOptions": {
      "autoUpgradeStartTime": "string",
      "description": "string"
    }
  },
  "name": "string",
  "nodePoolId": "string",
  "projectId": "string",
  "zone": "string"
}
```

SetNodePoolManagementRequest sets the node management properties of a node pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterId|string|false|none|**Deprecated.** Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.|
|management|[NodeManagement](#schemanodemanagement)|false|none|Required. NodeManagement configuration for the node pool.|
|name|string|false|none|The name (project, location, cluster, node pool id) of the node pool to set management properties. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.|
|nodePoolId|string|false|none|**Deprecated.** Required. Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.|
|projectId|string|false|none|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|string|false|none|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

<h2 id="tocS_SetNodePoolSizeRequest">SetNodePoolSizeRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetnodepoolsizerequest"></a>
<a id="schema_SetNodePoolSizeRequest"></a>
<a id="tocSsetnodepoolsizerequest"></a>
<a id="tocssetnodepoolsizerequest"></a>

```json
{
  "clusterId": "string",
  "name": "string",
  "nodeCount": 0,
  "nodePoolId": "string",
  "projectId": "string",
  "zone": "string"
}
```

SetNodePoolSizeRequest sets the size of a node pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterId|string|false|none|**Deprecated.** Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.|
|name|string|false|none|The name (project, location, cluster, node pool id) of the node pool to set size. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.|
|nodeCount|integer(int32)|false|none|Required. The desired node count for the pool.|
|nodePoolId|string|false|none|**Deprecated.** Required. Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.|
|projectId|string|false|none|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|string|false|none|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

<h2 id="tocS_ShieldedInstanceConfig">ShieldedInstanceConfig</h2>
<!-- backwards compatibility -->
<a id="schemashieldedinstanceconfig"></a>
<a id="schema_ShieldedInstanceConfig"></a>
<a id="tocSshieldedinstanceconfig"></a>
<a id="tocsshieldedinstanceconfig"></a>

```json
{
  "enableIntegrityMonitoring": true,
  "enableSecureBoot": true
}
```

A set of Shielded Instance options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableIntegrityMonitoring|boolean|false|none|Defines whether the instance has integrity monitoring enabled. Enables monitoring and attestation of the boot integrity of the instance. The attestation is performed against the integrity policy baseline. This baseline is initially derived from the implicitly trusted boot image when the instance is created.|
|enableSecureBoot|boolean|false|none|Defines whether the instance has Secure Boot enabled. Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails.|

<h2 id="tocS_ShieldedNodes">ShieldedNodes</h2>
<!-- backwards compatibility -->
<a id="schemashieldednodes"></a>
<a id="schema_ShieldedNodes"></a>
<a id="tocSshieldednodes"></a>
<a id="tocsshieldednodes"></a>

```json
{
  "enabled": true
}
```

Configuration of Shielded Nodes feature.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether Shielded Nodes features are enabled on all nodes in this cluster.|

<h2 id="tocS_SoleTenantConfig">SoleTenantConfig</h2>
<!-- backwards compatibility -->
<a id="schemasoletenantconfig"></a>
<a id="schema_SoleTenantConfig"></a>
<a id="tocSsoletenantconfig"></a>
<a id="tocssoletenantconfig"></a>

```json
{
  "nodeAffinities": [
    {
      "key": "string",
      "operator": "OPERATOR_UNSPECIFIED",
      "values": [
        "string"
      ]
    }
  ]
}
```

SoleTenantConfig contains the NodeAffinities to specify what shared sole tenant node groups should back the node pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodeAffinities|[[NodeAffinity](#schemanodeaffinity)]|false|none|NodeAffinities used to match to a shared sole tenant node group.|

<h2 id="tocS_StandardRolloutPolicy">StandardRolloutPolicy</h2>
<!-- backwards compatibility -->
<a id="schemastandardrolloutpolicy"></a>
<a id="schema_StandardRolloutPolicy"></a>
<a id="tocSstandardrolloutpolicy"></a>
<a id="tocsstandardrolloutpolicy"></a>

```json
{
  "batchNodeCount": 0,
  "batchPercentage": 0,
  "batchSoakDuration": "string"
}
```

Standard rollout policy is the default policy for blue-green.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchNodeCount|integer(int32)|false|none|Number of blue nodes to drain in a batch.|
|batchPercentage|number(float)|false|none|Percentage of the blue pool nodes to drain in a batch. The range of this field should be (0.0, 1.0].|
|batchSoakDuration|string(google-duration)|false|none|Soak time after each batch gets drained. Default to zero.|

<h2 id="tocS_StartIPRotationRequest">StartIPRotationRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartiprotationrequest"></a>
<a id="schema_StartIPRotationRequest"></a>
<a id="tocSstartiprotationrequest"></a>
<a id="tocsstartiprotationrequest"></a>

```json
{
  "clusterId": "string",
  "name": "string",
  "projectId": "string",
  "rotateCredentials": true,
  "zone": "string"
}
```

StartIPRotationRequest creates a new IP for the cluster and then performs a node upgrade on each node pool to point to the new IP.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterId|string|false|none|**Deprecated.** Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.|
|name|string|false|none|The name (project, location, cluster name) of the cluster to start IP rotation. Specified in the format `projects/*/locations/*/clusters/*`.|
|projectId|string|false|none|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|rotateCredentials|boolean|false|none|Whether to rotate credentials during IP rotation.|
|zone|string|false|none|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

<h2 id="tocS_StatefulHAConfig">StatefulHAConfig</h2>
<!-- backwards compatibility -->
<a id="schemastatefulhaconfig"></a>
<a id="schema_StatefulHAConfig"></a>
<a id="tocSstatefulhaconfig"></a>
<a id="tocsstatefulhaconfig"></a>

```json
{
  "enabled": true
}
```

Configuration for the Stateful HA add-on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether the Stateful HA add-on is enabled for this cluster.|

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

<h2 id="tocS_StatusCondition">StatusCondition</h2>
<!-- backwards compatibility -->
<a id="schemastatuscondition"></a>
<a id="schema_StatusCondition"></a>
<a id="tocSstatuscondition"></a>
<a id="tocsstatuscondition"></a>

```json
{
  "canonicalCode": "OK",
  "code": "UNKNOWN",
  "message": "string"
}
```

StatusCondition describes why a cluster or a node pool has a certain status (e.g., ERROR or DEGRADED).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canonicalCode|string|false|none|Canonical code of the condition.|
|code|string|false|none|**Deprecated.** Machine-friendly representation of the condition Deprecated. Use canonical_code instead.|
|message|string|false|none|Human-friendly representation of the condition|

#### Enumerated Values

|Property|Value|
|---|---|
|canonicalCode|OK|
|canonicalCode|CANCELLED|
|canonicalCode|UNKNOWN|
|canonicalCode|INVALID_ARGUMENT|
|canonicalCode|DEADLINE_EXCEEDED|
|canonicalCode|NOT_FOUND|
|canonicalCode|ALREADY_EXISTS|
|canonicalCode|PERMISSION_DENIED|
|canonicalCode|UNAUTHENTICATED|
|canonicalCode|RESOURCE_EXHAUSTED|
|canonicalCode|FAILED_PRECONDITION|
|canonicalCode|ABORTED|
|canonicalCode|OUT_OF_RANGE|
|canonicalCode|UNIMPLEMENTED|
|canonicalCode|INTERNAL|
|canonicalCode|UNAVAILABLE|
|canonicalCode|DATA_LOSS|
|code|UNKNOWN|
|code|GCE_STOCKOUT|
|code|GKE_SERVICE_ACCOUNT_DELETED|
|code|GCE_QUOTA_EXCEEDED|
|code|SET_BY_OPERATOR|
|code|CLOUD_KMS_KEY_ERROR|
|code|CA_EXPIRING|

<h2 id="tocS_TimeWindow">TimeWindow</h2>
<!-- backwards compatibility -->
<a id="schematimewindow"></a>
<a id="schema_TimeWindow"></a>
<a id="tocStimewindow"></a>
<a id="tocstimewindow"></a>

```json
{
  "endTime": "string",
  "maintenanceExclusionOptions": {
    "scope": "NO_UPGRADES"
  },
  "startTime": "string"
}
```

Represents an arbitrary window of time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|The time that the window ends. The end time should take place after the start time.|
|maintenanceExclusionOptions|[MaintenanceExclusionOptions](#schemamaintenanceexclusionoptions)|false|none|MaintenanceExclusionOptions provides maintenance exclusion related options.|
|startTime|string(google-datetime)|false|none|The time that the window first starts.|

<h2 id="tocS_TpuConfig">TpuConfig</h2>
<!-- backwards compatibility -->
<a id="schematpuconfig"></a>
<a id="schema_TpuConfig"></a>
<a id="tocStpuconfig"></a>
<a id="tocstpuconfig"></a>

```json
{
  "enabled": true,
  "ipv4CidrBlock": "string",
  "useServiceNetworking": true
}
```

Configuration for Cloud TPU.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether Cloud TPU integration is enabled or not.|
|ipv4CidrBlock|string|false|none|IPv4 CIDR block reserved for Cloud TPU in the VPC.|
|useServiceNetworking|boolean|false|none|Whether to use service networking for Cloud TPU or not.|

<h2 id="tocS_UpdateClusterRequest">UpdateClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateclusterrequest"></a>
<a id="schema_UpdateClusterRequest"></a>
<a id="tocSupdateclusterrequest"></a>
<a id="tocsupdateclusterrequest"></a>

```json
{
  "clusterId": "string",
  "name": "string",
  "projectId": "string",
  "update": {
    "additionalPodRangesConfig": {
      "podRangeInfo": [
        {
          "rangeName": "string",
          "utilization": 0
        }
      ],
      "podRangeNames": [
        "string"
      ]
    },
    "desiredAddonsConfig": {
      "cloudRunConfig": {
        "disabled": true,
        "loadBalancerType": "LOAD_BALANCER_TYPE_UNSPECIFIED"
      },
      "configConnectorConfig": {
        "enabled": true
      },
      "dnsCacheConfig": {
        "enabled": true
      },
      "gcePersistentDiskCsiDriverConfig": {
        "enabled": true
      },
      "gcpFilestoreCsiDriverConfig": {
        "enabled": true
      },
      "gcsFuseCsiDriverConfig": {
        "enabled": true
      },
      "gkeBackupAgentConfig": {
        "enabled": true
      },
      "horizontalPodAutoscaling": {
        "disabled": true
      },
      "httpLoadBalancing": {
        "disabled": true
      },
      "istioConfig": {
        "auth": "AUTH_NONE",
        "disabled": true
      },
      "kalmConfig": {
        "enabled": true
      },
      "kubernetesDashboard": {
        "disabled": true
      },
      "networkPolicyConfig": {
        "disabled": true
      },
      "statefulHaConfig": {
        "enabled": true
      }
    },
    "desiredAuthenticatorGroupsConfig": {
      "enabled": true,
      "securityGroup": "string"
    },
    "desiredAutopilotWorkloadPolicyConfig": {
      "allowNetAdmin": true
    },
    "desiredBinaryAuthorization": {
      "enabled": true,
      "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
      "policyBindings": [
        {
          "name": "string"
        }
      ]
    },
    "desiredClusterAutoscaling": {
      "autoprovisioningLocations": [
        "string"
      ],
      "autoprovisioningNodePoolDefaults": {
        "bootDiskKmsKey": "string",
        "diskSizeGb": 0,
        "diskType": "string",
        "imageType": "string",
        "insecureKubeletReadonlyPortEnabled": true,
        "management": {
          "autoRepair": true,
          "autoUpgrade": true,
          "upgradeOptions": {
            "autoUpgradeStartTime": "string",
            "description": "string"
          }
        },
        "minCpuPlatform": "string",
        "oauthScopes": [
          "string"
        ],
        "serviceAccount": "string",
        "shieldedInstanceConfig": {
          "enableIntegrityMonitoring": true,
          "enableSecureBoot": true
        },
        "upgradeSettings": {
          "blueGreenSettings": {
            "autoscaledRolloutPolicy": {},
            "nodePoolSoakDuration": "string",
            "standardRolloutPolicy": {
              "batchNodeCount": 0,
              "batchPercentage": 0,
              "batchSoakDuration": "string"
            }
          },
          "maxSurge": 0,
          "maxUnavailable": 0,
          "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
        }
      },
      "autoscalingProfile": "PROFILE_UNSPECIFIED",
      "enableNodeAutoprovisioning": true,
      "resourceLimits": [
        {
          "maximum": "string",
          "minimum": "string",
          "resourceType": "string"
        }
      ]
    },
    "desiredClusterTelemetry": {
      "type": "UNSPECIFIED"
    },
    "desiredCostManagementConfig": {
      "enabled": true
    },
    "desiredDatabaseEncryption": {
      "keyName": "string",
      "state": "UNKNOWN"
    },
    "desiredDatapathProvider": "DATAPATH_PROVIDER_UNSPECIFIED",
    "desiredDefaultSnatStatus": {
      "disabled": true
    },
    "desiredDnsConfig": {
      "clusterDns": "PROVIDER_UNSPECIFIED",
      "clusterDnsDomain": "string",
      "clusterDnsScope": "DNS_SCOPE_UNSPECIFIED"
    },
    "desiredEnableFqdnNetworkPolicy": true,
    "desiredEnablePrivateEndpoint": true,
    "desiredFleet": {
      "membership": "string",
      "preRegistered": true,
      "project": "string"
    },
    "desiredGatewayApiConfig": {
      "channel": "CHANNEL_UNSPECIFIED"
    },
    "desiredGcfsConfig": {
      "enabled": true
    },
    "desiredHostMaintenancePolicy": {
      "maintenanceInterval": "MAINTENANCE_INTERVAL_UNSPECIFIED",
      "opportunisticMaintenanceStrategy": {
        "maintenanceAvailabilityWindow": "string",
        "minNodesPerPool": "string",
        "nodeIdleTimeWindow": "string"
      }
    },
    "desiredIdentityServiceConfig": {
      "enabled": true
    },
    "desiredImageType": "string",
    "desiredInTransitEncryptionConfig": "IN_TRANSIT_ENCRYPTION_CONFIG_UNSPECIFIED",
    "desiredIntraNodeVisibilityConfig": {
      "enabled": true
    },
    "desiredK8sBetaApis": {
      "enabledApis": [
        "string"
      ]
    },
    "desiredL4ilbSubsettingConfig": {
      "enabled": true
    },
    "desiredLocations": [
      "string"
    ],
    "desiredLoggingConfig": {
      "componentConfig": {
        "enableComponents": [
          "COMPONENT_UNSPECIFIED"
        ]
      }
    },
    "desiredLoggingService": "string",
    "desiredMaster": {},
    "desiredMasterAuthorizedNetworksConfig": {
      "cidrBlocks": [
        {
          "cidrBlock": "string",
          "displayName": "string"
        }
      ],
      "enabled": true,
      "gcpPublicCidrsAccessEnabled": true
    },
    "desiredMasterVersion": "string",
    "desiredMeshCertificates": {
      "enableCertificates": true
    },
    "desiredMonitoringConfig": {
      "advancedDatapathObservabilityConfig": {
        "enableMetrics": true,
        "enableRelay": true,
        "relayMode": "RELAY_MODE_UNSPECIFIED"
      },
      "componentConfig": {
        "enableComponents": [
          "COMPONENT_UNSPECIFIED"
        ]
      },
      "managedPrometheusConfig": {
        "enabled": true
      }
    },
    "desiredMonitoringService": "string",
    "desiredNetworkPerformanceConfig": {
      "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
    },
    "desiredNodePoolAutoConfigNetworkTags": {
      "tags": [
        "string"
      ]
    },
    "desiredNodePoolAutoConfigResourceManagerTags": {
      "tags": {
        "property1": "string",
        "property2": "string"
      }
    },
    "desiredNodePoolAutoscaling": {
      "autoprovisioned": true,
      "enabled": true,
      "locationPolicy": "LOCATION_POLICY_UNSPECIFIED",
      "maxNodeCount": 0,
      "minNodeCount": 0,
      "totalMaxNodeCount": 0,
      "totalMinNodeCount": 0
    },
    "desiredNodePoolId": "string",
    "desiredNodePoolLoggingConfig": {
      "variantConfig": {
        "variant": "VARIANT_UNSPECIFIED"
      }
    },
    "desiredNodeVersion": "string",
    "desiredNotificationConfig": {
      "pubsub": {
        "enabled": true,
        "filter": {
          "eventType": [
            "EVENT_TYPE_UNSPECIFIED"
          ]
        },
        "topic": "string"
      }
    },
    "desiredParentProductConfig": {
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "productName": "string"
    },
    "desiredPodSecurityPolicyConfig": {
      "enabled": true
    },
    "desiredPrivateClusterConfig": {
      "enablePrivateEndpoint": true,
      "enablePrivateNodes": true,
      "masterGlobalAccessConfig": {
        "enabled": true
      },
      "masterIpv4CidrBlock": "string",
      "peeringName": "string",
      "privateEndpoint": "string",
      "privateEndpointSubnetwork": "string",
      "publicEndpoint": "string"
    },
    "desiredPrivateIpv6GoogleAccess": "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
    "desiredProtectConfig": {
      "workloadConfig": {
        "auditMode": "MODE_UNSPECIFIED"
      },
      "workloadVulnerabilityMode": "WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED"
    },
    "desiredReleaseChannel": {
      "channel": "UNSPECIFIED"
    },
    "desiredResourceUsageExportConfig": {
      "bigqueryDestination": {
        "datasetId": "string"
      },
      "consumptionMeteringConfig": {
        "enabled": true
      },
      "enableNetworkEgressMetering": true
    },
    "desiredSecurityPostureConfig": {
      "mode": "MODE_UNSPECIFIED",
      "vulnerabilityMode": "VULNERABILITY_MODE_UNSPECIFIED"
    },
    "desiredServiceExternalIpsConfig": {
      "enabled": true
    },
    "desiredShieldedNodes": {
      "enabled": true
    },
    "desiredStackType": "STACK_TYPE_UNSPECIFIED",
    "desiredTpuConfig": {
      "enabled": true,
      "ipv4CidrBlock": "string",
      "useServiceNetworking": true
    },
    "desiredVerticalPodAutoscaling": {
      "enabled": true
    },
    "desiredWorkloadAltsConfig": {
      "enableAlts": true
    },
    "desiredWorkloadCertificates": {
      "enableCertificates": true
    },
    "desiredWorkloadIdentityConfig": {
      "identityNamespace": "string",
      "identityProvider": "string",
      "workloadPool": "string"
    },
    "enableK8sBetaApis": {
      "enabledApis": [
        "string"
      ]
    },
    "etag": "string",
    "removedAdditionalPodRangesConfig": {
      "podRangeInfo": [
        {
          "rangeName": "string",
          "utilization": 0
        }
      ],
      "podRangeNames": [
        "string"
      ]
    }
  },
  "zone": "string"
}
```

UpdateClusterRequest updates the settings of a cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterId|string|false|none|**Deprecated.** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
|name|string|false|none|The name (project, location, cluster) of the cluster to update. Specified in the format `projects/*/locations/*/clusters/*`.|
|projectId|string|false|none|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|update|[ClusterUpdate](#schemaclusterupdate)|false|none|Required. A description of the update.|
|zone|string|false|none|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

<h2 id="tocS_UpdateInfo">UpdateInfo</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinfo"></a>
<a id="schema_UpdateInfo"></a>
<a id="tocSupdateinfo"></a>
<a id="tocsupdateinfo"></a>

```json
{
  "blueGreenInfo": {
    "blueInstanceGroupUrls": [
      "string"
    ],
    "bluePoolDeletionStartTime": "string",
    "greenInstanceGroupUrls": [
      "string"
    ],
    "greenPoolVersion": "string",
    "phase": "PHASE_UNSPECIFIED"
  }
}
```

UpdateInfo contains resource (instance groups, etc), status and other intermediate information relevant to a node pool upgrade.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blueGreenInfo|[BlueGreenInfo](#schemabluegreeninfo)|false|none|Information of a blue-green upgrade.|

<h2 id="tocS_UpdateMasterRequest">UpdateMasterRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemasterrequest"></a>
<a id="schema_UpdateMasterRequest"></a>
<a id="tocSupdatemasterrequest"></a>
<a id="tocsupdatemasterrequest"></a>

```json
{
  "clusterId": "string",
  "masterVersion": "string",
  "name": "string",
  "projectId": "string",
  "zone": "string"
}
```

UpdateMasterRequest updates the master of the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterId|string|false|none|**Deprecated.** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
|masterVersion|string|false|none|Required. The Kubernetes version to change the master to. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the default Kubernetes version|
|name|string|false|none|The name (project, location, cluster) of the cluster to update. Specified in the format `projects/*/locations/*/clusters/*`.|
|projectId|string|false|none|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|zone|string|false|none|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

<h2 id="tocS_UpdateNodePoolRequest">UpdateNodePoolRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenodepoolrequest"></a>
<a id="schema_UpdateNodePoolRequest"></a>
<a id="tocSupdatenodepoolrequest"></a>
<a id="tocsupdatenodepoolrequest"></a>

```json
{
  "clusterId": "string",
  "confidentialNodes": {
    "enabled": true
  },
  "diskSizeGb": "string",
  "diskType": "string",
  "etag": "string",
  "fastSocket": {
    "enabled": true
  },
  "gcfsConfig": {
    "enabled": true
  },
  "gvnic": {
    "enabled": true
  },
  "imageType": "string",
  "kubeletConfig": {
    "cpuCfsQuota": true,
    "cpuCfsQuotaPeriod": "string",
    "cpuManagerPolicy": "string",
    "insecureKubeletReadonlyPortEnabled": true,
    "podPidsLimit": "string"
  },
  "labels": {
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  },
  "linuxNodeConfig": {
    "cgroupMode": "CGROUP_MODE_UNSPECIFIED",
    "sysctls": {
      "property1": "string",
      "property2": "string"
    }
  },
  "locations": [
    "string"
  ],
  "loggingConfig": {
    "variantConfig": {
      "variant": "VARIANT_UNSPECIFIED"
    }
  },
  "machineType": "string",
  "name": "string",
  "nodeNetworkConfig": {
    "additionalNodeNetworkConfigs": [
      {
        "network": "string",
        "subnetwork": "string"
      }
    ],
    "additionalPodNetworkConfigs": [
      {
        "maxPodsPerNode": {
          "maxPodsPerNode": "string"
        },
        "secondaryPodRange": "string",
        "subnetwork": "string"
      }
    ],
    "createPodRange": true,
    "enablePrivateNodes": true,
    "networkPerformanceConfig": {
      "externalIpEgressBandwidthTier": "TIER_UNSPECIFIED",
      "totalEgressBandwidthTier": "TIER_UNSPECIFIED"
    },
    "podCidrOverprovisionConfig": {
      "disable": true
    },
    "podIpv4CidrBlock": "string",
    "podIpv4RangeUtilization": 0,
    "podRange": "string"
  },
  "nodePoolId": "string",
  "nodeVersion": "string",
  "projectId": "string",
  "queuedProvisioning": {
    "enabled": true
  },
  "resourceLabels": {
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  },
  "resourceManagerTags": {
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  },
  "tags": {
    "tags": [
      "string"
    ]
  },
  "taints": {
    "taints": [
      {
        "effect": "EFFECT_UNSPECIFIED",
        "key": "string",
        "value": "string"
      }
    ]
  },
  "upgradeSettings": {
    "blueGreenSettings": {
      "autoscaledRolloutPolicy": {},
      "nodePoolSoakDuration": "string",
      "standardRolloutPolicy": {
        "batchNodeCount": 0,
        "batchPercentage": 0,
        "batchSoakDuration": "string"
      }
    },
    "maxSurge": 0,
    "maxUnavailable": 0,
    "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
  },
  "windowsNodeConfig": {
    "osVersion": "OS_VERSION_UNSPECIFIED"
  },
  "workloadMetadataConfig": {
    "mode": "MODE_UNSPECIFIED",
    "nodeMetadata": "UNSPECIFIED"
  },
  "zone": "string"
}
```

SetNodePoolVersionRequest updates the version of a node pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterId|string|false|none|**Deprecated.** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.|
|confidentialNodes|[ConfidentialNodes](#schemaconfidentialnodes)|false|none|Confidential nodes config. All the nodes in the node pool will be Confidential VM once enabled.|
|diskSizeGb|string(int64)|false|none|Optional. The desired disk size for nodes in the node pool. Initiates an upgrade operation that migrates the nodes in the node pool to the specified disk size.|
|diskType|string|false|none|Optional. The desired disk type for nodes in the node pool. Initiates an upgrade operation that migrates the nodes in the node pool to the specified disk type.|
|etag|string|false|none|The current etag of the node pool. If an etag is provided and does not match the current etag of the node pool, update will be blocked and an ABORTED error will be returned.|
|fastSocket|[FastSocket](#schemafastsocket)|false|none|Enable or disable NCCL fast socket for the node pool.|
|gcfsConfig|[GcfsConfig](#schemagcfsconfig)|false|none|GCFS config.|
|gvnic|[VirtualNIC](#schemavirtualnic)|false|none|Enable or disable gvnic on the node pool.|
|imageType|string|false|none|Required. The desired image type for the node pool. Please see https://cloud.google.com/kubernetes-engine/docs/concepts/node-images for available image types.|
|kubeletConfig|[NodeKubeletConfig](#schemanodekubeletconfig)|false|none|Node kubelet configs.|
|labels|[NodeLabels](#schemanodelabels)|false|none|The desired node labels to be applied to all nodes in the node pool. If this field is not present, the labels will not be changed. Otherwise, the existing node labels will be *replaced* with the provided labels.|
|linuxNodeConfig|[LinuxNodeConfig](#schemalinuxnodeconfig)|false|none|Parameters that can be configured on Linux nodes.|
|locations|[string]|false|none|The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the node pool's nodes should be located. Changing the locations for a node pool will result in nodes being either created or removed from the node pool, depending on whether locations are being added or removed.|
|loggingConfig|[NodePoolLoggingConfig](#schemanodepoolloggingconfig)|false|none|Logging configuration.|
|machineType|string|false|none|Optional. The desired machine type for nodes in the node pool. Initiates an upgrade operation that migrates the nodes in the node pool to the specified machine type.|
|name|string|false|none|The name (project, location, cluster, node pool) of the node pool to update. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.|
|nodeNetworkConfig|[NodeNetworkConfig](#schemanodenetworkconfig)|false|none|Node network config.|
|nodePoolId|string|false|none|**Deprecated.** Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.|
|nodeVersion|string|false|none|Required. The Kubernetes version to change the nodes to (typically an upgrade). Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the Kubernetes master version|
|projectId|string|false|none|**Deprecated.** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.|
|queuedProvisioning|[QueuedProvisioning](#schemaqueuedprovisioning)|false|none|Specifies the configuration of queued provisioning.|
|resourceLabels|[ResourceLabels](#schemaresourcelabels)|false|none|The resource labels for the node pool to use to annotate any related Google Compute Engine resources.|
|resourceManagerTags|[ResourceManagerTags](#schemaresourcemanagertags)|false|none|Desired resource manager tag keys and values to be attached to the nodes for managing Compute Engine firewalls using Network Firewall Policies. Existing tags will be replaced with new values.|
|tags|[NetworkTags](#schemanetworktags)|false|none|The desired network tags to be applied to all nodes in the node pool. If this field is not present, the tags will not be changed. Otherwise, the existing network tags will be *replaced* with the provided tags.|
|taints|[NodeTaints](#schemanodetaints)|false|none|The desired node taints to be applied to all nodes in the node pool. If this field is not present, the taints will not be changed. Otherwise, the existing node taints will be *replaced* with the provided taints.|
|upgradeSettings|[UpgradeSettings](#schemaupgradesettings)|false|none|Upgrade settings control disruption and speed of the upgrade.|
|windowsNodeConfig|[WindowsNodeConfig](#schemawindowsnodeconfig)|false|none|Parameters that can be configured on Windows nodes.|
|workloadMetadataConfig|[WorkloadMetadataConfig](#schemaworkloadmetadataconfig)|false|none|The desired workload metadata config for the node pool.|
|zone|string|false|none|**Deprecated.** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.|

<h2 id="tocS_UpgradeAvailableEvent">UpgradeAvailableEvent</h2>
<!-- backwards compatibility -->
<a id="schemaupgradeavailableevent"></a>
<a id="schema_UpgradeAvailableEvent"></a>
<a id="tocSupgradeavailableevent"></a>
<a id="tocsupgradeavailableevent"></a>

```json
{
  "releaseChannel": {
    "channel": "UNSPECIFIED"
  },
  "resource": "string",
  "resourceType": "UPGRADE_RESOURCE_TYPE_UNSPECIFIED",
  "version": "string",
  "windowsVersions": {
    "windowsVersions": [
      {
        "imageType": "string",
        "osVersion": "string",
        "supportEndDate": {
          "day": 0,
          "month": 0,
          "year": 0
        }
      }
    ]
  }
}
```

UpgradeAvailableEvent is a notification sent to customers when a new available version is released.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|releaseChannel|[ReleaseChannel](#schemareleasechannel)|false|none|The release channel of the version. If empty, it means a non-channel release.|
|resource|string|false|none|Optional relative path to the resource. For example, the relative path of the node pool.|
|resourceType|string|false|none|The resource type of the release version.|
|version|string|false|none|The release version available for upgrade.|
|windowsVersions|[WindowsVersions](#schemawindowsversions)|false|none|Windows node versions info.|

#### Enumerated Values

|Property|Value|
|---|---|
|resourceType|UPGRADE_RESOURCE_TYPE_UNSPECIFIED|
|resourceType|MASTER|
|resourceType|NODE_POOL|

<h2 id="tocS_UpgradeEvent">UpgradeEvent</h2>
<!-- backwards compatibility -->
<a id="schemaupgradeevent"></a>
<a id="schema_UpgradeEvent"></a>
<a id="tocSupgradeevent"></a>
<a id="tocsupgradeevent"></a>

```json
{
  "currentVersion": "string",
  "operation": "string",
  "operationStartTime": "string",
  "resource": "string",
  "resourceType": "UPGRADE_RESOURCE_TYPE_UNSPECIFIED",
  "targetVersion": "string"
}
```

UpgradeEvent is a notification sent to customers by the cluster server when a resource is upgrading.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentVersion|string|false|none|The current version before the upgrade.|
|operation|string|false|none|The operation associated with this upgrade.|
|operationStartTime|string(google-datetime)|false|none|The time when the operation was started.|
|resource|string|false|none|Optional relative path to the resource. For example in node pool upgrades, the relative path of the node pool.|
|resourceType|string|false|none|The resource type that is upgrading.|
|targetVersion|string|false|none|The target version for the upgrade.|

#### Enumerated Values

|Property|Value|
|---|---|
|resourceType|UPGRADE_RESOURCE_TYPE_UNSPECIFIED|
|resourceType|MASTER|
|resourceType|NODE_POOL|

<h2 id="tocS_UpgradeSettings">UpgradeSettings</h2>
<!-- backwards compatibility -->
<a id="schemaupgradesettings"></a>
<a id="schema_UpgradeSettings"></a>
<a id="tocSupgradesettings"></a>
<a id="tocsupgradesettings"></a>

```json
{
  "blueGreenSettings": {
    "autoscaledRolloutPolicy": {},
    "nodePoolSoakDuration": "string",
    "standardRolloutPolicy": {
      "batchNodeCount": 0,
      "batchPercentage": 0,
      "batchSoakDuration": "string"
    }
  },
  "maxSurge": 0,
  "maxUnavailable": 0,
  "strategy": "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
}
```

These upgrade settings control the level of parallelism and the level of disruption caused by an upgrade. maxUnavailable controls the number of nodes that can be simultaneously unavailable. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time). Note: upgrades inevitably introduce some disruption since workloads need to be moved from old nodes to new, upgraded ones. Even if maxUnavailable=0, this holds true. (Disruption stays within the limits of PodDisruptionBudget, if it is configured.) Consider a hypothetical node pool with 5 nodes having maxSurge=2, maxUnavailable=1. This means the upgrade process upgrades 3 nodes simultaneously. It creates 2 additional (upgraded) nodes, then it brings down 3 old (not yet upgraded) nodes at the same time. This ensures that there are always at least 4 nodes available. These upgrade settings configure the upgrade strategy for the node pool. Use strategy to switch between the strategies applied to the node pool. If the strategy is SURGE, use max_surge and max_unavailable to control the level of parallelism and the level of disruption caused by upgrade. 1. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. 2. maxUnavailable controls the number of nodes that can be simultaneously unavailable. 3. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time). If the strategy is BLUE_GREEN, use blue_green_settings to configure the blue-green upgrade related settings. 1. standard_rollout_policy is the default policy. The policy is used to control the way blue pool gets drained. The draining is executed in the batch mode. The batch size could be specified as either percentage of the node pool size or the number of nodes. batch_soak_duration is the soak time after each batch gets drained. 2. node_pool_soak_duration is the soak time after all blue nodes are drained. After this period, the blue pool nodes will be deleted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blueGreenSettings|[BlueGreenSettings](#schemabluegreensettings)|false|none|Settings for blue-green upgrade strategy.|
|maxSurge|integer(int32)|false|none|The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process.|
|maxUnavailable|integer(int32)|false|none|The maximum number of nodes that can be simultaneously unavailable during the upgrade process. A node is considered available if its status is Ready.|
|strategy|string|false|none|Update strategy of the node pool.|

#### Enumerated Values

|Property|Value|
|---|---|
|strategy|NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED|
|strategy|BLUE_GREEN|
|strategy|SURGE|

<h2 id="tocS_UsableSubnetwork">UsableSubnetwork</h2>
<!-- backwards compatibility -->
<a id="schemausablesubnetwork"></a>
<a id="schema_UsableSubnetwork"></a>
<a id="tocSusablesubnetwork"></a>
<a id="tocsusablesubnetwork"></a>

```json
{
  "ipCidrRange": "string",
  "network": "string",
  "secondaryIpRanges": [
    {
      "ipCidrRange": "string",
      "rangeName": "string",
      "status": "UNKNOWN"
    }
  ],
  "statusMessage": "string",
  "subnetwork": "string"
}
```

UsableSubnetwork resource returns the subnetwork name, its associated network and the primary CIDR range.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ipCidrRange|string|false|none|The range of internal addresses that are owned by this subnetwork.|
|network|string|false|none|Network Name. Example: projects/my-project/global/networks/my-network|
|secondaryIpRanges|[[UsableSubnetworkSecondaryRange](#schemausablesubnetworksecondaryrange)]|false|none|Secondary IP ranges.|
|statusMessage|string|false|none|A human readable status message representing the reasons for cases where the caller cannot use the secondary ranges under the subnet. For example if the secondary_ip_ranges is empty due to a permission issue, an insufficient permission message will be given by status_message.|
|subnetwork|string|false|none|Subnetwork Name. Example: projects/my-project/regions/us-central1/subnetworks/my-subnet|

<h2 id="tocS_UsableSubnetworkSecondaryRange">UsableSubnetworkSecondaryRange</h2>
<!-- backwards compatibility -->
<a id="schemausablesubnetworksecondaryrange"></a>
<a id="schema_UsableSubnetworkSecondaryRange"></a>
<a id="tocSusablesubnetworksecondaryrange"></a>
<a id="tocsusablesubnetworksecondaryrange"></a>

```json
{
  "ipCidrRange": "string",
  "rangeName": "string",
  "status": "UNKNOWN"
}
```

Secondary IP range of a usable subnetwork.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ipCidrRange|string|false|none|The range of IP addresses belonging to this subnetwork secondary range.|
|rangeName|string|false|none|The name associated with this subnetwork secondary range, used when adding an alias IP range to a VM instance.|
|status|string|false|none|This field is to determine the status of the secondary range programmably.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|UNKNOWN|
|status|UNUSED|
|status|IN_USE_SERVICE|
|status|IN_USE_SHAREABLE_POD|
|status|IN_USE_MANAGED_POD|

<h2 id="tocS_VerticalPodAutoscaling">VerticalPodAutoscaling</h2>
<!-- backwards compatibility -->
<a id="schemaverticalpodautoscaling"></a>
<a id="schema_VerticalPodAutoscaling"></a>
<a id="tocSverticalpodautoscaling"></a>
<a id="tocsverticalpodautoscaling"></a>

```json
{
  "enabled": true
}
```

VerticalPodAutoscaling contains global, per-cluster information required by Vertical Pod Autoscaler to automatically adjust the resources of pods controlled by it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Enables vertical pod autoscaling.|

<h2 id="tocS_VirtualNIC">VirtualNIC</h2>
<!-- backwards compatibility -->
<a id="schemavirtualnic"></a>
<a id="schema_VirtualNIC"></a>
<a id="tocSvirtualnic"></a>
<a id="tocsvirtualnic"></a>

```json
{
  "enabled": true
}
```

Configuration of gVNIC feature.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether gVNIC features are enabled in the node pool.|

<h2 id="tocS_WindowsNodeConfig">WindowsNodeConfig</h2>
<!-- backwards compatibility -->
<a id="schemawindowsnodeconfig"></a>
<a id="schema_WindowsNodeConfig"></a>
<a id="tocSwindowsnodeconfig"></a>
<a id="tocswindowsnodeconfig"></a>

```json
{
  "osVersion": "OS_VERSION_UNSPECIFIED"
}
```

Parameters that can be configured on Windows nodes. Windows Node Config that define the parameters that will be used to configure the Windows node pool settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|osVersion|string|false|none|OSVersion specifies the Windows node config to be used on the node|

#### Enumerated Values

|Property|Value|
|---|---|
|osVersion|OS_VERSION_UNSPECIFIED|
|osVersion|OS_VERSION_LTSC2019|
|osVersion|OS_VERSION_LTSC2022|

<h2 id="tocS_WindowsVersion">WindowsVersion</h2>
<!-- backwards compatibility -->
<a id="schemawindowsversion"></a>
<a id="schema_WindowsVersion"></a>
<a id="tocSwindowsversion"></a>
<a id="tocswindowsversion"></a>

```json
{
  "imageType": "string",
  "osVersion": "string",
  "supportEndDate": {
    "day": 0,
    "month": 0,
    "year": 0
  }
}
```

Windows server version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageType|string|false|none|Windows server image type|
|osVersion|string|false|none|Windows server build number|
|supportEndDate|[Date](#schemadate)|false|none|Mainstream support end date|

<h2 id="tocS_WindowsVersions">WindowsVersions</h2>
<!-- backwards compatibility -->
<a id="schemawindowsversions"></a>
<a id="schema_WindowsVersions"></a>
<a id="tocSwindowsversions"></a>
<a id="tocswindowsversions"></a>

```json
{
  "windowsVersions": [
    {
      "imageType": "string",
      "osVersion": "string",
      "supportEndDate": {
        "day": 0,
        "month": 0,
        "year": 0
      }
    }
  ]
}
```

Windows server versions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|windowsVersions|[[WindowsVersion](#schemawindowsversion)]|false|none|List of Windows server versions.|

<h2 id="tocS_WorkloadALTSConfig">WorkloadALTSConfig</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadaltsconfig"></a>
<a id="schema_WorkloadALTSConfig"></a>
<a id="tocSworkloadaltsconfig"></a>
<a id="tocsworkloadaltsconfig"></a>

```json
{
  "enableAlts": true
}
```

Configuration for direct-path (via ALTS) with workload identity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableAlts|boolean|false|none|enable_alts controls whether the alts handshaker should be enabled or not for direct-path. Requires Workload Identity (workload_pool must be non-empty).|

<h2 id="tocS_WorkloadCertificates">WorkloadCertificates</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadcertificates"></a>
<a id="schema_WorkloadCertificates"></a>
<a id="tocSworkloadcertificates"></a>
<a id="tocsworkloadcertificates"></a>

```json
{
  "enableCertificates": true
}
```

Configuration for issuance of mTLS keys and certificates to Kubernetes pods.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableCertificates|boolean|false|none|enable_certificates controls issuance of workload mTLS certificates. If set, the GKE Workload Identity Certificates controller and node agent will be deployed in the cluster, which can then be configured by creating a WorkloadCertificateConfig Custom Resource. Requires Workload Identity (workload_pool must be non-empty).|

<h2 id="tocS_WorkloadConfig">WorkloadConfig</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadconfig"></a>
<a id="schema_WorkloadConfig"></a>
<a id="tocSworkloadconfig"></a>
<a id="tocsworkloadconfig"></a>

```json
{
  "auditMode": "MODE_UNSPECIFIED"
}
```

WorkloadConfig defines the flags to enable or disable the workload configurations for the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditMode|string|false|none|Sets which mode of auditing should be used for the cluster's workloads.|

#### Enumerated Values

|Property|Value|
|---|---|
|auditMode|MODE_UNSPECIFIED|
|auditMode|DISABLED|
|auditMode|BASIC|
|auditMode|BASELINE|
|auditMode|RESTRICTED|

<h2 id="tocS_WorkloadIdentityConfig">WorkloadIdentityConfig</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadidentityconfig"></a>
<a id="schema_WorkloadIdentityConfig"></a>
<a id="tocSworkloadidentityconfig"></a>
<a id="tocsworkloadidentityconfig"></a>

```json
{
  "identityNamespace": "string",
  "identityProvider": "string",
  "workloadPool": "string"
}
```

Configuration for the use of Kubernetes Service Accounts in GCP IAM policies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identityNamespace|string|false|none|**Deprecated.** IAM Identity Namespace to attach all Kubernetes Service Accounts to.|
|identityProvider|string|false|none|identity provider is the third party identity provider.|
|workloadPool|string|false|none|The workload pool to attach all Kubernetes service accounts to.|

<h2 id="tocS_WorkloadMetadataConfig">WorkloadMetadataConfig</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadmetadataconfig"></a>
<a id="schema_WorkloadMetadataConfig"></a>
<a id="tocSworkloadmetadataconfig"></a>
<a id="tocsworkloadmetadataconfig"></a>

```json
{
  "mode": "MODE_UNSPECIFIED",
  "nodeMetadata": "UNSPECIFIED"
}
```

WorkloadMetadataConfig defines the metadata configuration to expose to workloads on the node pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mode|string|false|none|Mode is the configuration for how to expose metadata to workloads running on the node pool.|
|nodeMetadata|string|false|none|**Deprecated.** NodeMetadata is the configuration for how to expose metadata to the workloads running on the node.|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|MODE_UNSPECIFIED|
|mode|GCE_METADATA|
|mode|GKE_METADATA|
|nodeMetadata|UNSPECIFIED|
|nodeMetadata|SECURE|
|nodeMetadata|EXPOSE|
|nodeMetadata|GKE_METADATA_SERVER|

<h2 id="tocS_WorkloadPolicyConfig">WorkloadPolicyConfig</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadpolicyconfig"></a>
<a id="schema_WorkloadPolicyConfig"></a>
<a id="tocSworkloadpolicyconfig"></a>
<a id="tocsworkloadpolicyconfig"></a>

```json
{
  "allowNetAdmin": true
}
```

WorkloadPolicyConfig is the configuration of workload policy for autopilot clusters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowNetAdmin|boolean|false|none|If true, workloads can use NET_ADMIN capability.|
