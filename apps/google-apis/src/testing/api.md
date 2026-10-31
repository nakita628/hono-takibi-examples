<h1 id="cloud-testing-api">Cloud Testing API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Allows developers to run automated tests for their mobile applications on Google infrastructure.

Base URLs:

* <a href="https://testing.googleapis.com/">https://testing.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/cloud-test-lab/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud-platform.read-only|View your data across Google Cloud services and see the email address of your Google Account|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud-platform.read-only|View your data across Google Cloud services and see the email address of your Google Account|

<h1 id="cloud-testing-api-applicationdetailservice">applicationDetailService</h1>

## testing.applicationDetailService.getApkDetails

<a id="opIdtesting.applicationDetailService.getApkDetails"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/applicationDetailService/getApkDetails \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "gcsPath": "string"
  }'
```

`POST /v1/applicationDetailService/getApkDetails`

Gets the details of an Android application APK.

> Body parameter

```json
{
  "gcsPath": "string"
}
```

<h3 id="testingapplicationdetailservicegetapkdetails-parameters">Parameters</h3>

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
|body|body|[FileReference](#schemafilereference)|false|none|
|» gcsPath|body|string|false|A path to a file in Google Cloud Storage. Example: gs://build-app-1414623860166/app%40debug-unaligned.apk These paths are expected to be url encoded (percent encoding)|

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
  "apkDetail": {
    "apkManifest": {
      "applicationLabel": "string",
      "intentFilters": [
        {
          "actionNames": [
            "string"
          ],
          "categoryNames": [
            "string"
          ],
          "mimeType": "string"
        }
      ],
      "maxSdkVersion": 0,
      "metadata": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "minSdkVersion": 0,
      "packageName": "string",
      "targetSdkVersion": 0,
      "usesFeature": [
        {
          "isRequired": true,
          "name": "string"
        }
      ],
      "usesPermission": [
        "string"
      ],
      "versionCode": "string",
      "versionName": "string"
    }
  }
}
```

<h3 id="testingapplicationdetailservicegetapkdetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GetApkDetailsResponse](#schemagetapkdetailsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="cloud-testing-api-projects">projects</h1>

## testing.projects.testMatrices.create

<a id="opIdtesting.projects.testMatrices.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/testMatrices \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clientInfo": {
      "clientInfoDetails": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "name": "string"
    },
    "environmentMatrix": {
      "androidDeviceList": {
        "androidDevices": [
          {
            "androidModelId": "string",
            "androidVersionId": "string",
            "locale": "string",
            "orientation": "string"
          }
        ]
      },
      "androidMatrix": {
        "androidModelIds": [
          "string"
        ],
        "androidVersionIds": [
          "string"
        ],
        "locales": [
          "string"
        ],
        "orientations": [
          "string"
        ]
      },
      "iosDeviceList": {
        "iosDevices": [
          {
            "iosModelId": "string",
            "iosVersionId": "string",
            "locale": "string",
            "orientation": "string"
          }
        ]
      }
    },
    "failFast": true,
    "flakyTestAttempts": 0,
    "invalidMatrixDetails": "INVALID_MATRIX_DETAILS_UNSPECIFIED",
    "outcomeSummary": "OUTCOME_SUMMARY_UNSPECIFIED",
    "projectId": "string",
    "resultStorage": {
      "googleCloudStorage": {
        "gcsPath": "string"
      },
      "resultsUrl": "string",
      "toolResultsExecution": {
        "executionId": "string",
        "historyId": "string",
        "projectId": "string"
      },
      "toolResultsHistory": {
        "historyId": "string",
        "projectId": "string"
      }
    },
    "state": "TEST_STATE_UNSPECIFIED",
    "testExecutions": [
      {
        "environment": {
          "androidDevice": {
            "androidModelId": "string",
            "androidVersionId": "string",
            "locale": "string",
            "orientation": "string"
          },
          "iosDevice": {
            "iosModelId": "string",
            "iosVersionId": "string",
            "locale": "string",
            "orientation": "string"
          }
        },
        "id": "string",
        "matrixId": "string",
        "projectId": "string",
        "shard": {
          "numShards": 0,
          "shardIndex": 0,
          "testTargetsForShard": {
            "testTargets": [
              "string"
            ]
          }
        },
        "state": "TEST_STATE_UNSPECIFIED",
        "testDetails": {
          "errorMessage": "string",
          "progressMessages": [
            "string"
          ]
        },
        "testSpecification": {
          "androidInstrumentationTest": {
            "appApk": {
              "gcsPath": "string"
            },
            "appBundle": {
              "bundleLocation": {
                "gcsPath": "string"
              }
            },
            "appPackageId": "string",
            "orchestratorOption": "ORCHESTRATOR_OPTION_UNSPECIFIED",
            "shardingOption": {
              "manualSharding": {
                "testTargetsForShard": [
                  {
                    "testTargets": [
                      "string"
                    ]
                  }
                ]
              },
              "uniformSharding": {
                "numShards": 0
              }
            },
            "testApk": {
              "gcsPath": "string"
            },
            "testPackageId": "string",
            "testRunnerClass": "string",
            "testTargets": [
              "string"
            ]
          },
          "androidRoboTest": {
            "appApk": {
              "gcsPath": "string"
            },
            "appBundle": {
              "bundleLocation": {
                "gcsPath": "string"
              }
            },
            "appInitialActivity": "string",
            "appPackageId": "string",
            "maxDepth": 0,
            "maxSteps": 0,
            "roboDirectives": [
              {
                "actionType": "ACTION_TYPE_UNSPECIFIED",
                "inputText": "string",
                "resourceName": "string"
              }
            ],
            "roboMode": "ROBO_MODE_UNSPECIFIED",
            "roboScript": {
              "gcsPath": "string"
            },
            "startingIntents": [
              {
                "launcherActivity": {},
                "startActivity": {
                  "action": "string",
                  "categories": [
                    "string"
                  ],
                  "uri": "string"
                },
                "timeout": "string"
              }
            ]
          },
          "androidTestLoop": {
            "appApk": {
              "gcsPath": "string"
            },
            "appBundle": {
              "bundleLocation": {
                "gcsPath": "string"
              }
            },
            "appPackageId": "string",
            "scenarioLabels": [
              "string"
            ],
            "scenarios": [
              0
            ]
          },
          "disablePerformanceMetrics": true,
          "disableVideoRecording": true,
          "iosTestLoop": {
            "appBundleId": "string",
            "appIpa": {
              "gcsPath": "string"
            },
            "scenarios": [
              0
            ]
          },
          "iosTestSetup": {
            "additionalIpas": [
              {
                "gcsPath": "string"
              }
            ],
            "networkProfile": "string",
            "pullDirectories": [
              {
                "bundleId": "string",
                "content": {
                  "gcsPath": "string"
                },
                "devicePath": "string"
              }
            ],
            "pushFiles": [
              {
                "bundleId": "string",
                "content": {
                  "gcsPath": "string"
                },
                "devicePath": "string"
              }
            ]
          },
          "iosXcTest": {
            "appBundleId": "string",
            "testSpecialEntitlements": true,
            "testsZip": {
              "gcsPath": "string"
            },
            "xcodeVersion": "string",
            "xctestrun": {
              "gcsPath": "string"
            }
          },
          "testSetup": {
            "account": {
              "googleAuto": {}
            },
            "additionalApks": [
              {
                "location": {
                  "gcsPath": "string"
                },
                "packageName": "string"
              }
            ],
            "directoriesToPull": [
              "string"
            ],
            "dontAutograntPermissions": true,
            "environmentVariables": [
              {
                "key": "string",
                "value": "string"
              }
            ],
            "filesToPush": [
              {
                "obbFile": {
                  "obb": {
                    "gcsPath": "string"
                  },
                  "obbFileName": "string"
                },
                "regularFile": {
                  "content": {
                    "gcsPath": "string"
                  },
                  "devicePath": "string"
                }
              }
            ],
            "networkProfile": "string",
            "systrace": {
              "durationSeconds": 0
            }
          },
          "testTimeout": "string"
        },
        "timestamp": "string",
        "toolResultsStep": {
          "executionId": "string",
          "historyId": "string",
          "projectId": "string",
          "stepId": "string"
        }
      }
    ],
    "testMatrixId": "string",
    "testSpecification": {
      "androidInstrumentationTest": {
        "appApk": {
          "gcsPath": "string"
        },
        "appBundle": {
          "bundleLocation": {
            "gcsPath": "string"
          }
        },
        "appPackageId": "string",
        "orchestratorOption": "ORCHESTRATOR_OPTION_UNSPECIFIED",
        "shardingOption": {
          "manualSharding": {
            "testTargetsForShard": [
              {
                "testTargets": [
                  "string"
                ]
              }
            ]
          },
          "uniformSharding": {
            "numShards": 0
          }
        },
        "testApk": {
          "gcsPath": "string"
        },
        "testPackageId": "string",
        "testRunnerClass": "string",
        "testTargets": [
          "string"
        ]
      },
      "androidRoboTest": {
        "appApk": {
          "gcsPath": "string"
        },
        "appBundle": {
          "bundleLocation": {
            "gcsPath": "string"
          }
        },
        "appInitialActivity": "string",
        "appPackageId": "string",
        "maxDepth": 0,
        "maxSteps": 0,
        "roboDirectives": [
          {
            "actionType": "ACTION_TYPE_UNSPECIFIED",
            "inputText": "string",
            "resourceName": "string"
          }
        ],
        "roboMode": "ROBO_MODE_UNSPECIFIED",
        "roboScript": {
          "gcsPath": "string"
        },
        "startingIntents": [
          {
            "launcherActivity": {},
            "startActivity": {
              "action": "string",
              "categories": [
                "string"
              ],
              "uri": "string"
            },
            "timeout": "string"
          }
        ]
      },
      "androidTestLoop": {
        "appApk": {
          "gcsPath": "string"
        },
        "appBundle": {
          "bundleLocation": {
            "gcsPath": "string"
          }
        },
        "appPackageId": "string",
        "scenarioLabels": [
          "string"
        ],
        "scenarios": [
          0
        ]
      },
      "disablePerformanceMetrics": true,
      "disableVideoRecording": true,
      "iosTestLoop": {
        "appBundleId": "string",
        "appIpa": {
          "gcsPath": "string"
        },
        "scenarios": [
          0
        ]
      },
      "iosTestSetup": {
        "additionalIpas": [
          {
            "gcsPath": "string"
          }
        ],
        "networkProfile": "string",
        "pullDirectories": [
          {
            "bundleId": "string",
            "content": {
              "gcsPath": "string"
            },
            "devicePath": "string"
          }
        ],
        "pushFiles": [
          {
            "bundleId": "string",
            "content": {
              "gcsPath": "string"
            },
            "devicePath": "string"
          }
        ]
      },
      "iosXcTest": {
        "appBundleId": "string",
        "testSpecialEntitlements": true,
        "testsZip": {
          "gcsPath": "string"
        },
        "xcodeVersion": "string",
        "xctestrun": {
          "gcsPath": "string"
        }
      },
      "testSetup": {
        "account": {
          "googleAuto": {}
        },
        "additionalApks": [
          {
            "location": {
              "gcsPath": "string"
            },
            "packageName": "string"
          }
        ],
        "directoriesToPull": [
          "string"
        ],
        "dontAutograntPermissions": true,
        "environmentVariables": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "filesToPush": [
          {
            "obbFile": {
              "obb": {
                "gcsPath": "string"
              },
              "obbFileName": "string"
            },
            "regularFile": {
              "content": {
                "gcsPath": "string"
              },
              "devicePath": "string"
            }
          }
        ],
        "networkProfile": "string",
        "systrace": {
          "durationSeconds": 0
        }
      },
      "testTimeout": "string"
    },
    "timestamp": "string"
  }'
