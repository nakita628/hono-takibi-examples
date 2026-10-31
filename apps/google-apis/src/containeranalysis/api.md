<h1 id="container-analysis-api">Container Analysis API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

An implementation of the Grafeas API, which stores, and enables querying and retrieval of critical metadata about all of your software artifacts.

Base URLs:

* <a href="https://containeranalysis.googleapis.com/">https://containeranalysis.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/container-analysis/api/reference/rest/">External documentation</a>

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

<h1 id="container-analysis-api-projects">projects</h1>

## containeranalysis.projects.occurrences.get

<a id="opIdcontaineranalysis.projects.occurrences.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}`

Gets the specified occurrence.

<h3 id="containeranalysisprojectsoccurrencesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.|
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
  "attestation": {
    "attestation": {
      "genericSignedAttestation": {
        "contentType": "CONTENT_TYPE_UNSPECIFIED",
        "serializedPayload": "string",
        "signatures": [
          {
            "publicKeyId": "string",
            "signature": "string"
          }
        ]
      },
      "pgpSignedAttestation": {
        "contentType": "CONTENT_TYPE_UNSPECIFIED",
        "pgpKeyId": "string",
        "signature": "string"
      }
    }
  },
  "build": {
    "provenance": {
      "buildOptions": {
        "property1": "string",
        "property2": "string"
      },
      "builderVersion": "string",
      "builtArtifacts": [
        {
          "checksum": "string",
          "id": "string",
          "names": [
            "string"
          ]
        }
      ],
      "commands": [
        {
          "args": [
            "string"
          ],
          "dir": "string",
          "env": [
            "string"
          ],
          "id": "string",
          "name": "string",
          "waitFor": [
            "string"
          ]
        }
      ],
      "createTime": "string",
      "creator": "string",
      "endTime": "string",
      "id": "string",
      "logsUri": "string",
      "projectId": "string",
      "sourceProvenance": {
        "additionalContexts": [
          {
            "cloudRepo": {
              "aliasContext": {
                "kind": "KIND_UNSPECIFIED",
                "name": "string"
              },
              "repoId": {
                "projectRepoId": {
                  "projectId": "string",
                  "repoName": "string"
                },
                "uid": "string"
              },
              "revisionId": "string"
            },
            "gerrit": {
              "aliasContext": {
                "kind": "KIND_UNSPECIFIED",
                "name": "string"
              },
              "gerritProject": "string",
              "hostUri": "string",
              "revisionId": "string"
            },
            "git": {
              "revisionId": "string",
              "url": "string"
            },
            "labels": {
              "property1": "string",
              "property2": "string"
            }
          }
        ],
        "artifactStorageSourceUri": "string",
        "context": {
          "cloudRepo": {
            "aliasContext": {
              "kind": "KIND_UNSPECIFIED",
              "name": "string"
            },
            "repoId": {
              "projectRepoId": {
                "projectId": "string",
                "repoName": "string"
              },
              "uid": "string"
            },
            "revisionId": "string"
          },
          "gerrit": {
            "aliasContext": {
              "kind": "KIND_UNSPECIFIED",
              "name": "string"
            },
            "gerritProject": "string",
            "hostUri": "string",
            "revisionId": "string"
          },
          "git": {
            "revisionId": "string",
            "url": "string"
          },
          "labels": {
            "property1": "string",
            "property2": "string"
          }
        },
        "fileHashes": {
          "property1": {
            "fileHash": [
              {
                "type": "HASH_TYPE_UNSPECIFIED",
                "value": "string"
              }
            ]
          },
          "property2": {
            "fileHash": [
              {
                "type": "HASH_TYPE_UNSPECIFIED",
                "value": "string"
              }
            ]
          }
        }
      },
      "startTime": "string",
      "triggerId": "string"
    },
    "provenanceBytes": "string"
  },
  "createTime": "string",
  "deployment": {
    "deployment": {
      "address": "string",
      "config": "string",
      "deployTime": "string",
      "platform": "PLATFORM_UNSPECIFIED",
      "resourceUri": [
        "string"
      ],
      "undeployTime": "string",
      "userEmail": "string"
    }
  },
  "derivedImage": {
    "derivedImage": {
      "baseResourceUrl": "string",
      "distance": 0,
      "fingerprint": {
        "v1Name": "string",
        "v2Blob": [
          "string"
        ],
        "v2Name": "string"
      },
      "layerInfo": [
        {
          "arguments": "string",
          "directive": "DIRECTIVE_UNSPECIFIED"
        }
      ]
    }
  },
  "discovered": {
    "discovered": {
      "analysisCompleted": {
        "analysisType": [
          "string"
        ]
      },
      "analysisError": [
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
      ],
      "analysisStatus": "ANALYSIS_STATUS_UNSPECIFIED",
      "analysisStatusError": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "continuousAnalysis": "CONTINUOUS_ANALYSIS_UNSPECIFIED",
      "lastAnalysisTime": "string"
    }
  },
  "envelope": {
    "payload": "string",
    "payloadType": "string",
    "signatures": [
      {
        "keyid": "string",
        "sig": "string"
      }
    ]
  },
  "installation": {
    "installation": {
      "architecture": "ARCHITECTURE_UNSPECIFIED",
      "cpeUri": "string",
      "license": {
        "comments": "string",
        "expression": "string"
      },
      "location": [
        {
          "cpeUri": "string",
          "path": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        }
      ],
      "name": "string",
      "packageType": "string",
      "version": {
        "epoch": 0,
        "inclusive": true,
        "kind": "VERSION_KIND_UNSPECIFIED",
        "name": "string",
        "revision": "string"
      }
    }
  },
  "intoto": {
    "signatures": [
      {
        "keyid": "string",
        "sig": "string"
      }
    ],
    "signed": {
      "byproducts": {
        "customValues": {
          "property1": "string",
          "property2": "string"
        }
      },
      "command": [
        "string"
      ],
      "environment": {
        "customValues": {
          "property1": "string",
          "property2": "string"
        }
      },
      "materials": [
        {
          "hashes": {
            "sha256": "string"
          },
          "resourceUri": "string"
        }
      ],
      "products": [
        {
          "hashes": {
            "sha256": "string"
          },
          "resourceUri": "string"
        }
      ]
    }
  },
  "kind": "NOTE_KIND_UNSPECIFIED",
  "name": "string",
  "noteName": "string",
  "remediation": "string",
  "resource": {
    "contentHash": {
      "type": "HASH_TYPE_UNSPECIFIED",
      "value": "string"
    },
    "name": "string",
    "uri": "string"
  },
  "sbom": {
    "createTime": "string",
    "creatorComment": "string",
    "creators": [
      "string"
    ],
    "documentComment": "string",
    "externalDocumentRefs": [
      "string"
    ],
    "id": "string",
    "licenseListVersion": "string",
    "namespace": "string",
    "title": "string"
  },
  "sbomReference": {
    "payload": {
      "_type": "string",
      "predicate": {
        "digest": {
          "property1": "string",
          "property2": "string"
        },
        "location": "string",
        "mimeType": "string",
        "referrerId": "string"
      },
      "predicateType": "string",
      "subject": [
        {
          "digest": {
            "property1": "string",
            "property2": "string"
          },
          "name": "string"
        }
      ]
    },
    "payloadType": "string",
    "signatures": [
      {
        "keyid": "string",
        "sig": "string"
      }
    ]
  },
  "spdxFile": {
    "attributions": [
      "string"
    ],
    "comment": "string",
    "contributors": [
      "string"
    ],
    "copyright": "string",
    "filesLicenseInfo": [
      "string"
    ],
    "id": "string",
    "licenseConcluded": {
      "comments": "string",
      "expression": "string"
    },
    "notice": "string"
  },
  "spdxPackage": {
    "comment": "string",
    "filename": "string",
    "homePage": "string",
    "id": "string",
    "licenseConcluded": {
      "comments": "string",
      "expression": "string"
    },
    "packageType": "string",
    "sourceInfo": "string",
    "summaryDescription": "string",
    "title": "string",
    "version": "string"
  },
  "spdxRelationship": {
    "comment": "string",
    "source": "string",
    "target": "string",
    "type": "RELATIONSHIP_TYPE_UNSPECIFIED"
  },
  "updateTime": "string",
  "vulnerability": {
    "cvssScore": 0,
    "cvssV2": {
      "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
      "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
      "authentication": "AUTHENTICATION_UNSPECIFIED",
      "availabilityImpact": "IMPACT_UNSPECIFIED",
      "baseScore": 0,
      "confidentialityImpact": "IMPACT_UNSPECIFIED",
      "exploitabilityScore": 0,
      "impactScore": 0,
      "integrityImpact": "IMPACT_UNSPECIFIED",
      "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
      "scope": "SCOPE_UNSPECIFIED",
      "userInteraction": "USER_INTERACTION_UNSPECIFIED"
    },
    "cvssV3": {
      "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
      "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
      "authentication": "AUTHENTICATION_UNSPECIFIED",
      "availabilityImpact": "IMPACT_UNSPECIFIED",
      "baseScore": 0,
      "confidentialityImpact": "IMPACT_UNSPECIFIED",
      "exploitabilityScore": 0,
      "impactScore": 0,
      "integrityImpact": "IMPACT_UNSPECIFIED",
      "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
      "scope": "SCOPE_UNSPECIFIED",
      "userInteraction": "USER_INTERACTION_UNSPECIFIED"
    },
    "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
    "effectiveSeverity": "SEVERITY_UNSPECIFIED",
    "longDescription": "string",
    "packageIssue": [
      {
        "affectedLocation": {
          "cpeUri": "string",
          "package": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        },
        "effectiveSeverity": "SEVERITY_UNSPECIFIED",
        "fixedLocation": {
          "cpeUri": "string",
          "package": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        },
        "packageType": "string",
        "severityName": "string"
      }
    ],
    "relatedUrls": [
      {
        "label": "string",
        "url": "string"
      }
    ],
    "severity": "SEVERITY_UNSPECIFIED",
    "shortDescription": "string",
    "type": "string",
    "vexAssessment": {
      "cve": "string",
      "impacts": [
        "string"
      ],
      "justification": {
        "details": "string",
        "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
      },
      "noteName": "string",
      "relatedUris": [
        {
          "label": "string",
          "url": "string"
        }
      ],
      "remediations": [
        {
          "details": "string",
          "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
          "remediationUri": {
            "label": "string",
            "url": "string"
          }
        }
      ],
      "state": "STATE_UNSPECIFIED"
    }
  }
}
```

<h3 id="containeranalysisprojectsoccurrencesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Occurrence](#schemaoccurrence)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## containeranalysis.projects.occurrences.delete

<a id="opIdcontaineranalysis.projects.occurrences.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{name}`

Deletes the specified occurrence. For example, use this method to delete an occurrence when the occurrence is no longer applicable for the given resource.

<h3 id="containeranalysisprojectsoccurrencesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.|
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

<h3 id="containeranalysisprojectsoccurrencesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## containeranalysis.projects.occurrences.patch

<a id="opIdcontaineranalysis.projects.occurrences.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attestation": {
      "attestation": {
        "genericSignedAttestation": {
          "contentType": "CONTENT_TYPE_UNSPECIFIED",
          "serializedPayload": "string",
          "signatures": [
            {
              "publicKeyId": "string",
              "signature": "string"
            }
          ]
        },
        "pgpSignedAttestation": {
          "contentType": "CONTENT_TYPE_UNSPECIFIED",
          "pgpKeyId": "string",
          "signature": "string"
        }
      }
    },
    "build": {
      "provenance": {
        "buildOptions": {
          "property1": "string",
          "property2": "string"
        },
        "builderVersion": "string",
        "builtArtifacts": [
          {
            "checksum": "string",
            "id": "string",
            "names": [
              "string"
            ]
          }
        ],
        "commands": [
          {
            "args": [
              "string"
            ],
            "dir": "string",
            "env": [
              "string"
            ],
            "id": "string",
            "name": "string",
            "waitFor": [
              "string"
            ]
          }
        ],
        "createTime": "string",
        "creator": "string",
        "endTime": "string",
        "id": "string",
        "logsUri": "string",
        "projectId": "string",
        "sourceProvenance": {
          "additionalContexts": [
            {
              "cloudRepo": {
                "aliasContext": {
                  "kind": "KIND_UNSPECIFIED",
                  "name": "string"
                },
                "repoId": {
                  "projectRepoId": {
                    "projectId": "string",
                    "repoName": "string"
                  },
                  "uid": "string"
                },
                "revisionId": "string"
              },
              "gerrit": {
                "aliasContext": {
                  "kind": "KIND_UNSPECIFIED",
                  "name": "string"
                },
                "gerritProject": "string",
                "hostUri": "string",
                "revisionId": "string"
              },
              "git": {
                "revisionId": "string",
                "url": "string"
              },
              "labels": {
                "property1": "string",
                "property2": "string"
              }
            }
          ],
          "artifactStorageSourceUri": "string",
          "context": {
            "cloudRepo": {
              "aliasContext": {
                "kind": "KIND_UNSPECIFIED",
                "name": "string"
              },
              "repoId": {
                "projectRepoId": {
                  "projectId": "string",
                  "repoName": "string"
                },
                "uid": "string"
              },
              "revisionId": "string"
            },
            "gerrit": {
              "aliasContext": {
                "kind": "KIND_UNSPECIFIED",
                "name": "string"
              },
              "gerritProject": "string",
              "hostUri": "string",
              "revisionId": "string"
            },
            "git": {
              "revisionId": "string",
              "url": "string"
            },
            "labels": {
              "property1": "string",
              "property2": "string"
            }
          },
          "fileHashes": {
            "property1": {
              "fileHash": [
                {
                  "type": "HASH_TYPE_UNSPECIFIED",
                  "value": "string"
                }
              ]
            },
            "property2": {
              "fileHash": [
                {
                  "type": "HASH_TYPE_UNSPECIFIED",
                  "value": "string"
                }
              ]
            }
          }
        },
        "startTime": "string",
        "triggerId": "string"
      },
      "provenanceBytes": "string"
    },
    "createTime": "string",
    "deployment": {
      "deployment": {
        "address": "string",
        "config": "string",
        "deployTime": "string",
        "platform": "PLATFORM_UNSPECIFIED",
        "resourceUri": [
          "string"
        ],
        "undeployTime": "string",
        "userEmail": "string"
      }
    },
    "derivedImage": {
      "derivedImage": {
        "baseResourceUrl": "string",
        "distance": 0,
        "fingerprint": {
          "v1Name": "string",
          "v2Blob": [
            "string"
          ],
          "v2Name": "string"
        },
        "layerInfo": [
          {
            "arguments": "string",
            "directive": "DIRECTIVE_UNSPECIFIED"
          }
        ]
      }
    },
    "discovered": {
      "discovered": {
        "analysisCompleted": {
          "analysisType": [
            "string"
          ]
        },
        "analysisError": [
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
        ],
        "analysisStatus": "ANALYSIS_STATUS_UNSPECIFIED",
        "analysisStatusError": {
          "code": 0,
          "details": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "message": "string"
        },
        "continuousAnalysis": "CONTINUOUS_ANALYSIS_UNSPECIFIED",
        "lastAnalysisTime": "string"
      }
    },
    "envelope": {
      "payload": "string",
      "payloadType": "string",
      "signatures": [
        {
          "keyid": "string",
          "sig": "string"
        }
      ]
    },
    "installation": {
      "installation": {
        "license": {
          "comments": "string",
          "expression": "string"
        },
        "location": [
          {
            "cpeUri": "string",
            "path": "string",
            "version": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            }
          }
        ]
      }
    },
    "intoto": {
      "signatures": [
        {
          "keyid": "string",
          "sig": "string"
        }
      ],
      "signed": {
        "byproducts": {
          "customValues": {
            "property1": "string",
            "property2": "string"
          }
        },
        "command": [
          "string"
        ],
        "environment": {
          "customValues": {
            "property1": "string",
            "property2": "string"
          }
        },
        "materials": [
          {
            "hashes": {
              "sha256": "string"
            },
            "resourceUri": "string"
          }
        ],
        "products": [
          {
            "hashes": {
              "sha256": "string"
            },
            "resourceUri": "string"
          }
        ]
      }
    },
    "kind": "NOTE_KIND_UNSPECIFIED",
    "name": "string",
    "noteName": "string",
    "remediation": "string",
    "resource": {
      "contentHash": {
        "type": "HASH_TYPE_UNSPECIFIED",
        "value": "string"
      },
      "name": "string",
      "uri": "string"
    },
    "sbom": {
      "createTime": "string",
      "creatorComment": "string",
      "creators": [
        "string"
      ],
      "documentComment": "string",
      "externalDocumentRefs": [
        "string"
      ],
      "id": "string",
      "licenseListVersion": "string",
      "namespace": "string",
      "title": "string"
    },
    "sbomReference": {
      "payload": {
        "_type": "string",
        "predicate": {
          "digest": {
            "property1": "string",
            "property2": "string"
          },
          "location": "string",
          "mimeType": "string",
          "referrerId": "string"
        },
        "predicateType": "string",
        "subject": [
          {
            "digest": {
              "property1": "string",
              "property2": "string"
            },
            "name": "string"
          }
        ]
      },
      "payloadType": "string",
      "signatures": [
        {
          "keyid": "string",
          "sig": "string"
        }
      ]
    },
    "spdxFile": {
      "attributions": [
        "string"
      ],
      "comment": "string",
      "contributors": [
        "string"
      ],
      "copyright": "string",
      "filesLicenseInfo": [
        "string"
      ],
      "id": "string",
      "licenseConcluded": {
        "comments": "string",
        "expression": "string"
      },
      "notice": "string"
    },
    "spdxPackage": {
      "comment": "string",
      "filename": "string",
      "id": "string",
      "licenseConcluded": {
        "comments": "string",
        "expression": "string"
      },
      "sourceInfo": "string"
    },
    "spdxRelationship": {
      "comment": "string",
      "source": "string",
      "target": "string"
    },
    "updateTime": "string",
    "vulnerability": {
      "cvssScore": 0,
      "cvssV2": {
        "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
        "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
        "authentication": "AUTHENTICATION_UNSPECIFIED",
        "availabilityImpact": "IMPACT_UNSPECIFIED",
        "baseScore": 0,
        "confidentialityImpact": "IMPACT_UNSPECIFIED",
        "exploitabilityScore": 0,
        "impactScore": 0,
        "integrityImpact": "IMPACT_UNSPECIFIED",
        "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
        "scope": "SCOPE_UNSPECIFIED",
        "userInteraction": "USER_INTERACTION_UNSPECIFIED"
      },
      "cvssV3": {
        "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
        "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
        "authentication": "AUTHENTICATION_UNSPECIFIED",
        "availabilityImpact": "IMPACT_UNSPECIFIED",
        "baseScore": 0,
        "confidentialityImpact": "IMPACT_UNSPECIFIED",
        "exploitabilityScore": 0,
        "impactScore": 0,
        "integrityImpact": "IMPACT_UNSPECIFIED",
        "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
        "scope": "SCOPE_UNSPECIFIED",
        "userInteraction": "USER_INTERACTION_UNSPECIFIED"
      },
      "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
      "effectiveSeverity": "SEVERITY_UNSPECIFIED",
      "longDescription": "string",
      "packageIssue": [
        {
          "affectedLocation": {
            "cpeUri": "string",
            "package": "string",
            "version": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            }
          },
          "fixedLocation": {
            "cpeUri": "string",
            "package": "string",
            "version": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            }
          },
          "packageType": "string",
          "severityName": "string"
        }
      ],
      "relatedUrls": [
        {
          "label": "string",
          "url": "string"
        }
      ],
      "severity": "SEVERITY_UNSPECIFIED",
      "shortDescription": "string",
      "type": "string",
      "vexAssessment": {
        "cve": "string",
        "impacts": [
          "string"
        ],
        "justification": {
          "details": "string",
          "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
        },
        "noteName": "string",
        "relatedUris": [
          {
            "label": "string",
            "url": "string"
          }
        ],
        "remediations": [
          {
            "details": "string",
            "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
            "remediationUri": {
              "label": "string",
              "url": "string"
            }
          }
        ],
        "state": "STATE_UNSPECIFIED"
      }
    }
  }'
```

`PATCH /v1beta1/{name}`

Updates the specified occurrence.

> Body parameter

```json
{
  "attestation": {
    "attestation": {
      "genericSignedAttestation": {
        "contentType": "CONTENT_TYPE_UNSPECIFIED",
        "serializedPayload": "string",
        "signatures": [
          {
            "publicKeyId": "string",
            "signature": "string"
          }
        ]
      },
      "pgpSignedAttestation": {
        "contentType": "CONTENT_TYPE_UNSPECIFIED",
        "pgpKeyId": "string",
        "signature": "string"
      }
    }
  },
  "build": {
    "provenance": {
      "buildOptions": {
        "property1": "string",
        "property2": "string"
      },
      "builderVersion": "string",
      "builtArtifacts": [
        {
          "checksum": "string",
          "id": "string",
          "names": [
            "string"
          ]
        }
      ],
      "commands": [
        {
          "args": [
            "string"
          ],
          "dir": "string",
          "env": [
            "string"
          ],
          "id": "string",
          "name": "string",
          "waitFor": [
            "string"
          ]
        }
      ],
      "createTime": "string",
      "creator": "string",
      "endTime": "string",
      "id": "string",
      "logsUri": "string",
      "projectId": "string",
      "sourceProvenance": {
        "additionalContexts": [
          {
            "cloudRepo": {
              "aliasContext": {
                "kind": "KIND_UNSPECIFIED",
                "name": "string"
              },
              "repoId": {
                "projectRepoId": {
                  "projectId": "string",
                  "repoName": "string"
                },
                "uid": "string"
              },
              "revisionId": "string"
            },
            "gerrit": {
              "aliasContext": {
                "kind": "KIND_UNSPECIFIED",
                "name": "string"
              },
              "gerritProject": "string",
              "hostUri": "string",
              "revisionId": "string"
            },
            "git": {
              "revisionId": "string",
              "url": "string"
            },
            "labels": {
              "property1": "string",
              "property2": "string"
            }
          }
        ],
        "artifactStorageSourceUri": "string",
        "context": {
          "cloudRepo": {
            "aliasContext": {
              "kind": "KIND_UNSPECIFIED",
              "name": "string"
            },
            "repoId": {
              "projectRepoId": {
                "projectId": "string",
                "repoName": "string"
              },
              "uid": "string"
            },
            "revisionId": "string"
          },
          "gerrit": {
            "aliasContext": {
              "kind": "KIND_UNSPECIFIED",
              "name": "string"
            },
            "gerritProject": "string",
            "hostUri": "string",
            "revisionId": "string"
          },
          "git": {
            "revisionId": "string",
            "url": "string"
          },
          "labels": {
            "property1": "string",
            "property2": "string"
          }
        },
        "fileHashes": {
          "property1": {
            "fileHash": [
              {
                "type": "HASH_TYPE_UNSPECIFIED",
                "value": "string"
              }
            ]
          },
          "property2": {
            "fileHash": [
              {
                "type": "HASH_TYPE_UNSPECIFIED",
                "value": "string"
              }
            ]
          }
        }
      },
      "startTime": "string",
      "triggerId": "string"
    },
    "provenanceBytes": "string"
  },
  "createTime": "string",
  "deployment": {
    "deployment": {
      "address": "string",
      "config": "string",
      "deployTime": "string",
      "platform": "PLATFORM_UNSPECIFIED",
      "resourceUri": [
        "string"
      ],
      "undeployTime": "string",
      "userEmail": "string"
    }
  },
  "derivedImage": {
    "derivedImage": {
      "baseResourceUrl": "string",
      "distance": 0,
      "fingerprint": {
        "v1Name": "string",
        "v2Blob": [
          "string"
        ],
        "v2Name": "string"
      },
      "layerInfo": [
        {
          "arguments": "string",
          "directive": "DIRECTIVE_UNSPECIFIED"
        }
      ]
    }
  },
  "discovered": {
    "discovered": {
      "analysisCompleted": {
        "analysisType": [
          "string"
        ]
      },
      "analysisError": [
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
      ],
      "analysisStatus": "ANALYSIS_STATUS_UNSPECIFIED",
      "analysisStatusError": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "continuousAnalysis": "CONTINUOUS_ANALYSIS_UNSPECIFIED",
      "lastAnalysisTime": "string"
    }
  },
  "envelope": {
    "payload": "string",
    "payloadType": "string",
    "signatures": [
      {
        "keyid": "string",
        "sig": "string"
      }
    ]
  },
  "installation": {
    "installation": {
      "license": {
        "comments": "string",
        "expression": "string"
      },
      "location": [
        {
          "cpeUri": "string",
          "path": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        }
      ]
    }
  },
  "intoto": {
    "signatures": [
      {
        "keyid": "string",
        "sig": "string"
      }
    ],
    "signed": {
      "byproducts": {
        "customValues": {
          "property1": "string",
          "property2": "string"
        }
      },
      "command": [
        "string"
      ],
      "environment": {
        "customValues": {
          "property1": "string",
          "property2": "string"
        }
      },
      "materials": [
        {
          "hashes": {
            "sha256": "string"
          },
          "resourceUri": "string"
        }
      ],
      "products": [
        {
          "hashes": {
            "sha256": "string"
          },
          "resourceUri": "string"
        }
      ]
    }
  },
  "kind": "NOTE_KIND_UNSPECIFIED",
  "name": "string",
  "noteName": "string",
  "remediation": "string",
  "resource": {
    "contentHash": {
      "type": "HASH_TYPE_UNSPECIFIED",
      "value": "string"
    },
    "name": "string",
    "uri": "string"
  },
  "sbom": {
    "createTime": "string",
    "creatorComment": "string",
    "creators": [
      "string"
    ],
    "documentComment": "string",
    "externalDocumentRefs": [
      "string"
    ],
    "id": "string",
    "licenseListVersion": "string",
    "namespace": "string",
    "title": "string"
  },
  "sbomReference": {
    "payload": {
      "_type": "string",
      "predicate": {
        "digest": {
          "property1": "string",
          "property2": "string"
        },
        "location": "string",
        "mimeType": "string",
        "referrerId": "string"
      },
      "predicateType": "string",
      "subject": [
        {
          "digest": {
            "property1": "string",
            "property2": "string"
          },
          "name": "string"
        }
      ]
    },
    "payloadType": "string",
    "signatures": [
      {
        "keyid": "string",
        "sig": "string"
      }
    ]
  },
  "spdxFile": {
    "attributions": [
      "string"
    ],
    "comment": "string",
    "contributors": [
      "string"
    ],
    "copyright": "string",
    "filesLicenseInfo": [
      "string"
    ],
    "id": "string",
    "licenseConcluded": {
      "comments": "string",
      "expression": "string"
    },
    "notice": "string"
  },
  "spdxPackage": {
    "comment": "string",
    "filename": "string",
    "id": "string",
    "licenseConcluded": {
      "comments": "string",
      "expression": "string"
    },
    "sourceInfo": "string"
  },
  "spdxRelationship": {
    "comment": "string",
    "source": "string",
    "target": "string"
  },
  "updateTime": "string",
  "vulnerability": {
    "cvssScore": 0,
    "cvssV2": {
      "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
      "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
      "authentication": "AUTHENTICATION_UNSPECIFIED",
      "availabilityImpact": "IMPACT_UNSPECIFIED",
      "baseScore": 0,
      "confidentialityImpact": "IMPACT_UNSPECIFIED",
      "exploitabilityScore": 0,
      "impactScore": 0,
      "integrityImpact": "IMPACT_UNSPECIFIED",
      "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
      "scope": "SCOPE_UNSPECIFIED",
      "userInteraction": "USER_INTERACTION_UNSPECIFIED"
    },
    "cvssV3": {
      "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
      "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
      "authentication": "AUTHENTICATION_UNSPECIFIED",
      "availabilityImpact": "IMPACT_UNSPECIFIED",
      "baseScore": 0,
      "confidentialityImpact": "IMPACT_UNSPECIFIED",
      "exploitabilityScore": 0,
      "impactScore": 0,
      "integrityImpact": "IMPACT_UNSPECIFIED",
      "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
      "scope": "SCOPE_UNSPECIFIED",
      "userInteraction": "USER_INTERACTION_UNSPECIFIED"
    },
    "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
    "effectiveSeverity": "SEVERITY_UNSPECIFIED",
    "longDescription": "string",
    "packageIssue": [
      {
        "affectedLocation": {
          "cpeUri": "string",
          "package": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        },
        "fixedLocation": {
          "cpeUri": "string",
          "package": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        },
        "packageType": "string",
        "severityName": "string"
      }
    ],
    "relatedUrls": [
      {
        "label": "string",
        "url": "string"
      }
    ],
    "severity": "SEVERITY_UNSPECIFIED",
    "shortDescription": "string",
    "type": "string",
    "vexAssessment": {
      "cve": "string",
      "impacts": [
        "string"
      ],
      "justification": {
        "details": "string",
        "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
      },
      "noteName": "string",
      "relatedUris": [
        {
          "label": "string",
          "url": "string"
        }
      ],
      "remediations": [
        {
          "details": "string",
          "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
          "remediationUri": {
            "label": "string",
            "url": "string"
          }
        }
      ],
      "state": "STATE_UNSPECIFIED"
    }
  }
}
```

<h3 id="containeranalysisprojectsoccurrencespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.|
|updateMask|query|string|false|The fields to update.|
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
|body|body|[Occurrence](#schemaoccurrence)|false|none|
|» attestation|body|[Details](#schemadetails)|false|Describes an attestation of an artifact.|
|» build|body|[GrafeasV1beta1BuildDetails](#schemagrafeasv1beta1builddetails)|false|Describes a verifiable build.|
|» createTime|body|string(google-datetime)|false|Output only. The time this occurrence was created.|
|» deployment|body|[GrafeasV1beta1DeploymentDetails](#schemagrafeasv1beta1deploymentdetails)|false|Describes the deployment of an artifact on a runtime.|
|» derivedImage|body|[GrafeasV1beta1ImageDetails](#schemagrafeasv1beta1imagedetails)|false|Describes how this resource derives from the basis in the associated note.|
|» discovered|body|[GrafeasV1beta1DiscoveryDetails](#schemagrafeasv1beta1discoverydetails)|false|Describes when a resource was discovered.|
|» envelope|body|[Envelope](#schemaenvelope)|false|https://github.com/secure-systems-lab/dsse|
|» installation|body|[GrafeasV1beta1PackageDetails](#schemagrafeasv1beta1packagedetails)|false|Describes the installation of a package on the linked resource.|
|» intoto|body|[GrafeasV1beta1IntotoDetails](#schemagrafeasv1beta1intotodetails)|false|Describes a specific in-toto link.|
|» kind|body|string|false|Output only. This explicitly denotes which of the occurrence details are specified. This field can be used as a filter in list requests.|
|» name|body|string|false|Output only. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.|
|» noteName|body|string|false|Required. Immutable. The analysis note associated with this occurrence, in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. This field can be used as a filter in list requests.|
|» remediation|body|string|false|A description of actions that can be taken to remedy the note.|
|» resource|body|[Resource](#schemaresource)|false|Required. Immutable. The resource for which the occurrence applies.|
|» sbom|body|[DocumentOccurrence](#schemadocumentoccurrence)|false|Describes a specific software bill of materials document.|
|» sbomReference|body|[SBOMReferenceOccurrence](#schemasbomreferenceoccurrence)|false|Describes a specific SBOM reference occurrences.|
|» spdxFile|body|[FileOccurrence](#schemafileoccurrence)|false|Describes a specific SPDX File.|
|» spdxPackage|body|[PackageInfoOccurrence](#schemapackageinfooccurrence)|false|Describes a specific SPDX Package.|
|» spdxRelationship|body|[RelationshipOccurrence](#schemarelationshipoccurrence)|false|Describes a specific SPDX Relationship.|
|» updateTime|body|string(google-datetime)|false|Output only. The time this occurrence was last updated.|
|» vulnerability|body|[GrafeasV1beta1VulnerabilityDetails](#schemagrafeasv1beta1vulnerabilitydetails)|false|Describes a security vulnerability.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» kind|NOTE_KIND_UNSPECIFIED|
|» kind|VULNERABILITY|
|» kind|BUILD|
|» kind|IMAGE|
|» kind|PACKAGE|
|» kind|DEPLOYMENT|
|» kind|DISCOVERY|
|» kind|ATTESTATION|
|» kind|INTOTO|
|» kind|SBOM|
|» kind|SPDX_PACKAGE|
|» kind|SPDX_FILE|
|» kind|SPDX_RELATIONSHIP|
|» kind|VULNERABILITY_ASSESSMENT|
|» kind|SBOM_REFERENCE|

> Example responses

> 200 Response

```json
{
  "attestation": {
    "attestation": {
      "genericSignedAttestation": {
        "contentType": "CONTENT_TYPE_UNSPECIFIED",
        "serializedPayload": "string",
        "signatures": [
          {
            "publicKeyId": "string",
            "signature": "string"
          }
        ]
      },
      "pgpSignedAttestation": {
        "contentType": "CONTENT_TYPE_UNSPECIFIED",
        "pgpKeyId": "string",
        "signature": "string"
      }
    }
  },
  "build": {
    "provenance": {
      "buildOptions": {
        "property1": "string",
        "property2": "string"
      },
      "builderVersion": "string",
      "builtArtifacts": [
        {
          "checksum": "string",
          "id": "string",
          "names": [
            "string"
          ]
        }
      ],
      "commands": [
        {
          "args": [
            "string"
          ],
          "dir": "string",
          "env": [
            "string"
          ],
          "id": "string",
          "name": "string",
          "waitFor": [
            "string"
          ]
        }
      ],
      "createTime": "string",
      "creator": "string",
      "endTime": "string",
      "id": "string",
      "logsUri": "string",
      "projectId": "string",
      "sourceProvenance": {
        "additionalContexts": [
          {
            "cloudRepo": {
              "aliasContext": {
                "kind": "KIND_UNSPECIFIED",
                "name": "string"
              },
              "repoId": {
                "projectRepoId": {
                  "projectId": "string",
                  "repoName": "string"
                },
                "uid": "string"
              },
              "revisionId": "string"
            },
            "gerrit": {
              "aliasContext": {
                "kind": "KIND_UNSPECIFIED",
                "name": "string"
              },
              "gerritProject": "string",
              "hostUri": "string",
              "revisionId": "string"
            },
            "git": {
              "revisionId": "string",
              "url": "string"
            },
            "labels": {
              "property1": "string",
              "property2": "string"
            }
          }
        ],
        "artifactStorageSourceUri": "string",
        "context": {
          "cloudRepo": {
            "aliasContext": {
              "kind": "KIND_UNSPECIFIED",
              "name": "string"
            },
            "repoId": {
              "projectRepoId": {
                "projectId": "string",
                "repoName": "string"
              },
              "uid": "string"
            },
            "revisionId": "string"
          },
          "gerrit": {
            "aliasContext": {
              "kind": "KIND_UNSPECIFIED",
              "name": "string"
            },
            "gerritProject": "string",
            "hostUri": "string",
            "revisionId": "string"
          },
          "git": {
            "revisionId": "string",
            "url": "string"
          },
          "labels": {
            "property1": "string",
            "property2": "string"
          }
        },
        "fileHashes": {
          "property1": {
            "fileHash": [
              {
                "type": "HASH_TYPE_UNSPECIFIED",
                "value": "string"
              }
            ]
          },
          "property2": {
            "fileHash": [
              {
                "type": "HASH_TYPE_UNSPECIFIED",
                "value": "string"
              }
            ]
          }
        }
      },
      "startTime": "string",
      "triggerId": "string"
    },
    "provenanceBytes": "string"
  },
  "createTime": "string",
  "deployment": {
    "deployment": {
      "address": "string",
      "config": "string",
      "deployTime": "string",
      "platform": "PLATFORM_UNSPECIFIED",
      "resourceUri": [
        "string"
      ],
      "undeployTime": "string",
      "userEmail": "string"
    }
  },
  "derivedImage": {
    "derivedImage": {
      "baseResourceUrl": "string",
      "distance": 0,
      "fingerprint": {
        "v1Name": "string",
        "v2Blob": [
          "string"
        ],
        "v2Name": "string"
      },
      "layerInfo": [
        {
          "arguments": "string",
          "directive": "DIRECTIVE_UNSPECIFIED"
        }
      ]
    }
  },
  "discovered": {
    "discovered": {
      "analysisCompleted": {
        "analysisType": [
          "string"
        ]
      },
      "analysisError": [
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
      ],
      "analysisStatus": "ANALYSIS_STATUS_UNSPECIFIED",
      "analysisStatusError": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "continuousAnalysis": "CONTINUOUS_ANALYSIS_UNSPECIFIED",
      "lastAnalysisTime": "string"
    }
  },
  "envelope": {
    "payload": "string",
    "payloadType": "string",
    "signatures": [
      {
        "keyid": "string",
        "sig": "string"
      }
    ]
  },
  "installation": {
    "installation": {
      "architecture": "ARCHITECTURE_UNSPECIFIED",
      "cpeUri": "string",
      "license": {
        "comments": "string",
        "expression": "string"
      },
      "location": [
        {
          "cpeUri": "string",
          "path": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        }
      ],
      "name": "string",
      "packageType": "string",
      "version": {
        "epoch": 0,
        "inclusive": true,
        "kind": "VERSION_KIND_UNSPECIFIED",
        "name": "string",
        "revision": "string"
      }
    }
  },
  "intoto": {
    "signatures": [
      {
        "keyid": "string",
        "sig": "string"
      }
    ],
    "signed": {
      "byproducts": {
        "customValues": {
          "property1": "string",
          "property2": "string"
        }
      },
      "command": [
        "string"
      ],
      "environment": {
        "customValues": {
          "property1": "string",
          "property2": "string"
        }
      },
      "materials": [
        {
          "hashes": {
            "sha256": "string"
          },
          "resourceUri": "string"
        }
      ],
      "products": [
        {
          "hashes": {
            "sha256": "string"
          },
          "resourceUri": "string"
        }
      ]
    }
  },
  "kind": "NOTE_KIND_UNSPECIFIED",
  "name": "string",
  "noteName": "string",
  "remediation": "string",
  "resource": {
    "contentHash": {
      "type": "HASH_TYPE_UNSPECIFIED",
      "value": "string"
    },
    "name": "string",
    "uri": "string"
  },
  "sbom": {
    "createTime": "string",
    "creatorComment": "string",
    "creators": [
      "string"
    ],
    "documentComment": "string",
    "externalDocumentRefs": [
      "string"
    ],
    "id": "string",
    "licenseListVersion": "string",
    "namespace": "string",
    "title": "string"
  },
  "sbomReference": {
    "payload": {
      "_type": "string",
      "predicate": {
        "digest": {
          "property1": "string",
          "property2": "string"
        },
        "location": "string",
        "mimeType": "string",
        "referrerId": "string"
      },
      "predicateType": "string",
      "subject": [
        {
          "digest": {
            "property1": "string",
            "property2": "string"
          },
          "name": "string"
        }
      ]
    },
    "payloadType": "string",
    "signatures": [
      {
        "keyid": "string",
        "sig": "string"
      }
    ]
  },
  "spdxFile": {
    "attributions": [
      "string"
    ],
    "comment": "string",
    "contributors": [
      "string"
    ],
    "copyright": "string",
    "filesLicenseInfo": [
      "string"
    ],
    "id": "string",
    "licenseConcluded": {
      "comments": "string",
      "expression": "string"
    },
    "notice": "string"
  },
  "spdxPackage": {
    "comment": "string",
    "filename": "string",
    "homePage": "string",
    "id": "string",
    "licenseConcluded": {
      "comments": "string",
      "expression": "string"
    },
    "packageType": "string",
    "sourceInfo": "string",
    "summaryDescription": "string",
    "title": "string",
    "version": "string"
  },
  "spdxRelationship": {
    "comment": "string",
    "source": "string",
    "target": "string",
    "type": "RELATIONSHIP_TYPE_UNSPECIFIED"
  },
  "updateTime": "string",
  "vulnerability": {
    "cvssScore": 0,
    "cvssV2": {
      "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
      "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
      "authentication": "AUTHENTICATION_UNSPECIFIED",
      "availabilityImpact": "IMPACT_UNSPECIFIED",
      "baseScore": 0,
      "confidentialityImpact": "IMPACT_UNSPECIFIED",
      "exploitabilityScore": 0,
      "impactScore": 0,
      "integrityImpact": "IMPACT_UNSPECIFIED",
      "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
      "scope": "SCOPE_UNSPECIFIED",
      "userInteraction": "USER_INTERACTION_UNSPECIFIED"
    },
    "cvssV3": {
      "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
      "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
      "authentication": "AUTHENTICATION_UNSPECIFIED",
      "availabilityImpact": "IMPACT_UNSPECIFIED",
      "baseScore": 0,
      "confidentialityImpact": "IMPACT_UNSPECIFIED",
      "exploitabilityScore": 0,
      "impactScore": 0,
      "integrityImpact": "IMPACT_UNSPECIFIED",
      "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
      "scope": "SCOPE_UNSPECIFIED",
      "userInteraction": "USER_INTERACTION_UNSPECIFIED"
    },
    "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
    "effectiveSeverity": "SEVERITY_UNSPECIFIED",
    "longDescription": "string",
    "packageIssue": [
      {
        "affectedLocation": {
          "cpeUri": "string",
          "package": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        },
        "effectiveSeverity": "SEVERITY_UNSPECIFIED",
        "fixedLocation": {
          "cpeUri": "string",
          "package": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        },
        "packageType": "string",
        "severityName": "string"
      }
    ],
    "relatedUrls": [
      {
        "label": "string",
        "url": "string"
      }
    ],
    "severity": "SEVERITY_UNSPECIFIED",
    "shortDescription": "string",
    "type": "string",
    "vexAssessment": {
      "cve": "string",
      "impacts": [
        "string"
      ],
      "justification": {
        "details": "string",
        "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
      },
      "noteName": "string",
      "relatedUris": [
        {
          "label": "string",
          "url": "string"
        }
      ],
      "remediations": [
        {
          "details": "string",
          "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
          "remediationUri": {
            "label": "string",
            "url": "string"
          }
        }
      ],
      "state": "STATE_UNSPECIFIED"
    }
  }
}
```

<h3 id="containeranalysisprojectsoccurrencespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Occurrence](#schemaoccurrence)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## containeranalysis.projects.occurrences.getNotes

<a id="opIdcontaineranalysis.projects.occurrences.getNotes"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/notes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/notes`

Gets the note attached to the specified occurrence. Consumer projects can use this method to get a note that belongs to a provider project.

<h3 id="containeranalysisprojectsoccurrencesgetnotes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.|
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
  "attestationAuthority": {
    "hint": {
      "humanReadableName": "string"
    }
  },
  "baseImage": {
    "fingerprint": {
      "v1Name": "string",
      "v2Blob": [
        "string"
      ],
      "v2Name": "string"
    },
    "resourceUrl": "string"
  },
  "build": {
    "builderVersion": "string",
    "signature": {
      "keyId": "string",
      "keyType": "KEY_TYPE_UNSPECIFIED",
      "publicKey": "string",
      "signature": "string"
    }
  },
  "createTime": "string",
  "deployable": {
    "resourceUri": [
      "string"
    ]
  },
  "discovery": {
    "analysisKind": "NOTE_KIND_UNSPECIFIED"
  },
  "expirationTime": "string",
  "intoto": {
    "expectedCommand": [
      "string"
    ],
    "expectedMaterials": [
      {
        "artifactRule": [
          "string"
        ]
      }
    ],
    "expectedProducts": [
      {
        "artifactRule": [
          "string"
        ]
      }
    ],
    "signingKeys": [
      {
        "keyId": "string",
        "keyScheme": "string",
        "keyType": "string",
        "publicKeyValue": "string"
      }
    ],
    "stepName": "string",
    "threshold": "string"
  },
  "kind": "NOTE_KIND_UNSPECIFIED",
  "longDescription": "string",
  "name": "string",
  "package": {
    "architecture": "ARCHITECTURE_UNSPECIFIED",
    "cpeUri": "string",
    "description": "string",
    "digest": [
      {
        "algo": "string",
        "digestBytes": "string"
      }
    ],
    "distribution": [
      {
        "architecture": "ARCHITECTURE_UNSPECIFIED",
        "cpeUri": "string",
        "description": "string",
        "latestVersion": {
          "epoch": 0,
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        },
        "maintainer": "string",
        "url": "string"
      }
    ],
    "license": {
      "comments": "string",
      "expression": "string"
    },
    "maintainer": "string",
    "name": "string",
    "packageType": "string",
    "url": "string",
    "version": {
      "epoch": 0,
      "inclusive": true,
      "kind": "VERSION_KIND_UNSPECIFIED",
      "name": "string",
      "revision": "string"
    }
  },
  "relatedNoteNames": [
    "string"
  ],
  "relatedUrl": [
    {
      "label": "string",
      "url": "string"
    }
  ],
  "sbom": {
    "dataLicence": "string",
    "spdxVersion": "string"
  },
  "sbomReference": {
    "format": "string",
    "version": "string"
  },
  "shortDescription": "string",
  "spdxFile": {
    "checksum": [
      "string"
    ],
    "fileType": "FILE_TYPE_UNSPECIFIED",
    "title": "string"
  },
  "spdxPackage": {
    "analyzed": true,
    "attribution": "string",
    "checksum": "string",
    "copyright": "string",
    "detailedDescription": "string",
    "downloadLocation": "string",
    "externalRefs": [
      {
        "category": "CATEGORY_UNSPECIFIED",
        "comment": "string",
        "locator": "string",
        "type": "string"
      }
    ],
    "filesLicenseInfo": [
      "string"
    ],
    "homePage": "string",
    "licenseDeclared": {
      "comments": "string",
      "expression": "string"
    },
    "originator": "string",
    "packageType": "string",
    "summaryDescription": "string",
    "supplier": "string",
    "title": "string",
    "verificationCode": "string",
    "version": "string"
  },
  "spdxRelationship": {
    "type": "RELATIONSHIP_TYPE_UNSPECIFIED"
  },
  "updateTime": "string",
  "vulnerability": {
    "cvssScore": 0,
    "cvssV2": {
      "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
      "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
      "authentication": "AUTHENTICATION_UNSPECIFIED",
      "availabilityImpact": "IMPACT_UNSPECIFIED",
      "baseScore": 0,
      "confidentialityImpact": "IMPACT_UNSPECIFIED",
      "exploitabilityScore": 0,
      "impactScore": 0,
      "integrityImpact": "IMPACT_UNSPECIFIED",
      "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
      "scope": "SCOPE_UNSPECIFIED",
      "userInteraction": "USER_INTERACTION_UNSPECIFIED"
    },
    "cvssV3": {
      "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
      "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
      "availabilityImpact": "IMPACT_UNSPECIFIED",
      "baseScore": 0,
      "confidentialityImpact": "IMPACT_UNSPECIFIED",
      "exploitabilityScore": 0,
      "impactScore": 0,
      "integrityImpact": "IMPACT_UNSPECIFIED",
      "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
      "scope": "SCOPE_UNSPECIFIED",
      "userInteraction": "USER_INTERACTION_UNSPECIFIED"
    },
    "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
    "cwe": [
      "string"
    ],
    "details": [
      {
        "cpeUri": "string",
        "description": "string",
        "fixedLocation": {
          "cpeUri": "string",
          "package": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        },
        "isObsolete": true,
        "maxAffectedVersion": {
          "epoch": 0,
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        },
        "minAffectedVersion": {
          "epoch": 0,
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        },
        "package": "string",
        "packageType": "string",
        "severityName": "string",
        "source": "string",
        "sourceUpdateTime": "string",
        "vendor": "string"
      }
    ],
    "severity": "SEVERITY_UNSPECIFIED",
    "sourceUpdateTime": "string",
    "windowsDetails": [
      {
        "cpeUri": "string",
        "description": "string",
        "fixingKbs": [
          {
            "name": "string",
            "url": "string"
          }
        ],
        "name": "string"
      }
    ]
  },
  "vulnerabilityAssessment": {
    "assessment": {
      "cve": "string",
      "impacts": [
        "string"
      ],
      "justification": {
        "details": "string",
        "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
      },
      "longDescription": "string",
      "relatedUris": [
        {
          "label": "string",
          "url": "string"
        }
      ],
      "remediations": [
        {
          "details": "string",
          "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
          "remediationUri": {
            "label": "string",
            "url": "string"
          }
        }
      ],
      "shortDescription": "string",
      "state": "STATE_UNSPECIFIED"
    },
    "languageCode": "string",
    "longDescription": "string",
    "product": {
      "genericUri": "string",
      "id": "string",
      "name": "string"
    },
    "publisher": {
      "issuingAuthority": "string",
      "name": "string",
      "publisherNamespace": "string"
    },
    "shortDescription": "string",
    "title": "string"
  }
}
```

<h3 id="containeranalysisprojectsoccurrencesgetnotes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Note](#schemanote)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## containeranalysis.projects.notes.occurrences.list

<a id="opIdcontaineranalysis.projects.notes.occurrences.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/occurrences \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/occurrences`

Lists occurrences referencing the specified note. Provider projects can use this method to get all occurrences across consumer projects referencing the specified note.

<h3 id="containeranalysisprojectsnotesoccurrenceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the note to list occurrences for in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.|
|filter|query|string|false|The filter expression.|
|pageSize|query|integer|false|Number of occurrences to return in the list.|
|pageToken|query|string|false|Token to provide to skip to a particular spot in the list.|
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
  "occurrences": [
    {
      "attestation": {
        "attestation": {
          "genericSignedAttestation": {
            "contentType": "CONTENT_TYPE_UNSPECIFIED",
            "serializedPayload": "string",
            "signatures": [
              {
                "publicKeyId": "string",
                "signature": "string"
              }
            ]
          },
          "pgpSignedAttestation": {
            "contentType": "CONTENT_TYPE_UNSPECIFIED",
            "pgpKeyId": "string",
            "signature": "string"
          }
        }
      },
      "build": {
        "provenance": {
          "buildOptions": {
            "property1": "string",
            "property2": "string"
          },
          "builderVersion": "string",
          "builtArtifacts": [
            {
              "checksum": "string",
              "id": "string",
              "names": [
                "string"
              ]
            }
          ],
          "commands": [
            {
              "args": [
                "string"
              ],
              "dir": "string",
              "env": [
                "string"
              ],
              "id": "string",
              "name": "string",
              "waitFor": [
                "string"
              ]
            }
          ],
          "createTime": "string",
          "creator": "string",
          "endTime": "string",
          "id": "string",
          "logsUri": "string",
          "projectId": "string",
          "sourceProvenance": {
            "additionalContexts": [
              {
                "cloudRepo": {
                  "aliasContext": {
                    "kind": "KIND_UNSPECIFIED",
                    "name": "string"
                  },
                  "repoId": {
                    "projectRepoId": {
                      "projectId": "string",
                      "repoName": "string"
                    },
                    "uid": "string"
                  },
                  "revisionId": "string"
                },
                "gerrit": {
                  "aliasContext": {
                    "kind": "KIND_UNSPECIFIED",
                    "name": "string"
                  },
                  "gerritProject": "string",
                  "hostUri": "string",
                  "revisionId": "string"
                },
                "git": {
                  "revisionId": "string",
                  "url": "string"
                },
                "labels": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            ],
            "artifactStorageSourceUri": "string",
            "context": {
              "cloudRepo": {
                "aliasContext": {
                  "kind": "KIND_UNSPECIFIED",
                  "name": "string"
                },
                "repoId": {
                  "projectRepoId": {
                    "projectId": "string",
                    "repoName": "string"
                  },
                  "uid": "string"
                },
                "revisionId": "string"
              },
              "gerrit": {
                "aliasContext": {
                  "kind": "KIND_UNSPECIFIED",
                  "name": "string"
                },
                "gerritProject": "string",
                "hostUri": "string",
                "revisionId": "string"
              },
              "git": {
                "revisionId": "string",
                "url": "string"
              },
              "labels": {
                "property1": "string",
                "property2": "string"
              }
            },
            "fileHashes": {
              "property1": {
                "fileHash": [
                  {
                    "type": "HASH_TYPE_UNSPECIFIED",
                    "value": "string"
                  }
                ]
              },
              "property2": {
                "fileHash": [
                  {
                    "type": "HASH_TYPE_UNSPECIFIED",
                    "value": "string"
                  }
                ]
              }
            }
          },
          "startTime": "string",
          "triggerId": "string"
        },
        "provenanceBytes": "string"
      },
      "createTime": "string",
      "deployment": {
        "deployment": {
          "address": "string",
          "config": "string",
          "deployTime": "string",
          "platform": "PLATFORM_UNSPECIFIED",
          "resourceUri": [
            "string"
          ],
          "undeployTime": "string",
          "userEmail": "string"
        }
      },
      "derivedImage": {
        "derivedImage": {
          "baseResourceUrl": "string",
          "distance": 0,
          "fingerprint": {
            "v1Name": "string",
            "v2Blob": [
              "string"
            ],
            "v2Name": "string"
          },
          "layerInfo": [
            {
              "arguments": "string",
              "directive": "DIRECTIVE_UNSPECIFIED"
            }
          ]
        }
      },
      "discovered": {
        "discovered": {
          "analysisCompleted": {
            "analysisType": [
              "string"
            ]
          },
          "analysisError": [
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
          ],
          "analysisStatus": "ANALYSIS_STATUS_UNSPECIFIED",
          "analysisStatusError": {
            "code": 0,
            "details": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "message": "string"
          },
          "continuousAnalysis": "CONTINUOUS_ANALYSIS_UNSPECIFIED",
          "lastAnalysisTime": "string"
        }
      },
      "envelope": {
        "payload": "string",
        "payloadType": "string",
        "signatures": [
          {
            "keyid": "string",
            "sig": "string"
          }
        ]
      },
      "installation": {
        "installation": {
          "architecture": "ARCHITECTURE_UNSPECIFIED",
          "cpeUri": "string",
          "license": {
            "comments": "string",
            "expression": "string"
          },
          "location": [
            {
              "cpeUri": "string",
              "path": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            }
          ],
          "name": "string",
          "packageType": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        }
      },
      "intoto": {
        "signatures": [
          {
            "keyid": "string",
            "sig": "string"
          }
        ],
        "signed": {
          "byproducts": {
            "customValues": {
              "property1": "string",
              "property2": "string"
            }
          },
          "command": [
            "string"
          ],
          "environment": {
            "customValues": {
              "property1": "string",
              "property2": "string"
            }
          },
          "materials": [
            {
              "hashes": {
                "sha256": "string"
              },
              "resourceUri": "string"
            }
          ],
          "products": [
            {
              "hashes": {
                "sha256": "string"
              },
              "resourceUri": "string"
            }
          ]
        }
      },
      "kind": "NOTE_KIND_UNSPECIFIED",
      "name": "string",
      "noteName": "string",
      "remediation": "string",
      "resource": {
        "contentHash": {
          "type": "HASH_TYPE_UNSPECIFIED",
          "value": "string"
        },
        "name": "string",
        "uri": "string"
      },
      "sbom": {
        "createTime": "string",
        "creatorComment": "string",
        "creators": [
          "string"
        ],
        "documentComment": "string",
        "externalDocumentRefs": [
          "string"
        ],
        "id": "string",
        "licenseListVersion": "string",
        "namespace": "string",
        "title": "string"
      },
      "sbomReference": {
        "payload": {
          "_type": "string",
          "predicate": {
            "digest": {
              "property1": "string",
              "property2": "string"
            },
            "location": "string",
            "mimeType": "string",
            "referrerId": "string"
          },
          "predicateType": "string",
          "subject": [
            {
              "digest": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string"
            }
          ]
        },
        "payloadType": "string",
        "signatures": [
          {
            "keyid": "string",
            "sig": "string"
          }
        ]
      },
      "spdxFile": {
        "attributions": [
          "string"
        ],
        "comment": "string",
        "contributors": [
          "string"
        ],
        "copyright": "string",
        "filesLicenseInfo": [
          "string"
        ],
        "id": "string",
        "licenseConcluded": {
          "comments": "string",
          "expression": "string"
        },
        "notice": "string"
      },
      "spdxPackage": {
        "comment": "string",
        "filename": "string",
        "homePage": "string",
        "id": "string",
        "licenseConcluded": {
          "comments": "string",
          "expression": "string"
        },
        "packageType": "string",
        "sourceInfo": "string",
        "summaryDescription": "string",
        "title": "string",
        "version": "string"
      },
      "spdxRelationship": {
        "comment": "string",
        "source": "string",
        "target": "string",
        "type": "RELATIONSHIP_TYPE_UNSPECIFIED"
      },
      "updateTime": "string",
      "vulnerability": {
        "cvssScore": 0,
        "cvssV2": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "authentication": "AUTHENTICATION_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssV3": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "authentication": "AUTHENTICATION_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
        "effectiveSeverity": "SEVERITY_UNSPECIFIED",
        "longDescription": "string",
        "packageIssue": [
          {
            "affectedLocation": {
              "cpeUri": "string",
              "package": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            },
            "effectiveSeverity": "SEVERITY_UNSPECIFIED",
            "fixedLocation": {
              "cpeUri": "string",
              "package": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            },
            "packageType": "string",
            "severityName": "string"
          }
        ],
        "relatedUrls": [
          {
            "label": "string",
            "url": "string"
          }
        ],
        "severity": "SEVERITY_UNSPECIFIED",
        "shortDescription": "string",
        "type": "string",
        "vexAssessment": {
          "cve": "string",
          "impacts": [
            "string"
          ],
          "justification": {
            "details": "string",
            "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
          },
          "noteName": "string",
          "relatedUris": [
            {
              "label": "string",
              "url": "string"
            }
          ],
          "remediations": [
            {
              "details": "string",
              "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
              "remediationUri": {
                "label": "string",
                "url": "string"
              }
            }
          ],
          "state": "STATE_UNSPECIFIED"
        }
      }
    }
  ]
}
```

<h3 id="containeranalysisprojectsnotesoccurrenceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListNoteOccurrencesResponse](#schemalistnoteoccurrencesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## containeranalysis.projects.notes.list

<a id="opIdcontaineranalysis.projects.notes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/notes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/notes`

Lists notes for the specified project.

<h3 id="containeranalysisprojectsnoteslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project to list notes for in the form of `projects/[PROJECT_ID]`.|
|filter|query|string|false|The filter expression.|
|pageSize|query|integer|false|Number of notes to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.|
|pageToken|query|string|false|Token to provide to skip to a particular spot in the list.|
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
  "notes": [
    {
      "attestationAuthority": {
        "hint": {
          "humanReadableName": "string"
        }
      },
      "baseImage": {
        "fingerprint": {
          "v1Name": "string",
          "v2Blob": [
            "string"
          ],
          "v2Name": "string"
        },
        "resourceUrl": "string"
      },
      "build": {
        "builderVersion": "string",
        "signature": {
          "keyId": "string",
          "keyType": "KEY_TYPE_UNSPECIFIED",
          "publicKey": "string",
          "signature": "string"
        }
      },
      "createTime": "string",
      "deployable": {
        "resourceUri": [
          "string"
        ]
      },
      "discovery": {
        "analysisKind": "NOTE_KIND_UNSPECIFIED"
      },
      "expirationTime": "string",
      "intoto": {
        "expectedCommand": [
          "string"
        ],
        "expectedMaterials": [
          {
            "artifactRule": [
              "string"
            ]
          }
        ],
        "expectedProducts": [
          {
            "artifactRule": [
              "string"
            ]
          }
        ],
        "signingKeys": [
          {
            "keyId": "string",
            "keyScheme": "string",
            "keyType": "string",
            "publicKeyValue": "string"
          }
        ],
        "stepName": "string",
        "threshold": "string"
      },
      "kind": "NOTE_KIND_UNSPECIFIED",
      "longDescription": "string",
      "name": "string",
      "package": {
        "architecture": "ARCHITECTURE_UNSPECIFIED",
        "cpeUri": "string",
        "description": "string",
        "digest": [
          {
            "algo": "string",
            "digestBytes": "string"
          }
        ],
        "distribution": [
          {
            "architecture": "ARCHITECTURE_UNSPECIFIED",
            "cpeUri": "string",
            "description": "string",
            "latestVersion": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            },
            "maintainer": "string",
            "url": "string"
          }
        ],
        "license": {
          "comments": "string",
          "expression": "string"
        },
        "maintainer": "string",
        "name": "string",
        "packageType": "string",
        "url": "string",
        "version": {
          "epoch": 0,
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        }
      },
      "relatedNoteNames": [
        "string"
      ],
      "relatedUrl": [
        {
          "label": "string",
          "url": "string"
        }
      ],
      "sbom": {
        "dataLicence": "string",
        "spdxVersion": "string"
      },
      "sbomReference": {
        "format": "string",
        "version": "string"
      },
      "shortDescription": "string",
      "spdxFile": {
        "checksum": [
          "string"
        ],
        "fileType": "FILE_TYPE_UNSPECIFIED",
        "title": "string"
      },
      "spdxPackage": {
        "analyzed": true,
        "attribution": "string",
        "checksum": "string",
        "copyright": "string",
        "detailedDescription": "string",
        "downloadLocation": "string",
        "externalRefs": [
          {
            "category": "CATEGORY_UNSPECIFIED",
            "comment": "string",
            "locator": "string",
            "type": "string"
          }
        ],
        "filesLicenseInfo": [
          "string"
        ],
        "homePage": "string",
        "licenseDeclared": {
          "comments": "string",
          "expression": "string"
        },
        "originator": "string",
        "packageType": "string",
        "summaryDescription": "string",
        "supplier": "string",
        "title": "string",
        "verificationCode": "string",
        "version": "string"
      },
      "spdxRelationship": {
        "type": "RELATIONSHIP_TYPE_UNSPECIFIED"
      },
      "updateTime": "string",
      "vulnerability": {
        "cvssScore": 0,
        "cvssV2": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "authentication": "AUTHENTICATION_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssV3": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
        "cwe": [
          "string"
        ],
        "details": [
          {
            "cpeUri": "string",
            "description": "string",
            "fixedLocation": {
              "cpeUri": "string",
              "package": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            },
            "isObsolete": true,
            "maxAffectedVersion": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            },
            "minAffectedVersion": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            },
            "package": "string",
            "packageType": "string",
            "severityName": "string",
            "source": "string",
            "sourceUpdateTime": "string",
            "vendor": "string"
          }
        ],
        "severity": "SEVERITY_UNSPECIFIED",
        "sourceUpdateTime": "string",
        "windowsDetails": [
          {
            "cpeUri": "string",
            "description": "string",
            "fixingKbs": [
              {
                "name": "string",
                "url": "string"
              }
            ],
            "name": "string"
          }
        ]
      },
      "vulnerabilityAssessment": {
        "assessment": {
          "cve": "string",
          "impacts": [
            "string"
          ],
          "justification": {
            "details": "string",
            "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
          },
          "longDescription": "string",
          "relatedUris": [
            {
              "label": "string",
              "url": "string"
            }
          ],
          "remediations": [
            {
              "details": "string",
              "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
              "remediationUri": {
                "label": "string",
                "url": "string"
              }
            }
          ],
          "shortDescription": "string",
          "state": "STATE_UNSPECIFIED"
        },
        "languageCode": "string",
        "longDescription": "string",
        "product": {
          "genericUri": "string",
          "id": "string",
          "name": "string"
        },
        "publisher": {
          "issuingAuthority": "string",
          "name": "string",
          "publisherNamespace": "string"
        },
        "shortDescription": "string",
        "title": "string"
      }
    }
  ]
}
```

<h3 id="containeranalysisprojectsnoteslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListNotesResponse](#schemalistnotesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## containeranalysis.projects.notes.create

<a id="opIdcontaineranalysis.projects.notes.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/notes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attestationAuthority": {
      "hint": {
        "humanReadableName": "string"
      }
    },
    "baseImage": {
      "fingerprint": {
        "v1Name": "string",
        "v2Blob": [
          "string"
        ],
        "v2Name": "string"
      },
      "resourceUrl": "string"
    },
    "build": {
      "builderVersion": "string",
      "signature": {
        "keyId": "string",
        "keyType": "KEY_TYPE_UNSPECIFIED",
        "publicKey": "string",
        "signature": "string"
      }
    },
    "createTime": "string",
    "deployable": {
      "resourceUri": [
        "string"
      ]
    },
    "discovery": {
      "analysisKind": "NOTE_KIND_UNSPECIFIED"
    },
    "expirationTime": "string",
    "intoto": {
      "expectedCommand": [
        "string"
      ],
      "expectedMaterials": [
        {
          "artifactRule": [
            "string"
          ]
        }
      ],
      "expectedProducts": [
        {
          "artifactRule": [
            "string"
          ]
        }
      ],
      "signingKeys": [
        {
          "keyId": "string",
          "keyScheme": "string",
          "keyType": "string",
          "publicKeyValue": "string"
        }
      ],
      "stepName": "string",
      "threshold": "string"
    },
    "kind": "NOTE_KIND_UNSPECIFIED",
    "longDescription": "string",
    "name": "string",
    "package": {
      "architecture": "ARCHITECTURE_UNSPECIFIED",
      "cpeUri": "string",
      "description": "string",
      "digest": [
        {
          "algo": "string",
          "digestBytes": "string"
        }
      ],
      "distribution": [
        {
          "architecture": "ARCHITECTURE_UNSPECIFIED",
          "cpeUri": "string",
          "description": "string",
          "latestVersion": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          },
          "maintainer": "string",
          "url": "string"
        }
      ],
      "license": {
        "comments": "string",
        "expression": "string"
      },
      "maintainer": "string",
      "name": "string",
      "packageType": "string",
      "url": "string",
      "version": {
        "epoch": 0,
        "inclusive": true,
        "kind": "VERSION_KIND_UNSPECIFIED",
        "name": "string",
        "revision": "string"
      }
    },
    "relatedNoteNames": [
      "string"
    ],
    "relatedUrl": [
      {
        "label": "string",
        "url": "string"
      }
    ],
    "sbom": {
      "dataLicence": "string",
      "spdxVersion": "string"
    },
    "sbomReference": {
      "format": "string",
      "version": "string"
    },
    "shortDescription": "string",
    "spdxFile": {
      "checksum": [
        "string"
      ],
      "fileType": "FILE_TYPE_UNSPECIFIED",
      "title": "string"
    },
    "spdxPackage": {
      "analyzed": true,
      "attribution": "string",
      "checksum": "string",
      "copyright": "string",
      "detailedDescription": "string",
      "downloadLocation": "string",
      "externalRefs": [
        {
          "category": "CATEGORY_UNSPECIFIED",
          "comment": "string",
          "locator": "string",
          "type": "string"
        }
      ],
      "filesLicenseInfo": [
        "string"
      ],
      "homePage": "string",
      "licenseDeclared": {
        "comments": "string",
        "expression": "string"
      },
      "originator": "string",
      "packageType": "string",
      "summaryDescription": "string",
      "supplier": "string",
      "title": "string",
      "verificationCode": "string",
      "version": "string"
    },
    "spdxRelationship": {
      "type": "RELATIONSHIP_TYPE_UNSPECIFIED"
    },
    "updateTime": "string",
    "vulnerability": {
      "cvssScore": 0,
      "cvssV2": {
        "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
        "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
        "authentication": "AUTHENTICATION_UNSPECIFIED",
        "availabilityImpact": "IMPACT_UNSPECIFIED",
        "baseScore": 0,
        "confidentialityImpact": "IMPACT_UNSPECIFIED",
        "exploitabilityScore": 0,
        "impactScore": 0,
        "integrityImpact": "IMPACT_UNSPECIFIED",
        "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
        "scope": "SCOPE_UNSPECIFIED",
        "userInteraction": "USER_INTERACTION_UNSPECIFIED"
      },
      "cvssV3": {
        "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
        "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
        "availabilityImpact": "IMPACT_UNSPECIFIED",
        "baseScore": 0,
        "confidentialityImpact": "IMPACT_UNSPECIFIED",
        "exploitabilityScore": 0,
        "impactScore": 0,
        "integrityImpact": "IMPACT_UNSPECIFIED",
        "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
        "scope": "SCOPE_UNSPECIFIED",
        "userInteraction": "USER_INTERACTION_UNSPECIFIED"
      },
      "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
      "cwe": [
        "string"
      ],
      "details": [
        {
          "cpeUri": "string",
          "description": "string",
          "fixedLocation": {
            "cpeUri": "string",
            "package": "string",
            "version": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            }
          },
          "isObsolete": true,
          "maxAffectedVersion": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          },
          "minAffectedVersion": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          },
          "package": "string",
          "packageType": "string",
          "severityName": "string",
          "source": "string",
          "sourceUpdateTime": "string",
          "vendor": "string"
        }
      ],
      "severity": "SEVERITY_UNSPECIFIED",
      "sourceUpdateTime": "string",
      "windowsDetails": [
        {
          "cpeUri": "string",
          "description": "string",
          "fixingKbs": [
            {
              "name": "string",
              "url": "string"
            }
          ],
          "name": "string"
        }
      ]
    },
    "vulnerabilityAssessment": {
      "assessment": {
        "cve": "string",
        "impacts": [
          "string"
        ],
        "justification": {
          "details": "string",
          "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
        },
        "longDescription": "string",
        "relatedUris": [
          {
            "label": "string",
            "url": "string"
          }
        ],
        "remediations": [
          {
            "details": "string",
            "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
            "remediationUri": {
              "label": "string",
              "url": "string"
            }
          }
        ],
        "shortDescription": "string",
        "state": "STATE_UNSPECIFIED"
      },
      "languageCode": "string",
      "longDescription": "string",
      "product": {
        "genericUri": "string",
        "id": "string",
        "name": "string"
      },
      "publisher": {
        "issuingAuthority": "string",
        "name": "string",
        "publisherNamespace": "string"
      },
      "shortDescription": "string",
      "title": "string"
    }
  }'
```

`POST /v1beta1/{parent}/notes`

Creates a new note.

> Body parameter

```json
{
  "attestationAuthority": {
    "hint": {
      "humanReadableName": "string"
    }
  },
  "baseImage": {
    "fingerprint": {
      "v1Name": "string",
      "v2Blob": [
        "string"
      ],
      "v2Name": "string"
    },
    "resourceUrl": "string"
  },
  "build": {
    "builderVersion": "string",
    "signature": {
      "keyId": "string",
      "keyType": "KEY_TYPE_UNSPECIFIED",
      "publicKey": "string",
      "signature": "string"
    }
  },
  "createTime": "string",
  "deployable": {
    "resourceUri": [
      "string"
    ]
  },
  "discovery": {
    "analysisKind": "NOTE_KIND_UNSPECIFIED"
  },
  "expirationTime": "string",
  "intoto": {
    "expectedCommand": [
      "string"
    ],
    "expectedMaterials": [
      {
        "artifactRule": [
          "string"
        ]
      }
    ],
    "expectedProducts": [
      {
        "artifactRule": [
          "string"
        ]
      }
    ],
    "signingKeys": [
      {
        "keyId": "string",
        "keyScheme": "string",
        "keyType": "string",
        "publicKeyValue": "string"
      }
    ],
    "stepName": "string",
    "threshold": "string"
  },
  "kind": "NOTE_KIND_UNSPECIFIED",
  "longDescription": "string",
  "name": "string",
  "package": {
    "architecture": "ARCHITECTURE_UNSPECIFIED",
    "cpeUri": "string",
    "description": "string",
    "digest": [
      {
        "algo": "string",
        "digestBytes": "string"
      }
    ],
    "distribution": [
      {
        "architecture": "ARCHITECTURE_UNSPECIFIED",
        "cpeUri": "string",
        "description": "string",
        "latestVersion": {
          "epoch": 0,
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        },
        "maintainer": "string",
        "url": "string"
      }
    ],
    "license": {
      "comments": "string",
      "expression": "string"
    },
    "maintainer": "string",
    "name": "string",
    "packageType": "string",
    "url": "string",
    "version": {
      "epoch": 0,
      "inclusive": true,
      "kind": "VERSION_KIND_UNSPECIFIED",
      "name": "string",
      "revision": "string"
    }
  },
  "relatedNoteNames": [
    "string"
  ],
  "relatedUrl": [
    {
      "label": "string",
      "url": "string"
    }
  ],
  "sbom": {
    "dataLicence": "string",
    "spdxVersion": "string"
  },
  "sbomReference": {
    "format": "string",
    "version": "string"
  },
  "shortDescription": "string",
  "spdxFile": {
    "checksum": [
      "string"
    ],
    "fileType": "FILE_TYPE_UNSPECIFIED",
    "title": "string"
  },
  "spdxPackage": {
    "analyzed": true,
    "attribution": "string",
    "checksum": "string",
    "copyright": "string",
    "detailedDescription": "string",
    "downloadLocation": "string",
    "externalRefs": [
      {
        "category": "CATEGORY_UNSPECIFIED",
        "comment": "string",
        "locator": "string",
        "type": "string"
      }
    ],
    "filesLicenseInfo": [
      "string"
    ],
    "homePage": "string",
    "licenseDeclared": {
      "comments": "string",
      "expression": "string"
    },
    "originator": "string",
    "packageType": "string",
    "summaryDescription": "string",
    "supplier": "string",
    "title": "string",
    "verificationCode": "string",
    "version": "string"
  },
  "spdxRelationship": {
    "type": "RELATIONSHIP_TYPE_UNSPECIFIED"
  },
  "updateTime": "string",
  "vulnerability": {
    "cvssScore": 0,
    "cvssV2": {
      "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
      "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
      "authentication": "AUTHENTICATION_UNSPECIFIED",
      "availabilityImpact": "IMPACT_UNSPECIFIED",
      "baseScore": 0,
      "confidentialityImpact": "IMPACT_UNSPECIFIED",
      "exploitabilityScore": 0,
      "impactScore": 0,
      "integrityImpact": "IMPACT_UNSPECIFIED",
      "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
      "scope": "SCOPE_UNSPECIFIED",
      "userInteraction": "USER_INTERACTION_UNSPECIFIED"
    },
    "cvssV3": {
      "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
      "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
      "availabilityImpact": "IMPACT_UNSPECIFIED",
      "baseScore": 0,
      "confidentialityImpact": "IMPACT_UNSPECIFIED",
      "exploitabilityScore": 0,
      "impactScore": 0,
      "integrityImpact": "IMPACT_UNSPECIFIED",
      "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
      "scope": "SCOPE_UNSPECIFIED",
      "userInteraction": "USER_INTERACTION_UNSPECIFIED"
    },
    "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
    "cwe": [
      "string"
    ],
    "details": [
      {
        "cpeUri": "string",
        "description": "string",
        "fixedLocation": {
          "cpeUri": "string",
          "package": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        },
        "isObsolete": true,
        "maxAffectedVersion": {
          "epoch": 0,
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        },
        "minAffectedVersion": {
          "epoch": 0,
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        },
        "package": "string",
        "packageType": "string",
        "severityName": "string",
        "source": "string",
        "sourceUpdateTime": "string",
        "vendor": "string"
      }
    ],
    "severity": "SEVERITY_UNSPECIFIED",
    "sourceUpdateTime": "string",
    "windowsDetails": [
      {
        "cpeUri": "string",
        "description": "string",
        "fixingKbs": [
          {
            "name": "string",
            "url": "string"
          }
        ],
        "name": "string"
      }
    ]
  },
  "vulnerabilityAssessment": {
    "assessment": {
      "cve": "string",
      "impacts": [
        "string"
      ],
      "justification": {
        "details": "string",
        "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
      },
      "longDescription": "string",
      "relatedUris": [
        {
          "label": "string",
          "url": "string"
        }
      ],
      "remediations": [
        {
          "details": "string",
          "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
          "remediationUri": {
            "label": "string",
            "url": "string"
          }
        }
      ],
      "shortDescription": "string",
      "state": "STATE_UNSPECIFIED"
    },
    "languageCode": "string",
    "longDescription": "string",
    "product": {
      "genericUri": "string",
      "id": "string",
      "name": "string"
    },
    "publisher": {
      "issuingAuthority": "string",
      "name": "string",
      "publisherNamespace": "string"
    },
    "shortDescription": "string",
    "title": "string"
  }
}
```

<h3 id="containeranalysisprojectsnotescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the note is to be created.|
|noteId|query|string|false|Required. The ID to use for this note.|
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
|body|body|[Note](#schemanote)|false|none|
|» attestationAuthority|body|[Authority](#schemaauthority)|false|A note describing an attestation role.|
|» baseImage|body|[Basis](#schemabasis)|false|A note describing a base image.|
|» build|body|[Build](#schemabuild)|false|A note describing build provenance for a verifiable build.|
|» createTime|body|string(google-datetime)|false|Output only. The time this note was created. This field can be used as a filter in list requests.|
|» deployable|body|[Deployable](#schemadeployable)|false|A note describing something that can be deployed.|
|» discovery|body|[Discovery](#schemadiscovery)|false|A note describing the initial analysis of a resource.|
|» expirationTime|body|string(google-datetime)|false|Time of expiration for this note. Empty if note does not expire.|
|» intoto|body|[InToto](#schemaintoto)|false|A note describing an in-toto link.|
|» kind|body|string|false|Output only. The type of analysis. This field can be used as a filter in list requests.|
|» longDescription|body|string|false|A detailed description of this note.|
|» name|body|string|false|Output only. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.|
|» package|body|[Package](#schemapackage)|false|A note describing a package hosted by various package managers.|
|» relatedNoteNames|body|[string]|false|Other notes related to this note.|
|» relatedUrl|body|[[RelatedUrl](#schemarelatedurl)]|false|URLs associated with this note.|
|» sbom|body|[DocumentNote](#schemadocumentnote)|false|A note describing a software bill of materials.|
|» sbomReference|body|[SBOMReferenceNote](#schemasbomreferencenote)|false|A note describing an SBOM reference.|
|» shortDescription|body|string|false|A one sentence description of this note.|
|» spdxFile|body|[FileNote](#schemafilenote)|false|A note describing an SPDX File.|
|» spdxPackage|body|[PackageInfoNote](#schemapackageinfonote)|false|A note describing an SPDX Package.|
|» spdxRelationship|body|[RelationshipNote](#schemarelationshipnote)|false|A note describing an SPDX File.|
|» updateTime|body|string(google-datetime)|false|Output only. The time this note was last updated. This field can be used as a filter in list requests.|
|» vulnerability|body|[Vulnerability](#schemavulnerability)|false|A note describing a package vulnerability.|
|» vulnerabilityAssessment|body|[VulnerabilityAssessmentNote](#schemavulnerabilityassessmentnote)|false|A note describing a vulnerability assessment.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» kind|NOTE_KIND_UNSPECIFIED|
|» kind|VULNERABILITY|
|» kind|BUILD|
|» kind|IMAGE|
|» kind|PACKAGE|
|» kind|DEPLOYMENT|
|» kind|DISCOVERY|
|» kind|ATTESTATION|
|» kind|INTOTO|
|» kind|SBOM|
|» kind|SPDX_PACKAGE|
|» kind|SPDX_FILE|
|» kind|SPDX_RELATIONSHIP|
|» kind|VULNERABILITY_ASSESSMENT|
|» kind|SBOM_REFERENCE|

> Example responses

> 200 Response

```json
{
  "attestationAuthority": {
    "hint": {
      "humanReadableName": "string"
    }
  },
  "baseImage": {
    "fingerprint": {
      "v1Name": "string",
      "v2Blob": [
        "string"
      ],
      "v2Name": "string"
    },
    "resourceUrl": "string"
  },
  "build": {
    "builderVersion": "string",
    "signature": {
      "keyId": "string",
      "keyType": "KEY_TYPE_UNSPECIFIED",
      "publicKey": "string",
      "signature": "string"
    }
  },
  "createTime": "string",
  "deployable": {
    "resourceUri": [
      "string"
    ]
  },
  "discovery": {
    "analysisKind": "NOTE_KIND_UNSPECIFIED"
  },
  "expirationTime": "string",
  "intoto": {
    "expectedCommand": [
      "string"
    ],
    "expectedMaterials": [
      {
        "artifactRule": [
          "string"
        ]
      }
    ],
    "expectedProducts": [
      {
        "artifactRule": [
          "string"
        ]
      }
    ],
    "signingKeys": [
      {
        "keyId": "string",
        "keyScheme": "string",
        "keyType": "string",
        "publicKeyValue": "string"
      }
    ],
    "stepName": "string",
    "threshold": "string"
  },
  "kind": "NOTE_KIND_UNSPECIFIED",
  "longDescription": "string",
  "name": "string",
  "package": {
    "architecture": "ARCHITECTURE_UNSPECIFIED",
    "cpeUri": "string",
    "description": "string",
    "digest": [
      {
        "algo": "string",
        "digestBytes": "string"
      }
    ],
    "distribution": [
      {
        "architecture": "ARCHITECTURE_UNSPECIFIED",
        "cpeUri": "string",
        "description": "string",
        "latestVersion": {
          "epoch": 0,
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        },
        "maintainer": "string",
        "url": "string"
      }
    ],
    "license": {
      "comments": "string",
      "expression": "string"
    },
    "maintainer": "string",
    "name": "string",
    "packageType": "string",
    "url": "string",
    "version": {
      "epoch": 0,
      "inclusive": true,
      "kind": "VERSION_KIND_UNSPECIFIED",
      "name": "string",
      "revision": "string"
    }
  },
  "relatedNoteNames": [
    "string"
  ],
  "relatedUrl": [
    {
      "label": "string",
      "url": "string"
    }
  ],
  "sbom": {
    "dataLicence": "string",
    "spdxVersion": "string"
  },
  "sbomReference": {
    "format": "string",
    "version": "string"
  },
  "shortDescription": "string",
  "spdxFile": {
    "checksum": [
      "string"
    ],
    "fileType": "FILE_TYPE_UNSPECIFIED",
    "title": "string"
  },
  "spdxPackage": {
    "analyzed": true,
    "attribution": "string",
    "checksum": "string",
    "copyright": "string",
    "detailedDescription": "string",
    "downloadLocation": "string",
    "externalRefs": [
      {
        "category": "CATEGORY_UNSPECIFIED",
        "comment": "string",
        "locator": "string",
        "type": "string"
      }
    ],
    "filesLicenseInfo": [
      "string"
    ],
    "homePage": "string",
    "licenseDeclared": {
      "comments": "string",
      "expression": "string"
    },
    "originator": "string",
    "packageType": "string",
    "summaryDescription": "string",
    "supplier": "string",
    "title": "string",
    "verificationCode": "string",
    "version": "string"
  },
  "spdxRelationship": {
    "type": "RELATIONSHIP_TYPE_UNSPECIFIED"
  },
  "updateTime": "string",
  "vulnerability": {
    "cvssScore": 0,
    "cvssV2": {
      "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
      "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
      "authentication": "AUTHENTICATION_UNSPECIFIED",
      "availabilityImpact": "IMPACT_UNSPECIFIED",
      "baseScore": 0,
      "confidentialityImpact": "IMPACT_UNSPECIFIED",
      "exploitabilityScore": 0,
      "impactScore": 0,
      "integrityImpact": "IMPACT_UNSPECIFIED",
      "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
      "scope": "SCOPE_UNSPECIFIED",
      "userInteraction": "USER_INTERACTION_UNSPECIFIED"
    },
    "cvssV3": {
      "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
      "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
      "availabilityImpact": "IMPACT_UNSPECIFIED",
      "baseScore": 0,
      "confidentialityImpact": "IMPACT_UNSPECIFIED",
      "exploitabilityScore": 0,
      "impactScore": 0,
      "integrityImpact": "IMPACT_UNSPECIFIED",
      "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
      "scope": "SCOPE_UNSPECIFIED",
      "userInteraction": "USER_INTERACTION_UNSPECIFIED"
    },
    "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
    "cwe": [
      "string"
    ],
    "details": [
      {
        "cpeUri": "string",
        "description": "string",
        "fixedLocation": {
          "cpeUri": "string",
          "package": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        },
        "isObsolete": true,
        "maxAffectedVersion": {
          "epoch": 0,
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        },
        "minAffectedVersion": {
          "epoch": 0,
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        },
        "package": "string",
        "packageType": "string",
        "severityName": "string",
        "source": "string",
        "sourceUpdateTime": "string",
        "vendor": "string"
      }
    ],
    "severity": "SEVERITY_UNSPECIFIED",
    "sourceUpdateTime": "string",
    "windowsDetails": [
      {
        "cpeUri": "string",
        "description": "string",
        "fixingKbs": [
          {
            "name": "string",
            "url": "string"
          }
        ],
        "name": "string"
      }
    ]
  },
  "vulnerabilityAssessment": {
    "assessment": {
      "cve": "string",
      "impacts": [
        "string"
      ],
      "justification": {
        "details": "string",
        "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
      },
      "longDescription": "string",
      "relatedUris": [
        {
          "label": "string",
          "url": "string"
        }
      ],
      "remediations": [
        {
          "details": "string",
          "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
          "remediationUri": {
            "label": "string",
            "url": "string"
          }
        }
      ],
      "shortDescription": "string",
      "state": "STATE_UNSPECIFIED"
    },
    "languageCode": "string",
    "longDescription": "string",
    "product": {
      "genericUri": "string",
      "id": "string",
      "name": "string"
    },
    "publisher": {
      "issuingAuthority": "string",
      "name": "string",
      "publisherNamespace": "string"
    },
    "shortDescription": "string",
    "title": "string"
  }
}
```

<h3 id="containeranalysisprojectsnotescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Note](#schemanote)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## containeranalysis.projects.notes.batchCreate

<a id="opIdcontaineranalysis.projects.notes.batchCreate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/notes:batchCreate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "notes": {
      "property1": {
        "attestationAuthority": {
          "hint": {
            "humanReadableName": "string"
          }
        },
        "baseImage": {
          "fingerprint": {
            "v1Name": "string",
            "v2Blob": [
              "string"
            ],
            "v2Name": "string"
          },
          "resourceUrl": "string"
        },
        "build": {
          "builderVersion": "string",
          "signature": {
            "keyId": "string",
            "keyType": "KEY_TYPE_UNSPECIFIED",
            "publicKey": "string",
            "signature": "string"
          }
        },
        "createTime": "string",
        "deployable": {
          "resourceUri": [
            "string"
          ]
        },
        "discovery": {
          "analysisKind": "NOTE_KIND_UNSPECIFIED"
        },
        "expirationTime": "string",
        "intoto": {
          "expectedCommand": [
            "string"
          ],
          "expectedMaterials": [
            {
              "artifactRule": [
                "string"
              ]
            }
          ],
          "expectedProducts": [
            {
              "artifactRule": [
                "string"
              ]
            }
          ],
          "signingKeys": [
            {
              "keyId": "string",
              "keyScheme": "string",
              "keyType": "string",
              "publicKeyValue": "string"
            }
          ],
          "stepName": "string",
          "threshold": "string"
        },
        "kind": "NOTE_KIND_UNSPECIFIED",
        "longDescription": "string",
        "name": "string",
        "package": {
          "architecture": "ARCHITECTURE_UNSPECIFIED",
          "cpeUri": "string",
          "description": "string",
          "digest": [
            {
              "algo": "string",
              "digestBytes": "string"
            }
          ],
          "distribution": [
            {
              "architecture": "ARCHITECTURE_UNSPECIFIED",
              "cpeUri": "string",
              "description": "string",
              "latestVersion": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              },
              "maintainer": "string",
              "url": "string"
            }
          ],
          "license": {
            "comments": "string",
            "expression": "string"
          },
          "maintainer": "string",
          "name": "string",
          "packageType": "string",
          "url": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        },
        "relatedNoteNames": [
          "string"
        ],
        "relatedUrl": [
          {
            "label": "string",
            "url": "string"
          }
        ],
        "sbom": {
          "dataLicence": "string",
          "spdxVersion": "string"
        },
        "sbomReference": {
          "format": "string",
          "version": "string"
        },
        "shortDescription": "string",
        "spdxFile": {
          "checksum": [
            "string"
          ],
          "fileType": "FILE_TYPE_UNSPECIFIED",
          "title": "string"
        },
        "spdxPackage": {
          "analyzed": true,
          "attribution": "string",
          "checksum": "string",
          "copyright": "string",
          "detailedDescription": "string",
          "downloadLocation": "string",
          "externalRefs": [
            {
              "category": "CATEGORY_UNSPECIFIED",
              "comment": "string",
              "locator": "string",
              "type": "string"
            }
          ],
          "filesLicenseInfo": [
            "string"
          ],
          "homePage": "string",
          "licenseDeclared": {
            "comments": "string",
            "expression": "string"
          },
          "originator": "string",
          "packageType": "string",
          "summaryDescription": "string",
          "supplier": "string",
          "title": "string",
          "verificationCode": "string",
          "version": "string"
        },
        "spdxRelationship": {
          "type": "RELATIONSHIP_TYPE_UNSPECIFIED"
        },
        "updateTime": "string",
        "vulnerability": {
          "cvssScore": 0,
          "cvssV2": {
            "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
            "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
            "authentication": "AUTHENTICATION_UNSPECIFIED",
            "availabilityImpact": "IMPACT_UNSPECIFIED",
            "baseScore": 0,
            "confidentialityImpact": "IMPACT_UNSPECIFIED",
            "exploitabilityScore": 0,
            "impactScore": 0,
            "integrityImpact": "IMPACT_UNSPECIFIED",
            "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
            "scope": "SCOPE_UNSPECIFIED",
            "userInteraction": "USER_INTERACTION_UNSPECIFIED"
          },
          "cvssV3": {
            "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
            "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
            "availabilityImpact": "IMPACT_UNSPECIFIED",
            "baseScore": 0,
            "confidentialityImpact": "IMPACT_UNSPECIFIED",
            "exploitabilityScore": 0,
            "impactScore": 0,
            "integrityImpact": "IMPACT_UNSPECIFIED",
            "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
            "scope": "SCOPE_UNSPECIFIED",
            "userInteraction": "USER_INTERACTION_UNSPECIFIED"
          },
          "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
          "cwe": [
            "string"
          ],
          "details": [
            {
              "cpeUri": "string",
              "description": "string",
              "fixedLocation": {
                "cpeUri": "string",
                "package": "string",
                "version": {
                  "epoch": 0,
                  "inclusive": true,
                  "kind": "VERSION_KIND_UNSPECIFIED",
                  "name": "string",
                  "revision": "string"
                }
              },
              "isObsolete": true,
              "maxAffectedVersion": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              },
              "minAffectedVersion": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              },
              "package": "string",
              "packageType": "string",
              "severityName": "string",
              "source": "string",
              "sourceUpdateTime": "string",
              "vendor": "string"
            }
          ],
          "severity": "SEVERITY_UNSPECIFIED",
          "sourceUpdateTime": "string",
          "windowsDetails": [
            {
              "cpeUri": "string",
              "description": "string",
              "fixingKbs": [
                {
                  "name": "string",
                  "url": "string"
                }
              ],
              "name": "string"
            }
          ]
        },
        "vulnerabilityAssessment": {
          "assessment": {
            "cve": "string",
            "impacts": [
              "string"
            ],
            "justification": {
              "details": "string",
              "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
            },
            "longDescription": "string",
            "relatedUris": [
              {
                "label": "string",
                "url": "string"
              }
            ],
            "remediations": [
              {
                "details": "string",
                "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
                "remediationUri": {
                  "label": "string",
                  "url": "string"
                }
              }
            ],
            "shortDescription": "string",
            "state": "STATE_UNSPECIFIED"
          },
          "languageCode": "string",
          "longDescription": "string",
          "product": {
            "genericUri": "string",
            "id": "string",
            "name": "string"
          },
          "publisher": {
            "issuingAuthority": "string",
            "name": "string",
            "publisherNamespace": "string"
          },
          "shortDescription": "string",
          "title": "string"
        }
      },
      "property2": {
        "attestationAuthority": {
          "hint": {
            "humanReadableName": "string"
          }
        },
        "baseImage": {
          "fingerprint": {
            "v1Name": "string",
            "v2Blob": [
              "string"
            ],
            "v2Name": "string"
          },
          "resourceUrl": "string"
        },
        "build": {
          "builderVersion": "string",
          "signature": {
            "keyId": "string",
            "keyType": "KEY_TYPE_UNSPECIFIED",
            "publicKey": "string",
            "signature": "string"
          }
        },
        "createTime": "string",
        "deployable": {
          "resourceUri": [
            "string"
          ]
        },
        "discovery": {
          "analysisKind": "NOTE_KIND_UNSPECIFIED"
        },
        "expirationTime": "string",
        "intoto": {
          "expectedCommand": [
            "string"
          ],
          "expectedMaterials": [
            {
              "artifactRule": [
                "string"
              ]
            }
          ],
          "expectedProducts": [
            {
              "artifactRule": [
                "string"
              ]
            }
          ],
          "signingKeys": [
            {
              "keyId": "string",
              "keyScheme": "string",
              "keyType": "string",
              "publicKeyValue": "string"
            }
          ],
          "stepName": "string",
          "threshold": "string"
        },
        "kind": "NOTE_KIND_UNSPECIFIED",
        "longDescription": "string",
        "name": "string",
        "package": {
          "architecture": "ARCHITECTURE_UNSPECIFIED",
          "cpeUri": "string",
          "description": "string",
          "digest": [
            {
              "algo": "string",
              "digestBytes": "string"
            }
          ],
          "distribution": [
            {
              "architecture": "ARCHITECTURE_UNSPECIFIED",
              "cpeUri": "string",
              "description": "string",
              "latestVersion": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              },
              "maintainer": "string",
              "url": "string"
            }
          ],
          "license": {
            "comments": "string",
            "expression": "string"
          },
          "maintainer": "string",
          "name": "string",
          "packageType": "string",
          "url": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        },
        "relatedNoteNames": [
          "string"
        ],
        "relatedUrl": [
          {
            "label": "string",
            "url": "string"
          }
        ],
        "sbom": {
          "dataLicence": "string",
          "spdxVersion": "string"
        },
        "sbomReference": {
          "format": "string",
          "version": "string"
        },
        "shortDescription": "string",
        "spdxFile": {
          "checksum": [
            "string"
          ],
          "fileType": "FILE_TYPE_UNSPECIFIED",
          "title": "string"
        },
        "spdxPackage": {
          "analyzed": true,
          "attribution": "string",
          "checksum": "string",
          "copyright": "string",
          "detailedDescription": "string",
          "downloadLocation": "string",
          "externalRefs": [
            {
              "category": "CATEGORY_UNSPECIFIED",
              "comment": "string",
              "locator": "string",
              "type": "string"
            }
          ],
          "filesLicenseInfo": [
            "string"
          ],
          "homePage": "string",
          "licenseDeclared": {
            "comments": "string",
            "expression": "string"
          },
          "originator": "string",
          "packageType": "string",
          "summaryDescription": "string",
          "supplier": "string",
          "title": "string",
          "verificationCode": "string",
          "version": "string"
        },
        "spdxRelationship": {
          "type": "RELATIONSHIP_TYPE_UNSPECIFIED"
        },
        "updateTime": "string",
        "vulnerability": {
          "cvssScore": 0,
          "cvssV2": {
            "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
            "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
            "authentication": "AUTHENTICATION_UNSPECIFIED",
            "availabilityImpact": "IMPACT_UNSPECIFIED",
            "baseScore": 0,
            "confidentialityImpact": "IMPACT_UNSPECIFIED",
            "exploitabilityScore": 0,
            "impactScore": 0,
            "integrityImpact": "IMPACT_UNSPECIFIED",
            "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
            "scope": "SCOPE_UNSPECIFIED",
            "userInteraction": "USER_INTERACTION_UNSPECIFIED"
          },
          "cvssV3": {
            "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
            "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
            "availabilityImpact": "IMPACT_UNSPECIFIED",
            "baseScore": 0,
            "confidentialityImpact": "IMPACT_UNSPECIFIED",
            "exploitabilityScore": 0,
            "impactScore": 0,
            "integrityImpact": "IMPACT_UNSPECIFIED",
            "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
            "scope": "SCOPE_UNSPECIFIED",
            "userInteraction": "USER_INTERACTION_UNSPECIFIED"
          },
          "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
          "cwe": [
            "string"
          ],
          "details": [
            {
              "cpeUri": "string",
              "description": "string",
              "fixedLocation": {
                "cpeUri": "string",
                "package": "string",
                "version": {
                  "epoch": 0,
                  "inclusive": true,
                  "kind": "VERSION_KIND_UNSPECIFIED",
                  "name": "string",
                  "revision": "string"
                }
              },
              "isObsolete": true,
              "maxAffectedVersion": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              },
              "minAffectedVersion": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              },
              "package": "string",
              "packageType": "string",
              "severityName": "string",
              "source": "string",
              "sourceUpdateTime": "string",
              "vendor": "string"
            }
          ],
          "severity": "SEVERITY_UNSPECIFIED",
          "sourceUpdateTime": "string",
          "windowsDetails": [
            {
              "cpeUri": "string",
              "description": "string",
              "fixingKbs": [
                {
                  "name": "string",
                  "url": "string"
                }
              ],
              "name": "string"
            }
          ]
        },
        "vulnerabilityAssessment": {
          "assessment": {
            "cve": "string",
            "impacts": [
              "string"
            ],
            "justification": {
              "details": "string",
              "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
            },
            "longDescription": "string",
            "relatedUris": [
              {
                "label": "string",
                "url": "string"
              }
            ],
            "remediations": [
              {
                "details": "string",
                "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
                "remediationUri": {
                  "label": "string",
                  "url": "string"
                }
              }
            ],
            "shortDescription": "string",
            "state": "STATE_UNSPECIFIED"
          },
          "languageCode": "string",
          "longDescription": "string",
          "product": {
            "genericUri": "string",
            "id": "string",
            "name": "string"
          },
          "publisher": {
            "issuingAuthority": "string",
            "name": "string",
            "publisherNamespace": "string"
          },
          "shortDescription": "string",
          "title": "string"
        }
      }
    }
  }'
```

`POST /v1beta1/{parent}/notes:batchCreate`

Creates new notes in batch.

> Body parameter

```json
{
  "notes": {
    "property1": {
      "attestationAuthority": {
        "hint": {
          "humanReadableName": "string"
        }
      },
      "baseImage": {
        "fingerprint": {
          "v1Name": "string",
          "v2Blob": [
            "string"
          ],
          "v2Name": "string"
        },
        "resourceUrl": "string"
      },
      "build": {
        "builderVersion": "string",
        "signature": {
          "keyId": "string",
          "keyType": "KEY_TYPE_UNSPECIFIED",
          "publicKey": "string",
          "signature": "string"
        }
      },
      "createTime": "string",
      "deployable": {
        "resourceUri": [
          "string"
        ]
      },
      "discovery": {
        "analysisKind": "NOTE_KIND_UNSPECIFIED"
      },
      "expirationTime": "string",
      "intoto": {
        "expectedCommand": [
          "string"
        ],
        "expectedMaterials": [
          {
            "artifactRule": [
              "string"
            ]
          }
        ],
        "expectedProducts": [
          {
            "artifactRule": [
              "string"
            ]
          }
        ],
        "signingKeys": [
          {
            "keyId": "string",
            "keyScheme": "string",
            "keyType": "string",
            "publicKeyValue": "string"
          }
        ],
        "stepName": "string",
        "threshold": "string"
      },
      "kind": "NOTE_KIND_UNSPECIFIED",
      "longDescription": "string",
      "name": "string",
      "package": {
        "architecture": "ARCHITECTURE_UNSPECIFIED",
        "cpeUri": "string",
        "description": "string",
        "digest": [
          {
            "algo": "string",
            "digestBytes": "string"
          }
        ],
        "distribution": [
          {
            "architecture": "ARCHITECTURE_UNSPECIFIED",
            "cpeUri": "string",
            "description": "string",
            "latestVersion": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            },
            "maintainer": "string",
            "url": "string"
          }
        ],
        "license": {
          "comments": "string",
          "expression": "string"
        },
        "maintainer": "string",
        "name": "string",
        "packageType": "string",
        "url": "string",
        "version": {
          "epoch": 0,
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        }
      },
      "relatedNoteNames": [
        "string"
      ],
      "relatedUrl": [
        {
          "label": "string",
          "url": "string"
        }
      ],
      "sbom": {
        "dataLicence": "string",
        "spdxVersion": "string"
      },
      "sbomReference": {
        "format": "string",
        "version": "string"
      },
      "shortDescription": "string",
      "spdxFile": {
        "checksum": [
          "string"
        ],
        "fileType": "FILE_TYPE_UNSPECIFIED",
        "title": "string"
      },
      "spdxPackage": {
        "analyzed": true,
        "attribution": "string",
        "checksum": "string",
        "copyright": "string",
        "detailedDescription": "string",
        "downloadLocation": "string",
        "externalRefs": [
          {
            "category": "CATEGORY_UNSPECIFIED",
            "comment": "string",
            "locator": "string",
            "type": "string"
          }
        ],
        "filesLicenseInfo": [
          "string"
        ],
        "homePage": "string",
        "licenseDeclared": {
          "comments": "string",
          "expression": "string"
        },
        "originator": "string",
        "packageType": "string",
        "summaryDescription": "string",
        "supplier": "string",
        "title": "string",
        "verificationCode": "string",
        "version": "string"
      },
      "spdxRelationship": {
        "type": "RELATIONSHIP_TYPE_UNSPECIFIED"
      },
      "updateTime": "string",
      "vulnerability": {
        "cvssScore": 0,
        "cvssV2": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "authentication": "AUTHENTICATION_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssV3": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
        "cwe": [
          "string"
        ],
        "details": [
          {
            "cpeUri": "string",
            "description": "string",
            "fixedLocation": {
              "cpeUri": "string",
              "package": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            },
            "isObsolete": true,
            "maxAffectedVersion": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            },
            "minAffectedVersion": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            },
            "package": "string",
            "packageType": "string",
            "severityName": "string",
            "source": "string",
            "sourceUpdateTime": "string",
            "vendor": "string"
          }
        ],
        "severity": "SEVERITY_UNSPECIFIED",
        "sourceUpdateTime": "string",
        "windowsDetails": [
          {
            "cpeUri": "string",
            "description": "string",
            "fixingKbs": [
              {
                "name": "string",
                "url": "string"
              }
            ],
            "name": "string"
          }
        ]
      },
      "vulnerabilityAssessment": {
        "assessment": {
          "cve": "string",
          "impacts": [
            "string"
          ],
          "justification": {
            "details": "string",
            "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
          },
          "longDescription": "string",
          "relatedUris": [
            {
              "label": "string",
              "url": "string"
            }
          ],
          "remediations": [
            {
              "details": "string",
              "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
              "remediationUri": {
                "label": "string",
                "url": "string"
              }
            }
          ],
          "shortDescription": "string",
          "state": "STATE_UNSPECIFIED"
        },
        "languageCode": "string",
        "longDescription": "string",
        "product": {
          "genericUri": "string",
          "id": "string",
          "name": "string"
        },
        "publisher": {
          "issuingAuthority": "string",
          "name": "string",
          "publisherNamespace": "string"
        },
        "shortDescription": "string",
        "title": "string"
      }
    },
    "property2": {
      "attestationAuthority": {
        "hint": {
          "humanReadableName": "string"
        }
      },
      "baseImage": {
        "fingerprint": {
          "v1Name": "string",
          "v2Blob": [
            "string"
          ],
          "v2Name": "string"
        },
        "resourceUrl": "string"
      },
      "build": {
        "builderVersion": "string",
        "signature": {
          "keyId": "string",
          "keyType": "KEY_TYPE_UNSPECIFIED",
          "publicKey": "string",
          "signature": "string"
        }
      },
      "createTime": "string",
      "deployable": {
        "resourceUri": [
          "string"
        ]
      },
      "discovery": {
        "analysisKind": "NOTE_KIND_UNSPECIFIED"
      },
      "expirationTime": "string",
      "intoto": {
        "expectedCommand": [
          "string"
        ],
        "expectedMaterials": [
          {
            "artifactRule": [
              "string"
            ]
          }
        ],
        "expectedProducts": [
          {
            "artifactRule": [
              "string"
            ]
          }
        ],
        "signingKeys": [
          {
            "keyId": "string",
            "keyScheme": "string",
            "keyType": "string",
            "publicKeyValue": "string"
          }
        ],
        "stepName": "string",
        "threshold": "string"
      },
      "kind": "NOTE_KIND_UNSPECIFIED",
      "longDescription": "string",
      "name": "string",
      "package": {
        "architecture": "ARCHITECTURE_UNSPECIFIED",
        "cpeUri": "string",
        "description": "string",
        "digest": [
          {
            "algo": "string",
            "digestBytes": "string"
          }
        ],
        "distribution": [
          {
            "architecture": "ARCHITECTURE_UNSPECIFIED",
            "cpeUri": "string",
            "description": "string",
            "latestVersion": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            },
            "maintainer": "string",
            "url": "string"
          }
        ],
        "license": {
          "comments": "string",
          "expression": "string"
        },
        "maintainer": "string",
        "name": "string",
        "packageType": "string",
        "url": "string",
        "version": {
          "epoch": 0,
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        }
      },
      "relatedNoteNames": [
        "string"
      ],
      "relatedUrl": [
        {
          "label": "string",
          "url": "string"
        }
      ],
      "sbom": {
        "dataLicence": "string",
        "spdxVersion": "string"
      },
      "sbomReference": {
        "format": "string",
        "version": "string"
      },
      "shortDescription": "string",
      "spdxFile": {
        "checksum": [
          "string"
        ],
        "fileType": "FILE_TYPE_UNSPECIFIED",
        "title": "string"
      },
      "spdxPackage": {
        "analyzed": true,
        "attribution": "string",
        "checksum": "string",
        "copyright": "string",
        "detailedDescription": "string",
        "downloadLocation": "string",
        "externalRefs": [
          {
            "category": "CATEGORY_UNSPECIFIED",
            "comment": "string",
            "locator": "string",
            "type": "string"
          }
        ],
        "filesLicenseInfo": [
          "string"
        ],
        "homePage": "string",
        "licenseDeclared": {
          "comments": "string",
          "expression": "string"
        },
        "originator": "string",
        "packageType": "string",
        "summaryDescription": "string",
        "supplier": "string",
        "title": "string",
        "verificationCode": "string",
        "version": "string"
      },
      "spdxRelationship": {
        "type": "RELATIONSHIP_TYPE_UNSPECIFIED"
      },
      "updateTime": "string",
      "vulnerability": {
        "cvssScore": 0,
        "cvssV2": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "authentication": "AUTHENTICATION_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssV3": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
        "cwe": [
          "string"
        ],
        "details": [
          {
            "cpeUri": "string",
            "description": "string",
            "fixedLocation": {
              "cpeUri": "string",
              "package": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            },
            "isObsolete": true,
            "maxAffectedVersion": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            },
            "minAffectedVersion": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            },
            "package": "string",
            "packageType": "string",
            "severityName": "string",
            "source": "string",
            "sourceUpdateTime": "string",
            "vendor": "string"
          }
        ],
        "severity": "SEVERITY_UNSPECIFIED",
        "sourceUpdateTime": "string",
        "windowsDetails": [
          {
            "cpeUri": "string",
            "description": "string",
            "fixingKbs": [
              {
                "name": "string",
                "url": "string"
              }
            ],
            "name": "string"
          }
        ]
      },
      "vulnerabilityAssessment": {
        "assessment": {
          "cve": "string",
          "impacts": [
            "string"
          ],
          "justification": {
            "details": "string",
            "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
          },
          "longDescription": "string",
          "relatedUris": [
            {
              "label": "string",
              "url": "string"
            }
          ],
          "remediations": [
            {
              "details": "string",
              "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
              "remediationUri": {
                "label": "string",
                "url": "string"
              }
            }
          ],
          "shortDescription": "string",
          "state": "STATE_UNSPECIFIED"
        },
        "languageCode": "string",
        "longDescription": "string",
        "product": {
          "genericUri": "string",
          "id": "string",
          "name": "string"
        },
        "publisher": {
          "issuingAuthority": "string",
          "name": "string",
          "publisherNamespace": "string"
        },
        "shortDescription": "string",
        "title": "string"
      }
    }
  }
}
```

<h3 id="containeranalysisprojectsnotesbatchcreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the notes are to be created.|
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
|body|body|[BatchCreateNotesRequest](#schemabatchcreatenotesrequest)|false|none|
|» notes|body|object|false|Required. The notes to create, the key is expected to be the note ID. Max allowed length is 1000.|
|» » **additionalProperties**|body|[Note](#schemanote)|false|A type of analysis that can be done for a resource.|

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
  "notes": [
    {
      "attestationAuthority": {
        "hint": {
          "humanReadableName": "string"
        }
      },
      "baseImage": {
        "fingerprint": {
          "v1Name": "string",
          "v2Blob": [
            "string"
          ],
          "v2Name": "string"
        },
        "resourceUrl": "string"
      },
      "build": {
        "builderVersion": "string",
        "signature": {
          "keyId": "string",
          "keyType": "KEY_TYPE_UNSPECIFIED",
          "publicKey": "string",
          "signature": "string"
        }
      },
      "createTime": "string",
      "deployable": {
        "resourceUri": [
          "string"
        ]
      },
      "discovery": {
        "analysisKind": "NOTE_KIND_UNSPECIFIED"
      },
      "expirationTime": "string",
      "intoto": {
        "expectedCommand": [
          "string"
        ],
        "expectedMaterials": [
          {
            "artifactRule": [
              "string"
            ]
          }
        ],
        "expectedProducts": [
          {
            "artifactRule": [
              "string"
            ]
          }
        ],
        "signingKeys": [
          {
            "keyId": "string",
            "keyScheme": "string",
            "keyType": "string",
            "publicKeyValue": "string"
          }
        ],
        "stepName": "string",
        "threshold": "string"
      },
      "kind": "NOTE_KIND_UNSPECIFIED",
      "longDescription": "string",
      "name": "string",
      "package": {
        "architecture": "ARCHITECTURE_UNSPECIFIED",
        "cpeUri": "string",
        "description": "string",
        "digest": [
          {
            "algo": "string",
            "digestBytes": "string"
          }
        ],
        "distribution": [
          {
            "architecture": "ARCHITECTURE_UNSPECIFIED",
            "cpeUri": "string",
            "description": "string",
            "latestVersion": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            },
            "maintainer": "string",
            "url": "string"
          }
        ],
        "license": {
          "comments": "string",
          "expression": "string"
        },
        "maintainer": "string",
        "name": "string",
        "packageType": "string",
        "url": "string",
        "version": {
          "epoch": 0,
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        }
      },
      "relatedNoteNames": [
        "string"
      ],
      "relatedUrl": [
        {
          "label": "string",
          "url": "string"
        }
      ],
      "sbom": {
        "dataLicence": "string",
        "spdxVersion": "string"
      },
      "sbomReference": {
        "format": "string",
        "version": "string"
      },
      "shortDescription": "string",
      "spdxFile": {
        "checksum": [
          "string"
        ],
        "fileType": "FILE_TYPE_UNSPECIFIED",
        "title": "string"
      },
      "spdxPackage": {
        "analyzed": true,
        "attribution": "string",
        "checksum": "string",
        "copyright": "string",
        "detailedDescription": "string",
        "downloadLocation": "string",
        "externalRefs": [
          {
            "category": "CATEGORY_UNSPECIFIED",
            "comment": "string",
            "locator": "string",
            "type": "string"
          }
        ],
        "filesLicenseInfo": [
          "string"
        ],
        "homePage": "string",
        "licenseDeclared": {
          "comments": "string",
          "expression": "string"
        },
        "originator": "string",
        "packageType": "string",
        "summaryDescription": "string",
        "supplier": "string",
        "title": "string",
        "verificationCode": "string",
        "version": "string"
      },
      "spdxRelationship": {
        "type": "RELATIONSHIP_TYPE_UNSPECIFIED"
      },
      "updateTime": "string",
      "vulnerability": {
        "cvssScore": 0,
        "cvssV2": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "authentication": "AUTHENTICATION_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssV3": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
        "cwe": [
          "string"
        ],
        "details": [
          {
            "cpeUri": "string",
            "description": "string",
            "fixedLocation": {
              "cpeUri": "string",
              "package": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            },
            "isObsolete": true,
            "maxAffectedVersion": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            },
            "minAffectedVersion": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            },
            "package": "string",
            "packageType": "string",
            "severityName": "string",
            "source": "string",
            "sourceUpdateTime": "string",
            "vendor": "string"
          }
        ],
        "severity": "SEVERITY_UNSPECIFIED",
        "sourceUpdateTime": "string",
        "windowsDetails": [
          {
            "cpeUri": "string",
            "description": "string",
            "fixingKbs": [
              {
                "name": "string",
                "url": "string"
              }
            ],
            "name": "string"
          }
        ]
      },
      "vulnerabilityAssessment": {
        "assessment": {
          "cve": "string",
          "impacts": [
            "string"
          ],
          "justification": {
            "details": "string",
            "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
          },
          "longDescription": "string",
          "relatedUris": [
            {
              "label": "string",
              "url": "string"
            }
          ],
          "remediations": [
            {
              "details": "string",
              "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
              "remediationUri": {
                "label": "string",
                "url": "string"
              }
            }
          ],
          "shortDescription": "string",
          "state": "STATE_UNSPECIFIED"
        },
        "languageCode": "string",
        "longDescription": "string",
        "product": {
          "genericUri": "string",
          "id": "string",
          "name": "string"
        },
        "publisher": {
          "issuingAuthority": "string",
          "name": "string",
          "publisherNamespace": "string"
        },
        "shortDescription": "string",
        "title": "string"
      }
    }
  ]
}
```

<h3 id="containeranalysisprojectsnotesbatchcreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchCreateNotesResponse](#schemabatchcreatenotesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## containeranalysis.projects.occurrences.list

<a id="opIdcontaineranalysis.projects.occurrences.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/occurrences \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/occurrences`

Lists occurrences for the specified project.

<h3 id="containeranalysisprojectsoccurrenceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project to list occurrences for in the form of `projects/[PROJECT_ID]`.|
|filter|query|string|false|The filter expression.|
|pageSize|query|integer|false|Number of occurrences to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.|
|pageToken|query|string|false|Token to provide to skip to a particular spot in the list.|
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
  "occurrences": [
    {
      "attestation": {
        "attestation": {
          "genericSignedAttestation": {
            "contentType": "CONTENT_TYPE_UNSPECIFIED",
            "serializedPayload": "string",
            "signatures": [
              {
                "publicKeyId": "string",
                "signature": "string"
              }
            ]
          },
          "pgpSignedAttestation": {
            "contentType": "CONTENT_TYPE_UNSPECIFIED",
            "pgpKeyId": "string",
            "signature": "string"
          }
        }
      },
      "build": {
        "provenance": {
          "buildOptions": {
            "property1": "string",
            "property2": "string"
          },
          "builderVersion": "string",
          "builtArtifacts": [
            {
              "checksum": "string",
              "id": "string",
              "names": [
                "string"
              ]
            }
          ],
          "commands": [
            {
              "args": [
                "string"
              ],
              "dir": "string",
              "env": [
                "string"
              ],
              "id": "string",
              "name": "string",
              "waitFor": [
                "string"
              ]
            }
          ],
          "createTime": "string",
          "creator": "string",
          "endTime": "string",
          "id": "string",
          "logsUri": "string",
          "projectId": "string",
          "sourceProvenance": {
            "additionalContexts": [
              {
                "cloudRepo": {
                  "aliasContext": {
                    "kind": "KIND_UNSPECIFIED",
                    "name": "string"
                  },
                  "repoId": {
                    "projectRepoId": {
                      "projectId": "string",
                      "repoName": "string"
                    },
                    "uid": "string"
                  },
                  "revisionId": "string"
                },
                "gerrit": {
                  "aliasContext": {
                    "kind": "KIND_UNSPECIFIED",
                    "name": "string"
                  },
                  "gerritProject": "string",
                  "hostUri": "string",
                  "revisionId": "string"
                },
                "git": {
                  "revisionId": "string",
                  "url": "string"
                },
                "labels": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            ],
            "artifactStorageSourceUri": "string",
            "context": {
              "cloudRepo": {
                "aliasContext": {
                  "kind": "KIND_UNSPECIFIED",
                  "name": "string"
                },
                "repoId": {
                  "projectRepoId": {
                    "projectId": "string",
                    "repoName": "string"
                  },
                  "uid": "string"
                },
                "revisionId": "string"
              },
              "gerrit": {
                "aliasContext": {
                  "kind": "KIND_UNSPECIFIED",
                  "name": "string"
                },
                "gerritProject": "string",
                "hostUri": "string",
                "revisionId": "string"
              },
              "git": {
                "revisionId": "string",
                "url": "string"
              },
              "labels": {
                "property1": "string",
                "property2": "string"
              }
            },
            "fileHashes": {
              "property1": {
                "fileHash": [
                  {
                    "type": "HASH_TYPE_UNSPECIFIED",
                    "value": "string"
                  }
                ]
              },
              "property2": {
                "fileHash": [
                  {
                    "type": "HASH_TYPE_UNSPECIFIED",
                    "value": "string"
                  }
                ]
              }
            }
          },
          "startTime": "string",
          "triggerId": "string"
        },
        "provenanceBytes": "string"
      },
      "createTime": "string",
      "deployment": {
        "deployment": {
          "address": "string",
          "config": "string",
          "deployTime": "string",
          "platform": "PLATFORM_UNSPECIFIED",
          "resourceUri": [
            "string"
          ],
          "undeployTime": "string",
          "userEmail": "string"
        }
      },
      "derivedImage": {
        "derivedImage": {
          "baseResourceUrl": "string",
          "distance": 0,
          "fingerprint": {
            "v1Name": "string",
            "v2Blob": [
              "string"
            ],
            "v2Name": "string"
          },
          "layerInfo": [
            {
              "arguments": "string",
              "directive": "DIRECTIVE_UNSPECIFIED"
            }
          ]
        }
      },
      "discovered": {
        "discovered": {
          "analysisCompleted": {
            "analysisType": [
              "string"
            ]
          },
          "analysisError": [
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
          ],
          "analysisStatus": "ANALYSIS_STATUS_UNSPECIFIED",
          "analysisStatusError": {
            "code": 0,
            "details": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "message": "string"
          },
          "continuousAnalysis": "CONTINUOUS_ANALYSIS_UNSPECIFIED",
          "lastAnalysisTime": "string"
        }
      },
      "envelope": {
        "payload": "string",
        "payloadType": "string",
        "signatures": [
          {
            "keyid": "string",
            "sig": "string"
          }
        ]
      },
      "installation": {
        "installation": {
          "architecture": "ARCHITECTURE_UNSPECIFIED",
          "cpeUri": "string",
          "license": {
            "comments": "string",
            "expression": "string"
          },
          "location": [
            {
              "cpeUri": "string",
              "path": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            }
          ],
          "name": "string",
          "packageType": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        }
      },
      "intoto": {
        "signatures": [
          {
            "keyid": "string",
            "sig": "string"
          }
        ],
        "signed": {
          "byproducts": {
            "customValues": {
              "property1": "string",
              "property2": "string"
            }
          },
          "command": [
            "string"
          ],
          "environment": {
            "customValues": {
              "property1": "string",
              "property2": "string"
            }
          },
          "materials": [
            {
              "hashes": {
                "sha256": "string"
              },
              "resourceUri": "string"
            }
          ],
          "products": [
            {
              "hashes": {
                "sha256": "string"
              },
              "resourceUri": "string"
            }
          ]
        }
      },
      "kind": "NOTE_KIND_UNSPECIFIED",
      "name": "string",
      "noteName": "string",
      "remediation": "string",
      "resource": {
        "contentHash": {
          "type": "HASH_TYPE_UNSPECIFIED",
          "value": "string"
        },
        "name": "string",
        "uri": "string"
      },
      "sbom": {
        "createTime": "string",
        "creatorComment": "string",
        "creators": [
          "string"
        ],
        "documentComment": "string",
        "externalDocumentRefs": [
          "string"
        ],
        "id": "string",
        "licenseListVersion": "string",
        "namespace": "string",
        "title": "string"
      },
      "sbomReference": {
        "payload": {
          "_type": "string",
          "predicate": {
            "digest": {
              "property1": "string",
              "property2": "string"
            },
            "location": "string",
            "mimeType": "string",
            "referrerId": "string"
          },
          "predicateType": "string",
          "subject": [
            {
              "digest": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string"
            }
          ]
        },
        "payloadType": "string",
        "signatures": [
          {
            "keyid": "string",
            "sig": "string"
          }
        ]
      },
      "spdxFile": {
        "attributions": [
          "string"
        ],
        "comment": "string",
        "contributors": [
          "string"
        ],
        "copyright": "string",
        "filesLicenseInfo": [
          "string"
        ],
        "id": "string",
        "licenseConcluded": {
          "comments": "string",
          "expression": "string"
        },
        "notice": "string"
      },
      "spdxPackage": {
        "comment": "string",
        "filename": "string",
        "homePage": "string",
        "id": "string",
        "licenseConcluded": {
          "comments": "string",
          "expression": "string"
        },
        "packageType": "string",
        "sourceInfo": "string",
        "summaryDescription": "string",
        "title": "string",
        "version": "string"
      },
      "spdxRelationship": {
        "comment": "string",
        "source": "string",
        "target": "string",
        "type": "RELATIONSHIP_TYPE_UNSPECIFIED"
      },
      "updateTime": "string",
      "vulnerability": {
        "cvssScore": 0,
        "cvssV2": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "authentication": "AUTHENTICATION_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssV3": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "authentication": "AUTHENTICATION_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
        "effectiveSeverity": "SEVERITY_UNSPECIFIED",
        "longDescription": "string",
        "packageIssue": [
          {
            "affectedLocation": {
              "cpeUri": "string",
              "package": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            },
            "effectiveSeverity": "SEVERITY_UNSPECIFIED",
            "fixedLocation": {
              "cpeUri": "string",
              "package": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            },
            "packageType": "string",
            "severityName": "string"
          }
        ],
        "relatedUrls": [
          {
            "label": "string",
            "url": "string"
          }
        ],
        "severity": "SEVERITY_UNSPECIFIED",
        "shortDescription": "string",
        "type": "string",
        "vexAssessment": {
          "cve": "string",
          "impacts": [
            "string"
          ],
          "justification": {
            "details": "string",
            "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
          },
          "noteName": "string",
          "relatedUris": [
            {
              "label": "string",
              "url": "string"
            }
          ],
          "remediations": [
            {
              "details": "string",
              "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
              "remediationUri": {
                "label": "string",
                "url": "string"
              }
            }
          ],
          "state": "STATE_UNSPECIFIED"
        }
      }
    }
  ]
}
```

<h3 id="containeranalysisprojectsoccurrenceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOccurrencesResponse](#schemalistoccurrencesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## containeranalysis.projects.occurrences.create

<a id="opIdcontaineranalysis.projects.occurrences.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/occurrences \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attestation": {
      "attestation": {
        "genericSignedAttestation": {
          "contentType": "CONTENT_TYPE_UNSPECIFIED",
          "serializedPayload": "string",
          "signatures": [
            {
              "publicKeyId": "string",
              "signature": "string"
            }
          ]
        },
        "pgpSignedAttestation": {
          "contentType": "CONTENT_TYPE_UNSPECIFIED",
          "pgpKeyId": "string",
          "signature": "string"
        }
      }
    },
    "build": {
      "provenance": {
        "buildOptions": {
          "property1": "string",
          "property2": "string"
        },
        "builderVersion": "string",
        "builtArtifacts": [
          {
            "checksum": "string",
            "id": "string",
            "names": [
              "string"
            ]
          }
        ],
        "commands": [
          {
            "args": [
              "string"
            ],
            "dir": "string",
            "env": [
              "string"
            ],
            "id": "string",
            "name": "string",
            "waitFor": [
              "string"
            ]
          }
        ],
        "createTime": "string",
        "creator": "string",
        "endTime": "string",
        "id": "string",
        "logsUri": "string",
        "projectId": "string",
        "sourceProvenance": {
          "additionalContexts": [
            {
              "cloudRepo": {
                "aliasContext": {
                  "kind": "KIND_UNSPECIFIED",
                  "name": "string"
                },
                "repoId": {
                  "projectRepoId": {
                    "projectId": "string",
                    "repoName": "string"
                  },
                  "uid": "string"
                },
                "revisionId": "string"
              },
              "gerrit": {
                "aliasContext": {
                  "kind": "KIND_UNSPECIFIED",
                  "name": "string"
                },
                "gerritProject": "string",
                "hostUri": "string",
                "revisionId": "string"
              },
              "git": {
                "revisionId": "string",
                "url": "string"
              },
              "labels": {
                "property1": "string",
                "property2": "string"
              }
            }
          ],
          "artifactStorageSourceUri": "string",
          "context": {
            "cloudRepo": {
              "aliasContext": {
                "kind": "KIND_UNSPECIFIED",
                "name": "string"
              },
              "repoId": {
                "projectRepoId": {
                  "projectId": "string",
                  "repoName": "string"
                },
                "uid": "string"
              },
              "revisionId": "string"
            },
            "gerrit": {
              "aliasContext": {
                "kind": "KIND_UNSPECIFIED",
                "name": "string"
              },
              "gerritProject": "string",
              "hostUri": "string",
              "revisionId": "string"
            },
            "git": {
              "revisionId": "string",
              "url": "string"
            },
            "labels": {
              "property1": "string",
              "property2": "string"
            }
          },
          "fileHashes": {
            "property1": {
              "fileHash": [
                {
                  "type": "HASH_TYPE_UNSPECIFIED",
                  "value": "string"
                }
              ]
            },
            "property2": {
              "fileHash": [
                {
                  "type": "HASH_TYPE_UNSPECIFIED",
                  "value": "string"
                }
              ]
            }
          }
        },
        "startTime": "string",
        "triggerId": "string"
      },
      "provenanceBytes": "string"
    },
    "createTime": "string",
    "deployment": {
      "deployment": {
        "address": "string",
        "config": "string",
        "deployTime": "string",
        "platform": "PLATFORM_UNSPECIFIED",
        "resourceUri": [
          "string"
        ],
        "undeployTime": "string",
        "userEmail": "string"
      }
    },
    "derivedImage": {
      "derivedImage": {
        "baseResourceUrl": "string",
        "distance": 0,
        "fingerprint": {
          "v1Name": "string",
          "v2Blob": [
            "string"
          ],
          "v2Name": "string"
        },
        "layerInfo": [
          {
            "arguments": "string",
            "directive": "DIRECTIVE_UNSPECIFIED"
          }
        ]
      }
    },
    "discovered": {
      "discovered": {
        "analysisCompleted": {
          "analysisType": [
            "string"
          ]
        },
        "analysisError": [
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
        ],
        "analysisStatus": "ANALYSIS_STATUS_UNSPECIFIED",
        "analysisStatusError": {
          "code": 0,
          "details": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "message": "string"
        },
        "continuousAnalysis": "CONTINUOUS_ANALYSIS_UNSPECIFIED",
        "lastAnalysisTime": "string"
      }
    },
    "envelope": {
      "payload": "string",
      "payloadType": "string",
      "signatures": [
        {
          "keyid": "string",
          "sig": "string"
        }
      ]
    },
    "installation": {
      "installation": {
        "license": {
          "comments": "string",
          "expression": "string"
        },
        "location": [
          {
            "cpeUri": "string",
            "path": "string",
            "version": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            }
          }
        ]
      }
    },
    "intoto": {
      "signatures": [
        {
          "keyid": "string",
          "sig": "string"
        }
      ],
      "signed": {
        "byproducts": {
          "customValues": {
            "property1": "string",
            "property2": "string"
          }
        },
        "command": [
          "string"
        ],
        "environment": {
          "customValues": {
            "property1": "string",
            "property2": "string"
          }
        },
        "materials": [
          {
            "hashes": {
              "sha256": "string"
            },
            "resourceUri": "string"
          }
        ],
        "products": [
          {
            "hashes": {
              "sha256": "string"
            },
            "resourceUri": "string"
          }
        ]
      }
    },
    "kind": "NOTE_KIND_UNSPECIFIED",
    "name": "string",
    "noteName": "string",
    "remediation": "string",
    "resource": {
      "contentHash": {
        "type": "HASH_TYPE_UNSPECIFIED",
        "value": "string"
      },
      "name": "string",
      "uri": "string"
    },
    "sbom": {
      "createTime": "string",
      "creatorComment": "string",
      "creators": [
        "string"
      ],
      "documentComment": "string",
      "externalDocumentRefs": [
        "string"
      ],
      "id": "string",
      "licenseListVersion": "string",
      "namespace": "string",
      "title": "string"
    },
    "sbomReference": {
      "payload": {
        "_type": "string",
        "predicate": {
          "digest": {
            "property1": "string",
            "property2": "string"
          },
          "location": "string",
          "mimeType": "string",
          "referrerId": "string"
        },
        "predicateType": "string",
        "subject": [
          {
            "digest": {
              "property1": "string",
              "property2": "string"
            },
            "name": "string"
          }
        ]
      },
      "payloadType": "string",
      "signatures": [
        {
          "keyid": "string",
          "sig": "string"
        }
      ]
    },
    "spdxFile": {
      "attributions": [
        "string"
      ],
      "comment": "string",
      "contributors": [
        "string"
      ],
      "copyright": "string",
      "filesLicenseInfo": [
        "string"
      ],
      "id": "string",
      "licenseConcluded": {
        "comments": "string",
        "expression": "string"
      },
      "notice": "string"
    },
    "spdxPackage": {
      "comment": "string",
      "filename": "string",
      "id": "string",
      "licenseConcluded": {
        "comments": "string",
        "expression": "string"
      },
      "sourceInfo": "string"
    },
    "spdxRelationship": {
      "comment": "string",
      "source": "string",
      "target": "string"
    },
    "updateTime": "string",
    "vulnerability": {
      "cvssScore": 0,
      "cvssV2": {
        "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
        "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
        "authentication": "AUTHENTICATION_UNSPECIFIED",
        "availabilityImpact": "IMPACT_UNSPECIFIED",
        "baseScore": 0,
        "confidentialityImpact": "IMPACT_UNSPECIFIED",
        "exploitabilityScore": 0,
        "impactScore": 0,
        "integrityImpact": "IMPACT_UNSPECIFIED",
        "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
        "scope": "SCOPE_UNSPECIFIED",
        "userInteraction": "USER_INTERACTION_UNSPECIFIED"
      },
      "cvssV3": {
        "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
        "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
        "authentication": "AUTHENTICATION_UNSPECIFIED",
        "availabilityImpact": "IMPACT_UNSPECIFIED",
        "baseScore": 0,
        "confidentialityImpact": "IMPACT_UNSPECIFIED",
        "exploitabilityScore": 0,
        "impactScore": 0,
        "integrityImpact": "IMPACT_UNSPECIFIED",
        "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
        "scope": "SCOPE_UNSPECIFIED",
        "userInteraction": "USER_INTERACTION_UNSPECIFIED"
      },
      "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
      "effectiveSeverity": "SEVERITY_UNSPECIFIED",
      "longDescription": "string",
      "packageIssue": [
        {
          "affectedLocation": {
            "cpeUri": "string",
            "package": "string",
            "version": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            }
          },
          "fixedLocation": {
            "cpeUri": "string",
            "package": "string",
            "version": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            }
          },
          "packageType": "string",
          "severityName": "string"
        }
      ],
      "relatedUrls": [
        {
          "label": "string",
          "url": "string"
        }
      ],
      "severity": "SEVERITY_UNSPECIFIED",
      "shortDescription": "string",
      "type": "string",
      "vexAssessment": {
        "cve": "string",
        "impacts": [
          "string"
        ],
        "justification": {
          "details": "string",
          "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
        },
        "noteName": "string",
        "relatedUris": [
          {
            "label": "string",
            "url": "string"
          }
        ],
        "remediations": [
          {
            "details": "string",
            "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
            "remediationUri": {
              "label": "string",
              "url": "string"
            }
          }
        ],
        "state": "STATE_UNSPECIFIED"
      }
    }
  }'
```

`POST /v1beta1/{parent}/occurrences`

Creates a new occurrence.

> Body parameter

```json
{
  "attestation": {
    "attestation": {
      "genericSignedAttestation": {
        "contentType": "CONTENT_TYPE_UNSPECIFIED",
        "serializedPayload": "string",
        "signatures": [
          {
            "publicKeyId": "string",
            "signature": "string"
          }
        ]
      },
      "pgpSignedAttestation": {
        "contentType": "CONTENT_TYPE_UNSPECIFIED",
        "pgpKeyId": "string",
        "signature": "string"
      }
    }
  },
  "build": {
    "provenance": {
      "buildOptions": {
        "property1": "string",
        "property2": "string"
      },
      "builderVersion": "string",
      "builtArtifacts": [
        {
          "checksum": "string",
          "id": "string",
          "names": [
            "string"
          ]
        }
      ],
      "commands": [
        {
          "args": [
            "string"
          ],
          "dir": "string",
          "env": [
            "string"
          ],
          "id": "string",
          "name": "string",
          "waitFor": [
            "string"
          ]
        }
      ],
      "createTime": "string",
      "creator": "string",
      "endTime": "string",
      "id": "string",
      "logsUri": "string",
      "projectId": "string",
      "sourceProvenance": {
        "additionalContexts": [
          {
            "cloudRepo": {
              "aliasContext": {
                "kind": "KIND_UNSPECIFIED",
                "name": "string"
              },
              "repoId": {
                "projectRepoId": {
                  "projectId": "string",
                  "repoName": "string"
                },
                "uid": "string"
              },
              "revisionId": "string"
            },
            "gerrit": {
              "aliasContext": {
                "kind": "KIND_UNSPECIFIED",
                "name": "string"
              },
              "gerritProject": "string",
              "hostUri": "string",
              "revisionId": "string"
            },
            "git": {
              "revisionId": "string",
              "url": "string"
            },
            "labels": {
              "property1": "string",
              "property2": "string"
            }
          }
        ],
        "artifactStorageSourceUri": "string",
        "context": {
          "cloudRepo": {
            "aliasContext": {
              "kind": "KIND_UNSPECIFIED",
              "name": "string"
            },
            "repoId": {
              "projectRepoId": {
                "projectId": "string",
                "repoName": "string"
              },
              "uid": "string"
            },
            "revisionId": "string"
          },
          "gerrit": {
            "aliasContext": {
              "kind": "KIND_UNSPECIFIED",
              "name": "string"
            },
            "gerritProject": "string",
            "hostUri": "string",
            "revisionId": "string"
          },
          "git": {
            "revisionId": "string",
            "url": "string"
          },
          "labels": {
            "property1": "string",
            "property2": "string"
          }
        },
        "fileHashes": {
          "property1": {
            "fileHash": [
              {
                "type": "HASH_TYPE_UNSPECIFIED",
                "value": "string"
              }
            ]
          },
          "property2": {
            "fileHash": [
              {
                "type": "HASH_TYPE_UNSPECIFIED",
                "value": "string"
              }
            ]
          }
        }
      },
      "startTime": "string",
      "triggerId": "string"
    },
    "provenanceBytes": "string"
  },
  "createTime": "string",
  "deployment": {
    "deployment": {
      "address": "string",
      "config": "string",
      "deployTime": "string",
      "platform": "PLATFORM_UNSPECIFIED",
      "resourceUri": [
        "string"
      ],
      "undeployTime": "string",
      "userEmail": "string"
    }
  },
  "derivedImage": {
    "derivedImage": {
      "baseResourceUrl": "string",
      "distance": 0,
      "fingerprint": {
        "v1Name": "string",
        "v2Blob": [
          "string"
        ],
        "v2Name": "string"
      },
      "layerInfo": [
        {
          "arguments": "string",
          "directive": "DIRECTIVE_UNSPECIFIED"
        }
      ]
    }
  },
  "discovered": {
    "discovered": {
      "analysisCompleted": {
        "analysisType": [
          "string"
        ]
      },
      "analysisError": [
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
      ],
      "analysisStatus": "ANALYSIS_STATUS_UNSPECIFIED",
      "analysisStatusError": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "continuousAnalysis": "CONTINUOUS_ANALYSIS_UNSPECIFIED",
      "lastAnalysisTime": "string"
    }
  },
  "envelope": {
    "payload": "string",
    "payloadType": "string",
    "signatures": [
      {
        "keyid": "string",
        "sig": "string"
      }
    ]
  },
  "installation": {
    "installation": {
      "license": {
        "comments": "string",
        "expression": "string"
      },
      "location": [
        {
          "cpeUri": "string",
          "path": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        }
      ]
    }
  },
  "intoto": {
    "signatures": [
      {
        "keyid": "string",
        "sig": "string"
      }
    ],
    "signed": {
      "byproducts": {
        "customValues": {
          "property1": "string",
          "property2": "string"
        }
      },
      "command": [
        "string"
      ],
      "environment": {
        "customValues": {
          "property1": "string",
          "property2": "string"
        }
      },
      "materials": [
        {
          "hashes": {
            "sha256": "string"
          },
          "resourceUri": "string"
        }
      ],
      "products": [
        {
          "hashes": {
            "sha256": "string"
          },
          "resourceUri": "string"
        }
      ]
    }
  },
  "kind": "NOTE_KIND_UNSPECIFIED",
  "name": "string",
  "noteName": "string",
  "remediation": "string",
  "resource": {
    "contentHash": {
      "type": "HASH_TYPE_UNSPECIFIED",
      "value": "string"
    },
    "name": "string",
    "uri": "string"
  },
  "sbom": {
    "createTime": "string",
    "creatorComment": "string",
    "creators": [
      "string"
    ],
    "documentComment": "string",
    "externalDocumentRefs": [
      "string"
    ],
    "id": "string",
    "licenseListVersion": "string",
    "namespace": "string",
    "title": "string"
  },
  "sbomReference": {
    "payload": {
      "_type": "string",
      "predicate": {
        "digest": {
          "property1": "string",
          "property2": "string"
        },
        "location": "string",
        "mimeType": "string",
        "referrerId": "string"
      },
      "predicateType": "string",
      "subject": [
        {
          "digest": {
            "property1": "string",
            "property2": "string"
          },
          "name": "string"
        }
      ]
    },
    "payloadType": "string",
    "signatures": [
      {
        "keyid": "string",
        "sig": "string"
      }
    ]
  },
  "spdxFile": {
    "attributions": [
      "string"
    ],
    "comment": "string",
    "contributors": [
      "string"
    ],
    "copyright": "string",
    "filesLicenseInfo": [
      "string"
    ],
    "id": "string",
    "licenseConcluded": {
      "comments": "string",
      "expression": "string"
    },
    "notice": "string"
  },
  "spdxPackage": {
    "comment": "string",
    "filename": "string",
    "id": "string",
    "licenseConcluded": {
      "comments": "string",
      "expression": "string"
    },
    "sourceInfo": "string"
  },
  "spdxRelationship": {
    "comment": "string",
    "source": "string",
    "target": "string"
  },
  "updateTime": "string",
  "vulnerability": {
    "cvssScore": 0,
    "cvssV2": {
      "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
      "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
      "authentication": "AUTHENTICATION_UNSPECIFIED",
      "availabilityImpact": "IMPACT_UNSPECIFIED",
      "baseScore": 0,
      "confidentialityImpact": "IMPACT_UNSPECIFIED",
      "exploitabilityScore": 0,
      "impactScore": 0,
      "integrityImpact": "IMPACT_UNSPECIFIED",
      "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
      "scope": "SCOPE_UNSPECIFIED",
      "userInteraction": "USER_INTERACTION_UNSPECIFIED"
    },
    "cvssV3": {
      "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
      "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
      "authentication": "AUTHENTICATION_UNSPECIFIED",
      "availabilityImpact": "IMPACT_UNSPECIFIED",
      "baseScore": 0,
      "confidentialityImpact": "IMPACT_UNSPECIFIED",
      "exploitabilityScore": 0,
      "impactScore": 0,
      "integrityImpact": "IMPACT_UNSPECIFIED",
      "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
      "scope": "SCOPE_UNSPECIFIED",
      "userInteraction": "USER_INTERACTION_UNSPECIFIED"
    },
    "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
    "effectiveSeverity": "SEVERITY_UNSPECIFIED",
    "longDescription": "string",
    "packageIssue": [
      {
        "affectedLocation": {
          "cpeUri": "string",
          "package": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        },
        "fixedLocation": {
          "cpeUri": "string",
          "package": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        },
        "packageType": "string",
        "severityName": "string"
      }
    ],
    "relatedUrls": [
      {
        "label": "string",
        "url": "string"
      }
    ],
    "severity": "SEVERITY_UNSPECIFIED",
    "shortDescription": "string",
    "type": "string",
    "vexAssessment": {
      "cve": "string",
      "impacts": [
        "string"
      ],
      "justification": {
        "details": "string",
        "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
      },
      "noteName": "string",
      "relatedUris": [
        {
          "label": "string",
          "url": "string"
        }
      ],
      "remediations": [
        {
          "details": "string",
          "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
          "remediationUri": {
            "label": "string",
            "url": "string"
          }
        }
      ],
      "state": "STATE_UNSPECIFIED"
    }
  }
}
```

<h3 id="containeranalysisprojectsoccurrencescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrence is to be created.|
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
|body|body|[Occurrence](#schemaoccurrence)|false|none|
|» attestation|body|[Details](#schemadetails)|false|Describes an attestation of an artifact.|
|» build|body|[GrafeasV1beta1BuildDetails](#schemagrafeasv1beta1builddetails)|false|Describes a verifiable build.|
|» createTime|body|string(google-datetime)|false|Output only. The time this occurrence was created.|
|» deployment|body|[GrafeasV1beta1DeploymentDetails](#schemagrafeasv1beta1deploymentdetails)|false|Describes the deployment of an artifact on a runtime.|
|» derivedImage|body|[GrafeasV1beta1ImageDetails](#schemagrafeasv1beta1imagedetails)|false|Describes how this resource derives from the basis in the associated note.|
|» discovered|body|[GrafeasV1beta1DiscoveryDetails](#schemagrafeasv1beta1discoverydetails)|false|Describes when a resource was discovered.|
|» envelope|body|[Envelope](#schemaenvelope)|false|https://github.com/secure-systems-lab/dsse|
|» installation|body|[GrafeasV1beta1PackageDetails](#schemagrafeasv1beta1packagedetails)|false|Describes the installation of a package on the linked resource.|
|» intoto|body|[GrafeasV1beta1IntotoDetails](#schemagrafeasv1beta1intotodetails)|false|Describes a specific in-toto link.|
|» kind|body|string|false|Output only. This explicitly denotes which of the occurrence details are specified. This field can be used as a filter in list requests.|
|» name|body|string|false|Output only. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.|
|» noteName|body|string|false|Required. Immutable. The analysis note associated with this occurrence, in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. This field can be used as a filter in list requests.|
|» remediation|body|string|false|A description of actions that can be taken to remedy the note.|
|» resource|body|[Resource](#schemaresource)|false|Required. Immutable. The resource for which the occurrence applies.|
|» sbom|body|[DocumentOccurrence](#schemadocumentoccurrence)|false|Describes a specific software bill of materials document.|
|» sbomReference|body|[SBOMReferenceOccurrence](#schemasbomreferenceoccurrence)|false|Describes a specific SBOM reference occurrences.|
|» spdxFile|body|[FileOccurrence](#schemafileoccurrence)|false|Describes a specific SPDX File.|
|» spdxPackage|body|[PackageInfoOccurrence](#schemapackageinfooccurrence)|false|Describes a specific SPDX Package.|
|» spdxRelationship|body|[RelationshipOccurrence](#schemarelationshipoccurrence)|false|Describes a specific SPDX Relationship.|
|» updateTime|body|string(google-datetime)|false|Output only. The time this occurrence was last updated.|
|» vulnerability|body|[GrafeasV1beta1VulnerabilityDetails](#schemagrafeasv1beta1vulnerabilitydetails)|false|Describes a security vulnerability.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» kind|NOTE_KIND_UNSPECIFIED|
|» kind|VULNERABILITY|
|» kind|BUILD|
|» kind|IMAGE|
|» kind|PACKAGE|
|» kind|DEPLOYMENT|
|» kind|DISCOVERY|
|» kind|ATTESTATION|
|» kind|INTOTO|
|» kind|SBOM|
|» kind|SPDX_PACKAGE|
|» kind|SPDX_FILE|
|» kind|SPDX_RELATIONSHIP|
|» kind|VULNERABILITY_ASSESSMENT|
|» kind|SBOM_REFERENCE|

> Example responses

> 200 Response

```json
{
  "attestation": {
    "attestation": {
      "genericSignedAttestation": {
        "contentType": "CONTENT_TYPE_UNSPECIFIED",
        "serializedPayload": "string",
        "signatures": [
          {
            "publicKeyId": "string",
            "signature": "string"
          }
        ]
      },
      "pgpSignedAttestation": {
        "contentType": "CONTENT_TYPE_UNSPECIFIED",
        "pgpKeyId": "string",
        "signature": "string"
      }
    }
  },
  "build": {
    "provenance": {
      "buildOptions": {
        "property1": "string",
        "property2": "string"
      },
      "builderVersion": "string",
      "builtArtifacts": [
        {
          "checksum": "string",
          "id": "string",
          "names": [
            "string"
          ]
        }
      ],
      "commands": [
        {
          "args": [
            "string"
          ],
          "dir": "string",
          "env": [
            "string"
          ],
          "id": "string",
          "name": "string",
          "waitFor": [
            "string"
          ]
        }
      ],
      "createTime": "string",
      "creator": "string",
      "endTime": "string",
      "id": "string",
      "logsUri": "string",
      "projectId": "string",
      "sourceProvenance": {
        "additionalContexts": [
          {
            "cloudRepo": {
              "aliasContext": {
                "kind": "KIND_UNSPECIFIED",
                "name": "string"
              },
              "repoId": {
                "projectRepoId": {
                  "projectId": "string",
                  "repoName": "string"
                },
                "uid": "string"
              },
              "revisionId": "string"
            },
            "gerrit": {
              "aliasContext": {
                "kind": "KIND_UNSPECIFIED",
                "name": "string"
              },
              "gerritProject": "string",
              "hostUri": "string",
              "revisionId": "string"
            },
            "git": {
              "revisionId": "string",
              "url": "string"
            },
            "labels": {
              "property1": "string",
              "property2": "string"
            }
          }
        ],
        "artifactStorageSourceUri": "string",
        "context": {
          "cloudRepo": {
            "aliasContext": {
              "kind": "KIND_UNSPECIFIED",
              "name": "string"
            },
            "repoId": {
              "projectRepoId": {
                "projectId": "string",
                "repoName": "string"
              },
              "uid": "string"
            },
            "revisionId": "string"
          },
          "gerrit": {
            "aliasContext": {
              "kind": "KIND_UNSPECIFIED",
              "name": "string"
            },
            "gerritProject": "string",
            "hostUri": "string",
            "revisionId": "string"
          },
          "git": {
            "revisionId": "string",
            "url": "string"
          },
          "labels": {
            "property1": "string",
            "property2": "string"
          }
        },
        "fileHashes": {
          "property1": {
            "fileHash": [
              {
                "type": "HASH_TYPE_UNSPECIFIED",
                "value": "string"
              }
            ]
          },
          "property2": {
            "fileHash": [
              {
                "type": "HASH_TYPE_UNSPECIFIED",
                "value": "string"
              }
            ]
          }
        }
      },
      "startTime": "string",
      "triggerId": "string"
    },
    "provenanceBytes": "string"
  },
  "createTime": "string",
  "deployment": {
    "deployment": {
      "address": "string",
      "config": "string",
      "deployTime": "string",
      "platform": "PLATFORM_UNSPECIFIED",
      "resourceUri": [
        "string"
      ],
      "undeployTime": "string",
      "userEmail": "string"
    }
  },
  "derivedImage": {
    "derivedImage": {
      "baseResourceUrl": "string",
      "distance": 0,
      "fingerprint": {
        "v1Name": "string",
        "v2Blob": [
          "string"
        ],
        "v2Name": "string"
      },
      "layerInfo": [
        {
          "arguments": "string",
          "directive": "DIRECTIVE_UNSPECIFIED"
        }
      ]
    }
  },
  "discovered": {
    "discovered": {
      "analysisCompleted": {
        "analysisType": [
          "string"
        ]
      },
      "analysisError": [
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
      ],
      "analysisStatus": "ANALYSIS_STATUS_UNSPECIFIED",
      "analysisStatusError": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "continuousAnalysis": "CONTINUOUS_ANALYSIS_UNSPECIFIED",
      "lastAnalysisTime": "string"
    }
  },
  "envelope": {
    "payload": "string",
    "payloadType": "string",
    "signatures": [
      {
        "keyid": "string",
        "sig": "string"
      }
    ]
  },
  "installation": {
    "installation": {
      "architecture": "ARCHITECTURE_UNSPECIFIED",
      "cpeUri": "string",
      "license": {
        "comments": "string",
        "expression": "string"
      },
      "location": [
        {
          "cpeUri": "string",
          "path": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        }
      ],
      "name": "string",
      "packageType": "string",
      "version": {
        "epoch": 0,
        "inclusive": true,
        "kind": "VERSION_KIND_UNSPECIFIED",
        "name": "string",
        "revision": "string"
      }
    }
  },
  "intoto": {
    "signatures": [
      {
        "keyid": "string",
        "sig": "string"
      }
    ],
    "signed": {
      "byproducts": {
        "customValues": {
          "property1": "string",
          "property2": "string"
        }
      },
      "command": [
        "string"
      ],
      "environment": {
        "customValues": {
          "property1": "string",
          "property2": "string"
        }
      },
      "materials": [
        {
          "hashes": {
            "sha256": "string"
          },
          "resourceUri": "string"
        }
      ],
      "products": [
        {
          "hashes": {
            "sha256": "string"
          },
          "resourceUri": "string"
        }
      ]
    }
  },
  "kind": "NOTE_KIND_UNSPECIFIED",
  "name": "string",
  "noteName": "string",
  "remediation": "string",
  "resource": {
    "contentHash": {
      "type": "HASH_TYPE_UNSPECIFIED",
      "value": "string"
    },
    "name": "string",
    "uri": "string"
  },
  "sbom": {
    "createTime": "string",
    "creatorComment": "string",
    "creators": [
      "string"
    ],
    "documentComment": "string",
    "externalDocumentRefs": [
      "string"
    ],
    "id": "string",
    "licenseListVersion": "string",
    "namespace": "string",
    "title": "string"
  },
  "sbomReference": {
    "payload": {
      "_type": "string",
      "predicate": {
        "digest": {
          "property1": "string",
          "property2": "string"
        },
        "location": "string",
        "mimeType": "string",
        "referrerId": "string"
      },
      "predicateType": "string",
      "subject": [
        {
          "digest": {
            "property1": "string",
            "property2": "string"
          },
          "name": "string"
        }
      ]
    },
    "payloadType": "string",
    "signatures": [
      {
        "keyid": "string",
        "sig": "string"
      }
    ]
  },
  "spdxFile": {
    "attributions": [
      "string"
    ],
    "comment": "string",
    "contributors": [
      "string"
    ],
    "copyright": "string",
    "filesLicenseInfo": [
      "string"
    ],
    "id": "string",
    "licenseConcluded": {
      "comments": "string",
      "expression": "string"
    },
    "notice": "string"
  },
  "spdxPackage": {
    "comment": "string",
    "filename": "string",
    "homePage": "string",
    "id": "string",
    "licenseConcluded": {
      "comments": "string",
      "expression": "string"
    },
    "packageType": "string",
    "sourceInfo": "string",
    "summaryDescription": "string",
    "title": "string",
    "version": "string"
  },
  "spdxRelationship": {
    "comment": "string",
    "source": "string",
    "target": "string",
    "type": "RELATIONSHIP_TYPE_UNSPECIFIED"
  },
  "updateTime": "string",
  "vulnerability": {
    "cvssScore": 0,
    "cvssV2": {
      "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
      "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
      "authentication": "AUTHENTICATION_UNSPECIFIED",
      "availabilityImpact": "IMPACT_UNSPECIFIED",
      "baseScore": 0,
      "confidentialityImpact": "IMPACT_UNSPECIFIED",
      "exploitabilityScore": 0,
      "impactScore": 0,
      "integrityImpact": "IMPACT_UNSPECIFIED",
      "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
      "scope": "SCOPE_UNSPECIFIED",
      "userInteraction": "USER_INTERACTION_UNSPECIFIED"
    },
    "cvssV3": {
      "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
      "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
      "authentication": "AUTHENTICATION_UNSPECIFIED",
      "availabilityImpact": "IMPACT_UNSPECIFIED",
      "baseScore": 0,
      "confidentialityImpact": "IMPACT_UNSPECIFIED",
      "exploitabilityScore": 0,
      "impactScore": 0,
      "integrityImpact": "IMPACT_UNSPECIFIED",
      "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
      "scope": "SCOPE_UNSPECIFIED",
      "userInteraction": "USER_INTERACTION_UNSPECIFIED"
    },
    "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
    "effectiveSeverity": "SEVERITY_UNSPECIFIED",
    "longDescription": "string",
    "packageIssue": [
      {
        "affectedLocation": {
          "cpeUri": "string",
          "package": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        },
        "effectiveSeverity": "SEVERITY_UNSPECIFIED",
        "fixedLocation": {
          "cpeUri": "string",
          "package": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        },
        "packageType": "string",
        "severityName": "string"
      }
    ],
    "relatedUrls": [
      {
        "label": "string",
        "url": "string"
      }
    ],
    "severity": "SEVERITY_UNSPECIFIED",
    "shortDescription": "string",
    "type": "string",
    "vexAssessment": {
      "cve": "string",
      "impacts": [
        "string"
      ],
      "justification": {
        "details": "string",
        "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
      },
      "noteName": "string",
      "relatedUris": [
        {
          "label": "string",
          "url": "string"
        }
      ],
      "remediations": [
        {
          "details": "string",
          "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
          "remediationUri": {
            "label": "string",
            "url": "string"
          }
        }
      ],
      "state": "STATE_UNSPECIFIED"
    }
  }
}
```

<h3 id="containeranalysisprojectsoccurrencescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Occurrence](#schemaoccurrence)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## containeranalysis.projects.occurrences.batchCreate

<a id="opIdcontaineranalysis.projects.occurrences.batchCreate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/occurrences:batchCreate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "occurrences": [
      {
        "attestation": {
          "attestation": {
            "genericSignedAttestation": {
              "contentType": "CONTENT_TYPE_UNSPECIFIED",
              "serializedPayload": "string",
              "signatures": [
                {
                  "publicKeyId": "string",
                  "signature": "string"
                }
              ]
            },
            "pgpSignedAttestation": {
              "contentType": "CONTENT_TYPE_UNSPECIFIED",
              "pgpKeyId": "string",
              "signature": "string"
            }
          }
        },
        "build": {
          "provenance": {
            "buildOptions": {
              "property1": "string",
              "property2": "string"
            },
            "builderVersion": "string",
            "builtArtifacts": [
              {
                "checksum": "string",
                "id": "string",
                "names": [
                  "string"
                ]
              }
            ],
            "commands": [
              {
                "args": [
                  "string"
                ],
                "dir": "string",
                "env": [
                  "string"
                ],
                "id": "string",
                "name": "string",
                "waitFor": [
                  "string"
                ]
              }
            ],
            "createTime": "string",
            "creator": "string",
            "endTime": "string",
            "id": "string",
            "logsUri": "string",
            "projectId": "string",
            "sourceProvenance": {
              "additionalContexts": [
                {
                  "cloudRepo": {
                    "aliasContext": {
                      "kind": "KIND_UNSPECIFIED",
                      "name": "string"
                    },
                    "repoId": {
                      "projectRepoId": {
                        "projectId": "string",
                        "repoName": "string"
                      },
                      "uid": "string"
                    },
                    "revisionId": "string"
                  },
                  "gerrit": {
                    "aliasContext": {
                      "kind": "KIND_UNSPECIFIED",
                      "name": "string"
                    },
                    "gerritProject": "string",
                    "hostUri": "string",
                    "revisionId": "string"
                  },
                  "git": {
                    "revisionId": "string",
                    "url": "string"
                  },
                  "labels": {
                    "property1": "string",
                    "property2": "string"
                  }
                }
              ],
              "artifactStorageSourceUri": "string",
              "context": {
                "cloudRepo": {
                  "aliasContext": {
                    "kind": "KIND_UNSPECIFIED",
                    "name": "string"
                  },
                  "repoId": {
                    "projectRepoId": {
                      "projectId": "string",
                      "repoName": "string"
                    },
                    "uid": "string"
                  },
                  "revisionId": "string"
                },
                "gerrit": {
                  "aliasContext": {
                    "kind": "KIND_UNSPECIFIED",
                    "name": "string"
                  },
                  "gerritProject": "string",
                  "hostUri": "string",
                  "revisionId": "string"
                },
                "git": {
                  "revisionId": "string",
                  "url": "string"
                },
                "labels": {
                  "property1": "string",
                  "property2": "string"
                }
              },
              "fileHashes": {
                "property1": {
                  "fileHash": [
                    {
                      "type": "HASH_TYPE_UNSPECIFIED",
                      "value": "string"
                    }
                  ]
                },
                "property2": {
                  "fileHash": [
                    {
                      "type": "HASH_TYPE_UNSPECIFIED",
                      "value": "string"
                    }
                  ]
                }
              }
            },
            "startTime": "string",
            "triggerId": "string"
          },
          "provenanceBytes": "string"
        },
        "createTime": "string",
        "deployment": {
          "deployment": {
            "address": "string",
            "config": "string",
            "deployTime": "string",
            "platform": "PLATFORM_UNSPECIFIED",
            "resourceUri": [
              "string"
            ],
            "undeployTime": "string",
            "userEmail": "string"
          }
        },
        "derivedImage": {
          "derivedImage": {
            "baseResourceUrl": "string",
            "distance": 0,
            "fingerprint": {
              "v1Name": "string",
              "v2Blob": [
                "string"
              ],
              "v2Name": "string"
            },
            "layerInfo": [
              {
                "arguments": "string",
                "directive": "DIRECTIVE_UNSPECIFIED"
              }
            ]
          }
        },
        "discovered": {
          "discovered": {
            "analysisCompleted": {
              "analysisType": [
                "string"
              ]
            },
            "analysisError": [
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
            ],
            "analysisStatus": "ANALYSIS_STATUS_UNSPECIFIED",
            "analysisStatusError": {
              "code": 0,
              "details": [
                {
                  "property1": null,
                  "property2": null
                }
              ],
              "message": "string"
            },
            "continuousAnalysis": "CONTINUOUS_ANALYSIS_UNSPECIFIED",
            "lastAnalysisTime": "string"
          }
        },
        "envelope": {
          "payload": "string",
          "payloadType": "string",
          "signatures": [
            {
              "keyid": "string",
              "sig": "string"
            }
          ]
        },
        "installation": {
          "installation": {
            "license": {
              "comments": "string",
              "expression": "string"
            },
            "location": [
              {
                "cpeUri": "string",
                "path": "string",
                "version": {
                  "epoch": 0,
                  "inclusive": true,
                  "kind": "VERSION_KIND_UNSPECIFIED",
                  "name": "string",
                  "revision": "string"
                }
              }
            ]
          }
        },
        "intoto": {
          "signatures": [
            {
              "keyid": "string",
              "sig": "string"
            }
          ],
          "signed": {
            "byproducts": {
              "customValues": {
                "property1": "string",
                "property2": "string"
              }
            },
            "command": [
              "string"
            ],
            "environment": {
              "customValues": {
                "property1": "string",
                "property2": "string"
              }
            },
            "materials": [
              {
                "hashes": {
                  "sha256": "string"
                },
                "resourceUri": "string"
              }
            ],
            "products": [
              {
                "hashes": {
                  "sha256": "string"
                },
                "resourceUri": "string"
              }
            ]
          }
        },
        "kind": "NOTE_KIND_UNSPECIFIED",
        "name": "string",
        "noteName": "string",
        "remediation": "string",
        "resource": {
          "contentHash": {
            "type": "HASH_TYPE_UNSPECIFIED",
            "value": "string"
          },
          "name": "string",
          "uri": "string"
        },
        "sbom": {
          "createTime": "string",
          "creatorComment": "string",
          "creators": [
            "string"
          ],
          "documentComment": "string",
          "externalDocumentRefs": [
            "string"
          ],
          "id": "string",
          "licenseListVersion": "string",
          "namespace": "string",
          "title": "string"
        },
        "sbomReference": {
          "payload": {
            "_type": "string",
            "predicate": {
              "digest": {
                "property1": "string",
                "property2": "string"
              },
              "location": "string",
              "mimeType": "string",
              "referrerId": "string"
            },
            "predicateType": "string",
            "subject": [
              {
                "digest": {
                  "property1": "string",
                  "property2": "string"
                },
                "name": "string"
              }
            ]
          },
          "payloadType": "string",
          "signatures": [
            {
              "keyid": "string",
              "sig": "string"
            }
          ]
        },
        "spdxFile": {
          "attributions": [
            "string"
          ],
          "comment": "string",
          "contributors": [
            "string"
          ],
          "copyright": "string",
          "filesLicenseInfo": [
            "string"
          ],
          "id": "string",
          "licenseConcluded": {
            "comments": "string",
            "expression": "string"
          },
          "notice": "string"
        },
        "spdxPackage": {
          "comment": "string",
          "filename": "string",
          "id": "string",
          "licenseConcluded": {
            "comments": "string",
            "expression": "string"
          },
          "sourceInfo": "string"
        },
        "spdxRelationship": {
          "comment": "string",
          "source": "string",
          "target": "string"
        },
        "updateTime": "string",
        "vulnerability": {
          "cvssScore": 0,
          "cvssV2": {
            "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
            "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
            "authentication": "AUTHENTICATION_UNSPECIFIED",
            "availabilityImpact": "IMPACT_UNSPECIFIED",
            "baseScore": 0,
            "confidentialityImpact": "IMPACT_UNSPECIFIED",
            "exploitabilityScore": 0,
            "impactScore": 0,
            "integrityImpact": "IMPACT_UNSPECIFIED",
            "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
            "scope": "SCOPE_UNSPECIFIED",
            "userInteraction": "USER_INTERACTION_UNSPECIFIED"
          },
          "cvssV3": {
            "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
            "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
            "authentication": "AUTHENTICATION_UNSPECIFIED",
            "availabilityImpact": "IMPACT_UNSPECIFIED",
            "baseScore": 0,
            "confidentialityImpact": "IMPACT_UNSPECIFIED",
            "exploitabilityScore": 0,
            "impactScore": 0,
            "integrityImpact": "IMPACT_UNSPECIFIED",
            "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
            "scope": "SCOPE_UNSPECIFIED",
            "userInteraction": "USER_INTERACTION_UNSPECIFIED"
          },
          "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
          "effectiveSeverity": "SEVERITY_UNSPECIFIED",
          "longDescription": "string",
          "packageIssue": [
            {
              "affectedLocation": {
                "cpeUri": "string",
                "package": "string",
                "version": {
                  "epoch": 0,
                  "inclusive": true,
                  "kind": "VERSION_KIND_UNSPECIFIED",
                  "name": "string",
                  "revision": "string"
                }
              },
              "fixedLocation": {
                "cpeUri": "string",
                "package": "string",
                "version": {
                  "epoch": 0,
                  "inclusive": true,
                  "kind": "VERSION_KIND_UNSPECIFIED",
                  "name": "string",
                  "revision": "string"
                }
              },
              "packageType": "string",
              "severityName": "string"
            }
          ],
          "relatedUrls": [
            {
              "label": "string",
              "url": "string"
            }
          ],
          "severity": "SEVERITY_UNSPECIFIED",
          "shortDescription": "string",
          "type": "string",
          "vexAssessment": {
            "cve": "string",
            "impacts": [
              "string"
            ],
            "justification": {
              "details": "string",
              "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
            },
            "noteName": "string",
            "relatedUris": [
              {
                "label": "string",
                "url": "string"
              }
            ],
            "remediations": [
              {
                "details": "string",
                "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
                "remediationUri": {
                  "label": "string",
                  "url": "string"
                }
              }
            ],
            "state": "STATE_UNSPECIFIED"
          }
        }
      }
    ]
  }'
```

`POST /v1beta1/{parent}/occurrences:batchCreate`

Creates new occurrences in batch.

> Body parameter

```json
{
  "occurrences": [
    {
      "attestation": {
        "attestation": {
          "genericSignedAttestation": {
            "contentType": "CONTENT_TYPE_UNSPECIFIED",
            "serializedPayload": "string",
            "signatures": [
              {
                "publicKeyId": "string",
                "signature": "string"
              }
            ]
          },
          "pgpSignedAttestation": {
            "contentType": "CONTENT_TYPE_UNSPECIFIED",
            "pgpKeyId": "string",
            "signature": "string"
          }
        }
      },
      "build": {
        "provenance": {
          "buildOptions": {
            "property1": "string",
            "property2": "string"
          },
          "builderVersion": "string",
          "builtArtifacts": [
            {
              "checksum": "string",
              "id": "string",
              "names": [
                "string"
              ]
            }
          ],
          "commands": [
            {
              "args": [
                "string"
              ],
              "dir": "string",
              "env": [
                "string"
              ],
              "id": "string",
              "name": "string",
              "waitFor": [
                "string"
              ]
            }
          ],
          "createTime": "string",
          "creator": "string",
          "endTime": "string",
          "id": "string",
          "logsUri": "string",
          "projectId": "string",
          "sourceProvenance": {
            "additionalContexts": [
              {
                "cloudRepo": {
                  "aliasContext": {
                    "kind": "KIND_UNSPECIFIED",
                    "name": "string"
                  },
                  "repoId": {
                    "projectRepoId": {
                      "projectId": "string",
                      "repoName": "string"
                    },
                    "uid": "string"
                  },
                  "revisionId": "string"
                },
                "gerrit": {
                  "aliasContext": {
                    "kind": "KIND_UNSPECIFIED",
                    "name": "string"
                  },
                  "gerritProject": "string",
                  "hostUri": "string",
                  "revisionId": "string"
                },
                "git": {
                  "revisionId": "string",
                  "url": "string"
                },
                "labels": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            ],
            "artifactStorageSourceUri": "string",
            "context": {
              "cloudRepo": {
                "aliasContext": {
                  "kind": "KIND_UNSPECIFIED",
                  "name": "string"
                },
                "repoId": {
                  "projectRepoId": {
                    "projectId": "string",
                    "repoName": "string"
                  },
                  "uid": "string"
                },
                "revisionId": "string"
              },
              "gerrit": {
                "aliasContext": {
                  "kind": "KIND_UNSPECIFIED",
                  "name": "string"
                },
                "gerritProject": "string",
                "hostUri": "string",
                "revisionId": "string"
              },
              "git": {
                "revisionId": "string",
                "url": "string"
              },
              "labels": {
                "property1": "string",
                "property2": "string"
              }
            },
            "fileHashes": {
              "property1": {
                "fileHash": [
                  {
                    "type": "HASH_TYPE_UNSPECIFIED",
                    "value": "string"
                  }
                ]
              },
              "property2": {
                "fileHash": [
                  {
                    "type": "HASH_TYPE_UNSPECIFIED",
                    "value": "string"
                  }
                ]
              }
            }
          },
          "startTime": "string",
          "triggerId": "string"
        },
        "provenanceBytes": "string"
      },
      "createTime": "string",
      "deployment": {
        "deployment": {
          "address": "string",
          "config": "string",
          "deployTime": "string",
          "platform": "PLATFORM_UNSPECIFIED",
          "resourceUri": [
            "string"
          ],
          "undeployTime": "string",
          "userEmail": "string"
        }
      },
      "derivedImage": {
        "derivedImage": {
          "baseResourceUrl": "string",
          "distance": 0,
          "fingerprint": {
            "v1Name": "string",
            "v2Blob": [
              "string"
            ],
            "v2Name": "string"
          },
          "layerInfo": [
            {
              "arguments": "string",
              "directive": "DIRECTIVE_UNSPECIFIED"
            }
          ]
        }
      },
      "discovered": {
        "discovered": {
          "analysisCompleted": {
            "analysisType": [
              "string"
            ]
          },
          "analysisError": [
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
          ],
          "analysisStatus": "ANALYSIS_STATUS_UNSPECIFIED",
          "analysisStatusError": {
            "code": 0,
            "details": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "message": "string"
          },
          "continuousAnalysis": "CONTINUOUS_ANALYSIS_UNSPECIFIED",
          "lastAnalysisTime": "string"
        }
      },
      "envelope": {
        "payload": "string",
        "payloadType": "string",
        "signatures": [
          {
            "keyid": "string",
            "sig": "string"
          }
        ]
      },
      "installation": {
        "installation": {
          "license": {
            "comments": "string",
            "expression": "string"
          },
          "location": [
            {
              "cpeUri": "string",
              "path": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            }
          ]
        }
      },
      "intoto": {
        "signatures": [
          {
            "keyid": "string",
            "sig": "string"
          }
        ],
        "signed": {
          "byproducts": {
            "customValues": {
              "property1": "string",
              "property2": "string"
            }
          },
          "command": [
            "string"
          ],
          "environment": {
            "customValues": {
              "property1": "string",
              "property2": "string"
            }
          },
          "materials": [
            {
              "hashes": {
                "sha256": "string"
              },
              "resourceUri": "string"
            }
          ],
          "products": [
            {
              "hashes": {
                "sha256": "string"
              },
              "resourceUri": "string"
            }
          ]
        }
      },
      "kind": "NOTE_KIND_UNSPECIFIED",
      "name": "string",
      "noteName": "string",
      "remediation": "string",
      "resource": {
        "contentHash": {
          "type": "HASH_TYPE_UNSPECIFIED",
          "value": "string"
        },
        "name": "string",
        "uri": "string"
      },
      "sbom": {
        "createTime": "string",
        "creatorComment": "string",
        "creators": [
          "string"
        ],
        "documentComment": "string",
        "externalDocumentRefs": [
          "string"
        ],
        "id": "string",
        "licenseListVersion": "string",
        "namespace": "string",
        "title": "string"
      },
      "sbomReference": {
        "payload": {
          "_type": "string",
          "predicate": {
            "digest": {
              "property1": "string",
              "property2": "string"
            },
            "location": "string",
            "mimeType": "string",
            "referrerId": "string"
          },
          "predicateType": "string",
          "subject": [
            {
              "digest": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string"
            }
          ]
        },
        "payloadType": "string",
        "signatures": [
          {
            "keyid": "string",
            "sig": "string"
          }
        ]
      },
      "spdxFile": {
        "attributions": [
          "string"
        ],
        "comment": "string",
        "contributors": [
          "string"
        ],
        "copyright": "string",
        "filesLicenseInfo": [
          "string"
        ],
        "id": "string",
        "licenseConcluded": {
          "comments": "string",
          "expression": "string"
        },
        "notice": "string"
      },
      "spdxPackage": {
        "comment": "string",
        "filename": "string",
        "id": "string",
        "licenseConcluded": {
          "comments": "string",
          "expression": "string"
        },
        "sourceInfo": "string"
      },
      "spdxRelationship": {
        "comment": "string",
        "source": "string",
        "target": "string"
      },
      "updateTime": "string",
      "vulnerability": {
        "cvssScore": 0,
        "cvssV2": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "authentication": "AUTHENTICATION_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssV3": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "authentication": "AUTHENTICATION_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
        "effectiveSeverity": "SEVERITY_UNSPECIFIED",
        "longDescription": "string",
        "packageIssue": [
          {
            "affectedLocation": {
              "cpeUri": "string",
              "package": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            },
            "fixedLocation": {
              "cpeUri": "string",
              "package": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            },
            "packageType": "string",
            "severityName": "string"
          }
        ],
        "relatedUrls": [
          {
            "label": "string",
            "url": "string"
          }
        ],
        "severity": "SEVERITY_UNSPECIFIED",
        "shortDescription": "string",
        "type": "string",
        "vexAssessment": {
          "cve": "string",
          "impacts": [
            "string"
          ],
          "justification": {
            "details": "string",
            "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
          },
          "noteName": "string",
          "relatedUris": [
            {
              "label": "string",
              "url": "string"
            }
          ],
          "remediations": [
            {
              "details": "string",
              "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
              "remediationUri": {
                "label": "string",
                "url": "string"
              }
            }
          ],
          "state": "STATE_UNSPECIFIED"
        }
      }
    }
  ]
}
```

<h3 id="containeranalysisprojectsoccurrencesbatchcreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrences are to be created.|
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
|body|body|[BatchCreateOccurrencesRequest](#schemabatchcreateoccurrencesrequest)|false|none|
|» occurrences|body|[[Occurrence](#schemaoccurrence)]|false|Required. The occurrences to create. Max allowed length is 1000.|

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
  "occurrences": [
    {
      "attestation": {
        "attestation": {
          "genericSignedAttestation": {
            "contentType": "CONTENT_TYPE_UNSPECIFIED",
            "serializedPayload": "string",
            "signatures": [
              {
                "publicKeyId": "string",
                "signature": "string"
              }
            ]
          },
          "pgpSignedAttestation": {
            "contentType": "CONTENT_TYPE_UNSPECIFIED",
            "pgpKeyId": "string",
            "signature": "string"
          }
        }
      },
      "build": {
        "provenance": {
          "buildOptions": {
            "property1": "string",
            "property2": "string"
          },
          "builderVersion": "string",
          "builtArtifacts": [
            {
              "checksum": "string",
              "id": "string",
              "names": [
                "string"
              ]
            }
          ],
          "commands": [
            {
              "args": [
                "string"
              ],
              "dir": "string",
              "env": [
                "string"
              ],
              "id": "string",
              "name": "string",
              "waitFor": [
                "string"
              ]
            }
          ],
          "createTime": "string",
          "creator": "string",
          "endTime": "string",
          "id": "string",
          "logsUri": "string",
          "projectId": "string",
          "sourceProvenance": {
            "additionalContexts": [
              {
                "cloudRepo": {
                  "aliasContext": {
                    "kind": "KIND_UNSPECIFIED",
                    "name": "string"
                  },
                  "repoId": {
                    "projectRepoId": {
                      "projectId": "string",
                      "repoName": "string"
                    },
                    "uid": "string"
                  },
                  "revisionId": "string"
                },
                "gerrit": {
                  "aliasContext": {
                    "kind": "KIND_UNSPECIFIED",
                    "name": "string"
                  },
                  "gerritProject": "string",
                  "hostUri": "string",
                  "revisionId": "string"
                },
                "git": {
                  "revisionId": "string",
                  "url": "string"
                },
                "labels": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            ],
            "artifactStorageSourceUri": "string",
            "context": {
              "cloudRepo": {
                "aliasContext": {
                  "kind": "KIND_UNSPECIFIED",
                  "name": "string"
                },
                "repoId": {
                  "projectRepoId": {
                    "projectId": "string",
                    "repoName": "string"
                  },
                  "uid": "string"
                },
                "revisionId": "string"
              },
              "gerrit": {
                "aliasContext": {
                  "kind": "KIND_UNSPECIFIED",
                  "name": "string"
                },
                "gerritProject": "string",
                "hostUri": "string",
                "revisionId": "string"
              },
              "git": {
                "revisionId": "string",
                "url": "string"
              },
              "labels": {
                "property1": "string",
                "property2": "string"
              }
            },
            "fileHashes": {
              "property1": {
                "fileHash": [
                  {
                    "type": "HASH_TYPE_UNSPECIFIED",
                    "value": "string"
                  }
                ]
              },
              "property2": {
                "fileHash": [
                  {
                    "type": "HASH_TYPE_UNSPECIFIED",
                    "value": "string"
                  }
                ]
              }
            }
          },
          "startTime": "string",
          "triggerId": "string"
        },
        "provenanceBytes": "string"
      },
      "createTime": "string",
      "deployment": {
        "deployment": {
          "address": "string",
          "config": "string",
          "deployTime": "string",
          "platform": "PLATFORM_UNSPECIFIED",
          "resourceUri": [
            "string"
          ],
          "undeployTime": "string",
          "userEmail": "string"
        }
      },
      "derivedImage": {
        "derivedImage": {
          "baseResourceUrl": "string",
          "distance": 0,
          "fingerprint": {
            "v1Name": "string",
            "v2Blob": [
              "string"
            ],
            "v2Name": "string"
          },
          "layerInfo": [
            {
              "arguments": "string",
              "directive": "DIRECTIVE_UNSPECIFIED"
            }
          ]
        }
      },
      "discovered": {
        "discovered": {
          "analysisCompleted": {
            "analysisType": [
              "string"
            ]
          },
          "analysisError": [
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
          ],
          "analysisStatus": "ANALYSIS_STATUS_UNSPECIFIED",
          "analysisStatusError": {
            "code": 0,
            "details": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "message": "string"
          },
          "continuousAnalysis": "CONTINUOUS_ANALYSIS_UNSPECIFIED",
          "lastAnalysisTime": "string"
        }
      },
      "envelope": {
        "payload": "string",
        "payloadType": "string",
        "signatures": [
          {
            "keyid": "string",
            "sig": "string"
          }
        ]
      },
      "installation": {
        "installation": {
          "architecture": "ARCHITECTURE_UNSPECIFIED",
          "cpeUri": "string",
          "license": {
            "comments": "string",
            "expression": "string"
          },
          "location": [
            {
              "cpeUri": "string",
              "path": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            }
          ],
          "name": "string",
          "packageType": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        }
      },
      "intoto": {
        "signatures": [
          {
            "keyid": "string",
            "sig": "string"
          }
        ],
        "signed": {
          "byproducts": {
            "customValues": {
              "property1": "string",
              "property2": "string"
            }
          },
          "command": [
            "string"
          ],
          "environment": {
            "customValues": {
              "property1": "string",
              "property2": "string"
            }
          },
          "materials": [
            {
              "hashes": {
                "sha256": "string"
              },
              "resourceUri": "string"
            }
          ],
          "products": [
            {
              "hashes": {
                "sha256": "string"
              },
              "resourceUri": "string"
            }
          ]
        }
      },
      "kind": "NOTE_KIND_UNSPECIFIED",
      "name": "string",
      "noteName": "string",
      "remediation": "string",
      "resource": {
        "contentHash": {
          "type": "HASH_TYPE_UNSPECIFIED",
          "value": "string"
        },
        "name": "string",
        "uri": "string"
      },
      "sbom": {
        "createTime": "string",
        "creatorComment": "string",
        "creators": [
          "string"
        ],
        "documentComment": "string",
        "externalDocumentRefs": [
          "string"
        ],
        "id": "string",
        "licenseListVersion": "string",
        "namespace": "string",
        "title": "string"
      },
      "sbomReference": {
        "payload": {
          "_type": "string",
          "predicate": {
            "digest": {
              "property1": "string",
              "property2": "string"
            },
            "location": "string",
            "mimeType": "string",
            "referrerId": "string"
          },
          "predicateType": "string",
          "subject": [
            {
              "digest": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string"
            }
          ]
        },
        "payloadType": "string",
        "signatures": [
          {
            "keyid": "string",
            "sig": "string"
          }
        ]
      },
      "spdxFile": {
        "attributions": [
          "string"
        ],
        "comment": "string",
        "contributors": [
          "string"
        ],
        "copyright": "string",
        "filesLicenseInfo": [
          "string"
        ],
        "id": "string",
        "licenseConcluded": {
          "comments": "string",
          "expression": "string"
        },
        "notice": "string"
      },
      "spdxPackage": {
        "comment": "string",
        "filename": "string",
        "homePage": "string",
        "id": "string",
        "licenseConcluded": {
          "comments": "string",
          "expression": "string"
        },
        "packageType": "string",
        "sourceInfo": "string",
        "summaryDescription": "string",
        "title": "string",
        "version": "string"
      },
      "spdxRelationship": {
        "comment": "string",
        "source": "string",
        "target": "string",
        "type": "RELATIONSHIP_TYPE_UNSPECIFIED"
      },
      "updateTime": "string",
      "vulnerability": {
        "cvssScore": 0,
        "cvssV2": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "authentication": "AUTHENTICATION_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssV3": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "authentication": "AUTHENTICATION_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
        "effectiveSeverity": "SEVERITY_UNSPECIFIED",
        "longDescription": "string",
        "packageIssue": [
          {
            "affectedLocation": {
              "cpeUri": "string",
              "package": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            },
            "effectiveSeverity": "SEVERITY_UNSPECIFIED",
            "fixedLocation": {
              "cpeUri": "string",
              "package": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            },
            "packageType": "string",
            "severityName": "string"
          }
        ],
        "relatedUrls": [
          {
            "label": "string",
            "url": "string"
          }
        ],
        "severity": "SEVERITY_UNSPECIFIED",
        "shortDescription": "string",
        "type": "string",
        "vexAssessment": {
          "cve": "string",
          "impacts": [
            "string"
          ],
          "justification": {
            "details": "string",
            "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
          },
          "noteName": "string",
          "relatedUris": [
            {
              "label": "string",
              "url": "string"
            }
          ],
          "remediations": [
            {
              "details": "string",
              "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
              "remediationUri": {
                "label": "string",
                "url": "string"
              }
            }
          ],
          "state": "STATE_UNSPECIFIED"
        }
      }
    }
  ]
}
```

<h3 id="containeranalysisprojectsoccurrencesbatchcreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchCreateOccurrencesResponse](#schemabatchcreateoccurrencesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## containeranalysis.projects.occurrences.getVulnerabilitySummary

<a id="opIdcontaineranalysis.projects.occurrences.getVulnerabilitySummary"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/occurrences:vulnerabilitySummary \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/occurrences:vulnerabilitySummary`

Gets a summary of the number and severity of occurrences.

<h3 id="containeranalysisprojectsoccurrencesgetvulnerabilitysummary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project to get a vulnerability summary for in the form of `projects/[PROJECT_ID]`.|
|filter|query|string|false|The filter expression.|
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
  "counts": [
    {
      "fixableCount": "string",
      "resource": {
        "contentHash": {
          "type": "HASH_TYPE_UNSPECIFIED",
          "value": "string"
        },
        "name": "string",
        "uri": "string"
      },
      "severity": "SEVERITY_UNSPECIFIED",
      "totalCount": "string"
    }
  ]
}
```

<h3 id="containeranalysisprojectsoccurrencesgetvulnerabilitysummary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[VulnerabilityOccurrencesSummary](#schemavulnerabilityoccurrencessummary)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## containeranalysis.projects.occurrences.getIamPolicy

<a id="opIdcontaineranalysis.projects.occurrences.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:getIamPolicy \
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

`POST /v1beta1/{resource}:getIamPolicy`

Gets the access control policy for a note or an occurrence resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.

> Body parameter

```json
{
  "options": {
    "requestedPolicyVersion": 0
  }
}
```

<h3 id="containeranalysisprojectsoccurrencesgetiampolicy-parameters">Parameters</h3>

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
|body|body|[GetIamPolicyRequest](#schemagetiampolicyrequest)|false|none|
|» options|body|[GetPolicyOptions](#schemagetpolicyoptions)|false|OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.|

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

<h3 id="containeranalysisprojectsoccurrencesgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## containeranalysis.projects.occurrences.setIamPolicy

<a id="opIdcontaineranalysis.projects.occurrences.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:setIamPolicy \
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

`POST /v1beta1/{resource}:setIamPolicy`

Sets the access control policy on the specified note or occurrence. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or an occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.

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

<h3 id="containeranalysisprojectsoccurrencessetiampolicy-parameters">Parameters</h3>

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
|body|body|[SetIamPolicyRequest](#schemasetiampolicyrequest)|false|none|
|» policy|body|[Policy](#schemapolicy)|false|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|

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

<h3 id="containeranalysisprojectsoccurrencessetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## containeranalysis.projects.occurrences.testIamPermissions

<a id="opIdcontaineranalysis.projects.occurrences.testIamPermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:testIamPermissions \
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

`POST /v1beta1/{resource}:testIamPermissions`

Returns the permissions that a caller has on the specified note or occurrence. Requires list permission on the project (for example, `containeranalysis.notes.list`). The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="containeranalysisprojectsoccurrencestestiampermissions-parameters">Parameters</h3>

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
|body|body|[TestIamPermissionsRequest](#schematestiampermissionsrequest)|false|none|
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

<h3 id="containeranalysisprojectsoccurrencestestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestIamPermissionsResponse](#schematestiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AliasContext">AliasContext</h2>
<!-- backwards compatibility -->
<a id="schemaaliascontext"></a>
<a id="schema_AliasContext"></a>
<a id="tocSaliascontext"></a>
<a id="tocsaliascontext"></a>

```json
{
  "kind": "KIND_UNSPECIFIED",
  "name": "string"
}
```

An alias to a repo revision.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|The alias kind.|
|name|string|false|none|The alias name.|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|KIND_UNSPECIFIED|
|kind|FIXED|
|kind|MOVABLE|
|kind|OTHER|

<h2 id="tocS_AnalysisCompleted">AnalysisCompleted</h2>
<!-- backwards compatibility -->
<a id="schemaanalysiscompleted"></a>
<a id="schema_AnalysisCompleted"></a>
<a id="tocSanalysiscompleted"></a>
<a id="tocsanalysiscompleted"></a>

```json
{
  "analysisType": [
    "string"
  ]
}
```

Indicates which analysis completed successfully. Multiple types of analysis can be performed on a single resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analysisType|[string]|false|none|none|

<h2 id="tocS_Artifact">Artifact</h2>
<!-- backwards compatibility -->
<a id="schemaartifact"></a>
<a id="schema_Artifact"></a>
<a id="tocSartifact"></a>
<a id="tocsartifact"></a>

```json
{
  "checksum": "string",
  "id": "string",
  "names": [
    "string"
  ]
}
```

Artifact describes a build product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checksum|string|false|none|Hash or checksum value of a binary, or Docker Registry 2.0 digest of a container.|
|id|string|false|none|Artifact ID, if any; for container images, this will be a URL by digest like `gcr.io/projectID/imagename@sha256:123456`.|
|names|[string]|false|none|Related artifact names. This may be the path to a binary or jar file, or in the case of a container build, the name used to push the container image to Google Container Registry, as presented to `docker push`. Note that a single Artifact ID can have multiple names, for example if two tags are applied to one image.|

<h2 id="tocS_ArtifactHashes">ArtifactHashes</h2>
<!-- backwards compatibility -->
<a id="schemaartifacthashes"></a>
<a id="schema_ArtifactHashes"></a>
<a id="tocSartifacthashes"></a>
<a id="tocsartifacthashes"></a>

```json
{
  "sha256": "string"
}
```

Defines a hash object for use in Materials and Products.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sha256|string|false|none|none|

<h2 id="tocS_ArtifactRule">ArtifactRule</h2>
<!-- backwards compatibility -->
<a id="schemaartifactrule"></a>
<a id="schema_ArtifactRule"></a>
<a id="tocSartifactrule"></a>
<a id="tocsartifactrule"></a>

```json
{
  "artifactRule": [
    "string"
  ]
}
```

Defines an object to declare an in-toto artifact rule

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artifactRule|[string]|false|none|none|

<h2 id="tocS_Assessment">Assessment</h2>
<!-- backwards compatibility -->
<a id="schemaassessment"></a>
<a id="schema_Assessment"></a>
<a id="tocSassessment"></a>
<a id="tocsassessment"></a>

```json
{
  "cve": "string",
  "impacts": [
    "string"
  ],
  "justification": {
    "details": "string",
    "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
  },
  "longDescription": "string",
  "relatedUris": [
    {
      "label": "string",
      "url": "string"
    }
  ],
  "remediations": [
    {
      "details": "string",
      "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
      "remediationUri": {
        "label": "string",
        "url": "string"
      }
    }
  ],
  "shortDescription": "string",
  "state": "STATE_UNSPECIFIED"
}
```

Assessment provides all information that is related to a single vulnerability for this product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cve|string|false|none|Holds the MITRE standard Common Vulnerabilities and Exposures (CVE) tracking number for the vulnerability.|
|impacts|[string]|false|none|Contains information about the impact of this vulnerability, this will change with time.|
|justification|[Justification](#schemajustification)|false|none|Justification provides the justification when the state of the assessment if NOT_AFFECTED.|
|longDescription|string|false|none|A detailed description of this Vex.|
|relatedUris|[[RelatedUrl](#schemarelatedurl)]|false|none|Holds a list of references associated with this vulnerability item and assessment. These uris have additional information about the vulnerability and the assessment itself. E.g. Link to a document which details how this assessment concluded the state of this vulnerability.|
|remediations|[[Remediation](#schemaremediation)]|false|none|Specifies details on how to handle (and presumably, fix) a vulnerability.|
|shortDescription|string|false|none|A one sentence description of this Vex.|
|state|string|false|none|Provides the state of this Vulnerability assessment.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|AFFECTED|
|state|NOT_AFFECTED|
|state|FIXED|
|state|UNDER_INVESTIGATION|

<h2 id="tocS_Attestation">Attestation</h2>
<!-- backwards compatibility -->
<a id="schemaattestation"></a>
<a id="schema_Attestation"></a>
<a id="tocSattestation"></a>
<a id="tocsattestation"></a>

```json
{
  "genericSignedAttestation": {
    "contentType": "CONTENT_TYPE_UNSPECIFIED",
    "serializedPayload": "string",
    "signatures": [
      {
        "publicKeyId": "string",
        "signature": "string"
      }
    ]
  },
  "pgpSignedAttestation": {
    "contentType": "CONTENT_TYPE_UNSPECIFIED",
    "pgpKeyId": "string",
    "signature": "string"
  }
}
```

Occurrence that represents a single "attestation". The authenticity of an attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the authority to which this attestation is attached is primarily useful for look-up (how to find this attestation if you already know the authority and artifact to be verified) and intent (which authority was this attestation intended to sign for).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|genericSignedAttestation|[GenericSignedAttestation](#schemagenericsignedattestation)|false|none|An attestation wrapper that uses the Grafeas `Signature` message. This attestation must define the `serialized_payload` that the `signatures` verify and any metadata necessary to interpret that plaintext. The signatures should always be over the `serialized_payload` bytestring.|
|pgpSignedAttestation|[PgpSignedAttestation](#schemapgpsignedattestation)|false|none|A PGP signed attestation.|

<h2 id="tocS_Authority">Authority</h2>
<!-- backwards compatibility -->
<a id="schemaauthority"></a>
<a id="schema_Authority"></a>
<a id="tocSauthority"></a>
<a id="tocsauthority"></a>

```json
{
  "hint": {
    "humanReadableName": "string"
  }
}
```

Note kind that represents a logical attestation "role" or "authority". For example, an organization might have one `Authority` for "QA" and one for "build". This note is intended to act strictly as a grouping mechanism for the attached occurrences (Attestations). This grouping mechanism also provides a security boundary, since IAM ACLs gate the ability for a principle to attach an occurrence to a given note. It also provides a single point of lookup to find all attached attestation occurrences, even if they don't all live in the same project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hint|[Hint](#schemahint)|false|none|Hint hints at the purpose of the attestation authority.|

<h2 id="tocS_Basis">Basis</h2>
<!-- backwards compatibility -->
<a id="schemabasis"></a>
<a id="schema_Basis"></a>
<a id="tocSbasis"></a>
<a id="tocsbasis"></a>

```json
{
  "fingerprint": {
    "v1Name": "string",
    "v2Blob": [
      "string"
    ],
    "v2Name": "string"
  },
  "resourceUrl": "string"
}
```

Basis describes the base image portion (Note) of the DockerImage relationship. Linked occurrences are derived from this or an equivalent image via: FROM Or an equivalent reference, e.g. a tag of the resource_url.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fingerprint|[Fingerprint](#schemafingerprint)|false|none|Required. Immutable. The fingerprint of the base image.|
|resourceUrl|string|false|none|Required. Immutable. The resource_url for the resource representing the basis of associated occurrence images.|

<h2 id="tocS_BatchCreateNotesRequest">BatchCreateNotesRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreatenotesrequest"></a>
<a id="schema_BatchCreateNotesRequest"></a>
<a id="tocSbatchcreatenotesrequest"></a>
<a id="tocsbatchcreatenotesrequest"></a>

```json
{
  "notes": {
    "property1": {
      "attestationAuthority": {
        "hint": {
          "humanReadableName": "string"
        }
      },
      "baseImage": {
        "fingerprint": {
          "v1Name": "string",
          "v2Blob": [
            "string"
          ],
          "v2Name": "string"
        },
        "resourceUrl": "string"
      },
      "build": {
        "builderVersion": "string",
        "signature": {
          "keyId": "string",
          "keyType": "KEY_TYPE_UNSPECIFIED",
          "publicKey": "string",
          "signature": "string"
        }
      },
      "createTime": "string",
      "deployable": {
        "resourceUri": [
          "string"
        ]
      },
      "discovery": {
        "analysisKind": "NOTE_KIND_UNSPECIFIED"
      },
      "expirationTime": "string",
      "intoto": {
        "expectedCommand": [
          "string"
        ],
        "expectedMaterials": [
          {
            "artifactRule": [
              "string"
            ]
          }
        ],
        "expectedProducts": [
          {
            "artifactRule": [
              "string"
            ]
          }
        ],
        "signingKeys": [
          {
            "keyId": "string",
            "keyScheme": "string",
            "keyType": "string",
            "publicKeyValue": "string"
          }
        ],
        "stepName": "string",
        "threshold": "string"
      },
      "kind": "NOTE_KIND_UNSPECIFIED",
      "longDescription": "string",
      "name": "string",
      "package": {
        "architecture": "ARCHITECTURE_UNSPECIFIED",
        "cpeUri": "string",
        "description": "string",
        "digest": [
          {
            "algo": "string",
            "digestBytes": "string"
          }
        ],
        "distribution": [
          {
            "architecture": "ARCHITECTURE_UNSPECIFIED",
            "cpeUri": "string",
            "description": "string",
            "latestVersion": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            },
            "maintainer": "string",
            "url": "string"
          }
        ],
        "license": {
          "comments": "string",
          "expression": "string"
        },
        "maintainer": "string",
        "name": "string",
        "packageType": "string",
        "url": "string",
        "version": {
          "epoch": 0,
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        }
      },
      "relatedNoteNames": [
        "string"
      ],
      "relatedUrl": [
        {
          "label": "string",
          "url": "string"
        }
      ],
      "sbom": {
        "dataLicence": "string",
        "spdxVersion": "string"
      },
      "sbomReference": {
        "format": "string",
        "version": "string"
      },
      "shortDescription": "string",
      "spdxFile": {
        "checksum": [
          "string"
        ],
        "fileType": "FILE_TYPE_UNSPECIFIED",
        "title": "string"
      },
      "spdxPackage": {
        "analyzed": true,
        "attribution": "string",
        "checksum": "string",
        "copyright": "string",
        "detailedDescription": "string",
        "downloadLocation": "string",
        "externalRefs": [
          {
            "category": "CATEGORY_UNSPECIFIED",
            "comment": "string",
            "locator": "string",
            "type": "string"
          }
        ],
        "filesLicenseInfo": [
          "string"
        ],
        "homePage": "string",
        "licenseDeclared": {
          "comments": "string",
          "expression": "string"
        },
        "originator": "string",
        "packageType": "string",
        "summaryDescription": "string",
        "supplier": "string",
        "title": "string",
        "verificationCode": "string",
        "version": "string"
      },
      "spdxRelationship": {
        "type": "RELATIONSHIP_TYPE_UNSPECIFIED"
      },
      "updateTime": "string",
      "vulnerability": {
        "cvssScore": 0,
        "cvssV2": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "authentication": "AUTHENTICATION_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssV3": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
        "cwe": [
          "string"
        ],
        "details": [
          {
            "cpeUri": "string",
            "description": "string",
            "fixedLocation": {
              "cpeUri": "string",
              "package": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            },
            "isObsolete": true,
            "maxAffectedVersion": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            },
            "minAffectedVersion": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            },
            "package": "string",
            "packageType": "string",
            "severityName": "string",
            "source": "string",
            "sourceUpdateTime": "string",
            "vendor": "string"
          }
        ],
        "severity": "SEVERITY_UNSPECIFIED",
        "sourceUpdateTime": "string",
        "windowsDetails": [
          {
            "cpeUri": "string",
            "description": "string",
            "fixingKbs": [
              {
                "name": "string",
                "url": "string"
              }
            ],
            "name": "string"
          }
        ]
      },
      "vulnerabilityAssessment": {
        "assessment": {
          "cve": "string",
          "impacts": [
            "string"
          ],
          "justification": {
            "details": "string",
            "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
          },
          "longDescription": "string",
          "relatedUris": [
            {
              "label": "string",
              "url": "string"
            }
          ],
          "remediations": [
            {
              "details": "string",
              "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
              "remediationUri": {
                "label": "string",
                "url": "string"
              }
            }
          ],
          "shortDescription": "string",
          "state": "STATE_UNSPECIFIED"
        },
        "languageCode": "string",
        "longDescription": "string",
        "product": {
          "genericUri": "string",
          "id": "string",
          "name": "string"
        },
        "publisher": {
          "issuingAuthority": "string",
          "name": "string",
          "publisherNamespace": "string"
        },
        "shortDescription": "string",
        "title": "string"
      }
    },
    "property2": {
      "attestationAuthority": {
        "hint": {
          "humanReadableName": "string"
        }
      },
      "baseImage": {
        "fingerprint": {
          "v1Name": "string",
          "v2Blob": [
            "string"
          ],
          "v2Name": "string"
        },
        "resourceUrl": "string"
      },
      "build": {
        "builderVersion": "string",
        "signature": {
          "keyId": "string",
          "keyType": "KEY_TYPE_UNSPECIFIED",
          "publicKey": "string",
          "signature": "string"
        }
      },
      "createTime": "string",
      "deployable": {
        "resourceUri": [
          "string"
        ]
      },
      "discovery": {
        "analysisKind": "NOTE_KIND_UNSPECIFIED"
      },
      "expirationTime": "string",
      "intoto": {
        "expectedCommand": [
          "string"
        ],
        "expectedMaterials": [
          {
            "artifactRule": [
              "string"
            ]
          }
        ],
        "expectedProducts": [
          {
            "artifactRule": [
              "string"
            ]
          }
        ],
        "signingKeys": [
          {
            "keyId": "string",
            "keyScheme": "string",
            "keyType": "string",
            "publicKeyValue": "string"
          }
        ],
        "stepName": "string",
        "threshold": "string"
      },
      "kind": "NOTE_KIND_UNSPECIFIED",
      "longDescription": "string",
      "name": "string",
      "package": {
        "architecture": "ARCHITECTURE_UNSPECIFIED",
        "cpeUri": "string",
        "description": "string",
        "digest": [
          {
            "algo": "string",
            "digestBytes": "string"
          }
        ],
        "distribution": [
          {
            "architecture": "ARCHITECTURE_UNSPECIFIED",
            "cpeUri": "string",
            "description": "string",
            "latestVersion": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            },
            "maintainer": "string",
            "url": "string"
          }
        ],
        "license": {
          "comments": "string",
          "expression": "string"
        },
        "maintainer": "string",
        "name": "string",
        "packageType": "string",
        "url": "string",
        "version": {
          "epoch": 0,
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        }
      },
      "relatedNoteNames": [
        "string"
      ],
      "relatedUrl": [
        {
          "label": "string",
          "url": "string"
        }
      ],
      "sbom": {
        "dataLicence": "string",
        "spdxVersion": "string"
      },
      "sbomReference": {
        "format": "string",
        "version": "string"
      },
      "shortDescription": "string",
      "spdxFile": {
        "checksum": [
          "string"
        ],
        "fileType": "FILE_TYPE_UNSPECIFIED",
        "title": "string"
      },
      "spdxPackage": {
        "analyzed": true,
        "attribution": "string",
        "checksum": "string",
        "copyright": "string",
        "detailedDescription": "string",
        "downloadLocation": "string",
        "externalRefs": [
          {
            "category": "CATEGORY_UNSPECIFIED",
            "comment": "string",
            "locator": "string",
            "type": "string"
          }
        ],
        "filesLicenseInfo": [
          "string"
        ],
        "homePage": "string",
        "licenseDeclared": {
          "comments": "string",
          "expression": "string"
        },
        "originator": "string",
        "packageType": "string",
        "summaryDescription": "string",
        "supplier": "string",
        "title": "string",
        "verificationCode": "string",
        "version": "string"
      },
      "spdxRelationship": {
        "type": "RELATIONSHIP_TYPE_UNSPECIFIED"
      },
      "updateTime": "string",
      "vulnerability": {
        "cvssScore": 0,
        "cvssV2": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "authentication": "AUTHENTICATION_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssV3": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
        "cwe": [
          "string"
        ],
        "details": [
          {
            "cpeUri": "string",
            "description": "string",
            "fixedLocation": {
              "cpeUri": "string",
              "package": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            },
            "isObsolete": true,
            "maxAffectedVersion": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            },
            "minAffectedVersion": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            },
            "package": "string",
            "packageType": "string",
            "severityName": "string",
            "source": "string",
            "sourceUpdateTime": "string",
            "vendor": "string"
          }
        ],
        "severity": "SEVERITY_UNSPECIFIED",
        "sourceUpdateTime": "string",
        "windowsDetails": [
          {
            "cpeUri": "string",
            "description": "string",
            "fixingKbs": [
              {
                "name": "string",
                "url": "string"
              }
            ],
            "name": "string"
          }
        ]
      },
      "vulnerabilityAssessment": {
        "assessment": {
          "cve": "string",
          "impacts": [
            "string"
          ],
          "justification": {
            "details": "string",
            "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
          },
          "longDescription": "string",
          "relatedUris": [
            {
              "label": "string",
              "url": "string"
            }
          ],
          "remediations": [
            {
              "details": "string",
              "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
              "remediationUri": {
                "label": "string",
                "url": "string"
              }
            }
          ],
          "shortDescription": "string",
          "state": "STATE_UNSPECIFIED"
        },
        "languageCode": "string",
        "longDescription": "string",
        "product": {
          "genericUri": "string",
          "id": "string",
          "name": "string"
        },
        "publisher": {
          "issuingAuthority": "string",
          "name": "string",
          "publisherNamespace": "string"
        },
        "shortDescription": "string",
        "title": "string"
      }
    }
  }
}
```

Request to create notes in batch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notes|object|false|none|Required. The notes to create, the key is expected to be the note ID. Max allowed length is 1000.|

<h2 id="tocS_BatchCreateNotesResponse">BatchCreateNotesResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreatenotesresponse"></a>
<a id="schema_BatchCreateNotesResponse"></a>
<a id="tocSbatchcreatenotesresponse"></a>
<a id="tocsbatchcreatenotesresponse"></a>

```json
{
  "notes": [
    {
      "attestationAuthority": {
        "hint": {
          "humanReadableName": "string"
        }
      },
      "baseImage": {
        "fingerprint": {
          "v1Name": "string",
          "v2Blob": [
            "string"
          ],
          "v2Name": "string"
        },
        "resourceUrl": "string"
      },
      "build": {
        "builderVersion": "string",
        "signature": {
          "keyId": "string",
          "keyType": "KEY_TYPE_UNSPECIFIED",
          "publicKey": "string",
          "signature": "string"
        }
      },
      "createTime": "string",
      "deployable": {
        "resourceUri": [
          "string"
        ]
      },
      "discovery": {
        "analysisKind": "NOTE_KIND_UNSPECIFIED"
      },
      "expirationTime": "string",
      "intoto": {
        "expectedCommand": [
          "string"
        ],
        "expectedMaterials": [
          {
            "artifactRule": [
              "string"
            ]
          }
        ],
        "expectedProducts": [
          {
            "artifactRule": [
              "string"
            ]
          }
        ],
        "signingKeys": [
          {
            "keyId": "string",
            "keyScheme": "string",
            "keyType": "string",
            "publicKeyValue": "string"
          }
        ],
        "stepName": "string",
        "threshold": "string"
      },
      "kind": "NOTE_KIND_UNSPECIFIED",
      "longDescription": "string",
      "name": "string",
      "package": {
        "architecture": "ARCHITECTURE_UNSPECIFIED",
        "cpeUri": "string",
        "description": "string",
        "digest": [
          {
            "algo": "string",
            "digestBytes": "string"
          }
        ],
        "distribution": [
          {
            "architecture": "ARCHITECTURE_UNSPECIFIED",
            "cpeUri": "string",
            "description": "string",
            "latestVersion": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            },
            "maintainer": "string",
            "url": "string"
          }
        ],
        "license": {
          "comments": "string",
          "expression": "string"
        },
        "maintainer": "string",
        "name": "string",
        "packageType": "string",
        "url": "string",
        "version": {
          "epoch": 0,
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        }
      },
      "relatedNoteNames": [
        "string"
      ],
      "relatedUrl": [
        {
          "label": "string",
          "url": "string"
        }
      ],
      "sbom": {
        "dataLicence": "string",
        "spdxVersion": "string"
      },
      "sbomReference": {
        "format": "string",
        "version": "string"
      },
      "shortDescription": "string",
      "spdxFile": {
        "checksum": [
          "string"
        ],
        "fileType": "FILE_TYPE_UNSPECIFIED",
        "title": "string"
      },
      "spdxPackage": {
        "analyzed": true,
        "attribution": "string",
        "checksum": "string",
        "copyright": "string",
        "detailedDescription": "string",
        "downloadLocation": "string",
        "externalRefs": [
          {
            "category": "CATEGORY_UNSPECIFIED",
            "comment": "string",
            "locator": "string",
            "type": "string"
          }
        ],
        "filesLicenseInfo": [
          "string"
        ],
        "homePage": "string",
        "licenseDeclared": {
          "comments": "string",
          "expression": "string"
        },
        "originator": "string",
        "packageType": "string",
        "summaryDescription": "string",
        "supplier": "string",
        "title": "string",
        "verificationCode": "string",
        "version": "string"
      },
      "spdxRelationship": {
        "type": "RELATIONSHIP_TYPE_UNSPECIFIED"
      },
      "updateTime": "string",
      "vulnerability": {
        "cvssScore": 0,
        "cvssV2": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "authentication": "AUTHENTICATION_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssV3": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
        "cwe": [
          "string"
        ],
        "details": [
          {
            "cpeUri": "string",
            "description": "string",
            "fixedLocation": {
              "cpeUri": "string",
              "package": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            },
            "isObsolete": true,
            "maxAffectedVersion": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            },
            "minAffectedVersion": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            },
            "package": "string",
            "packageType": "string",
            "severityName": "string",
            "source": "string",
            "sourceUpdateTime": "string",
            "vendor": "string"
          }
        ],
        "severity": "SEVERITY_UNSPECIFIED",
        "sourceUpdateTime": "string",
        "windowsDetails": [
          {
            "cpeUri": "string",
            "description": "string",
            "fixingKbs": [
              {
                "name": "string",
                "url": "string"
              }
            ],
            "name": "string"
          }
        ]
      },
      "vulnerabilityAssessment": {
        "assessment": {
          "cve": "string",
          "impacts": [
            "string"
          ],
          "justification": {
            "details": "string",
            "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
          },
          "longDescription": "string",
          "relatedUris": [
            {
              "label": "string",
              "url": "string"
            }
          ],
          "remediations": [
            {
              "details": "string",
              "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
              "remediationUri": {
                "label": "string",
                "url": "string"
              }
            }
          ],
          "shortDescription": "string",
          "state": "STATE_UNSPECIFIED"
        },
        "languageCode": "string",
        "longDescription": "string",
        "product": {
          "genericUri": "string",
          "id": "string",
          "name": "string"
        },
        "publisher": {
          "issuingAuthority": "string",
          "name": "string",
          "publisherNamespace": "string"
        },
        "shortDescription": "string",
        "title": "string"
      }
    }
  ]
}
```

Response for creating notes in batch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notes|[[Note](#schemanote)]|false|none|The notes that were created.|

<h2 id="tocS_BatchCreateOccurrencesRequest">BatchCreateOccurrencesRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreateoccurrencesrequest"></a>
<a id="schema_BatchCreateOccurrencesRequest"></a>
<a id="tocSbatchcreateoccurrencesrequest"></a>
<a id="tocsbatchcreateoccurrencesrequest"></a>

```json
{
  "occurrences": [
    {
      "attestation": {
        "attestation": {
          "genericSignedAttestation": {
            "contentType": "CONTENT_TYPE_UNSPECIFIED",
            "serializedPayload": "string",
            "signatures": [
              {
                "publicKeyId": "string",
                "signature": "string"
              }
            ]
          },
          "pgpSignedAttestation": {
            "contentType": "CONTENT_TYPE_UNSPECIFIED",
            "pgpKeyId": "string",
            "signature": "string"
          }
        }
      },
      "build": {
        "provenance": {
          "buildOptions": {
            "property1": "string",
            "property2": "string"
          },
          "builderVersion": "string",
          "builtArtifacts": [
            {
              "checksum": "string",
              "id": "string",
              "names": [
                "string"
              ]
            }
          ],
          "commands": [
            {
              "args": [
                "string"
              ],
              "dir": "string",
              "env": [
                "string"
              ],
              "id": "string",
              "name": "string",
              "waitFor": [
                "string"
              ]
            }
          ],
          "createTime": "string",
          "creator": "string",
          "endTime": "string",
          "id": "string",
          "logsUri": "string",
          "projectId": "string",
          "sourceProvenance": {
            "additionalContexts": [
              {
                "cloudRepo": {
                  "aliasContext": {
                    "kind": "KIND_UNSPECIFIED",
                    "name": "string"
                  },
                  "repoId": {
                    "projectRepoId": {
                      "projectId": "string",
                      "repoName": "string"
                    },
                    "uid": "string"
                  },
                  "revisionId": "string"
                },
                "gerrit": {
                  "aliasContext": {
                    "kind": "KIND_UNSPECIFIED",
                    "name": "string"
                  },
                  "gerritProject": "string",
                  "hostUri": "string",
                  "revisionId": "string"
                },
                "git": {
                  "revisionId": "string",
                  "url": "string"
                },
                "labels": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            ],
            "artifactStorageSourceUri": "string",
            "context": {
              "cloudRepo": {
                "aliasContext": {
                  "kind": "KIND_UNSPECIFIED",
                  "name": "string"
                },
                "repoId": {
                  "projectRepoId": {
                    "projectId": "string",
                    "repoName": "string"
                  },
                  "uid": "string"
                },
                "revisionId": "string"
              },
              "gerrit": {
                "aliasContext": {
                  "kind": "KIND_UNSPECIFIED",
                  "name": "string"
                },
                "gerritProject": "string",
                "hostUri": "string",
                "revisionId": "string"
              },
              "git": {
                "revisionId": "string",
                "url": "string"
              },
              "labels": {
                "property1": "string",
                "property2": "string"
              }
            },
            "fileHashes": {
              "property1": {
                "fileHash": [
                  {
                    "type": "HASH_TYPE_UNSPECIFIED",
                    "value": "string"
                  }
                ]
              },
              "property2": {
                "fileHash": [
                  {
                    "type": "HASH_TYPE_UNSPECIFIED",
                    "value": "string"
                  }
                ]
              }
            }
          },
          "startTime": "string",
          "triggerId": "string"
        },
        "provenanceBytes": "string"
      },
      "createTime": "string",
      "deployment": {
        "deployment": {
          "address": "string",
          "config": "string",
          "deployTime": "string",
          "platform": "PLATFORM_UNSPECIFIED",
          "resourceUri": [
            "string"
          ],
          "undeployTime": "string",
          "userEmail": "string"
        }
      },
      "derivedImage": {
        "derivedImage": {
          "baseResourceUrl": "string",
          "distance": 0,
          "fingerprint": {
            "v1Name": "string",
            "v2Blob": [
              "string"
            ],
            "v2Name": "string"
          },
          "layerInfo": [
            {
              "arguments": "string",
              "directive": "DIRECTIVE_UNSPECIFIED"
            }
          ]
        }
      },
      "discovered": {
        "discovered": {
          "analysisCompleted": {
            "analysisType": [
              "string"
            ]
          },
          "analysisError": [
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
          ],
          "analysisStatus": "ANALYSIS_STATUS_UNSPECIFIED",
          "analysisStatusError": {
            "code": 0,
            "details": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "message": "string"
          },
          "continuousAnalysis": "CONTINUOUS_ANALYSIS_UNSPECIFIED",
          "lastAnalysisTime": "string"
        }
      },
      "envelope": {
        "payload": "string",
        "payloadType": "string",
        "signatures": [
          {
            "keyid": "string",
            "sig": "string"
          }
        ]
      },
      "installation": {
        "installation": {
          "architecture": "ARCHITECTURE_UNSPECIFIED",
          "cpeUri": "string",
          "license": {
            "comments": "string",
            "expression": "string"
          },
          "location": [
            {
              "cpeUri": "string",
              "path": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            }
          ],
          "name": "string",
          "packageType": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        }
      },
      "intoto": {
        "signatures": [
          {
            "keyid": "string",
            "sig": "string"
          }
        ],
        "signed": {
          "byproducts": {
            "customValues": {
              "property1": "string",
              "property2": "string"
            }
          },
          "command": [
            "string"
          ],
          "environment": {
            "customValues": {
              "property1": "string",
              "property2": "string"
            }
          },
          "materials": [
            {
              "hashes": {
                "sha256": "string"
              },
              "resourceUri": "string"
            }
          ],
          "products": [
            {
              "hashes": {
                "sha256": "string"
              },
              "resourceUri": "string"
            }
          ]
        }
      },
      "kind": "NOTE_KIND_UNSPECIFIED",
      "name": "string",
      "noteName": "string",
      "remediation": "string",
      "resource": {
        "contentHash": {
          "type": "HASH_TYPE_UNSPECIFIED",
          "value": "string"
        },
        "name": "string",
        "uri": "string"
      },
      "sbom": {
        "createTime": "string",
        "creatorComment": "string",
        "creators": [
          "string"
        ],
        "documentComment": "string",
        "externalDocumentRefs": [
          "string"
        ],
        "id": "string",
        "licenseListVersion": "string",
        "namespace": "string",
        "title": "string"
      },
      "sbomReference": {
        "payload": {
          "_type": "string",
          "predicate": {
            "digest": {
              "property1": "string",
              "property2": "string"
            },
            "location": "string",
            "mimeType": "string",
            "referrerId": "string"
          },
          "predicateType": "string",
          "subject": [
            {
              "digest": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string"
            }
          ]
        },
        "payloadType": "string",
        "signatures": [
          {
            "keyid": "string",
            "sig": "string"
          }
        ]
      },
      "spdxFile": {
        "attributions": [
          "string"
        ],
        "comment": "string",
        "contributors": [
          "string"
        ],
        "copyright": "string",
        "filesLicenseInfo": [
          "string"
        ],
        "id": "string",
        "licenseConcluded": {
          "comments": "string",
          "expression": "string"
        },
        "notice": "string"
      },
      "spdxPackage": {
        "comment": "string",
        "filename": "string",
        "homePage": "string",
        "id": "string",
        "licenseConcluded": {
          "comments": "string",
          "expression": "string"
        },
        "packageType": "string",
        "sourceInfo": "string",
        "summaryDescription": "string",
        "title": "string",
        "version": "string"
      },
      "spdxRelationship": {
        "comment": "string",
        "source": "string",
        "target": "string",
        "type": "RELATIONSHIP_TYPE_UNSPECIFIED"
      },
      "updateTime": "string",
      "vulnerability": {
        "cvssScore": 0,
        "cvssV2": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "authentication": "AUTHENTICATION_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssV3": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "authentication": "AUTHENTICATION_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
        "effectiveSeverity": "SEVERITY_UNSPECIFIED",
        "longDescription": "string",
        "packageIssue": [
          {
            "affectedLocation": {
              "cpeUri": "string",
              "package": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            },
            "effectiveSeverity": "SEVERITY_UNSPECIFIED",
            "fixedLocation": {
              "cpeUri": "string",
              "package": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            },
            "packageType": "string",
            "severityName": "string"
          }
        ],
        "relatedUrls": [
          {
            "label": "string",
            "url": "string"
          }
        ],
        "severity": "SEVERITY_UNSPECIFIED",
        "shortDescription": "string",
        "type": "string",
        "vexAssessment": {
          "cve": "string",
          "impacts": [
            "string"
          ],
          "justification": {
            "details": "string",
            "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
          },
          "noteName": "string",
          "relatedUris": [
            {
              "label": "string",
              "url": "string"
            }
          ],
          "remediations": [
            {
              "details": "string",
              "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
              "remediationUri": {
                "label": "string",
                "url": "string"
              }
            }
          ],
          "state": "STATE_UNSPECIFIED"
        }
      }
    }
  ]
}
```

Request to create occurrences in batch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|occurrences|[[Occurrence](#schemaoccurrence)]|false|none|Required. The occurrences to create. Max allowed length is 1000.|

<h2 id="tocS_BatchCreateOccurrencesResponse">BatchCreateOccurrencesResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreateoccurrencesresponse"></a>
<a id="schema_BatchCreateOccurrencesResponse"></a>
<a id="tocSbatchcreateoccurrencesresponse"></a>
<a id="tocsbatchcreateoccurrencesresponse"></a>

```json
{
  "occurrences": [
    {
      "attestation": {
        "attestation": {
          "genericSignedAttestation": {
            "contentType": "CONTENT_TYPE_UNSPECIFIED",
            "serializedPayload": "string",
            "signatures": [
              {
                "publicKeyId": "string",
                "signature": "string"
              }
            ]
          },
          "pgpSignedAttestation": {
            "contentType": "CONTENT_TYPE_UNSPECIFIED",
            "pgpKeyId": "string",
            "signature": "string"
          }
        }
      },
      "build": {
        "provenance": {
          "buildOptions": {
            "property1": "string",
            "property2": "string"
          },
          "builderVersion": "string",
          "builtArtifacts": [
            {
              "checksum": "string",
              "id": "string",
              "names": [
                "string"
              ]
            }
          ],
          "commands": [
            {
              "args": [
                "string"
              ],
              "dir": "string",
              "env": [
                "string"
              ],
              "id": "string",
              "name": "string",
              "waitFor": [
                "string"
              ]
            }
          ],
          "createTime": "string",
          "creator": "string",
          "endTime": "string",
          "id": "string",
          "logsUri": "string",
          "projectId": "string",
          "sourceProvenance": {
            "additionalContexts": [
              {
                "cloudRepo": {
                  "aliasContext": {
                    "kind": "KIND_UNSPECIFIED",
                    "name": "string"
                  },
                  "repoId": {
                    "projectRepoId": {
                      "projectId": "string",
                      "repoName": "string"
                    },
                    "uid": "string"
                  },
                  "revisionId": "string"
                },
                "gerrit": {
                  "aliasContext": {
                    "kind": "KIND_UNSPECIFIED",
                    "name": "string"
                  },
                  "gerritProject": "string",
                  "hostUri": "string",
                  "revisionId": "string"
                },
                "git": {
                  "revisionId": "string",
                  "url": "string"
                },
                "labels": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            ],
            "artifactStorageSourceUri": "string",
            "context": {
              "cloudRepo": {
                "aliasContext": {
                  "kind": "KIND_UNSPECIFIED",
                  "name": "string"
                },
                "repoId": {
                  "projectRepoId": {
                    "projectId": "string",
                    "repoName": "string"
                  },
                  "uid": "string"
                },
                "revisionId": "string"
              },
              "gerrit": {
                "aliasContext": {
                  "kind": "KIND_UNSPECIFIED",
                  "name": "string"
                },
                "gerritProject": "string",
                "hostUri": "string",
                "revisionId": "string"
              },
              "git": {
                "revisionId": "string",
                "url": "string"
              },
              "labels": {
                "property1": "string",
                "property2": "string"
              }
            },
            "fileHashes": {
              "property1": {
                "fileHash": [
                  {
                    "type": "HASH_TYPE_UNSPECIFIED",
                    "value": "string"
                  }
                ]
              },
              "property2": {
                "fileHash": [
                  {
                    "type": "HASH_TYPE_UNSPECIFIED",
                    "value": "string"
                  }
                ]
              }
            }
          },
          "startTime": "string",
          "triggerId": "string"
        },
        "provenanceBytes": "string"
      },
      "createTime": "string",
      "deployment": {
        "deployment": {
          "address": "string",
          "config": "string",
          "deployTime": "string",
          "platform": "PLATFORM_UNSPECIFIED",
          "resourceUri": [
            "string"
          ],
          "undeployTime": "string",
          "userEmail": "string"
        }
      },
      "derivedImage": {
        "derivedImage": {
          "baseResourceUrl": "string",
          "distance": 0,
          "fingerprint": {
            "v1Name": "string",
            "v2Blob": [
              "string"
            ],
            "v2Name": "string"
          },
          "layerInfo": [
            {
              "arguments": "string",
              "directive": "DIRECTIVE_UNSPECIFIED"
            }
          ]
        }
      },
      "discovered": {
        "discovered": {
          "analysisCompleted": {
            "analysisType": [
              "string"
            ]
          },
          "analysisError": [
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
          ],
          "analysisStatus": "ANALYSIS_STATUS_UNSPECIFIED",
          "analysisStatusError": {
            "code": 0,
            "details": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "message": "string"
          },
          "continuousAnalysis": "CONTINUOUS_ANALYSIS_UNSPECIFIED",
          "lastAnalysisTime": "string"
        }
      },
      "envelope": {
        "payload": "string",
        "payloadType": "string",
        "signatures": [
          {
            "keyid": "string",
            "sig": "string"
          }
        ]
      },
      "installation": {
        "installation": {
          "architecture": "ARCHITECTURE_UNSPECIFIED",
          "cpeUri": "string",
          "license": {
            "comments": "string",
            "expression": "string"
          },
          "location": [
            {
              "cpeUri": "string",
              "path": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            }
          ],
          "name": "string",
          "packageType": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        }
      },
      "intoto": {
        "signatures": [
          {
            "keyid": "string",
            "sig": "string"
          }
        ],
        "signed": {
          "byproducts": {
            "customValues": {
              "property1": "string",
              "property2": "string"
            }
          },
          "command": [
            "string"
          ],
          "environment": {
            "customValues": {
              "property1": "string",
              "property2": "string"
            }
          },
          "materials": [
            {
              "hashes": {
                "sha256": "string"
              },
              "resourceUri": "string"
            }
          ],
          "products": [
            {
              "hashes": {
                "sha256": "string"
              },
              "resourceUri": "string"
            }
          ]
        }
      },
      "kind": "NOTE_KIND_UNSPECIFIED",
      "name": "string",
      "noteName": "string",
      "remediation": "string",
      "resource": {
        "contentHash": {
          "type": "HASH_TYPE_UNSPECIFIED",
          "value": "string"
        },
        "name": "string",
        "uri": "string"
      },
      "sbom": {
        "createTime": "string",
        "creatorComment": "string",
        "creators": [
          "string"
        ],
        "documentComment": "string",
        "externalDocumentRefs": [
          "string"
        ],
        "id": "string",
        "licenseListVersion": "string",
        "namespace": "string",
        "title": "string"
      },
      "sbomReference": {
        "payload": {
          "_type": "string",
          "predicate": {
            "digest": {
              "property1": "string",
              "property2": "string"
            },
            "location": "string",
            "mimeType": "string",
            "referrerId": "string"
          },
          "predicateType": "string",
          "subject": [
            {
              "digest": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string"
            }
          ]
        },
        "payloadType": "string",
        "signatures": [
          {
            "keyid": "string",
            "sig": "string"
          }
        ]
      },
      "spdxFile": {
        "attributions": [
          "string"
        ],
        "comment": "string",
        "contributors": [
          "string"
        ],
        "copyright": "string",
        "filesLicenseInfo": [
          "string"
        ],
        "id": "string",
        "licenseConcluded": {
          "comments": "string",
          "expression": "string"
        },
        "notice": "string"
      },
      "spdxPackage": {
        "comment": "string",
        "filename": "string",
        "homePage": "string",
        "id": "string",
        "licenseConcluded": {
          "comments": "string",
          "expression": "string"
        },
        "packageType": "string",
        "sourceInfo": "string",
        "summaryDescription": "string",
        "title": "string",
        "version": "string"
      },
      "spdxRelationship": {
        "comment": "string",
        "source": "string",
        "target": "string",
        "type": "RELATIONSHIP_TYPE_UNSPECIFIED"
      },
      "updateTime": "string",
      "vulnerability": {
        "cvssScore": 0,
        "cvssV2": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "authentication": "AUTHENTICATION_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssV3": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "authentication": "AUTHENTICATION_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
        "effectiveSeverity": "SEVERITY_UNSPECIFIED",
        "longDescription": "string",
        "packageIssue": [
          {
            "affectedLocation": {
              "cpeUri": "string",
              "package": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            },
            "effectiveSeverity": "SEVERITY_UNSPECIFIED",
            "fixedLocation": {
              "cpeUri": "string",
              "package": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            },
            "packageType": "string",
            "severityName": "string"
          }
        ],
        "relatedUrls": [
          {
            "label": "string",
            "url": "string"
          }
        ],
        "severity": "SEVERITY_UNSPECIFIED",
        "shortDescription": "string",
        "type": "string",
        "vexAssessment": {
          "cve": "string",
          "impacts": [
            "string"
          ],
          "justification": {
            "details": "string",
            "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
          },
          "noteName": "string",
          "relatedUris": [
            {
              "label": "string",
              "url": "string"
            }
          ],
          "remediations": [
            {
              "details": "string",
              "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
              "remediationUri": {
                "label": "string",
                "url": "string"
              }
            }
          ],
          "state": "STATE_UNSPECIFIED"
        }
      }
    }
  ]
}
```

Response for creating occurrences in batch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|occurrences|[[Occurrence](#schemaoccurrence)]|false|none|The occurrences that were created.|

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

<h2 id="tocS_Build">Build</h2>
<!-- backwards compatibility -->
<a id="schemabuild"></a>
<a id="schema_Build"></a>
<a id="tocSbuild"></a>
<a id="tocsbuild"></a>

```json
{
  "builderVersion": "string",
  "signature": {
    "keyId": "string",
    "keyType": "KEY_TYPE_UNSPECIFIED",
    "publicKey": "string",
    "signature": "string"
  }
}
```

Note holding the version of the provider's builder and the signature of the provenance message in the build details occurrence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|builderVersion|string|false|none|Required. Immutable. Version of the builder which produced this build.|
|signature|[BuildSignature](#schemabuildsignature)|false|none|Signature of the build in occurrences pointing to this build note containing build details.|

<h2 id="tocS_BuildProvenance">BuildProvenance</h2>
<!-- backwards compatibility -->
<a id="schemabuildprovenance"></a>
<a id="schema_BuildProvenance"></a>
<a id="tocSbuildprovenance"></a>
<a id="tocsbuildprovenance"></a>

```json
{
  "buildOptions": {
    "property1": "string",
    "property2": "string"
  },
  "builderVersion": "string",
  "builtArtifacts": [
    {
      "checksum": "string",
      "id": "string",
      "names": [
        "string"
      ]
    }
  ],
  "commands": [
    {
      "args": [
        "string"
      ],
      "dir": "string",
      "env": [
        "string"
      ],
      "id": "string",
      "name": "string",
      "waitFor": [
        "string"
      ]
    }
  ],
  "createTime": "string",
  "creator": "string",
  "endTime": "string",
  "id": "string",
  "logsUri": "string",
  "projectId": "string",
  "sourceProvenance": {
    "additionalContexts": [
      {
        "cloudRepo": {
          "aliasContext": {
            "kind": "KIND_UNSPECIFIED",
            "name": "string"
          },
          "repoId": {
            "projectRepoId": {
              "projectId": "string",
              "repoName": "string"
            },
            "uid": "string"
          },
          "revisionId": "string"
        },
        "gerrit": {
          "aliasContext": {
            "kind": "KIND_UNSPECIFIED",
            "name": "string"
          },
          "gerritProject": "string",
          "hostUri": "string",
          "revisionId": "string"
        },
        "git": {
          "revisionId": "string",
          "url": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "artifactStorageSourceUri": "string",
    "context": {
      "cloudRepo": {
        "aliasContext": {
          "kind": "KIND_UNSPECIFIED",
          "name": "string"
        },
        "repoId": {
          "projectRepoId": {
            "projectId": "string",
            "repoName": "string"
          },
          "uid": "string"
        },
        "revisionId": "string"
      },
      "gerrit": {
        "aliasContext": {
          "kind": "KIND_UNSPECIFIED",
          "name": "string"
        },
        "gerritProject": "string",
        "hostUri": "string",
        "revisionId": "string"
      },
      "git": {
        "revisionId": "string",
        "url": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      }
    },
    "fileHashes": {
      "property1": {
        "fileHash": [
          {
            "type": "HASH_TYPE_UNSPECIFIED",
            "value": "string"
          }
        ]
      },
      "property2": {
        "fileHash": [
          {
            "type": "HASH_TYPE_UNSPECIFIED",
            "value": "string"
          }
        ]
      }
    }
  },
  "startTime": "string",
  "triggerId": "string"
}
```

Provenance of a build. Contains all information needed to verify the full details about the build from source to completion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buildOptions|object|false|none|Special options applied to this build. This is a catch-all field where build providers can enter any desired additional details.|
|builderVersion|string|false|none|Version string of the builder at the time this build was executed.|
|builtArtifacts|[[Artifact](#schemaartifact)]|false|none|Output of the build.|
|commands|[[Command](#schemacommand)]|false|none|Commands requested by the build.|
|createTime|string(google-datetime)|false|none|Time at which the build was created.|
|creator|string|false|none|E-mail address of the user who initiated this build. Note that this was the user's e-mail address at the time the build was initiated; this address may not represent the same end-user for all time.|
|endTime|string(google-datetime)|false|none|Time at which execution of the build was finished.|
|id|string|false|none|Required. Unique identifier of the build.|
|logsUri|string|false|none|URI where any logs for this provenance were written.|
|projectId|string|false|none|ID of the project.|
|sourceProvenance|[Source](#schemasource)|false|none|Details of the Source input to the build.|
|startTime|string(google-datetime)|false|none|Time at which execution of the build was started.|
|triggerId|string|false|none|Trigger identifier if the build was triggered automatically; empty if not.|

<h2 id="tocS_BuildSignature">BuildSignature</h2>
<!-- backwards compatibility -->
<a id="schemabuildsignature"></a>
<a id="schema_BuildSignature"></a>
<a id="tocSbuildsignature"></a>
<a id="tocsbuildsignature"></a>

```json
{
  "keyId": "string",
  "keyType": "KEY_TYPE_UNSPECIFIED",
  "publicKey": "string",
  "signature": "string"
}
```

Message encapsulating the signature of the verified build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyId|string|false|none|An ID for the key used to sign. This could be either an ID for the key stored in `public_key` (such as the ID or fingerprint for a PGP key, or the CN for a cert), or a reference to an external key (such as a reference to a key in Cloud Key Management Service).|
|keyType|string|false|none|The type of the key, either stored in `public_key` or referenced in `key_id`.|
|publicKey|string|false|none|Public key of the builder which can be used to verify that the related findings are valid and unchanged. If `key_type` is empty, this defaults to PEM encoded public keys. This field may be empty if `key_id` references an external key. For Cloud Build based signatures, this is a PEM encoded public key. To verify the Cloud Build signature, place the contents of this field into a file (public.pem). The signature field is base64-decoded into its binary representation in signature.bin, and the provenance bytes from `BuildDetails` are base64-decoded into a binary representation in signed.bin. OpenSSL can then verify the signature: `openssl sha256 -verify public.pem -signature signature.bin signed.bin`|
|signature|string(byte)|false|none|Required. Signature of the related `BuildProvenance`. In JSON, this is base-64 encoded.|

#### Enumerated Values

|Property|Value|
|---|---|
|keyType|KEY_TYPE_UNSPECIFIED|
|keyType|PGP_ASCII_ARMORED|
|keyType|PKIX_PEM|

<h2 id="tocS_BuildStep">BuildStep</h2>
<!-- backwards compatibility -->
<a id="schemabuildstep"></a>
<a id="schema_BuildStep"></a>
<a id="tocSbuildstep"></a>
<a id="tocsbuildstep"></a>

```json
{
  "allowExitCodes": [
    0
  ],
  "allowFailure": true,
  "args": [
    "string"
  ],
  "dir": "string",
  "entrypoint": "string",
  "env": [
    "string"
  ],
  "exitCode": 0,
  "id": "string",
  "name": "string",
  "pullTiming": {
    "endTime": "string",
    "startTime": "string"
  },
  "script": "string",
  "secretEnv": [
    "string"
  ],
  "status": "STATUS_UNKNOWN",
  "timeout": "string",
  "timing": {
    "endTime": "string",
    "startTime": "string"
  },
  "volumes": [
    {
      "name": "string",
      "path": "string"
    }
  ],
  "waitFor": [
    "string"
  ]
}
```

A step in the build pipeline. Next ID: 20

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowExitCodes|[integer(int32)]|false|none|Allow this build step to fail without failing the entire build if and only if the exit code is one of the specified codes. If allow_failure is also specified, this field will take precedence.|
|allowFailure|boolean|false|none|Allow this build step to fail without failing the entire build. If false, the entire build will fail if this step fails. Otherwise, the build will succeed, but this step will still have a failure status. Error information will be reported in the failure_detail field.|
|args|[string]|false|none|A list of arguments that will be presented to the step when it is started. If the image used to run the step's container has an entrypoint, the `args` are used as arguments to that entrypoint. If the image does not define an entrypoint, the first element in args is used as the entrypoint, and the remainder will be used as arguments.|
|dir|string|false|none|Working directory to use when running this step's container. If this value is a relative path, it is relative to the build's working directory. If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions, unless a `volume` for that path is specified. If the build specifies a `RepoSource` with `dir` and a step with a `dir`, which specifies an absolute path, the `RepoSource` `dir` is ignored for the step's execution.|
|entrypoint|string|false|none|Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used.|
|env|[string]|false|none|A list of environment variable definitions to be used when running a step. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".|
|exitCode|integer(int32)|false|none|Output only. Return code from running the step.|
|id|string|false|none|Unique identifier for this build step, used in `wait_for` to reference this build step as a dependency.|
|name|string|false|none|Required. The name of the container image that will run this particular build step. If the image is available in the host's Docker daemon's cache, it will be run directly. If not, the host will attempt to pull the image first, using the builder service account's credentials if necessary. The Docker daemon's cache will already have the latest versions of all of the officially supported build steps ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)). The Docker daemon will also have cached many of the layers for some popular images, like "ubuntu", "debian", but they will be refreshed at the time you attempt to use them. If you built an image in a previous build step, it will be stored in the host's Docker daemon's cache and is available to use as the name for a later build step.|
|pullTiming|[TimeSpan](#schematimespan)|false|none|Output only. Stores timing information for pulling this build step's builder image only.|
|script|string|false|none|A shell script to be executed in the step. When script is provided, the user cannot specify the entrypoint or args.|
|secretEnv|[string]|false|none|A list of environment variables which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`.|
|status|string|false|none|Output only. Status of the build step. At this time, build step status is only updated on build completion; step status is not updated in real-time as the build progresses.|
|timeout|string(google-duration)|false|none|Time limit for executing this build step. If not defined, the step has no time limit and will be allowed to continue to run until either it completes or the build itself times out.|
|timing|[TimeSpan](#schematimespan)|false|none|Output only. Stores timing information for executing this build step.|
|volumes|[[Volume](#schemavolume)]|false|none|List of volumes to mount into the build step. Each volume is created as an empty volume prior to execution of the build step. Upon completion of the build, volumes and their contents are discarded. Using a named volume in only one step is not valid as it is indicative of a build request with an incorrect configuration.|
|waitFor|[string]|false|none|The ID(s) of the step(s) that this build step depends on. This build step will not start until all the build steps in `wait_for` have completed successfully. If `wait_for` is empty, this build step will start when all previous build steps in the `Build.Steps` list have completed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|STATUS_UNKNOWN|
|status|PENDING|
|status|QUEUING|
|status|QUEUED|
|status|WORKING|
|status|SUCCESS|
|status|FAILURE|
|status|INTERNAL_ERROR|
|status|TIMEOUT|
|status|CANCELLED|
|status|EXPIRED|

<h2 id="tocS_ByProducts">ByProducts</h2>
<!-- backwards compatibility -->
<a id="schemabyproducts"></a>
<a id="schema_ByProducts"></a>
<a id="tocSbyproducts"></a>
<a id="tocsbyproducts"></a>

```json
{
  "customValues": {
    "property1": "string",
    "property2": "string"
  }
}
```

Defines an object for the byproducts field in in-toto links. The suggested fields are "stderr", "stdout", and "return-value".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customValues|object|false|none|none|

<h2 id="tocS_CVSS">CVSS</h2>
<!-- backwards compatibility -->
<a id="schemacvss"></a>
<a id="schema_CVSS"></a>
<a id="tocScvss"></a>
<a id="tocscvss"></a>

```json
{
  "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
  "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
  "authentication": "AUTHENTICATION_UNSPECIFIED",
  "availabilityImpact": "IMPACT_UNSPECIFIED",
  "baseScore": 0,
  "confidentialityImpact": "IMPACT_UNSPECIFIED",
  "exploitabilityScore": 0,
  "impactScore": 0,
  "integrityImpact": "IMPACT_UNSPECIFIED",
  "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
  "scope": "SCOPE_UNSPECIFIED",
  "userInteraction": "USER_INTERACTION_UNSPECIFIED"
}
```

Common Vulnerability Scoring System. This message is compatible with CVSS v2 and v3. For CVSS v2 details, see https://www.first.org/cvss/v2/guide CVSS v2 calculator: https://nvd.nist.gov/vuln-metrics/cvss/v2-calculator For CVSS v3 details, see https://www.first.org/cvss/specification-document CVSS v3 calculator: https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attackComplexity|string|false|none|Defined in CVSS v3, CVSS v2|
|attackVector|string|false|none|Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. Defined in CVSS v3, CVSS v2|
|authentication|string|false|none|Defined in CVSS v2|
|availabilityImpact|string|false|none|Defined in CVSS v3, CVSS v2|
|baseScore|number(float)|false|none|The base score is a function of the base metric scores.|
|confidentialityImpact|string|false|none|Defined in CVSS v3, CVSS v2|
|exploitabilityScore|number(float)|false|none|none|
|impactScore|number(float)|false|none|none|
|integrityImpact|string|false|none|Defined in CVSS v3, CVSS v2|
|privilegesRequired|string|false|none|Defined in CVSS v3|
|scope|string|false|none|Defined in CVSS v3|
|userInteraction|string|false|none|Defined in CVSS v3|

#### Enumerated Values

|Property|Value|
|---|---|
|attackComplexity|ATTACK_COMPLEXITY_UNSPECIFIED|
|attackComplexity|ATTACK_COMPLEXITY_LOW|
|attackComplexity|ATTACK_COMPLEXITY_HIGH|
|attackComplexity|ATTACK_COMPLEXITY_MEDIUM|
|attackVector|ATTACK_VECTOR_UNSPECIFIED|
|attackVector|ATTACK_VECTOR_NETWORK|
|attackVector|ATTACK_VECTOR_ADJACENT|
|attackVector|ATTACK_VECTOR_LOCAL|
|attackVector|ATTACK_VECTOR_PHYSICAL|
|authentication|AUTHENTICATION_UNSPECIFIED|
|authentication|AUTHENTICATION_MULTIPLE|
|authentication|AUTHENTICATION_SINGLE|
|authentication|AUTHENTICATION_NONE|
|availabilityImpact|IMPACT_UNSPECIFIED|
|availabilityImpact|IMPACT_HIGH|
|availabilityImpact|IMPACT_LOW|
|availabilityImpact|IMPACT_NONE|
|availabilityImpact|IMPACT_PARTIAL|
|availabilityImpact|IMPACT_COMPLETE|
|confidentialityImpact|IMPACT_UNSPECIFIED|
|confidentialityImpact|IMPACT_HIGH|
|confidentialityImpact|IMPACT_LOW|
|confidentialityImpact|IMPACT_NONE|
|confidentialityImpact|IMPACT_PARTIAL|
|confidentialityImpact|IMPACT_COMPLETE|
|integrityImpact|IMPACT_UNSPECIFIED|
|integrityImpact|IMPACT_HIGH|
|integrityImpact|IMPACT_LOW|
|integrityImpact|IMPACT_NONE|
|integrityImpact|IMPACT_PARTIAL|
|integrityImpact|IMPACT_COMPLETE|
|privilegesRequired|PRIVILEGES_REQUIRED_UNSPECIFIED|
|privilegesRequired|PRIVILEGES_REQUIRED_NONE|
|privilegesRequired|PRIVILEGES_REQUIRED_LOW|
|privilegesRequired|PRIVILEGES_REQUIRED_HIGH|
|scope|SCOPE_UNSPECIFIED|
|scope|SCOPE_UNCHANGED|
|scope|SCOPE_CHANGED|
|userInteraction|USER_INTERACTION_UNSPECIFIED|
|userInteraction|USER_INTERACTION_NONE|
|userInteraction|USER_INTERACTION_REQUIRED|

<h2 id="tocS_CVSSv3">CVSSv3</h2>
<!-- backwards compatibility -->
<a id="schemacvssv3"></a>
<a id="schema_CVSSv3"></a>
<a id="tocScvssv3"></a>
<a id="tocscvssv3"></a>

```json
{
  "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
  "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
  "availabilityImpact": "IMPACT_UNSPECIFIED",
  "baseScore": 0,
  "confidentialityImpact": "IMPACT_UNSPECIFIED",
  "exploitabilityScore": 0,
  "impactScore": 0,
  "integrityImpact": "IMPACT_UNSPECIFIED",
  "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
  "scope": "SCOPE_UNSPECIFIED",
  "userInteraction": "USER_INTERACTION_UNSPECIFIED"
}
```

Deprecated. Common Vulnerability Scoring System version 3. For details, see https://www.first.org/cvss/specification-document

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attackComplexity|string|false|none|none|
|attackVector|string|false|none|Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments.|
|availabilityImpact|string|false|none|none|
|baseScore|number(float)|false|none|The base score is a function of the base metric scores.|
|confidentialityImpact|string|false|none|none|
|exploitabilityScore|number(float)|false|none|none|
|impactScore|number(float)|false|none|none|
|integrityImpact|string|false|none|none|
|privilegesRequired|string|false|none|none|
|scope|string|false|none|none|
|userInteraction|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|attackComplexity|ATTACK_COMPLEXITY_UNSPECIFIED|
|attackComplexity|ATTACK_COMPLEXITY_LOW|
|attackComplexity|ATTACK_COMPLEXITY_HIGH|
|attackVector|ATTACK_VECTOR_UNSPECIFIED|
|attackVector|ATTACK_VECTOR_NETWORK|
|attackVector|ATTACK_VECTOR_ADJACENT|
|attackVector|ATTACK_VECTOR_LOCAL|
|attackVector|ATTACK_VECTOR_PHYSICAL|
|availabilityImpact|IMPACT_UNSPECIFIED|
|availabilityImpact|IMPACT_HIGH|
|availabilityImpact|IMPACT_LOW|
|availabilityImpact|IMPACT_NONE|
|confidentialityImpact|IMPACT_UNSPECIFIED|
|confidentialityImpact|IMPACT_HIGH|
|confidentialityImpact|IMPACT_LOW|
|confidentialityImpact|IMPACT_NONE|
|integrityImpact|IMPACT_UNSPECIFIED|
|integrityImpact|IMPACT_HIGH|
|integrityImpact|IMPACT_LOW|
|integrityImpact|IMPACT_NONE|
|privilegesRequired|PRIVILEGES_REQUIRED_UNSPECIFIED|
|privilegesRequired|PRIVILEGES_REQUIRED_NONE|
|privilegesRequired|PRIVILEGES_REQUIRED_LOW|
|privilegesRequired|PRIVILEGES_REQUIRED_HIGH|
|scope|SCOPE_UNSPECIFIED|
|scope|SCOPE_UNCHANGED|
|scope|SCOPE_CHANGED|
|userInteraction|USER_INTERACTION_UNSPECIFIED|
|userInteraction|USER_INTERACTION_NONE|
|userInteraction|USER_INTERACTION_REQUIRED|

<h2 id="tocS_CloudRepoSourceContext">CloudRepoSourceContext</h2>
<!-- backwards compatibility -->
<a id="schemacloudreposourcecontext"></a>
<a id="schema_CloudRepoSourceContext"></a>
<a id="tocScloudreposourcecontext"></a>
<a id="tocscloudreposourcecontext"></a>

```json
{
  "aliasContext": {
    "kind": "KIND_UNSPECIFIED",
    "name": "string"
  },
  "repoId": {
    "projectRepoId": {
      "projectId": "string",
      "repoName": "string"
    },
    "uid": "string"
  },
  "revisionId": "string"
}
```

A CloudRepoSourceContext denotes a particular revision in a Google Cloud Source Repo.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aliasContext|[AliasContext](#schemaaliascontext)|false|none|An alias, which may be a branch or tag.|
|repoId|[RepoId](#schemarepoid)|false|none|The ID of the repo.|
|revisionId|string|false|none|A revision ID.|

<h2 id="tocS_Command">Command</h2>
<!-- backwards compatibility -->
<a id="schemacommand"></a>
<a id="schema_Command"></a>
<a id="tocScommand"></a>
<a id="tocscommand"></a>

```json
{
  "args": [
    "string"
  ],
  "dir": "string",
  "env": [
    "string"
  ],
  "id": "string",
  "name": "string",
  "waitFor": [
    "string"
  ]
}
```

Command describes a step performed as part of the build pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|args|[string]|false|none|Command-line arguments used when executing this command.|
|dir|string|false|none|Working directory (relative to project source root) used when running this command.|
|env|[string]|false|none|Environment variables set before running this command.|
|id|string|false|none|Optional unique identifier for this command, used in wait_for to reference this command as a dependency.|
|name|string|false|none|Required. Name of the command, as presented on the command line, or if the command is packaged as a Docker container, as presented to `docker pull`.|
|waitFor|[string]|false|none|The ID(s) of the command(s) that this command depends on.|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfig">ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfig</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1approvalconfig"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfig"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1approvalconfig"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1approvalconfig"></a>

```json
{
  "approvalRequired": true
}
```

ApprovalConfig describes configuration for manual approval of a build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalRequired|boolean|false|none|Whether or not approval is needed. If this is set on a build, it will become pending when created, and will need to be explicitly approved to start.|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult">ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1approvalresult"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1approvalresult"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1approvalresult"></a>

```json
{
  "approvalTime": "string",
  "approverAccount": "string",
  "comment": "string",
  "decision": "DECISION_UNSPECIFIED",
  "url": "string"
}
```

ApprovalResult describes the decision and associated metadata of a manual approval of a build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalTime|string(google-datetime)|false|read-only|Output only. The time when the approval decision was made.|
|approverAccount|string|false|read-only|Output only. Email of the user that called the ApproveBuild API to approve or reject a build at the time that the API was called.|
|comment|string|false|none|Optional. An optional comment for this manual approval result.|
|decision|string|false|none|Required. The decision of this manual approval.|
|url|string|false|none|Optional. An optional URL tied to this manual approval result. This field is essentially the same as comment, except that it will be rendered by the UI differently. An example use case is a link to an external job that approved this Build.|

#### Enumerated Values

|Property|Value|
|---|---|
|decision|DECISION_UNSPECIFIED|
|decision|APPROVED|
|decision|REJECTED|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1Artifacts">ContaineranalysisGoogleDevtoolsCloudbuildV1Artifacts</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1artifacts"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1Artifacts"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1artifacts"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1artifacts"></a>

```json
{
  "images": [
    "string"
  ],
  "mavenArtifacts": [
    {
      "artifactId": "string",
      "groupId": "string",
      "path": "string",
      "repository": "string",
      "version": "string"
    }
  ],
  "npmPackages": [
    {
      "packagePath": "string",
      "repository": "string"
    }
  ],
  "objects": {
    "location": "string",
    "paths": [
      "string"
    ],
    "timing": {
      "endTime": "string",
      "startTime": "string"
    }
  },
  "pythonPackages": [
    {
      "paths": [
        "string"
      ],
      "repository": "string"
    }
  ]
}
```

Artifacts produced by a build that should be uploaded upon successful completion of all build steps.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|images|[string]|false|none|A list of images to be pushed upon the successful completion of all build steps. The images will be pushed using the builder service account's credentials. The digests of the pushed images will be stored in the Build resource's results field. If any of the images fail to be pushed, the build is marked FAILURE.|
|mavenArtifacts|[[ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsMavenArtifact](#schemacontaineranalysisgoogledevtoolscloudbuildv1artifactsmavenartifact)]|false|none|A list of Maven artifacts to be uploaded to Artifact Registry upon successful completion of all build steps. Artifacts in the workspace matching specified paths globs will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any artifacts fail to be pushed, the build is marked FAILURE.|
|npmPackages|[[ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage](#schemacontaineranalysisgoogledevtoolscloudbuildv1artifactsnpmpackage)]|false|none|A list of npm packages to be uploaded to Artifact Registry upon successful completion of all build steps. Npm packages in the specified paths will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any packages fail to be pushed, the build is marked FAILURE.|
|objects|[ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects](#schemacontaineranalysisgoogledevtoolscloudbuildv1artifactsartifactobjects)|false|none|A list of objects to be uploaded to Cloud Storage upon successful completion of all build steps. Files in the workspace matching specified paths globs will be uploaded to the specified Cloud Storage location using the builder service account's credentials. The location and generation of the uploaded objects will be stored in the Build resource's results field. If any objects fail to be pushed, the build is marked FAILURE.|
|pythonPackages|[[ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackage](#schemacontaineranalysisgoogledevtoolscloudbuildv1artifactspythonpackage)]|false|none|A list of Python packages to be uploaded to Artifact Registry upon successful completion of all build steps. The build service account credentials will be used to perform the upload. If any objects fail to be pushed, the build is marked FAILURE.|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects">ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1artifactsartifactobjects"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1artifactsartifactobjects"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1artifactsartifactobjects"></a>

```json
{
  "location": "string",
  "paths": [
    "string"
  ],
  "timing": {
    "endTime": "string",
    "startTime": "string"
  }
}
```

Files in the workspace to upload to Cloud Storage upon successful completion of all build steps.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|string|false|none|Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/". (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Files in the workspace matching any path pattern will be uploaded to Cloud Storage with this location as a prefix.|
|paths|[string]|false|none|Path globs used to match files in the build's workspace.|
|timing|[ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan](#schemacontaineranalysisgoogledevtoolscloudbuildv1timespan)|false|none|Output only. Stores timing information for pushing all artifact objects.|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsMavenArtifact">ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsMavenArtifact</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1artifactsmavenartifact"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsMavenArtifact"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1artifactsmavenartifact"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1artifactsmavenartifact"></a>

```json
{
  "artifactId": "string",
  "groupId": "string",
  "path": "string",
  "repository": "string",
  "version": "string"
}
```

A Maven artifact to upload to Artifact Registry upon successful completion of all build steps.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artifactId|string|false|none|Maven `artifactId` value used when uploading the artifact to Artifact Registry.|
|groupId|string|false|none|Maven `groupId` value used when uploading the artifact to Artifact Registry.|
|path|string|false|none|Path to an artifact in the build's workspace to be uploaded to Artifact Registry. This can be either an absolute path, e.g. /workspace/my-app/target/my-app-1.0.SNAPSHOT.jar or a relative path from /workspace, e.g. my-app/target/my-app-1.0.SNAPSHOT.jar.|
|repository|string|false|none|Artifact Registry repository, in the form "https://$REGION-maven.pkg.dev/$PROJECT/$REPOSITORY" Artifact in the workspace specified by path will be uploaded to Artifact Registry with this location as a prefix.|
|version|string|false|none|Maven `version` value used when uploading the artifact to Artifact Registry.|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage">ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1artifactsnpmpackage"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1artifactsnpmpackage"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1artifactsnpmpackage"></a>

```json
{
  "packagePath": "string",
  "repository": "string"
}
```

Npm package to upload to Artifact Registry upon successful completion of all build steps.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|packagePath|string|false|none|Path to the package.json. e.g. workspace/path/to/package|
|repository|string|false|none|Artifact Registry repository, in the form "https://$REGION-npm.pkg.dev/$PROJECT/$REPOSITORY" Npm package in the workspace specified by path will be zipped and uploaded to Artifact Registry with this location as a prefix.|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackage">ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackage</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1artifactspythonpackage"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackage"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1artifactspythonpackage"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1artifactspythonpackage"></a>

```json
{
  "paths": [
    "string"
  ],
  "repository": "string"
}
```

Python package to upload to Artifact Registry upon successful completion of all build steps. A package can encapsulate multiple objects to be uploaded to a single repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paths|[string]|false|none|Path globs used to match files in the build's workspace. For Python/ Twine, this is usually `dist/*`, and sometimes additionally an `.asc` file.|
|repository|string|false|none|Artifact Registry repository, in the form "https://$REGION-python.pkg.dev/$PROJECT/$REPOSITORY" Files in the workspace matching any path pattern will be uploaded to Artifact Registry with this location as a prefix.|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1Build">ContaineranalysisGoogleDevtoolsCloudbuildV1Build</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1build"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1Build"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1build"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1build"></a>

```json
{
  "approval": {
    "config": {
      "approvalRequired": true
    },
    "result": {
      "approvalTime": "string",
      "approverAccount": "string",
      "comment": "string",
      "decision": "DECISION_UNSPECIFIED",
      "url": "string"
    },
    "state": "STATE_UNSPECIFIED"
  },
  "artifacts": {
    "images": [
      "string"
    ],
    "mavenArtifacts": [
      {
        "artifactId": "string",
        "groupId": "string",
        "path": "string",
        "repository": "string",
        "version": "string"
      }
    ],
    "npmPackages": [
      {
        "packagePath": "string",
        "repository": "string"
      }
    ],
    "objects": {
      "location": "string",
      "paths": [
        "string"
      ],
      "timing": {
        "endTime": "string",
        "startTime": "string"
      }
    },
    "pythonPackages": [
      {
        "paths": [
          "string"
        ],
        "repository": "string"
      }
    ]
  },
  "availableSecrets": {
    "inline": [
      {
        "envMap": {
          "property1": "string",
          "property2": "string"
        },
        "kmsKeyName": "string"
      }
    ],
    "secretManager": [
      {
        "env": "string",
        "versionName": "string"
      }
    ]
  },
  "buildTriggerId": "string",
  "createTime": "string",
  "failureInfo": {
    "detail": "string",
    "type": "FAILURE_TYPE_UNSPECIFIED"
  },
  "finishTime": "string",
  "id": "string",
  "images": [
    "string"
  ],
  "logUrl": "string",
  "logsBucket": "string",
  "name": "string",
  "options": {
    "defaultLogsBucketBehavior": "DEFAULT_LOGS_BUCKET_BEHAVIOR_UNSPECIFIED",
    "diskSizeGb": "string",
    "dynamicSubstitutions": true,
    "env": [
      "string"
    ],
    "logStreamingOption": "STREAM_DEFAULT",
    "logging": "LOGGING_UNSPECIFIED",
    "machineType": "UNSPECIFIED",
    "pool": {
      "name": "string"
    },
    "requestedVerifyOption": "NOT_VERIFIED",
    "secretEnv": [
      "string"
    ],
    "sourceProvenanceHash": [
      "NONE"
    ],
    "substitutionOption": "MUST_MATCH",
    "volumes": [
      {
        "name": "string",
        "path": "string"
      }
    ],
    "workerPool": "string"
  },
  "projectId": "string",
  "queueTtl": "string",
  "results": {
    "artifactManifest": "string",
    "artifactTiming": {
      "endTime": "string",
      "startTime": "string"
    },
    "buildStepImages": [
      "string"
    ],
    "buildStepOutputs": [
      "string"
    ],
    "images": [
      {
        "digest": "string",
        "name": "string",
        "pushTiming": {
          "endTime": "string",
          "startTime": "string"
        }
      }
    ],
    "mavenArtifacts": [
      {
        "fileHashes": {
          "fileHash": [
            {
              "type": "NONE",
              "value": "string"
            }
          ]
        },
        "pushTiming": {
          "endTime": "string",
          "startTime": "string"
        },
        "uri": "string"
      }
    ],
    "npmPackages": [
      {
        "fileHashes": {
          "fileHash": [
            {
              "type": "NONE",
              "value": "string"
            }
          ]
        },
        "pushTiming": {
          "endTime": "string",
          "startTime": "string"
        },
        "uri": "string"
      }
    ],
    "numArtifacts": "string",
    "pythonPackages": [
      {
        "fileHashes": {
          "fileHash": [
            {
              "type": "NONE",
              "value": "string"
            }
          ]
        },
        "pushTiming": {
          "endTime": "string",
          "startTime": "string"
        },
        "uri": "string"
      }
    ]
  },
  "secrets": [
    {
      "kmsKeyName": "string",
      "secretEnv": {
        "property1": "string",
        "property2": "string"
      }
    }
  ],
  "serviceAccount": "string",
  "source": {
    "gitSource": {
      "dir": "string",
      "revision": "string",
      "url": "string"
    },
    "repoSource": {
      "branchName": "string",
      "commitSha": "string",
      "dir": "string",
      "invertRegex": true,
      "projectId": "string",
      "repoName": "string",
      "substitutions": {
        "property1": "string",
        "property2": "string"
      },
      "tagName": "string"
    },
    "storageSource": {
      "bucket": "string",
      "generation": "string",
      "object": "string"
    },
    "storageSourceManifest": {
      "bucket": "string",
      "generation": "string",
      "object": "string"
    }
  },
  "sourceProvenance": {
    "fileHashes": {
      "property1": {
        "fileHash": [
          {
            "type": "NONE",
            "value": "string"
          }
        ]
      },
      "property2": {
        "fileHash": [
          {
            "type": "NONE",
            "value": "string"
          }
        ]
      }
    },
    "resolvedRepoSource": {
      "branchName": "string",
      "commitSha": "string",
      "dir": "string",
      "invertRegex": true,
      "projectId": "string",
      "repoName": "string",
      "substitutions": {
        "property1": "string",
        "property2": "string"
      },
      "tagName": "string"
    },
    "resolvedStorageSource": {
      "bucket": "string",
      "generation": "string",
      "object": "string"
    },
    "resolvedStorageSourceManifest": {
      "bucket": "string",
      "generation": "string",
      "object": "string"
    }
  },
  "startTime": "string",
  "status": "STATUS_UNKNOWN",
  "statusDetail": "string",
  "steps": [
    {
      "allowExitCodes": [
        0
      ],
      "allowFailure": true,
      "args": [
        "string"
      ],
      "dir": "string",
      "entrypoint": "string",
      "env": [
        "string"
      ],
      "exitCode": 0,
      "id": "string",
      "name": "string",
      "pullTiming": {
        "endTime": "string",
        "startTime": "string"
      },
      "script": "string",
      "secretEnv": [
        "string"
      ],
      "status": "STATUS_UNKNOWN",
      "timeout": "string",
      "timing": {
        "endTime": "string",
        "startTime": "string"
      },
      "volumes": [
        {
          "name": "string",
          "path": "string"
        }
      ],
      "waitFor": [
        "string"
      ]
    }
  ],
  "substitutions": {
    "property1": "string",
    "property2": "string"
  },
  "tags": [
    "string"
  ],
  "timeout": "string",
  "timing": {
    "property1": {
      "endTime": "string",
      "startTime": "string"
    },
    "property2": {
      "endTime": "string",
      "startTime": "string"
    }
  },
  "warnings": [
    {
      "priority": "PRIORITY_UNSPECIFIED",
      "text": "string"
    }
  ]
}
```

A build resource in the Cloud Build API. At a high level, a `Build` describes where to find source code, how to build it (for example, the builder image to run on the source), and where to store the built artifacts. Fields can include the following variables, which will be expanded when the build is created: - $PROJECT_ID: the project ID of the build. - $PROJECT_NUMBER: the project number of the build. - $LOCATION: the location/region of the build. - $BUILD_ID: the autogenerated ID of the build. - $REPO_NAME: the source repository name specified by RepoSource. - $BRANCH_NAME: the branch name specified by RepoSource. - $TAG_NAME: the tag name specified by RepoSource. - $REVISION_ID or $COMMIT_SHA: the commit SHA specified by RepoSource or resolved from the specified branch or tag. - $SHORT_SHA: first 7 characters of $REVISION_ID or $COMMIT_SHA.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approval|[ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval](#schemacontaineranalysisgoogledevtoolscloudbuildv1buildapproval)|false|none|Output only. Describes this build's approval configuration, status, and result.|
|artifacts|[ContaineranalysisGoogleDevtoolsCloudbuildV1Artifacts](#schemacontaineranalysisgoogledevtoolscloudbuildv1artifacts)|false|none|Artifacts produced by the build that should be uploaded upon successful completion of all build steps.|
|availableSecrets|[ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets](#schemacontaineranalysisgoogledevtoolscloudbuildv1secrets)|false|none|Secrets and secret environment variables.|
|buildTriggerId|string|false|read-only|Output only. The ID of the `BuildTrigger` that triggered this build, if it was triggered automatically.|
|createTime|string(google-datetime)|false|read-only|Output only. Time at which the request to create the build was received.|
|failureInfo|[ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo](#schemacontaineranalysisgoogledevtoolscloudbuildv1buildfailureinfo)|false|none|Output only. Contains information about the build when status=FAILURE.|
|finishTime|string(google-datetime)|false|read-only|Output only. Time at which execution of the build was finished. The difference between finish_time and start_time is the duration of the build's execution.|
|id|string|false|read-only|Output only. Unique identifier of the build.|
|images|[string]|false|none|A list of images to be pushed upon the successful completion of all build steps. The images are pushed using the builder service account's credentials. The digests of the pushed images will be stored in the `Build` resource's results field. If any of the images fail to be pushed, the build status is marked `FAILURE`.|
|logUrl|string|false|read-only|Output only. URL to logs for this build in Google Cloud Console.|
|logsBucket|string|false|none|Google Cloud Storage bucket where logs should be written (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Logs file names will be of the format `${logs_bucket}/log-${build_id}.txt`.|
|name|string|false|read-only|Output only. The 'Build' name with format: `projects/{project}/locations/{location}/builds/{build}`, where {build} is a unique identifier generated by the service.|
|options|[ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions](#schemacontaineranalysisgoogledevtoolscloudbuildv1buildoptions)|false|none|Special options for this build.|
|projectId|string|false|read-only|Output only. ID of the project.|
|queueTtl|string(google-duration)|false|none|TTL in queue for this build. If provided and the build is enqueued longer than this value, the build will expire and the build status will be `EXPIRED`. The TTL starts ticking from create_time.|
|results|[ContaineranalysisGoogleDevtoolsCloudbuildV1Results](#schemacontaineranalysisgoogledevtoolscloudbuildv1results)|false|none|Output only. Results of the build.|
|secrets|[[ContaineranalysisGoogleDevtoolsCloudbuildV1Secret](#schemacontaineranalysisgoogledevtoolscloudbuildv1secret)]|false|none|Secrets to decrypt using Cloud Key Management Service. Note: Secret Manager is the recommended technique for managing sensitive data with Cloud Build. Use `available_secrets` to configure builds to access secrets from Secret Manager. For instructions, see: https://cloud.google.com/cloud-build/docs/securing-builds/use-secrets|
|serviceAccount|string|false|none|IAM service account whose credentials will be used at build runtime. Must be of the format `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`. ACCOUNT can be email address or uniqueId of the service account. |
|source|[ContaineranalysisGoogleDevtoolsCloudbuildV1Source](#schemacontaineranalysisgoogledevtoolscloudbuildv1source)|false|none|The location of the source files to build.|
|sourceProvenance|[ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance](#schemacontaineranalysisgoogledevtoolscloudbuildv1sourceprovenance)|false|none|Output only. A permanent fixed identifier for source.|
|startTime|string(google-datetime)|false|read-only|Output only. Time at which execution of the build was started.|
|status|string|false|read-only|Output only. Status of the build.|
|statusDetail|string|false|read-only|Output only. Customer-readable message about the current status.|
|steps|[[ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStep](#schemacontaineranalysisgoogledevtoolscloudbuildv1buildstep)]|false|none|Required. The operations to be performed on the workspace.|
|substitutions|object|false|none|Substitutions data for `Build` resource.|
|tags|[string]|false|none|Tags for annotation of a `Build`. These are not docker tags.|
|timeout|string(google-duration)|false|none|Amount of time that this build should be allowed to run, to second granularity. If this amount of time elapses, work on the build will cease and the build status will be `TIMEOUT`. `timeout` starts ticking from `startTime`. Default time is 60 minutes.|
|timing|object|false|read-only|Output only. Stores timing information for phases of the build. Valid keys are: * BUILD: time to execute all build steps. * PUSH: time to push all artifacts including docker images and non docker artifacts. * FETCHSOURCE: time to fetch source. * SETUPBUILD: time to set up build. If the build does not specify source or images, these keys will not be included.|
|warnings|[[ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarning](#schemacontaineranalysisgoogledevtoolscloudbuildv1buildwarning)]|false|read-only|Output only. Non-fatal problems encountered during the execution of the build.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|STATUS_UNKNOWN|
|status|PENDING|
|status|QUEUED|
|status|WORKING|
|status|SUCCESS|
|status|FAILURE|
|status|INTERNAL_ERROR|
|status|TIMEOUT|
|status|CANCELLED|
|status|EXPIRED|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval">ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1buildapproval"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1buildapproval"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1buildapproval"></a>

```json
{
  "config": {
    "approvalRequired": true
  },
  "result": {
    "approvalTime": "string",
    "approverAccount": "string",
    "comment": "string",
    "decision": "DECISION_UNSPECIFIED",
    "url": "string"
  },
  "state": "STATE_UNSPECIFIED"
}
```

BuildApproval describes a build's approval configuration, state, and result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfig](#schemacontaineranalysisgoogledevtoolscloudbuildv1approvalconfig)|false|none|Output only. Configuration for manual approval of this build.|
|result|[ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult](#schemacontaineranalysisgoogledevtoolscloudbuildv1approvalresult)|false|none|Output only. Result of manual approval for this Build.|
|state|string|false|read-only|Output only. The state of this build's approval.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|PENDING|
|state|APPROVED|
|state|REJECTED|
|state|CANCELLED|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo">ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1buildfailureinfo"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1buildfailureinfo"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1buildfailureinfo"></a>

```json
{
  "detail": "string",
  "type": "FAILURE_TYPE_UNSPECIFIED"
}
```

A fatal problem encountered during the execution of the build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Explains the failure issue in more detail using hard-coded text.|
|type|string|false|none|The name of the failure.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|FAILURE_TYPE_UNSPECIFIED|
|type|PUSH_FAILED|
|type|PUSH_IMAGE_NOT_FOUND|
|type|PUSH_NOT_AUTHORIZED|
|type|LOGGING_FAILURE|
|type|USER_BUILD_STEP|
|type|FETCH_SOURCE_FAILED|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions">ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1buildoptions"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1buildoptions"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1buildoptions"></a>

```json
{
  "defaultLogsBucketBehavior": "DEFAULT_LOGS_BUCKET_BEHAVIOR_UNSPECIFIED",
  "diskSizeGb": "string",
  "dynamicSubstitutions": true,
  "env": [
    "string"
  ],
  "logStreamingOption": "STREAM_DEFAULT",
  "logging": "LOGGING_UNSPECIFIED",
  "machineType": "UNSPECIFIED",
  "pool": {
    "name": "string"
  },
  "requestedVerifyOption": "NOT_VERIFIED",
  "secretEnv": [
    "string"
  ],
  "sourceProvenanceHash": [
    "NONE"
  ],
  "substitutionOption": "MUST_MATCH",
  "volumes": [
    {
      "name": "string",
      "path": "string"
    }
  ],
  "workerPool": "string"
}
```

Optional arguments to enable specific features of builds.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultLogsBucketBehavior|string|false|none|Optional. Option to specify how default logs buckets are setup.|
|diskSizeGb|string(int64)|false|none|Requested disk size for the VM that runs the build. Note that this is *NOT* "disk free"; some of the space will be used by the operating system and build utilities. Also note that this is the minimum disk size that will be allocated for the build -- the build may run with a larger disk than requested. At present, the maximum disk size is 2000GB; builds that request more than the maximum are rejected with an error.|
|dynamicSubstitutions|boolean|false|none|Option to specify whether or not to apply bash style string operations to the substitutions. NOTE: this is always enabled for triggered builds and cannot be overridden in the build configuration file.|
|env|[string]|false|none|A list of global environment variable definitions that will exist for all build steps in this build. If a variable is defined in both globally and in a build step, the variable will use the build step value. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".|
|logStreamingOption|string|false|none|Option to define build log streaming behavior to Google Cloud Storage.|
|logging|string|false|none|Option to specify the logging mode, which determines if and where build logs are stored.|
|machineType|string|false|none|Compute Engine machine type on which to run the build.|
|pool|[ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOption](#schemacontaineranalysisgoogledevtoolscloudbuildv1buildoptionspooloption)|false|none|Optional. Specification for execution on a `WorkerPool`. See [running builds in a private pool](https://cloud.google.com/build/docs/private-pools/run-builds-in-private-pool) for more information.|
|requestedVerifyOption|string|false|none|Requested verifiability options.|
|secretEnv|[string]|false|none|A list of global environment variables, which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`. These variables will be available to all build steps in this build.|
|sourceProvenanceHash|[string]|false|none|Requested hash for SourceProvenance.|
|substitutionOption|string|false|none|Option to specify behavior when there is an error in the substitution checks. NOTE: this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden in the build configuration file.|
|volumes|[[ContaineranalysisGoogleDevtoolsCloudbuildV1Volume](#schemacontaineranalysisgoogledevtoolscloudbuildv1volume)]|false|none|Global list of volumes to mount for ALL build steps Each volume is created as an empty volume prior to starting the build process. Upon completion of the build, volumes and their contents are discarded. Global volume names and paths cannot conflict with the volumes defined a build step. Using a global volume in a build with only one step is not valid as it is indicative of a build request with an incorrect configuration.|
|workerPool|string|false|none|This field deprecated; please use `pool.name` instead.|

#### Enumerated Values

|Property|Value|
|---|---|
|defaultLogsBucketBehavior|DEFAULT_LOGS_BUCKET_BEHAVIOR_UNSPECIFIED|
|defaultLogsBucketBehavior|REGIONAL_USER_OWNED_BUCKET|
|logStreamingOption|STREAM_DEFAULT|
|logStreamingOption|STREAM_ON|
|logStreamingOption|STREAM_OFF|
|logging|LOGGING_UNSPECIFIED|
|logging|LEGACY|
|logging|GCS_ONLY|
|logging|STACKDRIVER_ONLY|
|logging|CLOUD_LOGGING_ONLY|
|logging|NONE|
|machineType|UNSPECIFIED|
|machineType|N1_HIGHCPU_8|
|machineType|N1_HIGHCPU_32|
|machineType|E2_HIGHCPU_8|
|machineType|E2_HIGHCPU_32|
|requestedVerifyOption|NOT_VERIFIED|
|requestedVerifyOption|VERIFIED|
|sourceProvenanceHash|NONE|
|sourceProvenanceHash|SHA256|
|sourceProvenanceHash|MD5|
|sourceProvenanceHash|SHA512|
|substitutionOption|MUST_MATCH|
|substitutionOption|ALLOW_LOOSE|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOption">ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOption</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1buildoptionspooloption"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOption"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1buildoptionspooloption"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1buildoptionspooloption"></a>

```json
{
  "name": "string"
}
```

Details about how a build should be executed on a `WorkerPool`. See [running builds in a private pool](https://cloud.google.com/build/docs/private-pools/run-builds-in-private-pool) for more information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The `WorkerPool` resource to execute the build on. You must have `cloudbuild.workerpools.use` on the project hosting the WorkerPool. Format projects/{project}/locations/{location}/workerPools/{workerPoolId}|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStep">ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStep</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1buildstep"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStep"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1buildstep"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1buildstep"></a>

```json
{
  "allowExitCodes": [
    0
  ],
  "allowFailure": true,
  "args": [
    "string"
  ],
  "dir": "string",
  "entrypoint": "string",
  "env": [
    "string"
  ],
  "exitCode": 0,
  "id": "string",
  "name": "string",
  "pullTiming": {
    "endTime": "string",
    "startTime": "string"
  },
  "script": "string",
  "secretEnv": [
    "string"
  ],
  "status": "STATUS_UNKNOWN",
  "timeout": "string",
  "timing": {
    "endTime": "string",
    "startTime": "string"
  },
  "volumes": [
    {
      "name": "string",
      "path": "string"
    }
  ],
  "waitFor": [
    "string"
  ]
}
```

A step in the build pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowExitCodes|[integer(int32)]|false|none|Allow this build step to fail without failing the entire build if and only if the exit code is one of the specified codes. If allow_failure is also specified, this field will take precedence.|
|allowFailure|boolean|false|none|Allow this build step to fail without failing the entire build. If false, the entire build will fail if this step fails. Otherwise, the build will succeed, but this step will still have a failure status. Error information will be reported in the failure_detail field.|
|args|[string]|false|none|A list of arguments that will be presented to the step when it is started. If the image used to run the step's container has an entrypoint, the `args` are used as arguments to that entrypoint. If the image does not define an entrypoint, the first element in args is used as the entrypoint, and the remainder will be used as arguments.|
|dir|string|false|none|Working directory to use when running this step's container. If this value is a relative path, it is relative to the build's working directory. If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions, unless a `volume` for that path is specified. If the build specifies a `RepoSource` with `dir` and a step with a `dir`, which specifies an absolute path, the `RepoSource` `dir` is ignored for the step's execution.|
|entrypoint|string|false|none|Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used.|
|env|[string]|false|none|A list of environment variable definitions to be used when running a step. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".|
|exitCode|integer(int32)|false|read-only|Output only. Return code from running the step.|
|id|string|false|none|Unique identifier for this build step, used in `wait_for` to reference this build step as a dependency.|
|name|string|false|none|Required. The name of the container image that will run this particular build step. If the image is available in the host's Docker daemon's cache, it will be run directly. If not, the host will attempt to pull the image first, using the builder service account's credentials if necessary. The Docker daemon's cache will already have the latest versions of all of the officially supported build steps ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)). The Docker daemon will also have cached many of the layers for some popular images, like "ubuntu", "debian", but they will be refreshed at the time you attempt to use them. If you built an image in a previous build step, it will be stored in the host's Docker daemon's cache and is available to use as the name for a later build step.|
|pullTiming|[ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan](#schemacontaineranalysisgoogledevtoolscloudbuildv1timespan)|false|none|Output only. Stores timing information for pulling this build step's builder image only.|
|script|string|false|none|A shell script to be executed in the step. When script is provided, the user cannot specify the entrypoint or args.|
|secretEnv|[string]|false|none|A list of environment variables which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`.|
|status|string|false|read-only|Output only. Status of the build step. At this time, build step status is only updated on build completion; step status is not updated in real-time as the build progresses.|
|timeout|string(google-duration)|false|none|Time limit for executing this build step. If not defined, the step has no time limit and will be allowed to continue to run until either it completes or the build itself times out.|
|timing|[ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan](#schemacontaineranalysisgoogledevtoolscloudbuildv1timespan)|false|none|Output only. Stores timing information for executing this build step.|
|volumes|[[ContaineranalysisGoogleDevtoolsCloudbuildV1Volume](#schemacontaineranalysisgoogledevtoolscloudbuildv1volume)]|false|none|List of volumes to mount into the build step. Each volume is created as an empty volume prior to execution of the build step. Upon completion of the build, volumes and their contents are discarded. Using a named volume in only one step is not valid as it is indicative of a build request with an incorrect configuration.|
|waitFor|[string]|false|none|The ID(s) of the step(s) that this build step depends on. This build step will not start until all the build steps in `wait_for` have completed successfully. If `wait_for` is empty, this build step will start when all previous build steps in the `Build.Steps` list have completed successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|STATUS_UNKNOWN|
|status|PENDING|
|status|QUEUED|
|status|WORKING|
|status|SUCCESS|
|status|FAILURE|
|status|INTERNAL_ERROR|
|status|TIMEOUT|
|status|CANCELLED|
|status|EXPIRED|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarning">ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarning</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1buildwarning"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarning"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1buildwarning"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1buildwarning"></a>

```json
{
  "priority": "PRIORITY_UNSPECIFIED",
  "text": "string"
}
```

A non-fatal problem encountered during the execution of the build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|priority|string|false|none|The priority for this warning.|
|text|string|false|none|Explanation of the warning generated.|

#### Enumerated Values

|Property|Value|
|---|---|
|priority|PRIORITY_UNSPECIFIED|
|priority|INFO|
|priority|WARNING|
|priority|ALERT|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage">ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1builtimage"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1builtimage"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1builtimage"></a>

```json
{
  "digest": "string",
  "name": "string",
  "pushTiming": {
    "endTime": "string",
    "startTime": "string"
  }
}
```

An image built by the pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|digest|string|false|none|Docker Registry 2.0 digest.|
|name|string|false|none|Name used to push the container image to Google Container Registry, as presented to `docker push`.|
|pushTiming|[ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan](#schemacontaineranalysisgoogledevtoolscloudbuildv1timespan)|false|none|Output only. Stores timing information for pushing the specified image.|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes">ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1filehashes"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1filehashes"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1filehashes"></a>

```json
{
  "fileHash": [
    {
      "type": "NONE",
      "value": "string"
    }
  ]
}
```

Container message for hashes of byte content of files, used in SourceProvenance messages to verify integrity of source input to the build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileHash|[[ContaineranalysisGoogleDevtoolsCloudbuildV1Hash](#schemacontaineranalysisgoogledevtoolscloudbuildv1hash)]|false|none|Collection of file hashes.|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource">ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1gitsource"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1gitsource"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1gitsource"></a>

```json
{
  "dir": "string",
  "revision": "string",
  "url": "string"
}
```

Location of the source in any accessible Git repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dir|string|false|none|Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution.|
|revision|string|false|none|The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. Cloud Build uses `git fetch` to fetch the revision from the Git repository; therefore make sure that the string you provide for `revision` is parsable by the command. For information on string values accepted by `git fetch`, see https://git-scm.com/docs/gitrevisions#_specifying_revisions. For information on `git fetch`, see https://git-scm.com/docs/git-fetch.|
|url|string|false|none|Location of the Git repo to build. This will be used as a `git remote`, see https://git-scm.com/docs/git-remote.|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1Hash">ContaineranalysisGoogleDevtoolsCloudbuildV1Hash</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1hash"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1Hash"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1hash"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1hash"></a>

```json
{
  "type": "NONE",
  "value": "string"
}
```

Container message for hash values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The type of hash that was performed.|
|value|string(byte)|false|none|The hash value.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|NONE|
|type|SHA256|
|type|MD5|
|type|SHA512|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1InlineSecret">ContaineranalysisGoogleDevtoolsCloudbuildV1InlineSecret</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1inlinesecret"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1InlineSecret"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1inlinesecret"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1inlinesecret"></a>

```json
{
  "envMap": {
    "property1": "string",
    "property2": "string"
  },
  "kmsKeyName": "string"
}
```

Pairs a set of secret environment variables mapped to encrypted values with the Cloud KMS key to use to decrypt the value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|envMap|object|false|none|Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets.|
|kmsKeyName|string|false|none|Resource name of Cloud KMS crypto key to decrypt the encrypted value. In format: projects/*/locations/*/keyRings/*/cryptoKeys/*|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource">ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1reposource"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1reposource"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1reposource"></a>

```json
{
  "branchName": "string",
  "commitSha": "string",
  "dir": "string",
  "invertRegex": true,
  "projectId": "string",
  "repoName": "string",
  "substitutions": {
    "property1": "string",
    "property2": "string"
  },
  "tagName": "string"
}
```

Location of the source in a Google Cloud Source Repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branchName|string|false|none|Regex matching branches to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax|
|commitSha|string|false|none|Explicit commit SHA to build.|
|dir|string|false|none|Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution.|
|invertRegex|boolean|false|none|Only trigger a build if the revision regex does NOT match the revision regex.|
|projectId|string|false|none|ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed.|
|repoName|string|false|none|Name of the Cloud Source Repository.|
|substitutions|object|false|none|Substitutions to use in a triggered build. Should only be used with RunBuildTrigger|
|tagName|string|false|none|Regex matching tags to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1Results">ContaineranalysisGoogleDevtoolsCloudbuildV1Results</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1results"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1Results"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1results"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1results"></a>

```json
{
  "artifactManifest": "string",
  "artifactTiming": {
    "endTime": "string",
    "startTime": "string"
  },
  "buildStepImages": [
    "string"
  ],
  "buildStepOutputs": [
    "string"
  ],
  "images": [
    {
      "digest": "string",
      "name": "string",
      "pushTiming": {
        "endTime": "string",
        "startTime": "string"
      }
    }
  ],
  "mavenArtifacts": [
    {
      "fileHashes": {
        "fileHash": [
          {
            "type": "NONE",
            "value": "string"
          }
        ]
      },
      "pushTiming": {
        "endTime": "string",
        "startTime": "string"
      },
      "uri": "string"
    }
  ],
  "npmPackages": [
    {
      "fileHashes": {
        "fileHash": [
          {
            "type": "NONE",
            "value": "string"
          }
        ]
      },
      "pushTiming": {
        "endTime": "string",
        "startTime": "string"
      },
      "uri": "string"
    }
  ],
  "numArtifacts": "string",
  "pythonPackages": [
    {
      "fileHashes": {
        "fileHash": [
          {
            "type": "NONE",
            "value": "string"
          }
        ]
      },
      "pushTiming": {
        "endTime": "string",
        "startTime": "string"
      },
      "uri": "string"
    }
  ]
}
```

Artifacts created by the build pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artifactManifest|string|false|none|Path to the artifact manifest for non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage.|
|artifactTiming|[ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan](#schemacontaineranalysisgoogledevtoolscloudbuildv1timespan)|false|none|Time to push all non-container artifacts to Cloud Storage.|
|buildStepImages|[string]|false|none|List of build step digests, in the order corresponding to build step indices.|
|buildStepOutputs|[string(byte)]|false|none|List of build step outputs, produced by builder images, in the order corresponding to build step indices. [Cloud Builders](https://cloud.google.com/cloud-build/docs/cloud-builders) can produce this output by writing to `$BUILDER_OUTPUT/output`. Only the first 4KB of data is stored.|
|images|[[ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage](#schemacontaineranalysisgoogledevtoolscloudbuildv1builtimage)]|false|none|Container images that were built as a part of the build.|
|mavenArtifacts|[[ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact](#schemacontaineranalysisgoogledevtoolscloudbuildv1uploadedmavenartifact)]|false|none|Maven artifacts uploaded to Artifact Registry at the end of the build.|
|npmPackages|[[ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage](#schemacontaineranalysisgoogledevtoolscloudbuildv1uploadednpmpackage)]|false|none|Npm packages uploaded to Artifact Registry at the end of the build.|
|numArtifacts|string(int64)|false|none|Number of non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage.|
|pythonPackages|[[ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackage](#schemacontaineranalysisgoogledevtoolscloudbuildv1uploadedpythonpackage)]|false|none|Python artifacts uploaded to Artifact Registry at the end of the build.|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1Secret">ContaineranalysisGoogleDevtoolsCloudbuildV1Secret</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1secret"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1Secret"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1secret"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1secret"></a>

```json
{
  "kmsKeyName": "string",
  "secretEnv": {
    "property1": "string",
    "property2": "string"
  }
}
```

Pairs a set of secret environment variables containing encrypted values with the Cloud KMS key to use to decrypt the value. Note: Use `kmsKeyName` with `available_secrets` instead of using `kmsKeyName` with `secret`. For instructions see: https://cloud.google.com/cloud-build/docs/securing-builds/use-encrypted-credentials.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kmsKeyName|string|false|none|Cloud KMS key name to use to decrypt these envs.|
|secretEnv|object|false|none|Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets.|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1SecretManagerSecret">ContaineranalysisGoogleDevtoolsCloudbuildV1SecretManagerSecret</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1secretmanagersecret"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1SecretManagerSecret"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1secretmanagersecret"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1secretmanagersecret"></a>

```json
{
  "env": "string",
  "versionName": "string"
}
```

Pairs a secret environment variable with a SecretVersion in Secret Manager.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|env|string|false|none|Environment variable name to associate with the secret. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step.|
|versionName|string|false|none|Resource name of the SecretVersion. In format: projects/*/secrets/*/versions/*|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets">ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1secrets"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1secrets"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1secrets"></a>

```json
{
  "inline": [
    {
      "envMap": {
        "property1": "string",
        "property2": "string"
      },
      "kmsKeyName": "string"
    }
  ],
  "secretManager": [
    {
      "env": "string",
      "versionName": "string"
    }
  ]
}
```

Secrets and secret environment variables.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inline|[[ContaineranalysisGoogleDevtoolsCloudbuildV1InlineSecret](#schemacontaineranalysisgoogledevtoolscloudbuildv1inlinesecret)]|false|none|Secrets encrypted with KMS key and the associated secret environment variable.|
|secretManager|[[ContaineranalysisGoogleDevtoolsCloudbuildV1SecretManagerSecret](#schemacontaineranalysisgoogledevtoolscloudbuildv1secretmanagersecret)]|false|none|Secrets in Secret Manager and associated secret environment variable.|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1Source">ContaineranalysisGoogleDevtoolsCloudbuildV1Source</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1source"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1Source"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1source"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1source"></a>

```json
{
  "gitSource": {
    "dir": "string",
    "revision": "string",
    "url": "string"
  },
  "repoSource": {
    "branchName": "string",
    "commitSha": "string",
    "dir": "string",
    "invertRegex": true,
    "projectId": "string",
    "repoName": "string",
    "substitutions": {
      "property1": "string",
      "property2": "string"
    },
    "tagName": "string"
  },
  "storageSource": {
    "bucket": "string",
    "generation": "string",
    "object": "string"
  },
  "storageSourceManifest": {
    "bucket": "string",
    "generation": "string",
    "object": "string"
  }
}
```

Location of the source in a supported storage service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gitSource|[ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource](#schemacontaineranalysisgoogledevtoolscloudbuildv1gitsource)|false|none|If provided, get the source from this Git repository.|
|repoSource|[ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource](#schemacontaineranalysisgoogledevtoolscloudbuildv1reposource)|false|none|If provided, get the source from this location in a Cloud Source Repository.|
|storageSource|[ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource](#schemacontaineranalysisgoogledevtoolscloudbuildv1storagesource)|false|none|If provided, get the source from this location in Google Cloud Storage.|
|storageSourceManifest|[ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest](#schemacontaineranalysisgoogledevtoolscloudbuildv1storagesourcemanifest)|false|none|If provided, get the source from this manifest in Google Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher).|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance">ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1sourceprovenance"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1sourceprovenance"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1sourceprovenance"></a>

```json
{
  "fileHashes": {
    "property1": {
      "fileHash": [
        {
          "type": "NONE",
          "value": "string"
        }
      ]
    },
    "property2": {
      "fileHash": [
        {
          "type": "NONE",
          "value": "string"
        }
      ]
    }
  },
  "resolvedRepoSource": {
    "branchName": "string",
    "commitSha": "string",
    "dir": "string",
    "invertRegex": true,
    "projectId": "string",
    "repoName": "string",
    "substitutions": {
      "property1": "string",
      "property2": "string"
    },
    "tagName": "string"
  },
  "resolvedStorageSource": {
    "bucket": "string",
    "generation": "string",
    "object": "string"
  },
  "resolvedStorageSourceManifest": {
    "bucket": "string",
    "generation": "string",
    "object": "string"
  }
}
```

Provenance of the source. Ways to find the original source, or verify that some source was used for this build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileHashes|object|false|read-only|Output only. Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. Note that `FileHashes` will only be populated if `BuildOptions` has requested a `SourceProvenanceHash`. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (`.tar.gz`), the `FileHash` will be for the single path to that file.|
|resolvedRepoSource|[ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource](#schemacontaineranalysisgoogledevtoolscloudbuildv1reposource)|false|none|A copy of the build's `source.repo_source`, if exists, with any revisions resolved.|
|resolvedStorageSource|[ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource](#schemacontaineranalysisgoogledevtoolscloudbuildv1storagesource)|false|none|A copy of the build's `source.storage_source`, if exists, with any generations resolved.|
|resolvedStorageSourceManifest|[ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest](#schemacontaineranalysisgoogledevtoolscloudbuildv1storagesourcemanifest)|false|none|A copy of the build's `source.storage_source_manifest`, if exists, with any revisions resolved. This feature is in Preview.|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource">ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1storagesource"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1storagesource"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1storagesource"></a>

```json
{
  "bucket": "string",
  "generation": "string",
  "object": "string"
}
```

Location of the source in an archive file in Google Cloud Storage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|string|false|none|Google Cloud Storage bucket containing the source (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).|
|generation|string(int64)|false|none|Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used.|
|object|string|false|none|Google Cloud Storage object containing the source. This object must be a zipped (`.zip`) or gzipped archive file (`.tar.gz`) containing source to build.|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest">ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1storagesourcemanifest"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1storagesourcemanifest"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1storagesourcemanifest"></a>

```json
{
  "bucket": "string",
  "generation": "string",
  "object": "string"
}
```

Location of the source manifest in Google Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|string|false|none|Google Cloud Storage bucket containing the source manifest (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).|
|generation|string(int64)|false|none|Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used.|
|object|string|false|none|Google Cloud Storage object containing the source manifest. This object must be a JSON file.|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan">ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1timespan"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1timespan"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1timespan"></a>

```json
{
  "endTime": "string",
  "startTime": "string"
}
```

Start and end times for a build execution phase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|End of time span.|
|startTime|string(google-datetime)|false|none|Start of time span.|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact">ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1uploadedmavenartifact"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1uploadedmavenartifact"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1uploadedmavenartifact"></a>

```json
{
  "fileHashes": {
    "fileHash": [
      {
        "type": "NONE",
        "value": "string"
      }
    ]
  },
  "pushTiming": {
    "endTime": "string",
    "startTime": "string"
  },
  "uri": "string"
}
```

A Maven artifact uploaded using the MavenArtifact directive.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileHashes|[ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes](#schemacontaineranalysisgoogledevtoolscloudbuildv1filehashes)|false|none|Hash types and values of the Maven Artifact.|
|pushTiming|[ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan](#schemacontaineranalysisgoogledevtoolscloudbuildv1timespan)|false|none|Output only. Stores timing information for pushing the specified artifact.|
|uri|string|false|none|URI of the uploaded artifact.|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage">ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1uploadednpmpackage"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1uploadednpmpackage"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1uploadednpmpackage"></a>

```json
{
  "fileHashes": {
    "fileHash": [
      {
        "type": "NONE",
        "value": "string"
      }
    ]
  },
  "pushTiming": {
    "endTime": "string",
    "startTime": "string"
  },
  "uri": "string"
}
```

An npm package uploaded to Artifact Registry using the NpmPackage directive.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileHashes|[ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes](#schemacontaineranalysisgoogledevtoolscloudbuildv1filehashes)|false|none|Hash types and values of the npm package.|
|pushTiming|[ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan](#schemacontaineranalysisgoogledevtoolscloudbuildv1timespan)|false|none|Output only. Stores timing information for pushing the specified artifact.|
|uri|string|false|none|URI of the uploaded npm package.|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackage">ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackage</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1uploadedpythonpackage"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackage"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1uploadedpythonpackage"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1uploadedpythonpackage"></a>

```json
{
  "fileHashes": {
    "fileHash": [
      {
        "type": "NONE",
        "value": "string"
      }
    ]
  },
  "pushTiming": {
    "endTime": "string",
    "startTime": "string"
  },
  "uri": "string"
}
```

Artifact uploaded using the PythonPackage directive.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileHashes|[ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes](#schemacontaineranalysisgoogledevtoolscloudbuildv1filehashes)|false|none|Hash types and values of the Python Artifact.|
|pushTiming|[ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan](#schemacontaineranalysisgoogledevtoolscloudbuildv1timespan)|false|none|Output only. Stores timing information for pushing the specified artifact.|
|uri|string|false|none|URI of the uploaded artifact.|

<h2 id="tocS_ContaineranalysisGoogleDevtoolsCloudbuildV1Volume">ContaineranalysisGoogleDevtoolsCloudbuildV1Volume</h2>
<!-- backwards compatibility -->
<a id="schemacontaineranalysisgoogledevtoolscloudbuildv1volume"></a>
<a id="schema_ContaineranalysisGoogleDevtoolsCloudbuildV1Volume"></a>
<a id="tocScontaineranalysisgoogledevtoolscloudbuildv1volume"></a>
<a id="tocscontaineranalysisgoogledevtoolscloudbuildv1volume"></a>

```json
{
  "name": "string",
  "path": "string"
}
```

Volume describes a Docker container volume which is mounted into build steps in order to persist files across build step execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the volume to mount. Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps.|
|path|string|false|none|Path at which to mount the volume. Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths.|

<h2 id="tocS_Deployable">Deployable</h2>
<!-- backwards compatibility -->
<a id="schemadeployable"></a>
<a id="schema_Deployable"></a>
<a id="tocSdeployable"></a>
<a id="tocsdeployable"></a>

```json
{
  "resourceUri": [
    "string"
  ]
}
```

An artifact that can be deployed in some runtime.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceUri|[string]|false|none|Required. Resource URI for the artifact being deployed.|

<h2 id="tocS_Deployment">Deployment</h2>
<!-- backwards compatibility -->
<a id="schemadeployment"></a>
<a id="schema_Deployment"></a>
<a id="tocSdeployment"></a>
<a id="tocsdeployment"></a>

```json
{
  "address": "string",
  "config": "string",
  "deployTime": "string",
  "platform": "PLATFORM_UNSPECIFIED",
  "resourceUri": [
    "string"
  ],
  "undeployTime": "string",
  "userEmail": "string"
}
```

The period during which some deployable was active in a runtime.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|Address of the runtime element hosting this deployment.|
|config|string|false|none|Configuration used to create this deployment.|
|deployTime|string(google-datetime)|false|none|Required. Beginning of the lifetime of this deployment.|
|platform|string|false|none|Platform hosting this deployment.|
|resourceUri|[string]|false|none|Output only. Resource URI for the artifact being deployed taken from the deployable field with the same name.|
|undeployTime|string(google-datetime)|false|none|End of the lifetime of this deployment.|
|userEmail|string|false|none|Identity of the user that triggered this deployment.|

#### Enumerated Values

|Property|Value|
|---|---|
|platform|PLATFORM_UNSPECIFIED|
|platform|GKE|
|platform|FLEX|
|platform|CUSTOM|

<h2 id="tocS_Derived">Derived</h2>
<!-- backwards compatibility -->
<a id="schemaderived"></a>
<a id="schema_Derived"></a>
<a id="tocSderived"></a>
<a id="tocsderived"></a>

```json
{
  "baseResourceUrl": "string",
  "distance": 0,
  "fingerprint": {
    "v1Name": "string",
    "v2Blob": [
      "string"
    ],
    "v2Name": "string"
  },
  "layerInfo": [
    {
      "arguments": "string",
      "directive": "DIRECTIVE_UNSPECIFIED"
    }
  ]
}
```

Derived describes the derived image portion (Occurrence) of the DockerImage relationship. This image would be produced from a Dockerfile with FROM .

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseResourceUrl|string|false|none|Output only. This contains the base image URL for the derived image occurrence.|
|distance|integer(int32)|false|none|Output only. The number of layers by which this image differs from the associated image basis.|
|fingerprint|[Fingerprint](#schemafingerprint)|false|none|Required. The fingerprint of the derived image.|
|layerInfo|[[Layer](#schemalayer)]|false|none|This contains layer-specific metadata, if populated it has length "distance" and is ordered with [distance] being the layer immediately following the base image and [1] being the final layer.|

<h2 id="tocS_Detail">Detail</h2>
<!-- backwards compatibility -->
<a id="schemadetail"></a>
<a id="schema_Detail"></a>
<a id="tocSdetail"></a>
<a id="tocsdetail"></a>

```json
{
  "cpeUri": "string",
  "description": "string",
  "fixedLocation": {
    "cpeUri": "string",
    "package": "string",
    "version": {
      "epoch": 0,
      "inclusive": true,
      "kind": "VERSION_KIND_UNSPECIFIED",
      "name": "string",
      "revision": "string"
    }
  },
  "isObsolete": true,
  "maxAffectedVersion": {
    "epoch": 0,
    "inclusive": true,
    "kind": "VERSION_KIND_UNSPECIFIED",
    "name": "string",
    "revision": "string"
  },
  "minAffectedVersion": {
    "epoch": 0,
    "inclusive": true,
    "kind": "VERSION_KIND_UNSPECIFIED",
    "name": "string",
    "revision": "string"
  },
  "package": "string",
  "packageType": "string",
  "severityName": "string",
  "source": "string",
  "sourceUpdateTime": "string",
  "vendor": "string"
}
```

Identifies all appearances of this vulnerability in the package for a specific distro/location. For example: glibc in cpe:/o:debian:debian_linux:8 for versions 2.1 - 2.2

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpeUri|string|false|none|Required. The CPE URI in [cpe format](https://cpe.mitre.org/specification/) in which the vulnerability manifests. Examples include distro or storage location for vulnerable jar.|
|description|string|false|none|A vendor-specific description of this note.|
|fixedLocation|[VulnerabilityLocation](#schemavulnerabilitylocation)|false|none|The fix for this specific package version.|
|isObsolete|boolean|false|none|Whether this detail is obsolete. Occurrences are expected not to point to obsolete details.|
|maxAffectedVersion|[Version](#schemaversion)|false|none|The max version of the package in which the vulnerability exists.|
|minAffectedVersion|[Version](#schemaversion)|false|none|The min version of the package in which the vulnerability exists.|
|package|string|false|none|Required. The name of the package where the vulnerability was found.|
|packageType|string|false|none|The type of package; whether native or non native(ruby gems, node.js packages etc).|
|severityName|string|false|none|The severity (eg: distro assigned severity) for this vulnerability.|
|source|string|false|none|The source from which the information in this Detail was obtained.|
|sourceUpdateTime|string(google-datetime)|false|none|The time this information was last changed at the source. This is an upstream timestamp from the underlying information source - e.g. Ubuntu security tracker.|
|vendor|string|false|none|The name of the vendor of the product.|

<h2 id="tocS_Details">Details</h2>
<!-- backwards compatibility -->
<a id="schemadetails"></a>
<a id="schema_Details"></a>
<a id="tocSdetails"></a>
<a id="tocsdetails"></a>

```json
{
  "attestation": {
    "genericSignedAttestation": {
      "contentType": "CONTENT_TYPE_UNSPECIFIED",
      "serializedPayload": "string",
      "signatures": [
        {
          "publicKeyId": "string",
          "signature": "string"
        }
      ]
    },
    "pgpSignedAttestation": {
      "contentType": "CONTENT_TYPE_UNSPECIFIED",
      "pgpKeyId": "string",
      "signature": "string"
    }
  }
}
```

Details of an attestation occurrence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attestation|[Attestation](#schemaattestation)|false|none|Required. Attestation for the resource.|

<h2 id="tocS_Digest">Digest</h2>
<!-- backwards compatibility -->
<a id="schemadigest"></a>
<a id="schema_Digest"></a>
<a id="tocSdigest"></a>
<a id="tocsdigest"></a>

```json
{
  "algo": "string",
  "digestBytes": "string"
}
```

Digest information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algo|string|false|none|`SHA1`, `SHA512` etc.|
|digestBytes|string(byte)|false|none|Value of the digest.|

<h2 id="tocS_Discovered">Discovered</h2>
<!-- backwards compatibility -->
<a id="schemadiscovered"></a>
<a id="schema_Discovered"></a>
<a id="tocSdiscovered"></a>
<a id="tocsdiscovered"></a>

```json
{
  "analysisCompleted": {
    "analysisType": [
      "string"
    ]
  },
  "analysisError": [
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
  ],
  "analysisStatus": "ANALYSIS_STATUS_UNSPECIFIED",
  "analysisStatusError": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "continuousAnalysis": "CONTINUOUS_ANALYSIS_UNSPECIFIED",
  "lastAnalysisTime": "string"
}
```

Provides information about the analysis status of a discovered resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analysisCompleted|[AnalysisCompleted](#schemaanalysiscompleted)|false|none|Indicates which analysis completed successfully. Multiple types of analysis can be performed on a single resource.|
|analysisError|[[Status](#schemastatus)]|false|none|Indicates any errors encountered during analysis of a resource. There could be 0 or more of these errors.|
|analysisStatus|string|false|none|The status of discovery for the resource.|
|analysisStatusError|[Status](#schemastatus)|false|none|When an error is encountered this will contain a LocalizedMessage under details to show to the user. The LocalizedMessage is output only and populated by the API.|
|continuousAnalysis|string|false|none|Whether the resource is continuously analyzed.|
|lastAnalysisTime|string(google-datetime)|false|none|The last time continuous analysis was done for this resource. Deprecated, do not use.|

#### Enumerated Values

|Property|Value|
|---|---|
|analysisStatus|ANALYSIS_STATUS_UNSPECIFIED|
|analysisStatus|PENDING|
|analysisStatus|SCANNING|
|analysisStatus|FINISHED_SUCCESS|
|analysisStatus|COMPLETE|
|analysisStatus|FINISHED_FAILED|
|analysisStatus|FINISHED_UNSUPPORTED|
|continuousAnalysis|CONTINUOUS_ANALYSIS_UNSPECIFIED|
|continuousAnalysis|ACTIVE|
|continuousAnalysis|INACTIVE|

<h2 id="tocS_Discovery">Discovery</h2>
<!-- backwards compatibility -->
<a id="schemadiscovery"></a>
<a id="schema_Discovery"></a>
<a id="tocSdiscovery"></a>
<a id="tocsdiscovery"></a>

```json
{
  "analysisKind": "NOTE_KIND_UNSPECIFIED"
}
```

A note that indicates a type of analysis a provider would perform. This note exists in a provider's project. A `Discovery` occurrence is created in a consumer's project at the start of analysis.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analysisKind|string|false|none|Required. Immutable. The kind of analysis that is handled by this discovery.|

#### Enumerated Values

|Property|Value|
|---|---|
|analysisKind|NOTE_KIND_UNSPECIFIED|
|analysisKind|VULNERABILITY|
|analysisKind|BUILD|
|analysisKind|IMAGE|
|analysisKind|PACKAGE|
|analysisKind|DEPLOYMENT|
|analysisKind|DISCOVERY|
|analysisKind|ATTESTATION|
|analysisKind|INTOTO|
|analysisKind|SBOM|
|analysisKind|SPDX_PACKAGE|
|analysisKind|SPDX_FILE|
|analysisKind|SPDX_RELATIONSHIP|
|analysisKind|VULNERABILITY_ASSESSMENT|
|analysisKind|SBOM_REFERENCE|

<h2 id="tocS_Distribution">Distribution</h2>
<!-- backwards compatibility -->
<a id="schemadistribution"></a>
<a id="schema_Distribution"></a>
<a id="tocSdistribution"></a>
<a id="tocsdistribution"></a>

```json
{
  "architecture": "ARCHITECTURE_UNSPECIFIED",
  "cpeUri": "string",
  "description": "string",
  "latestVersion": {
    "epoch": 0,
    "inclusive": true,
    "kind": "VERSION_KIND_UNSPECIFIED",
    "name": "string",
    "revision": "string"
  },
  "maintainer": "string",
  "url": "string"
}
```

This represents a particular channel of distribution for a given package. E.g., Debian's jessie-backports dpkg mirror.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|architecture|string|false|none|The CPU architecture for which packages in this distribution channel were built.|
|cpeUri|string|false|none|Required. The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package.|
|description|string|false|none|The distribution channel-specific description of this package.|
|latestVersion|[Version](#schemaversion)|false|none|The latest available version of this package in this distribution channel.|
|maintainer|string|false|none|A freeform string denoting the maintainer of this package.|
|url|string|false|none|The distribution channel-specific homepage for this package.|

#### Enumerated Values

|Property|Value|
|---|---|
|architecture|ARCHITECTURE_UNSPECIFIED|
|architecture|X86|
|architecture|X64|

<h2 id="tocS_DocumentNote">DocumentNote</h2>
<!-- backwards compatibility -->
<a id="schemadocumentnote"></a>
<a id="schema_DocumentNote"></a>
<a id="tocSdocumentnote"></a>
<a id="tocsdocumentnote"></a>

```json
{
  "dataLicence": "string",
  "spdxVersion": "string"
}
```

DocumentNote represents an SPDX Document Creation Information section: https://spdx.github.io/spdx-spec/v2.3/document-creation-information/

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataLicence|string|false|none|Compliance with the SPDX specification includes populating the SPDX fields therein with data related to such fields ("SPDX-Metadata")|
|spdxVersion|string|false|none|Provide a reference number that can be used to understand how to parse and interpret the rest of the file|

<h2 id="tocS_DocumentOccurrence">DocumentOccurrence</h2>
<!-- backwards compatibility -->
<a id="schemadocumentoccurrence"></a>
<a id="schema_DocumentOccurrence"></a>
<a id="tocSdocumentoccurrence"></a>
<a id="tocsdocumentoccurrence"></a>

```json
{
  "createTime": "string",
  "creatorComment": "string",
  "creators": [
    "string"
  ],
  "documentComment": "string",
  "externalDocumentRefs": [
    "string"
  ],
  "id": "string",
  "licenseListVersion": "string",
  "namespace": "string",
  "title": "string"
}
```

DocumentOccurrence represents an SPDX Document Creation Information section: https://spdx.github.io/spdx-spec/v2.3/document-creation-information/

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Identify when the SPDX file was originally created. The date is to be specified according to combined date and time in UTC format as specified in ISO 8601 standard|
|creatorComment|string|false|none|A field for creators of the SPDX file to provide general comments about the creation of the SPDX file or any other relevant comment not included in the other fields|
|creators|[string]|false|none|Identify who (or what, in the case of a tool) created the SPDX file. If the SPDX file was created by an individual, indicate the person's name|
|documentComment|string|false|none|A field for creators of the SPDX file content to provide comments to the consumers of the SPDX document|
|externalDocumentRefs|[string]|false|none|Identify any external SPDX documents referenced within this SPDX document|
|id|string|false|none|Identify the current SPDX document which may be referenced in relationships by other files, packages internally and documents externally|
|licenseListVersion|string|false|none|A field for creators of the SPDX file to provide the version of the SPDX License List used when the SPDX file was created|
|namespace|string|false|none|Provide an SPDX document specific namespace as a unique absolute Uniform Resource Identifier (URI) as specified in RFC-3986, with the exception of the ‘#’ delimiter|
|title|string|false|none|Identify name of this document as designated by creator|

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

<h2 id="tocS_Envelope">Envelope</h2>
<!-- backwards compatibility -->
<a id="schemaenvelope"></a>
<a id="schema_Envelope"></a>
<a id="tocSenvelope"></a>
<a id="tocsenvelope"></a>

```json
{
  "payload": "string",
  "payloadType": "string",
  "signatures": [
    {
      "keyid": "string",
      "sig": "string"
    }
  ]
}
```

MUST match https://github.com/secure-systems-lab/dsse/blob/master/envelope.proto. An authenticated message of arbitrary type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|string(byte)|false|none|none|
|payloadType|string|false|none|none|
|signatures|[[EnvelopeSignature](#schemaenvelopesignature)]|false|none|none|

<h2 id="tocS_EnvelopeSignature">EnvelopeSignature</h2>
<!-- backwards compatibility -->
<a id="schemaenvelopesignature"></a>
<a id="schema_EnvelopeSignature"></a>
<a id="tocSenvelopesignature"></a>
<a id="tocsenvelopesignature"></a>

```json
{
  "keyid": "string",
  "sig": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyid|string|false|none|none|
|sig|string(byte)|false|none|none|

<h2 id="tocS_Environment">Environment</h2>
<!-- backwards compatibility -->
<a id="schemaenvironment"></a>
<a id="schema_Environment"></a>
<a id="tocSenvironment"></a>
<a id="tocsenvironment"></a>

```json
{
  "customValues": {
    "property1": "string",
    "property2": "string"
  }
}
```

Defines an object for the environment field in in-toto links. The suggested fields are "variables", "filesystem", and "workdir".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customValues|object|false|none|none|

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

<h2 id="tocS_ExternalRef">ExternalRef</h2>
<!-- backwards compatibility -->
<a id="schemaexternalref"></a>
<a id="schema_ExternalRef"></a>
<a id="tocSexternalref"></a>
<a id="tocsexternalref"></a>

```json
{
  "category": "CATEGORY_UNSPECIFIED",
  "comment": "string",
  "locator": "string",
  "type": "string"
}
```

An External Reference allows a Package to reference an external source of additional information, metadata, enumerations, asset identifiers, or downloadable content believed to be relevant to the Package

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|An External Reference allows a Package to reference an external source of additional information, metadata, enumerations, asset identifiers, or downloadable content believed to be relevant to the Package|
|comment|string|false|none|Human-readable information about the purpose and target of the reference|
|locator|string|false|none|The unique string with no spaces necessary to access the package-specific information, metadata, or content within the target location|
|type|string|false|none|Type of category (e.g. 'npm' for the PACKAGE_MANAGER category)|

#### Enumerated Values

|Property|Value|
|---|---|
|category|CATEGORY_UNSPECIFIED|
|category|SECURITY|
|category|PACKAGE_MANAGER|
|category|PERSISTENT_ID|
|category|OTHER|

<h2 id="tocS_FileHashes">FileHashes</h2>
<!-- backwards compatibility -->
<a id="schemafilehashes"></a>
<a id="schema_FileHashes"></a>
<a id="tocSfilehashes"></a>
<a id="tocsfilehashes"></a>

```json
{
  "fileHash": [
    {
      "type": "HASH_TYPE_UNSPECIFIED",
      "value": "string"
    }
  ]
}
```

Container message for hashes of byte content of files, used in source messages to verify integrity of source input to the build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileHash|[[Hash](#schemahash)]|false|none|Required. Collection of file hashes.|

<h2 id="tocS_FileNote">FileNote</h2>
<!-- backwards compatibility -->
<a id="schemafilenote"></a>
<a id="schema_FileNote"></a>
<a id="tocSfilenote"></a>
<a id="tocsfilenote"></a>

```json
{
  "checksum": [
    "string"
  ],
  "fileType": "FILE_TYPE_UNSPECIFIED",
  "title": "string"
}
```

FileNote represents an SPDX File Information section: https://spdx.github.io/spdx-spec/4-file-information/

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checksum|[string]|false|none|Provide a unique identifier to match analysis information on each specific file in a package|
|fileType|string|false|none|This field provides information about the type of file identified|
|title|string|false|none|Identify the full path and filename that corresponds to the file information in this section|

#### Enumerated Values

|Property|Value|
|---|---|
|fileType|FILE_TYPE_UNSPECIFIED|
|fileType|SOURCE|
|fileType|BINARY|
|fileType|ARCHIVE|
|fileType|APPLICATION|
|fileType|AUDIO|
|fileType|IMAGE|
|fileType|TEXT|
|fileType|VIDEO|
|fileType|DOCUMENTATION|
|fileType|SPDX|
|fileType|OTHER|

<h2 id="tocS_FileOccurrence">FileOccurrence</h2>
<!-- backwards compatibility -->
<a id="schemafileoccurrence"></a>
<a id="schema_FileOccurrence"></a>
<a id="tocSfileoccurrence"></a>
<a id="tocsfileoccurrence"></a>

```json
{
  "attributions": [
    "string"
  ],
  "comment": "string",
  "contributors": [
    "string"
  ],
  "copyright": "string",
  "filesLicenseInfo": [
    "string"
  ],
  "id": "string",
  "licenseConcluded": {
    "comments": "string",
    "expression": "string"
  },
  "notice": "string"
}
```

FileOccurrence represents an SPDX File Information section: https://spdx.github.io/spdx-spec/4-file-information/

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributions|[string]|false|none|This field provides a place for the SPDX data creator to record, at the file level, acknowledgements that may be needed to be communicated in some contexts|
|comment|string|false|none|This field provides a place for the SPDX file creator to record any general comments about the file|
|contributors|[string]|false|none|This field provides a place for the SPDX file creator to record file contributors|
|copyright|string|false|none|Identify the copyright holder of the file, as well as any dates present|
|filesLicenseInfo|[string]|false|none|This field contains the license information actually found in the file, if any|
|id|string|false|none|Uniquely identify any element in an SPDX document which may be referenced by other elements|
|licenseConcluded|[License](#schemalicense)|false|none|This field contains the license the SPDX file creator has concluded as governing the file or alternative values if the governing license cannot be determined|
|notice|string|false|none|This field provides a place for the SPDX file creator to record license notices or other such related notices found in the file|

<h2 id="tocS_Fingerprint">Fingerprint</h2>
<!-- backwards compatibility -->
<a id="schemafingerprint"></a>
<a id="schema_Fingerprint"></a>
<a id="tocSfingerprint"></a>
<a id="tocsfingerprint"></a>

```json
{
  "v1Name": "string",
  "v2Blob": [
    "string"
  ],
  "v2Name": "string"
}
```

A set of properties that uniquely identify a given Docker image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|v1Name|string|false|none|Required. The layer ID of the final layer in the Docker image's v1 representation.|
|v2Blob|[string]|false|none|Required. The ordered list of v2 blobs that represent a given image.|
|v2Name|string|false|none|Output only. The name of the image's v2 blobs computed via: [bottom] := v2_blobbottom := sha256(v2_blob[N] + " " + v2_name[N+1]) Only the name of the final blob is kept.|

<h2 id="tocS_FixableTotalByDigest">FixableTotalByDigest</h2>
<!-- backwards compatibility -->
<a id="schemafixabletotalbydigest"></a>
<a id="schema_FixableTotalByDigest"></a>
<a id="tocSfixabletotalbydigest"></a>
<a id="tocsfixabletotalbydigest"></a>

```json
{
  "fixableCount": "string",
  "resource": {
    "contentHash": {
      "type": "HASH_TYPE_UNSPECIFIED",
      "value": "string"
    },
    "name": "string",
    "uri": "string"
  },
  "severity": "SEVERITY_UNSPECIFIED",
  "totalCount": "string"
}
```

Per resource and severity counts of fixable and total vulnerabilities.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fixableCount|string(int64)|false|none|The number of fixable vulnerabilities associated with this resource.|
|resource|[Resource](#schemaresource)|false|none|The affected resource.|
|severity|string|false|none|The severity for this count. SEVERITY_UNSPECIFIED indicates total across all severities.|
|totalCount|string(int64)|false|none|The total number of vulnerabilities associated with this resource.|

#### Enumerated Values

|Property|Value|
|---|---|
|severity|SEVERITY_UNSPECIFIED|
|severity|MINIMAL|
|severity|LOW|
|severity|MEDIUM|
|severity|HIGH|
|severity|CRITICAL|

<h2 id="tocS_GenericSignedAttestation">GenericSignedAttestation</h2>
<!-- backwards compatibility -->
<a id="schemagenericsignedattestation"></a>
<a id="schema_GenericSignedAttestation"></a>
<a id="tocSgenericsignedattestation"></a>
<a id="tocsgenericsignedattestation"></a>

```json
{
  "contentType": "CONTENT_TYPE_UNSPECIFIED",
  "serializedPayload": "string",
  "signatures": [
    {
      "publicKeyId": "string",
      "signature": "string"
    }
  ]
}
```

An attestation wrapper that uses the Grafeas `Signature` message. This attestation must define the `serialized_payload` that the `signatures` verify and any metadata necessary to interpret that plaintext. The signatures should always be over the `serialized_payload` bytestring.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentType|string|false|none|Type (for example schema) of the attestation payload that was signed. The verifier must ensure that the provided type is one that the verifier supports, and that the attestation payload is a valid instantiation of that type (for example by validating a JSON schema).|
|serializedPayload|string(byte)|false|none|The serialized payload that is verified by one or more `signatures`. The encoding and semantic meaning of this payload must match what is set in `content_type`.|
|signatures|[[Signature](#schemasignature)]|false|none|One or more signatures over `serialized_payload`. Verifier implementations should consider this attestation message verified if at least one `signature` verifies `serialized_payload`. See `Signature` in common.proto for more details on signature structure and verification.|

#### Enumerated Values

|Property|Value|
|---|---|
|contentType|CONTENT_TYPE_UNSPECIFIED|
|contentType|SIMPLE_SIGNING_JSON|

<h2 id="tocS_GerritSourceContext">GerritSourceContext</h2>
<!-- backwards compatibility -->
<a id="schemagerritsourcecontext"></a>
<a id="schema_GerritSourceContext"></a>
<a id="tocSgerritsourcecontext"></a>
<a id="tocsgerritsourcecontext"></a>

```json
{
  "aliasContext": {
    "kind": "KIND_UNSPECIFIED",
    "name": "string"
  },
  "gerritProject": "string",
  "hostUri": "string",
  "revisionId": "string"
}
```

A SourceContext referring to a Gerrit project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aliasContext|[AliasContext](#schemaaliascontext)|false|none|An alias, which may be a branch or tag.|
|gerritProject|string|false|none|The full project name within the host. Projects may be nested, so "project/subproject" is a valid project name. The "repo name" is the hostURI/project.|
|hostUri|string|false|none|The URI of a running Gerrit instance.|
|revisionId|string|false|none|A revision (commit) ID.|

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

Request message for `GetIamPolicy` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|options|[GetPolicyOptions](#schemagetpolicyoptions)|false|none|OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.|

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
|requestedPolicyVersion|integer(int32)|false|none|Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_GitSourceContext">GitSourceContext</h2>
<!-- backwards compatibility -->
<a id="schemagitsourcecontext"></a>
<a id="schema_GitSourceContext"></a>
<a id="tocSgitsourcecontext"></a>
<a id="tocsgitsourcecontext"></a>

```json
{
  "revisionId": "string",
  "url": "string"
}
```

A GitSourceContext denotes a particular revision in a third party Git repository (e.g., GitHub).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|revisionId|string|false|none|Git commit hash.|
|url|string|false|none|Git repository URL.|

<h2 id="tocS_GoogleDevtoolsContaineranalysisV1alpha1OperationMetadata">GoogleDevtoolsContaineranalysisV1alpha1OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogledevtoolscontaineranalysisv1alpha1operationmetadata"></a>
<a id="schema_GoogleDevtoolsContaineranalysisV1alpha1OperationMetadata"></a>
<a id="tocSgoogledevtoolscontaineranalysisv1alpha1operationmetadata"></a>
<a id="tocsgoogledevtoolscontaineranalysisv1alpha1operationmetadata"></a>

```json
{
  "createTime": "string",
  "endTime": "string"
}
```

Metadata for all operations used and required for all operations that created by Container Analysis Providers

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Output only. The time this operation was created.|
|endTime|string(google-datetime)|false|none|Output only. The time that this operation was marked completed or failed.|

<h2 id="tocS_GrafeasV1beta1BuildDetails">GrafeasV1beta1BuildDetails</h2>
<!-- backwards compatibility -->
<a id="schemagrafeasv1beta1builddetails"></a>
<a id="schema_GrafeasV1beta1BuildDetails"></a>
<a id="tocSgrafeasv1beta1builddetails"></a>
<a id="tocsgrafeasv1beta1builddetails"></a>

```json
{
  "provenance": {
    "buildOptions": {
      "property1": "string",
      "property2": "string"
    },
    "builderVersion": "string",
    "builtArtifacts": [
      {
        "checksum": "string",
        "id": "string",
        "names": [
          "string"
        ]
      }
    ],
    "commands": [
      {
        "args": [
          "string"
        ],
        "dir": "string",
        "env": [
          "string"
        ],
        "id": "string",
        "name": "string",
        "waitFor": [
          "string"
        ]
      }
    ],
    "createTime": "string",
    "creator": "string",
    "endTime": "string",
    "id": "string",
    "logsUri": "string",
    "projectId": "string",
    "sourceProvenance": {
      "additionalContexts": [
        {
          "cloudRepo": {
            "aliasContext": {
              "kind": "KIND_UNSPECIFIED",
              "name": "string"
            },
            "repoId": {
              "projectRepoId": {
                "projectId": "string",
                "repoName": "string"
              },
              "uid": "string"
            },
            "revisionId": "string"
          },
          "gerrit": {
            "aliasContext": {
              "kind": "KIND_UNSPECIFIED",
              "name": "string"
            },
            "gerritProject": "string",
            "hostUri": "string",
            "revisionId": "string"
          },
          "git": {
            "revisionId": "string",
            "url": "string"
          },
          "labels": {
            "property1": "string",
            "property2": "string"
          }
        }
      ],
      "artifactStorageSourceUri": "string",
      "context": {
        "cloudRepo": {
          "aliasContext": {
            "kind": "KIND_UNSPECIFIED",
            "name": "string"
          },
          "repoId": {
            "projectRepoId": {
              "projectId": "string",
              "repoName": "string"
            },
            "uid": "string"
          },
          "revisionId": "string"
        },
        "gerrit": {
          "aliasContext": {
            "kind": "KIND_UNSPECIFIED",
            "name": "string"
          },
          "gerritProject": "string",
          "hostUri": "string",
          "revisionId": "string"
        },
        "git": {
          "revisionId": "string",
          "url": "string"
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "fileHashes": {
        "property1": {
          "fileHash": [
            {
              "type": "HASH_TYPE_UNSPECIFIED",
              "value": "string"
            }
          ]
        },
        "property2": {
          "fileHash": [
            {
              "type": "HASH_TYPE_UNSPECIFIED",
              "value": "string"
            }
          ]
        }
      }
    },
    "startTime": "string",
    "triggerId": "string"
  },
  "provenanceBytes": "string"
}
```

Details of a build occurrence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|provenance|[BuildProvenance](#schemabuildprovenance)|false|none|Required. The actual provenance for the build.|
|provenanceBytes|string|false|none|Serialized JSON representation of the provenance, used in generating the build signature in the corresponding build note. After verifying the signature, `provenance_bytes` can be unmarshalled and compared to the provenance to confirm that it is unchanged. A base64-encoded string representation of the provenance bytes is used for the signature in order to interoperate with openssl which expects this format for signature verification. The serialized form is captured both to avoid ambiguity in how the provenance is marshalled to json as well to prevent incompatibilities with future changes.|

<h2 id="tocS_GrafeasV1beta1DeploymentDetails">GrafeasV1beta1DeploymentDetails</h2>
<!-- backwards compatibility -->
<a id="schemagrafeasv1beta1deploymentdetails"></a>
<a id="schema_GrafeasV1beta1DeploymentDetails"></a>
<a id="tocSgrafeasv1beta1deploymentdetails"></a>
<a id="tocsgrafeasv1beta1deploymentdetails"></a>

```json
{
  "deployment": {
    "address": "string",
    "config": "string",
    "deployTime": "string",
    "platform": "PLATFORM_UNSPECIFIED",
    "resourceUri": [
      "string"
    ],
    "undeployTime": "string",
    "userEmail": "string"
  }
}
```

Details of a deployment occurrence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deployment|[Deployment](#schemadeployment)|false|none|Required. Deployment history for the resource.|

<h2 id="tocS_GrafeasV1beta1DiscoveryDetails">GrafeasV1beta1DiscoveryDetails</h2>
<!-- backwards compatibility -->
<a id="schemagrafeasv1beta1discoverydetails"></a>
<a id="schema_GrafeasV1beta1DiscoveryDetails"></a>
<a id="tocSgrafeasv1beta1discoverydetails"></a>
<a id="tocsgrafeasv1beta1discoverydetails"></a>

```json
{
  "discovered": {
    "analysisCompleted": {
      "analysisType": [
        "string"
      ]
    },
    "analysisError": [
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
    ],
    "analysisStatus": "ANALYSIS_STATUS_UNSPECIFIED",
    "analysisStatusError": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "continuousAnalysis": "CONTINUOUS_ANALYSIS_UNSPECIFIED",
    "lastAnalysisTime": "string"
  }
}
```

Details of a discovery occurrence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discovered|[Discovered](#schemadiscovered)|false|none|Required. Analysis status for the discovered resource.|

<h2 id="tocS_GrafeasV1beta1ImageDetails">GrafeasV1beta1ImageDetails</h2>
<!-- backwards compatibility -->
<a id="schemagrafeasv1beta1imagedetails"></a>
<a id="schema_GrafeasV1beta1ImageDetails"></a>
<a id="tocSgrafeasv1beta1imagedetails"></a>
<a id="tocsgrafeasv1beta1imagedetails"></a>

```json
{
  "derivedImage": {
    "baseResourceUrl": "string",
    "distance": 0,
    "fingerprint": {
      "v1Name": "string",
      "v2Blob": [
        "string"
      ],
      "v2Name": "string"
    },
    "layerInfo": [
      {
        "arguments": "string",
        "directive": "DIRECTIVE_UNSPECIFIED"
      }
    ]
  }
}
```

Details of an image occurrence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|derivedImage|[Derived](#schemaderived)|false|none|Required. Immutable. The child image derived from the base image.|

<h2 id="tocS_GrafeasV1beta1IntotoArtifact">GrafeasV1beta1IntotoArtifact</h2>
<!-- backwards compatibility -->
<a id="schemagrafeasv1beta1intotoartifact"></a>
<a id="schema_GrafeasV1beta1IntotoArtifact"></a>
<a id="tocSgrafeasv1beta1intotoartifact"></a>
<a id="tocsgrafeasv1beta1intotoartifact"></a>

```json
{
  "hashes": {
    "sha256": "string"
  },
  "resourceUri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hashes|[ArtifactHashes](#schemaartifacthashes)|false|none|Defines a hash object for use in Materials and Products.|
|resourceUri|string|false|none|none|

<h2 id="tocS_GrafeasV1beta1IntotoDetails">GrafeasV1beta1IntotoDetails</h2>
<!-- backwards compatibility -->
<a id="schemagrafeasv1beta1intotodetails"></a>
<a id="schema_GrafeasV1beta1IntotoDetails"></a>
<a id="tocSgrafeasv1beta1intotodetails"></a>
<a id="tocsgrafeasv1beta1intotodetails"></a>

```json
{
  "signatures": [
    {
      "keyid": "string",
      "sig": "string"
    }
  ],
  "signed": {
    "byproducts": {
      "customValues": {
        "property1": "string",
        "property2": "string"
      }
    },
    "command": [
      "string"
    ],
    "environment": {
      "customValues": {
        "property1": "string",
        "property2": "string"
      }
    },
    "materials": [
      {
        "hashes": {
          "sha256": "string"
        },
        "resourceUri": "string"
      }
    ],
    "products": [
      {
        "hashes": {
          "sha256": "string"
        },
        "resourceUri": "string"
      }
    ]
  }
}
```

This corresponds to a signed in-toto link - it is made up of one or more signatures and the in-toto link itself. This is used for occurrences of a Grafeas in-toto note.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|signatures|[[GrafeasV1beta1IntotoSignature](#schemagrafeasv1beta1intotosignature)]|false|none|none|
|signed|[Link](#schemalink)|false|none|This corresponds to an in-toto link.|

<h2 id="tocS_GrafeasV1beta1IntotoSignature">GrafeasV1beta1IntotoSignature</h2>
<!-- backwards compatibility -->
<a id="schemagrafeasv1beta1intotosignature"></a>
<a id="schema_GrafeasV1beta1IntotoSignature"></a>
<a id="tocSgrafeasv1beta1intotosignature"></a>
<a id="tocsgrafeasv1beta1intotosignature"></a>

```json
{
  "keyid": "string",
  "sig": "string"
}
```

A signature object consists of the KeyID used and the signature itself.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyid|string|false|none|none|
|sig|string|false|none|none|

<h2 id="tocS_GrafeasV1beta1PackageDetails">GrafeasV1beta1PackageDetails</h2>
<!-- backwards compatibility -->
<a id="schemagrafeasv1beta1packagedetails"></a>
<a id="schema_GrafeasV1beta1PackageDetails"></a>
<a id="tocSgrafeasv1beta1packagedetails"></a>
<a id="tocsgrafeasv1beta1packagedetails"></a>

```json
{
  "installation": {
    "architecture": "ARCHITECTURE_UNSPECIFIED",
    "cpeUri": "string",
    "license": {
      "comments": "string",
      "expression": "string"
    },
    "location": [
      {
        "cpeUri": "string",
        "path": "string",
        "version": {
          "epoch": 0,
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        }
      }
    ],
    "name": "string",
    "packageType": "string",
    "version": {
      "epoch": 0,
      "inclusive": true,
      "kind": "VERSION_KIND_UNSPECIFIED",
      "name": "string",
      "revision": "string"
    }
  }
}
```

Details of a package occurrence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|installation|[Installation](#schemainstallation)|false|none|Required. Where the package was installed.|

<h2 id="tocS_GrafeasV1beta1VulnerabilityDetails">GrafeasV1beta1VulnerabilityDetails</h2>
<!-- backwards compatibility -->
<a id="schemagrafeasv1beta1vulnerabilitydetails"></a>
<a id="schema_GrafeasV1beta1VulnerabilityDetails"></a>
<a id="tocSgrafeasv1beta1vulnerabilitydetails"></a>
<a id="tocsgrafeasv1beta1vulnerabilitydetails"></a>

```json
{
  "cvssScore": 0,
  "cvssV2": {
    "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
    "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
    "authentication": "AUTHENTICATION_UNSPECIFIED",
    "availabilityImpact": "IMPACT_UNSPECIFIED",
    "baseScore": 0,
    "confidentialityImpact": "IMPACT_UNSPECIFIED",
    "exploitabilityScore": 0,
    "impactScore": 0,
    "integrityImpact": "IMPACT_UNSPECIFIED",
    "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
    "scope": "SCOPE_UNSPECIFIED",
    "userInteraction": "USER_INTERACTION_UNSPECIFIED"
  },
  "cvssV3": {
    "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
    "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
    "authentication": "AUTHENTICATION_UNSPECIFIED",
    "availabilityImpact": "IMPACT_UNSPECIFIED",
    "baseScore": 0,
    "confidentialityImpact": "IMPACT_UNSPECIFIED",
    "exploitabilityScore": 0,
    "impactScore": 0,
    "integrityImpact": "IMPACT_UNSPECIFIED",
    "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
    "scope": "SCOPE_UNSPECIFIED",
    "userInteraction": "USER_INTERACTION_UNSPECIFIED"
  },
  "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
  "effectiveSeverity": "SEVERITY_UNSPECIFIED",
  "longDescription": "string",
  "packageIssue": [
    {
      "affectedLocation": {
        "cpeUri": "string",
        "package": "string",
        "version": {
          "epoch": 0,
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        }
      },
      "effectiveSeverity": "SEVERITY_UNSPECIFIED",
      "fixedLocation": {
        "cpeUri": "string",
        "package": "string",
        "version": {
          "epoch": 0,
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        }
      },
      "packageType": "string",
      "severityName": "string"
    }
  ],
  "relatedUrls": [
    {
      "label": "string",
      "url": "string"
    }
  ],
  "severity": "SEVERITY_UNSPECIFIED",
  "shortDescription": "string",
  "type": "string",
  "vexAssessment": {
    "cve": "string",
    "impacts": [
      "string"
    ],
    "justification": {
      "details": "string",
      "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
    },
    "noteName": "string",
    "relatedUris": [
      {
        "label": "string",
        "url": "string"
      }
    ],
    "remediations": [
      {
        "details": "string",
        "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
        "remediationUri": {
          "label": "string",
          "url": "string"
        }
      }
    ],
    "state": "STATE_UNSPECIFIED"
  }
}
```

Details of a vulnerability Occurrence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cvssScore|number(float)|false|none|Output only. The CVSS score of this vulnerability. CVSS score is on a scale of 0-10 where 0 indicates low severity and 10 indicates high severity.|
|cvssV2|[CVSS](#schemacvss)|false|none|The cvss v2 score for the vulnerability.|
|cvssV3|[CVSS](#schemacvss)|false|none|The cvss v3 score for the vulnerability.|
|cvssVersion|string|false|none|Output only. CVSS version used to populate cvss_score and severity.|
|effectiveSeverity|string|false|none|The distro assigned severity for this vulnerability when it is available, and note provider assigned severity when distro has not yet assigned a severity for this vulnerability. When there are multiple PackageIssues for this vulnerability, they can have different effective severities because some might be provided by the distro while others are provided by the language ecosystem for a language pack. For this reason, it is advised to use the effective severity on the PackageIssue level. In the case where multiple PackageIssues have differing effective severities, this field should be the highest severity for any of the PackageIssues.|
|longDescription|string|false|none|Output only. A detailed description of this vulnerability.|
|packageIssue|[[PackageIssue](#schemapackageissue)]|false|none|Required. The set of affected locations and their fixes (if available) within the associated resource.|
|relatedUrls|[[RelatedUrl](#schemarelatedurl)]|false|none|Output only. URLs related to this vulnerability.|
|severity|string|false|none|Output only. The note provider assigned Severity of the vulnerability.|
|shortDescription|string|false|none|Output only. A one sentence description of this vulnerability.|
|type|string|false|none|The type of package; whether native or non native(ruby gems, node.js packages etc)|
|vexAssessment|[VexAssessment](#schemavexassessment)|false|none|VexAssessment provides all publisher provided Vex information that is related to this vulnerability.|

#### Enumerated Values

|Property|Value|
|---|---|
|cvssVersion|CVSS_VERSION_UNSPECIFIED|
|cvssVersion|CVSS_VERSION_2|
|cvssVersion|CVSS_VERSION_3|
|effectiveSeverity|SEVERITY_UNSPECIFIED|
|effectiveSeverity|MINIMAL|
|effectiveSeverity|LOW|
|effectiveSeverity|MEDIUM|
|effectiveSeverity|HIGH|
|effectiveSeverity|CRITICAL|
|severity|SEVERITY_UNSPECIFIED|
|severity|MINIMAL|
|severity|LOW|
|severity|MEDIUM|
|severity|HIGH|
|severity|CRITICAL|

<h2 id="tocS_Hash">Hash</h2>
<!-- backwards compatibility -->
<a id="schemahash"></a>
<a id="schema_Hash"></a>
<a id="tocShash"></a>
<a id="tocshash"></a>

```json
{
  "type": "HASH_TYPE_UNSPECIFIED",
  "value": "string"
}
```

Container message for hash values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Required. The type of hash that was performed.|
|value|string(byte)|false|none|Required. The hash value.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|HASH_TYPE_UNSPECIFIED|
|type|SHA256|
|type|GO_MODULE_H1|
|type|SHA512|

<h2 id="tocS_Hint">Hint</h2>
<!-- backwards compatibility -->
<a id="schemahint"></a>
<a id="schema_Hint"></a>
<a id="tocShint"></a>
<a id="tocshint"></a>

```json
{
  "humanReadableName": "string"
}
```

This submessage provides human-readable hints about the purpose of the authority. Because the name of a note acts as its resource reference, it is important to disambiguate the canonical name of the Note (which might be a UUID for security purposes) from "readable" names more suitable for debug output. Note that these hints should not be used to look up authorities in security sensitive contexts, such as when looking up attestations to verify.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|humanReadableName|string|false|none|Required. The human readable name of this attestation authority, for example "qa".|

<h2 id="tocS_InToto">InToto</h2>
<!-- backwards compatibility -->
<a id="schemaintoto"></a>
<a id="schema_InToto"></a>
<a id="tocSintoto"></a>
<a id="tocsintoto"></a>

```json
{
  "expectedCommand": [
    "string"
  ],
  "expectedMaterials": [
    {
      "artifactRule": [
        "string"
      ]
    }
  ],
  "expectedProducts": [
    {
      "artifactRule": [
        "string"
      ]
    }
  ],
  "signingKeys": [
    {
      "keyId": "string",
      "keyScheme": "string",
      "keyType": "string",
      "publicKeyValue": "string"
    }
  ],
  "stepName": "string",
  "threshold": "string"
}
```

This contains the fields corresponding to the definition of a software supply chain step in an in-toto layout. This information goes into a Grafeas note.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expectedCommand|[string]|false|none|This field contains the expected command used to perform the step.|
|expectedMaterials|[[ArtifactRule](#schemaartifactrule)]|false|none|The following fields contain in-toto artifact rules identifying the artifacts that enter this supply chain step, and exit the supply chain step, i.e. materials and products of the step.|
|expectedProducts|[[ArtifactRule](#schemaartifactrule)]|false|none|none|
|signingKeys|[[SigningKey](#schemasigningkey)]|false|none|This field contains the public keys that can be used to verify the signatures on the step metadata.|
|stepName|string|false|none|This field identifies the name of the step in the supply chain.|
|threshold|string(int64)|false|none|This field contains a value that indicates the minimum number of keys that need to be used to sign the step's in-toto link.|

<h2 id="tocS_Installation">Installation</h2>
<!-- backwards compatibility -->
<a id="schemainstallation"></a>
<a id="schema_Installation"></a>
<a id="tocSinstallation"></a>
<a id="tocsinstallation"></a>

```json
{
  "architecture": "ARCHITECTURE_UNSPECIFIED",
  "cpeUri": "string",
  "license": {
    "comments": "string",
    "expression": "string"
  },
  "location": [
    {
      "cpeUri": "string",
      "path": "string",
      "version": {
        "epoch": 0,
        "inclusive": true,
        "kind": "VERSION_KIND_UNSPECIFIED",
        "name": "string",
        "revision": "string"
      }
    }
  ],
  "name": "string",
  "packageType": "string",
  "version": {
    "epoch": 0,
    "inclusive": true,
    "kind": "VERSION_KIND_UNSPECIFIED",
    "name": "string",
    "revision": "string"
  }
}
```

This represents how a particular software package may be installed on a system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|architecture|string|false|read-only|Output only. The CPU architecture for which packages in this distribution channel were built. Architecture will be blank for language packages.|
|cpeUri|string|false|read-only|Output only. The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. The cpe_uri will be blank for language packages.|
|license|[License](#schemalicense)|false|none|Licenses that have been declared by the authors of the package.|
|location|[[Location](#schemalocation)]|false|none|All of the places within the filesystem versions of this package have been found.|
|name|string|false|read-only|Required. Output only. The name of the installed package.|
|packageType|string|false|read-only|Output only. The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.).|
|version|[Version](#schemaversion)|false|none|Output only. The version of the package.|

#### Enumerated Values

|Property|Value|
|---|---|
|architecture|ARCHITECTURE_UNSPECIFIED|
|architecture|X86|
|architecture|X64|

<h2 id="tocS_Justification">Justification</h2>
<!-- backwards compatibility -->
<a id="schemajustification"></a>
<a id="schema_Justification"></a>
<a id="tocSjustification"></a>
<a id="tocsjustification"></a>

```json
{
  "details": "string",
  "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
}
```

Justification provides the justification when the state of the assessment if NOT_AFFECTED.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|string|false|none|Additional details on why this justification was chosen.|
|justificationType|string|false|none|The justification type for this vulnerability.|

#### Enumerated Values

|Property|Value|
|---|---|
|justificationType|JUSTIFICATION_TYPE_UNSPECIFIED|
|justificationType|COMPONENT_NOT_PRESENT|
|justificationType|VULNERABLE_CODE_NOT_PRESENT|
|justificationType|VULNERABLE_CODE_NOT_IN_EXECUTE_PATH|
|justificationType|VULNERABLE_CODE_CANNOT_BE_CONTROLLED_BY_ADVERSARY|
|justificationType|INLINE_MITIGATIONS_ALREADY_EXIST|

<h2 id="tocS_KnowledgeBase">KnowledgeBase</h2>
<!-- backwards compatibility -->
<a id="schemaknowledgebase"></a>
<a id="schema_KnowledgeBase"></a>
<a id="tocSknowledgebase"></a>
<a id="tocsknowledgebase"></a>

```json
{
  "name": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The KB name (generally of the form KB[0-9]+ i.e. KB123456).|
|url|string|false|none|A link to the KB in the Windows update catalog - https://www.catalog.update.microsoft.com/|

<h2 id="tocS_Layer">Layer</h2>
<!-- backwards compatibility -->
<a id="schemalayer"></a>
<a id="schema_Layer"></a>
<a id="tocSlayer"></a>
<a id="tocslayer"></a>

```json
{
  "arguments": "string",
  "directive": "DIRECTIVE_UNSPECIFIED"
}
```

Layer holds metadata specific to a layer of a Docker image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arguments|string|false|none|The recovered arguments to the Dockerfile directive.|
|directive|string|false|none|Required. The recovered Dockerfile directive used to construct this layer.|

#### Enumerated Values

|Property|Value|
|---|---|
|directive|DIRECTIVE_UNSPECIFIED|
|directive|MAINTAINER|
|directive|RUN|
|directive|CMD|
|directive|LABEL|
|directive|EXPOSE|
|directive|ENV|
|directive|ADD|
|directive|COPY|
|directive|ENTRYPOINT|
|directive|VOLUME|
|directive|USER|
|directive|WORKDIR|
|directive|ARG|
|directive|ONBUILD|
|directive|STOPSIGNAL|
|directive|HEALTHCHECK|
|directive|SHELL|

<h2 id="tocS_License">License</h2>
<!-- backwards compatibility -->
<a id="schemalicense"></a>
<a id="schema_License"></a>
<a id="tocSlicense"></a>
<a id="tocslicense"></a>

```json
{
  "comments": "string",
  "expression": "string"
}
```

License information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comments|string|false|none|Comments|
|expression|string|false|none|Often a single license can be used to represent the licensing terms. Sometimes it is necessary to include a choice of one or more licenses or some combination of license identifiers. Examples: "LGPL-2.1-only OR MIT", "LGPL-2.1-only AND MIT", "GPL-2.0-or-later WITH Bison-exception-2.2".|

<h2 id="tocS_Link">Link</h2>
<!-- backwards compatibility -->
<a id="schemalink"></a>
<a id="schema_Link"></a>
<a id="tocSlink"></a>
<a id="tocslink"></a>

```json
{
  "byproducts": {
    "customValues": {
      "property1": "string",
      "property2": "string"
    }
  },
  "command": [
    "string"
  ],
  "environment": {
    "customValues": {
      "property1": "string",
      "property2": "string"
    }
  },
  "materials": [
    {
      "hashes": {
        "sha256": "string"
      },
      "resourceUri": "string"
    }
  ],
  "products": [
    {
      "hashes": {
        "sha256": "string"
      },
      "resourceUri": "string"
    }
  ]
}
```

This corresponds to an in-toto link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|byproducts|[ByProducts](#schemabyproducts)|false|none|ByProducts are data generated as part of a software supply chain step, but are not the actual result of the step.|
|command|[string]|false|none|This field contains the full command executed for the step. This can also be empty if links are generated for operations that aren't directly mapped to a specific command. Each term in the command is an independent string in the list. An example of a command in the in-toto metadata field is: "command": ["git", "clone", "https://github.com/in-toto/demo-project.git"]|
|environment|[Environment](#schemaenvironment)|false|none|This is a field that can be used to capture information about the environment. It is suggested for this field to contain information that details environment variables, filesystem information, and the present working directory. The recommended structure of this field is: "environment": { "custom_values": { "variables": "", "filesystem": "", "workdir": "", "": "..." } }|
|materials|[[GrafeasV1beta1IntotoArtifact](#schemagrafeasv1beta1intotoartifact)]|false|none|Materials are the supply chain artifacts that go into the step and are used for the operation performed. The key of the map is the path of the artifact and the structure contains the recorded hash information. An example is: "materials": [ { "resource_uri": "foo/bar", "hashes": { "sha256": "ebebf...", : } } ]|
|products|[[GrafeasV1beta1IntotoArtifact](#schemagrafeasv1beta1intotoartifact)]|false|none|Products are the supply chain artifacts generated as a result of the step. The structure is identical to that of materials.|

<h2 id="tocS_ListNoteOccurrencesResponse">ListNoteOccurrencesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistnoteoccurrencesresponse"></a>
<a id="schema_ListNoteOccurrencesResponse"></a>
<a id="tocSlistnoteoccurrencesresponse"></a>
<a id="tocslistnoteoccurrencesresponse"></a>

```json
{
  "nextPageToken": "string",
  "occurrences": [
    {
      "attestation": {
        "attestation": {
          "genericSignedAttestation": {
            "contentType": "CONTENT_TYPE_UNSPECIFIED",
            "serializedPayload": "string",
            "signatures": [
              {
                "publicKeyId": "string",
                "signature": "string"
              }
            ]
          },
          "pgpSignedAttestation": {
            "contentType": "CONTENT_TYPE_UNSPECIFIED",
            "pgpKeyId": "string",
            "signature": "string"
          }
        }
      },
      "build": {
        "provenance": {
          "buildOptions": {
            "property1": "string",
            "property2": "string"
          },
          "builderVersion": "string",
          "builtArtifacts": [
            {
              "checksum": "string",
              "id": "string",
              "names": [
                "string"
              ]
            }
          ],
          "commands": [
            {
              "args": [
                "string"
              ],
              "dir": "string",
              "env": [
                "string"
              ],
              "id": "string",
              "name": "string",
              "waitFor": [
                "string"
              ]
            }
          ],
          "createTime": "string",
          "creator": "string",
          "endTime": "string",
          "id": "string",
          "logsUri": "string",
          "projectId": "string",
          "sourceProvenance": {
            "additionalContexts": [
              {
                "cloudRepo": {
                  "aliasContext": {
                    "kind": "KIND_UNSPECIFIED",
                    "name": "string"
                  },
                  "repoId": {
                    "projectRepoId": {
                      "projectId": "string",
                      "repoName": "string"
                    },
                    "uid": "string"
                  },
                  "revisionId": "string"
                },
                "gerrit": {
                  "aliasContext": {
                    "kind": "KIND_UNSPECIFIED",
                    "name": "string"
                  },
                  "gerritProject": "string",
                  "hostUri": "string",
                  "revisionId": "string"
                },
                "git": {
                  "revisionId": "string",
                  "url": "string"
                },
                "labels": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            ],
            "artifactStorageSourceUri": "string",
            "context": {
              "cloudRepo": {
                "aliasContext": {
                  "kind": "KIND_UNSPECIFIED",
                  "name": "string"
                },
                "repoId": {
                  "projectRepoId": {
                    "projectId": "string",
                    "repoName": "string"
                  },
                  "uid": "string"
                },
                "revisionId": "string"
              },
              "gerrit": {
                "aliasContext": {
                  "kind": "KIND_UNSPECIFIED",
                  "name": "string"
                },
                "gerritProject": "string",
                "hostUri": "string",
                "revisionId": "string"
              },
              "git": {
                "revisionId": "string",
                "url": "string"
              },
              "labels": {
                "property1": "string",
                "property2": "string"
              }
            },
            "fileHashes": {
              "property1": {
                "fileHash": [
                  {
                    "type": "HASH_TYPE_UNSPECIFIED",
                    "value": "string"
                  }
                ]
              },
              "property2": {
                "fileHash": [
                  {
                    "type": "HASH_TYPE_UNSPECIFIED",
                    "value": "string"
                  }
                ]
              }
            }
          },
          "startTime": "string",
          "triggerId": "string"
        },
        "provenanceBytes": "string"
      },
      "createTime": "string",
      "deployment": {
        "deployment": {
          "address": "string",
          "config": "string",
          "deployTime": "string",
          "platform": "PLATFORM_UNSPECIFIED",
          "resourceUri": [
            "string"
          ],
          "undeployTime": "string",
          "userEmail": "string"
        }
      },
      "derivedImage": {
        "derivedImage": {
          "baseResourceUrl": "string",
          "distance": 0,
          "fingerprint": {
            "v1Name": "string",
            "v2Blob": [
              "string"
            ],
            "v2Name": "string"
          },
          "layerInfo": [
            {
              "arguments": "string",
              "directive": "DIRECTIVE_UNSPECIFIED"
            }
          ]
        }
      },
      "discovered": {
        "discovered": {
          "analysisCompleted": {
            "analysisType": [
              "string"
            ]
          },
          "analysisError": [
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
          ],
          "analysisStatus": "ANALYSIS_STATUS_UNSPECIFIED",
          "analysisStatusError": {
            "code": 0,
            "details": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "message": "string"
          },
          "continuousAnalysis": "CONTINUOUS_ANALYSIS_UNSPECIFIED",
          "lastAnalysisTime": "string"
        }
      },
      "envelope": {
        "payload": "string",
        "payloadType": "string",
        "signatures": [
          {
            "keyid": "string",
            "sig": "string"
          }
        ]
      },
      "installation": {
        "installation": {
          "architecture": "ARCHITECTURE_UNSPECIFIED",
          "cpeUri": "string",
          "license": {
            "comments": "string",
            "expression": "string"
          },
          "location": [
            {
              "cpeUri": "string",
              "path": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            }
          ],
          "name": "string",
          "packageType": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        }
      },
      "intoto": {
        "signatures": [
          {
            "keyid": "string",
            "sig": "string"
          }
        ],
        "signed": {
          "byproducts": {
            "customValues": {
              "property1": "string",
              "property2": "string"
            }
          },
          "command": [
            "string"
          ],
          "environment": {
            "customValues": {
              "property1": "string",
              "property2": "string"
            }
          },
          "materials": [
            {
              "hashes": {
                "sha256": "string"
              },
              "resourceUri": "string"
            }
          ],
          "products": [
            {
              "hashes": {
                "sha256": "string"
              },
              "resourceUri": "string"
            }
          ]
        }
      },
      "kind": "NOTE_KIND_UNSPECIFIED",
      "name": "string",
      "noteName": "string",
      "remediation": "string",
      "resource": {
        "contentHash": {
          "type": "HASH_TYPE_UNSPECIFIED",
          "value": "string"
        },
        "name": "string",
        "uri": "string"
      },
      "sbom": {
        "createTime": "string",
        "creatorComment": "string",
        "creators": [
          "string"
        ],
        "documentComment": "string",
        "externalDocumentRefs": [
          "string"
        ],
        "id": "string",
        "licenseListVersion": "string",
        "namespace": "string",
        "title": "string"
      },
      "sbomReference": {
        "payload": {
          "_type": "string",
          "predicate": {
            "digest": {
              "property1": "string",
              "property2": "string"
            },
            "location": "string",
            "mimeType": "string",
            "referrerId": "string"
          },
          "predicateType": "string",
          "subject": [
            {
              "digest": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string"
            }
          ]
        },
        "payloadType": "string",
        "signatures": [
          {
            "keyid": "string",
            "sig": "string"
          }
        ]
      },
      "spdxFile": {
        "attributions": [
          "string"
        ],
        "comment": "string",
        "contributors": [
          "string"
        ],
        "copyright": "string",
        "filesLicenseInfo": [
          "string"
        ],
        "id": "string",
        "licenseConcluded": {
          "comments": "string",
          "expression": "string"
        },
        "notice": "string"
      },
      "spdxPackage": {
        "comment": "string",
        "filename": "string",
        "homePage": "string",
        "id": "string",
        "licenseConcluded": {
          "comments": "string",
          "expression": "string"
        },
        "packageType": "string",
        "sourceInfo": "string",
        "summaryDescription": "string",
        "title": "string",
        "version": "string"
      },
      "spdxRelationship": {
        "comment": "string",
        "source": "string",
        "target": "string",
        "type": "RELATIONSHIP_TYPE_UNSPECIFIED"
      },
      "updateTime": "string",
      "vulnerability": {
        "cvssScore": 0,
        "cvssV2": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "authentication": "AUTHENTICATION_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssV3": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "authentication": "AUTHENTICATION_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
        "effectiveSeverity": "SEVERITY_UNSPECIFIED",
        "longDescription": "string",
        "packageIssue": [
          {
            "affectedLocation": {
              "cpeUri": "string",
              "package": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            },
            "effectiveSeverity": "SEVERITY_UNSPECIFIED",
            "fixedLocation": {
              "cpeUri": "string",
              "package": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            },
            "packageType": "string",
            "severityName": "string"
          }
        ],
        "relatedUrls": [
          {
            "label": "string",
            "url": "string"
          }
        ],
        "severity": "SEVERITY_UNSPECIFIED",
        "shortDescription": "string",
        "type": "string",
        "vexAssessment": {
          "cve": "string",
          "impacts": [
            "string"
          ],
          "justification": {
            "details": "string",
            "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
          },
          "noteName": "string",
          "relatedUris": [
            {
              "label": "string",
              "url": "string"
            }
          ],
          "remediations": [
            {
              "details": "string",
              "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
              "remediationUri": {
                "label": "string",
                "url": "string"
              }
            }
          ],
          "state": "STATE_UNSPECIFIED"
        }
      }
    }
  ]
}
```

Response for listing occurrences for a note.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token to provide to skip to a particular spot in the list.|
|occurrences|[[Occurrence](#schemaoccurrence)]|false|none|The occurrences attached to the specified note.|

<h2 id="tocS_ListNotesResponse">ListNotesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistnotesresponse"></a>
<a id="schema_ListNotesResponse"></a>
<a id="tocSlistnotesresponse"></a>
<a id="tocslistnotesresponse"></a>

```json
{
  "nextPageToken": "string",
  "notes": [
    {
      "attestationAuthority": {
        "hint": {
          "humanReadableName": "string"
        }
      },
      "baseImage": {
        "fingerprint": {
          "v1Name": "string",
          "v2Blob": [
            "string"
          ],
          "v2Name": "string"
        },
        "resourceUrl": "string"
      },
      "build": {
        "builderVersion": "string",
        "signature": {
          "keyId": "string",
          "keyType": "KEY_TYPE_UNSPECIFIED",
          "publicKey": "string",
          "signature": "string"
        }
      },
      "createTime": "string",
      "deployable": {
        "resourceUri": [
          "string"
        ]
      },
      "discovery": {
        "analysisKind": "NOTE_KIND_UNSPECIFIED"
      },
      "expirationTime": "string",
      "intoto": {
        "expectedCommand": [
          "string"
        ],
        "expectedMaterials": [
          {
            "artifactRule": [
              "string"
            ]
          }
        ],
        "expectedProducts": [
          {
            "artifactRule": [
              "string"
            ]
          }
        ],
        "signingKeys": [
          {
            "keyId": "string",
            "keyScheme": "string",
            "keyType": "string",
            "publicKeyValue": "string"
          }
        ],
        "stepName": "string",
        "threshold": "string"
      },
      "kind": "NOTE_KIND_UNSPECIFIED",
      "longDescription": "string",
      "name": "string",
      "package": {
        "architecture": "ARCHITECTURE_UNSPECIFIED",
        "cpeUri": "string",
        "description": "string",
        "digest": [
          {
            "algo": "string",
            "digestBytes": "string"
          }
        ],
        "distribution": [
          {
            "architecture": "ARCHITECTURE_UNSPECIFIED",
            "cpeUri": "string",
            "description": "string",
            "latestVersion": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            },
            "maintainer": "string",
            "url": "string"
          }
        ],
        "license": {
          "comments": "string",
          "expression": "string"
        },
        "maintainer": "string",
        "name": "string",
        "packageType": "string",
        "url": "string",
        "version": {
          "epoch": 0,
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        }
      },
      "relatedNoteNames": [
        "string"
      ],
      "relatedUrl": [
        {
          "label": "string",
          "url": "string"
        }
      ],
      "sbom": {
        "dataLicence": "string",
        "spdxVersion": "string"
      },
      "sbomReference": {
        "format": "string",
        "version": "string"
      },
      "shortDescription": "string",
      "spdxFile": {
        "checksum": [
          "string"
        ],
        "fileType": "FILE_TYPE_UNSPECIFIED",
        "title": "string"
      },
      "spdxPackage": {
        "analyzed": true,
        "attribution": "string",
        "checksum": "string",
        "copyright": "string",
        "detailedDescription": "string",
        "downloadLocation": "string",
        "externalRefs": [
          {
            "category": "CATEGORY_UNSPECIFIED",
            "comment": "string",
            "locator": "string",
            "type": "string"
          }
        ],
        "filesLicenseInfo": [
          "string"
        ],
        "homePage": "string",
        "licenseDeclared": {
          "comments": "string",
          "expression": "string"
        },
        "originator": "string",
        "packageType": "string",
        "summaryDescription": "string",
        "supplier": "string",
        "title": "string",
        "verificationCode": "string",
        "version": "string"
      },
      "spdxRelationship": {
        "type": "RELATIONSHIP_TYPE_UNSPECIFIED"
      },
      "updateTime": "string",
      "vulnerability": {
        "cvssScore": 0,
        "cvssV2": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "authentication": "AUTHENTICATION_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssV3": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
        "cwe": [
          "string"
        ],
        "details": [
          {
            "cpeUri": "string",
            "description": "string",
            "fixedLocation": {
              "cpeUri": "string",
              "package": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            },
            "isObsolete": true,
            "maxAffectedVersion": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            },
            "minAffectedVersion": {
              "epoch": 0,
              "inclusive": true,
              "kind": "VERSION_KIND_UNSPECIFIED",
              "name": "string",
              "revision": "string"
            },
            "package": "string",
            "packageType": "string",
            "severityName": "string",
            "source": "string",
            "sourceUpdateTime": "string",
            "vendor": "string"
          }
        ],
        "severity": "SEVERITY_UNSPECIFIED",
        "sourceUpdateTime": "string",
        "windowsDetails": [
          {
            "cpeUri": "string",
            "description": "string",
            "fixingKbs": [
              {
                "name": "string",
                "url": "string"
              }
            ],
            "name": "string"
          }
        ]
      },
      "vulnerabilityAssessment": {
        "assessment": {
          "cve": "string",
          "impacts": [
            "string"
          ],
          "justification": {
            "details": "string",
            "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
          },
          "longDescription": "string",
          "relatedUris": [
            {
              "label": "string",
              "url": "string"
            }
          ],
          "remediations": [
            {
              "details": "string",
              "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
              "remediationUri": {
                "label": "string",
                "url": "string"
              }
            }
          ],
          "shortDescription": "string",
          "state": "STATE_UNSPECIFIED"
        },
        "languageCode": "string",
        "longDescription": "string",
        "product": {
          "genericUri": "string",
          "id": "string",
          "name": "string"
        },
        "publisher": {
          "issuingAuthority": "string",
          "name": "string",
          "publisherNamespace": "string"
        },
        "shortDescription": "string",
        "title": "string"
      }
    }
  ]
}
```

Response for listing notes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The next pagination token in the list response. It should be used as `page_token` for the following request. An empty value means no more results.|
|notes|[[Note](#schemanote)]|false|none|The notes requested.|

<h2 id="tocS_ListOccurrencesResponse">ListOccurrencesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistoccurrencesresponse"></a>
<a id="schema_ListOccurrencesResponse"></a>
<a id="tocSlistoccurrencesresponse"></a>
<a id="tocslistoccurrencesresponse"></a>

```json
{
  "nextPageToken": "string",
  "occurrences": [
    {
      "attestation": {
        "attestation": {
          "genericSignedAttestation": {
            "contentType": "CONTENT_TYPE_UNSPECIFIED",
            "serializedPayload": "string",
            "signatures": [
              {
                "publicKeyId": "string",
                "signature": "string"
              }
            ]
          },
          "pgpSignedAttestation": {
            "contentType": "CONTENT_TYPE_UNSPECIFIED",
            "pgpKeyId": "string",
            "signature": "string"
          }
        }
      },
      "build": {
        "provenance": {
          "buildOptions": {
            "property1": "string",
            "property2": "string"
          },
          "builderVersion": "string",
          "builtArtifacts": [
            {
              "checksum": "string",
              "id": "string",
              "names": [
                "string"
              ]
            }
          ],
          "commands": [
            {
              "args": [
                "string"
              ],
              "dir": "string",
              "env": [
                "string"
              ],
              "id": "string",
              "name": "string",
              "waitFor": [
                "string"
              ]
            }
          ],
          "createTime": "string",
          "creator": "string",
          "endTime": "string",
          "id": "string",
          "logsUri": "string",
          "projectId": "string",
          "sourceProvenance": {
            "additionalContexts": [
              {
                "cloudRepo": {
                  "aliasContext": {
                    "kind": "KIND_UNSPECIFIED",
                    "name": "string"
                  },
                  "repoId": {
                    "projectRepoId": {
                      "projectId": "string",
                      "repoName": "string"
                    },
                    "uid": "string"
                  },
                  "revisionId": "string"
                },
                "gerrit": {
                  "aliasContext": {
                    "kind": "KIND_UNSPECIFIED",
                    "name": "string"
                  },
                  "gerritProject": "string",
                  "hostUri": "string",
                  "revisionId": "string"
                },
                "git": {
                  "revisionId": "string",
                  "url": "string"
                },
                "labels": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            ],
            "artifactStorageSourceUri": "string",
            "context": {
              "cloudRepo": {
                "aliasContext": {
                  "kind": "KIND_UNSPECIFIED",
                  "name": "string"
                },
                "repoId": {
                  "projectRepoId": {
                    "projectId": "string",
                    "repoName": "string"
                  },
                  "uid": "string"
                },
                "revisionId": "string"
              },
              "gerrit": {
                "aliasContext": {
                  "kind": "KIND_UNSPECIFIED",
                  "name": "string"
                },
                "gerritProject": "string",
                "hostUri": "string",
                "revisionId": "string"
              },
              "git": {
                "revisionId": "string",
                "url": "string"
              },
              "labels": {
                "property1": "string",
                "property2": "string"
              }
            },
            "fileHashes": {
              "property1": {
                "fileHash": [
                  {
                    "type": "HASH_TYPE_UNSPECIFIED",
                    "value": "string"
                  }
                ]
              },
              "property2": {
                "fileHash": [
                  {
                    "type": "HASH_TYPE_UNSPECIFIED",
                    "value": "string"
                  }
                ]
              }
            }
          },
          "startTime": "string",
          "triggerId": "string"
        },
        "provenanceBytes": "string"
      },
      "createTime": "string",
      "deployment": {
        "deployment": {
          "address": "string",
          "config": "string",
          "deployTime": "string",
          "platform": "PLATFORM_UNSPECIFIED",
          "resourceUri": [
            "string"
          ],
          "undeployTime": "string",
          "userEmail": "string"
        }
      },
      "derivedImage": {
        "derivedImage": {
          "baseResourceUrl": "string",
          "distance": 0,
          "fingerprint": {
            "v1Name": "string",
            "v2Blob": [
              "string"
            ],
            "v2Name": "string"
          },
          "layerInfo": [
            {
              "arguments": "string",
              "directive": "DIRECTIVE_UNSPECIFIED"
            }
          ]
        }
      },
      "discovered": {
        "discovered": {
          "analysisCompleted": {
            "analysisType": [
              "string"
            ]
          },
          "analysisError": [
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
          ],
          "analysisStatus": "ANALYSIS_STATUS_UNSPECIFIED",
          "analysisStatusError": {
            "code": 0,
            "details": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "message": "string"
          },
          "continuousAnalysis": "CONTINUOUS_ANALYSIS_UNSPECIFIED",
          "lastAnalysisTime": "string"
        }
      },
      "envelope": {
        "payload": "string",
        "payloadType": "string",
        "signatures": [
          {
            "keyid": "string",
            "sig": "string"
          }
        ]
      },
      "installation": {
        "installation": {
          "architecture": "ARCHITECTURE_UNSPECIFIED",
          "cpeUri": "string",
          "license": {
            "comments": "string",
            "expression": "string"
          },
          "location": [
            {
              "cpeUri": "string",
              "path": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            }
          ],
          "name": "string",
          "packageType": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        }
      },
      "intoto": {
        "signatures": [
          {
            "keyid": "string",
            "sig": "string"
          }
        ],
        "signed": {
          "byproducts": {
            "customValues": {
              "property1": "string",
              "property2": "string"
            }
          },
          "command": [
            "string"
          ],
          "environment": {
            "customValues": {
              "property1": "string",
              "property2": "string"
            }
          },
          "materials": [
            {
              "hashes": {
                "sha256": "string"
              },
              "resourceUri": "string"
            }
          ],
          "products": [
            {
              "hashes": {
                "sha256": "string"
              },
              "resourceUri": "string"
            }
          ]
        }
      },
      "kind": "NOTE_KIND_UNSPECIFIED",
      "name": "string",
      "noteName": "string",
      "remediation": "string",
      "resource": {
        "contentHash": {
          "type": "HASH_TYPE_UNSPECIFIED",
          "value": "string"
        },
        "name": "string",
        "uri": "string"
      },
      "sbom": {
        "createTime": "string",
        "creatorComment": "string",
        "creators": [
          "string"
        ],
        "documentComment": "string",
        "externalDocumentRefs": [
          "string"
        ],
        "id": "string",
        "licenseListVersion": "string",
        "namespace": "string",
        "title": "string"
      },
      "sbomReference": {
        "payload": {
          "_type": "string",
          "predicate": {
            "digest": {
              "property1": "string",
              "property2": "string"
            },
            "location": "string",
            "mimeType": "string",
            "referrerId": "string"
          },
          "predicateType": "string",
          "subject": [
            {
              "digest": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string"
            }
          ]
        },
        "payloadType": "string",
        "signatures": [
          {
            "keyid": "string",
            "sig": "string"
          }
        ]
      },
      "spdxFile": {
        "attributions": [
          "string"
        ],
        "comment": "string",
        "contributors": [
          "string"
        ],
        "copyright": "string",
        "filesLicenseInfo": [
          "string"
        ],
        "id": "string",
        "licenseConcluded": {
          "comments": "string",
          "expression": "string"
        },
        "notice": "string"
      },
      "spdxPackage": {
        "comment": "string",
        "filename": "string",
        "homePage": "string",
        "id": "string",
        "licenseConcluded": {
          "comments": "string",
          "expression": "string"
        },
        "packageType": "string",
        "sourceInfo": "string",
        "summaryDescription": "string",
        "title": "string",
        "version": "string"
      },
      "spdxRelationship": {
        "comment": "string",
        "source": "string",
        "target": "string",
        "type": "RELATIONSHIP_TYPE_UNSPECIFIED"
      },
      "updateTime": "string",
      "vulnerability": {
        "cvssScore": 0,
        "cvssV2": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "authentication": "AUTHENTICATION_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssV3": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "authentication": "AUTHENTICATION_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "exploitabilityScore": 0,
          "impactScore": 0,
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
        "effectiveSeverity": "SEVERITY_UNSPECIFIED",
        "longDescription": "string",
        "packageIssue": [
          {
            "affectedLocation": {
              "cpeUri": "string",
              "package": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            },
            "effectiveSeverity": "SEVERITY_UNSPECIFIED",
            "fixedLocation": {
              "cpeUri": "string",
              "package": "string",
              "version": {
                "epoch": 0,
                "inclusive": true,
                "kind": "VERSION_KIND_UNSPECIFIED",
                "name": "string",
                "revision": "string"
              }
            },
            "packageType": "string",
            "severityName": "string"
          }
        ],
        "relatedUrls": [
          {
            "label": "string",
            "url": "string"
          }
        ],
        "severity": "SEVERITY_UNSPECIFIED",
        "shortDescription": "string",
        "type": "string",
        "vexAssessment": {
          "cve": "string",
          "impacts": [
            "string"
          ],
          "justification": {
            "details": "string",
            "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
          },
          "noteName": "string",
          "relatedUris": [
            {
              "label": "string",
              "url": "string"
            }
          ],
          "remediations": [
            {
              "details": "string",
              "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
              "remediationUri": {
                "label": "string",
                "url": "string"
              }
            }
          ],
          "state": "STATE_UNSPECIFIED"
        }
      }
    }
  ]
}
```

Response for listing occurrences.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The next pagination token in the list response. It should be used as `page_token` for the following request. An empty value means no more results.|
|occurrences|[[Occurrence](#schemaoccurrence)]|false|none|The occurrences requested.|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "cpeUri": "string",
  "path": "string",
  "version": {
    "epoch": 0,
    "inclusive": true,
    "kind": "VERSION_KIND_UNSPECIFIED",
    "name": "string",
    "revision": "string"
  }
}
```

An occurrence of a particular package installation found within a system's filesystem. E.g., glibc was found in `/var/lib/dpkg/status`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpeUri|string|false|none|Deprecated. The CPE URI in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package.|
|path|string|false|none|The path from which we gathered that this package/version is installed.|
|version|[Version](#schemaversion)|false|none|Deprecated. The version installed at this location.|

<h2 id="tocS_Note">Note</h2>
<!-- backwards compatibility -->
<a id="schemanote"></a>
<a id="schema_Note"></a>
<a id="tocSnote"></a>
<a id="tocsnote"></a>

```json
{
  "attestationAuthority": {
    "hint": {
      "humanReadableName": "string"
    }
  },
  "baseImage": {
    "fingerprint": {
      "v1Name": "string",
      "v2Blob": [
        "string"
      ],
      "v2Name": "string"
    },
    "resourceUrl": "string"
  },
  "build": {
    "builderVersion": "string",
    "signature": {
      "keyId": "string",
      "keyType": "KEY_TYPE_UNSPECIFIED",
      "publicKey": "string",
      "signature": "string"
    }
  },
  "createTime": "string",
  "deployable": {
    "resourceUri": [
      "string"
    ]
  },
  "discovery": {
    "analysisKind": "NOTE_KIND_UNSPECIFIED"
  },
  "expirationTime": "string",
  "intoto": {
    "expectedCommand": [
      "string"
    ],
    "expectedMaterials": [
      {
        "artifactRule": [
          "string"
        ]
      }
    ],
    "expectedProducts": [
      {
        "artifactRule": [
          "string"
        ]
      }
    ],
    "signingKeys": [
      {
        "keyId": "string",
        "keyScheme": "string",
        "keyType": "string",
        "publicKeyValue": "string"
      }
    ],
    "stepName": "string",
    "threshold": "string"
  },
  "kind": "NOTE_KIND_UNSPECIFIED",
  "longDescription": "string",
  "name": "string",
  "package": {
    "architecture": "ARCHITECTURE_UNSPECIFIED",
    "cpeUri": "string",
    "description": "string",
    "digest": [
      {
        "algo": "string",
        "digestBytes": "string"
      }
    ],
    "distribution": [
      {
        "architecture": "ARCHITECTURE_UNSPECIFIED",
        "cpeUri": "string",
        "description": "string",
        "latestVersion": {
          "epoch": 0,
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        },
        "maintainer": "string",
        "url": "string"
      }
    ],
    "license": {
      "comments": "string",
      "expression": "string"
    },
    "maintainer": "string",
    "name": "string",
    "packageType": "string",
    "url": "string",
    "version": {
      "epoch": 0,
      "inclusive": true,
      "kind": "VERSION_KIND_UNSPECIFIED",
      "name": "string",
      "revision": "string"
    }
  },
  "relatedNoteNames": [
    "string"
  ],
  "relatedUrl": [
    {
      "label": "string",
      "url": "string"
    }
  ],
  "sbom": {
    "dataLicence": "string",
    "spdxVersion": "string"
  },
  "sbomReference": {
    "format": "string",
    "version": "string"
  },
  "shortDescription": "string",
  "spdxFile": {
    "checksum": [
      "string"
    ],
    "fileType": "FILE_TYPE_UNSPECIFIED",
    "title": "string"
  },
  "spdxPackage": {
    "analyzed": true,
    "attribution": "string",
    "checksum": "string",
    "copyright": "string",
    "detailedDescription": "string",
    "downloadLocation": "string",
    "externalRefs": [
      {
        "category": "CATEGORY_UNSPECIFIED",
        "comment": "string",
        "locator": "string",
        "type": "string"
      }
    ],
    "filesLicenseInfo": [
      "string"
    ],
    "homePage": "string",
    "licenseDeclared": {
      "comments": "string",
      "expression": "string"
    },
    "originator": "string",
    "packageType": "string",
    "summaryDescription": "string",
    "supplier": "string",
    "title": "string",
    "verificationCode": "string",
    "version": "string"
  },
  "spdxRelationship": {
    "type": "RELATIONSHIP_TYPE_UNSPECIFIED"
  },
  "updateTime": "string",
  "vulnerability": {
    "cvssScore": 0,
    "cvssV2": {
      "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
      "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
      "authentication": "AUTHENTICATION_UNSPECIFIED",
      "availabilityImpact": "IMPACT_UNSPECIFIED",
      "baseScore": 0,
      "confidentialityImpact": "IMPACT_UNSPECIFIED",
      "exploitabilityScore": 0,
      "impactScore": 0,
      "integrityImpact": "IMPACT_UNSPECIFIED",
      "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
      "scope": "SCOPE_UNSPECIFIED",
      "userInteraction": "USER_INTERACTION_UNSPECIFIED"
    },
    "cvssV3": {
      "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
      "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
      "availabilityImpact": "IMPACT_UNSPECIFIED",
      "baseScore": 0,
      "confidentialityImpact": "IMPACT_UNSPECIFIED",
      "exploitabilityScore": 0,
      "impactScore": 0,
      "integrityImpact": "IMPACT_UNSPECIFIED",
      "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
      "scope": "SCOPE_UNSPECIFIED",
      "userInteraction": "USER_INTERACTION_UNSPECIFIED"
    },
    "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
    "cwe": [
      "string"
    ],
    "details": [
      {
        "cpeUri": "string",
        "description": "string",
        "fixedLocation": {
          "cpeUri": "string",
          "package": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        },
        "isObsolete": true,
        "maxAffectedVersion": {
          "epoch": 0,
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        },
        "minAffectedVersion": {
          "epoch": 0,
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        },
        "package": "string",
        "packageType": "string",
        "severityName": "string",
        "source": "string",
        "sourceUpdateTime": "string",
        "vendor": "string"
      }
    ],
    "severity": "SEVERITY_UNSPECIFIED",
    "sourceUpdateTime": "string",
    "windowsDetails": [
      {
        "cpeUri": "string",
        "description": "string",
        "fixingKbs": [
          {
            "name": "string",
            "url": "string"
          }
        ],
        "name": "string"
      }
    ]
  },
  "vulnerabilityAssessment": {
    "assessment": {
      "cve": "string",
      "impacts": [
        "string"
      ],
      "justification": {
        "details": "string",
        "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
      },
      "longDescription": "string",
      "relatedUris": [
        {
          "label": "string",
          "url": "string"
        }
      ],
      "remediations": [
        {
          "details": "string",
          "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
          "remediationUri": {
            "label": "string",
            "url": "string"
          }
        }
      ],
      "shortDescription": "string",
      "state": "STATE_UNSPECIFIED"
    },
    "languageCode": "string",
    "longDescription": "string",
    "product": {
      "genericUri": "string",
      "id": "string",
      "name": "string"
    },
    "publisher": {
      "issuingAuthority": "string",
      "name": "string",
      "publisherNamespace": "string"
    },
    "shortDescription": "string",
    "title": "string"
  }
}
```

A type of analysis that can be done for a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attestationAuthority|[Authority](#schemaauthority)|false|none|A note describing an attestation role.|
|baseImage|[Basis](#schemabasis)|false|none|A note describing a base image.|
|build|[Build](#schemabuild)|false|none|A note describing build provenance for a verifiable build.|
|createTime|string(google-datetime)|false|none|Output only. The time this note was created. This field can be used as a filter in list requests.|
|deployable|[Deployable](#schemadeployable)|false|none|A note describing something that can be deployed.|
|discovery|[Discovery](#schemadiscovery)|false|none|A note describing the initial analysis of a resource.|
|expirationTime|string(google-datetime)|false|none|Time of expiration for this note. Empty if note does not expire.|
|intoto|[InToto](#schemaintoto)|false|none|A note describing an in-toto link.|
|kind|string|false|none|Output only. The type of analysis. This field can be used as a filter in list requests.|
|longDescription|string|false|none|A detailed description of this note.|
|name|string|false|none|Output only. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.|
|package|[Package](#schemapackage)|false|none|A note describing a package hosted by various package managers.|
|relatedNoteNames|[string]|false|none|Other notes related to this note.|
|relatedUrl|[[RelatedUrl](#schemarelatedurl)]|false|none|URLs associated with this note.|
|sbom|[DocumentNote](#schemadocumentnote)|false|none|A note describing a software bill of materials.|
|sbomReference|[SBOMReferenceNote](#schemasbomreferencenote)|false|none|A note describing an SBOM reference.|
|shortDescription|string|false|none|A one sentence description of this note.|
|spdxFile|[FileNote](#schemafilenote)|false|none|A note describing an SPDX File.|
|spdxPackage|[PackageInfoNote](#schemapackageinfonote)|false|none|A note describing an SPDX Package.|
|spdxRelationship|[RelationshipNote](#schemarelationshipnote)|false|none|A note describing an SPDX File.|
|updateTime|string(google-datetime)|false|none|Output only. The time this note was last updated. This field can be used as a filter in list requests.|
|vulnerability|[Vulnerability](#schemavulnerability)|false|none|A note describing a package vulnerability.|
|vulnerabilityAssessment|[VulnerabilityAssessmentNote](#schemavulnerabilityassessmentnote)|false|none|A note describing a vulnerability assessment.|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|NOTE_KIND_UNSPECIFIED|
|kind|VULNERABILITY|
|kind|BUILD|
|kind|IMAGE|
|kind|PACKAGE|
|kind|DEPLOYMENT|
|kind|DISCOVERY|
|kind|ATTESTATION|
|kind|INTOTO|
|kind|SBOM|
|kind|SPDX_PACKAGE|
|kind|SPDX_FILE|
|kind|SPDX_RELATIONSHIP|
|kind|VULNERABILITY_ASSESSMENT|
|kind|SBOM_REFERENCE|

<h2 id="tocS_Occurrence">Occurrence</h2>
<!-- backwards compatibility -->
<a id="schemaoccurrence"></a>
<a id="schema_Occurrence"></a>
<a id="tocSoccurrence"></a>
<a id="tocsoccurrence"></a>

```json
{
  "attestation": {
    "attestation": {
      "genericSignedAttestation": {
        "contentType": "CONTENT_TYPE_UNSPECIFIED",
        "serializedPayload": "string",
        "signatures": [
          {
            "publicKeyId": "string",
            "signature": "string"
          }
        ]
      },
      "pgpSignedAttestation": {
        "contentType": "CONTENT_TYPE_UNSPECIFIED",
        "pgpKeyId": "string",
        "signature": "string"
      }
    }
  },
  "build": {
    "provenance": {
      "buildOptions": {
        "property1": "string",
        "property2": "string"
      },
      "builderVersion": "string",
      "builtArtifacts": [
        {
          "checksum": "string",
          "id": "string",
          "names": [
            "string"
          ]
        }
      ],
      "commands": [
        {
          "args": [
            "string"
          ],
          "dir": "string",
          "env": [
            "string"
          ],
          "id": "string",
          "name": "string",
          "waitFor": [
            "string"
          ]
        }
      ],
      "createTime": "string",
      "creator": "string",
      "endTime": "string",
      "id": "string",
      "logsUri": "string",
      "projectId": "string",
      "sourceProvenance": {
        "additionalContexts": [
          {
            "cloudRepo": {
              "aliasContext": {
                "kind": "KIND_UNSPECIFIED",
                "name": "string"
              },
              "repoId": {
                "projectRepoId": {
                  "projectId": "string",
                  "repoName": "string"
                },
                "uid": "string"
              },
              "revisionId": "string"
            },
            "gerrit": {
              "aliasContext": {
                "kind": "KIND_UNSPECIFIED",
                "name": "string"
              },
              "gerritProject": "string",
              "hostUri": "string",
              "revisionId": "string"
            },
            "git": {
              "revisionId": "string",
              "url": "string"
            },
            "labels": {
              "property1": "string",
              "property2": "string"
            }
          }
        ],
        "artifactStorageSourceUri": "string",
        "context": {
          "cloudRepo": {
            "aliasContext": {
              "kind": "KIND_UNSPECIFIED",
              "name": "string"
            },
            "repoId": {
              "projectRepoId": {
                "projectId": "string",
                "repoName": "string"
              },
              "uid": "string"
            },
            "revisionId": "string"
          },
          "gerrit": {
            "aliasContext": {
              "kind": "KIND_UNSPECIFIED",
              "name": "string"
            },
            "gerritProject": "string",
            "hostUri": "string",
            "revisionId": "string"
          },
          "git": {
            "revisionId": "string",
            "url": "string"
          },
          "labels": {
            "property1": "string",
            "property2": "string"
          }
        },
        "fileHashes": {
          "property1": {
            "fileHash": [
              {
                "type": "HASH_TYPE_UNSPECIFIED",
                "value": "string"
              }
            ]
          },
          "property2": {
            "fileHash": [
              {
                "type": "HASH_TYPE_UNSPECIFIED",
                "value": "string"
              }
            ]
          }
        }
      },
      "startTime": "string",
      "triggerId": "string"
    },
    "provenanceBytes": "string"
  },
  "createTime": "string",
  "deployment": {
    "deployment": {
      "address": "string",
      "config": "string",
      "deployTime": "string",
      "platform": "PLATFORM_UNSPECIFIED",
      "resourceUri": [
        "string"
      ],
      "undeployTime": "string",
      "userEmail": "string"
    }
  },
  "derivedImage": {
    "derivedImage": {
      "baseResourceUrl": "string",
      "distance": 0,
      "fingerprint": {
        "v1Name": "string",
        "v2Blob": [
          "string"
        ],
        "v2Name": "string"
      },
      "layerInfo": [
        {
          "arguments": "string",
          "directive": "DIRECTIVE_UNSPECIFIED"
        }
      ]
    }
  },
  "discovered": {
    "discovered": {
      "analysisCompleted": {
        "analysisType": [
          "string"
        ]
      },
      "analysisError": [
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
      ],
      "analysisStatus": "ANALYSIS_STATUS_UNSPECIFIED",
      "analysisStatusError": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "continuousAnalysis": "CONTINUOUS_ANALYSIS_UNSPECIFIED",
      "lastAnalysisTime": "string"
    }
  },
  "envelope": {
    "payload": "string",
    "payloadType": "string",
    "signatures": [
      {
        "keyid": "string",
        "sig": "string"
      }
    ]
  },
  "installation": {
    "installation": {
      "architecture": "ARCHITECTURE_UNSPECIFIED",
      "cpeUri": "string",
      "license": {
        "comments": "string",
        "expression": "string"
      },
      "location": [
        {
          "cpeUri": "string",
          "path": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        }
      ],
      "name": "string",
      "packageType": "string",
      "version": {
        "epoch": 0,
        "inclusive": true,
        "kind": "VERSION_KIND_UNSPECIFIED",
        "name": "string",
        "revision": "string"
      }
    }
  },
  "intoto": {
    "signatures": [
      {
        "keyid": "string",
        "sig": "string"
      }
    ],
    "signed": {
      "byproducts": {
        "customValues": {
          "property1": "string",
          "property2": "string"
        }
      },
      "command": [
        "string"
      ],
      "environment": {
        "customValues": {
          "property1": "string",
          "property2": "string"
        }
      },
      "materials": [
        {
          "hashes": {
            "sha256": "string"
          },
          "resourceUri": "string"
        }
      ],
      "products": [
        {
          "hashes": {
            "sha256": "string"
          },
          "resourceUri": "string"
        }
      ]
    }
  },
  "kind": "NOTE_KIND_UNSPECIFIED",
  "name": "string",
  "noteName": "string",
  "remediation": "string",
  "resource": {
    "contentHash": {
      "type": "HASH_TYPE_UNSPECIFIED",
      "value": "string"
    },
    "name": "string",
    "uri": "string"
  },
  "sbom": {
    "createTime": "string",
    "creatorComment": "string",
    "creators": [
      "string"
    ],
    "documentComment": "string",
    "externalDocumentRefs": [
      "string"
    ],
    "id": "string",
    "licenseListVersion": "string",
    "namespace": "string",
    "title": "string"
  },
  "sbomReference": {
    "payload": {
      "_type": "string",
      "predicate": {
        "digest": {
          "property1": "string",
          "property2": "string"
        },
        "location": "string",
        "mimeType": "string",
        "referrerId": "string"
      },
      "predicateType": "string",
      "subject": [
        {
          "digest": {
            "property1": "string",
            "property2": "string"
          },
          "name": "string"
        }
      ]
    },
    "payloadType": "string",
    "signatures": [
      {
        "keyid": "string",
        "sig": "string"
      }
    ]
  },
  "spdxFile": {
    "attributions": [
      "string"
    ],
    "comment": "string",
    "contributors": [
      "string"
    ],
    "copyright": "string",
    "filesLicenseInfo": [
      "string"
    ],
    "id": "string",
    "licenseConcluded": {
      "comments": "string",
      "expression": "string"
    },
    "notice": "string"
  },
  "spdxPackage": {
    "comment": "string",
    "filename": "string",
    "homePage": "string",
    "id": "string",
    "licenseConcluded": {
      "comments": "string",
      "expression": "string"
    },
    "packageType": "string",
    "sourceInfo": "string",
    "summaryDescription": "string",
    "title": "string",
    "version": "string"
  },
  "spdxRelationship": {
    "comment": "string",
    "source": "string",
    "target": "string",
    "type": "RELATIONSHIP_TYPE_UNSPECIFIED"
  },
  "updateTime": "string",
  "vulnerability": {
    "cvssScore": 0,
    "cvssV2": {
      "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
      "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
      "authentication": "AUTHENTICATION_UNSPECIFIED",
      "availabilityImpact": "IMPACT_UNSPECIFIED",
      "baseScore": 0,
      "confidentialityImpact": "IMPACT_UNSPECIFIED",
      "exploitabilityScore": 0,
      "impactScore": 0,
      "integrityImpact": "IMPACT_UNSPECIFIED",
      "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
      "scope": "SCOPE_UNSPECIFIED",
      "userInteraction": "USER_INTERACTION_UNSPECIFIED"
    },
    "cvssV3": {
      "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
      "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
      "authentication": "AUTHENTICATION_UNSPECIFIED",
      "availabilityImpact": "IMPACT_UNSPECIFIED",
      "baseScore": 0,
      "confidentialityImpact": "IMPACT_UNSPECIFIED",
      "exploitabilityScore": 0,
      "impactScore": 0,
      "integrityImpact": "IMPACT_UNSPECIFIED",
      "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
      "scope": "SCOPE_UNSPECIFIED",
      "userInteraction": "USER_INTERACTION_UNSPECIFIED"
    },
    "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
    "effectiveSeverity": "SEVERITY_UNSPECIFIED",
    "longDescription": "string",
    "packageIssue": [
      {
        "affectedLocation": {
          "cpeUri": "string",
          "package": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        },
        "effectiveSeverity": "SEVERITY_UNSPECIFIED",
        "fixedLocation": {
          "cpeUri": "string",
          "package": "string",
          "version": {
            "epoch": 0,
            "inclusive": true,
            "kind": "VERSION_KIND_UNSPECIFIED",
            "name": "string",
            "revision": "string"
          }
        },
        "packageType": "string",
        "severityName": "string"
      }
    ],
    "relatedUrls": [
      {
        "label": "string",
        "url": "string"
      }
    ],
    "severity": "SEVERITY_UNSPECIFIED",
    "shortDescription": "string",
    "type": "string",
    "vexAssessment": {
      "cve": "string",
      "impacts": [
        "string"
      ],
      "justification": {
        "details": "string",
        "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
      },
      "noteName": "string",
      "relatedUris": [
        {
          "label": "string",
          "url": "string"
        }
      ],
      "remediations": [
        {
          "details": "string",
          "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
          "remediationUri": {
            "label": "string",
            "url": "string"
          }
        }
      ],
      "state": "STATE_UNSPECIFIED"
    }
  }
}
```

An instance of an analysis type that has been found on a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attestation|[Details](#schemadetails)|false|none|Describes an attestation of an artifact.|
|build|[GrafeasV1beta1BuildDetails](#schemagrafeasv1beta1builddetails)|false|none|Describes a verifiable build.|
|createTime|string(google-datetime)|false|none|Output only. The time this occurrence was created.|
|deployment|[GrafeasV1beta1DeploymentDetails](#schemagrafeasv1beta1deploymentdetails)|false|none|Describes the deployment of an artifact on a runtime.|
|derivedImage|[GrafeasV1beta1ImageDetails](#schemagrafeasv1beta1imagedetails)|false|none|Describes how this resource derives from the basis in the associated note.|
|discovered|[GrafeasV1beta1DiscoveryDetails](#schemagrafeasv1beta1discoverydetails)|false|none|Describes when a resource was discovered.|
|envelope|[Envelope](#schemaenvelope)|false|none|https://github.com/secure-systems-lab/dsse|
|installation|[GrafeasV1beta1PackageDetails](#schemagrafeasv1beta1packagedetails)|false|none|Describes the installation of a package on the linked resource.|
|intoto|[GrafeasV1beta1IntotoDetails](#schemagrafeasv1beta1intotodetails)|false|none|Describes a specific in-toto link.|
|kind|string|false|none|Output only. This explicitly denotes which of the occurrence details are specified. This field can be used as a filter in list requests.|
|name|string|false|none|Output only. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.|
|noteName|string|false|none|Required. Immutable. The analysis note associated with this occurrence, in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. This field can be used as a filter in list requests.|
|remediation|string|false|none|A description of actions that can be taken to remedy the note.|
|resource|[Resource](#schemaresource)|false|none|Required. Immutable. The resource for which the occurrence applies.|
|sbom|[DocumentOccurrence](#schemadocumentoccurrence)|false|none|Describes a specific software bill of materials document.|
|sbomReference|[SBOMReferenceOccurrence](#schemasbomreferenceoccurrence)|false|none|Describes a specific SBOM reference occurrences.|
|spdxFile|[FileOccurrence](#schemafileoccurrence)|false|none|Describes a specific SPDX File.|
|spdxPackage|[PackageInfoOccurrence](#schemapackageinfooccurrence)|false|none|Describes a specific SPDX Package.|
|spdxRelationship|[RelationshipOccurrence](#schemarelationshipoccurrence)|false|none|Describes a specific SPDX Relationship.|
|updateTime|string(google-datetime)|false|none|Output only. The time this occurrence was last updated.|
|vulnerability|[GrafeasV1beta1VulnerabilityDetails](#schemagrafeasv1beta1vulnerabilitydetails)|false|none|Describes a security vulnerability.|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|NOTE_KIND_UNSPECIFIED|
|kind|VULNERABILITY|
|kind|BUILD|
|kind|IMAGE|
|kind|PACKAGE|
|kind|DEPLOYMENT|
|kind|DISCOVERY|
|kind|ATTESTATION|
|kind|INTOTO|
|kind|SBOM|
|kind|SPDX_PACKAGE|
|kind|SPDX_FILE|
|kind|SPDX_RELATIONSHIP|
|kind|VULNERABILITY_ASSESSMENT|
|kind|SBOM_REFERENCE|

<h2 id="tocS_Package">Package</h2>
<!-- backwards compatibility -->
<a id="schemapackage"></a>
<a id="schema_Package"></a>
<a id="tocSpackage"></a>
<a id="tocspackage"></a>

```json
{
  "architecture": "ARCHITECTURE_UNSPECIFIED",
  "cpeUri": "string",
  "description": "string",
  "digest": [
    {
      "algo": "string",
      "digestBytes": "string"
    }
  ],
  "distribution": [
    {
      "architecture": "ARCHITECTURE_UNSPECIFIED",
      "cpeUri": "string",
      "description": "string",
      "latestVersion": {
        "epoch": 0,
        "inclusive": true,
        "kind": "VERSION_KIND_UNSPECIFIED",
        "name": "string",
        "revision": "string"
      },
      "maintainer": "string",
      "url": "string"
    }
  ],
  "license": {
    "comments": "string",
    "expression": "string"
  },
  "maintainer": "string",
  "name": "string",
  "packageType": "string",
  "url": "string",
  "version": {
    "epoch": 0,
    "inclusive": true,
    "kind": "VERSION_KIND_UNSPECIFIED",
    "name": "string",
    "revision": "string"
  }
}
```

Package represents a particular package version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|architecture|string|false|none|The CPU architecture for which packages in this distribution channel were built. Architecture will be blank for language packages.|
|cpeUri|string|false|none|The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. The cpe_uri will be blank for language packages.|
|description|string|false|none|The description of this package.|
|digest|[[Digest](#schemadigest)]|false|none|Hash value, typically a file digest, that allows unique identification a specific package.|
|distribution|[[Distribution](#schemadistribution)]|false|none|The various channels by which a package is distributed.|
|license|[License](#schemalicense)|false|none|Licenses that have been declared by the authors of the package.|
|maintainer|string|false|none|A freeform text denoting the maintainer of this package.|
|name|string|false|none|Required. Immutable. The name of the package.|
|packageType|string|false|none|The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.).|
|url|string|false|none|The homepage for this package.|
|version|[Version](#schemaversion)|false|none|The version of the package.|

#### Enumerated Values

|Property|Value|
|---|---|
|architecture|ARCHITECTURE_UNSPECIFIED|
|architecture|X86|
|architecture|X64|

<h2 id="tocS_PackageInfoNote">PackageInfoNote</h2>
<!-- backwards compatibility -->
<a id="schemapackageinfonote"></a>
<a id="schema_PackageInfoNote"></a>
<a id="tocSpackageinfonote"></a>
<a id="tocspackageinfonote"></a>

```json
{
  "analyzed": true,
  "attribution": "string",
  "checksum": "string",
  "copyright": "string",
  "detailedDescription": "string",
  "downloadLocation": "string",
  "externalRefs": [
    {
      "category": "CATEGORY_UNSPECIFIED",
      "comment": "string",
      "locator": "string",
      "type": "string"
    }
  ],
  "filesLicenseInfo": [
    "string"
  ],
  "homePage": "string",
  "licenseDeclared": {
    "comments": "string",
    "expression": "string"
  },
  "originator": "string",
  "packageType": "string",
  "summaryDescription": "string",
  "supplier": "string",
  "title": "string",
  "verificationCode": "string",
  "version": "string"
}
```

PackageInfoNote represents an SPDX Package Information section: https://spdx.github.io/spdx-spec/3-package-information/

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyzed|boolean|false|none|Indicates whether the file content of this package has been available for or subjected to analysis when creating the SPDX document|
|attribution|string|false|none|A place for the SPDX data creator to record, at the package level, acknowledgements that may be needed to be communicated in some contexts|
|checksum|string|false|none|Provide an independently reproducible mechanism that permits unique identification of a specific package that correlates to the data in this SPDX file|
|copyright|string|false|none|Identify the copyright holders of the package, as well as any dates present|
|detailedDescription|string|false|none|A more detailed description of the package|
|downloadLocation|string|false|none|This section identifies the download Universal Resource Locator (URL), or a specific location within a version control system (VCS) for the package at the time that the SPDX file was created|
|externalRefs|[[ExternalRef](#schemaexternalref)]|false|none|ExternalRef|
|filesLicenseInfo|[string]|false|none|Contain the license the SPDX file creator has concluded as governing the This field is to contain a list of all licenses found in the package. The relationship between licenses (i.e., conjunctive, disjunctive) is not specified in this field – it is simply a listing of all licenses found|
|homePage|string|false|none|Provide a place for the SPDX file creator to record a web site that serves as the package's home page|
|licenseDeclared|[License](#schemalicense)|false|none|List the licenses that have been declared by the authors of the package|
|originator|string|false|none|If the package identified in the SPDX file originated from a different person or organization than identified as Package Supplier, this field identifies from where or whom the package originally came|
|packageType|string|false|none|The type of package: OS, MAVEN, GO, GO_STDLIB, etc.|
|summaryDescription|string|false|none|A short description of the package|
|supplier|string|false|none|Identify the actual distribution source for the package/directory identified in the SPDX file|
|title|string|false|none|Identify the full name of the package as given by the Package Originator|
|verificationCode|string|false|none|This field provides an independently reproducible mechanism identifying specific contents of a package based on the actual files (except the SPDX file itself, if it is included in the package) that make up each package and that correlates to the data in this SPDX file|
|version|string|false|none|Identify the version of the package|

<h2 id="tocS_PackageInfoOccurrence">PackageInfoOccurrence</h2>
<!-- backwards compatibility -->
<a id="schemapackageinfooccurrence"></a>
<a id="schema_PackageInfoOccurrence"></a>
<a id="tocSpackageinfooccurrence"></a>
<a id="tocspackageinfooccurrence"></a>

```json
{
  "comment": "string",
  "filename": "string",
  "homePage": "string",
  "id": "string",
  "licenseConcluded": {
    "comments": "string",
    "expression": "string"
  },
  "packageType": "string",
  "sourceInfo": "string",
  "summaryDescription": "string",
  "title": "string",
  "version": "string"
}
```

PackageInfoOccurrence represents an SPDX Package Information section: https://spdx.github.io/spdx-spec/3-package-information/

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|false|none|A place for the SPDX file creator to record any general comments about the package being described|
|filename|string|false|none|Provide the actual file name of the package, or path of the directory being treated as a package|
|homePage|string|false|read-only|Output only. Provide a place for the SPDX file creator to record a web site that serves as the package's home page|
|id|string|false|none|Uniquely identify any element in an SPDX document which may be referenced by other elements|
|licenseConcluded|[License](#schemalicense)|false|none|package or alternative values, if the governing license cannot be determined|
|packageType|string|false|read-only|Output only. The type of package: OS, MAVEN, GO, GO_STDLIB, etc.|
|sourceInfo|string|false|none|Provide a place for the SPDX file creator to record any relevant background information or additional comments about the origin of the package|
|summaryDescription|string|false|read-only|Output only. A short description of the package|
|title|string|false|read-only|Output only. Identify the full name of the package as given by the Package Originator|
|version|string|false|read-only|Output only. Identify the version of the package|

<h2 id="tocS_PackageIssue">PackageIssue</h2>
<!-- backwards compatibility -->
<a id="schemapackageissue"></a>
<a id="schema_PackageIssue"></a>
<a id="tocSpackageissue"></a>
<a id="tocspackageissue"></a>

```json
{
  "affectedLocation": {
    "cpeUri": "string",
    "package": "string",
    "version": {
      "epoch": 0,
      "inclusive": true,
      "kind": "VERSION_KIND_UNSPECIFIED",
      "name": "string",
      "revision": "string"
    }
  },
  "effectiveSeverity": "SEVERITY_UNSPECIFIED",
  "fixedLocation": {
    "cpeUri": "string",
    "package": "string",
    "version": {
      "epoch": 0,
      "inclusive": true,
      "kind": "VERSION_KIND_UNSPECIFIED",
      "name": "string",
      "revision": "string"
    }
  },
  "packageType": "string",
  "severityName": "string"
}
```

This message wraps a location affected by a vulnerability and its associated fix (if one is available).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|affectedLocation|[VulnerabilityLocation](#schemavulnerabilitylocation)|false|none|Required. The location of the vulnerability.|
|effectiveSeverity|string|false|read-only|Output only. The distro or language system assigned severity for this vulnerability when that is available and note provider assigned severity when it is not available.|
|fixedLocation|[VulnerabilityLocation](#schemavulnerabilitylocation)|false|none|The location of the available fix for vulnerability.|
|packageType|string|false|none|The type of package (e.g. OS, MAVEN, GO).|
|severityName|string|false|none|Deprecated, use Details.effective_severity instead The severity (e.g., distro assigned severity) for this vulnerability.|

#### Enumerated Values

|Property|Value|
|---|---|
|effectiveSeverity|SEVERITY_UNSPECIFIED|
|effectiveSeverity|MINIMAL|
|effectiveSeverity|LOW|
|effectiveSeverity|MEDIUM|
|effectiveSeverity|HIGH|
|effectiveSeverity|CRITICAL|

<h2 id="tocS_PgpSignedAttestation">PgpSignedAttestation</h2>
<!-- backwards compatibility -->
<a id="schemapgpsignedattestation"></a>
<a id="schema_PgpSignedAttestation"></a>
<a id="tocSpgpsignedattestation"></a>
<a id="tocspgpsignedattestation"></a>

```json
{
  "contentType": "CONTENT_TYPE_UNSPECIFIED",
  "pgpKeyId": "string",
  "signature": "string"
}
```

An attestation wrapper with a PGP-compatible signature. This message only supports `ATTACHED` signatures, where the payload that is signed is included alongside the signature itself in the same file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentType|string|false|none|Type (for example schema) of the attestation payload that was signed. The verifier must ensure that the provided type is one that the verifier supports, and that the attestation payload is a valid instantiation of that type (for example by validating a JSON schema).|
|pgpKeyId|string|false|none|The cryptographic fingerprint of the key used to generate the signature, as output by, e.g. `gpg --list-keys`. This should be the version 4, full 160-bit fingerprint, expressed as a 40 character hexadecimal string. See https://tools.ietf.org/html/rfc4880#section-12.2 for details. Implementations may choose to acknowledge "LONG", "SHORT", or other abbreviated key IDs, but only the full fingerprint is guaranteed to work. In gpg, the full fingerprint can be retrieved from the `fpr` field returned when calling --list-keys with --with-colons. For example: ``` gpg --with-colons --with-fingerprint --force-v4-certs \ --list-keys attester@example.com tru::1:1513631572:0:3:1:5 pub:...... fpr:::::::::24FF6481B76AC91E66A00AC657A93A81EF3AE6FB: ``` Above, the fingerprint is `24FF6481B76AC91E66A00AC657A93A81EF3AE6FB`.|
|signature|string|false|none|Required. The raw content of the signature, as output by GNU Privacy Guard (GPG) or equivalent. Since this message only supports attached signatures, the payload that was signed must be attached. While the signature format supported is dependent on the verification implementation, currently only ASCII-armored (`--armor` to gpg), non-clearsigned (`--sign` rather than `--clearsign` to gpg) are supported. Concretely, `gpg --sign --armor --output=signature.gpg payload.json` will create the signature content expected in this field in `signature.gpg` for the `payload.json` attestation payload.|

#### Enumerated Values

|Property|Value|
|---|---|
|contentType|CONTENT_TYPE_UNSPECIFIED|
|contentType|SIMPLE_SIGNING_JSON|

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

An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bindings|[[Binding](#schemabinding)]|false|none|Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.|
|etag|string(byte)|false|none|`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.|
|version|integer(int32)|false|none|Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_Product">Product</h2>
<!-- backwards compatibility -->
<a id="schemaproduct"></a>
<a id="schema_Product"></a>
<a id="tocSproduct"></a>
<a id="tocsproduct"></a>

```json
{
  "genericUri": "string",
  "id": "string",
  "name": "string"
}
```

Product contains information about a product and how to uniquely identify it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|genericUri|string|false|none|Contains a URI which is vendor-specific. Example: The artifact repository URL of an image.|
|id|string|false|none|Token that identifies a product so that it can be referred to from other parts in the document. There is no predefined format as long as it uniquely identifies a group in the context of the current document.|
|name|string|false|none|Name of the product.|

<h2 id="tocS_ProjectRepoId">ProjectRepoId</h2>
<!-- backwards compatibility -->
<a id="schemaprojectrepoid"></a>
<a id="schema_ProjectRepoId"></a>
<a id="tocSprojectrepoid"></a>
<a id="tocsprojectrepoid"></a>

```json
{
  "projectId": "string",
  "repoName": "string"
}
```

Selects a repo using a Google Cloud Platform project ID (e.g., winged-cargo-31) and a repo name within that project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectId|string|false|none|The ID of the project.|
|repoName|string|false|none|The name of the repo. Leave empty for the default repo.|

<h2 id="tocS_Publisher">Publisher</h2>
<!-- backwards compatibility -->
<a id="schemapublisher"></a>
<a id="schema_Publisher"></a>
<a id="tocSpublisher"></a>
<a id="tocspublisher"></a>

```json
{
  "issuingAuthority": "string",
  "name": "string",
  "publisherNamespace": "string"
}
```

Publisher contains information about the publisher of this Note.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issuingAuthority|string|false|none|Provides information about the authority of the issuing party to release the document, in particular, the party's constituency and responsibilities or other obligations.|
|name|string|false|none|Name of the publisher. Examples: 'Google', 'Google Cloud Platform'.|
|publisherNamespace|string|false|none|The context or namespace. Contains a URL which is under control of the issuing party and can be used as a globally unique identifier for that issuing party. Example: https://csaf.io|

<h2 id="tocS_RelatedUrl">RelatedUrl</h2>
<!-- backwards compatibility -->
<a id="schemarelatedurl"></a>
<a id="schema_RelatedUrl"></a>
<a id="tocSrelatedurl"></a>
<a id="tocsrelatedurl"></a>

```json
{
  "label": "string",
  "url": "string"
}
```

Metadata for any related URL information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|false|none|Label to describe usage of the URL.|
|url|string|false|none|Specific URL associated with the resource.|

<h2 id="tocS_RelationshipNote">RelationshipNote</h2>
<!-- backwards compatibility -->
<a id="schemarelationshipnote"></a>
<a id="schema_RelationshipNote"></a>
<a id="tocSrelationshipnote"></a>
<a id="tocsrelationshipnote"></a>

```json
{
  "type": "RELATIONSHIP_TYPE_UNSPECIFIED"
}
```

RelationshipNote represents an SPDX Relationship section: https://spdx.github.io/spdx-spec/7-relationships-between-SPDX-elements/

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The type of relationship between the source and target SPDX elements|

#### Enumerated Values

|Property|Value|
|---|---|
|type|RELATIONSHIP_TYPE_UNSPECIFIED|
|type|DESCRIBES|
|type|DESCRIBED_BY|
|type|CONTAINS|
|type|CONTAINED_BY|
|type|DEPENDS_ON|
|type|DEPENDENCY_OF|
|type|DEPENDENCY_MANIFEST_OF|
|type|BUILD_DEPENDENCY_OF|
|type|DEV_DEPENDENCY_OF|
|type|OPTIONAL_DEPENDENCY_OF|
|type|PROVIDED_DEPENDENCY_OF|
|type|TEST_DEPENDENCY_OF|
|type|RUNTIME_DEPENDENCY_OF|
|type|EXAMPLE_OF|
|type|GENERATES|
|type|GENERATED_FROM|
|type|ANCESTOR_OF|
|type|DESCENDANT_OF|
|type|VARIANT_OF|
|type|DISTRIBUTION_ARTIFACT|
|type|PATCH_FOR|
|type|PATCH_APPLIED|
|type|COPY_OF|
|type|FILE_ADDED|
|type|FILE_DELETED|
|type|FILE_MODIFIED|
|type|EXPANDED_FROM_ARCHIVE|
|type|DYNAMIC_LINK|
|type|STATIC_LINK|
|type|DATA_FILE_OF|
|type|TEST_CASE_OF|
|type|BUILD_TOOL_OF|
|type|DEV_TOOL_OF|
|type|TEST_OF|
|type|TEST_TOOL_OF|
|type|DOCUMENTATION_OF|
|type|OPTIONAL_COMPONENT_OF|
|type|METAFILE_OF|
|type|PACKAGE_OF|
|type|AMENDS|
|type|PREREQUISITE_FOR|
|type|HAS_PREREQUISITE|
|type|OTHER|

<h2 id="tocS_RelationshipOccurrence">RelationshipOccurrence</h2>
<!-- backwards compatibility -->
<a id="schemarelationshipoccurrence"></a>
<a id="schema_RelationshipOccurrence"></a>
<a id="tocSrelationshipoccurrence"></a>
<a id="tocsrelationshipoccurrence"></a>

```json
{
  "comment": "string",
  "source": "string",
  "target": "string",
  "type": "RELATIONSHIP_TYPE_UNSPECIFIED"
}
```

RelationshipOccurrence represents an SPDX Relationship section: https://spdx.github.io/spdx-spec/7-relationships-between-SPDX-elements/

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|false|none|A place for the SPDX file creator to record any general comments about the relationship|
|source|string|false|none|Also referred to as SPDXRef-A The source SPDX element (file, package, etc)|
|target|string|false|none|Also referred to as SPDXRef-B The target SPDC element (file, package, etc) In cases where there are "known unknowns", the use of the keyword NOASSERTION can be used The keywords NONE can be used to indicate that an SPDX element (package/file/snippet) has no other elements connected by some relationship to it|
|type|string|false|read-only|Output only. The type of relationship between the source and target SPDX elements|

#### Enumerated Values

|Property|Value|
|---|---|
|type|RELATIONSHIP_TYPE_UNSPECIFIED|
|type|DESCRIBES|
|type|DESCRIBED_BY|
|type|CONTAINS|
|type|CONTAINED_BY|
|type|DEPENDS_ON|
|type|DEPENDENCY_OF|
|type|DEPENDENCY_MANIFEST_OF|
|type|BUILD_DEPENDENCY_OF|
|type|DEV_DEPENDENCY_OF|
|type|OPTIONAL_DEPENDENCY_OF|
|type|PROVIDED_DEPENDENCY_OF|
|type|TEST_DEPENDENCY_OF|
|type|RUNTIME_DEPENDENCY_OF|
|type|EXAMPLE_OF|
|type|GENERATES|
|type|GENERATED_FROM|
|type|ANCESTOR_OF|
|type|DESCENDANT_OF|
|type|VARIANT_OF|
|type|DISTRIBUTION_ARTIFACT|
|type|PATCH_FOR|
|type|PATCH_APPLIED|
|type|COPY_OF|
|type|FILE_ADDED|
|type|FILE_DELETED|
|type|FILE_MODIFIED|
|type|EXPANDED_FROM_ARCHIVE|
|type|DYNAMIC_LINK|
|type|STATIC_LINK|
|type|DATA_FILE_OF|
|type|TEST_CASE_OF|
|type|BUILD_TOOL_OF|
|type|DEV_TOOL_OF|
|type|TEST_OF|
|type|TEST_TOOL_OF|
|type|DOCUMENTATION_OF|
|type|OPTIONAL_COMPONENT_OF|
|type|METAFILE_OF|
|type|PACKAGE_OF|
|type|AMENDS|
|type|PREREQUISITE_FOR|
|type|HAS_PREREQUISITE|
|type|OTHER|

<h2 id="tocS_Remediation">Remediation</h2>
<!-- backwards compatibility -->
<a id="schemaremediation"></a>
<a id="schema_Remediation"></a>
<a id="tocSremediation"></a>
<a id="tocsremediation"></a>

```json
{
  "details": "string",
  "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
  "remediationUri": {
    "label": "string",
    "url": "string"
  }
}
```

Specifies details on how to handle (and presumably, fix) a vulnerability.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|string|false|none|Contains a comprehensive human-readable discussion of the remediation.|
|remediationType|string|false|none|The type of remediation that can be applied.|
|remediationUri|[RelatedUrl](#schemarelatedurl)|false|none|Contains the URL where to obtain the remediation.|

#### Enumerated Values

|Property|Value|
|---|---|
|remediationType|REMEDIATION_TYPE_UNSPECIFIED|
|remediationType|MITIGATION|
|remediationType|NO_FIX_PLANNED|
|remediationType|NONE_AVAILABLE|
|remediationType|VENDOR_FIX|
|remediationType|WORKAROUND|

<h2 id="tocS_RepoId">RepoId</h2>
<!-- backwards compatibility -->
<a id="schemarepoid"></a>
<a id="schema_RepoId"></a>
<a id="tocSrepoid"></a>
<a id="tocsrepoid"></a>

```json
{
  "projectRepoId": {
    "projectId": "string",
    "repoName": "string"
  },
  "uid": "string"
}
```

A unique identifier for a Cloud Repo.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectRepoId|[ProjectRepoId](#schemaprojectrepoid)|false|none|A combination of a project ID and a repo name.|
|uid|string|false|none|A server-assigned, globally unique identifier.|

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "contentHash": {
    "type": "HASH_TYPE_UNSPECIFIED",
    "value": "string"
  },
  "name": "string",
  "uri": "string"
}
```

An entity that can have metadata. For example, a Docker image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentHash|[Hash](#schemahash)|false|none|Deprecated, do not use. Use uri instead. The hash of the resource content. For example, the Docker digest.|
|name|string|false|none|Deprecated, do not use. Use uri instead. The name of the resource. For example, the name of a Docker image - "Debian".|
|uri|string|false|none|Required. The unique URI of the resource. For example, `https://gcr.io/project/image@sha256:foo` for a Docker image.|

<h2 id="tocS_SBOMReferenceNote">SBOMReferenceNote</h2>
<!-- backwards compatibility -->
<a id="schemasbomreferencenote"></a>
<a id="schema_SBOMReferenceNote"></a>
<a id="tocSsbomreferencenote"></a>
<a id="tocssbomreferencenote"></a>

```json
{
  "format": "string",
  "version": "string"
}
```

The note representing an SBOM reference.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|string|false|none|The format that SBOM takes. E.g. may be spdx, cyclonedx, etc...|
|version|string|false|none|The version of the format that the SBOM takes. E.g. if the format is spdx, the version may be 2.3.|

<h2 id="tocS_SBOMReferenceOccurrence">SBOMReferenceOccurrence</h2>
<!-- backwards compatibility -->
<a id="schemasbomreferenceoccurrence"></a>
<a id="schema_SBOMReferenceOccurrence"></a>
<a id="tocSsbomreferenceoccurrence"></a>
<a id="tocssbomreferenceoccurrence"></a>

```json
{
  "payload": {
    "_type": "string",
    "predicate": {
      "digest": {
        "property1": "string",
        "property2": "string"
      },
      "location": "string",
      "mimeType": "string",
      "referrerId": "string"
    },
    "predicateType": "string",
    "subject": [
      {
        "digest": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string"
      }
    ]
  },
  "payloadType": "string",
  "signatures": [
    {
      "keyid": "string",
      "sig": "string"
    }
  ]
}
```

The occurrence representing an SBOM reference as applied to a specific resource. The occurrence follows the DSSE specification. See https://github.com/secure-systems-lab/dsse/blob/master/envelope.md for more details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|[SbomReferenceIntotoPayload](#schemasbomreferenceintotopayload)|false|none|The actual payload that contains the SBOM reference data.|
|payloadType|string|false|none|The kind of payload that SbomReferenceIntotoPayload takes. Since it's in the intoto format, this value is expected to be 'application/vnd.in-toto+json'.|
|signatures|[[EnvelopeSignature](#schemaenvelopesignature)]|false|none|The signatures over the payload.|

<h2 id="tocS_SbomReferenceIntotoPayload">SbomReferenceIntotoPayload</h2>
<!-- backwards compatibility -->
<a id="schemasbomreferenceintotopayload"></a>
<a id="schema_SbomReferenceIntotoPayload"></a>
<a id="tocSsbomreferenceintotopayload"></a>
<a id="tocssbomreferenceintotopayload"></a>

```json
{
  "_type": "string",
  "predicate": {
    "digest": {
      "property1": "string",
      "property2": "string"
    },
    "location": "string",
    "mimeType": "string",
    "referrerId": "string"
  },
  "predicateType": "string",
  "subject": [
    {
      "digest": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string"
    }
  ]
}
```

The actual payload that contains the SBOM Reference data. The payload follows the intoto statement specification. See https://github.com/in-toto/attestation/blob/main/spec/v1.0/statement.md for more details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_type|string|false|none|Identifier for the schema of the Statement.|
|predicate|[SbomReferenceIntotoPredicate](#schemasbomreferenceintotopredicate)|false|none|Additional parameters of the Predicate. Includes the actual data about the SBOM.|
|predicateType|string|false|none|URI identifying the type of the Predicate.|
|subject|[[Subject](#schemasubject)]|false|none|Set of software artifacts that the attestation applies to. Each element represents a single software artifact.|

<h2 id="tocS_SbomReferenceIntotoPredicate">SbomReferenceIntotoPredicate</h2>
<!-- backwards compatibility -->
<a id="schemasbomreferenceintotopredicate"></a>
<a id="schema_SbomReferenceIntotoPredicate"></a>
<a id="tocSsbomreferenceintotopredicate"></a>
<a id="tocssbomreferenceintotopredicate"></a>

```json
{
  "digest": {
    "property1": "string",
    "property2": "string"
  },
  "location": "string",
  "mimeType": "string",
  "referrerId": "string"
}
```

A predicate which describes the SBOM being referenced.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|digest|object|false|none|A map of algorithm to digest of the contents of the SBOM.|
|location|string|false|none|The location of the SBOM.|
|mimeType|string|false|none|The mime type of the SBOM.|
|referrerId|string|false|none|The person or system referring this predicate to the consumer.|

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

Request message for `SetIamPolicy` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|[Policy](#schemapolicy)|false|none|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|

<h2 id="tocS_Signature">Signature</h2>
<!-- backwards compatibility -->
<a id="schemasignature"></a>
<a id="schema_Signature"></a>
<a id="tocSsignature"></a>
<a id="tocssignature"></a>

```json
{
  "publicKeyId": "string",
  "signature": "string"
}
```

Verifiers (e.g. Kritis implementations) MUST verify signatures with respect to the trust anchors defined in policy (e.g. a Kritis policy). Typically this means that the verifier has been configured with a map from `public_key_id` to public key material (and any required parameters, e.g. signing algorithm). In particular, verification implementations MUST NOT treat the signature `public_key_id` as anything more than a key lookup hint. The `public_key_id` DOES NOT validate or authenticate a public key; it only provides a mechanism for quickly selecting a public key ALREADY CONFIGURED on the verifier through a trusted channel. Verification implementations MUST reject signatures in any of the following circumstances: * The `public_key_id` is not recognized by the verifier. * The public key that `public_key_id` refers to does not verify the signature with respect to the payload. The `signature` contents SHOULD NOT be "attached" (where the payload is included with the serialized `signature` bytes). Verifiers MUST ignore any "attached" payload and only verify signatures with respect to explicitly provided payload (e.g. a `payload` field on the proto message that holds this Signature, or the canonical serialization of the proto message that holds this signature).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|publicKeyId|string|false|none|The identifier for the public key that verifies this signature. * The `public_key_id` is required. * The `public_key_id` SHOULD be an RFC3986 conformant URI. * When possible, the `public_key_id` SHOULD be an immutable reference, such as a cryptographic digest. Examples of valid `public_key_id`s: OpenPGP V4 public key fingerprint: * "openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA" See https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr for more details on this scheme. RFC6920 digest-named SubjectPublicKeyInfo (digest of the DER serialization): * "ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi_vdjJGecm_iXkbqVoScViaU" * "nih:///sha-256;703f68f42aba2c6de30f488a5ea122fef76324679c9bf89791ba95a1271589a5"|
|signature|string(byte)|false|none|The content of the signature, an opaque bytestring. The payload that this signature verifies MUST be unambiguously provided with the Signature during verification. A wrapper message might provide the payload explicitly. Alternatively, a message might have a canonical serialization that can always be unambiguously computed to derive the payload.|

<h2 id="tocS_SigningKey">SigningKey</h2>
<!-- backwards compatibility -->
<a id="schemasigningkey"></a>
<a id="schema_SigningKey"></a>
<a id="tocSsigningkey"></a>
<a id="tocssigningkey"></a>

```json
{
  "keyId": "string",
  "keyScheme": "string",
  "keyType": "string",
  "publicKeyValue": "string"
}
```

This defines the format used to record keys used in the software supply chain. An in-toto link is attested using one or more keys defined in the in-toto layout. An example of this is: { "key_id": "776a00e29f3559e0141b3b096f696abc6cfb0c657ab40f441132b345b0...", "key_type": "rsa", "public_key_value": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0B...", "key_scheme": "rsassa-pss-sha256" } The format for in-toto's key definition can be found in section 4.2 of the in-toto specification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyId|string|false|none|key_id is an identifier for the signing key.|
|keyScheme|string|false|none|This field contains the corresponding signature scheme. Eg: "rsassa-pss-sha256".|
|keyType|string|false|none|This field identifies the specific signing method. Eg: "rsa", "ed25519", and "ecdsa".|
|publicKeyValue|string|false|none|This field contains the actual public key.|

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
{
  "additionalContexts": [
    {
      "cloudRepo": {
        "aliasContext": {
          "kind": "KIND_UNSPECIFIED",
          "name": "string"
        },
        "repoId": {
          "projectRepoId": {
            "projectId": "string",
            "repoName": "string"
          },
          "uid": "string"
        },
        "revisionId": "string"
      },
      "gerrit": {
        "aliasContext": {
          "kind": "KIND_UNSPECIFIED",
          "name": "string"
        },
        "gerritProject": "string",
        "hostUri": "string",
        "revisionId": "string"
      },
      "git": {
        "revisionId": "string",
        "url": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      }
    }
  ],
  "artifactStorageSourceUri": "string",
  "context": {
    "cloudRepo": {
      "aliasContext": {
        "kind": "KIND_UNSPECIFIED",
        "name": "string"
      },
      "repoId": {
        "projectRepoId": {
          "projectId": "string",
          "repoName": "string"
        },
        "uid": "string"
      },
      "revisionId": "string"
    },
    "gerrit": {
      "aliasContext": {
        "kind": "KIND_UNSPECIFIED",
        "name": "string"
      },
      "gerritProject": "string",
      "hostUri": "string",
      "revisionId": "string"
    },
    "git": {
      "revisionId": "string",
      "url": "string"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  },
  "fileHashes": {
    "property1": {
      "fileHash": [
        {
          "type": "HASH_TYPE_UNSPECIFIED",
          "value": "string"
        }
      ]
    },
    "property2": {
      "fileHash": [
        {
          "type": "HASH_TYPE_UNSPECIFIED",
          "value": "string"
        }
      ]
    }
  }
}
```

Source describes the location of the source used for the build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalContexts|[[SourceContext](#schemasourcecontext)]|false|none|If provided, some of the source code used for the build may be found in these locations, in the case where the source repository had multiple remotes or submodules. This list will not include the context specified in the context field.|
|artifactStorageSourceUri|string|false|none|If provided, the input binary artifacts for the build came from this location.|
|context|[SourceContext](#schemasourcecontext)|false|none|If provided, the source code used for the build came from this location.|
|fileHashes|object|false|none|Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (.tar.gz), the FileHash will be for the single path to that file.|

<h2 id="tocS_SourceContext">SourceContext</h2>
<!-- backwards compatibility -->
<a id="schemasourcecontext"></a>
<a id="schema_SourceContext"></a>
<a id="tocSsourcecontext"></a>
<a id="tocssourcecontext"></a>

```json
{
  "cloudRepo": {
    "aliasContext": {
      "kind": "KIND_UNSPECIFIED",
      "name": "string"
    },
    "repoId": {
      "projectRepoId": {
        "projectId": "string",
        "repoName": "string"
      },
      "uid": "string"
    },
    "revisionId": "string"
  },
  "gerrit": {
    "aliasContext": {
      "kind": "KIND_UNSPECIFIED",
      "name": "string"
    },
    "gerritProject": "string",
    "hostUri": "string",
    "revisionId": "string"
  },
  "git": {
    "revisionId": "string",
    "url": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  }
}
```

A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudRepo|[CloudRepoSourceContext](#schemacloudreposourcecontext)|false|none|A SourceContext referring to a revision in a Google Cloud Source Repo.|
|gerrit|[GerritSourceContext](#schemagerritsourcecontext)|false|none|A SourceContext referring to a Gerrit project.|
|git|[GitSourceContext](#schemagitsourcecontext)|false|none|A SourceContext referring to any third party Git repo (e.g., GitHub).|
|labels|object|false|none|Labels with user defined metadata.|

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

<h2 id="tocS_Subject">Subject</h2>
<!-- backwards compatibility -->
<a id="schemasubject"></a>
<a id="schema_Subject"></a>
<a id="tocSsubject"></a>
<a id="tocssubject"></a>

```json
{
  "digest": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string"
}
```

Set of software artifacts that the attestation applies to. Each element represents a single software artifact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|digest|object|false|none|`"": ""` Algorithms can be e.g. sha256, sha512 See https://github.com/in-toto/attestation/blob/main/spec/field_types.md#DigestSet|
|name|string|false|none|Identifier to distinguish this artifact from others within the subject.|

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

Request message for `TestIamPermissions` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[string]|false|none|The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).|

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

Response message for `TestIamPermissions` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[string]|false|none|A subset of `TestPermissionsRequest.permissions` that the caller is allowed.|

<h2 id="tocS_TimeSpan">TimeSpan</h2>
<!-- backwards compatibility -->
<a id="schematimespan"></a>
<a id="schema_TimeSpan"></a>
<a id="tocStimespan"></a>
<a id="tocstimespan"></a>

```json
{
  "endTime": "string",
  "startTime": "string"
}
```

Start and end times for a build execution phase. Next ID: 3

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|End of time span.|
|startTime|string(google-datetime)|false|none|Start of time span.|

<h2 id="tocS_Version">Version</h2>
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_Version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

```json
{
  "epoch": 0,
  "inclusive": true,
  "kind": "VERSION_KIND_UNSPECIFIED",
  "name": "string",
  "revision": "string"
}
```

Version contains structured information about the version of a package.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|epoch|integer(int32)|false|none|Used to correct mistakes in the version numbering scheme.|
|inclusive|boolean|false|none|Whether this version is specifying part of an inclusive range. Grafeas does not have the capability to specify version ranges; instead we have fields that specify start version and end versions. At times this is insufficient - we also need to specify whether the version is included in the range or is excluded from the range. This boolean is expected to be set to true when the version is included in a range.|
|kind|string|false|none|Required. Distinguishes between sentinel MIN/MAX versions and normal versions.|
|name|string|false|none|Required only when version kind is NORMAL. The main part of the version name.|
|revision|string|false|none|The iteration of the package build from the above version.|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|VERSION_KIND_UNSPECIFIED|
|kind|NORMAL|
|kind|MINIMUM|
|kind|MAXIMUM|

<h2 id="tocS_VexAssessment">VexAssessment</h2>
<!-- backwards compatibility -->
<a id="schemavexassessment"></a>
<a id="schema_VexAssessment"></a>
<a id="tocSvexassessment"></a>
<a id="tocsvexassessment"></a>

```json
{
  "cve": "string",
  "impacts": [
    "string"
  ],
  "justification": {
    "details": "string",
    "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
  },
  "noteName": "string",
  "relatedUris": [
    {
      "label": "string",
      "url": "string"
    }
  ],
  "remediations": [
    {
      "details": "string",
      "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
      "remediationUri": {
        "label": "string",
        "url": "string"
      }
    }
  ],
  "state": "STATE_UNSPECIFIED"
}
```

VexAssessment provides all publisher provided Vex information that is related to this vulnerability.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cve|string|false|none|Holds the MITRE standard Common Vulnerabilities and Exposures (CVE) tracking number for the vulnerability.|
|impacts|[string]|false|none|Contains information about the impact of this vulnerability, this will change with time.|
|justification|[Justification](#schemajustification)|false|none|Justification provides the justification when the state of the assessment if NOT_AFFECTED.|
|noteName|string|false|none|The VulnerabilityAssessment note from which this VexAssessment was generated. This will be of the form: `projects/[PROJECT_ID]/notes/[NOTE_ID]`.|
|relatedUris|[[RelatedUrl](#schemarelatedurl)]|false|none|Holds a list of references associated with this vulnerability item and assessment.|
|remediations|[[Remediation](#schemaremediation)]|false|none|Specifies details on how to handle (and presumably, fix) a vulnerability.|
|state|string|false|none|Provides the state of this Vulnerability assessment.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|AFFECTED|
|state|NOT_AFFECTED|
|state|FIXED|
|state|UNDER_INVESTIGATION|

<h2 id="tocS_Volume">Volume</h2>
<!-- backwards compatibility -->
<a id="schemavolume"></a>
<a id="schema_Volume"></a>
<a id="tocSvolume"></a>
<a id="tocsvolume"></a>

```json
{
  "name": "string",
  "path": "string"
}
```

Volume describes a Docker container volume which is mounted into build steps in order to persist files across build step execution. Next ID: 3

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the volume to mount. Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps.|
|path|string|false|none|Path at which to mount the volume. Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths.|

<h2 id="tocS_Vulnerability">Vulnerability</h2>
<!-- backwards compatibility -->
<a id="schemavulnerability"></a>
<a id="schema_Vulnerability"></a>
<a id="tocSvulnerability"></a>
<a id="tocsvulnerability"></a>

```json
{
  "cvssScore": 0,
  "cvssV2": {
    "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
    "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
    "authentication": "AUTHENTICATION_UNSPECIFIED",
    "availabilityImpact": "IMPACT_UNSPECIFIED",
    "baseScore": 0,
    "confidentialityImpact": "IMPACT_UNSPECIFIED",
    "exploitabilityScore": 0,
    "impactScore": 0,
    "integrityImpact": "IMPACT_UNSPECIFIED",
    "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
    "scope": "SCOPE_UNSPECIFIED",
    "userInteraction": "USER_INTERACTION_UNSPECIFIED"
  },
  "cvssV3": {
    "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
    "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
    "availabilityImpact": "IMPACT_UNSPECIFIED",
    "baseScore": 0,
    "confidentialityImpact": "IMPACT_UNSPECIFIED",
    "exploitabilityScore": 0,
    "impactScore": 0,
    "integrityImpact": "IMPACT_UNSPECIFIED",
    "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
    "scope": "SCOPE_UNSPECIFIED",
    "userInteraction": "USER_INTERACTION_UNSPECIFIED"
  },
  "cvssVersion": "CVSS_VERSION_UNSPECIFIED",
  "cwe": [
    "string"
  ],
  "details": [
    {
      "cpeUri": "string",
      "description": "string",
      "fixedLocation": {
        "cpeUri": "string",
        "package": "string",
        "version": {
          "epoch": 0,
          "inclusive": true,
          "kind": "VERSION_KIND_UNSPECIFIED",
          "name": "string",
          "revision": "string"
        }
      },
      "isObsolete": true,
      "maxAffectedVersion": {
        "epoch": 0,
        "inclusive": true,
        "kind": "VERSION_KIND_UNSPECIFIED",
        "name": "string",
        "revision": "string"
      },
      "minAffectedVersion": {
        "epoch": 0,
        "inclusive": true,
        "kind": "VERSION_KIND_UNSPECIFIED",
        "name": "string",
        "revision": "string"
      },
      "package": "string",
      "packageType": "string",
      "severityName": "string",
      "source": "string",
      "sourceUpdateTime": "string",
      "vendor": "string"
    }
  ],
  "severity": "SEVERITY_UNSPECIFIED",
  "sourceUpdateTime": "string",
  "windowsDetails": [
    {
      "cpeUri": "string",
      "description": "string",
      "fixingKbs": [
        {
          "name": "string",
          "url": "string"
        }
      ],
      "name": "string"
    }
  ]
}
```

Vulnerability provides metadata about a security vulnerability in a Note.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cvssScore|number(float)|false|none|The CVSS score for this vulnerability.|
|cvssV2|[CVSS](#schemacvss)|false|none|The full description of the CVSS for version 2.|
|cvssV3|[CVSSv3](#schemacvssv3)|false|none|The full description of the CVSS for version 3.|
|cvssVersion|string|false|none|CVSS version used to populate cvss_score and severity.|
|cwe|[string]|false|none|A list of CWE for this vulnerability. For details, see: https://cwe.mitre.org/index.html|
|details|[[Detail](#schemadetail)]|false|none|All information about the package to specifically identify this vulnerability. One entry per (version range and cpe_uri) the package vulnerability has manifested in.|
|severity|string|false|none|Note provider assigned impact of the vulnerability.|
|sourceUpdateTime|string(google-datetime)|false|none|The time this information was last changed at the source. This is an upstream timestamp from the underlying information source - e.g. Ubuntu security tracker.|
|windowsDetails|[[WindowsDetail](#schemawindowsdetail)]|false|none|Windows details get their own format because the information format and model don't match a normal detail. Specifically Windows updates are done as patches, thus Windows vulnerabilities really are a missing package, rather than a package being at an incorrect version.|

#### Enumerated Values

|Property|Value|
|---|---|
|cvssVersion|CVSS_VERSION_UNSPECIFIED|
|cvssVersion|CVSS_VERSION_2|
|cvssVersion|CVSS_VERSION_3|
|severity|SEVERITY_UNSPECIFIED|
|severity|MINIMAL|
|severity|LOW|
|severity|MEDIUM|
|severity|HIGH|
|severity|CRITICAL|

<h2 id="tocS_VulnerabilityAssessmentNote">VulnerabilityAssessmentNote</h2>
<!-- backwards compatibility -->
<a id="schemavulnerabilityassessmentnote"></a>
<a id="schema_VulnerabilityAssessmentNote"></a>
<a id="tocSvulnerabilityassessmentnote"></a>
<a id="tocsvulnerabilityassessmentnote"></a>

```json
{
  "assessment": {
    "cve": "string",
    "impacts": [
      "string"
    ],
    "justification": {
      "details": "string",
      "justificationType": "JUSTIFICATION_TYPE_UNSPECIFIED"
    },
    "longDescription": "string",
    "relatedUris": [
      {
        "label": "string",
        "url": "string"
      }
    ],
    "remediations": [
      {
        "details": "string",
        "remediationType": "REMEDIATION_TYPE_UNSPECIFIED",
        "remediationUri": {
          "label": "string",
          "url": "string"
        }
      }
    ],
    "shortDescription": "string",
    "state": "STATE_UNSPECIFIED"
  },
  "languageCode": "string",
  "longDescription": "string",
  "product": {
    "genericUri": "string",
    "id": "string",
    "name": "string"
  },
  "publisher": {
    "issuingAuthority": "string",
    "name": "string",
    "publisherNamespace": "string"
  },
  "shortDescription": "string",
  "title": "string"
}
```

A single VulnerabilityAssessmentNote represents one particular product's vulnerability assessment for one CVE.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assessment|[Assessment](#schemaassessment)|false|none|Represents a vulnerability assessment for the product.|
|languageCode|string|false|none|Identifies the language used by this document, corresponding to IETF BCP 47 / RFC 5646.|
|longDescription|string|false|none|A detailed description of this Vex.|
|product|[Product](#schemaproduct)|false|none|The product affected by this vex.|
|publisher|[Publisher](#schemapublisher)|false|none|Publisher details of this Note.|
|shortDescription|string|false|none|A one sentence description of this Vex.|
|title|string|false|none|The title of the note. E.g. `Vex-Debian-11.4`|

<h2 id="tocS_VulnerabilityLocation">VulnerabilityLocation</h2>
<!-- backwards compatibility -->
<a id="schemavulnerabilitylocation"></a>
<a id="schema_VulnerabilityLocation"></a>
<a id="tocSvulnerabilitylocation"></a>
<a id="tocsvulnerabilitylocation"></a>

```json
{
  "cpeUri": "string",
  "package": "string",
  "version": {
    "epoch": 0,
    "inclusive": true,
    "kind": "VERSION_KIND_UNSPECIFIED",
    "name": "string",
    "revision": "string"
  }
}
```

The location of the vulnerability.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpeUri|string|false|none|Required. The CPE URI in [cpe format](https://cpe.mitre.org/specification/) format. Examples include distro or storage location for vulnerable jar.|
|package|string|false|none|Required. The package being described.|
|version|[Version](#schemaversion)|false|none|Required. The version of the package being described.|

<h2 id="tocS_VulnerabilityOccurrencesSummary">VulnerabilityOccurrencesSummary</h2>
<!-- backwards compatibility -->
<a id="schemavulnerabilityoccurrencessummary"></a>
<a id="schema_VulnerabilityOccurrencesSummary"></a>
<a id="tocSvulnerabilityoccurrencessummary"></a>
<a id="tocsvulnerabilityoccurrencessummary"></a>

```json
{
  "counts": [
    {
      "fixableCount": "string",
      "resource": {
        "contentHash": {
          "type": "HASH_TYPE_UNSPECIFIED",
          "value": "string"
        },
        "name": "string",
        "uri": "string"
      },
      "severity": "SEVERITY_UNSPECIFIED",
      "totalCount": "string"
    }
  ]
}
```

A summary of how many vulnerability occurrences there are per resource and severity type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|counts|[[FixableTotalByDigest](#schemafixabletotalbydigest)]|false|none|A listing by resource of the number of fixable and total vulnerabilities.|

<h2 id="tocS_WindowsDetail">WindowsDetail</h2>
<!-- backwards compatibility -->
<a id="schemawindowsdetail"></a>
<a id="schema_WindowsDetail"></a>
<a id="tocSwindowsdetail"></a>
<a id="tocswindowsdetail"></a>

```json
{
  "cpeUri": "string",
  "description": "string",
  "fixingKbs": [
    {
      "name": "string",
      "url": "string"
    }
  ],
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpeUri|string|false|none|Required. The CPE URI in [cpe format](https://cpe.mitre.org/specification/) in which the vulnerability manifests. Examples include distro or storage location for vulnerable jar.|
|description|string|false|none|The description of the vulnerability.|
|fixingKbs|[[KnowledgeBase](#schemaknowledgebase)]|false|none|Required. The names of the KBs which have hotfixes to mitigate this vulnerability. Note that there may be multiple hotfixes (and thus multiple KBs) that mitigate a given vulnerability. Currently any listed kb's presence is considered a fix.|
|name|string|false|none|Required. The name of the vulnerability.|
