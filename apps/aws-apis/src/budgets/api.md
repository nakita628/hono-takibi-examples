<h1 id="aws-budgets">AWS Budgets v2016-10-20</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Use the Amazon Web Services Budgets API to plan your service usage, service costs, and instance reservations. This API reference provides descriptions, syntax, and usage examples for each of the actions and data types for the Amazon Web Services Budgets feature. </p> <p>Budgets provide you with a way to see the following information:</p> <ul> <li> <p>How close your plan is to your budgeted amount or to the free tier limits</p> </li> <li> <p>Your usage-to-date, including how much you've used of your Reserved Instances (RIs)</p> </li> <li> <p>Your current estimated charges from Amazon Web Services, and how much your predicted usage will accrue in charges by the end of the month</p> </li> <li> <p>How much of your budget has been used</p> </li> </ul> <p>Amazon Web Services updates your budget status several times a day. Budgets track your unblended costs, subscriptions, refunds, and RIs. You can create the following types of budgets:</p> <ul> <li> <p> <b>Cost budgets</b> - Plan how much you want to spend on a service.</p> </li> <li> <p> <b>Usage budgets</b> - Plan how much you want to use one or more services.</p> </li> <li> <p> <b>RI utilization budgets</b> - Define a utilization threshold, and receive alerts when your RI usage falls below that threshold. This lets you see if your RIs are unused or under-utilized.</p> </li> <li> <p> <b>RI coverage budgets</b> - Define a coverage threshold, and receive alerts when the number of your instance hours that are covered by RIs fall below that threshold. This lets you see how much of your instance usage is covered by a reservation.</p> </li> </ul> <p>Service Endpoint</p> <p>The Amazon Web Services Budgets API provides the following endpoint:</p> <ul> <li> <p>https://budgets.amazonaws.com</p> </li> </ul> <p>For information about costs that are associated with the Amazon Web Services Budgets API, see <a href="https://aws.amazon.com/aws-cost-management/pricing/">Amazon Web Services Cost Management Pricing</a>.</p>

Base URLs:

* <a href="https://budgets.amazonaws.com">https://budgets.amazonaws.com</a> - The general AWSBudgets multi-region endpoint

* <a href="http://budgets.cn-north-1.amazonaws.com.cn">http://budgets.cn-north-1.amazonaws.com.cn</a> - The AWSBudgets endpoint for China (Beijing) and China (Ningxia)

* <a href="https://budgets.cn-north-1.amazonaws.com.cn">https://budgets.cn-north-1.amazonaws.com.cn</a> - The AWSBudgets endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/budgets/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-budgets-default">Default</h1>

## CreateBudget

<a id="opIdCreateBudget"></a>

> Code samples

```bash
curl 'https://budgets.us-east-1.amazonaws.com/#X-Amz-Target=AWSBudgetServiceGateway.CreateBudget' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSBudgetServiceGateway.CreateBudget' \
  -d '{
    "AccountId": {},
    "Budget": {
      "BudgetName": {},
      "BudgetLimit": {
        "Amount": {},
        "Unit": {}
      },
      "PlannedBudgetLimits": {
        "property1": {
          "Amount": {},
          "Unit": {}
        },
        "property2": {
          "Amount": {},
          "Unit": {}
        }
      },
      "CostFilters": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "CostTypes": {
        "IncludeTax": {},
        "IncludeSubscription": {},
        "UseBlended": {},
        "IncludeRefund": {},
        "IncludeCredit": {},
        "IncludeUpfront": {},
        "IncludeRecurring": {},
        "IncludeOtherSubscription": {},
        "IncludeSupport": {},
        "IncludeDiscount": {},
        "UseAmortized": {}
      },
      "TimeUnit": {},
      "TimePeriod": {
        "Start": {},
        "End": {}
      },
      "CalculatedSpend": {
        "ActualSpend": {
          "Amount": {},
          "Unit": {}
        },
        "ForecastedSpend": {
          "Amount": {},
          "Unit": {}
        }
      },
      "BudgetType": {},
      "LastUpdatedTime": {},
      "AutoAdjustData": {
        "AutoAdjustType": {},
        "HistoricalOptions": {
          "BudgetAdjustmentPeriod": {},
          "LookBackAvailablePeriods": {}
        },
        "LastAutoAdjustTime": {}
      }
    },
    "NotificationsWithSubscribers": {}
  }'
```

`POST /#X-Amz-Target=AWSBudgetServiceGateway.CreateBudget`

<p>Creates a budget and, if included, notifications and subscribers. </p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples">Examples</a> section. </p> </important>

> Body parameter

```json
{
  "AccountId": {},
  "Budget": {
    "BudgetName": {},
    "BudgetLimit": {
      "Amount": {},
      "Unit": {}
    },
    "PlannedBudgetLimits": {
      "property1": {
        "Amount": {},
        "Unit": {}
      },
      "property2": {
        "Amount": {},
        "Unit": {}
      }
    },
    "CostFilters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "CostTypes": {
      "IncludeTax": {},
      "IncludeSubscription": {},
      "UseBlended": {},
      "IncludeRefund": {},
      "IncludeCredit": {},
      "IncludeUpfront": {},
      "IncludeRecurring": {},
      "IncludeOtherSubscription": {},
      "IncludeSupport": {},
      "IncludeDiscount": {},
      "UseAmortized": {}
    },
    "TimeUnit": {},
    "TimePeriod": {
      "Start": {},
      "End": {}
    },
    "CalculatedSpend": {
      "ActualSpend": {
        "Amount": {},
        "Unit": {}
      },
      "ForecastedSpend": {
        "Amount": {},
        "Unit": {}
      }
    },
    "BudgetType": {},
    "LastUpdatedTime": {},
    "AutoAdjustData": {
      "AutoAdjustType": {},
      "HistoricalOptions": {
        "BudgetAdjustmentPeriod": {},
        "LookBackAvailablePeriods": {}
      },
      "LastAutoAdjustTime": {}
    }
  },
  "NotificationsWithSubscribers": {}
}
```

