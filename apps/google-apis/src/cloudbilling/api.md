<h1 id="cloud-billing-api">Cloud Billing API v1beta</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Allows developers to manage billing for their Google Cloud Platform projects programmatically.

Base URLs:

* <a href="https://cloudbilling.googleapis.com/">https://cloudbilling.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/billing/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-billing|View and manage your Google Cloud Platform billing accounts|
|https://www.googleapis.com/auth/cloud-billing.readonly|View your Google Cloud Platform billing accounts|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-billing|View and manage your Google Cloud Platform billing accounts|
|https://www.googleapis.com/auth/cloud-billing.readonly|View your Google Cloud Platform billing accounts|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

<h1 id="cloud-billing-api-billingaccounts">billingAccounts</h1>

## cloudbilling.billingAccounts.estimateCostScenario

<a id="opIdcloudbilling.billingAccounts.estimateCostScenario"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:estimateCostScenario \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "costScenario": {
      "commitments": [
        {
          "name": "string",
          "vmResourceBasedCud": {
            "guestAccelerator": {
              "acceleratorCount": "string",
              "acceleratorType": "string"
            },
            "machineSeries": "string",
            "memorySizeGb": 0,
            "plan": "COMMITMENT_PLAN_UNSPECIFIED",
            "region": "string",
            "virtualCpuCount": "string"
          }
        }
      ],
      "scenarioConfig": {
        "estimateDuration": "string"
      },
      "workloads": [
        {
          "cloudCdnEgressWorkload": {
            "cacheEgressDestination": "CACHE_EGRESS_DESTINATION_UNSPECIFIED",
            "cacheEgressRate": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            }
          },
          "cloudCdnWorkload": {
            "cacheFillOriginService": "CACHE_FILL_ORIGIN_SERVICE_UNSPECIFIED",
            "cacheFillRate": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            },
            "cacheFillRegions": {
              "destinationRegion": "CACHE_FILL_DESTINATION_REGION_UNSPECIFIED",
              "sourceRegion": "CACHE_FILL_SOURCE_REGION_UNSPECIFIED"
            },
            "cacheLookUpRate": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            }
          },
          "cloudInterconnectEgressWorkload": {
            "egressRate": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            },
            "interconnectConnectionLocation": "INTERCONNECT_CONNECTION_LOCATION_UNSPECIFIED"
          },
          "cloudInterconnectWorkload": {
            "interconnectAttachments": [
              {
                "bandwidth": "BANDWIDTH_UNSPECIFIED",
                "vlanCount": {
                  "usageRateTimeline": {
                    "unit": "string",
                    "usageRateTimelineEntries": [
                      {
                        "effectiveTime": {
                          "estimationTimeFrameOffset": "string"
                        },
                        "usageRate": 0
                      }
                    ]
                  }
                }
              }
            ],
            "interconnectType": "INTERCONNECT_TYPE_UNSPECIFIED",
            "linkType": "LINK_TYPE_UNSPECIFIED",
            "provisionedLinkCount": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            }
          },
          "cloudStorageEgressWorkload": {
            "destinationContinent": "DESTINATION_CONTINENT_UNSPECIFIED",
            "egressRate": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            },
            "sourceContinent": "SOURCE_CONTINENT_UNSPECIFIED"
          },
          "cloudStorageWorkload": {
            "dataRetrieval": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            },
            "dataStored": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            },
            "dualRegion": {
              "name": "string"
            },
            "multiRegion": {
              "name": "string"
            },
            "operationA": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            },
            "operationB": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            },
            "region": {
              "name": "string"
            },
            "storageClass": "string"
          },
          "computeVmWorkload": {
            "enableConfidentialCompute": true,
            "guestAccelerator": {
              "acceleratorCount": "string",
              "acceleratorType": "string"
            },
            "instancesRunning": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            },
            "licenses": [
              "string"
            ],
            "machineType": {
              "customMachineType": {
                "machineSeries": "string",
                "memorySizeGb": 0,
                "virtualCpuCount": "string"
              },
              "predefinedMachineType": {
                "machineType": "string"
              }
            },
            "persistentDisks": [
              {
                "diskSize": {
                  "usageRateTimeline": {
                    "unit": "string",
                    "usageRateTimelineEntries": [
                      {
                        "effectiveTime": {
                          "estimationTimeFrameOffset": "string"
                        },
                        "usageRate": 0
                      }
                    ]
                  }
                },
                "diskType": "string",
                "provisionedIops": {
                  "usageRateTimeline": {
                    "unit": "string",
                    "usageRateTimelineEntries": [
                      {
                        "effectiveTime": {
                          "estimationTimeFrameOffset": "string"
                        },
                        "usageRate": 0
                      }
                    ]
                  }
                },
                "scope": "SCOPE_UNSPECIFIED"
              }
            ],
            "preemptible": true,
            "region": "string"
          },
          "name": "string",
          "premiumTierEgressWorkload": {
            "destinationContinent": "DESTINATION_CONTINENT_UNSPECIFIED",
            "egressRate": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            },
            "sourceRegion": "string"
          },
          "standardTierEgressWorkload": {
            "egressRate": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            },
            "sourceRegion": "string"
          },
          "vmToVmEgressWorkload": {
            "interRegionEgress": {
              "destinationRegion": "string",
              "egressRate": {
                "usageRateTimeline": {
                  "unit": "string",
                  "usageRateTimelineEntries": [
                    {
                      "effectiveTime": {
                        "estimationTimeFrameOffset": "string"
                      },
                      "usageRate": 0
                    }
                  ]
                }
              },
              "sourceRegion": "string"
            },
            "intraRegionEgress": {
              "egressRate": {
                "usageRateTimeline": {
                  "unit": "string",
                  "usageRateTimelineEntries": [
                    {
                      "effectiveTime": {
                        "estimationTimeFrameOffset": "string"
                      },
                      "usageRate": 0
                    }
                  ]
                }
              }
            }
          }
        }
      ]
    }
  }'
```

`POST /v1beta/{billingAccount}:estimateCostScenario`

Use custom pricing in the estimate, using a `CostScenario` with a defined `billingAccount`.

> Body parameter

```json
{
  "costScenario": {
    "commitments": [
      {
        "name": "string",
        "vmResourceBasedCud": {
          "guestAccelerator": {
            "acceleratorCount": "string",
            "acceleratorType": "string"
          },
          "machineSeries": "string",
          "memorySizeGb": 0,
          "plan": "COMMITMENT_PLAN_UNSPECIFIED",
          "region": "string",
          "virtualCpuCount": "string"
        }
      }
    ],
    "scenarioConfig": {
      "estimateDuration": "string"
    },
    "workloads": [
      {
        "cloudCdnEgressWorkload": {
          "cacheEgressDestination": "CACHE_EGRESS_DESTINATION_UNSPECIFIED",
          "cacheEgressRate": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          }
        },
        "cloudCdnWorkload": {
          "cacheFillOriginService": "CACHE_FILL_ORIGIN_SERVICE_UNSPECIFIED",
          "cacheFillRate": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "cacheFillRegions": {
            "destinationRegion": "CACHE_FILL_DESTINATION_REGION_UNSPECIFIED",
            "sourceRegion": "CACHE_FILL_SOURCE_REGION_UNSPECIFIED"
          },
          "cacheLookUpRate": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          }
        },
        "cloudInterconnectEgressWorkload": {
          "egressRate": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "interconnectConnectionLocation": "INTERCONNECT_CONNECTION_LOCATION_UNSPECIFIED"
        },
        "cloudInterconnectWorkload": {
          "interconnectAttachments": [
            {
              "bandwidth": "BANDWIDTH_UNSPECIFIED",
              "vlanCount": {
                "usageRateTimeline": {
                  "unit": "string",
                  "usageRateTimelineEntries": [
                    {
                      "effectiveTime": {
                        "estimationTimeFrameOffset": "string"
                      },
                      "usageRate": 0
                    }
                  ]
                }
              }
            }
          ],
          "interconnectType": "INTERCONNECT_TYPE_UNSPECIFIED",
          "linkType": "LINK_TYPE_UNSPECIFIED",
          "provisionedLinkCount": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          }
        },
        "cloudStorageEgressWorkload": {
          "destinationContinent": "DESTINATION_CONTINENT_UNSPECIFIED",
          "egressRate": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "sourceContinent": "SOURCE_CONTINENT_UNSPECIFIED"
        },
        "cloudStorageWorkload": {
          "dataRetrieval": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "dataStored": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "dualRegion": {
            "name": "string"
          },
          "multiRegion": {
            "name": "string"
          },
          "operationA": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "operationB": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "region": {
            "name": "string"
          },
          "storageClass": "string"
        },
        "computeVmWorkload": {
          "enableConfidentialCompute": true,
          "guestAccelerator": {
            "acceleratorCount": "string",
            "acceleratorType": "string"
          },
          "instancesRunning": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "licenses": [
            "string"
          ],
          "machineType": {
            "customMachineType": {
              "machineSeries": "string",
              "memorySizeGb": 0,
              "virtualCpuCount": "string"
            },
            "predefinedMachineType": {
              "machineType": "string"
            }
          },
          "persistentDisks": [
            {
              "diskSize": {
                "usageRateTimeline": {
                  "unit": "string",
                  "usageRateTimelineEntries": [
                    {
                      "effectiveTime": {
                        "estimationTimeFrameOffset": "string"
                      },
                      "usageRate": 0
                    }
                  ]
                }
              },
              "diskType": "string",
              "provisionedIops": {
                "usageRateTimeline": {
                  "unit": "string",
                  "usageRateTimelineEntries": [
                    {
                      "effectiveTime": {
                        "estimationTimeFrameOffset": "string"
                      },
                      "usageRate": 0
                    }
                  ]
                }
              },
              "scope": "SCOPE_UNSPECIFIED"
            }
          ],
          "preemptible": true,
          "region": "string"
        },
        "name": "string",
        "premiumTierEgressWorkload": {
          "destinationContinent": "DESTINATION_CONTINENT_UNSPECIFIED",
          "egressRate": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "sourceRegion": "string"
        },
        "standardTierEgressWorkload": {
          "egressRate": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "sourceRegion": "string"
        },
        "vmToVmEgressWorkload": {
          "interRegionEgress": {
            "destinationRegion": "string",
            "egressRate": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            },
            "sourceRegion": "string"
          },
          "intraRegionEgress": {
            "egressRate": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            }
          }
        }
      }
    ]
  }
}
```

<h3 id="cloudbillingbillingaccountsestimatecostscenario-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|billingAccount|path|string|true|Resource name of the billing account for the cost estimate. The resource name has the form `billingAccounts/{billing_acount_id}`. For example, `billingAccounts/012345-567890-ABCDEF` is the resource name for billing account `012345-567890-ABCDEF`. Must be specified.|
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
|body|body|[EstimateCostScenarioForBillingAccountRequest](#schemaestimatecostscenarioforbillingaccountrequest)|false|none|
|» costScenario|body|[CostScenario](#schemacostscenario)|false|The scenario to estimate costs for.|

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
  "costEstimationResult": {
    "currencyCode": "string",
    "segmentCostEstimates": [
      {
        "commitmentCostEstimates": [
          {
            "commitmentTotalCostEstimate": {
              "creditEstimates": [
                {
                  "creditAmount": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "creditDescription": "string",
                  "creditType": "string"
                }
              ],
              "netCostEstimate": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "preCreditCostEstimate": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              }
            },
            "name": "string",
            "skuCostEstimates": [
              {
                "costEstimate": {
                  "creditEstimates": [
                    {
                      "creditAmount": {
                        "currencyCode": "string",
                        "nanos": 0,
                        "units": "string"
                      },
                      "creditDescription": "string",
                      "creditType": "string"
                    }
                  ],
                  "netCostEstimate": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "preCreditCostEstimate": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  }
                },
                "sku": "string",
                "usageAmount": 0,
                "usageUnit": "string"
              }
            ]
          }
        ],
        "segmentStartTime": {
          "estimationTimeFrameOffset": "string"
        },
        "segmentTotalCostEstimate": {
          "creditEstimates": [
            {
              "creditAmount": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "creditDescription": "string",
              "creditType": "string"
            }
          ],
          "netCostEstimate": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "preCreditCostEstimate": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "workloadCostEstimates": [
          {
            "name": "string",
            "skuCostEstimates": [
              {
                "costEstimate": {
                  "creditEstimates": [
                    {
                      "creditAmount": {
                        "currencyCode": "string",
                        "nanos": 0,
                        "units": "string"
                      },
                      "creditDescription": "string",
                      "creditType": "string"
                    }
                  ],
                  "netCostEstimate": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "preCreditCostEstimate": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  }
                },
                "sku": "string",
                "usageAmount": 0,
                "usageUnit": "string"
              }
            ],
            "workloadTotalCostEstimate": {
              "creditEstimates": [
                {
                  "creditAmount": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "creditDescription": "string",
                  "creditType": "string"
                }
              ],
              "netCostEstimate": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "preCreditCostEstimate": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              }
            }
          }
        ]
      }
    ],
    "skus": [
      {
        "displayName": "string",
        "prices": [
          {
            "effectiveTime": {
              "estimationTimeFrameOffset": "string"
            },
            "priceType": "string",
            "rate": {
              "tiers": [
                {
                  "price": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "startAmount": 0
                }
              ],
              "unit": "string",
              "unitCount": 0
            }
          }
        ],
        "sku": "string"
      }
    ]
  }
}
```

<h3 id="cloudbillingbillingaccountsestimatecostscenario-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[EstimateCostScenarioForBillingAccountResponse](#schemaestimatecostscenarioforbillingaccountresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-billing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-billing ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-billing.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-billing.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="cloud-billing-api-v1beta">v1beta</h1>

## cloudbilling.estimateCostScenario

