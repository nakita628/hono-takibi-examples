<h1 id="access-analyzer">Access Analyzer v2019-11-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Identity and Access Management Access Analyzer helps identify potential resource-access risks by enabling you to identify any policies that grant access to an external principal. It does this by using logic-based reasoning to analyze resource-based policies in your Amazon Web Services environment. An external principal can be another Amazon Web Services account, a root user, an IAM user or role, a federated user, an Amazon Web Services service, or an anonymous user. You can also use IAM Access Analyzer to preview and validate public and cross-account access to your resources before deploying permissions changes. This guide describes the Identity and Access Management Access Analyzer operations that you can call programmatically. For general information about IAM Access Analyzer, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html">Identity and Access Management Access Analyzer</a> in the <b>IAM User Guide</b>.</p> <p>To start using IAM Access Analyzer, you first need to create an analyzer.</p>

Base URLs:

* <a href="http://access-analyzer.us-east-1.amazonaws.com">http://access-analyzer.us-east-1.amazonaws.com</a> - The Access Analyzer multi-region endpoint

* <a href="https://access-analyzer.us-east-1.amazonaws.com">https://access-analyzer.us-east-1.amazonaws.com</a> - The Access Analyzer multi-region endpoint

* <a href="http://access-analyzer.cn-north-1.amazonaws.com.cn">http://access-analyzer.cn-north-1.amazonaws.com.cn</a> - The Access Analyzer endpoint for China (Beijing) and China (Ningxia)

* <a href="https://access-analyzer.cn-north-1.amazonaws.com.cn">https://access-analyzer.cn-north-1.amazonaws.com.cn</a> - The Access Analyzer endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/access-analyzer/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="access-analyzer-default">Default</h1>

## ApplyArchiveRule

<a id="opIdApplyArchiveRule"></a>

> Code samples

```bash
curl https://accessanalyzer.us-east-1.amazonaws.com/archive-rule \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "analyzerArn": "string",
    "ruleName": "string",
    "clientToken": "string"
  }'
```

`PUT /archive-rule`

Retroactively applies the archive rule to existing findings that meet the archive rule criteria.

> Body parameter

```json
{
  "analyzerArn": "string",
  "ruleName": "string",
  "clientToken": "string"
}
```

<h3 id="applyarchiverule-parameters">Parameters</h3>

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
|» analyzerArn|body|string|true|The Amazon resource name (ARN) of the analyzer.|
|» ruleName|body|string|true|The name of the rule to apply.|
|» clientToken|body|string|false|A client token.|

> Example responses

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

<h3 id="applyarchiverule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetGeneratedPolicy

<a id="opIdGetGeneratedPolicy"></a>

> Code samples

```bash
curl https://accessanalyzer.us-east-1.amazonaws.com/policy/generation/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /policy/generation/{jobId}`

Retrieves the policy that was generated using <code>StartPolicyGeneration</code>. 

<h3 id="getgeneratedpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|The <code>JobId</code> that is returned by the <code>StartPolicyGeneration</code> operation. The <code>JobId</code> can be used with <code>GetGeneratedPolicy</code> to retrieve the generated policies or used with <code>CancelPolicyGeneration</code> to cancel the policy generation request.|
|includeResourcePlaceholders|query|boolean|false|<p>The level of detail that you want to generate. You can specify whether to generate policies with placeholders for resource ARNs for actions that support resource level granularity in policies.</p> <p>For example, in the resource section of a policy, you can receive a placeholder such as <code>"Resource":"arn:aws:s3:::${BucketName}"</code> instead of <code>"*"</code>.</p>|
|includeServiceLevelTemplate|query|boolean|false|<p>The level of detail that you want to generate. You can specify whether to generate service-level policies. </p> <p>IAM Access Analyzer uses <code>iam:servicelastaccessed</code> to identify services that have been used recently to create this service-level template.</p>|
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
  "jobDetails": {
    "jobId": {},
    "status": {},
    "startedOn": {},
    "completedOn": {},
    "jobError": {
      "code": {},
      "message": {}
    }
  },
  "generatedPolicyResult": {
    "properties": null,
    "generatedPolicies": {}
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

<h3 id="getgeneratedpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetGeneratedPolicyResponse](#schemagetgeneratedpolicyresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelPolicyGeneration

<a id="opIdCancelPolicyGeneration"></a>

> Code samples

```bash
curl https://accessanalyzer.us-east-1.amazonaws.com/policy/generation/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`PUT /policy/generation/{jobId}`

Cancels the requested policy generation.

<h3 id="cancelpolicygeneration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|The <code>JobId</code> that is returned by the <code>StartPolicyGeneration</code> operation. The <code>JobId</code> can be used with <code>GetGeneratedPolicy</code> to retrieve the generated policies or used with <code>CancelPolicyGeneration</code> to cancel the policy generation request.|
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

<h3 id="cancelpolicygeneration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelPolicyGenerationResponse](#schemacancelpolicygenerationresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAccessPreview

<a id="opIdCreateAccessPreview"></a>

> Code samples

```bash
curl https://accessanalyzer.us-east-1.amazonaws.com/access-preview \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "analyzerArn": "string",
    "configurations": {
      "property1": {
        "ebsSnapshot": {
          "userIds": {},
          "groups": {},
          "kmsKeyId": {}
        },
        "ecrRepository": {
          "repositoryPolicy": {}
        },
        "iamRole": {
          "trustPolicy": {}
        },
        "efsFileSystem": {
          "fileSystemPolicy": {}
        },
        "kmsKey": {
          "keyPolicies": {
            "property1": "string",
            "property2": "string"
          },
          "grants": {}
        },
        "rdsDbClusterSnapshot": {
          "attributes": {
            "property1": {
              "accountIds": {}
            },
            "property2": {
              "accountIds": {}
            }
          },
          "kmsKeyId": {}
        },
        "rdsDbSnapshot": {
          "attributes": {
            "property1": {
              "accountIds": {}
            },
            "property2": {
              "accountIds": {}
            }
          },
          "kmsKeyId": {}
        },
        "secretsManagerSecret": {
          "kmsKeyId": {},
          "secretPolicy": {}
        },
        "s3Bucket": {
          "bucketPolicy": {},
          "bucketAclGrants": {},
          "bucketPublicAccessBlock": {
            "ignorePublicAcls": {},
            "restrictPublicBuckets": {}
          },
          "accessPoints": {
            "property1": {
              "accessPointPolicy": {},
              "publicAccessBlock": {
                "ignorePublicAcls": {},
                "restrictPublicBuckets": {}
              },
              "networkOrigin": {
                "vpcConfiguration": {
                  "vpcId": {}
                },
                "internetConfiguration": {}
              }
            },
            "property2": {
              "accessPointPolicy": {},
              "publicAccessBlock": {
                "ignorePublicAcls": {},
                "restrictPublicBuckets": {}
              },
              "networkOrigin": {
                "vpcConfiguration": {
                  "vpcId": {}
                },
                "internetConfiguration": {}
              }
            }
          }
        },
        "snsTopic": {
          "topicPolicy": {}
        },
        "sqsQueue": {
          "queuePolicy": {}
        }
      },
      "property2": {
        "ebsSnapshot": {
          "userIds": {},
          "groups": {},
          "kmsKeyId": {}
        },
        "ecrRepository": {
          "repositoryPolicy": {}
        },
        "iamRole": {
          "trustPolicy": {}
        },
        "efsFileSystem": {
          "fileSystemPolicy": {}
        },
        "kmsKey": {
          "keyPolicies": {
            "property1": "string",
            "property2": "string"
          },
          "grants": {}
        },
        "rdsDbClusterSnapshot": {
          "attributes": {
            "property1": {
              "accountIds": {}
            },
            "property2": {
              "accountIds": {}
            }
          },
          "kmsKeyId": {}
        },
        "rdsDbSnapshot": {
          "attributes": {
            "property1": {
              "accountIds": {}
            },
            "property2": {
              "accountIds": {}
            }
          },
          "kmsKeyId": {}
        },
        "secretsManagerSecret": {
          "kmsKeyId": {},
          "secretPolicy": {}
        },
        "s3Bucket": {
          "bucketPolicy": {},
          "bucketAclGrants": {},
          "bucketPublicAccessBlock": {
            "ignorePublicAcls": {},
            "restrictPublicBuckets": {}
          },
          "accessPoints": {
            "property1": {
              "accessPointPolicy": {},
              "publicAccessBlock": {
                "ignorePublicAcls": {},
                "restrictPublicBuckets": {}
              },
              "networkOrigin": {
                "vpcConfiguration": {
                  "vpcId": {}
                },
                "internetConfiguration": {}
              }
            },
            "property2": {
              "accessPointPolicy": {},
              "publicAccessBlock": {
                "ignorePublicAcls": {},
                "restrictPublicBuckets": {}
              },
              "networkOrigin": {
                "vpcConfiguration": {
                  "vpcId": {}
                },
                "internetConfiguration": {}
              }
            }
          }
        },
        "snsTopic": {
          "topicPolicy": {}
        },
        "sqsQueue": {
          "queuePolicy": {}
        }
      }
    },
    "clientToken": "string"
  }'
```

`PUT /access-preview`

Creates an access preview that allows you to preview IAM Access Analyzer findings for your resource before deploying resource permissions.

> Body parameter

```json
{
  "analyzerArn": "string",
  "configurations": {
    "property1": {
      "ebsSnapshot": {
        "userIds": {},
        "groups": {},
        "kmsKeyId": {}
      },
      "ecrRepository": {
        "repositoryPolicy": {}
      },
      "iamRole": {
        "trustPolicy": {}
      },
      "efsFileSystem": {
        "fileSystemPolicy": {}
      },
      "kmsKey": {
        "keyPolicies": {
          "property1": "string",
          "property2": "string"
        },
        "grants": {}
      },
      "rdsDbClusterSnapshot": {
        "attributes": {
          "property1": {
            "accountIds": {}
          },
          "property2": {
            "accountIds": {}
          }
        },
        "kmsKeyId": {}
      },
      "rdsDbSnapshot": {
        "attributes": {
          "property1": {
            "accountIds": {}
          },
          "property2": {
            "accountIds": {}
          }
        },
        "kmsKeyId": {}
      },
      "secretsManagerSecret": {
        "kmsKeyId": {},
        "secretPolicy": {}
      },
      "s3Bucket": {
        "bucketPolicy": {},
        "bucketAclGrants": {},
        "bucketPublicAccessBlock": {
          "ignorePublicAcls": {},
          "restrictPublicBuckets": {}
        },
        "accessPoints": {
          "property1": {
            "accessPointPolicy": {},
            "publicAccessBlock": {
              "ignorePublicAcls": {},
              "restrictPublicBuckets": {}
            },
            "networkOrigin": {
              "vpcConfiguration": {
                "vpcId": {}
              },
              "internetConfiguration": {}
            }
          },
          "property2": {
            "accessPointPolicy": {},
            "publicAccessBlock": {
              "ignorePublicAcls": {},
              "restrictPublicBuckets": {}
            },
            "networkOrigin": {
              "vpcConfiguration": {
                "vpcId": {}
              },
              "internetConfiguration": {}
            }
          }
        }
      },
      "snsTopic": {
        "topicPolicy": {}
      },
      "sqsQueue": {
        "queuePolicy": {}
      }
    },
    "property2": {
      "ebsSnapshot": {
        "userIds": {},
        "groups": {},
        "kmsKeyId": {}
      },
      "ecrRepository": {
        "repositoryPolicy": {}
      },
      "iamRole": {
        "trustPolicy": {}
      },
      "efsFileSystem": {
        "fileSystemPolicy": {}
      },
      "kmsKey": {
        "keyPolicies": {
          "property1": "string",
          "property2": "string"
        },
        "grants": {}
      },
      "rdsDbClusterSnapshot": {
        "attributes": {
          "property1": {
            "accountIds": {}
          },
          "property2": {
            "accountIds": {}
          }
        },
        "kmsKeyId": {}
      },
      "rdsDbSnapshot": {
        "attributes": {
          "property1": {
            "accountIds": {}
          },
          "property2": {
            "accountIds": {}
          }
        },
        "kmsKeyId": {}
      },
      "secretsManagerSecret": {
        "kmsKeyId": {},
        "secretPolicy": {}
      },
      "s3Bucket": {
        "bucketPolicy": {},
        "bucketAclGrants": {},
        "bucketPublicAccessBlock": {
          "ignorePublicAcls": {},
          "restrictPublicBuckets": {}
        },
        "accessPoints": {
          "property1": {
            "accessPointPolicy": {},
            "publicAccessBlock": {
              "ignorePublicAcls": {},
              "restrictPublicBuckets": {}
            },
            "networkOrigin": {
              "vpcConfiguration": {
                "vpcId": {}
              },
              "internetConfiguration": {}
            }
          },
          "property2": {
            "accessPointPolicy": {},
            "publicAccessBlock": {
              "ignorePublicAcls": {},
              "restrictPublicBuckets": {}
            },
            "networkOrigin": {
              "vpcConfiguration": {
                "vpcId": {}
              },
              "internetConfiguration": {}
            }
          }
        }
      },
      "snsTopic": {
        "topicPolicy": {}
      },
      "sqsQueue": {
        "queuePolicy": {}
      }
    }
  },
  "clientToken": "string"
}
```

<h3 id="createaccesspreview-parameters">Parameters</h3>

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
|» analyzerArn|body|string|true|The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the account analyzer</a> used to generate the access preview. You can only create an access preview for analyzers with an <code>Account</code> type and <code>Active</code> status.|
|» configurations|body|object|true|Access control configuration for your resource that is used to generate the access preview. The access preview includes findings for external access allowed to the resource with the proposed access control configuration. The configuration must contain exactly one element.|
|» » **additionalProperties**|body|[Configuration](#schemaconfiguration)|false|Access control configuration structures for your resource. You specify the configuration as a type-value pair. You can specify only one type of access control configuration.|
|» clientToken|body|string|false|A client token.|

> Example responses

> 200 Response

```json
{
  "id": {}
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

<h3 id="createaccesspreview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAccessPreviewResponse](#schemacreateaccesspreviewresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAnalyzers

<a id="opIdListAnalyzers"></a>

> Code samples

```bash
curl https://accessanalyzer.us-east-1.amazonaws.com/analyzer \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /analyzer`

Retrieves a list of analyzers.

<h3 id="listanalyzers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|A token used for pagination of results returned.|
|maxResults|query|integer|false|The maximum number of results to return in the response.|
|type|query|string|false|The type of analyzer.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|ACCOUNT|
|type|ORGANIZATION|

> Example responses

> 200 Response

```json
{
  "analyzers": {},
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

<h3 id="listanalyzers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAnalyzersResponse](#schemalistanalyzersresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAnalyzer

<a id="opIdCreateAnalyzer"></a>

> Code samples

```bash
curl https://accessanalyzer.us-east-1.amazonaws.com/analyzer \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "analyzerName": "string",
    "type": "ACCOUNT",
    "archiveRules": [
      {
        "ruleName": {},
        "filter": {
          "property1": {
            "eq": {},
            "neq": {},
            "contains": {},
            "exists": {}
          },
          "property2": {
            "eq": {},
            "neq": {},
            "contains": {},
            "exists": {}
          }
        }
      }
    ],
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "clientToken": "string"
  }'
