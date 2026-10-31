<h1 id="amazon-connect-customer-profiles">Amazon Connect Customer Profiles v2020-08-15</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon Connect Customer Profiles</fullname> <p>Amazon Connect Customer Profiles is a unified customer profile for your contact center that has pre-built connectors powered by AppFlow that make it easy to combine customer information from third party applications, such as Salesforce (CRM), ServiceNow (ITSM), and your enterprise resource planning (ERP), with contact history from your Amazon Connect contact center. If you're new to Amazon Connect, you might find it helpful to review the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/">Amazon Connect Administrator Guide</a>.</p>

Base URLs:

* <a href="http://profile.us-east-1.amazonaws.com">http://profile.us-east-1.amazonaws.com</a> - The Customer Profiles multi-region endpoint

* <a href="https://profile.us-east-1.amazonaws.com">https://profile.us-east-1.amazonaws.com</a> - The Customer Profiles multi-region endpoint

* <a href="http://profile.cn-north-1.amazonaws.com.cn">http://profile.cn-north-1.amazonaws.com.cn</a> - The Customer Profiles endpoint for China (Beijing) and China (Ningxia)

* <a href="https://profile.cn-north-1.amazonaws.com.cn">https://profile.cn-north-1.amazonaws.com.cn</a> - The Customer Profiles endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/profile/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-connect-customer-profiles-default">Default</h1>

## AddProfileKey

<a id="opIdAddProfileKey"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string/profiles/keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ProfileId": "string",
    "KeyName": "string",
    "Values": [
      "string"
    ]
  }'