<h3 id="createbudget-parameters">Parameters</h3>

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
|body|body|[CreateBudgetRequest](#schemacreatebudgetrequest)|true|none|
|» AccountId|body|object|true|none|
|» Budget|body|object|true|none|
|» » BudgetName|body|object|true|none|
|» » BudgetLimit|body|object|false|none|
|» » » Amount|body|object|true|none|
|» » » Unit|body|object|true|none|
|» » PlannedBudgetLimits|body|object|false|none|
|» » » **additionalProperties**|body|[Spend](#schemaspend)|false|<p>The amount of cost or usage that's measured for a budget.</p> <p>For example, a <code>Spend</code> for <code>3 GB</code> of S3 usage has the following parameters:</p> <ul> <li> <p>An <code>Amount</code> of <code>3</code> </p> </li> <li> <p>A <code>unit</code> of <code>GB</code> </p> </li> </ul>|
|» » CostFilters|body|object|false|none|
|» » » **additionalProperties**|body|[DimensionValues](#schemadimensionvalues)|false|none|
|» » CostTypes|body|object|false|none|
|» » » IncludeTax|body|object|false|none|
|» » » IncludeSubscription|body|object|false|none|
|» » » UseBlended|body|object|false|none|
|» » » IncludeRefund|body|object|false|none|
|» » » IncludeCredit|body|object|false|none|
|» » » IncludeUpfront|body|object|false|none|
|» » » IncludeRecurring|body|object|false|none|
|» » » IncludeOtherSubscription|body|object|false|none|
|» » » IncludeSupport|body|object|false|none|
|» » » IncludeDiscount|body|object|false|none|
|» » » UseAmortized|body|object|false|none|
|» » TimeUnit|body|object|true|none|
|» » TimePeriod|body|object|false|none|
|» » » Start|body|object|false|none|
|» » » End|body|object|false|none|
|» » CalculatedSpend|body|object|false|none|
|» » » ActualSpend|body|object|true|none|
|» » » » Amount|body|object|true|none|
|» » » » Unit|body|object|true|none|
|» » » ForecastedSpend|body|object|false|none|
|» » » » Amount|body|object|true|none|
|» » » » Unit|body|object|true|none|
|» » BudgetType|body|object|true|none|
|» » LastUpdatedTime|body|object|false|none|
|» » AutoAdjustData|body|object|false|none|
|» » » AutoAdjustType|body|object|true|none|
|» » » HistoricalOptions|body|object|false|none|
|» » » » BudgetAdjustmentPeriod|body|object|true|none|
|» » » » LookBackAvailablePeriods|body|object|false|none|
|» » » LastAutoAdjustTime|body|object|false|none|
|» NotificationsWithSubscribers|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSBudgetServiceGateway.CreateBudget|

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

> 485 Response

```json
null
```

<h3 id="createbudget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateBudgetResponse](#schemacreatebudgetresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|CreationLimitExceededException|[CreationLimitExceededException](#schemacreationlimitexceededexception)|
|483|483|DuplicateRecordException|[DuplicateRecordException](#schemaduplicaterecordexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBudgetAction

<a id="opIdCreateBudgetAction"></a>

> Code samples

```bash
curl 'https://budgets.us-east-1.amazonaws.com/#X-Amz-Target=AWSBudgetServiceGateway.CreateBudgetAction' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSBudgetServiceGateway.CreateBudgetAction' \
  -d '{
    "AccountId": "stringstring",
    "BudgetName": "string",
    "NotificationType": "ACTUAL",
    "ActionType": {},
    "ActionThreshold": {
      "ActionThresholdValue": 0,
      "ActionThresholdType": "PERCENTAGE"
    },
    "Definition": {
      "IamActionDefinition": {
        "PolicyArn": {},
        "Roles": {},
        "Groups": {},
        "Users": {}
      },
      "ScpActionDefinition": {
        "PolicyId": {},
        "TargetIds": {}
      },
      "SsmActionDefinition": {
        "ActionSubType": {},
        "Region": {},
        "InstanceIds": {}
      }
    },
    "ExecutionRoleArn": {},
    "ApprovalModel": {},
    "Subscribers": [
      {
        "SubscriptionType": {},
        "Address": {}
      }
    ]
  }'
```

`POST /#X-Amz-Target=AWSBudgetServiceGateway.CreateBudgetAction`

 Creates a budget action. 

> Body parameter

```json
{
  "AccountId": "stringstring",
  "BudgetName": "string",
  "NotificationType": "ACTUAL",
  "ActionType": {},
  "ActionThreshold": {
    "ActionThresholdValue": 0,
    "ActionThresholdType": "PERCENTAGE"
  },
  "Definition": {
    "IamActionDefinition": {
      "PolicyArn": {},
      "Roles": {},
      "Groups": {},
      "Users": {}
    },
    "ScpActionDefinition": {
      "PolicyId": {},
      "TargetIds": {}
    },
    "SsmActionDefinition": {
      "ActionSubType": {},
      "Region": {},
      "InstanceIds": {}
    }
  },
  "ExecutionRoleArn": {},
  "ApprovalModel": {},
  "Subscribers": [
    {
      "SubscriptionType": {},
      "Address": {}
    }
  ]
}
```

<h3 id="createbudgetaction-parameters">Parameters</h3>

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
|body|body|[CreateBudgetActionRequest](#schemacreatebudgetactionrequest)|true|none|
|» AccountId|body|[AccountId](#schemaaccountid)|true|The account ID of the user. It's a 12-digit number.|
|» BudgetName|body|[BudgetName](#schemabudgetname)|true| A string that represents the budget name. The ":" and "\" characters aren't allowed.|
|» NotificationType|body|[NotificationType](#schemanotificationtype)|true| The type of a notification. It must be ACTUAL or FORECASTED.|
|» ActionType|body|object|true|none|
|» ActionThreshold|body|[ActionThreshold](#schemaactionthreshold)|true|The trigger threshold of the action. |
|» Definition|body|[Definition](#schemadefinition)|true|Specifies all of the type-specific parameters. |
|» ExecutionRoleArn|body|object|true|none|
|» ApprovalModel|body|object|true|none|
|» Subscribers|body|[Subscribers](#schemasubscribers)|true| A list of subscribers.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSBudgetServiceGateway.CreateBudgetAction|
|» NotificationType|ACTUAL|
|» NotificationType|FORECASTED|

> Example responses

> 200 Response

```json
{
  "AccountId": "stringstring",
  "BudgetName": "string",
  "ActionId": {}
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

<h3 id="createbudgetaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateBudgetActionResponse](#schemacreatebudgetactionresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|CreationLimitExceededException|[CreationLimitExceededException](#schemacreationlimitexceededexception)|
|483|483|DuplicateRecordException|[DuplicateRecordException](#schemaduplicaterecordexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateNotification

<a id="opIdCreateNotification"></a>

> Code samples

```bash
curl 'https://budgets.us-east-1.amazonaws.com/#X-Amz-Target=AWSBudgetServiceGateway.CreateNotification' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSBudgetServiceGateway.CreateNotification' \
  -d '{
    "AccountId": {},
    "BudgetName": {},
    "Notification": {
      "NotificationType": {},
      "ComparisonOperator": {},
      "Threshold": {},
      "ThresholdType": {},
      "NotificationState": {}
    },
    "Subscribers": {}
  }'
```

`POST /#X-Amz-Target=AWSBudgetServiceGateway.CreateNotification`

Creates a notification. You must create the budget before you create the associated notification.

> Body parameter

```json
{
  "AccountId": {},
  "BudgetName": {},
  "Notification": {
    "NotificationType": {},
    "ComparisonOperator": {},
    "Threshold": {},
    "ThresholdType": {},
    "NotificationState": {}
  },
  "Subscribers": {}
}
```

<h3 id="createnotification-parameters">Parameters</h3>

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
|body|body|[CreateNotificationRequest](#schemacreatenotificationrequest)|true|none|
|» AccountId|body|object|true|none|
|» BudgetName|body|object|true|none|
|» Notification|body|object|true|none|
|» » NotificationType|body|object|true|none|
|» » ComparisonOperator|body|object|true|none|
|» » Threshold|body|object|true|none|
|» » ThresholdType|body|object|false|none|
|» » NotificationState|body|object|false|none|
|» Subscribers|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSBudgetServiceGateway.CreateNotification|

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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="createnotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateNotificationResponse](#schemacreatenotificationresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|CreationLimitExceededException|[CreationLimitExceededException](#schemacreationlimitexceededexception)|
|484|484|DuplicateRecordException|[DuplicateRecordException](#schemaduplicaterecordexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSubscriber

<a id="opIdCreateSubscriber"></a>

> Code samples

```bash
curl 'https://budgets.us-east-1.amazonaws.com/#X-Amz-Target=AWSBudgetServiceGateway.CreateSubscriber' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSBudgetServiceGateway.CreateSubscriber' \
  -d '{
    "AccountId": {},
    "BudgetName": {},
    "Notification": {
      "NotificationType": {},
      "ComparisonOperator": {},
      "Threshold": {},
      "ThresholdType": {},
      "NotificationState": {}
    },
    "Subscriber": {
      "SubscriptionType": {},
      "Address": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSBudgetServiceGateway.CreateSubscriber`

Creates a subscriber. You must create the associated budget and notification before you create the subscriber.

> Body parameter

```json
{
  "AccountId": {},
  "BudgetName": {},
  "Notification": {
    "NotificationType": {},
    "ComparisonOperator": {},
    "Threshold": {},
    "ThresholdType": {},
    "NotificationState": {}
  },
  "Subscriber": {
    "SubscriptionType": {},
    "Address": {}
  }
}
```

<h3 id="createsubscriber-parameters">Parameters</h3>

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
|body|body|[CreateSubscriberRequest](#schemacreatesubscriberrequest)|true|none|
|» AccountId|body|object|true|none|
|» BudgetName|body|object|true|none|
|» Notification|body|object|true|none|
|» » NotificationType|body|object|true|none|
|» » ComparisonOperator|body|object|true|none|
|» » Threshold|body|object|true|none|
|» » ThresholdType|body|object|false|none|
|» » NotificationState|body|object|false|none|
|» Subscriber|body|object|true|none|
|» » SubscriptionType|body|object|true|none|
|» » Address|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSBudgetServiceGateway.CreateSubscriber|

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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="createsubscriber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSubscriberResponse](#schemacreatesubscriberresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|CreationLimitExceededException|[CreationLimitExceededException](#schemacreationlimitexceededexception)|
|483|483|DuplicateRecordException|[DuplicateRecordException](#schemaduplicaterecordexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBudget

<a id="opIdDeleteBudget"></a>

> Code samples

```bash
curl 'https://budgets.us-east-1.amazonaws.com/#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudget' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSBudgetServiceGateway.DeleteBudget' \
  -d '{
    "AccountId": {},
    "BudgetName": {}
  }'
```

`POST /#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudget`

<p>Deletes a budget. You can delete your budget at any time.</p> <important> <p>Deleting a budget also deletes the notifications and subscribers that are associated with that budget.</p> </important>

> Body parameter

```json
{
  "AccountId": {},
  "BudgetName": {}
}
```

<h3 id="deletebudget-parameters">Parameters</h3>

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
|body|body|[DeleteBudgetRequest](#schemadeletebudgetrequest)|true|none|
|» AccountId|body|object|true|none|
|» BudgetName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSBudgetServiceGateway.DeleteBudget|

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

<h3 id="deletebudget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteBudgetResponse](#schemadeletebudgetresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBudgetAction

<a id="opIdDeleteBudgetAction"></a>

> Code samples

```bash
curl 'https://budgets.us-east-1.amazonaws.com/#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudgetAction' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSBudgetServiceGateway.DeleteBudgetAction' \
  -d '{
    "AccountId": "stringstring",
    "BudgetName": "string",
    "ActionId": {}
  }'
```

`POST /#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudgetAction`

 Deletes a budget action. 

> Body parameter

```json
{
  "AccountId": "stringstring",
  "BudgetName": "string",
  "ActionId": {}
}
```

<h3 id="deletebudgetaction-parameters">Parameters</h3>

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
|body|body|[DeleteBudgetActionRequest](#schemadeletebudgetactionrequest)|true|none|
|» AccountId|body|[AccountId](#schemaaccountid)|true|The account ID of the user. It's a 12-digit number.|
|» BudgetName|body|[BudgetName](#schemabudgetname)|true| A string that represents the budget name. The ":" and "\" characters aren't allowed.|
|» ActionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSBudgetServiceGateway.DeleteBudgetAction|

> Example responses

> 200 Response

```json
{
  "AccountId": "stringstring",
  "BudgetName": "string",
  "Action": {
    "ActionId": {},
    "BudgetName": "string",
    "NotificationType": "ACTUAL",
    "ActionType": {},
    "ActionThreshold": {
      "ActionThresholdValue": 0,
      "ActionThresholdType": "PERCENTAGE"
    },
    "Definition": {
      "IamActionDefinition": {
        "PolicyArn": {},
        "Roles": {},
        "Groups": {},
        "Users": {}
      },
      "ScpActionDefinition": {
        "PolicyId": {},
        "TargetIds": {}
      },
      "SsmActionDefinition": {
        "ActionSubType": {},
        "Region": {},
        "InstanceIds": {}
      }
    },
    "ExecutionRoleArn": {},
    "ApprovalModel": {},
    "Status": {},
    "Subscribers": [
      {
        "SubscriptionType": {},
        "Address": {}
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

> 485 Response

```json
null
```

<h3 id="deletebudgetaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteBudgetActionResponse](#schemadeletebudgetactionresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceLockedException|[ResourceLockedException](#schemaresourcelockedexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteNotification

<a id="opIdDeleteNotification"></a>

> Code samples

```bash
curl 'https://budgets.us-east-1.amazonaws.com/#X-Amz-Target=AWSBudgetServiceGateway.DeleteNotification' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSBudgetServiceGateway.DeleteNotification' \
  -d '{
    "AccountId": {},
    "BudgetName": {},
    "Notification": {
      "NotificationType": {},
      "ComparisonOperator": {},
      "Threshold": {},
      "ThresholdType": {},
      "NotificationState": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSBudgetServiceGateway.DeleteNotification`

<p>Deletes a notification.</p> <important> <p>Deleting a notification also deletes the subscribers that are associated with the notification.</p> </important>

> Body parameter

```json
{
  "AccountId": {},
  "BudgetName": {},
  "Notification": {
    "NotificationType": {},
    "ComparisonOperator": {},
    "Threshold": {},
    "ThresholdType": {},
    "NotificationState": {}
  }
}
```

<h3 id="deletenotification-parameters">Parameters</h3>

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
|body|body|[DeleteNotificationRequest](#schemadeletenotificationrequest)|true|none|
|» AccountId|body|object|true|none|
|» BudgetName|body|object|true|none|
|» Notification|body|object|true|none|
|» » NotificationType|body|object|true|none|
|» » ComparisonOperator|body|object|true|none|
|» » Threshold|body|object|true|none|
|» » ThresholdType|body|object|false|none|
|» » NotificationState|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSBudgetServiceGateway.DeleteNotification|

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

<h3 id="deletenotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteNotificationResponse](#schemadeletenotificationresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSubscriber

<a id="opIdDeleteSubscriber"></a>

> Code samples

```bash
curl 'https://budgets.us-east-1.amazonaws.com/#X-Amz-Target=AWSBudgetServiceGateway.DeleteSubscriber' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSBudgetServiceGateway.DeleteSubscriber' \
  -d '{
    "AccountId": {},
    "BudgetName": {},
    "Notification": {
      "NotificationType": {},
      "ComparisonOperator": {},
      "Threshold": {},
      "ThresholdType": {},
      "NotificationState": {}
    },
    "Subscriber": {
      "SubscriptionType": {},
      "Address": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSBudgetServiceGateway.DeleteSubscriber`

<p>Deletes a subscriber.</p> <important> <p>Deleting the last subscriber to a notification also deletes the notification.</p> </important>

> Body parameter

```json
{
  "AccountId": {},
  "BudgetName": {},
  "Notification": {
    "NotificationType": {},
    "ComparisonOperator": {},
    "Threshold": {},
    "ThresholdType": {},
    "NotificationState": {}
  },
  "Subscriber": {
    "SubscriptionType": {},
    "Address": {}
  }
}
```

<h3 id="deletesubscriber-parameters">Parameters</h3>

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
|body|body|[DeleteSubscriberRequest](#schemadeletesubscriberrequest)|true|none|
|» AccountId|body|object|true|none|
|» BudgetName|body|object|true|none|
|» Notification|body|object|true|none|
|» » NotificationType|body|object|true|none|
|» » ComparisonOperator|body|object|true|none|
|» » Threshold|body|object|true|none|
|» » ThresholdType|body|object|false|none|
|» » NotificationState|body|object|false|none|
|» Subscriber|body|object|true|none|
|» » SubscriptionType|body|object|true|none|
|» » Address|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSBudgetServiceGateway.DeleteSubscriber|

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

<h3 id="deletesubscriber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSubscriberResponse](#schemadeletesubscriberresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeBudget

<a id="opIdDescribeBudget"></a>

> Code samples

```bash
curl 'https://budgets.us-east-1.amazonaws.com/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudget' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSBudgetServiceGateway.DescribeBudget' \
  -d '{
    "AccountId": {},
    "BudgetName": {}
  }'
```

`POST /#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudget`

<p>Describes a budget.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudget.html#API_DescribeBudget_Examples">Examples</a> section. </p> </important>

> Body parameter

```json
{
  "AccountId": {},
  "BudgetName": {}
}
```

<h3 id="describebudget-parameters">Parameters</h3>

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
|body|body|[DescribeBudgetRequest](#schemadescribebudgetrequest)|true|none|
|» AccountId|body|object|true|none|
|» BudgetName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSBudgetServiceGateway.DescribeBudget|

> Example responses

> 200 Response

```json
{
  "Budget": {
    "BudgetName": {},
    "BudgetLimit": {
      "Amount": {},
      "Unit": {}
    },
    "PlannedBudgetLimits": {
      "property1": {
        "Amount": {},
        "Unit": {}
      },
      "property2": {
        "Amount": {},
        "Unit": {}
      }
    },
    "CostFilters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "CostTypes": {
      "IncludeTax": {},
      "IncludeSubscription": {},
      "UseBlended": {},
      "IncludeRefund": {},
      "IncludeCredit": {},
      "IncludeUpfront": {},
      "IncludeRecurring": {},
      "IncludeOtherSubscription": {},
      "IncludeSupport": {},
      "IncludeDiscount": {},
      "UseAmortized": {}
    },
    "TimeUnit": {},
    "TimePeriod": {
      "Start": {},
      "End": {}
    },
    "CalculatedSpend": {
      "ActualSpend": {
        "Amount": {},
        "Unit": {}
      },
      "ForecastedSpend": {
        "Amount": {},
        "Unit": {}
      }
    },
    "BudgetType": {},
    "LastUpdatedTime": {},
    "AutoAdjustData": {
      "AutoAdjustType": {},
      "HistoricalOptions": {
        "BudgetAdjustmentPeriod": {},
        "LookBackAvailablePeriods": {}
      },
      "LastAutoAdjustTime": {}
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

<h3 id="describebudget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeBudgetResponse](#schemadescribebudgetresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeBudgetAction

<a id="opIdDescribeBudgetAction"></a>

> Code samples

```bash
curl 'https://budgets.us-east-1.amazonaws.com/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetAction' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSBudgetServiceGateway.DescribeBudgetAction' \
  -d '{
    "AccountId": "stringstring",
    "BudgetName": "string",
    "ActionId": {}
  }'
```

`POST /#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetAction`

 Describes a budget action detail. 

> Body parameter

```json
{
  "AccountId": "stringstring",
  "BudgetName": "string",
  "ActionId": {}
}
```

<h3 id="describebudgetaction-parameters">Parameters</h3>

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
|body|body|[DescribeBudgetActionRequest](#schemadescribebudgetactionrequest)|true|none|
|» AccountId|body|[AccountId](#schemaaccountid)|true|The account ID of the user. It's a 12-digit number.|
|» BudgetName|body|[BudgetName](#schemabudgetname)|true| A string that represents the budget name. The ":" and "\" characters aren't allowed.|
|» ActionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSBudgetServiceGateway.DescribeBudgetAction|

> Example responses

> 200 Response

```json
{
  "AccountId": "stringstring",
  "BudgetName": "string",
  "Action": {
    "ActionId": {},
    "BudgetName": "string",
    "NotificationType": "ACTUAL",
    "ActionType": {},
    "ActionThreshold": {
      "ActionThresholdValue": 0,
      "ActionThresholdType": "PERCENTAGE"
    },
    "Definition": {
      "IamActionDefinition": {
        "PolicyArn": {},
        "Roles": {},
        "Groups": {},
        "Users": {}
      },
      "ScpActionDefinition": {
        "PolicyId": {},
        "TargetIds": {}
      },
      "SsmActionDefinition": {
        "ActionSubType": {},
        "Region": {},
        "InstanceIds": {}
      }
    },
    "ExecutionRoleArn": {},
    "ApprovalModel": {},
    "Status": {},
    "Subscribers": [
      {
        "SubscriptionType": {},
        "Address": {}
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

<h3 id="describebudgetaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeBudgetActionResponse](#schemadescribebudgetactionresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeBudgetActionHistories

<a id="opIdDescribeBudgetActionHistories"></a>

> Code samples

```bash
curl 'https://budgets.us-east-1.amazonaws.com/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionHistories' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSBudgetServiceGateway.DescribeBudgetActionHistories' \
  -d '{
    "AccountId": "stringstring",
    "BudgetName": "string",
    "ActionId": {},
    "TimePeriod": {
      "Start": {},
      "End": {}
    },
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionHistories`

 Describes a budget action history detail. 

> Body parameter

```json
{
  "AccountId": "stringstring",
  "BudgetName": "string",
  "ActionId": {},
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="describebudgetactionhistories-parameters">Parameters</h3>

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
|body|body|[DescribeBudgetActionHistoriesRequest](#schemadescribebudgetactionhistoriesrequest)|true|none|
|» AccountId|body|[AccountId](#schemaaccountid)|true|The account ID of the user. It's a 12-digit number.|
|» BudgetName|body|[BudgetName](#schemabudgetname)|true| A string that represents the budget name. The ":" and "\" characters aren't allowed.|
|» ActionId|body|object|true|none|
|» TimePeriod|body|[TimePeriod](#schematimeperiod)|false|The period of time that's covered by a budget. The period has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date. |
|» MaxResults|body|[MaxResults](#schemamaxresults)|false| An integer that represents how many entries a paginated response contains. The maximum is 100.|
|» NextToken|body|[GenericString](#schemagenericstring)|false| A generic string.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSBudgetServiceGateway.DescribeBudgetActionHistories|

> Example responses

> 200 Response

```json
{
  "ActionHistories": {},
  "NextToken": "string"
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

<h3 id="describebudgetactionhistories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeBudgetActionHistoriesResponse](#schemadescribebudgetactionhistoriesresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeBudgetActionsForAccount

<a id="opIdDescribeBudgetActionsForAccount"></a>

> Code samples

```bash
curl 'https://budgets.us-east-1.amazonaws.com/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForAccount' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSBudgetServiceGateway.DescribeBudgetActionsForAccount' \
  -d '{
    "AccountId": "stringstring",
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForAccount`

 Describes all of the budget actions for an account. 

> Body parameter

```json
{
  "AccountId": "stringstring",
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="describebudgetactionsforaccount-parameters">Parameters</h3>

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
|body|body|[DescribeBudgetActionsForAccountRequest](#schemadescribebudgetactionsforaccountrequest)|true|none|
|» AccountId|body|[AccountId](#schemaaccountid)|true|The account ID of the user. It's a 12-digit number.|
|» MaxResults|body|[MaxResults](#schemamaxresults)|false| An integer that represents how many entries a paginated response contains. The maximum is 100.|
|» NextToken|body|[GenericString](#schemagenericstring)|false| A generic string.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSBudgetServiceGateway.DescribeBudgetActionsForAccount|

> Example responses

> 200 Response

```json
{
  "Actions": {},
  "NextToken": "string"
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

<h3 id="describebudgetactionsforaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeBudgetActionsForAccountResponse](#schemadescribebudgetactionsforaccountresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeBudgetActionsForBudget

<a id="opIdDescribeBudgetActionsForBudget"></a>

> Code samples

```bash
curl 'https://budgets.us-east-1.amazonaws.com/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForBudget' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSBudgetServiceGateway.DescribeBudgetActionsForBudget' \
  -d '{
    "AccountId": "stringstring",
    "BudgetName": "string",
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForBudget`

 Describes all of the budget actions for a budget. 

> Body parameter

```json
{
  "AccountId": "stringstring",
  "BudgetName": "string",
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="describebudgetactionsforbudget-parameters">Parameters</h3>

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
|body|body|[DescribeBudgetActionsForBudgetRequest](#schemadescribebudgetactionsforbudgetrequest)|true|none|
|» AccountId|body|[AccountId](#schemaaccountid)|true|The account ID of the user. It's a 12-digit number.|
|» BudgetName|body|[BudgetName](#schemabudgetname)|true| A string that represents the budget name. The ":" and "\" characters aren't allowed.|
|» MaxResults|body|[MaxResults](#schemamaxresults)|false| An integer that represents how many entries a paginated response contains. The maximum is 100.|
|» NextToken|body|[GenericString](#schemagenericstring)|false| A generic string.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSBudgetServiceGateway.DescribeBudgetActionsForBudget|

> Example responses

> 200 Response

```json
{
  "Actions": {},
  "NextToken": "string"
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

<h3 id="describebudgetactionsforbudget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeBudgetActionsForBudgetResponse](#schemadescribebudgetactionsforbudgetresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeBudgetNotificationsForAccount

<a id="opIdDescribeBudgetNotificationsForAccount"></a>

> Code samples

```bash
curl 'https://budgets.us-east-1.amazonaws.com/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount' \
  -d '{
    "AccountId": "stringstring",
    "MaxResults": {},
    "NextToken": "string"
  }'
```

`POST /#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount`

 Lists the budget names and notifications that are associated with an account. 

> Body parameter

```json
{
  "AccountId": "stringstring",
  "MaxResults": {},
  "NextToken": "string"
}
```

<h3 id="describebudgetnotificationsforaccount-parameters">Parameters</h3>

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
|body|body|[DescribeBudgetNotificationsForAccountRequest](#schemadescribebudgetnotificationsforaccountrequest)|true|none|
|» AccountId|body|[AccountId](#schemaaccountid)|true|The account ID of the user. It's a 12-digit number.|
|» MaxResults|body|object|false|none|
|» NextToken|body|[GenericString](#schemagenericstring)|false| A generic string.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount|

> Example responses

> 200 Response

```json
{
  "BudgetNotificationsForAccount": {},
  "NextToken": "string"
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

<h3 id="describebudgetnotificationsforaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeBudgetNotificationsForAccountResponse](#schemadescribebudgetnotificationsforaccountresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|484|484|ExpiredNextTokenException|[ExpiredNextTokenException](#schemaexpirednexttokenexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeBudgetPerformanceHistory

<a id="opIdDescribeBudgetPerformanceHistory"></a>

> Code samples

```bash
curl 'https://budgets.us-east-1.amazonaws.com/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory' \
  -d '{
    "AccountId": "stringstring",
    "BudgetName": "string",
    "TimePeriod": {
      "Start": {},
      "End": {}
    },
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory`

Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.

> Body parameter

```json
{
  "AccountId": "stringstring",
  "BudgetName": "string",
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="describebudgetperformancehistory-parameters">Parameters</h3>

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
|body|body|[DescribeBudgetPerformanceHistoryRequest](#schemadescribebudgetperformancehistoryrequest)|true|none|
|» AccountId|body|[AccountId](#schemaaccountid)|true|The account ID of the user. It's a 12-digit number.|
|» BudgetName|body|[BudgetName](#schemabudgetname)|true| A string that represents the budget name. The ":" and "\" characters aren't allowed.|
|» TimePeriod|body|object|false|none|
|» » Start|body|object|false|none|
|» » End|body|object|false|none|
|» MaxResults|body|[MaxResults](#schemamaxresults)|false| An integer that represents how many entries a paginated response contains. The maximum is 100.|
|» NextToken|body|[GenericString](#schemagenericstring)|false| A generic string.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory|

> Example responses

> 200 Response

```json
{
  "BudgetPerformanceHistory": {
    "BudgetName": "string",
    "BudgetType": "USAGE",
    "CostFilters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "CostTypes": {
      "IncludeTax": {},
      "IncludeSubscription": {},
      "UseBlended": {},
      "IncludeRefund": {},
      "IncludeCredit": {},
      "IncludeUpfront": {},
      "IncludeRecurring": {},
      "IncludeOtherSubscription": {},
      "IncludeSupport": {},
      "IncludeDiscount": {},
      "UseAmortized": {}
    },
    "TimeUnit": "DAILY",
    "BudgetedAndActualAmountsList": {}
  },
  "NextToken": "string"
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

<h3 id="describebudgetperformancehistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeBudgetPerformanceHistoryResponse](#schemadescribebudgetperformancehistoryresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|484|484|ExpiredNextTokenException|[ExpiredNextTokenException](#schemaexpirednexttokenexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeBudgets

<a id="opIdDescribeBudgets"></a>

> Code samples

```bash
curl 'https://budgets.us-east-1.amazonaws.com/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSBudgetServiceGateway.DescribeBudgets' \
  -d '{
    "AccountId": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgets`

<p>Lists the budgets that are associated with an account.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p> </important>

> Body parameter

```json
{
  "AccountId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describebudgets-parameters">Parameters</h3>

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
|body|body|[DescribeBudgetsRequest](#schemadescribebudgetsrequest)|true|none|
|» AccountId|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSBudgetServiceGateway.DescribeBudgets|

> Example responses

> 200 Response

```json
{
  "Budgets": {},
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="describebudgets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeBudgetsResponse](#schemadescribebudgetsresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|484|484|ExpiredNextTokenException|[ExpiredNextTokenException](#schemaexpirednexttokenexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeNotificationsForBudget

<a id="opIdDescribeNotificationsForBudget"></a>

> Code samples

```bash
curl 'https://budgets.us-east-1.amazonaws.com/#X-Amz-Target=AWSBudgetServiceGateway.DescribeNotificationsForBudget' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSBudgetServiceGateway.DescribeNotificationsForBudget' \
  -d '{
    "AccountId": {},
    "BudgetName": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSBudgetServiceGateway.DescribeNotificationsForBudget`

Lists the notifications that are associated with a budget.

> Body parameter

```json
{
  "AccountId": {},
  "BudgetName": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describenotificationsforbudget-parameters">Parameters</h3>

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
|body|body|[DescribeNotificationsForBudgetRequest](#schemadescribenotificationsforbudgetrequest)|true|none|
|» AccountId|body|object|true|none|
|» BudgetName|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSBudgetServiceGateway.DescribeNotificationsForBudget|

> Example responses

> 200 Response

```json
{
  "Notifications": {},
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="describenotificationsforbudget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeNotificationsForBudgetResponse](#schemadescribenotificationsforbudgetresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|484|484|ExpiredNextTokenException|[ExpiredNextTokenException](#schemaexpirednexttokenexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSubscribersForNotification

<a id="opIdDescribeSubscribersForNotification"></a>

> Code samples

```bash
curl 'https://budgets.us-east-1.amazonaws.com/#X-Amz-Target=AWSBudgetServiceGateway.DescribeSubscribersForNotification' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSBudgetServiceGateway.DescribeSubscribersForNotification' \
  -d '{
    "AccountId": {},
    "BudgetName": {},
    "Notification": {
      "NotificationType": {},
      "ComparisonOperator": {},
      "Threshold": {},
      "ThresholdType": {},
      "NotificationState": {}
    },
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSBudgetServiceGateway.DescribeSubscribersForNotification`

Lists the subscribers that are associated with a notification.

> Body parameter

```json
{
  "AccountId": {},
  "BudgetName": {},
  "Notification": {
    "NotificationType": {},
    "ComparisonOperator": {},
    "Threshold": {},
    "ThresholdType": {},
    "NotificationState": {}
  },
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describesubscribersfornotification-parameters">Parameters</h3>

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
|body|body|[DescribeSubscribersForNotificationRequest](#schemadescribesubscribersfornotificationrequest)|true|none|
|» AccountId|body|object|true|none|
|» BudgetName|body|object|true|none|
|» Notification|body|object|true|none|
|» » NotificationType|body|object|true|none|
|» » ComparisonOperator|body|object|true|none|
|» » Threshold|body|object|true|none|
|» » ThresholdType|body|object|false|none|
|» » NotificationState|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSBudgetServiceGateway.DescribeSubscribersForNotification|

> Example responses

> 200 Response

```json
{
  "Subscribers": {},
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="describesubscribersfornotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSubscribersForNotificationResponse](#schemadescribesubscribersfornotificationresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|484|484|ExpiredNextTokenException|[ExpiredNextTokenException](#schemaexpirednexttokenexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExecuteBudgetAction

<a id="opIdExecuteBudgetAction"></a>

> Code samples

```bash
curl 'https://budgets.us-east-1.amazonaws.com/#X-Amz-Target=AWSBudgetServiceGateway.ExecuteBudgetAction' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSBudgetServiceGateway.ExecuteBudgetAction' \
  -d '{
    "AccountId": "stringstring",
    "BudgetName": "string",
    "ActionId": {},
    "ExecutionType": {}
  }'
```

`POST /#X-Amz-Target=AWSBudgetServiceGateway.ExecuteBudgetAction`

 Executes a budget action. 

> Body parameter

```json
{
  "AccountId": "stringstring",
  "BudgetName": "string",
  "ActionId": {},
  "ExecutionType": {}
}
```

<h3 id="executebudgetaction-parameters">Parameters</h3>

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
|body|body|[ExecuteBudgetActionRequest](#schemaexecutebudgetactionrequest)|true|none|
|» AccountId|body|[AccountId](#schemaaccountid)|true|The account ID of the user. It's a 12-digit number.|
|» BudgetName|body|[BudgetName](#schemabudgetname)|true| A string that represents the budget name. The ":" and "\" characters aren't allowed.|
|» ActionId|body|object|true|none|
|» ExecutionType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSBudgetServiceGateway.ExecuteBudgetAction|

> Example responses

> 200 Response

```json
{
  "AccountId": "stringstring",
  "BudgetName": "string",
  "ActionId": {},
  "ExecutionType": {}
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

<h3 id="executebudgetaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExecuteBudgetActionResponse](#schemaexecutebudgetactionresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceLockedException|[ResourceLockedException](#schemaresourcelockedexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateBudget

<a id="opIdUpdateBudget"></a>

> Code samples

```bash
curl 'https://budgets.us-east-1.amazonaws.com/#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudget' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSBudgetServiceGateway.UpdateBudget' \
  -d '{
    "AccountId": {},
    "NewBudget": {
      "BudgetName": {},
      "BudgetLimit": {
        "Amount": {},
        "Unit": {}
      },
      "PlannedBudgetLimits": {
        "property1": {
          "Amount": {},
          "Unit": {}
        },
        "property2": {
          "Amount": {},
          "Unit": {}
        }
      },
      "CostFilters": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "CostTypes": {
        "IncludeTax": {},
        "IncludeSubscription": {},
        "UseBlended": {},
        "IncludeRefund": {},
        "IncludeCredit": {},
        "IncludeUpfront": {},
        "IncludeRecurring": {},
        "IncludeOtherSubscription": {},
        "IncludeSupport": {},
        "IncludeDiscount": {},
        "UseAmortized": {}
      },
      "TimeUnit": {},
      "TimePeriod": {
        "Start": {},
        "End": {}
      },
      "CalculatedSpend": {
        "ActualSpend": {
          "Amount": {},
          "Unit": {}
        },
        "ForecastedSpend": {
          "Amount": {},
          "Unit": {}
        }
      },
      "BudgetType": {},
      "LastUpdatedTime": {},
      "AutoAdjustData": {
        "AutoAdjustType": {},
        "HistoricalOptions": {
          "BudgetAdjustmentPeriod": {},
          "LookBackAvailablePeriods": {}
        },
        "LastAutoAdjustTime": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudget`

<p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When you modify a budget, the <code>calculatedSpend</code> drops to zero until Amazon Web Services has new usage data to use for forecasting.</p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples">Examples</a> section. </p> </important>

> Body parameter

```json
{
  "AccountId": {},
  "NewBudget": {
    "BudgetName": {},
    "BudgetLimit": {
      "Amount": {},
      "Unit": {}
    },
    "PlannedBudgetLimits": {
      "property1": {
        "Amount": {},
        "Unit": {}
      },
      "property2": {
        "Amount": {},
        "Unit": {}
      }
    },
    "CostFilters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "CostTypes": {
      "IncludeTax": {},
      "IncludeSubscription": {},
      "UseBlended": {},
      "IncludeRefund": {},
      "IncludeCredit": {},
      "IncludeUpfront": {},
      "IncludeRecurring": {},
      "IncludeOtherSubscription": {},
      "IncludeSupport": {},
      "IncludeDiscount": {},
      "UseAmortized": {}
    },
    "TimeUnit": {},
    "TimePeriod": {
      "Start": {},
      "End": {}
    },
    "CalculatedSpend": {
      "ActualSpend": {
        "Amount": {},
        "Unit": {}
      },
      "ForecastedSpend": {
        "Amount": {},
        "Unit": {}
      }
    },
    "BudgetType": {},
    "LastUpdatedTime": {},
    "AutoAdjustData": {
      "AutoAdjustType": {},
      "HistoricalOptions": {
        "BudgetAdjustmentPeriod": {},
        "LookBackAvailablePeriods": {}
      },
      "LastAutoAdjustTime": {}
    }
  }
}
```

<h3 id="updatebudget-parameters">Parameters</h3>

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
|body|body|[UpdateBudgetRequest](#schemaupdatebudgetrequest)|true|none|
|» AccountId|body|object|true|none|
|» NewBudget|body|object|true|none|
|» » BudgetName|body|object|true|none|
|» » BudgetLimit|body|object|false|none|
|» » » Amount|body|object|true|none|
|» » » Unit|body|object|true|none|
|» » PlannedBudgetLimits|body|object|false|none|
|» » » **additionalProperties**|body|[Spend](#schemaspend)|false|<p>The amount of cost or usage that's measured for a budget.</p> <p>For example, a <code>Spend</code> for <code>3 GB</code> of S3 usage has the following parameters:</p> <ul> <li> <p>An <code>Amount</code> of <code>3</code> </p> </li> <li> <p>A <code>unit</code> of <code>GB</code> </p> </li> </ul>|
|» » CostFilters|body|object|false|none|
|» » » **additionalProperties**|body|[DimensionValues](#schemadimensionvalues)|false|none|
|» » CostTypes|body|object|false|none|
|» » » IncludeTax|body|object|false|none|
|» » » IncludeSubscription|body|object|false|none|
|» » » UseBlended|body|object|false|none|
|» » » IncludeRefund|body|object|false|none|
|» » » IncludeCredit|body|object|false|none|
|» » » IncludeUpfront|body|object|false|none|
|» » » IncludeRecurring|body|object|false|none|
|» » » IncludeOtherSubscription|body|object|false|none|
|» » » IncludeSupport|body|object|false|none|
|» » » IncludeDiscount|body|object|false|none|
|» » » UseAmortized|body|object|false|none|
|» » TimeUnit|body|object|true|none|
|» » TimePeriod|body|object|false|none|
|» » » Start|body|object|false|none|
|» » » End|body|object|false|none|
|» » CalculatedSpend|body|object|false|none|
|» » » ActualSpend|body|object|true|none|
|» » » » Amount|body|object|true|none|
|» » » » Unit|body|object|true|none|
|» » » ForecastedSpend|body|object|false|none|
|» » » » Amount|body|object|true|none|
|» » » » Unit|body|object|true|none|
|» » BudgetType|body|object|true|none|
|» » LastUpdatedTime|body|object|false|none|
|» » AutoAdjustData|body|object|false|none|
|» » » AutoAdjustType|body|object|true|none|
|» » » HistoricalOptions|body|object|false|none|
|» » » » BudgetAdjustmentPeriod|body|object|true|none|
|» » » » LookBackAvailablePeriods|body|object|false|none|
|» » » LastAutoAdjustTime|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSBudgetServiceGateway.UpdateBudget|

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

<h3 id="updatebudget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateBudgetResponse](#schemaupdatebudgetresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateBudgetAction

<a id="opIdUpdateBudgetAction"></a>

> Code samples

```bash
curl 'https://budgets.us-east-1.amazonaws.com/#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudgetAction' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSBudgetServiceGateway.UpdateBudgetAction' \
  -d '{
    "AccountId": "stringstring",
    "BudgetName": "string",
    "ActionId": {},
    "NotificationType": "ACTUAL",
    "ActionThreshold": {
      "ActionThresholdValue": 0,
      "ActionThresholdType": "PERCENTAGE"
    },
    "Definition": {
      "IamActionDefinition": {
        "PolicyArn": {},
        "Roles": {},
        "Groups": {},
        "Users": {}
      },
      "ScpActionDefinition": {
        "PolicyId": {},
        "TargetIds": {}
      },
      "SsmActionDefinition": {
        "ActionSubType": {},
        "Region": {},
        "InstanceIds": {}
      }
    },
    "ExecutionRoleArn": {},
    "ApprovalModel": {},
    "Subscribers": [
      {
        "SubscriptionType": {},
        "Address": {}
      }
    ]
  }'
```

`POST /#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudgetAction`

 Updates a budget action. 

> Body parameter

```json
{
  "AccountId": "stringstring",
  "BudgetName": "string",
  "ActionId": {},
  "NotificationType": "ACTUAL",
  "ActionThreshold": {
    "ActionThresholdValue": 0,
    "ActionThresholdType": "PERCENTAGE"
  },
  "Definition": {
    "IamActionDefinition": {
      "PolicyArn": {},
      "Roles": {},
      "Groups": {},
      "Users": {}
    },
    "ScpActionDefinition": {
      "PolicyId": {},
      "TargetIds": {}
    },
    "SsmActionDefinition": {
      "ActionSubType": {},
      "Region": {},
      "InstanceIds": {}
    }
  },
  "ExecutionRoleArn": {},
  "ApprovalModel": {},
  "Subscribers": [
    {
      "SubscriptionType": {},
      "Address": {}
    }
  ]
}
```

<h3 id="updatebudgetaction-parameters">Parameters</h3>

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
|body|body|[UpdateBudgetActionRequest](#schemaupdatebudgetactionrequest)|true|none|
|» AccountId|body|[AccountId](#schemaaccountid)|true|The account ID of the user. It's a 12-digit number.|
|» BudgetName|body|[BudgetName](#schemabudgetname)|true| A string that represents the budget name. The ":" and "\" characters aren't allowed.|
|» ActionId|body|object|true|none|
|» NotificationType|body|[NotificationType](#schemanotificationtype)|false| The type of a notification. It must be ACTUAL or FORECASTED.|
|» ActionThreshold|body|[ActionThreshold](#schemaactionthreshold)|false|The trigger threshold of the action. |
|» Definition|body|[Definition](#schemadefinition)|false|Specifies all of the type-specific parameters. |
|» ExecutionRoleArn|body|object|false|none|
|» ApprovalModel|body|object|false|none|
|» Subscribers|body|[Subscribers](#schemasubscribers)|false| A list of subscribers.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSBudgetServiceGateway.UpdateBudgetAction|
|» NotificationType|ACTUAL|
|» NotificationType|FORECASTED|

> Example responses

> 200 Response

```json
{
  "AccountId": "stringstring",
  "BudgetName": "string",
  "OldAction": {
    "ActionId": {},
    "BudgetName": "string",
    "NotificationType": "ACTUAL",
    "ActionType": {},
    "ActionThreshold": {
      "ActionThresholdValue": 0,
      "ActionThresholdType": "PERCENTAGE"
    },
    "Definition": {
      "IamActionDefinition": {
        "PolicyArn": {},
        "Roles": {},
        "Groups": {},
        "Users": {}
      },
      "ScpActionDefinition": {
        "PolicyId": {},
        "TargetIds": {}
      },
      "SsmActionDefinition": {
        "ActionSubType": {},
        "Region": {},
        "InstanceIds": {}
      }
    },
    "ExecutionRoleArn": {},
    "ApprovalModel": {},
    "Status": {},
    "Subscribers": [
      {
        "SubscriptionType": {},
        "Address": {}
      }
    ]
  },
  "NewAction": {
    "ActionId": {},
    "BudgetName": "string",
    "NotificationType": "ACTUAL",
    "ActionType": {},
    "ActionThreshold": {
      "ActionThresholdValue": 0,
      "ActionThresholdType": "PERCENTAGE"
    },
    "Definition": {
      "IamActionDefinition": {
        "PolicyArn": {},
        "Roles": {},
        "Groups": {},
        "Users": {}
      },
      "ScpActionDefinition": {
        "PolicyId": {},
        "TargetIds": {}
      },
      "SsmActionDefinition": {
        "ActionSubType": {},
        "Region": {},
        "InstanceIds": {}
      }
    },
    "ExecutionRoleArn": {},
    "ApprovalModel": {},
    "Status": {},
    "Subscribers": [
      {
        "SubscriptionType": {},
        "Address": {}
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

> 485 Response

```json
null
```

<h3 id="updatebudgetaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateBudgetActionResponse](#schemaupdatebudgetactionresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceLockedException|[ResourceLockedException](#schemaresourcelockedexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateNotification

<a id="opIdUpdateNotification"></a>

> Code samples

```bash
curl 'https://budgets.us-east-1.amazonaws.com/#X-Amz-Target=AWSBudgetServiceGateway.UpdateNotification' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSBudgetServiceGateway.UpdateNotification' \
  -d '{
    "AccountId": {},
    "BudgetName": {},
    "OldNotification": {
      "NotificationType": {},
      "ComparisonOperator": {},
      "Threshold": {},
      "ThresholdType": {},
      "NotificationState": {}
    },
    "NewNotification": {
      "NotificationType": {},
      "ComparisonOperator": {},
      "Threshold": {},
      "ThresholdType": {},
      "NotificationState": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSBudgetServiceGateway.UpdateNotification`

Updates a notification.

> Body parameter

```json
{
  "AccountId": {},
  "BudgetName": {},
  "OldNotification": {
    "NotificationType": {},
    "ComparisonOperator": {},
    "Threshold": {},
    "ThresholdType": {},
    "NotificationState": {}
  },
  "NewNotification": {
    "NotificationType": {},
    "ComparisonOperator": {},
    "Threshold": {},
    "ThresholdType": {},
    "NotificationState": {}
  }
}
```

<h3 id="updatenotification-parameters">Parameters</h3>

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
|body|body|[UpdateNotificationRequest](#schemaupdatenotificationrequest)|true|none|
|» AccountId|body|object|true|none|
|» BudgetName|body|object|true|none|
|» OldNotification|body|object|true|none|
|» » NotificationType|body|object|true|none|
|» » ComparisonOperator|body|object|true|none|
|» » Threshold|body|object|true|none|
|» » ThresholdType|body|object|false|none|
|» » NotificationState|body|object|false|none|
|» NewNotification|body|object|true|none|
|» » NotificationType|body|object|true|none|
|» » ComparisonOperator|body|object|true|none|
|» » Threshold|body|object|true|none|
|» » ThresholdType|body|object|false|none|
|» » NotificationState|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSBudgetServiceGateway.UpdateNotification|

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

> 485 Response

```json
null
```

<h3 id="updatenotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateNotificationResponse](#schemaupdatenotificationresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|DuplicateRecordException|[DuplicateRecordException](#schemaduplicaterecordexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSubscriber

<a id="opIdUpdateSubscriber"></a>

> Code samples

```bash
curl 'https://budgets.us-east-1.amazonaws.com/#X-Amz-Target=AWSBudgetServiceGateway.UpdateSubscriber' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSBudgetServiceGateway.UpdateSubscriber' \
  -d '{
    "AccountId": {},
    "BudgetName": {},
    "Notification": {
      "NotificationType": {},
      "ComparisonOperator": {},
      "Threshold": {},
      "ThresholdType": {},
      "NotificationState": {}
    },
    "OldSubscriber": {
      "SubscriptionType": {},
      "Address": {}
    },
    "NewSubscriber": {
      "SubscriptionType": {},
      "Address": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSBudgetServiceGateway.UpdateSubscriber`

Updates a subscriber.

> Body parameter

```json
{
  "AccountId": {},
  "BudgetName": {},
  "Notification": {
    "NotificationType": {},
    "ComparisonOperator": {},
    "Threshold": {},
    "ThresholdType": {},
    "NotificationState": {}
  },
  "OldSubscriber": {
    "SubscriptionType": {},
    "Address": {}
  },
  "NewSubscriber": {
    "SubscriptionType": {},
    "Address": {}
  }
}
```

<h3 id="updatesubscriber-parameters">Parameters</h3>

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
|body|body|[UpdateSubscriberRequest](#schemaupdatesubscriberrequest)|true|none|
|» AccountId|body|object|true|none|
|» BudgetName|body|object|true|none|
|» Notification|body|object|true|none|
|» » NotificationType|body|object|true|none|
|» » ComparisonOperator|body|object|true|none|
|» » Threshold|body|object|true|none|
|» » ThresholdType|body|object|false|none|
|» » NotificationState|body|object|false|none|
|» OldSubscriber|body|object|true|none|
|» » SubscriptionType|body|object|true|none|
|» » Address|body|object|true|none|
|» NewSubscriber|body|object|true|none|
|» » SubscriptionType|body|object|true|none|
|» » Address|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSBudgetServiceGateway.UpdateSubscriber|

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

> 485 Response

```json
null
```

<h3 id="updatesubscriber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSubscriberResponse](#schemaupdatesubscriberresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|DuplicateRecordException|[DuplicateRecordException](#schemaduplicaterecordexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateBudgetResponse">CreateBudgetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatebudgetresponse"></a>
<a id="schema_CreateBudgetResponse"></a>
<a id="tocScreatebudgetresponse"></a>
<a id="tocscreatebudgetresponse"></a>

```json
{}
```

 Response of CreateBudget

<h2 id="tocS_CreateBudgetRequest">CreateBudgetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebudgetrequest"></a>
<a id="schema_CreateBudgetRequest"></a>
<a id="tocScreatebudgetrequest"></a>
<a id="tocscreatebudgetrequest"></a>

```json
{
  "AccountId": {},
  "Budget": {
    "BudgetName": {},
    "BudgetLimit": {
      "Amount": {},
      "Unit": {}
    },
    "PlannedBudgetLimits": {
      "property1": {
        "Amount": {},
        "Unit": {}
      },
      "property2": {
        "Amount": {},
        "Unit": {}
      }
    },
    "CostFilters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "CostTypes": {
      "IncludeTax": {},
      "IncludeSubscription": {},
      "UseBlended": {},
      "IncludeRefund": {},
      "IncludeCredit": {},
      "IncludeUpfront": {},
      "IncludeRecurring": {},
      "IncludeOtherSubscription": {},
      "IncludeSupport": {},
      "IncludeDiscount": {},
      "UseAmortized": {}
    },
    "TimeUnit": {},
    "TimePeriod": {
      "Start": {},
      "End": {}
    },
    "CalculatedSpend": {
      "ActualSpend": {
        "Amount": {},
        "Unit": {}
      },
      "ForecastedSpend": {
        "Amount": {},
        "Unit": {}
      }
    },
    "BudgetType": {},
    "LastUpdatedTime": {},
    "AutoAdjustData": {
      "AutoAdjustType": {},
      "HistoricalOptions": {
        "BudgetAdjustmentPeriod": {},
        "LookBackAvailablePeriods": {}
      },
      "LastAutoAdjustTime": {}
    }
  },
  "NotificationsWithSubscribers": {}
}
```

 Request of CreateBudget

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|true|none|none|
|Budget|object|true|none|none|
|NotificationsWithSubscribers|object|false|none|none|

<h2 id="tocS_InvalidParameterException">InvalidParameterException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparameterexception"></a>
<a id="schema_InvalidParameterException"></a>
<a id="tocSinvalidparameterexception"></a>
<a id="tocsinvalidparameterexception"></a>

```json
null
```

<h2 id="tocS_InternalErrorException">InternalErrorException</h2>
<!-- backwards compatibility -->
<a id="schemainternalerrorexception"></a>
<a id="schema_InternalErrorException"></a>
<a id="tocSinternalerrorexception"></a>
<a id="tocsinternalerrorexception"></a>

```json
null
```

<h2 id="tocS_CreationLimitExceededException">CreationLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemacreationlimitexceededexception"></a>
<a id="schema_CreationLimitExceededException"></a>
<a id="tocScreationlimitexceededexception"></a>
<a id="tocscreationlimitexceededexception"></a>

```json
null
```

<h2 id="tocS_DuplicateRecordException">DuplicateRecordException</h2>
<!-- backwards compatibility -->
<a id="schemaduplicaterecordexception"></a>
<a id="schema_DuplicateRecordException"></a>
<a id="tocSduplicaterecordexception"></a>
<a id="tocsduplicaterecordexception"></a>

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

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_CreateBudgetActionResponse">CreateBudgetActionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatebudgetactionresponse"></a>
<a id="schema_CreateBudgetActionResponse"></a>
<a id="tocScreatebudgetactionresponse"></a>
<a id="tocscreatebudgetactionresponse"></a>

```json
{
  "AccountId": "stringstring",
  "BudgetName": "string",
  "ActionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|The account ID of the user. It's a 12-digit number.|
|BudgetName|[BudgetName](#schemabudgetname)|true|none| A string that represents the budget name. The ":" and "\" characters aren't allowed.|
|ActionId|object|true|none|none|

<h2 id="tocS_CreateBudgetActionRequest">CreateBudgetActionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebudgetactionrequest"></a>
<a id="schema_CreateBudgetActionRequest"></a>
<a id="tocScreatebudgetactionrequest"></a>
<a id="tocscreatebudgetactionrequest"></a>

```json
{
  "AccountId": "stringstring",
  "BudgetName": "string",
  "NotificationType": "ACTUAL",
  "ActionType": {},
  "ActionThreshold": {
    "ActionThresholdValue": 0,
    "ActionThresholdType": "PERCENTAGE"
  },
  "Definition": {
    "IamActionDefinition": {
      "PolicyArn": {},
      "Roles": {},
      "Groups": {},
      "Users": {}
    },
    "ScpActionDefinition": {
      "PolicyId": {},
      "TargetIds": {}
    },
    "SsmActionDefinition": {
      "ActionSubType": {},
      "Region": {},
      "InstanceIds": {}
    }
  },
  "ExecutionRoleArn": {},
  "ApprovalModel": {},
  "Subscribers": [
    {
      "SubscriptionType": {},
      "Address": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|The account ID of the user. It's a 12-digit number.|
|BudgetName|[BudgetName](#schemabudgetname)|true|none| A string that represents the budget name. The ":" and "\" characters aren't allowed.|
|NotificationType|[NotificationType](#schemanotificationtype)|true|none| The type of a notification. It must be ACTUAL or FORECASTED.|
|ActionType|object|true|none|none|
|ActionThreshold|[ActionThreshold](#schemaactionthreshold)|true|none|The trigger threshold of the action. |
|Definition|[Definition](#schemadefinition)|true|none|Specifies all of the type-specific parameters. |
|ExecutionRoleArn|object|true|none|none|
|ApprovalModel|object|true|none|none|
|Subscribers|[Subscribers](#schemasubscribers)|true|none| A list of subscribers.|

#### Enumerated Values

|Property|Value|
|---|---|
|NotificationType|ACTUAL|
|NotificationType|FORECASTED|

<h2 id="tocS_NotFoundException">NotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundexception"></a>
<a id="schema_NotFoundException"></a>
<a id="tocSnotfoundexception"></a>
<a id="tocsnotfoundexception"></a>

```json
null
```

<h2 id="tocS_CreateNotificationResponse">CreateNotificationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatenotificationresponse"></a>
<a id="schema_CreateNotificationResponse"></a>
<a id="tocScreatenotificationresponse"></a>
<a id="tocscreatenotificationresponse"></a>

```json
{}
```

 Response of CreateNotification

<h2 id="tocS_CreateNotificationRequest">CreateNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatenotificationrequest"></a>
<a id="schema_CreateNotificationRequest"></a>
<a id="tocScreatenotificationrequest"></a>
<a id="tocscreatenotificationrequest"></a>

```json
{
  "AccountId": {},
  "BudgetName": {},
  "Notification": {
    "NotificationType": {},
    "ComparisonOperator": {},
    "Threshold": {},
    "ThresholdType": {},
    "NotificationState": {}
  },
  "Subscribers": {}
}
```

 Request of CreateNotification

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|true|none|none|
|BudgetName|object|true|none|none|
|Notification|object|true|none|none|
|Subscribers|object|true|none|none|

<h2 id="tocS_CreateSubscriberResponse">CreateSubscriberResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesubscriberresponse"></a>
<a id="schema_CreateSubscriberResponse"></a>
<a id="tocScreatesubscriberresponse"></a>
<a id="tocscreatesubscriberresponse"></a>

```json
{}
```

 Response of CreateSubscriber

<h2 id="tocS_CreateSubscriberRequest">CreateSubscriberRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesubscriberrequest"></a>
<a id="schema_CreateSubscriberRequest"></a>
<a id="tocScreatesubscriberrequest"></a>
<a id="tocscreatesubscriberrequest"></a>

```json
{
  "AccountId": {},
  "BudgetName": {},
  "Notification": {
    "NotificationType": {},
    "ComparisonOperator": {},
    "Threshold": {},
    "ThresholdType": {},
    "NotificationState": {}
  },
  "Subscriber": {
    "SubscriptionType": {},
    "Address": {}
  }
}
```

 Request of CreateSubscriber

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|true|none|none|
|BudgetName|object|true|none|none|
|Notification|object|true|none|none|
|Subscriber|object|true|none|none|

<h2 id="tocS_DeleteBudgetResponse">DeleteBudgetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletebudgetresponse"></a>
<a id="schema_DeleteBudgetResponse"></a>
<a id="tocSdeletebudgetresponse"></a>
<a id="tocsdeletebudgetresponse"></a>

```json
{}
```

 Response of DeleteBudget

<h2 id="tocS_DeleteBudgetRequest">DeleteBudgetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebudgetrequest"></a>
<a id="schema_DeleteBudgetRequest"></a>
<a id="tocSdeletebudgetrequest"></a>
<a id="tocsdeletebudgetrequest"></a>

```json
{
  "AccountId": {},
  "BudgetName": {}
}
```

 Request of DeleteBudget

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|true|none|none|
|BudgetName|object|true|none|none|

<h2 id="tocS_DeleteBudgetActionResponse">DeleteBudgetActionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletebudgetactionresponse"></a>
<a id="schema_DeleteBudgetActionResponse"></a>
<a id="tocSdeletebudgetactionresponse"></a>
<a id="tocsdeletebudgetactionresponse"></a>

```json
{
  "AccountId": "stringstring",
  "BudgetName": "string",
  "Action": {
    "ActionId": {},
    "BudgetName": "string",
    "NotificationType": "ACTUAL",
    "ActionType": {},
    "ActionThreshold": {
      "ActionThresholdValue": 0,
      "ActionThresholdType": "PERCENTAGE"
    },
    "Definition": {
      "IamActionDefinition": {
        "PolicyArn": {},
        "Roles": {},
        "Groups": {},
        "Users": {}
      },
      "ScpActionDefinition": {
        "PolicyId": {},
        "TargetIds": {}
      },
      "SsmActionDefinition": {
        "ActionSubType": {},
        "Region": {},
        "InstanceIds": {}
      }
    },
    "ExecutionRoleArn": {},
    "ApprovalModel": {},
    "Status": {},
    "Subscribers": [
      {
        "SubscriptionType": {},
        "Address": {}
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|The account ID of the user. It's a 12-digit number.|
|BudgetName|[BudgetName](#schemabudgetname)|true|none| A string that represents the budget name. The ":" and "\" characters aren't allowed.|
|Action|[Action](#schemaaction)|true|none|A budget action resource. |

<h2 id="tocS_DeleteBudgetActionRequest">DeleteBudgetActionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebudgetactionrequest"></a>
<a id="schema_DeleteBudgetActionRequest"></a>
<a id="tocSdeletebudgetactionrequest"></a>
<a id="tocsdeletebudgetactionrequest"></a>

```json
{
  "AccountId": "stringstring",
  "BudgetName": "string",
  "ActionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|The account ID of the user. It's a 12-digit number.|
|BudgetName|[BudgetName](#schemabudgetname)|true|none| A string that represents the budget name. The ":" and "\" characters aren't allowed.|
|ActionId|object|true|none|none|

<h2 id="tocS_ResourceLockedException">ResourceLockedException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcelockedexception"></a>
<a id="schema_ResourceLockedException"></a>
<a id="tocSresourcelockedexception"></a>
<a id="tocsresourcelockedexception"></a>

```json
null
```

<h2 id="tocS_DeleteNotificationResponse">DeleteNotificationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletenotificationresponse"></a>
<a id="schema_DeleteNotificationResponse"></a>
<a id="tocSdeletenotificationresponse"></a>
<a id="tocsdeletenotificationresponse"></a>

```json
{}
```

 Response of DeleteNotification

<h2 id="tocS_DeleteNotificationRequest">DeleteNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletenotificationrequest"></a>
<a id="schema_DeleteNotificationRequest"></a>
<a id="tocSdeletenotificationrequest"></a>
<a id="tocsdeletenotificationrequest"></a>

```json
{
  "AccountId": {},
  "BudgetName": {},
  "Notification": {
    "NotificationType": {},
    "ComparisonOperator": {},
    "Threshold": {},
    "ThresholdType": {},
    "NotificationState": {}
  }
}
```

 Request of DeleteNotification

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|true|none|none|
|BudgetName|object|true|none|none|
|Notification|object|true|none|none|

<h2 id="tocS_DeleteSubscriberResponse">DeleteSubscriberResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletesubscriberresponse"></a>
<a id="schema_DeleteSubscriberResponse"></a>
<a id="tocSdeletesubscriberresponse"></a>
<a id="tocsdeletesubscriberresponse"></a>

```json
{}
```

 Response of DeleteSubscriber

<h2 id="tocS_DeleteSubscriberRequest">DeleteSubscriberRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletesubscriberrequest"></a>
<a id="schema_DeleteSubscriberRequest"></a>
<a id="tocSdeletesubscriberrequest"></a>
<a id="tocsdeletesubscriberrequest"></a>

```json
{
  "AccountId": {},
  "BudgetName": {},
  "Notification": {
    "NotificationType": {},
    "ComparisonOperator": {},
    "Threshold": {},
    "ThresholdType": {},
    "NotificationState": {}
  },
  "Subscriber": {
    "SubscriptionType": {},
    "Address": {}
  }
}
```

 Request of DeleteSubscriber

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|true|none|none|
|BudgetName|object|true|none|none|
|Notification|object|true|none|none|
|Subscriber|object|true|none|none|

<h2 id="tocS_DescribeBudgetResponse">DescribeBudgetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribebudgetresponse"></a>
<a id="schema_DescribeBudgetResponse"></a>
<a id="tocSdescribebudgetresponse"></a>
<a id="tocsdescribebudgetresponse"></a>

```json
{
  "Budget": {
    "BudgetName": {},
    "BudgetLimit": {
      "Amount": {},
      "Unit": {}
    },
    "PlannedBudgetLimits": {
      "property1": {
        "Amount": {},
        "Unit": {}
      },
      "property2": {
        "Amount": {},
        "Unit": {}
      }
    },
    "CostFilters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "CostTypes": {
      "IncludeTax": {},
      "IncludeSubscription": {},
      "UseBlended": {},
      "IncludeRefund": {},
      "IncludeCredit": {},
      "IncludeUpfront": {},
      "IncludeRecurring": {},
      "IncludeOtherSubscription": {},
      "IncludeSupport": {},
      "IncludeDiscount": {},
      "UseAmortized": {}
    },
    "TimeUnit": {},
    "TimePeriod": {
      "Start": {},
      "End": {}
    },
    "CalculatedSpend": {
      "ActualSpend": {
        "Amount": {},
        "Unit": {}
      },
      "ForecastedSpend": {
        "Amount": {},
        "Unit": {}
      }
    },
    "BudgetType": {},
    "LastUpdatedTime": {},
    "AutoAdjustData": {
      "AutoAdjustType": {},
      "HistoricalOptions": {
        "BudgetAdjustmentPeriod": {},
        "LookBackAvailablePeriods": {}
      },
      "LastAutoAdjustTime": {}
    }
  }
}
```

 Response of DescribeBudget

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Budget|object|false|none|none|

<h2 id="tocS_DescribeBudgetRequest">DescribeBudgetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribebudgetrequest"></a>
<a id="schema_DescribeBudgetRequest"></a>
<a id="tocSdescribebudgetrequest"></a>
<a id="tocsdescribebudgetrequest"></a>

```json
{
  "AccountId": {},
  "BudgetName": {}
}
```

 Request of DescribeBudget

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|true|none|none|
|BudgetName|object|true|none|none|

<h2 id="tocS_DescribeBudgetActionResponse">DescribeBudgetActionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribebudgetactionresponse"></a>
<a id="schema_DescribeBudgetActionResponse"></a>
<a id="tocSdescribebudgetactionresponse"></a>
<a id="tocsdescribebudgetactionresponse"></a>

```json
{
  "AccountId": "stringstring",
  "BudgetName": "string",
  "Action": {
    "ActionId": {},
    "BudgetName": "string",
    "NotificationType": "ACTUAL",
    "ActionType": {},
    "ActionThreshold": {
      "ActionThresholdValue": 0,
      "ActionThresholdType": "PERCENTAGE"
    },
    "Definition": {
      "IamActionDefinition": {
        "PolicyArn": {},
        "Roles": {},
        "Groups": {},
        "Users": {}
      },
      "ScpActionDefinition": {
        "PolicyId": {},
        "TargetIds": {}
      },
      "SsmActionDefinition": {
        "ActionSubType": {},
        "Region": {},
        "InstanceIds": {}
      }
    },
    "ExecutionRoleArn": {},
    "ApprovalModel": {},
    "Status": {},
    "Subscribers": [
      {
        "SubscriptionType": {},
        "Address": {}
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|The account ID of the user. It's a 12-digit number.|
|BudgetName|[BudgetName](#schemabudgetname)|true|none| A string that represents the budget name. The ":" and "\" characters aren't allowed.|
|Action|object|true|none|none|

<h2 id="tocS_DescribeBudgetActionRequest">DescribeBudgetActionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribebudgetactionrequest"></a>
<a id="schema_DescribeBudgetActionRequest"></a>
<a id="tocSdescribebudgetactionrequest"></a>
<a id="tocsdescribebudgetactionrequest"></a>

```json
{
  "AccountId": "stringstring",
  "BudgetName": "string",
  "ActionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|The account ID of the user. It's a 12-digit number.|
|BudgetName|[BudgetName](#schemabudgetname)|true|none| A string that represents the budget name. The ":" and "\" characters aren't allowed.|
|ActionId|object|true|none|none|

<h2 id="tocS_DescribeBudgetActionHistoriesResponse">DescribeBudgetActionHistoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribebudgetactionhistoriesresponse"></a>
<a id="schema_DescribeBudgetActionHistoriesResponse"></a>
<a id="tocSdescribebudgetactionhistoriesresponse"></a>
<a id="tocsdescribebudgetactionhistoriesresponse"></a>

```json
{
  "ActionHistories": {},
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActionHistories|object|true|none|none|
|NextToken|[GenericString](#schemagenericstring)|false|none| A generic string.|

<h2 id="tocS_DescribeBudgetActionHistoriesRequest">DescribeBudgetActionHistoriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribebudgetactionhistoriesrequest"></a>
<a id="schema_DescribeBudgetActionHistoriesRequest"></a>
<a id="tocSdescribebudgetactionhistoriesrequest"></a>
<a id="tocsdescribebudgetactionhistoriesrequest"></a>

```json
{
  "AccountId": "stringstring",
  "BudgetName": "string",
  "ActionId": {},
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "MaxResults": 1,
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|The account ID of the user. It's a 12-digit number.|
|BudgetName|[BudgetName](#schemabudgetname)|true|none| A string that represents the budget name. The ":" and "\" characters aren't allowed.|
|ActionId|object|true|none|none|
|TimePeriod|[TimePeriod](#schematimeperiod)|false|none|The period of time that's covered by a budget. The period has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date. |
|MaxResults|[MaxResults](#schemamaxresults)|false|none| An integer that represents how many entries a paginated response contains. The maximum is 100.|
|NextToken|[GenericString](#schemagenericstring)|false|none| A generic string.|

<h2 id="tocS_InvalidNextTokenException">InvalidNextTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnexttokenexception"></a>
<a id="schema_InvalidNextTokenException"></a>
<a id="tocSinvalidnexttokenexception"></a>
<a id="tocsinvalidnexttokenexception"></a>

```json
null
```

<h2 id="tocS_DescribeBudgetActionsForAccountResponse">DescribeBudgetActionsForAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribebudgetactionsforaccountresponse"></a>
<a id="schema_DescribeBudgetActionsForAccountResponse"></a>
<a id="tocSdescribebudgetactionsforaccountresponse"></a>
<a id="tocsdescribebudgetactionsforaccountresponse"></a>

```json
{
  "Actions": {},
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Actions|object|true|none|none|
|NextToken|[GenericString](#schemagenericstring)|false|none| A generic string.|

<h2 id="tocS_DescribeBudgetActionsForAccountRequest">DescribeBudgetActionsForAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribebudgetactionsforaccountrequest"></a>
<a id="schema_DescribeBudgetActionsForAccountRequest"></a>
<a id="tocSdescribebudgetactionsforaccountrequest"></a>
<a id="tocsdescribebudgetactionsforaccountrequest"></a>

```json
{
  "AccountId": "stringstring",
  "MaxResults": 1,
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|The account ID of the user. It's a 12-digit number.|
|MaxResults|[MaxResults](#schemamaxresults)|false|none| An integer that represents how many entries a paginated response contains. The maximum is 100.|
|NextToken|[GenericString](#schemagenericstring)|false|none| A generic string.|

<h2 id="tocS_DescribeBudgetActionsForBudgetResponse">DescribeBudgetActionsForBudgetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribebudgetactionsforbudgetresponse"></a>
<a id="schema_DescribeBudgetActionsForBudgetResponse"></a>
<a id="tocSdescribebudgetactionsforbudgetresponse"></a>
<a id="tocsdescribebudgetactionsforbudgetresponse"></a>

```json
{
  "Actions": {},
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Actions|object|true|none|none|
|NextToken|[GenericString](#schemagenericstring)|false|none| A generic string.|

<h2 id="tocS_DescribeBudgetActionsForBudgetRequest">DescribeBudgetActionsForBudgetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribebudgetactionsforbudgetrequest"></a>
<a id="schema_DescribeBudgetActionsForBudgetRequest"></a>
<a id="tocSdescribebudgetactionsforbudgetrequest"></a>
<a id="tocsdescribebudgetactionsforbudgetrequest"></a>

```json
{
  "AccountId": "stringstring",
  "BudgetName": "string",
  "MaxResults": 1,
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|The account ID of the user. It's a 12-digit number.|
|BudgetName|[BudgetName](#schemabudgetname)|true|none| A string that represents the budget name. The ":" and "\" characters aren't allowed.|
|MaxResults|[MaxResults](#schemamaxresults)|false|none| An integer that represents how many entries a paginated response contains. The maximum is 100.|
|NextToken|[GenericString](#schemagenericstring)|false|none| A generic string.|

<h2 id="tocS_DescribeBudgetNotificationsForAccountResponse">DescribeBudgetNotificationsForAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribebudgetnotificationsforaccountresponse"></a>
<a id="schema_DescribeBudgetNotificationsForAccountResponse"></a>
<a id="tocSdescribebudgetnotificationsforaccountresponse"></a>
<a id="tocsdescribebudgetnotificationsforaccountresponse"></a>

```json
{
  "BudgetNotificationsForAccount": {},
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BudgetNotificationsForAccount|object|false|none|none|
|NextToken|[GenericString](#schemagenericstring)|false|none| A generic string.|

<h2 id="tocS_DescribeBudgetNotificationsForAccountRequest">DescribeBudgetNotificationsForAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribebudgetnotificationsforaccountrequest"></a>
<a id="schema_DescribeBudgetNotificationsForAccountRequest"></a>
<a id="tocSdescribebudgetnotificationsforaccountrequest"></a>
<a id="tocsdescribebudgetnotificationsforaccountrequest"></a>

```json
{
  "AccountId": "stringstring",
  "MaxResults": {},
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|The account ID of the user. It's a 12-digit number.|
|MaxResults|object|false|none|none|
|NextToken|[GenericString](#schemagenericstring)|false|none| A generic string.|

<h2 id="tocS_ExpiredNextTokenException">ExpiredNextTokenException</h2>
<!-- backwards compatibility -->
<a id="schemaexpirednexttokenexception"></a>
<a id="schema_ExpiredNextTokenException"></a>
<a id="tocSexpirednexttokenexception"></a>
<a id="tocsexpirednexttokenexception"></a>

```json
null
```

<h2 id="tocS_DescribeBudgetPerformanceHistoryResponse">DescribeBudgetPerformanceHistoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribebudgetperformancehistoryresponse"></a>
<a id="schema_DescribeBudgetPerformanceHistoryResponse"></a>
<a id="tocSdescribebudgetperformancehistoryresponse"></a>
<a id="tocsdescribebudgetperformancehistoryresponse"></a>

```json
{
  "BudgetPerformanceHistory": {
    "BudgetName": "string",
    "BudgetType": "USAGE",
    "CostFilters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "CostTypes": {
      "IncludeTax": {},
      "IncludeSubscription": {},
      "UseBlended": {},
      "IncludeRefund": {},
      "IncludeCredit": {},
      "IncludeUpfront": {},
      "IncludeRecurring": {},
      "IncludeOtherSubscription": {},
      "IncludeSupport": {},
      "IncludeDiscount": {},
      "UseAmortized": {}
    },
    "TimeUnit": "DAILY",
    "BudgetedAndActualAmountsList": {}
  },
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BudgetPerformanceHistory|object|false|none|none|
|NextToken|[GenericString](#schemagenericstring)|false|none| A generic string.|

<h2 id="tocS_DescribeBudgetPerformanceHistoryRequest">DescribeBudgetPerformanceHistoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribebudgetperformancehistoryrequest"></a>
<a id="schema_DescribeBudgetPerformanceHistoryRequest"></a>
<a id="tocSdescribebudgetperformancehistoryrequest"></a>
<a id="tocsdescribebudgetperformancehistoryrequest"></a>

```json
{
  "AccountId": "stringstring",
  "BudgetName": "string",
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "MaxResults": 1,
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|The account ID of the user. It's a 12-digit number.|
|BudgetName|[BudgetName](#schemabudgetname)|true|none| A string that represents the budget name. The ":" and "\" characters aren't allowed.|
|TimePeriod|object|false|none|none|
|MaxResults|[MaxResults](#schemamaxresults)|false|none| An integer that represents how many entries a paginated response contains. The maximum is 100.|
|NextToken|[GenericString](#schemagenericstring)|false|none| A generic string.|

<h2 id="tocS_DescribeBudgetsResponse">DescribeBudgetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribebudgetsresponse"></a>
<a id="schema_DescribeBudgetsResponse"></a>
<a id="tocSdescribebudgetsresponse"></a>
<a id="tocsdescribebudgetsresponse"></a>

```json
{
  "Budgets": {},
  "NextToken": {}
}
```

 Response of DescribeBudgets

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Budgets|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeBudgetsRequest">DescribeBudgetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribebudgetsrequest"></a>
<a id="schema_DescribeBudgetsRequest"></a>
<a id="tocSdescribebudgetsrequest"></a>
<a id="tocsdescribebudgetsrequest"></a>

```json
{
  "AccountId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

 Request of DescribeBudgets

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeNotificationsForBudgetResponse">DescribeNotificationsForBudgetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribenotificationsforbudgetresponse"></a>
<a id="schema_DescribeNotificationsForBudgetResponse"></a>
<a id="tocSdescribenotificationsforbudgetresponse"></a>
<a id="tocsdescribenotificationsforbudgetresponse"></a>

```json
{
  "Notifications": {},
  "NextToken": {}
}
```

 Response of GetNotificationsForBudget

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Notifications|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeNotificationsForBudgetRequest">DescribeNotificationsForBudgetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribenotificationsforbudgetrequest"></a>
<a id="schema_DescribeNotificationsForBudgetRequest"></a>
<a id="tocSdescribenotificationsforbudgetrequest"></a>
<a id="tocsdescribenotificationsforbudgetrequest"></a>

```json
{
  "AccountId": {},
  "BudgetName": {},
  "MaxResults": {},
  "NextToken": {}
}
```

 Request of DescribeNotificationsForBudget

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|true|none|none|
|BudgetName|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeSubscribersForNotificationResponse">DescribeSubscribersForNotificationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribesubscribersfornotificationresponse"></a>
<a id="schema_DescribeSubscribersForNotificationResponse"></a>
<a id="tocSdescribesubscribersfornotificationresponse"></a>
<a id="tocsdescribesubscribersfornotificationresponse"></a>

```json
{
  "Subscribers": {},
  "NextToken": {}
}
```

 Response of DescribeSubscribersForNotification

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Subscribers|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeSubscribersForNotificationRequest">DescribeSubscribersForNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribesubscribersfornotificationrequest"></a>
<a id="schema_DescribeSubscribersForNotificationRequest"></a>
<a id="tocSdescribesubscribersfornotificationrequest"></a>
<a id="tocsdescribesubscribersfornotificationrequest"></a>

```json
{
  "AccountId": {},
  "BudgetName": {},
  "Notification": {
    "NotificationType": {},
    "ComparisonOperator": {},
    "Threshold": {},
    "ThresholdType": {},
    "NotificationState": {}
  },
  "MaxResults": {},
  "NextToken": {}
}
```

 Request of DescribeSubscribersForNotification

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|true|none|none|
|BudgetName|object|true|none|none|
|Notification|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ExecuteBudgetActionResponse">ExecuteBudgetActionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexecutebudgetactionresponse"></a>
<a id="schema_ExecuteBudgetActionResponse"></a>
<a id="tocSexecutebudgetactionresponse"></a>
<a id="tocsexecutebudgetactionresponse"></a>

```json
{
  "AccountId": "stringstring",
  "BudgetName": "string",
  "ActionId": {},
  "ExecutionType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|The account ID of the user. It's a 12-digit number.|
|BudgetName|[BudgetName](#schemabudgetname)|true|none| A string that represents the budget name. The ":" and "\" characters aren't allowed.|
|ActionId|object|true|none|none|
|ExecutionType|object|true|none|none|

<h2 id="tocS_ExecuteBudgetActionRequest">ExecuteBudgetActionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexecutebudgetactionrequest"></a>
<a id="schema_ExecuteBudgetActionRequest"></a>
<a id="tocSexecutebudgetactionrequest"></a>
<a id="tocsexecutebudgetactionrequest"></a>

```json
{
  "AccountId": "stringstring",
  "BudgetName": "string",
  "ActionId": {},
  "ExecutionType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|The account ID of the user. It's a 12-digit number.|
|BudgetName|[BudgetName](#schemabudgetname)|true|none| A string that represents the budget name. The ":" and "\" characters aren't allowed.|
|ActionId|object|true|none|none|
|ExecutionType|object|true|none|none|

<h2 id="tocS_UpdateBudgetResponse">UpdateBudgetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebudgetresponse"></a>
<a id="schema_UpdateBudgetResponse"></a>
<a id="tocSupdatebudgetresponse"></a>
<a id="tocsupdatebudgetresponse"></a>

```json
{}
```

 Response of UpdateBudget

<h2 id="tocS_UpdateBudgetRequest">UpdateBudgetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebudgetrequest"></a>
<a id="schema_UpdateBudgetRequest"></a>
<a id="tocSupdatebudgetrequest"></a>
<a id="tocsupdatebudgetrequest"></a>

```json
{
  "AccountId": {},
  "NewBudget": {
    "BudgetName": {},
    "BudgetLimit": {
      "Amount": {},
      "Unit": {}
    },
    "PlannedBudgetLimits": {
      "property1": {
        "Amount": {},
        "Unit": {}
      },
      "property2": {
        "Amount": {},
        "Unit": {}
      }
    },
    "CostFilters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "CostTypes": {
      "IncludeTax": {},
      "IncludeSubscription": {},
      "UseBlended": {},
      "IncludeRefund": {},
      "IncludeCredit": {},
      "IncludeUpfront": {},
      "IncludeRecurring": {},
      "IncludeOtherSubscription": {},
      "IncludeSupport": {},
      "IncludeDiscount": {},
      "UseAmortized": {}
    },
    "TimeUnit": {},
    "TimePeriod": {
      "Start": {},
      "End": {}
    },
    "CalculatedSpend": {
      "ActualSpend": {
        "Amount": {},
        "Unit": {}
      },
      "ForecastedSpend": {
        "Amount": {},
        "Unit": {}
      }
    },
    "BudgetType": {},
    "LastUpdatedTime": {},
    "AutoAdjustData": {
      "AutoAdjustType": {},
      "HistoricalOptions": {
        "BudgetAdjustmentPeriod": {},
        "LookBackAvailablePeriods": {}
      },
      "LastAutoAdjustTime": {}
    }
  }
}
```

 Request of UpdateBudget

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|true|none|none|
|NewBudget|object|true|none|none|

<h2 id="tocS_UpdateBudgetActionResponse">UpdateBudgetActionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebudgetactionresponse"></a>
<a id="schema_UpdateBudgetActionResponse"></a>
<a id="tocSupdatebudgetactionresponse"></a>
<a id="tocsupdatebudgetactionresponse"></a>

```json
{
  "AccountId": "stringstring",
  "BudgetName": "string",
  "OldAction": {
    "ActionId": {},
    "BudgetName": "string",
    "NotificationType": "ACTUAL",
    "ActionType": {},
    "ActionThreshold": {
      "ActionThresholdValue": 0,
      "ActionThresholdType": "PERCENTAGE"
    },
    "Definition": {
      "IamActionDefinition": {
        "PolicyArn": {},
        "Roles": {},
        "Groups": {},
        "Users": {}
      },
      "ScpActionDefinition": {
        "PolicyId": {},
        "TargetIds": {}
      },
      "SsmActionDefinition": {
        "ActionSubType": {},
        "Region": {},
        "InstanceIds": {}
      }
    },
    "ExecutionRoleArn": {},
    "ApprovalModel": {},
    "Status": {},
    "Subscribers": [
      {
        "SubscriptionType": {},
        "Address": {}
      }
    ]
  },
  "NewAction": {
    "ActionId": {},
    "BudgetName": "string",
    "NotificationType": "ACTUAL",
    "ActionType": {},
    "ActionThreshold": {
      "ActionThresholdValue": 0,
      "ActionThresholdType": "PERCENTAGE"
    },
    "Definition": {
      "IamActionDefinition": {
        "PolicyArn": {},
        "Roles": {},
        "Groups": {},
        "Users": {}
      },
      "ScpActionDefinition": {
        "PolicyId": {},
        "TargetIds": {}
      },
      "SsmActionDefinition": {
        "ActionSubType": {},
        "Region": {},
        "InstanceIds": {}
      }
    },
    "ExecutionRoleArn": {},
    "ApprovalModel": {},
    "Status": {},
    "Subscribers": [
      {
        "SubscriptionType": {},
        "Address": {}
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|The account ID of the user. It's a 12-digit number.|
|BudgetName|[BudgetName](#schemabudgetname)|true|none| A string that represents the budget name. The ":" and "\" characters aren't allowed.|
|OldAction|object|true|none|none|
|NewAction|object|true|none|none|

<h2 id="tocS_UpdateBudgetActionRequest">UpdateBudgetActionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebudgetactionrequest"></a>
<a id="schema_UpdateBudgetActionRequest"></a>
<a id="tocSupdatebudgetactionrequest"></a>
<a id="tocsupdatebudgetactionrequest"></a>

```json
{
  "AccountId": "stringstring",
  "BudgetName": "string",
  "ActionId": {},
  "NotificationType": "ACTUAL",
  "ActionThreshold": {
    "ActionThresholdValue": 0,
    "ActionThresholdType": "PERCENTAGE"
  },
  "Definition": {
    "IamActionDefinition": {
      "PolicyArn": {},
      "Roles": {},
      "Groups": {},
      "Users": {}
    },
    "ScpActionDefinition": {
      "PolicyId": {},
      "TargetIds": {}
    },
    "SsmActionDefinition": {
      "ActionSubType": {},
      "Region": {},
      "InstanceIds": {}
    }
  },
  "ExecutionRoleArn": {},
  "ApprovalModel": {},
  "Subscribers": [
    {
      "SubscriptionType": {},
      "Address": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|The account ID of the user. It's a 12-digit number.|
|BudgetName|[BudgetName](#schemabudgetname)|true|none| A string that represents the budget name. The ":" and "\" characters aren't allowed.|
|ActionId|object|true|none|none|
|NotificationType|[NotificationType](#schemanotificationtype)|false|none| The type of a notification. It must be ACTUAL or FORECASTED.|
|ActionThreshold|[ActionThreshold](#schemaactionthreshold)|false|none|The trigger threshold of the action. |
|Definition|[Definition](#schemadefinition)|false|none|Specifies all of the type-specific parameters. |
|ExecutionRoleArn|object|false|none|none|
|ApprovalModel|object|false|none|none|
|Subscribers|[Subscribers](#schemasubscribers)|false|none| A list of subscribers.|

#### Enumerated Values

|Property|Value|
|---|---|
|NotificationType|ACTUAL|
|NotificationType|FORECASTED|

<h2 id="tocS_UpdateNotificationResponse">UpdateNotificationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenotificationresponse"></a>
<a id="schema_UpdateNotificationResponse"></a>
<a id="tocSupdatenotificationresponse"></a>
<a id="tocsupdatenotificationresponse"></a>

```json
{}
```

 Response of UpdateNotification

<h2 id="tocS_UpdateNotificationRequest">UpdateNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenotificationrequest"></a>
<a id="schema_UpdateNotificationRequest"></a>
<a id="tocSupdatenotificationrequest"></a>
<a id="tocsupdatenotificationrequest"></a>

```json
{
  "AccountId": {},
  "BudgetName": {},
  "OldNotification": {
    "NotificationType": {},
    "ComparisonOperator": {},
    "Threshold": {},
    "ThresholdType": {},
    "NotificationState": {}
  },
  "NewNotification": {
    "NotificationType": {},
    "ComparisonOperator": {},
    "Threshold": {},
    "ThresholdType": {},
    "NotificationState": {}
  }
}
```

 Request of UpdateNotification

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|true|none|none|
|BudgetName|object|true|none|none|
|OldNotification|object|true|none|none|
|NewNotification|object|true|none|none|

<h2 id="tocS_UpdateSubscriberResponse">UpdateSubscriberResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesubscriberresponse"></a>
<a id="schema_UpdateSubscriberResponse"></a>
<a id="tocSupdatesubscriberresponse"></a>
<a id="tocsupdatesubscriberresponse"></a>

```json
{}
```

 Response of UpdateSubscriber

<h2 id="tocS_UpdateSubscriberRequest">UpdateSubscriberRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesubscriberrequest"></a>
<a id="schema_UpdateSubscriberRequest"></a>
<a id="tocSupdatesubscriberrequest"></a>
<a id="tocsupdatesubscriberrequest"></a>

```json
{
  "AccountId": {},
  "BudgetName": {},
  "Notification": {
    "NotificationType": {},
    "ComparisonOperator": {},
    "Threshold": {},
    "ThresholdType": {},
    "NotificationState": {}
  },
  "OldSubscriber": {
    "SubscriptionType": {},
    "Address": {}
  },
  "NewSubscriber": {
    "SubscriptionType": {},
    "Address": {}
  }
}
```

 Request of UpdateSubscriber

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|true|none|none|
|BudgetName|object|true|none|none|
|Notification|object|true|none|none|
|OldSubscriber|object|true|none|none|
|NewSubscriber|object|true|none|none|

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"stringstring"
```

The account ID of the user. It's a 12-digit number.

<h2 id="tocS_ActionId">ActionId</h2>
<!-- backwards compatibility -->
<a id="schemaactionid"></a>
<a id="schema_ActionId"></a>
<a id="tocSactionid"></a>
<a id="tocsactionid"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_BudgetName">BudgetName</h2>
<!-- backwards compatibility -->
<a id="schemabudgetname"></a>
<a id="schema_BudgetName"></a>
<a id="tocSbudgetname"></a>
<a id="tocsbudgetname"></a>

```json
"string"
```

 A string that represents the budget name. The ":" and "\" characters aren't allowed.

<h2 id="tocS_NotificationType">NotificationType</h2>
<!-- backwards compatibility -->
<a id="schemanotificationtype"></a>
<a id="schema_NotificationType"></a>
<a id="tocSnotificationtype"></a>
<a id="tocsnotificationtype"></a>

```json
"ACTUAL"
```

 The type of a notification. It must be ACTUAL or FORECASTED.

<h2 id="tocS_ActionType">ActionType</h2>
<!-- backwards compatibility -->
<a id="schemaactiontype"></a>
<a id="schema_ActionType"></a>
<a id="tocSactiontype"></a>
<a id="tocsactiontype"></a>

```json
"APPLY_IAM_POLICY"
```

<h2 id="tocS_ActionThreshold">ActionThreshold</h2>
<!-- backwards compatibility -->
<a id="schemaactionthreshold"></a>
<a id="schema_ActionThreshold"></a>
<a id="tocSactionthreshold"></a>
<a id="tocsactionthreshold"></a>

```json
{
  "ActionThresholdValue": 0,
  "ActionThresholdType": "PERCENTAGE"
}
```

The trigger threshold of the action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActionThresholdValue|[NotificationThreshold](#schemanotificationthreshold)|true|none| The threshold of a notification.|
|ActionThresholdType|[ThresholdType](#schemathresholdtype)|true|none| The type of threshold for a notification.|

#### Enumerated Values

|Property|Value|
|---|---|
|ActionThresholdType|PERCENTAGE|
|ActionThresholdType|ABSOLUTE_VALUE|

<h2 id="tocS_Definition">Definition</h2>
<!-- backwards compatibility -->
<a id="schemadefinition"></a>
<a id="schema_Definition"></a>
<a id="tocSdefinition"></a>
<a id="tocsdefinition"></a>

```json
{
  "IamActionDefinition": {
    "PolicyArn": {},
    "Roles": {},
    "Groups": {},
    "Users": {}
  },
  "ScpActionDefinition": {
    "PolicyId": {},
    "TargetIds": {}
  },
  "SsmActionDefinition": {
    "ActionSubType": {},
    "Region": {},
    "InstanceIds": {}
  }
}
```

Specifies all of the type-specific parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IamActionDefinition|object|false|none|none|
|ScpActionDefinition|object|false|none|none|
|SsmActionDefinition|object|false|none|none|

<h2 id="tocS_RoleArn">RoleArn</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleArn"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"stringstringstringstringstringst"
```

<h2 id="tocS_ApprovalModel">ApprovalModel</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalmodel"></a>
<a id="schema_ApprovalModel"></a>
<a id="tocSapprovalmodel"></a>
<a id="tocsapprovalmodel"></a>

```json
"AUTOMATIC"
```

<h2 id="tocS_ActionStatus">ActionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaactionstatus"></a>
<a id="schema_ActionStatus"></a>
<a id="tocSactionstatus"></a>
<a id="tocsactionstatus"></a>

```json
"STANDBY"
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
    "SubscriptionType": {},
    "Address": {}
  }
]
```

 A list of subscribers.

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
{
  "ActionId": {},
  "BudgetName": "string",
  "NotificationType": "ACTUAL",
  "ActionType": {},
  "ActionThreshold": {
    "ActionThresholdValue": 0,
    "ActionThresholdType": "PERCENTAGE"
  },
  "Definition": {
    "IamActionDefinition": {
      "PolicyArn": {},
      "Roles": {},
      "Groups": {},
      "Users": {}
    },
    "ScpActionDefinition": {
      "PolicyId": {},
      "TargetIds": {}
    },
    "SsmActionDefinition": {
      "ActionSubType": {},
      "Region": {},
      "InstanceIds": {}
    }
  },
  "ExecutionRoleArn": {},
  "ApprovalModel": {},
  "Status": {},
  "Subscribers": [
    {
      "SubscriptionType": {},
      "Address": {}
    }
  ]
}
```

A budget action resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActionId|object|true|none|none|
|BudgetName|[BudgetName](#schemabudgetname)|true|none| A string that represents the budget name. The ":" and "\" characters aren't allowed.|
|NotificationType|[NotificationType](#schemanotificationtype)|true|none| The type of a notification. It must be ACTUAL or FORECASTED.|
|ActionType|object|true|none|none|
|ActionThreshold|object|true|none|none|
|Definition|object|true|none|none|
|ExecutionRoleArn|object|true|none|none|
|ApprovalModel|object|true|none|none|
|Status|object|true|none|none|
|Subscribers|[Subscribers](#schemasubscribers)|true|none| A list of subscribers.|

#### Enumerated Values

|Property|Value|
|---|---|
|NotificationType|ACTUAL|
|NotificationType|FORECASTED|

<h2 id="tocS_ActionHistory">ActionHistory</h2>
<!-- backwards compatibility -->
<a id="schemaactionhistory"></a>
<a id="schema_ActionHistory"></a>
<a id="tocSactionhistory"></a>
<a id="tocsactionhistory"></a>

```json
{
  "Timestamp": "1970-01-01T00:00:00Z",
  "Status": {},
  "EventType": {},
  "ActionHistoryDetails": {
    "Message": "string",
    "Action": {
      "ActionId": {},
      "BudgetName": "string",
      "NotificationType": "ACTUAL",
      "ActionType": {},
      "ActionThreshold": {
        "ActionThresholdValue": 0,
        "ActionThresholdType": "PERCENTAGE"
      },
      "Definition": {
        "IamActionDefinition": {
          "PolicyArn": {},
          "Roles": {},
          "Groups": {},
          "Users": {}
        },
        "ScpActionDefinition": {
          "PolicyId": {},
          "TargetIds": {}
        },
        "SsmActionDefinition": {
          "ActionSubType": {},
          "Region": {},
          "InstanceIds": {}
        }
      },
      "ExecutionRoleArn": {},
      "ApprovalModel": {},
      "Status": {},
      "Subscribers": [
        {
          "SubscriptionType": {},
          "Address": {}
        }
      ]
    }
  }
}
```

The historical records for a budget action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Timestamp|[GenericTimestamp](#schemagenerictimestamp)|true|none| A generic time stamp. In Java, it's transformed to a <code>Date</code> object.|
|Status|object|true|none|none|
|EventType|object|true|none|none|
|ActionHistoryDetails|object|true|none|none|

<h2 id="tocS_ActionHistories">ActionHistories</h2>
<!-- backwards compatibility -->
<a id="schemaactionhistories"></a>
<a id="schema_ActionHistories"></a>
<a id="tocSactionhistories"></a>
<a id="tocsactionhistories"></a>

```json
[
  {
    "Timestamp": "1970-01-01T00:00:00Z",
    "Status": {},
    "EventType": {},
    "ActionHistoryDetails": {
      "Message": "string",
      "Action": {
        "ActionId": {},
        "BudgetName": "string",
        "NotificationType": "ACTUAL",
        "ActionType": {},
        "ActionThreshold": {
          "ActionThresholdValue": 0,
          "ActionThresholdType": "PERCENTAGE"
        },
        "Definition": {
          "IamActionDefinition": {
            "PolicyArn": {},
            "Roles": {},
            "Groups": {},
            "Users": {}
          },
          "ScpActionDefinition": {
            "PolicyId": {},
            "TargetIds": {}
          },
          "SsmActionDefinition": {
            "ActionSubType": {},
            "Region": {},
            "InstanceIds": {}
          }
        },
        "ExecutionRoleArn": {},
        "ApprovalModel": {},
        "Status": {},
        "Subscribers": [
          {
            "SubscriptionType": {},
            "Address": {}
          }
        ]
      }
    }
  }
]
```

<h2 id="tocS_GenericTimestamp">GenericTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemagenerictimestamp"></a>
<a id="schema_GenericTimestamp"></a>
<a id="tocSgenerictimestamp"></a>
<a id="tocsgenerictimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

 A generic time stamp. In Java, it's transformed to a <code>Date</code> object.

<h2 id="tocS_EventType">EventType</h2>
<!-- backwards compatibility -->
<a id="schemaeventtype"></a>
<a id="schema_EventType"></a>
<a id="tocSeventtype"></a>
<a id="tocseventtype"></a>

```json
"SYSTEM"
```

<h2 id="tocS_ActionHistoryDetails">ActionHistoryDetails</h2>
<!-- backwards compatibility -->
<a id="schemaactionhistorydetails"></a>
<a id="schema_ActionHistoryDetails"></a>
<a id="tocSactionhistorydetails"></a>
<a id="tocsactionhistorydetails"></a>

```json
{
  "Message": "string",
  "Action": {
    "ActionId": {},
    "BudgetName": "string",
    "NotificationType": "ACTUAL",
    "ActionType": {},
    "ActionThreshold": {
      "ActionThresholdValue": 0,
      "ActionThresholdType": "PERCENTAGE"
    },
    "Definition": {
      "IamActionDefinition": {
        "PolicyArn": {},
        "Roles": {},
        "Groups": {},
        "Users": {}
      },
      "ScpActionDefinition": {
        "PolicyId": {},
        "TargetIds": {}
      },
      "SsmActionDefinition": {
        "ActionSubType": {},
        "Region": {},
        "InstanceIds": {}
      }
    },
    "ExecutionRoleArn": {},
    "ApprovalModel": {},
    "Status": {},
    "Subscribers": [
      {
        "SubscriptionType": {},
        "Address": {}
      }
    ]
  }
}
```

The description of the details for the event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|[GenericString](#schemagenericstring)|true|none| A generic string.|
|Action|object|true|none|none|

<h2 id="tocS_GenericString">GenericString</h2>
<!-- backwards compatibility -->
<a id="schemagenericstring"></a>
<a id="schema_GenericString"></a>
<a id="tocSgenericstring"></a>
<a id="tocsgenericstring"></a>

```json
"string"
```

 A generic string.

<h2 id="tocS_ActionSubType">ActionSubType</h2>
<!-- backwards compatibility -->
<a id="schemaactionsubtype"></a>
<a id="schema_ActionSubType"></a>
<a id="tocSactionsubtype"></a>
<a id="tocsactionsubtype"></a>

```json
"STOP_EC2_INSTANCES"
```

<h2 id="tocS_NotificationThreshold">NotificationThreshold</h2>
<!-- backwards compatibility -->
<a id="schemanotificationthreshold"></a>
<a id="schema_NotificationThreshold"></a>
<a id="tocSnotificationthreshold"></a>
<a id="tocsnotificationthreshold"></a>

```json
0
```

 The threshold of a notification.

<h2 id="tocS_ThresholdType">ThresholdType</h2>
<!-- backwards compatibility -->
<a id="schemathresholdtype"></a>
<a id="schema_ThresholdType"></a>
<a id="tocSthresholdtype"></a>
<a id="tocsthresholdtype"></a>

```json
"PERCENTAGE"
```

 The type of threshold for a notification.

<h2 id="tocS_Actions">Actions</h2>
<!-- backwards compatibility -->
<a id="schemaactions"></a>
<a id="schema_Actions"></a>
<a id="tocSactions"></a>
<a id="tocsactions"></a>

```json
[
  {
    "ActionId": {},
    "BudgetName": "string",
    "NotificationType": "ACTUAL",
    "ActionType": {},
    "ActionThreshold": {
      "ActionThresholdValue": 0,
      "ActionThresholdType": "PERCENTAGE"
    },
    "Definition": {
      "IamActionDefinition": {
        "PolicyArn": {},
        "Roles": {},
        "Groups": {},
        "Users": {}
      },
      "ScpActionDefinition": {
        "PolicyId": {},
        "TargetIds": {}
      },
      "SsmActionDefinition": {
        "ActionSubType": {},
        "Region": {},
        "InstanceIds": {}
      }
    },
    "ExecutionRoleArn": {},
    "ApprovalModel": {},
    "Status": {},
    "Subscribers": [
      {
        "SubscriptionType": {},
        "Address": {}
      }
    ]
  }
]
```

<h2 id="tocS_AdjustmentPeriod">AdjustmentPeriod</h2>
<!-- backwards compatibility -->
<a id="schemaadjustmentperiod"></a>
<a id="schema_AdjustmentPeriod"></a>
<a id="tocSadjustmentperiod"></a>
<a id="tocsadjustmentperiod"></a>

```json
1
```

<h2 id="tocS_AutoAdjustType">AutoAdjustType</h2>
<!-- backwards compatibility -->
<a id="schemaautoadjusttype"></a>
<a id="schema_AutoAdjustType"></a>
<a id="tocSautoadjusttype"></a>
<a id="tocsautoadjusttype"></a>

```json
"HISTORICAL"
```

<h2 id="tocS_HistoricalOptions">HistoricalOptions</h2>
<!-- backwards compatibility -->
<a id="schemahistoricaloptions"></a>
<a id="schema_HistoricalOptions"></a>
<a id="tocShistoricaloptions"></a>
<a id="tocshistoricaloptions"></a>

```json
{
  "BudgetAdjustmentPeriod": {},
  "LookBackAvailablePeriods": {}
}
```

The parameters that define or describe the historical data that your auto-adjusting budget is based on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BudgetAdjustmentPeriod|object|true|none|none|
|LookBackAvailablePeriods|object|false|none|none|

<h2 id="tocS_AutoAdjustData">AutoAdjustData</h2>
<!-- backwards compatibility -->
<a id="schemaautoadjustdata"></a>
<a id="schema_AutoAdjustData"></a>
<a id="tocSautoadjustdata"></a>
<a id="tocsautoadjustdata"></a>

```json
{
  "AutoAdjustType": {},
  "HistoricalOptions": {
    "BudgetAdjustmentPeriod": {},
    "LookBackAvailablePeriods": {}
  },
  "LastAutoAdjustTime": {}
}
```

The parameters that determine the budget amount for an auto-adjusting budget.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoAdjustType|object|true|none|none|
|HistoricalOptions|object|false|none|none|
|LastAutoAdjustTime|object|false|none|none|

<h2 id="tocS_Spend">Spend</h2>
<!-- backwards compatibility -->
<a id="schemaspend"></a>
<a id="schema_Spend"></a>
<a id="tocSspend"></a>
<a id="tocsspend"></a>

```json
{
  "Amount": {},
  "Unit": {}
}
```

<p>The amount of cost or usage that's measured for a budget.</p> <p>For example, a <code>Spend</code> for <code>3 GB</code> of S3 usage has the following parameters:</p> <ul> <li> <p>An <code>Amount</code> of <code>3</code> </p> </li> <li> <p>A <code>unit</code> of <code>GB</code> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|object|true|none|none|
|Unit|object|true|none|none|

<h2 id="tocS_PlannedBudgetLimits">PlannedBudgetLimits</h2>
<!-- backwards compatibility -->
<a id="schemaplannedbudgetlimits"></a>
<a id="schema_PlannedBudgetLimits"></a>
<a id="tocSplannedbudgetlimits"></a>
<a id="tocsplannedbudgetlimits"></a>

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
|**additionalProperties**|[Spend](#schemaspend)|false|none|<p>The amount of cost or usage that's measured for a budget.</p> <p>For example, a <code>Spend</code> for <code>3 GB</code> of S3 usage has the following parameters:</p> <ul> <li> <p>An <code>Amount</code> of <code>3</code> </p> </li> <li> <p>A <code>unit</code> of <code>GB</code> </p> </li> </ul>|

<h2 id="tocS_CostFilters">CostFilters</h2>
<!-- backwards compatibility -->
<a id="schemacostfilters"></a>
<a id="schema_CostFilters"></a>
<a id="tocScostfilters"></a>
<a id="tocscostfilters"></a>

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

 A map that represents the cost filters that are applied to the budget.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[DimensionValues](#schemadimensionvalues)|false|none|none|

<h2 id="tocS_CostTypes">CostTypes</h2>
<!-- backwards compatibility -->
<a id="schemacosttypes"></a>
<a id="schema_CostTypes"></a>
<a id="tocScosttypes"></a>
<a id="tocscosttypes"></a>

```json
{
  "IncludeTax": {},
  "IncludeSubscription": {},
  "UseBlended": {},
  "IncludeRefund": {},
  "IncludeCredit": {},
  "IncludeUpfront": {},
  "IncludeRecurring": {},
  "IncludeOtherSubscription": {},
  "IncludeSupport": {},
  "IncludeDiscount": {},
  "UseAmortized": {}
}
```

<p>The types of cost that are included in a <code>COST</code> budget, such as tax and subscriptions.</p> <p> <code>USAGE</code>, <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>, <code>SAVINGS_PLANS_UTILIZATION</code>, and <code>SAVINGS_PLANS_COVERAGE</code> budgets don't have <code>CostTypes</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IncludeTax|object|false|none|none|
|IncludeSubscription|object|false|none|none|
|UseBlended|object|false|none|none|
|IncludeRefund|object|false|none|none|
|IncludeCredit|object|false|none|none|
|IncludeUpfront|object|false|none|none|
|IncludeRecurring|object|false|none|none|
|IncludeOtherSubscription|object|false|none|none|
|IncludeSupport|object|false|none|none|
|IncludeDiscount|object|false|none|none|
|UseAmortized|object|false|none|none|

<h2 id="tocS_TimeUnit">TimeUnit</h2>
<!-- backwards compatibility -->
<a id="schematimeunit"></a>
<a id="schema_TimeUnit"></a>
<a id="tocStimeunit"></a>
<a id="tocstimeunit"></a>

```json
"DAILY"
```

 The time unit of the budget, such as MONTHLY or QUARTERLY.

<h2 id="tocS_TimePeriod">TimePeriod</h2>
<!-- backwards compatibility -->
<a id="schematimeperiod"></a>
<a id="schema_TimePeriod"></a>
<a id="tocStimeperiod"></a>
<a id="tocstimeperiod"></a>

```json
{
  "Start": {},
  "End": {}
}
```

The period of time that's covered by a budget. The period has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Start|object|false|none|none|
|End|object|false|none|none|

<h2 id="tocS_CalculatedSpend">CalculatedSpend</h2>
<!-- backwards compatibility -->
<a id="schemacalculatedspend"></a>
<a id="schema_CalculatedSpend"></a>
<a id="tocScalculatedspend"></a>
<a id="tocscalculatedspend"></a>

```json
{
  "ActualSpend": {
    "Amount": {},
    "Unit": {}
  },
  "ForecastedSpend": {
    "Amount": {},
    "Unit": {}
  }
}
```

<p>The spend objects that are associated with this budget. The <code>actualSpend</code> tracks how much you've used, cost, usage, RI units, or Savings Plans units and the <code>forecastedSpend</code> tracks how much that you're predicted to spend based on your historical usage profile.</p> <p>For example, if it's the 20th of the month and you have spent <code>50</code> dollars on Amazon EC2, your <code>actualSpend</code> is <code>50 USD</code>, and your <code>forecastedSpend</code> is <code>75 USD</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActualSpend|object|true|none|none|
|ForecastedSpend|object|false|none|none|

<h2 id="tocS_BudgetType">BudgetType</h2>
<!-- backwards compatibility -->
<a id="schemabudgettype"></a>
<a id="schema_BudgetType"></a>
<a id="tocSbudgettype"></a>
<a id="tocsbudgettype"></a>

```json
"USAGE"
```

<p> The type of a budget. It must be one of the following types: </p> <p> <code>COST</code>, <code>USAGE</code>, <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>, <code>SAVINGS_PLANS_UTILIZATION</code>, or <code>SAVINGS_PLANS_COVERAGE</code>.</p>

<h2 id="tocS_Budget">Budget</h2>
<!-- backwards compatibility -->
<a id="schemabudget"></a>
<a id="schema_Budget"></a>
<a id="tocSbudget"></a>
<a id="tocsbudget"></a>

```json
{
  "BudgetName": {},
  "BudgetLimit": {
    "Amount": {},
    "Unit": {}
  },
  "PlannedBudgetLimits": {
    "property1": {
      "Amount": {},
      "Unit": {}
    },
    "property2": {
      "Amount": {},
      "Unit": {}
    }
  },
  "CostFilters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "CostTypes": {
    "IncludeTax": {},
    "IncludeSubscription": {},
    "UseBlended": {},
    "IncludeRefund": {},
    "IncludeCredit": {},
    "IncludeUpfront": {},
    "IncludeRecurring": {},
    "IncludeOtherSubscription": {},
    "IncludeSupport": {},
    "IncludeDiscount": {},
    "UseAmortized": {}
  },
  "TimeUnit": {},
  "TimePeriod": {
    "Start": {},
    "End": {}
  },
  "CalculatedSpend": {
    "ActualSpend": {
      "Amount": {},
      "Unit": {}
    },
    "ForecastedSpend": {
      "Amount": {},
      "Unit": {}
    }
  },
  "BudgetType": {},
  "LastUpdatedTime": {},
  "AutoAdjustData": {
    "AutoAdjustType": {},
    "HistoricalOptions": {
      "BudgetAdjustmentPeriod": {},
      "LookBackAvailablePeriods": {}
    },
    "LastAutoAdjustTime": {}
  }
}
```

<p>Represents the output of the <code>CreateBudget</code> operation. The content consists of the detailed metadata and data file information, and the current status of the <code>budget</code> object.</p> <p>This is the Amazon Resource Name (ARN) pattern for a budget: </p> <p> <code>arn:aws:budgets::AccountId:budget/budgetName</code> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BudgetName|object|true|none|none|
|BudgetLimit|object|false|none|none|
|PlannedBudgetLimits|object|false|none|none|
|CostFilters|object|false|none|none|
|CostTypes|object|false|none|none|
|TimeUnit|object|true|none|none|
|TimePeriod|object|false|none|none|
|CalculatedSpend|object|false|none|none|
|BudgetType|object|true|none|none|
|LastUpdatedTime|object|false|none|none|
|AutoAdjustData|object|false|none|none|

<h2 id="tocS_Notifications">Notifications</h2>
<!-- backwards compatibility -->
<a id="schemanotifications"></a>
<a id="schema_Notifications"></a>
<a id="tocSnotifications"></a>
<a id="tocsnotifications"></a>

```json
[
  {
    "NotificationType": {},
    "ComparisonOperator": {},
    "Threshold": {},
    "ThresholdType": {},
    "NotificationState": {}
  }
]
```

 A list of notifications.

<h2 id="tocS_BudgetNotificationsForAccount">BudgetNotificationsForAccount</h2>
<!-- backwards compatibility -->
<a id="schemabudgetnotificationsforaccount"></a>
<a id="schema_BudgetNotificationsForAccount"></a>
<a id="tocSbudgetnotificationsforaccount"></a>
<a id="tocsbudgetnotificationsforaccount"></a>

```json
{
  "Notifications": [
    {
      "NotificationType": {},
      "ComparisonOperator": {},
      "Threshold": {},
      "ThresholdType": {},
      "NotificationState": {}
    }
  ],
  "BudgetName": "string"
}
```

 The budget name and associated notifications for an account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Notifications|[Notifications](#schemanotifications)|false|none| A list of notifications.|
|BudgetName|[BudgetName](#schemabudgetname)|false|none| A string that represents the budget name. The ":" and "\" characters aren't allowed.|

<h2 id="tocS_BudgetNotificationsForAccountList">BudgetNotificationsForAccountList</h2>
<!-- backwards compatibility -->
<a id="schemabudgetnotificationsforaccountlist"></a>
<a id="schema_BudgetNotificationsForAccountList"></a>
<a id="tocSbudgetnotificationsforaccountlist"></a>
<a id="tocsbudgetnotificationsforaccountlist"></a>

```json
[
  {
    "Notifications": [
      {
        "NotificationType": {},
        "ComparisonOperator": {},
        "Threshold": {},
        "ThresholdType": {},
        "NotificationState": {}
      }
    ],
    "BudgetName": "string"
  }
]
```

<h2 id="tocS_BudgetedAndActualAmountsList">BudgetedAndActualAmountsList</h2>
<!-- backwards compatibility -->
<a id="schemabudgetedandactualamountslist"></a>
<a id="schema_BudgetedAndActualAmountsList"></a>
<a id="tocSbudgetedandactualamountslist"></a>
<a id="tocsbudgetedandactualamountslist"></a>

```json
[
  {
    "BudgetedAmount": {
      "Amount": {},
      "Unit": {}
    },
    "ActualAmount": {
      "Amount": {},
      "Unit": {}
    },
    "TimePeriod": {
      "Start": {},
      "End": {}
    }
  }
]
```

<h2 id="tocS_BudgetPerformanceHistory">BudgetPerformanceHistory</h2>
<!-- backwards compatibility -->
<a id="schemabudgetperformancehistory"></a>
<a id="schema_BudgetPerformanceHistory"></a>
<a id="tocSbudgetperformancehistory"></a>
<a id="tocsbudgetperformancehistory"></a>

```json
{
  "BudgetName": "string",
  "BudgetType": "USAGE",
  "CostFilters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "CostTypes": {
    "IncludeTax": {},
    "IncludeSubscription": {},
    "UseBlended": {},
    "IncludeRefund": {},
    "IncludeCredit": {},
    "IncludeUpfront": {},
    "IncludeRecurring": {},
    "IncludeOtherSubscription": {},
    "IncludeSupport": {},
    "IncludeDiscount": {},
    "UseAmortized": {}
  },
  "TimeUnit": "DAILY",
  "BudgetedAndActualAmountsList": {}
}
```

A history of the state of a budget at the end of the budget's specified time period.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BudgetName|[BudgetName](#schemabudgetname)|false|none| A string that represents the budget name. The ":" and "\" characters aren't allowed.|
|BudgetType|[BudgetType](#schemabudgettype)|false|none|<p> The type of a budget. It must be one of the following types: </p> <p> <code>COST</code>, <code>USAGE</code>, <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>, <code>SAVINGS_PLANS_UTILIZATION</code>, or <code>SAVINGS_PLANS_COVERAGE</code>.</p>|
|CostFilters|object|false|none|none|
|CostTypes|object|false|none|none|
|TimeUnit|[TimeUnit](#schematimeunit)|false|none| The time unit of the budget, such as MONTHLY or QUARTERLY.|
|BudgetedAndActualAmountsList|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|BudgetType|USAGE|
|BudgetType|COST|
|BudgetType|RI_UTILIZATION|
|BudgetType|RI_COVERAGE|
|BudgetType|SAVINGS_PLANS_UTILIZATION|
|BudgetType|SAVINGS_PLANS_COVERAGE|
|TimeUnit|DAILY|
|TimeUnit|MONTHLY|
|TimeUnit|QUARTERLY|
|TimeUnit|ANNUALLY|

<h2 id="tocS_BudgetedAndActualAmounts">BudgetedAndActualAmounts</h2>
<!-- backwards compatibility -->
<a id="schemabudgetedandactualamounts"></a>
<a id="schema_BudgetedAndActualAmounts"></a>
<a id="tocSbudgetedandactualamounts"></a>
<a id="tocsbudgetedandactualamounts"></a>

```json
{
  "BudgetedAmount": {
    "Amount": {},
    "Unit": {}
  },
  "ActualAmount": {
    "Amount": {},
    "Unit": {}
  },
  "TimePeriod": {
    "Start": {},
    "End": {}
  }
}
```

The amount of cost or usage that you created the budget for, compared to your actual costs or usage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BudgetedAmount|object|false|none|none|
|ActualAmount|object|false|none|none|
|TimePeriod|object|false|none|none|

<h2 id="tocS_Budgets">Budgets</h2>
<!-- backwards compatibility -->
<a id="schemabudgets"></a>
<a id="schema_Budgets"></a>
<a id="tocSbudgets"></a>
<a id="tocsbudgets"></a>

```json
[
  {
    "BudgetName": {},
    "BudgetLimit": {
      "Amount": {},
      "Unit": {}
    },
    "PlannedBudgetLimits": {
      "property1": {
        "Amount": {},
        "Unit": {}
      },
      "property2": {
        "Amount": {},
        "Unit": {}
      }
    },
    "CostFilters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "CostTypes": {
      "IncludeTax": {},
      "IncludeSubscription": {},
      "UseBlended": {},
      "IncludeRefund": {},
      "IncludeCredit": {},
      "IncludeUpfront": {},
      "IncludeRecurring": {},
      "IncludeOtherSubscription": {},
      "IncludeSupport": {},
      "IncludeDiscount": {},
      "UseAmortized": {}
    },
    "TimeUnit": {},
    "TimePeriod": {
      "Start": {},
      "End": {}
    },
    "CalculatedSpend": {
      "ActualSpend": {
        "Amount": {},
        "Unit": {}
      },
      "ForecastedSpend": {
        "Amount": {},
        "Unit": {}
      }
    },
    "BudgetType": {},
    "LastUpdatedTime": {},
    "AutoAdjustData": {
      "AutoAdjustType": {},
      "HistoricalOptions": {
        "BudgetAdjustmentPeriod": {},
        "LookBackAvailablePeriods": {}
      },
      "LastAutoAdjustTime": {}
    }
  }
]
```

 A list of budgets.

<h2 id="tocS_ComparisonOperator">ComparisonOperator</h2>
<!-- backwards compatibility -->
<a id="schemacomparisonoperator"></a>
<a id="schema_ComparisonOperator"></a>
<a id="tocScomparisonoperator"></a>
<a id="tocscomparisonoperator"></a>

```json
"GREATER_THAN"
```

<p> The comparison operator of a notification. Currently, the service supports the following operators:</p> <p> <code>GREATER_THAN</code>, <code>LESS_THAN</code>, <code>EQUAL_TO</code> </p>

<h2 id="tocS_DimensionValues">DimensionValues</h2>
<!-- backwards compatibility -->
<a id="schemadimensionvalues"></a>
<a id="schema_DimensionValues"></a>
<a id="tocSdimensionvalues"></a>
<a id="tocsdimensionvalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_NullableBoolean">NullableBoolean</h2>
<!-- backwards compatibility -->
<a id="schemanullableboolean"></a>
<a id="schema_NullableBoolean"></a>
<a id="tocSnullableboolean"></a>
<a id="tocsnullableboolean"></a>

```json
true
```

<h2 id="tocS_NotificationWithSubscribersList">NotificationWithSubscribersList</h2>
<!-- backwards compatibility -->
<a id="schemanotificationwithsubscriberslist"></a>
<a id="schema_NotificationWithSubscribersList"></a>
<a id="tocSnotificationwithsubscriberslist"></a>
<a id="tocsnotificationwithsubscriberslist"></a>

```json
[
  {
    "Notification": {
      "NotificationType": {},
      "ComparisonOperator": {},
      "Threshold": {},
      "ThresholdType": {},
      "NotificationState": {}
    },
    "Subscribers": {}
  }
]
```

 A list of notifications, each with a list of subscribers.

<h2 id="tocS_Notification">Notification</h2>
<!-- backwards compatibility -->
<a id="schemanotification"></a>
<a id="schema_Notification"></a>
<a id="tocSnotification"></a>
<a id="tocsnotification"></a>

```json
{
  "NotificationType": {},
  "ComparisonOperator": {},
  "Threshold": {},
  "ThresholdType": {},
  "NotificationState": {}
}
```

<p>A notification that's associated with a budget. A budget can have up to ten notifications. </p> <p>Each notification must have at least one subscriber. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.</p> <p>For example, if you have a budget for 200 dollars and you want to be notified when you go over 160 dollars, create a notification with the following parameters:</p> <ul> <li> <p>A notificationType of <code>ACTUAL</code> </p> </li> <li> <p>A <code>thresholdType</code> of <code>PERCENTAGE</code> </p> </li> <li> <p>A <code>comparisonOperator</code> of <code>GREATER_THAN</code> </p> </li> <li> <p>A notification <code>threshold</code> of <code>80</code> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationType|object|true|none|none|
|ComparisonOperator|object|true|none|none|
|Threshold|object|true|none|none|
|ThresholdType|object|false|none|none|
|NotificationState|object|false|none|none|

<h2 id="tocS_Subscriber">Subscriber</h2>
<!-- backwards compatibility -->
<a id="schemasubscriber"></a>
<a id="schema_Subscriber"></a>
<a id="tocSsubscriber"></a>
<a id="tocssubscriber"></a>

```json
{
  "SubscriptionType": {},
  "Address": {}
}
```

<p>The subscriber to a budget notification. The subscriber consists of a subscription type and either an Amazon SNS topic or an email address.</p> <p>For example, an email subscriber has the following parameters:</p> <ul> <li> <p>A <code>subscriptionType</code> of <code>EMAIL</code> </p> </li> <li> <p>An <code>address</code> of <code>example@example.com</code> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubscriptionType|object|true|none|none|
|Address|object|true|none|none|

<h2 id="tocS_IamActionDefinition">IamActionDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaiamactiondefinition"></a>
<a id="schema_IamActionDefinition"></a>
<a id="tocSiamactiondefinition"></a>
<a id="tocsiamactiondefinition"></a>

```json
{
  "PolicyArn": {},
  "Roles": {},
  "Groups": {},
  "Users": {}
}
```

The Identity and Access Management (IAM) action definition details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyArn|object|true|none|none|
|Roles|object|false|none|none|
|Groups|object|false|none|none|
|Users|object|false|none|none|

<h2 id="tocS_ScpActionDefinition">ScpActionDefinition</h2>
<!-- backwards compatibility -->
<a id="schemascpactiondefinition"></a>
<a id="schema_ScpActionDefinition"></a>
<a id="tocSscpactiondefinition"></a>
<a id="tocsscpactiondefinition"></a>

```json
{
  "PolicyId": {},
  "TargetIds": {}
}
```

The service control policies (SCP) action definition details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyId|object|true|none|none|
|TargetIds|object|true|none|none|

<h2 id="tocS_SsmActionDefinition">SsmActionDefinition</h2>
<!-- backwards compatibility -->
<a id="schemassmactiondefinition"></a>
<a id="schema_SsmActionDefinition"></a>
<a id="tocSssmactiondefinition"></a>
<a id="tocsssmactiondefinition"></a>

```json
{
  "ActionSubType": {},
  "Region": {},
  "InstanceIds": {}
}
```

The Amazon Web Services Systems Manager (SSM) action definition details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActionSubType|object|true|none|none|
|Region|object|true|none|none|
|InstanceIds|object|true|none|none|

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
```

 An integer that represents how many entries a paginated response contains. The maximum is 100.

<h2 id="tocS_MaxResultsBudgetNotifications">MaxResultsBudgetNotifications</h2>
<!-- backwards compatibility -->
<a id="schemamaxresultsbudgetnotifications"></a>
<a id="schema_MaxResultsBudgetNotifications"></a>
<a id="tocSmaxresultsbudgetnotifications"></a>
<a id="tocsmaxresultsbudgetnotifications"></a>

```json
1
```

<h2 id="tocS_DimensionValue">DimensionValue</h2>
<!-- backwards compatibility -->
<a id="schemadimensionvalue"></a>
<a id="schema_DimensionValue"></a>
<a id="tocSdimensionvalue"></a>
<a id="tocsdimensionvalue"></a>

```json
"string"
```

<h2 id="tocS_ExecutionType">ExecutionType</h2>
<!-- backwards compatibility -->
<a id="schemaexecutiontype"></a>
<a id="schema_ExecutionType"></a>
<a id="tocSexecutiontype"></a>
<a id="tocsexecutiontype"></a>

```json
"APPROVE_BUDGET_ACTION"
```

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
"string"
```

<h2 id="tocS_Groups">Groups</h2>
<!-- backwards compatibility -->
<a id="schemagroups"></a>
<a id="schema_Groups"></a>
<a id="tocSgroups"></a>
<a id="tocsgroups"></a>

```json
[
  "string"
]
```

<h2 id="tocS_PolicyArn">PolicyArn</h2>
<!-- backwards compatibility -->
<a id="schemapolicyarn"></a>
<a id="schema_PolicyArn"></a>
<a id="tocSpolicyarn"></a>
<a id="tocspolicyarn"></a>

```json
"stringstringstringstrings"
```

<h2 id="tocS_Roles">Roles</h2>
<!-- backwards compatibility -->
<a id="schemaroles"></a>
<a id="schema_Roles"></a>
<a id="tocSroles"></a>
<a id="tocsroles"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Users">Users</h2>
<!-- backwards compatibility -->
<a id="schemausers"></a>
<a id="schema_Users"></a>
<a id="tocSusers"></a>
<a id="tocsusers"></a>

```json
[
  "string"
]
```

<h2 id="tocS_InstanceId">InstanceId</h2>
<!-- backwards compatibility -->
<a id="schemainstanceid"></a>
<a id="schema_InstanceId"></a>
<a id="tocSinstanceid"></a>
<a id="tocsinstanceid"></a>

```json
"string"
```

<h2 id="tocS_InstanceIds">InstanceIds</h2>
<!-- backwards compatibility -->
<a id="schemainstanceids"></a>
<a id="schema_InstanceIds"></a>
<a id="tocSinstanceids"></a>
<a id="tocsinstanceids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_NotificationState">NotificationState</h2>
<!-- backwards compatibility -->
<a id="schemanotificationstate"></a>
<a id="schema_NotificationState"></a>
<a id="tocSnotificationstate"></a>
<a id="tocsnotificationstate"></a>

```json
"OK"
```

<h2 id="tocS_NotificationWithSubscribers">NotificationWithSubscribers</h2>
<!-- backwards compatibility -->
<a id="schemanotificationwithsubscribers"></a>
<a id="schema_NotificationWithSubscribers"></a>
<a id="tocSnotificationwithsubscribers"></a>
<a id="tocsnotificationwithsubscribers"></a>

```json
{
  "Notification": {
    "NotificationType": {},
    "ComparisonOperator": {},
    "Threshold": {},
    "ThresholdType": {},
    "NotificationState": {}
  },
  "Subscribers": {}
}
```

A notification with subscribers. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Notification|object|true|none|none|
|Subscribers|object|true|none|none|

<h2 id="tocS_NumericValue">NumericValue</h2>
<!-- backwards compatibility -->
<a id="schemanumericvalue"></a>
<a id="schema_NumericValue"></a>
<a id="tocSnumericvalue"></a>
<a id="tocsnumericvalue"></a>

```json
"string"
```

 A string that represents a numeric value.

<h2 id="tocS_PolicyId">PolicyId</h2>
<!-- backwards compatibility -->
<a id="schemapolicyid"></a>
<a id="schema_PolicyId"></a>
<a id="tocSpolicyid"></a>
<a id="tocspolicyid"></a>

```json
"stringstri"
```

<h2 id="tocS_Region">Region</h2>
<!-- backwards compatibility -->
<a id="schemaregion"></a>
<a id="schema_Region"></a>
<a id="tocSregion"></a>
<a id="tocsregion"></a>

```json
"stringstr"
```

<h2 id="tocS_Role">Role</h2>
<!-- backwards compatibility -->
<a id="schemarole"></a>
<a id="schema_Role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

```json
"string"
```

<h2 id="tocS_TargetIds">TargetIds</h2>
<!-- backwards compatibility -->
<a id="schematargetids"></a>
<a id="schema_TargetIds"></a>
<a id="tocStargetids"></a>
<a id="tocstargetids"></a>

```json
[
  "stringstring"
]
```

<h2 id="tocS_UnitValue">UnitValue</h2>
<!-- backwards compatibility -->
<a id="schemaunitvalue"></a>
<a id="schema_UnitValue"></a>
<a id="tocSunitvalue"></a>
<a id="tocsunitvalue"></a>

```json
"string"
```

 A string that represents the spend unit of a budget. It can't be null or empty.

<h2 id="tocS_SubscriptionType">SubscriptionType</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptiontype"></a>
<a id="schema_SubscriptionType"></a>
<a id="tocSsubscriptiontype"></a>
<a id="tocssubscriptiontype"></a>

```json
"SNS"
```

 The subscription type of the subscriber. It can be SMS or EMAIL.

<h2 id="tocS_SubscriberAddress">SubscriberAddress</h2>
<!-- backwards compatibility -->
<a id="schemasubscriberaddress"></a>
<a id="schema_SubscriberAddress"></a>
<a id="tocSsubscriberaddress"></a>
<a id="tocssubscriberaddress"></a>

```json
"password"
```

 A string that contains an email address or SNS topic for the subscriber's address.

<h2 id="tocS_TargetId">TargetId</h2>
<!-- backwards compatibility -->
<a id="schematargetid"></a>
<a id="schema_TargetId"></a>
<a id="tocStargetid"></a>
<a id="tocstargetid"></a>

```json
"stringstring"
```

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
"string"
```