```

`POST /v1/projects/{projectId}/testMatrices`

Creates and runs a matrix of tests according to the given specifications. Unsupported environments will be returned in the state UNSUPPORTED. A test matrix is limited to use at most 2000 devices in parallel. The returned matrix will not yet contain the executions that will be created for this matrix. That happens later on and will require a call to GetTestMatrix. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed or if the matrix tries to use too many simultaneous devices.

> Body parameter

```json
{
  "clientInfo": {
    "clientInfoDetails": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "name": "string"
  },
  "environmentMatrix": {
    "androidDeviceList": {
      "androidDevices": [
        {
          "androidModelId": "string",
          "androidVersionId": "string",
          "locale": "string",
          "orientation": "string"
        }
      ]
    },
    "androidMatrix": {
      "androidModelIds": [
        "string"
      ],
      "androidVersionIds": [
        "string"
      ],
      "locales": [
        "string"
      ],
      "orientations": [
        "string"
      ]
    },
    "iosDeviceList": {
      "iosDevices": [
        {
          "iosModelId": "string",
          "iosVersionId": "string",
          "locale": "string",
          "orientation": "string"
        }
      ]
    }
  },
  "failFast": true,
  "flakyTestAttempts": 0,
  "invalidMatrixDetails": "INVALID_MATRIX_DETAILS_UNSPECIFIED",
  "outcomeSummary": "OUTCOME_SUMMARY_UNSPECIFIED",
  "projectId": "string",
  "resultStorage": {
    "googleCloudStorage": {
      "gcsPath": "string"
    },
    "resultsUrl": "string",
    "toolResultsExecution": {
      "executionId": "string",
      "historyId": "string",
      "projectId": "string"
    },
    "toolResultsHistory": {
      "historyId": "string",
      "projectId": "string"
    }
  },
  "state": "TEST_STATE_UNSPECIFIED",
  "testExecutions": [
    {
      "environment": {
        "androidDevice": {
          "androidModelId": "string",
          "androidVersionId": "string",
          "locale": "string",
          "orientation": "string"
        },
        "iosDevice": {
          "iosModelId": "string",
          "iosVersionId": "string",
          "locale": "string",
          "orientation": "string"
        }
      },
      "id": "string",
      "matrixId": "string",
      "projectId": "string",
      "shard": {
        "numShards": 0,
        "shardIndex": 0,
        "testTargetsForShard": {
          "testTargets": [
            "string"
          ]
        }
      },
      "state": "TEST_STATE_UNSPECIFIED",
      "testDetails": {
        "errorMessage": "string",
        "progressMessages": [
          "string"
        ]
      },
      "testSpecification": {
        "androidInstrumentationTest": {
          "appApk": {
            "gcsPath": "string"
          },
          "appBundle": {
            "bundleLocation": {
              "gcsPath": "string"
            }
          },
          "appPackageId": "string",
          "orchestratorOption": "ORCHESTRATOR_OPTION_UNSPECIFIED",
          "shardingOption": {
            "manualSharding": {
              "testTargetsForShard": [
                {
                  "testTargets": [
                    "string"
                  ]
                }
              ]
            },
            "uniformSharding": {
              "numShards": 0
            }
          },
          "testApk": {
            "gcsPath": "string"
          },
          "testPackageId": "string",
          "testRunnerClass": "string",
          "testTargets": [
            "string"
          ]
        },
        "androidRoboTest": {
          "appApk": {
            "gcsPath": "string"
          },
          "appBundle": {
            "bundleLocation": {
              "gcsPath": "string"
            }
          },
          "appInitialActivity": "string",
          "appPackageId": "string",
          "maxDepth": 0,
          "maxSteps": 0,
          "roboDirectives": [
            {
              "actionType": "ACTION_TYPE_UNSPECIFIED",
              "inputText": "string",
              "resourceName": "string"
            }
          ],
          "roboMode": "ROBO_MODE_UNSPECIFIED",
          "roboScript": {
            "gcsPath": "string"
          },
          "startingIntents": [
            {
              "launcherActivity": {},
              "startActivity": {
                "action": "string",
                "categories": [
                  "string"
                ],
                "uri": "string"
              },
              "timeout": "string"
            }
          ]
        },
        "androidTestLoop": {
          "appApk": {
            "gcsPath": "string"
          },
          "appBundle": {
            "bundleLocation": {
              "gcsPath": "string"
            }
          },
          "appPackageId": "string",
          "scenarioLabels": [
            "string"
          ],
          "scenarios": [
            0
          ]
        },
        "disablePerformanceMetrics": true,
        "disableVideoRecording": true,
        "iosTestLoop": {
          "appBundleId": "string",
          "appIpa": {
            "gcsPath": "string"
          },
          "scenarios": [
            0
          ]
        },
        "iosTestSetup": {
          "additionalIpas": [
            {
              "gcsPath": "string"
            }
          ],
          "networkProfile": "string",
          "pullDirectories": [
            {
              "bundleId": "string",
              "content": {
                "gcsPath": "string"
              },
              "devicePath": "string"
            }
          ],
          "pushFiles": [
            {
              "bundleId": "string",
              "content": {
                "gcsPath": "string"
              },
              "devicePath": "string"
            }
          ]
        },
        "iosXcTest": {
          "appBundleId": "string",
          "testSpecialEntitlements": true,
          "testsZip": {
            "gcsPath": "string"
          },
          "xcodeVersion": "string",
          "xctestrun": {
            "gcsPath": "string"
          }
        },
        "testSetup": {
          "account": {
            "googleAuto": {}
          },
          "additionalApks": [
            {
              "location": {
                "gcsPath": "string"
              },
              "packageName": "string"
            }
          ],
          "directoriesToPull": [
            "string"
          ],
          "dontAutograntPermissions": true,
          "environmentVariables": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "filesToPush": [
            {
              "obbFile": {
                "obb": {
                  "gcsPath": "string"
                },
                "obbFileName": "string"
              },
              "regularFile": {
                "content": {
                  "gcsPath": "string"
                },
                "devicePath": "string"
              }
            }
          ],
          "networkProfile": "string",
          "systrace": {
            "durationSeconds": 0
          }
        },
        "testTimeout": "string"
      },
      "timestamp": "string",
      "toolResultsStep": {
        "executionId": "string",
        "historyId": "string",
        "projectId": "string",
        "stepId": "string"
      }
    }
  ],
  "testMatrixId": "string",
  "testSpecification": {
    "androidInstrumentationTest": {
      "appApk": {
        "gcsPath": "string"
      },
      "appBundle": {
        "bundleLocation": {
          "gcsPath": "string"
        }
      },
      "appPackageId": "string",
      "orchestratorOption": "ORCHESTRATOR_OPTION_UNSPECIFIED",
      "shardingOption": {
        "manualSharding": {
          "testTargetsForShard": [
            {
              "testTargets": [
                "string"
              ]
            }
          ]
        },
        "uniformSharding": {
          "numShards": 0
        }
      },
      "testApk": {
        "gcsPath": "string"
      },
      "testPackageId": "string",
      "testRunnerClass": "string",
      "testTargets": [
        "string"
      ]
    },
    "androidRoboTest": {
      "appApk": {
        "gcsPath": "string"
      },
      "appBundle": {
        "bundleLocation": {
          "gcsPath": "string"
        }
      },
      "appInitialActivity": "string",
      "appPackageId": "string",
      "maxDepth": 0,
      "maxSteps": 0,
      "roboDirectives": [
        {
          "actionType": "ACTION_TYPE_UNSPECIFIED",
          "inputText": "string",
          "resourceName": "string"
        }
      ],
      "roboMode": "ROBO_MODE_UNSPECIFIED",
      "roboScript": {
        "gcsPath": "string"
      },
      "startingIntents": [
        {
          "launcherActivity": {},
          "startActivity": {
            "action": "string",
            "categories": [
              "string"
            ],
            "uri": "string"
          },
          "timeout": "string"
        }
      ]
    },
    "androidTestLoop": {
      "appApk": {
        "gcsPath": "string"
      },
      "appBundle": {
        "bundleLocation": {
          "gcsPath": "string"
        }
      },
      "appPackageId": "string",
      "scenarioLabels": [
        "string"
      ],
      "scenarios": [
        0
      ]
    },
    "disablePerformanceMetrics": true,
    "disableVideoRecording": true,
    "iosTestLoop": {
      "appBundleId": "string",
      "appIpa": {
        "gcsPath": "string"
      },
      "scenarios": [
        0
      ]
    },
    "iosTestSetup": {
      "additionalIpas": [
        {
          "gcsPath": "string"
        }
      ],
      "networkProfile": "string",
      "pullDirectories": [
        {
          "bundleId": "string",
          "content": {
            "gcsPath": "string"
          },
          "devicePath": "string"
        }
      ],
      "pushFiles": [
        {
          "bundleId": "string",
          "content": {
            "gcsPath": "string"
          },
          "devicePath": "string"
        }
      ]
    },
    "iosXcTest": {
      "appBundleId": "string",
      "testSpecialEntitlements": true,
      "testsZip": {
        "gcsPath": "string"
      },
      "xcodeVersion": "string",
      "xctestrun": {
        "gcsPath": "string"
      }
    },
    "testSetup": {
      "account": {
        "googleAuto": {}
      },
      "additionalApks": [
        {
          "location": {
            "gcsPath": "string"
          },
          "packageName": "string"
        }
      ],
      "directoriesToPull": [
        "string"
      ],
      "dontAutograntPermissions": true,
      "environmentVariables": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "filesToPush": [
        {
          "obbFile": {
            "obb": {
              "gcsPath": "string"
            },
            "obbFileName": "string"
          },
          "regularFile": {
            "content": {
              "gcsPath": "string"
            },
            "devicePath": "string"
          }
        }
      ],
      "networkProfile": "string",
      "systrace": {
        "durationSeconds": 0
      }
    },
    "testTimeout": "string"
  },
  "timestamp": "string"
}
```

<h3 id="testingprojectstestmatricescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The GCE project under which this job will run.|
|requestId|query|string|false|A string id used to detect duplicated requests. Ids are automatically scoped to a project, so users should ensure the ID is unique per-project. A UUID is recommended. Optional, but strongly recommended.|
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
|body|body|[TestMatrix](#schematestmatrix)|false|none|
|» clientInfo|body|[ClientInfo](#schemaclientinfo)|false|Information about the client which invoked the test.|
|» environmentMatrix|body|[EnvironmentMatrix](#schemaenvironmentmatrix)|false|Required. The devices the tests are being executed on.|
|» failFast|body|boolean|false|If true, only a single attempt at most will be made to run each execution/shard in the matrix. Flaky test attempts are not affected. Normally, 2 or more attempts are made if a potential infrastructure issue is detected. This feature is for latency sensitive workloads. The incidence of execution failures may be significantly greater for fail-fast matrices and support is more limited because of that expectation.|
|» flakyTestAttempts|body|integer(int32)|false|The number of times a TestExecution should be re-attempted if one or more of its test cases fail for any reason. The maximum number of reruns allowed is 10. Default is 0, which implies no reruns.|
|» invalidMatrixDetails|body|string|false|Output only. Describes why the matrix is considered invalid. Only useful for matrices in the INVALID state.|
|» outcomeSummary|body|string|false|Output Only. The overall outcome of the test. Only set when the test matrix state is FINISHED.|
|» projectId|body|string|false|The cloud project that owns the test matrix.|
|» resultStorage|body|[ResultStorage](#schemaresultstorage)|false|Required. Where the results for the matrix are written.|
|» state|body|string|false|Output only. Indicates the current progress of the test matrix.|
|» testExecutions|body|[[TestExecution](#schematestexecution)]|false|Output only. The list of test executions that the service creates for this matrix.|
|» testMatrixId|body|string|false|Output only. Unique id set by the service.|
|» testSpecification|body|[TestSpecification](#schematestspecification)|false|Required. How to run the test.|
|» timestamp|body|string(google-datetime)|false|Output only. The time this test matrix was initially created.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» invalidMatrixDetails|INVALID_MATRIX_DETAILS_UNSPECIFIED|
|» invalidMatrixDetails|DETAILS_UNAVAILABLE|
|» invalidMatrixDetails|MALFORMED_APK|
|» invalidMatrixDetails|MALFORMED_TEST_APK|
|» invalidMatrixDetails|NO_MANIFEST|
|» invalidMatrixDetails|NO_PACKAGE_NAME|
|» invalidMatrixDetails|INVALID_PACKAGE_NAME|
|» invalidMatrixDetails|TEST_SAME_AS_APP|
|» invalidMatrixDetails|NO_INSTRUMENTATION|
|» invalidMatrixDetails|NO_SIGNATURE|
|» invalidMatrixDetails|INSTRUMENTATION_ORCHESTRATOR_INCOMPATIBLE|
|» invalidMatrixDetails|NO_TEST_RUNNER_CLASS|
|» invalidMatrixDetails|NO_LAUNCHER_ACTIVITY|
|» invalidMatrixDetails|FORBIDDEN_PERMISSIONS|
|» invalidMatrixDetails|INVALID_ROBO_DIRECTIVES|
|» invalidMatrixDetails|INVALID_RESOURCE_NAME|
|» invalidMatrixDetails|INVALID_DIRECTIVE_ACTION|
|» invalidMatrixDetails|TEST_LOOP_INTENT_FILTER_NOT_FOUND|
|» invalidMatrixDetails|SCENARIO_LABEL_NOT_DECLARED|
|» invalidMatrixDetails|SCENARIO_LABEL_MALFORMED|
|» invalidMatrixDetails|SCENARIO_NOT_DECLARED|
|» invalidMatrixDetails|DEVICE_ADMIN_RECEIVER|
|» invalidMatrixDetails|MALFORMED_XC_TEST_ZIP|
|» invalidMatrixDetails|BUILT_FOR_IOS_SIMULATOR|
|» invalidMatrixDetails|NO_TESTS_IN_XC_TEST_ZIP|
|» invalidMatrixDetails|USE_DESTINATION_ARTIFACTS|
|» invalidMatrixDetails|TEST_NOT_APP_HOSTED|
|» invalidMatrixDetails|PLIST_CANNOT_BE_PARSED|
|» invalidMatrixDetails|TEST_ONLY_APK|
|» invalidMatrixDetails|MALFORMED_IPA|
|» invalidMatrixDetails|MISSING_URL_SCHEME|
|» invalidMatrixDetails|MALFORMED_APP_BUNDLE|
|» invalidMatrixDetails|NO_CODE_APK|
|» invalidMatrixDetails|INVALID_INPUT_APK|
|» invalidMatrixDetails|INVALID_APK_PREVIEW_SDK|
|» invalidMatrixDetails|MATRIX_TOO_LARGE|
|» invalidMatrixDetails|TEST_QUOTA_EXCEEDED|
|» invalidMatrixDetails|SERVICE_NOT_ACTIVATED|
|» invalidMatrixDetails|UNKNOWN_PERMISSION_ERROR|
|» outcomeSummary|OUTCOME_SUMMARY_UNSPECIFIED|
|» outcomeSummary|SUCCESS|
|» outcomeSummary|FAILURE|
|» outcomeSummary|INCONCLUSIVE|
|» outcomeSummary|SKIPPED|
|» state|TEST_STATE_UNSPECIFIED|
|» state|VALIDATING|
|» state|PENDING|
|» state|RUNNING|
|» state|FINISHED|
|» state|ERROR|
|» state|UNSUPPORTED_ENVIRONMENT|
|» state|INCOMPATIBLE_ENVIRONMENT|
|» state|INCOMPATIBLE_ARCHITECTURE|
|» state|CANCELLED|
|» state|INVALID|

> Example responses

> 200 Response

```json
{
  "clientInfo": {
    "clientInfoDetails": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "name": "string"
  },
  "environmentMatrix": {
    "androidDeviceList": {
      "androidDevices": [
        {
          "androidModelId": "string",
          "androidVersionId": "string",
          "locale": "string",
          "orientation": "string"
        }
      ]
    },
    "androidMatrix": {
      "androidModelIds": [
        "string"
      ],
      "androidVersionIds": [
        "string"
      ],
      "locales": [
        "string"
      ],
      "orientations": [
        "string"
      ]
    },
    "iosDeviceList": {
      "iosDevices": [
        {
          "iosModelId": "string",
          "iosVersionId": "string",
          "locale": "string",
          "orientation": "string"
        }
      ]
    }
  },
  "failFast": true,
  "flakyTestAttempts": 0,
  "invalidMatrixDetails": "INVALID_MATRIX_DETAILS_UNSPECIFIED",
  "outcomeSummary": "OUTCOME_SUMMARY_UNSPECIFIED",
  "projectId": "string",
  "resultStorage": {
    "googleCloudStorage": {
      "gcsPath": "string"
    },
    "resultsUrl": "string",
    "toolResultsExecution": {
      "executionId": "string",
      "historyId": "string",
      "projectId": "string"
    },
    "toolResultsHistory": {
      "historyId": "string",
      "projectId": "string"
    }
  },
  "state": "TEST_STATE_UNSPECIFIED",
  "testExecutions": [
    {
      "environment": {
        "androidDevice": {
          "androidModelId": "string",
          "androidVersionId": "string",
          "locale": "string",
          "orientation": "string"
        },
        "iosDevice": {
          "iosModelId": "string",
          "iosVersionId": "string",
          "locale": "string",
          "orientation": "string"
        }
      },
      "id": "string",
      "matrixId": "string",
      "projectId": "string",
      "shard": {
        "numShards": 0,
        "shardIndex": 0,
        "testTargetsForShard": {
          "testTargets": [
            "string"
          ]
        }
      },
      "state": "TEST_STATE_UNSPECIFIED",
      "testDetails": {
        "errorMessage": "string",
        "progressMessages": [
          "string"
        ]
      },
      "testSpecification": {
        "androidInstrumentationTest": {
          "appApk": {
            "gcsPath": "string"
          },
          "appBundle": {
            "bundleLocation": {
              "gcsPath": "string"
            }
          },
          "appPackageId": "string",
          "orchestratorOption": "ORCHESTRATOR_OPTION_UNSPECIFIED",
          "shardingOption": {
            "manualSharding": {
              "testTargetsForShard": [
                {
                  "testTargets": [
                    "string"
                  ]
                }
              ]
            },
            "uniformSharding": {
              "numShards": 0
            }
          },
          "testApk": {
            "gcsPath": "string"
          },
          "testPackageId": "string",
          "testRunnerClass": "string",
          "testTargets": [
            "string"
          ]
        },
        "androidRoboTest": {
          "appApk": {
            "gcsPath": "string"
          },
          "appBundle": {
            "bundleLocation": {
              "gcsPath": "string"
            }
          },
          "appInitialActivity": "string",
          "appPackageId": "string",
          "maxDepth": 0,
          "maxSteps": 0,
          "roboDirectives": [
            {
              "actionType": "ACTION_TYPE_UNSPECIFIED",
              "inputText": "string",
              "resourceName": "string"
            }
          ],
          "roboMode": "ROBO_MODE_UNSPECIFIED",
          "roboScript": {
            "gcsPath": "string"
          },
          "startingIntents": [
            {
              "launcherActivity": {},
              "startActivity": {
                "action": "string",
                "categories": [
                  "string"
                ],
                "uri": "string"
              },
              "timeout": "string"
            }
          ]
        },
        "androidTestLoop": {
          "appApk": {
            "gcsPath": "string"
          },
          "appBundle": {
            "bundleLocation": {
              "gcsPath": "string"
            }
          },
          "appPackageId": "string",
          "scenarioLabels": [
            "string"
          ],
          "scenarios": [
            0
          ]
        },
        "disablePerformanceMetrics": true,
        "disableVideoRecording": true,
        "iosTestLoop": {
          "appBundleId": "string",
          "appIpa": {
            "gcsPath": "string"
          },
          "scenarios": [
            0
          ]
        },
        "iosTestSetup": {
          "additionalIpas": [
            {
              "gcsPath": "string"
            }
          ],
          "networkProfile": "string",
          "pullDirectories": [
            {
              "bundleId": "string",
              "content": {
                "gcsPath": "string"
              },
              "devicePath": "string"
            }
          ],
          "pushFiles": [
            {
              "bundleId": "string",
              "content": {
                "gcsPath": "string"
              },
              "devicePath": "string"
            }
          ]
        },
        "iosXcTest": {
          "appBundleId": "string",
          "testSpecialEntitlements": true,
          "testsZip": {
            "gcsPath": "string"
          },
          "xcodeVersion": "string",
          "xctestrun": {
            "gcsPath": "string"
          }
        },
        "testSetup": {
          "account": {
            "googleAuto": {}
          },
          "additionalApks": [
            {
              "location": {
                "gcsPath": "string"
              },
              "packageName": "string"
            }
          ],
          "directoriesToPull": [
            "string"
          ],
          "dontAutograntPermissions": true,
          "environmentVariables": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "filesToPush": [
            {
              "obbFile": {
                "obb": {
                  "gcsPath": "string"
                },
                "obbFileName": "string"
              },
              "regularFile": {
                "content": {
                  "gcsPath": "string"
                },
                "devicePath": "string"
              }
            }
          ],
          "networkProfile": "string",
          "systrace": {
            "durationSeconds": 0
          }
        },
        "testTimeout": "string"
      },
      "timestamp": "string",
      "toolResultsStep": {
        "executionId": "string",
        "historyId": "string",
        "projectId": "string",
        "stepId": "string"
      }
    }
  ],
  "testMatrixId": "string",
  "testSpecification": {
    "androidInstrumentationTest": {
      "appApk": {
        "gcsPath": "string"
      },
      "appBundle": {
        "bundleLocation": {
          "gcsPath": "string"
        }
      },
      "appPackageId": "string",
      "orchestratorOption": "ORCHESTRATOR_OPTION_UNSPECIFIED",
      "shardingOption": {
        "manualSharding": {
          "testTargetsForShard": [
            {
              "testTargets": [
                "string"
              ]
            }
          ]
        },
        "uniformSharding": {
          "numShards": 0
        }
      },
      "testApk": {
        "gcsPath": "string"
      },
      "testPackageId": "string",
      "testRunnerClass": "string",
      "testTargets": [
        "string"
      ]
    },
    "androidRoboTest": {
      "appApk": {
        "gcsPath": "string"
      },
      "appBundle": {
        "bundleLocation": {
          "gcsPath": "string"
        }
      },
      "appInitialActivity": "string",
      "appPackageId": "string",
      "maxDepth": 0,
      "maxSteps": 0,
      "roboDirectives": [
        {
          "actionType": "ACTION_TYPE_UNSPECIFIED",
          "inputText": "string",
          "resourceName": "string"
        }
      ],
      "roboMode": "ROBO_MODE_UNSPECIFIED",
      "roboScript": {
        "gcsPath": "string"
      },
      "startingIntents": [
        {
          "launcherActivity": {},
          "startActivity": {
            "action": "string",
            "categories": [
              "string"
            ],
            "uri": "string"
          },
          "timeout": "string"
        }
      ]
    },
    "androidTestLoop": {
      "appApk": {
        "gcsPath": "string"
      },
      "appBundle": {
        "bundleLocation": {
          "gcsPath": "string"
        }
      },
      "appPackageId": "string",
      "scenarioLabels": [
        "string"
      ],
      "scenarios": [
        0
      ]
    },
    "disablePerformanceMetrics": true,
    "disableVideoRecording": true,
    "iosTestLoop": {
      "appBundleId": "string",
      "appIpa": {
        "gcsPath": "string"
      },
      "scenarios": [
        0
      ]
    },
    "iosTestSetup": {
      "additionalIpas": [
        {
          "gcsPath": "string"
        }
      ],
      "networkProfile": "string",
      "pullDirectories": [
        {
          "bundleId": "string",
          "content": {
            "gcsPath": "string"
          },
          "devicePath": "string"
        }
      ],
      "pushFiles": [
        {
          "bundleId": "string",
          "content": {
            "gcsPath": "string"
          },
          "devicePath": "string"
        }
      ]
    },
    "iosXcTest": {
      "appBundleId": "string",
      "testSpecialEntitlements": true,
      "testsZip": {
        "gcsPath": "string"
      },
      "xcodeVersion": "string",
      "xctestrun": {
        "gcsPath": "string"
      }
    },
    "testSetup": {
      "account": {
        "googleAuto": {}
      },
      "additionalApks": [
        {
          "location": {
            "gcsPath": "string"
          },
          "packageName": "string"
        }
      ],
      "directoriesToPull": [
        "string"
      ],
      "dontAutograntPermissions": true,
      "environmentVariables": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "filesToPush": [
        {
          "obbFile": {
            "obb": {
              "gcsPath": "string"
            },
            "obbFileName": "string"
          },
          "regularFile": {
            "content": {
              "gcsPath": "string"
            },
            "devicePath": "string"
          }
        }
      ],
      "networkProfile": "string",
      "systrace": {
        "durationSeconds": 0
      }
    },
    "testTimeout": "string"
  },
  "timestamp": "string"
}
```

<h3 id="testingprojectstestmatricescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestMatrix](#schematestmatrix)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## testing.projects.testMatrices.get

<a id="opIdtesting.projects.testMatrices.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/testMatrices/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{projectId}/testMatrices/{testMatrixId}`

Checks the status of a test matrix and the executions once they are created. The test matrix will contain the list of test executions to run if and only if the resultStorage.toolResultsExecution fields have been populated. Note: Flaky test executions may still be added to the matrix at a later stage. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist

<h3 id="testingprojectstestmatricesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Cloud project that owns the test matrix.|
|testMatrixId|path|string|true|Unique test matrix id which was assigned by the service.|
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
  "clientInfo": {
    "clientInfoDetails": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "name": "string"
  },
  "environmentMatrix": {
    "androidDeviceList": {
      "androidDevices": [
        {
          "androidModelId": "string",
          "androidVersionId": "string",
          "locale": "string",
          "orientation": "string"
        }
      ]
    },
    "androidMatrix": {
      "androidModelIds": [
        "string"
      ],
      "androidVersionIds": [
        "string"
      ],
      "locales": [
        "string"
      ],
      "orientations": [
        "string"
      ]
    },
    "iosDeviceList": {
      "iosDevices": [
        {
          "iosModelId": "string",
          "iosVersionId": "string",
          "locale": "string",
          "orientation": "string"
        }
      ]
    }
  },
  "failFast": true,
  "flakyTestAttempts": 0,
  "invalidMatrixDetails": "INVALID_MATRIX_DETAILS_UNSPECIFIED",
  "outcomeSummary": "OUTCOME_SUMMARY_UNSPECIFIED",
  "projectId": "string",
  "resultStorage": {
    "googleCloudStorage": {
      "gcsPath": "string"
    },
    "resultsUrl": "string",
    "toolResultsExecution": {
      "executionId": "string",
      "historyId": "string",
      "projectId": "string"
    },
    "toolResultsHistory": {
      "historyId": "string",
      "projectId": "string"
    }
  },
  "state": "TEST_STATE_UNSPECIFIED",
  "testExecutions": [
    {
      "environment": {
        "androidDevice": {
          "androidModelId": "string",
          "androidVersionId": "string",
          "locale": "string",
          "orientation": "string"
        },
        "iosDevice": {
          "iosModelId": "string",
          "iosVersionId": "string",
          "locale": "string",
          "orientation": "string"
        }
      },
      "id": "string",
      "matrixId": "string",
      "projectId": "string",
      "shard": {
        "numShards": 0,
        "shardIndex": 0,
        "testTargetsForShard": {
          "testTargets": [
            "string"
          ]
        }
      },
      "state": "TEST_STATE_UNSPECIFIED",
      "testDetails": {
        "errorMessage": "string",
        "progressMessages": [
          "string"
        ]
      },
      "testSpecification": {
        "androidInstrumentationTest": {
          "appApk": {
            "gcsPath": "string"
          },
          "appBundle": {
            "bundleLocation": {
              "gcsPath": "string"
            }
          },
          "appPackageId": "string",
          "orchestratorOption": "ORCHESTRATOR_OPTION_UNSPECIFIED",
          "shardingOption": {
            "manualSharding": {
              "testTargetsForShard": [
                {
                  "testTargets": [
                    "string"
                  ]
                }
              ]
            },
            "uniformSharding": {
              "numShards": 0
            }
          },
          "testApk": {
            "gcsPath": "string"
          },
          "testPackageId": "string",
          "testRunnerClass": "string",
          "testTargets": [
            "string"
          ]
        },
        "androidRoboTest": {
          "appApk": {
            "gcsPath": "string"
          },
          "appBundle": {
            "bundleLocation": {
              "gcsPath": "string"
            }
          },
          "appInitialActivity": "string",
          "appPackageId": "string",
          "maxDepth": 0,
          "maxSteps": 0,
          "roboDirectives": [
            {
              "actionType": "ACTION_TYPE_UNSPECIFIED",
              "inputText": "string",
              "resourceName": "string"
            }
          ],
          "roboMode": "ROBO_MODE_UNSPECIFIED",
          "roboScript": {
            "gcsPath": "string"
          },
          "startingIntents": [
            {
              "launcherActivity": {},
              "startActivity": {
                "action": "string",
                "categories": [
                  "string"
                ],
                "uri": "string"
              },
              "timeout": "string"
            }
          ]
        },
        "androidTestLoop": {
          "appApk": {
            "gcsPath": "string"
          },
          "appBundle": {
            "bundleLocation": {
              "gcsPath": "string"
            }
          },
          "appPackageId": "string",
          "scenarioLabels": [
            "string"
          ],
          "scenarios": [
            0
          ]
        },
        "disablePerformanceMetrics": true,
        "disableVideoRecording": true,
        "iosTestLoop": {
          "appBundleId": "string",
          "appIpa": {
            "gcsPath": "string"
          },
          "scenarios": [
            0
          ]
        },
        "iosTestSetup": {
          "additionalIpas": [
            {
              "gcsPath": "string"
            }
          ],
          "networkProfile": "string",
          "pullDirectories": [
            {
              "bundleId": "string",
              "content": {
                "gcsPath": "string"
              },
              "devicePath": "string"
            }
          ],
          "pushFiles": [
            {
              "bundleId": "string",
              "content": {
                "gcsPath": "string"
              },
              "devicePath": "string"
            }
          ]
        },
        "iosXcTest": {
          "appBundleId": "string",
          "testSpecialEntitlements": true,
          "testsZip": {
            "gcsPath": "string"
          },
          "xcodeVersion": "string",
          "xctestrun": {
            "gcsPath": "string"
          }
        },
        "testSetup": {
          "account": {
            "googleAuto": {}
          },
          "additionalApks": [
            {
              "location": {
                "gcsPath": "string"
              },
              "packageName": "string"
            }
          ],
          "directoriesToPull": [
            "string"
          ],
          "dontAutograntPermissions": true,
          "environmentVariables": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "filesToPush": [
            {
              "obbFile": {
                "obb": {
                  "gcsPath": "string"
                },
                "obbFileName": "string"
              },
              "regularFile": {
                "content": {
                  "gcsPath": "string"
                },
                "devicePath": "string"
              }
            }
          ],
          "networkProfile": "string",
          "systrace": {
            "durationSeconds": 0
          }
        },
        "testTimeout": "string"
      },
      "timestamp": "string",
      "toolResultsStep": {
        "executionId": "string",
        "historyId": "string",
        "projectId": "string",
        "stepId": "string"
      }
    }
  ],
  "testMatrixId": "string",
  "testSpecification": {
    "androidInstrumentationTest": {
      "appApk": {
        "gcsPath": "string"
      },
      "appBundle": {
        "bundleLocation": {
          "gcsPath": "string"
        }
      },
      "appPackageId": "string",
      "orchestratorOption": "ORCHESTRATOR_OPTION_UNSPECIFIED",
      "shardingOption": {
        "manualSharding": {
          "testTargetsForShard": [
            {
              "testTargets": [
                "string"
              ]
            }
          ]
        },
        "uniformSharding": {
          "numShards": 0
        }
      },
      "testApk": {
        "gcsPath": "string"
      },
      "testPackageId": "string",
      "testRunnerClass": "string",
      "testTargets": [
        "string"
      ]
    },
    "androidRoboTest": {
      "appApk": {
        "gcsPath": "string"
      },
      "appBundle": {
        "bundleLocation": {
          "gcsPath": "string"
        }
      },
      "appInitialActivity": "string",
      "appPackageId": "string",
      "maxDepth": 0,
      "maxSteps": 0,
      "roboDirectives": [
        {
          "actionType": "ACTION_TYPE_UNSPECIFIED",
          "inputText": "string",
          "resourceName": "string"
        }
      ],
      "roboMode": "ROBO_MODE_UNSPECIFIED",
      "roboScript": {
        "gcsPath": "string"
      },
      "startingIntents": [
        {
          "launcherActivity": {},
          "startActivity": {
            "action": "string",
            "categories": [
              "string"
            ],
            "uri": "string"
          },
          "timeout": "string"
        }
      ]
    },
    "androidTestLoop": {
      "appApk": {
        "gcsPath": "string"
      },
      "appBundle": {
        "bundleLocation": {
          "gcsPath": "string"
        }
      },
      "appPackageId": "string",
      "scenarioLabels": [
        "string"
      ],
      "scenarios": [
        0
      ]
    },
    "disablePerformanceMetrics": true,
    "disableVideoRecording": true,
    "iosTestLoop": {
      "appBundleId": "string",
      "appIpa": {
        "gcsPath": "string"
      },
      "scenarios": [
        0
      ]
    },
    "iosTestSetup": {
      "additionalIpas": [
        {
          "gcsPath": "string"
        }
      ],
      "networkProfile": "string",
      "pullDirectories": [
        {
          "bundleId": "string",
          "content": {
            "gcsPath": "string"
          },
          "devicePath": "string"
        }
      ],
      "pushFiles": [
        {
          "bundleId": "string",
          "content": {
            "gcsPath": "string"
          },
          "devicePath": "string"
        }
      ]
    },
    "iosXcTest": {
      "appBundleId": "string",
      "testSpecialEntitlements": true,
      "testsZip": {
        "gcsPath": "string"
      },
      "xcodeVersion": "string",
      "xctestrun": {
        "gcsPath": "string"
      }
    },
    "testSetup": {
      "account": {
        "googleAuto": {}
      },
      "additionalApks": [
        {
          "location": {
            "gcsPath": "string"
          },
          "packageName": "string"
        }
      ],
      "directoriesToPull": [
        "string"
      ],
      "dontAutograntPermissions": true,
      "environmentVariables": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "filesToPush": [
        {
          "obbFile": {
            "obb": {
              "gcsPath": "string"
            },
            "obbFileName": "string"
          },
          "regularFile": {
            "content": {
              "gcsPath": "string"
            },
            "devicePath": "string"
          }
        }
      ],
      "networkProfile": "string",
      "systrace": {
        "durationSeconds": 0
      }
    },
    "testTimeout": "string"
  },
  "timestamp": "string"
}
```

<h3 id="testingprojectstestmatricesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestMatrix](#schematestmatrix)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## testing.projects.testMatrices.cancel

<a id="opIdtesting.projects.testMatrices.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/testMatrices/string:cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/projects/{projectId}/testMatrices/{testMatrixId}:cancel`

Cancels unfinished test executions in a test matrix. This call returns immediately and cancellation proceeds asynchronously. If the matrix is already final, this operation will have no effect. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist

<h3 id="testingprojectstestmatricescancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Cloud project that owns the test.|
|testMatrixId|path|string|true|Test matrix that will be canceled.|
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
  "testState": "TEST_STATE_UNSPECIFIED"
}
```

<h3 id="testingprojectstestmatricescancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CancelTestMatrixResponse](#schemacanceltestmatrixresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="cloud-testing-api-testenvironmentcatalog">testEnvironmentCatalog</h1>

## testing.testEnvironmentCatalog.get

<a id="opIdtesting.testEnvironmentCatalog.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/testEnvironmentCatalog/ENVIRONMENT_TYPE_UNSPECIFIED \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/testEnvironmentCatalog/{environmentType}`

Gets the catalog of supported test environments. May return any of the following canonical error codes: - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the environment type does not exist - INTERNAL - if an internal error occurred

<h3 id="testingtestenvironmentcatalogget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentType|path|string|true|Required. The type of environment that should be listed.|
|projectId|query|string|false|For authorization, the cloud project requesting the TestEnvironmentCatalog.|
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
|environmentType|ENVIRONMENT_TYPE_UNSPECIFIED|
|environmentType|ANDROID|
|environmentType|IOS|
|environmentType|NETWORK_CONFIGURATION|
|environmentType|PROVIDED_SOFTWARE|
|environmentType|DEVICE_IP_BLOCKS|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "androidDeviceCatalog": {
    "models": [
      {
        "brand": "string",
        "codename": "string",
        "form": "DEVICE_FORM_UNSPECIFIED",
        "formFactor": "DEVICE_FORM_FACTOR_UNSPECIFIED",
        "id": "string",
        "lowFpsVideoRecording": true,
        "manufacturer": "string",
        "name": "string",
        "perVersionInfo": [
          {
            "deviceCapacity": "DEVICE_CAPACITY_UNSPECIFIED",
            "versionId": "string"
          }
        ],
        "screenDensity": 0,
        "screenX": 0,
        "screenY": 0,
        "supportedAbis": [
          "string"
        ],
        "supportedVersionIds": [
          "string"
        ],
        "tags": [
          "string"
        ],
        "thumbnailUrl": "string"
      }
    ],
    "runtimeConfiguration": {
      "locales": [
        {
          "id": "string",
          "name": "string",
          "region": "string",
          "tags": [
            "string"
          ]
        }
      ],
      "orientations": [
        {
          "id": "string",
          "name": "string",
          "tags": [
            "string"
          ]
        }
      ]
    },
    "versions": [
      {
        "apiLevel": 0,
        "codeName": "string",
        "distribution": {
          "marketShare": 0,
          "measurementTime": "string"
        },
        "id": "string",
        "releaseDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "tags": [
          "string"
        ],
        "versionString": "string"
      }
    ]
  },
  "deviceIpBlockCatalog": {
    "ipBlocks": [
      {
        "addedDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "block": "string",
        "form": "DEVICE_FORM_UNSPECIFIED"
      }
    ]
  },
  "iosDeviceCatalog": {
    "models": [
      {
        "deviceCapabilities": [
          "string"
        ],
        "formFactor": "DEVICE_FORM_FACTOR_UNSPECIFIED",
        "id": "string",
        "name": "string",
        "perVersionInfo": [
          {
            "deviceCapacity": "DEVICE_CAPACITY_UNSPECIFIED",
            "versionId": "string"
          }
        ],
        "screenDensity": 0,
        "screenX": 0,
        "screenY": 0,
        "supportedVersionIds": [
          "string"
        ],
        "tags": [
          "string"
        ]
      }
    ],
    "runtimeConfiguration": {
      "locales": [
        {
          "id": "string",
          "name": "string",
          "region": "string",
          "tags": [
            "string"
          ]
        }
      ],
      "orientations": [
        {
          "id": "string",
          "name": "string",
          "tags": [
            "string"
          ]
        }
      ]
    },
    "versions": [
      {
        "id": "string",
        "majorVersion": 0,
        "minorVersion": 0,
        "supportedXcodeVersionIds": [
          "string"
        ],
        "tags": [
          "string"
        ]
      }
    ],
    "xcodeVersions": [
      {
        "tags": [
          "string"
        ],
        "version": "string"
      }
    ]
  },
  "networkConfigurationCatalog": {
    "configurations": [
      {
        "downRule": {
          "bandwidth": 0,
          "burst": 0,
          "delay": "string",
          "packetDuplicationRatio": 0,
          "packetLossRatio": 0
        },
        "id": "string",
        "upRule": {
          "bandwidth": 0,
          "burst": 0,
          "delay": "string",
          "packetDuplicationRatio": 0,
          "packetLossRatio": 0
        }
      }
    ]
  },
  "softwareCatalog": {
    "androidxOrchestratorVersion": "string",
    "orchestratorVersion": "string"
  }
}
```

<h3 id="testingtestenvironmentcatalogget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestEnvironmentCatalog](#schematestenvironmentcatalog)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

# Schemas

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "googleAuto": {}
}
```