```

`POST /domains/{DomainName}/profiles/keys`

<p>Associates a new key value with a specific profile, such as a Contact Record ContactId.</p> <p>A profile object can have a single unique key and any number of additional keys that can be used to identify the profile that it belongs to.</p>

> Body parameter

```json
{
  "ProfileId": "string",
  "KeyName": "string",
  "Values": [
    "string"
  ]
}
```

<h3 id="addprofilekey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The unique name of the domain.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ProfileId|body|string|true|The unique identifier of a customer profile.|
|» KeyName|body|string|true|A searchable identifier of a customer profile. The predefined keys you can use include: _account, _profileId, _assetId, _caseId, _orderId, _fullName, _phone, _email, _ctrContactId, _marketoLeadId, _salesforceAccountId, _salesforceContactId, _salesforceAssetId, _zendeskUserId, _zendeskExternalId, _zendeskTicketId, _serviceNowSystemId, _serviceNowIncidentId, _segmentUserId, _shopifyCustomerId, _shopifyOrderId.|
|» Values|body|[[string1To255](#schemastring1to255)]|true|A list of key values.|

> Example responses

> 200 Response

```json
{
  "KeyName": {},
  "Values": {}
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

<h3 id="addprofilekey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddProfileKeyResponse](#schemaaddprofilekeyresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDomain

<a id="opIdGetDomain"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /domains/{DomainName}`

Returns information about a specific domain.

<h3 id="getdomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The unique name of the domain.|
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
  "DomainName": {},
  "DefaultExpirationDays": {},
  "DefaultEncryptionKey": {},
  "DeadLetterQueueUrl": {},
  "Stats": {
    "ProfileCount": {},
    "MeteringProfileCount": {},
    "ObjectCount": {},
    "TotalSize": {}
  },
  "Matching": {
    "Enabled": {},
    "JobSchedule": {
      "DayOfTheWeek": {},
      "Time": {}
    },
    "AutoMerging": {
      "Enabled": {},
      "Consolidation": {
        "MatchingAttributesList": {}
      },
      "ConflictResolution": {
        "ConflictResolvingModel": {},
        "SourceName": {}
      },
      "MinAllowedConfidenceScoreForMerging": {}
    },
    "ExportingConfig": {
      "S3Exporting": {
        "S3BucketName": {},
        "S3KeyName": {}
      }
    }
  },
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "Tags": {
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

<h3 id="getdomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDomainResponse](#schemagetdomainresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDomain

<a id="opIdUpdateDomain"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DefaultExpirationDays": 1,
    "DefaultEncryptionKey": "string",
    "DeadLetterQueueUrl": "string",
    "Matching": {
      "Enabled": {},
      "JobSchedule": {
        "DayOfTheWeek": {},
        "Time": {}
      },
      "AutoMerging": {
        "Enabled": {},
        "Consolidation": {
          "MatchingAttributesList": {}
        },
        "ConflictResolution": {
          "ConflictResolvingModel": {},
          "SourceName": {}
        },
        "MinAllowedConfidenceScoreForMerging": {}
      },
      "ExportingConfig": {
        "S3Exporting": {
          "S3BucketName": {},
          "S3KeyName": {}
        }
      }
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /domains/{DomainName}`

<p>Updates the properties of a domain, including creating or selecting a dead letter queue or an encryption key.</p> <p>After a domain is created, the name can’t be changed.</p> <p>Use this API or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html">CreateDomain</a> to enable <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">identity resolution</a>: set <code>Matching</code> to true. </p> <p>To prevent cross-service impersonation when you call this API, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html">Cross-service confused deputy prevention</a> for sample policies that you should apply. </p> <p>To add or remove tags on an existing Domain, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html">TagResource</a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>

> Body parameter

```json
{
  "DefaultExpirationDays": 1,
  "DefaultEncryptionKey": "string",
  "DeadLetterQueueUrl": "string",
  "Matching": {
    "Enabled": {},
    "JobSchedule": {
      "DayOfTheWeek": {},
      "Time": {}
    },
    "AutoMerging": {
      "Enabled": {},
      "Consolidation": {
        "MatchingAttributesList": {}
      },
      "ConflictResolution": {
        "ConflictResolvingModel": {},
        "SourceName": {}
      },
      "MinAllowedConfidenceScoreForMerging": {}
    },
    "ExportingConfig": {
      "S3Exporting": {
        "S3BucketName": {},
        "S3KeyName": {}
      }
    }
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="updatedomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The unique name of the domain.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» DefaultExpirationDays|body|integer|false|The default number of days until the data within the domain expires.|
|» DefaultEncryptionKey|body|string|false|The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified. It is used to encrypt all data before it is placed in permanent or semi-permanent storage. If specified as an empty string, it will clear any existing value.|
|» DeadLetterQueueUrl|body|string|false|The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications. If specified as an empty string, it will clear any existing value. You must set up a policy on the DeadLetterQueue for the SendMessage operation to enable Amazon Connect Customer Profiles to send messages to the DeadLetterQueue.|
|» Matching|body|object|false|The flag that enables the matching process of duplicate profiles.|
|» » Enabled|body|object|false|none|
|» » JobSchedule|body|object|false|none|
|» » » DayOfTheWeek|body|object|true|none|
|» » » Time|body|object|true|none|
|» » AutoMerging|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» » » Consolidation|body|object|false|none|
|» » » » MatchingAttributesList|body|object|true|none|
|» » » ConflictResolution|body|object|false|none|
|» » » » ConflictResolvingModel|body|object|true|none|
|» » » » SourceName|body|object|false|none|
|» » » MinAllowedConfidenceScoreForMerging|body|object|false|none|
|» » ExportingConfig|body|object|false|none|
|» » » S3Exporting|body|object|false|none|
|» » » » S3BucketName|body|object|true|none|
|» » » » S3KeyName|body|object|false|none|
|» Tags|body|object|false|The tags used to organize, track, or control access for this resource.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "DomainName": {},
  "DefaultExpirationDays": {},
  "DefaultEncryptionKey": {},
  "DeadLetterQueueUrl": {},
  "Matching": {
    "Enabled": {},
    "JobSchedule": {
      "DayOfTheWeek": {},
      "Time": {}
    },
    "AutoMerging": {
      "Enabled": {},
      "Consolidation": {
        "MatchingAttributesList": {}
      },
      "ConflictResolution": {
        "ConflictResolvingModel": {},
        "SourceName": {}
      },
      "MinAllowedConfidenceScoreForMerging": {}
    },
    "ExportingConfig": {
      "S3Exporting": {
        "S3BucketName": {},
        "S3KeyName": {}
      }
    }
  },
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "Tags": {
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

<h3 id="updatedomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDomainResponse](#schemaupdatedomainresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDomain

<a id="opIdCreateDomain"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DefaultExpirationDays": 1,
    "DefaultEncryptionKey": "string",
    "DeadLetterQueueUrl": "string",
    "Matching": {
      "Enabled": {},
      "JobSchedule": {
        "DayOfTheWeek": {},
        "Time": {}
      },
      "AutoMerging": {
        "Enabled": {},
        "Consolidation": {
          "MatchingAttributesList": {}
        },
        "ConflictResolution": {
          "ConflictResolvingModel": {},
          "SourceName": {}
        },
        "MinAllowedConfidenceScoreForMerging": {}
      },
      "ExportingConfig": {
        "S3Exporting": {
          "S3BucketName": {},
          "S3KeyName": {}
        }
      }
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /domains/{DomainName}`

<p>Creates a domain, which is a container for all customer data, such as customer profile attributes, object types, profile keys, and encryption keys. You can create multiple domains, and each domain can have multiple third-party integrations.</p> <p>Each Amazon Connect instance can be associated with only one domain. Multiple Amazon Connect instances can be associated with one domain.</p> <p>Use this API or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html">UpdateDomain</a> to enable <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">identity resolution</a>: set <code>Matching</code> to true. </p> <p>To prevent cross-service impersonation when you call this API, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html">Cross-service confused deputy prevention</a> for sample policies that you should apply. </p>

> Body parameter

```json
{
  "DefaultExpirationDays": 1,
  "DefaultEncryptionKey": "string",
  "DeadLetterQueueUrl": "string",
  "Matching": {
    "Enabled": {},
    "JobSchedule": {
      "DayOfTheWeek": {},
      "Time": {}
    },
    "AutoMerging": {
      "Enabled": {},
      "Consolidation": {
        "MatchingAttributesList": {}
      },
      "ConflictResolution": {
        "ConflictResolvingModel": {},
        "SourceName": {}
      },
      "MinAllowedConfidenceScoreForMerging": {}
    },
    "ExportingConfig": {
      "S3Exporting": {
        "S3BucketName": {},
        "S3KeyName": {}
      }
    }
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createdomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The unique name of the domain.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» DefaultExpirationDays|body|integer|true|The default number of days until the data within the domain expires.|
|» DefaultEncryptionKey|body|string|false|The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified. It is used to encrypt all data before it is placed in permanent or semi-permanent storage.|
|» DeadLetterQueueUrl|body|string|false|The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications. You must set up a policy on the DeadLetterQueue for the SendMessage operation to enable Amazon Connect Customer Profiles to send messages to the DeadLetterQueue.|
|» Matching|body|object|false|The flag that enables the matching process of duplicate profiles.|
|» » Enabled|body|object|false|none|
|» » JobSchedule|body|object|false|none|
|» » » DayOfTheWeek|body|object|true|none|
|» » » Time|body|object|true|none|
|» » AutoMerging|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» » » Consolidation|body|object|false|none|
|» » » » MatchingAttributesList|body|object|true|none|
|» » » ConflictResolution|body|object|false|none|
|» » » » ConflictResolvingModel|body|object|true|none|
|» » » » SourceName|body|object|false|none|
|» » » MinAllowedConfidenceScoreForMerging|body|object|false|none|
|» » ExportingConfig|body|object|false|none|
|» » » S3Exporting|body|object|false|none|
|» » » » S3BucketName|body|object|true|none|
|» » » » S3KeyName|body|object|false|none|
|» Tags|body|object|false|The tags used to organize, track, or control access for this resource.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "DomainName": {},
  "DefaultExpirationDays": {},
  "DefaultEncryptionKey": {},
  "DeadLetterQueueUrl": {},
  "Matching": {
    "Enabled": {},
    "JobSchedule": {
      "DayOfTheWeek": {},
      "Time": {}
    },
    "AutoMerging": {
      "Enabled": {},
      "Consolidation": {
        "MatchingAttributesList": {}
      },
      "ConflictResolution": {
        "ConflictResolvingModel": {},
        "SourceName": {}
      },
      "MinAllowedConfidenceScoreForMerging": {}
    },
    "ExportingConfig": {
      "S3Exporting": {
        "S3BucketName": {},
        "S3KeyName": {}
      }
    }
  },
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "Tags": {
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

<h3 id="createdomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDomainResponse](#schemacreatedomainresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDomain

<a id="opIdDeleteDomain"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /domains/{DomainName}`

Deletes a specific domain and all of its customer data, such as customer profile attributes and their related objects.

<h3 id="deletedomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The unique name of the domain.|
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
  "Message": {}
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

<h3 id="deletedomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDomainResponse](#schemadeletedomainresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateIntegrationWorkflow

<a id="opIdCreateIntegrationWorkflow"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string/workflows/integrations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "WorkflowType": "APPFLOW_INTEGRATION",
    "IntegrationConfig": {
      "AppflowIntegration": {
        "FlowDefinition": {
          "Description": {},
          "FlowName": {},
          "KmsArn": {},
          "SourceFlowConfig": {
            "ConnectorProfileName": {},
            "ConnectorType": {},
            "IncrementalPullConfig": {
              "DatetimeTypeFieldName": {}
            },
            "SourceConnectorProperties": {
              "Marketo": {
                "Object": {}
              },
              "S3": {
                "BucketName": {},
                "BucketPrefix": {}
              },
              "Salesforce": {
                "Object": {},
                "EnableDynamicFieldUpdate": {},
                "IncludeDeletedRecords": {}
              },
              "ServiceNow": {
                "Object": {}
              },
              "Zendesk": {
                "Object": {}
              }
            }
          },
          "Tasks": {},
          "TriggerConfig": {
            "TriggerType": {},
            "TriggerProperties": {
              "Scheduled": {
                "ScheduleExpression": {},
                "DataPullMode": {},
                "ScheduleStartTime": {},
                "ScheduleEndTime": {},
                "Timezone": {},
                "ScheduleOffset": {},
                "FirstExecutionFrom": {}
              }
            }
          }
        },
        "Batches": {}
      }
    },
    "ObjectTypeName": "string",
    "RoleArn": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /domains/{DomainName}/workflows/integrations`

 Creates an integration workflow. An integration workflow is an async process which ingests historic data and sets up an integration for ongoing updates. The supported Amazon AppFlow sources are Salesforce, ServiceNow, and Marketo. 

> Body parameter

```json
{
  "WorkflowType": "APPFLOW_INTEGRATION",
  "IntegrationConfig": {
    "AppflowIntegration": {
      "FlowDefinition": {
        "Description": {},
        "FlowName": {},
        "KmsArn": {},
        "SourceFlowConfig": {
          "ConnectorProfileName": {},
          "ConnectorType": {},
          "IncrementalPullConfig": {
            "DatetimeTypeFieldName": {}
          },
          "SourceConnectorProperties": {
            "Marketo": {
              "Object": {}
            },
            "S3": {
              "BucketName": {},
              "BucketPrefix": {}
            },
            "Salesforce": {
              "Object": {},
              "EnableDynamicFieldUpdate": {},
              "IncludeDeletedRecords": {}
            },
            "ServiceNow": {
              "Object": {}
            },
            "Zendesk": {
              "Object": {}
            }
          }
        },
        "Tasks": {},
        "TriggerConfig": {
          "TriggerType": {},
          "TriggerProperties": {
            "Scheduled": {
              "ScheduleExpression": {},
              "DataPullMode": {},
              "ScheduleStartTime": {},
              "ScheduleEndTime": {},
              "Timezone": {},
              "ScheduleOffset": {},
              "FirstExecutionFrom": {}
            }
          }
        }
      },
      "Batches": {}
    }
  },
  "ObjectTypeName": "string",
  "RoleArn": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createintegrationworkflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The unique name of the domain.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» WorkflowType|body|string|true|The type of workflow. The only supported value is APPFLOW_INTEGRATION.|
|» IntegrationConfig|body|object|true|Configuration data for integration workflow.|
|» » AppflowIntegration|body|object|false|none|
|» » » FlowDefinition|body|[FlowDefinition](#schemaflowdefinition)|true|The configurations that control how Customer Profiles retrieves data from the source, Amazon AppFlow. Customer Profiles uses this information to create an AppFlow flow on behalf of customers.|
|» » » Batches|body|object|false|none|
|» ObjectTypeName|body|string|true|The name of the profile object type.|
|» RoleArn|body|string|true|The Amazon Resource Name (ARN) of the IAM role. Customer Profiles assumes this role to create resources on your behalf as part of workflow execution.|
|» Tags|body|object|false|The tags used to organize, track, or control access for this resource.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» WorkflowType|APPFLOW_INTEGRATION|

> Example responses

> 200 Response

```json
{
  "WorkflowId": {},
  "Message": {}
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

<h3 id="createintegrationworkflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateIntegrationWorkflowResponse](#schemacreateintegrationworkflowresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateProfile

<a id="opIdUpdateProfile"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string/profiles \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ProfileId": "string",
    "AdditionalInformation": "string",
    "AccountNumber": "string",
    "PartyType": "INDIVIDUAL",
    "BusinessName": "string",
    "FirstName": "string",
    "MiddleName": "string",
    "LastName": "string",
    "BirthDate": "string",
    "Gender": "MALE",
    "PhoneNumber": "string",
    "MobilePhoneNumber": "string",
    "HomePhoneNumber": "string",
    "BusinessPhoneNumber": "string",
    "EmailAddress": "string",
    "PersonalEmailAddress": "string",
    "BusinessEmailAddress": "string",
    "Address": {
      "Address1": {},
      "Address2": {},
      "Address3": {},
      "Address4": {},
      "City": {},
      "County": {},
      "State": {},
      "Province": {},
      "Country": {},
      "PostalCode": {}
    },
    "ShippingAddress": {
      "Address1": {},
      "Address2": {},
      "Address3": {},
      "Address4": {},
      "City": {},
      "County": {},
      "State": {},
      "Province": {},
      "Country": {},
      "PostalCode": {}
    },
    "MailingAddress": {
      "Address1": {},
      "Address2": {},
      "Address3": {},
      "Address4": {},
      "City": {},
      "County": {},
      "State": {},
      "Province": {},
      "Country": {},
      "PostalCode": {}
    },
    "BillingAddress": {
      "Address1": {},
      "Address2": {},
      "Address3": {},
      "Address4": {},
      "City": {},
      "County": {},
      "State": {},
      "Province": {},
      "Country": {},
      "PostalCode": {}
    },
    "Attributes": {
      "property1": "string",
      "property2": "string"
    },
    "PartyTypeString": "string",
    "GenderString": "string"
  }'
```

`PUT /domains/{DomainName}/profiles`

<p>Updates the properties of a profile. The ProfileId is required for updating a customer profile.</p> <p>When calling the UpdateProfile API, specifying an empty string value means that any existing value will be removed. Not specifying a string value means that any value already there will be kept.</p>

> Body parameter

```json
{
  "ProfileId": "string",
  "AdditionalInformation": "string",
  "AccountNumber": "string",
  "PartyType": "INDIVIDUAL",
  "BusinessName": "string",
  "FirstName": "string",
  "MiddleName": "string",
  "LastName": "string",
  "BirthDate": "string",
  "Gender": "MALE",
  "PhoneNumber": "string",
  "MobilePhoneNumber": "string",
  "HomePhoneNumber": "string",
  "BusinessPhoneNumber": "string",
  "EmailAddress": "string",
  "PersonalEmailAddress": "string",
  "BusinessEmailAddress": "string",
  "Address": {
    "Address1": {},
    "Address2": {},
    "Address3": {},
    "Address4": {},
    "City": {},
    "County": {},
    "State": {},
    "Province": {},
    "Country": {},
    "PostalCode": {}
  },
  "ShippingAddress": {
    "Address1": {},
    "Address2": {},
    "Address3": {},
    "Address4": {},
    "City": {},
    "County": {},
    "State": {},
    "Province": {},
    "Country": {},
    "PostalCode": {}
  },
  "MailingAddress": {
    "Address1": {},
    "Address2": {},
    "Address3": {},
    "Address4": {},
    "City": {},
    "County": {},
    "State": {},
    "Province": {},
    "Country": {},
    "PostalCode": {}
  },
  "BillingAddress": {
    "Address1": {},
    "Address2": {},
    "Address3": {},
    "Address4": {},
    "City": {},
    "County": {},
    "State": {},
    "Province": {},
    "Country": {},
    "PostalCode": {}
  },
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "PartyTypeString": "string",
  "GenderString": "string"
}
```

<h3 id="updateprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The unique name of the domain.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ProfileId|body|string|true|The unique identifier of a customer profile.|
|» AdditionalInformation|body|string|false|Any additional information relevant to the customer’s profile.|
|» AccountNumber|body|string|false|A unique account number that you have given to the customer.|
|» PartyType|body|string|false|**Deprecated.** The type of profile used to describe the customer.|
|» BusinessName|body|string|false|The name of the customer’s business.|
|» FirstName|body|string|false|The customer’s first name.|
|» MiddleName|body|string|false|The customer’s middle name.|
|» LastName|body|string|false|The customer’s last name.|
|» BirthDate|body|string|false|The customer’s birth date. |
|» Gender|body|string|false|**Deprecated.** The gender with which the customer identifies. |
|» PhoneNumber|body|string|false|The customer’s phone number, which has not been specified as a mobile, home, or business number. |
|» MobilePhoneNumber|body|string|false|The customer’s mobile phone number.|
|» HomePhoneNumber|body|string|false|The customer’s home phone number.|
|» BusinessPhoneNumber|body|string|false|The customer’s business phone number.|
|» EmailAddress|body|string|false|The customer’s email address, which has not been specified as a personal or business address. |
|» PersonalEmailAddress|body|string|false|The customer’s personal email address.|
|» BusinessEmailAddress|body|string|false|The customer’s business email address.|
|» Address|body|object|false|Updates associated with the address properties of a customer profile.|
|» » Address1|body|object|false|none|
|» » Address2|body|object|false|none|
|» » Address3|body|object|false|none|
|» » Address4|body|object|false|none|
|» » City|body|object|false|none|
|» » County|body|object|false|none|
|» » State|body|object|false|none|
|» » Province|body|object|false|none|
|» » Country|body|object|false|none|
|» » PostalCode|body|object|false|none|
|» ShippingAddress|body|object|false|Updates associated with the address properties of a customer profile.|
|» » Address1|body|object|false|none|
|» » Address2|body|object|false|none|
|» » Address3|body|object|false|none|
|» » Address4|body|object|false|none|
|» » City|body|object|false|none|
|» » County|body|object|false|none|
|» » State|body|object|false|none|
|» » Province|body|object|false|none|
|» » Country|body|object|false|none|
|» » PostalCode|body|object|false|none|
|» MailingAddress|body|object|false|Updates associated with the address properties of a customer profile.|
|» » Address1|body|object|false|none|
|» » Address2|body|object|false|none|
|» » Address3|body|object|false|none|
|» » Address4|body|object|false|none|
|» » City|body|object|false|none|
|» » County|body|object|false|none|
|» » State|body|object|false|none|
|» » Province|body|object|false|none|
|» » Country|body|object|false|none|
|» » PostalCode|body|object|false|none|
|» BillingAddress|body|object|false|Updates associated with the address properties of a customer profile.|
|» » Address1|body|object|false|none|
|» » Address2|body|object|false|none|
|» » Address3|body|object|false|none|
|» » Address4|body|object|false|none|
|» » City|body|object|false|none|
|» » County|body|object|false|none|
|» » State|body|object|false|none|
|» » Province|body|object|false|none|
|» » Country|body|object|false|none|
|» » PostalCode|body|object|false|none|
|» Attributes|body|object|false|A key value pair of attributes of a customer profile.|
|» » **additionalProperties**|body|[string0To255](#schemastring0to255)|false|none|
|» PartyTypeString|body|string|false|An alternative to <code>PartyType</code> which accepts any string as input.|
|» GenderString|body|string|false|An alternative to <code>Gender</code> which accepts any string as input.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» PartyType|INDIVIDUAL|
|» PartyType|BUSINESS|
|» PartyType|OTHER|
|» Gender|MALE|
|» Gender|FEMALE|
|» Gender|UNSPECIFIED|

> Example responses

> 200 Response

```json
{
  "ProfileId": {}
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

<h3 id="updateprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateProfileResponse](#schemaupdateprofileresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateProfile

<a id="opIdCreateProfile"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string/profiles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AccountNumber": "string",
    "AdditionalInformation": "string",
    "PartyType": "INDIVIDUAL",
    "BusinessName": "string",
    "FirstName": "string",
    "MiddleName": "string",
    "LastName": "string",
    "BirthDate": "string",
    "Gender": "MALE",
    "PhoneNumber": "string",
    "MobilePhoneNumber": "string",
    "HomePhoneNumber": "string",
    "BusinessPhoneNumber": "string",
    "EmailAddress": "string",
    "PersonalEmailAddress": "string",
    "BusinessEmailAddress": "string",
    "Address": {
      "Address1": {},
      "Address2": {},
      "Address3": {},
      "Address4": {},
      "City": {},
      "County": {},
      "State": {},
      "Province": {},
      "Country": {},
      "PostalCode": {}
    },
    "ShippingAddress": {
      "Address1": {},
      "Address2": {},
      "Address3": {},
      "Address4": {},
      "City": {},
      "County": {},
      "State": {},
      "Province": {},
      "Country": {},
      "PostalCode": {}
    },
    "MailingAddress": {
      "Address1": {},
      "Address2": {},
      "Address3": {},
      "Address4": {},
      "City": {},
      "County": {},
      "State": {},
      "Province": {},
      "Country": {},
      "PostalCode": {}
    },
    "BillingAddress": {
      "Address1": {},
      "Address2": {},
      "Address3": {},
      "Address4": {},
      "City": {},
      "County": {},
      "State": {},
      "Province": {},
      "Country": {},
      "PostalCode": {}
    },
    "Attributes": {
      "property1": "string",
      "property2": "string"
    },
    "PartyTypeString": "string",
    "GenderString": "string"
  }'
```

`POST /domains/{DomainName}/profiles`

<p>Creates a standard profile.</p> <p>A standard profile represents the following attributes for a customer profile in a domain.</p>

> Body parameter

```json
{
  "AccountNumber": "string",
  "AdditionalInformation": "string",
  "PartyType": "INDIVIDUAL",
  "BusinessName": "string",
  "FirstName": "string",
  "MiddleName": "string",
  "LastName": "string",
  "BirthDate": "string",
  "Gender": "MALE",
  "PhoneNumber": "string",
  "MobilePhoneNumber": "string",
  "HomePhoneNumber": "string",
  "BusinessPhoneNumber": "string",
  "EmailAddress": "string",
  "PersonalEmailAddress": "string",
  "BusinessEmailAddress": "string",
  "Address": {
    "Address1": {},
    "Address2": {},
    "Address3": {},
    "Address4": {},
    "City": {},
    "County": {},
    "State": {},
    "Province": {},
    "Country": {},
    "PostalCode": {}
  },
  "ShippingAddress": {
    "Address1": {},
    "Address2": {},
    "Address3": {},
    "Address4": {},
    "City": {},
    "County": {},
    "State": {},
    "Province": {},
    "Country": {},
    "PostalCode": {}
  },
  "MailingAddress": {
    "Address1": {},
    "Address2": {},
    "Address3": {},
    "Address4": {},
    "City": {},
    "County": {},
    "State": {},
    "Province": {},
    "Country": {},
    "PostalCode": {}
  },
  "BillingAddress": {
    "Address1": {},
    "Address2": {},
    "Address3": {},
    "Address4": {},
    "City": {},
    "County": {},
    "State": {},
    "Province": {},
    "Country": {},
    "PostalCode": {}
  },
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "PartyTypeString": "string",
  "GenderString": "string"
}
```

<h3 id="createprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The unique name of the domain.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AccountNumber|body|string|false|A unique account number that you have given to the customer.|
|» AdditionalInformation|body|string|false|Any additional information relevant to the customer’s profile.|
|» PartyType|body|string|false|**Deprecated.** The type of profile used to describe the customer.|
|» BusinessName|body|string|false|The name of the customer’s business.|
|» FirstName|body|string|false|The customer’s first name.|
|» MiddleName|body|string|false|The customer’s middle name.|
|» LastName|body|string|false|The customer’s last name.|
|» BirthDate|body|string|false|The customer’s birth date. |
|» Gender|body|string|false|**Deprecated.** The gender with which the customer identifies. |
|» PhoneNumber|body|string|false|The customer’s phone number, which has not been specified as a mobile, home, or business number. |
|» MobilePhoneNumber|body|string|false|The customer’s mobile phone number.|
|» HomePhoneNumber|body|string|false|The customer’s home phone number.|
|» BusinessPhoneNumber|body|string|false|The customer’s business phone number.|
|» EmailAddress|body|string|false|The customer’s email address, which has not been specified as a personal or business address. |
|» PersonalEmailAddress|body|string|false|The customer’s personal email address.|
|» BusinessEmailAddress|body|string|false|The customer’s business email address.|
|» Address|body|object|false|A generic address associated with the customer that is not mailing, shipping, or billing.|
|» » Address1|body|object|false|none|
|» » Address2|body|object|false|none|
|» » Address3|body|object|false|none|
|» » Address4|body|object|false|none|
|» » City|body|object|false|none|
|» » County|body|object|false|none|
|» » State|body|object|false|none|
|» » Province|body|object|false|none|
|» » Country|body|object|false|none|
|» » PostalCode|body|object|false|none|
|» ShippingAddress|body|object|false|A generic address associated with the customer that is not mailing, shipping, or billing.|
|» » Address1|body|object|false|none|
|» » Address2|body|object|false|none|
|» » Address3|body|object|false|none|
|» » Address4|body|object|false|none|
|» » City|body|object|false|none|
|» » County|body|object|false|none|
|» » State|body|object|false|none|
|» » Province|body|object|false|none|
|» » Country|body|object|false|none|
|» » PostalCode|body|object|false|none|
|» MailingAddress|body|object|false|A generic address associated with the customer that is not mailing, shipping, or billing.|
|» » Address1|body|object|false|none|
|» » Address2|body|object|false|none|
|» » Address3|body|object|false|none|
|» » Address4|body|object|false|none|
|» » City|body|object|false|none|
|» » County|body|object|false|none|
|» » State|body|object|false|none|
|» » Province|body|object|false|none|
|» » Country|body|object|false|none|
|» » PostalCode|body|object|false|none|
|» BillingAddress|body|object|false|A generic address associated with the customer that is not mailing, shipping, or billing.|
|» » Address1|body|object|false|none|
|» » Address2|body|object|false|none|
|» » Address3|body|object|false|none|
|» » Address4|body|object|false|none|
|» » City|body|object|false|none|
|» » County|body|object|false|none|
|» » State|body|object|false|none|
|» » Province|body|object|false|none|
|» » Country|body|object|false|none|
|» » PostalCode|body|object|false|none|
|» Attributes|body|object|false|A key value pair of attributes of a customer profile.|
|» » **additionalProperties**|body|[string1To255](#schemastring1to255)|false|none|
|» PartyTypeString|body|string|false|An alternative to <code>PartyType</code> which accepts any string as input.|
|» GenderString|body|string|false|An alternative to <code>Gender</code> which accepts any string as input.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» PartyType|INDIVIDUAL|
|» PartyType|BUSINESS|
|» PartyType|OTHER|
|» Gender|MALE|
|» Gender|FEMALE|
|» Gender|UNSPECIFIED|

> Example responses

> 200 Response

```json
{
  "ProfileId": {}
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

<h3 id="createprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateProfileResponse](#schemacreateprofileresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteIntegration

<a id="opIdDeleteIntegration"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string/integrations/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Uri": "string"
  }'
```

`POST /domains/{DomainName}/integrations/delete`

Removes an integration from a specific domain.

> Body parameter

```json
{
  "Uri": "string"
}
```

<h3 id="deleteintegration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The unique name of the domain.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Uri|body|string|true|The URI of the S3 bucket or any other type of data source.|

> Example responses

> 200 Response

```json
{
  "Message": {}
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

<h3 id="deleteintegration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteIntegrationResponse](#schemadeleteintegrationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteProfile

<a id="opIdDeleteProfile"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string/profiles/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ProfileId": "string"
  }'
```

`POST /domains/{DomainName}/profiles/delete`

Deletes the standard customer profile and all data pertaining to the profile.

> Body parameter

```json
{
  "ProfileId": "string"
}
```

<h3 id="deleteprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The unique name of the domain.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ProfileId|body|string|true|The unique identifier of a customer profile.|

> Example responses

> 200 Response

```json
{
  "Message": {}
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

<h3 id="deleteprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteProfileResponse](#schemadeleteprofileresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteProfileKey

<a id="opIdDeleteProfileKey"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string/profiles/keys/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ProfileId": "string",
    "KeyName": "string",
    "Values": [
      "string"
    ]
  }'
```

`POST /domains/{DomainName}/profiles/keys/delete`

Removes a searchable key from a customer profile.

> Body parameter

```json
{
  "ProfileId": "string",
  "KeyName": "string",
  "Values": [
    "string"
  ]
}
```

<h3 id="deleteprofilekey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The unique name of the domain.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ProfileId|body|string|true|The unique identifier of a customer profile.|
|» KeyName|body|string|true|A searchable identifier of a customer profile.|
|» Values|body|[[string1To255](#schemastring1to255)]|true|A list of key values.|

> Example responses

> 200 Response

```json
{
  "Message": {}
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

<h3 id="deleteprofilekey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteProfileKeyResponse](#schemadeleteprofilekeyresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteProfileObject

<a id="opIdDeleteProfileObject"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string/profiles/objects/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ProfileId": "string",
    "ProfileObjectUniqueKey": "string",
    "ObjectTypeName": "string"
  }'
```

`POST /domains/{DomainName}/profiles/objects/delete`

Removes an object associated with a profile of a given ProfileObjectType.

> Body parameter

```json
{
  "ProfileId": "string",
  "ProfileObjectUniqueKey": "string",
  "ObjectTypeName": "string"
}
```

<h3 id="deleteprofileobject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The unique name of the domain.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ProfileId|body|string|true|The unique identifier of a customer profile.|
|» ProfileObjectUniqueKey|body|string|true|The unique identifier of the profile object generated by the service.|
|» ObjectTypeName|body|string|true|The name of the profile object type.|

> Example responses

> 200 Response

```json
{
  "Message": {}
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

<h3 id="deleteprofileobject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteProfileObjectResponse](#schemadeleteprofileobjectresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetProfileObjectType

<a id="opIdGetProfileObjectType"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string/object-types/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /domains/{DomainName}/object-types/{ObjectTypeName}`

Returns the object types for a specific domain.

<h3 id="getprofileobjecttype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The unique name of the domain.|
|ObjectTypeName|path|string|true|The name of the profile object type.|
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
  "ObjectTypeName": {},
  "Description": {},
  "TemplateId": {},
  "ExpirationDays": {},
  "EncryptionKey": {},
  "AllowProfileCreation": {},
  "SourceLastUpdatedTimestampFormat": {},
  "Fields": {
    "property1": {
      "Source": {},
      "Target": {},
      "ContentType": {}
    },
    "property2": {
      "Source": {},
      "Target": {},
      "ContentType": {}
    }
  },
  "Keys": {
    "property1": [
      {
        "StandardIdentifiers": {},
        "FieldNames": {}
      }
    ],
    "property2": [
      {
        "StandardIdentifiers": {},
        "FieldNames": {}
      }
    ]
  },
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "Tags": {
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

<h3 id="getprofileobjecttype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetProfileObjectTypeResponse](#schemagetprofileobjecttyperesponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutProfileObjectType

<a id="opIdPutProfileObjectType"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string/object-types/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Description": "string",
    "TemplateId": "string",
    "ExpirationDays": 1,
    "EncryptionKey": "string",
    "AllowProfileCreation": true,
    "SourceLastUpdatedTimestampFormat": "string",
    "Fields": {
      "property1": {
        "Source": {},
        "Target": {},
        "ContentType": {}
      },
      "property2": {
        "Source": {},
        "Target": {},
        "ContentType": {}
      }
    },
    "Keys": {
      "property1": [
        {
          "StandardIdentifiers": {},
          "FieldNames": {}
        }
      ],
      "property2": [
        {
          "StandardIdentifiers": {},
          "FieldNames": {}
        }
      ]
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /domains/{DomainName}/object-types/{ObjectTypeName}`

<p>Defines a ProfileObjectType.</p> <p>To add or remove tags on an existing ObjectType, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html"> TagResource</a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>

> Body parameter

```json
{
  "Description": "string",
  "TemplateId": "string",
  "ExpirationDays": 1,
  "EncryptionKey": "string",
  "AllowProfileCreation": true,
  "SourceLastUpdatedTimestampFormat": "string",
  "Fields": {
    "property1": {
      "Source": {},
      "Target": {},
      "ContentType": {}
    },
    "property2": {
      "Source": {},
      "Target": {},
      "ContentType": {}
    }
  },
  "Keys": {
    "property1": [
      {
        "StandardIdentifiers": {},
        "FieldNames": {}
      }
    ],
    "property2": [
      {
        "StandardIdentifiers": {},
        "FieldNames": {}
      }
    ]
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="putprofileobjecttype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The unique name of the domain.|
|ObjectTypeName|path|string|true|The name of the profile object type.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Description|body|string|true|Description of the profile object type.|
|» TemplateId|body|string|false|A unique identifier for the object template. For some attributes in the request, the service will use the default value from the object template when TemplateId is present. If these attributes are present in the request, the service may return a <code>BadRequestException</code>. These attributes include: AllowProfileCreation, SourceLastUpdatedTimestampFormat, Fields, and Keys. For example, if AllowProfileCreation is set to true when TemplateId is set, the service may return a <code>BadRequestException</code>.|
|» ExpirationDays|body|integer|false|The number of days until the data in the object expires.|
|» EncryptionKey|body|string|false|The customer-provided key to encrypt the profile object that will be created in this profile object type.|
|» AllowProfileCreation|body|boolean|false|Indicates whether a profile should be created when data is received if one doesn’t exist for an object of this type. The default is <code>FALSE</code>. If the AllowProfileCreation flag is set to <code>FALSE</code>, then the service tries to fetch a standard profile and associate this object with the profile. If it is set to <code>TRUE</code>, and if no match is found, then the service creates a new standard profile.|
|» SourceLastUpdatedTimestampFormat|body|string|false|The format of your <code>sourceLastUpdatedTimestamp</code> that was previously set up. |
|» Fields|body|object|false|A map of the name and ObjectType field.|
|» » **additionalProperties**|body|[ObjectTypeField](#schemaobjecttypefield)|false|Represents a field in a ProfileObjectType.|
|» Keys|body|object|false|A list of unique keys that can be used to map data to the profile.|
|» » **additionalProperties**|body|[ObjectTypeKeyList](#schemaobjecttypekeylist)|false|none|
|» Tags|body|object|false|The tags used to organize, track, or control access for this resource.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "ObjectTypeName": {},
  "Description": {},
  "TemplateId": {},
  "ExpirationDays": {},
  "EncryptionKey": {},
  "AllowProfileCreation": {},
  "SourceLastUpdatedTimestampFormat": {},
  "Fields": {
    "property1": {
      "Source": {},
      "Target": {},
      "ContentType": {}
    },
    "property2": {
      "Source": {},
      "Target": {},
      "ContentType": {}
    }
  },
  "Keys": {
    "property1": [
      {
        "StandardIdentifiers": {},
        "FieldNames": {}
      }
    ],
    "property2": [
      {
        "StandardIdentifiers": {},
        "FieldNames": {}
      }
    ]
  },
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "Tags": {
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

<h3 id="putprofileobjecttype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutProfileObjectTypeResponse](#schemaputprofileobjecttyperesponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteProfileObjectType

<a id="opIdDeleteProfileObjectType"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string/object-types/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /domains/{DomainName}/object-types/{ObjectTypeName}`

Removes a ProfileObjectType from a specific domain as well as removes all the ProfileObjects of that type. It also disables integrations from this specific ProfileObjectType. In addition, it scrubs all of the fields of the standard profile that were populated from this ProfileObjectType.

<h3 id="deleteprofileobjecttype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The unique name of the domain.|
|ObjectTypeName|path|string|true|The name of the profile object type.|
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
  "Message": {}
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

<h3 id="deleteprofileobjecttype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteProfileObjectTypeResponse](#schemadeleteprofileobjecttyperesponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetWorkflow

<a id="opIdGetWorkflow"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string/workflows/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /domains/{DomainName}/workflows/{WorkflowId}`

Get details of specified workflow.

<h3 id="getworkflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The unique name of the domain.|
|WorkflowId|path|string|true|Unique identifier for the workflow.|
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
  "WorkflowId": {},
  "WorkflowType": {},
  "Status": {},
  "ErrorDescription": {},
  "StartDate": {},
  "LastUpdatedAt": {},
  "Attributes": {
    "AppflowIntegration": {
      "SourceConnectorType": {},
      "ConnectorProfileName": {},
      "RoleArn": {}
    }
  },
  "Metrics": {
    "AppflowIntegration": {
      "RecordsProcessed": {},
      "StepsCompleted": {},
      "TotalSteps": {}
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

<h3 id="getworkflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetWorkflowResponse](#schemagetworkflowresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteWorkflow

<a id="opIdDeleteWorkflow"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string/workflows/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /domains/{DomainName}/workflows/{WorkflowId}`

Deletes the specified workflow and all its corresponding resources. This is an async process.

<h3 id="deleteworkflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The unique name of the domain.|
|WorkflowId|path|string|true|Unique identifier for the workflow.|
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

<h3 id="deleteworkflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteWorkflowResponse](#schemadeleteworkflowresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAutoMergingPreview

<a id="opIdGetAutoMergingPreview"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string/identity-resolution-jobs/auto-merging-preview \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Consolidation": {
      "MatchingAttributesList": {}
    },
    "ConflictResolution": {
      "ConflictResolvingModel": {},
      "SourceName": {}
    },
    "MinAllowedConfidenceScoreForMerging": 0
  }'
```

`POST /domains/{DomainName}/identity-resolution-jobs/auto-merging-preview`

<p>Tests the auto-merging settings of your Identity Resolution Job without merging your data. It randomly selects a sample of matching groups from the existing matching results, and applies the automerging settings that you provided. You can then view the number of profiles in the sample, the number of matches, and the number of profiles identified to be merged. This enables you to evaluate the accuracy of the attributes in your matching list. </p> <p>You can't view which profiles are matched and would be merged.</p> <important> <p>We strongly recommend you use this API to do a dry run of the automerging process before running the Identity Resolution Job. Include <b>at least</b> two matching attributes. If your matching list includes too few attributes (such as only <code>FirstName</code> or only <code>LastName</code>), there may be a large number of matches. This increases the chances of erroneous merges.</p> </important>

> Body parameter

```json
{
  "Consolidation": {
    "MatchingAttributesList": {}
  },
  "ConflictResolution": {
    "ConflictResolvingModel": {},
    "SourceName": {}
  },
  "MinAllowedConfidenceScoreForMerging": 0
}
```

<h3 id="getautomergingpreview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The unique name of the domain.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Consolidation|body|object|true|The matching criteria to be used during the auto-merging process. |
|» » MatchingAttributesList|body|object|false|none|
|» ConflictResolution|body|object|true|How the auto-merging process should resolve conflicts between different profiles.|
|» » ConflictResolvingModel|body|object|false|none|
|» » SourceName|body|object|false|none|
|» MinAllowedConfidenceScoreForMerging|body|number(double)|false|Minimum confidence score required for profiles within a matching group to be merged during the auto-merge process.|

> Example responses

> 200 Response

```json
{
  "DomainName": {},
  "NumberOfMatchesInSample": {},
  "NumberOfProfilesInSample": {},
  "NumberOfProfilesWillBeMerged": {}
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

<h3 id="getautomergingpreview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAutoMergingPreviewResponse](#schemagetautomergingpreviewresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetIdentityResolutionJob

<a id="opIdGetIdentityResolutionJob"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string/identity-resolution-jobs/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /domains/{DomainName}/identity-resolution-jobs/{JobId}`

<p>Returns information about an Identity Resolution Job in a specific domain. </p> <p>Identity Resolution Jobs are set up using the Amazon Connect admin console. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/use-identity-resolution.html">Use Identity Resolution to consolidate similar profiles</a>.</p>

<h3 id="getidentityresolutionjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The unique name of the domain.|
|JobId|path|string|true|The unique identifier of the Identity Resolution Job.|
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
  "DomainName": {},
  "JobId": {},
  "Status": {},
  "Message": {},
  "JobStartTime": {},
  "JobEndTime": {},
  "LastUpdatedAt": {},
  "JobExpirationTime": {},
  "AutoMerging": {
    "Enabled": {},
    "Consolidation": {
      "MatchingAttributesList": {}
    },
    "ConflictResolution": {
      "ConflictResolvingModel": {},
      "SourceName": {}
    },
    "MinAllowedConfidenceScoreForMerging": {}
  },
  "ExportingLocation": {
    "S3Exporting": {
      "S3BucketName": {},
      "S3KeyName": {}
    }
  },
  "JobStats": {
    "NumberOfProfilesReviewed": {},
    "NumberOfMatchesFound": {},
    "NumberOfMergesDone": {}
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

<h3 id="getidentityresolutionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetIdentityResolutionJobResponse](#schemagetidentityresolutionjobresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListIntegrations

<a id="opIdListIntegrations"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string/integrations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /domains/{DomainName}/integrations`

Lists all of the integrations in your domain.

<h3 id="listintegrations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The unique name of the domain.|
|next-token|query|string|false|The pagination token from the previous ListIntegrations API call.|
|max-results|query|integer|false|The maximum number of objects returned per page.|
|include-hidden|query|boolean|false|Boolean to indicate if hidden integration should be returned. Defaults to <code>False</code>.|
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
  "Items": {},
  "NextToken": {}
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

<h3 id="listintegrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListIntegrationsResponse](#schemalistintegrationsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutIntegration

<a id="opIdPutIntegration"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string/integrations \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Uri": "string",
    "ObjectTypeName": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "FlowDefinition": {
      "Description": {},
      "FlowName": {},
      "KmsArn": {},
      "SourceFlowConfig": {
        "ConnectorProfileName": {},
        "ConnectorType": {},
        "IncrementalPullConfig": {
          "DatetimeTypeFieldName": {}
        },
        "SourceConnectorProperties": {
          "Marketo": {
            "Object": {}
          },
          "S3": {
            "BucketName": {},
            "BucketPrefix": {}
          },
          "Salesforce": {
            "Object": {},
            "EnableDynamicFieldUpdate": {},
            "IncludeDeletedRecords": {}
          },
          "ServiceNow": {
            "Object": {}
          },
          "Zendesk": {
            "Object": {}
          }
        }
      },
      "Tasks": {},
      "TriggerConfig": {
        "TriggerType": {},
        "TriggerProperties": {
          "Scheduled": {
            "ScheduleExpression": {},
            "DataPullMode": {},
            "ScheduleStartTime": {},
            "ScheduleEndTime": {},
            "Timezone": {},
            "ScheduleOffset": {},
            "FirstExecutionFrom": {}
          }
        }
      }
    },
    "ObjectTypeNames": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /domains/{DomainName}/integrations`

<p>Adds an integration between the service and a third-party service, which includes Amazon AppFlow and Amazon Connect.</p> <p>An integration can belong to only one domain.</p> <p>To add or remove tags on an existing Integration, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html"> TagResource </a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html"> UntagResource</a>.</p>

> Body parameter

```json
{
  "Uri": "string",
  "ObjectTypeName": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "FlowDefinition": {
    "Description": {},
    "FlowName": {},
    "KmsArn": {},
    "SourceFlowConfig": {
      "ConnectorProfileName": {},
      "ConnectorType": {},
      "IncrementalPullConfig": {
        "DatetimeTypeFieldName": {}
      },
      "SourceConnectorProperties": {
        "Marketo": {
          "Object": {}
        },
        "S3": {
          "BucketName": {},
          "BucketPrefix": {}
        },
        "Salesforce": {
          "Object": {},
          "EnableDynamicFieldUpdate": {},
          "IncludeDeletedRecords": {}
        },
        "ServiceNow": {
          "Object": {}
        },
        "Zendesk": {
          "Object": {}
        }
      }
    },
    "Tasks": {},
    "TriggerConfig": {
      "TriggerType": {},
      "TriggerProperties": {
        "Scheduled": {
          "ScheduleExpression": {},
          "DataPullMode": {},
          "ScheduleStartTime": {},
          "ScheduleEndTime": {},
          "Timezone": {},
          "ScheduleOffset": {},
          "FirstExecutionFrom": {}
        }
      }
    }
  },
  "ObjectTypeNames": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="putintegration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The unique name of the domain.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Uri|body|string|false|The URI of the S3 bucket or any other type of data source.|
|» ObjectTypeName|body|string|false|The name of the profile object type.|
|» Tags|body|object|false|The tags used to organize, track, or control access for this resource.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» FlowDefinition|body|object|false|The configurations that control how Customer Profiles retrieves data from the source, Amazon AppFlow. Customer Profiles uses this information to create an AppFlow flow on behalf of customers.|
|» » Description|body|object|false|none|
|» » FlowName|body|object|false|none|
|» » KmsArn|body|object|false|none|
|» » SourceFlowConfig|body|object|false|none|
|» » » ConnectorProfileName|body|object|false|none|
|» » » ConnectorType|body|object|true|none|
|» » » IncrementalPullConfig|body|object|false|none|
|» » » » DatetimeTypeFieldName|body|object|false|none|
|» » » SourceConnectorProperties|body|object|true|none|
|» » » » Marketo|body|object|false|none|
|» » » » » Object|body|object|true|none|
|» » » » S3|body|object|false|none|
|» » » » » BucketName|body|object|true|none|
|» » » » » BucketPrefix|body|object|false|none|
|» » » » Salesforce|body|object|false|none|
|» » » » » Object|body|object|true|none|
|» » » » » EnableDynamicFieldUpdate|body|object|false|none|
|» » » » » IncludeDeletedRecords|body|object|false|none|
|» » » » ServiceNow|body|object|false|none|
|» » » » » Object|body|object|true|none|
|» » » » Zendesk|body|object|false|none|
|» » » » » Object|body|object|true|none|
|» » Tasks|body|object|false|none|
|» » TriggerConfig|body|object|false|none|
|» » » TriggerType|body|object|true|none|
|» » » TriggerProperties|body|object|false|none|
|» » » » Scheduled|body|object|false|none|
|» » » » » ScheduleExpression|body|object|true|none|
|» » » » » DataPullMode|body|object|false|none|
|» » » » » ScheduleStartTime|body|object|false|none|
|» » » » » ScheduleEndTime|body|object|false|none|
|» » » » » Timezone|body|object|false|none|
|» » » » » ScheduleOffset|body|object|false|none|
|» » » » » FirstExecutionFrom|body|object|false|none|
|» ObjectTypeNames|body|object|false|A map in which each key is an event type from an external application such as Segment or Shopify, and each value is an <code>ObjectTypeName</code> (template) used to ingest the event. It supports the following event types: <code>SegmentIdentify</code>, <code>ShopifyCreateCustomers</code>, <code>ShopifyUpdateCustomers</code>, <code>ShopifyCreateDraftOrders</code>, <code>ShopifyUpdateDraftOrders</code>, <code>ShopifyCreateOrders</code>, and <code>ShopifyUpdatedOrders</code>.|
|» » **additionalProperties**|body|[typeName](#schematypename)|false|none|

> Example responses

> 200 Response

```json
{
  "DomainName": {},
  "Uri": {},
  "ObjectTypeName": {},
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "ObjectTypeNames": {
    "property1": "string",
    "property2": "string"
  },
  "WorkflowId": {},
  "IsUnstructured": {}
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

<h3 id="putintegration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutIntegrationResponse](#schemaputintegrationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetIntegration

<a id="opIdGetIntegration"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string/integrations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Uri": "string"
  }'
```

`POST /domains/{DomainName}/integrations`

Returns an integration for a domain.

> Body parameter

```json
{
  "Uri": "string"
}
```

<h3 id="getintegration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The unique name of the domain.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Uri|body|string|true|The URI of the S3 bucket or any other type of data source.|

> Example responses

> 200 Response

```json
{
  "DomainName": {},
  "Uri": {},
  "ObjectTypeName": {},
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "ObjectTypeNames": {
    "property1": "string",
    "property2": "string"
  },
  "WorkflowId": {},
  "IsUnstructured": {}
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

<h3 id="getintegration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetIntegrationResponse](#schemagetintegrationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMatches

<a id="opIdGetMatches"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string/matches \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /domains/{DomainName}/matches`

<p>Before calling this API, use <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html">CreateDomain</a> or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html">UpdateDomain</a> to enable identity resolution: set <code>Matching</code> to true.</p> <p>GetMatches returns potentially matching profiles, based on the results of the latest run of a machine learning process. </p> <important> <p>The process of matching duplicate profiles. If <code>Matching</code> = <code>true</code>, Amazon Connect Customer Profiles starts a weekly batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every Saturday at 12AM UTC to detect duplicate profiles in your domains. </p> <p>After the Identity Resolution Job completes, use the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a> API to return and review the results. Or, if you have configured <code>ExportingConfig</code> in the <code>MatchingRequest</code>, you can download the results from S3.</p> </important> <p>Amazon Connect uses the following profile attributes to identify matches:</p> <ul> <li> <p>PhoneNumber</p> </li> <li> <p>HomePhoneNumber</p> </li> <li> <p>BusinessPhoneNumber</p> </li> <li> <p>MobilePhoneNumber</p> </li> <li> <p>EmailAddress</p> </li> <li> <p>PersonalEmailAddress</p> </li> <li> <p>BusinessEmailAddress</p> </li> <li> <p>FullName</p> </li> </ul> <p>For example, two or more profiles—with spelling mistakes such as <b>John Doe</b> and <b>Jhn Doe</b>, or different casing email addresses such as <b>JOHN_DOE@ANYCOMPANY.COM</b> and <b>johndoe@anycompany.com</b>, or different phone number formats such as <b>555-010-0000</b> and <b>+1-555-010-0000</b>—can be detected as belonging to the same customer <b>John Doe</b> and merged into a unified profile.</p>

<h3 id="getmatches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|next-token|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|max-results|query|integer|false|The maximum number of results to return per page.|
|DomainName|path|string|true|The unique name of the domain.|
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
  "NextToken": {},
  "MatchGenerationDate": {},
  "PotentialMatches": {},
  "Matches": {}
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

<h3 id="getmatches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMatchesResponse](#schemagetmatchesresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetProfileObjectTypeTemplate

<a id="opIdGetProfileObjectTypeTemplate"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/templates/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /templates/{TemplateId}`

<p>Returns the template information for a specific object type.</p> <p>A template is a predefined ProfileObjectType, such as “Salesforce-Account” or “Salesforce-Contact.” When a user sends a ProfileObject, using the PutProfileObject API, with an ObjectTypeName that matches one of the TemplateIds, it uses the mappings from the template.</p>

<h3 id="getprofileobjecttypetemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TemplateId|path|string|true|A unique identifier for the object template.|
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
  "TemplateId": {},
  "SourceName": {},
  "SourceObject": {},
  "AllowProfileCreation": {},
  "SourceLastUpdatedTimestampFormat": {},
  "Fields": {
    "property1": {
      "Source": {},
      "Target": {},
      "ContentType": {}
    },
    "property2": {
      "Source": {},
      "Target": {},
      "ContentType": {}
    }
  },
  "Keys": {
    "property1": [
      {
        "StandardIdentifiers": {},
        "FieldNames": {}
      }
    ],
    "property2": [
      {
        "StandardIdentifiers": {},
        "FieldNames": {}
      }
    ]
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

<h3 id="getprofileobjecttypetemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetProfileObjectTypeTemplateResponse](#schemagetprofileobjecttypetemplateresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetWorkflowSteps

<a id="opIdGetWorkflowSteps"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string/workflows/string/steps \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /domains/{DomainName}/workflows/{WorkflowId}/steps`

Get granular list of steps in workflow.

<h3 id="getworkflowsteps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The unique name of the domain.|
|WorkflowId|path|string|true|Unique identifier for the workflow.|
|next-token|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|max-results|query|integer|false|The maximum number of results to return per page.|
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
  "WorkflowId": {},
  "WorkflowType": {},
  "Items": {},
  "NextToken": {}
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

<h3 id="getworkflowsteps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetWorkflowStepsResponse](#schemagetworkflowstepsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAccountIntegrations

<a id="opIdListAccountIntegrations"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/integrations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Uri": "string"
  }'
```

`POST /integrations`

Lists all of the integrations associated to a specific URI in the AWS account.

> Body parameter

```json
{
  "Uri": "string"
}
```

<h3 id="listaccountintegrations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|next-token|query|string|false|The pagination token from the previous ListAccountIntegrations API call.|
|max-results|query|integer|false|The maximum number of objects returned per page.|
|include-hidden|query|boolean|false|Boolean to indicate if hidden integration should be returned. Defaults to <code>False</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Uri|body|string|true|The URI of the S3 bucket or any other type of data source.|

> Example responses

> 200 Response

```json
{
  "Items": {},
  "NextToken": {}
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

<h3 id="listaccountintegrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAccountIntegrationsResponse](#schemalistaccountintegrationsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDomains

<a id="opIdListDomains"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /domains`

Returns a list of all the domains for an AWS account that have been created.

<h3 id="listdomains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|next-token|query|string|false|The pagination token from the previous ListDomain API call.|
|max-results|query|integer|false|The maximum number of objects returned per page.|
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
  "Items": {},
  "NextToken": {}
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

<h3 id="listdomains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDomainsResponse](#schemalistdomainsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListIdentityResolutionJobs

<a id="opIdListIdentityResolutionJobs"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string/identity-resolution-jobs \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /domains/{DomainName}/identity-resolution-jobs`

Lists all of the Identity Resolution Jobs in your domain. The response sorts the list by <code>JobStartTime</code>.

<h3 id="listidentityresolutionjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The unique name of the domain.|
|next-token|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|max-results|query|integer|false|The maximum number of results to return per page.|
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
  "IdentityResolutionJobsList": {},
  "NextToken": {}
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

<h3 id="listidentityresolutionjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListIdentityResolutionJobsResponse](#schemalistidentityresolutionjobsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListProfileObjectTypeTemplates

<a id="opIdListProfileObjectTypeTemplates"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/templates \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /templates`

Lists all of the template information for object types.

<h3 id="listprofileobjecttypetemplates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|next-token|query|string|false|The pagination token from the previous ListObjectTypeTemplates API call.|
|max-results|query|integer|false|The maximum number of objects returned per page.|
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
  "Items": {},
  "NextToken": {}
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

<h3 id="listprofileobjecttypetemplates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListProfileObjectTypeTemplatesResponse](#schemalistprofileobjecttypetemplatesresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListProfileObjectTypes

<a id="opIdListProfileObjectTypes"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string/object-types \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /domains/{DomainName}/object-types`

Lists all of the templates available within the service.

<h3 id="listprofileobjecttypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The unique name of the domain.|
|next-token|query|string|false|Identifies the next page of results to return.|
|max-results|query|integer|false|The maximum number of objects returned per page.|
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
  "Items": {},
  "NextToken": {}
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

<h3 id="listprofileobjecttypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListProfileObjectTypesResponse](#schemalistprofileobjecttypesresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutProfileObject

<a id="opIdPutProfileObject"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string/profiles/objects \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ObjectTypeName": "string",
    "Object": "string"
  }'
```

`PUT /domains/{DomainName}/profiles/objects`

<p>Adds additional objects to customer profiles of a given ObjectType.</p> <p>When adding a specific profile object, like a Contact Record, an inferred profile can get created if it is not mapped to an existing profile. The resulting profile will only have a phone number populated in the standard ProfileObject. Any additional Contact Records with the same phone number will be mapped to the same inferred profile.</p> <p>When a ProfileObject is created and if a ProfileObjectType already exists for the ProfileObject, it will provide data to a standard profile depending on the ProfileObjectType definition.</p> <p>PutProfileObject needs an ObjectType, which can be created using PutProfileObjectType.</p>

> Body parameter

```json
{
  "ObjectTypeName": "string",
  "Object": "string"
}
```

<h3 id="putprofileobject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The unique name of the domain.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ObjectTypeName|body|string|true|The name of the profile object type.|
|» Object|body|string|true|A string that is serialized from a JSON object.|

> Example responses

> 200 Response

```json
{
  "ProfileObjectUniqueKey": {}
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

<h3 id="putprofileobject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutProfileObjectResponse](#schemaputprofileobjectresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListProfileObjects

<a id="opIdListProfileObjects"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string/profiles/objects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ObjectTypeName": "string",
    "ProfileId": "string",
    "ObjectFilter": {
      "KeyName": {},
      "Values": {}
    }
  }'
```

`POST /domains/{DomainName}/profiles/objects`

Returns a list of objects associated with a profile of a given ProfileObjectType.

> Body parameter

```json
{
  "ObjectTypeName": "string",
  "ProfileId": "string",
  "ObjectFilter": {
    "KeyName": {},
    "Values": {}
  }
}
```

<h3 id="listprofileobjects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|next-token|query|string|false|The pagination token from the previous call to ListProfileObjects.|
|max-results|query|integer|false|The maximum number of objects returned per page.|
|DomainName|path|string|true|The unique name of the domain.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ObjectTypeName|body|string|true|The name of the profile object type.|
|» ProfileId|body|string|true|The unique identifier of a customer profile.|
|» ObjectFilter|body|object|false|The filter applied to ListProfileObjects response to include profile objects with the specified index values. This filter is only supported for ObjectTypeName _asset, _case and _order.|
|» » KeyName|body|object|false|none|
|» » Values|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "Items": {},
  "NextToken": {}
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

<h3 id="listprofileobjects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListProfileObjectsResponse](#schemalistprofileobjectsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

Displays the tags associated with an Amazon Connect Customer Profiles resource. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The ARN of the resource for which you want to view tags.|
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/tags/string \
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

<p>Assigns one or more tags (key-value pairs) to the specified Amazon Connect Customer Profiles resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.</p> <p>Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.</p> <p>You can use the TagResource action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p>

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
|resourceArn|path|string|true|The ARN of the resource that you're adding tags to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|The tags used to organize, track, or control access for this resource.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListWorkflows

<a id="opIdListWorkflows"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string/workflows \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "WorkflowType": "APPFLOW_INTEGRATION",
    "Status": "NOT_STARTED",
    "QueryStartDate": "1970-01-01T00:00:00Z",
    "QueryEndDate": "1970-01-01T00:00:00Z"
  }'
```

`POST /domains/{DomainName}/workflows`

Query to list all workflows.

> Body parameter

```json
{
  "WorkflowType": "APPFLOW_INTEGRATION",
  "Status": "NOT_STARTED",
  "QueryStartDate": "1970-01-01T00:00:00Z",
  "QueryEndDate": "1970-01-01T00:00:00Z"
}
```

<h3 id="listworkflows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The unique name of the domain.|
|next-token|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|max-results|query|integer|false|The maximum number of results to return per page.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» WorkflowType|body|string|false|The type of workflow. The only supported value is APPFLOW_INTEGRATION.|
|» Status|body|string|false|Status of workflow execution.|
|» QueryStartDate|body|string(date-time)|false|Retrieve workflows started after timestamp.|
|» QueryEndDate|body|string(date-time)|false|Retrieve workflows ended after timestamp.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» WorkflowType|APPFLOW_INTEGRATION|
|» Status|NOT_STARTED|
|» Status|IN_PROGRESS|
|» Status|COMPLETE|
|» Status|FAILED|
|» Status|SPLIT|
|» Status|RETRY|
|» Status|CANCELLED|

> Example responses

> 200 Response

```json
{
  "Items": {},
  "NextToken": {}
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

<h3 id="listworkflows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListWorkflowsResponse](#schemalistworkflowsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## MergeProfiles

<a id="opIdMergeProfiles"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string/profiles/objects/merge \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MainProfileId": "string",
    "ProfileIdsToBeMerged": [
      "string"
    ],
    "FieldSourceProfileIds": {
      "AccountNumber": {},
      "AdditionalInformation": {},
      "PartyType": {},
      "BusinessName": {},
      "FirstName": {},
      "MiddleName": {},
      "LastName": {},
      "BirthDate": {},
      "Gender": {},
      "PhoneNumber": {},
      "MobilePhoneNumber": {},
      "HomePhoneNumber": {},
      "BusinessPhoneNumber": {},
      "EmailAddress": {},
      "PersonalEmailAddress": {},
      "BusinessEmailAddress": {},
      "Address": {},
      "ShippingAddress": {},
      "MailingAddress": {},
      "BillingAddress": {},
      "Attributes": {
        "property1": "string",
        "property2": "string"
      }
    }
  }'
```

`POST /domains/{DomainName}/profiles/objects/merge`

<p>Runs an AWS Lambda job that does the following:</p> <ol> <li> <p>All the profileKeys in the <code>ProfileToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>All the objects in the <code>ProfileToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>All the <code>ProfileToBeMerged</code> will be deleted at the end.</p> </li> <li> <p>All the profileKeys in the <code>ProfileIdsToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>Standard fields are merged as follows:</p> <ol> <li> <p>Fields are always "union"-ed if there are no conflicts in standard fields or attributeKeys.</p> </li> <li> <p>When there are conflicting fields:</p> <ol> <li> <p>If no <code>SourceProfileIds</code> entry is specified, the main Profile value is always taken. </p> </li> <li> <p>If a <code>SourceProfileIds</code> entry is specified, the specified profileId is always taken, even if it is a NULL value.</p> </li> </ol> </li> </ol> </li> </ol> <p>You can use MergeProfiles together with <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a>, which returns potentially matching profiles, or use it with the results of another matching system. After profiles have been merged, they cannot be separated (unmerged).</p>

> Body parameter

```json
{
  "MainProfileId": "string",
  "ProfileIdsToBeMerged": [
    "string"
  ],
  "FieldSourceProfileIds": {
    "AccountNumber": {},
    "AdditionalInformation": {},
    "PartyType": {},
    "BusinessName": {},
    "FirstName": {},
    "MiddleName": {},
    "LastName": {},
    "BirthDate": {},
    "Gender": {},
    "PhoneNumber": {},
    "MobilePhoneNumber": {},
    "HomePhoneNumber": {},
    "BusinessPhoneNumber": {},
    "EmailAddress": {},
    "PersonalEmailAddress": {},
    "BusinessEmailAddress": {},
    "Address": {},
    "ShippingAddress": {},
    "MailingAddress": {},
    "BillingAddress": {},
    "Attributes": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

<h3 id="mergeprofiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The unique name of the domain.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» MainProfileId|body|string|true|The identifier of the profile to be taken.|
|» ProfileIdsToBeMerged|body|[[uuid](#schemauuid)]|true|The identifier of the profile to be merged into MainProfileId.|
|» FieldSourceProfileIds|body|object|false|A duplicate customer profile that is to be merged into a main profile. |
|» » AccountNumber|body|object|false|none|
|» » AdditionalInformation|body|object|false|none|
|» » PartyType|body|object|false|none|
|» » BusinessName|body|object|false|none|
|» » FirstName|body|object|false|none|
|» » MiddleName|body|object|false|none|
|» » LastName|body|object|false|none|
|» » BirthDate|body|object|false|none|
|» » Gender|body|object|false|none|
|» » PhoneNumber|body|object|false|none|
|» » MobilePhoneNumber|body|object|false|none|
|» » HomePhoneNumber|body|object|false|none|
|» » BusinessPhoneNumber|body|object|false|none|
|» » EmailAddress|body|object|false|none|
|» » PersonalEmailAddress|body|object|false|none|
|» » BusinessEmailAddress|body|object|false|none|
|» » Address|body|object|false|none|
|» » ShippingAddress|body|object|false|none|
|» » MailingAddress|body|object|false|none|
|» » BillingAddress|body|object|false|none|
|» » Attributes|body|object|false|none|
|» » » **additionalProperties**|body|[uuid](#schemauuid)|false|none|

> Example responses

> 200 Response

```json
{
  "Message": {}
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

<h3 id="mergeprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MergeProfilesResponse](#schemamergeprofilesresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchProfiles

<a id="opIdSearchProfiles"></a>

> Code samples

```bash
curl https://customer-profiles.us-east-1.amazonaws.com/domains/string/profiles/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "KeyName": "string",
    "Values": [
      "string"
    ],
    "AdditionalSearchKeys": [
      {
        "KeyName": {},
        "Values": {}
      }
    ],
    "LogicalOperator": "AND"
  }'
```

`POST /domains/{DomainName}/profiles/search`

<p>Searches for profiles within a specific domain using one or more predefined search keys (e.g., _fullName, _phone, _email, _account, etc.) and/or custom-defined search keys. A search key is a data type pair that consists of a <code>KeyName</code> and <code>Values</code> list.</p> <p>This operation supports searching for profiles with a minimum of 1 key-value(s) pair and up to 5 key-value(s) pairs using either <code>AND</code> or <code>OR</code> logic.</p>

> Body parameter

```json
{
  "KeyName": "string",
  "Values": [
    "string"
  ],
  "AdditionalSearchKeys": [
    {
      "KeyName": {},
      "Values": {}
    }
  ],
  "LogicalOperator": "AND"
}
```

<h3 id="searchprofiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|next-token|query|string|false|The pagination token from the previous SearchProfiles API call.|
|max-results|query|integer|false|<p>The maximum number of objects returned per page.</p> <p>The default is 20 if this parameter is not included in the request.</p>|
|DomainName|path|string|true|The unique name of the domain.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» KeyName|body|string|true|A searchable identifier of a customer profile. The predefined keys you can use to search include: _account, _profileId, _assetId, _caseId, _orderId, _fullName, _phone, _email, _ctrContactId, _marketoLeadId, _salesforceAccountId, _salesforceContactId, _salesforceAssetId, _zendeskUserId, _zendeskExternalId, _zendeskTicketId, _serviceNowSystemId, _serviceNowIncidentId, _segmentUserId, _shopifyCustomerId, _shopifyOrderId.|
|» Values|body|[[string1To255](#schemastring1to255)]|true|A list of key values.|
|» AdditionalSearchKeys|body|[[AdditionalSearchKey](#schemaadditionalsearchkey)]|false|A list of <code>AdditionalSearchKey</code> objects that are each searchable identifiers of a profile. Each <code>AdditionalSearchKey</code> object contains a <code>KeyName</code> and a list of <code>Values</code> associated with that specific key (i.e., a key-value(s) pair). These additional search keys will be used in conjunction with the <code>LogicalOperator</code> and the required <code>KeyName</code> and <code>Values</code> parameters to search for profiles that satisfy the search criteria. |
|» LogicalOperator|body|string|false|<p>Relationship between all specified search keys that will be used to search for profiles. This includes the required <code>KeyName</code> and <code>Values</code> parameters as well as any key-value(s) pairs specified in the <code>AdditionalSearchKeys</code> list.</p> <p>This parameter influences which profiles will be returned in the response in the following manner:</p> <ul> <li> <p> <code>AND</code> - The response only includes profiles that match all of the search keys.</p> </li> <li> <p> <code>OR</code> - The response includes profiles that match at least one of the search keys.</p> </li> </ul> <p>The <code>OR</code> relationship is the default behavior if this parameter is not included in the request.</p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» LogicalOperator|AND|
|» LogicalOperator|OR|

> Example responses

> 200 Response

```json
{
  "Items": {},
  "NextToken": {}
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

<h3 id="searchprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchProfilesResponse](#schemasearchprofilesresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://customer-profiles.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

Removes one or more tags from the specified Amazon Connect Customer Profiles resource. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The ARN of the resource from which you are removing tags.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|The list of tag keys to remove from the resource.|
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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AddProfileKeyResponse">AddProfileKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddprofilekeyresponse"></a>
<a id="schema_AddProfileKeyResponse"></a>
<a id="tocSaddprofilekeyresponse"></a>
<a id="tocsaddprofilekeyresponse"></a>

```json
{
  "KeyName": {},
  "Values": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyName|object|false|none|none|
|Values|object|false|none|none|

<h2 id="tocS_string1To255">string1To255</h2>
<!-- backwards compatibility -->
<a id="schemastring1to255"></a>
<a id="schema_string1To255"></a>
<a id="tocSstring1to255"></a>
<a id="tocsstring1to255"></a>

```json
"string"
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

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

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

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

```json
null
```

<h2 id="tocS_CreateDomainResponse">CreateDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedomainresponse"></a>
<a id="schema_CreateDomainResponse"></a>
<a id="tocScreatedomainresponse"></a>
<a id="tocscreatedomainresponse"></a>

```json
{
  "DomainName": {},
  "DefaultExpirationDays": {},
  "DefaultEncryptionKey": {},
  "DeadLetterQueueUrl": {},
  "Matching": {
    "Enabled": {},
    "JobSchedule": {
      "DayOfTheWeek": {},
      "Time": {}
    },
    "AutoMerging": {
      "Enabled": {},
      "Consolidation": {
        "MatchingAttributesList": {}
      },
      "ConflictResolution": {
        "ConflictResolvingModel": {},
        "SourceName": {}
      },
      "MinAllowedConfidenceScoreForMerging": {}
    },
    "ExportingConfig": {
      "S3Exporting": {
        "S3BucketName": {},
        "S3KeyName": {}
      }
    }
  },
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|DefaultExpirationDays|object|true|none|none|
|DefaultEncryptionKey|object|false|none|none|
|DeadLetterQueueUrl|object|false|none|none|
|Matching|object|false|none|none|
|CreatedAt|object|true|none|none|
|LastUpdatedAt|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_optionalBoolean">optionalBoolean</h2>
<!-- backwards compatibility -->
<a id="schemaoptionalboolean"></a>
<a id="schema_optionalBoolean"></a>
<a id="tocSoptionalboolean"></a>
<a id="tocsoptionalboolean"></a>

```json
true
```

<h2 id="tocS_JobSchedule">JobSchedule</h2>
<!-- backwards compatibility -->
<a id="schemajobschedule"></a>
<a id="schema_JobSchedule"></a>
<a id="tocSjobschedule"></a>
<a id="tocsjobschedule"></a>

```json
{
  "DayOfTheWeek": {},
  "Time": {}
}
```

The day and time when do you want to start the Identity Resolution Job every week.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DayOfTheWeek|object|true|none|none|
|Time|object|true|none|none|

<h2 id="tocS_AutoMerging">AutoMerging</h2>
<!-- backwards compatibility -->
<a id="schemaautomerging"></a>
<a id="schema_AutoMerging"></a>
<a id="tocSautomerging"></a>
<a id="tocsautomerging"></a>

```json
{
  "Enabled": {},
  "Consolidation": {
    "MatchingAttributesList": {}
  },
  "ConflictResolution": {
    "ConflictResolvingModel": {},
    "SourceName": {}
  },
  "MinAllowedConfidenceScoreForMerging": {}
}
```

Configuration settings for how to perform the auto-merging of profiles.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|true|none|none|
|Consolidation|object|false|none|none|
|ConflictResolution|object|false|none|none|
|MinAllowedConfidenceScoreForMerging|object|false|none|none|

<h2 id="tocS_ExportingConfig">ExportingConfig</h2>
<!-- backwards compatibility -->
<a id="schemaexportingconfig"></a>
<a id="schema_ExportingConfig"></a>
<a id="tocSexportingconfig"></a>
<a id="tocsexportingconfig"></a>

```json
{
  "S3Exporting": {
    "S3BucketName": {},
    "S3KeyName": {}
  }
}
```

<p>Configuration information about the S3 bucket where Identity Resolution Jobs writes result files. </p> <note> <p>You need to give Customer Profiles service principal write permission to your S3 bucket. Otherwise, you'll get an exception in the API response. For an example policy, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html#customer-profiles-cross-service">Amazon Connect Customer Profiles cross-service confused deputy prevention</a>. </p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Exporting|object|false|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_CreateIntegrationWorkflowResponse">CreateIntegrationWorkflowResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateintegrationworkflowresponse"></a>
<a id="schema_CreateIntegrationWorkflowResponse"></a>
<a id="tocScreateintegrationworkflowresponse"></a>
<a id="tocscreateintegrationworkflowresponse"></a>

```json
{
  "WorkflowId": {},
  "Message": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkflowId|object|true|none|none|
|Message|object|true|none|none|

<h2 id="tocS_AppflowIntegration">AppflowIntegration</h2>
<!-- backwards compatibility -->
<a id="schemaappflowintegration"></a>
<a id="schema_AppflowIntegration"></a>
<a id="tocSappflowintegration"></a>
<a id="tocsappflowintegration"></a>

```json
{
  "FlowDefinition": {
    "Description": {},
    "FlowName": {},
    "KmsArn": {},
    "SourceFlowConfig": {
      "ConnectorProfileName": {},
      "ConnectorType": {},
      "IncrementalPullConfig": {
        "DatetimeTypeFieldName": {}
      },
      "SourceConnectorProperties": {
        "Marketo": {
          "Object": {}
        },
        "S3": {
          "BucketName": {},
          "BucketPrefix": {}
        },
        "Salesforce": {
          "Object": {},
          "EnableDynamicFieldUpdate": {},
          "IncludeDeletedRecords": {}
        },
        "ServiceNow": {
          "Object": {}
        },
        "Zendesk": {
          "Object": {}
        }
      }
    },
    "Tasks": {},
    "TriggerConfig": {
      "TriggerType": {},
      "TriggerProperties": {
        "Scheduled": {
          "ScheduleExpression": {},
          "DataPullMode": {},
          "ScheduleStartTime": {},
          "ScheduleEndTime": {},
          "Timezone": {},
          "ScheduleOffset": {},
          "FirstExecutionFrom": {}
        }
      }
    }
  },
  "Batches": {}
}
```

Details for workflow of type <code>APPFLOW_INTEGRATION</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlowDefinition|[FlowDefinition](#schemaflowdefinition)|true|none|The configurations that control how Customer Profiles retrieves data from the source, Amazon AppFlow. Customer Profiles uses this information to create an AppFlow flow on behalf of customers.|
|Batches|object|false|none|none|

<h2 id="tocS_CreateProfileResponse">CreateProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateprofileresponse"></a>
<a id="schema_CreateProfileResponse"></a>
<a id="tocScreateprofileresponse"></a>
<a id="tocscreateprofileresponse"></a>

```json
{
  "ProfileId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProfileId|object|true|none|none|

<h2 id="tocS_DeleteDomainResponse">DeleteDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedomainresponse"></a>
<a id="schema_DeleteDomainResponse"></a>
<a id="tocSdeletedomainresponse"></a>
<a id="tocsdeletedomainresponse"></a>

```json
{
  "Message": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|object|true|none|none|

<h2 id="tocS_DeleteIntegrationResponse">DeleteIntegrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteintegrationresponse"></a>
<a id="schema_DeleteIntegrationResponse"></a>
<a id="tocSdeleteintegrationresponse"></a>
<a id="tocsdeleteintegrationresponse"></a>

```json
{
  "Message": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|object|true|none|none|

<h2 id="tocS_DeleteProfileResponse">DeleteProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprofileresponse"></a>
<a id="schema_DeleteProfileResponse"></a>
<a id="tocSdeleteprofileresponse"></a>
<a id="tocsdeleteprofileresponse"></a>

```json
{
  "Message": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|object|false|none|none|

<h2 id="tocS_DeleteProfileKeyResponse">DeleteProfileKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprofilekeyresponse"></a>
<a id="schema_DeleteProfileKeyResponse"></a>
<a id="tocSdeleteprofilekeyresponse"></a>
<a id="tocsdeleteprofilekeyresponse"></a>

```json
{
  "Message": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|object|false|none|none|

<h2 id="tocS_DeleteProfileObjectResponse">DeleteProfileObjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprofileobjectresponse"></a>
<a id="schema_DeleteProfileObjectResponse"></a>
<a id="tocSdeleteprofileobjectresponse"></a>
<a id="tocsdeleteprofileobjectresponse"></a>

```json
{
  "Message": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|object|false|none|none|

<h2 id="tocS_DeleteProfileObjectTypeResponse">DeleteProfileObjectTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprofileobjecttyperesponse"></a>
<a id="schema_DeleteProfileObjectTypeResponse"></a>
<a id="tocSdeleteprofileobjecttyperesponse"></a>
<a id="tocsdeleteprofileobjecttyperesponse"></a>

```json
{
  "Message": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|object|true|none|none|

<h2 id="tocS_DeleteWorkflowResponse">DeleteWorkflowResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteworkflowresponse"></a>
<a id="schema_DeleteWorkflowResponse"></a>
<a id="tocSdeleteworkflowresponse"></a>
<a id="tocsdeleteworkflowresponse"></a>

```json
{}
```

<h2 id="tocS_GetAutoMergingPreviewResponse">GetAutoMergingPreviewResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetautomergingpreviewresponse"></a>
<a id="schema_GetAutoMergingPreviewResponse"></a>
<a id="tocSgetautomergingpreviewresponse"></a>
<a id="tocsgetautomergingpreviewresponse"></a>

```json
{
  "DomainName": {},
  "NumberOfMatchesInSample": {},
  "NumberOfProfilesInSample": {},
  "NumberOfProfilesWillBeMerged": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|NumberOfMatchesInSample|object|false|none|none|
|NumberOfProfilesInSample|object|false|none|none|
|NumberOfProfilesWillBeMerged|object|false|none|none|

<h2 id="tocS_MatchingAttributesList">MatchingAttributesList</h2>
<!-- backwards compatibility -->
<a id="schemamatchingattributeslist"></a>
<a id="schema_MatchingAttributesList"></a>
<a id="tocSmatchingattributeslist"></a>
<a id="tocsmatchingattributeslist"></a>

```json
[
  [
    "string"
  ]
]
```

<h2 id="tocS_ConflictResolvingModel">ConflictResolvingModel</h2>
<!-- backwards compatibility -->
<a id="schemaconflictresolvingmodel"></a>
<a id="schema_ConflictResolvingModel"></a>
<a id="tocSconflictresolvingmodel"></a>
<a id="tocsconflictresolvingmodel"></a>

```json
"RECENCY"
```

<h2 id="tocS_GetDomainResponse">GetDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdomainresponse"></a>
<a id="schema_GetDomainResponse"></a>
<a id="tocSgetdomainresponse"></a>
<a id="tocsgetdomainresponse"></a>

```json
{
  "DomainName": {},
  "DefaultExpirationDays": {},
  "DefaultEncryptionKey": {},
  "DeadLetterQueueUrl": {},
  "Stats": {
    "ProfileCount": {},
    "MeteringProfileCount": {},
    "ObjectCount": {},
    "TotalSize": {}
  },
  "Matching": {
    "Enabled": {},
    "JobSchedule": {
      "DayOfTheWeek": {},
      "Time": {}
    },
    "AutoMerging": {
      "Enabled": {},
      "Consolidation": {
        "MatchingAttributesList": {}
      },
      "ConflictResolution": {
        "ConflictResolvingModel": {},
        "SourceName": {}
      },
      "MinAllowedConfidenceScoreForMerging": {}
    },
    "ExportingConfig": {
      "S3Exporting": {
        "S3BucketName": {},
        "S3KeyName": {}
      }
    }
  },
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|DefaultExpirationDays|object|false|none|none|
|DefaultEncryptionKey|object|false|none|none|
|DeadLetterQueueUrl|object|false|none|none|
|Stats|object|false|none|none|
|Matching|object|false|none|none|
|CreatedAt|object|true|none|none|
|LastUpdatedAt|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_GetIdentityResolutionJobResponse">GetIdentityResolutionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetidentityresolutionjobresponse"></a>
<a id="schema_GetIdentityResolutionJobResponse"></a>
<a id="tocSgetidentityresolutionjobresponse"></a>
<a id="tocsgetidentityresolutionjobresponse"></a>

```json
{
  "DomainName": {},
  "JobId": {},
  "Status": {},
  "Message": {},
  "JobStartTime": {},
  "JobEndTime": {},
  "LastUpdatedAt": {},
  "JobExpirationTime": {},
  "AutoMerging": {
    "Enabled": {},
    "Consolidation": {
      "MatchingAttributesList": {}
    },
    "ConflictResolution": {
      "ConflictResolvingModel": {},
      "SourceName": {}
    },
    "MinAllowedConfidenceScoreForMerging": {}
  },
  "ExportingLocation": {
    "S3Exporting": {
      "S3BucketName": {},
      "S3KeyName": {}
    }
  },
  "JobStats": {
    "NumberOfProfilesReviewed": {},
    "NumberOfMatchesFound": {},
    "NumberOfMergesDone": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|false|none|none|
|JobId|object|false|none|none|
|Status|object|false|none|none|
|Message|object|false|none|none|
|JobStartTime|object|false|none|none|
|JobEndTime|object|false|none|none|
|LastUpdatedAt|object|false|none|none|
|JobExpirationTime|object|false|none|none|
|AutoMerging|object|false|none|none|
|ExportingLocation|object|false|none|none|
|JobStats|object|false|none|none|

<h2 id="tocS_GetIntegrationResponse">GetIntegrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetintegrationresponse"></a>
<a id="schema_GetIntegrationResponse"></a>
<a id="tocSgetintegrationresponse"></a>
<a id="tocsgetintegrationresponse"></a>

```json
{
  "DomainName": {},
  "Uri": {},
  "ObjectTypeName": {},
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "ObjectTypeNames": {
    "property1": "string",
    "property2": "string"
  },
  "WorkflowId": {},
  "IsUnstructured": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|Uri|object|true|none|none|
|ObjectTypeName|object|false|none|none|
|CreatedAt|object|true|none|none|
|LastUpdatedAt|object|true|none|none|
|Tags|object|false|none|none|
|ObjectTypeNames|object|false|none|none|
|WorkflowId|object|false|none|none|
|IsUnstructured|object|false|none|none|

<h2 id="tocS_GetMatchesResponse">GetMatchesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmatchesresponse"></a>
<a id="schema_GetMatchesResponse"></a>
<a id="tocSgetmatchesresponse"></a>
<a id="tocsgetmatchesresponse"></a>

```json
{
  "NextToken": {},
  "MatchGenerationDate": {},
  "PotentialMatches": {},
  "Matches": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MatchGenerationDate|object|false|none|none|
|PotentialMatches|object|false|none|none|
|Matches|object|false|none|none|

<h2 id="tocS_GetProfileObjectTypeResponse">GetProfileObjectTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetprofileobjecttyperesponse"></a>
<a id="schema_GetProfileObjectTypeResponse"></a>
<a id="tocSgetprofileobjecttyperesponse"></a>
<a id="tocsgetprofileobjecttyperesponse"></a>

```json
{
  "ObjectTypeName": {},
  "Description": {},
  "TemplateId": {},
  "ExpirationDays": {},
  "EncryptionKey": {},
  "AllowProfileCreation": {},
  "SourceLastUpdatedTimestampFormat": {},
  "Fields": {
    "property1": {
      "Source": {},
      "Target": {},
      "ContentType": {}
    },
    "property2": {
      "Source": {},
      "Target": {},
      "ContentType": {}
    }
  },
  "Keys": {
    "property1": [
      {
        "StandardIdentifiers": {},
        "FieldNames": {}
      }
    ],
    "property2": [
      {
        "StandardIdentifiers": {},
        "FieldNames": {}
      }
    ]
  },
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectTypeName|object|true|none|none|
|Description|object|true|none|none|
|TemplateId|object|false|none|none|
|ExpirationDays|object|false|none|none|
|EncryptionKey|object|false|none|none|
|AllowProfileCreation|object|false|none|none|
|SourceLastUpdatedTimestampFormat|object|false|none|none|
|Fields|object|false|none|none|
|Keys|object|false|none|none|
|CreatedAt|object|false|none|none|
|LastUpdatedAt|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_GetProfileObjectTypeTemplateResponse">GetProfileObjectTypeTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetprofileobjecttypetemplateresponse"></a>
<a id="schema_GetProfileObjectTypeTemplateResponse"></a>
<a id="tocSgetprofileobjecttypetemplateresponse"></a>
<a id="tocsgetprofileobjecttypetemplateresponse"></a>

```json
{
  "TemplateId": {},
  "SourceName": {},
  "SourceObject": {},
  "AllowProfileCreation": {},
  "SourceLastUpdatedTimestampFormat": {},
  "Fields": {
    "property1": {
      "Source": {},
      "Target": {},
      "ContentType": {}
    },
    "property2": {
      "Source": {},
      "Target": {},
      "ContentType": {}
    }
  },
  "Keys": {
    "property1": [
      {
        "StandardIdentifiers": {},
        "FieldNames": {}
      }
    ],
    "property2": [
      {
        "StandardIdentifiers": {},
        "FieldNames": {}
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemplateId|object|false|none|none|
|SourceName|object|false|none|none|
|SourceObject|object|false|none|none|
|AllowProfileCreation|object|false|none|none|
|SourceLastUpdatedTimestampFormat|object|false|none|none|
|Fields|object|false|none|none|
|Keys|object|false|none|none|

<h2 id="tocS_GetWorkflowResponse">GetWorkflowResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetworkflowresponse"></a>
<a id="schema_GetWorkflowResponse"></a>
<a id="tocSgetworkflowresponse"></a>
<a id="tocsgetworkflowresponse"></a>

```json
{
  "WorkflowId": {},
  "WorkflowType": {},
  "Status": {},
  "ErrorDescription": {},
  "StartDate": {},
  "LastUpdatedAt": {},
  "Attributes": {
    "AppflowIntegration": {
      "SourceConnectorType": {},
      "ConnectorProfileName": {},
      "RoleArn": {}
    }
  },
  "Metrics": {
    "AppflowIntegration": {
      "RecordsProcessed": {},
      "StepsCompleted": {},
      "TotalSteps": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkflowId|object|false|none|none|
|WorkflowType|object|false|none|none|
|Status|object|false|none|none|
|ErrorDescription|object|false|none|none|
|StartDate|object|false|none|none|
|LastUpdatedAt|object|false|none|none|
|Attributes|object|false|none|none|
|Metrics|object|false|none|none|

<h2 id="tocS_GetWorkflowStepsResponse">GetWorkflowStepsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetworkflowstepsresponse"></a>
<a id="schema_GetWorkflowStepsResponse"></a>
<a id="tocSgetworkflowstepsresponse"></a>
<a id="tocsgetworkflowstepsresponse"></a>

```json
{
  "WorkflowId": {},
  "WorkflowType": {},
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkflowId|object|false|none|none|
|WorkflowType|object|false|none|none|
|Items|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAccountIntegrationsResponse">ListAccountIntegrationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaccountintegrationsresponse"></a>
<a id="schema_ListAccountIntegrationsResponse"></a>
<a id="tocSlistaccountintegrationsresponse"></a>
<a id="tocslistaccountintegrationsresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDomainsResponse">ListDomainsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdomainsresponse"></a>
<a id="schema_ListDomainsResponse"></a>
<a id="tocSlistdomainsresponse"></a>
<a id="tocslistdomainsresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListIdentityResolutionJobsResponse">ListIdentityResolutionJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistidentityresolutionjobsresponse"></a>
<a id="schema_ListIdentityResolutionJobsResponse"></a>
<a id="tocSlistidentityresolutionjobsresponse"></a>
<a id="tocslistidentityresolutionjobsresponse"></a>

```json
{
  "IdentityResolutionJobsList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityResolutionJobsList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListIntegrationsResponse">ListIntegrationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistintegrationsresponse"></a>
<a id="schema_ListIntegrationsResponse"></a>
<a id="tocSlistintegrationsresponse"></a>
<a id="tocslistintegrationsresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListProfileObjectTypeTemplatesResponse">ListProfileObjectTypeTemplatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistprofileobjecttypetemplatesresponse"></a>
<a id="schema_ListProfileObjectTypeTemplatesResponse"></a>
<a id="tocSlistprofileobjecttypetemplatesresponse"></a>
<a id="tocslistprofileobjecttypetemplatesresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListProfileObjectTypesResponse">ListProfileObjectTypesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistprofileobjecttypesresponse"></a>
<a id="schema_ListProfileObjectTypesResponse"></a>
<a id="tocSlistprofileobjecttypesresponse"></a>
<a id="tocslistprofileobjecttypesresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListProfileObjectsResponse">ListProfileObjectsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistprofileobjectsresponse"></a>
<a id="schema_ListProfileObjectsResponse"></a>
<a id="tocSlistprofileobjectsresponse"></a>
<a id="tocslistprofileobjectsresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_name">name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
"string"
```

<h2 id="tocS_requestValueList">requestValueList</h2>
<!-- backwards compatibility -->
<a id="schemarequestvaluelist"></a>
<a id="schema_requestValueList"></a>
<a id="tocSrequestvaluelist"></a>
<a id="tocsrequestvaluelist"></a>

```json
[
  "string"
]
```

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|

<h2 id="tocS_ListWorkflowsResponse">ListWorkflowsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistworkflowsresponse"></a>
<a id="schema_ListWorkflowsResponse"></a>
<a id="tocSlistworkflowsresponse"></a>
<a id="tocslistworkflowsresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_MergeProfilesResponse">MergeProfilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemamergeprofilesresponse"></a>
<a id="schema_MergeProfilesResponse"></a>
<a id="tocSmergeprofilesresponse"></a>
<a id="tocsmergeprofilesresponse"></a>

```json
{
  "Message": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|object|false|none|none|

<h2 id="tocS_uuid">uuid</h2>
<!-- backwards compatibility -->
<a id="schemauuid"></a>
<a id="schema_uuid"></a>
<a id="tocSuuid"></a>
<a id="tocsuuid"></a>

```json
"string"
```

<h2 id="tocS_AttributeSourceIdMap">AttributeSourceIdMap</h2>
<!-- backwards compatibility -->
<a id="schemaattributesourceidmap"></a>
<a id="schema_AttributeSourceIdMap"></a>
<a id="tocSattributesourceidmap"></a>
<a id="tocsattributesourceidmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[uuid](#schemauuid)|false|none|none|

<h2 id="tocS_PutIntegrationResponse">PutIntegrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputintegrationresponse"></a>
<a id="schema_PutIntegrationResponse"></a>
<a id="tocSputintegrationresponse"></a>
<a id="tocsputintegrationresponse"></a>

```json
{
  "DomainName": {},
  "Uri": {},
  "ObjectTypeName": {},
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "ObjectTypeNames": {
    "property1": "string",
    "property2": "string"
  },
  "WorkflowId": {},
  "IsUnstructured": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|Uri|object|true|none|none|
|ObjectTypeName|object|false|none|none|
|CreatedAt|object|true|none|none|
|LastUpdatedAt|object|true|none|none|
|Tags|object|false|none|none|
|ObjectTypeNames|object|false|none|none|
|WorkflowId|object|false|none|none|
|IsUnstructured|object|false|none|none|

<h2 id="tocS_FlowDescription">FlowDescription</h2>
<!-- backwards compatibility -->
<a id="schemaflowdescription"></a>
<a id="schema_FlowDescription"></a>
<a id="tocSflowdescription"></a>
<a id="tocsflowdescription"></a>

```json
"string"
```

<h2 id="tocS_FlowName">FlowName</h2>
<!-- backwards compatibility -->
<a id="schemaflowname"></a>
<a id="schema_FlowName"></a>
<a id="tocSflowname"></a>
<a id="tocsflowname"></a>

```json
"string"
```

<h2 id="tocS_KmsArn">KmsArn</h2>
<!-- backwards compatibility -->
<a id="schemakmsarn"></a>
<a id="schema_KmsArn"></a>
<a id="tocSkmsarn"></a>
<a id="tocskmsarn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_SourceFlowConfig">SourceFlowConfig</h2>
<!-- backwards compatibility -->
<a id="schemasourceflowconfig"></a>
<a id="schema_SourceFlowConfig"></a>
<a id="tocSsourceflowconfig"></a>
<a id="tocssourceflowconfig"></a>

```json
{
  "ConnectorProfileName": {},
  "ConnectorType": {},
  "IncrementalPullConfig": {
    "DatetimeTypeFieldName": {}
  },
  "SourceConnectorProperties": {
    "Marketo": {
      "Object": {}
    },
    "S3": {
      "BucketName": {},
      "BucketPrefix": {}
    },
    "Salesforce": {
      "Object": {},
      "EnableDynamicFieldUpdate": {},
      "IncludeDeletedRecords": {}
    },
    "ServiceNow": {
      "Object": {}
    },
    "Zendesk": {
      "Object": {}
    }
  }
}
```

Contains information about the configuration of the source connector used in the flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectorProfileName|object|false|none|none|
|ConnectorType|object|true|none|none|
|IncrementalPullConfig|object|false|none|none|
|SourceConnectorProperties|object|true|none|none|

<h2 id="tocS_Tasks">Tasks</h2>
<!-- backwards compatibility -->
<a id="schematasks"></a>
<a id="schema_Tasks"></a>
<a id="tocStasks"></a>
<a id="tocstasks"></a>

```json
[
  {
    "ConnectorOperator": {
      "Marketo": {},
      "S3": {},
      "Salesforce": {},
      "ServiceNow": {},
      "Zendesk": {}
    },
    "DestinationField": {},
    "SourceFields": {},
    "TaskProperties": {
      "property1": "string",
      "property2": "string"
    },
    "TaskType": {}
  }
]
```

<h2 id="tocS_TriggerConfig">TriggerConfig</h2>
<!-- backwards compatibility -->
<a id="schematriggerconfig"></a>
<a id="schema_TriggerConfig"></a>
<a id="tocStriggerconfig"></a>
<a id="tocstriggerconfig"></a>

```json
{
  "TriggerType": {},
  "TriggerProperties": {
    "Scheduled": {
      "ScheduleExpression": {},
      "DataPullMode": {},
      "ScheduleStartTime": {},
      "ScheduleEndTime": {},
      "Timezone": {},
      "ScheduleOffset": {},
      "FirstExecutionFrom": {}
    }
  }
}
```

The trigger settings that determine how and when Amazon AppFlow runs the specified flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TriggerType|object|true|none|none|
|TriggerProperties|object|false|none|none|

<h2 id="tocS_typeName">typeName</h2>
<!-- backwards compatibility -->
<a id="schematypename"></a>
<a id="schema_typeName"></a>
<a id="tocStypename"></a>
<a id="tocstypename"></a>

```json
"string"
```

<h2 id="tocS_PutProfileObjectResponse">PutProfileObjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputprofileobjectresponse"></a>
<a id="schema_PutProfileObjectResponse"></a>
<a id="tocSputprofileobjectresponse"></a>
<a id="tocsputprofileobjectresponse"></a>

```json
{
  "ProfileObjectUniqueKey": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProfileObjectUniqueKey|object|false|none|none|

<h2 id="tocS_PutProfileObjectTypeResponse">PutProfileObjectTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputprofileobjecttyperesponse"></a>
<a id="schema_PutProfileObjectTypeResponse"></a>
<a id="tocSputprofileobjecttyperesponse"></a>
<a id="tocsputprofileobjecttyperesponse"></a>

```json
{
  "ObjectTypeName": {},
  "Description": {},
  "TemplateId": {},
  "ExpirationDays": {},
  "EncryptionKey": {},
  "AllowProfileCreation": {},
  "SourceLastUpdatedTimestampFormat": {},
  "Fields": {
    "property1": {
      "Source": {},
      "Target": {},
      "ContentType": {}
    },
    "property2": {
      "Source": {},
      "Target": {},
      "ContentType": {}
    }
  },
  "Keys": {
    "property1": [
      {
        "StandardIdentifiers": {},
        "FieldNames": {}
      }
    ],
    "property2": [
      {
        "StandardIdentifiers": {},
        "FieldNames": {}
      }
    ]
  },
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectTypeName|object|true|none|none|
|Description|object|true|none|none|
|TemplateId|object|false|none|none|
|ExpirationDays|object|false|none|none|
|EncryptionKey|object|false|none|none|
|AllowProfileCreation|object|false|none|none|
|SourceLastUpdatedTimestampFormat|object|false|none|none|
|Fields|object|false|none|none|
|Keys|object|false|none|none|
|CreatedAt|object|false|none|none|
|LastUpdatedAt|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ObjectTypeField">ObjectTypeField</h2>
<!-- backwards compatibility -->
<a id="schemaobjecttypefield"></a>
<a id="schema_ObjectTypeField"></a>
<a id="tocSobjecttypefield"></a>
<a id="tocsobjecttypefield"></a>

```json
{
  "Source": {},
  "Target": {},
  "ContentType": {}
}
```

Represents a field in a ProfileObjectType.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Source|object|false|none|none|
|Target|object|false|none|none|
|ContentType|object|false|none|none|

<h2 id="tocS_ObjectTypeKeyList">ObjectTypeKeyList</h2>
<!-- backwards compatibility -->
<a id="schemaobjecttypekeylist"></a>
<a id="schema_ObjectTypeKeyList"></a>
<a id="tocSobjecttypekeylist"></a>
<a id="tocsobjecttypekeylist"></a>

```json
[
  {
    "StandardIdentifiers": {},
    "FieldNames": {}
  }
]
```

<h2 id="tocS_SearchProfilesResponse">SearchProfilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchprofilesresponse"></a>
<a id="schema_SearchProfilesResponse"></a>
<a id="tocSsearchprofilesresponse"></a>
<a id="tocssearchprofilesresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_AdditionalSearchKey">AdditionalSearchKey</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalsearchkey"></a>
<a id="schema_AdditionalSearchKey"></a>
<a id="tocSadditionalsearchkey"></a>
<a id="tocsadditionalsearchkey"></a>

```json
{
  "KeyName": {},
  "Values": {}
}
```

A data type pair that consists of a <code>KeyName</code> and <code>Values</code> list that is used in conjunction with the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html#customerprofiles-SearchProfiles-request-KeyName">KeyName</a> and <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html#customerprofiles-SearchProfiles-request-Values">Values</a> parameters to search for profiles using the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html">SearchProfiles</a> API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyName|object|true|none|none|
|Values|object|true|none|none|

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_UpdateDomainResponse">UpdateDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedomainresponse"></a>
<a id="schema_UpdateDomainResponse"></a>
<a id="tocSupdatedomainresponse"></a>
<a id="tocsupdatedomainresponse"></a>

```json
{
  "DomainName": {},
  "DefaultExpirationDays": {},
  "DefaultEncryptionKey": {},
  "DeadLetterQueueUrl": {},
  "Matching": {
    "Enabled": {},
    "JobSchedule": {
      "DayOfTheWeek": {},
      "Time": {}
    },
    "AutoMerging": {
      "Enabled": {},
      "Consolidation": {
        "MatchingAttributesList": {}
      },
      "ConflictResolution": {
        "ConflictResolvingModel": {},
        "SourceName": {}
      },
      "MinAllowedConfidenceScoreForMerging": {}
    },
    "ExportingConfig": {
      "S3Exporting": {
        "S3BucketName": {},
        "S3KeyName": {}
      }
    }
  },
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|DefaultExpirationDays|object|false|none|none|
|DefaultEncryptionKey|object|false|none|none|
|DeadLetterQueueUrl|object|false|none|none|
|Matching|object|false|none|none|
|CreatedAt|object|true|none|none|
|LastUpdatedAt|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_UpdateProfileResponse">UpdateProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprofileresponse"></a>
<a id="schema_UpdateProfileResponse"></a>
<a id="tocSupdateprofileresponse"></a>
<a id="tocsupdateprofileresponse"></a>

```json
{
  "ProfileId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProfileId|object|true|none|none|

<h2 id="tocS_string0To255">string0To255</h2>
<!-- backwards compatibility -->
<a id="schemastring0to255"></a>
<a id="schema_string0To255"></a>
<a id="tocSstring0to255"></a>
<a id="tocsstring0to255"></a>

```json
"string"
```

<h2 id="tocS_AddProfileKeyRequest">AddProfileKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddprofilekeyrequest"></a>
<a id="schema_AddProfileKeyRequest"></a>
<a id="tocSaddprofilekeyrequest"></a>
<a id="tocsaddprofilekeyrequest"></a>

```json
{
  "ProfileId": {},
  "KeyName": {},
  "Values": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProfileId|object|true|none|none|
|KeyName|object|true|none|none|
|Values|object|true|none|none|

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "Address1": {},
  "Address2": {},
  "Address3": {},
  "Address4": {},
  "City": {},
  "County": {},
  "State": {},
  "Province": {},
  "Country": {},
  "PostalCode": {}
}
```

A generic address associated with the customer that is not mailing, shipping, or billing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Address1|object|false|none|none|
|Address2|object|false|none|none|
|Address3|object|false|none|none|
|Address4|object|false|none|none|
|City|object|false|none|none|
|County|object|false|none|none|
|State|object|false|none|none|
|Province|object|false|none|none|
|Country|object|false|none|none|
|PostalCode|object|false|none|none|

<h2 id="tocS_FlowDefinition">FlowDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaflowdefinition"></a>
<a id="schema_FlowDefinition"></a>
<a id="tocSflowdefinition"></a>
<a id="tocsflowdefinition"></a>

```json
{
  "Description": {},
  "FlowName": {},
  "KmsArn": {},
  "SourceFlowConfig": {
    "ConnectorProfileName": {},
    "ConnectorType": {},
    "IncrementalPullConfig": {
      "DatetimeTypeFieldName": {}
    },
    "SourceConnectorProperties": {
      "Marketo": {
        "Object": {}
      },
      "S3": {
        "BucketName": {},
        "BucketPrefix": {}
      },
      "Salesforce": {
        "Object": {},
        "EnableDynamicFieldUpdate": {},
        "IncludeDeletedRecords": {}
      },
      "ServiceNow": {
        "Object": {}
      },
      "Zendesk": {
        "Object": {}
      }
    }
  },
  "Tasks": {},
  "TriggerConfig": {
    "TriggerType": {},
    "TriggerProperties": {
      "Scheduled": {
        "ScheduleExpression": {},
        "DataPullMode": {},
        "ScheduleStartTime": {},
        "ScheduleEndTime": {},
        "Timezone": {},
        "ScheduleOffset": {},
        "FirstExecutionFrom": {}
      }
    }
  }
}
```

The configurations that control how Customer Profiles retrieves data from the source, Amazon AppFlow. Customer Profiles uses this information to create an AppFlow flow on behalf of customers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|FlowName|object|true|none|none|
|KmsArn|object|true|none|none|
|SourceFlowConfig|object|true|none|none|
|Tasks|object|true|none|none|
|TriggerConfig|object|true|none|none|

<h2 id="tocS_Batches">Batches</h2>
<!-- backwards compatibility -->
<a id="schemabatches"></a>
<a id="schema_Batches"></a>
<a id="tocSbatches"></a>
<a id="tocsbatches"></a>

```json
[
  {
    "StartTime": {},
    "EndTime": {}
  }
]
```

<h2 id="tocS_SourceConnectorType">SourceConnectorType</h2>
<!-- backwards compatibility -->
<a id="schemasourceconnectortype"></a>
<a id="schema_SourceConnectorType"></a>
<a id="tocSsourceconnectortype"></a>
<a id="tocssourceconnectortype"></a>

```json
"Salesforce"
```

<h2 id="tocS_ConnectorProfileName">ConnectorProfileName</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorprofilename"></a>
<a id="schema_ConnectorProfileName"></a>
<a id="tocSconnectorprofilename"></a>
<a id="tocsconnectorprofilename"></a>

```json
"string"
```

<h2 id="tocS_AppflowIntegrationWorkflowAttributes">AppflowIntegrationWorkflowAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaappflowintegrationworkflowattributes"></a>
<a id="schema_AppflowIntegrationWorkflowAttributes"></a>
<a id="tocSappflowintegrationworkflowattributes"></a>
<a id="tocsappflowintegrationworkflowattributes"></a>

```json
{
  "SourceConnectorType": {},
  "ConnectorProfileName": {},
  "RoleArn": {}
}
```

Structure holding all <code>APPFLOW_INTEGRATION</code> specific workflow attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceConnectorType|object|true|none|none|
|ConnectorProfileName|object|true|none|none|
|RoleArn|object|false|none|none|

<h2 id="tocS_long">long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_AppflowIntegrationWorkflowMetrics">AppflowIntegrationWorkflowMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaappflowintegrationworkflowmetrics"></a>
<a id="schema_AppflowIntegrationWorkflowMetrics"></a>
<a id="tocSappflowintegrationworkflowmetrics"></a>
<a id="tocsappflowintegrationworkflowmetrics"></a>

```json
{
  "RecordsProcessed": {},
  "StepsCompleted": {},
  "TotalSteps": {}
}
```

Workflow specific execution metrics for <code>APPFLOW_INTEGRATION</code> workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecordsProcessed|object|true|none|none|
|StepsCompleted|object|true|none|none|
|TotalSteps|object|true|none|none|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"NOT_STARTED"
```

<h2 id="tocS_timestamp">timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_AppflowIntegrationWorkflowStep">AppflowIntegrationWorkflowStep</h2>
<!-- backwards compatibility -->
<a id="schemaappflowintegrationworkflowstep"></a>
<a id="schema_AppflowIntegrationWorkflowStep"></a>
<a id="tocSappflowintegrationworkflowstep"></a>
<a id="tocsappflowintegrationworkflowstep"></a>

```json
{
  "FlowName": {},
  "Status": {},
  "ExecutionMessage": {},
  "RecordsProcessed": {},
  "BatchRecordsStartTime": {},
  "BatchRecordsEndTime": {},
  "CreatedAt": {},
  "LastUpdatedAt": {}
}
```

Workflow step details for <code>APPFLOW_INTEGRATION</code> workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlowName|object|true|none|none|
|Status|object|true|none|none|
|ExecutionMessage|object|true|none|none|
|RecordsProcessed|object|true|none|none|
|BatchRecordsStartTime|object|true|none|none|
|BatchRecordsEndTime|object|true|none|none|
|CreatedAt|object|true|none|none|
|LastUpdatedAt|object|true|none|none|

<h2 id="tocS_Attributes">Attributes</h2>
<!-- backwards compatibility -->
<a id="schemaattributes"></a>
<a id="schema_Attributes"></a>
<a id="tocSattributes"></a>
<a id="tocsattributes"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[string1To255](#schemastring1to255)|false|none|none|

<h2 id="tocS_Consolidation">Consolidation</h2>
<!-- backwards compatibility -->
<a id="schemaconsolidation"></a>
<a id="schema_Consolidation"></a>
<a id="tocSconsolidation"></a>
<a id="tocsconsolidation"></a>

```json
{
  "MatchingAttributesList": {}
}
```

The matching criteria to be used during the auto-merging process.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MatchingAttributesList|object|true|none|none|

<h2 id="tocS_ConflictResolution">ConflictResolution</h2>
<!-- backwards compatibility -->
<a id="schemaconflictresolution"></a>
<a id="schema_ConflictResolution"></a>
<a id="tocSconflictresolution"></a>
<a id="tocsconflictresolution"></a>

```json
{
  "ConflictResolvingModel": {},
  "SourceName": {}
}
```

How the auto-merging process should resolve conflicts between different profiles.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConflictResolvingModel|object|true|none|none|
|SourceName|object|false|none|none|

<h2 id="tocS_Double0To1">Double0To1</h2>
<!-- backwards compatibility -->
<a id="schemadouble0to1"></a>
<a id="schema_Double0To1"></a>
<a id="tocSdouble0to1"></a>
<a id="tocsdouble0to1"></a>

```json
0
```

<h2 id="tocS_Batch">Batch</h2>
<!-- backwards compatibility -->
<a id="schemabatch"></a>
<a id="schema_Batch"></a>
<a id="tocSbatch"></a>
<a id="tocsbatch"></a>

```json
{
  "StartTime": {},
  "EndTime": {}
}
```

Batch defines the boundaries for ingestion for each step in <code>APPFLOW_INTEGRATION</code> workflow. <code>APPFLOW_INTEGRATION</code> workflow splits ingestion based on these boundaries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTime|object|true|none|none|
|EndTime|object|true|none|none|

<h2 id="tocS_BucketName">BucketName</h2>
<!-- backwards compatibility -->
<a id="schemabucketname"></a>
<a id="schema_BucketName"></a>
<a id="tocSbucketname"></a>
<a id="tocsbucketname"></a>

```json
"string"
```

<h2 id="tocS_BucketPrefix">BucketPrefix</h2>
<!-- backwards compatibility -->
<a id="schemabucketprefix"></a>
<a id="schema_BucketPrefix"></a>
<a id="tocSbucketprefix"></a>
<a id="tocsbucketprefix"></a>

```json
"string"
```

<h2 id="tocS_MarketoConnectorOperator">MarketoConnectorOperator</h2>
<!-- backwards compatibility -->
<a id="schemamarketoconnectoroperator"></a>
<a id="schema_MarketoConnectorOperator"></a>
<a id="tocSmarketoconnectoroperator"></a>
<a id="tocsmarketoconnectoroperator"></a>

```json
"PROJECTION"
```

<h2 id="tocS_S3ConnectorOperator">S3ConnectorOperator</h2>
<!-- backwards compatibility -->
<a id="schemas3connectoroperator"></a>
<a id="schema_S3ConnectorOperator"></a>
<a id="tocSs3connectoroperator"></a>
<a id="tocss3connectoroperator"></a>

```json
"PROJECTION"
```

<h2 id="tocS_SalesforceConnectorOperator">SalesforceConnectorOperator</h2>
<!-- backwards compatibility -->
<a id="schemasalesforceconnectoroperator"></a>
<a id="schema_SalesforceConnectorOperator"></a>
<a id="tocSsalesforceconnectoroperator"></a>
<a id="tocssalesforceconnectoroperator"></a>

```json
"PROJECTION"
```

<h2 id="tocS_ServiceNowConnectorOperator">ServiceNowConnectorOperator</h2>
<!-- backwards compatibility -->
<a id="schemaservicenowconnectoroperator"></a>
<a id="schema_ServiceNowConnectorOperator"></a>
<a id="tocSservicenowconnectoroperator"></a>
<a id="tocsservicenowconnectoroperator"></a>

```json
"PROJECTION"
```

<h2 id="tocS_ZendeskConnectorOperator">ZendeskConnectorOperator</h2>
<!-- backwards compatibility -->
<a id="schemazendeskconnectoroperator"></a>
<a id="schema_ZendeskConnectorOperator"></a>
<a id="tocSzendeskconnectoroperator"></a>
<a id="tocszendeskconnectoroperator"></a>

```json
"PROJECTION"
```

<h2 id="tocS_ConnectorOperator">ConnectorOperator</h2>
<!-- backwards compatibility -->
<a id="schemaconnectoroperator"></a>
<a id="schema_ConnectorOperator"></a>
<a id="tocSconnectoroperator"></a>
<a id="tocsconnectoroperator"></a>

```json
{
  "Marketo": {},
  "S3": {},
  "Salesforce": {},
  "ServiceNow": {},
  "Zendesk": {}
}
```

The operation to be performed on the provided source fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marketo|object|false|none|none|
|S3|object|false|none|none|
|Salesforce|object|false|none|none|
|ServiceNow|object|false|none|none|
|Zendesk|object|false|none|none|

<h2 id="tocS_expirationDaysInteger">expirationDaysInteger</h2>
<!-- backwards compatibility -->
<a id="schemaexpirationdaysinteger"></a>
<a id="schema_expirationDaysInteger"></a>
<a id="tocSexpirationdaysinteger"></a>
<a id="tocsexpirationdaysinteger"></a>

```json
1
```

<h2 id="tocS_encryptionKey">encryptionKey</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionkey"></a>
<a id="schema_encryptionKey"></a>
<a id="tocSencryptionkey"></a>
<a id="tocsencryptionkey"></a>

```json
"string"
```

<h2 id="tocS_sqsQueueUrl">sqsQueueUrl</h2>
<!-- backwards compatibility -->
<a id="schemasqsqueueurl"></a>
<a id="schema_sqsQueueUrl"></a>
<a id="tocSsqsqueueurl"></a>
<a id="tocssqsqueueurl"></a>

```json
"string"
```

<h2 id="tocS_MatchingRequest">MatchingRequest</h2>
<!-- backwards compatibility -->
<a id="schemamatchingrequest"></a>
<a id="schema_MatchingRequest"></a>
<a id="tocSmatchingrequest"></a>
<a id="tocsmatchingrequest"></a>

```json
{
  "Enabled": {},
  "JobSchedule": {
    "DayOfTheWeek": {},
    "Time": {}
  },
  "AutoMerging": {
    "Enabled": {},
    "Consolidation": {
      "MatchingAttributesList": {}
    },
    "ConflictResolution": {
      "ConflictResolvingModel": {},
      "SourceName": {}
    },
    "MinAllowedConfidenceScoreForMerging": {}
  },
  "ExportingConfig": {
    "S3Exporting": {
      "S3BucketName": {},
      "S3KeyName": {}
    }
  }
}
```

The flag that enables the matching process of duplicate profiles.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|true|none|none|
|JobSchedule|object|false|none|none|
|AutoMerging|object|false|none|none|
|ExportingConfig|object|false|none|none|

<h2 id="tocS_TagMap">TagMap</h2>
<!-- backwards compatibility -->
<a id="schematagmap"></a>
<a id="schema_TagMap"></a>
<a id="tocStagmap"></a>
<a id="tocstagmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TagValue](#schematagvalue)|false|none|none|

<h2 id="tocS_CreateDomainRequest">CreateDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedomainrequest"></a>
<a id="schema_CreateDomainRequest"></a>
<a id="tocScreatedomainrequest"></a>
<a id="tocscreatedomainrequest"></a>

```json
{
  "DefaultExpirationDays": {},
  "DefaultEncryptionKey": {},
  "DeadLetterQueueUrl": {},
  "Matching": {
    "Enabled": {},
    "JobSchedule": {
      "DayOfTheWeek": {},
      "Time": {}
    },
    "AutoMerging": {
      "Enabled": {},
      "Consolidation": {
        "MatchingAttributesList": {}
      },
      "ConflictResolution": {
        "ConflictResolvingModel": {},
        "SourceName": {}
      },
      "MinAllowedConfidenceScoreForMerging": {}
    },
    "ExportingConfig": {
      "S3Exporting": {
        "S3BucketName": {},
        "S3KeyName": {}
      }
    }
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DefaultExpirationDays|object|true|none|none|
|DefaultEncryptionKey|object|false|none|none|
|DeadLetterQueueUrl|object|false|none|none|
|Matching|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_MatchingResponse">MatchingResponse</h2>
<!-- backwards compatibility -->
<a id="schemamatchingresponse"></a>
<a id="schema_MatchingResponse"></a>
<a id="tocSmatchingresponse"></a>
<a id="tocsmatchingresponse"></a>

```json
{
  "Enabled": {},
  "JobSchedule": {
    "DayOfTheWeek": {},
    "Time": {}
  },
  "AutoMerging": {
    "Enabled": {},
    "Consolidation": {
      "MatchingAttributesList": {}
    },
    "ConflictResolution": {
      "ConflictResolvingModel": {},
      "SourceName": {}
    },
    "MinAllowedConfidenceScoreForMerging": {}
  },
  "ExportingConfig": {
    "S3Exporting": {
      "S3BucketName": {},
      "S3KeyName": {}
    }
  }
}
```

The flag that enables the matching process of duplicate profiles.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|
|JobSchedule|object|false|none|none|
|AutoMerging|object|false|none|none|
|ExportingConfig|object|false|none|none|

<h2 id="tocS_WorkflowType">WorkflowType</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowtype"></a>
<a id="schema_WorkflowType"></a>
<a id="tocSworkflowtype"></a>
<a id="tocsworkflowtype"></a>

```json
"APPFLOW_INTEGRATION"
```

<h2 id="tocS_IntegrationConfig">IntegrationConfig</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationconfig"></a>
<a id="schema_IntegrationConfig"></a>
<a id="tocSintegrationconfig"></a>
<a id="tocsintegrationconfig"></a>

```json
{
  "AppflowIntegration": {
    "FlowDefinition": {
      "Description": {},
      "FlowName": {},
      "KmsArn": {},
      "SourceFlowConfig": {
        "ConnectorProfileName": {},
        "ConnectorType": {},
        "IncrementalPullConfig": {
          "DatetimeTypeFieldName": {}
        },
        "SourceConnectorProperties": {
          "Marketo": {
            "Object": {}
          },
          "S3": {
            "BucketName": {},
            "BucketPrefix": {}
          },
          "Salesforce": {
            "Object": {},
            "EnableDynamicFieldUpdate": {},
            "IncludeDeletedRecords": {}
          },
          "ServiceNow": {
            "Object": {}
          },
          "Zendesk": {
            "Object": {}
          }
        }
      },
      "Tasks": {},
      "TriggerConfig": {
        "TriggerType": {},
        "TriggerProperties": {
          "Scheduled": {
            "ScheduleExpression": {},
            "DataPullMode": {},
            "ScheduleStartTime": {},
            "ScheduleEndTime": {},
            "Timezone": {},
            "ScheduleOffset": {},
            "FirstExecutionFrom": {}
          }
        }
      }
    },
    "Batches": {}
  }
}
```

Configuration data for integration workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppflowIntegration|object|false|none|none|

<h2 id="tocS_RoleArn">RoleArn</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleArn"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"string"
```

<h2 id="tocS_CreateIntegrationWorkflowRequest">CreateIntegrationWorkflowRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateintegrationworkflowrequest"></a>
<a id="schema_CreateIntegrationWorkflowRequest"></a>
<a id="tocScreateintegrationworkflowrequest"></a>
<a id="tocscreateintegrationworkflowrequest"></a>

```json
{
  "WorkflowType": {},
  "IntegrationConfig": {
    "AppflowIntegration": {
      "FlowDefinition": {
        "Description": {},
        "FlowName": {},
        "KmsArn": {},
        "SourceFlowConfig": {
          "ConnectorProfileName": {},
          "ConnectorType": {},
          "IncrementalPullConfig": {
            "DatetimeTypeFieldName": {}
          },
          "SourceConnectorProperties": {
            "Marketo": {
              "Object": {}
            },
            "S3": {
              "BucketName": {},
              "BucketPrefix": {}
            },
            "Salesforce": {
              "Object": {},
              "EnableDynamicFieldUpdate": {},
              "IncludeDeletedRecords": {}
            },
            "ServiceNow": {
              "Object": {}
            },
            "Zendesk": {
              "Object": {}
            }
          }
        },
        "Tasks": {},
        "TriggerConfig": {
          "TriggerType": {},
          "TriggerProperties": {
            "Scheduled": {
              "ScheduleExpression": {},
              "DataPullMode": {},
              "ScheduleStartTime": {},
              "ScheduleEndTime": {},
              "Timezone": {},
              "ScheduleOffset": {},
              "FirstExecutionFrom": {}
            }
          }
        }
      },
      "Batches": {}
    }
  },
  "ObjectTypeName": {},
  "RoleArn": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkflowType|object|true|none|none|
|IntegrationConfig|object|true|none|none|
|ObjectTypeName|object|true|none|none|
|RoleArn|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_string1To1000">string1To1000</h2>
<!-- backwards compatibility -->
<a id="schemastring1to1000"></a>
<a id="schema_string1To1000"></a>
<a id="tocSstring1to1000"></a>
<a id="tocsstring1to1000"></a>

```json
"string"
```

<h2 id="tocS_PartyType">PartyType</h2>
<!-- backwards compatibility -->
<a id="schemapartytype"></a>
<a id="schema_PartyType"></a>
<a id="tocSpartytype"></a>
<a id="tocspartytype"></a>

```json
"INDIVIDUAL"
```

<h2 id="tocS_Gender">Gender</h2>
<!-- backwards compatibility -->
<a id="schemagender"></a>
<a id="schema_Gender"></a>
<a id="tocSgender"></a>
<a id="tocsgender"></a>

```json
"MALE"
```

<h2 id="tocS_CreateProfileRequest">CreateProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateprofilerequest"></a>
<a id="schema_CreateProfileRequest"></a>
<a id="tocScreateprofilerequest"></a>
<a id="tocscreateprofilerequest"></a>

```json
{
  "AccountNumber": {},
  "AdditionalInformation": {},
  "PartyType": {},
  "BusinessName": {},
  "FirstName": {},
  "MiddleName": {},
  "LastName": {},
  "BirthDate": {},
  "Gender": {},
  "PhoneNumber": {},
  "MobilePhoneNumber": {},
  "HomePhoneNumber": {},
  "BusinessPhoneNumber": {},
  "EmailAddress": {},
  "PersonalEmailAddress": {},
  "BusinessEmailAddress": {},
  "Address": {
    "Address1": {},
    "Address2": {},
    "Address3": {},
    "Address4": {},
    "City": {},
    "County": {},
    "State": {},
    "Province": {},
    "Country": {},
    "PostalCode": {}
  },
  "ShippingAddress": {
    "Address1": {},
    "Address2": {},
    "Address3": {},
    "Address4": {},
    "City": {},
    "County": {},
    "State": {},
    "Province": {},
    "Country": {},
    "PostalCode": {}
  },
  "MailingAddress": {
    "Address1": {},
    "Address2": {},
    "Address3": {},
    "Address4": {},
    "City": {},
    "County": {},
    "State": {},
    "Province": {},
    "Country": {},
    "PostalCode": {}
  },
  "BillingAddress": {
    "Address1": {},
    "Address2": {},
    "Address3": {},
    "Address4": {},
    "City": {},
    "County": {},
    "State": {},
    "Province": {},
    "Country": {},
    "PostalCode": {}
  },
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "PartyTypeString": {},
  "GenderString": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountNumber|object|false|none|none|
|AdditionalInformation|object|false|none|none|
|PartyType|object|false|none|none|
|BusinessName|object|false|none|none|
|FirstName|object|false|none|none|
|MiddleName|object|false|none|none|
|LastName|object|false|none|none|
|BirthDate|object|false|none|none|
|Gender|object|false|none|none|
|PhoneNumber|object|false|none|none|
|MobilePhoneNumber|object|false|none|none|
|HomePhoneNumber|object|false|none|none|
|BusinessPhoneNumber|object|false|none|none|
|EmailAddress|object|false|none|none|
|PersonalEmailAddress|object|false|none|none|
|BusinessEmailAddress|object|false|none|none|
|Address|object|false|none|none|
|ShippingAddress|object|false|none|none|
|MailingAddress|object|false|none|none|
|BillingAddress|object|false|none|none|
|Attributes|object|false|none|none|
|PartyTypeString|object|false|none|none|
|GenderString|object|false|none|none|

<h2 id="tocS_DataPullMode">DataPullMode</h2>
<!-- backwards compatibility -->
<a id="schemadatapullmode"></a>
<a id="schema_DataPullMode"></a>
<a id="tocSdatapullmode"></a>
<a id="tocsdatapullmode"></a>

```json
"Incremental"
```

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DatetimeTypeFieldName">DatetimeTypeFieldName</h2>
<!-- backwards compatibility -->
<a id="schemadatetimetypefieldname"></a>
<a id="schema_DatetimeTypeFieldName"></a>
<a id="tocSdatetimetypefieldname"></a>
<a id="tocsdatetimetypefieldname"></a>

```json
"string"
```

<h2 id="tocS_DeleteDomainRequest">DeleteDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedomainrequest"></a>
<a id="schema_DeleteDomainRequest"></a>
<a id="tocSdeletedomainrequest"></a>
<a id="tocsdeletedomainrequest"></a>

```json
{}
```

<h2 id="tocS_message">message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
"string"
```

<h2 id="tocS_DeleteIntegrationRequest">DeleteIntegrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteintegrationrequest"></a>
<a id="schema_DeleteIntegrationRequest"></a>
<a id="tocSdeleteintegrationrequest"></a>
<a id="tocsdeleteintegrationrequest"></a>

```json
{
  "Uri": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Uri|object|true|none|none|

<h2 id="tocS_DeleteProfileKeyRequest">DeleteProfileKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprofilekeyrequest"></a>
<a id="schema_DeleteProfileKeyRequest"></a>
<a id="tocSdeleteprofilekeyrequest"></a>
<a id="tocsdeleteprofilekeyrequest"></a>

```json
{
  "ProfileId": {},
  "KeyName": {},
  "Values": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProfileId|object|true|none|none|
|KeyName|object|true|none|none|
|Values|object|true|none|none|

<h2 id="tocS_DeleteProfileObjectRequest">DeleteProfileObjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprofileobjectrequest"></a>
<a id="schema_DeleteProfileObjectRequest"></a>
<a id="tocSdeleteprofileobjectrequest"></a>
<a id="tocsdeleteprofileobjectrequest"></a>

```json
{
  "ProfileId": {},
  "ProfileObjectUniqueKey": {},
  "ObjectTypeName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProfileId|object|true|none|none|
|ProfileObjectUniqueKey|object|true|none|none|
|ObjectTypeName|object|true|none|none|

<h2 id="tocS_DeleteProfileObjectTypeRequest">DeleteProfileObjectTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprofileobjecttyperequest"></a>
<a id="schema_DeleteProfileObjectTypeRequest"></a>
<a id="tocSdeleteprofileobjecttyperequest"></a>
<a id="tocsdeleteprofileobjecttyperequest"></a>

```json
{}
```

<h2 id="tocS_DeleteProfileRequest">DeleteProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprofilerequest"></a>
<a id="schema_DeleteProfileRequest"></a>
<a id="tocSdeleteprofilerequest"></a>
<a id="tocsdeleteprofilerequest"></a>

```json
{
  "ProfileId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProfileId|object|true|none|none|

<h2 id="tocS_DeleteWorkflowRequest">DeleteWorkflowRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteworkflowrequest"></a>
<a id="schema_DeleteWorkflowRequest"></a>
<a id="tocSdeleteworkflowrequest"></a>
<a id="tocsdeleteworkflowrequest"></a>

```json
{}
```

<h2 id="tocS_DestinationField">DestinationField</h2>
<!-- backwards compatibility -->
<a id="schemadestinationfield"></a>
<a id="schema_DestinationField"></a>
<a id="tocSdestinationfield"></a>
<a id="tocsdestinationfield"></a>

```json
"string"
```

<h2 id="tocS_ListDomainItem">ListDomainItem</h2>
<!-- backwards compatibility -->
<a id="schemalistdomainitem"></a>
<a id="schema_ListDomainItem"></a>
<a id="tocSlistdomainitem"></a>
<a id="tocslistdomainitem"></a>

```json
{
  "DomainName": {},
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

An object in a list that represents a domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|CreatedAt|object|true|none|none|
|LastUpdatedAt|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DomainList">DomainList</h2>
<!-- backwards compatibility -->
<a id="schemadomainlist"></a>
<a id="schema_DomainList"></a>
<a id="tocSdomainlist"></a>
<a id="tocsdomainlist"></a>

```json
[
  {
    "DomainName": {},
    "CreatedAt": {},
    "LastUpdatedAt": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_DomainStats">DomainStats</h2>
<!-- backwards compatibility -->
<a id="schemadomainstats"></a>
<a id="schema_DomainStats"></a>
<a id="tocSdomainstats"></a>
<a id="tocsdomainstats"></a>

```json
{
  "ProfileCount": {},
  "MeteringProfileCount": {},
  "ObjectCount": {},
  "TotalSize": {}
}
```

Usage-specific statistics about the domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProfileCount|object|false|none|none|
|MeteringProfileCount|object|false|none|none|
|ObjectCount|object|false|none|none|
|TotalSize|object|false|none|none|

<h2 id="tocS_Double">Double</h2>
<!-- backwards compatibility -->
<a id="schemadouble"></a>
<a id="schema_Double"></a>
<a id="tocSdouble"></a>
<a id="tocsdouble"></a>

```json
0
```

<h2 id="tocS_S3ExportingConfig">S3ExportingConfig</h2>
<!-- backwards compatibility -->
<a id="schemas3exportingconfig"></a>
<a id="schema_S3ExportingConfig"></a>
<a id="tocSs3exportingconfig"></a>
<a id="tocss3exportingconfig"></a>

```json
{
  "S3BucketName": {},
  "S3KeyName": {}
}
```

Configuration information about the S3 bucket where Identity Resolution Jobs write result files.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3BucketName|object|true|none|none|
|S3KeyName|object|false|none|none|

<h2 id="tocS_S3ExportingLocation">S3ExportingLocation</h2>
<!-- backwards compatibility -->
<a id="schemas3exportinglocation"></a>
<a id="schema_S3ExportingLocation"></a>
<a id="tocSs3exportinglocation"></a>
<a id="tocss3exportinglocation"></a>

```json
{
  "S3BucketName": {},
  "S3KeyName": {}
}
```

The S3 location where Identity Resolution Jobs write result files.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3BucketName|object|false|none|none|
|S3KeyName|object|false|none|none|

<h2 id="tocS_ExportingLocation">ExportingLocation</h2>
<!-- backwards compatibility -->
<a id="schemaexportinglocation"></a>
<a id="schema_ExportingLocation"></a>
<a id="tocSexportinglocation"></a>
<a id="tocsexportinglocation"></a>

```json
{
  "S3Exporting": {
    "S3BucketName": {},
    "S3KeyName": {}
  }
}
```

The S3 location where Identity Resolution Jobs write result files.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Exporting|object|false|none|none|

<h2 id="tocS_FieldContentType">FieldContentType</h2>
<!-- backwards compatibility -->
<a id="schemafieldcontenttype"></a>
<a id="schema_FieldContentType"></a>
<a id="tocSfieldcontenttype"></a>
<a id="tocsfieldcontenttype"></a>

```json
"STRING"
```

<h2 id="tocS_FieldMap">FieldMap</h2>
<!-- backwards compatibility -->
<a id="schemafieldmap"></a>
<a id="schema_FieldMap"></a>
<a id="tocSfieldmap"></a>
<a id="tocsfieldmap"></a>

```json
{
  "property1": {
    "Source": {},
    "Target": {},
    "ContentType": {}
  },
  "property2": {
    "Source": {},
    "Target": {},
    "ContentType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ObjectTypeField](#schemaobjecttypefield)|false|none|Represents a field in a ProfileObjectType.|

<h2 id="tocS_FieldNameList">FieldNameList</h2>
<!-- backwards compatibility -->
<a id="schemafieldnamelist"></a>
<a id="schema_FieldNameList"></a>
<a id="tocSfieldnamelist"></a>
<a id="tocsfieldnamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FieldSourceProfileIds">FieldSourceProfileIds</h2>
<!-- backwards compatibility -->
<a id="schemafieldsourceprofileids"></a>
<a id="schema_FieldSourceProfileIds"></a>
<a id="tocSfieldsourceprofileids"></a>
<a id="tocsfieldsourceprofileids"></a>

```json
{
  "AccountNumber": {},
  "AdditionalInformation": {},
  "PartyType": {},
  "BusinessName": {},
  "FirstName": {},
  "MiddleName": {},
  "LastName": {},
  "BirthDate": {},
  "Gender": {},
  "PhoneNumber": {},
  "MobilePhoneNumber": {},
  "HomePhoneNumber": {},
  "BusinessPhoneNumber": {},
  "EmailAddress": {},
  "PersonalEmailAddress": {},
  "BusinessEmailAddress": {},
  "Address": {},
  "ShippingAddress": {},
  "MailingAddress": {},
  "BillingAddress": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

A duplicate customer profile that is to be merged into a main profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountNumber|object|false|none|none|
|AdditionalInformation|object|false|none|none|
|PartyType|object|false|none|none|
|BusinessName|object|false|none|none|
|FirstName|object|false|none|none|
|MiddleName|object|false|none|none|
|LastName|object|false|none|none|
|BirthDate|object|false|none|none|
|Gender|object|false|none|none|
|PhoneNumber|object|false|none|none|
|MobilePhoneNumber|object|false|none|none|
|HomePhoneNumber|object|false|none|none|
|BusinessPhoneNumber|object|false|none|none|
|EmailAddress|object|false|none|none|
|PersonalEmailAddress|object|false|none|none|
|BusinessEmailAddress|object|false|none|none|
|Address|object|false|none|none|
|ShippingAddress|object|false|none|none|
|MailingAddress|object|false|none|none|
|BillingAddress|object|false|none|none|
|Attributes|object|false|none|none|

<h2 id="tocS_FoundByKeyValue">FoundByKeyValue</h2>
<!-- backwards compatibility -->
<a id="schemafoundbykeyvalue"></a>
<a id="schema_FoundByKeyValue"></a>
<a id="tocSfoundbykeyvalue"></a>
<a id="tocsfoundbykeyvalue"></a>

```json
{
  "KeyName": {},
  "Values": {}
}
```

A data type pair that consists of a <code>KeyName</code> and <code>Values</code> list that were used to find a profile returned in response to a <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html">SearchProfiles</a> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyName|object|false|none|none|
|Values|object|false|none|none|

<h2 id="tocS_GetAutoMergingPreviewRequest">GetAutoMergingPreviewRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetautomergingpreviewrequest"></a>
<a id="schema_GetAutoMergingPreviewRequest"></a>
<a id="tocSgetautomergingpreviewrequest"></a>
<a id="tocsgetautomergingpreviewrequest"></a>

```json
{
  "Consolidation": {
    "MatchingAttributesList": {}
  },
  "ConflictResolution": {
    "ConflictResolvingModel": {},
    "SourceName": {}
  },
  "MinAllowedConfidenceScoreForMerging": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Consolidation|object|true|none|none|
|ConflictResolution|object|true|none|none|
|MinAllowedConfidenceScoreForMerging|object|false|none|none|

<h2 id="tocS_GetDomainRequest">GetDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdomainrequest"></a>
<a id="schema_GetDomainRequest"></a>
<a id="tocSgetdomainrequest"></a>
<a id="tocsgetdomainrequest"></a>

```json
{}
```

<h2 id="tocS_GetIdentityResolutionJobRequest">GetIdentityResolutionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetidentityresolutionjobrequest"></a>
<a id="schema_GetIdentityResolutionJobRequest"></a>
<a id="tocSgetidentityresolutionjobrequest"></a>
<a id="tocsgetidentityresolutionjobrequest"></a>

```json
{}
```

<h2 id="tocS_IdentityResolutionJobStatus">IdentityResolutionJobStatus</h2>
<!-- backwards compatibility -->
<a id="schemaidentityresolutionjobstatus"></a>
<a id="schema_IdentityResolutionJobStatus"></a>
<a id="tocSidentityresolutionjobstatus"></a>
<a id="tocsidentityresolutionjobstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_stringTo2048">stringTo2048</h2>
<!-- backwards compatibility -->
<a id="schemastringto2048"></a>
<a id="schema_stringTo2048"></a>
<a id="tocSstringto2048"></a>
<a id="tocsstringto2048"></a>

```json
"string"
```

<h2 id="tocS_JobStats">JobStats</h2>
<!-- backwards compatibility -->
<a id="schemajobstats"></a>
<a id="schema_JobStats"></a>
<a id="tocSjobstats"></a>
<a id="tocsjobstats"></a>

```json
{
  "NumberOfProfilesReviewed": {},
  "NumberOfMatchesFound": {},
  "NumberOfMergesDone": {}
}
```

Statistics about the Identity Resolution Job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NumberOfProfilesReviewed|object|false|none|none|
|NumberOfMatchesFound|object|false|none|none|
|NumberOfMergesDone|object|false|none|none|

<h2 id="tocS_GetIntegrationRequest">GetIntegrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetintegrationrequest"></a>
<a id="schema_GetIntegrationRequest"></a>
<a id="tocSgetintegrationrequest"></a>
<a id="tocsgetintegrationrequest"></a>

```json
{
  "Uri": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Uri|object|true|none|none|

<h2 id="tocS_ObjectTypeNames">ObjectTypeNames</h2>
<!-- backwards compatibility -->
<a id="schemaobjecttypenames"></a>
<a id="schema_ObjectTypeNames"></a>
<a id="tocSobjecttypenames"></a>
<a id="tocsobjecttypenames"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[typeName](#schematypename)|false|none|none|

<h2 id="tocS_token">token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
"string"
```

<h2 id="tocS_maxSize100">maxSize100</h2>
<!-- backwards compatibility -->
<a id="schemamaxsize100"></a>
<a id="schema_maxSize100"></a>
<a id="tocSmaxsize100"></a>
<a id="tocsmaxsize100"></a>

```json
1
```

<h2 id="tocS_GetMatchesRequest">GetMatchesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmatchesrequest"></a>
<a id="schema_GetMatchesRequest"></a>
<a id="tocSgetmatchesrequest"></a>
<a id="tocsgetmatchesrequest"></a>

```json
{}
```

<h2 id="tocS_matchesNumber">matchesNumber</h2>
<!-- backwards compatibility -->
<a id="schemamatchesnumber"></a>
<a id="schema_matchesNumber"></a>
<a id="tocSmatchesnumber"></a>
<a id="tocsmatchesnumber"></a>

```json
0
```

<h2 id="tocS_MatchesList">MatchesList</h2>
<!-- backwards compatibility -->
<a id="schemamatcheslist"></a>
<a id="schema_MatchesList"></a>
<a id="tocSmatcheslist"></a>
<a id="tocsmatcheslist"></a>

```json
[
  {
    "MatchId": {},
    "ProfileIds": {},
    "ConfidenceScore": {}
  }
]
```

<h2 id="tocS_GetProfileObjectTypeRequest">GetProfileObjectTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetprofileobjecttyperequest"></a>
<a id="schema_GetProfileObjectTypeRequest"></a>
<a id="tocSgetprofileobjecttyperequest"></a>
<a id="tocsgetprofileobjecttyperequest"></a>

```json
{}
```

<h2 id="tocS_text">text</h2>
<!-- backwards compatibility -->
<a id="schematext"></a>
<a id="schema_text"></a>
<a id="tocStext"></a>
<a id="tocstext"></a>

```json
"string"
```

<h2 id="tocS_boolean">boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_KeyMap">KeyMap</h2>
<!-- backwards compatibility -->
<a id="schemakeymap"></a>
<a id="schema_KeyMap"></a>
<a id="tocSkeymap"></a>
<a id="tocskeymap"></a>

```json
{
  "property1": [
    {
      "StandardIdentifiers": {},
      "FieldNames": {}
    }
  ],
  "property2": [
    {
      "StandardIdentifiers": {},
      "FieldNames": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ObjectTypeKeyList](#schemaobjecttypekeylist)|false|none|none|

<h2 id="tocS_GetProfileObjectTypeTemplateRequest">GetProfileObjectTypeTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetprofileobjecttypetemplaterequest"></a>
<a id="schema_GetProfileObjectTypeTemplateRequest"></a>
<a id="tocSgetprofileobjecttypetemplaterequest"></a>
<a id="tocsgetprofileobjecttypetemplaterequest"></a>

```json
{}
```

<h2 id="tocS_GetWorkflowRequest">GetWorkflowRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetworkflowrequest"></a>
<a id="schema_GetWorkflowRequest"></a>
<a id="tocSgetworkflowrequest"></a>
<a id="tocsgetworkflowrequest"></a>

```json
{}
```

<h2 id="tocS_WorkflowAttributes">WorkflowAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowattributes"></a>
<a id="schema_WorkflowAttributes"></a>
<a id="tocSworkflowattributes"></a>
<a id="tocsworkflowattributes"></a>

```json
{
  "AppflowIntegration": {
    "SourceConnectorType": {},
    "ConnectorProfileName": {},
    "RoleArn": {}
  }
}
```

Structure to hold workflow attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppflowIntegration|object|false|none|none|

<h2 id="tocS_WorkflowMetrics">WorkflowMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowmetrics"></a>
<a id="schema_WorkflowMetrics"></a>
<a id="tocSworkflowmetrics"></a>
<a id="tocsworkflowmetrics"></a>

```json
{
  "AppflowIntegration": {
    "RecordsProcessed": {},
    "StepsCompleted": {},
    "TotalSteps": {}
  }
}
```

Generic object containing workflow execution metrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppflowIntegration|object|false|none|none|

<h2 id="tocS_GetWorkflowStepsRequest">GetWorkflowStepsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetworkflowstepsrequest"></a>
<a id="schema_GetWorkflowStepsRequest"></a>
<a id="tocSgetworkflowstepsrequest"></a>
<a id="tocsgetworkflowstepsrequest"></a>

```json
{}
```

<h2 id="tocS_WorkflowStepsList">WorkflowStepsList</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowstepslist"></a>
<a id="schema_WorkflowStepsList"></a>
<a id="tocSworkflowstepslist"></a>
<a id="tocsworkflowstepslist"></a>

```json
[
  {
    "AppflowIntegration": {
      "FlowName": {},
      "Status": {},
      "ExecutionMessage": {},
      "RecordsProcessed": {},
      "BatchRecordsStartTime": {},
      "BatchRecordsEndTime": {},
      "CreatedAt": {},
      "LastUpdatedAt": {}
    }
  }
]
```

<h2 id="tocS_IdentityResolutionJob">IdentityResolutionJob</h2>
<!-- backwards compatibility -->
<a id="schemaidentityresolutionjob"></a>
<a id="schema_IdentityResolutionJob"></a>
<a id="tocSidentityresolutionjob"></a>
<a id="tocsidentityresolutionjob"></a>

```json
{
  "DomainName": {},
  "JobId": {},
  "Status": {},
  "JobStartTime": {},
  "JobEndTime": {},
  "JobStats": {
    "NumberOfProfilesReviewed": {},
    "NumberOfMatchesFound": {},
    "NumberOfMergesDone": {}
  },
  "ExportingLocation": {
    "S3Exporting": {
      "S3BucketName": {},
      "S3KeyName": {}
    }
  },
  "Message": {}
}
```

Information about the Identity Resolution Job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|false|none|none|
|JobId|object|false|none|none|
|Status|object|false|none|none|
|JobStartTime|object|false|none|none|
|JobEndTime|object|false|none|none|
|JobStats|object|false|none|none|
|ExportingLocation|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_IdentityResolutionJobsList">IdentityResolutionJobsList</h2>
<!-- backwards compatibility -->
<a id="schemaidentityresolutionjobslist"></a>
<a id="schema_IdentityResolutionJobsList"></a>
<a id="tocSidentityresolutionjobslist"></a>
<a id="tocsidentityresolutionjobslist"></a>

```json
[
  {
    "DomainName": {},
    "JobId": {},
    "Status": {},
    "JobStartTime": {},
    "JobEndTime": {},
    "JobStats": {
      "NumberOfProfilesReviewed": {},
      "NumberOfMatchesFound": {},
      "NumberOfMergesDone": {}
    },
    "ExportingLocation": {
      "S3Exporting": {
        "S3BucketName": {},
        "S3KeyName": {}
      }
    },
    "Message": {}
  }
]
```

<h2 id="tocS_IncrementalPullConfig">IncrementalPullConfig</h2>
<!-- backwards compatibility -->
<a id="schemaincrementalpullconfig"></a>
<a id="schema_IncrementalPullConfig"></a>
<a id="tocSincrementalpullconfig"></a>
<a id="tocsincrementalpullconfig"></a>

```json
{
  "DatetimeTypeFieldName": {}
}
```

Specifies the configuration used when importing incremental records from the source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatetimeTypeFieldName|object|false|none|none|

<h2 id="tocS_ListIntegrationItem">ListIntegrationItem</h2>
<!-- backwards compatibility -->
<a id="schemalistintegrationitem"></a>
<a id="schema_ListIntegrationItem"></a>
<a id="tocSlistintegrationitem"></a>
<a id="tocslistintegrationitem"></a>

```json
{
  "DomainName": {},
  "Uri": {},
  "ObjectTypeName": {},
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "ObjectTypeNames": {
    "property1": "string",
    "property2": "string"
  },
  "WorkflowId": {},
  "IsUnstructured": {}
}
```

An integration in list of integrations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|Uri|object|true|none|none|
|ObjectTypeName|object|false|none|none|
|CreatedAt|object|true|none|none|
|LastUpdatedAt|object|true|none|none|
|Tags|object|false|none|none|
|ObjectTypeNames|object|false|none|none|
|WorkflowId|object|false|none|none|
|IsUnstructured|object|false|none|none|

<h2 id="tocS_IntegrationList">IntegrationList</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationlist"></a>
<a id="schema_IntegrationList"></a>
<a id="tocSintegrationlist"></a>
<a id="tocsintegrationlist"></a>

```json
[
  {
    "DomainName": {},
    "Uri": {},
    "ObjectTypeName": {},
    "CreatedAt": {},
    "LastUpdatedAt": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "ObjectTypeNames": {
      "property1": "string",
      "property2": "string"
    },
    "WorkflowId": {},
    "IsUnstructured": {}
  }
]
```

<h2 id="tocS_JobScheduleDayOfTheWeek">JobScheduleDayOfTheWeek</h2>
<!-- backwards compatibility -->
<a id="schemajobscheduledayoftheweek"></a>
<a id="schema_JobScheduleDayOfTheWeek"></a>
<a id="tocSjobscheduledayoftheweek"></a>
<a id="tocsjobscheduledayoftheweek"></a>

```json
"SUNDAY"
```

<h2 id="tocS_JobScheduleTime">JobScheduleTime</h2>
<!-- backwards compatibility -->
<a id="schemajobscheduletime"></a>
<a id="schema_JobScheduleTime"></a>
<a id="tocSjobscheduletime"></a>
<a id="tocsjobscheduletime"></a>

```json
"strin"
```

<h2 id="tocS_ListAccountIntegrationsRequest">ListAccountIntegrationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistaccountintegrationsrequest"></a>
<a id="schema_ListAccountIntegrationsRequest"></a>
<a id="tocSlistaccountintegrationsrequest"></a>
<a id="tocslistaccountintegrationsrequest"></a>

```json
{
  "Uri": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Uri|object|true|none|none|

<h2 id="tocS_ListDomainsRequest">ListDomainsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdomainsrequest"></a>
<a id="schema_ListDomainsRequest"></a>
<a id="tocSlistdomainsrequest"></a>
<a id="tocslistdomainsrequest"></a>

```json
{}
```

<h2 id="tocS_ListIdentityResolutionJobsRequest">ListIdentityResolutionJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistidentityresolutionjobsrequest"></a>
<a id="schema_ListIdentityResolutionJobsRequest"></a>
<a id="tocSlistidentityresolutionjobsrequest"></a>
<a id="tocslistidentityresolutionjobsrequest"></a>

```json
{}
```

<h2 id="tocS_ListIntegrationsRequest">ListIntegrationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistintegrationsrequest"></a>
<a id="schema_ListIntegrationsRequest"></a>
<a id="tocSlistintegrationsrequest"></a>
<a id="tocslistintegrationsrequest"></a>

```json
{}
```

<h2 id="tocS_ListProfileObjectTypeItem">ListProfileObjectTypeItem</h2>
<!-- backwards compatibility -->
<a id="schemalistprofileobjecttypeitem"></a>
<a id="schema_ListProfileObjectTypeItem"></a>
<a id="tocSlistprofileobjecttypeitem"></a>
<a id="tocslistprofileobjecttypeitem"></a>

```json
{
  "ObjectTypeName": {},
  "Description": {},
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

A ProfileObjectType instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectTypeName|object|true|none|none|
|Description|object|true|none|none|
|CreatedAt|object|false|none|none|
|LastUpdatedAt|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ListProfileObjectTypeTemplateItem">ListProfileObjectTypeTemplateItem</h2>
<!-- backwards compatibility -->
<a id="schemalistprofileobjecttypetemplateitem"></a>
<a id="schema_ListProfileObjectTypeTemplateItem"></a>
<a id="tocSlistprofileobjecttypetemplateitem"></a>
<a id="tocslistprofileobjecttypetemplateitem"></a>

```json
{
  "TemplateId": {},
  "SourceName": {},
  "SourceObject": {}
}
```

A ProfileObjectTypeTemplate in a list of ProfileObjectTypeTemplates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemplateId|object|false|none|none|
|SourceName|object|false|none|none|
|SourceObject|object|false|none|none|

<h2 id="tocS_ListProfileObjectTypeTemplatesRequest">ListProfileObjectTypeTemplatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistprofileobjecttypetemplatesrequest"></a>
<a id="schema_ListProfileObjectTypeTemplatesRequest"></a>
<a id="tocSlistprofileobjecttypetemplatesrequest"></a>
<a id="tocslistprofileobjecttypetemplatesrequest"></a>

```json
{}
```

<h2 id="tocS_ProfileObjectTypeTemplateList">ProfileObjectTypeTemplateList</h2>
<!-- backwards compatibility -->
<a id="schemaprofileobjecttypetemplatelist"></a>
<a id="schema_ProfileObjectTypeTemplateList"></a>
<a id="tocSprofileobjecttypetemplatelist"></a>
<a id="tocsprofileobjecttypetemplatelist"></a>

```json
[
  {
    "TemplateId": {},
    "SourceName": {},
    "SourceObject": {}
  }
]
```

<h2 id="tocS_ListProfileObjectTypesRequest">ListProfileObjectTypesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistprofileobjecttypesrequest"></a>
<a id="schema_ListProfileObjectTypesRequest"></a>
<a id="tocSlistprofileobjecttypesrequest"></a>
<a id="tocslistprofileobjecttypesrequest"></a>

```json
{}
```

<h2 id="tocS_ProfileObjectTypeList">ProfileObjectTypeList</h2>
<!-- backwards compatibility -->
<a id="schemaprofileobjecttypelist"></a>
<a id="schema_ProfileObjectTypeList"></a>
<a id="tocSprofileobjecttypelist"></a>
<a id="tocsprofileobjecttypelist"></a>

```json
[
  {
    "ObjectTypeName": {},
    "Description": {},
    "CreatedAt": {},
    "LastUpdatedAt": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_stringifiedJson">stringifiedJson</h2>
<!-- backwards compatibility -->
<a id="schemastringifiedjson"></a>
<a id="schema_stringifiedJson"></a>
<a id="tocSstringifiedjson"></a>
<a id="tocsstringifiedjson"></a>

```json
"string"
```

<h2 id="tocS_ListProfileObjectsItem">ListProfileObjectsItem</h2>
<!-- backwards compatibility -->
<a id="schemalistprofileobjectsitem"></a>
<a id="schema_ListProfileObjectsItem"></a>
<a id="tocSlistprofileobjectsitem"></a>
<a id="tocslistprofileobjectsitem"></a>

```json
{
  "ObjectTypeName": {},
  "ProfileObjectUniqueKey": {},
  "Object": {}
}
```

A ProfileObject in a list of ProfileObjects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectTypeName|object|false|none|none|
|ProfileObjectUniqueKey|object|false|none|none|
|Object|object|false|none|none|

<h2 id="tocS_ObjectFilter">ObjectFilter</h2>
<!-- backwards compatibility -->
<a id="schemaobjectfilter"></a>
<a id="schema_ObjectFilter"></a>
<a id="tocSobjectfilter"></a>
<a id="tocsobjectfilter"></a>

```json
{
  "KeyName": {},
  "Values": {}
}
```

The filter applied to ListProfileObjects response to include profile objects with the specified index values. This filter is only supported for ObjectTypeName _asset, _case and _order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyName|object|true|none|none|
|Values|object|true|none|none|

<h2 id="tocS_ListProfileObjectsRequest">ListProfileObjectsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistprofileobjectsrequest"></a>
<a id="schema_ListProfileObjectsRequest"></a>
<a id="tocSlistprofileobjectsrequest"></a>
<a id="tocslistprofileobjectsrequest"></a>

```json
{
  "ObjectTypeName": {},
  "ProfileId": {},
  "ObjectFilter": {
    "KeyName": {},
    "Values": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectTypeName|object|true|none|none|
|ProfileId|object|true|none|none|
|ObjectFilter|object|false|none|none|

<h2 id="tocS_ProfileObjectList">ProfileObjectList</h2>
<!-- backwards compatibility -->
<a id="schemaprofileobjectlist"></a>
<a id="schema_ProfileObjectList"></a>
<a id="tocSprofileobjectlist"></a>
<a id="tocsprofileobjectlist"></a>

```json
[
  {
    "ObjectTypeName": {},
    "ProfileObjectUniqueKey": {},
    "Object": {}
  }
]
```

<h2 id="tocS_TagArn">TagArn</h2>
<!-- backwards compatibility -->
<a id="schematagarn"></a>
<a id="schema_TagArn"></a>
<a id="tocStagarn"></a>
<a id="tocstagarn"></a>

```json
"string"
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

<h2 id="tocS_ListWorkflowsItem">ListWorkflowsItem</h2>
<!-- backwards compatibility -->
<a id="schemalistworkflowsitem"></a>
<a id="schema_ListWorkflowsItem"></a>
<a id="tocSlistworkflowsitem"></a>
<a id="tocslistworkflowsitem"></a>

```json
{
  "WorkflowType": {},
  "WorkflowId": {},
  "Status": {},
  "StatusDescription": {},
  "CreatedAt": {},
  "LastUpdatedAt": {}
}
```

A workflow in list of workflows.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkflowType|object|true|none|none|
|WorkflowId|object|true|none|none|
|Status|object|true|none|none|
|StatusDescription|object|true|none|none|
|CreatedAt|object|true|none|none|
|LastUpdatedAt|object|true|none|none|

<h2 id="tocS_ListWorkflowsRequest">ListWorkflowsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistworkflowsrequest"></a>
<a id="schema_ListWorkflowsRequest"></a>
<a id="tocSlistworkflowsrequest"></a>
<a id="tocslistworkflowsrequest"></a>

```json
{
  "WorkflowType": {},
  "Status": {},
  "QueryStartDate": {},
  "QueryEndDate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkflowType|object|false|none|none|
|Status|object|false|none|none|
|QueryStartDate|object|false|none|none|
|QueryEndDate|object|false|none|none|

<h2 id="tocS_WorkflowList">WorkflowList</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowlist"></a>
<a id="schema_WorkflowList"></a>
<a id="tocSworkflowlist"></a>
<a id="tocsworkflowlist"></a>

```json
[
  {
    "WorkflowType": {},
    "WorkflowId": {},
    "Status": {},
    "StatusDescription": {},
    "CreatedAt": {},
    "LastUpdatedAt": {}
  }
]
```

<h2 id="tocS_Object">Object</h2>
<!-- backwards compatibility -->
<a id="schemaobject"></a>
<a id="schema_Object"></a>
<a id="tocSobject"></a>
<a id="tocsobject"></a>

```json
"string"
```

<h2 id="tocS_MarketoSourceProperties">MarketoSourceProperties</h2>
<!-- backwards compatibility -->
<a id="schemamarketosourceproperties"></a>
<a id="schema_MarketoSourceProperties"></a>
<a id="tocSmarketosourceproperties"></a>
<a id="tocsmarketosourceproperties"></a>

```json
{
  "Object": {}
}
```

The properties that are applied when Marketo is being used as a source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Object|object|true|none|none|

<h2 id="tocS_ProfileIdList">ProfileIdList</h2>
<!-- backwards compatibility -->
<a id="schemaprofileidlist"></a>
<a id="schema_ProfileIdList"></a>
<a id="tocSprofileidlist"></a>
<a id="tocsprofileidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MatchItem">MatchItem</h2>
<!-- backwards compatibility -->
<a id="schemamatchitem"></a>
<a id="schema_MatchItem"></a>
<a id="tocSmatchitem"></a>
<a id="tocsmatchitem"></a>

```json
{
  "MatchId": {},
  "ProfileIds": {},
  "ConfidenceScore": {}
}
```

The Match group object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MatchId|object|false|none|none|
|ProfileIds|object|false|none|none|
|ConfidenceScore|object|false|none|none|

<h2 id="tocS_MatchingAttributes">MatchingAttributes</h2>
<!-- backwards compatibility -->
<a id="schemamatchingattributes"></a>
<a id="schema_MatchingAttributes"></a>
<a id="tocSmatchingattributes"></a>
<a id="tocsmatchingattributes"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ProfileIdToBeMergedList">ProfileIdToBeMergedList</h2>
<!-- backwards compatibility -->
<a id="schemaprofileidtobemergedlist"></a>
<a id="schema_ProfileIdToBeMergedList"></a>
<a id="tocSprofileidtobemergedlist"></a>
<a id="tocsprofileidtobemergedlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MergeProfilesRequest">MergeProfilesRequest</h2>
<!-- backwards compatibility -->
<a id="schemamergeprofilesrequest"></a>
<a id="schema_MergeProfilesRequest"></a>
<a id="tocSmergeprofilesrequest"></a>
<a id="tocsmergeprofilesrequest"></a>

```json
{
  "MainProfileId": {},
  "ProfileIdsToBeMerged": {},
  "FieldSourceProfileIds": {
    "AccountNumber": {},
    "AdditionalInformation": {},
    "PartyType": {},
    "BusinessName": {},
    "FirstName": {},
    "MiddleName": {},
    "LastName": {},
    "BirthDate": {},
    "Gender": {},
    "PhoneNumber": {},
    "MobilePhoneNumber": {},
    "HomePhoneNumber": {},
    "BusinessPhoneNumber": {},
    "EmailAddress": {},
    "PersonalEmailAddress": {},
    "BusinessEmailAddress": {},
    "Address": {},
    "ShippingAddress": {},
    "MailingAddress": {},
    "BillingAddress": {},
    "Attributes": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MainProfileId|object|true|none|none|
|ProfileIdsToBeMerged|object|true|none|none|
|FieldSourceProfileIds|object|false|none|none|

<h2 id="tocS_StandardIdentifierList">StandardIdentifierList</h2>
<!-- backwards compatibility -->
<a id="schemastandardidentifierlist"></a>
<a id="schema_StandardIdentifierList"></a>
<a id="tocSstandardidentifierlist"></a>
<a id="tocsstandardidentifierlist"></a>

```json
[
  "PROFILE"
]
```

<h2 id="tocS_ObjectTypeKey">ObjectTypeKey</h2>
<!-- backwards compatibility -->
<a id="schemaobjecttypekey"></a>
<a id="schema_ObjectTypeKey"></a>
<a id="tocSobjecttypekey"></a>
<a id="tocsobjecttypekey"></a>

```json
{
  "StandardIdentifiers": {},
  "FieldNames": {}
}
```

An object that defines the Key element of a ProfileObject. A Key is a special element that can be used to search for a customer profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StandardIdentifiers|object|false|none|none|
|FieldNames|object|false|none|none|

<h2 id="tocS_OperatorPropertiesKeys">OperatorPropertiesKeys</h2>
<!-- backwards compatibility -->
<a id="schemaoperatorpropertieskeys"></a>
<a id="schema_OperatorPropertiesKeys"></a>
<a id="tocSoperatorpropertieskeys"></a>
<a id="tocsoperatorpropertieskeys"></a>

```json
"VALUE"
```

<h2 id="tocS_foundByList">foundByList</h2>
<!-- backwards compatibility -->
<a id="schemafoundbylist"></a>
<a id="schema_foundByList"></a>
<a id="tocSfoundbylist"></a>
<a id="tocsfoundbylist"></a>

```json
[
  {
    "KeyName": {},
    "Values": {}
  }
]
```

<h2 id="tocS_Profile">Profile</h2>
<!-- backwards compatibility -->
<a id="schemaprofile"></a>
<a id="schema_Profile"></a>
<a id="tocSprofile"></a>
<a id="tocsprofile"></a>

```json
{
  "ProfileId": {},
  "AccountNumber": {},
  "AdditionalInformation": {},
  "PartyType": {},
  "BusinessName": {},
  "FirstName": {},
  "MiddleName": {},
  "LastName": {},
  "BirthDate": {},
  "Gender": {},
  "PhoneNumber": {},
  "MobilePhoneNumber": {},
  "HomePhoneNumber": {},
  "BusinessPhoneNumber": {},
  "EmailAddress": {},
  "PersonalEmailAddress": {},
  "BusinessEmailAddress": {},
  "Address": {
    "Address1": {},
    "Address2": {},
    "Address3": {},
    "Address4": {},
    "City": {},
    "County": {},
    "State": {},
    "Province": {},
    "Country": {},
    "PostalCode": {}
  },
  "ShippingAddress": {
    "Address1": {},
    "Address2": {},
    "Address3": {},
    "Address4": {},
    "City": {},
    "County": {},
    "State": {},
    "Province": {},
    "Country": {},
    "PostalCode": {}
  },
  "MailingAddress": {
    "Address1": {},
    "Address2": {},
    "Address3": {},
    "Address4": {},
    "City": {},
    "County": {},
    "State": {},
    "Province": {},
    "Country": {},
    "PostalCode": {}
  },
  "BillingAddress": {
    "Address1": {},
    "Address2": {},
    "Address3": {},
    "Address4": {},
    "City": {},
    "County": {},
    "State": {},
    "Province": {},
    "Country": {},
    "PostalCode": {}
  },
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "FoundByItems": {},
  "PartyTypeString": {},
  "GenderString": {}
}
```

The standard profile of a customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProfileId|object|false|none|none|
|AccountNumber|object|false|none|none|
|AdditionalInformation|object|false|none|none|
|PartyType|object|false|none|none|
|BusinessName|object|false|none|none|
|FirstName|object|false|none|none|
|MiddleName|object|false|none|none|
|LastName|object|false|none|none|
|BirthDate|object|false|none|none|
|Gender|object|false|none|none|
|PhoneNumber|object|false|none|none|
|MobilePhoneNumber|object|false|none|none|
|HomePhoneNumber|object|false|none|none|
|BusinessPhoneNumber|object|false|none|none|
|EmailAddress|object|false|none|none|
|PersonalEmailAddress|object|false|none|none|
|BusinessEmailAddress|object|false|none|none|
|Address|object|false|none|none|
|ShippingAddress|object|false|none|none|
|MailingAddress|object|false|none|none|
|BillingAddress|object|false|none|none|
|Attributes|object|false|none|none|
|FoundByItems|object|false|none|none|
|PartyTypeString|object|false|none|none|
|GenderString|object|false|none|none|

<h2 id="tocS_ProfileList">ProfileList</h2>
<!-- backwards compatibility -->
<a id="schemaprofilelist"></a>
<a id="schema_ProfileList"></a>
<a id="tocSprofilelist"></a>
<a id="tocsprofilelist"></a>

```json
[
  {
    "ProfileId": {},
    "AccountNumber": {},
    "AdditionalInformation": {},
    "PartyType": {},
    "BusinessName": {},
    "FirstName": {},
    "MiddleName": {},
    "LastName": {},
    "BirthDate": {},
    "Gender": {},
    "PhoneNumber": {},
    "MobilePhoneNumber": {},
    "HomePhoneNumber": {},
    "BusinessPhoneNumber": {},
    "EmailAddress": {},
    "PersonalEmailAddress": {},
    "BusinessEmailAddress": {},
    "Address": {
      "Address1": {},
      "Address2": {},
      "Address3": {},
      "Address4": {},
      "City": {},
      "County": {},
      "State": {},
      "Province": {},
      "Country": {},
      "PostalCode": {}
    },
    "ShippingAddress": {
      "Address1": {},
      "Address2": {},
      "Address3": {},
      "Address4": {},
      "City": {},
      "County": {},
      "State": {},
      "Province": {},
      "Country": {},
      "PostalCode": {}
    },
    "MailingAddress": {
      "Address1": {},
      "Address2": {},
      "Address3": {},
      "Address4": {},
      "City": {},
      "County": {},
      "State": {},
      "Province": {},
      "Country": {},
      "PostalCode": {}
    },
    "BillingAddress": {
      "Address1": {},
      "Address2": {},
      "Address3": {},
      "Address4": {},
      "City": {},
      "County": {},
      "State": {},
      "Province": {},
      "Country": {},
      "PostalCode": {}
    },
    "Attributes": {
      "property1": "string",
      "property2": "string"
    },
    "FoundByItems": {},
    "PartyTypeString": {},
    "GenderString": {}
  }
]
```

<h2 id="tocS_Property">Property</h2>
<!-- backwards compatibility -->
<a id="schemaproperty"></a>
<a id="schema_Property"></a>
<a id="tocSproperty"></a>
<a id="tocsproperty"></a>

```json
"string"
```

<h2 id="tocS_PutIntegrationRequest">PutIntegrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputintegrationrequest"></a>
<a id="schema_PutIntegrationRequest"></a>
<a id="tocSputintegrationrequest"></a>
<a id="tocsputintegrationrequest"></a>

```json
{
  "Uri": {},
  "ObjectTypeName": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "FlowDefinition": {
    "Description": {},
    "FlowName": {},
    "KmsArn": {},
    "SourceFlowConfig": {
      "ConnectorProfileName": {},
      "ConnectorType": {},
      "IncrementalPullConfig": {
        "DatetimeTypeFieldName": {}
      },
      "SourceConnectorProperties": {
        "Marketo": {
          "Object": {}
        },
        "S3": {
          "BucketName": {},
          "BucketPrefix": {}
        },
        "Salesforce": {
          "Object": {},
          "EnableDynamicFieldUpdate": {},
          "IncludeDeletedRecords": {}
        },
        "ServiceNow": {
          "Object": {}
        },
        "Zendesk": {
          "Object": {}
        }
      }
    },
    "Tasks": {},
    "TriggerConfig": {
      "TriggerType": {},
      "TriggerProperties": {
        "Scheduled": {
          "ScheduleExpression": {},
          "DataPullMode": {},
          "ScheduleStartTime": {},
          "ScheduleEndTime": {},
          "Timezone": {},
          "ScheduleOffset": {},
          "FirstExecutionFrom": {}
        }
      }
    }
  },
  "ObjectTypeNames": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Uri|object|false|none|none|
|ObjectTypeName|object|false|none|none|
|Tags|object|false|none|none|
|FlowDefinition|object|false|none|none|
|ObjectTypeNames|object|false|none|none|

<h2 id="tocS_PutProfileObjectRequest">PutProfileObjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputprofileobjectrequest"></a>
<a id="schema_PutProfileObjectRequest"></a>
<a id="tocSputprofileobjectrequest"></a>
<a id="tocsputprofileobjectrequest"></a>

```json
{
  "ObjectTypeName": {},
  "Object": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectTypeName|object|true|none|none|
|Object|object|true|none|none|

<h2 id="tocS_PutProfileObjectTypeRequest">PutProfileObjectTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputprofileobjecttyperequest"></a>
<a id="schema_PutProfileObjectTypeRequest"></a>
<a id="tocSputprofileobjecttyperequest"></a>
<a id="tocsputprofileobjecttyperequest"></a>

```json
{
  "Description": {},
  "TemplateId": {},
  "ExpirationDays": {},
  "EncryptionKey": {},
  "AllowProfileCreation": {},
  "SourceLastUpdatedTimestampFormat": {},
  "Fields": {
    "property1": {
      "Source": {},
      "Target": {},
      "ContentType": {}
    },
    "property2": {
      "Source": {},
      "Target": {},
      "ContentType": {}
    }
  },
  "Keys": {
    "property1": [
      {
        "StandardIdentifiers": {},
        "FieldNames": {}
      }
    ],
    "property2": [
      {
        "StandardIdentifiers": {},
        "FieldNames": {}
      }
    ]
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|true|none|none|
|TemplateId|object|false|none|none|
|ExpirationDays|object|false|none|none|
|EncryptionKey|object|false|none|none|
|AllowProfileCreation|object|false|none|none|
|SourceLastUpdatedTimestampFormat|object|false|none|none|
|Fields|object|false|none|none|
|Keys|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_s3BucketName">s3BucketName</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketname"></a>
<a id="schema_s3BucketName"></a>
<a id="tocSs3bucketname"></a>
<a id="tocss3bucketname"></a>

```json
"string"
```

<h2 id="tocS_s3KeyNameCustomerOutputConfig">s3KeyNameCustomerOutputConfig</h2>
<!-- backwards compatibility -->
<a id="schemas3keynamecustomeroutputconfig"></a>
<a id="schema_s3KeyNameCustomerOutputConfig"></a>
<a id="tocSs3keynamecustomeroutputconfig"></a>
<a id="tocss3keynamecustomeroutputconfig"></a>

```json
"string"
```

<h2 id="tocS_s3KeyName">s3KeyName</h2>
<!-- backwards compatibility -->
<a id="schemas3keyname"></a>
<a id="schema_s3KeyName"></a>
<a id="tocSs3keyname"></a>
<a id="tocss3keyname"></a>

```json
"string"
```

<h2 id="tocS_S3SourceProperties">S3SourceProperties</h2>
<!-- backwards compatibility -->
<a id="schemas3sourceproperties"></a>
<a id="schema_S3SourceProperties"></a>
<a id="tocSs3sourceproperties"></a>
<a id="tocss3sourceproperties"></a>

```json
{
  "BucketName": {},
  "BucketPrefix": {}
}
```

The properties that are applied when Amazon S3 is being used as the flow source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketName|object|true|none|none|
|BucketPrefix|object|false|none|none|

<h2 id="tocS_SalesforceSourceProperties">SalesforceSourceProperties</h2>
<!-- backwards compatibility -->
<a id="schemasalesforcesourceproperties"></a>
<a id="schema_SalesforceSourceProperties"></a>
<a id="tocSsalesforcesourceproperties"></a>
<a id="tocssalesforcesourceproperties"></a>

```json
{
  "Object": {},
  "EnableDynamicFieldUpdate": {},
  "IncludeDeletedRecords": {}
}
```

The properties that are applied when Salesforce is being used as a source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Object|object|true|none|none|
|EnableDynamicFieldUpdate|object|false|none|none|
|IncludeDeletedRecords|object|false|none|none|

<h2 id="tocS_ScheduleExpression">ScheduleExpression</h2>
<!-- backwards compatibility -->
<a id="schemascheduleexpression"></a>
<a id="schema_ScheduleExpression"></a>
<a id="tocSscheduleexpression"></a>
<a id="tocsscheduleexpression"></a>

```json
"string"
```

<h2 id="tocS_ScheduleOffset">ScheduleOffset</h2>
<!-- backwards compatibility -->
<a id="schemascheduleoffset"></a>
<a id="schema_ScheduleOffset"></a>
<a id="tocSscheduleoffset"></a>
<a id="tocsscheduleoffset"></a>

```json
0
```

<h2 id="tocS_Timezone">Timezone</h2>
<!-- backwards compatibility -->
<a id="schematimezone"></a>
<a id="schema_Timezone"></a>
<a id="tocStimezone"></a>
<a id="tocstimezone"></a>

```json
"string"
```

<h2 id="tocS_ScheduledTriggerProperties">ScheduledTriggerProperties</h2>
<!-- backwards compatibility -->
<a id="schemascheduledtriggerproperties"></a>
<a id="schema_ScheduledTriggerProperties"></a>
<a id="tocSscheduledtriggerproperties"></a>
<a id="tocsscheduledtriggerproperties"></a>

```json
{
  "ScheduleExpression": {},
  "DataPullMode": {},
  "ScheduleStartTime": {},
  "ScheduleEndTime": {},
  "Timezone": {},
  "ScheduleOffset": {},
  "FirstExecutionFrom": {}
}
```

Specifies the configuration details of a scheduled-trigger flow that you define. Currently, these settings only apply to the scheduled-trigger type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScheduleExpression|object|true|none|none|
|DataPullMode|object|false|none|none|
|ScheduleStartTime|object|false|none|none|
|ScheduleEndTime|object|false|none|none|
|Timezone|object|false|none|none|
|ScheduleOffset|object|false|none|none|
|FirstExecutionFrom|object|false|none|none|

<h2 id="tocS_additionalSearchKeysList">additionalSearchKeysList</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalsearchkeyslist"></a>
<a id="schema_additionalSearchKeysList"></a>
<a id="tocSadditionalsearchkeyslist"></a>
<a id="tocsadditionalsearchkeyslist"></a>

```json
[
  {
    "KeyName": {},
    "Values": {}
  }
]
```

<h2 id="tocS_logicalOperator">logicalOperator</h2>
<!-- backwards compatibility -->
<a id="schemalogicaloperator"></a>
<a id="schema_logicalOperator"></a>
<a id="tocSlogicaloperator"></a>
<a id="tocslogicaloperator"></a>

```json
"AND"
```

<h2 id="tocS_SearchProfilesRequest">SearchProfilesRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchprofilesrequest"></a>
<a id="schema_SearchProfilesRequest"></a>
<a id="tocSsearchprofilesrequest"></a>
<a id="tocssearchprofilesrequest"></a>

```json
{
  "KeyName": {},
  "Values": {},
  "AdditionalSearchKeys": {},
  "LogicalOperator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyName|object|true|none|none|
|Values|object|true|none|none|
|AdditionalSearchKeys|object|false|none|none|
|LogicalOperator|object|false|none|none|

<h2 id="tocS_ServiceNowSourceProperties">ServiceNowSourceProperties</h2>
<!-- backwards compatibility -->
<a id="schemaservicenowsourceproperties"></a>
<a id="schema_ServiceNowSourceProperties"></a>
<a id="tocSservicenowsourceproperties"></a>
<a id="tocsservicenowsourceproperties"></a>

```json
{
  "Object": {}
}
```

The properties that are applied when ServiceNow is being used as a source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Object|object|true|none|none|

<h2 id="tocS_ZendeskSourceProperties">ZendeskSourceProperties</h2>
<!-- backwards compatibility -->
<a id="schemazendesksourceproperties"></a>
<a id="schema_ZendeskSourceProperties"></a>
<a id="tocSzendesksourceproperties"></a>
<a id="tocszendesksourceproperties"></a>

```json
{
  "Object": {}
}
```

The properties that are applied when using Zendesk as a flow source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Object|object|true|none|none|

<h2 id="tocS_SourceConnectorProperties">SourceConnectorProperties</h2>
<!-- backwards compatibility -->
<a id="schemasourceconnectorproperties"></a>
<a id="schema_SourceConnectorProperties"></a>
<a id="tocSsourceconnectorproperties"></a>
<a id="tocssourceconnectorproperties"></a>

```json
{
  "Marketo": {
    "Object": {}
  },
  "S3": {
    "BucketName": {},
    "BucketPrefix": {}
  },
  "Salesforce": {
    "Object": {},
    "EnableDynamicFieldUpdate": {},
    "IncludeDeletedRecords": {}
  },
  "ServiceNow": {
    "Object": {}
  },
  "Zendesk": {
    "Object": {}
  }
}
```

Specifies the information that is required to query a particular Amazon AppFlow connector. Customer Profiles supports Salesforce, Zendesk, Marketo, ServiceNow and Amazon S3.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marketo|object|false|none|none|
|S3|object|false|none|none|
|Salesforce|object|false|none|none|
|ServiceNow|object|false|none|none|
|Zendesk|object|false|none|none|

<h2 id="tocS_SourceFields">SourceFields</h2>
<!-- backwards compatibility -->
<a id="schemasourcefields"></a>
<a id="schema_SourceFields"></a>
<a id="tocSsourcefields"></a>
<a id="tocssourcefields"></a>

```json
[
  "string"
]
```

<h2 id="tocS_StandardIdentifier">StandardIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemastandardidentifier"></a>
<a id="schema_StandardIdentifier"></a>
<a id="tocSstandardidentifier"></a>
<a id="tocsstandardidentifier"></a>

```json
"PROFILE"
```

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|true|none|none|

<h2 id="tocS_TaskPropertiesMap">TaskPropertiesMap</h2>
<!-- backwards compatibility -->
<a id="schemataskpropertiesmap"></a>
<a id="schema_TaskPropertiesMap"></a>
<a id="tocStaskpropertiesmap"></a>
<a id="tocstaskpropertiesmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Property](#schemaproperty)|false|none|none|

<h2 id="tocS_TaskType">TaskType</h2>
<!-- backwards compatibility -->
<a id="schematasktype"></a>
<a id="schema_TaskType"></a>
<a id="tocStasktype"></a>
<a id="tocstasktype"></a>

```json
"Arithmetic"
```

<h2 id="tocS_Task">Task</h2>
<!-- backwards compatibility -->
<a id="schematask"></a>
<a id="schema_Task"></a>
<a id="tocStask"></a>
<a id="tocstask"></a>

```json
{
  "ConnectorOperator": {
    "Marketo": {},
    "S3": {},
    "Salesforce": {},
    "ServiceNow": {},
    "Zendesk": {}
  },
  "DestinationField": {},
  "SourceFields": {},
  "TaskProperties": {
    "property1": "string",
    "property2": "string"
  },
  "TaskType": {}
}
```

A class for modeling different type of tasks. Task implementation varies based on the TaskType.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectorOperator|object|false|none|none|
|DestinationField|object|false|none|none|
|SourceFields|object|true|none|none|
|TaskProperties|object|false|none|none|
|TaskType|object|true|none|none|

<h2 id="tocS_TriggerType">TriggerType</h2>
<!-- backwards compatibility -->
<a id="schematriggertype"></a>
<a id="schema_TriggerType"></a>
<a id="tocStriggertype"></a>
<a id="tocstriggertype"></a>

```json
"Scheduled"
```

<h2 id="tocS_TriggerProperties">TriggerProperties</h2>
<!-- backwards compatibility -->
<a id="schematriggerproperties"></a>
<a id="schema_TriggerProperties"></a>
<a id="tocStriggerproperties"></a>
<a id="tocstriggerproperties"></a>

```json
{
  "Scheduled": {
    "ScheduleExpression": {},
    "DataPullMode": {},
    "ScheduleStartTime": {},
    "ScheduleEndTime": {},
    "Timezone": {},
    "ScheduleOffset": {},
    "FirstExecutionFrom": {}
  }
}
```

Specifies the configuration details that control the trigger for a flow. Currently, these settings only apply to the Scheduled trigger type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Scheduled|object|false|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateAddress">UpdateAddress</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaddress"></a>
<a id="schema_UpdateAddress"></a>
<a id="tocSupdateaddress"></a>
<a id="tocsupdateaddress"></a>

```json
{
  "Address1": {},
  "Address2": {},
  "Address3": {},
  "Address4": {},
  "City": {},
  "County": {},
  "State": {},
  "Province": {},
  "Country": {},
  "PostalCode": {}
}
```

Updates associated with the address properties of a customer profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Address1|object|false|none|none|
|Address2|object|false|none|none|
|Address3|object|false|none|none|
|Address4|object|false|none|none|
|City|object|false|none|none|
|County|object|false|none|none|
|State|object|false|none|none|
|Province|object|false|none|none|
|Country|object|false|none|none|
|PostalCode|object|false|none|none|

<h2 id="tocS_UpdateAttributes">UpdateAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaupdateattributes"></a>
<a id="schema_UpdateAttributes"></a>
<a id="tocSupdateattributes"></a>
<a id="tocsupdateattributes"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[string0To255](#schemastring0to255)|false|none|none|

<h2 id="tocS_UpdateDomainRequest">UpdateDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedomainrequest"></a>
<a id="schema_UpdateDomainRequest"></a>
<a id="tocSupdatedomainrequest"></a>
<a id="tocsupdatedomainrequest"></a>

```json
{
  "DefaultExpirationDays": {},
  "DefaultEncryptionKey": {},
  "DeadLetterQueueUrl": {},
  "Matching": {
    "Enabled": {},
    "JobSchedule": {
      "DayOfTheWeek": {},
      "Time": {}
    },
    "AutoMerging": {
      "Enabled": {},
      "Consolidation": {
        "MatchingAttributesList": {}
      },
      "ConflictResolution": {
        "ConflictResolvingModel": {},
        "SourceName": {}
      },
      "MinAllowedConfidenceScoreForMerging": {}
    },
    "ExportingConfig": {
      "S3Exporting": {
        "S3BucketName": {},
        "S3KeyName": {}
      }
    }
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DefaultExpirationDays|object|false|none|none|
|DefaultEncryptionKey|object|false|none|none|
|DeadLetterQueueUrl|object|false|none|none|
|Matching|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_string0To1000">string0To1000</h2>
<!-- backwards compatibility -->
<a id="schemastring0to1000"></a>
<a id="schema_string0To1000"></a>
<a id="tocSstring0to1000"></a>
<a id="tocsstring0to1000"></a>

```json
"string"
```

<h2 id="tocS_UpdateProfileRequest">UpdateProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprofilerequest"></a>
<a id="schema_UpdateProfileRequest"></a>
<a id="tocSupdateprofilerequest"></a>
<a id="tocsupdateprofilerequest"></a>

```json
{
  "ProfileId": {},
  "AdditionalInformation": {},
  "AccountNumber": {},
  "PartyType": {},
  "BusinessName": {},
  "FirstName": {},
  "MiddleName": {},
  "LastName": {},
  "BirthDate": {},
  "Gender": {},
  "PhoneNumber": {},
  "MobilePhoneNumber": {},
  "HomePhoneNumber": {},
  "BusinessPhoneNumber": {},
  "EmailAddress": {},
  "PersonalEmailAddress": {},
  "BusinessEmailAddress": {},
  "Address": {
    "Address1": {},
    "Address2": {},
    "Address3": {},
    "Address4": {},
    "City": {},
    "County": {},
    "State": {},
    "Province": {},
    "Country": {},
    "PostalCode": {}
  },
  "ShippingAddress": {
    "Address1": {},
    "Address2": {},
    "Address3": {},
    "Address4": {},
    "City": {},
    "County": {},
    "State": {},
    "Province": {},
    "Country": {},
    "PostalCode": {}
  },
  "MailingAddress": {
    "Address1": {},
    "Address2": {},
    "Address3": {},
    "Address4": {},
    "City": {},
    "County": {},
    "State": {},
    "Province": {},
    "Country": {},
    "PostalCode": {}
  },
  "BillingAddress": {
    "Address1": {},
    "Address2": {},
    "Address3": {},
    "Address4": {},
    "City": {},
    "County": {},
    "State": {},
    "Province": {},
    "Country": {},
    "PostalCode": {}
  },
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "PartyTypeString": {},
  "GenderString": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProfileId|object|true|none|none|
|AdditionalInformation|object|false|none|none|
|AccountNumber|object|false|none|none|
|PartyType|object|false|none|none|
|BusinessName|object|false|none|none|
|FirstName|object|false|none|none|
|MiddleName|object|false|none|none|
|LastName|object|false|none|none|
|BirthDate|object|false|none|none|
|Gender|object|false|none|none|
|PhoneNumber|object|false|none|none|
|MobilePhoneNumber|object|false|none|none|
|HomePhoneNumber|object|false|none|none|
|BusinessPhoneNumber|object|false|none|none|
|EmailAddress|object|false|none|none|
|PersonalEmailAddress|object|false|none|none|
|BusinessEmailAddress|object|false|none|none|
|Address|object|false|none|none|
|ShippingAddress|object|false|none|none|
|MailingAddress|object|false|none|none|
|BillingAddress|object|false|none|none|
|Attributes|object|false|none|none|
|PartyTypeString|object|false|none|none|
|GenderString|object|false|none|none|

<h2 id="tocS_WorkflowStepItem">WorkflowStepItem</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowstepitem"></a>
<a id="schema_WorkflowStepItem"></a>
<a id="tocSworkflowstepitem"></a>
<a id="tocsworkflowstepitem"></a>

```json
{
  "AppflowIntegration": {
    "FlowName": {},
    "Status": {},
    "ExecutionMessage": {},
    "RecordsProcessed": {},
    "BatchRecordsStartTime": {},
    "BatchRecordsEndTime": {},
    "CreatedAt": {},
    "LastUpdatedAt": {}
  }
}
```

List containing steps in workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppflowIntegration|object|false|none|none|