<a id="opIdcloudbilling.estimateCostScenario"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta:estimateCostScenario \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "costScenario": {
      "commitments": [
        {
          "name": "string",
          "vmResourceBasedCud": {
            "guestAccelerator": {
              "acceleratorCount": "string",
              "acceleratorType": "string"
            },
            "machineSeries": "string",
            "memorySizeGb": 0,
            "plan": "COMMITMENT_PLAN_UNSPECIFIED",
            "region": "string",
            "virtualCpuCount": "string"
          }
        }
      ],
      "scenarioConfig": {
        "estimateDuration": "string"
      },
      "workloads": [
        {
          "cloudCdnEgressWorkload": {
            "cacheEgressDestination": "CACHE_EGRESS_DESTINATION_UNSPECIFIED",
            "cacheEgressRate": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            }
          },
          "cloudCdnWorkload": {
            "cacheFillOriginService": "CACHE_FILL_ORIGIN_SERVICE_UNSPECIFIED",
            "cacheFillRate": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            },
            "cacheFillRegions": {
              "destinationRegion": "CACHE_FILL_DESTINATION_REGION_UNSPECIFIED",
              "sourceRegion": "CACHE_FILL_SOURCE_REGION_UNSPECIFIED"
            },
            "cacheLookUpRate": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            }
          },
          "cloudInterconnectEgressWorkload": {
            "egressRate": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            },
            "interconnectConnectionLocation": "INTERCONNECT_CONNECTION_LOCATION_UNSPECIFIED"
          },
          "cloudInterconnectWorkload": {
            "interconnectAttachments": [
              {
                "bandwidth": "BANDWIDTH_UNSPECIFIED",
                "vlanCount": {
                  "usageRateTimeline": {
                    "unit": "string",
                    "usageRateTimelineEntries": [
                      {
                        "effectiveTime": {
                          "estimationTimeFrameOffset": "string"
                        },
                        "usageRate": 0
                      }
                    ]
                  }
                }
              }
            ],
            "interconnectType": "INTERCONNECT_TYPE_UNSPECIFIED",
            "linkType": "LINK_TYPE_UNSPECIFIED",
            "provisionedLinkCount": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            }
          },
          "cloudStorageEgressWorkload": {
            "destinationContinent": "DESTINATION_CONTINENT_UNSPECIFIED",
            "egressRate": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            },
            "sourceContinent": "SOURCE_CONTINENT_UNSPECIFIED"
          },
          "cloudStorageWorkload": {
            "dataRetrieval": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            },
            "dataStored": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            },
            "dualRegion": {
              "name": "string"
            },
            "multiRegion": {
              "name": "string"
            },
            "operationA": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            },
            "operationB": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            },
            "region": {
              "name": "string"
            },
            "storageClass": "string"
          },
          "computeVmWorkload": {
            "enableConfidentialCompute": true,
            "guestAccelerator": {
              "acceleratorCount": "string",
              "acceleratorType": "string"
            },
            "instancesRunning": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            },
            "licenses": [
              "string"
            ],
            "machineType": {
              "customMachineType": {
                "machineSeries": "string",
                "memorySizeGb": 0,
                "virtualCpuCount": "string"
              },
              "predefinedMachineType": {
                "machineType": "string"
              }
            },
            "persistentDisks": [
              {
                "diskSize": {
                  "usageRateTimeline": {
                    "unit": "string",
                    "usageRateTimelineEntries": [
                      {
                        "effectiveTime": {
                          "estimationTimeFrameOffset": "string"
                        },
                        "usageRate": 0
                      }
                    ]
                  }
                },
                "diskType": "string",
                "provisionedIops": {
                  "usageRateTimeline": {
                    "unit": "string",
                    "usageRateTimelineEntries": [
                      {
                        "effectiveTime": {
                          "estimationTimeFrameOffset": "string"
                        },
                        "usageRate": 0
                      }
                    ]
                  }
                },
                "scope": "SCOPE_UNSPECIFIED"
              }
            ],
            "preemptible": true,
            "region": "string"
          },
          "name": "string",
          "premiumTierEgressWorkload": {
            "destinationContinent": "DESTINATION_CONTINENT_UNSPECIFIED",
            "egressRate": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            },
            "sourceRegion": "string"
          },
          "standardTierEgressWorkload": {
            "egressRate": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            },
            "sourceRegion": "string"
          },
          "vmToVmEgressWorkload": {
            "interRegionEgress": {
              "destinationRegion": "string",
              "egressRate": {
                "usageRateTimeline": {
                  "unit": "string",
                  "usageRateTimelineEntries": [
                    {
                      "effectiveTime": {
                        "estimationTimeFrameOffset": "string"
                      },
                      "usageRate": 0
                    }
                  ]
                }
              },
              "sourceRegion": "string"
            },
            "intraRegionEgress": {
              "egressRate": {
                "usageRateTimeline": {
                  "unit": "string",
                  "usageRateTimelineEntries": [
                    {
                      "effectiveTime": {
                        "estimationTimeFrameOffset": "string"
                      },
                      "usageRate": 0
                    }
                  ]
                }
              }
            }
          }
        }
      ]
    }
  }'
```

`POST /v1beta:estimateCostScenario`

Estimate list prices using a `CostScenario` without a defined `billingAccount`.

> Body parameter

```json
{
  "costScenario": {
    "commitments": [
      {
        "name": "string",
        "vmResourceBasedCud": {
          "guestAccelerator": {
            "acceleratorCount": "string",
            "acceleratorType": "string"
          },
          "machineSeries": "string",
          "memorySizeGb": 0,
          "plan": "COMMITMENT_PLAN_UNSPECIFIED",
          "region": "string",
          "virtualCpuCount": "string"
        }
      }
    ],
    "scenarioConfig": {
      "estimateDuration": "string"
    },
    "workloads": [
      {
        "cloudCdnEgressWorkload": {
          "cacheEgressDestination": "CACHE_EGRESS_DESTINATION_UNSPECIFIED",
          "cacheEgressRate": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          }
        },
        "cloudCdnWorkload": {
          "cacheFillOriginService": "CACHE_FILL_ORIGIN_SERVICE_UNSPECIFIED",
          "cacheFillRate": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "cacheFillRegions": {
            "destinationRegion": "CACHE_FILL_DESTINATION_REGION_UNSPECIFIED",
            "sourceRegion": "CACHE_FILL_SOURCE_REGION_UNSPECIFIED"
          },
          "cacheLookUpRate": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          }
        },
        "cloudInterconnectEgressWorkload": {
          "egressRate": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "interconnectConnectionLocation": "INTERCONNECT_CONNECTION_LOCATION_UNSPECIFIED"
        },
        "cloudInterconnectWorkload": {
          "interconnectAttachments": [
            {
              "bandwidth": "BANDWIDTH_UNSPECIFIED",
              "vlanCount": {
                "usageRateTimeline": {
                  "unit": "string",
                  "usageRateTimelineEntries": [
                    {
                      "effectiveTime": {
                        "estimationTimeFrameOffset": "string"
                      },
                      "usageRate": 0
                    }
                  ]
                }
              }
            }
          ],
          "interconnectType": "INTERCONNECT_TYPE_UNSPECIFIED",
          "linkType": "LINK_TYPE_UNSPECIFIED",
          "provisionedLinkCount": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          }
        },
        "cloudStorageEgressWorkload": {
          "destinationContinent": "DESTINATION_CONTINENT_UNSPECIFIED",
          "egressRate": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "sourceContinent": "SOURCE_CONTINENT_UNSPECIFIED"
        },
        "cloudStorageWorkload": {
          "dataRetrieval": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "dataStored": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "dualRegion": {
            "name": "string"
          },
          "multiRegion": {
            "name": "string"
          },
          "operationA": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "operationB": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "region": {
            "name": "string"
          },
          "storageClass": "string"
        },
        "computeVmWorkload": {
          "enableConfidentialCompute": true,
          "guestAccelerator": {
            "acceleratorCount": "string",
            "acceleratorType": "string"
          },
          "instancesRunning": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "licenses": [
            "string"
          ],
          "machineType": {
            "customMachineType": {
              "machineSeries": "string",
              "memorySizeGb": 0,
              "virtualCpuCount": "string"
            },
            "predefinedMachineType": {
              "machineType": "string"
            }
          },
          "persistentDisks": [
            {
              "diskSize": {
                "usageRateTimeline": {
                  "unit": "string",
                  "usageRateTimelineEntries": [
                    {
                      "effectiveTime": {
                        "estimationTimeFrameOffset": "string"
                      },
                      "usageRate": 0
                    }
                  ]
                }
              },
              "diskType": "string",
              "provisionedIops": {
                "usageRateTimeline": {
                  "unit": "string",
                  "usageRateTimelineEntries": [
                    {
                      "effectiveTime": {
                        "estimationTimeFrameOffset": "string"
                      },
                      "usageRate": 0
                    }
                  ]
                }
              },
              "scope": "SCOPE_UNSPECIFIED"
            }
          ],
          "preemptible": true,
          "region": "string"
        },
        "name": "string",
        "premiumTierEgressWorkload": {
          "destinationContinent": "DESTINATION_CONTINENT_UNSPECIFIED",
          "egressRate": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "sourceRegion": "string"
        },
        "standardTierEgressWorkload": {
          "egressRate": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "sourceRegion": "string"
        },
        "vmToVmEgressWorkload": {
          "interRegionEgress": {
            "destinationRegion": "string",
            "egressRate": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            },
            "sourceRegion": "string"
          },
          "intraRegionEgress": {
            "egressRate": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            }
          }
        }
      }
    ]
  }
}
```

<h3 id="cloudbillingestimatecostscenario-parameters">Parameters</h3>

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
|body|body|[EstimateCostScenarioWithListPriceRequest](#schemaestimatecostscenariowithlistpricerequest)|false|none|
|» costScenario|body|[CostScenario](#schemacostscenario)|false|The scenario to estimate costs for.|

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
  "costEstimationResult": {
    "currencyCode": "string",
    "segmentCostEstimates": [
      {
        "commitmentCostEstimates": [
          {
            "commitmentTotalCostEstimate": {
              "creditEstimates": [
                {
                  "creditAmount": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "creditDescription": "string",
                  "creditType": "string"
                }
              ],
              "netCostEstimate": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "preCreditCostEstimate": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              }
            },
            "name": "string",
            "skuCostEstimates": [
              {
                "costEstimate": {
                  "creditEstimates": [
                    {
                      "creditAmount": {
                        "currencyCode": "string",
                        "nanos": 0,
                        "units": "string"
                      },
                      "creditDescription": "string",
                      "creditType": "string"
                    }
                  ],
                  "netCostEstimate": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "preCreditCostEstimate": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  }
                },
                "sku": "string",
                "usageAmount": 0,
                "usageUnit": "string"
              }
            ]
          }
        ],
        "segmentStartTime": {
          "estimationTimeFrameOffset": "string"
        },
        "segmentTotalCostEstimate": {
          "creditEstimates": [
            {
              "creditAmount": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "creditDescription": "string",
              "creditType": "string"
            }
          ],
          "netCostEstimate": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "preCreditCostEstimate": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "workloadCostEstimates": [
          {
            "name": "string",
            "skuCostEstimates": [
              {
                "costEstimate": {
                  "creditEstimates": [
                    {
                      "creditAmount": {
                        "currencyCode": "string",
                        "nanos": 0,
                        "units": "string"
                      },
                      "creditDescription": "string",
                      "creditType": "string"
                    }
                  ],
                  "netCostEstimate": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "preCreditCostEstimate": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  }
                },
                "sku": "string",
                "usageAmount": 0,
                "usageUnit": "string"
              }
            ],
            "workloadTotalCostEstimate": {
              "creditEstimates": [
                {
                  "creditAmount": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "creditDescription": "string",
                  "creditType": "string"
                }
              ],
              "netCostEstimate": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "preCreditCostEstimate": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              }
            }
          }
        ]
      }
    ],
    "skus": [
      {
        "displayName": "string",
        "prices": [
          {
            "effectiveTime": {
              "estimationTimeFrameOffset": "string"
            },
            "priceType": "string",
            "rate": {
              "tiers": [
                {
                  "price": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "startAmount": 0
                }
              ],
              "unit": "string",
              "unitCount": 0
            }
          }
        ],
        "sku": "string"
      }
    ]
  }
}
```

<h3 id="cloudbillingestimatecostscenario-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[EstimateCostScenarioWithListPriceResponse](#schemaestimatecostscenariowithlistpriceresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-billing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-billing ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-billing.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-billing.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_CacheFillRegions">CacheFillRegions</h2>
<!-- backwards compatibility -->
<a id="schemacachefillregions"></a>
<a id="schema_CacheFillRegions"></a>
<a id="tocScachefillregions"></a>
<a id="tocscachefillregions"></a>

```json
{
  "destinationRegion": "CACHE_FILL_DESTINATION_REGION_UNSPECIFIED",
  "sourceRegion": "CACHE_FILL_SOURCE_REGION_UNSPECIFIED"
}
```

Specifies the regions for Cache Fill.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationRegion|string|false|none|The destination region for cache fill.|
|sourceRegion|string|false|none|The source region for cache fill.|

#### Enumerated Values

|Property|Value|
|---|---|
|destinationRegion|CACHE_FILL_DESTINATION_REGION_UNSPECIFIED|
|destinationRegion|CACHE_FILL_DESTINATION_REGION_ASIA_PACIFIC|
|destinationRegion|CACHE_FILL_DESTINATION_REGION_EUROPE|
|destinationRegion|CACHE_FILL_DESTINATION_REGION_NORTH_AMERICA|
|destinationRegion|CACHE_FILL_DESTINATION_REGION_OCEANIA|
|destinationRegion|CACHE_FILL_DESTINATION_REGION_SOUTH_AMERICA|
|destinationRegion|CACHE_FILL_DESTINATION_REGION_CHINA|
|destinationRegion|CACHE_FILL_DESTINATION_REGION_OTHERS|
|sourceRegion|CACHE_FILL_SOURCE_REGION_UNSPECIFIED|
|sourceRegion|CACHE_FILL_REGION_ASIA_PACIFIC|
|sourceRegion|CACHE_FILL_SOURCE_REGION_EUROPE|
|sourceRegion|CACHE_FILL_SOURCE_REGION_NORTH_AMERICA|
|sourceRegion|CACHE_FILL_SOURCE_REGION_OCEANIA|
|sourceRegion|CACHE_FILL_SOURCE_REGION_SOUTH_AMERICA|

<h2 id="tocS_CloudCdnEgressWorkload">CloudCdnEgressWorkload</h2>
<!-- backwards compatibility -->
<a id="schemacloudcdnegressworkload"></a>
<a id="schema_CloudCdnEgressWorkload"></a>
<a id="tocScloudcdnegressworkload"></a>
<a id="tocscloudcdnegressworkload"></a>

```json
{
  "cacheEgressDestination": "CACHE_EGRESS_DESTINATION_UNSPECIFIED",
  "cacheEgressRate": {
    "usageRateTimeline": {
      "unit": "string",
      "usageRateTimelineEntries": [
        {
          "effectiveTime": {
            "estimationTimeFrameOffset": "string"
          },
          "usageRate": 0
        }
      ]
    }
  }
}
```

