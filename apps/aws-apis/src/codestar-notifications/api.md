<h1 id="aws-codestar-notifications">AWS CodeStar Notifications v2019-10-15</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>This AWS CodeStar Notifications API Reference provides descriptions and usage examples of the operations and data types for the AWS CodeStar Notifications API. You can use the AWS CodeStar Notifications API to work with the following objects:</p> <p>Notification rules, by calling the following: </p> <ul> <li> <p> <a>CreateNotificationRule</a>, which creates a notification rule for a resource in your account. </p> </li> <li> <p> <a>DeleteNotificationRule</a>, which deletes a notification rule. </p> </li> <li> <p> <a>DescribeNotificationRule</a>, which provides information about a notification rule. </p> </li> <li> <p> <a>ListNotificationRules</a>, which lists the notification rules associated with your account. </p> </li> <li> <p> <a>UpdateNotificationRule</a>, which changes the name, events, or targets associated with a notification rule. </p> </li> <li> <p> <a>Subscribe</a>, which subscribes a target to a notification rule. </p> </li> <li> <p> <a>Unsubscribe</a>, which removes a target from a notification rule. </p> </li> </ul> <p>Targets, by calling the following: </p> <ul> <li> <p> <a>DeleteTarget</a>, which removes a notification rule target from a notification rule. </p> </li> <li> <p> <a>ListTargets</a>, which lists the targets associated with a notification rule. </p> </li> </ul> <p>Events, by calling the following: </p> <ul> <li> <p> <a>ListEventTypes</a>, which lists the event types you can include in a notification rule. </p> </li> </ul> <p>Tags, by calling the following: </p> <ul> <li> <p> <a>ListTagsForResource</a>, which lists the tags already associated with a notification rule in your account. </p> </li> <li> <p> <a>TagResource</a>, which associates a tag you provide with a notification rule in your account. </p> </li> <li> <p> <a>UntagResource</a>, which removes a tag from a notification rule in your account. </p> </li> </ul> <p> For information about how to use AWS CodeStar Notifications, see the <a href="https://docs.aws.amazon.com/dtconsole/latest/userguide/what-is-dtconsole.html">Amazon Web Services Developer Tools Console User Guide</a>. </p>

Base URLs:

* <a href="http://codestar-notifications.us-east-1.amazonaws.com">http://codestar-notifications.us-east-1.amazonaws.com</a> - The AWS CodeStar Notifications multi-region endpoint

* <a href="https://codestar-notifications.us-east-1.amazonaws.com">https://codestar-notifications.us-east-1.amazonaws.com</a> - The AWS CodeStar Notifications multi-region endpoint

* <a href="http://codestar-notifications.cn-north-1.amazonaws.com.cn">http://codestar-notifications.cn-north-1.amazonaws.com.cn</a> - The AWS CodeStar Notifications endpoint for China (Beijing) and China (Ningxia)

* <a href="https://codestar-notifications.cn-north-1.amazonaws.com.cn">https://codestar-notifications.cn-north-1.amazonaws.com.cn</a> - The AWS CodeStar Notifications endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/codestar-notifications/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-codestar-notifications-default">Default</h1>

## CreateNotificationRule

<a id="opIdCreateNotificationRule"></a>

> Code samples

```bash
curl https://codestar-notifications.us-east-1.amazonaws.com/createNotificationRule \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "password",
    "EventTypeIds": [
      "string"
    ],
    "Resource": "string",
    "Targets": [
      {
        "TargetType": {},
        "TargetAddress": {}
      }
    ],
    "DetailType": "BASIC",
    "ClientRequestToken": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Status": "ENABLED"
  }'
```

`POST /createNotificationRule`

Creates a notification rule for a resource. The rule specifies the events you want notifications about and the targets (such as Chatbot topics or Chatbot clients configured for Slack) where you want to receive them.

> Body parameter

```json
{
  "Name": "password",
  "EventTypeIds": [
    "string"
  ],
  "Resource": "string",
  "Targets": [
    {
      "TargetType": {},
      "TargetAddress": {}
    }
  ],
  "DetailType": "BASIC",
  "ClientRequestToken": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Status": "ENABLED"
}
```

