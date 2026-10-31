<h1 id="aws-cost-explorer-service">AWS Cost Explorer Service v2017-10-25</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>You can use the Cost Explorer API to programmatically query your cost and usage data. You can query for aggregated data such as total monthly costs or total daily usage. You can also query for granular data. This might include the number of daily write operations for Amazon DynamoDB database tables in your production environment. </p> <p>Service Endpoint</p> <p>The Cost Explorer API provides the following endpoint:</p> <ul> <li> <p> <code>https://ce.us-east-1.amazonaws.com</code> </p> </li> </ul> <p>For information about the costs that are associated with the Cost Explorer API, see <a href="http://aws.amazon.com/aws-cost-management/pricing/">Amazon Web Services Cost Management Pricing</a>.</p>

Base URLs:

* <a href="http://ce.us-east-1.amazonaws.com">http://ce.us-east-1.amazonaws.com</a> - The AWS Cost Explorer multi-region endpoint

* <a href="https://ce.us-east-1.amazonaws.com">https://ce.us-east-1.amazonaws.com</a> - The AWS Cost Explorer multi-region endpoint

* <a href="http://ce.cn-north-1.amazonaws.com.cn">http://ce.cn-north-1.amazonaws.com.cn</a> - The AWS Cost Explorer endpoint for China (Beijing) and China (Ningxia)

* <a href="https://ce.cn-north-1.amazonaws.com.cn">https://ce.cn-north-1.amazonaws.com.cn</a> - The AWS Cost Explorer endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/ce/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-cost-explorer-service-default">Default</h1>

## CreateAnomalyMonitor

<a id="opIdCreateAnomalyMonitor"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.CreateAnomalyMonitor' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.CreateAnomalyMonitor' \
  -d '{
    "AnomalyMonitor": {
      "MonitorArn": {},
      "MonitorName": {},
      "CreationDate": {},
      "LastUpdatedDate": {},
      "LastEvaluatedDate": {},
      "MonitorType": {},
      "MonitorDimension": {},
      "MonitorSpecification": {
        "Or": {},
        "And": {},
        "Not": {},
        "Dimensions": {
          "Key": {},
          "Values": {},
          "MatchOptions": {}
        },
        "Tags": {
          "Key": {},
          "Values": {},
          "MatchOptions": {}
        },
        "CostCategories": {
          "Key": "string",
          "Values": {},
          "MatchOptions": {}
        }
      },
      "DimensionalValueCount": {}
    },
    "ResourceTags": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.CreateAnomalyMonitor`

Creates a new cost anomaly detection monitor with the requested type and monitor specification. 

> Body parameter

```json
{
  "AnomalyMonitor": {
    "MonitorArn": {},
    "MonitorName": {},
    "CreationDate": {},
    "LastUpdatedDate": {},
    "LastEvaluatedDate": {},
    "MonitorType": {},
    "MonitorDimension": {},
    "MonitorSpecification": {
      "Or": {},
      "And": {},
      "Not": {},
      "Dimensions": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "Tags": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "CostCategories": {
        "Key": "string",
        "Values": {},
        "MatchOptions": {}
      }
    },
    "DimensionalValueCount": {}
  },
  "ResourceTags": {}
}
```

<h3 id="createanomalymonitor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateAnomalyMonitorRequest](#schemacreateanomalymonitorrequest)|true|none|
|» AnomalyMonitor|body|object|true|none|
|» » MonitorArn|body|object|false|none|
|» » MonitorName|body|object|true|none|
|» » CreationDate|body|object|false|none|
|» » LastUpdatedDate|body|object|false|none|
|» » LastEvaluatedDate|body|object|false|none|
|» » MonitorType|body|object|true|none|
|» » MonitorDimension|body|object|false|none|
|» » MonitorSpecification|body|[Expression](#schemaexpression)|false|<p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p> <p>Not all <code>Expression</code> types are supported in each API. Refer to the documentation for each specific API to see what is supported.</p> <p>There are two patterns:</p> <ul> <li> <p>Simple dimension values.</p> <ul> <li> <p>There are three types of simple dimension values: <code>CostCategories</code>, <code>Tags</code>, and <code>Dimensions</code>.</p> <ul> <li> <p>Specify the <code>CostCategories</code> field to define a filter that acts on Cost Categories.</p> </li> <li> <p>Specify the <code>Tags</code> field to define a filter that acts on Cost Allocation Tags.</p> </li> <li> <p>Specify the <code>Dimensions</code> field to define a filter that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html"> <code>DimensionValues</code> </a>.</p> </li> </ul> </li> <li> <p>For each filter type, you can set the dimension name and values for the filters that you plan to use.</p> <ul> <li> <p>For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> </li> <li> <p>As shown in the previous example, lists of dimension values are combined with <code>OR</code> when applying the filter.</p> </li> </ul> </li> <li> <p>You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.</p> <ul> <li> <p>For example, you can filter for linked account names that start with “a”.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] } }</code> </p> </li> </ul> </li> </ul> </li> <li> <p>Compound <code>Expression</code> types with logical operations.</p> <ul> <li> <p>You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. By doing this, you can filter by more advanced options.</p> </li> <li> <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> </li> </ul> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error: <code> { "And": [ ... ], "Dimensions": { "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> <p>The following is an example of the corresponding error message: <code>"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"</code> </p> </note> </li> </ul> <note> <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to <code>LINKED_ACCOUNT</code>.</p> </note>|
|» » DimensionalValueCount|body|object|false|none|
|» ResourceTags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.CreateAnomalyMonitor|

> Example responses

> 200 Response

```json
{
  "MonitorArn": {}
}
```

> 480 Response

```json
null
```

<h3 id="createanomalymonitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAnomalyMonitorResponse](#schemacreateanomalymonitorresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAnomalySubscription

<a id="opIdCreateAnomalySubscription"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.CreateAnomalySubscription' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.CreateAnomalySubscription' \
  -d '{
    "AnomalySubscription": {
      "SubscriptionArn": {},
      "AccountId": {},
      "MonitorArnList": {},
      "Subscribers": {},
      "Threshold": {},
      "Frequency": {},
      "SubscriptionName": {},
      "ThresholdExpression": {
        "Or": {},
        "And": {},
        "Not": {},
        "Dimensions": {
          "Key": {},
          "Values": {},
          "MatchOptions": {}
        },
        "Tags": {
          "Key": {},
          "Values": {},
          "MatchOptions": {}
        },
        "CostCategories": {
          "Key": "string",
          "Values": {},
          "MatchOptions": {}
        }
      }
    },
    "ResourceTags": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.CreateAnomalySubscription`

Adds an alert subscription to a cost anomaly detection monitor. You can use each subscription to define subscribers with email or SNS notifications. Email subscribers can set an absolute or percentage threshold and a time frequency for receiving notifications. 

> Body parameter

```json
{
  "AnomalySubscription": {
    "SubscriptionArn": {},
    "AccountId": {},
    "MonitorArnList": {},
    "Subscribers": {},
    "Threshold": {},
    "Frequency": {},
    "SubscriptionName": {},
    "ThresholdExpression": {
      "Or": {},
      "And": {},
      "Not": {},
      "Dimensions": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "Tags": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "CostCategories": {
        "Key": "string",
        "Values": {},
        "MatchOptions": {}
      }
    }
  },
  "ResourceTags": {}
}
```

