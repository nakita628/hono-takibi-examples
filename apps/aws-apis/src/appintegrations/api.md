<h1 id="amazon-appintegrations-service">Amazon AppIntegrations Service v2020-07-29</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>The Amazon AppIntegrations service enables you to configure and reuse connections to external applications.</p> <p>For information about how you can use external applications with Amazon Connect, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/crm.html">Set up pre-built integrations</a> and <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-wisdom.html">Deliver information to agents using Amazon Connect Wisdom</a> in the <i>Amazon Connect Administrator Guide</i>.</p>

Base URLs:

* <a href="http://app-integrations.us-east-1.amazonaws.com">http://app-integrations.us-east-1.amazonaws.com</a> - The Amazon AppIntegrations Service multi-region endpoint

* <a href="https://app-integrations.us-east-1.amazonaws.com">https://app-integrations.us-east-1.amazonaws.com</a> - The Amazon AppIntegrations Service multi-region endpoint

* <a href="http://app-integrations.cn-north-1.amazonaws.com.cn">http://app-integrations.cn-north-1.amazonaws.com.cn</a> - The Amazon AppIntegrations Service endpoint for China (Beijing) and China (Ningxia)

* <a href="https://app-integrations.cn-north-1.amazonaws.com.cn">https://app-integrations.cn-north-1.amazonaws.com.cn</a> - The Amazon AppIntegrations Service endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/app-integrations/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-appintegrations-service-default">Default</h1>

## ListDataIntegrations

<a id="opIdListDataIntegrations"></a>

> Code samples

```bash
curl https://appintegrations.us-east-1.amazonaws.com/dataIntegrations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dataIntegrations`

<p>Returns a paginated list of DataIntegrations in the account.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>

<h3 id="listdataintegrations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per page.|
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
  "DataIntegrations": {},
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

<h3 id="listdataintegrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDataIntegrationsResponse](#schemalistdataintegrationsresponse)|
|480|480|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDataIntegration

<a id="opIdCreateDataIntegration"></a>

> Code samples

```bash
curl https://appintegrations.us-east-1.amazonaws.com/dataIntegrations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string",
    "KmsKey": "string",
    "SourceURI": "string",
    "ScheduleConfig": {
      "FirstExecutionFrom": {},
      "Object": {},
      "ScheduleExpression": {}
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "ClientToken": "string",
    "FileConfiguration": {
      "Folders": {},
      "Filters": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      }
    },
    "ObjectConfiguration": {
      "property1": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "property2": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      }
    }
  }'
```

`POST /dataIntegrations`

<p>Creates and persists a DataIntegration resource.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <code>CreateDataIntegration</code> API.</p> </note>

> Body parameter

```json
{
  "Name": "string",
  "Description": "string",
  "KmsKey": "string",
  "SourceURI": "string",
  "ScheduleConfig": {
    "FirstExecutionFrom": {},
    "Object": {},
    "ScheduleExpression": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "ClientToken": "string",
  "FileConfiguration": {
    "Folders": {},
    "Filters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  },
  "ObjectConfiguration": {
    "property1": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "property2": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  }
}
```