<h3 id="createnotificationrule-parameters">Parameters</h3>

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
|» Name|body|string(password)|true|The name for the notification rule. Notification rule names must be unique in your Amazon Web Services account.|
|» EventTypeIds|body|[[EventTypeId](#schemaeventtypeid)]|true|A list of event types associated with this notification rule. For a list of allowed events, see <a>EventTypeSummary</a>.|
|» Resource|body|string|true|The Amazon Resource Name (ARN) of the resource to associate with the notification rule. Supported resources include pipelines in CodePipeline, repositories in CodeCommit, and build projects in CodeBuild.|
|» Targets|body|[[Target](#schematarget)]|true|A list of Amazon Resource Names (ARNs) of Amazon Simple Notification Service topics and Chatbot clients to associate with the notification rule.|
|» DetailType|body|string|true|The level of detail to include in the notifications for this resource. <code>BASIC</code> will include only the contents of the event as it would appear in Amazon CloudWatch. <code>FULL</code> will include any supplemental information provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created.|
|» ClientRequestToken|body|string|false|<p>A unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request with the same parameters is received and a token is included, the request returns information about the initial request that used that token.</p> <note> <p>The Amazon Web Services SDKs prepopulate client request tokens. If you are using an Amazon Web Services SDK, an idempotency token is created for you.</p> </note>|
|» Tags|body|object|false|A list of tags to apply to this notification rule. Key names cannot start with "<code>aws</code>". |
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» Status|body|string|false|The status of the notification rule. The default value is <code>ENABLED</code>. If the status is set to <code>DISABLED</code>, notifications aren't sent for the notification rule.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» DetailType|BASIC|
|» DetailType|FULL|
|» Status|ENABLED|
|» Status|DISABLED|

> Example responses

> 200 Response

```json
{
  "Arn": {}
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

<h3 id="createnotificationrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateNotificationRuleResult](#schemacreatenotificationruleresult)|
|480|480|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ConfigurationException|[ConfigurationException](#schemaconfigurationexception)|
|484|484|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteNotificationRule

<a id="opIdDeleteNotificationRule"></a>

> Code samples

```bash
curl https://codestar-notifications.us-east-1.amazonaws.com/deleteNotificationRule \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Arn": "string"
  }'
```

`POST /deleteNotificationRule`

Deletes a notification rule for a resource.

> Body parameter

```json
{
  "Arn": "string"
}
```

<h3 id="deletenotificationrule-parameters">Parameters</h3>

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
|» Arn|body|string|true|The Amazon Resource Name (ARN) of the notification rule you want to delete.|

> Example responses

> 200 Response

```json
{
  "Arn": {}
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

<h3 id="deletenotificationrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteNotificationRuleResult](#schemadeletenotificationruleresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTarget

<a id="opIdDeleteTarget"></a>

> Code samples

```bash
curl https://codestar-notifications.us-east-1.amazonaws.com/deleteTarget \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TargetAddress": "password",
    "ForceUnsubscribeAll": true
  }'
```

`POST /deleteTarget`

Deletes a specified target for notifications.

> Body parameter

```json
{
  "TargetAddress": "password",
  "ForceUnsubscribeAll": true
}
```

<h3 id="deletetarget-parameters">Parameters</h3>

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
|» TargetAddress|body|string(password)|true|The Amazon Resource Name (ARN) of the Chatbot topic or Chatbot client to delete.|
|» ForceUnsubscribeAll|body|boolean|false|A Boolean value that can be used to delete all associations with this Chatbot topic. The default value is FALSE. If set to TRUE, all associations between that target and every notification rule in your Amazon Web Services account are deleted.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="deletetarget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTargetResult](#schemadeletetargetresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeNotificationRule

<a id="opIdDescribeNotificationRule"></a>

> Code samples

```bash
curl https://codestar-notifications.us-east-1.amazonaws.com/describeNotificationRule \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Arn": "string"
  }'
```

`POST /describeNotificationRule`

Returns information about a specified notification rule.

> Body parameter

```json
{
  "Arn": "string"
}
```

<h3 id="describenotificationrule-parameters">Parameters</h3>

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
|» Arn|body|string|true|The Amazon Resource Name (ARN) of the notification rule.|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "Name": {},
  "EventTypes": {},
  "Resource": {},
  "Targets": {},
  "DetailType": {},
  "CreatedBy": {},
  "Status": {},
  "CreatedTimestamp": {},
  "LastModifiedTimestamp": {},
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

<h3 id="describenotificationrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeNotificationRuleResult](#schemadescribenotificationruleresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEventTypes

<a id="opIdListEventTypes"></a>

> Code samples

```bash
curl https://codestar-notifications.us-east-1.amazonaws.com/listEventTypes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Filters": [
      {
        "Name": {},
        "Value": {}
      }
    ],
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /listEventTypes`

Returns information about the event types available for configuring notifications.

> Body parameter

```json
{
  "Filters": [
    {
      "Name": {},
      "Value": {}
    }
  ],
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listeventtypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Filters|body|[[ListEventTypesFilter](#schemalisteventtypesfilter)]|false|The filters to use to return information by service or resource type.|
|» NextToken|body|string|false|An enumeration token that, when provided in a request, returns the next batch of the results.|
|» MaxResults|body|integer|false|A non-negative integer used to limit the number of returned results. The default number is 50. The maximum number of results that can be returned is 100.|

> Example responses

> 200 Response

```json
{
  "EventTypes": {},
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

<h3 id="listeventtypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEventTypesResult](#schemalisteventtypesresult)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListNotificationRules

<a id="opIdListNotificationRules"></a>

> Code samples

```bash
curl https://codestar-notifications.us-east-1.amazonaws.com/listNotificationRules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Filters": [
      {
        "Name": {},
        "Value": {}
      }
    ],
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /listNotificationRules`

Returns a list of the notification rules for an Amazon Web Services account.

> Body parameter

```json
{
  "Filters": [
    {
      "Name": {},
      "Value": {}
    }
  ],
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listnotificationrules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Filters|body|[[ListNotificationRulesFilter](#schemalistnotificationrulesfilter)]|false|<p>The filters to use to return information by service or resource type. For valid values, see <a>ListNotificationRulesFilter</a>.</p> <note> <p>A filter with the same name can appear more than once when used with OR statements. Filters with different names should be applied with AND statements.</p> </note>|
|» NextToken|body|string|false|An enumeration token that, when provided in a request, returns the next batch of the results.|
|» MaxResults|body|integer|false|A non-negative integer used to limit the number of returned results. The maximum number of results that can be returned is 100.|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "NotificationRules": {}
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

<h3 id="listnotificationrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListNotificationRulesResult](#schemalistnotificationrulesresult)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://codestar-notifications.us-east-1.amazonaws.com/listTagsForResource \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Arn": "string"
  }'
```

`POST /listTagsForResource`

Returns a list of the tags associated with a notification rule.

> Body parameter

```json
{
  "Arn": "string"
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

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
|» Arn|body|string|true|The Amazon Resource Name (ARN) for the notification rule.|

> Example responses

> 200 Response

```json
{
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResult](#schemalisttagsforresourceresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTargets

<a id="opIdListTargets"></a>

> Code samples

```bash
curl https://codestar-notifications.us-east-1.amazonaws.com/listTargets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Filters": [
      {
        "Name": {},
        "Value": {}
      }
    ],
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /listTargets`

Returns a list of the notification rule targets for an Amazon Web Services account.

> Body parameter

```json
{
  "Filters": [
    {
      "Name": {},
      "Value": {}
    }
  ],
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listtargets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Filters|body|[[ListTargetsFilter](#schemalisttargetsfilter)]|false|<p>The filters to use to return information by service or resource type. Valid filters include target type, target address, and target status.</p> <note> <p>A filter with the same name can appear more than once when used with OR statements. Filters with different names should be applied with AND statements.</p> </note>|
|» NextToken|body|string|false|An enumeration token that, when provided in a request, returns the next batch of the results.|
|» MaxResults|body|integer|false|A non-negative integer used to limit the number of returned results. The maximum number of results that can be returned is 100.|

> Example responses

> 200 Response

```json
{
  "Targets": {},
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

<h3 id="listtargets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTargetsResult](#schemalisttargetsresult)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## Subscribe

<a id="opIdSubscribe"></a>

> Code samples

```bash
curl https://codestar-notifications.us-east-1.amazonaws.com/subscribe \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Arn": "string",
    "Target": {
      "TargetType": {},
      "TargetAddress": {}
    },
    "ClientRequestToken": "string"
  }'
```

`POST /subscribe`

Creates an association between a notification rule and an Chatbot topic or Chatbot client so that the associated target can receive notifications when the events described in the rule are triggered.

> Body parameter

```json
{
  "Arn": "string",
  "Target": {
    "TargetType": {},
    "TargetAddress": {}
  },
  "ClientRequestToken": "string"
}
```

<h3 id="subscribe-parameters">Parameters</h3>

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
|» Arn|body|string|true|The Amazon Resource Name (ARN) of the notification rule for which you want to create the association.|
|» Target|body|object|true|Information about the Chatbot topics or Chatbot clients associated with a notification rule.|
|» » TargetType|body|object|false|none|
|» » TargetAddress|body|object|false|none|
|» ClientRequestToken|body|string|false|An enumeration token that, when provided in a request, returns the next batch of the results.|

> Example responses

> 200 Response

```json
{
  "Arn": {}
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

<h3 id="subscribe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SubscribeResult](#schemasubscriberesult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConfigurationException|[ConfigurationException](#schemaconfigurationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://codestar-notifications.us-east-1.amazonaws.com/tagResource \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Arn": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /tagResource`

Associates a set of provided tags with a notification rule.

> Body parameter

```json
{
  "Arn": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="tagresource-parameters">Parameters</h3>

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
|» Arn|body|string|true|The Amazon Resource Name (ARN) of the notification rule to tag.|
|» Tags|body|object|true|The list of tags to associate with the resource. Tag key names cannot start with "<code>aws</code>".|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResult](#schematagresourceresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## Unsubscribe

<a id="opIdUnsubscribe"></a>

> Code samples

```bash
curl https://codestar-notifications.us-east-1.amazonaws.com/unsubscribe \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Arn": "string",
    "TargetAddress": "password"
  }'
```

`POST /unsubscribe`

Removes an association between a notification rule and an Chatbot topic so that subscribers to that topic stop receiving notifications when the events described in the rule are triggered.

> Body parameter

```json
{
  "Arn": "string",
  "TargetAddress": "password"
}
```

<h3 id="unsubscribe-parameters">Parameters</h3>

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
|» Arn|body|string|true|The Amazon Resource Name (ARN) of the notification rule.|
|» TargetAddress|body|string(password)|true|The ARN of the Chatbot topic to unsubscribe from the notification rule.|

> Example responses

> 200 Response

```json
{
  "Arn": {}
}
```

> 480 Response

```json
null
```

<h3 id="unsubscribe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UnsubscribeResult](#schemaunsubscriberesult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://codestar-notifications.us-east-1.amazonaws.com/untagResource/string#tagKeys?tagKeys=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /untagResource/{resourceArn}#tagKeys`

Removes the association between one or more provided tags and a notification rule.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the notification rule from which to remove the tags.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|The key names of the tags to remove.|
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
|200|OK|Success|[UntagResourceResult](#schemauntagresourceresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateNotificationRule

<a id="opIdUpdateNotificationRule"></a>

> Code samples

```bash
curl https://codestar-notifications.us-east-1.amazonaws.com/updateNotificationRule \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Arn": "string",
    "Name": "password",
    "Status": "ENABLED",
    "EventTypeIds": [
      "string"
    ],
    "Targets": [
      {
        "TargetType": {},
        "TargetAddress": {}
      }
    ],
    "DetailType": "BASIC"
  }'
```

`POST /updateNotificationRule`

<p>Updates a notification rule for a resource. You can change the events that trigger the notification rule, the status of the rule, and the targets that receive the notifications.</p> <note> <p>To add or remove tags for a notification rule, you must use <a>TagResource</a> and <a>UntagResource</a>.</p> </note>

> Body parameter

```json
{
  "Arn": "string",
  "Name": "password",
  "Status": "ENABLED",
  "EventTypeIds": [
    "string"
  ],
  "Targets": [
    {
      "TargetType": {},
      "TargetAddress": {}
    }
  ],
  "DetailType": "BASIC"
}
```

<h3 id="updatenotificationrule-parameters">Parameters</h3>

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
|» Arn|body|string|true|The Amazon Resource Name (ARN) of the notification rule.|
|» Name|body|string(password)|false|The name of the notification rule.|
|» Status|body|string|false|The status of the notification rule. Valid statuses include enabled (sending notifications) or disabled (not sending notifications).|
|» EventTypeIds|body|[[EventTypeId](#schemaeventtypeid)]|false|A list of event types associated with this notification rule. For a complete list of event types and IDs, see <a href="https://docs.aws.amazon.com/codestar-notifications/latest/userguide/concepts.html#concepts-api">Notification concepts</a> in the <i>Developer Tools Console User Guide</i>.|
|» Targets|body|[[Target](#schematarget)]|false|The address and type of the targets to receive notifications from this notification rule.|
|» DetailType|body|string|false|The level of detail to include in the notifications for this resource. BASIC will include only the contents of the event as it would appear in Amazon CloudWatch. FULL will include any supplemental information provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Status|ENABLED|
|» Status|DISABLED|
|» DetailType|BASIC|
|» DetailType|FULL|

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

<h3 id="updatenotificationrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateNotificationRuleResult](#schemaupdatenotificationruleresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConfigurationException|[ConfigurationException](#schemaconfigurationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateNotificationRuleResult">CreateNotificationRuleResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatenotificationruleresult"></a>
<a id="schema_CreateNotificationRuleResult"></a>
<a id="tocScreatenotificationruleresult"></a>
<a id="tocscreatenotificationruleresult"></a>

```json
{
  "Arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|

<h2 id="tocS_EventTypeId">EventTypeId</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypeid"></a>
<a id="schema_EventTypeId"></a>
<a id="tocSeventtypeid"></a>
<a id="tocseventtypeid"></a>

```json
"string"
```

<h2 id="tocS_Target">Target</h2>
<!-- backwards compatibility -->
<a id="schematarget"></a>
<a id="schema_Target"></a>
<a id="tocStarget"></a>
<a id="tocstarget"></a>

```json
{
  "TargetType": {},
  "TargetAddress": {}
}
```

Information about the Chatbot topics or Chatbot clients associated with a notification rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetType|object|false|none|none|
|TargetAddress|object|false|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_ResourceAlreadyExistsException">ResourceAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcealreadyexistsexception"></a>
<a id="schema_ResourceAlreadyExistsException"></a>
<a id="tocSresourcealreadyexistsexception"></a>
<a id="tocsresourcealreadyexistsexception"></a>

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

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_ConfigurationException">ConfigurationException</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationexception"></a>
<a id="schema_ConfigurationException"></a>
<a id="tocSconfigurationexception"></a>
<a id="tocsconfigurationexception"></a>

```json
null
```

<h2 id="tocS_ConcurrentModificationException">ConcurrentModificationException</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrentmodificationexception"></a>
<a id="schema_ConcurrentModificationException"></a>
<a id="tocSconcurrentmodificationexception"></a>
<a id="tocsconcurrentmodificationexception"></a>

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

<h2 id="tocS_DeleteNotificationRuleResult">DeleteNotificationRuleResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletenotificationruleresult"></a>
<a id="schema_DeleteNotificationRuleResult"></a>
<a id="tocSdeletenotificationruleresult"></a>
<a id="tocsdeletenotificationruleresult"></a>

```json
{
  "Arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|

<h2 id="tocS_DeleteTargetResult">DeleteTargetResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletetargetresult"></a>
<a id="schema_DeleteTargetResult"></a>
<a id="tocSdeletetargetresult"></a>
<a id="tocsdeletetargetresult"></a>

```json
{}
```

<h2 id="tocS_DescribeNotificationRuleResult">DescribeNotificationRuleResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribenotificationruleresult"></a>
<a id="schema_DescribeNotificationRuleResult"></a>
<a id="tocSdescribenotificationruleresult"></a>
<a id="tocsdescribenotificationruleresult"></a>

```json
{
  "Arn": {},
  "Name": {},
  "EventTypes": {},
  "Resource": {},
  "Targets": {},
  "DetailType": {},
  "CreatedBy": {},
  "Status": {},
  "CreatedTimestamp": {},
  "LastModifiedTimestamp": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|Name|object|false|none|none|
|EventTypes|object|false|none|none|
|Resource|object|false|none|none|
|Targets|object|false|none|none|
|DetailType|object|false|none|none|
|CreatedBy|object|false|none|none|
|Status|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|LastModifiedTimestamp|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_ListEventTypesResult">ListEventTypesResult</h2>
<!-- backwards compatibility -->
<a id="schemalisteventtypesresult"></a>
<a id="schema_ListEventTypesResult"></a>
<a id="tocSlisteventtypesresult"></a>
<a id="tocslisteventtypesresult"></a>

```json
{
  "EventTypes": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventTypes|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListEventTypesFilter">ListEventTypesFilter</h2>
<!-- backwards compatibility -->
<a id="schemalisteventtypesfilter"></a>
<a id="schema_ListEventTypesFilter"></a>
<a id="tocSlisteventtypesfilter"></a>
<a id="tocslisteventtypesfilter"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

Information about a filter to apply to the list of returned event types. You can filter by resource type or service name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_InvalidNextTokenException">InvalidNextTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnexttokenexception"></a>
<a id="schema_InvalidNextTokenException"></a>
<a id="tocSinvalidnexttokenexception"></a>
<a id="tocsinvalidnexttokenexception"></a>

```json
null
```

<h2 id="tocS_ListNotificationRulesResult">ListNotificationRulesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistnotificationrulesresult"></a>
<a id="schema_ListNotificationRulesResult"></a>
<a id="tocSlistnotificationrulesresult"></a>
<a id="tocslistnotificationrulesresult"></a>

```json
{
  "NextToken": {},
  "NotificationRules": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|NotificationRules|object|false|none|none|

<h2 id="tocS_ListNotificationRulesFilter">ListNotificationRulesFilter</h2>
<!-- backwards compatibility -->
<a id="schemalistnotificationrulesfilter"></a>
<a id="schema_ListNotificationRulesFilter"></a>
<a id="tocSlistnotificationrulesfilter"></a>
<a id="tocslistnotificationrulesfilter"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

Information about a filter to apply to the list of returned notification rules. You can filter by event type, owner, resource, or target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_ListTagsForResourceResult">ListTagsForResourceResult</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresult"></a>
<a id="schema_ListTagsForResourceResult"></a>
<a id="tocSlisttagsforresourceresult"></a>
<a id="tocslisttagsforresourceresult"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_ListTargetsResult">ListTargetsResult</h2>
<!-- backwards compatibility -->
<a id="schemalisttargetsresult"></a>
<a id="schema_ListTargetsResult"></a>
<a id="tocSlisttargetsresult"></a>
<a id="tocslisttargetsresult"></a>

```json
{
  "Targets": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Targets|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTargetsFilter">ListTargetsFilter</h2>
<!-- backwards compatibility -->
<a id="schemalisttargetsfilter"></a>
<a id="schema_ListTargetsFilter"></a>
<a id="tocSlisttargetsfilter"></a>
<a id="tocslisttargetsfilter"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

Information about a filter to apply to the list of returned targets. You can filter by target type, address, or status. For example, to filter results to notification rules that have active Chatbot topics as targets, you could specify a ListTargetsFilter Name as <code>TargetType</code> and a Value of <code>SNS</code>, and a Name of <code>TARGET_STATUS</code> and a Value of <code>ACTIVE</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_SubscribeResult">SubscribeResult</h2>
<!-- backwards compatibility -->
<a id="schemasubscriberesult"></a>
<a id="schema_SubscribeResult"></a>
<a id="tocSsubscriberesult"></a>
<a id="tocssubscriberesult"></a>

```json
{
  "Arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|

<h2 id="tocS_TargetType">TargetType</h2>
<!-- backwards compatibility -->
<a id="schematargettype"></a>
<a id="schema_TargetType"></a>
<a id="tocStargettype"></a>
<a id="tocstargettype"></a>

```json
"string"
```

<h2 id="tocS_TargetAddress">TargetAddress</h2>
<!-- backwards compatibility -->
<a id="schematargetaddress"></a>
<a id="schema_TargetAddress"></a>
<a id="tocStargetaddress"></a>
<a id="tocstargetaddress"></a>

```json
"password"
```

<h2 id="tocS_TagResourceResult">TagResourceResult</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresult"></a>
<a id="schema_TagResourceResult"></a>
<a id="tocStagresourceresult"></a>
<a id="tocstagresourceresult"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_UnsubscribeResult">UnsubscribeResult</h2>
<!-- backwards compatibility -->
<a id="schemaunsubscriberesult"></a>
<a id="schema_UnsubscribeResult"></a>
<a id="tocSunsubscriberesult"></a>
<a id="tocsunsubscriberesult"></a>

```json
{
  "Arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|

<h2 id="tocS_UntagResourceResult">UntagResourceResult</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresult"></a>
<a id="schema_UntagResourceResult"></a>
<a id="tocSuntagresourceresult"></a>
<a id="tocsuntagresourceresult"></a>

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

<h2 id="tocS_UpdateNotificationRuleResult">UpdateNotificationRuleResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenotificationruleresult"></a>
<a id="schema_UpdateNotificationRuleResult"></a>
<a id="tocSupdatenotificationruleresult"></a>
<a id="tocsupdatenotificationruleresult"></a>

```json
{}
```

<h2 id="tocS_ClientRequestToken">ClientRequestToken</h2>
<!-- backwards compatibility -->
<a id="schemaclientrequesttoken"></a>
<a id="schema_ClientRequestToken"></a>
<a id="tocSclientrequesttoken"></a>
<a id="tocsclientrequesttoken"></a>

```json
"string"
```

<h2 id="tocS_NotificationRuleName">NotificationRuleName</h2>
<!-- backwards compatibility -->
<a id="schemanotificationrulename"></a>
<a id="schema_NotificationRuleName"></a>
<a id="tocSnotificationrulename"></a>
<a id="tocsnotificationrulename"></a>

```json
"password"
```

<h2 id="tocS_EventTypeIds">EventTypeIds</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypeids"></a>
<a id="schema_EventTypeIds"></a>
<a id="tocSeventtypeids"></a>
<a id="tocseventtypeids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_NotificationRuleResource">NotificationRuleResource</h2>
<!-- backwards compatibility -->
<a id="schemanotificationruleresource"></a>
<a id="schema_NotificationRuleResource"></a>
<a id="tocSnotificationruleresource"></a>
<a id="tocsnotificationruleresource"></a>

```json
"string"
```

<h2 id="tocS_Targets">Targets</h2>
<!-- backwards compatibility -->
<a id="schematargets"></a>
<a id="schema_Targets"></a>
<a id="tocStargets"></a>
<a id="tocstargets"></a>

```json
[
  {
    "TargetType": {},
    "TargetAddress": {}
  }
]
```

<h2 id="tocS_DetailType">DetailType</h2>
<!-- backwards compatibility -->
<a id="schemadetailtype"></a>
<a id="schema_DetailType"></a>
<a id="tocSdetailtype"></a>
<a id="tocsdetailtype"></a>

```json
"BASIC"
```

<h2 id="tocS_Tags">Tags</h2>
<!-- backwards compatibility -->
<a id="schematags"></a>
<a id="schema_Tags"></a>
<a id="tocStags"></a>
<a id="tocstags"></a>

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

<h2 id="tocS_NotificationRuleStatus">NotificationRuleStatus</h2>
<!-- backwards compatibility -->
<a id="schemanotificationrulestatus"></a>
<a id="schema_NotificationRuleStatus"></a>
<a id="tocSnotificationrulestatus"></a>
<a id="tocsnotificationrulestatus"></a>

```json
"ENABLED"
```

<h2 id="tocS_CreateNotificationRuleRequest">CreateNotificationRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatenotificationrulerequest"></a>
<a id="schema_CreateNotificationRuleRequest"></a>
<a id="tocScreatenotificationrulerequest"></a>
<a id="tocscreatenotificationrulerequest"></a>

```json
{
  "Name": {},
  "EventTypeIds": {},
  "Resource": {},
  "Targets": {},
  "DetailType": {},
  "ClientRequestToken": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|EventTypeIds|object|true|none|none|
|Resource|object|true|none|none|
|Targets|object|true|none|none|
|DetailType|object|true|none|none|
|ClientRequestToken|object|false|none|none|
|Tags|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_NotificationRuleArn">NotificationRuleArn</h2>
<!-- backwards compatibility -->
<a id="schemanotificationrulearn"></a>
<a id="schema_NotificationRuleArn"></a>
<a id="tocSnotificationrulearn"></a>
<a id="tocsnotificationrulearn"></a>

```json
"string"
```

<h2 id="tocS_CreatedTimestamp">CreatedTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemacreatedtimestamp"></a>
<a id="schema_CreatedTimestamp"></a>
<a id="tocScreatedtimestamp"></a>
<a id="tocscreatedtimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DeleteNotificationRuleRequest">DeleteNotificationRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletenotificationrulerequest"></a>
<a id="schema_DeleteNotificationRuleRequest"></a>
<a id="tocSdeletenotificationrulerequest"></a>
<a id="tocsdeletenotificationrulerequest"></a>

```json
{
  "Arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|

<h2 id="tocS_ForceUnsubscribeAll">ForceUnsubscribeAll</h2>
<!-- backwards compatibility -->
<a id="schemaforceunsubscribeall"></a>
<a id="schema_ForceUnsubscribeAll"></a>
<a id="tocSforceunsubscribeall"></a>
<a id="tocsforceunsubscribeall"></a>

```json
true
```

<h2 id="tocS_DeleteTargetRequest">DeleteTargetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletetargetrequest"></a>
<a id="schema_DeleteTargetRequest"></a>
<a id="tocSdeletetargetrequest"></a>
<a id="tocsdeletetargetrequest"></a>

```json
{
  "TargetAddress": {},
  "ForceUnsubscribeAll": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetAddress|object|true|none|none|
|ForceUnsubscribeAll|object|false|none|none|

<h2 id="tocS_DescribeNotificationRuleRequest">DescribeNotificationRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribenotificationrulerequest"></a>
<a id="schema_DescribeNotificationRuleRequest"></a>
<a id="tocSdescribenotificationrulerequest"></a>
<a id="tocsdescribenotificationrulerequest"></a>

```json
{
  "Arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|

<h2 id="tocS_EventTypeBatch">EventTypeBatch</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypebatch"></a>
<a id="schema_EventTypeBatch"></a>
<a id="tocSeventtypebatch"></a>
<a id="tocseventtypebatch"></a>

```json
[
  {
    "EventTypeId": {},
    "ServiceName": {},
    "EventTypeName": {},
    "ResourceType": {}
  }
]
```

<h2 id="tocS_TargetsBatch">TargetsBatch</h2>
<!-- backwards compatibility -->
<a id="schematargetsbatch"></a>
<a id="schema_TargetsBatch"></a>
<a id="tocStargetsbatch"></a>
<a id="tocstargetsbatch"></a>

```json
[
  {
    "TargetAddress": {},
    "TargetType": {},
    "TargetStatus": {}
  }
]
```

<h2 id="tocS_NotificationRuleCreatedBy">NotificationRuleCreatedBy</h2>
<!-- backwards compatibility -->
<a id="schemanotificationrulecreatedby"></a>
<a id="schema_NotificationRuleCreatedBy"></a>
<a id="tocSnotificationrulecreatedby"></a>
<a id="tocsnotificationrulecreatedby"></a>

```json
"string"
```

<h2 id="tocS_LastModifiedTimestamp">LastModifiedTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemalastmodifiedtimestamp"></a>
<a id="schema_LastModifiedTimestamp"></a>
<a id="tocSlastmodifiedtimestamp"></a>
<a id="tocslastmodifiedtimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_EventTypeSummary">EventTypeSummary</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypesummary"></a>
<a id="schema_EventTypeSummary"></a>
<a id="tocSeventtypesummary"></a>
<a id="tocseventtypesummary"></a>

```json
{
  "EventTypeId": {},
  "ServiceName": {},
  "EventTypeName": {},
  "ResourceType": {}
}
```

Returns information about an event that has triggered a notification rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventTypeId|object|false|none|none|
|ServiceName|object|false|none|none|
|EventTypeName|object|false|none|none|
|ResourceType|object|false|none|none|

<h2 id="tocS_EventTypeName">EventTypeName</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypename"></a>
<a id="schema_EventTypeName"></a>
<a id="tocSeventtypename"></a>
<a id="tocseventtypename"></a>

```json
"string"
```

<h2 id="tocS_ServiceName">ServiceName</h2>
<!-- backwards compatibility -->
<a id="schemaservicename"></a>
<a id="schema_ServiceName"></a>
<a id="tocSservicename"></a>
<a id="tocsservicename"></a>

```json
"string"
```

<h2 id="tocS_ResourceType">ResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetype"></a>
<a id="schema_ResourceType"></a>
<a id="tocSresourcetype"></a>
<a id="tocsresourcetype"></a>

```json
"string"
```

<h2 id="tocS_ListEventTypesFilterName">ListEventTypesFilterName</h2>
<!-- backwards compatibility -->
<a id="schemalisteventtypesfiltername"></a>
<a id="schema_ListEventTypesFilterName"></a>
<a id="tocSlisteventtypesfiltername"></a>
<a id="tocslisteventtypesfiltername"></a>

```json
"RESOURCE_TYPE"
```

<h2 id="tocS_ListEventTypesFilterValue">ListEventTypesFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemalisteventtypesfiltervalue"></a>
<a id="schema_ListEventTypesFilterValue"></a>
<a id="tocSlisteventtypesfiltervalue"></a>
<a id="tocslisteventtypesfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_ListEventTypesFilters">ListEventTypesFilters</h2>
<!-- backwards compatibility -->
<a id="schemalisteventtypesfilters"></a>
<a id="schema_ListEventTypesFilters"></a>
<a id="tocSlisteventtypesfilters"></a>
<a id="tocslisteventtypesfilters"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
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

<h2 id="tocS_ListEventTypesRequest">ListEventTypesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisteventtypesrequest"></a>
<a id="schema_ListEventTypesRequest"></a>
<a id="tocSlisteventtypesrequest"></a>
<a id="tocslisteventtypesrequest"></a>

```json
{
  "Filters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListNotificationRulesFilterName">ListNotificationRulesFilterName</h2>
<!-- backwards compatibility -->
<a id="schemalistnotificationrulesfiltername"></a>
<a id="schema_ListNotificationRulesFilterName"></a>
<a id="tocSlistnotificationrulesfiltername"></a>
<a id="tocslistnotificationrulesfiltername"></a>

```json
"EVENT_TYPE_ID"
```

<h2 id="tocS_ListNotificationRulesFilterValue">ListNotificationRulesFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemalistnotificationrulesfiltervalue"></a>
<a id="schema_ListNotificationRulesFilterValue"></a>
<a id="tocSlistnotificationrulesfiltervalue"></a>
<a id="tocslistnotificationrulesfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_ListNotificationRulesFilters">ListNotificationRulesFilters</h2>
<!-- backwards compatibility -->
<a id="schemalistnotificationrulesfilters"></a>
<a id="schema_ListNotificationRulesFilters"></a>
<a id="tocSlistnotificationrulesfilters"></a>
<a id="tocslistnotificationrulesfilters"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

<h2 id="tocS_ListNotificationRulesRequest">ListNotificationRulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistnotificationrulesrequest"></a>
<a id="schema_ListNotificationRulesRequest"></a>
<a id="tocSlistnotificationrulesrequest"></a>
<a id="tocslistnotificationrulesrequest"></a>

```json
{
  "Filters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_NotificationRuleBatch">NotificationRuleBatch</h2>
<!-- backwards compatibility -->
<a id="schemanotificationrulebatch"></a>
<a id="schema_NotificationRuleBatch"></a>
<a id="tocSnotificationrulebatch"></a>
<a id="tocsnotificationrulebatch"></a>

```json
[
  {
    "Id": {},
    "Arn": {}
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
{
  "Arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|

<h2 id="tocS_ListTargetsFilterName">ListTargetsFilterName</h2>
<!-- backwards compatibility -->
<a id="schemalisttargetsfiltername"></a>
<a id="schema_ListTargetsFilterName"></a>
<a id="tocSlisttargetsfiltername"></a>
<a id="tocslisttargetsfiltername"></a>

```json
"TARGET_TYPE"
```

<h2 id="tocS_ListTargetsFilterValue">ListTargetsFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemalisttargetsfiltervalue"></a>
<a id="schema_ListTargetsFilterValue"></a>
<a id="tocSlisttargetsfiltervalue"></a>
<a id="tocslisttargetsfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_ListTargetsFilters">ListTargetsFilters</h2>
<!-- backwards compatibility -->
<a id="schemalisttargetsfilters"></a>
<a id="schema_ListTargetsFilters"></a>
<a id="tocSlisttargetsfilters"></a>
<a id="tocslisttargetsfilters"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

<h2 id="tocS_ListTargetsRequest">ListTargetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttargetsrequest"></a>
<a id="schema_ListTargetsRequest"></a>
<a id="tocSlisttargetsrequest"></a>
<a id="tocslisttargetsrequest"></a>

```json
{
  "Filters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_NotificationRuleSummary">NotificationRuleSummary</h2>
<!-- backwards compatibility -->
<a id="schemanotificationrulesummary"></a>
<a id="schema_NotificationRuleSummary"></a>
<a id="tocSnotificationrulesummary"></a>
<a id="tocsnotificationrulesummary"></a>

```json
{
  "Id": {},
  "Arn": {}
}
```

Information about a specified notification rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_NotificationRuleId">NotificationRuleId</h2>
<!-- backwards compatibility -->
<a id="schemanotificationruleid"></a>
<a id="schema_NotificationRuleId"></a>
<a id="tocSnotificationruleid"></a>
<a id="tocsnotificationruleid"></a>

```json
"string"
```

<h2 id="tocS_SubscribeRequest">SubscribeRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubscriberequest"></a>
<a id="schema_SubscribeRequest"></a>
<a id="tocSsubscriberequest"></a>
<a id="tocssubscriberequest"></a>

```json
{
  "Arn": {},
  "Target": {
    "TargetType": {},
    "TargetAddress": {}
  },
  "ClientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|Target|[Target](#schematarget)|true|none|Information about the Chatbot topics or Chatbot clients associated with a notification rule.|
|ClientRequestToken|object|false|none|none|

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
  "Arn": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_TargetStatus">TargetStatus</h2>
<!-- backwards compatibility -->
<a id="schematargetstatus"></a>
<a id="schema_TargetStatus"></a>
<a id="tocStargetstatus"></a>
<a id="tocstargetstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_TargetSummary">TargetSummary</h2>
<!-- backwards compatibility -->
<a id="schematargetsummary"></a>
<a id="schema_TargetSummary"></a>
<a id="tocStargetsummary"></a>
<a id="tocstargetsummary"></a>

```json
{
  "TargetAddress": {},
  "TargetType": {},
  "TargetStatus": {}
}
```

Information about the targets specified for a notification rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetAddress|object|false|none|none|
|TargetType|object|false|none|none|
|TargetStatus|object|false|none|none|

<h2 id="tocS_UnsubscribeRequest">UnsubscribeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunsubscriberequest"></a>
<a id="schema_UnsubscribeRequest"></a>
<a id="tocSunsubscriberequest"></a>
<a id="tocsunsubscriberequest"></a>

```json
{
  "Arn": {},
  "TargetAddress": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|TargetAddress|object|true|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateNotificationRuleRequest">UpdateNotificationRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenotificationrulerequest"></a>
<a id="schema_UpdateNotificationRuleRequest"></a>
<a id="tocSupdatenotificationrulerequest"></a>
<a id="tocsupdatenotificationrulerequest"></a>

```json
{
  "Arn": {},
  "Name": {},
  "Status": {},
  "EventTypeIds": {},
  "Targets": {},
  "DetailType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|
|EventTypeIds|object|false|none|none|
|Targets|object|false|none|none|
|DetailType|object|false|none|none|