<h3 id="createanomalysubscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateAnomalySubscriptionRequest](#schemacreateanomalysubscriptionrequest)|true|none|
|» AnomalySubscription|body|object|true|none|
|» » SubscriptionArn|body|object|false|none|
|» » AccountId|body|object|false|none|
|» » MonitorArnList|body|object|true|none|
|» » Subscribers|body|object|true|none|
|» » Threshold|body|object|false|none|
|» » Frequency|body|object|true|none|
|» » SubscriptionName|body|object|true|none|
|» » ThresholdExpression|body|object|false|none|
|» » » Or|body|object|false|none|
|» » » And|body|object|false|none|
|» » » Not|body|object|false|none|
|» » » Dimensions|body|object|false|none|
|» » » » Key|body|object|false|none|
|» » » » Values|body|object|false|none|
|» » » » MatchOptions|body|object|false|none|
|» » » Tags|body|object|false|none|
|» » » » Key|body|object|false|none|
|» » » » Values|body|object|false|none|
|» » » » MatchOptions|body|object|false|none|
|» » » CostCategories|body|object|false|none|
|» » » » Key|body|[CostCategoryName](#schemacostcategoryname)|false|The unique name of the Cost Category.|
|» » » » Values|body|object|false|none|
|» » » » MatchOptions|body|object|false|none|
|» ResourceTags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.CreateAnomalySubscription|

> Example responses

> 200 Response

```json
{
  "SubscriptionArn": {}
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

<h3 id="createanomalysubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAnomalySubscriptionResponse](#schemacreateanomalysubscriptionresponse)|
|480|480|UnknownMonitorException|[UnknownMonitorException](#schemaunknownmonitorexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCostCategoryDefinition

<a id="opIdCreateCostCategoryDefinition"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.CreateCostCategoryDefinition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.CreateCostCategoryDefinition' \
  -d '{
    "Name": "string",
    "EffectiveStart": {},
    "RuleVersion": "CostCategoryExpression.v1",
    "Rules": {},
    "DefaultValue": "string",
    "SplitChargeRules": {},
    "ResourceTags": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.CreateCostCategoryDefinition`

Creates a new Cost Category with the requested name and rules.

> Body parameter

```json
{
  "Name": "string",
  "EffectiveStart": {},
  "RuleVersion": "CostCategoryExpression.v1",
  "Rules": {},
  "DefaultValue": "string",
  "SplitChargeRules": {},
  "ResourceTags": {}
}
```

<h3 id="createcostcategorydefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateCostCategoryDefinitionRequest](#schemacreatecostcategorydefinitionrequest)|true|none|
|» Name|body|[CostCategoryName](#schemacostcategoryname)|true|The unique name of the Cost Category.|
|» EffectiveStart|body|object|false|none|
|» RuleVersion|body|[CostCategoryRuleVersion](#schemacostcategoryruleversion)|true|The rule schema version in this particular Cost Category.|
|» Rules|body|object|true|none|
|» DefaultValue|body|[CostCategoryValue](#schemacostcategoryvalue)|false|The default value for the cost category.|
|» SplitChargeRules|body|object|false|none|
|» ResourceTags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.CreateCostCategoryDefinition|
|» RuleVersion|CostCategoryExpression.v1|

> Example responses

> 200 Response

```json
{
  "CostCategoryArn": {},
  "EffectiveStart": {}
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

<h3 id="createcostcategorydefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCostCategoryDefinitionResponse](#schemacreatecostcategorydefinitionresponse)|
|480|480|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAnomalyMonitor

<a id="opIdDeleteAnomalyMonitor"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalyMonitor' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.DeleteAnomalyMonitor' \
  -d '{
    "MonitorArn": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalyMonitor`

Deletes a cost anomaly monitor. 

> Body parameter

```json
{
  "MonitorArn": {}
}
```

<h3 id="deleteanomalymonitor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteAnomalyMonitorRequest](#schemadeleteanomalymonitorrequest)|true|none|
|» MonitorArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.DeleteAnomalyMonitor|

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

<h3 id="deleteanomalymonitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAnomalyMonitorResponse](#schemadeleteanomalymonitorresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|UnknownMonitorException|[UnknownMonitorException](#schemaunknownmonitorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAnomalySubscription

<a id="opIdDeleteAnomalySubscription"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalySubscription' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.DeleteAnomalySubscription' \
  -d '{
    "SubscriptionArn": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalySubscription`

Deletes a cost anomaly subscription. 

> Body parameter

```json
{
  "SubscriptionArn": {}
}
```

<h3 id="deleteanomalysubscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteAnomalySubscriptionRequest](#schemadeleteanomalysubscriptionrequest)|true|none|
|» SubscriptionArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.DeleteAnomalySubscription|

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

<h3 id="deleteanomalysubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAnomalySubscriptionResponse](#schemadeleteanomalysubscriptionresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|UnknownSubscriptionException|[UnknownSubscriptionException](#schemaunknownsubscriptionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCostCategoryDefinition

<a id="opIdDeleteCostCategoryDefinition"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.DeleteCostCategoryDefinition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.DeleteCostCategoryDefinition' \
  -d '{
    "CostCategoryArn": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.DeleteCostCategoryDefinition`

Deletes a Cost Category. Expenses from this month going forward will no longer be categorized with this Cost Category.

> Body parameter

```json
{
  "CostCategoryArn": {}
}
```

<h3 id="deletecostcategorydefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteCostCategoryDefinitionRequest](#schemadeletecostcategorydefinitionrequest)|true|none|
|» CostCategoryArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.DeleteCostCategoryDefinition|

> Example responses

> 200 Response

```json
{
  "CostCategoryArn": {},
  "EffectiveEnd": {}
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

<h3 id="deletecostcategorydefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteCostCategoryDefinitionResponse](#schemadeletecostcategorydefinitionresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCostCategoryDefinition

<a id="opIdDescribeCostCategoryDefinition"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.DescribeCostCategoryDefinition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.DescribeCostCategoryDefinition' \
  -d '{
    "CostCategoryArn": {},
    "EffectiveOn": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.DescribeCostCategoryDefinition`

<p>Returns the name, Amazon Resource Name (ARN), rules, definition, and effective dates of a Cost Category that's defined in the account.</p> <p>You have the option to use <code>EffectiveOn</code> to return a Cost Category that's active on a specific date. If there's no <code>EffectiveOn</code> specified, you see a Cost Category that's effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. </p>

> Body parameter

```json
{
  "CostCategoryArn": {},
  "EffectiveOn": {}
}
```

<h3 id="describecostcategorydefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeCostCategoryDefinitionRequest](#schemadescribecostcategorydefinitionrequest)|true|none|
|» CostCategoryArn|body|object|true|none|
|» EffectiveOn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.DescribeCostCategoryDefinition|

> Example responses

> 200 Response

```json
{
  "CostCategory": {
    "CostCategoryArn": {},
    "EffectiveStart": {},
    "EffectiveEnd": {},
    "Name": "string",
    "RuleVersion": "CostCategoryExpression.v1",
    "Rules": {},
    "SplitChargeRules": {},
    "ProcessingStatus": {},
    "DefaultValue": "string"
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

<h3 id="describecostcategorydefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCostCategoryDefinitionResponse](#schemadescribecostcategorydefinitionresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAnomalies

<a id="opIdGetAnomalies"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.GetAnomalies' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.GetAnomalies' \
  -d '{
    "MonitorArn": {},
    "DateInterval": {
      "StartDate": {},
      "EndDate": {}
    },
    "Feedback": {},
    "TotalImpact": {
      "NumericOperator": {},
      "StartValue": {},
      "EndValue": {}
    },
    "NextPageToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.GetAnomalies`

Retrieves all of the cost anomalies detected on your account during the time period that's specified by the <code>DateInterval</code> object. Anomalies are available for up to 90 days.

> Body parameter

```json
{
  "MonitorArn": {},
  "DateInterval": {
    "StartDate": {},
    "EndDate": {}
  },
  "Feedback": {},
  "TotalImpact": {
    "NumericOperator": {},
    "StartValue": {},
    "EndValue": {}
  },
  "NextPageToken": {},
  "MaxResults": {}
}
```

<h3 id="getanomalies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetAnomaliesRequest](#schemagetanomaliesrequest)|true|none|
|» MonitorArn|body|object|false|none|
|» DateInterval|body|object|true|none|
|» » StartDate|body|object|true|none|
|» » EndDate|body|object|false|none|
|» Feedback|body|object|false|none|
|» TotalImpact|body|object|false|none|
|» » NumericOperator|body|object|true|none|
|» » StartValue|body|object|true|none|
|» » EndValue|body|object|false|none|
|» NextPageToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.GetAnomalies|

> Example responses

> 200 Response

```json
{
  "Anomalies": {},
  "NextPageToken": {}
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

<h3 id="getanomalies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAnomaliesResponse](#schemagetanomaliesresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAnomalyMonitors

<a id="opIdGetAnomalyMonitors"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.GetAnomalyMonitors' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.GetAnomalyMonitors' \
  -d '{
    "MonitorArnList": {},
    "NextPageToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.GetAnomalyMonitors`

Retrieves the cost anomaly monitor definitions for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs). 

> Body parameter

```json
{
  "MonitorArnList": {},
  "NextPageToken": {},
  "MaxResults": {}
}
```

<h3 id="getanomalymonitors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetAnomalyMonitorsRequest](#schemagetanomalymonitorsrequest)|true|none|
|» MonitorArnList|body|object|false|none|
|» NextPageToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.GetAnomalyMonitors|

> Example responses

> 200 Response

```json
{
  "AnomalyMonitors": {},
  "NextPageToken": {}
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

<h3 id="getanomalymonitors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAnomalyMonitorsResponse](#schemagetanomalymonitorsresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|UnknownMonitorException|[UnknownMonitorException](#schemaunknownmonitorexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAnomalySubscriptions

<a id="opIdGetAnomalySubscriptions"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.GetAnomalySubscriptions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.GetAnomalySubscriptions' \
  -d '{
    "SubscriptionArnList": {},
    "MonitorArn": {},
    "NextPageToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.GetAnomalySubscriptions`

Retrieves the cost anomaly subscription objects for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs). 

> Body parameter

```json
{
  "SubscriptionArnList": {},
  "MonitorArn": {},
  "NextPageToken": {},
  "MaxResults": {}
}
```

<h3 id="getanomalysubscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetAnomalySubscriptionsRequest](#schemagetanomalysubscriptionsrequest)|true|none|
|» SubscriptionArnList|body|object|false|none|
|» MonitorArn|body|object|false|none|
|» NextPageToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.GetAnomalySubscriptions|

> Example responses

> 200 Response

```json
{
  "AnomalySubscriptions": {},
  "NextPageToken": {}
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

<h3 id="getanomalysubscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAnomalySubscriptionsResponse](#schemagetanomalysubscriptionsresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|UnknownSubscriptionException|[UnknownSubscriptionException](#schemaunknownsubscriptionexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCostAndUsage

<a id="opIdGetCostAndUsage"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.GetCostAndUsage' \
  -d '{
    "TimePeriod": {
      "Start": {},
      "End": {}
    },
    "Granularity": {},
    "Filter": {
      "Or": {},
      "And": {},
      "Not": {},
      "Dimensions": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "Tags": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "CostCategories": {
        "Key": "string",
        "Values": {},
        "MatchOptions": {}
      }
    },
    "Metrics": {},
    "GroupBy": {},
    "NextPageToken": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsage`

<p>Retrieves cost and usage metrics for your account. You can specify which cost and usage-related metric that you want the request to return. For example, you can specify <code>BlendedCosts</code> or <code>UsageQuantity</code>. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts.</p> <p>For information about filter limitations, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-limits.html">Quotas and restrictions</a> in the <i>Billing and Cost Management User Guide</i>.</p>

> Body parameter

```json
{
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "Granularity": {},
  "Filter": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "Metrics": {},
  "GroupBy": {},
  "NextPageToken": {}
}
```

<h3 id="getcostandusage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetCostAndUsageRequest](#schemagetcostandusagerequest)|true|none|
|» TimePeriod|body|object|true|none|
|» » Start|body|object|true|none|
|» » End|body|object|true|none|
|» Granularity|body|object|true|none|
|» Filter|body|object|false|none|
|» » Or|body|object|false|none|
|» » And|body|object|false|none|
|» » Not|body|object|false|none|
|» » Dimensions|body|object|false|none|
|» » » Key|body|object|false|none|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» » Tags|body|object|false|none|
|» » » Key|body|object|false|none|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» » CostCategories|body|object|false|none|
|» » » Key|body|[CostCategoryName](#schemacostcategoryname)|false|The unique name of the Cost Category.|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» Metrics|body|object|true|none|
|» GroupBy|body|object|false|none|
|» NextPageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.GetCostAndUsage|

> Example responses

> 200 Response

```json
{
  "NextPageToken": {},
  "GroupDefinitions": {},
  "ResultsByTime": {},
  "DimensionValueAttributes": {}
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

<h3 id="getcostandusage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCostAndUsageResponse](#schemagetcostandusageresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|BillExpirationException|[BillExpirationException](#schemabillexpirationexception)|
|482|482|DataUnavailableException|[DataUnavailableException](#schemadataunavailableexception)|
|483|483|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|484|484|RequestChangedException|[RequestChangedException](#schemarequestchangedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCostAndUsageWithResources

<a id="opIdGetCostAndUsageWithResources"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsageWithResources' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.GetCostAndUsageWithResources' \
  -d '{
    "TimePeriod": {
      "Start": {},
      "End": {}
    },
    "Granularity": {},
    "Filter": {
      "Or": {},
      "And": {},
      "Not": {},
      "Dimensions": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "Tags": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "CostCategories": {
        "Key": "string",
        "Values": {},
        "MatchOptions": {}
      }
    },
    "Metrics": {},
    "GroupBy": {},
    "NextPageToken": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsageWithResources`

<p>Retrieves cost and usage metrics with resources for your account. You can specify which cost and usage-related metric, such as <code>BlendedCosts</code> or <code>UsageQuantity</code>, that you want the request to return. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts. This API is currently available for the Amazon Elastic Compute Cloud – Compute service only.</p> <note> <p>This is an opt-in only feature. You can enable this feature from the Cost Explorer Settings page. For information about how to access the Settings page, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-access.html">Controlling Access for Cost Explorer</a> in the <i>Billing and Cost Management User Guide</i>.</p> </note>

> Body parameter

```json
{
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "Granularity": {},
  "Filter": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "Metrics": {},
  "GroupBy": {},
  "NextPageToken": {}
}
```

<h3 id="getcostandusagewithresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetCostAndUsageWithResourcesRequest](#schemagetcostandusagewithresourcesrequest)|true|none|
|» TimePeriod|body|object|true|none|
|» » Start|body|object|true|none|
|» » End|body|object|true|none|
|» Granularity|body|object|true|none|
|» Filter|body|object|true|none|
|» » Or|body|object|false|none|
|» » And|body|object|false|none|
|» » Not|body|object|false|none|
|» » Dimensions|body|object|false|none|
|» » » Key|body|object|false|none|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» » Tags|body|object|false|none|
|» » » Key|body|object|false|none|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» » CostCategories|body|object|false|none|
|» » » Key|body|[CostCategoryName](#schemacostcategoryname)|false|The unique name of the Cost Category.|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» Metrics|body|object|false|none|
|» GroupBy|body|object|false|none|
|» NextPageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.GetCostAndUsageWithResources|

> Example responses

> 200 Response

```json
{
  "NextPageToken": {},
  "GroupDefinitions": {},
  "ResultsByTime": {},
  "DimensionValueAttributes": {}
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

<h3 id="getcostandusagewithresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCostAndUsageWithResourcesResponse](#schemagetcostandusagewithresourcesresponse)|
|480|480|DataUnavailableException|[DataUnavailableException](#schemadataunavailableexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|BillExpirationException|[BillExpirationException](#schemabillexpirationexception)|
|483|483|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|484|484|RequestChangedException|[RequestChangedException](#schemarequestchangedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCostCategories

<a id="opIdGetCostCategories"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.GetCostCategories' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.GetCostCategories' \
  -d '{
    "SearchString": {},
    "TimePeriod": {
      "Start": {},
      "End": {}
    },
    "CostCategoryName": "string",
    "Filter": {
      "Or": {},
      "And": {},
      "Not": {},
      "Dimensions": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "Tags": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "CostCategories": {
        "Key": "string",
        "Values": {},
        "MatchOptions": {}
      }
    },
    "SortBy": {},
    "MaxResults": {},
    "NextPageToken": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.GetCostCategories`

<p>Retrieves an array of Cost Category names and values incurred cost.</p> <note> <p>If some Cost Category names and values are not associated with any cost, they will not be returned by this API.</p> </note>

> Body parameter

```json
{
  "SearchString": {},
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "CostCategoryName": "string",
  "Filter": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "SortBy": {},
  "MaxResults": {},
  "NextPageToken": {}
}
```

<h3 id="getcostcategories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetCostCategoriesRequest](#schemagetcostcategoriesrequest)|true|none|
|» SearchString|body|object|false|none|
|» TimePeriod|body|[DateInterval](#schemadateinterval)|true|The time period of the request. |
|» CostCategoryName|body|[CostCategoryName](#schemacostcategoryname)|false|The unique name of the Cost Category.|
|» Filter|body|[Expression](#schemaexpression)|false|<p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p> <p>Not all <code>Expression</code> types are supported in each API. Refer to the documentation for each specific API to see what is supported.</p> <p>There are two patterns:</p> <ul> <li> <p>Simple dimension values.</p> <ul> <li> <p>There are three types of simple dimension values: <code>CostCategories</code>, <code>Tags</code>, and <code>Dimensions</code>.</p> <ul> <li> <p>Specify the <code>CostCategories</code> field to define a filter that acts on Cost Categories.</p> </li> <li> <p>Specify the <code>Tags</code> field to define a filter that acts on Cost Allocation Tags.</p> </li> <li> <p>Specify the <code>Dimensions</code> field to define a filter that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html"> <code>DimensionValues</code> </a>.</p> </li> </ul> </li> <li> <p>For each filter type, you can set the dimension name and values for the filters that you plan to use.</p> <ul> <li> <p>For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> </li> <li> <p>As shown in the previous example, lists of dimension values are combined with <code>OR</code> when applying the filter.</p> </li> </ul> </li> <li> <p>You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.</p> <ul> <li> <p>For example, you can filter for linked account names that start with “a”.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] } }</code> </p> </li> </ul> </li> </ul> </li> <li> <p>Compound <code>Expression</code> types with logical operations.</p> <ul> <li> <p>You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. By doing this, you can filter by more advanced options.</p> </li> <li> <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> </li> </ul> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error: <code> { "And": [ ... ], "Dimensions": { "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> <p>The following is an example of the corresponding error message: <code>"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"</code> </p> </note> </li> </ul> <note> <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to <code>LINKED_ACCOUNT</code>.</p> </note>|
|» SortBy|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextPageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.GetCostCategories|

> Example responses

> 200 Response

```json
{
  "NextPageToken": {},
  "CostCategoryNames": {},
  "CostCategoryValues": {},
  "ReturnSize": {},
  "TotalSize": {}
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

<h3 id="getcostcategories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCostCategoriesResponse](#schemagetcostcategoriesresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|BillExpirationException|[BillExpirationException](#schemabillexpirationexception)|
|482|482|DataUnavailableException|[DataUnavailableException](#schemadataunavailableexception)|
|483|483|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|484|484|RequestChangedException|[RequestChangedException](#schemarequestchangedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCostForecast

<a id="opIdGetCostForecast"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.GetCostForecast' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.GetCostForecast' \
  -d '{
    "TimePeriod": {
      "Start": {},
      "End": {}
    },
    "Metric": {},
    "Granularity": {},
    "Filter": {
      "Or": {},
      "And": {},
      "Not": {},
      "Dimensions": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "Tags": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "CostCategories": {
        "Key": "string",
        "Values": {},
        "MatchOptions": {}
      }
    },
    "PredictionIntervalLevel": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.GetCostForecast`

Retrieves a forecast for how much Amazon Web Services predicts that you will spend over the forecast time period that you select, based on your past costs. 

> Body parameter

```json
{
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "Metric": {},
  "Granularity": {},
  "Filter": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "PredictionIntervalLevel": {}
}
```

<h3 id="getcostforecast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetCostForecastRequest](#schemagetcostforecastrequest)|true|none|
|» TimePeriod|body|object|true|none|
|» » Start|body|object|true|none|
|» » End|body|object|true|none|
|» Metric|body|object|true|none|
|» Granularity|body|object|true|none|
|» Filter|body|object|false|none|
|» » Or|body|object|false|none|
|» » And|body|object|false|none|
|» » Not|body|object|false|none|
|» » Dimensions|body|object|false|none|
|» » » Key|body|object|false|none|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» » Tags|body|object|false|none|
|» » » Key|body|object|false|none|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» » CostCategories|body|object|false|none|
|» » » Key|body|[CostCategoryName](#schemacostcategoryname)|false|The unique name of the Cost Category.|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» PredictionIntervalLevel|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.GetCostForecast|

> Example responses

> 200 Response

```json
{
  "Total": {
    "Amount": {},
    "Unit": {}
  },
  "ForecastResultsByTime": {}
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

<h3 id="getcostforecast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCostForecastResponse](#schemagetcostforecastresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|DataUnavailableException|[DataUnavailableException](#schemadataunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDimensionValues

<a id="opIdGetDimensionValues"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.GetDimensionValues' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.GetDimensionValues' \
  -d '{
    "SearchString": {},
    "TimePeriod": {
      "Start": {},
      "End": {}
    },
    "Dimension": {},
    "Context": {},
    "Filter": {
      "Or": {},
      "And": {},
      "Not": {},
      "Dimensions": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "Tags": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "CostCategories": {
        "Key": "string",
        "Values": {},
        "MatchOptions": {}
      }
    },
    "SortBy": {},
    "MaxResults": {},
    "NextPageToken": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.GetDimensionValues`

Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string. 

> Body parameter

```json
{
  "SearchString": {},
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "Dimension": {},
  "Context": {},
  "Filter": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "SortBy": {},
  "MaxResults": {},
  "NextPageToken": {}
}
```

<h3 id="getdimensionvalues-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetDimensionValuesRequest](#schemagetdimensionvaluesrequest)|true|none|
|» SearchString|body|object|false|none|
|» TimePeriod|body|object|true|none|
|» » Start|body|object|true|none|
|» » End|body|object|true|none|
|» Dimension|body|object|true|none|
|» Context|body|object|false|none|
|» Filter|body|[Expression](#schemaexpression)|false|<p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p> <p>Not all <code>Expression</code> types are supported in each API. Refer to the documentation for each specific API to see what is supported.</p> <p>There are two patterns:</p> <ul> <li> <p>Simple dimension values.</p> <ul> <li> <p>There are three types of simple dimension values: <code>CostCategories</code>, <code>Tags</code>, and <code>Dimensions</code>.</p> <ul> <li> <p>Specify the <code>CostCategories</code> field to define a filter that acts on Cost Categories.</p> </li> <li> <p>Specify the <code>Tags</code> field to define a filter that acts on Cost Allocation Tags.</p> </li> <li> <p>Specify the <code>Dimensions</code> field to define a filter that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html"> <code>DimensionValues</code> </a>.</p> </li> </ul> </li> <li> <p>For each filter type, you can set the dimension name and values for the filters that you plan to use.</p> <ul> <li> <p>For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> </li> <li> <p>As shown in the previous example, lists of dimension values are combined with <code>OR</code> when applying the filter.</p> </li> </ul> </li> <li> <p>You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.</p> <ul> <li> <p>For example, you can filter for linked account names that start with “a”.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] } }</code> </p> </li> </ul> </li> </ul> </li> <li> <p>Compound <code>Expression</code> types with logical operations.</p> <ul> <li> <p>You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. By doing this, you can filter by more advanced options.</p> </li> <li> <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> </li> </ul> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error: <code> { "And": [ ... ], "Dimensions": { "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> <p>The following is an example of the corresponding error message: <code>"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"</code> </p> </note> </li> </ul> <note> <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to <code>LINKED_ACCOUNT</code>.</p> </note>|
|» SortBy|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextPageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.GetDimensionValues|

> Example responses

> 200 Response

```json
{
  "DimensionValues": {},
  "ReturnSize": {},
  "TotalSize": {},
  "NextPageToken": {}
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

<h3 id="getdimensionvalues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDimensionValuesResponse](#schemagetdimensionvaluesresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|BillExpirationException|[BillExpirationException](#schemabillexpirationexception)|
|482|482|DataUnavailableException|[DataUnavailableException](#schemadataunavailableexception)|
|483|483|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|484|484|RequestChangedException|[RequestChangedException](#schemarequestchangedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetReservationCoverage

<a id="opIdGetReservationCoverage"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.GetReservationCoverage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.GetReservationCoverage' \
  -d '{
    "TimePeriod": {
      "Start": {},
      "End": {}
    },
    "GroupBy": {},
    "Granularity": {},
    "Filter": {
      "Or": {},
      "And": {},
      "Not": {},
      "Dimensions": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "Tags": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "CostCategories": {
        "Key": "string",
        "Values": {},
        "MatchOptions": {}
      }
    },
    "Metrics": {},
    "NextPageToken": {},
    "SortBy": {
      "Key": {},
      "SortOrder": {}
    },
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.GetReservationCoverage`

<p>Retrieves the reservation coverage for your account, which you can use to see how much of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service, or Amazon Redshift usage is covered by a reservation. An organization's management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data about reservation usage by the following dimensions:</p> <ul> <li> <p>AZ</p> </li> <li> <p>CACHE_ENGINE</p> </li> <li> <p>DATABASE_ENGINE</p> </li> <li> <p>DEPLOYMENT_OPTION</p> </li> <li> <p>INSTANCE_TYPE</p> </li> <li> <p>LINKED_ACCOUNT</p> </li> <li> <p>OPERATING_SYSTEM</p> </li> <li> <p>PLATFORM</p> </li> <li> <p>REGION</p> </li> <li> <p>SERVICE</p> </li> <li> <p>TAG</p> </li> <li> <p>TENANCY</p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation. </p>

> Body parameter

```json
{
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "GroupBy": {},
  "Granularity": {},
  "Filter": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "Metrics": {},
  "NextPageToken": {},
  "SortBy": {
    "Key": {},
    "SortOrder": {}
  },
  "MaxResults": {}
}
```

<h3 id="getreservationcoverage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetReservationCoverageRequest](#schemagetreservationcoveragerequest)|true|none|
|» TimePeriod|body|object|true|none|
|» » Start|body|object|true|none|
|» » End|body|object|true|none|
|» GroupBy|body|object|false|none|
|» Granularity|body|object|false|none|
|» Filter|body|object|false|none|
|» » Or|body|object|false|none|
|» » And|body|object|false|none|
|» » Not|body|object|false|none|
|» » Dimensions|body|object|false|none|
|» » » Key|body|object|false|none|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» » Tags|body|object|false|none|
|» » » Key|body|object|false|none|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» » CostCategories|body|object|false|none|
|» » » Key|body|[CostCategoryName](#schemacostcategoryname)|false|The unique name of the Cost Category.|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» Metrics|body|object|false|none|
|» NextPageToken|body|object|false|none|
|» SortBy|body|object|false|none|
|» » Key|body|object|true|none|
|» » SortOrder|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.GetReservationCoverage|

> Example responses

> 200 Response

```json
{
  "CoveragesByTime": {},
  "Total": {
    "CoverageHours": {
      "OnDemandHours": {},
      "ReservedHours": {},
      "TotalRunningHours": {},
      "CoverageHoursPercentage": {}
    },
    "CoverageNormalizedUnits": {
      "OnDemandNormalizedUnits": {},
      "ReservedNormalizedUnits": {},
      "TotalRunningNormalizedUnits": {},
      "CoverageNormalizedUnitsPercentage": {}
    },
    "CoverageCost": {
      "OnDemandCost": {}
    }
  },
  "NextPageToken": {}
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

<h3 id="getreservationcoverage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetReservationCoverageResponse](#schemagetreservationcoverageresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|DataUnavailableException|[DataUnavailableException](#schemadataunavailableexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetReservationPurchaseRecommendation

<a id="opIdGetReservationPurchaseRecommendation"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.GetReservationPurchaseRecommendation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.GetReservationPurchaseRecommendation' \
  -d '{
    "AccountId": {},
    "Service": {},
    "Filter": {
      "Or": {},
      "And": {},
      "Not": {},
      "Dimensions": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "Tags": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "CostCategories": {
        "Key": "string",
        "Values": {},
        "MatchOptions": {}
      }
    },
    "AccountScope": {},
    "LookbackPeriodInDays": {},
    "TermInYears": {},
    "PaymentOption": {},
    "ServiceSpecification": {
      "EC2Specification": {
        "OfferingClass": {}
      }
    },
    "PageSize": {},
    "NextPageToken": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.GetReservationPurchaseRecommendation`

<p>Gets recommendations for reservation purchases. These recommendations might help you to reduce your costs. Reservations provide a discounted hourly rate (up to 75%) compared to On-Demand pricing.</p> <p>Amazon Web Services generates your recommendations by identifying your On-Demand usage during a specific time period and collecting your usage into categories that are eligible for a reservation. After Amazon Web Services has these categories, it simulates every combination of reservations in each category of usage to identify the best number of each type of Reserved Instance (RI) to purchase to maximize your estimated savings. </p> <p>For example, Amazon Web Services automatically aggregates your Amazon EC2 Linux, shared tenancy, and c4 family usage in the US West (Oregon) Region and recommends that you buy size-flexible regional reservations to apply to the c4 family usage. Amazon Web Services recommends the smallest size instance in an instance family. This makes it easier to purchase a size-flexible Reserved Instance (RI). Amazon Web Services also shows the equal number of normalized units. This way, you can purchase any instance size that you want. For this example, your RI recommendation is for <code>c4.large</code> because that is the smallest size instance in the c4 instance family.</p>

> Body parameter

```json
{
  "AccountId": {},
  "Service": {},
  "Filter": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "AccountScope": {},
  "LookbackPeriodInDays": {},
  "TermInYears": {},
  "PaymentOption": {},
  "ServiceSpecification": {
    "EC2Specification": {
      "OfferingClass": {}
    }
  },
  "PageSize": {},
  "NextPageToken": {}
}
```

<h3 id="getreservationpurchaserecommendation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetReservationPurchaseRecommendationRequest](#schemagetreservationpurchaserecommendationrequest)|true|none|
|» AccountId|body|object|false|none|
|» Service|body|object|true|none|
|» Filter|body|[Expression](#schemaexpression)|false|<p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p> <p>Not all <code>Expression</code> types are supported in each API. Refer to the documentation for each specific API to see what is supported.</p> <p>There are two patterns:</p> <ul> <li> <p>Simple dimension values.</p> <ul> <li> <p>There are three types of simple dimension values: <code>CostCategories</code>, <code>Tags</code>, and <code>Dimensions</code>.</p> <ul> <li> <p>Specify the <code>CostCategories</code> field to define a filter that acts on Cost Categories.</p> </li> <li> <p>Specify the <code>Tags</code> field to define a filter that acts on Cost Allocation Tags.</p> </li> <li> <p>Specify the <code>Dimensions</code> field to define a filter that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html"> <code>DimensionValues</code> </a>.</p> </li> </ul> </li> <li> <p>For each filter type, you can set the dimension name and values for the filters that you plan to use.</p> <ul> <li> <p>For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> </li> <li> <p>As shown in the previous example, lists of dimension values are combined with <code>OR</code> when applying the filter.</p> </li> </ul> </li> <li> <p>You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.</p> <ul> <li> <p>For example, you can filter for linked account names that start with “a”.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] } }</code> </p> </li> </ul> </li> </ul> </li> <li> <p>Compound <code>Expression</code> types with logical operations.</p> <ul> <li> <p>You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. By doing this, you can filter by more advanced options.</p> </li> <li> <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> </li> </ul> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error: <code> { "And": [ ... ], "Dimensions": { "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> <p>The following is an example of the corresponding error message: <code>"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"</code> </p> </note> </li> </ul> <note> <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to <code>LINKED_ACCOUNT</code>.</p> </note>|
|» AccountScope|body|object|false|none|
|» LookbackPeriodInDays|body|object|false|none|
|» TermInYears|body|object|false|none|
|» PaymentOption|body|object|false|none|
|» ServiceSpecification|body|object|false|none|
|» » EC2Specification|body|object|false|none|
|» » » OfferingClass|body|object|false|none|
|» PageSize|body|object|false|none|
|» NextPageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.GetReservationPurchaseRecommendation|

> Example responses

> 200 Response

```json
{
  "Metadata": {
    "RecommendationId": {},
    "GenerationTimestamp": {}
  },
  "Recommendations": {},
  "NextPageToken": {}
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

<h3 id="getreservationpurchaserecommendation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetReservationPurchaseRecommendationResponse](#schemagetreservationpurchaserecommendationresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|DataUnavailableException|[DataUnavailableException](#schemadataunavailableexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetReservationUtilization

<a id="opIdGetReservationUtilization"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.GetReservationUtilization' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.GetReservationUtilization' \
  -d '{
    "TimePeriod": {
      "Start": {},
      "End": {}
    },
    "GroupBy": {},
    "Granularity": {},
    "Filter": {
      "Or": {},
      "And": {},
      "Not": {},
      "Dimensions": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "Tags": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "CostCategories": {
        "Key": "string",
        "Values": {},
        "MatchOptions": {}
      }
    },
    "SortBy": {
      "Key": {},
      "SortOrder": {}
    },
    "NextPageToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.GetReservationUtilization`

Retrieves the reservation utilization for your account. Management account in an organization have access to member accounts. You can filter data by dimensions in a time period. You can use <code>GetDimensionValues</code> to determine the possible dimension values. Currently, you can group only by <code>SUBSCRIPTION_ID</code>. 

> Body parameter

```json
{
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "GroupBy": {},
  "Granularity": {},
  "Filter": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "SortBy": {
    "Key": {},
    "SortOrder": {}
  },
  "NextPageToken": {},
  "MaxResults": {}
}
```

<h3 id="getreservationutilization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetReservationUtilizationRequest](#schemagetreservationutilizationrequest)|true|none|
|» TimePeriod|body|object|true|none|
|» » Start|body|object|true|none|
|» » End|body|object|true|none|
|» GroupBy|body|object|false|none|
|» Granularity|body|object|false|none|
|» Filter|body|object|false|none|
|» » Or|body|object|false|none|
|» » And|body|object|false|none|
|» » Not|body|object|false|none|
|» » Dimensions|body|object|false|none|
|» » » Key|body|object|false|none|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» » Tags|body|object|false|none|
|» » » Key|body|object|false|none|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» » CostCategories|body|object|false|none|
|» » » Key|body|[CostCategoryName](#schemacostcategoryname)|false|The unique name of the Cost Category.|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» SortBy|body|object|false|none|
|» » Key|body|object|true|none|
|» » SortOrder|body|object|false|none|
|» NextPageToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.GetReservationUtilization|

> Example responses

> 200 Response

```json
{
  "UtilizationsByTime": {},
  "Total": {
    "UtilizationPercentage": {},
    "UtilizationPercentageInUnits": {},
    "PurchasedHours": {},
    "PurchasedUnits": {},
    "TotalActualHours": {},
    "TotalActualUnits": {},
    "UnusedHours": {},
    "UnusedUnits": {},
    "OnDemandCostOfRIHoursUsed": {},
    "NetRISavings": {},
    "TotalPotentialRISavings": {},
    "AmortizedUpfrontFee": {},
    "AmortizedRecurringFee": {},
    "TotalAmortizedFee": {},
    "RICostForUnusedHours": {},
    "RealizedSavings": {},
    "UnrealizedSavings": {}
  },
  "NextPageToken": {}
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

<h3 id="getreservationutilization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetReservationUtilizationResponse](#schemagetreservationutilizationresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|DataUnavailableException|[DataUnavailableException](#schemadataunavailableexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRightsizingRecommendation

<a id="opIdGetRightsizingRecommendation"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.GetRightsizingRecommendation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.GetRightsizingRecommendation' \
  -d '{
    "Filter": {
      "Or": {},
      "And": {},
      "Not": {},
      "Dimensions": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "Tags": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "CostCategories": {
        "Key": "string",
        "Values": {},
        "MatchOptions": {}
      }
    },
    "Configuration": {
      "RecommendationTarget": {},
      "BenefitsConsidered": {}
    },
    "Service": {},
    "PageSize": {},
    "NextPageToken": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.GetRightsizingRecommendation`

<p>Creates recommendations that help you save cost by identifying idle and underutilized Amazon EC2 instances.</p> <p>Recommendations are generated to either downsize or terminate instances, along with providing savings detail and metrics. For more information about calculation and function, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-rightsizing.html">Optimizing Your Cost with Rightsizing Recommendations</a> in the <i>Billing and Cost Management User Guide</i>.</p>

> Body parameter

```json
{
  "Filter": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "Configuration": {
    "RecommendationTarget": {},
    "BenefitsConsidered": {}
  },
  "Service": {},
  "PageSize": {},
  "NextPageToken": {}
}
```

<h3 id="getrightsizingrecommendation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetRightsizingRecommendationRequest](#schemagetrightsizingrecommendationrequest)|true|none|
|» Filter|body|[Expression](#schemaexpression)|false|<p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p> <p>Not all <code>Expression</code> types are supported in each API. Refer to the documentation for each specific API to see what is supported.</p> <p>There are two patterns:</p> <ul> <li> <p>Simple dimension values.</p> <ul> <li> <p>There are three types of simple dimension values: <code>CostCategories</code>, <code>Tags</code>, and <code>Dimensions</code>.</p> <ul> <li> <p>Specify the <code>CostCategories</code> field to define a filter that acts on Cost Categories.</p> </li> <li> <p>Specify the <code>Tags</code> field to define a filter that acts on Cost Allocation Tags.</p> </li> <li> <p>Specify the <code>Dimensions</code> field to define a filter that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html"> <code>DimensionValues</code> </a>.</p> </li> </ul> </li> <li> <p>For each filter type, you can set the dimension name and values for the filters that you plan to use.</p> <ul> <li> <p>For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> </li> <li> <p>As shown in the previous example, lists of dimension values are combined with <code>OR</code> when applying the filter.</p> </li> </ul> </li> <li> <p>You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.</p> <ul> <li> <p>For example, you can filter for linked account names that start with “a”.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] } }</code> </p> </li> </ul> </li> </ul> </li> <li> <p>Compound <code>Expression</code> types with logical operations.</p> <ul> <li> <p>You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. By doing this, you can filter by more advanced options.</p> </li> <li> <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> </li> </ul> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error: <code> { "And": [ ... ], "Dimensions": { "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> <p>The following is an example of the corresponding error message: <code>"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"</code> </p> </note> </li> </ul> <note> <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to <code>LINKED_ACCOUNT</code>.</p> </note>|
|» Configuration|body|object|false|none|
|» » RecommendationTarget|body|object|true|none|
|» » BenefitsConsidered|body|object|true|none|
|» Service|body|object|true|none|
|» PageSize|body|object|false|none|
|» NextPageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.GetRightsizingRecommendation|

> Example responses

> 200 Response

```json
{
  "Metadata": {
    "RecommendationId": {},
    "GenerationTimestamp": {},
    "LookbackPeriodInDays": {},
    "AdditionalMetadata": {}
  },
  "Summary": {
    "TotalRecommendationCount": {},
    "EstimatedTotalMonthlySavingsAmount": {},
    "SavingsCurrencyCode": {},
    "SavingsPercentage": {}
  },
  "RightsizingRecommendations": {},
  "NextPageToken": {},
  "Configuration": {
    "RecommendationTarget": {},
    "BenefitsConsidered": {}
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

<h3 id="getrightsizingrecommendation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRightsizingRecommendationResponse](#schemagetrightsizingrecommendationresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSavingsPlansCoverage

<a id="opIdGetSavingsPlansCoverage"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansCoverage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.GetSavingsPlansCoverage' \
  -d '{
    "TimePeriod": {
      "Start": {},
      "End": {}
    },
    "GroupBy": {},
    "Granularity": {},
    "Filter": {
      "Or": {},
      "And": {},
      "Not": {},
      "Dimensions": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "Tags": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "CostCategories": {
        "Key": "string",
        "Values": {},
        "MatchOptions": {}
      }
    },
    "Metrics": {},
    "NextToken": {},
    "MaxResults": {},
    "SortBy": {
      "Key": {},
      "SortOrder": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansCoverage`

<p>Retrieves the Savings Plans covered for your account. This enables you to see how much of your cost is covered by a Savings Plan. An organization’s management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data for Savings Plans usage with the following dimensions:</p> <ul> <li> <p> <code>LINKED_ACCOUNT</code> </p> </li> <li> <p> <code>REGION</code> </p> </li> <li> <p> <code>SERVICE</code> </p> </li> <li> <p> <code>INSTANCE_FAMILY</code> </p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation.</p>

> Body parameter

```json
{
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "GroupBy": {},
  "Granularity": {},
  "Filter": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "Metrics": {},
  "NextToken": {},
  "MaxResults": {},
  "SortBy": {
    "Key": {},
    "SortOrder": {}
  }
}
```

<h3 id="getsavingsplanscoverage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetSavingsPlansCoverageRequest](#schemagetsavingsplanscoveragerequest)|true|none|
|» TimePeriod|body|object|true|none|
|» » Start|body|object|true|none|
|» » End|body|object|true|none|
|» GroupBy|body|object|false|none|
|» Granularity|body|object|false|none|
|» Filter|body|object|false|none|
|» » Or|body|object|false|none|
|» » And|body|object|false|none|
|» » Not|body|object|false|none|
|» » Dimensions|body|object|false|none|
|» » » Key|body|object|false|none|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» » Tags|body|object|false|none|
|» » » Key|body|object|false|none|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» » CostCategories|body|object|false|none|
|» » » Key|body|[CostCategoryName](#schemacostcategoryname)|false|The unique name of the Cost Category.|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» Metrics|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» SortBy|body|object|false|none|
|» » Key|body|object|true|none|
|» » SortOrder|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.GetSavingsPlansCoverage|

> Example responses

> 200 Response

```json
{
  "SavingsPlansCoverages": {},
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

<h3 id="getsavingsplanscoverage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSavingsPlansCoverageResponse](#schemagetsavingsplanscoverageresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|DataUnavailableException|[DataUnavailableException](#schemadataunavailableexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSavingsPlansPurchaseRecommendation

<a id="opIdGetSavingsPlansPurchaseRecommendation"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation' \
  -d '{
    "SavingsPlansType": {},
    "TermInYears": {},
    "PaymentOption": {},
    "AccountScope": {},
    "NextPageToken": {},
    "PageSize": {},
    "LookbackPeriodInDays": {},
    "Filter": {
      "Or": {},
      "And": {},
      "Not": {},
      "Dimensions": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "Tags": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "CostCategories": {
        "Key": "string",
        "Values": {},
        "MatchOptions": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation`

Retrieves the Savings Plans recommendations for your account. First use <code>StartSavingsPlansPurchaseRecommendationGeneration</code> to generate a new set of recommendations, and then use <code>GetSavingsPlansPurchaseRecommendation</code> to retrieve them.

> Body parameter

```json
{
  "SavingsPlansType": {},
  "TermInYears": {},
  "PaymentOption": {},
  "AccountScope": {},
  "NextPageToken": {},
  "PageSize": {},
  "LookbackPeriodInDays": {},
  "Filter": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  }
}
```

<h3 id="getsavingsplanspurchaserecommendation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetSavingsPlansPurchaseRecommendationRequest](#schemagetsavingsplanspurchaserecommendationrequest)|true|none|
|» SavingsPlansType|body|object|true|none|
|» TermInYears|body|object|true|none|
|» PaymentOption|body|object|true|none|
|» AccountScope|body|object|false|none|
|» NextPageToken|body|object|false|none|
|» PageSize|body|object|false|none|
|» LookbackPeriodInDays|body|object|true|none|
|» Filter|body|object|false|none|
|» » Or|body|object|false|none|
|» » And|body|object|false|none|
|» » Not|body|object|false|none|
|» » Dimensions|body|object|false|none|
|» » » Key|body|object|false|none|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» » Tags|body|object|false|none|
|» » » Key|body|object|false|none|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» » CostCategories|body|object|false|none|
|» » » Key|body|[CostCategoryName](#schemacostcategoryname)|false|The unique name of the Cost Category.|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation|

> Example responses

> 200 Response

```json
{
  "Metadata": {
    "RecommendationId": {},
    "GenerationTimestamp": {},
    "AdditionalMetadata": {}
  },
  "SavingsPlansPurchaseRecommendation": {
    "AccountScope": {},
    "SavingsPlansType": {},
    "TermInYears": {},
    "PaymentOption": {},
    "LookbackPeriodInDays": {},
    "SavingsPlansPurchaseRecommendationDetails": {},
    "SavingsPlansPurchaseRecommendationSummary": {
      "EstimatedROI": {},
      "CurrencyCode": {},
      "EstimatedTotalCost": {},
      "CurrentOnDemandSpend": {},
      "EstimatedSavingsAmount": {},
      "TotalRecommendationCount": {},
      "DailyCommitmentToPurchase": {},
      "HourlyCommitmentToPurchase": {},
      "EstimatedSavingsPercentage": {},
      "EstimatedMonthlySavingsAmount": {},
      "EstimatedOnDemandCostWithCurrentCommitment": {}
    }
  },
  "NextPageToken": {}
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

<h3 id="getsavingsplanspurchaserecommendation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSavingsPlansPurchaseRecommendationResponse](#schemagetsavingsplanspurchaserecommendationresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSavingsPlansUtilization

<a id="opIdGetSavingsPlansUtilization"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilization' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.GetSavingsPlansUtilization' \
  -d '{
    "TimePeriod": {
      "Start": {},
      "End": {}
    },
    "Granularity": {},
    "Filter": {
      "Or": {},
      "And": {},
      "Not": {},
      "Dimensions": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "Tags": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "CostCategories": {
        "Key": "string",
        "Values": {},
        "MatchOptions": {}
      }
    },
    "SortBy": {
      "Key": {},
      "SortOrder": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilization`

<p>Retrieves the Savings Plans utilization for your account across date ranges with daily or monthly granularity. Management account in an organization have access to member accounts. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p>You can't group by any dimension values for <code>GetSavingsPlansUtilization</code>.</p> </note>

> Body parameter

```json
{
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "Granularity": {},
  "Filter": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "SortBy": {
    "Key": {},
    "SortOrder": {}
  }
}
```

<h3 id="getsavingsplansutilization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetSavingsPlansUtilizationRequest](#schemagetsavingsplansutilizationrequest)|true|none|
|» TimePeriod|body|object|true|none|
|» » Start|body|object|true|none|
|» » End|body|object|true|none|
|» Granularity|body|object|false|none|
|» Filter|body|object|false|none|
|» » Or|body|object|false|none|
|» » And|body|object|false|none|
|» » Not|body|object|false|none|
|» » Dimensions|body|object|false|none|
|» » » Key|body|object|false|none|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» » Tags|body|object|false|none|
|» » » Key|body|object|false|none|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» » CostCategories|body|object|false|none|
|» » » Key|body|[CostCategoryName](#schemacostcategoryname)|false|The unique name of the Cost Category.|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» SortBy|body|object|false|none|
|» » Key|body|object|true|none|
|» » SortOrder|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.GetSavingsPlansUtilization|

> Example responses

> 200 Response

```json
{
  "SavingsPlansUtilizationsByTime": {},
  "Total": {
    "Utilization": {
      "TotalCommitment": {},
      "UsedCommitment": {},
      "UnusedCommitment": {},
      "UtilizationPercentage": {}
    },
    "Savings": {
      "NetSavings": {},
      "OnDemandCostEquivalent": {}
    },
    "AmortizedCommitment": {
      "AmortizedRecurringCommitment": {},
      "AmortizedUpfrontCommitment": {},
      "TotalAmortizedCommitment": {}
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

<h3 id="getsavingsplansutilization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSavingsPlansUtilizationResponse](#schemagetsavingsplansutilizationresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|DataUnavailableException|[DataUnavailableException](#schemadataunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSavingsPlansUtilizationDetails

<a id="opIdGetSavingsPlansUtilizationDetails"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilizationDetails' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.GetSavingsPlansUtilizationDetails' \
  -d '{
    "TimePeriod": {
      "Start": {},
      "End": {}
    },
    "Filter": {
      "Or": {},
      "And": {},
      "Not": {},
      "Dimensions": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "Tags": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "CostCategories": {
        "Key": "string",
        "Values": {},
        "MatchOptions": {}
      }
    },
    "DataType": {},
    "NextToken": {},
    "MaxResults": {},
    "SortBy": {
      "Key": {},
      "SortOrder": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilizationDetails`

<p>Retrieves attribute data along with aggregate utilization and savings data for a given time period. This doesn't support granular or grouped data (daily/monthly) in response. You can't retrieve data by dates in a single response similar to <code>GetSavingsPlanUtilization</code>, but you have the option to make multiple calls to <code>GetSavingsPlanUtilizationDetails</code> by providing individual dates. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p> <code>GetSavingsPlanUtilizationDetails</code> internally groups data by <code>SavingsPlansArn</code>.</p> </note>

> Body parameter

```json
{
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "Filter": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "DataType": {},
  "NextToken": {},
  "MaxResults": {},
  "SortBy": {
    "Key": {},
    "SortOrder": {}
  }
}
```

<h3 id="getsavingsplansutilizationdetails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetSavingsPlansUtilizationDetailsRequest](#schemagetsavingsplansutilizationdetailsrequest)|true|none|
|» TimePeriod|body|object|true|none|
|» » Start|body|object|true|none|
|» » End|body|object|true|none|
|» Filter|body|object|false|none|
|» » Or|body|object|false|none|
|» » And|body|object|false|none|
|» » Not|body|object|false|none|
|» » Dimensions|body|object|false|none|
|» » » Key|body|object|false|none|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» » Tags|body|object|false|none|
|» » » Key|body|object|false|none|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» » CostCategories|body|object|false|none|
|» » » Key|body|[CostCategoryName](#schemacostcategoryname)|false|The unique name of the Cost Category.|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» DataType|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» SortBy|body|object|false|none|
|» » Key|body|object|true|none|
|» » SortOrder|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.GetSavingsPlansUtilizationDetails|

> Example responses

> 200 Response

```json
{
  "SavingsPlansUtilizationDetails": {},
  "Total": {
    "Utilization": {
      "TotalCommitment": {},
      "UsedCommitment": {},
      "UnusedCommitment": {},
      "UtilizationPercentage": {}
    },
    "Savings": {
      "NetSavings": {},
      "OnDemandCostEquivalent": {}
    },
    "AmortizedCommitment": {
      "AmortizedRecurringCommitment": {},
      "AmortizedUpfrontCommitment": {},
      "TotalAmortizedCommitment": {}
    }
  },
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
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

<h3 id="getsavingsplansutilizationdetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSavingsPlansUtilizationDetailsResponse](#schemagetsavingsplansutilizationdetailsresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|DataUnavailableException|[DataUnavailableException](#schemadataunavailableexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTags

<a id="opIdGetTags"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.GetTags' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.GetTags' \
  -d '{
    "SearchString": {},
    "TimePeriod": {
      "Start": {},
      "End": {}
    },
    "TagKey": {},
    "Filter": {
      "Or": {},
      "And": {},
      "Not": {},
      "Dimensions": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "Tags": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "CostCategories": {
        "Key": "string",
        "Values": {},
        "MatchOptions": {}
      }
    },
    "SortBy": {},
    "MaxResults": {},
    "NextPageToken": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.GetTags`

Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string. 

> Body parameter

```json
{
  "SearchString": {},
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "TagKey": {},
  "Filter": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "SortBy": {},
  "MaxResults": {},
  "NextPageToken": {}
}
```

<h3 id="gettags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetTagsRequest](#schemagettagsrequest)|true|none|
|» SearchString|body|object|false|none|
|» TimePeriod|body|object|true|none|
|» » Start|body|object|true|none|
|» » End|body|object|true|none|
|» TagKey|body|object|false|none|
|» Filter|body|[Expression](#schemaexpression)|false|<p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p> <p>Not all <code>Expression</code> types are supported in each API. Refer to the documentation for each specific API to see what is supported.</p> <p>There are two patterns:</p> <ul> <li> <p>Simple dimension values.</p> <ul> <li> <p>There are three types of simple dimension values: <code>CostCategories</code>, <code>Tags</code>, and <code>Dimensions</code>.</p> <ul> <li> <p>Specify the <code>CostCategories</code> field to define a filter that acts on Cost Categories.</p> </li> <li> <p>Specify the <code>Tags</code> field to define a filter that acts on Cost Allocation Tags.</p> </li> <li> <p>Specify the <code>Dimensions</code> field to define a filter that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html"> <code>DimensionValues</code> </a>.</p> </li> </ul> </li> <li> <p>For each filter type, you can set the dimension name and values for the filters that you plan to use.</p> <ul> <li> <p>For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> </li> <li> <p>As shown in the previous example, lists of dimension values are combined with <code>OR</code> when applying the filter.</p> </li> </ul> </li> <li> <p>You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.</p> <ul> <li> <p>For example, you can filter for linked account names that start with “a”.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] } }</code> </p> </li> </ul> </li> </ul> </li> <li> <p>Compound <code>Expression</code> types with logical operations.</p> <ul> <li> <p>You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. By doing this, you can filter by more advanced options.</p> </li> <li> <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> </li> </ul> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error: <code> { "And": [ ... ], "Dimensions": { "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> <p>The following is an example of the corresponding error message: <code>"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"</code> </p> </note> </li> </ul> <note> <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to <code>LINKED_ACCOUNT</code>.</p> </note>|
|» SortBy|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextPageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.GetTags|

> Example responses

> 200 Response

```json
{
  "NextPageToken": {},
  "Tags": {},
  "ReturnSize": {},
  "TotalSize": {}
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

<h3 id="gettags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTagsResponse](#schemagettagsresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|BillExpirationException|[BillExpirationException](#schemabillexpirationexception)|
|482|482|DataUnavailableException|[DataUnavailableException](#schemadataunavailableexception)|
|483|483|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|484|484|RequestChangedException|[RequestChangedException](#schemarequestchangedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetUsageForecast

<a id="opIdGetUsageForecast"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.GetUsageForecast' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.GetUsageForecast' \
  -d '{
    "TimePeriod": {
      "Start": {},
      "End": {}
    },
    "Metric": {},
    "Granularity": {},
    "Filter": {
      "Or": {},
      "And": {},
      "Not": {},
      "Dimensions": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "Tags": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "CostCategories": {
        "Key": "string",
        "Values": {},
        "MatchOptions": {}
      }
    },
    "PredictionIntervalLevel": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.GetUsageForecast`

Retrieves a forecast for how much Amazon Web Services predicts that you will use over the forecast time period that you select, based on your past usage. 

> Body parameter

```json
{
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "Metric": {},
  "Granularity": {},
  "Filter": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "PredictionIntervalLevel": {}
}
```

<h3 id="getusageforecast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetUsageForecastRequest](#schemagetusageforecastrequest)|true|none|
|» TimePeriod|body|object|true|none|
|» » Start|body|object|true|none|
|» » End|body|object|true|none|
|» Metric|body|object|true|none|
|» Granularity|body|object|true|none|
|» Filter|body|object|false|none|
|» » Or|body|object|false|none|
|» » And|body|object|false|none|
|» » Not|body|object|false|none|
|» » Dimensions|body|object|false|none|
|» » » Key|body|object|false|none|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» » Tags|body|object|false|none|
|» » » Key|body|object|false|none|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» » CostCategories|body|object|false|none|
|» » » Key|body|[CostCategoryName](#schemacostcategoryname)|false|The unique name of the Cost Category.|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» PredictionIntervalLevel|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.GetUsageForecast|

> Example responses

> 200 Response

```json
{
  "Total": {
    "Amount": {},
    "Unit": {}
  },
  "ForecastResultsByTime": {}
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

<h3 id="getusageforecast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetUsageForecastResponse](#schemagetusageforecastresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|DataUnavailableException|[DataUnavailableException](#schemadataunavailableexception)|
|482|482|UnresolvableUsageUnitException|[UnresolvableUsageUnitException](#schemaunresolvableusageunitexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCostAllocationTags

<a id="opIdListCostAllocationTags"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.ListCostAllocationTags' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.ListCostAllocationTags' \
  -d '{
    "Status": {},
    "TagKeys": {},
    "Type": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.ListCostAllocationTags`

Get a list of cost allocation tags. All inputs in the API are optional and serve as filters. By default, all cost allocation tags are returned. 

> Body parameter

```json
{
  "Status": {},
  "TagKeys": {},
  "Type": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listcostallocationtags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListCostAllocationTagsRequest](#schemalistcostallocationtagsrequest)|true|none|
|» Status|body|object|false|none|
|» TagKeys|body|object|false|none|
|» Type|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.ListCostAllocationTags|

> Example responses

> 200 Response

```json
{
  "CostAllocationTags": {},
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

<h3 id="listcostallocationtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCostAllocationTagsResponse](#schemalistcostallocationtagsresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCostCategoryDefinitions

<a id="opIdListCostCategoryDefinitions"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.ListCostCategoryDefinitions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.ListCostCategoryDefinitions' \
  -d '{
    "EffectiveOn": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.ListCostCategoryDefinitions`

Returns the name, Amazon Resource Name (ARN), <code>NumberOfRules</code> and effective dates of all Cost Categories defined in the account. You have the option to use <code>EffectiveOn</code> to return a list of Cost Categories that were active on a specific date. If there is no <code>EffectiveOn</code> specified, you’ll see Cost Categories that are effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. <code>ListCostCategoryDefinitions</code> supports pagination. The request can have a <code>MaxResults</code> range up to 100.

> Body parameter

```json
{
  "EffectiveOn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listcostcategorydefinitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListCostCategoryDefinitionsRequest](#schemalistcostcategorydefinitionsrequest)|true|none|
|» EffectiveOn|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.ListCostCategoryDefinitions|

> Example responses

> 200 Response

```json
{
  "CostCategoryReferences": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listcostcategorydefinitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCostCategoryDefinitionsResponse](#schemalistcostcategorydefinitionsresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSavingsPlansPurchaseRecommendationGeneration

<a id="opIdListSavingsPlansPurchaseRecommendationGeneration"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration' \
  -d '{
    "GenerationStatus": {},
    "RecommendationIds": {},
    "PageSize": {},
    "NextPageToken": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration`

Retrieves a list of your historical recommendation generations within the past 30 days.

> Body parameter

```json
{
  "GenerationStatus": {},
  "RecommendationIds": {},
  "PageSize": {},
  "NextPageToken": {}
}
```

<h3 id="listsavingsplanspurchaserecommendationgeneration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListSavingsPlansPurchaseRecommendationGenerationRequest](#schemalistsavingsplanspurchaserecommendationgenerationrequest)|true|none|
|» GenerationStatus|body|object|false|none|
|» RecommendationIds|body|object|false|none|
|» PageSize|body|object|false|none|
|» NextPageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration|

> Example responses

> 200 Response

```json
{
  "GenerationSummaryList": {},
  "NextPageToken": {}
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

<h3 id="listsavingsplanspurchaserecommendationgeneration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSavingsPlansPurchaseRecommendationGenerationResponse](#schemalistsavingsplanspurchaserecommendationgenerationresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.ListTagsForResource' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.ListTagsForResource`

Returns a list of resource tags associated with the resource specified by the Amazon Resource Name (ARN). 

> Body parameter

```json
{
  "ResourceArn": {}
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTagsForResourceRequest](#schemalisttagsforresourcerequest)|true|none|
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "ResourceTags": {}
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ProvideAnomalyFeedback

<a id="opIdProvideAnomalyFeedback"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.ProvideAnomalyFeedback' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.ProvideAnomalyFeedback' \
  -d '{
    "AnomalyId": {},
    "Feedback": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.ProvideAnomalyFeedback`

Modifies the feedback property of a given cost anomaly. 

> Body parameter

```json
{
  "AnomalyId": {},
  "Feedback": {}
}
```

<h3 id="provideanomalyfeedback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ProvideAnomalyFeedbackRequest](#schemaprovideanomalyfeedbackrequest)|true|none|
|» AnomalyId|body|object|true|none|
|» Feedback|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.ProvideAnomalyFeedback|

> Example responses

> 200 Response

```json
{
  "AnomalyId": {}
}
```

> 480 Response

```json
null
```

<h3 id="provideanomalyfeedback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ProvideAnomalyFeedbackResponse](#schemaprovideanomalyfeedbackresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartSavingsPlansPurchaseRecommendationGeneration

<a id="opIdStartSavingsPlansPurchaseRecommendationGeneration"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration' \
  -d '{}'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration`

<p>Requests a Savings Plans recommendation generation. This enables you to calculate a fresh set of Savings Plans recommendations that takes your latest usage data and current Savings Plans inventory into account. You can refresh Savings Plans recommendations up to three times daily for a consolidated billing family.</p> <note> <p> <code>StartSavingsPlansPurchaseRecommendationGeneration</code> has no request syntax because no input parameters are needed to support this operation.</p> </note>

> Body parameter

```json
{}
```

<h3 id="startsavingsplanspurchaserecommendationgeneration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StartSavingsPlansPurchaseRecommendationGenerationRequest](#schemastartsavingsplanspurchaserecommendationgenerationrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration|

> Example responses

> 200 Response

```json
{
  "RecommendationId": {},
  "GenerationStartedTime": {},
  "EstimatedCompletionTime": {}
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

<h3 id="startsavingsplanspurchaserecommendationgeneration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartSavingsPlansPurchaseRecommendationGenerationResponse](#schemastartsavingsplanspurchaserecommendationgenerationresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|482|482|GenerationExistsException|[GenerationExistsException](#schemagenerationexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.TagResource' \
  -d '{
    "ResourceArn": {},
    "ResourceTags": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.TagResource`

<p>An API operation for adding one or more tags (key-value pairs) to a resource.</p> <p>You can use the <code>TagResource</code> operation with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value you specify replaces the previous value for that tag.</p> <p>Although the maximum number of array members is 200, user-tag maximum is 50. The remaining are reserved for Amazon Web Services use.</p>

> Body parameter

```json
{
  "ResourceArn": {},
  "ResourceTags": {}
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[TagResourceRequest](#schematagresourcerequest)|true|none|
|» ResourceArn|body|object|true|none|
|» ResourceTags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.TagResource|

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
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.UntagResource' \
  -d '{
    "ResourceArn": {},
    "ResourceTagKeys": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.UntagResource`

Removes one or more tags from a resource. Specify only tag keys in your request. Don't specify the value. 

> Body parameter

```json
{
  "ResourceArn": {},
  "ResourceTagKeys": {}
}
```

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UntagResourceRequest](#schemauntagresourcerequest)|true|none|
|» ResourceArn|body|object|true|none|
|» ResourceTagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAnomalyMonitor

<a id="opIdUpdateAnomalyMonitor"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalyMonitor' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.UpdateAnomalyMonitor' \
  -d '{
    "MonitorArn": {},
    "MonitorName": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalyMonitor`

Updates an existing cost anomaly monitor. The changes made are applied going forward, and doesn't change anomalies detected in the past. 

> Body parameter

```json
{
  "MonitorArn": {},
  "MonitorName": {}
}
```

<h3 id="updateanomalymonitor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateAnomalyMonitorRequest](#schemaupdateanomalymonitorrequest)|true|none|
|» MonitorArn|body|object|true|none|
|» MonitorName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.UpdateAnomalyMonitor|

> Example responses

> 200 Response

```json
{
  "MonitorArn": {}
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

<h3 id="updateanomalymonitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAnomalyMonitorResponse](#schemaupdateanomalymonitorresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|UnknownMonitorException|[UnknownMonitorException](#schemaunknownmonitorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAnomalySubscription

<a id="opIdUpdateAnomalySubscription"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalySubscription' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.UpdateAnomalySubscription' \
  -d '{
    "SubscriptionArn": {},
    "Threshold": {},
    "Frequency": {},
    "MonitorArnList": {},
    "Subscribers": {},
    "SubscriptionName": {},
    "ThresholdExpression": {
      "Or": {},
      "And": {},
      "Not": {},
      "Dimensions": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "Tags": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "CostCategories": {
        "Key": "string",
        "Values": {},
        "MatchOptions": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalySubscription`

Updates an existing cost anomaly monitor subscription. 

> Body parameter

```json
{
  "SubscriptionArn": {},
  "Threshold": {},
  "Frequency": {},
  "MonitorArnList": {},
  "Subscribers": {},
  "SubscriptionName": {},
  "ThresholdExpression": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  }
}
```

<h3 id="updateanomalysubscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateAnomalySubscriptionRequest](#schemaupdateanomalysubscriptionrequest)|true|none|
|» SubscriptionArn|body|object|true|none|
|» Threshold|body|object|false|none|
|» Frequency|body|object|false|none|
|» MonitorArnList|body|object|false|none|
|» Subscribers|body|object|false|none|
|» SubscriptionName|body|object|false|none|
|» ThresholdExpression|body|object|false|none|
|» » Or|body|object|false|none|
|» » And|body|object|false|none|
|» » Not|body|object|false|none|
|» » Dimensions|body|object|false|none|
|» » » Key|body|object|false|none|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» » Tags|body|object|false|none|
|» » » Key|body|object|false|none|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|
|» » CostCategories|body|object|false|none|
|» » » Key|body|[CostCategoryName](#schemacostcategoryname)|false|The unique name of the Cost Category.|
|» » » Values|body|object|false|none|
|» » » MatchOptions|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.UpdateAnomalySubscription|

> Example responses

> 200 Response

```json
{
  "SubscriptionArn": {}
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

<h3 id="updateanomalysubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAnomalySubscriptionResponse](#schemaupdateanomalysubscriptionresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|UnknownMonitorException|[UnknownMonitorException](#schemaunknownmonitorexception)|
|482|482|UnknownSubscriptionException|[UnknownSubscriptionException](#schemaunknownsubscriptionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateCostAllocationTagsStatus

<a id="opIdUpdateCostAllocationTagsStatus"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.UpdateCostAllocationTagsStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.UpdateCostAllocationTagsStatus' \
  -d '{
    "CostAllocationTagsStatus": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.UpdateCostAllocationTagsStatus`

Updates status for cost allocation tags in bulk, with maximum batch size of 20. If the tag status that's updated is the same as the existing tag status, the request doesn't fail. Instead, it doesn't have any effect on the tag status (for example, activating the active tag). 

> Body parameter

```json
{
  "CostAllocationTagsStatus": {}
}
```

<h3 id="updatecostallocationtagsstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateCostAllocationTagsStatusRequest](#schemaupdatecostallocationtagsstatusrequest)|true|none|
|» CostAllocationTagsStatus|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.UpdateCostAllocationTagsStatus|

> Example responses

> 200 Response

```json
{
  "Errors": {}
}
```

> 480 Response

```json
null
```

<h3 id="updatecostallocationtagsstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateCostAllocationTagsStatusResponse](#schemaupdatecostallocationtagsstatusresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateCostCategoryDefinition

<a id="opIdUpdateCostCategoryDefinition"></a>

> Code samples

```bash
curl 'https://ce.us-east-1.amazonaws.com/#X-Amz-Target=AWSInsightsIndexService.UpdateCostCategoryDefinition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSInsightsIndexService.UpdateCostCategoryDefinition' \
  -d '{
    "CostCategoryArn": {},
    "EffectiveStart": {},
    "RuleVersion": "CostCategoryExpression.v1",
    "Rules": {},
    "DefaultValue": "string",
    "SplitChargeRules": {}
  }'
```

`POST /#X-Amz-Target=AWSInsightsIndexService.UpdateCostCategoryDefinition`

Updates an existing Cost Category. Changes made to the Cost Category rules will be used to categorize the current month’s expenses and future expenses. This won’t change categorization for the previous months.

> Body parameter

```json
{
  "CostCategoryArn": {},
  "EffectiveStart": {},
  "RuleVersion": "CostCategoryExpression.v1",
  "Rules": {},
  "DefaultValue": "string",
  "SplitChargeRules": {}
}
```

<h3 id="updatecostcategorydefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateCostCategoryDefinitionRequest](#schemaupdatecostcategorydefinitionrequest)|true|none|
|» CostCategoryArn|body|object|true|none|
|» EffectiveStart|body|object|false|none|
|» RuleVersion|body|[CostCategoryRuleVersion](#schemacostcategoryruleversion)|true|The rule schema version in this particular Cost Category.|
|» Rules|body|object|true|none|
|» DefaultValue|body|[CostCategoryValue](#schemacostcategoryvalue)|false|The default value for the cost category.|
|» SplitChargeRules|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSInsightsIndexService.UpdateCostCategoryDefinition|
|» RuleVersion|CostCategoryExpression.v1|

> Example responses

> 200 Response

```json
{
  "CostCategoryArn": {},
  "EffectiveStart": {}
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

<h3 id="updatecostcategorydefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateCostCategoryDefinitionResponse](#schemaupdatecostcategorydefinitionresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateAnomalyMonitorResponse">CreateAnomalyMonitorResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateanomalymonitorresponse"></a>
<a id="schema_CreateAnomalyMonitorResponse"></a>
<a id="tocScreateanomalymonitorresponse"></a>
<a id="tocscreateanomalymonitorresponse"></a>

```json
{
  "MonitorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MonitorArn|object|true|none|none|

<h2 id="tocS_CreateAnomalyMonitorRequest">CreateAnomalyMonitorRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateanomalymonitorrequest"></a>
<a id="schema_CreateAnomalyMonitorRequest"></a>
<a id="tocScreateanomalymonitorrequest"></a>
<a id="tocscreateanomalymonitorrequest"></a>

```json
{
  "AnomalyMonitor": {
    "MonitorArn": {},
    "MonitorName": {},
    "CreationDate": {},
    "LastUpdatedDate": {},
    "LastEvaluatedDate": {},
    "MonitorType": {},
    "MonitorDimension": {},
    "MonitorSpecification": {
      "Or": {},
      "And": {},
      "Not": {},
      "Dimensions": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "Tags": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "CostCategories": {
        "Key": "string",
        "Values": {},
        "MatchOptions": {}
      }
    },
    "DimensionalValueCount": {}
  },
  "ResourceTags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyMonitor|object|true|none|none|
|ResourceTags|object|false|none|none|

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateAnomalySubscriptionResponse">CreateAnomalySubscriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateanomalysubscriptionresponse"></a>
<a id="schema_CreateAnomalySubscriptionResponse"></a>
<a id="tocScreateanomalysubscriptionresponse"></a>
<a id="tocscreateanomalysubscriptionresponse"></a>

```json
{
  "SubscriptionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubscriptionArn|object|true|none|none|

<h2 id="tocS_CreateAnomalySubscriptionRequest">CreateAnomalySubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateanomalysubscriptionrequest"></a>
<a id="schema_CreateAnomalySubscriptionRequest"></a>
<a id="tocScreateanomalysubscriptionrequest"></a>
<a id="tocscreateanomalysubscriptionrequest"></a>

```json
{
  "AnomalySubscription": {
    "SubscriptionArn": {},
    "AccountId": {},
    "MonitorArnList": {},
    "Subscribers": {},
    "Threshold": {},
    "Frequency": {},
    "SubscriptionName": {},
    "ThresholdExpression": {
      "Or": {},
      "And": {},
      "Not": {},
      "Dimensions": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "Tags": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "CostCategories": {
        "Key": "string",
        "Values": {},
        "MatchOptions": {}
      }
    }
  },
  "ResourceTags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalySubscription|object|true|none|none|
|ResourceTags|object|false|none|none|

<h2 id="tocS_UnknownMonitorException">UnknownMonitorException</h2>
<!-- backwards compatibility -->
<a id="schemaunknownmonitorexception"></a>
<a id="schema_UnknownMonitorException"></a>
<a id="tocSunknownmonitorexception"></a>
<a id="tocsunknownmonitorexception"></a>

```json
null
```

<h2 id="tocS_CreateCostCategoryDefinitionResponse">CreateCostCategoryDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecostcategorydefinitionresponse"></a>
<a id="schema_CreateCostCategoryDefinitionResponse"></a>
<a id="tocScreatecostcategorydefinitionresponse"></a>
<a id="tocscreatecostcategorydefinitionresponse"></a>

```json
{
  "CostCategoryArn": {},
  "EffectiveStart": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CostCategoryArn|object|false|none|none|
|EffectiveStart|object|false|none|none|

<h2 id="tocS_CreateCostCategoryDefinitionRequest">CreateCostCategoryDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecostcategorydefinitionrequest"></a>
<a id="schema_CreateCostCategoryDefinitionRequest"></a>
<a id="tocScreatecostcategorydefinitionrequest"></a>
<a id="tocscreatecostcategorydefinitionrequest"></a>

```json
{
  "Name": "string",
  "EffectiveStart": {},
  "RuleVersion": "CostCategoryExpression.v1",
  "Rules": {},
  "DefaultValue": "string",
  "SplitChargeRules": {},
  "ResourceTags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|[CostCategoryName](#schemacostcategoryname)|true|none|The unique name of the Cost Category.|
|EffectiveStart|object|false|none|none|
|RuleVersion|[CostCategoryRuleVersion](#schemacostcategoryruleversion)|true|none|The rule schema version in this particular Cost Category.|
|Rules|object|true|none|none|
|DefaultValue|[CostCategoryValue](#schemacostcategoryvalue)|false|none|The default value for the cost category.|
|SplitChargeRules|object|false|none|none|
|ResourceTags|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|RuleVersion|CostCategoryExpression.v1|

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

```json
null
```

<h2 id="tocS_DeleteAnomalyMonitorResponse">DeleteAnomalyMonitorResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteanomalymonitorresponse"></a>
<a id="schema_DeleteAnomalyMonitorResponse"></a>
<a id="tocSdeleteanomalymonitorresponse"></a>
<a id="tocsdeleteanomalymonitorresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteAnomalyMonitorRequest">DeleteAnomalyMonitorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteanomalymonitorrequest"></a>
<a id="schema_DeleteAnomalyMonitorRequest"></a>
<a id="tocSdeleteanomalymonitorrequest"></a>
<a id="tocsdeleteanomalymonitorrequest"></a>

```json
{
  "MonitorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MonitorArn|object|true|none|none|

<h2 id="tocS_DeleteAnomalySubscriptionResponse">DeleteAnomalySubscriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteanomalysubscriptionresponse"></a>
<a id="schema_DeleteAnomalySubscriptionResponse"></a>
<a id="tocSdeleteanomalysubscriptionresponse"></a>
<a id="tocsdeleteanomalysubscriptionresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteAnomalySubscriptionRequest">DeleteAnomalySubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteanomalysubscriptionrequest"></a>
<a id="schema_DeleteAnomalySubscriptionRequest"></a>
<a id="tocSdeleteanomalysubscriptionrequest"></a>
<a id="tocsdeleteanomalysubscriptionrequest"></a>

```json
{
  "SubscriptionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubscriptionArn|object|true|none|none|

<h2 id="tocS_UnknownSubscriptionException">UnknownSubscriptionException</h2>
<!-- backwards compatibility -->
<a id="schemaunknownsubscriptionexception"></a>
<a id="schema_UnknownSubscriptionException"></a>
<a id="tocSunknownsubscriptionexception"></a>
<a id="tocsunknownsubscriptionexception"></a>

```json
null
```

<h2 id="tocS_DeleteCostCategoryDefinitionResponse">DeleteCostCategoryDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletecostcategorydefinitionresponse"></a>
<a id="schema_DeleteCostCategoryDefinitionResponse"></a>
<a id="tocSdeletecostcategorydefinitionresponse"></a>
<a id="tocsdeletecostcategorydefinitionresponse"></a>

```json
{
  "CostCategoryArn": {},
  "EffectiveEnd": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CostCategoryArn|object|false|none|none|
|EffectiveEnd|object|false|none|none|

<h2 id="tocS_DeleteCostCategoryDefinitionRequest">DeleteCostCategoryDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecostcategorydefinitionrequest"></a>
<a id="schema_DeleteCostCategoryDefinitionRequest"></a>
<a id="tocSdeletecostcategorydefinitionrequest"></a>
<a id="tocsdeletecostcategorydefinitionrequest"></a>

```json
{
  "CostCategoryArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CostCategoryArn|object|true|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_DescribeCostCategoryDefinitionResponse">DescribeCostCategoryDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecostcategorydefinitionresponse"></a>
<a id="schema_DescribeCostCategoryDefinitionResponse"></a>
<a id="tocSdescribecostcategorydefinitionresponse"></a>
<a id="tocsdescribecostcategorydefinitionresponse"></a>

```json
{
  "CostCategory": {
    "CostCategoryArn": {},
    "EffectiveStart": {},
    "EffectiveEnd": {},
    "Name": "string",
    "RuleVersion": "CostCategoryExpression.v1",
    "Rules": {},
    "SplitChargeRules": {},
    "ProcessingStatus": {},
    "DefaultValue": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CostCategory|[CostCategory](#schemacostcategory)|false|none|The structure of Cost Categories. This includes detailed metadata and the set of rules for the <code>CostCategory</code> object.|

<h2 id="tocS_DescribeCostCategoryDefinitionRequest">DescribeCostCategoryDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecostcategorydefinitionrequest"></a>
<a id="schema_DescribeCostCategoryDefinitionRequest"></a>
<a id="tocSdescribecostcategorydefinitionrequest"></a>
<a id="tocsdescribecostcategorydefinitionrequest"></a>

```json
{
  "CostCategoryArn": {},
  "EffectiveOn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CostCategoryArn|object|true|none|none|
|EffectiveOn|object|false|none|none|

<h2 id="tocS_GetAnomaliesResponse">GetAnomaliesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetanomaliesresponse"></a>
<a id="schema_GetAnomaliesResponse"></a>
<a id="tocSgetanomaliesresponse"></a>
<a id="tocsgetanomaliesresponse"></a>

```json
{
  "Anomalies": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Anomalies|object|true|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_GetAnomaliesRequest">GetAnomaliesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetanomaliesrequest"></a>
<a id="schema_GetAnomaliesRequest"></a>
<a id="tocSgetanomaliesrequest"></a>
<a id="tocsgetanomaliesrequest"></a>

```json
{
  "MonitorArn": {},
  "DateInterval": {
    "StartDate": {},
    "EndDate": {}
  },
  "Feedback": {},
  "TotalImpact": {
    "NumericOperator": {},
    "StartValue": {},
    "EndValue": {}
  },
  "NextPageToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MonitorArn|object|false|none|none|
|DateInterval|object|true|none|none|
|Feedback|object|false|none|none|
|TotalImpact|object|false|none|none|
|NextPageToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_InvalidNextTokenException">InvalidNextTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnexttokenexception"></a>
<a id="schema_InvalidNextTokenException"></a>
<a id="tocSinvalidnexttokenexception"></a>
<a id="tocsinvalidnexttokenexception"></a>

```json
null
```

<h2 id="tocS_GetAnomalyMonitorsResponse">GetAnomalyMonitorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetanomalymonitorsresponse"></a>
<a id="schema_GetAnomalyMonitorsResponse"></a>
<a id="tocSgetanomalymonitorsresponse"></a>
<a id="tocsgetanomalymonitorsresponse"></a>

```json
{
  "AnomalyMonitors": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyMonitors|object|true|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_GetAnomalyMonitorsRequest">GetAnomalyMonitorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetanomalymonitorsrequest"></a>
<a id="schema_GetAnomalyMonitorsRequest"></a>
<a id="tocSgetanomalymonitorsrequest"></a>
<a id="tocsgetanomalymonitorsrequest"></a>

```json
{
  "MonitorArnList": {},
  "NextPageToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MonitorArnList|object|false|none|none|
|NextPageToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_GetAnomalySubscriptionsResponse">GetAnomalySubscriptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetanomalysubscriptionsresponse"></a>
<a id="schema_GetAnomalySubscriptionsResponse"></a>
<a id="tocSgetanomalysubscriptionsresponse"></a>
<a id="tocsgetanomalysubscriptionsresponse"></a>

```json
{
  "AnomalySubscriptions": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalySubscriptions|object|true|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_GetAnomalySubscriptionsRequest">GetAnomalySubscriptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetanomalysubscriptionsrequest"></a>
<a id="schema_GetAnomalySubscriptionsRequest"></a>
<a id="tocSgetanomalysubscriptionsrequest"></a>
<a id="tocsgetanomalysubscriptionsrequest"></a>

```json
{
  "SubscriptionArnList": {},
  "MonitorArn": {},
  "NextPageToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubscriptionArnList|object|false|none|none|
|MonitorArn|object|false|none|none|
|NextPageToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_GetCostAndUsageResponse">GetCostAndUsageResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcostandusageresponse"></a>
<a id="schema_GetCostAndUsageResponse"></a>
<a id="tocSgetcostandusageresponse"></a>
<a id="tocsgetcostandusageresponse"></a>

```json
{
  "NextPageToken": {},
  "GroupDefinitions": {},
  "ResultsByTime": {},
  "DimensionValueAttributes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextPageToken|object|false|none|none|
|GroupDefinitions|object|false|none|none|
|ResultsByTime|object|false|none|none|
|DimensionValueAttributes|object|false|none|none|

<h2 id="tocS_GetCostAndUsageRequest">GetCostAndUsageRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcostandusagerequest"></a>
<a id="schema_GetCostAndUsageRequest"></a>
<a id="tocSgetcostandusagerequest"></a>
<a id="tocsgetcostandusagerequest"></a>

```json
{
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "Granularity": {},
  "Filter": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "Metrics": {},
  "GroupBy": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimePeriod|object|true|none|none|
|Granularity|object|true|none|none|
|Filter|object|false|none|none|
|Metrics|object|true|none|none|
|GroupBy|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_BillExpirationException">BillExpirationException</h2>
<!-- backwards compatibility -->
<a id="schemabillexpirationexception"></a>
<a id="schema_BillExpirationException"></a>
<a id="tocSbillexpirationexception"></a>
<a id="tocsbillexpirationexception"></a>

```json
null
```

<h2 id="tocS_DataUnavailableException">DataUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemadataunavailableexception"></a>
<a id="schema_DataUnavailableException"></a>
<a id="tocSdataunavailableexception"></a>
<a id="tocsdataunavailableexception"></a>

```json
null
```

<h2 id="tocS_RequestChangedException">RequestChangedException</h2>
<!-- backwards compatibility -->
<a id="schemarequestchangedexception"></a>
<a id="schema_RequestChangedException"></a>
<a id="tocSrequestchangedexception"></a>
<a id="tocsrequestchangedexception"></a>

```json
null
```

<h2 id="tocS_GetCostAndUsageWithResourcesResponse">GetCostAndUsageWithResourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcostandusagewithresourcesresponse"></a>
<a id="schema_GetCostAndUsageWithResourcesResponse"></a>
<a id="tocSgetcostandusagewithresourcesresponse"></a>
<a id="tocsgetcostandusagewithresourcesresponse"></a>

```json
{
  "NextPageToken": {},
  "GroupDefinitions": {},
  "ResultsByTime": {},
  "DimensionValueAttributes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextPageToken|object|false|none|none|
|GroupDefinitions|object|false|none|none|
|ResultsByTime|object|false|none|none|
|DimensionValueAttributes|object|false|none|none|

<h2 id="tocS_GetCostAndUsageWithResourcesRequest">GetCostAndUsageWithResourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcostandusagewithresourcesrequest"></a>
<a id="schema_GetCostAndUsageWithResourcesRequest"></a>
<a id="tocSgetcostandusagewithresourcesrequest"></a>
<a id="tocsgetcostandusagewithresourcesrequest"></a>

```json
{
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "Granularity": {},
  "Filter": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "Metrics": {},
  "GroupBy": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimePeriod|object|true|none|none|
|Granularity|object|true|none|none|
|Filter|object|true|none|none|
|Metrics|object|false|none|none|
|GroupBy|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_GetCostCategoriesResponse">GetCostCategoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcostcategoriesresponse"></a>
<a id="schema_GetCostCategoriesResponse"></a>
<a id="tocSgetcostcategoriesresponse"></a>
<a id="tocsgetcostcategoriesresponse"></a>

```json
{
  "NextPageToken": {},
  "CostCategoryNames": {},
  "CostCategoryValues": {},
  "ReturnSize": {},
  "TotalSize": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextPageToken|object|false|none|none|
|CostCategoryNames|object|false|none|none|
|CostCategoryValues|object|false|none|none|
|ReturnSize|object|true|none|none|
|TotalSize|object|true|none|none|

<h2 id="tocS_GetCostCategoriesRequest">GetCostCategoriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcostcategoriesrequest"></a>
<a id="schema_GetCostCategoriesRequest"></a>
<a id="tocSgetcostcategoriesrequest"></a>
<a id="tocsgetcostcategoriesrequest"></a>

```json
{
  "SearchString": {},
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "CostCategoryName": "string",
  "Filter": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "SortBy": {},
  "MaxResults": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SearchString|object|false|none|none|
|TimePeriod|[DateInterval](#schemadateinterval)|true|none|The time period of the request. |
|CostCategoryName|[CostCategoryName](#schemacostcategoryname)|false|none|The unique name of the Cost Category.|
|Filter|[Expression](#schemaexpression)|false|none|<p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p> <p>Not all <code>Expression</code> types are supported in each API. Refer to the documentation for each specific API to see what is supported.</p> <p>There are two patterns:</p> <ul> <li> <p>Simple dimension values.</p> <ul> <li> <p>There are three types of simple dimension values: <code>CostCategories</code>, <code>Tags</code>, and <code>Dimensions</code>.</p> <ul> <li> <p>Specify the <code>CostCategories</code> field to define a filter that acts on Cost Categories.</p> </li> <li> <p>Specify the <code>Tags</code> field to define a filter that acts on Cost Allocation Tags.</p> </li> <li> <p>Specify the <code>Dimensions</code> field to define a filter that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html"> <code>DimensionValues</code> </a>.</p> </li> </ul> </li> <li> <p>For each filter type, you can set the dimension name and values for the filters that you plan to use.</p> <ul> <li> <p>For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> </li> <li> <p>As shown in the previous example, lists of dimension values are combined with <code>OR</code> when applying the filter.</p> </li> </ul> </li> <li> <p>You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.</p> <ul> <li> <p>For example, you can filter for linked account names that start with “a”.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] } }</code> </p> </li> </ul> </li> </ul> </li> <li> <p>Compound <code>Expression</code> types with logical operations.</p> <ul> <li> <p>You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. By doing this, you can filter by more advanced options.</p> </li> <li> <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> </li> </ul> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error: <code> { "And": [ ... ], "Dimensions": { "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> <p>The following is an example of the corresponding error message: <code>"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"</code> </p> </note> </li> </ul> <note> <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to <code>LINKED_ACCOUNT</code>.</p> </note>|
|SortBy|object|false|none|none|
|MaxResults|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_GetCostForecastResponse">GetCostForecastResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcostforecastresponse"></a>
<a id="schema_GetCostForecastResponse"></a>
<a id="tocSgetcostforecastresponse"></a>
<a id="tocsgetcostforecastresponse"></a>

```json
{
  "Total": {
    "Amount": {},
    "Unit": {}
  },
  "ForecastResultsByTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Total|object|false|none|none|
|ForecastResultsByTime|object|false|none|none|

<h2 id="tocS_GetCostForecastRequest">GetCostForecastRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcostforecastrequest"></a>
<a id="schema_GetCostForecastRequest"></a>
<a id="tocSgetcostforecastrequest"></a>
<a id="tocsgetcostforecastrequest"></a>

```json
{
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "Metric": {},
  "Granularity": {},
  "Filter": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "PredictionIntervalLevel": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimePeriod|object|true|none|none|
|Metric|object|true|none|none|
|Granularity|object|true|none|none|
|Filter|object|false|none|none|
|PredictionIntervalLevel|object|false|none|none|

<h2 id="tocS_GetDimensionValuesResponse">GetDimensionValuesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdimensionvaluesresponse"></a>
<a id="schema_GetDimensionValuesResponse"></a>
<a id="tocSgetdimensionvaluesresponse"></a>
<a id="tocsgetdimensionvaluesresponse"></a>

```json
{
  "DimensionValues": {},
  "ReturnSize": {},
  "TotalSize": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DimensionValues|object|true|none|none|
|ReturnSize|object|true|none|none|
|TotalSize|object|true|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_GetDimensionValuesRequest">GetDimensionValuesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdimensionvaluesrequest"></a>
<a id="schema_GetDimensionValuesRequest"></a>
<a id="tocSgetdimensionvaluesrequest"></a>
<a id="tocsgetdimensionvaluesrequest"></a>

```json
{
  "SearchString": {},
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "Dimension": {},
  "Context": {},
  "Filter": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "SortBy": {},
  "MaxResults": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SearchString|object|false|none|none|
|TimePeriod|object|true|none|none|
|Dimension|object|true|none|none|
|Context|object|false|none|none|
|Filter|[Expression](#schemaexpression)|false|none|<p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p> <p>Not all <code>Expression</code> types are supported in each API. Refer to the documentation for each specific API to see what is supported.</p> <p>There are two patterns:</p> <ul> <li> <p>Simple dimension values.</p> <ul> <li> <p>There are three types of simple dimension values: <code>CostCategories</code>, <code>Tags</code>, and <code>Dimensions</code>.</p> <ul> <li> <p>Specify the <code>CostCategories</code> field to define a filter that acts on Cost Categories.</p> </li> <li> <p>Specify the <code>Tags</code> field to define a filter that acts on Cost Allocation Tags.</p> </li> <li> <p>Specify the <code>Dimensions</code> field to define a filter that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html"> <code>DimensionValues</code> </a>.</p> </li> </ul> </li> <li> <p>For each filter type, you can set the dimension name and values for the filters that you plan to use.</p> <ul> <li> <p>For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> </li> <li> <p>As shown in the previous example, lists of dimension values are combined with <code>OR</code> when applying the filter.</p> </li> </ul> </li> <li> <p>You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.</p> <ul> <li> <p>For example, you can filter for linked account names that start with “a”.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] } }</code> </p> </li> </ul> </li> </ul> </li> <li> <p>Compound <code>Expression</code> types with logical operations.</p> <ul> <li> <p>You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. By doing this, you can filter by more advanced options.</p> </li> <li> <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> </li> </ul> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error: <code> { "And": [ ... ], "Dimensions": { "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> <p>The following is an example of the corresponding error message: <code>"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"</code> </p> </note> </li> </ul> <note> <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to <code>LINKED_ACCOUNT</code>.</p> </note>|
|SortBy|object|false|none|none|
|MaxResults|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_GetReservationCoverageResponse">GetReservationCoverageResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetreservationcoverageresponse"></a>
<a id="schema_GetReservationCoverageResponse"></a>
<a id="tocSgetreservationcoverageresponse"></a>
<a id="tocsgetreservationcoverageresponse"></a>

```json
{
  "CoveragesByTime": {},
  "Total": {
    "CoverageHours": {
      "OnDemandHours": {},
      "ReservedHours": {},
      "TotalRunningHours": {},
      "CoverageHoursPercentage": {}
    },
    "CoverageNormalizedUnits": {
      "OnDemandNormalizedUnits": {},
      "ReservedNormalizedUnits": {},
      "TotalRunningNormalizedUnits": {},
      "CoverageNormalizedUnitsPercentage": {}
    },
    "CoverageCost": {
      "OnDemandCost": {}
    }
  },
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoveragesByTime|object|true|none|none|
|Total|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_GetReservationCoverageRequest">GetReservationCoverageRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetreservationcoveragerequest"></a>
<a id="schema_GetReservationCoverageRequest"></a>
<a id="tocSgetreservationcoveragerequest"></a>
<a id="tocsgetreservationcoveragerequest"></a>

```json
{
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "GroupBy": {},
  "Granularity": {},
  "Filter": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "Metrics": {},
  "NextPageToken": {},
  "SortBy": {
    "Key": {},
    "SortOrder": {}
  },
  "MaxResults": {}
}
```

You can use the following request parameters to query for how much of your instance usage a reservation covered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimePeriod|object|true|none|none|
|GroupBy|object|false|none|none|
|Granularity|object|false|none|none|
|Filter|object|false|none|none|
|Metrics|object|false|none|none|
|NextPageToken|object|false|none|none|
|SortBy|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_GetReservationPurchaseRecommendationResponse">GetReservationPurchaseRecommendationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetreservationpurchaserecommendationresponse"></a>
<a id="schema_GetReservationPurchaseRecommendationResponse"></a>
<a id="tocSgetreservationpurchaserecommendationresponse"></a>
<a id="tocsgetreservationpurchaserecommendationresponse"></a>

```json
{
  "Metadata": {
    "RecommendationId": {},
    "GenerationTimestamp": {}
  },
  "Recommendations": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metadata|object|false|none|none|
|Recommendations|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_GetReservationPurchaseRecommendationRequest">GetReservationPurchaseRecommendationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetreservationpurchaserecommendationrequest"></a>
<a id="schema_GetReservationPurchaseRecommendationRequest"></a>
<a id="tocSgetreservationpurchaserecommendationrequest"></a>
<a id="tocsgetreservationpurchaserecommendationrequest"></a>

```json
{
  "AccountId": {},
  "Service": {},
  "Filter": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "AccountScope": {},
  "LookbackPeriodInDays": {},
  "TermInYears": {},
  "PaymentOption": {},
  "ServiceSpecification": {
    "EC2Specification": {
      "OfferingClass": {}
    }
  },
  "PageSize": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|Service|object|true|none|none|
|Filter|[Expression](#schemaexpression)|false|none|<p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p> <p>Not all <code>Expression</code> types are supported in each API. Refer to the documentation for each specific API to see what is supported.</p> <p>There are two patterns:</p> <ul> <li> <p>Simple dimension values.</p> <ul> <li> <p>There are three types of simple dimension values: <code>CostCategories</code>, <code>Tags</code>, and <code>Dimensions</code>.</p> <ul> <li> <p>Specify the <code>CostCategories</code> field to define a filter that acts on Cost Categories.</p> </li> <li> <p>Specify the <code>Tags</code> field to define a filter that acts on Cost Allocation Tags.</p> </li> <li> <p>Specify the <code>Dimensions</code> field to define a filter that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html"> <code>DimensionValues</code> </a>.</p> </li> </ul> </li> <li> <p>For each filter type, you can set the dimension name and values for the filters that you plan to use.</p> <ul> <li> <p>For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> </li> <li> <p>As shown in the previous example, lists of dimension values are combined with <code>OR</code> when applying the filter.</p> </li> </ul> </li> <li> <p>You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.</p> <ul> <li> <p>For example, you can filter for linked account names that start with “a”.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] } }</code> </p> </li> </ul> </li> </ul> </li> <li> <p>Compound <code>Expression</code> types with logical operations.</p> <ul> <li> <p>You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. By doing this, you can filter by more advanced options.</p> </li> <li> <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> </li> </ul> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error: <code> { "And": [ ... ], "Dimensions": { "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> <p>The following is an example of the corresponding error message: <code>"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"</code> </p> </note> </li> </ul> <note> <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to <code>LINKED_ACCOUNT</code>.</p> </note>|
|AccountScope|object|false|none|none|
|LookbackPeriodInDays|object|false|none|none|
|TermInYears|object|false|none|none|
|PaymentOption|object|false|none|none|
|ServiceSpecification|object|false|none|none|
|PageSize|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_GetReservationUtilizationResponse">GetReservationUtilizationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetreservationutilizationresponse"></a>
<a id="schema_GetReservationUtilizationResponse"></a>
<a id="tocSgetreservationutilizationresponse"></a>
<a id="tocsgetreservationutilizationresponse"></a>

```json
{
  "UtilizationsByTime": {},
  "Total": {
    "UtilizationPercentage": {},
    "UtilizationPercentageInUnits": {},
    "PurchasedHours": {},
    "PurchasedUnits": {},
    "TotalActualHours": {},
    "TotalActualUnits": {},
    "UnusedHours": {},
    "UnusedUnits": {},
    "OnDemandCostOfRIHoursUsed": {},
    "NetRISavings": {},
    "TotalPotentialRISavings": {},
    "AmortizedUpfrontFee": {},
    "AmortizedRecurringFee": {},
    "TotalAmortizedFee": {},
    "RICostForUnusedHours": {},
    "RealizedSavings": {},
    "UnrealizedSavings": {}
  },
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UtilizationsByTime|object|true|none|none|
|Total|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_GetReservationUtilizationRequest">GetReservationUtilizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetreservationutilizationrequest"></a>
<a id="schema_GetReservationUtilizationRequest"></a>
<a id="tocSgetreservationutilizationrequest"></a>
<a id="tocsgetreservationutilizationrequest"></a>

```json
{
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "GroupBy": {},
  "Granularity": {},
  "Filter": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "SortBy": {
    "Key": {},
    "SortOrder": {}
  },
  "NextPageToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimePeriod|object|true|none|none|
|GroupBy|object|false|none|none|
|Granularity|object|false|none|none|
|Filter|object|false|none|none|
|SortBy|object|false|none|none|
|NextPageToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_GetRightsizingRecommendationResponse">GetRightsizingRecommendationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetrightsizingrecommendationresponse"></a>
<a id="schema_GetRightsizingRecommendationResponse"></a>
<a id="tocSgetrightsizingrecommendationresponse"></a>
<a id="tocsgetrightsizingrecommendationresponse"></a>

```json
{
  "Metadata": {
    "RecommendationId": {},
    "GenerationTimestamp": {},
    "LookbackPeriodInDays": {},
    "AdditionalMetadata": {}
  },
  "Summary": {
    "TotalRecommendationCount": {},
    "EstimatedTotalMonthlySavingsAmount": {},
    "SavingsCurrencyCode": {},
    "SavingsPercentage": {}
  },
  "RightsizingRecommendations": {},
  "NextPageToken": {},
  "Configuration": {
    "RecommendationTarget": {},
    "BenefitsConsidered": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metadata|object|false|none|none|
|Summary|object|false|none|none|
|RightsizingRecommendations|object|false|none|none|
|NextPageToken|object|false|none|none|
|Configuration|object|false|none|none|

<h2 id="tocS_GetRightsizingRecommendationRequest">GetRightsizingRecommendationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrightsizingrecommendationrequest"></a>
<a id="schema_GetRightsizingRecommendationRequest"></a>
<a id="tocSgetrightsizingrecommendationrequest"></a>
<a id="tocsgetrightsizingrecommendationrequest"></a>

```json
{
  "Filter": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "Configuration": {
    "RecommendationTarget": {},
    "BenefitsConsidered": {}
  },
  "Service": {},
  "PageSize": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filter|[Expression](#schemaexpression)|false|none|<p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p> <p>Not all <code>Expression</code> types are supported in each API. Refer to the documentation for each specific API to see what is supported.</p> <p>There are two patterns:</p> <ul> <li> <p>Simple dimension values.</p> <ul> <li> <p>There are three types of simple dimension values: <code>CostCategories</code>, <code>Tags</code>, and <code>Dimensions</code>.</p> <ul> <li> <p>Specify the <code>CostCategories</code> field to define a filter that acts on Cost Categories.</p> </li> <li> <p>Specify the <code>Tags</code> field to define a filter that acts on Cost Allocation Tags.</p> </li> <li> <p>Specify the <code>Dimensions</code> field to define a filter that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html"> <code>DimensionValues</code> </a>.</p> </li> </ul> </li> <li> <p>For each filter type, you can set the dimension name and values for the filters that you plan to use.</p> <ul> <li> <p>For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> </li> <li> <p>As shown in the previous example, lists of dimension values are combined with <code>OR</code> when applying the filter.</p> </li> </ul> </li> <li> <p>You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.</p> <ul> <li> <p>For example, you can filter for linked account names that start with “a”.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] } }</code> </p> </li> </ul> </li> </ul> </li> <li> <p>Compound <code>Expression</code> types with logical operations.</p> <ul> <li> <p>You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. By doing this, you can filter by more advanced options.</p> </li> <li> <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> </li> </ul> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error: <code> { "And": [ ... ], "Dimensions": { "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> <p>The following is an example of the corresponding error message: <code>"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"</code> </p> </note> </li> </ul> <note> <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to <code>LINKED_ACCOUNT</code>.</p> </note>|
|Configuration|object|false|none|none|
|Service|object|true|none|none|
|PageSize|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_GetSavingsPlansCoverageResponse">GetSavingsPlansCoverageResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsavingsplanscoverageresponse"></a>
<a id="schema_GetSavingsPlansCoverageResponse"></a>
<a id="tocSgetsavingsplanscoverageresponse"></a>
<a id="tocsgetsavingsplanscoverageresponse"></a>

```json
{
  "SavingsPlansCoverages": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SavingsPlansCoverages|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetSavingsPlansCoverageRequest">GetSavingsPlansCoverageRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsavingsplanscoveragerequest"></a>
<a id="schema_GetSavingsPlansCoverageRequest"></a>
<a id="tocSgetsavingsplanscoveragerequest"></a>
<a id="tocsgetsavingsplanscoveragerequest"></a>

```json
{
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "GroupBy": {},
  "Granularity": {},
  "Filter": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "Metrics": {},
  "NextToken": {},
  "MaxResults": {},
  "SortBy": {
    "Key": {},
    "SortOrder": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimePeriod|object|true|none|none|
|GroupBy|object|false|none|none|
|Granularity|object|false|none|none|
|Filter|object|false|none|none|
|Metrics|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|SortBy|object|false|none|none|

<h2 id="tocS_GetSavingsPlansPurchaseRecommendationResponse">GetSavingsPlansPurchaseRecommendationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsavingsplanspurchaserecommendationresponse"></a>
<a id="schema_GetSavingsPlansPurchaseRecommendationResponse"></a>
<a id="tocSgetsavingsplanspurchaserecommendationresponse"></a>
<a id="tocsgetsavingsplanspurchaserecommendationresponse"></a>

```json
{
  "Metadata": {
    "RecommendationId": {},
    "GenerationTimestamp": {},
    "AdditionalMetadata": {}
  },
  "SavingsPlansPurchaseRecommendation": {
    "AccountScope": {},
    "SavingsPlansType": {},
    "TermInYears": {},
    "PaymentOption": {},
    "LookbackPeriodInDays": {},
    "SavingsPlansPurchaseRecommendationDetails": {},
    "SavingsPlansPurchaseRecommendationSummary": {
      "EstimatedROI": {},
      "CurrencyCode": {},
      "EstimatedTotalCost": {},
      "CurrentOnDemandSpend": {},
      "EstimatedSavingsAmount": {},
      "TotalRecommendationCount": {},
      "DailyCommitmentToPurchase": {},
      "HourlyCommitmentToPurchase": {},
      "EstimatedSavingsPercentage": {},
      "EstimatedMonthlySavingsAmount": {},
      "EstimatedOnDemandCostWithCurrentCommitment": {}
    }
  },
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metadata|object|false|none|none|
|SavingsPlansPurchaseRecommendation|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_GetSavingsPlansPurchaseRecommendationRequest">GetSavingsPlansPurchaseRecommendationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsavingsplanspurchaserecommendationrequest"></a>
<a id="schema_GetSavingsPlansPurchaseRecommendationRequest"></a>
<a id="tocSgetsavingsplanspurchaserecommendationrequest"></a>
<a id="tocsgetsavingsplanspurchaserecommendationrequest"></a>

```json
{
  "SavingsPlansType": {},
  "TermInYears": {},
  "PaymentOption": {},
  "AccountScope": {},
  "NextPageToken": {},
  "PageSize": {},
  "LookbackPeriodInDays": {},
  "Filter": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SavingsPlansType|object|true|none|none|
|TermInYears|object|true|none|none|
|PaymentOption|object|true|none|none|
|AccountScope|object|false|none|none|
|NextPageToken|object|false|none|none|
|PageSize|object|false|none|none|
|LookbackPeriodInDays|object|true|none|none|
|Filter|object|false|none|none|

<h2 id="tocS_GetSavingsPlansUtilizationResponse">GetSavingsPlansUtilizationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsavingsplansutilizationresponse"></a>
<a id="schema_GetSavingsPlansUtilizationResponse"></a>
<a id="tocSgetsavingsplansutilizationresponse"></a>
<a id="tocsgetsavingsplansutilizationresponse"></a>

```json
{
  "SavingsPlansUtilizationsByTime": {},
  "Total": {
    "Utilization": {
      "TotalCommitment": {},
      "UsedCommitment": {},
      "UnusedCommitment": {},
      "UtilizationPercentage": {}
    },
    "Savings": {
      "NetSavings": {},
      "OnDemandCostEquivalent": {}
    },
    "AmortizedCommitment": {
      "AmortizedRecurringCommitment": {},
      "AmortizedUpfrontCommitment": {},
      "TotalAmortizedCommitment": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SavingsPlansUtilizationsByTime|object|false|none|none|
|Total|object|true|none|none|

<h2 id="tocS_GetSavingsPlansUtilizationRequest">GetSavingsPlansUtilizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsavingsplansutilizationrequest"></a>
<a id="schema_GetSavingsPlansUtilizationRequest"></a>
<a id="tocSgetsavingsplansutilizationrequest"></a>
<a id="tocsgetsavingsplansutilizationrequest"></a>

```json
{
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "Granularity": {},
  "Filter": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "SortBy": {
    "Key": {},
    "SortOrder": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimePeriod|object|true|none|none|
|Granularity|object|false|none|none|
|Filter|object|false|none|none|
|SortBy|object|false|none|none|

<h2 id="tocS_GetSavingsPlansUtilizationDetailsResponse">GetSavingsPlansUtilizationDetailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsavingsplansutilizationdetailsresponse"></a>
<a id="schema_GetSavingsPlansUtilizationDetailsResponse"></a>
<a id="tocSgetsavingsplansutilizationdetailsresponse"></a>
<a id="tocsgetsavingsplansutilizationdetailsresponse"></a>

```json
{
  "SavingsPlansUtilizationDetails": {},
  "Total": {
    "Utilization": {
      "TotalCommitment": {},
      "UsedCommitment": {},
      "UnusedCommitment": {},
      "UtilizationPercentage": {}
    },
    "Savings": {
      "NetSavings": {},
      "OnDemandCostEquivalent": {}
    },
    "AmortizedCommitment": {
      "AmortizedRecurringCommitment": {},
      "AmortizedUpfrontCommitment": {},
      "TotalAmortizedCommitment": {}
    }
  },
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SavingsPlansUtilizationDetails|object|true|none|none|
|Total|object|false|none|none|
|TimePeriod|[DateInterval](#schemadateinterval)|true|none|The time period of the request. |
|NextToken|object|false|none|none|

<h2 id="tocS_GetSavingsPlansUtilizationDetailsRequest">GetSavingsPlansUtilizationDetailsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsavingsplansutilizationdetailsrequest"></a>
<a id="schema_GetSavingsPlansUtilizationDetailsRequest"></a>
<a id="tocSgetsavingsplansutilizationdetailsrequest"></a>
<a id="tocsgetsavingsplansutilizationdetailsrequest"></a>

```json
{
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "Filter": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "DataType": {},
  "NextToken": {},
  "MaxResults": {},
  "SortBy": {
    "Key": {},
    "SortOrder": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimePeriod|object|true|none|none|
|Filter|object|false|none|none|
|DataType|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|SortBy|object|false|none|none|

<h2 id="tocS_GetTagsResponse">GetTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettagsresponse"></a>
<a id="schema_GetTagsResponse"></a>
<a id="tocSgettagsresponse"></a>
<a id="tocsgettagsresponse"></a>

```json
{
  "NextPageToken": {},
  "Tags": {},
  "ReturnSize": {},
  "TotalSize": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextPageToken|object|false|none|none|
|Tags|object|true|none|none|
|ReturnSize|object|true|none|none|
|TotalSize|object|true|none|none|

<h2 id="tocS_GetTagsRequest">GetTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettagsrequest"></a>
<a id="schema_GetTagsRequest"></a>
<a id="tocSgettagsrequest"></a>
<a id="tocsgettagsrequest"></a>

```json
{
  "SearchString": {},
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "TagKey": {},
  "Filter": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "SortBy": {},
  "MaxResults": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SearchString|object|false|none|none|
|TimePeriod|object|true|none|none|
|TagKey|object|false|none|none|
|Filter|[Expression](#schemaexpression)|false|none|<p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p> <p>Not all <code>Expression</code> types are supported in each API. Refer to the documentation for each specific API to see what is supported.</p> <p>There are two patterns:</p> <ul> <li> <p>Simple dimension values.</p> <ul> <li> <p>There are three types of simple dimension values: <code>CostCategories</code>, <code>Tags</code>, and <code>Dimensions</code>.</p> <ul> <li> <p>Specify the <code>CostCategories</code> field to define a filter that acts on Cost Categories.</p> </li> <li> <p>Specify the <code>Tags</code> field to define a filter that acts on Cost Allocation Tags.</p> </li> <li> <p>Specify the <code>Dimensions</code> field to define a filter that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html"> <code>DimensionValues</code> </a>.</p> </li> </ul> </li> <li> <p>For each filter type, you can set the dimension name and values for the filters that you plan to use.</p> <ul> <li> <p>For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> </li> <li> <p>As shown in the previous example, lists of dimension values are combined with <code>OR</code> when applying the filter.</p> </li> </ul> </li> <li> <p>You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.</p> <ul> <li> <p>For example, you can filter for linked account names that start with “a”.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] } }</code> </p> </li> </ul> </li> </ul> </li> <li> <p>Compound <code>Expression</code> types with logical operations.</p> <ul> <li> <p>You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. By doing this, you can filter by more advanced options.</p> </li> <li> <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> </li> </ul> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error: <code> { "And": [ ... ], "Dimensions": { "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> <p>The following is an example of the corresponding error message: <code>"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"</code> </p> </note> </li> </ul> <note> <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to <code>LINKED_ACCOUNT</code>.</p> </note>|
|SortBy|object|false|none|none|
|MaxResults|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_GetUsageForecastResponse">GetUsageForecastResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetusageforecastresponse"></a>
<a id="schema_GetUsageForecastResponse"></a>
<a id="tocSgetusageforecastresponse"></a>
<a id="tocsgetusageforecastresponse"></a>

```json
{
  "Total": {
    "Amount": {},
    "Unit": {}
  },
  "ForecastResultsByTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Total|object|false|none|none|
|ForecastResultsByTime|object|false|none|none|

<h2 id="tocS_GetUsageForecastRequest">GetUsageForecastRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetusageforecastrequest"></a>
<a id="schema_GetUsageForecastRequest"></a>
<a id="tocSgetusageforecastrequest"></a>
<a id="tocsgetusageforecastrequest"></a>

```json
{
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "Metric": {},
  "Granularity": {},
  "Filter": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "PredictionIntervalLevel": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimePeriod|object|true|none|none|
|Metric|object|true|none|none|
|Granularity|object|true|none|none|
|Filter|object|false|none|none|
|PredictionIntervalLevel|object|false|none|none|

<h2 id="tocS_UnresolvableUsageUnitException">UnresolvableUsageUnitException</h2>
<!-- backwards compatibility -->
<a id="schemaunresolvableusageunitexception"></a>
<a id="schema_UnresolvableUsageUnitException"></a>
<a id="tocSunresolvableusageunitexception"></a>
<a id="tocsunresolvableusageunitexception"></a>

```json
null
```

<h2 id="tocS_ListCostAllocationTagsResponse">ListCostAllocationTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcostallocationtagsresponse"></a>
<a id="schema_ListCostAllocationTagsResponse"></a>
<a id="tocSlistcostallocationtagsresponse"></a>
<a id="tocslistcostallocationtagsresponse"></a>

```json
{
  "CostAllocationTags": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CostAllocationTags|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListCostAllocationTagsRequest">ListCostAllocationTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcostallocationtagsrequest"></a>
<a id="schema_ListCostAllocationTagsRequest"></a>
<a id="tocSlistcostallocationtagsrequest"></a>
<a id="tocslistcostallocationtagsrequest"></a>

```json
{
  "Status": {},
  "TagKeys": {},
  "Type": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|TagKeys|object|false|none|none|
|Type|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListCostCategoryDefinitionsResponse">ListCostCategoryDefinitionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcostcategorydefinitionsresponse"></a>
<a id="schema_ListCostCategoryDefinitionsResponse"></a>
<a id="tocSlistcostcategorydefinitionsresponse"></a>
<a id="tocslistcostcategorydefinitionsresponse"></a>

```json
{
  "CostCategoryReferences": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CostCategoryReferences|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListCostCategoryDefinitionsRequest">ListCostCategoryDefinitionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcostcategorydefinitionsrequest"></a>
<a id="schema_ListCostCategoryDefinitionsRequest"></a>
<a id="tocSlistcostcategorydefinitionsrequest"></a>
<a id="tocslistcostcategorydefinitionsrequest"></a>

```json
{
  "EffectiveOn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EffectiveOn|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListSavingsPlansPurchaseRecommendationGenerationResponse">ListSavingsPlansPurchaseRecommendationGenerationResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsavingsplanspurchaserecommendationgenerationresponse"></a>
<a id="schema_ListSavingsPlansPurchaseRecommendationGenerationResponse"></a>
<a id="tocSlistsavingsplanspurchaserecommendationgenerationresponse"></a>
<a id="tocslistsavingsplanspurchaserecommendationgenerationresponse"></a>

```json
{
  "GenerationSummaryList": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GenerationSummaryList|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_ListSavingsPlansPurchaseRecommendationGenerationRequest">ListSavingsPlansPurchaseRecommendationGenerationRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsavingsplanspurchaserecommendationgenerationrequest"></a>
<a id="schema_ListSavingsPlansPurchaseRecommendationGenerationRequest"></a>
<a id="tocSlistsavingsplanspurchaserecommendationgenerationrequest"></a>
<a id="tocslistsavingsplanspurchaserecommendationgenerationrequest"></a>

```json
{
  "GenerationStatus": {},
  "RecommendationIds": {},
  "PageSize": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GenerationStatus|object|false|none|none|
|RecommendationIds|object|false|none|none|
|PageSize|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "ResourceTags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceTags|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_ProvideAnomalyFeedbackResponse">ProvideAnomalyFeedbackResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprovideanomalyfeedbackresponse"></a>
<a id="schema_ProvideAnomalyFeedbackResponse"></a>
<a id="tocSprovideanomalyfeedbackresponse"></a>
<a id="tocsprovideanomalyfeedbackresponse"></a>

```json
{
  "AnomalyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyId|object|true|none|none|

<h2 id="tocS_ProvideAnomalyFeedbackRequest">ProvideAnomalyFeedbackRequest</h2>
<!-- backwards compatibility -->
<a id="schemaprovideanomalyfeedbackrequest"></a>
<a id="schema_ProvideAnomalyFeedbackRequest"></a>
<a id="tocSprovideanomalyfeedbackrequest"></a>
<a id="tocsprovideanomalyfeedbackrequest"></a>

```json
{
  "AnomalyId": {},
  "Feedback": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyId|object|true|none|none|
|Feedback|object|true|none|none|

<h2 id="tocS_StartSavingsPlansPurchaseRecommendationGenerationResponse">StartSavingsPlansPurchaseRecommendationGenerationResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartsavingsplanspurchaserecommendationgenerationresponse"></a>
<a id="schema_StartSavingsPlansPurchaseRecommendationGenerationResponse"></a>
<a id="tocSstartsavingsplanspurchaserecommendationgenerationresponse"></a>
<a id="tocsstartsavingsplanspurchaserecommendationgenerationresponse"></a>

```json
{
  "RecommendationId": {},
  "GenerationStartedTime": {},
  "EstimatedCompletionTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecommendationId|object|false|none|none|
|GenerationStartedTime|object|false|none|none|
|EstimatedCompletionTime|object|false|none|none|

<h2 id="tocS_StartSavingsPlansPurchaseRecommendationGenerationRequest">StartSavingsPlansPurchaseRecommendationGenerationRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartsavingsplanspurchaserecommendationgenerationrequest"></a>
<a id="schema_StartSavingsPlansPurchaseRecommendationGenerationRequest"></a>
<a id="tocSstartsavingsplanspurchaserecommendationgenerationrequest"></a>
<a id="tocsstartsavingsplanspurchaserecommendationgenerationrequest"></a>

```json
{}
```

<h2 id="tocS_GenerationExistsException">GenerationExistsException</h2>
<!-- backwards compatibility -->
<a id="schemagenerationexistsexception"></a>
<a id="schema_GenerationExistsException"></a>
<a id="tocSgenerationexistsexception"></a>
<a id="tocsgenerationexistsexception"></a>

```json
null
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

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "ResourceArn": {},
  "ResourceTags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|ResourceTags|object|true|none|none|

<h2 id="tocS_TooManyTagsException">TooManyTagsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanytagsexception"></a>
<a id="schema_TooManyTagsException"></a>
<a id="tocStoomanytagsexception"></a>
<a id="tocstoomanytagsexception"></a>

```json
null
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

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{
  "ResourceArn": {},
  "ResourceTagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|ResourceTagKeys|object|true|none|none|

<h2 id="tocS_UpdateAnomalyMonitorResponse">UpdateAnomalyMonitorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateanomalymonitorresponse"></a>
<a id="schema_UpdateAnomalyMonitorResponse"></a>
<a id="tocSupdateanomalymonitorresponse"></a>
<a id="tocsupdateanomalymonitorresponse"></a>

```json
{
  "MonitorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MonitorArn|object|true|none|none|

<h2 id="tocS_UpdateAnomalyMonitorRequest">UpdateAnomalyMonitorRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateanomalymonitorrequest"></a>
<a id="schema_UpdateAnomalyMonitorRequest"></a>
<a id="tocSupdateanomalymonitorrequest"></a>
<a id="tocsupdateanomalymonitorrequest"></a>

```json
{
  "MonitorArn": {},
  "MonitorName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MonitorArn|object|true|none|none|
|MonitorName|object|false|none|none|

<h2 id="tocS_UpdateAnomalySubscriptionResponse">UpdateAnomalySubscriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateanomalysubscriptionresponse"></a>
<a id="schema_UpdateAnomalySubscriptionResponse"></a>
<a id="tocSupdateanomalysubscriptionresponse"></a>
<a id="tocsupdateanomalysubscriptionresponse"></a>

```json
{
  "SubscriptionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubscriptionArn|object|true|none|none|

<h2 id="tocS_UpdateAnomalySubscriptionRequest">UpdateAnomalySubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateanomalysubscriptionrequest"></a>
<a id="schema_UpdateAnomalySubscriptionRequest"></a>
<a id="tocSupdateanomalysubscriptionrequest"></a>
<a id="tocsupdateanomalysubscriptionrequest"></a>

```json
{
  "SubscriptionArn": {},
  "Threshold": {},
  "Frequency": {},
  "MonitorArnList": {},
  "Subscribers": {},
  "SubscriptionName": {},
  "ThresholdExpression": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubscriptionArn|object|true|none|none|
|Threshold|object|false|none|none|
|Frequency|object|false|none|none|
|MonitorArnList|object|false|none|none|
|Subscribers|object|false|none|none|
|SubscriptionName|object|false|none|none|
|ThresholdExpression|object|false|none|none|

<h2 id="tocS_UpdateCostAllocationTagsStatusResponse">UpdateCostAllocationTagsStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecostallocationtagsstatusresponse"></a>
<a id="schema_UpdateCostAllocationTagsStatusResponse"></a>
<a id="tocSupdatecostallocationtagsstatusresponse"></a>
<a id="tocsupdatecostallocationtagsstatusresponse"></a>

```json
{
  "Errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Errors|object|false|none|none|

<h2 id="tocS_UpdateCostAllocationTagsStatusRequest">UpdateCostAllocationTagsStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecostallocationtagsstatusrequest"></a>
<a id="schema_UpdateCostAllocationTagsStatusRequest"></a>
<a id="tocSupdatecostallocationtagsstatusrequest"></a>
<a id="tocsupdatecostallocationtagsstatusrequest"></a>

```json
{
  "CostAllocationTagsStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CostAllocationTagsStatus|object|true|none|none|

<h2 id="tocS_UpdateCostCategoryDefinitionResponse">UpdateCostCategoryDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecostcategorydefinitionresponse"></a>
<a id="schema_UpdateCostCategoryDefinitionResponse"></a>
<a id="tocSupdatecostcategorydefinitionresponse"></a>
<a id="tocsupdatecostcategorydefinitionresponse"></a>

```json
{
  "CostCategoryArn": {},
  "EffectiveStart": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CostCategoryArn|object|false|none|none|
|EffectiveStart|object|false|none|none|

<h2 id="tocS_UpdateCostCategoryDefinitionRequest">UpdateCostCategoryDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecostcategorydefinitionrequest"></a>
<a id="schema_UpdateCostCategoryDefinitionRequest"></a>
<a id="tocSupdatecostcategorydefinitionrequest"></a>
<a id="tocsupdatecostcategorydefinitionrequest"></a>

```json
{
  "CostCategoryArn": {},
  "EffectiveStart": {},
  "RuleVersion": "CostCategoryExpression.v1",
  "Rules": {},
  "DefaultValue": "string",
  "SplitChargeRules": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CostCategoryArn|object|true|none|none|
|EffectiveStart|object|false|none|none|
|RuleVersion|[CostCategoryRuleVersion](#schemacostcategoryruleversion)|true|none|The rule schema version in this particular Cost Category.|
|Rules|object|true|none|none|
|DefaultValue|[CostCategoryValue](#schemacostcategoryvalue)|false|none|The default value for the cost category.|
|SplitChargeRules|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|RuleVersion|CostCategoryExpression.v1|

<h2 id="tocS_AccountScope">AccountScope</h2>
<!-- backwards compatibility -->
<a id="schemaaccountscope"></a>
<a id="schema_AccountScope"></a>
<a id="tocSaccountscope"></a>
<a id="tocsaccountscope"></a>

```json
"PAYER"
```

<h2 id="tocS_AmortizedRecurringFee">AmortizedRecurringFee</h2>
<!-- backwards compatibility -->
<a id="schemaamortizedrecurringfee"></a>
<a id="schema_AmortizedRecurringFee"></a>
<a id="tocSamortizedrecurringfee"></a>
<a id="tocsamortizedrecurringfee"></a>

```json
"string"
```

<h2 id="tocS_AmortizedUpfrontFee">AmortizedUpfrontFee</h2>
<!-- backwards compatibility -->
<a id="schemaamortizedupfrontfee"></a>
<a id="schema_AmortizedUpfrontFee"></a>
<a id="tocSamortizedupfrontfee"></a>
<a id="tocsamortizedupfrontfee"></a>

```json
"string"
```

<h2 id="tocS_Anomaly">Anomaly</h2>
<!-- backwards compatibility -->
<a id="schemaanomaly"></a>
<a id="schema_Anomaly"></a>
<a id="tocSanomaly"></a>
<a id="tocsanomaly"></a>

```json
{
  "AnomalyId": {},
  "AnomalyStartDate": {},
  "AnomalyEndDate": {},
  "DimensionValue": {},
  "RootCauses": {},
  "AnomalyScore": {
    "MaxScore": {},
    "CurrentScore": {}
  },
  "Impact": {
    "MaxImpact": {},
    "TotalImpact": {},
    "TotalActualSpend": {},
    "TotalExpectedSpend": {},
    "TotalImpactPercentage": {}
  },
  "MonitorArn": {},
  "Feedback": {}
}
```

An unusual cost pattern. This consists of the detailed metadata and the current status of the anomaly object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyId|object|true|none|none|
|AnomalyStartDate|object|false|none|none|
|AnomalyEndDate|object|false|none|none|
|DimensionValue|object|false|none|none|
|RootCauses|object|false|none|none|
|AnomalyScore|object|true|none|none|
|Impact|object|true|none|none|
|MonitorArn|object|true|none|none|
|Feedback|object|false|none|none|

<h2 id="tocS_Anomalies">Anomalies</h2>
<!-- backwards compatibility -->
<a id="schemaanomalies"></a>
<a id="schema_Anomalies"></a>
<a id="tocSanomalies"></a>
<a id="tocsanomalies"></a>

```json
[
  {
    "AnomalyId": {},
    "AnomalyStartDate": {},
    "AnomalyEndDate": {},
    "DimensionValue": {},
    "RootCauses": {},
    "AnomalyScore": {
      "MaxScore": {},
      "CurrentScore": {}
    },
    "Impact": {
      "MaxImpact": {},
      "TotalImpact": {},
      "TotalActualSpend": {},
      "TotalExpectedSpend": {},
      "TotalImpactPercentage": {}
    },
    "MonitorArn": {},
    "Feedback": {}
  }
]
```

<h2 id="tocS_GenericString">GenericString</h2>
<!-- backwards compatibility -->
<a id="schemagenericstring"></a>
<a id="schema_GenericString"></a>
<a id="tocSgenericstring"></a>
<a id="tocsgenericstring"></a>

```json
"string"
```

<h2 id="tocS_YearMonthDay">YearMonthDay</h2>
<!-- backwards compatibility -->
<a id="schemayearmonthday"></a>
<a id="schema_YearMonthDay"></a>
<a id="tocSyearmonthday"></a>
<a id="tocsyearmonthday"></a>

```json
"string"
```

<h2 id="tocS_RootCauses">RootCauses</h2>
<!-- backwards compatibility -->
<a id="schemarootcauses"></a>
<a id="schema_RootCauses"></a>
<a id="tocSrootcauses"></a>
<a id="tocsrootcauses"></a>

```json
[
  {
    "Service": {},
    "Region": {},
    "LinkedAccount": {},
    "UsageType": {},
    "LinkedAccountName": {}
  }
]
```

<h2 id="tocS_AnomalyScore">AnomalyScore</h2>
<!-- backwards compatibility -->
<a id="schemaanomalyscore"></a>
<a id="schema_AnomalyScore"></a>
<a id="tocSanomalyscore"></a>
<a id="tocsanomalyscore"></a>

```json
{
  "MaxScore": {},
  "CurrentScore": {}
}
```

Quantifies the anomaly. The higher score means that it's more anomalous.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxScore|object|true|none|none|
|CurrentScore|object|true|none|none|

<h2 id="tocS_Impact">Impact</h2>
<!-- backwards compatibility -->
<a id="schemaimpact"></a>
<a id="schema_Impact"></a>
<a id="tocSimpact"></a>
<a id="tocsimpact"></a>

```json
{
  "MaxImpact": {},
  "TotalImpact": {},
  "TotalActualSpend": {},
  "TotalExpectedSpend": {},
  "TotalImpactPercentage": {}
}
```

The dollar value of the anomaly.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxImpact|object|true|none|none|
|TotalImpact|object|false|none|none|
|TotalActualSpend|object|false|none|none|
|TotalExpectedSpend|object|false|none|none|
|TotalImpactPercentage|object|false|none|none|

<h2 id="tocS_AnomalyFeedbackType">AnomalyFeedbackType</h2>
<!-- backwards compatibility -->
<a id="schemaanomalyfeedbacktype"></a>
<a id="schema_AnomalyFeedbackType"></a>
<a id="tocSanomalyfeedbacktype"></a>
<a id="tocsanomalyfeedbacktype"></a>

```json
"YES"
```

<h2 id="tocS_AnomalyDateInterval">AnomalyDateInterval</h2>
<!-- backwards compatibility -->
<a id="schemaanomalydateinterval"></a>
<a id="schema_AnomalyDateInterval"></a>
<a id="tocSanomalydateinterval"></a>
<a id="tocsanomalydateinterval"></a>

```json
{
  "StartDate": {},
  "EndDate": {}
}
```

The time period for an anomaly.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartDate|object|true|none|none|
|EndDate|object|false|none|none|

<h2 id="tocS_MonitorType">MonitorType</h2>
<!-- backwards compatibility -->
<a id="schemamonitortype"></a>
<a id="schema_MonitorType"></a>
<a id="tocSmonitortype"></a>
<a id="tocsmonitortype"></a>

```json
"DIMENSIONAL"
```

<h2 id="tocS_MonitorDimension">MonitorDimension</h2>
<!-- backwards compatibility -->
<a id="schemamonitordimension"></a>
<a id="schema_MonitorDimension"></a>
<a id="tocSmonitordimension"></a>
<a id="tocsmonitordimension"></a>

```json
"SERVICE"
```

<h2 id="tocS_Expression">Expression</h2>
<!-- backwards compatibility -->
<a id="schemaexpression"></a>
<a id="schema_Expression"></a>
<a id="tocSexpression"></a>
<a id="tocsexpression"></a>

```json
{
  "Or": {},
  "And": {},
  "Not": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "Dimensions": {
    "Key": {},
    "Values": {},
    "MatchOptions": {}
  },
  "Tags": {
    "Key": {},
    "Values": {},
    "MatchOptions": {}
  },
  "CostCategories": {
    "Key": "string",
    "Values": {},
    "MatchOptions": {}
  }
}
```

<p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p> <p>Not all <code>Expression</code> types are supported in each API. Refer to the documentation for each specific API to see what is supported.</p> <p>There are two patterns:</p> <ul> <li> <p>Simple dimension values.</p> <ul> <li> <p>There are three types of simple dimension values: <code>CostCategories</code>, <code>Tags</code>, and <code>Dimensions</code>.</p> <ul> <li> <p>Specify the <code>CostCategories</code> field to define a filter that acts on Cost Categories.</p> </li> <li> <p>Specify the <code>Tags</code> field to define a filter that acts on Cost Allocation Tags.</p> </li> <li> <p>Specify the <code>Dimensions</code> field to define a filter that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html"> <code>DimensionValues</code> </a>.</p> </li> </ul> </li> <li> <p>For each filter type, you can set the dimension name and values for the filters that you plan to use.</p> <ul> <li> <p>For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> </li> <li> <p>As shown in the previous example, lists of dimension values are combined with <code>OR</code> when applying the filter.</p> </li> </ul> </li> <li> <p>You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.</p> <ul> <li> <p>For example, you can filter for linked account names that start with “a”.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] } }</code> </p> </li> </ul> </li> </ul> </li> <li> <p>Compound <code>Expression</code> types with logical operations.</p> <ul> <li> <p>You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. By doing this, you can filter by more advanced options.</p> </li> <li> <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> </li> </ul> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error: <code> { "And": [ ... ], "Dimensions": { "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> <p>The following is an example of the corresponding error message: <code>"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"</code> </p> </note> </li> </ul> <note> <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to <code>LINKED_ACCOUNT</code>.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Or|object|false|none|none|
|And|object|false|none|none|
|Not|object|false|none|none|
|Dimensions|object|false|none|none|
|Tags|object|false|none|none|
|CostCategories|object|false|none|none|

<h2 id="tocS_NonNegativeInteger">NonNegativeInteger</h2>
<!-- backwards compatibility -->
<a id="schemanonnegativeinteger"></a>
<a id="schema_NonNegativeInteger"></a>
<a id="tocSnonnegativeinteger"></a>
<a id="tocsnonnegativeinteger"></a>

```json
0
```

<h2 id="tocS_AnomalyMonitor">AnomalyMonitor</h2>
<!-- backwards compatibility -->
<a id="schemaanomalymonitor"></a>
<a id="schema_AnomalyMonitor"></a>
<a id="tocSanomalymonitor"></a>
<a id="tocsanomalymonitor"></a>

```json
{
  "MonitorArn": {},
  "MonitorName": {},
  "CreationDate": {},
  "LastUpdatedDate": {},
  "LastEvaluatedDate": {},
  "MonitorType": {},
  "MonitorDimension": {},
  "MonitorSpecification": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "DimensionalValueCount": {}
}
```

This object continuously inspects your account's cost data for anomalies. It's based on <code>MonitorType</code> and <code>MonitorSpecification</code>. The content consists of detailed metadata and the current status of the monitor object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MonitorArn|object|false|none|none|
|MonitorName|object|true|none|none|
|CreationDate|object|false|none|none|
|LastUpdatedDate|object|false|none|none|
|LastEvaluatedDate|object|false|none|none|
|MonitorType|object|true|none|none|
|MonitorDimension|object|false|none|none|
|MonitorSpecification|[Expression](#schemaexpression)|false|none|<p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p> <p>Not all <code>Expression</code> types are supported in each API. Refer to the documentation for each specific API to see what is supported.</p> <p>There are two patterns:</p> <ul> <li> <p>Simple dimension values.</p> <ul> <li> <p>There are three types of simple dimension values: <code>CostCategories</code>, <code>Tags</code>, and <code>Dimensions</code>.</p> <ul> <li> <p>Specify the <code>CostCategories</code> field to define a filter that acts on Cost Categories.</p> </li> <li> <p>Specify the <code>Tags</code> field to define a filter that acts on Cost Allocation Tags.</p> </li> <li> <p>Specify the <code>Dimensions</code> field to define a filter that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html"> <code>DimensionValues</code> </a>.</p> </li> </ul> </li> <li> <p>For each filter type, you can set the dimension name and values for the filters that you plan to use.</p> <ul> <li> <p>For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> </li> <li> <p>As shown in the previous example, lists of dimension values are combined with <code>OR</code> when applying the filter.</p> </li> </ul> </li> <li> <p>You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.</p> <ul> <li> <p>For example, you can filter for linked account names that start with “a”.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] } }</code> </p> </li> </ul> </li> </ul> </li> <li> <p>Compound <code>Expression</code> types with logical operations.</p> <ul> <li> <p>You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. By doing this, you can filter by more advanced options.</p> </li> <li> <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> </li> </ul> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error: <code> { "And": [ ... ], "Dimensions": { "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> <p>The following is an example of the corresponding error message: <code>"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"</code> </p> </note> </li> </ul> <note> <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to <code>LINKED_ACCOUNT</code>.</p> </note>|
|DimensionalValueCount|object|false|none|none|

<h2 id="tocS_AnomalyMonitors">AnomalyMonitors</h2>
<!-- backwards compatibility -->
<a id="schemaanomalymonitors"></a>
<a id="schema_AnomalyMonitors"></a>
<a id="tocSanomalymonitors"></a>
<a id="tocsanomalymonitors"></a>

```json
[
  {
    "MonitorArn": {},
    "MonitorName": {},
    "CreationDate": {},
    "LastUpdatedDate": {},
    "LastEvaluatedDate": {},
    "MonitorType": {},
    "MonitorDimension": {},
    "MonitorSpecification": {
      "Or": {},
      "And": {},
      "Not": {},
      "Dimensions": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "Tags": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "CostCategories": {
        "Key": "string",
        "Values": {},
        "MatchOptions": {}
      }
    },
    "DimensionalValueCount": {}
  }
]
```

<h2 id="tocS_GenericDouble">GenericDouble</h2>
<!-- backwards compatibility -->
<a id="schemagenericdouble"></a>
<a id="schema_GenericDouble"></a>
<a id="tocSgenericdouble"></a>
<a id="tocsgenericdouble"></a>

```json
0
```

<h2 id="tocS_MonitorArnList">MonitorArnList</h2>
<!-- backwards compatibility -->
<a id="schemamonitorarnlist"></a>
<a id="schema_MonitorArnList"></a>
<a id="tocSmonitorarnlist"></a>
<a id="tocsmonitorarnlist"></a>

```json
[
  "stringstringstringst"
]
```

<h2 id="tocS_Subscribers">Subscribers</h2>
<!-- backwards compatibility -->
<a id="schemasubscribers"></a>
<a id="schema_Subscribers"></a>
<a id="tocSsubscribers"></a>
<a id="tocssubscribers"></a>

```json
[
  {
    "Address": {},
    "Type": {},
    "Status": {}
  }
]
```

<h2 id="tocS_NullableNonNegativeDouble">NullableNonNegativeDouble</h2>
<!-- backwards compatibility -->
<a id="schemanullablenonnegativedouble"></a>
<a id="schema_NullableNonNegativeDouble"></a>
<a id="tocSnullablenonnegativedouble"></a>
<a id="tocsnullablenonnegativedouble"></a>

```json
0
```

<h2 id="tocS_AnomalySubscriptionFrequency">AnomalySubscriptionFrequency</h2>
<!-- backwards compatibility -->
<a id="schemaanomalysubscriptionfrequency"></a>
<a id="schema_AnomalySubscriptionFrequency"></a>
<a id="tocSanomalysubscriptionfrequency"></a>
<a id="tocsanomalysubscriptionfrequency"></a>

```json
"DAILY"
```

<h2 id="tocS_AnomalySubscription">AnomalySubscription</h2>
<!-- backwards compatibility -->
<a id="schemaanomalysubscription"></a>
<a id="schema_AnomalySubscription"></a>
<a id="tocSanomalysubscription"></a>
<a id="tocsanomalysubscription"></a>

```json
{
  "SubscriptionArn": {},
  "AccountId": {},
  "MonitorArnList": {},
  "Subscribers": {},
  "Threshold": {},
  "Frequency": {},
  "SubscriptionName": {},
  "ThresholdExpression": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  }
}
```

The association between a monitor, threshold, and list of subscribers used to deliver notifications about anomalies detected by a monitor that exceeds a threshold. The content consists of the detailed metadata and the current status of the <code>AnomalySubscription</code> object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubscriptionArn|object|false|none|none|
|AccountId|object|false|none|none|
|MonitorArnList|object|true|none|none|
|Subscribers|object|true|none|none|
|Threshold|object|false|none|none|
|Frequency|object|true|none|none|
|SubscriptionName|object|true|none|none|
|ThresholdExpression|object|false|none|none|

<h2 id="tocS_AnomalySubscriptions">AnomalySubscriptions</h2>
<!-- backwards compatibility -->
<a id="schemaanomalysubscriptions"></a>
<a id="schema_AnomalySubscriptions"></a>
<a id="tocSanomalysubscriptions"></a>
<a id="tocsanomalysubscriptions"></a>

```json
[
  {
    "SubscriptionArn": {},
    "AccountId": {},
    "MonitorArnList": {},
    "Subscribers": {},
    "Threshold": {},
    "Frequency": {},
    "SubscriptionName": {},
    "ThresholdExpression": {
      "Or": {},
      "And": {},
      "Not": {},
      "Dimensions": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "Tags": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "CostCategories": {
        "Key": "string",
        "Values": {},
        "MatchOptions": {}
      }
    }
  }
]
```

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_AttributeType">AttributeType</h2>
<!-- backwards compatibility -->
<a id="schemaattributetype"></a>
<a id="schema_AttributeType"></a>
<a id="tocSattributetype"></a>
<a id="tocsattributetype"></a>

```json
"string"
```

<h2 id="tocS_AttributeValue">AttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaattributevalue"></a>
<a id="schema_AttributeValue"></a>
<a id="tocSattributevalue"></a>
<a id="tocsattributevalue"></a>

```json
"string"
```

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
|**additionalProperties**|[AttributeValue](#schemaattributevalue)|false|none|none|

<h2 id="tocS_Context">Context</h2>
<!-- backwards compatibility -->
<a id="schemacontext"></a>
<a id="schema_Context"></a>
<a id="tocScontext"></a>
<a id="tocscontext"></a>

```json
"COST_AND_USAGE"
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

<h2 id="tocS_CostAllocationTagType">CostAllocationTagType</h2>
<!-- backwards compatibility -->
<a id="schemacostallocationtagtype"></a>
<a id="schema_CostAllocationTagType"></a>
<a id="tocScostallocationtagtype"></a>
<a id="tocscostallocationtagtype"></a>

```json
"AWSGenerated"
```

<h2 id="tocS_CostAllocationTagStatus">CostAllocationTagStatus</h2>
<!-- backwards compatibility -->
<a id="schemacostallocationtagstatus"></a>
<a id="schema_CostAllocationTagStatus"></a>
<a id="tocScostallocationtagstatus"></a>
<a id="tocscostallocationtagstatus"></a>

```json
"Active"
```

<h2 id="tocS_CostAllocationTag">CostAllocationTag</h2>
<!-- backwards compatibility -->
<a id="schemacostallocationtag"></a>
<a id="schema_CostAllocationTag"></a>
<a id="tocScostallocationtag"></a>
<a id="tocscostallocationtag"></a>

```json
{
  "TagKey": {},
  "Type": {},
  "Status": {}
}
```

The cost allocation tag structure. This includes detailed metadata for the <code>CostAllocationTag</code> object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagKey|object|true|none|none|
|Type|object|true|none|none|
|Status|object|true|none|none|

<h2 id="tocS_CostAllocationTagKeyList">CostAllocationTagKeyList</h2>
<!-- backwards compatibility -->
<a id="schemacostallocationtagkeylist"></a>
<a id="schema_CostAllocationTagKeyList"></a>
<a id="tocScostallocationtagkeylist"></a>
<a id="tocscostallocationtagkeylist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CostAllocationTagList">CostAllocationTagList</h2>
<!-- backwards compatibility -->
<a id="schemacostallocationtaglist"></a>
<a id="schema_CostAllocationTagList"></a>
<a id="tocScostallocationtaglist"></a>
<a id="tocscostallocationtaglist"></a>

```json
[
  {
    "TagKey": {},
    "Type": {},
    "Status": {}
  }
]
```

<h2 id="tocS_CostAllocationTagStatusEntry">CostAllocationTagStatusEntry</h2>
<!-- backwards compatibility -->
<a id="schemacostallocationtagstatusentry"></a>
<a id="schema_CostAllocationTagStatusEntry"></a>
<a id="tocScostallocationtagstatusentry"></a>
<a id="tocscostallocationtagstatusentry"></a>

```json
{
  "TagKey": {},
  "Status": {}
}
```

The cost allocation tag status. The status of a key can either be active or inactive.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagKey|object|true|none|none|
|Status|object|true|none|none|

<h2 id="tocS_CostAllocationTagStatusList">CostAllocationTagStatusList</h2>
<!-- backwards compatibility -->
<a id="schemacostallocationtagstatuslist"></a>
<a id="schema_CostAllocationTagStatusList"></a>
<a id="tocScostallocationtagstatuslist"></a>
<a id="tocscostallocationtagstatuslist"></a>

```json
[
  {
    "TagKey": {},
    "Status": {}
  }
]
```

<h2 id="tocS_CostAllocationTagsMaxResults">CostAllocationTagsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemacostallocationtagsmaxresults"></a>
<a id="schema_CostAllocationTagsMaxResults"></a>
<a id="tocScostallocationtagsmaxresults"></a>
<a id="tocscostallocationtagsmaxresults"></a>

```json
1
```

<h2 id="tocS_ZonedDateTime">ZonedDateTime</h2>
<!-- backwards compatibility -->
<a id="schemazoneddatetime"></a>
<a id="schema_ZonedDateTime"></a>
<a id="tocSzoneddatetime"></a>
<a id="tocszoneddatetime"></a>

```json
"stringstringstringst"
```

The period of time that you want the usage and costs for.

<h2 id="tocS_CostCategoryName">CostCategoryName</h2>
<!-- backwards compatibility -->
<a id="schemacostcategoryname"></a>
<a id="schema_CostCategoryName"></a>
<a id="tocScostcategoryname"></a>
<a id="tocscostcategoryname"></a>

```json
"string"
```

The unique name of the Cost Category.

<h2 id="tocS_CostCategoryRuleVersion">CostCategoryRuleVersion</h2>
<!-- backwards compatibility -->
<a id="schemacostcategoryruleversion"></a>
<a id="schema_CostCategoryRuleVersion"></a>
<a id="tocScostcategoryruleversion"></a>
<a id="tocscostcategoryruleversion"></a>

```json
"CostCategoryExpression.v1"
```

The rule schema version in this particular Cost Category.

<h2 id="tocS_CostCategoryRulesList">CostCategoryRulesList</h2>
<!-- backwards compatibility -->
<a id="schemacostcategoryruleslist"></a>
<a id="schema_CostCategoryRulesList"></a>
<a id="tocScostcategoryruleslist"></a>
<a id="tocscostcategoryruleslist"></a>

```json
[
  {
    "Value": "string",
    "Rule": {
      "Or": {},
      "And": {},
      "Not": {},
      "Dimensions": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "Tags": {
        "Key": {},
        "Values": {},
        "MatchOptions": {}
      },
      "CostCategories": {
        "Key": "string",
        "Values": {},
        "MatchOptions": {}
      }
    },
    "InheritedValue": {
      "DimensionName": {},
      "DimensionKey": {}
    },
    "Type": {}
  }
]
```

<h2 id="tocS_CostCategorySplitChargeRulesList">CostCategorySplitChargeRulesList</h2>
<!-- backwards compatibility -->
<a id="schemacostcategorysplitchargeruleslist"></a>
<a id="schema_CostCategorySplitChargeRulesList"></a>
<a id="tocScostcategorysplitchargeruleslist"></a>
<a id="tocscostcategorysplitchargeruleslist"></a>

```json
[
  {
    "Source": {},
    "Targets": {},
    "Method": {},
    "Parameters": {}
  }
]
```

<h2 id="tocS_CostCategoryProcessingStatusList">CostCategoryProcessingStatusList</h2>
<!-- backwards compatibility -->
<a id="schemacostcategoryprocessingstatuslist"></a>
<a id="schema_CostCategoryProcessingStatusList"></a>
<a id="tocScostcategoryprocessingstatuslist"></a>
<a id="tocscostcategoryprocessingstatuslist"></a>

```json
[
  {
    "Component": {},
    "Status": {}
  }
]
```

<h2 id="tocS_CostCategoryValue">CostCategoryValue</h2>
<!-- backwards compatibility -->
<a id="schemacostcategoryvalue"></a>
<a id="schema_CostCategoryValue"></a>
<a id="tocScostcategoryvalue"></a>
<a id="tocscostcategoryvalue"></a>

```json
"string"
```

The default value for the cost category.

<h2 id="tocS_CostCategory">CostCategory</h2>
<!-- backwards compatibility -->
<a id="schemacostcategory"></a>
<a id="schema_CostCategory"></a>
<a id="tocScostcategory"></a>
<a id="tocscostcategory"></a>

```json
{
  "CostCategoryArn": {},
  "EffectiveStart": {},
  "EffectiveEnd": {},
  "Name": "string",
  "RuleVersion": "CostCategoryExpression.v1",
  "Rules": {},
  "SplitChargeRules": {},
  "ProcessingStatus": {},
  "DefaultValue": "string"
}
```

The structure of Cost Categories. This includes detailed metadata and the set of rules for the <code>CostCategory</code> object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CostCategoryArn|object|true|none|none|
|EffectiveStart|object|true|none|none|
|EffectiveEnd|object|false|none|none|
|Name|[CostCategoryName](#schemacostcategoryname)|true|none|The unique name of the Cost Category.|
|RuleVersion|[CostCategoryRuleVersion](#schemacostcategoryruleversion)|true|none|The rule schema version in this particular Cost Category.|
|Rules|object|true|none|none|
|SplitChargeRules|object|false|none|none|
|ProcessingStatus|object|false|none|none|
|DefaultValue|[CostCategoryValue](#schemacostcategoryvalue)|false|none|The default value for the cost category.|

#### Enumerated Values

|Property|Value|
|---|---|
|RuleVersion|CostCategoryExpression.v1|

<h2 id="tocS_CostCategoryInheritedValueDimensionName">CostCategoryInheritedValueDimensionName</h2>
<!-- backwards compatibility -->
<a id="schemacostcategoryinheritedvaluedimensionname"></a>
<a id="schema_CostCategoryInheritedValueDimensionName"></a>
<a id="tocScostcategoryinheritedvaluedimensionname"></a>
<a id="tocscostcategoryinheritedvaluedimensionname"></a>

```json
"LINKED_ACCOUNT_NAME"
```

<h2 id="tocS_CostCategoryInheritedValueDimension">CostCategoryInheritedValueDimension</h2>
<!-- backwards compatibility -->
<a id="schemacostcategoryinheritedvaluedimension"></a>
<a id="schema_CostCategoryInheritedValueDimension"></a>
<a id="tocScostcategoryinheritedvaluedimension"></a>
<a id="tocscostcategoryinheritedvaluedimension"></a>

```json
{
  "DimensionName": {},
  "DimensionKey": {}
}
```

When you create or update a cost category, you can define the <code>CostCategoryRule</code> rule type as <code>INHERITED_VALUE</code>. This rule type adds the flexibility to define a rule that dynamically inherits the cost category value from the dimension value that's defined by <code>CostCategoryInheritedValueDimension</code>. For example, suppose that you want to dynamically group costs that are based on the value of a specific tag key. First, choose an inherited value rule type, and then choose the tag dimension and specify the tag key to use.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DimensionName|object|false|none|none|
|DimensionKey|object|false|none|none|

<h2 id="tocS_CostCategoryMaxResults">CostCategoryMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemacostcategorymaxresults"></a>
<a id="schema_CostCategoryMaxResults"></a>
<a id="tocScostcategorymaxresults"></a>
<a id="tocscostcategorymaxresults"></a>

```json
1
```

<h2 id="tocS_CostCategoryNamesList">CostCategoryNamesList</h2>
<!-- backwards compatibility -->
<a id="schemacostcategorynameslist"></a>
<a id="schema_CostCategoryNamesList"></a>
<a id="tocScostcategorynameslist"></a>
<a id="tocscostcategorynameslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CostCategoryStatusComponent">CostCategoryStatusComponent</h2>
<!-- backwards compatibility -->
<a id="schemacostcategorystatuscomponent"></a>
<a id="schema_CostCategoryStatusComponent"></a>
<a id="tocScostcategorystatuscomponent"></a>
<a id="tocscostcategorystatuscomponent"></a>

```json
"COST_EXPLORER"
```

<h2 id="tocS_CostCategoryStatus">CostCategoryStatus</h2>
<!-- backwards compatibility -->
<a id="schemacostcategorystatus"></a>
<a id="schema_CostCategoryStatus"></a>
<a id="tocScostcategorystatus"></a>
<a id="tocscostcategorystatus"></a>

```json
"PROCESSING"
```

<h2 id="tocS_CostCategoryProcessingStatus">CostCategoryProcessingStatus</h2>
<!-- backwards compatibility -->
<a id="schemacostcategoryprocessingstatus"></a>
<a id="schema_CostCategoryProcessingStatus"></a>
<a id="tocScostcategoryprocessingstatus"></a>
<a id="tocscostcategoryprocessingstatus"></a>

```json
{
  "Component": {},
  "Status": {}
}
```

The list of processing statuses for Cost Management products for a specific cost category.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Component|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_CostCategoryValuesList">CostCategoryValuesList</h2>
<!-- backwards compatibility -->
<a id="schemacostcategoryvalueslist"></a>
<a id="schema_CostCategoryValuesList"></a>
<a id="tocScostcategoryvalueslist"></a>
<a id="tocscostcategoryvalueslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CostCategoryReference">CostCategoryReference</h2>
<!-- backwards compatibility -->
<a id="schemacostcategoryreference"></a>
<a id="schema_CostCategoryReference"></a>
<a id="tocScostcategoryreference"></a>
<a id="tocscostcategoryreference"></a>

```json
{
  "CostCategoryArn": {},
  "Name": "string",
  "EffectiveStart": {},
  "EffectiveEnd": {},
  "NumberOfRules": {},
  "ProcessingStatus": {},
  "Values": {},
  "DefaultValue": "string"
}
```

<p>A reference to a Cost Category containing only enough information to identify the Cost Category.</p> <p>You can use this information to retrieve the full Cost Category information using <code>DescribeCostCategory</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CostCategoryArn|object|false|none|none|
|Name|[CostCategoryName](#schemacostcategoryname)|false|none|The unique name of the Cost Category.|
|EffectiveStart|object|false|none|none|
|EffectiveEnd|object|false|none|none|
|NumberOfRules|object|false|none|none|
|ProcessingStatus|object|false|none|none|
|Values|object|false|none|none|
|DefaultValue|[CostCategoryValue](#schemacostcategoryvalue)|false|none|The default value for the cost category.|

<h2 id="tocS_CostCategoryReferencesList">CostCategoryReferencesList</h2>
<!-- backwards compatibility -->
<a id="schemacostcategoryreferenceslist"></a>
<a id="schema_CostCategoryReferencesList"></a>
<a id="tocScostcategoryreferenceslist"></a>
<a id="tocscostcategoryreferenceslist"></a>

```json
[
  {
    "CostCategoryArn": {},
    "Name": "string",
    "EffectiveStart": {},
    "EffectiveEnd": {},
    "NumberOfRules": {},
    "ProcessingStatus": {},
    "Values": {},
    "DefaultValue": "string"
  }
]
```

<h2 id="tocS_CostCategoryRuleType">CostCategoryRuleType</h2>
<!-- backwards compatibility -->
<a id="schemacostcategoryruletype"></a>
<a id="schema_CostCategoryRuleType"></a>
<a id="tocScostcategoryruletype"></a>
<a id="tocscostcategoryruletype"></a>

```json
"REGULAR"
```

<h2 id="tocS_CostCategoryRule">CostCategoryRule</h2>
<!-- backwards compatibility -->
<a id="schemacostcategoryrule"></a>
<a id="schema_CostCategoryRule"></a>
<a id="tocScostcategoryrule"></a>
<a id="tocscostcategoryrule"></a>

```json
{
  "Value": "string",
  "Rule": {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  },
  "InheritedValue": {
    "DimensionName": {},
    "DimensionKey": {}
  },
  "Type": {}
}
```

Rules are processed in order. If there are multiple rules that match the line item, then the first rule to match is used to determine that Cost Category value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|[CostCategoryValue](#schemacostcategoryvalue)|false|none|The default value for the cost category.|
|Rule|object|false|none|none|
|InheritedValue|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_CostCategorySplitChargeMethod">CostCategorySplitChargeMethod</h2>
<!-- backwards compatibility -->
<a id="schemacostcategorysplitchargemethod"></a>
<a id="schema_CostCategorySplitChargeMethod"></a>
<a id="tocScostcategorysplitchargemethod"></a>
<a id="tocscostcategorysplitchargemethod"></a>

```json
"FIXED"
```

<h2 id="tocS_CostCategorySplitChargeRuleTargetsList">CostCategorySplitChargeRuleTargetsList</h2>
<!-- backwards compatibility -->
<a id="schemacostcategorysplitchargeruletargetslist"></a>
<a id="schema_CostCategorySplitChargeRuleTargetsList"></a>
<a id="tocScostcategorysplitchargeruletargetslist"></a>
<a id="tocscostcategorysplitchargeruletargetslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CostCategorySplitChargeRuleParametersList">CostCategorySplitChargeRuleParametersList</h2>
<!-- backwards compatibility -->
<a id="schemacostcategorysplitchargeruleparameterslist"></a>
<a id="schema_CostCategorySplitChargeRuleParametersList"></a>
<a id="tocScostcategorysplitchargeruleparameterslist"></a>
<a id="tocscostcategorysplitchargeruleparameterslist"></a>

```json
[
  {
    "Type": {},
    "Values": {}
  }
]
```

<h2 id="tocS_CostCategorySplitChargeRule">CostCategorySplitChargeRule</h2>
<!-- backwards compatibility -->
<a id="schemacostcategorysplitchargerule"></a>
<a id="schema_CostCategorySplitChargeRule"></a>
<a id="tocScostcategorysplitchargerule"></a>
<a id="tocscostcategorysplitchargerule"></a>

```json
{
  "Source": {},
  "Targets": {},
  "Method": {},
  "Parameters": {}
}
```

Use the split charge rule to split the cost of one Cost Category value across several other target values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Source|object|true|none|none|
|Targets|object|true|none|none|
|Method|object|true|none|none|
|Parameters|object|false|none|none|

<h2 id="tocS_CostCategorySplitChargeRuleParameterType">CostCategorySplitChargeRuleParameterType</h2>
<!-- backwards compatibility -->
<a id="schemacostcategorysplitchargeruleparametertype"></a>
<a id="schema_CostCategorySplitChargeRuleParameterType"></a>
<a id="tocScostcategorysplitchargeruleparametertype"></a>
<a id="tocscostcategorysplitchargeruleparametertype"></a>

```json
"ALLOCATION_PERCENTAGES"
```

<h2 id="tocS_CostCategorySplitChargeRuleParameterValuesList">CostCategorySplitChargeRuleParameterValuesList</h2>
<!-- backwards compatibility -->
<a id="schemacostcategorysplitchargeruleparametervalueslist"></a>
<a id="schema_CostCategorySplitChargeRuleParameterValuesList"></a>
<a id="tocScostcategorysplitchargeruleparametervalueslist"></a>
<a id="tocscostcategorysplitchargeruleparametervalueslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CostCategorySplitChargeRuleParameter">CostCategorySplitChargeRuleParameter</h2>
<!-- backwards compatibility -->
<a id="schemacostcategorysplitchargeruleparameter"></a>
<a id="schema_CostCategorySplitChargeRuleParameter"></a>
<a id="tocScostcategorysplitchargeruleparameter"></a>
<a id="tocscostcategorysplitchargeruleparameter"></a>

```json
{
  "Type": {},
  "Values": {}
}
```

The parameters for a split charge method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|Values|object|true|none|none|

<h2 id="tocS_Values">Values</h2>
<!-- backwards compatibility -->
<a id="schemavalues"></a>
<a id="schema_Values"></a>
<a id="tocSvalues"></a>
<a id="tocsvalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MatchOptions">MatchOptions</h2>
<!-- backwards compatibility -->
<a id="schemamatchoptions"></a>
<a id="schema_MatchOptions"></a>
<a id="tocSmatchoptions"></a>
<a id="tocsmatchoptions"></a>

```json
[
  "EQUALS"
]
```

<h2 id="tocS_CostCategoryValues">CostCategoryValues</h2>
<!-- backwards compatibility -->
<a id="schemacostcategoryvalues"></a>
<a id="schema_CostCategoryValues"></a>
<a id="tocScostcategoryvalues"></a>
<a id="tocscostcategoryvalues"></a>

```json
{
  "Key": "string",
  "Values": {},
  "MatchOptions": {}
}
```

<p>The Cost Categories values used for filtering the costs.</p> <p>If <code>Values</code> and <code>Key</code> are not specified, the <code>ABSENT</code> <code>MatchOption</code> is applied to all Cost Categories. That is, it filters on resources that aren't mapped to any Cost Categories.</p> <p>If <code>Values</code> is provided and <code>Key</code> isn't specified, the <code>ABSENT</code> <code>MatchOption</code> is applied to the Cost Categories <code>Key</code> only. That is, it filters on resources without the given Cost Categories key.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|[CostCategoryName](#schemacostcategoryname)|false|none|The unique name of the Cost Category.|
|Values|object|false|none|none|
|MatchOptions|object|false|none|none|

<h2 id="tocS_CoverageHours">CoverageHours</h2>
<!-- backwards compatibility -->
<a id="schemacoveragehours"></a>
<a id="schema_CoverageHours"></a>
<a id="tocScoveragehours"></a>
<a id="tocscoveragehours"></a>

```json
{
  "OnDemandHours": {},
  "ReservedHours": {},
  "TotalRunningHours": {},
  "CoverageHoursPercentage": {}
}
```

How long a running instance either used a reservation or was On-Demand.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OnDemandHours|object|false|none|none|
|ReservedHours|object|false|none|none|
|TotalRunningHours|object|false|none|none|
|CoverageHoursPercentage|object|false|none|none|

<h2 id="tocS_CoverageNormalizedUnits">CoverageNormalizedUnits</h2>
<!-- backwards compatibility -->
<a id="schemacoveragenormalizedunits"></a>
<a id="schema_CoverageNormalizedUnits"></a>
<a id="tocScoveragenormalizedunits"></a>
<a id="tocscoveragenormalizedunits"></a>

```json
{
  "OnDemandNormalizedUnits": {},
  "ReservedNormalizedUnits": {},
  "TotalRunningNormalizedUnits": {},
  "CoverageNormalizedUnitsPercentage": {}
}
```

<p>The amount of instance usage, in normalized units. You can use normalized units to see your EC2 usage for multiple sizes of instances in a uniform way. For example, suppose that you run an xlarge instance and a 2xlarge instance. If you run both instances for the same amount of time, the 2xlarge instance uses twice as much of your reservation as the xlarge instance, even though both instances show only one instance-hour. When you use normalized units instead of instance-hours, the xlarge instance used 8 normalized units, and the 2xlarge instance used 16 normalized units.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html">Modifying Reserved Instances</a> in the <i>Amazon Elastic Compute Cloud User Guide for Linux Instances</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OnDemandNormalizedUnits|object|false|none|none|
|ReservedNormalizedUnits|object|false|none|none|
|TotalRunningNormalizedUnits|object|false|none|none|
|CoverageNormalizedUnitsPercentage|object|false|none|none|

<h2 id="tocS_CoverageCost">CoverageCost</h2>
<!-- backwards compatibility -->
<a id="schemacoveragecost"></a>
<a id="schema_CoverageCost"></a>
<a id="tocScoveragecost"></a>
<a id="tocscoveragecost"></a>

```json
{
  "OnDemandCost": {}
}
```

How much it costs to run an instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OnDemandCost|object|false|none|none|

<h2 id="tocS_Coverage">Coverage</h2>
<!-- backwards compatibility -->
<a id="schemacoverage"></a>
<a id="schema_Coverage"></a>
<a id="tocScoverage"></a>
<a id="tocscoverage"></a>

```json
{
  "CoverageHours": {
    "OnDemandHours": {},
    "ReservedHours": {},
    "TotalRunningHours": {},
    "CoverageHoursPercentage": {}
  },
  "CoverageNormalizedUnits": {
    "OnDemandNormalizedUnits": {},
    "ReservedNormalizedUnits": {},
    "TotalRunningNormalizedUnits": {},
    "CoverageNormalizedUnitsPercentage": {}
  },
  "CoverageCost": {
    "OnDemandCost": {}
  }
}
```

The amount of instance usage that a reservation covered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoverageHours|object|false|none|none|
|CoverageNormalizedUnits|object|false|none|none|
|CoverageCost|object|false|none|none|

<h2 id="tocS_DateInterval">DateInterval</h2>
<!-- backwards compatibility -->
<a id="schemadateinterval"></a>
<a id="schema_DateInterval"></a>
<a id="tocSdateinterval"></a>
<a id="tocsdateinterval"></a>

```json
{
  "Start": {},
  "End": {}
}
```

The time period of the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Start|object|true|none|none|
|End|object|true|none|none|

<h2 id="tocS_ReservationCoverageGroups">ReservationCoverageGroups</h2>
<!-- backwards compatibility -->
<a id="schemareservationcoveragegroups"></a>
<a id="schema_ReservationCoverageGroups"></a>
<a id="tocSreservationcoveragegroups"></a>
<a id="tocsreservationcoveragegroups"></a>

```json
[
  {
    "Attributes": {
      "property1": "string",
      "property2": "string"
    },
    "Coverage": {
      "CoverageHours": {
        "OnDemandHours": {},
        "ReservedHours": {},
        "TotalRunningHours": {},
        "CoverageHoursPercentage": {}
      },
      "CoverageNormalizedUnits": {
        "OnDemandNormalizedUnits": {},
        "ReservedNormalizedUnits": {},
        "TotalRunningNormalizedUnits": {},
        "CoverageNormalizedUnitsPercentage": {}
      },
      "CoverageCost": {
        "OnDemandCost": {}
      }
    }
  }
]
```

<h2 id="tocS_CoverageByTime">CoverageByTime</h2>
<!-- backwards compatibility -->
<a id="schemacoveragebytime"></a>
<a id="schema_CoverageByTime"></a>
<a id="tocScoveragebytime"></a>
<a id="tocscoveragebytime"></a>

```json
{
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "Groups": {},
  "Total": {
    "CoverageHours": {
      "OnDemandHours": {},
      "ReservedHours": {},
      "TotalRunningHours": {},
      "CoverageHoursPercentage": {}
    },
    "CoverageNormalizedUnits": {
      "OnDemandNormalizedUnits": {},
      "ReservedNormalizedUnits": {},
      "TotalRunningNormalizedUnits": {},
      "CoverageNormalizedUnitsPercentage": {}
    },
    "CoverageCost": {
      "OnDemandCost": {}
    }
  }
}
```

Reservation coverage for a specified period, in hours.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimePeriod|object|false|none|none|
|Groups|object|false|none|none|
|Total|object|false|none|none|

<h2 id="tocS_OnDemandCost">OnDemandCost</h2>
<!-- backwards compatibility -->
<a id="schemaondemandcost"></a>
<a id="schema_OnDemandCost"></a>
<a id="tocSondemandcost"></a>
<a id="tocsondemandcost"></a>

```json
"string"
```

<h2 id="tocS_OnDemandHours">OnDemandHours</h2>
<!-- backwards compatibility -->
<a id="schemaondemandhours"></a>
<a id="schema_OnDemandHours"></a>
<a id="tocSondemandhours"></a>
<a id="tocsondemandhours"></a>

```json
"string"
```

<h2 id="tocS_ReservedHours">ReservedHours</h2>
<!-- backwards compatibility -->
<a id="schemareservedhours"></a>
<a id="schema_ReservedHours"></a>
<a id="tocSreservedhours"></a>
<a id="tocsreservedhours"></a>

```json
"string"
```

<h2 id="tocS_TotalRunningHours">TotalRunningHours</h2>
<!-- backwards compatibility -->
<a id="schematotalrunninghours"></a>
<a id="schema_TotalRunningHours"></a>
<a id="tocStotalrunninghours"></a>
<a id="tocstotalrunninghours"></a>

```json
"string"
```

<h2 id="tocS_CoverageHoursPercentage">CoverageHoursPercentage</h2>
<!-- backwards compatibility -->
<a id="schemacoveragehourspercentage"></a>
<a id="schema_CoverageHoursPercentage"></a>
<a id="tocScoveragehourspercentage"></a>
<a id="tocscoveragehourspercentage"></a>

```json
"string"
```

<h2 id="tocS_OnDemandNormalizedUnits">OnDemandNormalizedUnits</h2>
<!-- backwards compatibility -->
<a id="schemaondemandnormalizedunits"></a>
<a id="schema_OnDemandNormalizedUnits"></a>
<a id="tocSondemandnormalizedunits"></a>
<a id="tocsondemandnormalizedunits"></a>

```json
"string"
```

<h2 id="tocS_ReservedNormalizedUnits">ReservedNormalizedUnits</h2>
<!-- backwards compatibility -->
<a id="schemareservednormalizedunits"></a>
<a id="schema_ReservedNormalizedUnits"></a>
<a id="tocSreservednormalizedunits"></a>
<a id="tocsreservednormalizedunits"></a>

```json
"string"
```

<h2 id="tocS_TotalRunningNormalizedUnits">TotalRunningNormalizedUnits</h2>
<!-- backwards compatibility -->
<a id="schematotalrunningnormalizedunits"></a>
<a id="schema_TotalRunningNormalizedUnits"></a>
<a id="tocStotalrunningnormalizedunits"></a>
<a id="tocstotalrunningnormalizedunits"></a>

```json
"string"
```

<h2 id="tocS_CoverageNormalizedUnitsPercentage">CoverageNormalizedUnitsPercentage</h2>
<!-- backwards compatibility -->
<a id="schemacoveragenormalizedunitspercentage"></a>
<a id="schema_CoverageNormalizedUnitsPercentage"></a>
<a id="tocScoveragenormalizedunitspercentage"></a>
<a id="tocscoveragenormalizedunitspercentage"></a>

```json
"string"
```

<h2 id="tocS_CoveragesByTime">CoveragesByTime</h2>
<!-- backwards compatibility -->
<a id="schemacoveragesbytime"></a>
<a id="schema_CoveragesByTime"></a>
<a id="tocScoveragesbytime"></a>
<a id="tocscoveragesbytime"></a>

```json
[
  {
    "TimePeriod": {
      "Start": {},
      "End": {}
    },
    "Groups": {},
    "Total": {
      "CoverageHours": {
        "OnDemandHours": {},
        "ReservedHours": {},
        "TotalRunningHours": {},
        "CoverageHoursPercentage": {}
      },
      "CoverageNormalizedUnits": {
        "OnDemandNormalizedUnits": {},
        "ReservedNormalizedUnits": {},
        "TotalRunningNormalizedUnits": {},
        "CoverageNormalizedUnitsPercentage": {}
      },
      "CoverageCost": {
        "OnDemandCost": {}
      }
    }
  }
]
```

<h2 id="tocS_ResourceTagList">ResourceTagList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetaglist"></a>
<a id="schema_ResourceTagList"></a>
<a id="tocSresourcetaglist"></a>
<a id="tocsresourcetaglist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_TagValuesList">TagValuesList</h2>
<!-- backwards compatibility -->
<a id="schematagvalueslist"></a>
<a id="schema_TagValuesList"></a>
<a id="tocStagvalueslist"></a>
<a id="tocstagvalueslist"></a>

```json
[
  {
    "Key": {},
    "Values": {},
    "MatchOptions": {}
  }
]
```

<h2 id="tocS_ResourceDetails">ResourceDetails</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedetails"></a>
<a id="schema_ResourceDetails"></a>
<a id="tocSresourcedetails"></a>
<a id="tocsresourcedetails"></a>

```json
{
  "EC2ResourceDetails": {
    "HourlyOnDemandRate": {},
    "InstanceType": {},
    "Platform": {},
    "Region": {},
    "Sku": {},
    "Memory": {},
    "NetworkPerformance": {},
    "Storage": {},
    "Vcpu": {}
  }
}
```

Details for the resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EC2ResourceDetails|object|false|none|none|

<h2 id="tocS_ResourceUtilization">ResourceUtilization</h2>
<!-- backwards compatibility -->
<a id="schemaresourceutilization"></a>
<a id="schema_ResourceUtilization"></a>
<a id="tocSresourceutilization"></a>
<a id="tocsresourceutilization"></a>

```json
{
  "EC2ResourceUtilization": {
    "MaxCpuUtilizationPercentage": {},
    "MaxMemoryUtilizationPercentage": {},
    "MaxStorageUtilizationPercentage": {},
    "EBSResourceUtilization": {
      "EbsReadOpsPerSecond": {},
      "EbsWriteOpsPerSecond": {},
      "EbsReadBytesPerSecond": {},
      "EbsWriteBytesPerSecond": {}
    },
    "DiskResourceUtilization": {
      "DiskReadOpsPerSecond": {},
      "DiskWriteOpsPerSecond": {},
      "DiskReadBytesPerSecond": {},
      "DiskWriteBytesPerSecond": {}
    },
    "NetworkResourceUtilization": {
      "NetworkInBytesPerSecond": {},
      "NetworkOutBytesPerSecond": {},
      "NetworkPacketsInPerSecond": {},
      "NetworkPacketsOutPerSecond": {}
    }
  }
}
```

Resource utilization of current resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EC2ResourceUtilization|object|false|none|none|

<h2 id="tocS_CurrentInstance">CurrentInstance</h2>
<!-- backwards compatibility -->
<a id="schemacurrentinstance"></a>
<a id="schema_CurrentInstance"></a>
<a id="tocScurrentinstance"></a>
<a id="tocscurrentinstance"></a>

```json
{
  "ResourceId": {},
  "InstanceName": {},
  "Tags": {},
  "ResourceDetails": {
    "EC2ResourceDetails": {
      "HourlyOnDemandRate": {},
      "InstanceType": {},
      "Platform": {},
      "Region": {},
      "Sku": {},
      "Memory": {},
      "NetworkPerformance": {},
      "Storage": {},
      "Vcpu": {}
    }
  },
  "ResourceUtilization": {
    "EC2ResourceUtilization": {
      "MaxCpuUtilizationPercentage": {},
      "MaxMemoryUtilizationPercentage": {},
      "MaxStorageUtilizationPercentage": {},
      "EBSResourceUtilization": {
        "EbsReadOpsPerSecond": {},
        "EbsWriteOpsPerSecond": {},
        "EbsReadBytesPerSecond": {},
        "EbsWriteBytesPerSecond": {}
      },
      "DiskResourceUtilization": {
        "DiskReadOpsPerSecond": {},
        "DiskWriteOpsPerSecond": {},
        "DiskReadBytesPerSecond": {},
        "DiskWriteBytesPerSecond": {}
      },
      "NetworkResourceUtilization": {
        "NetworkInBytesPerSecond": {},
        "NetworkOutBytesPerSecond": {},
        "NetworkPacketsInPerSecond": {},
        "NetworkPacketsOutPerSecond": {}
      }
    }
  },
  "ReservationCoveredHoursInLookbackPeriod": {},
  "SavingsPlansCoveredHoursInLookbackPeriod": {},
  "OnDemandHoursInLookbackPeriod": {},
  "TotalRunningHoursInLookbackPeriod": {},
  "MonthlyCost": {},
  "CurrencyCode": {}
}
```

Context about the current instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|false|none|none|
|InstanceName|object|false|none|none|
|Tags|object|false|none|none|
|ResourceDetails|object|false|none|none|
|ResourceUtilization|object|false|none|none|
|ReservationCoveredHoursInLookbackPeriod|object|false|none|none|
|SavingsPlansCoveredHoursInLookbackPeriod|object|false|none|none|
|OnDemandHoursInLookbackPeriod|object|false|none|none|
|TotalRunningHoursInLookbackPeriod|object|false|none|none|
|MonthlyCost|object|false|none|none|
|CurrencyCode|object|false|none|none|

<h2 id="tocS_Dimension">Dimension</h2>
<!-- backwards compatibility -->
<a id="schemadimension"></a>
<a id="schema_Dimension"></a>
<a id="tocSdimension"></a>
<a id="tocsdimension"></a>

```json
"AZ"
```

<h2 id="tocS_DimensionValues">DimensionValues</h2>
<!-- backwards compatibility -->
<a id="schemadimensionvalues"></a>
<a id="schema_DimensionValues"></a>
<a id="tocSdimensionvalues"></a>
<a id="tocsdimensionvalues"></a>

```json
{
  "Key": {},
  "Values": {},
  "MatchOptions": {}
}
```

The metadata that you can use to filter and group your results. You can use <code>GetDimensionValues</code> to find specific values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Values|object|false|none|none|
|MatchOptions|object|false|none|none|

<h2 id="tocS_Value">Value</h2>
<!-- backwards compatibility -->
<a id="schemavalue"></a>
<a id="schema_Value"></a>
<a id="tocSvalue"></a>
<a id="tocsvalue"></a>

```json
"string"
```

<h2 id="tocS_DimensionValuesWithAttributes">DimensionValuesWithAttributes</h2>
<!-- backwards compatibility -->
<a id="schemadimensionvalueswithattributes"></a>
<a id="schema_DimensionValuesWithAttributes"></a>
<a id="tocSdimensionvalueswithattributes"></a>
<a id="tocsdimensionvalueswithattributes"></a>

```json
{
  "Value": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

The metadata of a specific type that you can use to filter and group your results. You can use <code>GetDimensionValues</code> to find specific values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|false|none|none|
|Attributes|object|false|none|none|

<h2 id="tocS_DimensionValuesWithAttributesList">DimensionValuesWithAttributesList</h2>
<!-- backwards compatibility -->
<a id="schemadimensionvalueswithattributeslist"></a>
<a id="schema_DimensionValuesWithAttributesList"></a>
<a id="tocSdimensionvalueswithattributeslist"></a>
<a id="tocsdimensionvalueswithattributeslist"></a>

```json
[
  {
    "Value": {},
    "Attributes": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_DiskResourceUtilization">DiskResourceUtilization</h2>
<!-- backwards compatibility -->
<a id="schemadiskresourceutilization"></a>
<a id="schema_DiskResourceUtilization"></a>
<a id="tocSdiskresourceutilization"></a>
<a id="tocsdiskresourceutilization"></a>

```json
{
  "DiskReadOpsPerSecond": {},
  "DiskWriteOpsPerSecond": {},
  "DiskReadBytesPerSecond": {},
  "DiskWriteBytesPerSecond": {}
}
```

The field that contains a list of disk (local storage) metrics that are associated with the current instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DiskReadOpsPerSecond|object|false|none|none|
|DiskWriteOpsPerSecond|object|false|none|none|
|DiskReadBytesPerSecond|object|false|none|none|
|DiskWriteBytesPerSecond|object|false|none|none|

<h2 id="tocS_EBSResourceUtilization">EBSResourceUtilization</h2>
<!-- backwards compatibility -->
<a id="schemaebsresourceutilization"></a>
<a id="schema_EBSResourceUtilization"></a>
<a id="tocSebsresourceutilization"></a>
<a id="tocsebsresourceutilization"></a>

```json
{
  "EbsReadOpsPerSecond": {},
  "EbsWriteOpsPerSecond": {},
  "EbsReadBytesPerSecond": {},
  "EbsWriteBytesPerSecond": {}
}
```

The EBS field that contains a list of EBS metrics that are associated with the current instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EbsReadOpsPerSecond|object|false|none|none|
|EbsWriteOpsPerSecond|object|false|none|none|
|EbsReadBytesPerSecond|object|false|none|none|
|EbsWriteBytesPerSecond|object|false|none|none|

<h2 id="tocS_GenericBoolean">GenericBoolean</h2>
<!-- backwards compatibility -->
<a id="schemagenericboolean"></a>
<a id="schema_GenericBoolean"></a>
<a id="tocSgenericboolean"></a>
<a id="tocsgenericboolean"></a>

```json
true
```

<h2 id="tocS_EC2InstanceDetails">EC2InstanceDetails</h2>
<!-- backwards compatibility -->
<a id="schemaec2instancedetails"></a>
<a id="schema_EC2InstanceDetails"></a>
<a id="tocSec2instancedetails"></a>
<a id="tocsec2instancedetails"></a>

```json
{
  "Family": {},
  "InstanceType": {},
  "Region": {},
  "AvailabilityZone": {},
  "Platform": {},
  "Tenancy": {},
  "CurrentGeneration": {},
  "SizeFlexEligible": {}
}
```

Details about the Amazon EC2 instances that Amazon Web Services recommends that you purchase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Family|object|false|none|none|
|InstanceType|object|false|none|none|
|Region|object|false|none|none|
|AvailabilityZone|object|false|none|none|
|Platform|object|false|none|none|
|Tenancy|object|false|none|none|
|CurrentGeneration|object|false|none|none|
|SizeFlexEligible|object|false|none|none|

<h2 id="tocS_EC2ResourceDetails">EC2ResourceDetails</h2>
<!-- backwards compatibility -->
<a id="schemaec2resourcedetails"></a>
<a id="schema_EC2ResourceDetails"></a>
<a id="tocSec2resourcedetails"></a>
<a id="tocsec2resourcedetails"></a>

```json
{
  "HourlyOnDemandRate": {},
  "InstanceType": {},
  "Platform": {},
  "Region": {},
  "Sku": {},
  "Memory": {},
  "NetworkPerformance": {},
  "Storage": {},
  "Vcpu": {}
}
```

Details on the Amazon EC2 Resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HourlyOnDemandRate|object|false|none|none|
|InstanceType|object|false|none|none|
|Platform|object|false|none|none|
|Region|object|false|none|none|
|Sku|object|false|none|none|
|Memory|object|false|none|none|
|NetworkPerformance|object|false|none|none|
|Storage|object|false|none|none|
|Vcpu|object|false|none|none|

<h2 id="tocS_NetworkResourceUtilization">NetworkResourceUtilization</h2>
<!-- backwards compatibility -->
<a id="schemanetworkresourceutilization"></a>
<a id="schema_NetworkResourceUtilization"></a>
<a id="tocSnetworkresourceutilization"></a>
<a id="tocsnetworkresourceutilization"></a>

```json
{
  "NetworkInBytesPerSecond": {},
  "NetworkOutBytesPerSecond": {},
  "NetworkPacketsInPerSecond": {},
  "NetworkPacketsOutPerSecond": {}
}
```

The network field that contains a list of network metrics that are associated with the current instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NetworkInBytesPerSecond|object|false|none|none|
|NetworkOutBytesPerSecond|object|false|none|none|
|NetworkPacketsInPerSecond|object|false|none|none|
|NetworkPacketsOutPerSecond|object|false|none|none|

<h2 id="tocS_EC2ResourceUtilization">EC2ResourceUtilization</h2>
<!-- backwards compatibility -->
<a id="schemaec2resourceutilization"></a>
<a id="schema_EC2ResourceUtilization"></a>
<a id="tocSec2resourceutilization"></a>
<a id="tocsec2resourceutilization"></a>

```json
{
  "MaxCpuUtilizationPercentage": {},
  "MaxMemoryUtilizationPercentage": {},
  "MaxStorageUtilizationPercentage": {},
  "EBSResourceUtilization": {
    "EbsReadOpsPerSecond": {},
    "EbsWriteOpsPerSecond": {},
    "EbsReadBytesPerSecond": {},
    "EbsWriteBytesPerSecond": {}
  },
  "DiskResourceUtilization": {
    "DiskReadOpsPerSecond": {},
    "DiskWriteOpsPerSecond": {},
    "DiskReadBytesPerSecond": {},
    "DiskWriteBytesPerSecond": {}
  },
  "NetworkResourceUtilization": {
    "NetworkInBytesPerSecond": {},
    "NetworkOutBytesPerSecond": {},
    "NetworkPacketsInPerSecond": {},
    "NetworkPacketsOutPerSecond": {}
  }
}
```

Utilization metrics for the instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxCpuUtilizationPercentage|object|false|none|none|
|MaxMemoryUtilizationPercentage|object|false|none|none|
|MaxStorageUtilizationPercentage|object|false|none|none|
|EBSResourceUtilization|object|false|none|none|
|DiskResourceUtilization|object|false|none|none|
|NetworkResourceUtilization|object|false|none|none|

<h2 id="tocS_OfferingClass">OfferingClass</h2>
<!-- backwards compatibility -->
<a id="schemaofferingclass"></a>
<a id="schema_OfferingClass"></a>
<a id="tocSofferingclass"></a>
<a id="tocsofferingclass"></a>

```json
"STANDARD"
```

<h2 id="tocS_EC2Specification">EC2Specification</h2>
<!-- backwards compatibility -->
<a id="schemaec2specification"></a>
<a id="schema_EC2Specification"></a>
<a id="tocSec2specification"></a>
<a id="tocsec2specification"></a>

```json
{
  "OfferingClass": {}
}
```

The Amazon EC2 hardware specifications that you want Amazon Web Services to provide recommendations for.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OfferingClass|object|false|none|none|

<h2 id="tocS_ESInstanceDetails">ESInstanceDetails</h2>
<!-- backwards compatibility -->
<a id="schemaesinstancedetails"></a>
<a id="schema_ESInstanceDetails"></a>
<a id="tocSesinstancedetails"></a>
<a id="tocsesinstancedetails"></a>

```json
{
  "InstanceClass": {},
  "InstanceSize": {},
  "Region": {},
  "CurrentGeneration": {},
  "SizeFlexEligible": {}
}
```

Details about the Amazon OpenSearch Service instances that Amazon Web Services recommends that you purchase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceClass|object|false|none|none|
|InstanceSize|object|false|none|none|
|Region|object|false|none|none|
|CurrentGeneration|object|false|none|none|
|SizeFlexEligible|object|false|none|none|

<h2 id="tocS_ElastiCacheInstanceDetails">ElastiCacheInstanceDetails</h2>
<!-- backwards compatibility -->
<a id="schemaelasticacheinstancedetails"></a>
<a id="schema_ElastiCacheInstanceDetails"></a>
<a id="tocSelasticacheinstancedetails"></a>
<a id="tocselasticacheinstancedetails"></a>

```json
{
  "Family": {},
  "NodeType": {},
  "Region": {},
  "ProductDescription": {},
  "CurrentGeneration": {},
  "SizeFlexEligible": {}
}
```

Details about the Amazon ElastiCache instances that Amazon Web Services recommends that you purchase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Family|object|false|none|none|
|NodeType|object|false|none|none|
|Region|object|false|none|none|
|ProductDescription|object|false|none|none|
|CurrentGeneration|object|false|none|none|
|SizeFlexEligible|object|false|none|none|

<h2 id="tocS_Entity">Entity</h2>
<!-- backwards compatibility -->
<a id="schemaentity"></a>
<a id="schema_Entity"></a>
<a id="tocSentity"></a>
<a id="tocsentity"></a>

```json
"string"
```

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
"string"
```

<h2 id="tocS_Estimated">Estimated</h2>
<!-- backwards compatibility -->
<a id="schemaestimated"></a>
<a id="schema_Estimated"></a>
<a id="tocSestimated"></a>
<a id="tocsestimated"></a>

```json
true
```

<h2 id="tocS_Expressions">Expressions</h2>
<!-- backwards compatibility -->
<a id="schemaexpressions"></a>
<a id="schema_Expressions"></a>
<a id="tocSexpressions"></a>
<a id="tocsexpressions"></a>

```json
[
  {
    "Or": {},
    "And": {},
    "Not": {},
    "Dimensions": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "Tags": {
      "Key": {},
      "Values": {},
      "MatchOptions": {}
    },
    "CostCategories": {
      "Key": "string",
      "Values": {},
      "MatchOptions": {}
    }
  }
]
```

<h2 id="tocS_TagValues">TagValues</h2>
<!-- backwards compatibility -->
<a id="schematagvalues"></a>
<a id="schema_TagValues"></a>
<a id="tocStagvalues"></a>
<a id="tocstagvalues"></a>

```json
{
  "Key": {},
  "Values": {},
  "MatchOptions": {}
}
```

<p>The values that are available for a tag.</p> <p>If <code>Values</code> and <code>Key</code> aren't specified, the <code>ABSENT</code> <code>MatchOption</code> is applied to all tags. That is, it's filtered on resources with no tags.</p> <p>If <code>Key</code> is provided and <code>Values</code> isn't specified, the <code>ABSENT</code> <code>MatchOption</code> is applied to the tag <code>Key</code> only. That is, it's filtered on resources without the given tag key.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Values|object|false|none|none|
|MatchOptions|object|false|none|none|

<h2 id="tocS_FindingReasonCode">FindingReasonCode</h2>
<!-- backwards compatibility -->
<a id="schemafindingreasoncode"></a>
<a id="schema_FindingReasonCode"></a>
<a id="tocSfindingreasoncode"></a>
<a id="tocsfindingreasoncode"></a>

```json
"CPU_OVER_PROVISIONED"
```

<h2 id="tocS_FindingReasonCodes">FindingReasonCodes</h2>
<!-- backwards compatibility -->
<a id="schemafindingreasoncodes"></a>
<a id="schema_FindingReasonCodes"></a>
<a id="tocSfindingreasoncodes"></a>
<a id="tocsfindingreasoncodes"></a>

```json
[
  "CPU_OVER_PROVISIONED"
]
```

<h2 id="tocS_ForecastResult">ForecastResult</h2>
<!-- backwards compatibility -->
<a id="schemaforecastresult"></a>
<a id="schema_ForecastResult"></a>
<a id="tocSforecastresult"></a>
<a id="tocsforecastresult"></a>

```json
{
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "MeanValue": {},
  "PredictionIntervalLowerBound": {},
  "PredictionIntervalUpperBound": {}
}
```

The forecast that's created for your query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimePeriod|object|false|none|none|
|MeanValue|object|false|none|none|
|PredictionIntervalLowerBound|object|false|none|none|
|PredictionIntervalUpperBound|object|false|none|none|

<h2 id="tocS_ForecastResultsByTime">ForecastResultsByTime</h2>
<!-- backwards compatibility -->
<a id="schemaforecastresultsbytime"></a>
<a id="schema_ForecastResultsByTime"></a>
<a id="tocSforecastresultsbytime"></a>
<a id="tocsforecastresultsbytime"></a>

```json
[
  {
    "TimePeriod": {
      "Start": {},
      "End": {}
    },
    "MeanValue": {},
    "PredictionIntervalLowerBound": {},
    "PredictionIntervalUpperBound": {}
  }
]
```

<h2 id="tocS_GenerationStatus">GenerationStatus</h2>
<!-- backwards compatibility -->
<a id="schemagenerationstatus"></a>
<a id="schema_GenerationStatus"></a>
<a id="tocSgenerationstatus"></a>
<a id="tocsgenerationstatus"></a>

```json
"SUCCEEDED"
```

<h2 id="tocS_RecommendationId">RecommendationId</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationid"></a>
<a id="schema_RecommendationId"></a>
<a id="tocSrecommendationid"></a>
<a id="tocsrecommendationid"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_GenerationSummary">GenerationSummary</h2>
<!-- backwards compatibility -->
<a id="schemagenerationsummary"></a>
<a id="schema_GenerationSummary"></a>
<a id="tocSgenerationsummary"></a>
<a id="tocsgenerationsummary"></a>

```json
{
  "RecommendationId": {},
  "GenerationStatus": {},
  "GenerationStartedTime": {},
  "GenerationCompletionTime": {},
  "EstimatedCompletionTime": {}
}
```

The summary of the Savings Plans recommendation generation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecommendationId|object|false|none|none|
|GenerationStatus|object|false|none|none|
|GenerationStartedTime|object|false|none|none|
|GenerationCompletionTime|object|false|none|none|
|EstimatedCompletionTime|object|false|none|none|

<h2 id="tocS_GenerationSummaryList">GenerationSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemagenerationsummarylist"></a>
<a id="schema_GenerationSummaryList"></a>
<a id="tocSgenerationsummarylist"></a>
<a id="tocsgenerationsummarylist"></a>

```json
[
  {
    "RecommendationId": {},
    "GenerationStatus": {},
    "GenerationStartedTime": {},
    "GenerationCompletionTime": {},
    "EstimatedCompletionTime": {}
  }
]
```

<h2 id="tocS_TotalImpactFilter">TotalImpactFilter</h2>
<!-- backwards compatibility -->
<a id="schematotalimpactfilter"></a>
<a id="schema_TotalImpactFilter"></a>
<a id="tocStotalimpactfilter"></a>
<a id="tocstotalimpactfilter"></a>

```json
{
  "NumericOperator": {},
  "StartValue": {},
  "EndValue": {}
}
```

Filters cost anomalies based on the total impact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NumericOperator|object|true|none|none|
|StartValue|object|true|none|none|
|EndValue|object|false|none|none|

<h2 id="tocS_NextPageToken">NextPageToken</h2>
<!-- backwards compatibility -->
<a id="schemanextpagetoken"></a>
<a id="schema_NextPageToken"></a>
<a id="tocSnextpagetoken"></a>
<a id="tocsnextpagetoken"></a>

```json
"string"
```

<h2 id="tocS_PageSize">PageSize</h2>
<!-- backwards compatibility -->
<a id="schemapagesize"></a>
<a id="schema_PageSize"></a>
<a id="tocSpagesize"></a>
<a id="tocspagesize"></a>

```json
0
```

<h2 id="tocS_Granularity">Granularity</h2>
<!-- backwards compatibility -->
<a id="schemagranularity"></a>
<a id="schema_Granularity"></a>
<a id="tocSgranularity"></a>
<a id="tocsgranularity"></a>

```json
"DAILY"
```

<h2 id="tocS_MetricNames">MetricNames</h2>
<!-- backwards compatibility -->
<a id="schemametricnames"></a>
<a id="schema_MetricNames"></a>
<a id="tocSmetricnames"></a>
<a id="tocsmetricnames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GroupDefinitions">GroupDefinitions</h2>
<!-- backwards compatibility -->
<a id="schemagroupdefinitions"></a>
<a id="schema_GroupDefinitions"></a>
<a id="tocSgroupdefinitions"></a>
<a id="tocsgroupdefinitions"></a>

```json
[
  {
    "Type": {},
    "Key": {}
  }
]
```

<h2 id="tocS_ResultsByTime">ResultsByTime</h2>
<!-- backwards compatibility -->
<a id="schemaresultsbytime"></a>
<a id="schema_ResultsByTime"></a>
<a id="tocSresultsbytime"></a>
<a id="tocsresultsbytime"></a>

```json
[
  {
    "TimePeriod": {
      "Start": {},
      "End": {}
    },
    "Total": {
      "property1": {
        "Amount": {},
        "Unit": {}
      },
      "property2": {
        "Amount": {},
        "Unit": {}
      }
    },
    "Groups": {},
    "Estimated": {}
  }
]
```

<h2 id="tocS_SearchString">SearchString</h2>
<!-- backwards compatibility -->
<a id="schemasearchstring"></a>
<a id="schema_SearchString"></a>
<a id="tocSsearchstring"></a>
<a id="tocssearchstring"></a>

```json
"string"
```

<h2 id="tocS_SortDefinitions">SortDefinitions</h2>
<!-- backwards compatibility -->
<a id="schemasortdefinitions"></a>
<a id="schema_SortDefinitions"></a>
<a id="tocSsortdefinitions"></a>
<a id="tocssortdefinitions"></a>

```json
[
  {
    "Key": {},
    "SortOrder": {}
  }
]
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

<h2 id="tocS_Metric">Metric</h2>
<!-- backwards compatibility -->
<a id="schemametric"></a>
<a id="schema_Metric"></a>
<a id="tocSmetric"></a>
<a id="tocsmetric"></a>

```json
"BLENDED_COST"
```

<h2 id="tocS_PredictionIntervalLevel">PredictionIntervalLevel</h2>
<!-- backwards compatibility -->
<a id="schemapredictionintervallevel"></a>
<a id="schema_PredictionIntervalLevel"></a>
<a id="tocSpredictionintervallevel"></a>
<a id="tocspredictionintervallevel"></a>

```json
51
```

<h2 id="tocS_MetricValue">MetricValue</h2>
<!-- backwards compatibility -->
<a id="schemametricvalue"></a>
<a id="schema_MetricValue"></a>
<a id="tocSmetricvalue"></a>
<a id="tocsmetricvalue"></a>

```json
{
  "Amount": {},
  "Unit": {}
}
```

The aggregated value for a metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|object|false|none|none|
|Unit|object|false|none|none|

<h2 id="tocS_SortDefinition">SortDefinition</h2>
<!-- backwards compatibility -->
<a id="schemasortdefinition"></a>
<a id="schema_SortDefinition"></a>
<a id="tocSsortdefinition"></a>
<a id="tocssortdefinition"></a>

```json
{
  "Key": {},
  "SortOrder": {}
}
```

The details for how to sort the data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|SortOrder|object|false|none|none|

<h2 id="tocS_LookbackPeriodInDays">LookbackPeriodInDays</h2>
<!-- backwards compatibility -->
<a id="schemalookbackperiodindays"></a>
<a id="schema_LookbackPeriodInDays"></a>
<a id="tocSlookbackperiodindays"></a>
<a id="tocslookbackperiodindays"></a>

```json
"SEVEN_DAYS"
```

<h2 id="tocS_TermInYears">TermInYears</h2>
<!-- backwards compatibility -->
<a id="schematerminyears"></a>
<a id="schema_TermInYears"></a>
<a id="tocSterminyears"></a>
<a id="tocsterminyears"></a>

```json
"ONE_YEAR"
```

<h2 id="tocS_PaymentOption">PaymentOption</h2>
<!-- backwards compatibility -->
<a id="schemapaymentoption"></a>
<a id="schema_PaymentOption"></a>
<a id="tocSpaymentoption"></a>
<a id="tocspaymentoption"></a>

```json
"NO_UPFRONT"
```

<h2 id="tocS_ServiceSpecification">ServiceSpecification</h2>
<!-- backwards compatibility -->
<a id="schemaservicespecification"></a>
<a id="schema_ServiceSpecification"></a>
<a id="tocSservicespecification"></a>
<a id="tocsservicespecification"></a>

```json
{
  "EC2Specification": {
    "OfferingClass": {}
  }
}
```

Hardware specifications for the service that you want recommendations for.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EC2Specification|object|false|none|none|

<h2 id="tocS_ReservationPurchaseRecommendationMetadata">ReservationPurchaseRecommendationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemareservationpurchaserecommendationmetadata"></a>
<a id="schema_ReservationPurchaseRecommendationMetadata"></a>
<a id="tocSreservationpurchaserecommendationmetadata"></a>
<a id="tocsreservationpurchaserecommendationmetadata"></a>

```json
{
  "RecommendationId": {},
  "GenerationTimestamp": {}
}
```

Information about this specific recommendation, such as the timestamp for when Amazon Web Services made a specific recommendation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecommendationId|object|false|none|none|
|GenerationTimestamp|object|false|none|none|

<h2 id="tocS_ReservationPurchaseRecommendations">ReservationPurchaseRecommendations</h2>
<!-- backwards compatibility -->
<a id="schemareservationpurchaserecommendations"></a>
<a id="schema_ReservationPurchaseRecommendations"></a>
<a id="tocSreservationpurchaserecommendations"></a>
<a id="tocsreservationpurchaserecommendations"></a>

```json
[
  {
    "AccountScope": {},
    "LookbackPeriodInDays": {},
    "TermInYears": {},
    "PaymentOption": {},
    "ServiceSpecification": {
      "EC2Specification": {
        "OfferingClass": {}
      }
    },
    "RecommendationDetails": {},
    "RecommendationSummary": {
      "TotalEstimatedMonthlySavingsAmount": {},
      "TotalEstimatedMonthlySavingsPercentage": {},
      "CurrencyCode": {}
    }
  }
]
```

<h2 id="tocS_UtilizationsByTime">UtilizationsByTime</h2>
<!-- backwards compatibility -->
<a id="schemautilizationsbytime"></a>
<a id="schema_UtilizationsByTime"></a>
<a id="tocSutilizationsbytime"></a>
<a id="tocsutilizationsbytime"></a>

```json
[
  {
    "TimePeriod": {
      "Start": {},
      "End": {}
    },
    "Groups": {},
    "Total": {
      "UtilizationPercentage": {},
      "UtilizationPercentageInUnits": {},
      "PurchasedHours": {},
      "PurchasedUnits": {},
      "TotalActualHours": {},
      "TotalActualUnits": {},
      "UnusedHours": {},
      "UnusedUnits": {},
      "OnDemandCostOfRIHoursUsed": {},
      "NetRISavings": {},
      "TotalPotentialRISavings": {},
      "AmortizedUpfrontFee": {},
      "AmortizedRecurringFee": {},
      "TotalAmortizedFee": {},
      "RICostForUnusedHours": {},
      "RealizedSavings": {},
      "UnrealizedSavings": {}
    }
  }
]
```

<h2 id="tocS_ReservationAggregates">ReservationAggregates</h2>
<!-- backwards compatibility -->
<a id="schemareservationaggregates"></a>
<a id="schema_ReservationAggregates"></a>
<a id="tocSreservationaggregates"></a>
<a id="tocsreservationaggregates"></a>

```json
{
  "UtilizationPercentage": {},
  "UtilizationPercentageInUnits": {},
  "PurchasedHours": {},
  "PurchasedUnits": {},
  "TotalActualHours": {},
  "TotalActualUnits": {},
  "UnusedHours": {},
  "UnusedUnits": {},
  "OnDemandCostOfRIHoursUsed": {},
  "NetRISavings": {},
  "TotalPotentialRISavings": {},
  "AmortizedUpfrontFee": {},
  "AmortizedRecurringFee": {},
  "TotalAmortizedFee": {},
  "RICostForUnusedHours": {},
  "RealizedSavings": {},
  "UnrealizedSavings": {}
}
```

The aggregated numbers for your reservation usage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UtilizationPercentage|object|false|none|none|
|UtilizationPercentageInUnits|object|false|none|none|
|PurchasedHours|object|false|none|none|
|PurchasedUnits|object|false|none|none|
|TotalActualHours|object|false|none|none|
|TotalActualUnits|object|false|none|none|
|UnusedHours|object|false|none|none|
|UnusedUnits|object|false|none|none|
|OnDemandCostOfRIHoursUsed|object|false|none|none|
|NetRISavings|object|false|none|none|
|TotalPotentialRISavings|object|false|none|none|
|AmortizedUpfrontFee|object|false|none|none|
|AmortizedRecurringFee|object|false|none|none|
|TotalAmortizedFee|object|false|none|none|
|RICostForUnusedHours|object|false|none|none|
|RealizedSavings|object|false|none|none|
|UnrealizedSavings|object|false|none|none|

<h2 id="tocS_RightsizingRecommendationConfiguration">RightsizingRecommendationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemarightsizingrecommendationconfiguration"></a>
<a id="schema_RightsizingRecommendationConfiguration"></a>
<a id="tocSrightsizingrecommendationconfiguration"></a>
<a id="tocsrightsizingrecommendationconfiguration"></a>

```json
{
  "RecommendationTarget": {},
  "BenefitsConsidered": {}
}
```

You can use <code>RightsizingRecommendationConfiguration</code> to customize recommendations across two attributes. You can choose to view recommendations for instances within the same instance families or across different instance families. You can also choose to view your estimated savings that are associated with recommendations with consideration of existing Savings Plans or Reserved Instance (RI) benefits, or neither.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecommendationTarget|object|true|none|none|
|BenefitsConsidered|object|true|none|none|

<h2 id="tocS_RightsizingRecommendationMetadata">RightsizingRecommendationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemarightsizingrecommendationmetadata"></a>
<a id="schema_RightsizingRecommendationMetadata"></a>
<a id="tocSrightsizingrecommendationmetadata"></a>
<a id="tocsrightsizingrecommendationmetadata"></a>

```json
{
  "RecommendationId": {},
  "GenerationTimestamp": {},
  "LookbackPeriodInDays": {},
  "AdditionalMetadata": {}
}
```

Metadata for this recommendation set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecommendationId|object|false|none|none|
|GenerationTimestamp|object|false|none|none|
|LookbackPeriodInDays|object|false|none|none|
|AdditionalMetadata|object|false|none|none|

<h2 id="tocS_RightsizingRecommendationSummary">RightsizingRecommendationSummary</h2>
<!-- backwards compatibility -->
<a id="schemarightsizingrecommendationsummary"></a>
<a id="schema_RightsizingRecommendationSummary"></a>
<a id="tocSrightsizingrecommendationsummary"></a>
<a id="tocsrightsizingrecommendationsummary"></a>

```json
{
  "TotalRecommendationCount": {},
  "EstimatedTotalMonthlySavingsAmount": {},
  "SavingsCurrencyCode": {},
  "SavingsPercentage": {}
}
```

The summary of rightsizing recommendations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TotalRecommendationCount|object|false|none|none|
|EstimatedTotalMonthlySavingsAmount|object|false|none|none|
|SavingsCurrencyCode|object|false|none|none|
|SavingsPercentage|object|false|none|none|

<h2 id="tocS_RightsizingRecommendationList">RightsizingRecommendationList</h2>
<!-- backwards compatibility -->
<a id="schemarightsizingrecommendationlist"></a>
<a id="schema_RightsizingRecommendationList"></a>
<a id="tocSrightsizingrecommendationlist"></a>
<a id="tocsrightsizingrecommendationlist"></a>

```json
[
  {
    "AccountId": {},
    "CurrentInstance": {
      "ResourceId": {},
      "InstanceName": {},
      "Tags": {},
      "ResourceDetails": {
        "EC2ResourceDetails": {
          "HourlyOnDemandRate": {},
          "InstanceType": {},
          "Platform": {},
          "Region": {},
          "Sku": {},
          "Memory": {},
          "NetworkPerformance": {},
          "Storage": {},
          "Vcpu": {}
        }
      },
      "ResourceUtilization": {
        "EC2ResourceUtilization": {
          "MaxCpuUtilizationPercentage": {},
          "MaxMemoryUtilizationPercentage": {},
          "MaxStorageUtilizationPercentage": {},
          "EBSResourceUtilization": {
            "EbsReadOpsPerSecond": {},
            "EbsWriteOpsPerSecond": {},
            "EbsReadBytesPerSecond": {},
            "EbsWriteBytesPerSecond": {}
          },
          "DiskResourceUtilization": {
            "DiskReadOpsPerSecond": {},
            "DiskWriteOpsPerSecond": {},
            "DiskReadBytesPerSecond": {},
            "DiskWriteBytesPerSecond": {}
          },
          "NetworkResourceUtilization": {
            "NetworkInBytesPerSecond": {},
            "NetworkOutBytesPerSecond": {},
            "NetworkPacketsInPerSecond": {},
            "NetworkPacketsOutPerSecond": {}
          }
        }
      },
      "ReservationCoveredHoursInLookbackPeriod": {},
      "SavingsPlansCoveredHoursInLookbackPeriod": {},
      "OnDemandHoursInLookbackPeriod": {},
      "TotalRunningHoursInLookbackPeriod": {},
      "MonthlyCost": {},
      "CurrencyCode": {}
    },
    "RightsizingType": {},
    "ModifyRecommendationDetail": {
      "TargetInstances": {}
    },
    "TerminateRecommendationDetail": {
      "EstimatedMonthlySavings": {},
      "CurrencyCode": {}
    },
    "FindingReasonCodes": {}
  }
]
```

<h2 id="tocS_SavingsPlansCoverages">SavingsPlansCoverages</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanscoverages"></a>
<a id="schema_SavingsPlansCoverages"></a>
<a id="tocSsavingsplanscoverages"></a>
<a id="tocssavingsplanscoverages"></a>

```json
[
  {
    "Attributes": {
      "property1": "string",
      "property2": "string"
    },
    "Coverage": {
      "SpendCoveredBySavingsPlans": {},
      "OnDemandCost": {},
      "TotalCost": {},
      "CoveragePercentage": {}
    },
    "TimePeriod": {
      "Start": {},
      "End": {}
    }
  }
]
```

<h2 id="tocS_SupportedSavingsPlansType">SupportedSavingsPlansType</h2>
<!-- backwards compatibility -->
<a id="schemasupportedsavingsplanstype"></a>
<a id="schema_SupportedSavingsPlansType"></a>
<a id="tocSsupportedsavingsplanstype"></a>
<a id="tocssupportedsavingsplanstype"></a>

```json
"COMPUTE_SP"
```

<h2 id="tocS_SavingsPlansPurchaseRecommendationMetadata">SavingsPlansPurchaseRecommendationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanspurchaserecommendationmetadata"></a>
<a id="schema_SavingsPlansPurchaseRecommendationMetadata"></a>
<a id="tocSsavingsplanspurchaserecommendationmetadata"></a>
<a id="tocssavingsplanspurchaserecommendationmetadata"></a>

```json
{
  "RecommendationId": {},
  "GenerationTimestamp": {},
  "AdditionalMetadata": {}
}
```

Metadata about your Savings Plans Purchase Recommendations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecommendationId|object|false|none|none|
|GenerationTimestamp|object|false|none|none|
|AdditionalMetadata|object|false|none|none|

<h2 id="tocS_SavingsPlansPurchaseRecommendation">SavingsPlansPurchaseRecommendation</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanspurchaserecommendation"></a>
<a id="schema_SavingsPlansPurchaseRecommendation"></a>
<a id="tocSsavingsplanspurchaserecommendation"></a>
<a id="tocssavingsplanspurchaserecommendation"></a>

```json
{
  "AccountScope": {},
  "SavingsPlansType": {},
  "TermInYears": {},
  "PaymentOption": {},
  "LookbackPeriodInDays": {},
  "SavingsPlansPurchaseRecommendationDetails": {},
  "SavingsPlansPurchaseRecommendationSummary": {
    "EstimatedROI": {},
    "CurrencyCode": {},
    "EstimatedTotalCost": {},
    "CurrentOnDemandSpend": {},
    "EstimatedSavingsAmount": {},
    "TotalRecommendationCount": {},
    "DailyCommitmentToPurchase": {},
    "HourlyCommitmentToPurchase": {},
    "EstimatedSavingsPercentage": {},
    "EstimatedMonthlySavingsAmount": {},
    "EstimatedOnDemandCostWithCurrentCommitment": {}
  }
}
```

Contains your request parameters, Savings Plan Recommendations Summary, and Details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountScope|object|false|none|none|
|SavingsPlansType|object|false|none|none|
|TermInYears|object|false|none|none|
|PaymentOption|object|false|none|none|
|LookbackPeriodInDays|object|false|none|none|
|SavingsPlansPurchaseRecommendationDetails|object|false|none|none|
|SavingsPlansPurchaseRecommendationSummary|object|false|none|none|

<h2 id="tocS_SavingsPlansDataTypes">SavingsPlansDataTypes</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplansdatatypes"></a>
<a id="schema_SavingsPlansDataTypes"></a>
<a id="tocSsavingsplansdatatypes"></a>
<a id="tocssavingsplansdatatypes"></a>

```json
[
  "ATTRIBUTES"
]
```

<h2 id="tocS_SavingsPlansUtilizationDetails">SavingsPlansUtilizationDetails</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplansutilizationdetails"></a>
<a id="schema_SavingsPlansUtilizationDetails"></a>
<a id="tocSsavingsplansutilizationdetails"></a>
<a id="tocssavingsplansutilizationdetails"></a>

```json
[
  {
    "SavingsPlanArn": {},
    "Attributes": {
      "property1": "string",
      "property2": "string"
    },
    "Utilization": {
      "TotalCommitment": {},
      "UsedCommitment": {},
      "UnusedCommitment": {},
      "UtilizationPercentage": {}
    },
    "Savings": {
      "NetSavings": {},
      "OnDemandCostEquivalent": {}
    },
    "AmortizedCommitment": {
      "AmortizedRecurringCommitment": {},
      "AmortizedUpfrontCommitment": {},
      "TotalAmortizedCommitment": {}
    }
  }
]
```

<h2 id="tocS_SavingsPlansUtilizationAggregates">SavingsPlansUtilizationAggregates</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplansutilizationaggregates"></a>
<a id="schema_SavingsPlansUtilizationAggregates"></a>
<a id="tocSsavingsplansutilizationaggregates"></a>
<a id="tocssavingsplansutilizationaggregates"></a>

```json
{
  "Utilization": {
    "TotalCommitment": {},
    "UsedCommitment": {},
    "UnusedCommitment": {},
    "UtilizationPercentage": {}
  },
  "Savings": {
    "NetSavings": {},
    "OnDemandCostEquivalent": {}
  },
  "AmortizedCommitment": {
    "AmortizedRecurringCommitment": {},
    "AmortizedUpfrontCommitment": {},
    "TotalAmortizedCommitment": {}
  }
}
```

The aggregated utilization metrics for your Savings Plans usage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Utilization|object|true|none|none|
|Savings|object|false|none|none|
|AmortizedCommitment|object|false|none|none|

<h2 id="tocS_SavingsPlansUtilizationsByTime">SavingsPlansUtilizationsByTime</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplansutilizationsbytime"></a>
<a id="schema_SavingsPlansUtilizationsByTime"></a>
<a id="tocSsavingsplansutilizationsbytime"></a>
<a id="tocssavingsplansutilizationsbytime"></a>

```json
[
  {
    "TimePeriod": {
      "Start": {},
      "End": {}
    },
    "Utilization": {
      "TotalCommitment": {},
      "UsedCommitment": {},
      "UnusedCommitment": {},
      "UtilizationPercentage": {}
    },
    "Savings": {
      "NetSavings": {},
      "OnDemandCostEquivalent": {}
    },
    "AmortizedCommitment": {
      "AmortizedRecurringCommitment": {},
      "AmortizedUpfrontCommitment": {},
      "TotalAmortizedCommitment": {}
    }
  }
]
```

<h2 id="tocS_TagList">TagList</h2>
<!-- backwards compatibility -->
<a id="schemataglist"></a>
<a id="schema_TagList"></a>
<a id="tocStaglist"></a>
<a id="tocstaglist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Keys">Keys</h2>
<!-- backwards compatibility -->
<a id="schemakeys"></a>
<a id="schema_Keys"></a>
<a id="tocSkeys"></a>
<a id="tocskeys"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Metrics">Metrics</h2>
<!-- backwards compatibility -->
<a id="schemametrics"></a>
<a id="schema_Metrics"></a>
<a id="tocSmetrics"></a>
<a id="tocsmetrics"></a>

```json
{
  "property1": {
    "Amount": {},
    "Unit": {}
  },
  "property2": {
    "Amount": {},
    "Unit": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[MetricValue](#schemametricvalue)|false|none|The aggregated value for a metric.|

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "Keys": {},
  "Metrics": {
    "property1": {
      "Amount": {},
      "Unit": {}
    },
    "property2": {
      "Amount": {},
      "Unit": {}
    }
  }
}
```

One level of grouped data in the results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Keys|object|false|none|none|
|Metrics|object|false|none|none|

<h2 id="tocS_GroupDefinitionType">GroupDefinitionType</h2>
<!-- backwards compatibility -->
<a id="schemagroupdefinitiontype"></a>
<a id="schema_GroupDefinitionType"></a>
<a id="tocSgroupdefinitiontype"></a>
<a id="tocsgroupdefinitiontype"></a>

```json
"DIMENSION"
```

<h2 id="tocS_GroupDefinitionKey">GroupDefinitionKey</h2>
<!-- backwards compatibility -->
<a id="schemagroupdefinitionkey"></a>
<a id="schema_GroupDefinitionKey"></a>
<a id="tocSgroupdefinitionkey"></a>
<a id="tocsgroupdefinitionkey"></a>

```json
"string"
```

<h2 id="tocS_GroupDefinition">GroupDefinition</h2>
<!-- backwards compatibility -->
<a id="schemagroupdefinition"></a>
<a id="schema_GroupDefinition"></a>
<a id="tocSgroupdefinition"></a>
<a id="tocsgroupdefinition"></a>

```json
{
  "Type": {},
  "Key": {}
}
```

Represents a group when you specify a group by criteria or in the response to a query with a specific grouping.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Key|object|false|none|none|

<h2 id="tocS_Groups">Groups</h2>
<!-- backwards compatibility -->
<a id="schemagroups"></a>
<a id="schema_Groups"></a>
<a id="tocSgroups"></a>
<a id="tocsgroups"></a>

```json
[
  {
    "Keys": {},
    "Metrics": {
      "property1": {
        "Amount": {},
        "Unit": {}
      },
      "property2": {
        "Amount": {},
        "Unit": {}
      }
    }
  }
]
```

<h2 id="tocS_RDSInstanceDetails">RDSInstanceDetails</h2>
<!-- backwards compatibility -->
<a id="schemardsinstancedetails"></a>
<a id="schema_RDSInstanceDetails"></a>
<a id="tocSrdsinstancedetails"></a>
<a id="tocsrdsinstancedetails"></a>

```json
{
  "Family": {},
  "InstanceType": {},
  "Region": {},
  "DatabaseEngine": {},
  "DatabaseEdition": {},
  "DeploymentOption": {},
  "LicenseModel": {},
  "CurrentGeneration": {},
  "SizeFlexEligible": {}
}
```

Details about the Amazon RDS instances that Amazon Web Services recommends that you purchase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Family|object|false|none|none|
|InstanceType|object|false|none|none|
|Region|object|false|none|none|
|DatabaseEngine|object|false|none|none|
|DatabaseEdition|object|false|none|none|
|DeploymentOption|object|false|none|none|
|LicenseModel|object|false|none|none|
|CurrentGeneration|object|false|none|none|
|SizeFlexEligible|object|false|none|none|

<h2 id="tocS_RedshiftInstanceDetails">RedshiftInstanceDetails</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftinstancedetails"></a>
<a id="schema_RedshiftInstanceDetails"></a>
<a id="tocSredshiftinstancedetails"></a>
<a id="tocsredshiftinstancedetails"></a>

```json
{
  "Family": {},
  "NodeType": {},
  "Region": {},
  "CurrentGeneration": {},
  "SizeFlexEligible": {}
}
```

Details about the Amazon Redshift instances that Amazon Web Services recommends that you purchase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Family|object|false|none|none|
|NodeType|object|false|none|none|
|Region|object|false|none|none|
|CurrentGeneration|object|false|none|none|
|SizeFlexEligible|object|false|none|none|

<h2 id="tocS_InstanceDetails">InstanceDetails</h2>
<!-- backwards compatibility -->
<a id="schemainstancedetails"></a>
<a id="schema_InstanceDetails"></a>
<a id="tocSinstancedetails"></a>
<a id="tocsinstancedetails"></a>

```json
{
  "EC2InstanceDetails": {
    "Family": {},
    "InstanceType": {},
    "Region": {},
    "AvailabilityZone": {},
    "Platform": {},
    "Tenancy": {},
    "CurrentGeneration": {},
    "SizeFlexEligible": {}
  },
  "RDSInstanceDetails": {
    "Family": {},
    "InstanceType": {},
    "Region": {},
    "DatabaseEngine": {},
    "DatabaseEdition": {},
    "DeploymentOption": {},
    "LicenseModel": {},
    "CurrentGeneration": {},
    "SizeFlexEligible": {}
  },
  "RedshiftInstanceDetails": {
    "Family": {},
    "NodeType": {},
    "Region": {},
    "CurrentGeneration": {},
    "SizeFlexEligible": {}
  },
  "ElastiCacheInstanceDetails": {
    "Family": {},
    "NodeType": {},
    "Region": {},
    "ProductDescription": {},
    "CurrentGeneration": {},
    "SizeFlexEligible": {}
  },
  "ESInstanceDetails": {
    "InstanceClass": {},
    "InstanceSize": {},
    "Region": {},
    "CurrentGeneration": {},
    "SizeFlexEligible": {}
  }
}
```

Details about the instances that Amazon Web Services recommends that you purchase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EC2InstanceDetails|object|false|none|none|
|RDSInstanceDetails|object|false|none|none|
|RedshiftInstanceDetails|object|false|none|none|
|ElastiCacheInstanceDetails|object|false|none|none|
|ESInstanceDetails|object|false|none|none|

<h2 id="tocS_Key">Key</h2>
<!-- backwards compatibility -->
<a id="schemakey"></a>
<a id="schema_Key"></a>
<a id="tocSkey"></a>
<a id="tocskey"></a>

```json
"string"
```

<h2 id="tocS_RecommendationIdList">RecommendationIdList</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationidlist"></a>
<a id="schema_RecommendationIdList"></a>
<a id="tocSrecommendationidlist"></a>
<a id="tocsrecommendationidlist"></a>

```json
[
  "stringstringstringstringstringstring"
]
```

<h2 id="tocS_MatchOption">MatchOption</h2>
<!-- backwards compatibility -->
<a id="schemamatchoption"></a>
<a id="schema_MatchOption"></a>
<a id="tocSmatchoption"></a>
<a id="tocsmatchoption"></a>

```json
"EQUALS"
```

<h2 id="tocS_MetricAmount">MetricAmount</h2>
<!-- backwards compatibility -->
<a id="schemametricamount"></a>
<a id="schema_MetricAmount"></a>
<a id="tocSmetricamount"></a>
<a id="tocsmetricamount"></a>

```json
"string"
```

<h2 id="tocS_MetricName">MetricName</h2>
<!-- backwards compatibility -->
<a id="schemametricname"></a>
<a id="schema_MetricName"></a>
<a id="tocSmetricname"></a>
<a id="tocsmetricname"></a>

```json
"string"
```

<h2 id="tocS_MetricUnit">MetricUnit</h2>
<!-- backwards compatibility -->
<a id="schemametricunit"></a>
<a id="schema_MetricUnit"></a>
<a id="tocSmetricunit"></a>
<a id="tocsmetricunit"></a>

```json
"string"
```

<h2 id="tocS_TargetInstancesList">TargetInstancesList</h2>
<!-- backwards compatibility -->
<a id="schematargetinstanceslist"></a>
<a id="schema_TargetInstancesList"></a>
<a id="tocStargetinstanceslist"></a>
<a id="tocstargetinstanceslist"></a>

```json
[
  {
    "EstimatedMonthlyCost": {},
    "EstimatedMonthlySavings": {},
    "CurrencyCode": {},
    "DefaultTargetInstance": {},
    "ResourceDetails": {
      "EC2ResourceDetails": {
        "HourlyOnDemandRate": {},
        "InstanceType": {},
        "Platform": {},
        "Region": {},
        "Sku": {},
        "Memory": {},
        "NetworkPerformance": {},
        "Storage": {},
        "Vcpu": {}
      }
    },
    "ExpectedResourceUtilization": {
      "EC2ResourceUtilization": {
        "MaxCpuUtilizationPercentage": {},
        "MaxMemoryUtilizationPercentage": {},
        "MaxStorageUtilizationPercentage": {},
        "EBSResourceUtilization": {
          "EbsReadOpsPerSecond": {},
          "EbsWriteOpsPerSecond": {},
          "EbsReadBytesPerSecond": {},
          "EbsWriteBytesPerSecond": {}
        },
        "DiskResourceUtilization": {
          "DiskReadOpsPerSecond": {},
          "DiskWriteOpsPerSecond": {},
          "DiskReadBytesPerSecond": {},
          "DiskWriteBytesPerSecond": {}
        },
        "NetworkResourceUtilization": {
          "NetworkInBytesPerSecond": {},
          "NetworkOutBytesPerSecond": {},
          "NetworkPacketsInPerSecond": {},
          "NetworkPacketsOutPerSecond": {}
        }
      }
    },
    "PlatformDifferences": {}
  }
]
```

<h2 id="tocS_ModifyRecommendationDetail">ModifyRecommendationDetail</h2>
<!-- backwards compatibility -->
<a id="schemamodifyrecommendationdetail"></a>
<a id="schema_ModifyRecommendationDetail"></a>
<a id="tocSmodifyrecommendationdetail"></a>
<a id="tocsmodifyrecommendationdetail"></a>

```json
{
  "TargetInstances": {}
}
```

Details for the modification recommendation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetInstances|object|false|none|none|

<h2 id="tocS_NetRISavings">NetRISavings</h2>
<!-- backwards compatibility -->
<a id="schemanetrisavings"></a>
<a id="schema_NetRISavings"></a>
<a id="tocSnetrisavings"></a>
<a id="tocsnetrisavings"></a>

```json
"string"
```

<h2 id="tocS_NumericOperator">NumericOperator</h2>
<!-- backwards compatibility -->
<a id="schemanumericoperator"></a>
<a id="schema_NumericOperator"></a>
<a id="tocSnumericoperator"></a>
<a id="tocsnumericoperator"></a>

```json
"EQUAL"
```

<h2 id="tocS_OnDemandCostOfRIHoursUsed">OnDemandCostOfRIHoursUsed</h2>
<!-- backwards compatibility -->
<a id="schemaondemandcostofrihoursused"></a>
<a id="schema_OnDemandCostOfRIHoursUsed"></a>
<a id="tocSondemandcostofrihoursused"></a>
<a id="tocsondemandcostofrihoursused"></a>

```json
"string"
```

<h2 id="tocS_PlatformDifference">PlatformDifference</h2>
<!-- backwards compatibility -->
<a id="schemaplatformdifference"></a>
<a id="schema_PlatformDifference"></a>
<a id="tocSplatformdifference"></a>
<a id="tocsplatformdifference"></a>

```json
"HYPERVISOR"
```

<h2 id="tocS_PlatformDifferences">PlatformDifferences</h2>
<!-- backwards compatibility -->
<a id="schemaplatformdifferences"></a>
<a id="schema_PlatformDifferences"></a>
<a id="tocSplatformdifferences"></a>
<a id="tocsplatformdifferences"></a>

```json
[
  "HYPERVISOR"
]
```

<h2 id="tocS_PurchasedHours">PurchasedHours</h2>
<!-- backwards compatibility -->
<a id="schemapurchasedhours"></a>
<a id="schema_PurchasedHours"></a>
<a id="tocSpurchasedhours"></a>
<a id="tocspurchasedhours"></a>

```json
"string"
```

<h2 id="tocS_PurchasedUnits">PurchasedUnits</h2>
<!-- backwards compatibility -->
<a id="schemapurchasedunits"></a>
<a id="schema_PurchasedUnits"></a>
<a id="tocSpurchasedunits"></a>
<a id="tocspurchasedunits"></a>

```json
"string"
```

<h2 id="tocS_RICostForUnusedHours">RICostForUnusedHours</h2>
<!-- backwards compatibility -->
<a id="schemaricostforunusedhours"></a>
<a id="schema_RICostForUnusedHours"></a>
<a id="tocSricostforunusedhours"></a>
<a id="tocsricostforunusedhours"></a>

```json
"string"
```

<h2 id="tocS_RealizedSavings">RealizedSavings</h2>
<!-- backwards compatibility -->
<a id="schemarealizedsavings"></a>
<a id="schema_RealizedSavings"></a>
<a id="tocSrealizedsavings"></a>
<a id="tocsrealizedsavings"></a>

```json
"string"
```

<h2 id="tocS_RecommendationTarget">RecommendationTarget</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationtarget"></a>
<a id="schema_RecommendationTarget"></a>
<a id="tocSrecommendationtarget"></a>
<a id="tocsrecommendationtarget"></a>

```json
"SAME_INSTANCE_FAMILY"
```

<h2 id="tocS_UtilizationPercentage">UtilizationPercentage</h2>
<!-- backwards compatibility -->
<a id="schemautilizationpercentage"></a>
<a id="schema_UtilizationPercentage"></a>
<a id="tocSutilizationpercentage"></a>
<a id="tocsutilizationpercentage"></a>

```json
"string"
```

<h2 id="tocS_UtilizationPercentageInUnits">UtilizationPercentageInUnits</h2>
<!-- backwards compatibility -->
<a id="schemautilizationpercentageinunits"></a>
<a id="schema_UtilizationPercentageInUnits"></a>
<a id="tocSutilizationpercentageinunits"></a>
<a id="tocsutilizationpercentageinunits"></a>

```json
"string"
```

<h2 id="tocS_TotalActualHours">TotalActualHours</h2>
<!-- backwards compatibility -->
<a id="schematotalactualhours"></a>
<a id="schema_TotalActualHours"></a>
<a id="tocStotalactualhours"></a>
<a id="tocstotalactualhours"></a>

```json
"string"
```

<h2 id="tocS_TotalActualUnits">TotalActualUnits</h2>
<!-- backwards compatibility -->
<a id="schematotalactualunits"></a>
<a id="schema_TotalActualUnits"></a>
<a id="tocStotalactualunits"></a>
<a id="tocstotalactualunits"></a>

```json
"string"
```

<h2 id="tocS_UnusedHours">UnusedHours</h2>
<!-- backwards compatibility -->
<a id="schemaunusedhours"></a>
<a id="schema_UnusedHours"></a>
<a id="tocSunusedhours"></a>
<a id="tocsunusedhours"></a>

```json
"string"
```

<h2 id="tocS_UnusedUnits">UnusedUnits</h2>
<!-- backwards compatibility -->
<a id="schemaunusedunits"></a>
<a id="schema_UnusedUnits"></a>
<a id="tocSunusedunits"></a>
<a id="tocsunusedunits"></a>

```json
"string"
```

<h2 id="tocS_TotalPotentialRISavings">TotalPotentialRISavings</h2>
<!-- backwards compatibility -->
<a id="schematotalpotentialrisavings"></a>
<a id="schema_TotalPotentialRISavings"></a>
<a id="tocStotalpotentialrisavings"></a>
<a id="tocstotalpotentialrisavings"></a>

```json
"string"
```

<h2 id="tocS_TotalAmortizedFee">TotalAmortizedFee</h2>
<!-- backwards compatibility -->
<a id="schematotalamortizedfee"></a>
<a id="schema_TotalAmortizedFee"></a>
<a id="tocStotalamortizedfee"></a>
<a id="tocstotalamortizedfee"></a>

```json
"string"
```

<h2 id="tocS_UnrealizedSavings">UnrealizedSavings</h2>
<!-- backwards compatibility -->
<a id="schemaunrealizedsavings"></a>
<a id="schema_UnrealizedSavings"></a>
<a id="tocSunrealizedsavings"></a>
<a id="tocsunrealizedsavings"></a>

```json
"string"
```

<h2 id="tocS_ReservationCoverageGroup">ReservationCoverageGroup</h2>
<!-- backwards compatibility -->
<a id="schemareservationcoveragegroup"></a>
<a id="schema_ReservationCoverageGroup"></a>
<a id="tocSreservationcoveragegroup"></a>
<a id="tocsreservationcoveragegroup"></a>

```json
{
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "Coverage": {
    "CoverageHours": {
      "OnDemandHours": {},
      "ReservedHours": {},
      "TotalRunningHours": {},
      "CoverageHoursPercentage": {}
    },
    "CoverageNormalizedUnits": {
      "OnDemandNormalizedUnits": {},
      "ReservedNormalizedUnits": {},
      "TotalRunningNormalizedUnits": {},
      "CoverageNormalizedUnitsPercentage": {}
    },
    "CoverageCost": {
      "OnDemandCost": {}
    }
  }
}
```

A group of reservations that share a set of attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|
|Coverage|object|false|none|none|

<h2 id="tocS_ReservationGroupKey">ReservationGroupKey</h2>
<!-- backwards compatibility -->
<a id="schemareservationgroupkey"></a>
<a id="schema_ReservationGroupKey"></a>
<a id="tocSreservationgroupkey"></a>
<a id="tocsreservationgroupkey"></a>

```json
"string"
```

<h2 id="tocS_ReservationGroupValue">ReservationGroupValue</h2>
<!-- backwards compatibility -->
<a id="schemareservationgroupvalue"></a>
<a id="schema_ReservationGroupValue"></a>
<a id="tocSreservationgroupvalue"></a>
<a id="tocsreservationgroupvalue"></a>

```json
"string"
```

<h2 id="tocS_ReservationPurchaseRecommendationDetails">ReservationPurchaseRecommendationDetails</h2>
<!-- backwards compatibility -->
<a id="schemareservationpurchaserecommendationdetails"></a>
<a id="schema_ReservationPurchaseRecommendationDetails"></a>
<a id="tocSreservationpurchaserecommendationdetails"></a>
<a id="tocsreservationpurchaserecommendationdetails"></a>

```json
[
  {
    "AccountId": {},
    "InstanceDetails": {
      "EC2InstanceDetails": {
        "Family": {},
        "InstanceType": {},
        "Region": {},
        "AvailabilityZone": {},
        "Platform": {},
        "Tenancy": {},
        "CurrentGeneration": {},
        "SizeFlexEligible": {}
      },
      "RDSInstanceDetails": {
        "Family": {},
        "InstanceType": {},
        "Region": {},
        "DatabaseEngine": {},
        "DatabaseEdition": {},
        "DeploymentOption": {},
        "LicenseModel": {},
        "CurrentGeneration": {},
        "SizeFlexEligible": {}
      },
      "RedshiftInstanceDetails": {
        "Family": {},
        "NodeType": {},
        "Region": {},
        "CurrentGeneration": {},
        "SizeFlexEligible": {}
      },
      "ElastiCacheInstanceDetails": {
        "Family": {},
        "NodeType": {},
        "Region": {},
        "ProductDescription": {},
        "CurrentGeneration": {},
        "SizeFlexEligible": {}
      },
      "ESInstanceDetails": {
        "InstanceClass": {},
        "InstanceSize": {},
        "Region": {},
        "CurrentGeneration": {},
        "SizeFlexEligible": {}
      }
    },
    "RecommendedNumberOfInstancesToPurchase": {},
    "RecommendedNormalizedUnitsToPurchase": {},
    "MinimumNumberOfInstancesUsedPerHour": {},
    "MinimumNormalizedUnitsUsedPerHour": {},
    "MaximumNumberOfInstancesUsedPerHour": {},
    "MaximumNormalizedUnitsUsedPerHour": {},
    "AverageNumberOfInstancesUsedPerHour": {},
    "AverageNormalizedUnitsUsedPerHour": {},
    "AverageUtilization": {},
    "EstimatedBreakEvenInMonths": {},
    "CurrencyCode": {},
    "EstimatedMonthlySavingsAmount": {},
    "EstimatedMonthlySavingsPercentage": {},
    "EstimatedMonthlyOnDemandCost": {},
    "EstimatedReservationCostForLookbackPeriod": {},
    "UpfrontCost": {},
    "RecurringStandardMonthlyCost": {}
  }
]
```

<h2 id="tocS_ReservationPurchaseRecommendationSummary">ReservationPurchaseRecommendationSummary</h2>
<!-- backwards compatibility -->
<a id="schemareservationpurchaserecommendationsummary"></a>
<a id="schema_ReservationPurchaseRecommendationSummary"></a>
<a id="tocSreservationpurchaserecommendationsummary"></a>
<a id="tocsreservationpurchaserecommendationsummary"></a>

```json
{
  "TotalEstimatedMonthlySavingsAmount": {},
  "TotalEstimatedMonthlySavingsPercentage": {},
  "CurrencyCode": {}
}
```

A summary about this recommendation, such as the currency code, the amount that Amazon Web Services estimates that you could save, and the total amount of reservation to purchase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TotalEstimatedMonthlySavingsAmount|object|false|none|none|
|TotalEstimatedMonthlySavingsPercentage|object|false|none|none|
|CurrencyCode|object|false|none|none|

<h2 id="tocS_ReservationPurchaseRecommendation">ReservationPurchaseRecommendation</h2>
<!-- backwards compatibility -->
<a id="schemareservationpurchaserecommendation"></a>
<a id="schema_ReservationPurchaseRecommendation"></a>
<a id="tocSreservationpurchaserecommendation"></a>
<a id="tocsreservationpurchaserecommendation"></a>

```json
{
  "AccountScope": {},
  "LookbackPeriodInDays": {},
  "TermInYears": {},
  "PaymentOption": {},
  "ServiceSpecification": {
    "EC2Specification": {
      "OfferingClass": {}
    }
  },
  "RecommendationDetails": {},
  "RecommendationSummary": {
    "TotalEstimatedMonthlySavingsAmount": {},
    "TotalEstimatedMonthlySavingsPercentage": {},
    "CurrencyCode": {}
  }
}
```

A specific reservation that Amazon Web Services recommends for purchase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountScope|object|false|none|none|
|LookbackPeriodInDays|object|false|none|none|
|TermInYears|object|false|none|none|
|PaymentOption|object|false|none|none|
|ServiceSpecification|object|false|none|none|
|RecommendationDetails|object|false|none|none|
|RecommendationSummary|object|false|none|none|

<h2 id="tocS_ReservationPurchaseRecommendationDetail">ReservationPurchaseRecommendationDetail</h2>
<!-- backwards compatibility -->
<a id="schemareservationpurchaserecommendationdetail"></a>
<a id="schema_ReservationPurchaseRecommendationDetail"></a>
<a id="tocSreservationpurchaserecommendationdetail"></a>
<a id="tocsreservationpurchaserecommendationdetail"></a>

```json
{
  "AccountId": {},
  "InstanceDetails": {
    "EC2InstanceDetails": {
      "Family": {},
      "InstanceType": {},
      "Region": {},
      "AvailabilityZone": {},
      "Platform": {},
      "Tenancy": {},
      "CurrentGeneration": {},
      "SizeFlexEligible": {}
    },
    "RDSInstanceDetails": {
      "Family": {},
      "InstanceType": {},
      "Region": {},
      "DatabaseEngine": {},
      "DatabaseEdition": {},
      "DeploymentOption": {},
      "LicenseModel": {},
      "CurrentGeneration": {},
      "SizeFlexEligible": {}
    },
    "RedshiftInstanceDetails": {
      "Family": {},
      "NodeType": {},
      "Region": {},
      "CurrentGeneration": {},
      "SizeFlexEligible": {}
    },
    "ElastiCacheInstanceDetails": {
      "Family": {},
      "NodeType": {},
      "Region": {},
      "ProductDescription": {},
      "CurrentGeneration": {},
      "SizeFlexEligible": {}
    },
    "ESInstanceDetails": {
      "InstanceClass": {},
      "InstanceSize": {},
      "Region": {},
      "CurrentGeneration": {},
      "SizeFlexEligible": {}
    }
  },
  "RecommendedNumberOfInstancesToPurchase": {},
  "RecommendedNormalizedUnitsToPurchase": {},
  "MinimumNumberOfInstancesUsedPerHour": {},
  "MinimumNormalizedUnitsUsedPerHour": {},
  "MaximumNumberOfInstancesUsedPerHour": {},
  "MaximumNormalizedUnitsUsedPerHour": {},
  "AverageNumberOfInstancesUsedPerHour": {},
  "AverageNormalizedUnitsUsedPerHour": {},
  "AverageUtilization": {},
  "EstimatedBreakEvenInMonths": {},
  "CurrencyCode": {},
  "EstimatedMonthlySavingsAmount": {},
  "EstimatedMonthlySavingsPercentage": {},
  "EstimatedMonthlyOnDemandCost": {},
  "EstimatedReservationCostForLookbackPeriod": {},
  "UpfrontCost": {},
  "RecurringStandardMonthlyCost": {}
}
```

Details about your recommended reservation purchase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|InstanceDetails|object|false|none|none|
|RecommendedNumberOfInstancesToPurchase|object|false|none|none|
|RecommendedNormalizedUnitsToPurchase|object|false|none|none|
|MinimumNumberOfInstancesUsedPerHour|object|false|none|none|
|MinimumNormalizedUnitsUsedPerHour|object|false|none|none|
|MaximumNumberOfInstancesUsedPerHour|object|false|none|none|
|MaximumNormalizedUnitsUsedPerHour|object|false|none|none|
|AverageNumberOfInstancesUsedPerHour|object|false|none|none|
|AverageNormalizedUnitsUsedPerHour|object|false|none|none|
|AverageUtilization|object|false|none|none|
|EstimatedBreakEvenInMonths|object|false|none|none|
|CurrencyCode|object|false|none|none|
|EstimatedMonthlySavingsAmount|object|false|none|none|
|EstimatedMonthlySavingsPercentage|object|false|none|none|
|EstimatedMonthlyOnDemandCost|object|false|none|none|
|EstimatedReservationCostForLookbackPeriod|object|false|none|none|
|UpfrontCost|object|false|none|none|
|RecurringStandardMonthlyCost|object|false|none|none|

<h2 id="tocS_ReservationUtilizationGroup">ReservationUtilizationGroup</h2>
<!-- backwards compatibility -->
<a id="schemareservationutilizationgroup"></a>
<a id="schema_ReservationUtilizationGroup"></a>
<a id="tocSreservationutilizationgroup"></a>
<a id="tocsreservationutilizationgroup"></a>

```json
{
  "Key": {},
  "Value": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "Utilization": {
    "UtilizationPercentage": {},
    "UtilizationPercentageInUnits": {},
    "PurchasedHours": {},
    "PurchasedUnits": {},
    "TotalActualHours": {},
    "TotalActualUnits": {},
    "UnusedHours": {},
    "UnusedUnits": {},
    "OnDemandCostOfRIHoursUsed": {},
    "NetRISavings": {},
    "TotalPotentialRISavings": {},
    "AmortizedUpfrontFee": {},
    "AmortizedRecurringFee": {},
    "TotalAmortizedFee": {},
    "RICostForUnusedHours": {},
    "RealizedSavings": {},
    "UnrealizedSavings": {}
  }
}
```

A group of reservations that share a set of attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|
|Attributes|object|false|none|none|
|Utilization|object|false|none|none|

<h2 id="tocS_ReservationUtilizationGroups">ReservationUtilizationGroups</h2>
<!-- backwards compatibility -->
<a id="schemareservationutilizationgroups"></a>
<a id="schema_ReservationUtilizationGroups"></a>
<a id="tocSreservationutilizationgroups"></a>
<a id="tocsreservationutilizationgroups"></a>

```json
[
  {
    "Key": {},
    "Value": {},
    "Attributes": {
      "property1": "string",
      "property2": "string"
    },
    "Utilization": {
      "UtilizationPercentage": {},
      "UtilizationPercentageInUnits": {},
      "PurchasedHours": {},
      "PurchasedUnits": {},
      "TotalActualHours": {},
      "TotalActualUnits": {},
      "UnusedHours": {},
      "UnusedUnits": {},
      "OnDemandCostOfRIHoursUsed": {},
      "NetRISavings": {},
      "TotalPotentialRISavings": {},
      "AmortizedUpfrontFee": {},
      "AmortizedRecurringFee": {},
      "TotalAmortizedFee": {},
      "RICostForUnusedHours": {},
      "RealizedSavings": {},
      "UnrealizedSavings": {}
    }
  }
]
```

<h2 id="tocS_ResourceTagKey">ResourceTagKey</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetagkey"></a>
<a id="schema_ResourceTagKey"></a>
<a id="tocSresourcetagkey"></a>
<a id="tocsresourcetagkey"></a>

```json
"string"
```

<h2 id="tocS_ResourceTagValue">ResourceTagValue</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetagvalue"></a>
<a id="schema_ResourceTagValue"></a>
<a id="tocSresourcetagvalue"></a>
<a id="tocsresourcetagvalue"></a>

```json
"string"
```

<h2 id="tocS_ResourceTag">ResourceTag</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetag"></a>
<a id="schema_ResourceTag"></a>
<a id="tocSresourcetag"></a>
<a id="tocsresourcetag"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

<p>The tag structure that contains a tag key and value. </p> <note> <p>Tagging is supported only for the following Cost Explorer resource types: <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalyMonitor.html"> <code>AnomalyMonitor</code> </a>, <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalySubscription.html"> <code>AnomalySubscription</code> </a>, <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategory.html"> <code>CostCategory</code> </a>.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_ResourceTagKeyList">ResourceTagKeyList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetagkeylist"></a>
<a id="schema_ResourceTagKeyList"></a>
<a id="tocSresourcetagkeylist"></a>
<a id="tocsresourcetagkeylist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResultByTime">ResultByTime</h2>
<!-- backwards compatibility -->
<a id="schemaresultbytime"></a>
<a id="schema_ResultByTime"></a>
<a id="tocSresultbytime"></a>
<a id="tocsresultbytime"></a>

```json
{
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "Total": {
    "property1": {
      "Amount": {},
      "Unit": {}
    },
    "property2": {
      "Amount": {},
      "Unit": {}
    }
  },
  "Groups": {},
  "Estimated": {}
}
```

The result that's associated with a time period.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimePeriod|object|false|none|none|
|Total|object|false|none|none|
|Groups|object|false|none|none|
|Estimated|object|false|none|none|

<h2 id="tocS_RightsizingType">RightsizingType</h2>
<!-- backwards compatibility -->
<a id="schemarightsizingtype"></a>
<a id="schema_RightsizingType"></a>
<a id="tocSrightsizingtype"></a>
<a id="tocsrightsizingtype"></a>

```json
"TERMINATE"
```

<h2 id="tocS_TerminateRecommendationDetail">TerminateRecommendationDetail</h2>
<!-- backwards compatibility -->
<a id="schematerminaterecommendationdetail"></a>
<a id="schema_TerminateRecommendationDetail"></a>
<a id="tocSterminaterecommendationdetail"></a>
<a id="tocsterminaterecommendationdetail"></a>

```json
{
  "EstimatedMonthlySavings": {},
  "CurrencyCode": {}
}
```

Details on termination recommendation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EstimatedMonthlySavings|object|false|none|none|
|CurrencyCode|object|false|none|none|

<h2 id="tocS_RightsizingRecommendation">RightsizingRecommendation</h2>
<!-- backwards compatibility -->
<a id="schemarightsizingrecommendation"></a>
<a id="schema_RightsizingRecommendation"></a>
<a id="tocSrightsizingrecommendation"></a>
<a id="tocsrightsizingrecommendation"></a>

```json
{
  "AccountId": {},
  "CurrentInstance": {
    "ResourceId": {},
    "InstanceName": {},
    "Tags": {},
    "ResourceDetails": {
      "EC2ResourceDetails": {
        "HourlyOnDemandRate": {},
        "InstanceType": {},
        "Platform": {},
        "Region": {},
        "Sku": {},
        "Memory": {},
        "NetworkPerformance": {},
        "Storage": {},
        "Vcpu": {}
      }
    },
    "ResourceUtilization": {
      "EC2ResourceUtilization": {
        "MaxCpuUtilizationPercentage": {},
        "MaxMemoryUtilizationPercentage": {},
        "MaxStorageUtilizationPercentage": {},
        "EBSResourceUtilization": {
          "EbsReadOpsPerSecond": {},
          "EbsWriteOpsPerSecond": {},
          "EbsReadBytesPerSecond": {},
          "EbsWriteBytesPerSecond": {}
        },
        "DiskResourceUtilization": {
          "DiskReadOpsPerSecond": {},
          "DiskWriteOpsPerSecond": {},
          "DiskReadBytesPerSecond": {},
          "DiskWriteBytesPerSecond": {}
        },
        "NetworkResourceUtilization": {
          "NetworkInBytesPerSecond": {},
          "NetworkOutBytesPerSecond": {},
          "NetworkPacketsInPerSecond": {},
          "NetworkPacketsOutPerSecond": {}
        }
      }
    },
    "ReservationCoveredHoursInLookbackPeriod": {},
    "SavingsPlansCoveredHoursInLookbackPeriod": {},
    "OnDemandHoursInLookbackPeriod": {},
    "TotalRunningHoursInLookbackPeriod": {},
    "MonthlyCost": {},
    "CurrencyCode": {}
  },
  "RightsizingType": {},
  "ModifyRecommendationDetail": {
    "TargetInstances": {}
  },
  "TerminateRecommendationDetail": {
    "EstimatedMonthlySavings": {},
    "CurrencyCode": {}
  },
  "FindingReasonCodes": {}
}
```

Recommendations to rightsize resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|CurrentInstance|object|false|none|none|
|RightsizingType|object|false|none|none|
|ModifyRecommendationDetail|object|false|none|none|
|TerminateRecommendationDetail|object|false|none|none|
|FindingReasonCodes|object|false|none|none|

<h2 id="tocS_RootCause">RootCause</h2>
<!-- backwards compatibility -->
<a id="schemarootcause"></a>
<a id="schema_RootCause"></a>
<a id="tocSrootcause"></a>
<a id="tocsrootcause"></a>

```json
{
  "Service": {},
  "Region": {},
  "LinkedAccount": {},
  "UsageType": {},
  "LinkedAccountName": {}
}
```

The combination of Amazon Web Service, linked account, linked account name, Region, and usage type where a cost anomaly is observed. The linked account name will only be available when the account name can be identified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Service|object|false|none|none|
|Region|object|false|none|none|
|LinkedAccount|object|false|none|none|
|UsageType|object|false|none|none|
|LinkedAccountName|object|false|none|none|

<h2 id="tocS_SavingsPlanArn">SavingsPlanArn</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanarn"></a>
<a id="schema_SavingsPlanArn"></a>
<a id="tocSsavingsplanarn"></a>
<a id="tocssavingsplanarn"></a>

```json
"string"
```

<h2 id="tocS_SavingsPlansAmortizedCommitment">SavingsPlansAmortizedCommitment</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplansamortizedcommitment"></a>
<a id="schema_SavingsPlansAmortizedCommitment"></a>
<a id="tocSsavingsplansamortizedcommitment"></a>
<a id="tocssavingsplansamortizedcommitment"></a>

```json
{
  "AmortizedRecurringCommitment": {},
  "AmortizedUpfrontCommitment": {},
  "TotalAmortizedCommitment": {}
}
```

The amortized amount of Savings Plans purchased in a specific account during a specific time interval.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AmortizedRecurringCommitment|object|false|none|none|
|AmortizedUpfrontCommitment|object|false|none|none|
|TotalAmortizedCommitment|object|false|none|none|

<h2 id="tocS_SavingsPlansCoverageData">SavingsPlansCoverageData</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanscoveragedata"></a>
<a id="schema_SavingsPlansCoverageData"></a>
<a id="tocSsavingsplanscoveragedata"></a>
<a id="tocssavingsplanscoveragedata"></a>

```json
{
  "SpendCoveredBySavingsPlans": {},
  "OnDemandCost": {},
  "TotalCost": {},
  "CoveragePercentage": {}
}
```

Specific coverage percentage, On-Demand costs, and spend covered by Savings Plans, and total Savings Plans costs for an account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SpendCoveredBySavingsPlans|object|false|none|none|
|OnDemandCost|object|false|none|none|
|TotalCost|object|false|none|none|
|CoveragePercentage|object|false|none|none|

<h2 id="tocS_SavingsPlansCoverage">SavingsPlansCoverage</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanscoverage"></a>
<a id="schema_SavingsPlansCoverage"></a>
<a id="tocSsavingsplanscoverage"></a>
<a id="tocssavingsplanscoverage"></a>

```json
{
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "Coverage": {
    "SpendCoveredBySavingsPlans": {},
    "OnDemandCost": {},
    "TotalCost": {},
    "CoveragePercentage": {}
  },
  "TimePeriod": {
    "Start": {},
    "End": {}
  }
}
```

The amount of Savings Plans eligible usage that's covered by Savings Plans. All calculations consider the On-Demand equivalent of your Savings Plans usage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|
|Coverage|object|false|none|none|
|TimePeriod|[DateInterval](#schemadateinterval)|false|none|The time period of the request. |

<h2 id="tocS_SavingsPlansDataType">SavingsPlansDataType</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplansdatatype"></a>
<a id="schema_SavingsPlansDataType"></a>
<a id="tocSsavingsplansdatatype"></a>
<a id="tocssavingsplansdatatype"></a>

```json
"ATTRIBUTES"
```

<h2 id="tocS_SavingsPlansDetails">SavingsPlansDetails</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplansdetails"></a>
<a id="schema_SavingsPlansDetails"></a>
<a id="tocSsavingsplansdetails"></a>
<a id="tocssavingsplansdetails"></a>

```json
{
  "Region": {},
  "InstanceFamily": {},
  "OfferingId": {}
}
```

The attribute details on a specific Savings Plan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Region|object|false|none|none|
|InstanceFamily|object|false|none|none|
|OfferingId|object|false|none|none|

<h2 id="tocS_SavingsPlansPurchaseRecommendationDetailList">SavingsPlansPurchaseRecommendationDetailList</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanspurchaserecommendationdetaillist"></a>
<a id="schema_SavingsPlansPurchaseRecommendationDetailList"></a>
<a id="tocSsavingsplanspurchaserecommendationdetaillist"></a>
<a id="tocssavingsplanspurchaserecommendationdetaillist"></a>

```json
[
  {
    "SavingsPlansDetails": {
      "Region": {},
      "InstanceFamily": {},
      "OfferingId": {}
    },
    "AccountId": {},
    "UpfrontCost": {},
    "EstimatedROI": {},
    "CurrencyCode": {},
    "EstimatedSPCost": {},
    "EstimatedOnDemandCost": {},
    "EstimatedOnDemandCostWithCurrentCommitment": {},
    "EstimatedSavingsAmount": {},
    "EstimatedSavingsPercentage": {},
    "HourlyCommitmentToPurchase": {},
    "EstimatedAverageUtilization": {},
    "EstimatedMonthlySavingsAmount": {},
    "CurrentMinimumHourlyOnDemandSpend": {},
    "CurrentMaximumHourlyOnDemandSpend": {},
    "CurrentAverageHourlyOnDemandSpend": {}
  }
]
```

<h2 id="tocS_SavingsPlansPurchaseRecommendationSummary">SavingsPlansPurchaseRecommendationSummary</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanspurchaserecommendationsummary"></a>
<a id="schema_SavingsPlansPurchaseRecommendationSummary"></a>
<a id="tocSsavingsplanspurchaserecommendationsummary"></a>
<a id="tocssavingsplanspurchaserecommendationsummary"></a>

```json
{
  "EstimatedROI": {},
  "CurrencyCode": {},
  "EstimatedTotalCost": {},
  "CurrentOnDemandSpend": {},
  "EstimatedSavingsAmount": {},
  "TotalRecommendationCount": {},
  "DailyCommitmentToPurchase": {},
  "HourlyCommitmentToPurchase": {},
  "EstimatedSavingsPercentage": {},
  "EstimatedMonthlySavingsAmount": {},
  "EstimatedOnDemandCostWithCurrentCommitment": {}
}
```

Summary metrics for your Savings Plans Purchase Recommendations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EstimatedROI|object|false|none|none|
|CurrencyCode|object|false|none|none|
|EstimatedTotalCost|object|false|none|none|
|CurrentOnDemandSpend|object|false|none|none|
|EstimatedSavingsAmount|object|false|none|none|
|TotalRecommendationCount|object|false|none|none|
|DailyCommitmentToPurchase|object|false|none|none|
|HourlyCommitmentToPurchase|object|false|none|none|
|EstimatedSavingsPercentage|object|false|none|none|
|EstimatedMonthlySavingsAmount|object|false|none|none|
|EstimatedOnDemandCostWithCurrentCommitment|object|false|none|none|

<h2 id="tocS_SavingsPlansPurchaseRecommendationDetail">SavingsPlansPurchaseRecommendationDetail</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanspurchaserecommendationdetail"></a>
<a id="schema_SavingsPlansPurchaseRecommendationDetail"></a>
<a id="tocSsavingsplanspurchaserecommendationdetail"></a>
<a id="tocssavingsplanspurchaserecommendationdetail"></a>

```json
{
  "SavingsPlansDetails": {
    "Region": {},
    "InstanceFamily": {},
    "OfferingId": {}
  },
  "AccountId": {},
  "UpfrontCost": {},
  "EstimatedROI": {},
  "CurrencyCode": {},
  "EstimatedSPCost": {},
  "EstimatedOnDemandCost": {},
  "EstimatedOnDemandCostWithCurrentCommitment": {},
  "EstimatedSavingsAmount": {},
  "EstimatedSavingsPercentage": {},
  "HourlyCommitmentToPurchase": {},
  "EstimatedAverageUtilization": {},
  "EstimatedMonthlySavingsAmount": {},
  "CurrentMinimumHourlyOnDemandSpend": {},
  "CurrentMaximumHourlyOnDemandSpend": {},
  "CurrentAverageHourlyOnDemandSpend": {}
}
```

Details for your recommended Savings Plans.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SavingsPlansDetails|object|false|none|none|
|AccountId|object|false|none|none|
|UpfrontCost|object|false|none|none|
|EstimatedROI|object|false|none|none|
|CurrencyCode|object|false|none|none|
|EstimatedSPCost|object|false|none|none|
|EstimatedOnDemandCost|object|false|none|none|
|EstimatedOnDemandCostWithCurrentCommitment|object|false|none|none|
|EstimatedSavingsAmount|object|false|none|none|
|EstimatedSavingsPercentage|object|false|none|none|
|HourlyCommitmentToPurchase|object|false|none|none|
|EstimatedAverageUtilization|object|false|none|none|
|EstimatedMonthlySavingsAmount|object|false|none|none|
|CurrentMinimumHourlyOnDemandSpend|object|false|none|none|
|CurrentMaximumHourlyOnDemandSpend|object|false|none|none|
|CurrentAverageHourlyOnDemandSpend|object|false|none|none|

<h2 id="tocS_SavingsPlansSavings">SavingsPlansSavings</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanssavings"></a>
<a id="schema_SavingsPlansSavings"></a>
<a id="tocSsavingsplanssavings"></a>
<a id="tocssavingsplanssavings"></a>

```json
{
  "NetSavings": {},
  "OnDemandCostEquivalent": {}
}
```

The amount of savings that you're accumulating, against the public On-Demand rate of the usage accrued in an account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NetSavings|object|false|none|none|
|OnDemandCostEquivalent|object|false|none|none|

<h2 id="tocS_SavingsPlansUtilization">SavingsPlansUtilization</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplansutilization"></a>
<a id="schema_SavingsPlansUtilization"></a>
<a id="tocSsavingsplansutilization"></a>
<a id="tocssavingsplansutilization"></a>

```json
{
  "TotalCommitment": {},
  "UsedCommitment": {},
  "UnusedCommitment": {},
  "UtilizationPercentage": {}
}
```

The measurement of how well you're using your existing Savings Plans.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TotalCommitment|object|false|none|none|
|UsedCommitment|object|false|none|none|
|UnusedCommitment|object|false|none|none|
|UtilizationPercentage|object|false|none|none|

<h2 id="tocS_SavingsPlansUtilizationByTime">SavingsPlansUtilizationByTime</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplansutilizationbytime"></a>
<a id="schema_SavingsPlansUtilizationByTime"></a>
<a id="tocSsavingsplansutilizationbytime"></a>
<a id="tocssavingsplansutilizationbytime"></a>

```json
{
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "Utilization": {
    "TotalCommitment": {},
    "UsedCommitment": {},
    "UnusedCommitment": {},
    "UtilizationPercentage": {}
  },
  "Savings": {
    "NetSavings": {},
    "OnDemandCostEquivalent": {}
  },
  "AmortizedCommitment": {
    "AmortizedRecurringCommitment": {},
    "AmortizedUpfrontCommitment": {},
    "TotalAmortizedCommitment": {}
  }
}
```

The amount of Savings Plans utilization (in hours).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimePeriod|[DateInterval](#schemadateinterval)|true|none|The time period of the request. |
|Utilization|object|true|none|none|
|Savings|object|false|none|none|
|AmortizedCommitment|object|false|none|none|

<h2 id="tocS_SavingsPlansUtilizationDetail">SavingsPlansUtilizationDetail</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplansutilizationdetail"></a>
<a id="schema_SavingsPlansUtilizationDetail"></a>
<a id="tocSsavingsplansutilizationdetail"></a>
<a id="tocssavingsplansutilizationdetail"></a>

```json
{
  "SavingsPlanArn": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "Utilization": {
    "TotalCommitment": {},
    "UsedCommitment": {},
    "UnusedCommitment": {},
    "UtilizationPercentage": {}
  },
  "Savings": {
    "NetSavings": {},
    "OnDemandCostEquivalent": {}
  },
  "AmortizedCommitment": {
    "AmortizedRecurringCommitment": {},
    "AmortizedUpfrontCommitment": {},
    "TotalAmortizedCommitment": {}
  }
}
```

A single daily or monthly Savings Plans utilization rate and details for your account. A management account in an organization have access to member accounts. You can use <code>GetDimensionValues</code> to determine the possible dimension values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SavingsPlanArn|object|false|none|none|
|Attributes|object|false|none|none|
|Utilization|object|false|none|none|
|Savings|object|false|none|none|
|AmortizedCommitment|object|false|none|none|

<h2 id="tocS_SortDefinitionKey">SortDefinitionKey</h2>
<!-- backwards compatibility -->
<a id="schemasortdefinitionkey"></a>
<a id="schema_SortDefinitionKey"></a>
<a id="tocSsortdefinitionkey"></a>
<a id="tocssortdefinitionkey"></a>

```json
"string"
```

<h2 id="tocS_SortOrder">SortOrder</h2>
<!-- backwards compatibility -->
<a id="schemasortorder"></a>
<a id="schema_SortOrder"></a>
<a id="tocSsortorder"></a>
<a id="tocssortorder"></a>

```json
"ASCENDING"
```

<h2 id="tocS_SubscriberAddress">SubscriberAddress</h2>
<!-- backwards compatibility -->
<a id="schemasubscriberaddress"></a>
<a id="schema_SubscriberAddress"></a>
<a id="tocSsubscriberaddress"></a>
<a id="tocssubscriberaddress"></a>

```json
"string"
```

<h2 id="tocS_SubscriberType">SubscriberType</h2>
<!-- backwards compatibility -->
<a id="schemasubscribertype"></a>
<a id="schema_SubscriberType"></a>
<a id="tocSsubscribertype"></a>
<a id="tocssubscribertype"></a>

```json
"EMAIL"
```

<h2 id="tocS_SubscriberStatus">SubscriberStatus</h2>
<!-- backwards compatibility -->
<a id="schemasubscriberstatus"></a>
<a id="schema_SubscriberStatus"></a>
<a id="tocSsubscriberstatus"></a>
<a id="tocssubscriberstatus"></a>

```json
"CONFIRMED"
```

<h2 id="tocS_Subscriber">Subscriber</h2>
<!-- backwards compatibility -->
<a id="schemasubscriber"></a>
<a id="schema_Subscriber"></a>
<a id="tocSsubscriber"></a>
<a id="tocssubscriber"></a>

```json
{
  "Address": {},
  "Type": {},
  "Status": {}
}
```

The recipient of <code>AnomalySubscription</code> notifications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Address|object|false|none|none|
|Type|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_TargetInstance">TargetInstance</h2>
<!-- backwards compatibility -->
<a id="schematargetinstance"></a>
<a id="schema_TargetInstance"></a>
<a id="tocStargetinstance"></a>
<a id="tocstargetinstance"></a>

```json
{
  "EstimatedMonthlyCost": {},
  "EstimatedMonthlySavings": {},
  "CurrencyCode": {},
  "DefaultTargetInstance": {},
  "ResourceDetails": {
    "EC2ResourceDetails": {
      "HourlyOnDemandRate": {},
      "InstanceType": {},
      "Platform": {},
      "Region": {},
      "Sku": {},
      "Memory": {},
      "NetworkPerformance": {},
      "Storage": {},
      "Vcpu": {}
    }
  },
  "ExpectedResourceUtilization": {
    "EC2ResourceUtilization": {
      "MaxCpuUtilizationPercentage": {},
      "MaxMemoryUtilizationPercentage": {},
      "MaxStorageUtilizationPercentage": {},
      "EBSResourceUtilization": {
        "EbsReadOpsPerSecond": {},
        "EbsWriteOpsPerSecond": {},
        "EbsReadBytesPerSecond": {},
        "EbsWriteBytesPerSecond": {}
      },
      "DiskResourceUtilization": {
        "DiskReadOpsPerSecond": {},
        "DiskWriteOpsPerSecond": {},
        "DiskReadBytesPerSecond": {},
        "DiskWriteBytesPerSecond": {}
      },
      "NetworkResourceUtilization": {
        "NetworkInBytesPerSecond": {},
        "NetworkOutBytesPerSecond": {},
        "NetworkPacketsInPerSecond": {},
        "NetworkPacketsOutPerSecond": {}
      }
    }
  },
  "PlatformDifferences": {}
}
```

Details on recommended instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EstimatedMonthlyCost|object|false|none|none|
|EstimatedMonthlySavings|object|false|none|none|
|CurrencyCode|object|false|none|none|
|DefaultTargetInstance|object|false|none|none|
|ResourceDetails|object|false|none|none|
|ExpectedResourceUtilization|object|false|none|none|
|PlatformDifferences|object|false|none|none|

<h2 id="tocS_UpdateCostAllocationTagsStatusError">UpdateCostAllocationTagsStatusError</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecostallocationtagsstatuserror"></a>
<a id="schema_UpdateCostAllocationTagsStatusError"></a>
<a id="tocSupdatecostallocationtagsstatuserror"></a>
<a id="tocsupdatecostallocationtagsstatuserror"></a>

```json
{
  "TagKey": {},
  "Code": {},
  "Message": {}
}
```

Gives a detailed description of the result of an action. It's on each cost allocation tag entry in the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagKey|object|false|none|none|
|Code|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_UpdateCostAllocationTagsStatusErrors">UpdateCostAllocationTagsStatusErrors</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecostallocationtagsstatuserrors"></a>
<a id="schema_UpdateCostAllocationTagsStatusErrors"></a>
<a id="tocSupdatecostallocationtagsstatuserrors"></a>
<a id="tocsupdatecostallocationtagsstatuserrors"></a>

```json
[
  {
    "TagKey": {},
    "Code": {},
    "Message": {}
  }
]
```

<h2 id="tocS_UtilizationByTime">UtilizationByTime</h2>
<!-- backwards compatibility -->
<a id="schemautilizationbytime"></a>
<a id="schema_UtilizationByTime"></a>
<a id="tocSutilizationbytime"></a>
<a id="tocsutilizationbytime"></a>

```json
{
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "Groups": {},
  "Total": {
    "UtilizationPercentage": {},
    "UtilizationPercentageInUnits": {},
    "PurchasedHours": {},
    "PurchasedUnits": {},
    "TotalActualHours": {},
    "TotalActualUnits": {},
    "UnusedHours": {},
    "UnusedUnits": {},
    "OnDemandCostOfRIHoursUsed": {},
    "NetRISavings": {},
    "TotalPotentialRISavings": {},
    "AmortizedUpfrontFee": {},
    "AmortizedRecurringFee": {},
    "TotalAmortizedFee": {},
    "RICostForUnusedHours": {},
    "RealizedSavings": {},
    "UnrealizedSavings": {}
  }
}
```

The amount of utilization, in hours.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimePeriod|object|false|none|none|
|Groups|object|false|none|none|
|Total|object|false|none|none|