```

`PUT /analyzer`

Creates an analyzer for your account.

> Body parameter

```json
{
  "analyzerName": "string",
  "type": "ACCOUNT",
  "archiveRules": [
    {
      "ruleName": {},
      "filter": {
        "property1": {
          "eq": {},
          "neq": {},
          "contains": {},
          "exists": {}
        },
        "property2": {
          "eq": {},
          "neq": {},
          "contains": {},
          "exists": {}
        }
      }
    }
  ],
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "clientToken": "string"
}
```

<h3 id="createanalyzer-parameters">Parameters</h3>

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
|» analyzerName|body|string|true|The name of the analyzer to create.|
|» type|body|string|true|The type of analyzer to create. Only ACCOUNT and ORGANIZATION analyzers are supported. You can create only one analyzer per account per Region. You can create up to 5 analyzers per organization per Region.|
|» archiveRules|body|[[InlineArchiveRule](#schemainlinearchiverule)]|false|Specifies the archive rules to add for the analyzer. Archive rules automatically archive findings that meet the criteria you define for the rule.|
|» tags|body|object|false|The tags to apply to the analyzer.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» clientToken|body|string|false|A client token.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|ACCOUNT|
|» type|ORGANIZATION|

> Example responses

> 200 Response

```json
{
  "arn": {}
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

<h3 id="createanalyzer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAnalyzerResponse](#schemacreateanalyzerresponse)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListArchiveRules

<a id="opIdListArchiveRules"></a>

> Code samples

```bash
curl https://accessanalyzer.us-east-1.amazonaws.com/analyzer/string/archive-rule \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /analyzer/{analyzerName}/archive-rule`

Retrieves a list of archive rules created for the specified analyzer.

<h3 id="listarchiverules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|analyzerName|path|string|true|The name of the analyzer to retrieve rules from.|
|nextToken|query|string|false|A token used for pagination of results returned.|
|maxResults|query|integer|false|The maximum number of results to return in the request.|
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
  "archiveRules": {},
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

<h3 id="listarchiverules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListArchiveRulesResponse](#schemalistarchiverulesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateArchiveRule

<a id="opIdCreateArchiveRule"></a>

> Code samples

```bash
curl https://accessanalyzer.us-east-1.amazonaws.com/analyzer/string/archive-rule \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ruleName": "string",
    "filter": {
      "property1": {
        "eq": {},
        "neq": {},
        "contains": {},
        "exists": {}
      },
      "property2": {
        "eq": {},
        "neq": {},
        "contains": {},
        "exists": {}
      }
    },
    "clientToken": "string"
  }'
```

`PUT /analyzer/{analyzerName}/archive-rule`

<p>Creates an archive rule for the specified analyzer. Archive rules automatically archive new findings that meet the criteria you define when you create the rule.</p> <p>To learn about filter keys that you can use to create an archive rule, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">IAM Access Analyzer filter keys</a> in the <b>IAM User Guide</b>.</p>

> Body parameter

```json
{
  "ruleName": "string",
  "filter": {
    "property1": {
      "eq": {},
      "neq": {},
      "contains": {},
      "exists": {}
    },
    "property2": {
      "eq": {},
      "neq": {},
      "contains": {},
      "exists": {}
    }
  },
  "clientToken": "string"
}
```

<h3 id="createarchiverule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|analyzerName|path|string|true|The name of the created analyzer.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ruleName|body|string|true|The name of the rule to create.|
|» filter|body|object|true|The criteria for the rule.|
|» » **additionalProperties**|body|[Criterion](#schemacriterion)|false|The criteria to use in the filter that defines the archive rule. For more information on available filter keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">IAM Access Analyzer filter keys</a>.|
|» clientToken|body|string|false|A client token.|

> Example responses

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

<h3 id="createarchiverule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAnalyzer

<a id="opIdGetAnalyzer"></a>

> Code samples

```bash
curl https://accessanalyzer.us-east-1.amazonaws.com/analyzer/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /analyzer/{analyzerName}`

Retrieves information about the specified analyzer.

<h3 id="getanalyzer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|analyzerName|path|string|true|The name of the analyzer retrieved.|
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
  "analyzer": {
    "arn": {},
    "name": {},
    "type": {},
    "createdAt": {},
    "lastResourceAnalyzed": {},
    "lastResourceAnalyzedAt": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "status": {},
    "statusReason": {
      "code": {}
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

<h3 id="getanalyzer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAnalyzerResponse](#schemagetanalyzerresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAnalyzer

<a id="opIdDeleteAnalyzer"></a>

> Code samples

```bash
curl https://accessanalyzer.us-east-1.amazonaws.com/analyzer/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /analyzer/{analyzerName}`

Deletes the specified analyzer. When you delete an analyzer, IAM Access Analyzer is disabled for the account or organization in the current or specific Region. All findings that were generated by the analyzer are deleted. You cannot undo this action.

<h3 id="deleteanalyzer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|analyzerName|path|string|true|The name of the analyzer to delete.|
|clientToken|query|string|false|A client token.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

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

<h3 id="deleteanalyzer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetArchiveRule

<a id="opIdGetArchiveRule"></a>

> Code samples

```bash
curl https://accessanalyzer.us-east-1.amazonaws.com/analyzer/string/archive-rule/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /analyzer/{analyzerName}/archive-rule/{ruleName}`

<p>Retrieves information about an archive rule.</p> <p>To learn about filter keys that you can use to create an archive rule, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">IAM Access Analyzer filter keys</a> in the <b>IAM User Guide</b>.</p>

<h3 id="getarchiverule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|analyzerName|path|string|true|The name of the analyzer to retrieve rules from.|
|ruleName|path|string|true|The name of the rule to retrieve.|
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
  "archiveRule": {
    "ruleName": {},
    "filter": {
      "property1": {
        "eq": {},
        "neq": {},
        "contains": {},
        "exists": {}
      },
      "property2": {
        "eq": {},
        "neq": {},
        "contains": {},
        "exists": {}
      }
    },
    "createdAt": {},
    "updatedAt": {}
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

<h3 id="getarchiverule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetArchiveRuleResponse](#schemagetarchiveruleresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateArchiveRule

<a id="opIdUpdateArchiveRule"></a>

> Code samples

```bash
curl https://accessanalyzer.us-east-1.amazonaws.com/analyzer/string/archive-rule/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "filter": {
      "property1": {
        "eq": {},
        "neq": {},
        "contains": {},
        "exists": {}
      },
      "property2": {
        "eq": {},
        "neq": {},
        "contains": {},
        "exists": {}
      }
    },
    "clientToken": "string"
  }'
```

`PUT /analyzer/{analyzerName}/archive-rule/{ruleName}`

Updates the criteria and values for the specified archive rule.

> Body parameter

```json
{
  "filter": {
    "property1": {
      "eq": {},
      "neq": {},
      "contains": {},
      "exists": {}
    },
    "property2": {
      "eq": {},
      "neq": {},
      "contains": {},
      "exists": {}
    }
  },
  "clientToken": "string"
}
```

<h3 id="updatearchiverule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|analyzerName|path|string|true|The name of the analyzer to update the archive rules for.|
|ruleName|path|string|true|The name of the rule to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» filter|body|object|true|A filter to match for the rules to update. Only rules that match the filter are updated.|
|» » **additionalProperties**|body|[Criterion](#schemacriterion)|false|The criteria to use in the filter that defines the archive rule. For more information on available filter keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">IAM Access Analyzer filter keys</a>.|
|» clientToken|body|string|false|A client token.|

> Example responses

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

<h3 id="updatearchiverule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteArchiveRule

<a id="opIdDeleteArchiveRule"></a>

> Code samples

```bash
curl https://accessanalyzer.us-east-1.amazonaws.com/analyzer/string/archive-rule/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /analyzer/{analyzerName}/archive-rule/{ruleName}`

Deletes the specified archive rule.

<h3 id="deletearchiverule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|analyzerName|path|string|true|The name of the analyzer that associated with the archive rule to delete.|
|ruleName|path|string|true|The name of the rule to delete.|
|clientToken|query|string|false|A client token.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

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

<h3 id="deletearchiverule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAccessPreview

<a id="opIdGetAccessPreview"></a>

> Code samples

```bash
curl 'https://accessanalyzer.us-east-1.amazonaws.com/access-preview/string#analyzerArn?analyzerArn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /access-preview/{accessPreviewId}#analyzerArn`

Retrieves information about an access preview for the specified analyzer.

<h3 id="getaccesspreview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accessPreviewId|path|string|true|The unique ID for the access preview.|
|analyzerArn|query|string|true|The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> used to generate the access preview.|
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
  "accessPreview": {
    "id": {},
    "analyzerArn": {},
    "configurations": {
      "property1": {
        "ebsSnapshot": {
          "userIds": {},
          "groups": {},
          "kmsKeyId": {}
        },
        "ecrRepository": {
          "repositoryPolicy": {}
        },
        "iamRole": {
          "trustPolicy": {}
        },
        "efsFileSystem": {
          "fileSystemPolicy": {}
        },
        "kmsKey": {
          "keyPolicies": {
            "property1": "string",
            "property2": "string"
          },
          "grants": {}
        },
        "rdsDbClusterSnapshot": {
          "attributes": {
            "property1": {
              "accountIds": {}
            },
            "property2": {
              "accountIds": {}
            }
          },
          "kmsKeyId": {}
        },
        "rdsDbSnapshot": {
          "attributes": {
            "property1": {
              "accountIds": {}
            },
            "property2": {
              "accountIds": {}
            }
          },
          "kmsKeyId": {}
        },
        "secretsManagerSecret": {
          "kmsKeyId": {},
          "secretPolicy": {}
        },
        "s3Bucket": {
          "bucketPolicy": {},
          "bucketAclGrants": {},
          "bucketPublicAccessBlock": {
            "ignorePublicAcls": {},
            "restrictPublicBuckets": {}
          },
          "accessPoints": {
            "property1": {
              "accessPointPolicy": {},
              "publicAccessBlock": {
                "ignorePublicAcls": {},
                "restrictPublicBuckets": {}
              },
              "networkOrigin": {
                "vpcConfiguration": {
                  "vpcId": {}
                },
                "internetConfiguration": {}
              }
            },
            "property2": {
              "accessPointPolicy": {},
              "publicAccessBlock": {
                "ignorePublicAcls": {},
                "restrictPublicBuckets": {}
              },
              "networkOrigin": {
                "vpcConfiguration": {
                  "vpcId": {}
                },
                "internetConfiguration": {}
              }
            }
          }
        },
        "snsTopic": {
          "topicPolicy": {}
        },
        "sqsQueue": {
          "queuePolicy": {}
        }
      },
      "property2": {
        "ebsSnapshot": {
          "userIds": {},
          "groups": {},
          "kmsKeyId": {}
        },
        "ecrRepository": {
          "repositoryPolicy": {}
        },
        "iamRole": {
          "trustPolicy": {}
        },
        "efsFileSystem": {
          "fileSystemPolicy": {}
        },
        "kmsKey": {
          "keyPolicies": {
            "property1": "string",
            "property2": "string"
          },
          "grants": {}
        },
        "rdsDbClusterSnapshot": {
          "attributes": {
            "property1": {
              "accountIds": {}
            },
            "property2": {
              "accountIds": {}
            }
          },
          "kmsKeyId": {}
        },
        "rdsDbSnapshot": {
          "attributes": {
            "property1": {
              "accountIds": {}
            },
            "property2": {
              "accountIds": {}
            }
          },
          "kmsKeyId": {}
        },
        "secretsManagerSecret": {
          "kmsKeyId": {},
          "secretPolicy": {}
        },
        "s3Bucket": {
          "bucketPolicy": {},
          "bucketAclGrants": {},
          "bucketPublicAccessBlock": {
            "ignorePublicAcls": {},
            "restrictPublicBuckets": {}
          },
          "accessPoints": {
            "property1": {
              "accessPointPolicy": {},
              "publicAccessBlock": {
                "ignorePublicAcls": {},
                "restrictPublicBuckets": {}
              },
              "networkOrigin": {
                "vpcConfiguration": {
                  "vpcId": {}
                },
                "internetConfiguration": {}
              }
            },
            "property2": {
              "accessPointPolicy": {},
              "publicAccessBlock": {
                "ignorePublicAcls": {},
                "restrictPublicBuckets": {}
              },
              "networkOrigin": {
                "vpcConfiguration": {
                  "vpcId": {}
                },
                "internetConfiguration": {}
              }
            }
          }
        },
        "snsTopic": {
          "topicPolicy": {}
        },
        "sqsQueue": {
          "queuePolicy": {}
        }
      }
    },
    "createdAt": {},
    "status": {},
    "statusReason": {
      "code": {}
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

<h3 id="getaccesspreview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAccessPreviewResponse](#schemagetaccesspreviewresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAnalyzedResource

<a id="opIdGetAnalyzedResource"></a>

> Code samples

```bash
curl 'https://accessanalyzer.us-east-1.amazonaws.com/analyzed-resource#analyzerArn&resourceArn?analyzerArn=string&resourceArn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /analyzed-resource#analyzerArn&resourceArn`

Retrieves information about a resource that was analyzed.

<h3 id="getanalyzedresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|analyzerArn|query|string|true|The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> to retrieve information from.|
|resourceArn|query|string|true|The ARN of the resource to retrieve information about.|
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
  "resource": {
    "resourceArn": {},
    "resourceType": {},
    "createdAt": {},
    "analyzedAt": {},
    "updatedAt": {},
    "isPublic": {},
    "actions": {},
    "sharedVia": {},
    "status": {},
    "resourceOwnerAccount": {},
    "error": {}
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

<h3 id="getanalyzedresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAnalyzedResourceResponse](#schemagetanalyzedresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFinding

<a id="opIdGetFinding"></a>

> Code samples

```bash
curl 'https://accessanalyzer.us-east-1.amazonaws.com/finding/string#analyzerArn?analyzerArn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /finding/{id}#analyzerArn`

Retrieves information about the specified finding.

<h3 id="getfinding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|analyzerArn|query|string|true|The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> that generated the finding.|
|id|path|string|true|The ID of the finding to retrieve.|
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
  "finding": {
    "id": {},
    "principal": {
      "property1": "string",
      "property2": "string"
    },
    "action": {},
    "resource": {},
    "isPublic": {},
    "resourceType": {},
    "condition": {
      "property1": "string",
      "property2": "string"
    },
    "createdAt": {},
    "analyzedAt": {},
    "updatedAt": {},
    "status": {},
    "resourceOwnerAccount": {},
    "error": {},
    "sources": {}
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

<h3 id="getfinding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFindingResponse](#schemagetfindingresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAccessPreviewFindings

<a id="opIdListAccessPreviewFindings"></a>

> Code samples

```bash
curl https://accessanalyzer.us-east-1.amazonaws.com/access-preview/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "analyzerArn": "string",
    "filter": {
      "property1": {
        "eq": {},
        "neq": {},
        "contains": {},
        "exists": {}
      },
      "property2": {
        "eq": {},
        "neq": {},
        "contains": {},
        "exists": {}
      }
    },
    "nextToken": "string",
    "maxResults": 0
  }'
```

`POST /access-preview/{accessPreviewId}`

Retrieves a list of access preview findings generated by the specified access preview.

> Body parameter

```json
{
  "analyzerArn": "string",
  "filter": {
    "property1": {
      "eq": {},
      "neq": {},
      "contains": {},
      "exists": {}
    },
    "property2": {
      "eq": {},
      "neq": {},
      "contains": {},
      "exists": {}
    }
  },
  "nextToken": "string",
  "maxResults": 0
}
```

<h3 id="listaccesspreviewfindings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accessPreviewId|path|string|true|The unique ID for the access preview.|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» analyzerArn|body|string|true|The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> used to generate the access.|
|» filter|body|object|false|Criteria to filter the returned findings.|
|» » **additionalProperties**|body|[Criterion](#schemacriterion)|false|The criteria to use in the filter that defines the archive rule. For more information on available filter keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">IAM Access Analyzer filter keys</a>.|
|» nextToken|body|string|false|A token used for pagination of results returned.|
|» maxResults|body|integer|false|The maximum number of results to return in the response.|

> Example responses

> 200 Response

```json
{
  "findings": {},
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

<h3 id="listaccesspreviewfindings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAccessPreviewFindingsResponse](#schemalistaccesspreviewfindingsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAccessPreviews

<a id="opIdListAccessPreviews"></a>

> Code samples

```bash
curl 'https://accessanalyzer.us-east-1.amazonaws.com/access-preview#analyzerArn?analyzerArn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /access-preview#analyzerArn`

Retrieves a list of access previews for the specified analyzer.

<h3 id="listaccesspreviews-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|analyzerArn|query|string|true|The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> used to generate the access preview.|
|nextToken|query|string|false|A token used for pagination of results returned.|
|maxResults|query|integer|false|The maximum number of results to return in the response.|
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
  "accessPreviews": {},
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

<h3 id="listaccesspreviews-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAccessPreviewsResponse](#schemalistaccesspreviewsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAnalyzedResources

<a id="opIdListAnalyzedResources"></a>

> Code samples

```bash
curl https://accessanalyzer.us-east-1.amazonaws.com/analyzed-resource \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "analyzerArn": "string",
    "resourceType": "AWS::S3::Bucket",
    "nextToken": "string",
    "maxResults": 0
  }'
```

`POST /analyzed-resource`

Retrieves a list of resources of the specified type that have been analyzed by the specified analyzer..

> Body parameter

```json
{
  "analyzerArn": "string",
  "resourceType": "AWS::S3::Bucket",
  "nextToken": "string",
  "maxResults": 0
}
```

<h3 id="listanalyzedresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» analyzerArn|body|string|true|The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> to retrieve a list of analyzed resources from.|
|» resourceType|body|string|false|The type of resource.|
|» nextToken|body|string|false|A token used for pagination of results returned.|
|» maxResults|body|integer|false|The maximum number of results to return in the response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» resourceType|AWS::S3::Bucket|
|» resourceType|AWS::IAM::Role|
|» resourceType|AWS::SQS::Queue|
|» resourceType|AWS::Lambda::Function|
|» resourceType|AWS::Lambda::LayerVersion|
|» resourceType|AWS::KMS::Key|
|» resourceType|AWS::SecretsManager::Secret|
|» resourceType|AWS::EFS::FileSystem|
|» resourceType|AWS::EC2::Snapshot|
|» resourceType|AWS::ECR::Repository|
|» resourceType|AWS::RDS::DBSnapshot|
|» resourceType|AWS::RDS::DBClusterSnapshot|
|» resourceType|AWS::SNS::Topic|

> Example responses

> 200 Response

```json
{
  "analyzedResources": {},
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

<h3 id="listanalyzedresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAnalyzedResourcesResponse](#schemalistanalyzedresourcesresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFindings

<a id="opIdUpdateFindings"></a>

> Code samples

```bash
curl https://accessanalyzer.us-east-1.amazonaws.com/finding \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "analyzerArn": "string",
    "status": "ACTIVE",
    "ids": [
      "string"
    ],
    "resourceArn": "string",
    "clientToken": "string"
  }'
```

`PUT /finding`

Updates the status for the specified findings.

> Body parameter

```json
{
  "analyzerArn": "string",
  "status": "ACTIVE",
  "ids": [
    "string"
  ],
  "resourceArn": "string",
  "clientToken": "string"
}
```

<h3 id="updatefindings-parameters">Parameters</h3>

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
|» analyzerArn|body|string|true|The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> that generated the findings to update.|
|» status|body|string|true|The state represents the action to take to update the finding Status. Use <code>ARCHIVE</code> to change an Active finding to an Archived finding. Use <code>ACTIVE</code> to change an Archived finding to an Active finding.|
|» ids|body|[[FindingId](#schemafindingid)]|false|The IDs of the findings to update.|
|» resourceArn|body|string|false|The ARN of the resource identified in the finding.|
|» clientToken|body|string|false|A client token.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|ACTIVE|
|» status|ARCHIVED|

> Example responses

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

<h3 id="updatefindings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFindings

<a id="opIdListFindings"></a>

> Code samples

```bash
curl https://accessanalyzer.us-east-1.amazonaws.com/finding \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "analyzerArn": "string",
    "filter": {
      "property1": {
        "eq": {},
        "neq": {},
        "contains": {},
        "exists": {}
      },
      "property2": {
        "eq": {},
        "neq": {},
        "contains": {},
        "exists": {}
      }
    },
    "sort": {
      "attributeName": {},
      "orderBy": {}
    },
    "nextToken": "string",
    "maxResults": 0
  }'
```

`POST /finding`

<p>Retrieves a list of findings generated by the specified analyzer.</p> <p>To learn about filter keys that you can use to retrieve a list of findings, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">IAM Access Analyzer filter keys</a> in the <b>IAM User Guide</b>.</p>

> Body parameter

```json
{
  "analyzerArn": "string",
  "filter": {
    "property1": {
      "eq": {},
      "neq": {},
      "contains": {},
      "exists": {}
    },
    "property2": {
      "eq": {},
      "neq": {},
      "contains": {},
      "exists": {}
    }
  },
  "sort": {
    "attributeName": {},
    "orderBy": {}
  },
  "nextToken": "string",
  "maxResults": 0
}
```

<h3 id="listfindings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» analyzerArn|body|string|true|The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> to retrieve findings from.|
|» filter|body|object|false|A filter to match for the findings to return.|
|» » **additionalProperties**|body|[Criterion](#schemacriterion)|false|The criteria to use in the filter that defines the archive rule. For more information on available filter keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">IAM Access Analyzer filter keys</a>.|
|» sort|body|object|false|The criteria used to sort.|
|» » attributeName|body|object|false|none|
|» » orderBy|body|object|false|none|
|» nextToken|body|string|false|A token used for pagination of results returned.|
|» maxResults|body|integer|false|The maximum number of results to return in the response.|

> Example responses

> 200 Response

```json
{
  "findings": {},
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

<h3 id="listfindings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFindingsResponse](#schemalistfindingsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPolicyGenerations

<a id="opIdListPolicyGenerations"></a>

> Code samples

```bash
curl https://accessanalyzer.us-east-1.amazonaws.com/policy/generation \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /policy/generation`

Lists all of the policy generations requested in the last seven days.

<h3 id="listpolicygenerations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|principalArn|query|string|false|The ARN of the IAM entity (user or role) for which you are generating a policy. Use this with <code>ListGeneratedPolicies</code> to filter the results to only include results for a specific principal.|
|maxResults|query|integer|false|The maximum number of results to return in the response.|
|nextToken|query|string|false|A token used for pagination of results returned.|
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
  "policyGenerations": {},
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

<h3 id="listpolicygenerations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPolicyGenerationsResponse](#schemalistpolicygenerationsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartPolicyGeneration

<a id="opIdStartPolicyGeneration"></a>

> Code samples

```bash
curl https://accessanalyzer.us-east-1.amazonaws.com/policy/generation \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "policyGenerationDetails": {
      "principalArn": {}
    },
    "cloudTrailDetails": {
      "trails": {},
      "accessRole": {},
      "startTime": {},
      "endTime": {}
    },
    "clientToken": "string"
  }'
```

`PUT /policy/generation`

Starts the policy generation request.

> Body parameter

```json
{
  "policyGenerationDetails": {
    "principalArn": {}
  },
  "cloudTrailDetails": {
    "trails": {},
    "accessRole": {},
    "startTime": {},
    "endTime": {}
  },
  "clientToken": "string"
}
```

<h3 id="startpolicygeneration-parameters">Parameters</h3>

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
|» policyGenerationDetails|body|object|true|Contains the ARN details about the IAM entity for which the policy is generated.|
|» » principalArn|body|object|false|none|
|» cloudTrailDetails|body|object|false|Contains information about CloudTrail access.|
|» » trails|body|object|false|none|
|» » accessRole|body|object|false|none|
|» » startTime|body|object|false|none|
|» » endTime|body|object|false|none|
|» clientToken|body|string|false|<p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect.</p> <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.</p>|

> Example responses

> 200 Response

```json
{
  "jobId": {}
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

<h3 id="startpolicygeneration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartPolicyGenerationResponse](#schemastartpolicygenerationresponse)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://accessanalyzer.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

Retrieves a list of tags applied to the specified resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The ARN of the resource to retrieve tags from.|
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
  "tags": {
    "property1": "string",
    "property2": "string"
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://accessanalyzer.us-east-1.amazonaws.com/tags/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /tags/{resourceArn}`

Adds a tag to the specified resource.

> Body parameter

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The ARN of the resource to add the tag to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|The tags to add to the resource.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartResourceScan

<a id="opIdStartResourceScan"></a>

> Code samples

```bash
curl https://accessanalyzer.us-east-1.amazonaws.com/resource/scan \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "analyzerArn": "string",
    "resourceArn": "string",
    "resourceOwnerAccount": "string"
  }'
```

`POST /resource/scan`

Immediately starts a scan of the policies applied to the specified resource.

> Body parameter

```json
{
  "analyzerArn": "string",
  "resourceArn": "string",
  "resourceOwnerAccount": "string"
}
```

<h3 id="startresourcescan-parameters">Parameters</h3>

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
|» analyzerArn|body|string|true|The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> to use to scan the policies applied to the specified resource.|
|» resourceArn|body|string|true|The ARN of the resource to scan.|
|» resourceOwnerAccount|body|string|false|The Amazon Web Services account ID that owns the resource. For most Amazon Web Services resources, the owning account is the account in which the resource was created.|

> Example responses

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

<h3 id="startresourcescan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://accessanalyzer.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

Removes a tag from the specified resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The ARN of the resource to remove the tag from.|
|tagKeys|query|[[String](#schemastring)]|true|The key for the tag to add.|
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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ValidatePolicy

<a id="opIdValidatePolicy"></a>

> Code samples

```bash
curl https://accessanalyzer.us-east-1.amazonaws.com/policy/validation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "locale": "DE",
    "policyDocument": "string",
    "policyType": "IDENTITY_POLICY",
    "validatePolicyResourceType": "AWS::S3::Bucket"
  }'
```

`POST /policy/validation`

Requests the validation of a policy and returns a list of findings. The findings help you identify issues and provide actionable recommendations to resolve the issue and enable you to author functional policies that meet security best practices. 

> Body parameter

```json
{
  "locale": "DE",
  "policyDocument": "string",
  "policyType": "IDENTITY_POLICY",
  "validatePolicyResourceType": "AWS::S3::Bucket"
}
```

<h3 id="validatepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of results to return in the response.|
|nextToken|query|string|false|A token used for pagination of results returned.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» locale|body|string|false|The locale to use for localizing the findings.|
|» policyDocument|body|string|true|The JSON policy document to use as the content for the policy.|
|» policyType|body|string|true|<p>The type of policy to validate. Identity policies grant permissions to IAM principals. Identity policies include managed and inline policies for IAM roles, users, and groups. They also include service-control policies (SCPs) that are attached to an Amazon Web Services organization, organizational unit (OU), or an account.</p> <p>Resource policies grant permissions on Amazon Web Services resources. Resource policies include trust policies for IAM roles and bucket policies for Amazon S3 buckets. You can provide a generic input such as identity policy or resource policy or a specific input such as managed policy or Amazon S3 bucket policy. </p>|
|» validatePolicyResourceType|body|string|false|<p>The type of resource to attach to your resource policy. Specify a value for the policy validation resource type only if the policy type is <code>RESOURCE_POLICY</code>. For example, to validate a resource policy to attach to an Amazon S3 bucket, you can choose <code>AWS::S3::Bucket</code> for the policy validation resource type.</p> <p>For resource types not supported as valid values, IAM Access Analyzer runs policy checks that apply to all resource policies. For example, to validate a resource policy to attach to a KMS key, do not specify a value for the policy validation resource type and IAM Access Analyzer will run policy checks that apply to all resource policies.</p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» locale|DE|
|» locale|EN|
|» locale|ES|
|» locale|FR|
|» locale|IT|
|» locale|JA|
|» locale|KO|
|» locale|PT_BR|
|» locale|ZH_CN|
|» locale|ZH_TW|
|» policyType|IDENTITY_POLICY|
|» policyType|RESOURCE_POLICY|
|» policyType|SERVICE_CONTROL_POLICY|
|» validatePolicyResourceType|AWS::S3::Bucket|
|» validatePolicyResourceType|AWS::S3::AccessPoint|
|» validatePolicyResourceType|AWS::S3::MultiRegionAccessPoint|
|» validatePolicyResourceType|AWS::S3ObjectLambda::AccessPoint|
|» validatePolicyResourceType|AWS::IAM::AssumeRolePolicyDocument|

> Example responses

> 200 Response

```json
{
  "findings": {},
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

<h3 id="validatepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ValidatePolicyResponse](#schemavalidatepolicyresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

```json
null
```

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

```json
null
```

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_CancelPolicyGenerationResponse">CancelPolicyGenerationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacancelpolicygenerationresponse"></a>
<a id="schema_CancelPolicyGenerationResponse"></a>
<a id="tocScancelpolicygenerationresponse"></a>
<a id="tocscancelpolicygenerationresponse"></a>

```json
{}
```

<h2 id="tocS_CreateAccessPreviewResponse">CreateAccessPreviewResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccesspreviewresponse"></a>
<a id="schema_CreateAccessPreviewResponse"></a>
<a id="tocScreateaccesspreviewresponse"></a>
<a id="tocscreateaccesspreviewresponse"></a>

```json
{
  "id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|

<h2 id="tocS_Configuration">Configuration</h2>
<!-- backwards compatibility -->
<a id="schemaconfiguration"></a>
<a id="schema_Configuration"></a>
<a id="tocSconfiguration"></a>
<a id="tocsconfiguration"></a>

```json
{
  "ebsSnapshot": {
    "userIds": {},
    "groups": {},
    "kmsKeyId": {}
  },
  "ecrRepository": {
    "repositoryPolicy": {}
  },
  "iamRole": {
    "trustPolicy": {}
  },
  "efsFileSystem": {
    "fileSystemPolicy": {}
  },
  "kmsKey": {
    "keyPolicies": {
      "property1": "string",
      "property2": "string"
    },
    "grants": {}
  },
  "rdsDbClusterSnapshot": {
    "attributes": {
      "property1": {
        "accountIds": {}
      },
      "property2": {
        "accountIds": {}
      }
    },
    "kmsKeyId": {}
  },
  "rdsDbSnapshot": {
    "attributes": {
      "property1": {
        "accountIds": {}
      },
      "property2": {
        "accountIds": {}
      }
    },
    "kmsKeyId": {}
  },
  "secretsManagerSecret": {
    "kmsKeyId": {},
    "secretPolicy": {}
  },
  "s3Bucket": {
    "bucketPolicy": {},
    "bucketAclGrants": {},
    "bucketPublicAccessBlock": {
      "ignorePublicAcls": {},
      "restrictPublicBuckets": {}
    },
    "accessPoints": {
      "property1": {
        "accessPointPolicy": {},
        "publicAccessBlock": {
          "ignorePublicAcls": {},
          "restrictPublicBuckets": {}
        },
        "networkOrigin": {
          "vpcConfiguration": {
            "vpcId": {}
          },
          "internetConfiguration": {}
        }
      },
      "property2": {
        "accessPointPolicy": {},
        "publicAccessBlock": {
          "ignorePublicAcls": {},
          "restrictPublicBuckets": {}
        },
        "networkOrigin": {
          "vpcConfiguration": {
            "vpcId": {}
          },
          "internetConfiguration": {}
        }
      }
    }
  },
  "snsTopic": {
    "topicPolicy": {}
  },
  "sqsQueue": {
    "queuePolicy": {}
  }
}
```

Access control configuration structures for your resource. You specify the configuration as a type-value pair. You can specify only one type of access control configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ebsSnapshot|object|false|none|none|
|ecrRepository|object|false|none|none|
|iamRole|object|false|none|none|
|efsFileSystem|object|false|none|none|
|kmsKey|object|false|none|none|
|rdsDbClusterSnapshot|object|false|none|none|
|rdsDbSnapshot|object|false|none|none|
|secretsManagerSecret|object|false|none|none|
|s3Bucket|object|false|none|none|
|snsTopic|object|false|none|none|
|sqsQueue|object|false|none|none|

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateAnalyzerResponse">CreateAnalyzerResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateanalyzerresponse"></a>
<a id="schema_CreateAnalyzerResponse"></a>
<a id="tocScreateanalyzerresponse"></a>
<a id="tocscreateanalyzerresponse"></a>

```json
{
  "arn": {}
}
```

The response to the request to create an analyzer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|

<h2 id="tocS_InlineArchiveRule">InlineArchiveRule</h2>
<!-- backwards compatibility -->
<a id="schemainlinearchiverule"></a>
<a id="schema_InlineArchiveRule"></a>
<a id="tocSinlinearchiverule"></a>
<a id="tocsinlinearchiverule"></a>

```json
{
  "ruleName": {},
  "filter": {
    "property1": {
      "eq": {},
      "neq": {},
      "contains": {},
      "exists": {}
    },
    "property2": {
      "eq": {},
      "neq": {},
      "contains": {},
      "exists": {}
    }
  }
}
```

An criterion statement in an archive rule. Each archive rule may have multiple criteria.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ruleName|object|true|none|none|
|filter|object|true|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_Criterion">Criterion</h2>
<!-- backwards compatibility -->
<a id="schemacriterion"></a>
<a id="schema_Criterion"></a>
<a id="tocScriterion"></a>
<a id="tocscriterion"></a>

```json
{
  "eq": {},
  "neq": {},
  "contains": {},
  "exists": {}
}
```

The criteria to use in the filter that defines the archive rule. For more information on available filter keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">IAM Access Analyzer filter keys</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eq|object|false|none|none|
|neq|object|false|none|none|
|contains|object|false|none|none|
|exists|object|false|none|none|

<h2 id="tocS_GetAccessPreviewResponse">GetAccessPreviewResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaccesspreviewresponse"></a>
<a id="schema_GetAccessPreviewResponse"></a>
<a id="tocSgetaccesspreviewresponse"></a>
<a id="tocsgetaccesspreviewresponse"></a>

```json
{
  "accessPreview": {
    "id": {},
    "analyzerArn": {},
    "configurations": {
      "property1": {
        "ebsSnapshot": {
          "userIds": {},
          "groups": {},
          "kmsKeyId": {}
        },
        "ecrRepository": {
          "repositoryPolicy": {}
        },
        "iamRole": {
          "trustPolicy": {}
        },
        "efsFileSystem": {
          "fileSystemPolicy": {}
        },
        "kmsKey": {
          "keyPolicies": {
            "property1": "string",
            "property2": "string"
          },
          "grants": {}
        },
        "rdsDbClusterSnapshot": {
          "attributes": {
            "property1": {
              "accountIds": {}
            },
            "property2": {
              "accountIds": {}
            }
          },
          "kmsKeyId": {}
        },
        "rdsDbSnapshot": {
          "attributes": {
            "property1": {
              "accountIds": {}
            },
            "property2": {
              "accountIds": {}
            }
          },
          "kmsKeyId": {}
        },
        "secretsManagerSecret": {
          "kmsKeyId": {},
          "secretPolicy": {}
        },
        "s3Bucket": {
          "bucketPolicy": {},
          "bucketAclGrants": {},
          "bucketPublicAccessBlock": {
            "ignorePublicAcls": {},
            "restrictPublicBuckets": {}
          },
          "accessPoints": {
            "property1": {
              "accessPointPolicy": {},
              "publicAccessBlock": {
                "ignorePublicAcls": {},
                "restrictPublicBuckets": {}
              },
              "networkOrigin": {
                "vpcConfiguration": {
                  "vpcId": {}
                },
                "internetConfiguration": {}
              }
            },
            "property2": {
              "accessPointPolicy": {},
              "publicAccessBlock": {
                "ignorePublicAcls": {},
                "restrictPublicBuckets": {}
              },
              "networkOrigin": {
                "vpcConfiguration": {
                  "vpcId": {}
                },
                "internetConfiguration": {}
              }
            }
          }
        },
        "snsTopic": {
          "topicPolicy": {}
        },
        "sqsQueue": {
          "queuePolicy": {}
        }
      },
      "property2": {
        "ebsSnapshot": {
          "userIds": {},
          "groups": {},
          "kmsKeyId": {}
        },
        "ecrRepository": {
          "repositoryPolicy": {}
        },
        "iamRole": {
          "trustPolicy": {}
        },
        "efsFileSystem": {
          "fileSystemPolicy": {}
        },
        "kmsKey": {
          "keyPolicies": {
            "property1": "string",
            "property2": "string"
          },
          "grants": {}
        },
        "rdsDbClusterSnapshot": {
          "attributes": {
            "property1": {
              "accountIds": {}
            },
            "property2": {
              "accountIds": {}
            }
          },
          "kmsKeyId": {}
        },
        "rdsDbSnapshot": {
          "attributes": {
            "property1": {
              "accountIds": {}
            },
            "property2": {
              "accountIds": {}
            }
          },
          "kmsKeyId": {}
        },
        "secretsManagerSecret": {
          "kmsKeyId": {},
          "secretPolicy": {}
        },
        "s3Bucket": {
          "bucketPolicy": {},
          "bucketAclGrants": {},
          "bucketPublicAccessBlock": {
            "ignorePublicAcls": {},
            "restrictPublicBuckets": {}
          },
          "accessPoints": {
            "property1": {
              "accessPointPolicy": {},
              "publicAccessBlock": {
                "ignorePublicAcls": {},
                "restrictPublicBuckets": {}
              },
              "networkOrigin": {
                "vpcConfiguration": {
                  "vpcId": {}
                },
                "internetConfiguration": {}
              }
            },
            "property2": {
              "accessPointPolicy": {},
              "publicAccessBlock": {
                "ignorePublicAcls": {},
                "restrictPublicBuckets": {}
              },
              "networkOrigin": {
                "vpcConfiguration": {
                  "vpcId": {}
                },
                "internetConfiguration": {}
              }
            }
          }
        },
        "snsTopic": {
          "topicPolicy": {}
        },
        "sqsQueue": {
          "queuePolicy": {}
        }
      }
    },
    "createdAt": {},
    "status": {},
    "statusReason": {
      "code": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessPreview|object|true|none|none|

<h2 id="tocS_GetAnalyzedResourceResponse">GetAnalyzedResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetanalyzedresourceresponse"></a>
<a id="schema_GetAnalyzedResourceResponse"></a>
<a id="tocSgetanalyzedresourceresponse"></a>
<a id="tocsgetanalyzedresourceresponse"></a>

```json
{
  "resource": {
    "resourceArn": {},
    "resourceType": {},
    "createdAt": {},
    "analyzedAt": {},
    "updatedAt": {},
    "isPublic": {},
    "actions": {},
    "sharedVia": {},
    "status": {},
    "resourceOwnerAccount": {},
    "error": {}
  }
}
```

The response to the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resource|object|false|none|none|

<h2 id="tocS_GetAnalyzerResponse">GetAnalyzerResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetanalyzerresponse"></a>
<a id="schema_GetAnalyzerResponse"></a>
<a id="tocSgetanalyzerresponse"></a>
<a id="tocsgetanalyzerresponse"></a>

```json
{
  "analyzer": {
    "arn": {},
    "name": {},
    "type": {},
    "createdAt": {},
    "lastResourceAnalyzed": {},
    "lastResourceAnalyzedAt": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "status": {},
    "statusReason": {
      "code": {}
    }
  }
}
```

The response to the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyzer|object|true|none|none|

<h2 id="tocS_GetArchiveRuleResponse">GetArchiveRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetarchiveruleresponse"></a>
<a id="schema_GetArchiveRuleResponse"></a>
<a id="tocSgetarchiveruleresponse"></a>
<a id="tocsgetarchiveruleresponse"></a>

```json
{
  "archiveRule": {
    "ruleName": {},
    "filter": {
      "property1": {
        "eq": {},
        "neq": {},
        "contains": {},
        "exists": {}
      },
      "property2": {
        "eq": {},
        "neq": {},
        "contains": {},
        "exists": {}
      }
    },
    "createdAt": {},
    "updatedAt": {}
  }
}
```

The response to the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archiveRule|[ArchiveRuleSummary](#schemaarchiverulesummary)|true|none|Contains information about an archive rule.|

<h2 id="tocS_GetFindingResponse">GetFindingResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfindingresponse"></a>
<a id="schema_GetFindingResponse"></a>
<a id="tocSgetfindingresponse"></a>
<a id="tocsgetfindingresponse"></a>

```json
{
  "finding": {
    "id": {},
    "principal": {
      "property1": "string",
      "property2": "string"
    },
    "action": {},
    "resource": {},
    "isPublic": {},
    "resourceType": {},
    "condition": {
      "property1": "string",
      "property2": "string"
    },
    "createdAt": {},
    "analyzedAt": {},
    "updatedAt": {},
    "status": {},
    "resourceOwnerAccount": {},
    "error": {},
    "sources": {}
  }
}
```

The response to the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|finding|object|false|none|none|

<h2 id="tocS_GetGeneratedPolicyResponse">GetGeneratedPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetgeneratedpolicyresponse"></a>
<a id="schema_GetGeneratedPolicyResponse"></a>
<a id="tocSgetgeneratedpolicyresponse"></a>
<a id="tocsgetgeneratedpolicyresponse"></a>

```json
{
  "jobDetails": {
    "jobId": {},
    "status": {},
    "startedOn": {},
    "completedOn": {},
    "jobError": {
      "code": {},
      "message": {}
    }
  },
  "generatedPolicyResult": {
    "properties": null,
    "generatedPolicies": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobDetails|object|true|none|none|
|generatedPolicyResult|object|true|none|none|

<h2 id="tocS_ListAccessPreviewFindingsResponse">ListAccessPreviewFindingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaccesspreviewfindingsresponse"></a>
<a id="schema_ListAccessPreviewFindingsResponse"></a>
<a id="tocSlistaccesspreviewfindingsresponse"></a>
<a id="tocslistaccesspreviewfindingsresponse"></a>

```json
{
  "findings": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|findings|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListAccessPreviewsResponse">ListAccessPreviewsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaccesspreviewsresponse"></a>
<a id="schema_ListAccessPreviewsResponse"></a>
<a id="tocSlistaccesspreviewsresponse"></a>
<a id="tocslistaccesspreviewsresponse"></a>

```json
{
  "accessPreviews": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessPreviews|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListAnalyzedResourcesResponse">ListAnalyzedResourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistanalyzedresourcesresponse"></a>
<a id="schema_ListAnalyzedResourcesResponse"></a>
<a id="tocSlistanalyzedresourcesresponse"></a>
<a id="tocslistanalyzedresourcesresponse"></a>

```json
{
  "analyzedResources": {},
  "nextToken": {}
}
```

The response to the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyzedResources|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListAnalyzersResponse">ListAnalyzersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistanalyzersresponse"></a>
<a id="schema_ListAnalyzersResponse"></a>
<a id="tocSlistanalyzersresponse"></a>
<a id="tocslistanalyzersresponse"></a>

```json
{
  "analyzers": {},
  "nextToken": {}
}
```

The response to the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyzers|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListArchiveRulesResponse">ListArchiveRulesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistarchiverulesresponse"></a>
<a id="schema_ListArchiveRulesResponse"></a>
<a id="tocSlistarchiverulesresponse"></a>
<a id="tocslistarchiverulesresponse"></a>

```json
{
  "archiveRules": {},
  "nextToken": {}
}
```

The response to the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archiveRules|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListFindingsResponse">ListFindingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfindingsresponse"></a>
<a id="schema_ListFindingsResponse"></a>
<a id="tocSlistfindingsresponse"></a>
<a id="tocslistfindingsresponse"></a>

```json
{
  "findings": {},
  "nextToken": {}
}
```

The response to the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|findings|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_OrderBy">OrderBy</h2>
<!-- backwards compatibility -->
<a id="schemaorderby"></a>
<a id="schema_OrderBy"></a>
<a id="tocSorderby"></a>
<a id="tocsorderby"></a>

```json
"ASC"
```

<h2 id="tocS_ListPolicyGenerationsResponse">ListPolicyGenerationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpolicygenerationsresponse"></a>
<a id="schema_ListPolicyGenerationsResponse"></a>
<a id="tocSlistpolicygenerationsresponse"></a>
<a id="tocslistpolicygenerationsresponse"></a>

```json
{
  "policyGenerations": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyGenerations|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

The response to the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|

<h2 id="tocS_StartPolicyGenerationResponse">StartPolicyGenerationResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartpolicygenerationresponse"></a>
<a id="schema_StartPolicyGenerationResponse"></a>
<a id="tocSstartpolicygenerationresponse"></a>
<a id="tocsstartpolicygenerationresponse"></a>

```json
{
  "jobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|true|none|none|

<h2 id="tocS_PrincipalArn">PrincipalArn</h2>
<!-- backwards compatibility -->
<a id="schemaprincipalarn"></a>
<a id="schema_PrincipalArn"></a>
<a id="tocSprincipalarn"></a>
<a id="tocsprincipalarn"></a>

```json
"string"
```

<h2 id="tocS_TrailList">TrailList</h2>
<!-- backwards compatibility -->
<a id="schematraillist"></a>
<a id="schema_TrailList"></a>
<a id="tocStraillist"></a>
<a id="tocstraillist"></a>

```json
[
  {
    "cloudTrailArn": {},
    "regions": {},
    "allRegions": {}
  }
]
```

<h2 id="tocS_RoleArn">RoleArn</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleArn"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"string"
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

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
```

The response to the request.

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

```json
{}
```

The response to the request.

<h2 id="tocS_FindingId">FindingId</h2>
<!-- backwards compatibility -->
<a id="schemafindingid"></a>
<a id="schema_FindingId"></a>
<a id="tocSfindingid"></a>
<a id="tocsfindingid"></a>

```json
"string"
```

<h2 id="tocS_ValidatePolicyResponse">ValidatePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemavalidatepolicyresponse"></a>
<a id="schema_ValidatePolicyResponse"></a>
<a id="tocSvalidatepolicyresponse"></a>
<a id="tocsvalidatepolicyresponse"></a>

```json
{
  "findings": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|findings|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_AccessPointArn">AccessPointArn</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspointarn"></a>
<a id="schema_AccessPointArn"></a>
<a id="tocSaccesspointarn"></a>
<a id="tocsaccesspointarn"></a>

```json
"string"
```

<h2 id="tocS_AccessPointPolicy">AccessPointPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspointpolicy"></a>
<a id="schema_AccessPointPolicy"></a>
<a id="tocSaccesspointpolicy"></a>
<a id="tocsaccesspointpolicy"></a>

```json
"string"
```

<h2 id="tocS_AccessPreviewId">AccessPreviewId</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspreviewid"></a>
<a id="schema_AccessPreviewId"></a>
<a id="tocSaccesspreviewid"></a>
<a id="tocsaccesspreviewid"></a>

```json
"string"
```

<h2 id="tocS_AnalyzerArn">AnalyzerArn</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzerarn"></a>
<a id="schema_AnalyzerArn"></a>
<a id="tocSanalyzerarn"></a>
<a id="tocsanalyzerarn"></a>

```json
"string"
```

<h2 id="tocS_ConfigurationsMap">ConfigurationsMap</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationsmap"></a>
<a id="schema_ConfigurationsMap"></a>
<a id="tocSconfigurationsmap"></a>
<a id="tocsconfigurationsmap"></a>

```json
{
  "property1": {
    "ebsSnapshot": {
      "userIds": {},
      "groups": {},
      "kmsKeyId": {}
    },
    "ecrRepository": {
      "repositoryPolicy": {}
    },
    "iamRole": {
      "trustPolicy": {}
    },
    "efsFileSystem": {
      "fileSystemPolicy": {}
    },
    "kmsKey": {
      "keyPolicies": {
        "property1": "string",
        "property2": "string"
      },
      "grants": {}
    },
    "rdsDbClusterSnapshot": {
      "attributes": {
        "property1": {
          "accountIds": {}
        },
        "property2": {
          "accountIds": {}
        }
      },
      "kmsKeyId": {}
    },
    "rdsDbSnapshot": {
      "attributes": {
        "property1": {
          "accountIds": {}
        },
        "property2": {
          "accountIds": {}
        }
      },
      "kmsKeyId": {}
    },
    "secretsManagerSecret": {
      "kmsKeyId": {},
      "secretPolicy": {}
    },
    "s3Bucket": {
      "bucketPolicy": {},
      "bucketAclGrants": {},
      "bucketPublicAccessBlock": {
        "ignorePublicAcls": {},
        "restrictPublicBuckets": {}
      },
      "accessPoints": {
        "property1": {
          "accessPointPolicy": {},
          "publicAccessBlock": {
            "ignorePublicAcls": {},
            "restrictPublicBuckets": {}
          },
          "networkOrigin": {
            "vpcConfiguration": {
              "vpcId": {}
            },
            "internetConfiguration": {}
          }
        },
        "property2": {
          "accessPointPolicy": {},
          "publicAccessBlock": {
            "ignorePublicAcls": {},
            "restrictPublicBuckets": {}
          },
          "networkOrigin": {
            "vpcConfiguration": {
              "vpcId": {}
            },
            "internetConfiguration": {}
          }
        }
      }
    },
    "snsTopic": {
      "topicPolicy": {}
    },
    "sqsQueue": {
      "queuePolicy": {}
    }
  },
  "property2": {
    "ebsSnapshot": {
      "userIds": {},
      "groups": {},
      "kmsKeyId": {}
    },
    "ecrRepository": {
      "repositoryPolicy": {}
    },
    "iamRole": {
      "trustPolicy": {}
    },
    "efsFileSystem": {
      "fileSystemPolicy": {}
    },
    "kmsKey": {
      "keyPolicies": {
        "property1": "string",
        "property2": "string"
      },
      "grants": {}
    },
    "rdsDbClusterSnapshot": {
      "attributes": {
        "property1": {
          "accountIds": {}
        },
        "property2": {
          "accountIds": {}
        }
      },
      "kmsKeyId": {}
    },
    "rdsDbSnapshot": {
      "attributes": {
        "property1": {
          "accountIds": {}
        },
        "property2": {
          "accountIds": {}
        }
      },
      "kmsKeyId": {}
    },
    "secretsManagerSecret": {
      "kmsKeyId": {},
      "secretPolicy": {}
    },
    "s3Bucket": {
      "bucketPolicy": {},
      "bucketAclGrants": {},
      "bucketPublicAccessBlock": {
        "ignorePublicAcls": {},
        "restrictPublicBuckets": {}
      },
      "accessPoints": {
        "property1": {
          "accessPointPolicy": {},
          "publicAccessBlock": {
            "ignorePublicAcls": {},
            "restrictPublicBuckets": {}
          },
          "networkOrigin": {
            "vpcConfiguration": {
              "vpcId": {}
            },
            "internetConfiguration": {}
          }
        },
        "property2": {
          "accessPointPolicy": {},
          "publicAccessBlock": {
            "ignorePublicAcls": {},
            "restrictPublicBuckets": {}
          },
          "networkOrigin": {
            "vpcConfiguration": {
              "vpcId": {}
            },
            "internetConfiguration": {}
          }
        }
      }
    },
    "snsTopic": {
      "topicPolicy": {}
    },
    "sqsQueue": {
      "queuePolicy": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Configuration](#schemaconfiguration)|false|none|Access control configuration structures for your resource. You specify the configuration as a type-value pair. You can specify only one type of access control configuration.|

<h2 id="tocS_AccessPreviewStatus">AccessPreviewStatus</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspreviewstatus"></a>
<a id="schema_AccessPreviewStatus"></a>
<a id="tocSaccesspreviewstatus"></a>
<a id="tocsaccesspreviewstatus"></a>

```json
"COMPLETED"
```

<h2 id="tocS_AccessPreviewStatusReason">AccessPreviewStatusReason</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspreviewstatusreason"></a>
<a id="schema_AccessPreviewStatusReason"></a>
<a id="tocSaccesspreviewstatusreason"></a>
<a id="tocsaccesspreviewstatusreason"></a>

```json
{
  "code": {}
}
```

Provides more details about the current status of the access preview. For example, if the creation of the access preview fails, a <code>Failed</code> status is returned. This failure can be due to an internal issue with the analysis or due to an invalid proposed resource configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|object|true|none|none|

<h2 id="tocS_AccessPreview">AccessPreview</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspreview"></a>
<a id="schema_AccessPreview"></a>
<a id="tocSaccesspreview"></a>
<a id="tocsaccesspreview"></a>

```json
{
  "id": {},
  "analyzerArn": {},
  "configurations": {
    "property1": {
      "ebsSnapshot": {
        "userIds": {},
        "groups": {},
        "kmsKeyId": {}
      },
      "ecrRepository": {
        "repositoryPolicy": {}
      },
      "iamRole": {
        "trustPolicy": {}
      },
      "efsFileSystem": {
        "fileSystemPolicy": {}
      },
      "kmsKey": {
        "keyPolicies": {
          "property1": "string",
          "property2": "string"
        },
        "grants": {}
      },
      "rdsDbClusterSnapshot": {
        "attributes": {
          "property1": {
            "accountIds": {}
          },
          "property2": {
            "accountIds": {}
          }
        },
        "kmsKeyId": {}
      },
      "rdsDbSnapshot": {
        "attributes": {
          "property1": {
            "accountIds": {}
          },
          "property2": {
            "accountIds": {}
          }
        },
        "kmsKeyId": {}
      },
      "secretsManagerSecret": {
        "kmsKeyId": {},
        "secretPolicy": {}
      },
      "s3Bucket": {
        "bucketPolicy": {},
        "bucketAclGrants": {},
        "bucketPublicAccessBlock": {
          "ignorePublicAcls": {},
          "restrictPublicBuckets": {}
        },
        "accessPoints": {
          "property1": {
            "accessPointPolicy": {},
            "publicAccessBlock": {
              "ignorePublicAcls": {},
              "restrictPublicBuckets": {}
            },
            "networkOrigin": {
              "vpcConfiguration": {
                "vpcId": {}
              },
              "internetConfiguration": {}
            }
          },
          "property2": {
            "accessPointPolicy": {},
            "publicAccessBlock": {
              "ignorePublicAcls": {},
              "restrictPublicBuckets": {}
            },
            "networkOrigin": {
              "vpcConfiguration": {
                "vpcId": {}
              },
              "internetConfiguration": {}
            }
          }
        }
      },
      "snsTopic": {
        "topicPolicy": {}
      },
      "sqsQueue": {
        "queuePolicy": {}
      }
    },
    "property2": {
      "ebsSnapshot": {
        "userIds": {},
        "groups": {},
        "kmsKeyId": {}
      },
      "ecrRepository": {
        "repositoryPolicy": {}
      },
      "iamRole": {
        "trustPolicy": {}
      },
      "efsFileSystem": {
        "fileSystemPolicy": {}
      },
      "kmsKey": {
        "keyPolicies": {
          "property1": "string",
          "property2": "string"
        },
        "grants": {}
      },
      "rdsDbClusterSnapshot": {
        "attributes": {
          "property1": {
            "accountIds": {}
          },
          "property2": {
            "accountIds": {}
          }
        },
        "kmsKeyId": {}
      },
      "rdsDbSnapshot": {
        "attributes": {
          "property1": {
            "accountIds": {}
          },
          "property2": {
            "accountIds": {}
          }
        },
        "kmsKeyId": {}
      },
      "secretsManagerSecret": {
        "kmsKeyId": {},
        "secretPolicy": {}
      },
      "s3Bucket": {
        "bucketPolicy": {},
        "bucketAclGrants": {},
        "bucketPublicAccessBlock": {
          "ignorePublicAcls": {},
          "restrictPublicBuckets": {}
        },
        "accessPoints": {
          "property1": {
            "accessPointPolicy": {},
            "publicAccessBlock": {
              "ignorePublicAcls": {},
              "restrictPublicBuckets": {}
            },
            "networkOrigin": {
              "vpcConfiguration": {
                "vpcId": {}
              },
              "internetConfiguration": {}
            }
          },
          "property2": {
            "accessPointPolicy": {},
            "publicAccessBlock": {
              "ignorePublicAcls": {},
              "restrictPublicBuckets": {}
            },
            "networkOrigin": {
              "vpcConfiguration": {
                "vpcId": {}
              },
              "internetConfiguration": {}
            }
          }
        }
      },
      "snsTopic": {
        "topicPolicy": {}
      },
      "sqsQueue": {
        "queuePolicy": {}
      }
    }
  },
  "createdAt": {},
  "status": {},
  "statusReason": {
    "code": {}
  }
}
```

Contains information about an access preview.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|analyzerArn|object|true|none|none|
|configurations|object|true|none|none|
|createdAt|object|true|none|none|
|status|object|true|none|none|
|statusReason|object|false|none|none|

<h2 id="tocS_AccessPreviewFindingId">AccessPreviewFindingId</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspreviewfindingid"></a>
<a id="schema_AccessPreviewFindingId"></a>
<a id="tocSaccesspreviewfindingid"></a>
<a id="tocsaccesspreviewfindingid"></a>

```json
"string"
```

<h2 id="tocS_FindingStatus">FindingStatus</h2>
<!-- backwards compatibility -->
<a id="schemafindingstatus"></a>
<a id="schema_FindingStatus"></a>
<a id="tocSfindingstatus"></a>
<a id="tocsfindingstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_PrincipalMap">PrincipalMap</h2>
<!-- backwards compatibility -->
<a id="schemaprincipalmap"></a>
<a id="schema_PrincipalMap"></a>
<a id="tocSprincipalmap"></a>
<a id="tocsprincipalmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String](#schemastring)|false|none|none|

<h2 id="tocS_ActionList">ActionList</h2>
<!-- backwards compatibility -->
<a id="schemaactionlist"></a>
<a id="schema_ActionList"></a>
<a id="tocSactionlist"></a>
<a id="tocsactionlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ConditionKeyMap">ConditionKeyMap</h2>
<!-- backwards compatibility -->
<a id="schemaconditionkeymap"></a>
<a id="schema_ConditionKeyMap"></a>
<a id="tocSconditionkeymap"></a>
<a id="tocsconditionkeymap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String](#schemastring)|false|none|none|

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_ResourceType">ResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetype"></a>
<a id="schema_ResourceType"></a>
<a id="tocSresourcetype"></a>
<a id="tocsresourcetype"></a>

```json
"AWS::S3::Bucket"
```

<h2 id="tocS_FindingChangeType">FindingChangeType</h2>
<!-- backwards compatibility -->
<a id="schemafindingchangetype"></a>
<a id="schema_FindingChangeType"></a>
<a id="tocSfindingchangetype"></a>
<a id="tocsfindingchangetype"></a>

```json
"CHANGED"
```

<h2 id="tocS_FindingSourceList">FindingSourceList</h2>
<!-- backwards compatibility -->
<a id="schemafindingsourcelist"></a>
<a id="schema_FindingSourceList"></a>
<a id="tocSfindingsourcelist"></a>
<a id="tocsfindingsourcelist"></a>

```json
[
  {
    "type": {},
    "detail": {
      "accessPointArn": {},
      "accessPointAccount": {}
    }
  }
]
```

<h2 id="tocS_AccessPreviewFinding">AccessPreviewFinding</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspreviewfinding"></a>
<a id="schema_AccessPreviewFinding"></a>
<a id="tocSaccesspreviewfinding"></a>
<a id="tocsaccesspreviewfinding"></a>

```json
{
  "id": {},
  "existingFindingId": {},
  "existingFindingStatus": {},
  "principal": {
    "property1": "string",
    "property2": "string"
  },
  "action": {},
  "condition": {
    "property1": "string",
    "property2": "string"
  },
  "resource": {},
  "isPublic": {},
  "resourceType": {},
  "createdAt": {},
  "changeType": {},
  "status": {},
  "resourceOwnerAccount": {},
  "error": {},
  "sources": {}
}
```

An access preview finding generated by the access preview.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|existingFindingId|object|false|none|none|
|existingFindingStatus|object|false|none|none|
|principal|object|false|none|none|
|action|object|false|none|none|
|condition|object|false|none|none|
|resource|object|false|none|none|
|isPublic|object|false|none|none|
|resourceType|object|true|none|none|
|createdAt|object|true|none|none|
|changeType|object|true|none|none|
|status|object|true|none|none|
|resourceOwnerAccount|object|true|none|none|
|error|object|false|none|none|
|sources|object|false|none|none|

<h2 id="tocS_AccessPreviewFindingsList">AccessPreviewFindingsList</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspreviewfindingslist"></a>
<a id="schema_AccessPreviewFindingsList"></a>
<a id="tocSaccesspreviewfindingslist"></a>
<a id="tocsaccesspreviewfindingslist"></a>

```json
[
  {
    "id": {},
    "existingFindingId": {},
    "existingFindingStatus": {},
    "principal": {
      "property1": "string",
      "property2": "string"
    },
    "action": {},
    "condition": {
      "property1": "string",
      "property2": "string"
    },
    "resource": {},
    "isPublic": {},
    "resourceType": {},
    "createdAt": {},
    "changeType": {},
    "status": {},
    "resourceOwnerAccount": {},
    "error": {},
    "sources": {}
  }
]
```

<h2 id="tocS_AccessPreviewStatusReasonCode">AccessPreviewStatusReasonCode</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspreviewstatusreasoncode"></a>
<a id="schema_AccessPreviewStatusReasonCode"></a>
<a id="tocSaccesspreviewstatusreasoncode"></a>
<a id="tocsaccesspreviewstatusreasoncode"></a>

```json
"INTERNAL_ERROR"
```

<h2 id="tocS_AccessPreviewSummary">AccessPreviewSummary</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspreviewsummary"></a>
<a id="schema_AccessPreviewSummary"></a>
<a id="tocSaccesspreviewsummary"></a>
<a id="tocsaccesspreviewsummary"></a>

```json
{
  "id": {},
  "analyzerArn": {},
  "createdAt": {},
  "status": {},
  "statusReason": {
    "code": {}
  }
}
```

Contains a summary of information about an access preview.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|analyzerArn|object|true|none|none|
|createdAt|object|true|none|none|
|status|object|true|none|none|
|statusReason|[AccessPreviewStatusReason](#schemaaccesspreviewstatusreason)|false|none|Provides more details about the current status of the access preview. For example, if the creation of the access preview fails, a <code>Failed</code> status is returned. This failure can be due to an internal issue with the analysis or due to an invalid proposed resource configuration.|

<h2 id="tocS_AccessPreviewsList">AccessPreviewsList</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspreviewslist"></a>
<a id="schema_AccessPreviewsList"></a>
<a id="tocSaccesspreviewslist"></a>
<a id="tocsaccesspreviewslist"></a>

```json
[
  {
    "id": {},
    "analyzerArn": {},
    "createdAt": {},
    "status": {},
    "statusReason": {
      "code": {}
    }
  }
]
```

<h2 id="tocS_AclCanonicalId">AclCanonicalId</h2>
<!-- backwards compatibility -->
<a id="schemaaclcanonicalid"></a>
<a id="schema_AclCanonicalId"></a>
<a id="tocSaclcanonicalid"></a>
<a id="tocsaclcanonicalid"></a>

```json
"string"
```

<h2 id="tocS_AclUri">AclUri</h2>
<!-- backwards compatibility -->
<a id="schemaacluri"></a>
<a id="schema_AclUri"></a>
<a id="tocSacluri"></a>
<a id="tocsacluri"></a>

```json
"string"
```

<h2 id="tocS_AclGrantee">AclGrantee</h2>
<!-- backwards compatibility -->
<a id="schemaaclgrantee"></a>
<a id="schema_AclGrantee"></a>
<a id="tocSaclgrantee"></a>
<a id="tocsaclgrantee"></a>

```json
{
  "id": {},
  "uri": {}
}
```

You specify each grantee as a type-value pair using one of these types. You can specify only one type of grantee. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAcl.html">PutBucketAcl</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|uri|object|false|none|none|

<h2 id="tocS_AclPermission">AclPermission</h2>
<!-- backwards compatibility -->
<a id="schemaaclpermission"></a>
<a id="schema_AclPermission"></a>
<a id="tocSaclpermission"></a>
<a id="tocsaclpermission"></a>

```json
"READ"
```

<h2 id="tocS_ResourceArn">ResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceArn"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"string"
```

<h2 id="tocS_SharedViaList">SharedViaList</h2>
<!-- backwards compatibility -->
<a id="schemasharedvialist"></a>
<a id="schema_SharedViaList"></a>
<a id="tocSsharedvialist"></a>
<a id="tocssharedvialist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AnalyzedResource">AnalyzedResource</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzedresource"></a>
<a id="schema_AnalyzedResource"></a>
<a id="tocSanalyzedresource"></a>
<a id="tocsanalyzedresource"></a>

```json
{
  "resourceArn": {},
  "resourceType": {},
  "createdAt": {},
  "analyzedAt": {},
  "updatedAt": {},
  "isPublic": {},
  "actions": {},
  "sharedVia": {},
  "status": {},
  "resourceOwnerAccount": {},
  "error": {}
}
```

Contains details about the analyzed resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|
|resourceType|object|true|none|none|
|createdAt|object|true|none|none|
|analyzedAt|object|true|none|none|
|updatedAt|object|true|none|none|
|isPublic|object|true|none|none|
|actions|object|false|none|none|
|sharedVia|object|false|none|none|
|status|object|false|none|none|
|resourceOwnerAccount|object|true|none|none|
|error|object|false|none|none|

<h2 id="tocS_AnalyzedResourceSummary">AnalyzedResourceSummary</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzedresourcesummary"></a>
<a id="schema_AnalyzedResourceSummary"></a>
<a id="tocSanalyzedresourcesummary"></a>
<a id="tocsanalyzedresourcesummary"></a>

```json
{
  "resourceArn": {},
  "resourceOwnerAccount": {},
  "resourceType": {}
}
```

Contains the ARN of the analyzed resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|
|resourceOwnerAccount|object|true|none|none|
|resourceType|object|true|none|none|

<h2 id="tocS_AnalyzedResourcesList">AnalyzedResourcesList</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzedresourceslist"></a>
<a id="schema_AnalyzedResourcesList"></a>
<a id="tocSanalyzedresourceslist"></a>
<a id="tocsanalyzedresourceslist"></a>

```json
[
  {
    "resourceArn": {},
    "resourceOwnerAccount": {},
    "resourceType": {}
  }
]
```

<h2 id="tocS_AnalyzerStatus">AnalyzerStatus</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzerstatus"></a>
<a id="schema_AnalyzerStatus"></a>
<a id="tocSanalyzerstatus"></a>
<a id="tocsanalyzerstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
"string"
```

<h2 id="tocS_Type">Type</h2>
<!-- backwards compatibility -->
<a id="schematype"></a>
<a id="schema_Type"></a>
<a id="tocStype"></a>
<a id="tocstype"></a>

```json
"ACCOUNT"
```

<h2 id="tocS_TagsMap">TagsMap</h2>
<!-- backwards compatibility -->
<a id="schematagsmap"></a>
<a id="schema_TagsMap"></a>
<a id="tocStagsmap"></a>
<a id="tocstagsmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String](#schemastring)|false|none|none|

<h2 id="tocS_StatusReason">StatusReason</h2>
<!-- backwards compatibility -->
<a id="schemastatusreason"></a>
<a id="schema_StatusReason"></a>
<a id="tocSstatusreason"></a>
<a id="tocsstatusreason"></a>

```json
{
  "code": {}
}
```

Provides more details about the current status of the analyzer. For example, if the creation for the analyzer fails, a <code>Failed</code> status is returned. For an analyzer with organization as the type, this failure can be due to an issue with creating the service-linked roles required in the member accounts of the Amazon Web Services organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|object|true|none|none|

<h2 id="tocS_AnalyzerSummary">AnalyzerSummary</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzersummary"></a>
<a id="schema_AnalyzerSummary"></a>
<a id="tocSanalyzersummary"></a>
<a id="tocsanalyzersummary"></a>

```json
{
  "arn": {},
  "name": {},
  "type": {},
  "createdAt": {},
  "lastResourceAnalyzed": {},
  "lastResourceAnalyzedAt": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "status": {},
  "statusReason": {
    "code": {}
  }
}
```

Contains information about the analyzer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|name|object|true|none|none|
|type|object|true|none|none|
|createdAt|object|true|none|none|
|lastResourceAnalyzed|object|false|none|none|
|lastResourceAnalyzedAt|object|false|none|none|
|tags|object|false|none|none|
|status|object|true|none|none|
|statusReason|object|false|none|none|

<h2 id="tocS_AnalyzersList">AnalyzersList</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzerslist"></a>
<a id="schema_AnalyzersList"></a>
<a id="tocSanalyzerslist"></a>
<a id="tocsanalyzerslist"></a>

```json
[
  {
    "arn": {},
    "name": {},
    "type": {},
    "createdAt": {},
    "lastResourceAnalyzed": {},
    "lastResourceAnalyzedAt": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "status": {},
    "statusReason": {
      "code": {}
    }
  }
]
```

<h2 id="tocS_ApplyArchiveRuleRequest">ApplyArchiveRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapplyarchiverulerequest"></a>
<a id="schema_ApplyArchiveRuleRequest"></a>
<a id="tocSapplyarchiverulerequest"></a>
<a id="tocsapplyarchiverulerequest"></a>

```json
{
  "analyzerArn": {},
  "ruleName": {},
  "clientToken": {}
}
```

Retroactively applies an archive rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyzerArn|object|true|none|none|
|ruleName|object|true|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_FilterCriteriaMap">FilterCriteriaMap</h2>
<!-- backwards compatibility -->
<a id="schemafiltercriteriamap"></a>
<a id="schema_FilterCriteriaMap"></a>
<a id="tocSfiltercriteriamap"></a>
<a id="tocsfiltercriteriamap"></a>

```json
{
  "property1": {
    "eq": {},
    "neq": {},
    "contains": {},
    "exists": {}
  },
  "property2": {
    "eq": {},
    "neq": {},
    "contains": {},
    "exists": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Criterion](#schemacriterion)|false|none|The criteria to use in the filter that defines the archive rule. For more information on available filter keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">IAM Access Analyzer filter keys</a>.|

<h2 id="tocS_ArchiveRuleSummary">ArchiveRuleSummary</h2>
<!-- backwards compatibility -->
<a id="schemaarchiverulesummary"></a>
<a id="schema_ArchiveRuleSummary"></a>
<a id="tocSarchiverulesummary"></a>
<a id="tocsarchiverulesummary"></a>

```json
{
  "ruleName": {},
  "filter": {
    "property1": {
      "eq": {},
      "neq": {},
      "contains": {},
      "exists": {}
    },
    "property2": {
      "eq": {},
      "neq": {},
      "contains": {},
      "exists": {}
    }
  },
  "createdAt": {},
  "updatedAt": {}
}
```

Contains information about an archive rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ruleName|object|true|none|none|
|filter|object|true|none|none|
|createdAt|object|true|none|none|
|updatedAt|object|true|none|none|

<h2 id="tocS_ArchiveRulesList">ArchiveRulesList</h2>
<!-- backwards compatibility -->
<a id="schemaarchiveruleslist"></a>
<a id="schema_ArchiveRulesList"></a>
<a id="tocSarchiveruleslist"></a>
<a id="tocsarchiveruleslist"></a>

```json
[
  {
    "ruleName": {},
    "filter": {
      "property1": {
        "eq": {},
        "neq": {},
        "contains": {},
        "exists": {}
      },
      "property2": {
        "eq": {},
        "neq": {},
        "contains": {},
        "exists": {}
      }
    },
    "createdAt": {},
    "updatedAt": {}
  }
]
```

<h2 id="tocS_JobId">JobId</h2>
<!-- backwards compatibility -->
<a id="schemajobid"></a>
<a id="schema_JobId"></a>
<a id="tocSjobid"></a>
<a id="tocsjobid"></a>

```json
"string"
```

<h2 id="tocS_CancelPolicyGenerationRequest">CancelPolicyGenerationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelpolicygenerationrequest"></a>
<a id="schema_CancelPolicyGenerationRequest"></a>
<a id="tocScancelpolicygenerationrequest"></a>
<a id="tocscancelpolicygenerationrequest"></a>

```json
{}
```

<h2 id="tocS_CloudTrailArn">CloudTrailArn</h2>
<!-- backwards compatibility -->
<a id="schemacloudtrailarn"></a>
<a id="schema_CloudTrailArn"></a>
<a id="tocScloudtrailarn"></a>
<a id="tocscloudtrailarn"></a>

```json
"string"
```

<h2 id="tocS_CloudTrailDetails">CloudTrailDetails</h2>
<!-- backwards compatibility -->
<a id="schemacloudtraildetails"></a>
<a id="schema_CloudTrailDetails"></a>
<a id="tocScloudtraildetails"></a>
<a id="tocscloudtraildetails"></a>

```json
{
  "trails": {},
  "accessRole": {},
  "startTime": {},
  "endTime": {}
}
```

Contains information about CloudTrail access.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trails|object|true|none|none|
|accessRole|object|true|none|none|
|startTime|object|true|none|none|
|endTime|object|false|none|none|

<h2 id="tocS_TrailPropertiesList">TrailPropertiesList</h2>
<!-- backwards compatibility -->
<a id="schematrailpropertieslist"></a>
<a id="schema_TrailPropertiesList"></a>
<a id="tocStrailpropertieslist"></a>
<a id="tocstrailpropertieslist"></a>

```json
[
  {
    "cloudTrailArn": {},
    "regions": {},
    "allRegions": {}
  }
]
```

<h2 id="tocS_CloudTrailProperties">CloudTrailProperties</h2>
<!-- backwards compatibility -->
<a id="schemacloudtrailproperties"></a>
<a id="schema_CloudTrailProperties"></a>
<a id="tocScloudtrailproperties"></a>
<a id="tocscloudtrailproperties"></a>

```json
{
  "trailProperties": {},
  "startTime": {},
  "endTime": {}
}
```

Contains information about CloudTrail access.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trailProperties|object|true|none|none|
|startTime|object|true|none|none|
|endTime|object|true|none|none|

<h2 id="tocS_EbsSnapshotConfiguration">EbsSnapshotConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaebssnapshotconfiguration"></a>
<a id="schema_EbsSnapshotConfiguration"></a>
<a id="tocSebssnapshotconfiguration"></a>
<a id="tocsebssnapshotconfiguration"></a>

```json
{
  "userIds": {},
  "groups": {},
  "kmsKeyId": {}
}
```

The proposed access control configuration for an Amazon EBS volume snapshot. You can propose a configuration for a new Amazon EBS volume snapshot or an Amazon EBS volume snapshot that you own by specifying the user IDs, groups, and optional KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySnapshotAttribute.html">ModifySnapshotAttribute</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userIds|object|false|none|none|
|groups|object|false|none|none|
|kmsKeyId|object|false|none|none|

<h2 id="tocS_EcrRepositoryConfiguration">EcrRepositoryConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaecrrepositoryconfiguration"></a>
<a id="schema_EcrRepositoryConfiguration"></a>
<a id="tocSecrrepositoryconfiguration"></a>
<a id="tocsecrrepositoryconfiguration"></a>

```json
{
  "repositoryPolicy": {}
}
```

<p>The proposed access control configuration for an Amazon ECR repository. You can propose a configuration for a new Amazon ECR repository or an existing Amazon ECR repository that you own by specifying the Amazon ECR policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_Repository.html">Repository</a>.</p> <ul> <li> <p>If the configuration is for an existing Amazon ECR repository and you do not specify the Amazon ECR policy, then the access preview uses the existing Amazon ECR policy for the repository.</p> </li> <li> <p>If the access preview is for a new resource and you do not specify the policy, then the access preview assumes an Amazon ECR repository without a policy.</p> </li> <li> <p>To propose deletion of an existing Amazon ECR repository policy, you can specify an empty string for the Amazon ECR policy.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryPolicy|object|false|none|none|

<h2 id="tocS_IamRoleConfiguration">IamRoleConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaiamroleconfiguration"></a>
<a id="schema_IamRoleConfiguration"></a>
<a id="tocSiamroleconfiguration"></a>
<a id="tocsiamroleconfiguration"></a>

```json
{
  "trustPolicy": {}
}
```

The proposed access control configuration for an IAM role. You can propose a configuration for a new IAM role or an existing IAM role that you own by specifying the trust policy. If the configuration is for a new IAM role, you must specify the trust policy. If the configuration is for an existing IAM role that you own and you do not propose the trust policy, the access preview uses the existing trust policy for the role. The proposed trust policy cannot be an empty string. For more information about role trust policy limits, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trustPolicy|object|false|none|none|

<h2 id="tocS_EfsFileSystemConfiguration">EfsFileSystemConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaefsfilesystemconfiguration"></a>
<a id="schema_EfsFileSystemConfiguration"></a>
<a id="tocSefsfilesystemconfiguration"></a>
<a id="tocsefsfilesystemconfiguration"></a>

```json
{
  "fileSystemPolicy": {}
}
```

<p>The proposed access control configuration for an Amazon EFS file system. You can propose a configuration for a new Amazon EFS file system or an existing Amazon EFS file system that you own by specifying the Amazon EFS policy. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/using-fs.html">Using file systems in Amazon EFS</a>.</p> <ul> <li> <p>If the configuration is for an existing Amazon EFS file system and you do not specify the Amazon EFS policy, then the access preview uses the existing Amazon EFS policy for the file system.</p> </li> <li> <p>If the access preview is for a new resource and you do not specify the policy, then the access preview assumes an Amazon EFS file system without a policy.</p> </li> <li> <p>To propose deletion of an existing Amazon EFS file system policy, you can specify an empty string for the Amazon EFS policy.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileSystemPolicy|object|false|none|none|

<h2 id="tocS_KmsKeyConfiguration">KmsKeyConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyconfiguration"></a>
<a id="schema_KmsKeyConfiguration"></a>
<a id="tocSkmskeyconfiguration"></a>
<a id="tocskmskeyconfiguration"></a>

```json
{
  "keyPolicies": {
    "property1": "string",
    "property2": "string"
  },
  "grants": {}
}
```

<p>Proposed access control configuration for a KMS key. You can propose a configuration for a new KMS key or an existing KMS key that you own by specifying the key policy and KMS grant configuration. If the configuration is for an existing key and you do not specify the key policy, the access preview uses the existing policy for the key. If the access preview is for a new resource and you do not specify the key policy, then the access preview uses the default key policy. The proposed key policy cannot be an empty string. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default">Default key policy</a>. For more information about key policy limits, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/resource-limits.html">Resource quotas</a>.</p> <p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyPolicies|object|false|none|none|
|grants|object|false|none|none|

<h2 id="tocS_RdsDbClusterSnapshotConfiguration">RdsDbClusterSnapshotConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemardsdbclustersnapshotconfiguration"></a>
<a id="schema_RdsDbClusterSnapshotConfiguration"></a>
<a id="tocSrdsdbclustersnapshotconfiguration"></a>
<a id="tocsrdsdbclustersnapshotconfiguration"></a>

```json
{
  "attributes": {
    "property1": {
      "accountIds": {}
    },
    "property2": {
      "accountIds": {}
    }
  },
  "kmsKeyId": {}
}
```

The proposed access control configuration for an Amazon RDS DB cluster snapshot. You can propose a configuration for a new Amazon RDS DB cluster snapshot or an Amazon RDS DB cluster snapshot that you own by specifying the <code>RdsDbClusterSnapshotAttributeValue</code> and optional KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterSnapshotAttribute.html">ModifyDBClusterSnapshotAttribute</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|
|kmsKeyId|object|false|none|none|

<h2 id="tocS_RdsDbSnapshotConfiguration">RdsDbSnapshotConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemardsdbsnapshotconfiguration"></a>
<a id="schema_RdsDbSnapshotConfiguration"></a>
<a id="tocSrdsdbsnapshotconfiguration"></a>
<a id="tocsrdsdbsnapshotconfiguration"></a>

```json
{
  "attributes": {
    "property1": {
      "accountIds": {}
    },
    "property2": {
      "accountIds": {}
    }
  },
  "kmsKeyId": {}
}
```

The proposed access control configuration for an Amazon RDS DB snapshot. You can propose a configuration for a new Amazon RDS DB snapshot or an Amazon RDS DB snapshot that you own by specifying the <code>RdsDbSnapshotAttributeValue</code> and optional KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSnapshotAttribute.html">ModifyDBSnapshotAttribute</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|
|kmsKeyId|object|false|none|none|

<h2 id="tocS_SecretsManagerSecretConfiguration">SecretsManagerSecretConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasecretsmanagersecretconfiguration"></a>
<a id="schema_SecretsManagerSecretConfiguration"></a>
<a id="tocSsecretsmanagersecretconfiguration"></a>
<a id="tocssecretsmanagersecretconfiguration"></a>

```json
{
  "kmsKeyId": {},
  "secretPolicy": {}
}
```

<p>The configuration for a Secrets Manager secret. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html">CreateSecret</a>.</p> <p>You can propose a configuration for a new secret or an existing secret that you own by specifying the secret policy and optional KMS encryption key. If the configuration is for an existing secret and you do not specify the secret policy, the access preview uses the existing policy for the secret. If the access preview is for a new resource and you do not specify the policy, the access preview assumes a secret without a policy. To propose deletion of an existing policy, you can specify an empty string. If the proposed configuration is for a new secret and you do not specify the KMS key ID, the access preview uses the Amazon Web Services managed key <code>aws/secretsmanager</code>. If you specify an empty string for the KMS key ID, the access preview uses the Amazon Web Services managed key of the Amazon Web Services account. For more information about secret policy limits, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_limits.html">Quotas for Secrets Manager.</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kmsKeyId|object|false|none|none|
|secretPolicy|object|false|none|none|

<h2 id="tocS_S3BucketConfiguration">S3BucketConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketconfiguration"></a>
<a id="schema_S3BucketConfiguration"></a>
<a id="tocSs3bucketconfiguration"></a>
<a id="tocss3bucketconfiguration"></a>

```json
{
  "bucketPolicy": {},
  "bucketAclGrants": {},
  "bucketPublicAccessBlock": {
    "ignorePublicAcls": {},
    "restrictPublicBuckets": {}
  },
  "accessPoints": {
    "property1": {
      "accessPointPolicy": {},
      "publicAccessBlock": {
        "ignorePublicAcls": {},
        "restrictPublicBuckets": {}
      },
      "networkOrigin": {
        "vpcConfiguration": {
          "vpcId": {}
        },
        "internetConfiguration": {}
      }
    },
    "property2": {
      "accessPointPolicy": {},
      "publicAccessBlock": {
        "ignorePublicAcls": {},
        "restrictPublicBuckets": {}
      },
      "networkOrigin": {
        "vpcConfiguration": {
          "vpcId": {}
        },
        "internetConfiguration": {}
      }
    }
  }
}
```

Proposed access control configuration for an Amazon S3 bucket. You can propose a configuration for a new Amazon S3 bucket or an existing Amazon S3 bucket that you own by specifying the Amazon S3 bucket policy, bucket ACLs, bucket BPA settings, Amazon S3 access points, and multi-region access points attached to the bucket. If the configuration is for an existing Amazon S3 bucket and you do not specify the Amazon S3 bucket policy, the access preview uses the existing policy attached to the bucket. If the access preview is for a new resource and you do not specify the Amazon S3 bucket policy, the access preview assumes a bucket without a policy. To propose deletion of an existing bucket policy, you can specify an empty string. For more information about bucket policy limits, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html">Bucket Policy Examples</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketPolicy|object|false|none|none|
|bucketAclGrants|object|false|none|none|
|bucketPublicAccessBlock|object|false|none|none|
|accessPoints|object|false|none|none|

<h2 id="tocS_SnsTopicConfiguration">SnsTopicConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasnstopicconfiguration"></a>
<a id="schema_SnsTopicConfiguration"></a>
<a id="tocSsnstopicconfiguration"></a>
<a id="tocssnstopicconfiguration"></a>

```json
{
  "topicPolicy": {}
}
```

The proposed access control configuration for an Amazon SNS topic. You can propose a configuration for a new Amazon SNS topic or an existing Amazon SNS topic that you own by specifying the policy. If the configuration is for an existing Amazon SNS topic and you do not specify the Amazon SNS policy, then the access preview uses the existing Amazon SNS policy for the topic. If the access preview is for a new resource and you do not specify the policy, then the access preview assumes an Amazon SNS topic without a policy. To propose deletion of an existing Amazon SNS topic policy, you can specify an empty string for the Amazon SNS policy. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_Topic.html">Topic</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topicPolicy|object|false|none|none|

<h2 id="tocS_SqsQueueConfiguration">SqsQueueConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasqsqueueconfiguration"></a>
<a id="schema_SqsQueueConfiguration"></a>
<a id="tocSsqsqueueconfiguration"></a>
<a id="tocssqsqueueconfiguration"></a>

```json
{
  "queuePolicy": {}
}
```

The proposed access control configuration for an Amazon SQS queue. You can propose a configuration for a new Amazon SQS queue or an existing Amazon SQS queue that you own by specifying the Amazon SQS policy. If the configuration is for an existing Amazon SQS queue and you do not specify the Amazon SQS policy, the access preview uses the existing Amazon SQS policy for the queue. If the access preview is for a new resource and you do not specify the policy, the access preview assumes an Amazon SQS queue without a policy. To propose deletion of an existing Amazon SQS queue policy, you can specify an empty string for the Amazon SQS policy. For more information about Amazon SQS policy limits, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-policies.html">Quotas related to policies</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queuePolicy|object|false|none|none|

<h2 id="tocS_ConfigurationsMapKey">ConfigurationsMapKey</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationsmapkey"></a>
<a id="schema_ConfigurationsMapKey"></a>
<a id="tocSconfigurationsmapkey"></a>
<a id="tocsconfigurationsmapkey"></a>

```json
"string"
```

<h2 id="tocS_CreateAccessPreviewRequest">CreateAccessPreviewRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccesspreviewrequest"></a>
<a id="schema_CreateAccessPreviewRequest"></a>
<a id="tocScreateaccesspreviewrequest"></a>
<a id="tocscreateaccesspreviewrequest"></a>

```json
{
  "analyzerArn": {},
  "configurations": {
    "property1": {
      "ebsSnapshot": {
        "userIds": {},
        "groups": {},
        "kmsKeyId": {}
      },
      "ecrRepository": {
        "repositoryPolicy": {}
      },
      "iamRole": {
        "trustPolicy": {}
      },
      "efsFileSystem": {
        "fileSystemPolicy": {}
      },
      "kmsKey": {
        "keyPolicies": {
          "property1": "string",
          "property2": "string"
        },
        "grants": {}
      },
      "rdsDbClusterSnapshot": {
        "attributes": {
          "property1": {
            "accountIds": {}
          },
          "property2": {
            "accountIds": {}
          }
        },
        "kmsKeyId": {}
      },
      "rdsDbSnapshot": {
        "attributes": {
          "property1": {
            "accountIds": {}
          },
          "property2": {
            "accountIds": {}
          }
        },
        "kmsKeyId": {}
      },
      "secretsManagerSecret": {
        "kmsKeyId": {},
        "secretPolicy": {}
      },
      "s3Bucket": {
        "bucketPolicy": {},
        "bucketAclGrants": {},
        "bucketPublicAccessBlock": {
          "ignorePublicAcls": {},
          "restrictPublicBuckets": {}
        },
        "accessPoints": {
          "property1": {
            "accessPointPolicy": {},
            "publicAccessBlock": {
              "ignorePublicAcls": {},
              "restrictPublicBuckets": {}
            },
            "networkOrigin": {
              "vpcConfiguration": {
                "vpcId": {}
              },
              "internetConfiguration": {}
            }
          },
          "property2": {
            "accessPointPolicy": {},
            "publicAccessBlock": {
              "ignorePublicAcls": {},
              "restrictPublicBuckets": {}
            },
            "networkOrigin": {
              "vpcConfiguration": {
                "vpcId": {}
              },
              "internetConfiguration": {}
            }
          }
        }
      },
      "snsTopic": {
        "topicPolicy": {}
      },
      "sqsQueue": {
        "queuePolicy": {}
      }
    },
    "property2": {
      "ebsSnapshot": {
        "userIds": {},
        "groups": {},
        "kmsKeyId": {}
      },
      "ecrRepository": {
        "repositoryPolicy": {}
      },
      "iamRole": {
        "trustPolicy": {}
      },
      "efsFileSystem": {
        "fileSystemPolicy": {}
      },
      "kmsKey": {
        "keyPolicies": {
          "property1": "string",
          "property2": "string"
        },
        "grants": {}
      },
      "rdsDbClusterSnapshot": {
        "attributes": {
          "property1": {
            "accountIds": {}
          },
          "property2": {
            "accountIds": {}
          }
        },
        "kmsKeyId": {}
      },
      "rdsDbSnapshot": {
        "attributes": {
          "property1": {
            "accountIds": {}
          },
          "property2": {
            "accountIds": {}
          }
        },
        "kmsKeyId": {}
      },
      "secretsManagerSecret": {
        "kmsKeyId": {},
        "secretPolicy": {}
      },
      "s3Bucket": {
        "bucketPolicy": {},
        "bucketAclGrants": {},
        "bucketPublicAccessBlock": {
          "ignorePublicAcls": {},
          "restrictPublicBuckets": {}
        },
        "accessPoints": {
          "property1": {
            "accessPointPolicy": {},
            "publicAccessBlock": {
              "ignorePublicAcls": {},
              "restrictPublicBuckets": {}
            },
            "networkOrigin": {
              "vpcConfiguration": {
                "vpcId": {}
              },
              "internetConfiguration": {}
            }
          },
          "property2": {
            "accessPointPolicy": {},
            "publicAccessBlock": {
              "ignorePublicAcls": {},
              "restrictPublicBuckets": {}
            },
            "networkOrigin": {
              "vpcConfiguration": {
                "vpcId": {}
              },
              "internetConfiguration": {}
            }
          }
        }
      },
      "snsTopic": {
        "topicPolicy": {}
      },
      "sqsQueue": {
        "queuePolicy": {}
      }
    }
  },
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyzerArn|object|true|none|none|
|configurations|object|true|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_InlineArchiveRulesList">InlineArchiveRulesList</h2>
<!-- backwards compatibility -->
<a id="schemainlinearchiveruleslist"></a>
<a id="schema_InlineArchiveRulesList"></a>
<a id="tocSinlinearchiveruleslist"></a>
<a id="tocsinlinearchiveruleslist"></a>

```json
[
  {
    "ruleName": {},
    "filter": {
      "property1": {
        "eq": {},
        "neq": {},
        "contains": {},
        "exists": {}
      },
      "property2": {
        "eq": {},
        "neq": {},
        "contains": {},
        "exists": {}
      }
    }
  }
]
```

<h2 id="tocS_CreateAnalyzerRequest">CreateAnalyzerRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateanalyzerrequest"></a>
<a id="schema_CreateAnalyzerRequest"></a>
<a id="tocScreateanalyzerrequest"></a>
<a id="tocscreateanalyzerrequest"></a>

```json
{
  "analyzerName": {},
  "type": {},
  "archiveRules": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "clientToken": {}
}
```

Creates an analyzer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyzerName|object|true|none|none|
|type|object|true|none|none|
|archiveRules|object|false|none|none|
|tags|object|false|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_CreateArchiveRuleRequest">CreateArchiveRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatearchiverulerequest"></a>
<a id="schema_CreateArchiveRuleRequest"></a>
<a id="tocScreatearchiverulerequest"></a>
<a id="tocscreatearchiverulerequest"></a>

```json
{
  "ruleName": {},
  "filter": {
    "property1": {
      "eq": {},
      "neq": {},
      "contains": {},
      "exists": {}
    },
    "property2": {
      "eq": {},
      "neq": {},
      "contains": {},
      "exists": {}
    }
  },
  "clientToken": {}
}
```

Creates an archive rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ruleName|object|true|none|none|
|filter|object|true|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_ValueList">ValueList</h2>
<!-- backwards compatibility -->
<a id="schemavaluelist"></a>
<a id="schema_ValueList"></a>
<a id="tocSvaluelist"></a>
<a id="tocsvaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DeleteAnalyzerRequest">DeleteAnalyzerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteanalyzerrequest"></a>
<a id="schema_DeleteAnalyzerRequest"></a>
<a id="tocSdeleteanalyzerrequest"></a>
<a id="tocsdeleteanalyzerrequest"></a>

```json
{}
```

Deletes an analyzer.

<h2 id="tocS_DeleteArchiveRuleRequest">DeleteArchiveRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletearchiverulerequest"></a>
<a id="schema_DeleteArchiveRuleRequest"></a>
<a id="tocSdeletearchiverulerequest"></a>
<a id="tocsdeletearchiverulerequest"></a>

```json
{}
```

Deletes an archive rule.

<h2 id="tocS_EbsGroup">EbsGroup</h2>
<!-- backwards compatibility -->
<a id="schemaebsgroup"></a>
<a id="schema_EbsGroup"></a>
<a id="tocSebsgroup"></a>
<a id="tocsebsgroup"></a>

```json
"string"
```

<h2 id="tocS_EbsGroupList">EbsGroupList</h2>
<!-- backwards compatibility -->
<a id="schemaebsgrouplist"></a>
<a id="schema_EbsGroupList"></a>
<a id="tocSebsgrouplist"></a>
<a id="tocsebsgrouplist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_EbsUserIdList">EbsUserIdList</h2>
<!-- backwards compatibility -->
<a id="schemaebsuseridlist"></a>
<a id="schema_EbsUserIdList"></a>
<a id="tocSebsuseridlist"></a>
<a id="tocsebsuseridlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_EbsSnapshotDataEncryptionKeyId">EbsSnapshotDataEncryptionKeyId</h2>
<!-- backwards compatibility -->
<a id="schemaebssnapshotdataencryptionkeyid"></a>
<a id="schema_EbsSnapshotDataEncryptionKeyId"></a>
<a id="tocSebssnapshotdataencryptionkeyid"></a>
<a id="tocsebssnapshotdataencryptionkeyid"></a>

```json
"string"
```

<h2 id="tocS_EbsUserId">EbsUserId</h2>
<!-- backwards compatibility -->
<a id="schemaebsuserid"></a>
<a id="schema_EbsUserId"></a>
<a id="tocSebsuserid"></a>
<a id="tocsebsuserid"></a>

```json
"string"
```

<h2 id="tocS_EcrRepositoryPolicy">EcrRepositoryPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaecrrepositorypolicy"></a>
<a id="schema_EcrRepositoryPolicy"></a>
<a id="tocSecrrepositorypolicy"></a>
<a id="tocsecrrepositorypolicy"></a>

```json
"string"
```

<h2 id="tocS_EfsFileSystemPolicy">EfsFileSystemPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaefsfilesystempolicy"></a>
<a id="schema_EfsFileSystemPolicy"></a>
<a id="tocSefsfilesystempolicy"></a>
<a id="tocsefsfilesystempolicy"></a>

```json
"string"
```

<h2 id="tocS_Finding">Finding</h2>
<!-- backwards compatibility -->
<a id="schemafinding"></a>
<a id="schema_Finding"></a>
<a id="tocSfinding"></a>
<a id="tocsfinding"></a>

```json
{
  "id": {},
  "principal": {
    "property1": "string",
    "property2": "string"
  },
  "action": {},
  "resource": {},
  "isPublic": {},
  "resourceType": {},
  "condition": {
    "property1": "string",
    "property2": "string"
  },
  "createdAt": {},
  "analyzedAt": {},
  "updatedAt": {},
  "status": {},
  "resourceOwnerAccount": {},
  "error": {},
  "sources": {}
}
```

Contains information about a finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|principal|object|false|none|none|
|action|object|false|none|none|
|resource|object|false|none|none|
|isPublic|object|false|none|none|
|resourceType|object|true|none|none|
|condition|object|true|none|none|
|createdAt|object|true|none|none|
|analyzedAt|object|true|none|none|
|updatedAt|object|true|none|none|
|status|object|true|none|none|
|resourceOwnerAccount|object|true|none|none|
|error|object|false|none|none|
|sources|object|false|none|none|

<h2 id="tocS_FindingIdList">FindingIdList</h2>
<!-- backwards compatibility -->
<a id="schemafindingidlist"></a>
<a id="schema_FindingIdList"></a>
<a id="tocSfindingidlist"></a>
<a id="tocsfindingidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FindingSourceType">FindingSourceType</h2>
<!-- backwards compatibility -->
<a id="schemafindingsourcetype"></a>
<a id="schema_FindingSourceType"></a>
<a id="tocSfindingsourcetype"></a>
<a id="tocsfindingsourcetype"></a>

```json
"POLICY"
```

<h2 id="tocS_FindingSourceDetail">FindingSourceDetail</h2>
<!-- backwards compatibility -->
<a id="schemafindingsourcedetail"></a>
<a id="schema_FindingSourceDetail"></a>
<a id="tocSfindingsourcedetail"></a>
<a id="tocsfindingsourcedetail"></a>

```json
{
  "accessPointArn": {},
  "accessPointAccount": {}
}
```

Includes details about how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessPointArn|object|false|none|none|
|accessPointAccount|object|false|none|none|

<h2 id="tocS_FindingSource">FindingSource</h2>
<!-- backwards compatibility -->
<a id="schemafindingsource"></a>
<a id="schema_FindingSource"></a>
<a id="tocSfindingsource"></a>
<a id="tocsfindingsource"></a>

```json
{
  "type": {},
  "detail": {
    "accessPointArn": {},
    "accessPointAccount": {}
  }
}
```

The source of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|true|none|none|
|detail|object|false|none|none|

<h2 id="tocS_FindingStatusUpdate">FindingStatusUpdate</h2>
<!-- backwards compatibility -->
<a id="schemafindingstatusupdate"></a>
<a id="schema_FindingStatusUpdate"></a>
<a id="tocSfindingstatusupdate"></a>
<a id="tocsfindingstatusupdate"></a>

```json
"ACTIVE"
```

<h2 id="tocS_FindingSummary">FindingSummary</h2>
<!-- backwards compatibility -->
<a id="schemafindingsummary"></a>
<a id="schema_FindingSummary"></a>
<a id="tocSfindingsummary"></a>
<a id="tocsfindingsummary"></a>

```json
{
  "id": {},
  "principal": {
    "property1": "string",
    "property2": "string"
  },
  "action": {},
  "resource": {},
  "isPublic": {},
  "resourceType": {},
  "condition": {
    "property1": "string",
    "property2": "string"
  },
  "createdAt": {},
  "analyzedAt": {},
  "updatedAt": {},
  "status": {},
  "resourceOwnerAccount": {},
  "error": {},
  "sources": {}
}
```

Contains information about a finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|principal|object|false|none|none|
|action|object|false|none|none|
|resource|object|false|none|none|
|isPublic|object|false|none|none|
|resourceType|object|true|none|none|
|condition|object|true|none|none|
|createdAt|object|true|none|none|
|analyzedAt|object|true|none|none|
|updatedAt|object|true|none|none|
|status|object|true|none|none|
|resourceOwnerAccount|object|true|none|none|
|error|object|false|none|none|
|sources|object|false|none|none|

<h2 id="tocS_FindingsList">FindingsList</h2>
<!-- backwards compatibility -->
<a id="schemafindingslist"></a>
<a id="schema_FindingsList"></a>
<a id="tocSfindingslist"></a>
<a id="tocsfindingslist"></a>

```json
[
  {
    "id": {},
    "principal": {
      "property1": "string",
      "property2": "string"
    },
    "action": {},
    "resource": {},
    "isPublic": {},
    "resourceType": {},
    "condition": {
      "property1": "string",
      "property2": "string"
    },
    "createdAt": {},
    "analyzedAt": {},
    "updatedAt": {},
    "status": {},
    "resourceOwnerAccount": {},
    "error": {},
    "sources": {}
  }
]
```

<h2 id="tocS_GeneratedPolicy">GeneratedPolicy</h2>
<!-- backwards compatibility -->
<a id="schemageneratedpolicy"></a>
<a id="schema_GeneratedPolicy"></a>
<a id="tocSgeneratedpolicy"></a>
<a id="tocsgeneratedpolicy"></a>

```json
{
  "policy": {}
}
```

Contains the text for the generated policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|object|true|none|none|

<h2 id="tocS_GeneratedPolicyList">GeneratedPolicyList</h2>
<!-- backwards compatibility -->
<a id="schemageneratedpolicylist"></a>
<a id="schema_GeneratedPolicyList"></a>
<a id="tocSgeneratedpolicylist"></a>
<a id="tocsgeneratedpolicylist"></a>

```json
[
  {
    "policy": {}
  }
]
```

<h2 id="tocS_GeneratedPolicyProperties">GeneratedPolicyProperties</h2>
<!-- backwards compatibility -->
<a id="schemageneratedpolicyproperties"></a>
<a id="schema_GeneratedPolicyProperties"></a>
<a id="tocSgeneratedpolicyproperties"></a>
<a id="tocsgeneratedpolicyproperties"></a>

```json
{
  "isComplete": {},
  "principalArn": {},
  "cloudTrailProperties": {
    "trailProperties": {},
    "startTime": {},
    "endTime": {}
  }
}
```

Contains the generated policy details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isComplete|object|false|none|none|
|principalArn|object|true|none|none|
|cloudTrailProperties|object|false|none|none|

<h2 id="tocS_GeneratedPolicyResult">GeneratedPolicyResult</h2>
<!-- backwards compatibility -->
<a id="schemageneratedpolicyresult"></a>
<a id="schema_GeneratedPolicyResult"></a>
<a id="tocSgeneratedpolicyresult"></a>
<a id="tocsgeneratedpolicyresult"></a>

```json
{
  "properties": null,
  "generatedPolicies": {}
}
```

Contains the text for the generated policy and its details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|properties|object|true|none|A <code>GeneratedPolicyProperties</code> object that contains properties of the generated policy.|
|generatedPolicies|object|false|none|none|

<h2 id="tocS_GetAccessPreviewRequest">GetAccessPreviewRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetaccesspreviewrequest"></a>
<a id="schema_GetAccessPreviewRequest"></a>
<a id="tocSgetaccesspreviewrequest"></a>
<a id="tocsgetaccesspreviewrequest"></a>

```json
{}
```

<h2 id="tocS_GetAnalyzedResourceRequest">GetAnalyzedResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetanalyzedresourcerequest"></a>
<a id="schema_GetAnalyzedResourceRequest"></a>
<a id="tocSgetanalyzedresourcerequest"></a>
<a id="tocsgetanalyzedresourcerequest"></a>

```json
{}
```

Retrieves an analyzed resource.

<h2 id="tocS_GetAnalyzerRequest">GetAnalyzerRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetanalyzerrequest"></a>
<a id="schema_GetAnalyzerRequest"></a>
<a id="tocSgetanalyzerrequest"></a>
<a id="tocsgetanalyzerrequest"></a>

```json
{}
```

Retrieves an analyzer.

<h2 id="tocS_GetArchiveRuleRequest">GetArchiveRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetarchiverulerequest"></a>
<a id="schema_GetArchiveRuleRequest"></a>
<a id="tocSgetarchiverulerequest"></a>
<a id="tocsgetarchiverulerequest"></a>

```json
{}
```

Retrieves an archive rule.

<h2 id="tocS_GetFindingRequest">GetFindingRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfindingrequest"></a>
<a id="schema_GetFindingRequest"></a>
<a id="tocSgetfindingrequest"></a>
<a id="tocsgetfindingrequest"></a>

```json
{}
```

Retrieves a finding.

<h2 id="tocS_GetGeneratedPolicyRequest">GetGeneratedPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetgeneratedpolicyrequest"></a>
<a id="schema_GetGeneratedPolicyRequest"></a>
<a id="tocSgetgeneratedpolicyrequest"></a>
<a id="tocsgetgeneratedpolicyrequest"></a>

```json
{}
```

<h2 id="tocS_JobDetails">JobDetails</h2>
<!-- backwards compatibility -->
<a id="schemajobdetails"></a>
<a id="schema_JobDetails"></a>
<a id="tocSjobdetails"></a>
<a id="tocsjobdetails"></a>

```json
{
  "jobId": {},
  "status": {},
  "startedOn": {},
  "completedOn": {},
  "jobError": {
    "code": {},
    "message": {}
  }
}
```

Contains details about the policy generation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|true|none|none|
|status|object|true|none|none|
|startedOn|object|true|none|none|
|completedOn|object|false|none|none|
|jobError|object|false|none|none|

<h2 id="tocS_GranteePrincipal">GranteePrincipal</h2>
<!-- backwards compatibility -->
<a id="schemagranteeprincipal"></a>
<a id="schema_GranteePrincipal"></a>
<a id="tocSgranteeprincipal"></a>
<a id="tocsgranteeprincipal"></a>

```json
"string"
```

<h2 id="tocS_IamTrustPolicy">IamTrustPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaiamtrustpolicy"></a>
<a id="schema_IamTrustPolicy"></a>
<a id="tocSiamtrustpolicy"></a>
<a id="tocsiamtrustpolicy"></a>

```json
"string"
```

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_InternetConfiguration">InternetConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemainternetconfiguration"></a>
<a id="schema_InternetConfiguration"></a>
<a id="tocSinternetconfiguration"></a>
<a id="tocsinternetconfiguration"></a>

```json
{}
```

This configuration sets the network origin for the Amazon S3 access point or multi-region access point to <code>Internet</code>.

<h2 id="tocS_IssueCode">IssueCode</h2>
<!-- backwards compatibility -->
<a id="schemaissuecode"></a>
<a id="schema_IssueCode"></a>
<a id="tocSissuecode"></a>
<a id="tocsissuecode"></a>

```json
"string"
```

<h2 id="tocS_IssuingAccount">IssuingAccount</h2>
<!-- backwards compatibility -->
<a id="schemaissuingaccount"></a>
<a id="schema_IssuingAccount"></a>
<a id="tocSissuingaccount"></a>
<a id="tocsissuingaccount"></a>

```json
"string"
```

<h2 id="tocS_JobStatus">JobStatus</h2>
<!-- backwards compatibility -->
<a id="schemajobstatus"></a>
<a id="schema_JobStatus"></a>
<a id="tocSjobstatus"></a>
<a id="tocsjobstatus"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_JobError">JobError</h2>
<!-- backwards compatibility -->
<a id="schemajoberror"></a>
<a id="schema_JobError"></a>
<a id="tocSjoberror"></a>
<a id="tocsjoberror"></a>

```json
{
  "code": {},
  "message": {}
}
```

Contains the details about the policy generation error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|object|true|none|none|
|message|object|true|none|none|

<h2 id="tocS_JobErrorCode">JobErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemajoberrorcode"></a>
<a id="schema_JobErrorCode"></a>
<a id="tocSjoberrorcode"></a>
<a id="tocsjoberrorcode"></a>

```json
"AUTHORIZATION_ERROR"
```

<h2 id="tocS_KmsConstraintsKey">KmsConstraintsKey</h2>
<!-- backwards compatibility -->
<a id="schemakmsconstraintskey"></a>
<a id="schema_KmsConstraintsKey"></a>
<a id="tocSkmsconstraintskey"></a>
<a id="tocskmsconstraintskey"></a>

```json
"string"
```

<h2 id="tocS_KmsConstraintsValue">KmsConstraintsValue</h2>
<!-- backwards compatibility -->
<a id="schemakmsconstraintsvalue"></a>
<a id="schema_KmsConstraintsValue"></a>
<a id="tocSkmsconstraintsvalue"></a>
<a id="tocskmsconstraintsvalue"></a>

```json
"string"
```

<h2 id="tocS_KmsConstraintsMap">KmsConstraintsMap</h2>
<!-- backwards compatibility -->
<a id="schemakmsconstraintsmap"></a>
<a id="schema_KmsConstraintsMap"></a>
<a id="tocSkmsconstraintsmap"></a>
<a id="tocskmsconstraintsmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[KmsConstraintsValue](#schemakmsconstraintsvalue)|false|none|none|

<h2 id="tocS_KmsGrantOperationsList">KmsGrantOperationsList</h2>
<!-- backwards compatibility -->
<a id="schemakmsgrantoperationslist"></a>
<a id="schema_KmsGrantOperationsList"></a>
<a id="tocSkmsgrantoperationslist"></a>
<a id="tocskmsgrantoperationslist"></a>

```json
[
  "CreateGrant"
]
```

<h2 id="tocS_RetiringPrincipal">RetiringPrincipal</h2>
<!-- backwards compatibility -->
<a id="schemaretiringprincipal"></a>
<a id="schema_RetiringPrincipal"></a>
<a id="tocSretiringprincipal"></a>
<a id="tocsretiringprincipal"></a>

```json
"string"
```

<h2 id="tocS_KmsGrantConstraints">KmsGrantConstraints</h2>
<!-- backwards compatibility -->
<a id="schemakmsgrantconstraints"></a>
<a id="schema_KmsGrantConstraints"></a>
<a id="tocSkmsgrantconstraints"></a>
<a id="tocskmsgrantconstraints"></a>

```json
{
  "encryptionContextEquals": {
    "property1": "string",
    "property2": "string"
  },
  "encryptionContextSubset": {
    "property1": "string",
    "property2": "string"
  }
}
```

Use this structure to propose allowing <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> in the grant only when the operation request includes the specified <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption context</a>. You can specify only one type of encryption context. An empty map is treated as not specified. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GrantConstraints.html">GrantConstraints</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptionContextEquals|object|false|none|none|
|encryptionContextSubset|object|false|none|none|

<h2 id="tocS_KmsGrantConfiguration">KmsGrantConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemakmsgrantconfiguration"></a>
<a id="schema_KmsGrantConfiguration"></a>
<a id="tocSkmsgrantconfiguration"></a>
<a id="tocskmsgrantconfiguration"></a>

```json
{
  "operations": {},
  "granteePrincipal": {},
  "retiringPrincipal": {},
  "constraints": {
    "encryptionContextEquals": {
      "property1": "string",
      "property2": "string"
    },
    "encryptionContextSubset": {
      "property1": "string",
      "property2": "string"
    }
  },
  "issuingAccount": {}
}
```

A proposed grant configuration for a KMS key. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateGrant.html">CreateGrant</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|object|true|none|none|
|granteePrincipal|object|true|none|none|
|retiringPrincipal|object|false|none|none|
|constraints|object|false|none|none|
|issuingAccount|object|true|none|none|

<h2 id="tocS_KmsGrantConfigurationsList">KmsGrantConfigurationsList</h2>
<!-- backwards compatibility -->
<a id="schemakmsgrantconfigurationslist"></a>
<a id="schema_KmsGrantConfigurationsList"></a>
<a id="tocSkmsgrantconfigurationslist"></a>
<a id="tocskmsgrantconfigurationslist"></a>

```json
[
  {
    "operations": {},
    "granteePrincipal": {},
    "retiringPrincipal": {},
    "constraints": {
      "encryptionContextEquals": {
        "property1": "string",
        "property2": "string"
      },
      "encryptionContextSubset": {
        "property1": "string",
        "property2": "string"
      }
    },
    "issuingAccount": {}
  }
]
```

<h2 id="tocS_KmsGrantOperation">KmsGrantOperation</h2>
<!-- backwards compatibility -->
<a id="schemakmsgrantoperation"></a>
<a id="schema_KmsGrantOperation"></a>
<a id="tocSkmsgrantoperation"></a>
<a id="tocskmsgrantoperation"></a>

```json
"CreateGrant"
```

<h2 id="tocS_KmsKeyPoliciesMap">KmsKeyPoliciesMap</h2>
<!-- backwards compatibility -->
<a id="schemakmskeypoliciesmap"></a>
<a id="schema_KmsKeyPoliciesMap"></a>
<a id="tocSkmskeypoliciesmap"></a>
<a id="tocskmskeypoliciesmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[KmsKeyPolicy](#schemakmskeypolicy)|false|none|none|

<h2 id="tocS_KmsKeyPolicy">KmsKeyPolicy</h2>
<!-- backwards compatibility -->
<a id="schemakmskeypolicy"></a>
<a id="schema_KmsKeyPolicy"></a>
<a id="tocSkmskeypolicy"></a>
<a id="tocskmskeypolicy"></a>

```json
"string"
```

<h2 id="tocS_LearnMoreLink">LearnMoreLink</h2>
<!-- backwards compatibility -->
<a id="schemalearnmorelink"></a>
<a id="schema_LearnMoreLink"></a>
<a id="tocSlearnmorelink"></a>
<a id="tocslearnmorelink"></a>

```json
"string"
```

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
"string"
```

<h2 id="tocS_ListAccessPreviewFindingsRequest">ListAccessPreviewFindingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistaccesspreviewfindingsrequest"></a>
<a id="schema_ListAccessPreviewFindingsRequest"></a>
<a id="tocSlistaccesspreviewfindingsrequest"></a>
<a id="tocslistaccesspreviewfindingsrequest"></a>

```json
{
  "analyzerArn": {},
  "filter": {
    "property1": {
      "eq": {},
      "neq": {},
      "contains": {},
      "exists": {}
    },
    "property2": {
      "eq": {},
      "neq": {},
      "contains": {},
      "exists": {}
    }
  },
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyzerArn|object|true|none|none|
|filter|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListAccessPreviewsRequest">ListAccessPreviewsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistaccesspreviewsrequest"></a>
<a id="schema_ListAccessPreviewsRequest"></a>
<a id="tocSlistaccesspreviewsrequest"></a>
<a id="tocslistaccesspreviewsrequest"></a>

```json
{}
```

<h2 id="tocS_ListAnalyzedResourcesRequest">ListAnalyzedResourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistanalyzedresourcesrequest"></a>
<a id="schema_ListAnalyzedResourcesRequest"></a>
<a id="tocSlistanalyzedresourcesrequest"></a>
<a id="tocslistanalyzedresourcesrequest"></a>

```json
{
  "analyzerArn": {},
  "resourceType": {},
  "nextToken": {},
  "maxResults": {}
}
```

Retrieves a list of resources that have been analyzed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyzerArn|object|true|none|none|
|resourceType|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListAnalyzersRequest">ListAnalyzersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistanalyzersrequest"></a>
<a id="schema_ListAnalyzersRequest"></a>
<a id="tocSlistanalyzersrequest"></a>
<a id="tocslistanalyzersrequest"></a>

```json
{}
```

Retrieves a list of analyzers.

<h2 id="tocS_ListArchiveRulesRequest">ListArchiveRulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistarchiverulesrequest"></a>
<a id="schema_ListArchiveRulesRequest"></a>
<a id="tocSlistarchiverulesrequest"></a>
<a id="tocslistarchiverulesrequest"></a>

```json
{}
```

Retrieves a list of archive rules created for the specified analyzer.

<h2 id="tocS_SortCriteria">SortCriteria</h2>
<!-- backwards compatibility -->
<a id="schemasortcriteria"></a>
<a id="schema_SortCriteria"></a>
<a id="tocSsortcriteria"></a>
<a id="tocssortcriteria"></a>

```json
{
  "attributeName": {},
  "orderBy": {}
}
```

The criteria used to sort.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeName|object|false|none|none|
|orderBy|object|false|none|none|

<h2 id="tocS_ListFindingsRequest">ListFindingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfindingsrequest"></a>
<a id="schema_ListFindingsRequest"></a>
<a id="tocSlistfindingsrequest"></a>
<a id="tocslistfindingsrequest"></a>

```json
{
  "analyzerArn": {},
  "filter": {
    "property1": {
      "eq": {},
      "neq": {},
      "contains": {},
      "exists": {}
    },
    "property2": {
      "eq": {},
      "neq": {},
      "contains": {},
      "exists": {}
    }
  },
  "sort": {
    "attributeName": {},
    "orderBy": {}
  },
  "nextToken": {},
  "maxResults": {}
}
```

Retrieves a list of findings generated by the specified analyzer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyzerArn|object|true|none|none|
|filter|object|false|none|none|
|sort|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListPolicyGenerationsRequestMaxResultsInteger">ListPolicyGenerationsRequestMaxResultsInteger</h2>
<!-- backwards compatibility -->
<a id="schemalistpolicygenerationsrequestmaxresultsinteger"></a>
<a id="schema_ListPolicyGenerationsRequestMaxResultsInteger"></a>
<a id="tocSlistpolicygenerationsrequestmaxresultsinteger"></a>
<a id="tocslistpolicygenerationsrequestmaxresultsinteger"></a>

```json
1
```

<h2 id="tocS_ListPolicyGenerationsRequest">ListPolicyGenerationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpolicygenerationsrequest"></a>
<a id="schema_ListPolicyGenerationsRequest"></a>
<a id="tocSlistpolicygenerationsrequest"></a>
<a id="tocslistpolicygenerationsrequest"></a>

```json
{}
```

<h2 id="tocS_PolicyGenerationList">PolicyGenerationList</h2>
<!-- backwards compatibility -->
<a id="schemapolicygenerationlist"></a>
<a id="schema_PolicyGenerationList"></a>
<a id="tocSpolicygenerationlist"></a>
<a id="tocspolicygenerationlist"></a>

```json
[
  {
    "jobId": {},
    "principalArn": {},
    "status": {},
    "startedOn": {},
    "completedOn": {}
  }
]
```

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{}
```

Retrieves a list of tags applied to the specified resource.

<h2 id="tocS_Locale">Locale</h2>
<!-- backwards compatibility -->
<a id="schemalocale"></a>
<a id="schema_Locale"></a>
<a id="tocSlocale"></a>
<a id="tocslocale"></a>

```json
"DE"
```

<h2 id="tocS_PathElementList">PathElementList</h2>
<!-- backwards compatibility -->
<a id="schemapathelementlist"></a>
<a id="schema_PathElementList"></a>
<a id="tocSpathelementlist"></a>
<a id="tocspathelementlist"></a>

```json
[
  {
    "index": {},
    "key": {},
    "substring": {
      "start": {},
      "length": {}
    },
    "value": {}
  }
]
```

<h2 id="tocS_Span">Span</h2>
<!-- backwards compatibility -->
<a id="schemaspan"></a>
<a id="schema_Span"></a>
<a id="tocSspan"></a>
<a id="tocsspan"></a>

```json
{
  "start": {
    "line": {},
    "column": {},
    "offset": {}
  },
  "end": {
    "line": {},
    "column": {},
    "offset": {}
  }
}
```

A span in a policy. The span consists of a start position (inclusive) and end position (exclusive).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|object|true|none|none|
|end|object|true|none|none|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "path": {},
  "span": {
    "start": {
      "line": {},
      "column": {},
      "offset": {}
    },
    "end": {
      "line": {},
      "column": {},
      "offset": {}
    }
  }
}
```

A location in a policy that is represented as a path through the JSON representation and a corresponding span.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|object|true|none|none|
|span|object|true|none|none|

<h2 id="tocS_LocationList">LocationList</h2>
<!-- backwards compatibility -->
<a id="schemalocationlist"></a>
<a id="schema_LocationList"></a>
<a id="tocSlocationlist"></a>
<a id="tocslocationlist"></a>

```json
[
  {
    "path": {},
    "span": {
      "start": {
        "line": {},
        "column": {},
        "offset": {}
      },
      "end": {
        "line": {},
        "column": {},
        "offset": {}
      }
    }
  }
]
```

<h2 id="tocS_VpcConfiguration">VpcConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemavpcconfiguration"></a>
<a id="schema_VpcConfiguration"></a>
<a id="tocSvpcconfiguration"></a>
<a id="tocsvpcconfiguration"></a>

```json
{
  "vpcId": {}
}
```

The proposed virtual private cloud (VPC) configuration for the Amazon S3 access point. VPC configuration does not apply to multi-region access points. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_VpcConfiguration.html">VpcConfiguration</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vpcId|object|true|none|none|

<h2 id="tocS_NetworkOriginConfiguration">NetworkOriginConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemanetworkoriginconfiguration"></a>
<a id="schema_NetworkOriginConfiguration"></a>
<a id="tocSnetworkoriginconfiguration"></a>
<a id="tocsnetworkoriginconfiguration"></a>

```json
{
  "vpcConfiguration": {
    "vpcId": {}
  },
  "internetConfiguration": {}
}
```

The proposed <code>InternetConfiguration</code> or <code>VpcConfiguration</code> to apply to the Amazon S3 access point. <code>VpcConfiguration</code> does not apply to multi-region access points. You can make the access point accessible from the internet, or you can specify that all requests made through that access point must originate from a specific virtual private cloud (VPC). You can specify only one type of network configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html">Creating access points</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vpcConfiguration|[VpcConfiguration](#schemavpcconfiguration)|false|none|The proposed virtual private cloud (VPC) configuration for the Amazon S3 access point. VPC configuration does not apply to multi-region access points. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_VpcConfiguration.html">VpcConfiguration</a>. |
|internetConfiguration|object|false|none|none|

<h2 id="tocS_Substring">Substring</h2>
<!-- backwards compatibility -->
<a id="schemasubstring"></a>
<a id="schema_Substring"></a>
<a id="tocSsubstring"></a>
<a id="tocssubstring"></a>

```json
{
  "start": {},
  "length": {}
}
```

A reference to a substring of a literal string in a JSON document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|object|true|none|none|
|length|object|true|none|none|

<h2 id="tocS_PathElement">PathElement</h2>
<!-- backwards compatibility -->
<a id="schemapathelement"></a>
<a id="schema_PathElement"></a>
<a id="tocSpathelement"></a>
<a id="tocspathelement"></a>

```json
{
  "index": {},
  "key": {},
  "substring": {
    "start": {},
    "length": {}
  },
  "value": {}
}
```

A single element in a path through the JSON representation of a policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|object|false|none|none|
|key|object|false|none|none|
|substring|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_PolicyDocument">PolicyDocument</h2>
<!-- backwards compatibility -->
<a id="schemapolicydocument"></a>
<a id="schema_PolicyDocument"></a>
<a id="tocSpolicydocument"></a>
<a id="tocspolicydocument"></a>

```json
"string"
```

<h2 id="tocS_PolicyGeneration">PolicyGeneration</h2>
<!-- backwards compatibility -->
<a id="schemapolicygeneration"></a>
<a id="schema_PolicyGeneration"></a>
<a id="tocSpolicygeneration"></a>
<a id="tocspolicygeneration"></a>

```json
{
  "jobId": {},
  "principalArn": {},
  "status": {},
  "startedOn": {},
  "completedOn": {}
}
```

Contains details about the policy generation status and properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|true|none|none|
|principalArn|object|true|none|none|
|status|object|true|none|none|
|startedOn|object|true|none|none|
|completedOn|object|false|none|none|

<h2 id="tocS_PolicyGenerationDetails">PolicyGenerationDetails</h2>
<!-- backwards compatibility -->
<a id="schemapolicygenerationdetails"></a>
<a id="schema_PolicyGenerationDetails"></a>
<a id="tocSpolicygenerationdetails"></a>
<a id="tocspolicygenerationdetails"></a>

```json
{
  "principalArn": {}
}
```

Contains the ARN details about the IAM entity for which the policy is generated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|principalArn|object|true|none|none|

<h2 id="tocS_PolicyName">PolicyName</h2>
<!-- backwards compatibility -->
<a id="schemapolicyname"></a>
<a id="schema_PolicyName"></a>
<a id="tocSpolicyname"></a>
<a id="tocspolicyname"></a>

```json
"string"
```

<h2 id="tocS_PolicyType">PolicyType</h2>
<!-- backwards compatibility -->
<a id="schemapolicytype"></a>
<a id="schema_PolicyType"></a>
<a id="tocSpolicytype"></a>
<a id="tocspolicytype"></a>

```json
"IDENTITY_POLICY"
```

<h2 id="tocS_Position">Position</h2>
<!-- backwards compatibility -->
<a id="schemaposition"></a>
<a id="schema_Position"></a>
<a id="tocSposition"></a>
<a id="tocsposition"></a>

```json
{
  "line": {},
  "column": {},
  "offset": {}
}
```

A position in a policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|line|object|true|none|none|
|column|object|true|none|none|
|offset|object|true|none|none|

<h2 id="tocS_RdsDbClusterSnapshotAccountId">RdsDbClusterSnapshotAccountId</h2>
<!-- backwards compatibility -->
<a id="schemardsdbclustersnapshotaccountid"></a>
<a id="schema_RdsDbClusterSnapshotAccountId"></a>
<a id="tocSrdsdbclustersnapshotaccountid"></a>
<a id="tocsrdsdbclustersnapshotaccountid"></a>

```json
"string"
```

<h2 id="tocS_RdsDbClusterSnapshotAccountIdsList">RdsDbClusterSnapshotAccountIdsList</h2>
<!-- backwards compatibility -->
<a id="schemardsdbclustersnapshotaccountidslist"></a>
<a id="schema_RdsDbClusterSnapshotAccountIdsList"></a>
<a id="tocSrdsdbclustersnapshotaccountidslist"></a>
<a id="tocsrdsdbclustersnapshotaccountidslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RdsDbClusterSnapshotAttributeName">RdsDbClusterSnapshotAttributeName</h2>
<!-- backwards compatibility -->
<a id="schemardsdbclustersnapshotattributename"></a>
<a id="schema_RdsDbClusterSnapshotAttributeName"></a>
<a id="tocSrdsdbclustersnapshotattributename"></a>
<a id="tocsrdsdbclustersnapshotattributename"></a>

```json
"string"
```

<h2 id="tocS_RdsDbClusterSnapshotAttributeValue">RdsDbClusterSnapshotAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemardsdbclustersnapshotattributevalue"></a>
<a id="schema_RdsDbClusterSnapshotAttributeValue"></a>
<a id="tocSrdsdbclustersnapshotattributevalue"></a>
<a id="tocsrdsdbclustersnapshotattributevalue"></a>

```json
{
  "accountIds": {}
}
```

The values for a manual Amazon RDS DB cluster snapshot attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountIds|object|false|none|none|

<h2 id="tocS_RdsDbClusterSnapshotAttributesMap">RdsDbClusterSnapshotAttributesMap</h2>
<!-- backwards compatibility -->
<a id="schemardsdbclustersnapshotattributesmap"></a>
<a id="schema_RdsDbClusterSnapshotAttributesMap"></a>
<a id="tocSrdsdbclustersnapshotattributesmap"></a>
<a id="tocsrdsdbclustersnapshotattributesmap"></a>

```json
{
  "property1": {
    "accountIds": {}
  },
  "property2": {
    "accountIds": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[RdsDbClusterSnapshotAttributeValue](#schemardsdbclustersnapshotattributevalue)|false|none|The values for a manual Amazon RDS DB cluster snapshot attribute.|

<h2 id="tocS_RdsDbClusterSnapshotKmsKeyId">RdsDbClusterSnapshotKmsKeyId</h2>
<!-- backwards compatibility -->
<a id="schemardsdbclustersnapshotkmskeyid"></a>
<a id="schema_RdsDbClusterSnapshotKmsKeyId"></a>
<a id="tocSrdsdbclustersnapshotkmskeyid"></a>
<a id="tocsrdsdbclustersnapshotkmskeyid"></a>

```json
"string"
```

<h2 id="tocS_RdsDbSnapshotAccountId">RdsDbSnapshotAccountId</h2>
<!-- backwards compatibility -->
<a id="schemardsdbsnapshotaccountid"></a>
<a id="schema_RdsDbSnapshotAccountId"></a>
<a id="tocSrdsdbsnapshotaccountid"></a>
<a id="tocsrdsdbsnapshotaccountid"></a>

```json
"string"
```

<h2 id="tocS_RdsDbSnapshotAccountIdsList">RdsDbSnapshotAccountIdsList</h2>
<!-- backwards compatibility -->
<a id="schemardsdbsnapshotaccountidslist"></a>
<a id="schema_RdsDbSnapshotAccountIdsList"></a>
<a id="tocSrdsdbsnapshotaccountidslist"></a>
<a id="tocsrdsdbsnapshotaccountidslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RdsDbSnapshotAttributeName">RdsDbSnapshotAttributeName</h2>
<!-- backwards compatibility -->
<a id="schemardsdbsnapshotattributename"></a>
<a id="schema_RdsDbSnapshotAttributeName"></a>
<a id="tocSrdsdbsnapshotattributename"></a>
<a id="tocsrdsdbsnapshotattributename"></a>

```json
"string"
```

<h2 id="tocS_RdsDbSnapshotAttributeValue">RdsDbSnapshotAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemardsdbsnapshotattributevalue"></a>
<a id="schema_RdsDbSnapshotAttributeValue"></a>
<a id="tocSrdsdbsnapshotattributevalue"></a>
<a id="tocsrdsdbsnapshotattributevalue"></a>

```json
{
  "accountIds": {}
}
```

The name and values of a manual Amazon RDS DB snapshot attribute. Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual DB snapshot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountIds|object|false|none|none|

<h2 id="tocS_RdsDbSnapshotAttributesMap">RdsDbSnapshotAttributesMap</h2>
<!-- backwards compatibility -->
<a id="schemardsdbsnapshotattributesmap"></a>
<a id="schema_RdsDbSnapshotAttributesMap"></a>
<a id="tocSrdsdbsnapshotattributesmap"></a>
<a id="tocsrdsdbsnapshotattributesmap"></a>

```json
{
  "property1": {
    "accountIds": {}
  },
  "property2": {
    "accountIds": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[RdsDbSnapshotAttributeValue](#schemardsdbsnapshotattributevalue)|false|none|The name and values of a manual Amazon RDS DB snapshot attribute. Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual DB snapshot.|

<h2 id="tocS_RdsDbSnapshotKmsKeyId">RdsDbSnapshotKmsKeyId</h2>
<!-- backwards compatibility -->
<a id="schemardsdbsnapshotkmskeyid"></a>
<a id="schema_RdsDbSnapshotKmsKeyId"></a>
<a id="tocSrdsdbsnapshotkmskeyid"></a>
<a id="tocsrdsdbsnapshotkmskeyid"></a>

```json
"string"
```

<h2 id="tocS_ReasonCode">ReasonCode</h2>
<!-- backwards compatibility -->
<a id="schemareasoncode"></a>
<a id="schema_ReasonCode"></a>
<a id="tocSreasoncode"></a>
<a id="tocsreasoncode"></a>

```json
"AWS_SERVICE_ACCESS_DISABLED"
```

<h2 id="tocS_RegionList">RegionList</h2>
<!-- backwards compatibility -->
<a id="schemaregionlist"></a>
<a id="schema_RegionList"></a>
<a id="tocSregionlist"></a>
<a id="tocsregionlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_S3PublicAccessBlockConfiguration">S3PublicAccessBlockConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemas3publicaccessblockconfiguration"></a>
<a id="schema_S3PublicAccessBlockConfiguration"></a>
<a id="tocSs3publicaccessblockconfiguration"></a>
<a id="tocss3publicaccessblockconfiguration"></a>

```json
{
  "ignorePublicAcls": {},
  "restrictPublicBuckets": {}
}
```

The <code>PublicAccessBlock</code> configuration to apply to this Amazon S3 bucket. If the proposed configuration is for an existing Amazon S3 bucket and the configuration is not specified, the access preview uses the existing setting. If the proposed configuration is for a new bucket and the configuration is not specified, the access preview uses <code>false</code>. If the proposed configuration is for a new access point or multi-region access point and the access point BPA configuration is not specified, the access preview uses <code>true</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-publicaccessblockconfiguration.html">PublicAccessBlockConfiguration</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ignorePublicAcls|object|true|none|none|
|restrictPublicBuckets|object|true|none|none|

<h2 id="tocS_S3AccessPointConfiguration">S3AccessPointConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemas3accesspointconfiguration"></a>
<a id="schema_S3AccessPointConfiguration"></a>
<a id="tocSs3accesspointconfiguration"></a>
<a id="tocss3accesspointconfiguration"></a>

```json
{
  "accessPointPolicy": {},
  "publicAccessBlock": {
    "ignorePublicAcls": {},
    "restrictPublicBuckets": {}
  },
  "networkOrigin": {
    "vpcConfiguration": {
      "vpcId": {}
    },
    "internetConfiguration": {}
  }
}
```

The configuration for an Amazon S3 access point or multi-region access point for the bucket. You can propose up to 10 access points or multi-region access points per bucket. If the proposed Amazon S3 access point configuration is for an existing bucket, the access preview uses the proposed access point configuration in place of the existing access points. To propose an access point without a policy, you can provide an empty string as the access point policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html">Creating access points</a>. For more information about access point policy limits, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points-restrictions-limitations.html">Access points restrictions and limitations</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessPointPolicy|object|false|none|none|
|publicAccessBlock|object|false|none|none|
|networkOrigin|object|false|none|none|

<h2 id="tocS_S3AccessPointConfigurationsMap">S3AccessPointConfigurationsMap</h2>
<!-- backwards compatibility -->
<a id="schemas3accesspointconfigurationsmap"></a>
<a id="schema_S3AccessPointConfigurationsMap"></a>
<a id="tocSs3accesspointconfigurationsmap"></a>
<a id="tocss3accesspointconfigurationsmap"></a>

```json
{
  "property1": {
    "accessPointPolicy": {},
    "publicAccessBlock": {
      "ignorePublicAcls": {},
      "restrictPublicBuckets": {}
    },
    "networkOrigin": {
      "vpcConfiguration": {
        "vpcId": {}
      },
      "internetConfiguration": {}
    }
  },
  "property2": {
    "accessPointPolicy": {},
    "publicAccessBlock": {
      "ignorePublicAcls": {},
      "restrictPublicBuckets": {}
    },
    "networkOrigin": {
      "vpcConfiguration": {
        "vpcId": {}
      },
      "internetConfiguration": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[S3AccessPointConfiguration](#schemas3accesspointconfiguration)|false|none|The configuration for an Amazon S3 access point or multi-region access point for the bucket. You can propose up to 10 access points or multi-region access points per bucket. If the proposed Amazon S3 access point configuration is for an existing bucket, the access preview uses the proposed access point configuration in place of the existing access points. To propose an access point without a policy, you can provide an empty string as the access point policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html">Creating access points</a>. For more information about access point policy limits, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points-restrictions-limitations.html">Access points restrictions and limitations</a>.|

<h2 id="tocS_S3BucketAclGrantConfiguration">S3BucketAclGrantConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketaclgrantconfiguration"></a>
<a id="schema_S3BucketAclGrantConfiguration"></a>
<a id="tocSs3bucketaclgrantconfiguration"></a>
<a id="tocss3bucketaclgrantconfiguration"></a>

```json
{
  "permission": {},
  "grantee": {
    "id": {},
    "uri": {}
  }
}
```

A proposed access control list grant configuration for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#setting-acls">How to Specify an ACL</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permission|object|true|none|none|
|grantee|object|true|none|none|

<h2 id="tocS_S3BucketAclGrantConfigurationsList">S3BucketAclGrantConfigurationsList</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketaclgrantconfigurationslist"></a>
<a id="schema_S3BucketAclGrantConfigurationsList"></a>
<a id="tocSs3bucketaclgrantconfigurationslist"></a>
<a id="tocss3bucketaclgrantconfigurationslist"></a>

```json
[
  {
    "permission": {},
    "grantee": {
      "id": {},
      "uri": {}
    }
  }
]
```

<h2 id="tocS_S3BucketPolicy">S3BucketPolicy</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketpolicy"></a>
<a id="schema_S3BucketPolicy"></a>
<a id="tocSs3bucketpolicy"></a>
<a id="tocss3bucketpolicy"></a>

```json
"string"
```

<h2 id="tocS_SecretsManagerSecretKmsId">SecretsManagerSecretKmsId</h2>
<!-- backwards compatibility -->
<a id="schemasecretsmanagersecretkmsid"></a>
<a id="schema_SecretsManagerSecretKmsId"></a>
<a id="tocSsecretsmanagersecretkmsid"></a>
<a id="tocssecretsmanagersecretkmsid"></a>

```json
"string"
```

<h2 id="tocS_SecretsManagerSecretPolicy">SecretsManagerSecretPolicy</h2>
<!-- backwards compatibility -->
<a id="schemasecretsmanagersecretpolicy"></a>
<a id="schema_SecretsManagerSecretPolicy"></a>
<a id="tocSsecretsmanagersecretpolicy"></a>
<a id="tocssecretsmanagersecretpolicy"></a>

```json
"string"
```

<h2 id="tocS_SnsTopicPolicy">SnsTopicPolicy</h2>
<!-- backwards compatibility -->
<a id="schemasnstopicpolicy"></a>
<a id="schema_SnsTopicPolicy"></a>
<a id="tocSsnstopicpolicy"></a>
<a id="tocssnstopicpolicy"></a>

```json
"string"
```

<h2 id="tocS_SqsQueuePolicy">SqsQueuePolicy</h2>
<!-- backwards compatibility -->
<a id="schemasqsqueuepolicy"></a>
<a id="schema_SqsQueuePolicy"></a>
<a id="tocSsqsqueuepolicy"></a>
<a id="tocssqsqueuepolicy"></a>

```json
"string"
```

<h2 id="tocS_StartPolicyGenerationRequest">StartPolicyGenerationRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartpolicygenerationrequest"></a>
<a id="schema_StartPolicyGenerationRequest"></a>
<a id="tocSstartpolicygenerationrequest"></a>
<a id="tocsstartpolicygenerationrequest"></a>

```json
{
  "policyGenerationDetails": {
    "principalArn": {}
  },
  "cloudTrailDetails": {
    "trails": {},
    "accessRole": {},
    "startTime": {},
    "endTime": {}
  },
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyGenerationDetails|object|true|none|none|
|cloudTrailDetails|object|false|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_StartResourceScanRequest">StartResourceScanRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartresourcescanrequest"></a>
<a id="schema_StartResourceScanRequest"></a>
<a id="tocSstartresourcescanrequest"></a>
<a id="tocsstartresourcescanrequest"></a>

```json
{
  "analyzerArn": {},
  "resourceArn": {},
  "resourceOwnerAccount": {}
}
```

Starts a scan of the policies applied to the specified resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyzerArn|object|true|none|none|
|resourceArn|object|true|none|none|
|resourceOwnerAccount|object|false|none|none|

<h2 id="tocS_TagKeys">TagKeys</h2>
<!-- backwards compatibility -->
<a id="schematagkeys"></a>
<a id="schema_TagKeys"></a>
<a id="tocStagkeys"></a>
<a id="tocstagkeys"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Adds a tag to the specified resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|true|none|none|

<h2 id="tocS_Trail">Trail</h2>
<!-- backwards compatibility -->
<a id="schematrail"></a>
<a id="schema_Trail"></a>
<a id="tocStrail"></a>
<a id="tocstrail"></a>

```json
{
  "cloudTrailArn": {},
  "regions": {},
  "allRegions": {}
}
```

Contains details about the CloudTrail trail being analyzed to generate a policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudTrailArn|object|true|none|none|
|regions|object|false|none|none|
|allRegions|object|false|none|none|

<h2 id="tocS_TrailProperties">TrailProperties</h2>
<!-- backwards compatibility -->
<a id="schematrailproperties"></a>
<a id="schema_TrailProperties"></a>
<a id="tocStrailproperties"></a>
<a id="tocstrailproperties"></a>

```json
{
  "cloudTrailArn": {},
  "regions": {},
  "allRegions": {}
}
```

Contains details about the CloudTrail trail being analyzed to generate a policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudTrailArn|object|true|none|none|
|regions|object|false|none|none|
|allRegions|object|false|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

Removes a tag from the specified resource.

<h2 id="tocS_UpdateArchiveRuleRequest">UpdateArchiveRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatearchiverulerequest"></a>
<a id="schema_UpdateArchiveRuleRequest"></a>
<a id="tocSupdatearchiverulerequest"></a>
<a id="tocsupdatearchiverulerequest"></a>

```json
{
  "filter": {
    "property1": {
      "eq": {},
      "neq": {},
      "contains": {},
      "exists": {}
    },
    "property2": {
      "eq": {},
      "neq": {},
      "contains": {},
      "exists": {}
    }
  },
  "clientToken": {}
}
```

Updates the specified archive rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|object|true|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_UpdateFindingsRequest">UpdateFindingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefindingsrequest"></a>
<a id="schema_UpdateFindingsRequest"></a>
<a id="tocSupdatefindingsrequest"></a>
<a id="tocsupdatefindingsrequest"></a>

```json
{
  "analyzerArn": {},
  "status": {},
  "ids": {},
  "resourceArn": {},
  "clientToken": {}
}
```

Updates findings with the new values provided in the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyzerArn|object|true|none|none|
|status|object|true|none|none|
|ids|object|false|none|none|
|resourceArn|object|false|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_ValidatePolicyFindingType">ValidatePolicyFindingType</h2>
<!-- backwards compatibility -->
<a id="schemavalidatepolicyfindingtype"></a>
<a id="schema_ValidatePolicyFindingType"></a>
<a id="tocSvalidatepolicyfindingtype"></a>
<a id="tocsvalidatepolicyfindingtype"></a>

```json
"ERROR"
```

<h2 id="tocS_ValidatePolicyFinding">ValidatePolicyFinding</h2>
<!-- backwards compatibility -->
<a id="schemavalidatepolicyfinding"></a>
<a id="schema_ValidatePolicyFinding"></a>
<a id="tocSvalidatepolicyfinding"></a>
<a id="tocsvalidatepolicyfinding"></a>

```json
{
  "findingDetails": {},
  "findingType": {},
  "issueCode": {},
  "learnMoreLink": {},
  "locations": {}
}
```

A finding in a policy. Each finding is an actionable recommendation that can be used to improve the policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|findingDetails|object|true|none|none|
|findingType|object|true|none|none|
|issueCode|object|true|none|none|
|learnMoreLink|object|true|none|none|
|locations|object|true|none|none|

<h2 id="tocS_ValidatePolicyFindingList">ValidatePolicyFindingList</h2>
<!-- backwards compatibility -->
<a id="schemavalidatepolicyfindinglist"></a>
<a id="schema_ValidatePolicyFindingList"></a>
<a id="tocSvalidatepolicyfindinglist"></a>
<a id="tocsvalidatepolicyfindinglist"></a>

```json
[
  {
    "findingDetails": {},
    "findingType": {},
    "issueCode": {},
    "learnMoreLink": {},
    "locations": {}
  }
]
```

<h2 id="tocS_ValidatePolicyResourceType">ValidatePolicyResourceType</h2>
<!-- backwards compatibility -->
<a id="schemavalidatepolicyresourcetype"></a>
<a id="schema_ValidatePolicyResourceType"></a>
<a id="tocSvalidatepolicyresourcetype"></a>
<a id="tocsvalidatepolicyresourcetype"></a>

```json
"AWS::S3::Bucket"
```

<h2 id="tocS_ValidatePolicyRequest">ValidatePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemavalidatepolicyrequest"></a>
<a id="schema_ValidatePolicyRequest"></a>
<a id="tocSvalidatepolicyrequest"></a>
<a id="tocsvalidatepolicyrequest"></a>

```json
{
  "locale": {},
  "policyDocument": {},
  "policyType": {},
  "validatePolicyResourceType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locale|object|false|none|none|
|policyDocument|object|true|none|none|
|policyType|object|true|none|none|
|validatePolicyResourceType|object|false|none|none|

<h2 id="tocS_VpcId">VpcId</h2>
<!-- backwards compatibility -->
<a id="schemavpcid"></a>
<a id="schema_VpcId"></a>
<a id="tocSvpcid"></a>
<a id="tocsvpcid"></a>

```json
"string"
```