<h3 id="createdataintegration-parameters">Parameters</h3>

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
|» Name|body|string|true|The name of the DataIntegration.|
|» Description|body|string|false|A description of the DataIntegration.|
|» KmsKey|body|string|true|The KMS key for the DataIntegration.|
|» SourceURI|body|string|true|The URI of the data source.|
|» ScheduleConfig|body|object|true|The name of the data and how often it should be pulled from the source.|
|» » FirstExecutionFrom|body|object|false|none|
|» » Object|body|object|false|none|
|» » ScheduleExpression|body|object|false|none|
|» Tags|body|object|false|The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» ClientToken|body|string|false|A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.|
|» FileConfiguration|body|object|false|The configuration for what files should be pulled from the source.|
|» » Folders|body|object|false|none|
|» » Filters|body|object|false|none|
|» » » **additionalProperties**|body|[FieldsList](#schemafieldslist)|false|none|
|» ObjectConfiguration|body|object|false|The configuration for what data should be pulled from the source.|
|» » **additionalProperties**|body|[FieldsMap](#schemafieldsmap)|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "Id": {},
  "Name": {},
  "Description": {},
  "KmsKey": {},
  "SourceURI": {},
  "ScheduleConfiguration": {
    "FirstExecutionFrom": {},
    "Object": {},
    "ScheduleExpression": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "ClientToken": {},
  "FileConfiguration": {
    "Folders": {},
    "Filters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  },
  "ObjectConfiguration": {
    "property1": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "property2": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
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

> 485 Response

```json
null
```

<h3 id="createdataintegration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDataIntegrationResponse](#schemacreatedataintegrationresponse)|
|480|480|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|481|481|ResourceQuotaExceededException|[ResourceQuotaExceededException](#schemaresourcequotaexceededexception)|
|482|482|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEventIntegrations

<a id="opIdListEventIntegrations"></a>

> Code samples

```bash
curl https://appintegrations.us-east-1.amazonaws.com/eventIntegrations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /eventIntegrations`

Returns a paginated list of event integrations in the account.

<h3 id="listeventintegrations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per page.|
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
  "EventIntegrations": {},
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

<h3 id="listeventintegrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEventIntegrationsResponse](#schemalisteventintegrationsresponse)|
|480|480|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateEventIntegration

<a id="opIdCreateEventIntegration"></a>

> Code samples

```bash
curl https://appintegrations.us-east-1.amazonaws.com/eventIntegrations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string",
    "EventFilter": {
      "Source": {}
    },
    "EventBridgeBus": "string",
    "ClientToken": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /eventIntegrations`

Creates an EventIntegration, given a specified name, description, and a reference to an Amazon EventBridge bus in your account and a partner event source that pushes events to that bus. No objects are created in the your account, only metadata that is persisted on the EventIntegration control plane.

> Body parameter

```json
{
  "Name": "string",
  "Description": "string",
  "EventFilter": {
    "Source": {}
  },
  "EventBridgeBus": "string",
  "ClientToken": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createeventintegration-parameters">Parameters</h3>

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
|» Name|body|string|true|The name of the event integration.|
|» Description|body|string|false|The description of the event integration.|
|» EventFilter|body|object|true|The event filter.|
|» » Source|body|object|false|none|
|» EventBridgeBus|body|string|true|The EventBridge bus.|
|» ClientToken|body|string|false|A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.|
|» Tags|body|object|false|The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "EventIntegrationArn": {}
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

<h3 id="createeventintegration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateEventIntegrationResponse](#schemacreateeventintegrationresponse)|
|480|480|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|481|481|ResourceQuotaExceededException|[ResourceQuotaExceededException](#schemaresourcequotaexceededexception)|
|482|482|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDataIntegration

<a id="opIdGetDataIntegration"></a>

> Code samples

```bash
curl https://appintegrations.us-east-1.amazonaws.com/dataIntegrations/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dataIntegrations/{Identifier}`

<p>Returns information about the DataIntegration.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>

<h3 id="getdataintegration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Identifier|path|string|true|A unique identifier.|
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
  "Arn": {},
  "Id": {},
  "Name": {},
  "Description": {},
  "KmsKey": {},
  "SourceURI": {},
  "ScheduleConfiguration": {
    "FirstExecutionFrom": {},
    "Object": {},
    "ScheduleExpression": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "FileConfiguration": {
    "Folders": {},
    "Filters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  },
  "ObjectConfiguration": {
    "property1": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "property2": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
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

<h3 id="getdataintegration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDataIntegrationResponse](#schemagetdataintegrationresponse)|
|480|480|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDataIntegration

<a id="opIdDeleteDataIntegration"></a>

> Code samples

```bash
curl https://appintegrations.us-east-1.amazonaws.com/dataIntegrations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dataIntegrations/{Identifier}`

<p>Deletes the DataIntegration. Only DataIntegrations that don't have any DataIntegrationAssociations can be deleted. Deleting a DataIntegration also deletes the underlying Amazon AppFlow flow and service linked role. </p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>

<h3 id="deletedataintegration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Identifier|path|string|true|A unique identifier for the DataIntegration.|
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

<h3 id="deletedataintegration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDataIntegrationResponse](#schemadeletedataintegrationresponse)|
|480|480|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDataIntegration

<a id="opIdUpdateDataIntegration"></a>

> Code samples

```bash
curl https://appintegrations.us-east-1.amazonaws.com/dataIntegrations/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string"
  }'
```

`PATCH /dataIntegrations/{Identifier}`

<p>Updates the description of a DataIntegration.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>

> Body parameter

```json
{
  "Name": "string",
  "Description": "string"
}
```

<h3 id="updatedataintegration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Identifier|path|string|true|A unique identifier for the DataIntegration.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|false|The name of the DataIntegration.|
|» Description|body|string|false|A description of the DataIntegration.|

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

<h3 id="updatedataintegration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDataIntegrationResponse](#schemaupdatedataintegrationresponse)|
|480|480|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEventIntegration

<a id="opIdGetEventIntegration"></a>

> Code samples

```bash
curl https://appintegrations.us-east-1.amazonaws.com/eventIntegrations/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /eventIntegrations/{Name}`

Returns information about the event integration.

<h3 id="geteventintegration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|path|string|true|The name of the event integration. |
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
  "Name": {},
  "Description": {},
  "EventIntegrationArn": {},
  "EventBridgeBus": {},
  "EventFilter": {
    "Source": {}
  },
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

<h3 id="geteventintegration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEventIntegrationResponse](#schemageteventintegrationresponse)|
|480|480|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEventIntegration

<a id="opIdDeleteEventIntegration"></a>

> Code samples

```bash
curl https://appintegrations.us-east-1.amazonaws.com/eventIntegrations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /eventIntegrations/{Name}`

Deletes the specified existing event integration. If the event integration is associated with clients, the request is rejected.

<h3 id="deleteeventintegration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|path|string|true|The name of the event integration.|
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

<h3 id="deleteeventintegration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteEventIntegrationResponse](#schemadeleteeventintegrationresponse)|
|480|480|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateEventIntegration

<a id="opIdUpdateEventIntegration"></a>

> Code samples

```bash
curl https://appintegrations.us-east-1.amazonaws.com/eventIntegrations/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Description": "string"
  }'
```

`PATCH /eventIntegrations/{Name}`

Updates the description of an event integration.

> Body parameter

```json
{
  "Description": "string"
}
```

<h3 id="updateeventintegration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|path|string|true|The name of the event integration.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Description|body|string|false|The description of the event inegration.|

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

<h3 id="updateeventintegration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateEventIntegrationResponse](#schemaupdateeventintegrationresponse)|
|480|480|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDataIntegrationAssociations

<a id="opIdListDataIntegrationAssociations"></a>

> Code samples

```bash
curl https://appintegrations.us-east-1.amazonaws.com/dataIntegrations/string/associations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dataIntegrations/{Identifier}/associations`

<p>Returns a paginated list of DataIntegration associations in the account.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>

<h3 id="listdataintegrationassociations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Identifier|path|string|true|A unique identifier for the DataIntegration.|
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per page.|
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
  "DataIntegrationAssociations": {},
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

<h3 id="listdataintegrationassociations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDataIntegrationAssociationsResponse](#schemalistdataintegrationassociationsresponse)|
|480|480|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEventIntegrationAssociations

<a id="opIdListEventIntegrationAssociations"></a>

> Code samples

```bash
curl https://appintegrations.us-east-1.amazonaws.com/eventIntegrations/string/associations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /eventIntegrations/{Name}/associations`

Returns a paginated list of event integration associations in the account. 

<h3 id="listeventintegrationassociations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|path|string|true|The name of the event integration. |
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per page.|
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
  "EventIntegrationAssociations": {},
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

<h3 id="listeventintegrationassociations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEventIntegrationAssociationsResponse](#schemalisteventintegrationassociationsresponse)|
|480|480|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://appintegrations.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

Lists the tags for the specified resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource. |
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://appintegrations.us-east-1.amazonaws.com/tags/string \
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

Adds the specified tags to the specified resource.

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
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.|
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

> 483 Response

```json
null
```

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://appintegrations.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

Removes the specified tags from the specified resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|The tag keys.|
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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateDataIntegrationResponse">CreateDataIntegrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedataintegrationresponse"></a>
<a id="schema_CreateDataIntegrationResponse"></a>
<a id="tocScreatedataintegrationresponse"></a>
<a id="tocscreatedataintegrationresponse"></a>

```json
{
  "Arn": {},
  "Id": {},
  "Name": {},
  "Description": {},
  "KmsKey": {},
  "SourceURI": {},
  "ScheduleConfiguration": {
    "FirstExecutionFrom": {},
    "Object": {},
    "ScheduleExpression": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "ClientToken": {},
  "FileConfiguration": {
    "Folders": {},
    "Filters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  },
  "ObjectConfiguration": {
    "property1": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "property2": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|KmsKey|object|false|none|none|
|SourceURI|object|false|none|none|
|ScheduleConfiguration|object|false|none|none|
|Tags|object|false|none|none|
|ClientToken|object|false|none|none|
|FileConfiguration|object|false|none|none|
|ObjectConfiguration|object|false|none|none|

<h2 id="tocS_NonBlankString">NonBlankString</h2>
<!-- backwards compatibility -->
<a id="schemanonblankstring"></a>
<a id="schema_NonBlankString"></a>
<a id="tocSnonblankstring"></a>
<a id="tocsnonblankstring"></a>

```json
"string"
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

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_FolderList">FolderList</h2>
<!-- backwards compatibility -->
<a id="schemafolderlist"></a>
<a id="schema_FolderList"></a>
<a id="tocSfolderlist"></a>
<a id="tocsfolderlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FieldsMap">FieldsMap</h2>
<!-- backwards compatibility -->
<a id="schemafieldsmap"></a>
<a id="schema_FieldsMap"></a>
<a id="tocSfieldsmap"></a>
<a id="tocsfieldsmap"></a>

```json
{
  "property1": [
    "string"
  ],
  "property2": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[FieldsList](#schemafieldslist)|false|none|none|

<h2 id="tocS_InternalServiceError">InternalServiceError</h2>
<!-- backwards compatibility -->
<a id="schemainternalserviceerror"></a>
<a id="schema_InternalServiceError"></a>
<a id="tocSinternalserviceerror"></a>
<a id="tocsinternalserviceerror"></a>

```json
null
```

<h2 id="tocS_ResourceQuotaExceededException">ResourceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcequotaexceededexception"></a>
<a id="schema_ResourceQuotaExceededException"></a>
<a id="tocSresourcequotaexceededexception"></a>
<a id="tocsresourcequotaexceededexception"></a>

```json
null
```

<h2 id="tocS_DuplicateResourceException">DuplicateResourceException</h2>
<!-- backwards compatibility -->
<a id="schemaduplicateresourceexception"></a>
<a id="schema_DuplicateResourceException"></a>
<a id="tocSduplicateresourceexception"></a>
<a id="tocsduplicateresourceexception"></a>

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

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

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

<h2 id="tocS_CreateEventIntegrationResponse">CreateEventIntegrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateeventintegrationresponse"></a>
<a id="schema_CreateEventIntegrationResponse"></a>
<a id="tocScreateeventintegrationresponse"></a>
<a id="tocscreateeventintegrationresponse"></a>

```json
{
  "EventIntegrationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventIntegrationArn|object|false|none|none|

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
"string"
```

<h2 id="tocS_DeleteDataIntegrationResponse">DeleteDataIntegrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedataintegrationresponse"></a>
<a id="schema_DeleteDataIntegrationResponse"></a>
<a id="tocSdeletedataintegrationresponse"></a>
<a id="tocsdeletedataintegrationresponse"></a>

```json
{}
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

<h2 id="tocS_DeleteEventIntegrationResponse">DeleteEventIntegrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteeventintegrationresponse"></a>
<a id="schema_DeleteEventIntegrationResponse"></a>
<a id="tocSdeleteeventintegrationresponse"></a>
<a id="tocsdeleteeventintegrationresponse"></a>

```json
{}
```

<h2 id="tocS_GetDataIntegrationResponse">GetDataIntegrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdataintegrationresponse"></a>
<a id="schema_GetDataIntegrationResponse"></a>
<a id="tocSgetdataintegrationresponse"></a>
<a id="tocsgetdataintegrationresponse"></a>

```json
{
  "Arn": {},
  "Id": {},
  "Name": {},
  "Description": {},
  "KmsKey": {},
  "SourceURI": {},
  "ScheduleConfiguration": {
    "FirstExecutionFrom": {},
    "Object": {},
    "ScheduleExpression": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "FileConfiguration": {
    "Folders": {},
    "Filters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  },
  "ObjectConfiguration": {
    "property1": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "property2": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|KmsKey|object|false|none|none|
|SourceURI|object|false|none|none|
|ScheduleConfiguration|object|false|none|none|
|Tags|object|false|none|none|
|FileConfiguration|object|false|none|none|
|ObjectConfiguration|object|false|none|none|

<h2 id="tocS_GetEventIntegrationResponse">GetEventIntegrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemageteventintegrationresponse"></a>
<a id="schema_GetEventIntegrationResponse"></a>
<a id="tocSgeteventintegrationresponse"></a>
<a id="tocsgeteventintegrationresponse"></a>

```json
{
  "Name": {},
  "Description": {},
  "EventIntegrationArn": {},
  "EventBridgeBus": {},
  "EventFilter": {
    "Source": {}
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
|Name|object|false|none|none|
|Description|object|false|none|none|
|EventIntegrationArn|object|false|none|none|
|EventBridgeBus|object|false|none|none|
|EventFilter|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ListDataIntegrationAssociationsResponse">ListDataIntegrationAssociationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdataintegrationassociationsresponse"></a>
<a id="schema_ListDataIntegrationAssociationsResponse"></a>
<a id="tocSlistdataintegrationassociationsresponse"></a>
<a id="tocslistdataintegrationassociationsresponse"></a>

```json
{
  "DataIntegrationAssociations": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataIntegrationAssociations|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDataIntegrationsResponse">ListDataIntegrationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdataintegrationsresponse"></a>
<a id="schema_ListDataIntegrationsResponse"></a>
<a id="tocSlistdataintegrationsresponse"></a>
<a id="tocslistdataintegrationsresponse"></a>

```json
{
  "DataIntegrations": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataIntegrations|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListEventIntegrationAssociationsResponse">ListEventIntegrationAssociationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisteventintegrationassociationsresponse"></a>
<a id="schema_ListEventIntegrationAssociationsResponse"></a>
<a id="tocSlisteventintegrationassociationsresponse"></a>
<a id="tocslisteventintegrationassociationsresponse"></a>

```json
{
  "EventIntegrationAssociations": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventIntegrationAssociations|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListEventIntegrationsResponse">ListEventIntegrationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisteventintegrationsresponse"></a>
<a id="schema_ListEventIntegrationsResponse"></a>
<a id="tocSlisteventintegrationsresponse"></a>
<a id="tocslisteventintegrationsresponse"></a>

```json
{
  "EventIntegrations": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventIntegrations|object|false|none|none|
|NextToken|object|false|none|none|

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

<h2 id="tocS_UpdateDataIntegrationResponse">UpdateDataIntegrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedataintegrationresponse"></a>
<a id="schema_UpdateDataIntegrationResponse"></a>
<a id="tocSupdatedataintegrationresponse"></a>
<a id="tocsupdatedataintegrationresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateEventIntegrationResponse">UpdateEventIntegrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateeventintegrationresponse"></a>
<a id="schema_UpdateEventIntegrationResponse"></a>
<a id="tocSupdateeventintegrationresponse"></a>
<a id="tocsupdateeventintegrationresponse"></a>

```json
{}
```

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_ClientAssociationMetadata">ClientAssociationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaclientassociationmetadata"></a>
<a id="schema_ClientAssociationMetadata"></a>
<a id="tocSclientassociationmetadata"></a>
<a id="tocsclientassociationmetadata"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[NonBlankString](#schemanonblankstring)|false|none|none|

<h2 id="tocS_ClientId">ClientId</h2>
<!-- backwards compatibility -->
<a id="schemaclientid"></a>
<a id="schema_ClientId"></a>
<a id="tocSclientid"></a>
<a id="tocsclientid"></a>

```json
"string"
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

<h2 id="tocS_Description">Description</h2>
<!-- backwards compatibility -->
<a id="schemadescription"></a>
<a id="schema_Description"></a>
<a id="tocSdescription"></a>
<a id="tocsdescription"></a>

```json
"string"
```

<h2 id="tocS_SourceURI">SourceURI</h2>
<!-- backwards compatibility -->
<a id="schemasourceuri"></a>
<a id="schema_SourceURI"></a>
<a id="tocSsourceuri"></a>
<a id="tocssourceuri"></a>

```json
"string"
```

<h2 id="tocS_ScheduleConfiguration">ScheduleConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemascheduleconfiguration"></a>
<a id="schema_ScheduleConfiguration"></a>
<a id="tocSscheduleconfiguration"></a>
<a id="tocsscheduleconfiguration"></a>

```json
{
  "FirstExecutionFrom": {},
  "Object": {},
  "ScheduleExpression": {}
}
```

The name of the data and how often it should be pulled from the source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirstExecutionFrom|object|false|none|none|
|Object|object|false|none|none|
|ScheduleExpression|object|true|none|none|

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

<h2 id="tocS_IdempotencyToken">IdempotencyToken</h2>
<!-- backwards compatibility -->
<a id="schemaidempotencytoken"></a>
<a id="schema_IdempotencyToken"></a>
<a id="tocSidempotencytoken"></a>
<a id="tocsidempotencytoken"></a>

```json
"string"
```

<h2 id="tocS_FileConfiguration">FileConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemafileconfiguration"></a>
<a id="schema_FileConfiguration"></a>
<a id="tocSfileconfiguration"></a>
<a id="tocsfileconfiguration"></a>

```json
{
  "Folders": {},
  "Filters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

The configuration for what files should be pulled from the source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Folders|object|true|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_ObjectConfiguration">ObjectConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaobjectconfiguration"></a>
<a id="schema_ObjectConfiguration"></a>
<a id="tocSobjectconfiguration"></a>
<a id="tocsobjectconfiguration"></a>

```json
{
  "property1": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "property2": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

The configuration for what data should be pulled from the source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[FieldsMap](#schemafieldsmap)|false|none|none|

<h2 id="tocS_CreateDataIntegrationRequest">CreateDataIntegrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedataintegrationrequest"></a>
<a id="schema_CreateDataIntegrationRequest"></a>
<a id="tocScreatedataintegrationrequest"></a>
<a id="tocscreatedataintegrationrequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "KmsKey": {},
  "SourceURI": {},
  "ScheduleConfig": {
    "FirstExecutionFrom": {},
    "Object": {},
    "ScheduleExpression": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "ClientToken": {},
  "FileConfiguration": {
    "Folders": {},
    "Filters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  },
  "ObjectConfiguration": {
    "property1": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "property2": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|KmsKey|object|true|none|none|
|SourceURI|object|true|none|none|
|ScheduleConfig|object|true|none|none|
|Tags|object|false|none|none|
|ClientToken|object|false|none|none|
|FileConfiguration|object|false|none|none|
|ObjectConfiguration|object|false|none|none|

<h2 id="tocS_UUID">UUID</h2>
<!-- backwards compatibility -->
<a id="schemauuid"></a>
<a id="schema_UUID"></a>
<a id="tocSuuid"></a>
<a id="tocsuuid"></a>

```json
"string"
```

<h2 id="tocS_EventFilter">EventFilter</h2>
<!-- backwards compatibility -->
<a id="schemaeventfilter"></a>
<a id="schema_EventFilter"></a>
<a id="tocSeventfilter"></a>
<a id="tocseventfilter"></a>

```json
{
  "Source": {}
}
```

The event filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Source|object|true|none|none|

<h2 id="tocS_EventBridgeBus">EventBridgeBus</h2>
<!-- backwards compatibility -->
<a id="schemaeventbridgebus"></a>
<a id="schema_EventBridgeBus"></a>
<a id="tocSeventbridgebus"></a>
<a id="tocseventbridgebus"></a>

```json
"string"
```

<h2 id="tocS_CreateEventIntegrationRequest">CreateEventIntegrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateeventintegrationrequest"></a>
<a id="schema_CreateEventIntegrationRequest"></a>
<a id="tocScreateeventintegrationrequest"></a>
<a id="tocscreateeventintegrationrequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "EventFilter": {
    "Source": {}
  },
  "EventBridgeBus": {},
  "ClientToken": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|EventFilter|object|true|none|none|
|EventBridgeBus|object|true|none|none|
|ClientToken|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DataIntegrationAssociationSummary">DataIntegrationAssociationSummary</h2>
<!-- backwards compatibility -->
<a id="schemadataintegrationassociationsummary"></a>
<a id="schema_DataIntegrationAssociationSummary"></a>
<a id="tocSdataintegrationassociationsummary"></a>
<a id="tocsdataintegrationassociationsummary"></a>

```json
{
  "DataIntegrationAssociationArn": {},
  "DataIntegrationArn": {},
  "ClientId": {}
}
```

Summary information about the DataIntegration association.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataIntegrationAssociationArn|object|false|none|none|
|DataIntegrationArn|object|false|none|none|
|ClientId|object|false|none|none|

<h2 id="tocS_DataIntegrationAssociationsList">DataIntegrationAssociationsList</h2>
<!-- backwards compatibility -->
<a id="schemadataintegrationassociationslist"></a>
<a id="schema_DataIntegrationAssociationsList"></a>
<a id="tocSdataintegrationassociationslist"></a>
<a id="tocsdataintegrationassociationslist"></a>

```json
[
  {
    "DataIntegrationAssociationArn": {},
    "DataIntegrationArn": {},
    "ClientId": {}
  }
]
```

<h2 id="tocS_DataIntegrationSummary">DataIntegrationSummary</h2>
<!-- backwards compatibility -->
<a id="schemadataintegrationsummary"></a>
<a id="schema_DataIntegrationSummary"></a>
<a id="tocSdataintegrationsummary"></a>
<a id="tocsdataintegrationsummary"></a>

```json
{
  "Arn": {},
  "Name": {},
  "SourceURI": {}
}
```

Summary information about the DataIntegration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|SourceURI|object|false|none|none|

<h2 id="tocS_DataIntegrationsList">DataIntegrationsList</h2>
<!-- backwards compatibility -->
<a id="schemadataintegrationslist"></a>
<a id="schema_DataIntegrationsList"></a>
<a id="tocSdataintegrationslist"></a>
<a id="tocsdataintegrationslist"></a>

```json
[
  {
    "Arn": {},
    "Name": {},
    "SourceURI": {}
  }
]
```

<h2 id="tocS_Identifier">Identifier</h2>
<!-- backwards compatibility -->
<a id="schemaidentifier"></a>
<a id="schema_Identifier"></a>
<a id="tocSidentifier"></a>
<a id="tocsidentifier"></a>

```json
"string"
```

<h2 id="tocS_DeleteDataIntegrationRequest">DeleteDataIntegrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedataintegrationrequest"></a>
<a id="schema_DeleteDataIntegrationRequest"></a>
<a id="tocSdeletedataintegrationrequest"></a>
<a id="tocsdeletedataintegrationrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteEventIntegrationRequest">DeleteEventIntegrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteeventintegrationrequest"></a>
<a id="schema_DeleteEventIntegrationRequest"></a>
<a id="tocSdeleteeventintegrationrequest"></a>
<a id="tocsdeleteeventintegrationrequest"></a>

```json
{}
```

<h2 id="tocS_EventBridgeRuleName">EventBridgeRuleName</h2>
<!-- backwards compatibility -->
<a id="schemaeventbridgerulename"></a>
<a id="schema_EventBridgeRuleName"></a>
<a id="tocSeventbridgerulename"></a>
<a id="tocseventbridgerulename"></a>

```json
"string"
```

<h2 id="tocS_EventIntegration">EventIntegration</h2>
<!-- backwards compatibility -->
<a id="schemaeventintegration"></a>
<a id="schema_EventIntegration"></a>
<a id="tocSeventintegration"></a>
<a id="tocseventintegration"></a>

```json
{
  "EventIntegrationArn": {},
  "Name": {},
  "Description": {},
  "EventFilter": {
    "Source": {}
  },
  "EventBridgeBus": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

The event integration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventIntegrationArn|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|EventFilter|object|false|none|none|
|EventBridgeBus|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_EventIntegrationAssociation">EventIntegrationAssociation</h2>
<!-- backwards compatibility -->
<a id="schemaeventintegrationassociation"></a>
<a id="schema_EventIntegrationAssociation"></a>
<a id="tocSeventintegrationassociation"></a>
<a id="tocseventintegrationassociation"></a>

```json
{
  "EventIntegrationAssociationArn": {},
  "EventIntegrationAssociationId": {},
  "EventIntegrationName": {},
  "ClientId": {},
  "EventBridgeRuleName": {},
  "ClientAssociationMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

The event integration association.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventIntegrationAssociationArn|object|false|none|none|
|EventIntegrationAssociationId|object|false|none|none|
|EventIntegrationName|object|false|none|none|
|ClientId|object|false|none|none|
|EventBridgeRuleName|object|false|none|none|
|ClientAssociationMetadata|object|false|none|none|

<h2 id="tocS_EventIntegrationAssociationsList">EventIntegrationAssociationsList</h2>
<!-- backwards compatibility -->
<a id="schemaeventintegrationassociationslist"></a>
<a id="schema_EventIntegrationAssociationsList"></a>
<a id="tocSeventintegrationassociationslist"></a>
<a id="tocseventintegrationassociationslist"></a>

```json
[
  {
    "EventIntegrationAssociationArn": {},
    "EventIntegrationAssociationId": {},
    "EventIntegrationName": {},
    "ClientId": {},
    "EventBridgeRuleName": {},
    "ClientAssociationMetadata": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_EventIntegrationsList">EventIntegrationsList</h2>
<!-- backwards compatibility -->
<a id="schemaeventintegrationslist"></a>
<a id="schema_EventIntegrationsList"></a>
<a id="tocSeventintegrationslist"></a>
<a id="tocseventintegrationslist"></a>

```json
[
  {
    "EventIntegrationArn": {},
    "Name": {},
    "Description": {},
    "EventFilter": {
      "Source": {}
    },
    "EventBridgeBus": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_Fields">Fields</h2>
<!-- backwards compatibility -->
<a id="schemafields"></a>
<a id="schema_Fields"></a>
<a id="tocSfields"></a>
<a id="tocsfields"></a>

```json
"string"
```

<h2 id="tocS_FieldsList">FieldsList</h2>
<!-- backwards compatibility -->
<a id="schemafieldslist"></a>
<a id="schema_FieldsList"></a>
<a id="tocSfieldslist"></a>
<a id="tocsfieldslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_NonBlankLongString">NonBlankLongString</h2>
<!-- backwards compatibility -->
<a id="schemanonblanklongstring"></a>
<a id="schema_NonBlankLongString"></a>
<a id="tocSnonblanklongstring"></a>
<a id="tocsnonblanklongstring"></a>

```json
"string"
```

<h2 id="tocS_GetDataIntegrationRequest">GetDataIntegrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdataintegrationrequest"></a>
<a id="schema_GetDataIntegrationRequest"></a>
<a id="tocSgetdataintegrationrequest"></a>
<a id="tocsgetdataintegrationrequest"></a>

```json
{}
```

<h2 id="tocS_GetEventIntegrationRequest">GetEventIntegrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemageteventintegrationrequest"></a>
<a id="schema_GetEventIntegrationRequest"></a>
<a id="tocSgeteventintegrationrequest"></a>
<a id="tocsgeteventintegrationrequest"></a>

```json
{}
```

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
```

<h2 id="tocS_ListDataIntegrationAssociationsRequest">ListDataIntegrationAssociationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdataintegrationassociationsrequest"></a>
<a id="schema_ListDataIntegrationAssociationsRequest"></a>
<a id="tocSlistdataintegrationassociationsrequest"></a>
<a id="tocslistdataintegrationassociationsrequest"></a>

```json
{}
```

<h2 id="tocS_ListDataIntegrationsRequest">ListDataIntegrationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdataintegrationsrequest"></a>
<a id="schema_ListDataIntegrationsRequest"></a>
<a id="tocSlistdataintegrationsrequest"></a>
<a id="tocslistdataintegrationsrequest"></a>

```json
{}
```

<h2 id="tocS_ListEventIntegrationAssociationsRequest">ListEventIntegrationAssociationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisteventintegrationassociationsrequest"></a>
<a id="schema_ListEventIntegrationAssociationsRequest"></a>
<a id="tocSlisteventintegrationassociationsrequest"></a>
<a id="tocslisteventintegrationassociationsrequest"></a>

```json
{}
```

<h2 id="tocS_ListEventIntegrationsRequest">ListEventIntegrationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisteventintegrationsrequest"></a>
<a id="schema_ListEventIntegrationsRequest"></a>
<a id="tocSlisteventintegrationsrequest"></a>
<a id="tocslisteventintegrationsrequest"></a>

```json
{}
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

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateDataIntegrationRequest">UpdateDataIntegrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedataintegrationrequest"></a>
<a id="schema_UpdateDataIntegrationRequest"></a>
<a id="tocSupdatedataintegrationrequest"></a>
<a id="tocsupdatedataintegrationrequest"></a>

```json
{
  "Name": {},
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_UpdateEventIntegrationRequest">UpdateEventIntegrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateeventintegrationrequest"></a>
<a id="schema_UpdateEventIntegrationRequest"></a>
<a id="tocSupdateeventintegrationrequest"></a>
<a id="tocsupdateeventintegrationrequest"></a>

```json
{
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