Identifies an account and how to log into it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|googleAuto|[GoogleAuto](#schemagoogleauto)|false|none|An automatic google login account.|

<h2 id="tocS_AndroidDevice">AndroidDevice</h2>
<!-- backwards compatibility -->
<a id="schemaandroiddevice"></a>
<a id="schema_AndroidDevice"></a>
<a id="tocSandroiddevice"></a>
<a id="tocsandroiddevice"></a>

```json
{
  "androidModelId": "string",
  "androidVersionId": "string",
  "locale": "string",
  "orientation": "string"
}
```

A single Android device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|androidModelId|string|false|none|Required. The id of the Android device to be used. Use the TestEnvironmentDiscoveryService to get supported options.|
|androidVersionId|string|false|none|Required. The id of the Android OS version to be used. Use the TestEnvironmentDiscoveryService to get supported options.|
|locale|string|false|none|Required. The locale the test device used for testing. Use the TestEnvironmentDiscoveryService to get supported options.|
|orientation|string|false|none|Required. How the device is oriented during the test. Use the TestEnvironmentDiscoveryService to get supported options.|

<h2 id="tocS_AndroidDeviceCatalog">AndroidDeviceCatalog</h2>
<!-- backwards compatibility -->
<a id="schemaandroiddevicecatalog"></a>
<a id="schema_AndroidDeviceCatalog"></a>
<a id="tocSandroiddevicecatalog"></a>
<a id="tocsandroiddevicecatalog"></a>

```json
{
  "models": [
    {
      "brand": "string",
      "codename": "string",
      "form": "DEVICE_FORM_UNSPECIFIED",
      "formFactor": "DEVICE_FORM_FACTOR_UNSPECIFIED",
      "id": "string",
      "lowFpsVideoRecording": true,
      "manufacturer": "string",
      "name": "string",
      "perVersionInfo": [
        {
          "deviceCapacity": "DEVICE_CAPACITY_UNSPECIFIED",
          "versionId": "string"
        }
      ],
      "screenDensity": 0,
      "screenX": 0,
      "screenY": 0,
      "supportedAbis": [
        "string"
      ],
      "supportedVersionIds": [
        "string"
      ],
      "tags": [
        "string"
      ],
      "thumbnailUrl": "string"
    }
  ],
  "runtimeConfiguration": {
    "locales": [
      {
        "id": "string",
        "name": "string",
        "region": "string",
        "tags": [
          "string"
        ]
      }
    ],
    "orientations": [
      {
        "id": "string",
        "name": "string",
        "tags": [
          "string"
        ]
      }
    ]
  },
  "versions": [
    {
      "apiLevel": 0,
      "codeName": "string",
      "distribution": {
        "marketShare": 0,
        "measurementTime": "string"
      },
      "id": "string",
      "releaseDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "tags": [
        "string"
      ],
      "versionString": "string"
    }
  ]
}
```

The currently supported Android devices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|models|[[AndroidModel](#schemaandroidmodel)]|false|none|The set of supported Android device models.|
|runtimeConfiguration|[AndroidRuntimeConfiguration](#schemaandroidruntimeconfiguration)|false|none|The set of supported runtime configurations.|
|versions|[[AndroidVersion](#schemaandroidversion)]|false|none|The set of supported Android OS versions.|

<h2 id="tocS_AndroidDeviceList">AndroidDeviceList</h2>
<!-- backwards compatibility -->
<a id="schemaandroiddevicelist"></a>
<a id="schema_AndroidDeviceList"></a>
<a id="tocSandroiddevicelist"></a>
<a id="tocsandroiddevicelist"></a>

```json
{
  "androidDevices": [
    {
      "androidModelId": "string",
      "androidVersionId": "string",
      "locale": "string",
      "orientation": "string"
    }
  ]
}
```

A list of Android device configurations in which the test is to be executed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|androidDevices|[[AndroidDevice](#schemaandroiddevice)]|false|none|Required. A list of Android devices.|

<h2 id="tocS_AndroidInstrumentationTest">AndroidInstrumentationTest</h2>
<!-- backwards compatibility -->
<a id="schemaandroidinstrumentationtest"></a>
<a id="schema_AndroidInstrumentationTest"></a>
<a id="tocSandroidinstrumentationtest"></a>
<a id="tocsandroidinstrumentationtest"></a>

```json
{
  "appApk": {
    "gcsPath": "string"
  },
  "appBundle": {
    "bundleLocation": {
      "gcsPath": "string"
    }
  },
  "appPackageId": "string",
  "orchestratorOption": "ORCHESTRATOR_OPTION_UNSPECIFIED",
  "shardingOption": {
    "manualSharding": {
      "testTargetsForShard": [
        {
          "testTargets": [
            "string"
          ]
        }
      ]
    },
    "uniformSharding": {
      "numShards": 0
    }
  },
  "testApk": {
    "gcsPath": "string"
  },
  "testPackageId": "string",
  "testRunnerClass": "string",
  "testTargets": [
    "string"
  ]
}
```

A test of an Android application that can control an Android component independently of its normal lifecycle. Android instrumentation tests run an application APK and test APK inside the same process on a virtual or physical AndroidDevice. They also specify a test runner class, such as com.google.GoogleTestRunner, which can vary on the specific instrumentation framework chosen. See for more information on types of Android tests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appApk|[FileReference](#schemafilereference)|false|none|The APK for the application under test.|
|appBundle|[AppBundle](#schemaappbundle)|false|none|A multi-apk app bundle for the application under test.|
|appPackageId|string|false|none|The java package for the application under test. The default value is determined by examining the application's manifest.|
|orchestratorOption|string|false|none|The option of whether running each test within its own invocation of instrumentation with Android Test Orchestrator or not. ** Orchestrator is only compatible with AndroidJUnitRunner version 1.1 or higher! ** Orchestrator offers the following benefits: - No shared state - Crashes are isolated - Logs are scoped per test See for more information about Android Test Orchestrator. If not set, the test will be run without the orchestrator.|
|shardingOption|[ShardingOption](#schemashardingoption)|false|none|The option to run tests in multiple shards in parallel.|
|testApk|[FileReference](#schemafilereference)|false|none|Required. The APK containing the test code to be executed.|
|testPackageId|string|false|none|The java package for the test to be executed. The default value is determined by examining the application's manifest.|
|testRunnerClass|string|false|none|The InstrumentationTestRunner class. The default value is determined by examining the application's manifest.|
|testTargets|[string]|false|none|Each target must be fully qualified with the package name or class name, in one of these formats: - "package package_name" - "class package_name.class_name" - "class package_name.class_name#method_name" If empty, all targets in the module will be run.|

#### Enumerated Values

|Property|Value|
|---|---|
|orchestratorOption|ORCHESTRATOR_OPTION_UNSPECIFIED|
|orchestratorOption|USE_ORCHESTRATOR|
|orchestratorOption|DO_NOT_USE_ORCHESTRATOR|

<h2 id="tocS_AndroidMatrix">AndroidMatrix</h2>
<!-- backwards compatibility -->
<a id="schemaandroidmatrix"></a>
<a id="schema_AndroidMatrix"></a>
<a id="tocSandroidmatrix"></a>
<a id="tocsandroidmatrix"></a>

```json
{
  "androidModelIds": [
    "string"
  ],
  "androidVersionIds": [
    "string"
  ],
  "locales": [
    "string"
  ],
  "orientations": [
    "string"
  ]
}
```

A set of Android device configuration permutations is defined by the the cross-product of the given axes. Internally, the given AndroidMatrix will be expanded into a set of AndroidDevices. Only supported permutations will be instantiated. Invalid permutations (e.g., incompatible models/versions) are ignored.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|androidModelIds|[string]|false|none|Required. The ids of the set of Android device to be used. Use the TestEnvironmentDiscoveryService to get supported options.|
|androidVersionIds|[string]|false|none|Required. The ids of the set of Android OS version to be used. Use the TestEnvironmentDiscoveryService to get supported options.|
|locales|[string]|false|none|Required. The set of locales the test device will enable for testing. Use the TestEnvironmentDiscoveryService to get supported options.|
|orientations|[string]|false|none|Required. The set of orientations to test with. Use the TestEnvironmentDiscoveryService to get supported options.|

<h2 id="tocS_AndroidModel">AndroidModel</h2>
<!-- backwards compatibility -->
<a id="schemaandroidmodel"></a>
<a id="schema_AndroidModel"></a>
<a id="tocSandroidmodel"></a>
<a id="tocsandroidmodel"></a>

```json
{
  "brand": "string",
  "codename": "string",
  "form": "DEVICE_FORM_UNSPECIFIED",
  "formFactor": "DEVICE_FORM_FACTOR_UNSPECIFIED",
  "id": "string",
  "lowFpsVideoRecording": true,
  "manufacturer": "string",
  "name": "string",
  "perVersionInfo": [
    {
      "deviceCapacity": "DEVICE_CAPACITY_UNSPECIFIED",
      "versionId": "string"
    }
  ],
  "screenDensity": 0,
  "screenX": 0,
  "screenY": 0,
  "supportedAbis": [
    "string"
  ],
  "supportedVersionIds": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "thumbnailUrl": "string"
}
```

A description of an Android device tests may be run on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brand|string|false|none|The company that this device is branded with. Example: "Google", "Samsung".|
|codename|string|false|none|The name of the industrial design. This corresponds to android.os.Build.DEVICE.|
|form|string|false|none|Whether this device is virtual or physical.|
|formFactor|string|false|none|Whether this device is a phone, tablet, wearable, etc.|
|id|string|false|none|The unique opaque id for this model. Use this for invoking the TestExecutionService.|
|lowFpsVideoRecording|boolean|false|none|True if and only if tests with this model are recorded by stitching together screenshots. See use_low_spec_video_recording in device config.|
|manufacturer|string|false|none|The manufacturer of this device.|
|name|string|false|none|The human-readable marketing name for this device model. Examples: "Nexus 5", "Galaxy S5".|
|perVersionInfo|[[PerAndroidVersionInfo](#schemaperandroidversioninfo)]|false|none|Version-specific information of an Android model.|
|screenDensity|integer(int32)|false|none|Screen density in DPI. This corresponds to ro.sf.lcd_density|
|screenX|integer(int32)|false|none|Screen size in the horizontal (X) dimension measured in pixels.|
|screenY|integer(int32)|false|none|Screen size in the vertical (Y) dimension measured in pixels.|
|supportedAbis|[string]|false|none|The list of supported ABIs for this device. This corresponds to either android.os.Build.SUPPORTED_ABIS (for API level 21 and above) or android.os.Build.CPU_ABI/CPU_ABI2. The most preferred ABI is the first element in the list. Elements are optionally prefixed by "version_id:" (where version_id is the id of an AndroidVersion), denoting an ABI that is supported only on a particular version.|
|supportedVersionIds|[string]|false|none|The set of Android versions this device supports.|
|tags|[string]|false|none|Tags for this dimension. Examples: "default", "preview", "deprecated".|
|thumbnailUrl|string|false|none|URL of a thumbnail image (photo) of the device.|

#### Enumerated Values

|Property|Value|
|---|---|
|form|DEVICE_FORM_UNSPECIFIED|
|form|VIRTUAL|
|form|PHYSICAL|
|form|EMULATOR|
|formFactor|DEVICE_FORM_FACTOR_UNSPECIFIED|
|formFactor|PHONE|
|formFactor|TABLET|
|formFactor|WEARABLE|

<h2 id="tocS_AndroidRoboTest">AndroidRoboTest</h2>
<!-- backwards compatibility -->
<a id="schemaandroidrobotest"></a>
<a id="schema_AndroidRoboTest"></a>
<a id="tocSandroidrobotest"></a>
<a id="tocsandroidrobotest"></a>

```json
{
  "appApk": {
    "gcsPath": "string"
  },
  "appBundle": {
    "bundleLocation": {
      "gcsPath": "string"
    }
  },
  "appInitialActivity": "string",
  "appPackageId": "string",
  "maxDepth": 0,
  "maxSteps": 0,
  "roboDirectives": [
    {
      "actionType": "ACTION_TYPE_UNSPECIFIED",
      "inputText": "string",
      "resourceName": "string"
    }
  ],
  "roboMode": "ROBO_MODE_UNSPECIFIED",
  "roboScript": {
    "gcsPath": "string"
  },
  "startingIntents": [
    {
      "launcherActivity": {},
      "startActivity": {
        "action": "string",
        "categories": [
          "string"
        ],
        "uri": "string"
      },
      "timeout": "string"
    }
  ]
}
```

A test of an android application that explores the application on a virtual or physical Android Device, finding culprits and crashes as it goes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appApk|[FileReference](#schemafilereference)|false|none|The APK for the application under test.|
|appBundle|[AppBundle](#schemaappbundle)|false|none|A multi-apk app bundle for the application under test.|
|appInitialActivity|string|false|none|The initial activity that should be used to start the app.|
|appPackageId|string|false|none|The java package for the application under test. The default value is determined by examining the application's manifest.|
|maxDepth|integer(int32)|false|none|The max depth of the traversal stack Robo can explore. Needs to be at least 2 to make Robo explore the app beyond the first activity. Default is 50.|
|maxSteps|integer(int32)|false|none|The max number of steps Robo can execute. Default is no limit.|
|roboDirectives|[[RoboDirective](#schemarobodirective)]|false|none|A set of directives Robo should apply during the crawl. This allows users to customize the crawl. For example, the username and password for a test account can be provided.|
|roboMode|string|false|none|The mode in which Robo should run. Most clients should allow the server to populate this field automatically.|
|roboScript|[FileReference](#schemafilereference)|false|none|A JSON file with a sequence of actions Robo should perform as a prologue for the crawl.|
|startingIntents|[[RoboStartingIntent](#schemarobostartingintent)]|false|none|The intents used to launch the app for the crawl. If none are provided, then the main launcher activity is launched. If some are provided, then only those provided are launched (the main launcher activity must be provided explicitly).|

#### Enumerated Values

|Property|Value|
|---|---|
|roboMode|ROBO_MODE_UNSPECIFIED|
|roboMode|ROBO_VERSION_1|
|roboMode|ROBO_VERSION_2|

<h2 id="tocS_AndroidRuntimeConfiguration">AndroidRuntimeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaandroidruntimeconfiguration"></a>
<a id="schema_AndroidRuntimeConfiguration"></a>
<a id="tocSandroidruntimeconfiguration"></a>
<a id="tocsandroidruntimeconfiguration"></a>

```json
{
  "locales": [
    {
      "id": "string",
      "name": "string",
      "region": "string",
      "tags": [
        "string"
      ]
    }
  ],
  "orientations": [
    {
      "id": "string",
      "name": "string",
      "tags": [
        "string"
      ]
    }
  ]
}
```

Android configuration that can be selected at the time a test is run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locales|[[Locale](#schemalocale)]|false|none|The set of available locales.|
|orientations|[[Orientation](#schemaorientation)]|false|none|The set of available orientations.|

<h2 id="tocS_AndroidTestLoop">AndroidTestLoop</h2>
<!-- backwards compatibility -->
<a id="schemaandroidtestloop"></a>
<a id="schema_AndroidTestLoop"></a>
<a id="tocSandroidtestloop"></a>
<a id="tocsandroidtestloop"></a>

```json
{
  "appApk": {
    "gcsPath": "string"
  },
  "appBundle": {
    "bundleLocation": {
      "gcsPath": "string"
    }
  },
  "appPackageId": "string",
  "scenarioLabels": [
    "string"
  ],
  "scenarios": [
    0
  ]
}
```

A test of an Android Application with a Test Loop. The intent \ will be implicitly added, since Games is the only user of this api, for the time being.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appApk|[FileReference](#schemafilereference)|false|none|The APK for the application under test.|
|appBundle|[AppBundle](#schemaappbundle)|false|none|A multi-apk app bundle for the application under test.|
|appPackageId|string|false|none|The java package for the application under test. The default is determined by examining the application's manifest.|
|scenarioLabels|[string]|false|none|The list of scenario labels that should be run during the test. The scenario labels should map to labels defined in the application's manifest. For example, player_experience and com.google.test.loops.player_experience add all of the loops labeled in the manifest with the com.google.test.loops.player_experience name to the execution. Scenarios can also be specified in the scenarios field.|
|scenarios|[integer(int32)]|false|none|The list of scenarios that should be run during the test. The default is all test loops, derived from the application's manifest.|

<h2 id="tocS_AndroidVersion">AndroidVersion</h2>
<!-- backwards compatibility -->
<a id="schemaandroidversion"></a>
<a id="schema_AndroidVersion"></a>
<a id="tocSandroidversion"></a>
<a id="tocsandroidversion"></a>

```json
{
  "apiLevel": 0,
  "codeName": "string",
  "distribution": {
    "marketShare": 0,
    "measurementTime": "string"
  },
  "id": "string",
  "releaseDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "tags": [
    "string"
  ],
  "versionString": "string"
}
```

A version of the Android OS.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiLevel|integer(int32)|false|none|The API level for this Android version. Examples: 18, 19.|
|codeName|string|false|none|The code name for this Android version. Examples: "JellyBean", "KitKat".|
|distribution|[Distribution](#schemadistribution)|false|none|Market share for this version.|
|id|string|false|none|An opaque id for this Android version. Use this id to invoke the TestExecutionService.|
|releaseDate|[Date](#schemadate)|false|none|The date this Android version became available in the market.|
|tags|[string]|false|none|Tags for this dimension. Examples: "default", "preview", "deprecated".|
|versionString|string|false|none|A string representing this version of the Android OS. Examples: "4.3", "4.4".|

<h2 id="tocS_Apk">Apk</h2>
<!-- backwards compatibility -->
<a id="schemaapk"></a>
<a id="schema_Apk"></a>
<a id="tocSapk"></a>
<a id="tocsapk"></a>

```json
{
  "location": {
    "gcsPath": "string"
  },
  "packageName": "string"
}
```

An Android package file to install.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|[FileReference](#schemafilereference)|false|none|The path to an APK to be installed on the device before the test begins.|
|packageName|string|false|none|The java package for the APK to be installed. Value is determined by examining the application's manifest.|

<h2 id="tocS_ApkDetail">ApkDetail</h2>
<!-- backwards compatibility -->
<a id="schemaapkdetail"></a>
<a id="schema_ApkDetail"></a>
<a id="tocSapkdetail"></a>
<a id="tocsapkdetail"></a>

```json
{
  "apkManifest": {
    "applicationLabel": "string",
    "intentFilters": [
      {
        "actionNames": [
          "string"
        ],
        "categoryNames": [
          "string"
        ],
        "mimeType": "string"
      }
    ],
    "maxSdkVersion": 0,
    "metadata": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "minSdkVersion": 0,
    "packageName": "string",
    "targetSdkVersion": 0,
    "usesFeature": [
      {
        "isRequired": true,
        "name": "string"
      }
    ],
    "usesPermission": [
      "string"
    ],
    "versionCode": "string",
    "versionName": "string"
  }
}
```

Android application details based on application manifest and apk archive contents.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apkManifest|[ApkManifest](#schemaapkmanifest)|false|none|An Android app manifest. See http://developer.android.com/guide/topics/manifest/manifest-intro.html|

<h2 id="tocS_ApkManifest">ApkManifest</h2>
<!-- backwards compatibility -->
<a id="schemaapkmanifest"></a>
<a id="schema_ApkManifest"></a>
<a id="tocSapkmanifest"></a>
<a id="tocsapkmanifest"></a>

```json
{
  "applicationLabel": "string",
  "intentFilters": [
    {
      "actionNames": [
        "string"
      ],
      "categoryNames": [
        "string"
      ],
      "mimeType": "string"
    }
  ],
  "maxSdkVersion": 0,
  "metadata": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "minSdkVersion": 0,
  "packageName": "string",
  "targetSdkVersion": 0,
  "usesFeature": [
    {
      "isRequired": true,
      "name": "string"
    }
  ],
  "usesPermission": [
    "string"
  ],
  "versionCode": "string",
  "versionName": "string"
}
```

An Android app manifest. See http://developer.android.com/guide/topics/manifest/manifest-intro.html

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationLabel|string|false|none|User-readable name for the application.|
|intentFilters|[[IntentFilter](#schemaintentfilter)]|false|none|none|
|maxSdkVersion|integer(int32)|false|none|Maximum API level on which the application is designed to run.|
|metadata|[[Metadata](#schemametadata)]|false|none|Meta-data tags defined in the manifest.|
|minSdkVersion|integer(int32)|false|none|Minimum API level required for the application to run.|
|packageName|string|false|none|Full Java-style package name for this application, e.g. "com.example.foo".|
|targetSdkVersion|integer(int32)|false|none|Specifies the API Level on which the application is designed to run.|
|usesFeature|[[UsesFeature](#schemausesfeature)]|false|none|Feature usage tags defined in the manifest.|
|usesPermission|[string]|false|none|Permissions declared to be used by the application|
|versionCode|string(int64)|false|none|Version number used internally by the app.|
|versionName|string|false|none|Version number shown to users.|

<h2 id="tocS_AppBundle">AppBundle</h2>
<!-- backwards compatibility -->
<a id="schemaappbundle"></a>
<a id="schema_AppBundle"></a>
<a id="tocSappbundle"></a>
<a id="tocsappbundle"></a>

```json
{
  "bundleLocation": {
    "gcsPath": "string"
  }
}
```

An Android App Bundle file format, containing a BundleConfig.pb file, a base module directory, zero or more dynamic feature module directories. See https://developer.android.com/guide/app-bundle/build for guidance on building App Bundles.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bundleLocation|[FileReference](#schemafilereference)|false|none|.aab file representing the app bundle under test.|

<h2 id="tocS_CancelTestMatrixResponse">CancelTestMatrixResponse</h2>
<!-- backwards compatibility -->
<a id="schemacanceltestmatrixresponse"></a>
<a id="schema_CancelTestMatrixResponse"></a>
<a id="tocScanceltestmatrixresponse"></a>
<a id="tocscanceltestmatrixresponse"></a>

```json
{
  "testState": "TEST_STATE_UNSPECIFIED"
}
```

Response containing the current state of the specified test matrix.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|testState|string|false|none|The current rolled-up state of the test matrix. If this state is already final, then the cancelation request will have no effect.|

#### Enumerated Values

|Property|Value|
|---|---|
|testState|TEST_STATE_UNSPECIFIED|
|testState|VALIDATING|
|testState|PENDING|
|testState|RUNNING|
|testState|FINISHED|
|testState|ERROR|
|testState|UNSUPPORTED_ENVIRONMENT|
|testState|INCOMPATIBLE_ENVIRONMENT|
|testState|INCOMPATIBLE_ARCHITECTURE|
|testState|CANCELLED|
|testState|INVALID|

<h2 id="tocS_ClientInfo">ClientInfo</h2>
<!-- backwards compatibility -->
<a id="schemaclientinfo"></a>
<a id="schema_ClientInfo"></a>
<a id="tocSclientinfo"></a>
<a id="tocsclientinfo"></a>

```json
{
  "clientInfoDetails": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "name": "string"
}
```

Information about the client which invoked the test.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientInfoDetails|[[ClientInfoDetail](#schemaclientinfodetail)]|false|none|The list of detailed information about client.|
|name|string|false|none|Required. Client name, such as gcloud.|

<h2 id="tocS_ClientInfoDetail">ClientInfoDetail</h2>
<!-- backwards compatibility -->
<a id="schemaclientinfodetail"></a>
<a id="schema_ClientInfoDetail"></a>
<a id="tocSclientinfodetail"></a>
<a id="tocsclientinfodetail"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

Key-value pair of detailed information about the client which invoked the test. Examples: {'Version', '1.0'}, {'Release Track', 'BETA'}.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|Required. The key of detailed client information.|
|value|string|false|none|Required. The value of detailed client information.|

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

<h2 id="tocS_DeviceFile">DeviceFile</h2>
<!-- backwards compatibility -->
<a id="schemadevicefile"></a>
<a id="schema_DeviceFile"></a>
<a id="tocSdevicefile"></a>
<a id="tocsdevicefile"></a>

```json
{
  "obbFile": {
    "obb": {
      "gcsPath": "string"
    },
    "obbFileName": "string"
  },
  "regularFile": {
    "content": {
      "gcsPath": "string"
    },
    "devicePath": "string"
  }
}
```

A single device file description.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|obbFile|[ObbFile](#schemaobbfile)|false|none|A reference to an opaque binary blob file.|
|regularFile|[RegularFile](#schemaregularfile)|false|none|A reference to a regular file.|

<h2 id="tocS_DeviceIpBlock">DeviceIpBlock</h2>
<!-- backwards compatibility -->
<a id="schemadeviceipblock"></a>
<a id="schema_DeviceIpBlock"></a>
<a id="tocSdeviceipblock"></a>
<a id="tocsdeviceipblock"></a>

```json
{
  "addedDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "block": "string",
  "form": "DEVICE_FORM_UNSPECIFIED"
}
```

A single device IP block

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addedDate|[Date](#schemadate)|false|none|The date this block was added to Firebase Test Lab|
|block|string|false|none|An IP address block in CIDR notation eg: 34.68.194.64/29|
|form|string|false|none|Whether this block is used by physical or virtual devices|

#### Enumerated Values

|Property|Value|
|---|---|
|form|DEVICE_FORM_UNSPECIFIED|
|form|VIRTUAL|
|form|PHYSICAL|
|form|EMULATOR|

<h2 id="tocS_DeviceIpBlockCatalog">DeviceIpBlockCatalog</h2>
<!-- backwards compatibility -->
<a id="schemadeviceipblockcatalog"></a>
<a id="schema_DeviceIpBlockCatalog"></a>
<a id="tocSdeviceipblockcatalog"></a>
<a id="tocsdeviceipblockcatalog"></a>

```json
{
  "ipBlocks": [
    {
      "addedDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "block": "string",
      "form": "DEVICE_FORM_UNSPECIFIED"
    }
  ]
}
```

List of IP blocks used by the Firebase Test Lab

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ipBlocks|[[DeviceIpBlock](#schemadeviceipblock)]|false|none|The device IP blocks used by Firebase Test Lab|

<h2 id="tocS_Distribution">Distribution</h2>
<!-- backwards compatibility -->
<a id="schemadistribution"></a>
<a id="schema_Distribution"></a>
<a id="tocSdistribution"></a>
<a id="tocsdistribution"></a>

```json
{
  "marketShare": 0,
  "measurementTime": "string"
}
```

Data about the relative number of devices running a given configuration of the Android platform.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|marketShare|number(double)|false|none|Output only. The estimated fraction (0-1) of the total market with this configuration.|
|measurementTime|string(google-datetime)|false|none|Output only. The time this distribution was measured.|

<h2 id="tocS_Environment">Environment</h2>
<!-- backwards compatibility -->
<a id="schemaenvironment"></a>
<a id="schema_Environment"></a>
<a id="tocSenvironment"></a>
<a id="tocsenvironment"></a>

```json
{
  "androidDevice": {
    "androidModelId": "string",
    "androidVersionId": "string",
    "locale": "string",
    "orientation": "string"
  },
  "iosDevice": {
    "iosModelId": "string",
    "iosVersionId": "string",
    "locale": "string",
    "orientation": "string"
  }
}
```

The environment in which the test is run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|androidDevice|[AndroidDevice](#schemaandroiddevice)|false|none|An Android device which must be used with an Android test.|
|iosDevice|[IosDevice](#schemaiosdevice)|false|none|An iOS device which must be used with an iOS test.|

<h2 id="tocS_EnvironmentMatrix">EnvironmentMatrix</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentmatrix"></a>
<a id="schema_EnvironmentMatrix"></a>
<a id="tocSenvironmentmatrix"></a>
<a id="tocsenvironmentmatrix"></a>

```json
{
  "androidDeviceList": {
    "androidDevices": [
      {
        "androidModelId": "string",
        "androidVersionId": "string",
        "locale": "string",
        "orientation": "string"
      }
    ]
  },
  "androidMatrix": {
    "androidModelIds": [
      "string"
    ],
    "androidVersionIds": [
      "string"
    ],
    "locales": [
      "string"
    ],
    "orientations": [
      "string"
    ]
  },
  "iosDeviceList": {
    "iosDevices": [
      {
        "iosModelId": "string",
        "iosVersionId": "string",
        "locale": "string",
        "orientation": "string"
      }
    ]
  }
}
```

The matrix of environments in which the test is to be executed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|androidDeviceList|[AndroidDeviceList](#schemaandroiddevicelist)|false|none|A list of Android devices; the test will be run only on the specified devices.|
|androidMatrix|[AndroidMatrix](#schemaandroidmatrix)|false|none|A matrix of Android devices.|
|iosDeviceList|[IosDeviceList](#schemaiosdevicelist)|false|none|A list of iOS devices.|

<h2 id="tocS_EnvironmentVariable">EnvironmentVariable</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentvariable"></a>
<a id="schema_EnvironmentVariable"></a>
<a id="tocSenvironmentvariable"></a>
<a id="tocsenvironmentvariable"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

A key-value pair passed as an environment variable to the test.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|Key for the environment variable.|
|value|string|false|none|Value for the environment variable.|

<h2 id="tocS_FileReference">FileReference</h2>
<!-- backwards compatibility -->
<a id="schemafilereference"></a>
<a id="schema_FileReference"></a>
<a id="tocSfilereference"></a>
<a id="tocsfilereference"></a>

```json
{
  "gcsPath": "string"
}
```

A reference to a file, used for user inputs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsPath|string|false|none|A path to a file in Google Cloud Storage. Example: gs://build-app-1414623860166/app%40debug-unaligned.apk These paths are expected to be url encoded (percent encoding)|

<h2 id="tocS_GetApkDetailsResponse">GetApkDetailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetapkdetailsresponse"></a>
<a id="schema_GetApkDetailsResponse"></a>
<a id="tocSgetapkdetailsresponse"></a>
<a id="tocsgetapkdetailsresponse"></a>

```json
{
  "apkDetail": {
    "apkManifest": {
      "applicationLabel": "string",
      "intentFilters": [
        {
          "actionNames": [
            "string"
          ],
          "categoryNames": [
            "string"
          ],
          "mimeType": "string"
        }
      ],
      "maxSdkVersion": 0,
      "metadata": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "minSdkVersion": 0,
      "packageName": "string",
      "targetSdkVersion": 0,
      "usesFeature": [
        {
          "isRequired": true,
          "name": "string"
        }
      ],
      "usesPermission": [
        "string"
      ],
      "versionCode": "string",
      "versionName": "string"
    }
  }
}
```

Response containing the details of the specified Android application APK.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apkDetail|[ApkDetail](#schemaapkdetail)|false|none|Details of the Android APK.|

<h2 id="tocS_GoogleAuto">GoogleAuto</h2>
<!-- backwards compatibility -->
<a id="schemagoogleauto"></a>
<a id="schema_GoogleAuto"></a>
<a id="tocSgoogleauto"></a>
<a id="tocsgoogleauto"></a>

```json
{}
```

Enables automatic Google account login. If set, the service automatically generates a Google test account and adds it to the device, before executing the test. Note that test accounts might be reused. Many applications show their full set of functionalities when an account is present on the device. Logging into the device with these generated accounts allows testing more functionalities.

<h2 id="tocS_GoogleCloudStorage">GoogleCloudStorage</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudstorage"></a>
<a id="schema_GoogleCloudStorage"></a>
<a id="tocSgooglecloudstorage"></a>
<a id="tocsgooglecloudstorage"></a>

```json
{
  "gcsPath": "string"
}
```

A storage location within Google cloud storage (GCS).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsPath|string|false|none|Required. The path to a directory in GCS that will eventually contain the results for this test. The requesting user must have write access on the bucket in the supplied path.|

<h2 id="tocS_IntentFilter">IntentFilter</h2>
<!-- backwards compatibility -->
<a id="schemaintentfilter"></a>
<a id="schema_IntentFilter"></a>
<a id="tocSintentfilter"></a>
<a id="tocsintentfilter"></a>

```json
{
  "actionNames": [
    "string"
  ],
  "categoryNames": [
    "string"
  ],
  "mimeType": "string"
}
```

The section of an tag. https://developer.android.com/guide/topics/manifest/intent-filter-element.html

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionNames|[string]|false|none|The android:name value of the tag.|
|categoryNames|[string]|false|none|The android:name value of the tag.|
|mimeType|string|false|none|The android:mimeType value of the tag.|

<h2 id="tocS_IosDevice">IosDevice</h2>
<!-- backwards compatibility -->
<a id="schemaiosdevice"></a>
<a id="schema_IosDevice"></a>
<a id="tocSiosdevice"></a>
<a id="tocsiosdevice"></a>

```json
{
  "iosModelId": "string",
  "iosVersionId": "string",
  "locale": "string",
  "orientation": "string"
}
```

A single iOS device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iosModelId|string|false|none|Required. The id of the iOS device to be used. Use the TestEnvironmentDiscoveryService to get supported options.|
|iosVersionId|string|false|none|Required. The id of the iOS major software version to be used. Use the TestEnvironmentDiscoveryService to get supported options.|
|locale|string|false|none|Required. The locale the test device used for testing. Use the TestEnvironmentDiscoveryService to get supported options.|
|orientation|string|false|none|Required. How the device is oriented during the test. Use the TestEnvironmentDiscoveryService to get supported options.|

<h2 id="tocS_IosDeviceCatalog">IosDeviceCatalog</h2>
<!-- backwards compatibility -->
<a id="schemaiosdevicecatalog"></a>
<a id="schema_IosDeviceCatalog"></a>
<a id="tocSiosdevicecatalog"></a>
<a id="tocsiosdevicecatalog"></a>

```json
{
  "models": [
    {
      "deviceCapabilities": [
        "string"
      ],
      "formFactor": "DEVICE_FORM_FACTOR_UNSPECIFIED",
      "id": "string",
      "name": "string",
      "perVersionInfo": [
        {
          "deviceCapacity": "DEVICE_CAPACITY_UNSPECIFIED",
          "versionId": "string"
        }
      ],
      "screenDensity": 0,
      "screenX": 0,
      "screenY": 0,
      "supportedVersionIds": [
        "string"
      ],
      "tags": [
        "string"
      ]
    }
  ],
  "runtimeConfiguration": {
    "locales": [
      {
        "id": "string",
        "name": "string",
        "region": "string",
        "tags": [
          "string"
        ]
      }
    ],
    "orientations": [
      {
        "id": "string",
        "name": "string",
        "tags": [
          "string"
        ]
      }
    ]
  },
  "versions": [
    {
      "id": "string",
      "majorVersion": 0,
      "minorVersion": 0,
      "supportedXcodeVersionIds": [
        "string"
      ],
      "tags": [
        "string"
      ]
    }
  ],
  "xcodeVersions": [
    {
      "tags": [
        "string"
      ],
      "version": "string"
    }
  ]
}
```

The currently supported iOS devices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|models|[[IosModel](#schemaiosmodel)]|false|none|The set of supported iOS device models.|
|runtimeConfiguration|[IosRuntimeConfiguration](#schemaiosruntimeconfiguration)|false|none|The set of supported runtime configurations.|
|versions|[[IosVersion](#schemaiosversion)]|false|none|The set of supported iOS software versions.|
|xcodeVersions|[[XcodeVersion](#schemaxcodeversion)]|false|none|The set of supported Xcode versions.|

<h2 id="tocS_IosDeviceFile">IosDeviceFile</h2>
<!-- backwards compatibility -->
<a id="schemaiosdevicefile"></a>
<a id="schema_IosDeviceFile"></a>
<a id="tocSiosdevicefile"></a>
<a id="tocsiosdevicefile"></a>

```json
{
  "bundleId": "string",
  "content": {
    "gcsPath": "string"
  },
  "devicePath": "string"
}
```

A file or directory to install on the device before the test starts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bundleId|string|false|none|The bundle id of the app where this file lives. iOS apps sandbox their own filesystem, so app files must specify which app installed on the device.|
|content|[FileReference](#schemafilereference)|false|none|The source file|
|devicePath|string|false|none|Location of the file on the device, inside the app's sandboxed filesystem|

<h2 id="tocS_IosDeviceList">IosDeviceList</h2>
<!-- backwards compatibility -->
<a id="schemaiosdevicelist"></a>
<a id="schema_IosDeviceList"></a>
<a id="tocSiosdevicelist"></a>
<a id="tocsiosdevicelist"></a>

```json
{
  "iosDevices": [
    {
      "iosModelId": "string",
      "iosVersionId": "string",
      "locale": "string",
      "orientation": "string"
    }
  ]
}
```

A list of iOS device configurations in which the test is to be executed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iosDevices|[[IosDevice](#schemaiosdevice)]|false|none|Required. A list of iOS devices.|

<h2 id="tocS_IosModel">IosModel</h2>
<!-- backwards compatibility -->
<a id="schemaiosmodel"></a>
<a id="schema_IosModel"></a>
<a id="tocSiosmodel"></a>
<a id="tocsiosmodel"></a>

```json
{
  "deviceCapabilities": [
    "string"
  ],
  "formFactor": "DEVICE_FORM_FACTOR_UNSPECIFIED",
  "id": "string",
  "name": "string",
  "perVersionInfo": [
    {
      "deviceCapacity": "DEVICE_CAPACITY_UNSPECIFIED",
      "versionId": "string"
    }
  ],
  "screenDensity": 0,
  "screenX": 0,
  "screenY": 0,
  "supportedVersionIds": [
    "string"
  ],
  "tags": [
    "string"
  ]
}
```

A description of an iOS device tests may be run on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceCapabilities|[string]|false|none|Device capabilities. Copied from https://developer.apple.com/library/archive/documentation/DeviceInformation/Reference/iOSDeviceCompatibility/DeviceCompatibilityMatrix/DeviceCompatibilityMatrix.html|
|formFactor|string|false|none|Whether this device is a phone, tablet, wearable, etc.|
|id|string|false|none|The unique opaque id for this model. Use this for invoking the TestExecutionService.|
|name|string|false|none|The human-readable name for this device model. Examples: "iPhone 4s", "iPad Mini 2".|
|perVersionInfo|[[PerIosVersionInfo](#schemaperiosversioninfo)]|false|none|Version-specific information of an iOS model.|
|screenDensity|integer(int32)|false|none|Screen density in DPI.|
|screenX|integer(int32)|false|none|Screen size in the horizontal (X) dimension measured in pixels.|
|screenY|integer(int32)|false|none|Screen size in the vertical (Y) dimension measured in pixels.|
|supportedVersionIds|[string]|false|none|The set of iOS major software versions this device supports.|
|tags|[string]|false|none|Tags for this dimension. Examples: "default", "preview", "deprecated".|

#### Enumerated Values

|Property|Value|
|---|---|
|formFactor|DEVICE_FORM_FACTOR_UNSPECIFIED|
|formFactor|PHONE|
|formFactor|TABLET|
|formFactor|WEARABLE|

<h2 id="tocS_IosRuntimeConfiguration">IosRuntimeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaiosruntimeconfiguration"></a>
<a id="schema_IosRuntimeConfiguration"></a>
<a id="tocSiosruntimeconfiguration"></a>
<a id="tocsiosruntimeconfiguration"></a>

```json
{
  "locales": [
    {
      "id": "string",
      "name": "string",
      "region": "string",
      "tags": [
        "string"
      ]
    }
  ],
  "orientations": [
    {
      "id": "string",
      "name": "string",
      "tags": [
        "string"
      ]
    }
  ]
}
```

iOS configuration that can be selected at the time a test is run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locales|[[Locale](#schemalocale)]|false|none|The set of available locales.|
|orientations|[[Orientation](#schemaorientation)]|false|none|The set of available orientations.|

<h2 id="tocS_IosTestLoop">IosTestLoop</h2>
<!-- backwards compatibility -->
<a id="schemaiostestloop"></a>
<a id="schema_IosTestLoop"></a>
<a id="tocSiostestloop"></a>
<a id="tocsiostestloop"></a>

```json
{
  "appBundleId": "string",
  "appIpa": {
    "gcsPath": "string"
  },
  "scenarios": [
    0
  ]
}
```

A test of an iOS application that implements one or more game loop scenarios. This test type accepts an archived application (.ipa file) and a list of integer scenarios that will be executed on the app sequentially.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appBundleId|string|false|none|Output only. The bundle id for the application under test.|
|appIpa|[FileReference](#schemafilereference)|false|none|Required. The .ipa of the application to test.|
|scenarios|[integer(int32)]|false|none|The list of scenarios that should be run during the test. Defaults to the single scenario 0 if unspecified.|

<h2 id="tocS_IosTestSetup">IosTestSetup</h2>
<!-- backwards compatibility -->
<a id="schemaiostestsetup"></a>
<a id="schema_IosTestSetup"></a>
<a id="tocSiostestsetup"></a>
<a id="tocsiostestsetup"></a>

```json
{
  "additionalIpas": [
    {
      "gcsPath": "string"
    }
  ],
  "networkProfile": "string",
  "pullDirectories": [
    {
      "bundleId": "string",
      "content": {
        "gcsPath": "string"
      },
      "devicePath": "string"
    }
  ],
  "pushFiles": [
    {
      "bundleId": "string",
      "content": {
        "gcsPath": "string"
      },
      "devicePath": "string"
    }
  ]
}
```

A description of how to set up an iOS device prior to running the test.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalIpas|[[FileReference](#schemafilereference)]|false|none|iOS apps to install in addition to those being directly tested.|
|networkProfile|string|false|none|The network traffic profile used for running the test. Available network profiles can be queried by using the NETWORK_CONFIGURATION environment type when calling TestEnvironmentDiscoveryService.GetTestEnvironmentCatalog.|
|pullDirectories|[[IosDeviceFile](#schemaiosdevicefile)]|false|none|List of directories on the device to upload to Cloud Storage at the end of the test. Directories should either be in a shared directory (such as /private/var/mobile/Media) or within an accessible directory inside the app's filesystem (such as /Documents) by specifying the bundle ID.|
|pushFiles|[[IosDeviceFile](#schemaiosdevicefile)]|false|none|List of files to push to the device before starting the test.|

<h2 id="tocS_IosVersion">IosVersion</h2>
<!-- backwards compatibility -->
<a id="schemaiosversion"></a>
<a id="schema_IosVersion"></a>
<a id="tocSiosversion"></a>
<a id="tocsiosversion"></a>

```json
{
  "id": "string",
  "majorVersion": 0,
  "minorVersion": 0,
  "supportedXcodeVersionIds": [
    "string"
  ],
  "tags": [
    "string"
  ]
}
```

An iOS version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|An opaque id for this iOS version. Use this id to invoke the TestExecutionService.|
|majorVersion|integer(int32)|false|none|An integer representing the major iOS version. Examples: "8", "9".|
|minorVersion|integer(int32)|false|none|An integer representing the minor iOS version. Examples: "1", "2".|
|supportedXcodeVersionIds|[string]|false|none|The available Xcode versions for this version.|
|tags|[string]|false|none|Tags for this dimension. Examples: "default", "preview", "deprecated".|

<h2 id="tocS_IosXcTest">IosXcTest</h2>
<!-- backwards compatibility -->
<a id="schemaiosxctest"></a>
<a id="schema_IosXcTest"></a>
<a id="tocSiosxctest"></a>
<a id="tocsiosxctest"></a>

```json
{
  "appBundleId": "string",
  "testSpecialEntitlements": true,
  "testsZip": {
    "gcsPath": "string"
  },
  "xcodeVersion": "string",
  "xctestrun": {
    "gcsPath": "string"
  }
}
```

A test of an iOS application that uses the XCTest framework. Xcode supports the option to "build for testing", which generates an .xctestrun file that contains a test specification (arguments, test methods, etc). This test type accepts a zip file containing the .xctestrun file and the corresponding contents of the Build/Products directory that contains all the binaries needed to run the tests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appBundleId|string|false|none|Output only. The bundle id for the application under test.|
|testSpecialEntitlements|boolean|false|none|The option to test special app entitlements. Setting this would re-sign the app having special entitlements with an explicit application-identifier. Currently supports testing aps-environment entitlement.|
|testsZip|[FileReference](#schemafilereference)|false|none|Required. The .zip containing the .xctestrun file and the contents of the DerivedData/Build/Products directory. The .xctestrun file in this zip is ignored if the xctestrun field is specified.|
|xcodeVersion|string|false|none|The Xcode version that should be used for the test. Use the TestEnvironmentDiscoveryService to get supported options. Defaults to the latest Xcode version Firebase Test Lab supports.|
|xctestrun|[FileReference](#schemafilereference)|false|none|An .xctestrun file that will override the .xctestrun file in the tests zip. Because the .xctestrun file contains environment variables along with test methods to run and/or ignore, this can be useful for sharding tests. Default is taken from the tests zip.|

<h2 id="tocS_LauncherActivityIntent">LauncherActivityIntent</h2>
<!-- backwards compatibility -->
<a id="schemalauncheractivityintent"></a>
<a id="schema_LauncherActivityIntent"></a>
<a id="tocSlauncheractivityintent"></a>
<a id="tocslauncheractivityintent"></a>

```json
{}
```

Specifies an intent that starts the main launcher activity.

<h2 id="tocS_Locale">Locale</h2>
<!-- backwards compatibility -->
<a id="schemalocale"></a>
<a id="schema_Locale"></a>
<a id="tocSlocale"></a>
<a id="tocslocale"></a>

```json
{
  "id": "string",
  "name": "string",
  "region": "string",
  "tags": [
    "string"
  ]
}
```

A location/region designation for language.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The id for this locale. Example: "en_US".|
|name|string|false|none|A human-friendly name for this language/locale. Example: "English".|
|region|string|false|none|A human-friendly string representing the region for this locale. Example: "United States". Not present for every locale.|
|tags|[string]|false|none|Tags for this dimension. Example: "default".|

<h2 id="tocS_ManualSharding">ManualSharding</h2>
<!-- backwards compatibility -->
<a id="schemamanualsharding"></a>
<a id="schema_ManualSharding"></a>
<a id="tocSmanualsharding"></a>
<a id="tocsmanualsharding"></a>

```json
{
  "testTargetsForShard": [
    {
      "testTargets": [
        "string"
      ]
    }
  ]
}
```

Shards test cases into the specified groups of packages, classes, and/or methods. With manual sharding enabled, specifying test targets via environment_variables or in InstrumentationTest is invalid.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|testTargetsForShard|[[TestTargetsForShard](#schematesttargetsforshard)]|false|none|Required. Group of packages, classes, and/or test methods to be run for each manually-created shard. You must specify at least one shard if this field is present. When you select one or more physical devices, the number of repeated test_targets_for_shard must be <= 50. When you select one or more ARM virtual devices, it must be <= 100. When you select only x86 virtual devices, it must be <= 500.|

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

A tag within a manifest. https://developer.android.com/guide/topics/manifest/meta-data-element.html

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The android:name value|
|value|string|false|none|The android:value value|

<h2 id="tocS_NetworkConfiguration">NetworkConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemanetworkconfiguration"></a>
<a id="schema_NetworkConfiguration"></a>
<a id="tocSnetworkconfiguration"></a>
<a id="tocsnetworkconfiguration"></a>

```json
{
  "downRule": {
    "bandwidth": 0,
    "burst": 0,
    "delay": "string",
    "packetDuplicationRatio": 0,
    "packetLossRatio": 0
  },
  "id": "string",
  "upRule": {
    "bandwidth": 0,
    "burst": 0,
    "delay": "string",
    "packetDuplicationRatio": 0,
    "packetLossRatio": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|downRule|[TrafficRule](#schematrafficrule)|false|none|The emulation rule applying to the download traffic.|
|id|string|false|none|The unique opaque id for this network traffic configuration.|
|upRule|[TrafficRule](#schematrafficrule)|false|none|The emulation rule applying to the upload traffic.|

<h2 id="tocS_NetworkConfigurationCatalog">NetworkConfigurationCatalog</h2>
<!-- backwards compatibility -->
<a id="schemanetworkconfigurationcatalog"></a>
<a id="schema_NetworkConfigurationCatalog"></a>
<a id="tocSnetworkconfigurationcatalog"></a>
<a id="tocsnetworkconfigurationcatalog"></a>

```json
{
  "configurations": [
    {
      "downRule": {
        "bandwidth": 0,
        "burst": 0,
        "delay": "string",
        "packetDuplicationRatio": 0,
        "packetLossRatio": 0
      },
      "id": "string",
      "upRule": {
        "bandwidth": 0,
        "burst": 0,
        "delay": "string",
        "packetDuplicationRatio": 0,
        "packetLossRatio": 0
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurations|[[NetworkConfiguration](#schemanetworkconfiguration)]|false|none|none|

<h2 id="tocS_ObbFile">ObbFile</h2>
<!-- backwards compatibility -->
<a id="schemaobbfile"></a>
<a id="schema_ObbFile"></a>
<a id="tocSobbfile"></a>
<a id="tocsobbfile"></a>

```json
{
  "obb": {
    "gcsPath": "string"
  },
  "obbFileName": "string"
}
```

An opaque binary blob file to install on the device before the test starts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|obb|[FileReference](#schemafilereference)|false|none|Required. Opaque Binary Blob (OBB) file(s) to install on the device.|
|obbFileName|string|false|none|Required. OBB file name which must conform to the format as specified by Android e.g. [main\|patch].0300110.com.example.android.obb which will be installed into \/Android/obb/\/ on the device.|

<h2 id="tocS_Orientation">Orientation</h2>
<!-- backwards compatibility -->
<a id="schemaorientation"></a>
<a id="schema_Orientation"></a>
<a id="tocSorientation"></a>
<a id="tocsorientation"></a>

```json
{
  "id": "string",
  "name": "string",
  "tags": [
    "string"
  ]
}
```

Screen orientation of the device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The id for this orientation. Example: "portrait".|
|name|string|false|none|A human-friendly name for this orientation. Example: "portrait".|
|tags|[string]|false|none|Tags for this dimension. Example: "default".|

<h2 id="tocS_PerAndroidVersionInfo">PerAndroidVersionInfo</h2>
<!-- backwards compatibility -->
<a id="schemaperandroidversioninfo"></a>
<a id="schema_PerAndroidVersionInfo"></a>
<a id="tocSperandroidversioninfo"></a>
<a id="tocsperandroidversioninfo"></a>

```json
{
  "deviceCapacity": "DEVICE_CAPACITY_UNSPECIFIED",
  "versionId": "string"
}
```

A version-specific information of an Android model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceCapacity|string|false|none|The number of online devices for an Android version.|
|versionId|string|false|none|An Android version.|

#### Enumerated Values

|Property|Value|
|---|---|
|deviceCapacity|DEVICE_CAPACITY_UNSPECIFIED|
|deviceCapacity|DEVICE_CAPACITY_HIGH|
|deviceCapacity|DEVICE_CAPACITY_MEDIUM|
|deviceCapacity|DEVICE_CAPACITY_LOW|
|deviceCapacity|DEVICE_CAPACITY_NONE|

<h2 id="tocS_PerIosVersionInfo">PerIosVersionInfo</h2>
<!-- backwards compatibility -->
<a id="schemaperiosversioninfo"></a>
<a id="schema_PerIosVersionInfo"></a>
<a id="tocSperiosversioninfo"></a>
<a id="tocsperiosversioninfo"></a>

```json
{
  "deviceCapacity": "DEVICE_CAPACITY_UNSPECIFIED",
  "versionId": "string"
}
```

A version-specific information of an iOS model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceCapacity|string|false|none|The number of online devices for an iOS version.|
|versionId|string|false|none|An iOS version.|

#### Enumerated Values

|Property|Value|
|---|---|
|deviceCapacity|DEVICE_CAPACITY_UNSPECIFIED|
|deviceCapacity|DEVICE_CAPACITY_HIGH|
|deviceCapacity|DEVICE_CAPACITY_MEDIUM|
|deviceCapacity|DEVICE_CAPACITY_LOW|
|deviceCapacity|DEVICE_CAPACITY_NONE|

<h2 id="tocS_ProvidedSoftwareCatalog">ProvidedSoftwareCatalog</h2>
<!-- backwards compatibility -->
<a id="schemaprovidedsoftwarecatalog"></a>
<a id="schema_ProvidedSoftwareCatalog"></a>
<a id="tocSprovidedsoftwarecatalog"></a>
<a id="tocsprovidedsoftwarecatalog"></a>

```json
{
  "androidxOrchestratorVersion": "string",
  "orchestratorVersion": "string"
}
```

The currently provided software environment on the devices under test.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|androidxOrchestratorVersion|string|false|none|A string representing the current version of AndroidX Test Orchestrator that is used in the environment. The package is available at https://maven.google.com/web/index.html#androidx.test:orchestrator.|
|orchestratorVersion|string|false|none|Deprecated: Use AndroidX Test Orchestrator going forward. A string representing the current version of Android Test Orchestrator that is used in the environment. The package is available at https://maven.google.com/web/index.html#com.android.support.test:orchestrator.|

<h2 id="tocS_RegularFile">RegularFile</h2>
<!-- backwards compatibility -->
<a id="schemaregularfile"></a>
<a id="schema_RegularFile"></a>
<a id="tocSregularfile"></a>
<a id="tocsregularfile"></a>

```json
{
  "content": {
    "gcsPath": "string"
  },
  "devicePath": "string"
}
```

A file or directory to install on the device before the test starts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[FileReference](#schemafilereference)|false|none|Required. The source file.|
|devicePath|string|false|none|Required. Where to put the content on the device. Must be an absolute, allowlisted path. If the file exists, it will be replaced. The following device-side directories and any of their subdirectories are allowlisted: ${EXTERNAL_STORAGE}, /sdcard, or /storage ${ANDROID_DATA}/local/tmp, or /data/local/tmp Specifying a path outside of these directory trees is invalid. The paths /sdcard and /data will be made available and treated as implicit path substitutions. E.g. if /sdcard on a particular device does not map to external storage, the system will replace it with the external storage path prefix for that device and copy the file there. It is strongly advised to use the Environment API in app and test code to access files on the device in a portable way.|

<h2 id="tocS_ResultStorage">ResultStorage</h2>
<!-- backwards compatibility -->
<a id="schemaresultstorage"></a>
<a id="schema_ResultStorage"></a>
<a id="tocSresultstorage"></a>
<a id="tocsresultstorage"></a>

```json
{
  "googleCloudStorage": {
    "gcsPath": "string"
  },
  "resultsUrl": "string",
  "toolResultsExecution": {
    "executionId": "string",
    "historyId": "string",
    "projectId": "string"
  },
  "toolResultsHistory": {
    "historyId": "string",
    "projectId": "string"
  }
}
```

Locations where the results of running the test are stored.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|googleCloudStorage|[GoogleCloudStorage](#schemagooglecloudstorage)|false|none|Required.|
|resultsUrl|string|false|none|Output only. URL to the results in the Firebase Web Console.|
|toolResultsExecution|[ToolResultsExecution](#schematoolresultsexecution)|false|none|Output only. The tool results execution that results are written to.|
|toolResultsHistory|[ToolResultsHistory](#schematoolresultshistory)|false|none|The tool results history that contains the tool results execution that results are written to. If not provided, the service will choose an appropriate value.|

<h2 id="tocS_RoboDirective">RoboDirective</h2>
<!-- backwards compatibility -->
<a id="schemarobodirective"></a>
<a id="schema_RoboDirective"></a>
<a id="tocSrobodirective"></a>
<a id="tocsrobodirective"></a>

```json
{
  "actionType": "ACTION_TYPE_UNSPECIFIED",
  "inputText": "string",
  "resourceName": "string"
}
```

Directs Robo to interact with a specific UI element if it is encountered during the crawl. Currently, Robo can perform text entry or element click.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionType|string|false|none|Required. The type of action that Robo should perform on the specified element.|
|inputText|string|false|none|The text that Robo is directed to set. If left empty, the directive will be treated as a CLICK on the element matching the resource_name.|
|resourceName|string|false|none|Required. The android resource name of the target UI element. For example, in Java: R.string.foo in xml: @string/foo Only the "foo" part is needed. Reference doc: https://developer.android.com/guide/topics/resources/accessing-resources.html|

#### Enumerated Values

|Property|Value|
|---|---|
|actionType|ACTION_TYPE_UNSPECIFIED|
|actionType|SINGLE_CLICK|
|actionType|ENTER_TEXT|
|actionType|IGNORE|

<h2 id="tocS_RoboStartingIntent">RoboStartingIntent</h2>
<!-- backwards compatibility -->
<a id="schemarobostartingintent"></a>
<a id="schema_RoboStartingIntent"></a>
<a id="tocSrobostartingintent"></a>
<a id="tocsrobostartingintent"></a>

```json
{
  "launcherActivity": {},
  "startActivity": {
    "action": "string",
    "categories": [
      "string"
    ],
    "uri": "string"
  },
  "timeout": "string"
}
```

Message for specifying the start activities to crawl.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|launcherActivity|[LauncherActivityIntent](#schemalauncheractivityintent)|false|none|An intent that starts the main launcher activity.|
|startActivity|[StartActivityIntent](#schemastartactivityintent)|false|none|An intent that starts an activity with specific details.|
|timeout|string(google-duration)|false|none|Timeout in seconds for each intent.|

<h2 id="tocS_Shard">Shard</h2>
<!-- backwards compatibility -->
<a id="schemashard"></a>
<a id="schema_Shard"></a>
<a id="tocSshard"></a>
<a id="tocsshard"></a>

```json
{
  "numShards": 0,
  "shardIndex": 0,
  "testTargetsForShard": {
    "testTargets": [
      "string"
    ]
  }
}
```

Output only. Details about the shard.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numShards|integer(int32)|false|none|Output only. The total number of shards.|
|shardIndex|integer(int32)|false|none|Output only. The index of the shard among all the shards.|
|testTargetsForShard|[TestTargetsForShard](#schematesttargetsforshard)|false|none|Output only. Test targets for each shard. Only set for manual sharding.|

<h2 id="tocS_ShardingOption">ShardingOption</h2>
<!-- backwards compatibility -->
<a id="schemashardingoption"></a>
<a id="schema_ShardingOption"></a>
<a id="tocSshardingoption"></a>
<a id="tocsshardingoption"></a>

```json
{
  "manualSharding": {
    "testTargetsForShard": [
      {
        "testTargets": [
          "string"
        ]
      }
    ]
  },
  "uniformSharding": {
    "numShards": 0
  }
}
```

Options for enabling sharding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|manualSharding|[ManualSharding](#schemamanualsharding)|false|none|Shards test cases into the specified groups of packages, classes, and/or methods.|
|uniformSharding|[UniformSharding](#schemauniformsharding)|false|none|Uniformly shards test cases given a total number of shards.|

<h2 id="tocS_StartActivityIntent">StartActivityIntent</h2>
<!-- backwards compatibility -->
<a id="schemastartactivityintent"></a>
<a id="schema_StartActivityIntent"></a>
<a id="tocSstartactivityintent"></a>
<a id="tocsstartactivityintent"></a>

```json
{
  "action": "string",
  "categories": [
    "string"
  ],
  "uri": "string"
}
```

A starting intent specified by an action, uri, and categories.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|Action name. Required for START_ACTIVITY.|
|categories|[string]|false|none|Intent categories to set on the intent.|
|uri|string|false|none|URI for the action.|

<h2 id="tocS_SystraceSetup">SystraceSetup</h2>
<!-- backwards compatibility -->
<a id="schemasystracesetup"></a>
<a id="schema_SystraceSetup"></a>
<a id="tocSsystracesetup"></a>
<a id="tocssystracesetup"></a>

```json
{
  "durationSeconds": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|durationSeconds|integer(int32)|false|none|Systrace duration in seconds. Should be between 1 and 30 seconds. 0 disables systrace.|

<h2 id="tocS_TestDetails">TestDetails</h2>
<!-- backwards compatibility -->
<a id="schematestdetails"></a>
<a id="schema_TestDetails"></a>
<a id="tocStestdetails"></a>
<a id="tocstestdetails"></a>

```json
{
  "errorMessage": "string",
  "progressMessages": [
    "string"
  ]
}
```

Additional details about the progress of the running test.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorMessage|string|false|none|Output only. If the TestState is ERROR, then this string will contain human-readable details about the error.|
|progressMessages|[string]|false|none|Output only. Human-readable, detailed descriptions of the test's progress. For example: "Provisioning a device", "Starting Test". During the course of execution new data may be appended to the end of progress_messages.|

<h2 id="tocS_TestEnvironmentCatalog">TestEnvironmentCatalog</h2>
<!-- backwards compatibility -->
<a id="schematestenvironmentcatalog"></a>
<a id="schema_TestEnvironmentCatalog"></a>
<a id="tocStestenvironmentcatalog"></a>
<a id="tocstestenvironmentcatalog"></a>

```json
{
  "androidDeviceCatalog": {
    "models": [
      {
        "brand": "string",
        "codename": "string",
        "form": "DEVICE_FORM_UNSPECIFIED",
        "formFactor": "DEVICE_FORM_FACTOR_UNSPECIFIED",
        "id": "string",
        "lowFpsVideoRecording": true,
        "manufacturer": "string",
        "name": "string",
        "perVersionInfo": [
          {
            "deviceCapacity": "DEVICE_CAPACITY_UNSPECIFIED",
            "versionId": "string"
          }
        ],
        "screenDensity": 0,
        "screenX": 0,
        "screenY": 0,
        "supportedAbis": [
          "string"
        ],
        "supportedVersionIds": [
          "string"
        ],
        "tags": [
          "string"
        ],
        "thumbnailUrl": "string"
      }
    ],
    "runtimeConfiguration": {
      "locales": [
        {
          "id": "string",
          "name": "string",
          "region": "string",
          "tags": [
            "string"
          ]
        }
      ],
      "orientations": [
        {
          "id": "string",
          "name": "string",
          "tags": [
            "string"
          ]
        }
      ]
    },
    "versions": [
      {
        "apiLevel": 0,
        "codeName": "string",
        "distribution": {
          "marketShare": 0,
          "measurementTime": "string"
        },
        "id": "string",
        "releaseDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "tags": [
          "string"
        ],
        "versionString": "string"
      }
    ]
  },
  "deviceIpBlockCatalog": {
    "ipBlocks": [
      {
        "addedDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "block": "string",
        "form": "DEVICE_FORM_UNSPECIFIED"
      }
    ]
  },
  "iosDeviceCatalog": {
    "models": [
      {
        "deviceCapabilities": [
          "string"
        ],
        "formFactor": "DEVICE_FORM_FACTOR_UNSPECIFIED",
        "id": "string",
        "name": "string",
        "perVersionInfo": [
          {
            "deviceCapacity": "DEVICE_CAPACITY_UNSPECIFIED",
            "versionId": "string"
          }
        ],
        "screenDensity": 0,
        "screenX": 0,
        "screenY": 0,
        "supportedVersionIds": [
          "string"
        ],
        "tags": [
          "string"
        ]
      }
    ],
    "runtimeConfiguration": {
      "locales": [
        {
          "id": "string",
          "name": "string",
          "region": "string",
          "tags": [
            "string"
          ]
        }
      ],
      "orientations": [
        {
          "id": "string",
          "name": "string",
          "tags": [
            "string"
          ]
        }
      ]
    },
    "versions": [
      {
        "id": "string",
        "majorVersion": 0,
        "minorVersion": 0,
        "supportedXcodeVersionIds": [
          "string"
        ],
        "tags": [
          "string"
        ]
      }
    ],
    "xcodeVersions": [
      {
        "tags": [
          "string"
        ],
        "version": "string"
      }
    ]
  },
  "networkConfigurationCatalog": {
    "configurations": [
      {
        "downRule": {
          "bandwidth": 0,
          "burst": 0,
          "delay": "string",
          "packetDuplicationRatio": 0,
          "packetLossRatio": 0
        },
        "id": "string",
        "upRule": {
          "bandwidth": 0,
          "burst": 0,
          "delay": "string",
          "packetDuplicationRatio": 0,
          "packetLossRatio": 0
        }
      }
    ]
  },
  "softwareCatalog": {
    "androidxOrchestratorVersion": "string",
    "orchestratorVersion": "string"
  }
}
```

A description of a test environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|androidDeviceCatalog|[AndroidDeviceCatalog](#schemaandroiddevicecatalog)|false|none|Supported Android devices.|
|deviceIpBlockCatalog|[DeviceIpBlockCatalog](#schemadeviceipblockcatalog)|false|none|The IP blocks used by devices in the test environment.|
|iosDeviceCatalog|[IosDeviceCatalog](#schemaiosdevicecatalog)|false|none|Supported iOS devices.|
|networkConfigurationCatalog|[NetworkConfigurationCatalog](#schemanetworkconfigurationcatalog)|false|none|Supported network configurations.|
|softwareCatalog|[ProvidedSoftwareCatalog](#schemaprovidedsoftwarecatalog)|false|none|The software test environment provided by TestExecutionService.|

<h2 id="tocS_TestExecution">TestExecution</h2>
<!-- backwards compatibility -->
<a id="schematestexecution"></a>
<a id="schema_TestExecution"></a>
<a id="tocStestexecution"></a>
<a id="tocstestexecution"></a>

```json
{
  "environment": {
    "androidDevice": {
      "androidModelId": "string",
      "androidVersionId": "string",
      "locale": "string",
      "orientation": "string"
    },
    "iosDevice": {
      "iosModelId": "string",
      "iosVersionId": "string",
      "locale": "string",
      "orientation": "string"
    }
  },
  "id": "string",
  "matrixId": "string",
  "projectId": "string",
  "shard": {
    "numShards": 0,
    "shardIndex": 0,
    "testTargetsForShard": {
      "testTargets": [
        "string"
      ]
    }
  },
  "state": "TEST_STATE_UNSPECIFIED",
  "testDetails": {
    "errorMessage": "string",
    "progressMessages": [
      "string"
    ]
  },
  "testSpecification": {
    "androidInstrumentationTest": {
      "appApk": {
        "gcsPath": "string"
      },
      "appBundle": {
        "bundleLocation": {
          "gcsPath": "string"
        }
      },
      "appPackageId": "string",
      "orchestratorOption": "ORCHESTRATOR_OPTION_UNSPECIFIED",
      "shardingOption": {
        "manualSharding": {
          "testTargetsForShard": [
            {
              "testTargets": [
                "string"
              ]
            }
          ]
        },
        "uniformSharding": {
          "numShards": 0
        }
      },
      "testApk": {
        "gcsPath": "string"
      },
      "testPackageId": "string",
      "testRunnerClass": "string",
      "testTargets": [
        "string"
      ]
    },
    "androidRoboTest": {
      "appApk": {
        "gcsPath": "string"
      },
      "appBundle": {
        "bundleLocation": {
          "gcsPath": "string"
        }
      },
      "appInitialActivity": "string",
      "appPackageId": "string",
      "maxDepth": 0,
      "maxSteps": 0,
      "roboDirectives": [
        {
          "actionType": "ACTION_TYPE_UNSPECIFIED",
          "inputText": "string",
          "resourceName": "string"
        }
      ],
      "roboMode": "ROBO_MODE_UNSPECIFIED",
      "roboScript": {
        "gcsPath": "string"
      },
      "startingIntents": [
        {
          "launcherActivity": {},
          "startActivity": {
            "action": "string",
            "categories": [
              "string"
            ],
            "uri": "string"
          },
          "timeout": "string"
        }
      ]
    },
    "androidTestLoop": {
      "appApk": {
        "gcsPath": "string"
      },
      "appBundle": {
        "bundleLocation": {
          "gcsPath": "string"
        }
      },
      "appPackageId": "string",
      "scenarioLabels": [
        "string"
      ],
      "scenarios": [
        0
      ]
    },
    "disablePerformanceMetrics": true,
    "disableVideoRecording": true,
    "iosTestLoop": {
      "appBundleId": "string",
      "appIpa": {
        "gcsPath": "string"
      },
      "scenarios": [
        0
      ]
    },
    "iosTestSetup": {
      "additionalIpas": [
        {
          "gcsPath": "string"
        }
      ],
      "networkProfile": "string",
      "pullDirectories": [
        {
          "bundleId": "string",
          "content": {
            "gcsPath": "string"
          },
          "devicePath": "string"
        }
      ],
      "pushFiles": [
        {
          "bundleId": "string",
          "content": {
            "gcsPath": "string"
          },
          "devicePath": "string"
        }
      ]
    },
    "iosXcTest": {
      "appBundleId": "string",
      "testSpecialEntitlements": true,
      "testsZip": {
        "gcsPath": "string"
      },
      "xcodeVersion": "string",
      "xctestrun": {
        "gcsPath": "string"
      }
    },
    "testSetup": {
      "account": {
        "googleAuto": {}
      },
      "additionalApks": [
        {
          "location": {
            "gcsPath": "string"
          },
          "packageName": "string"
        }
      ],
      "directoriesToPull": [
        "string"
      ],
      "dontAutograntPermissions": true,
      "environmentVariables": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "filesToPush": [
        {
          "obbFile": {
            "obb": {
              "gcsPath": "string"
            },
            "obbFileName": "string"
          },
          "regularFile": {
            "content": {
              "gcsPath": "string"
            },
            "devicePath": "string"
          }
        }
      ],
      "networkProfile": "string",
      "systrace": {
        "durationSeconds": 0
      }
    },
    "testTimeout": "string"
  },
  "timestamp": "string",
  "toolResultsStep": {
    "executionId": "string",
    "historyId": "string",
    "projectId": "string",
    "stepId": "string"
  }
}
```

A single test executed in a single environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environment|[Environment](#schemaenvironment)|false|none|Output only. How the host machine(s) are configured.|
|id|string|false|none|Output only. Unique id set by the service.|
|matrixId|string|false|none|Output only. Id of the containing TestMatrix.|
|projectId|string|false|none|Output only. The cloud project that owns the test execution.|
|shard|[Shard](#schemashard)|false|none|Output only. Details about the shard.|
|state|string|false|none|Output only. Indicates the current progress of the test execution (e.g., FINISHED).|
|testDetails|[TestDetails](#schematestdetails)|false|none|Output only. Additional details about the running test.|
|testSpecification|[TestSpecification](#schematestspecification)|false|none|Output only. How to run the test.|
|timestamp|string(google-datetime)|false|none|Output only. The time this test execution was initially created.|
|toolResultsStep|[ToolResultsStep](#schematoolresultsstep)|false|none|Output only. Where the results for this execution are written.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|TEST_STATE_UNSPECIFIED|
|state|VALIDATING|
|state|PENDING|
|state|RUNNING|
|state|FINISHED|
|state|ERROR|
|state|UNSUPPORTED_ENVIRONMENT|
|state|INCOMPATIBLE_ENVIRONMENT|
|state|INCOMPATIBLE_ARCHITECTURE|
|state|CANCELLED|
|state|INVALID|

<h2 id="tocS_TestMatrix">TestMatrix</h2>
<!-- backwards compatibility -->
<a id="schematestmatrix"></a>
<a id="schema_TestMatrix"></a>
<a id="tocStestmatrix"></a>
<a id="tocstestmatrix"></a>

```json
{
  "clientInfo": {
    "clientInfoDetails": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "name": "string"
  },
  "environmentMatrix": {
    "androidDeviceList": {
      "androidDevices": [
        {
          "androidModelId": "string",
          "androidVersionId": "string",
          "locale": "string",
          "orientation": "string"
        }
      ]
    },
    "androidMatrix": {
      "androidModelIds": [
        "string"
      ],
      "androidVersionIds": [
        "string"
      ],
      "locales": [
        "string"
      ],
      "orientations": [
        "string"
      ]
    },
    "iosDeviceList": {
      "iosDevices": [
        {
          "iosModelId": "string",
          "iosVersionId": "string",
          "locale": "string",
          "orientation": "string"
        }
      ]
    }
  },
  "failFast": true,
  "flakyTestAttempts": 0,
  "invalidMatrixDetails": "INVALID_MATRIX_DETAILS_UNSPECIFIED",
  "outcomeSummary": "OUTCOME_SUMMARY_UNSPECIFIED",
  "projectId": "string",
  "resultStorage": {
    "googleCloudStorage": {
      "gcsPath": "string"
    },
    "resultsUrl": "string",
    "toolResultsExecution": {
      "executionId": "string",
      "historyId": "string",
      "projectId": "string"
    },
    "toolResultsHistory": {
      "historyId": "string",
      "projectId": "string"
    }
  },
  "state": "TEST_STATE_UNSPECIFIED",
  "testExecutions": [
    {
      "environment": {
        "androidDevice": {
          "androidModelId": "string",
          "androidVersionId": "string",
          "locale": "string",
          "orientation": "string"
        },
        "iosDevice": {
          "iosModelId": "string",
          "iosVersionId": "string",
          "locale": "string",
          "orientation": "string"
        }
      },
      "id": "string",
      "matrixId": "string",
      "projectId": "string",
      "shard": {
        "numShards": 0,
        "shardIndex": 0,
        "testTargetsForShard": {
          "testTargets": [
            "string"
          ]
        }
      },
      "state": "TEST_STATE_UNSPECIFIED",
      "testDetails": {
        "errorMessage": "string",
        "progressMessages": [
          "string"
        ]
      },
      "testSpecification": {
        "androidInstrumentationTest": {
          "appApk": {
            "gcsPath": "string"
          },
          "appBundle": {
            "bundleLocation": {
              "gcsPath": "string"
            }
          },
          "appPackageId": "string",
          "orchestratorOption": "ORCHESTRATOR_OPTION_UNSPECIFIED",
          "shardingOption": {
            "manualSharding": {
              "testTargetsForShard": [
                {
                  "testTargets": [
                    "string"
                  ]
                }
              ]
            },
            "uniformSharding": {
              "numShards": 0
            }
          },
          "testApk": {
            "gcsPath": "string"
          },
          "testPackageId": "string",
          "testRunnerClass": "string",
          "testTargets": [
            "string"
          ]
        },
        "androidRoboTest": {
          "appApk": {
            "gcsPath": "string"
          },
          "appBundle": {
            "bundleLocation": {
              "gcsPath": "string"
            }
          },
          "appInitialActivity": "string",
          "appPackageId": "string",
          "maxDepth": 0,
          "maxSteps": 0,
          "roboDirectives": [
            {
              "actionType": "ACTION_TYPE_UNSPECIFIED",
              "inputText": "string",
              "resourceName": "string"
            }
          ],
          "roboMode": "ROBO_MODE_UNSPECIFIED",
          "roboScript": {
            "gcsPath": "string"
          },
          "startingIntents": [
            {
              "launcherActivity": {},
              "startActivity": {
                "action": "string",
                "categories": [
                  "string"
                ],
                "uri": "string"
              },
              "timeout": "string"
            }
          ]
        },
        "androidTestLoop": {
          "appApk": {
            "gcsPath": "string"
          },
          "appBundle": {
            "bundleLocation": {
              "gcsPath": "string"
            }
          },
          "appPackageId": "string",
          "scenarioLabels": [
            "string"
          ],
          "scenarios": [
            0
          ]
        },
        "disablePerformanceMetrics": true,
        "disableVideoRecording": true,
        "iosTestLoop": {
          "appBundleId": "string",
          "appIpa": {
            "gcsPath": "string"
          },
          "scenarios": [
            0
          ]
        },
        "iosTestSetup": {
          "additionalIpas": [
            {
              "gcsPath": "string"
            }
          ],
          "networkProfile": "string",
          "pullDirectories": [
            {
              "bundleId": "string",
              "content": {
                "gcsPath": "string"
              },
              "devicePath": "string"
            }
          ],
          "pushFiles": [
            {
              "bundleId": "string",
              "content": {
                "gcsPath": "string"
              },
              "devicePath": "string"
            }
          ]
        },
        "iosXcTest": {
          "appBundleId": "string",
          "testSpecialEntitlements": true,
          "testsZip": {
            "gcsPath": "string"
          },
          "xcodeVersion": "string",
          "xctestrun": {
            "gcsPath": "string"
          }
        },
        "testSetup": {
          "account": {
            "googleAuto": {}
          },
          "additionalApks": [
            {
              "location": {
                "gcsPath": "string"
              },
              "packageName": "string"
            }
          ],
          "directoriesToPull": [
            "string"
          ],
          "dontAutograntPermissions": true,
          "environmentVariables": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "filesToPush": [
            {
              "obbFile": {
                "obb": {
                  "gcsPath": "string"
                },
                "obbFileName": "string"
              },
              "regularFile": {
                "content": {
                  "gcsPath": "string"
                },
                "devicePath": "string"
              }
            }
          ],
          "networkProfile": "string",
          "systrace": {
            "durationSeconds": 0
          }
        },
        "testTimeout": "string"
      },
      "timestamp": "string",
      "toolResultsStep": {
        "executionId": "string",
        "historyId": "string",
        "projectId": "string",
        "stepId": "string"
      }
    }
  ],
  "testMatrixId": "string",
  "testSpecification": {
    "androidInstrumentationTest": {
      "appApk": {
        "gcsPath": "string"
      },
      "appBundle": {
        "bundleLocation": {
          "gcsPath": "string"
        }
      },
      "appPackageId": "string",
      "orchestratorOption": "ORCHESTRATOR_OPTION_UNSPECIFIED",
      "shardingOption": {
        "manualSharding": {
          "testTargetsForShard": [
            {
              "testTargets": [
                "string"
              ]
            }
          ]
        },
        "uniformSharding": {
          "numShards": 0
        }
      },
      "testApk": {
        "gcsPath": "string"
      },
      "testPackageId": "string",
      "testRunnerClass": "string",
      "testTargets": [
        "string"
      ]
    },
    "androidRoboTest": {
      "appApk": {
        "gcsPath": "string"
      },
      "appBundle": {
        "bundleLocation": {
          "gcsPath": "string"
        }
      },
      "appInitialActivity": "string",
      "appPackageId": "string",
      "maxDepth": 0,
      "maxSteps": 0,
      "roboDirectives": [
        {
          "actionType": "ACTION_TYPE_UNSPECIFIED",
          "inputText": "string",
          "resourceName": "string"
        }
      ],
      "roboMode": "ROBO_MODE_UNSPECIFIED",
      "roboScript": {
        "gcsPath": "string"
      },
      "startingIntents": [
        {
          "launcherActivity": {},
          "startActivity": {
            "action": "string",
            "categories": [
              "string"
            ],
            "uri": "string"
          },
          "timeout": "string"
        }
      ]
    },
    "androidTestLoop": {
      "appApk": {
        "gcsPath": "string"
      },
      "appBundle": {
        "bundleLocation": {
          "gcsPath": "string"
        }
      },
      "appPackageId": "string",
      "scenarioLabels": [
        "string"
      ],
      "scenarios": [
        0
      ]
    },
    "disablePerformanceMetrics": true,
    "disableVideoRecording": true,
    "iosTestLoop": {
      "appBundleId": "string",
      "appIpa": {
        "gcsPath": "string"
      },
      "scenarios": [
        0
      ]
    },
    "iosTestSetup": {
      "additionalIpas": [
        {
          "gcsPath": "string"
        }
      ],
      "networkProfile": "string",
      "pullDirectories": [
        {
          "bundleId": "string",
          "content": {
            "gcsPath": "string"
          },
          "devicePath": "string"
        }
      ],
      "pushFiles": [
        {
          "bundleId": "string",
          "content": {
            "gcsPath": "string"
          },
          "devicePath": "string"
        }
      ]
    },
    "iosXcTest": {
      "appBundleId": "string",
      "testSpecialEntitlements": true,
      "testsZip": {
        "gcsPath": "string"
      },
      "xcodeVersion": "string",
      "xctestrun": {
        "gcsPath": "string"
      }
    },
    "testSetup": {
      "account": {
        "googleAuto": {}
      },
      "additionalApks": [
        {
          "location": {
            "gcsPath": "string"
          },
          "packageName": "string"
        }
      ],
      "directoriesToPull": [
        "string"
      ],
      "dontAutograntPermissions": true,
      "environmentVariables": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "filesToPush": [
        {
          "obbFile": {
            "obb": {
              "gcsPath": "string"
            },
            "obbFileName": "string"
          },
          "regularFile": {
            "content": {
              "gcsPath": "string"
            },
            "devicePath": "string"
          }
        }
      ],
      "networkProfile": "string",
      "systrace": {
        "durationSeconds": 0
      }
    },
    "testTimeout": "string"
  },
  "timestamp": "string"
}
```

TestMatrix captures all details about a test. It contains the environment configuration, test specification, test executions and overall state and outcome.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientInfo|[ClientInfo](#schemaclientinfo)|false|none|Information about the client which invoked the test.|
|environmentMatrix|[EnvironmentMatrix](#schemaenvironmentmatrix)|false|none|Required. The devices the tests are being executed on.|
|failFast|boolean|false|none|If true, only a single attempt at most will be made to run each execution/shard in the matrix. Flaky test attempts are not affected. Normally, 2 or more attempts are made if a potential infrastructure issue is detected. This feature is for latency sensitive workloads. The incidence of execution failures may be significantly greater for fail-fast matrices and support is more limited because of that expectation.|
|flakyTestAttempts|integer(int32)|false|none|The number of times a TestExecution should be re-attempted if one or more of its test cases fail for any reason. The maximum number of reruns allowed is 10. Default is 0, which implies no reruns.|
|invalidMatrixDetails|string|false|none|Output only. Describes why the matrix is considered invalid. Only useful for matrices in the INVALID state.|
|outcomeSummary|string|false|none|Output Only. The overall outcome of the test. Only set when the test matrix state is FINISHED.|
|projectId|string|false|none|The cloud project that owns the test matrix.|
|resultStorage|[ResultStorage](#schemaresultstorage)|false|none|Required. Where the results for the matrix are written.|
|state|string|false|none|Output only. Indicates the current progress of the test matrix.|
|testExecutions|[[TestExecution](#schematestexecution)]|false|none|Output only. The list of test executions that the service creates for this matrix.|
|testMatrixId|string|false|none|Output only. Unique id set by the service.|
|testSpecification|[TestSpecification](#schematestspecification)|false|none|Required. How to run the test.|
|timestamp|string(google-datetime)|false|none|Output only. The time this test matrix was initially created.|

#### Enumerated Values

|Property|Value|
|---|---|
|invalidMatrixDetails|INVALID_MATRIX_DETAILS_UNSPECIFIED|
|invalidMatrixDetails|DETAILS_UNAVAILABLE|
|invalidMatrixDetails|MALFORMED_APK|
|invalidMatrixDetails|MALFORMED_TEST_APK|
|invalidMatrixDetails|NO_MANIFEST|
|invalidMatrixDetails|NO_PACKAGE_NAME|
|invalidMatrixDetails|INVALID_PACKAGE_NAME|
|invalidMatrixDetails|TEST_SAME_AS_APP|
|invalidMatrixDetails|NO_INSTRUMENTATION|
|invalidMatrixDetails|NO_SIGNATURE|
|invalidMatrixDetails|INSTRUMENTATION_ORCHESTRATOR_INCOMPATIBLE|
|invalidMatrixDetails|NO_TEST_RUNNER_CLASS|
|invalidMatrixDetails|NO_LAUNCHER_ACTIVITY|
|invalidMatrixDetails|FORBIDDEN_PERMISSIONS|
|invalidMatrixDetails|INVALID_ROBO_DIRECTIVES|
|invalidMatrixDetails|INVALID_RESOURCE_NAME|
|invalidMatrixDetails|INVALID_DIRECTIVE_ACTION|
|invalidMatrixDetails|TEST_LOOP_INTENT_FILTER_NOT_FOUND|
|invalidMatrixDetails|SCENARIO_LABEL_NOT_DECLARED|
|invalidMatrixDetails|SCENARIO_LABEL_MALFORMED|
|invalidMatrixDetails|SCENARIO_NOT_DECLARED|
|invalidMatrixDetails|DEVICE_ADMIN_RECEIVER|
|invalidMatrixDetails|MALFORMED_XC_TEST_ZIP|
|invalidMatrixDetails|BUILT_FOR_IOS_SIMULATOR|
|invalidMatrixDetails|NO_TESTS_IN_XC_TEST_ZIP|
|invalidMatrixDetails|USE_DESTINATION_ARTIFACTS|
|invalidMatrixDetails|TEST_NOT_APP_HOSTED|
|invalidMatrixDetails|PLIST_CANNOT_BE_PARSED|
|invalidMatrixDetails|TEST_ONLY_APK|
|invalidMatrixDetails|MALFORMED_IPA|
|invalidMatrixDetails|MISSING_URL_SCHEME|
|invalidMatrixDetails|MALFORMED_APP_BUNDLE|
|invalidMatrixDetails|NO_CODE_APK|
|invalidMatrixDetails|INVALID_INPUT_APK|
|invalidMatrixDetails|INVALID_APK_PREVIEW_SDK|
|invalidMatrixDetails|MATRIX_TOO_LARGE|
|invalidMatrixDetails|TEST_QUOTA_EXCEEDED|
|invalidMatrixDetails|SERVICE_NOT_ACTIVATED|
|invalidMatrixDetails|UNKNOWN_PERMISSION_ERROR|
|outcomeSummary|OUTCOME_SUMMARY_UNSPECIFIED|
|outcomeSummary|SUCCESS|
|outcomeSummary|FAILURE|
|outcomeSummary|INCONCLUSIVE|
|outcomeSummary|SKIPPED|
|state|TEST_STATE_UNSPECIFIED|
|state|VALIDATING|
|state|PENDING|
|state|RUNNING|
|state|FINISHED|
|state|ERROR|
|state|UNSUPPORTED_ENVIRONMENT|
|state|INCOMPATIBLE_ENVIRONMENT|
|state|INCOMPATIBLE_ARCHITECTURE|
|state|CANCELLED|
|state|INVALID|

<h2 id="tocS_TestSetup">TestSetup</h2>
<!-- backwards compatibility -->
<a id="schematestsetup"></a>
<a id="schema_TestSetup"></a>
<a id="tocStestsetup"></a>
<a id="tocstestsetup"></a>

```json
{
  "account": {
    "googleAuto": {}
  },
  "additionalApks": [
    {
      "location": {
        "gcsPath": "string"
      },
      "packageName": "string"
    }
  ],
  "directoriesToPull": [
    "string"
  ],
  "dontAutograntPermissions": true,
  "environmentVariables": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "filesToPush": [
    {
      "obbFile": {
        "obb": {
          "gcsPath": "string"
        },
        "obbFileName": "string"
      },
      "regularFile": {
        "content": {
          "gcsPath": "string"
        },
        "devicePath": "string"
      }
    }
  ],
  "networkProfile": "string",
  "systrace": {
    "durationSeconds": 0
  }
}
```

A description of how to set up the Android device prior to running the test.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[Account](#schemaaccount)|false|none|The device will be logged in on this account for the duration of the test.|
|additionalApks|[[Apk](#schemaapk)]|false|none|APKs to install in addition to those being directly tested. Currently capped at 100.|
|directoriesToPull|[string]|false|none|List of directories on the device to upload to GCS at the end of the test; they must be absolute paths under /sdcard, /storage or /data/local/tmp. Path names are restricted to characters a-z A-Z 0-9 _ - . + and / Note: The paths /sdcard and /data will be made available and treated as implicit path substitutions. E.g. if /sdcard on a particular device does not map to external storage, the system will replace it with the external storage path prefix for that device.|
|dontAutograntPermissions|boolean|false|none|Whether to prevent all runtime permissions to be granted at app install|
|environmentVariables|[[EnvironmentVariable](#schemaenvironmentvariable)]|false|none|Environment variables to set for the test (only applicable for instrumentation tests).|
|filesToPush|[[DeviceFile](#schemadevicefile)]|false|none|List of files to push to the device before starting the test.|
|networkProfile|string|false|none|The network traffic profile used for running the test. Available network profiles can be queried by using the NETWORK_CONFIGURATION environment type when calling TestEnvironmentDiscoveryService.GetTestEnvironmentCatalog.|
|systrace|[SystraceSetup](#schemasystracesetup)|false|none|Systrace configuration for the run. Deprecated: Systrace used Python 2 which was sunsetted on 2020-01-01. Systrace is no longer supported in the Cloud Testing API, and no Systrace file will be provided in the results.|

<h2 id="tocS_TestSpecification">TestSpecification</h2>
<!-- backwards compatibility -->
<a id="schematestspecification"></a>
<a id="schema_TestSpecification"></a>
<a id="tocStestspecification"></a>
<a id="tocstestspecification"></a>

```json
{
  "androidInstrumentationTest": {
    "appApk": {
      "gcsPath": "string"
    },
    "appBundle": {
      "bundleLocation": {
        "gcsPath": "string"
      }
    },
    "appPackageId": "string",
    "orchestratorOption": "ORCHESTRATOR_OPTION_UNSPECIFIED",
    "shardingOption": {
      "manualSharding": {
        "testTargetsForShard": [
          {
            "testTargets": [
              "string"
            ]
          }
        ]
      },
      "uniformSharding": {
        "numShards": 0
      }
    },
    "testApk": {
      "gcsPath": "string"
    },
    "testPackageId": "string",
    "testRunnerClass": "string",
    "testTargets": [
      "string"
    ]
  },
  "androidRoboTest": {
    "appApk": {
      "gcsPath": "string"
    },
    "appBundle": {
      "bundleLocation": {
        "gcsPath": "string"
      }
    },
    "appInitialActivity": "string",
    "appPackageId": "string",
    "maxDepth": 0,
    "maxSteps": 0,
    "roboDirectives": [
      {
        "actionType": "ACTION_TYPE_UNSPECIFIED",
        "inputText": "string",
        "resourceName": "string"
      }
    ],
    "roboMode": "ROBO_MODE_UNSPECIFIED",
    "roboScript": {
      "gcsPath": "string"
    },
    "startingIntents": [
      {
        "launcherActivity": {},
        "startActivity": {
          "action": "string",
          "categories": [
            "string"
          ],
          "uri": "string"
        },
        "timeout": "string"
      }
    ]
  },
  "androidTestLoop": {
    "appApk": {
      "gcsPath": "string"
    },
    "appBundle": {
      "bundleLocation": {
        "gcsPath": "string"
      }
    },
    "appPackageId": "string",
    "scenarioLabels": [
      "string"
    ],
    "scenarios": [
      0
    ]
  },
  "disablePerformanceMetrics": true,
  "disableVideoRecording": true,
  "iosTestLoop": {
    "appBundleId": "string",
    "appIpa": {
      "gcsPath": "string"
    },
    "scenarios": [
      0
    ]
  },
  "iosTestSetup": {
    "additionalIpas": [
      {
        "gcsPath": "string"
      }
    ],
    "networkProfile": "string",
    "pullDirectories": [
      {
        "bundleId": "string",
        "content": {
          "gcsPath": "string"
        },
        "devicePath": "string"
      }
    ],
    "pushFiles": [
      {
        "bundleId": "string",
        "content": {
          "gcsPath": "string"
        },
        "devicePath": "string"
      }
    ]
  },
  "iosXcTest": {
    "appBundleId": "string",
    "testSpecialEntitlements": true,
    "testsZip": {
      "gcsPath": "string"
    },
    "xcodeVersion": "string",
    "xctestrun": {
      "gcsPath": "string"
    }
  },
  "testSetup": {
    "account": {
      "googleAuto": {}
    },
    "additionalApks": [
      {
        "location": {
          "gcsPath": "string"
        },
        "packageName": "string"
      }
    ],
    "directoriesToPull": [
      "string"
    ],
    "dontAutograntPermissions": true,
    "environmentVariables": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "filesToPush": [
      {
        "obbFile": {
          "obb": {
            "gcsPath": "string"
          },
          "obbFileName": "string"
        },
        "regularFile": {
          "content": {
            "gcsPath": "string"
          },
          "devicePath": "string"
        }
      }
    ],
    "networkProfile": "string",
    "systrace": {
      "durationSeconds": 0
    }
  },
  "testTimeout": "string"
}
```

A description of how to run the test.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|androidInstrumentationTest|[AndroidInstrumentationTest](#schemaandroidinstrumentationtest)|false|none|An Android instrumentation test.|
|androidRoboTest|[AndroidRoboTest](#schemaandroidrobotest)|false|none|An Android robo test.|
|androidTestLoop|[AndroidTestLoop](#schemaandroidtestloop)|false|none|An Android Application with a Test Loop.|
|disablePerformanceMetrics|boolean|false|none|Disables performance metrics recording. May reduce test latency.|
|disableVideoRecording|boolean|false|none|Disables video recording. May reduce test latency.|
|iosTestLoop|[IosTestLoop](#schemaiostestloop)|false|none|An iOS application with a test loop.|
|iosTestSetup|[IosTestSetup](#schemaiostestsetup)|false|none|Test setup requirements for iOS.|
|iosXcTest|[IosXcTest](#schemaiosxctest)|false|none|An iOS XCTest, via an .xctestrun file.|
|testSetup|[TestSetup](#schematestsetup)|false|none|Test setup requirements for Android e.g. files to install, bootstrap scripts.|
|testTimeout|string(google-duration)|false|none|Max time a test execution is allowed to run before it is automatically cancelled. The default value is 5 min.|

<h2 id="tocS_TestTargetsForShard">TestTargetsForShard</h2>
<!-- backwards compatibility -->
<a id="schematesttargetsforshard"></a>
<a id="schema_TestTargetsForShard"></a>
<a id="tocStesttargetsforshard"></a>
<a id="tocstesttargetsforshard"></a>

```json
{
  "testTargets": [
    "string"
  ]
}
```

Test targets for a shard.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|testTargets|[string]|false|none|Group of packages, classes, and/or test methods to be run for each shard. The targets need to be specified in AndroidJUnitRunner argument format. For example, "package com.my.packages" "class com.my.package.MyClass". The number of test_targets must be greater than 0.|

<h2 id="tocS_ToolResultsExecution">ToolResultsExecution</h2>
<!-- backwards compatibility -->
<a id="schematoolresultsexecution"></a>
<a id="schema_ToolResultsExecution"></a>
<a id="tocStoolresultsexecution"></a>
<a id="tocstoolresultsexecution"></a>

```json
{
  "executionId": "string",
  "historyId": "string",
  "projectId": "string"
}
```

Represents a tool results execution resource. This has the results of a TestMatrix.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executionId|string|false|none|Output only. A tool results execution ID.|
|historyId|string|false|none|Output only. A tool results history ID.|
|projectId|string|false|none|Output only. The cloud project that owns the tool results execution.|

<h2 id="tocS_ToolResultsHistory">ToolResultsHistory</h2>
<!-- backwards compatibility -->
<a id="schematoolresultshistory"></a>
<a id="schema_ToolResultsHistory"></a>
<a id="tocStoolresultshistory"></a>
<a id="tocstoolresultshistory"></a>

```json
{
  "historyId": "string",
  "projectId": "string"
}
```

Represents a tool results history resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|historyId|string|false|none|Required. A tool results history ID.|
|projectId|string|false|none|Required. The cloud project that owns the tool results history.|

<h2 id="tocS_ToolResultsStep">ToolResultsStep</h2>
<!-- backwards compatibility -->
<a id="schematoolresultsstep"></a>
<a id="schema_ToolResultsStep"></a>
<a id="tocStoolresultsstep"></a>
<a id="tocstoolresultsstep"></a>

```json
{
  "executionId": "string",
  "historyId": "string",
  "projectId": "string",
  "stepId": "string"
}
```

Represents a tool results step resource. This has the results of a TestExecution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executionId|string|false|none|Output only. A tool results execution ID.|
|historyId|string|false|none|Output only. A tool results history ID.|
|projectId|string|false|none|Output only. The cloud project that owns the tool results step.|
|stepId|string|false|none|Output only. A tool results step ID.|

<h2 id="tocS_TrafficRule">TrafficRule</h2>
<!-- backwards compatibility -->
<a id="schematrafficrule"></a>
<a id="schema_TrafficRule"></a>
<a id="tocStrafficrule"></a>
<a id="tocstrafficrule"></a>

```json
{
  "bandwidth": 0,
  "burst": 0,
  "delay": "string",
  "packetDuplicationRatio": 0,
  "packetLossRatio": 0
}
```

Network emulation parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bandwidth|number(float)|false|none|Bandwidth in kbits/second.|
|burst|number(float)|false|none|Burst size in kbits.|
|delay|string(google-duration)|false|none|Packet delay, must be >= 0.|
|packetDuplicationRatio|number(float)|false|none|Packet duplication ratio (0.0 - 1.0).|
|packetLossRatio|number(float)|false|none|Packet loss ratio (0.0 - 1.0).|

<h2 id="tocS_UniformSharding">UniformSharding</h2>
<!-- backwards compatibility -->
<a id="schemauniformsharding"></a>
<a id="schema_UniformSharding"></a>
<a id="tocSuniformsharding"></a>
<a id="tocsuniformsharding"></a>

```json
{
  "numShards": 0
}
```

Uniformly shards test cases given a total number of shards. For instrumentation tests, it will be translated to "-e numShard" and "-e shardIndex" AndroidJUnitRunner arguments. With uniform sharding enabled, specifying either of these sharding arguments via `environment_variables` is invalid. Based on the sharding mechanism AndroidJUnitRunner uses, there is no guarantee that test cases will be distributed uniformly across all shards.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numShards|integer(int32)|false|none|Required. The total number of shards to create. This must always be a positive number that is no greater than the total number of test cases. When you select one or more physical devices, the number of shards must be <= 50. When you select one or more ARM virtual devices, it must be <= 100. When you select only x86 virtual devices, it must be <= 500.|

<h2 id="tocS_UsesFeature">UsesFeature</h2>
<!-- backwards compatibility -->
<a id="schemausesfeature"></a>
<a id="schema_UsesFeature"></a>
<a id="tocSusesfeature"></a>
<a id="tocsusesfeature"></a>

```json
{
  "isRequired": true,
  "name": "string"
}
```

A tag within a manifest. https://developer.android.com/guide/topics/manifest/uses-feature-element.html

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isRequired|boolean|false|none|The android:required value|
|name|string|false|none|The android:name value|

<h2 id="tocS_XcodeVersion">XcodeVersion</h2>
<!-- backwards compatibility -->
<a id="schemaxcodeversion"></a>
<a id="schema_XcodeVersion"></a>
<a id="tocSxcodeversion"></a>
<a id="tocsxcodeversion"></a>

```json
{
  "tags": [
    "string"
  ],
  "version": "string"
}
```

An Xcode version that an iOS version is compatible with.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|[string]|false|none|Tags for this Xcode version. Example: "default".|
|version|string|false|none|The id for this version. Example: "9.2".|
