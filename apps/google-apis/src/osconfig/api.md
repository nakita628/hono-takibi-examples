<h1 id="os-config-api">OS Config API v1beta</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

OS management tools that can be used for patch management, patch compliance, and configuration management on VM instances.

Base URLs:

* <a href="https://osconfig.googleapis.com/">https://osconfig.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/compute/docs/osconfig/rest">External documentation</a>

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

<h1 id="os-config-api-projects">projects</h1>

## osconfig.projects.zones.instances.lookupEffectiveGuestPolicy

<a id="opIdosconfig.projects.zones.instances.lookupEffectiveGuestPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:lookupEffectiveGuestPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "osArchitecture": "string",
    "osShortName": "string",
    "osVersion": "string"
  }'
```

`POST /v1beta/{instance}:lookupEffectiveGuestPolicy`

Lookup the effective guest policy that applies to a VM instance. This lookup merges all policies that are assigned to the instance ancestry.

> Body parameter

```json
{
  "osArchitecture": "string",
  "osShortName": "string",
  "osVersion": "string"
}
```

<h3 id="osconfigprojectszonesinstanceslookupeffectiveguestpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instance|path|string|true|Required. The VM instance whose policies are being looked up.|
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
|body|body|[LookupEffectiveGuestPolicyRequest](#schemalookupeffectiveguestpolicyrequest)|false|none|
|» osArchitecture|body|string|false|Architecture of OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that instance.|
|» osShortName|body|string|false|Short name of the OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that instance.|
|» osVersion|body|string|false|Version of the OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that VM instance.|

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
  "packageRepositories": [
    {
      "packageRepository": {
        "apt": {
          "archiveType": "ARCHIVE_TYPE_UNSPECIFIED",
          "components": [
            "string"
          ],
          "distribution": "string",
          "gpgKey": "string",
          "uri": "string"
        },
        "goo": {
          "name": "string",
          "url": "string"
        },
        "yum": {
          "baseUrl": "string",
          "displayName": "string",
          "gpgKeys": [
            "string"
          ],
          "id": "string"
        },
        "zypper": {
          "baseUrl": "string",
          "displayName": "string",
          "gpgKeys": [
            "string"
          ],
          "id": "string"
        }
      },
      "source": "string"
    }
  ],
  "packages": [
    {
      "package": {
        "desiredState": "DESIRED_STATE_UNSPECIFIED",
        "manager": "MANAGER_UNSPECIFIED",
        "name": "string"
      },
      "source": "string"
    }
  ],
  "softwareRecipes": [
    {
      "softwareRecipe": {
        "artifacts": [
          {
            "allowInsecure": true,
            "gcs": {
              "bucket": "string",
              "generation": "string",
              "object": "string"
            },
            "id": "string",
            "remote": {
              "checksum": "string",
              "uri": "string"
            }
          }
        ],
        "desiredState": "DESIRED_STATE_UNSPECIFIED",
        "installSteps": [
          {
            "archiveExtraction": {
              "artifactId": "string",
              "destination": "string",
              "type": "ARCHIVE_TYPE_UNSPECIFIED"
            },
            "dpkgInstallation": {
              "artifactId": "string"
            },
            "fileCopy": {
              "artifactId": "string",
              "destination": "string",
              "overwrite": true,
              "permissions": "string"
            },
            "fileExec": {
              "allowedExitCodes": [
                0
              ],
              "args": [
                "string"
              ],
              "artifactId": "string",
              "localPath": "string"
            },
            "msiInstallation": {
              "allowedExitCodes": [
                0
              ],
              "artifactId": "string",
              "flags": [
                "string"
              ]
            },
            "rpmInstallation": {
              "artifactId": "string"
            },
            "scriptRun": {
              "allowedExitCodes": [
                0
              ],
              "interpreter": "INTERPRETER_UNSPECIFIED",
              "script": "string"
            }
          }
        ],
        "name": "string",
        "updateSteps": [
          {
            "archiveExtraction": {
              "artifactId": "string",
              "destination": "string",
              "type": "ARCHIVE_TYPE_UNSPECIFIED"
            },
            "dpkgInstallation": {
              "artifactId": "string"
            },
            "fileCopy": {
              "artifactId": "string",
              "destination": "string",
              "overwrite": true,
              "permissions": "string"
            },
            "fileExec": {
              "allowedExitCodes": [
                0
              ],
              "args": [
                "string"
              ],
              "artifactId": "string",
              "localPath": "string"
            },
            "msiInstallation": {
              "allowedExitCodes": [
                0
              ],
              "artifactId": "string",
              "flags": [
                "string"
              ]
            },
            "rpmInstallation": {
              "artifactId": "string"
            },
            "scriptRun": {
              "allowedExitCodes": [
                0
              ],
              "interpreter": "INTERPRETER_UNSPECIFIED",
              "script": "string"
            }
          }
        ],
        "version": "string"
      },
      "source": "string"
    }
  ]
}
```

<h3 id="osconfigprojectszonesinstanceslookupeffectiveguestpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[EffectiveGuestPolicy](#schemaeffectiveguestpolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## osconfig.projects.patchJobs.get

<a id="opIdosconfig.projects.patchJobs.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{name}`

Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.

<h3 id="osconfigprojectspatchjobsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the patch in the form `projects/*/patchJobs/*`|
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
  "description": "string",
  "displayName": "string",
  "dryRun": true,
  "duration": "string",
  "errorMessage": "string",
  "instanceDetailsSummary": {
    "ackedInstanceCount": "string",
    "applyingPatchesInstanceCount": "string",
    "downloadingPatchesInstanceCount": "string",
    "failedInstanceCount": "string",
    "inactiveInstanceCount": "string",
    "noAgentDetectedInstanceCount": "string",
    "notifiedInstanceCount": "string",
    "pendingInstanceCount": "string",
    "postPatchStepInstanceCount": "string",
    "prePatchStepInstanceCount": "string",
    "rebootingInstanceCount": "string",
    "startedInstanceCount": "string",
    "succeededInstanceCount": "string",
    "succeededRebootRequiredInstanceCount": "string",
    "timedOutInstanceCount": "string"
  },
  "instanceFilter": {
    "all": true,
    "groupLabels": [
      {
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "instanceNamePrefixes": [
      "string"
    ],
    "instances": [
      "string"
    ],
    "zones": [
      "string"
    ]
  },
  "name": "string",
  "patchConfig": {
    "apt": {
      "excludes": [
        "string"
      ],
      "exclusivePackages": [
        "string"
      ],
      "type": "TYPE_UNSPECIFIED"
    },
    "goo": {},
    "migInstancesAllowed": true,
    "postStep": {
      "linuxExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      },
      "windowsExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      }
    },
    "preStep": {
      "linuxExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      },
      "windowsExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      }
    },
    "rebootConfig": "REBOOT_CONFIG_UNSPECIFIED",
    "windowsUpdate": {
      "classifications": [
        "CLASSIFICATION_UNSPECIFIED"
      ],
      "excludes": [
        "string"
      ],
      "exclusivePatches": [
        "string"
      ]
    },
    "yum": {
      "excludes": [
        "string"
      ],
      "exclusivePackages": [
        "string"
      ],
      "minimal": true,
      "security": true
    },
    "zypper": {
      "categories": [
        "string"
      ],
      "excludes": [
        "string"
      ],
      "exclusivePatches": [
        "string"
      ],
      "severities": [
        "string"
      ],
      "withOptional": true,
      "withUpdate": true
    }
  },
  "patchDeployment": "string",
  "percentComplete": 0,
  "rollout": {
    "disruptionBudget": {
      "fixed": 0,
      "percent": 0
    },
    "mode": "MODE_UNSPECIFIED"
  },
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

<h3 id="osconfigprojectspatchjobsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PatchJob](#schemapatchjob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## osconfig.projects.patchDeployments.delete

<a id="opIdosconfig.projects.patchDeployments.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta/{name}`

Delete an OS Config patch deployment.

<h3 id="osconfigprojectspatchdeploymentsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the patch deployment in the form `projects/*/patchDeployments/*`.|
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

<h3 id="osconfigprojectspatchdeploymentsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## osconfig.projects.patchDeployments.patch

<a id="opIdosconfig.projects.patchDeployments.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "duration": "string",
    "instanceFilter": {
      "all": true,
      "groupLabels": [
        {
          "labels": {
            "property1": "string",
            "property2": "string"
          }
        }
      ],
      "instanceNamePrefixes": [
        "string"
      ],
      "instances": [
        "string"
      ],
      "zones": [
        "string"
      ]
    },
    "name": "string",
    "oneTimeSchedule": {
      "executeTime": "string"
    },
    "patchConfig": {
      "apt": {
        "excludes": [
          "string"
        ],
        "exclusivePackages": [
          "string"
        ],
        "type": "TYPE_UNSPECIFIED"
      },
      "goo": {},
      "migInstancesAllowed": true,
      "postStep": {
        "linuxExecStepConfig": {
          "allowedSuccessCodes": [
            0
          ],
          "gcsObject": {
            "bucket": "string",
            "generationNumber": "string",
            "object": "string"
          },
          "interpreter": "INTERPRETER_UNSPECIFIED",
          "localPath": "string"
        },
        "windowsExecStepConfig": {
          "allowedSuccessCodes": [
            0
          ],
          "gcsObject": {
            "bucket": "string",
            "generationNumber": "string",
            "object": "string"
          },
          "interpreter": "INTERPRETER_UNSPECIFIED",
          "localPath": "string"
        }
      },
      "preStep": {
        "linuxExecStepConfig": {
          "allowedSuccessCodes": [
            0
          ],
          "gcsObject": {
            "bucket": "string",
            "generationNumber": "string",
            "object": "string"
          },
          "interpreter": "INTERPRETER_UNSPECIFIED",
          "localPath": "string"
        },
        "windowsExecStepConfig": {
          "allowedSuccessCodes": [
            0
          ],
          "gcsObject": {
            "bucket": "string",
            "generationNumber": "string",
            "object": "string"
          },
          "interpreter": "INTERPRETER_UNSPECIFIED",
          "localPath": "string"
        }
      },
      "rebootConfig": "REBOOT_CONFIG_UNSPECIFIED",
      "windowsUpdate": {
        "classifications": [
          "CLASSIFICATION_UNSPECIFIED"
        ],
        "excludes": [
          "string"
        ],
        "exclusivePatches": [
          "string"
        ]
      },
      "yum": {
        "excludes": [
          "string"
        ],
        "exclusivePackages": [
          "string"
        ],
        "minimal": true,
        "security": true
      },
      "zypper": {
        "categories": [
          "string"
        ],
        "excludes": [
          "string"
        ],
        "exclusivePatches": [
          "string"
        ],
        "severities": [
          "string"
        ],
        "withOptional": true,
        "withUpdate": true
      }
    },
    "recurringSchedule": {
      "endTime": "string",
      "frequency": "FREQUENCY_UNSPECIFIED",
      "monthly": {
        "monthDay": 0,
        "weekDayOfMonth": {
          "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
          "dayOffset": 0,
          "weekOrdinal": 0
        }
      },
      "startTime": "string",
      "timeOfDay": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "timeZone": {
        "id": "string",
        "version": "string"
      },
      "weekly": {
        "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED"
      }
    },
    "rollout": {
      "disruptionBudget": {
        "fixed": 0,
        "percent": 0
      },
      "mode": "MODE_UNSPECIFIED"
    }
  }'
```

`PATCH /v1beta/{name}`

Update an OS Config patch deployment.

> Body parameter

```json
{
  "description": "string",
  "duration": "string",
  "instanceFilter": {
    "all": true,
    "groupLabels": [
      {
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "instanceNamePrefixes": [
      "string"
    ],
    "instances": [
      "string"
    ],
    "zones": [
      "string"
    ]
  },
  "name": "string",
  "oneTimeSchedule": {
    "executeTime": "string"
  },
  "patchConfig": {
    "apt": {
      "excludes": [
        "string"
      ],
      "exclusivePackages": [
        "string"
      ],
      "type": "TYPE_UNSPECIFIED"
    },
    "goo": {},
    "migInstancesAllowed": true,
    "postStep": {
      "linuxExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      },
      "windowsExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      }
    },
    "preStep": {
      "linuxExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      },
      "windowsExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      }
    },
    "rebootConfig": "REBOOT_CONFIG_UNSPECIFIED",
    "windowsUpdate": {
      "classifications": [
        "CLASSIFICATION_UNSPECIFIED"
      ],
      "excludes": [
        "string"
      ],
      "exclusivePatches": [
        "string"
      ]
    },
    "yum": {
      "excludes": [
        "string"
      ],
      "exclusivePackages": [
        "string"
      ],
      "minimal": true,
      "security": true
    },
    "zypper": {
      "categories": [
        "string"
      ],
      "excludes": [
        "string"
      ],
      "exclusivePatches": [
        "string"
      ],
      "severities": [
        "string"
      ],
      "withOptional": true,
      "withUpdate": true
    }
  },
  "recurringSchedule": {
    "endTime": "string",
    "frequency": "FREQUENCY_UNSPECIFIED",
    "monthly": {
      "monthDay": 0,
      "weekDayOfMonth": {
        "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
        "dayOffset": 0,
        "weekOrdinal": 0
      }
    },
    "startTime": "string",
    "timeOfDay": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    },
    "timeZone": {
      "id": "string",
      "version": "string"
    },
    "weekly": {
      "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED"
    }
  },
  "rollout": {
    "disruptionBudget": {
      "fixed": 0,
      "percent": 0
    },
    "mode": "MODE_UNSPECIFIED"
  }
}
```

<h3 id="osconfigprojectspatchdeploymentspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Unique name for the patch deployment resource in a project. The patch deployment name is in the form: `projects/{project_id}/patchDeployments/{patch_deployment_id}`. This field is ignored when you create a new patch deployment.|
|updateMask|query|string|false|Optional. Field mask that controls which fields of the patch deployment should be updated.|
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
|body|body|[PatchDeployment](#schemapatchdeployment)|false|none|
|» description|body|string|false|Optional. Description of the patch deployment. Length of the description is limited to 1024 characters.|
|» duration|body|string(google-duration)|false|Optional. Duration of the patch. After the duration ends, the patch times out.|
|» instanceFilter|body|[PatchInstanceFilter](#schemapatchinstancefilter)|false|Required. VM instances to patch.|
|» name|body|string|false|Unique name for the patch deployment resource in a project. The patch deployment name is in the form: `projects/{project_id}/patchDeployments/{patch_deployment_id}`. This field is ignored when you create a new patch deployment.|
|» oneTimeSchedule|body|[OneTimeSchedule](#schemaonetimeschedule)|false|Required. Schedule a one-time execution.|
|» patchConfig|body|[PatchConfig](#schemapatchconfig)|false|Optional. Patch configuration that is applied.|
|» recurringSchedule|body|[RecurringSchedule](#schemarecurringschedule)|false|Required. Schedule recurring executions.|
|» rollout|body|[PatchRollout](#schemapatchrollout)|false|Optional. Rollout strategy of the patch job.|

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
  "description": "string",
  "duration": "string",
  "instanceFilter": {
    "all": true,
    "groupLabels": [
      {
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "instanceNamePrefixes": [
      "string"
    ],
    "instances": [
      "string"
    ],
    "zones": [
      "string"
    ]
  },
  "lastExecuteTime": "string",
  "name": "string",
  "oneTimeSchedule": {
    "executeTime": "string"
  },
  "patchConfig": {
    "apt": {
      "excludes": [
        "string"
      ],
      "exclusivePackages": [
        "string"
      ],
      "type": "TYPE_UNSPECIFIED"
    },
    "goo": {},
    "migInstancesAllowed": true,
    "postStep": {
      "linuxExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      },
      "windowsExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      }
    },
    "preStep": {
      "linuxExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      },
      "windowsExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      }
    },
    "rebootConfig": "REBOOT_CONFIG_UNSPECIFIED",
    "windowsUpdate": {
      "classifications": [
        "CLASSIFICATION_UNSPECIFIED"
      ],
      "excludes": [
        "string"
      ],
      "exclusivePatches": [
        "string"
      ]
    },
    "yum": {
      "excludes": [
        "string"
      ],
      "exclusivePackages": [
        "string"
      ],
      "minimal": true,
      "security": true
    },
    "zypper": {
      "categories": [
        "string"
      ],
      "excludes": [
        "string"
      ],
      "exclusivePatches": [
        "string"
      ],
      "severities": [
        "string"
      ],
      "withOptional": true,
      "withUpdate": true
    }
  },
  "recurringSchedule": {
    "endTime": "string",
    "frequency": "FREQUENCY_UNSPECIFIED",
    "lastExecuteTime": "string",
    "monthly": {
      "monthDay": 0,
      "weekDayOfMonth": {
        "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
        "dayOffset": 0,
        "weekOrdinal": 0
      }
    },
    "nextExecuteTime": "string",
    "startTime": "string",
    "timeOfDay": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    },
    "timeZone": {
      "id": "string",
      "version": "string"
    },
    "weekly": {
      "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED"
    }
  },
  "rollout": {
    "disruptionBudget": {
      "fixed": 0,
      "percent": 0
    },
    "mode": "MODE_UNSPECIFIED"
  },
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

<h3 id="osconfigprojectspatchdeploymentspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PatchDeployment](#schemapatchdeployment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## osconfig.projects.patchJobs.cancel

<a id="opIdosconfig.projects.patchJobs.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta/{name}:cancel`

Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.

> Body parameter

```json
{}
```

<h3 id="osconfigprojectspatchjobscancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the patch in the form `projects/*/patchJobs/*`|
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
|body|body|[CancelPatchJobRequest](#schemacancelpatchjobrequest)|false|none|

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
  "description": "string",
  "displayName": "string",
  "dryRun": true,
  "duration": "string",
  "errorMessage": "string",
  "instanceDetailsSummary": {
    "ackedInstanceCount": "string",
    "applyingPatchesInstanceCount": "string",
    "downloadingPatchesInstanceCount": "string",
    "failedInstanceCount": "string",
    "inactiveInstanceCount": "string",
    "noAgentDetectedInstanceCount": "string",
    "notifiedInstanceCount": "string",
    "pendingInstanceCount": "string",
    "postPatchStepInstanceCount": "string",
    "prePatchStepInstanceCount": "string",
    "rebootingInstanceCount": "string",
    "startedInstanceCount": "string",
    "succeededInstanceCount": "string",
    "succeededRebootRequiredInstanceCount": "string",
    "timedOutInstanceCount": "string"
  },
  "instanceFilter": {
    "all": true,
    "groupLabels": [
      {
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "instanceNamePrefixes": [
      "string"
    ],
    "instances": [
      "string"
    ],
    "zones": [
      "string"
    ]
  },
  "name": "string",
  "patchConfig": {
    "apt": {
      "excludes": [
        "string"
      ],
      "exclusivePackages": [
        "string"
      ],
      "type": "TYPE_UNSPECIFIED"
    },
    "goo": {},
    "migInstancesAllowed": true,
    "postStep": {
      "linuxExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      },
      "windowsExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      }
    },
    "preStep": {
      "linuxExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      },
      "windowsExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      }
    },
    "rebootConfig": "REBOOT_CONFIG_UNSPECIFIED",
    "windowsUpdate": {
      "classifications": [
        "CLASSIFICATION_UNSPECIFIED"
      ],
      "excludes": [
        "string"
      ],
      "exclusivePatches": [
        "string"
      ]
    },
    "yum": {
      "excludes": [
        "string"
      ],
      "exclusivePackages": [
        "string"
      ],
      "minimal": true,
      "security": true
    },
    "zypper": {
      "categories": [
        "string"
      ],
      "excludes": [
        "string"
      ],
      "exclusivePatches": [
        "string"
      ],
      "severities": [
        "string"
      ],
      "withOptional": true,
      "withUpdate": true
    }
  },
  "patchDeployment": "string",
  "percentComplete": 0,
  "rollout": {
    "disruptionBudget": {
      "fixed": 0,
      "percent": 0
    },
    "mode": "MODE_UNSPECIFIED"
  },
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

<h3 id="osconfigprojectspatchjobscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PatchJob](#schemapatchjob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## osconfig.projects.patchDeployments.pause

<a id="opIdosconfig.projects.patchDeployments.pause"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:pause \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta/{name}:pause`

Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.

> Body parameter

```json
{}
```

<h3 id="osconfigprojectspatchdeploymentspause-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the patch deployment in the form `projects/*/patchDeployments/*`.|
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
|body|body|[PausePatchDeploymentRequest](#schemapausepatchdeploymentrequest)|false|none|

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
  "description": "string",
  "duration": "string",
  "instanceFilter": {
    "all": true,
    "groupLabels": [
      {
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "instanceNamePrefixes": [
      "string"
    ],
    "instances": [
      "string"
    ],
    "zones": [
      "string"
    ]
  },
  "lastExecuteTime": "string",
  "name": "string",
  "oneTimeSchedule": {
    "executeTime": "string"
  },
  "patchConfig": {
    "apt": {
      "excludes": [
        "string"
      ],
      "exclusivePackages": [
        "string"
      ],
      "type": "TYPE_UNSPECIFIED"
    },
    "goo": {},
    "migInstancesAllowed": true,
    "postStep": {
      "linuxExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      },
      "windowsExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      }
    },
    "preStep": {
      "linuxExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      },
      "windowsExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      }
    },
    "rebootConfig": "REBOOT_CONFIG_UNSPECIFIED",
    "windowsUpdate": {
      "classifications": [
        "CLASSIFICATION_UNSPECIFIED"
      ],
      "excludes": [
        "string"
      ],
      "exclusivePatches": [
        "string"
      ]
    },
    "yum": {
      "excludes": [
        "string"
      ],
      "exclusivePackages": [
        "string"
      ],
      "minimal": true,
      "security": true
    },
    "zypper": {
      "categories": [
        "string"
      ],
      "excludes": [
        "string"
      ],
      "exclusivePatches": [
        "string"
      ],
      "severities": [
        "string"
      ],
      "withOptional": true,
      "withUpdate": true
    }
  },
  "recurringSchedule": {
    "endTime": "string",
    "frequency": "FREQUENCY_UNSPECIFIED",
    "lastExecuteTime": "string",
    "monthly": {
      "monthDay": 0,
      "weekDayOfMonth": {
        "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
        "dayOffset": 0,
        "weekOrdinal": 0
      }
    },
    "nextExecuteTime": "string",
    "startTime": "string",
    "timeOfDay": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    },
    "timeZone": {
      "id": "string",
      "version": "string"
    },
    "weekly": {
      "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED"
    }
  },
  "rollout": {
    "disruptionBudget": {
      "fixed": 0,
      "percent": 0
    },
    "mode": "MODE_UNSPECIFIED"
  },
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

<h3 id="osconfigprojectspatchdeploymentspause-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PatchDeployment](#schemapatchdeployment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## osconfig.projects.patchDeployments.resume

<a id="opIdosconfig.projects.patchDeployments.resume"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:resume \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta/{name}:resume`

Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.

> Body parameter

```json
{}
```

<h3 id="osconfigprojectspatchdeploymentsresume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the patch deployment in the form `projects/*/patchDeployments/*`.|
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
|body|body|[ResumePatchDeploymentRequest](#schemaresumepatchdeploymentrequest)|false|none|

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
  "description": "string",
  "duration": "string",
  "instanceFilter": {
    "all": true,
    "groupLabels": [
      {
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "instanceNamePrefixes": [
      "string"
    ],
    "instances": [
      "string"
    ],
    "zones": [
      "string"
    ]
  },
  "lastExecuteTime": "string",
  "name": "string",
  "oneTimeSchedule": {
    "executeTime": "string"
  },
  "patchConfig": {
    "apt": {
      "excludes": [
        "string"
      ],
      "exclusivePackages": [
        "string"
      ],
      "type": "TYPE_UNSPECIFIED"
    },
    "goo": {},
    "migInstancesAllowed": true,
    "postStep": {
      "linuxExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      },
      "windowsExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      }
    },
    "preStep": {
      "linuxExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      },
      "windowsExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      }
    },
    "rebootConfig": "REBOOT_CONFIG_UNSPECIFIED",
    "windowsUpdate": {
      "classifications": [
        "CLASSIFICATION_UNSPECIFIED"
      ],
      "excludes": [
        "string"
      ],
      "exclusivePatches": [
        "string"
      ]
    },
    "yum": {
      "excludes": [
        "string"
      ],
      "exclusivePackages": [
        "string"
      ],
      "minimal": true,
      "security": true
    },
    "zypper": {
      "categories": [
        "string"
      ],
      "excludes": [
        "string"
      ],
      "exclusivePatches": [
        "string"
      ],
      "severities": [
        "string"
      ],
      "withOptional": true,
      "withUpdate": true
    }
  },
  "recurringSchedule": {
    "endTime": "string",
    "frequency": "FREQUENCY_UNSPECIFIED",
    "lastExecuteTime": "string",
    "monthly": {
      "monthDay": 0,
      "weekDayOfMonth": {
        "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
        "dayOffset": 0,
        "weekOrdinal": 0
      }
    },
    "nextExecuteTime": "string",
    "startTime": "string",
    "timeOfDay": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    },
    "timeZone": {
      "id": "string",
      "version": "string"
    },
    "weekly": {
      "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED"
    }
  },
  "rollout": {
    "disruptionBudget": {
      "fixed": 0,
      "percent": 0
    },
    "mode": "MODE_UNSPECIFIED"
  },
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

<h3 id="osconfigprojectspatchdeploymentsresume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PatchDeployment](#schemapatchdeployment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## osconfig.projects.guestPolicies.list

<a id="opIdosconfig.projects.guestPolicies.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/guestPolicies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/guestPolicies`

Get a page of OS Config guest policies.

<h3 id="osconfigprojectsguestpolicieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the parent using one of the following forms: `projects/{project_number}`.|
|pageSize|query|integer|false|The maximum number of guest policies to return.|
|pageToken|query|string|false|A pagination token returned from a previous call to `ListGuestPolicies` that indicates where this listing should continue from.|
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
  "guestPolicies": [
    {
      "assignment": {
        "groupLabels": [
          {
            "labels": {
              "property1": "string",
              "property2": "string"
            }
          }
        ],
        "instanceNamePrefixes": [
          "string"
        ],
        "instances": [
          "string"
        ],
        "osTypes": [
          {
            "osArchitecture": "string",
            "osShortName": "string",
            "osVersion": "string"
          }
        ],
        "zones": [
          "string"
        ]
      },
      "createTime": "string",
      "description": "string",
      "etag": "string",
      "name": "string",
      "packageRepositories": [
        {
          "apt": {
            "archiveType": "ARCHIVE_TYPE_UNSPECIFIED",
            "components": [
              "string"
            ],
            "distribution": "string",
            "gpgKey": "string",
            "uri": "string"
          },
          "goo": {
            "name": "string",
            "url": "string"
          },
          "yum": {
            "baseUrl": "string",
            "displayName": "string",
            "gpgKeys": [
              "string"
            ],
            "id": "string"
          },
          "zypper": {
            "baseUrl": "string",
            "displayName": "string",
            "gpgKeys": [
              "string"
            ],
            "id": "string"
          }
        }
      ],
      "packages": [
        {
          "desiredState": "DESIRED_STATE_UNSPECIFIED",
          "manager": "MANAGER_UNSPECIFIED",
          "name": "string"
        }
      ],
      "recipes": [
        {
          "artifacts": [
            {
              "allowInsecure": true,
              "gcs": {
                "bucket": "string",
                "generation": "string",
                "object": "string"
              },
              "id": "string",
              "remote": {
                "checksum": "string",
                "uri": "string"
              }
            }
          ],
          "desiredState": "DESIRED_STATE_UNSPECIFIED",
          "installSteps": [
            {
              "archiveExtraction": {
                "artifactId": "string",
                "destination": "string",
                "type": "ARCHIVE_TYPE_UNSPECIFIED"
              },
              "dpkgInstallation": {
                "artifactId": "string"
              },
              "fileCopy": {
                "artifactId": "string",
                "destination": "string",
                "overwrite": true,
                "permissions": "string"
              },
              "fileExec": {
                "allowedExitCodes": [
                  0
                ],
                "args": [
                  "string"
                ],
                "artifactId": "string",
                "localPath": "string"
              },
              "msiInstallation": {
                "allowedExitCodes": [
                  0
                ],
                "artifactId": "string",
                "flags": [
                  "string"
                ]
              },
              "rpmInstallation": {
                "artifactId": "string"
              },
              "scriptRun": {
                "allowedExitCodes": [
                  0
                ],
                "interpreter": "INTERPRETER_UNSPECIFIED",
                "script": "string"
              }
            }
          ],
          "name": "string",
          "updateSteps": [
            {
              "archiveExtraction": {
                "artifactId": "string",
                "destination": "string",
                "type": "ARCHIVE_TYPE_UNSPECIFIED"
              },
              "dpkgInstallation": {
                "artifactId": "string"
              },
              "fileCopy": {
                "artifactId": "string",
                "destination": "string",
                "overwrite": true,
                "permissions": "string"
              },
              "fileExec": {
                "allowedExitCodes": [
                  0
                ],
                "args": [
                  "string"
                ],
                "artifactId": "string",
                "localPath": "string"
              },
              "msiInstallation": {
                "allowedExitCodes": [
                  0
                ],
                "artifactId": "string",
                "flags": [
                  "string"
                ]
              },
              "rpmInstallation": {
                "artifactId": "string"
              },
              "scriptRun": {
                "allowedExitCodes": [
                  0
                ],
                "interpreter": "INTERPRETER_UNSPECIFIED",
                "script": "string"
              }
            }
          ],
          "version": "string"
        }
      ],
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="osconfigprojectsguestpolicieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListGuestPoliciesResponse](#schemalistguestpoliciesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## osconfig.projects.guestPolicies.create

<a id="opIdosconfig.projects.guestPolicies.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/guestPolicies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "assignment": {
      "groupLabels": [
        {
          "labels": {
            "property1": "string",
            "property2": "string"
          }
        }
      ],
      "instanceNamePrefixes": [
        "string"
      ],
      "instances": [
        "string"
      ],
      "osTypes": [
        {
          "osArchitecture": "string",
          "osShortName": "string",
          "osVersion": "string"
        }
      ],
      "zones": [
        "string"
      ]
    },
    "description": "string",
    "etag": "string",
    "name": "string",
    "packageRepositories": [
      {
        "apt": {
          "archiveType": "ARCHIVE_TYPE_UNSPECIFIED",
          "components": [
            "string"
          ],
          "distribution": "string",
          "gpgKey": "string",
          "uri": "string"
        },
        "goo": {
          "name": "string",
          "url": "string"
        },
        "yum": {
          "baseUrl": "string",
          "displayName": "string",
          "gpgKeys": [
            "string"
          ],
          "id": "string"
        },
        "zypper": {
          "baseUrl": "string",
          "displayName": "string",
          "gpgKeys": [
            "string"
          ],
          "id": "string"
        }
      }
    ],
    "packages": [
      {
        "desiredState": "DESIRED_STATE_UNSPECIFIED",
        "manager": "MANAGER_UNSPECIFIED",
        "name": "string"
      }
    ],
    "recipes": [
      {
        "artifacts": [
          {
            "allowInsecure": true,
            "gcs": {
              "bucket": "string",
              "generation": "string",
              "object": "string"
            },
            "id": "string",
            "remote": {
              "checksum": "string",
              "uri": "string"
            }
          }
        ],
        "desiredState": "DESIRED_STATE_UNSPECIFIED",
        "installSteps": [
          {
            "archiveExtraction": {
              "artifactId": "string",
              "destination": "string",
              "type": "ARCHIVE_TYPE_UNSPECIFIED"
            },
            "dpkgInstallation": {
              "artifactId": "string"
            },
            "fileCopy": {
              "artifactId": "string",
              "destination": "string",
              "overwrite": true,
              "permissions": "string"
            },
            "fileExec": {
              "allowedExitCodes": [
                0
              ],
              "args": [
                "string"
              ],
              "artifactId": "string",
              "localPath": "string"
            },
            "msiInstallation": {
              "allowedExitCodes": [
                0
              ],
              "artifactId": "string",
              "flags": [
                "string"
              ]
            },
            "rpmInstallation": {
              "artifactId": "string"
            },
            "scriptRun": {
              "allowedExitCodes": [
                0
              ],
              "interpreter": "INTERPRETER_UNSPECIFIED",
              "script": "string"
            }
          }
        ],
        "name": "string",
        "updateSteps": [
          {
            "archiveExtraction": {
              "artifactId": "string",
              "destination": "string",
              "type": "ARCHIVE_TYPE_UNSPECIFIED"
            },
            "dpkgInstallation": {
              "artifactId": "string"
            },
            "fileCopy": {
              "artifactId": "string",
              "destination": "string",
              "overwrite": true,
              "permissions": "string"
            },
            "fileExec": {
              "allowedExitCodes": [
                0
              ],
              "args": [
                "string"
              ],
              "artifactId": "string",
              "localPath": "string"
            },
            "msiInstallation": {
              "allowedExitCodes": [
                0
              ],
              "artifactId": "string",
              "flags": [
                "string"
              ]
            },
            "rpmInstallation": {
              "artifactId": "string"
            },
            "scriptRun": {
              "allowedExitCodes": [
                0
              ],
              "interpreter": "INTERPRETER_UNSPECIFIED",
              "script": "string"
            }
          }
        ],
        "version": "string"
      }
    ]
  }'
```

`POST /v1beta/{parent}/guestPolicies`

Create an OS Config guest policy.

> Body parameter

```json
{
  "assignment": {
    "groupLabels": [
      {
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "instanceNamePrefixes": [
      "string"
    ],
    "instances": [
      "string"
    ],
    "osTypes": [
      {
        "osArchitecture": "string",
        "osShortName": "string",
        "osVersion": "string"
      }
    ],
    "zones": [
      "string"
    ]
  },
  "description": "string",
  "etag": "string",
  "name": "string",
  "packageRepositories": [
    {
      "apt": {
        "archiveType": "ARCHIVE_TYPE_UNSPECIFIED",
        "components": [
          "string"
        ],
        "distribution": "string",
        "gpgKey": "string",
        "uri": "string"
      },
      "goo": {
        "name": "string",
        "url": "string"
      },
      "yum": {
        "baseUrl": "string",
        "displayName": "string",
        "gpgKeys": [
          "string"
        ],
        "id": "string"
      },
      "zypper": {
        "baseUrl": "string",
        "displayName": "string",
        "gpgKeys": [
          "string"
        ],
        "id": "string"
      }
    }
  ],
  "packages": [
    {
      "desiredState": "DESIRED_STATE_UNSPECIFIED",
      "manager": "MANAGER_UNSPECIFIED",
      "name": "string"
    }
  ],
  "recipes": [
    {
      "artifacts": [
        {
          "allowInsecure": true,
          "gcs": {
            "bucket": "string",
            "generation": "string",
            "object": "string"
          },
          "id": "string",
          "remote": {
            "checksum": "string",
            "uri": "string"
          }
        }
      ],
      "desiredState": "DESIRED_STATE_UNSPECIFIED",
      "installSteps": [
        {
          "archiveExtraction": {
            "artifactId": "string",
            "destination": "string",
            "type": "ARCHIVE_TYPE_UNSPECIFIED"
          },
          "dpkgInstallation": {
            "artifactId": "string"
          },
          "fileCopy": {
            "artifactId": "string",
            "destination": "string",
            "overwrite": true,
            "permissions": "string"
          },
          "fileExec": {
            "allowedExitCodes": [
              0
            ],
            "args": [
              "string"
            ],
            "artifactId": "string",
            "localPath": "string"
          },
          "msiInstallation": {
            "allowedExitCodes": [
              0
            ],
            "artifactId": "string",
            "flags": [
              "string"
            ]
          },
          "rpmInstallation": {
            "artifactId": "string"
          },
          "scriptRun": {
            "allowedExitCodes": [
              0
            ],
            "interpreter": "INTERPRETER_UNSPECIFIED",
            "script": "string"
          }
        }
      ],
      "name": "string",
      "updateSteps": [
        {
          "archiveExtraction": {
            "artifactId": "string",
            "destination": "string",
            "type": "ARCHIVE_TYPE_UNSPECIFIED"
          },
          "dpkgInstallation": {
            "artifactId": "string"
          },
          "fileCopy": {
            "artifactId": "string",
            "destination": "string",
            "overwrite": true,
            "permissions": "string"
          },
          "fileExec": {
            "allowedExitCodes": [
              0
            ],
            "args": [
              "string"
            ],
            "artifactId": "string",
            "localPath": "string"
          },
          "msiInstallation": {
            "allowedExitCodes": [
              0
            ],
            "artifactId": "string",
            "flags": [
              "string"
            ]
          },
          "rpmInstallation": {
            "artifactId": "string"
          },
          "scriptRun": {
            "allowedExitCodes": [
              0
            ],
            "interpreter": "INTERPRETER_UNSPECIFIED",
            "script": "string"
          }
        }
      ],
      "version": "string"
    }
  ]
}
```

<h3 id="osconfigprojectsguestpoliciescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the parent using one of the following forms: `projects/{project_number}`.|
|guestPolicyId|query|string|false|Required. The logical name of the guest policy in the project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project.|
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
|body|body|[GuestPolicy](#schemaguestpolicy)|false|none|
|» assignment|body|[Assignment](#schemaassignment)|false|Required. Specifies the VM instances that are assigned to this policy. This allows you to target sets or groups of VM instances by different parameters such as labels, names, OS, or zones. If left empty, all VM instances underneath this policy are targeted. At the same level in the resource hierarchy (that is within a project), the service prevents the creation of multiple policies that conflict with each other. For more information, see how the service [handles assignment conflicts](/compute/docs/os-config-management/create-guest-policy#handle-conflicts).|
|» description|body|string|false|Description of the guest policy. Length of the description is limited to 1024 characters.|
|» etag|body|string|false|The etag for this guest policy. If this is provided on update, it must match the server's etag.|
|» name|body|string|false|Required. Unique name of the resource in this project using one of the following forms: `projects/{project_number}/guestPolicies/{guest_policy_id}`.|
|» packageRepositories|body|[[PackageRepository](#schemapackagerepository)]|false|A list of package repositories to configure on the VM instance. This is done before any other configs are applied so they can use these repos. Package repositories are only configured if the corresponding package manager(s) are available.|
|» packages|body|[[Package](#schemapackage)]|false|The software packages to be managed by this policy.|
|» recipes|body|[[SoftwareRecipe](#schemasoftwarerecipe)]|false|A list of Recipes to install on the VM instance.|

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
  "assignment": {
    "groupLabels": [
      {
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "instanceNamePrefixes": [
      "string"
    ],
    "instances": [
      "string"
    ],
    "osTypes": [
      {
        "osArchitecture": "string",
        "osShortName": "string",
        "osVersion": "string"
      }
    ],
    "zones": [
      "string"
    ]
  },
  "createTime": "string",
  "description": "string",
  "etag": "string",
  "name": "string",
  "packageRepositories": [
    {
      "apt": {
        "archiveType": "ARCHIVE_TYPE_UNSPECIFIED",
        "components": [
          "string"
        ],
        "distribution": "string",
        "gpgKey": "string",
        "uri": "string"
      },
      "goo": {
        "name": "string",
        "url": "string"
      },
      "yum": {
        "baseUrl": "string",
        "displayName": "string",
        "gpgKeys": [
          "string"
        ],
        "id": "string"
      },
      "zypper": {
        "baseUrl": "string",
        "displayName": "string",
        "gpgKeys": [
          "string"
        ],
        "id": "string"
      }
    }
  ],
  "packages": [
    {
      "desiredState": "DESIRED_STATE_UNSPECIFIED",
      "manager": "MANAGER_UNSPECIFIED",
      "name": "string"
    }
  ],
  "recipes": [
    {
      "artifacts": [
        {
          "allowInsecure": true,
          "gcs": {
            "bucket": "string",
            "generation": "string",
            "object": "string"
          },
          "id": "string",
          "remote": {
            "checksum": "string",
            "uri": "string"
          }
        }
      ],
      "desiredState": "DESIRED_STATE_UNSPECIFIED",
      "installSteps": [
        {
          "archiveExtraction": {
            "artifactId": "string",
            "destination": "string",
            "type": "ARCHIVE_TYPE_UNSPECIFIED"
          },
          "dpkgInstallation": {
            "artifactId": "string"
          },
          "fileCopy": {
            "artifactId": "string",
            "destination": "string",
            "overwrite": true,
            "permissions": "string"
          },
          "fileExec": {
            "allowedExitCodes": [
              0
            ],
            "args": [
              "string"
            ],
            "artifactId": "string",
            "localPath": "string"
          },
          "msiInstallation": {
            "allowedExitCodes": [
              0
            ],
            "artifactId": "string",
            "flags": [
              "string"
            ]
          },
          "rpmInstallation": {
            "artifactId": "string"
          },
          "scriptRun": {
            "allowedExitCodes": [
              0
            ],
            "interpreter": "INTERPRETER_UNSPECIFIED",
            "script": "string"
          }
        }
      ],
      "name": "string",
      "updateSteps": [
        {
          "archiveExtraction": {
            "artifactId": "string",
            "destination": "string",
            "type": "ARCHIVE_TYPE_UNSPECIFIED"
          },
          "dpkgInstallation": {
            "artifactId": "string"
          },
          "fileCopy": {
            "artifactId": "string",
            "destination": "string",
            "overwrite": true,
            "permissions": "string"
          },
          "fileExec": {
            "allowedExitCodes": [
              0
            ],
            "args": [
              "string"
            ],
            "artifactId": "string",
            "localPath": "string"
          },
          "msiInstallation": {
            "allowedExitCodes": [
              0
            ],
            "artifactId": "string",
            "flags": [
              "string"
            ]
          },
          "rpmInstallation": {
            "artifactId": "string"
          },
          "scriptRun": {
            "allowedExitCodes": [
              0
            ],
            "interpreter": "INTERPRETER_UNSPECIFIED",
            "script": "string"
          }
        }
      ],
      "version": "string"
    }
  ],
  "updateTime": "string"
}
```

<h3 id="osconfigprojectsguestpoliciescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GuestPolicy](#schemaguestpolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## osconfig.projects.patchJobs.instanceDetails.list

<a id="opIdosconfig.projects.patchJobs.instanceDetails.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/instanceDetails \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/instanceDetails`

Get a list of instance details for a given patch job.

<h3 id="osconfigprojectspatchjobsinstancedetailslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent for the instances are in the form of `projects/*/patchJobs/*`.|
|filter|query|string|false|A filter expression that filters results listed in the response. This field supports filtering results by instance zone, name, state, or `failure_reason`.|
|pageSize|query|integer|false|The maximum number of instance details records to return. Default is 100.|
|pageToken|query|string|false|A pagination token returned from a previous call that indicates where this listing should continue from.|
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
  "patchJobInstanceDetails": [
    {
      "attemptCount": "string",
      "failureReason": "string",
      "instanceSystemId": "string",
      "name": "string",
      "state": "PATCH_STATE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="osconfigprojectspatchjobsinstancedetailslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListPatchJobInstanceDetailsResponse](#schemalistpatchjobinstancedetailsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## osconfig.projects.patchDeployments.list

<a id="opIdosconfig.projects.patchDeployments.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/patchDeployments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/patchDeployments`

Get a page of OS Config patch deployments.

<h3 id="osconfigprojectspatchdeploymentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the parent in the form `projects/*`.|
|pageSize|query|integer|false|Optional. The maximum number of patch deployments to return. Default is 100.|
|pageToken|query|string|false|Optional. A pagination token returned from a previous call to ListPatchDeployments that indicates where this listing should continue from.|
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
  "patchDeployments": [
    {
      "createTime": "string",
      "description": "string",
      "duration": "string",
      "instanceFilter": {
        "all": true,
        "groupLabels": [
          {
            "labels": {
              "property1": "string",
              "property2": "string"
            }
          }
        ],
        "instanceNamePrefixes": [
          "string"
        ],
        "instances": [
          "string"
        ],
        "zones": [
          "string"
        ]
      },
      "lastExecuteTime": "string",
      "name": "string",
      "oneTimeSchedule": {
        "executeTime": "string"
      },
      "patchConfig": {
        "apt": {
          "excludes": [
            "string"
          ],
          "exclusivePackages": [
            "string"
          ],
          "type": "TYPE_UNSPECIFIED"
        },
        "goo": {},
        "migInstancesAllowed": true,
        "postStep": {
          "linuxExecStepConfig": {
            "allowedSuccessCodes": [
              0
            ],
            "gcsObject": {
              "bucket": "string",
              "generationNumber": "string",
              "object": "string"
            },
            "interpreter": "INTERPRETER_UNSPECIFIED",
            "localPath": "string"
          },
          "windowsExecStepConfig": {
            "allowedSuccessCodes": [
              0
            ],
            "gcsObject": {
              "bucket": "string",
              "generationNumber": "string",
              "object": "string"
            },
            "interpreter": "INTERPRETER_UNSPECIFIED",
            "localPath": "string"
          }
        },
        "preStep": {
          "linuxExecStepConfig": {
            "allowedSuccessCodes": [
              0
            ],
            "gcsObject": {
              "bucket": "string",
              "generationNumber": "string",
              "object": "string"
            },
            "interpreter": "INTERPRETER_UNSPECIFIED",
            "localPath": "string"
          },
          "windowsExecStepConfig": {
            "allowedSuccessCodes": [
              0
            ],
            "gcsObject": {
              "bucket": "string",
              "generationNumber": "string",
              "object": "string"
            },
            "interpreter": "INTERPRETER_UNSPECIFIED",
            "localPath": "string"
          }
        },
        "rebootConfig": "REBOOT_CONFIG_UNSPECIFIED",
        "windowsUpdate": {
          "classifications": [
            "CLASSIFICATION_UNSPECIFIED"
          ],
          "excludes": [
            "string"
          ],
          "exclusivePatches": [
            "string"
          ]
        },
        "yum": {
          "excludes": [
            "string"
          ],
          "exclusivePackages": [
            "string"
          ],
          "minimal": true,
          "security": true
        },
        "zypper": {
          "categories": [
            "string"
          ],
          "excludes": [
            "string"
          ],
          "exclusivePatches": [
            "string"
          ],
          "severities": [
            "string"
          ],
          "withOptional": true,
          "withUpdate": true
        }
      },
      "recurringSchedule": {
        "endTime": "string",
        "frequency": "FREQUENCY_UNSPECIFIED",
        "lastExecuteTime": "string",
        "monthly": {
          "monthDay": 0,
          "weekDayOfMonth": {
            "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
            "dayOffset": 0,
            "weekOrdinal": 0
          }
        },
        "nextExecuteTime": "string",
        "startTime": "string",
        "timeOfDay": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        },
        "timeZone": {
          "id": "string",
          "version": "string"
        },
        "weekly": {
          "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED"
        }
      },
      "rollout": {
        "disruptionBudget": {
          "fixed": 0,
          "percent": 0
        },
        "mode": "MODE_UNSPECIFIED"
      },
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="osconfigprojectspatchdeploymentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListPatchDeploymentsResponse](#schemalistpatchdeploymentsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## osconfig.projects.patchDeployments.create

<a id="opIdosconfig.projects.patchDeployments.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/patchDeployments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "duration": "string",
    "instanceFilter": {
      "all": true,
      "groupLabels": [
        {
          "labels": {
            "property1": "string",
            "property2": "string"
          }
        }
      ],
      "instanceNamePrefixes": [
        "string"
      ],
      "instances": [
        "string"
      ],
      "zones": [
        "string"
      ]
    },
    "name": "string",
    "oneTimeSchedule": {
      "executeTime": "string"
    },
    "patchConfig": {
      "apt": {
        "excludes": [
          "string"
        ],
        "exclusivePackages": [
          "string"
        ],
        "type": "TYPE_UNSPECIFIED"
      },
      "goo": {},
      "migInstancesAllowed": true,
      "postStep": {
        "linuxExecStepConfig": {
          "allowedSuccessCodes": [
            0
          ],
          "gcsObject": {
            "bucket": "string",
            "generationNumber": "string",
            "object": "string"
          },
          "interpreter": "INTERPRETER_UNSPECIFIED",
          "localPath": "string"
        },
        "windowsExecStepConfig": {
          "allowedSuccessCodes": [
            0
          ],
          "gcsObject": {
            "bucket": "string",
            "generationNumber": "string",
            "object": "string"
          },
          "interpreter": "INTERPRETER_UNSPECIFIED",
          "localPath": "string"
        }
      },
      "preStep": {
        "linuxExecStepConfig": {
          "allowedSuccessCodes": [
            0
          ],
          "gcsObject": {
            "bucket": "string",
            "generationNumber": "string",
            "object": "string"
          },
          "interpreter": "INTERPRETER_UNSPECIFIED",
          "localPath": "string"
        },
        "windowsExecStepConfig": {
          "allowedSuccessCodes": [
            0
          ],
          "gcsObject": {
            "bucket": "string",
            "generationNumber": "string",
            "object": "string"
          },
          "interpreter": "INTERPRETER_UNSPECIFIED",
          "localPath": "string"
        }
      },
      "rebootConfig": "REBOOT_CONFIG_UNSPECIFIED",
      "windowsUpdate": {
        "classifications": [
          "CLASSIFICATION_UNSPECIFIED"
        ],
        "excludes": [
          "string"
        ],
        "exclusivePatches": [
          "string"
        ]
      },
      "yum": {
        "excludes": [
          "string"
        ],
        "exclusivePackages": [
          "string"
        ],
        "minimal": true,
        "security": true
      },
      "zypper": {
        "categories": [
          "string"
        ],
        "excludes": [
          "string"
        ],
        "exclusivePatches": [
          "string"
        ],
        "severities": [
          "string"
        ],
        "withOptional": true,
        "withUpdate": true
      }
    },
    "recurringSchedule": {
      "endTime": "string",
      "frequency": "FREQUENCY_UNSPECIFIED",
      "monthly": {
        "monthDay": 0,
        "weekDayOfMonth": {
          "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
          "dayOffset": 0,
          "weekOrdinal": 0
        }
      },
      "startTime": "string",
      "timeOfDay": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "timeZone": {
        "id": "string",
        "version": "string"
      },
      "weekly": {
        "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED"
      }
    },
    "rollout": {
      "disruptionBudget": {
        "fixed": 0,
        "percent": 0
      },
      "mode": "MODE_UNSPECIFIED"
    }
  }'
```

`POST /v1beta/{parent}/patchDeployments`

Create an OS Config patch deployment.

> Body parameter

```json
{
  "description": "string",
  "duration": "string",
  "instanceFilter": {
    "all": true,
    "groupLabels": [
      {
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "instanceNamePrefixes": [
      "string"
    ],
    "instances": [
      "string"
    ],
    "zones": [
      "string"
    ]
  },
  "name": "string",
  "oneTimeSchedule": {
    "executeTime": "string"
  },
  "patchConfig": {
    "apt": {
      "excludes": [
        "string"
      ],
      "exclusivePackages": [
        "string"
      ],
      "type": "TYPE_UNSPECIFIED"
    },
    "goo": {},
    "migInstancesAllowed": true,
    "postStep": {
      "linuxExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      },
      "windowsExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      }
    },
    "preStep": {
      "linuxExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      },
      "windowsExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      }
    },
    "rebootConfig": "REBOOT_CONFIG_UNSPECIFIED",
    "windowsUpdate": {
      "classifications": [
        "CLASSIFICATION_UNSPECIFIED"
      ],
      "excludes": [
        "string"
      ],
      "exclusivePatches": [
        "string"
      ]
    },
    "yum": {
      "excludes": [
        "string"
      ],
      "exclusivePackages": [
        "string"
      ],
      "minimal": true,
      "security": true
    },
    "zypper": {
      "categories": [
        "string"
      ],
      "excludes": [
        "string"
      ],
      "exclusivePatches": [
        "string"
      ],
      "severities": [
        "string"
      ],
      "withOptional": true,
      "withUpdate": true
    }
  },
  "recurringSchedule": {
    "endTime": "string",
    "frequency": "FREQUENCY_UNSPECIFIED",
    "monthly": {
      "monthDay": 0,
      "weekDayOfMonth": {
        "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
        "dayOffset": 0,
        "weekOrdinal": 0
      }
    },
    "startTime": "string",
    "timeOfDay": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    },
    "timeZone": {
      "id": "string",
      "version": "string"
    },
    "weekly": {
      "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED"
    }
  },
  "rollout": {
    "disruptionBudget": {
      "fixed": 0,
      "percent": 0
    },
    "mode": "MODE_UNSPECIFIED"
  }
}
```

<h3 id="osconfigprojectspatchdeploymentscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project to apply this patch deployment to in the form `projects/*`.|
|patchDeploymentId|query|string|false|Required. A name for the patch deployment in the project. When creating a name the following rules apply: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project.|
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
|body|body|[PatchDeployment](#schemapatchdeployment)|false|none|
|» description|body|string|false|Optional. Description of the patch deployment. Length of the description is limited to 1024 characters.|
|» duration|body|string(google-duration)|false|Optional. Duration of the patch. After the duration ends, the patch times out.|
|» instanceFilter|body|[PatchInstanceFilter](#schemapatchinstancefilter)|false|Required. VM instances to patch.|
|» name|body|string|false|Unique name for the patch deployment resource in a project. The patch deployment name is in the form: `projects/{project_id}/patchDeployments/{patch_deployment_id}`. This field is ignored when you create a new patch deployment.|
|» oneTimeSchedule|body|[OneTimeSchedule](#schemaonetimeschedule)|false|Required. Schedule a one-time execution.|
|» patchConfig|body|[PatchConfig](#schemapatchconfig)|false|Optional. Patch configuration that is applied.|
|» recurringSchedule|body|[RecurringSchedule](#schemarecurringschedule)|false|Required. Schedule recurring executions.|
|» rollout|body|[PatchRollout](#schemapatchrollout)|false|Optional. Rollout strategy of the patch job.|

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
  "description": "string",
  "duration": "string",
  "instanceFilter": {
    "all": true,
    "groupLabels": [
      {
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "instanceNamePrefixes": [
      "string"
    ],
    "instances": [
      "string"
    ],
    "zones": [
      "string"
    ]
  },
  "lastExecuteTime": "string",
  "name": "string",
  "oneTimeSchedule": {
    "executeTime": "string"
  },
  "patchConfig": {
    "apt": {
      "excludes": [
        "string"
      ],
      "exclusivePackages": [
        "string"
      ],
      "type": "TYPE_UNSPECIFIED"
    },
    "goo": {},
    "migInstancesAllowed": true,
    "postStep": {
      "linuxExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      },
      "windowsExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      }
    },
    "preStep": {
      "linuxExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      },
      "windowsExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      }
    },
    "rebootConfig": "REBOOT_CONFIG_UNSPECIFIED",
    "windowsUpdate": {
      "classifications": [
        "CLASSIFICATION_UNSPECIFIED"
      ],
      "excludes": [
        "string"
      ],
      "exclusivePatches": [
        "string"
      ]
    },
    "yum": {
      "excludes": [
        "string"
      ],
      "exclusivePackages": [
        "string"
      ],
      "minimal": true,
      "security": true
    },
    "zypper": {
      "categories": [
        "string"
      ],
      "excludes": [
        "string"
      ],
      "exclusivePatches": [
        "string"
      ],
      "severities": [
        "string"
      ],
      "withOptional": true,
      "withUpdate": true
    }
  },
  "recurringSchedule": {
    "endTime": "string",
    "frequency": "FREQUENCY_UNSPECIFIED",
    "lastExecuteTime": "string",
    "monthly": {
      "monthDay": 0,
      "weekDayOfMonth": {
        "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
        "dayOffset": 0,
        "weekOrdinal": 0
      }
    },
    "nextExecuteTime": "string",
    "startTime": "string",
    "timeOfDay": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    },
    "timeZone": {
      "id": "string",
      "version": "string"
    },
    "weekly": {
      "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED"
    }
  },
  "rollout": {
    "disruptionBudget": {
      "fixed": 0,
      "percent": 0
    },
    "mode": "MODE_UNSPECIFIED"
  },
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

<h3 id="osconfigprojectspatchdeploymentscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PatchDeployment](#schemapatchdeployment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## osconfig.projects.patchJobs.list

<a id="opIdosconfig.projects.patchJobs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/patchJobs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/patchJobs`

Get a list of patch jobs.

<h3 id="osconfigprojectspatchjobslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. In the form of `projects/*`|
|filter|query|string|false|If provided, this field specifies the criteria that must be met by patch jobs to be included in the response. Currently, filtering is only available on the patch_deployment field.|
|pageSize|query|integer|false|The maximum number of instance status to return.|
|pageToken|query|string|false|A pagination token returned from a previous call that indicates where this listing should continue from.|
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
  "patchJobs": [
    {
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "dryRun": true,
      "duration": "string",
      "errorMessage": "string",
      "instanceDetailsSummary": {
        "ackedInstanceCount": "string",
        "applyingPatchesInstanceCount": "string",
        "downloadingPatchesInstanceCount": "string",
        "failedInstanceCount": "string",
        "inactiveInstanceCount": "string",
        "noAgentDetectedInstanceCount": "string",
        "notifiedInstanceCount": "string",
        "pendingInstanceCount": "string",
        "postPatchStepInstanceCount": "string",
        "prePatchStepInstanceCount": "string",
        "rebootingInstanceCount": "string",
        "startedInstanceCount": "string",
        "succeededInstanceCount": "string",
        "succeededRebootRequiredInstanceCount": "string",
        "timedOutInstanceCount": "string"
      },
      "instanceFilter": {
        "all": true,
        "groupLabels": [
          {
            "labels": {
              "property1": "string",
              "property2": "string"
            }
          }
        ],
        "instanceNamePrefixes": [
          "string"
        ],
        "instances": [
          "string"
        ],
        "zones": [
          "string"
        ]
      },
      "name": "string",
      "patchConfig": {
        "apt": {
          "excludes": [
            "string"
          ],
          "exclusivePackages": [
            "string"
          ],
          "type": "TYPE_UNSPECIFIED"
        },
        "goo": {},
        "migInstancesAllowed": true,
        "postStep": {
          "linuxExecStepConfig": {
            "allowedSuccessCodes": [
              0
            ],
            "gcsObject": {
              "bucket": "string",
              "generationNumber": "string",
              "object": "string"
            },
            "interpreter": "INTERPRETER_UNSPECIFIED",
            "localPath": "string"
          },
          "windowsExecStepConfig": {
            "allowedSuccessCodes": [
              0
            ],
            "gcsObject": {
              "bucket": "string",
              "generationNumber": "string",
              "object": "string"
            },
            "interpreter": "INTERPRETER_UNSPECIFIED",
            "localPath": "string"
          }
        },
        "preStep": {
          "linuxExecStepConfig": {
            "allowedSuccessCodes": [
              0
            ],
            "gcsObject": {
              "bucket": "string",
              "generationNumber": "string",
              "object": "string"
            },
            "interpreter": "INTERPRETER_UNSPECIFIED",
            "localPath": "string"
          },
          "windowsExecStepConfig": {
            "allowedSuccessCodes": [
              0
            ],
            "gcsObject": {
              "bucket": "string",
              "generationNumber": "string",
              "object": "string"
            },
            "interpreter": "INTERPRETER_UNSPECIFIED",
            "localPath": "string"
          }
        },
        "rebootConfig": "REBOOT_CONFIG_UNSPECIFIED",
        "windowsUpdate": {
          "classifications": [
            "CLASSIFICATION_UNSPECIFIED"
          ],
          "excludes": [
            "string"
          ],
          "exclusivePatches": [
            "string"
          ]
        },
        "yum": {
          "excludes": [
            "string"
          ],
          "exclusivePackages": [
            "string"
          ],
          "minimal": true,
          "security": true
        },
        "zypper": {
          "categories": [
            "string"
          ],
          "excludes": [
            "string"
          ],
          "exclusivePatches": [
            "string"
          ],
          "severities": [
            "string"
          ],
          "withOptional": true,
          "withUpdate": true
        }
      },
      "patchDeployment": "string",
      "percentComplete": 0,
      "rollout": {
        "disruptionBudget": {
          "fixed": 0,
          "percent": 0
        },
        "mode": "MODE_UNSPECIFIED"
      },
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="osconfigprojectspatchjobslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListPatchJobsResponse](#schemalistpatchjobsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## osconfig.projects.patchJobs.execute

<a id="opIdosconfig.projects.patchJobs.execute"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/patchJobs:execute \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "displayName": "string",
    "dryRun": true,
    "duration": "string",
    "instanceFilter": {
      "all": true,
      "groupLabels": [
        {
          "labels": {
            "property1": "string",
            "property2": "string"
          }
        }
      ],
      "instanceNamePrefixes": [
        "string"
      ],
      "instances": [
        "string"
      ],
      "zones": [
        "string"
      ]
    },
    "patchConfig": {
      "apt": {
        "excludes": [
          "string"
        ],
        "exclusivePackages": [
          "string"
        ],
        "type": "TYPE_UNSPECIFIED"
      },
      "goo": {},
      "migInstancesAllowed": true,
      "postStep": {
        "linuxExecStepConfig": {
          "allowedSuccessCodes": [
            0
          ],
          "gcsObject": {
            "bucket": "string",
            "generationNumber": "string",
            "object": "string"
          },
          "interpreter": "INTERPRETER_UNSPECIFIED",
          "localPath": "string"
        },
        "windowsExecStepConfig": {
          "allowedSuccessCodes": [
            0
          ],
          "gcsObject": {
            "bucket": "string",
            "generationNumber": "string",
            "object": "string"
          },
          "interpreter": "INTERPRETER_UNSPECIFIED",
          "localPath": "string"
        }
      },
      "preStep": {
        "linuxExecStepConfig": {
          "allowedSuccessCodes": [
            0
          ],
          "gcsObject": {
            "bucket": "string",
            "generationNumber": "string",
            "object": "string"
          },
          "interpreter": "INTERPRETER_UNSPECIFIED",
          "localPath": "string"
        },
        "windowsExecStepConfig": {
          "allowedSuccessCodes": [
            0
          ],
          "gcsObject": {
            "bucket": "string",
            "generationNumber": "string",
            "object": "string"
          },
          "interpreter": "INTERPRETER_UNSPECIFIED",
          "localPath": "string"
        }
      },
      "rebootConfig": "REBOOT_CONFIG_UNSPECIFIED",
      "windowsUpdate": {
        "classifications": [
          "CLASSIFICATION_UNSPECIFIED"
        ],
        "excludes": [
          "string"
        ],
        "exclusivePatches": [
          "string"
        ]
      },
      "yum": {
        "excludes": [
          "string"
        ],
        "exclusivePackages": [
          "string"
        ],
        "minimal": true,
        "security": true
      },
      "zypper": {
        "categories": [
          "string"
        ],
        "excludes": [
          "string"
        ],
        "exclusivePatches": [
          "string"
        ],
        "severities": [
          "string"
        ],
        "withOptional": true,
        "withUpdate": true
      }
    },
    "rollout": {
      "disruptionBudget": {
        "fixed": 0,
        "percent": 0
      },
      "mode": "MODE_UNSPECIFIED"
    }
  }'
```

`POST /v1beta/{parent}/patchJobs:execute`

Patch VM instances by creating and running a patch job.

> Body parameter

```json
{
  "description": "string",
  "displayName": "string",
  "dryRun": true,
  "duration": "string",
  "instanceFilter": {
    "all": true,
    "groupLabels": [
      {
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "instanceNamePrefixes": [
      "string"
    ],
    "instances": [
      "string"
    ],
    "zones": [
      "string"
    ]
  },
  "patchConfig": {
    "apt": {
      "excludes": [
        "string"
      ],
      "exclusivePackages": [
        "string"
      ],
      "type": "TYPE_UNSPECIFIED"
    },
    "goo": {},
    "migInstancesAllowed": true,
    "postStep": {
      "linuxExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      },
      "windowsExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      }
    },
    "preStep": {
      "linuxExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      },
      "windowsExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      }
    },
    "rebootConfig": "REBOOT_CONFIG_UNSPECIFIED",
    "windowsUpdate": {
      "classifications": [
        "CLASSIFICATION_UNSPECIFIED"
      ],
      "excludes": [
        "string"
      ],
      "exclusivePatches": [
        "string"
      ]
    },
    "yum": {
      "excludes": [
        "string"
      ],
      "exclusivePackages": [
        "string"
      ],
      "minimal": true,
      "security": true
    },
    "zypper": {
      "categories": [
        "string"
      ],
      "excludes": [
        "string"
      ],
      "exclusivePatches": [
        "string"
      ],
      "severities": [
        "string"
      ],
      "withOptional": true,
      "withUpdate": true
    }
  },
  "rollout": {
    "disruptionBudget": {
      "fixed": 0,
      "percent": 0
    },
    "mode": "MODE_UNSPECIFIED"
  }
}
```

<h3 id="osconfigprojectspatchjobsexecute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project in which to run this patch in the form `projects/*`|
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
|body|body|[ExecutePatchJobRequest](#schemaexecutepatchjobrequest)|false|none|
|» description|body|string|false|Description of the patch job. Length of the description is limited to 1024 characters.|
|» displayName|body|string|false|Display name for this patch job. This does not have to be unique.|
|» dryRun|body|boolean|false|If this patch is a dry-run only, instances are contacted but will do nothing.|
|» duration|body|string(google-duration)|false|Duration of the patch job. After the duration ends, the patch job times out.|
|» instanceFilter|body|[PatchInstanceFilter](#schemapatchinstancefilter)|false|Required. Instances to patch, either explicitly or filtered by some criteria such as zone or labels.|
|» patchConfig|body|[PatchConfig](#schemapatchconfig)|false|Patch configuration being applied. If omitted, instances are patched using the default configurations.|
|» rollout|body|[PatchRollout](#schemapatchrollout)|false|Rollout strategy of the patch job.|

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
  "description": "string",
  "displayName": "string",
  "dryRun": true,
  "duration": "string",
  "errorMessage": "string",
  "instanceDetailsSummary": {
    "ackedInstanceCount": "string",
    "applyingPatchesInstanceCount": "string",
    "downloadingPatchesInstanceCount": "string",
    "failedInstanceCount": "string",
    "inactiveInstanceCount": "string",
    "noAgentDetectedInstanceCount": "string",
    "notifiedInstanceCount": "string",
    "pendingInstanceCount": "string",
    "postPatchStepInstanceCount": "string",
    "prePatchStepInstanceCount": "string",
    "rebootingInstanceCount": "string",
    "startedInstanceCount": "string",
    "succeededInstanceCount": "string",
    "succeededRebootRequiredInstanceCount": "string",
    "timedOutInstanceCount": "string"
  },
  "instanceFilter": {
    "all": true,
    "groupLabels": [
      {
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "instanceNamePrefixes": [
      "string"
    ],
    "instances": [
      "string"
    ],
    "zones": [
      "string"
    ]
  },
  "name": "string",
  "patchConfig": {
    "apt": {
      "excludes": [
        "string"
      ],
      "exclusivePackages": [
        "string"
      ],
      "type": "TYPE_UNSPECIFIED"
    },
    "goo": {},
    "migInstancesAllowed": true,
    "postStep": {
      "linuxExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      },
      "windowsExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      }
    },
    "preStep": {
      "linuxExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      },
      "windowsExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      }
    },
    "rebootConfig": "REBOOT_CONFIG_UNSPECIFIED",
    "windowsUpdate": {
      "classifications": [
        "CLASSIFICATION_UNSPECIFIED"
      ],
      "excludes": [
        "string"
      ],
      "exclusivePatches": [
        "string"
      ]
    },
    "yum": {
      "excludes": [
        "string"
      ],
      "exclusivePackages": [
        "string"
      ],
      "minimal": true,
      "security": true
    },
    "zypper": {
      "categories": [
        "string"
      ],
      "excludes": [
        "string"
      ],
      "exclusivePatches": [
        "string"
      ],
      "severities": [
        "string"
      ],
      "withOptional": true,
      "withUpdate": true
    }
  },
  "patchDeployment": "string",
  "percentComplete": 0,
  "rollout": {
    "disruptionBudget": {
      "fixed": 0,
      "percent": 0
    },
    "mode": "MODE_UNSPECIFIED"
  },
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

<h3 id="osconfigprojectspatchjobsexecute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PatchJob](#schemapatchjob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AptRepository">AptRepository</h2>
<!-- backwards compatibility -->
<a id="schemaaptrepository"></a>
<a id="schema_AptRepository"></a>
<a id="tocSaptrepository"></a>
<a id="tocsaptrepository"></a>

```json
{
  "archiveType": "ARCHIVE_TYPE_UNSPECIFIED",
  "components": [
    "string"
  ],
  "distribution": "string",
  "gpgKey": "string",
  "uri": "string"
}
```

Represents a single Apt package repository. This repository is added to a repo file that is stored at `/etc/apt/sources.list.d/google_osconfig.list`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archiveType|string|false|none|Type of archive files in this repository. The default behavior is DEB.|
|components|[string]|false|none|Required. List of components for this repository. Must contain at least one item.|
|distribution|string|false|none|Required. Distribution of this repository.|
|gpgKey|string|false|none|URI of the key file for this repository. The agent maintains a keyring at `/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg` containing all the keys in any applied guest policy.|
|uri|string|false|none|Required. URI for this repository.|

#### Enumerated Values

|Property|Value|
|---|---|
|archiveType|ARCHIVE_TYPE_UNSPECIFIED|
|archiveType|DEB|
|archiveType|DEB_SRC|

<h2 id="tocS_AptSettings">AptSettings</h2>
<!-- backwards compatibility -->
<a id="schemaaptsettings"></a>
<a id="schema_AptSettings"></a>
<a id="tocSaptsettings"></a>
<a id="tocsaptsettings"></a>

```json
{
  "excludes": [
    "string"
  ],
  "exclusivePackages": [
    "string"
  ],
  "type": "TYPE_UNSPECIFIED"
}
```

Apt patching is completed by executing `apt-get update && apt-get upgrade`. Additional options can be set to control how this is executed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|excludes|[string]|false|none|List of packages to exclude from update. These packages will be excluded|
|exclusivePackages|[string]|false|none|An exclusive list of packages to be updated. These are the only packages that will be updated. If these packages are not installed, they will be ignored. This field cannot be specified with any other patch configuration fields.|
|type|string|false|none|By changing the type to DIST, the patching is performed using `apt-get dist-upgrade` instead.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|DIST|
|type|UPGRADE|

<h2 id="tocS_Assignment">Assignment</h2>
<!-- backwards compatibility -->
<a id="schemaassignment"></a>
<a id="schema_Assignment"></a>
<a id="tocSassignment"></a>
<a id="tocsassignment"></a>

```json
{
  "groupLabels": [
    {
      "labels": {
        "property1": "string",
        "property2": "string"
      }
    }
  ],
  "instanceNamePrefixes": [
    "string"
  ],
  "instances": [
    "string"
  ],
  "osTypes": [
    {
      "osArchitecture": "string",
      "osShortName": "string",
      "osVersion": "string"
    }
  ],
  "zones": [
    "string"
  ]
}
```

An assignment represents the group or groups of VM instances that the policy applies to. If an assignment is empty, it applies to all VM instances. Otherwise, the targeted VM instances must meet all the criteria specified. So if both labels and zones are specified, the policy applies to VM instances with those labels and in those zones.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groupLabels|[[AssignmentGroupLabel](#schemaassignmentgrouplabel)]|false|none|Targets instances matching at least one of these label sets. This allows an assignment to target disparate groups, for example "env=prod or env=staging".|
|instanceNamePrefixes|[string]|false|none|Targets VM instances whose name starts with one of these prefixes. Like labels, this is another way to group VM instances when targeting configs, for example prefix="prod-". Only supported for project-level policies.|
|instances|[string]|false|none|Targets any of the instances specified. Instances are specified by their URI in the form `zones/[ZONE]/instances/[INSTANCE_NAME]`. Instance targeting is uncommon and is supported to facilitate the management of changes by the instance or to target specific VM instances for development and testing. Only supported for project-level policies and must reference instances within this project.|
|osTypes|[[AssignmentOsType](#schemaassignmentostype)]|false|none|Targets VM instances matching at least one of the following OS types. VM instances must match all supplied criteria for a given OsType to be included.|
|zones|[string]|false|none|Targets instances in any of these zones. Leave empty to target instances in any zone. Zonal targeting is uncommon and is supported to facilitate the management of changes by zone.|

<h2 id="tocS_AssignmentGroupLabel">AssignmentGroupLabel</h2>
<!-- backwards compatibility -->
<a id="schemaassignmentgrouplabel"></a>
<a id="schema_AssignmentGroupLabel"></a>
<a id="tocSassignmentgrouplabel"></a>
<a id="tocsassignmentgrouplabel"></a>

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents a group of VM intances that can be identified as having all these labels, for example "env=prod and app=web".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|object|false|none|Google Compute Engine instance labels that must be present for an instance to be included in this assignment group.|

<h2 id="tocS_AssignmentOsType">AssignmentOsType</h2>
<!-- backwards compatibility -->
<a id="schemaassignmentostype"></a>
<a id="schema_AssignmentOsType"></a>
<a id="tocSassignmentostype"></a>
<a id="tocsassignmentostype"></a>

```json
{
  "osArchitecture": "string",
  "osShortName": "string",
  "osVersion": "string"
}
```

Defines the criteria for selecting VM Instances by OS type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|osArchitecture|string|false|none|Targets VM instances with OS Inventory enabled and having the following OS architecture.|
|osShortName|string|false|none|Targets VM instances with OS Inventory enabled and having the following OS short name, for example "debian" or "windows".|
|osVersion|string|false|none|Targets VM instances with OS Inventory enabled and having the following following OS version.|

<h2 id="tocS_CancelPatchJobRequest">CancelPatchJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelpatchjobrequest"></a>
<a id="schema_CancelPatchJobRequest"></a>
<a id="tocScancelpatchjobrequest"></a>
<a id="tocscancelpatchjobrequest"></a>

```json
{}
```

Message for canceling a patch job.

<h2 id="tocS_EffectiveGuestPolicy">EffectiveGuestPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaeffectiveguestpolicy"></a>
<a id="schema_EffectiveGuestPolicy"></a>
<a id="tocSeffectiveguestpolicy"></a>
<a id="tocseffectiveguestpolicy"></a>

```json
{
  "packageRepositories": [
    {
      "packageRepository": {
        "apt": {
          "archiveType": "ARCHIVE_TYPE_UNSPECIFIED",
          "components": [
            "string"
          ],
          "distribution": "string",
          "gpgKey": "string",
          "uri": "string"
        },
        "goo": {
          "name": "string",
          "url": "string"
        },
        "yum": {
          "baseUrl": "string",
          "displayName": "string",
          "gpgKeys": [
            "string"
          ],
          "id": "string"
        },
        "zypper": {
          "baseUrl": "string",
          "displayName": "string",
          "gpgKeys": [
            "string"
          ],
          "id": "string"
        }
      },
      "source": "string"
    }
  ],
  "packages": [
    {
      "package": {
        "desiredState": "DESIRED_STATE_UNSPECIFIED",
        "manager": "MANAGER_UNSPECIFIED",
        "name": "string"
      },
      "source": "string"
    }
  ],
  "softwareRecipes": [
    {
      "softwareRecipe": {
        "artifacts": [
          {
            "allowInsecure": true,
            "gcs": {
              "bucket": "string",
              "generation": "string",
              "object": "string"
            },
            "id": "string",
            "remote": {
              "checksum": "string",
              "uri": "string"
            }
          }
        ],
        "desiredState": "DESIRED_STATE_UNSPECIFIED",
        "installSteps": [
          {
            "archiveExtraction": {
              "artifactId": "string",
              "destination": "string",
              "type": "ARCHIVE_TYPE_UNSPECIFIED"
            },
            "dpkgInstallation": {
              "artifactId": "string"
            },
            "fileCopy": {
              "artifactId": "string",
              "destination": "string",
              "overwrite": true,
              "permissions": "string"
            },
            "fileExec": {
              "allowedExitCodes": [
                0
              ],
              "args": [
                "string"
              ],
              "artifactId": "string",
              "localPath": "string"
            },
            "msiInstallation": {
              "allowedExitCodes": [
                0
              ],
              "artifactId": "string",
              "flags": [
                "string"
              ]
            },
            "rpmInstallation": {
              "artifactId": "string"
            },
            "scriptRun": {
              "allowedExitCodes": [
                0
              ],
              "interpreter": "INTERPRETER_UNSPECIFIED",
              "script": "string"
            }
          }
        ],
        "name": "string",
        "updateSteps": [
          {
            "archiveExtraction": {
              "artifactId": "string",
              "destination": "string",
              "type": "ARCHIVE_TYPE_UNSPECIFIED"
            },
            "dpkgInstallation": {
              "artifactId": "string"
            },
            "fileCopy": {
              "artifactId": "string",
              "destination": "string",
              "overwrite": true,
              "permissions": "string"
            },
            "fileExec": {
              "allowedExitCodes": [
                0
              ],
              "args": [
                "string"
              ],
              "artifactId": "string",
              "localPath": "string"
            },
            "msiInstallation": {
              "allowedExitCodes": [
                0
              ],
              "artifactId": "string",
              "flags": [
                "string"
              ]
            },
            "rpmInstallation": {
              "artifactId": "string"
            },
            "scriptRun": {
              "allowedExitCodes": [
                0
              ],
              "interpreter": "INTERPRETER_UNSPECIFIED",
              "script": "string"
            }
          }
        ],
        "version": "string"
      },
      "source": "string"
    }
  ]
}
```

The effective guest policy that applies to a VM instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|packageRepositories|[[EffectiveGuestPolicySourcedPackageRepository](#schemaeffectiveguestpolicysourcedpackagerepository)]|false|none|List of package repository configurations assigned to the VM instance.|
|packages|[[EffectiveGuestPolicySourcedPackage](#schemaeffectiveguestpolicysourcedpackage)]|false|none|List of package configurations assigned to the VM instance.|
|softwareRecipes|[[EffectiveGuestPolicySourcedSoftwareRecipe](#schemaeffectiveguestpolicysourcedsoftwarerecipe)]|false|none|List of recipes assigned to the VM instance.|

<h2 id="tocS_EffectiveGuestPolicySourcedPackage">EffectiveGuestPolicySourcedPackage</h2>
<!-- backwards compatibility -->
<a id="schemaeffectiveguestpolicysourcedpackage"></a>
<a id="schema_EffectiveGuestPolicySourcedPackage"></a>
<a id="tocSeffectiveguestpolicysourcedpackage"></a>
<a id="tocseffectiveguestpolicysourcedpackage"></a>

```json
{
  "package": {
    "desiredState": "DESIRED_STATE_UNSPECIFIED",
    "manager": "MANAGER_UNSPECIFIED",
    "name": "string"
  },
  "source": "string"
}
```

A guest policy package including its source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|package|[Package](#schemapackage)|false|none|A software package to configure on the VM instance.|
|source|string|false|none|Name of the guest policy providing this config.|

<h2 id="tocS_EffectiveGuestPolicySourcedPackageRepository">EffectiveGuestPolicySourcedPackageRepository</h2>
<!-- backwards compatibility -->
<a id="schemaeffectiveguestpolicysourcedpackagerepository"></a>
<a id="schema_EffectiveGuestPolicySourcedPackageRepository"></a>
<a id="tocSeffectiveguestpolicysourcedpackagerepository"></a>
<a id="tocseffectiveguestpolicysourcedpackagerepository"></a>

```json
{
  "packageRepository": {
    "apt": {
      "archiveType": "ARCHIVE_TYPE_UNSPECIFIED",
      "components": [
        "string"
      ],
      "distribution": "string",
      "gpgKey": "string",
      "uri": "string"
    },
    "goo": {
      "name": "string",
      "url": "string"
    },
    "yum": {
      "baseUrl": "string",
      "displayName": "string",
      "gpgKeys": [
        "string"
      ],
      "id": "string"
    },
    "zypper": {
      "baseUrl": "string",
      "displayName": "string",
      "gpgKeys": [
        "string"
      ],
      "id": "string"
    }
  },
  "source": "string"
}
```

A guest policy package repository including its source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|packageRepository|[PackageRepository](#schemapackagerepository)|false|none|A software package repository to configure on the VM instance.|
|source|string|false|none|Name of the guest policy providing this config.|

<h2 id="tocS_EffectiveGuestPolicySourcedSoftwareRecipe">EffectiveGuestPolicySourcedSoftwareRecipe</h2>
<!-- backwards compatibility -->
<a id="schemaeffectiveguestpolicysourcedsoftwarerecipe"></a>
<a id="schema_EffectiveGuestPolicySourcedSoftwareRecipe"></a>
<a id="tocSeffectiveguestpolicysourcedsoftwarerecipe"></a>
<a id="tocseffectiveguestpolicysourcedsoftwarerecipe"></a>

```json
{
  "softwareRecipe": {
    "artifacts": [
      {
        "allowInsecure": true,
        "gcs": {
          "bucket": "string",
          "generation": "string",
          "object": "string"
        },
        "id": "string",
        "remote": {
          "checksum": "string",
          "uri": "string"
        }
      }
    ],
    "desiredState": "DESIRED_STATE_UNSPECIFIED",
    "installSteps": [
      {
        "archiveExtraction": {
          "artifactId": "string",
          "destination": "string",
          "type": "ARCHIVE_TYPE_UNSPECIFIED"
        },
        "dpkgInstallation": {
          "artifactId": "string"
        },
        "fileCopy": {
          "artifactId": "string",
          "destination": "string",
          "overwrite": true,
          "permissions": "string"
        },
        "fileExec": {
          "allowedExitCodes": [
            0
          ],
          "args": [
            "string"
          ],
          "artifactId": "string",
          "localPath": "string"
        },
        "msiInstallation": {
          "allowedExitCodes": [
            0
          ],
          "artifactId": "string",
          "flags": [
            "string"
          ]
        },
        "rpmInstallation": {
          "artifactId": "string"
        },
        "scriptRun": {
          "allowedExitCodes": [
            0
          ],
          "interpreter": "INTERPRETER_UNSPECIFIED",
          "script": "string"
        }
      }
    ],
    "name": "string",
    "updateSteps": [
      {
        "archiveExtraction": {
          "artifactId": "string",
          "destination": "string",
          "type": "ARCHIVE_TYPE_UNSPECIFIED"
        },
        "dpkgInstallation": {
          "artifactId": "string"
        },
        "fileCopy": {
          "artifactId": "string",
          "destination": "string",
          "overwrite": true,
          "permissions": "string"
        },
        "fileExec": {
          "allowedExitCodes": [
            0
          ],
          "args": [
            "string"
          ],
          "artifactId": "string",
          "localPath": "string"
        },
        "msiInstallation": {
          "allowedExitCodes": [
            0
          ],
          "artifactId": "string",
          "flags": [
            "string"
          ]
        },
        "rpmInstallation": {
          "artifactId": "string"
        },
        "scriptRun": {
          "allowedExitCodes": [
            0
          ],
          "interpreter": "INTERPRETER_UNSPECIFIED",
          "script": "string"
        }
      }
    ],
    "version": "string"
  },
  "source": "string"
}
```

A guest policy recipe including its source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|softwareRecipe|[SoftwareRecipe](#schemasoftwarerecipe)|false|none|A software recipe to configure on the VM instance.|
|source|string|false|none|Name of the guest policy providing this config.|

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

<h2 id="tocS_ExecStep">ExecStep</h2>
<!-- backwards compatibility -->
<a id="schemaexecstep"></a>
<a id="schema_ExecStep"></a>
<a id="tocSexecstep"></a>
<a id="tocsexecstep"></a>

```json
{
  "linuxExecStepConfig": {
    "allowedSuccessCodes": [
      0
    ],
    "gcsObject": {
      "bucket": "string",
      "generationNumber": "string",
      "object": "string"
    },
    "interpreter": "INTERPRETER_UNSPECIFIED",
    "localPath": "string"
  },
  "windowsExecStepConfig": {
    "allowedSuccessCodes": [
      0
    ],
    "gcsObject": {
      "bucket": "string",
      "generationNumber": "string",
      "object": "string"
    },
    "interpreter": "INTERPRETER_UNSPECIFIED",
    "localPath": "string"
  }
}
```

A step that runs an executable for a PatchJob.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|linuxExecStepConfig|[ExecStepConfig](#schemaexecstepconfig)|false|none|The ExecStepConfig for all Linux VMs targeted by the PatchJob.|
|windowsExecStepConfig|[ExecStepConfig](#schemaexecstepconfig)|false|none|The ExecStepConfig for all Windows VMs targeted by the PatchJob.|

<h2 id="tocS_ExecStepConfig">ExecStepConfig</h2>
<!-- backwards compatibility -->
<a id="schemaexecstepconfig"></a>
<a id="schema_ExecStepConfig"></a>
<a id="tocSexecstepconfig"></a>
<a id="tocsexecstepconfig"></a>

```json
{
  "allowedSuccessCodes": [
    0
  ],
  "gcsObject": {
    "bucket": "string",
    "generationNumber": "string",
    "object": "string"
  },
  "interpreter": "INTERPRETER_UNSPECIFIED",
  "localPath": "string"
}
```

Common configurations for an ExecStep.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedSuccessCodes|[integer(int32)]|false|none|Defaults to [0]. A list of possible return values that the execution can return to indicate a success.|
|gcsObject|[GcsObject](#schemagcsobject)|false|none|A Google Cloud Storage object containing the executable.|
|interpreter|string|false|none|The script interpreter to use to run the script. If no interpreter is specified the script will be executed directly, which will likely only succeed for scripts with [shebang lines] (https://en.wikipedia.org/wiki/Shebang_\(Unix\)).|
|localPath|string|false|none|An absolute path to the executable on the VM.|

#### Enumerated Values

|Property|Value|
|---|---|
|interpreter|INTERPRETER_UNSPECIFIED|
|interpreter|NONE|
|interpreter|SHELL|
|interpreter|POWERSHELL|

<h2 id="tocS_ExecutePatchJobRequest">ExecutePatchJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexecutepatchjobrequest"></a>
<a id="schema_ExecutePatchJobRequest"></a>
<a id="tocSexecutepatchjobrequest"></a>
<a id="tocsexecutepatchjobrequest"></a>

```json
{
  "description": "string",
  "displayName": "string",
  "dryRun": true,
  "duration": "string",
  "instanceFilter": {
    "all": true,
    "groupLabels": [
      {
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "instanceNamePrefixes": [
      "string"
    ],
    "instances": [
      "string"
    ],
    "zones": [
      "string"
    ]
  },
  "patchConfig": {
    "apt": {
      "excludes": [
        "string"
      ],
      "exclusivePackages": [
        "string"
      ],
      "type": "TYPE_UNSPECIFIED"
    },
    "goo": {},
    "migInstancesAllowed": true,
    "postStep": {
      "linuxExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      },
      "windowsExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      }
    },
    "preStep": {
      "linuxExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      },
      "windowsExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      }
    },
    "rebootConfig": "REBOOT_CONFIG_UNSPECIFIED",
    "windowsUpdate": {
      "classifications": [
        "CLASSIFICATION_UNSPECIFIED"
      ],
      "excludes": [
        "string"
      ],
      "exclusivePatches": [
        "string"
      ]
    },
    "yum": {
      "excludes": [
        "string"
      ],
      "exclusivePackages": [
        "string"
      ],
      "minimal": true,
      "security": true
    },
    "zypper": {
      "categories": [
        "string"
      ],
      "excludes": [
        "string"
      ],
      "exclusivePatches": [
        "string"
      ],
      "severities": [
        "string"
      ],
      "withOptional": true,
      "withUpdate": true
    }
  },
  "rollout": {
    "disruptionBudget": {
      "fixed": 0,
      "percent": 0
    },
    "mode": "MODE_UNSPECIFIED"
  }
}
```

A request message to initiate patching across Compute Engine instances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Description of the patch job. Length of the description is limited to 1024 characters.|
|displayName|string|false|none|Display name for this patch job. This does not have to be unique.|
|dryRun|boolean|false|none|If this patch is a dry-run only, instances are contacted but will do nothing.|
|duration|string(google-duration)|false|none|Duration of the patch job. After the duration ends, the patch job times out.|
|instanceFilter|[PatchInstanceFilter](#schemapatchinstancefilter)|false|none|Required. Instances to patch, either explicitly or filtered by some criteria such as zone or labels.|
|patchConfig|[PatchConfig](#schemapatchconfig)|false|none|Patch configuration being applied. If omitted, instances are patched using the default configurations.|
|rollout|[PatchRollout](#schemapatchrollout)|false|none|Rollout strategy of the patch job.|

<h2 id="tocS_FixedOrPercent">FixedOrPercent</h2>
<!-- backwards compatibility -->
<a id="schemafixedorpercent"></a>
<a id="schema_FixedOrPercent"></a>
<a id="tocSfixedorpercent"></a>
<a id="tocsfixedorpercent"></a>

```json
{
  "fixed": 0,
  "percent": 0
}
```

Message encapsulating a value that can be either absolute ("fixed") or relative ("percent") to a value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fixed|integer(int32)|false|none|Specifies a fixed value.|
|percent|integer(int32)|false|none|Specifies the relative value defined as a percentage, which will be multiplied by a reference value.|

<h2 id="tocS_GcsObject">GcsObject</h2>
<!-- backwards compatibility -->
<a id="schemagcsobject"></a>
<a id="schema_GcsObject"></a>
<a id="tocSgcsobject"></a>
<a id="tocsgcsobject"></a>

```json
{
  "bucket": "string",
  "generationNumber": "string",
  "object": "string"
}
```

Google Cloud Storage object representation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|string|false|none|Required. Bucket of the Google Cloud Storage object.|
|generationNumber|string(int64)|false|none|Required. Generation number of the Google Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change.|
|object|string|false|none|Required. Name of the Google Cloud Storage object.|

<h2 id="tocS_GooRepository">GooRepository</h2>
<!-- backwards compatibility -->
<a id="schemagoorepository"></a>
<a id="schema_GooRepository"></a>
<a id="tocSgoorepository"></a>
<a id="tocsgoorepository"></a>

```json
{
  "name": "string",
  "url": "string"
}
```

Represents a Goo package repository. These is added to a repo file that is stored at C:/ProgramData/GooGet/repos/google_osconfig.repo.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Required. The name of the repository.|
|url|string|false|none|Required. The url of the repository.|

<h2 id="tocS_GooSettings">GooSettings</h2>
<!-- backwards compatibility -->
<a id="schemagoosettings"></a>
<a id="schema_GooSettings"></a>
<a id="tocSgoosettings"></a>
<a id="tocsgoosettings"></a>

```json
{}
```

Googet patching is performed by running `googet update`.

<h2 id="tocS_GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadata">GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudosconfigv1__ospolicyassignmentoperationmetadata"></a>
<a id="schema_GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadata"></a>
<a id="tocSgooglecloudosconfigv1__ospolicyassignmentoperationmetadata"></a>
<a id="tocsgooglecloudosconfigv1__ospolicyassignmentoperationmetadata"></a>

```json
{
  "apiMethod": "API_METHOD_UNSPECIFIED",
  "osPolicyAssignment": "string",
  "rolloutStartTime": "string",
  "rolloutState": "ROLLOUT_STATE_UNSPECIFIED",
  "rolloutUpdateTime": "string"
}
```

OS policy assignment operation metadata provided by OS policy assignment API methods that return long running operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiMethod|string|false|none|The OS policy assignment API method.|
|osPolicyAssignment|string|false|none|Reference to the `OSPolicyAssignment` API resource. Format: `projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id@revision_id}`|
|rolloutStartTime|string(google-datetime)|false|none|Rollout start time|
|rolloutState|string|false|none|State of the rollout|
|rolloutUpdateTime|string(google-datetime)|false|none|Rollout update time|

#### Enumerated Values

|Property|Value|
|---|---|
|apiMethod|API_METHOD_UNSPECIFIED|
|apiMethod|CREATE|
|apiMethod|UPDATE|
|apiMethod|DELETE|
|rolloutState|ROLLOUT_STATE_UNSPECIFIED|
|rolloutState|IN_PROGRESS|
|rolloutState|CANCELLING|
|rolloutState|CANCELLED|
|rolloutState|SUCCEEDED|

<h2 id="tocS_GuestPolicy">GuestPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaguestpolicy"></a>
<a id="schema_GuestPolicy"></a>
<a id="tocSguestpolicy"></a>
<a id="tocsguestpolicy"></a>

```json
{
  "assignment": {
    "groupLabels": [
      {
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "instanceNamePrefixes": [
      "string"
    ],
    "instances": [
      "string"
    ],
    "osTypes": [
      {
        "osArchitecture": "string",
        "osShortName": "string",
        "osVersion": "string"
      }
    ],
    "zones": [
      "string"
    ]
  },
  "createTime": "string",
  "description": "string",
  "etag": "string",
  "name": "string",
  "packageRepositories": [
    {
      "apt": {
        "archiveType": "ARCHIVE_TYPE_UNSPECIFIED",
        "components": [
          "string"
        ],
        "distribution": "string",
        "gpgKey": "string",
        "uri": "string"
      },
      "goo": {
        "name": "string",
        "url": "string"
      },
      "yum": {
        "baseUrl": "string",
        "displayName": "string",
        "gpgKeys": [
          "string"
        ],
        "id": "string"
      },
      "zypper": {
        "baseUrl": "string",
        "displayName": "string",
        "gpgKeys": [
          "string"
        ],
        "id": "string"
      }
    }
  ],
  "packages": [
    {
      "desiredState": "DESIRED_STATE_UNSPECIFIED",
      "manager": "MANAGER_UNSPECIFIED",
      "name": "string"
    }
  ],
  "recipes": [
    {
      "artifacts": [
        {
          "allowInsecure": true,
          "gcs": {
            "bucket": "string",
            "generation": "string",
            "object": "string"
          },
          "id": "string",
          "remote": {
            "checksum": "string",
            "uri": "string"
          }
        }
      ],
      "desiredState": "DESIRED_STATE_UNSPECIFIED",
      "installSteps": [
        {
          "archiveExtraction": {
            "artifactId": "string",
            "destination": "string",
            "type": "ARCHIVE_TYPE_UNSPECIFIED"
          },
          "dpkgInstallation": {
            "artifactId": "string"
          },
          "fileCopy": {
            "artifactId": "string",
            "destination": "string",
            "overwrite": true,
            "permissions": "string"
          },
          "fileExec": {
            "allowedExitCodes": [
              0
            ],
            "args": [
              "string"
            ],
            "artifactId": "string",
            "localPath": "string"
          },
          "msiInstallation": {
            "allowedExitCodes": [
              0
            ],
            "artifactId": "string",
            "flags": [
              "string"
            ]
          },
          "rpmInstallation": {
            "artifactId": "string"
          },
          "scriptRun": {
            "allowedExitCodes": [
              0
            ],
            "interpreter": "INTERPRETER_UNSPECIFIED",
            "script": "string"
          }
        }
      ],
      "name": "string",
      "updateSteps": [
        {
          "archiveExtraction": {
            "artifactId": "string",
            "destination": "string",
            "type": "ARCHIVE_TYPE_UNSPECIFIED"
          },
          "dpkgInstallation": {
            "artifactId": "string"
          },
          "fileCopy": {
            "artifactId": "string",
            "destination": "string",
            "overwrite": true,
            "permissions": "string"
          },
          "fileExec": {
            "allowedExitCodes": [
              0
            ],
            "args": [
              "string"
            ],
            "artifactId": "string",
            "localPath": "string"
          },
          "msiInstallation": {
            "allowedExitCodes": [
              0
            ],
            "artifactId": "string",
            "flags": [
              "string"
            ]
          },
          "rpmInstallation": {
            "artifactId": "string"
          },
          "scriptRun": {
            "allowedExitCodes": [
              0
            ],
            "interpreter": "INTERPRETER_UNSPECIFIED",
            "script": "string"
          }
        }
      ],
      "version": "string"
    }
  ],
  "updateTime": "string"
}
```

An OS Config resource representing a guest configuration policy. These policies represent the desired state for VM instance guest environments including packages to install or remove, package repository configurations, and software to install.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignment|[Assignment](#schemaassignment)|false|none|Required. Specifies the VM instances that are assigned to this policy. This allows you to target sets or groups of VM instances by different parameters such as labels, names, OS, or zones. If left empty, all VM instances underneath this policy are targeted. At the same level in the resource hierarchy (that is within a project), the service prevents the creation of multiple policies that conflict with each other. For more information, see how the service [handles assignment conflicts](/compute/docs/os-config-management/create-guest-policy#handle-conflicts).|
|createTime|string(google-datetime)|false|read-only|Output only. Time this guest policy was created.|
|description|string|false|none|Description of the guest policy. Length of the description is limited to 1024 characters.|
|etag|string|false|none|The etag for this guest policy. If this is provided on update, it must match the server's etag.|
|name|string|false|none|Required. Unique name of the resource in this project using one of the following forms: `projects/{project_number}/guestPolicies/{guest_policy_id}`.|
|packageRepositories|[[PackageRepository](#schemapackagerepository)]|false|none|A list of package repositories to configure on the VM instance. This is done before any other configs are applied so they can use these repos. Package repositories are only configured if the corresponding package manager(s) are available.|
|packages|[[Package](#schemapackage)]|false|none|The software packages to be managed by this policy.|
|recipes|[[SoftwareRecipe](#schemasoftwarerecipe)]|false|none|A list of Recipes to install on the VM instance.|
|updateTime|string(google-datetime)|false|read-only|Output only. Last time this guest policy was updated.|

<h2 id="tocS_ListGuestPoliciesResponse">ListGuestPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistguestpoliciesresponse"></a>
<a id="schema_ListGuestPoliciesResponse"></a>
<a id="tocSlistguestpoliciesresponse"></a>
<a id="tocslistguestpoliciesresponse"></a>

```json
{
  "guestPolicies": [
    {
      "assignment": {
        "groupLabels": [
          {
            "labels": {
              "property1": "string",
              "property2": "string"
            }
          }
        ],
        "instanceNamePrefixes": [
          "string"
        ],
        "instances": [
          "string"
        ],
        "osTypes": [
          {
            "osArchitecture": "string",
            "osShortName": "string",
            "osVersion": "string"
          }
        ],
        "zones": [
          "string"
        ]
      },
      "createTime": "string",
      "description": "string",
      "etag": "string",
      "name": "string",
      "packageRepositories": [
        {
          "apt": {
            "archiveType": "ARCHIVE_TYPE_UNSPECIFIED",
            "components": [
              "string"
            ],
            "distribution": "string",
            "gpgKey": "string",
            "uri": "string"
          },
          "goo": {
            "name": "string",
            "url": "string"
          },
          "yum": {
            "baseUrl": "string",
            "displayName": "string",
            "gpgKeys": [
              "string"
            ],
            "id": "string"
          },
          "zypper": {
            "baseUrl": "string",
            "displayName": "string",
            "gpgKeys": [
              "string"
            ],
            "id": "string"
          }
        }
      ],
      "packages": [
        {
          "desiredState": "DESIRED_STATE_UNSPECIFIED",
          "manager": "MANAGER_UNSPECIFIED",
          "name": "string"
        }
      ],
      "recipes": [
        {
          "artifacts": [
            {
              "allowInsecure": true,
              "gcs": {
                "bucket": "string",
                "generation": "string",
                "object": "string"
              },
              "id": "string",
              "remote": {
                "checksum": "string",
                "uri": "string"
              }
            }
          ],
          "desiredState": "DESIRED_STATE_UNSPECIFIED",
          "installSteps": [
            {
              "archiveExtraction": {
                "artifactId": "string",
                "destination": "string",
                "type": "ARCHIVE_TYPE_UNSPECIFIED"
              },
              "dpkgInstallation": {
                "artifactId": "string"
              },
              "fileCopy": {
                "artifactId": "string",
                "destination": "string",
                "overwrite": true,
                "permissions": "string"
              },
              "fileExec": {
                "allowedExitCodes": [
                  0
                ],
                "args": [
                  "string"
                ],
                "artifactId": "string",
                "localPath": "string"
              },
              "msiInstallation": {
                "allowedExitCodes": [
                  0
                ],
                "artifactId": "string",
                "flags": [
                  "string"
                ]
              },
              "rpmInstallation": {
                "artifactId": "string"
              },
              "scriptRun": {
                "allowedExitCodes": [
                  0
                ],
                "interpreter": "INTERPRETER_UNSPECIFIED",
                "script": "string"
              }
            }
          ],
          "name": "string",
          "updateSteps": [
            {
              "archiveExtraction": {
                "artifactId": "string",
                "destination": "string",
                "type": "ARCHIVE_TYPE_UNSPECIFIED"
              },
              "dpkgInstallation": {
                "artifactId": "string"
              },
              "fileCopy": {
                "artifactId": "string",
                "destination": "string",
                "overwrite": true,
                "permissions": "string"
              },
              "fileExec": {
                "allowedExitCodes": [
                  0
                ],
                "args": [
                  "string"
                ],
                "artifactId": "string",
                "localPath": "string"
              },
              "msiInstallation": {
                "allowedExitCodes": [
                  0
                ],
                "artifactId": "string",
                "flags": [
                  "string"
                ]
              },
              "rpmInstallation": {
                "artifactId": "string"
              },
              "scriptRun": {
                "allowedExitCodes": [
                  0
                ],
                "interpreter": "INTERPRETER_UNSPECIFIED",
                "script": "string"
              }
            }
          ],
          "version": "string"
        }
      ],
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

A response message for listing guest policies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guestPolicies|[[GuestPolicy](#schemaguestpolicy)]|false|none|The list of GuestPolicies.|
|nextPageToken|string|false|none|A pagination token that can be used to get the next page of guest policies.|

<h2 id="tocS_ListPatchDeploymentsResponse">ListPatchDeploymentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpatchdeploymentsresponse"></a>
<a id="schema_ListPatchDeploymentsResponse"></a>
<a id="tocSlistpatchdeploymentsresponse"></a>
<a id="tocslistpatchdeploymentsresponse"></a>

```json
{
  "nextPageToken": "string",
  "patchDeployments": [
    {
      "createTime": "string",
      "description": "string",
      "duration": "string",
      "instanceFilter": {
        "all": true,
        "groupLabels": [
          {
            "labels": {
              "property1": "string",
              "property2": "string"
            }
          }
        ],
        "instanceNamePrefixes": [
          "string"
        ],
        "instances": [
          "string"
        ],
        "zones": [
          "string"
        ]
      },
      "lastExecuteTime": "string",
      "name": "string",
      "oneTimeSchedule": {
        "executeTime": "string"
      },
      "patchConfig": {
        "apt": {
          "excludes": [
            "string"
          ],
          "exclusivePackages": [
            "string"
          ],
          "type": "TYPE_UNSPECIFIED"
        },
        "goo": {},
        "migInstancesAllowed": true,
        "postStep": {
          "linuxExecStepConfig": {
            "allowedSuccessCodes": [
              0
            ],
            "gcsObject": {
              "bucket": "string",
              "generationNumber": "string",
              "object": "string"
            },
            "interpreter": "INTERPRETER_UNSPECIFIED",
            "localPath": "string"
          },
          "windowsExecStepConfig": {
            "allowedSuccessCodes": [
              0
            ],
            "gcsObject": {
              "bucket": "string",
              "generationNumber": "string",
              "object": "string"
            },
            "interpreter": "INTERPRETER_UNSPECIFIED",
            "localPath": "string"
          }
        },
        "preStep": {
          "linuxExecStepConfig": {
            "allowedSuccessCodes": [
              0
            ],
            "gcsObject": {
              "bucket": "string",
              "generationNumber": "string",
              "object": "string"
            },
            "interpreter": "INTERPRETER_UNSPECIFIED",
            "localPath": "string"
          },
          "windowsExecStepConfig": {
            "allowedSuccessCodes": [
              0
            ],
            "gcsObject": {
              "bucket": "string",
              "generationNumber": "string",
              "object": "string"
            },
            "interpreter": "INTERPRETER_UNSPECIFIED",
            "localPath": "string"
          }
        },
        "rebootConfig": "REBOOT_CONFIG_UNSPECIFIED",
        "windowsUpdate": {
          "classifications": [
            "CLASSIFICATION_UNSPECIFIED"
          ],
          "excludes": [
            "string"
          ],
          "exclusivePatches": [
            "string"
          ]
        },
        "yum": {
          "excludes": [
            "string"
          ],
          "exclusivePackages": [
            "string"
          ],
          "minimal": true,
          "security": true
        },
        "zypper": {
          "categories": [
            "string"
          ],
          "excludes": [
            "string"
          ],
          "exclusivePatches": [
            "string"
          ],
          "severities": [
            "string"
          ],
          "withOptional": true,
          "withUpdate": true
        }
      },
      "recurringSchedule": {
        "endTime": "string",
        "frequency": "FREQUENCY_UNSPECIFIED",
        "lastExecuteTime": "string",
        "monthly": {
          "monthDay": 0,
          "weekDayOfMonth": {
            "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
            "dayOffset": 0,
            "weekOrdinal": 0
          }
        },
        "nextExecuteTime": "string",
        "startTime": "string",
        "timeOfDay": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        },
        "timeZone": {
          "id": "string",
          "version": "string"
        },
        "weekly": {
          "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED"
        }
      },
      "rollout": {
        "disruptionBudget": {
          "fixed": 0,
          "percent": 0
        },
        "mode": "MODE_UNSPECIFIED"
      },
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string"
    }
  ]
}
```

A response message for listing patch deployments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A pagination token that can be used to get the next page of patch deployments.|
|patchDeployments|[[PatchDeployment](#schemapatchdeployment)]|false|none|The list of patch deployments.|

<h2 id="tocS_ListPatchJobInstanceDetailsResponse">ListPatchJobInstanceDetailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpatchjobinstancedetailsresponse"></a>
<a id="schema_ListPatchJobInstanceDetailsResponse"></a>
<a id="tocSlistpatchjobinstancedetailsresponse"></a>
<a id="tocslistpatchjobinstancedetailsresponse"></a>

```json
{
  "nextPageToken": "string",
  "patchJobInstanceDetails": [
    {
      "attemptCount": "string",
      "failureReason": "string",
      "instanceSystemId": "string",
      "name": "string",
      "state": "PATCH_STATE_UNSPECIFIED"
    }
  ]
}
```

A response message for listing the instances details for a patch job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A pagination token that can be used to get the next page of results.|
|patchJobInstanceDetails|[[PatchJobInstanceDetails](#schemapatchjobinstancedetails)]|false|none|A list of instance status.|

<h2 id="tocS_ListPatchJobsResponse">ListPatchJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpatchjobsresponse"></a>
<a id="schema_ListPatchJobsResponse"></a>
<a id="tocSlistpatchjobsresponse"></a>
<a id="tocslistpatchjobsresponse"></a>

```json
{
  "nextPageToken": "string",
  "patchJobs": [
    {
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "dryRun": true,
      "duration": "string",
      "errorMessage": "string",
      "instanceDetailsSummary": {
        "ackedInstanceCount": "string",
        "applyingPatchesInstanceCount": "string",
        "downloadingPatchesInstanceCount": "string",
        "failedInstanceCount": "string",
        "inactiveInstanceCount": "string",
        "noAgentDetectedInstanceCount": "string",
        "notifiedInstanceCount": "string",
        "pendingInstanceCount": "string",
        "postPatchStepInstanceCount": "string",
        "prePatchStepInstanceCount": "string",
        "rebootingInstanceCount": "string",
        "startedInstanceCount": "string",
        "succeededInstanceCount": "string",
        "succeededRebootRequiredInstanceCount": "string",
        "timedOutInstanceCount": "string"
      },
      "instanceFilter": {
        "all": true,
        "groupLabels": [
          {
            "labels": {
              "property1": "string",
              "property2": "string"
            }
          }
        ],
        "instanceNamePrefixes": [
          "string"
        ],
        "instances": [
          "string"
        ],
        "zones": [
          "string"
        ]
      },
      "name": "string",
      "patchConfig": {
        "apt": {
          "excludes": [
            "string"
          ],
          "exclusivePackages": [
            "string"
          ],
          "type": "TYPE_UNSPECIFIED"
        },
        "goo": {},
        "migInstancesAllowed": true,
        "postStep": {
          "linuxExecStepConfig": {
            "allowedSuccessCodes": [
              0
            ],
            "gcsObject": {
              "bucket": "string",
              "generationNumber": "string",
              "object": "string"
            },
            "interpreter": "INTERPRETER_UNSPECIFIED",
            "localPath": "string"
          },
          "windowsExecStepConfig": {
            "allowedSuccessCodes": [
              0
            ],
            "gcsObject": {
              "bucket": "string",
              "generationNumber": "string",
              "object": "string"
            },
            "interpreter": "INTERPRETER_UNSPECIFIED",
            "localPath": "string"
          }
        },
        "preStep": {
          "linuxExecStepConfig": {
            "allowedSuccessCodes": [
              0
            ],
            "gcsObject": {
              "bucket": "string",
              "generationNumber": "string",
              "object": "string"
            },
            "interpreter": "INTERPRETER_UNSPECIFIED",
            "localPath": "string"
          },
          "windowsExecStepConfig": {
            "allowedSuccessCodes": [
              0
            ],
            "gcsObject": {
              "bucket": "string",
              "generationNumber": "string",
              "object": "string"
            },
            "interpreter": "INTERPRETER_UNSPECIFIED",
            "localPath": "string"
          }
        },
        "rebootConfig": "REBOOT_CONFIG_UNSPECIFIED",
        "windowsUpdate": {
          "classifications": [
            "CLASSIFICATION_UNSPECIFIED"
          ],
          "excludes": [
            "string"
          ],
          "exclusivePatches": [
            "string"
          ]
        },
        "yum": {
          "excludes": [
            "string"
          ],
          "exclusivePackages": [
            "string"
          ],
          "minimal": true,
          "security": true
        },
        "zypper": {
          "categories": [
            "string"
          ],
          "excludes": [
            "string"
          ],
          "exclusivePatches": [
            "string"
          ],
          "severities": [
            "string"
          ],
          "withOptional": true,
          "withUpdate": true
        }
      },
      "patchDeployment": "string",
      "percentComplete": 0,
      "rollout": {
        "disruptionBudget": {
          "fixed": 0,
          "percent": 0
        },
        "mode": "MODE_UNSPECIFIED"
      },
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string"
    }
  ]
}
```

A response message for listing patch jobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A pagination token that can be used to get the next page of results.|
|patchJobs|[[PatchJob](#schemapatchjob)]|false|none|The list of patch jobs.|

<h2 id="tocS_LookupEffectiveGuestPolicyRequest">LookupEffectiveGuestPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemalookupeffectiveguestpolicyrequest"></a>
<a id="schema_LookupEffectiveGuestPolicyRequest"></a>
<a id="tocSlookupeffectiveguestpolicyrequest"></a>
<a id="tocslookupeffectiveguestpolicyrequest"></a>

```json
{
  "osArchitecture": "string",
  "osShortName": "string",
  "osVersion": "string"
}
```

A request message for getting the effective guest policy assigned to the instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|osArchitecture|string|false|none|Architecture of OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that instance.|
|osShortName|string|false|none|Short name of the OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that instance.|
|osVersion|string|false|none|Version of the OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that VM instance.|

<h2 id="tocS_MonthlySchedule">MonthlySchedule</h2>
<!-- backwards compatibility -->
<a id="schemamonthlyschedule"></a>
<a id="schema_MonthlySchedule"></a>
<a id="tocSmonthlyschedule"></a>
<a id="tocsmonthlyschedule"></a>

```json
{
  "monthDay": 0,
  "weekDayOfMonth": {
    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
    "dayOffset": 0,
    "weekOrdinal": 0
  }
}
```

Represents a monthly schedule. An example of a valid monthly schedule is "on the third Tuesday of the month" or "on the 15th of the month".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|monthDay|integer(int32)|false|none|Required. One day of the month. 1-31 indicates the 1st to the 31st day. -1 indicates the last day of the month. Months without the target day will be skipped. For example, a schedule to run "every month on the 31st" will not run in February, April, June, etc.|
|weekDayOfMonth|[WeekDayOfMonth](#schemaweekdayofmonth)|false|none|Required. Week day in a month.|

<h2 id="tocS_OSPolicyAssignmentOperationMetadata">OSPolicyAssignmentOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaospolicyassignmentoperationmetadata"></a>
<a id="schema_OSPolicyAssignmentOperationMetadata"></a>
<a id="tocSospolicyassignmentoperationmetadata"></a>
<a id="tocsospolicyassignmentoperationmetadata"></a>

```json
{
  "apiMethod": "API_METHOD_UNSPECIFIED",
  "osPolicyAssignment": "string",
  "rolloutStartTime": "string",
  "rolloutState": "ROLLOUT_STATE_UNSPECIFIED",
  "rolloutUpdateTime": "string"
}
```

OS policy assignment operation metadata provided by OS policy assignment API methods that return long running operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiMethod|string|false|none|The OS policy assignment API method.|
|osPolicyAssignment|string|false|none|Reference to the `OSPolicyAssignment` API resource. Format: `projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id@revision_id}`|
|rolloutStartTime|string(google-datetime)|false|none|Rollout start time|
|rolloutState|string|false|none|State of the rollout|
|rolloutUpdateTime|string(google-datetime)|false|none|Rollout update time|

#### Enumerated Values

|Property|Value|
|---|---|
|apiMethod|API_METHOD_UNSPECIFIED|
|apiMethod|CREATE|
|apiMethod|UPDATE|
|apiMethod|DELETE|
|rolloutState|ROLLOUT_STATE_UNSPECIFIED|
|rolloutState|IN_PROGRESS|
|rolloutState|CANCELLING|
|rolloutState|CANCELLED|
|rolloutState|SUCCEEDED|

<h2 id="tocS_OneTimeSchedule">OneTimeSchedule</h2>
<!-- backwards compatibility -->
<a id="schemaonetimeschedule"></a>
<a id="schema_OneTimeSchedule"></a>
<a id="tocSonetimeschedule"></a>
<a id="tocsonetimeschedule"></a>

```json
{
  "executeTime": "string"
}
```

Sets the time for a one time patch deployment. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executeTime|string(google-datetime)|false|none|Required. The desired patch job execution time.|

<h2 id="tocS_Package">Package</h2>
<!-- backwards compatibility -->
<a id="schemapackage"></a>
<a id="schema_Package"></a>
<a id="tocSpackage"></a>
<a id="tocspackage"></a>

```json
{
  "desiredState": "DESIRED_STATE_UNSPECIFIED",
  "manager": "MANAGER_UNSPECIFIED",
  "name": "string"
}
```

Package is a reference to the software package to be installed or removed. The agent on the VM instance uses the system package manager to apply the config. These are the commands that the agent uses to install or remove packages. Apt install: `apt-get update && apt-get -y install package1 package2 package3` remove: `apt-get -y remove package1 package2 package3` Yum install: `yum -y install package1 package2 package3` remove: `yum -y remove package1 package2 package3` Zypper install: `zypper install package1 package2 package3` remove: `zypper rm package1 package2` Googet install: `googet -noconfirm install package1 package2 package3` remove: `googet -noconfirm remove package1 package2 package3`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|desiredState|string|false|none|The desired_state the agent should maintain for this package. The default is to ensure the package is installed.|
|manager|string|false|none|Type of package manager that can be used to install this package. If a system does not have the package manager, the package is not installed or removed no error message is returned. By default, or if you specify `ANY`, the agent attempts to install and remove this package using the default package manager. This is useful when creating a policy that applies to different types of systems. The default behavior is ANY.|
|name|string|false|none|Required. The name of the package. A package is uniquely identified for conflict validation by checking the package name and the manager(s) that the package targets.|

#### Enumerated Values

|Property|Value|
|---|---|
|desiredState|DESIRED_STATE_UNSPECIFIED|
|desiredState|INSTALLED|
|desiredState|UPDATED|
|desiredState|REMOVED|
|manager|MANAGER_UNSPECIFIED|
|manager|ANY|
|manager|APT|
|manager|YUM|
|manager|ZYPPER|
|manager|GOO|

<h2 id="tocS_PackageRepository">PackageRepository</h2>
<!-- backwards compatibility -->
<a id="schemapackagerepository"></a>
<a id="schema_PackageRepository"></a>
<a id="tocSpackagerepository"></a>
<a id="tocspackagerepository"></a>

```json
{
  "apt": {
    "archiveType": "ARCHIVE_TYPE_UNSPECIFIED",
    "components": [
      "string"
    ],
    "distribution": "string",
    "gpgKey": "string",
    "uri": "string"
  },
  "goo": {
    "name": "string",
    "url": "string"
  },
  "yum": {
    "baseUrl": "string",
    "displayName": "string",
    "gpgKeys": [
      "string"
    ],
    "id": "string"
  },
  "zypper": {
    "baseUrl": "string",
    "displayName": "string",
    "gpgKeys": [
      "string"
    ],
    "id": "string"
  }
}
```

A package repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apt|[AptRepository](#schemaaptrepository)|false|none|An Apt Repository.|
|goo|[GooRepository](#schemagoorepository)|false|none|A Goo Repository.|
|yum|[YumRepository](#schemayumrepository)|false|none|A Yum Repository.|
|zypper|[ZypperRepository](#schemazypperrepository)|false|none|A Zypper Repository.|

<h2 id="tocS_PatchConfig">PatchConfig</h2>
<!-- backwards compatibility -->
<a id="schemapatchconfig"></a>
<a id="schema_PatchConfig"></a>
<a id="tocSpatchconfig"></a>
<a id="tocspatchconfig"></a>

```json
{
  "apt": {
    "excludes": [
      "string"
    ],
    "exclusivePackages": [
      "string"
    ],
    "type": "TYPE_UNSPECIFIED"
  },
  "goo": {},
  "migInstancesAllowed": true,
  "postStep": {
    "linuxExecStepConfig": {
      "allowedSuccessCodes": [
        0
      ],
      "gcsObject": {
        "bucket": "string",
        "generationNumber": "string",
        "object": "string"
      },
      "interpreter": "INTERPRETER_UNSPECIFIED",
      "localPath": "string"
    },
    "windowsExecStepConfig": {
      "allowedSuccessCodes": [
        0
      ],
      "gcsObject": {
        "bucket": "string",
        "generationNumber": "string",
        "object": "string"
      },
      "interpreter": "INTERPRETER_UNSPECIFIED",
      "localPath": "string"
    }
  },
  "preStep": {
    "linuxExecStepConfig": {
      "allowedSuccessCodes": [
        0
      ],
      "gcsObject": {
        "bucket": "string",
        "generationNumber": "string",
        "object": "string"
      },
      "interpreter": "INTERPRETER_UNSPECIFIED",
      "localPath": "string"
    },
    "windowsExecStepConfig": {
      "allowedSuccessCodes": [
        0
      ],
      "gcsObject": {
        "bucket": "string",
        "generationNumber": "string",
        "object": "string"
      },
      "interpreter": "INTERPRETER_UNSPECIFIED",
      "localPath": "string"
    }
  },
  "rebootConfig": "REBOOT_CONFIG_UNSPECIFIED",
  "windowsUpdate": {
    "classifications": [
      "CLASSIFICATION_UNSPECIFIED"
    ],
    "excludes": [
      "string"
    ],
    "exclusivePatches": [
      "string"
    ]
  },
  "yum": {
    "excludes": [
      "string"
    ],
    "exclusivePackages": [
      "string"
    ],
    "minimal": true,
    "security": true
  },
  "zypper": {
    "categories": [
      "string"
    ],
    "excludes": [
      "string"
    ],
    "exclusivePatches": [
      "string"
    ],
    "severities": [
      "string"
    ],
    "withOptional": true,
    "withUpdate": true
  }
}
```

Patch configuration specifications. Contains details on how to apply the patch(es) to a VM instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apt|[AptSettings](#schemaaptsettings)|false|none|Apt update settings. Use this setting to override the default `apt` patch rules.|
|goo|[GooSettings](#schemagoosettings)|false|none|Goo update settings. Use this setting to override the default `goo` patch rules.|
|migInstancesAllowed|boolean|false|none|Allows the patch job to run on Managed instance groups (MIGs).|
|postStep|[ExecStep](#schemaexecstep)|false|none|The `ExecStep` to run after the patch update.|
|preStep|[ExecStep](#schemaexecstep)|false|none|The `ExecStep` to run before the patch update.|
|rebootConfig|string|false|none|Post-patch reboot settings.|
|windowsUpdate|[WindowsUpdateSettings](#schemawindowsupdatesettings)|false|none|Windows update settings. Use this override the default windows patch rules.|
|yum|[YumSettings](#schemayumsettings)|false|none|Yum update settings. Use this setting to override the default `yum` patch rules.|
|zypper|[ZypperSettings](#schemazyppersettings)|false|none|Zypper update settings. Use this setting to override the default `zypper` patch rules.|

#### Enumerated Values

|Property|Value|
|---|---|
|rebootConfig|REBOOT_CONFIG_UNSPECIFIED|
|rebootConfig|DEFAULT|
|rebootConfig|ALWAYS|
|rebootConfig|NEVER|

<h2 id="tocS_PatchDeployment">PatchDeployment</h2>
<!-- backwards compatibility -->
<a id="schemapatchdeployment"></a>
<a id="schema_PatchDeployment"></a>
<a id="tocSpatchdeployment"></a>
<a id="tocspatchdeployment"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "duration": "string",
  "instanceFilter": {
    "all": true,
    "groupLabels": [
      {
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "instanceNamePrefixes": [
      "string"
    ],
    "instances": [
      "string"
    ],
    "zones": [
      "string"
    ]
  },
  "lastExecuteTime": "string",
  "name": "string",
  "oneTimeSchedule": {
    "executeTime": "string"
  },
  "patchConfig": {
    "apt": {
      "excludes": [
        "string"
      ],
      "exclusivePackages": [
        "string"
      ],
      "type": "TYPE_UNSPECIFIED"
    },
    "goo": {},
    "migInstancesAllowed": true,
    "postStep": {
      "linuxExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      },
      "windowsExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      }
    },
    "preStep": {
      "linuxExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      },
      "windowsExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      }
    },
    "rebootConfig": "REBOOT_CONFIG_UNSPECIFIED",
    "windowsUpdate": {
      "classifications": [
        "CLASSIFICATION_UNSPECIFIED"
      ],
      "excludes": [
        "string"
      ],
      "exclusivePatches": [
        "string"
      ]
    },
    "yum": {
      "excludes": [
        "string"
      ],
      "exclusivePackages": [
        "string"
      ],
      "minimal": true,
      "security": true
    },
    "zypper": {
      "categories": [
        "string"
      ],
      "excludes": [
        "string"
      ],
      "exclusivePatches": [
        "string"
      ],
      "severities": [
        "string"
      ],
      "withOptional": true,
      "withUpdate": true
    }
  },
  "recurringSchedule": {
    "endTime": "string",
    "frequency": "FREQUENCY_UNSPECIFIED",
    "lastExecuteTime": "string",
    "monthly": {
      "monthDay": 0,
      "weekDayOfMonth": {
        "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
        "dayOffset": 0,
        "weekOrdinal": 0
      }
    },
    "nextExecuteTime": "string",
    "startTime": "string",
    "timeOfDay": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    },
    "timeZone": {
      "id": "string",
      "version": "string"
    },
    "weekly": {
      "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED"
    }
  },
  "rollout": {
    "disruptionBudget": {
      "fixed": 0,
      "percent": 0
    },
    "mode": "MODE_UNSPECIFIED"
  },
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

Patch deployments are configurations that individual patch jobs use to complete a patch. These configurations include instance filter, package repository settings, and a schedule. For more information about creating and managing patch deployments, see [Scheduling patch jobs](https://cloud.google.com/compute/docs/os-patch-management/schedule-patch-jobs).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Time the patch deployment was created. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.|
|description|string|false|none|Optional. Description of the patch deployment. Length of the description is limited to 1024 characters.|
|duration|string(google-duration)|false|none|Optional. Duration of the patch. After the duration ends, the patch times out.|
|instanceFilter|[PatchInstanceFilter](#schemapatchinstancefilter)|false|none|Required. VM instances to patch.|
|lastExecuteTime|string(google-datetime)|false|read-only|Output only. The last time a patch job was started by this deployment. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.|
|name|string|false|none|Unique name for the patch deployment resource in a project. The patch deployment name is in the form: `projects/{project_id}/patchDeployments/{patch_deployment_id}`. This field is ignored when you create a new patch deployment.|
|oneTimeSchedule|[OneTimeSchedule](#schemaonetimeschedule)|false|none|Required. Schedule a one-time execution.|
|patchConfig|[PatchConfig](#schemapatchconfig)|false|none|Optional. Patch configuration that is applied.|
|recurringSchedule|[RecurringSchedule](#schemarecurringschedule)|false|none|Required. Schedule recurring executions.|
|rollout|[PatchRollout](#schemapatchrollout)|false|none|Optional. Rollout strategy of the patch job.|
|state|string|false|read-only|Output only. Current state of the patch deployment.|
|updateTime|string(google-datetime)|false|read-only|Output only. Time the patch deployment was last updated. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|ACTIVE|
|state|PAUSED|

<h2 id="tocS_PatchInstanceFilter">PatchInstanceFilter</h2>
<!-- backwards compatibility -->
<a id="schemapatchinstancefilter"></a>
<a id="schema_PatchInstanceFilter"></a>
<a id="tocSpatchinstancefilter"></a>
<a id="tocspatchinstancefilter"></a>

```json
{
  "all": true,
  "groupLabels": [
    {
      "labels": {
        "property1": "string",
        "property2": "string"
      }
    }
  ],
  "instanceNamePrefixes": [
    "string"
  ],
  "instances": [
    "string"
  ],
  "zones": [
    "string"
  ]
}
```

A filter to target VM instances for patching. The targeted VMs must meet all criteria specified. So if both labels and zones are specified, the patch job targets only VMs with those labels and in those zones.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|all|boolean|false|none|Target all VM instances in the project. If true, no other criteria is permitted.|
|groupLabels|[[PatchInstanceFilterGroupLabel](#schemapatchinstancefiltergrouplabel)]|false|none|Targets VM instances matching at least one of these label sets. This allows targeting of disparate groups, for example "env=prod or env=staging".|
|instanceNamePrefixes|[string]|false|none|Targets VMs whose name starts with one of these prefixes. Similar to labels, this is another way to group VMs when targeting configs, for example prefix="prod-".|
|instances|[string]|false|none|Targets any of the VM instances specified. Instances are specified by their URI in the form `zones/[ZONE]/instances/[INSTANCE_NAME]`, `projects/[PROJECT_ID]/zones/[ZONE]/instances/[INSTANCE_NAME]`, or `https://www.googleapis.com/compute/v1/projects/[PROJECT_ID]/zones/[ZONE]/instances/[INSTANCE_NAME]`|
|zones|[string]|false|none|Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone.|

<h2 id="tocS_PatchInstanceFilterGroupLabel">PatchInstanceFilterGroupLabel</h2>
<!-- backwards compatibility -->
<a id="schemapatchinstancefiltergrouplabel"></a>
<a id="schema_PatchInstanceFilterGroupLabel"></a>
<a id="tocSpatchinstancefiltergrouplabel"></a>
<a id="tocspatchinstancefiltergrouplabel"></a>

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents a group of VMs that can be identified as having all these labels, for example "env=prod and app=web".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|object|false|none|Compute Engine instance labels that must be present for a VM instance to be targeted by this filter.|

<h2 id="tocS_PatchJob">PatchJob</h2>
<!-- backwards compatibility -->
<a id="schemapatchjob"></a>
<a id="schema_PatchJob"></a>
<a id="tocSpatchjob"></a>
<a id="tocspatchjob"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "dryRun": true,
  "duration": "string",
  "errorMessage": "string",
  "instanceDetailsSummary": {
    "ackedInstanceCount": "string",
    "applyingPatchesInstanceCount": "string",
    "downloadingPatchesInstanceCount": "string",
    "failedInstanceCount": "string",
    "inactiveInstanceCount": "string",
    "noAgentDetectedInstanceCount": "string",
    "notifiedInstanceCount": "string",
    "pendingInstanceCount": "string",
    "postPatchStepInstanceCount": "string",
    "prePatchStepInstanceCount": "string",
    "rebootingInstanceCount": "string",
    "startedInstanceCount": "string",
    "succeededInstanceCount": "string",
    "succeededRebootRequiredInstanceCount": "string",
    "timedOutInstanceCount": "string"
  },
  "instanceFilter": {
    "all": true,
    "groupLabels": [
      {
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "instanceNamePrefixes": [
      "string"
    ],
    "instances": [
      "string"
    ],
    "zones": [
      "string"
    ]
  },
  "name": "string",
  "patchConfig": {
    "apt": {
      "excludes": [
        "string"
      ],
      "exclusivePackages": [
        "string"
      ],
      "type": "TYPE_UNSPECIFIED"
    },
    "goo": {},
    "migInstancesAllowed": true,
    "postStep": {
      "linuxExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      },
      "windowsExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      }
    },
    "preStep": {
      "linuxExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      },
      "windowsExecStepConfig": {
        "allowedSuccessCodes": [
          0
        ],
        "gcsObject": {
          "bucket": "string",
          "generationNumber": "string",
          "object": "string"
        },
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "localPath": "string"
      }
    },
    "rebootConfig": "REBOOT_CONFIG_UNSPECIFIED",
    "windowsUpdate": {
      "classifications": [
        "CLASSIFICATION_UNSPECIFIED"
      ],
      "excludes": [
        "string"
      ],
      "exclusivePatches": [
        "string"
      ]
    },
    "yum": {
      "excludes": [
        "string"
      ],
      "exclusivePackages": [
        "string"
      ],
      "minimal": true,
      "security": true
    },
    "zypper": {
      "categories": [
        "string"
      ],
      "excludes": [
        "string"
      ],
      "exclusivePatches": [
        "string"
      ],
      "severities": [
        "string"
      ],
      "withOptional": true,
      "withUpdate": true
    }
  },
  "patchDeployment": "string",
  "percentComplete": 0,
  "rollout": {
    "disruptionBudget": {
      "fixed": 0,
      "percent": 0
    },
    "mode": "MODE_UNSPECIFIED"
  },
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

A high level representation of a patch job that is either in progress or has completed. Instance details are not included in the job. To paginate through instance details, use `ListPatchJobInstanceDetails`. For more information about patch jobs, see [Creating patch jobs](https://cloud.google.com/compute/docs/os-patch-management/create-patch-job).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Time this patch job was created.|
|description|string|false|none|Description of the patch job. Length of the description is limited to 1024 characters.|
|displayName|string|false|none|Display name for this patch job. This is not a unique identifier.|
|dryRun|boolean|false|none|If this patch job is a dry run, the agent reports that it has finished without running any updates on the VM instance.|
|duration|string(google-duration)|false|none|Duration of the patch job. After the duration ends, the patch job times out.|
|errorMessage|string|false|none|If this patch job failed, this message provides information about the failure.|
|instanceDetailsSummary|[PatchJobInstanceDetailsSummary](#schemapatchjobinstancedetailssummary)|false|none|Summary of instance details.|
|instanceFilter|[PatchInstanceFilter](#schemapatchinstancefilter)|false|none|Instances to patch.|
|name|string|false|none|Unique identifier for this patch job in the form `projects/*/patchJobs/*`|
|patchConfig|[PatchConfig](#schemapatchconfig)|false|none|Patch configuration being applied.|
|patchDeployment|string|false|read-only|Output only. Name of the patch deployment that created this patch job.|
|percentComplete|number(double)|false|none|Reflects the overall progress of the patch job in the range of 0.0 being no progress to 100.0 being complete.|
|rollout|[PatchRollout](#schemapatchrollout)|false|none|Rollout strategy being applied.|
|state|string|false|none|The current state of the PatchJob.|
|updateTime|string(google-datetime)|false|none|Last time this patch job was updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|STARTED|
|state|INSTANCE_LOOKUP|
|state|PATCHING|
|state|SUCCEEDED|
|state|COMPLETED_WITH_ERRORS|
|state|CANCELED|
|state|TIMED_OUT|

<h2 id="tocS_PatchJobInstanceDetails">PatchJobInstanceDetails</h2>
<!-- backwards compatibility -->
<a id="schemapatchjobinstancedetails"></a>
<a id="schema_PatchJobInstanceDetails"></a>
<a id="tocSpatchjobinstancedetails"></a>
<a id="tocspatchjobinstancedetails"></a>

```json
{
  "attemptCount": "string",
  "failureReason": "string",
  "instanceSystemId": "string",
  "name": "string",
  "state": "PATCH_STATE_UNSPECIFIED"
}
```

Patch details for a VM instance. For more information about reviewing VM instance details, see [Listing all VM instance details for a specific patch job](https://cloud.google.com/compute/docs/os-patch-management/manage-patch-jobs#list-instance-details).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attemptCount|string(int64)|false|none|The number of times the agent that the agent attempts to apply the patch.|
|failureReason|string|false|none|If the patch fails, this field provides the reason.|
|instanceSystemId|string|false|none|The unique identifier for the instance. This identifier is defined by the server.|
|name|string|false|none|The instance name in the form `projects/*/zones/*/instances/*`|
|state|string|false|none|Current state of instance patch.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|PATCH_STATE_UNSPECIFIED|
|state|PENDING|
|state|INACTIVE|
|state|NOTIFIED|
|state|STARTED|
|state|DOWNLOADING_PATCHES|
|state|APPLYING_PATCHES|
|state|REBOOTING|
|state|SUCCEEDED|
|state|SUCCEEDED_REBOOT_REQUIRED|
|state|FAILED|
|state|ACKED|
|state|TIMED_OUT|
|state|RUNNING_PRE_PATCH_STEP|
|state|RUNNING_POST_PATCH_STEP|
|state|NO_AGENT_DETECTED|

<h2 id="tocS_PatchJobInstanceDetailsSummary">PatchJobInstanceDetailsSummary</h2>
<!-- backwards compatibility -->
<a id="schemapatchjobinstancedetailssummary"></a>
<a id="schema_PatchJobInstanceDetailsSummary"></a>
<a id="tocSpatchjobinstancedetailssummary"></a>
<a id="tocspatchjobinstancedetailssummary"></a>

```json
{
  "ackedInstanceCount": "string",
  "applyingPatchesInstanceCount": "string",
  "downloadingPatchesInstanceCount": "string",
  "failedInstanceCount": "string",
  "inactiveInstanceCount": "string",
  "noAgentDetectedInstanceCount": "string",
  "notifiedInstanceCount": "string",
  "pendingInstanceCount": "string",
  "postPatchStepInstanceCount": "string",
  "prePatchStepInstanceCount": "string",
  "rebootingInstanceCount": "string",
  "startedInstanceCount": "string",
  "succeededInstanceCount": "string",
  "succeededRebootRequiredInstanceCount": "string",
  "timedOutInstanceCount": "string"
}
```

A summary of the current patch state across all instances that this patch job affects. Contains counts of instances in different states. These states map to `InstancePatchState`. List patch job instance details to see the specific states of each instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ackedInstanceCount|string(int64)|false|none|Number of instances that have acked and will start shortly.|
|applyingPatchesInstanceCount|string(int64)|false|none|Number of instances that are applying patches.|
|downloadingPatchesInstanceCount|string(int64)|false|none|Number of instances that are downloading patches.|
|failedInstanceCount|string(int64)|false|none|Number of instances that failed.|
|inactiveInstanceCount|string(int64)|false|none|Number of instances that are inactive.|
|noAgentDetectedInstanceCount|string(int64)|false|none|Number of instances that do not appear to be running the agent. Check to ensure that the agent is installed, running, and able to communicate with the service.|
|notifiedInstanceCount|string(int64)|false|none|Number of instances notified about patch job.|
|pendingInstanceCount|string(int64)|false|none|Number of instances pending patch job.|
|postPatchStepInstanceCount|string(int64)|false|none|Number of instances that are running the post-patch step.|
|prePatchStepInstanceCount|string(int64)|false|none|Number of instances that are running the pre-patch step.|
|rebootingInstanceCount|string(int64)|false|none|Number of instances rebooting.|
|startedInstanceCount|string(int64)|false|none|Number of instances that have started.|
|succeededInstanceCount|string(int64)|false|none|Number of instances that have completed successfully.|
|succeededRebootRequiredInstanceCount|string(int64)|false|none|Number of instances that require reboot.|
|timedOutInstanceCount|string(int64)|false|none|Number of instances that exceeded the time out while applying the patch.|

<h2 id="tocS_PatchRollout">PatchRollout</h2>
<!-- backwards compatibility -->
<a id="schemapatchrollout"></a>
<a id="schema_PatchRollout"></a>
<a id="tocSpatchrollout"></a>
<a id="tocspatchrollout"></a>

```json
{
  "disruptionBudget": {
    "fixed": 0,
    "percent": 0
  },
  "mode": "MODE_UNSPECIFIED"
}
```

Patch rollout configuration specifications. Contains details on the concurrency control when applying patch(es) to all targeted VMs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disruptionBudget|[FixedOrPercent](#schemafixedorpercent)|false|none|The maximum number (or percentage) of VMs per zone to disrupt at any given moment. The number of VMs calculated from multiplying the percentage by the total number of VMs in a zone is rounded up. During patching, a VM is considered disrupted from the time the agent is notified to begin until patching has completed. This disruption time includes the time to complete reboot and any post-patch steps. A VM contributes to the disruption budget if its patching operation fails either when applying the patches, running pre or post patch steps, or if it fails to respond with a success notification before timing out. VMs that are not running or do not have an active agent do not count toward this disruption budget. For zone-by-zone rollouts, if the disruption budget in a zone is exceeded, the patch job stops, because continuing to the next zone requires completion of the patch process in the previous zone. For example, if the disruption budget has a fixed value of `10`, and 8 VMs fail to patch in the current zone, the patch job continues to patch 2 VMs at a time until the zone is completed. When that zone is completed successfully, patching begins with 10 VMs at a time in the next zone. If 10 VMs in the next zone fail to patch, the patch job stops.|
|mode|string|false|none|Mode of the patch rollout.|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|MODE_UNSPECIFIED|
|mode|ZONE_BY_ZONE|
|mode|CONCURRENT_ZONES|

<h2 id="tocS_PausePatchDeploymentRequest">PausePatchDeploymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemapausepatchdeploymentrequest"></a>
<a id="schema_PausePatchDeploymentRequest"></a>
<a id="tocSpausepatchdeploymentrequest"></a>
<a id="tocspausepatchdeploymentrequest"></a>

```json
{}
```

A request message for pausing a patch deployment.

<h2 id="tocS_RecurringSchedule">RecurringSchedule</h2>
<!-- backwards compatibility -->
<a id="schemarecurringschedule"></a>
<a id="schema_RecurringSchedule"></a>
<a id="tocSrecurringschedule"></a>
<a id="tocsrecurringschedule"></a>

```json
{
  "endTime": "string",
  "frequency": "FREQUENCY_UNSPECIFIED",
  "lastExecuteTime": "string",
  "monthly": {
    "monthDay": 0,
    "weekDayOfMonth": {
      "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
      "dayOffset": 0,
      "weekOrdinal": 0
    }
  },
  "nextExecuteTime": "string",
  "startTime": "string",
  "timeOfDay": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  },
  "timeZone": {
    "id": "string",
    "version": "string"
  },
  "weekly": {
    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED"
  }
}
```

Sets the time for recurring patch deployments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|Optional. The end time at which a recurring patch deployment schedule is no longer active.|
|frequency|string|false|none|Required. The frequency unit of this recurring schedule.|
|lastExecuteTime|string(google-datetime)|false|read-only|Output only. The time the last patch job ran successfully.|
|monthly|[MonthlySchedule](#schemamonthlyschedule)|false|none|Required. Schedule with monthly executions.|
|nextExecuteTime|string(google-datetime)|false|read-only|Output only. The time the next patch job is scheduled to run.|
|startTime|string(google-datetime)|false|none|Optional. The time that the recurring schedule becomes effective. Defaults to `create_time` of the patch deployment.|
|timeOfDay|[TimeOfDay](#schematimeofday)|false|none|Required. Time of the day to run a recurring deployment.|
|timeZone|[TimeZone](#schematimezone)|false|none|Required. Defines the time zone that `time_of_day` is relative to. The rules for daylight saving time are determined by the chosen time zone.|
|weekly|[WeeklySchedule](#schemaweeklyschedule)|false|none|Required. Schedule with weekly executions.|

#### Enumerated Values

|Property|Value|
|---|---|
|frequency|FREQUENCY_UNSPECIFIED|
|frequency|WEEKLY|
|frequency|MONTHLY|
|frequency|DAILY|

<h2 id="tocS_ResumePatchDeploymentRequest">ResumePatchDeploymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresumepatchdeploymentrequest"></a>
<a id="schema_ResumePatchDeploymentRequest"></a>
<a id="tocSresumepatchdeploymentrequest"></a>
<a id="tocsresumepatchdeploymentrequest"></a>

```json
{}
```

A request message for resuming a patch deployment.

<h2 id="tocS_SoftwareRecipe">SoftwareRecipe</h2>
<!-- backwards compatibility -->
<a id="schemasoftwarerecipe"></a>
<a id="schema_SoftwareRecipe"></a>
<a id="tocSsoftwarerecipe"></a>
<a id="tocssoftwarerecipe"></a>

```json
{
  "artifacts": [
    {
      "allowInsecure": true,
      "gcs": {
        "bucket": "string",
        "generation": "string",
        "object": "string"
      },
      "id": "string",
      "remote": {
        "checksum": "string",
        "uri": "string"
      }
    }
  ],
  "desiredState": "DESIRED_STATE_UNSPECIFIED",
  "installSteps": [
    {
      "archiveExtraction": {
        "artifactId": "string",
        "destination": "string",
        "type": "ARCHIVE_TYPE_UNSPECIFIED"
      },
      "dpkgInstallation": {
        "artifactId": "string"
      },
      "fileCopy": {
        "artifactId": "string",
        "destination": "string",
        "overwrite": true,
        "permissions": "string"
      },
      "fileExec": {
        "allowedExitCodes": [
          0
        ],
        "args": [
          "string"
        ],
        "artifactId": "string",
        "localPath": "string"
      },
      "msiInstallation": {
        "allowedExitCodes": [
          0
        ],
        "artifactId": "string",
        "flags": [
          "string"
        ]
      },
      "rpmInstallation": {
        "artifactId": "string"
      },
      "scriptRun": {
        "allowedExitCodes": [
          0
        ],
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "script": "string"
      }
    }
  ],
  "name": "string",
  "updateSteps": [
    {
      "archiveExtraction": {
        "artifactId": "string",
        "destination": "string",
        "type": "ARCHIVE_TYPE_UNSPECIFIED"
      },
      "dpkgInstallation": {
        "artifactId": "string"
      },
      "fileCopy": {
        "artifactId": "string",
        "destination": "string",
        "overwrite": true,
        "permissions": "string"
      },
      "fileExec": {
        "allowedExitCodes": [
          0
        ],
        "args": [
          "string"
        ],
        "artifactId": "string",
        "localPath": "string"
      },
      "msiInstallation": {
        "allowedExitCodes": [
          0
        ],
        "artifactId": "string",
        "flags": [
          "string"
        ]
      },
      "rpmInstallation": {
        "artifactId": "string"
      },
      "scriptRun": {
        "allowedExitCodes": [
          0
        ],
        "interpreter": "INTERPRETER_UNSPECIFIED",
        "script": "string"
      }
    }
  ],
  "version": "string"
}
```

A software recipe is a set of instructions for installing and configuring a piece of software. It consists of a set of artifacts that are downloaded, and a set of steps that install, configure, and/or update the software. Recipes support installing and updating software from artifacts in the following formats: Zip archive, Tar archive, Windows MSI, Debian package, and RPM package. Additionally, recipes support executing a script (either defined in a file or directly in this api) in bash, sh, cmd, and powershell. Updating a software recipe If a recipe is assigned to an instance and there is a recipe with the same name but a lower version already installed and the assigned state of the recipe is `UPDATED`, then the recipe is updated to the new version. Script Working Directories Each script or execution step is run in its own temporary directory which is deleted after completing the step.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artifacts|[[SoftwareRecipeArtifact](#schemasoftwarerecipeartifact)]|false|none|Resources available to be used in the steps in the recipe.|
|desiredState|string|false|none|Default is INSTALLED. The desired state the agent should maintain for this recipe. INSTALLED: The software recipe is installed on the instance but won't be updated to new versions. UPDATED: The software recipe is installed on the instance. The recipe is updated to a higher version, if a higher version of the recipe is assigned to this instance. REMOVE: Remove is unsupported for software recipes and attempts to create or update a recipe to the REMOVE state is rejected.|
|installSteps|[[SoftwareRecipeStep](#schemasoftwarerecipestep)]|false|none|Actions to be taken for installing this recipe. On failure it stops executing steps and does not attempt another installation. Any steps taken (including partially completed steps) are not rolled back.|
|name|string|false|none|Required. Unique identifier for the recipe. Only one recipe with a given name is installed on an instance. Names are also used to identify resources which helps to determine whether guest policies have conflicts. This means that requests to create multiple recipes with the same name and version are rejected since they could potentially have conflicting assignments.|
|updateSteps|[[SoftwareRecipeStep](#schemasoftwarerecipestep)]|false|none|Actions to be taken for updating this recipe. On failure it stops executing steps and does not attempt another update for this recipe. Any steps taken (including partially completed steps) are not rolled back.|
|version|string|false|none|The version of this software recipe. Version can be up to 4 period separated numbers (e.g. 12.34.56.78).|

#### Enumerated Values

|Property|Value|
|---|---|
|desiredState|DESIRED_STATE_UNSPECIFIED|
|desiredState|INSTALLED|
|desiredState|UPDATED|
|desiredState|REMOVED|

<h2 id="tocS_SoftwareRecipeArtifact">SoftwareRecipeArtifact</h2>
<!-- backwards compatibility -->
<a id="schemasoftwarerecipeartifact"></a>
<a id="schema_SoftwareRecipeArtifact"></a>
<a id="tocSsoftwarerecipeartifact"></a>
<a id="tocssoftwarerecipeartifact"></a>

```json
{
  "allowInsecure": true,
  "gcs": {
    "bucket": "string",
    "generation": "string",
    "object": "string"
  },
  "id": "string",
  "remote": {
    "checksum": "string",
    "uri": "string"
  }
}
```

Specifies a resource to be used in the recipe.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowInsecure|boolean|false|none|Defaults to false. When false, recipes are subject to validations based on the artifact type: Remote: A checksum must be specified, and only protocols with transport-layer security are permitted. GCS: An object generation number must be specified.|
|gcs|[SoftwareRecipeArtifactGcs](#schemasoftwarerecipeartifactgcs)|false|none|A Google Cloud Storage artifact.|
|id|string|false|none|Required. Id of the artifact, which the installation and update steps of this recipe can reference. Artifacts in a recipe cannot have the same id.|
|remote|[SoftwareRecipeArtifactRemote](#schemasoftwarerecipeartifactremote)|false|none|A generic remote artifact.|

<h2 id="tocS_SoftwareRecipeArtifactGcs">SoftwareRecipeArtifactGcs</h2>
<!-- backwards compatibility -->
<a id="schemasoftwarerecipeartifactgcs"></a>
<a id="schema_SoftwareRecipeArtifactGcs"></a>
<a id="tocSsoftwarerecipeartifactgcs"></a>
<a id="tocssoftwarerecipeartifactgcs"></a>

```json
{
  "bucket": "string",
  "generation": "string",
  "object": "string"
}
```

Specifies an artifact available as a Google Cloud Storage object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|string|false|none|Bucket of the Google Cloud Storage object. Given an example URL: `https://storage.googleapis.com/my-bucket/foo/bar#1234567` this value would be `my-bucket`.|
|generation|string(int64)|false|none|Must be provided if allow_insecure is false. Generation number of the Google Cloud Storage object. `https://storage.googleapis.com/my-bucket/foo/bar#1234567` this value would be `1234567`.|
|object|string|false|none|Name of the Google Cloud Storage object. As specified [here] (https://cloud.google.com/storage/docs/naming#objectnames) Given an example URL: `https://storage.googleapis.com/my-bucket/foo/bar#1234567` this value would be `foo/bar`.|

<h2 id="tocS_SoftwareRecipeArtifactRemote">SoftwareRecipeArtifactRemote</h2>
<!-- backwards compatibility -->
<a id="schemasoftwarerecipeartifactremote"></a>
<a id="schema_SoftwareRecipeArtifactRemote"></a>
<a id="tocSsoftwarerecipeartifactremote"></a>
<a id="tocssoftwarerecipeartifactremote"></a>

```json
{
  "checksum": "string",
  "uri": "string"
}
```

Specifies an artifact available via some URI.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checksum|string|false|none|Must be provided if `allow_insecure` is `false`. SHA256 checksum in hex format, to compare to the checksum of the artifact. If the checksum is not empty and it doesn't match the artifact then the recipe installation fails before running any of the steps.|
|uri|string|false|none|URI from which to fetch the object. It should contain both the protocol and path following the format {protocol}://{location}.|

<h2 id="tocS_SoftwareRecipeStep">SoftwareRecipeStep</h2>
<!-- backwards compatibility -->
<a id="schemasoftwarerecipestep"></a>
<a id="schema_SoftwareRecipeStep"></a>
<a id="tocSsoftwarerecipestep"></a>
<a id="tocssoftwarerecipestep"></a>

```json
{
  "archiveExtraction": {
    "artifactId": "string",
    "destination": "string",
    "type": "ARCHIVE_TYPE_UNSPECIFIED"
  },
  "dpkgInstallation": {
    "artifactId": "string"
  },
  "fileCopy": {
    "artifactId": "string",
    "destination": "string",
    "overwrite": true,
    "permissions": "string"
  },
  "fileExec": {
    "allowedExitCodes": [
      0
    ],
    "args": [
      "string"
    ],
    "artifactId": "string",
    "localPath": "string"
  },
  "msiInstallation": {
    "allowedExitCodes": [
      0
    ],
    "artifactId": "string",
    "flags": [
      "string"
    ]
  },
  "rpmInstallation": {
    "artifactId": "string"
  },
  "scriptRun": {
    "allowedExitCodes": [
      0
    ],
    "interpreter": "INTERPRETER_UNSPECIFIED",
    "script": "string"
  }
}
```

An action that can be taken as part of installing or updating a recipe.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archiveExtraction|[SoftwareRecipeStepExtractArchive](#schemasoftwarerecipestepextractarchive)|false|none|Extracts an archive into the specified directory.|
|dpkgInstallation|[SoftwareRecipeStepInstallDpkg](#schemasoftwarerecipestepinstalldpkg)|false|none|Installs a deb file via dpkg.|
|fileCopy|[SoftwareRecipeStepCopyFile](#schemasoftwarerecipestepcopyfile)|false|none|Copies a file onto the instance.|
|fileExec|[SoftwareRecipeStepExecFile](#schemasoftwarerecipestepexecfile)|false|none|Executes an artifact or local file.|
|msiInstallation|[SoftwareRecipeStepInstallMsi](#schemasoftwarerecipestepinstallmsi)|false|none|Installs an MSI file.|
|rpmInstallation|[SoftwareRecipeStepInstallRpm](#schemasoftwarerecipestepinstallrpm)|false|none|Installs an rpm file via the rpm utility.|
|scriptRun|[SoftwareRecipeStepRunScript](#schemasoftwarerecipesteprunscript)|false|none|Runs commands in a shell.|

<h2 id="tocS_SoftwareRecipeStepCopyFile">SoftwareRecipeStepCopyFile</h2>
<!-- backwards compatibility -->
<a id="schemasoftwarerecipestepcopyfile"></a>
<a id="schema_SoftwareRecipeStepCopyFile"></a>
<a id="tocSsoftwarerecipestepcopyfile"></a>
<a id="tocssoftwarerecipestepcopyfile"></a>

```json
{
  "artifactId": "string",
  "destination": "string",
  "overwrite": true,
  "permissions": "string"
}
```

Copies the artifact to the specified path on the instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artifactId|string|false|none|Required. The id of the relevant artifact in the recipe.|
|destination|string|false|none|Required. The absolute path on the instance to put the file.|
|overwrite|boolean|false|none|Whether to allow this step to overwrite existing files. If this is false and the file already exists the file is not overwritten and the step is considered a success. Defaults to false.|
|permissions|string|false|none|Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users for the file (similarly to the numeric mode used in the linux chmod utility). Each digit represents a three bit number with the 4 bit corresponding to the read permissions, the 2 bit corresponds to the write bit, and the one bit corresponds to the execute permission. Default behavior is 755. Below are some examples of permissions and their associated values: read, write, and execute: 7 read and execute: 5 read and write: 6 read only: 4|

<h2 id="tocS_SoftwareRecipeStepExecFile">SoftwareRecipeStepExecFile</h2>
<!-- backwards compatibility -->
<a id="schemasoftwarerecipestepexecfile"></a>
<a id="schema_SoftwareRecipeStepExecFile"></a>
<a id="tocSsoftwarerecipestepexecfile"></a>
<a id="tocssoftwarerecipestepexecfile"></a>

```json
{
  "allowedExitCodes": [
    0
  ],
  "args": [
    "string"
  ],
  "artifactId": "string",
  "localPath": "string"
}
```

Executes an artifact or local file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedExitCodes|[integer(int32)]|false|none|Defaults to [0]. A list of possible return values that the program can return to indicate a success.|
|args|[string]|false|none|Arguments to be passed to the provided executable.|
|artifactId|string|false|none|The id of the relevant artifact in the recipe.|
|localPath|string|false|none|The absolute path of the file on the local filesystem.|

<h2 id="tocS_SoftwareRecipeStepExtractArchive">SoftwareRecipeStepExtractArchive</h2>
<!-- backwards compatibility -->
<a id="schemasoftwarerecipestepextractarchive"></a>
<a id="schema_SoftwareRecipeStepExtractArchive"></a>
<a id="tocSsoftwarerecipestepextractarchive"></a>
<a id="tocssoftwarerecipestepextractarchive"></a>

```json
{
  "artifactId": "string",
  "destination": "string",
  "type": "ARCHIVE_TYPE_UNSPECIFIED"
}
```

Extracts an archive of the type specified in the specified directory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artifactId|string|false|none|Required. The id of the relevant artifact in the recipe.|
|destination|string|false|none|Directory to extract archive to. Defaults to `/` on Linux or `C:\` on Windows.|
|type|string|false|none|Required. The type of the archive to extract.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ARCHIVE_TYPE_UNSPECIFIED|
|type|TAR|
|type|TAR_GZIP|
|type|TAR_BZIP|
|type|TAR_LZMA|
|type|TAR_XZ|
|type|ZIP|

<h2 id="tocS_SoftwareRecipeStepInstallDpkg">SoftwareRecipeStepInstallDpkg</h2>
<!-- backwards compatibility -->
<a id="schemasoftwarerecipestepinstalldpkg"></a>
<a id="schema_SoftwareRecipeStepInstallDpkg"></a>
<a id="tocSsoftwarerecipestepinstalldpkg"></a>
<a id="tocssoftwarerecipestepinstalldpkg"></a>

```json
{
  "artifactId": "string"
}
```

Installs a deb via dpkg.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artifactId|string|false|none|Required. The id of the relevant artifact in the recipe.|

<h2 id="tocS_SoftwareRecipeStepInstallMsi">SoftwareRecipeStepInstallMsi</h2>
<!-- backwards compatibility -->
<a id="schemasoftwarerecipestepinstallmsi"></a>
<a id="schema_SoftwareRecipeStepInstallMsi"></a>
<a id="tocSsoftwarerecipestepinstallmsi"></a>
<a id="tocssoftwarerecipestepinstallmsi"></a>

```json
{
  "allowedExitCodes": [
    0
  ],
  "artifactId": "string",
  "flags": [
    "string"
  ]
}
```

Installs an MSI file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedExitCodes|[integer(int32)]|false|none|Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]|
|artifactId|string|false|none|Required. The id of the relevant artifact in the recipe.|
|flags|[string]|false|none|The flags to use when installing the MSI defaults to ["/i"] (i.e. the install flag).|

<h2 id="tocS_SoftwareRecipeStepInstallRpm">SoftwareRecipeStepInstallRpm</h2>
<!-- backwards compatibility -->
<a id="schemasoftwarerecipestepinstallrpm"></a>
<a id="schema_SoftwareRecipeStepInstallRpm"></a>
<a id="tocSsoftwarerecipestepinstallrpm"></a>
<a id="tocssoftwarerecipestepinstallrpm"></a>

```json
{
  "artifactId": "string"
}
```

Installs an rpm file via the rpm utility.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artifactId|string|false|none|Required. The id of the relevant artifact in the recipe.|

<h2 id="tocS_SoftwareRecipeStepRunScript">SoftwareRecipeStepRunScript</h2>
<!-- backwards compatibility -->
<a id="schemasoftwarerecipesteprunscript"></a>
<a id="schema_SoftwareRecipeStepRunScript"></a>
<a id="tocSsoftwarerecipesteprunscript"></a>
<a id="tocssoftwarerecipesteprunscript"></a>

```json
{
  "allowedExitCodes": [
    0
  ],
  "interpreter": "INTERPRETER_UNSPECIFIED",
  "script": "string"
}
```

Runs a script through an interpreter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedExitCodes|[integer(int32)]|false|none|Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]|
|interpreter|string|false|none|The script interpreter to use to run the script. If no interpreter is specified the script is executed directly, which likely only succeed for scripts with [shebang lines](https://en.wikipedia.org/wiki/Shebang_\(Unix\)).|
|script|string|false|none|Required. The shell script to be executed.|

#### Enumerated Values

|Property|Value|
|---|---|
|interpreter|INTERPRETER_UNSPECIFIED|
|interpreter|SHELL|
|interpreter|POWERSHELL|

<h2 id="tocS_TimeOfDay">TimeOfDay</h2>
<!-- backwards compatibility -->
<a id="schematimeofday"></a>
<a id="schema_TimeOfDay"></a>
<a id="tocStimeofday"></a>
<a id="tocstimeofday"></a>

```json
{
  "hours": 0,
  "minutes": 0,
  "nanos": 0,
  "seconds": 0
}
```

Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hours|integer(int32)|false|none|Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.|
|minutes|integer(int32)|false|none|Minutes of hour of day. Must be from 0 to 59.|
|nanos|integer(int32)|false|none|Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.|
|seconds|integer(int32)|false|none|Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.|

<h2 id="tocS_TimeZone">TimeZone</h2>
<!-- backwards compatibility -->
<a id="schematimezone"></a>
<a id="schema_TimeZone"></a>
<a id="tocStimezone"></a>
<a id="tocstimezone"></a>

```json
{
  "id": "string",
  "version": "string"
}
```

Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|IANA Time Zone Database time zone, e.g. "America/New_York".|
|version|string|false|none|Optional. IANA Time Zone Database version number, e.g. "2019a".|

<h2 id="tocS_WeekDayOfMonth">WeekDayOfMonth</h2>
<!-- backwards compatibility -->
<a id="schemaweekdayofmonth"></a>
<a id="schema_WeekDayOfMonth"></a>
<a id="tocSweekdayofmonth"></a>
<a id="tocsweekdayofmonth"></a>

```json
{
  "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
  "dayOffset": 0,
  "weekOrdinal": 0
}
```

Represents one week day in a month. An example is "the 4th Sunday".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dayOfWeek|string|false|none|Required. A day of the week.|
|dayOffset|integer(int32)|false|none|Optional. Represents the number of days before or after the given week day of month that the patch deployment is scheduled for. For example if `week_ordinal` and `day_of_week` values point to the second day of the month and this `day_offset` value is set to `3`, the patch deployment takes place three days after the second Tuesday of the month. If this value is negative, for example -5, the patches are deployed five days before before the second Tuesday of the month. Allowed values are in range [-30, 30].|
|weekOrdinal|integer(int32)|false|none|Required. Week number in a month. 1-4 indicates the 1st to 4th week of the month. -1 indicates the last week of the month.|

#### Enumerated Values

|Property|Value|
|---|---|
|dayOfWeek|DAY_OF_WEEK_UNSPECIFIED|
|dayOfWeek|MONDAY|
|dayOfWeek|TUESDAY|
|dayOfWeek|WEDNESDAY|
|dayOfWeek|THURSDAY|
|dayOfWeek|FRIDAY|
|dayOfWeek|SATURDAY|
|dayOfWeek|SUNDAY|

<h2 id="tocS_WeeklySchedule">WeeklySchedule</h2>
<!-- backwards compatibility -->
<a id="schemaweeklyschedule"></a>
<a id="schema_WeeklySchedule"></a>
<a id="tocSweeklyschedule"></a>
<a id="tocsweeklyschedule"></a>

```json
{
  "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED"
}
```

Represents a weekly schedule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dayOfWeek|string|false|none|Required. Day of the week.|

#### Enumerated Values

|Property|Value|
|---|---|
|dayOfWeek|DAY_OF_WEEK_UNSPECIFIED|
|dayOfWeek|MONDAY|
|dayOfWeek|TUESDAY|
|dayOfWeek|WEDNESDAY|
|dayOfWeek|THURSDAY|
|dayOfWeek|FRIDAY|
|dayOfWeek|SATURDAY|
|dayOfWeek|SUNDAY|

<h2 id="tocS_WindowsUpdateSettings">WindowsUpdateSettings</h2>
<!-- backwards compatibility -->
<a id="schemawindowsupdatesettings"></a>
<a id="schema_WindowsUpdateSettings"></a>
<a id="tocSwindowsupdatesettings"></a>
<a id="tocswindowsupdatesettings"></a>

```json
{
  "classifications": [
    "CLASSIFICATION_UNSPECIFIED"
  ],
  "excludes": [
    "string"
  ],
  "exclusivePatches": [
    "string"
  ]
}
```

Windows patching is performed using the Windows Update Agent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classifications|[string]|false|none|Only apply updates of these windows update classifications. If empty, all updates are applied.|
|excludes|[string]|false|none|List of KBs to exclude from update.|
|exclusivePatches|[string]|false|none|An exclusive list of kbs to be updated. These are the only patches that will be updated. This field must not be used with other patch configurations.|

#### Enumerated Values

|Property|Value|
|---|---|
|classifications|CLASSIFICATION_UNSPECIFIED|
|classifications|CRITICAL|
|classifications|SECURITY|
|classifications|DEFINITION|
|classifications|DRIVER|
|classifications|FEATURE_PACK|
|classifications|SERVICE_PACK|
|classifications|TOOL|
|classifications|UPDATE_ROLLUP|
|classifications|UPDATE|

<h2 id="tocS_YumRepository">YumRepository</h2>
<!-- backwards compatibility -->
<a id="schemayumrepository"></a>
<a id="schema_YumRepository"></a>
<a id="tocSyumrepository"></a>
<a id="tocsyumrepository"></a>

```json
{
  "baseUrl": "string",
  "displayName": "string",
  "gpgKeys": [
    "string"
  ],
  "id": "string"
}
```

Represents a single Yum package repository. This repository is added to a repo file that is stored at `/etc/yum.repos.d/google_osconfig.repo`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseUrl|string|false|none|Required. The location of the repository directory.|
|displayName|string|false|none|The display name of the repository.|
|gpgKeys|[string]|false|none|URIs of GPG keys.|
|id|string|false|none|Required. A one word, unique name for this repository. This is the `repo id` in the Yum config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for guest policy conflicts.|

<h2 id="tocS_YumSettings">YumSettings</h2>
<!-- backwards compatibility -->
<a id="schemayumsettings"></a>
<a id="schema_YumSettings"></a>
<a id="tocSyumsettings"></a>
<a id="tocsyumsettings"></a>

```json
{
  "excludes": [
    "string"
  ],
  "exclusivePackages": [
    "string"
  ],
  "minimal": true,
  "security": true
}
```

Yum patching is performed by executing `yum update`. Additional options can be set to control how this is executed. Note that not all settings are supported on all platforms.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|excludes|[string]|false|none|List of packages to exclude from update. These packages are excluded by using the yum `--exclude` flag.|
|exclusivePackages|[string]|false|none|An exclusive list of packages to be updated. These are the only packages that will be updated. If these packages are not installed, they will be ignored. This field must not be specified with any other patch configuration fields.|
|minimal|boolean|false|none|Will cause patch to run `yum update-minimal` instead.|
|security|boolean|false|none|Adds the `--security` flag to `yum update`. Not supported on all platforms.|

<h2 id="tocS_ZypperRepository">ZypperRepository</h2>
<!-- backwards compatibility -->
<a id="schemazypperrepository"></a>
<a id="schema_ZypperRepository"></a>
<a id="tocSzypperrepository"></a>
<a id="tocszypperrepository"></a>

```json
{
  "baseUrl": "string",
  "displayName": "string",
  "gpgKeys": [
    "string"
  ],
  "id": "string"
}
```

Represents a single Zypper package repository. This repository is added to a repo file that is stored at `/etc/zypp/repos.d/google_osconfig.repo`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseUrl|string|false|none|Required. The location of the repository directory.|
|displayName|string|false|none|The display name of the repository.|
|gpgKeys|[string]|false|none|URIs of GPG keys.|
|id|string|false|none|Required. A one word, unique name for this repository. This is the `repo id` in the zypper config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for guest policy conflicts.|

<h2 id="tocS_ZypperSettings">ZypperSettings</h2>
<!-- backwards compatibility -->
<a id="schemazyppersettings"></a>
<a id="schema_ZypperSettings"></a>
<a id="tocSzyppersettings"></a>
<a id="tocszyppersettings"></a>

```json
{
  "categories": [
    "string"
  ],
  "excludes": [
    "string"
  ],
  "exclusivePatches": [
    "string"
  ],
  "severities": [
    "string"
  ],
  "withOptional": true,
  "withUpdate": true
}
```

Zypper patching is performed by running `zypper patch`. See also https://en.opensuse.org/SDB:Zypper_manual.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[string]|false|none|Install only patches with these categories. Common categories include security, recommended, and feature.|
|excludes|[string]|false|none|List of patches to exclude from update.|
|exclusivePatches|[string]|false|none|An exclusive list of patches to be updated. These are the only patches that will be installed using 'zypper patch patch:' command. This field must not be used with any other patch configuration fields.|
|severities|[string]|false|none|Install only patches with these severities. Common severities include critical, important, moderate, and low.|
|withOptional|boolean|false|none|Adds the `--with-optional` flag to `zypper patch`.|
|withUpdate|boolean|false|none|Adds the `--with-update` flag, to `zypper patch`.|