Specifies usage for Cloud CDN egress.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cacheEgressDestination|string|false|none|The destination for the cache egress charges.|
|cacheEgressRate|[Usage](#schemausage)|false|none|Cache egress usage. The rate of data cache egressed in the destination. For example : units such as "GiBy/s" or "TBy/mo".|

#### Enumerated Values

|Property|Value|
|---|---|
|cacheEgressDestination|CACHE_EGRESS_DESTINATION_UNSPECIFIED|
|cacheEgressDestination|CACHE_EGRESS_DESTINATION_ASIA_PACIFIC|
|cacheEgressDestination|CACHE_EGRESS_DESTINATION_CHINA|
|cacheEgressDestination|CACHE_EGRESS_DESTINATION_EUROPE|
|cacheEgressDestination|CACHE_EGRESS_DESTINATION_NORTH_AMERICA|
|cacheEgressDestination|CACHE_EGRESS_DESTINATION_OCEANIA|
|cacheEgressDestination|CACHE_EGRESS_DESTINATION_LATIN_AMERICA|
|cacheEgressDestination|CACHE_EGRESS_DESTINATION_OTHER_DESTINATIONS|

<h2 id="tocS_CloudCdnWorkload">CloudCdnWorkload</h2>
<!-- backwards compatibility -->
<a id="schemacloudcdnworkload"></a>
<a id="schema_CloudCdnWorkload"></a>
<a id="tocScloudcdnworkload"></a>
<a id="tocscloudcdnworkload"></a>

```json
{
  "cacheFillOriginService": "CACHE_FILL_ORIGIN_SERVICE_UNSPECIFIED",
  "cacheFillRate": {
    "usageRateTimeline": {
      "unit": "string",
      "usageRateTimelineEntries": [
        {
          "effectiveTime": {
            "estimationTimeFrameOffset": "string"
          },
          "usageRate": 0
        }
      ]
    }
  },
  "cacheFillRegions": {
    "destinationRegion": "CACHE_FILL_DESTINATION_REGION_UNSPECIFIED",
    "sourceRegion": "CACHE_FILL_SOURCE_REGION_UNSPECIFIED"
  },
  "cacheLookUpRate": {
    "usageRateTimeline": {
      "unit": "string",
      "usageRateTimelineEntries": [
        {
          "effectiveTime": {
            "estimationTimeFrameOffset": "string"
          },
          "usageRate": 0
        }
      ]
    }
  }
}
```

Specifies usage for Cloud CDN resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cacheFillOriginService|string|false|none|The source service for the cache fill.|
|cacheFillRate|[Usage](#schemausage)|false|none|Cache fill usage. The rate of data transferred between cache fill regions. For example: units such as "GiBy/s" or "TBy/mo".|
|cacheFillRegions|[CacheFillRegions](#schemacachefillregions)|false|none|The regions where data is transferred from Google data locations into Google global cache servers. The SKU prices for cache fill across services are the same.|
|cacheLookUpRate|[Usage](#schemausage)|false|none|Cache look up requests. This is specified to indicate the number of requests. For example: units such as "1/s".|

#### Enumerated Values

|Property|Value|
|---|---|
|cacheFillOriginService|CACHE_FILL_ORIGIN_SERVICE_UNSPECIFIED|
|cacheFillOriginService|CACHE_FILL_ORIGIN_SERVICE_GOOGLE_CLOUD_STORAGE_BUCKET|
|cacheFillOriginService|CACHE_FILL_ORIGIN_SERVICE_BACKEND_SERVICE|

<h2 id="tocS_CloudInterconnectEgressWorkload">CloudInterconnectEgressWorkload</h2>
<!-- backwards compatibility -->
<a id="schemacloudinterconnectegressworkload"></a>
<a id="schema_CloudInterconnectEgressWorkload"></a>
<a id="tocScloudinterconnectegressworkload"></a>
<a id="tocscloudinterconnectegressworkload"></a>

```json
{
  "egressRate": {
    "usageRateTimeline": {
      "unit": "string",
      "usageRateTimelineEntries": [
        {
          "effectiveTime": {
            "estimationTimeFrameOffset": "string"
          },
          "usageRate": 0
        }
      ]
    }
  },
  "interconnectConnectionLocation": "INTERCONNECT_CONNECTION_LOCATION_UNSPECIFIED"
}
```

The interconnect egress only includes the Interconnect Egress. Please use the standard egress traffic interface to specify your standard egress usage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|egressRate|[Usage](#schemausage)|false|none|Data egress usage. This usage applies when you move or copy data from one Google Cloud service to another service. Expected units such as "GiBy/s, By/s, etc."|
|interconnectConnectionLocation|string|false|none|Locations in the [Interconnect connection location table](https://cloud.google.com/vpc/network-pricing#interconnect-pricing). This is the interconnect egress charges.|

#### Enumerated Values

|Property|Value|
|---|---|
|interconnectConnectionLocation|INTERCONNECT_CONNECTION_LOCATION_UNSPECIFIED|
|interconnectConnectionLocation|INTERCONNECT_CONNECTION_LOCATION_ASIA|
|interconnectConnectionLocation|INTERCONNECT_CONNECTION_LOCATION_EUROPE|
|interconnectConnectionLocation|INTERCONNECT_CONNECTION_LOCATION_NORTH_AMERICA|
|interconnectConnectionLocation|INTERCONNECT_CONNECTION_LOCATION_SOUTH_AMERICA|
|interconnectConnectionLocation|INTERCONNECT_CONNECTION_LOCATION_AUSTRALIA|

<h2 id="tocS_CloudInterconnectWorkload">CloudInterconnectWorkload</h2>
<!-- backwards compatibility -->
<a id="schemacloudinterconnectworkload"></a>
<a id="schema_CloudInterconnectWorkload"></a>
<a id="tocScloudinterconnectworkload"></a>
<a id="tocscloudinterconnectworkload"></a>

```json
{
  "interconnectAttachments": [
    {
      "bandwidth": "BANDWIDTH_UNSPECIFIED",
      "vlanCount": {
        "usageRateTimeline": {
          "unit": "string",
          "usageRateTimelineEntries": [
            {
              "effectiveTime": {
                "estimationTimeFrameOffset": "string"
              },
              "usageRate": 0
            }
          ]
        }
      }
    }
  ],
  "interconnectType": "INTERCONNECT_TYPE_UNSPECIFIED",
  "linkType": "LINK_TYPE_UNSPECIFIED",
  "provisionedLinkCount": {
    "usageRateTimeline": {
      "unit": "string",
      "usageRateTimelineEntries": [
        {
          "effectiveTime": {
            "estimationTimeFrameOffset": "string"
          },
          "usageRate": 0
        }
      ]
    }
  }
}
```

Specifies usage for Cloud Interconnect resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interconnectAttachments|[[VlanAttachment](#schemavlanattachment)]|false|none|VLAN attachment used for interconnect.|
|interconnectType|string|false|none|Vlan attachment type.|
|linkType|string|false|none|Interconnect circuit link type.|
|provisionedLinkCount|[Usage](#schemausage)|false|none|Interconnect usage. This is specified as a unitless quantity which indicates the number of circuit provisioned in interconnect.|

#### Enumerated Values

|Property|Value|
|---|---|
|interconnectType|INTERCONNECT_TYPE_UNSPECIFIED|
|interconnectType|INTERCONNECT_TYPE_DEDICATED|
|interconnectType|INTERCONNECT_TYPE_PARTNER|
|linkType|LINK_TYPE_UNSPECIFIED|
|linkType|LINK_TYPE_ETHERNET_10G_LR|
|linkType|LINK_TYPE_ETHERNET_100G_LR|

<h2 id="tocS_CloudStorageEgressWorkload">CloudStorageEgressWorkload</h2>
<!-- backwards compatibility -->
<a id="schemacloudstorageegressworkload"></a>
<a id="schema_CloudStorageEgressWorkload"></a>
<a id="tocScloudstorageegressworkload"></a>
<a id="tocscloudstorageegressworkload"></a>

```json
{
  "destinationContinent": "DESTINATION_CONTINENT_UNSPECIFIED",
  "egressRate": {
    "usageRateTimeline": {
      "unit": "string",
      "usageRateTimelineEntries": [
        {
          "effectiveTime": {
            "estimationTimeFrameOffset": "string"
          },
          "usageRate": 0
        }
      ]
    }
  },
  "sourceContinent": "SOURCE_CONTINENT_UNSPECIFIED"
}
```

Specification of a network type. Network egress within Google Cloud applies when you move or copy data from one Cloud Storage bucket to another or when another Google Cloud service accesses data in your Cloud Storage bucket.This includes the network egress within Google Cloud and the general network usage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationContinent|string|false|none|Where the data is sent to.|
|egressRate|[Usage](#schemausage)|false|none|Egress usage rate. This usage applies when you move or copy data from one Cloud Storage bucket to another or when another Google Cloud service accesses data in your Cloud Storage bucket. Expected units such as "GiBy/s, By/s, ..."|
|sourceContinent|string|false|none|Where the data comes from.|

#### Enumerated Values

|Property|Value|
|---|---|
|destinationContinent|DESTINATION_CONTINENT_UNSPECIFIED|
|destinationContinent|DESTINATION_CONTINENT_ASIA_PACIFIC|
|destinationContinent|DESTINATION_CONTINENT_AUTRALIA|
|destinationContinent|DESTINATION_CONTINENT_EUROPE|
|destinationContinent|DESTINATION_CONTINENT_NORTH_AMERICA|
|destinationContinent|DESTINATION_CONTINENT_SOUTH_AMERICA|
|sourceContinent|SOURCE_CONTINENT_UNSPECIFIED|
|sourceContinent|SOURCE_CONTINENT_ASIA_PACIFIC|
|sourceContinent|SOURCE_CONTINENT_AUSTRALIA|
|sourceContinent|SOURCE_CONTINENT_EUROPE|
|sourceContinent|SOURCE_CONTINENT_NORTH_AMERICA|
|sourceContinent|SOURCE_CONTINENT_SOUTH_AMERICA|

<h2 id="tocS_CloudStorageWorkload">CloudStorageWorkload</h2>
<!-- backwards compatibility -->
<a id="schemacloudstorageworkload"></a>
<a id="schema_CloudStorageWorkload"></a>
<a id="tocScloudstorageworkload"></a>
<a id="tocscloudstorageworkload"></a>

```json
{
  "dataRetrieval": {
    "usageRateTimeline": {
      "unit": "string",
      "usageRateTimelineEntries": [
        {
          "effectiveTime": {
            "estimationTimeFrameOffset": "string"
          },
          "usageRate": 0
        }
      ]
    }
  },
  "dataStored": {
    "usageRateTimeline": {
      "unit": "string",
      "usageRateTimelineEntries": [
        {
          "effectiveTime": {
            "estimationTimeFrameOffset": "string"
          },
          "usageRate": 0
        }
      ]
    }
  },
  "dualRegion": {
    "name": "string"
  },
  "multiRegion": {
    "name": "string"
  },
  "operationA": {
    "usageRateTimeline": {
      "unit": "string",
      "usageRateTimelineEntries": [
        {
          "effectiveTime": {
            "estimationTimeFrameOffset": "string"
          },
          "usageRate": 0
        }
      ]
    }
  },
  "operationB": {
    "usageRateTimeline": {
      "unit": "string",
      "usageRateTimelineEntries": [
        {
          "effectiveTime": {
            "estimationTimeFrameOffset": "string"
          },
          "usageRate": 0
        }
      ]
    }
  },
  "region": {
    "name": "string"
  },
  "storageClass": "string"
}
```

Specifies usage of Cloud Storage resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataRetrieval|[Usage](#schemausage)|false|none|Data retrieval usage. A retrieval cost applies when data or metadata is read, copied, or rewritten . For example: units such as "GiBy/s" or "By/s".|
|dataStored|[Usage](#schemausage)|false|none|Data storage usage. The amount of data stored in buckets. For example: units such as "GiBy/s" or "TBy/mo".|
|dualRegion|[DualRegional](#schemadualregional)|false|none|Specify dual regions.|
|multiRegion|[MultiRegional](#schemamultiregional)|false|none|Specify multi regions.|
|operationA|[Usage](#schemausage)|false|none|Class A operation usage in Cloud Storage, such as listing the objects in buckets. See the [operations pricing](https://cloud.google.com/storage/pricing#operations-pricing) tables for a list of which operations fall into each class. For example: units such as "1/s".|
|operationB|[Usage](#schemausage)|false|none|Class B operation usage in Cloud Storage, such as `getIamPolicy`. See the [operations pricing](https://cloud.google.com/storage/pricing#operations-pricing) tables for a list of which operations fall into each class. For example: units such as "1/s".|
|region|[Regional](#schemaregional)|false|none|Specify a single region.|
|storageClass|string|false|none|The [storage class](https://cloud.google.com/storage/docs/storage-classes#classes) of the data and operation. For example: "standard" and "nearline".|

<h2 id="tocS_Commitment">Commitment</h2>
<!-- backwards compatibility -->
<a id="schemacommitment"></a>
<a id="schema_Commitment"></a>
<a id="tocScommitment"></a>
<a id="tocscommitment"></a>

```json
{
  "name": "string",
  "vmResourceBasedCud": {
    "guestAccelerator": {
      "acceleratorCount": "string",
      "acceleratorType": "string"
    },
    "machineSeries": "string",
    "memorySizeGb": 0,
    "plan": "COMMITMENT_PLAN_UNSPECIFIED",
    "region": "string",
    "virtualCpuCount": "string"
  }
}
```

Commitments give you the ability to pay a recurring fee in exchange for a benefit, such as a discount for your use. For example, this object might contain details of a [spend-based committed use discount (CUD)](https://cloud.google.com/docs/cuds#spend_based_commitments). Within a CostScenario, adding a commitment includes the cost of the commitment and any discounts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Required. A name for this commitment. All commitments in a CostScenario must have unique names. Each name may be at most 128 characters long.|
|vmResourceBasedCud|[VmResourceBasedCud](#schemavmresourcebasedcud)|false|none|A resource-based committed use discount (CUD).|

<h2 id="tocS_CommitmentCostEstimate">CommitmentCostEstimate</h2>
<!-- backwards compatibility -->
<a id="schemacommitmentcostestimate"></a>
<a id="schema_CommitmentCostEstimate"></a>
<a id="tocScommitmentcostestimate"></a>
<a id="tocscommitmentcostestimate"></a>

```json
{
  "commitmentTotalCostEstimate": {
    "creditEstimates": [
      {
        "creditAmount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "creditDescription": "string",
        "creditType": "string"
      }
    ],
    "netCostEstimate": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "preCreditCostEstimate": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    }
  },
  "name": "string",
  "skuCostEstimates": [
    {
      "costEstimate": {
        "creditEstimates": [
          {
            "creditAmount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "creditDescription": "string",
            "creditType": "string"
          }
        ],
        "netCostEstimate": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "preCreditCostEstimate": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        }
      },
      "sku": "string",
      "usageAmount": 0,
      "usageUnit": "string"
    }
  ]
}
```

Estimated cost for a commitment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitmentTotalCostEstimate|[CostEstimate](#schemacostestimate)|false|none|Total estimated costs for the commitment.|
|name|string|false|none|The name of the commitment, as specified in the `CostScenario`.|
|skuCostEstimates|[[SkuCostEstimate](#schemaskucostestimate)]|false|none|Estimated costs for each SKU in the commitment.|

<h2 id="tocS_ComputeVmWorkload">ComputeVmWorkload</h2>
<!-- backwards compatibility -->
<a id="schemacomputevmworkload"></a>
<a id="schema_ComputeVmWorkload"></a>
<a id="tocScomputevmworkload"></a>
<a id="tocscomputevmworkload"></a>

```json
{
  "enableConfidentialCompute": true,
  "guestAccelerator": {
    "acceleratorCount": "string",
    "acceleratorType": "string"
  },
  "instancesRunning": {
    "usageRateTimeline": {
      "unit": "string",
      "usageRateTimelineEntries": [
        {
          "effectiveTime": {
            "estimationTimeFrameOffset": "string"
          },
          "usageRate": 0
        }
      ]
    }
  },
  "licenses": [
    "string"
  ],
  "machineType": {
    "customMachineType": {
      "machineSeries": "string",
      "memorySizeGb": 0,
      "virtualCpuCount": "string"
    },
    "predefinedMachineType": {
      "machineType": "string"
    }
  },
  "persistentDisks": [
    {
      "diskSize": {
        "usageRateTimeline": {
          "unit": "string",
          "usageRateTimelineEntries": [
            {
              "effectiveTime": {
                "estimationTimeFrameOffset": "string"
              },
              "usageRate": 0
            }
          ]
        }
      },
      "diskType": "string",
      "provisionedIops": {
        "usageRateTimeline": {
          "unit": "string",
          "usageRateTimelineEntries": [
            {
              "effectiveTime": {
                "estimationTimeFrameOffset": "string"
              },
              "usageRate": 0
            }
          ]
        }
      },
      "scope": "SCOPE_UNSPECIFIED"
    }
  ],
  "preemptible": true,
  "region": "string"
}
```

Specificies usage of a set of identical compute VM instances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableConfidentialCompute|boolean|false|none|Defines whether each instance has confidential compute enabled.|
|guestAccelerator|[GuestAccelerator](#schemaguestaccelerator)|false|none|Guest accelerators attached to each machine.|
|instancesRunning|[Usage](#schemausage)|false|none|VM usage. This is specified as a unitless quantity which indicates the number of instances running.|
|licenses|[string]|false|none|Premium image licenses used by each instance.|
|machineType|[MachineType](#schemamachinetype)|false|none|The machine type.|
|persistentDisks|[[PersistentDisk](#schemapersistentdisk)]|false|none|Persistent disks attached to each instance. Must include a boot disk.|
|preemptible|boolean|false|none|Defines whether each instance is preemptible.|
|region|string|false|none|The [region](https://cloud.google.com/compute/docs/regions-zones) where the VMs run. For example: "us-central1".|

<h2 id="tocS_CostEstimate">CostEstimate</h2>
<!-- backwards compatibility -->
<a id="schemacostestimate"></a>
<a id="schema_CostEstimate"></a>
<a id="tocScostestimate"></a>
<a id="tocscostestimate"></a>

```json
{
  "creditEstimates": [
    {
      "creditAmount": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "creditDescription": "string",
      "creditType": "string"
    }
  ],
  "netCostEstimate": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "preCreditCostEstimate": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  }
}
```

An estimated cost.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creditEstimates|[[CreditEstimate](#schemacreditestimate)]|false|none|The estimated credits applied.|
|netCostEstimate|[Money](#schemamoney)|false|none|The estimated net cost after applying credits.|
|preCreditCostEstimate|[Money](#schemamoney)|false|none|The estimated cost prior to applying credits.|

<h2 id="tocS_CostEstimationResult">CostEstimationResult</h2>
<!-- backwards compatibility -->
<a id="schemacostestimationresult"></a>
<a id="schema_CostEstimationResult"></a>
<a id="tocScostestimationresult"></a>
<a id="tocscostestimationresult"></a>

```json
{
  "currencyCode": "string",
  "segmentCostEstimates": [
    {
      "commitmentCostEstimates": [
        {
          "commitmentTotalCostEstimate": {
            "creditEstimates": [
              {
                "creditAmount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "creditDescription": "string",
                "creditType": "string"
              }
            ],
            "netCostEstimate": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "preCreditCostEstimate": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            }
          },
          "name": "string",
          "skuCostEstimates": [
            {
              "costEstimate": {
                "creditEstimates": [
                  {
                    "creditAmount": {
                      "currencyCode": "string",
                      "nanos": 0,
                      "units": "string"
                    },
                    "creditDescription": "string",
                    "creditType": "string"
                  }
                ],
                "netCostEstimate": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "preCreditCostEstimate": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                }
              },
              "sku": "string",
              "usageAmount": 0,
              "usageUnit": "string"
            }
          ]
        }
      ],
      "segmentStartTime": {
        "estimationTimeFrameOffset": "string"
      },
      "segmentTotalCostEstimate": {
        "creditEstimates": [
          {
            "creditAmount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "creditDescription": "string",
            "creditType": "string"
          }
        ],
        "netCostEstimate": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "preCreditCostEstimate": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        }
      },
      "workloadCostEstimates": [
        {
          "name": "string",
          "skuCostEstimates": [
            {
              "costEstimate": {
                "creditEstimates": [
                  {
                    "creditAmount": {
                      "currencyCode": "string",
                      "nanos": 0,
                      "units": "string"
                    },
                    "creditDescription": "string",
                    "creditType": "string"
                  }
                ],
                "netCostEstimate": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "preCreditCostEstimate": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                }
              },
              "sku": "string",
              "usageAmount": 0,
              "usageUnit": "string"
            }
          ],
          "workloadTotalCostEstimate": {
            "creditEstimates": [
              {
                "creditAmount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "creditDescription": "string",
                "creditType": "string"
              }
            ],
            "netCostEstimate": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "preCreditCostEstimate": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            }
          }
        }
      ]
    }
  ],
  "skus": [
    {
      "displayName": "string",
      "prices": [
        {
          "effectiveTime": {
            "estimationTimeFrameOffset": "string"
          },
          "priceType": "string",
          "rate": {
            "tiers": [
              {
                "price": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "startAmount": 0
              }
            ],
            "unit": "string",
            "unitCount": 0
          }
        }
      ],
      "sku": "string"
    }
  ]
}
```

The result of a estimating the costs of a `CostScenario`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|false|none|Required. The ISO 4217 currency code for the cost estimate.|
|segmentCostEstimates|[[SegmentCostEstimate](#schemasegmentcostestimate)]|false|none|Required. Estimated costs for each idealized month of a `CostScenario`.|
|skus|[[Sku](#schemasku)]|false|none|Required. Information about SKUs used in the estimate.|

<h2 id="tocS_CostScenario">CostScenario</h2>
<!-- backwards compatibility -->
<a id="schemacostscenario"></a>
<a id="schema_CostScenario"></a>
<a id="tocScostscenario"></a>
<a id="tocscostscenario"></a>

```json
{
  "commitments": [
    {
      "name": "string",
      "vmResourceBasedCud": {
        "guestAccelerator": {
          "acceleratorCount": "string",
          "acceleratorType": "string"
        },
        "machineSeries": "string",
        "memorySizeGb": 0,
        "plan": "COMMITMENT_PLAN_UNSPECIFIED",
        "region": "string",
        "virtualCpuCount": "string"
      }
    }
  ],
  "scenarioConfig": {
    "estimateDuration": "string"
  },
  "workloads": [
    {
      "cloudCdnEgressWorkload": {
        "cacheEgressDestination": "CACHE_EGRESS_DESTINATION_UNSPECIFIED",
        "cacheEgressRate": {
          "usageRateTimeline": {
            "unit": "string",
            "usageRateTimelineEntries": [
              {
                "effectiveTime": {
                  "estimationTimeFrameOffset": "string"
                },
                "usageRate": 0
              }
            ]
          }
        }
      },
      "cloudCdnWorkload": {
        "cacheFillOriginService": "CACHE_FILL_ORIGIN_SERVICE_UNSPECIFIED",
        "cacheFillRate": {
          "usageRateTimeline": {
            "unit": "string",
            "usageRateTimelineEntries": [
              {
                "effectiveTime": {
                  "estimationTimeFrameOffset": "string"
                },
                "usageRate": 0
              }
            ]
          }
        },
        "cacheFillRegions": {
          "destinationRegion": "CACHE_FILL_DESTINATION_REGION_UNSPECIFIED",
          "sourceRegion": "CACHE_FILL_SOURCE_REGION_UNSPECIFIED"
        },
        "cacheLookUpRate": {
          "usageRateTimeline": {
            "unit": "string",
            "usageRateTimelineEntries": [
              {
                "effectiveTime": {
                  "estimationTimeFrameOffset": "string"
                },
                "usageRate": 0
              }
            ]
          }
        }
      },
      "cloudInterconnectEgressWorkload": {
        "egressRate": {
          "usageRateTimeline": {
            "unit": "string",
            "usageRateTimelineEntries": [
              {
                "effectiveTime": {
                  "estimationTimeFrameOffset": "string"
                },
                "usageRate": 0
              }
            ]
          }
        },
        "interconnectConnectionLocation": "INTERCONNECT_CONNECTION_LOCATION_UNSPECIFIED"
      },
      "cloudInterconnectWorkload": {
        "interconnectAttachments": [
          {
            "bandwidth": "BANDWIDTH_UNSPECIFIED",
            "vlanCount": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            }
          }
        ],
        "interconnectType": "INTERCONNECT_TYPE_UNSPECIFIED",
        "linkType": "LINK_TYPE_UNSPECIFIED",
        "provisionedLinkCount": {
          "usageRateTimeline": {
            "unit": "string",
            "usageRateTimelineEntries": [
              {
                "effectiveTime": {
                  "estimationTimeFrameOffset": "string"
                },
                "usageRate": 0
              }
            ]
          }
        }
      },
      "cloudStorageEgressWorkload": {
        "destinationContinent": "DESTINATION_CONTINENT_UNSPECIFIED",
        "egressRate": {
          "usageRateTimeline": {
            "unit": "string",
            "usageRateTimelineEntries": [
              {
                "effectiveTime": {
                  "estimationTimeFrameOffset": "string"
                },
                "usageRate": 0
              }
            ]
          }
        },
        "sourceContinent": "SOURCE_CONTINENT_UNSPECIFIED"
      },
      "cloudStorageWorkload": {
        "dataRetrieval": {
          "usageRateTimeline": {
            "unit": "string",
            "usageRateTimelineEntries": [
              {
                "effectiveTime": {
                  "estimationTimeFrameOffset": "string"
                },
                "usageRate": 0
              }
            ]
          }
        },
        "dataStored": {
          "usageRateTimeline": {
            "unit": "string",
            "usageRateTimelineEntries": [
              {
                "effectiveTime": {
                  "estimationTimeFrameOffset": "string"
                },
                "usageRate": 0
              }
            ]
          }
        },
        "dualRegion": {
          "name": "string"
        },
        "multiRegion": {
          "name": "string"
        },
        "operationA": {
          "usageRateTimeline": {
            "unit": "string",
            "usageRateTimelineEntries": [
              {
                "effectiveTime": {
                  "estimationTimeFrameOffset": "string"
                },
                "usageRate": 0
              }
            ]
          }
        },
        "operationB": {
          "usageRateTimeline": {
            "unit": "string",
            "usageRateTimelineEntries": [
              {
                "effectiveTime": {
                  "estimationTimeFrameOffset": "string"
                },
                "usageRate": 0
              }
            ]
          }
        },
        "region": {
          "name": "string"
        },
        "storageClass": "string"
      },
      "computeVmWorkload": {
        "enableConfidentialCompute": true,
        "guestAccelerator": {
          "acceleratorCount": "string",
          "acceleratorType": "string"
        },
        "instancesRunning": {
          "usageRateTimeline": {
            "unit": "string",
            "usageRateTimelineEntries": [
              {
                "effectiveTime": {
                  "estimationTimeFrameOffset": "string"
                },
                "usageRate": 0
              }
            ]
          }
        },
        "licenses": [
          "string"
        ],
        "machineType": {
          "customMachineType": {
            "machineSeries": "string",
            "memorySizeGb": 0,
            "virtualCpuCount": "string"
          },
          "predefinedMachineType": {
            "machineType": "string"
          }
        },
        "persistentDisks": [
          {
            "diskSize": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            },
            "diskType": "string",
            "provisionedIops": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            },
            "scope": "SCOPE_UNSPECIFIED"
          }
        ],
        "preemptible": true,
        "region": "string"
      },
      "name": "string",
      "premiumTierEgressWorkload": {
        "destinationContinent": "DESTINATION_CONTINENT_UNSPECIFIED",
        "egressRate": {
          "usageRateTimeline": {
            "unit": "string",
            "usageRateTimelineEntries": [
              {
                "effectiveTime": {
                  "estimationTimeFrameOffset": "string"
                },
                "usageRate": 0
              }
            ]
          }
        },
        "sourceRegion": "string"
      },
      "standardTierEgressWorkload": {
        "egressRate": {
          "usageRateTimeline": {
            "unit": "string",
            "usageRateTimelineEntries": [
              {
                "effectiveTime": {
                  "estimationTimeFrameOffset": "string"
                },
                "usageRate": 0
              }
            ]
          }
        },
        "sourceRegion": "string"
      },
      "vmToVmEgressWorkload": {
        "interRegionEgress": {
          "destinationRegion": "string",
          "egressRate": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "sourceRegion": "string"
        },
        "intraRegionEgress": {
          "egressRate": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          }
        }
      }
    }
  ]
}
```

Encapsulates all the information needed to perform a cost estimate. It includes a specification of the Google Cloud usage whose costs are estimated, and configuration options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitments|[[Commitment](#schemacommitment)]|false|none|New commitments to estimate the costs for. The cost of the commitments will be included in the estimate result and discounts the commitment entitles will be included in the workload cost estimates. A maximum of 100 workloads can be provided.|
|scenarioConfig|[ScenarioConfig](#schemascenarioconfig)|false|none|Configuration for the scenario.|
|workloads|[[Workload](#schemaworkload)]|false|none|The Google Cloud usage whose costs are estimated. A maximum of 100 workloads can be provided.|

<h2 id="tocS_CreditEstimate">CreditEstimate</h2>
<!-- backwards compatibility -->
<a id="schemacreditestimate"></a>
<a id="schema_CreditEstimate"></a>
<a id="tocScreditestimate"></a>
<a id="tocscreditestimate"></a>

```json
{
  "creditAmount": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "creditDescription": "string",
  "creditType": "string"
}
```

An estimated credit applied to the costs on a SKU.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creditAmount|[Money](#schemamoney)|false|none|The estimated credit amount.|
|creditDescription|string|false|none|The credit description.|
|creditType|string|false|none|The credit type.|

<h2 id="tocS_CustomMachineType">CustomMachineType</h2>
<!-- backwards compatibility -->
<a id="schemacustommachinetype"></a>
<a id="schema_CustomMachineType"></a>
<a id="tocScustommachinetype"></a>
<a id="tocscustommachinetype"></a>

```json
{
  "machineSeries": "string",
  "memorySizeGb": 0,
  "virtualCpuCount": "string"
}
```

Specification of a custom machine type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|machineSeries|string|false|none|Required. The machine series. Only certain [machine series](https://cloud.google.com/compute/docs/general-purpose-machines#custom_machine_types) support custom configurations. For example: "n1".|
|memorySizeGb|number(double)|false|none|Required. Memory size of the VM in GB (2^30 bytes). Must be an increment of 0.25 (256 MB). Each [machine series](https://cloud.google.com/compute/docs/machine-types#machine_type_comparison) has limitations on allowed values for the ratio of memory-to-vCPU count.|
|virtualCpuCount|string(int64)|false|none|Required. The number of vCPUs. The allowed values depend on the [machine series](https://cloud.google.com/compute/docs/machine-types#machine_type_comparison).|

<h2 id="tocS_DualRegional">DualRegional</h2>
<!-- backwards compatibility -->
<a id="schemadualregional"></a>
<a id="schema_DualRegional"></a>
<a id="tocSdualregional"></a>
<a id="tocsdualregional"></a>

```json
{
  "name": "string"
}
```

Area contains dual locations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The [location name](https://cloud.google.com/storage/docs/locations#available-locations) where the data is stored. For example: "asia1" for dual region.|

<h2 id="tocS_EstimateCostScenarioForBillingAccountRequest">EstimateCostScenarioForBillingAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaestimatecostscenarioforbillingaccountrequest"></a>
<a id="schema_EstimateCostScenarioForBillingAccountRequest"></a>
<a id="tocSestimatecostscenarioforbillingaccountrequest"></a>
<a id="tocsestimatecostscenarioforbillingaccountrequest"></a>

```json
{
  "costScenario": {
    "commitments": [
      {
        "name": "string",
        "vmResourceBasedCud": {
          "guestAccelerator": {
            "acceleratorCount": "string",
            "acceleratorType": "string"
          },
          "machineSeries": "string",
          "memorySizeGb": 0,
          "plan": "COMMITMENT_PLAN_UNSPECIFIED",
          "region": "string",
          "virtualCpuCount": "string"
        }
      }
    ],
    "scenarioConfig": {
      "estimateDuration": "string"
    },
    "workloads": [
      {
        "cloudCdnEgressWorkload": {
          "cacheEgressDestination": "CACHE_EGRESS_DESTINATION_UNSPECIFIED",
          "cacheEgressRate": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          }
        },
        "cloudCdnWorkload": {
          "cacheFillOriginService": "CACHE_FILL_ORIGIN_SERVICE_UNSPECIFIED",
          "cacheFillRate": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "cacheFillRegions": {
            "destinationRegion": "CACHE_FILL_DESTINATION_REGION_UNSPECIFIED",
            "sourceRegion": "CACHE_FILL_SOURCE_REGION_UNSPECIFIED"
          },
          "cacheLookUpRate": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          }
        },
        "cloudInterconnectEgressWorkload": {
          "egressRate": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "interconnectConnectionLocation": "INTERCONNECT_CONNECTION_LOCATION_UNSPECIFIED"
        },
        "cloudInterconnectWorkload": {
          "interconnectAttachments": [
            {
              "bandwidth": "BANDWIDTH_UNSPECIFIED",
              "vlanCount": {
                "usageRateTimeline": {
                  "unit": "string",
                  "usageRateTimelineEntries": [
                    {
                      "effectiveTime": {
                        "estimationTimeFrameOffset": "string"
                      },
                      "usageRate": 0
                    }
                  ]
                }
              }
            }
          ],
          "interconnectType": "INTERCONNECT_TYPE_UNSPECIFIED",
          "linkType": "LINK_TYPE_UNSPECIFIED",
          "provisionedLinkCount": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          }
        },
        "cloudStorageEgressWorkload": {
          "destinationContinent": "DESTINATION_CONTINENT_UNSPECIFIED",
          "egressRate": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "sourceContinent": "SOURCE_CONTINENT_UNSPECIFIED"
        },
        "cloudStorageWorkload": {
          "dataRetrieval": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "dataStored": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "dualRegion": {
            "name": "string"
          },
          "multiRegion": {
            "name": "string"
          },
          "operationA": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "operationB": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "region": {
            "name": "string"
          },
          "storageClass": "string"
        },
        "computeVmWorkload": {
          "enableConfidentialCompute": true,
          "guestAccelerator": {
            "acceleratorCount": "string",
            "acceleratorType": "string"
          },
          "instancesRunning": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "licenses": [
            "string"
          ],
          "machineType": {
            "customMachineType": {
              "machineSeries": "string",
              "memorySizeGb": 0,
              "virtualCpuCount": "string"
            },
            "predefinedMachineType": {
              "machineType": "string"
            }
          },
          "persistentDisks": [
            {
              "diskSize": {
                "usageRateTimeline": {
                  "unit": "string",
                  "usageRateTimelineEntries": [
                    {
                      "effectiveTime": {
                        "estimationTimeFrameOffset": "string"
                      },
                      "usageRate": 0
                    }
                  ]
                }
              },
              "diskType": "string",
              "provisionedIops": {
                "usageRateTimeline": {
                  "unit": "string",
                  "usageRateTimelineEntries": [
                    {
                      "effectiveTime": {
                        "estimationTimeFrameOffset": "string"
                      },
                      "usageRate": 0
                    }
                  ]
                }
              },
              "scope": "SCOPE_UNSPECIFIED"
            }
          ],
          "preemptible": true,
          "region": "string"
        },
        "name": "string",
        "premiumTierEgressWorkload": {
          "destinationContinent": "DESTINATION_CONTINENT_UNSPECIFIED",
          "egressRate": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "sourceRegion": "string"
        },
        "standardTierEgressWorkload": {
          "egressRate": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "sourceRegion": "string"
        },
        "vmToVmEgressWorkload": {
          "interRegionEgress": {
            "destinationRegion": "string",
            "egressRate": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            },
            "sourceRegion": "string"
          },
          "intraRegionEgress": {
            "egressRate": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            }
          }
        }
      }
    ]
  }
}
```

Request for EstimateCostScenarioForBillingAccount.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|costScenario|[CostScenario](#schemacostscenario)|false|none|The scenario to estimate costs for.|

<h2 id="tocS_EstimateCostScenarioForBillingAccountResponse">EstimateCostScenarioForBillingAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaestimatecostscenarioforbillingaccountresponse"></a>
<a id="schema_EstimateCostScenarioForBillingAccountResponse"></a>
<a id="tocSestimatecostscenarioforbillingaccountresponse"></a>
<a id="tocsestimatecostscenarioforbillingaccountresponse"></a>

```json
{
  "costEstimationResult": {
    "currencyCode": "string",
    "segmentCostEstimates": [
      {
        "commitmentCostEstimates": [
          {
            "commitmentTotalCostEstimate": {
              "creditEstimates": [
                {
                  "creditAmount": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "creditDescription": "string",
                  "creditType": "string"
                }
              ],
              "netCostEstimate": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "preCreditCostEstimate": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              }
            },
            "name": "string",
            "skuCostEstimates": [
              {
                "costEstimate": {
                  "creditEstimates": [
                    {
                      "creditAmount": {
                        "currencyCode": "string",
                        "nanos": 0,
                        "units": "string"
                      },
                      "creditDescription": "string",
                      "creditType": "string"
                    }
                  ],
                  "netCostEstimate": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "preCreditCostEstimate": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  }
                },
                "sku": "string",
                "usageAmount": 0,
                "usageUnit": "string"
              }
            ]
          }
        ],
        "segmentStartTime": {
          "estimationTimeFrameOffset": "string"
        },
        "segmentTotalCostEstimate": {
          "creditEstimates": [
            {
              "creditAmount": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "creditDescription": "string",
              "creditType": "string"
            }
          ],
          "netCostEstimate": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "preCreditCostEstimate": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "workloadCostEstimates": [
          {
            "name": "string",
            "skuCostEstimates": [
              {
                "costEstimate": {
                  "creditEstimates": [
                    {
                      "creditAmount": {
                        "currencyCode": "string",
                        "nanos": 0,
                        "units": "string"
                      },
                      "creditDescription": "string",
                      "creditType": "string"
                    }
                  ],
                  "netCostEstimate": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "preCreditCostEstimate": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  }
                },
                "sku": "string",
                "usageAmount": 0,
                "usageUnit": "string"
              }
            ],
            "workloadTotalCostEstimate": {
              "creditEstimates": [
                {
                  "creditAmount": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "creditDescription": "string",
                  "creditType": "string"
                }
              ],
              "netCostEstimate": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "preCreditCostEstimate": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              }
            }
          }
        ]
      }
    ],
    "skus": [
      {
        "displayName": "string",
        "prices": [
          {
            "effectiveTime": {
              "estimationTimeFrameOffset": "string"
            },
            "priceType": "string",
            "rate": {
              "tiers": [
                {
                  "price": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "startAmount": 0
                }
              ],
              "unit": "string",
              "unitCount": 0
            }
          }
        ],
        "sku": "string"
      }
    ]
  }
}
```

Response for EstimateCostScenarioForBillingAccount

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|costEstimationResult|[CostEstimationResult](#schemacostestimationresult)|false|none|The result of the cost estimation.|

<h2 id="tocS_EstimateCostScenarioWithListPriceRequest">EstimateCostScenarioWithListPriceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaestimatecostscenariowithlistpricerequest"></a>
<a id="schema_EstimateCostScenarioWithListPriceRequest"></a>
<a id="tocSestimatecostscenariowithlistpricerequest"></a>
<a id="tocsestimatecostscenariowithlistpricerequest"></a>

```json
{
  "costScenario": {
    "commitments": [
      {
        "name": "string",
        "vmResourceBasedCud": {
          "guestAccelerator": {
            "acceleratorCount": "string",
            "acceleratorType": "string"
          },
          "machineSeries": "string",
          "memorySizeGb": 0,
          "plan": "COMMITMENT_PLAN_UNSPECIFIED",
          "region": "string",
          "virtualCpuCount": "string"
        }
      }
    ],
    "scenarioConfig": {
      "estimateDuration": "string"
    },
    "workloads": [
      {
        "cloudCdnEgressWorkload": {
          "cacheEgressDestination": "CACHE_EGRESS_DESTINATION_UNSPECIFIED",
          "cacheEgressRate": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          }
        },
        "cloudCdnWorkload": {
          "cacheFillOriginService": "CACHE_FILL_ORIGIN_SERVICE_UNSPECIFIED",
          "cacheFillRate": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "cacheFillRegions": {
            "destinationRegion": "CACHE_FILL_DESTINATION_REGION_UNSPECIFIED",
            "sourceRegion": "CACHE_FILL_SOURCE_REGION_UNSPECIFIED"
          },
          "cacheLookUpRate": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          }
        },
        "cloudInterconnectEgressWorkload": {
          "egressRate": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "interconnectConnectionLocation": "INTERCONNECT_CONNECTION_LOCATION_UNSPECIFIED"
        },
        "cloudInterconnectWorkload": {
          "interconnectAttachments": [
            {
              "bandwidth": "BANDWIDTH_UNSPECIFIED",
              "vlanCount": {
                "usageRateTimeline": {
                  "unit": "string",
                  "usageRateTimelineEntries": [
                    {
                      "effectiveTime": {
                        "estimationTimeFrameOffset": "string"
                      },
                      "usageRate": 0
                    }
                  ]
                }
              }
            }
          ],
          "interconnectType": "INTERCONNECT_TYPE_UNSPECIFIED",
          "linkType": "LINK_TYPE_UNSPECIFIED",
          "provisionedLinkCount": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          }
        },
        "cloudStorageEgressWorkload": {
          "destinationContinent": "DESTINATION_CONTINENT_UNSPECIFIED",
          "egressRate": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "sourceContinent": "SOURCE_CONTINENT_UNSPECIFIED"
        },
        "cloudStorageWorkload": {
          "dataRetrieval": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "dataStored": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "dualRegion": {
            "name": "string"
          },
          "multiRegion": {
            "name": "string"
          },
          "operationA": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "operationB": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "region": {
            "name": "string"
          },
          "storageClass": "string"
        },
        "computeVmWorkload": {
          "enableConfidentialCompute": true,
          "guestAccelerator": {
            "acceleratorCount": "string",
            "acceleratorType": "string"
          },
          "instancesRunning": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "licenses": [
            "string"
          ],
          "machineType": {
            "customMachineType": {
              "machineSeries": "string",
              "memorySizeGb": 0,
              "virtualCpuCount": "string"
            },
            "predefinedMachineType": {
              "machineType": "string"
            }
          },
          "persistentDisks": [
            {
              "diskSize": {
                "usageRateTimeline": {
                  "unit": "string",
                  "usageRateTimelineEntries": [
                    {
                      "effectiveTime": {
                        "estimationTimeFrameOffset": "string"
                      },
                      "usageRate": 0
                    }
                  ]
                }
              },
              "diskType": "string",
              "provisionedIops": {
                "usageRateTimeline": {
                  "unit": "string",
                  "usageRateTimelineEntries": [
                    {
                      "effectiveTime": {
                        "estimationTimeFrameOffset": "string"
                      },
                      "usageRate": 0
                    }
                  ]
                }
              },
              "scope": "SCOPE_UNSPECIFIED"
            }
          ],
          "preemptible": true,
          "region": "string"
        },
        "name": "string",
        "premiumTierEgressWorkload": {
          "destinationContinent": "DESTINATION_CONTINENT_UNSPECIFIED",
          "egressRate": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "sourceRegion": "string"
        },
        "standardTierEgressWorkload": {
          "egressRate": {
            "usageRateTimeline": {
              "unit": "string",
              "usageRateTimelineEntries": [
                {
                  "effectiveTime": {
                    "estimationTimeFrameOffset": "string"
                  },
                  "usageRate": 0
                }
              ]
            }
          },
          "sourceRegion": "string"
        },
        "vmToVmEgressWorkload": {
          "interRegionEgress": {
            "destinationRegion": "string",
            "egressRate": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            },
            "sourceRegion": "string"
          },
          "intraRegionEgress": {
            "egressRate": {
              "usageRateTimeline": {
                "unit": "string",
                "usageRateTimelineEntries": [
                  {
                    "effectiveTime": {
                      "estimationTimeFrameOffset": "string"
                    },
                    "usageRate": 0
                  }
                ]
              }
            }
          }
        }
      }
    ]
  }
}
```

Request for EstimateCostScenarioWithListPrice.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|costScenario|[CostScenario](#schemacostscenario)|false|none|The scenario to estimate costs for.|

<h2 id="tocS_EstimateCostScenarioWithListPriceResponse">EstimateCostScenarioWithListPriceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaestimatecostscenariowithlistpriceresponse"></a>
<a id="schema_EstimateCostScenarioWithListPriceResponse"></a>
<a id="tocSestimatecostscenariowithlistpriceresponse"></a>
<a id="tocsestimatecostscenariowithlistpriceresponse"></a>

```json
{
  "costEstimationResult": {
    "currencyCode": "string",
    "segmentCostEstimates": [
      {
        "commitmentCostEstimates": [
          {
            "commitmentTotalCostEstimate": {
              "creditEstimates": [
                {
                  "creditAmount": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "creditDescription": "string",
                  "creditType": "string"
                }
              ],
              "netCostEstimate": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "preCreditCostEstimate": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              }
            },
            "name": "string",
            "skuCostEstimates": [
              {
                "costEstimate": {
                  "creditEstimates": [
                    {
                      "creditAmount": {
                        "currencyCode": "string",
                        "nanos": 0,
                        "units": "string"
                      },
                      "creditDescription": "string",
                      "creditType": "string"
                    }
                  ],
                  "netCostEstimate": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "preCreditCostEstimate": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  }
                },
                "sku": "string",
                "usageAmount": 0,
                "usageUnit": "string"
              }
            ]
          }
        ],
        "segmentStartTime": {
          "estimationTimeFrameOffset": "string"
        },
        "segmentTotalCostEstimate": {
          "creditEstimates": [
            {
              "creditAmount": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "creditDescription": "string",
              "creditType": "string"
            }
          ],
          "netCostEstimate": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "preCreditCostEstimate": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "workloadCostEstimates": [
          {
            "name": "string",
            "skuCostEstimates": [
              {
                "costEstimate": {
                  "creditEstimates": [
                    {
                      "creditAmount": {
                        "currencyCode": "string",
                        "nanos": 0,
                        "units": "string"
                      },
                      "creditDescription": "string",
                      "creditType": "string"
                    }
                  ],
                  "netCostEstimate": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "preCreditCostEstimate": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  }
                },
                "sku": "string",
                "usageAmount": 0,
                "usageUnit": "string"
              }
            ],
            "workloadTotalCostEstimate": {
              "creditEstimates": [
                {
                  "creditAmount": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "creditDescription": "string",
                  "creditType": "string"
                }
              ],
              "netCostEstimate": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "preCreditCostEstimate": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              }
            }
          }
        ]
      }
    ],
    "skus": [
      {
        "displayName": "string",
        "prices": [
          {
            "effectiveTime": {
              "estimationTimeFrameOffset": "string"
            },
            "priceType": "string",
            "rate": {
              "tiers": [
                {
                  "price": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "startAmount": 0
                }
              ],
              "unit": "string",
              "unitCount": 0
            }
          }
        ],
        "sku": "string"
      }
    ]
  }
}
```

Response for EstimateCostScenarioWithListPrice

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|costEstimationResult|[CostEstimationResult](#schemacostestimationresult)|false|none|The result of the cost estimation.|

<h2 id="tocS_EstimationTimePoint">EstimationTimePoint</h2>
<!-- backwards compatibility -->
<a id="schemaestimationtimepoint"></a>
<a id="schema_EstimationTimePoint"></a>
<a id="tocSestimationtimepoint"></a>
<a id="tocsestimationtimepoint"></a>

```json
{
  "estimationTimeFrameOffset": "string"
}
```

Represents a point in time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|estimationTimeFrameOffset|string(google-duration)|false|none|The point in time, relative to the start of the time frame covered by the cost estimate.|

<h2 id="tocS_GuestAccelerator">GuestAccelerator</h2>
<!-- backwards compatibility -->
<a id="schemaguestaccelerator"></a>
<a id="schema_GuestAccelerator"></a>
<a id="tocSguestaccelerator"></a>
<a id="tocsguestaccelerator"></a>

```json
{
  "acceleratorCount": "string",
  "acceleratorType": "string"
}
```

Specification of a set of guest accelerators attached to a machine.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceleratorCount|string(int64)|false|none|The number of the guest accelerator cards exposed to each instance.|
|acceleratorType|string|false|none|The type of the guest accelerator cards. For example: "nvidia-tesla-t4".|

<h2 id="tocS_InterRegionEgress">InterRegionEgress</h2>
<!-- backwards compatibility -->
<a id="schemainterregionegress"></a>
<a id="schema_InterRegionEgress"></a>
<a id="tocSinterregionegress"></a>
<a id="tocsinterregionegress"></a>

```json
{
  "destinationRegion": "string",
  "egressRate": {
    "usageRateTimeline": {
      "unit": "string",
      "usageRateTimelineEntries": [
        {
          "effectiveTime": {
            "estimationTimeFrameOffset": "string"
          },
          "usageRate": 0
        }
      ]
    }
  },
  "sourceRegion": "string"
}
```

Egress traffic between two regions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationRegion|string|false|none|Which [region](https://cloud.google.com/compute/docs/regions-zones) the egress data goes to.|
|egressRate|[Usage](#schemausage)|false|none|VM to VM egress usage. Expected units such as "GiBy/s, By/s, etc."|
|sourceRegion|string|false|none|Which [region](https://cloud.google.com/compute/docs/regions-zones) the egress data comes from.|

<h2 id="tocS_IntraRegionEgress">IntraRegionEgress</h2>
<!-- backwards compatibility -->
<a id="schemaintraregionegress"></a>
<a id="schema_IntraRegionEgress"></a>
<a id="tocSintraregionegress"></a>
<a id="tocsintraregionegress"></a>

```json
{
  "egressRate": {
    "usageRateTimeline": {
      "unit": "string",
      "usageRateTimelineEntries": [
        {
          "effectiveTime": {
            "estimationTimeFrameOffset": "string"
          },
          "usageRate": 0
        }
      ]
    }
  }
}
```

Egress traffic within the same region. When source region and destination region are in the same zone, using the internal IP addresses, there isn't any egress charge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|egressRate|[Usage](#schemausage)|false|none|VM to VM egress usage. Expected units such as "GiBy/s, By/s, etc."|

<h2 id="tocS_MachineType">MachineType</h2>
<!-- backwards compatibility -->
<a id="schemamachinetype"></a>
<a id="schema_MachineType"></a>
<a id="tocSmachinetype"></a>
<a id="tocsmachinetype"></a>

```json
{
  "customMachineType": {
    "machineSeries": "string",
    "memorySizeGb": 0,
    "virtualCpuCount": "string"
  },
  "predefinedMachineType": {
    "machineType": "string"
  }
}
```

Specification of machine series, memory, and number of vCPUs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customMachineType|[CustomMachineType](#schemacustommachinetype)|false|none|Specification of a custom machine type.|
|predefinedMachineType|[PredefinedMachineType](#schemapredefinedmachinetype)|false|none|Specification of a predefined machine type.|

<h2 id="tocS_Money">Money</h2>
<!-- backwards compatibility -->
<a id="schemamoney"></a>
<a id="schema_Money"></a>
<a id="tocSmoney"></a>
<a id="tocsmoney"></a>

```json
{
  "currencyCode": "string",
  "nanos": 0,
  "units": "string"
}
```

Represents an amount of money with its currency type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|false|none|The three-letter currency code defined in ISO 4217.|
|nanos|integer(int32)|false|none|Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.|
|units|string(int64)|false|none|The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.|

<h2 id="tocS_MultiRegional">MultiRegional</h2>
<!-- backwards compatibility -->
<a id="schemamultiregional"></a>
<a id="schema_MultiRegional"></a>
<a id="tocSmultiregional"></a>
<a id="tocsmultiregional"></a>

```json
{
  "name": "string"
}
```

Area contains multiple locations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The [location name](https://cloud.google.com/storage/docs/locations#available-locations) where the data is stored. For example: "us" for multi-region.|

<h2 id="tocS_PersistentDisk">PersistentDisk</h2>
<!-- backwards compatibility -->
<a id="schemapersistentdisk"></a>
<a id="schema_PersistentDisk"></a>
<a id="tocSpersistentdisk"></a>
<a id="tocspersistentdisk"></a>

```json
{
  "diskSize": {
    "usageRateTimeline": {
      "unit": "string",
      "usageRateTimelineEntries": [
        {
          "effectiveTime": {
            "estimationTimeFrameOffset": "string"
          },
          "usageRate": 0
        }
      ]
    }
  },
  "diskType": "string",
  "provisionedIops": {
    "usageRateTimeline": {
      "unit": "string",
      "usageRateTimelineEntries": [
        {
          "effectiveTime": {
            "estimationTimeFrameOffset": "string"
          },
          "usageRate": 0
        }
      ]
    }
  },
  "scope": "SCOPE_UNSPECIFIED"
}
```

Specification of a persistent disk attached to a VM.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diskSize|[Usage](#schemausage)|false|none|Specifies the size of disk. Must be at least 10 GB.|
|diskType|string|false|none|The [disk type](https://cloud.google.com/compute/docs/disks#disk-types). For example: "pd-standard".|
|provisionedIops|[Usage](#schemausage)|false|none|Indicates how many IOPS to provision for the disk for extreme persistent disks. This sets the number of I/O operations per second that the disk can handle. Values must be between 10,000 and 120,000.|
|scope|string|false|none|The geographic scope of the disk. Defaults to `SCOPE_ZONAL` if not specified.|

#### Enumerated Values

|Property|Value|
|---|---|
|scope|SCOPE_UNSPECIFIED|
|scope|SCOPE_ZONAL|
|scope|SCOPE_REGIONAL|

<h2 id="tocS_PredefinedMachineType">PredefinedMachineType</h2>
<!-- backwards compatibility -->
<a id="schemapredefinedmachinetype"></a>
<a id="schema_PredefinedMachineType"></a>
<a id="tocSpredefinedmachinetype"></a>
<a id="tocspredefinedmachinetype"></a>

```json
{
  "machineType": "string"
}
```

Specification of a predefined machine type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|machineType|string|false|none|The [machine type](https://cloud.google.com/compute/docs/machine-types). For example: "n1-standard1".|

<h2 id="tocS_PremiumTierEgressWorkload">PremiumTierEgressWorkload</h2>
<!-- backwards compatibility -->
<a id="schemapremiumtieregressworkload"></a>
<a id="schema_PremiumTierEgressWorkload"></a>
<a id="tocSpremiumtieregressworkload"></a>
<a id="tocspremiumtieregressworkload"></a>

```json
{
  "destinationContinent": "DESTINATION_CONTINENT_UNSPECIFIED",
  "egressRate": {
    "usageRateTimeline": {
      "unit": "string",
      "usageRateTimelineEntries": [
        {
          "effectiveTime": {
            "estimationTimeFrameOffset": "string"
          },
          "usageRate": 0
        }
      ]
    }
  },
  "sourceRegion": "string"
}
```

Specify Premium Tier Internet egress networking.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationContinent|string|false|none|Where the data is sent to.|
|egressRate|[Usage](#schemausage)|false|none|Premium Tier egress usage. Expected units such as "GiBy/s, By/s, etc."|
|sourceRegion|string|false|none|Which [region](https://cloud.google.com/compute/docs/regions-zones) the egress data comes from.|

#### Enumerated Values

|Property|Value|
|---|---|
|destinationContinent|DESTINATION_CONTINENT_UNSPECIFIED|
|destinationContinent|DESTINATION_CONTINENT_ASIA_PACIFIC|
|destinationContinent|DESTINATION_CONTINENT_AFRICA|
|destinationContinent|DESTINATION_CONTINENT_NORTH_AMERICA|
|destinationContinent|DESTINATION_CONTINENT_AUTRALIA|
|destinationContinent|DESTINATION_CONTINENT_CENTRAL_AMERICA|
|destinationContinent|DESTINATION_CONTINENT_CHINA|
|destinationContinent|DESTINATION_CONTINENT_EASTERN_EUROPE|
|destinationContinent|DESTINATION_CONTINENT_WESTERN_EUROPE|
|destinationContinent|DESTINATION_CONTINENT_EMEA|
|destinationContinent|DESTINATION_CONTINENT_INDIA|
|destinationContinent|DESTINATION_CONTINENT_MIDDLE_EAST|
|destinationContinent|DESTINATION_CONTINENT_SOUTH_AMERICA|

<h2 id="tocS_Price">Price</h2>
<!-- backwards compatibility -->
<a id="schemaprice"></a>
<a id="schema_Price"></a>
<a id="tocSprice"></a>
<a id="tocsprice"></a>

```json
{
  "effectiveTime": {
    "estimationTimeFrameOffset": "string"
  },
  "priceType": "string",
  "rate": {
    "tiers": [
      {
        "price": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "startAmount": 0
      }
    ],
    "unit": "string",
    "unitCount": 0
  }
}
```

The price of a SKU at a point int time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|effectiveTime|[EstimationTimePoint](#schemaestimationtimepoint)|false|none|The timestamp within the estimation time frame when the price was set.|
|priceType|string|false|none|The type of price. Possible values: "RATE"|
|rate|[Rate](#schemarate)|false|none|A set of tiered rates.|

<h2 id="tocS_Rate">Rate</h2>
<!-- backwards compatibility -->
<a id="schemarate"></a>
<a id="schema_Rate"></a>
<a id="tocSrate"></a>
<a id="tocsrate"></a>

```json
{
  "tiers": [
    {
      "price": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "startAmount": 0
    }
  ],
  "unit": "string",
  "unitCount": 0
}
```

A SKU price consisting of tiered rates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tiers|[[RateTier](#schemaratetier)]|false|none|The service tiers.|
|unit|string|false|none|The SKU's pricing unit. For example, if the tier price is $1 per 1000000 Bytes, then this field will show 'By'. The `start_amount` field in each tier will be in this unit.|
|unitCount|number(double)|false|none|The SKU's count for the pricing unit. For example, if the tier price is $1 per 1000000 Bytes, then this column will show 1000000.|

<h2 id="tocS_RateTier">RateTier</h2>
<!-- backwards compatibility -->
<a id="schemaratetier"></a>
<a id="schema_RateTier"></a>
<a id="tocSratetier"></a>
<a id="tocsratetier"></a>

```json
{
  "price": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "startAmount": 0
}
```

Pricing details for a service tier.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|price|[Money](#schemamoney)|false|none|The price for this tier.|
|startAmount|number(double)|false|none|The magnitude of usage in which the tier interval begins. Example: "From 100 GiBi the price is $1 per byte" implies `start_amount` = 100|

<h2 id="tocS_Regional">Regional</h2>
<!-- backwards compatibility -->
<a id="schemaregional"></a>
<a id="schema_Regional"></a>
<a id="tocSregional"></a>
<a id="tocsregional"></a>

```json
{
  "name": "string"
}
```

Area contains only one location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The [location name](https://cloud.google.com/storage/docs/locations#available-locations). For example: "us-central1" for region.|

<h2 id="tocS_ScenarioConfig">ScenarioConfig</h2>
<!-- backwards compatibility -->
<a id="schemascenarioconfig"></a>
<a id="schema_ScenarioConfig"></a>
<a id="tocSscenarioconfig"></a>
<a id="tocsscenarioconfig"></a>

```json
{
  "estimateDuration": "string"
}
```

Configuration for a CostScenario. Specifies how costs are calculated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|estimateDuration|string(google-duration)|false|none|Time frame for the estimate. Workloads must specify usage for this duration. Duration must be at least 1 hour (3,600 seconds) and at most 10 years (315,360,000 seconds). The calculations for years and months are based on a 730-hour (2,628,000-second) month. For durations longer than one month (2,628,000 seconds), the duration is rounded up to the next month, so the estimate shows you the costs for full months. For example, a duration of 3,232,800 seconds (roughly 5 weeks) is rounded up to 2 months.|

<h2 id="tocS_SegmentCostEstimate">SegmentCostEstimate</h2>
<!-- backwards compatibility -->
<a id="schemasegmentcostestimate"></a>
<a id="schema_SegmentCostEstimate"></a>
<a id="tocSsegmentcostestimate"></a>
<a id="tocssegmentcostestimate"></a>

```json
{
  "commitmentCostEstimates": [
    {
      "commitmentTotalCostEstimate": {
        "creditEstimates": [
          {
            "creditAmount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "creditDescription": "string",
            "creditType": "string"
          }
        ],
        "netCostEstimate": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "preCreditCostEstimate": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        }
      },
      "name": "string",
      "skuCostEstimates": [
        {
          "costEstimate": {
            "creditEstimates": [
              {
                "creditAmount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "creditDescription": "string",
                "creditType": "string"
              }
            ],
            "netCostEstimate": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "preCreditCostEstimate": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            }
          },
          "sku": "string",
          "usageAmount": 0,
          "usageUnit": "string"
        }
      ]
    }
  ],
  "segmentStartTime": {
    "estimationTimeFrameOffset": "string"
  },
  "segmentTotalCostEstimate": {
    "creditEstimates": [
      {
        "creditAmount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "creditDescription": "string",
        "creditType": "string"
      }
    ],
    "netCostEstimate": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "preCreditCostEstimate": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    }
  },
  "workloadCostEstimates": [
    {
      "name": "string",
      "skuCostEstimates": [
        {
          "costEstimate": {
            "creditEstimates": [
              {
                "creditAmount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "creditDescription": "string",
                "creditType": "string"
              }
            ],
            "netCostEstimate": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "preCreditCostEstimate": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            }
          },
          "sku": "string",
          "usageAmount": 0,
          "usageUnit": "string"
        }
      ],
      "workloadTotalCostEstimate": {
        "creditEstimates": [
          {
            "creditAmount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "creditDescription": "string",
            "creditType": "string"
          }
        ],
        "netCostEstimate": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "preCreditCostEstimate": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        }
      }
    }
  ]
}
```

Workload cost estimates for a single time segment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitmentCostEstimates|[[CommitmentCostEstimate](#schemacommitmentcostestimate)]|false|none|Estimated costs for each commitment.|
|segmentStartTime|[EstimationTimePoint](#schemaestimationtimepoint)|false|none|Timestamp for the start of the segment.|
|segmentTotalCostEstimate|[CostEstimate](#schemacostestimate)|false|none|Total estimated costs for the time segment.|
|workloadCostEstimates|[[WorkloadCostEstimate](#schemaworkloadcostestimate)]|false|none|Estimated costs for each workload.|

<h2 id="tocS_Sku">Sku</h2>
<!-- backwards compatibility -->
<a id="schemasku"></a>
<a id="schema_Sku"></a>
<a id="tocSsku"></a>
<a id="tocssku"></a>

```json
{
  "displayName": "string",
  "prices": [
    {
      "effectiveTime": {
        "estimationTimeFrameOffset": "string"
      },
      "priceType": "string",
      "rate": {
        "tiers": [
          {
            "price": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "startAmount": 0
          }
        ],
        "unit": "string",
        "unitCount": 0
      }
    }
  ],
  "sku": "string"
}
```

Information about SKUs appearing in the cost estimate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The display name for the SKU. Example: A2 Instance Core running in Americas|
|prices|[[Price](#schemaprice)]|false|none|A timeline of prices for a SKU in chronological order. Note: The API currently only supports using a constant price for the entire estimation time frame so this list will contain a single value.|
|sku|string|false|none|The resource name for the SKU. Example: "services/DA34-426B-A397/skus/AA95-CD31-42FE"|

<h2 id="tocS_SkuCostEstimate">SkuCostEstimate</h2>
<!-- backwards compatibility -->
<a id="schemaskucostestimate"></a>
<a id="schema_SkuCostEstimate"></a>
<a id="tocSskucostestimate"></a>
<a id="tocsskucostestimate"></a>

```json
{
  "costEstimate": {
    "creditEstimates": [
      {
        "creditAmount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "creditDescription": "string",
        "creditType": "string"
      }
    ],
    "netCostEstimate": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "preCreditCostEstimate": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    }
  },
  "sku": "string",
  "usageAmount": 0,
  "usageUnit": "string"
}
```

Estimated cost for usage on a SKU.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|costEstimate|[CostEstimate](#schemacostestimate)|false|none|The estimated cost for the usage on this SKU.|
|sku|string|false|none|The resource name for the SKU. Example: "services/DA34-426B-A397/skus/AA95-CD31-42FE" More information about the SKU can be found in the `skus` field of the `CostEstimationResult`.|
|usageAmount|number(double)|false|none|The amount of usage on this SKU.|
|usageUnit|string|false|none|The unit for the usage on this SKU.|

<h2 id="tocS_StandardTierEgressWorkload">StandardTierEgressWorkload</h2>
<!-- backwards compatibility -->
<a id="schemastandardtieregressworkload"></a>
<a id="schema_StandardTierEgressWorkload"></a>
<a id="tocSstandardtieregressworkload"></a>
<a id="tocsstandardtieregressworkload"></a>

```json
{
  "egressRate": {
    "usageRateTimeline": {
      "unit": "string",
      "usageRateTimelineEntries": [
        {
          "effectiveTime": {
            "estimationTimeFrameOffset": "string"
          },
          "usageRate": 0
        }
      ]
    }
  },
  "sourceRegion": "string"
}
```

Specify Standard Tier Internet egress networking.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|egressRate|[Usage](#schemausage)|false|none|Standard tier egress usage. Expected units such as "GiBy/s, By/s, etc."|
|sourceRegion|string|false|none|Which [region](https://cloud.google.com/compute/docs/regions-zones) the egress data comes from.|

<h2 id="tocS_Usage">Usage</h2>
<!-- backwards compatibility -->
<a id="schemausage"></a>
<a id="schema_Usage"></a>
<a id="tocSusage"></a>
<a id="tocsusage"></a>

```json
{
  "usageRateTimeline": {
    "unit": "string",
    "usageRateTimelineEntries": [
      {
        "effectiveTime": {
          "estimationTimeFrameOffset": "string"
        },
        "usageRate": 0
      }
    ]
  }
}
```

An amount of usage over a time frame.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usageRateTimeline|[UsageRateTimeline](#schemausageratetimeline)|false|none|A timeline of usage rates over the estimate interval.|

<h2 id="tocS_UsageRateTimeline">UsageRateTimeline</h2>
<!-- backwards compatibility -->
<a id="schemausageratetimeline"></a>
<a id="schema_UsageRateTimeline"></a>
<a id="tocSusageratetimeline"></a>
<a id="tocsusageratetimeline"></a>

```json
{
  "unit": "string",
  "usageRateTimelineEntries": [
    {
      "effectiveTime": {
        "estimationTimeFrameOffset": "string"
      },
      "usageRate": 0
    }
  ]
}
```

A timeline of usage rates. Consists of a series of entries, each of which specifies a constant rate of usage during a time interval. Each entry contains an effective time. The usage rate is in effect from that time until the effective time of the subsequent entry, or, for the last entry, for the remaining portion of estimation time frame. Effective times are specified as an offset into the estimation time frame. Usage is considered to be zero until the `effective_time` of the first entry. All subsequent entries must have an effective time greater than the previous entry and less than the estimate time frame. The effective time on all entries must be an integer number of hours.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unit|string|false|none|The unit for the usage rate in each timeline entry. If you provide an incorrect unit for an instance, the correct unit is provided in the error message. The supported units are a subset of [The Unified Code for Units of Measure](https://ucum.org/ucum.html) standard: * **Time units (TIME-UNIT)** * `s` second * `min` minute * `h` hour * `d` day * `wk` week * `mo` month * `yr` year * `ms` millisecond * `us` microsecond * `ns` nanosecond * **Basic storage units (BASIC-STORAGE-UNIT)** * `bit` bit * `By` byte * **Count units (COUNT-UNIT)** * `count` count * **Prefixes (PREFIX)** * `k` kilo (10^3) * `M` mega (10^6) * `G` giga (10^9) * `T` tera (10^12) * `P` peta (10^15) * `Ki` kibi (2^10) * `Mi` mebi (2^20) * `Gi` gibi (2^30) * `Ti` tebi (2^40) * `Pi` pebi (2^50) **Grammar** The grammar also includes these connectors: * `/` division or ratio (as an infix operator). For example: `kBy/{email}` or `MiBy/10ms`. * `.` multiplication or composition (as an infix operator). For example: `GBy.d` or `k{watt}.h`. The grammar for a unit is as follows: ``` Expression = Component { "." Component } { "/" Component } ; Component = ( [ PREFIX ] UNIT \| "%" ) [ Annotation ] \| Annotation \| "1" ; UNIT = TIME-UNIT \| STORAGE-UNIT \| DATA-UNIT \| COUNT-UNIT Annotation = "{" NAME "}" ; ``` Examples: * Request per second: `1/s` or `{requests}/s` * GibiBytes: `GiBy` * GibiBytes * seconds: `GiBy.s`|
|usageRateTimelineEntries|[[UsageRateTimelineEntry](#schemausageratetimelineentry)]|false|none|The timeline entries. Each entry has a start time and usage rate. The start time specifies the effective time of the usage rate. The entries must be sorted by start time in an increasing order.|

<h2 id="tocS_UsageRateTimelineEntry">UsageRateTimelineEntry</h2>
<!-- backwards compatibility -->
<a id="schemausageratetimelineentry"></a>
<a id="schema_UsageRateTimelineEntry"></a>
<a id="tocSusageratetimelineentry"></a>
<a id="tocsusageratetimelineentry"></a>

```json
{
  "effectiveTime": {
    "estimationTimeFrameOffset": "string"
  },
  "usageRate": 0
}
```

A usage rate timeline entry. Each entry specifies a constant usage rate during a time interval.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|effectiveTime|[EstimationTimePoint](#schemaestimationtimepoint)|false|none|The effective time for this entry. The usage rate is in effect starting at this time until the effective time of the subsequent entry in the timeline. The last entry defines the usage rate until the end of the `Usage` time frame. Must correspond to an integer number of hours.|
|usageRate|number(double)|false|none|The usage rate.|

<h2 id="tocS_VlanAttachment">VlanAttachment</h2>
<!-- backwards compatibility -->
<a id="schemavlanattachment"></a>
<a id="schema_VlanAttachment"></a>
<a id="tocSvlanattachment"></a>
<a id="tocsvlanattachment"></a>

```json
{
  "bandwidth": "BANDWIDTH_UNSPECIFIED",
  "vlanCount": {
    "usageRateTimeline": {
      "unit": "string",
      "usageRateTimelineEntries": [
        {
          "effectiveTime": {
            "estimationTimeFrameOffset": "string"
          },
          "usageRate": 0
        }
      ]
    }
  }
}
```

VLAN attachment for cloud interconnect.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bandwidth|string|false|none|Capacities in the [pricing table](https://cloud.google.com/vpc/network-pricing#interconnect-pricing) Examples of capacity are: 50/100/200/300/400/500-Mbps, 1/2/5/10/20/50-Gbps.|
|vlanCount|[Usage](#schemausage)|false|none|VLAN usage. This is specified as a unitless quantity which indicates the number of VLAN attachment used in interconnect.|

#### Enumerated Values

|Property|Value|
|---|---|
|bandwidth|BANDWIDTH_UNSPECIFIED|
|bandwidth|BANDWIDTH_BPS_50M|
|bandwidth|BANDWIDTH_BPS_100M|
|bandwidth|BANDWIDTH_BPS_200M|
|bandwidth|BANDWIDTH_BPS_300M|
|bandwidth|BANDWIDTH_BPS_400M|
|bandwidth|BANDWIDTH_BPS_500M|
|bandwidth|BANDWIDTH_BPS_1G|
|bandwidth|BANDWIDTH_BPS_2G|
|bandwidth|BANDWIDTH_BPS_5G|
|bandwidth|BANDWIDTH_BPS_10G|
|bandwidth|BANDWIDTH_BPS_20G|
|bandwidth|BANDWIDTH_BPS_50G|

<h2 id="tocS_VmResourceBasedCud">VmResourceBasedCud</h2>
<!-- backwards compatibility -->
<a id="schemavmresourcebasedcud"></a>
<a id="schema_VmResourceBasedCud"></a>
<a id="tocSvmresourcebasedcud"></a>
<a id="tocsvmresourcebasedcud"></a>

```json
{
  "guestAccelerator": {
    "acceleratorCount": "string",
    "acceleratorType": "string"
  },
  "machineSeries": "string",
  "memorySizeGb": 0,
  "plan": "COMMITMENT_PLAN_UNSPECIFIED",
  "region": "string",
  "virtualCpuCount": "string"
}
```

Specifies a resource-based committed use discount (CUD).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guestAccelerator|[GuestAccelerator](#schemaguestaccelerator)|false|none|Guest accelerator, known as GPU.|
|machineSeries|string|false|none|The machine series for CUD. For example: "n1" for general purpose N1 machine type commitments. "n2" for general purpose N2 machine type commitments. "e2" for general purpose E2 machine type commitments. "n2d" for general purpose N2D machine type commitments. "t2d" for general purpose T2D machine type commitments. "c2"/"c2d" for compute-optimized commitments. "m1"/"m2" for the memory-optimized commitments. "a2' for the accelerator-optimized commitments.|
|memorySizeGb|number(double)|false|none|Memory size of the VM in GB (2^30 bytes). Must be an increment of 0.25 (256 MB).|
|plan|string|false|none|Commitment usage plan.|
|region|string|false|none|The region where the VM runs. For example: "us-central1"|
|virtualCpuCount|string(int64)|false|none|The number of vCPUs. The number of vCPUs must be an integer of 0 or more and can be even or odd.|

#### Enumerated Values

|Property|Value|
|---|---|
|plan|COMMITMENT_PLAN_UNSPECIFIED|
|plan|TWELVE_MONTH|
|plan|THIRTY_SIX_MONTH|

<h2 id="tocS_VmToVmEgressWorkload">VmToVmEgressWorkload</h2>
<!-- backwards compatibility -->
<a id="schemavmtovmegressworkload"></a>
<a id="schema_VmToVmEgressWorkload"></a>
<a id="tocSvmtovmegressworkload"></a>
<a id="tocsvmtovmegressworkload"></a>

```json
{
  "interRegionEgress": {
    "destinationRegion": "string",
    "egressRate": {
      "usageRateTimeline": {
        "unit": "string",
        "usageRateTimelineEntries": [
          {
            "effectiveTime": {
              "estimationTimeFrameOffset": "string"
            },
            "usageRate": 0
          }
        ]
      }
    },
    "sourceRegion": "string"
  },
  "intraRegionEgress": {
    "egressRate": {
      "usageRateTimeline": {
        "unit": "string",
        "usageRateTimelineEntries": [
          {
            "effectiveTime": {
              "estimationTimeFrameOffset": "string"
            },
            "usageRate": 0
          }
        ]
      }
    }
  }
}
```

Specify VM to VM egress.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interRegionEgress|[InterRegionEgress](#schemainterregionegress)|false|none|Egress traffic between two regions.|
|intraRegionEgress|[IntraRegionEgress](#schemaintraregionegress)|false|none|Egress traffic within the same region. When source region and destination region are in the same zone, using the internal IP addresses, there isn't any egress charge.|

<h2 id="tocS_Workload">Workload</h2>
<!-- backwards compatibility -->
<a id="schemaworkload"></a>
<a id="schema_Workload"></a>
<a id="tocSworkload"></a>
<a id="tocsworkload"></a>

```json
{
  "cloudCdnEgressWorkload": {
    "cacheEgressDestination": "CACHE_EGRESS_DESTINATION_UNSPECIFIED",
    "cacheEgressRate": {
      "usageRateTimeline": {
        "unit": "string",
        "usageRateTimelineEntries": [
          {
            "effectiveTime": {
              "estimationTimeFrameOffset": "string"
            },
            "usageRate": 0
          }
        ]
      }
    }
  },
  "cloudCdnWorkload": {
    "cacheFillOriginService": "CACHE_FILL_ORIGIN_SERVICE_UNSPECIFIED",
    "cacheFillRate": {
      "usageRateTimeline": {
        "unit": "string",
        "usageRateTimelineEntries": [
          {
            "effectiveTime": {
              "estimationTimeFrameOffset": "string"
            },
            "usageRate": 0
          }
        ]
      }
    },
    "cacheFillRegions": {
      "destinationRegion": "CACHE_FILL_DESTINATION_REGION_UNSPECIFIED",
      "sourceRegion": "CACHE_FILL_SOURCE_REGION_UNSPECIFIED"
    },
    "cacheLookUpRate": {
      "usageRateTimeline": {
        "unit": "string",
        "usageRateTimelineEntries": [
          {
            "effectiveTime": {
              "estimationTimeFrameOffset": "string"
            },
            "usageRate": 0
          }
        ]
      }
    }
  },
  "cloudInterconnectEgressWorkload": {
    "egressRate": {
      "usageRateTimeline": {
        "unit": "string",
        "usageRateTimelineEntries": [
          {
            "effectiveTime": {
              "estimationTimeFrameOffset": "string"
            },
            "usageRate": 0
          }
        ]
      }
    },
    "interconnectConnectionLocation": "INTERCONNECT_CONNECTION_LOCATION_UNSPECIFIED"
  },
  "cloudInterconnectWorkload": {
    "interconnectAttachments": [
      {
        "bandwidth": "BANDWIDTH_UNSPECIFIED",
        "vlanCount": {
          "usageRateTimeline": {
            "unit": "string",
            "usageRateTimelineEntries": [
              {
                "effectiveTime": {
                  "estimationTimeFrameOffset": "string"
                },
                "usageRate": 0
              }
            ]
          }
        }
      }
    ],
    "interconnectType": "INTERCONNECT_TYPE_UNSPECIFIED",
    "linkType": "LINK_TYPE_UNSPECIFIED",
    "provisionedLinkCount": {
      "usageRateTimeline": {
        "unit": "string",
        "usageRateTimelineEntries": [
          {
            "effectiveTime": {
              "estimationTimeFrameOffset": "string"
            },
            "usageRate": 0
          }
        ]
      }
    }
  },
  "cloudStorageEgressWorkload": {
    "destinationContinent": "DESTINATION_CONTINENT_UNSPECIFIED",
    "egressRate": {
      "usageRateTimeline": {
        "unit": "string",
        "usageRateTimelineEntries": [
          {
            "effectiveTime": {
              "estimationTimeFrameOffset": "string"
            },
            "usageRate": 0
          }
        ]
      }
    },
    "sourceContinent": "SOURCE_CONTINENT_UNSPECIFIED"
  },
  "cloudStorageWorkload": {
    "dataRetrieval": {
      "usageRateTimeline": {
        "unit": "string",
        "usageRateTimelineEntries": [
          {
            "effectiveTime": {
              "estimationTimeFrameOffset": "string"
            },
            "usageRate": 0
          }
        ]
      }
    },
    "dataStored": {
      "usageRateTimeline": {
        "unit": "string",
        "usageRateTimelineEntries": [
          {
            "effectiveTime": {
              "estimationTimeFrameOffset": "string"
            },
            "usageRate": 0
          }
        ]
      }
    },
    "dualRegion": {
      "name": "string"
    },
    "multiRegion": {
      "name": "string"
    },
    "operationA": {
      "usageRateTimeline": {
        "unit": "string",
        "usageRateTimelineEntries": [
          {
            "effectiveTime": {
              "estimationTimeFrameOffset": "string"
            },
            "usageRate": 0
          }
        ]
      }
    },
    "operationB": {
      "usageRateTimeline": {
        "unit": "string",
        "usageRateTimelineEntries": [
          {
            "effectiveTime": {
              "estimationTimeFrameOffset": "string"
            },
            "usageRate": 0
          }
        ]
      }
    },
    "region": {
      "name": "string"
    },
    "storageClass": "string"
  },
  "computeVmWorkload": {
    "enableConfidentialCompute": true,
    "guestAccelerator": {
      "acceleratorCount": "string",
      "acceleratorType": "string"
    },
    "instancesRunning": {
      "usageRateTimeline": {
        "unit": "string",
        "usageRateTimelineEntries": [
          {
            "effectiveTime": {
              "estimationTimeFrameOffset": "string"
            },
            "usageRate": 0
          }
        ]
      }
    },
    "licenses": [
      "string"
    ],
    "machineType": {
      "customMachineType": {
        "machineSeries": "string",
        "memorySizeGb": 0,
        "virtualCpuCount": "string"
      },
      "predefinedMachineType": {
        "machineType": "string"
      }
    },
    "persistentDisks": [
      {
        "diskSize": {
          "usageRateTimeline": {
            "unit": "string",
            "usageRateTimelineEntries": [
              {
                "effectiveTime": {
                  "estimationTimeFrameOffset": "string"
                },
                "usageRate": 0
              }
            ]
          }
        },
        "diskType": "string",
        "provisionedIops": {
          "usageRateTimeline": {
            "unit": "string",
            "usageRateTimelineEntries": [
              {
                "effectiveTime": {
                  "estimationTimeFrameOffset": "string"
                },
                "usageRate": 0
              }
            ]
          }
        },
        "scope": "SCOPE_UNSPECIFIED"
      }
    ],
    "preemptible": true,
    "region": "string"
  },
  "name": "string",
  "premiumTierEgressWorkload": {
    "destinationContinent": "DESTINATION_CONTINENT_UNSPECIFIED",
    "egressRate": {
      "usageRateTimeline": {
        "unit": "string",
        "usageRateTimelineEntries": [
          {
            "effectiveTime": {
              "estimationTimeFrameOffset": "string"
            },
            "usageRate": 0
          }
        ]
      }
    },
    "sourceRegion": "string"
  },
  "standardTierEgressWorkload": {
    "egressRate": {
      "usageRateTimeline": {
        "unit": "string",
        "usageRateTimelineEntries": [
          {
            "effectiveTime": {
              "estimationTimeFrameOffset": "string"
            },
            "usageRate": 0
          }
        ]
      }
    },
    "sourceRegion": "string"
  },
  "vmToVmEgressWorkload": {
    "interRegionEgress": {
      "destinationRegion": "string",
      "egressRate": {
        "usageRateTimeline": {
          "unit": "string",
          "usageRateTimelineEntries": [
            {
              "effectiveTime": {
                "estimationTimeFrameOffset": "string"
              },
              "usageRate": 0
            }
          ]
        }
      },
      "sourceRegion": "string"
    },
    "intraRegionEgress": {
      "egressRate": {
        "usageRateTimeline": {
          "unit": "string",
          "usageRateTimelineEntries": [
            {
              "effectiveTime": {
                "estimationTimeFrameOffset": "string"
              },
              "usageRate": 0
            }
          ]
        }
      }
    }
  }
}
```

Specifies usage on a single Google Cloud product over a time frame. Each Google Cloud product has its own message, containing specific product configuration parameters of the product usage amounts along each dimension in which the product is billed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudCdnEgressWorkload|[CloudCdnEgressWorkload](#schemacloudcdnegressworkload)|false|none|Usage on Google Cloud CDN Egress.|
|cloudCdnWorkload|[CloudCdnWorkload](#schemacloudcdnworkload)|false|none|Usage on Google Cloud CDN.|
|cloudInterconnectEgressWorkload|[CloudInterconnectEgressWorkload](#schemacloudinterconnectegressworkload)|false|none|Usage on Google Cloud Interconnect Egress.|
|cloudInterconnectWorkload|[CloudInterconnectWorkload](#schemacloudinterconnectworkload)|false|none|Usage on Google Cloud Interconnect.|
|cloudStorageEgressWorkload|[CloudStorageEgressWorkload](#schemacloudstorageegressworkload)|false|none|Usage on a cloud storage egress.|
|cloudStorageWorkload|[CloudStorageWorkload](#schemacloudstorageworkload)|false|none|Usage on Google Cloud Storage.|
|computeVmWorkload|[ComputeVmWorkload](#schemacomputevmworkload)|false|none|Usage of a Google Compute Engine Virtual Machine.|
|name|string|false|none|Required. A name for this workload. All workloads in a `CostScenario` must have a unique `name`. Each `name` may be at most 128 characters long.|
|premiumTierEgressWorkload|[PremiumTierEgressWorkload](#schemapremiumtieregressworkload)|false|none|Usage on Premium Tier Internet Egress.|
|standardTierEgressWorkload|[StandardTierEgressWorkload](#schemastandardtieregressworkload)|false|none|Usage on Standard Tier Internet Egress.|
|vmToVmEgressWorkload|[VmToVmEgressWorkload](#schemavmtovmegressworkload)|false|none|Usage on Vm to Vm Egress.|

<h2 id="tocS_WorkloadCostEstimate">WorkloadCostEstimate</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadcostestimate"></a>
<a id="schema_WorkloadCostEstimate"></a>
<a id="tocSworkloadcostestimate"></a>
<a id="tocsworkloadcostestimate"></a>

```json
{
  "name": "string",
  "skuCostEstimates": [
    {
      "costEstimate": {
        "creditEstimates": [
          {
            "creditAmount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "creditDescription": "string",
            "creditType": "string"
          }
        ],
        "netCostEstimate": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "preCreditCostEstimate": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        }
      },
      "sku": "string",
      "usageAmount": 0,
      "usageUnit": "string"
    }
  ],
  "workloadTotalCostEstimate": {
    "creditEstimates": [
      {
        "creditAmount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "creditDescription": "string",
        "creditType": "string"
      }
    ],
    "netCostEstimate": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "preCreditCostEstimate": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    }
  }
}
```

Estimated cost for a workload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the workload, as specified in the `CostScenario`.|
|skuCostEstimates|[[SkuCostEstimate](#schemaskucostestimate)]|false|none|Estimated costs for each SKU in the workload.|
|workloadTotalCostEstimate|[CostEstimate](#schemacostestimate)|false|none|Total estimated costs for the workload.|
